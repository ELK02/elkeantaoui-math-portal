import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "La Symétrie Centrale · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur la symétrie centrale (1ère année collège) : symétrique d'un point, propriétés de conservation, symétriques des figures usuelles, centre de symétrie, et 6 exercices corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 3",
  heroTitle: "La Symétrie Centrale",
  heroSubtitle:
    "Faire pivoter une figure d'un demi-tour autour d'un point. Ce qui bouge, ce qui ne change jamais.",
  footerNote: "La symétrie centrale · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "point", label: "Point" },
    { id: "proprietes", label: "Propriétés" },
    { id: "figures", label: "Figures" },
    { id: "centre", label: "Centre" },
    { id: "exercices", label: "Exercices" },
  ],
};

function FigureBox({ children, caption }: { children: ReactNode; caption?: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4">
      {children}
      {caption ? <p className="mt-2 text-center text-xs text-foreground-muted">{caption}</p> : null}
    </div>
  );
}

function PropNote({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3 text-xs text-foreground">{children}</div>;
}

function ApplicationCard({ statement, figure, solution }: { statement: ReactNode; figure: ReactNode; solution: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl border border-border bg-surface-muted p-4 md:p-5">
      <p className="mb-3 text-xs font-bold tracking-wide text-foreground-muted uppercase">✍️ Application</p>
      <p className="mb-4 text-sm text-foreground">{statement}</p>
      {figure}
      <div className="mt-4 space-y-1.5 border-t border-dashed border-border pt-4 text-sm text-foreground">{solution}</div>
    </div>
  );
}

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      {/* Shared arrow marker for "symétrie de centre ..." diagrams */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <marker id="arrow-gray-sym" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="fill-neutral-400 dark:fill-neutral-500" />
          </marker>
        </defs>
      </svg>

      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "4", label: "parties de cours" },
          { value: "6", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#point"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Découvrir le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              S&apos;entraîner
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 130" className="h-auto w-56">
            <line x1="30" y1="100" x2="190" y2="30" stroke="white" strokeOpacity="0.6" strokeWidth="2" />
            <circle cx="30" cy="100" r="5" fill="white" />
            <circle cx="110" cy="65" r="5" fill="#fb923c" />
            <circle cx="190" cy="30" r="5" fill="white" />
            <text x="16" y="122" fontSize="16" fill="white" fontWeight="bold">A</text>
            <text x="98" y="55" fontSize="16" fill="#fb923c" fontWeight="bold">O</text>
            <text x="196" y="20" fontSize="16" fill="white" fontWeight="bold">A&apos;</text>
          </svg>
        }
      />

      {/* ===================== I. LE SYMETRIQUE D'UN POINT ===================== */}
      <LessonSection
        id="point"
        kicker="01 · La notion de base"
        title="Le symétrique d'un point"
        tone="light"
        description="La brique de départ de toute la symétrie centrale."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <p className="mb-3 text-xs font-bold tracking-wide text-foreground-muted uppercase">1. Exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Soient <strong>A</strong> et <strong>O</strong> deux points distincts. Traçons <strong>A&apos;</strong> tel que{" "}
              <strong>O</strong> soit le milieu du segment [AA&apos;].
            </p>
            <svg viewBox="0 0 400 220" className="mx-auto h-auto w-full max-w-sm">
              <line x1="50" y1="180" x2="350" y2="40" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" />
              <line x1="121" y1="138" x2="129" y2="152" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
              <line x1="271" y1="68" x2="279" y2="82" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
              <circle cx="50" cy="180" r="5.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="200" cy="110" r="5.5" className="fill-slate-800 dark:fill-slate-200" />
              <circle cx="350" cy="40" r="5.5" className="fill-rose-600 dark:fill-rose-400" />
              <text x="32" y="205" fontSize="17" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="207" y="135" fontSize="17" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
              <text x="357" y="28" fontSize="17" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
            </svg>
            <p className="mt-4 text-sm text-foreground-muted">
              On appelle <strong>A&apos;</strong> :{" "}
              <span className="font-semibold text-foreground">le symétrique du point A par rapport au point O</span>.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <p className="mb-3 text-xs font-bold tracking-wide text-rose-500 uppercase">2. Contre-exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              On considère la figure suivante, où <strong>O</strong> n&apos;est pas le milieu de [EE&apos;] :
            </p>
            <svg viewBox="0 0 400 220" className="mx-auto h-auto w-full max-w-sm">
              <line x1="50" y1="180" x2="350" y2="40" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" />
              <circle cx="200" cy="110" r="4" className="fill-none stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="3,3" />
              <text x="207" y="106" fontSize="11" className="fill-slate-400 dark:fill-slate-500 italic">milieu de [EE&apos;]</text>
              <circle cx="50" cy="180" r="5.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="140" cy="138" r="5.5" className="fill-red-600 dark:fill-red-400" />
              <circle cx="350" cy="40" r="5.5" className="fill-rose-600 dark:fill-rose-400" />
              <text x="32" y="205" fontSize="17" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
              <text x="128" y="163" fontSize="17" className="fill-red-600 dark:fill-red-400 font-bold">O</text>
              <text x="357" y="28" fontSize="17" className="fill-slate-700 dark:fill-slate-200 font-bold">E&apos;</text>
            </svg>
            <p className="mt-4 text-sm text-foreground-muted">
              <strong>E&apos;</strong> n&apos;est <strong>pas</strong> le symétrique de E par rapport à O, car d&apos;après la figure, O n&apos;est pas le milieu de [EE&apos;].
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
          <p className="mb-1 text-xs font-bold text-rose-600 uppercase">3. Définition</p>
          <p className="text-foreground">
            Soient <strong>A</strong> et <strong>O</strong> deux points distincts. Dire que le point <strong>A&apos;</strong> est le{" "}
            <strong>symétrique du point A par rapport au point O</strong> signifie que <strong>O est le milieu du segment [AA&apos;]</strong>.
          </p>
        </div>

        <div className="mt-4">
          <Callout variant="warning" title="À retenir">
            <div className="space-y-1.5">
              <p><strong>Remarque 1 :</strong> O est appelé <strong>centre de symétrie</strong>.</p>
              <p>
                <strong>Remarque 2 :</strong> si A&apos; est le symétrique de A par rapport à O, alors A est aussi le symétrique de A&apos; par
                rapport à O, on dit que A et A&apos; sont <strong>symétriques par rapport à O</strong>.
              </p>
            </div>
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== II. PROPRIETES ===================== */}
      <LessonSection
        id="proprietes"
        kicker="02 · Ce qui ne change jamais"
        title="Propriétés"
        tone="muted"
        description="Trois choses que la symétrie centrale conserve toujours."
      >
        <div className="space-y-8">
          {/* 1. Distance */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 text-xl font-bold text-foreground">1. Conservation de la distance</h3>
            <p className="mb-4 text-sm text-foreground-muted">
              Si A&apos; et B&apos; sont les symétriques respectifs de A et B par rapport à un point E, alors A&apos;B&apos; = AB.
            </p>
            <svg viewBox="0 0 520 140" className="mx-auto mb-4 h-auto w-full max-w-lg">
              <line x1="40" y1="70" x2="180" y2="70" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" />
              <circle cx="40" cy="70" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="180" cy="70" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <text x="32" y="52" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="184" y="52" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="55" y="95" fontSize="13" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">AB = 5 cm</text>
              <path d="M 215,70 L 300,70" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" markerEnd="url(#arrow-gray-sym)" />
              <text x="212" y="55" fontSize="11" className="fill-slate-500 dark:fill-slate-400">symétrie de centre E</text>
              <line x1="340" y1="70" x2="480" y2="70" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="3" />
              <circle cx="340" cy="70" r="5" className="fill-rose-600 dark:fill-rose-400" />
              <circle cx="480" cy="70" r="5" className="fill-rose-600 dark:fill-rose-400" />
              <text x="330" y="52" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
              <text x="485" y="52" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
              <text x="362" y="95" fontSize="13" className="fill-rose-700 dark:fill-rose-300 font-semibold">A&apos;B&apos; = 5 cm</text>
            </svg>
            <div className="mb-5 rounded-xl border border-border bg-surface-muted p-4">
              <p className="text-center text-sm font-medium text-foreground">
                Si A&apos; et B&apos; sont les symétriques respectifs des points A et B par rapport à un point, alors : <strong>AB = A&apos;B&apos;</strong>.
              </p>
            </div>

            <ApplicationCard
              statement={
                <>
                  Soit ABC un triangle tel que BC = 5 cm. E et F sont les symétriques respectifs des points B et C par rapport à A.
                  1) Tracer une figure. 2) Calculer EF en justifiant la réponse.
                </>
              }
              figure={
                <svg viewBox="0 0 440 300" className="mx-auto h-auto w-full max-w-sm">
                  <line x1="90" y1="130" x2="330" y2="250" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                  <line x1="300" y1="110" x2="120" y2="270" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                  <polygon points="210,190 90,130 300,110" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                  <line x1="330" y1="250" x2="120" y2="270" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
                  <circle cx="210" cy="190" r="5" className="fill-slate-800 dark:fill-slate-200" />
                  <circle cx="90" cy="130" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="300" cy="110" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="330" cy="250" r="5" className="fill-rose-600 dark:fill-rose-400" />
                  <circle cx="120" cy="270" r="5" className="fill-rose-600 dark:fill-rose-400" />
                  <text x="217" y="182" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                  <text x="65" y="122" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                  <text x="308" y="102" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                  <text x="338" y="248" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
                  <text x="88" y="288" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">F</text>
                  <text x="130" y="122" fontSize="12" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">BC = 5 cm</text>
                  <text x="185" y="272" fontSize="12" className="fill-rose-700 dark:fill-rose-300 font-semibold">EF = 5 cm</text>
                </svg>
              }
              solution={
                <>
                  <p><strong>Solution :</strong> le symétrique de B par rapport à A est E, et le symétrique de C par rapport à A est F.</p>
                  <p>Donc : EF = BC.</p>
                  <p>Et puisque BC = 5 cm, alors : <strong>EF = 5 cm</strong>.</p>
                </>
              }
            />
          </div>

          {/* 2. Alignement */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 text-xl font-bold text-foreground">2. Conservation de l&apos;alignement des points</h3>
            <p className="mb-4 text-sm text-foreground-muted">Les symétriques de points alignés sont eux-mêmes alignés.</p>
            <svg viewBox="0 0 560 130" className="mx-auto mb-4 h-auto w-full max-w-lg">
              <line x1="20" y1="65" x2="200" y2="65" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" />
              <circle cx="20" cy="65" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="80" cy="65" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="140" cy="65" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="200" cy="65" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <text x="13" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="73" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="133" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
              <text x="193" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
              <path d="M 235,65 L 320,65" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" markerEnd="url(#arrow-gray-sym)" />
              <text x="233" y="50" fontSize="11" className="fill-slate-500 dark:fill-slate-400">symétrie de centre E</text>
              <line x1="360" y1="65" x2="540" y2="65" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="3" />
              <circle cx="360" cy="65" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
              <circle cx="420" cy="65" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
              <circle cx="480" cy="65" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
              <circle cx="540" cy="65" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
              <text x="353" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
              <text x="413" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
              <text x="473" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">C&apos;</text>
              <text x="533" y="50" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">D&apos;</text>
              <text x="20" y="100" fontSize="12" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">A, B, C, D alignés</text>
              <text x="360" y="100" fontSize="12" className="fill-rose-700 dark:fill-rose-300 font-semibold">A&apos;, B&apos;, C&apos;, D&apos; alignés</text>
            </svg>
            <div className="rounded-xl border border-border bg-surface-muted p-4">
              <p className="text-center text-sm font-medium text-foreground">
                Les symétriques de points alignés, par rapport à un point, sont aussi des points alignés.
              </p>
            </div>
          </div>

          {/* 3. Angles */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 text-xl font-bold text-foreground">3. Conservation des mesures d&apos;angles</h3>
            <p className="mb-4 text-sm text-foreground-muted">
              Si A&apos;, O&apos; et B&apos; sont les symétriques respectifs de A, O et B par rapport à un point, alors A&apos;Ô&apos;B&apos; = AÔB.
            </p>
            <svg viewBox="0 0 560 150" className="mx-auto mb-4 h-auto w-full max-w-lg">
              <g className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3">
                <line x1="70" y1="110" x2="25" y2="35" />
                <line x1="70" y1="110" x2="165" y2="75" />
              </g>
              <path d="M 58,90 A 25 25 0 0 1 90,95" className="stroke-indigo-400 dark:stroke-indigo-300" fill="none" strokeWidth="2" />
              <circle cx="70" cy="110" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="52" y="131" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
              <text x="6" y="30" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="170" y="70" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="58" y="82" fontSize="12" className="fill-indigo-700 dark:fill-indigo-300 font-bold">60°</text>
              <path d="M 205,90 L 290,90" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" markerEnd="url(#arrow-gray-sym)" />
              <text x="203" y="75" fontSize="11" className="fill-slate-500 dark:fill-slate-400">symétrie de centre E</text>
              <g className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="3">
                <line x1="400" y1="110" x2="345" y2="35" />
                <line x1="400" y1="110" x2="485" y2="75" />
              </g>
              <path d="M 388,90 A 25 25 0 0 1 420,95" className="stroke-rose-400 dark:stroke-rose-300" fill="none" strokeWidth="2" />
              <circle cx="400" cy="110" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="378" y="131" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O&apos;</text>
              <text x="335" y="30" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
              <text x="490" y="70" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
              <text x="388" y="82" fontSize="12" className="fill-rose-700 dark:fill-rose-300 font-bold">60°</text>
            </svg>
            <div className="mb-5 rounded-xl border border-border bg-surface-muted p-4">
              <p className="text-center text-sm font-medium text-foreground">
                Si A&apos;, O&apos; et B&apos; sont les symétriques respectifs des points A, O et B par rapport à un point, alors : <strong>AÔB = A&apos;Ô&apos;B&apos;</strong>.
              </p>
            </div>

            <ApplicationCard
              statement={
                <>
                  Soit ABC un triangle rectangle en A, et O un point. A&apos;, B&apos; et C&apos; sont les symétriques respectifs de A, B et C par rapport à O.
                  1) Tracer une figure. 2) Montrer que le triangle A&apos;B&apos;C&apos; est rectangle en A&apos;.
                </>
              }
              figure={
                <svg viewBox="0 0 440 340" className="mx-auto h-auto w-full max-w-sm">
                  <line x1="60" y1="230" x2="400" y2="150" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                  <line x1="150" y1="230" x2="310" y2="150" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                  <line x1="150" y1="80" x2="310" y2="300" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                  <polygon points="150,230 60,230 150,80" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                  <polygon points="310,150 400,150 310,300" className="fill-rose-50 stroke-rose-600 dark:fill-rose-950/20 dark:stroke-rose-400" strokeWidth="2.5" />
                  <path d="M135,230 L135,215 L150,215" className="stroke-slate-500 dark:stroke-slate-400" fill="none" strokeWidth="1.5" />
                  <path d="M325,150 L325,165 L310,165" className="stroke-slate-500 dark:stroke-slate-400" fill="none" strokeWidth="1.5" />
                  <circle cx="230" cy="190" r="5" className="fill-slate-800 dark:fill-slate-200" />
                  <circle cx="60" cy="230" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="150" cy="230" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="150" cy="80" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="310" cy="150" r="5" className="fill-rose-600 dark:fill-rose-400" />
                  <circle cx="400" cy="150" r="5" className="fill-rose-600 dark:fill-rose-400" />
                  <circle cx="310" cy="300" r="5" className="fill-rose-600 dark:fill-rose-400" />
                  <text x="238" y="182" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
                  <text x="35" y="250" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                  <text x="128" y="253" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                  <text x="128" y="70" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                  <text x="316" y="140" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
                  <text x="406" y="140" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
                  <text x="316" y="318" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C&apos;</text>
                </svg>
              }
              solution={
                <>
                  <p><strong>Solution :</strong> B&apos;, A&apos; et C&apos; sont les symétriques respectifs de B, A et C par rapport à O.</p>
                  <p>Donc : B&apos;Â&apos;C&apos; = BÂC.</p>
                  <p>Or BÂC est un angle droit, donc B&apos;Â&apos;C&apos; est aussi un angle droit.</p>
                  <p>D&apos;où : <strong>le triangle A&apos;B&apos;C&apos; est rectangle en A&apos;</strong>.</p>
                </>
              }
            />
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. SYMETRIQUES DE FIGURES ===================== */}
      <LessonSection
        id="figures"
        kicker="03 · Figures usuelles"
        title="Les symétriques de quelques figures"
        tone="light"
        description="Droite, segment, angle et cercle : ce que devient chacun par symétrie centrale."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Droite */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">1. Le symétrique d&apos;une droite</h3>
            <svg viewBox="0 0 380 320" className="mx-auto h-auto w-full max-w-xs">
              <text x="55" y="18" fontSize="12" className="fill-slate-500 dark:fill-slate-400 italic">Cas 1 : O ∉ (D)</text>
              <line x1="20" y1="78" x2="360" y2="112" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
              <line x1="20" y1="248" x2="360" y2="282" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
              <line x1="40" y1="80" x2="340" y2="280" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="340" y1="110" x2="40" y2="250" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="190" cy="180" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="198" y="176" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
              <text x="325" y="103" fontSize="15" className="fill-indigo-700 dark:fill-indigo-300 font-bold">(D)</text>
              <text x="22" y="268" fontSize="15" className="fill-rose-700 dark:fill-rose-300 font-bold">(D&apos;)</text>
            </svg>
            <p className="mb-3 text-center text-xs text-foreground-muted">strictement parallèle à (D)</p>
            <svg viewBox="0 0 380 110" className="mx-auto h-auto w-full max-w-xs">
              <text x="55" y="14" fontSize="12" className="fill-slate-500 dark:fill-slate-400 italic">Cas 2 : O ∈ (D)</text>
              <line x1="20" y1="60" x2="360" y2="60" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" />
              <line x1="20" y1="64" x2="360" y2="64" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.85" />
              <circle cx="190" cy="60" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="198" y="82" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
              <text x="255" y="48" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">(D) = (D&apos;)</text>
            </svg>
            <p className="mb-4 text-center text-xs text-foreground-muted">(D) et (D&apos;) sont confondues</p>
            <div className="space-y-2">
              <PropNote><strong>Propriété 1 :</strong> si O ∉ (D), le symétrique de (D) est la droite (D&apos;) strictement parallèle à (D).</PropNote>
              <PropNote><strong>Propriété 2 :</strong> si O ∈ (D), le symétrique de (D) est la droite (D) elle-même.</PropNote>
            </div>
          </div>

          {/* Segment */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">2. Le symétrique d&apos;un segment</h3>
            <svg viewBox="0 0 430 290" className="mx-auto h-auto w-full max-w-xs">
              <line x1="60" y1="80" x2="180" y2="60" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="3" />
              <line x1="400" y1="240" x2="280" y2="260" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="3" />
              <line x1="60" y1="80" x2="400" y2="240" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="180" y1="60" x2="280" y2="260" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="60" cy="80" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="180" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="230" cy="160" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <circle cx="400" cy="240" r="5" className="fill-rose-600 dark:fill-rose-400" />
              <circle cx="280" cy="260" r="5" className="fill-rose-600 dark:fill-rose-400" />
              <text x="34" y="76" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="188" y="50" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="238" y="155" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
              <text x="406" y="232" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
              <text x="252" y="280" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
            </svg>
            <div className="mt-4">
              <PropNote><strong>Propriété 3 :</strong> le symétrique d&apos;un segment par rapport à un point est un segment qui lui est isométrique (égal).</PropNote>
            </div>
          </div>

          {/* Angle */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">3. Le symétrique d&apos;un angle</h3>
            <svg viewBox="0 0 450 260" className="mx-auto h-auto w-full max-w-xs">
              <line x1="90" y1="200" x2="40" y2="120" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
              <line x1="90" y1="200" x2="200" y2="170" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
              <line x1="370" y1="80" x2="420" y2="160" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
              <line x1="370" y1="80" x2="260" y2="110" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
              <line x1="90" y1="200" x2="370" y2="80" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="90" cy="200" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="40" cy="120" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="200" cy="170" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="230" cy="140" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <circle cx="370" cy="80" r="5" className="fill-rose-600 dark:fill-rose-400" />
              <circle cx="420" cy="160" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
              <circle cx="260" cy="110" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
              <text x="96" y="222" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">P</text>
              <text x="18" y="112" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="206" y="166" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="238" y="132" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
              <text x="375" y="72" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">P&apos;</text>
              <text x="426" y="158" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
              <text x="228" y="103" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
            </svg>
            <div className="mt-4">
              <PropNote><strong>Propriété 4 :</strong> le symétrique d&apos;un angle par rapport à un point est un angle qui lui est isométrique (égal).</PropNote>
            </div>
          </div>

          {/* Cercle */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <h3 className="mb-3 text-lg font-bold text-foreground">4. Le symétrique d&apos;un cercle</h3>
            <svg viewBox="0 0 500 320" className="mx-auto h-auto w-full max-w-xs">
              <circle cx="110" cy="140" r="70" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
              <circle cx="410" cy="220" r="70" className="fill-rose-50 stroke-rose-600 dark:fill-rose-950/20 dark:stroke-rose-400" strokeWidth="2.5" />
              <line x1="110" y1="140" x2="410" y2="220" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
              <circle cx="110" cy="140" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="260" cy="180" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <circle cx="410" cy="220" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
              <text x="93" y="128" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="267" y="174" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
              <text x="418" y="210" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
              <text x="76" y="66" fontSize="13" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">(ζ)</text>
              <text x="443" y="150" fontSize="13" className="fill-rose-700 dark:fill-rose-300 font-semibold">(ζ&apos;)</text>
            </svg>
            <div className="mt-4">
              <PropNote><strong>Propriété 5 :</strong> le symétrique d&apos;un cercle de centre A et de rayon r par rapport à un point E est le cercle de centre A&apos; (symétrique de A) et de même rayon r.</PropNote>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Callout variant="warning" title="Remarque">
            <p>Pour tracer le symétrique d&apos;un cercle par rapport à un point, il suffit de tracer le symétrique du centre de ce cercle et de garder le même rayon.</p>
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== IV. CENTRE DE SYMETRIE ===================== */}
      <LessonSection
        id="centre"
        kicker="04 · Figure invariante"
        title="Le centre de symétrie d&apos;une figure"
        tone="muted"
        description="Quand une figure est sa propre image par la symétrie."
      >
        <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
          <p className="mb-1 text-xs font-bold text-rose-600 uppercase">1. Définition</p>
          <p className="text-foreground">
            Soient (F) une figure et O un point. On appelle O le <strong>centre de symétrie de (F)</strong> lorsque le symétrique de (F)
            par rapport à O est (F) elle-même.
          </p>
        </div>

        <p className="mb-4 font-mono text-xs text-foreground-muted uppercase">2. Exemples</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5 text-center">
            <svg viewBox="0 0 160 60" className="mx-auto mb-3 h-auto w-full max-w-[160px]">
              <line x1="15" y1="30" x2="145" y2="30" className="stroke-sky-600 dark:stroke-sky-400" strokeWidth="3" />
              <circle cx="80" cy="30" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="86" y="24" fontSize="13" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
            </svg>
            <p className="text-sm text-foreground-muted">
              <strong>Une droite :</strong> son centre de symétrie est <span className="font-semibold text-foreground">n&apos;importe quel point qui lui appartient</span>.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 text-center">
            <svg viewBox="0 0 160 60" className="mx-auto mb-3 h-auto w-full max-w-[160px]">
              <line x1="25" y1="30" x2="135" y2="30" className="stroke-sky-600 dark:stroke-sky-400" strokeWidth="3" />
              <circle cx="25" cy="30" r="4" className="fill-sky-600 dark:fill-sky-400" />
              <circle cx="135" cy="30" r="4" className="fill-sky-600 dark:fill-sky-400" />
              <circle cx="80" cy="30" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="86" y="24" fontSize="13" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
            </svg>
            <p className="text-sm text-foreground-muted"><strong>Un segment :</strong> son centre de symétrie est <span className="font-semibold text-foreground">son milieu</span>.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 text-center">
            <svg viewBox="0 0 160 100" className="mx-auto mb-3 h-auto w-full max-w-[160px]">
              <circle cx="80" cy="50" r="35" className="fill-none stroke-sky-600 dark:stroke-sky-400" strokeWidth="3" />
              <circle cx="80" cy="50" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="86" y="44" fontSize="13" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
            </svg>
            <p className="text-sm text-foreground-muted"><strong>Un cercle :</strong> son centre de symétrie est <span className="font-semibold text-foreground">son centre</span>.</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="6 exercices corrigés"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la symétrie centrale.">
          <ExerciseCard
            id="1"
            index={1}
            title="ABC un triangle et I milieu de [BC]"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                <li>Construis M le symétrique de A par rapport à I.</li>
                <li>Quel est le symétrique de B par rapport à I ?</li>
                <li>Compare les distances BM et AC.</li>
                <li>Montre que BÂI = IM̂C.</li>
                <li>Démontre que (AB) // (MC).</li>
                <li>Quel est le symétrique de [IC] par rapport à I ?</li>
              </ol>
            }
            correction={
              <div className="space-y-3">
                <FigureBox>
                  <svg viewBox="0 0 360 400" className="mx-auto h-auto w-full max-w-xs">
                    <line x1="150" y1="80" x2="190" y2="360" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                    <polygon points="150,80 60,220 280,220" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="60" y1="220" x2="190" y2="360" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
                    <line x1="280" y1="220" x2="190" y2="360" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
                    <circle cx="150" cy="80" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="60" cy="220" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="280" cy="220" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="170" cy="220" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="190" cy="360" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <text x="132" y="68" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="35" y="235" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="288" y="235" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="176" y="238" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">I</text>
                    <text x="197" y="382" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">M</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={1}>On trace la demi-droite [AI), et on place M sur cette demi-droite tel que IM = IA (M est donc tel que I soit le milieu de [AM]).</CorrectionCard>
                <CorrectionCard n={2}>I est le milieu de [BC] (donné), donc le symétrique de B par rapport à I est <strong>C</strong>.</CorrectionCard>
                <CorrectionCard n={3}>Le symétrique de A par rapport à I est M, et le symétrique de C par rapport à I est B. Donc le symétrique du segment [AC] par rapport à I est le segment [MB]. Comme la symétrie centrale conserve les distances : <strong>BM = AC</strong>.</CorrectionCard>
                <CorrectionCard n={4}>La symétrie de centre I transforme A en M, B en C, et I en I. L&apos;angle BÂI a donc pour image l&apos;angle IM̂C. La symétrie centrale conservant les angles : <strong>BÂI = IM̂C</strong>.</CorrectionCard>
                <CorrectionCard n={5}>Les angles BÂI et IM̂C sont des angles alternes-internes formés par les droites (AB) et (MC) et la sécante (AM). Puisqu&apos;ils sont égaux, on en déduit que <strong>(AB) // (MC)</strong>.</CorrectionCard>
                <CorrectionCard n={6}>Le symétrique de I par rapport à I est I lui-même, et le symétrique de C par rapport à I est B. Donc le symétrique de [IC] par rapport à I est <strong>[IB]</strong>.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Triangle ABC et son symétrique"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  ABC un triangle tel que AB = 3 cm ; AC = 4 cm et BÂC = 70°. O un point à l&apos;extérieur du triangle ABC. Les points A&apos;, B&apos;
                  et C&apos; sont les symétriques respectifs de A, B et C par rapport à O.
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Construire une figure convenable.</li>
                  <li>Calculer A&apos;B&apos; et B&apos;Â&apos;C&apos;.</li>
                  <li>Montrer que (A&apos;B) // (AB&apos;).</li>
                  <li>Construire le cercle symétrique du cercle 𝒞(A ; 4 cm) par rapport à O (noté (Γ)), et montrer que C&apos; ∈ (Γ).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <FigureBox caption="Figure, questions 1 à 3">
                  <svg viewBox="0 0 620 440" className="mx-auto h-auto w-full max-w-sm">
                    <line x1="70" y1="120" x2="570" y2="400" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                    <line x1="150" y1="200" x2="490" y2="320" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                    <line x1="260" y1="150" x2="380" y2="370" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                    <polygon points="150,200 70,120 260,150" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <polygon points="490,320 570,400 380,370" className="fill-rose-50 stroke-rose-600 dark:fill-rose-950/20 dark:stroke-rose-400" strokeWidth="2.5" />
                    <circle cx="320" cy="260" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="150" cy="200" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="70" cy="120" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="260" cy="150" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="490" cy="320" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="570" cy="400" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="380" cy="370" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <text x="130" y="192" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="45" y="112" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="268" y="142" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="328" y="255" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
                    <text x="470" y="312" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
                    <text x="578" y="398" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
                    <text x="388" y="362" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C&apos;</text>
                  </svg>
                </FigureBox>
                <FigureBox caption="Figure, question 4">
                  <svg viewBox="0 0 560 400" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="130" cy="180" r="90" className="fill-none stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <circle cx="450" cy="280" r="90" className="fill-none stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
                    <line x1="130" y1="180" x2="450" y2="280" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                    <line x1="130" y1="180" x2="200" y2="124" className="stroke-indigo-400 dark:stroke-indigo-300" strokeWidth="1.5" />
                    <line x1="450" y1="280" x2="380" y2="336" className="stroke-rose-400 dark:stroke-rose-300" strokeWidth="1.5" />
                    <circle cx="130" cy="180" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="200" cy="124" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="290" cy="230" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="450" cy="280" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="380" cy="336" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <text x="110" y="168" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="206" y="118" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="298" y="225" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
                    <text x="458" y="272" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
                    <text x="360" y="356" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C&apos;</text>
                    <text x="45" y="70" fontSize="13" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">𝒞(A;4cm)</text>
                    <text x="410" y="380" fontSize="13" className="fill-rose-700 dark:fill-rose-300 font-semibold">(Γ)</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={1}>On trace le triangle ABC, on place O à l&apos;extérieur, puis on construit A&apos;, B&apos;, C&apos; en prolongeant [AO), [BO) et [CO) d&apos;une longueur égale au-delà de O.</CorrectionCard>
                <CorrectionCard n={2}>A&apos; et B&apos; sont les symétriques respectifs de A et B par rapport à O : la conservation de la distance donne <strong>A&apos;B&apos; = AB = 3 cm</strong>. De même, la conservation des angles donne <strong>B&apos;Â&apos;C&apos; = BÂC = 70°</strong>.</CorrectionCard>
                <CorrectionCard n={3}>A est le symétrique de A&apos; par rapport à O, et B&apos; est le symétrique de B par rapport à O. Donc le symétrique de la droite (A&apos;B) par rapport à O est la droite (AB&apos;). Comme O ∉ (A&apos;B), la propriété du symétrique d&apos;une droite donne : (AB&apos;) est strictement parallèle à (A&apos;B). D&apos;où <strong>(A&apos;B) // (AB&apos;)</strong>.</CorrectionCard>
                <CorrectionCard n={4}>Le cercle 𝒞(A ; 4 cm) a pour symétrique par rapport à O le cercle (Γ) de centre A&apos; et de même rayon 4 cm. Comme C&apos; est le symétrique de C et A&apos; le symétrique de A, la conservation des distances donne A&apos;C&apos; = AC = 4 cm. Donc <strong>C&apos; ∈ (Γ)</strong>.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Triangle équilatéral ABC"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  ABC un triangle équilatéral et M un point de [BC], distinct de B et de C. Le point I est le milieu de [AM]. B&apos; et C&apos;
                  sont les symétriques respectifs de B et C par rapport à I.
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Construire la figure.</li>
                  <li>Montrer que les points A, B&apos; et C&apos; sont alignés.</li>
                  <li>Montrer que MB̂&apos;C&apos; = 60°.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <FigureBox>
                  <svg viewBox="0 0 360 300" className="mx-auto h-auto w-full max-w-xs">
                    <line x1="75" y1="280" x2="275" y2="60" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                    <line x1="315" y1="280" x2="35" y2="60" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                    <polygon points="195,60 75,280 315,280" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="35" y1="60" x2="275" y2="60" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
                    <circle cx="195" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="75" cy="280" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="315" cy="280" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="155" cy="280" r="5" className="fill-indigo-700 dark:fill-indigo-300" />
                    <circle cx="175" cy="170" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="275" cy="60" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="35" cy="60" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <text x="199" y="48" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="50" y="298" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="321" y="298" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="143" y="300" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">M</text>
                    <text x="145" y="163" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">I</text>
                    <text x="281" y="52" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
                    <text x="13" y="52" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C&apos;</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={1}>On trace le triangle équilatéral ABC, M sur [BC], I milieu de [AM], puis B&apos; et C&apos; obtenus en prolongeant [BI) et [CI) d&apos;une longueur égale au-delà de I.</CorrectionCard>
                <CorrectionCard n={2}>B, M, C sont alignés. Leurs symétriques respectifs par rapport à I sont B&apos;, A (I milieu de [AM] signifie que A est le symétrique de M) et C&apos;. La symétrie centrale conserve l&apos;alignement : donc <strong>A, B&apos;, C&apos; sont alignés</strong>.</CorrectionCard>
                <CorrectionCard n={3}>La symétrie de centre I transforme B en B&apos;, C en C&apos;, et M en A. L&apos;angle AB̂C a donc pour image l&apos;angle MB̂&apos;C&apos;. La symétrie centrale conservant les angles : MB̂&apos;C&apos; = AB̂C. Or ABC est équilatéral, donc AB̂C = 60°. D&apos;où <strong>MB̂&apos;C&apos; = 60°</strong>.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Construction pas à pas"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                <li>Dessiner O milieu d&apos;un segment [AB].</li>
                <li>Dessiner une droite (D), différente de la droite (AB), passant par le point O.</li>
                <li>Dessiner une droite (Δ) passant par le point A et qui coupe la droite (D) en un point M.</li>
                <li>Dessiner une droite (Δ&apos;) passant par B et parallèle à (Δ). (Δ&apos;) et (D) se coupent en un point N.</li>
                <li>Montrer que le point N est le symétrique du point M par rapport au point O.</li>
                <li>Déduire que (BM) // (AN).</li>
              </ol>
            }
            correction={
              <div className="space-y-3">
                <FigureBox>
                  <svg viewBox="0 0 400 460" className="mx-auto h-auto w-full max-w-sm">
                    <line x1="50" y1="300" x2="350" y2="300" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="3,4" />
                    <line x1="60" y1="440" x2="380" y2="120" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="60" y1="260" x2="145" y2="430" className="stroke-violet-600 dark:stroke-violet-400" strokeWidth="2.5" />
                    <line x1="260" y1="180" x2="345" y2="350" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
                    <circle cx="80" cy="300" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="320" cy="300" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="200" cy="300" r="5.5" className="fill-amber-500" />
                    <circle cx="120" cy="380" r="5" className="fill-violet-600 dark:fill-violet-400" />
                    <circle cx="280" cy="220" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <text x="62" y="320" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="326" y="320" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="206" y="292" fontSize="14" className="fill-amber-600 dark:fill-amber-400 font-bold">O</text>
                    <text x="98" y="400" fontSize="14" className="fill-violet-700 dark:fill-violet-300 font-bold">M</text>
                    <text x="286" y="214" fontSize="14" className="fill-rose-700 dark:fill-rose-300 font-bold">N</text>
                    <text x="358" y="128" fontSize="14" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">(D)</text>
                    <text x="45" y="255" fontSize="13" className="fill-violet-700 dark:fill-violet-300 font-semibold">(Δ)</text>
                    <text x="350" y="345" fontSize="13" className="fill-rose-700 dark:fill-rose-300 font-semibold">(Δ&apos;)</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n="1-4">Construction : O milieu de [AB], (D) passant par O, (Δ) passant par A et coupant (D) en M, (Δ&apos;) passant par B et parallèle à (Δ), coupant (D) en N.</CorrectionCard>
                <CorrectionCard n={5}>
                  O est le milieu de [AB], donc la symétrie de centre O transforme A en B. La droite (D) passe par O, donc elle est sa propre image.
                  La droite (Δ) passe par A ; son image est une droite passant par B et parallèle à (Δ), c&apos;est-à-dire (Δ&apos;). Comme M = (Δ) ∩ (D),
                  son image est le point d&apos;intersection de (Δ&apos;) et (D), c&apos;est-à-dire N. D&apos;où <strong>N est le symétrique de M par rapport à O</strong>.
                </CorrectionCard>
                <CorrectionCard n={6}>A a pour image B, et N a pour image M. Donc la droite (AN) a pour image la droite (BM). Comme O ∉ (AN), on en déduit que <strong>(BM) // (AN)</strong>.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Deux droites parallèles"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  (D) et (D&apos;) sont deux droites strictement parallèles. La droite (Δ) coupe (D) en un point A et coupe (D&apos;) en un point B.
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Dessiner le point O, milieu du segment [AB].</li>
                  <li>Montrer que la droite (D&apos;) est le symétrique de la droite (D) par rapport au point O.</li>
                  <li>
                    a) La droite (Δ&apos;) coupe (D) en un point A&apos; et coupe (D&apos;) en un point B&apos;. b) Dessiner O&apos;, milieu du segment [A&apos;B&apos;].
                    c) Montrer que O&apos; est le centre de symétrie de la figure composée des droites (D) et (D&apos;).
                  </li>
                  <li>Montrer que tout point de la droite (OO&apos;) est un centre de symétrie de la figure composée des droites (D) et (D&apos;).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <FigureBox caption="La droite (OO&apos;), en pointillés ambre, est la « droite médiane », à mi-distance entre (D) et (D&apos;).">
                  <svg viewBox="0 0 420 340" className="mx-auto h-auto w-full max-w-sm">
                    <line x1="20" y1="100" x2="400" y2="100" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="20" y1="300" x2="400" y2="300" className="stroke-rose-600 dark:stroke-rose-400" strokeWidth="2.5" />
                    <line x1="20" y1="200" x2="400" y2="200" className="stroke-amber-500 dark:stroke-amber-400" strokeWidth="2" strokeDasharray="7,5" />
                    <line x1="80" y1="100" x2="180" y2="300" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
                    <line x1="320" y1="100" x2="260" y2="300" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
                    <circle cx="80" cy="100" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="180" cy="300" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="320" cy="100" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="260" cy="300" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="130" cy="200" r="5.5" className="fill-amber-500" />
                    <circle cx="290" cy="200" r="5.5" className="fill-amber-500" />
                    <text x="14" y="90" fontSize="14" className="fill-indigo-700 dark:fill-indigo-300 font-bold">(D)</text>
                    <text x="14" y="292" fontSize="14" className="fill-rose-700 dark:fill-rose-300 font-bold">(D&apos;)</text>
                    <text x="66" y="88" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="186" y="320" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="326" y="88" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A&apos;</text>
                    <text x="266" y="320" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B&apos;</text>
                    <text x="110" y="192" fontSize="14" className="fill-amber-700 dark:fill-amber-300 font-bold">O</text>
                    <text x="296" y="192" fontSize="14" className="fill-amber-700 dark:fill-amber-300 font-bold">O&apos;</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={1}>On place O au milieu de [AB], avec A ∈ (D) et B ∈ (D&apos;).</CorrectionCard>
                <CorrectionCard n={2}>
                  O appartient à (Δ) mais pas à (D). Le symétrique de (D) par rapport à O est donc une droite parallèle à (D), passant par le
                  symétrique de A, c&apos;est-à-dire par B. Or il n&apos;existe qu&apos;une seule droite parallèle à (D) passant par B : c&apos;est (D&apos;).
                  Donc <strong>(D&apos;) est le symétrique de (D) par rapport à O</strong>.
                </CorrectionCard>
                <CorrectionCard n="3">
                  a-b) Figure : mêmes constructions avec la sécante (Δ&apos;) et le point O&apos;. c) Le même raisonnement, appliqué à O&apos; avec le couple
                  (A&apos;, B&apos;), montre que (D&apos;) est le symétrique de (D) par rapport à O&apos;. La figure formée de (D) et (D&apos;) est donc globalement
                  conservée par la symétrie de centre O&apos; : <strong>O&apos; est un centre de symétrie de cette figure</strong>.
                </CorrectionCard>
                <CorrectionCard n={4}>
                  Le milieu d&apos;un segment joignant un point de (D) à son correspondant sur (D&apos;) se trouve toujours exactement à mi-distance
                  entre (D) et (D&apos;) : c&apos;est le cas de O comme de O&apos;. Pour tout point P de (OO&apos;), le même raisonnement s&apos;applique : le
                  symétrique de (D) par rapport à P est (D&apos;), et réciproquement. D&apos;où <strong>tout point de (OO&apos;) est un centre de symétrie</strong>.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Deux cercles concentriques"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  [AB] et [CD] sont les diamètres respectifs de deux cercles (C) et (C&apos;) qui ont le même centre O et des rayons différents,
                  tels que les points A, B, C et D ne sont pas alignés.
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Montrer que (AC) // (BD).</li>
                  <li>Montrer que OĈA = OD̂B.</li>
                  <li>(Δ) est une droite qui passe par O et coupe respectivement (AC) et (BD) en M et N. Montrer que M et N sont symétriques par rapport à O.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <FigureBox>
                  <svg viewBox="0 0 440 440" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="220" cy="220" r="152" className="fill-none stroke-indigo-500 dark:stroke-indigo-400" strokeWidth="2" />
                    <circle cx="220" cy="220" r="92" className="fill-none stroke-violet-500 dark:stroke-violet-400" strokeWidth="2" />
                    <line x1="80" y1="160" x2="360" y2="280" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="3,4" />
                    <line x1="280" y1="150" x2="160" y2="290" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="3,4" />
                    <line x1="60" y1="167" x2="300" y2="143" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
                    <line x1="380" y1="273" x2="140" y2="297" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2.5" />
                    <line x1="220" y1="60" x2="220" y2="380" className="stroke-amber-500 dark:stroke-amber-400" strokeWidth="2" strokeDasharray="6,5" />
                    <circle cx="220" cy="220" r="5.5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="80" cy="160" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="360" cy="280" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="280" cy="150" r="5" className="fill-violet-600 dark:fill-violet-400" />
                    <circle cx="160" cy="290" r="5" className="fill-violet-600 dark:fill-violet-400" />
                    <circle cx="220" cy="153" r="5" className="fill-emerald-600 dark:fill-emerald-400" />
                    <circle cx="220" cy="287" r="5" className="fill-emerald-600 dark:fill-emerald-400" />
                    <text x="60" y="150" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="368" y="272" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="288" y="140" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="130" y="304" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                    <text x="228" y="215" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
                    <text x="227" y="148" fontSize="14" className="fill-emerald-700 dark:fill-emerald-300 font-bold">M</text>
                    <text x="227" y="302" fontSize="14" className="fill-emerald-700 dark:fill-emerald-300 font-bold">N</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={1}>
                  O est le milieu de [AB] et de [CD]. Le symétrique de la droite (AC) par rapport à O est donc la droite (BD). Comme A, B, C, D
                  ne sont pas alignés, O ∉ (AC) ; donc (BD) est strictement parallèle à (AC). D&apos;où <strong>(AC) // (BD)</strong>.
                </CorrectionCard>
                <CorrectionCard n={2}>
                  La symétrie de centre O transforme C en D, O en O et A en B. L&apos;angle OĈA a donc pour image l&apos;angle OD̂B. La symétrie centrale
                  conservant les angles : <strong>OĈA = OD̂B</strong>.
                </CorrectionCard>
                <CorrectionCard n={3}>
                  La droite (Δ) passe par O, donc elle est sa propre image. D&apos;après la question 1), (BD) est l&apos;image de (AC). Donc l&apos;image de M
                  (intersection de (Δ) et (AC)) est le point d&apos;intersection de (Δ) et (BD), c&apos;est-à-dire N. D&apos;où <strong>M et N sont symétriques par rapport à O</strong>.
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
