/* Trilingua app logic: state, spaced repetition, gamification, views */
"use strict";

/* ---------- state ---------- */
const KEY = "trilingua-v1";
const DAY = 86400000;
const SRS_STEPS = [1, 3, 7, 16, 35, 90]; // days: shorter intervals first, then weeks, then months

function blankProfile() {
  return { xp: 0, level: 1, streak: 0, lastDay: null,
           srs: {}, gstats: {}, custom: [] };
}
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && s.profiles) return s;
  } catch (e) {}
  return { lang: "es", profiles: { es: blankProfile(), de: blankProfile(), ja: blankProfile() } };
}
const S = loadState();
function save() { localStorage.setItem(KEY, JSON.stringify(S)); }
function P() { return S.profiles[S.lang]; }
function L() { return DATA[S.lang]; }

/* ---------- vocab helpers ---------- */
const NEW_PER_SESSION = 10;              // pacing: at most this many unseen words per session
const _vocabCache = {};                  // per-language cache of the merged 2000-word deck
function bandOf(rank) {
  return rank < 100 ? "top 100" : rank < 500 ? "top 500" : rank < 1000 ? "top 1000" : "top 2000";
}
function baseVocab() {                   // starter words + BIGVOCAB, deduped, rank-ordered
  if (_vocabCache[S.lang]) return _vocabCache[S.lang];
  const list = []; const seen = new Set();
  L().vocab.forEach((v, i) => {          // curated starter words keep their categories, lowest ranks
    if (seen.has(v.w)) return; seen.add(v.w);
    list.push({ ...v, id: S.lang + "-v" + i, custom: false, rank: list.length });
  });
  const big = (typeof BIGVOCAB !== "undefined" && BIGVOCAB[S.lang]) || [];
  big.forEach((e, i) => {
    const v = S.lang === "ja" ? { w: e[0], r: e[1], t: e[2] } : { w: e[0], t: e[1] };
    if (seen.has(v.w)) return; seen.add(v.w);
    const rank = list.length;
    list.push({ ...v, c: bandOf(rank), id: S.lang + "-b" + i, custom: false, rank });
  });
  _vocabCache[S.lang] = list;
  return list;
}
function allVocab() {
  const custom = P().custom.map(v => ({ ...v, id: S.lang + "-c" + v.cid, custom: true, rank: -1 }));
  return custom.concat(baseVocab());     // custom words first: they're always immediately available
}
function srsOf(id) {
  return P().srs[id] || { reps: 0, iv: 0, due: 0, lapses: 0 };
}
function dueCount() {
  const now = Date.now();
  let seenDue = 0, unseen = 0;
  for (const v of allVocab()) {
    const s = srsOf(v.id);
    if (s.reps === 0 && s.lapses === 0) { if (v.custom) seenDue++; else unseen++; }
    else if (s.due <= now) seenDue++;    // learned items whose interval has elapsed
  }
  // reviews first; new words are introduced in frequency order, a few per session
  return Math.min(seenDue + Math.min(NEW_PER_SESSION, unseen), 99);
}

/* ---------- SRS scheduling ---------- */
function gradeItem(id, correct) {
  const s = srsOf(id);
  if (correct) {
    s.reps = Math.min(s.reps + 1, SRS_STEPS.length);
    s.iv = SRS_STEPS[s.reps - 1];
    // extra lapses slow you down: repeat mistakes at shorter intervals
    if (s.lapses > 0) { s.iv = Math.max(1, Math.round(s.iv * Math.pow(0.7, Math.min(s.lapses, 3)))); }
    s.due = Date.now() + s.iv * DAY;
  } else {
    s.lapses++;
    s.reps = Math.max(0, s.reps - 2);    // fall back to short daily intervals
    s.iv = 0;
    s.due = Date.now();                  // due again immediately (requeued in session)
  }
  P().srs[id] = s;
}

/* ---------- gamification ---------- */
function xpNeeded(level) { return 100 + (level - 1) * 50; }
function addXP(n) {
  const p = P();
  p.xp += n;
  let leveled = false;
  while (p.xp >= xpNeeded(p.level)) { p.xp -= xpNeeded(p.level); p.level++; leveled = true; }
  return leveled;
}
function touchStreak() {
  const p = P();
  const today = new Date().toDateString();
  if (p.lastDay === today) return;
  const y = new Date(Date.now() - DAY).toDateString();
  p.streak = (p.lastDay === y) ? p.streak + 1 : 1;
  p.lastDay = today;
}

