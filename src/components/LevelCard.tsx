import Link from "next/link";
import { ArrowUpRight, Clock, type LucideIcon } from "lucide-react";

export function LevelCard({
  icon: Icon,
  short,
  full,
  description,
  chapterCount,
  href,
  soon = false,
}: {
  icon: LucideIcon;
  short: string;
  full: string;
  description: string;
  chapterCount?: number;
  href: string;
  soon?: boolean;
}) {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-navy-700 dark:text-orange-400">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-3xl font-semibold text-navy-900/10 dark:text-white/10">{short}</span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{full}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{description}</p>
      {soon ? (
        <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-orange-600 dark:text-orange-400">
          <Clock className="h-3.5 w-3.5" />
          Bientôt disponible
        </p>
      ) : (
        <p className="mt-4 flex items-center gap-1.5 font-mono text-xs font-medium text-foreground-muted">
          {typeof chapterCount === "number" ? `${chapterCount} chapitres · ` : ""}Voir les cours
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-600 dark:group-hover:text-orange-400" />
        </p>
      )}
    </>
  );

  if (soon) {
    return (
      <div className="relative overflow-hidden rounded-lg border border-dashed border-border bg-surface-muted/50 p-6">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
    >
      {content}
    </Link>
  );
}
