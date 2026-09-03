import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Le Parallélogramme · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur le parallélogramme (1ère année collège) : définition, propriété des diagonales, des côtés opposés, des angles opposés et consécutifs (directes et réciproques), fiche mémo et 7 exercices corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 4",
  heroTitle: "Le Parallélogramme",
  heroSubtitle:
    "Un quadrilatère dont les côtés opposés ne se croisent jamais. Quatre propriétés, et leurs réciproques, à connaître par cœur.",
  footerNote: "Le parallélogramme · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "proprietes", label: "Propriétés" },
    { id: "memo", label: "Fiche mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

function Statement({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-violet-300 bg-violet-50 p-4 text-center text-sm font-medium text-foreground dark:border-violet-800 dark:bg-violet-950/20">
      {children}
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="mb-2 text-xs font-bold tracking-wide text-violet-500 uppercase">{children}</p>;
}

function ApplicationCard({ statement, figure, solution }: { statement: ReactNode; figure?: ReactNode; solution: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 md:p-5">
      <p className="mb-3 text-xs font-bold tracking-wide text-foreground-muted uppercase">✍️ Application</p>
      <p className="mb-4 text-sm text-foreground">{statement}</p>
      {figure}
      <div className={`space-y-1.5 text-sm text-foreground ${figure ? "mt-4 border-t border-dashed border-border pt-4" : ""}`}>{solution}</div>
    </div>
  );
}

function CorrectionCard({ n, children }: { n?: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      {n ? <span className="font-bold text-green-700">{n}. </span> : null}
      {children}
    </div>
  );
}

function FigureBox({ children, caption }: { children: ReactNode; caption?: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4">
      {children}
      {caption ? <p className="mt-1 text-center text-xs text-foreground-muted">{caption}</p> : null}
    </div>
  );
}

function MemoCard({ icon, tone, title, span, children }: { icon: string; tone: string; title: string; span?: boolean; children: ReactNode }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-5 ${span ? "sm:col-span-2" : ""}`}>
      <div className="mb-3 flex items-center gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${tone}`}>{icon}</span>
        <h3 className="font-bold text-foreground">{title}</h3>
      </div>
      <div className="space-y-1.5 text-sm text-foreground-muted">{children}</div>
    </div>
  );
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <svg width="0" height="0" className="absolute">
        <defs>
          <marker id="arrow-gray-para" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="fill-neutral-400 dark:fill-neutral-500" />
          </marker>
        </defs>
      </svg>

      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "4", label: "propriétés" },
          { value: "7", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#definition"
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
          <svg viewBox="0 0 220 150" className="h-auto w-56">
            <polygon points="30,110 100,110 190,40 120,40" fill="none" stroke="white" strokeOpacity="0.7" strokeWidth="2.5" />
            <circle cx="30" cy="110" r="5" fill="white" />
            <circle cx="100" cy="110" r="5" fill="white" />
            <circle cx="190" cy="40" r="5" fill="#fb923c" />
            <circle cx="120" cy="40" r="5" fill="white" />
          </svg>
        }
      />

      {/* ===================== I. DEFINITION ===================== */}
      <LessonSection
        id="definition"
        kicker="01 · La figure de base"
        title="Le parallélogramme"
        tone="light"
        description="Un quadrilatère très particulier, base de toute cette leçon."
      >
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="order-2 rounded-2xl border border-rose-500/30 bg-rose-100/60 p-5 md:order-1 md:p-6">
            <p className="mb-2 text-xs font-bold text-rose-600 uppercase">1. Définition</p>
            <p className="leading-relaxed text-foreground">
              Le <strong>parallélogramme</strong> est un quadrilatère dont les <strong>supports des côtés opposés sont parallèles</strong>.
            </p>
          </div>
          <div className="order-1 rounded-2xl border border-border bg-surface p-5 md:order-2 md:p-6">
            <p className="mb-3 text-xs font-bold tracking-wide text-foreground-muted uppercase">2. Exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Soit <strong>ABCD</strong> un parallélogramme : les droites (AB) et (DC) sont parallèles, tout comme les droites (AD) et (BC).
            </p>
            <svg viewBox="0 0 320 210" className="mx-auto h-auto w-full max-w-sm">
              <g className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" markerStart="url(#arrow-gray-para)" markerEnd="url(#arrow-gray-para)">
                <line x1="68" y1="63" x2="292" y2="47" />
                <line x1="18" y1="163" x2="242" y2="147" />
                <line x1="125" y1="30" x2="45" y2="190" />
                <line x1="265" y1="20" x2="185" y2="180" />
              </g>
              <polygon points="110,60 250,50 200,150 60,160" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
              <circle cx="110" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="250" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="200" cy="150" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="60" cy="160" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <text x="94" y="46" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="257" y="40" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="206" y="173" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
              <text x="34" y="172" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">
              Les droites en gris sont les <em>supports</em> (elles prolongent les côtés à l&apos;infini).
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. PROPRIETES ===================== */}
      <LessonSection
        id="proprietes"
        kicker="02 · Directe et réciproque"
        title="Propriétés"
        tone="muted"
        description="Quatre propriétés du parallélogramme, chacune avec sa réciproque."
      >
        <div className="space-y-8">
          {/* 1. Diagonales */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 text-xl font-bold text-foreground">1. Propriété des diagonales</h3>
            <p className="mb-4 text-sm text-foreground-muted">Ce que l&apos;on peut dire du point où se croisent les diagonales.</p>

            <Label>a) Propriété directe</Label>
            <div className="mb-5">
              <Statement>Dans un parallélogramme, les diagonales se coupent en leur milieu, appelé <strong>centre du parallélogramme</strong>.</Statement>
            </div>
            <p className="mb-3 text-sm text-foreground-muted">Exemple : soit <strong>ABCD</strong> un parallélogramme de centre <strong>O</strong>.</p>
            <svg viewBox="0 0 340 220" className="mx-auto mb-6 h-auto w-full max-w-sm">
              <polygon points="90,50 290,50 250,190 50,190" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
              <line x1="90" y1="50" x2="250" y2="190" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1.75" strokeDasharray="5,4" />
              <line x1="290" y1="50" x2="50" y2="190" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1.75" strokeDasharray="5,4" />
              <line x1="124.7" y1="79" x2="135.3" y2="91" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
              <line x1="204.7" y1="149" x2="215.3" y2="161" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
              <line x1="222" y1="80.5" x2="230" y2="89.5" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
              <line x1="230" y1="80.5" x2="238" y2="89.5" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
              <line x1="102" y1="150.5" x2="110" y2="159.5" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
              <line x1="110" y1="150.5" x2="118" y2="159.5" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
              <circle cx="90" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="290" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="250" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="50" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="170" cy="120" r="5" className="fill-slate-800 dark:fill-slate-200" />
              <text x="74" y="38" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="297" y="38" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="256" y="210" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
              <text x="30" y="210" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
              <text x="176" y="112" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
            </svg>

            <Label>b) Propriété réciproque</Label>
            <div className="mb-5">
              <Statement>Si dans un quadrilatère les diagonales se coupent en leur milieu, alors <strong>c&apos;est un parallélogramme</strong>.</Statement>
            </div>

            <ApplicationCard
              statement={
                <>
                  Soit <strong>ABC</strong> un triangle. <strong>E</strong> et <strong>F</strong> sont les symétriques respectifs des points{" "}
                  <strong>B</strong> et <strong>C</strong> par rapport à <strong>A</strong>. 1) Tracer la figure. 2) Montrer que{" "}
                  <strong>BCEF</strong> est un parallélogramme en déterminant son centre.
                </>
              }
              figure={
                <svg viewBox="0 0 300 250" className="mx-auto h-auto w-full max-w-xs">
                  <line x1="80" y1="70" x2="220" y2="190" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                  <line x1="210" y1="60" x2="90" y2="200" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="4,4" />
                  <polygon points="90,200 220,190 210,60 80,70" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                  <circle cx="150" cy="130" r="5" className="fill-slate-800 dark:fill-slate-200" />
                  <circle cx="90" cy="200" r="5" className="fill-rose-600 dark:fill-rose-400" />
                  <circle cx="220" cy="190" r="5" className="fill-rose-600 dark:fill-rose-400" />
                  <circle cx="210" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="80" cy="70" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <text x="158" y="122" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                  <text x="70" y="222" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                  <text x="228" y="204" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                  <text x="216" y="48" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
                  <text x="55" y="62" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">F</text>
                </svg>
              }
              solution={
                <>
                  <p><strong>Solution :</strong> E est le symétrique de B par rapport à A, donc A est le milieu de [EB].</p>
                  <p>F est le symétrique de C par rapport à A, donc A est le milieu de [FC].</p>
                  <p>D&apos;où : A est le milieu de [EB] et de [FC], qui sont les diagonales de BCEF.</p>
                  <p className="font-bold">Conclusion : BCEF est un parallélogramme de centre A.</p>
                </>
              }
            />
          </div>

          {/* 2. Cotes opposes */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 text-xl font-bold text-foreground">2. Propriété des côtés opposés</h3>
            <p className="mb-4 text-sm text-foreground-muted">Ce que l&apos;on peut dire des longueurs des côtés.</p>

            <Label>a) Propriété directe</Label>
            <div className="mb-5">
              <Statement>Dans un parallélogramme, les côtés opposés sont <strong>isométriques (égaux)</strong>.</Statement>
            </div>
            <p className="mb-3 text-sm text-foreground-muted">Exemple : soit <strong>ABCD</strong> un parallélogramme.</p>
            <svg viewBox="0 0 340 220" className="mx-auto mb-6 h-auto w-full max-w-sm">
              <polygon points="90,50 290,50 250,190 50,190" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
              <g className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2">
                <line x1="186" y1="46" x2="194" y2="54" />
                <line x1="146" y1="166" x2="154" y2="174" />
              </g>
              <g className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2">
                <line x1="62.5" y1="108.2" x2="72.5" y2="112.2" />
                <line x1="70.5" y1="115.8" x2="80.5" y2="119.8" />
                <line x1="262.5" y1="108.2" x2="272.5" y2="112.2" />
                <line x1="270.5" y1="115.8" x2="280.5" y2="119.8" />
              </g>
              <circle cx="90" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="290" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="250" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <circle cx="50" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
              <text x="74" y="38" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
              <text x="297" y="38" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
              <text x="256" y="210" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
              <text x="30" y="210" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
            </svg>
            <p className="mb-6 text-center text-sm text-foreground-muted">On a : <strong>AB = DC</strong> et <strong>AD = BC</strong>.</p>

            <Label>b) Propriété réciproque</Label>
            <div className="mb-5">
              <Statement>Si dans un quadrilatère les côtés opposés sont isométriques (égaux), alors <strong>c&apos;est un parallélogramme</strong>.</Statement>
            </div>

            <div className="mb-6">
              <ApplicationCard
                statement={<>Soit <strong>ABCD</strong> un rectangle. 1) Tracer la figure. 2) Montrer que ABCD est un parallélogramme.</>}
                figure={
                  <svg viewBox="0 0 340 220" className="mx-auto h-auto w-full max-w-xs">
                    <rect x="70" y="50" width="200" height="120" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <path d="M70,66 L86,66 L86,50" className="stroke-slate-600 dark:stroke-slate-300" fill="none" strokeWidth="2" />
                    <circle cx="70" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="270" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="270" cy="170" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="70" cy="170" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <text x="54" y="40" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="277" y="40" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="277" y="192" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="54" y="192" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                  </svg>
                }
                solution={
                  <>
                    <p><strong>Solution :</strong> puisque ABCD est un rectangle, alors : AB = DC et AD = BC (propriété du rectangle).</p>
                    <p className="font-bold">D&apos;où : ABCD est un parallélogramme.</p>
                  </>
                }
              />
            </div>

            <Label>c) Propriété réciproque (particulière)</Label>
            <div className="mb-5">
              <Statement>
                Si dans un quadrilatère, <strong>deux côtés opposés</strong> sont isométriques (égaux) <strong>et</strong> leurs supports sont
                parallèles, alors c&apos;est un parallélogramme.
              </Statement>
            </div>

            <ApplicationCard
              statement={
                <>
                  Soit [AB] un segment et C un point n&apos;appartenant pas à la droite (AB). 1) Tracer une droite passant par C et parallèle à
                  (AB), puis choisir un point D sur cette droite tel que CD = AB et ABCD soit un quadrilatère. 2) Montrer que ABCD est un
                  parallélogramme.
                </>
              }
              figure={
                <svg viewBox="0 0 340 220" className="mx-auto h-auto w-full max-w-xs">
                  <g className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.5" markerEnd="url(#arrow-gray-para)">
                    <line x1="70" y1="60" x2="300" y2="60" />
                  </g>
                  <line x1="70" y1="180" x2="300" y2="180" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" strokeDasharray="5,4" />
                  <polygon points="70,60 230,60 270,180 110,180" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                  <g className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2">
                    <line x1="146" y1="56" x2="154" y2="64" />
                    <line x1="186" y1="176" x2="194" y2="184" />
                  </g>
                  <circle cx="70" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="230" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="270" cy="180" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <circle cx="110" cy="180" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                  <text x="54" y="48" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                  <text x="237" y="48" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                  <text x="277" y="202" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                  <text x="94" y="202" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                </svg>
              }
              solution={
                <>
                  <p><strong>Solution :</strong> on a (AB) // (CD) par construction.</p>
                  <p>Et puisque AB = CD (construction), alors : <strong>ABCD est un parallélogramme</strong>.</p>
                </>
              }
            />
          </div>

          {/* 3. Angles opposes */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 text-xl font-bold text-foreground">3. Propriété des angles opposés</h3>
            <p className="mb-4 text-sm text-foreground-muted">Ce que l&apos;on peut dire des angles opposés deux à deux.</p>

            <Label>a) Propriété directe</Label>
            <div className="mb-5">
              <Statement>Dans un parallélogramme, les angles opposés sont <strong>isométriques (égaux)</strong>.</Statement>
            </div>
            <p className="mb-3 text-sm text-foreground-muted">Exemple : soit <strong>ABCD</strong> un parallélogramme.</p>
            <svg viewBox="0 0 340 220" className="mx-auto mb-4 h-auto w-full max-w-sm">
              <polygon points="90,50 290,50 250,190 50,190" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
              <path d="M116,50 A26,26 0 0,1 82.86,75.0" className="fill-none stroke-rose-500 dark:stroke-rose-400" strokeWidth="2.5" />
              <path d="M257.14,165.0 A26,26 0 0,1 224,190" className="fill-none stroke-rose-500 dark:stroke-rose-400" strokeWidth="2.5" />
              <path d="M264,50 A26,26 0 0,0 282.86,75.0" className="fill-none stroke-indigo-500 dark:stroke-indigo-300" strokeWidth="2.5" />
              <path d="M57.14,165.0 A26,26 0 0,0 76,190" className="fill-none stroke-indigo-500 dark:stroke-indigo-300" strokeWidth="2.5" />
              <circle cx="90" cy="50" r="5" className="fill-slate-700 dark:fill-slate-200" />
              <circle cx="290" cy="50" r="5" className="fill-slate-700 dark:fill-slate-200" />
              <circle cx="250" cy="190" r="5" className="fill-slate-700 dark:fill-slate-200" />
              <circle cx="50" cy="190" r="5" className="fill-slate-700 dark:fill-slate-200" />
              <text x="74" y="38" fontSize="16" className="fill-rose-600 dark:fill-rose-400 font-bold">A</text>
              <text x="297" y="38" fontSize="16" className="fill-indigo-600 dark:fill-indigo-300 font-bold">B</text>
              <text x="256" y="210" fontSize="16" className="fill-rose-600 dark:fill-rose-400 font-bold">C</text>
              <text x="30" y="210" fontSize="16" className="fill-indigo-600 dark:fill-indigo-300 font-bold">D</text>
            </svg>
            <p className="mb-6 text-center text-sm text-foreground-muted">
              On a : <span className="font-semibold text-rose-600 dark:text-rose-400">DÂB = DĈB</span>{" "}
              et <span className="font-semibold text-indigo-600 dark:text-indigo-300">AB̂C = AD̂C</span>.
            </p>

            <Label>b) Propriété réciproque</Label>
            <Statement>Si dans un quadrilatère les angles opposés sont isométriques (égaux), alors <strong>c&apos;est un parallélogramme</strong>.</Statement>
          </div>

          {/* 4. Angles consecutifs */}
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 text-xl font-bold text-foreground">4. Propriété des angles consécutifs</h3>
            <p className="mb-4 text-sm text-foreground-muted">Ce que l&apos;on peut dire de deux angles côte à côte.</p>

            <Label>a) Propriété directe</Label>
            <div className="mb-5">
              <Statement>Dans un parallélogramme, les angles consécutifs sont <strong>supplémentaires</strong> (la somme de leurs mesures égale 180°).</Statement>
            </div>
            <p className="mb-3 text-sm text-foreground-muted">Exemple : soit <strong>ABCD</strong> un parallélogramme.</p>
            <div className="grid items-center gap-6 sm:grid-cols-2">
              <svg viewBox="0 0 340 220" className="mx-auto h-auto w-full max-w-xs">
                <polygon points="90,50 290,50 250,190 50,190" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                <path d="M116,50 A26,26 0 0,1 82.86,75.0" className="fill-none stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
                <path d="M264,50 A26,26 0 0,0 282.86,75.0" className="fill-none stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
                <path d="M257.14,165.0 A26,26 0 0,1 224,190" className="fill-none stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
                <path d="M57.14,165.0 A26,26 0 0,0 76,190" className="fill-none stroke-slate-500 dark:stroke-slate-400" strokeWidth="2" />
                <circle cx="90" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                <circle cx="290" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                <circle cx="250" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                <circle cx="50" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                <text x="74" y="38" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                <text x="297" y="38" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                <text x="256" y="210" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                <text x="30" y="210" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
              </svg>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-center text-sm font-semibold text-foreground">AB̂C + BĈD = 180°</div>
                <div className="rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-center text-sm font-semibold text-foreground">BĈD + CD̂A = 180°</div>
                <div className="rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-center text-sm font-semibold text-foreground">CD̂A + DÂB = 180°</div>
                <div className="rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-center text-sm font-semibold text-foreground">DÂB + AB̂C = 180°</div>
              </div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. FICHE MEMO ===================== */}
      <LessonSection
        id="memo"
        kicker="03 · Tout en un coup d'œil"
        title="Fiche mémo"
        tone="light"
        description="Tout le cours résumé, pour réviser vite."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <MemoCard icon="▱" tone="bg-rose-100 text-rose-600" title="Définition">
            <p>Quadrilatère dont les supports des côtés opposés sont parallèles.</p>
          </MemoCard>

          <MemoCard icon="✕" tone="bg-violet-100 text-violet-600" title="Diagonales">
            <p><strong>Directe :</strong> elles se coupent en leur milieu (centre).</p>
            <p><strong>Réciproque :</strong> si elles se coupent en leur milieu ⟹ parallélogramme.</p>
          </MemoCard>

          <MemoCard icon="=" tone="bg-indigo-100 text-indigo-600" title="Côtés opposés">
            <p><strong>Directe :</strong> isométriques (égaux) deux à deux.</p>
            <p>
              <strong>Réciproque :</strong> si isométriques ⟹ parallélogramme. Cas particulier : si <em>deux</em> côtés opposés sont
              isométriques <em>et</em> parallèles ⟹ parallélogramme.
            </p>
          </MemoCard>

          <MemoCard icon="∠" tone="bg-green-100 text-green-700" title="Angles opposés">
            <p><strong>Directe :</strong> isométriques (égaux) deux à deux.</p>
            <p><strong>Réciproque :</strong> si isométriques ⟹ parallélogramme.</p>
          </MemoCard>

          <MemoCard icon="⌒" tone="bg-orange-100 text-orange-700" title="Angles consécutifs" span>
            <p><strong>Directe :</strong> supplémentaires, la somme de deux angles consécutifs vaut toujours <strong>180°</strong>.</p>
          </MemoCard>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="7 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le parallélogramme.">
          <ExerciseCard
            id="1"
            index={1}
            title="Le parallélogramme LMNK"
            items={
              <div>
                <p className="mb-1 text-sm text-foreground-muted">
                  Dans la figure ci-dessous, le quadrilatère <strong>LMNK</strong> est un parallélogramme. Donne les longueurs ou les angles
                  demandés, en <strong>justifiant</strong> à chaque fois par la propriété utilisée :
                </p>
                <p className="mb-4 text-sm font-semibold text-foreground">LM ; MN ; LK̂N ; KL̂M ; KN̂M</p>
                <FigureBox>
                  <svg viewBox="0 0 330 220" className="mx-auto h-auto w-full max-w-xs">
                    <polygon points="70,190 100,50 260,50 230,190" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <path d="M94.6,75.4 A26,26 0 0,1 126,50" className="fill-none stroke-rose-500 dark:stroke-rose-400" strokeWidth="2.25" />
                    <text x="103" y="76" fontSize="13" className="fill-rose-600 dark:fill-rose-400 font-bold">120°</text>
                    <circle cx="70" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="100" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="260" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="230" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <text x="52" y="208" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">L</text>
                    <text x="84" y="40" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">M</text>
                    <text x="266" y="40" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">N</text>
                    <text x="236" y="208" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">K</text>
                    <text x="140" y="207" fontSize="13" className="fill-slate-500 dark:fill-slate-400 font-semibold">3 cm</text>
                    <text x="253" y="122" fontSize="13" className="fill-slate-500 dark:fill-slate-400 font-semibold">4 cm</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-3">
                <CorrectionCard><strong>LM = NK = 4 cm</strong>, les côtés opposés d&apos;un parallélogramme sont isométriques.</CorrectionCard>
                <CorrectionCard><strong>MN = LK = 3 cm</strong>, les côtés opposés d&apos;un parallélogramme sont isométriques.</CorrectionCard>
                <CorrectionCard><strong>LK̂N = M̂ = 120°</strong>, les angles opposés d&apos;un parallélogramme sont isométriques (K est opposé à M).</CorrectionCard>
                <CorrectionCard><strong>KL̂M = 180° − 120° = 60°</strong>, les angles consécutifs d&apos;un parallélogramme sont supplémentaires (L et M sont consécutifs).</CorrectionCard>
                <CorrectionCard><strong>KN̂M = 180° − 120° = 60°</strong>, les angles consécutifs d&apos;un parallélogramme sont supplémentaires (N et M sont consécutifs).</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Triangle ABC, milieux I et J"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  <strong>ABC</strong> est un triangle quelconque. <strong>I</strong> est le milieu du segment [AB], <strong>J</strong> est le
                  milieu du segment [AC].
                </p>
                <ol className="mb-4 list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Reproduire cette figure puis tracer le point <strong>K</strong>, symétrique du point I par rapport au point J. Coder la figure.</li>
                  <li>
                    On veut démontrer que le quadrilatère <strong>AKCI</strong> est un parallélogramme. Recopier et compléter :
                    <div className="mt-2 space-y-1 rounded-lg border border-border bg-surface-muted p-3 text-sm text-foreground-muted italic">
                      <p>J est le milieu de …………………</p>
                      <p>K est le symétrique du point I par rapport au point J, donc J est le milieu de ……………</p>
                      <p>Or si un quadrilatère a …………………………………………………, alors c&apos;est un parallélogramme.</p>
                      <p>Donc ……………………………………… et son centre est ………………………</p>
                    </div>
                  </li>
                </ol>
                <FigureBox caption="Figure de départ">
                  <svg viewBox="0 0 300 220" className="mx-auto h-auto w-full max-w-xs">
                    <polygon points="150,50 60,190 250,170" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="97" y1="113" x2="113" y2="127" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
                    <line x1="192" y1="103" x2="208" y2="117" className="stroke-slate-600 dark:stroke-slate-300" strokeWidth="2" />
                    <circle cx="150" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="60" cy="190" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="250" cy="170" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="105" cy="120" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="200" cy="110" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
                    <text x="140" y="38" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="40" y="212" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="258" y="168" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="78" y="115" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">I</text>
                    <text x="210" y="108" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">J</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-3">
                <CorrectionCard n={1}>On place K sur la demi-droite [IJ) tel que JK = JI (J devient le milieu de [IK]).</CorrectionCard>
                <FigureBox>
                  <svg viewBox="0 0 340 220" className="mx-auto h-auto w-full max-w-xs">
                    <polygon points="150,50 60,190 250,170" className="fill-indigo-50/50 stroke-slate-400 dark:fill-neutral-950/20 dark:stroke-slate-500" strokeWidth="1.5" strokeDasharray="4,4" />
                    <polygon points="150,50 295,100 250,170 105,120" className="fill-none stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="150" y1="50" x2="250" y2="170" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1.5" strokeDasharray="5,3" />
                    <line x1="295" y1="100" x2="105" y2="120" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1.5" strokeDasharray="5,3" />
                    <circle cx="150" cy="50" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="60" cy="190" r="5" className="fill-slate-400 dark:fill-slate-500" />
                    <circle cx="250" cy="170" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="105" cy="120" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="295" cy="100" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="200" cy="110" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <text x="140" y="38" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="40" y="212" fontSize="15" className="fill-slate-500 dark:fill-slate-400 font-bold">B</text>
                    <text x="258" y="188" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="78" y="133" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">I</text>
                    <text x="303" y="98" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">K</text>
                    <text x="207" y="103" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">J</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={2}>
                  <p>J est le milieu de <strong>[AC]</strong> (donné).</p>
                  <p>K est le symétrique du point I par rapport au point J, donc <strong>J</strong> est le milieu de <strong>[IK]</strong>.</p>
                  <p>Or si un quadrilatère a <strong>ses diagonales qui se coupent en leur milieu</strong>, alors c&apos;est un parallélogramme.</p>
                  <p>Donc <strong>AKCI est un parallélogramme</strong> et son centre est <strong>J</strong>.</p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="ABCD et DBEC, deux parallélogrammes"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">
                  <strong>ABCD</strong> et <strong>DBEC</strong> sont des parallélogrammes. Montrer que le point <strong>B</strong> est le
                  milieu de <strong>[AE]</strong>.
                </p>
                <FigureBox>
                  <svg viewBox="0 0 360 220" className="mx-auto h-auto w-full max-w-sm">
                    <polygon points="70,70 180,70 220,170 110,170" className="fill-indigo-100/70 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <polygon points="110,170 180,70 290,70 220,170" className="fill-rose-100/70 stroke-rose-500 dark:fill-rose-950/20 dark:stroke-rose-400" strokeWidth="2.5" />
                    <circle cx="70" cy="70" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="180" cy="70" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="290" cy="70" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="110" cy="170" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="220" cy="170" r="5" className="fill-slate-700 dark:fill-slate-300" />
                    <text x="52" y="60" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="176" y="55" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="296" y="60" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
                    <text x="90" y="196" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                    <text x="224" y="196" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-3">
                <CorrectionCard>ABCD est un parallélogramme, donc <strong>(AB) // (DC)</strong> et <strong>AB = DC</strong> (côtés opposés).</CorrectionCard>
                <CorrectionCard>DBEC est un parallélogramme, donc <strong>(BE) // (DC)</strong> et <strong>BE = DC</strong> (côtés opposés).</CorrectionCard>
                <CorrectionCard>(AB) et (BE) sont toutes deux parallèles à (DC) et passent par le point B, donc elles sont confondues : les points <strong>A, B, E sont alignés</strong>.</CorrectionCard>
                <CorrectionCard>Or AB = DC et BE = DC, donc <strong>AB = BE</strong>.</CorrectionCard>
                <CorrectionCard><strong>Puisque A, B, E sont alignés et AB = BE, le point B est le milieu de [AE].</strong></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Calculer les angles de ABCD"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">Calculer la mesure de chaque angle du parallélogramme <strong>ABCD</strong>. Justifier.</p>
                <FigureBox>
                  <svg viewBox="0 0 380 220" className="mx-auto h-auto w-full max-w-sm">
                    <polygon points="110,60 250,60 210,180 70,180" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="70" y1="180" x2="330" y2="180" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.5" markerEnd="url(#arrow-gray-para)" />
                    <path d="M218.2,155.3 A26,26 0 0,1 236,180" className="fill-none stroke-rose-500 dark:stroke-rose-400" strokeWidth="2.25" />
                    <text x="222" y="150" fontSize="13" className="fill-rose-600 dark:fill-rose-400 font-bold">124°</text>
                    <circle cx="110" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="250" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="210" cy="180" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="70" cy="180" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <text x="94" y="48" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="257" y="48" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="216" y="202" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="52" y="202" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                    <text x="336" y="196" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-3">
                <CorrectionCard>D, C, E sont alignés, donc BĈD et BĈE sont supplémentaires (angles adjacents et de côtés opposés) : <strong>BĈD = 180° − 124° = 56°</strong>.</CorrectionCard>
                <CorrectionCard>ABCD est un parallélogramme : les angles opposés sont isométriques, donc <strong>DÂB = BĈD = 56°</strong>.</CorrectionCard>
                <CorrectionCard>Les angles consécutifs sont supplémentaires : AB̂C = 180° − BĈD = 180° − 56° = <strong>124°</strong>. De même <strong>CD̂A = 124°</strong> (opposé à AB̂C).</CorrectionCard>
                <CorrectionCard><strong>Résumé : DÂB = 56° ; AB̂C = 124° ; BĈD = 56° ; CD̂A = 124°.</strong></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Construction et symétrique de A"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                <li>Construire un triangle ABC tel que : AB = 5 cm ; mes Â = 30° et mes B̂ = 50°.</li>
                <li>a) Placer le point I milieu du segment [BC]. b) Placer le point K symétrique de A par rapport au point I.</li>
                <li>Quelle est la nature du quadrilatère ABKC ? Justifier la réponse.</li>
                <li>Calculer : mes BK̂C ; mes AB̂K et mes CB̂K.</li>
              </ol>
            }
            correction={
              <div className="space-y-3">
                <CorrectionCard n={1}>Tracer [AB] = 5 cm ; en A, tracer une demi-droite formant 30° avec (AB) ; en B, tracer une demi-droite formant 50° avec (BA) du même côté ; leur point d&apos;intersection est C.</CorrectionCard>
                <CorrectionCard n={2}>I est le milieu de [BC] (mesurer BC et reporter la moitié). K est placé sur la demi-droite [AI) tel que IK = IA.</CorrectionCard>
                <FigureBox>
                  <svg viewBox="0 0 320 290" className="mx-auto h-auto w-full max-w-xs">
                    <polygon points="150,40 60,160 170,270 260,150" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <line x1="150" y1="40" x2="170" y2="270" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1.5" strokeDasharray="5,3" />
                    <line x1="60" y1="160" x2="260" y2="150" className="stroke-rose-500 dark:stroke-rose-400" strokeWidth="1.5" strokeDasharray="5,3" />
                    <circle cx="150" cy="40" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="60" cy="160" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="170" cy="270" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="260" cy="150" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="160" cy="155" r="4.5" className="fill-slate-800 dark:fill-slate-200" />
                    <text x="135" y="28" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="34" y="155" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="176" y="284" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">K</text>
                    <text x="268" y="145" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="167" y="148" fontSize="14" className="fill-slate-700 dark:fill-slate-200 font-bold">I</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={3}>
                  Dans le quadrilatère ABKC, les diagonales sont [AK] et [BC]. I est le milieu de [BC] (construction) et le milieu de [AK] (K
                  symétrique de A par rapport à I). Les diagonales se coupent en leur milieu, donc <strong>ABKC est un parallélogramme</strong>{" "}
                  (propriété réciproque des diagonales), de centre I.
                </CorrectionCard>
                <CorrectionCard n={4}>
                  <p>Dans le triangle ABC : Â + B̂ + Ĉ = 180°, donc AĈB = 180° − 30° − 50° = 100°.</p>
                  <p><strong>BK̂C = BÂC = 30°</strong> (angles opposés du parallélogramme ABKC : sommets A et K opposés).</p>
                  <p><strong>AB̂K = 180° − 30° = 150°</strong> (angles consécutifs du parallélogramme, sommets A et B).</p>
                  <p>La diagonale [BC] partage l&apos;angle AB̂K, donc AB̂K = AB̂C + CB̂K, d&apos;où <strong>CB̂K = 150° − 50° = 100°</strong>.</p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Parallélogramme ABCD, symétriques E et F"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                <li>Construis le parallélogramme ABCD de centre O tel que : AB = 8 cm, BÂC = 40° et AB̂D = 30°.</li>
                <li>Place le point I milieu de [AB] et le point J milieu de [BC].</li>
                <li>Construis E symétrique de D par rapport à I et le point F symétrique de D par rapport à J.</li>
                <li>Quelle est la nature des quadrilatères AEBD et DBFC ? Justifie ta réponse.</li>
                <li>Les points A, B et F sont-ils alignés ? Justifie ta réponse.</li>
              </ol>
            }
            correction={
              <div className="space-y-3">
                <CorrectionCard n={1}>
                  Tracer [AB] = 8 cm. En A, tracer la demi-droite [Ax) telle que BÂx = 40° : c&apos;est le support de la diagonale (AC). En B,
                  tracer la demi-droite [By) telle que AB̂y = 30°, du même côté : c&apos;est le support de la diagonale (BD). Ces deux
                  demi-droites se coupent en <strong>O</strong>, le centre. Placer C symétrique de A par rapport à O, et D symétrique de B par
                  rapport à O, puis tracer le parallélogramme.
                </CorrectionCard>
                <CorrectionCard n={2}>I = milieu de [AB], J = milieu de [BC] (mesurer et reporter la moitié).</CorrectionCard>
                <CorrectionCard n={3}>E est placé tel que I soit le milieu de [DE]. F est placé tel que J soit le milieu de [DF].</CorrectionCard>
                <FigureBox caption="En rose : AEBD. En bleu : DBFC. La ligne pointillée montre l'alignement A, B, F.">
                  <svg viewBox="0 0 500 270" className="mx-auto h-auto w-full max-w-md">
                    <polygon points="60,150 260,150 320,60 120,60" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <polygon points="60,150 200,240 260,150 120,60" className="fill-none stroke-rose-500 dark:stroke-rose-400" strokeWidth="2" />
                    <polygon points="120,60 260,150 460,150 320,60" className="fill-none stroke-sky-500 dark:stroke-sky-400" strokeWidth="2" />
                    <line x1="40" y1="150" x2="480" y2="150" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.5" strokeDasharray="5,4" />
                    <line x1="60" y1="150" x2="320" y2="60" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.25" strokeDasharray="4,4" />
                    <line x1="260" y1="150" x2="120" y2="60" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.25" strokeDasharray="4,4" />
                    <circle cx="60" cy="150" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="260" cy="150" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="320" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="120" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="190" cy="105" r="4" className="fill-slate-700 dark:fill-slate-300" />
                    <circle cx="160" cy="150" r="4" className="fill-slate-700 dark:fill-slate-300" />
                    <circle cx="290" cy="105" r="4" className="fill-slate-700 dark:fill-slate-300" />
                    <circle cx="200" cy="240" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="460" cy="150" r="5" className="fill-sky-600 dark:fill-sky-400" />
                    <text x="42" y="168" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="266" y="145" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="326" y="52" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="102" y="52" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                    <text x="196" y="98" fontSize="13" className="fill-slate-700 dark:fill-slate-200 font-bold">O</text>
                    <text x="150" y="172" fontSize="13" className="fill-slate-700 dark:fill-slate-200 font-bold">I</text>
                    <text x="296" y="98" fontSize="13" className="fill-slate-700 dark:fill-slate-200 font-bold">J</text>
                    <text x="197" y="260" fontSize="15" className="fill-rose-600 dark:fill-rose-400 font-bold">E</text>
                    <text x="468" y="145" fontSize="15" className="fill-sky-600 dark:fill-sky-400 font-bold">F</text>
                  </svg>
                </FigureBox>
                <CorrectionCard n={4}>
                  <p>Dans <strong>AEBD</strong>, les diagonales sont [AB] et [ED]. I est le milieu de [AB] (construction) et le milieu de [ED]
                  (E symétrique de D par rapport à I) ⟹ <strong>AEBD est un parallélogramme</strong> de centre I.</p>
                  <p>Dans <strong>DBFC</strong>, les diagonales sont [DF] et [BC]. J est le milieu de [BC] (construction) et le milieu de [DF]
                  (F symétrique de D par rapport à J) ⟹ <strong>DBFC est un parallélogramme</strong> de centre J.</p>
                </CorrectionCard>
                <CorrectionCard n={5}>
                  <p>DBFC est un parallélogramme, donc (BF) // (DC) et BF = DC (côtés opposés). ABCD est un parallélogramme, donc (AB) // (DC)
                  et AB = DC (côtés opposés).</p>
                  <p>(AB) et (BF) sont toutes deux parallèles à (DC) et passent par B, donc elles sont confondues : <strong>les points A, B et F sont alignés</strong>.</p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="ABCD et BEFC, deux parallélogrammes"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">On considère la figure ci-dessous où <strong>ABCD</strong> et <strong>BEFC</strong> sont des parallélogrammes.</p>
                <ol className="mb-4 list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Donne, en justifiant, deux droites parallèles à la droite (BC).</li>
                  <li>Démontre que AEFD est un parallélogramme.</li>
                  <li>Démontre que les segments [AF] et [ED] se coupent en leur milieu.</li>
                </ol>
                <FigureBox>
                  <svg viewBox="0 0 400 260" className="mx-auto h-auto w-full max-w-sm">
                    <polygon points="90,60 230,60 200,180 60,180" className="fill-indigo-50 stroke-indigo-600 dark:fill-neutral-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <polygon points="230,60 340,110 310,230 200,180" className="fill-rose-50 stroke-rose-500 dark:fill-rose-950/20 dark:stroke-rose-400" strokeWidth="2.5" />
                    <circle cx="90" cy="60" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="230" cy="60" r="5" className="fill-slate-800 dark:fill-slate-200" />
                    <circle cx="200" cy="180" r="5" className="fill-slate-700 dark:fill-slate-300" />
                    <circle cx="60" cy="180" r="5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="340" cy="110" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="310" cy="230" r="5" className="fill-rose-600 dark:fill-rose-400" />
                    <text x="74" y="48" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="236" y="48" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="206" y="200" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="40" y="200" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                    <text x="348" y="104" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
                    <text x="314" y="252" fontSize="16" className="fill-slate-700 dark:fill-slate-200 font-bold">F</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-3">
                <CorrectionCard n={1}>ABCD est un parallélogramme, donc <strong>(AD) // (BC)</strong> (côtés opposés). BEFC est un parallélogramme, donc <strong>(EF) // (BC)</strong> (côtés opposés). Les deux droites cherchées sont donc (AD) et (EF).</CorrectionCard>
                <CorrectionCard n={2}>
                  <p>(AD) // (BC) et (EF) // (BC), donc <strong>(AD) // (EF)</strong> (même direction).</p>
                  <p>Or AD = BC (ABCD parallélogramme) et BC = EF (BEFC parallélogramme), donc <strong>AD = EF</strong>.</p>
                  <p>Le quadrilatère AEFD a donc deux côtés opposés [AD] et [EF] isométriques et de supports parallèles, donc <strong>AEFD est un parallélogramme</strong> (propriété réciproque particulière).</p>
                </CorrectionCard>
                <CorrectionCard n={3}>AEFD étant un parallélogramme (question 2), ses diagonales sont justement <strong>[AF] et [ED]</strong> (sommets opposés). Or dans un parallélogramme, les diagonales se coupent en leur milieu (propriété directe). Donc <strong>[AF] et [ED] se coupent en leur milieu</strong>.</CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
