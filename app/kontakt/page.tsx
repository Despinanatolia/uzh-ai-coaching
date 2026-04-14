"use client";

import { useI18n } from "@/components/I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useI18n();
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-uzh-blue font-semibold mb-4">
        Kontakt
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold text-uzh-blue mb-6">
        {t(ui.contact_title, lang)}
      </h1>
      <p className="text-lg text-gray-800 max-w-3xl leading-relaxed mb-12">
        {t(ui.contact_intro, lang)}
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="bg-uzh-blue-light p-8 rounded-sm">
          <h2 className="text-2xl font-semibold text-uzh-blue mb-2">Despina Fidanoglu</h2>
          <p className="text-sm text-uzh-gray mb-6">{t(ui.contact_role, lang)}</p>

          <dl className="space-y-3 text-gray-900">
            <div>
              <dt className="text-xs uppercase tracking-wide text-uzh-gray font-semibold">
                E-Mail
              </dt>
              <dd>
                <a
                  href="mailto:despina.fidanoglu@uzh.ch"
                  className="text-uzh-blue hover:underline underline-offset-4 font-medium"
                >
                  despina.fidanoglu@uzh.ch
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-uzh-gray font-semibold">
                {lang === "de" ? "Institution" : "Institution"}
              </dt>
              <dd>
                {lang === "de"
                  ? "Abteilung Lehrentwicklung, Universität Zürich"
                  : "Teaching Development Unit, University of Zurich"}
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-uzh-blue mb-4">
            {t(ui.contact_help_title, lang)}
          </h2>
          <ul className="space-y-3 text-gray-800 leading-relaxed">
            {[ui.contact_help_1, ui.contact_help_2, ui.contact_help_3, ui.contact_help_4].map(
              (item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-uzh-blue font-bold mt-1">→</span>
                  <span>{t(item, lang)}</span>
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
