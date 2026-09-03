"use client";

import { useState, type ReactNode } from "react";
import { useQcmSection } from "./QcmSection";
import { useEvaluationScore } from "../evaluation/EvaluationScore";

export interface QcmOption {
  id: string;
  content: ReactNode;
  correct?: boolean;
}

export function QcmQuestion({
  id,
  prompt,
  options,
  points,
}: {
  id: string;
  prompt: ReactNode;
  options: QcmOption[];
  /** When set (and wrapped in <EvaluationScore>), reports earned/max points on answer. */
  points?: number;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const section = useQcmSection();
  const score = useEvaluationScore();

  function select(optionId: string) {
    if (selected) return;
    setSelected(optionId);
    section?.markAnswered(id);
    if (points !== undefined) {
      const opt = options.find((o) => o.id === optionId);
      score?.report(id, opt?.correct ? points : 0, points);
    }
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="mb-3 font-medium text-foreground">{prompt}</div>
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
