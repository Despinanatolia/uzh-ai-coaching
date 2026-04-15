import type { LocalizedString } from "@/lib/i18n";
import type { Source } from "@/data/bloom";

export type MethodCategory = "historiography" | "collaborative" | "constructive";
export type Difficulty = "easy" | "medium" | "hard";

export type Method = {
  id: string;
  title: LocalizedString;
  originator: LocalizedString; // Short attribution, e.g. "Sam Wineburg (Stanford)"
  category: MethodCategory;
  bloomLevel: string; // id of bloom level it best supports
  bloomLabel: LocalizedString;
  difficulty: Difficulty;
  principle: LocalizedString; // core idea of the method
  aiRole: LocalizedString; // how AI is concretely integrated
  example: LocalizedString; // concrete example (mostly history, often Moldau)
  source: Source;
};

export const methods: Method[] = [
  {
    id: "reading-like-historian",
    title: {
      de: "Reading Like a Historian: Sourcing, Contextualization, Corroboration",
      en: "Reading Like a Historian: Sourcing, Contextualization, Corroboration",
    },
    originator: {
      de: "Sam Wineburg, Stanford History Education Group",
      en: "Sam Wineburg, Stanford History Education Group",
    },
    category: "historiography",
    bloomLevel: "analyze",
    bloomLabel: { de: "Analysieren", en: "Analyze" },
    difficulty: "hard",
    principle: {
      de: "Historiker:innen lesen Quellen nicht linear, sondern gerichtet: Wer hat das geschrieben, unter welchen Umständen, und was sagen andere Quellen dazu? Diese drei Bewegungen (Sourcing, Contextualization, Corroboration) sind das, was Studierende üben müssen, und genau das, was eine KI nicht automatisch tut.",
      en: "Historians don't read sources linearly but with direction: who wrote this, under what circumstances, and what do other sources say? These three moves (sourcing, contextualization, corroboration) are what students must practice, and precisely what an AI does not do automatically.",
    },
    aiRole: {
      de: "KI als Recherche-Assistent, nicht als Interpret. Die KI darf Hintergrundwissen zum Autor, zum Kontext und mögliche Parallelquellen liefern (z.B. «Was ist zur Biografie dieses moldauischen Bojaren bekannt?», «Welche anderen Quellen aus 1829 behandeln dieselbe Frage?»). Sie darf aber nicht sagen, was die Quelle bedeutet, das bleibt Aufgabe der Studierenden.",
      en: "AI as research assistant, not interpreter. The AI may supply background on the author, context, and possible parallel sources (e.g. \"What is known about this Moldavian boyar's biography?\", \"Which other 1829 sources address the same question?\"). It must not say what the source means, that's the student's job.",
    },
    example: {
      de: "Studierende bekommen einen Brief eines moldauischen Bojaren an den russischen Gouverneur (1829). Schritt 1, Sourcing: KI hilft, die Person zu identifizieren und einzuordnen. Schritt 2, Contextualization: KI liefert Hintergrund zum Vertrag von Adrianopel und den Organischen Reglementen. Schritt 3, Corroboration: KI schlägt zwei bis drei Parallelquellen vor (z.B. Reiseberichte, offizielle Berichte), die die Studierende dann selbst gegeneinander liest.",
      en: "Students receive a letter from a Moldavian boyar to the Russian governor (1829). Step 1, sourcing: AI helps identify and situate the author. Step 2, contextualization: AI supplies background on the Treaty of Adrianople and the Organic Regulations. Step 3, corroboration: AI suggests two or three parallel sources (e.g. travel accounts, official reports), which the student then reads against each other.",
    },
    source: {
      author: "Wineburg",
      year: 2001,
      title: "Historical Thinking and Other Unnatural Acts",
      url: "https://tupress.temple.edu/books/historical-thinking-and-other-unnatural-acts",
    },
  },
  {
    id: "structured-academic-controversy",
    title: {
      de: "Structured Academic Controversy (SAC)",
      en: "Structured Academic Controversy (SAC)",
    },
    originator: {
      de: "David & Roger Johnson, University of Minnesota",
      en: "David & Roger Johnson, University of Minnesota",
    },
    category: "collaborative",
    bloomLevel: "evaluate",
    bloomLabel: { de: "Bewerten", en: "Evaluate" },
    difficulty: "hard",
    principle: {
      de: "Zwei Paare bilden eine Vierergruppe. Paar A erhält Position Pro, Paar B erhält Position Contra zu einer strittigen historischen Frage. Nach dem Austausch tauschen die Paare die Positionen, und erst dann sucht die ganze Gruppe eine gemeinsame Synthese. Die Methode produziert deutlich tieferes Lernen als einfache Debatten, weil beide Seiten verstanden werden müssen.",
      en: "Two pairs form a group of four. Pair A argues pro, pair B argues contra on a contested historical question. After the exchange, pairs switch sides, and only then does the whole group seek a shared synthesis. This produces measurably deeper learning than plain debate because both sides must be understood.",
    },
    aiRole: {
      de: "KI als Sparringspartner in der Vorbereitungsphase. Jedes Paar lässt sich von der KI die stärksten Argumente für die eigene Position ausarbeiten und, entscheidend, die drei besten Gegenargumente. Die KI wird explizit angewiesen: «Gib mir die wissenschaftlich solidesten Positionen, nicht die populären.» So bleibt die Diskussion inhaltlich statt rhetorisch.",
      en: "AI as sparring partner in preparation. Each pair asks the AI for the strongest arguments for their assigned side and, crucially, the three best counter-arguments. The AI is explicitly instructed: \"Give me the scholarly strongest positions, not the popular ones.\" This keeps the debate substantive rather than rhetorical.",
    },
    example: {
      de: "Leitfrage: «War die Vereinigung der Moldau mit der Walachei 1859 ein nationaler Akt oder ein geopolitisches Manöver der Grossmächte?» Paar A (nationaler Akt) und Paar B (geopolitisches Manöver) bereiten sich mit KI-Unterstützung vor, führen ein 15-Minuten-Gespräch, tauschen dann die Rollen, und schreiben zum Schluss gemeinsam eine 300-Wort-Synthese.",
      en: "Prompt: \"Was the 1859 unification of Moldavia and Wallachia a national act or a geopolitical manoeuvre of the Great Powers?\" Pair A (national act) and pair B (geopolitical) prepare with AI support, hold a 15-minute exchange, then swap sides, and finally write together a 300-word synthesis.",
    },
    source: {
      author: "Johnson & Johnson",
      year: 1993,
      title: "Creative and Critical Thinking Through Academic Controversy",
      url: "https://doi.org/10.1177/0002764293037001005",
    },
  },
  {
    id: "jigsaw",
    title: {
      de: "Jigsaw-Methode",
      en: "Jigsaw Method",
    },
    originator: {
      de: "Elliot Aronson, University of Texas",
      en: "Elliot Aronson, University of Texas",
    },
    category: "collaborative",
    bloomLevel: "understand",
    bloomLabel: { de: "Verstehen → Anwenden", en: "Understand → Apply" },
    difficulty: "medium",
    principle: {
      de: "Der Stoff wird in N Teile zerlegt. Jede Studierende wird Expert:in für einen Teil, trifft sich zuerst mit anderen Expert:innen desselben Teils, kehrt dann in die Heimatgruppe zurück und unterrichtet die anderen. Lernen durch Lehren ist einer der empirisch stärksten Effekte überhaupt.",
      en: "The material is split into N parts. Every student becomes expert in one part, first meets other experts of the same part, then returns to the home group and teaches the others. Learning by teaching is one of the strongest empirical effects in education.",
    },
    aiRole: {
      de: "KI als Personal Tutor in der Expertinnen-Phase. Jede Expertin kann die KI nutzen, um ihren Teilstoff zu durchdringen (Verständnis-Checks, Begriffsklärungen, Beispielgenerierung). In der Heimatgruppe ist die KI tabu, dort muss die Studierende selbst erklären. Das zwingt zu echter Elaboration, nicht zu KI-gestütztem Vortragen.",
      en: "AI as personal tutor in the expert phase. Each expert can use AI to master their slice of material (comprehension checks, clarifying concepts, generating examples). In the home group, AI is off-limits, the student must explain herself. This forces genuine elaboration rather than AI-scaffolded presentation.",
    },
    example: {
      de: "Seminarsitzung zur Moldau 1812-1866 wird in fünf Themenblöcke geteilt: (1) Frieden von Bukarest und russische Besetzung, (2) Organische Reglemente, (3) Revolution 1848, (4) Krimkrieg und Pariser Friede, (5) Vereinigung mit der Walachei. Jede Studierende wird Expertin für einen Block, nutzt KI zur Vorbereitung, unterrichtet dann ohne KI die vier anderen.",
      en: "A seminar session on Moldavia 1812-1866 is split into five blocks: (1) Treaty of Bucharest and Russian occupation, (2) Organic Regulations, (3) the 1848 revolution, (4) Crimean War and Treaty of Paris, (5) unification with Wallachia. Each student becomes expert on one block, uses AI to prepare, then teaches the other four without AI.",
    },
    source: {
      author: "Aronson & Patnoe",
      year: 2011,
      title: "Cooperation in the Classroom: The Jigsaw Method (3rd ed.)",
      url: "https://www.jigsaw.org/",
    },
  },
  {
    id: "think-pair-share",
    title: {
      de: "Think–Pair–Share mit KI-Warmup",
      en: "Think–Pair–Share with AI Warm-up",
    },
    originator: {
      de: "Frank Lyman, University of Maryland",
      en: "Frank Lyman, University of Maryland",
    },
    category: "collaborative",
    bloomLevel: "understand",
    bloomLabel: { de: "Verstehen → Bewerten", en: "Understand → Evaluate" },
    difficulty: "easy",
    principle: {
      de: "Drei Phasen: Erst denkt jede Person still, dann tauscht sie sich im Paar aus, dann erst ins Plenum. Die einfache, aber empirisch robuste Methode erhöht die Partizipation und verhindert, dass nur die zwei lautesten Studierenden reden.",
      en: "Three phases: everyone thinks silently, then exchanges in pairs, only then do things go to the full room. A simple but empirically robust method that raises participation and keeps the two loudest students from dominating.",
    },
    aiRole: {
      de: "KI als Gedanken-Lockerer in Phase 1. Die KI stellt nur eine Frage: «Welche drei Aspekte der Leitfrage findest du am interessantesten, und warum?» Keine Antworten, keine Erklärungen, nur eine Frage, die zum Nachdenken zwingt. In Phase 2 und 3 ist die KI abgeschaltet, Gespräch nur mit Mensch.",
      en: "AI as thought-primer in phase 1. The AI asks one question only: \"Which three aspects of the prompt do you find most interesting, and why?\" No answers, no explanations, just a question that forces thought. In phases 2 and 3 the AI is off; conversation happens only between humans.",
    },
    example: {
      de: "Leitfrage der Sitzung: «War die Moldau im 19. Jahrhundert ein Opfer oder ein Akteur imperialer Politik?» Phase 1 (5 Minuten): jede Studierende notiert drei Aspekte, mit KI als Gedanken-Lockerer. Phase 2 (10 Minuten): Paararbeit, Vergleich der Aspekte. Phase 3 (20 Minuten): Plenum, die Dozent:in sammelt Cluster an der Tafel.",
      en: "Session prompt: \"Was Moldavia in the 19th century a victim or an actor in imperial politics?\" Phase 1 (5 min): each student lists three aspects, with AI as thought-primer. Phase 2 (10 min): pair work comparing aspects. Phase 3 (20 min): full-room discussion, instructor clusters contributions on the board.",
    },
    source: {
      author: "Lyman",
      year: 1981,
      title: "The Responsive Classroom Discussion: The Inclusion of All Students",
      url: "https://doi.org/10.3389/feduc.2023.1074227",
    },
  },
  {
    id: "concept-mapping",
    title: {
      de: "Concept Mapping mit KI-Challenge",
      en: "Concept Mapping with AI Challenge",
    },
    originator: {
      de: "Joseph Novak, Cornell University",
      en: "Joseph Novak, Cornell University",
    },
    category: "constructive",
    bloomLevel: "analyze",
    bloomLabel: { de: "Analysieren → Erschaffen", en: "Analyze → Create" },
    difficulty: "medium",
    principle: {
      de: "Eine Concept Map macht Wissen sichtbar: Begriffe als Knoten, Beziehungen als beschriftete Kanten. Der Clou ist nicht die Karte, sondern das Gespräch über Beziehungen, das beim Zeichnen entsteht. Studien zeigen, dass Concept Mapping Missverständnisse offenlegt, die in Texten versteckt bleiben.",
      en: "A concept map makes knowledge visible: concepts as nodes, relationships as labelled edges. The payoff isn't the map, it's the conversation about relationships that emerges while drawing. Studies show concept mapping surfaces misconceptions that stay hidden in prose.",
    },
    aiRole: {
      de: "KI als Sparringspartner, nicht als Kartenzeichnerin. Die Studierende zeichnet die Karte selbst, schickt sie als Foto oder Textbeschreibung an die KI, die nur zwei Dinge tun darf: (1) fehlende mögliche Knoten vorschlagen («Du hast Kirche nicht erwähnt, bewusst?»), (2) fragwürdige Kanten hinterfragen («Du verknüpfst Aufklärung direkt mit Nationalismus, welcher Mechanismus?»).",
      en: "AI as sparring partner, not cartographer. The student draws the map herself, sends it as photo or text description to the AI, which may do only two things: (1) propose missing possible nodes (\"You haven't mentioned the Church, intentional?\"), (2) question doubtful edges (\"You link Enlightenment directly to nationalism, what's the mechanism?\").",
    },
    example: {
      de: "Nach drei Wochen Seminar zeichnen Studierende eine Concept Map zur Moldau zwischen 1812 und 1859. Knoten: Bojaren, Bauern, russische Verwaltung, Kirche, Aufklärung, Nationalismus, Sprache, Zoll. Die KI fordert sie zu begründen, warum sie z.B. «Kirche» nicht mit «Nationalismus» verbunden haben.",
      en: "After three weeks of seminar, students draw a concept map of Moldavia 1812–1859. Nodes: boyars, peasants, Russian administration, church, Enlightenment, nationalism, language, tariffs. The AI challenges them to justify why they haven't linked, say, \"Church\" to \"nationalism\".",
    },
    source: {
      author: "Novak & Cañas",
      year: 2008,
      title: "The Theory Underlying Concept Maps and How to Construct and Use Them",
      url: "https://cmap.ihmc.us/docs/theory-of-concept-maps",
    },
  },
  {
    id: "productive-failure",
    title: {
      de: "Productive Failure",
      en: "Productive Failure",
    },
    originator: {
      de: "Manu Kapur, ETH Zürich",
      en: "Manu Kapur, ETH Zürich",
    },
    category: "constructive",
    bloomLevel: "apply",
    bloomLabel: { de: "Anwenden → Analysieren", en: "Apply → Analyze" },
    difficulty: "hard",
    principle: {
      de: "Studierende kämpfen zuerst mit einem schwierigen Problem, ohne Instruktion, ohne Lösung, und scheitern produktiv. Erst danach kommt die Instruktion. Studien zeigen deutlich bessere Transferleistungen als bei direkter Instruktion, weil das Scheitern die relevanten Wissenslücken aktiviert.",
      en: "Students first wrestle with a hard problem, without instruction, without a solution, and fail productively. Only then comes the instruction. Studies consistently show stronger transfer than under direct instruction, because the failure activates the relevant knowledge gaps.",
    },
    aiRole: {
      de: "KI ist in der Scheiter-Phase ausdrücklich verboten, das ist zentral. Erst nach der Scheiter-Phase kommt die KI ins Spiel: sie analysiert die Lösungsversuche der Studierenden und zeigt, welche Denkschritte fehlten. Die Studierenden sehen an ihrem eigenen Scheitern, was die kanonische Lösung leistet, statt sie nur vorgelegt zu bekommen.",
      en: "AI is explicitly banned during the failure phase, this is crucial. Only after does AI step in: it analyzes the students' attempts and shows which steps were missing. Students see in their own failure what the canonical solution does, instead of just being handed it.",
    },
    example: {
      de: "Aufgabe: «Aus fünf Quellen zur Moldau zwischen 1821 und 1848 (unvollständig, teils widersprüchlich) rekonstruiert eine Erklärung, warum 1848 in der Moldau revolutionäre Bewegungen entstanden.» 45 Minuten ohne KI. Danach lädt jede Gruppe ihren Entwurf und die Quellen in die KI, mit dem Prompt: «Zeige, welche Kausalkette die Gruppe nicht gesehen hat, und warum.» Anschliessend kurzer Dozentinnen-Input zum historiographischen Konsens.",
      en: "Task: \"From five sources on Moldavia 1821-1848 (partial, partly contradictory), reconstruct an explanation for why revolutionary movements emerged in Moldavia in 1848.\" 45 minutes, no AI. Then each group uploads their draft and the sources to the AI with the prompt: \"Show what causal chain the group missed, and why.\" A short instructor input on the historiographical consensus follows.",
    },
    source: {
      author: "Kapur",
      year: 2016,
      title: "Examining Productive Failure, Productive Success, Unproductive Failure, and Unproductive Success in Learning",
      url: "https://doi.org/10.1080/00461520.2016.1155457",
    },
  },
  {
    id: "writing-to-learn",
    title: {
      de: "Writing-to-Learn mit Reflexionsprotokoll",
      en: "Writing-to-Learn with Reflection Log",
    },
    originator: {
      de: "Bangert-Drowns, Hurley & Wilkinson (Meta-Analyse)",
      en: "Bangert-Drowns, Hurley & Wilkinson (meta-analysis)",
    },
    category: "constructive",
    bloomLevel: "create",
    bloomLabel: { de: "Erschaffen", en: "Create" },
    difficulty: "medium",
    principle: {
      de: "Kurzes, regelmässiges Schreiben, verbunden mit metakognitiven Prompts («Was habe ich verstanden? Was bleibt offen?»), produziert den stärksten Lerngewinn unter den Schreibinterventionen. Die Meta-Analyse von 48 Studien zeigt: je mehr Metakognition, desto grösser der Effekt.",
      en: "Short, regular writing combined with metacognitive prompts (\"What did I understand? What's still open?\") produces the largest learning gain among writing interventions. The meta-analysis of 48 studies shows: more metacognition, larger effect.",
    },
    aiRole: {
      de: "KI als Feedback-Partner, nicht als Schreiberin. Studierende schreiben selbst und geben den Text plus ihr Reflexionsprotokoll an die KI mit drei Fragen: (1) Wo ist meine Argumentation am schwächsten? (2) Welche Quelle würde sie stärken? (3) Welcher Satz ist wortreich und leer? Die KI antwortet, die Studierende entscheidet, was sie übernimmt, und protokolliert jede Entscheidung.",
      en: "AI as feedback partner, not writer. Students write themselves and send the text plus their reflection log to the AI with three questions: (1) Where is my argument weakest? (2) Which source would strengthen it? (3) Which sentence is wordy and empty? The AI responds; the student decides what to accept, and logs every decision.",
    },
    example: {
      de: "Studierende schreiben wöchentlich ein 400-Wort-Memo zur Seminarsitzung («Was war meine überraschendste Einsicht diese Woche? Welche offene Frage nehme ich mit?»). Am Ende des Semesters geben sie ihre acht Memos und die KI-Feedback-Protokolle als Lernportfolio ab, das in die 25%-Lernprozess-Bewertung einfliesst.",
      en: "Students write a weekly 400-word memo on the session (\"What was my most surprising insight? Which open question do I carry forward?\"). At the end of term they submit the eight memos plus the AI-feedback logs as a learning portfolio, feeding the 25% process grade.",
    },
    source: {
      author: "Bangert-Drowns, Hurley & Wilkinson",
      year: 2004,
      title: "The Effects of School-Based Writing-to-Learn Interventions on Academic Achievement: A Meta-Analysis",
      url: "https://doi.org/10.3102/00346543074001029",
    },
  },
  {
    id: "cognitive-apprenticeship",
    title: {
      de: "Cognitive Apprenticeship: Modeling – Coaching – Fading",
      en: "Cognitive Apprenticeship: Modeling – Coaching – Fading",
    },
    originator: {
      de: "Collins, Brown & Newman",
      en: "Collins, Brown & Newman",
    },
    category: "historiography",
    bloomLevel: "apply",
    bloomLabel: { de: "Anwenden", en: "Apply" },
    difficulty: "medium",
    principle: {
      de: "Expert:innen-Denken wird explizit sichtbar gemacht (Modeling), dann begleitet die Expertin die Lernende (Coaching), dann reduziert sich die Begleitung (Fading), bis die Lernende selbstständig arbeitet. Ursprünglich für Handwerke formuliert, gilt die Theorie heute als Rahmen für anspruchsvolle akademische Fertigkeiten.",
      en: "Expert thinking is made explicit (modeling), the expert accompanies the learner (coaching), support fades (fading) until the learner works independently. Originally framed for craft, the theory is now a standard frame for demanding academic skills.",
    },
    aiRole: {
      de: "KI kann in allen drei Phasen mitspielen. Modeling: Dozent:in lässt die KI eine Quelleninterpretation Schritt für Schritt laut vorführen, der eigene Denkprozess wird daran gespiegelt. Coaching: Studierende arbeiten mit der KI als Coach, die gezielte Fragen stellt statt Antworten zu geben. Fading: Der Coaching-System-Prompt wird Woche für Woche karger, bis die KI nur noch Quellenhinweise gibt.",
      en: "AI can play in all three phases. Modeling: the instructor has AI think out loud through a source interpretation, mirroring expert reasoning. Coaching: students work with AI as coach, which asks targeted questions instead of giving answers. Fading: the coaching system prompt becomes sparser week by week until AI only provides source pointers.",
    },
    example: {
      de: "Sitzung 1: Dozent:in lässt GPT-4 die Analyse einer Bojaren-Petition von 1821 schrittweise vorführen, jeder Schritt wird benannt. Sitzung 2: Studierende arbeiten mit einem KI-Coach (System-Prompt: «Stelle nur Leitfragen»). Sitzung 3: Der System-Prompt wird reduziert auf «Biete nur Quellenhinweise». Am Ende des Semesters arbeitet die Studierende ohne KI-Stützung.",
      en: "Session 1: the instructor has GPT-4 walk step by step through the analysis of an 1821 boyar petition, each step named. Session 2: students work with an AI coach (system prompt: \"ask only leading questions\"). Session 3: prompt is pared down to \"offer source pointers only\". By term's end the student works without AI scaffolding.",
    },
    source: {
      author: "Collins, Brown & Newman",
      year: 1989,
      title: "Cognitive Apprenticeship: Teaching the Crafts of Reading, Writing, and Mathematics",
      url: "https://files.ascd.org/staticfiles/ascd/pdf/journals/ed_lead/el_199104_collins.pdf",
    },
  },
];
