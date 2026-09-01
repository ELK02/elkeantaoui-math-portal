"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface QcmSectionContextValue {
  markAnswered: (id: string) => void;
}

const QcmSectionContext = createContext<QcmSectionContextValue | null>(null);

export function useQcmSection() {
  return useContext(QcmSectionContext);
}

export function QcmSection({
  total,
  children,
  doneMessage = "Quiz terminé !",
}: {
  total: number;
  children: ReactNode;
  doneMessage?: string;
}) {
  const [answered, setAnswered] = useState<Set<string>>(new Set());

  const value = useMemo<QcmSectionContextValue>(
    () => ({
      markAnswered: (id: string) =>
        setAnswered((prev) => (prev.has(id) ? prev : new Set(prev).add(id))),
    }),
    []
  );

  const done = total > 0 && answered.size === total;

  return (
    <QcmSectionContext.Provider value={value}>
      <div className="space-y-4">{children}</div>
      {done ? (
        <div className="mt-6 rounded-xl bg-neutral-950 p-5 text-center text-white">
          <p className="text-lg font-semibold">🎉 {doneMessage}</p>
        </div>
      ) : null}
    </QcmSectionContext.Provider>
  );
}
