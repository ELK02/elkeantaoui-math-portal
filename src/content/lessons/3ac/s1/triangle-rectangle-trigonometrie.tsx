import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Triangle Rectangle et Trigonométrie · Cours et exercices corrigés | 3AC",
  description:
    "Cours illustré sur le cosinus, le sinus et la tangente d'un angle aigu dans un triangle rectangle : propriétés, formules trigonométriques, angles particuliers. 9 exercices corrigés en détail, 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Chapitre 8",
  heroTitle: "Triangle Rectangle et Trigonométrie",
  heroSubtitle:
    "Cosinus, sinus et tangente d'un angle aigu, formules trigonométriques, angles particuliers : un cours illustré, deux exemples résolus, puis 9 exercices corrigés en détail.",
  footerNote: "Triangle rectangle et trigonométrie · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "cosinus", label: "Cosinus" },
    { id: "sinus", label: "Sinus" },
    { id: "tangente", label: "Tangente" },
    { id: "formules", label: "Formules" },
    { id: "angles-particuliers", label: "Angles particuliers" },
    { id: "exercices", label: "Exercices" },
  ],
};

function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls = tone === "rose" ? "bg-rose-100 text-rose-600" : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
      {children}
    </span>
  );
}

function Item({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border p-4">
      <Pill>{n}</Pill>
      <span className="text-sm">{children}</span>
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

/** Small colored dot + label used in vocabulary legends. */
function Legend({ color, children }: { color: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />
      <span className="text-sm text-foreground-muted">{children}</span>
    </div>
  );
}

/** Vocabulary diagram: right triangle CAB with two colored markers on its legs. */
function VocabFigure({ leg1Color, marker1, marker1Color, marker3 }: { leg1Color: string; marker1: string; marker1Color: string; marker3?: boolean }) {
  return (
    <svg viewBox="0 0 300 260" className="mx-auto max-w-xs">
      <line x1="70" y1="210" x2="260" y2="210" stroke="#334155" strokeWidth="2.2" />
      <line x1="70" y1="210" x2="70" y2="30" stroke={leg1Color} strokeWidth="3" />
      <line x1="70" y1="30" x2="260" y2="210" stroke="#94a3b8" strokeWidth="2.4" />
      <rect x="70" y="198" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
      <circle cx="70" cy="30" r="4" fill="#1e293b" />
      <circle cx="70" cy="210" r="4" fill="#1e293b" />
      <circle cx="260" cy="210" r="4" fill="#1e293b" />
      <text x="58" y="26" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
      <text x="56" y="226" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
      <text x="272" y="226" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
      <circle cx="70" cy="118" r="10" fill={marker1Color} />
      <text x="70" y="122" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">{marker1}</text>
      <circle cx="165" cy="228" r="10" fill={marker1Color === "#4f46e5" ? "#f59e0b" : "#4f46e5"} />
      <text x="165" y="232" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">②</text>
      {marker3 ? (
        <>
          <circle cx="178" cy="120" r="10" fill="#94a3b8" />
          <text x="178" y="124" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">③</text>
        </>
      ) : null}
    </svg>
  );
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "3", label: "rapports trigonométriques" },
          { value: "9", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cosinus"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Voir les exercices
            </a>
          </>
        }
        visual={
          <div className="flex flex-col gap-2 text-right font-mono text-2xl font-bold text-white sm:text-3xl">
            <div>cos<span className="text-orange-400"> α</span></div>
            <div>sin<span className="text-orange-400"> α</span></div>
            <div>tan<span className="text-orange-400"> α</span></div>
          </div>
        }
      />

      {/* ===================== COSINUS ===================== */}
      <LessonSection
        id="cosinus"
        kicker="01 · Cosinus"
        title="Cosinus d'un angle aigu"
        tone="light"
        description="Dans un triangle rectangle, on associe à chaque angle aigu trois nombres, cosinus, sinus et tangente, définis comme des quotients de longueurs de côtés."
      >
        <div className="rounded-xl border-2 border-rose-500/30 bg-surface p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">
            Le cosinus d&apos;un angle aigu est égal au <strong className="text-rose-700">quotient de la longueur du côté adjacent à cet angle par la longueur de l&apos;hypoténuse</strong>.
          </p>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Vocabulaire</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <VocabFigure leg1Color="#4f46e5" marker1="①" marker1Color="#4f46e5" marker3 />
          <div className="space-y-2.5">
            <Legend color="bg-indigo-600"><strong className="text-foreground">[AC]</strong> est le côté adjacent à l&apos;angle <Math tex="\widehat{ACB}" /></Legend>
            <Legend color="bg-amber-500"><strong className="text-foreground">[AB]</strong> est le côté adjacent à l&apos;angle <Math tex="\widehat{ABC}" /></Legend>
            <Legend color="bg-slate-400"><strong className="text-foreground">[BC]</strong> est l&apos;<strong className="text-foreground">hypoténuse</strong></Legend>
          </div>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Notations</p>
        <div className="rounded-xl bg-amber-100/60 p-5 sm:p-6">
          <p className="text-sm text-foreground-muted"><Math tex="ABC" /> est un triangle rectangle en <Math tex="A" /></p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-lg">
            <Math tex="\cos\widehat{ABC}=\dfrac{AB}{BC}" />
            <Math tex="\cos\widehat{ACB}=\dfrac{AC}{BC}" />
          </div>
        </div>
      </LessonSection>

      {/* ===================== SINUS ===================== */}
      <LessonSection
        id="sinus"
        kicker="02 · Sinus"
        title="Sinus d'un angle aigu"
        tone="light"
        description="Même principe que le cosinus, mais avec le côté opposé."
      >
        <div className="rounded-xl border-2 border-rose-500/30 bg-surface p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">
            Le sinus d&apos;un angle aigu est égal au <strong className="text-rose-700">quotient de la longueur du côté opposé à cet angle par la longueur de l&apos;hypoténuse</strong>.
          </p>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Vocabulaire</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <VocabFigure leg1Color="#f59e0b" marker1="①" marker1Color="#f59e0b" marker3 />
          <div className="space-y-2.5">
            <Legend color="bg-amber-500"><strong className="text-foreground">[AC]</strong> est le côté opposé à l&apos;angle <Math tex="\widehat{ABC}" /></Legend>
            <Legend color="bg-indigo-600"><strong className="text-foreground">[AB]</strong> est le côté opposé à l&apos;angle <Math tex="\widehat{ACB}" /></Legend>
            <Legend color="bg-slate-400"><strong className="text-foreground">[BC]</strong> est l&apos;<strong className="text-foreground">hypoténuse</strong></Legend>
          </div>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Notations</p>
        <div className="rounded-xl bg-amber-100/60 p-5 sm:p-6">
          <p className="text-sm text-foreground-muted"><Math tex="ABC" /> est un triangle rectangle en <Math tex="A" /></p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-lg">
            <Math tex="\sin\widehat{ABC}=\dfrac{AC}{BC}" />
            <Math tex="\sin\widehat{ACB}=\dfrac{AB}{BC}" />
          </div>
        </div>
      </LessonSection>

      {/* ===================== TANGENTE ===================== */}
      <LessonSection
        id="tangente"
        kicker="03 · Tangente"
        title="Tangente d'un angle aigu"
        tone="muted"
        description="Le rapport entre les deux côtés de l'angle droit, sans passer par l'hypoténuse."
      >
        <div className="rounded-xl border-2 border-rose-500/30 bg-surface p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">
            La tangente d&apos;un angle aigu est égale au <strong className="text-rose-700">quotient de la longueur du côté opposé à cet angle par la longueur de son côté adjacent</strong>.
          </p>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Vocabulaire</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <VocabFigure leg1Color="#4f46e5" marker1="①" marker1Color="#4f46e5" />
          <div className="space-y-2.5">
            <Legend color="bg-indigo-600"><strong className="text-foreground">[AC]</strong> : opposé à <Math tex="\widehat{ABC}" />, adjacent à <Math tex="\widehat{ACB}" /></Legend>
            <Legend color="bg-amber-500"><strong className="text-foreground">[AB]</strong> : opposé à <Math tex="\widehat{ACB}" />, adjacent à <Math tex="\widehat{ABC}" /></Legend>
          </div>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Notations</p>
        <div className="rounded-xl bg-amber-100/60 p-5 sm:p-6">
          <p className="text-sm text-foreground-muted"><Math tex="ABC" /> est un triangle rectangle en <Math tex="A" /></p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-lg">
            <Math tex="\tan\widehat{ABC}=\dfrac{AC}{AB}" />
            <Math tex="\tan\widehat{ACB}=\dfrac{AB}{AC}" />
          </div>
        </div>

        <div className="mt-6 rounded-xl border-2 border-rose-500/30 bg-surface p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">Si <Math tex="x" /> désigne la mesure d&apos;un angle aigu non nul, alors :</p>
          <p className="mt-3 text-center text-lg font-semibold text-foreground"><Math tex="0\lt\cos x\lt1" /> et <Math tex="0\lt\sin x\lt1" /></p>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exercice d&apos;application</p>
        <ExerciseCard
          id="ex-app-1"
          index={1}
          title="Cosinus, sinus, tangente à partir de deux côtés"
          items={
            <div className="text-sm">
              <p className="text-foreground-muted">
                Soit <Math tex="ABC" /> un triangle rectangle en <Math tex="B" /> tel que <Math tex="AB=6" /> cm et <Math tex="BC=8" /> cm.
              </p>
              <ol className="mt-2 list-inside list-decimal space-y-1 text-foreground-muted">
                <li>Tracer la figure.</li>
                <li>Calculer <Math tex="\cos\widehat{ACB}" />, <Math tex="\sin\widehat{ACB}" /> et <Math tex="\tan\widehat{ACB}" />.</li>
              </ol>
              <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 300 260" className="mx-auto max-w-[220px]">
                    <line x1="70" y1="60" x2="70" y2="220" stroke="#334155" strokeWidth="2.2" />
                    <line x1="70" y1="220" x2="270" y2="220" stroke="#334155" strokeWidth="2.2" />
                    <line x1="70" y1="60" x2="270" y2="220" stroke="#4f46e5" strokeWidth="2.6" />
                    <rect x="70" y="208" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="70" cy="60" r="4" fill="#1e293b" />
                    <circle cx="70" cy="220" r="4" fill="#1e293b" />
                    <circle cx="270" cy="220" r="4" fill="#1e293b" />
                    <text x="58" y="56" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                    <text x="56" y="238" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                    <text x="282" y="238" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                    <text x="40" y="144" textAnchor="middle" fontSize="13.5" fill="#64748b" fontStyle="italic" transform="rotate(-90 40 144)">6 cm</text>
                    <text x="170" y="238" textAnchor="middle" fontSize="13.5" fill="#64748b" fontStyle="italic">8 cm</text>
                  </svg>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="ABC" /> rectangle en <Math tex="B" /></span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=6" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=8" /> cm</span>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-3 text-sm">
              <p><strong className="text-green-700">Calcul de AC :</strong> Pythagore, <Math tex="AC^2=AB^2+BC^2=36+64=100" />, donc <Math tex="AC=10" /> cm.</p>
              <p><Math tex="\cos\widehat{ACB}=\dfrac{BC}{AC}=\dfrac8{10}" />, d&apos;où <strong className="text-green-700"><Math tex="\cos\widehat{ACB}=0{,}8" /></strong></p>
              <p><Math tex="\sin\widehat{ACB}=\dfrac{AB}{AC}=\dfrac6{10}" />, d&apos;où <strong className="text-green-700"><Math tex="\sin\widehat{ACB}=0{,}6" /></strong></p>
              <p><Math tex="\tan\widehat{ACB}=\dfrac{AB}{BC}=\dfrac68" />, d&apos;où <strong className="text-green-700"><Math tex="\tan\widehat{ACB}=0{,}75" /></strong></p>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== FORMULES ===================== */}
      <LessonSection
        id="formules"
        kicker="04 · Deux relations utiles"
        title="Formules trigonométriques"
        tone="light"
        description="Ces relations permettent de calculer un rapport sans connaître les longueurs du triangle."
      >
        <p className="mb-3 text-sm font-semibold text-foreground">Propriété 1</p>
        <FormulaBlock
          tex="\cos^2x+\sin^2x=1 \qquad \tan x=\dfrac{\sin x}{\cos x}"
          caption="pour tout angle aigu non nul x"
        />

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Propriété 2 (angles complémentaires)</p>
        <div className="rounded-2xl bg-neutral-800 p-6 text-white sm:p-8">
          <p className="text-sm text-neutral-300">Si <Math tex="x" /> et <Math tex="y" /> sont deux angles aigus non nuls tels que <Math tex="x+y=90^\circ" />, alors :</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl bg-white/10 px-4 py-5 text-lg">
            <Math tex="\cos x=\sin y" />
            <Math tex="\sin x=\cos y" />
            <Math tex="\tan x=\dfrac1{\tan y}" />
          </div>
        </div>
        <div className="mt-4">
          <Callout variant="info">
            Dans un triangle rectangle, les deux angles aigus sont toujours complémentaires (leur somme vaut <Math tex="90^\circ" />) : cette propriété s&apos;y applique donc systématiquement.
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exercice d&apos;application</p>
        <ExerciseCard
          id="ex-app-2"
          index={2}
          title="Calculer avec les formules trigonométriques"
          items={
            <div className="grid gap-3 sm:grid-cols-3 text-sm">
              <div className="rounded-lg border border-border p-3 text-center"><Math tex="A=2\cos15^\circ+\cos^236^\circ-2\sin75^\circ+\cos^254^\circ" /></div>
              <div className="rounded-lg border border-border p-3 text-center"><Math tex="B=\tan73^\circ\times\tan17^\circ-\sin^240^\circ-\sin^250^\circ" /></div>
              <div className="rounded-lg border border-border p-3 text-center"><Math tex="C=\sqrt2\cos45^\circ+\sin^230^\circ+\sin^260^\circ+\sqrt3\tan30^\circ" /></div>
            </div>
          }
          correction={
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">Calcul de A</p>
                <p className="mt-1 text-foreground-muted">
                  <Math tex="15^\circ+75^\circ=90^\circ" /> et <Math tex="36^\circ+54^\circ=90^\circ" />, donc <Math tex="\cos15^\circ=\sin75^\circ" /> et <Math tex="\cos36^\circ=\sin54^\circ" />.
                </p>
                <p className="mt-1 text-foreground-muted">
                  <Math tex="A=2\sin75^\circ+\sin^254^\circ-2\sin75^\circ+\cos^254^\circ=\sin^254^\circ+\cos^254^\circ" />
                </p>
                <p className="mt-2 font-bold text-green-700"><Math tex="A=1" /></p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Calcul de B</p>
                <p className="mt-1 text-foreground-muted">
                  <Math tex="73^\circ+17^\circ=90^\circ" /> donc <Math tex="\tan73^\circ=\dfrac1{\tan17^\circ}" />, et <Math tex="40^\circ+50^\circ=90^\circ" /> donc <Math tex="\sin40^\circ=\cos50^\circ" />.
                </p>
                <p className="mt-1 text-foreground-muted"><Math tex="B=\dfrac1{\tan17^\circ}\times\tan17^\circ-\cos^250^\circ-\sin^250^\circ=1-1" /></p>
                <p className="mt-2 font-bold text-green-700"><Math tex="B=0" /></p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Calcul de C</p>
                <p className="mt-1 text-foreground-muted">
                  <Math tex="\cos45^\circ=\dfrac{\sqrt2}2" />, <Math tex="\sin30^\circ=\dfrac12" />, <Math tex="\sin60^\circ=\dfrac{\sqrt3}2" />, <Math tex="\tan30^\circ=\dfrac{\sqrt3}3" />.
                </p>
                <p className="mt-1 text-foreground-muted"><Math tex="C=\dfrac22+\dfrac14+\dfrac34+\dfrac33=1+1+1" /></p>
                <p className="mt-2 font-bold text-green-700"><Math tex="C=3" /></p>
              </div>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== ANGLES PARTICULIERS ===================== */}
      <LessonSection
        id="angles-particuliers"
        kicker="05 · À apprendre par cœur"
        title="Angles particuliers"
        tone="muted"
        description="Les valeurs exactes de sinus, cosinus et tangente pour cinq angles clés."
      >
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[560px] border-collapse bg-surface text-center">
            <thead>
              <tr className="bg-neutral-950 text-white">
                <th className="px-4 py-3 text-left font-semibold sm:text-center"><Math tex="x" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="0^\circ" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="30^\circ" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="45^\circ" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="60^\circ" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="90^\circ" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\sin x" /></td>
                <td className="px-4 py-3.5"><Math tex="0" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac12" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt2}2" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt3}2" /></td>
                <td className="px-4 py-3.5"><Math tex="1" /></td>
              </tr>
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\cos x" /></td>
                <td className="px-4 py-3.5"><Math tex="1" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt3}2" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt2}2" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac12" /></td>
                <td className="px-4 py-3.5"><Math tex="0" /></td>
              </tr>
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\tan x" /></td>
                <td className="px-4 py-3.5"><Math tex="0" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt3}3" /></td>
                <td className="px-4 py-3.5"><Math tex="1" /></td>
                <td className="px-4 py-3.5"><Math tex="\sqrt3" /></td>
                <td className="px-4 py-3.5 text-sm font-semibold text-rose-600">Indéterminé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="9 exercices corrigés"
        tone="light"
        description="Cherchez chaque exercice au brouillon, puis cliquez pour vérifier votre réponse étape par étape."
      >
        <ExerciseGroup total={9} celebrationTitle="Bravo, les 9 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la trigonométrie du triangle rectangle.">
          <ExerciseCard
            id="1"
            index={1}
            title="Cosinus, sinus, tangente"
            itemsLabel="ABC rectangle en A"
            items={
              <div className="space-y-3 text-sm">
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 300 260" className="mx-auto max-w-[220px]">
                    <line x1="70" y1="210" x2="260" y2="210" stroke="#334155" strokeWidth="2.2" />
                    <line x1="70" y1="210" x2="70" y2="30" stroke="#334155" strokeWidth="2.2" />
                    <line x1="70" y1="30" x2="260" y2="210" stroke="#4f46e5" strokeWidth="2.6" />
                    <rect x="70" y="198" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="70" cy="30" r="4" fill="#1e293b" />
                    <circle cx="70" cy="210" r="4" fill="#1e293b" />
                    <circle cx="260" cy="210" r="4" fill="#1e293b" />
                    <text x="58" y="26" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                    <text x="56" y="228" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                    <text x="272" y="228" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                  </svg>
                </div>
                <Item n={1}>On donne <Math tex="AB=3" /> et <Math tex="BC=5" />. Calculer <Math tex="AC" /> ; <Math tex="\cos\widehat{ABC}" /> ; <Math tex="\sin\widehat{ABC}" /> ; <Math tex="\tan\widehat{ABC}" />.</Item>
                <Item n={2}>On donne <Math tex="AC=7" /> et <Math tex="BC=9" />. Calculer <Math tex="AB" /> ; <Math tex="\cos\widehat{ACB}" /> ; <Math tex="\sin\widehat{ACB}" /> ; <Math tex="\tan\widehat{ACB}" />.</Item>
                <Item n={3}>On donne <Math tex="AB=1" /> et <Math tex="AC=\sqrt3" />. Calculer <Math tex="BC" /> ; <Math tex="\cos\widehat{ABC}" /> ; <Math tex="\sin\widehat{ABC}" /> ; <Math tex="\tan\widehat{ABC}" />.</Item>
                <Item n={4}>On donne <Math tex="BC=8" /> et <Math tex="\cos\widehat{ABC}=\dfrac16" />. Calculer <Math tex="AB" /> ; <Math tex="AC" /> ; <Math tex="\sin\widehat{ABC}" /> ; <Math tex="\tan\widehat{ABC}" />.</Item>
                <Item n={5}>On donne <Math tex="AB=7" /> et <Math tex="\tan\widehat{ABC}=2" />. Calculer <Math tex="BC" /> ; <Math tex="AC" /> ; <Math tex="\sin\widehat{ACB}" /> ; <Math tex="\cos\widehat{ACB}" />.</Item>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n={1}>Pythagore : <Math tex="AC^2=25-9=16" />, donc <Math tex="AC=4" /> cm. <Math tex="\cos\widehat{ABC}=\dfrac35=0{,}6" /> · <Math tex="\sin\widehat{ABC}=\dfrac45=0{,}8" /> · <Math tex="\tan\widehat{ABC}=\dfrac43" /></CorrectionCard>
                <CorrectionCard n={2}>Pythagore : <Math tex="AB^2=81-49=32" />, donc <Math tex="AB=4\sqrt2" /> cm. <Math tex="\cos\widehat{ACB}=\dfrac79" /> · <Math tex="\sin\widehat{ACB}=\dfrac{4\sqrt2}9" /> · <Math tex="\tan\widehat{ACB}=\dfrac{4\sqrt2}7" /></CorrectionCard>
                <CorrectionCard n={3}>Pythagore : <Math tex="BC^2=1+3=4" />, donc <Math tex="BC=2" /> cm. <Math tex="\cos\widehat{ABC}=\dfrac12" /> · <Math tex="\sin\widehat{ABC}=\dfrac{\sqrt3}2" /> · <Math tex="\tan\widehat{ABC}=\sqrt3" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="AB=8\times\dfrac16=\dfrac43" /> cm. Pythagore : <Math tex="AC^2=64-\dfrac{16}9=\dfrac{560}9" />, donc <Math tex="AC=\dfrac{4\sqrt{35}}3" /> cm. <Math tex="\sin\widehat{ABC}=\dfrac{\sqrt{35}}6" /> · <Math tex="\tan\widehat{ABC}=\sqrt{35}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="AC=7\times2=14" /> cm. Pythagore : <Math tex="BC^2=49+196=245" />, donc <Math tex="BC=7\sqrt5" /> cm. <Math tex="\sin\widehat{ACB}=\dfrac{\sqrt5}5" /> · <Math tex="\cos\widehat{ACB}=\dfrac{2\sqrt5}5" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Identité trigonométrique"
            itemsLabel="α angle aigu"
            items={
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <Item n={1}>Calculer <Math tex="\sin\alpha" /> et <Math tex="\tan\alpha" /> sachant que <Math tex="\cos\alpha=\dfrac13" />.</Item>
                <Item n={2}>Calculer <Math tex="\sin\alpha" /> et <Math tex="\tan\alpha" /> sachant que <Math tex="\cos\alpha=\dfrac{\sqrt5}3" />.</Item>
                <Item n={3}>Calculer <Math tex="\cos\alpha" /> et <Math tex="\tan\alpha" /> sachant que <Math tex="\sin\alpha=\dfrac{\sqrt2}3" />.</Item>
                <Item n={4}>Calculer <Math tex="\sin\alpha" /> et <Math tex="\tan\alpha" /> sachant que <Math tex="\cos\alpha=\dfrac{\sqrt3}5" />.</Item>
                <Item n={5}>Calculer <Math tex="\sin\alpha" /> et <Math tex="\cos\alpha" /> sachant que <Math tex="\tan\alpha=\sqrt6" />.</Item>
                <Item n={6}>Calculer <Math tex="\sin\alpha" /> et <Math tex="\cos\alpha" /> sachant que <Math tex="\tan\alpha=\sqrt{11}" />.</Item>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p className="text-foreground-muted">On utilise <Math tex="\sin^2\alpha=1-\cos^2\alpha" /> (ou l&apos;inverse), avec <Math tex="\sin\alpha\gt0" /> et <Math tex="\cos\alpha\gt0" />, puis <Math tex="\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}" />.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <CorrectionCard n={1}><Math tex="\sin^2\alpha=1-\dfrac19=\dfrac89 \Rightarrow \sin\alpha=\dfrac{2\sqrt2}3" />, <Math tex="\tan\alpha=2\sqrt2" /></CorrectionCard>
                  <CorrectionCard n={2}><Math tex="\sin^2\alpha=1-\dfrac59=\dfrac49 \Rightarrow \sin\alpha=\dfrac23" />, <Math tex="\tan\alpha=\dfrac{2\sqrt5}5" /></CorrectionCard>
                  <CorrectionCard n={3}><Math tex="\cos^2\alpha=1-\dfrac29=\dfrac79 \Rightarrow \cos\alpha=\dfrac{\sqrt7}3" />, <Math tex="\tan\alpha=\dfrac{\sqrt{14}}7" /></CorrectionCard>
                  <CorrectionCard n={4}><Math tex="\sin^2\alpha=1-\dfrac3{25}=\dfrac{22}{25} \Rightarrow \sin\alpha=\dfrac{\sqrt{22}}5" />, <Math tex="\tan\alpha=\dfrac{\sqrt{66}}3" /></CorrectionCard>
                  <CorrectionCard n={5}><Math tex="\cos^2\alpha=\dfrac17 \Rightarrow \cos\alpha=\dfrac{\sqrt7}7" />, <Math tex="\sin\alpha=\dfrac{\sqrt{42}}7" /></CorrectionCard>
                  <CorrectionCard n={6}><Math tex="\cos^2\alpha=\dfrac1{12} \Rightarrow \cos\alpha=\dfrac{\sqrt3}6" />, <Math tex="\sin\alpha=\dfrac{\sqrt{33}}6" /></CorrectionCard>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Angles complémentaires"
            items={
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="A=\cos^235^\circ+\sin^233^\circ+\sin^235^\circ+\cos^233^\circ" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="B=\cos^215^\circ+\cos^275^\circ-2\tan35^\circ\times\tan55^\circ" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="C=\sin25^\circ-\sin65^\circ+\cos25^\circ-\cos65^\circ" /></div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="A">On regroupe : <Math tex="(\cos^235^\circ+\sin^235^\circ)+(\sin^233^\circ+\cos^233^\circ)=1+1" />, donc <Math tex="A=2" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="15^\circ+75^\circ=90^\circ" /> donc <Math tex="\cos^215^\circ+\cos^275^\circ=\cos^215^\circ+\sin^215^\circ=1" />. <Math tex="35^\circ+55^\circ=90^\circ" /> donc <Math tex="\tan35^\circ\times\tan55^\circ=1" />. D&apos;où <Math tex="B=1-2=-1" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="25^\circ+65^\circ=90^\circ" /> donc <Math tex="\sin65^\circ=\cos25^\circ" /> et <Math tex="\cos65^\circ=\sin25^\circ" />. D&apos;où <Math tex="C=\sin25^\circ-\cos25^\circ+\cos25^\circ-\sin25^\circ=0" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Simplifier"
            itemsLabel="α angle aigu"
            items={
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="A=(\cos\alpha+\sin\alpha)^2+(\cos\alpha-\sin\alpha)^2" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="B=2\cos^2\alpha+3\sin^2\alpha-2" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="C=\dfrac1{1+\cos\alpha}+\dfrac1{1-\cos\alpha}-\dfrac2{\sin^2\alpha}" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="D=\sin\alpha\sqrt{1-\cos\alpha}\sqrt{1+\cos\alpha}+\cos\alpha\sqrt{1+\sin\alpha}\sqrt{1-\sin\alpha}" /></div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="A">En développant : <Math tex="2\cos^2\alpha+2\sin^2\alpha=2(\cos^2\alpha+\sin^2\alpha)" />, donc <Math tex="A=2" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=2(\cos^2\alpha+\sin^2\alpha)+\sin^2\alpha-2=2+\sin^2\alpha-2" />, donc <Math tex="B=\sin^2\alpha" /></CorrectionCard>
                <CorrectionCard n="C">Au même dénominateur : <Math tex="\dfrac2{1-\cos^2\alpha}=\dfrac2{\sin^2\alpha}" />, donc <Math tex="C=\dfrac2{\sin^2\alpha}-\dfrac2{\sin^2\alpha}=0" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="\sqrt{1-\cos\alpha}\sqrt{1+\cos\alpha}=\sqrt{\sin^2\alpha}=\sin\alpha" /> et de même <Math tex="=\cos\alpha" />. D&apos;où <Math tex="D=\sin^2\alpha+\cos^2\alpha=1" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Démonstration"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted"><Math tex="\alpha" /> est un angle aigu. Montrer que :</p>
                <div className="mt-3 rounded-lg border border-border p-4 text-center text-lg"><Math tex="\cos^2\alpha=\dfrac1{1+\tan^2\alpha}" /></div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Comme <Math tex="\alpha" /> est aigu, <Math tex="\cos\alpha\neq0" /> et <Math tex="\tan\alpha" /> est bien défini. Partons du membre de droite :</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="1+\tan^2\alpha=1+\dfrac{\sin^2\alpha}{\cos^2\alpha}=\dfrac{\cos^2\alpha+\sin^2\alpha}{\cos^2\alpha}" /></p>
                <p className="text-foreground-muted">Or <Math tex="\cos^2\alpha+\sin^2\alpha=1" />, donc <Math tex="1+\tan^2\alpha=\dfrac1{\cos^2\alpha}" />. En prenant l&apos;inverse des deux membres :</p>
                <p className="font-bold text-green-700"><Math tex="\dfrac1{1+\tan^2\alpha}=\cos^2\alpha" /> ∎</p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Bissectrice et théorème de Thalès"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABC" /> est un triangle rectangle et isocèle en <Math tex="A" /> tel que <Math tex="AB=x" />. La bissectrice intérieure de <Math tex="\widehat{ABC}" /> coupe la droite <Math tex="(AC)" /> en <Math tex="D" />. La parallèle à <Math tex="(BD)" /> passant par <Math tex="A" /> coupe la droite <Math tex="(BC)" /> en <Math tex="E" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 540 500" className="mx-auto max-w-sm">
                      <line x1="90" y1="70" x2="499" y2="462" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,4" />
                      <line x1="90" y1="300" x2="330" y2="300" stroke="#334155" strokeWidth="2.2" />
                      <line x1="90" y1="300" x2="90" y2="70" stroke="#334155" strokeWidth="2.2" />
                      <line x1="330" y1="300" x2="90" y2="70" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="330" y1="300" x2="90" y2="205" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="6,4" />
                      <line x1="90" y1="300" x2="499" y2="462" stroke="#10b981" strokeWidth="2.2" strokeDasharray="6,4" />
                      <rect x="90" y="288" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="90" cy="70" r="4" fill="#1e293b" />
                      <circle cx="90" cy="300" r="4" fill="#1e293b" />
                      <circle cx="330" cy="300" r="4" fill="#1e293b" />
                      <circle cx="90" cy="205" r="4.5" fill="#f59e0b" />
                      <circle cx="499" cy="462" r="4.5" fill="#10b981" />
                      <text x="76" y="60" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
                      <text x="74" y="322" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
                      <text x="345" y="308" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
                      <text x="72" y="209" textAnchor="middle" fontWeight="700" fontSize="15" fill="#b45309">D</text>
                      <text x="512" y="466" fontWeight="700" fontSize="15" fill="#047857">E</text>
                      <text x="200" y="290" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic">x</text>
                      <text x="60" y="185" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic" transform="rotate(-90 60 185)">x</text>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <Legend color="bg-indigo-600"><Math tex="(BC)" /> : hypoténuse</Legend>
                    <Legend color="bg-amber-500"><Math tex="(BD)" /> : bissectrice de <Math tex="\widehat{ABC}" /></Legend>
                    <Legend color="bg-emerald-500"><Math tex="(AE)" /> : parallèle à <Math tex="(BD)" /></Legend>
                    <Legend color="bg-slate-300"><Math tex="(CE)" /> : droite <Math tex="(BC)" /> prolongée</Legend>
                    <p className="pt-1 text-xs text-foreground-muted italic">Figure illustrative, non à l&apos;échelle.</p>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Montrer que <Math tex="DC=\dfrac{x\sqrt2}{\sqrt2+1}" />.</li>
                  <li>Calculer en fonction de <Math tex="x" /> les distances <Math tex="AD" /> et <Math tex="BD" />.</li>
                  <li>Déduire <Math tex="\cos(22{,}5^\circ)" /> et <Math tex="\sin(22{,}5^\circ)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="ABC" /> rectangle isocèle en <Math tex="A" /> avec <Math tex="AB=AC=x" />, donc <Math tex="BC=x\sqrt2" /> et <Math tex="\widehat{ABC}=\widehat{ACB}=45^\circ" />. La bissectrice donne <Math tex="\widehat{ABD}=\widehat{DBC}=22{,}5^\circ" />.
                  Comme <Math tex="(AE)\parallel(BD)" />, le triangle <Math tex="ABE" /> est isocèle en <Math tex="B" /> (angles alternes-internes = correspondants), d&apos;où <Math tex="BE=AB=x" />.
                  Dans le triangle <Math tex="CEA" />, Thalès donne <Math tex="\dfrac{CD}{CA}=\dfrac{CB}{CE}" /> avec <Math tex="CE=x(\sqrt2+1)" />, d&apos;où <strong className="text-green-700"><Math tex="DC=\dfrac{x\sqrt2}{\sqrt2+1}" /></strong> ✓
                </CorrectionCard>
                <CorrectionCard n={2}>
                  En rationalisant : <Math tex="DC=x(2-\sqrt2)" />, donc <strong className="text-green-700"><Math tex="AD=AC-DC=x(\sqrt2-1)" /></strong>.
                  Le triangle <Math tex="ABD" /> est rectangle en <Math tex="A" /> : Pythagore donne <Math tex="BD^2=x^2+x^2(\sqrt2-1)^2=x^2(4-2\sqrt2)" />, d&apos;où <strong className="text-green-700"><Math tex="BD=x\sqrt{4-2\sqrt2}" /></strong>
                </CorrectionCard>
                <CorrectionCard n={3}>
                  Dans <Math tex="ABD" /> rectangle en <Math tex="A" />, avec <Math tex="\widehat{ABD}=22{,}5^\circ" /> : <Math tex="\cos^2(22{,}5^\circ)=\dfrac1{4-2\sqrt2}=\dfrac{2+\sqrt2}4" /> et <Math tex="\sin^2(22{,}5^\circ)=\dfrac{2-\sqrt2}4" /> (en rationalisant). Comme l&apos;angle est aigu :
                  <br /><strong className="text-green-700"><Math tex="\cos(22{,}5^\circ)=\dfrac{\sqrt{2+\sqrt2}}2\approx0{,}924" /> et <Math tex="\sin(22{,}5^\circ)=\dfrac{\sqrt{2-\sqrt2}}2\approx0{,}383" /></strong>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Problème concret : hauteur d'un arbre"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Déterminer la hauteur <Math tex="EC" /> (l&apos;arbre est planté au point <Math tex="E" />, à la verticale).</p>
                <div className="mt-4 rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 480 320" className="mx-auto max-w-md">
                    <line x1="40" y1="270" x2="440" y2="270" stroke="#334155" strokeWidth="2.2" />
                    <line x1="60" y1="270" x2="400" y2="60" stroke="#4f46e5" strokeWidth="2.2" />
                    <line x1="180" y1="270" x2="400" y2="60" stroke="#4f46e5" strokeWidth="2.2" />
                    <line x1="400" y1="270" x2="400" y2="60" stroke="#16a34a" strokeWidth="4" />
                    <circle cx="400" cy="72" r="26" fill="#86efac" fillOpacity="0.55" stroke="#16a34a" strokeWidth="1.5" />
                    <rect x="392" y="256" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="60" cy="270" r="4.5" fill="#f59e0b" />
                    <circle cx="180" cy="270" r="4.5" fill="#f59e0b" />
                    <circle cx="400" cy="270" r="4" fill="#1e293b" />
                    <circle cx="400" cy="60" r="4" fill="#1e293b" />
                    <text x="60" y="292" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                    <text x="180" y="292" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                    <text x="404" y="292" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                    <text x="416" y="56" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                    <text x="120" y="290" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic">30 m</text>
                    <text x="88" y="255" textAnchor="middle" fontSize="13.5" fill="#4338ca" fontWeight="600">29°</text>
                    <text x="205" y="255" textAnchor="middle" fontSize="13.5" fill="#4338ca" fontWeight="600">43°</text>
                  </svg>
                </div>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BA=30" /> m</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="\widehat{CBE}=29^\circ" /></span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="\widehat{CAE}=43^\circ" /></span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="(CE)\perp(BE)" /></span>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Notons <Math tex="EC=h" /> et <Math tex="AE=d" />, avec <Math tex="B,A,E" /> alignés donc <Math tex="BE=30+d" />.</p>
                <p className="text-foreground-muted">Triangle <Math tex="AEC" /> rectangle en <Math tex="E" /> : <Math tex="h=d\tan43^\circ" />. Triangle <Math tex="BEC" /> rectangle en <Math tex="E" /> : <Math tex="h=(d+30)\tan29^\circ" />.</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="d\tan43^\circ=(d+30)\tan29^\circ \Rightarrow d=\dfrac{30\tan29^\circ}{\tan43^\circ-\tan29^\circ}" /></p>
                <p className="text-foreground-muted">Numériquement : <Math tex="\tan29^\circ\approx0{,}554" />, <Math tex="\tan43^\circ\approx0{,}933" />, donc <Math tex="d\approx44{,}0" /> m et <Math tex="h=d\tan43^\circ\approx41{,}0" /> m.</p>
                <p className="font-bold text-green-700"><Math tex="EC\approx41{,}0" /> m</p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Problème : figure composée"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  On donne <Math tex="BD=4" /> cm, <Math tex="BA=6" /> cm et <Math tex="\widehat{DBC}=60^\circ" />, avec <Math tex="D,B,A" /> alignés et <Math tex="(DC)\perp(DA)" />. On ne demande pas de figure en vraie grandeur.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 460 260" className="mx-auto max-w-sm">
                      <line x1="60" y1="220" x2="420" y2="220" stroke="#334155" strokeWidth="2.2" />
                      <line x1="60" y1="220" x2="60" y2="40" stroke="#334155" strokeWidth="2.2" />
                      <line x1="60" y1="40" x2="180" y2="220" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="60" y1="40" x2="420" y2="220" stroke="#94a3b8" strokeWidth="2.2" />
                      <rect x="60" y="208" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="60" cy="40" r="4" fill="#1e293b" />
                      <circle cx="60" cy="220" r="4" fill="#1e293b" />
                      <circle cx="180" cy="220" r="4" fill="#1e293b" />
                      <circle cx="420" cy="220" r="4" fill="#1e293b" />
                      <text x="46" y="36" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                      <text x="46" y="240" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                      <text x="180" y="240" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                      <text x="432" y="240" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                      <text x="120" y="240" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic">4 cm</text>
                      <text x="300" y="240" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic">6 cm</text>
                      <text x="130" y="205" textAnchor="middle" fontSize="13.5" fill="#4338ca" fontWeight="600">60°</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BD=4" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BA=6" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="\widehat{DBC}=60^\circ" /></span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="\widehat{BDC}=90^\circ" /></span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Montrer que <Math tex="BC=8" /> cm.</li>
                  <li>Calculer <Math tex="CD" /> (valeur arrondie au dixième).</li>
                  <li>Calculer <Math tex="AC" />.</li>
                  <li>Quelle est la valeur de <Math tex="\tan\widehat{BAC}" /> ?</li>
                  <li>En déduire la valeur arrondie au degré de <Math tex="\widehat{BAC}" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n={1}>Triangle <Math tex="BDC" /> rectangle en <Math tex="D" /> : <Math tex="\cos\widehat{DBC}=\dfrac{BD}{BC}" />, donc <Math tex="BC=\dfrac4{\cos60^\circ}=\dfrac4{1/2}=8" /> cm ✓</CorrectionCard>
                <CorrectionCard n={2}><Math tex="\sin\widehat{DBC}=\dfrac{CD}{BC}\Rightarrow CD=8\times\dfrac{\sqrt3}2=4\sqrt3" />, donc <Math tex="CD=4\sqrt3\approx6{,}9" /> cm</CorrectionCard>
                <CorrectionCard n={3}><Math tex="D,B,A" /> alignés : <Math tex="DA=4+6=10" /> cm. Triangle <Math tex="DCA" /> rectangle en <Math tex="D" /> : <Math tex="AC^2=100+48=148" />, donc <Math tex="AC=\sqrt{148}=2\sqrt{37}\approx12{,}2" /> cm</CorrectionCard>
                <CorrectionCard n={4}><Math tex="\widehat{BAC}=\widehat{DAC}" /> (car <Math tex="B\in[DA]" />) : <Math tex="\tan\widehat{DAC}=\dfrac{4\sqrt3}{10}" />, donc <Math tex="\tan\widehat{BAC}=\dfrac{2\sqrt3}5\approx0{,}693" /></CorrectionCard>
                <CorrectionCard n={5}>À la calculatrice : <Math tex="\widehat{BAC}=\arctan(0{,}693\ldots)\approx34{,}7^\circ" />, donc <Math tex="\widehat{BAC}\approx35^\circ" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Démonstration : une inégalité"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Soient <Math tex="a" /> et <Math tex="b" /> deux réels, <Math tex="\alpha" /> un angle aigu. Montrer que :</p>
                <div className="mt-3 rounded-lg border border-border p-4 text-center text-lg"><Math tex="(a\sin\alpha+b\cos\alpha)^2\leqslant a^2+b^2" /></div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Il suffit de montrer que <Math tex="a^2+b^2-(a\sin\alpha+b\cos\alpha)^2\geqslant0" />. En développant :</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="(a\sin\alpha+b\cos\alpha)^2=a^2\sin^2\alpha+2ab\sin\alpha\cos\alpha+b^2\cos^2\alpha" /></p>
                <p className="text-foreground-muted">En utilisant <Math tex="\sin^2\alpha=1-\cos^2\alpha" /> et <Math tex="\cos^2\alpha=1-\sin^2\alpha" /> :</p>
                <div className="space-y-1 rounded-lg border border-border p-4">
                  <p><Math tex="a^2+b^2-(a\sin\alpha+b\cos\alpha)^2" /></p>
                  <p><Math tex="=a^2(1-\sin^2\alpha)+b^2(1-\cos^2\alpha)-2ab\sin\alpha\cos\alpha" /></p>
                  <p><Math tex="=a^2\cos^2\alpha+b^2\sin^2\alpha-2ab\sin\alpha\cos\alpha=(a\cos\alpha-b\sin\alpha)^2" /></p>
                </div>
                <p className="text-foreground-muted">Un carré est toujours <Math tex="\geqslant0" />, donc <Math tex="a^2+b^2-(a\sin\alpha+b\cos\alpha)^2\geqslant0" />, d&apos;où :</p>
                <p className="font-bold text-green-700"><Math tex="(a\sin\alpha+b\cos\alpha)^2\leqslant a^2+b^2" /></p>
                <p className="text-foreground-muted">avec égalité si et seulement si <Math tex="a\cos\alpha=b\sin\alpha" />. ∎</p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
