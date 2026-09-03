import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Les Quadrilatères Particuliers · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur les quadrilatères particuliers (1ère année collège) : rectangle, losange et carré, définitions, propriétés des diagonales, axes et centre de symétrie, avec 7 exercices corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 5",
  heroTitle: "Les Quadrilatères Particuliers",
  heroSubtitle:
    "Rectangle, losange, carré : définitions, diagonales et axes de symétrie, avec 7 exercices corrigés en détail.",
  footerNote: "Les quadrilatères particuliers · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "rectangle", label: "Rectangle" },
    { id: "losange", label: "Losange" },
    { id: "carre", label: "Carré" },
    { id: "memo", label: "Mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Plain narrative reasoning step used inside multi-step corrections. */
function Step({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">{children}</div>;
}

/** Wrapper for a small illustrative diagram, optionally captioned. */
function Diagram({ children, caption }: { children: ReactNode; caption?: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      {children}
      {caption ? <p className="mt-1 text-center text-xs font-semibold text-foreground-muted">{caption}</p> : null}
    </div>
  );
}

/** Colored definition / property statement box. */
function Statement({
  tone,
  children,
}: {
  tone: "sky" | "rose" | "violet";
  children: ReactNode;
}) {
  const cls =
    tone === "sky"
      ? "border-sky-200 bg-sky-50 text-sky-800"
      : tone === "rose"
        ? "border-rose-200 bg-rose-50 text-rose-800"
        : "border-violet-200 bg-violet-50 text-violet-800";
  return <div className={`rounded-xl border p-4 text-center text-sm font-medium ${cls}`}>{children}</div>;
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "3", label: "quadrilatères" },
          { value: "7", label: "exercices" },
          { value: "100%", label: "corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#rectangle"
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
          <svg viewBox="0 0 200 200" className="h-40 w-40 sm:h-56 sm:w-56" fill="none">
            <rect x="30" y="30" width="140" height="140" rx="4" stroke="white" strokeWidth="3" />
            <line x1="30" y1="30" x2="170" y2="170" stroke="#fb923c" strokeWidth="2.5" strokeDasharray="6,5" />
            <line x1="170" y1="30" x2="30" y2="170" stroke="#fb923c" strokeWidth="2.5" strokeDasharray="6,5" />
            <circle cx="100" cy="100" r="4" fill="#fb923c" />
          </svg>
        }
      />

      {/* ===================== I. LE RECTANGLE ===================== */}
      <LessonSection
        id="rectangle"
        kicker="01 · Le rectangle"
        title="Le rectangle"
        tone="light"
        description="Un parallélogramme qui a un angle droit."
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 rounded-2xl border-2 border-sky-200 bg-sky-50 p-5 md:order-1">
            <p className="mb-2 text-xs font-bold text-sky-500 uppercase">Définition</p>
            <p className="leading-relaxed text-foreground">
              Le <strong>rectangle</strong> est un <strong>parallélogramme</strong> qui a <strong>un angle droit</strong>.
            </p>
          </div>
          <div className="order-1 rounded-2xl border border-border bg-surface p-5 md:order-2">
            <p className="mb-3 text-xs font-bold text-indigo-500 uppercase">Exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Soit <strong>ABCD</strong> un rectangle.
            </p>
            <svg viewBox="0 0 340 220" className="mx-auto h-auto w-full max-w-xs">
              <rect x="70" y="50" width="200" height="120" className="fill-sky-50 stroke-sky-600" strokeWidth="2.5" />
              <path d="M70,66 L86,66 L86,50" className="stroke-slate-600" fill="none" strokeWidth="2" />
              <circle cx="70" cy="50" r="5" className="fill-sky-600" />
              <circle cx="270" cy="50" r="5" className="fill-sky-600" />
              <circle cx="270" cy="170" r="5" className="fill-sky-600" />
              <circle cx="70" cy="170" r="5" className="fill-sky-600" />
              <text x="54" y="40" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="277" y="40" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="277" y="192" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="54" y="192" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </div>
        </div>

        <Callout variant="warning" title="Remarque importante">
          Toutes les propriétés du parallélogramme s&apos;appliquent au rectangle (côtés opposés isométriques,
          diagonales de même milieu, angles opposés isométriques, angles consécutifs supplémentaires…).
        </Callout>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Propriété des diagonales</h3>
          <p className="mb-4 text-sm text-foreground-muted">Ce que l&apos;on peut dire de la longueur des diagonales</p>

          <p className="mb-2 text-xs font-bold text-sky-500 uppercase">a) Propriété directe</p>
          <Statement tone="sky">
            Si un quadrilatère est un rectangle, alors ses diagonales ont <strong>même longueur</strong>.
          </Statement>
          <p className="mt-3 mb-5 text-center text-sm text-foreground-muted">
            Autrement dit : si <strong>ABCD</strong> est un rectangle, alors <Math tex="AC = BD" />.
          </p>
          <Diagram>
            <svg viewBox="0 0 340 220" className="mx-auto h-auto w-full max-w-xs">
              <rect x="70" y="50" width="200" height="120" className="fill-sky-50 stroke-sky-600" strokeWidth="2.5" />
              <line x1="70" y1="50" x2="270" y2="170" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="5,4" />
              <line x1="270" y1="50" x2="70" y2="170" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="5,4" />
              <circle cx="70" cy="50" r="5" className="fill-sky-600" />
              <circle cx="270" cy="50" r="5" className="fill-sky-600" />
              <circle cx="270" cy="170" r="5" className="fill-sky-600" />
              <circle cx="70" cy="170" r="5" className="fill-sky-600" />
              <circle cx="170" cy="110" r="4.5" className="fill-slate-800" />
              <text x="54" y="40" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="277" y="40" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="277" y="192" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="54" y="192" fontSize="16" className="fill-slate-700 font-bold">D</text>
              <text x="176" y="103" fontSize="14" className="fill-slate-700 font-bold">O</text>
            </svg>
          </Diagram>

          <p className="mt-6 mb-2 text-xs font-bold text-sky-500 uppercase">b) Propriété réciproque</p>
          <Statement tone="sky">
            Si les diagonales d&apos;un parallélogramme ont <strong>même longueur</strong>, alors{" "}
            <strong>c&apos;est un rectangle</strong>.
          </Statement>
          <p className="mt-3 text-center text-sm text-foreground-muted">
            Autrement dit : si <strong>ABCD</strong> est un parallélogramme tel que <Math tex="AC = BD" />, alors
            c&apos;est un rectangle.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-4 font-display text-xl font-bold text-foreground">Axes et centre de symétrie</h3>
          <Statement tone="sky">
            Le rectangle a <strong>deux axes de symétrie</strong> : les médiatrices de ses côtés. Il a aussi un{" "}
            <strong>centre de symétrie</strong> : son centre.
          </Statement>
          <Diagram>
            <svg viewBox="0 0 340 220" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <rect x="70" y="50" width="200" height="120" className="fill-sky-50 stroke-sky-600" strokeWidth="2.5" />
              <line x1="55" y1="110" x2="285" y2="110" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="6,4" />
              <line x1="170" y1="35" x2="170" y2="185" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="6,4" />
              <circle cx="70" cy="50" r="5" className="fill-sky-600" />
              <circle cx="270" cy="50" r="5" className="fill-sky-600" />
              <circle cx="270" cy="170" r="5" className="fill-sky-600" />
              <circle cx="70" cy="170" r="5" className="fill-sky-600" />
              <circle cx="170" cy="110" r="5" className="fill-slate-800" />
              <text x="54" y="40" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="277" y="40" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="277" y="192" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="54" y="192" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </Diagram>
        </div>
      </LessonSection>

      {/* ===================== II. LE LOSANGE ===================== */}
      <LessonSection
        id="losange"
        kicker="02 · Le losange"
        title="Le losange"
        tone="muted"
        description="Un parallélogramme qui a deux côtés consécutifs égaux."
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 md:order-1">
            <p className="mb-2 text-xs font-bold text-rose-500 uppercase">Définition</p>
            <p className="leading-relaxed text-foreground">
              Le <strong>losange</strong> est un <strong>parallélogramme</strong> qui a{" "}
              <strong>deux côtés consécutifs de même longueur</strong>.
            </p>
          </div>
          <div className="order-1 rounded-2xl border border-border bg-surface p-5 md:order-2">
            <p className="mb-3 text-xs font-bold text-indigo-500 uppercase">Exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Soit <strong>ABCD</strong> un losange. On a : <Math tex="AB = BC = CD = DA" />.
            </p>
            <svg viewBox="0 0 320 240" className="mx-auto h-auto w-full max-w-xs">
              <polygon points="160,30 238,125 160,220 82,125" className="fill-rose-50 stroke-rose-600" strokeWidth="2.5" />
              <g className="stroke-slate-600" strokeWidth="2">
                <line x1="195" y1="73.5" x2="203" y2="81.5" />
                <line x1="195" y1="168.5" x2="203" y2="176.5" />
                <line x1="117" y1="168.5" x2="125" y2="176.5" />
                <line x1="117" y1="73.5" x2="125" y2="81.5" />
              </g>
              <circle cx="160" cy="30" r="5" className="fill-rose-600" />
              <circle cx="238" cy="125" r="5" className="fill-rose-600" />
              <circle cx="160" cy="220" r="5" className="fill-rose-600" />
              <circle cx="82" cy="125" r="5" className="fill-rose-600" />
              <text x="152" y="21" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="248" y="129" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="152" y="238" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="58" y="129" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </div>
        </div>

        <Callout variant="warning" title="Remarque importante">
          Toutes les propriétés du parallélogramme s&apos;appliquent au losange (côtés opposés isométriques,
          diagonales de même milieu, angles opposés isométriques, angles consécutifs supplémentaires…).
        </Callout>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Propriété des diagonales</h3>
          <p className="mb-4 text-sm text-foreground-muted">Ce que l&apos;on peut dire de la direction des diagonales</p>

          <p className="mb-2 text-xs font-bold text-rose-500 uppercase">a) Propriété directe</p>
          <Statement tone="rose">
            Si un quadrilatère est un losange, alors ses diagonales sont <strong>perpendiculaires</strong>.
          </Statement>
          <p className="mt-3 mb-5 text-center text-sm text-foreground-muted">
            Autrement dit : si <strong>ABCD</strong> est un losange, alors <Math tex="(AC) \perp (BD)" />.
          </p>
          <Diagram>
            <svg viewBox="0 0 320 240" className="mx-auto h-auto w-full max-w-xs">
              <polygon points="160,30 238,125 160,220 82,125" className="fill-rose-50 stroke-rose-600" strokeWidth="2.5" />
              <line x1="160" y1="30" x2="160" y2="220" className="stroke-violet-500" strokeWidth="1.75" strokeDasharray="5,4" />
              <line x1="238" y1="125" x2="82" y2="125" className="stroke-violet-500" strokeWidth="1.75" strokeDasharray="5,4" />
              <path d="M160,113 L172,113 L172,125" className="stroke-slate-600" fill="none" strokeWidth="2" />
              <circle cx="160" cy="30" r="5" className="fill-rose-600" />
              <circle cx="238" cy="125" r="5" className="fill-rose-600" />
              <circle cx="160" cy="220" r="5" className="fill-rose-600" />
              <circle cx="82" cy="125" r="5" className="fill-rose-600" />
              <text x="152" y="21" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="248" y="129" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="152" y="238" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="58" y="129" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </Diagram>

          <p className="mt-6 mb-2 text-xs font-bold text-rose-500 uppercase">b) Propriété réciproque</p>
          <Statement tone="rose">
            Si les diagonales d&apos;un parallélogramme sont <strong>perpendiculaires</strong>, alors{" "}
            <strong>c&apos;est un losange</strong>.
          </Statement>
          <p className="mt-3 text-center text-sm text-foreground-muted">
            Autrement dit : si <strong>ABCD</strong> est un parallélogramme tel que <Math tex="(AC) \perp (BD)" />,
            alors c&apos;est un losange.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-4 font-display text-xl font-bold text-foreground">Axes et centre de symétrie</h3>
          <Statement tone="rose">
            Le losange a <strong>deux axes de symétrie</strong> : ses diagonales. Il a aussi un{" "}
            <strong>centre de symétrie</strong> : son centre.
          </Statement>
          <Diagram>
            <svg viewBox="0 0 320 240" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <polygon points="160,30 238,125 160,220 82,125" className="fill-rose-50 stroke-rose-600" strokeWidth="2.5" />
              <line x1="160" y1="12" x2="160" y2="238" className="stroke-violet-500" strokeWidth="1.75" strokeDasharray="6,4" />
              <line x1="255" y1="125" x2="65" y2="125" className="stroke-violet-500" strokeWidth="1.75" strokeDasharray="6,4" />
              <circle cx="160" cy="30" r="5" className="fill-rose-600" />
              <circle cx="238" cy="125" r="5" className="fill-rose-600" />
              <circle cx="160" cy="220" r="5" className="fill-rose-600" />
              <circle cx="82" cy="125" r="5" className="fill-rose-600" />
              <circle cx="160" cy="125" r="5" className="fill-slate-800" />
              <text x="152" y="21" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="248" y="129" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="152" y="238" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="58" y="129" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </Diagram>
        </div>
      </LessonSection>

      {/* ===================== III. LE CARRÉ ===================== */}
      <LessonSection
        id="carre"
        kicker="03 · Le carré"
        title="Le carré"
        tone="light"
        description="Un parallélogramme qui a un angle droit ET deux côtés consécutifs égaux."
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 rounded-2xl border-2 border-violet-200 bg-violet-50 p-5 md:order-1">
            <p className="mb-2 text-xs font-bold text-violet-500 uppercase">Définition</p>
            <p className="leading-relaxed text-foreground">
              Le <strong>carré</strong> est un <strong>parallélogramme</strong> qui a <strong>un angle droit</strong>{" "}
              et <strong>deux côtés consécutifs de même longueur</strong>.
            </p>
          </div>
          <div className="order-1 rounded-2xl border border-border bg-surface p-5 md:order-2">
            <p className="mb-3 text-xs font-bold text-indigo-500 uppercase">Exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Soit <strong>ABCD</strong> un carré.
            </p>
            <svg viewBox="0 0 320 220" className="mx-auto h-auto w-full max-w-xs">
              <rect x="90" y="40" width="140" height="140" className="fill-violet-50 stroke-violet-600" strokeWidth="2.5" />
              <path d="M90,56 L106,56 L106,40" className="stroke-slate-600" fill="none" strokeWidth="2" />
              <g className="stroke-slate-600" strokeWidth="2">
                <line x1="156" y1="40" x2="164" y2="48" />
                <line x1="230" y1="106" x2="222" y2="114" />
                <line x1="156" y1="180" x2="164" y2="172" />
                <line x1="90" y1="106" x2="98" y2="114" />
              </g>
              <circle cx="90" cy="40" r="5" className="fill-violet-600" />
              <circle cx="230" cy="40" r="5" className="fill-violet-600" />
              <circle cx="230" cy="180" r="5" className="fill-violet-600" />
              <circle cx="90" cy="180" r="5" className="fill-violet-600" />
              <text x="74" y="30" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="237" y="30" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="237" y="202" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="74" y="202" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </div>
        </div>

        <Callout variant="warning" title="Remarques importantes">
          <ol className="list-inside list-decimal space-y-1">
            <li>Toutes les propriétés du parallélogramme s&apos;appliquent au carré.</li>
            <li>
              Le carré est <strong>à la fois</strong> un rectangle et un losange.
            </li>
          </ol>
        </Callout>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 text-center md:p-7">
          <p className="mb-3 text-xs font-bold text-foreground-muted uppercase">
            Carré = Rectangle <Math tex="\cap" /> Losange
          </p>
          <svg viewBox="0 0 300 180" className="mx-auto h-auto w-full max-w-xs">
            <circle cx="115" cy="90" r="75" className="fill-sky-200/50 stroke-sky-500" strokeWidth="2" />
            <circle cx="185" cy="90" r="75" className="fill-rose-200/50 stroke-rose-500" strokeWidth="2" />
            <text x="68" y="95" textAnchor="middle" fontSize="15" className="fill-sky-700 font-bold">Rectangle</text>
            <text x="232" y="95" textAnchor="middle" fontSize="15" className="fill-rose-700 font-bold">Losange</text>
            <text x="150" y="95" textAnchor="middle" fontSize="14" className="fill-violet-700 font-extrabold">Carré</text>
          </svg>
          <p className="mt-2 text-sm text-foreground-muted">
            Le carré cumule toutes les propriétés du rectangle et toutes celles du losange.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Propriété des diagonales</h3>
          <p className="mb-4 text-sm text-foreground-muted">Le cumul des deux propriétés précédentes</p>

          <p className="mb-2 text-xs font-bold text-violet-500 uppercase">a) Propriété directe</p>
          <Statement tone="violet">
            Si un quadrilatère est un carré, alors ses diagonales sont <strong>perpendiculaires</strong> et ont{" "}
            <strong>même longueur</strong>.
          </Statement>
          <p className="mt-3 mb-5 text-center text-sm text-foreground-muted">
            Autrement dit : si <strong>ABCD</strong> est un carré, alors <Math tex="(AC) \perp (BD)" /> et{" "}
            <Math tex="AC = BD" />.
          </p>
          <Diagram>
            <svg viewBox="0 0 320 220" className="mx-auto h-auto w-full max-w-xs">
              <rect x="90" y="40" width="140" height="140" className="fill-violet-50 stroke-violet-600" strokeWidth="2.5" />
              <line x1="90" y1="40" x2="230" y2="180" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="5,4" />
              <line x1="230" y1="40" x2="90" y2="180" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="5,4" />
              <path d="M160,99 L169,99 L169,110 L160,110 Z" className="fill-none stroke-slate-600" strokeWidth="1.75" />
              <circle cx="90" cy="40" r="5" className="fill-violet-600" />
              <circle cx="230" cy="40" r="5" className="fill-violet-600" />
              <circle cx="230" cy="180" r="5" className="fill-violet-600" />
              <circle cx="90" cy="180" r="5" className="fill-violet-600" />
              <text x="74" y="30" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="237" y="30" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="237" y="202" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="74" y="202" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </Diagram>

          <p className="mt-6 mb-2 text-xs font-bold text-violet-500 uppercase">b) Propriété réciproque</p>
          <Statement tone="violet">
            Si les diagonales d&apos;un parallélogramme sont <strong>perpendiculaires</strong> et ont{" "}
            <strong>même longueur</strong>, alors <strong>c&apos;est un carré</strong>.
          </Statement>
          <p className="mt-3 text-center text-sm text-foreground-muted">
            Autrement dit : si <strong>ABCD</strong> est un parallélogramme tel que <Math tex="(AC) \perp (BD)" /> et{" "}
            <Math tex="AC = BD" />, alors c&apos;est un carré.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-4 font-display text-xl font-bold text-foreground">Axes et centre de symétrie</h3>
          <Statement tone="violet">
            Le carré a <strong>quatre axes de symétrie</strong> : ses diagonales et les médiatrices de ses côtés. Il a
            aussi un <strong>centre de symétrie</strong> : son centre.
          </Statement>
          <Diagram>
            <svg viewBox="0 0 320 220" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <rect x="90" y="40" width="140" height="140" className="fill-violet-50 stroke-violet-600" strokeWidth="2.5" />
              <line x1="79" y1="29" x2="241" y2="191" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="6,4" />
              <line x1="241" y1="29" x2="79" y2="191" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="6,4" />
              <line x1="160" y1="25" x2="160" y2="195" className="stroke-sky-500" strokeWidth="1.5" strokeDasharray="6,4" />
              <line x1="75" y1="110" x2="245" y2="110" className="stroke-sky-500" strokeWidth="1.5" strokeDasharray="6,4" />
              <circle cx="90" cy="40" r="5" className="fill-violet-600" />
              <circle cx="230" cy="40" r="5" className="fill-violet-600" />
              <circle cx="230" cy="180" r="5" className="fill-violet-600" />
              <circle cx="90" cy="180" r="5" className="fill-violet-600" />
              <circle cx="160" cy="110" r="5" className="fill-slate-800" />
              <text x="74" y="24" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="245" y="24" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="245" y="204" fontSize="16" className="fill-slate-700 font-bold">C</text>
              <text x="70" y="204" fontSize="16" className="fill-slate-700 font-bold">D</text>
            </svg>
          </Diagram>
        </div>
      </LessonSection>

      {/* ===================== IV. FICHE MEMO ===================== */}
      <LessonSection
        id="memo"
        kicker="04 · Fiche mémo"
        title="Fiche mémo"
        tone="muted"
        description="Les trois quadrilatères en un coup d'œil, pour réviser vite."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-lg font-bold text-sky-600">▭</span>
              <h3 className="font-display font-bold text-foreground">Rectangle</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <strong>Définition :</strong> parallélogramme + 1 angle droit.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Diagonales :</strong> égales, même milieu.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Symétrie :</strong> 2 axes (médiatrices des côtés) + centre.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-lg font-bold text-rose-600">◇</span>
              <h3 className="font-display font-bold text-foreground">Losange</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <strong>Définition :</strong> parallélogramme + 2 côtés consécutifs égaux.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Diagonales :</strong> perpendiculaires, même milieu.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Symétrie :</strong> 2 axes (les diagonales) + centre.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-lg font-bold text-violet-600">◆</span>
              <h3 className="font-display font-bold text-foreground">Carré</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <strong>Définition :</strong> parallélogramme + angle droit + 2 côtés consécutifs égaux.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Diagonales :</strong> égales ET perpendiculaires, même milieu.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Symétrie :</strong> 4 axes (diagonales + médiatrices) + centre.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-gradient-to-r from-sky-50 via-violet-50 to-rose-50 p-5 sm:col-span-3">
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
                <Math tex="\cap" className="text-white" />
              </span>
              <h3 className="font-display font-bold text-foreground">À retenir : Carré = Rectangle ∩ Losange</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              Pour prouver qu&apos;un quadrilatère est un <strong>carré</strong>, il suffit de prouver que c&apos;est{" "}
              <strong>à la fois un rectangle et un losange</strong>, ou d&apos;utiliser directement la propriété des
              diagonales (perpendiculaires <em>et</em> de même longueur).
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="7 exercices corrigés"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les quadrilatères particuliers.">
          <ExerciseCard
            id="1"
            index={1}
            title="Constructions"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                <li>
                  Construire un rectangle <strong>ABCD</strong> de centre <strong>O</strong> tel que :{" "}
                  <Math tex="AC = 5\text{ cm}" /> et <Math tex="\widehat{AOB} = 110°" />.
                </li>
                <li>
                  Construire un losange <strong>MNPQ</strong> tel que : <Math tex="MP = 4\text{ cm}" /> et{" "}
                  <Math tex="NQ = 2\text{ cm}" />.
                </li>
                <li>
                  Construire un carré <strong>EFGH</strong> de centre <strong>I</strong> tel que :{" "}
                  <Math tex="EI = 4{,}5\text{ cm}" />.
                </li>
              </ol>
            }
            correction={
              <div className="space-y-3">
                <Step>
                  <strong>1)</strong> On trace [AC] = 5 cm puis son milieu O (dans un rectangle, les diagonales se
                  coupent en leur milieu et ont même longueur, donc OA = OB = OC = OD = 2,5 cm). En O, on construit
                  une demi-droite formant 110° avec [OA], sur laquelle on place B tel que OB = 2,5 cm. D, symétrique
                  de B par rapport à O, complète le rectangle.
                </Step>
                <Step>
                  <strong>2)</strong> On trace la diagonale [MP] = 4 cm puis son milieu O&apos;. La seconde diagonale
                  [NQ] est portée par la perpendiculaire à (MP) en O&apos; (diagonales perpendiculaires dans un
                  losange) : on place N et Q de part et d&apos;autre de O&apos; avec O&apos;N = O&apos;Q = 1 cm.
                </Step>
                <Step>
                  <strong>3)</strong> Puisque I est le centre, EG = 2 × EI = 9 cm. On trace [EG] = 9 cm puis son
                  milieu I. La seconde diagonale [FH] est portée par la perpendiculaire à (EG) en I (diagonales
                  perpendiculaires et isométriques dans un carré) : on place F et H avec IF = IH = 4,5 cm.
                </Step>
                <div className="grid gap-4 pt-1 sm:grid-cols-3">
                  <Diagram caption="AC = 5 cm ; AÔB = 110°">
                    <svg viewBox="0 0 200 150" className="mx-auto h-auto w-full max-w-[180px]">
                      <rect x="35" y="30" width="130" height="85" className="fill-sky-50 stroke-sky-600" strokeWidth="2" />
                      <line x1="35" y1="30" x2="165" y2="115" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="4,3" />
                      <line x1="165" y1="30" x2="35" y2="115" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="4,3" />
                      <circle cx="35" cy="30" r="4" className="fill-sky-600" />
                      <circle cx="165" cy="30" r="4" className="fill-sky-600" />
                      <circle cx="165" cy="115" r="4" className="fill-sky-600" />
                      <circle cx="35" cy="115" r="4" className="fill-sky-600" />
                      <circle cx="100" cy="72.5" r="3.5" className="fill-slate-800" />
                      <text x="22" y="22" fontSize="13" className="fill-slate-700 font-bold">A</text>
                      <text x="172" y="22" fontSize="13" className="fill-slate-700 font-bold">B</text>
                      <text x="172" y="132" fontSize="13" className="fill-slate-700 font-bold">C</text>
                      <text x="22" y="132" fontSize="13" className="fill-slate-700 font-bold">D</text>
                      <text x="105" y="66" fontSize="12" className="fill-slate-700 font-bold">O</text>
                    </svg>
                  </Diagram>
                  <Diagram caption="MP = 4 cm ; NQ = 2 cm">
                    <svg viewBox="0 0 200 170" className="mx-auto h-auto w-full max-w-[180px]">
                      <polygon points="100,15 165,85 100,155 35,85" className="fill-rose-50 stroke-rose-600" strokeWidth="2" />
                      <line x1="100" y1="15" x2="100" y2="155" className="stroke-violet-500" strokeWidth="1.5" strokeDasharray="4,3" />
                      <line x1="165" y1="85" x2="35" y2="85" className="stroke-violet-500" strokeWidth="1.5" strokeDasharray="4,3" />
                      <circle cx="100" cy="15" r="4" className="fill-rose-600" />
                      <circle cx="165" cy="85" r="4" className="fill-rose-600" />
                      <circle cx="100" cy="155" r="4" className="fill-rose-600" />
                      <circle cx="35" cy="85" r="4" className="fill-rose-600" />
                      <text x="92" y="9" fontSize="13" className="fill-slate-700 font-bold">M</text>
                      <text x="172" y="89" fontSize="13" className="fill-slate-700 font-bold">N</text>
                      <text x="92" y="170" fontSize="13" className="fill-slate-700 font-bold">P</text>
                      <text x="14" y="89" fontSize="13" className="fill-slate-700 font-bold">Q</text>
                    </svg>
                  </Diagram>
                  <Diagram caption="EI = 4,5 cm">
                    <svg viewBox="0 0 200 170" className="mx-auto h-auto w-full max-w-[180px]">
                      <rect x="40" y="25" width="120" height="120" className="fill-violet-50 stroke-violet-600" strokeWidth="2" />
                      <line x1="40" y1="25" x2="160" y2="145" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="4,3" />
                      <line x1="160" y1="25" x2="40" y2="145" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="4,3" />
                      <circle cx="40" cy="25" r="4" className="fill-violet-600" />
                      <circle cx="160" cy="25" r="4" className="fill-violet-600" />
                      <circle cx="160" cy="145" r="4" className="fill-violet-600" />
                      <circle cx="40" cy="145" r="4" className="fill-violet-600" />
                      <circle cx="100" cy="85" r="3.5" className="fill-slate-800" />
                      <text x="27" y="18" fontSize="13" className="fill-slate-700 font-bold">E</text>
                      <text x="167" y="18" fontSize="13" className="fill-slate-700 font-bold">F</text>
                      <text x="167" y="162" fontSize="13" className="fill-slate-700 font-bold">G</text>
                      <text x="27" y="162" fontSize="13" className="fill-slate-700 font-bold">H</text>
                      <text x="105" y="79" fontSize="12" className="fill-slate-700 font-bold">I</text>
                    </svg>
                  </Diagram>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Rectangle"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>ABCD</strong> est un parallélogramme. Soit <strong>E</strong> le projeté orthogonal de A sur
                  (BC), et <strong>F</strong> un point de (AD) tel que : <Math tex="AF = EC" />.
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Faire une figure.</li>
                  <li>
                    Montrer que : <Math tex="EF = AC" />.
                  </li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-3">
                <Diagram>
                  <svg viewBox="0 0 320 210" className="mx-auto h-auto w-full max-w-sm">
                    <polygon points="100,50 50,170 230,170 280,50" className="fill-sky-50 stroke-sky-600" strokeWidth="2.5" />
                    <line x1="100" y1="50" x2="100" y2="170" className="stroke-slate-500" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M100,158 L112,158 L112,170" className="stroke-slate-600" fill="none" strokeWidth="1.75" />
                    <line x1="100" y1="50" x2="230" y2="170" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="5,4" />
                    <line x1="230" y1="50" x2="100" y2="170" className="stroke-rose-500" strokeWidth="1.75" strokeDasharray="5,4" />
                    <circle cx="100" cy="50" r="5" className="fill-sky-600" />
                    <circle cx="50" cy="170" r="5" className="fill-sky-600" />
                    <circle cx="230" cy="170" r="5" className="fill-sky-600" />
                    <circle cx="280" cy="50" r="5" className="fill-sky-600" />
                    <circle cx="100" cy="170" r="5" className="fill-slate-800" />
                    <circle cx="230" cy="50" r="5" className="fill-slate-800" />
                    <text x="86" y="38" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="34" y="188" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="236" y="188" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="286" y="42" fontSize="15" className="fill-slate-700 font-bold">D</text>
                    <text x="86" y="188" fontSize="14" className="fill-slate-700 font-bold">E</text>
                    <text x="236" y="42" fontSize="14" className="fill-slate-700 font-bold">F</text>
                  </svg>
                </Diagram>
                <Step>
                  ABCD est un parallélogramme, donc <strong>(AD) ∥ (BC)</strong> (côtés opposés). Comme F ∈ (AD) et
                  E ∈ (BC), on a <strong>(AF) ∥ (EC)</strong>.
                </Step>
                <Step>
                  Or <strong>AF = EC</strong> (donné). Le quadrilatère <strong>AFCE</strong> a donc un couple de
                  côtés opposés [AF] et [CE] isométriques et de supports parallèles :{" "}
                  <strong>AFCE est un parallélogramme</strong>.
                </Step>
                <Step>
                  De plus, <strong>(AE) ⊥ (BC)</strong> (E projeté orthogonal de A sur (BC)) et (AF) ∥ (BC), donc{" "}
                  <strong>(AE) ⊥ (AF)</strong> : l&apos;angle en A du parallélogramme AFCE est droit.
                </Step>
                <Step>
                  Un parallélogramme ayant un angle droit est un <strong>rectangle</strong>. Donc AFCE est un
                  rectangle.
                </Step>
                <Step>
                  <strong>
                    Dans un rectangle, les diagonales sont isométriques ; or les diagonales de AFCE sont justement
                    [AC] et [FE]. Donc EF = AC.
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Rectangle"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>M</strong> est un point de la médiatrice d&apos;un segment [AB].
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>
                    Construire les points <strong>C</strong> et <strong>D</strong>, symétriques respectifs des points
                    A et B par rapport à M.
                  </li>
                  <li>
                    Montrer que <strong>ABCD</strong> est un rectangle.
                  </li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-3">
                <Diagram>
                  <svg viewBox="0 0 280 210" className="mx-auto h-auto w-full max-w-sm">
                    <rect x="80" y="20" width="120" height="160" className="fill-sky-50 stroke-sky-600" strokeWidth="2.5" />
                    <line x1="140" y1="5" x2="140" y2="195" className="stroke-slate-400" strokeWidth="1.5" strokeDasharray="4,4" />
                    <line x1="80" y1="20" x2="200" y2="180" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="4,3" />
                    <line x1="200" y1="20" x2="80" y2="180" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="80" cy="180" r="5" className="fill-sky-600" />
                    <circle cx="200" cy="180" r="5" className="fill-sky-600" />
                    <circle cx="200" cy="20" r="5" className="fill-sky-600" />
                    <circle cx="80" cy="20" r="5" className="fill-sky-600" />
                    <circle cx="140" cy="100" r="5" className="fill-slate-800" />
                    <text x="64" y="198" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="206" y="198" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="206" y="16" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="64" y="16" fontSize="15" className="fill-slate-700 font-bold">D</text>
                    <text x="148" y="96" fontSize="14" className="fill-slate-700 font-bold">M</text>
                  </svg>
                </Diagram>
                <Step>
                  C symétrique de A par rapport à M <Math tex="\Rightarrow" /> <strong>M milieu de [AC]</strong>. D
                  symétrique de B par rapport à M <Math tex="\Rightarrow" /> <strong>M milieu de [BD]</strong>.
                </Step>
                <Step>
                  Les diagonales [AC] et [BD] de ABCD se coupent donc en leur milieu M :{" "}
                  <strong>ABCD est un parallélogramme</strong>.
                </Step>
                <Step>
                  M appartient à la médiatrice de [AB] (donné), donc <strong>MA = MB</strong>. Or M milieu de [AC]
                  donne MA = MC, et M milieu de [BD] donne MB = MD.
                </Step>
                <Step>
                  D&apos;où MA = MB = MC = MD, donc <strong>AC = 2MA = 2MB = BD</strong> : les diagonales sont
                  isométriques.
                </Step>
                <Step>
                  <strong>
                    Un parallélogramme dont les diagonales sont isométriques est un rectangle. Donc ABCD est un
                    rectangle.
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Losange"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                <li>
                  Construire un triangle <strong>MNK</strong> rectangle en N.
                </li>
                <li>
                  Construire <Math tex="S_N(M) = L" /> et <Math tex="S_N(K) = E" />.
                </li>
                <li>
                  Montrer que <strong>MKLE</strong> est un losange.
                </li>
              </ol>
            }
            correction={
              <div className="space-y-3">
                <Diagram>
                  <svg viewBox="0 0 260 230" className="mx-auto h-auto w-full max-w-sm">
                    <polygon points="130,50 230,130 130,210 30,130" className="fill-rose-50 stroke-rose-600" strokeWidth="2.5" />
                    <line x1="130" y1="50" x2="130" y2="210" className="stroke-slate-400" strokeWidth="1.25" strokeDasharray="4,3" />
                    <line x1="230" y1="130" x2="30" y2="130" className="stroke-slate-400" strokeWidth="1.25" strokeDasharray="4,3" />
                    <path d="M130,118 L142,118 L142,130" className="stroke-slate-600" fill="none" strokeWidth="1.75" />
                    <g className="stroke-slate-600" strokeWidth="2">
                      <line x1="176" y1="86" x2="184" y2="94" />
                      <line x1="176" y1="174" x2="184" y2="166" />
                      <line x1="76" y1="174" x2="84" y2="166" />
                      <line x1="76" y1="86" x2="84" y2="94" />
                    </g>
                    <circle cx="130" cy="50" r="5" className="fill-rose-600" />
                    <circle cx="230" cy="130" r="5" className="fill-rose-600" />
                    <circle cx="130" cy="210" r="5" className="fill-rose-600" />
                    <circle cx="30" cy="130" r="5" className="fill-rose-600" />
                    <circle cx="130" cy="130" r="4.5" className="fill-slate-800" />
                    <text x="120" y="40" fontSize="15" className="fill-slate-700 font-bold">M</text>
                    <text x="238" y="126" fontSize="15" className="fill-slate-700 font-bold">K</text>
                    <text x="120" y="228" fontSize="15" className="fill-slate-700 font-bold">L</text>
                    <text x="10" y="126" fontSize="15" className="fill-slate-700 font-bold">E</text>
                    <text x="112" y="146" fontSize="13" className="fill-slate-700 font-bold">N</text>
                  </svg>
                </Diagram>
                <Step>
                  <Math tex="L = S_N(M)" /> <Math tex="\Rightarrow" /> <strong>N milieu de [ML]</strong>.{" "}
                  <Math tex="E = S_N(K)" /> <Math tex="\Rightarrow" /> <strong>N milieu de [KE]</strong>.
                </Step>
                <Step>
                  Les diagonales [ML] et [KE] du quadrilatère MKLE se coupent donc en leur milieu N :{" "}
                  <strong>MKLE est un parallélogramme</strong>.
                </Step>
                <Step>
                  Le triangle MNK est rectangle en N, donc (NM) ⊥ (NK) : les diagonales{" "}
                  <strong>(ML) et (KE) de MKLE sont perpendiculaires</strong>.
                </Step>
                <Step>
                  <strong>
                    Un parallélogramme dont les diagonales sont perpendiculaires est un losange. Donc MKLE est un
                    losange.
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Rectangle & losange"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>OBC</strong> est un triangle équilatéral. Soit <strong>G</strong> le milieu de [BC].
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>
                    a) Construire les points A et D, symétriques respectifs des points C et B par rapport à O. b)
                    Montrer que <strong>ABCD</strong> est un rectangle.
                  </li>
                  <li>
                    a) Construire le point M, symétrique du point O par rapport à G. b) Montrer que{" "}
                    <strong>OCMB</strong> est un losange.
                  </li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Diagram>
                    <svg viewBox="0 0 240 240" className="mx-auto h-auto w-full max-w-[220px]">
                      <rect x="60" y="12" width="120" height="208" className="fill-sky-50 stroke-sky-600" strokeWidth="2.5" />
                      <polygon points="120,116 60,220 180,220" className="fill-amber-100/50 stroke-amber-500" strokeWidth="1.75" />
                      <circle cx="60" cy="12" r="5" className="fill-sky-600" />
                      <circle cx="180" cy="12" r="5" className="fill-sky-600" />
                      <circle cx="180" cy="220" r="5" className="fill-sky-600" />
                      <circle cx="60" cy="220" r="5" className="fill-sky-600" />
                      <circle cx="120" cy="116" r="5" className="fill-amber-600" />
                      <text x="44" y="8" fontSize="14" className="fill-slate-700 font-bold">A</text>
                      <text x="186" y="8" fontSize="14" className="fill-slate-700 font-bold">D</text>
                      <text x="186" y="236" fontSize="14" className="fill-slate-700 font-bold">C</text>
                      <text x="44" y="236" fontSize="14" className="fill-slate-700 font-bold">B</text>
                      <text x="128" y="112" fontSize="14" className="fill-slate-700 font-bold">O</text>
                    </svg>
                  </Diagram>
                  <Diagram>
                    <svg viewBox="0 0 240 350" className="mx-auto h-auto w-full max-w-[220px]">
                      <polygon points="120,116 180,220 120,324 60,220" className="fill-rose-50 stroke-rose-600" strokeWidth="2.5" />
                      <polygon points="120,116 60,220 180,220" className="fill-amber-100/50 stroke-amber-500" strokeWidth="1.75" />
                      <line x1="120" y1="116" x2="120" y2="324" className="stroke-slate-400" strokeWidth="1.25" strokeDasharray="4,3" />
                      <circle cx="120" cy="116" r="5" className="fill-amber-600" />
                      <circle cx="180" cy="220" r="5" className="fill-rose-600" />
                      <circle cx="120" cy="324" r="5" className="fill-rose-600" />
                      <circle cx="60" cy="220" r="5" className="fill-rose-600" />
                      <circle cx="120" cy="220" r="4.5" className="fill-slate-800" />
                      <text x="128" y="112" fontSize="14" className="fill-slate-700 font-bold">O</text>
                      <text x="186" y="216" fontSize="14" className="fill-slate-700 font-bold">C</text>
                      <text x="128" y="342" fontSize="14" className="fill-slate-700 font-bold">M</text>
                      <text x="44" y="216" fontSize="14" className="fill-slate-700 font-bold">B</text>
                      <text x="112" y="234" fontSize="13" className="fill-slate-700 font-bold">G</text>
                    </svg>
                  </Diagram>
                </div>
                <Step>
                  <strong>1) b)</strong> <Math tex="A = S_O(C)" /> <Math tex="\Rightarrow" /> O milieu de [AC].{" "}
                  <Math tex="D = S_O(B)" /> <Math tex="\Rightarrow" /> O milieu de [BD]. Les diagonales [AC] et [BD]
                  de ABCD se coupent donc en leur milieu O : <strong>ABCD est un parallélogramme</strong>.
                </Step>
                <Step>
                  OBC équilatéral <Math tex="\Rightarrow" /> <strong>OB = OC</strong>. Donc AC = 2·OC = 2·OB = BD :
                  les diagonales sont isométriques. <strong>ABCD est donc un rectangle.</strong>
                </Step>
                <Step>
                  <strong>2) b)</strong> <Math tex="M = S_G(O)" /> <Math tex="\Rightarrow" /> G milieu de [OM]. G est
                  le milieu de [BC] (donné). Les diagonales [OM] et [CB] de OCMB se coupent donc en leur milieu G :{" "}
                  <strong>OCMB est un parallélogramme</strong>.
                </Step>
                <Step>
                  <strong>
                    OBC équilatéral <Math tex="\Rightarrow" /> OB = OC : deux côtés consécutifs de OCMB (en O) sont
                    isométriques. Donc OCMB est un losange.
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Carré"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>ABCD</strong> est un carré.
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>
                    Construire <Math tex="S_A(B) = E" /> ; <Math tex="S_A(C) = F" /> et <Math tex="S_A(D) = G" />.
                  </li>
                  <li>
                    Montrer que <strong>AEFG</strong> est un carré.
                  </li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-3">
                <Diagram caption="Le carré AEFG (pointillé) est le symétrique du carré ABCD par rapport à A.">
                  <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-sm">
                    <rect x="160" y="80" width="80" height="80" className="fill-violet-50 stroke-violet-600" strokeWidth="2.5" />
                    <rect x="80" y="160" width="80" height="80" className="fill-violet-100/60 stroke-violet-500" strokeWidth="2" strokeDasharray="6,3" />
                    <circle cx="160" cy="160" r="5.5" className="fill-slate-800" />
                    <circle cx="240" cy="160" r="5" className="fill-violet-600" />
                    <circle cx="240" cy="80" r="5" className="fill-violet-600" />
                    <circle cx="160" cy="80" r="5" className="fill-violet-600" />
                    <circle cx="80" cy="160" r="5" className="fill-violet-600" />
                    <circle cx="80" cy="240" r="5" className="fill-violet-600" />
                    <circle cx="160" cy="240" r="5" className="fill-violet-600" />
                    <text x="166" y="176" fontSize="15" className="fill-slate-800 font-extrabold">A</text>
                    <text x="247" y="164" fontSize="14" className="fill-slate-700 font-bold">B</text>
                    <text x="247" y="76" fontSize="14" className="fill-slate-700 font-bold">C</text>
                    <text x="145" y="70" fontSize="14" className="fill-slate-700 font-bold">D</text>
                    <text x="60" y="164" fontSize="14" className="fill-slate-700 font-bold">E</text>
                    <text x="60" y="258" fontSize="14" className="fill-slate-700 font-bold">F</text>
                    <text x="145" y="258" fontSize="14" className="fill-slate-700 font-bold">G</text>
                  </svg>
                </Diagram>
                <Step>
                  <Math tex="S_A" /> étant la symétrie de centre A, on a <Math tex="S_A(A)=A" />,{" "}
                  <Math tex="S_A(B)=E" />, <Math tex="S_A(C)=F" /> et <Math tex="S_A(D)=G" /> : le quadrilatère{" "}
                  <strong>AEFG est exactement l&apos;image du carré ABCD</strong> par la symétrie de centre A.
                </Step>
                <Step>
                  Une symétrie centrale est une isométrie : elle conserve les longueurs et les angles, et transforme
                  un carré en un <strong>carré de mêmes dimensions</strong>.
                </Step>
                <Step>
                  <strong>Donc AEFG est un carré, avec AE = EF = FG = GA = AB = BC = CD = DA.</strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Rectangle & losange"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>ABCD</strong> est un rectangle de centre <strong>O</strong> ; soient <strong>M</strong> et{" "}
                  <strong>N</strong> les milieux respectifs des segments [AB] et [BC].
                </p>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>Construire les points E et F, symétriques respectifs de O par rapport à M et à N.</li>
                  <li>
                    Montrer que <strong>AEBO</strong> est un losange.
                  </li>
                  <li>
                    Démontrer que <strong>B</strong> est le milieu de [EF].
                  </li>
                  <li>
                    Démontrer que le triangle <strong>OEF</strong> est un triangle rectangle.
                  </li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-3">
                <Diagram caption="En orangé : le losange AEBO. En vert : le losange OBFC.">
                  <svg viewBox="0 0 320 195" className="mx-auto h-auto w-full max-w-md">
                    <rect x="15" y="60" width="180" height="110" className="fill-sky-50 stroke-sky-600" strokeWidth="2.5" />
                    <line x1="15" y1="60" x2="195" y2="170" className="stroke-slate-300" strokeWidth="1.25" strokeDasharray="4,3" />
                    <line x1="195" y1="60" x2="15" y2="170" className="stroke-slate-300" strokeWidth="1.25" strokeDasharray="4,3" />
                    <polygon points="15,60 105,5 195,60 105,115" className="fill-amber-100/50 stroke-amber-500" strokeWidth="2" />
                    <polygon points="195,60 285,115 195,170 105,115" className="fill-emerald-100/50 stroke-emerald-500" strokeWidth="2" />
                    <line x1="105" y1="5" x2="285" y2="115" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="5,3" />
                    <path d="M105,103 L117,103 L117,115" className="stroke-slate-600" fill="none" strokeWidth="1.5" />
                    <circle cx="15" cy="60" r="5" className="fill-sky-600" />
                    <circle cx="195" cy="60" r="5" className="fill-sky-600" />
                    <circle cx="195" cy="170" r="5" className="fill-sky-600" />
                    <circle cx="15" cy="170" r="5" className="fill-sky-600" />
                    <circle cx="105" cy="115" r="5" className="fill-slate-800" />
                    <circle cx="105" cy="60" r="4" className="fill-slate-600" />
                    <circle cx="195" cy="115" r="4" className="fill-slate-600" />
                    <circle cx="105" cy="5" r="5" className="fill-amber-600" />
                    <circle cx="285" cy="115" r="5" className="fill-emerald-600" />
                    <text x="1" y="50" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="200" y="50" fontSize="14" className="fill-slate-700 font-bold">B</text>
                    <text x="200" y="188" fontSize="14" className="fill-slate-700 font-bold">C</text>
                    <text x="1" y="188" fontSize="14" className="fill-slate-700 font-bold">D</text>
                    <text x="112" y="132" fontSize="13" className="fill-slate-700 font-bold">O</text>
                    <text x="88" y="52" fontSize="12" className="fill-slate-700 font-bold">M</text>
                    <text x="200" y="112" fontSize="12" className="fill-slate-700 font-bold">N</text>
                    <text x="114" y="12" fontSize="14" className="fill-amber-700 font-bold">E</text>
                    <text x="266" y="112" fontSize="14" className="fill-emerald-700 font-bold">F</text>
                  </svg>
                </Diagram>
                <Step>
                  <strong>2)</strong> <Math tex="E = S_M(O)" /> <Math tex="\Rightarrow" /> M milieu de [OE]. Or M est
                  le milieu de [AB] (donné). Les diagonales [AB] et [OE] de AEBO se coupent donc en leur milieu M :{" "}
                  <strong>AEBO est un parallélogramme</strong>.
                </Step>
                <Step>
                  ABCD rectangle de centre O <Math tex="\Rightarrow" /> <strong>OA = OB = OC = OD</strong>{" "}
                  (diagonales isométriques et de même milieu). Donc OA = OB : deux côtés consécutifs de AEBO (en O)
                  sont isométriques.
                </Step>
                <Step>
                  <strong>
                    Un parallélogramme ayant deux côtés consécutifs isométriques est un losange. Donc AEBO est un
                    losange.
                  </strong>
                </Step>
                <Step>
                  <strong>3)</strong> De même, <Math tex="F = S_N(O)" /> et N milieu de [BC] donnent, par le même
                  raisonnement, que <strong>OBFC est aussi un losange</strong> (diagonales [OF] et [BC] de même
                  milieu N, et OB = OC).
                </Step>
                <Step>
                  Dans le parallélogramme AEBO, le côté [EB] est parallèle et isométrique au côté [OA] :{" "}
                  <strong>(EB) ∥ (AC)</strong> et EB = OA = AC∶2 (O milieu de [AC]). Dans OBFC, le côté [BF] est
                  parallèle et isométrique à [OC] : <strong>(BF) ∥ (AC)</strong> et BF = OC = AC∶2.
                </Step>
                <Step>
                  (EB) et (BF) sont donc toutes deux parallèles à (AC) et passent par le même point B : elles sont
                  confondues, donc <strong>E, B, F sont alignés</strong>.
                </Step>
                <Step>
                  <strong>
                    Comme EB = BF et que E, B, F sont alignés (B entre E et F), B est le milieu de [EF].
                  </strong>
                </Step>
                <Step>
                  <strong>4)</strong> AEBO est un losange : ses diagonales [AB] et [OE] sont perpendiculaires, donc{" "}
                  <strong>(OE) ⊥ (AB)</strong>. OBFC est un losange : ses diagonales [BC] et [OF] sont
                  perpendiculaires, donc <strong>(OF) ⊥ (BC)</strong>.
                </Step>
                <Step>
                  Or (OE) ⊥ (AB) et (BC) ⊥ (AB) [ABCD rectangle], donc (OE) ∥ (BC). De même (OF) ⊥ (BC) et (AB) ⊥
                  (BC), donc (OF) ∥ (AB). Comme (AB) ⊥ (BC), on en déduit <strong>(OE) ⊥ (OF)</strong>.
                </Step>
                <Step>
                  <strong>Le triangle OEF a un angle droit en O : OEF est un triangle rectangle en O.</strong>
                </Step>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
