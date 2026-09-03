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
  title: "Addition et Soustraction des Nombres Rationnels · 2AC",
  description:
    "Fiche pédagogique, cours complet (réduction au même dénominateur, addition, soustraction) et exercices corrigés sur l'addition et la soustraction des nombres rationnels, 2ème année collège.",
  kicker: "2ᵉ Année Collège · Chapitre 2",
  heroTitle: "Addition et soustraction des rationnels",
  heroSubtitle:
    "Même dénominateur ou pas, la méthode reste la même. Le cours, plein d'exemples, et une grande série d'exercices corrigés.",
  footerNote: "Addition et soustraction des nombres rationnels · Mathématiques, 2ᵉ année collège, semestre 1.",
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

/** Fiche pédagogique info card. */
function FicheCard({ title, items, tone }: { title: string; items: ReactNode[]; tone: "amber" | "sky" | "rose" | "emerald" }) {
  const tones = {
    amber: "border-orange-500/30 bg-orange-100/60 text-orange-700",
    sky: "border-border bg-surface-muted text-foreground",
    rose: "border-rose-500/30 bg-rose-100/60 text-rose-700",
    emerald: "border-green-500/20 bg-green-100/60 text-green-700",
  } as const;
  return (
    <div className={`rounded-2xl border p-5 sm:p-6 ${tones[tone]}`}>
      <p className="mb-3 text-sm font-bold">{title}</p>
      <ul className="list-disc space-y-1.5 pl-5 text-sm text-foreground">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
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
          { value: "90+", label: "calculs" },
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
            <span>+</span>
            <span className="text-orange-400">−</span>
          </div>
        }
      />

      {/* ===================== FICHE PEDAGOGIQUE ===================== */}
      <LessonSection id="fiche" kicker="Repères" title="Fiche pédagogique" tone="light"
        description="Durée indicative : 6 heures."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FicheCard
            title="Compétences exigibles"
            tone="amber"
            items={[
              "Savoir calculer la somme et la soustraction des nombres rationnels dans des situations simples et complexes.",
              "Savoir utiliser la somme et la soustraction dans des problèmes mathématiques.",
            ]}
          />
          <FicheCard
            title="Orientations pédagogiques"
            tone="sky"
            items={[
              <>La notation <Math tex="\mathbb{Q}" /> (ensemble des nombres rationnels) est hors programme.</>,
              "Se concentrer sur des activités simples et variées.",
              "La somme et la soustraction prolongent les opérations sur les entiers relatifs et les décimaux relatifs.",
            ]}
          />
          <FicheCard
            title="Extensions"
            tone="rose"
            items={["Les nombres réels", "Les équations et les inégalités", "Les problèmes"]}
          />
          <FicheCard
            title="Pré-requis"
            tone="emerald"
            items={[
              "Les nombres décimaux relatifs",
              "Simplification des écritures fractionnaires",
              "La somme et la soustraction des écritures fractionnaires",
            ]}
          />
        </div>
      </LessonSection>

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 · Réduire au même dénominateur" title="Le préalable à tout calcul" tone="light"
        description="Écrire chaque nombre rationnel sous forme de fraction à dénominateurs égaux."
      >
        <div className="rounded-xl border border-border bg-surface-muted p-5">
          <p className="mb-2 text-sm font-semibold text-foreground">
            Exemple : réduire au même dénominateur <Math tex="\dfrac{7}{8}" /> et <Math tex="\dfrac{3}{11}" />
          </p>
          <p className="text-sm text-foreground-muted">Dénominateur commun de 8 et 11 : 88</p>
          <p className="mt-2 text-center text-lg">
            <Math tex="\dfrac{7}{8} = \dfrac{7 \times 11}{8 \times 11} = \dfrac{77}{88} \quad ; \quad \dfrac{3}{11} = \dfrac{3 \times 8}{11 \times 8} = \dfrac{24}{88}" />
          </p>
        </div>
      </LessonSection>

      <LessonSection kicker="02 · L'addition" title="Addition des nombres rationnels" tone="light"
        description="Trois cas à distinguer : même dénominateur, dénominateurs différents, ou l'un multiple de l'autre."
      >
        <p className="mb-2 font-semibold text-foreground">1) Même dénominateur</p>
        <FormulaBlock tex="\dfrac{a}{b} + \dfrac{c}{b} = \dfrac{a+c}{b}" />
        <div className="mt-4 grid grid-cols-1 gap-3 text-center sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4"><Math tex="\dfrac{6}{7} + \dfrac{8}{7} = \dfrac{14}{7} = 2" /></p>
          <p className="rounded-xl border border-border p-4"><Math tex="\dfrac{1{,}3}{9} + \dfrac{1{,}7}{9} = \dfrac{3}{9} = \dfrac{1}{3}" /></p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2) Dénominateurs différents</p>
        <FormulaBlock tex="\dfrac{a}{b} + \dfrac{c}{d} = \dfrac{ad}{bd} + \dfrac{bc}{bd} = \dfrac{ad+bc}{bd}" />
        <div className="mt-4 grid grid-cols-1 gap-3 text-center sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4"><Math tex="\dfrac{5}{6} + \dfrac{3}{4} = \dfrac{10}{12} + \dfrac{9}{12} = \dfrac{19}{12}" /></p>
          <p className="rounded-xl border border-border p-4">
            <Math tex="\dfrac{3}{5} + \left(-\dfrac{4}{3}\right) = \dfrac{9 + (-20)}{15} = \dfrac{-11}{15}" />
          </p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">3) Cas particulier : un dénominateur multiple de l&apos;autre</p>
        <Callout variant="info">
          Quand le dénominateur de l&apos;un est multiple de l&apos;autre, on réduit au plus grand des deux dénominateurs.
        </Callout>
        <p className="mt-4 rounded-xl border border-border p-4 text-center">
          <Math tex="\dfrac{1{,}2}{5} + \dfrac{0{,}7}{10} = \dfrac{2{,}4}{10} + \dfrac{0{,}7}{10} = \dfrac{3{,}1}{10} = \dfrac{31}{100}" />
        </p>

        <div className="mt-8">
          <ExerciseCard
            id="appli-1"
            index={1}
            title="Application : additions"
            itemsLabel="14 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{-11}{25} + \dfrac{15}{5}" /></Item>
                <Item n={2}><Math tex="\dfrac{25}{7} + \left(-\dfrac{6}{35}\right)" /></Item>
                <Item n={3}><Math tex="\dfrac{22}{3} + \left(-\dfrac{2}{-9}\right)" /></Item>
                <Item n={4}><Math tex="\dfrac{2}{-13} + \dfrac{10}{13}" /></Item>
                <Item n={5}><Math tex="\dfrac{324}{42} + \dfrac{26}{7}" /></Item>
                <Item n={6}><Math tex="3{,}5 + \dfrac{5}{2}" /></Item>
                <Item n={7}><Math tex="\dfrac{-9}{13} + \dfrac{6}{26}" /></Item>
                <Item n={8}><Math tex="\dfrac{25}{16} + \dfrac{15}{16}" /></Item>
                <Item n={9}><Math tex="\dfrac{8}{2} + \left(-\dfrac{8}{2}\right)" /></Item>
                <Item n={10}><Math tex="\dfrac{8}{7} + \dfrac{13}{7}" /></Item>
                <Item n={11}><Math tex="\dfrac{2}{11} + \left(-\dfrac{4}{11}\right)" /></Item>
                <Item n={12}><Math tex="\dfrac{1{,}5}{9} + \dfrac{6{,}5}{9}" /></Item>
                <Item n={13}><Math tex="-\dfrac{5}{7} + \dfrac{1}{28}" /></Item>
                <Item n={14}><Math tex="\dfrac{8}{3} + \left(\dfrac{2}{3} + 3\right) + \dfrac{10}{6}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{\dfrac{64}{25}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{\dfrac{17}{5}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{\dfrac{68}{9}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\dfrac{8}{13}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{\dfrac{80}{7}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{6}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\mathbf{\dfrac{-6}{13}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\mathbf{\dfrac{5}{2}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\mathbf{0}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="\mathbf{3}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="\mathbf{\dfrac{-2}{11}}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="\mathbf{\dfrac{8}{9}}" /></CorrectionCard>
                <CorrectionCard n={13}><Math tex="\mathbf{\dfrac{-19}{28}}" /></CorrectionCard>
                <CorrectionCard n={14}><Math tex="\mathbf{8}" /></CorrectionCard>
              </div>
            }
          />
        </div>
      </LessonSection>

      <LessonSection kicker="03 · La soustraction" title="Soustraction des nombres rationnels" tone="light"
        description="Soustraire, c'est ajouter l'opposé. La méthode par dénominateur est la même que pour l'addition."
      >
        <p className="mb-2 font-semibold text-foreground">1) Opposé d&apos;un nombre rationnel</p>
        <Callout variant="info" title="Définition">
          Deux nombres rationnels sont dits opposés lorsque leur somme est égale à zéro.
        </Callout>
        <p className="mt-3 text-sm text-foreground-muted">
          Exemple : l&apos;opposé de <Math tex="\dfrac{1}{2}" /> est <Math tex="\dfrac{-1}{2}" />, donc{" "}
          <Math tex="\dfrac{1}{2} + \dfrac{-1}{2} = 0" />
        </p>

        <p className="mt-8 mb-2 font-semibold text-foreground">2) Même dénominateur</p>
        <FormulaBlock tex="\dfrac{e}{k} - \dfrac{f}{k} = \dfrac{e-f}{k}" />
        <p className="mt-4 rounded-xl border border-border p-4 text-center">
          <Math tex="\dfrac{-11}{5} - \dfrac{4}{5} = \dfrac{-15}{5} = -3" />
        </p>

        <div className="mt-8">
          <ExerciseCard
            id="appli-2"
            index={2}
            title="Application : soustractions (même dénominateur)"
            itemsLabel="15 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{25}{16} - \dfrac{15}{16}" /></Item>
                <Item n={2}><Math tex="-\dfrac{5}{6} - \left(-\dfrac{10}{12}\right)" /></Item>
                <Item n={3}><Math tex="\dfrac{8}{2} - \left(-\dfrac{8}{2}\right)" /></Item>
                <Item n={4}><Math tex="\dfrac{1}{9} - \dfrac{1}{3}" /></Item>
                <Item n={5}><Math tex="\dfrac{5}{7} - \dfrac{-3}{-5}" /></Item>
                <Item n={6}><Math tex="\dfrac{7}{9} - \dfrac{40}{24}" /></Item>
                <Item n={7}><Math tex="\dfrac{-1{,}5}{3} - \dfrac{4{,}5}{5}" /></Item>
                <Item n={8}><Math tex="\dfrac{-1}{25} - \dfrac{15}{5}" /></Item>
                <Item n={9}><Math tex="\dfrac{5}{7} - \left(-\dfrac{6}{5}\right)" /></Item>
                <Item n={10}><Math tex="\dfrac{2}{3} - \left(-\dfrac{2}{-9}\right)" /></Item>
                <Item n={11}><Math tex="\dfrac{2}{-13} - \left(-\dfrac{10}{13}\right)" /></Item>
                <Item n={12}><Math tex="\dfrac{3}{2} - \left(-\dfrac{6}{7}\right)" /></Item>
                <Item n={13}><Math tex="3{,}5 - \dfrac{5}{2}" /></Item>
                <Item n={14}><Math tex="\dfrac{-9}{13} - \dfrac{6}{26}" /></Item>
                <Item n={15}><Math tex="\dfrac{2}{7} - \dfrac{4}{3} - \left(\dfrac{5}{3} + \dfrac{2}{7} - 1\right)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{\dfrac{5}{8}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{0}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{8}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\dfrac{-2}{9}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{\dfrac{4}{35}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{\dfrac{-8}{9}}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\mathbf{\dfrac{-7}{5}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\mathbf{\dfrac{-76}{25}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\mathbf{\dfrac{67}{35}}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="\mathbf{\dfrac{4}{9}}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="\mathbf{\dfrac{8}{13}}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="\mathbf{\dfrac{33}{14}}" /></CorrectionCard>
                <CorrectionCard n={13}><Math tex="\mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={14}><Math tex="\mathbf{\dfrac{-12}{13}}" /></CorrectionCard>
                <CorrectionCard n={15}><Math tex="\mathbf{-2}" /></CorrectionCard>
              </div>
            }
          />
        </div>

        <p className="mt-10 mb-2 font-semibold text-foreground">3) Dénominateurs différents</p>
        <FormulaBlock tex="\dfrac{a}{b} - \dfrac{c}{d} = \dfrac{ad}{bd} + \dfrac{cb}{bd} = \dfrac{ad-cb}{bd}" />
        <div className="mt-4 grid grid-cols-1 gap-3 text-center sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4"><Math tex="\dfrac{8}{12} - \left(-\dfrac{7}{6}\right)" /></p>
          <p className="rounded-xl border border-border p-4">
            <Math tex="0{,}25 - \dfrac{1}{4}" /> · <Math tex="3 - \dfrac{1}{8}" />
          </p>
        </div>
      </LessonSection>

      {/* ===================== EXERCICE N°3 ===================== */}
      <LessonSection id="exercices" kicker="Exercice N°3" title="Somme et différence des nombres rationnels" tone="muted"
        description="Calculer et donner le résultat sous la forme la plus simple possible. Clique pour vérifier."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises l'addition et la soustraction des rationnels.">
          <ExerciseCard
            id="1"
            index={1}
            title="Additions"
            itemsLabel="21 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="-\dfrac{7}{15} + \dfrac{22}{-15}" /></Item>
                <Item n={2}><Math tex="\dfrac{14}{-6} + \dfrac{4}{6}" /></Item>
                <Item n={3}><Math tex="\dfrac{15}{8} + \dfrac{-5}{8}" /></Item>
                <Item n={4}><Math tex="-\dfrac{14}{17} + \dfrac{23}{17}" /></Item>
                <Item n={5}><Math tex="\dfrac{12}{9} + \dfrac{3}{9}" /></Item>
                <Item n={6}><Math tex="\dfrac{7}{11} + \dfrac{15}{11}" /></Item>
                <Item n={7}><Math tex="-\dfrac{9}{6} + \left(-\dfrac{5}{9}\right)" /></Item>
                <Item n={8}><Math tex="\dfrac{6}{8} + \left(-\dfrac{5}{12}\right)" /></Item>
                <Item n={9}><Math tex="-\dfrac{11}{25} + \left(-\dfrac{4}{75}\right)" /></Item>
                <Item n={10}><Math tex="\dfrac{15}{-3} + \dfrac{1}{9}" /></Item>
                <Item n={11}><Math tex="\dfrac{13}{12} + \left(-\dfrac{8}{3}\right)" /></Item>
                <Item n={12}><Math tex="\dfrac{15}{21} + \left(-\dfrac{5}{7}\right)" /></Item>
                <Item n={13}><Math tex="-\dfrac{12}{5} + \dfrac{-8}{-6}" /></Item>
                <Item n={14}><Math tex="-\dfrac{7}{11} + \left(-\dfrac{5}{2}\right)" /></Item>
                <Item n={15}><Math tex="\dfrac{9}{2} + \left(-\dfrac{5}{3}\right)" /></Item>
                <Item n={16}><Math tex="\dfrac{5}{11} + \left(-\dfrac{2}{9}\right)" /></Item>
                <Item n={17}><Math tex="-3{,}5 + \left(-\dfrac{5}{3}\right)" /></Item>
                <Item n={18}><Math tex="\dfrac{5}{8} + 2{,}2" /></Item>
                <Item n={19}><Math tex="-4{,}5 + \left(-\dfrac{1}{2}\right)" /></Item>
                <Item n={20}><Math tex="-\dfrac{5}{7} + (-2{,}5)" /></Item>
                <Item n={21}><Math tex="-5 + \dfrac{11}{7}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{\dfrac{-29}{15}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{\dfrac{-5}{3}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{\dfrac{5}{4}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\dfrac{9}{17}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{\dfrac{5}{3}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{2}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\mathbf{\dfrac{-37}{18}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\mathbf{\dfrac{1}{3}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\mathbf{\dfrac{-37}{75}}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="\mathbf{\dfrac{-44}{9}}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="\mathbf{\dfrac{-19}{12}}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="\mathbf{0}" /></CorrectionCard>
                <CorrectionCard n={13}><Math tex="\mathbf{\dfrac{-16}{15}}" /></CorrectionCard>
                <CorrectionCard n={14}><Math tex="\mathbf{\dfrac{-69}{22}}" /></CorrectionCard>
                <CorrectionCard n={15}><Math tex="\mathbf{\dfrac{17}{6}}" /></CorrectionCard>
                <CorrectionCard n={16}><Math tex="\mathbf{\dfrac{23}{99}}" /></CorrectionCard>
                <CorrectionCard n={17}><Math tex="\mathbf{\dfrac{-31}{6}}" /></CorrectionCard>
                <CorrectionCard n={18}><Math tex="\mathbf{\dfrac{113}{40}}" /></CorrectionCard>
                <CorrectionCard n={19}><Math tex="\mathbf{-5}" /></CorrectionCard>
                <CorrectionCard n={20}><Math tex="\mathbf{\dfrac{-45}{14}}" /></CorrectionCard>
                <CorrectionCard n={21}><Math tex="\mathbf{\dfrac{-24}{7}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Soustractions"
            itemsLabel="24 calculs"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{8}{9} - \left(-\dfrac{1}{9}\right)" /></Item>
                <Item n={2}><Math tex="\dfrac{11}{7} - \dfrac{-5}{-7}" /></Item>
                <Item n={3}><Math tex="\dfrac{-14}{-6} - \dfrac{8}{-6}" /></Item>
                <Item n={4}><Math tex="\dfrac{3}{-5} - \dfrac{12}{5}" /></Item>
                <Item n={5}><Math tex="-\dfrac{5}{11} - \left(-\dfrac{9}{11}\right)" /></Item>
                <Item n={6}><Math tex="\dfrac{2}{7} - \dfrac{11}{7}" /></Item>
                <Item n={7}><Math tex="\dfrac{7}{15} - \dfrac{8}{9}" /></Item>
                <Item n={8}><Math tex="\dfrac{3}{9} - \left(-\dfrac{11}{6}\right)" /></Item>
                <Item n={9}><Math tex="-\dfrac{3}{8} - \left(-\dfrac{5}{6}\right)" /></Item>
                <Item n={10}><Math tex="\dfrac{8}{12} - \left(-\dfrac{5}{6}\right)" /></Item>
                <Item n={11}><Math tex="-\dfrac{13}{7} - \dfrac{5}{14}" /></Item>
                <Item n={12}><Math tex="\dfrac{5}{16} - \dfrac{11}{4}" /></Item>
                <Item n={13}><Math tex="\dfrac{1}{2} - \dfrac{1}{3}" /></Item>
                <Item n={14}><Math tex="\dfrac{-3}{-2} - \dfrac{-7}{-5}" /></Item>
                <Item n={15}><Math tex="-\dfrac{7}{4} - \left(-\dfrac{6}{3}\right)" /></Item>
                <Item n={16}><Math tex="\dfrac{17}{8} - \left(-\dfrac{1}{3}\right)" /></Item>
                <Item n={17}><Math tex="\dfrac{11}{-3} - \dfrac{-8}{-4}" /></Item>
                <Item n={18}><Math tex="-\dfrac{3}{5} - \dfrac{7}{2}" /></Item>
                <Item n={19}><Math tex="0{,}5 - \dfrac{1}{2}" /></Item>
                <Item n={20}><Math tex="5{,}5 - \dfrac{-1}{-2}" /></Item>
                <Item n={21}><Math tex="\dfrac{5}{8} - (-3)" /></Item>
                <Item n={22}><Math tex="-\dfrac{11}{4} - (-1{,}2)" /></Item>
                <Item n={23}><Math tex="5 - \left(-\dfrac{7}{4}\right)" /></Item>
                <Item n={24}><Math tex="-2{,}5 - \dfrac{1}{2}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{\dfrac{6}{7}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{\dfrac{11}{3}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{-3}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{\dfrac{4}{11}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{\dfrac{-9}{7}}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\mathbf{\dfrac{-19}{45}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\mathbf{\dfrac{13}{6}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\mathbf{\dfrac{11}{24}}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="\mathbf{\dfrac{3}{2}}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="\mathbf{\dfrac{-31}{14}}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="\mathbf{\dfrac{-39}{16}}" /></CorrectionCard>
                <CorrectionCard n={13}><Math tex="\mathbf{\dfrac{1}{6}}" /></CorrectionCard>
                <CorrectionCard n={14}><Math tex="\mathbf{\dfrac{1}{10}}" /></CorrectionCard>
                <CorrectionCard n={15}><Math tex="\mathbf{\dfrac{1}{4}}" /></CorrectionCard>
                <CorrectionCard n={16}><Math tex="\mathbf{\dfrac{59}{24}}" /></CorrectionCard>
                <CorrectionCard n={17}><Math tex="\mathbf{\dfrac{-17}{3}}" /></CorrectionCard>
                <CorrectionCard n={18}><Math tex="\mathbf{\dfrac{-41}{10}}" /></CorrectionCard>
                <CorrectionCard n={19}><Math tex="\mathbf{0}" /></CorrectionCard>
                <CorrectionCard n={20}><Math tex="\mathbf{5}" /></CorrectionCard>
                <CorrectionCard n={21}><Math tex="\mathbf{\dfrac{29}{8}}" /></CorrectionCard>
                <CorrectionCard n={22}><Math tex="\mathbf{\dfrac{-31}{20}}" /></CorrectionCard>
                <CorrectionCard n={23}><Math tex="\mathbf{\dfrac{27}{4}}" /></CorrectionCard>
                <CorrectionCard n={24}><Math tex="\mathbf{-3}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Sommes à trois termes"
            itemsLabel="4 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A"><Math tex="A = \dfrac{1}{2} + \dfrac{5}{2} + \left(-\dfrac{9}{2}\right)" /></Item>
                <Item n="B"><Math tex="B = \dfrac{4}{3} + \left(-\dfrac{5}{6}\right) + \dfrac{2}{3}" /></Item>
                <Item n="C"><Math tex="C = -\dfrac{5}{8} + \left(-\dfrac{7}{4}\right) + \dfrac{3}{2}" /></Item>
                <Item n="D"><Math tex="D = \dfrac{-5}{7} + \dfrac{3}{-7} + \dfrac{-1}{-7}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{-3}{2}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{7}{6}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{-7}{8}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{-1}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Nombres décimaux et fractions"
            itemsLabel="7 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = \dfrac{1}{2} + 5 - \dfrac{3}{4}" /></Item>
                <Item n="B"><Math tex="B = -\dfrac{3}{5} - 2 + \dfrac{1}{5}" /></Item>
                <Item n="C"><Math tex="C = -2{,}5 + \left(-\dfrac{2}{5}\right) - \dfrac{1}{2}" /></Item>
                <Item n="D"><Math tex="D = 1 + \left(-\dfrac{4}{3}\right) - \dfrac{7}{2}" /></Item>
                <Item n="E"><Math tex="E = 1 + \left(-\dfrac{1}{2}\right) + \dfrac{1}{3} + \left(-\dfrac{1}{4}\right)" /></Item>
                <Item n="F"><Math tex="F = -0{,}25 + \dfrac{1}{50} + \left(-\dfrac{2}{5}\right)" /></Item>
                <Item n="G"><Math tex="G = \dfrac{-2}{-7} + \dfrac{-4}{-3} + \left(-\dfrac{1}{9}\right)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{19}{4}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{-12}{5}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{-17}{5}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{\dfrac{-23}{6}}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{\dfrac{7}{12}}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F = \mathbf{\dfrac{-63}{100}}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="G = \mathbf{\dfrac{95}{63}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Expressions avec parenthèses"
            itemsLabel="5 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A"><Math tex="A = \dfrac{1}{2} - \left(\dfrac{3}{4} + \dfrac{5}{2}\right)" /></Item>
                <Item n="B"><Math tex="B = \left(-\dfrac{2}{5} + 1\right) - 1{,}5" /></Item>
                <Item n="C"><Math tex="C = \left(-\dfrac{9}{7} + 2\right) + \left(1 - \dfrac{3}{7}\right)" /></Item>
                <Item n="D"><Math tex="D = 0{,}5 + \left(-\dfrac{1}{2} + 3\right) - \dfrac{1}{2}" /></Item>
                <Item n="E"><Math tex="E = \left(\dfrac{2}{3} - 1\right) + \left(2 + \dfrac{3}{2}\right) - \left(\dfrac{1}{2} + \dfrac{1}{3}\right)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{-11}{4}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{-9}{10}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{\dfrac{9}{7}}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{\dfrac{5}{2}}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{\dfrac{7}{3}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Expressions avec crochets"
            itemsLabel="4 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A">
                  <Math tex="A = \left(-\dfrac{1}{2} - \dfrac{1}{3}\right) + \left(1 - \dfrac{5}{3}\right) + \left(\dfrac{1}{2} + 1\right)" />
                </Item>
                <Item n="B">
                  <Math tex="B = 4 - \left[\left(1 - \dfrac{2}{3}\right) - \left(\dfrac{5}{2} + 1 - \dfrac{6}{3}\right)\right] - \left(\dfrac{1}{3} + \dfrac{20}{5}\right)" />
                </Item>
                <Item n="C">
                  <Math tex="C = \left(\dfrac{2}{3} + \dfrac{5}{2}\right) - \left(\dfrac{4}{6} - \dfrac{1}{2}\right) - 3" />
                </Item>
                <Item n="D">
                  <Math tex="D = 2 - \left[\left(1 - \dfrac{5}{3}\right) - \left(\dfrac{2}{5} + 1 - \dfrac{8}{3}\right)\right] - \left(\dfrac{1}{2} + \dfrac{18}{6}\right)" />
                </Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="A = \mathbf{0}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{5}{6}}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{0}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{\dfrac{-21}{10}}" /></CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
