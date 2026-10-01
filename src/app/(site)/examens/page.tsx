import type { Metadata } from "next";
import Link from "next/link";
import { Clock, GraduationCap, ArrowUpRight } from "lucide-react";
import { pageOpenGraph } from "@/lib/page-metadata";

const TITLE = "Examens";
const DESCRIPTION =
  "Prépare ton examen régional ou national : sujets, corrections et séries de révision pour le Collège et le Lycée.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/examens" },
  openGraph: pageOpenGraph(TITLE, DESCRIPTION, "/examens"),
};

const EXAM_CARDS = [
  {
    short: "3AC",
    title: "Examen régional",
    description: "Sujets • Corrections • Séries de préparation",
    href: "/college/3ac/examens",
    soon: false,
  },
  {
    short: "2BAC",
    title: "Examen national",
    description: "Sujets nationaux • Corrections détaillées • Révisions",
    href: "/lycee/2eme-bac",
    soon: true,
  },
];

export default function ExamensPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">🏆 Préparation</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Prépare ton examen
      </h1>
      <p className="mt-3 max-w-2xl text-foreground-muted">
        Sujets d&apos;examens régionaux et nationaux, corrections détaillées et séries de révision, classés par niveau.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {EXAM_CARDS.map((card) =>
          card.soon ? (
            <div
              key={card.short}
              className="relative overflow-hidden rounded-lg border border-dashed border-border bg-surface-muted/50 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy-700 dark:text-orange-400">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
                {card.short} · {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.description}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-orange-600 dark:text-orange-400">
                <Clock className="h-3.5 w-3.5" />
                Bientôt disponible
              </p>
            </div>
          ) : (
            <Link
              key={card.short}
              href={card.href}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy-700 dark:text-orange-400">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-foreground">
                {card.short} · {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.description}</p>
              <p className="mt-4 flex items-center gap-1.5 font-mono text-xs font-medium text-foreground-muted">
                Commencer mes révisions
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-600 dark:group-hover:text-orange-400" />
              </p>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
