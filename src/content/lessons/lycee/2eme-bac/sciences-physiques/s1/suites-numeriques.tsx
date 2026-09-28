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
  title: "Suites numériques · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet des suites numériques pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : suites arithmétiques et géométriques, limites, critères de convergence, suites définies par récurrence, avec exercices intégralement corrigés (dont plusieurs types d'examen du Bac).",
  kicker: "2ème Bac Sciences Physiques · Semestre 1",
  heroTitle: "Suites numériques",
  heroSubtitle:
    "Majoration, monotonie, limites et récurrence : les techniques qui permettent d'étudier complètement une suite numérique et de démontrer sa convergence.",
  footerNote: "Suites numériques · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 1.",
  sections: [
    { id: "cours-generalites", label: "Généralités" },
    { id: "cours-limites", label: "Limites" },
    { id: "cours-criteres", label: "Critères" },
    { id: "cours-recurrentes", label: "Suites récurrentes" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function CourseBlock({ numeral, title, children }: { numeral: ReactNode; title: string; children: ReactNode }) {
  return (
    <article className="mb-8 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
          {numeral}
        </span>
        <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </article>
  );
}

const BOX_STYLES = {
  def: { wrap: "border-l-4 border-orange-400 bg-orange-100/50", title: "text-orange-700" },
  prop: { wrap: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5", title: "text-brand-700" },
} as const;

function Box({ title, tone, children }: { title: string; tone: keyof typeof BOX_STYLES; children: ReactNode }) {
  const s = BOX_STYLES[tone];
  return (
    <div className={`rounded-r-xl p-4 text-sm sm:text-base ${s.wrap}`}>
      <p className={`mb-1 font-semibold ${s.title}`}>{title}</p>
      <div className="text-foreground-muted">{children}</div>
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
          { value: "11", label: "exercices corrigés" },
          { value: "7", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-generalites"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-center gap-2 font-display text-6xl font-extrabold text-white sm:text-7xl">
            <Math tex="(u_n)" />
          </div>
        }
      />

      {/* ===================== I. GÉNÉRALITÉS ===================== */}
      <LessonSection
        id="cours-generalites"
        kicker="01 · Rappels indispensables"
        title="Généralités, suites arithmétiques et géométriques"
        tone="light"
        description="Bornée, monotone, arithmétique ou géométrique : le vocabulaire de base et les formules à connaître par cœur."
      >
        <CourseBlock numeral="I" title="Suite majorée, minorée, bornée, monotone">
          <Box title="Définitions" tone="def">
            <div className="space-y-1.5">
              <p>
                <Math tex="(u_n)" /> est <strong>majorée</strong> par <Math tex="M" /> si{" "}
                <Math tex="\forall n,\ u_n\leq M" /> ; <strong>minorée</strong> par <Math tex="m" /> si{" "}
                <Math tex="\forall n,\ u_n\geq m" /> ; <strong>bornée</strong> si elle est majorée et minorée.
              </p>
              <p>
                <Math tex="(u_n)" /> est <strong>croissante</strong> si <Math tex="\forall n,\ u_{n+1}\geq u_n" /> ;{" "}
                <strong>décroissante</strong> si <Math tex="\forall n,\ u_{n+1}\leq u_n" />.
              </p>
            </div>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Suite arithmétique (rappel)">
          <Box title="Définition et formules" tone="def">
            <Math tex="(u_n)" /> est arithmétique de raison <Math tex="r" /> si <Math tex="u_{n+1}=u_n+r" /> pour
            tout <Math tex="n" />.
          </Box>
          <Callout variant="success" title="Formules à connaître">
            <div className="space-y-1.5">
              <p>
                <Math tex="u_n=u_p+(n-p)r" />.
              </p>
              <p>
                Somme de termes consécutifs :{" "}
                <Math tex="S=u_p+u_{p+1}+\cdots+u_n=\dfrac{(\text{1er terme}+\text{dernier terme})\times(\text{nombre de termes})}{2}" />
                .
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Suite géométrique (rappel)">
          <Box title="Définition et formules" tone="def">
            <Math tex="(u_n)" /> est géométrique de raison <Math tex="q\neq0" /> si <Math tex="u_{n+1}=q\,u_n" />{" "}
            pour tout <Math tex="n" />.
          </Box>
          <Callout variant="success" title="Formules à connaître">
            <div className="space-y-1.5">
              <p>
                <Math tex="u_n=u_p\times q^{\,n-p}" />.
              </p>
              <p>
                Si <Math tex="q\neq1" /> : <Math tex="S=u_p+u_{p+1}+\cdots+u_n=u_p\times\dfrac{q^{\,n-p+1}-1}{q-1}" />
                .
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. LIMITES ===================== */}
      <LessonSection
        id="cours-limites"
        kicker="02 · Convergence et divergence"
        title="Limite d'une suite numérique"
        tone="muted"
        description="Les mêmes règles opératoires que pour les fonctions, avec les limites de référence qⁿ et nʳ."
      >
        <CourseBlock numeral="IV" title="Limite finie, limite infinie, convergence">
          <Box title="Vocabulaire" tone="def">
            Si <Math tex="\displaystyle\lim_{n\to+\infty}u_n=l\in\mathbb R" />, la suite est dite{" "}
            <strong>convergente</strong>. Si la limite est infinie ou n&apos;existe pas, la suite est{" "}
            <strong>divergente</strong>.
          </Box>
          <Callout variant="success" title="Propriété fondamentale">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Si une suite admet une limite, cette limite est unique.</li>
              <li>Toute suite croissante et majorée est convergente.</li>
              <li>Toute suite décroissante et minorée est convergente.</li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Opérations et limites de référence">
          <Box title="Opérations sur les limites" tone="prop">
            Les règles opératoires (somme, produit, quotient) sont les mêmes que pour les fonctions. En
            particulier, si <Math tex="\displaystyle\lim u_n=l" /> et <Math tex="\displaystyle\lim v_n=l'" />,
            alors <Math tex="\displaystyle\lim(u_n+v_n)=l+l'" />.
          </Box>
          <Callout variant="warning" title="Limites de référence">
            <div className="space-y-1.5">
              <p>
                <Math tex="q>1\Rightarrow\lim q^n=+\infty" /> ; <Math tex="q=1\Rightarrow\lim q^n=1" /> ;{" "}
                <Math tex="-1<q<1\Rightarrow\lim q^n=0" /> ; si <Math tex="q\leq-1" />, <Math tex="(q^n)" />{" "}
                n&apos;a pas de limite.
              </p>
              <p>
                <Math tex="r>0\Rightarrow\lim n^r=+\infty" /> ; <Math tex="r<0\Rightarrow\lim n^r=0" />.
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. CRITÈRES DE CONVERGENCE ===================== */}
      <LessonSection
        id="cours-criteres"
        kicker="03 · Comparer pour conclure"
        title="Critères de convergence et suites composées"
        tone="light"
        description="Le théorème d'encadrement (des gendarmes) et les critères de comparaison permettent de conclure sans calculer directement la limite."
      >
        <CourseBlock numeral="VI" title="Critères de comparaison et d'encadrement">
          <Box title="Propriétés" tone="prop">
            Soient <Math tex="(u_n)" />, <Math tex="(v_n)" />, <Math tex="(w_n)" /> trois suites, à partir d&apos;un
            certain rang :
          </Box>
          <div className="space-y-1.5 text-sm sm:text-base">
            <p>
              <Math tex="(1)\ \ v_n\leq u_n\leq w_n\ \text{et}\ \lim v_n=\lim w_n=l\ \Longrightarrow\ \lim u_n=l" />{" "}
              (théorème des gendarmes).
            </p>
            <p>
              <Math tex="(2)\ \ v_n\leq u_n\ \text{et}\ \lim v_n=+\infty\ \Longrightarrow\ \lim u_n=+\infty" />.
            </p>
            <p>
              <Math tex="(3)\ \ v_n\geq u_n\ \text{et}\ \lim v_n=-\infty\ \Longrightarrow\ \lim u_n=-\infty" />.
            </p>
            <p>
              <Math tex="(4)\ \ |u_n-l|\leq v_n\ \text{et}\ \lim v_n=0\ \Longrightarrow\ \lim u_n=l" />.
            </p>
          </div>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Suite de la forme vₙ = f(uₙ)">
          <Box title="Propriété" tone="prop">
            Si <Math tex="\displaystyle\lim_{n\to+\infty}u_n=l" /> et si <Math tex="f" /> est continue en{" "}
            <Math tex="l" />, alors la suite <Math tex="v_n=f(u_n)" /> converge vers <Math tex="f(l)" /> :
          </Box>
          <MathBlock tex="\lim_{n\to+\infty}u_n=l\ \text{ et }\ f\text{ continue en }l\ \Longrightarrow\ \lim_{n\to+\infty}f(u_n)=f(l)" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. SUITES RÉCURRENTES ===================== */}
      <LessonSection
        id="cours-recurrentes"
        kicker="04 · Le cas uₙ₊₁ = f(uₙ)"
        title="Suites définies par une relation de récurrence"
        tone="muted"
        description="La méthode classique du Bac : bornes par récurrence, monotonie, convergence, puis identification de la limite comme point fixe de f."
      >
        <CourseBlock numeral="VIII" title="Théorème du point fixe">
          <Box title="Théorème" tone="prop">
            Soit <Math tex="(u_n)" /> définie par <Math tex="u_{n+1}=f(u_n)" />. Si :
          </Box>
          <ul className="list-disc space-y-1.5 pl-5 text-sm sm:text-base">
            <li>
              <Math tex="f" /> est continue sur un intervalle <Math tex="I" /> tel que <Math tex="f(I)\subset I" />,
            </li>
            <li>
              <Math tex="u_0\in I" />,
            </li>
            <li>
              <Math tex="(u_n)" /> converge (vers <Math tex="l" />),
            </li>
          </ul>
          <Callout variant="success" title="Conclusion">
            alors <Math tex="l\in I" /> vérifie l&apos;équation <Math tex="f(l)=l" /> (<Math tex="l" /> est un
            <strong> point fixe</strong> de <Math tex="f" />).
          </Callout>
          <Callout variant="warning" title="Méthode complète (type Bac)">
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>Montrer par récurrence que <Math tex="(u_n)" /> reste dans un intervalle <Math tex="I" /> stable par <Math tex="f" />.</li>
              <li>Montrer que <Math tex="(u_n)" /> est monotone (souvent via le signe de <Math tex="f(x)-x" />).</li>
              <li>Conclure à la convergence (monotone + bornée).</li>
              <li>Résoudre <Math tex="f(l)=l" /> dans <Math tex="I" /> pour identifier la limite.</li>
            </ol>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Suites numériques"
        tone="light"
        description="11 exercices corrigés : suites arithmétiques et géométriques, limites, encadrement, suites arithmético-géométriques, homographiques et récurrentes de type Bac."
      >
        <ExerciseGroup
          total={11}
          celebrationTitle="Bravo, les 11 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre suites numériques est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Suite arithmétique"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(u_n)" /> arithmétique avec <Math tex="u_0=5" /> et <Math tex="r=3" />. Calculer{" "}
                <Math tex="u_n" />, <Math tex="u_{20}" />, puis la somme <Math tex="S=u_0+u_1+\cdots+u_{20}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="u_n=u_0+nr=5+3n" />, donc <Math tex="u_{20}=5+60=65" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\dfrac{(u_0+u_{20})\times21}{2}=\dfrac{(5+65)\times21}{2}=\dfrac{70\times21}{2}=735" />
                  .
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Suite géométrique"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(v_n)" /> géométrique avec <Math tex="v_0=3" /> et <Math tex="q=2" />. Calculer{" "}
                <Math tex="v_n" />, <Math tex="v_{10}" />, puis la somme <Math tex="T=v_0+v_1+\cdots+v_{10}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="v_n=v_0\,q^n=3\times2^n" />, donc <Math tex="v_{10}=3\times1024=3072" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="T=v_0\times\dfrac{q^{11}-1}{q-1}=3\times\dfrac{2048-1}{1}=3\times2047=6141" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Calculs de limites usuelles"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{n\to+\infty}\dfrac{3n^2-5n+1}{2n^2+n+7}" />,{" "}
                <Math tex="\displaystyle\lim_{n\to+\infty}\left(\sqrt{n+1}-\sqrt n\right)" /> et{" "}
                <Math tex="\displaystyle\lim_{n\to+\infty}\dfrac{5^n}{3^n+5^n}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En divisant par <Math tex="n^2" /> : <Math tex="\dfrac{3n^2-5n+1}{2n^2+n+7}\to\dfrac32" />.
                </p>
                <p>
                  <Math tex="\sqrt{n+1}-\sqrt n=\dfrac{1}{\sqrt{n+1}+\sqrt n}\to0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac{5^n}{3^n+5^n}=\dfrac{1}{\left(\frac35\right)^n+1}\to\dfrac{1}{0+1}=1" /> car{" "}
                  <Math tex="\left(\frac35\right)^n\to0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Théorème des gendarmes"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="u_n=\dfrac{2+\sin n}{\sqrt n}" /> pour <Math tex="n\geq1" />. Montrer que{" "}
                <Math tex="\displaystyle\lim_{n\to+\infty}u_n=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Comme <Math tex="-1\leq\sin n\leq1" />, on a <Math tex="1\leq2+\sin n\leq3" />, donc :
                </p>
                <p>
                  <Math tex="\dfrac{1}{\sqrt n}\leq u_n\leq\dfrac{3}{\sqrt n}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Or <Math tex="\displaystyle\lim\dfrac1{\sqrt n}=\lim\dfrac3{\sqrt n}=0" />, donc, d&apos;après le
                  théorème des gendarmes, <Math tex="\displaystyle\lim_{n\to+\infty}u_n=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Convergence par composition"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="u_n=1+\dfrac{1}{n+1}" /> et <Math tex="v_n=\sqrt{3u_n+1}" /> pour{" "}
                <Math tex="n\geq0" />. Calculer <Math tex="\displaystyle\lim_{n\to+\infty}v_n" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\displaystyle\lim_{n\to+\infty}u_n=1+0=1" />.
                </p>
                <p>
                  La fonction <Math tex="f(x)=\sqrt{3x+1}" /> est continue en <Math tex="1" /> (et{" "}
                  <Math tex="v_n=f(u_n)" />), donc :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{n\to+\infty}v_n=f(1)=\sqrt{3\times1+1}=\sqrt4=2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Suite arithmético-géométrique (I)"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(u_n)" /> définie par <Math tex="u_0=13" /> et{" "}
                <Math tex="u_{n+1}=\dfrac12u_n+7" />. 1) Montrer que <Math tex="u_n<14" /> pour tout{" "}
                <Math tex="n" />. 2) On pose <Math tex="v_n=14-u_n" /> : montrer que <Math tex="(v_n)" /> est
                géométrique, en déduire <Math tex="u_n" /> puis <Math tex="\displaystyle\lim u_n" />. 3) Trouver le
                plus petit entier <Math tex="n" /> tel que <Math tex="u_n>13{,}99" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) Par récurrence : <Math tex="u_0=13<14" />. Si <Math tex="u_n<14" />, alors{" "}
                  <Math tex="u_{n+1}=\frac12u_n+7<\frac12(14)+7=14" />. Donc <Math tex="u_n<14" /> pour tout{" "}
                  <Math tex="n" />.
                </p>
                <p>
                  2) <Math tex="v_{n+1}=14-u_{n+1}=7-\frac12u_n=\frac12(14-u_n)=\frac12v_n" /> : <Math tex="(v_n)" />{" "}
                  est géométrique de raison <Math tex="\frac12" />, <Math tex="v_0=1" />, donc{" "}
                  <Math tex="v_n=\left(\frac12\right)^n" />.
                </p>
                <p>
                  D&apos;où <Math tex="u_n=14-\left(\dfrac12\right)^n" />, et{" "}
                  <Math tex="\displaystyle\lim_{n\to+\infty}u_n=14" />.
                </p>
                <p className="font-semibold text-green-700">
                  3) <Math tex="u_n>13{,}99\iff\left(\frac12\right)^n<0{,}01" />. Comme{" "}
                  <Math tex="\left(\frac12\right)^6=0{,}015625>0{,}01" /> et{" "}
                  <Math tex="\left(\frac12\right)^7=0{,}0078125<0{,}01" />, le plus petit entier est{" "}
                  <Math tex="n=7" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Suite arithmético-géométrique (II)"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(u_n)" /> définie par <Math tex="u_0=4" /> et{" "}
                <Math tex="u_{n+1}=\dfrac25u_n+3" />. 1) Montrer que <Math tex="u_n<5" /> pour tout{" "}
                <Math tex="n" />. 2) On pose <Math tex="v_n=5-u_n" /> : montrer que <Math tex="(v_n)" /> est
                géométrique et en déduire <Math tex="u_n" />. 3) Montrer que <Math tex="(u_n)" /> est croissante,
                puis calculer <Math tex="\displaystyle\lim u_n" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="u_0=4<5" /> ; si <Math tex="u_n<5" />, alors{" "}
                  <Math tex="u_{n+1}=\frac25u_n+3<\frac25(5)+3=5" />. Donc <Math tex="u_n<5" /> pour tout{" "}
                  <Math tex="n" />.
                </p>
                <p>
                  2) <Math tex="v_{n+1}=5-u_{n+1}=2-\frac25u_n=\frac25(5-u_n)=\frac25v_n" /> : géométrique de raison{" "}
                  <Math tex="\frac25" />, <Math tex="v_0=1" />, donc <Math tex="v_n=\left(\frac25\right)^n" /> et{" "}
                  <Math tex="u_n=5-\left(\dfrac25\right)^n" />.
                </p>
                <p className="font-semibold text-green-700">
                  3) <Math tex="u_{n+1}-u_n=v_n-v_{n+1}=\frac35v_n=\frac35\left(\frac25\right)^n>0" /> :{" "}
                  <Math tex="(u_n)" /> est croissante. Comme <Math tex="\left(\frac25\right)^n\to0" />,{" "}
                  <Math tex="\displaystyle\lim_{n\to+\infty}u_n=5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Suite homographique (racine double)"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(u_n)" /> définie par <Math tex="u_0=2" /> et{" "}
                <Math tex="u_{n+1}=\dfrac{3u_n-1}{u_n+1}" />. 1) Montrer par récurrence que{" "}
                <Math tex="u_n>1" /> pour tout <Math tex="n" />. 2) On pose{" "}
                <Math tex="w_n=\dfrac{1}{u_n-1}" /> : montrer que <Math tex="(w_n)" /> est arithmétique de raison{" "}
                <Math tex="\dfrac12" />. 3) En déduire <Math tex="u_n" /> en fonction de <Math tex="n" />, puis{" "}
                <Math tex="\displaystyle\lim u_n" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="u_0=2>1" />. Supposons <Math tex="u_n>1" /> : alors{" "}
                  <Math tex="u_{n+1}-1=\dfrac{3u_n-1-(u_n+1)}{u_n+1}=\dfrac{2(u_n-1)}{u_n+1}" />. Comme{" "}
                  <Math tex="u_n-1>0" /> et <Math tex="u_n+1>0" />, on a <Math tex="u_{n+1}-1>0" />, donc{" "}
                  <Math tex="u_{n+1}>1" />.
                </p>
                <p>
                  2) D&apos;après ce qui précède, <Math tex="\dfrac{1}{u_{n+1}-1}=\dfrac{u_n+1}{2(u_n-1)}=\dfrac12+\dfrac{1}{u_n-1}" />
                  , soit <Math tex="w_{n+1}=w_n+\dfrac12" /> : <Math tex="(w_n)" /> est arithmétique de raison{" "}
                  <Math tex="\dfrac12" />, avec <Math tex="w_0=\dfrac{1}{2-1}=1" />.
                </p>
                <p>
                  Donc <Math tex="w_n=1+\dfrac n2=\dfrac{n+2}{2}" />, d&apos;où{" "}
                  <Math tex="u_n-1=\dfrac{1}{w_n}=\dfrac{2}{n+2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  3) <Math tex="u_n=1+\dfrac{2}{n+2}" />, donc <Math tex="\displaystyle\lim_{n\to+\infty}u_n=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Suite récurrente uₙ₊₁ = f(uₙ)"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\sqrt{2x+3}" /> et <Math tex="(u_n)" /> définie par <Math tex="u_0=0" /> et{" "}
                <Math tex="u_{n+1}=f(u_n)" />. 1) Montrer que <Math tex="0\leq u_n\leq3" /> pour tout{" "}
                <Math tex="n" />. 2) Montrer que <Math tex="(u_n)" /> est croissante. 3) En déduire que{" "}
                <Math tex="(u_n)" /> converge et calculer sa limite.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="u_0=0\in[0,3]" />. Si <Math tex="0\leq u_n\leq3" />, alors{" "}
                  <Math tex="3\leq2u_n+3\leq9" />, donc <Math tex="u_{n+1}=\sqrt{2u_n+3}\in[\sqrt3,3]\subset[0,3]" />
                  . Donc <Math tex="0\leq u_n\leq3" /> pour tout <Math tex="n" />.
                </p>
                <p>
                  2) Pour <Math tex="x\in[0,3]" /> : <Math tex="f(x)\geq x\iff2x+3\geq x^2\iff x^2-2x-3\leq0\iff(x-3)(x+1)\leq0" />
                  , vrai sur <Math tex="[-1,3]\supset[0,3]" />. Donc <Math tex="u_{n+1}=f(u_n)\geq u_n" /> :{" "}
                  <Math tex="(u_n)" /> est croissante.
                </p>
                <p className="font-semibold text-green-700">
                  3) <Math tex="(u_n)" /> est croissante et majorée par <Math tex="3" /> : elle converge vers{" "}
                  <Math tex="l\in[0,3]" />. Par continuité de <Math tex="f" />, <Math tex="l=\sqrt{2l+3}" />, soit{" "}
                  <Math tex="l^2-2l-3=0" />, donc <Math tex="l=3" /> ou <Math tex="l=-1" />. Comme{" "}
                  <Math tex="l\in[0,3]" />, <Math tex="\displaystyle\lim_{n\to+\infty}u_n=3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Somme télescopique"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="S_n=\displaystyle\sum_{k=1}^{n}\dfrac{1}{k(k+1)}" /> pour <Math tex="n\geq1" />.
                Montrer que <Math tex="S_n=1-\dfrac{1}{n+1}" />, puis calculer{" "}
                <Math tex="\displaystyle\lim_{n\to+\infty}S_n" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour tout <Math tex="k\geq1" /> : <Math tex="\dfrac{1}{k(k+1)}=\dfrac1k-\dfrac1{k+1}" /> (réduction
                  au même dénominateur).
                </p>
                <p>
                  Par télescopage :{" "}
                  <Math tex="S_n=\left(1-\dfrac12\right)+\left(\dfrac12-\dfrac13\right)+\cdots+\left(\dfrac1n-\dfrac1{n+1}\right)=1-\dfrac{1}{n+1}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\displaystyle\lim_{n\to+\infty}S_n=1-0=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Divergence par comparaison"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="u_n=n-\cos n" /> pour <Math tex="n\geq0" />. Montrer que{" "}
                <Math tex="\displaystyle\lim_{n\to+\infty}u_n=+\infty" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Comme <Math tex="\cos n\leq1" /> pour tout <Math tex="n" />, on a{" "}
                  <Math tex="u_n=n-\cos n\geq n-1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Or <Math tex="\displaystyle\lim_{n\to+\infty}(n-1)=+\infty" />, donc d&apos;après le critère de
                  comparaison, <Math tex="\displaystyle\lim_{n\to+\infty}u_n=+\infty" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
