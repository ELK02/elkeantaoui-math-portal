"use client";

import { useState, type ReactNode } from "react";
import { useQcmSection } from "./QcmSection";

export interface QcmOption {
  id: string;
  content: ReactNode;
  correct?: boolean;
}

export function QcmQuestion({
  id,
  prompt,
  options,
}: {
  id: string;
  prompt: ReactNode;
  options: QcmOption[];
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const section = useQcmSection();

  function select(optionId: string) {
    if (selected) return;
    setSelected(optionId);
    section?.markAnswered(id);
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="mb-3 font-medium text-foreground">{prompt}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt) => {
          const isSelected = selected === opt.id;
          const revealed = selected !== null;
          const state =
            revealed && opt.correct
              ? "border-green-500/40 bg-green-100/60"
              : revealed && isSelected && !opt.correct
                ? "border-rose-500/40 bg-rose-100/60"
                : "border-border bg-background hover:bg-surface-muted";
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => select(opt.id)}
              disabled={selected !== null}
              className={`rounded-lg border p-3 text-left text-sm transition-colors ${state}`}
            >
              {opt.content}
            </button>
          );
        })}
      </div>
    </div>
  );
}
