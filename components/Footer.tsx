"use client";

import { useI18n } from "./I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useI18n();
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-uzh-gray">
        <p>© {new Date().getFullYear()} · {t(ui.footer_rights, lang)}</p>
        <p>{t(ui.footer_built, lang)}</p>
      </div>
    </footer>
  );
}
