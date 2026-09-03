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
  title: "Médiatrice, bissectrice et hauteur d'un triangle · Cours et exercices | 1AC",
  description:
    "Cours illustré sur les droites remarquables d'un triangle (médiatrice, bissectrice, hauteur), les cercles circonscrit et inscrit, l'orthocentre et le centre de gravité, suivi de 7 exercices corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 12",
  heroTitle: "Médiatrice, bissectrice et hauteur d'un triangle",
  heroSubtitle:
    "Trois droites remarquables, trois points remarquables : le centre du cercle circonscrit, le centre du cercle inscrit, l'orthocentre.",
  footerNote: "Médiatrice, bissectrice et hauteur d'un triangle · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "mediatrice", label: "Médiatrice" },
    { id: "bissectrice", label: "Bissectrice" },
    { id: "hauteur", label: "Hauteur" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Petits composants locaux ===================== */

function Dot({ cx, cy, r = 3, fill = "#1e293b" }: { cx: number; cy: number; r?: number; fill?: string }) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} />;
}

function Lbl({ x, y, children, fs = 17, fill = "#1e293b" }: { x: number; y: number; children: ReactNode; fs?: number; fill?: string }) {
  return (
    <text x={x} y={y} fontFamily="Lexend, sans-serif" fontSize={fs} fontWeight={700} fill={fill}>
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
          { value: "3", label: "droites étudiées" },
          { value: "7", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#mediatrice" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Revoir le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Commencer les exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 180" className="h-56 w-56 text-white opacity-90">
            <polygon points="110,20 30,160 190,160" fill="none" stroke="currentColor" strokeWidth={2.5} />
            <circle cx="110" cy="115" r="70" fill="none" stroke="#818cf8" strokeWidth={2} strokeDasharray="5 4" />
            <circle cx="110" cy="115" r="4" fill="#fb923c" />
          </svg>
        }
      />

      {/* ===================== I. MÉDIATRICE ===================== */}
      <LessonSection
        id="mediatrice"
        kicker="01 · Cercle circonscrit"
        title="Médiatrice d'un triangle"
        tone="light"
        description="La médiatrice d'un triangle, c'est simplement la médiatrice de l'un de ses côtés."
      >
        <div className="grid items-start gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-100/60 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
              <p className="text-sm">La <strong>médiatrice d&apos;un triangle</strong> est la médiatrice de l&apos;un de ses côtés.</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple</p>
              <p className="text-sm text-foreground-muted">Soit ABC un triangle. Traçons (Δ) la médiatrice du côté [BC]. La droite (Δ) est appelée aussi <strong className="text-indigo-700">médiatrice du triangle ABC</strong>.</p>
            </div>
            <Callout variant="warning" title="Remarque">
              Chaque triangle a <strong>trois médiatrices</strong> (une par côté).
            </Callout>
          </div>
          <figure className="rounded-2xl border border-border bg-surface-muted p-4 sm:p-6">
            <svg viewBox="0 0 290 250" className="h-auto w-full">
              <line x1="45" y1="205" x2="235" y2="205" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="45" y1="205" x2="220" y2="55" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="235" y1="205" x2="220" y2="55" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="140" y1="22" x2="140" y2="228" stroke="#4f46e5" strokeWidth={2.5} strokeDasharray="6 5" />
              <path d="M132,205 L132,197 L140,197 L140,205" fill="none" stroke="#4f46e5" strokeWidth={2} />
              <line x1="88" y1="201" x2="96" y2="209" stroke="#334155" strokeWidth={2} />
              <line x1="184" y1="201" x2="192" y2="209" stroke="#334155" strokeWidth={2} />
              <Dot cx={45} cy={205} /><Dot cx={235} cy={205} /><Dot cx={220} cy={55} />
              <Lbl x={149} y={24} fs={15} fill="#4f46e5">(Δ)</Lbl>
              <Lbl x={226} y={46}>A</Lbl>
              <Lbl x={22} y={220}>B</Lbl>
              <Lbl x={242} y={220}>C</Lbl>
            </svg>
            <figcaption className="mt-3 text-center text-xs text-foreground-muted">(Δ) est perpendiculaire à [BC] et passe par son milieu : c&apos;est la médiatrice du triangle ABC.</figcaption>
          </figure>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">a. Cercle circonscrit à un triangle</h3>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-100/60 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
                <p className="text-sm">Le <strong>cercle circonscrit</strong> à un triangle est un cercle qui passe par les sommets du triangle et qui a pour centre le <strong>point de rencontre de ses médiatrices</strong>.</p>
              </div>
              <Callout variant="danger" title="Remarque importante">
                Pour tracer le cercle circonscrit à un triangle, il suffit de tracer <strong>deux</strong> de ses médiatrices : leur point de rencontre est le centre du cercle.
              </Callout>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple</p>
                <p className="text-sm text-foreground-muted">Soit ABC un triangle. Traçons le cercle circonscrit au triangle ABC, de centre <strong>O</strong>. On a alors <Math tex="OA = OB = OC" /> (rayons du cercle).</p>
              </div>
            </div>
            <figure className="rounded-2xl border border-border bg-surface-muted p-4 sm:p-6">
              <svg viewBox="0 0 300 270" className="h-auto w-full">
                <circle cx="150" cy="135" r="95" fill="none" stroke="#f59e0b" strokeWidth={2.5} />
                <polygon points="150,40 67.7,182.5 239.3,167.5" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                <line x1="150" y1="135" x2="150" y2="40" stroke="#4f46e5" strokeWidth={2} strokeDasharray="5 4" />
                <line x1="150" y1="135" x2="67.7" y2="182.5" stroke="#4f46e5" strokeWidth={2} strokeDasharray="5 4" />
                <line x1="150" y1="135" x2="239.3" y2="167.5" stroke="#4f46e5" strokeWidth={2} strokeDasharray="5 4" />
                <line x1="145" y1="87.5" x2="155" y2="87.5" stroke="#334155" strokeWidth={2} />
                <line x1="111.35" y1="163.08" x2="106.35" y2="154.42" stroke="#334155" strokeWidth={2} />
                <line x1="192.94" y1="155.95" x2="196.36" y2="146.55" stroke="#334155" strokeWidth={2} />
                <Dot cx={150} cy={135} r={4} fill="#4f46e5" /><Dot cx={150} cy={40} /><Dot cx={67.7} cy={182.5} /><Dot cx={239.3} cy={167.5} />
                <Lbl x={156} y={34}>A</Lbl><Lbl x={45} y={192}>B</Lbl><Lbl x={248} y={172}>C</Lbl>
                <Lbl x={158} y={128} fs={16} fill="#4f46e5">O</Lbl>
              </svg>
              <figcaption className="mt-3 text-center text-xs text-foreground-muted">Le centre O (point de rencontre des médiatrices) est équidistant des trois sommets.</figcaption>
            </figure>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. BISSECTRICE ===================== */}
      <LessonSection
        id="bissectrice"
        kicker="02 · Cercle inscrit"
        title="Bissectrice d'un triangle"
        tone="muted"
        description="La bissectrice d'un triangle, c'est la bissectrice de l'un de ses angles."
      >
        <div className="grid items-start gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-100/60 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
              <p className="text-sm">La <strong>bissectrice d&apos;un triangle</strong> est la bissectrice de l&apos;un de ses angles.</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple</p>
              <p className="text-sm text-foreground-muted">Soit ABC un triangle. Traçons [AE) la bissectrice de l&apos;angle ∠BAC. La demi-droite [AE) est appelée aussi <strong className="text-indigo-700">bissectrice du triangle ABC</strong>.</p>
            </div>
            <Callout variant="warning" title="Remarque">
              Chaque triangle a <strong>trois bissectrices</strong> (une par angle).
            </Callout>
          </div>
          <figure className="rounded-2xl border border-border bg-surface-muted p-4 sm:p-6">
            <svg viewBox="0 0 260 220" className="h-auto w-full">
              <line x1="45" y1="120" x2="220" y2="45" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="45" y1="120" x2="220" y2="195" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="220" y1="45" x2="220" y2="195" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
              <line x1="45" y1="120" x2="220" y2="110" stroke="#4f46e5" strokeWidth={2.5} />
              <path d="M65.2,111.3 A22,22 0 0,1 66.96,118.74" fill="none" stroke="#4f46e5" strokeWidth={1.8} />
              <path d="M66.96,118.74 A22,22 0 0,1 65.2,128.67" fill="none" stroke="#4f46e5" strokeWidth={1.8} />
              <line x1="63.5" y1="115.66" x2="69.3" y2="114.3" stroke="#4f46e5" strokeWidth={1.8} />
              <line x1="63.5" y1="124.34" x2="69.3" y2="125.7" stroke="#4f46e5" strokeWidth={1.8} />
              <Dot cx={45} cy={120} /><Dot cx={220} cy={45} /><Dot cx={220} cy={195} /><Dot cx={220} cy={110} fill="#4f46e5" />
              <Lbl x={22} y={126}>A</Lbl><Lbl x={228} y={42}>B</Lbl><Lbl x={228} y={202}>C</Lbl>
              <Lbl x={227} y={107} fs={15} fill="#4f46e5">E</Lbl>
            </svg>
            <figcaption className="mt-3 text-center text-xs text-foreground-muted">[AE) partage l&apos;angle ∠BAC en deux angles égaux : ∠BAE = ∠EAC.</figcaption>
          </figure>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">a. Cercle inscrit dans un triangle</h3>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-100/60 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
                <p className="text-sm">Le <strong>cercle inscrit</strong> dans un triangle est un cercle qui a pour centre le <strong>point de rencontre de ses bissectrices</strong> (il est tangent intérieurement aux trois côtés).</p>
              </div>
              <Callout variant="danger" title="Remarque importante">
                Pour tracer le cercle inscrit dans un triangle, il suffit de tracer <strong>deux</strong> de ses bissectrices.
              </Callout>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple</p>
                <p className="text-sm text-foreground-muted">Soit ABC un triangle. Traçons le cercle inscrit dans le triangle ABC, de centre <strong>O</strong>.</p>
              </div>
            </div>
            <figure className="rounded-2xl border border-border bg-surface-muted p-4 sm:p-6">
              <svg viewBox="0 0 300 260" className="h-auto w-full">
                <polygon points="150,35 45,220 255,220" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                <circle cx="150" cy="159" r="61" fill="none" stroke="#f59e0b" strokeWidth={2.5} />
                <line x1="150" y1="35" x2="150" y2="220" stroke="#4f46e5" strokeWidth={2} strokeDasharray="5 4" />
                <line x1="45" y1="220" x2="202.8" y2="128.1" stroke="#4f46e5" strokeWidth={2} strokeDasharray="5 4" />
                <line x1="255" y1="220" x2="97.2" y2="128.1" stroke="#4f46e5" strokeWidth={2} strokeDasharray="5 4" />
                <Dot cx={150} cy={159} r={4} fill="#4f46e5" /><Dot cx={150} cy={35} /><Dot cx={45} cy={220} /><Dot cx={255} cy={220} />
                <Dot cx={202.8} cy={128.1} fill="#4f46e5" /><Dot cx={97.2} cy={128.1} fill="#4f46e5" />
                <Lbl x={156} y={28}>A</Lbl><Lbl x={22} y={238}>B</Lbl><Lbl x={262} y={238}>C</Lbl>
                <Lbl x={158} y={152} fs={16} fill="#4f46e5">O</Lbl>
                <Lbl x={207} y={122} fs={15} fill="#4f46e5">E</Lbl>
                <Lbl x={80} y={122} fs={15} fill="#4f46e5">F</Lbl>
              </svg>
              <figcaption className="mt-3 text-center text-xs text-foreground-muted">O, point de rencontre des bissectrices [BE) et [CF), est le centre du cercle inscrit.</figcaption>
            </figure>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. HAUTEUR ===================== */}
      <LessonSection
        id="hauteur"
        kicker="03 · Orthocentre"
        title="Hauteur d'un triangle"
        tone="light"
        description="La hauteur d'un triangle passe par un sommet et coupe perpendiculairement le côté opposé."
      >
        <div className="grid items-start gap-4 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-100/60 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
              <p className="text-sm">La <strong>hauteur d&apos;un triangle</strong> est la droite qui passe par l&apos;un des sommets et qui est perpendiculaire au côté opposé à ce sommet.</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple</p>
              <p className="text-sm text-foreground-muted">Soit ABC un triangle. Traçons (AH) la hauteur du triangle ABC. On dit que (AH) est la <strong className="text-indigo-700">hauteur issue de A</strong>.</p>
            </div>
            <Callout variant="warning" title="Remarques">
              <p>Chaque triangle a <strong>trois hauteurs</strong>.</p>
              <p className="mt-1">Le point H est appelé <strong>pied de la hauteur</strong> (AH).</p>
              <p className="mt-1">La hauteur (AH) peut être notée (AH) ou [AH].</p>
            </Callout>
          </div>
          <figure className="rounded-2xl border border-border bg-surface-muted p-4 sm:p-6">
            <svg viewBox="0 0 300 240" className="h-auto w-full">
              <polygon points="170,40 50,210 260,210" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
              <line x1="170" y1="40" x2="170" y2="210" stroke="#4f46e5" strokeWidth={2.5} />
              <path d="M162,210 L162,202 L170,202" fill="none" stroke="#4f46e5" strokeWidth={2} />
              <Dot cx={170} cy={40} /><Dot cx={50} cy={210} /><Dot cx={260} cy={210} /><Dot cx={170} cy={210} fill="#4f46e5" />
              <Lbl x={177} y={34}>A</Lbl><Lbl x={27} y={224}>B</Lbl><Lbl x={268} y={224}>C</Lbl>
              <Lbl x={176} y={226} fs={15} fill="#4f46e5">H</Lbl>
            </svg>
            <figcaption className="mt-3 text-center text-xs text-foreground-muted">(AH) ⊥ (BC) : H est le pied de la hauteur issue de A.</figcaption>
          </figure>
        </div>

        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          <figure className="order-2 rounded-2xl border border-border bg-surface-muted p-4 sm:p-6 lg:order-1">
            <svg viewBox="0 0 340 260" className="h-auto w-full">
              <polygon points="60,60 180,180 300,140" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
              <line x1="300" y1="140" x2="108" y2="204" stroke="#334155" strokeWidth={2} strokeDasharray="6 5" />
              <line x1="60" y1="60" x2="108" y2="204" stroke="#4f46e5" strokeWidth={2.5} />
              <path d="M104.84,194.51 L114.33,191.35 L117.49,200.84" fill="none" stroke="#4f46e5" strokeWidth={2} />
              <Dot cx={60} cy={60} /><Dot cx={180} cy={180} /><Dot cx={300} cy={140} /><Dot cx={108} cy={204} fill="#4f46e5" />
              <Lbl x={42} y={50}>A</Lbl><Lbl x={188} y={196}>B</Lbl><Lbl x={308} y={132}>C</Lbl>
              <Lbl x={85} y={220} fs={15} fill="#4f46e5">H</Lbl>
            </svg>
            <figcaption className="mt-3 text-center text-xs text-foreground-muted">∠ABC obtus : le pied H de la hauteur issue de A tombe hors du segment [BC].</figcaption>
          </figure>
          <div className="order-1 rounded-xl border border-rose-500/30 bg-rose-100/60 p-5 lg:order-2">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-rose-600">Cas particulier · angle obtus</p>
            <p className="text-sm">Soit ABC un triangle tel que ∠ABC est un angle obtus. Traçons (AH) la hauteur du triangle ABC issue de A. Le pied H se trouve alors <strong>en dehors</strong> du côté [BC] : il faut prolonger (BC) pour tracer la hauteur.</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 font-display text-xl font-bold text-foreground sm:text-2xl">a. L&apos;orthocentre d&apos;un triangle</h3>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-100/60 p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
                <p className="text-sm">L&apos;<strong>orthocentre</strong> d&apos;un triangle est le point de rencontre de ses hauteurs.</p>
              </div>
              <Callout variant="danger" title="Remarque importante">
                Pour déterminer l&apos;orthocentre d&apos;un triangle, il suffit de tracer <strong>deux</strong> de ses hauteurs.
              </Callout>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple</p>
                <p className="text-sm text-foreground-muted">Soit ABC un triangle. Traçons <strong>K</strong> l&apos;orthocentre du triangle ABC : c&apos;est le point commun aux hauteurs (AH) et (BH&apos;).</p>
              </div>
            </div>
            <figure className="rounded-2xl border border-border bg-surface-muted p-4 sm:p-6">
              <svg viewBox="0 0 300 240" className="h-auto w-full">
                <polygon points="170,40 50,210 260,210" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                <line x1="170" y1="40" x2="170" y2="210" stroke="#4f46e5" strokeWidth={2.2} />
                <line x1="50" y1="210" x2="214.03" y2="123.16" stroke="#4f46e5" strokeWidth={2.2} />
                <path d="M162,210 L162,202 L170,202" fill="none" stroke="#4f46e5" strokeWidth={2} />
                <path d="M209.35,114.32 L200.51,119.0 L205.19,127.84" fill="none" stroke="#4f46e5" strokeWidth={2} />
                <Dot cx={170} cy={40} /><Dot cx={50} cy={210} /><Dot cx={260} cy={210} />
                <Dot cx={170} cy={210} fill="#64748b" /><Dot cx={214.03} cy={123.16} fill="#64748b" />
                <Dot cx={170} cy={146.47} r={4.5} fill="#f59e0b" />
                <Lbl x={177} y={34}>A</Lbl><Lbl x={27} y={224}>B</Lbl><Lbl x={268} y={224}>C</Lbl>
                <Lbl x={176} y={226} fs={14} fill="#64748b">H</Lbl>
                <Lbl x={220} y={120} fs={14} fill="#64748b">H&apos;</Lbl>
                <Lbl x={178} y={144} fs={16} fill="#b45309">K</Lbl>
              </svg>
              <figcaption className="mt-3 text-center text-xs text-foreground-muted">K, orthocentre de ABC, est le point de rencontre des trois hauteurs.</figcaption>
            </figure>
          </div>

          <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-green-700">Cas particulier · angle obtus</p>
              <p className="text-sm">Soit ABC un triangle tel que ∠ABC est un angle obtus. Traçons K l&apos;orthocentre du triangle ABC. On remarque que <strong>l&apos;orthocentre du triangle ABC se trouve à l&apos;extérieur du triangle ABC</strong>.</p>
            </div>
            <figure className="rounded-2xl border border-border bg-surface-muted p-4 sm:p-6">
              <svg viewBox="0 0 360 330" className="h-auto w-full">
                <polygon points="60,60 180,180 300,140" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                <line x1="60" y1="60" x2="140" y2="300" stroke="#4f46e5" strokeWidth={2} strokeDasharray="6 5" />
                <line x1="300" y1="140" x2="140" y2="300" stroke="#4f46e5" strokeWidth={2} strokeDasharray="6 5" />
                <path d="M104.84,194.51 L114.33,191.35 L117.49,200.84" fill="none" stroke="#4f46e5" strokeWidth={2} />
                <path d="M227.07,212.93 L220,205.86 L212.93,212.93" fill="none" stroke="#4f46e5" strokeWidth={2} />
                <Dot cx={60} cy={60} /><Dot cx={180} cy={180} /><Dot cx={300} cy={140} />
                <Dot cx={108} cy={204} fill="#64748b" /><Dot cx={220} cy={220} fill="#64748b" />
                <Dot cx={140} cy={300} r={4.5} fill="#f59e0b" />
                <Lbl x={42} y={50}>A</Lbl><Lbl x={188} y={172}>B</Lbl><Lbl x={308} y={132}>C</Lbl>
                <Lbl x={82} y={220} fs={14} fill="#64748b">H</Lbl>
                <Lbl x={228} y={215} fs={14} fill="#64748b">H&apos;</Lbl>
                <Lbl x={148} y={316} fs={16} fill="#b45309">K</Lbl>
              </svg>
              <figcaption className="mt-3 text-center text-xs text-foreground-muted">Les deux hauteurs prolongées (pointillés) se coupent en K, hors du triangle.</figcaption>
            </figure>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="7 exercices corrigés"
        tone="muted"
        description="Cherche chaque exercice sur ton cahier avec tes instruments (règle, compas, équerre), puis clique pour vérifier ta démarche."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les droites remarquables du triangle.">
          <ExerciseCard
            id="1"
            index={1}
            title="Construction · cercle circonscrit"
            items={
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="text-sm">
                  <p>Tracer le triangle <strong>POU</strong> rectangle en O tel que :</p>
                  <ul className="mt-3 space-y-1.5 text-foreground-muted">
                    <li>• PU = 5 cm</li>
                    <li>• PO = 3 cm</li>
                    <li>• ∠PUO ≈ 30°</li>
                  </ul>
                  <p className="mt-4">Construire, <strong>en couleur</strong>, le cercle circonscrit au triangle POU.</p>
                  <p className="mt-2 font-semibold">Où semble se trouver le centre de ce cercle ?</p>
                </div>
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 300 240" className="h-auto w-full">
                    <polygon points="70,80 70,200 230,200" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                    <line x1="70" y1="80" x2="230" y2="200" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
                    <path d="M78,200 L78,192 L70,192" fill="none" stroke="#334155" strokeWidth={2} />
                    <Lbl x={52} y={70}>P</Lbl><Lbl x={52} y={214}>O</Lbl><Lbl x={238} y={206}>U</Lbl>
                    <text x="40" y="145" fontFamily="Inter, sans-serif" fontSize={13} fill="#64748b">3 cm</text>
                    <text x="140" y="212" fontFamily="Inter, sans-serif" fontSize={13} fill="#64748b">4 cm</text>
                    <text x="165" y="130" fontFamily="Inter, sans-serif" fontSize={13} fill="#64748b">5 cm</text>
                  </svg>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4">
                <div className="rounded-xl border border-green-500/20 bg-background p-4 text-sm">
                  <strong>Construction :</strong> le triangle est rectangle en O avec l&apos;hypoténuse PU = 5 cm et un côté PO = 3 cm. D&apos;après le théorème de <strong>Pythagore</strong> : <Math tex="OU^2 = PU^2 - PO^2 = 5^2 - 3^2 = 25 - 9 = 16" />, donc <strong>OU = 4 cm</strong> (triangle 3-4-5). On trace [OP] et [OU] perpendiculaires en O avec OP = 3 cm et OU = 4 cm, puis on relie P et U.
                </div>
                <div className="grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-green-500/20 bg-background p-4">
                    <svg viewBox="0 0 300 240" className="h-auto w-full">
                      <circle cx="150" cy="140" r="100" fill="none" stroke="#f59e0b" strokeWidth={2.5} />
                      <polygon points="70,80 70,200 230,200" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                      <line x1="70" y1="80" x2="230" y2="200" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
                      <path d="M78,200 L78,192 L70,192" fill="none" stroke="#334155" strokeWidth={2} />
                      <Dot cx={150} cy={140} r={4} fill="#4f46e5" />
                      <Lbl x={156} y={136} fs={15} fill="#4f46e5">Ω</Lbl>
                      <Lbl x={52} y={70}>P</Lbl><Lbl x={52} y={214}>O</Lbl><Lbl x={238} y={206}>U</Lbl>
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p><strong>Réponse :</strong> le centre Ω du cercle circonscrit semble se trouver exactement au <strong>milieu de l&apos;hypoténuse [PU]</strong>.</p>
                    <p className="mt-2 text-foreground-muted">C&apos;est un résultat général important : <strong>dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l&apos;hypoténuse</strong> (et le rayon vaut la moitié de l&apos;hypoténuse).</p>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Problème concret · médiatrices"
            items={
              <div className="grid items-center gap-4 sm:grid-cols-2">
                <p className="text-sm">
                  Le maire d&apos;un village veut construire une <strong>fontaine</strong> à égale distance des trois maisons A, B et C. Où doit-il la placer précisément ?
                </p>
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="-10 -10 320 300" className="h-auto w-full">
                    <g transform="translate(80,60)">
                      <polygon points="-16,10 -16,-6 0,-18 16,-6 16,10" fill="#e2e8f0" stroke="#334155" strokeWidth={2} />
                      <line x1="-16" y1="-6" x2="0" y2="-18" stroke="#334155" strokeWidth={2} />
                      <line x1="0" y1="-18" x2="16" y2="-6" stroke="#334155" strokeWidth={2} />
                    </g>
                    <Lbl x={72} y={94}>A</Lbl>
                    <g transform="translate(60,220)">
                      <polygon points="-16,10 -16,-6 0,-18 16,-6 16,10" fill="#e2e8f0" stroke="#334155" strokeWidth={2} />
                      <line x1="-16" y1="-6" x2="0" y2="-18" stroke="#334155" strokeWidth={2} />
                      <line x1="0" y1="-18" x2="16" y2="-6" stroke="#334155" strokeWidth={2} />
                    </g>
                    <Lbl x={52} y={254}>B</Lbl>
                    <g transform="translate(260,150)">
                      <polygon points="-16,10 -16,-6 0,-18 16,-6 16,10" fill="#e2e8f0" stroke="#334155" strokeWidth={2} />
                      <line x1="-16" y1="-6" x2="0" y2="-18" stroke="#334155" strokeWidth={2} />
                      <line x1="0" y1="-18" x2="16" y2="-6" stroke="#334155" strokeWidth={2} />
                    </g>
                    <Lbl x={252} y={184}>C</Lbl>
                  </svg>
                </div>
              </div>
            }
            correction={
              <div className="grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <svg viewBox="-10 -10 320 300" className="h-auto w-full">
                    <polygon points="80,60 60,220 260,150" fill="none" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="4 4" />
                    <circle cx="147.6" cy="149.7" r="112.3" fill="none" stroke="#f59e0b" strokeWidth={2} />
                    <line x1="70" y1="140" x2="225.2" y2="159.4" stroke="#4f46e5" strokeWidth={1.8} strokeDasharray="5 4" />
                    <line x1="147.6" y1="149.7" x2="70" y2="240.9" stroke="#4f46e5" strokeWidth={1.8} strokeDasharray="5 4" />
                    <line x1="147.6" y1="149.7" x2="94.2" y2="43.9" stroke="#4f46e5" strokeWidth={1.8} strokeDasharray="5 4" />
                    <Dot cx={80} cy={60} r={4} /><Dot cx={60} cy={220} r={4} /><Dot cx={260} cy={150} r={4} />
                    <Dot cx={147.6} cy={149.7} r={6} fill="#16a34a" />
                    <Lbl x={66} y={50} fs={16}>A</Lbl><Lbl x={42} y={238} fs={16}>B</Lbl><Lbl x={268} y={156} fs={16}>C</Lbl>
                    <Lbl x={156} y={145} fs={15} fill="#15803d">Fontaine</Lbl>
                  </svg>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="rounded-lg border border-green-500/20 bg-background p-4"><strong>Réponse :</strong> la fontaine doit être placée au <strong>point de rencontre des médiatrices</strong> du triangle ABC, c&apos;est-à-dire au centre du cercle circonscrit à ABC.</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-4 text-foreground-muted"><strong>Justification :</strong> tout point de la médiatrice d&apos;un segment est équidistant des deux extrémités de ce segment. Le point de rencontre des médiatrices de [AB], [BC] et [AC] est donc équidistant de A, B <strong>et</strong> C.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Hauteurs et orthocentre"
            itemsLabel="12 questions"
            items={
              <div className="grid gap-4 lg:grid-cols-5">
                <div className="lg:col-span-2 rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 300 240" className="h-auto w-full">
                    <polygon points="170,40 50,210 260,210" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                    <line x1="170" y1="40" x2="170" y2="210" stroke="#334155" strokeWidth={1.8} strokeDasharray="6 4" />
                    <line x1="50" y1="210" x2="214.03" y2="123.16" stroke="#334155" strokeWidth={1.8} strokeDasharray="6 4" />
                    <path d="M162,210 L162,202 L170,202" fill="none" stroke="#334155" strokeWidth={1.8} />
                    <path d="M209.35,114.32 L200.51,119.0 L205.19,127.84" fill="none" stroke="#334155" strokeWidth={1.8} />
                    <Dot cx={170} cy={40} /><Dot cx={50} cy={210} /><Dot cx={260} cy={210} />
                    <Dot cx={170} cy={210} fill="#4f46e5" /><Dot cx={214.03} cy={123.16} fill="#4f46e5" />
                    <Dot cx={170} cy={146.47} r={4.5} fill="#f59e0b" />
                    <Lbl x={177} y={34}>A</Lbl><Lbl x={27} y={224}>B</Lbl><Lbl x={268} y={224}>C</Lbl>
                    <Lbl x={176} y={226} fs={15} fill="#4338ca">E</Lbl>
                    <Lbl x={220} y={120} fs={15} fill="#4338ca">D</Lbl>
                    <Lbl x={178} y={144} fs={16} fill="#b45309">H</Lbl>
                  </svg>
                  <p className="mt-3 text-center text-xs text-foreground-muted">H : orthocentre de ABC · D : pied de la hauteur issue de B · E : pied de la hauteur issue de A</p>
                </div>
                <div className="space-y-4 text-sm lg:col-span-3">
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-2 font-bold text-indigo-700">1. Dans le triangle ABC :</p>
                    <ol className="list-[lower-alpha] space-y-1 pl-5 text-foreground-muted">
                      <li>Quelle est la hauteur issue de A ?</li>
                      <li>Quelle est la hauteur relative à [AC] ?</li>
                      <li>Quelle est la hauteur issue de C ?</li>
                      <li>Quel est l&apos;orthocentre du triangle ?</li>
                    </ol>
                  </div>
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-2 font-bold text-indigo-700">2. Dans le triangle BCH :</p>
                    <ol className="list-[lower-alpha] space-y-1 pl-5 text-foreground-muted">
                      <li>Quelle est la hauteur relative à [BC] ?</li>
                      <li>Quelle est la hauteur issue de B ?</li>
                      <li>Quelle est la hauteur relative à [BH] ?</li>
                      <li>Quel est l&apos;orthocentre du triangle ?</li>
                    </ol>
                  </div>
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-2 font-bold text-indigo-700">3. Dans le triangle ABH :</p>
                    <ol className="list-[lower-alpha] space-y-1 pl-5 text-foreground-muted">
                      <li>Quelle est la hauteur relative à [AB] ?</li>
                      <li>Quelle est la hauteur relative à [AH] ?</li>
                      <li>Quelle est la hauteur relative à [BH] ?</li>
                      <li>Quel est l&apos;orthocentre du triangle ?</li>
                    </ol>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div className="rounded-xl border border-indigo-500/20 bg-indigo-100/60 p-4">
                  <strong>Idée clé :</strong> A, B, C, H forment un « système orthocentrique » : chacun de ces 4 points est l&apos;orthocentre du triangle formé par les 3 autres ! On l&apos;utilise pour répondre très vite aux questions 2 et 3.
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-green-500/20 bg-background p-4">
                    <p className="mb-2 font-bold text-green-700">1. Triangle ABC</p>
                    <p><strong>a.</strong> hauteur issue de A : <strong>(AH)</strong>, ⊥(BC) en E</p>
                    <p><strong>b.</strong> hauteur relative à [AC] : <strong>(BH)</strong>, ⊥(AC) en D</p>
                    <p><strong>c.</strong> hauteur issue de C : <strong>(CH)</strong>, ⊥(AB)</p>
                    <p><strong>d.</strong> orthocentre : <strong className="text-amber-600">H</strong></p>
                  </div>
                  <div className="rounded-xl border border-green-500/20 bg-background p-4">
                    <p className="mb-2 font-bold text-green-700">2. Triangle BCH</p>
                    <p><strong>a.</strong> relative à [BC] : <strong>(HE)</strong>, portée par (AH), ⊥(BC)</p>
                    <p><strong>b.</strong> issue de B : <strong>(AB)</strong>, car (AB)⊥(CH)</p>
                    <p><strong>c.</strong> relative à [BH] : <strong>(AC)</strong>, car (AC)⊥(BH)</p>
                    <p><strong>d.</strong> orthocentre : <strong className="text-amber-600">A</strong></p>
                  </div>
                  <div className="rounded-xl border border-green-500/20 bg-background p-4">
                    <p className="mb-2 font-bold text-green-700">3. Triangle ABH</p>
                    <p><strong>a.</strong> relative à [AB] : <strong>(CH)</strong>, car (CH)⊥(AB)</p>
                    <p><strong>b.</strong> relative à [AH] : <strong>(BC)</strong>, car (BC)⊥(AH)</p>
                    <p><strong>c.</strong> relative à [BH] : <strong>(AC)</strong>, car (AC)⊥(BH)</p>
                    <p><strong>d.</strong> orthocentre : <strong className="text-amber-600">C</strong></p>
                  </div>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-background p-4 text-foreground-muted">
                  <strong>Pourquoi ça marche :</strong> pour le triangle BCH par exemple, le côté [CH] est porté par la hauteur (CH) de ABC, qui est ⊥(AB) par définition. Une droite ⊥(CH) passant par B est donc parallèle à (AB), et comme elle passe par B, c&apos;est (AB) elle-même. On raisonne de même pour chaque cas.
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Problème concret · médiatrices"
            items={
              <div className="grid items-center gap-4 sm:grid-cols-2">
                <div className="text-sm">
                  <p className="mb-2 font-display font-bold text-foreground">🏝️ Le trésor du triangle des Bermudes</p>
                  <p>Les célèbres pirates <strong>Mat</strong> et <strong>Matic</strong> ont caché leur trésor dans le triangle des Bermudes, à <strong>égale distance</strong> des îles E, F et G.</p>
                  <p className="mt-2 font-semibold">Trouver l&apos;emplacement K du trésor.</p>
                </div>
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 -10 360 290" className="h-auto w-full">
                    <g transform="translate(70,190)"><ellipse cx="0" cy="0" rx="26" ry="11" fill="#fde68a" stroke="#b45309" strokeWidth={1.5} /><line x1="0" y1="0" x2="0" y2="-26" stroke="#166534" strokeWidth={3} /><path d="M0,-26 Q-14,-34 -20,-24 M0,-26 Q14,-34 20,-24 M0,-26 Q-4,-40 -14,-38 M0,-26 Q4,-40 14,-38" fill="none" stroke="#16a34a" strokeWidth={3} strokeLinecap="round" /></g>
                    <Lbl x={60} y={222}>E</Lbl>
                    <g transform="translate(180,50)"><ellipse cx="0" cy="0" rx="26" ry="11" fill="#fde68a" stroke="#b45309" strokeWidth={1.5} /><line x1="0" y1="0" x2="0" y2="-26" stroke="#166534" strokeWidth={3} /><path d="M0,-26 Q-14,-34 -20,-24 M0,-26 Q14,-34 20,-24 M0,-26 Q-4,-40 -14,-38 M0,-26 Q4,-40 14,-38" fill="none" stroke="#16a34a" strokeWidth={3} strokeLinecap="round" /></g>
                    <Lbl x={170} y={82}>F</Lbl>
                    <g transform="translate(290,140)"><ellipse cx="0" cy="0" rx="26" ry="11" fill="#fde68a" stroke="#b45309" strokeWidth={1.5} /><line x1="0" y1="0" x2="0" y2="-26" stroke="#166534" strokeWidth={3} /><path d="M0,-26 Q-14,-34 -20,-24 M0,-26 Q14,-34 20,-24 M0,-26 Q-4,-40 -14,-38 M0,-26 Q4,-40 14,-38" fill="none" stroke="#16a34a" strokeWidth={3} strokeLinecap="round" /></g>
                    <Lbl x={300} y={172}>G</Lbl>
                  </svg>
                </div>
              </div>
            }
            correction={
              <div className="grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <svg viewBox="0 -10 360 290" className="h-auto w-full">
                    <polygon points="70,190 180,50 290,140" fill="none" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="4 4" />
                    <circle cx="179.5" cy="162.8" r="112.8" fill="none" stroke="#f59e0b" strokeWidth={2} />
                    <line x1="125" y1="120" x2="234" y2="205.6" stroke="#4f46e5" strokeWidth={1.8} strokeDasharray="5 4" />
                    <line x1="235" y1="95" x2="124" y2="230.6" stroke="#4f46e5" strokeWidth={1.8} strokeDasharray="5 4" />
                    <Dot cx={70} cy={190} r={4} fill="#166534" /><Dot cx={180} cy={50} r={4} fill="#166534" /><Dot cx={290} cy={140} r={4} fill="#166534" />
                    <path d="M179.5,150 l6,10 l-6,4 l-6,-4 Z" fill="#f59e0b" stroke="#b45309" strokeWidth={1} />
                    <Lbl x={60} y={212} fs={15}>E</Lbl><Lbl x={172} y={42} fs={15}>F</Lbl><Lbl x={298} y={132} fs={15}>G</Lbl>
                    <Lbl x={184} y={180} fs={15} fill="#b45309">K</Lbl>
                  </svg>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="rounded-lg border border-green-500/20 bg-background p-4"><strong>Réponse :</strong> K est le point de rencontre des <strong>médiatrices</strong> de [EF], [FG] et [EG], le centre du cercle circonscrit au triangle EFG.</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-4 text-foreground-muted">Même principe que l&apos;exercice 2 : K, équidistant de E, F et G, appartient forcément aux trois médiatrices du triangle EFG.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Construction · orthocentre et parallélogramme"
            items={
              <div className="grid gap-4 lg:grid-cols-5">
                <ol className="list-decimal space-y-2 pl-5 text-sm lg:col-span-3">
                  <li>Construire un triangle IJK tel que IJ = 6 cm, JK = 4 cm et IK = 8 cm.</li>
                  <li>Placer le point L tel que IJKL soit un parallélogramme.</li>
                  <li>Dans le triangle IJK, tracer les hauteurs issues de I et de J.</li>
                  <li>On appelle M le point d&apos;intersection de ces deux hauteurs. Que peut-on dire du point M ?</li>
                  <li>Montrer que (IJ) est perpendiculaire à (KM).</li>
                  <li>Quelle est la nature du triangle KLM ? Justifier.</li>
                </ol>
                <div className="rounded-xl border border-border bg-surface-muted p-4 lg:col-span-2">
                  <svg viewBox="0 0 290 260" className="h-auto w-full">
                    <polygon points="230,120 80,120 55,216.8" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                    <Dot cx={230} cy={120} /><Dot cx={80} cy={120} /><Dot cx={55} cy={216.8} />
                    <Lbl x={236} y={116} fs={16}>I</Lbl><Lbl x={60} y={112} fs={16}>J</Lbl><Lbl x={32} y={228} fs={16}>K</Lbl>
                    <text x="150" y="112" fontFamily="Inter, sans-serif" fontSize={12} fill="#64748b">6 cm</text>
                    <text x="52" y="170" fontFamily="Inter, sans-serif" fontSize={12} fill="#64748b">4 cm</text>
                    <text x="150" y="180" fontFamily="Inter, sans-serif" fontSize={12} fill="#64748b">8 cm</text>
                  </svg>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-4 lg:grid-cols-5">
                <div className="rounded-xl border border-green-500/20 bg-background p-4 lg:col-span-2">
                  <svg viewBox="0 0 290 260" className="h-auto w-full">
                    <polygon points="230,120 80,120 55,216.8" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                    <polygon points="80,120 55,216.8 205,216.8 230,120" fill="none" stroke="#8b5cf6" strokeWidth={1.8} strokeDasharray="5 4" />
                    <line x1="230" y1="120" x2="55" y2="74.8" stroke="#4f46e5" strokeWidth={1.6} strokeDasharray="4 4" />
                    <line x1="80" y1="120" x2="115.15" y2="183.53" stroke="#4f46e5" strokeWidth={1.6} strokeDasharray="4 4" />
                    <line x1="55" y1="216.8" x2="55" y2="74.8" stroke="#dc2626" strokeWidth={2} />
                    <path d="M65,120 L65,110 L55,110" fill="none" stroke="#dc2626" strokeWidth={1.8} />
                    <Dot cx={230} cy={120} /><Dot cx={80} cy={120} /><Dot cx={55} cy={216.8} />
                    <Dot cx={205} cy={216.8} fill="#7c3aed" /><Dot cx={55} cy={74.8} r={4} fill="#f59e0b" /><Dot cx={55} cy={120} fill="#dc2626" />
                    <Lbl x={236} y={116} fs={15}>I</Lbl><Lbl x={62} y={112} fs={15}>J</Lbl><Lbl x={30} y={230} fs={15}>K</Lbl>
                    <Lbl x={211} y={230} fs={15} fill="#7c3aed">L</Lbl>
                    <Lbl x={34} y={70} fs={15} fill="#b45309">M</Lbl>
                  </svg>
                  <p className="mt-2 text-center text-xs text-foreground-muted">Triangle KLM : rectangle en K (surligné en rouge).</p>
                </div>
                <div className="space-y-3 text-sm lg:col-span-3">
                  <p className="rounded-lg border border-green-500/20 bg-background p-4"><strong>1-3.</strong> Construction : tracer IJK avec les 3 longueurs données, placer L tel que <Math tex="L = I + K - J" /> (diagonales du parallélogramme de même milieu), puis tracer les hauteurs issues de I (⊥[JK]) et de J (⊥[IK]).</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-4"><strong>4.</strong> M est le point de rencontre de deux hauteurs du triangle IJK : par définition, <strong>M est l&apos;orthocentre du triangle IJK</strong>.</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-4"><strong>5.</strong> Puisque M est l&apos;orthocentre de IJK, la <strong>troisième hauteur</strong> (issue de K) passe elle aussi par M (les 3 hauteurs sont concourantes). Cette hauteur est perpendiculaire à [IJ] et passe par K et M : c&apos;est donc (KM). Conclusion : <strong>(IJ) ⊥ (KM)</strong>.</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-4"><strong>6.</strong> IJKL étant un parallélogramme, (KL) est parallèle à (IJ). Or (KM) ⊥ (IJ) d&apos;après la question 5 ; une droite perpendiculaire à (IJ) l&apos;est aussi à toute parallèle de (IJ), en particulier à (KL). Donc <strong>(KM) ⊥ (KL)</strong>, c&apos;est-à-dire ∠LKM = 90°. <strong>Le triangle KLM est rectangle en K.</strong></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Démonstration · perpendicularité"
            items={
              <div className="grid items-center gap-4 sm:grid-cols-2">
                <ol className="list-decimal space-y-2 pl-5 text-sm">
                  <li>Dans la figure ci-contre, tracer <strong>F</strong> le point d&apos;intersection des deux droites (CD) et (BE).</li>
                  <li>Montrer que <strong>(AF) ⊥ (BC)</strong>.</li>
                </ol>
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 300 240" className="h-auto w-full">
                    <polygon points="40,220 260,220 190,40" fill="#fdf2f8" fillOpacity={0.5} stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                    <line x1="190" y1="40" x2="190" y2="220" stroke="#334155" strokeWidth={2} />
                    <line x1="260" y1="220" x2="130.16" y2="111.8" stroke="#334155" strokeWidth={2} />
                    <path d="M180,220 L180,210 L190,210" fill="none" stroke="#16a34a" strokeWidth={2} />
                    <path d="M136.56,104.12 L144.24,110.52 L137.84,118.2" fill="none" stroke="#16a34a" strokeWidth={2} />
                    <Dot cx={40} cy={220} /><Dot cx={260} cy={220} /><Dot cx={190} cy={40} />
                    <Dot cx={190} cy={220} r={3.5} fill="#16a34a" /><Dot cx={130.16} cy={111.8} r={3.5} fill="#16a34a" />
                    <Lbl x={24} y={236}>A</Lbl><Lbl x={268} y={236}>B</Lbl><Lbl x={197} y={32}>C</Lbl>
                    <Lbl x={187} y={236} fs={15} fill="#15803d">D</Lbl>
                    <Lbl x={107} y={107} fs={15} fill="#15803d">E</Lbl>
                  </svg>
                </div>
              </div>
            }
            correction={
              <div className="grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-background p-4">
                  <svg viewBox="0 0 300 240" className="h-auto w-full">
                    <polygon points="40,220 260,220 190,40" fill="#fdf2f8" fillOpacity={0.5} stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                    <line x1="190" y1="40" x2="190" y2="220" stroke="#334155" strokeWidth={2} />
                    <line x1="260" y1="220" x2="130.16" y2="111.8" stroke="#334155" strokeWidth={2} />
                    <line x1="40" y1="220" x2="231.1" y2="145.7" stroke="#4f46e5" strokeWidth={2} strokeDasharray="6 4" />
                    <path d="M227.48,136.38 L218.16,140.0 L221.78,149.32" fill="none" stroke="#4f46e5" strokeWidth={2} />
                    <path d="M180,220 L180,210 L190,210" fill="none" stroke="#16a34a" strokeWidth={2} />
                    <path d="M136.56,104.12 L144.24,110.52 L137.84,118.2" fill="none" stroke="#16a34a" strokeWidth={2} />
                    <Dot cx={40} cy={220} /><Dot cx={260} cy={220} /><Dot cx={190} cy={40} />
                    <Dot cx={190} cy={220} r={3.5} fill="#16a34a" /><Dot cx={130.16} cy={111.8} r={3.5} fill="#16a34a" />
                    <Dot cx={190} cy={161.66} r={4.5} fill="#f59e0b" />
                    <Lbl x={24} y={236} fs={16}>A</Lbl><Lbl x={266} y={236} fs={16}>B</Lbl><Lbl x={197} y={32} fs={16}>C</Lbl>
                    <Lbl x={187} y={236} fs={14} fill="#15803d">D</Lbl>
                    <Lbl x={107} y={107} fs={14} fill="#15803d">E</Lbl>
                    <Lbl x={196} y={158} fs={15} fill="#b45309">F</Lbl>
                  </svg>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="rounded-lg border border-green-500/20 bg-background p-4"><strong>1.</strong> (CD) et (BE) sont deux hauteurs du triangle ABC (CD ⊥ AB en D, BE ⊥ AC en E). Leur point d&apos;intersection <strong>F</strong> se place à l&apos;intérieur du triangle, comme sur la figure.</p>
                  <div className="rounded-lg border border-green-500/20 bg-background p-4">
                    <p><strong>2.</strong> F est le point de rencontre de deux hauteurs du triangle ABC : (CD) et (BE). Par définition, <strong>F est donc l&apos;orthocentre du triangle ABC</strong>.</p>
                    <p className="mt-2">Or l&apos;orthocentre est le point de rencontre des <strong>trois</strong> hauteurs : la troisième hauteur, issue de A et perpendiculaire à (BC), passe donc elle aussi par F. Cette hauteur est justement la droite (AF).</p>
                    <p className="mt-2 font-semibold text-green-700">Conclusion : (AF) ⊥ (BC). ∎</p>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Construction · centre de gravité"
            items={
              <div className="space-y-3">
                <Callout variant="info" title="Rappel utile (hors-cours)">
                  La <strong>médiane</strong> issue d&apos;un sommet relie ce sommet au milieu du côté opposé. Les trois médianes d&apos;un triangle se coupent en un point unique : le <strong>centre de gravité</strong> G, situé aux <strong>2/3</strong> de chaque médiane en partant du sommet (et au 1/3 en partant du milieu du côté).
                </Callout>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-semibold">a) Construire un triangle ABC de base AB = 6 cm et dont le centre de gravité G soit tel que : AG = 4 cm et CG = 4 cm.</p>
                  <p className="mt-1 text-foreground-muted">Justifier la construction. Quelle est la nature du triangle ABC ?</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-semibold">b) Construire, sans justification, un triangle TRI tel que la médiane issue de T mesure 6 cm, celle issue de R mesure 4,8 cm, et RI = 7 cm.</p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-6 text-sm">
                <div>
                  <p className="mb-3 font-bold text-green-700">a) Triangle ABC (AB = 6, AG = 4, CG = 4)</p>
                  <div className="grid items-center gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-green-500/20 bg-background p-4">
                      <svg viewBox="0 0 280 250" className="h-auto w-full">
                        <polygon points="60,40 240,40 195,214.3" fill="none" stroke="#334155" strokeWidth={2.5} strokeLinejoin="round" />
                        <line x1="60" y1="40" x2="217.5" y2="127.15" stroke="#4f46e5" strokeWidth={1.8} strokeDasharray="5 4" />
                        <line x1="195" y1="214.3" x2="150" y2="40" stroke="#4f46e5" strokeWidth={1.8} strokeDasharray="5 4" />
                        <Dot cx={60} cy={40} /><Dot cx={240} cy={40} /><Dot cx={195} cy={214.3} />
                        <Dot cx={150} cy={40} fill="#64748b" /><Dot cx={217.5} cy={127.15} fill="#64748b" />
                        <Dot cx={165} cy={98.1} r={4.5} fill="#f59e0b" />
                        <Lbl x={40} y={30} fs={16}>A</Lbl><Lbl x={248} y={30} fs={16}>B</Lbl><Lbl x={200} y={230} fs={16}>C</Lbl>
                        <Lbl x={140} y={30} fs={13} fill="#64748b">C&apos;</Lbl>
                        <Lbl x={223} y={122} fs={13} fill="#64748b">A&apos;</Lbl>
                        <Lbl x={171} y={94} fs={15} fill="#b45309">G</Lbl>
                      </svg>
                      <p className="mt-2 text-center text-xs text-foreground-muted">C&apos; : milieu de [AB] · A&apos; : milieu de [BC] · triangle isocèle en B</p>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-lg border border-green-500/20 bg-background p-4">
                        <p><strong>Construction :</strong></p>
                        <ol className="mt-1.5 list-decimal space-y-1 pl-4 text-foreground-muted">
                          <li>Tracer [AB] = 6 cm et placer C&apos;, milieu de [AB].</li>
                          <li>G est à 2/3 de la médiane issue de C, donc à 1/3 de C&apos; : puisque CG = 4 (= 2/3 de CC&apos;), on a C&apos;G = 2 cm. Tracer le cercle (A, 4 cm) et le cercle (C&apos;, 2 cm) : leur intersection donne <strong>G</strong>.</li>
                          <li>C est sur la demi-droite [C&apos;G) tel que C&apos;C = 3×C&apos;G = 6 cm.</li>
                        </ol>
                      </div>
                      <div className="rounded-lg border border-green-500/20 bg-background p-4 text-foreground-muted">
                        <strong>Justification :</strong> le centre de gravité vérifie toujours CG = (2/3)CC&apos; et AG = (2/3)AA&apos;. Fixer AG = 4 et C&apos;G = 2 (déduit de CG = 4) détermine G comme intersection de deux cercles de centres connus (A et C&apos;).
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-100/60 p-4">
                        <strong>Nature du triangle :</strong> le calcul donne AB = BC = 6 cm (et <Math tex="AC = 3\sqrt{6} \approx 7{,}35" />cm). <strong>ABC est isocèle en B.</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-green-500/20 pt-4">
                  <p className="mb-2 font-bold text-green-700">b) Triangle TRI (sans justification)</p>
                  <div className="rounded-lg border border-green-500/20 bg-background p-4">
                    <p>Même méthode que ci-dessus, avec I&apos; le milieu de [RI] :</p>
                    <ol className="mt-2 list-decimal space-y-1 pl-4">
                      <li>Tracer [RI] = 7 cm et placer I&apos;, son milieu.</li>
                      <li>La médiane issue de T mesure 6 cm ⟹ TG = 4 cm et I&apos;G = 2 cm. La médiane issue de R mesure 4,8 cm ⟹ RG = 3,2 cm.</li>
                      <li>G = intersection du cercle (I&apos;, 2 cm) et du cercle (R, 3,2 cm).</li>
                      <li>T est sur la demi-droite [I&apos;G) tel que I&apos;T = 3×I&apos;G = 6 cm.</li>
                    </ol>
                  </div>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
