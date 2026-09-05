import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  FormulaBlock,
  Math,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Trigonométrie 1 — Calcul trigonométrique · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet de trigonométrie : radian, cercle trigonométrique, abscisse curviligne, angles orientés, sinus/cosinus/tangente d'un nombre réel, angles associés. 12 exercices entièrement corrigés, Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "Trigonométrie 1 — Calcul trigonométrique",
  heroSubtitle:
    "Le radian, le cercle trigonométrique, l'abscisse curviligne, les angles orientés, puis sinus, cosinus et tangente d'un nombre réel et les angles associés : un cours complet suivi de 12 exercices corrigés en détail.",
  footerNote: "Trigonométrie 1 — Calcul trigonométrique · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "radian", label: "Radian" },
    { id: "abscisses", label: "Abscisses curvilignes" },
    { id: "angles-orientes", label: "Angles orientés" },
    { id: "rapports", label: "sin, cos, tan" },
    { id: "angles-associes", label: "Angles associés" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Helpers géométriques (calculs exacts, aucune figure à main levée) ===================== */

/** Point sur un cercle de centre (cx,cy) et de rayon r, à l'angle theta (radians, sens direct). */
function polar(cx: number, cy: number, r: number, theta: number) {
  return { x: cx + r * globalThis.Math.cos(theta), y: cy - r * globalThis.Math.sin(theta) };
}

interface CirclePointSpec {
  theta: number;
  label: string;
  color: string;
  labelPos?: "auto" | "up" | "down" | "left" | "right";
}

/** Cercle trigonométrique avec un ou plusieurs points M d'abscisse curviligne theta, placés par calcul exact (Math.cos/Math.sin). */
function TrigCircle({
  points,
  showProjections = false,
  size = "max-w-[260px]",
}: {
  points: CirclePointSpec[];
  showProjections?: boolean;
  size?: string;
}) {
  const cx = 150;
  const cy = 150;
  const r = 108;
  const I = polar(cx, cy, r, 0);
  const Iprime = polar(cx, cy, r, globalThis.Math.PI);
  const J = polar(cx, cy, r, globalThis.Math.PI / 2);
  const Jprime = polar(cx, cy, r, -globalThis.Math.PI / 2);
  return (
    <svg viewBox="0 0 300 300" className={`mx-auto h-auto w-full ${size}`}>
      <line x1={cx - r - 22} y1={cy} x2={cx + r + 22} y2={cy} stroke="#cbd5e1" strokeWidth="1.2" />
      <line x1={cx} y1={cy - r - 22} x2={cx} y2={cy + r + 22} stroke="#cbd5e1" strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#334155" strokeWidth="1.8" />
      <circle cx={cx} cy={cy} r="2.2" fill="#0f172a" />
      <text x={cx + 7} y={cy + 15} fontSize="11" fill="#0f172a">O</text>
      <circle cx={I.x} cy={I.y} r="2.6" fill="#0f172a" />
      <text x={I.x + 7} y={I.y + 4} fontSize="12" fontWeight="700" fill="#0f172a">I</text>
      <circle cx={Iprime.x} cy={Iprime.y} r="2.6" fill="#0f172a" />
      <text x={Iprime.x - 17} y={Iprime.y + 4} fontSize="12" fontWeight="700" fill="#0f172a">I&apos;</text>
      <circle cx={J.x} cy={J.y} r="2.6" fill="#0f172a" />
      <text x={J.x - 4} y={J.y - 9} fontSize="12" fontWeight="700" fill="#0f172a">J</text>
      <circle cx={Jprime.x} cy={Jprime.y} r="2.6" fill="#0f172a" />
      <text x={Jprime.x - 8} y={Jprime.y + 18} fontSize="12" fontWeight="700" fill="#0f172a">J&apos;</text>
      {points.map((p, i) => {
        const M = polar(cx, cy, r, p.theta);
        const lx = M.x >= cx ? M.x + 8 : M.x - 8;
        const ly = M.y >= cy ? M.y + 16 : M.y - 8;
        const anchor = M.x >= cx ? "start" : "end";
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={M.x} y2={M.y} stroke={p.color} strokeWidth="1.8" />
            {showProjections ? (
              <>
                <line x1={M.x} y1={M.y} x2={M.x} y2={cy} stroke={p.color} strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
                <line x1={M.x} y1={M.y} x2={cx} y2={M.y} stroke={p.color} strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
              </>
            ) : null}
            <circle cx={M.x} cy={M.y} r="3.4" fill={p.color} />
            <text x={lx} y={ly} fontSize="12" fontWeight="700" fill={p.color} textAnchor={anchor}>
              {p.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <div className="text-foreground">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500">
      {children}
    </span>
  );
}

function Item({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border p-4">
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

/** Two-column layout: statement / correction text on the left, a figure on the right. */
function Figure({ text, svg }: { text: ReactNode; svg: ReactNode }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-5">
      <div className="space-y-2 text-sm text-foreground sm:col-span-3">{text}</div>
      <div className="flex justify-center sm:col-span-2">{svg}</div>
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
          { value: "5", label: "notions du cours" },
          { value: "12", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#radian" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Voir les exercices
            </a>
          </>
        }
        visual={
          <div className="flex select-none flex-col items-end gap-1 text-right font-mono text-white">
            <span className="text-3xl font-bold sm:text-4xl">
              cos<span className="text-orange-400">x</span>, sin<span className="text-orange-400">x</span>
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-400">cercle trigonométrique · rayon 1</span>
          </div>
        }
      />

      {/* ===================== 1. RADIAN ET CERCLE TRIGONOMÉTRIQUE ===================== */}
      <LessonSection
        id="radian"
        kicker="01 · Unité d'angle"
        title="Le radian et le cercle trigonométrique"
        tone="light"
        description="Une nouvelle unité pour mesurer les angles, mieux adaptée à l'étude des fonctions trigonométriques que le degré."
      >
        <DefBox label="Définition · le radian">
          Soit <Math tex="\mathcal{C}" /> un cercle de centre <Math tex="O" /> et de rayon <Math tex="1" />. On appelle{" "}
          <strong>radian</strong> (noté <Math tex="\text{rad}" />) la mesure de l&apos;angle au centre qui intercepte un
          arc de longueur <Math tex="1" /> sur ce cercle.
        </DefBox>
        <div className="mt-3">
          <Callout variant="info" title="Remarque">
            On étend cette définition à tout cercle de rayon <Math tex="R" /> : le radian est alors la mesure de
            l&apos;angle au centre qui intercepte un arc de longueur <Math tex="R" />. Le radian sert aussi à mesurer des
            longueurs d&apos;arcs sur le cercle trigonométrique.
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Cercle trigonométrique</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <TrigCircle points={[]} />
          <div className="space-y-3 text-sm text-foreground-muted">
            <p>
              Sur un cercle, le <strong className="text-foreground">sens direct</strong> (ou sens positif, ou sens
              trigonométrique) est le sens <strong className="text-foreground">contraire des aiguilles d&apos;une
              montre</strong>.
            </p>
            <p>
              Un <strong className="text-foreground">cercle trigonométrique</strong> est un cercle de centre{" "}
              <Math tex="O" /> et de rayon <Math tex="1" />, muni d&apos;un point origine <Math tex="I" /> et du sens de
              parcours direct. On y place aussi <Math tex="J" /> tel que <Math tex="(\overrightarrow{OI},\overrightarrow{OJ})" /> soit
              un angle droit direct.
            </p>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Relation degré ↔ radian</p>
        <FormulaBlock tex="\dfrac{x}{\pi}=\dfrac{y}{180}" caption="x : mesure en radians — y : mesure en degrés, pour un même angle" />

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[560px] border-collapse bg-surface text-center">
            <thead>
              <tr className="bg-neutral-950 text-white">
                <th className="px-4 py-3 text-left font-semibold sm:text-center">degrés</th>
                <th className="px-3 py-3 font-semibold"><Math tex="0^\circ" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="30^\circ" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="45^\circ" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="60^\circ" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="90^\circ" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="180^\circ" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="360^\circ" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center">radians</td>
                <td className="px-3 py-3.5"><Math tex="0" /></td>
                <td className="px-3 py-3.5"><Math tex="\dfrac{\pi}{6}" /></td>
                <td className="px-3 py-3.5"><Math tex="\dfrac{\pi}{4}" /></td>
                <td className="px-3 py-3.5"><Math tex="\dfrac{\pi}{3}" /></td>
                <td className="px-3 py-3.5"><Math tex="\dfrac{\pi}{2}" /></td>
                <td className="px-3 py-3.5"><Math tex="\pi" /></td>
                <td className="px-3 py-3.5"><Math tex="2\pi" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            1) Convertir <Math tex="150^\circ" /> en radians. 2) Convertir <Math tex="\dfrac{7\pi}{4}" /> rad en degrés.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  1) <Math tex="\dfrac{x}{\pi}=\dfrac{150}{180}" /> donc <Math tex="x=\dfrac{150\pi}{180}=\dfrac{5\pi}{6}" />.{" "}
                  <strong className="text-green-700"><Math tex="150^\circ=\dfrac{5\pi}{6}\text{ rad}" /></strong>
                </p>
                <p>
                  2) <Math tex="\dfrac{7\pi/4}{\pi}=\dfrac{y}{180}" /> donc <Math tex="y=\dfrac{7}{4}\times180=315" />.{" "}
                  <strong className="text-green-700"><Math tex="\dfrac{7\pi}{4}\text{ rad}=315^\circ" /></strong>
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== 2. ABSCISSES CURVILIGNES ===================== */}
      <LessonSection
        id="abscisses"
        kicker="02 · Repérer un point sur le cercle"
        title="Abscisse curviligne d'un point"
        tone="muted"
        description="On enroule la droite numérique sur le cercle trigonométrique pour associer un ou plusieurs réels à chaque point du cercle."
      >
        <DefBox label="Enroulement de la droite numérique">
          On fait coïncider le zéro de la droite numérique avec l&apos;origine <Math tex="I" /> du cercle
          trigonométrique, puis on enroule la demi-droite des réels positifs sur le cercle dans le{" "}
          <strong>sens direct</strong>, et la demi-droite des réels négatifs dans le <strong>sens indirect</strong>.
          Chaque point <Math tex="M" /> du cercle est ainsi recouvert par une infinité de réels, appelés{" "}
          <strong>abscisses curvilignes</strong> de <Math tex="M" />.
        </DefBox>

        <div className="mt-4 rounded-xl bg-neutral-950 p-6 text-white sm:p-8">
          <p className="text-sm text-neutral-300">
            Si <Math tex="\alpha" /> est une abscisse curviligne de <Math tex="M" />, l&apos;ensemble de toutes les
            abscisses curvilignes de <Math tex="M" /> est :
          </p>
          <div className="mt-3 text-center text-xl font-bold sm:text-2xl">
            <Math tex="\{\alpha+2k\pi\;;\;k\in\mathbb{Z}\}" />
          </div>
        </div>

        <div className="mt-4">
          <Callout variant="success" title="Propriété">
            Si <Math tex="x" /> et <Math tex="x'" /> sont deux abscisses curvilignes du même point <Math tex="M" />,
            alors il existe <Math tex="k\in\mathbb{Z}" /> tel que <Math tex="x'=x+2k\pi" />. On note{" "}
            <Math tex="x'\equiv x\ [2\pi]" /> et on lit « <Math tex="x'" /> est congru à <Math tex="x" /> modulo{" "}
            <Math tex="2\pi" /> ».
          </Callout>
        </div>

        <DefBox label="Abscisse curviligne principale">
          <div className="mt-1">
            Parmi toutes les abscisses curvilignes d&apos;un point <Math tex="M" />, une seule appartient à
            l&apos;intervalle <Math tex="]-\pi\,;\,\pi]" />. On l&apos;appelle{" "}
            <strong>abscisse curviligne principale</strong> de <Math tex="M" />.
          </div>
        </DefBox>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Méthode et exemple résolu</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5 sm:p-6">
          <div className="space-y-3 text-sm sm:col-span-3">
            <p className="text-foreground-muted">
              Déterminer l&apos;abscisse curviligne principale de <Math tex="x=\dfrac{29\pi}{4}" />.
            </p>
            <Accordion>
              <AccordionItem title="Voir la solution">
                <div className="space-y-2 text-sm">
                  <p>
                    On cherche <Math tex="k\in\mathbb{Z}" /> et <Math tex="\theta\in\,]-\pi\,;\,\pi]" /> tels que{" "}
                    <Math tex="\dfrac{29\pi}{4}=\theta+2k\pi" />.
                  </p>
                  <p>
                    <Math tex="\dfrac{29\pi}{4}=7{,}25\pi" />. En retranchant <Math tex="3\times2\pi=\dfrac{24\pi}{4}" /> :{" "}
                    <Math tex="\dfrac{29\pi}{4}-\dfrac{24\pi}{4}=\dfrac{5\pi}{4}" />, qui n&apos;est pas dans{" "}
                    <Math tex="]-\pi\,;\,\pi]" /> (car <Math tex="\tfrac{5\pi}{4}>\pi" />). On retranche encore{" "}
                    <Math tex="2\pi=\tfrac{8\pi}{4}" /> : <Math tex="\dfrac{5\pi}{4}-\dfrac{8\pi}{4}=-\dfrac{3\pi}{4}" />, qui
                    appartient bien à <Math tex="]-\pi\,;\,\pi]" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="\dfrac{29\pi}{4}\equiv-\dfrac{3\pi}{4}\ [2\pi]" /> : l&apos;abscisse curviligne principale
                    est <Math tex="-\dfrac{3\pi}{4}" />.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center sm:col-span-2">
            <TrigCircle points={[{ theta: -3 * globalThis.Math.PI / 4, label: "M", color: "#4f46e5" }]} />
          </div>
        </div>
      </LessonSection>

      {/* ===================== 3. ANGLES ORIENTÉS ===================== */}
      <LessonSection
        id="angles-orientes"
        kicker="03 · Orienter un angle"
        title="Angles orientés de deux demi-droites (ou de deux vecteurs)"
        tone="light"
        description="Un angle géométrique ne suffit pas toujours : on a besoin de préciser dans quel sens on le parcourt."
      >
        <DefBox label="Définition">
          Soient <Math tex="[Ox)" /> et <Math tex="[Oy)" /> deux demi-droites de même origine <Math tex="O" />. Le
          couple <Math tex="([Ox),[Oy))" />, pris dans cet ordre, détermine un <strong>angle orienté</strong>, noté{" "}
          <Math tex="(\overrightarrow{Ox},\overrightarrow{Oy})" />. L&apos;angle <Math tex="(\overrightarrow{Oy},\overrightarrow{Ox})" />, pris
          dans l&apos;autre sens, est en général différent.
        </DefBox>

        <div className="mt-4 rounded-xl border-2 border-rose-500/30 bg-surface p-5 text-sm sm:p-6">
          <p className="mb-2 font-semibold text-foreground">Mesures</p>
          <p className="text-foreground-muted">
            Soit <Math tex="\mathcal{C}" /> le cercle trigonométrique de centre <Math tex="O" />, et{" "}
            <Math tex="A,B" /> les points d&apos;intersection de <Math tex="\mathcal{C}" /> avec <Math tex="[Ox)" />,{" "}
            <Math tex="[Oy)" />. Si <Math tex="a" /> et <Math tex="b" /> sont des abscisses curvilignes de{" "}
            <Math tex="A" /> et <Math tex="B" />, tout réel de la forme <Math tex="b-a+2k\pi" /> (<Math tex="k\in\mathbb{Z}" />)
            est une <strong className="text-rose-700">mesure</strong> de <Math tex="(\overrightarrow{Ox},\overrightarrow{Oy})" />. Une
            seule de ces mesures appartient à <Math tex="]-\pi\,;\,\pi]" /> : c&apos;est la{" "}
            <strong className="text-rose-700">mesure principale</strong>.
          </p>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Cas particuliers</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Angle nul</span> — <Math tex="\overrightarrow{Ox}=\overrightarrow{Oy}" /> :{" "}
            <Math tex="(\overrightarrow{Ox},\overrightarrow{Oy})=0\ [2\pi]" />
          </div>
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Angle plat</span> — <Math tex="Ox" /> et <Math tex="Oy" /> opposées :{" "}
            <Math tex="(\overrightarrow{Ox},\overrightarrow{Oy})=\pi\ [2\pi]" />
          </div>
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Angle droit direct</span> :{" "}
            <Math tex="(\overrightarrow{Ox},\overrightarrow{Oy})=\dfrac{\pi}{2}\ [2\pi]" />
          </div>
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Angle droit indirect</span> :{" "}
            <Math tex="(\overrightarrow{Ox},\overrightarrow{Oy})=-\dfrac{\pi}{2}\ [2\pi]" />
          </div>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Relation de Chasles</p>
        <FormulaBlock tex="(\overrightarrow{Ox},\overrightarrow{Oy})+(\overrightarrow{Oy},\overrightarrow{Oz})=(\overrightarrow{Ox},\overrightarrow{Oz})\ [2\pi]" />
        <div className="mt-3">
          <Callout variant="warning" title="Conséquences immédiates">
            <p><Math tex="(\overrightarrow{Oy},\overrightarrow{Ox})=-(\overrightarrow{Ox},\overrightarrow{Oy})\ [2\pi]" /> (en prenant <Math tex="Oz=Ox" />).</p>
            <p className="mt-1">Ces définitions et propriétés s&apos;étendent telles quelles aux <strong>angles orientés de deux
              vecteurs non nuls</strong> <Math tex="\vec u,\vec v" />, en considérant les demi-droites qu&apos;ils dirigent :
              on note alors <Math tex="(\vec u,\vec v)" />, avec <Math tex="(\vec u,\vec u)=0\ [2\pi]" /> et{" "}
              <Math tex="(\vec u,-\vec u)=\pi\ [2\pi]" />.</p>
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== 4. SIN COS TAN D'UN NOMBRE RÉEL ===================== */}
      <LessonSection
        id="rapports"
        kicker="04 · Trois nombres associés à x"
        title="Sinus, cosinus et tangente d'un nombre réel"
        tone="muted"
        description="On généralise le cosinus et le sinus, définis au collège pour un angle aigu, à n'importe quel nombre réel."
      >
        <DefBox label="Repère lié au cercle trigonométrique">
          Le repère <Math tex="(O;\overrightarrow{OI},\overrightarrow{OJ})" /> est orthonormé direct : c&apos;est le{" "}
          <strong>repère lié au cercle trigonométrique</strong> <Math tex="\mathcal{C}" />.
        </DefBox>

        <div className="mt-4 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <TrigCircle points={[{ theta: (50 * globalThis.Math.PI) / 180, label: "M(x)", color: "#4f46e5" }]} showProjections />
          <div className="space-y-3 text-sm">
            <p className="text-foreground-muted">
              Soit <Math tex="x\in\mathbb{R}" />. Il existe un unique point <Math tex="M" /> de <Math tex="\mathcal{C}" />{" "}
              dont <Math tex="x" /> est une abscisse curviligne. Soit <Math tex="C" /> le projeté orthogonal de{" "}
              <Math tex="M" /> sur <Math tex="(OI)" />, et <Math tex="S" /> le projeté orthogonal de <Math tex="M" />{" "}
              sur <Math tex="(OJ)" />.
            </p>
            <div className="space-y-1 rounded-lg bg-amber-100/60 p-4">
              <p><Math tex="\cos x" /> = abscisse de <Math tex="M" /> (= abscisse de <Math tex="C" />)</p>
              <p><Math tex="\sin x" /> = ordonnée de <Math tex="M" /> (= ordonnée de <Math tex="S" />)</p>
            </div>
          </div>
        </div>

        <DefBox label="Tangente">
          <div className="mt-1">
            Soit <Math tex="(\Delta)" /> la tangente au cercle <Math tex="\mathcal{C}" /> en <Math tex="I" />. Si{" "}
            <Math tex="M\neq J" /> et <Math tex="M\neq J'" />, la droite <Math tex="(OM)" /> coupe <Math tex="(\Delta)" />{" "}
            en un point <Math tex="T" />. Le réel <Math tex="\tan x" /> est l&apos;ordonnée de <Math tex="T" /> dans le
            repère <Math tex="(I;\overrightarrow{OJ})" /> porté par <Math tex="(\Delta)" />. On a :
          </div>
        </DefBox>
        <FormulaBlock tex="\tan x=\dfrac{\sin x}{\cos x}\qquad\text{défini ssi } x\neq\dfrac{\pi}{2}+k\pi\ (k\in\mathbb{Z})" />

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Valeurs remarquables à connaître par cœur</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[560px] border-collapse bg-surface text-center">
            <thead>
              <tr className="bg-neutral-950 text-white">
                <th className="px-4 py-3 text-left font-semibold sm:text-center"><Math tex="x" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="0" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="\dfrac{\pi}{6}" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="\dfrac{\pi}{4}" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="\dfrac{\pi}{3}" /></th>
                <th className="px-4 py-3 font-semibold"><Math tex="\dfrac{\pi}{2}" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\cos x" /></td>
                <td className="px-4 py-3.5"><Math tex="1" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt3}2" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt2}2" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac12" /></td>
                <td className="px-4 py-3.5"><Math tex="0" /></td>
              </tr>
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\sin x" /></td>
                <td className="px-4 py-3.5"><Math tex="0" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac12" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt2}2" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt3}2" /></td>
                <td className="px-4 py-3.5"><Math tex="1" /></td>
              </tr>
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\tan x" /></td>
                <td className="px-4 py-3.5"><Math tex="0" /></td>
                <td className="px-4 py-3.5"><Math tex="\dfrac{\sqrt3}3" /></td>
                <td className="px-4 py-3.5"><Math tex="1" /></td>
                <td className="px-4 py-3.5"><Math tex="\sqrt3" /></td>
                <td className="px-4 py-3.5 text-sm font-semibold text-rose-600">indéfini</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Propriétés fondamentales</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4 text-sm"><Math tex="-1\leqslant\cos x\leqslant1" /> et <Math tex="-1\leqslant\sin x\leqslant1" /></div>
          <div className="rounded-lg border border-border p-4 text-sm font-semibold"><Math tex="\cos^2x+\sin^2x=1" /></div>
          <div className="rounded-lg border border-border p-4 text-sm"><Math tex="\cos(x+2k\pi)=\cos x" /> et <Math tex="\sin(x+2k\pi)=\sin x" /> (<Math tex="k\in\mathbb{Z}" />)</div>
          <div className="rounded-lg border border-border p-4 text-sm"><Math tex="\tan(x+k\pi)=\tan x" /> (<Math tex="k\in\mathbb{Z}" />, quand défini)</div>
        </div>
        <div className="mt-3">
          <Callout variant="info" title="Pourquoi cos²x + sin²x = 1 ?">
            Le triangle <Math tex="OCM" /> est rectangle en <Math tex="C" />. Pythagore donne{" "}
            <Math tex="OC^2+CM^2=OM^2=1" />. Or <Math tex="OC=|\cos x|" /> et <Math tex="CM=|\sin x|" />, d&apos;où{" "}
            <Math tex="\cos^2x+\sin^2x=1" />. On dit que cosinus et sinus sont <strong>périodiques de période{" "}
            <Math tex="2\pi" /></strong>.
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Sachant que <Math tex="\tan x=\dfrac13" /> et que <Math tex="x\in\left]\pi\,;\,\dfrac{3\pi}2\right[" />, calculer{" "}
            <Math tex="\cos x" /> et <Math tex="\sin x" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  On sait que <Math tex="1+\tan^2x=\dfrac1{\cos^2x}" /> (conséquence de <Math tex="\cos^2x+\sin^2x=1" />).
                  Donc <Math tex="1+\dfrac19=\dfrac{10}9=\dfrac1{\cos^2x}" />, d&apos;où <Math tex="\cos^2x=\dfrac9{10}" /> et{" "}
                  <Math tex="\cos x=\pm\dfrac3{\sqrt{10}}=\pm\dfrac{3\sqrt{10}}{10}" />.
                </p>
                <p>
                  Or <Math tex="x\in\left]\pi\,;\,\tfrac{3\pi}2\right[" /> (troisième quadrant), donc{" "}
                  <Math tex="\cos x<0" /> : <strong className="text-green-700"><Math tex="\cos x=-\dfrac{3\sqrt{10}}{10}" /></strong>.
                </p>
                <p>
                  Puis <Math tex="\sin x=\tan x\times\cos x=\dfrac13\times\left(-\dfrac{3\sqrt{10}}{10}\right)" />, d&apos;où{" "}
                  <strong className="text-green-700"><Math tex="\sin x=-\dfrac{\sqrt{10}}{10}" /></strong>.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== 5. ANGLES ASSOCIÉS ===================== */}
      <LessonSection
        id="angles-associes"
        kicker="05 · Symétries du cercle"
        title="Angles associés"
        tone="light"
        description="Les symétries du cercle trigonométrique permettent de calculer sin, cos, tan d'un angle à partir d'un angle plus simple."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-3 text-sm font-semibold text-foreground">Opposés, supplémentaires, anti-supplémentaires</p>
            <TrigCircle
              points={[
                { theta: globalThis.Math.PI / 5, label: "x", color: "#4f46e5" },
                { theta: -globalThis.Math.PI / 5, label: "-x", color: "#e11d48" },
                { theta: globalThis.Math.PI - globalThis.Math.PI / 5, label: "π-x", color: "#059669" },
                { theta: globalThis.Math.PI + globalThis.Math.PI / 5, label: "π+x", color: "#d97706" },
              ]}
              size="max-w-[240px]"
            />
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-3 text-sm font-semibold text-foreground">Complémentaires, anti-complémentaires</p>
            <TrigCircle
              points={[
                { theta: globalThis.Math.PI / 5, label: "x", color: "#4f46e5" },
                { theta: globalThis.Math.PI / 2 - globalThis.Math.PI / 5, label: "π/2-x", color: "#059669" },
                { theta: globalThis.Math.PI / 2 + globalThis.Math.PI / 5, label: "π/2+x", color: "#d97706" },
              ]}
              size="max-w-[240px]"
            />
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Tableau récapitulatif</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] border-collapse bg-surface text-center">
            <thead>
              <tr className="bg-neutral-950 text-white">
                <th className="px-4 py-3 text-left font-semibold sm:text-center">angle</th>
                <th className="px-3 py-3 font-semibold"><Math tex="-x" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="\pi-x" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="\pi+x" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="\dfrac{\pi}2-x" /></th>
                <th className="px-3 py-3 font-semibold"><Math tex="\dfrac{\pi}2+x" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\cos" /></td>
                <td className="px-3 py-3.5"><Math tex="\cos x" /></td>
                <td className="px-3 py-3.5"><Math tex="-\cos x" /></td>
                <td className="px-3 py-3.5"><Math tex="-\cos x" /></td>
                <td className="px-3 py-3.5"><Math tex="\sin x" /></td>
                <td className="px-3 py-3.5"><Math tex="-\sin x" /></td>
              </tr>
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\sin" /></td>
                <td className="px-3 py-3.5"><Math tex="-\sin x" /></td>
                <td className="px-3 py-3.5"><Math tex="\sin x" /></td>
                <td className="px-3 py-3.5"><Math tex="-\sin x" /></td>
                <td className="px-3 py-3.5"><Math tex="\cos x" /></td>
                <td className="px-3 py-3.5"><Math tex="\cos x" /></td>
              </tr>
              <tr>
                <td className="bg-surface-muted px-4 py-3.5 text-left font-bold text-foreground sm:text-center"><Math tex="\tan" /></td>
                <td className="px-3 py-3.5"><Math tex="-\tan x" /></td>
                <td className="px-3 py-3.5"><Math tex="-\tan x" /></td>
                <td className="px-3 py-3.5"><Math tex="\tan x" /></td>
                <td className="px-3 py-3.5"><Math tex="\dfrac1{\tan x}" /></td>
                <td className="px-3 py-3.5"><Math tex="-\dfrac1{\tan x}" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <Callout variant="warning" title="Moyen mnémotechnique">
            Pour <Math tex="-x" />, <Math tex="\pi-x" />, <Math tex="\pi+x" /> : cosinus et sinus <strong>gardent leur
            nom</strong> (cos reste cos, sin reste sin), seul le <strong>signe</strong> change selon le quadrant. Pour{" "}
            <Math tex="\tfrac\pi2-x" /> et <Math tex="\tfrac\pi2+x" /> : cosinus et sinus <strong>échangent leur
            nom</strong> (cos devient sin et réciproquement).
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Calculer <Math tex="\cos\left(\dfrac{11\pi}6\right)" /> et <Math tex="\sin\left(\dfrac{11\pi}6\right)" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  <Math tex="\dfrac{11\pi}6=2\pi-\dfrac{\pi}6" />, donc <Math tex="\dfrac{11\pi}6\equiv-\dfrac{\pi}6\ [2\pi]" />.
                </p>
                <p>
                  <Math tex="\cos\left(-\dfrac{\pi}6\right)=\cos\dfrac{\pi}6=\dfrac{\sqrt3}2" /> et{" "}
                  <Math tex="\sin\left(-\dfrac{\pi}6\right)=-\sin\dfrac{\pi}6=-\dfrac12" />.
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="\cos\dfrac{11\pi}6=\dfrac{\sqrt3}2" /> et <Math tex="\sin\dfrac{11\pi}6=-\dfrac12" />.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="12 exercices corrigés"
        tone="muted"
        description="Cherchez chaque exercice au brouillon, puis cliquez pour vérifier votre réponse étape par étape."
      >
        <ExerciseGroup total={12} celebrationTitle="Bravo, les 12 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le calcul trigonométrique de base.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Angles orientés dans une figure"
            items={
              <Figure
                text={
                  <>
                    <p>
                      Sur la figure, <Math tex="I" /> est le milieu de <Math tex="[BC]" /> et{" "}
                      <Math tex="BI=IC=IA=AC" /> (segments marqués). Le sens direct est indiqué par la flèche.
                    </p>
                    <p className="font-semibold">
                      Donner les mesures principales des angles :{" "}
                      <Math tex="(\overrightarrow{CA},\overrightarrow{CI})" /> ; <Math tex="(\overrightarrow{IB},\overrightarrow{IA})" /> ;{" "}
                      <Math tex="(\overrightarrow{BI},\overrightarrow{BA})" /> ; <Math tex="(\overrightarrow{AC},\overrightarrow{AB})" />.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 320 240" className="h-auto w-full max-w-[260px]">
                    <polygon points="40,190 240,190 190,103.4" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="190" y1="103.4" x2="140" y2="190" stroke="#4f46e5" strokeWidth="1.8" />
                    <path d="M 66 190 A 26 26 0 0 1 71 175" fill="none" stroke="#0f172a" strokeWidth="1.4" markerEnd="url(#arrow1)" />
                    <defs>
                      <marker id="arrow1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#0f172a" />
                      </marker>
                    </defs>
                    <circle cx="40" cy="190" r="3" fill="#0f172a" /><text x="24" y="198" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="240" cy="190" r="3" fill="#0f172a" /><text x="248" y="198" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="190" cy="103.4" r="3" fill="#0f172a" /><text x="196" y="98" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="140" cy="190" r="3" fill="#4f46e5" /><text x="134" y="208" fontSize="13" fontWeight="700" fill="#4f46e5">I</text>
                  </svg>
                }
              />
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  <Math tex="IA=IC=AC" /> : le triangle <Math tex="AIC" /> est <strong>équilatéral</strong>, donc{" "}
                  <Math tex="\widehat{AIC}=\widehat{ICA}=\widehat{IAC}=\dfrac{\pi}3" />.
                </p>
                <p>
                  <Math tex="B,I,C" /> alignés, donc <Math tex="\widehat{AIB}=\pi-\widehat{AIC}=\dfrac{2\pi}3" />. Comme{" "}
                  <Math tex="BI=IA" />, le triangle <Math tex="ABI" /> est isocèle en <Math tex="I" /> : ses angles à la
                  base valent <Math tex="\dfrac{\pi-2\pi/3}2=\dfrac{\pi}6" /> chacun.
                </p>
                <p>
                  Donc <Math tex="\widehat B=\dfrac{\pi}6" />, <Math tex="\widehat C=\dfrac{\pi}3" />, et{" "}
                  <Math tex="\widehat A=\widehat{BAI}+\widehat{IAC}=\dfrac{\pi}6+\dfrac{\pi}3=\dfrac{\pi}2" /> (on vérifie{" "}
                  <Math tex="\tfrac\pi6+\tfrac\pi2+\tfrac\pi3=\pi" /> ✓).
                </p>
                <p>En orientant dans le sens direct indiqué sur la figure (ordre <Math tex="B\to C\to A" />) :</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <CorrectionCard n="•"><Math tex="(\overrightarrow{CA},\overrightarrow{CI})=\dfrac{\pi}3" /></CorrectionCard>
                  <CorrectionCard n="•"><Math tex="(\overrightarrow{IB},\overrightarrow{IA})=-\dfrac{2\pi}3" /></CorrectionCard>
                  <CorrectionCard n="•"><Math tex="(\overrightarrow{BI},\overrightarrow{BA})=\dfrac{\pi}6" /></CorrectionCard>
                  <CorrectionCard n="•"><Math tex="(\overrightarrow{AC},\overrightarrow{AB})=-\dfrac{\pi}2" /></CorrectionCard>
                </div>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Abscisse curviligne principale"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Déterminer l&apos;abscisse curviligne principale de chaque point dont une abscisse curviligne est :
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  <div className="rounded-lg border border-border p-3 text-center">a) <Math tex="\dfrac{22\pi}4" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">b) <Math tex="-\dfrac{44\pi}6" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">c) <Math tex="\dfrac{214\pi}6" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">d) <Math tex="12\pi" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">e) <Math tex="-\dfrac{29\pi}2" /></div>
                </div>
                <p className="mt-2 text-foreground-muted">Représenter ces points sur un cercle trigonométrique.</p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div className="grid gap-2 sm:grid-cols-2">
                  <CorrectionCard n="a"><Math tex="\dfrac{22\pi}4=\dfrac{11\pi}2=\dfrac{3\pi}2-4\pi" />, or <Math tex="\tfrac{3\pi}2\notin\,]-\pi,\pi]" />, donc on retranche encore <Math tex="2\pi" /> : <Math tex="\equiv-\dfrac{\pi}2\ [2\pi]" /></CorrectionCard>
                  <CorrectionCard n="b"><Math tex="-\dfrac{44\pi}6=-\dfrac{22\pi}3\equiv\dfrac{2\pi}3\ [2\pi]" /> (on ajoute <Math tex="4\times2\pi" />)</CorrectionCard>
                  <CorrectionCard n="c"><Math tex="\dfrac{214\pi}6=\dfrac{107\pi}3\equiv-\dfrac{\pi}3\ [2\pi]" /> (on retranche <Math tex="18\times2\pi" />)</CorrectionCard>
                  <CorrectionCard n="d"><Math tex="12\pi=6\times2\pi\equiv0\ [2\pi]" /></CorrectionCard>
                  <CorrectionCard n="e"><Math tex="-\dfrac{29\pi}2\equiv-\dfrac{\pi}2\ [2\pi]" /> (on ajoute <Math tex="8\times2\pi" />) — même point que a) !</CorrectionCard>
                </div>
                <div className="flex justify-center">
                  <TrigCircle
                    points={[
                      { theta: -globalThis.Math.PI / 2, label: "a,e (-π/2)", color: "#4f46e5" },
                      { theta: (2 * globalThis.Math.PI) / 3, label: "b (2π/3)", color: "#059669" },
                      { theta: -globalThis.Math.PI / 3, label: "c (-π/3)", color: "#d97706" },
                      { theta: 0, label: "d (0)", color: "#e11d48" },
                    ]}
                  />
                </div>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Même point du cercle trigonométrique"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Montrer que les nombres suivants sont les abscisses curvilignes du même point d&apos;un cercle trigonométrique :</p>
                <div className="mt-3 rounded-lg border border-border p-4 text-center text-lg">
                  <Math tex="\dfrac{96\pi}7\;,\;-\dfrac{16\pi}7\;\text{et}\;\dfrac{12\pi}7" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\dfrac{96\pi}7-\dfrac{12\pi}7=\dfrac{84\pi}7=12\pi=6\times(2\pi)" />, donc{" "}
                  <Math tex="\dfrac{96\pi}7\equiv\dfrac{12\pi}7\ [2\pi]" />.
                </p>
                <p>
                  <Math tex="-\dfrac{16\pi}7-\dfrac{12\pi}7=-\dfrac{28\pi}7=-4\pi=-2\times(2\pi)" />, donc{" "}
                  <Math tex="-\dfrac{16\pi}7\equiv\dfrac{12\pi}7\ [2\pi]" />.
                </p>
                <p className="font-bold text-green-700">
                  Les trois nombres diffèrent tous de <Math tex="\tfrac{12\pi}7" /> par un multiple entier de{" "}
                  <Math tex="2\pi" /> : ce sont donc les abscisses curvilignes du même point du cercle.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Congruence modulo 2π"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Les nombres <Math tex="\alpha" /> et <Math tex="\beta" /> sont-ils congrus modulo <Math tex="2\pi" /> ?</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <Item n={1}><Math tex="\alpha=245\pi" /> et <Math tex="\beta=-12\pi" /></Item>
                  <Item n={2}><Math tex="\alpha=\dfrac{115\pi}2" /> et <Math tex="\beta=\dfrac{729\pi}6" /></Item>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="\alpha-\beta=245\pi-(-12\pi)=257\pi" />. Or <Math tex="\dfrac{257\pi}{2\pi}=\dfrac{257}2" /> n&apos;est pas entier : <strong className="text-rose-600">non congrus</strong>.
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\beta=\dfrac{729\pi}6=\dfrac{243\pi}2" />. <Math tex="\alpha-\beta=\dfrac{115\pi}2-\dfrac{243\pi}2=-\dfrac{128\pi}2=-64\pi=-32\times(2\pi)" />, multiple entier de <Math tex="2\pi" /> : <strong className="text-green-700">congrus</strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Angles orientés et relation de Chasles"
            items={
              <Figure
                text={
                  <>
                    <p>
                      <Math tex="A" /> et <Math tex="B" /> sont deux points d&apos;un cercle trigonométrique tels que :
                    </p>
                    <div className="rounded-lg border border-border p-3 text-center">
                      <Math tex="(\overrightarrow{OI},\overrightarrow{OA})\equiv\dfrac{7\pi}8\ [2\pi]" /> et{" "}
                      <Math tex="(\overrightarrow{OI},\overrightarrow{OB})\equiv-\dfrac{3\pi}5\ [2\pi]" />
                    </div>
                    <p className="font-semibold">
                      Calculer <Math tex="(\overrightarrow{OJ},\overrightarrow{OA})" /> ; <Math tex="(\overrightarrow{OA},\overrightarrow{OB})" /> et{" "}
                      <Math tex="(\overrightarrow{OB},\overrightarrow{OJ})" />.
                    </p>
                  </>
                }
                svg={
                  <TrigCircle
                    points={[
                      { theta: (7 * globalThis.Math.PI) / 8, label: "A (7π/8)", color: "#4f46e5" },
                      { theta: -(3 * globalThis.Math.PI) / 5, label: "B (-3π/5)", color: "#e11d48" },
                    ]}
                  />
                }
              />
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>On utilise la relation de Chasles avec <Math tex="(\overrightarrow{OI},\overrightarrow{OJ})=\dfrac{\pi}2\ [2\pi]" />.</p>
                <p>
                  <Math tex="(\overrightarrow{OJ},\overrightarrow{OA})=(\overrightarrow{OJ},\overrightarrow{OI})+(\overrightarrow{OI},\overrightarrow{OA})=-\dfrac{\pi}2+\dfrac{7\pi}8=\dfrac{3\pi}8" />
                </p>
                <p>
                  <Math tex="(\overrightarrow{OA},\overrightarrow{OB})=(\overrightarrow{OA},\overrightarrow{OI})+(\overrightarrow{OI},\overrightarrow{OB})=-\dfrac{7\pi}8-\dfrac{3\pi}5=-\dfrac{59\pi}{40}\equiv\dfrac{21\pi}{40}\ [2\pi]" /> (on ajoute <Math tex="2\pi" />)
                </p>
                <p>
                  <Math tex="(\overrightarrow{OB},\overrightarrow{OJ})=(\overrightarrow{OB},\overrightarrow{OI})+(\overrightarrow{OI},\overrightarrow{OJ})=\dfrac{3\pi}5+\dfrac{\pi}2=\dfrac{11\pi}{10}\equiv-\dfrac{9\pi}{10}\ [2\pi]" /> (on retranche <Math tex="2\pi" />)
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="(\overrightarrow{OJ},\overrightarrow{OA})=\dfrac{3\pi}8" />,{" "}
                  <Math tex="(\overrightarrow{OA},\overrightarrow{OB})=\dfrac{21\pi}{40}" />,{" "}
                  <Math tex="(\overrightarrow{OB},\overrightarrow{OJ})=-\dfrac{9\pi}{10}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Calculer des valeurs trigonométriques"
            items={
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\cos\left(-\dfrac{29\pi}6\right)" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\sin\left(\dfrac{53\pi}6\right)" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\tan\left(\dfrac{22\pi}3\right)" /></div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1">
                  <Math tex="-\dfrac{29\pi}6\equiv-\dfrac{5\pi}6\ [2\pi]" /> (on ajoute <Math tex="4\pi=\tfrac{24\pi}6" />). <Math tex="\cos\left(-\tfrac{5\pi}6\right)=\cos\dfrac{5\pi}6=\cos\left(\pi-\tfrac\pi6\right)=-\cos\dfrac\pi6" />, donc <strong className="text-green-700"><Math tex="=-\dfrac{\sqrt3}2" /></strong>
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="\dfrac{53\pi}6\equiv\dfrac{5\pi}6\ [2\pi]" /> (on retranche <Math tex="8\pi=\tfrac{48\pi}6" />). <Math tex="\sin\dfrac{5\pi}6=\sin\left(\pi-\tfrac\pi6\right)=\sin\dfrac\pi6" />, donc <strong className="text-green-700"><Math tex="=\dfrac12" /></strong>
                </CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="\dfrac{22\pi}3\equiv\dfrac{4\pi}3\ [2\pi]" /> (on retranche <Math tex="6\pi=\tfrac{18\pi}3" />). <Math tex="\tan\dfrac{4\pi}3=\tan\left(\pi+\tfrac\pi3\right)=\tan\dfrac\pi3" />, donc <strong className="text-green-700"><Math tex="=\sqrt3" /></strong>
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Placer des points selon un signe"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Déterminer sur un cercle trigonométrique les points <Math tex="M" /> et <Math tex="N" /> d&apos;abscisses
                  curvilignes respectives <Math tex="x" /> et <Math tex="y" /> tels que :
                </p>
                <div className="mt-3 rounded-lg border border-border p-3 text-center">
                  <Math tex="\cos x=\dfrac23" /> et <Math tex="\sin x\geqslant0" /> &nbsp;;&nbsp; <Math tex="\sin y=-\dfrac14" /> et <Math tex="\cos y\leqslant0" />
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\cos x=\tfrac23>0" /> et <Math tex="\sin x\geqslant0" /> : <Math tex="M" /> est dans le{" "}
                  <strong>premier quadrant</strong> (<Math tex="x\in\left[0\,;\,\tfrac\pi2\right]" />). On calcule{" "}
                  <Math tex="\sin x=\sqrt{1-\tfrac49}=\dfrac{\sqrt5}3" /> (racine positive).
                </p>
                <p>
                  <Math tex="\sin y=-\tfrac14<0" /> et <Math tex="\cos y\leqslant0" /> : <Math tex="N" /> est dans le{" "}
                  <strong>troisième quadrant</strong> (<Math tex="y\in\left]\pi\,;\,\tfrac{3\pi}2\right[" />, ou{" "}
                  <Math tex="y\in\left]-\pi\,;\,-\tfrac\pi2\right[" /> en mesure principale). On calcule{" "}
                  <Math tex="\cos y=-\sqrt{1-\tfrac1{16}}=-\dfrac{\sqrt{15}}4" /> (racine négative).
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="M" /> est le point du cercle d&apos;abscisse <Math tex="\tfrac23" /> et d&apos;ordonnée{" "}
                  <Math tex="\tfrac{\sqrt5}3" /> ; <Math tex="N" /> est le point d&apos;ordonnée <Math tex="-\tfrac14" /> et
                  d&apos;abscisse <Math tex="-\tfrac{\sqrt{15}}4" />.
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Simplifier à l'aide des angles associés"
            items={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-border p-3"><Math tex="A=\cos\left(\dfrac\pi2+x\right)+\sin(\pi-x)+\cos\left(\dfrac\pi2-x\right)-\sin(-x)" /></div>
                <div className="rounded-lg border border-border p-3"><Math tex="B=\cos(\pi+x)+\cos\left(\dfrac{3\pi}2+x\right)+\sin(3\pi-x)+\sin\left(\dfrac{5\pi}2-x\right)" /></div>
                <div className="rounded-lg border border-border p-3"><Math tex="C=\cos\left(\dfrac{7\pi}2+x\right)+\cos\left(\dfrac{7\pi}2-x\right)+\cos\left(\dfrac\pi2+x\right)-\sin\left(\dfrac\pi2-x\right)" /></div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="A">
                  <Math tex="\cos\left(\tfrac\pi2+x\right)=-\sin x" />, <Math tex="\sin(\pi-x)=\sin x" />,{" "}
                  <Math tex="\cos\left(\tfrac\pi2-x\right)=\sin x" />, <Math tex="-\sin(-x)=\sin x" />. Donc{" "}
                  <Math tex="A=-\sin x+\sin x+\sin x+\sin x" />, soit <strong className="text-green-700"><Math tex="A=2\sin x" /></strong>
                </CorrectionCard>
                <CorrectionCard n="B">
                  <Math tex="\cos(\pi+x)=-\cos x" />, <Math tex="\cos\left(\tfrac{3\pi}2+x\right)=\sin x" />,{" "}
                  <Math tex="\sin(3\pi-x)=\sin(\pi-x)=\sin x" />, <Math tex="\sin\left(\tfrac{5\pi}2-x\right)=\sin\left(\tfrac\pi2-x\right)=\cos x" />. Donc{" "}
                  <Math tex="B=-\cos x+\sin x+\sin x+\cos x" />, soit <strong className="text-green-700"><Math tex="B=2\sin x" /></strong>
                </CorrectionCard>
                <CorrectionCard n="C">
                  <Math tex="\dfrac{7\pi}2\equiv\dfrac{3\pi}2\ [2\pi]" />, donc <Math tex="\cos\left(\tfrac{7\pi}2+x\right)=\cos\left(\tfrac{3\pi}2+x\right)=\sin x" /> et{" "}
                  <Math tex="\cos\left(\tfrac{7\pi}2-x\right)=\cos\left(\tfrac{3\pi}2-x\right)=-\sin x" />. Avec <Math tex="\cos\left(\tfrac\pi2+x\right)=-\sin x" /> et{" "}
                  <Math tex="\sin\left(\tfrac\pi2-x\right)=\cos x" /> : <Math tex="C=\sin x-\sin x-\sin x-\cos x" />, soit{" "}
                  <strong className="text-green-700"><Math tex="C=-(\sin x+\cos x)" /></strong>
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Cosinus et sinus de π/8"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Sachant que <Math tex="\tan\dfrac\pi8=\sqrt2-1" /> :
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Montrer que <Math tex="\cos\dfrac\pi8=\dfrac{\sqrt{2+\sqrt2}}2" />, puis calculer <Math tex="\sin\dfrac\pi8" />.</li>
                  <li>Calculer <Math tex="\cos\dfrac{7\pi}8" /> et <Math tex="\cos\dfrac{3\pi}8" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}>
                  Formule de l&apos;angle moitié : <Math tex="\cos^2\dfrac\pi8=\dfrac{1+\cos\tfrac\pi4}2=\dfrac{1+\tfrac{\sqrt2}2}2=\dfrac{2+\sqrt2}4" />. Comme{" "}
                  <Math tex="\tfrac\pi8\in\left]0,\tfrac\pi2\right[" />, <Math tex="\cos\tfrac\pi8>0" />, donc{" "}
                  <strong className="text-green-700"><Math tex="\cos\dfrac\pi8=\dfrac{\sqrt{2+\sqrt2}}2" /></strong>. Ensuite{" "}
                  <Math tex="\sin^2\dfrac\pi8=1-\dfrac{2+\sqrt2}4=\dfrac{2-\sqrt2}4" />, et <Math tex="\sin\tfrac\pi8>0" />, donc{" "}
                  <strong className="text-green-700"><Math tex="\sin\dfrac\pi8=\dfrac{\sqrt{2-\sqrt2}}2" /></strong>.
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\dfrac{7\pi}8=\pi-\dfrac\pi8" />, donc <Math tex="\cos\dfrac{7\pi}8=-\cos\dfrac\pi8" />, soit{" "}
                  <strong className="text-green-700"><Math tex="\cos\dfrac{7\pi}8=-\dfrac{\sqrt{2+\sqrt2}}2" /></strong>.{" "}
                  <Math tex="\dfrac{3\pi}8=\dfrac\pi2-\dfrac\pi8" />, donc <Math tex="\cos\dfrac{3\pi}8=\sin\dfrac\pi8" />, soit{" "}
                  <strong className="text-green-700"><Math tex="\cos\dfrac{3\pi}8=\dfrac{\sqrt{2-\sqrt2}}2" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Identités à démontrer"
            items={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Montrer que pour tout <Math tex="x\in\mathbb{R}" /> :</p>
                <div className="rounded-lg border border-border p-3"><Math tex="(\cos x+\sin x)^2+(\cos x-\sin x)^2=2" /></div>
                <div className="rounded-lg border border-border p-3"><Math tex="\cos^4x+\sin^4x=1-2\sin^2x\cos^2x" /></div>
                <div className="rounded-lg border border-border p-3"><Math tex="\cos^4x-\sin^4x+2\sin^2x=1" /></div>
                <div className="rounded-lg border border-border p-3"><Math tex="(\cos x+\sin x+1)^2=2(1+\cos x)(1+\sin x)" /></div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="1">
                  En développant : <Math tex="(\cos^2x+2\sin x\cos x+\sin^2x)+(\cos^2x-2\sin x\cos x+\sin^2x)=(1+2\sin x\cos x)+(1-2\sin x\cos x)=2" /> ∎
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="\cos^4x+\sin^4x=(\cos^2x+\sin^2x)^2-2\cos^2x\sin^2x=1-2\sin^2x\cos^2x" /> ∎
                </CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="\cos^4x-\sin^4x=(\cos^2x-\sin^2x)(\cos^2x+\sin^2x)=\cos^2x-\sin^2x=(1-\sin^2x)-\sin^2x=1-2\sin^2x" />, donc en ajoutant <Math tex="2\sin^2x" /> on obtient <Math tex="1" /> ∎
                </CorrectionCard>
                <CorrectionCard n="4">
                  <Math tex="(\cos x+\sin x+1)^2=\cos^2x+\sin^2x+1+2\sin x\cos x+2\cos x+2\sin x=2+2(\sin x\cos x+\cos x+\sin x)" /><br />
                  <Math tex="{}=2\big[(1+\cos x)+\sin x(1+\cos x)\big]=2(1+\cos x)(1+\sin x)" /> ∎
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Sommes trigonométriques"
            items={
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="A=\tan\dfrac\pi5+\tan\dfrac{2\pi}5+\tan\dfrac{3\pi}5+\tan\dfrac{4\pi}5" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="B=\sin^2\dfrac\pi8+\sin^2\dfrac{3\pi}8+\sin^2\dfrac{5\pi}8+\sin^2\dfrac{7\pi}8" /></div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="A">
                  <Math tex="\tan\dfrac{3\pi}5=\tan\left(\pi-\tfrac{2\pi}5\right)=-\tan\dfrac{2\pi}5" /> et <Math tex="\tan\dfrac{4\pi}5=\tan\left(\pi-\tfrac\pi5\right)=-\tan\dfrac\pi5" />.
                  Donc <Math tex="A=\tan\tfrac\pi5+\tan\tfrac{2\pi}5-\tan\tfrac{2\pi}5-\tan\tfrac\pi5" />, soit <strong className="text-green-700"><Math tex="A=0" /></strong>
                </CorrectionCard>
                <CorrectionCard n="B">
                  <Math tex="\sin\dfrac{5\pi}8=\sin\left(\pi-\tfrac{3\pi}8\right)=\sin\dfrac{3\pi}8" /> et <Math tex="\sin\dfrac{7\pi}8=\sin\left(\pi-\tfrac\pi8\right)=\sin\dfrac\pi8" />. De plus <Math tex="\dfrac{3\pi}8=\dfrac\pi2-\dfrac\pi8" /> donc <Math tex="\sin\dfrac{3\pi}8=\cos\dfrac\pi8" />.<br />
                  <Math tex="B=2\sin^2\tfrac\pi8+2\sin^2\tfrac{3\pi}8=2\sin^2\tfrac\pi8+2\cos^2\tfrac\pi8=2" />, soit <strong className="text-green-700"><Math tex="B=2" /></strong>
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="Identité cos⁶x + sin⁶x et calcul avec tan x"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  On pose <Math tex="P(x)=\cos^6x+\sin^6x-\dfrac14" />, <Math tex="x\in\mathbb{R}" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Montrer que <Math tex="P(x)=\dfrac34\left(2\cos^2x-1\right)^2" />.</li>
                  <li>Écrire <Math tex="P(x)" /> en fonction de <Math tex="\tan x" />, pour <Math tex="x\neq\dfrac\pi2+k\pi" />.</li>
                  <li>Sachant que <Math tex="\tan x=-\sqrt2" />, calculer <Math tex="P(x)" /> et <Math tex="\cos x" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}>
                  Avec <Math tex="a=\cos^2x" />, <Math tex="b=\sin^2x" /> (donc <Math tex="a+b=1" />) : <Math tex="a^3+b^3=(a+b)^3-3ab(a+b)=1-3\sin^2x\cos^2x" />.
                  Donc <Math tex="P(x)=\dfrac34-3\sin^2x\cos^2x" />. Or <Math tex="\sin^2x\cos^2x=\dfrac{\sin^22x}4=\dfrac{1-\cos^22x}4" />, donc{" "}
                  <Math tex="P(x)=\dfrac34-\dfrac34(1-\cos^22x)=\dfrac34\cos^22x=\dfrac34(2\cos^2x-1)^2" /> (car <Math tex="\cos2x=2\cos^2x-1" />) ∎
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="\cos^2x=\dfrac1{1+\tan^2x}" />, donc <Math tex="2\cos^2x-1=\dfrac2{1+\tan^2x}-1=\dfrac{1-\tan^2x}{1+\tan^2x}" />. D&apos;où{" "}
                  <strong className="text-green-700"><Math tex="P(x)=\dfrac34\left(\dfrac{1-\tan^2x}{1+\tan^2x}\right)^2" /></strong>
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="\tan^2x=2" />, donc <Math tex="\dfrac{1-\tan^2x}{1+\tan^2x}=\dfrac{1-2}{1+2}=-\dfrac13" />. Ainsi{" "}
                  <Math tex="P(x)=\dfrac34\times\dfrac19=\dfrac1{12}" />. Et <Math tex="\cos^2x=\dfrac1{1+2}=\dfrac13" />, donc{" "}
                  <strong className="text-green-700"><Math tex="\cos x=\dfrac{\sqrt3}3" /></strong> ou{" "}
                  <strong className="text-green-700"><Math tex="\cos x=-\dfrac{\sqrt3}3" /></strong> (le signe de <Math tex="\cos x" /> dépend du quadrant, non précisé ici).
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
