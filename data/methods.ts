import type { LocalizedString } from "@/lib/i18n";

export type MethodCategory = "critique" | "socratic" | "historiography";
export type Difficulty = "easy" | "medium" | "hard";

export type Research = {
  citation: LocalizedString;
  url: string;
};

export type Method = {
  id: string;
  title: LocalizedString;
  category: MethodCategory;
  bloomLevel: string; // id of bloom level
  bloomLabel: LocalizedString;
  difficulty: Difficulty;
  problem: LocalizedString;
  design: LocalizedString;
  research?: Research;
};

export const methods: Method[] = [
  {
    id: "spot-hallucination",
    title: { de: "«Fehler finden», Spot the Hallucination", en: "\"Spot the Hallucination\"" },
    category: "critique",
    bloomLevel: "remember",
    bloomLabel: { de: "Erinnern, Analysieren", en: "Remember, Analyze" },
    difficulty: "easy",
    problem: {
      de: "Studierende übernehmen KI-Fakten, ohne sie zu prüfen. Halluzinationen gelangen in Referate, Hausarbeiten und ins kollektive Gedächtnis des Seminars.",
      en: "Students accept AI facts without checking them. Hallucinations end up in presentations, papers, and the collective memory of the seminar.",
    },
    design: {
      de: "Lass KI eine Chronologie oder Kurzbiografie zum Seminarthema schreiben (z.B. «10 wichtige Daten der moldauischen Geschichte 1812–1918»). Studierende prüfen jeden Eintrag gegen die Seminarliteratur und dokumentieren: korrekt / ungenau / erfunden. Im Plenum wird die Trefferquote diskutiert: Was hat die KI am zuverlässigsten richtig? Wo hat sie versagt, und warum?",
      en: "Have AI write a chronology or short biography on the seminar topic (e.g. \"10 key dates in Moldavian history 1812–1918\"). Students verify each entry against the seminar literature and log: correct / inaccurate / fabricated. In class, discuss the hit rate: What did AI get most reliably right? Where did it fail, and why?",
    },
    research: {
      citation: {
        de: "Ji et al. (2023): Survey of Hallucination in Natural Language Generation. ACM Computing Surveys.",
        en: "Ji et al. (2023): Survey of Hallucination in Natural Language Generation. ACM Computing Surveys.",
      },
      url: "https://dl.acm.org/doi/10.1145/3571730",
    },
  },
  {
    id: "socratic-tutor",
    title: { de: "Der sokratische Tutor-Bot", en: "The Socratic Tutor-Bot" },
    category: "socratic",
    bloomLevel: "understand",
    bloomLabel: { de: "Verstehen, Bewerten", en: "Understand, Evaluate" },
    difficulty: "medium",
    problem: {
      de: "Studierende nutzen KI für fertige Antworten statt für eigenes Denken. Die Tutor-Rolle der KI verführt zur Konsumhaltung.",
      en: "Students use AI for finished answers instead of their own thinking. The AI's tutor role invites a consumer mindset.",
    },
    design: {
      de: "Konfiguriere einen Custom GPT oder Copilot-Agenten mit klarem System-Prompt: «Beantworte niemals die Frage direkt. Stelle stattdessen mindestens drei präzisierende Rückfragen, bis die Studierende selbst eine Antwort formuliert.» Studierende bearbeiten ein historisches Problem (z.B. «War die Russifizierung Bessarabiens eine Form von Kolonialismus?») ausschliesslich im Dialog mit diesem Agenten. Das Gesprächsprotokoll und die finale eigene Antwort werden eingereicht.",
      en: "Configure a custom GPT or Copilot agent with a clear system prompt: \"Never answer directly. Instead, ask at least three clarifying questions until the student formulates their own answer.\" Students work through a historical problem (e.g. \"Was the Russification of Bessarabia a form of colonialism?\") exclusively in dialogue with this agent. The transcript and the student's final own answer are submitted.",
    },
    research: {
      citation: {
        de: "Paul & Elder (2019): The Thinker's Guide to Socratic Questioning. Foundation for Critical Thinking.",
        en: "Paul & Elder (2019): The Thinker's Guide to Socratic Questioning. Foundation for Critical Thinking.",
      },
      url: "https://www.criticalthinking.org/store/products/the-thinkers-guide-to-socratic-questioning/159",
    },
  },
  {
    id: "bias-audit",
    title: { de: "Bias-Audit", en: "Bias Audit" },
    category: "historiography",
    bloomLevel: "analyze",
    bloomLabel: { de: "Analysieren", en: "Analyze" },
    difficulty: "hard",
    problem: {
      de: "KI-Modelle sind auf mehrheitlich englischsprachigen, westlich dominierten Daten trainiert. Osteuropäische, kleinere und nicht-westliche Historiographien werden systematisch unterrepräsentiert, ein ernstes Problem gerade im Moldau-Seminar.",
      en: "AI models are trained predominantly on English-language, Western-dominated data. Eastern European, smaller, and non-Western historiographies are systematically underrepresented, a serious problem especially for the Moldau seminar.",
    },
    design: {
      de: "Studierende formulieren dieselbe Frage zur Moldau/Bessarabien auf Deutsch, Englisch, Rumänisch und Russisch und stellen sie einer KI. Sie vergleichen die Antworten: Welche Narrative dominieren je Sprache? Welche Autor:innen werden zitiert, welche fehlen? Sie schreiben ein Audit-Memo (2 Seiten), das die sprachlich-historiographischen Verzerrungen der KI dokumentiert.",
      en: "Students pose the same question on Moldavia/Bessarabia in German, English, Romanian, and Russian to an AI. They compare answers: Which narratives dominate in each language? Which authors are cited, which missing? They write a 2-page audit memo documenting the linguistic-historiographical distortions.",
    },
    research: {
      citation: {
        de: "Bender, Gebru, McMillan-Major & Mitchell (2021): On the Dangers of Stochastic Parrots. FAccT '21.",
        en: "Bender, Gebru, McMillan-Major & Mitchell (2021): On the Dangers of Stochastic Parrots. FAccT '21.",
      },
      url: "https://dl.acm.org/doi/10.1145/3442188.3445922",
    },
  },
  {
    id: "reverse-prompt",
    title: { de: "Reverse Prompt Engineering", en: "Reverse Prompt Engineering" },
    category: "critique",
    bloomLevel: "apply",
    bloomLabel: { de: "Anwenden, Analysieren", en: "Apply, Analyze" },
    difficulty: "medium",
    problem: {
      de: "Studierende prompten oft blind und wundern sich über schlechte Antworten. Sie verstehen den Zusammenhang zwischen Input-Framing und Output-Qualität nicht.",
      en: "Students often prompt blindly and are surprised by bad answers. They don't understand the link between input framing and output quality.",
    },
    design: {
      de: "Zeige den Studierenden eine gute und eine schlechte KI-Antwort zum selben Thema. Aufgabe: Rekonstruiert die Prompts, die diese Antworten produziert haben könnten. Diskussion: Welche Rolle/welches Register wurde angenommen? Welche Annahmen stecken im Prompt? Anschliessend optimieren die Studierenden einen eigenen Prompt iterativ und dokumentieren jede Änderung mit Begründung.",
      en: "Show students a good and a bad AI answer on the same topic. Task: Reconstruct the prompts that might have produced them. Discussion: What role/register was assumed? What assumptions are embedded in the prompt? Students then iteratively optimize their own prompt, documenting every change with a rationale.",
    },
    research: {
      citation: {
        de: "Anthropic (2024): Prompt Engineering Overview. Build with Claude Documentation.",
        en: "Anthropic (2024): Prompt Engineering Overview. Build with Claude Documentation.",
      },
      url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    },
  },
  {
    id: "grade-the-ai",
    title: { de: "KI benoten", en: "Grade the AI" },
    category: "critique",
    bloomLevel: "evaluate",
    bloomLabel: { de: "Bewerten", en: "Evaluate" },
    difficulty: "medium",
    problem: {
      de: "Studierende wissen oft nicht, an welchen Qualitätsmerkmalen eine gute Seminararbeit gemessen wird. Die Bewertungskriterien bleiben abstrakt, solange sie nicht auf einen konkreten Text angewandt werden.",
      en: "Students often don't know which quality markers define a good seminar paper. The grading criteria stay abstract until applied to concrete text.",
    },
    design: {
      de: "Erzeuge mit KI eine fiktive Seminararbeit (ca. 3–5 Seiten) zu einem Seminarthema. Studierende bewerten sie in Paaren nach den offiziellen Kriterien des Historischen Seminars und vergeben eine Note mit schriftlicher Begründung. Im Plenum werden die Bewertungen verglichen. Anschliessend: Strukturierte Reflexion über das, was KI auf dieser Stufe systematisch nicht leisten kann.",
      en: "Use AI to generate a fictional 3–5 page seminar paper on a course topic. Students grade it in pairs using the Department of History's official criteria, assigning a grade with written justification. Grades are compared in class. Follow-up: structured reflection on what AI systematically cannot do at this level.",
    },
    research: {
      citation: {
        de: "Bearman, Ryan & Ajjawi (2023): Discourses of artificial intelligence in higher education. Higher Education, 86.",
        en: "Bearman, Ryan & Ajjawi (2023): Discourses of artificial intelligence in higher education. Higher Education, 86.",
      },
      url: "https://link.springer.com/article/10.1007/s10734-022-00937-2",
    },
  },
  {
    id: "bibliography-test",
    title: { de: "Der Bibliographie-Test", en: "The Bibliography Test" },
    category: "critique",
    bloomLevel: "analyze",
    bloomLabel: { de: "Analysieren", en: "Analyze" },
    difficulty: "easy",
    problem: {
      de: "KI erfindet Quellen, plausible Autor:innen, plausible Titel, plausible Verlage, alles frei erfunden. Studierende, die diese Quellen in ihre Arbeit übernehmen, begehen Wissenschaftsbetrug, oft unwissentlich.",
      en: "AI fabricates sources: plausible authors, plausible titles, plausible publishers, all invented. Students who include such sources commit academic misconduct, often unknowingly.",
    },
    design: {
      de: "Studierende lassen eine KI zehn Literaturhinweise zu einem Seminarthema produzieren. Aufgabe: Jeden Eintrag im Bibliothekskatalog, bei JSTOR und Google Scholar verifizieren. Kategorien: existiert / existiert, aber falsch zitiert / erfunden. Die Übung schliesst mit einer Regel ab, die die Studierenden selbst formulieren: «Wie gehe ich in meiner Seminararbeit mit KI-generierten Literaturhinweisen um?»",
      en: "Students have an AI produce ten bibliographic references for a seminar topic. Task: verify every entry in the library catalog, JSTOR, and Google Scholar. Categories: exists / exists but miscited / fabricated. The exercise closes with a rule students formulate themselves: \"How will I handle AI-generated bibliographic references in my seminar paper?\"",
    },
    research: {
      citation: {
        de: "Walters & Wilder (2023): Fabrication and errors in the bibliographic citations generated by ChatGPT. Scientific Reports, 13.",
        en: "Walters & Wilder (2023): Fabrication and errors in the bibliographic citations generated by ChatGPT. Scientific Reports, 13.",
      },
      url: "https://www.nature.com/articles/s41598-023-41032-5",
    },
  },
  {
    id: "ai-revision-log",
    title: {
      de: "KI-gestützte Überarbeitung mit Reflexionsprotokoll",
      en: "AI-Assisted Revision with Reflection Log",
    },
    category: "socratic",
    bloomLevel: "create",
    bloomLabel: { de: "Erschaffen", en: "Create" },
    difficulty: "medium",
    problem: {
      de: "Wenn Studierende KI beim Schreiben nutzen, verschwimmt die Grenze zwischen eigener und generierter Autorenschaft. Die blosse Deklaration «KI wurde verwendet» ist zu wenig.",
      en: "When students use AI while writing, the boundary between their own and generated authorship blurs. A simple declaration \"AI was used\" is not enough.",
    },
    design: {
      de: "Studierende überarbeiten ihr Konzept oder einen Abschnitt ihrer Seminararbeit mithilfe eines KI-Tools. Parallel führen sie ein strukturiertes Reflexionsprotokoll: (1) Welchen Vorschlag hat die KI gemacht? (2) Habe ich ihn übernommen, verändert oder verworfen? (3) Warum? Das Protokoll wird als Anhang der Arbeit eingereicht und fliesst in die 25% Lernprozess-Bewertung ein.",
      en: "Students revise their proposal or a paper section using an AI tool. In parallel, they keep a structured reflection log: (1) What did the AI suggest? (2) Did I accept, modify, or reject it? (3) Why? The log is submitted as an appendix and feeds into the 25% learning-process grade.",
    },
    research: {
      citation: {
        de: "Kasneci et al. (2023): ChatGPT for good? On opportunities and challenges of LLMs for education. Learning and Individual Differences, 103.",
        en: "Kasneci et al. (2023): ChatGPT for good? On opportunities and challenges of LLMs for education. Learning and Individual Differences, 103.",
      },
      url: "https://doi.org/10.1016/j.lindif.2023.102274",
    },
  },
  {
    id: "unreliable-narrator",
    title: { de: "Die KI als unzuverlässiger Erzähler", en: "AI as Unreliable Narrator" },
    category: "historiography",
    bloomLevel: "evaluate",
    bloomLabel: { de: "Bewerten", en: "Evaluate" },
    difficulty: "hard",
    problem: {
      de: "Studierende nehmen KI-Antworten als neutral wahr. Dabei ist jede generative KI ein Erzähler mit Position, nur unsichtbar, unredigiert und ohne Autor:in, die man zur Verantwortung ziehen könnte.",
      en: "Students perceive AI answers as neutral. But every generative AI is a narrator with a position, just invisible, unedited, and with no author to hold accountable.",
    },
    design: {
      de: "Gib Studierenden eine längere KI-generierte historische Darstellung (z.B. «Die Rolle Rumäniens in Bessarabien 1918–1940»). Sie analysieren den Text wie eine historische Quelle: Welche Perspektive nimmt der Text ein? Welche Akteur:innen erhalten Stimme, welche nicht? Welche Begriffe (z.B. «Befreiung», «Besetzung», «Wiedervereinigung») werden gewählt und warum? Am Ende: Rekonstruktion der impliziten Ideologie des Textes.",
      en: "Give students a longer AI-generated historical account (e.g. \"Romania's role in Bessarabia 1918–1940\"). They analyze the text as they would a historical source: Whose perspective does it take? Which actors get voice, which don't? Which terms (e.g. \"liberation,\" \"occupation,\" \"reunification\") are chosen and why? At the end: reconstruct the text's implicit ideology.",
    },
    research: {
      citation: {
        de: "Hicks, Humphries & Slater (2024): ChatGPT is bullshit. Ethics and Information Technology, 26.",
        en: "Hicks, Humphries & Slater (2024): ChatGPT is bullshit. Ethics and Information Technology, 26.",
      },
      url: "https://link.springer.com/article/10.1007/s10676-024-09775-5",
    },
  },
];
