import {
  LessonShell,
  LessonHero,
  LessonSection,
  Math,
  QcmSection,
  QcmQuestion,
  EvaluationScore,
  type LessonMeta,
  type QcmOption,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Évaluation diagnostique · Mathématiques | 2ème Bac Sciences",
  description:
    "Évaluation diagnostique interactive et corrigée automatiquement pour la 2ème année Baccalauréat (Sciences Physiques, SVT, Sciences et Technologies Électriques et Mécaniques) : 34 questions sur les limites, la dérivation, l'étude de fonctions et les suites numériques, avec correction et note automatique sur 20.",
  kicker: "2ème Année Bac · Semestre 1",
  heroTitle: "Évaluation diagnostique",
  heroSubtitle:
    "4 exercices pour vérifier les acquis de 1ère Bac avant de démarrer l'année : limites, dérivées usuelles, étude d'une fonction polynôme et suites arithmético-géométriques.",
  footerNote: "Évaluation diagnostique · Mathématiques, 2ème année Baccalauréat, semestre 1.",
  sections: [
    { id: "ex1", label: "Ex. 1" },
    { id: "ex2", label: "Ex. 2" },
    { id: "ex3", label: "Ex. 3" },
    { id: "ex4", label: "Ex. 4" },
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
          { value: "34", label: "questions" },
          { value: "20", label: "points au total" },
          { value: "4", label: "exercices" },
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
              href="#ex4"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Dernier exercice
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">4</span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              exercices · correction au clic
            </span>
          </div>
        }
      />

      <EvaluationScore maxScore={20}>
        <QcmSection total={34} doneMessage="Bravo, tu as répondu aux 34 questions ! Découvre ta note ci-dessous.">
          {/* ===================== EXERCICE 1 · LIMITES ===================== */}
          <LessonSection
            id="ex1"
            kicker="Exercice 1 · 10 points"
            title="Calcul de limites"
            tone="light"
            description="Pour chaque fonction, choisis la bonne limite."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q1a"
                points={0.5}
                prompt={
                  <>
                    Soit <Math tex="f(x)=-3x^2-7x+8" />. <Math tex="\lim_{x\to+\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" /> },
                    { id: "2", content: <Math tex="-\infty" />, correct: true },
                    { id: "3", content: <Math tex="8" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q1b"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" /> },
                    { id: "2", content: <Math tex="-\infty" />, correct: true },
                    { id: "3", content: <Math tex="0" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q1c"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to0}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="8" />, correct: true },
                    { id: "2", content: <Math tex="-\infty" /> },
                    { id: "3", content: <Math tex="0" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q2a"
                points={0.5}
                prompt={
                  <>
                    Soit <Math tex="f(x)=\dfrac{3x+1}{1-x}" /> sur <Math tex="\mathbb R\setminus\{1\}" />.{" "}
                    <Math tex="\lim_{x\to+\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-3" />, correct: true },
                    { id: "2", content: <Math tex="3" /> },
                    { id: "3", content: <Math tex="+\infty" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2b"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-3" />, correct: true },
                    { id: "2", content: <Math tex="3" /> },
                    { id: "3", content: <Math tex="-\infty" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2c"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{\substack{x\to1\\x>1}}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" /> },
                    { id: "2", content: <Math tex="-\infty" />, correct: true },
                    { id: "3", content: <Math tex="4" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2d"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{\substack{x\to1\\x<1}}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" />, correct: true },
                    { id: "2", content: <Math tex="-\infty" /> },
                    { id: "3", content: <Math tex="4" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q3a"
                points={0.5}
                prompt={
                  <>
                    Soit <Math tex="f(x)=\dfrac{x^2-4}{x-2}" /> sur <Math tex="\mathbb R\setminus\{2\}" />.{" "}
                    <Math tex="\lim_{x\to+\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" />, correct: true },
                    { id: "2", content: <Math tex="-\infty" /> },
                    { id: "3", content: <Math tex="1" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3b"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" /> },
                    { id: "2", content: <Math tex="-\infty" />, correct: true },
                    { id: "3", content: <Math tex="1" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3c"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to2}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="4" />, correct: true },
                    { id: "2", content: <Math tex="0" /> },
                    { id: "3", content: <Math tex="+\infty" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q4a"
                points={0.5}
                prompt={
                  <>
                    Soit <Math tex="f(x)=\dfrac{x+1}{x^2+3x+2}" /> sur <Math tex="\mathbb R\setminus\{-1,-2\}" />.{" "}
                    <Math tex="\lim_{x\to+\infty}f(x)=" />
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
                id="q4b"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="0" />, correct: true },
                    { id: "2", content: <Math tex="-1" /> },
                    { id: "3", content: <Math tex="-\infty" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4c"
                points={0.75}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-1}f(x)=" /> (indication : <Math tex="x^2+3x+2=(x+1)(x+2)" />)
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="1" />, correct: true },
                    { id: "2", content: <Math tex="0" /> },
                    { id: "3", content: "n'existe pas" },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q5a"
                points={0.75}
                prompt={
                  <>
                    Soit <Math tex="f(x)=\dfrac{\sqrt{x+8}-3}{x-1}" /> sur <Math tex="[-8,1[\cup]1,+\infty[" />.{" "}
                    <Math tex="\lim_{x\to1}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac16" />, correct: true },
                    { id: "2", content: <Math tex="0" /> },
                    { id: "3", content: <Math tex="\dfrac13" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q6a"
                points={0.5}
                prompt={
                  <>
                    Soit <Math tex="f(x)=\sqrt{9x^2+5}+3x" />. <Math tex="\lim_{x\to+\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" />, correct: true },
                    { id: "2", content: <Math tex="0" /> },
                    { id: "3", content: <Math tex="6" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q6b"
                points={0.75}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="0" />, correct: true },
                    { id: "2", content: <Math tex="+\infty" /> },
                    { id: "3", content: <Math tex="-\infty" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q7a"
                points={0.75}
                prompt={
                  <>
                    Soit <Math tex="f(x)=\sqrt{9x^2+4x-5}-7x" />. <Math tex="\lim_{x\to+\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" /> },
                    { id: "2", content: <Math tex="-\infty" />, correct: true },
                    { id: "3", content: <Math tex="0" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q7b"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" />, correct: true },
                    { id: "2", content: <Math tex="-\infty" /> },
                    { id: "3", content: <Math tex="0" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 2 · DÉRIVÉES ===================== */}
          <LessonSection
            id="ex2"
            kicker="Exercice 2 · 3,5 points"
            title="Dérivées usuelles"
            tone="muted"
            description="Choisis, pour chaque ligne, le triplet (ou couple) de dérivées correct."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q2-1"
                points={0.75}
                prompt={
                  <>
                    <Math tex="(2x)'" />, <Math tex="(-x)'" />, <Math tex="(x)'" /> sont respectivement égales à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="2\ ;\ -1\ ;\ 1" />, correct: true },
                    { id: "2", content: <Math tex="2x\ ;\ -x\ ;\ x" /> },
                    { id: "3", content: <Math tex="0\ ;\ -1\ ;\ 1" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2-2"
                points={0.75}
                prompt={
                  <>
                    <Math tex="(x^2)'" />, <Math tex="(x^3)'" />, <Math tex="(x^4)'" /> sont respectivement égales
                    à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="2x\ ;\ 3x^2\ ;\ 4x^3" />, correct: true },
                    { id: "2", content: <Math tex="x\ ;\ x^2\ ;\ x^3" /> },
                    { id: "3", content: <Math tex="2x\ ;\ 3x\ ;\ 4x" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2-3"
                points={0.75}
                prompt={
                  <>
                    <Math tex="(-5x^2)'" />, <Math tex="(7x^3)'" />, <Math tex="(3x^4)'" /> sont respectivement
                    égales à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-10x\ ;\ 21x^2\ ;\ 12x^3" />, correct: true },
                    { id: "2", content: <Math tex="-5x\ ;\ 7x^2\ ;\ 3x^3" /> },
                    { id: "3", content: <Math tex="-10x\ ;\ 21x\ ;\ 12x^2" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2-4"
                points={0.75}
                prompt={
                  <>
                    <Math tex="(\sin x)'" />, <Math tex="(\cos x)'" />, <Math tex="(\tan x)'" /> (pour{" "}
                    <Math tex="x\neq\frac\pi2+k\pi" />) sont respectivement égales à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\cos x\ ;\ -\sin x\ ;\ 1+\tan^2x" />, correct: true },
                    { id: "2", content: <Math tex="\cos x\ ;\ \sin x\ ;\ 1-\tan^2x" /> },
                    { id: "3", content: <Math tex="-\cos x\ ;\ \sin x\ ;\ 1+\tan^2x" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2-5"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\left(\dfrac1x\right)'" /> (<Math tex="x\neq0" />) et <Math tex="(\sqrt x)'" /> (
                    <Math tex="x>0" />) sont respectivement égales à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-\dfrac1{x^2}\ ;\ \dfrac1{2\sqrt x}" />, correct: true },
                    { id: "2", content: <Math tex="\dfrac1{x^2}\ ;\ \dfrac1{2\sqrt x}" /> },
                    { id: "3", content: <Math tex="-\dfrac1{x^2}\ ;\ \sqrt x" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 3 · ÉTUDE DE FONCTION ===================== */}
          <LessonSection
            id="ex3"
            kicker="Exercice 3 · 2,75 points"
            title="Étude d'une fonction polynôme"
            tone="light"
            description="Soit f la fonction définie par f(x) = x³ − 3x + 4."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q3-1"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to+\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" />, correct: true },
                    { id: "2", content: <Math tex="-\infty" /> },
                    { id: "3", content: <Math tex="4" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3-2"
                points={0.5}
                prompt={
                  <>
                    <Math tex="\lim_{x\to-\infty}f(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="+\infty" /> },
                    { id: "2", content: <Math tex="-\infty" />, correct: true },
                    { id: "3", content: <Math tex="4" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3-3"
                points={0.5}
                prompt={
                  <>
                    <Math tex="f'(x)=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="3x^2-3" />, correct: true },
                    { id: "2", content: <Math tex="3x^2-3x" /> },
                    { id: "3", content: <Math tex="x^2-3" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3-4"
                points={0.5}
                prompt="Le sens de variation de f est :"
                options={
                  [
                    {
                      id: "1",
                      content: (
                        <>
                          croissante sur <Math tex="]-\infty,-1]" /> et <Math tex="[1,+\infty[" />, décroissante
                          sur <Math tex="[-1,1]" />
                        </>
                      ),
                      correct: true,
                    },
                    {
                      id: "2",
                      content: (
                        <>
                          décroissante sur <Math tex="]-\infty,-1]" /> et <Math tex="[1,+\infty[" />, croissante
                          sur <Math tex="[-1,1]" />
                        </>
                      ),
                    },
                    { id: "3", content: <>strictement croissante sur <Math tex="\mathbb R" /></> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3-5"
                points={0.25}
                prompt={
                  <>
                    Le maximum local et le minimum local de <Math tex="f" /> valent respectivement :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="f(-1)=6\ \text{et}\ f(1)=2" />, correct: true },
                    { id: "2", content: <Math tex="f(-1)=2\ \text{et}\ f(1)=6" /> },
                    { id: "3", content: <Math tex="f(-1)=4\ \text{et}\ f(1)=4" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3-6"
                points={0.5}
                prompt={
                  <>
                    L&apos;équation de la tangente <Math tex="(T)" /> à la courbe de <Math tex="f" /> au point{" "}
                    <Math tex="A(0,4)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="y=-3x+4" />, correct: true },
                    { id: "2", content: <Math tex="y=3x+4" /> },
                    { id: "3", content: <Math tex="y=-3x" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 4 · SUITE NUMÉRIQUE ===================== */}
          <LessonSection
            id="ex4"
            kicker="Exercice 4 · 3,75 points"
            title="Suite arithmético-géométrique"
            tone="muted"
            description={
              <>
                Soit <Math tex="(u_n)" /> définie par <Math tex="u_{n+1}=\dfrac23u_n-1" /> et <Math tex="u_0=-2" />
                . On pose <Math tex="v_n=u_n+3" />.
              </>
            }
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q4-1"
                points={0.75}
                prompt={
                  <>
                    Pour tout <Math tex="n\in\mathbb N" />, on a :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="u_n>-3" />, correct: true },
                    { id: "2", content: <Math tex="u_n<-3" /> },
                    { id: "3", content: <Math tex="u_n=-3" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4-2"
                points={0.75}
                prompt={
                  <>
                    La suite <Math tex="(u_n)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: "strictement décroissante", correct: true },
                    { id: "2", content: "strictement croissante" },
                    { id: "3", content: "constante" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4-3"
                points={0.5}
                prompt={
                  <>
                    La suite <Math tex="(v_n)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <>géométrique de raison <Math tex="\dfrac23" /></>, correct: true },
                    { id: "2", content: <>arithmétique de raison <Math tex="\dfrac23" /></> },
                    { id: "3", content: <>géométrique de raison <Math tex="-\dfrac23" /></> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4-4"
                points={0.75}
                prompt={
                  <>
                    Pour tout <Math tex="n\in\mathbb N" />, <Math tex="u_n=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\left(\dfrac23\right)^n-3" />, correct: true },
                    { id: "2", content: <Math tex="\left(\dfrac23\right)^n+3" /> },
                    { id: "3", content: <Math tex="3\left(\dfrac23\right)^n-3" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4-5"
                points={1}
                prompt={
                  <>
                    <Math tex="S_n=v_0+v_1+\cdots+v_n=" />
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="3\left(1-\left(\dfrac23\right)^{n+1}\right)" />, correct: true },
                    { id: "2", content: <Math tex="3\left(1-\left(\dfrac23\right)^{n}\right)" /> },
                    { id: "3", content: <Math tex="\dfrac{1-\left(\frac23\right)^{n+1}}{3}" /> },
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
