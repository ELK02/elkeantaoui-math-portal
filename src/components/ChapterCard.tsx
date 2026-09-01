import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import type { Chapter } from "@/data/types";

export function ChapterCard({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <Link
      href={chapter.href}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-navy-500 hover:shadow-md"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-display text-sm font-bold text-white dark:bg-navy-700">
        {String(index).padStart(2, "0")}
      </span>
      <span className="flex-1">
        <span className="block font-display text-[15px] font-semibold leading-snug text-foreground">
          {chapter.title}
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-foreground-muted">
          <BookOpen className="h-3.5 w-3.5" />
          Cours &amp; exercices corrigés
        </span>
      </span>
      <ChevronRight className="h-5 w-5 shrink-0 text-foreground-muted transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
    </Link>
  );
}
