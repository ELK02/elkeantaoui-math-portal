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
  title: "Les Équations · Cours et exercices corrigés | 2AC",
  description:
    "Cours détaillé sur les équations (définition, équations ax+b=0, équations produit, inéquations, résolution de problèmes) et 4 exercices corrigés en détail (55 questions), 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 3",
  heroTitle: "Les Équations",
  heroSubtitle:
    "Une équation, c'est une balance à équilibrer. On isole x, on résout, et on vérifie. Le cours complet, avec des exercices corrigés pas à pas.",
  footerNote: "Les équations · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "exercice1", label: "Ex.1" },
    { id: "exercice2", label: "Ex.2" },
    { id: "exercice3", label: "Ex.3" },
    { id: "exercice4", label: "Ex.4" },
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
          { value: "4", label: "exercices" },
          { value: "55", label: "questions" },
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
          <div className="relative flex select-none items-baseline gap-2 font-serif text-white italic">
            <span className="text-[5.5rem] leading-none font-bold sm:text-[7.5rem]">x</span>
            <span className="text-[3.5rem] leading-none font-bold text-orange-400 sm:text-[4.5rem]">=0</span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 · La définition" title="C'est quoi, une équation ?" tone="light"
        description={
          <>
            Une égalité avec une inconnue <Math tex="x" />, qu&apos;il faut résoudre pour trouver sa valeur.
          </>
        }
      >
        <Callout variant="warning" title="Définition">
          <p>
            Soient <Math tex="a" /> et <Math tex="b" /> deux nombres rationnels connus. Toute égalité qui s&apos;écrit
            sous la forme <Math tex="ax+b=0" /> avec <Math tex="a\neq0" /> s&apos;appelle une{" "}
            <strong>équation du premier degré à une inconnue</strong> <Math tex="x" />.
          </p>
          <p className="mt-2">
            La valeur de <Math tex="x" /> qui vérifie l&apos;égalité est <strong>une solution</strong> de l&apos;équation.
          </p>
        </Callout>

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemples d&apos;équations</p>
        <div className="mt-2 grid gap-x-6 gap-y-2 rounded-xl border border-border p-5 sm:grid-cols-3">
          <p><Math tex="x+0{,}15=0{,}5" /></p>
          <p><Math tex="2x-1=1" /></p>
          <p><Math tex="\dfrac{1}{2}x+1=2x+1" /></p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-5">
            <p className="font-mono text-xs font-semibold text-green-700 uppercase">est une solution</p>
            <p className="mt-2 text-base"><Math tex="1" /> pour <Math tex="x-1=0" /></p>
            <p className="mt-3 text-sm text-foreground-muted">car <Math tex="1-1=0" /></p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
            <p className="font-mono text-xs font-semibold text-rose-700 uppercase">n&apos;est pas une solution</p>
            <p className="mt-2 text-base"><Math tex="-6" /> pour <Math tex="x-1=3" /></p>
            <p className="mt-3 text-sm text-foreground-muted">car <Math tex="-6-1=-7\neq3" /></p>
          </div>
        </div>
      </LessonSection>

      <LessonSection kicker="02 · La méthode de base" title="Résoudre les équations ax + b = 0" tone="light"
        description="On isole x étape par étape, en faisant toujours la même opération des deux côtés."
      >
        <FormulaBlock tex="ax+b=0" caption={<>avec <Math tex="a \neq 0" /></>} />

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-border p-5 text-sm">
            <div>
              <p className="mb-2 font-semibold text-foreground">Résoudre <Math tex="2x-1=1" /></p>
              <p>On a <Math tex="2x-1=1" /> signifie que <Math tex="2x=1+1" /></p>
              <p>c&apos;est à dire <Math tex="2x=2" /> alors <Math tex="x=\dfrac{2}{2}" /></p>
              <p>d&apos;où <Math tex="x=\mathbf{1}" />, la solution de cette équation.</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="mb-2 font-semibold text-foreground">Résoudre <Math tex="2y-0{,}1=2y-0{,}1" /></p>
              <p>On a <Math tex="2y-0{,}1=2y-0{,}1" /> signifie que <Math tex="2y-2y=-0{,}1+0{,}1" /></p>
              <p>alors <Math tex="0y=0" /></p>
              <p>donc cette équation admet <strong>plusieurs solutions</strong> (elle est vraie pour tout <Math tex="y" />).</p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="mb-2 font-semibold text-foreground">Résoudre <Math tex="2(n-1)=3+2n" /></p>
              <p>On a <Math tex="2(n-1)=3+2n" /> signifie que <Math tex="2n-2=3+2n" /></p>
              <p>c&apos;est à dire <Math tex="2n-2n=3+2" /> alors <Math tex="0n=5" /></p>
              <p>donc cette équation <strong>n&apos;admet aucune solution</strong>.</p>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-2 font-semibold text-foreground">Résoudre <Math tex="\dfrac{-2}{7}+2=9x" /></p>
            <p>On a <Math tex="\dfrac{-2}{7}+2=9x" /></p>
            <p>signifie que <Math tex="\dfrac{-2}{7}+\dfrac{2\times7}{7\times1}=\dfrac{9\times7}{1\times7}x" /></p>
            <p>signifie que <Math tex="\dfrac{-2}{7}+\dfrac{14}{7}=\dfrac{63}{7}x" /></p>
            <p>signifie que <Math tex="\dfrac{-2+14}{7}=\dfrac{63}{7}x" /></p>
            <p>on obtient <Math tex="\dfrac{12}{7}=\dfrac{63x}{7}" /></p>
            <p>c&apos;est à dire <Math tex="12=63x" /></p>
            <p>alors <Math tex="x=\dfrac{12}{63}" /></p>
            <p>d&apos;où <Math tex="x=\mathbf{\dfrac{4}{21}}" />, la solution de cette équation.</p>
          </div>
        </div>
      </LessonSection>

      <LessonSection kicker="03 · Le produit nul" title="Résoudre les équations produit" tone="light"
        description={
          <>
            De la forme <Math tex="(ax+b)(cx+d)=0" />. Un produit nul, c&apos;est qu&apos;un des deux facteurs est nul.
          </>
        }
      >
        <FormulaBlock tex="AB=0 \iff A=0 \text{ ou } B=0" />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">résultat 1</p>
            <p className="text-sm"><Math tex="(ax+b)\times(cx+d)=0" /> signifie <Math tex="ax+b=0" /> ou <Math tex="cx+d=0" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">résultat 2</p>
            <p className="text-sm"><Math tex="A^2=0" /> signifie que <Math tex="A=0" /></p>
          </div>
        </div>

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemples</p>
        <div className="mt-2 grid gap-3 lg:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-border p-5 text-sm">
            <div>
              <p className="mb-1 font-semibold text-foreground">
                Résoudre <Math tex="\left(x-3\right)\left(x+\dfrac15\right)=0" />
              </p>
              <p>signifie que <Math tex="x-3=0" /> ou <Math tex="x+\dfrac15=0" /></p>
              <p>c&apos;est à dire <Math tex="x=3" /> ou <Math tex="x=\dfrac{-1}{5}" /></p>
              <p>deux solutions : <Math tex="\mathbf{\dfrac{-1}{5}}" /> et <Math tex="\mathbf{3}" />.</p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="mb-1 font-semibold text-foreground">Résoudre <Math tex="x(x-3)+(x-3)=0" /></p>
              <p>signifie que <Math tex="(x-3)(x+1)=0" /></p>
              <p>c&apos;est à dire <Math tex="x-3=0" /> ou <Math tex="x+1=0" /></p>
              <p>deux solutions : <Math tex="\mathbf{-1}" /> et <Math tex="\mathbf{3}" />.</p>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-border p-5 text-sm">
            <div>
              <p className="mb-1 font-semibold text-foreground">Résoudre <Math tex="(m-0{,}1)^2=0" /></p>
              <p>signifie que <Math tex="m-0{,}1=0" /> c&apos;est à dire <Math tex="m=\mathbf{0{,}1}" />.</p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="mb-1 font-semibold text-foreground">Résoudre <Math tex="x^2+6x+9=0" /></p>
              <p>signifie que <Math tex="x^2+2\times3\times x+3^2=0" /></p>
              <p>c&apos;est à dire <Math tex="(x+3)^2=0" /> alors <Math tex="x+3=0" />, d&apos;où <Math tex="x=\mathbf{-3}" />.</p>
            </div>
            <div className="border-t border-border pt-3">
              <p className="mb-1 font-semibold text-foreground">Résoudre <Math tex="t^2-9=0" /></p>
              <p>c&apos;est à dire <Math tex="t^2-3^2=0" />, on obtient <Math tex="(t-3)(t+3)=0" /></p>
              <p>alors <Math tex="t+3=0" /> ou <Math tex="t-3=0" />, deux solutions : <Math tex="\mathbf{-3}" /> et <Math tex="\mathbf{3}" />.</p>
            </div>
          </div>
        </div>
      </LessonSection>

      <LessonSection kicker="04 · La mise en équation" title="Résoudre des problèmes" tone="light"
        description="Traduire un énoncé en équation, la résoudre, puis vérifier que le résultat a du sens."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Item n={1}>Lire et bien comprendre le problème.</Item>
          <Item n={2}>Choisir l&apos;inconnue.</Item>
          <Item n={3}>Mettre le problème en équation.</Item>
          <Item n={4}>Résoudre l&apos;équation.</Item>
          <Item n={5}>Interpréter le résultat et conclure.</Item>
          <Item n={6}>Vérifier.</Item>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-2 font-semibold text-foreground">Exemple 1</p>
            <p className="mb-3 text-foreground-muted">
              Dans une entreprise de <strong>60</strong> personnes, il y a quatre fois plus de femmes que d&apos;hommes.
              Trouve le nombre d&apos;hommes et de femmes.
            </p>
            <p>Soit <Math tex="x" /> le nombre d&apos;hommes, donc <Math tex="4x" /> le nombre de femmes.</p>
            <p>Équation : <Math tex="x+4x=60" />, donc <Math tex="5x=60" />, alors <Math tex="x=\dfrac{60}{5}=12" />.</p>
            <p className="mt-2 font-semibold text-foreground">
              Il y a <Math tex="\mathbf{12}" /> hommes et <Math tex="4\times12=\mathbf{48}" /> femmes.
            </p>
          </div>
          <div className="rounded-xl border border-border p-5 text-sm">
            <p className="mb-2 font-semibold text-foreground">Exemple 2</p>
            <p className="mb-3 text-foreground-muted">
              Imad a acheté une calculatrice et un livre. Le livre coûte deux fois plus cher que la calculatrice.
              Il a payé <strong>45 DH</strong> en tout. Calcule le prix de chaque article.
            </p>
            <p>Soit <Math tex="x" /> le prix de la calculatrice, donc <Math tex="2x" /> le prix du livre.</p>
            <p>Équation : <Math tex="x+2x=45" />, donc <Math tex="3x=45" />, alors <Math tex="x=\dfrac{45}{3}=15" />.</p>
            <p className="mt-2 font-semibold text-foreground">
              La calculatrice coûte <Math tex="\mathbf{15\ DH}" /> et le livre <Math tex="\mathbf{30\ DH}" />.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="4 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={4} celebrationTitle="Bravo, les 4 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les équations et les inéquations.">
          <ExerciseCard
            id="1"
            index={1}
            title="Résoudre les équations suivantes"
            itemsLabel="15 équations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="3x+5=0" /></Item>
                <Item n={2}><Math tex="x+6=11" /></Item>
                <Item n={3}><Math tex="3x+4=5" /></Item>
                <Item n={4}><Math tex="-2x+7=3" /></Item>
                <Item n={5}><Math tex="6x-5=12" /></Item>
                <Item n={6}><Math tex="-7x+5=13" /></Item>
                <Item n={7}><Math tex="3x-8=12-7x" /></Item>
                <Item n={8}><Math tex="\dfrac{3}{7}x=4" /></Item>
                <Item n={9}><Math tex="12x+9=39-8x" /></Item>
                <Item n={10}><Math tex="\dfrac{x}{2}+\dfrac{5}{8}=3" /></Item>
                <Item n={11}><Math tex="\dfrac{x}{2}+4=\dfrac{x}{6}+5" /></Item>
                <Item n={12}><Math tex="\dfrac{x+1}{5}+\dfrac{3x-4}{3}=\dfrac{4x-7}{15}" /></Item>
                <Item n={13}><Math tex="\dfrac{3x+1}{3}-\dfrac{2x-1}{7}=\dfrac{5x-9}{21}" /></Item>
                <Item n={14}><Math tex="\sqrt2\,x+2\sqrt5=3\sqrt3" /></Item>
                <Item n={15}><Math tex="5(2x-3)-\sqrt7=3(\sqrt3-x)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="3x=-5 \Rightarrow x=\mathbf{-\dfrac{5}{3}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="x=11-6 \Rightarrow x=\mathbf{5}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="3x=1 \Rightarrow x=\mathbf{\dfrac{1}{3}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="-2x=-4 \Rightarrow x=\mathbf{2}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="6x=17 \Rightarrow x=\mathbf{\dfrac{17}{6}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="-7x=8 \Rightarrow x=\mathbf{-\dfrac{8}{7}}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="10x=20 \Rightarrow x=\mathbf{2}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="x=4\times\dfrac{7}{3} \Rightarrow x=\mathbf{\dfrac{28}{3}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="20x=30 \Rightarrow x=\mathbf{\dfrac{3}{2}}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="\dfrac{x}{2}=\dfrac{19}{8} \Rightarrow x=\mathbf{\dfrac{19}{4}}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="3x+24=x+30 \Rightarrow 2x=6 \Rightarrow x=\mathbf{3}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="18x-17=4x-7 \Rightarrow 14x=10 \Rightarrow x=\mathbf{\dfrac{5}{7}}" /></CorrectionCard>
                <CorrectionCard n={13}><Math tex="15x+10=5x-9 \Rightarrow 10x=-19 \Rightarrow x=\mathbf{-\dfrac{19}{10}}" /></CorrectionCard>
                <CorrectionCard n={14}><Math tex="\sqrt2x=3\sqrt3-2\sqrt5 \Rightarrow x=\mathbf{\dfrac{3\sqrt6-2\sqrt{10}}{2}}" /></CorrectionCard>
                <CorrectionCard n={15}><Math tex="13x=15+3\sqrt3+\sqrt7 \Rightarrow x=\mathbf{\dfrac{15+3\sqrt3+\sqrt7}{13}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Résoudre les équations suivantes"
            itemsLabel="13 équations produit"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="(x+5)(2-x)=0" /></Item>
                <Item n={2}><Math tex="(3x+1)(4x-3)=0" /></Item>
                <Item n={3}><Math tex="x^2+2x=0" /></Item>
                <Item n={4}><Math tex="x^2-9x=0" /></Item>
                <Item n={5}><Math tex="9x^2-5x=0" /></Item>
                <Item n={6}><Math tex="x(x+1)(x+2)=0" /></Item>
                <Item n={7}><Math tex="(2x-3\sqrt2)^2=0" /></Item>
                <Item n={8}><Math tex="x^2-6x+9=0" /></Item>
                <Item n={9}><Math tex="x^2+4x=-4" /></Item>
                <Item n={10}><Math tex="x^2-2\sqrt2\,x+2=0" /></Item>
                <Item n={11}><Math tex="4x^2+4x=x^2-4x" /></Item>
                <Item n={12}><Math tex="x^3-5x=0" /></Item>
                <Item n={13}><Math tex="x^3-4x=0" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="x=\mathbf{-5}\ \text{ou}\ x=\mathbf{2}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="x=\mathbf{-\dfrac{1}{3}}\ \text{ou}\ x=\mathbf{\dfrac{3}{4}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="x(x+2)=0 \Rightarrow x=\mathbf{0}\ \text{ou}\ x=\mathbf{-2}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="x(x-9)=0 \Rightarrow x=\mathbf{0}\ \text{ou}\ x=\mathbf{9}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="x(9x-5)=0 \Rightarrow x=\mathbf{0}\ \text{ou}\ x=\mathbf{\dfrac{5}{9}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="x=\mathbf{0}\ \text{ou}\ x=\mathbf{-1}\ \text{ou}\ x=\mathbf{-2}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="2x-3\sqrt2=0 \Rightarrow x=\mathbf{\dfrac{3\sqrt2}{2}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="(x-3)^2=0 \Rightarrow x=\mathbf{3}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="(x+2)^2=0 \Rightarrow x=\mathbf{-2}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="(x-\sqrt2)^2=0 \Rightarrow x=\mathbf{\sqrt2}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="x(3x+8)=0 \Rightarrow x=\mathbf{0}\ \text{ou}\ x=\mathbf{-\dfrac{8}{3}}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="x(x^2-5)=0 \Rightarrow x=\mathbf{0},\ x=\mathbf{\sqrt5}\ \text{ou}\ x=\mathbf{-\sqrt5}" /></CorrectionCard>
                <CorrectionCard n={13}><Math tex="x(x-2)(x+2)=0 \Rightarrow x=\mathbf{0},\ x=\mathbf{2}\ \text{ou}\ x=\mathbf{-2}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Résoudre les inéquations suivantes"
            itemsLabel="7 inéquations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="7x-5\le3" /></Item>
                <Item n={2}><Math tex="2x-5\ge-3\sqrt3" /></Item>
                <Item n={3}><Math tex="7(2x-3)-\sqrt7<3(\sqrt3-x)" /></Item>
                <Item n={4}><Math tex="9x-13\le11(3x-4)" /></Item>
                <Item n={5}><Math tex="t-2\sqrt3\le3\sqrt2-t" /></Item>
                <Item n={6}><Math tex="\dfrac{6t-7}{5}+\dfrac{2t+3}{3}>4" /></Item>
                <Item n={7}><Math tex="\dfrac{2y-3}{21}-\dfrac{9-2y}{7}\le\dfrac{5y+11}{3}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="7x\le8 \Rightarrow x\le\mathbf{\dfrac{8}{7}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="2x\ge5-3\sqrt3 \Rightarrow x\ge\mathbf{\dfrac{5-3\sqrt3}{2}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="17x<21+3\sqrt3+\sqrt7 \Rightarrow x<\mathbf{\dfrac{21+3\sqrt3+\sqrt7}{17}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="9x-13\le33x-44 \Rightarrow 31\le24x \Rightarrow x\ge\mathbf{\dfrac{31}{24}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="2t\le3\sqrt2+2\sqrt3 \Rightarrow t\le\mathbf{\dfrac{3\sqrt2+2\sqrt3}{2}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="28t-6>60 \Rightarrow t>\mathbf{\dfrac{33}{14}}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="8y-30\le35y+77 \Rightarrow -107\le27y \Rightarrow y\ge\mathbf{-\dfrac{107}{27}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Résoudre"
            itemsLabel="20 équations et inéquations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="-3x+5=2x-10" /></Item>
                <Item n={2}><Math tex="5x-3=3x+1" /></Item>
                <Item n={3}><Math tex="3x+5=10-2x" /></Item>
                <Item n={4}><Math tex="5x-7\le3x+1" /></Item>
                <Item n={5}><Math tex="4x^2-3x=0" /></Item>
                <Item n={6}><Math tex="16x^2-25=0" /></Item>
                <Item n={7}><Math tex="\dfrac{3x-7}{5}+\dfrac{x-3}{2}\le\dfrac{13x+8}{10}" /></Item>
                <Item n={8}><Math tex="5x+7=3x+2" /></Item>
                <Item n={9}><Math tex="-3x+4\le-8x-4" /></Item>
                <Item n={10}><Math tex="3x-(7-x)=9" /></Item>
                <Item n={11}><Math tex="7x^2+3x=0" /></Item>
                <Item n={12}><Math tex="\dfrac{3x+2}{4}-\dfrac{x-5}{7}\le0" /></Item>
                <Item n={13}><Math tex="25x^2-10x+1=0" /></Item>
                <Item n={14}><Math tex="x^2+14x+49=0" /></Item>
                <Item n={15}><Math tex="(x+1)^2=x^2+29" /></Item>
                <Item n={16}><Math tex="(6x-1)^2=(4x-7)(9x+8)" /></Item>
                <Item n={17}><Math tex="x+3\le\sqrt2\,x+7" /></Item>
                <Item n={18}><Math tex="(x+3)(5x-2)=(x+3)(3x-8)" /></Item>
                <Item n={19}><Math tex="x^3=7x^2" /></Item>
                <Item n={20}><Math tex="x^2=2x-1" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="15=5x \Rightarrow x=\mathbf{3}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="2x=4 \Rightarrow x=\mathbf{2}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="5x=5 \Rightarrow x=\mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="2x\le8 \Rightarrow x\le\mathbf{4}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="x(4x-3)=0 \Rightarrow x=\mathbf{0}\ \text{ou}\ x=\mathbf{\dfrac{3}{4}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="(4x-5)(4x+5)=0 \Rightarrow x=\mathbf{\dfrac{5}{4}}\ \text{ou}\ x=\mathbf{-\dfrac{5}{4}}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="11x-29\le13x+8 \Rightarrow x\ge\mathbf{-\dfrac{37}{2}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="2x=-5 \Rightarrow x=\mathbf{-\dfrac{5}{2}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="5x\le-8 \Rightarrow x\le\mathbf{-\dfrac{8}{5}}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="4x=16 \Rightarrow x=\mathbf{4}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="x(7x+3)=0 \Rightarrow x=\mathbf{0}\ \text{ou}\ x=\mathbf{-\dfrac{3}{7}}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="17x+34\le0 \Rightarrow x\le\mathbf{-2}" /></CorrectionCard>
                <CorrectionCard n={13}><Math tex="(5x-1)^2=0 \Rightarrow x=\mathbf{\dfrac{1}{5}}" /></CorrectionCard>
                <CorrectionCard n={14}><Math tex="(x+7)^2=0 \Rightarrow x=\mathbf{-7}" /></CorrectionCard>
                <CorrectionCard n={15}><Math tex="2x+1=29 \Rightarrow x=\mathbf{14}" /></CorrectionCard>
                <CorrectionCard n={16}><Math tex="-12x+1=-31x-56 \Rightarrow 19x=-57 \Rightarrow x=\mathbf{-3}" /></CorrectionCard>
                <CorrectionCard n={17}><Math tex="x(1-\sqrt2)\le4 \Rightarrow x\ge\mathbf{-4-4\sqrt2}" /></CorrectionCard>
                <CorrectionCard n={18}><Math tex="(x+3)(2x+6)=0 \Rightarrow x=\mathbf{-3}" /></CorrectionCard>
                <CorrectionCard n={19}><Math tex="x^2(x-7)=0 \Rightarrow x=\mathbf{0}\ \text{ou}\ x=\mathbf{7}" /></CorrectionCard>
                <CorrectionCard n={20}><Math tex="(x-1)^2=0 \Rightarrow x=\mathbf{1}" /></CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
