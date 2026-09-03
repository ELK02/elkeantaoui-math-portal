import type { ReactNode } from "react";

export function LessonSection({
  id,
  kicker,
  title,
  description,
  children,
  tone = "light",
}: {
  id?: string;
  kicker: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
  tone?: "light" | "muted";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-border py-16 sm:py-20 ${
        tone === "muted" ? "bg-surface-muted" : "bg-surface"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-mono text-xs font-medium text-foreground-muted">{kicker}</p>
        <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
        {description ? <div className="mt-2 max-w-xl text-foreground-muted">{description}</div> : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