/* ---------- grammar mastery ---------- */
function mastery(ruleId) {
  const g = P().gstats[ruleId];
  if (!g || g.seen === 0) return null;
  return Math.round(100 * g.correct / g.seen);
}
function recordGrammar(ruleId, correct) {
  const g = P().gstats[ruleId] || { seen: 0, correct: 0 };
  g.seen++; if (correct) g.correct++;
  P().gstats[ruleId] = g;
}

/* ---------- speech ---------- */
let voices = [];
function loadVoices() { voices = speechSynthesis.getVoices(); }
if ("speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
function speak(text, lang) {
  if (!("speechSynthesis" in window)) return toast("Speech not supported on this device");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const code = lang || L().tts;
  u.lang = code;
  const v = voices.find(v => v.lang === code) || voices.find(v => v.lang.startsWith(code.slice(0, 2)));
  if (v) u.voice = v; else if (!voices.some(v => v.lang.startsWith(code.slice(0,2))))
    toast("No " + L().name + " voice installed — check device TTS settings");
  u.rate = 0.92;
  speechSynthesis.speak(u);
}
function audioBtn(text, label) {
  return `<button class="iconbtn" aria-label="${label || "play audio"}" onclick="speak(${esc(JSON.stringify(text))});event.stopPropagation()">🔊</button>`;
}

/* ---------- rendering utils ---------- */
const $ = sel => document.querySelector(sel);
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function toast(msg) {
  document.querySelectorAll(".toast").forEach(t => t.remove());
  const t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}
function setAccent() {
  document.documentElement.style.setProperty("--acc", L().accent);
  document.documentElement.style.setProperty("--acc-dim", L().accent + "24");
}
function renderHeader() {
  const p = P();
  $("#hstreak").textContent = p.streak;
  $("#hdue").textContent = dueCount();
  $("#hlevel").textContent = p.level;
  const frac = Math.min(1, p.xp / xpNeeded(p.level));
  $("#ringbar").style.strokeDashoffset = (94.2 * (1 - frac)).toFixed(1);
}

/* ---------- tabs ---------- */
let currentTab = "home";
document.querySelectorAll("nav button").forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));
function showTab(tab) {
  currentTab = tab;
  document.querySelectorAll("nav button").forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  $("#view-" + tab).classList.add("active");
  ({ home: renderHome, grammar: renderGrammarList, vocab: renderVocab, practice: renderPracticeStart }[tab])();
  window.scrollTo(0, 0);
}

/* ---------- HOME ---------- */
function renderHome() {
  setAccent(); renderHeader();
  const p = P();
  const cards = Object.keys(DATA).map(k => {
    const d = DATA[k], pr = S.profiles[k];
    return `<button class="langcard ${k === S.lang ? "sel" : ""}" onclick="switchLang('${k}')">
      <span class="glyph">${d.glyph}</span>
      ${k === S.lang ? '<span class="chip">learning</span>' : ""}
      <span class="lname">${d.name}</span>
      <span class="lmeta">Level ${pr.level} · ${pr.streak} day streak</span>
    </button>`;
  }).join("");
  const need = xpNeeded(p.level);
  $("#view-home").innerHTML = `
    <h2>Choose your language</h2>
    <div class="langgrid">${cards}</div>
    <h3>Progress — ${L().name}</h3>
    <div class="card">
      <div class="row" style="margin-bottom:8px">
        <div class="grow"><b>Level ${p.level}</b>
          <div class="sub" style="margin:0">${p.xp} / ${need} XP to level ${p.level + 1}</div></div>
        <div class="pill due num">${dueCount()} cards due</div>
      </div>
      <div class="bar"><i style="width:${Math.min(100, 100 * p.xp / need)}%"></i></div>
    </div>
    <button class="btn" onclick="showTab('practice')">Start practice</button>
    <p class="sub" style="text-align:center;margin-top:10px">Higher levels unlock typing and listening exercises.</p>
    <h3>Backup &amp; restore</h3>
    <div class="card">
      <p class="sub" style="margin-top:0">Save all your progress — levels, XP, streaks, review schedule and custom words for all three languages — to a file. Import it on a new phone to pick up exactly where you left off.</p>
      <div class="row" style="gap:10px">
        <button class="btn grow" onclick="exportBackup()">Export backup</button>
        <button class="btn ghost grow" onclick="$('#bfile').click()">Import backup</button>
      </div>
      <input type="file" id="bfile" accept=".json,application/json" style="display:none" onchange="importBackupFile(this)">
    </div>`;
}
function switchLang(k) { S.lang = k; save(); renderHome(); }

