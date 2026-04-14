import type { LocalizedString } from "@/lib/i18n";

export type ResourceCategory = "guidelines" | "frameworks" | "practice" | "research";

export type Resource = {
  id: string;
  category: ResourceCategory;
  title: LocalizedString;
  author: LocalizedString;
  year: string;
  description: LocalizedString;
  url: string;
};

export const resourceCategoryLabels: Record<ResourceCategory, LocalizedString> = {
  guidelines: { de: "Fachleitlinien", en: "Discipline Guidelines" },
  frameworks: { de: "Didaktische Frameworks", en: "Pedagogical Frameworks" },
  practice: { de: "Praxishandreichungen", en: "Practice Resources" },
  research: { de: "Forschung & Literatur", en: "Research & Literature" },
};

export const resources: Resource[] = [
  {
    id: "aha-guidelines",
    category: "guidelines",
    title: {
      de: "Guiding Principles for AI in History Education",
      en: "Guiding Principles for AI in History Education",
    },
    author: { de: "American Historical Association", en: "American Historical Association" },
    year: "2025",
    description: {
      de: "Die bislang ausführlichste fachdisziplinäre Handreichung zum Umgang mit generativer KI in der Geschichtslehre — mit konkreten Empfehlungen zu Quellenkritik, Bias und Deklaration.",
      en: "The most extensive discipline-specific resource on generative AI in history teaching to date — with concrete recommendations on source criticism, bias, and declaration.",
    },
    url: "https://www.historians.org/resource/guiding-principles-for-artificial-intelligence-in-history-education/",
  },
  {
    id: "blooms-v2",
    category: "frameworks",
    title: {
      de: "Bloom's Taxonomy Revisited v2.0",
      en: "Bloom's Taxonomy Revisited v2.0",
    },
    author: { de: "Oregon State University Ecampus", en: "Oregon State University Ecampus" },
    year: "2024",
    description: {
      de: "Eine aktualisierte Fassung der Bloom-Taxonomie, die explizit die Integration von KI-Werkzeugen in kognitive Lernziele adressiert — Grundlage der Pyramide auf dieser Website.",
      en: "An updated version of Bloom's taxonomy that explicitly addresses the integration of AI tools into cognitive learning goals — the foundation for the pyramid on this site.",
    },
    url: "https://ecampus.oregonstate.edu/",
  },
  {
    id: "aias",
    category: "frameworks",
    title: {
      de: "AI Assessment Scale (AIAS)",
      en: "AI Assessment Scale (AIAS)",
    },
    author: {
      de: "Perkins, Furze, Roe & MacVaugh",
      en: "Perkins, Furze, Roe & MacVaugh",
    },
    year: "2024",
    description: {
      de: "Ein fünfstufiges Modell zur transparenten Kommunikation, in welchem Ausmass KI bei einer Leistung eingesetzt werden darf — von «kein KI-Einsatz» bis «KI als Ko-Autor». Nützlich für klare Leistungsnachweis-Vorgaben.",
      en: "A five-level model for transparently communicating the extent to which AI may be used for an assignment — from \"no AI use\" to \"AI as co-author\". Useful for clear assignment briefs.",
    },
    url: "https://teaching.center.uiowa.edu/",
  },
  {
    id: "stanford-ai-teaching",
    category: "practice",
    title: {
      de: "Stanford AI Teaching Guide",
      en: "Stanford AI Teaching Guide",
    },
    author: { de: "Stanford Teaching Commons", en: "Stanford Teaching Commons" },
    year: "2025",
    description: {
      de: "Eine praxisorientierte Sammlung von Musterprompts, Aufgaben-Templates und Reflexionsleitfäden für den Unterricht mit generativer KI.",
      en: "A practice-oriented collection of sample prompts, assignment templates, and reflection guides for teaching with generative AI.",
    },
    url: "https://teachingcommons.stanford.edu/",
  },
  {
    id: "harvard-bok",
    category: "practice",
    title: {
      de: "Courses in the Age of AI",
      en: "Courses in the Age of AI",
    },
    author: { de: "Harvard Bok Center", en: "Harvard Bok Center" },
    year: "2024",
    description: {
      de: "Ein Leitfaden für die (Um-)Gestaltung ganzer Seminare im Zeitalter generativer KI — mit Syllabus-Vorlagen und Gesprächsbausteinen für das erste Seminargespräch über KI-Nutzung.",
      en: "A guide for (re)designing entire seminars in the age of generative AI — with syllabus templates and conversation starters for the first seminar discussion about AI use.",
    },
    url: "https://bokcenter.harvard.edu/",
  },
  {
    id: "bowen-watson-2024",
    category: "research",
    title: {
      de: "Teaching with AI",
      en: "Teaching with AI",
    },
    author: { de: "José Antonio Bowen & C. Edward Watson", en: "José Antonio Bowen & C. Edward Watson" },
    year: "2024",
    description: {
      de: "Das wohl einflussreichste Buch zum Thema: praxisorientiert, evidenzbasiert, mit vielen Beispielen aus den Geisteswissenschaften. Pflichtlektüre für Dozierende, die ihre Lehre systematisch anpassen wollen.",
      en: "Arguably the most influential book on the topic: practice-oriented, evidence-based, with many humanities examples. Essential reading for instructors systematically redesigning their teaching.",
    },
    url: "https://www.press.jhu.edu/books/title/53869/teaching-ai",
  },
  {
    id: "jones-2023",
    category: "practice",
    title: {
      de: "Students Critique a ChatGPT Essay",
      en: "Students Critique a ChatGPT Essay",
    },
    author: { de: "Stephanie Jones (AHA Perspectives)", en: "Stephanie Jones (AHA Perspectives)" },
    year: "2023",
    description: {
      de: "Ein Praxisbericht aus einem Geschichtsseminar, der beschreibt, wie Studierende einen KI-Aufsatz Satz für Satz dekonstruieren — direkte Inspirationsquelle für die Methode «KI benoten».",
      en: "A practice report from a history seminar describing how students deconstruct an AI essay sentence by sentence — direct inspiration for the \"Grade the AI\" method.",
    },
    url: "https://www.historians.org/research-and-publications/perspectives-on-history/",
  },
  {
    id: "holub-2026",
    category: "research",
    title: {
      de: "Socratic Questioning Framework for AI Tutoring",
      en: "Socratic Questioning Framework for AI Tutoring",
    },
    author: { de: "Holub et al.", en: "Holub et al." },
    year: "2026",
    description: {
      de: "Ein Framework für den Einsatz sokratischer Fragetechniken in KI-Tutor-Systemen. Theoretische Grundlage für den Konzept-Feedback-Agenten, der Leitfragen statt Musterlösungen liefert.",
      en: "A framework for deploying Socratic questioning techniques in AI tutoring systems. Theoretical grounding for the Concept Feedback Agent, which provides guiding questions instead of model answers.",
    },
    url: "https://www.tandfonline.com/",
  },
  {
    id: "faculty-focus-2026",
    category: "practice",
    title: {
      de: "When AI Gets It Wrong",
      en: "When AI Gets It Wrong",
    },
    author: { de: "Faculty Focus", en: "Faculty Focus" },
    year: "2026",
    description: {
      de: "Eine Sammlung dokumentierter KI-Halluzinationen aus dem Hochschulalltag — nützlich als Diskussionsmaterial für die erste Sitzung und als Begründung für den «Bibliographie-Test».",
      en: "A collection of documented AI hallucinations from everyday university life — useful as discussion material for the first session and as justification for the \"Bibliography Test\".",
    },
    url: "https://www.facultyfocus.com/",
  },
];
