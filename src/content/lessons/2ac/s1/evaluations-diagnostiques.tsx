import type { ReactNode } from "react";
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
  title: "Évaluation Diagnostique · Mathématiques | 2AC",
  description:
    "Évaluation diagnostique interactive et corrigée automatiquement : 30 questions sur les nombres, le calcul littéral, les droites remarquables, la symétrie, les angles, l'espace, la proportionnalité et les statistiques. 2ème année collège, semestre 1.",
  kicker: "2ᵉ Année Collège · Semestre 1",
  heroTitle: "Évaluation Diagnostique",
  heroSubtitle:
    "30 questions pour faire le point avant de commencer l'année : opérations, puissances de 10, calcul littéral, géométrie du triangle, symétrie, angles, volumes, proportionnalité et statistiques. Réponds à chaque question, la correction s'affiche au clic.",
  footerNote: "Évaluation diagnostique · Mathématiques, 2ème année collège, semestre 1.",
  sections: [
    { id: "section-nombres", label: "Nombres" },
    { id: "section-comparaisons", label: "Comparaisons" },
    { id: "section-litteral", label: "Littéral" },
    { id: "section-triangles", label: "Triangles" },
    { id: "section-symetrie", label: "Symétrie" },
    { id: "section-angles", label: "Angles" },
    { id: "section-espace", label: "Espace" },
    { id: "section-proportionnalite", label: "Proportion." },
    { id: "section-statistiques", label: "Stats" },
  ],
};

