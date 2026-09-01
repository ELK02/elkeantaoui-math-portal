import Link from "next/link";
import { ArrowRight, ArrowUpRight, GraduationCap, Moon, ShieldCheck } from "lucide-react";
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
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 80% 60% at 30% 20%, black, transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
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
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-100"
              >
                Commencer maintenant <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#niveaux"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Voir les niveaux
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
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

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="sr-only">Chapitres</dt>
                <dd className="font-mono text-2xl font-semibold text-white sm:text-3xl">56</dd>
                <p className="mt-1 text-xs text-navy-200 sm:text-sm">Chapitres</p>
              </div>
              <div>
                <dt className="sr-only">Niveaux</dt>
                <dd className="font-mono text-2xl font-semibold text-white sm:text-3xl">3</dd>
                <p className="mt-1 text-xs text-navy-200 sm:text-sm">Années Collège</p>
              </div>
              <div>
                <dt className="sr-only">Exercices</dt>
                <dd className="font-mono text-2xl font-semibold text-white sm:text-3xl">100%</dd>
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
