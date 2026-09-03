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
  title: "Inégalité triangulaire et médiatrice · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur la position d'un point par rapport à un segment, l'inégalité triangulaire, la médiatrice d'un segment et ses propriétés directe, réciproque et caractéristique, avec 5 exercices de construction corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 11",
  heroTitle: "Inégalité triangulaire et médiatrice d'un segment",
  heroSubtitle:
    "Comparer des distances pour savoir si un triangle est constructible, puis découvrir la droite qui reste à égale distance des deux bouts d'un segment.",
  footerNote: "Inégalité triangulaire et médiatrice d'un segment · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "inegalite", label: "Inégalité" },
    { id: "mediatrice", label: "Médiatrice" },
    { id: "proprietes-mediatrice", label: "Propriétés" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Petits composants locaux ===================== */

/** Point tick-mark plus its italic serif label, mirroring the source figures. */
function Pt({ d, lx, ly, label, fs = 16 }: { d: string; lx: number; ly: number; label: string; fs?: number }) {
  return (
    <>
      <path d={d} stroke="#0f172a" strokeWidth={2} />
      <text x={lx} y={ly} fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontSize={fs}>
        {label}
      </text>
    </>
  );
}

function Lbl({ x, y, children, fs = 16, fill }: { x: number; y: number; children: ReactNode; fs?: number; fill?: string }) {
  return (
    <text x={x} y={y} fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontSize={fs} fill={fill}>
      {children}
    </text>
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
          { value: "6", label: "propriétés" },
          { value: "5", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#inegalite" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Voir les exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 180" className="h-56 w-56 text-white opacity-90">
            <polygon points="30,160 190,160 130,20" fill="none" stroke="currentColor" strokeWidth={2.5} />
            <line x1="130" y1="20" x2="130" y2="160" stroke="#818cf8" strokeWidth={2} strokeDasharray="5 4" />
          </svg>
        }
      />

      {/* ===================== I. INÉGALITÉ TRIANGULAIRE ===================== */}
      <LessonSection
        id="inegalite"
        kicker="01 · Comparer les distances"
        title="Inégalité triangulaire"
        tone="light"
        description="Comparer la longueur d'un côté à la somme des deux autres pour savoir, sans même tracer, si un triangle peut exister."
      >
        <h3 id="position" className="scroll-mt-28 mb-4 font-display text-xl font-bold text-foreground">
          1. Position d&apos;un point et un segment
        </h3>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <h4 className="mb-1 font-display font-bold text-foreground">a) Si un point n&apos;appartient pas à un segment</h4>
            <p className="mt-3 mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Exemple</p>
            <p className="text-sm text-foreground-muted">
              Soient [AB] un segment et M un point tels que <span className="rounded border border-rose-500/30 bg-rose-100/60 px-2 py-0.5 font-mono font-semibold text-rose-700">M ∉ [AB]</span>.
            </p>
            <svg viewBox="0 0 260 170" className="mx-auto mt-3 h-auto w-full max-w-sm">
              <g stroke="#0f172a" strokeWidth={1.5} strokeDasharray="4 3">
                <line x1="110" y1="30" x2="40" y2="130" />
                <line x1="110" y1="30" x2="220" y2="90" />
              </g>
              <line x1="40" y1="130" x2="220" y2="90" stroke="#0f172a" strokeWidth={2} />
              <Pt d="M35,125 L45,135 M35,135 L45,125" lx={20} ly={123} label="A" />
              <Pt d="M215,85 L225,95 M215,95 L225,85" lx={227} ly={83} label="B" />
              <Pt d="M105,25 L115,35 M105,35 L115,25" lx={110} ly={20} label="M" />
            </svg>
            <p className="mt-3 text-sm text-foreground-muted">
              <strong>Comparons</strong> les distances AB et MA+MB. On a, d&apos;après la figure : <Math tex="AB = 5{,}5" /> cm et <Math tex="MA+MB = 6{,}5" /> cm.
            </p>
            <p className="mt-1 text-sm">
              On remarque que : <span className="inline-block rounded border border-rose-500/30 bg-rose-100/60 px-2 py-0.5 font-mono font-semibold text-rose-700">AB &lt; MA+MB</span>.
            </p>
            <div className="mt-4 rounded-xl border-2 border-rose-500/30 bg-rose-100/60 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-600">Propriété 1</p>
              <p className="text-sm leading-relaxed">
                Soient [AB] un segment et M un point.
                <br />
                Si <strong>M ∉ [AB]</strong>, alors <strong>AB &lt; MA + MB</strong>.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <h4 className="mb-1 font-display font-bold text-foreground">b) Si un point appartient à un segment</h4>
            <p className="mt-3 mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Exemple</p>
            <p className="text-sm text-foreground-muted">
              Soient [AB] un segment et M un point tels que <span className="rounded border border-rose-500/30 bg-rose-100/60 px-2 py-0.5 font-mono font-semibold text-rose-700">M ∈ [AB]</span>.
            </p>
            <svg viewBox="0 0 260 110" className="mx-auto mt-3 h-auto w-full max-w-sm">
              <line x1="30" y1="80" x2="230" y2="30" stroke="#0f172a" strokeWidth={2} />
              <Pt d="M25,75 L35,85 M25,85 L35,75" lx={14} ly={72} label="A" />
              <Pt d="M135,47.5 L145,57.5 M135,57.5 L145,47.5" lx={130} ly={42} label="M" />
              <Pt d="M225,25 L235,35 M225,35 L235,25" lx={237} ly={24} label="B" />
            </svg>
            <p className="mt-3 text-sm text-foreground-muted">
              <strong>Comparons</strong> les distances AB et MA+MB. On a, d&apos;après la figure : <Math tex="AB = 6" /> cm et <Math tex="MA+MB = 6" /> cm.
            </p>
            <p className="mt-1 text-sm">
              On remarque que : <span className="inline-block rounded border border-rose-500/30 bg-rose-100/60 px-2 py-0.5 font-mono font-semibold text-rose-700">AB = MA+MB</span>.
            </p>
            <div className="mt-4 rounded-xl border-2 border-rose-500/30 bg-rose-100/60 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-600">Propriété 2</p>
              <p className="text-sm leading-relaxed">
                Soient [AB] un segment et M un point.
                <br />
                Si <strong>M ∈ [AB]</strong>, alors <strong>AB = MA + MB</strong>.
              </p>
            </div>
          </div>
        </div>

        <h3 className="mt-12 mb-4 font-display text-xl font-bold text-foreground">2. Inégalité triangulaire</h3>
        <div className="grid items-start gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Exemple</p>
            <p className="text-sm text-foreground-muted">Soit ABC un triangle. Montrons que :</p>
            <div className="mt-2 space-y-1 rounded-xl border border-border bg-surface-muted p-4 font-mono text-sm">
              <p>AB &lt; AC + BC</p>
              <p>AC &lt; AB + BC</p>
              <p>BC &lt; AB + AC</p>
            </div>
            <svg viewBox="0 0 260 200" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <polygon points="40,170 230,110 180,30" fill="none" stroke="#0f172a" strokeWidth={2} />
              <Pt d="M35,165 L45,175 M35,175 L45,165" lx={20} ly={185} label="A" />
              <Pt d="M225,105 L235,115 M225,115 L235,105" lx={237} ly={103} label="B" />
              <Pt d="M175,25 L185,35 M175,35 L185,25" lx={180} ly={20} label="C" />
            </svg>
            <ul className="mt-4 space-y-1.5 text-sm text-foreground-muted">
              <li>C ∉ [AB], donc d&apos;après la propriété 1 : <strong>AB &lt; AC+BC</strong></li>
              <li>B ∉ [AC], donc d&apos;après la propriété 1 : <strong>AC &lt; AB+BC</strong></li>
              <li>A ∉ [BC], donc d&apos;après la propriété 1 : <strong>BC &lt; AB+AC</strong></li>
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl bg-neutral-950 p-5 text-white sm:p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-neutral-400">Propriété 3 · l&apos;inégalité triangulaire</p>
            <p className="mb-3 text-sm leading-relaxed">Si ABC est un triangle, alors :</p>
            <div className="space-y-1 rounded-xl bg-white/10 p-4 font-mono text-sm">
              <p>AB &lt; AC + BC</p>
              <p>AC &lt; AB + BC</p>
              <p>BC &lt; AB + AC</p>
            </div>
            <p className="mt-4 text-sm text-neutral-400">Autrement dit :</p>
            <p className="mt-1 text-sm font-medium">
              Dans un triangle, la longueur de chaque côté est <strong>strictement inférieure</strong> à la somme des longueurs des deux autres.
            </p>
            <Callout variant="warning" title="Remarque · méthode">
              Pour vérifier si l&apos;on peut construire un triangle dont on connaît les longueurs des côtés, il suffit de vérifier si le <strong>plus grand côté</strong> est strictement inférieur à la somme des deux autres.
            </Callout>
          </div>
        </div>

        <p className="mt-10 mb-4 font-display font-bold text-foreground">Applications</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-muted p-6">
            <p className="text-sm">
              Peut-on construire le triangle ABC tel que : <Math tex="AB=5" />cm, <Math tex="AC=2{,}5" />cm et <Math tex="BC=6" />cm ?
            </p>
            <div className="mt-3 space-y-1 text-sm text-foreground-muted">
              <p>On a : BC = 6 cm et AB+AC = 7,5 cm</p>
              <p>On remarque que : <strong>BC &lt; AB+AC</strong></p>
            </div>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-100/60 px-3 py-1 text-xs font-bold text-green-700">✓ On peut construire le triangle ABC</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-muted p-6">
            <p className="text-sm">
              Peut-on construire le triangle EFG tel que : <Math tex="EF=5" />cm, <Math tex="EG=4" />cm et <Math tex="FG=11" />cm ?
            </p>
            <div className="mt-3 space-y-1 text-sm text-foreground-muted">
              <p>On a : FG = 11 cm et EF+EG = 9 cm</p>
              <p>On remarque que : <strong>FG &gt; EF+EG</strong></p>
            </div>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-rose-100/60 px-3 py-1 text-xs font-bold text-rose-700">✗ On ne peut pas construire le triangle EFG</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. MÉDIATRICE ===================== */}
      <LessonSection
        id="mediatrice"
        kicker="02 · Équidistance"
        title="Médiatrice d'un segment"
        tone="muted"
        description="La droite qui partage un segment en deux et qui rassemble tous les points équidistants de ses extrémités."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <h3 className="mb-3 font-display font-bold text-foreground">1. Définition</h3>
            <div className="rounded-2xl border-2 border-rose-500/30 bg-rose-100/60 p-5">
              <p className="text-sm leading-relaxed">
                La <strong>médiatrice</strong> d&apos;un segment est la droite <strong>perpendiculaire</strong> à ce segment qui passe par son <strong>milieu</strong>.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <h3 className="mb-3 font-display font-bold text-foreground">2. Exemple</h3>
            <p className="text-sm text-foreground-muted">Soit [AB] un segment. Traçons (Δ) la médiatrice du segment [AB].</p>
            <svg viewBox="0 0 260 260" className="mx-auto mt-2 h-auto w-full max-w-xs">
              <line x1="108.3" y1="32.4" x2="151.7" y2="227.6" stroke="#0f172a" strokeWidth={2} />
              <line x1="40" y1="150" x2="220" y2="110" stroke="#0f172a" strokeWidth={2} />
              <path d="M127.4,118.3 L139.1,115.7 L141.7,127.4" fill="none" stroke="#0f172a" strokeWidth={1.2} />
              <g stroke="#0f172a" strokeWidth={1.4}>
                <line x1="81.5" y1="143.5" x2="88.5" y2="136.5" />
                <line x1="171.5" y1="123.5" x2="178.5" y2="116.5" />
              </g>
              <Pt d="M35,145 L45,155 M35,155 L45,145" lx={20} ly={143} label="A" />
              <Pt d="M215,105 L225,115 M215,115 L225,105" lx={227} ly={103} label="B" />
              <Lbl x={153} y={26}>(Δ)</Lbl>
            </svg>
          </div>
        </div>

        <h3 id="proprietes-mediatrice" className="scroll-mt-28 mt-12 mb-6 font-display text-xl font-bold text-foreground">
          3. Propriétés
        </h3>

        <p className="mb-4 font-display font-bold text-indigo-600">a) Propriété directe</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Exemple</p>
            <p className="text-sm text-foreground-muted">Soient [AB] un segment et (Δ) sa médiatrice. Soit E un point tel que : E∈(Δ) et E∉[AB].</p>
            <svg viewBox="0 0 260 260" className="mx-auto mt-3 h-auto w-full max-w-xs">
              <line x1="108.3" y1="32.4" x2="151.7" y2="227.6" stroke="#0f172a" strokeWidth={2} />
              <line x1="40" y1="150" x2="220" y2="110" stroke="#0f172a" strokeWidth={2} />
              <g stroke="#0f172a" strokeWidth={1.5} strokeDasharray="4 3">
                <line x1="114.8" y1="61.7" x2="40" y2="150" />
                <line x1="114.8" y1="61.7" x2="220" y2="110" />
              </g>
              <path d="M127.4,118.3 L139.1,115.7 L141.7,127.4" fill="none" stroke="#0f172a" strokeWidth={1.2} />
              <Pt d="M35,145 L45,155 M35,155 L45,145" lx={20} ly={143} label="A" />
              <Pt d="M215,105 L225,115 M215,115 L225,105" lx={227} ly={103} label="B" />
              <Pt d="M110,57 L120,67 M110,67 L120,57" lx={122} ly={55} label="E" />
              <Lbl x={153} y={26}>(Δ)</Lbl>
            </svg>
            <p className="mt-3 text-sm">
              <strong>Comparons</strong> les distances EA et EB. On remarque que : <span className="inline-block rounded border border-rose-500/30 bg-rose-100/60 px-2 py-0.5 font-mono font-semibold text-rose-700">EA = EB</span>.
            </p>
            <p className="mt-2 text-sm text-foreground-muted">On dit que le point E est <strong className="text-indigo-700">équidistant</strong> aux extrémités du segment [AB].</p>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <div className="rounded-2xl border-2 border-rose-500/30 bg-rose-100/60 p-5">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-600">Propriété</p>
              <p className="text-sm leading-relaxed">Si un point appartient à la médiatrice d&apos;un segment, alors il est <strong>équidistant</strong> à ses extrémités.</p>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Autrement dit</p>
            <div className="mt-2 rounded-xl border border-border bg-surface-muted p-4 text-sm text-foreground-muted">
              Soient [AB] un segment, (D) sa médiatrice et M un point.
              <br />
              Si <strong>M ∈ (D)</strong>, alors <strong>MA = MB</strong>.
            </div>
            <Callout variant="warning" title="Remarque">
              On utilise cette propriété pour <strong>comparer</strong> ou <strong>calculer</strong> des distances.
            </Callout>
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Application</p>
              <p className="text-sm text-foreground-muted">
                Soient [EF] un segment et (D) sa médiatrice. Soit M un point de (D) tel que : ME=4cm. Calculons MF.
              </p>
              <svg viewBox="0 0 260 130" className="mx-auto mt-3 h-auto w-full max-w-xs">
                <line x1="150" y1="30" x2="150" y2="120" stroke="#0f172a" strokeWidth={2} />
                <line x1="60" y1="90" x2="240" y2="90" stroke="#0f172a" strokeWidth={2} />
                <path d="M150,79 L139,79 L139,90" fill="none" stroke="#0f172a" strokeWidth={1.1} />
                <g stroke="#0f172a" strokeWidth={1.4}>
                  <line x1="98" y1="86" x2="102" y2="94" />
                  <line x1="198" y1="86" x2="202" y2="94" />
                </g>
                <g stroke="#0f172a" strokeWidth={1.5} strokeDasharray="3 3">
                  <line x1="150" y1="45" x2="60" y2="90" />
                  <line x1="150" y1="45" x2="240" y2="90" />
                </g>
                <Pt d="M55,85 L65,95 M55,95 L65,85" lx={42} ly={83} label="E" fs={15} />
                <Pt d="M235,85 L245,95 M235,95 L245,85" lx={247} ly={83} label="F" fs={15} />
                <Pt d="M145,40 L155,50 M145,50 L155,40" lx={158} ly={38} label="M" fs={15} />
                <Lbl x={153} y={24} fs={14}>(D)</Lbl>
              </svg>
              <p className="mt-3 text-sm text-foreground-muted">On a : M∈(D) et (D) est la médiatrice du segment [EF]. Donc : <strong>ME = MF</strong>.</p>
              <p className="mt-1 text-sm">
                Et puisque ME=4cm, alors : <span className="inline-block rounded border border-green-500/30 bg-green-100/60 px-2 py-0.5 font-mono font-semibold text-green-700">MF = 4 cm</span>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 mb-4 font-display font-bold text-indigo-600">b) Propriété réciproque</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Exemple</p>
            <p className="text-sm text-foreground-muted">Soient [AB] un segment et (Δ) sa médiatrice. Soit E un point tel que : EA=EB.</p>
            <svg viewBox="0 0 260 260" className="mx-auto mt-3 h-auto w-full max-w-xs">
              <line x1="108.3" y1="32.4" x2="151.7" y2="227.6" stroke="#0f172a" strokeWidth={2} />
              <line x1="40" y1="150" x2="220" y2="110" stroke="#0f172a" strokeWidth={2} />
              <g stroke="#0f172a" strokeWidth={1.5} strokeDasharray="4 3">
                <line x1="114.8" y1="61.7" x2="40" y2="150" />
                <line x1="114.8" y1="61.7" x2="220" y2="110" />
              </g>
              <path d="M127.4,118.3 L139.1,115.7 L141.7,127.4" fill="none" stroke="#0f172a" strokeWidth={1.2} />
              <Pt d="M35,145 L45,155 M35,155 L45,145" lx={20} ly={143} label="A" />
              <Pt d="M215,105 L225,115 M215,115 L225,105" lx={227} ly={103} label="B" />
              <Pt d="M110,57 L120,67 M110,67 L120,57" lx={122} ly={55} label="E" />
              <Lbl x={153} y={26}>(Δ)</Lbl>
            </svg>
            <p className="mt-3 text-sm">
              On remarque que : <span className="inline-block rounded border border-rose-500/30 bg-rose-100/60 px-2 py-0.5 font-mono font-semibold text-rose-700">E ∈ (Δ)</span>.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <div className="rounded-2xl border-2 border-rose-500/30 bg-rose-100/60 p-5">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-600">Propriété</p>
              <p className="text-sm leading-relaxed">Si un point est <strong>équidistant</strong> des extrémités d&apos;un segment, alors il appartient à la médiatrice de ce segment.</p>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Autrement dit</p>
            <div className="mt-2 rounded-xl border border-border bg-surface-muted p-4 text-sm text-foreground-muted">
              Soient [AB] un segment, (D) sa médiatrice et M un point.
              <br />
              Si <strong>MA = MB</strong>, alors <strong>M ∈ (D)</strong>.
            </div>
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground-muted">Application</p>
              <p className="text-sm text-foreground-muted">
                Soit (ζ) un cercle de centre O et de rayon r. Soient A et B deux points distincts du cercle (ζ). Montrons que O appartient à la médiatrice du segment [AB].
              </p>
              <svg viewBox="0 0 260 220" className="mx-auto mt-3 h-auto w-full max-w-xs">
                <circle cx="130" cy="110" r="80" fill="none" stroke="#0f172a" strokeWidth={2} />
                <line x1="130" y1="20" x2="130" y2="200" stroke="#0f172a" strokeWidth={1.4} strokeDasharray="4 3" />
                <line x1="54.8" y1="82.6" x2="205.2" y2="82.6" stroke="#0f172a" strokeWidth={2} />
                <g stroke="#0f172a" strokeWidth={1.4} strokeDasharray="2 3">
                  <line x1="130" y1="110" x2="54.8" y2="82.6" />
                  <line x1="130" y1="110" x2="205.2" y2="82.6" />
                </g>
                <Pt d="M50,78 L60,88 M50,88 L60,78" lx={35} ly={76} label="A" fs={15} />
                <Pt d="M200,78 L210,88 M200,88 L210,78" lx={212} ly={76} label="B" fs={15} />
                <Pt d="M125,105 L135,115 M125,115 L135,105" lx={136} ly={120} label="O" fs={15} />
                <Lbl x={10} y={205} fs={14}>(ζ)</Lbl>
                <Lbl x={133} y={16} fs={13}>(Δ)</Lbl>
              </svg>
              <div className="mt-3 space-y-1 text-sm text-foreground-muted">
                <p>On a (ζ) un cercle de centre O et de rayon r.</p>
                <p>Et puisque A∈(ζ) et B∈(ζ), alors : <strong>OA = r</strong> et <strong>OB = r</strong></p>
                <p>Donc : <strong>OA = OB</strong></p>
              </div>
              <p className="mt-2 inline-block rounded border border-green-500/30 bg-green-100/60 px-2 py-1 text-sm font-semibold text-green-700">D&apos;où : O appartient à la médiatrice du segment [AB]</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-neutral-400">c) Propriété caractéristique</p>
          <p className="text-base font-semibold leading-relaxed sm:text-lg">
            La médiatrice d&apos;un segment, c&apos;est l&apos;ensemble des points équidistants des extrémités de ce segment.
          </p>
          <p className="mt-3 text-sm text-neutral-400">Remarque : la propriété caractéristique contient les deux propriétés directe et réciproque.</p>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="03 · À toi de jouer"
        title="5 exercices corrigés"
        tone="light"
        description="Cherche chaque exercice sur ton cahier (règle, compas, équerre et rapporteur), puis clique pour vérifier."
      >
        <ExerciseGroup total={5} celebrationTitle="Bravo, les 5 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises l'inégalité triangulaire et la médiatrice.">
          <ExerciseCard
            id="1"
            index={1}
            title="Vocabulaire et inégalité triangulaire"
            items={
              <ol className="list-decimal space-y-4 pl-5 text-sm">
                <li>Pour un triangle ABC, A, B et C sont ……… et [AB], [BC] et [AC] sont ……….</li>
                <li>
                  Sans faire de dessin, peut-on construire ces trois triangles ? Explique pourquoi.
                  <ul className="mt-2 ml-1 space-y-1.5 text-foreground-muted">
                    <li>➤ ABC avec AB=7cm, AC=3cm et BC=5cm.</li>
                    <li>➤ DEF avec DE=2cm, EF=6cm et DF=3cm.</li>
                    <li>➤ OIJ avec OJ=4cm, IJ=6cm et OI=10cm.</li>
                  </ul>
                </li>
              </ol>
            }
            correction={
              <div>
                <p className="text-sm"><strong>1)</strong> Pour un triangle ABC, A, B et C sont les <strong className="text-green-700">sommets</strong> du triangle, et [AB], [BC] et [AC] sont les <strong className="text-green-700">côtés</strong> du triangle.</p>
                <p className="mt-4 text-sm"><strong>2)</strong> Méthode : on compare le <strong>plus grand côté</strong> à la somme des deux autres (inégalité triangulaire).</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-green-500/20 bg-background p-4">
                    <p className="text-sm font-semibold">Triangle ABC</p>
                    <p className="mt-1 text-xs text-foreground-muted">AB=7, AC=3, BC=5</p>
                    <p className="mt-2 text-sm text-foreground-muted">Plus grand côté : AB=7cm. AC+BC = 3+5 = 8cm.</p>
                    <p className="mt-2 font-mono text-sm text-green-700">7 &lt; 8 ✓</p>
                    <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100/60 px-2.5 py-1 text-xs font-bold text-green-700">Constructible</p>
                  </div>
                  <div className="rounded-xl border border-green-500/20 bg-background p-4">
                    <p className="text-sm font-semibold">Triangle DEF</p>
                    <p className="mt-1 text-xs text-foreground-muted">DE=2, EF=6, DF=3</p>
                    <p className="mt-2 text-sm text-foreground-muted">Plus grand côté : EF=6cm. DE+DF = 2+3 = 5cm.</p>
                    <p className="mt-2 font-mono text-sm text-rose-700">6 &gt; 5 ✗</p>
                    <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-rose-100/60 px-2.5 py-1 text-xs font-bold text-rose-700">Pas constructible</p>
                  </div>
                  <div className="rounded-xl border border-green-500/20 bg-background p-4">
                    <p className="text-sm font-semibold">Triangle OIJ</p>
                    <p className="mt-1 text-xs text-foreground-muted">OJ=4, IJ=6, OI=10</p>
                    <p className="mt-2 text-sm text-foreground-muted">Plus grand côté : OI=10cm. OJ+IJ = 4+6 = 10cm.</p>
                    <p className="mt-2 font-mono text-sm text-rose-700">10 = 10 ✗</p>
                    <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-rose-100/60 px-2.5 py-1 text-xs font-bold text-rose-700">Pas constructible</p>
                  </div>
                </div>
                <Callout variant="warning" title="Pourquoi OIJ est un cas particulier">
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <svg viewBox="0 0 220 70" className="h-auto w-full max-w-[220px] shrink-0">
                      <line x1="20" y1="35" x2="200" y2="35" stroke="#0f172a" strokeWidth={2} />
                      <Pt d="M15,30 L25,40 M15,40 L25,30" lx={10} ly={55} label="O" fs={15} />
                      <Pt d="M87,30 L97,40 M87,40 L97,30" lx={86} ly={55} label="J" fs={15} />
                      <Pt d="M195,30 L205,40 M195,40 L205,30" lx={197} ly={55} label="I" fs={15} />
                      <text x="42" y="25" fontSize={11} fill="#64748b">4cm</text>
                      <text x="130" y="25" fontSize={11} fill="#64748b">6cm</text>
                    </svg>
                    <p>Puisque <strong>OJ+JI = OI</strong> (4+6=10), le point J appartient au segment [OI] d&apos;après la <strong>propriété 2</strong> : O, J et I sont <strong>alignés</strong>. Ce n&apos;est donc pas un vrai triangle (il est « aplati »).</p>
                  </div>
                </Callout>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Constructions à la règle, au compas et à l'équerre"
            itemsLabel="7 triangles"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-border p-4 text-sm"><strong>1.</strong> Triangle ABC avec AB=6cm, AC=3cm et BC=7cm.</div>
                <div className="rounded-lg border border-border p-4 text-sm"><strong>2.</strong> Triangle EFG avec EF=4cm, EG=6cm et FG=3cm.</div>
                <div className="rounded-lg border border-border p-4 text-sm"><strong>3.</strong> Triangle GHI isocèle en I avec GH=7cm et HI=3cm.</div>
                <div className="rounded-lg border border-border p-4 text-sm"><strong>4.</strong> Triangle ABC équilatéral avec BA=3cm.</div>
                <div className="rounded-lg border border-border p-4 text-sm"><strong>5.</strong> Triangle MNO rectangle en N avec MN=4cm et NO=3cm.</div>
                <div className="rounded-lg border border-border p-4 text-sm"><strong>6.</strong> Triangle OPC rectangle en O avec OC=3cm et PC=5cm.</div>
                <div className="rounded-lg border border-border p-4 text-sm sm:col-span-2 lg:col-span-1"><strong>7.</strong> Triangle équilatéral de périmètre 15cm.</div>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <p className="text-xs text-foreground-muted">Vérification : plus grand côté BC=7cm ; AB+AC=9cm&gt;7cm ✓ constructible.</p>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-2 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="54.4,198 278,198 42,86.9" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <Pt d="M49.4,193 L59.4,203 M49.4,203 L59.4,193" lx={35} ly={214} label="A" fs={15} />
                    <Pt d="M273,193 L283,203 M273,203 L283,193" lx={285} ly={212} label="B" fs={15} />
                    <Pt d="M37,81.9 L47,91.9 M37,91.9 L47,81.9" lx={20} ly={80} label="C" fs={15} />
                    <text x="140" y="212" fontSize={11} fill="#64748b">6cm</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace [AB]=6cm ; arc de rayon 3cm centré en A et arc de rayon 7cm centré en B ; leur intersection donne C.</p>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <p className="text-xs text-foreground-muted">Vérification : plus grand côté EG=6cm ; EF+FG=7cm&gt;6cm ✓ constructible.</p>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-2 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="42,198 217.6,198 278,80.9" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="E" fs={15} />
                    <Pt d="M212.6,193 L222.6,203 M212.6,203 L222.6,193" lx={215} ly={214} label="F" fs={15} />
                    <Pt d="M273,75.9 L283,85.9 M273,85.9 L283,75.9" lx={285} ly={74} label="G" fs={15} />
                    <text x="100" y="212" fontSize={11} fill="#64748b">4cm</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace [EF]=4cm ; arc de rayon 6cm centré en E et arc de rayon 3cm centré en F ; leur intersection donne G.</p>
                </div>
                <div className="rounded-xl border border-rose-500/30 bg-rose-100/40 p-4">
                  <p className="text-sm">Isocèle en I signifie <strong>IG = IH = 3cm</strong>. Vérification : plus grand côté GH=7cm ; IG+IH = 3+3 = 6cm.</p>
                  <p className="mt-1 font-mono text-sm text-rose-700">6 &lt; 7 → l&apos;inégalité triangulaire n&apos;est pas respectée !</p>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-3 h-auto w-full max-w-xs rounded-lg border border-rose-500/20 bg-background">
                    <line x1="42" y1="198" x2="278" y2="198" stroke="#0f172a" strokeWidth={2} />
                    <circle cx="42" cy="198" r="101.1" fill="none" stroke="#e11d48" strokeWidth={1.5} strokeDasharray="5 4" />
                    <circle cx="278" cy="198" r="101.1" fill="none" stroke="#e11d48" strokeWidth={1.5} strokeDasharray="5 4" />
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={30} ly={216} label="G" fs={15} />
                    <Pt d="M273,193 L283,203 M273,203 L283,193" lx={283} ly={216} label="H" fs={15} />
                    <text x="160" y="52" textAnchor="middle" fontSize={12} fill="#e11d48" fontWeight={700}>Les arcs ne se touchent pas !</text>
                  </svg>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-rose-100/60 px-3 py-1 text-xs font-bold text-rose-700">✗ Construction impossible</p>
                  <p className="mt-2 text-sm text-foreground-muted">Les deux arcs de rayon 3cm tracés depuis G et H ne se rencontrent jamais (7cm &gt; 3+3cm) : aucun point I possible.</p>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <p className="text-xs text-foreground-muted">Équilatéral ⟹ AB=BC=CA=3cm. Toujours constructible (3&lt;3+3).</p>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-2 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="42,198 222.1,198 132.1,42" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <g stroke="#0f172a" strokeWidth={1.3}>
                      <line x1="127.1" y1="120" x2="134.1" y2="120.8" />
                      <line x1="82" y1="169" x2="88.7" y2="166" />
                      <line x1="177" y1="169" x2="170.3" y2="166" />
                    </g>
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="A" fs={15} />
                    <Pt d="M217.1,193 L227.1,203 M217.1,203 L227.1,193" lx={220} ly={214} label="B" fs={15} />
                    <Pt d="M127.1,37 L137.1,47 M127.1,47 L137.1,37" lx={132} ly={30} label="C" fs={15} />
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace [AB]=3cm ; arcs de rayon 3cm centrés en A et en B ; leur intersection donne C.</p>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <svg viewBox="0 0 320 240" className="mx-auto h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="42,198 42,42 159,198" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <rect x="42" y="186" width="12" height="12" fill="none" stroke="#0f172a" strokeWidth={1.3} />
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="N" fs={15} />
                    <Pt d="M37,37 L47,47 M37,47 L47,37" lx={20} ly={30} label="M" fs={15} />
                    <Pt d="M154,193 L164,203 M154,203 L164,193" lx={163} ly={214} label="O" fs={15} />
                    <text x="8" y="120" fontSize={11} fill="#64748b">4cm</text>
                    <text x="95" y="212" fontSize={11} fill="#64748b">3cm</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : à l&apos;équerre, trace l&apos;angle droit en N ; reporte 4cm pour M et 3cm pour O ; relie M et O.</p>
                  <p className="mt-1 text-xs text-foreground-muted">Bonus (Pythagore) : MO = <Math tex="\sqrt{4^2+3^2}" /> = <strong>5cm</strong>, le triangle 3-4-5 !</p>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <p className="text-xs text-foreground-muted">PC est l&apos;hypoténuse (elle ne contient pas O). Pythagore : <Math tex="OP^2 = PC^2 - OC^2 = 25-9=16" /> ⟹ OP=4cm.</p>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-2 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="42,198 159,198 42,42" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <line x1="159" y1="198" x2="42" y2="42" stroke="#0f172a" strokeWidth={2} />
                    <rect x="42" y="186" width="12" height="12" fill="none" stroke="#0f172a" strokeWidth={1.3} />
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="O" fs={15} />
                    <Pt d="M154,193 L164,203 M154,203 L164,193" lx={163} ly={214} label="C" fs={15} />
                    <Pt d="M37,37 L47,47 M37,47 L47,37" lx={20} ly={30} label="P" fs={15} />
                    <text x="95" y="212" fontSize={11} fill="#64748b">3cm</text>
                    <text x="70" y="105" fontSize={11} fill="#64748b">5cm</text>
                    <text x="8" y="120" fontSize={11} fill="#64748b">4cm</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace l&apos;angle droit en O ; reporte OC=3cm ; trace un arc de rayon 5cm centré en C qui coupe le second côté en P (ou reporte directement OP=4cm).</p>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4 sm:col-span-2">
                  <p className="text-sm text-foreground-muted">Équilatéral ⟹ les 3 côtés sont égaux. Un côté = 15cm ÷ 3 = <strong className="text-green-700">5cm</strong>.</p>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-2 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="42,198 222.1,198 132.1,42" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="A" fs={15} />
                    <Pt d="M217.1,193 L227.1,203 M217.1,203 L227.1,193" lx={220} ly={214} label="B" fs={15} />
                    <Pt d="M127.1,37 L137.1,47 M127.1,47 L137.1,37" lx={132} ly={30} label="C" fs={15} />
                    <text x="115" y="212" fontSize={11} fill="#64748b">5cm</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace un côté de 5cm ; arcs de rayon 5cm depuis chaque extrémité ; leur intersection donne le troisième sommet.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Angle-côté-côté et perpendiculaire"
            itemsLabel="2 triangles"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p><strong>1.</strong> Construis un triangle BAS tel que AB=4cm, AS=5cm et Â=110°.</p>
                  <p className="mt-2 ml-4">1-1. Trace la perpendiculaire à (AS) passant par B.</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p><strong>2.</strong> Construis un triangle ABC rectangle avec AB=4cm et AC=5cm.</p>
                </div>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <p className="text-sm text-foreground-muted">Construction « angle-côté-côté » : trace une demi-droite [Ax) et place B tel que AB=4cm ; au rapporteur, trace [Ay) formant 110° avec [Ax) ; place S sur [Ay) tel que AS=5cm ; relie B et S.</p>
                  <svg viewBox="0 0 260 240" className="mx-auto mt-3 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <line x1="86.6" y1="164.5" x2="220" y2="164.5" stroke="#0f172a" strokeWidth={1.4} strokeDasharray="3 3" />
                    <line x1="86.6" y1="164.5" x2="190.9" y2="164.5" stroke="#0f172a" strokeWidth={2} />
                    <line x1="86.6" y1="164.5" x2="20" y2="164.5" stroke="#0f172a" strokeWidth={1.4} strokeDasharray="3 3" />
                    <line x1="86.6" y1="164.5" x2="42" y2="42" stroke="#0f172a" strokeWidth={1.4} strokeDasharray="3 3" />
                    <line x1="86.6" y1="164.5" x2="98.8" y2="198" stroke="#0f172a" strokeWidth={1.4} strokeDasharray="3 3" />
                    <path d="M110,164.5 A23,23 0 0,0 78.5,143" fill="none" stroke="#2563eb" strokeWidth={1.4} />
                    <text x="96" y="140" fill="#2563eb" fontSize={13} fontWeight={700}>110°</text>
                    <line x1="190.9" y1="164.5" x2="98.8" y2="198" stroke="#0f172a" strokeWidth={2} />
                    <line x1="190.9" y1="164.5" x2="42" y2="42" stroke="#0f172a" strokeWidth={2} />
                    <path d="M96.1,190.5 L103.6,187.7 L106.3,195.3" fill="none" stroke="#0f172a" strokeWidth={1.2} />
                    <Pt d="M81.6,159.5 L91.6,169.5 M81.6,169.5 L91.6,159.5" lx={68} ly={180} label="A" fs={15} />
                    <Pt d="M185.9,159.5 L195.9,169.5 M185.9,169.5 L195.9,159.5" lx={198} ly={158} label="B" fs={15} />
                    <Pt d="M37,37 L47,47 M37,47 L47,37" lx={22} ly={30} label="S" fs={15} />
                    <Pt d="M93.8,193 L103.8,203 M93.8,203 L103.8,193" lx={106} ly={212} label="H" fs={15} />
                  </svg>
                  <p className="mt-3 text-sm text-foreground-muted"><strong>1-1.</strong> À l&apos;équerre : place un côté le long de (AS) et fais glisser jusqu&apos;à ce que l&apos;autre côté passe par B, puis trace (BH), la perpendiculaire cherchée.</p>
                  <Callout variant="warning" title="Remarque">
                    Comme l&apos;angle en A est <strong>obtus</strong> (110°&gt;90°), le pied H de cette perpendiculaire tombe <strong>en dehors</strong> du segment [AS], sur son prolongement au-delà de A.
                  </Callout>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <Callout variant="warning" title="Remarque">
                    L&apos;énoncé ne précise pas le sommet de l&apos;angle droit. Comme AB et AC partent toutes les deux de A (même situation qu&apos;à l&apos;exercice 2, question 5), on construit avec <strong>l&apos;angle droit en A</strong>.
                  </Callout>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-3 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="42,198 166.8,198 42,42" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <rect x="42" y="186" width="12" height="12" fill="none" stroke="#0f172a" strokeWidth={1.3} />
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="A" fs={15} />
                    <Pt d="M161.8,193 L171.8,203 M161.8,203 L171.8,193" lx={170} ly={214} label="B" fs={15} />
                    <Pt d="M37,37 L47,47 M37,47 L47,37" lx={20} ly={30} label="C" fs={15} />
                    <text x="95" y="212" fontSize={11} fill="#64748b">4cm</text>
                    <text x="8" y="120" fontSize={11} fill="#64748b">5cm</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace l&apos;angle droit en A à l&apos;équerre ; reporte AB=4cm sur un côté et AC=5cm sur l&apos;autre ; relie B et C.</p>
                  <p className="mt-1 text-xs text-foreground-muted">Bonus (Pythagore) : BC = <Math tex="\sqrt{4^2+5^2} = \sqrt{41} \approx 6{,}4" />cm.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Médiatrice et cercle circonscrit"
            itemsLabel="2 triangles"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p><strong>1.</strong> Construis un triangle CAR tel que AC=5cm, AR=4cm et CR=6cm.</p>
                  <p className="mt-2 ml-4">1-2. Construis la médiatrice de [AR].</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p><strong>2.</strong> Construis un triangle TRI tel que R̂=50°, Î=40° et RI=5cm.</p>
                  <p className="mt-2 ml-4">2-1. Construis le cercle circonscrit au triangle TRI.</p>
                </div>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <p className="text-xs text-foreground-muted">Vérification : plus grand côté CR=6cm ; AC+AR=9cm&gt;6cm ✓ constructible.</p>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-2 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <polygon points="42,198 238.5,198 61.7,42" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <line x1="30.5" y1="139.2" x2="72.9" y2="100.8" stroke="#0f172a" strokeWidth={2} strokeDasharray="4 3" />
                    <g stroke="#0f172a" strokeWidth={1.3}>
                      <line x1="45" y1="128" x2="52" y2="124.6" />
                      <line x1="58.5" y1="112" x2="65.5" y2="108.6" />
                    </g>
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="A" fs={15} />
                    <Pt d="M233.5,193 L243.5,203 M233.5,203 L243.5,193" lx={243} ly={214} label="C" fs={15} />
                    <Pt d="M56.7,37 L66.7,47 M56.7,47 L66.7,37" lx={66} ly={34} label="R" fs={15} />
                    <text x="8" y="130" fontSize={11} fill="#64748b">4cm</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace [AC]=5cm ; arc de rayon 4cm centré en A et arc de rayon 6cm centré en C ; leur intersection donne R.</p>
                  <p className="mt-2 text-sm text-foreground-muted"><strong>1-2.</strong> Au compas, ouverture plus grande que la moitié de [AR] : trace un arc centré en A puis un arc de même rayon centré en R, de part et d&apos;autre de (AR). La droite passant par les deux points d&apos;intersection est la médiatrice de [AR].</p>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <Callout variant="warning" title="Remarque clé">
                    La somme des angles d&apos;un triangle vaut 180°, donc l&apos;angle en T = 180°−50°−40° = <strong>90°</strong>. Le triangle TRI est rectangle en T !
                  </Callout>
                  <svg viewBox="0 0 320 240" className="mx-auto mt-3 h-auto w-full max-w-xs rounded-lg border border-green-500/20 bg-background">
                    <circle cx="160" cy="198" r="118" fill="none" stroke="#2563eb" strokeWidth={1.5} strokeDasharray="4 3" />
                    <polygon points="42,198 278,198 139.5,81.8" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <path d="M75,198 A33,33 0 0,0 62,172" fill="none" stroke="#7c3aed" strokeWidth={1.3} />
                    <text x="64" y="184" fill="#7c3aed" fontSize={12} fontWeight={700}>50°</text>
                    <path d="M245,198 A33,33 0 0,1 250,167" fill="none" stroke="#7c3aed" strokeWidth={1.3} />
                    <text x="235" y="181" fill="#7c3aed" fontSize={12} fontWeight={700}>40°</text>
                    <path d="M133.7,88.7 L140.6,94.5 L146.4,87.6" fill="none" stroke="#0f172a" strokeWidth={1.2} />
                    <Pt d="M37,193 L47,203 M37,203 L47,193" lx={22} ly={214} label="R" fs={15} />
                    <Pt d="M273,193 L283,203 M273,203 L283,193" lx={285} ly={214} label="I" fs={15} />
                    <Pt d="M134.5,76.8 L144.5,86.8 M134.5,86.8 L144.5,76.8" lx={139} ly={70} label="T" fs={15} />
                    <Pt d="M155,193 L165,203 M155,203 L165,193" lx={152} ly={216} label="O′" fs={14} />
                    <text x="180" y="90" fill="#2563eb" fontSize={11}>cercle circonscrit</text>
                  </svg>
                  <p className="mt-2 text-sm text-foreground-muted">Méthode : trace [RI]=5cm ; au rapporteur, à partir de R trace une demi-droite formant 50° avec (RI) et, à partir de I, une demi-droite formant 40° avec (RI), du même côté. Leur intersection donne T.</p>
                  <p className="mt-2 text-sm text-foreground-muted"><strong>2-1.</strong> Méthode générale : le centre du cercle circonscrit est le point de concours de deux médiatrices (par exemple celles de [TR] et de [TI]). Ici, comme le triangle est rectangle en T, un raccourci existe : <strong>le centre O′ est le milieu de l&apos;hypoténuse [RI]</strong>, et le rayon vaut RI÷2 = <strong>2,5cm</strong>.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Hauteurs, médiatrices, bissectrices et cercle circonscrit"
            itemsLabel="2 questions"
            items={
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-4 text-sm">
                  <strong>1.</strong> Construire deux triangles ABC et DEF. Tracer les trois <strong className="text-rose-600">hauteurs en rouge</strong> et les trois <strong className="text-green-600">médiatrices en vert</strong>.
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <strong>2.</strong> Construire deux triangles ABC et DEF. Tracer les trois bissectrices et le cercle circonscrit dans chaque triangle.
                </div>
              </div>
            }
            correction={
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm text-foreground-muted"><strong>Rappel :</strong> la hauteur issue d&apos;un sommet est la droite perpendiculaire au côté opposé, passant par ce sommet (son support peut couper le côté opposé <em>ou son prolongement</em>).</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-green-500/20 bg-background p-3">
                      <p className="mb-1 text-center text-xs font-semibold text-foreground-muted">Triangle ABC (acutangle)</p>
                      <svg viewBox="0 0 320 260" className="mx-auto h-auto w-full">
                        <polygon points="42,218 253.2,218 112.4,42" fill="none" stroke="#0f172a" strokeWidth={2} />
                        <g stroke="#16a34a" strokeWidth={1.5}>
                          <line x1="147.6" y1="15" x2="147.6" y2="235" />
                          <line x1="77.4" y1="214.5" x2="217.8" y2="101.9" />
                          <line x1="231.2" y1="191.7" x2="64" y2="124.7" />
                        </g>
                        <g stroke="#dc2626" strokeWidth={1.6}>
                          <line x1="112.4" y1="42" x2="112.4" y2="218" />
                          <line x1="253.2" y1="218" x2="70.2" y2="144.8" />
                          <line x1="42" y1="218" x2="133.5" y2="144.8" />
                        </g>
                        <Pt d="M37,213 L47,223 M37,223 L47,213" lx={22} ly={234} label="A" fs={15} />
                        <Pt d="M248.2,213 L258.2,223 M248.2,223 L258.2,213" lx={257} ly={234} label="B" fs={15} />
                        <Pt d="M107.4,37 L117.4,47 M107.4,47 L117.4,37" lx={112} ly={30} label="C" fs={15} />
                        <Pt d="M107.4,156.7 L117.4,166.7 M107.4,166.7 L117.4,156.7" lx={119} ly={165} label="H" fs={13} />
                        <Pt d="M142.6,153.2 L152.6,163.2 M142.6,163.2 L152.6,153.2" lx={154} ly={152} label="O" fs={13} />
                      </svg>
                      <p className="mt-2 text-center text-xs text-foreground-muted">H (orthocentre) et O (centre du cercle circonscrit) sont <strong>à l&apos;intérieur</strong> du triangle.</p>
                    </div>
                    <div className="rounded-xl border border-green-500/20 bg-background p-3">
                      <p className="mb-1 text-center text-xs font-semibold text-foreground-muted">Triangle DEF (obtusangle en F)</p>
                      <svg viewBox="0 0 320 300" className="mx-auto h-auto w-full">
                        <polygon points="42,215.9 278,215.9 244.3,165.3" fill="none" stroke="#0f172a" strokeWidth={2} />
                        <g stroke="#16a34a" strokeWidth={1.5}>
                          <line x1="160" y1="15" x2="160" y2="290" />
                          <line x1="126.7" y1="280.2" x2="294.4" y2="168.4" />
                          <line x1="133.45" y1="151.8" x2="169.7" y2="296.8" />
                        </g>
                        <g stroke="#dc2626" strokeWidth={1.6}>
                          <line x1="244.3" y1="215.9" x2="244.3" y2="81" />
                          <line x1="42" y1="215.9" x2="305" y2="40.5" />
                          <line x1="278" y1="215.9" x2="234.2" y2="40.5" />
                        </g>
                        <Pt d="M37,210.9 L47,220.9 M37,220.9 L47,210.9" lx={22} ly={232} label="D" fs={15} />
                        <Pt d="M273,210.9 L283,220.9 M273,220.9 L283,210.9" lx={285} ly={232} label="E" fs={15} />
                        <Pt d="M239.3,160.3 L249.3,170.3 M239.3,170.3 L249.3,160.3" lx={252} ly={158} label="F" fs={15} />
                        <Pt d="M239.3,76 L249.3,86 M239.3,86 L249.3,76" lx={252} ly={80} label="H" fs={13} />
                        <Pt d="M155,253 L165,263 M155,263 L165,253" lx={150} ly={278} label="O" fs={13} />
                      </svg>
                      <p className="mt-2 text-center text-xs text-foreground-muted">H et O tombent tous les deux <strong>à l&apos;extérieur</strong> du triangle (angle obtus en F).</p>
                    </div>
                  </div>
                  <Callout variant="warning" title="À retenir">
                    Dans un triangle <strong>acutangle</strong>, l&apos;orthocentre (hauteurs) et le centre du cercle circonscrit (médiatrices) sont à l&apos;intérieur. Dès qu&apos;un triangle est <strong>obtusangle</strong>, ces deux points « sortent » du triangle.
                  </Callout>
                </div>

                <div className="border-t border-green-500/20 pt-6">
                  <p className="mb-3 text-sm text-foreground-muted">On reprend les deux mêmes triangles ABC et DEF. Les 3 bissectrices (violet) se coupent au centre du cercle inscrit ; le cercle circonscrit (bleu, obtenu grâce aux médiatrices) passe par les 3 sommets.</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-green-500/20 bg-background p-3">
                      <p className="mb-1 text-center text-xs font-semibold text-foreground-muted">Triangle ABC (acutangle)</p>
                      <svg viewBox="0 0 320 260" className="mx-auto h-auto w-full">
                        <circle cx="147.6" cy="158.2" r="121.4" fill="none" stroke="#2563eb" strokeWidth={1.4} strokeDasharray="4 3" />
                        <polygon points="42,218 253.2,218 112.4,42" fill="none" stroke="#0f172a" strokeWidth={2} />
                        <g stroke="#7c3aed" strokeWidth={1.5}>
                          <line x1="42" y1="218" x2="179" y2="125.2" />
                          <line x1="253.2" y1="218" x2="76.1" y2="132.9" />
                          <line x1="112.4" y1="42" x2="138.5" y2="218" />
                        </g>
                        <Pt d="M37,213 L47,223 M37,223 L47,213" lx={22} ly={234} label="A" fs={15} />
                        <Pt d="M248.2,213 L258.2,223 M248.2,223 L258.2,213" lx={257} ly={234} label="B" fs={15} />
                        <Pt d="M107.4,37 L117.4,47 M107.4,47 L117.4,37" lx={112} ly={30} label="C" fs={15} />
                        <Pt d="M124.7,153.6 L134.7,163.6 M124.7,163.6 L134.7,153.6" lx={112} ly={150} label="I" fs={13} />
                      </svg>
                      <p className="mt-2 text-center text-xs text-foreground-muted">Le centre du cercle inscrit I est toujours <strong>à l&apos;intérieur</strong>.</p>
                    </div>
                    <div className="rounded-xl border border-green-500/20 bg-background p-3">
                      <p className="mb-1 text-center text-xs font-semibold text-foreground-muted">Triangle DEF (obtusangle en F)</p>
                      <svg viewBox="0 0 320 300" className="mx-auto h-auto w-full">
                        <circle cx="160" cy="258" r="125.3" fill="none" stroke="#2563eb" strokeWidth={1.4} strokeDasharray="4 3" />
                        <polygon points="42,215.9 278,215.9 244.3,165.3" fill="none" stroke="#0f172a" strokeWidth={2} />
                        <g stroke="#7c3aed" strokeWidth={1.5}>
                          <line x1="42" y1="215.9" x2="260.1" y2="189" />
                          <line x1="278" y1="215.9" x2="202.9" y2="175.6" />
                          <line x1="244.3" y1="165.3" x2="224.7" y2="215.9" />
                        </g>
                        <Pt d="M37,210.9 L47,220.9 M37,220.9 L47,210.9" lx={22} ly={232} label="D" fs={15} />
                        <Pt d="M273,210.9 L283,220.9 M273,220.9 L283,210.9" lx={285} ly={232} label="E" fs={15} />
                        <Pt d="M239.3,160.3 L249.3,170.3 M239.3,170.3 L249.3,160.3" lx={252} ly={158} label="F" fs={15} />
                        <Pt d="M228.9,187.3 L238.9,197.3 M228.9,197.3 L238.9,187.3" lx={240} ly={196} label="I" fs={13} />
                      </svg>
                      <p className="mt-2 text-center text-xs text-foreground-muted">I reste <strong>à l&apos;intérieur</strong>, contrairement au centre du cercle circonscrit (hors triangle).</p>
                    </div>
                  </div>
                  <Callout variant="warning" title="À retenir">
                    Les 3 bissectrices d&apos;un triangle se coupent <strong>toujours à l&apos;intérieur</strong> du triangle, quel que soit son type, contrairement aux hauteurs et aux médiatrices qui peuvent sortir du triangle s&apos;il est obtusangle.
                  </Callout>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
