"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { DEFAULT_LANG } from "@/lib/i18n";

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<I18nContextType>({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read initial language from a data attribute on <html> set by the UI.
    // We only use in-memory state (no localStorage) to respect Cowork artifact guidance.
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
