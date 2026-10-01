import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Clock,
  AtSign,
  GraduationCap,
  Landmark,
  ListChecks,
  Mail,
  NotebookPen,
  Search,
  Trophy,
} from "lucide-react";
import { LEVELS } from "@/data/chapters";
import { TRONC_COMMUN_SCIENCES, PREMIERE_BAC, DEUXIEME_BAC } from "@/data/lycee";
import { AnimatedStat } from "@/components/AnimatedStat";
import { ExerciceDuJour } from "@/components/ExerciceDuJour";
import { LevelCard } from "@/components/LevelCard";
import { ProgressTracker } from "@/components/ProgressTracker";
import { SearchTriggerButton } from "@/components/SearchTriggerButton";
import { Logo } from "@/components/Logo";
import { SOCIAL_LINKS } from "@/data/social";
import { FICHES } from "@/data/fiches";

export const metadata: Metadata = {
  description:
    "Cours de mathématiques Maroc pour le Collège (1AC, 2AC, 3AC) et le Lycée (Tronc Commun, 1 Bac, 2 Bac) : résumés de cours, exercices corrigés, fiches de révision et préparation à l'examen régional et national, par le Prof. Lahbib Elkeantaoui.",
};

const STEPS = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Choisissez votre niveau",
    text: "Du Collège (1AC à 3AC) au Lycée (Tronc Commun, 1 Bac, 2 Bac), classé par semestre.",
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

const RESOURCES = [
  { icon: BookOpenCheck, title: "Cours", text: "Cours structurés avec définitions, propriétés et exemples.", href: "/#niveaux" },
  { icon: ListChecks, title: "Exercices", text: "Séries d'exercices classées par chapitre.", href: "/#niveaux" },
  { icon: CheckCircle2, title: "Corrections", text: "Corrections détaillées pour comprendre les méthodes.", href: "/#niveaux" },
  { icon: NotebookPen, title: "Fiches de révision", text: "Fiches synthétiques et fiches manuscrites.", href: "/fiches" },
  { icon: Search, title: "Quiz", text: "Petits tests interactifs pour vérifier les acquis.", href: "/#exemple" },
  { icon: Trophy, title: "Examens", text: "Préparation aux examens régionaux et nationaux.", href: "/examens" },
];

const EXAM_PREP = [
  { short: "3AC", label: "Examen régional", text: "Sujets • Corrections • Séries de préparation", href: "/college/3ac/examens", soon: false },
  { short: "2BAC", label: "Examen national", text: "Sujets nationaux • Corrections détaillées • Révisions", href: "/lycee/2eme-bac", soon: true },
];

function collegeChapterCount(levelId: string) {
  const level = LEVELS.find((l) => l.id === levelId);
  return level ? level.semesters.reduce((n, s) => n + s.chapters.length, 0) : 0;
}

