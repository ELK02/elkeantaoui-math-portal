import Link from "next/link";
import { ArrowRight, GraduationCap, Moon, ShieldCheck, Sparkles } from "lucide-react";
import { LEVELS } from "@/data/chapters";
import { HeroIllustration } from "@/components/HeroIllustration";

const LYCEE_PREVIEW = [
  "Tronc Commun",
  "1ère Bac",
  "2ème Bac",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-orange-300 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Mathématiques · Cycle Collège
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Des cours de maths <span className="text-orange-400">clairs</span>,
              illustrés et corrigés
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
              Par le Prof. Lahbib Elkeantaoui. Résumés de cours, leçons détaillées avec
              exemples, et exercices avec correction pour les 3 années du Collège.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/college/3ac"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-950/30 transition-colors hover:bg-orange-700"
              >
                Commencer maintenant <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#niveaux"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Voir les niveaux
              </Link>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="sr-only">Chapitres</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">56</dd>
                <p className="mt-1 text-xs text-navy-200 sm:text-sm">Chapitres</p>
              </div>
              <div>
                <dt className="sr-only">Niveaux</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">3</dd>
                <p className="mt-1 text-xs text-navy-200 sm:text-sm">Années Collège</p>
              </div>
              <div>
                <dt className="sr-only">Exercices</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">100%</dd>
                <p className="mt-1 text-xs text-navy-200 sm:text-sm">Corrigés</p>
              </div>
            </dl>
          </div>

          <HeroIllustration />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
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
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Cycle Collège
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
          Choisissez votre année pour accéder aux chapitres classés par semestre.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {LEVELS.map((level) => {
            const total = level.semesters.reduce((n, s) => n + s.chapters.length, 0);
            return (
              <Link
                key={level.id}
                href={`/college/${level.id}`}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-display text-4xl font-extrabold text-navy-900/10 dark:text-white/10">
                  {level.short}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {level.full}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {level.description}
                </p>
                <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-500">
                  {total} chapitres
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-dashed border-border bg-surface-muted p-8 sm:p-10">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700">
            Bientôt disponible
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
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
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-foreground-muted"
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
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:text-green-500">
        {icon}
      </div>
      <h3 className="mt-3 font-display text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{text}</p>
    </div>
  );
}
