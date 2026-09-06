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
  title: "Trigonométrie 2 — Équations et inéquations trigonométriques · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet : équations cos x = a, sin x = a, tan x = a, cas cos u = cos v, puis méthode et exemples résolus d'inéquations trigonométriques sur le cercle trigonométrique. 15 exercices entièrement corrigés, Tronc Commun Sciences et Technologies, semestre 2.",
  kicker: "Tronc Commun Sciences · Semestre 2",
  heroTitle: "Trigonométrie 2 — Équations et inéquations trigonométriques",
  heroSubtitle:
    "Résoudre cos x = a, sin x = a, tan x = a, puis les inéquations trigonométriques associées à l'aide du cercle trigonométrique : cours complet et 15 exercices corrigés en détail.",
  footerNote: "Trigonométrie 2 — Équations et inéquations trigonométriques · Mathématiques, Tronc Commun Sciences et Technologies, semestre 2.",
  sections: [
    { id: "rappels", label: "Rappels" },
    { id: "equations", label: "Équations" },
    { id: "inequations", label: "Inéquations" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Helpers géométriques (calculs exacts sur le cercle trigonométrique) ===================== */

/** Point sur un cercle de centre (cx,cy) et de rayon r, à l'angle theta (radians, sens direct). */
function polar(cx: number, cy: number, r: number, theta: number) {
  return { x: cx + r * globalThis.Math.cos(theta), y: cy - r * globalThis.Math.sin(theta) };
}

interface CirclePointSpec {
  theta: number;
  label: string;
  color: string;
}

interface ArcSpec {
  from: number;
  to: number;
  color: string;
}

/** Cercle trigonométrique avec points et/ou arcs surlignés, tous placés par calcul exact (cos/sin réels). */
function TrigCircle({
  points = [],
  arcs = [],
  size = "max-w-[260px]",
}: {
  points?: CirclePointSpec[];
  arcs?: ArcSpec[];
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

      {arcs.map((a, i) => {
        const n = 48;
        const pts: string[] = [];
        for (let k = 0; k <= n; k++) {
          const theta = a.from + ((a.to - a.from) * k) / n;
          const p = polar(cx, cy, r, theta);
          pts.push(`${p.x},${p.y}`);
        }
        return (
          <polyline
            key={`arc${i}`}
            points={pts.join(" ")}
            fill="none"
            stroke={a.color}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.55"
          />
        );
      })}

      {points.map((p, i) => {
        const M = polar(cx, cy, r, p.theta);
        const lx = M.x >= cx ? M.x + 8 : M.x - 8;
        const ly = M.y >= cy ? M.y + 16 : M.y - 8;
        const anchor = M.x >= cx ? "start" : "end";
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={M.x} y2={M.y} stroke={p.color} strokeWidth="1.6" />
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

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

const PI = globalThis.Math.PI;

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "3", label: "types d'équations" },
          { value: "15", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#rappels" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
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
              cos<span className="text-orange-400">x</span> = a
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-400">équations &amp; inéquations trigonométriques</span>
          </div>
        }
      />

      {/* ===================== 0. RAPPELS ===================== */}
      <LessonSection
        id="rappels"
        kicker="00 · Ce qu'il faut déjà savoir"
        title="Rappels sur le cercle trigonométrique"
        tone="light"
        description="Ce chapitre prolonge directement la trigonométrie 1 : quelques rappels rapides avant d'attaquer les équations et inéquations."
      >
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <TrigCircle points={[{ theta: PI / 5, label: "M(x)", color: "#4f46e5" }]} />
          <div className="space-y-3 text-sm text-foreground-muted">
            <p>
              Le plan est muni d&apos;un repère orthonormé direct <Math tex="(O;\vec\imath,\vec\jmath)" />. Le cercle{" "}
              <Math tex="\mathcal C" /> de centre <Math tex="O" /> et de rayon <Math tex="1" />, d&apos;origine{" "}
              <Math tex="I" />, est le <strong>cercle trigonométrique</strong>.
            </p>
            <p>
              Pour <Math tex="x\in\mathbb R" />, il existe un unique point <Math tex="M" /> de <Math tex="\mathcal C" />{" "}
              d&apos;abscisse curviligne <Math tex="x" /> ; <Math tex="\cos x" /> et <Math tex="\sin x" /> sont
              l&apos;abscisse et l&apos;ordonnée de <Math tex="M" /> dans <Math tex="(O;\vec\imath,\vec\jmath)" />.
            </p>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Valeurs remarquables et angles associés</p>
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
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Angles opposés / supplémentaires</span> —{" "}
            <Math tex="\cos(-x)=\cos x" />, <Math tex="\sin(-x)=-\sin x" />, <Math tex="\cos(\pi-x)=-\cos x" />,{" "}
            <Math tex="\sin(\pi-x)=\sin x" />.
          </div>
          <div className="rounded-lg border border-border p-4 text-sm">
            <span className="font-semibold text-foreground">Périodicité</span> —{" "}
            <Math tex="\cos(x+2k\pi)=\cos x" />, <Math tex="\sin(x+2k\pi)=\sin x" />,{" "}
            <Math tex="\tan(x+k\pi)=\tan x" /> (<Math tex="k\in\mathbb Z" />).
          </div>
        </div>
      </LessonSection>

      {/* ===================== 1. ÉQUATIONS TRIGONOMÉTRIQUES ===================== */}
      <LessonSection
        id="equations"
        kicker="01 · Résoudre cos x = a, sin x = a, tan x = a"
        title="Équations trigonométriques"
        tone="muted"
        description="Dans toute cette partie, le plan est muni du repère orthonormé direct lié au cercle trigonométrique C d'origine I."
      >
        {/* cos x = a */}
        <p className="mb-3 text-sm font-semibold text-foreground">A. Équations de la forme <Math tex="\cos x=a" /></p>
        <DefBox label="Propriété">
          Soit <Math tex="a\in\mathbb R" />.
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Si <Math tex="a\notin[-1,1]" />, l&apos;équation <Math tex="\cos x=a" /> n&apos;a <strong>aucune solution</strong>.</li>
            <li>
              Si <Math tex="a\in[-1,1]" />, on cherche <Math tex="\alpha" /> tel que <Math tex="\cos\alpha=a" /> ; alors :
            </li>
          </ul>
        </DefBox>
        <div className="mt-3">
          <FormulaBlock
            tex="\cos x=\cos\alpha \iff x=\alpha+2k\pi\ \text{ou}\ x=-\alpha+2k\pi\ \ (k\in\mathbb Z)"
          />
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4 text-center text-sm">
            <Math tex="a=0" /> : <Math tex="x=\dfrac{\pi}2+k\pi" />
          </div>
          <div className="rounded-lg border border-border p-4 text-center text-sm">
            <Math tex="a=1" /> : <Math tex="x=2k\pi" />
          </div>
          <div className="rounded-lg border border-border p-4 text-center text-sm">
            <Math tex="a=-1" /> : <Math tex="x=\pi+2k\pi" />
          </div>
        </div>

        <div className="mt-6 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5 sm:p-6">
          <div className="space-y-2 text-sm sm:col-span-3">
            <p className="font-semibold text-foreground">Exemple résolu</p>
            <p className="text-foreground-muted">
              Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\cos x=\dfrac12" />.
            </p>
            <Accordion>
              <AccordionItem title="Voir la solution">
                <div className="space-y-2">
                  <p>
                    <Math tex="\cos\dfrac{\pi}3=\dfrac12" />, donc <Math tex="\cos x=\cos\dfrac{\pi}3" />, d&apos;où{" "}
                    <Math tex="x=\dfrac{\pi}3+2k\pi" /> ou <Math tex="x=-\dfrac{\pi}3+2k\pi" /> (<Math tex="k\in\mathbb Z" />
                    ).
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="S=\left\{\dfrac{\pi}3+2k\pi\,;\,-\dfrac{\pi}3+2k\pi\ /\ k\in\mathbb Z\right\}" />
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center sm:col-span-2">
            <TrigCircle
              points={[
                { theta: PI / 3, label: "π/3", color: "#4f46e5" },
                { theta: -PI / 3, label: "-π/3", color: "#e11d48" },
              ]}
            />
          </div>
        </div>

        {/* sin x = a */}
        <p className="mt-10 mb-3 text-sm font-semibold text-foreground">B. Équations de la forme <Math tex="\sin x=a" /></p>
        <DefBox label="Propriété">
          Soit <Math tex="a\in\mathbb R" />.
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Si <Math tex="a\notin[-1,1]" />, aucune solution.</li>
            <li>Si <Math tex="a\in[-1,1]" />, on cherche <Math tex="\alpha" /> tel que <Math tex="\sin\alpha=a" /> ; alors :</li>
          </ul>
        </DefBox>
        <div className="mt-3">
          <FormulaBlock
            tex="\sin x=\sin\alpha \iff x=\alpha+2k\pi\ \text{ou}\ x=\pi-\alpha+2k\pi\ \ (k\in\mathbb Z)"
          />
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4 text-center text-sm">
            <Math tex="a=0" /> : <Math tex="x=k\pi" />
          </div>
          <div className="rounded-lg border border-border p-4 text-center text-sm">
            <Math tex="a=1" /> : <Math tex="x=\dfrac{\pi}2+2k\pi" />
          </div>
          <div className="rounded-lg border border-border p-4 text-center text-sm">
            <Math tex="a=-1" /> : <Math tex="x=-\dfrac{\pi}2+2k\pi" />
          </div>
        </div>

        <div className="mt-6 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5 sm:p-6">
          <div className="space-y-2 text-sm sm:col-span-3">
            <p className="font-semibold text-foreground">Exemple résolu</p>
            <p className="text-foreground-muted">
              Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\sin x=-\dfrac{\sqrt2}2" />.
            </p>
            <Accordion>
              <AccordionItem title="Voir la solution">
                <div className="space-y-2">
                  <p>
                    <Math tex="\sin\left(-\dfrac{\pi}4\right)=-\dfrac{\sqrt2}2" />, donc <Math tex="x=-\dfrac{\pi}4+2k\pi" /> ou{" "}
                    <Math tex="x=\pi-\left(-\dfrac{\pi}4\right)+2k\pi=\dfrac{5\pi}4+2k\pi" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="S=\left\{-\dfrac{\pi}4+2k\pi\,;\,\dfrac{5\pi}4+2k\pi\ /\ k\in\mathbb Z\right\}" />
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center sm:col-span-2">
            <TrigCircle
              points={[
                { theta: -PI / 4, label: "-π/4", color: "#4f46e5" },
                { theta: -3 * PI / 4, label: "5π/4", color: "#e11d48" },
              ]}
            />
          </div>
        </div>

        {/* tan x = a */}
        <p className="mt-10 mb-3 text-sm font-semibold text-foreground">C. Équations de la forme <Math tex="\tan x=a" /></p>
        <Callout variant="warning" title="Ensemble de définition">
          <Math tex="\tan x" /> n&apos;est définie que si <Math tex="x\neq\dfrac{\pi}2+k\pi" /> (<Math tex="k\in\mathbb Z" />
          ). Il faut toujours commencer par exclure ces valeurs.
        </Callout>
        <div className="mt-3">
          <DefBox label="Propriété">
            Pour tout <Math tex="a\in\mathbb R" />, l&apos;équation <Math tex="\tan x=a" /> admet <strong>toujours</strong>{" "}
            des solutions (contrairement à <Math tex="\cos x=a" /> et <Math tex="\sin x=a" />). On cherche{" "}
            <Math tex="\alpha" /> tel que <Math tex="\tan\alpha=a" /> ; alors :
          </DefBox>
        </div>
        <div className="mt-3">
          <FormulaBlock tex="\begin{gathered} \tan x=\tan\alpha \\ \iff x=\alpha+k\pi\ \ (k\in\mathbb Z) \end{gathered}" />
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="mb-2 font-semibold text-foreground">Exemple résolu</p>
          <p className="text-foreground-muted">
            Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\tan x=\sqrt3" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <p>
                <Math tex="\tan\dfrac{\pi}3=\sqrt3" />, donc <Math tex="\tan x=\tan\dfrac{\pi}3\iff x=\dfrac{\pi}3+k\pi" />.{" "}
                <strong className="text-green-700">
                  <Math tex="S=\left\{\dfrac{\pi}3+k\pi\ /\ k\in\mathbb Z\right\}" />
                </strong>
              </p>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Généralisation */}
        <p className="mt-10 mb-3 text-sm font-semibold text-foreground">Généralisation : <Math tex="\cos u=\cos v" />, <Math tex="\sin u=\sin v" />, <Math tex="\tan u=\tan v" /></p>
        <Callout variant="info" title="Propriété (u et v désignent des expressions en x)">
          <div className="space-y-1.5">
            <p><Math tex="\cos u=\cos v\iff u=v+2k\pi\ \text{ou}\ u=-v+2k\pi" /></p>
            <p><Math tex="\sin u=\sin v\iff u=v+2k\pi\ \text{ou}\ u=\pi-v+2k\pi" /></p>
            <p><Math tex="\tan u=\tan v\iff u=v+k\pi" /> (sous réserve que <Math tex="u,v" /> soient définis)</p>
          </div>
        </Callout>
        <p className="mt-3 text-sm text-foreground-muted">
          C&apos;est exactement la même propriété que ci-dessus, avec <Math tex="\alpha" /> remplacé par une expression{" "}
          <Math tex="v" /> quelconque : c&apos;est cette forme générale qui permet de résoudre des équations comme{" "}
          <Math tex="\cos(2x)=\cos\!\left(x-\tfrac{\pi}3\right)" /> (voir exercice 5).
        </p>
      </LessonSection>

      {/* ===================== 2. INÉQUATIONS TRIGONOMÉTRIQUES ===================== */}
      <LessonSection
        id="inequations"
        kicker="02 · Lire une inégalité sur le cercle"
        title="Inéquations trigonométriques"
        tone="light"
        description="Il n'existe pas de formule générale : on résout systématiquement à l'aide d'une lecture sur le cercle trigonométrique."
      >
        <Callout variant="warning" title="Méthode générale">
          <ol className="list-decimal space-y-1 pl-5">
            <li>On résout d&apos;abord l&apos;équation associée pour repérer les points frontières sur <Math tex="\mathcal C" />.</li>
            <li>
              On trace la droite <Math tex="x=a" /> (verticale, pour une inéquation en <Math tex="\cos" />) ou{" "}
              <Math tex="y=a" /> (horizontale, pour <Math tex="\sin" />), qui partage le segment{" "}
              <Math tex="[I'I]" /> ou <Math tex="[J'J]" /> selon la condition.
            </li>
            <li>On repère l&apos;arc de <Math tex="\mathcal C" /> dont les points vérifient la condition.</li>
            <li>On lit les abscisses curvilignes de cet arc, puis on ne garde que celles qui appartiennent à l&apos;intervalle <Math tex="K" /> imposé.</li>
          </ol>
        </Callout>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu · inéquation en cosinus</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5 sm:p-6">
          <div className="space-y-2 text-sm sm:col-span-3">
            <p className="text-foreground-muted">
              Résoudre dans <Math tex="[0,2\pi]" /> l&apos;inéquation <Math tex="\cos x\leqslant\dfrac12" />.
            </p>
            <Accordion>
              <AccordionItem title="Voir la solution">
                <div className="space-y-2">
                  <p>
                    <Math tex="\cos x=\dfrac12" /> pour <Math tex="x=\dfrac{\pi}3" /> et <Math tex="x=\dfrac{5\pi}3" />{" "}
                    dans <Math tex="[0,2\pi]" />. La droite <Math tex="x=\tfrac12" /> partage <Math tex="[I'I]" /> ;
                    les points <Math tex="M" /> d&apos;abscisse <Math tex="\leqslant\tfrac12" /> forment le grand arc
                    « du côté de <Math tex="I'" /> », entre <Math tex="\tfrac{\pi}3" /> et <Math tex="\tfrac{5\pi}3" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="S=\left[\dfrac{\pi}3\,;\,\dfrac{5\pi}3\right]" />
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center sm:col-span-2">
            <TrigCircle
              points={[
                { theta: PI / 3, label: "π/3", color: "#0f172a" },
                { theta: -PI / 3, label: "5π/3", color: "#0f172a" },
              ]}
              arcs={[{ from: PI / 3, to: 2 * PI - PI / 3, color: "#4f46e5" }]}
            />
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu · inéquation en sinus</p>
        <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-5 sm:p-6">
          <div className="space-y-2 text-sm sm:col-span-3">
            <p className="text-foreground-muted">
              Résoudre dans <Math tex="[-\pi,\pi]" /> l&apos;inéquation <Math tex="\sin x\geqslant-\dfrac12" />.
            </p>
            <Accordion>
              <AccordionItem title="Voir la solution">
                <div className="space-y-2">
                  <p>
                    <Math tex="\sin x=-\dfrac12" /> pour <Math tex="x=-\dfrac{\pi}6" /> et <Math tex="x=-\dfrac{5\pi}6" />{" "}
                    dans <Math tex="[-\pi,\pi]" />. L&apos;arc où l&apos;ordonnée est <Math tex="<-\tfrac12" /> est le
                    petit arc autour de <Math tex="-\tfrac{\pi}2" />, entre <Math tex="-\tfrac{5\pi}6" /> et{" "}
                    <Math tex="-\tfrac{\pi}6" /> : c&apos;est le seul arc à exclure.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="S=\left[-\pi\,;\,-\dfrac{5\pi}6\right]\cup\left[-\dfrac{\pi}6\,;\,\pi\right]" />
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex justify-center sm:col-span-2">
            <TrigCircle
              points={[
                { theta: -PI / 6, label: "-π/6", color: "#0f172a" },
                { theta: -5 * PI / 6, label: "-5π/6", color: "#0f172a" },
              ]}
              arcs={[
                { from: -PI, to: -5 * PI / 6, color: "#4f46e5" },
                { from: -PI / 6, to: PI, color: "#4f46e5" },
              ]}
            />
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu · inéquation en tangente</p>
        <div className="rounded-xl border border-border bg-surface p-5 text-sm sm:p-6">
          <p className="text-foreground-muted">
            Résoudre dans <Math tex="\left]-\dfrac{\pi}2,\dfrac{\pi}2\right[" /> l&apos;inéquation{" "}
            <Math tex="\tan x\geqslant\sqrt3" />.
          </p>
          <Accordion>
            <AccordionItem title="Voir la solution">
              <div className="space-y-2">
                <p>
                  Sur <Math tex="\left]-\tfrac{\pi}2,\tfrac{\pi}2\right[" /> (un « fuseau » entre deux asymptotes),{" "}
                  <Math tex="\tan" /> est <strong>strictement croissante</strong>, de <Math tex="-\infty" /> à{" "}
                  <Math tex="+\infty" />. Comme <Math tex="\tan\dfrac{\pi}3=\sqrt3" />, l&apos;inéquation{" "}
                  <Math tex="\tan x\geqslant\sqrt3" /> équivaut à <Math tex="x\geqslant\dfrac{\pi}3" /> (à droite de{" "}
                  <Math tex="\pi/3" />, tout en restant avant l&apos;asymptote <Math tex="\pi/2" />).
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="S=\left[\dfrac{\pi}3\,;\,\dfrac{\pi}2\right[" />
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-3">
          <Callout variant="info" title="Méthode pour tan sur un domaine plus large">
            Quand l&apos;intervalle contient plusieurs asymptotes <Math tex="\tfrac{\pi}2+k\pi" />, on découpe en
            « fuseaux » <Math tex="\left]-\tfrac{\pi}2+k\pi,\tfrac{\pi}2+k\pi\right[" /> : sur chacun, <Math tex="\tan" />{" "}
            est strictement croissante, ce qui permet de conclure fuseau par fuseau comme ci-dessus.
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="15 exercices corrigés"
        tone="muted"
        description="Cherchez chaque exercice au brouillon, puis cliquez pour vérifier votre réponse étape par étape."
      >
        <ExerciseGroup total={15} celebrationTitle="Bravo, les 15 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les équations et inéquations trigonométriques.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Équations en cosinus"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Résoudre dans <Math tex="\mathbb R" /> les équations suivantes.</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-lg border border-border p-3 text-center">a) <Math tex="\cos x=\dfrac{\sqrt2}2" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">b) <Math tex="\cos x=-\dfrac12" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">c) <Math tex="\cos^2x=\dfrac12" /></div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="a">
                  <Math tex="\cos x=\cos\dfrac{\pi}4\iff x=\dfrac{\pi}4+2k\pi\ \text{ou}\ x=-\dfrac{\pi}4+2k\pi" />
                </CorrectionCard>
                <CorrectionCard n="b">
                  <Math tex="\cos\dfrac{2\pi}3=-\dfrac12" />, donc <Math tex="x=\dfrac{2\pi}3+2k\pi\ \text{ou}\ x=-\dfrac{2\pi}3+2k\pi" />
                </CorrectionCard>
                <CorrectionCard n="c">
                  <Math tex="\cos x=\pm\dfrac{\sqrt2}2" />. En combinant les quatre familles obtenues (<Math tex="\pm\tfrac{\pi}4,\ \pm\tfrac{3\pi}4" />),
                  elles sont régulièrement espacées de <Math tex="\tfrac{\pi}2" /> : <strong className="text-green-700"><Math tex="S=\left\{\dfrac{\pi}4+k\dfrac{\pi}2\ /\ k\in\mathbb Z\right\}" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Équations en sinus"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Résoudre dans <Math tex="\mathbb R" /> les équations suivantes.</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-lg border border-border p-3 text-center">a) <Math tex="\sin x=\dfrac{\sqrt3}2" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">b) <Math tex="\sin x=-\dfrac12" /></div>
                  <div className="rounded-lg border border-border p-3 text-center">c) <Math tex="\sin^2x=\dfrac12" /></div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="a">
                  <Math tex="x=\dfrac{\pi}3+2k\pi\ \text{ou}\ x=\pi-\dfrac{\pi}3+2k\pi=\dfrac{2\pi}3+2k\pi" />
                </CorrectionCard>
                <CorrectionCard n="b">
                  <Math tex="\sin\left(-\dfrac{\pi}6\right)=-\dfrac12" />, donc <Math tex="x=-\dfrac{\pi}6+2k\pi\ \text{ou}\ x=\dfrac{7\pi}6+2k\pi" />
                </CorrectionCard>
                <CorrectionCard n="c">
                  Équivaut à <Math tex="\cos^2x=\tfrac12" /> (car <Math tex="\sin^2x+\cos^2x=1" />) : même ensemble qu&apos;à l&apos;exercice 1c) :{" "}
                  <strong className="text-green-700"><Math tex="S=\left\{\dfrac{\pi}4+k\dfrac{\pi}2\ /\ k\in\mathbb Z\right\}" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Équation avec angle double, sur un intervalle"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Résoudre dans <Math tex="\left]-\pi,\pi\right]" /> l&apos;équation <Math tex="\cos2x=\dfrac{\sqrt3}2" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\cos2x=\cos\dfrac{\pi}6\iff2x=\dfrac{\pi}6+2k\pi\ \text{ou}\ 2x=-\dfrac{\pi}6+2k\pi" />, soit{" "}
                  <Math tex="x=\dfrac{\pi}{12}+k\pi\ \text{ou}\ x=-\dfrac{\pi}{12}+k\pi" /> (<Math tex="k\in\mathbb Z" />).
                </p>
                <p>
                  En balayant <Math tex="k\in\{-1,0\}" /> pour rester dans <Math tex="]-\pi,\pi]" /> : on obtient{" "}
                  <Math tex="\dfrac{\pi}{12}" />, <Math tex="-\dfrac{11\pi}{12}" /> (première famille) et{" "}
                  <Math tex="-\dfrac{\pi}{12}" />, <Math tex="\dfrac{11\pi}{12}" /> (seconde famille).
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="S=\left\{-\dfrac{11\pi}{12}\,;\,-\dfrac{\pi}{12}\,;\,\dfrac{\pi}{12}\,;\,\dfrac{11\pi}{12}\right\}" />
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Équations sur un intervalle donné"
            items={
              <div className="text-sm space-y-2">
                <p className="text-foreground-muted">1) Résoudre dans <Math tex="\mathbb R" /> : <Math tex="4\tan x+4=0" />.</p>
                <p className="text-foreground-muted">2) Résoudre dans <Math tex="\left[-\dfrac{\pi}2,\dfrac{5\pi}2\right]" /> : <Math tex="2\sqrt2\sin x+2=0" />.</p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1">
                  <Math tex="\tan x=-1=\tan\left(-\dfrac{\pi}4\right)" />, d&apos;où{" "}
                  <strong className="text-green-700"><Math tex="S=\left\{-\dfrac{\pi}4+k\pi\ /\ k\in\mathbb Z\right\}" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="\sin x=-\dfrac{\sqrt2}2" />, donc <Math tex="x=-\dfrac{\pi}4+2k\pi" /> ou{" "}
                  <Math tex="x=\dfrac{5\pi}4+2k\pi" />. Dans <Math tex="\left[-\tfrac{\pi}2,\tfrac{5\pi}2\right]" />, la
                  première famille donne <Math tex="-\dfrac{\pi}4" /> et <Math tex="\dfrac{7\pi}4" /> ; la seconde
                  donne <Math tex="\dfrac{5\pi}4" />. <strong className="text-green-700">
                  <Math tex="S=\left\{-\dfrac{\pi}4\,;\,\dfrac{5\pi}4\,;\,\dfrac{7\pi}4\right\}" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Équations cos u = cos v, sin u = sin v, tan u = tan v"
            items={
              <div className="text-sm space-y-2">
                <p className="text-foreground-muted">1) Résoudre dans <Math tex="\mathbb R" /> : <Math tex="\cos2x=\cos\!\left(x-\dfrac{\pi}3\right)" />.</p>
                <p className="text-foreground-muted">2) Résoudre dans <Math tex="[0,\pi]" /> : <Math tex="\sin\!\left(2x-\dfrac{\pi}3\right)=\sin\!\left(\dfrac{\pi}4-x\right)" />.</p>
                <p className="text-foreground-muted">3) Résoudre dans <Math tex="\left]-\dfrac{\pi}2,\dfrac{\pi}2\right[" /> : <Math tex="\tan\!\left(2x-\dfrac{\pi}5\right)=1" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="1">
                  <Math tex="2x=x-\dfrac{\pi}3+2k\pi" /> donne <Math tex="x=-\dfrac{\pi}3+2k\pi" /> ; ou{" "}
                  <Math tex="2x=-\left(x-\tfrac{\pi}3\right)+2k\pi" /> donne <Math tex="3x=\tfrac{\pi}3+2k\pi" />, soit{" "}
                  <Math tex="x=\dfrac{\pi}9+\dfrac{2k\pi}3" />.{" "}
                  <strong className="text-green-700">
                    <Math tex="S=\left\{-\dfrac{\pi}3+2k\pi\right\}\cup\left\{\dfrac{\pi}9+\dfrac{2k\pi}3\ /\ k\in\mathbb Z\right\}" />
                  </strong>
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="2x-\tfrac{\pi}3=\tfrac{\pi}4-x+2k\pi\Rightarrow3x=\tfrac{7\pi}{12}+2k\pi\Rightarrow x=\tfrac{7\pi}{36}+\tfrac{2k\pi}3" />
                  , ou <Math tex="2x-\tfrac{\pi}3=\pi-\left(\tfrac{\pi}4-x\right)+2k\pi\Rightarrow x=\tfrac{13\pi}{12}+2k\pi" />. Dans{" "}
                  <Math tex="[0,\pi]" />, seule la première famille fournit des solutions (pour <Math tex="k=0" /> et{" "}
                  <Math tex="k=1" />) ; la seconde (<Math tex="\tfrac{13\pi}{12}>\pi" />) n&apos;en fournit aucune.{" "}
                  <strong className="text-green-700"><Math tex="S=\left\{\dfrac{7\pi}{36}\,;\,\dfrac{31\pi}{36}\right\}" /></strong>
                </CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="2x-\tfrac{\pi}5=\tfrac{\pi}4+k\pi\Rightarrow2x=\tfrac{9\pi}{20}+k\pi\Rightarrow x=\tfrac{9\pi}{40}+\tfrac{k\pi}2" />
                  . Dans <Math tex="\left]-\tfrac{\pi}2,\tfrac{\pi}2\right[" />, seuls <Math tex="k=0" /> et{" "}
                  <Math tex="k=-1" /> conviennent.{" "}
                  <strong className="text-green-700"><Math tex="S=\left\{-\dfrac{11\pi}{40}\,;\,\dfrac{9\pi}{40}\right\}" /></strong>
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Inéquation en sinus"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="[0,2\pi[" /> : <Math tex="\sin x\geqslant\dfrac12" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\sin x=\dfrac12" /> pour <Math tex="x=\dfrac{\pi}6" /> et <Math tex="x=\dfrac{5\pi}6" /> dans{" "}
                  <Math tex="[0,2\pi[" />. La « bosse » où l&apos;ordonnée dépasse <Math tex="\tfrac12" /> se situe
                  entre ces deux valeurs.
                </p>
                <p className="font-bold text-green-700"><Math tex="S=\left[\dfrac{\pi}6\,;\,\dfrac{5\pi}6\right]" /></p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Inéquation en sinus (bornes négatives)"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="\left]-\pi,\pi\right]" /> : <Math tex="\sin x\leqslant-\dfrac12" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\sin x=-\dfrac12" /> pour <Math tex="x=-\dfrac{\pi}6" /> et <Math tex="x=-\dfrac{5\pi}6" />{" "}
                  dans <Math tex="]-\pi,\pi]" />. Le creux (ordonnée <Math tex="\leqslant-\tfrac12" />) est l&apos;arc
                  entre ces deux valeurs, en passant par <Math tex="-\tfrac{\pi}2" />.
                </p>
                <p className="font-bold text-green-700"><Math tex="S=\left[-\dfrac{5\pi}6\,;\,-\dfrac{\pi}6\right]" /></p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Inéquation en cosinus"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="\left]-\pi,\pi\right]" /> : <Math tex="\cos x\geqslant\dfrac{\sqrt2}2" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\cos x=\dfrac{\sqrt2}2" /> pour <Math tex="x=\dfrac{\pi}4" /> et <Math tex="x=-\dfrac{\pi}4" />.
                  L&apos;arc où l&apos;abscisse dépasse <Math tex="\tfrac{\sqrt2}2" /> est le petit arc autour de{" "}
                  <Math tex="0" />, entre ces deux valeurs.
                </p>
                <p className="font-bold text-green-700"><Math tex="S=\left[-\dfrac{\pi}4\,;\,\dfrac{\pi}4\right]" /></p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Inéquation en cosinus, intervalle dissymétrique"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="\left]-\dfrac{\pi}2,\pi\right]" /> : <Math tex="\cos x\leqslant\dfrac12" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Sur le cercle entier, <Math tex="\cos x\leqslant\tfrac12" /> pour{" "}
                  <Math tex="x\in\left[\tfrac{\pi}3,\pi\right]\cup\left[-\pi,-\tfrac{\pi}3\right]" />. On intersecte
                  avec le domaine imposé <Math tex="\left]-\tfrac{\pi}2,\pi\right]" /> : la partie{" "}
                  <Math tex="\left[-\pi,-\tfrac{\pi}3\right]" /> devient <Math tex="\left]-\tfrac{\pi}2,-\tfrac{\pi}3\right]" />
                  , et <Math tex="\left[\tfrac{\pi}3,\pi\right]" /> reste inchangée.
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="S=\left]-\dfrac{\pi}2\,;\,-\dfrac{\pi}3\right]\cup\left[\dfrac{\pi}3\,;\,\pi\right]" />
                </p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Deux inéquations sur le même intervalle"
            items={
              <div className="text-sm space-y-2">
                <p className="text-foreground-muted">Résoudre dans <Math tex="\left]-\pi,\pi\right]" /> :</p>
                <p className="text-foreground-muted">1) <Math tex="\cos x\leqslant0" /> &nbsp; 2) <Math tex="\sin x\geqslant0" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="1">
                  <Math tex="\cos x=0" /> pour <Math tex="x=\pm\dfrac{\pi}2" />. Abscisse négative sur le grand arc
                  contenant <Math tex="\pi" /> : <strong className="text-green-700">
                  <Math tex="S=\left[-\pi,-\dfrac{\pi}2\right]\cup\left[\dfrac{\pi}2,\pi\right]" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="2">
                  <Math tex="\sin x\geqslant0" /> exactement sur le demi-cercle supérieur :{" "}
                  <strong className="text-green-700"><Math tex="S=[0,\pi]" /></strong>.
                </CorrectionCard>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Inéquation en tangente"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="S=\left]-\dfrac{\pi}2,\dfrac{\pi}2\right[" /> : <Math tex="\tan x\geqslant1" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\tan\dfrac{\pi}4=1" />, et <Math tex="\tan" /> est strictement croissante sur{" "}
                  <Math tex="\left]-\tfrac{\pi}2,\tfrac{\pi}2\right[" />.
                </p>
                <p className="font-bold text-green-700"><Math tex="S=\left[\dfrac{\pi}4\,;\,\dfrac{\pi}2\right[" /></p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="Inéquation stricte en sinus"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="[0,2\pi]" /> : <Math tex="\sin x>-\dfrac{\sqrt2}2" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\sin x=-\dfrac{\sqrt2}2" /> pour <Math tex="x=\dfrac{5\pi}4" /> et <Math tex="x=\dfrac{7\pi}4" />{" "}
                  dans <Math tex="[0,2\pi]" />. Le creux <Math tex="\sin x<-\tfrac{\sqrt2}2" /> est l&apos;arc ouvert
                  entre ces deux valeurs ; on exclut cet arc.
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="S=\left[0\,;\,\dfrac{5\pi}4\right]\cup\left[\dfrac{7\pi}4\,;\,2\pi\right]" />
                </p>
              </div>
            }
          />

          {/* Exercice 13 */}
          <ExerciseCard
            id="13"
            index={13}
            title="Inéquation en tangente sur trois fuseaux"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="[-\pi,\pi]" /> : <Math tex="3\tan x-\sqrt3\geqslant0" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;inéquation équivaut à <Math tex="\tan x\geqslant\dfrac{\sqrt3}3" />. Sur <Math tex="[-\pi,\pi]" />
                  , les asymptotes sont en <Math tex="\pm\tfrac{\pi}2" />, ce qui donne trois fuseaux :{" "}
                  <Math tex="[-\pi,-\tfrac{\pi}2[" />, <Math tex="]-\tfrac{\pi}2,\tfrac{\pi}2[" />,{" "}
                  <Math tex="]\tfrac{\pi}2,\pi]" />.
                </p>
                <p>
                  Sur <Math tex="\left]-\tfrac{\pi}2,\tfrac{\pi}2\right[" /> (croissante) :{" "}
                  <Math tex="\tan\tfrac{\pi}6=\tfrac{\sqrt3}3" />, donc <Math tex="x\in\left[\tfrac{\pi}6,\tfrac{\pi}2\right[" />
                  . Sur <Math tex="\left[-\pi,-\tfrac{\pi}2\right[" />, en posant <Math tex="y=x+\pi\in]0,\tfrac{\pi}2[" />{" "}
                  (même tangente), la condition devient <Math tex="y\geqslant\tfrac{\pi}6" />, soit{" "}
                  <Math tex="x\in\left[-\tfrac{5\pi}6,-\tfrac{\pi}2\right[" />. Sur <Math tex="\left]\tfrac{\pi}2,\pi\right]" />
                  , <Math tex="\tan x\leqslant0<\tfrac{\sqrt3}3" /> : aucune solution.
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="S=\left[-\dfrac{5\pi}6\,;\,-\dfrac{\pi}2\right[\,\cup\,\left[\dfrac{\pi}6\,;\,\dfrac{\pi}2\right[" />
                </p>
              </div>
            }
          />

          {/* Exercice 14 */}
          <ExerciseCard
            id="14"
            index={14}
            title="Inéquation en tangente sur [0, 2π]"
            items={<p className="text-sm text-foreground-muted">Résoudre dans <Math tex="[0,2\pi]" /> : <Math tex="\tan x-1\geqslant0" />.</p>}
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équivaut à <Math tex="\tan x\geqslant1" />. Asymptotes en <Math tex="\tfrac{\pi}2" /> et{" "}
                  <Math tex="\tfrac{3\pi}2" /> sur <Math tex="[0,2\pi]" />. Sur <Math tex="\left[0,\tfrac{\pi}2\right[" />{" "}
                  (croissante, <Math tex="\tan\tfrac{\pi}4=1" />) : <Math tex="x\in\left[\tfrac{\pi}4,\tfrac{\pi}2\right[" />
                  . Sur <Math tex="\left]\tfrac{\pi}2,\tfrac{3\pi}2\right[" />, en posant <Math tex="y=x-\pi" />, la
                  condition devient <Math tex="x\in\left[\tfrac{5\pi}4,\tfrac{3\pi}2\right[" />. Sur{" "}
                  <Math tex="\left]\tfrac{3\pi}2,2\pi\right]" />, <Math tex="\tan x\leqslant0" /> : aucune solution.
                </p>
                <p className="font-bold text-green-700">
                  <Math tex="S=\left[\dfrac{\pi}4\,;\,\dfrac{\pi}2\right[\,\cup\,\left[\dfrac{5\pi}4\,;\,\dfrac{3\pi}2\right[" />
                </p>
              </div>
            }
          />

          {/* Exercice 15 */}
          <ExerciseCard
            id="15"
            index={15}
            title="Équation du second degré en sin x, produit de facteurs"
            items={
              <div className="text-sm space-y-2">
                <p className="text-foreground-muted">
                  1) a) Résoudre dans <Math tex="\mathbb R" /> : <Math tex="2\sin^2x-9\sin x-5=0" />, puis en déduire
                  les solutions dans <Math tex="[0,2\pi]" />.
                </p>
                <p className="text-foreground-muted">
                  b) Résoudre dans <Math tex="[0,2\pi]" /> : <Math tex="2\sin^2x-9\sin x-5\leqslant0" />.
                </p>
                <p className="text-foreground-muted">
                  2) Résoudre dans <Math tex="[0,\pi]" /> : <Math tex="(2\cos x-1)(\tan x+1)\geqslant0" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="1a">
                  En posant <Math tex="t=\sin x" /> : <Math tex="2t^2-9t-5=0" />, <Math tex="\Delta=81+40=121=11^2" />,{" "}
                  <Math tex="t=\dfrac{9\pm11}4" />, soit <Math tex="t=5" /> (rejeté, <Math tex="\notin[-1,1]" />) ou{" "}
                  <Math tex="t=-\dfrac12" />. Donc <Math tex="\sin x=-\tfrac12" />,{" "}
                  <Math tex="S_{\mathbb R}=\left\{-\tfrac{\pi}6+2k\pi\,;\,\tfrac{7\pi}6+2k\pi\right\}" />. Dans{" "}
                  <Math tex="[0,2\pi]" /> : <strong className="text-green-700"><Math tex="\left\{\dfrac{7\pi}6\,;\,\dfrac{11\pi}6\right\}" /></strong>.
                </CorrectionCard>
                <CorrectionCard n="1b">
                  <Math tex="2t^2-9t-5=2(t-5)\!\left(t+\tfrac12\right)\leqslant0\iff t\in\left[-\tfrac12,5\right]" />. Comme{" "}
                  <Math tex="\sin x\in[-1,1]" />, ceci équivaut à <Math tex="\sin x\geqslant-\tfrac12" />. Sur{" "}
                  <Math tex="[0,2\pi]" />, le creux exclu est <Math tex="\left]\tfrac{7\pi}6,\tfrac{11\pi}6\right[" />.{" "}
                  <strong className="text-green-700">
                    <Math tex="S=\left[0\,;\,\dfrac{7\pi}6\right]\cup\left[\dfrac{11\pi}6\,;\,2\pi\right]" />
                  </strong>
                </CorrectionCard>
                <CorrectionCard n="2">
                  Sur <Math tex="[0,\pi]" />, <Math tex="\tan" /> n&apos;est pas définie en <Math tex="\tfrac{\pi}2" />.{" "}
                  <Math tex="2\cos x-1\geqslant0\iff x\in\left[0,\tfrac{\pi}3\right]" /> (nul en <Math tex="\tfrac{\pi}3" />).{" "}
                  <Math tex="\tan x+1\geqslant0\iff\tan x\geqslant-1" /> : vrai sur <Math tex="\left[0,\tfrac{\pi}2\right[" />
                  , et sur <Math tex="\left]\tfrac{\pi}2,\pi\right]" /> équivaut (via <Math tex="\tan\tfrac{3\pi}4=-1" />
                  ) à <Math tex="x\in\left[\tfrac{3\pi}4,\pi\right]" />. Le produit est positif quand les deux
                  facteurs ont le même signe : sur <Math tex="\left[0,\tfrac{\pi}3\right]" /> (tous deux{" "}
                  <Math tex="\geqslant0" />) et sur <Math tex="\left]\tfrac{\pi}2,\tfrac{3\pi}4\right]" /> (tous deux{" "}
                  <Math tex="\leqslant0" />).
                  <p className="mt-1 font-bold text-green-700">
                    <Math tex="S=\left[0\,;\,\dfrac{\pi}3\right]\cup\left]\dfrac{\pi}2\,;\,\dfrac{3\pi}4\right]" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
