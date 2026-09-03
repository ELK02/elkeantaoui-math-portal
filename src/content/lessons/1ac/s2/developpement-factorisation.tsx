import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Développement et Factorisation · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur le développement et la factorisation (1ère année collège) : propriétés, identités remarquables et 13 exercices corrigés en détail (réduction, développement, aires, démonstrations).",
  kicker: "1ʳᵉ Année Collège · Chapitre 1",
  heroTitle: "Développement et Factorisation",
  heroSubtitle:
    "Transformer un produit en somme, ou une somme en produit. Deux mouvements inverses, une seule logique à comprendre.",
  footerNote: "Développement et factorisation · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "developpement", label: "Développement" },
    { id: "factorisation", label: "Factorisation" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Small numbered/lettered pill used inside item grids. */
function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls = tone === "rose" ? "bg-rose-100 text-rose-600" : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
      {children}
    </span>
  );
}

function Item({ n, tone = "rose", children }: { n: number | string; tone?: "neutral" | "rose"; children: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <Pill tone={tone}>{n}</Pill>
      <span className="text-sm"><Math tex={children} /></span>
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

/** A little "before -> after" derivation block, one line per step. */
function Steps({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-1 rounded-xl border border-border p-4 text-sm">
      {lines.map((tex, i) => (
        <p key={i} className={i === 0 ? "" : i === lines.length - 1 ? "pl-4 font-bold text-foreground" : "pl-4 text-foreground-muted"}>
          <Math tex={tex} />
        </p>
      ))}
    </div>
  );
}

function PropertyBox({ note, lines }: { note: string; lines: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-center">
      <p className="mb-2 text-xs font-semibold text-foreground-muted">{note}</p>
      <div className="space-y-1 text-lg font-semibold text-foreground">
        {lines.map((tex, i) => (
          <p key={i}><Math tex={tex} /></p>
        ))}
      </div>
    </div>
  );
}

function ProgramCard({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">{title}</p>
      <ol className="list-inside list-decimal space-y-1 text-sm text-foreground">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
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
          { value: "13", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#developpement"
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
          <div className="flex select-none flex-col items-center gap-2 font-serif text-white italic">
            <span className="text-4xl sm:text-5xl">k(a+b)</span>
            <span className="text-2xl text-orange-400">⇅</span>
            <span className="text-4xl sm:text-5xl">ka+kb</span>
          </div>
        }
      />

      {/* ===================== I. DEVELOPPEMENT ===================== */}
      <LessonSection
        id="developpement"
        kicker="01 · Transformer un produit"
        title="Développement"
        tone="light"
        description="Écrire un produit sous forme de somme ou de différence."
      >
        <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
          <p className="mb-1 text-xs font-bold text-rose-600 uppercase">Définition</p>
          <p className="text-foreground">
            Le <strong>développement</strong>, c&apos;est l&apos;écriture d&apos;un produit en une somme ou en une différence.
          </p>
        </div>

        <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">Propriétés</p>

        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-semibold text-foreground">a) Produit d&apos;un nombre par une somme</p>
            <PropertyBox
              note="Soient a, b et k des nombres relatifs."
              lines={["k\\times(a+b) = k\\times a + k\\times b", "(a+b)\\times k = k\\times a + k\\times b"]}
            />
            <p className="mt-3 mb-2 text-xs font-semibold text-foreground-muted">Exemples, développons puis calculons :</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Steps lines={["2\\times(1+5) = 2\\times 1 + 2\\times 5", "= 2+10", "= 12"]} />
              <Steps lines={["(-10+3)\\times(-1{,}5) = -1{,}5\\times(-10) + (-1{,}5)\\times 3", "= 15 + (-4{,}5) = 15 - 4{,}5", "= 10{,}5"]} />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-foreground">b) Produit d&apos;un nombre par une différence</p>
            <PropertyBox
              note="Soient a, b et k des nombres relatifs."
              lines={["k\\times(a-b) = k\\times a - k\\times b", "(a-b)\\times k = k\\times a - k\\times b"]}
            />
            <p className="mt-3 mb-2 text-xs font-semibold text-foreground-muted">Exemples, développons puis calculons :</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Steps lines={["1{,}2\\times(10-2) = 1{,}2\\times 10 - 1{,}2\\times 2", "= 12 - 2{,}4", "= 9{,}6"]} />
              <Steps lines={["(-8-5)\\times(-4) = -4\\times(-8) - (-4)\\times 5", "= 32 - (-20) = 32+20", "= 52"]} />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-foreground">c) Produit de deux sommes / deux différences</p>
            <PropertyBox
              note="Soient a, b, c et d des nombres relatifs."
              lines={["(a+b)\\times(c+d) = ac+ad+bc+bd", "(a-b)\\times(c-d) = ac-ad-bc+bd"]}
            />
            <p className="mt-3 mb-2 text-xs font-semibold text-foreground-muted">Exemples, développons puis calculons :</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Steps lines={["(2{,}5+10)(5+1) = 2{,}5\\times 5+2{,}5\\times 1+10\\times 5+10\\times 1", "= 12{,}5+2{,}5+50+10", "= 75"]} />
              <Steps lines={["(4-12)(15-6) = 4\\times 15-4\\times 6-12\\times 15+12\\times 6", "= 60-24-180+72 = 60+72-24-180", "= -72"]} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">Développement et calcul littéral</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Steps lines={["A = 2x(x+1)", "= 2x^{2}+2x"]} />
            <Steps lines={["B = -3x(-x+1) + x(2x+4)", "= 3x^{2}-3x+2x^{2}+4x", "= 5x^{2}+x"]} />
            <Steps lines={["C = (2x-1)(-3x-2)", "= 6x^{2}-4x+3x+2", "= 6x^{2}-x+2"]} />
            <Steps lines={["D = 2x(-x^{2}+3x-1) + 2x^{2}(5x-2)", "= -2x^{3}+6x^{2}-2x+10x^{3}-4x^{2}", "= 8x^{3}+2x^{2}-2x"]} />
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
          <h3 className="mb-1 text-xl font-bold">Cas particuliers : les identités remarquables</h3>
          <p className="mb-6 text-sm text-neutral-400">Trois développements à connaître par cœur.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4">
              <MathBlock tex="(a+b)^{2} = a^{2}+2ab+b^{2}" className="text-center text-lg font-bold" />
              <div className="mt-3 space-y-1 border-t border-white/10 pt-3 text-sm text-neutral-300">
                <p><Math tex="(2x+1)^{2} = (2x+1)(2x+1)" /></p>
                <p className="pl-2"><Math tex="= 4x^{2}+2x+2x+1" /></p>
                <p className="pl-2 font-bold text-white"><Math tex="= 4x^{2}+4x+1" /></p>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <MathBlock tex="(a-b)^{2} = a^{2}-2ab+b^{2}" className="text-center text-lg font-bold" />
              <div className="mt-3 space-y-1 border-t border-white/10 pt-3 text-sm text-neutral-300">
                <p><Math tex="(3x-2)^{2} = (3x-2)(3x-2)" /></p>
                <p className="pl-2"><Math tex="= 9x^{2}-6x-6x+4" /></p>
                <p className="pl-2 font-bold text-white"><Math tex="= 9x^{2}-12x+4" /></p>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <MathBlock tex="(a+b)(a-b) = a^{2}-b^{2}" className="text-center text-lg font-bold" />
              <div className="mt-3 space-y-1 border-t border-white/10 pt-3 text-sm text-neutral-300">
                <p><Math tex="(4x-5)(4x+5)" /></p>
                <p className="pl-2"><Math tex="= 16x^{2}+20x-20x-25" /></p>
                <p className="pl-2 font-bold text-white"><Math tex="= 16x^{2}-25" /></p>
              </div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. FACTORISATION ===================== */}
      <LessonSection
        id="factorisation"
        kicker="02 · Transformer une somme"
        title="Factorisation"
        tone="muted"
        description="Écrire une somme ou une différence sous forme de produit."
      >
        <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
          <p className="mb-1 text-xs font-bold text-rose-600 uppercase">Définition</p>
          <p className="text-foreground">
            La <strong>factorisation</strong>, c&apos;est l&apos;écriture d&apos;une somme ou d&apos;une différence en un produit.
          </p>
        </div>

        <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">Propriétés</p>
        <PropertyBox
          note="Soient a, b et k des nombres relatifs. k est appelé facteur commun."
          lines={["k\\times a + k\\times b = k\\times(a+b)", "k\\times a - k\\times b = k\\times(a-b)"]}
        />

        <div className="mt-4">
          <Callout variant="warning" title="Remarque">
            <p>Pour factoriser, on cherche d&apos;abord le facteur commun.</p>
          </Callout>
        </div>

        <p className="mt-6 mb-2 text-xs font-semibold text-foreground-muted">Exemples, factorisons puis calculons :</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Steps lines={["a = 2\\times 7 + 2\\times 11 = 2(7+11)", "= 2\\times 18", "= 36"]} />
          <Steps lines={["b = -5\\times(-10) - (-5)\\times 22 = -5(-10-22)", "= -5\\times(-32)", "= 160"]} />
        </div>

        <div className="mt-8">
          <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">Factorisation et calcul littéral</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Steps lines={["A = 3a^{3}b^{4} + 7a^{2}b^{7}c", "= a^{2}b^{4}(3a+7b^{3}c)"]} />
            <Steps lines={["B = 12a^{5}b^{4}c^{2}+6a^{2}b^{2}c^{2}-18a^{4}b^{3}c^{4}", "= 6a^{2}b^{2}c^{2}(2a^{3}b^{2}+1-3a^{2}bc^{2})"]} />
            <Steps lines={["C = 6x^{4} + 4x^{2} - 2x", "= 2x(3x^{3} + 2x - 1)"]} />
            <Steps lines={["D = 2x(x+1) + 3(x+1)", "= (x+1)(2x+3)"]} />
            <div className="sm:col-span-2">
              <Steps lines={["E = (2x+3)^{2} + 3x(2x+3) - (2x+3)", "= (2x+3)(2x+3) + 3x(2x+3) - (2x+3)", "= (2x+3)(2x+3+3x-1)", "= (2x+3)(5x+2)"]} />
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="13 exercices corrigés"
        tone="light"
        description="Calcul littéral : réduire, développer, factoriser. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={13} celebrationTitle="Bravo, les 13 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le calcul littéral.">
          <ExerciseCard
            id="1"
            index={1}
            title="Réduire les expressions suivantes"
            itemsLabel="6 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A">{"4x^{2}-5x+9-3x-7x^{2}-2"}</Item>
                <Item n="B">{"-3+4x-9x^{2}+5x-2x^{2}+6"}</Item>
                <Item n="C">{"13x-x^{2}+12-7x+3x^{2}-4"}</Item>
                <Item n="D">{"3x-4-7x-2+4x-6"}</Item>
                <Item n="E">{"2x^{2}-x+4-x^{2}+4x-5"}</Item>
                <Item n="F">{"-3+2x+x^{2}-5x+4x^{2}-1"}</Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="(4x^{2}-7x^{2})+(-5x-3x)+(9-2) = \mathbf{-3x^{2}-8x+7}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="(-9x^{2}-2x^{2})+(4x+5x)+(-3+6) = \mathbf{-11x^{2}+9x+3}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="(-x^{2}+3x^{2})+(13x-7x)+(12-4) = \mathbf{2x^{2}+6x+8}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="(3x-7x+4x)+(-4-2-6) = \mathbf{-12}" /> (les <Math tex="x" /> s&apos;annulent)</CorrectionCard>
                <CorrectionCard n="E"><Math tex="(2x^{2}-x^{2})+(-x+4x)+(4-5) = \mathbf{x^{2}+3x-1}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="(x^{2}+4x^{2})+(2x-5x)+(-3-1) = \mathbf{5x^{2}-3x-4}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Supprimer les parenthèses, puis réduire"
            itemsLabel="7 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A">{"50-(x+20)"}</Item>
                <Item n="B">{"-(10+x)+(x+5)"}</Item>
                <Item n="C">{"(x^{2}-4x)-(5x^{2}+2x-1)"}</Item>
                <Item n="D">{"-(3-x+x^{2})+(-2x+3x^{2}-8)"}</Item>
                <Item n="E">{"x-4-(2+x)+(x+5)"}</Item>
                <Item n="F">{"-(x-8)+(x-6)-(7-x)"}</Item>
                <Item n="G">{"(x^{2}+5x-4)-(-2x^{2}+9x-7)"}</Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="50-x-20 = \mathbf{-x+30}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="-10-x+x+5 = \mathbf{-5}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="x^{2}-4x-5x^{2}-2x+1 = \mathbf{-4x^{2}-6x+1}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="-3+x-x^{2}-2x+3x^{2}-8 = \mathbf{2x^{2}-x-11}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="x-4-2-x+x+5 = \mathbf{x-1}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="-x+8+x-6-7+x = \mathbf{x-5}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="x^{2}+5x-4+2x^{2}-9x+7 = \mathbf{3x^{2}-4x+3}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Développer puis réduire"
            itemsLabel="8 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A">{"-3x(2-x)"}</Item>
                <Item n="B">{"5x(-7-2x)"}</Item>
                <Item n="C">{"-5(-7-2x)"}</Item>
                <Item n="D">{"-x(-3x+4)"}</Item>
                <Item n="E">{"8x+(7-6x)"}</Item>
                <Item n="F">{"-8(3x-4)"}</Item>
                <Item n="G">{"9x(-2x+3)"}</Item>
                <Item n="H">{"2x-(-4x+7)"}</Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="-6x+3x^{2} = \mathbf{3x^{2}-6x}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="-35x-10x^{2} = \mathbf{-10x^{2}-35x}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="35+10x = \mathbf{10x+35}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="\mathbf{3x^{2}-4x}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="8x+7-6x = \mathbf{2x+7}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="\mathbf{-24x+32}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="\mathbf{-18x^{2}+27x}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="2x+4x-7 = \mathbf{6x-7}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Développer puis réduire"
            itemsLabel="9 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A">{"8-4(x-3)"}</Item>
                <Item n="B">{"2(3-4x)+4(1-2x)"}</Item>
                <Item n="C">{"-2(3x+1)-3(x+3)"}</Item>
                <Item n="D">{"5(6x-1)-(3+8x)"}</Item>
                <Item n="E">{"2x(x+4)+x(1-x)"}</Item>
                <Item n="F">{"-x(2-x)+(x^{2}-2x)-(3x^{2}-4)"}</Item>
                <Item n="G">{"3x^{2}-(x^{2}-4x+5)-4x(x-3)"}</Item>
                <Item n="H">{"(2x^{2}-7x+4)-4x(-3+2x)"}</Item>
                <Item n="I">{"5x(-3x-6)-(-15x^{2}+18x-6)"}</Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="8-4x+12 = \mathbf{-4x+20}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="6-8x+4-8x = \mathbf{-16x+10}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="-6x-2-3x-9 = \mathbf{-9x-11}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="30x-5-3-8x = \mathbf{22x-8}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="2x^{2}+8x+x-x^{2} = \mathbf{x^{2}+9x}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="-2x+x^{2}+x^{2}-2x-3x^{2}+4 = \mathbf{-x^{2}-4x+4}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="3x^{2}-x^{2}+4x-5-4x^{2}+12x = \mathbf{-2x^{2}+16x-5}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="2x^{2}-7x+4+12x-8x^{2} = \mathbf{-6x^{2}+5x+4}" /></CorrectionCard>
                <CorrectionCard n="I"><Math tex="-15x^{2}-30x+15x^{2}-18x+6 = \mathbf{-48x+6}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Développer puis réduire"
            itemsLabel="7 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A">{"(-3x+5)(2x-3)"}</Item>
                <Item n="B">{"(2x-1)(2x+1)"}</Item>
                <Item n="C">{"(-2+x)(x+4)"}</Item>
                <Item n="D">{"(4-3x)(x-6)"}</Item>
                <Item n="E">{"(-5x-2)(3x+2)"}</Item>
                <Item n="F">{"(-3-x)(2x-7)"}</Item>
                <Item n="G">{"(3x-5)^{2}"}</Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="-6x^{2}+9x+10x-15 = \mathbf{-6x^{2}+19x-15}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="4x^{2}+2x-2x-1 = \mathbf{4x^{2}-1}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="-2x-8+x^{2}+4x = \mathbf{x^{2}+2x-8}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="4x-24-3x^{2}+18x = \mathbf{-3x^{2}+22x-24}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="-15x^{2}-10x-6x-4 = \mathbf{-15x^{2}-16x-4}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="-6x+21-2x^{2}+7x = \mathbf{-2x^{2}+x+21}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="9x^{2}-15x-15x+25 = \mathbf{9x^{2}-30x+25}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Développer puis réduire"
            itemsLabel="8 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A">{"4x^{2}+2x-(3x+4x^{2}-9)+8"}</Item>
                <Item n="B">{"8x-5x(2-x)"}</Item>
                <Item n="C">{"-3(2x-5)-(-2x+7)"}</Item>
                <Item n="D">{"(-4x-1)(x-9)"}</Item>
                <Item n="E">{"(3x^{2}-4x+9)-(4x^{2}-x+1)"}</Item>
                <Item n="F">{"3(7x^{2}-1)-4x(3-5x)"}</Item>
                <Item n="G">{"(3-x)(4x-8)"}</Item>
                <Item n="H">{"7x^{2}-4+(3x^{2}-5x)-2(x+3)"}</Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="4x^{2}+2x-3x-4x^{2}+9+8 = \mathbf{-x+17}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="8x-10x+5x^{2} = \mathbf{5x^{2}-2x}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="-6x+15+2x-7 = \mathbf{-4x+8}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="-4x^{2}+36x-x+9 = \mathbf{-4x^{2}+35x+9}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="3x^{2}-4x+9-4x^{2}+x-1 = \mathbf{-x^{2}-3x+8}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="21x^{2}-3-12x+20x^{2} = \mathbf{41x^{2}-12x-3}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="12x-24-4x^{2}+8x = \mathbf{-4x^{2}+20x-24}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="7x^{2}-4+3x^{2}-5x-2x-6 = \mathbf{10x^{2}-7x-10}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Deux programmes de calcul"
            items={
              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <ProgramCard
                    title="Programme 1"
                    steps={["Choisir un nombre", "Multiplier par 3", "Soustraire 2 au résultat", "Multiplier le tout par le nombre choisi au départ"]}
                  />
                  <ProgramCard
                    title="Programme 2"
                    steps={["Choisir un nombre", "Calculer son carré", "Multiplier le résultat par 3", "Soustraire le double du nombre choisi au début"]}
                  />
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-sm text-foreground-muted">
                  <li>Appliquer les programmes de calcul au nombre 5. Que constate-t-on ?</li>
                  <li>Prouver que les deux programmes de calcul donnent le même résultat pour n&apos;importe quel nombre choisi au départ.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <CorrectionCard n={1}>
                  <p className="mb-1">Avec le nombre 5 :</p>
                  <p><Math tex="5\times 3 = 15\ ;\ 15-2=13\ ;\ 13\times 5 = \mathbf{65}" /></p>
                  <p><Math tex="5^{2}=25\ ;\ 25\times 3=75\ ;\ 75-2\times 5 = \mathbf{65}" /></p>
                  <p className="mt-1">Les deux programmes donnent le même résultat : 65.</p>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <p className="mb-1">Preuve : soit <Math tex="n" /> le nombre choisi au départ.</p>
                  <p><Math tex="\text{Programme 1 : } (3n-2)\times n = 3n^{2}-2n" /></p>
                  <p><Math tex="\text{Programme 2 : } n^{2}\times 3 - 2n = 3n^{2}-2n" /></p>
                  <p className="mt-1 font-bold">Les deux expressions sont identiques, donc les deux programmes donnent toujours le même résultat, quel que soit <Math tex="n" />.</p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Deux programmes de calcul"
            items={
              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <ProgramCard
                    title="Programme 1"
                    steps={["Choisir un nombre", "Calculer la somme de son carré, de son double et de 1", "Annoncer le résultat"]}
                  />
                  <ProgramCard
                    title="Programme 2"
                    steps={["Choisir un nombre", "Lui ajouter 1", "Puis calculer le carré du résultat obtenu", "Annoncer le résultat"]}
                  />
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-sm text-foreground-muted">
                  <li>Appliquer les programmes de calcul au nombre 3. Que constate-t-on ?</li>
                  <li>Prouver que cela est vrai quelle que soit la valeur choisie.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <CorrectionCard n={1}>
                  <p className="mb-1">Avec le nombre 3 :</p>
                  <p><Math tex="3^{2}+2\times 3+1 = 9+6+1 = \mathbf{16}" /></p>
                  <p><Math tex="(3+1)^{2}=4^{2}=\mathbf{16}" /></p>
                  <p className="mt-1">Les deux programmes donnent le même résultat : 16.</p>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <p className="mb-1">Preuve : soit <Math tex="n" /> le nombre choisi.</p>
                  <p><Math tex="\text{Programme 1 : } n^{2}+2n+1" /></p>
                  <p><Math tex="\text{Programme 2 : } (n+1)^{2} = n^{2}+2n+1" /></p>
                  <p className="mt-1 font-bold">
                    <Math tex="n^{2}+2n+1 = (n+1)^{2}" /> (identité remarquable). Les deux programmes donnent donc toujours le même résultat.
                  </p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Aires de quatre rectangles"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">Calculer l&apos;aire des quatre rectangles ci-dessous en fonction de x.</p>
                <div className="mx-auto max-w-sm">
                  <div className="flex pl-9 text-[11px] font-semibold text-foreground-muted">
                    <span style={{ flexBasis: "35%" }} className="text-center"><Math tex="6x" /></span>
                    <span style={{ flexBasis: "65%" }} className="text-center"><Math tex="120-6x" /></span>
                  </div>
                  <div className="flex">
                    <div className="flex w-9 flex-col justify-between py-0 text-[11px] font-semibold text-foreground-muted" style={{ height: "9rem" }}>
                      <span><Math tex="2x" /></span>
                      <span><Math tex="40-2x" /></span>
                    </div>
                    <div className="grid flex-1 gap-0.5" style={{ gridTemplateColumns: "35% 65%", gridTemplateRows: "40% 60%", height: "9rem" }}>
                      <div className="flex items-center justify-center rounded border border-green-500/40 bg-green-100 font-bold text-green-700">①</div>
                      <div className="flex items-center justify-center rounded border border-green-500/40 bg-green-100/50 font-bold text-green-700">②</div>
                      <div className="flex items-center justify-center rounded border border-green-500/40 bg-green-100/50 font-bold text-green-700">④</div>
                      <div className="flex items-center justify-center rounded border border-green-500/40 bg-green-100 font-bold text-green-700">③</div>
                    </div>
                  </div>
                  <p className="mt-1 text-center text-[11px] text-foreground-muted">Rectangle total : 120 × 40</p>
                </div>
              </div>
            }
            correction={
              <div>
                <div className="grid gap-3 text-sm sm:grid-cols-2">
                  <CorrectionCard n="①"><Math tex="6x \times 2x = \mathbf{12x^{2}}" /></CorrectionCard>
                  <CorrectionCard n="②"><Math tex="(120-6x)\times 2x = 240x-12x^{2} = \mathbf{-12x^{2}+240x}" /></CorrectionCard>
                  <CorrectionCard n="③"><Math tex="(120-6x)\times(40-2x) = 4800-240x-240x+12x^{2} = \mathbf{12x^{2}-480x+4800}" /></CorrectionCard>
                  <CorrectionCard n="④"><Math tex="6x\times(40-2x) = 240x-12x^{2} = \mathbf{-12x^{2}+240x}" /></CorrectionCard>
                </div>
                <p className="mt-3 text-xs text-foreground-muted">Vérification : ①+②+③+④ = 4800 = 120×40 ✓</p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="La piscine"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">Une piscine rectangulaire ABCD de 10 m sur 7 m a une bordure de largeur x mètres.</p>
                <div className="relative mx-auto aspect-[10/7] max-w-[220px] rounded-md bg-orange-100 p-7">
                  <span className="absolute top-1 left-1.5 text-[11px] font-bold text-orange-700">A</span>
                  <span className="absolute top-1 right-1.5 text-[11px] font-bold text-orange-700">B</span>
                  <span className="absolute bottom-1 left-1.5 text-[11px] font-bold text-orange-700">D</span>
                  <span className="absolute right-1.5 bottom-1 text-[11px] font-bold text-orange-700">C</span>
                  <div className="relative flex h-full w-full items-center justify-center rounded-sm bg-neutral-300 dark:bg-neutral-700">
                    <span className="absolute top-0.5 left-0.5 text-[9px] font-bold text-neutral-700 dark:text-neutral-200">E</span>
                    <span className="absolute top-0.5 right-0.5 text-[9px] font-bold text-neutral-700 dark:text-neutral-200">F</span>
                    <span className="absolute bottom-0.5 left-0.5 text-[9px] font-bold text-neutral-700 dark:text-neutral-200">H</span>
                    <span className="absolute right-0.5 bottom-0.5 text-[9px] font-bold text-neutral-700 dark:text-neutral-200">G</span>
                    <span className="text-[11px] font-bold text-neutral-700 dark:text-neutral-200">Bassin</span>
                  </div>
                </div>
                <p className="mt-2 text-center text-xs text-foreground-muted">
                  ABCD : 10 m × 7 m, bordure de largeur x, EFGH : le bassin
                </p>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-sm text-foreground-muted">
                  <li>Exprimer, en fonction de x, l&apos;aire du bassin EFGH.</li>
                  <li>Calculer l&apos;aire du bassin quand la bordure a une largeur de 0,75 mètres.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n={1}>
                  <p className="mb-1">Dimensions du bassin EFGH : <Math tex="(10-2x)" /> et <Math tex="(7-2x)" /></p>
                  <p><Math tex="\text{Aire(EFGH)} = (10-2x)(7-2x)" /></p>
                  <p><Math tex="= 70-20x-14x+4x^{2}" /></p>
                  <p className="font-bold"><Math tex="= 4x^{2}-34x+70" /></p>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <p className="mb-1">Pour <Math tex="x = 0{,}75" /> m :</p>
                  <p><Math tex="\text{Aire} = (10-2\times 0{,}75)(7-2\times 0{,}75) = 8{,}5 \times 5{,}5" /></p>
                  <p className="font-bold"><Math tex="\text{Aire} = 46{,}75\ \text{m}^{2}" /></p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Démontrer une égalité"
            items={
              <div>
                <div className="space-y-1 rounded-lg border border-border p-4 text-sm">
                  <p><Math tex="A = (3x+4)(5x-2) - (20x-12)" /></p>
                  <p><Math tex="B = 4 - 3x(2-5x)" /></p>
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Démontrer que <Math tex="A = B" />.
                </p>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A">
                  <p><Math tex="15x^{2}-6x+20x-8-20x+12" /></p>
                  <p className="font-bold"><Math tex="A = 15x^{2}-6x+4" /></p>
                </CorrectionCard>
                <CorrectionCard n="B">
                  <p><Math tex="4-6x+15x^{2}" /></p>
                  <p className="font-bold"><Math tex="B = 15x^{2}-6x+4" /></p>
                </CorrectionCard>
                <div className="rounded-lg border border-border bg-surface-muted p-4 text-center font-semibold text-foreground sm:col-span-2">
                  A et B sont deux écritures de la même expression <Math tex="15x^{2}-6x+4" />, donc <Math tex="A=B" />. ✓
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Deux rectangles, même aire"
            items={
              <div>
                <p className="mb-5 text-sm text-foreground-muted">
                  Prouver que, quelle que soit la valeur de x, les deux rectangles ABCD et EFGH ont la même aire.
                </p>
                <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
                  <div className="text-center">
                    <p className="mb-1 text-xs font-semibold text-foreground-muted"><Math tex="6x+4" /></p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-foreground-muted" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                        <Math tex="4x+2" />
                      </p>
                      <div className="flex h-20 w-28 items-center justify-center rounded border-2 border-border bg-surface-muted text-sm font-bold text-foreground">ABCD</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="mb-1 text-xs font-semibold text-foreground-muted"><Math tex="8x+4" /></p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-foreground-muted" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                        <Math tex="3x+2" />
                      </p>
                      <div className="flex h-16 w-36 items-center justify-center rounded border-2 border-border bg-surface-muted text-sm font-bold text-foreground">EFGH</div>
                    </div>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="ABCD">
                  <p><Math tex="(6x+4)(4x+2)" /></p>
                  <p><Math tex="= 24x^{2}+12x+16x+8" /></p>
                  <p className="font-bold"><Math tex="= 24x^{2}+28x+8" /></p>
                </CorrectionCard>
                <CorrectionCard n="EFGH">
                  <p><Math tex="(8x+4)(3x+2)" /></p>
                  <p><Math tex="= 24x^{2}+16x+12x+8" /></p>
                  <p className="font-bold"><Math tex="= 24x^{2}+28x+8" /></p>
                </CorrectionCard>
                <div className="rounded-lg border border-border bg-surface-muted p-4 text-center font-semibold text-foreground sm:col-span-2">
                  Les deux aires sont égales à <Math tex="24x^{2}+28x+8" /> pour toute valeur de x. ✓
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="13"
            index={13}
            title="Deux programmes de calcul"
            items={
              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <ProgramCard
                    title="Programme 1"
                    steps={["Choisir un nombre", "Additionner son carré, son quadruple et 4", "Annoncer le résultat"]}
                  />
                  <ProgramCard
                    title="Programme 2"
                    steps={["Choisir un nombre", "Lui ajouter 2", "Puis calculer le carré du résultat obtenu", "Annoncer le résultat"]}
                  />
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-sm text-foreground-muted">
                  <li>Si le nombre choisi est 8, quel est le résultat de chacun des calculs ? Que constate-t-on ?</li>
                  <li>Démontrer que la remarque ci-dessus est vraie quelle que soit la valeur choisie.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <CorrectionCard n={1}>
                  <p className="mb-1">Avec le nombre 8 :</p>
                  <p><Math tex="8^{2} + 4\times 8 + 4 = 64+32+4 = \mathbf{100}" /></p>
                  <p><Math tex="(8+2)^{2} = 10^{2} = \mathbf{100}" /></p>
                  <p className="mt-1">Les deux programmes donnent le même résultat : 100.</p>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <p className="mb-1">Preuve : soit <Math tex="n" /> le nombre choisi.</p>
                  <p><Math tex="\text{Programme 1 : } n^{2} + 4n + 4" /></p>
                  <p><Math tex="\text{Programme 2 : } (n+2)^{2} = n^{2}+2\times n\times 2+2^{2} = n^{2}+4n+4" /></p>
                  <p className="mt-1 font-bold">
                    <Math tex="n^{2}+4n+4 = (n+2)^{2}" /> (identité remarquable). La remarque est donc vraie quelle que soit la valeur de <Math tex="n" />.
                  </p>
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
