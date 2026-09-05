import type { Metadata } from "next";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { Clock, ArrowLeft, ArrowUpRight } from "lucide-react";
import { TRONC_COMMUN_SCIENCES } from "@/data/lycee";

export const metadata: Metadata = { title: "Tronc Commun · Science et Technologies" };

const CONTENT_ROOT = path.join(process.cwd(), "src/content/lessons/lycee/tc-sciences");

function hasContent(semestre: string, slug: string) {
  return fs.existsSync(path.join(CONTENT_ROOT, semestre, `${slug}.tsx`));
}

export default function TroncCommunSciencesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/lycee"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Cycle Lycée
      </Link>

      <p className="mt-4 font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">
        Tronc Commun
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Science et Technologies
      </h1>
      <p className="mt-3 max-w-2xl text-foreground-muted">
        Le programme national de mathématiques du Tronc Commun, filière Science et Technologies : 16 chapitres
        répartis sur les deux semestres. Chaque chapitre est publié avec son cours et ses exercices corrigés,
        au même format que le Collège.
      </p>

      <div className="mt-10 space-y-6">
        {TRONC_COMMUN_SCIENCES.semesters.map((semester) => (
          <details key={semester.id} open className="group rounded-lg border border-border bg-surface p-5 sm:p-7">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-foreground marker:content-none">
              {semester.label}
              <span className="font-mono text-xs font-medium text-foreground-muted">
                {semester.chapters.length} chapitres
              </span>
            </summary>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {semester.chapters.map((chapter) => {
                const available = hasContent(semester.id, chapter.slug);
                if (available) {
                  return (
                    <Link
                      key={chapter.slug}
                      href={`/lycee/tronc-commun/sciences/${semester.id}/${chapter.slug}`}
                      className="group/card flex items-center gap-4 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border font-mono text-xs font-medium text-foreground-muted">
                        {String(chapter.order).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block text-[15px] font-medium leading-snug text-foreground">
                          {chapter.title}
                        </span>
                        <span className="mt-1 block text-xs text-foreground-muted">Cours &amp; exercices corrigés</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground-muted transition-all group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-navy-600 dark:group-hover/card:text-orange-400" />
                    </Link>
                  );
                }
                return (
                  <div
                    key={chapter.slug}
                    className="flex items-center gap-4 rounded-lg border border-dashed border-border bg-surface-muted/50 p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border font-mono text-xs font-medium text-foreground-muted">
                      {String(chapter.order).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[15px] font-medium leading-snug text-foreground">
                        {chapter.title}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs text-foreground-muted">
                        <Clock className="h-3 w-3" />
                        Bientôt disponible
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
