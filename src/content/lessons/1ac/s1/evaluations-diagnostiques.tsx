import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  QcmSection,
  QcmQuestion,
  type QcmOption,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Évaluation diagnostique · Mathématiques | 1AC",
  description:
    "Évaluation diagnostique de début d'année pour la 1ère année collège : 11 questions sur les fractions, les nombres décimaux, la géométrie et la proportionnalité, avec corrigé détaillé.",
  kicker: "1ʳᵉ Année Collège · Chapitre 1",
  heroTitle: "Évaluation diagnostique",
  heroSubtitle:
    "11 questions pour faire le point sur les notions de fin de primaire : fractions, nombres décimaux, comparaisons, géométrie et proportionnalité.",
  footerNote: "Évaluation diagnostique · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "comment-ca-marche", label: "Comment ça marche" },
    { id: "qcm", label: "QCM" },
    { id: "exercices", label: "Exercices" },
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

/** Kicker line grouping the QcmQuestion(s) that belong to one original question number. */
function QuestionLabel({ n, type, children }: { n: number; type: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 pt-2 first:pt-0">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-[11px] font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <span className="font-mono text-[11px] font-semibold text-foreground-muted uppercase">{type}</span>
      <p className="text-sm text-foreground-muted">{children}</p>
    </div>
  );
}

