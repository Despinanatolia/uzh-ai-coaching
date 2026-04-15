import type { LocalizedString } from "@/lib/i18n";

export type Source = {
  author: string;
  year: number;
  title: string;
  url?: string;
};

export type BloomLevel = {
  id: string;
  order: number; // 1 = bottom (Remember) ... 6 = top (Create)
  name: LocalizedString;
  verb: LocalizedString;
  color: string;
  whatAi: LocalizedString;
  method: LocalizedString; // name of the underlying learning-science technique
  activity: LocalizedString;
  warning: LocalizedString;
  source: Source;
};

export const bloomLevels: BloomLevel[] = [
  {
    id: "remember",
    order: 1,
    name: { de: "Erinnern", en: "Remember" },
    verb: { de: "abrufen, benennen, wiedergeben", en: "recall, name, reproduce" },
    color: "#0028a5",
    whatAi: {
      de: "KI kann auf Knopfdruck Karteikarten, Quizzes und Abfrage-Sets zu einem beliebigen Stoff generieren – und damit den Aufwand für aktives Abrufen drastisch senken. Die empirische Literatur zeigt: nicht Wiederlesen, sondern Wiederabrufen verankert Wissen langfristig.",
      en: "AI can generate flashcards, quizzes, and retrieval sets on any topic on demand, dramatically lowering the cost of active recall. The empirical literature is clear: re-reading does not anchor knowledge, retrieving does.",
    },
    method: {
      de: "Retrieval Practice mit Spacing",
      en: "Retrieval Practice with Spacing",
    },
    activity: {
      de: "«KI-Karteikarten für die Moldau-Chronologie»: Studierende lassen sich von ChatGPT oder Claude 30 Karteikarten zu den wichtigsten Daten, Personen und Begriffen des Seminars erzeugen (z.B. «Frieden von Bukarest 1812», «Organische Reglemente 1831», «Unionsbewegung 1859»). Der Clou: Die Karten werden nicht gleich gelernt, sondern über drei Wochen verteilt abgerufen (Spacing), in wechselnder Reihenfolge (Interleaving). Als Werkzeug eignen sich Anki, Quizlet oder ein einfaches Google-Doc.",
      en: "\"AI flashcards for Moldavian chronology\": Students have ChatGPT or Claude generate 30 flashcards on key dates, people, and concepts of the seminar (e.g. \"Treaty of Bucharest 1812\", \"Organic Regulations 1831\", \"Unionist movement 1859\"). The key move: cards are not crammed, but retrieved across three weeks (spacing), in shuffled order (interleaving). Tools: Anki, Quizlet, or a plain Google Doc work well.",
    },
    warning: {
      de: "Zwei Fallstricke: Erstens können KI-generierte Karten Fehler enthalten, deshalb einmal gegen die Seminarliteratur quergeprüft. Zweitens: Retrieval Practice wirkt nur, wenn die Studierenden wirklich abrufen, nicht erkennen. Also offene Fragen, keine Multiple Choice auf Pilotniveau.",
      en: "Two traps: first, AI-generated cards can contain errors, so cross-check once against the seminar literature. Second: retrieval practice only works when students actually retrieve, not recognize. So prefer open questions over surface-level multiple choice.",
    },
    source: {
      author: "Roediger & Karpicke",
      year: 2006,
      title: "Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention",
      url: "https://doi.org/10.1111/j.1467-9280.2006.01693.x",
    },
  },
  {
    id: "understand",
    order: 2,
    name: { de: "Verstehen", en: "Understand" },
    verb: { de: "erklären, zusammenfassen, einordnen", en: "explain, summarize, classify" },
    color: "#1a3eb5",
    whatAi: {
      de: "KI kann flüssige Zusammenfassungen liefern, wirkt als Verstehens-Coach aber stärker, wenn sie statt Erklärungen gezielte «Warum?»- und «Wodurch?»-Fragen stellt. Elaborative Interrogation zählt zu den wenigen Lerntechniken, die in grossen Studien konstant Verständnis und Transfer verbessern.",
      en: "AI can produce fluent summaries, but it works much better as a coach when it asks targeted \"why?\" and \"how come?\" questions instead of just explaining. Elaborative interrogation is one of the few techniques that reliably improves understanding and transfer across large studies.",
    },
    method: {
      de: "Elaborative Interrogation",
      en: "Elaborative Interrogation",
    },
    activity: {
      de: "«Der Warum-Bot»: Studierende lesen einen Fachaufsatz und laden ihn in eine KI hoch, die per System-Prompt instruiert ist: «Erkläre nichts. Stelle ausschliesslich Warum-Fragen, bis die Studierende eine eigene Kausal-Kette gebildet hat.» Beispiel: Nach dem Aufsatz zur Russifizierungspolitik in Bessarabien fragt die KI: «Warum begann die Russifizierung gerade nach 1828 und nicht früher?», «Warum traf sie Elite anders als Bauern?» etc. Studierende reichen das Gesprächsprotokoll plus eine 200-Wort-Synthese ein.",
      en: "\"The Why-Bot\": Students read a scholarly article and upload it to an AI instructed by system prompt: \"Explain nothing. Only ask why-questions until the student has built their own causal chain.\" Example: After the article on Russification in Bessarabia, the AI asks: \"Why did Russification begin after 1828 and not earlier?\", \"Why did it affect the elite differently than peasants?\" etc. Students submit the chat transcript plus a 200-word synthesis.",
    },
    warning: {
      de: "Studierende neigen dazu, sich flüssige KI-Zusammenfassungen zu holen, und glauben dann, den Text verstanden zu haben. Die «Fluency-Illusion» ist belegt. Deshalb: KI-Zusammenfassung bewusst verbieten oder erst nach der eigenen Erklärleistung erlauben.",
      en: "Students tend to grab fluent AI summaries and feel they've understood the text. The \"fluency illusion\" is well-documented. So: either ban AI summaries outright, or allow them only after the student's own explanation work.",
    },
    source: {
      author: "Dunlosky, Rawson, Marsh, Nathan & Willingham",
      year: 2013,
      title: "Improving Students' Learning With Effective Learning Techniques",
      url: "https://doi.org/10.1177/1529100612453266",
    },
  },
  {
    id: "apply",
    order: 3,
    name: { de: "Anwenden", en: "Apply" },
    verb: { de: "übertragen, nutzen, umsetzen", en: "transfer, use, implement" },
    color: "#3355c5",
    whatAi: {
      de: "KI ist sehr gut darin, ausgearbeitete Beispiele (worked examples) zu produzieren, Schritt für Schritt vorgelöste Aufgaben, an denen sich Studierende orientieren können. Entscheidend ist das «Fading»: die Stützung wird schrittweise abgebaut, bis die Studierende es allein kann.",
      en: "AI is excellent at producing worked examples, step-by-step solved problems that let students model expert thinking. The crucial move is \"fading\": scaffolding is gradually removed until the student can do it alone.",
    },
    method: {
      de: "Worked Examples mit Fading",
      en: "Worked Examples with Fading",
    },
    activity: {
      de: "«Quelleninterpretation in drei Stufen»: Auf Stufe 1 zeigt die KI (oder Dozent mithilfe KI) eine vollständige Interpretation einer Primärquelle, jeder Schritt benannt: Lesekontext, Autorenfrage, Rhetorik-Analyse, Thesenbildung. Auf Stufe 2 bekommt die KI die nächste Quelle, macht aber nur noch die ersten drei Schritte und lässt die letzten zwei offen; die Studierende ergänzt. Auf Stufe 3 arbeitet die Studierende selbstständig, KI gibt nur auf Nachfrage Stützhilfe. So lernt man Quelleninterpretation als Handwerk, nicht als Zufallsprodukt.",
      en: "\"Source interpretation in three tiers\": Tier 1, the AI (or instructor with AI help) shows a complete interpretation of a primary source, each step labelled: reading context, author question, rhetoric analysis, thesis building. Tier 2, the AI does only the first three steps on the next source and leaves the last two open; the student completes them. Tier 3, the student works independently; the AI only offers scaffolding on request. This teaches source interpretation as craft, not as accident.",
    },
    warning: {
      de: "Worked Examples funktionieren nur, wenn die Studierende aktiv «self-explains», während sie das Beispiel liest, nicht passiv konsumiert. Deshalb begleitendes Reflexionsheft oder Pair-Arbeit mit lautem Mitdenken.",
      en: "Worked examples only work when the student actively self-explains while reading, not when they consume passively. So pair them with a reflection log or think-aloud partner work.",
    },
    source: {
      author: "Renkl",
      year: 2014,
      title: "Toward an Instructionally Oriented Theory of Example-Based Learning",
      url: "https://doi.org/10.1111/cogs.12086",
    },
  },
  {
    id: "analyze",
    order: 4,
    name: { de: "Analysieren", en: "Analyze" },
    verb: { de: "unterscheiden, strukturieren, zuordnen", en: "differentiate, organize, attribute" },
    color: "#4d72d5",
    whatAi: {
      de: "KI kann als geduldiger Zuhörer fungieren, dem die Studierende ihre Analyse erklärt. Self-Explanation zwingt zur Expliziterung des eigenen Gedankens, und genau an den Stellen, wo die KI nachhakt, entdeckt die Studierende Lücken in ihrer Argumentation.",
      en: "AI can serve as a patient listener to whom the student explains their own analysis. Self-explanation forces the student to articulate their thinking, and the places where the AI follows up are exactly where the student discovers gaps in their own argument.",
    },
    method: {
      de: "Self-Explanation",
      en: "Self-Explanation",
    },
    activity: {
      de: "«Erkläre der KI, was du siehst»: Studierende bekommen eine dichte Quelle (z.B. ein Gesetzestext zur Bauernemanzipation in der Moldau 1864). Sie erklären Zeile für Zeile einer KI, was sie sehen – rhetorische Figuren, Leerstellen, implizite Prämissen. Die KI ist per Prompt instruiert: «Gib keine eigene Analyse. Frage bei jeder Aussage der Studierenden: Woran siehst du das im Text? Was wäre eine Alternativerklärung?» Das Transkript wird abgegeben, bewertet wird die Dichte der eigenen Analyse, nicht die KI-Antworten.",
      en: "\"Explain what you see to the AI\": Students get a dense source (e.g. a statute on peasant emancipation in Moldavia, 1864). They explain line by line what they see to an AI, rhetorical figures, silences, implicit premises. The AI is prompted: \"Provide no analysis of your own. For every claim the student makes, ask: where do you see that in the text? What's an alternative reading?\" The transcript is submitted; the grade reflects the density of the student's own analysis, not the AI's responses.",
    },
    warning: {
      de: "Die KI darf nicht anfangen zu analysieren, sonst übernimmt die Studierende passiv. Der System-Prompt muss das hart unterbinden. Einmal pro Seminar ein gemeinsames Debriefing über misslungene Prompts ist Gold wert.",
      en: "The AI must not start analyzing itself, or the student lapses into passive uptake. The system prompt has to block this hard. One collective debrief per seminar on failed prompts is worth gold.",
    },
    source: {
      author: "Chi, De Leeuw, Chiu & LaVancher",
      year: 1994,
      title: "Eliciting Self-Explanations Improves Understanding",
      url: "https://doi.org/10.1207/s15516709cog1803_3",
    },
  },
  {
    id: "evaluate",
    order: 5,
    name: { de: "Bewerten", en: "Evaluate" },
    verb: { de: "beurteilen, abwägen, kritisieren", en: "judge, weigh, critique" },
    color: "#6690e5",
    whatAi: {
      de: "KI kann als zweite, unabhängige «Urteilerin» eingesetzt werden. Studierende und KI bewerten dasselbe Material getrennt; die Diskrepanzen werden besprochen. Das fördert das, was Sadler «evaluative judgement» nennt: die Fähigkeit, Qualität in einem Feld zu erkennen.",
      en: "AI can serve as a second, independent \"judge\". Students and AI evaluate the same material separately; discrepancies are then discussed. This fosters what Sadler calls \"evaluative judgement\", the ability to recognize quality in a field.",
    },
    method: {
      de: "Calibrated Peer/AI Review",
      en: "Calibrated Peer/AI Review",
    },
    activity: {
      de: "«Parallelbewertung»: Studierende erhalten eine fiktive (oder anonymisierte) Seminararbeit zur Moldau. Sie bewerten sie einzeln nach den offiziellen Kriterien des Historischen Seminars. Parallel bekommt eine KI dieselbe Arbeit und denselben Kriterienkatalog. Im Plenum werden die Bewertungen nebeneinandergestellt: Wo stimmen Studierende und KI überein? Wo weichen sie ab, und warum? Besonders interessant ist die Diskussion der Divergenzen, dort wird sichtbar, welche Qualitätsmerkmale die KI nicht sieht (z.B. historiographische Positionierung, methodische Originalität).",
      en: "\"Parallel grading\": Students receive a fictional (or anonymized) seminar paper on Moldavia. They grade it individually using the Department of History's official criteria. In parallel, an AI receives the same paper and the same rubric. In class, the assessments are compared side by side: Where do students and AI agree? Where do they diverge, and why? The discussion of divergences is the richest part: it surfaces the quality markers AI cannot see (e.g. historiographical positioning, methodological originality).",
    },
    warning: {
      de: "KI bewertet fast immer auf «ausgewogen» und vermeidet harte Urteile. Das ist pädagogisch nutzbar: die Studierenden müssen lernen, klarer zu positionieren als das Modell. Aber nie die KI-Note als Massstab akzeptieren, sie ist ein Diskussionspartner, keine Autorität.",
      en: "AI almost always grades toward \"balanced\" and avoids sharp judgments. This is pedagogically useful: students have to learn to take clearer positions than the model. But never accept the AI grade as the standard, it is a discussion partner, not an authority.",
    },
    source: {
      author: "Sadler",
      year: 2009,
      title: "Indeterminacy in the Use of Preset Criteria for Assessment and Grading",
      url: "https://doi.org/10.1080/02602930801956059",
    },
  },
  {
    id: "create",
    order: 6,
    name: { de: "Erschaffen", en: "Create" },
    verb: { de: "formulieren, entwerfen, synthetisieren", en: "formulate, design, synthesize" },
    color: "#7fadf5",
    whatAi: {
      de: "Auf der höchsten Stufe wird die KI zum Feedback-Partner im Schreiben. Das Modell von Hattie und Timperley («Feed up, Feed back, Feed forward») liefert die didaktische Struktur: Wo will ich hin? Wie stehe ich gerade? Was ist der nächste Schritt? KI kann alle drei Ebenen bedienen, wenn der Prompt es verlangt.",
      en: "At the top tier, AI becomes a feedback partner in writing. Hattie and Timperley's model (\"Feed up, Feed back, Feed forward\") provides the pedagogical structure: Where am I going? How am I doing? What's the next step? AI can serve all three levels, if the prompt asks for them.",
    },
    method: {
      de: "Formative Feedback-Schleifen (Hattie & Timperley)",
      en: "Formative Feedback Loops (Hattie & Timperley)",
    },
    activity: {
      de: "«Drei-Fragen-Feedback»: Studierende überarbeiten ihr Exposé oder einen Kapitelentwurf. Sie geben der KI den Text plus einen System-Prompt, der genau drei Fragen verlangt: (1) Feed up, «Wo willst du mit dieser Arbeit hin, und ist das im Text sichtbar?» (2) Feed back, «Was funktioniert gut, was nicht, mit Textbeleg?» (3) Feed forward, «Was wäre der produktivste nächste Schritt?» Parallel dazu führen Studierende ein Reflexionsprotokoll: welche Rückmeldung haben sie übernommen, verändert, verworfen, und warum? Das Protokoll wird Teil des Portfolios.",
      en: "\"Three-question feedback\": Students revise their proposal or a chapter draft. They give an AI the text plus a system prompt that demands exactly three questions: (1) Feed up, \"Where do you want this paper to go, and is that visible in the text?\" (2) Feed back, \"What works, what doesn't, with textual evidence?\" (3) Feed forward, \"What is the most productive next step?\" In parallel, students keep a reflection log: which feedback did they accept, modify, reject, and why? The log becomes part of the portfolio.",
    },
    warning: {
      de: "Auf der Schöpferstufe wird die KI-Deklaration zur Kernfrage wissenschaftlicher Redlichkeit. Ohne Reflexionsprotokoll verschwimmt die Autorenschaft. Die Arbeit muss die Studierende leisten, die KI ist Spiegel, nicht Ghostwriter.",
      en: "At the creation level, AI disclosure becomes the core question of scholarly integrity. Without a reflection log, authorship blurs. The work has to come from the student; the AI is a mirror, not a ghostwriter.",
    },
    source: {
      author: "Hattie & Timperley",
      year: 2007,
      title: "The Power of Feedback",
      url: "https://doi.org/10.3102/003465430298487",
    },
  },
];
