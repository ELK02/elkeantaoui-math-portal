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
  title: "Évaluation diagnostique · Mathématiques | 1ère Bac Sciences",
  description:
    "Évaluation diagnostique interactive et corrigée automatiquement pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques, Sciences et Technologies Mécaniques et Sciences Mathématiques) : 43 questions sur les ensembles de nombres, la valeur absolue, les polynômes, le cercle trigonométrique et l'étude de fonctions, avec correction et note automatique sur 19,5.",
  kicker: "1ère Année Bac · Semestre 1",
  heroTitle: "Évaluation diagnostique",
  heroSubtitle:
    "9 exercices pour vérifier les acquis du Tronc Commun avant de démarrer l'année : ordre dans IR, valeur absolue, intervalles, polynômes, cercle trigonométrique et étude de fonctions.",
  footerNote: "Évaluation diagnostique · Mathématiques, 1ère année Baccalauréat, semestre 1.",
  sections: [
    { id: "ex1", label: "Ex. 1" },
    { id: "ex2", label: "Ex. 2" },
    { id: "ex3", label: "Ex. 3" },
    { id: "ex4", label: "Ex. 4" },
    { id: "ex5", label: "Ex. 5" },
    { id: "ex6", label: "Ex. 6" },
    { id: "ex7", label: "Ex. 7" },
    { id: "ex8", label: "Ex. 8" },
    { id: "ex9", label: "Ex. 9" },
  ],
};

function ExerciseIntro({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <p className="pt-1 text-sm text-foreground-muted">{children}</p>
    </div>
  );
}

/** Trims a segment's ends by `trim` px and returns an arrowhead polygon at its endpoint. */
function arrowSegment(x1: number, y1: number, x2: number, y2: number, trim = 16, headSize = 9) {
  const m = globalThis.Math;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = m.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const sx = x1 + ux * trim;
  const sy = y1 + uy * trim;
  const ex = x2 - ux * trim;
  const ey = y2 - uy * trim;
  const angle = m.atan2(ey - sy, ex - sx);
  const spread = m.PI / 7;
  const leftX = ex - headSize * m.cos(angle - spread);
  const leftY = ey - headSize * m.sin(angle - spread);
  const rightX = ex - headSize * m.cos(angle + spread);
  const rightY = ey - headSize * m.sin(angle + spread);
  return { sx, sy, ex, ey, arrow: `${ex},${ey} ${leftX},${leftY} ${rightX},${rightY}` };
}

const VARIATION_X_COLUMNS = [
  { x: 150, label: "-6" },
  { x: 290, label: "-2" },
  { x: 430, label: "3" },
  { x: 570, label: "7" },
];

const VARIATION_POINTS = [
  { x: 150, y: 96, label: "-1", dx: -10, dy: -12, anchor: "end" as const },
  { x: 290, y: 176, label: "-√3", dx: 0, dy: 24, anchor: "middle" as const },
  { x: 430, y: 96, label: "10", dx: 0, dy: -12, anchor: "middle" as const },
  { x: 570, y: 176, label: "0", dx: 12, dy: 6, anchor: "start" as const },
];

