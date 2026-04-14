import type { LocalizedString } from "@/lib/i18n";

export type BloomLevel = {
  id: string;
  order: number; // 1 = bottom (Remember) ... 6 = top (Create)
  name: LocalizedString;
  verb: LocalizedString;
  color: string;
  whatAi: LocalizedString;
  activity: LocalizedString;
  warning: LocalizedString;
};

export const bloomLevels: BloomLevel[] = [
  {
    id: "remember",
    order: 1,
    name: { de: "Erinnern", en: "Remember" },
    verb: { de: "abrufen, benennen, wiedergeben", en: "recall, name, reproduce" },
    color: "#0028a5",
    whatAi: {
      de: "KI kann Fakten, Daten und Definitionen blitzschnell ausgeben, und dabei überzeugend erfunden wirken (Halluzinationen). Sie ist auf dieser Stufe am anfälligsten für Ungenauigkeiten, weil die Studierenden kaum Möglichkeit haben zu prüfen, was stimmt.",
      en: "AI can output facts, dates, and definitions at lightning speed, and convincingly make things up (hallucinations). It's most prone to inaccuracies at this level because students have little way to verify what's true.",
    },
    activity: {
      de: "«Fehler finden»-Übung: Lass ChatGPT eine kurze Chronologie zur Moldau (18.-19. Jh.) schreiben. Studierende identifizieren mit der Seminarliteratur mindestens drei sachliche Fehler oder unbelegte Behauptungen und korrigieren sie mit Quellenangabe.",
      en: "\"Spot the hallucination\" exercise: Have ChatGPT write a short chronology of Moldavia (18th–19th c.). Students identify at least three factual errors or unsourced claims using the seminar literature and correct them with references.",
    },
    warning: {
      de: "Studierende, die Fakten blind übernehmen, lernen nichts und veröffentlichen womöglich Falschinformationen. Auf dieser Stufe ist Quellenprüfung Pflicht, nicht Kür.",
      en: "Students who take facts at face value learn nothing and may circulate misinformation. At this level, source-checking is mandatory, not optional.",
    },
  },
  {
    id: "understand",
    order: 2,
    name: { de: "Verstehen", en: "Understand" },
    verb: { de: "erklären, zusammenfassen, einordnen", en: "explain, summarize, classify" },
    color: "#1a3eb5",
    whatAi: {
      de: "KI liefert flüssige Zusammenfassungen und Erklärungen auf Anfängerniveau, sehr nützlich zum Einstieg in komplexe Konzepte (z.B. «Imperiale Grenzland-Theorie in drei Sätzen»), aber oft geglättet und ohne die historiographischen Kontroversen, die für Studierende gerade wichtig sind.",
      en: "AI produces fluent summaries and beginner-level explanations, useful for entering complex concepts (e.g. \"imperial borderland theory in three sentences\"), but often smoothed over and missing the historiographical debates that matter most for students.",
    },
    activity: {
      de: "«KI-Zusammenfassung vs. Seminartext»: Studierende lassen sich von einer KI einen Fachaufsatz zusammenfassen. Dann lesen sie den Originaltext und protokollieren, was die KI weggelassen, vereinfacht oder missverstanden hat, insbesondere methodische und forschungspolitische Positionierungen.",
      en: "\"AI summary vs. seminar text\": Students have an AI summarize a scholarly article, then read the original and log what the AI omitted, simplified, or misread, especially methodological and historiographical positioning.",
    },
    warning: {
      de: "Eine flüssige Zusammenfassung erzeugt das Gefühl von Verstehen, ohne dass Verstehen stattgefunden hat. Gerade bei historiographisch umstrittenen Texten blendet KI die Debatte aus, die den Text erst interessant macht.",
      en: "A fluent summary creates the feeling of understanding without the understanding having happened. For historiographically contested texts, AI tends to hide the debate that makes the text interesting.",
    },
  },
  {
    id: "apply",
    order: 3,
    name: { de: "Anwenden", en: "Apply" },
    verb: { de: "übertragen, nutzen, umsetzen", en: "transfer, use, implement" },
    color: "#3355c5",
    whatAi: {
      de: "KI kann Konzepte auf neue Fälle übertragen (z.B. «Wende den Kolonialismus-Begriff auf Bessarabien nach 1812 an»). Die Antwort wirkt plausibel, aber KI kennt oft die Grenzen der Übertragbarkeit nicht, historische Kategorien sind selten eins zu eins einsetzbar.",
      en: "AI can transfer concepts to new cases (e.g. \"apply the concept of colonialism to Bessarabia after 1812\"). The response sounds plausible, but AI often doesn't know the limits of transferability, historical categories rarely map cleanly.",
    },
    activity: {
      de: "«Reverse Prompt Engineering»: Gib Studierenden eine gute KI-Antwort zur Russifizierungspolitik. Sie rekonstruieren den Prompt, der diese Antwort produziert haben könnte, und reflektieren, welche Annahmen und Rahmungen im Prompt stecken.",
      en: "\"Reverse prompt engineering\": Give students a good AI answer on Russification policy. They reconstruct the prompt that might have produced it, and reflect on what assumptions and framings are embedded in the prompt.",
    },
    warning: {
      de: "Anwendung ohne Kontextkenntnis ist Anmassung. Studierende brauchen auf dieser Stufe so viel Quellennähe, dass sie spüren, wenn die KI einen Begriff überdehnt.",
      en: "Application without context knowledge is presumption. At this level students need enough source familiarity to feel when AI overstretches a concept.",
    },
  },
  {
    id: "analyze",
    order: 4,
    name: { de: "Analysieren", en: "Analyze" },
    verb: { de: "unterscheiden, strukturieren, zuordnen", en: "differentiate, organize, attribute" },
    color: "#4d72d5",
    whatAi: {
      de: "KI kann Texte oberflächlich gliedern und Argumentstrukturen benennen. Bei dichten wissenschaftlichen Texten übersieht sie aber regelmässig implizite Prämissen, rhetorische Figuren und Leerstellen, genau die Dinge, die kritische Analyse ausmachen.",
      en: "AI can superficially outline texts and label argument structures. But with dense scholarly texts it routinely misses implicit premises, rhetorical moves, and silences, precisely what critical analysis is about.",
    },
    activity: {
      de: "«Bias-Audit»: Studierende lassen eine KI drei Quellen zur Russifizierung Bessarabiens analysieren (eine russische, eine rumänische, eine westliche). Sie vergleichen, welche Perspektiven die KI stärker macht, welche sie abschwächt, und schreiben ein Reflexionsmemo zur Verzerrung.",
      en: "\"Bias audit\": Students have AI analyze three sources on Russification in Bessarabia (Russian, Romanian, Western). They compare which perspectives AI amplifies, which it dampens, and write a reflection memo on the distortion.",
    },
    warning: {
      de: "KI ist trainiert auf dem Durchschnitt öffentlich zugänglicher Texte. Osteuropäische Historiographie ist darin massiv unterrepräsentiert. Die KI wird osteuropäische Perspektiven tendenziell flacher darstellen.",
      en: "AI is trained on the average of publicly available text. Eastern European historiography is massively underrepresented there. AI will tend to flatten Eastern European perspectives.",
    },
  },
  {
    id: "evaluate",
    order: 5,
    name: { de: "Bewerten", en: "Evaluate" },
    verb: { de: "beurteilen, abwägen, kritisieren", en: "judge, weigh, critique" },
    color: "#6690e5",
    whatAi: {
      de: "KI kann pro/contra-Listen und höfliche Einwände formulieren, aber sie hat keine disziplinspezifischen Qualitätsmassstäbe und wird selten klar Stellung beziehen. Sie optimiert auf Ausgewogenheit, auch wo es sachlich nichts abzuwägen gibt.",
      en: "AI can produce pro/con lists and polite objections, but it has no discipline-specific quality criteria and rarely takes a clear position. It optimizes for balance, even where balance isn't factually warranted.",
    },
    activity: {
      de: "«KI benoten»: Studierende erhalten eine fiktive, von KI verfasste Seminararbeit zur Moldau. Sie bewerten sie nach den vollständigen Kriterien des Historischen Seminars und begründen jede Bewertung mit Belegen. Anschliessend: Diskussion, was KI strukturell nicht leisten kann.",
      en: "\"Grade the AI\": Students receive a fictional AI-written seminar paper on Moldavia. They grade it using the full criteria of the Department of History and justify every judgment with evidence. Follow-up: discussion of what AI structurally cannot do.",
    },
    warning: {
      de: "Eine höfliche, ausgewogene Einschätzung ist keine wissenschaftliche Bewertung. Gerade bei Quellenkritik und Methodendiskussion muss eine klare Position eingenommen werden, das kann KI nicht imitieren.",
      en: "A polite, balanced assessment is not a scholarly evaluation. Especially in source criticism and method debates, a clear stance is required, AI cannot imitate that.",
    },
  },
  {
    id: "create",
    order: 6,
    name: { de: "Erschaffen", en: "Create" },
    verb: { de: "formulieren, entwerfen, synthetisieren", en: "formulate, design, synthesize" },
    color: "#7fadf5",
    whatAi: {
      de: "KI kann Rohtext, Entwürfe und Struktur-Vorschläge liefern, das ist auf dieser Stufe am produktivsten. Aber der originäre Forschungsbeitrag, die eigene Fragestellung und die Argumentationslinie müssen vom Menschen kommen. Sonst gibt es keine wissenschaftliche Arbeit, nur einen hübschen Text.",
      en: "AI can produce draft text, outlines, and structural suggestions, this is its most productive role at this level. But the original research contribution, the question itself, and the line of argument must come from the human. Otherwise there is no scholarly work, just pretty text.",
    },
    activity: {
      de: "«KI-gestützte Überarbeitung mit Reflexionsprotokoll»: Studierende überarbeiten ihr Exposé mit dem Konzept-Feedback-Agenten und dokumentieren transparent: Welche KI-Vorschläge haben sie übernommen, welche abgelehnt, und warum? Das Reflexionsprotokoll wird Teil des Portfolios.",
      en: "\"AI-assisted revision with reflection log\": Students revise their proposal with the Concept Feedback Agent and transparently document which AI suggestions they took, which they rejected, and why. The reflection log becomes part of the portfolio.",
    },
    warning: {
      de: "Auf dieser Stufe wird die KI-Deklaration zum Kern wissenschaftlicher Redlichkeit. Wer KI für Kreation nutzt, muss offenlegen, was sie beigetragen hat, sonst verschwimmt die Grenze zur Autorenschaft.",
      en: "At this level, AI declaration becomes the heart of scholarly integrity. Using AI for creation means disclosing what it contributed, otherwise authorship blurs.",
    },
  },
];
