import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Équations et inéquations · Cours et exercices corrigés | 3AC",
  description:
    "Cours complet sur les équations et inéquations du premier degré : résolution, règle du produit nul, mise en équation de problèmes, avec 10 exercices corrigés en détail. 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 1",
  heroTitle: "Équations et inéquations",
  heroSubtitle:
    "Une égalité se résout, une inégalité aussi, presque de la même façon, sauf un piège à ne jamais oublier.",
  footerNote: "Équations et inéquations · Mathématiques, 3ème année collège, semestre 2.",
  sections: [
    { id: "equations", label: "Équations" },
    { id: "inequations", label: "Inéquations" },
    { id: "memo", label: "Mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Helpers locaux ===================== */

function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls = tone === "rose" ? "bg-rose-100 text-rose-600" : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
      {children}
    </span>
  );
}

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n})</span> {children}
    </div>
  );
}

function EqRow({ n, tex }: { n: string; tex: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <Pill>{n}</Pill>
      <MathBlock tex={tex} className="katex-formula-block flex-1 text-base" />
    </div>
  );
}

function Step({ n, title, children }: { n: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <div className="flex-1 pb-0.5">
        <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">{title}</p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Worked({ children }: { children: ReactNode }) {
  return <div className="space-y-4 rounded-xl border border-border p-5">{children}</div>;
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-lg border border-border bg-surface px-3 py-2 text-sm">{children}</span>;
}

function SubHeading({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <div className="mt-10 mb-4">
      <h3 className="font-display text-lg font-semibold text-foreground">{children}</h3>
      {hint ? <p className="mt-1 text-sm text-foreground-muted">{hint}</p> : null}
    </div>
  );
}

/** A number-line diagram used in the inequation examples. */
function NumberLine({
  label,
  solidFrom,
  solidTo,
  markX,
  markLabel,
  markOpen,
  zeroX,
  solLabelX,
}: {
  label: string;
  solidFrom: number;
  solidTo: number;
  markX: number;
  markLabel: string;
  markOpen: boolean;
  zeroX: number;
  solLabelX: number;
}) {
  return (
    <svg viewBox="0 0 400 90" className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={label}>
      <line x1="20" y1="45" x2="380" y2="45" stroke="#cbd5e1" strokeWidth="2" />
      <polygon points="380,45 369,39.5 369,50.5" fill="#cbd5e1" />
      <polygon points="20,45 31,39.5 31,50.5" fill="#cbd5e1" />
      <line x1={solidFrom} y1="45" x2={solidTo} y2="45" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" />
      <circle cx={zeroX} cy="45" r="3" fill="#94a3b8" />
      <text x={zeroX} y="68" textAnchor="middle" fontSize="14" fill="#64748b">0</text>
      <circle
        cx={markX}
        cy="45"
        r="7"
        fill={markOpen ? "white" : "#0d9488"}
        stroke="#0d9488"
        strokeWidth="3.5"
      />
      <text x={markX} y="26" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0f172a">
        {markLabel}
      </text>
      <text x={solLabelX} y="68" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0d9488">
        solutions
      </text>
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
          { value: "2", label: "notions clés" },
          { value: "10", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#equations"
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
          <div className="relative flex select-none flex-col items-center gap-3">
            <span className="font-serif text-[6rem] leading-none font-bold text-white italic sm:text-[7.5rem]">x</span>
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-mono text-lg text-orange-400 sm:text-2xl">
              ax + b = 0
            </div>
          </div>
        }
      />

      {/* ===================== I. ÉQUATIONS ===================== */}
      <LessonSection
        id="equations"
        kicker="01 · Les équations"
        title="Équations du premier degré"
        tone="light"
        description="Une équation compare deux expressions avec un signe = : on cherche les valeurs de x qui rendent cette égalité vraie."
      >
        <FormulaBlock tex="ax+b=0" caption="a, b, x : nombres réels" />

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemples</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Chip><Math tex="2x+11=0" /></Chip>
          <Chip><Math tex="\sqrt{2}\,x-1=0" /></Chip>
          <Chip><Math tex="-3x+\sqrt{7}=0" /></Chip>
        </div>

        <SubHeading>Résoudre une équation</SubHeading>
        <Callout variant="danger" title="Définition">
          <p>
            <strong>Résoudre une équation</strong>, c&apos;est trouver toutes les valeurs possibles de l&apos;inconnue qui rendent l&apos;égalité vraie. Chacune de ces valeurs est appelée <strong>solution</strong>.
          </p>
        </Callout>

        <p className="mt-6 text-sm font-semibold text-foreground">Résolution de <Math tex="ax+b=0" /> : quatre cas possibles</p>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-4">
            <p className="text-xs font-bold text-green-700 uppercase">Cas 1 · solution unique</p>
            <p className="mt-2 text-sm text-foreground-muted">Si <Math tex="a\neq0" /> et <Math tex="b\neq0" /> :</p>
            <MathBlock tex="ax+b=0 \iff ax=-b \iff x=\dfrac{-b}{a}" className="katex-formula-block mt-2 bg-surface text-base" />
            <p className="mt-2 text-sm">Solution unique <Math tex="\dfrac{-b}{a}" />.</p>
          </div>
          <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-4">
            <p className="text-xs font-bold text-green-700 uppercase">Cas 2 · solution unique</p>
            <p className="mt-2 text-sm text-foreground-muted">Si <Math tex="a\neq0" /> et <Math tex="b=0" /> :</p>
            <MathBlock tex="ax+b=0 \iff ax=0 \iff x=0" className="katex-formula-block mt-2 bg-surface text-base" />
            <p className="mt-2 text-sm">Solution unique <Math tex="0" />.</p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
            <p className="text-xs font-bold text-rose-700 uppercase">Cas 3 · aucune solution</p>
            <p className="mt-2 text-sm text-foreground-muted">Si <Math tex="a=0" /> et <Math tex="b\neq0" /> :</p>
            <MathBlock tex="ax+b=0 \iff 0x=-b \quad \text{(impossible)}" className="katex-formula-block mt-2 bg-surface text-base" />
            <p className="mt-2 text-sm">Pas de solution : <Math tex="S=\varnothing" />.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted p-4">
            <p className="text-xs font-bold text-foreground-muted uppercase">Cas 4 · infinité de solutions</p>
            <p className="mt-2 text-sm text-foreground-muted">Si <Math tex="a=0" /> et <Math tex="b=0" /> :</p>
            <MathBlock tex="ax+b=0 \iff 0x=0" className="katex-formula-block mt-2 bg-surface text-base" />
            <p className="mt-2 text-sm">Tous les réels sont solutions : <Math tex="S=\mathbb{R}" />.</p>
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-foreground">Exemples résolus</p>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 1</p>
            <MathBlock tex="\begin{aligned} 2x+\sqrt{3}&=0\\ 2x&=-\sqrt{3}\\ x&=\dfrac{-\sqrt{3}}{2} \end{aligned}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Solution unique : <Math tex="\dfrac{-\sqrt3}{2}" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 2</p>
            <MathBlock tex="\begin{aligned} -3x-9&=-3x+2\\ -3x+3x&=2+9\\ 0x&=11 \end{aligned}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Impossible → <strong>pas de solution</strong> (<Math tex="S=\varnothing" />)</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 3</p>
            <MathBlock tex="\begin{aligned} 5x+6&=2(x+3)\\ 5x+6&=2x+6\\ 5x-2x&=6-6\\ 3x&=0\\ x&=0 \end{aligned}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Solution unique : <Math tex="0" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 4</p>
            <MathBlock tex="\begin{aligned} \dfrac{6x}{2}-2&=3x-2\\ \dfrac{6x}{2}-\dfrac{4}{2}&=\dfrac{6x-4}{2}\\ 6x-4&=6x-4\\ 0x&=0 \end{aligned}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-sm text-foreground-muted"><strong>Tous les réels</strong> sont solutions (<Math tex="S=\mathbb{R}" />)</p>
          </div>
        </div>

        <SubHeading hint="Un produit est nul si et seulement si l'un de ses facteurs est nul.">
          Résolution de (ax + b)(cx + d) = 0
        </SubHeading>
        <Callout variant="danger" title="Définition · règle du produit nul">
          <p><Math tex="a" />, <Math tex="b" />, <Math tex="c" />, <Math tex="d" /> et <Math tex="x" /> sont des nombres réels. Les solutions de l&apos;équation</p>
          <MathBlock tex="(ax+b)(cx+d)=0" className="katex-formula-block mt-3 text-center text-lg" />
          <p className="mt-2">sont les solutions de <Math tex="ax+b=0" /> <strong>et</strong> de <Math tex="cx+d=0" />.</p>
        </Callout>

        <p className="mt-6 text-sm font-semibold text-foreground">Exemples résolus</p>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 1</p>
            <MathBlock tex="(2x+1)(x-\sqrt3)=0" className="katex-formula-block mt-2 text-base" />
            <MathBlock tex="\begin{aligned} 2x+1=0 &\quad\text{ou}\quad x-\sqrt3=0\\ x=\dfrac{-1}{2} &\quad\text{ou}\quad x=\sqrt3 \end{aligned}" className="katex-formula-block mt-1 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Deux solutions : <Math tex="\dfrac{-1}{2}" /> et <Math tex="\sqrt3" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 2</p>
            <MathBlock tex="7x(\sqrt5+x)=0" className="katex-formula-block mt-2 text-base" />
            <MathBlock tex="\begin{aligned} 7x=0 &\quad\text{ou}\quad \sqrt5+x=0\\ x=0 &\quad\text{ou}\quad x=-\sqrt5 \end{aligned}" className="katex-formula-block mt-1 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Deux solutions : <Math tex="0" /> et <Math tex="-\sqrt5" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 3</p>
            <MathBlock tex="\begin{aligned} 4x^2-9&=0\\ (2x)^2-3^2&=0\\ (2x-3)(2x+3)&=0\\ 2x-3=0 &\quad\text{ou}\quad 2x+3=0\\ x=\dfrac32 &\quad\text{ou}\quad x=\dfrac{-3}{2} \end{aligned}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Deux solutions : <Math tex="\dfrac32" /> et <Math tex="\dfrac{-3}{2}" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 4</p>
            <MathBlock tex="\begin{aligned} 2x(x-1)&=4(x-1)\\ 2x(x-1)-4(x-1)&=0\\ (x-1)(2x-4)&=0\\ x=1 &\quad\text{ou}\quad x=2 \end{aligned}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Deux solutions : <Math tex="1" /> et <Math tex="2" /></p>
          </div>
        </div>

        <SubHeading>Mise en équation de problèmes</SubHeading>
        <Callout variant="info" title="Méthode">
          <p>Pour résoudre un problème, on suit quatre étapes :</p>
          <ol className="mt-3 space-y-1.5 list-decimal pl-5">
            <li>Choix de l&apos;inconnue.</li>
            <li>Mise en équation.</li>
            <li>Résolution de l&apos;équation et vérification.</li>
            <li>Retour au problème.</li>
          </ol>
        </Callout>

        <div className="mt-5 rounded-xl border border-border p-5">
          <p className="text-sm italic text-foreground-muted">
            « La somme des âges de Aziz, de sa mère et de sa grand-mère est 90 ans. La grand-mère a le double de l&apos;âge de la mère et l&apos;âge de Aziz est le tiers de celui de sa mère. Quel est l&apos;âge de chacune ? »
          </p>
          <div className="mt-4">
            <Worked>
              <Step n={1} title="Choix de l'inconnue">
                <p>Soit <Math tex="x" /> l&apos;âge de la mère.</p>
              </Step>
              <Step n={2} title="Mise en équation">
                <p>
                  L&apos;âge de la grand-mère est <Math tex="2x" /> et l&apos;âge de Aziz est <Math tex="\dfrac{x}{3}" />. La somme des âges vaut 90 :
                </p>
                <MathBlock tex="x+2x+\dfrac{x}{3}=90" className="katex-formula-block mt-2 text-base" />
              </Step>
              <Step n={3} title="Résolution et vérification">
                <MathBlock tex="\begin{aligned} \dfrac{3x+6x+x}{3}&=\dfrac{270}{3}\\ 3x+6x+x&=270\\ 10x&=270\\ x&=27 \end{aligned}" className="katex-formula-block text-base" />
                <p className="mt-2 text-foreground-muted">Vérification : <Math tex="2\times27+27+\dfrac{27}{3}=54+27+9=90" /> ✓</p>
              </Step>
              <Step n="✓" title="Retour au problème">
                <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <p className="text-2xl font-bold text-green-700">27 <span className="text-sm font-medium">ans</span></p>
                    <p className="text-xs font-medium text-foreground-muted">Âge de la mère</p>
                  </div>
                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <p className="text-2xl font-bold text-green-700">54 <span className="text-sm font-medium">ans</span></p>
                    <p className="text-xs font-medium text-foreground-muted">Âge de la grand-mère</p>
                  </div>
                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <p className="text-2xl font-bold text-green-700">9 <span className="text-sm font-medium">ans</span></p>
                    <p className="text-xs font-medium text-foreground-muted">Âge de Aziz</p>
                  </div>
                </div>
              </Step>
            </Worked>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. INÉQUATIONS ===================== */}
      <LessonSection
        id="inequations"
        kicker="02 · Les inéquations"
        title="Inéquations du premier degré"
        tone="light"
        description="Même principe, mais avec <, >, ≤ ou ≥ : la solution n'est plus une valeur unique, mais tout un intervalle."
      >
        <Callout variant="danger" title="Définition">
          <p>Soient <Math tex="a" />, <Math tex="b" /> et <Math tex="x" /> des nombres réels. Toute inégalité de la forme</p>
          <MathBlock
            tex="ax+b>0 \quad\text{ou}\quad ax+b\geq0 \quad\text{ou}\quad ax+b<0 \quad\text{ou}\quad ax+b\leq0"
            className="katex-formula-block mt-3 overflow-x-auto text-center text-base"
          />
          <p className="mt-2">s&apos;appelle <strong>inéquation du premier degré à une inconnue</strong> <Math tex="x" />.</p>
        </Callout>

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemples</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Chip><Math tex="2x+\sqrt2\geq0" /></Chip>
          <Chip><Math tex="\dfrac12 x-7>0" /></Chip>
          <Chip><Math tex="x\sqrt3+1\leq0" /></Chip>
          <Chip><Math tex="\dfrac{x+4}{2}<0" /></Chip>
        </div>

        <SubHeading hint="On isole x comme pour une équation. La solution est un intervalle, qu'on peut représenter sur une droite graduée.">
          Résoudre une inéquation
        </SubHeading>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 1</p>
            <MathBlock tex="2x-1>0" className="katex-formula-block mt-2 text-base" />
            <MathBlock tex="\begin{aligned} 2x&>1\\ x&>\dfrac12 \end{aligned}" className="katex-formula-block mt-1 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Tous les réels <strong>strictement supérieurs</strong> à <Math tex="\dfrac12" /> sont solutions.</p>
            <div className="mt-3 rounded-xl bg-surface-muted p-4">
              <NumberLine
                label="Droite graduée : solutions strictement supérieures à un demi, cercle ouvert en un demi, flèche vers la droite"
                solidFrom={150}
                solidTo={371}
                markX={150}
                markLabel="1/2"
                markOpen
                zeroX={90}
                solLabelX={300}
              />
            </div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 2</p>
            <MathBlock tex="3x-2\geq2x-7" className="katex-formula-block mt-2 text-base" />
            <MathBlock tex="\begin{aligned} 3x-2x&\geq-7+2\\ x&\geq-5 \end{aligned}" className="katex-formula-block mt-1 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Tous les réels <strong>supérieurs ou égaux</strong> à <Math tex="-5" /> sont solutions.</p>
            <div className="mt-3 rounded-xl bg-surface-muted p-4">
              <NumberLine
                label="Droite graduée : solutions supérieures ou égales à moins cinq, cercle fermé, flèche vers la droite"
                solidFrom={110}
                solidTo={371}
                markX={110}
                markLabel="-5"
                markOpen={false}
                zeroX={250}
                solLabelX={320}
              />
            </div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 3</p>
            <MathBlock tex="x-5>3x-9" className="katex-formula-block mt-2 text-base" />
            <MathBlock tex="\begin{aligned} x-3x&>-9+5\\ -2x&>-4\\ -x&>\dfrac{-4}{2}\\ -x&>-2\\ x&<2 \end{aligned}" className="katex-formula-block mt-1 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Tous les réels <strong>strictement inférieurs</strong> à <Math tex="2" /> sont solutions.</p>
            <Callout variant="warning" title="À retenir">
              <p>
                Pour passer de <Math tex="-x>-2" /> à <Math tex="x<2" />, on a multiplié les deux membres par <Math tex="-1" /> : en multipliant (ou divisant) par un nombre <strong>négatif</strong>, le sens de l&apos;inégalité s&apos;inverse.
              </p>
            </Callout>
            <div className="mt-3 rounded-xl bg-surface-muted p-4">
              <NumberLine
                label="Droite graduée : solutions strictement inférieures à deux, cercle ouvert, flèche vers la gauche"
                solidFrom={29}
                solidTo={250}
                markX={250}
                markLabel="2"
                markOpen
                zeroX={150}
                solLabelX={100}
              />
            </div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs text-foreground-muted uppercase">exemple 4</p>
            <MathBlock tex="\dfrac{3x-5}{4}\leq-x-1" className="katex-formula-block mt-2 text-base" />
            <MathBlock tex="\begin{aligned} \dfrac{3x-5}{4}&\leq\dfrac{-4x-4}{4}\\ 3x-5&\leq-4x-4\\ 3x+4x&\leq-4+5\\ 7x&\leq1\\ x&\leq\dfrac17 \end{aligned}" className="katex-formula-block mt-1 text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Tous les réels <strong>inférieurs ou égaux</strong> à <Math tex="\dfrac17" /> sont solutions.</p>
            <div className="mt-3 rounded-xl bg-surface-muted p-4">
              <NumberLine
                label="Droite graduée : solutions inférieures ou égales à un septième, cercle fermé, flèche vers la gauche"
                solidFrom={29}
                solidTo={200}
                markX={200}
                markLabel="1/7"
                markOpen={false}
                zeroX={150}
                solLabelX={90}
              />
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== FICHE MÉMO ===================== */}
      <LessonSection
        id="memo"
        kicker="03 · Fiche mémo"
        title="Points clés à retenir"
        tone="muted"
        description="Les cinq réflexes indispensables avant d'attaquer les exercices."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Règle du produit nul</p>
            <MathBlock tex="A\times B=0 \iff A=0 \ \text{ou}\ B=0" className="katex-formula-block mt-2 text-center text-base" />
            <p className="mt-2 text-sm text-foreground-muted">Un produit est nul si et seulement si l&apos;un au moins des facteurs est nul.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">La règle du signe</p>
            <p className="mt-2 text-sm text-foreground-muted">
              En multipliant ou divisant les <strong>deux membres</strong> d&apos;une inéquation par un nombre <strong>négatif</strong>, le sens de l&apos;inégalité s&apos;inverse.
            </p>
            <MathBlock tex="-2x>-4 \iff x<2" className="katex-formula-block mt-2 text-center text-base" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Identités remarquables</p>
            <div className="mt-2 space-y-1.5">
              <MathBlock tex="a^2-b^2=(a-b)(a+b)" className="katex-formula-block bg-surface-muted py-2 text-sm" />
              <MathBlock tex="(a+b)^2=a^2+2ab+b^2" className="katex-formula-block bg-surface-muted py-2 text-sm" />
              <MathBlock tex="(a-b)^2=a^2-2ab+b^2" className="katex-formula-block bg-surface-muted py-2 text-sm" />
            </div>
            <p className="mt-2 text-sm text-foreground-muted">Utiles pour factoriser certaines équations (exercices 4 et 5).</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Les 4 cas de ax + b = 0</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li className="flex items-center justify-between gap-2 border-b border-dashed border-border pb-1.5">
                <Math tex="a\neq0,\ b\neq0" /> <span className="font-semibold text-green-700"><Math tex="x=\frac{-b}{a}" /></span>
              </li>
              <li className="flex items-center justify-between gap-2 border-b border-dashed border-border pb-1.5">
                <Math tex="a\neq0,\ b=0" /> <span className="font-semibold text-green-700"><Math tex="x=0" /></span>
              </li>
              <li className="flex items-center justify-between gap-2 border-b border-dashed border-border pb-1.5">
                <Math tex="a=0,\ b\neq0" /> <span className="font-semibold text-rose-600"><Math tex="S=\varnothing" /></span>
              </li>
              <li className="flex items-center justify-between gap-2">
                <Math tex="a=0,\ b=0" /> <span className="font-semibold text-foreground"><Math tex="S=\mathbb{R}" /></span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 sm:col-span-2">
            <p className="font-display font-semibold text-foreground">Méthode pour un problème</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">1. Choix de l&apos;inconnue</div>
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">2. Mise en équation</div>
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">3. Résolution + vérification</div>
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">4. Retour au problème</div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="10 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={10} celebrationTitle="Bravo, les 10 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les équations et les inéquations.">
          <ExerciseCard
            id="1"
            index={1}
            title="Équations · premier degré"
            itemsLabel="3 équations"
            items={
              <div className="space-y-2.5">
                <EqRow n="a" tex="5x-1=2x+7" />
                <EqRow n="b" tex="7x-3(4x+2)=2-5(x-1)" />
                <EqRow n="c" tex="4x-7-2(4x+1)=-2(3+2x)-3" />
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="a">
                  <MathBlock tex="\begin{aligned} 5x-1&=2x+7\\ 5x-2x&=7+1\\ 3x&=8\\ x&=\dfrac83 \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac83\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="b">
                  <MathBlock tex="\begin{aligned} 7x-3(4x+2)&=2-5(x-1)\\ 7x-12x-6&=2-5x+5\\ -5x-6&=-5x+7\\ -5x+5x&=7+6\\ 0x&=13 \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1">Impossible → <Math tex="S=\varnothing" /></p>
                </CorrectionCard>
                <CorrectionCard n="c">
                  <MathBlock tex="\begin{aligned} 4x-7-2(4x+1)&=-2(3+2x)-3\\ 4x-7-8x-2&=-6-4x-3\\ -4x-9&=-4x-9\\ 0x&=0 \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1">Vrai pour tout <Math tex="x" /> → <Math tex="S=\mathbb{R}" /></p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Équations · racines carrées"
            itemsLabel="5 équations"
            items={
              <div className="space-y-2.5">
                <EqRow n="a-b" tex="2x+\sqrt2=0 \qquad;\qquad \sqrt2\,x+5=8" />
                <EqRow n="c" tex="2x+4\sqrt2=-2(3\sqrt2+x)" />
                <EqRow n="d" tex="x\sqrt3+\sqrt2=x\sqrt2+\sqrt3" />
                <EqRow n="e" tex="\sqrt7(x+1)-3\sqrt7=x-2" />
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="a">
                  <Math tex="2x+\sqrt2=0" /> :
                  <MathBlock tex="2x=-\sqrt2 \implies x=\dfrac{-\sqrt2}{2}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{-\sqrt2}{2}\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="b">
                  <Math tex="\sqrt2\,x+5=8" /> :
                  <MathBlock tex="\sqrt2\,x=3 \implies x=\dfrac{3}{\sqrt2}=\dfrac{3\sqrt2}{2}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{3\sqrt2}{2}\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="c">
                  <MathBlock tex="\begin{aligned} 2x+4\sqrt2&=-6\sqrt2-2x\\ 4x&=-10\sqrt2\\ x&=\dfrac{-10\sqrt2}{4}=\dfrac{-5\sqrt2}{2} \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{-5\sqrt2}{2}\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="d">
                  <MathBlock tex="\begin{aligned} x\sqrt3-x\sqrt2&=\sqrt3-\sqrt2\\ x(\sqrt3-\sqrt2)&=\sqrt3-\sqrt2\\ x&=1 \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1">(on divise par <Math tex="\sqrt3-\sqrt2\neq0" />) → <Math tex="S=\{1\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="e">
                  <MathBlock tex="\begin{aligned} \sqrt7\,x+\sqrt7-3\sqrt7&=x-2\\ \sqrt7\,x-2\sqrt7&=x-2\\ x(\sqrt7-1)&=2(\sqrt7-1)\\ x&=2 \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1"><Math tex="S=\{2\}" /></p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Équations · fractions"
            itemsLabel="4 équations"
            items={
              <div className="space-y-2.5">
                <EqRow n="a" tex="\dfrac{x+2}{3}-\dfrac{1-2x}{5}=\dfrac{7x+1}{15}" />
                <EqRow n="b" tex="\dfrac{1-2x}{4}+\dfrac{2x-1}{3}=4-8x" />
                <EqRow n="c" tex="\dfrac{3\sqrt2\,x-1}{2}-\dfrac{x+1}{3}=x-1" />
                <EqRow n="d" tex="\dfrac{\sqrt3(x-1)}{2}-\dfrac{\sqrt2(x+1)}{3}=3\sqrt3+2\sqrt2" />
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="a">
                  On multiplie par 15 :
                  <MathBlock tex="\begin{aligned} 5(x+2)-3(1-2x)&=7x+1\\ 5x+10-3+6x&=7x+1\\ 11x+7&=7x+1\\ 4x&=-6\\ x&=\dfrac{-3}{2} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{-3}{2}\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="b">
                  On multiplie par 12 :
                  <MathBlock tex="\begin{aligned} 3(1-2x)+4(2x-1)&=12(4-8x)\\ 3-6x+8x-4&=48-96x\\ 2x-1&=48-96x\\ 98x&=49\\ x&=\dfrac12 \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac12\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="c">
                  On multiplie par 6 :
                  <MathBlock tex="\begin{aligned} 3(3\sqrt2\,x-1)-2(x+1)&=6(x-1)\\ 9\sqrt2\,x-3-2x-2&=6x-6\\ 9\sqrt2\,x-2x-6x&=-6+5\\ x(9\sqrt2-8)&=-1\\ x&=\dfrac{-1}{9\sqrt2-8}=\dfrac{-(9\sqrt2+8)}{98} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{-(8+9\sqrt2)}{98}\right\} \approx -0{,}21" /></p>
                </CorrectionCard>
                <CorrectionCard n="d">
                  On multiplie par 6 :
                  <MathBlock tex="\begin{aligned} 3\sqrt3(x-1)-2\sqrt2(x+1)&=6(3\sqrt3+2\sqrt2)\\ x(3\sqrt3-2\sqrt2)&=21\sqrt3+14\sqrt2\\ x&=\dfrac{21\sqrt3+14\sqrt2}{3\sqrt3-2\sqrt2}=\dfrac{245+84\sqrt6}{19} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{245+84\sqrt6}{19}\right\} \approx 23{,}72" /></p>
                  <p className="mt-1 text-xs text-foreground-muted italic">(on multiplie numérateur et dénominateur par la quantité conjuguée <Math tex="3\sqrt3+2\sqrt2" />)</p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Équations · produit nul"
            itemsLabel="3 équations"
            items={
              <div className="space-y-2.5">
                <EqRow n="a" tex="(x-18)(x+13)=0" />
                <EqRow n="b" tex="(3x+4)(-2x+5)=0" />
                <EqRow n="c" tex="7x(-3x-11)(25-x)=0" />
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="a">
                  <MathBlock tex="x-18=0 \ \text{ou}\ x+13=0 \implies x=18 \ \text{ou}\ x=-13" className="katex-formula-block text-base" />
                  <p className="mt-1"><Math tex="S=\{-13\,;\,18\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="b">
                  <MathBlock tex="3x+4=0 \ \text{ou}\ -2x+5=0 \implies x=\dfrac{-4}{3} \ \text{ou}\ x=\dfrac52" className="katex-formula-block text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{-4}{3}\,;\,\dfrac52\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="c">
                  <MathBlock tex="7x=0 \ \text{ou}\ -3x-11=0 \ \text{ou}\ 25-x=0" className="katex-formula-block text-base" />
                  <MathBlock tex="x=0 \ \text{ou}\ x=\dfrac{-11}{3} \ \text{ou}\ x=25" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left\{\dfrac{-11}{3}\,;\,0\,;\,25\right\}" /></p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Équations · identités remarquables"
            itemsLabel="6 équations"
            items={
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <EqRow n="a" tex="4x^2-9=2x+3" />
                <EqRow n="b" tex="49x^2=28x-4" />
                <EqRow n="c" tex="9x^2+24x+16=0" />
                <EqRow n="d" tex="x^2-25=0" />
                <div className="sm:col-span-2"><EqRow n="e" tex="(x^2+3)(x-2)+(2x+3)(x^2+3)=0" /></div>
                <div className="sm:col-span-2"><EqRow n="f" tex="(x+1)(x-3)=(x+1)(3x-4)" /></div>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a">
                  On factorise <Math tex="4x^2-9" /> :
                  <MathBlock tex="\begin{aligned} (2x-3)(2x+3)&=2x+3\\ (2x+3)(2x-3-1)&=0\\ (2x+3)(2x-4)&=0 \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="x=\dfrac{-3}{2}" /> ou <Math tex="x=2" /> → <Math tex="S=\left\{\dfrac{-3}{2}\,;\,2\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="b">
                  <Math tex="(7x)^2-2(7x)(2)+2^2" /> :
                  <MathBlock tex="\begin{aligned} 49x^2-28x+4&=0\\ (7x-2)^2&=0 \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="x=\dfrac27" /> (solution double) → <Math tex="S=\left\{\dfrac27\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="c">
                  <Math tex="(3x)^2+2(3x)(4)+4^2" /> :
                  <MathBlock tex="(3x+4)^2=0" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="x=\dfrac{-4}{3}" /> (solution double) → <Math tex="S=\left\{\dfrac{-4}{3}\right\}" /></p>
                </CorrectionCard>
                <CorrectionCard n="d">
                  Différence de carrés :
                  <MathBlock tex="(x-5)(x+5)=0" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="x=-5" /> ou <Math tex="x=5" /> → <Math tex="S=\{-5\,;\,5\}" /></p>
                </CorrectionCard>
                <div className="sm:col-span-2">
                  <CorrectionCard n="e">
                    On factorise par <Math tex="(x^2+3)" /> :
                    <MathBlock tex="(x^2+3)\big[(x-2)+(2x+3)\big]=0 \implies (x^2+3)(3x+1)=0" className="katex-formula-block mt-1 text-base" />
                    <p className="mt-1">
                      Or <Math tex="x^2+3>0" /> pour tout <Math tex="x" /> réel (jamais nul), donc <Math tex="3x+1=0" /> → <Math tex="x=\dfrac{-1}{3}" /> → <Math tex="S=\left\{\dfrac{-1}{3}\right\}" />
                    </p>
                  </CorrectionCard>
                </div>
                <div className="sm:col-span-2">
                  <CorrectionCard n="f">
                    On factorise par <Math tex="(x+1)" /> :
                    <MathBlock tex="(x+1)\big[(x-3)-(3x-4)\big]=0 \implies (x+1)(-2x+1)=0" className="katex-formula-block mt-1 text-base" />
                    <p className="mt-1"><Math tex="x=-1" /> ou <Math tex="x=\dfrac12" /> → <Math tex="S=\left\{-1\,;\,\dfrac12\right\}" /></p>
                  </CorrectionCard>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Inéquations · premier degré"
            itemsLabel="6 inéquations"
            items={
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <EqRow n="a" tex="-\dfrac{x}{2}+3x-4<2" />
                <EqRow n="b" tex="\dfrac{2x}{5}-\dfrac12>\dfrac{x}{3}+\dfrac13" />
                <EqRow n="c" tex="3x-\dfrac23\leq10-\dfrac{x}{3}" />
                <EqRow n="d" tex="\dfrac25 x-\dfrac15\geq-\dfrac14" />
                <EqRow n="e" tex="\dfrac{2x-1}{5}>\dfrac{x+1}{3}" />
                <EqRow n="f" tex="\dfrac{7x-5}{3}\geq5x-3" />
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a">
                  On multiplie par 2 :
                  <MathBlock tex="\begin{aligned} -x+6x-8&<4\\ 5x&<12\\ x&<\dfrac{12}{5} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left]-\infty\,;\,\dfrac{12}{5}\right[" /></p>
                </CorrectionCard>
                <CorrectionCard n="b">
                  On multiplie par 30 :
                  <MathBlock tex="\begin{aligned} 12x-15&>10x+10\\ 2x&>25\\ x&>\dfrac{25}{2} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left]\dfrac{25}{2}\,;\,+\infty\right[" /></p>
                </CorrectionCard>
                <CorrectionCard n="c">
                  On multiplie par 3 :
                  <MathBlock tex="\begin{aligned} 9x-2&\leq30-x\\ 10x&\leq32\\ x&\leq\dfrac{16}{5} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left]-\infty\,;\,\dfrac{16}{5}\right]" /></p>
                </CorrectionCard>
                <CorrectionCard n="d">
                  On multiplie par 20 :
                  <MathBlock tex="\begin{aligned} 8x-4&\geq-5\\ 8x&\geq-1\\ x&\geq\dfrac{-1}{8} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left[\dfrac{-1}{8}\,;\,+\infty\right[" /></p>
                </CorrectionCard>
                <CorrectionCard n="e">
                  On multiplie par 15 :
                  <MathBlock tex="\begin{aligned} 3(2x-1)&>5(x+1)\\ 6x-3&>5x+5\\ x&>8 \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left]8\,;\,+\infty\right[" /></p>
                </CorrectionCard>
                <CorrectionCard n="f">
                  On multiplie par 3 :
                  <MathBlock tex="\begin{aligned} 7x-5&\geq15x-9\\ -8x&\geq-4\\ x&\leq\dfrac12 \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1">On divise par <Math tex="-8" /> (négatif) → le sens change. <Math tex="S=\left]-\infty\,;\,\dfrac12\right]" /></p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Inéquations · racines carrées"
            itemsLabel="6 inéquations"
            items={
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <EqRow n="a" tex="\sqrt{11}(1-x)\leq3(x-1)" />
                <EqRow n="b" tex="\dfrac{\sqrt2\,x-1}{\sqrt2}-\dfrac{x}{2\sqrt2}<\dfrac{x}{2}" />
                <EqRow n="c" tex="7(x-\sqrt5)+4x\geq2(x+\sqrt5)" />
                <EqRow n="d" tex="\dfrac{x+\sqrt3}{2}-\dfrac{2x}{4}>2\sqrt3" />
                <EqRow n="e" tex="\dfrac{x}{\sqrt2+1}-\dfrac{x}{\sqrt2-1}\leq\sqrt5" />
                <EqRow n="f" tex="2x+4\sqrt2\geq-2(3\sqrt2+x)" />
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a">
                  <MathBlock tex="\begin{aligned} \sqrt{11}-\sqrt{11}x&\leq3x-3\\ -x(\sqrt{11}+3)&\leq-(\sqrt{11}+3)\\ x&\geq1 \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1">(on divise par <Math tex="-(\sqrt{11}+3)" />, négatif) → <Math tex="S=[1\,;\,+\infty[" /></p>
                </CorrectionCard>
                <CorrectionCard n="b">
                  On réduit chaque terme :
                  <MathBlock tex="\begin{aligned} x-\dfrac{\sqrt2}{2}-\dfrac{x\sqrt2}{4}&<\dfrac{x}{2}\\ x(2-\sqrt2)&<2\sqrt2\\ x&<2+2\sqrt2 \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left]-\infty\,;\,2+2\sqrt2\right[" /></p>
                </CorrectionCard>
                <CorrectionCard n="c">
                  <MathBlock tex="\begin{aligned} 7x-7\sqrt5+4x&\geq2x+2\sqrt5\\ 9x&\geq9\sqrt5\\ x&\geq\sqrt5 \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1"><Math tex="S=[\sqrt5\,;\,+\infty[" /></p>
                </CorrectionCard>
                <CorrectionCard n="d">
                  Le terme en <Math tex="x" /> disparaît :
                  <MathBlock tex="\dfrac{x+\sqrt3}{2}-\dfrac{x}{2}=\dfrac{\sqrt3}{2}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1">L&apos;inéquation devient <Math tex="\dfrac{\sqrt3}{2}>2\sqrt3" />, <strong>faux</strong> quel que soit <Math tex="x" /> → <Math tex="S=\varnothing" /></p>
                </CorrectionCard>
                <CorrectionCard n="e">
                  On rationalise chaque fraction :
                  <MathBlock tex="\begin{aligned} x(\sqrt2-1)-x(\sqrt2+1)&\leq\sqrt5\\ -2x&\leq\sqrt5\\ x&\geq\dfrac{-\sqrt5}{2} \end{aligned}" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-1"><Math tex="S=\left[\dfrac{-\sqrt5}{2}\,;\,+\infty\right[" /></p>
                </CorrectionCard>
                <CorrectionCard n="f">
                  <MathBlock tex="\begin{aligned} 2x+4\sqrt2&\geq-6\sqrt2-2x\\ 4x&\geq-10\sqrt2\\ x&\geq\dfrac{-5\sqrt2}{2} \end{aligned}" className="katex-formula-block text-base" />
                  <p className="mt-1"><Math tex="S=\left[\dfrac{-5\sqrt2}{2}\,;\,+\infty\right[" /></p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Problème · nombres consécutifs"
            items={
              <p className="text-sm">
                La somme de trois nombres entiers naturels consécutifs est <strong>216</strong>. Quels sont ces nombres ?
              </p>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p><strong>1. Inconnue :</strong> soit <Math tex="n" /> le premier des trois entiers consécutifs. Les nombres sont <Math tex="n" />, <Math tex="n+1" />, <Math tex="n+2" />.</p>
                <p><strong>2. Mise en équation :</strong></p>
                <MathBlock tex="n+(n+1)+(n+2)=216" className="katex-formula-block text-base" />
                <p><strong>3. Résolution :</strong></p>
                <MathBlock tex="\begin{aligned} 3n+3&=216\\ 3n&=213\\ n&=71 \end{aligned}" className="katex-formula-block text-base" />
                <p className="text-foreground-muted">Vérification : <Math tex="71+72+73=216" /> ✓</p>
                <p className="font-semibold text-green-700"><strong>4. Réponse :</strong> les trois nombres sont 71, 72 et 73.</p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Problème · âges"
            items={
              <p className="text-sm">
                Actuellement, l&apos;âge de Saïd est le double de celui de Mourad. Dans 7 ans, ils auront à eux deux 71 ans. Quel est l&apos;âge de chacun ?
              </p>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p><strong>1. Inconnue :</strong> soit <Math tex="x" /> l&apos;âge actuel de Mourad. L&apos;âge actuel de Saïd est <Math tex="2x" />.</p>
                <p><strong>2. Mise en équation :</strong> dans 7 ans, Mourad aura <Math tex="x+7" /> ans et Saïd <Math tex="2x+7" /> ans :</p>
                <MathBlock tex="(x+7)+(2x+7)=71" className="katex-formula-block text-base" />
                <p><strong>3. Résolution :</strong></p>
                <MathBlock tex="\begin{aligned} 3x+14&=71\\ 3x&=57\\ x&=19 \end{aligned}" className="katex-formula-block text-base" />
                <p className="text-foreground-muted">Vérification : dans 7 ans, <Math tex="26+45=71" /> ✓</p>
                <p className="font-semibold text-green-700"><strong>4. Réponse :</strong> Mourad a 19 ans, Saïd a 38 ans.</p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Problème · partage"
            itemsLabel="2 questions"
            items={
              <>
                <p className="text-sm">
                  Quatre personnes partagent une somme d&apos;argent. Le premier prend <Math tex="\dfrac16" />, le second les <Math tex="\dfrac25" />, le troisième le <Math tex="\dfrac{3}{10}" /> ; il reste 240 dhs pour le quatrième.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-foreground-muted">
                  <li>Quel est le montant de la somme à partager ?</li>
                  <li>Quelle est la part de chacun ?</li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p><strong>1. Inconnue :</strong> soit <Math tex="x" /> le montant total (en dhs) à partager.</p>
                <p>
                  <strong>2. Mise en équation :</strong> le premier prend <Math tex="\frac{x}{6}" />, le second <Math tex="\frac{2x}{5}" />, le troisième <Math tex="\frac{3x}{10}" />, et il reste 240 dhs :
                </p>
                <MathBlock tex="x-\dfrac{x}{6}-\dfrac{2x}{5}-\dfrac{3x}{10}=240" className="katex-formula-block text-base" />
                <p><strong>3. Résolution</strong> (dénominateur commun 30) :</p>
                <MathBlock tex="\begin{aligned} \dfrac{30x-5x-12x-9x}{30}&=240\\ \dfrac{4x}{30}&=240\\ x&=1800 \end{aligned}" className="katex-formula-block text-base" />
                <p className="font-semibold text-green-700"><strong>4. Réponse :</strong></p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="rounded-xl bg-surface-muted p-3 text-center"><p className="text-lg font-bold text-green-700">1800</p><p className="text-[11px] text-foreground-muted">Total (dhs)</p></div>
                  <div className="rounded-xl bg-surface-muted p-3 text-center"><p className="text-lg font-bold text-green-700">300</p><p className="text-[11px] text-foreground-muted">Part 1er</p></div>
                  <div className="rounded-xl bg-surface-muted p-3 text-center"><p className="text-lg font-bold text-green-700">720</p><p className="text-[11px] text-foreground-muted">Part 2e</p></div>
                  <div className="rounded-xl bg-surface-muted p-3 text-center"><p className="text-lg font-bold text-green-700">540</p><p className="text-[11px] text-foreground-muted">Part 3e</p></div>
                </div>
                <p className="text-xs text-foreground-muted">Vérification : <Math tex="300+720+540+240=1800" /> ✓ (le 4e reçoit les 240 dhs restants)</p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
