"use client";

import { useEffect, useState } from "react";
import { getProgress, PROGRESS_EVENT, PROGRESS_LEVELS, type ProgressState } from "@/lib/progress";

export function ProgressTracker() {
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    function sync() {
      setProgress(getProgress());
    }
    sync();
    window.addEventListener(PROGRESS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!progress) return null;

  const started = PROGRESS_LEVELS.filter((level) => (progress[level.id]?.length ?? 0) > 0);
  if (started.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        📊 Ma progression
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
        Suivi enregistré sur cet appareil, chapitre par chapitre.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {started.map((level) => {
          const visited = progress[level.id]?.length ?? 0;
          const pct = Math.round((visited / level.total) * 100);
          return (
            <div key={level.id} className="rounded-lg border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-foreground">{level.label}</span>
                <span className="font-mono text-xs text-foreground-muted">
                  {visited} / {level.total} chapitres
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-muted">
                <div
                  className="h-full rounded-full bg-navy-600 dark:bg-orange-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-1.5 text-right font-mono text-xs text-foreground-muted">{pct}%</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
