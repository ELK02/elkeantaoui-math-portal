import type { ReactNode } from "react";
import { MathBlock } from "./Math";

export function FormulaBlock({ tex, caption }: { tex: string; caption?: ReactNode }) {
  return (
    <div className="rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
      <MathBlock tex={tex} className="katex-formula-block text-center text-2xl font-bold sm:text-4xl" />
      {caption ? (
        <p className="mt-2 text-center font-mono text-xs text-neutral-400">{caption}</p>
      ) : null}
    </div>
  );
}
