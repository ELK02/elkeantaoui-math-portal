"use client";

import { useState, type ReactNode } from "react";
import { useExerciseGroup } from "./ExerciseGroup";

export function ExerciseCard({
  id,
  index,
  title,
  itemsLabel,
  items,
  correction,
}: {
  id: string;
  index: number;
  title: ReactNode;
  itemsLabel?: string;
  items: ReactNode;
  correction: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const group = useExerciseGroup();

  function toggle() {
    const next = !open;
    setOpen(next);
    if (next) group?.markVerified(id);
  }

  return (
    <article
      id={`exercice${id}`}
      className="mb-6 scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
            {index}
          </span>
          <div className="font-semibold text-foreground">{title}</div>
          {itemsLabel ? (
            <span className="font-mono text-xs text-foreground-muted">{itemsLabel}</span>
          ) : null}
        </div>
        {items}
      </div>
      <div className="flex justify-end px-5 pb-5 sm:px-6">
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center gap-1.5 rounded-md bg-neutral-950 px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:text-sm dark:bg-white dark:text-neutral-950"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M10 3.5c-4.14 0-7.68 2.6-9.06 6.25a.75.75 0 0 0 0 .5C2.32 13.9 5.86 16.5 10 16.5s7.68-2.6 9.06-6.25a.75.75 0 0 0 0-.5C17.68 6.1 14.14 3.5 10 3.5Zm0 10.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z" />
          </svg>
          <span>{open ? "Masquer la correction" : "Voir la correction"}</span>
        </button>
      </div>
      {open ? (
        <div className="animate-[fadeIn_.3s_ease] border-t border-border bg-green-100/60 p-5 sm:p-6">
          {correction}
        </div>
      ) : null}
    </article>
  );
}