function TypeChip({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "points" }) {
  const cls = tone === "points" ? "bg-orange-100 text-orange-700" : "bg-surface-muted text-foreground-muted";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide ${cls}`}>
      {children}
    </span>
  );
}

/** Header row shown above a group of related QcmQuestions. */
function QuestionHeader({
  n,
  title,
  type,
  points,
}: {
  n: number;
  title: string;
  type: string;
  points: string;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <p className="font-semibold text-foreground">{title}</p>
      <TypeChip>{type}</TypeChip>
      <TypeChip tone="points">{points}</TypeChip>
    </div>
  );
}

function DiagramPanel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface-muted p-4">
      {children}
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
          { value: "30", label: "questions" },
          { value: "20", label: "points au total" },
          { value: "9", label: "thèmes couverts" },
        ]}
        ctas={
          <>
            <a
              href="#section-nombres"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer l&apos;évaluation
            </a>
            <a
              href="#section-statistiques"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Dernière question
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">30</span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              questions · correction au clic
            </span>
          </div>
        }
      />

      <EvaluationScore maxScore={20}>
        <QcmSection total={30} doneMessage="Bravo, tu as répondu à toutes les questions ! Découvre ta note ci-dessous.">
          {/* ===================== 1. NOMBRES & PUISSANCES DE 10 ===================== */}
          <LessonSection
            id="section-nombres"
            kicker="01 · Nombres & calculs"
            title="Opérations, fractions & puissances de 10"
            tone="light"
            description="Priorités opératoires avec décimaux, relatifs et fractions, puis écriture des grands nombres avec des puissances de 10."
          >
            <div className="space-y-8">
              <div>
                <QuestionHeader n={1} title="Question 1" type="QCM" points="2 pts" />
                <p className="mb-4 text-sm text-foreground-muted">Cocher la bonne réponse pour chacun des quatre calculs :</p>
                <div className="space-y-4">
                  <QcmQuestion
                    id="q1a"
                    points={0.5}
                    prompt={<Math tex="3{,}5\times 100+50=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="400" />, correct: true },
                        { id: "2", content: <Math tex="450" /> },
                        { id: "3", content: <Math tex="85" /> },
                        { id: "4", content: <Math tex="4000" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q1b"
                    points={0.5}
                    prompt={<Math tex="2{,}5\times(10{,}3-8{,}3)+(0{,}8+9{,}2)\div 2=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="2" /> },
                        { id: "2", content: <Math tex="5" /> },
                        { id: "3", content: <Math tex="10" />, correct: true },
                        { id: "4", content: <Math tex="100" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q1c"
                    points={0.5}
                    prompt={<Math tex="\dfrac{11}{9}-\dfrac{1}{2}\times\dfrac{7}{3}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{3}{18}" /> },
                        { id: "2", content: <Math tex="\frac{1}{18}" />, correct: true },
                        { id: "3", content: <Math tex="\frac{4}{9}" /> },
                        { id: "4", content: <Math tex="\frac{4}{6}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q1d"
                    points={0.5}
                    prompt={<Math tex="3\times(-2)-(-6)+1=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="1" />, correct: true },
                        { id: "2", content: <Math tex="-1" /> },
                        { id: "3", content: <Math tex="-11" /> },
                        { id: "4", content: <Math tex="13" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                </div>
              </div>

              <div>
                <QuestionHeader n={3} title="Question 3" type="QCM" points="1,5 pt" />
                <p className="mb-4 text-sm text-foreground-muted">Cocher la bonne réponse :</p>
                <div className="space-y-4">
                  <QcmQuestion
                    id="q3a"
                    points={0.5}
                    prompt={
                      <>
                        Le nombre <Math tex="10\,000" /> peut s&apos;écrire sous forme :
                      </>
                    }
                    options={
                      [
                        { id: "1", content: <Math tex="10^{3}" /> },
                        { id: "2", content: <Math tex="10^{-4}" /> },
                        { id: "3", content: <Math tex="10^{4}" />, correct: true },
                        { id: "4", content: <Math tex="10^{5}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q3b"
                    points={0.5}
                    prompt={
                      <>
                        Le nombre <Math tex="(-4)^{3}" /> est :
                      </>
                    }
                    options={
                      [
                        { id: "1", content: "Positif" },
                        { id: "2", content: "Négatif", correct: true },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q3c"
                    points={0.5}
                    prompt={
                      <>
                        L&apos;expression <Math tex="10^{-4}\times 10^{5}\times 10^{2}" /> est égale à :
                      </>
                    }
                    options={
                      [
                        { id: "1", content: <Math tex="10^{11}" /> },
                        { id: "2", content: <Math tex="10^{3}" />, correct: true },
                        { id: "3", content: <Math tex="10^{-6}" /> },
                        { id: "4", content: <Math tex="0" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                </div>
              </div>
            </div>
          </LessonSection>

          {/* ===================== 2. COMPARAISONS ===================== */}
          <LessonSection
            id="section-comparaisons"
            kicker="02 · Comparaisons"
            title="Ranger des nombres relatifs et fractionnaires"
            tone="muted"
            description="Retrouver le bon ordre parmi des nombres relatifs, décimaux et fractionnaires."
          >
            <QcmQuestion
              id="q2"
              points={1}
              prompt={
                <>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                    Question 2 · QCM · 1 pt
                  </span>
                  On considère les nombres suivants :{" "}
                  <Math tex="-\dfrac{7}{2}\ ;\ 4\ ;\ 0\ ;\ -1\ ;\ \dfrac{3}{4}" />. Cocher le bon ordre :
                </>
              }
              options={
                [
                  { id: "1", content: <Math tex="4>\dfrac{3}{4}>-\dfrac{7}{2}>-1>0" /> },
                  { id: "2", content: <Math tex="-\dfrac{7}{2}>-1>0>\dfrac{3}{4}>4" /> },
                  { id: "3", content: <Math tex="4>\dfrac{3}{4}>0>-1>-\dfrac{7}{2}" />, correct: true },
                  { id: "4", content: <Math tex="4>\dfrac{3}{4}>0>-\dfrac{7}{2}>-1" /> },
                ] satisfies QcmOption[]
              }
            />
          </LessonSection>

          {/* ===================== 3. CALCUL LITTÉRAL ===================== */}
          <LessonSection
            id="section-litteral"
            kicker="03 · Calcul littéral"
            title="Factoriser, développer & résoudre une équation"
            tone="light"
            description="Reconnaître une factorisation, effectuer un développement, puis résoudre une équation du premier degré."
          >
            <QuestionHeader n={4} title="Question 4" type="QCM" points="1,5 pt" />
            <div className="space-y-4">
              <QcmQuestion
                id="q4a"
                points={0.5}
                prompt={
                  <>
                    On peut factoriser <Math tex="5a+10" /> sous forme :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="a(5+10)" /> },
                    { id: "2", content: <Math tex="5(a+2)" />, correct: true },
                    { id: "3", content: <Math tex="5(a+10)" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4b"
                points={0.5}
                prompt={
                  <>
                    On peut développer et simplifier l&apos;expression <Math tex="x(x+3)-2x" /> sous forme :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="x^{2}+5x-6" /> },
                    { id: "2", content: <Math tex="x^{2}+3-2x" /> },
                    { id: "3", content: <Math tex="x^{2}+x" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4c"
                points={0.5}
                prompt={
                  <>
                    La solution de l&apos;équation <Math tex="3x=-6" /> est égale à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="2" /> },
                    { id: "2", content: <Math tex="-2" />, correct: true },
                    { id: "3", content: <Math tex="\frac{1}{2}" /> },
                    { id: "4", content: <Math tex="3" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 4. TRIANGLES & DROITES REMARQUABLES ===================== */}
          <LessonSection
            id="section-triangles"
            kicker="04 · Géométrie du triangle"
            title="Construction d'un triangle & droites remarquables"
            tone="muted"
            description="Inégalité triangulaire, puis reconnaissance des droites remarquables (médiatrice, hauteur, bissectrice) et de leurs cercles associés."
          >
            <div className="space-y-8">
              <QcmQuestion
                id="q5a"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 5a · QCM · 1 pt
                    </span>
                    Peut-on construire le triangle <Math tex="ABC" /> tel que <Math tex="AB=3\,cm" />,{" "}
                    <Math tex="AC=4\,cm" />, <Math tex="BC=8\,cm" /> ?
                  </>
                }
                options={
                  [
                    { id: "1", content: "Oui" },
                    { id: "2", content: "Non", correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <p className="text-xs text-foreground-muted">
                Indice : dans un triangle, chaque côté doit être plus court que la somme des deux autres.
                Ici <Math tex="AB+AC=7\,cm" />, ce qui est plus petit que <Math tex="BC=8\,cm" />.
              </p>

              <div>
                <QuestionHeader n={5} title="Question 5b — la figure" type="QCM" points="1,5 pt" />
                <p className="mb-4 text-sm text-foreground-muted">
                  Sur la figure, <Math tex="(D)" /> passe par le milieu de <Math tex="[AC]" /> et lui est
                  perpendiculaire, <Math tex="(\Delta)" /> partage l&apos;angle <Math tex="\widehat{ABC}" /> en deux
                  angles égaux, et <Math tex="(L)" /> est perpendiculaire à <Math tex="[AC]" /> et passe par{" "}
                  <Math tex="B" />. Associer chaque droite à son nom :
                </p>
                <DiagramPanel>
                  <svg viewBox="0 0 420 300" className="w-full max-w-sm">
                    {/* Triangle ABC — A=(60,240) B=(150,60) C=(360,240), scalene on purpose so the
                        médiatrice (foot 210), bissectrice (foot 186) and hauteur (foot 150) land on
                        three clearly distinct points of [AC]. */}
                    <polygon points="60,240 360,240 150,60" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="60" cy="240" r="3.2" fill="#1e293b" />
                    <circle cx="360" cy="240" r="3.2" fill="#1e293b" />
                    <circle cx="150" cy="60" r="3.2" fill="#1e293b" />
                    <text x="40" y="258" fontWeight="700" fontSize="15" fill="#1e293b">A</text>
                    <text x="366" y="258" fontWeight="700" fontSize="15" fill="#1e293b">C</text>
                    <text x="150" y="46" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">B</text>

                    {/* (D) médiatrice de [AC] : perpendiculaire à AC, passe par son milieu (210,240) */}
                    <line x1="210" y1="190" x2="210" y2="290" stroke="#0ea5e9" strokeWidth="2" />
                    <text x="216" y="184" fontWeight="700" fontSize="13" fill="#0ea5e9">(D)</text>
                    <rect x="210" y="228" width="12" height="12" fill="none" stroke="#0ea5e9" strokeWidth="1.6" />
                    <line x1="135" y1="236" x2="135" y2="244" stroke="#334155" strokeWidth="1.6" />
                    <line x1="285" y1="236" x2="285" y2="244" stroke="#334155" strokeWidth="1.6" />

                    {/* (Δ) bissectrice de l'angle ABC : de B à (186,240), vérifié par le théorème de la bissectrice */}
                    <line x1="150" y1="60" x2="186" y2="240" stroke="#16a34a" strokeWidth="2" />
                    <text x="196" y="126" fontWeight="700" fontSize="13" fill="#16a34a">(Δ)</text>
                    <path d="M 172.78 79.52 A 30 30 0 0 1 155.98 89.40" fill="none" stroke="#16a34a" strokeWidth="1.6" />
                    <path d="M 155.98 89.40 A 30 30 0 0 1 136.58 86.83" fill="none" stroke="#16a34a" strokeWidth="1.6" />
                    <line x1="163.16" y1="82.42" x2="167.2" y2="89.32" stroke="#16a34a" strokeWidth="1.6" />
                    <line x1="146.57" y1="85.77" x2="145.51" y2="93.70" stroke="#16a34a" strokeWidth="1.6" />

                    {/* (L) hauteur issue de B : perpendiculaire à AC, passe par B */}
                    <line x1="150" y1="60" x2="150" y2="240" stroke="#e11d48" strokeWidth="2" />
                    <text x="122" y="150" fontWeight="700" fontSize="13" fill="#e11d48">(L)</text>
                    <rect x="150" y="228" width="12" height="12" fill="none" stroke="#e11d48" strokeWidth="1.6" />
                  </svg>
                </DiagramPanel>
                <div className="mt-5 space-y-4">
                  <QcmQuestion
                    id="q5d"
                    points={0.5}
                    prompt={
                      <>
                        La droite <Math tex="(D)" /> est :
                      </>
                    }
                    options={
                      [
                        { id: "1", content: "La médiatrice de [AC]", correct: true },
                        { id: "2", content: "La hauteur issue de B" },
                        { id: "3", content: "La bissectrice de l'angle en B" },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q5e"
                    points={0.5}
                    prompt={
                      <>
                        La droite <Math tex="(\Delta)" /> est :
                      </>
                    }
                    options={
                      [
                        { id: "1", content: "La médiatrice de [AC]" },
                        { id: "2", content: "La hauteur issue de B" },
                        { id: "3", content: "La bissectrice de l'angle en B", correct: true },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q5f"
                    points={0.5}
                    prompt={
                      <>
                        La droite <Math tex="(L)" /> est :
                      </>
                    }
                    options={
                      [
                        { id: "1", content: "La médiatrice de [AC]" },
                        { id: "2", content: "La hauteur issue de B", correct: true },
                        { id: "3", content: "La bissectrice de l'angle en B" },
                      ] satisfies QcmOption[]
                    }
                  />
                </div>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Compléter les affirmations par « circonscrit », « inscrit » ou « hauteurs » :
                </p>
                <div className="space-y-4">
                  <QcmQuestion
                    id="q5g"
                    points={1}
                    prompt="L'orthocentre d'un triangle est le point de rencontre de ses ..."
                    options={
                      [
                        { id: "1", content: "hauteurs", correct: true },
                        { id: "2", content: "médiatrices" },
                        { id: "3", content: "bissectrices" },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q5h"
                    points={1}
                    prompt={
                      <>
                        Les trois médiatrices d&apos;un triangle sont concourantes. Leur point de rencontre est le
                        centre du cercle ... au triangle.
                      </>
                    }
                    options={
                      [
                        { id: "1", content: "inscrit" },
                        { id: "2", content: "circonscrit", correct: true },
                        { id: "3", content: "des hauteurs" },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q5i"
                    points={1}
                    prompt={
                      <>
                        Les trois bissectrices d&apos;un triangle sont concourantes. Leur point de rencontre est le
                        centre du cercle ... dans le triangle.
                      </>
                    }
                    options={
                      [
                        { id: "1", content: "inscrit", correct: true },
                        { id: "2", content: "circonscrit" },
                        { id: "3", content: "des médiatrices" },
                      ] satisfies QcmOption[]
                    }
                  />
                </div>
              </div>
            </div>
          </LessonSection>

          {/* ===================== 5. SYMÉTRIE AXIALE / PONCTUELLE ===================== */}
          <LessonSection
            id="section-symetrie"
            kicker="05 · Symétrie"
            title="Symétrique d'un cercle par rapport à un point"
            tone="light"
            description="Propriétés de la symétrie centrale appliquée à un cercle : rayon conservé, centre transformé."
          >
            <p className="mb-4 text-sm text-foreground-muted">
              On considère un cercle <Math tex="(C)" /> de centre <Math tex="A" /> et un point <Math tex="O" /> extérieur
              au cercle. On construit le symétrique de <Math tex="(C)" /> par rapport à <Math tex="O" />.
            </p>
            <DiagramPanel>
              <svg viewBox="0 0 260 160" className="w-56">
                <circle cx="70" cy="90" r="45" fill="none" stroke="#334155" strokeWidth="2" />
                <circle cx="70" cy="90" r="2.6" fill="#1e293b" />
                <text x="55" y="94" fontWeight="700" fontSize="13" fill="#1e293b">A</text>
                <text x="30" y="52" fontWeight="700" fontSize="13" fill="#1e293b">(C)</text>
                <circle cx="190" cy="40" r="2.6" fill="#e11d48" />
                <text x="196" y="36" fontWeight="700" fontSize="13" fill="#e11d48">O</text>
              </svg>
            </DiagramPanel>
            <div className="mt-5 space-y-4">
              <QcmQuestion
                id="q6a"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 6a · QCM · 1 pt
                    </span>
                    Le cercle symétrique de <Math tex="(C)" /> par rapport à <Math tex="O" /> a :
                  </>
                }
                options={
                  [
                    { id: "1", content: "Le même rayon que (C)", correct: true },
                    { id: "2", content: "Le double du rayon de (C)" },
                    { id: "3", content: "La moitié du rayon de (C)" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q6b"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 6b · QCM · 1 pt
                    </span>
                    Si <Math tex="A'" /> est le centre du cercle symétrique, alors :
                  </>
                }
                options={
                  [
                    { id: "1", content: <><Math tex="O" /> est le milieu de <Math tex="[AA']" /></>, correct: true },
                    { id: "2", content: <><Math tex="A'=A" /></> },
                    { id: "3", content: <><Math tex="O" /> appartient à <Math tex="[AA']" /> sans en être le milieu</> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 6. ANGLES ===================== */}
          <LessonSection
            id="section-angles"
            kicker="06 · Angles"
            title="Parallélogramme & droites parallèles"
            tone="muted"
            description="Angles co-intérieurs formés par une sécante et deux droites parallèles, propriétés du parallélogramme."
          >
            <p className="mb-4 text-sm text-foreground-muted">
              <Math tex="ABCD" /> est un parallélogramme, donc <Math tex="(AB)\,//\,(DC)" />. <Math tex="E" /> est un
              point de la droite <Math tex="(DA)" />, avec <Math tex="D" />, <Math tex="A" />, <Math tex="E" /> alignés
              dans cet ordre.
            </p>
            <DiagramPanel>
              <svg viewBox="0 0 410 270" className="w-full max-w-xs">
                {/* True parallelogram: A(160,80) B(360,80) C(275,227) D(75,227) so AB=DC and AD=BC
                    as vectors exactly; E is A plus 0.35·(A−D) along (DA), beyond A. Angle ABC is
                    built to be exactly 60° and BCD exactly 120° (co-interior, sum 180°). */}
                <line x1="130" y1="80" x2="390" y2="80" stroke="#334155" strokeWidth="2" />
                <line x1="45" y1="227" x2="305" y2="227" stroke="#334155" strokeWidth="2" />
                <line x1="62.5" y1="248.6" x2="202.3" y2="6.9" stroke="#334155" strokeWidth="2" />
                <line x1="262.5" y1="248.6" x2="372.5" y2="58.4" stroke="#334155" strokeWidth="2" />

                <circle cx="160" cy="80" r="2.8" fill="#1e293b" />
                <text x="150" y="66" fontWeight="700" fontSize="14" fill="#1e293b">A</text>
                <circle cx="360" cy="80" r="2.8" fill="#1e293b" />
                <text x="368" y="70" fontWeight="700" fontSize="14" fill="#1e293b">B</text>
                <circle cx="75" cy="227" r="2.8" fill="#1e293b" />
                <text x="46" y="243" fontWeight="700" fontSize="14" fill="#1e293b">D</text>
                <circle cx="275" cy="227" r="2.8" fill="#1e293b" />
                <text x="283" y="243" fontWeight="700" fontSize="14" fill="#1e293b">C</text>
                <circle cx="189.8" cy="28.6" r="2.8" fill="#1e293b" />
                <text x="197" y="20" fontWeight="700" fontSize="14" fill="#1e293b">E</text>

                <path d="M 347 102.52 A 26 26 0 0 1 334 80" fill="none" stroke="#16a34a" strokeWidth="1.6" />
                <text x="303" y="112" fontWeight="700" fontSize="12" fill="#16a34a">60°</text>
                <path d="M 249 227 A 26 26 0 0 1 288 204.48" fill="none" stroke="#16a34a" strokeWidth="1.6" />
                <text x="236" y="192" fontWeight="700" fontSize="12" fill="#16a34a">120°</text>
              </svg>
            </DiagramPanel>
            <p className="mt-3 text-xs text-foreground-muted">
              Indice : dans un parallélogramme, deux angles opposés sont égaux et deux angles consécutifs sont
              supplémentaires (leur somme vaut <Math tex="180°" />).
            </p>
            <div className="mt-5 space-y-4">
              <QcmQuestion
                id="q7a"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 7a · QCM · 1 pt
                    </span>
                    Déterminer la mesure de l&apos;angle <Math tex="\widehat{BAD}" /> :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="90°" /> },
                    { id: "2", content: <Math tex="120°" />, correct: true },
                    { id: "3", content: <Math tex="60°" /> },
                    { id: "4", content: <Math tex="180°" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q7b"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 7b · QCM · 1 pt
                    </span>
                    Déterminer la mesure de l&apos;angle <Math tex="\widehat{BAE}" /> :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="90°" /> },
                    { id: "2", content: <Math tex="120°" /> },
                    { id: "3", content: <Math tex="60°" />, correct: true },
                    { id: "4", content: <Math tex="180°" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 7. GÉOMÉTRIE DANS L'ESPACE ===================== */}
          <LessonSection
            id="section-espace"
            kicker="07 · Espace"
            title="Volume d'un pavé droit"
            tone="light"
            description="Calculer le volume d'un solide à partir de ses trois dimensions."
          >
            <p className="mb-4 text-sm text-foreground-muted">On considère le pavé droit suivant :</p>
            <DiagramPanel>
              <svg viewBox="0 0 300 200" className="w-64">
                <polygon points="40,70 40,150 190,150 190,70" fill="none" stroke="#334155" strokeWidth="2" />
                <polygon points="40,70 90,30 240,30 190,70" fill="none" stroke="#334155" strokeWidth="2" />
                <polygon points="190,70 240,30 240,110 190,150" fill="none" stroke="#334155" strokeWidth="2" />
                <line x1="40" y1="150" x2="90" y2="110" stroke="#334155" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="90" y1="110" x2="240" y2="110" stroke="#334155" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="90" y1="110" x2="90" y2="30" stroke="#334155" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="90" y1="70" x2="90" y2="30" stroke="#334155" strokeWidth="1.6" />
                <text x="150" y="24" textAnchor="middle" fontWeight="700" fontSize="13" fill="#1e293b">5 cm</text>
                <text x="70" y="52" textAnchor="middle" fontWeight="700" fontSize="13" fill="#1e293b">3 cm</text>
                <text x="20" y="112" textAnchor="middle" fontWeight="700" fontSize="13" fill="#1e293b">2 cm</text>
              </svg>
            </DiagramPanel>
            <div className="mt-5">
              <QcmQuestion
                id="q8"
                points={0.5}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 8 · QCM · 0,5 pt
                    </span>
                    Déterminer le volume de ce solide :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="30\,cm^{3}" />, correct: true },
                    { id: "2", content: <Math tex="10\,cm^{3}" /> },
                    { id: "3", content: <Math tex="60\,cm^{3}" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 8. PROPORTIONNALITÉ ===================== */}
          <LessonSection
            id="section-proportionnalite"
            kicker="08 · Proportionnalité"
            title="La quatrième proportionnelle"
            tone="muted"
            description="Retrouver le coefficient de proportionnalité d'un tableau, puis en déduire la valeur manquante."
          >
            <p className="mb-4 text-sm text-foreground-muted">Voici un tableau de proportionnalité :</p>
            <div className="mb-5 overflow-x-auto">
              <table className="w-full min-w-[360px] border-collapse text-center">
                <tbody>
                  <tr>
                    <td className="border border-border bg-surface-muted p-3 font-semibold">?</td>
                    <td className="border border-border bg-surface-muted p-3 font-semibold">3</td>
                    <td className="border border-border bg-surface-muted p-3 font-semibold">2,5</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">20</td>
                    <td className="border border-border p-3 font-semibold">12</td>
                    <td className="border border-border p-3 font-semibold">10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4 text-xs text-foreground-muted">
              Indice : vérifie que le rapport entre les deux lignes est constant, par exemple{" "}
              <Math tex="3\div 12 = 0{,}25" /> et <Math tex="2{,}5\div 10 = 0{,}25" />.
            </p>
            <QcmQuestion
              id="q9"
              points={1}
              prompt="La quatrième proportionnelle (la case manquante) vaut :"
              options={
                [
                  { id: "1", content: <Math tex="4" /> },
                  { id: "2", content: <Math tex="5" />, correct: true },
                  { id: "3", content: <Math tex="60" /> },
                  { id: "4", content: <Math tex="6" /> },
                ] satisfies QcmOption[]
              }
            />
          </LessonSection>

          {/* ===================== 9. STATISTIQUES ===================== */}
          <LessonSection
            id="section-statistiques"
            kicker="09 · Statistiques"
            title="Effectifs & pourcentages"
            tone="light"
            description="Construire un tableau d'effectifs à partir d'une série de notes, puis calculer un pourcentage."
          >
            <p className="mb-4 text-sm text-foreground-muted">
              Voici les notes obtenues par les élèves de la classe de 2AC lors d&apos;un devoir :
            </p>
            <p className="mb-5 rounded-xl border border-border bg-surface-muted p-4 text-center font-mono text-sm font-semibold text-foreground">
              18 — 16 — 16 — 10 — 10 — 10 — 8 — 8 — 8 — 8 — 6 — 6
            </p>
            <div>
              <QuestionHeader n={10} title="Question 10a" type="QCM" points="2,5 pts" />
              <p className="mb-4 text-sm text-foreground-muted">Compléter le tableau des effectifs : quel est l&apos;effectif de chaque note ?</p>
              <div className="space-y-4">
                <QcmQuestion
                  id="q10a"
                  points={0.5}
                  prompt="Effectif de la note 18 :"
                  options={
                    [
                      { id: "1", content: <Math tex="1" />, correct: true },
                      { id: "2", content: <Math tex="2" /> },
                      { id: "3", content: <Math tex="3" /> },
                      { id: "4", content: <Math tex="4" /> },
                    ] satisfies QcmOption[]
                  }
                />
                <QcmQuestion
                  id="q10b"
                  points={0.5}
                  prompt="Effectif de la note 16 :"
                  options={
                    [
                      { id: "1", content: <Math tex="1" /> },
                      { id: "2", content: <Math tex="2" />, correct: true },
                      { id: "3", content: <Math tex="3" /> },
                      { id: "4", content: <Math tex="4" /> },
                    ] satisfies QcmOption[]
                  }
                />
                <QcmQuestion
                  id="q10c"
                  points={0.5}
                  prompt="Effectif de la note 10 :"
                  options={
                    [
                      { id: "1", content: <Math tex="1" /> },
                      { id: "2", content: <Math tex="2" /> },
                      { id: "3", content: <Math tex="3" />, correct: true },
                      { id: "4", content: <Math tex="4" /> },
                    ] satisfies QcmOption[]
                  }
                />
                <QcmQuestion
                  id="q10d"
                  points={0.5}
                  prompt="Effectif de la note 8 :"
                  options={
                    [
                      { id: "1", content: <Math tex="2" /> },
                      { id: "2", content: <Math tex="3" /> },
                      { id: "3", content: <Math tex="4" />, correct: true },
                      { id: "4", content: <Math tex="5" /> },
                    ] satisfies QcmOption[]
                  }
                />
                <QcmQuestion
                  id="q10e"
                  points={0.5}
                  prompt="Effectif de la note 6 :"
                  options={
                    [
                      { id: "1", content: <Math tex="1" /> },
                      { id: "2", content: <Math tex="2" />, correct: true },
                      { id: "3", content: <Math tex="3" /> },
                      { id: "4", content: <Math tex="4" /> },
                    ] satisfies QcmOption[]
                  }
                />
              </div>
            </div>
            <div className="mt-6">
              <QcmQuestion
                id="q10f"
                points={0.5}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 10b · QCM · 0,5 pt
                    </span>
                    Cocher le pourcentage d&apos;élèves qui ont une note égale à 10 :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="30\%" /> },
                    { id: "2", content: <Math tex="25\%" />, correct: true },
                    { id: "3", content: <Math tex="50\%" /> },
                    { id: "4", content: <Math tex="75\%" /> },
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
