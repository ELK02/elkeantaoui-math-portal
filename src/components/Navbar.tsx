"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LEVELS } from "@/data/chapters";

const LYCEE_MENUS = [
  { label: "Tronc Commun", filieres: ["Science", "Technologie", "Lettres & Sciences Humaines"] },
  { label: "1ère Bac", filieres: ["Sc. Expérimentales", "Sc. & Tech Électriques", "Sc. & Tech Mécaniques", "Sc. Mathématiques", "Sc. Économiques & Gestion", "Lettres & Sc. Humaines"] },
  { label: "2ème Bac", filieres: ["Sc. Physiques", "SVT", "Sc. & Tech Électriques", "Sc. & Tech Mécaniques", "Sc. Math A", "Sc. Math B", "Sc. Économiques & Gestion", "Lettres & Sc. Humaines"] },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCollegeOpen, setMobileCollegeOpen] = useState(false);
  const [mobileLyceeOpen, setMobileLyceeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/" className="rounded-full px-4 py-2 text-sm font-semibold text-foreground-muted transition-colors hover:bg-navy-900/5 hover:text-navy-900 dark:hover:bg-white/5 dark:hover:text-white">
            Accueil
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground-muted transition-colors hover:bg-navy-900/5 hover:text-navy-900 dark:hover:bg-white/5 dark:hover:text-white">
              Collège <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-2xl border border-border bg-surface p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {LEVELS.map((level) => (
                <Link
                  key={level.id}
                  href={`/college/${level.id}`}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-navy-900/5 dark:hover:bg-white/5"
                >
                  {level.full}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-foreground-muted transition-colors hover:bg-navy-900/5 hover:text-navy-900 dark:hover:bg-white/5 dark:hover:text-white">
              Lycée <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-2xl border border-border bg-surface p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {LYCEE_MENUS.map((menu) => (
                <div key={menu.label} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground-muted">
                  {menu.label}
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-700">
                    Bientôt
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/college/3ac"
            className="ml-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
          >
            Commencer →
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="rounded-lg p-2 text-navy-900 dark:text-white"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="space-y-1 border-t border-border bg-surface px-4 py-3 md:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold text-foreground hover:bg-navy-900/5 dark:hover:bg-white/5">
            Accueil
          </Link>

          <button
            onClick={() => setMobileCollegeOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-semibold text-foreground hover:bg-navy-900/5 dark:hover:bg-white/5"
          >
            Collège
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileCollegeOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileCollegeOpen && (
            <div className="ml-3 space-y-1 border-l border-border pl-3">
              {LEVELS.map((level) => (
                <Link
                  key={level.id}
                  href={`/college/${level.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted hover:bg-navy-900/5 dark:hover:bg-white/5"
                >
                  {level.full}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileLyceeOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-semibold text-foreground hover:bg-navy-900/5 dark:hover:bg-white/5"
          >
            Lycée
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileLyceeOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileLyceeOpen && (
            <div className="ml-3 space-y-1 border-l border-border pl-3">
              {LYCEE_MENUS.map((menu) => (
                <div key={menu.label} className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted/70">
                  {menu.label}
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-700">
                    Bientôt
                  </span>
                </div>
              ))}
            </div>
          )}

          <Link
            href="/college/3ac"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-lg bg-orange-600 px-3 py-2.5 text-center font-semibold text-white"
          >
            Commencer →
          </Link>
        </div>
      )}
    </header>
  );
}
