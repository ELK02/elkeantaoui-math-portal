"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface ScoreEntry {
  earned: number;
  max: number;
}

interface EvaluationScoreContextValue {
  report: (id: string, earned: number, max: number) => void;
}

const EvaluationScoreContext = createContext<EvaluationScoreContextValue | null>(null);

export function useEvaluationScore() {
  return useContext(EvaluationScoreContext);
}

/**
 * Wraps a whole graded evaluation. Any <QcmQuestion points={…}/> or
 * <ExerciseCard points={…}/> inside reports its earned points here as the
 * learner answers, and a floating button reveals the running total out of
 * `maxScore` on demand.
 */
export function EvaluationScore({ maxScore, children }: { maxScore: number; children: ReactNode }) {
  const [entries, setEntries] = useState<Record<string, ScoreEntry>>({});
  const [revealed, setRevealed] = useState(false);

  const report = useMemo(
    () => (id: string, earned: number, max: number) =>
      setEntries((prev) => ({ ...prev, [id]: { earned, max } })),
    []
  );

  const answeredCount = Object.keys(entries).length;
  const totalEarned = Object.values(entries).reduce((s, e) => s + e.earned, 0);
  const roundedEarned = Math.round(totalEarned * 10) / 10;

  return (
    <EvaluationScoreContext.Provider value={{ report }}>
      {children}

      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        🎯 Voir ma note
      </button>

      {revealed ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setRevealed(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-neutral-950 p-8 text-center text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">Ta note</p>
            <p className="mt-2 text-6xl font-bold">
              {roundedEarned}
              <span className="text-2xl text-neutral-400"> / {maxScore}</span>
            </p>
            <p className="mt-3 text-sm text-neutral-400">
              {answeredCount} question{answeredCount > 1 ? "s" : ""} prise{answeredCount > 1 ? "s" : ""} en compte
              pour l&apos;instant. Réponds aux questions restantes pour affiner ta note.
            </p>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="mt-6 rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Fermer
            </button>
          </div>
        </div>
      ) : null}
    </EvaluationScoreContext.Provider>
  );
}
