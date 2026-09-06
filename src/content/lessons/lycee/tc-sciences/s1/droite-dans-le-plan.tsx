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
  title: "La droite dans le plan · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet sur la droite dans le plan : repère, coordonnées d'un vecteur, déterminant et colinéarité, norme et distance, vecteur directeur, représentation paramétrique et équation cartésienne, droites parallèles et perpendiculaires. 9 exercices entièrement corrigés, Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "La droite dans le plan",
  heroSubtitle:
    "Coordonnées, déterminant, norme et distance, puis vecteur directeur, représentation paramétrique et équation cartésienne d'une droite : le cours complet suivi de 9 exercices corrigés en détail.",
  footerNote: "La droite dans le plan · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "reperes", label: "Repère, coordonnées" },
    { id: "determinant", label: "Déterminant" },
    { id: "norme-distance", label: "Norme, distance" },
    { id: "droites", label: "Équation d'une droite" },
    { id: "positions", label: "Parallèles, perpendiculaires" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Helpers géométriques (coordonnées calculées exactement) ===================== */

/** Transforme un point du repère (unités mathématiques) en coordonnées pixel SVG. */
function toPx(x: number, y: number, cx: number, cy: number, unit: number) {
  return { x: cx + x * unit, y: cy - y * unit };
}

interface PlanePoint {
  x: number;
  y: number;
  label: string;
  color?: string;
  dx?: number;
  dy?: number;
}
interface PlaneSegment {
  a: [number, number];
  b: [number, number];
  color?: string;
  dashed?: boolean;
}

/** Petit repère (O,i,j) avec grille entière, segments et points placés par calcul exact (pas de figure à main levée). */
function Plane({
  xMin,
  xMax,
  yMin,
  yMax,
  segments = [],
  points = [],
  unit = 30,
  size = "max-w-[320px]",
}: {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  segments?: PlaneSegment[];
  points?: PlanePoint[];
  unit?: number;
  size?: string;
}) {
  const pad = 22;
  const w = (xMax - xMin) * unit + 2 * pad;
  const h = (yMax - yMin) * unit + 2 * pad;
  const cx = pad - xMin * unit;
  const cy = h - pad + yMin * unit;
  const O = toPx(0, 0, cx, cy, unit);

  const vLines = [];
  for (let gx = globalThis.Math.ceil(xMin); gx <= globalThis.Math.floor(xMax); gx++) {
    const p1 = toPx(gx, yMin, cx, cy, unit);
    const p2 = toPx(gx, yMax, cx, cy, unit);
    vLines.push(
      <line key={`v${gx}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#e2e8f0" strokeWidth="1" />
    );
  }
  const hLines = [];
  for (let gy = globalThis.Math.ceil(yMin); gy <= globalThis.Math.floor(yMax); gy++) {
    const p1 = toPx(xMin, gy, cx, cy, unit);
    const p2 = toPx(xMax, gy, cx, cy, unit);
    hLines.push(
      <line key={`h${gy}`} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#e2e8f0" strokeWidth="1" />
    );
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`mx-auto h-auto w-full ${size}`}>
      {vLines}
      {hLines}
      {/* axes */}
      <line x1={toPx(xMin, 0, cx, cy, unit).x} y1={O.y} x2={toPx(xMax, 0, cx, cy, unit).x} y2={O.y} stroke="#334155" strokeWidth="1.6" />
      <line x1={O.x} y1={toPx(0, yMin, cx, cy, unit).y} x2={O.x} y2={toPx(0, yMax, cx, cy, unit).y} stroke="#334155" strokeWidth="1.6" />
      <text x={O.x + 5} y={O.y + 14} fontSize="10" fill="#64748b">O</text>
      {segments.map((s, i) => {
        const p1 = toPx(s.a[0], s.a[1], cx, cy, unit);
        const p2 = toPx(s.b[0], s.b[1], cx, cy, unit);
        return (
          <line
            key={i}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke={s.color ?? "#4f46e5"}
            strokeWidth="2"
            strokeDasharray={s.dashed ? "4 3" : undefined}
          />
        );
      })}
      {points.map((p, i) => {
        const P = toPx(p.x, p.y, cx, cy, unit);
        return (
          <g key={i}>
            <circle cx={P.x} cy={P.y} r="3.4" fill={p.color ?? "#0f172a"} />
            <text x={P.x + (p.dx ?? 7)} y={P.y + (p.dy ?? -7)} fontSize="12" fontWeight="700" fill={p.color ?? "#0f172a"}>
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

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

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
          { value: "6", label: "notions du cours" },
          { value: "9", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#reperes" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
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
              <Math tex="ax+by+c=0" />
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-400">équation cartésienne d&apos;une droite</span>
          </div>
        }
      />

      {/* ===================== 1. REPÈRE ET COORDONNÉES ===================== */}
      <LessonSection
        id="reperes"
        kicker="01 · Se repérer dans le plan"
        title="Repère du plan, coordonnées d'un point et d'un vecteur"
        tone="light"
        description="Toute la géométrie analytique repose sur une seule idée : remplacer points et vecteurs par des couples de nombres."
      >
        <DefBox label="Base et repère du plan">
          Soient <Math tex="\vec\imath" /> et <Math tex="\vec\jmath" /> deux vecteurs <strong>non colinéaires</strong> du
          plan <Math tex="\mathcal P" />. Le couple <Math tex="(\vec\imath,\vec\jmath)" /> est une <strong>base</strong>{" "}
          de <Math tex="\mathcal P" />. Si <Math tex="O" /> est un point quelconque, le triplet{" "}
          <Math tex="(O,\vec\imath,\vec\jmath)" /> est un <strong>repère</strong> de <Math tex="\mathcal P" />.
        </DefBox>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Repère orthogonal</span> — si{" "}
            <Math tex="(\vec\imath,\vec\jmath)" /> sont orthogonaux.
          </div>
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Repère normé</span> — si{" "}
            <Math tex="\lVert\vec\imath\rVert=\lVert\vec\jmath\rVert=1" />.
          </div>
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Repère orthonormé</span> — orthogonal <strong>et</strong> normé.
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Coordonnées d&apos;un point</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5 sm:p-6">
          <div className="space-y-3 text-sm text-foreground-muted sm:col-span-3">
            <p>
              Le plan <Math tex="\mathcal P" /> est rapporté au repère <Math tex="(O,\vec\imath,\vec\jmath)" />. Pour
              tout point <Math tex="M" /> de <Math tex="\mathcal P" />, il existe un <strong>unique couple</strong>{" "}
              <Math tex="(x,y)" /> tel que :
            </p>
            <div className="rounded-lg bg-amber-100/60 p-3 text-center">
              <Math tex="\overrightarrow{OM}=x\,\vec\imath+y\,\vec\jmath" />
            </div>
            <p>
              On note <Math tex="M(x,y)" />. Le nombre <Math tex="x" /> est l&apos;<strong>abscisse</strong>, le
              nombre <Math tex="y" /> l&apos;<strong>ordonnée</strong> de <Math tex="M" />.
            </p>
          </div>
          <div className="flex justify-center sm:col-span-2">
            <Plane
              xMin={-0.5}
              xMax={4.5}
              yMin={-0.5}
              yMax={3.5}
              segments={[
                { a: [0, 0], b: [3, 0], color: "#94a3b8", dashed: true },
                { a: [3, 0], b: [3, 2], color: "#94a3b8", dashed: true },
                { a: [0, 0], b: [3, 2], color: "#4f46e5" },
              ]}
              points={[{ x: 3, y: 2, label: "M(3,2)", color: "#4f46e5", dx: 6, dy: -6 }]}
            />
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Coordonnées d&apos;une somme, d&apos;un produit par un réel</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4 text-sm">
            Si <Math tex="\vec u(x,y)" /> et <Math tex="\vec v(x',y')" />, alors{" "}
            <Math tex="\vec u+\vec v" /> a pour coordonnées <Math tex="(x+x'\,;\,y+y')" />.
          </div>
          <div className="rounded-lg border border-border p-4 text-sm">
            Pour <Math tex="k\in\mathbb R" />, <Math tex="k\vec u" /> a pour coordonnées <Math tex="(kx\,;\,ky)" />.
          </div>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Coordonnées de <Math tex="\overrightarrow{AB}" /> et milieu d&apos;un segment</p>
        <FormulaBlock
          tex="\overrightarrow{AB}\big(x_B-x_A\,;\,y_B-y_A\big) \qquad\qquad I\left(\dfrac{x_A+x_B}{2}\,;\,\dfrac{y_A+y_B}{2}\right)"
          caption="A(xA,yA) et B(xB,yB) — I est le milieu de [AB]"
        />

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Soient <Math tex="A(3,4)" /> et <Math tex="B(1,2)" />. Donner les coordonnées de{" "}
            <Math tex="\overrightarrow{AB}" />, de <Math tex="5\overrightarrow{AB}-3\vec u" /> où{" "}
            <Math tex="\vec u(2,0)" />, et du milieu <Math tex="I" /> de <Math tex="[AB]" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  <Math tex="\overrightarrow{AB}(1-3\,;\,2-4)" />, donc{" "}
                  <strong className="text-green-700"><Math tex="\overrightarrow{AB}(-2\,;\,-2)" /></strong>.
                </p>
                <p>
                  <Math tex="5\overrightarrow{AB}-3\vec u = (5(-2)-3(2)\,;\,5(-2)-3(0)) = (-10-6\,;\,-10)" />, donc{" "}
                  <strong className="text-green-700"><Math tex="5\overrightarrow{AB}-3\vec u\,(-16\,;\,-10)" /></strong>.
                </p>
                <p>
                  <Math tex="I\left(\dfrac{3+1}{2}\,;\,\dfrac{4+2}{2}\right)" />, donc{" "}
                  <strong className="text-green-700"><Math tex="I(2,3)" /></strong>.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== 2. DÉTERMINANT ET COLINÉARITÉ ===================== */}
      <LessonSection
        id="determinant"
        kicker="02 · Détecter l'alignement"
        title="Déterminant de deux vecteurs — colinéarité"
        tone="muted"
        description="Un unique nombre permet de savoir si deux vecteurs ont la même direction : c'est le déterminant."
      >
        <DefBox label="Définition">
          Soient <Math tex="\vec u(x,y)" /> et <Math tex="\vec v(x',y')" /> deux vecteurs du plan rapporté au repère{" "}
          <Math tex="(O,\vec\imath,\vec\jmath)" />. Le nombre <Math tex="xy'-x'y" /> est appelé{" "}
          <strong>déterminant</strong> de <Math tex="\vec u" /> et <Math tex="\vec v" />, noté{" "}
          <Math tex="\det(\vec u,\vec v)" />.
        </DefBox>
        <FormulaBlock tex="\det(\vec u,\vec v)=\begin{vmatrix}x&x'\\y&y'\end{vmatrix}=xy'-x'y" />
        <div className="mt-3">
          <Callout variant="success" title="Propriété · condition de colinéarité">
            <Math tex="\vec u" /> et <Math tex="\vec v" /> sont colinéaires <Math tex="\iff" />{" "}
            <Math tex="\det(\vec u,\vec v)=0" /> <Math tex="\iff" /> <Math tex="xy'-x'y=0" />.
          </Callout>
        </div>
        <div className="mt-3">
          <Callout variant="info" title="Application · alignement de trois points">
            <Math tex="A,B,C" /> sont alignés <Math tex="\iff" /> <Math tex="\overrightarrow{AB}" /> et{" "}
            <Math tex="\overrightarrow{AC}" /> sont colinéaires <Math tex="\iff" /> <Math tex="\det(\overrightarrow{AB},\overrightarrow{AC})=0" />.
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Étudier la colinéarité de <Math tex="\vec u(2,3)" /> et <Math tex="\vec v(-4,-9)" />, puis de{" "}
            <Math tex="\vec w=\vec\imath+2\vec\jmath" /> et <Math tex="\vec t=-5\vec\imath+4\vec\jmath" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  <Math tex="\det(\vec u,\vec v)=2\times(-9)-(-4)\times3=-18+12=-6\neq0" /> :{" "}
                  <strong className="text-green-700"><Math tex="\vec u" /> et <Math tex="\vec v" /> ne sont pas colinéaires.</strong>
                </p>
                <p>
                  <Math tex="\vec w(1,2)" /> et <Math tex="\vec t(-5,4)" /> :{" "}
                  <Math tex="\det(\vec w,\vec t)=1\times4-(-5)\times2=4+10=14\neq0" /> :{" "}
                  <strong className="text-green-700"><Math tex="\vec w" /> et <Math tex="\vec t" /> ne sont pas colinéaires.</strong>
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== 3. NORME ET DISTANCE ===================== */}
      <LessonSection
        id="norme-distance"
        kicker="03 · Mesurer des longueurs"
        title="Norme d'un vecteur, distance entre deux points"
        tone="light"
        description="Ces formules ne sont valables que dans un repère orthonormé."
      >
        <Callout variant="warning" title="Attention">
          Les formules ci-dessous supposent le plan rapporté à un repère <strong>orthonormé</strong>{" "}
          <Math tex="(O,\vec\imath,\vec\jmath)" />.
        </Callout>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5 text-sm">
            <p className="mb-1 font-semibold text-foreground">Norme d&apos;un vecteur</p>
            Si <Math tex="\vec u(x,y)" />, alors <Math tex="\lVert\vec u\rVert=\sqrt{x^2+y^2}" />.
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 text-sm">
            <p className="mb-1 font-semibold text-foreground">Distance entre deux points</p>
            Si <Math tex="A(x_A,y_A)" /> et <Math tex="B(x_B,y_B)" />, alors{" "}
            <Math tex="AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}" />.
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Calculer la distance <Math tex="AB" /> sachant que <Math tex="A(1,4)" /> et <Math tex="B(-1,2)" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <p>
                <Math tex="AB=\sqrt{(-1-1)^2+(2-4)^2}=\sqrt{(-2)^2+(-2)^2}=\sqrt{4+4}=\sqrt8=2\sqrt2" />.{" "}
                <strong className="text-green-700"><Math tex="AB=2\sqrt2" /></strong>.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== 4. ÉQUATION D'UNE DROITE ===================== */}
      <LessonSection
        id="droites"
        kicker="04 · Décrire une droite"
        title="Vecteur directeur, représentation paramétrique, équation cartésienne"
        tone="muted"
        description="Trois façons complémentaires de caractériser une droite du plan par des nombres."
      >
        <DefBox label="Vecteur directeur">
          Soit <Math tex="\mathcal D" /> une droite et <Math tex="A,B\in\mathcal D" />. Tout vecteur{" "}
          <Math tex="\vec u\neq\vec 0" /> colinéaire à <Math tex="\overrightarrow{AB}" /> est appelé{" "}
          <strong>vecteur directeur</strong> de <Math tex="\mathcal D" />. On note{" "}
          <Math tex="\mathcal D=\mathcal D(A,\vec u)" />, la droite passant par <Math tex="A" /> et dirigée par{" "}
          <Math tex="\vec u" />.
        </DefBox>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Représentation paramétrique</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Soit <Math tex="\mathcal D(A,\vec u)" /> avec <Math tex="A(x_A,y_A)" /> et <Math tex="\vec u(a,b)" />. Un
            point <Math tex="M(x,y)" /> appartient à <Math tex="\mathcal D" /> si et seulement si{" "}
            <Math tex="\overrightarrow{AM}" /> et <Math tex="\vec u" /> sont colinéaires, c&apos;est-à-dire s&apos;il
            existe <Math tex="t\in\mathbb R" /> tel que <Math tex="\overrightarrow{AM}=t\vec u" />.
          </p>
          <div className="mt-4">
            <FormulaBlock tex="\mathcal D(A,\vec u):\begin{cases}x=x_A+at\\y=y_A+bt\end{cases}\ ,\ t\in\mathbb R" />
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Équation cartésienne</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5 sm:p-6">
          <div className="space-y-3 text-sm text-foreground-muted sm:col-span-3">
            <p>
              En éliminant <Math tex="t" /> entre les deux équations paramétriques (ou directement via{" "}
              <Math tex="\det(\overrightarrow{AM},\vec u)=0" />), toute droite <Math tex="\mathcal D(A,\vec u)" />{" "}
              admet une équation de la forme :
            </p>
            <div className="rounded-lg bg-amber-100/60 p-3 text-center">
              <Math tex="ax+by+c=0\qquad(a,b)\neq(0,0)" />
            </div>
            <p>
              avec <Math tex="\vec u(-b,a)" /> vecteur directeur de <Math tex="\mathcal D" />, et{" "}
              <Math tex="c=y_Ax_u-x_Ay_u" />. Réciproquement, l&apos;ensemble des points{" "}
              <Math tex="M(x,y)" /> vérifiant une équation <Math tex="ax+by+c=0" /> avec{" "}
              <Math tex="(a,b)\neq(0,0)" /> est toujours une droite, de vecteur directeur{" "}
              <Math tex="\vec u(-b,a)" />.
            </p>
          </div>
          <div className="flex justify-center sm:col-span-2">
            <Plane
              xMin={-3.5}
              xMax={4.5}
              yMin={-2.5}
              yMax={4.5}
              segments={[{ a: [-4, -2], b: [1, 1], color: "#4f46e5" }]}
              points={[
                { x: -4, y: -2, label: "(-4,-2)", color: "#4f46e5", dx: -68, dy: 6 },
                { x: 1, y: 1, label: "(1,1)", color: "#4f46e5", dx: 6, dy: -6 },
              ]}
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-foreground-muted">
          Figure : la droite <Math tex="3x-5y+2=0" /> (voir exercice 7), tracée à partir des deux points entiers{" "}
          <Math tex="(-4,-2)" /> et <Math tex="(1,1)" /> qui vérifient l&apos;équation.
        </p>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Coefficient directeur et équation réduite</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Lorsque <Math tex="b\neq0" /> (la droite n&apos;est pas verticale), on peut isoler{" "}
            <Math tex="y" /> dans <Math tex="ax+by+c=0" /> pour obtenir l&apos;<strong>équation réduite</strong> :
          </p>
          <div className="mt-3">
            <FormulaBlock tex="\begin{gathered} y=mx+p \\ \text{avec } m=-\dfrac{a}{b}\ \text{et}\ p=-\dfrac{c}{b} \end{gathered}" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <span className="font-semibold text-foreground">Coefficient directeur (pente)</span> —{" "}
              <Math tex="m" />. Si <Math tex="A(x_A,y_A)" /> et <Math tex="B(x_B,y_B)" /> sont deux points distincts
              de la droite (avec <Math tex="x_A\neq x_B" />), <Math tex="m=\dfrac{y_B-y_A}{x_B-x_A}" />.
            </div>
            <div className="rounded-lg border border-border p-4">
              <span className="font-semibold text-foreground">Ordonnée à l&apos;origine</span> — <Math tex="p" /> :
              l&apos;ordonnée du point d&apos;intersection de la droite avec l&apos;axe <Math tex="(Oy)" />.
            </div>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Soit <Math tex="\mathcal D(A,\vec u)" /> avec <Math tex="A(4,5)" /> et <Math tex="\vec u(2,3)" />. Donner
            une représentation paramétrique puis l&apos;équation cartésienne de <Math tex="\mathcal D" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  Représentation paramétrique :{" "}
                  <Math tex="\begin{cases}x=4+2t\\y=5+3t\end{cases}\ ,\ t\in\mathbb R" />.
                </p>
                <p>
                  Vecteur directeur <Math tex="\vec u(2,3)" /> donc l&apos;équation est de la forme{" "}
                  <Math tex="3x-2y+c=0" /> (car <Math tex="(a,b)=(3,-2)" /> vérifie <Math tex="\vec u(-b,a)=(2,3)" />
                  ). En remplaçant par <Math tex="A(4,5)" /> : <Math tex="3(4)-2(5)+c=0\Rightarrow12-10+c=0\Rightarrow c=-2" />.{" "}
                  <strong className="text-green-700"><Math tex="\mathcal D:3x-2y-2=0" /></strong>.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== 5. DROITES PARALLÈLES ET PERPENDICULAIRES ===================== */}
      <LessonSection
        id="positions"
        kicker="05 · Comparer deux droites"
        title="Droites parallèles, droites perpendiculaires"
        tone="light"
        description="Deux critères simples, purement calculatoires, pour comparer les directions de deux droites."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border-2 border-indigo-500/30 bg-surface p-5 sm:p-6">
            <p className="mb-2 font-semibold text-foreground">Droites parallèles</p>
            <p className="text-sm text-foreground-muted">
              Soient <Math tex="\mathcal D:ax+by+c=0" /> et <Math tex="\mathcal D':a'x+b'y+c'=0" />.
            </p>
            <div className="mt-3 rounded-lg bg-amber-100/60 p-3 text-center text-sm">
              <Math tex="\mathcal D \parallel \mathcal D' \iff ab'-a'b=0" />
            </div>
            <p className="mt-2 text-sm text-foreground-muted">
              (les vecteurs directeurs <Math tex="(-b,a)" /> et <Math tex="(-b',a')" /> sont colinéaires). Avec les
              équations réduites <Math tex="y=mx+p" /> et <Math tex="y=m'x+p'" /> :{" "}
              <Math tex="\mathcal D\parallel\mathcal D'\iff m=m'" />.
            </p>
          </div>
          <div className="rounded-xl border-2 border-rose-500/30 bg-surface p-5 sm:p-6">
            <p className="mb-2 font-semibold text-foreground">Droites perpendiculaires</p>
            <p className="text-sm text-foreground-muted">
              Les vecteurs directeurs <Math tex="(-b,a)" /> et <Math tex="(-b',a')" /> sont orthogonaux ssi leur
              produit scalaire est nul :
            </p>
            <div className="mt-3 rounded-lg bg-amber-100/60 p-3 text-center text-sm">
              <Math tex="\mathcal D \perp \mathcal D' \iff aa'+bb'=0" />
            </div>
            <p className="mt-2 text-sm text-foreground-muted">
              Avec les équations réduites : <Math tex="\mathcal D\perp\mathcal D'\iff m\times m'=-1" />.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <Callout variant="info" title="Méthode pratique">
            Pour une droite <Math tex="\mathcal D:ax+by+c=0" />, un vecteur directeur est <Math tex="(-b,a)" /> et un
            vecteur <strong>normal</strong> (orthogonal à <Math tex="\mathcal D" />) est <Math tex="(a,b)" />. Toute
            droite <strong>parallèle</strong> à <Math tex="\mathcal D" /> s&apos;écrit <Math tex="ax+by+c'=0" /> (même
            couple <Math tex="(a,b)" />) ; toute droite <strong>perpendiculaire</strong> à <Math tex="\mathcal D" />{" "}
            s&apos;écrit <Math tex="bx-ay+c''=0" /> (coefficients échangés, l&apos;un changé de signe).
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            1) Donner l&apos;équation de la droite passant par <Math tex="B(2,-1)" /> et parallèle à{" "}
            <Math tex="\mathcal D:3x-5y+7=0" />. 2) Donner l&apos;équation de la droite passant par <Math tex="B" /> et
            perpendiculaire à <Math tex="\mathcal D" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  1) Droite parallèle : même couple <Math tex="(a,b)=(3,-5)" />, donc <Math tex="3x-5y+c=0" />. En{" "}
                  <Math tex="B(2,-1)" /> : <Math tex="3(2)-5(-1)+c=0\Rightarrow6+5+c=0\Rightarrow c=-11" />.{" "}
                  <strong className="text-green-700"><Math tex="3x-5y-11=0" /></strong>.
                </p>
                <p>
                  2) Droite perpendiculaire : coefficients échangés <Math tex="(5,3)" />, donc{" "}
                  <Math tex="5x+3y+c=0" />. En <Math tex="B(2,-1)" /> :{" "}
                  <Math tex="5(2)+3(-1)+c=0\Rightarrow10-3+c=0\Rightarrow c=-7" />.{" "}
                  <strong className="text-green-700"><Math tex="5x+3y-7=0" /></strong>.
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
        title="9 exercices corrigés"
        tone="muted"
        description="Dans les exercices 1 à 8, le plan est rapporté au repère (O, i, j). Cherchez au brouillon puis vérifiez."
      >
        <ExerciseGroup total={9} celebrationTitle="Bravo, les 9 exercices sont vérifiés !" celebrationSubtitle="La droite dans le plan n'a plus de secret pour toi.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Coordonnées de vecteurs et milieu"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  On considère les points <Math tex="A(0,2)" />, <Math tex="B(1,-2)" /> et <Math tex="C(1,1)" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Donner les coordonnées des vecteurs <Math tex="\overrightarrow{AB}" />, <Math tex="\overrightarrow{AC}" /> et <Math tex="\overrightarrow{BC}" />.</li>
                  <li>Écrire ces vecteurs dans la base <Math tex="(\vec\imath,\vec\jmath)" />.</li>
                  <li>Donner les coordonnées de <Math tex="\vec u=3\overrightarrow{AC}" /> et <Math tex="\vec v=\overrightarrow{AC}-2\overrightarrow{BC}+3\overrightarrow{AB}" />.</li>
                  <li>Donner les coordonnées de <Math tex="I" />, milieu de <Math tex="[AC]" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1"><Math tex="\overrightarrow{AB}(1,-4)" />, <Math tex="\overrightarrow{AC}(1,-1)" />, <Math tex="\overrightarrow{BC}(0,3)" /></CorrectionCard>
                <CorrectionCard n="2"><Math tex="\overrightarrow{AB}=\vec\imath-4\vec\jmath" />, <Math tex="\overrightarrow{AC}=\vec\imath-\vec\jmath" />, <Math tex="\overrightarrow{BC}=3\vec\jmath" /></CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="\vec u=3(1,-1)=(3,-3)" />. <Math tex="\vec v=(1,-1)-2(0,3)+3(1,-4)=(1+0+3\,;\,-1-6-12)=(4,-19)" />
                </CorrectionCard>
                <CorrectionCard n="4"><Math tex="I\left(\dfrac{0+1}2\,;\,\dfrac{2+1}2\right)=I\left(\dfrac12,\dfrac32\right)" /></CorrectionCard>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Colinéarité avec paramètre, point sur une droite"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Soit <Math tex="m" /> un paramètre réel et <Math tex="\vec{u_1}=-\vec\imath+2\vec\jmath" />,{" "}
                  <Math tex="\vec{u_2}=-4\vec\imath+\vec\jmath" />, <Math tex="\vec{u_3}=(2m-3)\vec\imath+2\vec\jmath" />.
                </p>
                <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5 text-foreground-muted">
                  <li>Étudier la colinéarité de <Math tex="\vec{u_1}" /> et <Math tex="\vec{u_2}" />.</li>
                  <li>Déterminer <Math tex="m" /> pour que <Math tex="\vec{u_1}" /> et <Math tex="\vec{u_3}" /> soient colinéaires.</li>
                  <li>Déterminer <Math tex="m" /> pour que <Math tex="\vec{u_2}" /> et <Math tex="\vec{u_3}" /> soient colinéaires.</li>
                </ol>
                <p className="mt-2 text-foreground-muted">
                  Puis, avec <Math tex="A(2,3)" />, <Math tex="B(3,5)" /> et <Math tex="C(m-1,3m-2)" />, déterminer{" "}
                  <Math tex="m" /> pour que <Math tex="C\in(AB)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="a"><Math tex="\det(\vec{u_1},\vec{u_2})=(-1)(1)-(2)(-4)=-1+8=7\neq0" /> : non colinéaires.</CorrectionCard>
                <CorrectionCard n="b"><Math tex="\det(\vec{u_1},\vec{u_3})=(-1)(2)-(2)(2m-3)=-2-4m+6=4-4m" />. Nul ssi <strong className="text-green-700"><Math tex="m=1" /></strong>.</CorrectionCard>
                <CorrectionCard n="c"><Math tex="\det(\vec{u_2},\vec{u_3})=(-4)(2)-(1)(2m-3)=-8-2m+3=-5-2m" />. Nul ssi <strong className="text-green-700"><Math tex="m=-\dfrac52" /></strong>.</CorrectionCard>
                <CorrectionCard n="•">
                  <Math tex="\overrightarrow{AB}(1,2)" />, <Math tex="\overrightarrow{AC}(m-3\,;\,3m-5)" />.{" "}
                  <Math tex="C\in(AB)\iff\det(\overrightarrow{AB},\overrightarrow{AC})=0\iff1(3m-5)-2(m-3)=0\iff m+1=0" />, d&apos;où{" "}
                  <strong className="text-green-700"><Math tex="m=-1" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Parallélisme, alignement, symétrique"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  On considère <Math tex="A(-1,2)" />, <Math tex="B(2,-1)" />, <Math tex="C(1,3)" /> et <Math tex="D(-2,-3)" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Montrer que <Math tex="(BD)\parallel(AC)" />.</li>
                  <li>Soient <Math tex="I,J" /> les milieux de <Math tex="[AC]" /> et <Math tex="[BD]" />, et <Math tex="E(0,1)" />. Montrer que <Math tex="I,J,E" /> sont alignés.</li>
                  <li>Déterminer les coordonnées de <Math tex="K" />, symétrique de <Math tex="D" /> par rapport à <Math tex="A" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1">
                  <Math tex="\overrightarrow{BD}(-4,-2)" /> et <Math tex="\overrightarrow{AC}(2,1)" />. Or{" "}
                  <Math tex="(-4,-2)=-2\times(2,1)" /> : les vecteurs sont colinéaires, donc{" "}
                  <strong className="text-green-700"><Math tex="(BD)\parallel(AC)" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="I\left(0,\dfrac52\right)" />, <Math tex="J(0,-2)" />. <Math tex="\overrightarrow{IJ}(0,-\tfrac92)" /> et{" "}
                  <Math tex="\overrightarrow{IE}(0,-\tfrac32)" /> sont tous deux colinéaires à <Math tex="(0,1)" /> (donc entre eux) :{" "}
                  <strong className="text-green-700"><Math tex="I,J,E" /> sont alignés</strong> (tous sur la droite <Math tex="x=0" />).
                </CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="A" /> milieu de <Math tex="[DK]" /> donc <Math tex="K=2A-D=2(-1,2)-(-2,-3)=(-2+2\,;\,4+3)" />, soit{" "}
                  <strong className="text-green-700"><Math tex="K(0,7)" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Équation cartésienne et paramétrique d'une droite"
            items={
              <div className="text-sm">
                <ol className="list-decimal space-y-2 pl-5 text-foreground-muted">
                  <li>
                    Donner l&apos;équation cartésienne et une représentation paramétrique de <Math tex="\mathcal D(A,\vec u)" /> :
                    <div className="mt-1 grid gap-1 sm:grid-cols-2">
                      <span>a) <Math tex="A(1,4)" />, <Math tex="\vec u(-1,4)" /></span>
                      <span>b) <Math tex="A(-2,0)" />, <Math tex="\vec u(0,1)" /></span>
                    </div>
                  </li>
                  <li>
                    Même question pour la droite <Math tex="(AB)" /> :
                    <div className="mt-1 grid gap-1 sm:grid-cols-2">
                      <span>a) <Math tex="A(-3,1)" />, <Math tex="B(-3,4)" /></span>
                      <span>b) <Math tex="A(-2,0)" />, <Math tex="B(-2,-1)" /></span>
                    </div>
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1a">
                  Équation : <Math tex="4(x-1)+1(y-4)=0\Rightarrow" /> <strong className="text-green-700"><Math tex="4x+y-8=0" /></strong>. Paramétrique :{" "}
                  <strong className="text-green-700"><Math tex="\begin{cases}x=1-t\\y=4+4t\end{cases}" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="1b">
                  Direction verticale : <strong className="text-green-700"><Math tex="x+2=0" /></strong>. Paramétrique :{" "}
                  <strong className="text-green-700"><Math tex="\begin{cases}x=-2\\y=t\end{cases}" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2a">
                  <Math tex="\overrightarrow{AB}(0,3)" /> : droite verticale <strong className="text-green-700"><Math tex="x+3=0" /></strong>, paramétrique{" "}
                  <strong className="text-green-700"><Math tex="\begin{cases}x=-3\\y=1+3t\end{cases}" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2b">
                  <Math tex="\overrightarrow{AB}(0,-1)" /> : droite verticale <strong className="text-green-700"><Math tex="x+2=0" /></strong>, paramétrique{" "}
                  <strong className="text-green-700"><Math tex="\begin{cases}x=-2\\y=-t\end{cases}" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Passer d'une forme à l'autre, droites sécantes"
            items={
              <div className="text-sm">
                <ol className="list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Donner l&apos;équation cartésienne de <Math tex="\mathcal D:\begin{cases}x=3-2t\\y=5+3t\end{cases}" />.</li>
                  <li>Donner une représentation paramétrique de <Math tex="\mathcal D':x-5y+3=0" />.</li>
                  <li>Montrer que <Math tex="\mathcal D" /> et <Math tex="\mathcal D'" /> sont sécantes, en déterminant leur point d&apos;intersection.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1">
                  <Math tex="t=\dfrac{3-x}2" />, donc <Math tex="y=5+3\cdot\dfrac{3-x}2=\dfrac{19-3x}2" />, soit{" "}
                  <strong className="text-green-700"><Math tex="3x+2y-19=0" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="x=5y-3" /> : en posant <Math tex="y=t" />,{" "}
                  <strong className="text-green-700"><Math tex="\begin{cases}x=-3+5t\\y=t\end{cases}" /></strong> (vecteur directeur <Math tex="(5,1)" />).
                </CorrectionCard>
                <CorrectionCard n="3">
                  Vecteurs directeurs <Math tex="(-2,3)" /> et <Math tex="(5,1)" /> : <Math tex="\det=(-2)(1)-(3)(5)=-17\neq0" />,
                  donc sécantes. En substituant <Math tex="x=5y-3" /> dans <Math tex="3x+2y-19=0" /> :{" "}
                  <Math tex="15y-9+2y-19=0\Rightarrow17y=28\Rightarrow y=\dfrac{28}{17}" />, puis{" "}
                  <Math tex="x=5\cdot\tfrac{28}{17}-3=\dfrac{89}{17}" />.{" "}
                  <strong className="text-green-700">Point d&apos;intersection <Math tex="\left(\dfrac{89}{17},\dfrac{28}{17}\right)" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Parallélisme, droite orthogonale, parallélogramme"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  On considère <Math tex="A(3,2)" />, <Math tex="B(2,-1)" /> et <Math tex="\mathcal D:3x-y+6=0" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Montrer que <Math tex="(AB)\parallel\mathcal D" />.</li>
                  <li>Soit <Math tex="\mathcal D'" /> la droite passant par <Math tex="A" /> de vecteur directeur <Math tex="\vec u=4\vec\imath-\vec\jmath" />. Donner l&apos;équation cartésienne de <Math tex="\mathcal D'" />.</li>
                  <li>Montrer que <Math tex="\mathcal D" /> et <Math tex="\mathcal D'" /> sont sécantes en <Math tex="E(-1,3)" />.</li>
                  <li>Soit <Math tex="F(a,0)" />. a) Déterminer <Math tex="a" /> pour que <Math tex="ABFE" /> soit un parallélogramme. b) Vérifier que <Math tex="F\in\mathcal D" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1">
                  <Math tex="\overrightarrow{AB}(-1,-3)" />. Vecteur directeur de <Math tex="\mathcal D" /> : <Math tex="(1,3)" />. Or{" "}
                  <Math tex="(-1,-3)=-1\times(1,3)" /> : colinéaires, donc <strong className="text-green-700"><Math tex="(AB)\parallel\mathcal D" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2">
                  Équation de la forme <Math tex="-1(x-3)-4(y-2)=0" />, soit <strong className="text-green-700"><Math tex="x+4y-11=0" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="E(-1,3)" /> : <Math tex="3(-1)-3+6=0" /> ✓ et <Math tex="-1+4(3)-11=0" /> ✓. Directions <Math tex="(1,3)" /> et{" "}
                  <Math tex="(4,-1)" /> non colinéaires (<Math tex="\det=-1-12=-13\neq0" />) : <strong className="text-green-700">sécantes en <Math tex="E(-1,3)" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="4">
                  a) <Math tex="ABFE" /> parallélogramme <Math tex="\iff\overrightarrow{AB}=\overrightarrow{EF}" />. <Math tex="\overrightarrow{EF}(a+1,-3)=\overrightarrow{AB}(-1,-3)\Rightarrow a+1=-1" />, donc{" "}
                  <strong className="text-green-700"><Math tex="a=-2" /></strong> (<Math tex="F(-2,0)" />). b){" "}
                  <Math tex="3(-2)-0+6=0" /> : <strong className="text-green-700"><Math tex="F\in\mathcal D" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Construction, appartenance, parallèle et orthogonale"
            items={
              <div className="text-sm">
                <ol className="list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Construire <Math tex="\mathcal D:3x-5y+2=0" />.</li>
                  <li>Déterminer <Math tex="m" /> pour que <Math tex="A(m^2,m^2)\in\mathcal D" />.</li>
                  <li>Équation de <Math tex="\mathcal D'" /> passant par <Math tex="B(-2,2)" />, parallèle à <Math tex="\mathcal D" />.</li>
                  <li>Équation de <Math tex="\mathcal D''" /> passant par <Math tex="B" />, orthogonale à <Math tex="\mathcal D" />.</li>
                  <li>Montrer que <Math tex="\mathcal D" /> et <Math tex="\mathcal D''" /> sont sécantes, et déterminer leur point d&apos;intersection.</li>
                </ol>
              </div>
            }
            correction={
              <Figure
                text={
                  <div className="space-y-2 text-sm">
                    <CorrectionCard n="1">
                      Deux points entiers vérifiant l&apos;équation : <Math tex="(1,1)" /> (<Math tex="3-5+2=0" />)
                      et <Math tex="(-4,-2)" /> (<Math tex="-12+10+2=0" />) — voir figure ci-contre.
                    </CorrectionCard>
                    <CorrectionCard n="2">
                      <Math tex="3m^2-5m^2+2=0\Rightarrow-2m^2+2=0\Rightarrow m^2=1" />, d&apos;où{" "}
                      <strong className="text-green-700"><Math tex="m=1" /> ou <Math tex="m=-1" /></strong>
                      {" "}(dans les deux cas <Math tex="A=(1,1)" />).
                    </CorrectionCard>
                    <CorrectionCard n="3">
                      Même couple <Math tex="(a,b)=(3,-5)" /> : <Math tex="3(-2)-5(2)+c=0\Rightarrow c=16" />.{" "}
                      <strong className="text-green-700"><Math tex="\mathcal D':3x-5y+16=0" /></strong>.
                    </CorrectionCard>
                    <CorrectionCard n="4">
                      Coefficients échangés <Math tex="(5,3)" /> : <Math tex="5(-2)+3(2)+c=0\Rightarrow c=4" />.{" "}
                      <strong className="text-green-700"><Math tex="\mathcal D'':5x+3y+4=0" /></strong>.
                    </CorrectionCard>
                    <CorrectionCard n="5">
                      Directions <Math tex="(5,3)" /> et <Math tex="(-3,5)" /> non colinéaires : sécantes. De{" "}
                      <Math tex="\mathcal D''" /> : <Math tex="y=\dfrac{-4-5x}3" />. Dans <Math tex="\mathcal D" /> :{" "}
                      <Math tex="9x-5(-4-5x)+6=0\Rightarrow34x+26=0\Rightarrow x=-\dfrac{13}{17}" />, puis{" "}
                      <Math tex="y=-\dfrac1{17}" />.{" "}
                      <strong className="text-green-700">Point <Math tex="\left(-\dfrac{13}{17},-\dfrac1{17}\right)" /></strong>.
                    </CorrectionCard>
                  </div>
                }
                svg={
                  <svg viewBox="0 0 260 220" className="h-auto w-full max-w-[280px] text-neutral-700">
                    {/* (D) : 3x-5y+2=0 */}
                    <line x1="25" y1="194.1" x2="210.7" y2="82.7" stroke="currentColor" strokeWidth="1.6" />
                    <text x="214" y="82" fontSize="13" fontStyle="italic">(D)</text>
                    {/* (D') : parallèle à (D) passant par B */}
                    <line x1="25" y1="116.5" x2="177.4" y2="25" stroke="#0ea5e9" strokeWidth="1.6" />
                    <text x="181" y="25" fontSize="13" fontStyle="italic" fill="#0ea5e9">(D&apos;)</text>
                    {/* (D'') : orthogonale à (D) passant par B */}
                    <line x1="77.7" y1="47.2" x2="166.4" y2="195" stroke="#e11d48" strokeWidth="1.6" />
                    <text x="169" y="199" fontSize="13" fontStyle="italic" fill="#e11d48">(D&apos;&apos;)</text>
                    {/* angle droit entre (D) et (D'') en leur intersection I */}
                    <polyline points="119.3,124.1 124.6,116.9 132.4,122" fill="none" stroke="currentColor" strokeWidth="1.1" />
                    <circle cx="177.4" cy="102.6" r="3.2" fill="currentColor" /><text x="183" y="99" fontSize="14" fontWeight="700">A</text>
                    <circle cx="38.9" cy="185.8" r="3.2" fill="currentColor" /><text x="17" y="202" fontSize="14" fontWeight="700">(-4,-2)</text>
                    <circle cx="94.3" cy="74.9" r="3.2" fill="#e11d48" /><text x="79" y="65" fontSize="14" fontWeight="700" fill="#e11d48">B</text>
                    <circle cx="128.5" cy="132" r="3.2" fill="currentColor" /><text x="105" y="147" fontSize="14" fontWeight="700">I</text>
                  </svg>
                }
              />
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Famille de droites paramétrées par m"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">On considère <Math tex="A(-2,1)" /> et <Math tex="B(2,4)" />.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Équation de <Math tex="\mathcal D" /> passant par <Math tex="A" />, de vecteur directeur <Math tex="\vec v=5\vec\imath+2\vec\jmath" />.</li>
                  <li>Soit <Math tex="\mathcal D':y=\tfrac23x+\tfrac13" />. Vérifier que <Math tex="\mathcal D,\mathcal D'" /> sont sécantes et déterminer leur point d&apos;intersection.</li>
                  <li>On pose <Math tex="\mathcal D_m:(m-1)x-2my+3=0" />. a) Valeur de <Math tex="m" /> pour que <Math tex="\mathcal D_m\parallel\mathcal D'" />. b) Valeur de <Math tex="m" /> pour que <Math tex="B\in\mathcal D_m" />. c) Vérifier que <Math tex="C\left(3,\tfrac32\right)\in\mathcal D_m" /> pour tout <Math tex="m" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1">
                  <Math tex="2(x+2)-5(y-1)=0\Rightarrow" /> <strong className="text-green-700"><Math tex="2x-5y+9=0" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="\mathcal D':2x-3y+1=0" />, direction <Math tex="(3,2)" />. <Math tex="\det=(2)(2)-(-5)(3)=4+15\neq0" />... plus simplement :
                  directions <Math tex="(5,2)" /> et <Math tex="(3,2)" /> non colinéaires <Math tex="(10-6=4\neq0)" /> : sécantes. En résolvant{" "}
                  <Math tex="2x-5y+9=0" /> et <Math tex="2x-3y+1=0" /> : on trouve <Math tex="y=4" />, <Math tex="x=\dfrac{11}2" />.{" "}
                  <strong className="text-green-700">Point <Math tex="\left(\dfrac{11}2,4\right)" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="3a">
                  Parallélisme : <Math tex="(m-1)(-3)-2(-2m)=0\Rightarrow-3m+3+4m=0\Rightarrow m+3=0" />, donc{" "}
                  <strong className="text-green-700"><Math tex="m=-3" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="3b">
                  <Math tex="(m-1)(2)-2m(4)+3=0\Rightarrow2m-2-8m+3=0\Rightarrow-6m+1=0" />, donc{" "}
                  <strong className="text-green-700"><Math tex="m=\dfrac16" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="3c">
                  <Math tex="(m-1)(3)-2m\left(\tfrac32\right)+3=3m-3-3m+3=0" />, quel que soit <Math tex="m" /> :{" "}
                  <strong className="text-green-700"><Math tex="C\left(3,\tfrac32\right)" /> appartient à toutes les droites <Math tex="\mathcal D_m" /></strong> (point fixe du faisceau).
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Repère (A, AB, AD) dans un rectangle"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABCD" /> est un rectangle, <Math tex="I,J" /> les milieux de <Math tex="[AB]" /> et{" "}
                  <Math tex="[AD]" />. On considère <Math tex="M,N" /> tels que{" "}
                  <Math tex="\overrightarrow{JM}=\tfrac13\overrightarrow{AB}" /> et{" "}
                  <Math tex="\overrightarrow{IN}=\tfrac34\overrightarrow{AD}" />. On munit le plan du repère{" "}
                  <Math tex="(A,\overrightarrow{AB},\overrightarrow{AD})" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground-muted">
                  <li>Donner les coordonnées de <Math tex="I,J,M,N" />.</li>
                  <li>Montrer que <Math tex="A,M,N" /> sont alignés.</li>
                  <li>a) Équations cartésiennes de <Math tex="(DM)" /> et <Math tex="(BN)" />. b) Étudier leur position relative.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">
                  Dans ce repère : <Math tex="A(0,0)" />, <Math tex="B(1,0)" />, <Math tex="D(0,1)" />,{" "}
                  <Math tex="C(1,1)" />.
                </p>
                <CorrectionCard n="1">
                  <Math tex="I\left(\tfrac12,0\right)" />, <Math tex="J\left(0,\tfrac12\right)" />.{" "}
                  <Math tex="M=J+\tfrac13\overrightarrow{AB}=\left(\tfrac13,\tfrac12\right)" />,{" "}
                  <Math tex="N=I+\tfrac34\overrightarrow{AD}=\left(\tfrac12,\tfrac34\right)" />.
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="\overrightarrow{AM}\left(\tfrac13,\tfrac12\right)" />, <Math tex="\overrightarrow{AN}\left(\tfrac12,\tfrac34\right)" />.{" "}
                  <Math tex="\det(\overrightarrow{AM},\overrightarrow{AN})=\tfrac13\times\tfrac34-\tfrac12\times\tfrac12=\tfrac14-\tfrac14=0" /> :{" "}
                  <strong className="text-green-700"><Math tex="A,M,N" /> sont alignés</strong>.
                </CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="(DM)" /> : direction <Math tex="\overrightarrow{DM}\left(\tfrac13,-\tfrac12\right)" />, équation{" "}
                  <Math tex="-\tfrac12(x-0)-\tfrac13(y-1)=0" />, soit <strong className="text-green-700"><Math tex="3x+2y-2=0" /></strong>.{" "}
                  <Math tex="(BN)" /> : direction <Math tex="\overrightarrow{BN}\left(-\tfrac12,\tfrac34\right)" />, équation{" "}
                  <Math tex="\tfrac34(x-1)+\tfrac12y=0" />, soit <strong className="text-green-700"><Math tex="3x+2y-3=0" /></strong>. Même
                  couple <Math tex="(a,b)=(3,2)" /> mais constantes différentes (<Math tex="-2\neq-3" />) :{" "}
                  <strong className="text-green-700"><Math tex="(DM)" /> et <Math tex="(BN)" /> sont strictement parallèles</strong> (aucun point commun).
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
