import type { ReactNode } from "react";
import type { LessonStat } from "./types";

export function LessonHero({
  kicker,
  title,
  subtitle,
  stats,
  visual,
  ctas,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  stats?: LessonStat[];
  visual?: ReactNode;
  ctas?: ReactNode;
}) {
  return (
    <section id="accueil" className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-orange-500/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-[22rem] w-[22rem] rounded-full bg-neutral-500/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 font-mono text-xs text-neutral-400">
            {kicker}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 max-w-md text-neutral-400">{subtitle}</p>
          {ctas ? <div className="mt-7 flex flex-wrap gap-3">{ctas}</div> : null}
          {stats?.length ? (
            <dl className="mt-10 flex gap-8 border-t border-white/10 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-mono text-xl font-semibold">{s.value}</dd>
                  <p className="text-xs text-neutral-500">{s.label}</p>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {visual ? <div className="hidden items-center justify-center sm:flex">{visual}</div> : null}
      </div>
    </section>
  );
}
