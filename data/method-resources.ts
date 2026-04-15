import type { LocalizedString } from "@/lib/i18n";

export type Leitfrage = {
  id: string;
  question: LocalizedString;
  hint: LocalizedString;
};

export type MethodResource = {
  id: string;
  label: LocalizedString;
  description: LocalizedString;
  url: string;
  org: string;
};

export const leitfragen: Leitfrage[] = [
  {
    id: "visible-thinking",
    question: {
      de: "Welcher Denkschritt soll für die Studierende sichtbar werden, den die KI nicht abnehmen darf?",
      en: "Which step of thinking should stay visible to the student, the one the AI must not take over?",
    },
    hint: {
      de: "Beispiel: Bei Quelleninterpretation darf die KI Hintergrundwissen liefern, aber nicht die Deutung vorschlagen.",
      en: "Example: In source interpretation AI may supply background, but not propose the reading.",
    },
  },
  {
    id: "desirable-difficulty",
    question: {
      de: "Wo in der Aufgabe liegt die «produktive Schwierigkeit»? Sollen die Studierenden zuerst scheitern dürfen?",
      en: "Where in the task is the \"desirable difficulty\"? Should students be allowed to fail first?",
    },
    hint: {
      de: "Produktives Scheitern vor Instruktion wirkt stärker als direkte KI-Hilfe, wenn die Nachbesprechung strukturiert ist.",
      en: "Productive failure before instruction beats direct AI help, provided the debrief is structured.",
    },
  },
  {
    id: "retrieval-vs-recognition",
    question: {
      de: "Ruft die Studierende wirklich etwas ab, oder erkennt sie nur wieder, was die KI liefert?",
      en: "Is the student actually retrieving, or only recognizing what the AI hands over?",
    },
    hint: {
      de: "Offene Fragen, eigene Erklärung und schriftliche Antwort sind Abruf. Multiple Choice und Zusammenfassungen sind Wiedererkennung.",
      en: "Open questions, one's own explanation, written answers are retrieval. Multiple choice and summaries are recognition.",
    },
  },
  {
    id: "feedback-layer",
    question: {
      de: "Welche Feedback-Ebene soll die KI bedienen: wohin soll es gehen, wie steht es gerade, was ist der nächste Schritt?",
      en: "Which feedback layer should the AI serve: where to go, where we stand, what's next?",
    },
    hint: {
      de: "Hattie und Timperley unterscheiden «Feed up / Feed back / Feed forward», ein KI-Prompt funktioniert am besten, wenn er eine Ebene explizit adressiert.",
      en: "Hattie and Timperley distinguish \"feed up / feed back / feed forward\". A prompt works best when it addresses one layer explicitly.",
    },
  },
  {
    id: "authorship-boundary",
    question: {
      de: "Wo endet die Autorenschaft der Studierenden, wo beginnt die der KI? Wie wird das offengelegt?",
      en: "Where does student authorship end and AI's begin? How is that disclosed?",
    },
    hint: {
      de: "Reflexionsprotokoll mit drei Fragen: Was hat die KI vorgeschlagen, übernommen/verändert/verworfen, warum? So wird Autorenschaft dokumentiert statt versteckt.",
      en: "Reflection log with three questions: what did AI suggest, accepted/modified/rejected, why? Authorship becomes documented rather than hidden.",
    },
  },
  {
    id: "bias-probe",
    question: {
      de: "An welcher Stelle bringt die KI systematisch Bias ins Spiel, und wie machen wir das zum Lerngegenstand?",
      en: "Where does AI systematically introduce bias, and how do we turn that into a learning object?",
    },
    hint: {
      de: "Osteuropäische Historiographie ist in den Trainingsdaten unterrepräsentiert. Das ist ein didaktischer Glücksfall, nicht nur ein Problem.",
      en: "Eastern European historiography is under-represented in training data. That's pedagogically a gift, not only a problem.",
    },
  },
  {
    id: "scaffolding-fading",
    question: {
      de: "Wie wird die KI-Stützung über das Semester hinweg systematisch reduziert (Fading)?",
      en: "How is AI scaffolding systematically reduced over the term (fading)?",
    },
    hint: {
      de: "System-Prompt in Woche 1 ausführlich, in Woche 8 minimal. Ohne explizites Fading bleibt die Studierende abhängig.",
      en: "Verbose system prompt in week 1, minimal by week 8. Without explicit fading, the student stays dependent.",
    },
  },
];

