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
  title: "Produit et Division des Nombres Rationnels · 2AC",
  description:
    "Fiche pédagogique, cours complet (multiplication, inverse, division) et série d'exercices corrigés sur le produit et la division des nombres rationnels, 2ème année collège.",
  kicker: "2ᵉ Année Collège · Chapitre 3",
  heroTitle: "Le produit et la division des rationnels",
  heroSubtitle:
    "Multiplier, c'est facile : numérateurs entre eux, dénominateurs entre eux. Diviser, c'est juste multiplier par l'inverse.",
  footerNote: "Produit et division des nombres rationnels · Mathématiques, 2ᵉ année collège, semestre 1.",
  sections: [
    { id: "fiche", label: "Fiche" },
    { id: "cours", label: "Cours" },
    { id: "exercices", label: "Exercices" },
  ],
};

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500">
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

function FicheCard({ title, items, tone }: { title: string; items?: ReactNode[]; tone: "amber" | "sky" | "rose" | "emerald"; children?: ReactNode }) {
  const tones = {
    amber: "border-orange-500/30 bg-orange-100/60 text-orange-700",
    sky: "border-border bg-surface-muted text-foreground",
    rose: "border-rose-500/30 bg-rose-100/60 text-rose-700",
    emerald: "border-green-500/20 bg-green-100/60 text-green-700",
  } as const;
  return (
    <div className={`rounded-2xl border p-5 sm:p-6 ${tones[tone]}`}>
      <p className="mb-3 text-sm font-bold">{title}</p>
      {items ? (
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-foreground">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      ) : null}
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
          { value: "10", label: "exercices" },
          { value: "60+", label: "calculs" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Voir le cours
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
          <div className="relative flex select-none items-center gap-3 font-serif text-6xl leading-none font-bold text-white italic sm:text-7xl">
            <span>×</span>
            <span className="text-orange-400">÷</span>
          </div>
        }
      />

      {/* ===================== FICHE PEDAGOGIQUE ===================== */}
      <LessonSection id="fiche" kicker="Repères" title="Fiche pédagogique" tone="light"
        description="Durée indicative : 5 heures."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FicheCard
            title="Objectifs d'apprentissage"
            tone="amber"
            items={[
              "Connaître les règles de multiplication et de division des nombres rationnels.",
              "Savoir multiplier et diviser des nombres rationnels.",
              "Calculer l'inverse d'un nombre rationnel non nul.",
              "Déterminer le signe du produit et du quotient de deux nombres rationnels.",
            ]}
          />
          <FicheCard
            title="Prérequis"
            tone="sky"
            items={[
              "Calculer la somme et la différence de deux nombres fractionnaires.",
              "Multiplier et diviser deux nombres fractionnaires.",
              "Déterminer l'inverse d'un nombre décimal non nul.",
            ]}
          />
          <FicheCard title="Gestion du temps" tone="rose">
            <p className="text-sm text-foreground">
              5 heures réparties entre le cours (multiplication, inverse, division) et les applications directes.
            </p>
          </FicheCard>
          <FicheCard title="Outils didactiques" tone="emerald" items={["Tableau", "Livre scolaire"]} />
        </div>
      </LessonSection>

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 · La multiplication" title="Multiplication des nombres rationnels" tone="light"
        description="On multiplie les numérateurs entre eux, et les dénominateurs entre eux."
      >
        <FormulaBlock tex="\dfrac{a}{b} \times \dfrac{c}{d} = \dfrac{a \times c}{b \times d}" caption={<>pour <Math tex="b \neq 0" /> et <Math tex="d \neq 0" /></>} />

        <Callout variant="warning" title="Remarques">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Si <Math tex="b = 1" />, la formule devient : <Math tex="a \times \dfrac{c}{d} = \dfrac{a \times c}{d}" />
            </li>
            <li>
              <Math tex="\dfrac{a}{b} = a \times \dfrac{1}{b}" /> ; <Math tex="\dfrac{a}{b} \times 1 = \dfrac{a}{b}" /> ;{" "}
              <Math tex="\dfrac{a}{b} \times 0 = 0" />
            </li>
            <li>Quand c&apos;est possible, il est préférable de simplifier avant d&apos;effectuer les multiplications.</li>
          </ul>
        </Callout>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="A = \dfrac{28}{9} \times \dfrac{-18}{21} = -\dfrac{7 \times 4 \times 9 \times 2}{9 \times 7 \times 3} = \dfrac{-8}{3}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="B = \dfrac{-4}{7} \times \dfrac{-6}{11} = \dfrac{4 \times 6}{7 \times 11} = \dfrac{24}{77}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="C = \dfrac{3}{8} \times \dfrac{5}{-8} = -\dfrac{3 \times 5}{8 \times 8} = \dfrac{-15}{64}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="D = -5 \times \dfrac{9}{-10} = \dfrac{5 \times 9}{5 \times 2} = \dfrac{9}{2}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm sm:col-span-2">
            <Math tex="E = \dfrac{3}{4} \times \dfrac{-1}{2} \times \dfrac{5}{-7} = \dfrac{3 \times 1 \times 5}{4 \times 2 \times 7} = \dfrac{15}{56}" />
          </p>
        </div>
      </LessonSection>

      <LessonSection kicker="02 · La division" title="Division des nombres rationnels" tone="light"
        description="Diviser par un nombre non nul, c'est multiplier par son inverse."
      >
        <p className="mb-2 font-semibold text-foreground">1) Inverse d&apos;un nombre rationnel</p>
        <Callout variant="info" title="Définition">
          Deux nombres sont inverses l&apos;un de l&apos;autre si leur produit est égal à 1.
        </Callout>
        <Callout variant="info" title="Propriétés">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Tout nombre <Math tex="x" /> non nul admet un inverse qui est <Math tex="\dfrac{1}{x}" />.
            </li>
            <li>
              L&apos;inverse d&apos;un nombre rationnel <Math tex="\dfrac{a}{b}" /> est <Math tex="\dfrac{b}{a}" />.
            </li>
          </ul>
        </Callout>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <p className="rounded-xl border border-border p-4 text-sm">
            L&apos;inverse de <Math tex="\dfrac{5}{2}" /> est <Math tex="\dfrac{2}{5}" /> car <Math tex="\dfrac{5}{2} \times \dfrac{2}{5} = 1" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            L&apos;inverse de <Math tex="\dfrac{9}{-13}" /> est <Math tex="\dfrac{-13}{9}" /> car <Math tex="\dfrac{9}{-13} \times \dfrac{-13}{9} = 1" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            L&apos;inverse de 5 est <Math tex="\dfrac{1}{5}" /> car <Math tex="5 \times \dfrac{1}{5} = 1" />
          </p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2) Quotient de nombres rationnels</p>
        <FormulaBlock tex="\dfrac{a}{b} \div \dfrac{c}{d} = \dfrac{a}{b} \times \dfrac{d}{c} = \dfrac{a \times d}{b \times c}" />
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="\dfrac{-8}{7} \div \dfrac{5}{-3} = \dfrac{8}{7} \times \dfrac{3}{5} = \dfrac{24}{35}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="\dfrac{4}{9} \div 3 = \dfrac{4}{9} \times \dfrac{1}{3} = \dfrac{4}{27}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="\dfrac{2}{5} \div \dfrac{8}{10} = \dfrac{2}{5} \times \dfrac{10}{8} = \dfrac{1}{2}" />
          </p>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="Série des TD n°4" title="Série d'exercices" tone="muted"
        description="Multiplication et division des nombres rationnels. Clique pour vérifier chaque exercice."
      >
        <ExerciseGroup total={10} celebrationTitle="Bravo, les 10 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le produit et la division des rationnels.">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">×</span>
            Multiplication
          </p>

          <ExerciseCard
            id="1"
            index={1}
            title="Multiplications simples"
            itemsLabel="fraction irréductible"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = \dfrac{3}{7} \times \dfrac{5}{2}" /></Item>
                <Item n="B"><Math tex="B = \dfrac{3}{7} \times \dfrac{4}{5}" /></Item>
                <Item n="C"><Math tex="C = \dfrac{3}{11} \times \dfrac{11}{9}" /></Item>
                <Item n="D"><Math tex="D = \dfrac{18}{4} \times \dfrac{2}{9}" /></Item>
                <Item n="E"><Math tex="E = \dfrac{-15}{20} \times \dfrac{10}{-5}" /></Item>
                <Item n="F"><Math tex="F = \dfrac{18}{35} \times \dfrac{5}{27}" /></Item>
                <Item n="G"><Math tex="G = \dfrac{-33}{34} \times \dfrac{-17}{-22}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{15}{14}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{12}{35}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{1}{3}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{\dfrac{3}{2}}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F = \mathbf{\dfrac{2}{21}}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="G = \mathbf{\dfrac{-3}{4}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Produits de trois facteurs"
            itemsLabel="fraction irréductible"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = \dfrac{3}{7} \times \dfrac{5}{2} \times \dfrac{4}{5}" /></Item>
                <Item n="B"><Math tex="B = \dfrac{3}{2} \times \dfrac{-4}{6} \times \dfrac{9}{5}" /></Item>
                <Item n="C"><Math tex="C = \dfrac{3}{11} \times \dfrac{-11}{9} \times \dfrac{4}{5}" /></Item>
                <Item n="D"><Math tex="D = \dfrac{-18}{4} \times \dfrac{-2}{9} \times \dfrac{4}{-5}" /></Item>
                <Item n="E"><Math tex="E = \dfrac{-15}{-20} \times \dfrac{-10}{5} \times \dfrac{4}{5}" /></Item>
                <Item n="F"><Math tex="F = \dfrac{-2}{-3} \times \dfrac{4}{-5} \times \dfrac{-6}{7}" /></Item>
                <Item n="H"><Math tex="H = \dfrac{-1}{-20} \times \dfrac{-15}{5} \times \dfrac{4}{-3}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{6}{7}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{-9}{5}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{-4}{15}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{\dfrac{-4}{5}}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{\dfrac{-6}{5}}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F = \mathbf{\dfrac{16}{35}}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="H = \mathbf{\dfrac{1}{5}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Produits avec sommes"
            itemsLabel="6 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = \dfrac{1}{2} \times \left(\dfrac{-3}{5} + \dfrac{-1}{2}\right)" /></Item>
                <Item n="B"><Math tex="B = \dfrac{-9}{5} \times \left(\dfrac{-8}{14} + \dfrac{-5}{-9}\right)" /></Item>
                <Item n="C"><Math tex="C = \left(\dfrac{5}{7} - \dfrac{7}{9}\right) \times \left(\dfrac{-1}{8} + \dfrac{5}{12}\right)" /></Item>
                <Item n="D"><Math tex="D = \left(\dfrac{3}{4} - \dfrac{5}{6}\right) \times \left(-3 - \dfrac{3}{18}\right)" /></Item>
                <Item n="E"><Math tex="E = \left(-7{,}2 + \dfrac{3}{2}\right) \times \left(\dfrac{2}{-5} + \dfrac{-13}{15}\right)" /></Item>
                <Item n="F"><Math tex="F = \left(\dfrac{-8}{14} + \dfrac{-15}{42}\right) \times \left(\dfrac{8}{14} + \dfrac{22}{55}\right)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{-11}{20}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{1}{35}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{-1}{54}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{\dfrac{19}{72}}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{\dfrac{361}{50}}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F = \mathbf{\dfrac{-221}{245}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Problème : la pièce de tissu"
            items={
              <p className="text-sm">
                Une pièce de tissu mesure 180 m.
                <br />
                1) On vend le tiers de la pièce. Combien de mètres reste-t-il dans la pièce ?
                <br />
                2) On vend le quart du reste. Combien mesure la pièce restante ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>1)</strong> Métrage vendu : <Math tex="\dfrac{1}{3} \times 180 = 60" /> m. Il reste donc{" "}
                  <Math tex="180 - 60 = \mathbf{120}" /> m dans la pièce.
                </p>
                <p>
                  <strong>2)</strong> On vend <Math tex="\dfrac{1}{4}" /> du reste (120 m) : <Math tex="\dfrac{1}{4} \times 120 = 30" /> m.
                  Il reste donc <Math tex="120 - 30 = \mathbf{90}" /> m de tissu.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Problème : le jardin"
            items={
              <p className="text-sm">
                Le jardin occupe les quatre cinquièmes de la surface d&apos;un terrain. Les deux tiers de la surface du jardin sont réservés aux légumes.
                <br />
                1. Quelle fraction de la surface du terrain les légumes occupent-ils ?
                <br />
                2. L&apos;aire du terrain est de 450 m². Calcule l&apos;aire réservée aux légumes de deux façons différentes.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>1)</strong> Fraction du terrain occupée par les légumes : <Math tex="\dfrac{4}{5} \times \dfrac{2}{3} = \mathbf{\dfrac{8}{15}}" />.
                </p>
                <p>
                  <strong>2) Méthode 1 (directe)</strong> : <Math tex="\dfrac{8}{15} \times 450 = \mathbf{240}" /> m².
                </p>
                <p>
                  <strong>Méthode 2 (en deux étapes)</strong> : aire du jardin = <Math tex="\dfrac{4}{5} \times 450 = 360" /> m² ; aire des
                  légumes = <Math tex="\dfrac{2}{3} \times 360 = \mathbf{240}" /> m².
                </p>
              </div>
            }
          />

          <p className="mt-10 mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">÷</span>
            Division
          </p>

          <ExerciseCard
            id="6"
            index={6}
            title="Compléter les égalités"
            itemsLabel="pour que ce soit vrai"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{3}{7} \div \ldots = 1" /></Item>
                <Item n={2}><Math tex="\dfrac{-4}{3} \div \ldots = 1" /></Item>
                <Item n={3}><Math tex="\dfrac{-13}{34} \div \ldots = 1" /></Item>
                <Item n={4}><Math tex="\dfrac{7}{3} \times \ldots = 1" /></Item>
                <Item n={5}><Math tex="\dfrac{-3}{4} \times \ldots = 1" /></Item>
                <Item n={6}><Math tex="\dfrac{-34}{13} \times \ldots = 1" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{\dfrac{3}{7}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{\dfrac{-4}{3}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{\dfrac{-13}{34}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\dfrac{3}{7}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{\dfrac{-4}{3}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{\dfrac{-13}{34}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Divisions simples"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = \dfrac{3}{7} \div \dfrac{-2}{5}" /></Item>
                <Item n="B"><Math tex="B = \dfrac{-3}{7} \div \dfrac{5}{4}" /></Item>
                <Item n="C"><Math tex="C = \dfrac{3}{-11} \div \dfrac{-9}{11}" /></Item>
                <Item n="D"><Math tex="D = \dfrac{-18}{-4} \div \dfrac{9}{-2}" /></Item>
                <Item n="E"><Math tex="E = \dfrac{-15}{20} \div \dfrac{5}{-10}" /></Item>
                <Item n="F"><Math tex="F = \dfrac{20}{18} \div \dfrac{5}{27}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{-15}{14}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{-12}{35}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{1}{3}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{-1}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{\dfrac{3}{2}}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F = \mathbf{6}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Quotients de quotients"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = \dfrac{\dfrac{4}{9}}{\dfrac{5}{3}}" /></Item>
                <Item n="B"><Math tex="B = \dfrac{\dfrac{17}{8}}{\dfrac{34}{-3}}" /></Item>
                <Item n="C"><Math tex="C = \dfrac{\dfrac{-16}{-12}}{\dfrac{-8}{-6}}" /></Item>
                <Item n="D"><Math tex="D = \dfrac{4{,}5 \div (-1{,}5)}{\dfrac{-3}{5}}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{4}{15}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{-3}{16}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{5}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Fractions de fractions"
            itemsLabel="fraction irréductible"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = \dfrac{2 + \dfrac{17}{8}}{\dfrac{34}{-3}}" /></Item>
                <Item n="B"><Math tex="B = \dfrac{1 + \dfrac{-16}{12}}{\dfrac{-8}{-6}}" /></Item>
                <Item n="C"><Math tex="C = \dfrac{1 - \dfrac{5}{9}}{1 - \dfrac{4}{3}}" /></Item>
                <Item n="D"><Math tex="D = \dfrac{\dfrac{4}{3} + \dfrac{3}{7}}{\dfrac{1}{3} + \dfrac{-5}{21}}" /></Item>
                <Item n="E"><Math tex="E = \dfrac{\dfrac{5}{6} - \dfrac{1}{4}}{-2 + \dfrac{13}{12}}" /></Item>
                <Item n="F"><Math tex="F = \dfrac{-\dfrac{8}{3} - \dfrac{5}{9}}{-1 - \dfrac{4}{3}}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{-99}{272}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{-1}{4}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{-4}{3}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{\dfrac{37}{2}}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{\dfrac{-7}{11}}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F = \mathbf{\dfrac{29}{21}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Calcul littéral"
            items={
              <div>
                <p className="mb-3 text-sm">
                  Sachant que <Math tex="a = \dfrac{1}{4}" /> et <Math tex="b = \dfrac{-2}{3}" />, calculer :
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <Item n={1}><Math tex="\dfrac{a+b}{a}" /></Item>
                  <Item n={2}><Math tex="\dfrac{a \times b}{a - b}" /></Item>
                  <Item n={3}><Math tex="\dfrac{2a - b}{a - 2b}" /></Item>
                </div>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <CorrectionCard n={1}>
                  <Math tex="\dfrac{a+b}{a} = \dfrac{\dfrac{-5}{12}}{\dfrac{1}{4}} = \dfrac{-5}{12} \times 4 = \mathbf{\dfrac{-5}{3}}" />
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\dfrac{a \times b}{a-b} = \dfrac{\dfrac{-1}{6}}{\dfrac{11}{12}} = \dfrac{-1}{6} \times \dfrac{12}{11} = \mathbf{\dfrac{-2}{11}}" />
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="\dfrac{2a-b}{a-2b} = \dfrac{\dfrac{7}{6}}{\dfrac{19}{12}} = \dfrac{7}{6} \times \dfrac{12}{19} = \mathbf{\dfrac{14}{19}}" />
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
