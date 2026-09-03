import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Math,
  ExerciseGroup,
  ExerciseCard,
  QcmSection,
  QcmQuestion,
  EvaluationScore,
  type LessonMeta,
  type QcmOption,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Évaluation Diagnostique · Mathématiques | 3AC",
  description:
    "Évaluation diagnostique interactive et corrigée automatiquement : 15 questions sur les nombres relatifs, le calcul littéral, la proportionnalité et la géométrie. 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Semestre 1",
  heroTitle: "Évaluation Diagnostique",
  heroSubtitle:
    "15 questions pour faire le point : nombres relatifs, fractions, calcul littéral, proportionnalité et géométrie. Réponds à chaque question, la correction s'affiche au clic.",
  footerNote: "Évaluation diagnostique · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "section-nombres", label: "Nombres" },
    { id: "section-comparaisons", label: "Comparaisons" },
    { id: "section-litteral", label: "Littéral" },
    { id: "section-proportionnalite", label: "Proportion." },
    { id: "section-cercle", label: "Cercle" },
    { id: "section-symetrie", label: "Symétrie" },
    { id: "section-triangles", label: "Triangles" },
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

/** Header row reused above grouped QCM blocks (mirrors ExerciseCard's own header style). */
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

function FillCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 text-sm">{children}</div>
  );
}

function AnswerCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
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
          { value: "15", label: "questions" },
          { value: "20", label: "points au total" },
          { value: "7", label: "thèmes couverts" },
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
              href="#section-triangles"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Dernière question
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">15</span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              questions · correction au clic
            </span>
          </div>
        }
      />

      <EvaluationScore maxScore={20}>
      <ExerciseGroup
        total={3}
        celebrationTitle="Bravo, tous les champs à compléter sont vérifiés !"
        celebrationSubtitle="Relis les questions à choix multiples ci-dessus si besoin."
      >
        <QcmSection total={30} doneMessage="Quiz terminé, toutes les questions à choix multiples sont répondues !">
          {/* ===================== 1. NOMBRES & FRACTIONS ===================== */}
          <LessonSection
            id="section-nombres"
            kicker="01 · Nombres & calculs"
            title="Nombres relatifs, fractions & écriture scientifique"
            tone="light"
            description="Les bases du calcul numérique : opérations sur les fractions, résolution d'équation, écriture scientifique et simplification de rationnels."
          >
            <div className="space-y-8">
              <div>
                <QuestionHeader n={1} title="Question 1" type="QCM" points="1,5 pt" />
                <p className="mb-4 text-sm text-foreground-muted">Cocher la bonne réponse pour chacun des trois calculs :</p>
                <div className="space-y-4">
                  <QcmQuestion
                    id="q1a"
                    points={0.5}
                    prompt={<Math tex="\dfrac{-6}{5}+\dfrac{1}{10}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{-11}{71}" /> },
                        { id: "2", content: <Math tex="\frac{-5}{15}" /> },
                        { id: "3", content: <Math tex="\frac{-1}{2}" /> },
                        { id: "4", content: <Math tex="\frac{-2}{3}" /> },
                        { id: "5", content: <Math tex="\frac{-11}{10}" />, correct: true },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q1b"
                    points={0.5}
                    prompt={<Math tex="\dfrac{3}{2}-\dfrac{7}{4}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{-1}{4}" />, correct: true },
                        { id: "2", content: <Math tex="\frac{-1}{2}" /> },
                        { id: "3", content: <Math tex="\frac{-5}{4}" /> },
                        { id: "4", content: <Math tex="\frac{-17}{2}" /> },
                        { id: "5", content: <Math tex="\frac{5}{3}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q1c"
                    points={0.5}
                    prompt={<Math tex="\dfrac{4}{7}+\dfrac{1}{7}\times 3=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{15}{7}" /> },
                        { id: "2", content: <Math tex="\frac{-1}{8}" /> },
                        { id: "3", content: <Math tex="1" />, correct: true },
                        { id: "4", content: <Math tex="\frac{2{,}5}{9}" /> },
                        { id: "5", content: <Math tex="\frac{-1}{7}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                </div>
              </div>

              <QcmQuestion
                id="q2"
                points={0.5}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 2 · QCM · 0,5 pt
                    </span>
                    La solution de cette équation <Math tex="\dfrac{2}{3}x-2=0" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="3" />, correct: true },
                    { id: "2", content: <Math tex="\frac{1}{6}" /> },
                    { id: "3", content: <Math tex="\frac{3}{2}" /> },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q3"
                points={0.5}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 3 · QCM · 0,5 pt
                    </span>
                    Le produit <Math tex="2{,}5\times 10^{-3}" /> est égal à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="0{,}025" /> },
                    { id: "2", content: <Math tex="2500" /> },
                    { id: "3", content: <Math tex="0{,}0025" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />

              <div>
                <QuestionHeader n={4} title="Question 4" type="QCM" points="3 pts" />
                <p className="mb-4 text-sm text-foreground-muted">
                  Simplifier les rationnels suivants (fraction irréductible) :
                </p>
                <div className="space-y-4">
                  <QcmQuestion
                    id="q4a"
                    points={0.6}
                    prompt={<Math tex="\dfrac{45}{18}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{5}{2}" />, correct: true },
                        { id: "2", content: <Math tex="\frac{15}{6}" /> },
                        { id: "3", content: <Math tex="\frac{9}{2}" /> },
                        { id: "4", content: <Math tex="\frac{5}{3}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q4b"
                    points={0.6}
                    prompt={<Math tex="\dfrac{40}{16}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{5}{2}" />, correct: true },
                        { id: "2", content: <Math tex="\frac{20}{8}" /> },
                        { id: "3", content: <Math tex="\frac{8}{3}" /> },
                        { id: "4", content: <Math tex="\frac{5}{4}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q4c"
                    points={0.6}
                    prompt={<Math tex="\dfrac{-36}{24}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{-3}{2}" />, correct: true },
                        { id: "2", content: <Math tex="\frac{-3}{4}" /> },
                        { id: "3", content: <Math tex="\frac{3}{2}" /> },
                        { id: "4", content: <Math tex="\frac{-6}{4}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q4d"
                    points={0.6}
                    prompt={<Math tex="\dfrac{72}{90}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{4}{5}" />, correct: true },
                        { id: "2", content: <Math tex="\frac{8}{9}" /> },
                        { id: "3", content: <Math tex="\frac{4}{9}" /> },
                        { id: "4", content: <Math tex="\frac{5}{4}" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q4e"
                    points={0.6}
                    prompt={<Math tex="\dfrac{112}{-48}=\ ?" />}
                    options={
                      [
                        { id: "1", content: <Math tex="\frac{-7}{3}" />, correct: true },
                        { id: "2", content: <Math tex="\frac{7}{3}" /> },
                        { id: "3", content: <Math tex="\frac{-7}{6}" /> },
                        { id: "4", content: <Math tex="\frac{-14}{3}" /> },
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
            title="Comparer & encadrer des nombres"
            tone="muted"
            description={<>Comparer des quotients avec <Math tex="<" />, <Math tex="=" />, <Math tex=">" />, puis encadrer des décimaux par deux entiers consécutifs.</>}
          >
            <div className="space-y-8">
              <div>
                <QuestionHeader n={6} title="Question 6" type="QCM" points="2 pts" />
                <p className="mb-4 text-sm text-foreground-muted">
                  Comparer les expressions suivantes (<Math tex="<" />, <Math tex="=" /> ou <Math tex=">" />) :
                </p>
                <div className="space-y-4">
                  <QcmQuestion
                    id="q6a"
                    points={0.5}
                    prompt={<Math tex="\dfrac{-1}{2}\ \square\ \dfrac{-3}{2}" />}
                    options={
                      [
                        { id: "1", content: <Math tex="<" /> },
                        { id: "2", content: <Math tex="=" /> },
                        { id: "3", content: <Math tex=">" />, correct: true },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q6b"
                    points={0.5}
                    prompt={<Math tex="\dfrac{5}{-3}\ \square\ \dfrac{5}{-9}" />}
                    options={
                      [
                        { id: "1", content: <Math tex="<" />, correct: true },
                        { id: "2", content: <Math tex="=" /> },
                        { id: "3", content: <Math tex=">" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q6c"
                    points={0.5}
                    prompt={<Math tex="\dfrac{1}{4}\ \square\ \dfrac{2}{4}" />}
                    options={
                      [
                        { id: "1", content: <Math tex="<" />, correct: true },
                        { id: "2", content: <Math tex="=" /> },
                        { id: "3", content: <Math tex=">" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                  <QcmQuestion
                    id="q6d"
                    points={0.5}
                    prompt={<Math tex="\dfrac{-5}{3}\ \square\ \dfrac{3}{-5}" />}
                    options={
                      [
                        { id: "1", content: <Math tex="<" />, correct: true },
                        { id: "2", content: <Math tex="=" /> },
                        { id: "3", content: <Math tex=">" /> },
                      ] satisfies QcmOption[]
                    }
                  />
                </div>
                <p className="mt-3 text-xs text-foreground-muted">
                  Exemple : <Math tex="\dfrac{7}{10} < \dfrac{8}{10}" />
                </p>
              </div>

              <ExerciseCard
                id="7"
                index={1}
                points={1}
                title="Question 7"
                itemsLabel="À compléter · 1 pt"
                items={
                  <div>
                    <p className="mb-4 text-sm text-foreground-muted">
                      Encadrer chaque nombre décimal par deux entiers consécutifs :
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <FillCard><Math tex="\ ?\ < 212{,}5 <\ ?" /></FillCard>
                      <FillCard><Math tex="\ ?\ < 302{,}38 <\ ?" /></FillCard>
                      <FillCard><Math tex="\ ?\ < 5{,}24 <\ ?" /></FillCard>
                    </div>
                  </div>
                }
                correction={
                  <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                    <AnswerCard n={1}><Math tex="\mathbf{212} < 212{,}5 < \mathbf{213}" /></AnswerCard>
                    <AnswerCard n={2}><Math tex="\mathbf{302} < 302{,}38 < \mathbf{303}" /></AnswerCard>
                    <AnswerCard n={3}><Math tex="\mathbf{5} < 5{,}24 < \mathbf{6}" /></AnswerCard>
                  </div>
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 3. CALCUL LITTÉRAL ===================== */}
          <LessonSection
            id="section-litteral"
            kicker="03 · Calcul littéral"
            title="Développer & factoriser"
            tone="light"
            description="Reconnaître une factorisation et effectuer un développement d'expression littérale."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <QcmQuestion
                id="q8"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 8 · 1 pt
                    </span>
                    La factorisation de l&apos;expression <Math tex="\dfrac{7}{2}x+\dfrac{7}{2}" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac{14}{2}(x-1)" /> },
                    { id: "2", content: <Math tex="\dfrac{7}{2}(x-1)" /> },
                    { id: "3", content: <Math tex="\dfrac{7}{2}(x+1)" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q9"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 9 · 1 pt
                    </span>
                    Le développement de l&apos;expression <Math tex="\dfrac{3}{-2}(2x-2)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="6x+6" /> },
                    { id: "2", content: <Math tex="-3x+3" />, correct: true },
                    { id: "3", content: <Math tex="6x-3" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 4. PROPORTIONNALITÉ ===================== */}
          <LessonSection
            id="section-proportionnalite"
            kicker="04 · Proportionnalité"
            title="Tableau de proportionnalité"
            tone="muted"
            description="Retrouver le coefficient de proportionnalité et compléter les valeurs manquantes."
          >
            <ExerciseCard
              id="10"
              index={2}
              points={1.5}
              title="Question 10"
              itemsLabel="À compléter · 1,5 pt"
              items={
                <div>
                  <p className="mb-4 text-sm text-foreground-muted">
                    Compléter le tableau pour qu&apos;il représente une situation de proportionnalité :
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[420px] border-collapse text-center">
                      <tbody>
                        <tr>
                          <td className="border border-border bg-surface-muted p-3 font-semibold">2</td>
                          <td className="border border-border bg-surface-muted p-3 font-semibold">3</td>
                          <td className="border border-border bg-surface-muted p-3 font-semibold">?</td>
                          <td className="border border-border bg-surface-muted p-3 font-semibold">0</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 font-semibold">8</td>
                          <td className="border border-border p-3">?</td>
                          <td className="border border-border p-3 font-semibold">16</td>
                          <td className="border border-border p-3">?</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-foreground-muted">
                    Indice : cherche d&apos;abord le coefficient de proportionnalité entre la 1ère et la 2ème ligne.
                  </p>
                </div>
              }
              correction={
                <div className="overflow-x-auto text-sm">
                  <table className="w-full min-w-[420px] border-collapse text-center">
                    <tbody>
                      <tr>
                        <td className="border border-green-500/20 bg-surface p-3 font-semibold">2</td>
                        <td className="border border-green-500/20 bg-surface p-3 font-semibold">3</td>
                        <td className="border border-green-500/20 bg-surface p-3 font-bold text-green-700">4</td>
                        <td className="border border-green-500/20 bg-surface p-3 font-semibold">0</td>
                      </tr>
                      <tr>
                        <td className="border border-green-500/20 bg-surface p-3 font-semibold">8</td>
                        <td className="border border-green-500/20 bg-surface p-3 font-bold text-green-700">12</td>
                        <td className="border border-green-500/20 bg-surface p-3 font-semibold">16</td>
                        <td className="border border-green-500/20 bg-surface p-3 font-bold text-green-700">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
            />
          </LessonSection>

          {/* ===================== 5. GÉOMÉTRIE DU CERCLE ===================== */}
          <LessonSection
            id="section-cercle"
            kicker="05 · Géométrie"
            title="Cercle circonscrit & cercle inscrit"
            tone="light"
            description="Propriété du triangle rectangle inscrit dans un demi-cercle, puis les constructions du cercle circonscrit et du cercle inscrit à un triangle."
          >
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
                SI un triangle <Math tex="ABC" /> est rectangle en <Math tex="A" /> <strong>ALORS</strong>{" "}
                <Math tex="ABC" /> est inscrit dans un demi-cercle de diamètre <Math tex="[BC]" />.
              </div>

              <QcmQuestion
                id="q5"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 5 · QCM · 1 pt
                    </span>
                    Compléter : SI un triangle <Math tex="ABC" /> est rectangle en <Math tex="B" />{" "}
                    <strong>ALORS</strong>…
                  </>
                }
                options={
                  [
                    {
                      id: "1",
                      content: <><Math tex="ABC" /> est inscrit dans un demi-cercle de diamètre <Math tex="[AC]" />.</>,
                      correct: true,
                    },
                    {
                      id: "2",
                      content: <><Math tex="ABC" /> est inscrit dans un demi-cercle de diamètre <Math tex="[AB]" />.</>,
                    },
                    {
                      id: "3",
                      content: <><Math tex="ABC" /> est inscrit dans un demi-cercle de diamètre <Math tex="[BC]" />.</>,
                    },
                    {
                      id: "4",
                      content: <><Math tex="ABC" /> est inscrit dans un cercle de centre <Math tex="B" />.</>,
                    },
                  ] satisfies QcmOption[]
                }
              />

              <QcmQuestion
                id="q11"
                points={1.5}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 11 · QCM · 1,5 pt
                    </span>
                    Comment trace-t-on le cercle circonscrit à un triangle ?
                  </>
                }
                options={
                  [
                    {
                      id: "1",
                      content: "On trace les bissectrices d'au moins deux angles du triangle ; leur point d'intersection est le centre du cercle circonscrit.",
                    },
                    {
                      id: "2",
                      content: "On trace les médiatrices d'au moins deux côtés du triangle ; leur point d'intersection est le centre du cercle circonscrit.",
                      correct: true,
                    },
                    {
                      id: "3",
                      content: "On trace les hauteurs du triangle ; leur point d'intersection est le centre du cercle circonscrit.",
                    },
                    {
                      id: "4",
                      content: "On trace les médianes du triangle ; leur point d'intersection est le centre du cercle circonscrit.",
                    },
                  ] satisfies QcmOption[]
                }
              />

              <ExerciseCard
                id="12"
                index={3}
                points={0.5}
                title="Question 12"
                itemsLabel="À compléter · 0,5 pt"
                items={
                  <div>
                    <p className="mb-4 text-sm text-foreground-muted">Compléter les étapes de calcul suivantes :</p>
                    <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4">
                      <Math tex="\dfrac{-1}{10}-\dfrac{3}{30}=\dfrac{\,?\,}{30}-\dfrac{3}{30}=\dfrac{\,?-3\,}{30}=\dfrac{\,?\,}{30}" />
                    </div>
                  </div>
                }
                correction={
                  <AnswerCard n="·">
                    <Math tex="\dfrac{-1}{10}-\dfrac{3}{30}=\dfrac{\mathbf{-3}}{30}-\dfrac{3}{30}=\dfrac{\mathbf{-3}-3}{30}=\dfrac{\mathbf{-6}}{30}" />
                  </AnswerCard>
                }
              />

              <QcmQuestion
                id="q13"
                points={1}
                prompt={
                  <>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground-muted">
                      Question 13 · QCM · 1 pt
                    </span>
                    Comment trace-t-on le cercle inscrit à un triangle ?
                  </>
                }
                options={
                  [
                    {
                      id: "1",
                      content: "On trace les médiatrices d'au moins deux côtés du triangle ; leur point d'intersection est le centre du cercle inscrit.",
                    },
                    {
                      id: "2",
                      content: "On trace les bissectrices d'au moins deux angles du triangle ; leur point d'intersection est le centre du cercle inscrit (rayon = distance à un côté).",
                      correct: true,
                    },
                    {
                      id: "3",
                      content: "On trace les hauteurs du triangle ; leur point d'intersection est le centre du cercle inscrit.",
                    },
                    {
                      id: "4",
                      content: "On trace les médianes du triangle ; leur point d'intersection est le centre du cercle inscrit.",
                    },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 6. SYMÉTRIE AXIALE ===================== */}
          <LessonSection
            id="section-symetrie"
            kicker="06 · Symétrie"
            title="Symétrie axiale"
            tone="muted"
            description="Propriétés de la symétrie par rapport à une droite : conservation des longueurs, des angles et de l'alignement."
          >
            <QuestionHeader n={14} title="Question 14" type="QCM" points="2 pts" />
            <div className="space-y-3">
              <QcmQuestion
                id="q14a"
                points={1 / 3}
                prompt="La symétrie par rapport à une droite s'appelle aussi :"
                options={
                  [
                    { id: "1", content: "La symétrie centrale" },
                    { id: "2", content: "La symétrie orthogonale" },
                    { id: "3", content: "La symétrie axiale", correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q14b"
                points={1 / 3}
                prompt="L'image d'un segment par rapport à une droite est :"
                options={
                  [
                    { id: "1", content: "Un segment", correct: true },
                    { id: "2", content: "Une droite" },
                    { id: "3", content: "Une demi-droite" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q14c"
                points={1 / 3}
                prompt="Un triangle isocèle possède :"
                options={
                  [
                    { id: "1", content: "Un axe de symétrie", correct: true },
                    { id: "2", content: "Deux axes de symétrie" },
                    { id: "3", content: "Trois axes de symétrie" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q14d"
                points={1 / 3}
                prompt={
                  <>
                    Si les points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" /> sont alignés, alors leurs
                    symétriques par rapport à une droite :
                  </>
                }
                options={
                  [
                    { id: "1", content: "Forment un triangle équilatéral" },
                    { id: "2", content: "Sont sur un même arc de cercle" },
                    { id: "3", content: "Sont alignés", correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q14e"
                points={1 / 3}
                prompt={
                  <>
                    Soit <Math tex="H" /> le projeté orthogonal de <Math tex="M" /> sur une droite <Math tex="(d)" />.
                    Si <Math tex="N" /> est le symétrique de <Math tex="M" /> par rapport à <Math tex="(d)" />, alors :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="MN=MH" /> },
                    { id: "2", content: <>H est le milieu de <Math tex="[MN]" /></>, correct: true },
                    { id: "3", content: <Math tex="NMH" />, },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q14f"
                points={1 / 3}
                prompt="L'image d'un angle par une symétrie axiale est :"
                options={
                  [
                    { id: "1", content: "Un angle droit" },
                    { id: "2", content: "Un triangle" },
                    { id: "3", content: "Un angle de même mesure", correct: true },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== 7. TRIANGLES, PARALLÉLOGRAMME & VECTEURS ===================== */}
          <LessonSection
            id="section-triangles"
            kicker="07 · Géométrie plane"
            title="Triangles, parallélogramme & droite des milieux"
            tone="light"
            description="Droite des milieux, propriétés du parallélogramme, théorème de Thalès et vocabulaire des droites remarquables du triangle."
          >
            <QuestionHeader n={15} title="Question 15" type="QCM" points="2 pts" />
            <div className="space-y-3">
              <QcmQuestion
                id="q15a"
                points={0.4}
                prompt={
                  <>
                    <Math tex="ABC" /> est un triangle. <Math tex="M" /> est le milieu de <Math tex="[AB]" /> et{" "}
                    <Math tex="N" /> le milieu de <Math tex="[AC]" />, alors :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="(BC)\,//\,(MN)\text{ et }BC=2MN" />, correct: true },
                    { id: "2", content: <Math tex="(BC)\,//\,(AC)\text{ et }BC=2MN" /> },
                    { id: "3", content: <Math tex="MN=2AC" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q15b"
                points={0.4}
                prompt="Les diagonales d'un rectangle sont :"
                options={
                  [
                    { id: "1", content: "Parallèles" },
                    { id: "2", content: "De même mesure", correct: true },
                    { id: "3", content: "Perpendiculaires" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q15c"
                points={0.4}
                prompt={<><Math tex="ABCD" /> est un parallélogramme, alors :</>}
                options={
                  [
                    { id: "1", content: <Math tex="\vec{AB}=\vec{DC}" />, correct: true },
                    { id: "2", content: <Math tex="\vec{AC}=\vec{BC}" /> },
                    { id: "3", content: <Math tex="\vec{AD}=\vec{DC}" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q15d"
                points={0.4}
                prompt={
                  <div className="space-y-3">
                    <p>
                      Sur la figure ci-contre, on sait que <Math tex="(DE)\,//\,(BC)" /> :
                    </p>
                    <DiagramPanel>
                      <svg viewBox="0 0 240 220" className="w-44">
                        <polygon points="120,20 40,190 200,190" fill="none" stroke="#334155" strokeWidth="2" />
                        <line x1="76" y1="105" x2="164" y2="105" stroke="#e11d48" strokeWidth="2.2" />
                        <line x1="40" y1="190" x2="200" y2="190" stroke="#e11d48" strokeWidth="2.2" />
                        <circle cx="120" cy="20" r="3.2" fill="#1e293b" />
                        <circle cx="76" cy="105" r="3.2" fill="#1e293b" />
                        <circle cx="164" cy="105" r="3.2" fill="#1e293b" />
                        <circle cx="40" cy="190" r="3.2" fill="#1e293b" />
                        <circle cx="200" cy="190" r="3.2" fill="#1e293b" />
                        <text x="120" y="12" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">A</text>
                        <text x="63" y="100" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1e293b">D</text>
                        <text x="177" y="100" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1e293b">E</text>
                        <text x="26" y="204" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">B</text>
                        <text x="214" y="204" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">C</text>
                      </svg>
                    </DiagramPanel>
                  </div>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac{AB}{AD}=\dfrac{AC}{AE}" />, correct: true },
                    { id: "2", content: <Math tex="\dfrac{BD}{AD}=\dfrac{EC}{DE}" /> },
                    { id: "3", content: <Math tex="\dfrac{AC}{AB}=\dfrac{BC}{BA}" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q15e"
                points={0.4}
                prompt={
                  <>
                    Dans un triangle <Math tex="ABC" />, la droite qui passe par <Math tex="B" /> et par le milieu de{" "}
                    <Math tex="[AC]" /> est une :
                  </>
                }
                options={
                  [
                    { id: "1", content: "Bissectrice" },
                    { id: "2", content: "Médiane", correct: true },
                    { id: "3", content: "Hauteur" },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>
        </QcmSection>
      </ExerciseGroup>
      </EvaluationScore>
    </LessonShell>
  );
}
