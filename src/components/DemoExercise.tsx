"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

const OPTIONS = [
  { label: "x = 4", correct: false },
  { label: "x = 5", correct: true },
  { label: "x = 7", correct: false },
];

export function DemoExercise() {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  function handleSelect(i: number) {
    setSelected(i);
    setRevealed(true);
  }

  return (
    <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">
          Exercice · Exemple
        </span>
        <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-foreground-muted">
          3ème Année
        </span>
      </div>

      <p className="mt-4 text-lg font-medium text-foreground">
        Résoudre l&apos;équation&nbsp;: <span className="font-mono">2x + 3 = 13</span>
      </p>

      <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
        {OPTIONS.map((opt, i) => {
          const isSelected = selected === i;
          const showState = revealed && (isSelected || opt.correct);
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => handleSelect(i)}
              className={`flex items-center justify-center gap-2 rounded-md border px-4 py-3 font-mono text-sm font-medium transition-colors ${
                showState && opt.correct
                  ? "border-green-600 bg-green-100 text-green-700 dark:border-green-500 dark:bg-green-950/40 dark:text-green-400"
                  : showState && isSelected
                    ? "border-red-500 bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400"
                    : "border-border text-foreground hover:border-navy-400 dark:hover:border-navy-500"
              }`}
            >
              {showState && opt.correct && <Check className="h-4 w-4" />}
              {showState && isSelected && !opt.correct && <X className="h-4 w-4" />}
              {opt.label}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-5 rounded-md border border-border bg-surface-muted p-4 text-sm leading-relaxed text-foreground-muted">
          <span className="font-mono font-medium text-foreground">Correction : </span>
          2x + 3 = 13 → 2x = 13 − 3 → 2x = 10 → x = 10 ÷ 2 →{" "}
          <span className="font-mono font-medium text-green-700 dark:text-green-400">x = 5</span>
        </div>
      )}

      <p className="mt-4 text-xs text-foreground-muted">
        Chaque leçon contient plusieurs exercices comme celui-ci, avec correction détaillée en un clic.
      </p>
    </div>
  );
}
