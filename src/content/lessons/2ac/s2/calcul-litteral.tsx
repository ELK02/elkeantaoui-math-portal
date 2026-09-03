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
  title: "Calcul Littéral · Cours et exercices corrigés | 2AC",
  description:
    "Cours détaillé sur le calcul littéral (distributivité simple, double distributivité, identités remarquables, réduction et suppression de parenthèses) et 6 exercices corrigés en détail, 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 2",
  heroTitle: "Le Calcul Littéral",
  heroSubtitle:
    "Développer, factoriser, réduire : trois gestes à automatiser pour dompter les expressions avec des lettres. Cours complet et exercices corrigés.",
  footerNote: "Calcul littéral · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "exercice1", label: "Ex.1" },
    { id: "exercice2", label: "Ex.2" },
    { id: "exercice3", label: "Ex.3" },
    { id: "exercice4", label: "Ex.4" },
    { id: "exercice5", label: "Ex.5" },
    { id: "exercice6", label: "Ex.6" },
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

function Item({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <Pill>{n}</Pill>
      <span className="text-sm">{children}</span>
    </div>
  );
}

function LetterItem({ letter, children }: { letter: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border p-4">
      <Pill tone="rose">{letter}</Pill>
      <span className="pt-0.5 text-base">{children}</span>
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
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "6", label: "exercices" },
          { value: "53", label: "questions" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
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
          <div className="relative flex select-none items-baseline font-serif text-white italic">
            <span className="text-[4rem] leading-none font-bold sm:text-[5.5rem]">(a+b)</span>
            <span className="-mt-10 -ml-1 text-[2rem] leading-none font-bold text-orange-400 sm:text-[2.75rem]">
              2
            </span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 · Une seule distributivité" title="La distributivité simple" tone="light"
        description={
          <>
            Un nombre <Math tex="k" /> multiplié par une somme ou une différence entre parenthèses.
          </>
        }
      >
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-3 font-semibold text-foreground">1. Développement</p>
            <Callout variant="warning" title="Définition">
              <p>Développer une expression, c&apos;est l&apos;écrire sous la forme d&apos;une somme algébrique.</p>
            </Callout>
            <div className="mt-3 rounded-lg bg-surface-muted p-4">
              <p className="mb-2 text-xs text-foreground-muted">
                Pour tous nombres relatifs <Math tex="k, a" /> et <Math tex="b" /> :
              </p>
              <p><Math tex="k \times (a+b) = k \times a + k \times b" /></p>
              <p><Math tex="k \times (a-b) = k \times a - k \times b" /></p>
            </div>
            <p className="mt-4 font-semibold text-foreground">Exemple 1</p>
            <div className="mt-1 space-y-1 text-foreground-muted">
              <p><Math tex="3 \times (5+7) = 3 \times 12 = 36" /></p>
              <p><Math tex="3 \times (5+7) = 3\times5 + 3\times7 = 15+21 = 36" /></p>
              <p><Math tex="-6 \times (4-8) = -6 \times (-4) = 24" /></p>
              <p><Math tex="-6 \times (4-8) = -6\times4 -(-6)\times8 = -24+48 = 24" /></p>
            </div>
            <p className="mt-3 font-semibold text-foreground">Exemple 2 · Développe</p>
            <p className="text-foreground-muted"><Math tex="A = 3(x+7)" /> · <Math tex="B = -3{,}5(x-2)" /></p>
          </div>

          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-3 font-semibold text-foreground">2. Factorisation</p>
            <Callout variant="warning" title="Définition">
              <p>Factoriser une expression, c&apos;est l&apos;écrire sous la forme d&apos;un produit.</p>
            </Callout>
            <div className="mt-3 rounded-lg bg-surface-muted p-4">
              <p className="mb-2 text-xs text-foreground-muted">
                Pour tous nombres relatifs <Math tex="k, a" /> et <Math tex="b" /> :
              </p>
              <p><Math tex="k \times a + k \times b = k \times (a+b)" /></p>
              <p><Math tex="k \times a - k \times b = k \times (a-b)" /></p>
            </div>
            <p className="mt-4 font-semibold text-foreground">Exemple 1 · Factoriser</p>
            <div className="mt-1 space-y-1 text-foreground-muted">
              <p><Math tex="C = 14x-12 = 7\times2x - 7\times3 = 7(2x-3)" /></p>
              <p><Math tex="D = -6y+15y^2 = 3y\times(-2)+3y\times5y = 3y(-2+5y)" /></p>
            </div>
            <p className="mt-3 font-semibold text-foreground">Exemple 2 · Factorise</p>
            <p className="text-foreground-muted">
              <Math tex="E = 14a-7b" /> · <Math tex="F = -x^2+3x" />
            </p>
            <p className="mt-1 text-foreground-muted">
              <Math tex="G = (9x-4)(5x+6)+(9x-4)(3x+11)" />
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection kicker="02 · Deux parenthèses" title="La double distributivité" tone="light"
        description="Un produit de deux sommes se développe en quatre produits, puis les identités remarquables raccourcissent trois cas fréquents."
      >
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-3 font-semibold text-foreground">1. Produit de deux sommes</p>
            <div className="rounded-lg bg-surface-muted p-4">
              <p className="mb-2 text-xs text-foreground-muted">
                Pour tous nombres relatifs <Math tex="a,b,c,d" /> :
              </p>
              <p><Math tex="(a+b)(c+d) = a(c+d)+b(c+d)" /></p>
              <p><Math tex="= ac+ad+bc+bd" /></p>
            </div>
            <p className="mt-4 font-semibold text-foreground">Exemple 1 · Développe et réduit</p>
            <div className="mt-1 space-y-1 text-foreground-muted">
              <p><Math tex="A=(3x+1)(y+4)" /> · <Math tex="B=(3x+1)(y-4)" /></p>
              <p><Math tex="C=(3x-1)(y+4)" /> · <Math tex="D=(3x-1)(y-4)" /></p>
            </div>
            <p className="mt-3 font-semibold text-foreground">Exemple 2 · Factorise</p>
            <div className="mt-1 space-y-1 text-foreground-muted">
              <p><Math tex="A=(2x-3)(x+2)-5(2x-3)" /></p>
              <p><Math tex="B=(5x+1)(3x-5)-(x-3)(5x+1)" /></p>
              <p><Math tex="C=(3x+2)(-5x-7)-(3x+2)(x+7)" /></p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-3 font-semibold text-foreground">2. Les identités remarquables</p>
            <p className="mb-2 text-xs text-foreground-muted">
              <Math tex="a" /> et <Math tex="b" /> sont deux nombres relatifs. On a :
            </p>
            <div className="space-y-2">
              <div className="rounded-lg bg-surface-muted p-3">
                <p className="mb-1 text-xs text-foreground-muted">carré d&apos;une somme</p>
                <Math tex="(a+b)^2 = a^2+2ab+b^2" />
              </div>
              <div className="rounded-lg bg-surface-muted p-3">
                <p className="mb-1 text-xs text-foreground-muted">carré d&apos;une différence</p>
                <Math tex="(a-b)^2 = a^2-2ab+b^2" />
              </div>
              <div className="rounded-lg bg-surface-muted p-3">
                <p className="mb-1 text-xs text-foreground-muted">produit d&apos;une somme par une différence</p>
                <Math tex="(a-b)(a+b)=a^2-b^2" />
              </div>
            </div>
            <p className="mt-4 font-semibold text-foreground">Exemple 1 · Développe et réduis</p>
            <p className="mt-1 text-foreground-muted">
              <Math tex="A=(x+1)^2" /> · <Math tex="B=(x-4)^2" /> · <Math tex="C=(3x-5)^2" /> · <Math tex="D=(7x+2)(7x-2)" />
            </p>
            <p className="mt-3 font-semibold text-foreground">Exemple 2 · Factorise</p>
            <p className="mt-1 text-foreground-muted">
              <Math tex="A=x^2+6x+9" /> · <Math tex="B=25x^2-20x+4" /> · <Math tex="C=64x^2-49" />
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection kicker="03 · Nettoyer l'écriture" title="Simplifier une expression" tone="light"
        description="Regrouper les termes semblables, puis savoir enlever des parenthèses sans se tromper de signe."
      >
        <div className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-3 font-semibold text-foreground">1. Réduire une expression littérale</p>
            <Callout variant="warning" title="Définition">
              <p>
                Réduire une expression littérale, c&apos;est l&apos;écrire sous la forme d&apos;une somme comportant le
                moins de termes possibles.
              </p>
            </Callout>
            <p className="mt-4 font-semibold text-foreground">Exemple</p>
            <div className="mt-1 space-y-1 text-foreground-muted">
              <p><Math tex="F=3x-8+2x = 3x+2x-8 = (3+2)x-8" /></p>
              <p><Math tex="G=5x^2+7x-4-2x^2+3+4x" /></p>
              <p><Math tex="G=5x^2-2x^2+7x+4x-4+3" /></p>
              <p><Math tex="G=(5-2)x^2+(7+4)x-1 = 3x^2+11x-1" /></p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-3 font-semibold text-foreground">2. Supprimer les parenthèses</p>
            <Callout variant="info" title="Propriété">
              <p>
                L&apos;opposé d&apos;une somme algébrique est égal à la somme des opposés de chacun de ses termes.
              </p>
            </Callout>
            <div className="mt-3 space-y-1 text-foreground-muted">
              <p><Math tex="H=3x-(-2x^2-5x+4)" /></p>
              <p><Math tex="H=3x+(+2x^2)+(+5x)+(-4)" /></p>
              <p><Math tex="H=3x+2x^2+5x-4 = 2x^2+8x-4" /></p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-surface-muted p-3">
                <p className="mb-1 text-xs font-semibold text-foreground">Règle 1 · Addition</p>
                <p className="text-xs text-foreground-muted">
                  Parenthèses précédées de « + » : on supprime le « + » et les parenthèses.
                </p>
              </div>
              <div className="rounded-lg bg-surface-muted p-3">
                <p className="mb-1 text-xs font-semibold text-foreground">Règle 2 · Soustraction</p>
                <p className="text-xs text-foreground-muted">
                  Parenthèses précédées de « - » : on les supprime en changeant chaque signe à l&apos;intérieur.
                </p>
                <p className="mt-1 text-center text-xs">
                  <Math tex="-(a+b) = -1\times(a+b) = -a-b" />
                </p>
              </div>
            </div>
            <p className="mt-4 font-semibold text-foreground">Exemple · Simplifier</p>
            <p className="mt-1 text-foreground-muted">
              <Math tex="2x+(3x+5)" /> · <Math tex="4x+(-5+3x)" /> · <Math tex="3x-(5-8x)" /> · <Math tex="8-(5x-6+2x)" />
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="6 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le calcul littéral.">
          <ExerciseCard
            id="1"
            index={1}
            title="Réduire les expressions"
            itemsLabel="20 expressions"
            items={
              <div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <Item n={1}><Math tex="2x+23x=" /></Item>
                  <Item n={2}><Math tex="-8x+2x=" /></Item>
                  <Item n={3}><Math tex="-2x-9x=" /></Item>
                  <Item n={4}><Math tex="7x+x=" /></Item>
                  <Item n={5}><Math tex="3x-7x=" /></Item>
                  <Item n={6}><Math tex="-x+9x=" /></Item>
                  <Item n={7}><Math tex="12x-7x=" /></Item>
                  <Item n={8}><Math tex="-x-x=" /></Item>
                  <Item n={9}><Math tex="x+x=" /></Item>
                  <Item n={10}><Math tex="-\dfrac{9}{5}x+\dfrac{3}{4}x=" /></Item>
                  <Item n={11}><Math tex="x \times x=" /></Item>
                  <Item n={12}><Math tex="-4x\times9x=" /></Item>
                  <Item n={13}><Math tex="-8x^2\times(-5x^3)=" /></Item>
                  <Item n={14}><Math tex="12x\times x^2=" /></Item>
                  <Item n={15}><Math tex="3x^2\times(-7x^2)=" /></Item>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <LetterItem letter="A"><Math tex="A=-5a+7b+2a-4b" /></LetterItem>
                  <LetterItem letter="B"><Math tex="B=3x^2+5x-2x^2+4x+7" /></LetterItem>
                  <LetterItem letter="C"><Math tex="C=x^2-7x+5x^2-2x+7x-x^2" /></LetterItem>
                  <LetterItem letter="D"><Math tex="D=7x^3+x-13-2x^2-3x-7" /></LetterItem>
                  <LetterItem letter="E"><Math tex="E=-x+21+x^2-12-x+\dfrac{2}{3}x^2" /></LetterItem>
                </div>
              </div>
            }
            correction={
              <div>
                <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <CorrectionCard n={1}><Math tex="2x+23x=\mathbf{25x}" /></CorrectionCard>
                  <CorrectionCard n={2}><Math tex="-8x+2x=\mathbf{-6x}" /></CorrectionCard>
                  <CorrectionCard n={3}><Math tex="-2x-9x=\mathbf{-11x}" /></CorrectionCard>
                  <CorrectionCard n={4}><Math tex="7x+x=\mathbf{8x}" /></CorrectionCard>
                  <CorrectionCard n={5}><Math tex="3x-7x=\mathbf{-4x}" /></CorrectionCard>
                  <CorrectionCard n={6}><Math tex="-x+9x=\mathbf{8x}" /></CorrectionCard>
                  <CorrectionCard n={7}><Math tex="12x-7x=\mathbf{5x}" /></CorrectionCard>
                  <CorrectionCard n={8}><Math tex="-x-x=\mathbf{-2x}" /></CorrectionCard>
                  <CorrectionCard n={9}><Math tex="x+x=\mathbf{2x}" /></CorrectionCard>
                  <CorrectionCard n={10}><Math tex="-\dfrac{9}{5}x+\dfrac{3}{4}x=\mathbf{-\dfrac{21}{20}x}" /></CorrectionCard>
                  <CorrectionCard n={11}><Math tex="x\times x=\mathbf{x^2}" /></CorrectionCard>
                  <CorrectionCard n={12}><Math tex="-4x\times9x=\mathbf{-36x^2}" /></CorrectionCard>
                  <CorrectionCard n={13}><Math tex="-8x^2\times(-5x^3)=\mathbf{40x^5}" /></CorrectionCard>
                  <CorrectionCard n={14}><Math tex="12x\times x^2=\mathbf{12x^3}" /></CorrectionCard>
                  <CorrectionCard n={15}><Math tex="3x^2\times(-7x^2)=\mathbf{-21x^4}" /></CorrectionCard>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <CorrectionCard n="A"><Math tex="A=\mathbf{-3a+3b}" /></CorrectionCard>
                  <CorrectionCard n="B"><Math tex="B=\mathbf{x^2+9x+7}" /></CorrectionCard>
                  <CorrectionCard n="C"><Math tex="C=\mathbf{5x^2-2x}" /></CorrectionCard>
                  <CorrectionCard n="D"><Math tex="D=\mathbf{7x^3-2x^2-2x-20}" /></CorrectionCard>
                  <CorrectionCard n="E"><Math tex="E=\mathbf{\dfrac{5}{3}x^2-2x+9}" /></CorrectionCard>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Développer et réduire"
            itemsLabel="12 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <LetterItem letter="A"><Math tex="A=7(2x+5+4x)" /></LetterItem>
                <LetterItem letter="B"><Math tex="B=5x(x-10)" /></LetterItem>
                <LetterItem letter="C"><Math tex="C=-8(-3x+10-7x)" /></LetterItem>
                <LetterItem letter="D"><Math tex="D=-2x(x^2-8+6x)" /></LetterItem>
                <LetterItem letter="E"><Math tex="E=\dfrac{2}{3}\left(6x-\dfrac{8}{5}\right)" /></LetterItem>
                <LetterItem letter="F"><Math tex="F=\dfrac{5}{4}x(-3x+5)" /></LetterItem>
                <LetterItem letter="G"><Math tex="G=(x+7)(x+6)" /></LetterItem>
                <LetterItem letter="H"><Math tex="H=(x-4)(x-8)" /></LetterItem>
                <LetterItem letter="I"><Math tex="I=(3x+2)(5x+1)" /></LetterItem>
                <LetterItem letter="J"><Math tex="J=(x-4)(3x-5)" /></LetterItem>
                <LetterItem letter="K"><Math tex="K=(-2x+3)(2x-6)" /></LetterItem>
                <LetterItem letter="L"><Math tex="L=(-6x-1)(-7x-2)" /></LetterItem>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=\mathbf{42x+35}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=\mathbf{5x^2-50x}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=\mathbf{80x-80}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=\mathbf{-2x^3-12x^2+16x}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=\mathbf{4x-\dfrac{16}{15}}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=\mathbf{-\dfrac{15}{4}x^2+\dfrac{25}{4}x}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="G=\mathbf{x^2+13x+42}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="H=\mathbf{x^2-12x+32}" /></CorrectionCard>
                <CorrectionCard n="I"><Math tex="I=\mathbf{15x^2+13x+2}" /></CorrectionCard>
                <CorrectionCard n="J"><Math tex="J=\mathbf{3x^2-17x+20}" /></CorrectionCard>
                <CorrectionCard n="K"><Math tex="K=\mathbf{-4x^2+18x-18}" /></CorrectionCard>
                <CorrectionCard n="L"><Math tex="L=\mathbf{42x^2+19x+2}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Développer et réduire"
            itemsLabel="4 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <LetterItem letter="A"><Math tex="A=2x(1-4x)+3x(2x+2)" /></LetterItem>
                <LetterItem letter="B"><Math tex="B=-4x(-2x-3)-5x(3x-1)" /></LetterItem>
                <LetterItem letter="C"><Math tex="C=-3x(x-2)-(-2x+4)(-1-x)" /></LetterItem>
                <LetterItem letter="D"><Math tex="D=5(7x+3)+(x+2)(5-2x)" /></LetterItem>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A=\mathbf{-2x^2+8x}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=\mathbf{-7x^2+17x}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=\mathbf{-5x^2+8x+4}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=\mathbf{-2x^2+36x+25}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Développer et réduire (identités remarquables)"
            itemsLabel="8 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <LetterItem letter="A"><Math tex="A=(x+10)^2" /></LetterItem>
                <LetterItem letter="B"><Math tex="B=(3x+5)^2" /></LetterItem>
                <LetterItem letter="C"><Math tex="C=\left(x-\dfrac{5}{2}\right)^2" /></LetterItem>
                <LetterItem letter="D"><Math tex="D=\left(\dfrac{4}{7}x-\dfrac{7}{8}\right)^2" /></LetterItem>
                <LetterItem letter="E"><Math tex="E=(x-5)(x+5)" /></LetterItem>
                <LetterItem letter="F"><Math tex="F=(7x-9)(7x+9)" /></LetterItem>
                <LetterItem letter="G"><Math tex="G=(5x+2)^2-(x^2+7-3x)" /></LetterItem>
                <LetterItem letter="H"><Math tex="H=(2x+5)(2x-5)+3x(x-2)" /></LetterItem>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=\mathbf{x^2+20x+100}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=\mathbf{9x^2+30x+25}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=\mathbf{x^2-5x+\dfrac{25}{4}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=\mathbf{\dfrac{16}{49}x^2-x+\dfrac{49}{64}}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=\mathbf{x^2-25}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=\mathbf{49x^2-81}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="G=\mathbf{24x^2+23x-3}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="H=\mathbf{7x^2-6x-25}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Factoriser"
            itemsLabel="8 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <LetterItem letter="A"><Math tex="A=2a^2+6a" /></LetterItem>
                <LetterItem letter="B"><Math tex="B=-25ab-5abc" /></LetterItem>
                <LetterItem letter="C"><Math tex="C=24ab^2+12a^2b-4abc" /></LetterItem>
                <LetterItem letter="a"><Math tex="a=5x(3x-2)+5x(-2x+1)" /></LetterItem>
                <LetterItem letter="b"><Math tex="b=3x^2+3x(2x-5)-3x" /></LetterItem>
                <LetterItem letter="c"><Math tex="c=12x^3+4x^2(x+3)-4x^2" /></LetterItem>
                <LetterItem letter="d"><Math tex="d=3x(2x+1)-(2x+1)" /></LetterItem>
                <LetterItem letter="e"><Math tex="e=5x(3-x)+(3-x)^2" /></LetterItem>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=\mathbf{2a(a+3)}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=\mathbf{-5ab(5+c)}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=\mathbf{4ab(6b+3a-c)}" /></CorrectionCard>
                <CorrectionCard n="a"><Math tex="a=\mathbf{5x(x-1)}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="b=\mathbf{9x(x-2)}" /></CorrectionCard>
                <CorrectionCard n="c"><Math tex="c=\mathbf{8x^2(2x+1)}" /></CorrectionCard>
                <CorrectionCard n="d"><Math tex="d=\mathbf{(2x+1)(3x-1)}" /></CorrectionCard>
                <CorrectionCard n="e"><Math tex="e=\mathbf{(3-x)(4x+3)}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Factoriser (identités remarquables)"
            itemsLabel="9 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <LetterItem letter="A"><Math tex="A=x^2+10x+25" /></LetterItem>
                <LetterItem letter="D"><Math tex="D=x^2-14x+49" /></LetterItem>
                <LetterItem letter="G"><Math tex="G=x^2-81" /></LetterItem>
                <LetterItem letter="B"><Math tex="B=x^2+18x+81" /></LetterItem>
                <LetterItem letter="E"><Math tex="E=x^2-16x+64" /></LetterItem>
                <LetterItem letter="H"><Math tex="H=121-x^2" /></LetterItem>
                <LetterItem letter="C"><Math tex="C=9x^2+24x+16" /></LetterItem>
                <LetterItem letter="F"><Math tex="F=25x^2-30x+9" /></LetterItem>
                <LetterItem letter="I"><Math tex="I=64x^2-144" /></LetterItem>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=\mathbf{(x+5)^2}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=\mathbf{(x-7)^2}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="G=\mathbf{(x-9)(x+9)}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=\mathbf{(x+9)^2}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=\mathbf{(x-8)^2}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="H=\mathbf{(11-x)(11+x)}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=\mathbf{(3x+4)^2}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=\mathbf{(5x-3)^2}" /></CorrectionCard>
                <CorrectionCard n="I"><Math tex="I=\mathbf{16(2x-3)(2x+3)}" /></CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
