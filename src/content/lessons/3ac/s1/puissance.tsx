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
  title: "Puissances · Cours et exercices corrigés | 3AC",
  description:
    "Cours complet sur les puissances : définition, règles par convention, règles de calcul, puissance d'un produit et d'un quotient, notation scientifique, et 5 exercices corrigés en détail. 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Calcul numérique",
  heroTitle: "Puissances",
  heroSubtitle:
    "Définition, toutes les règles de calcul à connaître, et notation scientifique : illustrées par des exemples corrigés pas à pas.",
  footerNote: "Puissances · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "conventions", label: "Conventions" },
    { id: "regles-calcul", label: "Règles" },
    { id: "produit-quotient", label: "Produit/Quot." },
    { id: "notation-scientifique", label: "Notation sci." },
    { id: "exercices", label: "Exercices" },
    { id: "memo", label: "Mémo" },
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

/** A rule card: pill label, title, boxed formula, examples. */
function RuleCard({
  label,
  title,
  formula,
  children,
}: {
  label: ReactNode;
  title: string;
  formula: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-xs font-bold text-foreground-muted">
          {label}
        </span>
        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>
      <div className="mb-4 rounded-lg bg-surface-muted p-3 text-center text-lg font-semibold">{formula}</div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function ExampleRow({ children }: { children: ReactNode }) {
  return <div className="rounded-lg bg-surface-muted px-4 py-3 text-sm">{children}</div>;
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "3", label: "grandes parties" },
          { value: "9", label: "règles à connaître" },
          { value: "5", label: "exercices corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#definition"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#memo"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Fiche mémo express
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-baseline font-serif text-white italic">
            <span className="text-[6rem] leading-none font-bold sm:text-[8rem]">10</span>
            <span className="-mt-14 -ml-1 text-[3rem] leading-none font-bold text-orange-400 sm:text-[4rem]">
              n
            </span>
          </div>
        }
      />

      {/* ===================== DÉFINITION ===================== */}
      <LessonSection
        id="definition"
        kicker="01 · La définition"
        title="C'est quoi, une puissance ?"
        tone="light"
        description="Le nombre réel a, à la puissance n (« a à l'exposant n »), est défini par :"
      >
        <FormulaBlock tex="a^{n}=\underbrace{a\times a\times a\times\cdots\times a}_{n\ \text{fois}}" />
        <p className="mt-4 text-sm text-foreground-muted">
          avec <Math tex="a\in\mathbb{R}" /> (a est un nombre réel quelconque) et <Math tex="n\in\mathbb{N}^{*}" />{" "}
          (n est un entier naturel non nul).
        </p>
      </LessonSection>

      {/* ===================== CONVENTIONS ===================== */}
      <LessonSection
        id="conventions"
        kicker="02 · Par cœur"
        title="Quatre règles par convention"
        tone="light"
        description="Quatre cas particuliers à connaître avant tout le reste."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <RuleCard label={<Math tex="a^0" />} title="Exposant nul" formula={<Math tex="a^{0}=1" />}>
            <ExampleRow><Math tex="3^{0}=1" /></ExampleRow>
            <ExampleRow><Math tex="(-5{,}75)^{0}=1" /></ExampleRow>
            <ExampleRow><Math tex="\left(\dfrac{\pi}{5}\right)^{0}=1" /></ExampleRow>
          </RuleCard>
          <RuleCard label={<Math tex="a^1" />} title="Exposant un" formula={<Math tex="a^{1}=a" />}>
            <ExampleRow><Math tex="3^{1}=3" /></ExampleRow>
            <ExampleRow><Math tex="(-5{,}75)^{1}=-5{,}75" /></ExampleRow>
            <ExampleRow><Math tex="x^{1}=x" /></ExampleRow>
          </RuleCard>
          <RuleCard label={<Math tex="a^{-1}" />} title="Exposant moins un" formula={<Math tex="a^{-1}=\dfrac{1}{a}" />}>
            <ExampleRow><Math tex="3^{-1}=\dfrac{1}{3}" /></ExampleRow>
            <ExampleRow><Math tex="10^{-1}=\dfrac{1}{10}=0{,}1" /></ExampleRow>
            <ExampleRow><Math tex="x^{-1}=\dfrac{1}{x}" /></ExampleRow>
          </RuleCard>
          <RuleCard label={<Math tex="a^{-n}" />} title="Exposant négatif" formula={<Math tex="a^{-n}=\dfrac{1}{a^{n}}" />}>
            <ExampleRow><Math tex="3^{-2}=\dfrac{1}{3^{2}}=\dfrac{1}{9}" /></ExampleRow>
            <ExampleRow><Math tex="10^{-3}=\dfrac{1}{10^{3}}=0{,}001" /></ExampleRow>
            <ExampleRow><Math tex="x^{-2}=\dfrac{1}{x^{2}}" /></ExampleRow>
          </RuleCard>
        </div>

        <Callout variant="info" title="Remarque">
          <Math tex="0^{0}" /> n&apos;est pas défini, il n&apos;existe pas.
        </Callout>
      </LessonSection>

      {/* ===================== RÈGLES DE CALCUL ===================== */}
      <LessonSection
        id="regles-calcul"
        kicker="03 · Trois réflexes"
        title="Règles de calcul"
        tone="light"
        description={<>Valables pour <Math tex="n,p\in\mathbb{Z}" /> (entiers relatifs).</>}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <RuleCard label={<Math tex="a^na^p" />} title="Produit de puissances" formula={<Math tex="a^{n}\times a^{p}=a^{n+p}" />}>
            <ExampleRow><Math tex="2^{3}\times2^{4}=2^{7}" /></ExampleRow>
            <ExampleRow><Math tex="10^{3}\times10^{-4}=10^{-1}=0{,}1" /></ExampleRow>
            <ExampleRow><Math tex="x^{2}\times x^{3}=x^{5}" /></ExampleRow>
          </RuleCard>
          <RuleCard label={<Math tex="(a^n)^p" />} title="Puissance d'une puissance" formula={<Math tex="(a^{n})^{p}=a^{n\times p}" />}>
            <ExampleRow><Math tex="(2^{3})^{4}=2^{12}" /></ExampleRow>
            <ExampleRow><Math tex="(10^{3})^{-4}=10^{-12}=\dfrac{1}{10^{12}}" /></ExampleRow>
            <ExampleRow><Math tex="(x^{2})^{3}=x^{6}" /></ExampleRow>
          </RuleCard>
          <RuleCard label={<Math tex="a^n/a^p" />} title="Quotient de puissances" formula={<Math tex="\dfrac{a^{n}}{a^{p}}=a^{n-p}" />}>
            <ExampleRow><Math tex="\dfrac{2^{3}}{2^{7}}=2^{-4}=\dfrac{1}{2^{4}}" /></ExampleRow>
            <ExampleRow><Math tex="\dfrac{10^{3}}{10^{-2}}=10^{5}=100\,000" /></ExampleRow>
            <ExampleRow><Math tex="\dfrac{x^{3}}{x}=x^{2}" /></ExampleRow>
          </RuleCard>
        </div>
      </LessonSection>

      {/* ===================== PRODUIT / QUOTIENT ===================== */}
      <LessonSection
        id="produit-quotient"
        kicker="04 · Deux nombres, une puissance"
        title="Puissance d'un produit et d'un quotient"
        tone="light"
        description={<>Valables pour <Math tex="a,b\in\mathbb{R}" /> (<Math tex="b\neq0" />) et <Math tex="n\in\mathbb{Z}" />.</>}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <RuleCard label={<Math tex="(ab)^n" />} title="Puissance d'un produit" formula={<Math tex="(a\times b)^{n}=a^{n}\times b^{n}" />}>
            <ExampleRow><Math tex="(5\times3)^{2}=5^{2}\times3^{2}=\mathbf{225}" /></ExampleRow>
            <ExampleRow><Math tex="5^{5}\times2^{5}=(5\times2)^{5}=\mathbf{100\,000}" /></ExampleRow>
            <ExampleRow><Math tex="(3x)^{2}=3^{2}\times x^{2}=\mathbf{9x^{2}}" /></ExampleRow>
            <ExampleRow><Math tex="(-2x)^{3}=(-2)^{3}\times x^{3}=\mathbf{-8x^{3}}" /></ExampleRow>
          </RuleCard>
          <RuleCard
            label={<Math tex="(a/b)^n" />}
            title="Puissance d'un quotient"
            formula={
              <div className="space-y-1.5">
                <Math tex="\left(\dfrac{a}{b}\right)^{n}=\dfrac{a^{n}}{b^{n}}" />
                <p className="text-xs font-normal text-foreground-muted">et</p>
                <Math tex="\left(\dfrac{a}{b}\right)^{-n}=\left(\dfrac{b}{a}\right)^{n}=\dfrac{b^{n}}{a^{n}}" />
              </div>
            }
          >
            <ExampleRow><Math tex="\left(\dfrac{2}{3}\right)^{2}=\dfrac{2^{2}}{3^{2}}=\mathbf{\dfrac{4}{9}}" /></ExampleRow>
            <ExampleRow><Math tex="\left(\dfrac{10}{3}\right)^{-2}=\left(\dfrac{3}{10}\right)^{2}=\mathbf{0{,}09}" /></ExampleRow>
            <ExampleRow><Math tex="\left(\dfrac{x}{4}\right)^{2}=\mathbf{\dfrac{x^{2}}{16}}" /></ExampleRow>
          </RuleCard>
        </div>
      </LessonSection>

      {/* ===================== NOTATION SCIENTIFIQUE ===================== */}
      <LessonSection
        id="notation-scientifique"
        kicker="05 · Un format universel"
        title="Notation scientifique"
        tone="muted"
        description="Les puissances de 10 et une méthode simple pour écrire n'importe quel nombre sous une forme compacte."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-3 font-semibold text-foreground">Puissances positives</p>
            <FormulaBlock
              tex="10^{n}=\underbrace{10\times10\times\cdots\times10}_{n\ \text{fois}}"
              caption="1 suivi de n zéros"
            />
            <div className="mt-4 space-y-2">
              <ExampleRow><Math tex="10^{3}=1\,000" /> <span className="text-foreground-muted">· mille</span></ExampleRow>
              <ExampleRow><Math tex="10^{6}=1\,000\,000" /> <span className="text-foreground-muted">· 1 million</span></ExampleRow>
              <ExampleRow><Math tex="10^{9}=1\,000\,000\,000" /> <span className="text-foreground-muted">· 1 milliard</span></ExampleRow>
              <ExampleRow><Math tex="10^{12}=1\,000\,000\,000\,000" /> <span className="text-foreground-muted">· 1 billion*</span></ExampleRow>
            </div>
            <p className="mt-3 text-xs text-foreground-muted">
              * En français. En anglais, « billion » désigne <Math tex="10^{9}" /> (un milliard), un faux-ami classique.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-3 font-semibold text-foreground">Puissances négatives</p>
            <FormulaBlock tex="10^{-n}=\dfrac{1}{10^{n}}" caption="0 virgule n zéros puis 1" />
            <div className="mt-4 space-y-2">
              <ExampleRow><Math tex="10^{-1}=0{,}1" /> <span className="text-foreground-muted">· 1 dixième</span></ExampleRow>
              <ExampleRow><Math tex="10^{-2}=0{,}01" /> <span className="text-foreground-muted">· 1 centième</span></ExampleRow>
              <ExampleRow><Math tex="10^{-3}=0{,}001" /> <span className="text-foreground-muted">· 1 millième</span></ExampleRow>
              <ExampleRow><Math tex="10^{-6}=0{,}000\,001" /> <span className="text-foreground-muted">· 1 millionième</span></ExampleRow>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-5 text-center sm:p-6">
          <p className="mb-3 text-sm font-semibold text-foreground-muted">
            Écrire un nombre en écriture scientifique, c&apos;est l&apos;exprimer sous la forme :
          </p>
          <Math tex="a\times10^{\,n}" className="text-2xl" />
          <p className="mt-3 text-xs text-foreground-muted">
            avec <strong>a</strong>, un nombre compris entre 1 et 10 (10 exclu), et <strong>n</strong> un entier relatif.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-3 text-sm font-semibold text-foreground">
              Nombres <Math tex="\geq 1" /> en valeur absolue → exposant positif
            </p>
            <div className="space-y-2 text-sm">
              <ExampleRow><Math tex="9{,}5=\mathbf{9{,}5}\times10^{0}" /></ExampleRow>
              <ExampleRow><Math tex="50{,}7=\mathbf{5{,}07}\times10^{1}" /></ExampleRow>
              <ExampleRow><Math tex="1\,000=\mathbf{1}\times10^{3}" /></ExampleRow>
              <ExampleRow><Math tex="1\,234=\mathbf{1{,}234}\times10^{3}" /></ExampleRow>
              <ExampleRow><Math tex="-25{,}1=\mathbf{-2{,}51}\times10^{1}" /></ExampleRow>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-3 text-sm font-semibold text-foreground">
              Nombres <Math tex="<1" /> en valeur absolue → exposant négatif
            </p>
            <div className="space-y-2 text-sm">
              <ExampleRow><Math tex="0{,}5=\mathbf{5}\times10^{-1}" /></ExampleRow>
              <ExampleRow><Math tex="0{,}02=\mathbf{2}\times10^{-2}" /></ExampleRow>
              <ExampleRow><Math tex="0{,}0123=\mathbf{1{,}23}\times10^{-2}" /></ExampleRow>
              <ExampleRow><Math tex="0{,}000\,15=\mathbf{1{,}5}\times10^{-4}" /></ExampleRow>
              <ExampleRow><Math tex="-0{,}7=\mathbf{-7}\times10^{-1}" /></ExampleRow>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="5 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={5} celebrationTitle="Bravo, les 5 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les puissances.">
          <ExerciseCard
            id="1"
            index={1}
            title="Écrire sous forme d'une puissance"
            itemsLabel="5 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="A=(2^{3})^{2}" /></Item>
                <Item n={2}><Math tex="B=7^{5}\times3^{5}" /></Item>
                <Item n={3}><Math tex="C=(10^{4})^{3}\times10^{-5}" /></Item>
                <Item n={4}><Math tex="D=\dfrac{2^{4}}{2^{-3}}" /></Item>
                <Item n={5}><Math tex="E=\dfrac{5^{9}\times5^{-2}}{5^{4}}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="A=2^{6}=\mathbf{64}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="B=21^{5}=\mathbf{4\,084\,101}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="C=10^{7}=\mathbf{10\,000\,000}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="D=2^{7}=\mathbf{128}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="E=5^{3}=\mathbf{125}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Calculer et simplifier"
            itemsLabel="6 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="E=(-2)^{3}-3^{3}" /></Item>
                <Item n={2}><Math tex="F=\dfrac{7\times10^{5}}{2\times10^{-3}}" /></Item>
                <Item n={3}><Math tex="G=\dfrac{(-3)^{5}\times5^{5}}{15^{2}\times3^{3}}" /></Item>
                <Item n={4}><Math tex="H=\dfrac{6{,}3\times10^{-4}\times15\times10^{6}}{3^{3}\times10^{2}}" /></Item>
                <Item n={5}><Math tex="I=\dfrac{11\times10^{7}}{4\times(10^{3})^{5}}" /></Item>
                <Item n={6}><Math tex="J=\dfrac{54\times10^{-1}-83\times10^{-2}}{10^{-2}}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="E=\mathbf{-35}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="F=\mathbf{3{,}5\times10^{8}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="G=\mathbf{-125}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="H=\mathbf{3{,}5}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="I=\mathbf{2{,}75\times10^{-8}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="J=\mathbf{457}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Calculer et simplifier"
            itemsLabel="3 expressions · a, b, c réels non nuls"
            items={
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">1</Pill>
                  <span className="overflow-x-auto pt-0.5 text-base">
                    <Math tex="E=\dfrac{a^{4}\times(ab^{-2})^{4}}{(ab^{-1})^{6}}" />
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">2</Pill>
                  <span className="overflow-x-auto pt-0.5 text-base">
                    <Math tex="F=\dfrac{(ab^{2})^{2}\times(a^{2}b)^{-2}\times(a^{3}b^{2})^{-2}}{(a^{-1}b)^{3}\times(a^{2}b^{-1})^{-2}\times a^{4}b^{-2}}" />
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">3</Pill>
                  <span className="overflow-x-auto pt-0.5 text-base">
                    <Math tex="G=\dfrac{(a^{3}b^{-2})^{5}\times c^{5}}{(a^{-1}c)^{3}\times(b^{2}c^{-1})^{-2}\times a^{18}b^{-7}}" />
                  </span>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={1}><Math tex="E=\mathbf{\dfrac{a^{2}}{b^{2}}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="F=\mathbf{\dfrac{1}{a^{5}b^{5}}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="G=\mathbf{b}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Puissance de 10, puis écriture décimale"
            itemsLabel="12 expressions"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                <Item n={1}><Math tex="(10^{1})^{5}" /></Item>
                <Item n={2}><Math tex="(10^{4})^{2}" /></Item>
                <Item n={3}><Math tex="(10^{1})^{-1}" /></Item>
                <Item n={4}><Math tex="(10^{-8})^{0}" /></Item>
                <Item n={5}><Math tex="10^{4}\times10^{8}" /></Item>
                <Item n={6}><Math tex="10^{-4}\times10^{0}" /></Item>
                <Item n={7}><Math tex="10^{1}\times10^{5}" /></Item>
                <Item n={8}><Math tex="10^{-5}\times10^{-2}" /></Item>
                <Item n={9}><Math tex="\dfrac{10^{-8}}{10^{5}}" /></Item>
                <Item n={10}><Math tex="\dfrac{10^{-1}}{10^{-6}}" /></Item>
                <Item n={11}><Math tex="\dfrac{10^{-5}}{10^{5}}" /></Item>
                <Item n={12}><Math tex="\dfrac{10^{-6}}{10^{4}}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-4">
                <CorrectionCard n={1}><Math tex="\mathbf{10^{5}=100\,000}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{10^{8}=100\,000\,000}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{10^{-1}=0{,}1}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{10^{0}=1}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{10^{12}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{10^{-4}=0{,}0001}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\mathbf{10^{6}=1\,000\,000}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\mathbf{10^{-7}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\mathbf{10^{-13}}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="\mathbf{10^{5}=100\,000}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="\mathbf{10^{-10}}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="\mathbf{10^{-10}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Écriture scientifique"
            itemsLabel="10 expressions"
            items={
              <div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <Item n={1}><Math tex="M=\dfrac{3{,}6\times10^{4}}{4\times10^{6}}" /></Item>
                  <Item n={2}><Math tex="N=\dfrac{3{,}2\times10^{5}}{2\times10^{6}}" /></Item>
                  <Item n={3}><Math tex="P=\dfrac{12\times10^{-4}\times5\times10^{6}}{15\times10^{3}\times2\times10^{2}}" /></Item>
                  <Item n={4}><Math tex="Q=10^{-4}\times0{,}2\times10^{3}\times\dfrac{1}{10^{2}}" /></Item>
                  <Item n={5}><Math tex="R=3^{2}\times2-125\times10^{-1}" /></Item>
                  <Item n={6}><Math tex="S=(5\times10^{-14})\times(0{,}4\times10^{16})\times\left(\dfrac{0{,}00056}{7}\right)" /></Item>
                  <Item n={7}><Math tex="T=\dfrac{10^{-8}\times0{,}7\times10^{12}}{21\times10^{3}}" /></Item>
                  <Item n={8}><Math tex="U=\dfrac{24\times10^{2}\times3{,}5\times10^{5}}{8\times10^{-1}\times21\times10^{4}}" /></Item>
                  <Item n={9}><Math tex="V=\dfrac{4\times(10^{-2})^{3}\times10^{2}}{12\times10^{-3}}" /></Item>
                  <Item n={10}><Math tex="W=\dfrac{1{,}5\times10^{-5}\times(2\times10^{3})^{2}}{0{,}14\times10^{2}}" /></Item>
                </div>
                <p className="mt-3 text-xs text-foreground-muted">
                  Corrections calculées et vérifiées pas à pas (non fournies dans le document original du professeur).
                </p>
              </div>
            }
            correction={
              <div>
                <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <CorrectionCard n={1}><Math tex="M=\mathbf{9\times10^{-3}}" /></CorrectionCard>
                  <CorrectionCard n={2}><Math tex="N=\mathbf{1{,}6\times10^{-1}}" /></CorrectionCard>
                  <CorrectionCard n={3}><Math tex="P=\mathbf{2\times10^{-3}}" /></CorrectionCard>
                  <CorrectionCard n={4}><Math tex="Q=\mathbf{2\times10^{-4}}" /></CorrectionCard>
                  <CorrectionCard n={5}><Math tex="R=\mathbf{5{,}5\times10^{0}}" /></CorrectionCard>
                  <CorrectionCard n={6}><Math tex="S=\mathbf{1{,}6\times10^{-2}}" /></CorrectionCard>
                  <CorrectionCard n={7}><Math tex="T=\dfrac{1}{3}\approx\mathbf{3{,}33\times10^{-1}}" /></CorrectionCard>
                  <CorrectionCard n={8}><Math tex="U=\mathbf{5\times10^{3}}" /></CorrectionCard>
                  <CorrectionCard n={9}><Math tex="V=\dfrac{1}{30}\approx\mathbf{3{,}33\times10^{-2}}" /></CorrectionCard>
                  <CorrectionCard n={10}><Math tex="W=\dfrac{30}{7}\approx\mathbf{4{,}29\times10^{0}}" /></CorrectionCard>
                </div>
                <p className="mt-3 text-xs text-foreground-muted">
                  Pour T, V et W, le quotient exact n&apos;est pas un nombre décimal (fractions 1/3, 1/30 et 30/7) : les valeurs ci-dessus sont arrondies au centième.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>

      {/* ===================== MÉMO ===================== */}
      <LessonSection
        id="memo"
        kicker="Révision rapide"
        title="Fiche mémo"
        tone="light"
        description="Toutes les formules du chapitre réunies en un coup d'œil, idéal avant un contrôle."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">01</p>
            <Math tex="a^{0}=1" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">02</p>
            <Math tex="a^{1}=a" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">03</p>
            <Math tex="a^{-1}=\dfrac{1}{a}" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">04</p>
            <Math tex="a^{-n}=\dfrac{1}{a^{n}}" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">05</p>
            <Math tex="a^{n}a^{p}=a^{n+p}" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">06</p>
            <Math tex="(a^{n})^{p}=a^{np}" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">07</p>
            <Math tex="\dfrac{a^{n}}{a^{p}}=a^{n-p}" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">08</p>
            <Math tex="(ab)^{n}=a^{n}b^{n}" />
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1.5 font-mono text-[10px] text-foreground-muted">09</p>
            <Math tex="\left(\dfrac{a}{b}\right)^{n}=\dfrac{a^{n}}{b^{n}}" />
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-center text-white">
            <p className="mb-1.5 font-mono text-[10px] text-neutral-400">10</p>
            <Math tex="a\times10^{n}" />
          </div>
        </div>
      </LessonSection>
    </LessonShell>
  );
}
