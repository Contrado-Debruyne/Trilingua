/* Detailed theory + tables for every grammar rule. Merged into DATA at the bottom.
   theory: [{h: heading, p: text}]  tables: [{title, head:[...], rows:[[...]]}] */
const GRAMMAR_DETAIL = {
/* ============ SPANISH ============ */
"es-gender": {
 theory:[
  {h:"The concept", p:"Every Spanish noun is grammatically masculine or feminine — even objects and ideas. Gender is a property of the word, not the thing: el problema (problem) is masculine, la mano (hand) is feminine. Articles, adjectives and pronouns must all match the noun's gender, so learning each noun together with its article (el/la) is the single most useful habit in Spanish."},
  {h:"Predicting gender", p:"Endings predict gender reliably: -o, -aje, -or and stressed vowels are usually masculine; -a, -ción/-sión, -dad/-tad, -tud, -umbre are usually feminine. Greek-origin -ma words (el problema, el tema, el sistema) are masculine despite the -a. Words for people usually follow biology: el estudiante / la estudiante."},
  {h:"Common traps", p:"Memorize the classic exceptions as a set: el día, el mapa, la mano, la foto (fotografía), la moto (motocicleta), la radio. Feminine nouns starting with stressed a/ha take el in the singular for sound reasons but stay feminine: el agua fría, las aguas frías."}],
 tables:[
  {title:"Typical endings", head:["Usually masculine","Examples","Usually feminine","Examples"],
   rows:[["-o","el libro, el año","-a","la casa, la mesa"],
         ["-or","el color, el amor","-ción / -sión","la nación, la televisión"],
         ["-aje","el viaje, el garaje","-dad / -tad","la ciudad, la libertad"],
         ["-ma (Greek)","el problema, el tema","-tud / -umbre","la actitud, la costumbre"]]},
  {title:"Key exceptions", head:["Word","Gender","Meaning"],
   rows:[["el día","masculine","day"],["el mapa","masculine","map"],["la mano","feminine","hand"],
         ["la foto","feminine","photo"],["la moto","feminine","motorbike"],["el agua (f.)","feminine, el for sound","water"]]}]},
"es-plural": {
 theory:[
  {h:"Core rules", p:"Vowel-ending nouns add -s (casa → casas). Consonant-ending nouns add -es (ciudad → ciudades). Nouns ending in -z change to -ces (lápiz → lápices). Words ending in unstressed vowel + s don't change: el lunes → los lunes, la crisis → las crisis."},
  {h:"Accents and stress", p:"Adding -es can shift written accents: canción → canciones (accent dropped because stress is now regular), joven → jóvenes (accent added to preserve stress). The spoken stress never moves; only the spelling adapts."},
  {h:"Agreement ripple", p:"Pluralizing a noun pluralizes its whole phrase: la casa blanca → las casas blancas. A mixed-gender group takes masculine plural: los padres = the parents (father + mother)."}],
 tables:[
  {title:"Pluralization patterns", head:["Ending","Rule","Example"],
   rows:[["vowel","+ s","libro → libros"],["consonant","+ es","ciudad → ciudades"],
         ["-z","→ -ces","vez → veces"],["unstressed vowel + s","no change","el martes → los martes"],
         ["-ión","+ es, drop accent","nación → naciones"]]}]},
"es-articles": {
 theory:[
  {h:"Four definite, four indefinite", p:"Definite (the): el, la, los, las. Indefinite (a/some): un, una, unos, unas. They agree in gender and number with the noun. Contractions are mandatory: a + el = al, de + el = del — but never with la/los/las."},
  {h:"Where Spanish uses articles and English doesn't", p:"General statements (Me gusta el café — I like coffee), days of the week (el lunes = on Monday), telling time (Es la una), titles when talking about someone (el señor García), body parts and clothing with reflexives (Me lavo las manos)."},
  {h:"Where Spanish drops them", p:"Unmodified professions after ser (Soy profesor), after hay (Hay leche), and in many fixed pairs (en casa, a clase)."}],
 tables:[
  {title:"Article forms", head:["","masculine","feminine"],
   rows:[["the (sing.)","el","la"],["the (pl.)","los","las"],["a / an","un","una"],["some","unos","unas"]]},
  {title:"Mandatory contractions", head:["Combination","Result","Example"],
   rows:[["a + el","al","Voy al mercado"],["de + el","del","Vengo del trabajo"]]}]},
"es-adj": {
 theory:[
  {h:"Agreement", p:"Adjectives agree in gender and number: -o adjectives have four forms (alto/alta/altos/altas); -e and most consonant adjectives have two (grande/grandes, azul/azules). Nationality adjectives in consonant add -a for feminine: español → española."},
  {h:"Position", p:"Descriptive adjectives normally follow the noun: una casa blanca. A few common ones precede and some change meaning by position: un gran hombre (a great man) vs un hombre grande (a big man); un viejo amigo (a longtime friend) vs un amigo viejo (an elderly friend)."},
  {h:"Shortening (apócope)", p:"Before a masculine singular noun, several adjectives drop the final -o: bueno → buen, malo → mal, primero → primer, tercero → tercer, uno → un. Grande shortens to gran before any singular noun."}],
 tables:[
  {title:"Agreement forms", head:["Type","m. sing.","f. sing.","m. pl.","f. pl."],
   rows:[["-o adjectives","alto","alta","altos","altas"],
         ["-e adjectives","grande","grande","grandes","grandes"],
         ["consonant","azul","azul","azules","azules"],
         ["nationality -consonant","español","española","españoles","españolas"]]},
  {title:"Meaning changes by position", head:["Before noun","After noun"],
   rows:[["gran hombre = great man","hombre grande = big man"],
         ["viejo amigo = old (longtime) friend","amigo viejo = old (aged) friend"],
         ["pobre niño = poor (pitiable) child","niño pobre = poor (no money) child"]]}]},
"es-subject-pron": {
 theory:[
  {h:"The set", p:"yo, tú, él/ella/usted, nosotros/-as, vosotros/-as, ellos/ellas/ustedes. Usted(es) means 'you' but grammatically takes third-person verb forms."},
  {h:"Drop them by default", p:"Spanish is a pro-drop language: the verb ending already shows the subject, so pronouns are usually omitted. Hablo español is complete. Use the pronoun only for contrast or emphasis: Yo trabajo y tú descansas."},
  {h:"tú vs usted", p:"tú is informal (friends, family, peers, children); usted is formal (strangers, elders, service situations). Spain uses vosotros for informal plural; Latin America uses ustedes for all plurals."}],
 tables:[
  {title:"Subject pronouns", head:["Person","Singular","Plural"],
   rows:[["1st","yo","nosotros / nosotras"],["2nd informal","tú","vosotros / vosotras (Spain)"],
         ["2nd formal","usted","ustedes"],["3rd","él / ella","ellos / ellas"]]}]},
"es-present": {
 theory:[
  {h:"Uses", p:"The present covers current actions (hablo = I speak / I am speaking), habits (siempre como aquí), general truths, and near-future plans with a time word (mañana trabajo). Spanish has no separate 'do' auxiliary: ¿Hablas inglés? = Do you speak English?"},
  {h:"Regular formation", p:"Remove -ar/-er/-ir and add person endings. The three conjugation classes differ only in vowels; person endings are parallel (-o, -s, -, -mos, -is, -n)."},
  {h:"Stem changers", p:"Many verbs change their stem vowel in stressed syllables (all forms except nosotros/vosotros): e→ie (querer → quiero), o→ue (poder → puedo), e→i (pedir → pido). The endings stay regular."}],
 tables:[
  {title:"Regular present endings", head:["Person","-ar hablar","-er comer","-ir vivir"],
   rows:[["yo","hablo","como","vivo"],["tú","hablas","comes","vives"],["él/ella/Ud.","habla","come","vive"],
         ["nosotros","hablamos","comemos","vivimos"],["vosotros","habláis","coméis","vivís"],["ellos/Uds.","hablan","comen","viven"]]},
  {title:"Stem-change patterns", head:["Change","Infinitive","yo","nosotros"],
   rows:[["e → ie","querer","quiero","queremos"],["o → ue","poder","puedo","podemos"],["e → i","pedir","pido","pedimos"],["u → ue","jugar","juego","jugamos"]]}]},
"es-ser-estar": {
 theory:[
  {h:"Two verbs 'to be'", p:"ser = identity, origin, profession, time, inherent traits, events' location. estar = states, emotions, temporary conditions, location of people/things, and the progressive (estar + gerund). The choice can change meaning entirely."},
  {h:"Memory aids", p:"ser → DOCTOR: Description, Occupation, Characteristic, Time, Origin, Relationship. estar → PLACE: Position, Location, Action (progressive), Condition, Emotion."},
  {h:"Meaning-changing adjectives", p:"Some adjectives shift meaning: ser aburrido (boring) / estar aburrido (bored); ser listo (clever) / estar listo (ready); ser rico (rich) / estar rico (tasty); ser verde (green) / estar verde (unripe)."}],
 tables:[
  {title:"Conjugation (present)", head:["Person","ser","estar"],
   rows:[["yo","soy","estoy"],["tú","eres","estás"],["él/ella/Ud.","es","está"],
         ["nosotros","somos","estamos"],["vosotros","sois","estáis"],["ellos/Uds.","son","están"]]},
  {title:"ser vs estar with the same adjective", head:["ser + adj","estar + adj"],
   rows:[["es aburrido — he's boring","está aburrido — he's bored"],
         ["es lista — she's clever","está lista — she's ready"],
         ["es rico — he's rich","está rico — it's delicious"],
         ["es seguro — it's safe","está seguro — he's sure"]]}]},
"es-irregular": {
 theory:[
  {h:"The big six", p:"ser, estar, ir, tener, hacer and decir are irregular and unavoidable — they appear in countless expressions: tener hambre/sed/años (hunger/thirst/age), hacer frío/calor (weather), ir a + infinitive (near future)."},
  {h:"yo-form irregulars", p:"Many verbs are irregular only in yo: hago, pongo, salgo, traigo, conozco, sé, veo, doy. The rest of their present tense is regular."},
  {h:"Strategy", p:"Learn irregulars as sound patterns, not letter rules — say full conjugations aloud. The -go group (hacer, poner, salir, tener, venir, decir) shares the yo -go; tener and venir also stem-change (tienes, vienes)."}],
 tables:[
  {title:"Present of the big irregulars", head:["Person","ser","ir","tener","hacer","decir"],
   rows:[["yo","soy","voy","tengo","hago","digo"],["tú","eres","vas","tienes","haces","dices"],
         ["él/ella","es","va","tiene","hace","dice"],["nosotros","somos","vamos","tenemos","hacemos","decimos"],
         ["ellos","son","van","tienen","hacen","dicen"]]},
  {title:"Common yo-irregulars", head:["Verb","yo form"],
   rows:[["poner","pongo"],["salir","salgo"],["traer","traigo"],["conocer","conozco"],["saber","sé"],["ver","veo"],["dar","doy"]]}]},
"es-preterite": {
 theory:[
  {h:"When", p:"The preterite reports completed, bounded past events — actions with a clear start or end, sequences, and things counted or dated: Ayer comí paella. Viví allí tres años. Signal words: ayer, anoche, la semana pasada, en 2010, de repente."},
  {h:"Regular forms", p:"-ar: -é, -aste, -ó, -amos, -asteis, -aron. -er/-ir share endings: -í, -iste, -ió, -imos, -isteis, -ieron. Watch accents on yo and él forms — hablo (present) vs habló (he spoke)."},
  {h:"Irregular backbone", p:"A set of high-frequency verbs uses special stems with unstressed endings (-e, -iste, -o…): tener→tuv-, estar→estuv-, poder→pud-, poner→pus-, hacer→hic-, querer→quis-, venir→vin-, decir→dij-. ser and ir share fui, fuiste, fue…"}],
 tables:[
  {title:"Regular preterite", head:["Person","hablar","comer","vivir"],
   rows:[["yo","hablé","comí","viví"],["tú","hablaste","comiste","viviste"],["él/ella","habló","comió","vivió"],
         ["nosotros","hablamos","comimos","vivimos"],["ellos","hablaron","comieron","vivieron"]]},
  {title:"Irregular stems", head:["Verb","Stem","él form"],
   rows:[["tener","tuv-","tuvo"],["estar","estuv-","estuvo"],["hacer","hic-","hizo"],
         ["poder","pud-","pudo"],["venir","vin-","vino"],["decir","dij-","dijo"],["ser / ir","fu-","fue"]]}]},
"es-imperfect": {
 theory:[
  {h:"When", p:"The imperfect paints the past as background: habits (jugaba cada día — I used to play), descriptions (la casa era grande), ongoing situations, age, time and weather in the past. Signal words: siempre, todos los días, mientras, cuando era niño."},
  {h:"Preterite vs imperfect together", p:"Typical narrative pairs them: imperfect sets the scene, preterite delivers the event. Dormía (imperfect: was sleeping) cuando sonó (preterite: rang) el teléfono."},
  {h:"Formation", p:"Extremely regular: -ar → -aba set; -er/-ir → -ía set. Only three irregulars in the whole language: ser (era), ir (iba), ver (veía)."}],
 tables:[
  {title:"Imperfect forms", head:["Person","hablar","comer","ser","ir"],
   rows:[["yo","hablaba","comía","era","iba"],["tú","hablabas","comías","eras","ibas"],
         ["él/ella","hablaba","comía","era","iba"],["nosotros","hablábamos","comíamos","éramos","íbamos"],
         ["ellos","hablaban","comían","eran","iban"]]},
  {title:"Choosing the past tense", head:["Imperfect (background)","Preterite (event)"],
   rows:[["llovía — it was raining","empezó a llover — it started to rain"],
         ["tenía diez años — I was ten","cumplí diez años — I turned ten"],
         ["siempre comíamos ahí — we always ate there","ayer comimos ahí — yesterday we ate there"]]}]},
"es-future": {
 theory:[
  {h:"Two futures", p:"Near future ir + a + infinitive is the everyday choice: Voy a estudiar (I'm going to study). The simple future (hablaré) is for predictions, promises and formal plans — and for guessing about the present: ¿Dónde estará? (I wonder where he is)."},
  {h:"Simple future formation", p:"Add -é, -ás, -á, -emos, -éis, -án to the whole infinitive: hablar → hablaré. Twelve verbs modify the stem: tendré, saldré, pondré, vendré, haré, diré, podré, querré, sabré, habré, cabré, valdré."},
  {h:"Probability use", p:"The future expresses conjecture about now: Serán las ocho (It's probably eight). This 'future of probability' is very common in speech."}],
 tables:[
  {title:"Simple future", head:["Person","hablar","tener (irr.)","hacer (irr.)"],
   rows:[["yo","hablaré","tendré","haré"],["tú","hablarás","tendrás","harás"],["él/ella","hablará","tendrá","hará"],
         ["nosotros","hablaremos","tendremos","haremos"],["ellos","hablarán","tendrán","harán"]]},
  {title:"Ways to talk about the future", head:["Form","Feel","Example"],
   rows:[["present + time word","fixed plan","Mañana trabajo"],["ir a + infinitive","intention","Voy a viajar"],
         ["simple future","prediction / promise","Lloverá mañana"]]}]},
"es-reflexive": {
 theory:[
  {h:"What they are", p:"Reflexive verbs describe actions done to oneself or changes of state: levantarse (get up), ducharse (shower), sentirse (feel), irse (leave). The pronoun matches the subject: me, te, se, nos, os, se."},
  {h:"Placement", p:"Before a conjugated verb (me levanto), attached to infinitives and gerunds (voy a levantarme / estoy levantándome), attached to affirmative commands (¡levántate!), before negative commands (¡no te levantes!)."},
  {h:"Meaning shifts", p:"Reflexive can change meaning: ir (go) / irse (go away, leave); dormir (sleep) / dormirse (fall asleep); quedar (arrange to meet) / quedarse (stay); poner (put) / ponerse (put on, become)."}],
 tables:[
  {title:"Reflexive pronouns", head:["Subject","Pronoun","Example (levantarse)"],
   rows:[["yo","me","me levanto"],["tú","te","te levantas"],["él/ella/Ud.","se","se levanta"],
         ["nosotros","nos","nos levantamos"],["vosotros","os","os levantáis"],["ellos/Uds.","se","se levantan"]]},
  {title:"Reflexive changes the verb", head:["Plain","Reflexive"],
   rows:[["ir — to go","irse — to leave"],["dormir — to sleep","dormirse — to fall asleep"],
         ["llamar — to call","llamarse — to be named"],["poner — to put","ponerse — to put on / become"]]}]},
"es-gustar": {
 theory:[
  {h:"The reversed structure", p:"gustar means 'to be pleasing', so the thing liked is the grammatical subject: Me gusta el café = coffee pleases me. The verb agrees with the thing, not the person: gusta (singular) / gustan (plural). With verbs, always singular: Me gusta bailar."},
  {h:"The pronoun set", p:"Indirect object pronouns mark who is pleased: me, te, le, nos, os, les. Add a + person for emphasis or clarity: A María le gusta el té. The redundant 'le' stays even with the name."},
  {h:"The gustar family", p:"Same pattern: encantar (love), interesar, molestar (bother), doler (hurt: me duele la cabeza), faltar (lack), importar, parecer (seem), quedar (suit/fit)."}],
 tables:[
  {title:"Pattern overview", head:["Person","Singular thing","Plural things"],
   rows:[["I like","me gusta","me gustan"],["you like","te gusta","te gustan"],["he/she likes","le gusta","le gustan"],
         ["we like","nos gusta","nos gustan"],["they like","les gusta","les gustan"]]},
  {title:"Verbs that work like gustar", head:["Verb","Example","Meaning"],
   rows:[["encantar","Me encanta el mar","I love the sea"],["doler","Me duelen los pies","My feet hurt"],
         ["interesar","¿Te interesa el arte?","Does art interest you?"],["parecer","Me parece bien","It seems fine to me"]]}]},
"es-porpara": {
 theory:[
  {h:"The core contrast", p:"para looks forward: purpose, destination, recipient, deadline, standard. por looks at cause and path: reason, exchange, duration, movement through, means, agent. Un regalo para ti (destined for you) vs gracias por el regalo (because of it)."},
  {h:"para in detail", p:"Purpose (estudio para aprender), recipient (es para María), deadline (para el lunes), destination (salgo para Madrid), opinion (para mí), comparison to a standard (para su edad, lee muy bien)."},
  {h:"por in detail", p:"Cause (lo hice por ti), exchange/price (lo compré por 10 euros), duration (por dos horas), through/around (por el parque), means (por teléfono), agent in passives (escrito por Cervantes), and fixed phrases: por favor, por fin, por ejemplo, por supuesto."}],
 tables:[
  {title:"por vs para at a glance", head:["Idea","Preposition","Example"],
   rows:[["purpose / goal","para","Estudio para aprender"],["recipient","para","Es para ti"],
         ["deadline","para","Para el viernes"],["cause / reason","por","Lo hago por amor"],
         ["exchange / price","por","Por veinte euros"],["through / along","por","Caminamos por la playa"],
         ["means","por","Hablamos por teléfono"],["duration","por","Por tres días"]]}]},
"es-negation": {
 theory:[
  {h:"Basic negation", p:"Put no directly before the verb (and before object pronouns): No hablo francés. No lo tengo. Answering negatively usually doubles the no: ¿Vienes? — No, no puedo."},
  {h:"Double negatives are correct", p:"Negative words (nada, nadie, nunca, ninguno, tampoco, ni…ni) require a negative sentence. Either they precede the verb alone (Nadie vino) or no precedes the verb and they follow (No vino nadie). Stacking is fine: No le dije nada a nadie nunca."},
  {h:"ninguno", p:"Shortens to ningún before masculine singular nouns: ningún problema. It's almost always singular: no tengo ninguna pregunta."}],
 tables:[
  {title:"Negative pairs", head:["Affirmative","Negative"],
   rows:[["algo — something","nada — nothing"],["alguien — someone","nadie — nobody"],
         ["siempre — always","nunca / jamás — never"],["también — also","tampoco — neither"],
         ["alguno — some","ninguno — none"],["o…o — either…or","ni…ni — neither…nor"]]}]},
"es-subjunctive": {
 theory:[
  {h:"A mood, not a tense", p:"The subjunctive marks what is wished, doubted, felt about, or not yet real. It appears in subordinate que-clauses after triggers: Quiero que vengas — the coming isn't a fact, it's a desire."},
  {h:"WEIRDO triggers", p:"Wishes (querer que, esperar que), Emotions (me alegra que, temo que), Impersonal expressions (es importante que, es posible que), Recommendations (sugerir que, pedir que), Doubt/Denial (dudar que, no creer que), Ojalá. Creer que and saber que in the affirmative take indicative."},
  {h:"Formation", p:"Start from the yo present, drop -o, add opposite-vowel endings: -ar verbs take -e set (hable), -er/-ir take -a set (coma, viva). This inherits yo irregularities: tenga, haga, conozca, diga. Six truly irregular: sea, esté, vaya, haya, sepa, dé."}],
 tables:[
  {title:"Present subjunctive", head:["Person","hablar","comer","tener","ser"],
   rows:[["yo","hable","coma","tenga","sea"],["tú","hables","comas","tengas","seas"],["él/ella","hable","coma","tenga","sea"],
         ["nosotros","hablemos","comamos","tengamos","seamos"],["ellos","hablen","coman","tengan","sean"]]},
  {title:"Indicative or subjunctive?", head:["Trigger","Mood","Example"],
   rows:[["creo que","indicative","Creo que viene"],["no creo que","subjunctive","No creo que venga"],
         ["es verdad que","indicative","Es verdad que llueve"],["es posible que","subjunctive","Es posible que llueva"],
         ["ojalá (que)","subjunctive","Ojalá gane"]]}]},
"es-perfect": {
 theory:[
  {h:"Building it", p:"haber (he, has, ha, hemos, habéis, han) + past participle (-ado/-ido). The participle never changes: hemos comido. Nothing can split haber from the participle; pronouns go before haber: Lo he visto."},
  {h:"Present vs past perfect", p:"Present perfect connects past to now: He perdido las llaves (they're still lost). Past perfect (había + participle) is past-before-past: Cuando llegué, ya habían cenado."},
  {h:"Regional note", p:"Spain uses the present perfect for today's events (Hoy he desayunado tarde); most of Latin America prefers the preterite (Hoy desayuné tarde). Both are correct."}],
 tables:[
  {title:"haber (present & imperfect)", head:["Person","present","imperfect"],
   rows:[["yo","he","había"],["tú","has","habías"],["él/ella","ha","había"],["nosotros","hemos","habíamos"],["ellos","han","habían"]]},
  {title:"Irregular participles", head:["Infinitive","Participle"],
   rows:[["hacer","hecho"],["decir","dicho"],["ver","visto"],["escribir","escrito"],["poner","puesto"],
         ["volver","vuelto"],["abrir","abierto"],["romper","roto"],["morir","muerto"],["cubrir","cubierto"]]}]},
"es-condicional": {
 theory:[
  {h:"Uses", p:"Would-statements (Yo no haría eso), polite wishes and requests (Me gustaría…, ¿Podrías…?), the future seen from the past (Dijo que vendría), and probability in the past (Serían las diez cuando salió)."},
  {h:"Formation", p:"Infinitive + imperfect -ía endings: hablaría, hablarías… The same twelve verbs that shorten in the future shorten here: tendría, haría, podría, diría, sabría, querría, pondría, saldría, vendría, habría, valdría, cabría."},
  {h:"With si-clauses", p:"The conditional pairs with the imperfect subjunctive for hypotheticals: Si tuviera tiempo, viajaría. Never put the conditional inside the si-clause itself."}],
 tables:[
  {title:"Conditional forms", head:["Person","hablar","poder (irr.)","decir (irr.)"],
   rows:[["yo","hablaría","podría","diría"],["tú","hablarías","podrías","dirías"],["él/ella","hablaría","podría","diría"],
         ["nosotros","hablaríamos","podríamos","diríamos"],["ellos","hablarían","podrían","dirían"]]}]},
"es-imperativo": {
 theory:[
  {h:"Four audiences", p:"tú (informal sg.), usted (formal sg.), vosotros (Spain pl.), ustedes (pl.). Affirmative tú = 3rd person singular present (¡habla!); vosotros = infinitive with -d (¡hablad!); usted/ustedes and ALL negatives use the subjunctive."},
  {h:"Irregular tú commands", p:"Eight to memorize: di (decir), haz (hacer), ve (ir), pon (poner), sal (salir), sé (ser), ten (tener), ven (venir). 'Ve' doubles for ir and ver."},
  {h:"Pronoun attachment", p:"Affirmative: pronouns attach and often force an accent: dímelo, levántate, dáselo. Negative: pronouns go before the verb: no me lo digas, no te levantes."}],
 tables:[
  {title:"Command forms of hablar", head:["Audience","Affirmative","Negative"],
   rows:[["tú","¡habla!","¡no hables!"],["usted","¡hable!","¡no hable!"],
         ["vosotros","¡hablad!","¡no habléis!"],["ustedes","¡hablen!","¡no hablen!"]]},
  {title:"Irregular tú commands", head:["Verb","Command"],
   rows:[["decir","di"],["hacer","haz"],["ir","ve"],["poner","pon"],["salir","sal"],["ser","sé"],["tener","ten"],["venir","ven"]]}]},
"es-obj-pron": {
 theory:[
  {h:"Two sets", p:"Direct object pronouns (lo, la, los, las + me, te, nos, os) replace the thing acted on. Indirect (me, te, le, nos, os, les) mark to/for whom. Both precede conjugated verbs."},
  {h:"Order and the se-rule", p:"When both appear: indirect first, then direct — me lo, te la, nos los. If both are 3rd person, le/les becomes se: Le doy el libro → Se lo doy. Clarify with a él / a ella / a ustedes."},
  {h:"Attachment", p:"With infinitives, gerunds and affirmative commands the pair attaches to the end (accent added to keep stress): dármelo, explicándomelo, ¡dáselo! With negative commands both precede: no se lo des."}],
 tables:[
  {title:"Pronoun forms", head:["Person","Direct","Indirect"],
   rows:[["me","me","me"],["you (tú)","te","te"],["him/it (m.)","lo","le"],["her/it (f.)","la","le"],
         ["us","nos","nos"],["them (m.)","los","les"],["them (f.)","las","les"]]},
  {title:"The le→se change", head:["Without change","Correct form"],
   rows:[["*le lo doy","se lo doy — I give it to him"],["*les la mando","se la mando — I send it to them"]]}]},
"es-comparativos": {
 theory:[
  {h:"Inequality", p:"más/menos + adjective/adverb/noun + que: más rápido que, menos dinero que. Before numbers use de: más de cien euros."},
  {h:"Equality", p:"tan + adjective/adverb + como (tan alto como); tanto/tanta/tantos/tantas + noun + como (tanta paciencia como); verb + tanto como (trabaja tanto como yo)."},
  {h:"Superlatives", p:"Relative: el/la/los/las + más/menos + adj (+ de group): el más alto de la clase. Irregulars: mejor, peor, mayor (older/bigger), menor. Absolute superlative -ísimo intensifies without comparing: rapidísimo, muchísimo, riquísimo (c→qu spelling change)."}],
 tables:[
  {title:"Comparison patterns", head:["Type","Pattern","Example"],
   rows:[["more than","más + adj + que","más caro que"],["less than","menos + adj + que","menos difícil que"],
         ["as … as","tan + adj + como","tan bueno como"],["as much/many … as","tanto/-a/-os/-as + noun + como","tantos libros como"],
         ["the most …","el/la más + adj + de","la más famosa del país"]]},
  {title:"Irregular comparatives", head:["Adjective","Comparative","Superlative"],
   rows:[["bueno","mejor","el mejor"],["malo","peor","el peor"],["grande (age)","mayor","el mayor"],["pequeño (age)","menor","el menor"]]}]},
"es-relativos": {
 theory:[
  {h:"que — the default", p:"que covers who/whom/that/which for people and things: el libro que leo, la mujer que canta. Unlike English, the relative pronoun can never be dropped: the man I saw = el hombre que vi."},
  {h:"After prepositions", p:"For people: preposition + quien(es) (la amiga con quien viajo) or el/la que. For things: preposition + el que / el cual / la que…: la empresa para la que trabajo. Short prepositions also allow que alone with articles."},
  {h:"cuyo and lo que", p:"cuyo/a/os/as = whose, agreeing with what is owned, not the owner: el autor cuyas novelas leí. lo que / lo cual refer to whole ideas: Llegó tarde, lo que me molestó."}],
 tables:[
  {title:"Choosing the relative", head:["Situation","Use","Example"],
   rows:[["subject/object, no preposition","que","la casa que compré"],
         ["person after preposition","quien / el que","el chico con quien salgo"],
         ["thing after preposition","el que / el cual","la mesa sobre la que…"],
         ["possession","cuyo (agrees with owned)","la chica cuyo padre…"],
         ["whole idea","lo que","No sé lo que quiere"]]}]},
"es-imp-subj": {
 theory:[
  {h:"Formation from the preterite", p:"Take the ellos preterite, remove -ron, add -ra endings: hablaron → hablara; tuvieron → tuviera; fueron → fuera. All preterite irregularities carry over automatically. The nosotros form takes an accent: habláramos."},
  {h:"When it appears", p:"Same triggers as the present subjunctive but shifted to the past: Quería que vinieras. Me alegró que ganaras. Also after como si (as if) — always: habla como si lo supiera todo — and in courtesy forms: quisiera, pudiera, debiera."},
  {h:"-ra vs -se", p:"hablara = hablase; both are correct everywhere. The -ra set dominates speech; -se sounds literary. Only -ra can replace the conditional in set phrases (hubiera sido = habría sido)."}],
 tables:[
  {title:"Imperfect subjunctive", head:["Person","hablar","tener","ser/ir"],
   rows:[["yo","hablara","tuviera","fuera"],["tú","hablaras","tuvieras","fueras"],["él/ella","hablara","tuviera","fuera"],
         ["nosotros","habláramos","tuviéramos","fuéramos"],["ellos","hablaran","tuvieran","fueran"]]},
  {title:"Sequence of tenses", head:["Main clause","que-clause"],
   rows:[["Quiero (present)","que vengas (pres. subj.)"],["Quería / Quise (past)","que vinieras (imp. subj.)"],
         ["Me alegra (present)","que estés bien"],["Me alegró (past)","que estuvieras bien"]]}]},
"es-si-clauses": {
 theory:[
  {h:"Three patterns", p:"Real/likely: si + present → present/future/command (Si llueve, nos quedamos). Hypothetical now: si + imperfect subjunctive → conditional (Si tuviera dinero, viajaría). Impossible past: si + pluperfect subjunctive → conditional perfect (Si hubiera sabido, habría venido)."},
  {h:"The golden rule", p:"After si you never use the present subjunctive or the conditional/future. *Si tendría, *si venga are classic errors — the subjunctive belongs after si only in its imperfect or pluperfect form."},
  {h:"Related structures", p:"como si always takes imperfect/pluperfect subjunctive. de + infinitive can compress conditions: De haberlo sabido, habría venido."}],
 tables:[
  {title:"The three conditionals", head:["Type","si-clause","Main clause","Example"],
   rows:[["real","present indicative","present / future","Si puedo, voy"],
         ["hypothetical","imperfect subjunctive","conditional","Si pudiera, iría"],
         ["impossible past","hubiera + participle","habría + participle","Si hubiera podido, habría ido"]]}]},
"es-se-pasiva": {
 theory:[
  {h:"Passive se", p:"For actions with unspecified doers, Spanish prefers se + 3rd person: Se venden pisos. The verb agrees with the noun (se vende pan / se venden coches). Common on signs, recipes, ads."},
  {h:"Impersonal se", p:"With no noun subject at all, the verb stays singular: Se vive bien aquí. Se dice que… With personal a for people: Se ayudó a los víctimas."},
  {h:"Accidental se", p:"The 'no-fault' construction reframes mishaps: se + indirect object + verb agreeing with the thing: Se me cayó el vaso (the glass fell 'on me'), Se nos acabó el pan, Se le olvidaron las llaves."}],
 tables:[
  {title:"The three se constructions", head:["Type","Pattern","Example"],
   rows:[["passive","se + verb (agrees) + noun","Se alquilan habitaciones"],
         ["impersonal","se + verb (singular)","Se come bien aquí"],
         ["accidental","se + me/te/le… + verb + noun","Se me perdió el móvil"]]},
  {title:"Accidental se, person by person", head:["Spanish","English feel"],
   rows:[["se me olvidó","I forgot (it slipped my mind)"],["se te cayó","you dropped it"],
         ["se le rompió","it broke on him/her"],["se nos acabó","we ran out of it"]]}]},
"es-subj-clauses": {
 theory:[
  {h:"Adjective clauses", p:"The mood signals whether the antecedent exists: Busco un piso que tiene balcón (a specific one I know) vs Busco un piso que tenga balcón (any such flat, may not exist). Negated antecedents always take subjunctive: No hay nadie que lo entienda."},
  {h:"Time clauses", p:"Future/pending events after cuando, en cuanto, hasta que, después de que, tan pronto como take subjunctive: Cuando llegues, llámame. Habitual/past facts take indicative: Cuando llego, ceno. antes de que ALWAYS takes subjunctive."},
  {h:"Purpose and concession", p:"para que, a fin de que, sin que + subjunctive: Te lo explico para que lo entiendas. aunque + subjunctive = even if (unknown); aunque + indicative = even though (fact)."}],
 tables:[
  {title:"Conjunction mood cheat-sheet", head:["Conjunction","Mood","Note"],
   rows:[["cuando (future ref.)","subjunctive","Cuando vengas…"],["cuando (habit/past)","indicative","Cuando venía…"],
         ["antes de que","always subjunctive","Antes de que salgas…"],["para que","always subjunctive","…para que aprendas"],
         ["aunque (fact)","indicative","Aunque llueve, salgo"],["aunque (possibility)","subjunctive","Aunque llueva, saldré"]]}]},
"es-perf-cond": {
 theory:[
  {h:"Future perfect", p:"habré + participle = will have done — and, very commonly, probability about the recent past: Habrá salido ya (He's probably left already). Para junio habré terminado (By June I'll have finished)."},
  {h:"Conditional perfect", p:"habría + participle = would have done: Yo habría dicho otra cosa. Pairs with pluperfect subjunctive in impossible-past conditionals; in speech hubiera often replaces habría."},
  {h:"The probability system", p:"Spanish grades guesses by tense: present fact → future form (Serán las dos ≈ it must be two); past fact → conditional (Serían las dos) or future perfect (Habrán sido las dos). deber (de) + infinitive is an alternative: Debe de estar cansado."}],
 tables:[
  {title:"Probability grades", head:["Certain statement","Conjecture"],
   rows:[["Son las dos — it is two","Serán las dos — it must be two"],
         ["Estaba en casa — he was home","Estaría en casa — he was probably home"],
         ["Ha salido — he has left","Habrá salido — he's probably left"]]}]},
"es-diminutivos": {
 theory:[
  {h:"Formation", p:"-ito/-ita attaches to the stem: perro → perrito, casa → casita. Words in -e/-n/-r insert -c-: café → cafecito, joven → jovencito. A final vowel drops: momento → momentito."},
  {h:"What they mean", p:"Size is only part of it: diminutives add affection (abuelita), softening (un favorcito), politeness with time (un momentito, ahorita), and irony. Augmentatives -ón/-azo add size/intensity (casona, golazo, buenazo) and -azo also 'a blow with': portazo, codazo."},
  {h:"Regional flavor", p:"-illo/-illa (Andalusia, often lexicalized: bocadillo), -ico (Costa Rica, Colombia: momentico), -ingo (Bolivia). ahorita means 'right now' in Mexico but 'in a while' in parts of the Caribbean — context matters."}],
 tables:[
  {title:"Suffix effects", head:["Suffix","Effect","Example"],
   rows:[["-ito/-ita","small / dear","gatito — kitty"],["-illo/-illa","small / dismissive / lexical","cigarrillo"],
         ["-ón/-ona","big / intense","casona — big house"],["-azo/-aza","impressive OR a blow","golazo; portazo"],
         ["-ote/-ota","big (often clumsy)","grandote"]]}]},
"es-marcadores": {
 theory:[
  {h:"Why they matter", p:"Discourse markers are the glue of native speech — they manage turns, soften statements and signal attitude. Using them well makes limited grammar sound fluent; ignoring them makes perfect grammar sound robotic."},
  {h:"The core kit", p:"bueno (well / okay), pues (well then, filler), o sea (I mean / that is), es que (the thing is — introduces excuses), a ver (let's see), en fin (anyway), por cierto (by the way), de hecho (in fact), la verdad (honestly)."},
  {h:"Regional OKs and tags", p:"vale (Spain), dale (Argentina/Uruguay), órale/ándale (Mexico), listo (Colombia), ya (Chile/Peru = yes/ok). Tag questions: ¿no?, ¿verdad?, ¿eh?, ¿sabes?"}],
 tables:[
  {title:"Marker toolbox", head:["Marker","Function","Rough English"],
   rows:[["o sea","reformulate","I mean / that is"],["es que","justify","the thing is…"],
         ["pues","hesitate / resume","well…"],["a ver","focus attention","let's see"],
         ["en fin","close a topic","anyway"],["de hecho","reinforce","in fact"],["por cierto","topic shift","by the way"]]}]},
"es-voseo": {
 theory:[
  {h:"Where vos rules", p:"Argentina, Uruguay and Paraguay use vos exclusively; much of Central America (Guatemala to Costa Rica) uses it alongside tú; Chile and Colombia have regional/hybrid forms. In these areas vos is the everyday 'you'."},
  {h:"Vos forms", p:"Present: stress the ending and drop the stem change — hablás, comés, vivís, podés (not puedes), querés. ser → sos. Imperative: drop the -r and stress the final vowel: hablá, comé, vení, decí. Other tenses match tú."},
  {h:"Sound and vocabulary differences", p:"Spain distinguishes c/z (θ) from s; Latin America uses seseo (all = s). Argentina/Uruguay pronounce ll/y as 'sh' (yeísmo rehilado). Everyday words vary: coche/carro/auto, ordenador/computadora, móvil/celular, zumo/jugo, piso/departamento."}],
 tables:[
  {title:"tú vs vos", head:["","tú","vos"],
   rows:[["to speak","tú hablas","vos hablás"],["to be able","tú puedes","vos podés"],
         ["to be","tú eres","vos sos"],["imperative 'come'","ven","vení"],["imperative 'tell'","di","decí"]]},
  {title:"Vocabulary across regions", head:["Spain","Latin America (common)"],
   rows:[["el coche","el carro / el auto"],["el ordenador","la computadora"],["el móvil","el celular"],
         ["el zumo","el jugo"],["las gafas","los lentes / anteojos"]]}]},
/* ============ GERMAN ============ */
"de-gender": {
 theory:[
  {h:"Three genders", p:"German nouns are masculine (der), feminine (die) or neuter (das). Gender is grammatical, not logical — das Mädchen (girl) is neuter because of the -chen suffix. Always learn nouns with their article and plural: der Tisch, die Tische."},
  {h:"Reliable suffix rules", p:"Feminine: -ung, -heit, -keit, -schaft, -ion, -tät, -ik (≈100% reliable). Neuter: -chen, -lein (diminutives), -um, -ment, verbs used as nouns (das Essen). Masculine: -er (doers), -ling, -ismus, days, months, seasons, weather, alcoholic drinks (except das Bier)."},
  {h:"Compounds", p:"Compound nouns take the gender of the LAST element: die Tür + der Griff → der Türgriff; das Haus + die Tür → die Haustür."}],
 tables:[
  {title:"Suffix → gender", head:["Suffix","Gender","Example"],
   rows:[["-ung","die","die Zeitung"],["-heit / -keit","die","die Freiheit"],["-ion","die","die Nation"],
         ["-chen / -lein","das","das Mädchen"],["-um","das","das Museum"],["-er (agent)","der","der Lehrer"],["-ismus","der","der Tourismus"]]},
  {title:"Semantic groups", head:["Group","Gender","Example"],
   rows:[["days, months, seasons","der","der Montag, der Mai"],["metals","das","das Gold"],
         ["numbers as nouns","die","die Drei"],["infinitives as nouns","das","das Lernen"]]}]},
"de-plural": {
 theory:[
  {h:"Five plural families", p:"German plurals fall into patterns: -e (often + umlaut) for many masculines (der Tisch → Tische, der Stuhl → Stühle); -(e)n for nearly all feminines (die Frau → Frauen); -er + umlaut for many neuters (das Kind → Kinder, das Buch → Bücher); -s for foreign words (das Auto → Autos); no ending (± umlaut) for -er/-el/-en masculines (der Lehrer → Lehrer, der Vogel → Vögel)."},
  {h:"Best predictor", p:"Feminine → -(e)n (over 90%). Masculine → -e, often with umlaut. Neuter one syllable → often -er + umlaut. When in doubt, learn the plural with the noun."},
  {h:"Dative plural -n", p:"In the dative plural every noun adds -n if it doesn't already end in one: mit den Kindern, aus den Büchern. (Exception: -s plurals — mit den Autos.)"}],
 tables:[
  {title:"Plural patterns", head:["Pattern","Typical for","Example"],
   rows:[["-e (± umlaut)","masculine","der Tag → die Tage; der Ball → die Bälle"],
         ["-(e)n","feminine","die Lampe → die Lampen"],
         ["-er (+ umlaut)","neuter monosyllables","das Haus → die Häuser"],
         ["- (± umlaut)","-er/-el/-en nouns","der Lehrer → die Lehrer; der Apfel → die Äpfel"],
         ["-s","loanwords","das Hotel → die Hotels"]]}]},
"de-cases": {
 theory:[
  {h:"What cases do", p:"Cases mark a noun's role: nominative = subject, accusative = direct object, dative = indirect object/recipient, genitive = possessor. Because roles are marked, German word order can flex: Den Hund beißt der Mann still means the man bites the dog."},
  {h:"Reading the article", p:"The article carries most of the case signal. Masculine is the only gender that changes in the accusative (der → den); dative changes everywhere (dem/der/dem/den). Learn the article table as a chant: der-die-das-die / den-die-das-die / dem-der-dem-den / des-der-des-der."},
  {h:"Questions to identify the case", p:"Wer/was? → nominative. Wen/was? → accusative. Wem? → dative. Wessen? → genitive."}],
 tables:[
  {title:"Definite articles", head:["Case","masc.","fem.","neut.","plural"],
   rows:[["Nominative","der","die","das","die"],["Accusative","den","die","das","die"],
         ["Dative","dem","der","dem","den (+n)"],["Genitive","des (+s)","der","des (+s)","der"]]},
  {title:"Indefinite/kein articles", head:["Case","masc.","fem.","neut."],
   rows:[["Nominative","ein / kein","eine / keine","ein / kein"],["Accusative","einen / keinen","eine / keine","ein / kein"],
         ["Dative","einem / keinem","einer / keiner","einem / keinem"]]}]},
"de-akkusativ": {
 theory:[
  {h:"Direct objects", p:"The accusative marks what is directly acted on: Ich sehe den Mann. Only masculine articles change (der→den, ein→einen); feminine, neuter and plural look like the nominative."},
  {h:"Accusative prepositions", p:"durch, für, gegen, ohne, um (+ bis, entlang) ALWAYS take accusative: für den Freund, ohne einen Plan, um die Ecke. Mnemonic: 'dogfu' — durch, ohne, gegen, für, um."},
  {h:"Other accusative uses", p:"Time expressions without a preposition: jeden Tag, letzten Monat, den ganzen Abend. Greetings: Guten Morgen! (accusative because 'I wish you…' is implied)."}],
 tables:[
  {title:"Accusative prepositions", head:["Preposition","Meaning","Example"],
   rows:[["durch","through","durch den Park"],["für","for","für dich"],["gegen","against","gegen die Wand"],
         ["ohne","without","ohne meinen Bruder"],["um","around / at","um den Tisch; um acht Uhr"]]}]},
"de-dativ": {
 theory:[
  {h:"Recipients", p:"The dative marks the receiver or beneficiary: Ich gebe dem Kind einen Apfel. Word order default: dative before accusative (unless the accusative is a pronoun: Ich gebe ihn dem Kind)."},
  {h:"Dative prepositions", p:"aus, bei, mit, nach, seit, von, zu, gegenüber ALWAYS take dative: mit dem Bus, seit einem Jahr, zu der (→zur) Schule. Contractions: zu dem→zum, zu der→zur, bei dem→beim, von dem→vom."},
  {h:"Dative verbs", p:"Some verbs take a dative object even though English expects a direct object: helfen, danken, gefallen, gehören, folgen, glauben, antworten, passen, schmecken: Ich helfe dir. Das Buch gehört mir."}],
 tables:[
  {title:"Dative prepositions", head:["Preposition","Meaning","Example"],
   rows:[["aus","out of / from","aus der Flasche"],["bei","at / near","bei meiner Oma"],["mit","with","mit dem Zug"],
         ["nach","after / to","nach Hause"],["seit","since / for","seit zwei Jahren"],["von","from / of","von meinem Vater"],["zu","to","zum Arzt"]]},
  {title:"Common dative verbs", head:["Verb","Example"],
   rows:[["helfen","Ich helfe dem Mann"],["danken","Wir danken euch"],["gefallen","Der Film gefällt mir"],
         ["gehören","Das gehört ihr"],["glauben","Ich glaube dir"]]}]},
"de-present": {
 theory:[
  {h:"One present, many uses", p:"German present covers English simple and progressive: ich lerne = I learn / I am learning. With a time word it also covers the future: Morgen fliege ich nach Rom."},
  {h:"Regular endings", p:"-e, -st, -t, -en, -t, -en on the stem: machen → ich mache, du machst, er macht. Stems in -t/-d insert e: du arbeitest, er findet."},
  {h:"Vowel-change verbs", p:"Many strong verbs change the vowel in du and er/sie/es only: fahren → du fährst; sprechen → du sprichst; sehen → du siehst; nehmen → du nimmst; essen → du isst; lesen → du liest."}],
 tables:[
  {title:"Present tense", head:["Person","machen","fahren (a→ä)","sprechen (e→i)","sein","haben"],
   rows:[["ich","mache","fahre","spreche","bin","habe"],["du","machst","fährst","sprichst","bist","hast"],
         ["er/sie/es","macht","fährt","spricht","ist","hat"],["wir","machen","fahren","sprechen","sind","haben"],
         ["ihr","macht","fahrt","sprecht","seid","habt"],["sie/Sie","machen","fahren","sprechen","sind","haben"]]}]},
"de-wordorder": {
 theory:[
  {h:"Verb second — always", p:"In main clauses the conjugated verb is the SECOND element (not necessarily the second word). Whatever comes first — subject, time, object — the verb follows: Ich gehe heute ins Kino. / Heute gehe ich ins Kino. / Ins Kino gehe ich heute."},
  {h:"The bracket", p:"Two-part predicates form a bracket (Satzklammer): the conjugated part is second, the rest goes last: Ich habe gestern Pizza gegessen. Ich will morgen früh aufstehen. Er ruft mich heute an."},
  {h:"Mittelfeld order: TeKaMoLo", p:"Inside the bracket, adverbials default to Temporal–Kausal–Modal–Lokal (when–why–how–where): Ich fahre heute wegen des Termins schnell nach Berlin."}],
 tables:[
  {title:"Position 1 varies, verb stays second", head:["Position 1","Verb","Rest"],
   rows:[["Ich","gehe","heute ins Kino"],["Heute","gehe","ich ins Kino"],["Ins Kino","gehe","ich heute"],
         ["Leider","kann","ich nicht kommen"]]},
  {title:"TeKaMoLo", head:["Slot","Question","Example"],
   rows:[["Temporal","wann?","heute"],["Kausal","warum?","wegen des Regens"],["Modal","wie?","mit dem Bus"],["Lokal","wo(hin)?","nach Hause"]]}]},
"de-nebensatz": {
 theory:[
  {h:"Verb to the end", p:"Subordinating conjunctions (dass, weil, wenn, ob, obwohl, als, während, bevor, nachdem, damit…) send the conjugated verb to the END of their clause: Ich weiß, dass du recht hast. Ich bleibe zu Hause, weil ich krank bin."},
  {h:"Comma discipline", p:"Main and subordinate clause are always separated by a comma. If the subordinate clause comes first, it occupies position 1, so the main verb follows immediately: Weil ich krank bin, bleibe ich zu Hause — 'verb, verb' at the junction."},
  {h:"Separables and stacks", p:"Separable verbs rejoin at the end: …, weil er heute ankommt. With modals/perfect, the conjugated part goes very last: …, weil ich nicht kommen kann; …, dass er gegangen ist."}],
 tables:[
  {title:"Common subordinators", head:["Conjunction","Meaning","Example"],
   rows:[["dass","that","Ich glaube, dass es regnet"],["weil","because","…, weil ich müde bin"],
         ["wenn","if / whenever","Wenn es regnet, bleibe ich"],["ob","whether","Ich weiß nicht, ob er kommt"],
         ["obwohl","although","Obwohl es regnet, gehe ich"],["als","when (single past)","Als ich Kind war, …"]]},
  {title:"weil vs denn", head:["weil (subordinate)","denn (coordinate)"],
   rows:[["…, weil ich müde BIN (verb last)","…, denn ich BIN müde (verb second)"]]}]},
"de-modal": {
 theory:[
  {h:"The six modals", p:"können (can), müssen (must), wollen (want), sollen (should), dürfen (may), mögen (like; möchte = would like). The modal conjugates in position 2, the main verb waits at the end as a bare infinitive: Ich kann heute nicht kommen."},
  {h:"Singular vowel change", p:"Modals change their vowel in the singular and drop endings in ich/er: ich kann, du kannst, er kann — wir können. möchte behaves like a normal weak verb (ich möchte, du möchtest)."},
  {h:"Meaning traps", p:"Ich muss nicht = I don't HAVE to (not 'must not'!). 'Must not' = ich darf nicht. sollen reports another's will or advice: Du sollst mehr schlafen."}],
 tables:[
  {title:"Modal conjugation (singular irregular)", head:["","können","müssen","dürfen","wollen","mögen/möchte"],
   rows:[["ich","kann","muss","darf","will","mag / möchte"],["du","kannst","musst","darfst","willst","magst / möchtest"],
         ["er/sie","kann","muss","darf","will","mag / möchte"],["wir","können","müssen","dürfen","wollen","mögen / möchten"]]},
  {title:"Watch the meaning", head:["German","English"],
   rows:[["Ich muss nicht gehen","I don't have to go"],["Ich darf nicht gehen","I must not go"],
         ["Ich soll gehen","I'm supposed to go"],["Ich möchte gehen","I would like to go"]]}]},
"de-perfekt": {
 theory:[
  {h:"The spoken past", p:"Conversation about the past uses the Perfekt: haben/sein (position 2) + Partizip II (end). Ich habe gestern gearbeitet. Sie ist nach Rom geflogen."},
  {h:"haben or sein?", p:"sein with movement from A to B (gehen, fahren, fliegen, kommen) and change of state (aufwachen, einschlafen, sterben, werden) plus bleiben, sein, passieren. Everything else — including all verbs with a direct object — takes haben."},
  {h:"Building the participle", p:"Weak verbs: ge + stem + t (gemacht, gearbeitet). Strong verbs: ge + (changed) stem + en (gesehen, getrunken, gefunden). No ge- for inseparable prefixes (besucht, verstanden) and -ieren verbs (studiert). Separable verbs sandwich it: eingekauft, angerufen."}],
 tables:[
  {title:"Participle patterns", head:["Verb type","Pattern","Example"],
   rows:[["weak","ge…t","machen → gemacht"],["strong","ge…en (vowel may change)","trinken → getrunken"],
         ["-ieren","…t (no ge-)","studieren → studiert"],["inseparable prefix","…t/…en (no ge-)","besuchen → besucht"],
         ["separable prefix","prefix+ge+…","einkaufen → eingekauft"]]},
  {title:"sein-verbs to memorize", head:["Verb","Perfekt"],
   rows:[["gehen","ist gegangen"],["fahren","ist gefahren"],["kommen","ist gekommen"],["bleiben","ist geblieben"],
         ["werden","ist geworden"],["sterben","ist gestorben"],["passieren","ist passiert"]]}]},
"de-praeteritum": {
 theory:[
  {h:"The written past", p:"Novels, news and reports narrate in Präteritum: Er öffnete die Tür und sah sie. In speech it survives mainly with sein, haben and the modals: ich war, ich hatte, ich konnte, ich musste, ich wollte."},
  {h:"Formation", p:"Weak verbs insert -te-: machen → machte, machtest, machte, machten. Strong verbs change the vowel and take bare endings: gehen → ging, sehen → sah, finden → fand, kommen → kam."},
  {h:"Mixed verbs", p:"A small group changes the vowel AND takes -te: bringen → brachte, denken → dachte, wissen → wusste, kennen → kannte, nennen → nannte."}],
 tables:[
  {title:"Präteritum essentials", head:["Verb","ich/er","Verb","ich/er"],
   rows:[["sein","war","haben","hatte"],["werden","wurde","können","konnte"],
         ["müssen","musste","wollen","wollte"],["gehen","ging","kommen","kam"],
         ["sehen","sah","geben","gab"],["wissen","wusste","denken","dachte"]]}]},
"de-separable": {
 theory:[
  {h:"How they split", p:"Stressed prefixes (an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-…) detach and go to the end in main clauses: aufstehen → Ich stehe um sieben auf. anrufen → Ruf mich an!"},
  {h:"When they rejoin", p:"Subordinate clause: …, weil ich früh aufstehe. With zu: aufzustehen (zu goes inside). Participle: aufgestanden (ge goes inside). With modals: Ich muss früh aufstehen."},
  {h:"Inseparable prefixes", p:"be-, emp-, ent-, er-, ge-, miss-, ver-, zer- never split and are unstressed: besuchen → ich besuche, participle besucht (no ge-). Some prefixes (um-, über-, durch-, unter-) go both ways with different meanings: úmfahren (run over) vs umfáhren (drive around)."}],
 tables:[
  {title:"Separable prefix behavior", head:["Context","aufstehen"],
   rows:[["main clause","Ich stehe früh auf"],["subordinate clause","…, weil ich früh aufstehe"],
         ["with modal","Ich will früh aufstehen"],["Perfekt","Ich bin früh aufgestanden"],["with zu","Es ist schwer, früh aufzustehen"]]},
  {title:"Separable vs inseparable", head:["Separable (stressed)","Inseparable (unstressed)"],
   rows:[["an-, auf-, aus-, ein-","be-, ver-, er-, ent-"],["mit-, zu-, vor-, zurück-","ge-, emp-, miss-, zer-"]]}]},
"de-negation": {
 theory:[
  {h:"nicht vs kein", p:"kein negates nouns with ein or no article: Ich habe kein Auto. Das ist keine gute Idee. nicht negates everything else — verbs, adjectives, adverbs, and nouns with definite articles/possessives: Das ist nicht mein Auto."},
  {h:"Where nicht goes", p:"To negate the whole sentence, nicht goes toward the end — but before the second bracket part (participle, infinitive, prefix, predicate adjective, direction): Ich habe ihn nicht gesehen. Ich stehe nicht auf. Das Haus ist nicht groß. To negate one element, nicht goes directly before it: Nicht ich habe das gesagt."},
  {h:"Answering with doch", p:"doch contradicts a negative question positively: Hast du keine Zeit? — Doch! (Yes I do!)."}],
 tables:[
  {title:"kein declension", head:["Case","masc.","fem.","neut.","plural"],
   rows:[["Nominative","kein","keine","kein","keine"],["Accusative","keinen","keine","kein","keine"],
         ["Dative","keinem","keiner","keinem","keinen"]]},
  {title:"nicht placement", head:["Negating…","Position","Example"],
   rows:[["whole sentence","late, before bracket end","Ich kaufe das Auto nicht"],
         ["adjective","before it","Das ist nicht teuer"],["specific element","before it","Er kommt nicht heute (sondern morgen)"]]}]},
"de-adjektiv": {
 theory:[
  {h:"Predicative vs attributive", p:"After sein/werden/bleiben adjectives take NO ending: Das Haus ist groß. Before a noun they must decline: das große Haus. The ending depends on gender, case, number AND which article precedes."},
  {h:"The one-marker principle", p:"Each noun phrase shows the case signal exactly once. Der shows it → adjective takes weak -e/-en. Ein (no ending in m./n. nominative) hides it → adjective shows it: ein großER Mann, ein großES Kind. No article at all → adjective carries everything (strong endings = der-word endings): frischES Brot, mit heißER Milch."},
  {h:"The 5-e corner", p:"Weak declension is only -e in five slots (nom. m/f/n + acc. f/n); everything else is -en. Master that corner and the rest is -en."}],
 tables:[
  {title:"After der (weak)", head:["Case","masc.","fem.","neut.","plural"],
   rows:[["Nom.","der alte","die alte","das alte","die alten"],["Akk.","den alten","die alte","das alte","die alten"],
         ["Dat.","dem alten","der alten","dem alten","den alten"]]},
  {title:"After ein (mixed)", head:["Case","masc.","fem.","neut."],
   rows:[["Nom.","ein alter","eine alte","ein altes"],["Akk.","einen alten","eine alte","ein altes"],
         ["Dat.","einem alten","einer alten","einem alten"]]}]},
"de-wechsel": {
 theory:[
  {h:"Nine two-way prepositions", p:"an, auf, hinter, in, neben, über, unter, vor, zwischen take accusative OR dative. The question decides: wohin? (movement to a place) → accusative; wo? (location) → dative."},
  {h:"Verb pairs", p:"Movement/placement verbs pair with position verbs: stellen (acc.) / stehen (dat.); legen (acc.) / liegen (dat.); setzen (acc.) / sitzen (dat.); hängen works for both. Ich stelle die Flasche auf den Tisch → Die Flasche steht auf dem Tisch."},
  {h:"Contractions and abstract uses", p:"an dem → am, in dem → im, an das → ans, in das → ins. Abstract/fixed uses must be memorized: warten auf + acc., denken an + acc., Angst vor + dat., teilnehmen an + dat."}],
 tables:[
  {title:"wohin? vs wo?", head:["Accusative (motion)","Dative (location)"],
   rows:[["Ich gehe in die Schule","Ich bin in der Schule"],["Er legt das Buch auf den Tisch","Das Buch liegt auf dem Tisch"],
         ["Wir fahren ans Meer","Wir sind am Meer"],["Sie hängt das Bild an die Wand","Das Bild hängt an der Wand"]]},
  {title:"Placement/position verb pairs", head:["Action (acc.)","State (dat.)"],
   rows:[["stellen — to stand sth up","stehen — to stand"],["legen — to lay","liegen — to lie"],["setzen — to set","sitzen — to sit"]]}]},
"de-questions": {
 theory:[
  {h:"Yes/no questions", p:"Verb first, subject second: Kommst du mit? Hast du Zeit? Answer negative questions positively with doch."},
  {h:"W-questions", p:"Question word first, verb second: Wo wohnst du? The W-words: wer/wen/wem/wessen (who by case), was, wann, wo, wohin, woher, warum, wie, wie viel(e), welcher, was für ein."},
  {h:"Prepositions + question words", p:"For things, fuse wo(r) + preposition: Worauf wartest du? Womit fährst du? For people, keep them separate: Auf wen wartest du? Mit wem fährst du?"}],
 tables:[
  {title:"W-words", head:["Word","Meaning","Example"],
   rows:[["wer / wen / wem","who (nom/acc/dat)","Wem gehört das?"],["was","what","Was machst du?"],
         ["wann","when","Wann beginnt es?"],["wo / wohin / woher","where / where to / from","Wohin gehst du?"],
         ["warum","why","Warum lernst du Deutsch?"],["wie","how","Wie heißt du?"],["welcher","which","Welches Buch?"]]}]},
"de-genitiv": {
 theory:[
  {h:"Form", p:"des/eines + noun-(e)s for masculine and neuter (des Mannes, des Kindes — one-syllable nouns prefer -es); der/einer with no noun ending for feminine and plural (der Frau, der Kinder). The genitive phrase FOLLOWS the noun it modifies: das Auto meines Vaters."},
  {h:"Genitive prepositions", p:"wegen (because of), während (during), trotz (despite), (an)statt (instead of), innerhalb/außerhalb (inside/outside of), aufgrund (due to): trotz des Regens, während des Krieges. In casual speech these often slip into dative."},
  {h:"Alternatives", p:"Spoken German prefers von + dative: das Auto von meinem Vater. Proper names simply add -s (no apostrophe): Annas Buch, Deutschlands Städte."}],
 tables:[
  {title:"Genitive articles", head:["","masc.","fem.","neut.","plural"],
   rows:[["definite","des …(e)s","der","des …(e)s","der"],["indefinite","eines …(e)s","einer","eines …(e)s","—"],
         ["example","des Tisches","der Lampe","des Autos","der Bücher"]]},
  {title:"Genitive prepositions", head:["Preposition","Example"],
   rows:[["wegen","wegen des Wetters"],["trotz","trotz der Kälte"],["während","während des Films"],
         ["statt","statt eines Briefes"],["innerhalb","innerhalb einer Woche"]]}]},
"de-adjdekl": {
 theory:[
  {h:"Three declension classes", p:"Weak after der-words (der, dieser, jeder…), mixed after ein-words (ein, kein, mein…), strong with no article. The system implements one idea: the case/gender marker appears exactly once per noun phrase."},
  {h:"Strong = der-word endings", p:"With no article, the adjective takes the ending the definite article would have had: kalter Kaffee (der), kaltes Wasser (das), mit kalter Milch (der→dat. fem.). Exception: genitive m./n. is -en because the noun's -s already marks it: trotz starken Regens."},
  {h:"Practical shortcut", p:"Plural after alle → -en; after viele/einige/mehrere → strong endings (viele gute Ideen). Two adjectives take the same ending: ein schöner, warmer Tag."}],
 tables:[
  {title:"Strong endings (no article)", head:["Case","masc.","fem.","neut.","plural"],
   rows:[["Nom.","guter Wein","gute Milch","gutes Brot","gute Leute"],
         ["Akk.","guten Wein","gute Milch","gutes Brot","gute Leute"],
         ["Dat.","gutem Wein","guter Milch","gutem Brot","guten Leuten"]]},
  {title:"The system in one view (nom. masc.)", head:["Article","Adjective","Example"],
   rows:[["der (marks case)","weak -e","der gute Mann"],["ein (no marker)","strong -er","ein guter Mann"],
         ["— (nothing)","strong -er","guter Mann"]]}]},
"de-passiv": {
 theory:[
  {h:"Process passive", p:"werden + Partizip II focuses the action, not the doer: Das Haus wird gebaut. Tenses move through werden: wurde gebaut (Präteritum), ist gebaut worden (Perfekt — note worden, not geworden), wird gebaut werden (future)."},
  {h:"Agent and instrument", p:"The doer enters with von + dative (people/agents): von meiner Mutter gekocht. Means/cause with durch + accusative: durch das Feuer zerstört. Often the agent is simply dropped — that's the point of the passive."},
  {h:"State passive & substitutes", p:"sein + Partizip II describes the resulting state: Die Tür ist geschlossen (it IS closed) vs wird geschlossen (is being closed). Alternatives: man (Man spricht hier Deutsch), sich lassen (Das lässt sich machen), -bar adjectives (machbar)."}],
 tables:[
  {title:"Passive through the tenses", head:["Tense","Form"],
   rows:[["Präsens","wird gebaut"],["Präteritum","wurde gebaut"],["Perfekt","ist gebaut worden"],
         ["Plusquamperfekt","war gebaut worden"],["Futur I","wird gebaut werden"],["mit Modalverb","muss gebaut werden"]]},
  {title:"Vorgangs- vs Zustandspassiv", head:["werden-passive (process)","sein-passive (state)"],
   rows:[["Die Tür wird geschlossen — being closed","Die Tür ist geschlossen — is closed"],
         ["Der Tisch wird gedeckt","Der Tisch ist gedeckt"]]}]},
"de-futur": {
 theory:[
  {h:"Futur I", p:"werden (position 2) + infinitive (end): Ich werde dich morgen anrufen. For scheduled plans, Germans prefer plain present + time adverb: Morgen rufe ich dich an."},
  {h:"Assumption reading", p:"werden + wohl/vermutlich/sicher expresses present probability: Sie wird wohl noch schlafen (she's probably still asleep). This is the most common everyday use of Futur I."},
  {h:"Futur II", p:"werden + Partizip II + haben/sein: completed by a future point (Bis Montag werde ich es geschafft haben) or a guess about the past (Er wird den Zug verpasst haben — he's probably missed the train)."}],
 tables:[
  {title:"Talking about the future", head:["Form","Use","Example"],
   rows:[["Präsens + Zeitangabe","plans, schedules","Ich fliege morgen"],
         ["Futur I","predictions, promises, assumptions","Es wird regnen; Er wird wohl krank sein"],
         ["Futur II","completed future / past guess","Bis dahin werde ich fertig sein; Sie wird es vergessen haben"]]}]},
"de-relativ": {
 theory:[
  {h:"Pronoun choice", p:"Gender and number come from the noun; case comes from the pronoun's role inside the clause: Der Mann, DER dort steht (subject) / DEN ich sehe (object) / DEM ich helfe (dative verb) / DESSEN Auto rot ist (possessive)."},
  {h:"Differences from articles", p:"Relative pronouns match definite articles except: dative plural denen and all genitives dessen/deren: die Leute, denen ich danke; die Frau, deren Sohn ich kenne."},
  {h:"With prepositions and was/wo", p:"The preposition moves in front of the pronoun: das Haus, in dem ich wohne. Use was after alles/etwas/nichts/das and whole clauses: alles, was ich habe. Places can take wo: die Stadt, wo ich geboren wurde."}],
 tables:[
  {title:"Relative pronouns", head:["Case","masc.","fem.","neut.","plural"],
   rows:[["Nominative","der","die","das","die"],["Accusative","den","die","das","die"],
         ["Dative","dem","der","dem","denen"],["Genitive","dessen","deren","dessen","deren"]]}]},
"de-konj2": {
 theory:[
  {h:"Two ways to build it", p:"(1) würde + infinitive works for almost every verb: Ich würde das kaufen. (2) One-word forms from the Präteritum + umlaut for the common verbs: war→wäre, hatte→hätte, konnte→könnte, musste→müsste, wusste→wüsste, kam→käme, ging→ginge. Prefer the one-word form for sein, haben, werden and the modals."},
  {h:"Unreal present and past", p:"Present unreal: Wenn ich Zeit hätte, würde ich kommen / käme ich. Past unreal: hätte/wäre + Partizip II — Wenn du angerufen hättest, wäre ich gekommen. Wishes: Wenn ich doch mehr Zeit hätte! Hätte ich das nur gewusst!"},
  {h:"Politeness machine", p:"Konjunktiv II softens requests: Könnten Sie…? Würden Sie bitte…? Ich hätte gern… Wären Sie so nett…? Essential for shops, offices and email."}],
 tables:[
  {title:"Key one-word forms", head:["Infinitive","Präteritum","Konjunktiv II"],
   rows:[["sein","war","wäre"],["haben","hatte","hätte"],["können","konnte","könnte"],
         ["müssen","musste","müsste"],["dürfen","durfte","dürfte"],["wissen","wusste","wüsste"],
         ["kommen","kam","käme"],["gehen","ging","ginge"]]},
  {title:"Real vs unreal", head:["Real condition","Unreal condition"],
   rows:[["Wenn ich Zeit habe, komme ich","Wenn ich Zeit hätte, würde ich kommen"],
         ["Wenn es regnet, bleiben wir","Wenn es geregnet hätte, wären wir geblieben"]]}]},
"de-konj1": {
 theory:[
  {h:"Formation", p:"Infinitive stem + -e, -est, -e, -en, -et, -en: er habe, er komme, er wisse. sein is special: ich sei, du sei(e)st, er sei, wir seien. Only the er/sie/es form differs clearly from the indicative for most verbs — which is where you'll meet it."},
  {h:"Reported speech", p:"News and formal writing use Konjunktiv I to mark 'this is a claim, not my statement': Der Minister sagte, er habe nichts gewusst. Die Sprecherin erklärte, es gebe keine Beweise. Questions and commands shift too: Sie fragte, ob er komme; Er sagte, ich solle warten."},
  {h:"Fallback chain", p:"If Konjunktiv I equals the indicative (e.g. sie haben), switch to Konjunktiv II (sie hätten); if that's ambiguous too, use würde. This chain keeps reported speech recognizably indirect."}],
 tables:[
  {title:"Konjunktiv I (er/sie/es)", head:["Verb","Indicative","Konjunktiv I"],
   rows:[["haben","hat","habe"],["sein","ist","sei"],["kommen","kommt","komme"],
         ["wissen","weiß","wisse"],["geben","gibt","gebe"],["können","kann","könne"]]}]},
"de-infinitiv": {
 theory:[
  {h:"When zu appears", p:"After most verbs (hoffen, versuchen, vergessen, anfangen, aufhören, vorhaben…), adjectives (Es ist schwer, …) and nouns (die Möglichkeit, …): Ich hoffe, dich bald zu sehen. Comma before the zu-clause is standard when it has its own elements."},
  {h:"No zu", p:"After modals (Ich kann schwimmen), after gehen/fahren/bleiben (Ich gehe einkaufen), after sehen/hören/lassen (Ich höre sie singen; Ich lasse das Auto reparieren) and after werden (future)."},
  {h:"um/ohne/statt … zu", p:"um…zu = purpose (Ich spare, um zu reisen — only when subjects match; otherwise damit); ohne…zu = without -ing (Er ging, ohne zu grüßen); (an)statt…zu = instead of -ing. Separable verbs wrap zu inside: aufzustehen, mitzukommen, anzurufen."}],
 tables:[
  {title:"zu or no zu?", head:["Trigger","zu?","Example"],
   rows:[["hoffen, versuchen, vergessen…","zu","Ich versuche zu schlafen"],
         ["Modalverben","no zu","Ich muss gehen"],["gehen / sehen / lassen","no zu","Wir gehen schwimmen"],
         ["Es ist + Adjektiv","zu","Es ist leicht zu verstehen"],["um / ohne / statt","…zu","um zu lernen"]]}]},
"de-plusquam": {
 theory:[
  {h:"Past before past", p:"hatte/war + Partizip II sets an event before another past event: Ich hatte schon gegessen, als er kam. The haben/sein choice follows the same rules as the Perfekt."},
  {h:"With nachdem", p:"nachdem practically requires it: Nachdem sie gegangen war, wurde es still. Pattern: nachdem-clause in Plusquamperfekt, main clause in Präteritum/Perfekt. With bevor, the tenses swap roles."},
  {h:"In reported past", p:"The Plusquamperfekt also renders 'had done' in stories and indirect speech: Er erzählte, dass er den Film schon gesehen hatte."}],
 tables:[
  {title:"Past timeline", head:["Earlier event (Plusquamperfekt)","Later event (Präteritum)"],
   rows:[["Nachdem ich gegessen hatte,","ging ich spazieren"],
         ["Sie war schon abgefahren,","als ich ankam"],
         ["Er hatte lange gewartet,","bevor sie endlich kam"]]}]},
"de-partizip": {
 theory:[
  {h:"Partizip I", p:"Infinitive + d, declined like an adjective, means 'currently doing': das schlafende Kind, steigende Preise, eine überraschende Antwort. As adverb: Er kam lachend herein."},
  {h:"Partizip II as adjective", p:"Completed or passive sense: die geschlossene Tür, das gestohlene Auto, frisch gebackenes Brot. Also declined like a normal adjective."},
  {h:"Extended attributes", p:"Formal writing stacks modifiers before the noun where English would use a relative clause: die [von der Regierung im letzten Jahr geplante] Reform. Reading strategy: find article + noun first (die … Reform), then unpack the middle as a clause: die Reform, die von der Regierung geplant wurde."}],
 tables:[
  {title:"Participles at a glance", head:["Form","Built as","Meaning","Example"],
   rows:[["Partizip I","Infinitiv + d","ongoing / active","der lachende Mann"],
         ["Partizip II","ge…t / ge…en","completed / passive","der reparierte Wagen"]]},
  {title:"Unpacking an extended attribute", head:["Compressed","Expanded"],
   rows:[["die 1900 gebaute Brücke","die Brücke, die 1900 gebaut wurde"],
         ["der viel diskutierte Plan","der Plan, der viel diskutiert wird"]]}]},
"de-nominal": {
 theory:[
  {h:"Nominal style", p:"Formal German compresses verb-clauses into noun phrases: Als wir ankamen… → Bei unserer Ankunft… This 'Nominalstil' rules administration, law, and academic writing. To read it, re-verbalize: locate the action noun and mentally convert it back into a verb."},
  {h:"Funktionsverbgefüge", p:"Fixed verb+noun idioms replace simple verbs, adding formality: eine Entscheidung treffen (entscheiden), zur Verfügung stehen (verfügbar sein), in Frage kommen (möglich sein), Kritik üben (kritisieren), in Anspruch nehmen (nutzen), zum Ausdruck bringen (ausdrücken)."},
  {h:"Nominalization mechanics", p:"Infinitives become neuter nouns (das Lesen), verbs take -ung (entwickeln → die Entwicklung), adjectives take -heit/-keit (möglich → die Möglichkeit). Chains of genitives are the telltale sign of officialese: die Prüfung der Unterlagen des Antragstellers."}],
 tables:[
  {title:"Common Funktionsverbgefüge", head:["Phrase","Plain verb","Meaning"],
   rows:[["eine Entscheidung treffen","entscheiden","to decide"],["zur Verfügung stehen","verfügbar sein","to be available"],
         ["in Frage kommen","möglich sein","to be an option"],["Kritik üben an","kritisieren","to criticize"],
         ["in Anspruch nehmen","nutzen","to make use of"],["Bescheid geben","informieren","to let know"]]}]},
"de-partikeln": {
 theory:[
  {h:"What they do", p:"Modal particles (Abtönungspartikeln) tune the emotional key of a sentence — impatience, surprise, reassurance, shared knowledge. They're unstressed, sit in the Mittelfeld, and can stack: Komm doch mal her!"},
  {h:"The core set", p:"doch (contradiction/encouragement), mal (casualness), ja (shared knowledge/surprise), eben/halt (resignation: that's just how it is), schon (reassurance), denn (interest in questions: Was machst du denn?), eigentlich (softens questions: Wo wohnst du eigentlich?), wohl (probably)."},
  {h:"Stacking order", p:"Typical combinations: doch mal, ja wohl, doch wohl, halt eben. Misplacing or stressing them sounds off — listen and copy whole sentences rather than translating."}],
 tables:[
  {title:"Particle meanings in context", head:["Particle","Sentence","Effect"],
   rows:[["doch","Komm doch mit!","encouraging: come on!"],["ja","Das ist ja toll!","surprise: wow"],
         ["mal","Warte mal.","casual: just wait a sec"],["eben","Das ist eben so.","resigned: that's just how it is"],
         ["schon","Das wird schon.","reassuring: it'll be fine"],["denn","Wo warst du denn?","interested question"]]}]},
"de-konnektoren": {
 theory:[
  {h:"Two-part connectors", p:"zwar…aber (admittedly…but), entweder…oder (either…or), weder…noch (neither…nor), sowohl…als auch (both…and), nicht nur…sondern auch (not only…but also), je…desto/umso (the more…the more — je-clause verb-final, desto + comparative + verb second)."},
  {h:"Adverbial connectors", p:"deshalb/daher/darum (therefore), trotzdem/dennoch (nevertheless), außerdem (moreover), allerdings (however), folglich (consequently), hingegen (in contrast), stattdessen (instead). They fill position 1, so the verb comes straight after: Dennoch kam er."},
  {h:"Elegant subordinators", p:"indem (by …ing), sodass (so that/result), falls (in case), sofern (provided that), obgleich (although, formal), während (whereas). indem expresses method: Man lernt eine Sprache, indem man sie spricht."}],
 tables:[
  {title:"Connector syntax", head:["Type","Verb position","Example"],
   rows:[["Konjunktion (und, aber, denn)","unchanged","…, denn er ist müde"],
         ["Adverb (deshalb, trotzdem)","verb right after","…; deshalb bleibt er"],
         ["Subjunktion (weil, obwohl, indem)","verb at end","…, weil er müde ist"]]},
  {title:"Two-part pairs", head:["Pair","Meaning"],
   rows:[["je … desto","the more … the more"],["zwar … aber","admittedly … but"],
         ["weder … noch","neither … nor"],["sowohl … als auch","both … and"]]}]},
"de-umgang": {
 theory:[
  {h:"Sound of the street", p:"Colloquial German clips endings and fuses words: ich hab', wir ham, 'nen (einen), gibt's, geht's, haste (hast du), willste. The particle-rich, contracted style is what you hear in series and podcasts."},
  {h:"Grammar loosening", p:"weil and obwohl often take verb-second in speech (nonstandard): …weil ich hab keine Zeit. tun appears as a helper: Ich tu grad kochen. Past = Perfekt almost everywhere; Präteritum survives in war/hatte/modals."},
  {h:"Regional markers", p:"Greetings: Moin (north), Grüß Gott/Servus (Bavaria/Austria), Grüezi (Switzerland), Hallo everywhere. Diminutives: standard -chen/-lein; Swabian -le (Häusle), Austrian -erl (Sackerl), Swiss -li (Müesli). Austria has its own food words: Erdapfel (Kartoffel), Paradeiser (Tomate), Marille (Aprikose)."}],
 tables:[
  {title:"Written vs spoken", head:["Standard written","Everyday spoken"],
   rows:[["Ich habe einen Hund","Ich hab 'nen Hund"],["Wie geht es dir?","Wie geht's (dir)?"],
         ["Hast du Zeit?","Haste Zeit?"],["Wir haben es gesehen","Wir ham's gesehen"]]},
  {title:"Regional greetings & words", head:["Region","Greeting","Sample word"],
   rows:[["Norddeutschland","Moin","Brötchen"],["Bayern / Österreich","Servus / Grüß Gott","Semmel (Brötchen)"],
         ["Schweiz","Grüezi","Velo (Fahrrad)"],["Österreich","Servus","Paradeiser (Tomate)"]]}]},
/* ============ JAPANESE ============ */
"ja-writing": {
 theory:[
  {h:"Three scripts, one sentence", p:"Japanese mixes hiragana (grammar endings, particles, native words), katakana (loanwords, emphasis, onomatopoeia) and kanji (content words). A typical sentence uses all three: 私はコーヒーを飲みます — kanji 私/飲, hiragana は/を/みます, katakana コーヒー."},
  {h:"Kana are syllabaries", p:"Each kana is one mora (syllable beat): か = ka, し = shi. Both sets encode the same 46 basic sounds plus voiced marks (か→が ga), combos (きゃ kya), small っ (doubled consonant) and long vowels (おう/ー)."},
  {h:"Learning order", p:"Hiragana first (all grammar is written in it), then katakana, then kanji gradually by frequency. Romaji is training wheels — this app shows it, but read the kana whenever you can."}],
 tables:[
  {title:"Script roles", head:["Script","Used for","Example"],
   rows:[["Hiragana","particles, endings, native words","は, を, たべます"],
         ["Katakana","loanwords, foreign names, emphasis","コーヒー, アメリカ"],
         ["Kanji","word stems: nouns, verb/adj roots","水, 食, 大"]]},
  {title:"Kana sound modifications", head:["Mark","Effect","Example"],
   rows:[["゛(dakuten)","voices the consonant","か ka → が ga"],["゜(handakuten)","h → p","は ha → ぱ pa"],
         ["small ゃゅょ","combines","き + ゃ = きゃ kya"],["small っ","doubles next consonant","きって kitte"]]}]},
"ja-sov": {
 theory:[
  {h:"Verb last", p:"Japanese is Subject–Object–Verb: わたしは りんごを たべます (I apple eat). The verb (or copula です) closes the sentence; everything before it is marked by particles, so their order is flexible."},
  {h:"Particles carry the roles", p:"Because は/が/を/に/で label each phrase, りんごを わたしは たべます is still understandable — emphasis shifts, grammar survives. The one fixed rule: predicate goes last."},
  {h:"Omission is normal", p:"Anything recoverable from context is dropped, especially subjects: たべます alone can mean 'I (will) eat'. Japanese sentences are built to say only what's new."}],
 tables:[
  {title:"English vs Japanese order", head:["English (SVO)","Japanese (SOV)"],
   rows:[["I drink water","わたしは みずを のみます"],["She reads books","かのじょは ほんを よみます"],
         ["He goes to school","かれは がっこうへ いきます"]]}]},
"ja-wa-ga": {
 theory:[
  {h:"は sets the topic", p:"は marks what the sentence is ABOUT — known, shared information: わたしは がくせいです (As for me, I'm a student). It can top-mark almost anything, including objects and times: きょうは いそがしい."},
  {h:"が marks the subject", p:"が introduces NEW information, answers who/what questions, and marks the subject in descriptions: だれが きましたか — たなかさんが きました. Also obligatory with existence (〜がある/いる), likes/skills (すきです, じょうずです, わかります) and in subordinate clauses."},
  {h:"The contrast", p:"わたしは いきます = as for me, I'm going (others, who knows). わたしが いきます = I am the one going. Question words never take は: だれが, なにが."}],
 tables:[
  {title:"は vs が decision guide", head:["Situation","Particle","Example"],
   rows:[["known topic","は","わたしは せんせいです"],["new info / answer to who?","が","たなかさんが きた"],
         ["existence","が","ねこが いる"],["likes & ability","が","すしが すき; にほんごが わかる"],
         ["question word subject","が","だれが くる？"],["contrast","は","ビールは のみますが、ワインは…"]]}]},
"ja-o": {
 theory:[
  {h:"Direct objects", p:"を marks what the action applies to: ほんを よむ (read a book), みずを のむ (drink water). Pronounced 'o' although romanized wo; it exists only as a particle."},
  {h:"Motion through space", p:"を also marks the space traversed with movement verbs: こうえんを あるく (walk through the park), はしを わたる (cross the bridge), そらを とぶ (fly through the sky), and the place left with でる: いえを でる."},
  {h:"を-less patterns", p:"Likes/wants/ability use が instead: すしが すきです, みずが のみたい (though を is also heard with たい), にほんごが はなせる. する-nouns can drop を: べんきょう(を)する."}],
 tables:[
  {title:"Uses of を", head:["Use","Example","Meaning"],
   rows:[["direct object","パンを たべる","eat bread"],["space traversed","みちを あるく","walk along the street"],
         ["place exited","うちを でる","leave home"]]}]},
"ja-ni-e": {
 theory:[
  {h:"Direction: に and へ", p:"Both mark movement toward: がっこうに/へ いく. へ emphasizes the direction (and is the choice before の: とうきょうへの きっぷ); に emphasizes the destination point. In everyday speech they're interchangeable for motion."},
  {h:"に beyond direction", p:"に also marks: specific time (しちじに — at seven), existence location with ある/いる (つくえのうえに ある), indirect object (ともだちに あげる), purpose with motion (かいものに いく), agent of passive/causative, and per-unit (いちにちに さんかい — three times per day)."},
  {h:"Time words that skip に", p:"Relative times take no particle: きょう, あした, らいしゅう, まいにち. Clock times, dates, days of the week take に: にちようびに, さんがつに."}],
 tables:[
  {title:"に at a glance", head:["Function","Example"],
   rows:[["destination","とうきょうに いく"],["time point","ろくじに おきる"],["existence place","へやに ねこが いる"],
         ["recipient","はは に てがみを かく"],["purpose of motion","えいがを みに いく"]]}]},
"ja-de": {
 theory:[
  {h:"Action location", p:"で marks WHERE an action happens: としょかんで べんきょうする. Contrast with に for existence: としょかんに いる (be at the library) vs としょかんで よむ (read at the library)."},
  {h:"Means and instrument", p:"で marks the tool or method: バスで いく (by bus), はしで たべる (with chopsticks), にほんごで はなす (in Japanese), ペンで かく."},
  {h:"More で", p:"Material (きで つくる — made of wood), cause (びょうきで やすむ — absent due to illness), scope/limit (せかいで いちばん — the most in the world; さんにんで — as a group of three), and total (ぜんぶで せんえん — 1000 yen in total)."}],
 tables:[
  {title:"に vs で with places", head:["に (existence/destination)","で (action venue)"],
   rows:[["うちに いる — be at home","うちで たべる — eat at home"],
         ["がっこうに いく — go to school","がっこうで まなぶ — learn at school"]]},
  {title:"Meanings of で", head:["Meaning","Example"],
   rows:[["place of action","カフェで あう"],["means","でんしゃで かえる"],["material","かみで つくる"],
         ["cause","かぜで やすむ"],["scope","クラスで いちばん"]]}]},
"ja-no": {
 theory:[
  {h:"Possession and belonging", p:"AのB = B of A: わたしの ほん (my book), にほんの くるま (Japanese cars), ともだちの いえ (friend's house). Chains stack right-to-left: だいがくの としょかんの ほん."},
  {h:"Noun modification", p:"の links any two nouns where English might use an adjective or compound: れきしの ほん (history book), きのうの しんぶん (yesterday's paper), えいごの せんせい (English teacher)."},
  {h:"Pronoun の and explanatory の", p:"の can replace a known noun: あかいのを ください (the red one, please). At sentence end, のです/んです adds explanation: いそがしいんです (it's that I'm busy)."}],
 tables:[
  {title:"AのB patterns", head:["Pattern","Example","Meaning"],
   rows:[["possessor の thing","はは の かばん","mother's bag"],["origin の thing","フランス の ワイン","French wine"],
         ["topic の thing","かがく の ほん","science book"],["time の thing","あした の かいぎ","tomorrow's meeting"],
         ["thing replaced","おおきい の","the big one"]]}]},
"ja-desu": {
 theory:[
  {h:"The polite copula", p:"AはBです = A is B: わたしは がくせいです. です closes polite noun and な-adjective sentences. It doesn't conjugate for person or number — only politeness and tense."},
  {h:"The four forms", p:"です (is), じゃありません/ではありません (is not), でした (was), じゃありませんでした (was not). Casual equivalents: だ, じゃない, だった, じゃなかった."},
  {h:"だ vs です", p:"Plain だ appears in casual speech, before quotes (…だと おもう) and in writing; です marks polite register. い-adjectives take です directly for politeness but never だ: おいしいです ✓, おいしいだ ✗."}],
 tables:[
  {title:"Copula forms", head:["","Polite","Casual"],
   rows:[["present","です","だ"],["negative","じゃありません","じゃない"],
         ["past","でした","だった"],["past negative","じゃありませんでした","じゃなかった"]]}]},
"ja-masu": {
 theory:[
  {h:"Polite verb endings", p:"The ます form is the safe register with strangers, at work, in shops. Built on the verb stem: たべる → たべます, のむ → のみます, する → します."},
  {h:"The four ます forms", p:"ます (do/will do), ません (don't), ました (did), ませんでした (didn't). Japanese has no separate future tense — ます covers present habit and future: あした いきます."},
  {h:"Getting the stem", p:"Ru-verbs: drop る (たべる→たべ). U-verbs: final -u → -i (のむ→のみ, かく→かき, はなす→はなし). Irregular: する→し, くる→き."}],
 tables:[
  {title:"ます conjugation", head:["","non-past","past"],
   rows:[["affirmative","たべます","たべました"],["negative","たべません","たべませんでした"]]},
  {title:"Stem building", head:["Verb type","Dictionary","Stem","ます form"],
   rows:[["ru-verb","みる","み","みます"],["u-verb","いく","いき","いきます"],
         ["u-verb","はなす","はなし","はなします"],["irregular","する","し","します"],["irregular","くる","き","きます"]]}]},
"ja-groups": {
 theory:[
  {h:"Three verb classes", p:"(1) Ru-verbs (ichidan): end in -iru/-eru, conjugate by dropping る: たべる, みる, おきる. (2) U-verbs (godan): all others, conjugate on the final -u row: のむ, かく, はなす, かう. (3) Two irregulars: する, くる."},
  {h:"The -iru/-eru trap", p:"Some -iru/-eru verbs are secretly u-verbs: かえる (return) → かえります, はいる → はいります, しる → しります, いる (need) → いります, はしる → はしります, きる (cut) → きります. Learn these as exceptions."},
  {h:"Why classes matter", p:"Every conjugation — negative, past, te-form, potential, passive — branches on the class. Identify the class once, and all forms follow mechanically."}],
 tables:[
  {title:"Class comparison", head:["Form","ru-verb たべる","u-verb のむ","する","くる"],
   rows:[["ます","たべます","のみます","します","きます"],["ない","たべない","のまない","しない","こない"],
         ["た","たべた","のんだ","した","きた"],["て","たべて","のんで","して","きて"]]},
  {title:"Fake ru-verbs (actually u-verbs)", head:["Verb","ます form"],
   rows:[["かえる (return)","かえります"],["はいる (enter)","はいります"],["しる (know)","しります"],["はしる (run)","はしります"]]}]},
"ja-te": {
 theory:[
  {h:"The connector form", p:"The て-form links verbs into sequences (たべて、ねます — eat, then sleep), makes requests (まってください), continuous tense (たべています), permission (たべてもいい), prohibition (たべてはいけない), and attaches helper verbs (てみる try, ておく do in advance, てしまう finish/regret)."},
  {h:"U-verb sound changes", p:"う/つ/る → って (かって, まって, のって); ぬ/ぶ/む → んで (しんで, あそんで, のんで); く → いて (かいて) but いく → いって; ぐ → いで (およいで); す → して (はなして). Ru-verbs just add て: たべて."},
  {h:"Chaining and states", p:"Sequence: おきて、シャワーをあびて、でかけます. ている covers both ongoing action (たべている — is eating) and resulting state (けっこんしている — is married; しっている — knows)."}],
 tables:[
  {title:"て-form sound changes", head:["Dictionary ending","て-form","Example"],
   rows:[["う・つ・る","って","かう → かって"],["ぬ・ぶ・む","んで","のむ → のんで"],
         ["く","いて","かく → かいて"],["ぐ","いで","およぐ → およいで"],["す","して","はなす → はなして"],
         ["(exception)","いく → いって","—"]]},
  {title:"て + helper constructions", head:["Pattern","Meaning","Example"],
   rows:[["〜てください","please do","みてください"],["〜ている","doing / state","よんでいる"],
         ["〜てもいい","may","はいってもいい"],["〜てはいけない","must not","すってはいけない"],
         ["〜てみる","try doing","たべてみる"],["〜てしまう","finish / regret","わすれてしまった"]]}]},
"ja-adj": {
 theory:[
  {h:"Two adjective species", p:"い-adjectives end in い and conjugate themselves: たかい, たかくない, たかかった, たかくなかった. な-adjectives behave like nouns and need な before a noun and です/だ to conjugate: しずかな まち, しずかです, しずかじゃない."},
  {h:"Conjugating い-adjectives", p:"Negative: drop い, add くない. Past: drop い, add かった. いい (good) conjugates from よい: よくない, よかった. Adverb form: く (はやく はしる — run fast)."},
  {h:"Connecting adjectives", p:"い-adj: 〜くて (やすくて おいしい — cheap and tasty). な-adj: 〜で (しずかで きれい). Watch the fake い: きれい and ゆうめい are な-adjectives despite ending in い."}],
 tables:[
  {title:"Conjugation compared", head:["","い-adj たかい","な-adj しずか"],
   rows:[["before noun","たかい やま","しずかな まち"],["negative","たかくない","しずかじゃない"],
         ["past","たかかった","しずかだった"],["past negative","たかくなかった","しずかじゃなかった"],
         ["and-form","たかくて","しずかで"],["adverb","たかく","しずかに"]]}]},
"ja-question": {
 theory:[
  {h:"か does the work", p:"Add か to a polite sentence and it becomes a question — no word-order change: たべますか. In casual speech か is often dropped and rising intonation (or の) marks the question: たべる？ いくの？"},
  {h:"Question words", p:"なに/なん (what), だれ (who), どこ (where), いつ (when), どうして/なぜ (why), どう (how), どれ/どの (which), いくら (how much), いくつ (how many). They sit where the answer would sit: これは なんですか."},
  {h:"Answering", p:"はい/いいえ answer the literal polarity: to a negative question (いきませんか), はい agrees with NOT going. Softer answers: そうです, ちがいます, ちょっと… (a hedge meaning 'not really')."}],
 tables:[
  {title:"Question word + example", head:["Word","Question","Meaning"],
   rows:[["なん","これは なんですか","what is this?"],["だれ","あのひとは だれですか","who is that?"],
         ["どこ","トイレは どこですか","where is the toilet?"],["いつ","いつ きますか","when will you come?"],
         ["いくら","いくらですか","how much is it?"],["どう","どうでしたか","how was it?"]]}]},
"ja-aru-iru": {
 theory:[
  {h:"Two 'exist' verbs", p:"いる for animate beings (people, animals): ねこが いる. ある for inanimate things, plants, events: ほんが ある, かいぎが ある. Polite: います/あります."},
  {h:"The existence sentence", p:"Place に thing が ある/いる: つくえのうえに ほんが あります. To say what a place has as the topic: とうきょうには こうえんが おおい."},
  {h:"'Have' meaning", p:"Both verbs express possession: いもうとが いる (I have a little sister), じかんが ない (I have no time), おかねが ある (have money). Negatives: いない/ない (casual), いません/ありません (polite)."}],
 tables:[
  {title:"ある vs いる", head:["","ある (inanimate)","いる (animate)"],
   rows:[["polite","あります","います"],["negative","ない","いない"],
         ["example","くるまが ある","こどもが いる"],["'have'","やすみが ある","ペットが いる"]]}]},
"ja-tai": {
 theory:[
  {h:"Wanting to do", p:"Verb stem + たい: たべたい (want to eat), いきたい. The result conjugates exactly like an い-adjective: たべたくない, たべたかった, たべたくなかった. The object may take が or を: みずが/を のみたい."},
  {h:"Third-person wants", p:"たい is for your own (or asked-about) desires. For others, use 〜たがっている: かれは かえりたがっている (he seems to want to go home), or report: いきたいと いっていました."},
  {h:"Wanting things", p:"Nouns use ほしい (also an い-adjective): あたらしい くつが ほしい. Someone else wanting a thing: ほしがっている. Both たい and ほしい soften with んです in requests: やすみたいんですが…"}],
 tables:[
  {title:"たい conjugation (like い-adj)", head:["Form","Example"],
   rows:[["want to","のみたい"],["don't want to","のみたくない"],
         ["wanted to","のみたかった"],["didn't want to","のみたくなかった"]]},
  {title:"Desire forms", head:["Who","Action","Thing"],
   rows:[["self","〜たい (いきたい)","〜が ほしい"],["someone else","〜たがっている","〜を ほしがっている"]]}]},
"ja-counters": {
 theory:[
  {h:"Numbers need counters", p:"Japanese counts with category words: ほん (long objects), まい (flat), ひき (small animals), だい (machines), にん (people), さつ (books), かい (times/floors), こ (small objects). りんごを みっつ ください — three apples, please."},
  {h:"Sound changes", p:"Counters trigger fusion: 1+ほん = いっぽん, 3+ほん = さんぼん, 6+ひき = ろっぴき, 1+かい = いっかい. Learn 1/3/6/8/10 forms per counter — those are where changes hit."},
  {h:"The universal fallback", p:"The native series ひとつ, ふたつ, みっつ … とお counts almost anything up to ten when you don't know the right counter. People are special: ひとり, ふたり, さんにん…"}],
 tables:[
  {title:"Common counters", head:["Counter","Counts","Example"],
   rows:[["〜つ","things (generic, 1–10)","りんご みっつ"],["〜にん","people","がくせい さんにん"],
         ["〜ほん","long thin objects","ペン にほん"],["〜まい","flat objects","かみ ごまい"],
         ["〜ひき","small animals","ねこ いっぴき"],["〜さつ","books","ほん にさつ"],["〜だい","machines/vehicles","くるま いちだい"]]},
  {title:"ほん sound changes", head:["Number","Form"],
   rows:[["1","いっぽん"],["2","にほん"],["3","さんぼん"],["6","ろっぽん"],["8","はっぽん"],["10","じゅっぽん"]]}]},
"ja-potential": {
 theory:[
  {h:"Formation", p:"Ru-verbs: る → られる (たべられる; spoken Japanese often clips to たべれる — 'ra-nuki'). U-verbs: final -u → -eru (のむ→のめる, かく→かける, はなす→はなせる). する → できる, くる → こられる."},
  {h:"Usage", p:"The object of a potential verb prefers が: かんじが よめます. The result conjugates as a ru-verb: のめない, のめました. Context distinguishes ability (I can) from possibility (it's possible)."},
  {h:"Alternatives", p:"〜ことができる is the formal equivalent: およぐことが できます. みえる/きこえる are special: something is visible/audible by itself (やまが みえる), vs みられる/きける = you're able to see/listen."}],
 tables:[
  {title:"Potential forms", head:["Dictionary","Potential","Meaning"],
   rows:[["たべる","たべられる","can eat"],["のむ","のめる","can drink"],["かく","かける","can write"],
         ["はなす","はなせる","can speak"],["する","できる","can do"],["くる","こられる","can come"]]}]},
"ja-volitional": {
 theory:[
  {h:"Formation", p:"Ru-verbs: る → よう (たべよう). U-verbs: -u → -ou (いく→いこう, のむ→のもう). する→しよう, くる→こよう. Polite: ましょう."},
  {h:"Suggesting and offering", p:"いきましょう = let's go; いきましょうか = shall we go? / shall I…?; てつだいましょうか = shall I help? Casual invitations often prefer 〜ない？: いっしょに いかない？"},
  {h:"Intention patterns", p:"〜(よ)うとおもう = I'm thinking of doing: にほんで はたらこうとおもいます. 〜(よ)うとする = attempt / be about to: でようとしたとき… 〜つもりです states a firmer plan: いくつもりです."}],
 tables:[
  {title:"Volitional forms", head:["Dictionary","Casual","Polite"],
   rows:[["いく","いこう","いきましょう"],["たべる","たべよう","たべましょう"],
         ["する","しよう","しましょう"],["くる","こよう","きましょう"]]},
  {title:"Intention ladder", head:["Pattern","Strength","Example"],
   rows:[["〜ようとおもう","considering","かおうとおもう"],["〜つもり","planned","かうつもりだ"],["〜ことにする","decided","かうことにした"]]}]},
"ja-obligation": {
 theory:[
  {h:"Must: the double negative", p:"Japanese builds 'must' as 'if you don't do it, it won't do': ない-form − い + ければなりません → いかなければなりません. Variants: 〜なければいけない, 〜なくてはいけない; casual clips: 〜なきゃ, 〜なくちゃ, 〜ないと."},
  {h:"Permission and prohibition", p:"〜てもいいです = may (すわってもいいですか); 〜てはいけません = must not (はいってはいけません; casual: 〜ちゃだめ). Refusing permission politely: すみませんが、ちょっと…"},
  {h:"No need", p:"〜なくてもいいです = don't have to: こなくてもいいですよ. Compare the triangle: しなければならない (must) / してもいい (may) / しなくてもいい (need not) / してはいけない (must not)."}],
 tables:[
  {title:"The obligation square", head:["Pattern","Meaning","Example"],
   rows:[["〜なければならない","must","いかなければならない"],["〜てもいい","may","つかってもいい"],
         ["〜なくてもいい","don't have to","かかなくてもいい"],["〜てはいけない","must not","のんではいけない"]]},
  {title:"Casual contractions", head:["Full","Casual"],
   rows:[["いかなければ","いかなきゃ"],["いかなくては","いかなくちゃ"],["してはいけない","しちゃだめ"]]}]},
"ja-giving": {
 theory:[
  {h:"Three verbs, one compass", p:"あげる: giver = me/my group, outward. くれる: receiver = me/my group, inward. もらう: focus on receiving (giver takes に or から). The same event: わたしは はなを あげた / かのじょは はなを くれた / わたしは はなを もらった."},
  {h:"Favors with て-form", p:"〜てあげる (I do for someone — careful, can sound patronizing), 〜てくれる (someone kindly does for me: てつだってくれた), 〜てもらう (I get someone to do: おしえてもらった). These encode gratitude and direction English leaves implicit."},
  {h:"Politeness versions", p:"Honorific/humble ladder: あげる → さしあげる (humble); くれる → くださる (honorific: せんせいが かしてくださった); もらう → いただく (humble: いただきます before meals literally = I humbly receive)."}],
 tables:[
  {title:"Direction of giving", head:["Verb","Direction","Example"],
   rows:[["あげる","me → others","ともだちに ほんを あげる"],["くれる","others → me","ちちが とけいを くれた"],
         ["もらう","receive (any)","あねに セーターを もらった"]]},
  {title:"Favor constructions", head:["Pattern","Nuance","Example"],
   rows:[["〜てくれる","kindly did for me","むかえにきてくれた"],["〜てもらう","I had them do","なおしてもらった"],
         ["〜てあげる","I did for them","よんであげた"]]}]},
"ja-comparison": {
 theory:[
  {h:"Comparing two", p:"AはBより + adjective: でんしゃは バスより はやい. Or flip with のほうが: バスより でんしゃのほうが はやい. Asking: AとBと、どちらが はやいですか — answering always with のほうが."},
  {h:"Superlatives", p:"(group)の中で いちばん + adjective: かぞくの中で いちばん せがたかい. Question word superlatives: どこが/だれが/なにが いちばん…: にほんりょうりの中で なにが いちばん すきですか."},
  {h:"Negative comparison and degree", p:"AはBほど…ない = A isn't as … as B: ことしは きょねんほど さむくない. Degree particles: ずっと (by far), もっと (more), すこし (a bit): もっと やすいのは ありますか."}],
 tables:[
  {title:"Comparison patterns", head:["Pattern","Meaning","Example"],
   rows:[["AはBより〜","A more than B","なつは ふゆより あつい"],["Bより Aのほうが〜","A rather than B","おちゃのほうが すき"],
         ["AはBほど〜ない","A not as … as B","きょうは きのうほど さむくない"],
         ["〜の中で いちばん〜","the most in group","クラスの中で いちばん わかい"]]}]},
"ja-tari-nagara": {
 theory:[
  {h:"〜たり〜たりする", p:"Lists representative activities without claiming order or completeness: やすみのひは えいがをみたり、かいものをしたりします. Build: た-form + り; finish the list with する (which carries tense: しました). Also for alternating states: あつかったり さむかったりする."},
  {h:"〜ながら", p:"Simultaneous actions by ONE subject: stem + ながら + main verb: おんがくを ききながら べんきょうする. The second verb is the main action; ながら marks the background one."},
  {h:"Other 'while/during' tools", p:"〜あいだ(に): during a span (なつやすみのあいだに — sometime during summer break). 〜まえに/〜あとで: before/after doing. 〜とき: when — tense inside matters: いくとき (on the way) vs いったとき (after arriving)."}],
 tables:[
  {title:"Simultaneity toolkit", head:["Pattern","Use","Example"],
   rows:[["〜ながら","same subject, same time","あるきながら はなす"],["〜たり〜たり","sample list","うたったり おどったり"],
         ["〜あいだに","during a period","るすのあいだに きた"],["〜まえに","before doing","ねるまえに よむ"],["〜あとで","after doing","たべたあとで でる"]]}]},
"ja-passive": {
 theory:[
  {h:"Formation", p:"Ru-verbs: る → られる (identical to potential — context decides). U-verbs: -u → -areru (よむ→よまれる, いう→いわれる). する→される, くる→こられる. The agent takes に."},
  {h:"Direct passive", p:"Focus shifts to the affected person/thing: せんせいに ほめられた (I was praised by the teacher). このうたは よく うたわれている (this song is often sung)."},
  {h:"Suffering passive", p:"Uniquely Japanese: intransitive verbs passivize to show inconvenience: あめに ふられた (got rained on), ともだちに こられて、べんきょうできなかった (a friend came over on me…). The 'victim' is the topic; the annoyance is implied."}],
 tables:[
  {title:"Passive formation", head:["Dictionary","Passive"],
   rows:[["よむ","よまれる"],["いう","いわれる"],["たべる","たべられる"],["みる","みられる"],["する","される"],["くる","こられる"]]},
  {title:"Direct vs suffering", head:["Type","Example","Feel"],
   rows:[["direct","どろぼうに さいふを とられた","my wallet was taken"],
         ["suffering","あかちゃんに なかれた","the baby cried (and it affected me)"]]}]},
"ja-causative": {
 theory:[
  {h:"Formation", p:"Ru-verbs: る → させる (たべさせる). U-verbs: -u → -aseru (いく→いかせる, よむ→よませる). する→させる, くる→こさせる."},
  {h:"Make vs let", p:"The same form covers both; particles and context decide. Coercion: こどもに やさいを たべさせる (make the child eat). Permission: こどもを あそばせる / あそばせてあげる (let the child play). Asking for permission: やらせてください (please let me do it)."},
  {h:"Causative-passive", p:"'Be made to do': させられる (ru) / -aserareru, often contracted -asareru for u-verbs: ざんぎょうさせられた (was made to work overtime), のまされた (was made to drink). Expresses reluctant compulsion."}],
 tables:[
  {title:"The voice family", head:["Voice","のむ","たべる"],
   rows:[["plain","のむ","たべる"],["passive","のまれる","たべられる"],
         ["causative","のませる","たべさせる"],["causative-passive","のまされる / のませられる","たべさせられる"]]}]},
"ja-conditionals": {
 theory:[
  {h:"と — natural consequence", p:"Plain form + と: automatic, habitual or mechanical results: このボタンを おすと、ドアが あきます. はるに なると、あたたかくなる. Not for requests, commands or volition in the result clause."},
  {h:"ば and たら", p:"ば = logical if (やすければ かう; verbs: いけば, い-adj: -ければ). たら = the all-rounder: one-time conditions, 'when' futures, and discovered pasts: ついたら れんらくして; まどを あけたら、うみが みえた. When unsure, たら is the safest choice."},
  {h:"なら — topic condition", p:"なら reacts to context: 'if that's the case / if it's X you mean': にほんに いくなら、JRパスを かうといい. The なら-clause can refer to something happening AFTER the main clause: くるまを かうなら、まず そうだんして."}],
 tables:[
  {title:"Four conditionals compared", head:["Form","Best for","Example"],
   rows:[["と","automatic results","おすと あく"],["ば","general logic","やすければ かう"],
         ["たら","one-time / when / discovery","あめだったら やめよう"],["なら","reacting to a topic","いくなら いっしょに"]]},
  {title:"Building ば-forms", head:["Type","Rule","Example"],
   rows:[["u-verb","-u → -eba","いく → いけば"],["ru-verb","る → れば","たべる → たべれば"],
         ["い-adj","い → ければ","たかい → たかければ"],["noun/な-adj","+なら","がくせいなら"]]}]},
"ja-hearsay": {
 theory:[
  {h:"Looks like: stem + そう", p:"Direct visual impression: おいしそう (looks tasty), あめが ふりそうだ (looks like rain — about to). いい → よさそう; negative: なさそう. Before nouns: おいしそうな ケーキ."},
  {h:"I heard: plain form + そう", p:"Reporting information: あめが ふるそうです (I hear it will rain), あのみせは たかいそうだ. The source often opens with によると: てんきよほうによると…"},
  {h:"ようだ・みたい・らしい", p:"ようだ/みたい (casual) = seems, judging from evidence: だれも いないようだ; likeness: ゆめみたい. らしい = apparently (secondhand) OR typical of: あしたは やすみらしい; おとこらしい (manly), こどもらしい (childlike)."}],
 tables:[
  {title:"The evidential system", head:["Form","Attaches to","Meaning","Example"],
   rows:[["〜そう (stem)","verb stem / adj stem","looks about to / looks","ふりそう; おいしそう"],
         ["〜そうだ (plain)","plain form","I heard that","ふるそうだ"],
         ["〜ようだ/みたい","plain form","seems (evidence)","びょうきのようだ"],
         ["〜らしい","plain form / noun","apparently; typical of","ゆうめいらしい; はるらしい"]]}]},
"ja-keigo": {
 theory:[
  {h:"The three-layer system", p:"丁寧語 (teineigo) = polite です/ます, neutral respect. 尊敬語 (sonkeigo) = honorific, raises the other person's actions. 謙譲語 (kenjougo) = humble, lowers your own actions toward them. You choose per verb, per sentence, based on in-group/out-group (uchi/soto)."},
  {h:"Special verb swaps", p:"The core verbs have suppletive forms — memorize them as pairs. Regular verbs use patterns: honorific お+stem+になる (おかきになる) or passive-as-honorific (かかれる); humble お+stem+する (おおくりします). Service phrase: お+stem+しております."},
  {h:"Where it's mandatory", p:"Customer service, business email, job interviews, and talking about someone's company (きしゃ) vs your own (へいしゃ). Overusing keigo with friends sounds cold; underusing it at work sounds rude. Set phrases carry you far: いらっしゃいませ, かしこまりました, おせわになっております, よろしくおねがいいたします."}],
 tables:[
  {title:"Suppletive keigo verbs", head:["Plain","Honorific (their action)","Humble (my action)"],
   rows:[["いる","いらっしゃる","おる"],["いく／くる","いらっしゃる","まいる"],["いう","おっしゃる","もうす"],
         ["たべる／のむ","めしあがる","いただく"],["みる","ごらんになる","はいけんする"],["する","なさる","いたす"],["しる","ごぞんじだ","ぞんじております"]]},
  {title:"Patterns for regular verbs", head:["Direction","Pattern","Example"],
   rows:[["honorific","お+stem+になる","おまちになる"],["honorific (light)","passive form","かかれる"],
         ["humble","お+stem+する","おもちします"],["extra humble","お+stem+いたす","おおくりいたします"]]}]},
"ja-written": {
 theory:[
  {h:"である style", p:"Academic papers, editorials and reports replace です/だ with である: これは じゅうような もんだいである. Negative: ではない; past: であった. Mixing である and です styles in one text is a fault — pick one register."},
  {h:"Classical negatives and 〜ず", p:"Written Japanese keeps older negatives: 〜ぬ (しらぬ), and especially 〜ず(に) = without doing / and not: なにも いわずに でていった (left without a word); べんきょうせずに (せず is the する form)."},
  {h:"Formal patterns worth knowing", p:"〜ざるをえない (have no choice but to: みとめざるをえない), 〜べき(だ) (should, normative: まもるべきだ; するべき/すべき), 〜における (in/at, formal: にほんにおける きょういく), 〜に関する (concerning), 〜によって (by means of/depending on), 〜つつある (in the process of)."}],
 tables:[
  {title:"Spoken vs written equivalents", head:["Spoken","Written","Meaning"],
   rows:[["です／だ","である","copula"],["〜ないで","〜ずに","without doing"],
         ["でも","しかし／だが","but"],["だから","したがって","therefore"],
         ["〜について","〜に関して","concerning"],["とても","きわめて","extremely"]]},
  {title:"Formal patterns", head:["Pattern","Meaning","Example"],
   rows:[["〜ざるをえない","no choice but to","ちゅうしせざるをえない"],["〜べきだ","should (norm)","いくべきだ"],
         ["〜における","in / at (formal)","がっこうにおける きそく"],["〜つつある","in the process of","かいふくしつつある"]]}]},
"ja-onomatopoeia": {
 theory:[
  {h:"A core vocabulary class", p:"Japanese has thousands of sound-symbolic words used constantly in speech, manga and even news: 擬音語 (giongo) imitate sounds (ざあざあ pouring, ごろごろ rumbling), 擬態語 (gitaigo) express states and feelings with no sound at all (きらきら sparkle, ふわふわ fluffy, いらいら irritation)."},
  {h:"Grammar of mimetics", p:"Usually reduplicated, they work as adverbs with (と): ざあざあ(と) ふる; as する verbs for feelings: どきどきする (heart pounds), わくわくする (excited), いらいらする; or with している for textures: べたべたしている (sticky)."},
  {h:"Sound symbolism", p:"Voicing = heavier/bigger/dirtier: ころころ (light rolling) vs ごろごろ (heavy rolling, thunder, lazing); さらさら (smooth, dry) vs ざらざら (rough). Small っ = abruptness: ばたっと. Long ー = continuation: すーっと."}],
 tables:[
  {title:"Everyday mimetics", head:["Word","Type","Meaning"],
   rows:[["ぺこぺこ","state","starving"],["ぐっすり","state","sound asleep"],["どきどき","state","heart pounding"],
         ["わくわく","state","excited"],["ぺらぺら","state/sound","fluent; thin/flipping"],["にこにこ","state","smiling"],
         ["ざあざあ","sound","pouring rain"],["こそこそ","state","sneakily"]]},
  {title:"Voiced vs unvoiced pairs", head:["Light (unvoiced)","Heavy (voiced)"],
   rows:[["ころころ — small thing rolls","ごろごろ — boulder rolls / thunder / lazing"],
         ["さらさら — silky","ざらざら — gritty"],["とんとん — light tap","どんどん — banging / rapidly"]]}]},
"ja-dialects": {
 theory:[
  {h:"Sentence-final particles", p:"They tune the whole utterance: ね (seeking agreement: いいね), よ (informing/asserting: いくよ), よね (checking shared view), かな (wondering: これでいいかな), っけ (recalling: なんだっけ), ぞ/ぜ (rough, masculine), わ (soft emphasis; in Kansai used by everyone), の (explanatory question or feminine statement)."},
  {h:"Casual contractions", p:"〜ている→〜てる (しってる), 〜てしまう→〜ちゃう (たべちゃった), 〜ておく→〜とく (かっとく), 〜なければ→〜なきゃ, 〜という→〜って (なんて いうの → なんていうの/って). ら抜き: たべれる for たべられる is widespread speech."},
  {h:"Kansai-ben and friends", p:"Kansai (Osaka/Kyoto): だ→や (そうや), negative 〜ない→〜へん (わからへん), ありがとう→おおきに, だめ→あかん, とても→めっちゃ, ほんとうに→ほんまに. Other regions: 〜べ (Tohoku/Hokkaido), 〜たい/〜ばい (Kyushu), じゃん (Yokohama/casual Tokyo). Standard Tokyo Japanese works everywhere — recognizing dialects unlocks comedy and drama."}],
 tables:[
  {title:"Final particles", head:["Particle","Feel","Example"],
   rows:[["ね","agreement / softening","おいしいね"],["よ","new info / assertion","しらなかったよ"],
         ["よね","confirming together","あついよね"],["かな","wondering","いけるかな"],
         ["っけ","trying to recall","いつだっけ"],["じゃん","isn't it (casual)","いいじゃん"]]},
  {title:"Standard vs Kansai", head:["Standard","Kansai","Meaning"],
   rows:[["そうだ","そうや","that's right"],["わからない","わからへん","don't understand"],
         ["ありがとう","おおきに","thanks"],["だめ","あかん","no good"],["とても","めっちゃ","very"]]}]}
};
/* merge details into the rule objects */
for (const lang of ["es","de","ja"]) {
  DATA[lang].grammar.forEach(g => {
    const d = GRAMMAR_DETAIL[g.id];
    if (d) { g.theory = d.theory; g.tables = d.tables; }
  });
}
