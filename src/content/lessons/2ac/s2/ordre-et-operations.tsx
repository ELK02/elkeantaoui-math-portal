import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Ordre et Opérations · Cours et exercices corrigés | 2AC",
  description:
    "Cours détaillé sur l'ordre et les opérations (comparaison de nombres rationnels, effet de l'addition, de la soustraction et de la multiplication sur l'ordre, inéquations du premier degré) et 17 exercices corrigés en détail, 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 1",
  heroTitle: "Ordre et Opérations",
  heroSubtitle:
    "Comparer deux nombres, garder ou changer le sens d'une inégalité, encadrer, résoudre une inéquation : les réflexes de base pour l'ordre dans ℚ.",
  footerNote: "Ordre et opérations · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "exercice1", label: "Ex.1" },
    { id: "exercice2", label: "Ex.2" },
    { id: "exercice3", label: "Ex.3" },
    { id: "exercice4", label: "Ex.4" },
    { id: "exercice5", label: "Ex.5" },
    { id: "exercice6", label: "Ex.6" },
    { id: "exercice7", label: "Ex.7" },
    { id: "exercice8", label: "Ex.8" },
    { id: "exercice9", label: "Ex.9" },
    { id: "exercice10", label: "Ex.10" },
    { id: "exercice11", label: "Ex.11" },
    { id: "exercice12", label: "Ex.12" },
    { id: "exercice13", label: "Ex.13" },
    { id: "exercice14", label: "Ex.14" },
    { id: "exercice15", label: "Ex.15" },
    { id: "exercice16", label: "Ex.16" },
    { id: "exercice17", label: "Ex.17" },
  ],
};

/** Small numbered pill used inside item grids. */
function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500">
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

/** Plain bordered box for single, un-numbered statements. */
function StatementBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">{children}</div>
  );
}

