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
  title: "Les opérations sur les nombres décimaux · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet (vocabulaire, priorités opératoires, distributivité) et 3 exercices corrigés pas à pas sur les opérations sur les nombres décimaux, 1ère année collège, semestre 1.",
  kicker: "1ʳᵉ Année Collège · Chapitre 2",
  heroTitle: "Les opérations sur les nombres décimaux",
  heroSubtitle:
    "Le vocabulaire des quatre opérations, l'ordre dans lequel on calcule, et la distributivité. Un cours complet, mis en pratique dans 3 exercices corrigés.",
  footerNote: "Les opérations sur les nombres décimaux · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "vocabulaire", label: "Vocabulaire" },
    { id: "proprietes", label: "Propriétés" },
    { id: "distributivite", label: "Distributivité" },
    { id: "exercice1", label: "Ex.1" },
    { id: "exercice2", label: "Ex.2" },
    { id: "exercice3", label: "Ex.3" },
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

/** A rule card used in Part II: statement + two worked examples. */
function RuleCard({
  n,
  statement,
  exampleA,
  exampleB,
}: {
  n: number;
  statement: ReactNode;
  exampleA: ReactNode;
  exampleB: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
          {n}
        </span>
        <p className="font-semibold text-foreground">Règle {n}</p>
      </div>
      <p className="rounded-lg border-l-4 border-rose-400 bg-rose-100/60 p-4 text-sm text-foreground">{statement}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface-muted p-4 text-sm leading-relaxed">{exampleA}</div>
        <div className="rounded-lg border border-border bg-surface-muted p-4 text-sm leading-relaxed">{exampleB}</div>
      </div>
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
          { value: "4", label: "opérations" },
          { value: "6", label: "règles" },
          { value: "22", label: "questions corrigées" },
        ]}
        ctas={
          <>
            <a
              href="#vocabulaire"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercice1"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Voir les exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-center gap-3 font-serif text-6xl font-bold text-white italic sm:text-7xl">
            <span>+</span>
            <span className="text-orange-400">×</span>
          </div>
        }
      />

      {/* ===================== I. VOCABULAIRE ===================== */}
      <LessonSection
        id="vocabulaire"
        kicker="01 · Le vocabulaire"
        title="Chaque opération, un nom"
        tone="light"
        description="Une opération porte un nom, et son résultat aussi."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-xl font-bold text-blue-600">+</div>
            <p className="mt-3 font-semibold text-foreground">Addition et somme</p>
            <p className="mt-1 text-sm text-foreground-muted">
              L&apos;addition est une opération. La <strong>somme</strong> est son résultat.
            </p>
            <p className="mt-3 rounded-lg bg-surface-muted p-3 text-sm">
              <Math tex="2{,}5 + 3 = \mathbf{5{,}5}" />
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-foreground-muted">
              <li>5,5 est la somme de 2,5 et 3</li>
              <li>2,5 et 3 sont les <strong>termes</strong> de la somme</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-xl font-bold text-rose-600">−</div>
            <p className="mt-3 font-semibold text-foreground">Soustraction et différence</p>
            <p className="mt-1 text-sm text-foreground-muted">
              La soustraction est une opération. La <strong>différence</strong> est son résultat.
            </p>
            <p className="mt-3 rounded-lg bg-surface-muted p-3 text-sm">
              <Math tex="12 - 9{,}7 = \mathbf{2{,}3}" />
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-foreground-muted">
              <li>2,3 est la différence de 12 et 9,7</li>
              <li>12 et 9,7 sont les <strong>termes</strong> de la différence</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-xl font-bold text-amber-600">×</div>
            <p className="mt-3 font-semibold text-foreground">Multiplication et produit</p>
            <p className="mt-1 text-sm text-foreground-muted">
              La multiplication est une opération. Le <strong>produit</strong> est son résultat.
            </p>
            <p className="mt-3 rounded-lg bg-surface-muted p-3 text-sm">
              <Math tex="3{,}5 \times 10{,}2 = \mathbf{35{,}7}" />
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-foreground-muted">
              <li>35,7 est le produit de 3,5 et 10,2</li>
              <li>3,5 et 10,2 sont les <strong>facteurs</strong> du produit</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-xl font-bold text-green-600">÷</div>
            <p className="mt-3 font-semibold text-foreground">Division et quotient</p>
            <p className="mt-1 text-sm text-foreground-muted">
              La division est une opération. Le <strong>quotient</strong> est son résultat.
            </p>
            <p className="mt-3 rounded-lg bg-surface-muted p-3 text-sm">
              <Math tex="24{,}6 \div 2 = \mathbf{12{,}3}" />
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-xs text-foreground-muted">
              <li>12,3 est le quotient de 24,6 par 2</li>
              <li>24,6 est le <strong>dividende</strong>, 2 est le <strong>diviseur</strong></li>
            </ul>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. PROPRIÉTÉS OPÉRATOIRES ===================== */}
      <LessonSection
        id="proprietes"
        kicker="02 · Les priorités opératoires"
        title="Propriétés opératoires"
        tone="muted"
        description="L'ordre dans lequel on effectue les calculs obéit à des règles précises."
      >
        <p className="mb-4 font-mono text-xs font-semibold text-foreground-muted uppercase">1. Calculs sans parenthèses</p>
        <div className="grid gap-4">
          <RuleCard
            n={1}
            statement={
              <>
                Dans une suite d&apos;additions <u>ou</u> de multiplications, sans parenthèses, on peut effectuer les
                opérations dans n&apos;importe quel ordre.
              </>
            }
            exampleA={
              <>
                <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple A</p>
                <Math tex="A = 19 + 2{,}5 + 1 = 21{,}5 + 1 = \mathbf{22{,}5}" />
              </>
            }
            exampleB={
              <>
                <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple B</p>
                <Math tex="B = 20 \times 10{,}5 \times 2 = 210 \times 2 = \mathbf{420}" />
              </>
            }
          />
          <RuleCard
            n={2}
            statement={
              <>
                Dans une suite d&apos;additions <u>et</u> de soustractions, sans parenthèses, on calcule de la gauche vers
                la droite. Il en est de même pour une suite de multiplications et de divisions.
              </>
            }
            exampleA={
              <>
                <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple A</p>
                <Math tex="A = 12 + 1{,}5 - 7 + 24{,}2 - 3{,}5 = 6{,}5 + 24{,}2 - 3{,}5 = 30{,}7 - 3{,}5 = \mathbf{27{,}2}" />
              </>
            }
            exampleB={
              <>
                <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple B</p>
                <Math tex="B = 20{,}5 \times 10 \div 2 \times 5 \times 3 \div 4 = \mathbf{384{,}375}" />
              </>
            }
          />
          <RuleCard
            n={3}
            statement={
              <>
                Dans une suite d&apos;additions, de soustractions, de multiplications et de divisions, sans parenthèses,
                on effectue <strong>les multiplications et les divisions avant</strong> les additions et les
                soustractions.
              </>
            }
            exampleA={
              <>
                <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple A</p>
                <Math tex="A = 2{,}5 \times 4 + 11 - 15{,}5 \div 5 + 1 = 10 + 11 - 3{,}1 + 1 = \mathbf{18{,}9}" />
              </>
            }
            exampleB={
              <>
                <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple B</p>
                <Math tex="B = 12{,}8 \div 4 + 11 - 7{,}5 \times 0{,}5 = 3{,}2 + 11 - 3{,}75 = \mathbf{10{,}45}" />
              </>
            }
          />
        </div>

        <p className="mt-8 mb-4 font-mono text-xs font-semibold text-foreground-muted uppercase">2. Calculs avec parenthèses</p>
        <RuleCard
          n={4}
          statement={
            <>
              Dans une suite d&apos;additions, de soustractions, de multiplications et de divisions,{" "}
              <strong>avec parenthèses</strong>, on calcule d&apos;abord ce qui est entre parenthèses, en commençant par
              les plus intérieures.
            </>
          }
          exampleA={
            <>
              <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple A</p>
              <Math tex="A = 46 - 12 \times (9-6) + 8 \div (3+1) = 46 - 36 + 2 = \mathbf{12}" />
            </>
          }
          exampleB={
            <>
              <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Exemple B</p>
              <Math tex="B = 11{,}5 + (3{,}5 + (11-9)) \times 5 - (7{,}5-2) \div 2 = 11{,}5 + 27{,}5 - 2{,}75 = \mathbf{36{,}25}" />
            </>
          }
        />
      </LessonSection>

      {/* ===================== III. DISTRIBUTIVITÉ ===================== */}
      <LessonSection
        id="distributivite"
        kicker="03 · Utile pour factoriser"
        title="Distributivité"
        tone="light"
        description="La multiplication se répartit sur l'addition et sur la soustraction."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border p-5 sm:p-6">
            <p className="mb-3 font-semibold text-foreground">Par rapport à l&apos;addition</p>
            <MathBlock
              tex="k \times (a+b) = k \times a + k \times b"
              className="text-center text-lg font-semibold text-foreground sm:text-xl"
            />
            <p className="mt-2 text-center text-xs text-foreground-muted">a, b et k sont des nombres décimaux</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
              <p className="rounded-lg bg-surface-muted p-3">
                <Math tex="2{,}5 \times (7+1) = 17{,}5 + 2{,}5 = \mathbf{20}" />
              </p>
              <p className="rounded-lg bg-surface-muted p-3">
                <Math tex="(1{,}5+4) \times 10 = 15 + 40 = \mathbf{55}" />
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 sm:p-6">
            <p className="mb-3 font-semibold text-foreground">Par rapport à la soustraction</p>
            <MathBlock
              tex="k \times (a-b) = k \times a - k \times b"
              className="text-center text-lg font-semibold text-foreground sm:text-xl"
            />
            <p className="mt-2 text-center text-xs text-foreground-muted">a, b et k décimaux, avec a plus grand que b</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
              <p className="rounded-lg bg-surface-muted p-3">
                <Math tex="2{,}5 \times (7-1) = 17{,}5 - 2{,}5 = \mathbf{15}" />
              </p>
              <p className="rounded-lg bg-surface-muted p-3">
                <Math tex="(4-1{,}5) \times 10 = 40 - 15 = \mathbf{25}" />
              </p>
            </div>
          </div>
        </div>

        <Callout variant="warning" title="Utile pour les exercices">
          Utilisées « à l&apos;envers », ces deux règles transforment une somme ou une différence de produits ayant un{" "}
          <strong>facteur commun</strong> en un produit unique. C&apos;est exactement ce que demandent les exercices 1
          et 3.
        </Callout>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercice1"
        kicker="04 · À toi de jouer"
        title="Exercices d'application corrigés"
        tone="muted"
        description="Cherche chaque expression, puis clique pour vérifier."
      >
        <ExerciseGroup total={3} celebrationTitle="Bravo, les 3 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises l'ordre des opérations et la distributivité.">
          <ExerciseCard
            id="1"
            index={1}
            title="Une seule multiplication dans chaque cas"
            itemsLabel="8 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item label="A"><Math tex="8{,}25 \times 7{,}4 + 8{,}25 \times 12{,}6" /></Item>
                <Item label="B"><Math tex="13{,}8 \times 2{,}4 - 13{,}8 \times 0{,}4" /></Item>
                <Item label="C"><Math tex="98 \times 10{,}21 - 98 \times 10{,}2" /></Item>
                <Item label="D"><Math tex="7{,}4 \times 0{,}2 + 9{,}8 \times 7{,}4" /></Item>
                <Item label="E"><Math tex="34 \times 45 + 74 \times 45 - 8 \times 45" /></Item>
                <Item label="F"><Math tex="6 \times 13{,}9 + 3 \times 13{,}9 + 13{,}9" /></Item>
                <Item label="G"><Math tex="7 \times 6{,}3 + 7 \times 7{,}2 - 17 \times 0 - 7 \times 3{,}5" /></Item>
                <Item label="H"><Math tex="3{,}45 \times 16{,}8 - 4{,}2 \times 3{,}45 - 3{,}45 \times 2{,}6" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard label="A"><Math tex="8{,}25 \times (7{,}4+12{,}6) = 8{,}25 \times 20 = \mathbf{165}" /></CorrectionCard>
                <CorrectionCard label="B"><Math tex="13{,}8 \times (2{,}4-0{,}4) = 13{,}8 \times 2 = \mathbf{27{,}6}" /></CorrectionCard>
                <CorrectionCard label="C"><Math tex="98 \times (10{,}21-10{,}2) = 98 \times 0{,}01 = \mathbf{0{,}98}" /></CorrectionCard>
                <CorrectionCard label="D">
                  <Math tex="7{,}4 \times (0{,}2+9{,}8) = 7{,}4 \times 10 = \mathbf{74}" />
                  <span className="mt-1 block text-xs text-foreground-muted">on écrit 9,8 × 7,4 = 7,4 × 9,8</span>
                </CorrectionCard>
                <CorrectionCard label="E"><Math tex="45 \times (34+74-8) = 45 \times 100 = \mathbf{4\,500}" /></CorrectionCard>
                <CorrectionCard label="F">
                  <Math tex="13{,}9 \times (6+3+1) = 13{,}9 \times 10 = \mathbf{139}" />
                  <span className="mt-1 block text-xs text-foreground-muted">13,9 = 13,9 × 1</span>
                </CorrectionCard>
                <CorrectionCard label="G">
                  <Math tex="7 \times (6{,}3+7{,}2-3{,}5) = 7 \times 10 = \mathbf{70}" />
                  <span className="mt-1 block text-xs text-foreground-muted">piège : 17 × 0 = 0</span>
                </CorrectionCard>
                <CorrectionCard label="H">
                  <Math tex="3{,}45 \times (16{,}8-4{,}2-2{,}6) = 3{,}45 \times 10 = \mathbf{34{,}5}" />
                  <span className="mt-1 block text-xs text-foreground-muted">on écrit 4,2 × 3,45 = 3,45 × 4,2</span>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Toutes les étapes du calcul"
            itemsLabel="8 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item label="A"><Math tex="6 \times (9-2)" /></Item>
                <Item label="B"><Math tex="6 \times 9 - 2" /></Item>
                <Item label="C"><Math tex="25 - 12 \div 3 + 4" /></Item>
                <Item label="D"><Math tex="42 - (3 + 4 \times 8)" /></Item>
                <Item label="E"><Math tex="2 + (3{,}5+0{,}5) \times (4{,}2-1{,}2)" /></Item>
                <Item label="F"><Math tex="12 - 3 \times 2 + 8 \div 2" /></Item>
                <Item label="G"><Math tex="[(12-8)+16] \times (6+4)" /></Item>
                <Item label="H"><Math tex="4 \times (7{,}2+2{,}3) - [33-(12-9)] \div 2 + 14" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard label="A"><Math tex="6 \times 7 = \mathbf{42}" /></CorrectionCard>
                <CorrectionCard label="B"><Math tex="54 - 2 = \mathbf{52}" /></CorrectionCard>
                <CorrectionCard label="C"><Math tex="25 - 4 + 4 = 21+4 = \mathbf{25}" /></CorrectionCard>
                <CorrectionCard label="D"><Math tex="42 - (3+32) = 42-35 = \mathbf{7}" /></CorrectionCard>
                <CorrectionCard label="E"><Math tex="2 + 4 \times 3 = 2+12 = \mathbf{14}" /></CorrectionCard>
                <CorrectionCard label="F"><Math tex="12 - 6 + 4 = 6+4 = \mathbf{10}" /></CorrectionCard>
                <CorrectionCard label="G"><Math tex="[4+16] \times 10 = 20 \times 10 = \mathbf{200}" /></CorrectionCard>
                <CorrectionCard label="H">
                  <Math tex="4 \times 9{,}5 - [33-3] \div 2 + 14 = 38 - 15 + 14 = \mathbf{37}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Une seule multiplication pour chacune"
            itemsLabel="6 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item label="A"><Math tex="9 \times 5 + 9 \times 3" /></Item>
                <Item label="B"><Math tex="7 \times 17 - 7 \times 13" /></Item>
                <Item label="C"><Math tex="6 \times 19 + 6 \times 20 - 6 \times 29" /></Item>
                <Item label="D"><Math tex="13 \times 1\,119 - 119 \times 13" /></Item>
                <Item label="E"><Math tex="3{,}14 \times 7 + 9 \times 3{,}14 - 3{,}14 \times 6" /></Item>
                <Item label="F"><Math tex="17 \times 44 + 17 \times 55 + 17" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard label="A"><Math tex="9 \times (5+3) = 9 \times 8 = \mathbf{72}" /></CorrectionCard>
                <CorrectionCard label="B"><Math tex="7 \times (17-13) = 7 \times 4 = \mathbf{28}" /></CorrectionCard>
                <CorrectionCard label="C"><Math tex="6 \times (19+20-29) = 6 \times 10 = \mathbf{60}" /></CorrectionCard>
                <CorrectionCard label="D">
                  <Math tex="13 \times (1\,119-119) = 13 \times 1\,000 = \mathbf{13\,000}" />
                  <span className="mt-1 block text-xs text-foreground-muted">on écrit 119 × 13 = 13 × 119</span>
                </CorrectionCard>
                <CorrectionCard label="E">
                  <Math tex="3{,}14 \times (7+9-6) = 3{,}14 \times 10 = \mathbf{31{,}4}" />
                  <span className="mt-1 block text-xs text-foreground-muted">on écrit 9 × 3,14 = 3,14 × 9</span>
                </CorrectionCard>
                <CorrectionCard label="F">
                  <Math tex="17 \times (44+55+1) = 17 \times 100 = \mathbf{1\,700}" />
                  <span className="mt-1 block text-xs text-foreground-muted">17 = 17 × 1</span>
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