function VariationTable() {
  return (
    <div className="mb-5 flex justify-center overflow-x-auto">
      <svg viewBox="0 0 640 200" className="h-auto w-full max-w-[560px] text-foreground">
        <rect x={1} y={1} width={638} height={198} fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1={90} y1={1} x2={90} y2={199} stroke="currentColor" strokeWidth="1.6" />
        <line x1={1} y1={64} x2={639} y2={64} stroke="currentColor" strokeWidth="1.6" />

        <text x={45} y={38} fontSize="16" fontWeight={600} textAnchor="middle">
          x
        </text>
        {VARIATION_X_COLUMNS.map((c) => (
          <text key={c.label} x={c.x} y={38} fontSize="15" fontWeight={600} textAnchor="middle">
            {c.label}
          </text>
        ))}

        <text x={45} y={136} fontSize="16" fontStyle="italic" fontWeight={600} textAnchor="middle">
          f(x)
        </text>

        {VARIATION_POINTS.slice(0, -1).map((p, i) => {
          const next = VARIATION_POINTS[i + 1];
          const seg = arrowSegment(p.x, p.y, next.x, next.y);
          return (
            <g key={i}>
              <line x1={seg.sx} y1={seg.sy} x2={seg.ex} y2={seg.ey} stroke="currentColor" strokeWidth="1.6" />
              <polygon points={seg.arrow} fill="currentColor" />
            </g>
          );
        })}

        {VARIATION_POINTS.map((p) => (
          <text
            key={p.label}
            x={p.x + p.dx}
            y={p.y + p.dy}
            fontSize="15"
            fontWeight={600}
            textAnchor={p.anchor}
          >
            {p.label}
          </text>
        ))}
      </svg>
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
          { value: "43", label: "questions" },
          { value: "19,5", label: "points au total" },
          { value: "9", label: "exercices" },
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
              href="#ex9"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Dernier exercice
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">9</span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              exercices · correction au clic
            </span>
          </div>
        }
      />

      <EvaluationScore maxScore={19.5}>
        <QcmSection total={43} doneMessage="Bravo, tu as répondu aux 43 questions ! Découvre ta note ci-dessous.">
          {/* ===================== EXERCICE 1 ===================== */}
          <LessonSection
            id="ex1"
            kicker="Exercice 1 · 3 points"
            title="Choisir la bonne réponse"
            tone="light"
            description="Pour chaque ligne, une seule des trois propositions est correcte."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q1a"
                points={0.5}
                prompt="Le nombre entier naturel est :"
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac{\sqrt{52}}{\sqrt{13}}" />, correct: true },
                    { id: "2", content: <Math tex="3-(1-\sqrt2)^2" /> },
                    { id: "3", content: <Math tex="\dfrac{\sqrt2^{\,6}}{\sqrt8}" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q1b"
                points={0.5}
                prompt={
                  <>
                    L&apos;intersection des intervalles <Math tex="]-\infty,3]" /> et <Math tex="]-5,5]" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="]-\infty,5]" /> },
                    { id: "2", content: <Math tex="]-5,3]" />, correct: true },
                    { id: "3", content: <Math tex="]-5,3[" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q1c"
                points={0.5}
                prompt={
                  <>
                    Le centre de l&apos;intervalle <Math tex="[-7,-1]" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="4" /> },
                    { id: "2", content: <Math tex="-4" />, correct: true },
                    { id: "3", content: <Math tex="-3" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q1d"
                points={0.5}
                prompt={
                  <>
                    Si <Math tex="a" /> est un réel strictement négatif, alors :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\dfrac{2}{3a}<\dfrac{5}{6a}" /> },
                    { id: "2", content: <Math tex="\dfrac{2}{3a}>\dfrac{5}{6a}" />, correct: true },
                    { id: "3", content: <Math tex="\dfrac{2}{3a}\le\dfrac{5}{6a}" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q1e"
                points={0.5}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="5x^2+9x-2=0" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\{-10;1\}" /> },
                    { id: "2", content: <Math tex="\{-2;10\}" /> },
                    { id: "3", content: <Math tex="\left\{-2;\dfrac15\right\}" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q1f"
                points={0.5}
                prompt={
                  <>
                    Pour <Math tex="x\in\left[\dfrac15,+\infty\right[" />, le trinôme <Math tex="5x^2+9x-2" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: "change son signe" },
                    { id: "2", content: "positif", correct: true },
                    { id: "3", content: "négatif" },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 2 ===================== */}
          <LessonSection
            id="ex2"
            kicker="Exercice 2 · 1,5 point"
            title="Encadrements"
            tone="muted"
            description="Soit x et y deux réels tels que 1 < x < 3 et −7 < y < −5."
          >
            <ExerciseIntro n={2}>
              On travaille avec les encadrements <Math tex="1<x<3" /> et <Math tex="-7<y<-5" />.
            </ExerciseIntro>
            <div className="space-y-4">
              <QcmQuestion
                id="q2a"
                points={0.5}
                prompt={
                  <>
                    Un encadrement de <Math tex="x^2" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="1<x^2<9" />, correct: true },
                    { id: "2", content: <Math tex="1<x^2<3" /> },
                    { id: "3", content: <Math tex="-9<x^2<9" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2b"
                points={0.5}
                prompt={
                  <>
                    Un encadrement de <Math tex="y^2" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="5<y^2<7" /> },
                    { id: "2", content: <Math tex="25<y^2<49" />, correct: true },
                    { id: "3", content: <Math tex="-49<y^2<-25" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q2c"
                points={0.5}
                prompt={
                  <>
                    Un encadrement de <Math tex="\dfrac{x^2}{y^2-x^2}" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="16<\dfrac{x^2}{y^2-x^2}<48" /> },
                    { id: "2", content: <Math tex="\dfrac{1}{49}<\dfrac{x^2}{y^2-x^2}<\dfrac{9}{25}" /> },
                    { id: "3", content: <Math tex="\dfrac{1}{48}<\dfrac{x^2}{y^2-x^2}<\dfrac{9}{16}" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 3 ===================== */}
          <LessonSection
            id="ex3"
            kicker="Exercice 3 · 1,5 point"
            title="Équations et inéquations avec valeur absolue"
            tone="light"
            description="Déterminer les valeurs du réel x dans chacun des cas suivants."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q3a"
                points={0.5}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="\left|\dfrac12-x\right|=\dfrac78" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\left\{-\dfrac38;\dfrac{11}{8}\right\}" />, correct: true },
                    { id: "2", content: <Math tex="\left\{\dfrac38;\dfrac{11}{8}\right\}" /> },
                    { id: "3", content: <Math tex="\left\{-\dfrac38;-\dfrac{11}{8}\right\}" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3b"
                points={0.5}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="\left|\dfrac{2x+4}{3}\right|<\dfrac83" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="]-2,6[" /> },
                    { id: "2", content: <Math tex="]-6,2[" />, correct: true },
                    { id: "3", content: <Math tex="]-6,-2[" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q3c"
                points={0.5}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="|x-3|\ge\dfrac23" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\left[\dfrac73,\dfrac{11}{3}\right]" /> },
                    { id: "2", content: <Math tex="\left]\dfrac73,\dfrac{11}{3}\right[" /> },
                    {
                      id: "3",
                      content: <Math tex="\left]-\infty,\dfrac73\right]\cup\left[\dfrac{11}{3},+\infty\right[" />,
                      correct: true,
                    },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 4 ===================== */}
          <LessonSection
            id="ex4"
            kicker="Exercice 4 · 1 point"
            title="Union et intersection d'intervalles"
            tone="muted"
            description="Représenter et déterminer les ensembles suivants."
          >
            <div className="space-y-4">
              <QcmQuestion
                id="q4a"
                points={0.5}
                prompt={
                  <>
                    <Math tex="I=[-1,+\infty[\,\cap\,]-5,2]" /> est égal à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="]-1,2]" /> },
                    { id: "2", content: <Math tex="]-5,+\infty[" /> },
                    { id: "3", content: <Math tex="[-1,2]" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q4b"
                points={0.5}
                prompt={
                  <>
                    <Math tex="J=]-5,6]\,\cup\,]3,7]" /> est égal à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="]3,6]" /> },
                    { id: "2", content: <Math tex="]-5,7]" />, correct: true },
                    { id: "3", content: <Math tex="]-5,6]\cup]3,7]" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 5 ===================== */}
          <LessonSection
            id="ex5"
            kicker="Exercice 5 · 3,5 points"
            title="Polynômes"
            tone="light"
            description="On étudie deux polynômes : P(x) = x³ − √3x² − x + √3, puis F(x) = x⁴ − 4x² + 3."
          >
            <ExerciseIntro n={5}>
              On considère, dans <Math tex="\mathbb R" />, le polynôme <Math tex="P(x)=x^3-\sqrt3x^2-x+\sqrt3" />.
            </ExerciseIntro>
            <div className="space-y-4">
              <QcmQuestion
                id="q5a"
                points={0.5}
                prompt={
                  <>
                    <Math tex="(x-1)" /> divise <Math tex="P(x)" /> car <Math tex="P(1)" /> est égal à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\sqrt3" /> },
                    { id: "2", content: <Math tex="0" />, correct: true },
                    { id: "3", content: <Math tex="2" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q5b"
                points={0.5}
                prompt={
                  <>
                    Le polynôme <Math tex="Q(x)" /> tel que <Math tex="P(x)=(x-1)Q(x)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="x^2-(1-\sqrt3)x+\sqrt3" /> },
                    { id: "2", content: <Math tex="x^2+(1-\sqrt3)x-\sqrt3" />, correct: true },
                    { id: "3", content: <Math tex="x^2+(1+\sqrt3)x-\sqrt3" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q5c"
                points={0.5}
                prompt={
                  <>
                    Le discriminant de <Math tex="Q(x)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="(\sqrt3-1)^2" /> },
                    { id: "2", content: <Math tex="4-2\sqrt3" /> },
                    { id: "3", content: <Math tex="(\sqrt3+1)^2" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q5d"
                points={0.5}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="P(x)=0" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\{-1;1;\sqrt3\}" />, correct: true },
                    { id: "2", content: <Math tex="\{-1;1;-\sqrt3\}" /> },
                    { id: "3", content: <Math tex="\{1;\sqrt3\}" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
            <ExerciseIntro n={5}>
              On considère, dans <Math tex="\mathbb R" />, le polynôme <Math tex="F(x)=x^4-4x^2+3" />.
            </ExerciseIntro>
            <div className="space-y-4">
              <QcmQuestion
                id="q5e"
                points={0.5}
                prompt={
                  <>
                    La fonction associée à <Math tex="F" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: "impaire" },
                    { id: "2", content: "paire", correct: true },
                    { id: "3", content: "ni paire ni impaire" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q5f"
                points={0.5}
                prompt={
                  <>
                    <Math tex="F(-\sqrt3)" /> est égal à :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="6" /> },
                    { id: "2", content: <Math tex="-6" /> },
                    { id: "3", content: <Math tex="0" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q5g"
                points={0.5}
                prompt={
                  <>
                    L&apos;ensemble des racines de <Math tex="F(x)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\{-1;1\}" /> },
                    { id: "2", content: <Math tex="\{-\sqrt3;-1;1;\sqrt3\}" />, correct: true },
                    { id: "3", content: <Math tex="\{-\sqrt3;\sqrt3\}" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 6 ===================== */}
          <LessonSection
            id="ex6"
            kicker="Exercice 6 · 1 point"
            title="Cercle trigonométrique"
            tone="muted"
            description="Le plan est orienté dans le sens direct. Retrouver, pour chaque point, la mesure principale de son abscisse curviligne."
          >
            <div className="mb-5 flex justify-center">
              <svg viewBox="0 0 220 220" className="h-56 w-56 text-foreground">
                <circle cx="110" cy="110" r="88" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <line x1="22" y1="110" x2="198" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <line x1="110" y1="22" x2="110" y2="198" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                {[
                  [-135, 47.8, 172.2],
                  [-30, 186.2, 154.0],
                  [0, 198.0, 110.0],
                  [30, 186.2, 66.0],
                  [45, 172.2, 47.8],
                  [60, 154.0, 33.8],
                  [90, 110.0, 22.0],
                  [120, 66.0, 33.8],
                  [180, 22.0, 110.0],
                ].map(([deg, x, y]) => (
                  <g key={deg}>
                    <line x1="110" y1="110" x2={x} y2={y} stroke="#0ea5e9" strokeWidth="1.4" opacity="0.6" />
                    <text
                      x={110 + (x - 110) * 1.16}
                      y={110 + (y - 110) * 1.16}
                      fontSize="10"
                      textAnchor="middle"
                      fill="#0ea5e9"
                    >
                      {deg}°
                    </text>
                  </g>
                ))}
                <circle cx="110" cy="110" r="2.4" fill="currentColor" />
                <circle cx="198" cy="110" r="2.4" fill="currentColor" />
                <text x="203" y="107" fontSize="12" fontStyle="italic">
                  I
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <QcmQuestion
                id="q6a"
                points={0.25}
                prompt={
                  <>
                    Le point <Math tex="A" /> d&apos;abscisse curviligne <Math tex="\dfrac{41\pi}{2}" /> correspond à
                    l&apos;angle :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-30°" /> },
                    { id: "2", content: <Math tex="90°" />, correct: true },
                    { id: "3", content: <Math tex="120°" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q6b"
                points={0.25}
                prompt={
                  <>
                    Le point <Math tex="B" /> d&apos;abscisse curviligne <Math tex="\dfrac{13\pi}{4}" /> correspond à
                    l&apos;angle :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="45°" /> },
                    { id: "2", content: <Math tex="-45°" /> },
                    { id: "3", content: <Math tex="-135°" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q6c"
                points={0.25}
                prompt={
                  <>
                    Le point <Math tex="C" /> d&apos;abscisse curviligne <Math tex="-\dfrac{22\pi}{3}" /> correspond
                    à l&apos;angle :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-60°" /> },
                    { id: "2", content: <Math tex="60°" /> },
                    { id: "3", content: <Math tex="120°" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q6d"
                points={0.25}
                prompt={
                  <>
                    Le point <Math tex="D" /> d&apos;abscisse curviligne <Math tex="\dfrac{49\pi}{6}" /> correspond à
                    l&apos;angle :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="30°" />, correct: true },
                    { id: "2", content: <Math tex="-30°" /> },
                    { id: "3", content: <Math tex="60°" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 7 ===================== */}
          <LessonSection
            id="ex7"
            kicker="Exercice 7 · 3 points"
            title="Lecture graphique"
            tone="light"
            description="La courbe (Cf) ci-dessous, dans un repère orthonormé (O,i,j), est la représentation d'une fonction f définie sur [−4,5]."
          >
            <div className="mb-5 flex justify-center overflow-x-auto">
              <svg viewBox="0 0 300 260" className="h-auto w-full max-w-[360px] text-foreground">
                {Array.from({ length: 10 }, (_, i) => 44 + i * 24).map((x) => (
                  <line key={x} x1={x} y1="78" x2={x} y2="222" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
                ))}
                {Array.from({ length: 7 }, (_, i) => 78 + i * 24).map((y) => (
                  <line key={y} x1="44" y1={y} x2="260" y2={y} stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
                ))}
                <line x1="44" y1="150" x2="260" y2="150" stroke="currentColor" strokeWidth="1.6" />
                <line x1="140" y1="222" x2="140" y2="78" stroke="currentColor" strokeWidth="1.6" />
                <text x="264" y="154" fontSize="11">
                  x
                </text>
                <text x="144" y="82" fontSize="11">
                  y
                </text>
                <text x="134" y="163" fontSize="10">
                  O
                </text>
                <path
                  d="M44,174 L116,102 L164,198 L260,150"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2.2"
                />
                <circle cx="44" cy="174" r="3" fill="#e11d48" />
                <circle cx="260" cy="150" r="3" fill="#e11d48" />
                <text x="120" y="96" fontSize="12" fontStyle="italic" fill="#e11d48">
                  (Cf)
                </text>
                <text x="36" y="188" fontSize="10">
                  -4
                </text>
                <text x="112" y="115" fontSize="10">
                  -1
                </text>
                <text x="158" y="212" fontSize="10">
                  1
                </text>
                <text x="256" y="164" fontSize="10">
                  5
                </text>
              </svg>
            </div>
            <div className="space-y-4">
              <QcmQuestion
                id="q7a"
                points={0.5}
                prompt={
                  <>
                    L&apos;image de <Math tex="-3" /> par <Math tex="f" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="0" />, correct: true },
                    { id: "2", content: <Math tex="1" /> },
                    { id: "3", content: <Math tex="-1" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q7b"
                points={0.5}
                prompt={
                  <>
                    L&apos;image de <Math tex="-2" /> par <Math tex="f" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="1" />, correct: true },
                    { id: "2", content: <Math tex="0" /> },
                    { id: "3", content: <Math tex="2" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q7c"
                points={0.5}
                prompt={
                  <>
                    <Math tex="f" /> est-elle impaire ?
                  </>
                }
                options={
                  [
                    { id: "1", content: "Oui" },
                    {
                      id: "2",
                      content: "Non, car son domaine [−4,5] n'est pas symétrique par rapport à 0",
                      correct: true,
                    },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q7d"
                points={0.5}
                prompt={
                  <>
                    L&apos;équation <Math tex="f(x)=1" /> admet-elle une solution dans <Math tex="[-4,5]" /> ?
                  </>
                }
                options={
                  [
                    { id: "1", content: "Oui", correct: true },
                    { id: "2", content: "Non" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q7e"
                points={0.5}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="f(x)\ge0" /> dans <Math tex="[-4,5]" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="[0,5]" /> },
                    { id: "2", content: <Math tex="[-3,0]" />, correct: true },
                    { id: "3", content: <Math tex="[-4,-3]" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q7f"
                points={0.5}
                prompt={
                  <>
                    <Math tex="f" /> est croissante sur :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="[-1,1]" /> },
                    { id: "2", content: <Math tex="[-4,-1]\text{ et }[1,5]" />, correct: true },
                    { id: "3", content: <Math tex="[-4,5]" /> },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 8 ===================== */}
          <LessonSection
            id="ex8"
            kicker="Exercice 8 · 3 points"
            title="Lecture d'un tableau de variations"
            tone="muted"
            description="On considère une fonction f définie sur [−6,7], de tableau de variations donné ci-dessous."
          >
            <VariationTable />
            <div className="space-y-4">
              <QcmQuestion
                id="q8a"
                points={0.5}
                prompt={
                  <>
                    Comparer <Math tex="f(-4)" /> et <Math tex="f(-3)" /> :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="f(-4)>f(-3)" />, correct: true },
                    { id: "2", content: <Math tex="f(-4)<f(-3)" /> },
                    { id: "3", content: <Math tex="f(-4)=f(-3)" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q8b"
                points={0.5}
                prompt={
                  <>
                    Le minimum de <Math tex="f" /> sur <Math tex="[-6,7]" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="-1" /> },
                    { id: "2", content: <Math tex="0" /> },
                    { id: "3", content: <Math tex="-\sqrt3" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q8c"
                points={0.5}
                prompt={
                  <>
                    Le maximum de <Math tex="f" /> sur <Math tex="[-6,7]" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="10" />, correct: true },
                    { id: "2", content: <Math tex="-1" /> },
                    { id: "3", content: <Math tex="0" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q8d"
                points={0.5}
                prompt={
                  <>
                    On peut en déduire que, pour tout <Math tex="x" /> de <Math tex="[-6,7]" /> :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="f(x)-\sqrt3\ge0" /> },
                    { id: "2", content: <Math tex="f(x)+\sqrt3\le0" /> },
                    { id: "3", content: <Math tex="f(x)+\sqrt3\ge0" />, correct: true },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q8e"
                points={0.5}
                prompt={
                  <>
                    Sachant que <Math tex="f(1)=0" />, le signe de <Math tex="f(x)" /> sur <Math tex="[-6,1[" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: "négatif", correct: true },
                    { id: "2", content: "positif" },
                    { id: "3", content: "nul" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q8f"
                points={0.5}
                prompt={
                  <>
                    Le signe de <Math tex="f(x)" /> sur <Math tex="]1,7[" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: "négatif" },
                    { id: "2", content: "positif", correct: true },
                    { id: "3", content: "nul" },
                  ] satisfies QcmOption[]
                }
              />
            </div>
          </LessonSection>

          {/* ===================== EXERCICE 9 ===================== */}
          <LessonSection
            id="ex9"
            kicker="Exercice 9 · 2 points"
            title="Deux courbes de référence"
            tone="light"
            description="Soit f et g les fonctions définies par f(x) = −2x² et g(x) = 2/x."
          >
            <ExerciseIntro n={9}>
              On note <Math tex="(C_f)" /> et <Math tex="(C_g)" /> les courbes représentatives de{" "}
              <Math tex="f(x)=-2x^2" /> et <Math tex="g(x)=\dfrac2x" />.
            </ExerciseIntro>
            <div className="space-y-4">
              <QcmQuestion
                id="q9a"
                points={1 / 3}
                prompt={
                  <>
                    <Math tex="(C_f)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: "une droite" },
                    { id: "2", content: "une parabole", correct: true },
                    { id: "3", content: "une hyperbole" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q9b"
                points={1 / 3}
                prompt={
                  <>
                    <Math tex="(C_g)" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: "une hyperbole", correct: true },
                    { id: "2", content: "une parabole" },
                    { id: "3", content: "une droite" },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q9c"
                points={1 / 3}
                prompt={
                  <>
                    <Math tex="f" /> est croissante sur :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="[0,+\infty[" /> },
                    { id: "2", content: <Math tex="]-\infty,0]" />, correct: true },
                    { id: "3", content: <Math tex="\mathbb R" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q9d"
                points={1 / 3}
                prompt={
                  <>
                    <Math tex="g" /> est décroissante :
                  </>
                }
                options={
                  [
                    { id: "1", content: "sur R tout entier" },
                    { id: "2", content: <>sur chacun des deux intervalles <Math tex="]-\infty,0[" /> et <Math tex="]0,+\infty[" /></>, correct: true },
                    { id: "3", content: <>seulement sur <Math tex="]0,+\infty[" /></> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q9e"
                points={1 / 3}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="2\left(x^2+\dfrac1x\right)\le0" /> dans{" "}
                    <Math tex="]-\infty,0[" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="]-1,0[" /> },
                    { id: "2", content: <Math tex="[-1,0[" />, correct: true },
                    { id: "3", content: <Math tex="]-\infty,-1]" /> },
                  ] satisfies QcmOption[]
                }
              />
              <QcmQuestion
                id="q9f"
                points={1 / 3}
                prompt={
                  <>
                    L&apos;ensemble des solutions de <Math tex="g(x)=x" /> est :
                  </>
                }
                options={
                  [
                    { id: "1", content: <Math tex="\{\sqrt2\}" /> },
                    { id: "2", content: <Math tex="\{-2;2\}" /> },
                    { id: "3", content: <Math tex="\{-\sqrt2;\sqrt2\}" />, correct: true },
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
