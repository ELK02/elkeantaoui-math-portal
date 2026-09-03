import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  FormulaBlock,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Opérations sur les nombres en écriture fractionnaire · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur les opérations (addition, soustraction, multiplication, division) sur les nombres en écriture fractionnaire : propriétés, méthodes de simplification, et 34 exercices corrigés, 1ère année collège.",
  kicker: "1ʳᵉ Année Collège · Chapitre 4",
  heroTitle: "Opérations sur les nombres en écriture fractionnaire",
  heroSubtitle:
    "Addition, soustraction, multiplication et division, plus les méthodes pour simplifier avant de calculer. 34 exercices corrigés pour t'entraîner pas à pas.",
  footerNote: "Opérations sur les nombres en écriture fractionnaire · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "section-1", label: "I. Addition/Sous." },
    { id: "section-2", label: "II. Mult./Div." },
    { id: "section-3", label: "III. Méthodes" },
    { id: "exercice1", label: "Ex.1" },
    { id: "exercice2", label: "Ex.2" },
    { id: "exercice3", label: "Ex.3" },
    { id: "exercice4", label: "Ex.4" },
  ],
};

/** Small lettered pill used inside item grids. */
function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[10px] font-bold text-rose-600">
      {children}
    </span>
  );
}

function Item({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <Pill>{label}</Pill>
      <span className="text-sm">{children}</span>
    </div>
  );
}

function CorrectionCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{label} =</span> {children}
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
          { value: "3", label: "parties de cours" },
          { value: "4", label: "propriétés clés" },
          { value: "34", label: "exercices corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#section-1"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercice1"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Faire les exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-center gap-2 font-serif text-6xl font-bold text-white italic sm:text-7xl">
            <span className="text-orange-400">a</span>
            <span>÷</span>
            <span>b</span>
          </div>
        }
      />

      {/* ===================== I. ADDITION ET SOUSTRACTION ===================== */}
      <LessonSection
        id="section-1"
        kicker="01 · Dénominateurs identiques ou non"
        title="Addition et soustraction"
        tone="light"
        description="La même règle que pour les fractions simples, avec un détour possible par la réduction."
      >
        <p className="mb-2 font-semibold text-foreground">1. Les dénominateurs sont les mêmes</p>
        <Callout variant="warning" title="Propriété 1">
          Soient <Math tex="\dfrac{a}{b}" /> et <Math tex="\dfrac{c}{b}" /> (<Math tex="b \neq 0" />) :
        </Callout>
        <FormulaBlock
          tex="\dfrac{a}{b}+\dfrac{c}{b}=\dfrac{a+c}{b} \qquad \dfrac{a}{b}-\dfrac{c}{b}=\dfrac{a-c}{b}"
          caption="avec a supérieur ou égal à c pour la soustraction"
        />
        <div className="mt-4 grid gap-3 sm:grid-cols-2 text-base">
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{11}{5}+\dfrac{17}{5} = \dfrac{28}{5}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{5{,}6}{11}-\dfrac{2{,}3}{11} = \dfrac{3{,}3}{11}" /></p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2. Les dénominateurs ne sont pas les mêmes</p>
        <Callout variant="warning" title="Propriété 2">
          On réduit d&apos;abord au même dénominateur, puis on applique la propriété 1.
        </Callout>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 text-base">
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{4}{7}+\dfrac{3}{14} = \dfrac{8}{14}+\dfrac{3}{14} = \mathbf{\dfrac{11}{14}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{2{,}5}{3}-\dfrac{1}{9} = \dfrac{7{,}5}{9}-\dfrac{1}{9} = \mathbf{\dfrac{6{,}5}{9}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="7+\dfrac{3}{5} = \dfrac{35}{5}+\dfrac{3}{5} = \mathbf{\dfrac{38}{5}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{7}{6}-\dfrac{2}{5} = \dfrac{35}{30}-\dfrac{12}{30} = \mathbf{\dfrac{23}{30}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{5}{8}+\dfrac{11}{6} = \dfrac{15}{24}+\dfrac{44}{24} = \mathbf{\dfrac{59}{24}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{10}{9}-\dfrac{5}{6} = \dfrac{20}{18}-\dfrac{15}{18} = \mathbf{\dfrac{5}{18}}" /></p>
        </div>
      </LessonSection>

      {/* ===================== II. MULTIPLICATION ET DIVISION ===================== */}
      <LessonSection
        id="section-2"
        kicker="02 · Produit, inverse et quotient"
        title="Multiplication et division"
        tone="muted"
        description="Multiplier terme à terme, ou multiplier par l'inverse."
      >
        <p className="mb-2 font-semibold text-foreground">1. Multiplication</p>
        <Callout variant="warning" title="Propriété 3">
          Soient <Math tex="\dfrac{a}{b}" /> et <Math tex="\dfrac{c}{d}" /> (<Math tex="b \neq 0" />,{" "}
          <Math tex="d \neq 0" />) :
        </Callout>
        <FormulaBlock tex="\dfrac{a}{b}\times\dfrac{c}{d}=\dfrac{a\times c}{b\times d}" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2 text-base">
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{5}{7}\times\dfrac{3}{2} = \dfrac{5\times3}{7\times2} = \mathbf{\dfrac{15}{14}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{11}{2}\times\dfrac{3}{2} = \dfrac{11\times3}{2\times2} = \mathbf{\dfrac{33}{4}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="7\times\dfrac{2}{3} = \dfrac{7\times2}{3} = \mathbf{\dfrac{14}{3}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{5}{7}\times2{,}6 = \dfrac{5\times2{,}6}{7} = \mathbf{\dfrac{13}{7}}" /></p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2. Division</p>
        <p className="mb-2 text-sm font-semibold text-foreground-muted">a) L&apos;inverse d&apos;un nombre non nul</p>
        <Callout variant="warning" title="Règle">
          Soient <Math tex="a" /> et <Math tex="\dfrac{b}{c}" /> deux nombres non nuls : l&apos;inverse de{" "}
          <Math tex="a" /> est <Math tex="\dfrac{1}{a}" />, l&apos;inverse de <Math tex="\dfrac{b}{c}" /> est{" "}
          <Math tex="\dfrac{c}{b}" />.
        </Callout>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
          <p className="rounded-lg border border-border p-4">L&apos;inverse de 2,5 est <Math tex="\dfrac{1}{2{,}5}" /></p>
          <p className="rounded-lg border border-border p-4">L&apos;inverse de <Math tex="\dfrac{7}{11}" /> est <Math tex="\dfrac{11}{7}" /></p>
          <p className="rounded-lg border border-border p-4">L&apos;inverse de <Math tex="\dfrac{1}{9}" /> est 9</p>
          <p className="rounded-lg border border-border p-4">L&apos;inverse de <Math tex="\dfrac{3}{1{,}5}" /> est <Math tex="\dfrac{1{,}5}{3}" /></p>
        </div>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground-muted">b) La division</p>
        <Callout variant="warning" title="Propriété 4">
          Pour diviser un nombre en écriture fractionnaire par un nombre non nul, on multiplie le premier par
          l&apos;inverse du second.
        </Callout>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 text-base">
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{3}{5}\div7 = \dfrac{3}{5}\times\dfrac{1}{7} = \mathbf{\dfrac{3}{35}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{7}{5}\div\dfrac{2}{3} = \dfrac{7}{5}\times\dfrac{3}{2} = \mathbf{\dfrac{21}{10}}" /></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{\frac{2}{7}}{\frac{5}{3}} = \dfrac{2}{7}\times\dfrac{3}{5} = \mathbf{\dfrac{6}{35}}" /></p>
        </div>
      </LessonSection>

      {/* ===================== III. LES MÉTHODES ===================== */}
      <LessonSection
        id="section-3"
        kicker="03 · Le réflexe qui change tout"
        title="Les méthodes : simplifier avant de calculer"
        tone="light"
        description="Simplifier avant plutôt qu'après : les nombres restent petits, le calcul est plus sûr."
      >
        <p className="mb-2 font-semibold text-foreground">1. Addition et soustraction, simplification verticale</p>
        <Callout variant="info">
          Avant d&apos;additionner ou de soustraire, on simplifie chaque fraction séparément : numérateur et
          dénominateur <strong>d&apos;une même fraction</strong> (verticalement).
        </Callout>
        <div className="mt-4 grid gap-3 lg:grid-cols-2 text-sm leading-loose">
          <div className="rounded-lg border border-border p-4">
            <Math tex="\dfrac{15}{10}+\dfrac{18}{9} = \dfrac{3}{2}+\dfrac{2}{1} = \dfrac{3}{2}+\dfrac{4}{2} = \mathbf{\dfrac{7}{2}}" />
          </div>
          <div className="rounded-lg border border-border p-4">
            <Math tex="\dfrac{11}{3}-\dfrac{18}{24} = \dfrac{11}{3}-\dfrac{3}{4} = \dfrac{44}{12}-\dfrac{9}{12} = \mathbf{\dfrac{35}{12}}" />
          </div>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2. Multiplication, simplification verticale ou diagonale</p>
        <Callout variant="info">
          Avant de multiplier, on simplifie <strong>verticalement</strong> (numérateur et dénominateur d&apos;une même
          fraction) <strong>ou diagonalement</strong> (numérateur d&apos;une fraction avec dénominateur de l&apos;autre).
        </Callout>
        <div className="mt-4 grid gap-3 lg:grid-cols-2 text-sm leading-loose">
          <div className="rounded-lg border border-border p-4">
            <p className="mb-2 inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs font-semibold uppercase text-foreground-muted">Verticalement</p>
            <Math tex="\dfrac{14}{8}\times\dfrac{9}{15} = \dfrac{7}{4}\times\dfrac{3}{5} = \mathbf{\dfrac{21}{20}}" />
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="mb-2 inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs font-semibold uppercase text-foreground-muted">Diagonalement</p>
            <Math tex="\dfrac{16}{27}\times\dfrac{9}{20} = \dfrac{4}{3}\times\dfrac{1}{5} = \mathbf{\dfrac{4}{15}}" />
          </div>
        </div>

        <Callout variant="info" title="Astuce pour les exercices">
          Simplifie toujours <em>avant</em> de multiplier les numérateurs entre eux et les dénominateurs entre eux : les
          nombres restent petits, le calcul est plus rapide et plus sûr (voir l&apos;exercice 3).
        </Callout>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercice1"
        kicker="À toi de jouer"
        title="34 exercices corrigés"
        tone="muted"
        description="Cherche chaque calcul sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={4} celebrationTitle="Bravo, les 4 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les opérations sur les nombres en écriture fractionnaire.">
          <ExerciseCard
            id="1"
            index={1}
            title="Additionner et soustraire (même dénominateur)"
            itemsLabel="8 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item label="A"><Math tex="\dfrac{5}{3} + \dfrac{2}{3}" /></Item>
                <Item label="B"><Math tex="\dfrac{3}{7} + \dfrac{5}{7}" /></Item>
                <Item label="C"><Math tex="\dfrac{1}{4} + \dfrac{11}{4}" /></Item>
                <Item label="D"><Math tex="\dfrac{13}{5} + \dfrac{4}{5}" /></Item>
                <Item label="E"><Math tex="\dfrac{9}{4} - \dfrac{5}{4}" /></Item>
                <Item label="F"><Math tex="\dfrac{27}{13} - \dfrac{4}{13}" /></Item>
                <Item label="G"><Math tex="\dfrac{15}{11} - \dfrac{4}{11}" /></Item>
                <Item label="H"><Math tex="\dfrac{7}{12} - \dfrac{3}{12}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard label="A"><Math tex="\dfrac{5+2}{3} = \mathbf{\dfrac{7}{3}}" /></CorrectionCard>
                <CorrectionCard label="B"><Math tex="\dfrac{3+5}{7} = \mathbf{\dfrac{8}{7}}" /></CorrectionCard>
                <CorrectionCard label="C"><Math tex="\dfrac{1+11}{4} = \dfrac{12}{4} = \mathbf{3}" /></CorrectionCard>
                <CorrectionCard label="D"><Math tex="\dfrac{13+4}{5} = \mathbf{\dfrac{17}{5}}" /></CorrectionCard>
                <CorrectionCard label="E"><Math tex="\dfrac{9-5}{4} = \dfrac{4}{4} = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard label="F"><Math tex="\dfrac{27-4}{13} = \mathbf{\dfrac{23}{13}}" /></CorrectionCard>
                <CorrectionCard label="G"><Math tex="\dfrac{15-4}{11} = \dfrac{11}{11} = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard label="H"><Math tex="\dfrac{7-3}{12} = \dfrac{4}{12} = \mathbf{\dfrac{1}{3}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Additionner et soustraire (dénominateurs différents)"
            itemsLabel="12 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item label="A"><Math tex="\dfrac{6}{5} + \dfrac{3}{10}" /></Item>
                <Item label="B"><Math tex="\dfrac{8}{15} + \dfrac{11}{5}" /></Item>
                <Item label="C"><Math tex="\dfrac{3}{4} + \dfrac{5}{2}" /></Item>
                <Item label="D"><Math tex="\dfrac{2}{3} + \dfrac{7}{5}" /></Item>
                <Item label="E"><Math tex="\dfrac{16}{3} - \dfrac{5}{6}" /></Item>
                <Item label="F"><Math tex="\dfrac{15}{2} - \dfrac{9}{8}" /></Item>
                <Item label="G"><Math tex="\dfrac{5}{21} - \dfrac{1}{7}" /></Item>
                <Item label="H"><Math tex="\dfrac{7}{3} - \dfrac{4}{5}" /></Item>
                <Item label="I"><Math tex="\dfrac{1{,}3}{6} + \dfrac{6}{0{,}4}" /></Item>
                <Item label="J"><Math tex="7 + \dfrac{1}{4}" /></Item>
                <Item label="K"><Math tex="\dfrac{93}{10} - 7{,}2" /></Item>
                <Item label="L"><Math tex="\dfrac{1}{1{,}2} - \dfrac{1}{2{,}4}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard label="A"><Math tex="\dfrac{12}{10} + \dfrac{3}{10} = \dfrac{15}{10} = \mathbf{\dfrac{3}{2}}" /></CorrectionCard>
                <CorrectionCard label="B"><Math tex="\dfrac{8}{15} + \dfrac{33}{15} = \mathbf{\dfrac{41}{15}}" /></CorrectionCard>
                <CorrectionCard label="C"><Math tex="\dfrac{3}{4} + \dfrac{10}{4} = \mathbf{\dfrac{13}{4}}" /></CorrectionCard>
                <CorrectionCard label="D"><Math tex="\dfrac{10}{15} + \dfrac{21}{15} = \mathbf{\dfrac{31}{15}}" /></CorrectionCard>
                <CorrectionCard label="E"><Math tex="\dfrac{32}{6} - \dfrac{5}{6} = \dfrac{27}{6} = \mathbf{\dfrac{9}{2}}" /></CorrectionCard>
                <CorrectionCard label="F"><Math tex="\dfrac{60}{8} - \dfrac{9}{8} = \mathbf{\dfrac{51}{8}}" /></CorrectionCard>
                <CorrectionCard label="G"><Math tex="\dfrac{5}{21} - \dfrac{3}{21} = \mathbf{\dfrac{2}{21}}" /></CorrectionCard>
                <CorrectionCard label="H"><Math tex="\dfrac{35}{15} - \dfrac{12}{15} = \mathbf{\dfrac{23}{15}}" /></CorrectionCard>
                <CorrectionCard label="I">
                  <Math tex="\dfrac{13}{60} + \dfrac{900}{60} = \mathbf{\dfrac{913}{60}}" />
                  <span className="mt-1 block text-xs text-foreground-muted">6 ÷ 0,4 = 15 ; soit environ 15,22</span>
                </CorrectionCard>
                <CorrectionCard label="J"><Math tex="\dfrac{28}{4} + \dfrac{1}{4} = \mathbf{\dfrac{29}{4}}" /></CorrectionCard>
                <CorrectionCard label="K"><Math tex="\dfrac{93}{10} - \dfrac{72}{10} = \mathbf{\dfrac{21}{10}}" /></CorrectionCard>
                <CorrectionCard label="L"><Math tex="\dfrac{10}{12} - \dfrac{5}{12} = \mathbf{\dfrac{5}{12}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Multiplier et diviser"
            itemsLabel="8 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item label="A"><Math tex="\dfrac{13}{14} \times \dfrac{7}{26}" /></Item>
                <Item label="B"><Math tex="\dfrac{25}{16} \times \dfrac{6}{5}" /></Item>
                <Item label="C"><Math tex="3 \times \dfrac{5}{12}" /></Item>
                <Item label="D"><Math tex="\dfrac{2021}{2020} \times 2020" /></Item>
                <Item label="E"><Math tex="\dfrac{9}{8} \div \dfrac{3}{16}" /></Item>
                <Item label="F"><Math tex="\dfrac{25}{36} \div \dfrac{15}{24}" /></Item>
                <Item label="G"><Math tex="198 \div \dfrac{132}{72}" /></Item>
                <Item label="H"><Math tex="\dfrac{3}{2} \div 2022" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard label="A">
                  <Math tex="\dfrac{1}{2} \times \dfrac{1}{2} = \mathbf{\dfrac{1}{4}}" />
                  <span className="mt-1 block text-xs text-foreground-muted">simplification diagonale</span>
                </CorrectionCard>
                <CorrectionCard label="B"><Math tex="5 \times \dfrac{3}{8} = \mathbf{\dfrac{15}{8}}" /></CorrectionCard>
                <CorrectionCard label="C"><Math tex="\dfrac{15}{12} = \mathbf{\dfrac{5}{4}}" /></CorrectionCard>
                <CorrectionCard label="D">
                  <Math tex="\mathbf{2021}" />
                  <span className="mt-1 block text-xs text-foreground-muted">2020 se simplifie avec le dénominateur</span>
                </CorrectionCard>
                <CorrectionCard label="E"><Math tex="3 \times 2 = \mathbf{6}" /></CorrectionCard>
                <CorrectionCard label="F"><Math tex="\dfrac{5}{3} \times \dfrac{2}{3} = \mathbf{\dfrac{10}{9}}" /></CorrectionCard>
                <CorrectionCard label="G"><Math tex="\dfrac{3}{2} \times 72 = \mathbf{108}" /></CorrectionCard>
                <CorrectionCard label="H">
                  <Math tex="\dfrac{3}{4044} = \mathbf{\dfrac{1}{1348}}" />
                  <span className="mt-1 block text-xs text-foreground-muted">3 et 4044 sont divisibles par 3</span>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Calculs combinés"
            itemsLabel="6 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item label="A"><Math tex="\dfrac{1}{2} + \dfrac{4}{3} + \dfrac{2}{5}" /></Item>
                <Item label="B"><Math tex="\dfrac{1}{2} + \dfrac{4}{3} - \dfrac{2}{5}" /></Item>
                <Item label="C"><Math tex="\dfrac{1}{2} \times \dfrac{6}{14} \times \dfrac{28}{3}" /></Item>
                <Item label="D"><Math tex="\dfrac{3}{2} - \dfrac{3}{2} \times \dfrac{5}{7}" /></Item>
                <Item label="E"><Math tex="5 + \dfrac{3}{2} \times \dfrac{5}{3} - \dfrac{4}{3}" /></Item>
                <Item label="F"><Math tex="8 \times \left(\dfrac{4}{5} - \dfrac{3}{4}\right) + \dfrac{5}{6} \times \dfrac{5}{3}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard label="A"><Math tex="\dfrac{15}{30} + \dfrac{40}{30} + \dfrac{12}{30} = \mathbf{\dfrac{67}{30}}" /></CorrectionCard>
                <CorrectionCard label="B"><Math tex="\dfrac{15}{30} + \dfrac{40}{30} - \dfrac{12}{30} = \mathbf{\dfrac{43}{30}}" /></CorrectionCard>
                <CorrectionCard label="C"><Math tex="\dfrac{1\times6\times28}{2\times14\times3} = \dfrac{168}{84} = \mathbf{2}" /></CorrectionCard>
                <CorrectionCard label="D">
                  <Math tex="\dfrac{21}{14} - \dfrac{15}{14} = \mathbf{\dfrac{3}{7}}" />
                  <span className="mt-1 block text-xs text-foreground-muted">la multiplication d&apos;abord</span>
                </CorrectionCard>
                <CorrectionCard label="E">
                  <Math tex="5 + \dfrac{5}{2} - \dfrac{4}{3} = \dfrac{30}{6}+\dfrac{15}{6}-\dfrac{8}{6} = \mathbf{\dfrac{37}{6}}" />
                </CorrectionCard>
                <CorrectionCard label="F">
                  <Math tex="8\times\dfrac{1}{20} + \dfrac{25}{18} = \dfrac{2}{5}+\dfrac{25}{18} = \dfrac{36}{90}+\dfrac{125}{90} = \mathbf{\dfrac{161}{90}}" />
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
