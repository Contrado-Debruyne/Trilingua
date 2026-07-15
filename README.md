# Trilingua 🇪🇸🇩🇪🇯🇵

An offline-first language trainer for **Spanish, German and Japanese**, installable on your phone as a PWA (Progressive Web App). No accounts, no server, no tracking — everything lives on your device.

## Features

- **48 grammar rules** (16 per language) with a complete category overview, drill-down explanations, examples with **pronunciation audio**, and per-rule mastery tracking
- **126 starter vocabulary words** + add your own **personalized vocabulary** per language
- **Spaced repetition (SRS):** reviews start at 1 day, then 3 → 7 → 16 → 35 → 90 days. Mistakes shorten your intervals and repeat the exercise inside the same session
- **Levels & XP (gamified):** correct answers earn XP; leveling up unlocks harder exercise types (multiple choice → typing → listening) and higher-level grammar drills
- **Daily streak** tracking
- **Fully offline** after the first visit (service worker caches everything)

## Install it on your phone via GitHub (5 minutes)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a **new public repository** (e.g. `trilingua`).
3. Upload all files from this folder (`index.html`, `app.js`, `data.js`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`) via **Add file → Upload files**.
4. Go to **Settings → Pages**, under *Build and deployment* choose **Deploy from a branch**, select branch `main` and folder `/ (root)`, then **Save**.
5. After ~1 minute your app is live at `https://<your-username>.github.io/trilingua/`.
6. Open that URL on your phone:
   - **Android (Chrome):** tap the ⋮ menu → **Add to Home screen** → **Install**.
   - **iPhone (Safari):** tap the Share icon → **Add to Home Screen**.
7. Open it once while online — from then on it works **completely offline**.

## Pronunciation audio

Audio uses your phone's built-in text-to-speech voices (Web Speech API).

- For **offline** audio, make sure Spanish, German and Japanese voices are installed on your device:
  - Android: *Settings → System → Languages → Text-to-speech → install voice data*
  - iOS: *Settings → Accessibility → Spoken Content → Voices*
- If a voice is missing, the app will tell you.

## Your data

Progress, levels, streaks, SRS schedules and custom vocabulary are stored in your browser's `localStorage`. Clearing site data resets progress. To back up, you can copy the `trilingua-v1` key from browser dev tools.

## Extending the content

All content lives in `data.js`. Each grammar rule has an id, category, title, difficulty level, explanation, examples and quiz questions; each vocab item has a word, optional reading and translation. Add entries following the existing pattern — they appear in the app automatically.

## Exercise feedback

Every answered card — right or wrong — shows a word panel with the foreign word,
its reading (Japanese), its English meaning, and a tap-to-play pronunciation
button. Sessions advance with a Continue button, so you control how long the
panel stays on screen.

## Japanese reading & writing course — with exercises and vocabulary gating

Five interactive tests live at the top of the course page (`ja_kana.js` holds the
drill data): hiragana basics (46), hiragana voiced & combos (50), katakana
basics (46), katakana voiced & extended (51), and the first 40 kanji. Each test
asks 20 questions in both directions (character → reading, reading → character;
kanji also meaning), gives the answer card with audio on every mistake, and
records your best score. Pass mark: 90%.

**Vocabulary depends on the course:** while a script is unpassed, vocabulary
exercises show romaji as training wheels and mixed practice sessions
automatically include drills for the next unpassed stage. Once you pass
hiragana (or katakana), romaji disappears from vocabulary exercises for words
in that script — from then on you read the kana itself. Course progress is
stored per profile and included in backups.

## Japanese reading & writing course (reference)

The Grammar tab for Japanese opens with a full course (`ja_reading.js`): how the
three scripts fit together; complete hiragana and katakana charts with dakuten,
yōon and lookalike drills; pronunciation mechanics (particle spellings, mora
timing); the kanji system (radicals, on/kun readings, okurigana) with the first
80 kanji in study order; the eight stroke-order rules and a handwriting routine;
a five-level reading ladder; and a 12-week day-by-day schedule.

## Sentence building (with instant feedback)

Practice sessions now include tile-based sentence construction (74 sentences in
`sentences.js`, levels 1–6, each linked to a grammar rule). You see the English
sentence and tap the target-language word tiles in order:

- A wrong tile flashes red **immediately** and shows a grammar hint explaining the
  structure; it never silently accepts a wrong order.
- A second miss at the same position makes the correct tile glow.
- Perfect builds earn 20 XP; each mistake costs 5 XP (minimum 5).
- Mistakes feed the linked grammar rule's mastery score, requeue the sentence at
  the end of the session, and the finished card links to the related rule.
- There's also a dedicated "Sentence building" session on the Practice tab.

## Grammar (30 rules per language, levels 1–6, full theory)

Every rule page now contains: a quick summary, detailed **theory** in sections
(usage, formation, pitfalls), **reference tables** (conjugations, declensions,
particle charts — 143 tables in `grammar_detail.js`), audio **examples**, and
direct **exercise links** — a quiz for the rule plus tile-based sentence
building filtered to that rule. Related rules in the same category are
cross-linked at the bottom of each page.

Levels 1–3 cover the beginner–intermediate core; levels 4–6 (in `grammar_adv.js`)
add advanced and native-level topics — e.g. Spanish si-clauses, subjunctive nuance and
voseo; German Konjunktiv I/II, nominal style and modal particles; Japanese keigo,
written である style and onomatopoeia. Practice sessions unlock rules gradually:
a rule of level *n* appears once your level reaches 2·n − 1.

## Backup & restore

On the Home tab, "Export backup" saves one JSON file containing everything:
levels, XP, streaks, the full spaced-repetition schedule, grammar mastery and your
custom words for all three languages. On a new phone, install the app, tap
"Import backup" and choose the file — your progress is restored exactly.
On phones the export opens the share sheet, so you can send the file straight
to cloud storage or a messaging app.

## Vocabulary (≈2,000 words per language)

Each language ships with roughly 2,000 of the most useful words (in `vocab_big.js`),
ordered by usefulness and grouped into frequency bands (top 100 / 500 / 1000 / 2000).
Japanese entries include kana and romaji readings.

- New words are introduced gradually: each practice session mixes your due reviews
  with at most 10 unseen words, taken from the top of the frequency list.
- The Vocab tab has search and band filters so the long list stays browsable.
- To edit or extend the lists, open `vocab_big.js` — Spanish/German entries are
  `[word, translation]`, Japanese entries are `[kana, romaji, translation]`.

