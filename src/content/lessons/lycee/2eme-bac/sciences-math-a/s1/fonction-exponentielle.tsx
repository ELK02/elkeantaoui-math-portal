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
  title: "La fonction Exponentielle · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet sur la fonction exponentielle népérienne pour la 2ème année Baccalauréat Sciences Mathématiques (Semestre 1) : définition comme réciproque de ln, écriture e^x, dérivée, limites de référence et croissances comparées, exponentielle de base a et puissances réelles, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "La fonction Exponentielle",
  heroSubtitle:
    "La fonction réciproque de ln : elle transforme les sommes en produits. Écriture eˣ, dérivée, croissances comparées et exponentielles de base a.",
  footerNote: "La fonction Exponentielle · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-definition", label: "Définition" },
    { id: "cours-ecriture", label: "L'écriture eˣ" },
    { id: "cours-etude", label: "Dérivée & limites" },
    { id: "cours-base-a", label: "Base a & puissances" },
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
          { value: "12", label: "exercices corrigés" },
          { value: "5", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-definition"
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
            <Math tex="e^x" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · La réciproque de ln"
        title="Définition de la fonction exponentielle"
        tone="light"
        description="ln réalise une bijection de ]0,+∞[ vers ℝ. Sa fonction réciproque est la fonction exponentielle."
      >
        <CourseBlock numeral="I" title="Définition et propriétés immédiates">
          <Box title="Propriété et définition" tone="def">
            La fonction <Math tex="\ln" /> est continue et strictement croissante sur <Math tex="]0,+\infty[" />,
            et <Math tex="\ln(]0,+\infty[)=\mathbb R" />. D&apos;après le théorème de la bijection, <Math tex="\ln" />{" "}
            réalise une bijection de <Math tex="]0,+\infty[" /> vers <Math tex="\mathbb R" />. Sa fonction
            réciproque, définie de <Math tex="\mathbb R" /> vers <Math tex="]0,+\infty[" />, s&apos;appelle la{" "}
            <strong className="text-foreground">fonction exponentielle népérienne</strong>, notée{" "}
            <Math tex="\exp" />.
          </Box>
          <Callout variant="success" title="Propriétés immédiates">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="(\forall x\in\mathbb R)\big(\ln(\exp(x))=x\big)" /> et{" "}
                <Math tex="(\forall x>0)\big(\exp(\ln(x))=x\big)" />.
              </li>
              <li>
                <Math tex="(\forall x\in\mathbb R)(\forall y>0)\big(\ln(y)=x \iff y=\exp(x)\big)" />.
              </li>
              <li>
                <Math tex="\exp(0)=1" /> (car <Math tex="\ln(1)=0" />) et <Math tex="\exp(1)=e" /> (car{" "}
                <Math tex="\ln(e)=1" />).
              </li>
            </ul>
          </Callout>
          <Box title="Propriété (monotonie)" tone="prop">
            La fonction <Math tex="\exp" /> est continue et strictement croissante sur <Math tex="\mathbb R" />, et{" "}
            <Math tex="(\forall x\in\mathbb R)(\exp(x)>0)" />.
          </Box>
          <Callout variant="warning" title="Conséquences">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="(\forall x\in\mathbb R)(\forall y\in\mathbb R)\big(\exp(x)=\exp(y)\iff x=y\big)" />.
              </li>
              <li>
                <Math tex="(\forall x\in\mathbb R)(\forall y\in\mathbb R)\big(\exp(x)\leqslant\exp(y)\iff x\leqslant y\big)" />
                .
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. L'ÉCRITURE E^X ===================== */}
      <LessonSection
        id="cours-ecriture"
        kicker="02 · Une notation naturelle"
        title="L'écriture eˣ et les propriétés algébriques"
        tone="muted"
        description="exp(1)=e permet de retrouver toutes les puissances de e, puis d'étendre la notation eˣ à tout réel x."
      >
        <CourseBlock numeral="II" title="De exp(r) à eˣ">
          <Box title="Propriété" tone="prop">
            <Math tex="(\forall x\in\mathbb R)(\forall r\in\mathbb Q)\big(\exp(rx)=(\exp(x))^r\big)" />.
          </Box>
          <Callout variant="info" title="Démonstration">
            <Math tex="\ln\big((\exp(x))^r\big)=r\ln(\exp(x))=rx=\ln(\exp(rx))" />. Comme <Math tex="\ln" /> est
            injective, on obtient <Math tex="(\exp(x))^r=\exp(rx)" />.
          </Callout>
          <Box title="Notation" tone="def">
            En particulier, pour <Math tex="r\in\mathbb Q" />, <Math tex="\exp(r)=(\exp(1))^r=e^r" />. On généralise
            cette écriture à tout réel : pour tout <Math tex="x\in\mathbb R" />, on note{" "}
            <Math tex="\exp(x)=e^x" />.
          </Box>
          <Callout variant="success" title="Propriétés algébriques (à connaître par cœur)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="e^{x+y}=e^x\times e^y" /> ; <Math tex="e^{-x}=\dfrac1{e^x}" /> ;{" "}
                <Math tex="e^{x-y}=\dfrac{e^x}{e^y}" />.
              </li>
              <li>
                <Math tex="(e^x)^r=e^{rx}" /> (<Math tex="r\in\mathbb Q" />, généralisé à{" "}
                <Math tex="r\in\mathbb R" />).
              </li>
              <li>
                <Math tex="(\forall x>0)\big(e^{\ln x}=x\big)" /> et <Math tex="(\forall x\in\mathbb R)\big(\ln(e^x)=x\big)" />
                .
              </li>
              <li>
                <Math tex="e^x=e^y\iff x=y" /> ; <Math tex="e^x\leqslant e^y\iff x\leqslant y" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. DÉRIVÉE & LIMITES ===================== */}
      <LessonSection
        id="cours-etude"
        kicker="03 · Une fonction égale à sa dérivée"
        title="Dérivée de exp, limites de référence et croissances comparées"
        tone="light"
        description="La propriété exp'=exp est la signature de cette fonction. Elle domine toutes les puissances de x à l'infini."
      >
        <CourseBlock numeral="III" title="Dérivée de la fonction exponentielle">
          <Box title="Propriété" tone="prop">
            La fonction <Math tex="\exp" /> est dérivable sur <Math tex="\mathbb R" /> et{" "}
            <Math tex="(\forall x\in\mathbb R)\big(\exp'(x)=\exp(x)\big)" />, c&apos;est-à-dire{" "}
            <Math tex="(e^x)'=e^x" />.
          </Box>
          <Callout variant="info" title="Démonstration">
            <Math tex="\exp=\ln^{-1}" /> et <Math tex="\ln" /> est dérivable sur <Math tex="]0,+\infty[" /> avec{" "}
            <Math tex="\ln'(x)=\dfrac1x\neq0" />. Donc <Math tex="\exp" /> est dérivable sur{" "}
            <Math tex="\ln(]0,+\infty[)=\mathbb R" /> et, pour tout <Math tex="x\in\mathbb R" /> :
            <MathBlock tex="\exp'(x)=\dfrac{1}{\ln'(\exp(x))}=\dfrac{1}{\frac{1}{\exp(x)}}=\exp(x)" />
          </Callout>
          <Box title="Corollaire" tone="prop">
            Si <Math tex="u" /> est dérivable sur un intervalle <Math tex="I" />, alors <Math tex="e^{u}" /> est
            dérivable sur <Math tex="I" /> et <Math tex="\big(e^{u}\big)'=u'\,e^{u}" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Limites de référence et croissances comparées">
          <Callout variant="success" title="Limites usuelles à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\displaystyle\lim_{x\to+\infty}e^x=+\infty" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to-\infty}e^x=0" />.
              </li>
              <li>
                <Math tex="\displaystyle\lim_{x\to0}\dfrac{e^x-1}{x}=1" /> (nombre dérivé de <Math tex="\exp" />{" "}
                en <Math tex="0" />).
              </li>
              <li>
                <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{e^x}{x}=+\infty" />, et plus généralement pour{" "}
                <Math tex="n\in\mathbb N^*" />, <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{e^x}{x^n}=+\infty" />
                .
              </li>
              <li>
                <Math tex="\displaystyle\lim_{x\to-\infty}x\,e^x=0" />, et plus généralement pour{" "}
                <Math tex="n\in\mathbb N^*" />, <Math tex="\displaystyle\lim_{x\to-\infty}x^n e^x=0" /> (
                <strong>croissances comparées</strong>).
              </li>
            </ul>
          </Callout>
          <Callout variant="info" title="Courbe et tangente">
            Les courbes <Math tex="(C_{\ln})" /> et <Math tex="(C_{\exp})" /> sont symétriques par rapport à la
            droite <Math tex="(\Delta):y=x" /> (car <Math tex="\exp=\ln^{-1}" />). La tangente à{" "}
            <Math tex="(C_{\exp})" /> au point d&apos;abscisse <Math tex="0" /> a pour équation{" "}
            <Math tex="y=x+1" /> (car <Math tex="\exp(0)=1" /> et <Math tex="\exp'(0)=1" />).
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. BASE A & PUISSANCES ===================== */}
      <LessonSection
        id="cours-base-a"
        kicker="04 · Généraliser à d'autres bases"
        title="Exponentielle de base a et puissances réelles"
        tone="muted"
        description="On construit, comme pour ln, une exponentielle adaptée à chaque base a, ce qui donne un sens à aˣ pour tout réel x."
      >
        <CourseBlock numeral="V" title="Exponentielle de base a">
          <Box title="Propriété et définition" tone="def">
            Soit <Math tex="a>0" />, <Math tex="a\neq1" />. La fonction <Math tex="\log_a" /> est continue et
            strictement monotone sur <Math tex="]0,+\infty[" />, donc elle réalise une bijection de{" "}
            <Math tex="]0,+\infty[" /> vers <Math tex="\mathbb R" />. Sa fonction réciproque, de{" "}
            <Math tex="\mathbb R" /> vers <Math tex="]0,+\infty[" />, s&apos;appelle{" "}
            <strong className="text-foreground">l&apos;exponentielle de base a</strong>, notée{" "}
            <Math tex="\exp_a" />.
          </Box>
          <Box title="Propriété" tone="prop">
            <Math tex="(\forall x\in\mathbb R)\big(\exp_a(x)=e^{x\ln a}\big)" />.
          </Box>
          <Callout variant="info" title="Démonstration">
            Posons <Math tex="y=\exp_a(x)" />, donc <Math tex="y>0" /> et{" "}
            <Math tex="x=\log_a(y)=\dfrac{\ln(y)}{\ln(a)}" />. D&apos;où <Math tex="\ln(y)=x\ln(a)" />, donc{" "}
            <Math tex="y=e^{x\ln a}" />.
          </Callout>
          <Callout variant="success" title="Dérivée et monotonie">
            <p>
              <Math tex="\exp_a" /> est dérivable sur <Math tex="\mathbb R" /> et{" "}
              <Math tex="\exp_a'(x)=\ln(a)\,e^{x\ln a}=\ln(a)\exp_a(x)" />.
            </p>
            <p className="mt-1.5">
              Si <Math tex="a>1" />, <Math tex="\ln(a)>0" /> donc <Math tex="\exp_a" /> est strictement croissante ;
              si <Math tex="0<a<1" />, <Math tex="\ln(a)<0" /> donc <Math tex="\exp_a" /> est strictement
              décroissante.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Les puissances réelles">
          <Box title="Définition" tone="def">
            Soit <Math tex="a>0" />. Pour tout réel <Math tex="x" />, on pose{" "}
            <Math tex="a^x=e^{x\ln a}" /> si <Math tex="a\neq1" />, et <Math tex="1^x=1" />. Cette écriture
            prolonge à <Math tex="\mathbb R" /> les puissances rationnelles déjà connues.
          </Box>
          <Callout variant="success" title="Propriétés">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="a^{x+y}=a^x\times a^y" /> ; <Math tex="(a^x)^y=a^{xy}" /> ;{" "}
                <Math tex="(ab)^x=a^x b^x" /> (<Math tex="a,b>0" />).
              </li>
              <li>
                <Math tex="\ln(a^x)=x\ln(a)" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · La fonction Exponentielle"
        tone="light"
        description="12 exercices corrigés, au niveau Sciences Mathématiques : identités algébriques, équations, inéquations, limites, dérivées, exponentielles de base a et étude complète de fonction."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre fonction exponentielle est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Identité algébrique"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que pour tout <Math tex="x\in\mathbb R" /> :{" "}
                <Math tex="\dfrac{e^{2x}-e^x}{e^x+1}=\dfrac{e^x-1}{1+e^{-x}}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Le membre de gauche : <Math tex="\dfrac{e^{2x}-e^x}{e^x+1}=\dfrac{e^x(e^x-1)}{e^x+1}" />.
                </p>
                <p className="font-semibold text-green-700">
                  En multipliant le numérateur et le dénominateur du membre de droite par{" "}
                  <Math tex="e^x" /> :{" "}
                  <Math tex="\dfrac{e^x-1}{1+e^{-x}}=\dfrac{e^x(e^x-1)}{e^x(1+e^{-x})}=\dfrac{e^x(e^x-1)}{e^x+1}" />
                  . Les deux membres sont donc égaux.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Résoudre une équation"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="2e^{2x}-3e^x-2=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="X=e^x" /> (<Math tex="X>0" />) : l&apos;équation devient{" "}
                  <Math tex="2X^2-3X-2=0" />.
                </p>
                <p>
                  <Math tex="\Delta=9+16=25" />, donc <Math tex="X=\dfrac{3-5}{4}=-\dfrac12" /> (rejeté car{" "}
                  <Math tex="X>0" />) ou <Math tex="X=\dfrac{3+5}{4}=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="e^x=2\iff x=\ln2" />. L&apos;ensemble des solutions est{" "}
                  <Math tex="S=\{\ln2\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Résoudre une inéquation"
            itemsLabel="1 inéquation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;inéquation{" "}
                <Math tex="e^{2x-1}\leqslant e^{3-x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  La fonction <Math tex="\exp" /> est strictement croissante sur <Math tex="\mathbb R" />, donc :
                </p>
                <p>
                  <Math tex="e^{2x-1}\leqslant e^{3-x}\iff 2x-1\leqslant 3-x\iff 3x\leqslant4\iff x\leqslant\dfrac43" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble des solutions est <Math tex="S=\left]-\infty,\dfrac43\right]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Équation mêlant ln et exponentielle"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\ln(e^x-3)=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : il faut <Math tex="e^x-3>0\iff x>\ln3" />.
                </p>
                <p>
                  Sur ce domaine : <Math tex="\ln(e^x-3)=1\iff e^x-3=e^1\iff e^x=e+3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="x=\ln(e+3)" />. Comme <Math tex="e+3>3" />, on a bien{" "}
                  <Math tex="\ln(e+3)>\ln3" /> : la solution est valide. <Math tex="S=\{\ln(e+3)\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Limites et croissances comparées"
            itemsLabel="4 limites"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{e^x-1}{e^x+1}" />,{" "}
                <Math tex="\displaystyle\lim_{x\to-\infty}x^2e^x" />,{" "}
                <Math tex="\displaystyle\lim_{x\to0}\dfrac{e^{3x}-1}{x}" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to+\infty}(e^x-x)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En divisant numérateur et dénominateur par <Math tex="e^x" /> :{" "}
                  <Math tex="\dfrac{e^x-1}{e^x+1}=\dfrac{1-e^{-x}}{1+e^{-x}}\to\dfrac{1-0}{1+0}=1" />.
                </p>
                <p>
                  D&apos;après le cours (croissances comparées, <Math tex="n=2" />) :{" "}
                  <Math tex="\displaystyle\lim_{x\to-\infty}x^2e^x=0" />.
                </p>
                <p>
                  <Math tex="\dfrac{e^{3x}-1}{x}=3\times\dfrac{e^{3x}-1}{3x}\to3\times1=3" /> (en posant{" "}
                  <Math tex="X=3x\to0" />).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="e^x-x=x\left(\dfrac{e^x}{x}-1\right)\to+\infty" /> car{" "}
                  <Math tex="\dfrac{e^x}{x}\to+\infty" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Dérivées de fonctions composées"
            itemsLabel="2 dérivées"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la dérivée de <Math tex="f(x)=e^{-x^2}" /> et de <Math tex="g(x)=xe^{2x}" /> sur{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="u(x)=-x^2" />, <Math tex="u'(x)=-2x" /> : <Math tex="f'(x)=-2x\,e^{-x^2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="g=x\times e^{2x}" /> : <Math tex="g'(x)=1\times e^{2x}+x\times2e^{2x}=(1+2x)e^{2x}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Étude d'une fonction"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=(x-1)e^x" /> sur <Math tex="\mathbb R" />. Étudier les variations de{" "}
                <Math tex="f" /> et déterminer son minimum.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=1\times e^x+(x-1)e^x=\big(1+(x-1)\big)e^x=x\,e^x" />.
                </p>
                <p>
                  Comme <Math tex="e^x>0" /> pour tout <Math tex="x" />, <Math tex="f'(x)" /> est du signe de{" "}
                  <Math tex="x" /> : <Math tex="f" /> décroît sur <Math tex="]-\infty,0]" /> puis croît sur{" "}
                  <Math tex="[0,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> admet donc un minimum en <Math tex="x=0" />, qui vaut{" "}
                  <Math tex="f(0)=(0-1)e^0=-1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Tangente à la courbe de exp"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une équation de la tangente à la courbe de <Math tex="\exp" /> au point d&apos;abscisse{" "}
                <Math tex="1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  La tangente en <Math tex="1" /> a pour équation <Math tex="y=\exp'(1)(x-1)+\exp(1)" />.
                </p>
                <p>
                  Or <Math tex="\exp'(1)=\exp(1)=e" />, donc <Math tex="y=e(x-1)+e=ex-e+e" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;équation de la tangente est <Math tex="y=ex" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Équation entre bases différentes"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="2^x=3^{x-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En composant par <Math tex="\ln" /> (les deux membres sont strictement positifs) :{" "}
                  <Math tex="\ln(2^x)=\ln(3^{x-1})\iff x\ln2=(x-1)\ln3" />.
                </p>
                <p>
                  <Math tex="x\ln2=x\ln3-\ln3 \iff x(\ln2-\ln3)=-\ln3 \iff x=\dfrac{-\ln3}{\ln2-\ln3}=\dfrac{\ln3}{\ln3-\ln2}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="x=\dfrac{\ln3}{\ln(3/2)}" />. L&apos;ensemble des solutions est{" "}
                  <Math tex="S=\left\{\dfrac{\ln3}{\ln(3/2)}\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Puissances réelles"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Simplifier <Math tex="\left(3^{\sqrt2}\right)^{\sqrt2}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;après la propriété <Math tex="(a^x)^y=a^{xy}" /> :{" "}
                  <Math tex="\left(3^{\sqrt2}\right)^{\sqrt2}=3^{\sqrt2\times\sqrt2}=3^{(\sqrt2)^2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="(\sqrt2)^2=2" />, on obtient <Math tex="\left(3^{\sqrt2}\right)^{\sqrt2}=3^2=9" />
                  .
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Inéquation avec base 0<a<1"
            itemsLabel="1 inéquation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;inéquation{" "}
                <Math tex="\left(\dfrac12\right)^x<8" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On écrit <Math tex="8=2^3=\left(\dfrac12\right)^{-3}" />, donc l&apos;inéquation devient{" "}
                  <Math tex="\left(\dfrac12\right)^x<\left(\dfrac12\right)^{-3}" />.
                </p>
                <p>
                  La base <Math tex="\dfrac12" /> vérifie <Math tex="0<\dfrac12<1" />, donc{" "}
                  <Math tex="\exp_{1/2}" /> est <strong>strictement décroissante</strong> : l&apos;inégalité sur les
                  images inverse celle sur les antécédents.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="x>-3" />. L&apos;ensemble des solutions est <Math tex="S=]-3,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Étude complète de fonction (niveau bac)"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^2e^{-x}" /> définie sur <Math tex="\mathbb R" />, de courbe{" "}
                <Math tex="(C_f)" />. 1) Calculer les limites de <Math tex="f" /> en <Math tex="-\infty" /> et en{" "}
                <Math tex="+\infty" />, et interpréter graphiquement. 2) Montrer que{" "}
                <Math tex="f'(x)=x(2-x)e^{-x}" />, puis dresser le tableau de variation de <Math tex="f" />. 3)
                Donner les valeurs des extremums de <Math tex="f" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="\displaystyle\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}x^2e^{-x}=+\infty" /> (produit
                  de deux termes tendant vers <Math tex="+\infty" />).
                </p>
                <p>
                  <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}\dfrac{x^2}{e^x}=0" /> d&apos;après
                  les croissances comparées : la droite <Math tex="y=0" /> est asymptote horizontale à{" "}
                  <Math tex="(C_f)" /> en <Math tex="+\infty" />.
                </p>
                <p>
                  2) <Math tex="f'(x)=2x\,e^{-x}+x^2\times(-e^{-x})=(2x-x^2)e^{-x}=x(2-x)e^{-x}" />.
                </p>
                <p>
                  Comme <Math tex="e^{-x}>0" />, <Math tex="f'(x)" /> est du signe de <Math tex="x(2-x)" />, positif
                  sur <Math tex="]0,2[" />. Donc <Math tex="f" /> décroît sur <Math tex="]-\infty,0]" />, croît sur{" "}
                  <Math tex="[0,2]" />, puis décroît sur <Math tex="[2,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  3) Minimum local en <Math tex="x=0" /> : <Math tex="f(0)=0" />. Maximum local en{" "}
                  <Math tex="x=2" /> : <Math tex="f(2)=4e^{-2}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