/** The 3 fixed "<, =, >" options reused by every "Comparer" question. */
function compareOptions(correct: "lt" | "eq" | "gt"): QcmOption[] {
  return [
    { id: "lt", content: <Math tex="<" />, correct: correct === "lt" },
    { id: "eq", content: <Math tex="=" />, correct: correct === "eq" },
    { id: "gt", content: <Math tex=">" />, correct: correct === "gt" },
  ];
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "11", label: "questions" },
          { value: "5", label: "thèmes" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#qcm"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer l&apos;évaluation
            </a>
            <a
              href="#comment-ca-marche"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Comment ça marche
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-baseline font-serif text-white italic">
            <span className="text-[6rem] leading-none font-bold sm:text-[7.5rem]">?</span>
            <span className="-mt-8 -ml-1 text-[2.5rem] leading-none font-bold text-orange-400 sm:text-[3.2rem]">/20</span>
          </div>
        }
      />

      {/* ===================== COMMENT ÇA MARCHE ===================== */}
      <LessonSection
        id="comment-ca-marche"
        kicker="01 · Le principe"
        title="Comment ça marche ?"
        tone="light"
        description="Trois étapes, aucune surprise."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-5">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 font-bold text-white dark:bg-white dark:text-neutral-950">1</span>
            <p className="font-semibold text-foreground">Réponds aux questions</p>
            <p className="mt-1 text-sm text-foreground-muted">
              Pour les QCM, clique la réponse qui te semble juste. Pour le reste, cherche sur ton cahier.
            </p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 font-bold text-white dark:bg-white dark:text-neutral-950">2</span>
            <p className="font-semibold text-foreground">Vérifie aussitôt</p>
            <p className="mt-1 text-sm text-foreground-muted">
              Chaque QCM se colore en vert (correct) ou en rouge (à revoir) dès que tu cliques une réponse.
            </p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 font-bold text-white dark:bg-white dark:text-neutral-950">3</span>
            <p className="font-semibold text-foreground">Consulte la correction</p>
            <p className="mt-1 text-sm text-foreground-muted">
              Pour les exercices à compléter, la solution détaillée est juste en dessous de l&apos;énoncé.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== QCM ===================== */}
      <LessonSection
        id="qcm"
        kicker="02 · 13 questions à choix multiple"
        title="Questions 1, 3, 5, 6 et 7"
        tone="muted"
        description="Clique une réponse : elle se colore aussitôt."
      >
        <QcmSection total={13} doneMessage="Bravo, les 13 questions à choix multiple sont répondues !">
          <QuestionLabel n={1} type="QCM · 3 pts">
            Cocher la bonne réponse pour chacun des trois calculs :
          </QuestionLabel>
          <QcmQuestion
            id="q1a"
            prompt={<Math tex="\dfrac{6}{5}+\dfrac{1}{10} =\ ?" />}
            options={[
              { id: "a", content: <Math tex="\dfrac{11}{71}" /> },
              { id: "b", content: <Math tex="\dfrac{5}{15}" /> },
              { id: "c", content: <Math tex="\dfrac{13}{10}" />, correct: true },
              { id: "d", content: <Math tex="\dfrac{2}{3}" /> },
              { id: "e", content: <Math tex="\dfrac{11}{10}" /> },
            ]}
          />
          <QcmQuestion
            id="q1b"
            prompt={<Math tex="\dfrac{3}{2}-\dfrac{3}{4} =\ ?" />}
            options={[
              { id: "a", content: <Math tex="\dfrac{3}{4}" />, correct: true },
              { id: "b", content: <Math tex="\dfrac{1}{2}" /> },
              { id: "c", content: <Math tex="\dfrac{5}{4}" /> },
              { id: "d", content: <Math tex="\dfrac{17}{2}" /> },
              { id: "e", content: <Math tex="\dfrac{5}{3}" /> },
            ]}
          />
          <QcmQuestion
            id="q1c"
            prompt={<Math tex="\dfrac{4}{7}\times\dfrac{1}{7} =\ ?" />}
            options={[
              { id: "a", content: <Math tex="\dfrac{15}{7}" /> },
              { id: "b", content: <Math tex="\dfrac{1}{8}" /> },
              { id: "c", content: <Math tex="\dfrac{4}{49}" />, correct: true },
              { id: "d", content: <Math tex="\dfrac{2{,}5}{9}" /> },
              { id: "e", content: <Math tex="\dfrac{1}{7}" /> },
            ]}
          />

          <QuestionLabel n={3} type="QCM · 0,5 pt">
            Le produit <Math tex="2{,}5 \times 10^3" /> est égal à :
          </QuestionLabel>
          <QcmQuestion
            id="q3"
            prompt="Choisis la bonne réponse."
            options={[
              { id: "a", content: "0,025" },
              { id: "b", content: "2500", correct: true },
              { id: "c", content: "0,0025" },
            ]}
          />

          <QuestionLabel n={5} type="Géométrie · 2 pts">
            Cocher la bonne réponse pour compléter chaque propriété :
          </QuestionLabel>
          <QcmQuestion
            id="q5a"
            prompt="Si un triangle ABC est isocèle en A alors …"
            options={[
              { id: "a", content: <Math tex="AB = BC \text{ et } \widehat{ABC} = \widehat{ACB}" /> },
              { id: "b", content: <Math tex="AB = AC \text{ et } \widehat{ABC} = \widehat{ACB}" />, correct: true },
              { id: "c", content: <Math tex="AB = AC \text{ et } \widehat{BAC} = \widehat{ABC}" /> },
              { id: "d", content: <Math tex="AB = AC = BC \text{ et } \widehat{ABC} = \widehat{ACB} = \widehat{BAC}" /> },
            ]}
          />
          <QcmQuestion
            id="q5b"
            prompt="Si un triangle ABC est rectangle en B alors …"
            options={[
              { id: "a", content: <Math tex="\widehat{BAC} = 90^{\circ}" /> },
              { id: "b", content: <Math tex="\widehat{ABC} = 90^{\circ}" />, correct: true },
              { id: "c", content: <Math tex="\widehat{ACB} = 90^{\circ}" /> },
            ]}
          />

          <QuestionLabel n={6} type="Comparer · 2,5 pts">
            Comparer les expressions suivantes (utiliser <Math tex="<" />, <Math tex="=" /> ou <Math tex=">" />) :
          </QuestionLabel>
          <QcmQuestion
            id="q6a"
            prompt={
              <>
                <Math tex="\dfrac{1}{2}" /> … <Math tex="\dfrac{3}{2}" />
              </>
            }
            options={compareOptions("lt")}
          />
          <QcmQuestion
            id="q6b"
            prompt={
              <>
                <Math tex="\dfrac{5}{3}" /> … <Math tex="\dfrac{5}{9}" />
              </>
            }
            options={compareOptions("gt")}
          />
          <QcmQuestion
            id="q6c"
            prompt={
              <>
                <Math tex="\dfrac{1}{4}" /> … <Math tex="0{,}25" />
              </>
            }
            options={compareOptions("eq")}
          />
          <QcmQuestion
            id="q6d"
            prompt={
              <>
                <Math tex="1" /> … <Math tex="\dfrac{3}{5}" />
              </>
            }
            options={compareOptions("gt")}
          />
          <QcmQuestion
            id="q6e"
            prompt={
              <>
                <Math tex="\dfrac{7}{10}" /> … <Math tex="2" />
              </>
            }
            options={compareOptions("lt")}
          />

          <QuestionLabel n={7} type="QCM · 2 pts">
            Ranger dans l&apos;ordre croissant.
          </QuestionLabel>
          <QcmQuestion
            id="q7a"
            prompt="2,5 ; 2,4 ; 0 ; 0,5 ; 12,01 ; 12,012"
            options={[
              { id: "a", content: <Math tex="0 < 0{,}5 < 2{,}4 < 2{,}5 < 12{,}01 < 12{,}012" />, correct: true },
              { id: "b", content: <Math tex="0 < 0{,}5 < 2{,}4 < 2{,}5 < 12{,}012 < 12{,}01" /> },
              { id: "c", content: <Math tex="0 < 0{,}5 < 2{,}5 < 2{,}4 < 12{,}01 < 12{,}012" /> },
              { id: "d", content: <Math tex="12{,}012 < 12{,}01 < 2{,}5 < 2{,}4 < 0{,}5 < 0" /> },
            ]}
          />
          <QcmQuestion
            id="q7b"
            prompt={
              <>
                <Math tex="\dfrac{7}{2}" /> ; <Math tex="\dfrac{2}{3}" /> ; <Math tex="\dfrac{3}{5}" />
              </>
            }
            options={[
              { id: "a", content: <Math tex="\dfrac{3}{5} < \dfrac{2}{3} < \dfrac{7}{2}" />, correct: true },
              { id: "b", content: <Math tex="\dfrac{2}{3} < \dfrac{3}{5} < \dfrac{7}{2}" /> },
              { id: "c", content: <Math tex="\dfrac{7}{2} < \dfrac{2}{3} < \dfrac{3}{5}" /> },
            ]}
          />
        </QcmSection>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="03 · Questions 2, 4, 8, 9, 10 et 11"
        title="Compléter et rédiger"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Ton évaluation diagnostique est terminée.">
          <ExerciseCard
            id="2"
            index={2}
            title="Question 2 · Compléter une soustraction de fractions"
            itemsLabel="à compléter"
            items={
              <div className="rounded-xl border border-border p-5">
                <p className="mb-3 text-sm text-foreground-muted">Compléter l&apos;expression suivante :</p>
                <MathBlock tex="\dfrac{3}{10} - \dfrac{1}{30} = \dfrac{?}{30} - \dfrac{?}{30} = \dfrac{?}{30}" />
              </div>
            }
            correction={
              <CorrectionCard n={1}>
                <Math tex="\dfrac{3}{10} - \dfrac{1}{30} = \dfrac{9}{30} - \dfrac{1}{30} = \dfrac{9-1}{30} = \mathbf{\dfrac{8}{30}}" />
              </CorrectionCard>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Question 4 · Simplifier des fractions"
            itemsLabel="5 fractions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="\dfrac{45}{18} =\ ?" /></Item>
                <Item n={2}><Math tex="\dfrac{40}{16} =\ ?" /></Item>
                <Item n={3}><Math tex="\dfrac{36}{24} =\ ?" /></Item>
                <Item n={4}><Math tex="\dfrac{72}{90} =\ ?" /></Item>
                <Item n={5}><Math tex="\dfrac{112}{48} =\ ?" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\dfrac{45}{18} = \mathbf{\dfrac{5}{2}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\dfrac{40}{16} = \mathbf{\dfrac{5}{2}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\dfrac{36}{24} = \mathbf{\dfrac{3}{2}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\dfrac{72}{90} = \mathbf{\dfrac{4}{5}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\dfrac{112}{48} = \mathbf{\dfrac{7}{3}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Question 8 · Problème : le prix d'un cahier"
            itemsLabel="1 problème"
            items={
              <p className="rounded-xl border border-border p-5 text-sm">
                Ali achète 3 cahiers et 5 stylos, il paie 37 dh. Sachant que le prix d&apos;un stylo est 3,5 dh, quel
                est le prix d&apos;un seul cahier ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="a"><Math tex="5 \times 3{,}5 = 17{,}5 \text{ dh}" /> pour les stylos</CorrectionCard>
                <CorrectionCard n="b"><Math tex="37 - 17{,}5 = 19{,}5 \text{ dh}" /> pour les 3 cahiers</CorrectionCard>
                <CorrectionCard n="c"><Math tex="19{,}5 \div 3 = \mathbf{6{,}5 \text{ dh}}" /> le prix d&apos;un cahier</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Question 9 · Aire et périmètre d'un rectangle"
            itemsLabel="1 figure"
            items={
              <div className="flex flex-col items-center gap-6 rounded-xl border border-border p-5 sm:flex-row">
                <svg viewBox="0 0 210 130" className="h-auto w-48 shrink-0 text-foreground">
                  <rect x="20" y="20" width="140" height="90" fill="none" stroke="currentColor" strokeWidth="2" />
                  <text x="12" y="16" fontSize="13" fontStyle="italic" fill="currentColor">A</text>
                  <text x="156" y="16" fontSize="13" fontStyle="italic" fill="currentColor">B</text>
                  <text x="156" y="122" fontSize="13" fontStyle="italic" fill="currentColor">C</text>
                  <text x="12" y="122" fontSize="13" fontStyle="italic" fill="currentColor">D</text>
                  <text x="82" y="14" fontSize="11" fill="currentColor" opacity={0.6}>3 cm</text>
                  <text x="167" y="70" fontSize="11" fill="currentColor" opacity={0.6}>2 cm</text>
                </svg>
                <p className="text-sm text-foreground-muted">
                  Calculer le périmètre et l&apos;aire du rectangle ABCD tel que AB = 3 cm et AD = 2 cm.
                </p>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="Aire"><Math tex="3 \times 2 = \mathbf{6 \text{ cm}^2}" /></CorrectionCard>
                <CorrectionCard n="Périmètre"><Math tex="2 \times (3+2) = \mathbf{10 \text{ cm}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Question 10 · Tableau de proportionnalité"
            itemsLabel="à compléter"
            items={
              <div className="overflow-x-auto rounded-xl border border-border p-5">
                <p className="mb-3 text-sm text-foreground-muted">Compléter le tableau pour qu&apos;il représente une situation de proportionnalité :</p>
                <table className="border-collapse text-center">
                  <tbody>
                    <tr>
                      <td className="border border-border px-5 py-2.5 font-semibold">2</td>
                      <td className="border border-border px-5 py-2.5 font-semibold">3</td>
                      <td className="border border-border px-5 py-2.5 font-semibold text-foreground-muted">?</td>
                      <td className="border border-border px-5 py-2.5 font-semibold">0</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-5 py-2.5 font-semibold">8</td>
                      <td className="border border-border px-5 py-2.5 font-semibold text-foreground-muted">?</td>
                      <td className="border border-border px-5 py-2.5 font-semibold">16</td>
                      <td className="border border-border px-5 py-2.5 font-semibold text-foreground-muted">?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
            correction={
              <div className="overflow-x-auto">
                <table className="border-collapse text-center text-sm">
                  <tbody>
                    <tr>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-semibold">2</td>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-semibold">3</td>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-bold text-green-700">4</td>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-semibold">0</td>
                    </tr>
                    <tr>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-semibold">8</td>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-bold text-green-700">12</td>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-semibold">16</td>
                      <td className="border border-green-500/20 bg-surface px-5 py-2.5 font-bold text-green-700">0</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-foreground-muted">Le coefficient de proportionnalité est 4.</p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Question 11 · Trois opérations posées"
            itemsLabel="3 opérations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Item n="+"><Math tex="236 + 81 =\ ?" /></Item>
                <Item n="−"><Math tex="523 - 76 =\ ?" /></Item>
                <Item n="×"><Math tex="231 \times 12 =\ ?" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <CorrectionCard n="+"><Math tex="236 + 81 = \mathbf{317}" /></CorrectionCard>
                <CorrectionCard n="−"><Math tex="523 - 76 = \mathbf{447}" /></CorrectionCard>
                <CorrectionCard n="×"><Math tex="231 \times 12 = \mathbf{2\,772}" /></CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
