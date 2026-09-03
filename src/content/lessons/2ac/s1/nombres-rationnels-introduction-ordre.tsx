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
  title: "Les Nombres Rationnels · Introduction et Ordre | 2AC",
  description:
    "Cours complet sur les nombres rationnels (définition, signe, simplification, égalité et produit en croix) et 9 exercices corrigés en détail, 2ème année collège, semestre 1.",
  kicker: "2ᵉ Année Collège · Chapitre 1",
  heroTitle: "Les nombres rationnels",
  heroSubtitle:
    "Le quotient de deux entiers relatifs. Une écriture qu'on rencontre partout, et qu'il faut savoir manier : signe, simplification, égalité.",
  footerNote: "Les nombres rationnels · Mathématiques, 2ᵉ année collège, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "application", label: "Application" },
    { id: "serie", label: "Exercice N°2" },
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

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "9", label: "exercices" },
          { value: "4", label: "notions" },
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
              href="#serie"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              S&apos;entraîner
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-center font-serif text-white italic">
            <span className="flex flex-col items-center text-6xl leading-none font-bold sm:text-7xl">
              <span>a</span>
              <span className="my-2 h-1 w-16 bg-orange-400 sm:w-20" />
              <span>b</span>
            </span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 · La définition" title="Le nombre rationnel" tone="light"
        description={
          <>
            Le quotient d&apos;un entier relatif <Math tex="a" /> par un entier relatif non nul <Math tex="b" />.
          </>
        }
      >
        <FormulaBlock tex="\dfrac{a}{b}" caption={<><Math tex="b \neq 0" /></>} />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-4">
            <p className="mb-1 font-mono text-xs font-semibold text-green-700 uppercase">ce sont des rationnels</p>
            <p className="text-base">
              <Math tex="\dfrac{2}{3}" /> · <Math tex="\dfrac{5}{7}" /> · <Math tex="-\dfrac{11}{8}" />
            </p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
            <p className="mb-1 font-mono text-xs font-semibold text-rose-700 uppercase">ce n&apos;en est pas un</p>
            <p className="text-base">
              <Math tex="\dfrac{4}{0}" /> · le dénominateur est nul
            </p>
          </div>
        </div>

        <Callout variant="info" title="Propriété">
          <p>Tout nombre décimal relatif est un nombre rationnel.</p>
          <p className="mt-2">
            <Math tex="4 = \dfrac{4}{1}" /> · <Math tex="2{,}35 = \dfrac{235}{100}" /> ·{" "}
            <Math tex="-0{,}9 = -\dfrac{9}{10}" />
          </p>
          <p className="mt-3 text-xs">
            Remarque : certains rationnels ne sont pas décimaux, comme <Math tex="\dfrac{2}{3}" /> (
            <Math tex="\dfrac{2}{3} \approx 1{,}333\ldots" />).
          </p>
        </Callout>
      </LessonSection>

      <LessonSection kicker="02 · Le signe" title="Signe d'un nombre rationnel" tone="light"
        description={
          <>
            Tout dépend si <Math tex="a" /> et <Math tex="b" /> ont le même signe, ou pas.
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-5">
            <p className="font-mono text-xs font-semibold text-green-700 uppercase">même signe</p>
            <p className="mt-2 text-lg">
              <Math tex="\dfrac{a}{b}" /> est <strong>positif</strong>
            </p>
            <p className="mt-3 text-sm text-foreground-muted">
              <Math tex="\dfrac{-2}{-7}" /> · numérateur et dénominateur ont le même signe
            </p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
            <p className="font-mono text-xs font-semibold text-rose-700 uppercase">signes contraires</p>
            <p className="mt-2 text-lg">
              <Math tex="\dfrac{a}{b}" /> est <strong>négatif</strong>
            </p>
            <p className="mt-3 text-sm text-foreground-muted">
              <Math tex="\dfrac{-3}{5}" /> · numérateur et dénominateur ont des signes contraires
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border p-5 text-center">
          <p className="mb-2 text-sm text-foreground-muted">
            Si <Math tex="\dfrac{a}{b}" /> est un nombre rationnel, alors :
          </p>
          <Math tex="\dfrac{-a}{b} = \dfrac{a}{-b} = -\dfrac{a}{b} \quad ; \quad \dfrac{a}{b} = \dfrac{-a}{-b}" />
        </div>
      </LessonSection>

      <LessonSection kicker="03 · La simplification" title="Simplifier un nombre rationnel" tone="light"
        description={
          <>
            On multiplie ou on divise <Math tex="a" /> et <Math tex="b" /> par le même entier <Math tex="k" /> non nul.
          </>
        }
      >
        <FormulaBlock tex="\dfrac{a \times k}{b \times k} = \dfrac{a}{b} \quad ; \quad \dfrac{a \div k}{b \div k} = \dfrac{a}{b}" />
        <div className="mt-4 grid gap-3 text-center sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4">
            <Math tex="\dfrac{2}{3} = \dfrac{2 \times 4}{3 \times 4} = \dfrac{8}{12}" />
          </p>
          <p className="rounded-xl border border-border p-4">
            <Math tex="\dfrac{-21}{35} = \dfrac{-21 \div 7}{35 \div 7} = \dfrac{-3}{5}" />
          </p>
        </div>
      </LessonSection>

      <LessonSection kicker="04 · L'égalité" title="Égalité des rationnels et produit en croix" tone="light"
        description={
          <>
            Si <Math tex="\dfrac{a}{b} = \dfrac{c}{d}" />, alors <Math tex="a \times d = b \times c" />.
          </>
        }
      >
        <div className="rounded-xl border border-border bg-surface-muted p-5">
          <p className="mb-2 text-sm">
            Les nombres <Math tex="\dfrac{-2}{5}" /> et <Math tex="-\dfrac{3}{7}" /> sont-ils égaux ?
          </p>
          <p className="text-sm text-foreground-muted">
            <Math tex="-2 \times 7 = -14" /> et <Math tex="5 \times (-3) = -15" />
          </p>
          <p className="mt-2 font-semibold text-rose-700">
            <Math tex="-14 \neq -15" />, donc <Math tex="\dfrac{-2}{5} \neq -\dfrac{3}{7}" />
          </p>
        </div>
      </LessonSection>

      {/* ===================== EXERCICE D'APPLICATION ===================== */}
      <LessonSection id="application" kicker="Avant la série" title="Exercice d'application" tone="muted"
        description="Un exercice de synthèse pour vérifier que le cours est acquis."
      >
        <ExerciseCard
          id="app"
          index={1}
          title="Simplifier, comparer, trouver x et y"
          itemsLabel="3 questions"
          items={
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">1) Simplifier :</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Item n={1}><Math tex="\dfrac{10}{20}" /></Item>
                  <Item n={2}><Math tex="\dfrac{-30}{15}" /></Item>
                  <Item n={3}><Math tex="\dfrac{27}{63}" /></Item>
                  <Item n={4}><Math tex="\dfrac{4 \times 7 \times 5}{5 \times 11 \times 4}" /></Item>
                  <Item n={5}><Math tex="\dfrac{4 \times 9 \times 5 \times 7}{3 \times (-25) \times 3 \times 13}" /></Item>
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">2) Comparer :</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Item n={1}><Math tex="\dfrac{6}{10}" /> et <Math tex="\dfrac{-2}{3}" /></Item>
                  <Item n={2}><Math tex="\dfrac{-8}{-5}" /> et <Math tex="\dfrac{56}{35}" /></Item>
                  <Item n={3}><Math tex="\dfrac{7}{-2}" /> et <Math tex="-3{,}5" /></Item>
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">3) Trouver x et y :</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Item n={1}><Math tex="\dfrac{6}{x} = \dfrac{10}{15}" /></Item>
                  <Item n={2}><Math tex="0{,}7 = \dfrac{14}{x}" /></Item>
                  <Item n={3}><Math tex="\dfrac{x}{5} = \dfrac{4}{10} = \dfrac{10}{y}" /></Item>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-5 text-sm">
              <div>
                <p className="mb-2 font-semibold text-foreground">1) Simplification</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <CorrectionCard n={1}><Math tex="\dfrac{10}{20} = \mathbf{\dfrac{1}{2}}" /></CorrectionCard>
                  <CorrectionCard n={2}><Math tex="\dfrac{-30}{15} = \mathbf{-2}" /></CorrectionCard>
                  <CorrectionCard n={3}><Math tex="\dfrac{27}{63} = \mathbf{\dfrac{3}{7}}" /> (÷9)</CorrectionCard>
                  <CorrectionCard n={4}><Math tex="\dfrac{4 \times 7 \times 5}{5 \times 11 \times 4} = \mathbf{\dfrac{7}{11}}" /> (÷4 et ÷5)</CorrectionCard>
                  <CorrectionCard n={5}><Math tex="\dfrac{4 \times 9 \times 5 \times 7}{3 \times (-25) \times 3 \times 13} = \mathbf{\dfrac{-28}{65}}" /></CorrectionCard>
                </div>
              </div>
              <div>
                <p className="mb-2 font-semibold text-foreground">2) Comparaison</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <CorrectionCard n={1}>
                    <Math tex="\dfrac{6}{10} = 0{,}6" /> et <Math tex="\dfrac{-2}{3} \approx -0{,}667" />, donc{" "}
                    <Math tex="\mathbf{\dfrac{6}{10} > \dfrac{-2}{3}}" />
                  </CorrectionCard>
                  <CorrectionCard n={2}>
                    <Math tex="\dfrac{-8}{-5} = 1{,}6" /> et <Math tex="\dfrac{56}{35} = 1{,}6" /> : nombres <strong className="text-green-700">égaux</strong>
                  </CorrectionCard>
                  <CorrectionCard n={3}>
                    <Math tex="\dfrac{7}{-2} = -3{,}5" /> : nombres <strong className="text-green-700">égaux</strong>
                  </CorrectionCard>
                </div>
              </div>
              <div>
                <p className="mb-2 font-semibold text-foreground">3) Valeurs de x et y</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <CorrectionCard n={1}>
                    <Math tex="6 \times 15 = 10 \times x \implies 90 = 10x \implies \mathbf{x = 9}" />
                  </CorrectionCard>
                  <CorrectionCard n={2}>
                    <Math tex="0{,}7 \times x = 14 \implies \mathbf{x = 20}" />
                  </CorrectionCard>
                  <CorrectionCard n={3}>
                    <Math tex="\dfrac{4}{10} = \dfrac{2}{5} \implies \mathbf{x = 2}" /> ;{" "}
                    <Math tex="4 \times y = 10 \times 10 \implies 4y = 100 \implies \mathbf{y = 25}" />
                  </CorrectionCard>
                </div>
              </div>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== SERIE N°2 ===================== */}
      <LessonSection id="serie" kicker="S'entraîner" title="Exercice N°2 : nombres rationnels" tone="muted"
        description="9 exercices corrigés. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={9} celebrationTitle="Bravo, les 9 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les nombres rationnels.">
          <ExerciseCard
            id="1"
            index={1}
            title="Signe des nombres rationnels"
            itemsLabel="6 expressions"
            items={
              <p className="text-center text-lg">
                <Math tex="\dfrac{3}{-7}" /> ; <Math tex="\dfrac{-2}{-5}" /> ; <Math tex="-\dfrac{1}{9}" /> ;{" "}
                <Math tex="-\left(\dfrac{5}{-9}\right)" /> ; <Math tex="-\left(\dfrac{-68}{-55}\right)" /> ;{" "}
                <Math tex="-\left(-\left(-\left(-\dfrac{1}{-3}\right)\right)\right)" />
              </p>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="\dfrac{3}{-7}" /> : signes contraires → <strong className="text-rose-700">négatif</strong></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\dfrac{-2}{-5}" /> : même signe → <strong className="text-green-700">positif</strong></CorrectionCard>
                <CorrectionCard n={3}><Math tex="-\dfrac{1}{9}" /> : <Math tex="\dfrac{1}{9}" /> est positif, son opposé est <strong className="text-rose-700">négatif</strong></CorrectionCard>
                <CorrectionCard n={4}><Math tex="-\left(\dfrac{5}{-9}\right)" /> : <Math tex="\dfrac{5}{-9}" /> est négatif, son opposé est <strong className="text-green-700">positif</strong></CorrectionCard>
                <CorrectionCard n={5}><Math tex="-\left(\dfrac{-68}{-55}\right)" /> : <Math tex="\dfrac{-68}{-55}" /> est positif, son opposé est <strong className="text-rose-700">négatif</strong></CorrectionCard>
                <CorrectionCard n={6}>
                  <Math tex="-\left(-\left(-\left(-\dfrac{1}{-3}\right)\right)\right)" /> : on simplifie de l&apos;intérieur · <Math tex="\dfrac{-1}{-3}" /> est positif (1/3) ; son opposé est négatif ; l&apos;opposé de ce négatif est positif ; l&apos;opposé de ce positif est <strong className="text-rose-700">négatif</strong>.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Nombres décimaux relatifs"
            itemsLabel="lesquels sont décimaux ?"
            items={
              <p className="text-center text-lg">
                <Math tex="\dfrac{11}{-6}" /> ; <Math tex="\dfrac{51}{17}" /> ; <Math tex="-\dfrac{9}{8}" /> ;{" "}
                <Math tex="\dfrac{-78}{-54}" /> ; <Math tex="\dfrac{-37}{-20}" />
              </p>
            }
            correction={
              <div>
                <p className="mb-3 text-xs text-foreground-muted">
                  Un rationnel est décimal si, une fois réduit, son dénominateur ne contient que des facteurs 2 et/ou 5.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <CorrectionCard n={1}><Math tex="\dfrac{11}{-6}" /> : dénominateur <Math tex="6 = 2 \times 3" /> → <strong className="text-rose-700">non décimal</strong></CorrectionCard>
                  <CorrectionCard n={2}><Math tex="\dfrac{51}{17}" /> : 17 est premier → <strong className="text-rose-700">non décimal</strong></CorrectionCard>
                  <CorrectionCard n={3}><Math tex="-\dfrac{9}{8} = -1{,}125" /> : <Math tex="8 = 2^3" /> → <strong className="text-green-700">décimal</strong></CorrectionCard>
                  <CorrectionCard n={4}><Math tex="\dfrac{-78}{-54} = \dfrac{13}{9}" /> : dénominateur <Math tex="9 = 3^2" /> → <strong className="text-rose-700">non décimal</strong></CorrectionCard>
                  <CorrectionCard n={5}><Math tex="\dfrac{-37}{-20} = 1{,}85" /> : <Math tex="20 = 2^2 \times 5" /> → <strong className="text-green-700">décimal</strong></CorrectionCard>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Compléter des égalités"
            itemsLabel="2 chaînes"
            items={
              <div className="space-y-4 overflow-x-auto text-center text-lg">
                <p>
                  <Math tex="\dfrac{-3}{7} = \dfrac{-12}{\ldots} = \dfrac{\ldots}{-0{,}7} = \dfrac{24}{\ldots} = \dfrac{\ldots}{-2{,}1} = \dfrac{-33}{\ldots}" />
                </p>
                <p>
                  <Math tex="\dfrac{-45}{27} = \dfrac{-5}{\ldots} = \dfrac{\ldots}{-300} = \dfrac{20}{\ldots} = \dfrac{0{,}2}{\ldots} = \dfrac{\ldots}{-42}" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div className="overflow-x-auto rounded-lg border border-green-500/20 bg-surface p-4 text-center text-base">
                  <Math tex="\dfrac{-3}{7} = \dfrac{-12}{28} = \dfrac{0{,}3}{-0{,}7} = \dfrac{24}{-56} = \dfrac{0{,}9}{-2{,}1} = \dfrac{-33}{77}" />
                </div>
                <div className="overflow-x-auto rounded-lg border border-green-500/20 bg-surface p-4 text-center text-base">
                  <Math tex="\dfrac{-45}{27} = \dfrac{-5}{3} = \dfrac{500}{-300} = \dfrac{20}{-12} = \dfrac{0{,}2}{-0{,}12} = \dfrac{70}{-42}" />
                </div>
                <p className="text-xs text-foreground-muted">
                  Méthode : on multiplie (ou divise) le numérateur et le dénominateur par le même nombre non nul, en partant de la fraction simplifiée <strong>−3/7</strong> (resp. <strong>−5/3</strong>).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Produit en croix : égaux ou différents ?"
            itemsLabel="3 paires"
            items={
              <p className="text-center text-lg">
                <Math tex="\dfrac{45}{60}" /> et <Math tex="\dfrac{75}{100}" /> ; <Math tex="\dfrac{-87}{-42}" /> et{" "}
                <Math tex="\dfrac{-5{,}8}{-2{,}8}" /> ; <Math tex="\dfrac{-12{,}15}{35{,}1}" /> et <Math tex="\dfrac{5{,}8}{-16{,}75}" />
              </p>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="45 \times 100 = 4500" /> et <Math tex="60 \times 75 = 4500" /> → <strong className="text-green-700">égaux</strong></CorrectionCard>
                <CorrectionCard n={2}><Math tex="(-87) \times (-2{,}8) = 243{,}6" /> et <Math tex="(-42) \times (-5{,}8) = 243{,}6" /> → <strong className="text-green-700">égaux</strong></CorrectionCard>
                <CorrectionCard n={3}><Math tex="(-12{,}15) \times (-16{,}75) = 203{,}5125" /> et <Math tex="35{,}1 \times 5{,}8 = 203{,}58" /> → <strong className="text-rose-700">différents</strong></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Rendre irréductible"
            itemsLabel="6 fractions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{65}{-39}" /></Item>
                <Item n={2}><Math tex="\dfrac{-144}{-69}" /></Item>
                <Item n={3}><Math tex="\dfrac{-702}{1014}" /></Item>
                <Item n={4}><Math tex="\dfrac{(-32) \times (-7)}{21 \times (-6)}" /></Item>
                <Item n={5}><Math tex="\dfrac{(-125) \times 49 \times (-21)}{15 \times (-98)}" /></Item>
                <Item n={6}><Math tex="\dfrac{2^3 \times 5^3 \times 11}{11^2 \times 2^5 \times 5^2}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\text{PGCD}(65,39)=13 \implies \mathbf{\dfrac{-5}{3}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\text{PGCD}(144,69)=3 \implies \mathbf{\dfrac{48}{23}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\text{PGCD}(702,1014)=78 \implies \mathbf{\dfrac{-9}{13}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\dfrac{224}{-126} \implies \mathbf{\dfrac{-16}{9}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\dfrac{128625}{-1470} \implies \mathbf{\dfrac{-175}{2}}" /></CorrectionCard>
                <CorrectionCard n={6}>on simplifie par <Math tex="2^3" />, <Math tex="5^2" /> et 11 → <Math tex="\mathbf{\dfrac{5}{44}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Même dénominateur et comparaison"
            itemsLabel="4 cas"
            items={
              <p className="text-center text-lg">
                <Math tex="\dfrac{-5}{4}" /> et <Math tex="\dfrac{-9}{8}" /> ; <Math tex="\dfrac{2{,}7}{-9}" /> et{" "}
                <Math tex="\dfrac{-1}{3}" /> ; <Math tex="3" /> et <Math tex="\dfrac{20}{-7}" /> ; <Math tex="\dfrac{-7}{12}" /> et{" "}
                <Math tex="\dfrac{11}{-18}" /> et <Math tex="-\dfrac{5}{6}" />
              </p>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n={1}>
                  <Math tex="\dfrac{-5}{4} = \dfrac{-10}{8}" /> et <Math tex="\dfrac{-9}{8}" /> : <Math tex="-10 < -9" /> donc{" "}
                  <Math tex="\mathbf{\dfrac{-5}{4} < \dfrac{-9}{8}}" />
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\dfrac{2{,}7}{-9} = -0{,}3" /> et <Math tex="\dfrac{-1}{3} \approx -0{,}333" /> : <Math tex="-0{,}3 > -0{,}333" /> donc{" "}
                  <Math tex="\mathbf{\dfrac{2{,}7}{-9} > \dfrac{-1}{3}}" />
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="3 = \dfrac{21}{7}" /> et <Math tex="\dfrac{20}{-7} = \dfrac{-20}{7}" /> : <Math tex="21 > -20" /> donc{" "}
                  <Math tex="\mathbf{3 > \dfrac{20}{-7}}" />
                </CorrectionCard>
                <CorrectionCard n={4}>
                  Dénominateur commun 36 : <Math tex="\dfrac{-7}{12} = \dfrac{-21}{36}" />, <Math tex="\dfrac{11}{-18} = \dfrac{-22}{36}" />,{" "}
                  <Math tex="-\dfrac{5}{6} = \dfrac{-30}{36}" /> : donc <Math tex="\mathbf{-\dfrac{5}{6} < \dfrac{11}{-18} < \dfrac{-7}{12}}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title={<>Trouver la valeur de <Math tex="a" /></>}
            itemsLabel="4 équations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="\dfrac{4}{-6} = \dfrac{-18}{2a}" /></Item>
                <Item n={2}><Math tex="12a = \dfrac{-3}{11}" /></Item>
                <Item n={3}><Math tex="\dfrac{-2}{3a} = \dfrac{1}{4}" /></Item>
                <Item n={4}><Math tex="\dfrac{3}{-4} = \dfrac{-5}{2a-1}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="4 \times 2a = -6 \times (-18) \implies 8a = 108 \implies \mathbf{a = 13{,}5}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{a = \dfrac{-3}{132} = \dfrac{-1}{44}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="-2 \times 4 = 1 \times 3a \implies -8 = 3a \implies \mathbf{a = \dfrac{-8}{3}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="3 \times (2a-1) = -4 \times (-5) \implies 6a-3 = 20 \implies 6a = 23 \implies \mathbf{a = \dfrac{23}{6}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title={<>Trouver la valeur de <Math tex="x" /></>}
            items={
              <p className="text-center text-lg">
                <Math tex="\dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \dfrac{1}{x} = \dfrac{77}{60}" />
              </p>
            }
            correction={
              <div className="text-sm">
                <p className="mb-2">On met les trois premières fractions au dénominateur commun 60 :</p>
                <p className="mb-3 text-center text-lg">
                  <Math tex="\dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} = \dfrac{30}{60} + \dfrac{20}{60} + \dfrac{15}{60} = \dfrac{65}{60}" />
                </p>
                <p className="mb-2">
                  Donc <Math tex="\dfrac{1}{x} = \dfrac{77}{60} - \dfrac{65}{60} = \dfrac{12}{60} = \dfrac{1}{5}" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\mathbf{x = 5}" />
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Problème : proportionnalité"
            items={
              <p className="text-base">
                Le volume de 180 gouttes d&apos;un liquide est 9 cm³. Quel est le volume de 150 gouttes de ce même liquide ?
              </p>
            }
            correction={
              <div className="text-sm">
                <p className="mb-2">Le volume est proportionnel au nombre de gouttes. Une goutte a un volume de :</p>
                <p className="mb-2 text-center text-lg">
                  <Math tex="\dfrac{9}{180} = 0{,}05 \text{ cm}^3" />
                </p>
                <p className="mb-2">Pour 150 gouttes :</p>
                <p className="mb-2 text-center text-lg">
                  <Math tex="\dfrac{150}{180} \times 9 = \dfrac{5}{6} \times 9 = 7{,}5" />
                </p>
                <p className="font-semibold text-green-700">Le volume de 150 gouttes est de 7,5 cm³.</p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
