import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Prisme Droit & Cylindre de Révolution · Cours et exercices | 1AC",
  description:
    "Cours complet sur le prisme droit et le cylindre de révolution (1ère année collège) : définitions, patrons, aire latérale, volume, et 4 exercices avec correction détaillée.",
  kicker: "1ʳᵉ Année Collège · Chapitre 8",
  heroTitle: "Prisme Droit & Cylindre de Révolution",
  heroSubtitle:
    "Définitions, patrons, aire latérale et volume du prisme droit et du cylindre de révolution, avec 4 exercices corrigés en détail.",
  footerNote: "Prisme droit et cylindre de révolution · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "prisme", label: "Prisme droit" },
    { id: "mesures-prisme", label: "Aire & volume (prisme)" },
    { id: "cylindre", label: "Cylindre" },
    { id: "mesures-cylindre", label: "Aire & volume (cylindre)" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Plain narrative reasoning step used inside multi-step corrections. */
function Step({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">{children}</div>;
}

/** Wrapper for a small illustrative diagram, optionally captioned. */
function Diagram({ children, caption }: { children: ReactNode; caption?: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      {children}
      {caption ? <p className="mt-1 text-center text-xs text-foreground-muted">{caption}</p> : null}
    </div>
  );
}

/** Small calculation box (a few stacked math lines on a tinted background). */
function CalcBox({ tone = "violet", children }: { tone?: "violet" | "green"; children: ReactNode }) {
  const cls = tone === "violet" ? "border-violet-200 bg-violet-50" : "border-green-500/20 bg-green-50";
  return <div className={`space-y-1 rounded-xl border p-4 text-sm ${cls}`}>{children}</div>;
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "4", label: "parties de cours" },
          { value: "4", label: "exercices" },
          { value: "100%", label: "corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#prisme"
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
          <svg viewBox="0 0 200 200" className="h-40 w-40 sm:h-56 sm:w-56" fill="none">
            <ellipse cx="100" cy="55" rx="55" ry="20" stroke="white" strokeWidth="2.5" />
            <line x1="45" y1="55" x2="45" y2="150" stroke="white" strokeWidth="2.5" />
            <line x1="155" y1="55" x2="155" y2="150" stroke="white" strokeWidth="2.5" />
            <path d="M45,150 A55,20 0 0,0 155,150" fill="none" stroke="white" strokeWidth="2.5" />
            <path d="M45,150 A55,20 0 0,1 155,150" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="20" y1="55" x2="20" y2="150" stroke="#fb923c" strokeWidth="2.5" />
          </svg>
        }
      />

      {/* ===================== I. PRISME DROIT ===================== */}
      <LessonSection
        id="prisme"
        kicker="01 · Définition et patron"
        title="Prisme droit"
        tone="light"
        description="Définition, éléments et patron d'un prisme droit."
      >
        <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 md:p-6">
          <p className="mb-2 text-xs font-bold text-rose-500 uppercase">Définition</p>
          <p className="mb-3 text-base leading-relaxed font-medium text-foreground md:text-lg">
            Un <strong>prisme droit</strong> est un solide qui possède :
          </p>
          <ul className="space-y-2 text-sm text-foreground md:text-base">
            <li className="flex gap-2">
              <span className="font-bold text-rose-500">•</span> Deux <strong>bases</strong> qui sont des polygones
              parallèles et superposables.
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-rose-500">•</span> Des <strong>faces latérales rectangulaires</strong>{" "}
              perpendiculaires aux bases.
            </li>
          </ul>
          <p className="mt-3 text-sm text-rose-800">
            La <strong>hauteur</strong> d&apos;un prisme droit est la longueur d&apos;un côté commun à deux faces
            latérales.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <p className="mb-3 text-center text-xs font-bold text-indigo-500 uppercase">Prisme droit à base triangulaire</p>
            <svg viewBox="0 0 170 190" className="mx-auto h-auto w-full max-w-[220px]">
              <polygon points="90,15 35,55 145,55" className="fill-indigo-100 stroke-indigo-500" strokeWidth="2" />
              <polygon points="90,125 35,165 145,165" className="fill-indigo-50 stroke-indigo-500" strokeWidth="2" fillOpacity="0.6" />
              <line x1="90" y1="15" x2="90" y2="125" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="35" y1="55" x2="35" y2="165" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="145" y1="55" x2="145" y2="165" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="10" y1="55" x2="10" y2="165" className="stroke-rose-500" strokeWidth="2" />
              <line x1="4" y1="55" x2="16" y2="55" className="stroke-rose-500" strokeWidth="2" />
              <line x1="4" y1="165" x2="16" y2="165" className="stroke-rose-500" strokeWidth="2" />
              <text x="0" y="115" fontSize="11" className="fill-rose-500 font-semibold">h</text>
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">
              Bases : deux <strong>triangles</strong> superposables · 3 faces latérales rectangulaires.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <p className="mb-3 text-center text-xs font-bold text-indigo-500 uppercase">Prisme droit à base pentagonale</p>
            <svg viewBox="0 0 170 190" className="mx-auto h-auto w-full max-w-[220px]">
              <polygon points="90,16.1 132.8,29.2 116.5,50.3 63.5,50.3 47.2,29.2" className="fill-indigo-100 stroke-indigo-500" strokeWidth="2" />
              <polygon points="90,126.1 132.8,139.2 116.5,160.3 63.5,160.3 47.2,139.2" className="fill-indigo-50 stroke-indigo-500" strokeWidth="2" fillOpacity="0.6" />
              <line x1="90" y1="16.1" x2="90" y2="126.1" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="132.8" y1="29.2" x2="132.8" y2="139.2" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="116.5" y1="50.3" x2="116.5" y2="160.3" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="63.5" y1="50.3" x2="63.5" y2="160.3" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="47.2" y1="29.2" x2="47.2" y2="139.2" className="stroke-indigo-500" strokeWidth="2" />
              <line x1="10" y1="29.2" x2="10" y2="139.2" className="stroke-rose-500" strokeWidth="2" />
              <line x1="4" y1="29.2" x2="16" y2="29.2" className="stroke-rose-500" strokeWidth="2" />
              <line x1="4" y1="139.2" x2="16" y2="139.2" className="stroke-rose-500" strokeWidth="2" />
              <text x="0" y="88" fontSize="11" className="fill-rose-500 font-semibold">h</text>
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">
              Bases : deux <strong>pentagones</strong> superposables · 5 faces latérales rectangulaires.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Patron d&apos;un prisme droit</h3>
          <div className="my-4 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-center">
            <p className="text-sm font-medium text-indigo-900">
              Le patron d&apos;un prisme droit est formé de ses <strong>deux bases</strong> et de ses{" "}
              <strong>faces latérales</strong>.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="text-center">
              <svg viewBox="-10 -55 170 185" className="mx-auto h-auto w-full max-w-[220px]">
                <polygon points="0,0 50,0 50,70 0,70" className="fill-indigo-50 stroke-indigo-500" strokeWidth="1.5" />
                <polygon points="50,0 100,0 100,70 50,70" className="fill-white stroke-indigo-500" strokeWidth="1.5" />
                <polygon points="100,0 150,0 150,70 100,70" className="fill-indigo-50 stroke-indigo-500" strokeWidth="1.5" />
                <polygon points="0,0 50,0 25,-43.3" className="fill-indigo-200/60 stroke-indigo-500" strokeWidth="1.5" />
                <polygon points="0,70 50,70 25,113.3" className="fill-indigo-200/60 stroke-indigo-500" strokeWidth="1.5" />
              </svg>
              <p className="mt-1 text-xs text-foreground-muted italic">Patron d&apos;un prisme droit à base triangulaire</p>
            </div>
            <div className="text-center">
              <svg viewBox="-15 -47 190 155" className="mx-auto h-auto w-full max-w-[240px]">
                <g>
                  <polygon points="0,0 26,0 26,60 0,60" className="fill-white stroke-indigo-500" strokeWidth="1.2" />
                  <polygon points="26,0 52,0 52,60 26,60" className="fill-indigo-50 stroke-indigo-500" strokeWidth="1.2" />
                  <polygon points="52,0 78,0 78,60 52,60" className="fill-white stroke-indigo-500" strokeWidth="1.2" />
                  <polygon points="78,0 104,0 104,60 78,60" className="fill-indigo-50 stroke-indigo-500" strokeWidth="1.2" />
                  <polygon points="104,0 130,0 130,60 104,60" className="fill-white stroke-indigo-500" strokeWidth="1.2" />
                  <polygon points="130,0 156,0 156,60 130,60" className="fill-indigo-50 stroke-indigo-500" strokeWidth="1.2" />
                  <polygon points="0,0 26,0 39,-22.5 26,-45 0,-45 -13,-22.5" className="fill-indigo-200/50 stroke-indigo-500" strokeWidth="1.2" />
                  <polygon points="0,60 26,60 39,82.5 26,105 0,105 -13,82.5" className="fill-indigo-200/50 stroke-indigo-500" strokeWidth="1.2" />
                </g>
              </svg>
              <p className="mt-1 text-xs text-foreground-muted italic">Patron d&apos;un prisme droit à base hexagonale</p>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. AIRE LATERALE & VOLUME PRISME ===================== */}
      <LessonSection
        id="mesures-prisme"
        kicker="02 · Deux formules à connaître"
        title="Aire latérale et volume du prisme droit"
        tone="muted"
        description="Deux formules essentielles à connaître par cœur."
      >
        <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Aire latérale d&apos;un prisme droit</h3>
          <p className="mt-2 text-sm text-foreground-muted">
            La <strong>surface latérale</strong> d&apos;un prisme droit correspond à l&apos;ensemble des faces
            latérales. L&apos;<strong>aire latérale</strong> est égale à l&apos;aire de cette surface latérale.
          </p>
          <FormulaBlock tex="\text{Aire latérale} = \text{Périmètre d'une base} \times \text{hauteur}" />
          <p className="mt-4 mb-3 text-xs font-bold text-violet-500 uppercase">Exemple</p>
          <div className="grid items-center gap-5 sm:grid-cols-2">
            <svg viewBox="0 0 220 220" className="mx-auto h-auto w-full max-w-[220px]">
              <polygon points="30,80 95,20 160,65" className="fill-violet-100 stroke-violet-500" strokeWidth="2" />
              <polygon points="30,190 95,130 160,175" className="fill-violet-50 stroke-violet-500" strokeWidth="2" fillOpacity="0.6" />
              <line x1="30" y1="80" x2="30" y2="190" className="stroke-violet-500" strokeWidth="2" />
              <line x1="95" y1="20" x2="95" y2="130" className="stroke-violet-500" strokeWidth="2" />
              <line x1="160" y1="65" x2="160" y2="175" className="stroke-violet-500" strokeWidth="2" />
              <text x="10" y="82" fontSize="12" className="fill-violet-700 font-semibold">A</text>
              <text x="167" y="67" fontSize="12" className="fill-violet-700 font-semibold">B</text>
              <text x="90" y="14" fontSize="12" className="fill-violet-700 font-semibold">C</text>
              <text x="10" y="198" fontSize="12" className="fill-violet-700 font-semibold">D</text>
              <text x="167" y="182" fontSize="12" className="fill-violet-700 font-semibold">E</text>
              <text x="90" y="122" fontSize="12" className="fill-violet-700 font-semibold">F</text>
              <text x="52" y="45" fontSize="10" className="fill-slate-500">5 cm</text>
              <text x="128" y="38" fontSize="10" className="fill-slate-500">2 cm</text>
              <text x="78" y="88" fontSize="10" className="fill-slate-500">6 cm</text>
              <text x="0" y="135" fontSize="10" className="fill-slate-500">8 cm</text>
            </svg>
            <CalcBox>
              <p>
                <Math tex="\text{Périmètre d'une base} = 6 + 5 + 2 = 13\text{ cm}" />
              </p>
              <p>
                <Math tex="\text{Hauteur} = 8\text{ cm}" />
              </p>
              <p className="font-bold">
                <Math tex="\text{Aire latérale} = 13 \times 8 = \mathbf{104\text{ cm}^2}" />
              </p>
            </CalcBox>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Volume d&apos;un prisme droit</h3>
          <p className="mt-2 text-sm text-foreground-muted">
            Le <strong>volume</strong> d&apos;un prisme droit est égal au produit de l&apos;aire d&apos;une base par
            la hauteur.
          </p>
          <FormulaBlock tex="\text{Volume} = \text{Aire d'une base} \times \text{hauteur}" />
          <p className="mt-4 mb-3 text-xs font-bold text-violet-500 uppercase">Exemple</p>
          <div className="grid items-center gap-5 sm:grid-cols-2">
            <svg viewBox="0 35 225 195" className="mx-auto h-auto w-full max-w-[220px]">
              <polygon points="95,195 185,195 95,105" className="fill-violet-50 stroke-violet-500" strokeWidth="1.5" fillOpacity="0.6" />
              <line x1="40" y1="150" x2="95" y2="195" className="stroke-violet-500" strokeWidth="1.5" />
              <line x1="130" y1="150" x2="185" y2="195" className="stroke-violet-500" strokeWidth="1.5" />
              <line x1="40" y1="60" x2="95" y2="105" className="stroke-violet-500" strokeWidth="1.5" />
              <polygon points="40,150 130,150 40,60" className="fill-white stroke-violet-500" strokeWidth="2" />
              <polyline points="40,142 48,142 48,150" className="stroke-violet-600" strokeWidth="1.5" fill="none" />
              <text x="22" y="163" fontSize="12" className="fill-violet-700 font-semibold">A</text>
              <text x="136" y="153" fontSize="12" className="fill-violet-700 font-semibold">B</text>
              <text x="22" y="55" fontSize="12" className="fill-violet-700 font-semibold">C</text>
              <text x="88" y="216" fontSize="12" className="fill-violet-700 font-semibold">D</text>
              <text x="190" y="200" fontSize="12" className="fill-violet-700 font-semibold">E</text>
              <text x="100" y="98" fontSize="12" className="fill-violet-700 font-semibold">F</text>
              <text x="78" y="167" fontSize="10" className="fill-slate-500">3 cm</text>
              <text x="8" y="108" fontSize="10" className="fill-slate-500">4 cm</text>
              <text x="45" y="185" fontSize="10" className="fill-slate-500">6 cm</text>
            </svg>
            <CalcBox>
              <p>Les bases du prisme ABCDEF sont les triangles rectangles ABC et DEF.</p>
              <p>
                <Math tex="\text{Aire(ABC)} = \dfrac{AB \times AC}{2} = \dfrac{3 \times 4}{2} = 6\text{ cm}^2" />
              </p>
              <p>La hauteur du prisme est égale à 6 cm.</p>
              <p className="font-bold">
                <Math tex="V = 6 \times 6 = \mathbf{36\text{ cm}^3}" />
              </p>
            </CalcBox>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. CYLINDRE DE REVOLUTION ===================== */}
      <LessonSection
        id="cylindre"
        kicker="03 · Définition et patron"
        title="Cylindre de révolution"
        tone="light"
        description="Définition, éléments et patron d'un cylindre de révolution."
      >
        <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 md:p-6">
          <p className="mb-2 text-xs font-bold text-rose-500 uppercase">Définition</p>
          <p className="mb-3 text-base leading-relaxed font-medium text-foreground md:text-lg">
            Un <strong>cylindre de révolution</strong> est un solide qui possède :
          </p>
          <ul className="space-y-2 text-sm text-foreground md:text-base">
            <li className="flex gap-2">
              <span className="font-bold text-rose-500">•</span> Deux <strong>bases</strong> qui sont des disques
              parallèles et superposables.
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-rose-500">•</span> Une <strong>surface latérale</strong>.
            </li>
          </ul>
          <p className="mt-3 text-sm text-rose-800">
            L&apos;<strong>axe du cylindre</strong> est la droite passant par les centres des deux disques de base.
            La <strong>hauteur</strong> du cylindre est la distance séparant les deux centres.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-5 md:p-6">
            <p className="mb-3 text-xs font-bold text-sky-500 uppercase">Exemple</p>
            <svg viewBox="0 0 220 220" className="h-auto w-full max-w-[200px]">
              <ellipse cx="110" cy="55" rx="60" ry="22" className="fill-sky-100 stroke-sky-500" strokeWidth="2" />
              <line x1="50" y1="55" x2="50" y2="165" className="stroke-sky-500" strokeWidth="2" />
              <line x1="170" y1="55" x2="170" y2="165" className="stroke-sky-500" strokeWidth="2" />
              <path d="M50,165 A60,22 0 0,0 170,165" fill="none" className="stroke-sky-500" strokeWidth="2" />
              <path d="M50,165 A60,22 0 0,1 170,165" fill="none" strokeDasharray="3,3" className="stroke-sky-400" />
              <line x1="110" y1="55" x2="110" y2="165" strokeDasharray="3,3" className="stroke-slate-400" />
              <line x1="25" y1="55" x2="25" y2="165" className="stroke-rose-500" strokeWidth="1.5" />
              <text x="6" y="115" fontSize="11" className="fill-rose-500 font-semibold">h</text>
              <text x="103" y="50" fontSize="12" className="fill-sky-700 font-semibold">A</text>
              <text x="103" y="178" fontSize="12" className="fill-sky-700 font-semibold">B</text>
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">Cylindre de révolution d&apos;axe (AB).</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 md:p-6">
            <h3 className="mb-1 text-center font-display text-lg font-bold text-foreground">Patron d&apos;un cylindre</h3>
            <p className="my-3 text-center text-sm text-foreground-muted">
              Formé de ses deux disques de base et d&apos;un <strong>rectangle</strong> dont les dimensions sont la{" "}
              <strong>hauteur</strong> du cylindre et le <strong>périmètre</strong> d&apos;un disque de base.
            </p>
            <svg viewBox="0 0 220 240" className="mx-auto h-auto w-full max-w-[190px]">
              <ellipse cx="110" cy="35" rx="45" ry="18" className="fill-sky-50 stroke-sky-500" strokeWidth="1.5" />
              <text x="95" y="30" fontSize="10" className="fill-slate-500">2 cm</text>
              <rect x="30" y="60" width="160" height="70" className="fill-white stroke-sky-500" strokeWidth="1.5" />
              <text x="95" y="100" fontSize="10" className="fill-slate-500">12,56 cm</text>
              <text x="10" y="98" fontSize="10" className="fill-slate-500">5 cm</text>
              <ellipse cx="110" cy="155" rx="45" ry="18" className="fill-sky-50 stroke-sky-500" strokeWidth="1.5" />
            </svg>
            <p className="mt-2 text-xs text-foreground-muted">
              Rayon 2 cm, hauteur 5 cm <Math tex="\to" /> Périmètre <Math tex="= 2 \times \pi \times 2 = 4 \times \pi \approx 12{,}56\text{ cm}" />{" "}
              (longueur du rectangle) ; largeur = hauteur = <strong>5 cm</strong>.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== IV. AIRE LATERALE & VOLUME CYLINDRE ===================== */}
      <LessonSection
        id="mesures-cylindre"
        kicker="04 · Les mêmes formules, au disque"
        title="Aire latérale et volume du cylindre"
        tone="muted"
        description="Les mêmes formules que pour le prisme, appliquées au disque."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 font-display text-lg font-bold text-foreground">Aire latérale</h3>
            <div className="my-3 rounded-xl border border-green-500/20 bg-green-50 p-3 text-center">
              <p className="text-sm font-bold text-green-700">
                <Math tex="\text{Aire latérale} = \text{Périmètre d'une base} \times \text{hauteur}" />
              </p>
            </div>
            <p className="mb-3 text-sm text-foreground-muted">
              Quelle est l&apos;aire latérale d&apos;un cylindre de révolution de rayon 3 cm et de hauteur 4 cm ?
            </p>
            <CalcBox tone="green">
              <p>
                <Math tex="\text{Périmètre} = 2 \times \pi \times R = 2 \times \pi \times 3 = 6 \times \pi \approx 18{,}8\text{ cm}" />
              </p>
              <p>
                <Math tex="\text{Hauteur} = 4\text{ cm}" />
              </p>
              <p className="font-bold">
                <Math tex="\text{Aire latérale} \approx 18{,}8 \times 4 \approx \mathbf{75{,}2\text{ cm}^2}" />
              </p>
            </CalcBox>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <h3 className="mb-1 font-display text-lg font-bold text-foreground">Volume</h3>
            <div className="my-3 rounded-xl border border-green-500/20 bg-green-50 p-3 text-center">
              <p className="text-sm font-bold text-green-700">
                <Math tex="\text{Volume} = \text{Aire d'une base} \times \text{hauteur}" />
              </p>
            </div>
            <p className="mb-3 text-sm text-foreground-muted">
              Les bases sont des disques de rayon 6 cm. La hauteur du cylindre est égale à 5 cm.
            </p>
            <CalcBox tone="green">
              <p>
                <Math tex="\text{Aire} = \pi \times R^2 = \pi \times 6^2 = 36 \times \pi \approx 113\text{ cm}^2" />
              </p>
              <p>
                <Math tex="V \approx 113 \times 5" />
              </p>
              <p className="font-bold">
                <Math tex="V \approx \mathbf{565\text{ cm}^3}" />
              </p>
            </CalcBox>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="4 exercices corrigés"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={4} celebrationTitle="Bravo, les 4 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le prisme droit et le cylindre de révolution.">
          <ExerciseCard
            id="1"
            index={1}
            title="Propriétés d'un prisme"
            items={
              <>
                <p className="mb-3 text-sm text-foreground-muted">Compléter :</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5 rounded-xl border border-border bg-surface-muted p-4 text-sm text-foreground">
                    <p className="font-semibold">
                      1. Un prisme a <span className="text-amber-600">……………</span> sommets.
                    </p>
                    <p>a. Quel est le nombre de ses arêtes ?</p>
                    <p>b. Quel est le nombre de ses faces ?</p>
                    <p>c. Quelle est la nature de ses bases ?</p>
                  </div>
                  <div className="space-y-1.5 rounded-xl border border-border bg-surface-muted p-4 text-sm text-foreground">
                    <p className="font-semibold">
                      2. Un prisme a <span className="text-amber-600">……………</span> arêtes.
                    </p>
                    <p>a. Quel est le nombre de ses faces ?</p>
                    <p>b. Quelle est la nature de ses bases ?</p>
                    <p>c. Quel est le nombre de ses sommets ?</p>
                  </div>
                </div>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <div className="flex flex-col items-center gap-4 rounded-lg border border-green-500/20 bg-surface p-3.5 sm:flex-row">
                  <svg viewBox="0 0 150 190" className="h-auto w-full shrink-0 sm:w-32">
                    <polygon points="70,17.4 109.9,29.5 94.7,49.3 45.3,49.3 30.1,29.5" className="fill-amber-100 stroke-amber-500" strokeWidth="2" />
                    <polygon points="70,112.4 109.9,124.5 94.7,144.3 45.3,144.3 30.1,124.5" className="fill-amber-50 stroke-amber-500" strokeWidth="2" fillOpacity="0.6" />
                    <line x1="70" y1="17.4" x2="70" y2="112.4" className="stroke-amber-500" strokeWidth="2" />
                    <line x1="109.9" y1="29.5" x2="109.9" y2="124.5" className="stroke-amber-500" strokeWidth="2" />
                    <line x1="94.7" y1="49.3" x2="94.7" y2="144.3" className="stroke-amber-500" strokeWidth="2" />
                    <line x1="45.3" y1="49.3" x2="45.3" y2="144.3" className="stroke-amber-500" strokeWidth="2" />
                    <line x1="30.1" y1="29.5" x2="30.1" y2="124.5" className="stroke-amber-500" strokeWidth="2" />
                    <text x="66" y="12" fontSize="10" className="fill-amber-700 font-semibold">n côtés</text>
                    <text x="8" y="90" fontSize="10" className="fill-amber-700 font-semibold">2n sommets</text>
                  </svg>
                  <p className="text-sm text-foreground">
                    On note <Math tex="n" /> le nombre de côtés du polygone de base (ici n = 5). Un prisme droit
                    possède 2 bases à n sommets et n faces latérales.
                  </p>
                </div>
                <Step>
                  <strong>1.</strong> Un prisme a <Math tex="\mathbf{2n}" /> sommets. a. Arêtes = <Math tex="\mathbf{3n}" />
                  . b. Faces = <Math tex="\mathbf{n+2}" />. c. Les bases sont des <strong>polygones à n côtés</strong>.
                </Step>
                <Step>
                  <strong>2.</strong> Un prisme a <Math tex="\mathbf{3n}" /> arêtes. a. Faces = <Math tex="\mathbf{n+2}" />
                  . b. Les bases sont des <strong>polygones à n côtés</strong>. c. Sommets = <Math tex="\mathbf{2n}" />.
                </Step>
                <Step>
                  <strong>Exemple :</strong> pour un prisme à base triangulaire (n = 3) : 6 sommets, 9 arêtes, 5
                  faces, ce qui correspond bien à <Math tex="2n=6" />, <Math tex="3n=9" /> et <Math tex="n+2=5" />.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Bases et faces latérales"
            items={
              <>
                <p className="mb-4 text-sm text-foreground-muted">
                  Nommer les bases et les faces latérales de chaque prisme droit :
                </p>
                <div className="overflow-x-auto rounded-xl border border-border bg-surface-muted p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="data:image/png;base64,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Ugs2aIxVqCuVnCIYXPMVXwS4oxZf68XZksDECUCQIRbt17/+9a9+9ausrCxsnqEEO7Qakgzgsnb69Gm4rG3duvWZZ57JycmZ+DBsSQIkQAIkED4CFGrhY8meSCDmCSCN4MKFC6+88srRo0dRlB2ZBKEpFxcXo3JUaWkpYtTWrFnDHbWYX0lOkARIIFEIUKglykrzPkkgRACJn93d3ahSAK0G0QbphrrsqBy1YMECZBigWLtGo0m04gR8NkiABEggZglQqMXs0nBiJBBZAjjuRMgadBv8byHO8IrseOydBEiABEhAPAEKNfHM2IIESIAESIAESIAEJCFAw1tJMHMQEiABEiABEiABEhBPgEJNPDO2IAESIAESIAESIAFJCFCoSYKZg5AACZAACZAACZCAeAIUauKZsQUJkAAJkAAJkAAJSEKAQk0SzByEBEiABEiABEiABMQToFATz4wtSIAESIAESIAESEASAhRqkmDmICRAAiRAAiRAAiQgngCFmnhmbEECJEACJEACJEACkhCgUJMEMwchARIgARIgARIgAfEEKNTEM2MLEiABEiABEiABEpCEAIWaJJg5CAmQAAmQAAmQAAmIJ0ChJp4ZW5AACZAACZAACZCAJAQo1CTBzEFIgARIgARIgARIQDwBCjXxzNiCBEiABEiABEiABCQhQKEmCWYOQgIkQAIkQAIkQALiCVCoiWfGFiRAAiRAAiRAAiQgCQEKNUkwcxASIAESIAESIAESEE+AQk08M7YgARIgARIgARIgAUkIUKhJgpmDkAAJkAAJkAAJkIB4AhRq4pmxBQmQAAmQAAmQAAlIQoBCTRLMHIQESIAESIAESIAExBOgUBPPjC1IgARIgARIgARIQBICFGqSYOYgJEACJEACJEACJCCeAIWaeGZsQQIkQAIkQAIkQAKSEKBQkwQzByEBEiABEiABEiAB8QQo1MQzYwsSIAESIAESIAESkIQAhZokmDkICZAACZAACZAACYgnQKEmnhlbkAAJkAAJkAAJkIAkBCjUJMHMQUiABEiABEiABEhAPAEKNfHM2IIESIAESIAESIAEJCFAoSYJZg5CAiRAAiRAAiRAAuIJUKiJZ8YWJEACJEACJEACJCAJAQo1STBzEBIgARIgARIgARIQT4BCTTwztiABEiABEiABEiABSQhQqEmCmYOQAAmQAAmQAAmQgHgCFGrimbEFCZAACZAACZAACUhCgEJNEswchARIgARIgARIgATEE6BQE8+MLUiABEiABEiABEhAEgIUapJg5iAkQAIkQAIkQAIkIJ4AhZp4ZmxBAiRAAiRAAiRAApIQoFCTBDMHIQESIAESIAESIAHxBCjUxDNjCxIgARIgARIgARKQhACFmiSYOQgJkAAJkAAJkAAJiCdAoSaeGVuQAAmQAAmQAAmQgCQEKNQkwcxBSIAESIAESIAESEA8AQo18czYggRIgARIgARIgAQkIUChJglmDkICJEACJEACJEAC4gn8P8cFs5mpkn7eAAAAAElFTkSuQmCC"
                    alt="Quatre prismes droits numérotés 1 à 4, à identifier"
                    className="mx-auto h-auto max-w-full"
                    style={{ minWidth: 600 }}
                  />
                </div>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <div className="flex flex-wrap justify-center gap-6 rounded-lg border border-green-500/20 bg-surface p-4">
                  <div className="text-center">
                    <svg viewBox="-15 -30 130 130" className="mx-auto h-auto w-28">
                      <polygon points="0,0 70,0 70,80 0,80" className="fill-emerald-100 stroke-emerald-600" strokeWidth="2" />
                      <polygon points="30,-22 100,-22 100,58 30,58" className="fill-emerald-50 stroke-emerald-600" strokeWidth="2" fillOpacity="0.7" />
                      <line x1="0" y1="0" x2="30" y2="-22" className="stroke-emerald-600" strokeWidth="2" />
                      <line x1="70" y1="0" x2="100" y2="-22" className="stroke-emerald-600" strokeWidth="2" />
                      <line x1="70" y1="80" x2="100" y2="58" className="stroke-emerald-600" strokeWidth="2" />
                      <line x1="0" y1="80" x2="30" y2="58" className="stroke-emerald-600" strokeWidth="2" />
                      <text x="-9" y="4" fontSize="9" className="fill-emerald-800 font-semibold">A</text>
                      <text x="74" y="4" fontSize="9" className="fill-emerald-800 font-semibold">B</text>
                      <text x="74" y="90" fontSize="9" className="fill-emerald-800 font-semibold">C</text>
                      <text x="-9" y="90" fontSize="9" className="fill-emerald-800 font-semibold">D</text>
                      <text x="26" y="-26" fontSize="9" className="fill-emerald-800 font-semibold">E</text>
                      <text x="103" y="-26" fontSize="9" className="fill-emerald-800 font-semibold">F</text>
                      <text x="103" y="66" fontSize="9" className="fill-emerald-800 font-semibold">G</text>
                      <text x="26" y="66" fontSize="9" className="fill-emerald-800 font-semibold">H</text>
                    </svg>
                    <p className="mt-1 text-[11px] text-green-700">
                      Prismes 1 &amp; 2 (même solide)
                      <br />
                      bases <strong>ABCD</strong>/<strong>EFGH</strong> (en avant-plan)
                    </p>
                  </div>
                  <div className="text-center">
                    <svg viewBox="0 0 100 90" className="mx-auto h-auto w-24">
                      <polygon points="45,10 10,45 85,45" className="fill-emerald-100 stroke-emerald-600" strokeWidth="2" />
                      <polygon points="45,80 10,115 85,115" className="fill-emerald-50 stroke-emerald-600" strokeWidth="2" fillOpacity="0.6" transform="translate(0,-38)" />
                      <line x1="45" y1="10" x2="45" y2="42" className="stroke-emerald-600" strokeWidth="2" />
                      <line x1="10" y1="45" x2="10" y2="77" className="stroke-emerald-600" strokeWidth="2" />
                      <line x1="85" y1="45" x2="85" y2="77" className="stroke-emerald-600" strokeWidth="2" />
                      <text x="45" y="6" fontSize="9" textAnchor="middle" className="fill-emerald-800 font-semibold">A</text>
                      <text x="2" y="43" fontSize="9" className="fill-emerald-800 font-semibold">B</text>
                      <text x="88" y="43" fontSize="9" className="fill-emerald-800 font-semibold">C</text>
                      <text x="45" y="86" fontSize="9" textAnchor="middle" className="fill-emerald-800 font-semibold">D</text>
                      <text x="2" y="83" fontSize="9" className="fill-emerald-800 font-semibold">E</text>
                      <text x="88" y="83" fontSize="9" className="fill-emerald-800 font-semibold">F</text>
                    </svg>
                    <p className="mt-1 text-[11px] text-green-700">
                      Prisme 3
                      <br />
                      bases <strong>ABC</strong>/<strong>DEF</strong>
                    </p>
                  </div>
                  <div className="text-center">
                    <svg viewBox="0 0 100 90" className="mx-auto h-auto w-24">
                      <polygon points="45,10 10,45 85,45" className="fill-emerald-100 stroke-emerald-600" strokeWidth="2" />
                      <polygon points="45,80 10,115 85,115" className="fill-emerald-50 stroke-emerald-600" strokeWidth="2" fillOpacity="0.6" transform="translate(0,-38)" />
                      <line x1="45" y1="10" x2="45" y2="42" className="stroke-emerald-600" strokeWidth="2" />
                      <line x1="10" y1="45" x2="10" y2="77" className="stroke-emerald-600" strokeWidth="2" />
                      <line x1="85" y1="45" x2="85" y2="77" className="stroke-emerald-600" strokeWidth="2" />
                      <text x="45" y="6" fontSize="9" textAnchor="middle" className="fill-emerald-800 font-semibold">D</text>
                      <text x="2" y="43" fontSize="9" className="fill-emerald-800 font-semibold">E</text>
                      <text x="88" y="43" fontSize="9" className="fill-emerald-800 font-semibold">F</text>
                      <text x="45" y="86" fontSize="9" textAnchor="middle" className="fill-emerald-800 font-semibold">A</text>
                      <text x="2" y="83" fontSize="9" className="fill-emerald-800 font-semibold">C</text>
                      <text x="88" y="83" fontSize="9" className="fill-emerald-800 font-semibold">B</text>
                    </svg>
                    <p className="mt-1 text-[11px] text-green-700">
                      Prisme 4
                      <br />
                      bases <strong>DEF</strong>/<strong>ACB</strong>
                    </p>
                  </div>
                </div>
                <Step>
                  <strong>Prisme 1 :</strong> Bases = <strong>ABCD</strong> et <strong>EFGH</strong> (carrés). Faces
                  latérales = <strong>ABFE, BCGF, CDHG, DAEH</strong> (rectangles).
                </Step>
                <Step>
                  <strong>Prisme 2 :</strong> Bases = <strong>ABCD</strong> et <strong>EFGH</strong> (même solide vu
                  sous un autre angle). Faces latérales = <strong>ABFE, BCGF, CDHG, DAEH</strong> (rectangles).
                </Step>
                <Step>
                  <strong>Prisme 3 :</strong> Bases = triangles <strong>ABC</strong> et <strong>DEF</strong>. Faces
                  latérales = <strong>ABED, BCFE, CADF</strong> (rectangles).
                </Step>
                <Step>
                  <strong>Prisme 4 :</strong> Bases = triangles <strong>DEF</strong> et <strong>ACB</strong> (en
                  associant D↔A, E↔C, F↔B). Faces latérales = <strong>DECA, EFBC, FDAB</strong> (rectangles).
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Cylindre de révolution (QCM)"
            items={
              <>
                <p className="mb-3 text-sm text-foreground-muted">Choisir la bonne réponse, justifier par une figure.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm text-foreground">
                    <p className="mb-2 font-semibold">1. Le patron d&apos;un cylindre de révolution est constitué :</p>
                    <ul className="list-inside list-disc space-y-1">
                      <li>D&apos;un disque et d&apos;un rectangle.</li>
                      <li>De deux disques et d&apos;un rectangle.</li>
                      <li>De deux disques et d&apos;un carré.</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm text-foreground">
                    <p className="mb-2 font-semibold">2. Une des dimensions de la surface latérale d&apos;un cylindre est égale :</p>
                    <ul className="list-inside list-disc space-y-1">
                      <li>À l&apos;aire du disque de base.</li>
                      <li>Au périmètre du disque de base.</li>
                      <li>Au double de la hauteur.</li>
                    </ul>
                  </div>
                </div>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  <strong>1.</strong> Bonne réponse : <strong>« De deux disques et d&apos;un rectangle »</strong>. Le
                  patron d&apos;un cylindre est formé de ses deux bases (disques superposables) et d&apos;un
                  rectangle pour la surface latérale.
                </Step>
                <Step>
                  <strong>2.</strong> Bonne réponse : <strong>« Au périmètre du disque de base »</strong>. La
                  longueur du rectangle correspond au périmètre du disque de base ; sa largeur correspond à la
                  hauteur du cylindre.
                </Step>
                <Diagram>
                  <svg viewBox="0 0 220 180" className="mx-auto h-auto w-full max-w-[220px]">
                    <ellipse cx="110" cy="30" rx="40" ry="16" className="fill-emerald-50 stroke-emerald-500" strokeWidth="1.5" />
                    <rect x="40" y="50" width="140" height="60" className="fill-white stroke-emerald-500" strokeWidth="1.5" />
                    <text x="75" y="85" fontSize="10" className="fill-emerald-700 font-semibold">Périmètre du disque</text>
                    <text x="8" y="83" fontSize="10" className="fill-emerald-700 font-semibold">h</text>
                    <ellipse cx="110" cy="130" rx="40" ry="16" className="fill-emerald-50 stroke-emerald-500" strokeWidth="1.5" />
                  </svg>
                </Diagram>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Patron d'un prisme"
            items={
              <>
                <p className="mb-3 text-sm text-foreground-muted">Soit le prisme droit suivant :</p>
                <div className="mb-4 flex justify-center rounded-xl border border-border bg-surface-muted p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="data:image/png;base64,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"
                    alt="Prisme droit ABCDEF avec dimensions 2,5 cm, 3 cm, 2 cm et 3,9 cm"
                    className="h-auto max-w-full"
                    style={{ maxWidth: 380 }}
                  />
                </div>
                <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>
                    Les sommets sont : <span className="text-amber-600">………….</span>
                  </li>
                  <li>
                    Les faces sont : <span className="text-amber-600">………………</span>
                  </li>
                  <li>
                    Les arêtes sont : <span className="text-amber-600">………………</span>
                  </li>
                  <li>
                    Sa hauteur mesure <span className="text-amber-600">……….</span>
                  </li>
                  <li>
                    Les deux bases sont <span className="text-amber-600">…………</span>
                  </li>
                  <li>
                    Les faces latérales sont : <span className="text-amber-600">…………</span>
                  </li>
                  <li>Tracer un patron de ce prisme droit avec le codage correspondant, colorier ses deux bases.</li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  <strong>1. Sommets :</strong> A, B, C, D, E, F (6 sommets).
                </Step>
                <Step>
                  <strong>2. Faces :</strong> ABC, DEF (les 2 bases triangulaires) et ABED, BCFE, CADF (les 3 faces
                  latérales rectangulaires), soit 5 faces.
                </Step>
                <Step>
                  <strong>3. Arêtes :</strong> AB, BC, CA (base du haut), DE, EF, FD (base du bas), AD, BE, CF
                  (arêtes latérales), soit 9 arêtes.
                </Step>
                <Step>
                  <strong>4. Hauteur :</strong> AD = <strong>2 cm</strong>.
                </Step>
                <Step>
                  <strong>5. Bases :</strong> les triangles <strong>ABC</strong> et <strong>DEF</strong>, avec AB =
                  2,5 cm, BC = 3 cm et AC = DF = 3,9 cm.
                </Step>
                <Step>
                  <strong>6. Faces latérales :</strong> les rectangles <strong>ABED</strong>, <strong>BCFE</strong>{" "}
                  et <strong>CADF</strong>, de largeur commune 2 cm (la hauteur du prisme).
                </Step>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
                  <p className="mb-3">
                    <strong>7. Patron</strong> (triangle ABC + 3 rectangles + triangle DEF, avec codage des côtés
                    égaux) :
                  </p>
                  <div className="flex justify-center rounded-xl border border-green-500/20 bg-surface-muted p-3">
                    <svg viewBox="-72 -58 245 150" className="h-auto w-full max-w-[320px]">
                      <line x1="-14" y1="0" x2="-14" y2="32" className="stroke-slate-400" strokeWidth="1" />
                      <line x1="-18" y1="0" x2="-10" y2="0" className="stroke-slate-400" strokeWidth="1" />
                      <line x1="-18" y1="32" x2="-10" y2="32" className="stroke-slate-400" strokeWidth="1" />
                      <rect x="0" y="0" width="40" height="32" className="fill-white stroke-emerald-600" strokeWidth="1.5" />
                      <rect x="40" y="0" width="48" height="32" className="fill-emerald-50 stroke-emerald-600" strokeWidth="1.5" />
                      <rect x="88" y="0" width="62.4" height="32" className="fill-white stroke-emerald-600" strokeWidth="1.5" />
                      <polygon points="0,0 40,0 39.9,-48" className="fill-emerald-200/60 stroke-emerald-600" strokeWidth="1.5" />
                      <polygon points="0,32 40,32 39.9,80" className="fill-emerald-200/60 stroke-emerald-600" strokeWidth="1.5" />
                      <text x="8" y="18" fontSize="8" className="fill-emerald-700">2,5 cm</text>
                      <text x="56" y="18" fontSize="8" className="fill-emerald-700">3 cm</text>
                      <text x="107" y="18" fontSize="8" className="fill-emerald-700">3,9 cm</text>
                      <text x="-70" y="20" fontSize="7.5" className="fill-slate-500">h=2cm</text>
                      <text x="-6" y="4" fontSize="9" className="fill-emerald-800 font-semibold">A</text>
                      <text x="42" y="4" fontSize="9" className="fill-emerald-800 font-semibold">B</text>
                      <text x="42" y="-46" fontSize="9" className="fill-emerald-800 font-semibold">C</text>
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-green-700">
                    Les deux triangles (bases ABC et DEF) sont identiques et coloriés de la même couleur ; les 3
                    rectangles centraux ont tous une largeur de 2 cm (la hauteur du prisme).
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
