import type { Metadata } from "next";
import Image from "next/image";
import { FileDown, NotebookPen } from "lucide-react";
import { FICHES } from "@/data/fiches";

export const metadata: Metadata = {
  title: "Fiches manuscrites",
  description: "Fiches de révision manuscrites, claires et colorées, pour réviser rapidement chaque chapitre.",
};

export default function FichesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">✍️ Révision</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Fiches manuscrites
      </h1>
      <p className="mt-3 max-w-2xl text-foreground-muted">
        Révise rapidement avec des fiches claires, colorées et faciles à mémoriser.
      </p>

      {FICHES.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-lg border border-dashed border-border bg-surface-muted/50 px-6 py-16 text-center">
          <NotebookPen className="h-8 w-8 text-foreground-muted" />
          <p className="font-display text-lg font-semibold text-foreground">Bientôt disponible</p>
          <p className="max-w-sm text-sm text-foreground-muted">
            Les premières fiches manuscrites arrivent bientôt. Revenez prochainement !
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {FICHES.map((fiche) => (
            <div key={fiche.slug} className="overflow-hidden rounded-lg border border-border bg-surface">
              <div className="relative aspect-[3/4] w-full bg-surface-muted">
                <Image src={fiche.imageSrc} alt={fiche.chapterTitle} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="font-mono text-[11px] font-medium uppercase tracking-wide text-foreground-muted">
                  {fiche.level}
                </p>
                <h2 className="mt-1 text-sm font-semibold text-foreground">{fiche.chapterTitle}</h2>
                {fiche.pdfSrc && (
                  <a
                    href={fiche.pdfSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-navy-700 hover:underline dark:text-orange-400"
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    Télécharger le PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