/* ---------- GRAMMAR ---------- */
function renderGrammarList() {
  setAccent(); renderHeader();
  const cats = {};
  L().grammar.forEach(g => (cats[g.cat] = cats[g.cat] || []).push(g));
  let html = `<h2>${L().name} grammar</h2>
    <p class="sub">All ${L().grammar.length} rules at a glance. Tap a rule to drill down. The % shows your quiz mastery.</p>`;
  if (S.lang === "ja" && typeof JA_READING !== "undefined") {
    html += `<button class="coursecard" onclick="renderReadingPlan()">
      <span class="glyph">📖</span>
      <span class="grow"><b>Reading &amp; writing course</b><br>
        <span class="m">Hiragana · katakana · kanji — charts, method and a 12-week plan</span></span>
      <span class="num">›</span></button>`;
  }
  for (const c of Object.keys(cats)) {
    html += `<h3>${esc(c)}</h3><div class="gcat">` + cats[c].map(g => {
      const m = mastery(g.id);
      return `<button class="grule" onclick="renderGrammarDetail('${g.id}')">
        <span class="lvltag">L${g.level}</span>
        <span class="grow"><span class="t">${esc(g.title)}</span><br>
          <span class="m">${g.quiz.length} exercises</span></span>
        <span class="mastery num">${m === null ? "—" : m + "%"}</span>
      </button>`;
    }).join("") + `</div>`;
  }
  $("#view-grammar").innerHTML = html;
}

function renderGrammarDetail(id) {
  const g = L().grammar.find(r => r.id === id);
  const m = mastery(id);
  const theory = (g.theory || []).map(t =>
    `<h4 class="th">${esc(t.h)}</h4><p class="tp">${esc(t.p)}</p>`).join("");
  const tables = (g.tables || []).map(t => `
    <div class="gtablewrap"><div class="gtabletitle">${esc(t.title)}</div>
    <table class="gtable"><thead><tr>${t.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`).join("");
  const examples = g.ex.map(e =>
    `<div class="example">${audioBtn(e[0])}<div class="grow"><div class="fx">${esc(e[0])}</div><div class="tx">${esc(e[1])}</div></div></div>`
  ).join("");
  const nBuilds = (typeof SENTENCES !== "undefined")
    ? SENTENCES[S.lang].filter(s => s.rule === id).length : 0;
  const related = L().grammar.filter(r => r.cat === g.cat && r.id !== id).slice(0, 4);
  $("#view-grammar").innerHTML = `
    <button class="back" onclick="renderGrammarList()">← All rules</button>
    <h2>${esc(g.title)}</h2>
    <p class="sub">${esc(g.cat)} · difficulty L${g.level} · mastery ${m === null ? "not practiced yet" : m + "%"}</p>
    <div class="card"><div class="gbody">${esc(g.body)}</div></div>
    ${theory ? `<h3>Theory</h3><div class="card">${theory}</div>` : ""}
    ${tables ? `<h3>Tables</h3>${tables}` : ""}
    <h3>Examples</h3>
    <div class="card">${examples}</div>
    <h3>Exercises</h3>
    <div class="card">
      <p class="sub" style="margin-top:0">Quiz questions test the rule directly; sentence building makes you apply it word by word with instant feedback.</p>
      <button class="btn" onclick="startSession('rule','${g.id}')">Quiz this rule</button>
      ${nBuilds ? `<button class="btn ghost" style="margin-top:10px" onclick="startSession('buildrule','${g.id}')">Build ${nBuilds} sentence${nBuilds > 1 ? "s" : ""} using it</button>` : ""}
    </div>
    ${related.length ? `<h3>Related rules</h3><div class="card">` + related.map(r =>
      `<button class="grule" onclick="renderGrammarDetail('${r.id}')">
         <span>${esc(r.title)}</span><span class="num">L${r.level}</span></button>`).join("") + `</div>` : ""}`;
  window.scrollTo(0, 0);
}

