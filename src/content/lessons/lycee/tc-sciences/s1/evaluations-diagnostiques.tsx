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
  title: "Évaluation Diagnostique · Mathématiques | Tronc Commun Sciences",
  description:
    "Évaluation diagnostique interactive et corrigée automatiquement : 60 questions couvrant tout le programme de 3ème année collège nécessaire au Tronc Commun (calcul littéral, puissances, racines carrées, ordre, équations, trigonométrie, droites, vecteurs, fonctions). Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "Évaluation Diagnostique",
  heroSubtitle:
    "60 questions pour vérifier les acquis du collège avant de démarrer le Tronc Commun. Réponds à chaque question, la correction s'affiche au clic.",
  footerNote: "Évaluation diagnostique · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "section-litteral", label: "Calcul littéral" },
    { id: "section-puissances", label: "Puissances" },
    { id: "section-racines", label: "Racines" },
    { id: "section-ordre", label: "Ordre" },
    { id: "section-equations", label: "Équations" },
    { id: "section-trigo", label: "Trigo" },
    { id: "section-droite", label: "Droite" },
    { id: "section-vecteurs", label: "Vecteurs" },
    { id: "section-fonctions", label: "Fonctions" },
  ],
};

export default function Lesson() {
  const pt = 20 / 60;
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "60", label: "questions" },
          { value: "20", label: "points au total" },
          { value: "9", label: "thèmes couverts" },
        ]}
        ctas={
          <>
            <a
              href="#section-litteral"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer l&apos;évaluation
            </a>
            <a
              href="#section-fonctions"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Dernière question
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">60</span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              questions · correction au clic
            </span>
          </div>
        }
      />

      <EvaluationScore maxScore={20}>
        <QcmSection total={60} doneMessage="Bravo, tu as répondu aux 60 questions ! Découvre ta note ci-dessous.">
          {/* ===================== 1. CALCUL LITTÉRAL ===================== */}
          <LessonSection
            id="section-litteral"
            kicker="01 · Calcul littéral"
            title="Identités remarquables, développement, factorisation"
            tone="light"
            description="Développer, factoriser et réduire une expression littérale."
          >
            <div className="space-y-4">
              <QcmQuestion id="q1" points={pt} prompt={<>Si on développe l&apos;expression <Math tex="(3x+2)^2" />, on obtient :</>}
                options={[
                  { id: "1", content: <Math tex="3x^2+12x+4" /> },
                  { id: "2", content: <Math tex="9x^2+12x+2" /> },
                  { id: "3", content: <Math tex="9x^2+12x+4" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q2" points={pt} prompt="Laquelle de ces identités remarquables est vraie :"
                options={[
                  { id: "1", content: <Math tex="(a+b)(a-b)=a^2+b^2" /> },
                  { id: "2", content: <Math tex="(a-b)^2=a^2-ab+b^2" /> },
                  { id: "3", content: <Math tex="(a+b)^2=a^2+2ab+b^2" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q3" points={pt} prompt={<>Si on factorise l&apos;expression <Math tex="16x^2-25" />, on obtient :</>}
                options={[
                  { id: "1", content: <Math tex="(4x-5)^2" /> },
                  { id: "2", content: <Math tex="(16x-5)(16x+5)" /> },
                  { id: "3", content: <Math tex="(4x+5)(4x-5)" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q4" points={pt} prompt={<>Dans l&apos;expression <Math tex="3x(x-2)+7(x-2)^2" /> on peut mettre en facteur :</>}
                options={[
                  { id: "1", content: <Math tex="(x-2)" />, correct: true },
                  { id: "2", content: <Math tex="(x-2)^2" /> },
                  { id: "3", content: <Math tex="3x" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q5" points={pt} prompt={<>En factorisant à l&apos;aide d&apos;une identité remarquable l&apos;expression <Math tex="4x^2+20x+25" />, on obtient :</>}
                options={[
                  { id: "1", content: <Math tex="(4x-5)(4x+5)" /> },
                  { id: "2", content: <Math tex="(4x+5)^2" /> },
                  { id: "3", content: <Math tex="(2x+5)^2" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q6" points={pt} prompt={<>En factorisant l&apos;expression <Math tex="-2x(x+1)-(x+1)^2" />, on obtient :</>}
                options={[
                  { id: "1", content: <Math tex="(x+1)(-3x-1)" />, correct: true },
                  { id: "2", content: <Math tex="(x+1)(-3x+1)" /> },
                  { id: "3", content: <Math tex="(x+1)(-2x-1)" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q7" points={pt} prompt={<>La forme développée de l&apos;expression <Math tex="A=(-1+4x)(x-5)" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="-x-5+4x^2-20" /> },
                  { id: "2", content: <Math tex="-x+5+4x^2-20x" />, correct: true },
                  { id: "3", content: <Math tex="-x+5x+4x^2+20x" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q8" points={pt} prompt={<><Math tex="123^2-122^2" /> égal à :</>}
                options={[
                  { id: "1", content: <Math tex="245" />, correct: true },
                  { id: "2", content: <Math tex="122" /> },
                  { id: "3", content: <Math tex="123" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q9" points={pt} prompt={<>L&apos;écriture réduite de <Math tex="7x^2-2x" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="5x" /> },
                  { id: "2", content: <Math tex="5x^2" /> },
                  { id: "3", content: <Math tex="7x^2-2x" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q10" points={pt} prompt={<>L&apos;écriture simplifiée de <Math tex="(-6x)\times(-2x)" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="12x" /> },
                  { id: "2", content: <Math tex="-12x^2" /> },
                  { id: "3", content: <Math tex="12x^2" />, correct: true },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 2. PUISSANCES ===================== */}
          <LessonSection
            id="section-puissances"
            kicker="02 · Puissances"
            title="Puissances et écriture scientifique"
            tone="muted"
            description="Règles de calcul sur les puissances et écriture scientifique d'un nombre décimal."
          >
            <div className="space-y-4">
              <QcmQuestion id="q11" points={pt} prompt={<><Math tex="5^4\times 5^3" /> est égal à :</>}
                options={[
                  { id: "1", content: <Math tex="25^{4+3}" /> },
                  { id: "2", content: <Math tex="5^7" />, correct: true },
                  { id: "3", content: <Math tex="5^{4\times 3}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q12" points={pt} prompt={<><Math tex="(-4)^2" /> est égal à :</>}
                options={[
                  { id: "1", content: <Math tex="-4\times 4" />, correct: true },
                  { id: "2", content: <Math tex="16" /> },
                  { id: "3", content: <Math tex="-4\times 2" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q13" points={pt} prompt={<>Que vaut <Math tex="19^0" /> :</>}
                options={[
                  { id: "1", content: <Math tex="19" /> },
                  { id: "2", content: <Math tex="1" />, correct: true },
                  { id: "3", content: <Math tex="0" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q14" points={pt} prompt={<>Que vaut <Math tex="10^{-3}\times 2^{-3}" /> :</>}
                options={[
                  { id: "1", content: <Math tex="(10+2)^{-3}" /> },
                  { id: "2", content: <Math tex="10\times 2^{-3}" /> },
                  { id: "3", content: <Math tex="20^{-3}" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q15" points={pt} prompt={<>L&apos;écriture scientifique de <Math tex="0{,}00000576" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="5{,}76\times 10^{-6}" />, correct: true },
                  { id: "2", content: <Math tex="5{,}76\times 10^{6}" /> },
                  { id: "3", content: <Math tex="5{,}76" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q16" points={pt} prompt={<>L&apos;écriture scientifique de <Math tex="0{,}000914" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="0{,}914\times 10^{-3}" /> },
                  { id: "2", content: <Math tex="9{,}14\times 10^{-4}" />, correct: true },
                  { id: "3", content: <Math tex="9{,}14\times 10^{4}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q17" points={pt} prompt={<>Lorsqu&apos;on multiplie un nombre décimal par <Math tex="10^{-5}" />, alors :</>}
                options={[
                  { id: "1", content: "On décale sa virgule de 5 rangs vers la droite" },
                  { id: "2", content: "On décale sa virgule de 5 rangs vers la gauche", correct: true },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 3. RACINES CARRÉES ===================== */}
          <LessonSection
            id="section-racines"
            kicker="03 · Racines carrées"
            title="Opérations et comparaisons de racines carrées"
            tone="light"
            description="Opposé, produit, comparaison de racines carrées et carrés parfaits."
          >
            <div className="space-y-4">
              <QcmQuestion id="q18" points={pt} prompt={<>L&apos;opposé de <Math tex="\sqrt{7}" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="\sqrt{-7}" /> },
                  { id: "2", content: <Math tex="-\sqrt{7}" />, correct: true },
                  { id: "3", content: <Math tex="\frac{1}{\sqrt{7}}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q19" points={pt} prompt={<>Le nombre <Math tex="(2\sqrt5-\sqrt3)(2\sqrt5+\sqrt3)" /> est égal à :</>}
                options={[
                  { id: "1", content: <Math tex="19" /> },
                  { id: "2", content: <Math tex="17" />, correct: true },
                  { id: "3", content: <Math tex="18" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q20" points={pt} prompt="Lequel de ces nombres est un carré parfait :"
                options={[
                  { id: "1", content: <Math tex="8" /> },
                  { id: "2", content: <Math tex="25" />, correct: true },
                  { id: "3", content: <Math tex="11" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q21" points={pt} prompt={<>Le nombre <Math tex="3\sqrt5" /> est strictement supérieur à :</>}
                options={[
                  { id: "1", content: <Math tex="\sqrt{47}" /> },
                  { id: "2", content: <Math tex="2\sqrt{11}" />, correct: true },
                  { id: "3", content: <Math tex="4\sqrt3" /> },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 4. ORDRE DANS IR ===================== */}
          <LessonSection
            id="section-ordre"
            kicker="04 · Ordre dans IR"
            title="Inégalités et opérations"
            tone="muted"
            description="Effet des opérations (addition, multiplication par un négatif) sur une inégalité."
          >
            <div className="space-y-4">
              <QcmQuestion id="q22" points={pt} prompt={<>Si <Math tex="x\le 5" /> alors :</>}
                options={[
                  { id: "1", content: <Math tex="x-7\ge 5-7" /> },
                  { id: "2", content: <Math tex="2x\ge 10" /> },
                  { id: "3", content: <Math tex="-3x\ge -15" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q23" points={pt} prompt="Lorsqu'on multiplie les deux membres d'une inéquation par un nombre négatif :"
                options={[
                  { id: "1", content: "On change le signe de l'inégalité", correct: true },
                  { id: "2", content: "On ne change pas le signe de l'inégalité" },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q24" points={pt} prompt={<>Si <Math tex="a-b=-11" />, alors :</>}
                options={[
                  { id: "1", content: <Math tex="a>b" /> },
                  { id: "2", content: <Math tex="a\ge b" /> },
                  { id: "3", content: <Math tex="a<b" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q25" points={pt} prompt={<>L&apos;inégalité <Math tex="5-2x>1" /> est vraie par exemple pour <Math tex="x" /> égal à :</>}
                options={[
                  { id: "1", content: <Math tex="4" /> },
                  { id: "2", content: <Math tex="2" /> },
                  { id: "3", content: <Math tex="-3" />, correct: true },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 5. ÉQUATIONS, INÉQUATIONS, SYSTÈMES ===================== */}
          <LessonSection
            id="section-equations"
            kicker="05 · Équations et systèmes"
            title="Équations produit, inéquations, systèmes"
            tone="light"
            description="Résoudre une équation produit, une inéquation, et un système de deux équations."
          >
            <div className="space-y-4">
              <QcmQuestion id="q26" points={pt} prompt="Une équation est une égalité comportant une lettre appelée :"
                options={[
                  { id: "1", content: "Abscisse" },
                  { id: "2", content: "Inconnue", correct: true },
                  { id: "3", content: "Solution" },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q27" points={pt} prompt={<>Pour que le produit <Math tex="(x+3)(12-x)" /> soit nul il faut que :</>}
                options={[
                  { id: "1", content: <Math tex="x=0 \text{ ou } x=1" /> },
                  { id: "2", content: <Math tex="x=-3 \text{ et } x=12" /> },
                  { id: "3", content: <Math tex="x=-3 \text{ ou } x=12" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q28" points={pt} prompt={<>L&apos;équation produit qui a pour solutions <Math tex="-1" /> et <Math tex="3" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="(-3+x)(11-7x)=0" /> },
                  { id: "2", content: <Math tex="2x(x+3)=0" /> },
                  { id: "3", content: <Math tex="(x+1)(2x-6)=0" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q29" points={pt} prompt={<>Quelles sont les solutions de l&apos;équation <Math tex="x^2=25" /> :</>}
                options={[
                  { id: "1", content: <Math tex="x=5 \text{ et } x=25" /> },
                  { id: "2", content: <Math tex="x=5 \text{ ou } x=-5" />, correct: true },
                  { id: "3", content: <Math tex="x=\sqrt5 \text{ ou } x=-\sqrt5" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q30" points={pt} prompt={<>L&apos;inéquation <Math tex="-3x+4\le -2-x" /> a pour solution :</>}
                options={[
                  { id: "1", content: "Tous les nombres inférieurs ou égaux à 3" },
                  { id: "2", content: "Tous les nombres supérieurs ou égaux à 3", correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q31" points={pt} prompt={<>Les nombres <Math tex="-3" />, <Math tex="1" /> et <Math tex="4" /> sont tous les solutions de l&apos;inéquation :</>}
                options={[
                  { id: "1", content: <Math tex="-2x+10\le 0" /> },
                  { id: "2", content: <Math tex="2x+4>1" /> },
                  { id: "3", content: <Math tex="2x-1\ge x-4" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q32" points={pt} prompt={<>Le système qui a pour solution le couple <Math tex="(2,1)" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="\begin{cases}2x-y=3\\x+5y=-7\end{cases}" /> },
                  { id: "2", content: <Math tex="\begin{cases}x+2y=4\\-x+y=-1\end{cases}" />, correct: true },
                  { id: "3", content: <Math tex="\begin{cases}-2x+10y=6\\x-y=0\end{cases}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q33" points={pt} prompt={<>Le couple solution du système <Math tex="\begin{cases}3x+2y=0\\5x+4y=2\end{cases}" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="(-2,1)" /> },
                  { id: "2", content: <Math tex="(0;3)" /> },
                  { id: "3", content: <Math tex="(-2;3)" />, correct: true },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 6. TRIANGLE RECTANGLE ET TRIGONOMÉTRIE ===================== */}
          <LessonSection
            id="section-trigo"
            kicker="06 · Trigonométrie"
            title="Triangle rectangle et trigonométrie"
            tone="muted"
            description="Vocabulaire du triangle rectangle et formules de trigonométrie."
          >
            <div className="space-y-4">
              <QcmQuestion id="q34" points={pt} prompt={<>L&apos;hypoténuse dans un triangle <Math tex="ABC" /> rectangle en <Math tex="C" /> est le côté :</>}
                options={[
                  { id: "1", content: <Math tex="AC" /> },
                  { id: "2", content: <Math tex="AB" />, correct: true },
                  { id: "3", content: <Math tex="BC" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q35" points={pt} prompt={<>Soit <Math tex="ABC" /> un triangle rectangle en <Math tex="C" />, alors le côté adjacent à l&apos;angle <Math tex="\widehat{ABC}" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="AB" /> },
                  { id: "2", content: <Math tex="BC" />, correct: true },
                  { id: "3", content: <Math tex="AC" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q36" points={pt} prompt={<>Quelle est la bonne formule pour le <strong>sinus</strong> d&apos;un angle <Math tex="\hat A" /> :</>}
                options={[
                  { id: "1", content: <Math tex="\tfrac{\text{Adjacent}}{\text{Hypoténuse}}" /> },
                  { id: "2", content: <Math tex="\tfrac{\text{Opposé}}{\text{Hypoténuse}}" />, correct: true },
                  { id: "3", content: <Math tex="\tfrac{\text{Opposé}}{\text{Adjacent}}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q37" points={pt} prompt={<>Quelle est la bonne formule pour la <strong>tangente</strong> d&apos;un angle <Math tex="\hat A" /> :</>}
                options={[
                  { id: "1", content: <Math tex="\tfrac{\text{Adjacent}}{\text{Hypoténuse}}" /> },
                  { id: "2", content: <Math tex="\tfrac{\text{Opposé}}{\text{Hypoténuse}}" /> },
                  { id: "3", content: <Math tex="\tfrac{\text{Opposé}}{\text{Adjacent}}" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q38" points={pt} prompt={<>Quelle est la bonne formule pour le <strong>cosinus</strong> d&apos;un angle <Math tex="\hat A" /> :</>}
                options={[
                  { id: "1", content: <Math tex="\tfrac{\text{Opposé}}{\text{Adjacent}}" /> },
                  { id: "2", content: <Math tex="\tfrac{\text{Adjacent}}{\text{Hypoténuse}}" />, correct: true },
                  { id: "3", content: <Math tex="\tfrac{\text{Opposé}}{\text{Hypoténuse}}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q39" points={pt} prompt="L'égalité correcte est :"
                options={[
                  { id: "1", content: <Math tex="\tan x=\tfrac{\cos x}{\sin x}" /> },
                  { id: "2", content: <Math tex="\cos x+\sin x=1" /> },
                  { id: "3", content: <Math tex="\sin^2 x+\cos^2 x=1" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q40" points={pt} prompt="L'égalité correcte est :"
                options={[
                  { id: "1", content: <Math tex="\tan x=\tfrac{\sin x}{\cos x}" />, correct: true },
                  { id: "2", content: <Math tex="\tan x=\tfrac{\cos x}{\sin x}" /> },
                  { id: "3", content: <Math tex="\tan x=\sin x\times\cos x" /> },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 7. LA DROITE DANS LE PLAN ===================== */}
          <LessonSection
            id="section-droite"
            kicker="07 · La droite"
            title="Coefficient directeur, équations de droites"
            tone="light"
            description="Coefficient directeur, appartenance d'un point à une droite, droites parallèles et perpendiculaires."
          >
            <div className="space-y-4">
              <QcmQuestion id="q41" points={pt} prompt={<>Le coefficient directeur de la droite <Math tex="(AB)" /> peut se calculer comme suit :</>}
                options={[
                  { id: "1", content: <Math tex="\tfrac{y_B+y_A}{x_B+x_A}" /> },
                  { id: "2", content: <Math tex="\tfrac{y_B-y_A}{x_B-x_A}" />, correct: true },
                  { id: "3", content: <Math tex="\tfrac{y_B-y_A}{x_A-x_B}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q42" points={pt} prompt={<>Le point <Math tex="A(1;-1)" /> appartient à la droite d&apos;équation :</>}
                options={[
                  { id: "1", content: <Math tex="y=x+5" /> },
                  { id: "2", content: <Math tex="y=2x-1" /> },
                  { id: "3", content: <Math tex="y=-3x+2" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q43" points={pt} prompt={<>Les droites <Math tex="(D)" /> et <Math tex="(\Delta)" /> d&apos;équations respectives <Math tex="y=-2x-6" /> et <Math tex="y=\tfrac12x+7" /> sont :</>}
                options={[
                  { id: "1", content: "Parallèles" },
                  { id: "2", content: "Perpendiculaires", correct: true },
                  { id: "3", content: "Sécantes" },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q44" points={pt} prompt={<>L&apos;équation réduite de la droite <Math tex="(D)" /> passant par le point <Math tex="A(-2;3)" /> et parallèle à la droite d&apos;équation <Math tex="y=-x+2" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="y=-x+1" />, correct: true },
                  { id: "2", content: <Math tex="y=-x-1" /> },
                  { id: "3", content: <Math tex="y=x+2" /> },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 8. CALCUL VECTORIEL ===================== */}
          <LessonSection
            id="section-vecteurs"
            kicker="08 · Vecteurs"
            title="Coordonnées, milieu, relation de Chasles"
            tone="muted"
            description="Coordonnées d'un vecteur, distance entre deux points, milieu d'un segment, relation de Chasles."
          >
            <div className="space-y-4">
              <QcmQuestion id="q45" points={pt} prompt={<>On considère les points <Math tex="A(2;1)" /> et <Math tex="B(-3;4)" />. Les coordonnées du vecteur <Math tex="\overrightarrow{AB}" /> sont :</>}
                options={[
                  { id: "1", content: <Math tex="\overrightarrow{AB}(-5;3)" />, correct: true },
                  { id: "2", content: <Math tex="\overrightarrow{AB}(-5;5)" /> },
                  { id: "3", content: <Math tex="\overrightarrow{AB}(-3;1)" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q46" points={pt} prompt={<>Soient <Math tex="E" /> et <Math tex="F" /> deux points tels que <Math tex="E(2;0)" /> et <Math tex="F(4;3)" />, alors :</>}
                options={[
                  { id: "1", content: <Math tex="EF=\sqrt{13}" />, correct: true },
                  { id: "2", content: <Math tex="EF=4" /> },
                  { id: "3", content: <Math tex="EF=3\sqrt2" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q47" points={pt} prompt={<>Soit <Math tex="I" /> milieu du segment <Math tex="[AB]" />, donc :</>}
                options={[
                  { id: "1", content: <Math tex="I\left(\tfrac{x_A+x_B}{2};\tfrac{y_A+y_B}{2}\right)" />, correct: true },
                  { id: "2", content: <Math tex="I\left(\tfrac{x_A-x_B}{2};\tfrac{y_A-y_B}{2}\right)" /> },
                  { id: "3", content: <Math tex="I(x_A+x_B;y_A+y_B)" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q48" points={pt} prompt={<>Soit <Math tex="B" /> milieu du segment <Math tex="[AC]" />, alors :</>}
                options={[
                  { id: "1", content: <Math tex="\overrightarrow{BA}=\overrightarrow{BC}" /> },
                  { id: "2", content: <Math tex="\overrightarrow{AB}=\tfrac12\overrightarrow{AC}" />, correct: true },
                  { id: "3", content: <Math tex="\overrightarrow{BA}=2\overrightarrow{BC}" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q49" points={pt} prompt={<>On considère dans le plan les trois points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" />, alors :</>}
                options={[
                  { id: "1", content: <Math tex="\overrightarrow{AB}+\overrightarrow{AC}=\overrightarrow{BC}" /> },
                  { id: "2", content: <Math tex="\overrightarrow{CB}+\overrightarrow{BA}=\overrightarrow{CA}" />, correct: true },
                  { id: "3", content: <>AB + BC = AC (comme longueurs)</> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q50" points={pt} prompt={<><Math tex="ABCD" /> est un parallélogramme, alors l&apos;égalité exacte est :</>}
                options={[
                  { id: "1", content: <Math tex="\overrightarrow{AD}+\overrightarrow{AC}=\overrightarrow{AB}" /> },
                  { id: "2", content: <Math tex="\overrightarrow{DA}+\overrightarrow{DC}=\overrightarrow{DB}" />, correct: true },
                  { id: "3", content: <>DE + AB = DB (avec E non défini)</> },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>

          {/* ===================== 9. GÉNÉRALITÉS SUR LES FONCTIONS ===================== */}
          <LessonSection
            id="section-fonctions"
            kicker="09 · Fonctions"
            title="Fonctions linéaires et affines"
            tone="light"
            description="Image, antécédent, coefficient directeur et ordonnée à l'origine d'une fonction affine."
          >
            <div className="space-y-4">
              <QcmQuestion id="q51" points={pt} prompt="Une fonction linéaire est de la forme :"
                options={[
                  { id: "1", content: <Math tex="f(x)=ax" />, correct: true },
                  { id: "2", content: <Math tex="f(x)=\tfrac{a}{x}" /> },
                  { id: "3", content: <Math tex="f(x)=ax^2" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q52" points={pt} prompt={<>Si le coefficient directeur d&apos;une fonction affine est égal à <Math tex="-4" />, celle-ci s&apos;écrit (<Math tex="a" /> et <Math tex="b" /> deux réels) :</>}
                options={[
                  { id: "1", content: <Math tex="f(x)=ax-4" /> },
                  { id: "2", content: <Math tex="f(x)=-4x+b" />, correct: true },
                  { id: "3", content: <Math tex="f(x)=4x-4" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q53" points={pt} prompt={<>La formule algébrique d&apos;une fonction affine telle que <Math tex="f(4)=3" /> et <Math tex="f(2)=-1" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="f(x)=2x-5" />, correct: true },
                  { id: "2", content: <Math tex="f(x)=2x+5" /> },
                  { id: "3", content: <Math tex="f(x)=2x+4" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q54" points={pt} prompt={<>Soit <Math tex="g" /> la fonction affine telle que <Math tex="g(x)=-3x+9" />, le coefficient directeur vaut :</>}
                options={[
                  { id: "1", content: <Math tex="9" /> },
                  { id: "2", content: <Math tex="-3+9" /> },
                  { id: "3", content: <Math tex="-3" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q55" points={pt} prompt={<>L&apos;image de <Math tex="-2" /> par la fonction <Math tex="f(x)=-5x+7" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="-3" /> },
                  { id: "2", content: <Math tex="17" />, correct: true },
                  { id: "3", content: <Math tex="10" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q56" points={pt} prompt="Pour quelle fonction le nombre 3 a-t-il pour image 10 :"
                options={[
                  { id: "1", content: <Math tex="f(x)=2x-1" /> },
                  { id: "2", content: <Math tex="g(x)=-3x+12" /> },
                  { id: "3", content: <Math tex="h(x)=\tfrac23x+8" />, correct: true },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q57" points={pt} prompt={<>L&apos;antécédent de <Math tex="4" /> par la fonction <Math tex="f(x)=5x-11" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="3" />, correct: true },
                  { id: "2", content: <Math tex="2" /> },
                  { id: "3", content: <Math tex="-2" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q58" points={pt} prompt="La représentation graphique d'une fonction linéaire est une droite :"
                options={[
                  { id: "1", content: "Parallèle à l'axe des abscisses" },
                  { id: "2", content: "Passe par l'origine", correct: true },
                  { id: "3", content: "Parallèle à l'axe des ordonnées" },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q59" points={pt} prompt={<>L&apos;ordonnée à l&apos;origine de la fonction <Math tex="g(x)=7x-9" /> est :</>}
                options={[
                  { id: "1", content: <Math tex="-9" />, correct: true },
                  { id: "2", content: <Math tex="9" /> },
                  { id: "3", content: <Math tex="7" /> },
                ] satisfies QcmOption[]} />
              <QcmQuestion id="q60" points={pt} prompt="Par quelle fonction le nombre -1 a-t-il pour antécédent 6 :"
                options={[
                  { id: "1", content: <Math tex="h(x)=x+2" /> },
                  { id: "2", content: <Math tex="u(x)=x+6" /> },
                  { id: "3", content: <Math tex="v(x)=\tfrac{x}{2}-4" />, correct: true },
                ] satisfies QcmOption[]} />
            </div>
          </LessonSection>
        </QcmSection>
      </EvaluationScore>
    </LessonShell>
  );
}
