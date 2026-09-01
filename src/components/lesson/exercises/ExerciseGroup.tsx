"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface ExerciseGroupContextValue {
  markVerified: (id: string) => void;
}

const ExerciseGroupContext = createContext<ExerciseGroupContextValue | null>(null);

export function useExerciseGroup() {
  return useContext(ExerciseGroupContext);
}

export function ExerciseGroup({
  total,
  children,
  celebrationTitle = "Bravo, tous les exercices sont vérifiés !",
  celebrationSubtitle,
}: {
  total: number;
  children: ReactNode;
  celebrationTitle?: string;
  celebrationSubtitle?: string;
}) {
  const [verified, setVerified] = useState<Set<string>>(new Set());

  const value = useMemo<ExerciseGroupContextValue>(
    () => ({
      markVerified: (id: string) =>
        setVerified((prev) => (prev.has(id) ? prev : new Set(prev).add(id))),
    }),
    []
  );

  const count = verified.size;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  const done = count === total;

  return (
    <ExerciseGroupContext.Provider value={value}>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
        <p className="font-mono text-sm text-foreground-muted">
          {count} / {total} vérifiés
        </p>
      </div>
      <div className="mb-10 h-1.5 overflow-hidden rounded-full bg-surface-muted">
        <div
          className="h-full bg-neutral-950 transition-all duration-500 dark:bg-white"
          style={{ width: `${pct}%` }}
        />
      </div>

      {done ? (
        <div className="mb-10 rounded-xl bg-neutral-950 p-5 text-center text-white">
          <p className="text-lg font-semibold">🎉 {celebrationTitle}</p>
          {celebrationSubtitle ? (
            <p className="mt-1 text-sm text-neutral-400">{celebrationSubtitle}</p>
          ) : null}
        </div>
      ) : null}

      {children}
    </ExerciseGroupContext.Provider>
  );
}