/* ---------- VOCAB ---------- */
let vocabView = { q: "", band: "all", limit: 60 };
function renderVocab() {
  setAccent(); renderHeader();
  const total = allVocab().length;
  const bands = ["all", "custom", "top 100", "top 500", "top 1000", "top 2000"];
  $("#view-vocab").innerHTML = `
    <h2>${L().name} vocabulary</h2>
    <p class="sub"><span class="num">${total}</span> words in your deck, ordered by usefulness.
      New words unlock a few per practice session. Add your own — they join the same review schedule.</p>
    <div class="card">
      <div class="addform">
        <input id="nw" placeholder="Word in ${L().name}${S.lang === "ja" ? " (kana or kanji)" : ""}" autocomplete="off">
        ${S.lang === "ja" ? '<input id="nr" placeholder="Reading in romaji (optional)" autocomplete="off">' : ""}
        <input id="nt" placeholder="Meaning in English" autocomplete="off">
        <button class="btn" onclick="addCustom()">Add word</button>
      </div>
    </div>
    <div class="card">
      <input id="vq" placeholder="Search word or meaning…" autocomplete="off" value="${esc(vocabView.q)}"
        oninput="vocabView.q=this.value; vocabView.limit=60; renderVocabRows();">
      <div class="chips">${bands.map(b =>
        `<button class="chip${vocabView.band === b ? " on" : ""}"
           onclick="vocabView.band='${b}'; vocabView.limit=60; renderVocab();">${b}</button>`).join("")}
      </div>
      <div id="vrows"></div>
    </div>`;
  renderVocabRows();
  const q = $("#vq"); if (vocabView.q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
}
function renderVocabRows() {
  const now = Date.now();
  const q = vocabView.q.trim().toLowerCase();
  let list = allVocab();
  if (vocabView.band === "custom") list = list.filter(v => v.custom);
  else if (vocabView.band !== "all") list = list.filter(v => v.c === vocabView.band);
  if (q) list = list.filter(v =>
    v.w.toLowerCase().includes(q) || v.t.toLowerCase().includes(q) || (v.r || "").toLowerCase().includes(q));
  const shown = list.slice(0, vocabView.limit);
  const rows = shown.map(v => {
    const s = srsOf(v.id);
    const status = s.reps === 0 && s.lapses === 0 ? '<span class="pill">new</span>'
      : s.due <= now ? '<span class="pill due">due now</span>'
      : `<span class="pill num">in ${Math.max(1, Math.ceil((s.due - now) / DAY))}d</span>`;
    return `<div class="vocabrow">
      ${audioBtn(v.w)}
      <div class="grow"><span class="w">${esc(v.w)}</span>${v.r ? ` <span class="r">${esc(v.r)}</span>` : ""}<br>
        <span class="t">${esc(v.t)}</span></div>
      ${status}
      ${v.custom ? `<button class="del" onclick="delCustom('${v.id}')">✕</button>` : ""}
    </div>`;
  }).join("");
  const more = list.length > shown.length
    ? `<button class="btn ghost" style="margin-top:10px"
         onclick="vocabView.limit+=120; renderVocabRows();">Show more (${list.length - shown.length} left)</button>`
    : "";
  $("#vrows").innerHTML = (rows || '<div class="empty">No matching words.</div>') + more;
}
function addCustom() {
  const w = $("#nw").value.trim(), t = $("#nt").value.trim();
  const r = $("#nr") ? $("#nr").value.trim() : "";
  if (!w || !t) return toast("Enter both the word and its meaning");
  const cid = Date.now();
  P().custom.push({ cid, w, t, r: r || undefined, c: "custom" });
  save(); renderVocab(); toast("Added “" + w + "” to your deck");
}
function delCustom(id) {
  const cid = id.split("-c")[1];
  const p = P();
  p.custom = p.custom.filter(v => String(v.cid) !== cid);
  delete p.srs[id];
  save(); renderVocab();
}

/* ---------- PRACTICE ---------- */
let session = null;

function renderPracticeStart() {
  setAccent(); renderHeader();
  const due = dueCount();
  $("#view-practice").innerHTML = `
    <h2>Practice — ${L().name}</h2>
    <p class="sub">Reviews are scheduled by spaced repetition: first after days, then weeks, then months.
      Mistakes shorten the interval and repeat inside the session.</p>
    <div class="card row">
      <div class="grow"><b class="num">${due}</b> vocabulary cards due<br>
        <span class="sub" style="margin:0">plus grammar drills from your weakest rules</span></div>
    </div>
    <button class="btn" onclick="startSession('mix')">Start session</button>
    <button class="btn ghost" style="margin-top:10px" onclick="startSession('grammar')">Grammar-only session</button>
    <button class="btn ghost" style="margin-top:10px" onclick="startSession('build')">Sentence building</button>`;
}

function pickGrammarQs(n, onlyRule) {
  const rules = onlyRule ? L().grammar.filter(g => g.id === onlyRule)
    : [...L().grammar]
        .filter(g => g.level <= Math.max(1, Math.ceil(P().level / 2)))   // difficulty scales with level
        .sort((a, b) => (mastery(a.id) ?? -1) - (mastery(b.id) ?? -1));  // weakest / unseen first
  const qs = [];
  for (const g of rules) {
    for (const q of g.quiz) qs.push({ kind: "grammar", rule: g, q });
    if (!onlyRule && qs.length >= n) break;
  }
  return shuffle(qs).slice(0, onlyRule ? qs.length : n);
}
function pickVocabQs(n) {
  const now = Date.now();
  const vocab = allVocab();
  const isSeen = v => { const s = srsOf(v.id); return s.reps > 0 || s.lapses > 0 || v.custom; };
  // 1) reviews: items you've met before whose interval has elapsed
  const reviews = shuffle(vocab.filter(v => isSeen(v) && srsOf(v.id).due <= now)).slice(0, n);
  // 2) new words: introduced in frequency order (most useful first), capped per session
  const room = Math.min(n - reviews.length, NEW_PER_SESSION);
  const fresh = room > 0
    ? vocab.filter(v => !isSeen(v)).sort((a, b) => a.rank - b.rank).slice(0, room)
    : [];
  return shuffle(reviews.concat(fresh)).map(v => ({ kind: "vocab", v }));
}
function shuffle(a) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function pickBuildQs(n) {
  if (typeof SENTENCES === "undefined") return [];
  const cap = Math.ceil(P().level / 2);
  const pool = SENTENCES[S.lang].filter(s => s.level <= cap);
  // weakest linked rules first, so mistakes steer what you build next
  const scored = pool.map(s => ({ s, m: mastery(s.rule) ?? -1 }));
  scored.sort((a, b) => a.m - b.m || Math.random() - 0.5);
  return scored.slice(0, n).map(x => ({ kind: "build", s: x.s }));
}

function startSession(mode, ruleId) {
  let items;
  if (mode === "rule") items = pickGrammarQs(99, ruleId);
  else if (mode === "grammar") items = pickGrammarQs(10);
  else if (mode === "build") items = pickBuildQs(8);
  else if (mode === "buildrule") items = (typeof SENTENCES !== "undefined")
    ? shuffle(SENTENCES[S.lang].filter(s => s.rule === ruleId)).map(s => ({ kind: "build", s }))
    : [];
  else items = shuffle([...pickVocabQs(8), ...pickGrammarQs(4), ...pickBuildQs(3)]);
  if (!items.length) { showTab("practice"); return toast("Nothing due right now — add words or come back later"); }
  session = { queue: items, done: 0, total: items.length, correct: 0, wrong: 0, xp: 0, leveled: false };
  showTab("practice");
  nextCard();
}

function buildExercise(item) {
  const lvl = P().level;
  if (item.kind === "build") {
    return { type: "build", s: item.s, ruleId: item.s.rule };
  }
  if (item.kind === "grammar") {
    return { type: "mc", prompt: item.q.q, hint: item.rule.title, options: item.q.o, answer: item.q.a,
             sayAfter: null, gradeId: null, ruleId: item.rule.id };
  }
  const v = item.v;
  const s = srsOf(v.id);
  const pool = shuffle(allVocab().filter(x => x.id !== v.id)).slice(0, 3);
  // difficulty ladder: L1 recognition → L3 typing → L5 listening
  if (lvl >= 3 && s.reps >= 2 && Math.random() < 0.5) {
    return { type: "type", prompt: v.t, hint: "Type it in " + L().name + (v.r ? " (romaji ok)" : ""),
             answer: v.w, alt: v.r, sayAfter: v.w, gradeId: v.id };
  }
  if (lvl >= 5 && Math.random() < 0.35) {
    return { type: "listen", prompt: "🔊 Listen and choose the meaning", say: v.w,
             options: shuffle([v, ...pool]).map(x => x.t), answer: null, answerText: v.t,
             sayAfter: null, gradeId: v.id };
  }
  if (Math.random() < 0.5) {
    return { type: "mc", prompt: v.w, sub: v.r, hint: "Choose the meaning",
             options: shuffle([v, ...pool]).map(x => x.t), answerText: v.t, sayAfter: v.w, gradeId: v.id, sayPrompt: v.w };
  }
  return { type: "mc", prompt: v.t, hint: "Choose the " + L().name + " word",
           options: shuffle([v, ...pool]).map(x => x.w + (x.r ? " · " + x.r : "")),
           answerText: v.w + (v.r ? " · " + v.r : ""), sayAfter: v.w, gradeId: v.id };
}

function nextCard() {
  if (!session.queue.length) return finishSession();
  const item = session.queue[0];
  const ex = buildExercise(item);
  session.currentEx = ex; session.currentItem = item;
  if (ex.type === "build") return renderBuildCard(ex);
  const typeLabel = { mc: "Choose", type: "Type the answer", listen: "Listening" }[ex.type];
  let body = "";
  if (ex.type === "listen") {
    body = `<button class="iconbtn" style="width:64px;height:64px;font-size:1.6rem;margin:8px auto"
      onclick="speak(${esc(JSON.stringify(ex.say))})">🔊</button>`;
    setTimeout(() => speak(ex.say), 300);
  }
  const opts = ex.options ? `<div class="opts">` + ex.options.map((o, i) =>
    `<button class="opt" onclick="answerMC(${i})">${esc(o)}</button>`).join("") + `</div>` : "";
  const typebox = ex.type === "type" ? `
    <input class="typein" id="ti" autocomplete="off" autocapitalize="off" spellcheck="false"
      placeholder="…" onkeydown="if(event.key==='Enter')answerType()">
    <button class="btn" style="margin-top:12px" onclick="answerType()">Check</button>` : "";
  $("#view-practice").innerHTML = `
    <div class="progressline">
      <div class="bar grow"><i style="width:${(100 * session.done / session.total)}%"></i></div>
      <span class="num">${session.done}/${session.total}</span>
    </div>
    <div class="qcard">
      <div class="qtype">${typeLabel}</div>
      <div class="qprompt">${esc(ex.prompt)} ${ex.sayPrompt ? audioBtn(ex.sayPrompt) : ""}</div>
      ${ex.sub ? `<div class="qhint">${esc(ex.sub)}</div>` : ""}
      <div class="qhint">${esc(ex.hint || "")}</div>
      ${body}${opts}${typebox}
      <div class="feedback" id="fb"></div>
    </div>`;
  if (ex.type === "type") setTimeout(() => $("#ti").focus(), 50);
}

function norm(s) {
  return s.toLowerCase().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/^(el|la|los|las|un|una|der|die|das|ein|eine|to)\s+/, "")
    .replace(/\s+/g, " ");
}

