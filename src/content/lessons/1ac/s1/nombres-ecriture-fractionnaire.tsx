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
  title: "Nombres en écriture fractionnaire · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur les nombres en écriture fractionnaire : définitions, égalité de deux quotients, simplification, réduction au même dénominateur, 4 règles de comparaison, et 18 exercices corrigés, 1ère année collège.",
  kicker: "1ʳᵉ Année Collège · Chapitre 3",
  heroTitle: "Nombres en écriture fractionnaire",
  heroSubtitle:
    "Écriture fractionnaire, fraction, simplification, réduction au même dénominateur et comparaison : toutes les règles du cours, avec 18 exercices corrigés.",
  footerNote: "Nombres en écriture fractionnaire · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "section-1", label: "I. Écriture" },
    { id: "section-2", label: "II. Égalité" },
    { id: "section-3", label: "III. Simplifier" },
    { id: "section-4", label: "IV. Dénominateur" },
    { id: "section-5", label: "V. Comparer" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Small numbered/lettered pill used inside item grids. */
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

/** A standalone fraction, shown as a small chip (used in the course examples). */
function FracChip({ tex }: { tex: string }) {
  return (
    <span className="rounded-lg border border-border px-3 py-1.5 text-base">
      <Math tex={tex} />
    </span>
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
          { value: "5", label: "parties de cours" },
          { value: "4", label: "règles de comparaison" },
          { value: "18", label: "exercices corrigés" },
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
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Faire les exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center font-serif text-white italic">
            <span className="border-b-4 border-orange-400 px-4 text-6xl leading-tight font-bold sm:text-7xl">a</span>
            <span className="px-4 text-6xl leading-tight font-bold sm:text-7xl">b</span>
          </div>
        }
      />

      {/* ===================== I. ÉCRITURE FRACTIONNAIRE ET FRACTION ===================== */}
      <LessonSection
        id="section-1"
        kicker="01 · Les définitions"
        title="Écriture fractionnaire et fraction"
        tone="light"
        description="Deux mots proches, une différence importante : les nombres, entiers ou pas."
      >
        <p className="mb-2 font-semibold text-foreground">1. Écriture fractionnaire</p>
        <Callout variant="info" title="Définition et vocabulaire">
          L&apos;écriture fractionnaire, c&apos;est le quotient d&apos;un nombre décimal <Math tex="a" /> par un nombre
          décimal non nul <Math tex="b" />, notée <Math tex="\dfrac{a}{b}" />. <Math tex="a" /> est le{" "}
          <strong>numérateur</strong>, <Math tex="b" /> est le <strong>dénominateur</strong>.
        </Callout>
        <p className="mt-4 mb-2 font-mono text-xs text-foreground-muted uppercase">Exemples d&apos;écritures fractionnaires</p>
        <div className="flex flex-wrap gap-3">
          <FracChip tex="\dfrac{2{,}5}{4}" />
          <FracChip tex="\dfrac{11}{3{,}7}" />
          <FracChip tex="\dfrac{0{,}12}{5{,}4}" />
          <FracChip tex="\dfrac{11}{27}" />
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2. Fraction</p>
        <Callout variant="info" title="Définition et vocabulaire">
          Une fraction, c&apos;est le quotient d&apos;un nombre <strong>entier</strong> <Math tex="a" /> par un nombre{" "}
          <strong>entier</strong> non nul <Math tex="b" />, notée <Math tex="\dfrac{a}{b}" />. <Math tex="a" /> est le{" "}
          <strong>numérateur</strong>, <Math tex="b" /> est le <strong>dénominateur</strong>.
        </Callout>
        <p className="mt-4 mb-2 font-mono text-xs text-foreground-muted uppercase">Exemples de fractions</p>
        <div className="flex flex-wrap gap-3">
          <FracChip tex="\dfrac{21}{4}" />
          <FracChip tex="\dfrac{31}{7}" />
          <FracChip tex="\dfrac{12}{54}" />
          <FracChip tex="\dfrac{11}{27}" />
        </div>

        <p className="mt-8 mb-3 font-semibold text-foreground">Remarques importantes</p>
        <div className="grid gap-3">
          <div className="flex gap-3 rounded-xl border border-border p-4 text-sm">
            <Pill>1</Pill>
            <p>
              <strong>Toute fraction est une écriture fractionnaire.</strong> Exemple : <Math tex="\dfrac{2}{5}" /> est
              à la fois une fraction <em>et</em> une écriture fractionnaire.
            </p>
          </div>
          <div className="flex gap-3 rounded-xl border border-border p-4 text-sm">
            <Pill>2</Pill>
            <p>
              <strong>Une écriture fractionnaire n&apos;est pas toujours une fraction.</strong> Exemple :{" "}
              <Math tex="\dfrac{2{,}5}{7}" /> est une écriture fractionnaire mais pas une fraction (2,5 n&apos;est pas
              un entier).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border p-4 text-sm">
            <Pill>3</Pill>
            <p>
              <strong>Un quotient peut être une fraction, une écriture fractionnaire, ou les deux à la fois.</strong>{" "}
              Exemples : <Math tex="\dfrac{2}{9}" />, <Math tex="\dfrac{2{,}5}{3{,}7}" />, <Math tex="\dfrac{1}{2{,}5}" />
              , <Math tex="\dfrac{3{,}8}{7}" />.
            </p>
          </div>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">3. Transformer une écriture fractionnaire en fraction</p>
        <Callout variant="warning" title="Règle">
          On multiplie le numérateur et le dénominateur par <strong>10, 100, 1000…</strong> (selon le nombre de
          chiffres après la virgule) jusqu&apos;à obtenir des nombres entiers.
        </Callout>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{2{,}5}{5} = \dfrac{2{,}5\times10}{5\times10} = \dfrac{25}{50}" /></p>
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{7}{0{,}02} = \dfrac{7\times100}{0{,}02\times100} = \dfrac{700}{2}" /></p>
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{3{,}12}{1{,}5} = \dfrac{3{,}12\times100}{1{,}5\times100} = \dfrac{312}{150}" /></p>
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{3{,}12}{0{,}453} = \dfrac{3{,}12\times1000}{0{,}453\times1000} = \dfrac{3120}{453}" /></p>
        </div>
      </LessonSection>

      {/* ===================== II. ÉGALITÉ DE DEUX QUOTIENTS ===================== */}
      <LessonSection
        id="section-2"
        kicker="02 · Multiplier ou diviser"
        title="Égalité de deux quotients"
        tone="muted"
        description="On peut changer l'écriture d'un quotient sans changer sa valeur."
      >
        <Callout variant="warning" title="Règle">
          Un quotient <Math tex="\dfrac{a}{b}" /> (avec <Math tex="b \neq 0" />) ne change pas si l&apos;on multiplie ou
          si l&apos;on divise son numérateur <strong>et</strong> son dénominateur par un même nombre <Math tex="k" />{" "}
          non nul.
        </Callout>
        <FormulaBlock tex="\dfrac{a}{b} = \dfrac{a\times k}{b\times k} \qquad \dfrac{a}{b} = \dfrac{a\div k}{b\div k}" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{11}{3} = \dfrac{11\times5}{3\times5} = \dfrac{55}{15}" /></p>
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{24}{27} = \dfrac{24\div3}{27\div3} = \dfrac{8}{9}" /></p>
        </div>
      </LessonSection>

      {/* ===================== III. SIMPLIFICATION ===================== */}
      <LessonSection
        id="section-3"
        kicker="03 · Diviser par le PGDC"
        title="Simplification d'une fraction"
        tone="light"
        description="On rend une fraction plus simple sans changer sa valeur."
      >
        <Callout variant="warning" title="Règle">
          Pour simplifier une fraction, on divise son numérateur et son dénominateur par leur{" "}
          <strong>plus grand diviseur commun</strong> (PGDC).
        </Callout>
        <div className="mt-4 grid gap-3 text-center sm:grid-cols-3">
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{15}{20} = \dfrac{15\div5}{20\div5} = \dfrac{3}{4}" /></p>
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{75}{50} = \dfrac{75\div25}{50\div25} = \dfrac{3}{2}" /></p>
          <p className="rounded-lg border border-border p-4 text-base"><Math tex="\dfrac{2{,}5}{10} = \dfrac{25}{100} = \dfrac{1}{4}" /></p>
        </div>
      </LessonSection>

      {/* ===================== IV. RÉDUIRE AU MÊME DÉNOMINATEUR ===================== */}
      <LessonSection
        id="section-4"
        kicker="04 · Chercher le PPMC"
        title="Réduire au même dénominateur"
        tone="muted"
        description="On cherche le plus petit multiple commun (PPMC) des dénominateurs."
      >
        <Callout variant="warning" title="Règle">
          Pour réduire des fractions au même dénominateur, on cherche le <strong>plus petit multiple commun</strong>{" "}
          (PPMC) de leurs dénominateurs.
        </Callout>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="text-foreground-muted">
              Réduisons <Math tex="\dfrac{3}{8}" /> et <Math tex="\dfrac{11}{12}" /> <span className="text-xs">(PPMC(8,12) = 24)</span>
            </p>
            <div className="mt-2 space-y-1 text-base">
              <p><Math tex="\dfrac{3}{8} = \dfrac{3\times3}{8\times3} = \dfrac{9}{24}" /></p>
              <p><Math tex="\dfrac{11}{12} = \dfrac{11\times2}{12\times2} = \dfrac{22}{24}" /></p>
            </div>
          </div>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="text-foreground-muted">
              Réduisons <Math tex="\dfrac{7}{8}" /> et <Math tex="\dfrac{13}{4}" /> <span className="text-xs">(8 multiple de 4)</span>
            </p>
            <div className="mt-2 space-y-1 text-base">
              <p><Math tex="\dfrac{7}{8} = \dfrac{7}{8}" /></p>
              <p><Math tex="\dfrac{13}{4} = \dfrac{13\times2}{4\times2} = \dfrac{26}{8}" /></p>
            </div>
          </div>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="text-foreground-muted">
              Réduisons <Math tex="\dfrac{7}{5}" />, <Math tex="\dfrac{13}{15}" /> et <Math tex="\dfrac{5}{9}" />{" "}
              <span className="text-xs">(PPMC(5,15,9) = 45)</span>
            </p>
            <div className="mt-2 space-y-1 text-base">
              <p><Math tex="\dfrac{7}{5} = \dfrac{7\times9}{5\times9} = \dfrac{63}{45}" /></p>
              <p><Math tex="\dfrac{13}{15} = \dfrac{13\times3}{15\times3} = \dfrac{39}{45}" /></p>
              <p><Math tex="\dfrac{5}{9} = \dfrac{5\times5}{9\times5} = \dfrac{25}{45}" /></p>
            </div>
          </div>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="text-foreground-muted">
              Réduisons <Math tex="\dfrac{3}{27}" />, <Math tex="\dfrac{1}{3}" /> et <Math tex="\dfrac{7}{9}" />{" "}
              <span className="text-xs">(27 multiple de 3 et de 9)</span>
            </p>
            <div className="mt-2 space-y-1 text-base">
              <p><Math tex="\dfrac{3}{27} = \dfrac{3}{27}" /></p>
              <p><Math tex="\dfrac{1}{3} = \dfrac{1\times9}{3\times9} = \dfrac{9}{27}" /></p>
              <p><Math tex="\dfrac{7}{9} = \dfrac{7\times3}{9\times3} = \dfrac{21}{27}" /></p>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== V. COMPARER ===================== */}
      <LessonSection
        id="section-5"
        kicker="05 · Les 4 règles"
        title="Comparer deux nombres en écriture fractionnaire"
        tone="light"
        description="Quatre situations, quatre réflexes."
      >
        <p className="mb-2 font-semibold text-foreground">1. Même dénominateur</p>
        <Callout variant="warning" title="Règle 1">
          Soient <Math tex="\dfrac{a}{b}" /> et <Math tex="\dfrac{c}{b}" /> deux nombres en écriture fractionnaire (
          <Math tex="b \neq 0" />) : si <Math tex="a>c" /> alors <Math tex="\dfrac{a}{b}>\dfrac{c}{b}" />, si{" "}
          <Math tex="a<c" /> alors <Math tex="\dfrac{a}{b}<\dfrac{c}{b}" />.
        </Callout>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{11}{7} < \dfrac{13}{7}" /> <span className="text-foreground-muted">car 11 &lt; 13</span></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{17}{5} > \dfrac{9}{5}" /> <span className="text-foreground-muted">car 17 &gt; 9</span></p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2. Même numérateur</p>
        <Callout variant="warning" title="Règle 2">
          Soient <Math tex="\dfrac{a}{b}" /> et <Math tex="\dfrac{a}{c}" /> (<Math tex="b \neq 0" />,{" "}
          <Math tex="c \neq 0" />) : si <Math tex="b>c" /> alors <Math tex="\dfrac{a}{b}<\dfrac{a}{c}" />, si{" "}
          <Math tex="b<c" /> alors <Math tex="\dfrac{a}{b}>\dfrac{a}{c}" />.
        </Callout>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{11}{10} < \dfrac{11}{9}" /> <span className="text-foreground-muted">car 10 &gt; 9</span></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{7}{15} > \dfrac{7}{29}" /> <span className="text-foreground-muted">car 15 &lt; 29</span></p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">3. Ni même dénominateur, ni même numérateur</p>
        <Callout variant="warning" title="Règle 3">
          On réduit d&apos;abord au même dénominateur, puis on applique la <strong>Règle 1</strong>.
        </Callout>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 text-sm">
          <div className="rounded-xl border border-border p-4">
            <p className="text-foreground-muted">Comparons <Math tex="\dfrac{11}{5}" /> et <Math tex="\dfrac{7}{10}" /> :</p>
            <p className="mt-2 text-base"><Math tex="\dfrac{11}{5} = \dfrac{11\times2}{5\times2} = \dfrac{22}{10}" /></p>
            <p className="mt-2">Donc <Math tex="\dfrac{22}{10} > \dfrac{7}{10}" />, d&apos;où <strong className="text-foreground"><Math tex="\dfrac{11}{5} > \dfrac{7}{10}" /></strong>.</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-foreground-muted">Comparons <Math tex="\dfrac{13}{7}" /> et <Math tex="\dfrac{17}{5}" /> :</p>
            <p className="mt-2 text-base"><Math tex="\dfrac{13}{7} = \dfrac{65}{35}" />, <Math tex="\dfrac{17}{5} = \dfrac{119}{35}" /></p>
            <p className="mt-2">Donc <Math tex="\dfrac{65}{35} < \dfrac{119}{35}" />, d&apos;où <strong className="text-foreground"><Math tex="\dfrac{13}{7} < \dfrac{17}{5}" /></strong>.</p>
          </div>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">4. Comparer à 1</p>
        <Callout variant="warning" title="Règle 4">
          Soit <Math tex="\dfrac{a}{b}" /> (<Math tex="b \neq 0" />) : si <Math tex="a>b" /> alors{" "}
          <Math tex="\dfrac{a}{b}>1" />, si <Math tex="a<b" /> alors <Math tex="\dfrac{a}{b}<1" />.
        </Callout>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{17}{9} > 1" /> <span className="text-foreground-muted">car 17 &gt; 9</span></p>
          <p className="rounded-lg border border-border p-4"><Math tex="\dfrac{7}{19} < 1" /> <span className="text-foreground-muted">car 7 &lt; 19</span></p>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="18 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={18} celebrationTitle="Bravo, les 18 exercices sont vérifiés !" celebrationSubtitle="Tu sais comparer des nombres en écriture fractionnaire.">
          <ExerciseCard
            id="1"
            index={1}
            title="Range chaque quotient : inférieur, égal ou supérieur à 1"
            itemsLabel="9 quotients"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{28}{13}" /></Item>
                <Item n={2}><Math tex="\dfrac{12{,}9}{12{,}9}" /></Item>
                <Item n={3}><Math tex="\dfrac{285698}{286598}" /></Item>
                <Item n={4}><Math tex="\dfrac{1287}{128}" /></Item>
                <Item n={5}><Math tex="\dfrac{0{,}03}{0{,}3}" /></Item>
                <Item n={6}><Math tex="\dfrac{90{,}02}{90{,}20}" /></Item>
                <Item n={7}><Math tex="\dfrac{2{,}8}{1}" /></Item>
                <Item n={8}><Math tex="\dfrac{3{,}2}{32}" /></Item>
                <Item n={9}><Math tex="\dfrac{8}{1}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\dfrac{28}{13} > \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\dfrac{12{,}9}{12{,}9} = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\dfrac{285698}{286598} < \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\dfrac{1287}{128} > \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\dfrac{0{,}03}{0{,}3} < \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\dfrac{90{,}02}{90{,}20} < \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\dfrac{2{,}8}{1} > \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\dfrac{3{,}2}{32} < \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\dfrac{8}{1} > \mathbf{1}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Comparer A et B à 1, puis les comparer entre eux"
            itemsLabel="2 étapes"
            items={
              <div className="rounded-xl border border-border p-5 text-sm">
                <p>
                  On compare les deux fractions <Math tex="A = \dfrac{128}{157}" /> et <Math tex="B = \dfrac{172}{113}" />.
                </p>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Compare A et B à 1.</li>
                  <li>Déduis-en une comparaison entre A et B.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="a">128 &lt; 157 donc <Math tex="A < 1" />. 172 &gt; 113 donc <Math tex="B > 1" />.</CorrectionCard>
                <CorrectionCard n="b">Comme <Math tex="A < 1 < B" />, on déduit que <Math tex="\mathbf{A < B}" />.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Compare sans calculatrice"
            itemsLabel="8 paires"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{154}{125} \ \dots\ \dfrac{158}{189}" /></Item>
                <Item n="e"><Math tex="\dfrac{51{,}54}{60} \ \dots\ \dfrac{60}{51{,}54}" /></Item>
                <Item n="b"><Math tex="\dfrac{678}{987} \ \dots\ \dfrac{998}{679}" /></Item>
                <Item n="f"><Math tex="\dfrac{5{,}89}{5{,}98} \ \dots\ \dfrac{3{,}52}{3{,}25}" /></Item>
                <Item n="c"><Math tex="\dfrac{4}{3} \ \dots\ \dfrac{3}{4}" /></Item>
                <Item n="g"><Math tex="\dfrac{3{,}2}{13} \ \dots\ \dfrac{32}{13}" /></Item>
                <Item n="d"><Math tex="6 \ \dots\ \dfrac{1}{6}" /></Item>
                <Item n="h"><Math tex="\dfrac{1{,}01}{1{,}010} \ \dots\ \dfrac{1{,}001}{1{,}010}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a"><Math tex="\dfrac{154}{125} > \dfrac{158}{189}" /> <span className="text-xs text-foreground-muted">154&gt;125 → &gt;1 ; 158&lt;189 → &lt;1</span></CorrectionCard>
                <CorrectionCard n="e"><Math tex="\dfrac{51{,}54}{60} < \dfrac{60}{51{,}54}" /> <span className="text-xs text-foreground-muted">le premier &lt;1, le second &gt;1</span></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{678}{987} < \dfrac{998}{679}" /> <span className="text-xs text-foreground-muted">le premier &lt;1, le second &gt;1</span></CorrectionCard>
                <CorrectionCard n="f"><Math tex="\dfrac{5{,}89}{5{,}98} < \dfrac{3{,}52}{3{,}25}" /> <span className="text-xs text-foreground-muted">le premier &lt;1, le second &gt;1</span></CorrectionCard>
                <CorrectionCard n="c"><Math tex="\dfrac{4}{3} > \dfrac{3}{4}" /> <span className="text-xs text-foreground-muted">Règle 4</span></CorrectionCard>
                <CorrectionCard n="g"><Math tex="\dfrac{3{,}2}{13} < \dfrac{32}{13}" /> <span className="text-xs text-foreground-muted">même dénominateur, Règle 1</span></CorrectionCard>
                <CorrectionCard n="d"><Math tex="6 > \dfrac{1}{6}" /> <span className="text-xs text-foreground-muted">6&gt;1 et 1/6&lt;1</span></CorrectionCard>
                <CorrectionCard n="h"><Math tex="\dfrac{1{,}01}{1{,}010} > \dfrac{1{,}001}{1{,}010}" /> <span className="text-xs text-foreground-muted">même dénominateur, Règle 1</span></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Compare (même dénominateur → Règle 1)"
            itemsLabel="10 paires"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{2}{3} \ \dots\ \dfrac{4}{3}" /></Item>
                <Item n="f"><Math tex="\dfrac{3{,}2}{13} \ \dots\ \dfrac{3{,}02}{13}" /></Item>
                <Item n="b"><Math tex="\dfrac{7}{5} \ \dots\ \dfrac{8}{5}" /></Item>
                <Item n="g"><Math tex="\dfrac{0{,}3}{47} \ \dots\ \dfrac{0{,}31}{47}" /></Item>
                <Item n="c"><Math tex="\dfrac{45}{16} \ \dots\ \dfrac{54}{16}" /></Item>
                <Item n="h"><Math tex="\dfrac{0{,}7}{12} \ \dots\ \dfrac{0{,}08}{12}" /></Item>
                <Item n="d"><Math tex="\dfrac{28}{1} \ \dots\ \dfrac{0{,}5}{1}" /></Item>
                <Item n="i"><Math tex="\dfrac{1{,}82}{12} \ \dots\ \dfrac{1{,}802}{12}" /></Item>
                <Item n="e"><Math tex="\dfrac{29}{29} \ \dots\ \dfrac{28{,}99}{29}" /></Item>
                <Item n="j"><Math tex="\dfrac{0{,}02}{0{,}07} \ \dots\ \dfrac{0{,}2}{0{,}07}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a"><Math tex="\dfrac{2}{3} < \dfrac{4}{3}" /></CorrectionCard>
                <CorrectionCard n="f"><Math tex="\dfrac{3{,}2}{13} > \dfrac{3{,}02}{13}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{7}{5} < \dfrac{8}{5}" /></CorrectionCard>
                <CorrectionCard n="g"><Math tex="\dfrac{0{,}3}{47} < \dfrac{0{,}31}{47}" /></CorrectionCard>
                <CorrectionCard n="c"><Math tex="\dfrac{45}{16} < \dfrac{54}{16}" /></CorrectionCard>
                <CorrectionCard n="h"><Math tex="\dfrac{0{,}7}{12} > \dfrac{0{,}08}{12}" /></CorrectionCard>
                <CorrectionCard n="d"><Math tex="\dfrac{28}{1} > \dfrac{0{,}5}{1}" /></CorrectionCard>
                <CorrectionCard n="i"><Math tex="\dfrac{1{,}82}{12} > \dfrac{1{,}802}{12}" /></CorrectionCard>
                <CorrectionCard n="e"><Math tex="\dfrac{29}{29} > \dfrac{28{,}99}{29}" /></CorrectionCard>
                <CorrectionCard n="j"><Math tex="\dfrac{0{,}02}{0{,}07} < \dfrac{0{,}2}{0{,}07}" /></CorrectionCard>
                <p className="text-xs text-foreground-muted sm:col-span-2">Même dénominateur partout : on compare directement les numérateurs (Règle 1).</p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Points sur un axe gradué"
            itemsLabel="1 question"
            items={
              <div className="rounded-xl border border-border p-5 text-sm">
                <ol className="list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>
                    Place les points A, B, C, D et E d&apos;abscisses respectives <Math tex="\dfrac{12}{9}" />,{" "}
                    <Math tex="\dfrac{5}{9}" />, <Math tex="\dfrac{15}{9}" />, <Math tex="\dfrac{1}{9}" /> et{" "}
                    <Math tex="\dfrac{8}{9}" />.
                  </li>
                  <li>Range ces fractions dans l&apos;ordre croissant.</li>
                </ol>
              </div>
            }
            correction={
              <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                <div className="w-full overflow-x-auto">
                  <svg viewBox="0 0 600 130" className="mx-auto h-32 w-full max-w-xl text-foreground-muted">
                    <line x1="30" y1="70" x2="590" y2="70" stroke="currentColor" strokeWidth="2" />
                    <polygon points="590,70 578,64 578,76" fill="currentColor" />
                    <line x1="30" y1="62" x2="30" y2="78" stroke="currentColor" strokeWidth="2" />
                    <text x="30" y="98" textAnchor="middle" fontSize="14" fill="currentColor">0</text>
                    <line x1="280" y1="62" x2="280" y2="78" stroke="currentColor" strokeWidth="2" />
                    <text x="280" y="98" textAnchor="middle" fontSize="14" fill="currentColor">1</text>
                    <line x1="530" y1="62" x2="530" y2="78" stroke="currentColor" strokeWidth="2" />
                    <text x="530" y="98" textAnchor="middle" fontSize="14" fill="currentColor">2</text>

                    <circle cx="58" cy="70" r="5" className="fill-rose-600" />
                    <text x="58" y="52" textAnchor="middle" fontSize="13" fontWeight="700" className="fill-rose-600">D</text>
                    <text x="58" y="118" textAnchor="middle" fontSize="11" fill="currentColor">1/9</text>

                    <circle cx="169" cy="70" r="5" className="fill-rose-600" />
                    <text x="169" y="52" textAnchor="middle" fontSize="13" fontWeight="700" className="fill-rose-600">B</text>
                    <text x="169" y="118" textAnchor="middle" fontSize="11" fill="currentColor">5/9</text>

                    <circle cx="252" cy="70" r="5" className="fill-rose-600" />
                    <text x="252" y="42" textAnchor="middle" fontSize="13" fontWeight="700" className="fill-rose-600">E</text>
                    <text x="252" y="118" textAnchor="middle" fontSize="11" fill="currentColor">8/9</text>

                    <circle cx="363" cy="70" r="5" fill="currentColor" />
                    <text x="363" y="52" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">A</text>
                    <text x="363" y="118" textAnchor="middle" fontSize="11" fill="currentColor">12/9</text>

                    <circle cx="447" cy="70" r="5" fill="currentColor" />
                    <text x="447" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">C</text>
                    <text x="447" y="118" textAnchor="middle" fontSize="11" fill="currentColor">15/9</text>
                  </svg>
                </div>
                <p className="mt-3 text-sm">Même dénominateur (9) : on classe par numérateur (Règle 1).</p>
                <p className="mt-1 text-center text-lg font-bold text-green-700">D &lt; B &lt; E &lt; A &lt; C</p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Range dans l'ordre croissant"
            itemsLabel="2 séries"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{5}{13} ; \dfrac{7}{13} ; \dfrac{3}{13} ; \dfrac{14}{13} ; \dfrac{12}{13}" /></Item>
                <Item n="b"><Math tex="\dfrac{1{,}2}{13} ; \dfrac{4{,}5}{13} ; \dfrac{1{,}7}{13} ; \dfrac{4{,}52}{13} ; \dfrac{4}{13}" /></Item>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a"><Math tex="\dfrac{3}{13} < \dfrac{5}{13} < \dfrac{7}{13} < \dfrac{12}{13} < \dfrac{14}{13}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{1{,}2}{13} < \dfrac{1{,}7}{13} < \dfrac{4}{13} < \dfrac{4{,}5}{13} < \dfrac{4{,}52}{13}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Range dans l'ordre décroissant"
            itemsLabel="2 séries"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{7}{15} ; \dfrac{17}{15} ; \dfrac{2}{15} ; \dfrac{37}{15} ; \dfrac{12}{15}" /></Item>
                <Item n="b"><Math tex="\dfrac{3{,}8}{15} ; \dfrac{17{,}1}{15} ; \dfrac{17{,}02}{15} ; \dfrac{3{,}07}{15} ; \dfrac{17{,}002}{15}" /></Item>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a"><Math tex="\dfrac{37}{15} > \dfrac{17}{15} > \dfrac{12}{15} > \dfrac{7}{15} > \dfrac{2}{15}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{17{,}1}{15} > \dfrac{17{,}02}{15} > \dfrac{17{,}002}{15} > \dfrac{3{,}8}{15} > \dfrac{3{,}07}{15}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Compare en réduisant au même dénominateur"
            itemsLabel="4 paires"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{2}{3} \text{ et } \dfrac{9}{12}" /></Item>
                <Item n="b"><Math tex="\dfrac{4}{25} \text{ et } \dfrac{1}{5}" /></Item>
                <Item n="c"><Math tex="\dfrac{6}{9} \text{ et } \dfrac{24{,}2}{36}" /></Item>
                <Item n="d"><Math tex="\dfrac{19}{7} \text{ et } 3" /></Item>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a"><Math tex="\dfrac{2}{3}=\dfrac{8}{12} < \dfrac{9}{12}" />, donc <Math tex="\mathbf{\dfrac{2}{3} < \dfrac{9}{12}}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{1}{5}=\dfrac{5}{25} > \dfrac{4}{25}" />, donc <Math tex="\mathbf{\dfrac{4}{25} < \dfrac{1}{5}}" /></CorrectionCard>
                <CorrectionCard n="c"><Math tex="\dfrac{6}{9}=\dfrac{24}{36} < \dfrac{24{,}2}{36}" />, donc <Math tex="\mathbf{\dfrac{6}{9} < \dfrac{24{,}2}{36}}" /></CorrectionCard>
                <CorrectionCard n="d"><Math tex="3=\dfrac{21}{7} > \dfrac{19}{7}" />, donc <Math tex="\mathbf{\dfrac{19}{7} < 3}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Compare mentalement"
            itemsLabel="8 paires"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{9}{4} \ \dots\ \dfrac{6}{2}" /></Item>
                <Item n="e"><Math tex="\dfrac{3{,}2}{5} \ \dots\ \dfrac{6{,}04}{10}" /></Item>
                <Item n="b"><Math tex="\dfrac{8}{9} \ \dots\ \dfrac{2}{3}" /></Item>
                <Item n="f"><Math tex="\dfrac{10}{210} \ \dots\ \dfrac{3}{420}" /></Item>
                <Item n="c"><Math tex="\dfrac{45}{16} \ \dots\ \dfrac{10}{4}" /></Item>
                <Item n="g"><Math tex="\dfrac{0{,}7}{12} \ \dots\ \dfrac{2{,}4}{36}" /></Item>
                <Item n="d"><Math tex="\dfrac{35}{63} \ \dots\ \dfrac{5}{7}" /></Item>
                <Item n="h"><Math tex="\dfrac{2}{12} \ \dots\ 6" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a"><Math tex="\dfrac{9}{4} < \dfrac{6}{2}" /> <span className="text-xs text-foreground-muted">6/2 = 12/4</span></CorrectionCard>
                <CorrectionCard n="e"><Math tex="\dfrac{3{,}2}{5} > \dfrac{6{,}04}{10}" /> <span className="text-xs text-foreground-muted">3,2/5 = 6,4/10</span></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{8}{9} > \dfrac{2}{3}" /> <span className="text-xs text-foreground-muted">2/3 = 6/9</span></CorrectionCard>
                <CorrectionCard n="f"><Math tex="\dfrac{10}{210} > \dfrac{3}{420}" /> <span className="text-xs text-foreground-muted">10/210 = 20/420</span></CorrectionCard>
                <CorrectionCard n="c"><Math tex="\dfrac{45}{16} > \dfrac{10}{4}" /> <span className="text-xs text-foreground-muted">10/4 = 40/16</span></CorrectionCard>
                <CorrectionCard n="g"><Math tex="\dfrac{0{,}7}{12} < \dfrac{2{,}4}{36}" /> <span className="text-xs text-foreground-muted">2,4/36 = 0,8/12</span></CorrectionCard>
                <CorrectionCard n="d"><Math tex="\dfrac{35}{63} < \dfrac{5}{7}" /> <span className="text-xs text-foreground-muted">35/63 = 5/9 (Règle 2)</span></CorrectionCard>
                <CorrectionCard n="h"><Math tex="\dfrac{2}{12} < 6" /> <span className="text-xs text-foreground-muted">6 = 72/12</span></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Réduction, puis comparaison"
            itemsLabel="1 question"
            items={
              <div className="rounded-xl border border-border p-5 text-sm">
                <p>
                  On donne <Math tex="A = \dfrac{1}{2}" />, <Math tex="B = \dfrac{4}{6}" />, <Math tex="C = \dfrac{4}{3}" />
                  , <Math tex="D = \dfrac{3}{12}" />, <Math tex="E = \dfrac{8}{24}" />.
                </p>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Écris ces nombres sous forme de fractions de dénominateur 24.</li>
                  <li>Range-les dans l&apos;ordre croissant, puis déduis-en le classement de A, B, C, D, E.</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-5">
                  <CorrectionCard n="A"><Math tex="\dfrac{1}{2}=\dfrac{12}{24}" /></CorrectionCard>
                  <CorrectionCard n="B"><Math tex="\dfrac{4}{6}=\dfrac{16}{24}" /></CorrectionCard>
                  <CorrectionCard n="C"><Math tex="\dfrac{4}{3}=\dfrac{32}{24}" /></CorrectionCard>
                  <CorrectionCard n="D"><Math tex="\dfrac{3}{12}=\dfrac{6}{24}" /></CorrectionCard>
                  <CorrectionCard n="E"><Math tex="\dfrac{8}{24}=\dfrac{8}{24}" /></CorrectionCard>
                </div>
                <p className="mt-3 text-sm text-foreground-muted">Numérateurs sur 24 : 6 &lt; 8 &lt; 12 &lt; 16 &lt; 32, donc :</p>
                <p className="mt-1 text-center text-lg font-bold text-green-700">D &lt; E &lt; A &lt; B &lt; C</p>
              </div>
            }
          />
        </ExerciseGroup>

        <div className="mt-10 mb-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <span className="rounded-full bg-surface-muted px-4 py-1 font-mono text-xs font-semibold text-foreground-muted uppercase">Pour chercher</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <ExerciseGroup total={8} celebrationTitle="Bravo, les 8 exercices « Pour chercher » sont vérifiés !">
          <ExerciseCard
            id="11"
            index={11}
            title="Compare (même numérateur → Règle 2)"
            itemsLabel="6 paires"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{9}{4} \ \dots\ \dfrac{9}{7}" /></Item>
                <Item n="d"><Math tex="\dfrac{10}{5} \ \dots\ \dfrac{10}{4}" /></Item>
                <Item n="b"><Math tex="\dfrac{8}{9} \ \dots\ \dfrac{8}{2}" /></Item>
                <Item n="e"><Math tex="\dfrac{5{,}5}{21} \ \dots\ \dfrac{5{,}5}{19}" /></Item>
                <Item n="c"><Math tex="\dfrac{1}{17} \ \dots\ \dfrac{1}{7}" /></Item>
                <Item n="f"><Math tex="\dfrac{8{,}2}{3{,}25} \ \dots\ \dfrac{8{,}2}{3{,}52}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a"><Math tex="\dfrac{9}{4} > \dfrac{9}{7}" /> <span className="text-xs text-foreground-muted">4 &lt; 7</span></CorrectionCard>
                <CorrectionCard n="d"><Math tex="\dfrac{10}{5} < \dfrac{10}{4}" /> <span className="text-xs text-foreground-muted">5 &gt; 4</span></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{8}{9} < \dfrac{8}{2}" /> <span className="text-xs text-foreground-muted">9 &gt; 2</span></CorrectionCard>
                <CorrectionCard n="e"><Math tex="\dfrac{5{,}5}{21} < \dfrac{5{,}5}{19}" /> <span className="text-xs text-foreground-muted">21 &gt; 19</span></CorrectionCard>
                <CorrectionCard n="c"><Math tex="\dfrac{1}{17} < \dfrac{1}{7}" /> <span className="text-xs text-foreground-muted">17 &gt; 7</span></CorrectionCard>
                <CorrectionCard n="f"><Math tex="\dfrac{8{,}2}{3{,}25} > \dfrac{8{,}2}{3{,}52}" /> <span className="text-xs text-foreground-muted">3,25 &lt; 3,52</span></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Trouve l'intrus dans chaque suite"
            itemsLabel="3 suites"
            items={
              <div className="space-y-3">
                <Item n="a"><Math tex="\dfrac{12}{17} < \dfrac{13}{17} < \dfrac{18}{17} < \dfrac{25}{17} < \dfrac{2{,}7}{17} < \dfrac{28}{17} < \dfrac{30}{17}" /></Item>
                <Item n="b"><Math tex="\dfrac{28}{20} < \dfrac{28}{19} < \dfrac{28}{21} < \dfrac{28}{14} < \dfrac{28}{11} < \dfrac{28}{9} < \dfrac{28}{5}" /></Item>
                <Item n="c"><Math tex="\dfrac{0}{3} < \dfrac{12}{17} < \dfrac{15}{21} < \dfrac{17}{19} < \dfrac{74}{82} < \dfrac{19}{18} < \dfrac{25}{27} < \dfrac{14}{15}" /></Item>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="a">Même dénominateur (17), les numérateurs doivent croître. L&apos;intrus est <Math tex="\mathbf{\dfrac{2{,}7}{17}}" /> (casse la croissance après 25).</CorrectionCard>
                <CorrectionCard n="b">Même numérateur (28), la valeur augmente quand le dénominateur diminue. L&apos;intrus est <Math tex="\mathbf{\dfrac{28}{21}}" /> (21 &gt; 19).</CorrectionCard>
                <CorrectionCard n="c">Tous les quotients sont &lt; 1 sauf <Math tex="\mathbf{\dfrac{19}{18}}" /> (19 &gt; 18, donc &gt; 1), qui casse l&apos;ordre croissant.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="13"
            index={13}
            title="Intercale des quotients"
            itemsLabel="2 séries"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{3{,}82}{7} < \ \dots\ < \dfrac{3{,}83}{7} < \ \dots\ < \dfrac{3{,}831}{7}" /></Item>
                <Item n="b"><Math tex="\dfrac{3{,}8}{12} < \ \dots\ < \dfrac{3{,}8}{10} < \ \dots\ < \dfrac{3{,}8}{7} < \ \dots\ < \dfrac{3{,}8}{6{,}9}" /></Item>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-xs text-foreground-muted italic">Il existe plusieurs réponses valides ; en voici un exemple pour chaque cas.</p>
                <CorrectionCard n="a"><Math tex="\dfrac{3{,}82}{7} < \dfrac{3{,}825}{7} < \dfrac{3{,}83}{7} < \dfrac{3{,}8305}{7} < \dfrac{3{,}831}{7}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{3{,}8}{12} < \dfrac{3{,}8}{11} < \dfrac{3{,}8}{10} < \dfrac{3{,}8}{8} < \dfrac{3{,}8}{7} < \dfrac{3{,}8}{6{,}95} < \dfrac{3{,}8}{6{,}9}" /></CorrectionCard>
                <p className="text-xs text-foreground-muted">Même numérateur : plus le dénominateur choisi est petit (entre les deux bornes), plus le quotient est grand.</p>
              </div>
            }
          />

          <ExerciseCard
            id="14"
            index={14}
            title="Décompose en entier + fraction inférieure à 1"
            itemsLabel="4 fractions"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Exemple : <Math tex="\dfrac{27}{4} = 6 + \dfrac{3}{4}" />
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <Item n="a"><Math tex="\dfrac{22}{7}" /></Item>
                  <Item n="b"><Math tex="\dfrac{38}{5}" /></Item>
                  <Item n="c"><Math tex="\dfrac{65}{9}" /></Item>
                  <Item n="d"><Math tex="\dfrac{46}{7}" /></Item>
                </div>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                <CorrectionCard n="a"><Math tex="\dfrac{22}{7} = 3 + \dfrac{1}{7}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{38}{5} = 7 + \dfrac{3}{5}" /></CorrectionCard>
                <CorrectionCard n="c"><Math tex="\dfrac{65}{9} = 7 + \dfrac{2}{9}" /></CorrectionCard>
                <CorrectionCard n="d"><Math tex="\dfrac{46}{7} = 6 + \dfrac{4}{7}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="15"
            index={15}
            title="Encadre par deux entiers consécutifs"
            itemsLabel="4 fractions"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Item n="a"><Math tex="\dots < \dfrac{2}{3} < \dots" /></Item>
                <Item n="b"><Math tex="\dots < \dfrac{10}{3} < \dots" /></Item>
                <Item n="c"><Math tex="\dots < \dfrac{22}{7} < \dots" /></Item>
                <Item n="d"><Math tex="\dots < \dfrac{230}{3} < \dots" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4">
                <CorrectionCard n="a"><Math tex="0 < \dfrac{2}{3} < 1" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="3 < \dfrac{10}{3} < 4" /></CorrectionCard>
                <CorrectionCard n="c"><Math tex="3 < \dfrac{22}{7} < 4" /></CorrectionCard>
                <CorrectionCard n="d"><Math tex="76 < \dfrac{230}{3} < 77" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="16"
            index={16}
            title="Problème : l'audimat de trois chaînes"
            itemsLabel="1 problème"
            items={
              <div className="rounded-xl border border-border p-5 text-sm">
                <p>
                  Trois chaînes comparent l&apos;audimat de leurs émissions du samedi soir. La chaîne A estime avoir
                  réuni <Math tex="\dfrac{7}{17}" /> des téléspectateurs, la chaîne B annonce <Math tex="\dfrac{20}{51}" />
                  , et la chaîne C prétend en avoir rassemblé <Math tex="\dfrac{39}{34}" />.
                </p>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Quelle chaîne ment assurément ?</li>
                  <li>Entre les deux autres, laquelle a la meilleure audience ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}>
                  Une proportion ne peut pas dépasser 1 (100 %). Or <Math tex="\dfrac{39}{34} > 1" /> : c&apos;est
                  impossible. <strong className="text-green-700">La chaîne C ment assurément.</strong>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\dfrac{7}{17} = \dfrac{21}{51}" />, et <Math tex="\dfrac{21}{51} > \dfrac{20}{51}" />, donc{" "}
                  <Math tex="\dfrac{7}{17} > \dfrac{20}{51}" />. <strong className="text-green-700">La chaîne A a la meilleure audience.</strong>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="17"
            index={17}
            title="Problème : le rapport chevaux / poids de 4 voitures"
            itemsLabel="1 problème"
            items={
              <div className="rounded-xl border border-border p-5 text-sm">
                <p className="mb-3 text-foreground-muted">
                  Plus le rapport chevaux ÷ poids est élevé, plus la voiture est rapide.
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="rounded-lg bg-surface-muted p-3 text-center"><p className="font-bold">Voiture A</p><p className="text-foreground-muted">780 kg · 78 ch</p></div>
                  <div className="rounded-lg bg-surface-muted p-3 text-center"><p className="font-bold">Voiture B</p><p className="text-foreground-muted">854 kg · 185 ch</p></div>
                  <div className="rounded-lg bg-surface-muted p-3 text-center"><p className="font-bold">Voiture C</p><p className="text-foreground-muted">996 kg · 156 ch</p></div>
                  <div className="rounded-lg bg-surface-muted p-3 text-center"><p className="font-bold">Voiture D</p><p className="text-foreground-muted">1,135 t · 122 ch</p></div>
                </div>
                <p className="mt-3 text-foreground-muted">Classe ces voitures de la plus lente à la plus rapide.</p>
              </div>
            }
            correction={
              <div>
                <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
                  <CorrectionCard n="A"><Math tex="\dfrac{78}{780} = 0{,}100" /></CorrectionCard>
                  <CorrectionCard n="D"><Math tex="\dfrac{122}{1135} \approx 0{,}107" /></CorrectionCard>
                  <CorrectionCard n="C"><Math tex="\dfrac{156}{996} \approx 0{,}157" /></CorrectionCard>
                  <CorrectionCard n="B"><Math tex="\dfrac{185}{854} \approx 0{,}217" /></CorrectionCard>
                </div>
                <p className="mt-2 text-xs text-foreground-muted">1,135 tonne = 1135 kg pour la voiture D.</p>
                <p className="mt-2 text-center text-lg font-bold text-green-700">A &lt; D &lt; C &lt; B</p>
                <p className="text-center text-xs text-foreground-muted">de la plus lente (A) à la plus rapide (B)</p>
              </div>
            }
          />

          <ExerciseCard
            id="18"
            index={18}
            title="Range dans l'ordre croissant, sans calculatrice"
            itemsLabel="4 séries"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <Item n="a"><Math tex="\dfrac{12}{17} ; \dfrac{12{,}01}{17} ; \dfrac{11{,}99}{17} ; \dfrac{12{,}2}{17} ; \dfrac{11{,}099}{17}" /></Item>
                <Item n="b"><Math tex="\dfrac{12}{17} ; \dfrac{7}{5} ; \dfrac{8}{17} ; \dfrac{16}{17} ; \dfrac{12}{5} ; \dfrac{14}{5} ; \dfrac{5}{5} ; \dfrac{7}{17}" /></Item>
                <Item n="c"><Math tex="\dfrac{4512{,}376}{356298} ; \dfrac{388542}{4{,}523} ; \dfrac{128{,}56}{128{,}56}" /></Item>
                <Item n="d"><Math tex="\dfrac{0{,}93}{2} ; \dfrac{4{,}88}{8} ; \dfrac{9{,}3}{32} ; \dfrac{47{,}96}{16} ; \dfrac{2{,}45}{4}" /></Item>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="a"><Math tex="\dfrac{11{,}099}{17} < \dfrac{11{,}99}{17} < \dfrac{12}{17} < \dfrac{12{,}01}{17} < \dfrac{12{,}2}{17}" /></CorrectionCard>
                <CorrectionCard n="b">
                  Les fractions de dénominateur 17 ont un numérateur &lt; 17, donc toutes &lt; 1 (Règle 4). Celles de
                  dénominateur 5 ont un numérateur ≥ 5, donc toutes ≥ 1. On classe chaque groupe (Règle 1), puis on
                  assemble :
                  <div className="mt-1"><Math tex="\dfrac{7}{17} < \dfrac{8}{17} < \dfrac{12}{17} < \dfrac{16}{17} < \dfrac{5}{5} < \dfrac{7}{5} < \dfrac{12}{5} < \dfrac{14}{5}" /></div>
                </CorrectionCard>
                <CorrectionCard n="c">
                  On compare chaque écriture à 1 (Règle 4) : 4512,376 &lt; 356298 → &lt;1 ; 128,56 = 128,56 → =1 ;
                  388542 &gt; 4,523 → &gt;1.
                  <div className="mt-1"><Math tex="\dfrac{4512{,}376}{356298} < \dfrac{128{,}56}{128{,}56} < \dfrac{388542}{4{,}523}" /></div>
                </CorrectionCard>
                <CorrectionCard n="d">
                  On réduit tout au dénominateur 32 :
                  <div className="mt-1 grid gap-1 sm:grid-cols-2">
                    <Math tex="\dfrac{0{,}93}{2} = \dfrac{14{,}88}{32}" />
                    <Math tex="\dfrac{4{,}88}{8} = \dfrac{19{,}52}{32}" />
                    <Math tex="\dfrac{2{,}45}{4} = \dfrac{19{,}6}{32}" />
                    <Math tex="\dfrac{47{,}96}{16} = \dfrac{95{,}92}{32}" />
                  </div>
                  <div className="mt-2"><Math tex="\dfrac{9{,}3}{32} < \dfrac{0{,}93}{2} < \dfrac{4{,}88}{8} < \dfrac{2{,}45}{4} < \dfrac{47{,}96}{16}" /></div>
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
