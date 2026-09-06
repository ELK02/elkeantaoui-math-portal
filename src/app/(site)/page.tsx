import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpenCheck, Clock, GraduationCap, ListChecks, Moon, ShieldCheck } from "lucide-react";
import { LEVELS } from "@/data/chapters";
import { TRONC_COMMUN_SCIENCES } from "@/data/lycee";
import { AnimatedStat } from "@/components/AnimatedStat";
import { DemoExercise } from "@/components/DemoExercise";

const LYCEE_IN_PROGRESS = [
  {
    short: "1BAC",
    label: "1ère Bac",
    description: "Toutes filières : Sc. Expérimentales, Sc. Mathématiques, Lettres & Sc. Humaines, et plus.",
  },
  {
    short: "2BAC",
    label: "2ème Bac",
    description: "Toutes filières : Sc. Physiques, SVT, Sc. Math A/B, Lettres & Sc. Humaines, et plus.",
  },
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

const COLLEGE_CHAPTERS = LEVELS.reduce(
  (n, level) => n + level.semesters.reduce((m, s) => m + s.chapters.length, 0),
  0
);

const TRONC_COMMUN_CHAPTERS = TRONC_COMMUN_SCIENCES.semesters.reduce(
  (n, s) => n + s.chapters.length,
  0
);

/** Collège + Lycée : se met à jour tout seul dès qu'un chapitre est ajouté à l'une des
 * deux sources de données (LEVELS ou TRONC_COMMUN_SCIENCES), aucune valeur codée en dur. */
const TOTAL_CHAPTERS = COLLEGE_CHAPTERS + TRONC_COMMUN_CHAPTERS;

const LYCEE_QUICK_ACCESS = [
  { short: "TC", href: "/lycee/tronc-commun/sciences" },
  { short: "1BAC", href: "/lycee" },
  { short: "2BAC", href: "/lycee" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-aurora-1 absolute left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/15 blur-[100px]" />
          <div className="animate-aurora-2 absolute right-1/4 bottom-0 h-[26rem] w-[26rem] rounded-full bg-neutral-500/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Des cours de maths <span className="text-orange-400">clairs</span>,
            illustrés et corrigés
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Par le Prof. Lahbib Elkeantaoui. Résumés de cours, leçons détaillées avec
            exemples, et exercices avec correction pour le Collège et le Lycée.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/college/3ac"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
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
            <span className="text-xs text-neutral-500">Accès rapide :</span>
            {LEVELS.map((level) => (
              <Link
                key={level.id}
                href={`/college/${level.id}`}
                className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs font-medium text-white transition-colors hover:bg-white/10"
              >
                {level.short}
              </Link>
            ))}
            <span className="mx-0.5 h-4 w-px bg-white/15" aria-hidden="true" />
            {LYCEE_QUICK_ACCESS.map((item) => (
              <Link
                key={item.short}
                href={item.href}
                className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs font-medium text-white transition-colors hover:bg-white/10"
              >
                {item.short}
              </Link>
            ))}
          </div>

          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <AnimatedStat value={TOTAL_CHAPTERS} label="Chapitres" />
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
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Cycle Lycée
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
          Tronc Commun, 1ère et 2ème Bac, toutes filières confondues.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href="/lycee/tronc-commun/sciences"
            className="group relative overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
          >
            <span className="font-mono text-4xl font-semibold text-navy-900/10 dark:text-white/10">TC</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-foreground">Tronc Commun</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              Science et Technologies : nombres, vecteurs, trigonométrie, fonctions et géométrie. Lettres &amp;
              Sciences Humaines bientôt.
            </p>
            <p className="mt-4 flex items-center gap-1.5 font-mono text-xs font-medium text-foreground-muted">
              {TRONC_COMMUN_CHAPTERS} chapitres
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-600 dark:group-hover:text-orange-400" />
            </p>
          </Link>

          {LYCEE_IN_PROGRESS.map((item) => (
            <div
              key={item.short}
              className="relative overflow-hidden rounded-lg border border-dashed border-border bg-surface-muted/50 p-6"
            >
              <span className="font-mono text-4xl font-semibold text-navy-900/10 dark:text-white/10">
                {item.short}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.description}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-orange-600 dark:text-orange-400">
                <Clock className="h-3.5 w-3.5" />
                En cours
              </p>
            </div>
          ))}
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