function answerMC(i) {
  const ex = session.currentEx;
  const chosenText = ex.options[i];
  const correct = ex.answer !== null && ex.answer !== undefined
    ? i === ex.answer : chosenText === ex.answerText;
  document.querySelectorAll(".opt").forEach((b, j) => {
    b.disabled = true;
    const isRight = ex.answer != null ? j === ex.answer : ex.options[j] === ex.answerText;
    if (isRight) b.classList.add("correct");
    else if (j === i && !correct) b.classList.add("wrong");
  });
  settle(correct, ex.answer != null ? ex.options[ex.answer] : ex.answerText, 10);
}
function answerType() {
  const ex = session.currentEx;
  const val = $("#ti").value;
  if (!val.trim()) return;
  const correct = norm(val) === norm(ex.answer) || (ex.alt && norm(val) === norm(ex.alt));
  $("#ti").disabled = true;
  settle(correct, ex.answer + (ex.alt ? " (" + ex.alt + ")" : ""), 15);
}

function settle(correct, answerText, xpVal) {
  const ex = session.currentEx, item = session.queue.shift();
  const fb = $("#fb");
  touchStreak();
  let status;
  if (correct) {
    session.correct++; session.done++;
    session.xp += xpVal;
    if (addXP(xpVal)) session.leveled = true;
    fb.className = "feedback ok"; status = "Correct! +" + xpVal + " XP";
  } else {
    session.wrong++;
    fb.className = "feedback bad"; status = "Not quite — you'll see this again";
    session.queue.push(item);            // mistakes repeat at the end of the session
    session.total++; session.done++;
  }
  // the word card: meaning + reading + pronunciation audio, on every single answer
  let detail = "";
  if (item.kind === "vocab") {
    const v = item.v;
    detail = `<div class="wordinfo">${audioBtn(v.w)}
      <div class="grow"><b class="fx">${esc(v.w)}</b>${v.r ? ` <span class="r">${esc(v.r)}</span>` : ""}<br>
      <span class="t">= ${esc(v.t)}</span></div></div>`;
  } else if (item.kind === "grammar") {
    detail = `<div class="wordinfo"><div class="grow"><b class="fx">${esc(answerText)}</b><br>
      <span class="t">${esc(item.rule.title)}</span></div></div>`;
  }
  fb.innerHTML = `<div>${status}</div>${detail}
    <button class="btn" style="margin-top:12px" onclick="nextCard()">Continue</button>`;
  if (ex.gradeId) gradeItem(ex.gradeId, correct);
  if (ex.ruleId) recordGrammar(ex.ruleId, correct);
  if (ex.sayAfter) speak(ex.sayAfter);
  save(); renderHeader();
}

