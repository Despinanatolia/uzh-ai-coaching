"use client";

import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

export default function Home() {
  const { lang } = useI18n();
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-gray-200">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <p className="text-uzh-blue text-sm font-medium tracking-wide uppercase mb-4">
            AI Coaching · UZH
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-uzh-blue leading-tight max-w-4xl">
            {t(ui.home_hero_title, lang)}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-uzh-gray max-w-3xl leading-relaxed">
            {t(ui.home_hero_sub, lang)}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/bloom"
              className="px-5 py-3 bg-uzh-blue text-white font-medium rounded-sm hover:bg-uzh-blue-dark transition-colors"
            >
              {t(ui.nav_bloom, lang)} →
            </Link>
            <Link
              href="/methoden"
              className="px-5 py-3 border border-uzh-blue text-uzh-blue font-medium rounded-sm hover:bg-uzh-blue-light transition-colors"
            >
              {t(ui.nav_methods, lang)}
            </Link>
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="border-b border-gray-200">
        <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
          <h2 className="text-2xl font-semibold text-uzh-blue md:col-span-1">
            {t(ui.home_who_title, lang)}
          </h2>
          <p className="md:col-span-2 text-lg leading-relaxed text-gray-800">
            {t(ui.home_who_text, lang)}
          </p>
        </div>
      </section>

      {/* Project */}
      <section className="border-b border-gray-200 bg-uzh-blue-light">
        <div className="max-w-content mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-wide text-uzh-blue font-semibold mb-2">
              BA-Seminar Moldau · FS 2026
            </p>
            <h2 className="text-2xl font-semibold text-uzh-blue">
              {t(ui.home_project_title, lang)}
            </h2>
          </div>
          <p className="md:col-span-2 text-lg leading-relaxed text-gray-800">
            {t(ui.home_project_text, lang)}
          </p>
        </div>
      </section>

      {/* What you'll find */}
      <section>
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold text-uzh-blue mb-10">
            {t(ui.home_what_title, lang)}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <HomeCard
              href="/bloom"
              title={t(ui.nav_bloom, lang)}
              body={t(ui.home_card_bloom, lang)}
            />
            <HomeCard
              href="/methoden"
              title={t(ui.nav_methods, lang)}
              body={t(ui.home_card_methods, lang)}
            />
            <HomeCard
              href="/entwicklungen"
              title={t(ui.nav_developments, lang)}
              body={t(ui.home_card_dev, lang)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function HomeCard({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link
      href={href}
      className="block p-6 border border-gray-200 rounded-sm hover:border-uzh-blue hover:shadow-sm transition-all group"
    >
      <h3 className="text-lg font-semibold text-uzh-blue mb-3 group-hover:underline underline-offset-4">
        {title} →
      </h3>
      <p className="text-gray-700 leading-relaxed">{body}</p>
    </Link>
  );
}
