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
  title: "Droite graduée & Repère dans le plan · Cours et exercices | 1AC",
  description:
    "Cours complet sur la droite graduée, l'abscisse d'un point, la distance sur une droite graduée, le repère dans le plan et les coordonnées d'un point, accompagné de 8 exercices corrigés en détail, 1ère année collège, semestre 2.",
  kicker: "1ʳᵉ Année Collège · Chapitre 9",
  heroTitle: "Droite graduée & Repère dans le plan",
  heroSubtitle:
    "Repérer un point sur un axe, puis dans le plan tout entier : abscisse, distance, repère et coordonnées.",
  footerNote: "Droite graduée, repère dans le plan · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "ligne", label: "Droite graduée" },
    { id: "abscisse", label: "Abscisse" },
    { id: "distance", label: "Distance" },
    { id: "repere", label: "Repère" },
    { id: "coordonnees", label: "Coordonnées" },
    { id: "exercices", label: "Exercices" },
  ],
};

function CorrectionCard({ n, children }: { n?: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      {n ? <span className="font-bold text-green-700">{n}.</span> : null} {children}
    </div>
  );
}

/** A small horizontal number line used across the course sections. */
function NumberLine({
  ticks,
  points,
  color = "text-blue-600",
  width = 640,
  height = 130,
}: {
  ticks: { x: number; label: string }[];
  points: { x: number; label: string; fill?: string }[];
  color?: string;
  width?: number;
  height?: number;
}) {
  const y = height * 0.54;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mx-auto h-auto w-full max-w-xl">
      <defs>
        <marker id="arrow-line" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" className="fill-foreground" />
        </marker>
      </defs>
      <line x1={20} y1={y} x2={width - 40} y2={y} className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#arrow-line)" />
      <g className="stroke-foreground-muted" strokeWidth="2">
        {ticks.map((t, i) => (
          <line key={i} x1={t.x} y1={y - 6} x2={t.x} y2={y + 6} />
        ))}
      </g>
      {ticks.map((t, i) => (
        <text key={i} x={t.x - 6} y={y + 28} fontSize="15" className="fill-foreground-muted">
          {t.label}
        </text>
      ))}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={y} r="5.5" className={p.fill ?? color.replace("text-", "fill-")} />
          <text x={p.x - 6} y={y - 20} fontSize="18" className={`font-bold ${color}`}>
            {p.label}
          </text>
        </g>
      ))}
    </svg>
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
          { value: "5", label: "parties de cours" },
          { value: "8", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#ligne"
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
          <div className="relative flex select-none items-center gap-1 font-serif text-white italic">
            <span className="text-[5rem] leading-none font-bold sm:text-[6.5rem]">(x</span>
            <span className="text-[5rem] leading-none font-bold text-amber-400 sm:text-[6.5rem]">;</span>
            <span className="text-[5rem] leading-none font-bold sm:text-[6.5rem]">y)</span>
          </div>
        }
      />

      {/* ===================== I. LA DROITE GRADUEE ===================== */}
      <LessonSection
        id="ligne"
        kicker="01 · Le point de départ"
        title="La droite graduée"
        tone="light"
        description="Repérer un point sur un axe : il faut un sens, une origine et une unité."
      >
        <Callout variant="danger" title="Définition">
          Une <strong>droite graduée</strong> (axe gradué) est une droite sur laquelle on choisit un{" "}
          <strong>sens</strong> de parcours, un <strong>point origine O</strong>, et une <strong>unité de longueur</strong> :{" "}
          <Math tex="OI = 1" /> cm.
        </Callout>

        <div className="mt-4 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-3 font-mono text-xs font-semibold text-blue-600 uppercase">Exemple</p>
          <ul className="mb-4 space-y-1 text-sm text-foreground-muted">
            <li>Le point <strong>O</strong> : l&apos;origine de la droite ;</li>
            <li>la distance <strong>OI</strong> : l&apos;unité ;</li>
            <li>le point <strong>I</strong>, appelé « <strong>point d&apos;unité</strong> ».</li>
          </ul>
          <NumberLine
            ticks={[
              { x: 30, label: "-2" }, { x: 90, label: "-1" }, { x: 150, label: "0" }, { x: 210, label: "1" },
              { x: 270, label: "2" }, { x: 330, label: "3" }, { x: 390, label: "4" }, { x: 450, label: "5" }, { x: 510, label: "6" },
            ]}
            points={[
              { x: 150, label: "O", fill: "fill-blue-600" },
              { x: 210, label: "I", fill: "fill-rose-600" },
            ]}
            color="text-blue-700"
          />
        </div>
      </LessonSection>

      {/* ===================== II. ABSCISSE D'UN POINT ===================== */}
      <LessonSection
        id="abscisse"
        kicker="02 · Un nombre par point"
        title="Abscisse d'un point"
        tone="muted"
        description="Chaque point d'une droite graduée porte un nombre."
      >
        <Callout variant="danger" title="Définition">
          Chaque point d&apos;une droite graduée est repéré par un nombre appelé <strong>abscisse du point</strong>.
          L&apos;abscisse d&apos;un point A se note <Math tex="x_A" />.
        </Callout>

        <div className="mt-4 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-4 font-mono text-xs font-semibold text-sky-600 uppercase">Exemple</p>
          <svg viewBox="0 0 560 170" className="mx-auto mb-5 h-auto w-full max-w-2xl">
            <defs>
              <marker id="arrow-sky" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
                <path d="M0,0 L9,4.5 L0,9 Z" className="fill-foreground" />
              </marker>
            </defs>
            <line x1="15" y1="90" x2="540" y2="90" className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#arrow-sky)" />
            <g className="stroke-foreground-muted" strokeWidth="2">
              <line x1="35" y1="84" x2="35" y2="96" /><line x1="90" y1="84" x2="90" y2="96" /><line x1="145" y1="84" x2="145" y2="96" />
              <line x1="200" y1="84" x2="200" y2="96" /><line x1="255" y1="84" x2="255" y2="96" /><line x1="310" y1="84" x2="310" y2="96" />
              <line x1="365" y1="84" x2="365" y2="96" /><line x1="420" y1="84" x2="420" y2="96" /><line x1="475" y1="84" x2="475" y2="96" />
            </g>
            <text x="27" y="118" fontSize="15" className="fill-foreground-muted">-4</text>
            <text x="82" y="118" fontSize="15" className="fill-foreground-muted">-3</text>
            <text x="137" y="118" fontSize="15" className="fill-foreground-muted">-2</text>
            <text x="192" y="118" fontSize="15" className="fill-foreground-muted">-1</text>
            <text x="251" y="118" fontSize="15" className="fill-foreground-muted">0</text>
            <text x="306" y="118" fontSize="15" className="fill-foreground-muted">1</text>
            <text x="361" y="118" fontSize="15" className="fill-foreground-muted">2</text>
            <text x="416" y="118" fontSize="15" className="fill-foreground-muted">3</text>
            <text x="471" y="118" fontSize="15" className="fill-foreground-muted">4</text>
            <circle cx="90" cy="90" r="5" className="fill-sky-600" />
            <circle cx="117.5" cy="90" r="5" className="fill-sky-600" />
            <circle cx="255" cy="90" r="5" className="fill-foreground" />
            <circle cx="310" cy="90" r="5" className="fill-rose-600" />
            <circle cx="365" cy="90" r="5" className="fill-sky-600" />
            <circle cx="475" cy="90" r="5" className="fill-sky-600" />
            <circle cx="502.5" cy="90" r="5" className="fill-sky-600" />
            <text x="84" y="70" fontSize="17" className="fill-sky-700 font-bold">B</text>
            <text x="112" y="70" fontSize="17" className="fill-sky-700 font-bold">D</text>
            <text x="249" y="70" fontSize="17" className="fill-foreground font-bold">O</text>
            <text x="304" y="70" fontSize="17" className="fill-rose-700 font-bold">I</text>
            <text x="359" y="70" fontSize="17" className="fill-sky-700 font-bold">A</text>
            <text x="469" y="70" fontSize="17" className="fill-sky-700 font-bold">C</text>
            <text x="497" y="70" fontSize="17" className="fill-sky-700 font-bold">E</text>
          </svg>
          <div className="grid gap-x-6 gap-y-1.5 rounded-xl bg-surface-muted p-4 text-sm sm:grid-cols-2 md:p-5">
            <p>Abscisse de <strong>O</strong> : <Math tex="x_O = 0" /></p>
            <p>Abscisse de <strong>I</strong> : <Math tex="x_I = 1" /></p>
            <p>Abscisse de <strong>A</strong> : <Math tex="x_A = 2" /></p>
            <p>Abscisse de <strong>B</strong> : <Math tex="x_B = -3" /></p>
            <p>Abscisse de <strong>C</strong> : <Math tex="x_C = 4" /></p>
            <p>Abscisse de <strong>D</strong> : <Math tex="x_D = -2{,}5" /></p>
            <p>Abscisse de <strong>E</strong> : <Math tex="x_E = 4{,}5" /></p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. DISTANCE ===================== */}
      <LessonSection
        id="distance"
        kicker="03 · Toujours positive"
        title="Distance sur une droite graduée"
        tone="light"
        description="Toujours la plus grande abscisse moins la plus petite."
      >
        <Callout variant="danger" title="Définition">
          <p className="mb-3">
            La distance entre deux points A et B est la longueur du segment [AB]. On calcule la différence entre{" "}
            <strong>l&apos;abscisse la plus grande</strong> et <strong>l&apos;abscisse la plus petite</strong> :
          </p>
          <p className="rounded-xl bg-surface py-3 text-center font-display text-xl font-bold text-rose-600">
            AB = plus grande abscisse − plus petite abscisse
          </p>
        </Callout>

        <div className="mt-4 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-4 font-mono text-xs font-semibold text-cyan-600 uppercase">
            Exemple · A(+2) ; B(−3) et C(+4)
          </p>
          <svg viewBox="0 0 500 190" className="mx-auto mb-5 h-auto w-full max-w-xl">
            <defs>
              <marker id="arrow-cyan" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
                <path d="M0,0 L9,4.5 L0,9 Z" className="fill-foreground" />
              </marker>
            </defs>
            <line x1="15" y1="60" x2="480" y2="60" className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#arrow-cyan)" />
            <g className="stroke-foreground-muted" strokeWidth="2">
              <line x1="35" y1="54" x2="35" y2="66" /><line x1="90" y1="54" x2="90" y2="66" /><line x1="145" y1="54" x2="145" y2="66" /><line x1="200" y1="54" x2="200" y2="66" />
              <line x1="255" y1="54" x2="255" y2="66" /><line x1="310" y1="54" x2="310" y2="66" /><line x1="365" y1="54" x2="365" y2="66" /><line x1="420" y1="54" x2="420" y2="66" />
            </g>
            <text x="27" y="88" fontSize="14" className="fill-foreground-muted">-3</text>
            <text x="82" y="88" fontSize="14" className="fill-foreground-muted">-2</text>
            <text x="137" y="88" fontSize="14" className="fill-foreground-muted">-1</text>
            <text x="196" y="88" fontSize="14" className="fill-foreground-muted">0</text>
            <text x="251" y="88" fontSize="14" className="fill-foreground-muted">1</text>
            <text x="306" y="88" fontSize="14" className="fill-foreground-muted">2</text>
            <text x="361" y="88" fontSize="14" className="fill-foreground-muted">3</text>
            <text x="416" y="88" fontSize="14" className="fill-foreground-muted">4</text>
            <circle cx="35" cy="60" r="5.5" className="fill-cyan-600" />
            <circle cx="310" cy="60" r="5.5" className="fill-cyan-600" />
            <circle cx="420" cy="60" r="5.5" className="fill-cyan-600" />
            <text x="29" y="40" fontSize="16" className="fill-cyan-700 font-bold">B</text>
            <text x="304" y="40" fontSize="16" className="fill-cyan-700 font-bold">A</text>
            <text x="414" y="40" fontSize="16" className="fill-cyan-700 font-bold">C</text>
            <path d="M35,112 L35,120 L310,120 L310,112" className="stroke-cyan-500" fill="none" strokeWidth="2" />
            <text x="150" y="140" fontSize="15" className="fill-cyan-700 font-bold">AB = 5</text>
            <path d="M310,152 L310,160 L420,160 L420,152" className="stroke-green-600" fill="none" strokeWidth="2" />
            <text x="333" y="180" fontSize="15" className="fill-green-700 font-bold">AC = 2</text>
          </svg>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-cyan-100/60 p-4 text-sm text-cyan-900">
              <p>Puisque <Math tex="x_B < x_A" /> :</p>
              <p className="mt-1 font-semibold"><Math tex="AB = x_A - x_B = 2 - (-3) = 2 + 3 = \mathbf{5}" /></p>
            </div>
            <div className="rounded-xl bg-green-100/60 p-4 text-sm text-green-900">
              <p>Puisque <Math tex="x_C > x_A" /> :</p>
              <p className="mt-1 font-semibold"><Math tex="AC = x_C - x_A = 4 - 2 = \mathbf{2}" /></p>
            </div>
          </div>
        </div>

        <Callout variant="warning">
          <strong>Remarque :</strong> une distance est toujours positive.
        </Callout>
      </LessonSection>

      {/* ===================== IV. REPERE DANS LE PLAN ===================== */}
      <LessonSection
        id="repere"
        kicker="04 · Deux axes"
        title="Repère dans le plan"
        tone="muted"
        description="Deux droites graduées pour repérer un point du plan."
      >
        <Callout variant="danger" title="Définition">
          Un <strong>repère du plan</strong> est un repère orthogonal formé de <strong>deux droites graduées perpendiculaires</strong> ayant la <strong>même origine</strong>.
        </Callout>

        <div className="mt-4 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <svg viewBox="0 0 480 300" className="mx-auto h-auto w-full max-w-lg">
            <defs>
              <marker id="arrow-teal" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
                <path d="M0,0 L9,4.5 L0,9 Z" className="fill-foreground" />
              </marker>
            </defs>
            <line x1="40" y1="220" x2="440" y2="220" className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#arrow-teal)" />
            <line x1="120" y1="290" x2="120" y2="20" className="stroke-foreground" strokeWidth="2.5" markerEnd="url(#arrow-teal)" />
            <circle cx="120" cy="220" r="5" className="fill-foreground" />
            <text x="98" y="245" fontSize="17" className="fill-foreground font-bold">O</text>
            <text x="424" y="245" fontSize="16" className="fill-teal-700 font-semibold">x</text>
            <text x="132" y="34" fontSize="16" className="fill-teal-700 font-semibold">y</text>
            <path d="M180,236 L180,255 L280,255" className="stroke-teal-500" fill="none" strokeWidth="2" markerEnd="url(#arrow-teal)" />
            <text x="182" y="275" fontSize="13" className="fill-teal-700 font-medium">la droite horizontale est l&apos;axe des abscisses</text>
            <path d="M136,120 L165,120 L165,60" className="stroke-teal-500" fill="none" strokeWidth="2" markerEnd="url(#arrow-teal)" />
            <text x="168" y="55" fontSize="13" className="fill-teal-700 font-medium">la droite verticale est l&apos;axe des ordonnées</text>
            <text x="30" y="200" fontSize="13" className="fill-foreground-muted font-medium">l&apos;origine du repère</text>
            <path d="M75,195 L112,218" className="stroke-foreground-muted" fill="none" strokeWidth="1.8" markerEnd="url(#arrow-teal)" />
          </svg>
        </div>
      </LessonSection>

      {/* ===================== V. COORDONNEES D'UN POINT ===================== */}
      <LessonSection
        id="coordonnees"
        kicker="05 · Un couple de nombres"
        title="Coordonnées d'un point"
        tone="light"
        description="Repérer un point du plan par un couple de nombres."
      >
        <Callout variant="danger" title="Définition">
          <p className="mb-3">
            Dans un repère orthogonal, un point est repéré par deux nombres appelés ses{" "}
            <strong>coordonnées</strong> : le premier, <strong>l&apos;abscisse</strong>, se lit sur l&apos;axe des
            abscisses ; le second, <strong>l&apos;ordonnée</strong>, se lit sur l&apos;axe des ordonnées.
          </p>
          <p className="border-t border-dashed border-rose-300 pt-3 text-sm">
            <strong>Remarque :</strong> le couple (abscisse ; ordonnée), toujours dans cet ordre, définit les
            coordonnées du point. On note <Math tex="M(x_M \,;\, y_M)" />.
          </p>
        </Callout>

        <div className="mt-4 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-4 font-mono text-xs font-semibold text-violet-600 uppercase">Exemple</p>
          <svg viewBox="0 0 320 300" className="mx-auto mb-5 h-auto w-full max-w-sm">
            <defs>
              <marker id="arrow-violet" markerWidth="8" markerHeight="8" refX="5.5" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" className="fill-foreground-muted" />
              </marker>
            </defs>
            <g className="stroke-border" strokeWidth="1">
              <line x1="22" y1="20" x2="22" y2="276" /><line x1="54" y1="20" x2="54" y2="276" /><line x1="86" y1="20" x2="86" y2="276" /><line x1="118" y1="20" x2="118" y2="276" />
              <line x1="150" y1="20" x2="150" y2="276" /><line x1="182" y1="20" x2="182" y2="276" /><line x1="214" y1="20" x2="214" y2="276" /><line x1="246" y1="20" x2="246" y2="276" /><line x1="278" y1="20" x2="278" y2="276" />
              <line x1="10" y1="20" x2="290" y2="20" /><line x1="10" y1="52" x2="290" y2="52" /><line x1="10" y1="84" x2="290" y2="84" /><line x1="10" y1="116" x2="290" y2="116" />
              <line x1="10" y1="148" x2="290" y2="148" /><line x1="10" y1="180" x2="290" y2="180" /><line x1="10" y1="212" x2="290" y2="212" /><line x1="10" y1="244" x2="290" y2="244" /><line x1="10" y1="276" x2="290" y2="276" />
            </g>
            <line x1="10" y1="148" x2="300" y2="148" className="stroke-foreground" strokeWidth="2" markerEnd="url(#arrow-violet)" />
            <line x1="150" y1="286" x2="150" y2="10" className="stroke-foreground" strokeWidth="2" markerEnd="url(#arrow-violet)" />
            <text x="158" y="126" fontSize="12" className="fill-foreground-muted">1</text>
            <text x="130" y="140" fontSize="12" className="fill-foreground-muted">O</text>
            <line x1="262" y1="148" x2="262" y2="20" className="stroke-border" strokeWidth="1.3" strokeDasharray="3,3" />
            <line x1="150" y1="20" x2="262" y2="20" className="stroke-border" strokeWidth="1.3" strokeDasharray="3,3" />
            <circle cx="262" cy="20" r="4.5" className="fill-foreground" />
            <text x="268" y="18" fontSize="14" className="fill-foreground font-bold">I</text>
            <circle cx="182" cy="84" r="4.5" className="fill-violet-600" /><text x="188" y="80" fontSize="13" className="fill-violet-700 font-bold">A</text>
            <circle cx="118" cy="180" r="4.5" className="fill-violet-600" /><text x="90" y="196" fontSize="13" className="fill-violet-700 font-bold">B</text>
            <circle cx="86" cy="244" r="4.5" className="fill-violet-600" /><text x="58" y="260" fontSize="13" className="fill-violet-700 font-bold">C</text>
            <circle cx="86" cy="116" r="4.5" className="fill-violet-600" /><text x="58" y="112" fontSize="13" className="fill-violet-700 font-bold">D</text>
            <circle cx="214" cy="180" r="4.5" className="fill-violet-600" /><text x="220" y="196" fontSize="13" className="fill-violet-700 font-bold">E</text>
            <circle cx="22" cy="180" r="4.5" className="fill-violet-600" /><text x="4" y="196" fontSize="13" className="fill-violet-700 font-bold">F</text>
            <circle cx="118" cy="52" r="4.5" className="fill-violet-600" /><text x="90" y="48" fontSize="13" className="fill-violet-700 font-bold">G</text>
          </svg>
          <div className="grid gap-x-6 gap-y-1.5 rounded-xl bg-surface-muted p-4 text-sm sm:grid-cols-2 md:p-5">
            <p>Origine : <strong>O(0 ; 0)</strong></p>
            <p>Point A : <strong>A(1 ; 2)</strong></p>
            <p>Point B : <strong>B(−1 ; −1)</strong></p>
            <p>Point C : <strong>C(−2 ; −3)</strong></p>
            <p>Point D : <strong>D(−2 ; 1)</strong></p>
            <p>Point E : <strong>E(2 ; −1)</strong></p>
            <p>Point F : <strong>F(−4 ; −1)</strong></p>
            <p>Point G : <strong>G(−1 ; 3)</strong></p>
            <p>Point I : <strong>I(3,5 ; 4)</strong></p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="8 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={8} celebrationTitle="Bravo, les 8 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la droite graduée et le repère.">
          <ExerciseCard
            id="1"
            index={1}
            title="Distances sur une droite graduée"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">
                  Sur une droite graduée au centimètre, d&apos;origine O, place les points A, B, C, D et E
                  d&apos;abscisse : <strong>A(−2,5) ; x<sub className="text-xs">B</sub> = +3,5 ; x<sub className="text-xs">C</sub> = −1 ; D(2) ; E(+2,5)</strong>.
                  Donne les distances AB, CD, AC, BD, AE, BE, EC et DE.
                </p>
                <NumberLine
                  width={460}
                  height={110}
                  color="text-amber-700"
                  ticks={[
                    { x: 45, label: "-3" }, { x: 95, label: "-2" }, { x: 145, label: "-1" }, { x: 195, label: "0" },
                    { x: 245, label: "1" }, { x: 295, label: "2" }, { x: 345, label: "3" }, { x: 395, label: "4" },
                  ]}
                  points={[
                    { x: 70, label: "A", fill: "fill-amber-500" },
                    { x: 145, label: "C", fill: "fill-amber-500" },
                    { x: 295, label: "D", fill: "fill-amber-500" },
                    { x: 320, label: "E", fill: "fill-amber-500" },
                    { x: 370, label: "B", fill: "fill-amber-500" },
                  ]}
                />
              </div>
            }
            correction={
              <div className="grid gap-2.5 text-sm sm:grid-cols-2">
                <CorrectionCard><Math tex="AB = x_B - x_A = 3{,}5-(-2{,}5) = \mathbf{6}" /></CorrectionCard>
                <CorrectionCard><Math tex="CD = x_D - x_C = 2-(-1) = \mathbf{3}" /></CorrectionCard>
                <CorrectionCard><Math tex="AC = x_C - x_A = -1-(-2{,}5) = \mathbf{1{,}5}" /></CorrectionCard>
                <CorrectionCard><Math tex="BD = x_B - x_D = 3{,}5-2 = \mathbf{1{,}5}" /></CorrectionCard>
                <CorrectionCard><Math tex="AE = x_E - x_A = 2{,}5-(-2{,}5) = \mathbf{5}" /></CorrectionCard>
                <CorrectionCard><Math tex="BE = x_B - x_E = 3{,}5-2{,}5 = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard><Math tex="EC = x_E - x_C = 2{,}5-(-1) = \mathbf{3{,}5}" /></CorrectionCard>
                <CorrectionCard><Math tex="DE = x_E - x_D = 2{,}5-2 = \mathbf{0{,}5}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Le quadrilatère MNPQ"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">
                  Sur papier quadrillé, trace un repère orthogonal d&apos;origine O (unité : un carreau).
                </p>
                <ol className="list-inside list-decimal space-y-1 text-sm">
                  <li>Place M(6 ; 5), N(6 ; −3), P(−6 ; −3), Q(−6 ; 5).</li>
                  <li>Que peut-on dire du quadrilatère MNPQ ?</li>
                  <li>Donne les coordonnées du point d&apos;intersection A des diagonales de MNPQ.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={2}>
                  [MN] et [PQ] sont verticaux (M, N ont l&apos;abscisse 6 ; P, Q ont l&apos;abscisse −6), [NP] et [QM]
                  sont horizontaux (N, P ont l&apos;ordonnée −3 ; Q, M ont l&apos;ordonnée 5). <Math tex="MN = PQ = 8" /> et{" "}
                  <Math tex="NP = QM = 12" /> : côtés opposés parallèles et de même longueur, angles droits.{" "}
                  <strong>MNPQ est un rectangle.</strong>
                </CorrectionCard>
                <CorrectionCard n={3}>
                  Les diagonales d&apos;un rectangle se coupent en leur milieu commun :{" "}
                  <Math tex="x_A = \dfrac{6+(-6)}{2} = 0" /> et <Math tex="y_A = \dfrac{5+(-3)}{2} = 1" />, d&apos;où{" "}
                  <strong>A(0 ; 1)</strong>.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Le milieu d'un segment"
            items={
              <p className="text-sm text-foreground-muted">
                Dans un repère, place A(−5 ; −3) et B(3 ; −1). Trace [AB], place le milieu M de ce segment et lis ses
                coordonnées.
              </p>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard>Les coordonnées du milieu M d&apos;un segment [AB] sont la moyenne des coordonnées de A et de B.</CorrectionCard>
                <CorrectionCard>
                  <Math tex="x_M = \dfrac{x_A+x_B}{2} = \dfrac{-5+3}{2} = \mathbf{-1}" />
                  &nbsp;&nbsp;
                  <Math tex="y_M = \dfrac{y_A+y_B}{2} = \dfrac{-3+(-1)}{2} = \mathbf{-2}" />
                </CorrectionCard>
                <CorrectionCard>D&apos;où <strong>M(−1 ; −2)</strong>.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Lire et placer des points"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">Dans le repère ci-contre, on a placé les points A, B, C.</p>
                <ol className="list-inside list-decimal space-y-1 text-sm">
                  <li>Écris les coordonnées des points A, B, C.</li>
                  <li>Trace ce repère (en prolongeant les axes) et place F(−3 ; 0), G(−2 ; 5), H(0 ; −4).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={1}>
                  <strong>A(−2 ; 1)</strong> &nbsp;·&nbsp; <strong>B(0,5 ; 1,5)</strong> &nbsp;·&nbsp; <strong>C(0 ; −1,5)</strong>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Les températures"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">
                  Ce tableau donne les températures relevées en un lieu chaque heure entre 1 h et 5 h.
                </p>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full min-w-[380px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="bg-surface-muted p-2 pl-4 text-left font-semibold">Point</td>
                        <td className="p-2 font-bold text-amber-600">A</td><td className="p-2 font-bold text-amber-600">B</td>
                        <td className="p-2 font-bold text-amber-600">C</td><td className="p-2 font-bold text-amber-600">D</td>
                        <td className="p-2 font-bold text-amber-600">E</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="bg-surface-muted p-2 pl-4 text-left font-semibold">Heure</td>
                        <td className="p-2">1</td><td className="p-2">2</td><td className="p-2">3</td><td className="p-2">4</td><td className="p-2">5</td>
                      </tr>
                      <tr>
                        <td className="bg-surface-muted p-2 pl-4 text-left font-semibold">Température (°C)</td>
                        <td className="p-2">1</td><td className="p-2">3</td><td className="p-2">2</td><td className="p-2">−2</td><td className="p-2">−3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-foreground-muted">
                  Trace un repère sur papier quadrillé et place les cinq points (heure en abscisse, température en ordonnée).
                </p>
              </div>
            }
            correction={
              <CorrectionCard>
                Les cinq points (heure ; température) : <strong>A(1 ; 1)</strong>, <strong>B(2 ; 3)</strong>,{" "}
                <strong>C(3 ; 2)</strong>, <strong>D(4 ; −2)</strong>, <strong>E(5 ; −3)</strong>.
              </CorrectionCard>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Coordonnées et symétrie"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">Dans le repère ci-dessous, on a placé les points A, B, C, D, E, F.</p>
                <ol className="list-inside list-decimal space-y-1 text-sm">
                  <li>Lis les coordonnées de A, B, C, D, E et F.</li>
                  <li>Un point G a la même abscisse que B et la même ordonnée que E. Quelles sont ses coordonnées ?</li>
                  <li>A&apos; est le symétrique de A par rapport à l&apos;origine O. Quelles sont ses coordonnées ?</li>
                  <li>B&apos; est le symétrique de B par rapport à l&apos;origine O. Quelles sont ses coordonnées ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={1}>
                  A(−1 ; 2) &nbsp;·&nbsp; B(2,5 ; 1,5) &nbsp;·&nbsp; C(0 ; 1,5) &nbsp;·&nbsp; D(−3 ; −0,5) &nbsp;·&nbsp; E(1 ; −2) &nbsp;·&nbsp; F(3,5 ; 0)
                </CorrectionCard>
                <CorrectionCard n={2}>
                  G a pour abscisse <Math tex="x_B = 2{,}5" /> et pour ordonnée <Math tex="y_E = -2" />, donc <strong>G(2,5 ; −2)</strong>.
                </CorrectionCard>
                <CorrectionCard n={3}>
                  Le symétrique d&apos;un point M(x ; y) par rapport à O est (−x ; −y). Donc <strong>A&apos;(1 ; −2)</strong> : A&apos; est alors confondu avec le point E !
                </CorrectionCard>
                <CorrectionCard n={4}>De même, <strong>B&apos;(−2,5 ; −1,5)</strong>.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title={<>Devinette <span className="text-xs font-normal text-foreground-muted">nombre relatif</span></>}
            items={
              <div className="space-y-1 rounded-xl bg-surface-muted p-4 text-sm italic">
                <p>Je suis un nombre entier relatif.</p>
                <p>Ma distance à zéro est comprise entre 10,7 et 19,3.</p>
                <p>Mon opposé est compris entre 5,75 et 11,3.</p>
                <p className="font-semibold not-italic">Qui suis-je ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard>
                  Notons <Math tex="n" /> ce nombre. Sa distance à zéro est <Math tex="|n|" />, donc{" "}
                  <Math tex="|n| \in \,]10{,}7\,;\,19{,}3[" />, soit <strong>|n| ∈ {"{11, 12, …, 19}"}</strong>.
                </CorrectionCard>
                <CorrectionCard>
                  Son opposé est <Math tex="-n" />, donc <Math tex="-n \in \,]5{,}75\,;\,11{,}3[" />, soit −n ∈ {"{6, 7, …, 11}"},
                  c&apos;est-à-dire <strong>n ∈ {"{−6, −7, …, −11}"}</strong>. n est donc négatif.
                </CorrectionCard>
                <CorrectionCard>
                  Comme n est négatif, <Math tex="|n| = -n" />. La première condition donne <Math tex="-n \in \{11,\dots,19\}" />.
                  En combinant avec <Math tex="-n \in \{6,\dots,11\}" />, la seule valeur commune est <strong>−n = 11</strong>.
                </CorrectionCard>
                <CorrectionCard>
                  Je suis <span className="font-display text-lg font-bold text-green-700">−11</span>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title={<>Devinette <span className="text-xs font-normal text-foreground-muted">somme des chiffres</span></>}
            items={
              <div className="space-y-1 rounded-xl bg-surface-muted p-4 text-sm italic">
                <p>Je suis un nombre entier relatif compris entre −51 et −42, dont la somme des chiffres est 10.</p>
                <p className="font-semibold not-italic">Qui suis-je ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard>On teste chaque entier entre −51 et −42, en additionnant les chiffres de sa valeur absolue :</CorrectionCard>
                <div className="grid grid-cols-5 gap-2 text-center sm:grid-cols-10">
                  {[
                    ["−42", "4+2=6"], ["−43", "4+3=7"], ["−44", "4+4=8"], ["−45", "4+5=9"], ["−46", "4+6=10 ✓"],
                    ["−47", "4+7=11"], ["−48", "4+8=12"], ["−49", "4+9=13"], ["−50", "5+0=5"], ["−51", "5+1=6"],
                  ].map(([n, s]) => (
                    <div
                      key={n}
                      className={`rounded-lg border p-2 ${n === "−46" ? "border-green-600 bg-green-600 text-white" : "border-border bg-surface"}`}
                    >
                      <p className="font-bold">{n}</p>
                      <p className={`mt-0.5 text-xs ${n === "−46" ? "text-white" : "text-foreground-muted"}`}>{s}</p>
                    </div>
                  ))}
                </div>
                <CorrectionCard>
                  Je suis <span className="font-display text-lg font-bold text-green-700">−46</span>
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