function finishSession() {
  const acc = session.correct + session.wrong === 0 ? 0
    : Math.round(100 * session.correct / (session.correct + session.wrong));
  $("#view-practice").innerHTML = `
    <div class="sessiondone">
      <div class="big">${acc >= 80 ? "🎉" : "💪"}</div>
      <h2>Session complete</h2>
      ${session.leveled ? `<div class="stampwrap"><div class="stamp">LEVEL ${P().level}</div></div>` : ""}
      <div class="card" style="text-align:left">
        <div class="row"><span class="grow">Accuracy</span><b class="num">${acc}%</b></div>
        <div class="row"><span class="grow">XP earned</span><b class="num">+${session.xp}</b></div>
        <div class="row"><span class="grow">Mistakes (rescheduled sooner)</span><b class="num">${session.wrong}</b></div>
        <div class="row"><span class="grow">Streak</span><b class="num">🔥 ${P().streak} days</b></div>
      </div>
      <button class="btn" onclick="renderPracticeStart()">Done</button>
    </div>`;
  session = null;
  renderHeader();
}

/* ---------- boot ---------- */
setAccent(); renderHome(); renderHeader();

/* ---------- BACKUP & RESTORE ---------- */
function exportBackup() {
  const payload = {
    app: "trilingua",
    format: 1,
    exported: new Date().toISOString(),
    state: S
  };
  const json = JSON.stringify(payload, null, 1);
  const name = "trilingua-backup-" + new Date().toISOString().slice(0, 10) + ".json";
  const blob = new Blob([json], { type: "application/json" });
  // phones: native share sheet lets you send the file to cloud/messages directly
  const file = typeof File !== "undefined" ? new File([blob], name, { type: "application/json" }) : null;
  if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({ files: [file], title: "Trilingua backup" }).catch(() => downloadBlob(blob, name));
  } else {
    downloadBlob(blob, name);
  }
  toast("Backup exported — keep the file somewhere safe");
}
function downloadBlob(blob, name) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function importBackupFile(input) {
  const f = input.files && input.files[0];
  input.value = "";
  if (!f) return;
  const reader = new FileReader();
  reader.onload = () => {
    try { restoreBackup(JSON.parse(reader.result)); }
    catch (e) { toast("That file is not a valid Trilingua backup"); }
  };
  reader.onerror = () => toast("Could not read the file");
  reader.readAsText(f);
}
function validBackup(b) {
  if (!b || b.app !== "trilingua" || !b.state || !b.state.profiles) return false;
  for (const l of ["es", "de", "ja"]) {
    const p = b.state.profiles[l];
    if (!p || typeof p.xp !== "number" || typeof p.level !== "number"
        || typeof p.srs !== "object" || !Array.isArray(p.custom)) return false;
  }
  return true;
}
function restoreBackup(b) {
  if (!validBackup(b)) return toast("That file is not a valid Trilingua backup");
  if (!confirm("Replace your current progress with this backup from "
      + (b.exported ? b.exported.slice(0, 10) : "an earlier date") + "?")) return;
  // take over the whole state: language choice, all profiles, srs, gstats, custom words
  S.lang = ["es", "de", "ja"].includes(b.state.lang) ? b.state.lang : "es";
  S.profiles = b.state.profiles;
  // future-proof defaults for anything an older backup might lack
  for (const l of ["es", "de", "ja"]) {
    const p = S.profiles[l];
    p.streak = p.streak || 0; p.lastDay = p.lastDay ?? null;
    p.gstats = p.gstats || {}; p.custom = p.custom || [];
  }
  save();
  toast("Backup restored — welcome back!");
  setTimeout(() => location.reload(), 800);
}

