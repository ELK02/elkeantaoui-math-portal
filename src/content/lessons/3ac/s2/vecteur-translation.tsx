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
  title: "Les Vecteurs et la Translation · Cours et exercices | 3AC",
  description:
    "Cours complet et exercices corrigés sur les vecteurs et la translation : définitions, propriétés, relation de Chasles, produit par un réel et translations, avec 8 exercices corrigés en détail, 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 2",
  heroTitle: "Les Vecteurs et la Translation",
  heroSubtitle:
    "Direction, sens, norme : ce qui définit un vecteur. Puis la translation, pour faire glisser une figure sans la déformer.",
  footerNote: "Vecteurs et translation · Mathématiques, 3ᵉ année collège, semestre 2.",
  sections: [
    { id: "vecteurs", label: "Vecteurs" },
    { id: "translation", label: "Translation" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Small figure "card" wrapper for the SVG diagrams. */
function Graph({ children, caption, className = "" }: { children: ReactNode; caption?: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-xs rounded-xl border border-border bg-surface-muted p-4 ${className}`}>
      {children}
      {caption ? <p className="mt-2 text-center text-xs text-foreground-muted">{caption}</p> : null}
    </div>
  );
}

/** Plain worked-example box (source's "box-example"). */
function Example({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-border bg-surface-muted p-4 text-sm">{children}</div>;
}

/** Numbered subheading, matching the source's "1. Titre" pattern. */
function Sub({ n, title }: { n: string; title: string }) {
  return <h4 className="mt-8 mb-3 font-display text-lg font-semibold text-foreground first:mt-0">{n}. {title}</h4>;
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      {/* Shared arrowhead markers, referenced by id from every vector diagram below. */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <marker id="arr-indigo" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#4f46e5"/></marker>
          <marker id="arr-rose" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#e11d48"/></marker>
          <marker id="arr-emerald" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#059669"/></marker>
          <marker id="arr-amber" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#d97706"/></marker>
          <marker id="arr-slate" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#64748b"/></marker>
          <marker id="arr-sky" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#0284c7"/></marker>
        </defs>
      </svg>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "2", label: "grandes parties" },
          { value: "12", label: "notions & propriétés" },
          { value: "8", label: "exercices corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#vecteurs"
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
          <svg viewBox="0 0 220 180" className="h-48 w-56 sm:h-56 sm:w-64">
            <defs>
              <marker id="hero-arr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                <path d="M0,0 L9,4.5 L0,9 Z" fill="#fb923c" />
              </marker>
            </defs>
            <line x1="20" y1="150" x2="150" y2="40" stroke="#fb923c" strokeWidth="3.5" markerEnd="url(#hero-arr)" />
            <line x1="20" y1="150" x2="150" y2="150" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="150" y1="150" x2="150" y2="40" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="20" cy="150" r="3.5" fill="#ffffff" />
            <circle cx="150" cy="40" r="3.5" fill="#ffffff" />
            <text x="8" y="168" fontStyle="italic" fontSize="16" fill="#ffffff">A</text>
            <text x="158" y="34" fontStyle="italic" fontSize="16" fill="#ffffff">B</text>
          </svg>
        }
      />

      {/* ===================== I. LES VECTEURS ===================== */}
      <LessonSection
        id="vecteurs"
        kicker="01 · Direction, sens, norme"
        title="Les vecteurs"
        tone="light"
        description="Toutes les définitions et propriétés du chapitre, illustrées et accompagnées d'exercices d'application résolus."
      >
        <Sub n="1" title="Vecteur non nul" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Chaque deux points différents <Math tex="A" /> et <Math tex="B" /> déterminent un{" "}
            <strong>vecteur non nul</strong> <Math tex="\overrightarrow{AB}" />, d&apos;origine <Math tex="A" /> et
            d&apos;extrémité <Math tex="B" />.
          </p>
        </Callout>
        <p className="mt-6 mb-2 text-xs font-semibold uppercase text-foreground-muted">b) Exemple et caractéristiques</p>
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Graph>
            <svg viewBox="0 0 320 130" className="mx-auto h-auto w-full max-w-sm">
              <line x1="15" y1="105" x2="305" y2="18" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="5 4"/>
              <line x1="45" y1="96" x2="235" y2="40" stroke="#4f46e5" strokeWidth="3" markerEnd="url(#arr-indigo)"/>
              <circle cx="45" cy="96" r="3.5" fill="#1e293b"/>
              <circle cx="235" cy="40" r="3.5" fill="#1e293b"/>
              <text x="32" y="118" fontStyle="italic" fontSize="16" fill="#1e293b">A</text>
              <text x="242" y="32" fontStyle="italic" fontSize="16" fill="#1e293b">B</text>
            </svg>
          </Graph>
          <div className="space-y-2 text-sm">
            <p>
              Chaque vecteur possède <strong>trois caractéristiques</strong> : la direction, le sens et la norme.
              Pour <Math tex="\overrightarrow{AB}" /> ci-contre :
            </p>
            <ul className="space-y-1.5">
              <li><strong>Direction</strong> : c&apos;est la droite <Math tex="(AB)" />.</li>
              <li><strong>Sens</strong> : c&apos;est de <Math tex="A" /> vers <Math tex="B" />.</li>
              <li><strong>Norme</strong> : c&apos;est la distance <Math tex="AB" />.</li>
            </ul>
          </div>
        </div>

        <Sub n="2" title="Vecteur nul" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Chaque point <Math tex="A" /> détermine un vecteur nul <Math tex="\overrightarrow{AA}" /> noté{" "}
            <Math tex="\vec 0" />. On écrit : <Math tex="\overrightarrow{AA}=\vec 0" />.
          </p>
        </Callout>
        <p className="mt-4 mb-2 text-xs font-semibold uppercase text-foreground-muted">b) Remarques</p>
        <div className="space-y-2">
          <Callout variant="warning">
            <p>La norme d&apos;un vecteur nul est zéro, mais la direction et le sens ne sont pas définis.</p>
          </Callout>
          <Callout variant="warning">
            <p>
              Si <Math tex="\overrightarrow{AB}=\vec 0" />, alors <Math tex="A=B" /> (les points <Math tex="A" /> et{" "}
              <Math tex="B" /> sont confondus).
            </p>
          </Callout>
        </div>

        <Sub n="3" title="Égalité de deux vecteurs" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Propriété 1</p>
        <Callout variant="info" title="Propriété">
          <p>
            Dire que deux vecteurs sont égaux signifie qu&apos;ils ont <strong>la même direction, le même sens et la
            même norme.</strong>
          </p>
        </Callout>
        <Callout variant="warning">
          <p>
            <strong>Remarque importante :</strong> même direction signifie que leurs directions sont soit deux droites
            strictement parallèles, soit deux droites confondues.
          </p>
        </Callout>

        <p className="mt-6 mb-3 text-sm">
          Exemple : soient <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" /> deux vecteurs non
          nuls tels que <Math tex="\overrightarrow{AB}=\overrightarrow{CD}" />.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Graph caption="Premier cas">
            <svg viewBox="0 0 260 140" className="mx-auto h-auto w-full max-w-xs">
              <line x1="10" y1="125" x2="160" y2="35" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/>
              <line x1="80" y1="90" x2="210" y2="12" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/>
              <line x1="25" y1="112" x2="120" y2="58" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arr-rose)"/>
              <line x1="95" y1="78" x2="165" y2="38" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arr-rose)"/>
              <text x="10" y="128" fontStyle="italic" fontSize="14">A</text>
              <text x="118" y="52" fontStyle="italic" fontSize="14">B</text>
              <text x="82" y="94" fontStyle="italic" fontSize="14">C</text>
              <text x="168" y="32" fontStyle="italic" fontSize="14">D</text>
            </svg>
          </Graph>
          <Graph caption="Deuxième cas (points alignés)">
            <svg viewBox="0 0 260 140" className="mx-auto h-auto w-full max-w-xs">
              <line x1="10" y1="70" x2="250" y2="70" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/>
              <line x1="20" y1="70" x2="95" y2="70" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arr-rose)"/>
              <line x1="115" y1="70" x2="230" y2="70" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arr-rose)"/>
              <text x="14" y="60" fontStyle="italic" fontSize="14">A</text>
              <text x="90" y="60" fontStyle="italic" fontSize="14">B</text>
              <text x="110" y="60" fontStyle="italic" fontSize="14">C</text>
              <text x="225" y="60" fontStyle="italic" fontSize="14">D</text>
            </svg>
          </Graph>
        </div>

        <p className="mt-6 mb-2 text-xs font-semibold uppercase text-foreground-muted">b) Propriété 2</p>
        <Callout variant="info" title="Propriété">
          <p>
            Soit <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" /> deux vecteurs non nuls.{" "}
            <Math tex="\overrightarrow{AB}=\overrightarrow{CD}" /> équivaut à <strong>ABDC est un parallélogramme</strong>.
          </p>
        </Callout>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Graph caption="Parallélogramme ABDC">
            <svg viewBox="0 0 300 170" className="mx-auto h-auto w-full max-w-xs">
              <line x1="60" y1="40" x2="220" y2="40" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arr-indigo)"/>
              <line x1="100" y1="140" x2="260" y2="140" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arr-indigo)"/>
              <line x1="60" y1="40" x2="100" y2="140" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3"/>
              <line x1="220" y1="40" x2="260" y2="140" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3"/>
              <circle cx="60" cy="40" r="3"/><circle cx="220" cy="40" r="3"/><circle cx="100" cy="140" r="3"/><circle cx="260" cy="140" r="3"/>
              <text x="45" y="30" fontStyle="italic" fontSize="15">A</text>
              <text x="225" y="30" fontStyle="italic" fontSize="15">B</text>
              <text x="30" y="205" fontStyle="italic" fontSize="15">D</text>
              <text x="214" y="208" fontStyle="italic" fontSize="15">C</text>
            </svg>
          </Graph>
          <Graph caption="Parallélogramme aplati">
            <svg viewBox="0 0 300 170" className="mx-auto h-auto w-full max-w-xs">
              <line x1="20" y1="90" x2="280" y2="90" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/>
              <line x1="35" y1="90" x2="140" y2="90" stroke="#4f46e5" strokeWidth="3" markerEnd="url(#arr-indigo)"/>
              <line x1="165" y1="90" x2="265" y2="90" stroke="#4f46e5" strokeWidth="3" markerEnd="url(#arr-indigo)"/>
              <text x="28" y="78" fontStyle="italic" fontSize="14">A</text>
              <text x="136" y="78" fontStyle="italic" fontSize="14">C</text>
              <text x="160" y="78" fontStyle="italic" fontSize="14">B</text>
              <text x="258" y="78" fontStyle="italic" fontSize="14">D</text>
            </svg>
          </Graph>
        </div>

        <div className="mt-6">
          <ExerciseCard
            id="vt-app-egalite"
            index={1}
            title="Applique"
            items={
              <div className="text-sm">
                <p>Soit <Math tex="ABC" /> un triangle.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Construis le point <Math tex="E" /> tel que <Math tex="\overrightarrow{AE}=\overrightarrow{BC}" />.</li>
                  <li>Montre que <Math tex="\overrightarrow{AB}=\overrightarrow{EC}" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>1) La figure : <Math tex="\overrightarrow{AE}=\overrightarrow{BC}" /> signifie que <Math tex="AECB" /> est un parallélogramme.</p>
                <Graph>
                  <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-xs">
                    <line x1="150" y1="30" x2="330" y2="30" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/>
                    <polygon points="150,30 40,175 260,175 330,30" fill="none" stroke="#cbd5e1" strokeWidth="1"/>
                    <line x1="150" y1="30" x2="330" y2="30" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arr-indigo)"/>
                    <line x1="150" y1="30" x2="40" y2="175" stroke="#334155" strokeWidth="1.5"/>
                    <line x1="150" y1="30" x2="260" y2="175" stroke="#334155" strokeWidth="1.5"/>
                    <line x1="40" y1="175" x2="260" y2="175" stroke="#334155" strokeWidth="1.5"/>
                    <circle cx="150" cy="30" r="3"/><circle cx="330" cy="30" r="3"/><circle cx="40" cy="175" r="3"/><circle cx="260" cy="175" r="3"/>
                    <text x="140" y="20" fontStyle="italic" fontSize="15">A</text>
                    <text x="335" y="24" fontStyle="italic" fontSize="15">E</text>
                    <text x="22" y="195" fontStyle="italic" fontSize="15">B</text>
                    <text x="266" y="195" fontStyle="italic" fontSize="15">C</text>
                  </svg>
                </Graph>
                <p>2) <Math tex="AECB" /> est un parallélogramme, c&apos;est-à-dire que <Math tex="ABCE" /> est un
                  parallélogramme (mêmes 4 sommets, parcourus dans l&apos;autre sens).</p>
                <p className="font-semibold text-green-700">D&apos;où : <Math tex="\overrightarrow{AB}=\overrightarrow{EC}" />.</p>
              </div>
            }
          />
        </div>

        <Sub n="4" title="L'opposé d'un vecteur non nul" />
        <Callout variant="info" title="Propriété">
          <p>
            L&apos;opposé d&apos;un vecteur non nul <Math tex="\overrightarrow{AB}" /> est le vecteur{" "}
            <Math tex="-\overrightarrow{AB}" />, noté <Math tex="\overrightarrow{BA}" />. On écrit :{" "}
            <Math tex="-\overrightarrow{AB}=\overrightarrow{BA}" />.
          </p>
        </Callout>

        <Sub n="5" title="Relation de Chasles" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Propriété</p>
        <Callout variant="info" title="Propriété">
          <p>
            Si <Math tex="A, B" /> et <Math tex="C" /> sont trois points distincts, alors :{" "}
            <Math tex="\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}" />
          </p>
        </Callout>
        <Graph>
          <svg viewBox="0 0 300 140" className="mx-auto h-auto w-full max-w-xs">
            <line x1="30" y1="120" x2="150" y2="20" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arr-indigo)"/>
            <line x1="150" y1="20" x2="280" y2="70" stroke="#e11d48" strokeWidth="2.5" markerEnd="url(#arr-rose)"/>
            <line x1="30" y1="120" x2="280" y2="70" stroke="#059669" strokeWidth="2.5" strokeDasharray="6 3" markerEnd="url(#arr-emerald)"/>
            <text x="15" y="135" fontStyle="italic" fontSize="15">A</text>
            <text x="145" y="12" fontStyle="italic" fontSize="15">B</text>
            <text x="284" y="66" fontStyle="italic" fontSize="15">C</text>
          </svg>
        </Graph>
        <p className="mt-4 mb-2 text-xs font-semibold uppercase text-foreground-muted">b) Exemples : simplifie les écritures suivantes</p>
        <div className="space-y-3">
          <Example>
            <p><Math tex="\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}" /></p>
            <p className="mt-1 text-foreground-muted"><Math tex="=(\overrightarrow{AB}+\overrightarrow{BC})+\overrightarrow{CA}=\overrightarrow{AC}+\overrightarrow{CA}=\overrightarrow{AA}=\vec 0" /></p>
          </Example>
          <Example>
            <p><Math tex="\overrightarrow{AC}-\overrightarrow{BC}+\overrightarrow{BE}" /></p>
            <p className="mt-1 text-foreground-muted"><Math tex="=(\overrightarrow{AC}+\overrightarrow{CB})+\overrightarrow{BE}=\overrightarrow{AB}+\overrightarrow{BE}=\overrightarrow{AE}" /></p>
          </Example>
          <Example>
            <p><Math tex="\overrightarrow{AB}+\overrightarrow{ED}+\overrightarrow{BE}+\overrightarrow{DC}" /></p>
            <p className="mt-1 text-foreground-muted"><Math tex="=(\overrightarrow{AB}+\overrightarrow{BE})+(\overrightarrow{ED}+\overrightarrow{DC})=\overrightarrow{AE}+\overrightarrow{EC}=\overrightarrow{AC}" /></p>
          </Example>
        </div>

        <Sub n="6" title="Somme de deux vecteurs" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Propriété</p>
        <Callout variant="info" title="Propriété">
          <p>
            <Math tex="ABCD" /> est un parallélogramme équivaut à : <Math tex="\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}" />.
          </p>
        </Callout>
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Graph>
            <svg viewBox="0 0 300 220" className="mx-auto h-auto w-full max-w-xs">
              <polygon points="90,50 250,50 210,190 50,190" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="90" y1="50" x2="250" y2="50" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arr-indigo)"/>
              <line x1="90" y1="50" x2="50" y2="190" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arr-emerald)"/>
              <line x1="90" y1="50" x2="210" y2="190" stroke="#e11d48" strokeWidth="3" markerEnd="url(#arr-rose)"/>
              <circle cx="90" cy="50" r="3"/><circle cx="250" cy="50" r="3"/><circle cx="50" cy="190" r="3"/><circle cx="210" cy="190" r="3"/>
              <text x="75" y="38" fontStyle="italic" fontSize="15">A</text>
              <text x="256" y="46" fontStyle="italic" fontSize="15">B</text>
              <text x="30" y="205" fontStyle="italic" fontSize="15">D</text>
              <text x="214" y="208" fontStyle="italic" fontSize="15">C</text>
            </svg>
          </Graph>
          <p className="text-sm">
            On a <Math tex="\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{AD}" />, avec <Math tex="ABCD" />{" "}
            un parallélogramme (diagonale <Math tex="\overrightarrow{AC}" /> en rouge).
          </p>
        </div>

        <div className="mt-6">
          <ExerciseCard
            id="vt-app-somme"
            index={2}
            title="Applique"
            items={
              <div className="text-sm">
                <p>Soit <Math tex="ABC" /> un triangle.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>
                    a) Construis <Math tex="E" /> tel que <Math tex="\overrightarrow{AC}=\overrightarrow{AE}+\overrightarrow{AB}" />.
                    <br />b) Construis <Math tex="M" /> et <Math tex="N" />, symétriques respectifs de <Math tex="A" /> et{" "}
                    <Math tex="C" /> par rapport à <Math tex="B" />.
                  </li>
                  <li>Montre que <Math tex="\overrightarrow{NC}=\overrightarrow{NA}+\overrightarrow{NM}" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>1) a) <Math tex="\overrightarrow{AC}=\overrightarrow{AE}+\overrightarrow{AB}" /> signifie que <Math tex="AECB" /> est un parallélogramme.</p>
                <p>b) <Math tex="M,N" /> symétriques de <Math tex="A,C" /> par rapport à <Math tex="B" /> signifie que{" "}
                  <Math tex="B" /> est le milieu des segments <Math tex="[AM]" /> et <Math tex="[CN]" />.</p>
                <p>2) Montrons que <Math tex="NACM" /> est un parallélogramme : <Math tex="[AM]" /> et <Math tex="[CN]" />{" "}
                  ont même milieu <Math tex="B" />, donc <Math tex="NACM" /> est un parallélogramme (ses diagonales se
                  coupent en leur milieu).</p>
                <p className="font-semibold text-green-700">D&apos;où : <Math tex="\overrightarrow{NC}=\overrightarrow{NA}+\overrightarrow{NM}" />.</p>
              </div>
            }
          />
        </div>

        <Sub n="7" title="Vecteur et milieu d'un segment" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Propriété</p>
        <Callout variant="info" title="Propriété">
          <p>
            Soient <Math tex="[AB]" /> un segment et <Math tex="E" /> un point. <Math tex="E" /> milieu de{" "}
            <Math tex="[AB]" /> équivaut à <Math tex="\overrightarrow{AE}=\overrightarrow{EB}" />.
          </p>
        </Callout>
        <Graph>
          <svg viewBox="0 0 300 60" className="mx-auto h-auto w-full max-w-xs">
            <line x1="20" y1="30" x2="280" y2="30" stroke="#334155" strokeWidth="2" markerEnd="url(#arr-slate)"/>
            <circle cx="20" cy="30" r="3.5" fill="#1e293b"/><circle cx="150" cy="30" r="3.5" fill="#1e293b"/><circle cx="280" cy="30" r="3.5" fill="#1e293b"/>
            <line x1="78" y1="24" x2="86" y2="36" stroke="#1e293b" strokeWidth="1.5"/>
            <line x1="212" y1="24" x2="220" y2="36" stroke="#1e293b" strokeWidth="1.5"/>
            <text x="12" y="52" fontStyle="italic" fontSize="15">A</text>
            <text x="146" y="52" fontStyle="italic" fontSize="15">E</text>
            <text x="276" y="52" fontStyle="italic" fontSize="15">B</text>
          </svg>
        </Graph>

        <div className="mt-6">
          <ExerciseCard
            id="vt-app-milieu"
            index={3}
            title="Applique"
            items={
              <div className="text-sm">
                <p>
                  Soit <Math tex="ABCD" /> un parallélogramme, <Math tex="E" /> et <Math tex="F" /> tels que{" "}
                  <Math tex="\overrightarrow{DC}=\overrightarrow{CE}" /> et <Math tex="\overrightarrow{BC}=\overrightarrow{FE}" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Construis la figure.</li>
                  <li>Montre que <Math tex="B" /> est le milieu du segment <Math tex="[AF]" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>1) <Math tex="\overrightarrow{DC}=\overrightarrow{CE}" /> signifie que <Math tex="C" /> est le
                  milieu de <Math tex="[DE]" />. <Math tex="\overrightarrow{BC}=\overrightarrow{FE}" /> signifie que{" "}
                  <Math tex="BCEF" /> est un parallélogramme.</p>
                <p>2) <Math tex="ABCD" /> parallélogramme donc <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />.
                  Or <Math tex="\overrightarrow{DC}=\overrightarrow{CE}" />, donc <Math tex="\overrightarrow{AB}=\overrightarrow{CE}" /> (1).</p>
                <p>Et puisque <Math tex="BCEF" /> est un parallélogramme, <Math tex="\overrightarrow{CE}=\overrightarrow{BF}" /> (2).</p>
                <p className="font-semibold text-green-700">De (1) et (2) : <Math tex="\overrightarrow{AB}=\overrightarrow{BF}" />. D&apos;où <Math tex="B" /> est le milieu du segment <Math tex="[AF]" />.</p>
              </div>
            }
          />
        </div>

        <Sub n="8" title="Produit d'un vecteur par un nombre réel" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Soient <Math tex="\overrightarrow{AB}" /> un vecteur non nul, <Math tex="E" /> un point et <Math tex="k" />{" "}
            un réel. On appelle <Math tex="\overrightarrow{AE}=k\,\overrightarrow{AB}" /> le produit du vecteur{" "}
            <Math tex="\overrightarrow{AB}" /> par le réel <Math tex="k" />, tel que :
          </p>
          <div className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="mb-1 font-semibold">Si <Math tex="k>0" /></p>
              <p><Math tex="E\in(AB)" /></p>
              <p><Math tex="\overrightarrow{AE}" /> et <Math tex="\overrightarrow{AB}" /> ont même sens</p>
              <p><Math tex="AE=k\times AB" /></p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="mb-1 font-semibold">Si <Math tex="k<0" /></p>
              <p><Math tex="E\in(AB)" /></p>
              <p><Math tex="\overrightarrow{AE}" /> et <Math tex="\overrightarrow{AB}" /> ont des sens opposés</p>
              <p><Math tex="AE=-k\times AB" /></p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="mb-1 font-semibold">Si <Math tex="k=0" /></p>
              <p><Math tex="E" /> et <Math tex="A" /> sont confondus.</p>
            </div>
          </div>
        </Callout>
        <p className="mt-6 mb-2 text-xs font-semibold uppercase text-foreground-muted">b) Exemple</p>
        <p className="mb-3 text-sm">
          Soit <Math tex="ABC" /> un triangle. Construisons <Math tex="E" /> et <Math tex="F" /> tels que{" "}
          <Math tex="\overrightarrow{AE}=2\overrightarrow{AB}" /> et <Math tex="\overrightarrow{BF}=\dfrac{-3}{2}\overrightarrow{BC}" />.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Example>
            <p><Math tex="\overrightarrow{AE}=2\overrightarrow{AB}" /> et <Math tex="2>0" />, donc :</p>
            <p className="mt-1"><Math tex="E\in(AB)" /> ; <Math tex="\overrightarrow{AE}" /> et <Math tex="\overrightarrow{AB}" /> ont même sens ; <Math tex="AE=2\times AB" />.</p>
          </Example>
          <Example>
            <p><Math tex="\overrightarrow{BF}=\dfrac{-3}{2}\overrightarrow{BC}" /> et <Math tex="\dfrac{-3}{2}<0" />, donc :</p>
            <p className="mt-1"><Math tex="F\in(BC)" /> ; <Math tex="\overrightarrow{BF}" /> et <Math tex="\overrightarrow{BC}" /> ont des sens opposés ; <Math tex="BF=\dfrac{3}{2}\times BC" />.</p>
          </Example>
        </div>
        <Graph className="mt-4 max-w-sm">
          <svg viewBox="0 0 360 240" className="mx-auto h-auto w-full">
            <line x1="30" y1="220" x2="330" y2="30" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/>
            <line x1="30" y1="220" x2="290" y2="80" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/>
            <line x1="180" y1="30" x2="115" y2="150" stroke="#334155" strokeWidth="1.5"/>
            <line x1="180" y1="30" x2="290" y2="80" stroke="#334155" strokeWidth="1.5"/>
            <line x1="115" y1="150" x2="55" y2="205" stroke="#334155" strokeWidth="1.5"/>
            <circle cx="180" cy="30" r="3.5"/><circle cx="115" cy="150" r="3.5"/><circle cx="290" cy="80" r="3.5"/><circle cx="55" cy="205" r="3.5"/>
            <text x="185" y="24" fontStyle="italic" fontSize="15">A</text>
            <text x="95" y="150" fontStyle="italic" fontSize="15">B</text>
            <text x="296" y="76" fontStyle="italic" fontSize="15">C</text>
            <text x="34" y="222" fontStyle="italic" fontSize="15">F</text>
            <text x="330" y="24" fontStyle="italic" fontSize="15">E</text>
          </svg>
        </Graph>

        <Sub n="9" title="Points alignés et droites parallèles" />
        <Callout variant="info" title="Propriété">
          <p>Soient <Math tex="A,B,C,D" /> des points distincts et <Math tex="k" /> un réel non nul.</p>
          <p className="mt-1">
            <Math tex="\overrightarrow{AB}=k\overrightarrow{AC}" /> équivaut à <Math tex="A,B,C" /> alignés (on dit
            aussi <Math tex="B\in(AC)" />).
          </p>
          <p className="mt-1">
            <Math tex="\overrightarrow{AB}=k\overrightarrow{CD}" /> équivaut à <Math tex="(AB)\parallel(CD)" />.
          </p>
        </Callout>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <ExerciseCard
            id="vt-app-align-1"
            index={4}
            title="Applique"
            items={
              <p className="text-sm">
                Soit <Math tex="ABCD" /> un parallélogramme et <Math tex="E" /> tel que{" "}
                <Math tex="\overrightarrow{DE}=\dfrac{2}{3}\overrightarrow{AB}" />. Montre que <Math tex="D,C,E" /> sont
                alignés.
              </p>
            }
            correction={
              <div className="space-y-1.5 text-sm">
                <p>
                  On sait que <Math tex="\overrightarrow{DE}=\dfrac{2}{3}\overrightarrow{AB}" />. Or <Math tex="ABCD" />{" "}
                  est un parallélogramme, donc <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />.
                </p>
                <p>Donc <Math tex="\overrightarrow{DE}=\dfrac{2}{3}\overrightarrow{DC}" />.</p>
                <p className="font-semibold text-green-700">D&apos;où : les points <Math tex="D,C,E" /> sont alignés.</p>
              </div>
            }
          />
          <ExerciseCard
            id="vt-app-align-2"
            index={5}
            title="Applique"
            items={
              <p className="text-sm">
                Soit <Math tex="ABC" /> un triangle, <Math tex="E,F" /> tels que{" "}
                <Math tex="\overrightarrow{AE}=\dfrac{-7}{5}\overrightarrow{BC}" /> et <Math tex="C" /> milieu de{" "}
                <Math tex="[BF]" />. Montre que <Math tex="(AE)\parallel(CF)" />.
              </p>
            }
            correction={
              <div className="space-y-1.5 text-sm">
                <p>
                  On sait que <Math tex="\overrightarrow{AE}=\dfrac{-7}{5}\overrightarrow{BC}" />. Or <Math tex="C" />{" "}
                  est le milieu de <Math tex="[BF]" />, donc <Math tex="\overrightarrow{BC}=\overrightarrow{CF}" />.
                </p>
                <p>Donc <Math tex="\overrightarrow{AE}=\dfrac{-7}{5}\overrightarrow{CF}" />.</p>
                <p className="font-semibold text-green-700">D&apos;où : <Math tex="(AE)\parallel(CF)" />.</p>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== II. LA TRANSLATION ===================== */}
      <LessonSection
        id="translation"
        kicker="02 · Faire glisser une figure"
        title="La translation"
        tone="light"
        description="Une translation déplace tous les points dans la même direction, le même sens, sur la même distance."
      >
        <Sub n="1" title="L'image d'un point par une translation" />
        <p className="mb-2 text-xs font-semibold uppercase text-foreground-muted">a) Exemple</p>
        <p className="mb-3 text-sm">
          Soient <Math tex="A,B" /> et <Math tex="M" /> trois points non alignés. Construisons <Math tex="M'" /> tel
          que <Math tex="\overrightarrow{AB}=\overrightarrow{MM'}" />.
        </p>
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Graph>
            <svg viewBox="0 0 300 200" className="mx-auto h-auto w-full max-w-xs">
              <polygon points="90,50 260,50 250,160 80,160" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3"/>
              <line x1="90" y1="50" x2="260" y2="50" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arr-indigo)"/>
              <line x1="80" y1="160" x2="250" y2="160" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arr-emerald)"/>
              <circle cx="90" cy="50" r="3"/><circle cx="260" cy="50" r="3"/><circle cx="80" cy="160" r="3"/><circle cx="250" cy="160" r="3"/>
              <text x="76" y="40" fontStyle="italic" fontSize="15">A</text>
              <text x="266" y="46" fontStyle="italic" fontSize="15">B</text>
              <text x="62" y="178" fontStyle="italic" fontSize="15">M</text>
              <text x="255" y="178" fontStyle="italic" fontSize="15">M&apos;</text>
            </svg>
          </Graph>
          <Callout variant="info">
            <p>
              On appelle <Math tex="M'" /> l&apos;image du point <Math tex="M" /> par la translation de vecteur{" "}
              <Math tex="\overrightarrow{AB}" /> (ou la translation qui transforme <Math tex="A" /> en <Math tex="B" />).
            </p>
          </Callout>
        </div>
        <p className="mt-6 mb-2 text-xs font-semibold uppercase text-foreground-muted">b) Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Soient <Math tex="\overrightarrow{AB}" /> un vecteur non nul et <Math tex="M" /> un point. On appelle{" "}
            <Math tex="M'" /> l&apos;image de <Math tex="M" /> par la translation de vecteur <Math tex="\overrightarrow{AB}" />{" "}
            (ou qui transforme <Math tex="A" /> en <Math tex="B" />) telle que <Math tex="\overrightarrow{AB}=\overrightarrow{MM'}" />
            , ce qui signifie que <strong><Math tex="ABM'M" /> est un parallélogramme</strong>.
          </p>
        </Callout>

        <Sub n="2" title="Propriété caractéristique" />
        <Callout variant="info" title="Propriété">
          <p>
            Si <Math tex="A'" /> et <Math tex="B'" /> sont les images respectives de <Math tex="A" /> et{" "}
            <Math tex="B" /> par une translation, alors : <Math tex="\overrightarrow{A'B'}=\overrightarrow{AB}" />.
          </p>
        </Callout>
        <div className="mt-4">
          <ExerciseCard
            id="vt-app-carac"
            index={6}
            title="Applique"
            items={
              <p className="text-sm">
                Soit <Math tex="ABC" /> un triangle. On considère la translation <Math tex="t" /> qui transforme{" "}
                <Math tex="B" /> en <Math tex="C" />. Soient <Math tex="E" /> et <Math tex="F" /> les images
                respectives de <Math tex="A" /> et <Math tex="C" /> par <Math tex="t" />. Montre que <Math tex="AEFC" />{" "}
                est un parallélogramme.
              </p>
            }
            correction={
              <div className="space-y-1.5 text-sm">
                <p>
                  <Math tex="E" /> et <Math tex="F" /> images respectives de <Math tex="A" /> et <Math tex="C" /> par{" "}
                  <Math tex="t" /> : la propriété caractéristique donne <Math tex="\overrightarrow{EF}=\overrightarrow{AC}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="EFCA" /> est un parallélogramme, c&apos;est-à-dire que <Math tex="AEFC" /> est un
                  parallélogramme.
                </p>
              </div>
            }
          />
        </div>

        <Sub n="3" title="L'image de quelques figures par une translation" />
        <Callout variant="info" title="Propriété">
          <ul className="space-y-1.5">
            <li><strong>Segment</strong> : l&apos;image d&apos;un segment est un segment de même longueur.</li>
            <li><strong>Droite</strong> : l&apos;image d&apos;une droite est une droite qui lui est parallèle.</li>
            <li><strong>Angle</strong> : l&apos;image d&apos;un angle est un angle de même mesure.</li>
          </ul>
        </Callout>
        <div className="mt-4">
          <ExerciseCard
            id="vt-app-figures"
            index={7}
            title="Applique"
            items={
              <div className="text-sm">
                <p>
                  Soit <Math tex="ABC" /> un triangle tel que <Math tex="AB=4\,cm" /> et{" "}
                  <Math tex="\widehat{BAC}=70°" />. On considère la translation <Math tex="t" /> de vecteur{" "}
                  <Math tex="\overrightarrow{AC}" />. Soient <Math tex="E" /> et <Math tex="F" /> les images
                  respectives de <Math tex="C" /> et <Math tex="B" /> par <Math tex="t" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Trace la figure.</li>
                  <li>Montre que <Math tex="(BC)\parallel(EF)" />.</li>
                  <li>Calcule <Math tex="CF" />.</li>
                  <li>Calcule <Math tex="\widehat{FCE}" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-1.5 text-sm">
                <p>1) <Math tex="E" /> est l&apos;image de <Math tex="C" /> donc <Math tex="C" /> est le milieu de{" "}
                  <Math tex="[AE]" /> ; <Math tex="F" /> est l&apos;image de <Math tex="B" /> donc <Math tex="ACFB" />{" "}
                  est un parallélogramme.</p>
                <p>2) <Math tex="E" /> image de <Math tex="C" />, <Math tex="F" /> image de <Math tex="B" /> par{" "}
                  <Math tex="t" /> : la droite <Math tex="(EF)" /> est l&apos;image de <Math tex="(CB)" />. D&apos;où{" "}
                  <Math tex="(BC)\parallel(EF)" />.</p>
                <p>3) <Math tex="t" /> est de vecteur <Math tex="\overrightarrow{AC}" />, donc <Math tex="C" /> est
                  l&apos;image de <Math tex="A" /> et <Math tex="F" /> celle de <Math tex="B" /> : <Math tex="[CF]" />{" "}
                  est l&apos;image de <Math tex="[AB]" />, d&apos;où <Math tex="CF=AB=4\,cm" />.</p>
                <p className="font-semibold text-green-700">
                  4) <Math tex="F,C,E" /> images de <Math tex="B,A,C" /> par <Math tex="t" />, donc{" "}
                  <Math tex="\widehat{FCE}" /> est l&apos;image de <Math tex="\widehat{BAC}" />. D&apos;où{" "}
                  <Math tex="\widehat{FCE}=\widehat{BAC}=70°" />.
                </p>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="8 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={8} celebrationTitle="Bravo, les 8 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les vecteurs et la translation.">
          <ExerciseCard
            id="1"
            index={1}
            title="Vecteurs égaux et construction"
            items={
              <div className="text-sm">
                <p><Math tex="ABC" /> est un triangle.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Construis <Math tex="E" /> tel que : <Math tex="\overrightarrow{AE}=\overrightarrow{AB}+\overrightarrow{AC}" />.</li>
                  <li>Construis <Math tex="F" /> tel que : <Math tex="\overrightarrow{AF}=2\overrightarrow{AB}" />.</li>
                  <li>Construis <Math tex="G" /> tel que : <Math tex="\overrightarrow{AG}=2\overrightarrow{AC}" />.</li>
                  <li>Détermine deux vecteurs égaux au vecteur <Math tex="\overrightarrow{BA}" />.</li>
                  <li>Détermine deux vecteurs égaux au vecteur <Math tex="\overrightarrow{CB}" />.</li>
                  <li>Écris <Math tex="\overrightarrow{GE}" /> en fonction de <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{AC}" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <Graph className="max-w-sm">
                    <svg viewBox="0 0 420 380" className="mx-auto h-auto w-full">
                      <line x1="40" y1="330" x2="340" y2="300" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                      <line x1="40" y1="330" x2="120" y2="110" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                      <line x1="190" y1="315" x2="230" y2="205" stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="3 3"/>
                      <line x1="120" y1="110" x2="230" y2="205" stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="3 3"/>
                      <line x1="190" y1="315" x2="230" y2="205" stroke="#e2e8f0" strokeWidth="1"/>
                      <polygon points="40,330 190,315 80,220" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1" opacity="0.4"/>
                      <line x1="40" y1="330" x2="190" y2="315" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="40" y1="330" x2="80" y2="220" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="190" y1="315" x2="80" y2="220" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="40" y1="330" x2="230" y2="205" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#arr-rose)"/>
                      <line x1="40" y1="330" x2="340" y2="300" stroke="#4f46e5" strokeWidth="2.2" markerEnd="url(#arr-indigo)"/>
                      <line x1="40" y1="330" x2="120" y2="110" stroke="#059669" strokeWidth="2.2" markerEnd="url(#arr-emerald)"/>
                      <line x1="120" y1="110" x2="230" y2="205" stroke="#d97706" strokeWidth="2.2" strokeDasharray="2 3" markerEnd="url(#arr-amber)"/>
                      <circle cx="40" cy="330" r="4" fill="#1e293b"/><circle cx="190" cy="315" r="4" fill="#1e293b"/><circle cx="80" cy="220" r="4" fill="#1e293b"/>
                      <circle cx="230" cy="205" r="4" fill="#e11d48"/><circle cx="340" cy="300" r="4" fill="#4f46e5"/><circle cx="120" cy="110" r="4" fill="#059669"/>
                      <text x="22" y="350" fontStyle="italic" fontSize="16" fontWeight="600">A</text>
                      <text x="196" y="335" fontStyle="italic" fontSize="16" fontWeight="600">B</text>
                      <text x="58" y="215" fontStyle="italic" fontSize="16" fontWeight="600">C</text>
                      <text x="236" y="200" fontStyle="italic" fontSize="16" fontWeight="600" fill="#e11d48">E</text>
                      <text x="346" y="298" fontStyle="italic" fontSize="16" fontWeight="600" fill="#4f46e5">F</text>
                      <text x="98" y="102" fontStyle="italic" fontSize="16" fontWeight="600" fill="#059669">G</text>
                    </svg>
                  </Graph>
                  <div className="space-y-1.5">
                    <p><span className="font-semibold text-rose-600">E</span> tel que <Math tex="\overrightarrow{AE}=\overrightarrow{AB}+\overrightarrow{AC}" /> : <Math tex="E" /> est tel que <Math tex="ABEC" /> soit un parallélogramme (symétrique de <Math tex="A" /> par rapport au milieu de <Math tex="[BC]" />).</p>
                    <p><span className="font-semibold text-indigo-600">F</span> tel que <Math tex="\overrightarrow{AF}=2\overrightarrow{AB}" /> : <Math tex="F\in(AB)" /> avec <Math tex="B" /> milieu de <Math tex="[AF]" />.</p>
                    <p><span className="font-semibold text-emerald-600">G</span> tel que <Math tex="\overrightarrow{AG}=2\overrightarrow{AC}" /> : <Math tex="G\in(AC)" /> avec <Math tex="C" /> milieu de <Math tex="[AG]" />.</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                    <p className="mb-1 font-semibold">4) Vecteurs égaux à <Math tex="\overrightarrow{BA}" /></p>
                    <p>Puisque <Math tex="ABEC" /> est un parallélogramme : <Math tex="\overrightarrow{EC}=\overrightarrow{BA}" />.</p>
                    <p>Puisque <Math tex="B" /> est le milieu de <Math tex="[AF]" /> : <Math tex="\overrightarrow{FB}=\overrightarrow{BA}" />.</p>
                    <p className="mt-1 font-semibold text-green-700">Donc : <Math tex="\overrightarrow{EC}=\overrightarrow{BA}" /> et <Math tex="\overrightarrow{FB}=\overrightarrow{BA}" />.</p>
                  </div>
                  <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                    <p className="mb-1 font-semibold">5) Vecteurs égaux à <Math tex="\overrightarrow{CB}" /></p>
                    <p>On montre (à l&apos;aide de <Math tex="E,F,G" />) que : <Math tex="\overrightarrow{EF}=\overrightarrow{CB}" /> et <Math tex="\overrightarrow{GE}=\overrightarrow{CB}" />.</p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-semibold">6) <Math tex="\overrightarrow{GE}" /> en fonction de <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{AC}" /></p>
                  <p>On a trouvé <Math tex="\overrightarrow{GE}=\overrightarrow{CB}" />. Or par Chasles : <Math tex="\overrightarrow{CB}=\overrightarrow{CA}+\overrightarrow{AB}=\overrightarrow{AB}-\overrightarrow{AC}" />.</p>
                  <p className="mt-1 font-semibold text-green-700">D&apos;où : <Math tex="\overrightarrow{GE}=\overrightarrow{AB}-\overrightarrow{AC}" />.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Combinaison de vecteurs"
            items={
              <div className="text-sm">
                <p><Math tex="ABC" /> est un triangle.</p>
                <p className="mt-2">
                  Construis le point <Math tex="M" /> tel que : <Math tex="\overrightarrow{AM}=2\overrightarrow{AB}+\dfrac{3}{2}\overrightarrow{AC}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Méthode de construction : on décompose en deux étapes, puis on applique la règle du parallélogramme.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Construis <Math tex="P" /> tel que <Math tex="\overrightarrow{AP}=2\overrightarrow{AB}" /> (<Math tex="P\in(AB)" />, <Math tex="B" /> milieu de <Math tex="[AP]" />).</li>
                  <li>Construis <Math tex="Q" /> tel que <Math tex="\overrightarrow{AQ}=\dfrac{3}{2}\overrightarrow{AC}" /> (<Math tex="Q\in(AC)" />, au-delà de <Math tex="C" />).</li>
                  <li>Construis <Math tex="M" /> tel que <Math tex="APMQ" /> soit un parallélogramme : alors <Math tex="\overrightarrow{AM}=\overrightarrow{AP}+\overrightarrow{AQ}=2\overrightarrow{AB}+\dfrac{3}{2}\overrightarrow{AC}" />.</li>
                </ol>
                <Graph className="max-w-sm">
                  <svg viewBox="0 0 440 380" className="mx-auto h-auto w-full">
                    <line x1="40" y1="330" x2="340" y2="300" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                    <line x1="40" y1="330" x2="100" y2="165" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                    <polygon points="40,330 190,316.5 80,231" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1" opacity="0.4"/>
                    <line x1="40" y1="330" x2="190" y2="316.5" stroke="#1e293b" strokeWidth="1.5"/>
                    <line x1="40" y1="330" x2="80" y2="231" stroke="#1e293b" strokeWidth="1.5"/>
                    <line x1="190" y1="316.5" x2="80" y2="231" stroke="#1e293b" strokeWidth="1.5"/>
                    <line x1="40" y1="330" x2="310" y2="303" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arr-indigo)"/>
                    <line x1="40" y1="330" x2="94" y2="181.5" stroke="#059669" strokeWidth="2" markerEnd="url(#arr-emerald)"/>
                    <line x1="310" y1="303" x2="364" y2="154.5" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3"/>
                    <line x1="94" y1="181.5" x2="364" y2="154.5" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3"/>
                    <line x1="40" y1="330" x2="364" y2="154.5" stroke="#e11d48" strokeWidth="2.4" markerEnd="url(#arr-rose)"/>
                    <circle cx="40" cy="330" r="4"/><circle cx="190" cy="316.5" r="4"/><circle cx="80" cy="231" r="4"/>
                    <circle cx="310" cy="303" r="4" fill="#4f46e5"/><circle cx="94" cy="181.5" r="4" fill="#059669"/><circle cx="364" cy="154.5" r="4" fill="#e11d48"/>
                    <text x="22" y="350" fontStyle="italic" fontSize="15" fontWeight="600">A</text>
                    <text x="196" y="336" fontStyle="italic" fontSize="15" fontWeight="600">B</text>
                    <text x="58" y="222" fontStyle="italic" fontSize="15" fontWeight="600">C</text>
                    <text x="316" y="300" fontStyle="italic" fontSize="15" fontWeight="600" fill="#4f46e5">P</text>
                    <text x="60" y="178" fontStyle="italic" fontSize="15" fontWeight="600" fill="#059669">Q</text>
                    <text x="370" y="150" fontStyle="italic" fontSize="15" fontWeight="600" fill="#e11d48">M</text>
                  </svg>
                </Graph>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Démonstration : parallélogramme"
            items={
              <div className="text-sm">
                <p><Math tex="ABCD" /> est un parallélogramme.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Construis <Math tex="E" /> et <Math tex="F" /> tels que : <Math tex="\overrightarrow{BE}=\overrightarrow{AB}" /> et <Math tex="\overrightarrow{DF}=\overrightarrow{CD}" />.</li>
                  <li>Montre que le quadrilatère <Math tex="BEDF" /> est un parallélogramme.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <Graph className="max-w-sm">
                    <svg viewBox="0 0 400 280" className="mx-auto h-auto w-full">
                      <polygon points="100,230 220,230 280,170 160,170" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.3" opacity="0.5"/>
                      <line x1="40" y1="170" x2="280" y2="170" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                      <line x1="100" y1="230" x2="340" y2="230" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                      <line x1="100" y1="230" x2="220" y2="230" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#arr-rose)"/>
                      <line x1="220" y1="230" x2="340" y2="230" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#arr-rose)"/>
                      <line x1="40" y1="170" x2="160" y2="170" stroke="#059669" strokeWidth="2.2" markerEnd="url(#arr-emerald)"/>
                      <line x1="160" y1="170" x2="280" y2="170" stroke="#059669" strokeWidth="2.2" markerEnd="url(#arr-emerald)"/>
                      <line x1="100" y1="230" x2="40" y2="170" stroke="#1e293b" strokeWidth="1"/>
                      <line x1="220" y1="230" x2="280" y2="170" stroke="#1e293b" strokeWidth="1"/>
                      <line x1="340" y1="230" x2="160" y2="170" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="2 3"/>
                      <circle cx="100" cy="230" r="4"/><circle cx="220" cy="230" r="4"/><circle cx="280" cy="170" r="4"/><circle cx="160" cy="170" r="4"/>
                      <circle cx="340" cy="230" r="4" fill="#e11d48"/><circle cx="40" cy="170" r="4" fill="#059669"/>
                      <text x="84" y="250" fontStyle="italic" fontSize="15" fontWeight="600">A</text>
                      <text x="214" y="250" fontStyle="italic" fontSize="15" fontWeight="600">B</text>
                      <text x="286" y="164" fontStyle="italic" fontSize="15" fontWeight="600">C</text>
                      <text x="144" y="164" fontStyle="italic" fontSize="15" fontWeight="600">D</text>
                      <text x="346" y="228" fontStyle="italic" fontSize="15" fontWeight="600" fill="#e11d48">E</text>
                      <text x="18" y="164" fontStyle="italic" fontSize="15" fontWeight="600" fill="#059669">F</text>
                    </svg>
                  </Graph>
                  <div className="space-y-1.5">
                    <p><Math tex="ABCD" /> est un parallélogramme, donc <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />.</p>
                    <p>Or <Math tex="\overrightarrow{BE}=\overrightarrow{AB}" />, donc <Math tex="\overrightarrow{BE}=\overrightarrow{DC}" /> (1)</p>
                    <p>Et <Math tex="\overrightarrow{DF}=\overrightarrow{CD}=-\overrightarrow{DC}" />, donc <Math tex="\overrightarrow{FD}=\overrightarrow{DC}" /> (2)</p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>De (1) et (2) : <Math tex="\overrightarrow{BE}=\overrightarrow{FD}" />.</p>
                  <p className="mt-1 font-semibold text-green-700">D&apos;où : <Math tex="BEDF" /> est un parallélogramme.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Calcul et relation de Chasles"
            items={
              <div className="text-sm">
                <p className="font-semibold">1. Exprime le plus simplement possible :</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <Example><Math tex="\overrightarrow{AC}-\overrightarrow{BC}" /></Example>
                  <Example><Math tex="\overrightarrow{AD}-\overrightarrow{FD}+\overrightarrow{ED}-\overrightarrow{AF}+\overrightarrow{BE}+\overrightarrow{AB}" /></Example>
                  <Example><Math tex="\overrightarrow{FE}-\overrightarrow{GE}-\overrightarrow{GF}+\overrightarrow{GH}+\overrightarrow{GF}" /></Example>
                  <Example><Math tex="\overrightarrow{AB}-\overrightarrow{BD}+\overrightarrow{CA}-\overrightarrow{CB}" /></Example>
                  <div className="sm:col-span-2"><Example><Math tex="3\big(\overrightarrow{AB}-2\overrightarrow{DA}\big)-2\big(\overrightarrow{AB}-3\overrightarrow{DA}\big)" /></Example></div>
                </div>
                <p className="mt-4 font-semibold">2. Démontre les égalités suivantes :</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <Example><Math tex="\overrightarrow{AC}+\overrightarrow{BD}=\overrightarrow{AD}+\overrightarrow{BC}" /></Example>
                  <Example><Math tex="\overrightarrow{BE}+\overrightarrow{CB}-\overrightarrow{DE}=\overrightarrow{CD}" /></Example>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">1. Simplifications</p>
                  <div className="mt-2 space-y-2">
                    <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                      <p><Math tex="\overrightarrow{AC}-\overrightarrow{BC}=\overrightarrow{AC}+\overrightarrow{CB}=\overrightarrow{AB}" /></p>
                    </div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                      <p><Math tex="\overrightarrow{AD}-\overrightarrow{FD}+\overrightarrow{ED}-\overrightarrow{AF}+\overrightarrow{BE}+\overrightarrow{AB}=(\overrightarrow{AB}+\overrightarrow{BE}+\overrightarrow{ED}+\overrightarrow{DF}+\overrightarrow{FA})+\overrightarrow{AD}=\overrightarrow{AD}" /></p>
                      <p className="mt-1 text-xs text-foreground-muted">La parenthèse forme une boucle fermée, donc elle vaut <Math tex="\vec 0" />.</p>
                    </div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                      <p><Math tex="\overrightarrow{FE}-\overrightarrow{GE}-\overrightarrow{GF}+\overrightarrow{GH}+\overrightarrow{GF}=(\overrightarrow{FE}+\overrightarrow{EG})+\overrightarrow{GH}=\overrightarrow{FG}+\overrightarrow{GH}=\overrightarrow{FH}" /></p>
                    </div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                      <p><Math tex="\overrightarrow{AB}-\overrightarrow{BD}+\overrightarrow{CA}-\overrightarrow{CB}=(\overrightarrow{AB}+\overrightarrow{BC})+(\overrightarrow{CA}+\overrightarrow{DB}-\overrightarrow{DB})" /></p>
                      <p><Math tex="=\overrightarrow{AC}+\overrightarrow{CA}+\overrightarrow{DB}=\overrightarrow{DB}" /></p>
                    </div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                      <p><Math tex="3(\overrightarrow{AB}-2\overrightarrow{DA})-2(\overrightarrow{AB}-3\overrightarrow{DA})=3\overrightarrow{AB}-6\overrightarrow{DA}-2\overrightarrow{AB}+6\overrightarrow{DA}=\overrightarrow{AB}" /></p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">2. Démonstrations (relation de Chasles)</p>
                  <div className="mt-2 space-y-2">
                    <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                      <p className="font-medium"><Math tex="\overrightarrow{AC}+\overrightarrow{BD}=\overrightarrow{AD}+\overrightarrow{BC}" /></p>
                      <p className="mt-1">Par Chasles : <Math tex="\overrightarrow{AC}=\overrightarrow{AD}+\overrightarrow{DC}" /> et <Math tex="\overrightarrow{BD}=\overrightarrow{BC}+\overrightarrow{CD}" />.</p>
                      <p>En additionnant : <Math tex="\overrightarrow{AC}+\overrightarrow{BD}=\overrightarrow{AD}+\overrightarrow{BC}+(\overrightarrow{DC}+\overrightarrow{CD})=\overrightarrow{AD}+\overrightarrow{BC}" /> (car <Math tex="\overrightarrow{DC}+\overrightarrow{CD}=\vec 0" />). CQFD</p>
                    </div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                      <p className="font-medium"><Math tex="\overrightarrow{BE}+\overrightarrow{CB}-\overrightarrow{DE}=\overrightarrow{CD}" /></p>
                      <p className="mt-1">Par Chasles : <Math tex="\overrightarrow{CB}+\overrightarrow{BE}=\overrightarrow{CE}" /> (i) et <Math tex="\overrightarrow{CD}+\overrightarrow{DE}=\overrightarrow{CE}" /> (ii).</p>
                      <p>De (i) et (ii) : <Math tex="\overrightarrow{CB}+\overrightarrow{BE}=\overrightarrow{CD}+\overrightarrow{DE}" />, d&apos;où <Math tex="\overrightarrow{BE}+\overrightarrow{CB}-\overrightarrow{DE}=\overrightarrow{CD}" />. CQFD</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Translation : composition"
            items={
              <div className="text-sm">
                <p><Math tex="ABC" /> est un triangle.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Construis <Math tex="E" />, image de <Math tex="C" /> par la translation qui transforme <Math tex="B" /> en <Math tex="A" />.</li>
                  <li>Construis <Math tex="F" />, image de <Math tex="E" /> par la translation qui transforme <Math tex="A" /> en <Math tex="C" />.</li>
                  <li>Montre que <Math tex="F" /> est l&apos;image de <Math tex="C" /> (détermine le vecteur de la translation).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <Graph className="max-w-sm">
                    <svg viewBox="0 0 440 360" className="mx-auto h-auto w-full">
                      <polygon points="107.5,195 40,330 220,316.5" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.3" opacity="0.5"/>
                      <line x1="40" y1="330" x2="107.5" y2="195" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="40" y1="330" x2="220" y2="316.5" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="107.5" y1="195" x2="220" y2="316.5" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="40" y1="330" x2="107.5" y2="195" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3"/>
                      <line x1="220" y1="316.5" x2="287.5" y2="181.5" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#arr-rose)"/>
                      <line x1="107.5" y1="195" x2="287.5" y2="181.5" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3"/>
                      <line x1="287.5" y1="181.5" x2="400" y2="303" stroke="#059669" strokeWidth="2.2" markerEnd="url(#arr-emerald)"/>
                      <line x1="220" y1="316.5" x2="400" y2="303" stroke="#d97706" strokeWidth="2" strokeDasharray="2 3" markerEnd="url(#arr-amber)"/>
                      <circle cx="107.5" cy="195" r="4"/><circle cx="40" cy="330" r="4"/><circle cx="220" cy="316.5" r="4"/>
                      <circle cx="287.5" cy="181.5" r="4" fill="#e11d48"/><circle cx="400" cy="303" r="4" fill="#059669"/>
                      <text x="112" y="186" fontStyle="italic" fontSize="15" fontWeight="600">A</text>
                      <text x="22" y="350" fontStyle="italic" fontSize="15" fontWeight="600">B</text>
                      <text x="226" y="336" fontStyle="italic" fontSize="15" fontWeight="600">C</text>
                      <text x="293" y="176" fontStyle="italic" fontSize="15" fontWeight="600" fill="#e11d48">E</text>
                      <text x="406" y="300" fontStyle="italic" fontSize="15" fontWeight="600" fill="#059669">F</text>
                    </svg>
                  </Graph>
                  <div className="space-y-1.5">
                    <p>1) <Math tex="E" /> image de <Math tex="C" /> par la translation de vecteur <Math tex="\overrightarrow{BA}" /> : <Math tex="\overrightarrow{CE}=\overrightarrow{BA}" /> (<Math tex="BAEC" /> parallélogramme).</p>
                    <p>2) <Math tex="F" /> image de <Math tex="E" /> par la translation de vecteur <Math tex="\overrightarrow{AC}" /> : <Math tex="\overrightarrow{EF}=\overrightarrow{AC}" />.</p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-semibold">3) Nature de la translation <Math tex="C\to F" /></p>
                  <p>Par Chasles : <Math tex="\overrightarrow{CF}=\overrightarrow{CE}+\overrightarrow{EF}=\overrightarrow{BA}+\overrightarrow{AC}=\overrightarrow{BC}" />.</p>
                  <p className="mt-1 font-semibold text-green-700">D&apos;où : <Math tex="F" /> est l&apos;image de <Math tex="C" /> par la translation de vecteur <Math tex="\overrightarrow{BC}" /> (celle qui transforme <Math tex="B" /> en <Math tex="C" />).</p>
                  <p className="mt-2 text-xs text-foreground-muted">Autrement dit : enchaîner <Math tex="(B\to A)" /> puis <Math tex="(A\to C)" /> équivaut à une seule translation de vecteur <Math tex="\overrightarrow{BA}+\overrightarrow{AC}=\overrightarrow{BC}" />.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Translation et cercle"
            items={
              <div className="text-sm">
                <p><Math tex="ABCD" /> est un parallélogramme.</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Construis <Math tex="E" /> tel que : <Math tex="\overrightarrow{AE}=\overrightarrow{AB}+\overrightarrow{AC}" />.</li>
                  <li>Montre que <Math tex="C" /> est le milieu du segment <Math tex="[DE]" />.</li>
                  <li>
                    On considère la translation <Math tex="t" /> qui transforme <Math tex="D" /> en <Math tex="C" />.
                    <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
                      <li>Construis <Math tex="N" />, image de <Math tex="B" /> par <Math tex="t" />.</li>
                      <li>Détermine l&apos;image du cercle <Math tex="\xi(D\,;\,DB)" />.</li>
                    </ol>
                  </li>
                  <li>Simplifie : <Math tex="\overrightarrow{DB}+\overrightarrow{NB}+\overrightarrow{AB}+\overrightarrow{EC}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <Graph className="max-w-sm">
                    <svg viewBox="0 0 400 300" className="mx-auto h-auto w-full">
                      <polygon points="60,250 170,250 225,140 115,140" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.3" opacity="0.5"/>
                      <line x1="60" y1="250" x2="170" y2="250" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="60" y1="250" x2="115" y2="140" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="170" y1="250" x2="225" y2="140" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="115" y1="140" x2="335" y2="140" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                      <line x1="60" y1="250" x2="280" y2="250" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 3"/>
                      <line x1="60" y1="250" x2="335" y2="140" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#arr-rose)"/>
                      <line x1="170" y1="250" x2="280" y2="250" stroke="#059669" strokeWidth="2.2" markerEnd="url(#arr-emerald)"/>
                      <line x1="115" y1="140" x2="225" y2="140" stroke="#d97706" strokeWidth="1.6" strokeDasharray="2 2"/>
                      <circle cx="60" cy="250" r="4"/><circle cx="170" cy="250" r="4"/><circle cx="225" cy="140" r="4"/><circle cx="115" cy="140" r="4"/>
                      <circle cx="335" cy="140" r="4" fill="#e11d48"/><circle cx="280" cy="250" r="4" fill="#059669"/>
                      <text x="40" y="270" fontStyle="italic" fontSize="15" fontWeight="600">A</text>
                      <text x="176" y="270" fontStyle="italic" fontSize="15" fontWeight="600">B</text>
                      <text x="231" y="134" fontStyle="italic" fontSize="15" fontWeight="600">C</text>
                      <text x="95" y="134" fontStyle="italic" fontSize="15" fontWeight="600">D</text>
                      <text x="341" y="136" fontStyle="italic" fontSize="15" fontWeight="600" fill="#e11d48">E</text>
                      <text x="286" y="270" fontStyle="italic" fontSize="15" fontWeight="600" fill="#059669">N</text>
                    </svg>
                  </Graph>
                  <div className="space-y-1.5">
                    <p>1) <Math tex="\overrightarrow{AE}=\overrightarrow{AB}+\overrightarrow{AC}" /> signifie que <Math tex="ABEC" /> est un parallélogramme.</p>
                    <p>2) Par Chasles : <Math tex="\overrightarrow{CE}=\overrightarrow{AE}-\overrightarrow{AC}=\overrightarrow{AB}" />. Or <Math tex="ABCD" /> parallélogramme donne <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />. Donc <Math tex="\overrightarrow{CE}=\overrightarrow{DC}" /> : <span className="font-semibold text-green-700"><Math tex="C" /> est le milieu de <Math tex="[DE]" /></span>.</p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4 space-y-1.5">
                  <p><strong>3a)</strong> <Math tex="t" /> transforme <Math tex="D" /> en <Math tex="C" />, donc son vecteur est <Math tex="\overrightarrow{DC}=\overrightarrow{AB}" />. <Math tex="N" /> image de <Math tex="B" /> : <Math tex="\overrightarrow{BN}=\overrightarrow{DC}=\overrightarrow{AB}" />, donc <strong><Math tex="B" /> est le milieu de <Math tex="[AN]" /></strong> (<Math tex="N" /> symétrique de <Math tex="A" /> par rapport à <Math tex="B" />).</p>
                  <p><strong>3b)</strong> L&apos;image d&apos;un cercle par une translation est un cercle de même rayon, centré à l&apos;image du centre. <Math tex="D" /> a pour image <Math tex="C" />, et <Math tex="B" /> a pour image <Math tex="N" /> (donc <Math tex="CN=DB" />). L&apos;image de <Math tex="\xi(D\,;\,DB)" /> est donc <strong>le cercle de centre <Math tex="C" /> passant par <Math tex="N" /></strong>.</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-semibold">4) Simplifie <Math tex="\overrightarrow{DB}+\overrightarrow{NB}+\overrightarrow{AB}+\overrightarrow{EC}" /></p>
                  <p>On a <Math tex="\overrightarrow{NB}=-\overrightarrow{BN}=-\overrightarrow{AB}" />, et <Math tex="\overrightarrow{EC}=-\overrightarrow{CE}=-\overrightarrow{AB}" /> (question 2).</p>
                  <p>Donc la somme <Math tex="=\overrightarrow{DB}+(-\overrightarrow{AB})+\overrightarrow{AB}+(-\overrightarrow{AB})=\overrightarrow{DB}-\overrightarrow{AB}=\overrightarrow{DB}+\overrightarrow{BA}" /></p>
                  <p className="mt-1 font-semibold text-green-700">D&apos;où (Chasles) : <Math tex="\overrightarrow{DB}+\overrightarrow{NB}+\overrightarrow{AB}+\overrightarrow{EC}=\overrightarrow{DA}" />.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Translation : triangle rectangle"
            items={
              <div className="text-sm">
                <p>
                  <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" /> tel que <Math tex="AC=4\,cm" /> et{" "}
                  <Math tex="E" /> le milieu de <Math tex="[BC]" />. Soit <Math tex="t" /> la translation de vecteur{" "}
                  <Math tex="\overrightarrow{AE}" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Construis <Math tex="F" />, image de <Math tex="B" />, et <Math tex="G" />, image de <Math tex="C" />, par <Math tex="t" />.</li>
                  <li>Calcule la distance <Math tex="EG" /> (justifie).</li>
                  <li>Montre que : <Math tex="(FG)\parallel(BC)" />.</li>
                  <li>Détermine la nature du triangle <Math tex="EFG" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <Graph className="max-w-sm">
                    <svg viewBox="0 0 380 300" className="mx-auto h-auto w-full">
                      <polygon points="55,275 55,140 235,275" fill="#eef2ff" stroke="#4f46e5" strokeWidth="1.3" opacity="0.5"/>
                      <path d="M55,255 L75,255 L75,275" fill="none" stroke="#4f46e5" strokeWidth="1.5"/>
                      <line x1="55" y1="275" x2="55" y2="140" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="55" y1="275" x2="235" y2="275" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="55" y1="140" x2="235" y2="275" stroke="#1e293b" strokeWidth="1.5"/>
                      <line x1="55" y1="140" x2="325" y2="207.5" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3"/>
                      <polygon points="145,207.5 145,72.5 325,207.5" fill="#fff7ed" stroke="#d97706" strokeWidth="1.3" opacity="0.55"/>
                      <line x1="145" y1="207.5" x2="145" y2="72.5" stroke="#b45309" strokeWidth="1.5"/>
                      <line x1="145" y1="207.5" x2="325" y2="207.5" stroke="#b45309" strokeWidth="1.5"/>
                      <line x1="145" y1="72.5" x2="325" y2="207.5" stroke="#b45309" strokeWidth="1.5"/>
                      <line x1="55" y1="140" x2="145" y2="72.5" stroke="#e11d48" strokeWidth="2" strokeDasharray="2 3" markerEnd="url(#arr-rose)"/>
                      <line x1="55" y1="275" x2="145" y2="207.5" stroke="#059669" strokeWidth="2" strokeDasharray="2 3" markerEnd="url(#arr-emerald)"/>
                      <line x1="235" y1="275" x2="325" y2="207.5" stroke="#0284c7" strokeWidth="2" strokeDasharray="2 3" markerEnd="url(#arr-sky)"/>
                      <circle cx="55" cy="275" r="4"/><circle cx="55" cy="140" r="4"/><circle cx="235" cy="275" r="4"/>
                      <circle cx="145" cy="207.5" r="4" fill="#d97706"/><circle cx="145" cy="72.5" r="4" fill="#e11d48"/><circle cx="325" cy="207.5" r="4" fill="#0284c7"/>
                      <text x="34" y="292" fontStyle="italic" fontSize="15" fontWeight="600">A</text>
                      <text x="34" y="132" fontStyle="italic" fontSize="15" fontWeight="600">B</text>
                      <text x="241" y="292" fontStyle="italic" fontSize="15" fontWeight="600">C</text>
                      <text x="150" y="222" fontStyle="italic" fontSize="15" fontWeight="600" fill="#b45309">E</text>
                      <text x="151" y="66" fontStyle="italic" fontSize="15" fontWeight="600" fill="#e11d48">F</text>
                      <text x="331" y="205" fontStyle="italic" fontSize="15" fontWeight="600" fill="#0284c7">G</text>
                    </svg>
                  </Graph>
                  <div className="space-y-1.5">
                    <p><Math tex="E" /> est l&apos;image de <Math tex="A" /> par <Math tex="t" /> (vecteur <Math tex="\overrightarrow{AE}" />). <Math tex="F" /> est l&apos;image de <Math tex="B" />, <Math tex="G" /> celle de <Math tex="C" />.</p>
                    <p>Le triangle <span className="font-semibold text-amber-700"><Math tex="EFG" /></span> est donc l&apos;image du triangle <Math tex="ABC" /> par <Math tex="t" />.</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                    <p className="mb-1 font-semibold">2) Distance <Math tex="EG" /></p>
                    <p><Math tex="E" /> image de <Math tex="A" />, <Math tex="G" /> image de <Math tex="C" /> : <Math tex="[EG]" /> est l&apos;image de <Math tex="[AC]" />.</p>
                    <p className="mt-1 font-semibold text-green-700">Une translation conserve les longueurs, donc <Math tex="EG=AC=4\,cm" />.</p>
                  </div>
                  <div className="rounded-lg border border-green-500/20 bg-surface p-3">
                    <p className="mb-1 font-semibold">3) <Math tex="(FG)\parallel(BC)" /></p>
                    <p><Math tex="F" /> et <Math tex="G" /> images de <Math tex="B" /> et <Math tex="C" /> par <Math tex="t" />, donc <Math tex="(FG)" /> est l&apos;image de <Math tex="(BC)" />.</p>
                    <p className="mt-1 font-semibold text-green-700">Or l&apos;image d&apos;une droite lui est parallèle : <Math tex="(FG)\parallel(BC)" />.</p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-semibold">4) Nature du triangle <Math tex="EFG" /></p>
                  <p><Math tex="EFG" /> est l&apos;image de <Math tex="ABC" /> par <Math tex="t" />. Une translation conserve les longueurs et les angles ; l&apos;angle droit en <Math tex="A" /> a pour image l&apos;angle en <Math tex="E" />.</p>
                  <p className="mt-1 font-semibold text-green-700">D&apos;où : <Math tex="EFG" /> est un triangle rectangle en <Math tex="E" /> (avec <Math tex="EG=AC=4\,cm" />).</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Translation d'un cercle"
            items={
              <p className="text-sm">
                <Math tex="ABCD" /> est un parallélogramme. Soit <Math tex="(\xi)" /> le cercle de centre <Math tex="A" />{" "}
                et passant par <Math tex="D" />. Détermine l&apos;image du cercle <Math tex="(\xi)" /> par la
                translation qui transforme <Math tex="D" /> en <Math tex="C" />.
              </p>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <Graph className="max-w-sm">
                    <svg viewBox="0 0 400 380" className="mx-auto h-auto w-full">
                      <circle cx="140" cy="230" r="123" fill="none" stroke="#4f46e5" strokeWidth="2"/>
                      <circle cx="250" cy="230" r="123" fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4"/>
                      <polygon points="140,230 250,230 305,120 195,120" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.3"/>
                      <line x1="140" y1="230" x2="195" y2="120" stroke="#059669" strokeWidth="1.8"/>
                      <line x1="250" y1="230" x2="305" y2="120" stroke="#e11d48" strokeWidth="1.8" strokeDasharray="3 3"/>
                      <line x1="195" y1="120" x2="305" y2="120" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3"/>
                      <line x1="140" y1="230" x2="250" y2="230" stroke="#d97706" strokeWidth="2" markerEnd="url(#arr-amber)"/>
                      <circle cx="140" cy="230" r="4.5" fill="#4f46e5"/><circle cx="250" cy="230" r="4.5" fill="#e11d48"/>
                      <circle cx="195" cy="120" r="4.5"/><circle cx="305" cy="120" r="4.5"/>
                      <text x="118" y="250" fontStyle="italic" fontSize="15" fontWeight="600" fill="#4f46e5">A</text>
                      <text x="256" y="250" fontStyle="italic" fontSize="15" fontWeight="600" fill="#e11d48">B</text>
                      <text x="311" y="116" fontStyle="italic" fontSize="15" fontWeight="600">C</text>
                      <text x="175" y="112" fontStyle="italic" fontSize="15" fontWeight="600">D</text>
                    </svg>
                  </Graph>
                  <div className="space-y-1.5">
                    <p>La translation qui transforme <Math tex="D" /> en <Math tex="C" /> a pour vecteur <Math tex="\overrightarrow{DC}" />. Or <Math tex="ABCD" /> est un parallélogramme, donc <Math tex="\overrightarrow{DC}=\overrightarrow{AB}" />.</p>
                    <p>L&apos;image du centre <Math tex="A" /> est donc le point <strong>B</strong>.</p>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>Le cercle <Math tex="(\xi)" /> passe par <Math tex="D" /> (rayon <Math tex="AD" />) ; son image
                    passe donc par l&apos;image de <Math tex="D" />, c&apos;est-à-dire par <strong>C</strong> (la
                    translation transforme <Math tex="D" /> en <Math tex="C" />). Une translation conserve les
                    distances, le rayon est inchangé : <Math tex="BC=AD" />.</p>
                  <p className="mt-2 font-semibold text-green-700">Conclusion : l&apos;image du cercle <Math tex="(\xi)" /> est le cercle de centre <Math tex="B" /> passant par <Math tex="C" /> (de rayon <Math tex="AD" />).</p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
