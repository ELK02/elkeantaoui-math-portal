import Link from "next/link";
import type { LessonSection } from "./types";

export function LessonSubnav({ sections }: { sections: LessonSection[] }) {
  return (
    <nav
      aria-label="Sommaire"
      className="sticky top-14 z-40 border-b border-border bg-surface/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-2 whitespace-nowrap py-2.5 font-mono text-xs font-medium">
          {sections.map((s) => (
            <li key={s.id}>
              <Link
                href={`#${s.id}`}
                className="rounded-md px-2.5 py-1 text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