/* ---------- SENTENCE BUILDING ---------- */
function renderBuildCard(ex) {
  const s = ex.s;
  session.build = {
    pos: 0, mistakes: 0, missAtPos: 0,
    tiles: shuffle(s.t.map((w, i) => ({ w, i, used: false })))
  };
  $("#view-practice").innerHTML = `
    <div class="progressline">
      <div class="bar grow"><i style="width:${(100 * session.done / session.total)}%"></i></div>
      <span class="num">${session.done}/${session.total}</span>
    </div>
    <div class="qcard">
      <div class="qtype">Build the sentence</div>
      <div class="qprompt">${esc(s.en)}</div>
      <div class="qhint">Tap the words in the right order — you'll know instantly if one is wrong.</div>
      <div class="built" id="built"></div>
      <div class="tiles" id="tiles"></div>
      <div class="buildhint" id="bhint"></div>
      <div class="feedback" id="fb"></div>
    </div>`;
  drawBuild();
}
function drawBuild() {
  const b = session.build, s = session.currentEx.s;
  $("#built").innerHTML = s.t.slice(0, b.pos).map(w =>
    `<span class="tile locked">${esc(w)}</span>`).join("") +
    (b.pos < s.t.length ? `<span class="tile slot">&nbsp;</span>` : "");
  $("#tiles").innerHTML = b.tiles.map((t, i) =>
    `<button class="tile bank ${t.used ? "used" : ""}" id="t${i}"
       ${t.used ? "disabled" : ""} onclick="tapTile(${i})">${esc(t.w)}</button>`).join("");
}
function tapTile(i) {
  const b = session.build, s = session.currentEx.s;
  const t = b.tiles[i];
  if (t.used || b.pos >= s.t.length) return;
  if (t.w === s.t[b.pos]) {
    // correct next word — lock it in
    t.used = true; b.pos++; b.missAtPos = 0;
    drawBuild();
    if (b.pos === s.t.length) return settleBuild();
  } else {
    // instant feedback on the mistake
    b.mistakes++; b.missAtPos++;
    const el = $("#t" + i);
    el.classList.add("err");
    setTimeout(() => el.classList.remove("err"), 450);
    const bh = $("#bhint");
    if (b.missAtPos === 1) {
      bh.innerHTML = `<b>Not that one.</b> ${esc(s.hint)}`;
    } else {
      // second miss at the same position: reveal the correct tile
      const idx = b.tiles.findIndex(x => !x.used && x.w === s.t[b.pos]);
      if (idx >= 0) {
        const good = $("#t" + idx);
        good.classList.add("reveal");
        setTimeout(() => good.classList.remove("reveal"), 1200);
      }
      bh.innerHTML = `<b>Watch the glowing tile</b> — the next word is <b>${esc(s.t[b.pos])}</b>. ${esc(s.hint)}`;
    }
  }
}
function settleBuild() {
  const s = session.currentEx.s, b = session.build;
  const item = session.queue.shift();
  const perfect = b.mistakes === 0;
  const xpVal = Math.max(5, 20 - 5 * b.mistakes);
  touchStreak();
  session.done++;
  if (perfect) session.correct++; else session.wrong++;
  session.xp += xpVal;
  if (addXP(xpVal)) session.leveled = true;
  // mistakes feed the linked grammar rule's mastery and repeat the sentence
  recordGrammar(s.rule, perfect);
  if (!perfect && !item.re) { item.re = true; session.queue.push(item); session.total++; }
  const fb = $("#fb");
  fb.className = "feedback " + (perfect ? "ok" : "bad");
  fb.innerHTML = (perfect
      ? "Perfect! +" + xpVal + " XP"
      : b.mistakes + " mistake" + (b.mistakes > 1 ? "s" : "") + " — +" + xpVal
        + " XP" + (item.re && session.queue[session.queue.length - 1] === item ? ", you'll build it again" : ""))
    + `<div class="builtdone">${esc(s.t.join(" "))} ${audioBtn(s.t.join(""))}</div>`
    + `<button class="btn" style="margin-top:12px" onclick="nextCard()">Continue</button>`;
  speak(S.lang === "ja" ? s.t.join("") : s.t.join(" "));
  const g = L().grammar.find(r => r.id === s.rule);
  if (!perfect && g) fb.innerHTML += `<div class="qhint" style="margin-top:8px">Related rule: 
    <a href="#" onclick="showTab('grammar');renderGrammarDetail('${g.id}');return false">${esc(g.title)}</a></div>`;
}

