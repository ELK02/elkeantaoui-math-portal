import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Chapter } from "@/data/types";

export function ChapterCard({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <Link
      href={chapter.href}
      className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border font-mono text-xs font-medium text-foreground-muted">
        {String(index).padStart(2, "0")}
      </span>
      <span className="flex-1">
        <span className="block text-[15px] font-medium leading-snug text-foreground">
          {chapter.title}
        </span>
        <span className="mt-1 block text-xs text-foreground-muted">
          Cours &amp; exercices corrigés
        </span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-600 dark:group-hover:text-orange-400" />
    </Link>
  );
}
