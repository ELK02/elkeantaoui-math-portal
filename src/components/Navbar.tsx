"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LEVELS } from "@/data/chapters";

const LYCEE_MENUS = [
  { label: "Tronc Commun · Sciences et Technologies", href: "/lycee/tronc-commun/sciences" },
  { label: "1ère Bac" },
  { label: "2ème Bac" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCollegeOpen, setMobileCollegeOpen] = useState(false);
  const [mobileLyceeOpen, setMobileLyceeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <div className="hidden items-center gap-0.5 md:flex">
          <Link href="/" className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-navy-900/[0.04] hover:text-foreground dark:hover:bg-white/[0.06]">
            Accueil
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-navy-900/[0.04] hover:text-foreground dark:hover:bg-white/[0.06]">
              Collège <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full w-52 translate-y-1 rounded-lg border border-border bg-surface p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {LEVELS.map((level) => (
                <Link
                  key={level.id}
                  href={`/college/${level.id}`}
                  className="block rounded-md px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-navy-900/[0.04] dark:hover:bg-white/[0.06]"
                >
                  {level.full}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-navy-900/[0.04] hover:text-foreground dark:hover:bg-white/[0.06]">
              Lycée <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-lg border border-border bg-surface p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {LYCEE_MENUS.map((menu) =>
                menu.href ? (
                  <Link
                    key={menu.label}
                    href={menu.href}
                    className="block rounded-md px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-navy-900/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <div key={menu.label} className="flex items-center justify-between rounded-md px-2.5 py-2 text-sm font-medium text-foreground-muted">
                    {menu.label}
                    <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-foreground-muted">
                      Bientôt
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <Link
            href="/college/3ac"
            className="ml-3 rounded-md bg-navy-900 px-3.5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-navy-800 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-100"
          >
            Commencer →
          </Link>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="rounded-md p-2 text-foreground"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="space-y-0.5 border-t border-border bg-surface px-4 py-3 md:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-navy-900/[0.04] dark:hover:bg-white/[0.06]">
            Accueil
          </Link>

          <button
            onClick={() => setMobileCollegeOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-navy-900/[0.04] dark:hover:bg-white/[0.06]"
          >
            Collège
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileCollegeOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileCollegeOpen && (
            <div className="ml-3 space-y-0.5 border-l border-border pl-3">
              {LEVELS.map((level) => (
                <Link
                  key={level.id}
                  href={`/college/${level.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2.5 py-2 text-sm text-foreground-muted hover:bg-navy-900/[0.04] dark:hover:bg-white/[0.06]"
                >
                  {level.full}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileLyceeOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-navy-900/[0.04] dark:hover:bg-white/[0.06]"
          >
            Lycée
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileLyceeOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileLyceeOpen && (
            <div className="ml-3 space-y-0.5 border-l border-border pl-3">
              {LYCEE_MENUS.map((menu) =>
                menu.href ? (
                  <Link
                    key={menu.label}
                    href={menu.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-2.5 py-2 text-sm font-medium text-foreground hover:bg-navy-900/[0.04] dark:hover:bg-white/[0.06]"
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <div key={menu.label} className="flex items-center justify-between rounded-md px-2.5 py-2 text-sm text-foreground-muted/70">
                    {menu.label}
                    <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide">
                      Bientôt
                    </span>
                  </div>
                )
              )}
            </div>
          )}

          <Link
            href="/college/3ac"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-md bg-navy-900 px-3 py-2.5 text-center text-sm font-medium text-white dark:bg-white dark:text-navy-900"
          >
            Commencer →
          </Link>
        </div>
      )}
    </header>
  );
}
