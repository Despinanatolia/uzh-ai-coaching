"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "./I18nProvider";
import { ui } from "@/data/translations";
import { t } from "@/lib/i18n";

const navItems = [
  { href: "/", key: "nav_home" as const },
  { href: "/bloom", key: "nav_bloom" as const },
  { href: "/methoden", key: "nav_methods" as const },
  { href: "/entwicklungen", key: "nav_developments" as const },
  { href: "/ressourcen", key: "nav_resources" as const },
  { href: "/kontakt", key: "nav_contact" as const },
];

export default function Header() {
  const { lang } = useI18n();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setMobileOpen(false)}>
          <span className="text-uzh-blue font-semibold text-lg tracking-tight">
            {t(ui.site_title, lang)}
          </span>
          <span className="text-xs text-uzh-gray">{t(ui.site_subtitle, lang)}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Hauptnavigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors ${
                  active
                    ? "text-uzh-blue bg-uzh-blue-light"
                    : "text-uzh-gray hover:text-uzh-blue hover:bg-gray-50"
                }`}
              >
                {t(ui[item.key], lang)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            className="lg:hidden text-uzh-blue p-2 border border-uzh-blue rounded-sm"
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white" aria-label="Mobile Navigation">
          <div className="max-w-content mx-auto px-6 py-3 flex flex-col">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-3 text-base font-medium rounded-sm transition-colors ${
                    active
                      ? "text-uzh-blue bg-uzh-blue-light"
                      : "text-uzh-gray hover:text-uzh-blue hover:bg-gray-50"
                  }`}
                >
                  {t(ui[item.key], lang)}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
