import type { Metadata } from "next";
import Link from "@/components/AppLink";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { DEUXIEME_BAC } from "@/data/lycee";
import { WhatsAppLevelBanner } from "@/components/WhatsAppLevelBanner";
import { pageOpenGraph } from "@/lib/page-metadata";

const TITLE = "2ème Année Bac";
const DESCRIPTION =
  "Mathématiques 2ème Bac Maroc : Sciences Physiques, SVT, Sciences Math A/B, Sciences et Technologies — cours et exercices corrigés par filière, préparation à l'examen national.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/lycee/2eme-bac" },
  openGraph: pageOpenGraph(TITLE, DESCRIPTION, "/lycee/2eme-bac"),
};

export default function DeuxiemeBacPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/lycee"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Cycle Lycée
      </Link>

      <p className="mt-4 font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">Lycée</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        2ème Année Bac
      </h1>
      <p className="mt-3 max-w-2xl text-foreground-muted">
        Choisissez votre filière pour accéder aux chapitres, classés par semestre, avec cours et exercices corrigés.
      </p>

      <WhatsAppLevelBanner levelId="2bac" />

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {DEUXIEME_BAC.filieres.map((filiere) => {
          const total = filiere.semesters.reduce((n, s) => n + s.chapters.length, 0);
          return (
            <Link
              key={filiere.slug}
              href={`/lycee/2eme-bac/${filiere.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
            >
              <h2 className="font-display text-lg font-semibold text-foreground">{filiere.label}</h2>
              <p className="mt-4 flex items-center gap-1.5 font-mono text-xs font-medium text-foreground-muted">
                {total} chapitres
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-600 dark:group-hover:text-orange-400" />
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
