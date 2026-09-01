import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpenCheck, GraduationCap, ListChecks, Moon, ShieldCheck } from "lucide-react";
import { LEVELS } from "@/data/chapters";
import { AnimatedStat } from "@/components/AnimatedStat";
import { DemoExercise } from "@/components/DemoExercise";

const LYCEE_PREVIEW = [
  "Tronc Commun",
  "1ère Bac",
  "2ème Bac",
];

const STEPS = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Choisissez votre année",
    text: "1ère, 2ème ou 3ème Année Collège, classé par semestre.",
  },
  {
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Suivez le cours",
    text: "Résumé, définitions et exemples résolus pas à pas pour chaque chapitre.",
  },
  {
    icon: <ListChecks className="h-5 w-5" />,
    title: "Entraînez-vous",
    text: "Exercices avec correction détaillée, révélée en un clic quand vous êtes prêt.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-aurora-1 absolute left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="animate-aurora-2 absolute right-1/4 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-400/25 blur-[100px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-green-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="font-mono text-xs font-medium text-green-300">Contenu mis à jour pour 2025/2026</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Des cours de maths <span className="text-orange-400">clairs</span>,
            illustrés et corrigés
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            Par le Prof. Lahbib Elkeantaoui. Résumés de cours, leçons détaillées avec
            exemples, et exercices avec correction pour les 3 années du Collège.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/college/3ac"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-100"
            >
              Commencer maintenant <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#exemple"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Voir un exemple
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-navy-300">Accès rapide :</span>
            {LEVELS.map((level) => (
              <Link
                key={level.id}
                href={`/college/${level.id}`}
                className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs font-medium text-white transition-colors hover:bg-white/10"
              >
                {level.short}
              </Link>
            ))}
          </div>

          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <AnimatedStat value={56} label="Chapitres" />
            <AnimatedStat value={3} label="Années Collège" />
            <AnimatedStat value={100} suffix="%" label="Corrigés" />
          </dl>
        </div>
      </section>

      <section id="exemple" className="scroll-mt-16 border-b border-border bg-surface-muted/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Essayez tout de suite
          </h2>
          <p className="mt-2 text-sm text-foreground-muted sm:text-base">
            Un aperçu du type d&apos;exercice que vous retrouverez dans chaque leçon.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <DemoExercise />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Comment ça marche
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative rounded-lg border border-border bg-surface p-5">
              <span className="font-mono text-xs text-foreground-muted">0{i + 1}</span>
              <div className="mt-3 flex h-9 w-9 items-center justify-center rounded-md border border-border text-navy-700 dark:text-orange-400">
                {step.icon}
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Feature
            icon={<GraduationCap className="h-5 w-5" />}
            title="Résumé + cours + exercices"
            text="Chaque leçon suit la même structure en 3 temps : révision rapide, cours détaillé, puis exercices corrigés."
          />
          <Feature
            icon={<Moon className="h-5 w-5" />}
            title="Mode jour / nuit"
            text="Une lecture confortable à toute heure, sur PC, tablette ou smartphone."
          />
          <Feature
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Contenu vérifié"
            text="Chaque leçon et chaque correction d'exercice est relue pour garantir des maths exactes."
          />
        </div>
      </section>

      <section id="niveaux" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Cycle Collège
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
          Choisissez votre année pour accéder aux chapitres classés par semestre.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {LEVELS.map((level) => {
            const total = level.semesters.reduce((n, s) => n + s.chapters.length, 0);
            return (
              <Link
                key={level.id}
                href={`/college/${level.id}`}
                className="group relative overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
              >
                <span className="font-mono text-4xl font-semibold text-navy-900/10 dark:text-white/10">
                  {level.short}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {level.full}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {level.description}
                </p>
                <p className="mt-4 flex items-center gap-1.5 font-mono text-xs font-medium text-foreground-muted">
                  {total} chapitres
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-600 dark:group-hover:text-orange-400" />
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-dashed border-border bg-surface-muted p-8 sm:p-10">
          <span className="rounded border border-orange-600/20 bg-orange-100 px-2 py-1 font-mono text-xs font-medium uppercase tracking-wide text-orange-700 dark:border-orange-400/20 dark:bg-orange-950/40 dark:text-orange-400">
            Bientôt disponible
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
            Cycle Lycée
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
            Tronc Commun, 1ère et 2ème Bac arrivent prochainement, toutes filières
            confondues.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {LYCEE_PREVIEW.map((label) => (
              <span
                key={label}
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground-muted"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-green-700 dark:text-green-500">
        {icon}
      </div>
      <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{text}</p>
    </div>
  );
}
