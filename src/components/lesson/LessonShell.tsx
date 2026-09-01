import type { ReactNode } from "react";
import Link from "next/link";
import { LessonSubnav } from "./LessonSubnav";
import type { LessonMeta } from "./types";

export function LessonShell({ meta, children }: { meta: LessonMeta; children: ReactNode }) {
  return (
    <>
      <LessonSubnav sections={meta.sections} />
      <div id="contenu">{children}</div>
      <div className="border-t border-neutral-800 bg-neutral-950 px-4 py-6 text-neutral-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-neutral-600">{meta.footerNote}</p>
          <nav aria-label="Sections du chapitre" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {meta.sections.map((s) => (
              <Link key={s.id} href={`#${s.id}`} className="transition-colors hover:text-white">
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
