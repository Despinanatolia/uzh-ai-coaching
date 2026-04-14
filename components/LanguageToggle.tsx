"use client";

import { useI18n } from "./I18nProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();

  return (
    <div
      className="inline-flex items-center border border-uzh-blue rounded-sm overflow-hidden text-sm"
      role="group"
      aria-label="Sprache wählen / Choose language"
    >
      <button
        type="button"
        onClick={() => setLang("de")}
        className={`px-3 py-1 font-medium transition-colors ${
          lang === "de" ? "bg-uzh-blue text-white" : "bg-white text-uzh-blue hover:bg-uzh-blue-light"
        }`}
        aria-pressed={lang === "de"}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1 font-medium transition-colors ${
          lang === "en" ? "bg-uzh-blue text-white" : "bg-white text-uzh-blue hover:bg-uzh-blue-light"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