export const methodResources: MethodResource[] = [
  {
    id: "wharton-teaching-with-ai",
    label: { de: "Wharton Interactive – Teaching with AI", en: "Wharton Interactive – Teaching with AI" },
    description: {
      de: "Praxisnahe Prompts und das «Seven Roles»-Framework von Ethan und Lilach Mollick. Direkt einsetzbar.",
      en: "Hands-on prompts and the \"Seven Roles\" framework by Ethan and Lilach Mollick. Ready to deploy.",
    },
    url: "https://interactive.wharton.upenn.edu/teaching-with-ai/",
    org: "Wharton School",
  },
  {
    id: "stanford-teaching-commons",
    label: {
      de: "Stanford Teaching Commons – AI Teaching Guide",
      en: "Stanford Teaching Commons – AI Teaching Guide",
    },
    description: {
      de: "Umfassender Guide zu Kurs-Policies, Assignment-Design und Workshop-Materialien.",
      en: "Comprehensive guide covering course policies, assignment design, and workshop materials.",
    },
    url: "https://teachingcommons.stanford.edu/teaching-guides/artificial-intelligence-teaching-guide",
    org: "Stanford University",
  },
  {
    id: "columbia-ctl",
    label: {
      de: "Columbia CTL – Teaching & Learning in the Age of AI",
      en: "Columbia CTL – Teaching & Learning in the Age of AI",
    },
    description: {
      de: "Faculty-Beispiele und Perspektiven von Studierenden zur KI-Integration.",
      en: "Faculty examples and student perspectives on integrating AI.",
    },
    url: "https://ctl.columbia.edu/resources-and-technology/resources/ai-tools/",
    org: "Columbia University",
  },
  {
    id: "harvard-bok",
    label: { de: "Harvard Bok Center – Teaching & AI", en: "Harvard Bok Center – Teaching & AI" },
    description: {
      de: "Projektsammlung zu KI-augmentierten mündlichen Prüfungen, Aufgabendesign und kritischer KI-Analyse.",
      en: "Project collection on AI-augmented oral exams, assignment design, and critical AI analysis.",
    },
    url: "https://bokcenter.harvard.edu/ai-pedagogy",
    org: "Harvard University",
  },
  {
    id: "mit-tsl",
    label: {
      de: "MIT Teaching Systems Lab – AI in Education",
      en: "MIT Teaching Systems Lab – AI in Education",
    },
    description: {
      de: "Forschungslab zur KI in der Bildung, mit Podcast-Serie und Policy-Handbook.",
      en: "Research lab on AI in education, with podcast series and policy handbook.",
    },
    url: "https://tsl.mit.edu/",
    org: "MIT",
  },
  {
    id: "uzh-didactica",
    label: { de: "UZH Teaching Tools – KI in der Lehre", en: "UZH Teaching Tools – AI in Teaching" },
    description: {
      de: "Zentrale UZH-Ressource mit Didactica-Kursen, Tool-Empfehlungen und Empfehlungen für UZH-spezifische Lehrszenarien.",
      en: "Central UZH resource with Didactica courses, tool recommendations, and UZH-specific scenarios.",
    },
    url: "https://teachingtools.uzh.ch/en/tools/KI-in-der-Lehre",
    org: "Universität Zürich",
  },
  {
    id: "ethz-ai",
    label: {
      de: "ETH Zürich – Refresh Teaching: KI in der Lehre",
      en: "ETH Zurich – Refresh Teaching: AI in Teaching",
    },
    description: {
      de: "Projekte, Weiterbildungen und Ressourcen zu Generativer KI in der Hochschullehre, mit Schweizer Hochschulperspektive.",
      en: "Projects, trainings, and resources on generative AI in higher education, from the Swiss university perspective.",
    },
    url: "https://ethz.ch/en/the-eth-zurich/education/innovation/refresh-teaching.html",
    org: "ETH Zürich",
  },
  {
    id: "ai-pedagogy-project",
    label: { de: "AI Pedagogy Project (metaLAB Harvard)", en: "AI Pedagogy Project (metaLAB Harvard)" },
    description: {
      de: "Interdisziplinärer Hub mit kuratierten Unterrichtsmaterialien, offen und forschungsbasiert.",
      en: "Interdisciplinary hub with curated, open, research-based teaching materials.",
    },
    url: "https://aipedagogy.org/",
    org: "metaLAB, Harvard University",
  },
  {
    id: "shegs",
    label: {
      de: "Stanford History Education Group – Reading Like a Historian",
      en: "Stanford History Education Group – Reading Like a Historian",
    },
    description: {
      de: "Direkt einsetzbare Unterrichtsmaterialien zu Sourcing, Contextualization und Corroboration, auch für Hochschulkurse adaptierbar.",
      en: "Ready-to-use teaching materials on sourcing, contextualization, and corroboration, adaptable to university seminars.",
    },
    url: "https://sheg.stanford.edu/history-lessons",
    org: "Stanford University",
  },
  {
    id: "hfd",
    label: {
      de: "Hochschulforum Digitalisierung – KI in der Hochschullehre",
      en: "Hochschulforum Digitalisierung – AI in Higher Education",
    },
    description: {
      de: "Deutsche Ressource mit Praxisberichten aus Hochschulen und thematischen Dossiers.",
      en: "German-language resource with practice reports from universities and topical dossiers.",
    },
    url: "https://hochschulforumdigitalisierung.de/themen/ki-in-der-hochschullehre/",
    org: "Hochschulforum Digitalisierung",
  },
];