/* ---------- JAPANESE READING & WRITING COURSE ---------- */
function renderReadingPlan() {
  const R = JA_READING;
  const toc = R.sections.map((s, i) =>
    `<button class="grule" onclick="document.getElementById('rs${i}').scrollIntoView({behavior:'smooth'})">
      <span class="grow"><span class="t">${esc(s.h)}</span></span><span class="num">›</span></button>`).join("");
  const body = R.sections.map((s, i) => {
    const ps = s.ps.map(p => `<p class="tp">${esc(p)}</p>`).join("");
    const tables = (s.tables || []).map(t => `
      <div class="gtablewrap"><div class="gtabletitle">${esc(t.title)}</div>
      <table class="gtable"><thead><tr>${t.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${t.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>`).join("");
    return `<h3 id="rs${i}">${esc(s.h)}</h3><div class="card">${ps}</div>${tables}`;
  }).join("");
  $("#view-grammar").innerHTML = `
    <button class="back" onclick="renderGrammarList()">← All rules</button>
    <h2>${esc(R.title)}</h2>
    <div class="card"><p class="tp" style="margin:0">${esc(R.intro)}</p></div>
    <h3>Contents</h3>
    <div class="card">${toc}</div>
    ${body}
    <h3>Put it into practice</h3>
    <div class="card">
      <p class="sub" style="margin-top:0">Every vocabulary word in this app shows kana with romaji and has pronunciation audio — use it as your kana reading drill.</p>
      <button class="btn" onclick="showTab('vocab')">Open the vocabulary list</button>
      <button class="btn ghost" style="margin-top:10px" onclick="startSession('mix')">Start a practice session</button>
    </div>`;
  window.scrollTo(0, 0);
}