function StatementCorrection({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-2 rounded-xl border border-green-500/20 bg-surface p-4 text-sm">{children}</div>
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
          { value: "17", label: "exercices" },
          { value: "52", label: "questions" },
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
          <div className="relative flex select-none items-baseline gap-3 font-serif text-white italic">
            <span className="text-[5rem] leading-none font-bold sm:text-[7rem]">a</span>
            <span className="text-[5rem] leading-none font-bold text-orange-400 sm:text-[7rem]">&lt;</span>
            <span className="text-[5rem] leading-none font-bold sm:text-[7rem]">b</span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 · Comparer deux nombres" title="Comparaison de deux nombres rationnels" tone="light"
        description="Pour comparer a et b, on regarde simplement le signe de leur différence."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1 text-xl font-bold text-foreground"><Math tex="a<b" /></p>
            <p className="text-xs text-foreground-muted">a strictement inférieur à b</p>
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1 text-xl font-bold text-foreground"><Math tex="a>b" /></p>
            <p className="text-xs text-foreground-muted">a strictement supérieur à b</p>
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1 text-xl font-bold text-foreground"><Math tex="a\le b" /></p>
            <p className="text-xs text-foreground-muted">a inférieur ou égal à b</p>
          </div>
          <div className="rounded-xl border border-border p-4 text-center">
            <p className="mb-1 text-xl font-bold text-foreground"><Math tex="a\ge b" /></p>
            <p className="text-xs text-foreground-muted">a supérieur ou égal à b</p>
          </div>
        </div>

        <Callout variant="info" title="Propriété" >
          <p className="mb-1">Soient <Math tex="a" /> et <Math tex="b" /> deux nombres rationnels :</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Si <Math tex="a-b<0" /> alors <Math tex="a<b" /></li>
            <li>Si <Math tex="a-b>0" /> alors <Math tex="a>b" /></li>
            <li>Si <Math tex="a-b=0" /> alors <Math tex="a=b" /></li>
          </ul>
        </Callout>

        <div className="mt-4 rounded-xl border border-border p-5 text-sm">
          <p className="mb-2 font-semibold text-foreground">
            Exemple · comparer <Math tex="\dfrac{3}{5}" /> et <Math tex="\dfrac{6}{7}" />
          </p>
          <p>On a : <Math tex="\dfrac{3}{5}-\dfrac{6}{7}=\dfrac{21}{35}-\dfrac{30}{35}=\dfrac{-9}{35}" /></p>
          <p>Puisque <Math tex="\dfrac{-9}{35}<0" />, alors <Math tex="\mathbf{\dfrac{3}{5}<\dfrac{6}{7}}" />.</p>
        </div>
      </LessonSection>

      <LessonSection kicker="02 · Addition et soustraction" title="Ordre et addition, ordre et soustraction" tone="light"
        description="Ajouter ou soustraire le même nombre des deux côtés ne change jamais le sens d'une inégalité."
      >
        <Callout variant="info" title="Propriété">
          <p className="mb-1">Soient <Math tex="a" />, <Math tex="b" /> et <Math tex="c" /> trois nombres rationnels :</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Si <Math tex="a<b" /> alors <Math tex="a+c<b+c" /></li>
            <li>Si <Math tex="a<b" /> alors <Math tex="a-c<b-c" /></li>
          </ul>
        </Callout>
        <div className="mt-3 rounded-lg border border-border p-4 text-sm">
          <p className="mb-1 font-semibold text-foreground">
            Exemple · <Math tex="x" /> rationnel tel que <Math tex="x\le5" />. Comparer <Math tex="x+4" /> et <Math tex="9" />.
          </p>
          <p>On a <Math tex="x\le5" />, alors <Math tex="x+4\le5+4" />, donc <Math tex="\mathbf{x+4\le9}" />.</p>
        </div>

        <Callout variant="info" title="Propriété" >
          <p>
            Soient <Math tex="a" />, <Math tex="b" />, <Math tex="c" /> et <Math tex="d" /> des nombres rationnels : si{" "}
            <Math tex="\begin{cases}a<b\\c<d\end{cases}" /> alors <Math tex="a+c<b+d" />
          </p>
        </Callout>
        <div className="mt-3 rounded-lg border border-border p-4 text-sm">
          <p className="mb-1 font-semibold text-foreground">
            Exemple · <Math tex="a<4" /> et <Math tex="3>b" />. Montrer que <Math tex="a+b<7" />.
          </p>
          <p>
            On a <Math tex="\begin{cases}a<4\\b<3\end{cases}" /> alors <Math tex="a+b<4+3" />, donc <Math tex="\mathbf{a+b<7}" />.
          </p>
        </div>
      </LessonSection>

      <LessonSection kicker="03 · Multiplication" title="Ordre et multiplication" tone="light"
        description="Ici il faut regarder le signe du nombre par lequel on multiplie : le sens change s'il est négatif."
      >
        <Callout variant="info" title="Propriété">
          <p className="mb-1">Soient <Math tex="a" />, <Math tex="b" /> et <Math tex="c" /> des nombres rationnels :</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Si <Math tex="\begin{cases}a<b\\c>0\end{cases}" /> alors <Math tex="a\times c<b\times c" /></li>
            <li>Si <Math tex="\begin{cases}a<b\\c<0\end{cases}" /> alors <Math tex="a\times c>b\times c" /></li>
          </ul>
        </Callout>
        <div className="mt-3 rounded-lg border border-border p-4 text-sm">
          <p className="mb-1 font-semibold text-foreground">
            Exemple · <Math tex="a<3" /> et <Math tex="b>-5" />. Comparer <Math tex="-2a" /> et <Math tex="-6" />, puis <Math tex="3b" /> et <Math tex="-15" />.
          </p>
          <p>On a <Math tex="a<3" />, alors <Math tex="-2\times a>-2\times3" />, donc <Math tex="\mathbf{-2a>-6}" />.</p>
          <p>On a <Math tex="b>-5" />, alors <Math tex="3\times b>3\times(-5)" />, donc <Math tex="\mathbf{3b>-15}" />.</p>
        </div>

        <Callout variant="warning" title="Remarque">
          <p>Soient <Math tex="a" /> et <Math tex="b" /> deux nombres rationnels : si <Math tex="a<b" /> alors <Math tex="-a>-b" /></p>
        </Callout>

        <Callout variant="info" title="Propriété">
          <p>
            Soient <Math tex="a" />, <Math tex="b" />, <Math tex="c" /> et <Math tex="d" /> des nombres rationnels
            positifs : si <Math tex="\begin{cases}a<b\\c<d\end{cases}" /> alors <Math tex="a\times c<b\times d" />
          </p>
        </Callout>
        <div className="mt-3 rounded-lg border border-border p-4 text-sm">
          <p className="mb-1 font-semibold text-foreground">
            Exemple · <Math tex="a<2" /> et <Math tex="b<6" />. Montrer que <Math tex="ab<12" />.
          </p>
          <p>
            On a <Math tex="\begin{cases}a<2\\b<6\end{cases}" /> alors <Math tex="a\times b<2\times6" />, donc{" "}
            <Math tex="\mathbf{ab<12}" />.
          </p>
        </div>
      </LessonSection>

      <LessonSection kicker="04 · Résoudre une inéquation" title="Inéquations du premier degré à une inconnue" tone="light"
        description="Une inéquation se résout comme une équation, avec un seul réflexe en plus : diviser par un négatif inverse le sens."
      >
        <Callout variant="warning" title="Définition">
          <p>
            Une inéquation à une inconnue <Math tex="x" /> est une inégalité entre deux expressions algébriques.
          </p>
          <p className="mt-2">
            La valeur de <Math tex="x" /> pour laquelle l&apos;inégalité est vraie est <strong>la solution</strong> de
            l&apos;inéquation. Résoudre une inéquation, c&apos;est trouver tous les nombres qui la vérifient.
          </p>
        </Callout>

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemples</p>
        <div className="mt-2 grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-2 font-semibold text-foreground"><Math tex="2x+1\ge-7" /></p>
            <p><Math tex="2x\ge-7-1" /></p>
            <p><Math tex="2x\ge-8" /></p>
            <p><Math tex="x\ge\dfrac{-8}{2}" /></p>
            <p className="font-semibold text-foreground"><Math tex="\mathbf{x\ge-4}" /></p>
            <p className="mt-2 text-foreground-muted">Solutions : tous les nombres supérieurs ou égaux à <Math tex="-4" />.</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-2 font-semibold text-foreground"><Math tex="-2x+1>9" /></p>
            <p><Math tex="-2x>9-1" /></p>
            <p><Math tex="-2x>8" /></p>
            <p>
              <Math tex="x<\dfrac{8}{-2}" />{" "}
              <span className="text-xs text-foreground-muted">(on divise par un négatif : le sens change)</span>
            </p>
            <p className="font-semibold text-foreground"><Math tex="\mathbf{x<-4}" /></p>
            <p className="mt-2 text-foreground-muted">Solutions : tous les nombres strictement inférieurs à <Math tex="-4" />.</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="17 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={17} celebrationTitle="Bravo, les 17 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises l'ordre et les opérations.">
          <ExerciseCard
            id="1"
            index={1}
            title="Compléter en mettant > ou <"
            itemsLabel="3 comparaisons"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Item n={1}><Math tex="(-11)\ \ldots\ (-8)" /></Item>
                <Item n={2}><Math tex="\dfrac{-7}{3}\ \ldots\ \dfrac{1}{2}" /></Item>
                <Item n={3}><Math tex="\dfrac{320}{321}\ \ldots\ 1" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <CorrectionCard n={1}>
                  <Math tex="(-11)<(-8)" /> car <Math tex="-11" /> est plus loin à gauche sur la droite graduée.
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\dfrac{-7}{3}<\dfrac{1}{2}" /> car un négatif est toujours inférieur à un positif.
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="\dfrac{320}{321}<1" /> car <Math tex="\dfrac{320}{321}=1-\dfrac{1}{321}" />.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Comparer a et b dans chaque cas"
            itemsLabel="4 cas"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Item n={1}><Math tex="a-b=13" /></Item>
                <Item n={2}><Math tex="a-b=\dfrac{-5}{3}" /></Item>
                <Item n={3}><Math tex="a-b=(-7)^{2022}" /></Item>
                <Item n={4}><Math tex="a-b=(-2)^{2021}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <CorrectionCard n={1}><Math tex="a-b=13>0" /> donc <Math tex="\mathbf{a>b}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="a-b=\dfrac{-5}{3}<0" /> donc <Math tex="\mathbf{a<b}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="2022" /> est pair, donc <Math tex="(-7)^{2022}>0" /> : <Math tex="\mathbf{a>b}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="2021" /> est impair, donc <Math tex="(-2)^{2021}<0" /> : <Math tex="\mathbf{a<b}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Comparer"
            itemsLabel="3 comparaisons"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{3}{2}" /> et <Math tex="\dfrac{5}{3}" /></Item>
                <Item n={2}><Math tex="x+\dfrac12" /> et <Math tex="x-\dfrac14" /></Item>
                <Item n={3}><Math tex="(x+y)^2" /> et <Math tex="4xy" /></Item>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="\dfrac{3}{2}-\dfrac{5}{3}=\dfrac{9}{6}-\dfrac{10}{6}=\dfrac{-1}{6}<0" /> donc{" "}
                  <Math tex="\mathbf{\dfrac{3}{2}<\dfrac{5}{3}}" />
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\left(x+\dfrac12\right)-\left(x-\dfrac14\right)=\dfrac12+\dfrac14=\dfrac34>0" /> donc{" "}
                  <Math tex="\mathbf{x+\dfrac12>x-\dfrac14}" />
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="(x+y)^2-4xy=x^2+2xy+y^2-4xy=x^2-2xy+y^2=(x-y)^2\ge0" /> donc{" "}
                  <Math tex="\mathbf{(x+y)^2\ge4xy}" /> (toujours, quels que soient <Math tex="x" /> et <Math tex="y" />)
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Comparer"
            itemsLabel="2 comparaisons"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="\dfrac{14}{5}+\dfrac{7}{6}" /> et <Math tex="\dfrac{5}{14}+\dfrac{7}{6}" /></Item>
                <Item n={2}><Math tex="15^{16}+\dfrac{15}{16}" /> et <Math tex="16^{16}+\dfrac{15}{16}" /></Item>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="\dfrac{7}{6}" /> est commun. Or <Math tex="\dfrac{14}{5}>\dfrac{5}{14}" />, donc{" "}
                  <Math tex="\mathbf{\dfrac{14}{5}+\dfrac{7}{6}>\dfrac{5}{14}+\dfrac{7}{6}}" />
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\dfrac{15}{16}" /> est commun. Or <Math tex="15^{16}<16^{16}" />, donc{" "}
                  <Math tex="\mathbf{15^{16}+\dfrac{15}{16}<16^{16}+\dfrac{15}{16}}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Compléter"
            itemsLabel="4 compléments"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}>Si <Math tex="x>3" />, alors <Math tex="x+4>\ldots" /></Item>
                <Item n={2}>Si <Math tex="x\le-5" />, alors <Math tex="x+3\le\ldots" /></Item>
                <Item n={3}>Si <Math tex="x<3" />, alors <Math tex="x-5<\ldots" /></Item>
                <Item n={4}>Si <Math tex="x\ge8" />, alors <Math tex="x-12\ge\ldots" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}>Si <Math tex="x>3" />, alors <Math tex="x+4>\mathbf{7}" /></CorrectionCard>
                <CorrectionCard n={2}>Si <Math tex="x\le-5" />, alors <Math tex="x+3\le\mathbf{-2}" /></CorrectionCard>
                <CorrectionCard n={3}>Si <Math tex="x<3" />, alors <Math tex="x-5<\mathbf{-2}" /></CorrectionCard>
                <CorrectionCard n={4}>Si <Math tex="x\ge8" />, alors <Math tex="x-12\ge\mathbf{-4}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Montrer une inégalité"
            itemsLabel="2 démonstrations"
            items={
              <div className="space-y-2.5">
                <Item n={1}><Math tex="x" /> rationnel tel que <Math tex="x+3\ge7" />. Montrer que <Math tex="x\ge4" /></Item>
                <Item n={2}><Math tex="y" /> rationnel tel que <Math tex="y-3>2" />. Montrer que <Math tex="y>5" /></Item>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={1}>
                  On a <Math tex="x+3\ge7" />, en ajoutant <Math tex="-3" /> aux deux membres : <Math tex="x\ge7-3" />,
                  donc <Math tex="\mathbf{x\ge4}" />
                </CorrectionCard>
                <CorrectionCard n={2}>
                  On a <Math tex="y-3>2" />, en ajoutant <Math tex="3" /> aux deux membres : <Math tex="y>2+3" />, donc{" "}
                  <Math tex="\mathbf{y>5}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Comparer"
            items={
              <StatementBox>
                <Math tex="\dfrac{-12}{13}+9^{2021}" /> et <Math tex="\dfrac{-11}{13}+9^{2022}" />
              </StatementBox>
            }
            correction={
              <StatementCorrection>
                <p>On a <Math tex="\dfrac{-12}{13}<\dfrac{-11}{13}" /> et <Math tex="9^{2021}<9^{2022}" /></p>
                <p>
                  D&apos;après la propriété de l&apos;addition des inégalités :{" "}
                  <Math tex="\mathbf{\dfrac{-12}{13}+9^{2021}<\dfrac{-11}{13}+9^{2022}}" />
                </p>
              </StatementCorrection>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Comparer x et y"
            items={
              <StatementBox>
                <p><Math tex="x" /> et <Math tex="y" /> sont deux nombres rationnels tels que :</p>
                <p className="mt-1">
                  <Math tex="x=\dfrac{-2345}{135}\times\dfrac{2021}{2022}" /> et{" "}
                  <Math tex="y=\dfrac{-2346}{135}\times\dfrac{2021}{2022}" />
                </p>
              </StatementBox>
            }
            correction={
              <StatementCorrection>
                <p>
                  On a <Math tex="-2345>-2346" />, et <Math tex="135>0" />, donc{" "}
                  <Math tex="\dfrac{-2345}{135}>\dfrac{-2346}{135}" />
                </p>
                <p>
                  Or <Math tex="\dfrac{2021}{2022}>0" />, donc en multipliant les deux membres par{" "}
                  <Math tex="\dfrac{2021}{2022}" /> : <Math tex="\mathbf{x>y}" />
                </p>
              </StatementCorrection>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Compléter"
            itemsLabel="4 compléments"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}>Si <Math tex="x>3" />, alors <Math tex="3x>\ldots" /></Item>
                <Item n={2}>Si <Math tex="x\le7" />, alors <Math tex="-5x\le\ldots" /></Item>
                <Item n={3}>Si <Math tex="x<4" />, alors <Math tex="7x\ \ldots" /></Item>
                <Item n={4}>Si <Math tex="x\ge-8" />, alors <Math tex="-2x\ \ldots" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}>
                  Si <Math tex="x>3" />, alors <Math tex="3x>\mathbf{9}" />{" "}
                  <span className="text-xs text-foreground-muted">(on multiplie par 3&gt;0 : le sens ne change pas)</span>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  Si <Math tex="x\le7" />, alors <Math tex="-5x\ge\mathbf{-35}" />{" "}
                  <span className="text-xs text-foreground-muted">(on multiplie par -5&lt;0 : le sens change)</span>
                </CorrectionCard>
                <CorrectionCard n={3}>Si <Math tex="x<4" />, alors <Math tex="7x<\mathbf{28}" /></CorrectionCard>
                <CorrectionCard n={4}>Si <Math tex="x\ge-8" />, alors <Math tex="-2x\le\mathbf{16}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Montrer une inégalité"
            itemsLabel="2 démonstrations"
            items={
              <div className="space-y-2.5">
                <Item n={1}>
                  <Math tex="a" /> rationnel tel que <Math tex="a-3\le\dfrac{a}{2}-4" />. Montrer que <Math tex="a\le-2" />
                </Item>
                <Item n={2}>
                  <Math tex="b" /> rationnel tel que <Math tex="b-3(2b-4)\ge4b-2" />. Montrer que{" "}
                  <Math tex="b\le\dfrac{14}{9}" />
                </Item>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p><span className="font-bold text-green-700">1.</span> On a <Math tex="a-3\le\dfrac{a}{2}-4" /></p>
                  <p><Math tex="a-\dfrac{a}{2}\le-4+3" /></p>
                  <p><Math tex="\dfrac{a}{2}\le-1" /></p>
                  <p>donc <Math tex="\mathbf{a\le-2}" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p><span className="font-bold text-green-700">2.</span> On a <Math tex="b-3(2b-4)\ge4b-2" /></p>
                  <p><Math tex="b-6b+12\ge4b-2" /></p>
                  <p><Math tex="-5b+12\ge4b-2" /></p>
                  <p><Math tex="-9b\ge-14" /></p>
                  <p>
                    donc <Math tex="\mathbf{b\le\dfrac{14}{9}}" />{" "}
                    <span className="text-xs text-foreground-muted">(on divise par -9&lt;0 : le sens change)</span>
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Montrer une inégalité"
            itemsLabel="2 démonstrations"
            items={
              <div className="space-y-2.5">
                <Item n={1}>
                  <Math tex="x" /> et <Math tex="y" /> rationnels tels que <Math tex="x\ge3" /> et <Math tex="y\ge8" />.
                  Montrer que <Math tex="xy+7\ge31" />
                </Item>
                <Item n={2}>
                  <Math tex="x" /> et <Math tex="y" /> rationnels tels que <Math tex="x>4" /> et <Math tex="y<\dfrac{-5}{4}" />.
                  Montrer que <Math tex="xy<-5" />
                </Item>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>
                    <span className="font-bold text-green-700">1.</span> On a <Math tex="x\ge3>0" /> et{" "}
                    <Math tex="y\ge8>0" />, donc <Math tex="xy\ge3\times8=24" />
                  </p>
                  <p>d&apos;où <Math tex="xy+7\ge24+7" />, donc <Math tex="\mathbf{xy+7\ge31}" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>
                    <span className="font-bold text-green-700">2.</span> On a <Math tex="x>4>0" />, donc en multipliant{" "}
                    <Math tex="y<\dfrac{-5}{4}" /> par <Math tex="x" /> (positif) : <Math tex="xy<\dfrac{-5}{4}x" />
                  </p>
                  <p>
                    Or <Math tex="x>4" />, donc en multipliant par <Math tex="\dfrac{-5}{4}<0" /> (le sens change) :{" "}
                    <Math tex="\dfrac{-5}{4}x<\dfrac{-5}{4}\times4=-5" />
                  </p>
                  <p>
                    Donc <Math tex="xy<\dfrac{-5}{4}x<-5" />, c&apos;est-à-dire <Math tex="\mathbf{xy<-5}" />
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Encadrer"
            itemsLabel="4 expressions"
            items={
              <StatementBox>
                <p>
                  <Math tex="a" /> et <Math tex="b" /> sont deux nombres rationnels tels que :{" "}
                  <Math tex="4<a<5" /> et <Math tex="3<b<7" />
                </p>
                <p className="mt-2 text-foreground-muted">
                  Encadrer : <Math tex="a+b" /> · <Math tex="a-b" /> · <Math tex="2a+3b" /> · <Math tex="ab" />
                </p>
              </StatementBox>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="a+b"><Math tex="4+3<a+b<5+7" /> donc <Math tex="\mathbf{7<a+b<12}" /></CorrectionCard>
                <CorrectionCard n="a-b"><Math tex="4-7<a-b<5-3" /> donc <Math tex="\mathbf{-3<a-b<2}" /></CorrectionCard>
                <CorrectionCard n="2a+3b">
                  <Math tex="8<2a<10" /> et <Math tex="9<3b<21" /> donc <Math tex="\mathbf{17<2a+3b<31}" />
                </CorrectionCard>
                <CorrectionCard n="ab">
                  <Math tex="a,b>0" /> donc <Math tex="4\times3<ab<5\times7" />, c&apos;est-à-dire{" "}
                  <Math tex="\mathbf{12<ab<35}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="13"
            index={13}
            title="Encadrer"
            itemsLabel="4 expressions"
            items={
              <StatementBox>
                <p>
                  <Math tex="x" /> et <Math tex="y" /> sont deux nombres rationnels tels que :{" "}
                  <Math tex="-3<x<-2" /> et <Math tex="1<y<3" />
                </p>
                <p className="mt-2 text-foreground-muted">
                  Encadrer : <Math tex="x+y" /> · <Math tex="x-y" /> · <Math tex="2x-y" /> · <Math tex="xy" />
                </p>
              </StatementBox>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="x+y"><Math tex="-3+1<x+y<-2+3" /> donc <Math tex="\mathbf{-2<x+y<1}" /></CorrectionCard>
                <CorrectionCard n="x-y"><Math tex="-3-3<x-y<-2-1" /> donc <Math tex="\mathbf{-6<x-y<-3}" /></CorrectionCard>
                <CorrectionCard n="2x-y">
                  <Math tex="-6<2x<-4" /> et <Math tex="-3<-y<-1" /> donc <Math tex="\mathbf{-9<2x-y<-5}" />
                </CorrectionCard>
                <CorrectionCard n="xy">
                  <Math tex="x" /> négatif, <Math tex="y" /> positif, valeurs extrêmes <Math tex="(-3)\times3=-9" /> et{" "}
                  <Math tex="(-2)\times1=-2" />, donc <Math tex="\mathbf{-9<xy<-2}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="14"
            index={14}
            title="Encadrer"
            itemsLabel="3 expressions"
            items={
              <StatementBox>
                <p><Math tex="x" />, <Math tex="y" /> et <Math tex="z" /> sont des nombres rationnels tels que :</p>
                <p className="mt-1">
                  <Math tex="-3\le x\le-1" /> · <Math tex="2\le y\le6" /> et{" "}
                  <Math tex="\dfrac{-2}{3}\le\dfrac{2z+1}{3}\le1" />
                </p>
                <p className="mt-2 text-foreground-muted">
                  Encadrer : <Math tex="x-2y" /> · <Math tex="3x+y+8" /> · <Math tex="z" />
                </p>
              </StatementBox>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="x-2y">
                  <Math tex="y\in[2,6]\Rightarrow-2y\in[-12,-4]" /> ; avec <Math tex="x\in[-3,-1]" /> :{" "}
                  <Math tex="\mathbf{-15\le x-2y\le-5}" />
                </CorrectionCard>
                <CorrectionCard n="3x+y+8">
                  <Math tex="3x\in[-9,-3]" />, <Math tex="y\in[2,6]" /> donc <Math tex="3x+y\in[-7,3]" />, d&apos;où{" "}
                  <Math tex="\mathbf{1\le3x+y+8\le11}" />
                </CorrectionCard>
                <CorrectionCard n="z">
                  De <Math tex="\dfrac{-2}{3}\le\dfrac{2z+1}{3}\le1" />, on multiplie par <Math tex="3" /> :{" "}
                  <Math tex="-2\le2z+1\le3" />, on soustrait <Math tex="1" /> : <Math tex="-3\le2z\le2" />, on divise par{" "}
                  <Math tex="2" /> : <Math tex="\mathbf{\dfrac{-3}{2}\le z\le1}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="15"
            index={15}
            title="Résoudre les inéquations suivantes"
            itemsLabel="4 inéquations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="x+5\ge7" /></Item>
                <Item n={2}><Math tex="3x-2\le1" /></Item>
                <Item n={3}><Math tex="2x-5>2(x-1)-3" /></Item>
                <Item n={4}><Math tex="4x+2(x-1)\ge5x+8" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="x\ge7-5\Rightarrow x\ge\mathbf{2}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="3x\le3\Rightarrow x\le\mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="2x-5>2x-2-3\Rightarrow2x-5>2x-5\Rightarrow0>0" /> : impossible, donc{" "}
                  <Math tex="\mathbf{S=\varnothing}" />
                </CorrectionCard>
                <CorrectionCard n={4}><Math tex="6x-2\ge5x+8\Rightarrow x\ge\mathbf{10}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="16"
            index={16}
            title="Résoudre les inéquations suivantes"
            itemsLabel="8 inéquations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="x+3\le6" /></Item>
                <Item n={2}><Math tex="2x+5\ge0" /></Item>
                <Item n={3}><Math tex="5x+3>2x-1" /></Item>
                <Item n={4}><Math tex="-4x-8\ge2(x-4)" /></Item>
                <Item n={5}><Math tex="\dfrac{3x}{4}+\dfrac{1}{2}<1" /></Item>
                <Item n={6}><Math tex="\dfrac{3x-5}{4}\le\dfrac{2x-1}{8}" /></Item>
                <Item n={7}><Math tex="7x+8+2(3-x)>3(x+4)-(x-2)" /></Item>
                <Item n={8}><Math tex="\dfrac{x}{2}+\dfrac{x-1}{3}>\dfrac{x+2}{6}-1" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="x\le6-3\Rightarrow x\le\mathbf{3}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="2x\ge-5\Rightarrow x\ge\mathbf{\dfrac{-5}{2}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="3x>-4\Rightarrow x>\mathbf{\dfrac{-4}{3}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="-4x-8\ge2x-8\Rightarrow-6x\ge0\Rightarrow x\le\mathbf{0}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="3x+2<4\Rightarrow3x<2\Rightarrow x<\mathbf{\dfrac{2}{3}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="6x-10\le2x-1\Rightarrow4x\le9\Rightarrow x\le\mathbf{\dfrac{9}{4}}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="5x+14>2x+14\Rightarrow3x>0\Rightarrow x>\mathbf{0}" /></CorrectionCard>
                <CorrectionCard n={8}>
                  <Math tex="3x+2(x-1)>(x+2)-6\Rightarrow5x-2>x-4\Rightarrow4x>-2\Rightarrow x>\mathbf{\dfrac{-1}{2}}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="17"
            index={17}
            title="Ranger par ordre décroissant"
            items={
              <StatementBox>
                <Math tex="4{,}7\times10^{-3}\ \ ;\ \ -4{,}7\times10^{-2}\ \ ;\ \ 7{,}4\times10^{-3}\ \ ;\ \ -7\times10^{-2}" />
              </StatementBox>
            }
            correction={
              <StatementCorrection>
                <p>
                  On écrit les valeurs décimales : <Math tex="4{,}7\times10^{-3}=0{,}0047" /> ;{" "}
                  <Math tex="-4{,}7\times10^{-2}=-0{,}047" /> ; <Math tex="7{,}4\times10^{-3}=0{,}0074" /> ;{" "}
                  <Math tex="-7\times10^{-2}=-0{,}07" />
                </p>
                <p className="font-semibold">
                  Ordre décroissant :{" "}
                  <Math tex="\mathbf{7{,}4\times10^{-3}\ >\ 4{,}7\times10^{-3}\ >\ -4{,}7\times10^{-2}\ >\ -7\times10^{-2}}" />
                </p>
              </StatementCorrection>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
