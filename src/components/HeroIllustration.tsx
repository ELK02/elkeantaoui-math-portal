import { Check, Sigma } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
      {/* Glow */}
      <div className="absolute inset-6 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Main notebook card */}
      <div className="absolute inset-x-4 top-6 bottom-16 rotate-[-3deg] rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm">
        <div
          className="absolute inset-0 rounded-3xl opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative flex h-full flex-col">
          <span className="w-fit rounded-full bg-orange-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-300">
            Théorème de Pythagore
          </span>

          <div className="mt-6 flex flex-1 items-center justify-center">
            <svg viewBox="0 0 200 160" className="h-32 w-40 sm:h-40 sm:w-52">
              <polyline
                points="20,140 20,30 160,140 20,140"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <rect x="20" y="120" width="20" height="20" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="8" y="90" fill="#fff" fontSize="14" fontWeight="700">a</text>
              <text x="90" y="156" fill="#fff" fontSize="14" fontWeight="700">b</text>
              <text x="80" y="78" fill="#fff" fontSize="14" fontWeight="700">c</text>
            </svg>
          </div>

          <p className="font-display text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            a<sup className="text-orange-400">2</sup> + b<sup className="text-orange-400">2</sup> = c
            <sup className="text-orange-400">2</sup>
          </p>
        </div>
      </div>

      {/* Floating "corrigé" badge */}
      <div className="absolute -left-2 bottom-16 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-6">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
          <Check className="h-4 w-4" strokeWidth={3} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-bold text-navy-900">Exercice corrigé</p>
          <p className="text-[11px] text-foreground-muted">Étape par étape</p>
        </div>
      </div>

      {/* Floating pi badge */}
      <div className="absolute -right-2 top-2 flex h-16 w-16 rotate-6 items-center justify-center rounded-2xl bg-orange-500 shadow-xl sm:right-2">
        <Sigma className="h-7 w-7 text-white" strokeWidth={2.5} />
      </div>

      {/* Small dot accents */}
      <div className="absolute bottom-4 right-8 h-3 w-3 rounded-full bg-green-400" />
      <div className="absolute right-16 top-1/2 h-2 w-2 rounded-full bg-white/50" />
    </div>
  );
}
