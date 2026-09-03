import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Équation d'une droite · Cours et exercices corrigés | 3AC",
  description:
    "Cours complet sur l'équation réduite d'une droite : coefficient directeur, ordonnée à l'origine, condition d'appartenance, droites parallèles et perpendiculaires, avec 7 exercices corrigés en détail. 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 4",
  heroTitle: "L'équation d'une droite",
  heroSubtitle:
    "Chaque droite du plan porte sa propre carte d'identité : une équation. Coefficient directeur, ordonnée à l'origine, parallèles et perpendiculaires.",
  footerNote: "Équation d'une droite · Mathématiques, 3ème année collège, semestre 2.",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "calcul", label: "Calculer" },
    { id: "parallelisme", label: "Parallèles" },
    { id: "memo", label: "Mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Helpers locaux ===================== */

function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls = tone === "rose" ? "bg-rose-100 text-rose-600" : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
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

/** A single numbered step inside a worked example. */
function Step({ n, title, children }: { n: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <div className="flex-1 pb-0.5">
        <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">{title}</p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}

/** Wrapper card for a sequence of Steps. */
function Worked({ children }: { children: ReactNode }) {
  return <div className="space-y-4 rounded-xl border border-border p-5">{children}</div>;
}

function ResultChip({ ok, children }: { ok: boolean; children: ReactNode }) {
  const cls = ok
    ? "border-green-500/30 bg-green-100/60 text-green-700"
    : "border-rose-500/30 bg-rose-100/60 text-rose-700";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold ${cls}`}>
      {ok ? "✓" : "✗"} {children}
    </span>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-lg border border-border bg-surface px-3 py-2 text-sm">{children}</span>;
}

function SubHeading({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <div className="mt-10 mb-4">
      <h3 className="font-display text-lg font-semibold text-foreground">{children}</h3>
      {hint ? <p className="mt-1 text-sm text-foreground-muted">{hint}</p> : null}
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
          { value: "3", label: "propriétés clés" },
          { value: "7", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#definition"
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
          <div className="relative flex select-none flex-col items-center gap-3">
            <span className="font-serif text-[6rem] leading-none font-bold text-white italic sm:text-[7.5rem]">y</span>
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-mono text-lg text-orange-400 sm:text-2xl">
              = mx + p
            </div>
          </div>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="definition"
        kicker="01 · La définition"
        title="L'équation réduite d'une droite"
        tone="light"
        description="Dans un repère orthonormé, chaque droite non verticale possède une équation unique de cette forme."
      >
        <FormulaBlock tex="y = mx + p" caption="m : coefficient directeur · p : ordonnée à l'origine" />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">le coefficient directeur</p>
            <p className="text-sm">
              <Math tex="m" /> est aussi appelé la <strong>pente</strong> de la droite.
            </p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">l&apos;ordonnée à l&apos;origine</p>
            <p className="text-sm">
              <Math tex="p" /> est l&apos;ordonnée du point où la droite coupe l&apos;axe des <Math tex="y" />.
            </p>
          </div>
        </div>

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemple</p>
        <div className="mt-2 rounded-xl border border-border p-5">
          <p className="text-sm">
            Soit <Math tex="(D)" /> une droite d&apos;équation réduite <Math tex="y=-3x+\dfrac12" />.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Chip>
              Coefficient directeur de <Math tex="(D)" /> : <Math tex="-3" />
            </Chip>
            <Chip>
              Ordonnée à l&apos;origine de <Math tex="(D)" /> : <Math tex="\dfrac12" />
            </Chip>
          </div>
        </div>

        <SubHeading>Remarques importantes</SubHeading>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-5">
            <p className="text-sm leading-relaxed">
              Toute droite d&apos;équation réduite <Math tex="y=m" /> (<Math tex="m\neq0" />) est <strong>parallèle à l&apos;axe des abscisses</strong> et passe par le point <Math tex="(0\,;\,m)" />.
            </p>
            <div className="mt-4 rounded-xl bg-surface-muted p-4">
              <svg viewBox="0 0 220 170" className="mx-auto h-auto w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="figm-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
                  </marker>
                  <marker id="figm-ln" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#4f46e5" />
                  </marker>
                </defs>
                <line x1="16" y1="140" x2="204" y2="140" stroke="#94a3b8" strokeWidth="1.6" markerEnd="url(#figm-ax)" />
                <text x="207" y="145" fontSize="12" fill="#64748b" fontStyle="italic">x</text>
                <line x1="56" y1="156" x2="56" y2="16" stroke="#94a3b8" strokeWidth="1.6" markerEnd="url(#figm-ax)" />
                <text x="44" y="14" fontSize="12" fill="#64748b" fontStyle="italic">y</text>
                <line x1="84" y1="136" x2="84" y2="144" stroke="#64748b" strokeWidth="1.4" />
                <text x="80" y="156" fontSize="11.5" fill="#64748b" fontStyle="italic">I</text>
                <circle cx="56" cy="112" r="2" fill="#64748b" />
                <text x="43" y="116" fontSize="11.5" fill="#64748b" fontStyle="italic">J</text>
                <text x="41" y="153" fontSize="11.5" fill="#64748b" fontStyle="italic">O</text>
                <line x1="56" y1="56" x2="56" y2="140" stroke="#4f46e5" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="16" y1="56" x2="204" y2="56" stroke="#4f46e5" strokeWidth="2.6" markerStart="url(#figm-ln)" markerEnd="url(#figm-ln)" />
                <text x="35" y="49" fontSize="13" fontWeight="700" fill="#4f46e5" fontStyle="italic">m</text>
                <text x="150" y="48" fontSize="14" fontWeight="700" fill="#4f46e5" fontStyle="italic">y = m</text>
              </svg>
              <p className="mt-1 text-center text-xs font-semibold text-foreground-muted">
                Figure 1 · droite <Math tex="y=m" />
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5">
            <p className="text-sm leading-relaxed">
              Toute droite d&apos;équation réduite <Math tex="x=n" /> (<Math tex="n\neq0" />) est <strong>parallèle à l&apos;axe des ordonnées</strong> et passe par le point <Math tex="(n\,;\,0)" />.
            </p>
            <div className="mt-4 rounded-xl bg-surface-muted p-4">
              <svg viewBox="0 0 220 170" className="mx-auto h-auto w-full max-w-[220px]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="fign-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8" />
                  </marker>
                  <marker id="fign-ln" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#4f46e5" />
                  </marker>
                </defs>
                <line x1="16" y1="140" x2="204" y2="140" stroke="#94a3b8" strokeWidth="1.6" markerEnd="url(#fign-ax)" />
                <text x="207" y="145" fontSize="12" fill="#64748b" fontStyle="italic">x</text>
                <line x1="56" y1="156" x2="56" y2="16" stroke="#94a3b8" strokeWidth="1.6" markerEnd="url(#fign-ax)" />
                <text x="44" y="14" fontSize="12" fill="#64748b" fontStyle="italic">y</text>
                <line x1="84" y1="136" x2="84" y2="144" stroke="#64748b" strokeWidth="1.4" />
                <text x="80" y="156" fontSize="11.5" fill="#64748b" fontStyle="italic">I</text>
                <circle cx="56" cy="112" r="2" fill="#64748b" />
                <text x="43" y="116" fontSize="11.5" fill="#64748b" fontStyle="italic">J</text>
                <text x="41" y="153" fontSize="11.5" fill="#64748b" fontStyle="italic">O</text>
                <line x1="140" y1="140" x2="56" y2="140" stroke="#4f46e5" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="140" y1="156" x2="140" y2="20" stroke="#4f46e5" strokeWidth="2.6" markerStart="url(#fign-ln)" markerEnd="url(#fign-ln)" />
                <text x="132" y="152" fontSize="13" fontWeight="700" fill="#4f46e5" fontStyle="italic">n</text>
                <text x="146" y="34" fontSize="14" fontWeight="700" fill="#4f46e5" fontStyle="italic">x = n</text>
              </svg>
              <p className="mt-1 text-center text-xs font-semibold text-foreground-muted">
                Figure 2 · droite <Math tex="x=n" />
              </p>
            </div>
          </div>
        </div>

        <SubHeading>Condition d&apos;appartenance d&apos;un point à une droite</SubHeading>
        <Callout variant="info" title="Règle">
          <p>
            Soient <Math tex="(\Delta)" /> une droite d&apos;équation réduite <Math tex="y=mx+p" /> et <Math tex="A" /> un point.
          </p>
          <MathBlock tex="y_A = mx_A + p \iff A \in (\Delta)" className="katex-formula-block mt-3 text-center text-lg" />
        </Callout>

        <div className="mt-5 rounded-xl border border-border p-5">
          <p className="text-sm">
            Soit <Math tex="(D)" /> la droite d&apos;équation réduite <Math tex="y=-2x+1" />. Vérifions si <Math tex="A(2\,;-3)" /> et <Math tex="B(-1\,;4)" /> appartiennent à <Math tex="(D)" />.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-surface-muted p-4 text-sm">
              <p><Math tex="y_A=-3" /> et <Math tex="-2x_A+1=-2\times2+1=-3" /></p>
              <p className="mt-1">Donc <Math tex="y_A=-2x_A+1" /></p>
              <p className="mt-3"><ResultChip ok><Math tex="A \in (D)" /></ResultChip></p>
            </div>
            <div className="rounded-xl bg-surface-muted p-4 text-sm">
              <p><Math tex="y_B=4" /> et <Math tex="-2x_B+1=-2\times(-1)+1=3" /></p>
              <p className="mt-1">Donc <Math tex="y_B\neq-2x_B+1" /></p>
              <p className="mt-3"><ResultChip ok={false}><Math tex="B \notin (D)" /></ResultChip></p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-border p-5">
          <p className="text-sm font-semibold text-foreground">Tracer une droite à partir de son équation</p>
          <p className="mt-2 text-sm text-foreground-muted">
            Traçons la droite <Math tex="(\Delta)" /> d&apos;équation réduite <Math tex="y=2x-1" />, à l&apos;aide d&apos;un tableau de valeurs :
          </p>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[260px] border-separate border-spacing-0 overflow-hidden rounded-xl text-center text-sm">
                <thead>
                  <tr className="bg-neutral-950 text-white">
                    <th className="px-3 py-2 font-semibold"><Math tex="(\Delta)" /></th>
                    <th className="px-3 py-2 font-semibold"><Math tex="x" /></th>
                    <th className="px-3 py-2 font-semibold"><Math tex="y" /></th>
                    <th className="px-3 py-2 font-semibold"><Math tex="M(x\,;y)" /></th>
                  </tr>
                </thead>
                <tbody className="bg-surface">
                  <tr className="border-b border-border">
                    <td className="px-3 py-2 font-semibold">A</td>
                    <td className="px-3 py-2"><Math tex="1" /></td>
                    <td className="px-3 py-2"><Math tex="1" /></td>
                    <td className="px-3 py-2"><Math tex="A(1\,;1)" /></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold">B</td>
                    <td className="px-3 py-2"><Math tex="-1" /></td>
                    <td className="px-3 py-2"><Math tex="-3" /></td>
                    <td className="px-3 py-2"><Math tex="B(-1\,;-3)" /></td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm text-foreground-muted">
                Donc : <Math tex="(\Delta)=(AB)" />
              </p>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <svg viewBox="0 0 216 318" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="ar475569a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#475569" />
                  </marker>
                  <marker id="ar7c3aeda" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="#7c3aed" />
                  </marker>
                </defs>
                <g stroke="#e2e8f0" strokeWidth="1">
                  <line x1="40.0" y1="278.0" x2="40.0" y2="40.0" />
                  <line x1="74.0" y1="278.0" x2="74.0" y2="40.0" />
                  <line x1="108.0" y1="278.0" x2="108.0" y2="40.0" />
                  <line x1="142.0" y1="278.0" x2="142.0" y2="40.0" />
                  <line x1="176.0" y1="278.0" x2="176.0" y2="40.0" />
                  <line x1="40.0" y1="278.0" x2="176.0" y2="278.0" />
                  <line x1="40.0" y1="244.0" x2="176.0" y2="244.0" />
                  <line x1="40.0" y1="210.0" x2="176.0" y2="210.0" />
                  <line x1="40.0" y1="176.0" x2="176.0" y2="176.0" />
                  <line x1="40.0" y1="142.0" x2="176.0" y2="142.0" />
                  <line x1="40.0" y1="108.0" x2="176.0" y2="108.0" />
                  <line x1="40.0" y1="74.0" x2="176.0" y2="74.0" />
                  <line x1="40.0" y1="40.0" x2="176.0" y2="40.0" />
                </g>
                <line x1="26.0" y1="142.0" x2="194.0" y2="142.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#ar475569a)" />
                <text x="197.0" y="147.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
                <line x1="108.0" y1="292.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#ar475569a)" />
                <text x="94.0" y="20.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
                <g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
                  <text x="40.0" y="158.0" textAnchor="middle">-2</text>
                  <text x="74.0" y="158.0" textAnchor="middle">-1</text>
                  <text x="142.0" y="158.0" textAnchor="middle">1</text>
                  <text x="176.0" y="158.0" textAnchor="middle">2</text>
                  <text x="100.0" y="281.5" textAnchor="end">-4</text>
                  <text x="100.0" y="247.5" textAnchor="end">-3</text>
                  <text x="100.0" y="213.5" textAnchor="end">-2</text>
                  <text x="100.0" y="179.5" textAnchor="end">-1</text>
                  <text x="100.0" y="111.5" textAnchor="end">1</text>
                  <text x="100.0" y="77.5" textAnchor="end">2</text>
                  <text x="100.0" y="43.5" textAnchor="end">3</text>
                  <text x="100.0" y="158.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
                </g>
                <line x1="142.0" y1="108.0" x2="142.0" y2="142.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="142.0" y1="108.0" x2="108.0" y2="108.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="74.0" y1="244.0" x2="74.0" y2="142.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="74.0" y1="244.0" x2="108.0" y2="244.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="57.0" y1="278.0" x2="176.0" y2="40.0" stroke="#7c3aed" strokeWidth="2.6" markerStart="url(#ar7c3aeda)" markerEnd="url(#ar7c3aeda)" />
                <text x="184.0" y="54.0" fontSize="14" fontStyle="italic" fontWeight="700" fill="#7c3aed">(Δ)</text>
                <circle cx="142.0" cy="108.0" r="4.5" fill="#2563eb" stroke="white" strokeWidth="1.5" />
                <text x="151.0" y="102.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#2563eb">A</text>
                <circle cx="74.0" cy="244.0" r="4.5" fill="#e11d48" stroke="white" strokeWidth="1.5" />
                <text x="58.0" y="264.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#e11d48">B</text>
              </svg>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. CALCULER L'ÉQUATION ===================== */}
      <LessonSection
        id="calcul"
        kicker="02 · La méthode"
        title="Trouver m et p"
        tone="light"
        description="Deux façons classiques de retrouver l'équation réduite d'une droite."
      >
        <SubHeading hint="Il suffit de connaître deux points de la droite.">
          1. Une droite qui passe par deux points connus
        </SubHeading>
        <Callout variant="info" title="Propriété">
          <p>
            Si <Math tex="y=mx+p" /> est une équation réduite d&apos;une droite <Math tex="(AB)" />, alors :
          </p>
          <MathBlock tex="m=\dfrac{y_B-y_A}{x_B-x_A} \qquad \text{avec}\quad x_B\neq x_A" className="katex-formula-block mt-3 text-center text-lg" />
        </Callout>

        <p className="mt-5 text-sm text-foreground-muted">
          Dans un repère orthonormé <Math tex="(O;I;J)" />, on considère <Math tex="A(2\,;1)" /> et <Math tex="B(3\,;-2)" />. Déterminons l&apos;équation réduite de <Math tex="(AB)" />.
        </p>
        <div className="mt-3">
          <Worked>
            <Step n={1} title="Cherchons m">
              <MathBlock tex="m=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{-2-1}{3-2}=\dfrac{-3}{1}=-3" className="katex-formula-block text-base" />
              <p className="mt-1">Donc : <Math tex="y=-3x+p" /></p>
            </Step>
            <Step n={2} title="Cherchons p">
              <p>On a <Math tex="A\in(AB)" />, donc <Math tex="y_A=-3x_A+p" /> :</p>
              <MathBlock tex="1=-3\times2+p \;\Rightarrow\; 1=-6+p \;\Rightarrow\; p=7" className="katex-formula-block mt-1 text-base" />
            </Step>
            <Step n="✓" title="Conclusion">
              <MathBlock tex="\boxed{y=-3x+7}" className="katex-formula-block text-lg font-bold text-green-700" />
            </Step>
          </Worked>
        </div>

        <SubHeading hint="Le coefficient directeur est déjà donné : il ne reste qu'à trouver p.">
          2. Une droite dont on connaît le coefficient directeur et un point
        </SubHeading>
        <p className="text-sm text-foreground-muted">
          On considère <Math tex="A(2\,;-4)" />. Déterminons l&apos;équation réduite de <Math tex="(L)" />, passant par <Math tex="A" /> et de coefficient directeur <Math tex="\dfrac{-1}{2}" />.
        </p>
        <div className="mt-3">
          <Worked>
            <Step n={1} title="Forme de départ">
              <p>L&apos;équation réduite de <Math tex="(L)" /> est de la forme <Math tex="y=\dfrac{-1}{2}x+p" />.</p>
            </Step>
            <Step n={2} title="Cherchons p">
              <p>On a <Math tex="A\in(L)" />, donc <Math tex="y_A=\dfrac{-1}{2}x_A+p" /> :</p>
              <MathBlock tex="-4=\dfrac{-1}{2}\times2+p \;\Rightarrow\; -4=-1+p \;\Rightarrow\; p=-3" className="katex-formula-block mt-1 text-base" />
            </Step>
            <Step n="✓" title="Conclusion">
              <MathBlock tex="\boxed{y=\dfrac{-1}{2}x-3}" className="katex-formula-block text-lg font-bold text-green-700" />
            </Step>
          </Worked>
        </div>
      </LessonSection>

      {/* ===================== III. PARALLÈLES ET PERPENDICULAIRES ===================== */}
      <LessonSection
        id="parallelisme"
        kicker="03 · Positions relatives"
        title="Droites parallèles et perpendiculaires"
        tone="light"
        description="Tout se joue sur le coefficient directeur : même valeur pour le parallélisme, produit égal à −1 pour la perpendicularité."
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">1. Droites parallèles</h3>
            <Callout variant="info" title="Propriété">
              <p>
                Soient <Math tex="m" /> et <Math tex="m'" /> les coefficients directeurs de <Math tex="(D)" /> et <Math tex="(\Delta)" />.
              </p>
              <MathBlock tex="(D)\parallel(\Delta) \iff m=m'" className="katex-formula-block mt-3 text-center text-lg" />
            </Callout>

            <div className="mt-5 rounded-xl border border-border p-4">
              <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple · vérifier un parallélisme</p>
              <p className="mt-2 text-sm">
                <Math tex="(D)" /> : <Math tex="y=-2x+1" /> et <Math tex="A(1\,;1)" />, <Math tex="B(2\,;-1)" />. Vérifions si <Math tex="(D)\parallel(AB)" />.
              </p>
              <MathBlock tex="m=-2 \qquad m'=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{-1-1}{2-1}=\dfrac{-2}{1}=-2" className="katex-formula-block mt-2 text-base" />
              <p className="mt-2"><ResultChip ok><Math tex="m=m'" /> donc <Math tex="(D)\parallel(AB)" /></ResultChip></p>
            </div>

            <div className="mt-5 rounded-xl border border-border p-4">
              <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple · construire une parallèle</p>
              <p className="mt-2 text-sm">
                <Math tex="(D)" /> : <Math tex="y=3x-1" />. Déterminons <Math tex="(\Delta)" />, passant par <Math tex="E(2\,;-1)" />, parallèle à <Math tex="(D)" />.
              </p>
              <div className="mt-3">
                <Worked>
                  <Step n={1} title="Cherchons m">
                    <p><Math tex="(D)\parallel(\Delta)" /> donc <Math tex="m=m'=3" /> : <Math tex="y=3x+p" /></p>
                  </Step>
                  <Step n={2} title="Cherchons p">
                    <MathBlock tex="-1=3\times2+p \;\Rightarrow\; -1=6+p \;\Rightarrow\; p=-7" className="katex-formula-block text-base" />
                  </Step>
                  <Step n="✓" title="Conclusion">
                    <MathBlock tex="\boxed{y=3x-7}" className="katex-formula-block text-lg font-bold text-green-700" />
                  </Step>
                </Worked>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">2. Droites perpendiculaires</h3>
            <Callout variant="danger" title="Propriété">
              <p>
                Soient <Math tex="m" /> et <Math tex="m'" /> les coefficients directeurs de <Math tex="(D)" /> et <Math tex="(\Delta)" />.
              </p>
              <MathBlock tex="(D)\perp(\Delta) \iff m\times m'=-1" className="katex-formula-block mt-3 text-center text-lg" />
            </Callout>

            <div className="mt-5 rounded-xl border border-border p-4">
              <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple · vérifier une perpendicularité</p>
              <p className="mt-2 text-sm">
                <Math tex="(D)" /> : <Math tex="y=2x-3" /> et <Math tex="A(4\,;-1)" />, <Math tex="B(2\,;0)" />. Vérifions si <Math tex="(D)\perp(AB)" />.
              </p>
              <MathBlock tex="m=2 \qquad m'=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{0-(-1)}{2-4}=\dfrac{1}{-2}=\dfrac{-1}{2}" className="katex-formula-block mt-2 text-base" />
              <p className="mt-1 text-sm text-foreground-muted"><Math tex="m\times m'=2\times\dfrac{-1}{2}=-1" /></p>
              <p className="mt-2"><ResultChip ok><Math tex="m\times m'=-1" /> donc <Math tex="(D)\perp(AB)" /></ResultChip></p>
            </div>

            <div className="mt-5 rounded-xl border border-border p-4">
              <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple · construire une perpendiculaire</p>
              <p className="mt-2 text-sm">
                <Math tex="(D)" /> : <Math tex="y=-3x+1" />. Déterminons <Math tex="(\Delta)" />, passant par <Math tex="E(2\,;1)" />, perpendiculaire à <Math tex="(D)" />.
              </p>
              <div className="mt-3">
                <Worked>
                  <Step n={1} title="Cherchons m">
                    <MathBlock tex="m\times(-3)=-1 \;\Rightarrow\; m=\dfrac{-1}{-3}=\dfrac13" className="katex-formula-block text-base" />
                    <p className="mt-1">D&apos;où : <Math tex="y=\dfrac13x+p" /></p>
                  </Step>
                  <Step n={2} title="Cherchons p">
                    <MathBlock tex="1=\dfrac13\times2+p \;\Rightarrow\; 1=\dfrac23+p \;\Rightarrow\; p=\dfrac13" className="katex-formula-block text-base" />
                  </Step>
                  <Step n="✓" title="Conclusion">
                    <MathBlock tex="\boxed{y=\dfrac13x+\dfrac13}" className="katex-formula-block text-lg font-bold text-green-700" />
                  </Step>
                </Worked>
              </div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== FICHE MÉMO ===================== */}
      <LessonSection
        id="memo"
        kicker="04 · Fiche mémo"
        title="Points clés à retenir"
        tone="muted"
        description="Les six formules indispensables avant d'attaquer les exercices."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Équation réduite</p>
            <MathBlock tex="y=mx+p" className="katex-formula-block mt-2 text-center text-lg" />
            <p className="mt-2 text-sm text-foreground-muted">
              <Math tex="m" /> : coefficient directeur (pente) · <Math tex="p" /> : ordonnée à l&apos;origine.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Coefficient directeur</p>
            <MathBlock tex="m=\dfrac{y_B-y_A}{x_B-x_A}" className="katex-formula-block mt-2 text-center text-lg" />
            <p className="mt-2 text-sm text-foreground-muted">
              Valable pour une droite <Math tex="(AB)" />, à condition que <Math tex="x_B\neq x_A" />.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Appartenance</p>
            <MathBlock tex="y_A=mx_A+p \iff A\in(\Delta)" className="katex-formula-block mt-2 text-center text-lg" />
            <p className="mt-2 text-sm text-foreground-muted">On remplace les coordonnées de <Math tex="A" /> dans l&apos;équation.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Droites parallèles</p>
            <MathBlock tex="(D)\parallel(\Delta) \iff m=m'" className="katex-formula-block mt-2 text-center text-lg" />
            <p className="mt-2 text-sm text-foreground-muted">Même coefficient directeur.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Droites perpendiculaires</p>
            <MathBlock tex="(D)\perp(\Delta) \iff m\times m'=-1" className="katex-formula-block mt-2 text-center text-lg" />
            <p className="mt-2 text-sm text-foreground-muted">Le produit des coefficients directeurs vaut <Math tex="-1" />.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Cas particuliers</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li className="flex items-center justify-between gap-2 border-b border-dashed border-border pb-1.5">
                <Math tex="y=m\ (m\neq0)" /> <span className="font-semibold text-foreground">∥ axe des x</span>
              </li>
              <li className="flex items-center justify-between gap-2">
                <Math tex="x=n\ (n\neq0)" /> <span className="font-semibold text-foreground">∥ axe des y</span>
              </li>
            </ul>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="7 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises l'équation d'une droite.">
          <ExerciseCard
            id="1"
            index={1}
            title="Équation réduite de (AB)"
            itemsLabel="5 questions"
            items={
              <>
                <p className="text-sm">
                  Le plan est muni d&apos;un repère orthonormé <Math tex="(O;I;J)" />. On considère <Math tex="A(-1\,;-4)" /> et <Math tex="B(3\,;4)" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-foreground-muted">
                  <li>Tracer la droite <Math tex="(AB)" />.</li>
                  <li>Donner le coefficient directeur de <Math tex="(AB)" />.</li>
                  <li>Donner l&apos;ordonnée à l&apos;origine de <Math tex="(AB)" />.</li>
                  <li>Donner l&apos;équation réduite de <Math tex="(AB)" />.</li>
                  <li>Le point <Math tex="C(7\,;12)" /> appartient-il à <Math tex="(AB)" /> ?</li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">1. Tracé de (AB)</p>
                  <div className="mt-2 rounded-xl bg-surface p-4">
                    <svg viewBox="0 0 284 420" className="mx-auto h-auto w-full max-w-[240px]" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <marker id="ar475569b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                          <path d="M0,0 L10,5 L0,10 z" fill="#475569" />
                        </marker>
                        <marker id="ar7c3aedb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                          <path d="M0,0 L10,5 L0,10 z" fill="#7c3aed" />
                        </marker>
                      </defs>
                      <g stroke="#e2e8f0" strokeWidth="1">
                        <line x1="40.0" y1="380.0" x2="40.0" y2="40.0" />
                        <line x1="74.0" y1="380.0" x2="74.0" y2="40.0" />
                        <line x1="108.0" y1="380.0" x2="108.0" y2="40.0" />
                        <line x1="142.0" y1="380.0" x2="142.0" y2="40.0" />
                        <line x1="176.0" y1="380.0" x2="176.0" y2="40.0" />
                        <line x1="210.0" y1="380.0" x2="210.0" y2="40.0" />
                        <line x1="244.0" y1="380.0" x2="244.0" y2="40.0" />
                        <line x1="40.0" y1="380.0" x2="244.0" y2="380.0" />
                        <line x1="40.0" y1="346.0" x2="244.0" y2="346.0" />
                        <line x1="40.0" y1="312.0" x2="244.0" y2="312.0" />
                        <line x1="40.0" y1="278.0" x2="244.0" y2="278.0" />
                        <line x1="40.0" y1="244.0" x2="244.0" y2="244.0" />
                        <line x1="40.0" y1="210.0" x2="244.0" y2="210.0" />
                        <line x1="40.0" y1="176.0" x2="244.0" y2="176.0" />
                        <line x1="40.0" y1="142.0" x2="244.0" y2="142.0" />
                        <line x1="40.0" y1="108.0" x2="244.0" y2="108.0" />
                        <line x1="40.0" y1="74.0" x2="244.0" y2="74.0" />
                        <line x1="40.0" y1="40.0" x2="244.0" y2="40.0" />
                      </g>
                      <line x1="26.0" y1="210.0" x2="262.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#ar475569b)" />
                      <text x="265.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
                      <line x1="108.0" y1="394.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#ar475569b)" />
                      <text x="94.0" y="20.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
                      <g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
                        <text x="40.0" y="226.0" textAnchor="middle">-2</text>
                        <text x="74.0" y="226.0" textAnchor="middle">-1</text>
                        <text x="142.0" y="226.0" textAnchor="middle">1</text>
                        <text x="176.0" y="226.0" textAnchor="middle">2</text>
                        <text x="210.0" y="226.0" textAnchor="middle">3</text>
                        <text x="244.0" y="226.0" textAnchor="middle">4</text>
                        <text x="100.0" y="383.5" textAnchor="end">-5</text>
                        <text x="100.0" y="349.5" textAnchor="end">-4</text>
                        <text x="100.0" y="315.5" textAnchor="end">-3</text>
                        <text x="100.0" y="281.5" textAnchor="end">-2</text>
                        <text x="100.0" y="247.5" textAnchor="end">-1</text>
                        <text x="100.0" y="179.5" textAnchor="end">1</text>
                        <text x="100.0" y="145.5" textAnchor="end">2</text>
                        <text x="100.0" y="111.5" textAnchor="end">3</text>
                        <text x="100.0" y="77.5" textAnchor="end">4</text>
                        <text x="100.0" y="43.5" textAnchor="end">5</text>
                        <text x="100.0" y="226.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
                      </g>
                      <line x1="74.0" y1="346.0" x2="74.0" y2="210.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="74.0" y1="346.0" x2="108.0" y2="346.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="210.0" y1="74.0" x2="210.0" y2="210.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="210.0" y1="74.0" x2="108.0" y2="74.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="57.0" y1="380.0" x2="227.0" y2="40.0" stroke="#7c3aed" strokeWidth="2.6" markerStart="url(#ar7c3aedb)" markerEnd="url(#ar7c3aedb)" />
                      <text x="235.0" y="54.0" fontSize="14" fontStyle="italic" fontWeight="700" fill="#7c3aed">(AB)</text>
                      <circle cx="74.0" cy="346.0" r="4.5" fill="#e11d48" stroke="white" strokeWidth="1.5" />
                      <text x="56.0" y="364.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#e11d48">A</text>
                      <circle cx="210.0" cy="74.0" r="4.5" fill="#2563eb" stroke="white" strokeWidth="1.5" />
                      <text x="219.0" y="66.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#2563eb">B</text>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">2. Coefficient directeur</p>
                  <MathBlock tex="m=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{4-(-4)}{3-(-1)}=\dfrac{8}{4}=2" className="katex-formula-block mt-1 text-base" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">3. Ordonnée à l&apos;origine</p>
                  <p className="mt-1 text-foreground-muted">On a <Math tex="A\in(AB)" /> : <Math tex="y_A=2x_A+p" /></p>
                  <MathBlock tex="-4=2\times(-1)+p \;\Rightarrow\; -4=-2+p \;\Rightarrow\; p=-2" className="katex-formula-block mt-1 text-base" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">4. Équation réduite</p>
                  <MathBlock tex="\boxed{y=2x-2}" className="katex-formula-block mt-1 text-lg font-bold text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">5. Appartenance de C(7 ; 12)</p>
                  <MathBlock tex="2\times7-2=14-2=12=y_C" className="katex-formula-block mt-1 text-base" />
                  <p className="mt-2"><ResultChip ok><Math tex="C \in (AB)" /></ResultChip></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Forme réduite"
            itemsLabel="6 équations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="D"><Math tex="(D): 5x=2-y" /></Item>
                <Item n="D'"><Math tex="(D'): y-\dfrac34=2x" /></Item>
                <Item n="Δ"><Math tex="(\Delta): 2y=4x+6" /></Item>
                <Item n="Δ'"><Math tex="(\Delta'): 3y-5x=9" /></Item>
                <Item n="M"><Math tex="(M): 3y-6x+12=0" /></Item>
                <Item n="M'"><Math tex="(M'): y-7=5(x-2)" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="D"><Math tex="y=-5x+2" /></CorrectionCard>
                <CorrectionCard n="D'"><Math tex="y=2x+\dfrac34" /></CorrectionCard>
                <CorrectionCard n="Δ"><Math tex="y=2x+3" /></CorrectionCard>
                <CorrectionCard n="Δ'"><Math tex="y=\dfrac53x+3" /></CorrectionCard>
                <CorrectionCard n="M"><Math tex="y=2x-4" /></CorrectionCard>
                <CorrectionCard n="M'"><Math tex="y=5x-3" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Construire une équation"
            itemsLabel="4 droites"
            items={
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                <li><Math tex="(\Delta)" /> de coefficient directeur <Math tex="3" />, passant par <Math tex="A(0\,;-3)" />.</li>
                <li><Math tex="(\Delta')" /> de pente <Math tex="\dfrac23" />, passant par <Math tex="B(2\,;5)" />.</li>
                <li><Math tex="(D)" /> d&apos;ordonnée à l&apos;origine <Math tex="4" />, passant par <Math tex="C(5\,;0)" />.</li>
                <li><Math tex="(D')" /> de coefficient directeur <Math tex="\sqrt3" />, passant par l&apos;origine <Math tex="(O;I;J)" />.</li>
              </ol>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="y=3x+p \; ; \;\; -3=3\times0+p \;\Rightarrow\; p=-3" /> donc <Math tex="\mathbf{y=3x-3}" />
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="y=\dfrac23x+p \; ; \;\; 5=\dfrac23\times2+p=\dfrac43+p \;\Rightarrow\; p=\dfrac{11}{3}" /> donc <Math tex="\mathbf{y=\dfrac23x+\dfrac{11}{3}}" />
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="y=mx+4 \; ; \;\; 0=5m+4 \;\Rightarrow\; m=\dfrac{-4}{5}" /> donc <Math tex="\mathbf{y=\dfrac{-4}{5}x+4}" />
                </CorrectionCard>
                <CorrectionCard n={4}>
                  La droite passe par <Math tex="O(0\,;0)" />, donc <Math tex="p=0" /> : <Math tex="\mathbf{y=\sqrt3\,x}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Appartenance et inconnues"
            itemsLabel="2 questions"
            items={
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                <li>
                  Soit <Math tex="(D)" /> : <Math tex="y=3x-1" />. Parmi <Math tex="A(3\,;8)" />, <Math tex="B(4\,;-11)" />, <Math tex="C(7\,;22)" /> et <Math tex="D(0\,;1)" />, lesquels appartiennent à <Math tex="(D)" /> ?
                </li>
                <li>
                  Soit <Math tex="(\Delta)" /> : <Math tex="y=-2x+1" />. Calculer <Math tex="a" />, <Math tex="b" /> et <Math tex="c" /> sachant que <Math tex="E(a\,;-3)" />, <Math tex="F(b+1\,;-3b)" /> et <Math tex="G(-c\,;-3c+1)" /> appartiennent à <Math tex="(\Delta)" />.
                </li>
              </ol>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">1. Test de chaque point sur y = 3x − 1</p>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-surface p-3 text-center">
                      <p className="font-bold"><Math tex="A(3;8)" /></p>
                      <p className="mt-1 text-xs text-foreground-muted"><Math tex="3(3)-1=8" /></p>
                      <p className="mt-1 font-bold text-green-700">✓ appartient</p>
                    </div>
                    <div className="rounded-xl bg-surface p-3 text-center">
                      <p className="font-bold"><Math tex="B(4;-11)" /></p>
                      <p className="mt-1 text-xs text-foreground-muted"><Math tex="3(4)-1=11" /></p>
                      <p className="mt-1 font-bold text-rose-600">✗ n&apos;appartient pas</p>
                    </div>
                    <div className="rounded-xl bg-surface p-3 text-center">
                      <p className="font-bold"><Math tex="C(7;22)" /></p>
                      <p className="mt-1 text-xs text-foreground-muted"><Math tex="3(7)-1=20" /></p>
                      <p className="mt-1 font-bold text-rose-600">✗ n&apos;appartient pas</p>
                    </div>
                    <div className="rounded-xl bg-surface p-3 text-center">
                      <p className="font-bold"><Math tex="D(0;1)" /></p>
                      <p className="mt-1 text-xs text-foreground-muted"><Math tex="3(0)-1=-1" /></p>
                      <p className="mt-1 font-bold text-rose-600">✗ n&apos;appartient pas</p>
                    </div>
                  </div>
                  <p className="mt-3"><ResultChip ok>Seul le point <Math tex="A" /> appartient à <Math tex="(D)" /></ResultChip></p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">2. Calcul de a, b, c sur (Δ) : y = −2x + 1</p>
                  <div className="mt-3">
                    <Worked>
                      <Step n="a" title="E(a ; −3) ∈ (Δ)">
                        <MathBlock tex="-3=-2a+1 \;\Rightarrow\; -2a=-4 \;\Rightarrow\; a=2" className="katex-formula-block text-base" />
                      </Step>
                      <Step n="b" title="F(b+1 ; −3b) ∈ (Δ)">
                        <MathBlock tex="-3b=-2(b+1)+1=-2b-1 \;\Rightarrow\; -b=-1 \;\Rightarrow\; b=1" className="katex-formula-block text-base" />
                      </Step>
                      <Step n="c" title="G(−c ; −3c+1) ∈ (Δ)">
                        <MathBlock tex="-3c+1=-2(-c)+1=2c+1 \;\Rightarrow\; -5c=0 \;\Rightarrow\; c=0" className="katex-formula-block text-base" />
                      </Step>
                    </Worked>
                  </div>
                  <p className="mt-3">
                    <ResultChip ok><Math tex="a=2" />, <Math tex="b=1" />, <Math tex="c=0" /></ResultChip>
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Trois droites"
            itemsLabel="3 droites"
            items={
              <>
                <p className="text-sm">
                  Le plan est muni d&apos;un repère orthonormé <Math tex="(O;I;J)" />. On considère <Math tex="A(1\,;-1)" /> ; <Math tex="B(2\,;3)" /> ; <Math tex="C(-1\,;1)" /> et <Math tex="D(-2\,;3)" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-foreground-muted">
                  <li>Déterminer l&apos;équation réduite de <Math tex="(AB)" />.</li>
                  <li>Déterminer l&apos;équation réduite de <Math tex="(BC)" />.</li>
                  <li>Déterminer l&apos;équation réduite de <Math tex="(AD)" />.</li>
                </ol>
              </>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-xs font-bold text-foreground-muted uppercase">Droite (AB)</p>
                  <MathBlock tex="m=\dfrac{3-(-1)}{2-1}=4" className="katex-formula-block mt-2 text-sm" />
                  <MathBlock tex="-1=4(1)+p\Rightarrow p=-5" className="katex-formula-block mt-1 text-sm" />
                  <p className="mt-2 text-center text-base font-bold text-green-700"><Math tex="y=4x-5" /></p>
                </div>
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-xs font-bold text-foreground-muted uppercase">Droite (BC)</p>
                  <MathBlock tex="m=\dfrac{1-3}{-1-2}=\dfrac{2}{3}" className="katex-formula-block mt-2 text-sm" />
                  <MathBlock tex="3=\dfrac23(2)+p\Rightarrow p=\dfrac53" className="katex-formula-block mt-1 text-sm" />
                  <p className="mt-2 text-center text-base font-bold text-green-700"><Math tex="y=\dfrac23x+\dfrac53" /></p>
                </div>
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-xs font-bold text-foreground-muted uppercase">Droite (AD)</p>
                  <MathBlock tex="m=\dfrac{3-(-1)}{-2-1}=\dfrac{-4}{3}" className="katex-formula-block mt-2 text-sm" />
                  <MathBlock tex="-1=\dfrac{-4}{3}(1)+p\Rightarrow p=\dfrac13" className="katex-formula-block mt-1 text-sm" />
                  <p className="mt-2 text-center text-base font-bold text-green-700"><Math tex="y=\dfrac{-4}{3}x+\dfrac13" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Parallèles et perpendiculaires"
            itemsLabel="3 droites"
            items={
              <>
                <p className="text-sm">Le plan est muni d&apos;un repère orthonormé <Math tex="(O;I;J)" />.</p>
                <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-foreground-muted">
                  <li>
                    Déterminer l&apos;équation réduite de <Math tex="(D)" /> passant par <Math tex="A(1\,;2)" /> et parallèle à <Math tex="(L): y=3x+1" />.
                  </li>
                  <li>
                    Déterminer l&apos;équation réduite de <Math tex="(\Delta)" /> passant par <Math tex="B(2\,;3)" /> et parallèle à <Math tex="(M): y=\dfrac32x-1" />.
                  </li>
                  <li>
                    Déterminer l&apos;équation réduite de <Math tex="(D')" /> passant par <Math tex="C(1\,;-3)" /> et perpendiculaire à <Math tex="(K): y=\dfrac12x+3" />.
                  </li>
                </ol>
              </>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-xs font-bold text-foreground-muted uppercase"><Math tex="(D)\parallel(L)" /></p>
                  <MathBlock tex="m=3\;;\;\;2=3(1)+p\Rightarrow p=-1" className="katex-formula-block mt-2 text-sm" />
                  <p className="mt-2 text-center text-base font-bold text-green-700"><Math tex="y=3x-1" /></p>
                </div>
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-xs font-bold text-foreground-muted uppercase"><Math tex="(\Delta)\parallel(M)" /></p>
                  <MathBlock tex="m=\dfrac32\;;\;\;3=\dfrac32(2)+p\Rightarrow p=0" className="katex-formula-block mt-2 text-sm" />
                  <p className="mt-2 text-center text-base font-bold text-green-700"><Math tex="y=\dfrac32x" /></p>
                </div>
                <div className="rounded-xl bg-surface p-3">
                  <p className="text-xs font-bold text-foreground-muted uppercase"><Math tex="(D')\perp(K)" /></p>
                  <MathBlock tex="m\times\dfrac12=-1\Rightarrow m=-2" className="katex-formula-block mt-2 text-sm" />
                  <MathBlock tex="-3=-2(1)+p\Rightarrow p=-1" className="katex-formula-block mt-1 text-sm" />
                  <p className="mt-2 text-center text-base font-bold text-green-700"><Math tex="y=-2x-1" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Vecteurs, milieu et médiatrice"
            itemsLabel="5 questions"
            items={
              <>
                <p className="text-sm">
                  Le plan est muni d&apos;un repère orthonormé <Math tex="(O;I;J)" />. On considère <Math tex="A(2\,;3)" /> ; <Math tex="B(-2\,;5)" /> et <Math tex="C(2\,;2)" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                  <li>
                    Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" /> puis en déduire que <Math tex="AB=2\sqrt5" />.
                  </li>
                  <li>Déterminer les coordonnées du point <Math tex="M" />, milieu de <Math tex="[AB]" />.</li>
                  <li>Déterminer l&apos;équation réduite de <Math tex="(AB)" />.</li>
                  <li>Déterminer l&apos;équation réduite de <Math tex="(D)" /> passant par <Math tex="C" /> et parallèle à <Math tex="(AB)" />.</li>
                  <li>Déterminer l&apos;équation réduite de <Math tex="(\Delta)" />, médiatrice de <Math tex="[AB]" />.</li>
                </ol>
              </>
            }
            correction={
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-4 text-sm">
                  <Worked>
                    <Step n={1} title="Vecteur AB et distance AB">
                      <MathBlock tex="\overrightarrow{AB}\begin{pmatrix}x_B-x_A\\y_B-y_A\end{pmatrix}=\begin{pmatrix}-4\\2\end{pmatrix}" className="katex-formula-block text-base" />
                      <MathBlock tex="AB=\sqrt{(-4)^2+2^2}=\sqrt{16+4}=\sqrt{20}=2\sqrt5" className="katex-formula-block mt-2 text-base" />
                    </Step>
                    <Step n={2} title="Milieu M de [AB]">
                      <MathBlock tex="M\left(\dfrac{x_A+x_B}{2}\,;\dfrac{y_A+y_B}{2}\right)=M\left(\dfrac{2-2}{2}\,;\dfrac{3+5}{2}\right)" className="katex-formula-block text-base" />
                      <MathBlock tex="\boxed{M(0\,;4)}" className="katex-formula-block mt-2 text-lg font-bold text-green-700" />
                    </Step>
                    <Step n={3} title="Équation réduite de (AB)">
                      <MathBlock tex="m=\dfrac{y_B-y_A}{x_B-x_A}=\dfrac{5-3}{-2-2}=\dfrac{-1}{2}" className="katex-formula-block text-base" />
                      <MathBlock tex="3=\dfrac{-1}{2}(2)+p \Rightarrow p=4" className="katex-formula-block mt-2 text-base" />
                      <MathBlock tex="\boxed{y=\dfrac{-1}{2}x+4}" className="katex-formula-block mt-2 text-lg font-bold text-green-700" />
                    </Step>
                    <Step n={4} title="(D) passant par C, parallèle à (AB)">
                      <MathBlock tex="2=\dfrac{-1}{2}(2)+p \Rightarrow p=3" className="katex-formula-block text-base" />
                      <MathBlock tex="\boxed{y=\dfrac{-1}{2}x+3}" className="katex-formula-block mt-2 text-lg font-bold text-green-700" />
                    </Step>
                    <Step n="✓" title="(Δ) médiatrice de [AB]">
                      <p className="text-foreground-muted">
                        <Math tex="(\Delta)" /> passe par <Math tex="M(0\,;4)" /> et <Math tex="(\Delta)\perp(AB)" /> :
                      </p>
                      <MathBlock tex="m\times\dfrac{-1}{2}=-1 \Rightarrow m=2" className="katex-formula-block mt-2 text-base" />
                      <MathBlock tex="4=2(0)+p \Rightarrow p=4" className="katex-formula-block mt-2 text-base" />
                      <MathBlock tex="\boxed{y=2x+4}" className="katex-formula-block mt-2 text-lg font-bold text-green-700" />
                    </Step>
                  </Worked>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-surface p-4">
                  <svg viewBox="0 0 284 352" className="mx-auto h-auto w-full max-w-[320px]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="ar475569c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" fill="#475569" />
                      </marker>
                      <marker id="ar2563ebc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" fill="#2563eb" />
                      </marker>
                      <marker id="are11d48c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                        <path d="M0,0 L10,5 L0,10 z" fill="#e11d48" />
                      </marker>
                    </defs>
                    <g stroke="#e2e8f0" strokeWidth="1">
                      <line x1="40.0" y1="312.0" x2="40.0" y2="40.0" />
                      <line x1="74.0" y1="312.0" x2="74.0" y2="40.0" />
                      <line x1="108.0" y1="312.0" x2="108.0" y2="40.0" />
                      <line x1="142.0" y1="312.0" x2="142.0" y2="40.0" />
                      <line x1="176.0" y1="312.0" x2="176.0" y2="40.0" />
                      <line x1="210.0" y1="312.0" x2="210.0" y2="40.0" />
                      <line x1="244.0" y1="312.0" x2="244.0" y2="40.0" />
                      <line x1="40.0" y1="312.0" x2="244.0" y2="312.0" />
                      <line x1="40.0" y1="278.0" x2="244.0" y2="278.0" />
                      <line x1="40.0" y1="244.0" x2="244.0" y2="244.0" />
                      <line x1="40.0" y1="210.0" x2="244.0" y2="210.0" />
                      <line x1="40.0" y1="176.0" x2="244.0" y2="176.0" />
                      <line x1="40.0" y1="142.0" x2="244.0" y2="142.0" />
                      <line x1="40.0" y1="108.0" x2="244.0" y2="108.0" />
                      <line x1="40.0" y1="74.0" x2="244.0" y2="74.0" />
                      <line x1="40.0" y1="40.0" x2="244.0" y2="40.0" />
                    </g>
                    <line x1="26.0" y1="278.0" x2="262.0" y2="278.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#ar475569c)" />
                    <text x="265.0" y="283.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
                    <line x1="142.0" y1="326.0" x2="142.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#ar475569c)" />
                    <text x="128.0" y="20.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
                    <g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
                      <text x="40.0" y="294.0" textAnchor="middle">-3</text>
                      <text x="74.0" y="294.0" textAnchor="middle">-2</text>
                      <text x="108.0" y="294.0" textAnchor="middle">-1</text>
                      <text x="176.0" y="294.0" textAnchor="middle">1</text>
                      <text x="210.0" y="294.0" textAnchor="middle">2</text>
                      <text x="244.0" y="294.0" textAnchor="middle">3</text>
                      <text x="134.0" y="315.5" textAnchor="end">-1</text>
                      <text x="134.0" y="247.5" textAnchor="end">1</text>
                      <text x="134.0" y="213.5" textAnchor="end">2</text>
                      <text x="134.0" y="179.5" textAnchor="end">3</text>
                      <text x="134.0" y="145.5" textAnchor="end">4</text>
                      <text x="134.0" y="111.5" textAnchor="end">5</text>
                      <text x="134.0" y="77.5" textAnchor="end">6</text>
                      <text x="134.0" y="43.5" textAnchor="end">7</text>
                      <text x="134.0" y="294.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
                    </g>
                    <line x1="40.0" y1="91.0" x2="244.0" y2="193.0" stroke="#2563eb" strokeWidth="2.6" markerStart="url(#ar2563ebc)" markerEnd="url(#ar2563ebc)" />
                    <text x="6.0" y="81.0" fontSize="14" fontStyle="italic" fontWeight="700" fill="#2563eb">(AB)</text>
                    <line x1="57.0" y1="312.0" x2="193.0" y2="40.0" stroke="#e11d48" strokeWidth="2.6" markerStart="url(#are11d48c)" markerEnd="url(#are11d48c)" />
                    <text x="201.0" y="54.0" fontSize="14" fontStyle="italic" fontWeight="700" fill="#e11d48">(Δ)</text>
                    <circle cx="210.0" cy="176.0" r="4.5" fill="#2563eb" stroke="white" strokeWidth="1.5" />
                    <text x="219.0" y="182.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#2563eb">A</text>
                    <circle cx="74.0" cy="108.0" r="4.5" fill="#2563eb" stroke="white" strokeWidth="1.5" />
                    <text x="54.0" y="98.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#2563eb">B</text>
                    <circle cx="142.0" cy="142.0" r="4.5" fill="#059669" stroke="white" strokeWidth="1.5" />
                    <text x="151.0" y="158.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#059669">M</text>
                    <circle cx="210.0" cy="210.0" r="4.5" fill="#d97706" stroke="white" strokeWidth="1.5" />
                    <text x="219.0" y="228.0" fontSize="15" fontStyle="italic" fontWeight="700" fill="#d97706">C</text>
                  </svg>
                  <p className="mt-2 text-center text-xs font-semibold text-foreground-muted">
                    <Math tex="(AB)" /> en bleu et sa médiatrice <Math tex="(\Delta)" /> en rouge, sécantes en <Math tex="M" />
                  </p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
