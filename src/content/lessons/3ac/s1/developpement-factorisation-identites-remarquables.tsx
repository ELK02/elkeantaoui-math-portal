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
  title: "Développement, Factorisation & Identités Remarquables · Cours et exercices | 3AC",
  description:
    "Cours complet et 13 exercices corrigés sur le développement, la factorisation et les identités remarquables. Mathématiques, 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Calcul littéral",
  heroTitle: "Développement, Factorisation & Identités Remarquables",
  heroSubtitle:
    "Le cours complet, illustré, suivi de 13 exercices, des automatismes de base aux problèmes défis, chacun avec sa correction détaillée à un clic.",
  footerNote: "Développement, factorisation et identités remarquables · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "developpement", label: "Développement" },
    { id: "factorisation", label: "Factorisation" },
    { id: "identites", label: "Identités" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Small numbered/lettered pill used inside item grids. */
function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls =
    tone === "rose"
      ? "bg-rose-100 text-rose-600"
      : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
      {children}
    </span>
  );
}

function Item({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
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

function GroupHeading({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <p className="font-semibold text-foreground">{children}</p>
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
          { value: "3", label: "identités remarquables" },
          { value: "13", label: "exercices corrigés" },
          { value: "4", label: "exercices défi" },
        ]}
        ctas={
          <>
            <a
              href="#developpement"
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
          <div className="relative flex select-none items-baseline font-serif text-white italic">
            <span className="text-[5rem] leading-none font-bold sm:text-[6.5rem]">(a+b)</span>
            <span className="-mt-10 -ml-1 text-[3rem] leading-none font-bold text-orange-400 sm:text-[4rem]">
              2
            </span>
          </div>
        }
      />

      {/* ===================== I. DÉVELOPPEMENT ===================== */}
      <LessonSection
        id="developpement"
        kicker="01 · Partie I"
        title="Développement"
        tone="light"
        description="Développer une expression algébrique, c'est la transformer en une somme algébrique."
      >
        <div className="space-y-6">
          <div className="rounded-xl border border-border p-5 sm:p-6">
            <p className="mb-1 font-semibold text-foreground">Propriété 1</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Pour tous nombres réels <Math tex="a" />, <Math tex="b" /> et <Math tex="k" /> :
            </p>
            <FormulaBlock tex="k(a+b) = ka + kb \qquad \text{et} \qquad k(a-b) = ka - kb" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-surface-muted p-3 text-sm">
                <Math tex="3(5a+7) = 3\times 5a + 3\times 7 = 15a+21" />
              </div>
              <div className="rounded-lg bg-surface-muted p-3 text-sm">
                <Math tex="2x(3-5x) = 2x\times 3 - 2x\times 5x = 6x-10x^2" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 sm:p-6">
            <p className="mb-1 font-semibold text-foreground">Propriété 2</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Pour tous nombres réels <Math tex="a" />, <Math tex="b" />, <Math tex="c" /> et <Math tex="d" /> :
            </p>
            <FormulaBlock tex="(a+b)(c+d) = ac+ad+bc+bd" />
            <div className="mt-4 rounded-lg bg-surface-muted p-3 text-sm">
              <Math tex="(3-a)(4a+2) = 3\times 4a + 3\times 2 - a\times 4a - a\times 2 = 12a+6-4a^2-2a = -4a^2+10a+6" />
            </div>
          </div>

          <ExerciseCard
            id="dev-app"
            index={1}
            title="Exercice d'application"
            itemsLabel="4 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A"><Math tex="A = 2x(1-3x)" /></Item>
                <Item n="B"><Math tex="B = (4x+5)(-3x)" /></Item>
                <Item n="C"><Math tex="C = 3x(2x^2-x+2)-5(3x^2+4x-5)" /></Item>
                <Item n="D"><Math tex="D = (3x-1)(4+x)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A = \mathbf{2x-6x^2}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{-12x^2-15x}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = 6x^3-3x^2+6x-15x^2-20x+25 = \mathbf{6x^3-18x^2-14x+25}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = 12x+3x^2-4-x = \mathbf{3x^2+11x-4}" /></CorrectionCard>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== II. FACTORISATION ===================== */}
      <LessonSection
        id="factorisation"
        kicker="02 · Partie II"
        title="Factorisation"
        tone="muted"
        description="Factoriser une expression algébrique, c'est la transformer en un produit de sommes algébriques."
      >
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-1 font-semibold text-foreground">Propriétés</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Soient <Math tex="a" />, <Math tex="b" />, <Math tex="c" /> et <Math tex="d" /> des nombres réels :
            </p>
            <FormulaBlock tex="ka+kb=k(a+b) \qquad ka-kb=k(a-b)" caption={<Math tex="ac+ad+bc+bd=(a+b)(c+d)" />} />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-surface-muted p-3 text-sm"><Math tex="2x+4 = 2(x+2)" /></div>
              <div className="rounded-lg bg-surface-muted p-3 text-sm"><Math tex="3x^2-9x = 3x(x-3)" /></div>
              <div className="rounded-lg bg-surface-muted p-3 text-sm sm:col-span-2">
                <Math tex="3x(2x+1)-5(2x+1) = (2x+1)(3x-5)" />
              </div>
            </div>
          </div>

          <Callout variant="warning" title="Remarque importante">
            Pour factoriser une expression algébrique, on cherche le <strong>facteur commun</strong>.
          </Callout>

          <ExerciseCard
            id="fact-app"
            index={2}
            title="Exercice d'application"
            itemsLabel="3 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A"><Math tex="A = 25x-15" /></Item>
                <Item n="B"><Math tex="B = \dfrac{5}{7}x+\dfrac{5}{7}" /></Item>
                <Item n="C"><Math tex="C = (3x+1)^2+(3x+1)(2x+5)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A = 5\times 5x-5\times 3 = \mathbf{5(5x-3)}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \dfrac{5}{7}\times x+\dfrac{5}{7}\times 1 = \mathbf{\dfrac{5}{7}(x+1)}" /></CorrectionCard>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4 sm:col-span-2">
                  <span className="font-bold text-green-700">C.</span>{" "}
                  <Math tex="C=(3x+1)(3x+1)+(3x+1)(2x+5)" />
                  <div className="mt-1"><Math tex="C=(3x+1)\big[(3x+1)+(2x+5)\big]" /></div>
                  <div className="mt-1"><Math tex="C=\mathbf{(3x+1)(5x+6)}" /></div>
                </div>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== III. IDENTITÉS REMARQUABLES ===================== */}
      <LessonSection
        id="identites"
        kicker="03 · Partie III"
        title="Identités Remarquables"
        tone="light"
        description="Trois formules essentielles qui relient développement et factorisation : elles se lisent dans les deux sens."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border p-5 text-center">
            <span className="mx-auto inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs font-semibold text-foreground-muted">
              Identité 1
            </span>
            <p className="mt-4 text-lg font-semibold text-foreground">
              <Math tex="(a+b)^2 = a^2+2ab+b^2" />
            </p>
            <div className="mt-4 rounded-lg bg-surface-muted p-3 text-left text-sm">
              <p className="text-foreground-muted">
                Développer <Math tex="(2x+3)^2" /> :
              </p>
              <p className="mt-1"><Math tex="(2x+3)^2=(2x)^2+2\times 2x\times 3+3^2 = \mathbf{4x^2+12x+9}" /></p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 text-center">
            <span className="mx-auto inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs font-semibold text-foreground-muted">
              Identité 2
            </span>
            <p className="mt-4 text-lg font-semibold text-foreground">
              <Math tex="(a-b)^2 = a^2-2ab+b^2" />
            </p>
            <div className="mt-4 rounded-lg bg-surface-muted p-3 text-left text-sm">
              <p className="text-foreground-muted">
                Factoriser <Math tex="49x^2-28x+4" /> :
              </p>
              <p className="mt-1"><Math tex="49x^2-28x+4=(7x)^2-2\times 7x\times 2+2^2=\mathbf{(7x-2)^2}" /></p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 text-center">
            <span className="mx-auto inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs font-semibold text-foreground-muted">
              Identité 3
            </span>
            <p className="mt-4 text-lg font-semibold text-foreground">
              <Math tex="(a+b)(a-b) = a^2-b^2" />
            </p>
            <div className="mt-4 rounded-lg bg-surface-muted p-3 text-left text-sm">
              <p className="text-foreground-muted">
                Factoriser <Math tex="9x^2-64" /> :
              </p>
              <p className="mt-1"><Math tex="9x^2-64=(3x)^2-8^2=\mathbf{(3x-8)(3x+8)}" /></p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border p-5 sm:p-6">
          <ExerciseCard
            id="id-app"
            index={3}
            title="Exercice d'application"
            items={
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground-muted">1) Développer :</p>
                  <div className="space-y-2">
                    <Item n="A"><Math tex="A=(2x+7)^2" /></Item>
                    <Item n="B"><Math tex="B=(5-3a)^2" /></Item>
                    <Item n="C"><Math tex="C=(7x+4)(7x-4)" /></Item>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground-muted">2) Factoriser :</p>
                  <div className="space-y-2">
                    <Item n="D"><Math tex="D=16x^2+24x+9" /></Item>
                    <Item n="E"><Math tex="E=25a^2-70a+49" /></Item>
                    <Item n="F"><Math tex="F=64-9y^2" /></Item>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A=(2x)^2+2\times 2x\times 7+7^2=\mathbf{4x^2+28x+49}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=(4x)^2+2\times 4x\times 3+3^2=\mathbf{(4x+3)^2}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=5^2-2\times 5\times 3a+(3a)^2=\mathbf{25-30a+9a^2}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=(5a)^2-2\times 5a\times 7+7^2=\mathbf{(5a-7)^2}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=(7x)^2-4^2=\mathbf{49x^2-16}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=8^2-(3y)^2=\mathbf{(8-3y)(8+3y)}" /></CorrectionCard>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="13 exercices corrigés"
        tone="muted"
        description={
          <>
            Clique sur « Voir la correction » pour afficher la solution détaillée. Les exercices marqués{" "}
            <span className="font-bold text-rose-600">★</span> sont des défis.
          </>
        }
      >
        <ExerciseGroup
          total={13}
          celebrationTitle="Bravo, tous les exercices sont vérifiés !"
          celebrationSubtitle="Tu maîtrises le développement, la factorisation et les identités remarquables."
        >
          <GroupHeading n={1}>Développer et réduire</GroupHeading>
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1"
            itemsLabel="7 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="A=x(x+1)" /></Item>
                <Item n={2}><Math tex="B=2t^2(t^2-t+1)" /></Item>
                <Item n={3}><Math tex="C=(2x-1)(2+x)" /></Item>
                <Item n={4}><Math tex="D=ab(a^2+2b-1)" /></Item>
                <Item n={5}><Math tex="E=(2x-1)(x-4)+(3-x)(2x+1)" /></Item>
                <Item n={6}><Math tex="F=(x-2)(3x-2)-(x+2)(2x-3)" /></Item>
                <Item n={7}><Math tex="G=5-\big[5-3x(x-3)\big]+(2x+3)(3x+2)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="A=\mathbf{x^2+x}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="B=\mathbf{2t^4-2t^3+2t^2}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="C=\mathbf{2x^2+3x-2}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="D=\mathbf{a^3b+2ab^2-ab}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="E=(2x^2-9x+4)+(-2x^2+5x+3)=\mathbf{-4x+7}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="F=(3x^2-8x+4)-(2x^2+x-6)=\mathbf{x^2-9x+10}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="G=(3x^2-9x)+(6x^2+13x+6)=\mathbf{9x^2+4x+6}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2"
            itemsLabel="10 expressions · identités remarquables"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="A=(x+2)^2" /></Item>
                <Item n={2}><Math tex="B=(x-4)^2" /></Item>
                <Item n={3}><Math tex="C=(y-1)(y+1)" /></Item>
                <Item n={4}><Math tex="D=(-3+a)^2" /></Item>
                <Item n={5}><Math tex="E=(2x+3)^2" /></Item>
                <Item n={6}><Math tex="F=(3-5a)(3+5a)" /></Item>
                <Item n={7}><Math tex="G=(x-2)^2-(x+3)(x-3)" /></Item>
                <Item n={8}><Math tex="H=(x^2+x-1)^2" /></Item>
                <Item n={9}><Math tex="I=(3x^2-x+2)(3x^2+x-2)" /></Item>
                <Item n={10}><Math tex="J=(x-2)^3" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="A=\mathbf{x^2+4x+4}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="B=\mathbf{x^2-8x+16}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="C=\mathbf{y^2-1}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="D=\mathbf{a^2-6a+9}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="E=\mathbf{4x^2+12x+9}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="F=\mathbf{9-25a^2}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="G=\mathbf{-4x+13}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="H=\mathbf{x^4+2x^3-x^2-2x+1}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="I=\mathbf{9x^4-x^2+4x-4}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="J=\mathbf{x^3-6x^2+12x-8}" /></CorrectionCard>
              </div>
            }
          />

          <GroupHeading n={2}>Factoriser</GroupHeading>
          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3"
            itemsLabel="5 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A"><Math tex="A=5x^2+xy" /></Item>
                <Item n="B"><Math tex="B=4ab^2c+12abc^2+8a^2bc" /></Item>
                <Item n="C"><Math tex="C=(x+4)(6x-1)+(x+4)(7x-2)" /></Item>
                <Item n="D"><Math tex="D=(x+5)(x-4)-(x+5)^2" /></Item>
                <Item n="E"><Math tex="E=(x+9)(2x-1)-6x^2+3x" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A=\mathbf{x(5x+y)}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=\mathbf{4abc(2a+b+3c)}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=(x+4)\big[(6x-1)+(7x-2)\big]=\mathbf{(x+4)(13x-3)}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=(x+5)\big[(x-4)-(x+5)\big]=\mathbf{-9(x+5)}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=(2x-1)(x+9)-3x(2x-1)=\mathbf{(2x-1)(9-2x)}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4"
            itemsLabel="6 expressions · identités remarquables"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A=9x^2+6xy+y^2" /></Item>
                <Item n="B"><Math tex="B=4a^2-4a+1" /></Item>
                <Item n="C"><Math tex="C=\dfrac{25}{4}-x^2" /></Item>
                <Item n="D"><Math tex="D=2(x+3)(x+4)-(x^2-16)" /></Item>
                <Item n="E"><Math tex="E=(2x-5)^2-9" /></Item>
                <Item n="F"><Math tex="F=(x-3)(6x-6)-(x^2-6x+9)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=(3x)^2+2\times 3x\times y+y^2=\mathbf{(3x+y)^2}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=(2a)^2-2\times 2a\times1+1^2=\mathbf{(2a-1)^2}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=\left(\dfrac{5}{2}\right)^2-x^2=\mathbf{\left(\dfrac{5}{2}-x\right)\left(\dfrac{5}{2}+x\right)}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=(x+4)\big[2(x+3)-(x-4)\big]=\mathbf{(x+4)(x+10)}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=(2x-8)(2x-2)=\mathbf{4(x-4)(x-1)}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=(x-3)\big[6(x-1)-(x-3)\big]=\mathbf{(x-3)(5x-3)}" /></CorrectionCard>
              </div>
            }
          />

          <GroupHeading n={3}>Calcul astucieux</GroupHeading>
          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5"
            itemsLabel="Sans calculatrice"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Item n="F"><Math tex="F=101^2" /></Item>
                <Item n="H"><Math tex="H=99^2" /></Item>
                <Item n="I"><Math tex="I=101\times 99" /></Item>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="F"><Math tex="F=101^2=(100+1)^2=100^2+2\times100\times1+1^2=\mathbf{10201}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="H=99^2=(100-1)^2=100^2-2\times100\times1+1^2=\mathbf{9801}" /></CorrectionCard>
                <CorrectionCard n="I"><Math tex="I=101\times99=(100+1)(100-1)=100^2-1^2=\mathbf{9999}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6"
            itemsLabel="x entier naturel"
            items={
              <div className="space-y-2">
                <Item n="1">
                  Montrer que : <Math tex="(x-1)x(x+1)+x=x^3" />
                </Item>
                <Item n="2">
                  En déduire que : <Math tex="102\times103\times104+103" /> est un cube.
                </Item>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="(x-1)x(x+1)=x(x^2-1)=x^3-x" />, donc{" "}
                  <Math tex="(x-1)x(x+1)+x=x^3-x+x=\mathbf{x^3}" /> ✓
                </CorrectionCard>
                <CorrectionCard n={2}>
                  On pose <Math tex="x=103" /> : <Math tex="(103-1)\times103\times(103+1)+103=102\times103\times104+103" />.
                  D&apos;après l&apos;égalité précédente, cette expression vaut{" "}
                  <Math tex="103^3=\mathbf{1\,092\,727}" />, c&apos;est donc un cube.
                </CorrectionCard>
              </div>
            }
          />

          <GroupHeading n={4}>Problèmes guidés</GroupHeading>
          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7"
            items={
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-semibold text-foreground-muted">
                    I. On donne <Math tex="A=x^2-7x+10" /> et <Math tex="B=x^2-5x+6" />
                  </p>
                  <p className="mt-2">1) Montrer que : <Math tex="x^2-7x+10=\left(x-\dfrac{7}{2}\right)^2-\dfrac{9}{4}" /></p>
                  <p className="mt-1">2) Factoriser A et B.</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-semibold text-foreground-muted">II. Factoriser pour tout réel x :</p>
                  <p className="mt-2"><Math tex="C=x^2-3x-4" /></p>
                  <p><Math tex="D=-3x^2-x+10" /></p>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="space-y-2">
                  <CorrectionCard n="1">
                    <Math tex="\left(x-\dfrac{7}{2}\right)^2-\dfrac{9}{4}=x^2-7x+\dfrac{49}{4}-\dfrac{9}{4}=\mathbf{x^2-7x+10}" /> ✓
                  </CorrectionCard>
                  <CorrectionCard n="A"><Math tex="A=\left(x-\dfrac{7}{2}-\dfrac{3}{2}\right)\left(x-\dfrac{7}{2}+\dfrac{3}{2}\right)=\mathbf{(x-5)(x-2)}" /></CorrectionCard>
                  <CorrectionCard n="B"><Math tex="B=x^2-5x+6=\mathbf{(x-2)(x-3)}" /></CorrectionCard>
                </div>
                <div className="space-y-2">
                  <CorrectionCard n="C"><Math tex="C=x^2-3x-4=\mathbf{(x-4)(x+1)}" /></CorrectionCard>
                  <CorrectionCard n="D"><Math tex="D=-3x^2-x+10=\mathbf{(5-3x)(x+2)}" /></CorrectionCard>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8"
            items={
              <div className="space-y-2 text-sm">
                <p>
                  On donne <Math tex="B=(x+1)^2-(x-1)^2" />
                </p>
                <p>1) Développer B.</p>
                <p>
                  2) En déduire la valeur de <Math tex="C=10001^2-9999^2" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}><Math tex="B=(x^2+2x+1)-(x^2-2x+1)=\mathbf{4x}" /></CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="C=10001^2-9999^2" /> est de la forme <Math tex="(x+1)^2-(x-1)^2" /> avec <Math tex="x=10000" />.
                  Donc <Math tex="C=4\times10000=\mathbf{40\,000}" />.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9"
            items={
              <div className="space-y-2 text-sm">
                <p>
                  On donne <Math tex="A=(2x-1)(x+3)+4x^2-4x+1" />
                </p>
                <p>1) Développer A.</p>
                <p>2) Factoriser A.</p>
                <p>
                  3) Calculer A pour <Math tex="x=0" /> ; <Math tex="x=1" /> et <Math tex="x=\dfrac{1}{2}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}><Math tex="A=(2x^2+5x-3)+4x^2-4x+1=\mathbf{6x^2+x-2}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="A=\mathbf{(2x-1)(3x+2)}" /></CorrectionCard>
                <CorrectionCard n={3}>
                  Pour <Math tex="x=0" /> : <Math tex="A=(-1)(2)=\mathbf{-2}" /> · Pour <Math tex="x=1" /> :{" "}
                  <Math tex="A=(1)(5)=\mathbf{5}" /> · Pour <Math tex="x=\tfrac12" /> : <Math tex="A=(0)(3{,}5)=\mathbf{0}" />
                </CorrectionCard>
              </div>
            }
          />

          <GroupHeading n="★">Exercices défis</GroupHeading>
          <ExerciseCard
            id="10"
            index={10}
            title={<>Exercice 10 <span className="text-rose-600">★ Défi</span></>}
            items={
              <div className="rounded-lg border border-border p-4 text-sm">
                <p>Soit <Math tex="a" /> un nombre entier naturel non nul.</p>
                <p className="mt-2">
                  Écris l&apos;expression <Math tex="2a^2+2" /> sous la forme d&apos;une somme des carrés de deux nombres entiers naturels.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="·">
                  On remarque que <Math tex="(a+1)^2+(a-1)^2=(a^2+2a+1)+(a^2-2a+1)=2a^2+2" />
                </CorrectionCard>
                <CorrectionCard n="·">
                  Donc <Math tex="2a^2+2=\mathbf{(a+1)^2+(a-1)^2}" />, somme des carrés des entiers naturels <Math tex="a+1" /> et <Math tex="a-1" />.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title={<>Exercice 11 <span className="text-rose-600">★ Défi</span></>}
            items={
              <div className="rounded-lg border border-border p-4 text-sm">
                <p>
                  <Math tex="a" /> et <Math tex="b" /> sont deux nombres réels tels que : <Math tex="a+b=1" /> et{" "}
                  <Math tex="a^2+b^2=2" />
                </p>
                <p className="mt-2">
                  Calculer : <Math tex="a^4+b^4" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="·">
                  <Math tex="(a+b)^2=a^2+2ab+b^2 \Rightarrow 1=2+2ab \Rightarrow ab=-\dfrac{1}{2}" />
                </CorrectionCard>
                <CorrectionCard n="·">
                  <Math tex="a^4+b^4=(a^2+b^2)^2-2a^2b^2=2^2-2\left(-\dfrac{1}{2}\right)^2=4-\dfrac{1}{2}=\mathbf{\dfrac{7}{2}}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title={<>Exercice 12 <span className="text-rose-600">★ Défi</span></>}
            items={
              <div className="rounded-lg border border-border p-4 text-sm">
                <p><Math tex="a" />, <Math tex="b" /> et <Math tex="c" /> des nombres réels positifs tels que :</p>
                <p className="mt-1">
                  <Math tex="a(a+b+c)=4,\ \ b(a+b+c)=16,\ \ c(a+b+c)=29" />
                </p>
                <p className="mt-2">
                  Calculer <Math tex="a+b+c" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="·">En additionnant les trois égalités :</CorrectionCard>
                <CorrectionCard n="·">
                  <Math tex="a(a+b+c)+b(a+b+c)+c(a+b+c)=4+16+29=49" />
                </CorrectionCard>
                <CorrectionCard n="·">
                  <Math tex="(a+b+c)(a+b+c)=49 \Rightarrow (a+b+c)^2=49" />
                </CorrectionCard>
                <CorrectionCard n="·">
                  Comme <Math tex="a,b,c>0" />, on a <Math tex="a+b+c>0" />, donc <Math tex="a+b+c=\mathbf{7}" />.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="13"
            index={13}
            title={<>Exercice 13 <span className="text-rose-600">★ Défi</span></>}
            items={
              <div className="rounded-lg border border-border p-4 text-sm">
                <p>
                  <Math tex="x" /> et <Math tex="y" /> sont deux nombres réels distincts tels que : <Math tex="x^2+y^2=3xy" />
                </p>
                <p className="mt-2">
                  Déterminer la valeur de l&apos;expression : <Math tex="A=\dfrac{x+y}{x-y}" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="·">
                  On calcule <Math tex="A^2=\dfrac{(x+y)^2}{(x-y)^2}=\dfrac{x^2+2xy+y^2}{x^2-2xy+y^2}" />
                </CorrectionCard>
                <CorrectionCard n="·">
                  Comme <Math tex="x^2+y^2=3xy" /> : numérateur <Math tex="=3xy+2xy=5xy" /> et dénominateur{" "}
                  <Math tex="=3xy-2xy=xy" />
                </CorrectionCard>
                <CorrectionCard n="·">
                  Donc <Math tex="A^2=\dfrac{5xy}{xy}=5" /> (avec <Math tex="xy\neq0" /> puisque <Math tex="x\neq y" />)
                </CorrectionCard>
                <CorrectionCard n="·">
                  D&apos;où <Math tex="A=\mathbf{\sqrt{5}}" /> ou <Math tex="A=\mathbf{-\sqrt{5}}" />
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>

        <blockquote className="mt-10 rounded-2xl bg-neutral-950 p-6 text-center text-white sm:p-8">
          <p className="font-display text-lg font-bold italic leading-relaxed sm:text-xl">
            « La première règle de la réussite, ne jamais remettre au lendemain l&apos;exécution d&apos;un travail. »
          </p>
        </blockquote>
      </LessonSection>
    </LessonShell>
  );
}