const TC_CHAPTERS = TRONC_COMMUN_SCIENCES.semesters.reduce((n, s) => n + s.chapters.length, 0);
const PREMIERE_BAC_CHAPTERS = PREMIERE_BAC.filieres.reduce(
  (n, f) => n + f.semesters.reduce((m, s) => m + s.chapters.length, 0),
  0
);
const DEUXIEME_BAC_CHAPTERS = DEUXIEME_BAC.filieres.reduce(
  (n, f) => n + f.semesters.reduce((m, s) => m + s.chapters.length, 0),
  0
);
const TOTAL_CHAPTERS =
  LEVELS.reduce((n, l) => n + collegeChapterCount(l.id), 0) +
  TC_CHAPTERS +
  PREMIERE_BAC_CHAPTERS +
  DEUXIEME_BAC_CHAPTERS;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: "Profdemath.com",
      url: "https://www.profdemath.com",
      description:
        "Cours de mathématiques pour le Collège et le Lycée au Maroc : résumés de cours, exercices corrigés et fiches de révision.",
      logo: "https://www.profdemath.com/logo/logo-elk.png",
    },
    {
      "@type": "Person",
      name: "Lahbib Elkeantaoui",
      jobTitle: "Professeur de mathématiques",
      url: "https://www.profdemath.com/a-propos",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <section className="relative overflow-hidden bg-neutral-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-aurora-1 absolute left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/15 blur-[100px]" />
          <div className="animate-aurora-2 absolute right-1/4 bottom-0 h-[26rem] w-[26rem] rounded-full bg-neutral-500/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Les maths deviennent <span className="text-orange-400">plus simples</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-neutral-300 sm:text-lg">
            Cours clairs • Exercices corrigés • Fiches de révision • Examens
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Retrouvez toutes les ressources nécessaires pour progresser en mathématiques, du Collège au Baccalauréat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#niveaux"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              📚 Choisir mon niveau <ArrowRight className="h-4 w-4" />
            </Link>
            <SearchTriggerButton className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5">
              🔎 Rechercher un cours
            </SearchTriggerButton>
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
            <Link href="/lycee/tronc-commun/sciences" className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs font-medium text-white transition-colors hover:bg-white/10">
              TC
            </Link>
            <Link href="/lycee/1ere-bac" className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs font-medium text-white transition-colors hover:bg-white/10">
              1BAC
            </Link>
            <Link href="/lycee/2eme-bac" className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-xs font-medium text-white transition-colors hover:bg-white/10">
              2BAC
            </Link>
          </div>

          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <AnimatedStat value={TOTAL_CHAPTERS} label="Chapitres" />
            <AnimatedStat value={6} label="Niveaux" />
            <AnimatedStat value={100} suffix="%" label="Corrigés" />
          </dl>
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

      <section id="niveaux" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Quel est ton niveau ?
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
          Choisis ton année pour accéder directement à tes chapitres, classés par semestre.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEVELS.map((level) => (
            <LevelCard
              key={level.id}
              icon={GraduationCap}
              short={level.short}
              full={level.full}
              description={level.description}
              chapterCount={collegeChapterCount(level.id)}
              href={`/college/${level.id}`}
            />
          ))}
          <LevelCard
            icon={Landmark}
            short="TC"
            full="Tronc Commun"
            description="Science et Technologies : nombres, vecteurs, trigonométrie, fonctions et géométrie."
            chapterCount={TC_CHAPTERS}
            href="/lycee/tronc-commun/sciences"
          />
          <LevelCard
            icon={Award}
            short="1BAC"
            full="Première Bac"
            description="Toutes filières : Sc. Expérimentales, Sc. Mathématiques, Sc. et Technologies, et plus."
            chapterCount={PREMIERE_BAC_CHAPTERS}
            href="/lycee/1ere-bac"
          />
          <LevelCard
            icon={Trophy}
            short="2BAC"
            full="Deuxième Bac"
            description="Toutes filières : Sc. Physiques, SVT, Sc. Math A/B, Sc. et Technologies, et plus."
            chapterCount={DEUXIEME_BAC_CHAPTERS}
            href="/lycee/2eme-bac"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <SearchTriggerButton className="group flex w-full items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-left shadow-sm transition-colors hover:border-navy-400 dark:hover:border-navy-500">
          <Search className="h-5 w-5 shrink-0 text-foreground-muted" />
          <span className="flex-1 text-sm text-foreground-muted">
            🔎 Rechercher un cours, un exercice ou un chapitre...
          </span>
          <span className="hidden shrink-0 rounded border border-border px-1.5 py-0.5 font-mono text-[11px] text-foreground-muted sm:inline">
            Ctrl K
          </span>
        </SearchTriggerButton>
      </section>

      <section id="ressources" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Tout ce qu&apos;il faut pour progresser
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-navy-700 dark:text-orange-400">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{r.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          ✍️ Fiches manuscrites
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground-muted sm:text-base">
          Révise rapidement avec des fiches claires, colorées et faciles à mémoriser.
        </p>

        {FICHES.length === 0 ? (
          <Link
            href="/fiches"
            className="mt-6 flex flex-col items-center gap-2 rounded-lg border border-dashed border-border bg-surface-muted/50 px-6 py-10 text-center transition-colors hover:border-navy-400 dark:hover:border-navy-500"
          >
            <NotebookPen className="h-6 w-6 text-foreground-muted" />
            <p className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-orange-600 dark:text-orange-400">
              <Clock className="h-3.5 w-3.5" />
              Bientôt disponible
            </p>
          </Link>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {FICHES.slice(0, 3).map((fiche) => (
              <Link key={fiche.slug} href="/fiches" className="overflow-hidden rounded-lg border border-border bg-surface">
                <div className="aspect-[3/4] w-full bg-surface-muted" />
                <p className="p-3 text-sm font-medium text-foreground">{fiche.chapterTitle}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          🏆 Prépare ton examen
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {EXAM_PREP.map((card) =>
            card.soon ? (
              <div key={card.short} className="rounded-lg border border-dashed border-border bg-surface-muted/50 p-6">
                <span className="font-mono text-3xl font-semibold text-navy-900/10 dark:text-white/10">{card.short}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.text}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-orange-600 dark:text-orange-400">
                  <Clock className="h-3.5 w-3.5" />
                  Bientôt disponible
                </p>
              </div>
            ) : (
              <Link
                key={card.short}
                href={card.href}
                className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-navy-400 dark:hover:border-navy-500"
              >
                <span className="font-mono text-3xl font-semibold text-navy-900/10 dark:text-white/10">{card.short}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.text}</p>
              </Link>
            )
          )}
        </div>
        <Link
          href="/examens"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-800 dark:bg-white dark:text-navy-900"
        >
          🎯 Commencer mes révisions
        </Link>
      </section>

      <section id="exemple" className="scroll-mt-16 border-y border-border bg-surface-muted/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            🧠 Exercice du jour
          </h2>
          <p className="mt-2 text-sm text-foreground-muted sm:text-base">
            Une question par jour pour garder le rythme, avec correction immédiate.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-xl">
          <ExerciceDuJour />
        </div>
      </section>

      <ProgressTracker />

      {SOCIAL_LINKS.whatsapp && (
        <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            📱 Reçois les nouveaux cours et exercices
          </h2>
          <p className="mt-2 text-sm text-foreground-muted sm:text-base">
            Rejoins le canal WhatsApp Profdemath et reçois les nouvelles ressources pédagogiques.
          </p>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
          >
            💬 Rejoindre le canal WhatsApp
          </a>
        </section>
      )}

      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-muted">👨‍🏫 Votre professeur</p>
        <div className="mt-4 flex justify-center">
          <Logo size="lg" withName={false} />
        </div>
        <h2 className="mt-4 font-display text-xl font-semibold text-foreground">Professeur Lahbib Elkeantaoui</h2>
        <p className="mt-2 text-sm text-foreground-muted">Professeur de mathématiques.</p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-foreground-muted">
          Cours, exercices et ressources pédagogiques pour accompagner les élèves du Collège au Lycée.
        </p>
        <p className="mt-3 font-mono text-xs text-foreground-muted">
          Prof : ELK.H — www.profdemath.com
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-navy-400 dark:hover:border-navy-500"
          >
            <Mail className="h-4 w-4" />
            Me contacter
          </Link>
          {SOCIAL_LINKS.instagram && (
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-navy-400 dark:hover:border-navy-500"
            >
              <AtSign className="h-4 w-4" />
              Instagram
            </a>
          )}
        </div>
      </section>
    </>
  );
}
