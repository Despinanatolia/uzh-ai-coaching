"use client";

import MethodsAccordion from "@/components/MethodsAccordion";
import { useI18n } from "@/components/I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

export default function MethodenPage() {
  const { lang } = useI18n();
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-uzh-blue font-semibold mb-4">
        Toolkit
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-uzh-blue mb-6">
        {t(ui.methods_title, lang)}
      </h1>
      <p className="text-lg text-gray-800 max-w-3xl leading-relaxed mb-10">
        {t(ui.methods_intro, lang)}
      </p>
      <MethodsAccordion />
    </div>
  );
}
