import {
  LessonShell,
  LessonHero,
  LessonSection,
  Math,
  MathBlock,
  QcmSection,
  QcmQuestion,
  EvaluationScore,
  type LessonMeta,
  type QcmOption,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Évaluation diagnostique · Mathématiques | 2ème Bac Sciences Mathématiques",
  description:
    "Évaluation diagnostique interactive et corrigée automatiquement pour la 2ème année Baccalauréat Sciences Mathématiques (SM A et SM B) : 20 questions à choix multiple couvrant la logique, les limites, la dérivation, les suites numériques, l'arithmétique, les produits télescopiques et les sommes de séries, avec correction et note automatique sur 20.",
  kicker: "2ème Année Bac · Semestre 1",
  heroTitle: "Évaluation diagnostique",
  heroSubtitle:
    "3 exercices pour vérifier les acquis de 1ère Bac avant de démarrer l'année : logique, limites, dérivées, arithmétique, suites numériques et séries.",
  footerNote:
    "Évaluation diagnostique · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "ex1", label: "Ex. 1" },
    { id: "ex2", label: "Ex. 2" },
    { id: "ex3", label: "Ex. 3" },
  ],
};

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "20", label: "questions" },
          { value: "20", label: "points au total" },
          { value: "3", label: "exercices" },
        ]}
        ctas={
          <>
            <a
              href="#ex1"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer l&apos;évaluation
            </a>
            <a
              href="#ex3"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Dernier exercice
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">20</span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              questions · correction au clic
            </span>
          </div>
        }
      />

      <EvaluationScore maxScore={20}>
        <QcmSection total={20} doneMessage="Bravo, tu as répondu aux 20 questions ! Découvre ta note ci-dessous.">
          {/* ===================== EXERCICE 1 · LOGIQUE, LIMITES ET DÉRIVÉES ===================== */}
          <LessonSection
            id="ex1"
            kicker="Exercice 1 · 7 points"
            title="Logique, limites et dérivées"
            tone="light"
            description="Négation d'une proposition, limites usuelles, calcul de dérivée et lecture graphique (tangente, signe de f′, concavité)."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q1"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="f" /> une fonction de <Math tex="\mathbb R" /> vers <Math tex="\mathbb R" />. La
                    négation de la proposition « <Math tex="f" /> est la fonction nulle » est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\forall x\in\mathbb R,\ f(x)\neq0" /> },
                    { id: "2", content: <Math tex="\exists x\in\mathbb R,\ f(x)\neq0" />, correct: true },
                    { id: "3", content: <Math tex="\forall x\in\mathbb R,\ f(x)=0" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q2"
                points={1}
                prompt={
                  <>
                    <Math tex="\lim_{x\to+\infty}\dfrac{x+2}{x^2+1}=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="0" />, correct: true },
                    { id: "2", content: <Math tex="1" /> },
                    { id: "3", content: <Math tex="+\infty" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q3"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="f" /> une fonction définie sur <Math tex="]0;+\infty[" /> par{" "}
                    <Math tex="f(x)=\dfrac{x\sqrt x}{1+x}" />. Alors <Math tex="f'(x)" /> est égale à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac{\sqrt x\,(x+3)}{2(x+1)^2}" />, correct: true },
                    { id: "2", content: <Math tex="\dfrac{1+x+\sqrt x}{(x+1)^2}" /> },
                    { id: "3", content: <Math tex="\dfrac{1+2x+\sqrt x}{(x+1)^2}" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q4"
                points={1}
                prompt={
                  <>
                    <Math tex="\lim_{x\to0}\dfrac{x}{\sqrt{1+\sin x}-1}=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="0" /> },
                    { id: "2", content: <Math tex="1" /> },
                    { id: "3", content: <Math tex="2" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q5"
                points={1}
                prompt={
                  <>
                    On considère une fonction <Math tex="f" /> définie sur <Math tex="\mathbb R" />, dont la courbe{" "}
                    <Math tex="(\mathscr C_f)" /> passe par les points <Math tex="A(1;0)" /> et{" "}
                    <Math tex="B(2;3)" />. La droite <Math tex="(AB)" /> est tangente à <Math tex="(\mathscr C_f)" />{" "}
                    au point <Math tex="A" />. Que vaut <Math tex="f'(1)" /> ?
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="f'(1)=2" /> },
                    { id: "2", content: <Math tex="f'(1)=3" />, correct: true },
                    { id: "3", content: <Math tex="f'(1)=0" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q6"
                points={1}
                prompt={
                  <>
                    On garde les données de la question précédente. La courbe <Math tex="(\mathscr C_f)" /> admet un
                    maximum local en un point d&apos;abscisse <Math tex="c\in\ ]1;4[" />, où la tangente à{" "}
                    <Math tex="(\mathscr C_f)" /> est horizontale. Quelle affirmation est vraie ?
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="f'(1)=0" /> },
                    { id: "2", content: <>f n&apos;est pas dérivable en c</> },
                    { id: "3", content: <Math tex="f'(c)=0" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q7"
                points={1}
                prompt={
                  <>
                    On garde toujours les mêmes données : sur <Math tex="[1;4]" />, <Math tex="f" /> croît de{" "}
                    <Math tex="f(1)=0" /> jusqu&apos;à son maximum local en <Math tex="c" />, puis décroît. Quelle
                    affirmation est vraie sur <Math tex="[1;4]" /> ?
                  </>
                }
                options={
                  [
                    {
                      id: "1",
                      content: (
                        <>
                          <Math tex="\forall x\in[1;4]:" /> <Math tex="f''(x)>0" />
                        </>
                      ),
                    },
                    {
                      id: "2",
                      content: (
                        <>
                          <Math tex="\forall x\in[1;4]:" /> <Math tex="f'(x)>0" />
                        </>
                      ),
                    },
                    {
                      id: "3",
                      content: (
                        <>
                          <Math tex="\forall x\in[1;4]:" /> <Math tex="f''(x)<0" />
                        </>
                      ),
                      correct: true,
                    },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 2 · ARITHMÉTIQUE, SUITES ET OPTIMISATION ===================== */}
          <LessonSection
            id="ex2"
            kicker="Exercice 2 · 7 points"
            title="Arithmétique, suites et optimisation"
            tone="muted"
            description="Dénombrement de diviseurs, sommes de suites géométriques, limites liées aux suites, récurrences linéaires, produits télescopiques et un problème d'optimisation."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q8"
                points={1}
                prompt={
                  <>
                    Le nombre de diviseurs positifs de <Math tex="N=546\times840" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="180" />, correct: true },
                    { id: "2", content: <Math tex="181" /> },
                    { id: "3", content: <Math tex="182" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q9"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="(u_n)" /> une suite géométrique de premier terme <Math tex="u_0" /> et de raison{" "}
                    <Math tex="q>0" /> telle que <Math tex="u_1=2" /> et <Math tex="u_2=4" />. On pose{" "}
                    <Math tex="S_n=u_0+u_1+\cdots+u_n" />. Alors <Math tex="S_n" /> égale :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="2^n-1" /> },
                    { id: "2", content: <Math tex="2^{n+1}-1" />, correct: true },
                    { id: "3", content: <Math tex="\dfrac12(2^n-1)" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q10"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="n\in\mathbb N^*" />, alors <Math tex="\lim_{x\to1}\dfrac{x^n-1}{x-1}=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="n" />, correct: true },
                    { id: "2", content: <Math tex="\dfrac{n(n+1)}{2}" /> },
                    { id: "3", content: <Math tex="\dfrac{n(n-1)}{2}" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q11"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="(U_n)_{n\in\mathbb N}" /> une suite telle que{" "}
                    <Math tex="\forall n\in\mathbb N,\ U_{n+2}=\dfrac53U_{n+1}-\dfrac23U_n" />, avec{" "}
                    <Math tex="U_0=1" /> et <Math tex="U_1=2" />. Pour tout <Math tex="n\in\mathbb N" />, on pose{" "}
                    <Math tex="V_n=U_{n+1}-U_n" />. Alors :
                  </>
                }
                options={
                  [
                    {
                      id: "1",
                      content: (
                        <>
                          Pour tout <Math tex="n\in\mathbb N" /> : <Math tex="V_n=\left(\dfrac23\right)^n" />
                        </>
                      ),
                      correct: true,
                    },
                    {
                      id: "2",
                      content: (
                        <>
                          Pour tout <Math tex="n\in\mathbb N" /> : <Math tex="U_n=\left(\dfrac23\right)^n" />
                        </>
                      ),
                    },
                    {
                      id: "3",
                      content: (
                        <>
                          Pour tout <Math tex="n\in\mathbb N" /> : <Math tex="V_n=\left(\dfrac13\right)^n" />
                        </>
                      ),
                    },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q12"
                points={1}
                prompt={
                  <>
                    Pour tout entier <Math tex="n\ge2" />, on pose{" "}
                    <Math tex="\pi_n=\left(1-\dfrac1{2^2}\right)\times\left(1-\dfrac1{3^2}\right)\times\cdots\times\left(1-\dfrac1{n^2}\right)=\displaystyle\prod_{k=2}^n\left(1-\dfrac1{k^2}\right)" />
                    . Alors <Math tex="\pi_n" /> en fonction de <Math tex="n" /> est égale à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac{n+1}{n}" /> },
                    { id: "2", content: <Math tex="\dfrac1{2n}" /> },
                    { id: "3", content: <Math tex="\dfrac{n+1}{2n}" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q13"
                points={1}
                prompt={
                  <>
                    <Math tex="ABCD" /> est un carré de côté 1. On place les points <Math tex="E" /> et{" "}
                    <Math tex="F" /> respectivement sur les côtés <Math tex="[AB]" /> et <Math tex="[BC]" /> tels que{" "}
                    <Math tex="BE=CF=x" /> (avec <Math tex="x\in[0;1]" />). La valeur de <Math tex="x" /> pour
                    laquelle l&apos;aire du triangle <Math tex="EFD" /> est minimale est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac14" /> },
                    { id: "2", content: <Math tex="\dfrac13" /> },
                    { id: "3", content: <Math tex="\dfrac12" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q14"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="n\in\mathbb N^*" />, alors{" "}
                    <Math tex="\lim_{x\to0}\dfrac{1-\cos^n(x)}{1-\cos^2(x)}=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="n" /> },
                    { id: "2", content: <Math tex="\dfrac{n(n+1)}{2}" /> },
                    { id: "3", content: <Math tex="\dfrac{n}{2}" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 3 · LIMITES, COURBES ET SÉRIES NUMÉRIQUES ===================== */}
          <LessonSection
            id="ex3"
            kicker="Exercice 3 · 6 points"
            title="Limites, courbes et séries numériques"
            tone="light"
            description="Ensemble de définition d'une fonction définie par morceaux, tangente à la courbe d'une somme géométrique, sommes de séries numériques et limites avec paramètre."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q15"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="f" /> la fonction définie par
                    <MathBlock tex="f(x)=\begin{cases}\dfrac{3x^2-4x-4}{x^2-x-2}&\text{si }x>2\\[2mm]\dfrac{\sqrt{x^2+5}-3}{\sqrt{x+2}-2}&\text{si }x<2\\[2mm]1&\text{si }x=2\end{cases}" />
                    L&apos;ensemble de définition de la fonction <Math tex="f" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="]2;+\infty[" /> },
                    { id: "2", content: <Math tex="[-2;+\infty[" />, correct: true },
                    { id: "3", content: <Math tex="]{-1};2[\cup]2;+\infty[" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q16"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="f" /> la fonction définie sur <Math tex="\mathbb R" /> par{" "}
                    <Math tex="f(x)=\displaystyle\sum_{k=0}^n x^k=1+x+x^2+\cdots+x^n" />, et <Math tex="(C)" /> sa
                    courbe dans un repère orthonormé. L&apos;équation réduite de la tangente à <Math tex="(C)" /> au
                    point d&apos;abscisse 1 est :
                  </>
                }
                options={
                  [
                    {
                      id: "1",
                      content: (
                        <Math tex="y=\dfrac{n(n+1)}{2}x-\dfrac{(n-2)(n+1)}{2}" />
                      ),
                      correct: true,
                    },
                    {
                      id: "2",
                      content: <Math tex="y=\dfrac{n(n+1)}{2}x+\dfrac{(n-2)(n+1)}{2}" />,
                    },
                    {
                      id: "3",
                      content: <Math tex="y=\dfrac{n(n-1)}{2}x-\dfrac{n^2-1}{2}" />,
                    },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q17"
                points={1}
                prompt={
                  <>
                    <Math tex="\dfrac12-\dfrac14+\dfrac18-\cdots+\dfrac1{512}=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac{513}{824}" /> },
                    { id: "2", content: <Math tex="\dfrac{172}{521}" /> },
                    { id: "3", content: <Math tex="\dfrac{171}{512}" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q18"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="a>0" />, alors <Math tex="\lim_{x\to a^+}\dfrac{\sqrt x-\sqrt a-\sqrt{x-a}}{\sqrt{x^2-a^2}}=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-\dfrac1{\sqrt a}" /> },
                    { id: "2", content: <Math tex="-\dfrac1{\sqrt{2a}}" />, correct: true },
                    { id: "3", content: <Math tex="\dfrac1{\sqrt{2a}}" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q19"
                points={1}
                prompt={
                  <>
                    Soit <Math tex="(v_n)_{n\in\mathbb N^*}" /> une suite telle que{" "}
                    <Math tex="\forall n\in\mathbb N^*,\ v_1+v_2+\cdots+v_{n-1}+v_n=2n^2+n" />. Alors :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="v_8=31" />, correct: true },
                    { id: "2", content: <Math tex="v_8=53" /> },
                    { id: "3", content: <Math tex="v_8=54" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q20"
                points={1}
                prompt={
                  <>
                    <Math tex="\lim_{x\to0}\dfrac{\sqrt{1+x}+\sqrt{1-x}-2}{x^2}=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-\dfrac14" />, correct: true },
                    { id: "2", content: <Math tex="2" /> },
                    { id: "3", content: <Math tex="0" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>
        </QcmSection>
      </EvaluationScore>
    </LessonShell>
  );
}
