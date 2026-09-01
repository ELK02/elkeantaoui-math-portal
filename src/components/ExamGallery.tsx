"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ExamGallery({ pages }: { pages: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
        {pages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-surface-muted"
          >
            <Image
              src={src}
              alt={`Page d'examen ${i + 1}`}
              fill
              sizes="200px"
              className="object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setOpenIndex(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {openIndex > 0 && (
            <button
              type="button"
              aria-label="Page précédente"
              className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i !== null ? i - 1 : i));
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          {openIndex < pages.length - 1 && (
            <button
              type="button"
              aria-label="Page suivante"
              className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i !== null ? i + 1 : i));
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div className="relative h-[85vh] w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={pages[openIndex]}
              alt={`Page d'examen ${openIndex + 1}`}
              fill
              sizes="80vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
