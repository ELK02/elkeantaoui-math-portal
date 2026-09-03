import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Cercle et Droite · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur le cercle et la droite (1ère année collège) : définition du cercle, corde, diamètre, arc, propriété d'appartenance, tangente à un cercle, avec 17 exercices corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 7",
  heroTitle: "Cercle et Droite",
  heroSubtitle:
    "Le cercle, ses cordes, son diamètre, la propriété d'appartenance et la tangente en un point, avec 17 exercices corrigés en détail.",
  footerNote: "Cercle et droite · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "cercle", label: "Le cercle" },
    { id: "appartenance", label: "Appartenance" },
    { id: "tangente", label: "Tangente" },
    { id: "memo", label: "Mémo" },
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

function Statement({ tone, children }: { tone: "indigo" | "fuchsia"; children: ReactNode }) {
  const cls =
    tone === "indigo"
      ? "border-indigo-200 bg-indigo-50 text-indigo-900"
      : "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900";
  return <div className={`rounded-xl border p-4 text-sm font-medium ${cls}`}>{children}</div>;
}

/** Group separator used inside the long exercise list, mirroring the source's category headings. */
function GroupHeading({ children }: { children: ReactNode }) {
  return <p className="pt-2 text-xs font-bold tracking-wider text-amber-600 uppercase">{children}</p>;
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "3", label: "notions clés" },
          { value: "17", label: "exercices" },
          { value: "100%", label: "corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#cercle"
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
            <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="3" />
            <line x1="30" y1="100" x2="170" y2="100" stroke="white" strokeWidth="2" strokeDasharray="5,4" />
            <line x1="152" y1="47" x2="185" y2="80" stroke="#fb923c" strokeWidth="2.5" />
            <circle cx="100" cy="100" r="3" fill="white" />
            <circle cx="163" cy="59.5" r="4" fill="#fb923c" />
          </svg>
        }
      />

      {/* ===================== I. LE CERCLE ===================== */}
      <LessonSection
        id="cercle"
        kicker="01 · Définitions"
        title="Le cercle"
        tone="light"
        description="Définition, exemple, corde, diamètre et arc."
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 md:order-1">
            <p className="mb-2 text-xs font-bold text-rose-500 uppercase">Définition</p>
            <p className="leading-relaxed text-foreground">
              Le <strong>cercle (C)</strong> de centre <strong>O</strong> et de rayon <strong>r</strong> est
              l&apos;ensemble des points du plan situés à la <strong>distance r</strong> du point O, noté :{" "}
              <Math tex="\mathcal{C}(O\,;r)" />.
            </p>
          </div>
          <div className="order-1 rounded-2xl border border-border bg-surface p-5 md:order-2">
            <p className="mb-3 text-xs font-bold text-indigo-500 uppercase">Exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Soit <Math tex="\mathcal{C}(O\,;3)" /> un cercle : l&apos;ensemble des points situés à 3 cm du point O.
            </p>
            <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-xs">
              <circle cx="150" cy="150" r="115" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.5" />
              <circle cx="150" cy="150" r="3" className="fill-slate-800" />
              <text x="158" y="148" fontSize="16" className="fill-slate-700 font-bold">O</text>
              <text x="252" y="55" fontSize="16" className="fill-indigo-600 font-bold">(C)</text>
            </svg>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Corde, diamètre et arc</h3>
          <p className="mb-5 text-sm text-foreground-muted">
            On considère la figure suivante telle que <Math tex="\mathcal{C}(O\,;r)" /> un cercle.
          </p>

          <div className="grid items-center gap-6 md:grid-cols-2">
            <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full max-w-xs">
              <circle cx="160" cy="160" r="120" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.5" />
              <path d="M51,109 A120,120 0 0,0 51,211" className="fill-none stroke-rose-500" strokeWidth="3.5" />
              <line x1="215" y1="50" x2="105" y2="270" className="stroke-slate-500" strokeWidth="1.75" />
              <line x1="51" y1="109" x2="51" y2="211" className="stroke-slate-500" strokeWidth="1.75" strokeDasharray="4,3" />
              <circle cx="160" cy="160" r="3" className="fill-slate-800" />
              <circle cx="215" cy="50" r="4" className="fill-slate-800" />
              <circle cx="105" cy="270" r="4" className="fill-slate-800" />
              <circle cx="51" cy="109" r="4" className="fill-rose-600" />
              <circle cx="51" cy="211" r="4" className="fill-rose-600" />
              <text x="20" y="104" fontSize="16" className="fill-rose-600 font-bold">E</text>
              <text x="20" y="226" fontSize="16" className="fill-rose-600 font-bold">F</text>
              <text x="223" y="42" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="112" y="292" fontSize="16" className="fill-slate-700 font-bold">B</text>
              <text x="170" y="150" fontSize="15" className="fill-slate-700 font-bold">O</text>
              <text x="270" y="60" fontSize="15" className="fill-indigo-600 font-bold">(C)</text>
            </svg>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                <strong>Le segment [EF]</strong> s&apos;appelle : <span className="font-semibold text-indigo-600">Corde</span>.
              </div>
              <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                <strong>Le segment [AB]</strong> s&apos;appelle :{" "}
                <span className="font-semibold text-indigo-600">Diamètre</span> (il passe par O).
              </div>
              <div className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3">
                <strong>La partie colorée en rouge</strong> s&apos;appelle :{" "}
                <span className="font-semibold text-rose-600">Arc</span>, noté <em>⌢EF</em>.
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-dashed border-border pt-5">
            <p className="mb-3 text-xs font-bold text-green-600 uppercase">Remarques</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-foreground-muted">
              <li>
                Tout diamètre est une <strong>corde</strong>.
              </li>
              <li>
                Toute corde passant par le centre du cercle est un <strong>diamètre</strong>.
              </li>
              <li>
                Le centre du cercle est le <strong>milieu</strong> de ses diamètres.
              </li>
            </ul>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. PROPRIETE D'APPARTENANCE ===================== */}
      <LessonSection
        id="appartenance"
        kicker="02 · Le lien entre point et rayon"
        title="Propriété d'appartenance"
        tone="muted"
        description="Le lien entre un point du cercle et son rayon."
      >
        <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-2 text-xs font-bold text-violet-500 uppercase">Propriété</p>
          <Statement tone="indigo">
            <p className="text-center">
              Soient <Math tex="\mathcal{C}(O\,;r)" /> un cercle et A un point.
            </p>
            <p className="mt-2 text-center">
              Si <Math tex="A \in (\mathcal{C})" />, alors <Math tex="OA = r" />.
            </p>
            <p className="mt-2 text-center">
              Si <Math tex="OA = r" />, alors <Math tex="A \in (\mathcal{C})" />.
            </p>
          </Statement>
          <p className="mt-3 text-center text-xs text-foreground-muted">
            Autrement dit : un point appartient au cercle si et seulement si sa distance au centre est égale au
            rayon.
          </p>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-green-500/20 bg-green-50 p-5">
            <p className="mb-3 text-xs font-bold text-green-700 uppercase">Application 1</p>
            <p className="mb-4 text-sm text-foreground">
              Soit <Math tex="\mathcal{C}(O\,;2{,}5)" /> un cercle. On considère le point E tel que{" "}
              <Math tex="E \in (\mathcal{C})" />. Calculer OE.
            </p>
            <div className="space-y-1.5 border-t border-dashed border-green-300 pt-4 text-sm text-foreground">
              <p>
                <strong>Solution :</strong> on a (C) un cercle de centre O et de rayon 2,5 cm.
              </p>
              <p>
                Et puisque <Math tex="E \in (\mathcal{C})" />, alors : <Math tex="OE = 2{,}5\text{ cm}" />.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-green-500/20 bg-green-50 p-5">
            <p className="mb-3 text-xs font-bold text-green-700 uppercase">Application 2</p>
            <p className="mb-4 text-sm text-foreground">
              Soit <Math tex="\mathcal{C}(O\,;6)" /> un cercle. On considère le point E tel que{" "}
              <Math tex="OE = 6\text{ cm}" />. Montrer que <Math tex="E \in (\mathcal{C})" />.
            </p>
            <div className="space-y-1.5 border-t border-dashed border-green-300 pt-4 text-sm text-foreground">
              <p>
                <strong>Solution :</strong> on a (C) un cercle de centre O et de rayon 6 cm.
              </p>
              <p>
                Et puisque <Math tex="OE = 6\text{ cm}" />, alors : <Math tex="E \in (\mathcal{C})" />.
              </p>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. LA TANGENTE ===================== */}
      <LessonSection
        id="tangente"
        kicker="03 · Une droite, un seul point"
        title="La tangente à un cercle"
        tone="light"
        description="Une droite qui touche le cercle en un seul point."
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="order-2 rounded-2xl border border-border bg-surface p-5 md:order-1">
            <p className="mb-3 text-xs font-bold text-fuchsia-500 uppercase">Exemple</p>
            <p className="mb-4 text-sm text-foreground-muted">
              <Math tex="\mathcal{C}(O\,;r)" /> un cercle, A un point du cercle (C) et (D) la droite perpendiculaire
              à la droite (OA) en A.
            </p>
            <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-xs">
              <circle cx="140" cy="170" r="90" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.5" />
              <line x1="140" y1="170" x2="225" y2="139" className="stroke-slate-500" strokeWidth="1.75" strokeDasharray="4,3" />
              <line x1="187" y1="36" x2="262" y2="243" className="stroke-rose-500" strokeWidth="2.5" />
              <path d="M213,143 L217,155 L229,151" className="fill-none stroke-slate-600" strokeWidth="1.75" />
              <circle cx="140" cy="170" r="3" className="fill-slate-800" />
              <circle cx="225" cy="139" r="4" className="fill-slate-800" />
              <text x="122" y="185" fontSize="15" className="fill-slate-700 font-bold">O</text>
              <text x="234" y="132" fontSize="16" className="fill-slate-700 font-bold">A</text>
              <text x="196" y="28" fontSize="16" className="fill-rose-600 font-bold">(D)</text>
              <text x="40" y="90" fontSize="15" className="fill-indigo-600 font-bold">(C)</text>
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">
              La droite (D) est appelée : <strong>tangente au cercle (C) en A</strong>.
            </p>
          </div>
          <div className="order-1 rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 md:order-2">
            <p className="mb-2 text-xs font-bold text-rose-500 uppercase">Définition</p>
            <p className="leading-relaxed text-foreground">
              La <strong>tangente</strong> à un cercle (C) de centre O en un point A du cercle, est la droite{" "}
              <strong>perpendiculaire</strong> à la droite (OA) en A.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-4 font-display text-xl font-bold text-foreground">Propriété</h3>
          <p className="mb-4 text-sm text-foreground-muted">
            Soient <Math tex="\mathcal{C}(O\,;r)" /> un cercle, E un point et (Δ) une droite.
          </p>
          <Statement tone="fuchsia">
            Si <strong>E ∈ (C)</strong> et <strong>E ∈ (Δ)</strong> et <strong>(OE) ⊥ (Δ)</strong>, alors{" "}
            <strong>(Δ) est la tangente au cercle (C) en E</strong>.
          </Statement>
          <div className="mt-3">
            <Statement tone="fuchsia">
              Si <strong>(Δ) est la tangente au cercle (C) en E</strong>, alors <strong>E ∈ (C)</strong>,{" "}
              <strong>E ∈ (Δ)</strong> et <strong>(OE) ⊥ (Δ)</strong>.
            </Statement>
          </div>
        </div>
      </LessonSection>

      {/* ===================== IV. FICHE MEMO ===================== */}
      <LessonSection
        id="memo"
        kicker="04 · Fiche mémo"
        title="Fiche mémo"
        tone="muted"
        description="Tout le cours en un coup d'œil, pour réviser vite."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-lg font-bold text-indigo-600">◯</span>
              <h3 className="font-display font-bold text-foreground">Cercle</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <Math tex="\mathcal{C}(O\,;r)" /> = ensemble des points du plan situés à la distance r du point O.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-lg font-bold text-rose-600">⏤</span>
              <h3 className="font-display font-bold text-foreground">Corde / Diamètre / Arc</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <strong>Corde :</strong> segment joignant 2 points du cercle. <strong>Diamètre :</strong> corde qui
              passe par O (= 2r). <strong>Arc :</strong> portion du cercle entre deux points.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-lg font-bold text-violet-600">∈</span>
              <h3 className="font-display font-bold text-foreground">Appartenance</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <Math tex="A \in (\mathcal{C}) \iff OA = r" /> (le point est sur le cercle si et seulement si sa
              distance au centre vaut le rayon).
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100 text-lg font-bold text-fuchsia-600">⊥</span>
              <h3 className="font-display font-bold text-foreground">Tangente</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              Droite qui touche le cercle en un seul point A, perpendiculaire à (OA) en A.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:col-span-2">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-100 text-lg font-bold text-green-600">✓</span>
              <h3 className="font-display font-bold text-foreground">À retenir</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              Tout diamètre est une corde, mais toute corde n&apos;est pas un diamètre. Le rayon relie toujours le
              centre à un point <em>du</em> cercle.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="17 exercices corrigés"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={17} celebrationTitle="Bravo, les 17 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le cercle et la droite.">
          <GroupHeading>Cercle</GroupHeading>

          <ExerciseCard
            id="1"
            index={1}
            title="Vocabulaire"
            items={
              <>
                <Diagram>
                  <svg viewBox="0 0 260 220" className="mx-auto h-auto w-full max-w-[220px]">
                    <circle cx="130" cy="120" r="90" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.5" />
                    <line x1="55" y1="60" x2="205" y2="180" className="stroke-slate-500" strokeWidth="1.75" />
                    <line x1="130" y1="120" x2="90" y2="35" className="stroke-slate-500" strokeWidth="1.75" />
                    <circle cx="130" cy="120" r="3" className="fill-slate-800" />
                    <circle cx="55" cy="60" r="4" className="fill-slate-800" />
                    <circle cx="205" cy="180" r="4" className="fill-slate-800" />
                    <circle cx="90" cy="35" r="4" className="fill-slate-800" />
                    <text x="35" y="52" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="212" y="198" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="94" y="26" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="138" y="115" fontSize="14" className="fill-slate-700 font-bold">O</text>
                  </svg>
                </Diagram>
                <p className="mt-3 mb-3 text-sm text-foreground-muted">
                  Sur la figure ci-dessus : A, B et C sont sur le cercle de centre O ; A, O et B sont alignés.
                </p>
                <p className="mb-1 text-sm text-foreground">
                  <strong>a.</strong> Écris deux phrases décrivant la figure, en utilisant les mots « rayon » et «
                  diamètre ».
                </p>
                <p className="mb-1 text-sm text-foreground">
                  <strong>b.</strong> Recopie et complète les phrases suivantes.
                </p>
                <ul className="mb-2 list-inside list-disc space-y-1 text-sm text-foreground-muted">
                  <li>Le point O est le milieu du … .</li>
                  <li>Le point O est une extrémité du … .</li>
                  <li>A et B sont les … du … [AB].</li>
                  <li>La portion de cercle comprise entre les points A et C est l&apos;….. .</li>
                </ul>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  <strong>a)</strong> Le segment [OC] est un <strong>rayon</strong> du cercle de centre O. Le segment
                  [AB] est un <strong>diamètre</strong> du cercle de centre O, car A, O, B sont alignés avec OA = OB.
                </Step>
                <Step>
                  <strong>b)</strong> Le point O est le milieu du <strong>segment [AB]</strong>.
                </Step>
                <Step>
                  Le point O est une extrémité du <strong>rayon [OA]</strong> (ou [OB], ou [OC]).
                </Step>
                <Step>
                  A et B sont les <strong>extrémités</strong> du <strong>diamètre</strong> [AB].
                </Step>
                <Step>
                  La portion de cercle comprise entre les points A et C est l&apos;<strong>arc</strong>, noté ⌢AC.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Avec le rayon"
            items={
              <p className="text-sm text-foreground-muted">
                Trace un cercle de centre O et de rayon 4 cm puis un cercle de rayon 4 cm et passant par O.
              </p>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 300 160" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="110" cy="80" r="70" className="fill-indigo-50/70 stroke-indigo-600" strokeWidth="2" />
                    <circle cx="180" cy="80" r="70" className="fill-violet-50/70 stroke-violet-600" strokeWidth="2" />
                    <line x1="110" y1="80" x2="180" y2="80" className="stroke-slate-500" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="110" cy="80" r="3" className="fill-slate-800" />
                    <circle cx="180" cy="80" r="3" className="fill-slate-800" />
                    <circle cx="145" cy="19" r="3.5" className="fill-rose-600" />
                    <circle cx="145" cy="141" r="3.5" className="fill-rose-600" />
                    <text x="97" y="97" fontSize="13" className="fill-slate-700 font-bold">O</text>
                    <text x="185" y="97" fontSize="13" className="fill-slate-700 font-bold">O&apos;</text>
                    <text x="140" y="72" fontSize="11" className="fill-slate-500">4 cm</text>
                  </svg>
                </Diagram>
                <Step>
                  Le second cercle a pour centre O&apos; avec OO&apos; = 4 cm, exactement égal aux deux rayons.
                </Step>
                <Step>
                  Comme <Math tex="0 < OO' (=4) < 4+4 (=8)" />, les deux cercles se{" "}
                  <strong>coupent en deux points</strong> : on obtient deux cercles identiques, chacun passant par le
                  centre de l&apos;autre.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Avec le diamètre"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un segment [AB] de longueur 5 cm.
                </p>
                <p>
                  <strong>b.</strong> Trace le cercle de diamètre [AB].
                </p>
                <p>
                  <strong>c.</strong> Quelle est la mesure du rayon de ce cercle ?
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 260 160" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="130" cy="80" r="80" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <line x1="50" y1="80" x2="210" y2="80" className="stroke-slate-500" strokeWidth="1.75" />
                    <line x1="130" y1="80" x2="210" y2="80" className="stroke-rose-500" strokeWidth="2.25" />
                    <circle cx="50" cy="80" r="4" className="fill-slate-800" />
                    <circle cx="210" cy="80" r="4" className="fill-slate-800" />
                    <circle cx="130" cy="80" r="3.5" className="fill-rose-600" />
                    <text x="36" y="72" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="216" y="72" fontSize="14" className="fill-slate-700 font-bold">B</text>
                    <text x="122" y="66" fontSize="12" className="fill-slate-500">5 cm</text>
                    <text x="155" y="72" fontSize="12" className="fill-rose-600 font-bold">2,5 cm</text>
                  </svg>
                </Diagram>
                <Step>
                  <strong>c)</strong> Le rayon d&apos;un cercle vaut la moitié de son diamètre :{" "}
                  <Math tex="r = AB \div 2 = 5 \div 2 = \mathbf{2{,}5\text{ cm}}" />.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Construction"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un cercle (C) de centre O et de rayon 4,5 cm.
                </p>
                <p>
                  <strong>b.</strong> Place un point A sur le cercle (C) et place le point B diamétralement opposé au
                  point A.
                </p>
                <p>
                  <strong>c.</strong> Marque un point D à l&apos;extérieur du cercle (C) et trace le cercle de
                  diamètre [BD].
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 300 220" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="150" cy="110" r="80" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <line x1="75" y1="83" x2="225" y2="137" className="stroke-slate-500" strokeWidth="1.5" />
                    <circle cx="238" cy="99" r="41" className="fill-none stroke-violet-500" strokeWidth="2" strokeDasharray="4,3" />
                    <line x1="225" y1="137" x2="250" y2="60" className="stroke-violet-400" strokeWidth="1.25" strokeDasharray="3,3" />
                    <circle cx="150" cy="110" r="3" className="fill-slate-800" />
                    <circle cx="75" cy="83" r="4" className="fill-slate-800" />
                    <circle cx="225" cy="137" r="4" className="fill-slate-800" />
                    <circle cx="250" cy="60" r="4" className="fill-violet-600" />
                    <text x="58" y="76" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="233" y="155" fontSize="14" className="fill-slate-700 font-bold">B</text>
                    <text x="258" y="55" fontSize="14" className="fill-violet-700 font-bold">D</text>
                    <text x="158" y="103" fontSize="13" className="fill-slate-700 font-bold">O</text>
                  </svg>
                </Diagram>
                <Step>
                  Puisque A et B sont diamétralement opposés sur (C), O est le milieu de [AB] et{" "}
                  <strong>AB = 9 cm</strong> (deux fois le rayon).
                </Step>
                <Step>
                  Le cercle de diamètre [BD] a pour <strong>centre le milieu de [BD]</strong> et pour{" "}
                  <strong>rayon BD ÷ 2</strong>.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Corde"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un cercle de centre O et de diamètre 8,4 cm.
                </p>
                <p>
                  <strong>b.</strong> Place deux points A et B sur ce cercle tels que AB = 5 cm.
                </p>
                <p>
                  <strong>c.</strong> Trace une corde [CD] telle que CD = 3,8 cm.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 280 220" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="140" cy="110" r="95" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <line x1="46" y1="127" x2="108" y2="199" className="stroke-rose-500" strokeWidth="2.25" />
                    <line x1="229" y1="143" x2="222" y2="63" className="stroke-rose-500" strokeWidth="2.25" />
                    <circle cx="140" cy="110" r="3" className="fill-slate-800" />
                    <circle cx="46" cy="127" r="4" className="fill-slate-800" />
                    <circle cx="108" cy="199" r="4" className="fill-slate-800" />
                    <circle cx="229" cy="143" r="4" className="fill-slate-800" />
                    <circle cx="222" cy="63" r="4" className="fill-slate-800" />
                    <text x="27" y="122" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="112" y="216" fontSize="14" className="fill-slate-700 font-bold">B</text>
                    <text x="236" y="150" fontSize="14" className="fill-slate-700 font-bold">C</text>
                    <text x="227" y="56" fontSize="14" className="fill-slate-700 font-bold">D</text>
                    <text x="147" y="103" fontSize="13" className="fill-slate-700 font-bold">O</text>
                  </svg>
                </Diagram>
                <Step>
                  Le rayon de ce cercle est <Math tex="8{,}4 \div 2 = \mathbf{4{,}2\text{ cm}}" />.
                </Step>
                <Step>
                  [AB] et [CD] sont bien des <strong>cordes</strong> : leurs longueurs (5 cm et 3,8 cm) sont
                  inférieures au diamètre (8,4 cm) et leurs extrémités sont sur le cercle.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Corde (bis)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un cercle de centre O et de rayon 35 mm.
                </p>
                <p>
                  <strong>b.</strong> Trace un rayon [OA] de ce cercle.
                </p>
                <p>
                  <strong>c.</strong> Place les points M et N sur ce cercle tels que AM = AN = 24 mm.
                </p>
                <p>
                  <strong>d.</strong> En utilisant uniquement les points nommés de la figure, trace en rouge trois
                  cordes de ce cercle et nomme-les.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 280 200" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="140" cy="105" r="95" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <line x1="140" y1="10" x2="79" y2="32" className="stroke-rose-500" strokeWidth="2.25" />
                    <line x1="140" y1="10" x2="201" y2="32" className="stroke-rose-500" strokeWidth="2.25" />
                    <line x1="79" y1="32" x2="201" y2="32" className="stroke-rose-500" strokeWidth="2.25" />
                    <line x1="140" y1="105" x2="140" y2="10" className="stroke-slate-500" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="140" cy="105" r="3" className="fill-slate-800" />
                    <circle cx="140" cy="10" r="4" className="fill-slate-800" />
                    <circle cx="79" cy="32" r="4" className="fill-slate-800" />
                    <circle cx="201" cy="32" r="4" className="fill-slate-800" />
                    <text x="146" y="24" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="60" y="30" fontSize="14" className="fill-slate-700 font-bold">M</text>
                    <text x="207" y="30" fontSize="14" className="fill-slate-700 font-bold">N</text>
                    <text x="147" y="98" fontSize="13" className="fill-slate-700 font-bold">O</text>
                  </svg>
                </Diagram>
                <Step>
                  <strong>d)</strong> Les seuls points nommés situés <strong>sur le cercle</strong> sont A, M et N (O
                  est le centre, pas un point du cercle). On peut donc tracer trois cordes :{" "}
                  <strong>[AM]</strong>, <strong>[AN]</strong> et <strong>[MN]</strong>.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Calculs"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un segment [AB] de longueur 6 cm. Trace le cercle de centre A et de rayon
                  2 cm. Ce cercle coupe la droite (AB) en deux points M et N. On appelle M celui qui appartient au
                  segment [AB].
                </p>
                <p>
                  <strong>b.</strong> Calcule les longueurs BM et BN.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 340 100" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="110" cy="50" r="66.7" className="fill-indigo-50/60 stroke-indigo-500" strokeWidth="1.75" />
                    <line x1="20" y1="50" x2="310" y2="50" className="stroke-slate-500" strokeWidth="1.75" />
                    <circle cx="110" cy="50" r="4" className="fill-slate-800" />
                    <circle cx="310" cy="50" r="4" className="fill-slate-800" />
                    <circle cx="176.7" cy="50" r="3.5" className="fill-rose-600" />
                    <circle cx="43.3" cy="50" r="3.5" className="fill-rose-600" />
                    <text x="105" y="72" fontSize="13" className="fill-slate-700 font-bold">A</text>
                    <text x="306" y="72" fontSize="13" className="fill-slate-700 font-bold">B</text>
                    <text x="172" y="35" fontSize="13" className="fill-rose-600 font-bold">M</text>
                    <text x="38" y="35" fontSize="13" className="fill-rose-600 font-bold">N</text>
                  </svg>
                </Diagram>
                <Step>
                  M appartient au cercle de centre A et de rayon 2 cm, donc <strong>AM = 2 cm</strong>. Comme M ∈
                  [AB] : <Math tex="BM = AB - AM = 6 - 2 = \mathbf{4\text{ cm}}" />.
                </Step>
                <Step>
                  N est l&apos;autre point d&apos;intersection : il est situé de l&apos;autre côté de A (à
                  l&apos;opposé de B), avec <strong>AN = 2 cm</strong>. Donc :{" "}
                  <Math tex="BN = BA + AN = 6 + 2 = \mathbf{8\text{ cm}}" />.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Concentriques"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  Deux cercles concentriques (c&apos;est-à-dire de même centre) (C) et (C&apos;) ont pour centre O et
                  pour rayons respectifs 3 cm et 5 cm. [GH] est un diamètre du cercle (C). La droite passant par G et
                  par H coupe le cercle (C&apos;) en deux points I et J ; on appelle I celui qui est le plus près de
                  G.
                </p>
                <div className="space-y-1 text-sm text-foreground">
                  <p>
                    <strong>a.</strong> Fais une figure.
                  </p>
                  <p>
                    <strong>b.</strong> Calcule les longueurs GI et JG.
                  </p>
                </div>
                <Diagram>
                  <svg viewBox="0 0 320 140" className="mx-auto mt-3 h-auto w-full max-w-sm">
                    <circle cx="160" cy="70" r="100" className="fill-violet-50 stroke-violet-500" strokeWidth="2" />
                    <circle cx="160" cy="70" r="60" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <line x1="60" y1="70" x2="260" y2="70" className="stroke-slate-500" strokeWidth="1.5" />
                    <circle cx="160" cy="70" r="3" className="fill-slate-800" />
                    <circle cx="100" cy="70" r="4" className="fill-indigo-600" />
                    <circle cx="220" cy="70" r="4" className="fill-indigo-600" />
                    <circle cx="60" cy="70" r="4" className="fill-violet-600" />
                    <circle cx="260" cy="70" r="4" className="fill-violet-600" />
                    <text x="167" y="60" fontSize="13" className="fill-slate-700 font-bold">O</text>
                    <text x="97" y="58" fontSize="13" className="fill-indigo-700 font-bold">G</text>
                    <text x="223" y="58" fontSize="13" className="fill-indigo-700 font-bold">H</text>
                    <text x="47" y="58" fontSize="13" className="fill-violet-700 font-bold">I</text>
                    <text x="263" y="58" fontSize="13" className="fill-violet-700 font-bold">J</text>
                  </svg>
                </Diagram>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  Comme [GH] est un diamètre de (C), on a <strong>OG = OH = 3 cm</strong>. Comme I et J sont sur
                  (C&apos;), on a <strong>OI = OJ = 5 cm</strong>. Tous ces points sont alignés sur la droite (GH).
                </Step>
                <Step>
                  I est le point de (C&apos;) le plus proche de G, donc I est situé entre O et G, prolongé au-delà de
                  G : <Math tex="GI = OI - OG = 5 - 3 = \mathbf{2\text{ cm}}" />.
                </Step>
                <Step>
                  J est de l&apos;autre côté : <Math tex="JG = JO + OG = 5 + 3 = \mathbf{8\text{ cm}}" />.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Calculs (bis)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un segment [ST] de longueur 6 cm. Sur ce segment, marque le point U tel
                  que SU = 3,2 cm. Trace le cercle (C) de centre T et qui passe par U.
                </p>
                <p>
                  <strong>b.</strong> Calcule le diamètre du cercle (C).
                </p>
                <p>
                  <strong>c.</strong> Sur le segment [UT], place le point V tel que UV = 1,2 cm. Quel est le rayon du
                  cercle de diamètre [SV] ?
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 340 110" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="320" cy="55" r="140" className="fill-none stroke-violet-500" strokeWidth="1.5" strokeDasharray="4,3" />
                    <line x1="20" y1="55" x2="320" y2="55" className="stroke-slate-500" strokeWidth="1.75" />
                    <circle cx="20" cy="55" r="4" className="fill-slate-800" />
                    <circle cx="320" cy="55" r="4" className="fill-slate-800" />
                    <circle cx="180" cy="55" r="3.5" className="fill-rose-600" />
                    <circle cx="240" cy="55" r="3.5" className="fill-violet-600" />
                    <text x="14" y="76" fontSize="13" className="fill-slate-700 font-bold">S</text>
                    <text x="316" y="76" fontSize="13" className="fill-slate-700 font-bold">T</text>
                    <text x="176" y="40" fontSize="13" className="fill-rose-600 font-bold">U</text>
                    <text x="236" y="40" fontSize="13" className="fill-violet-600 font-bold">V</text>
                  </svg>
                </Diagram>
                <Step>
                  <strong>b)</strong> Le rayon de (C) est UT = ST − SU = 6 − 3,2 = 2,8 cm. Donc le{" "}
                  <strong>diamètre = 2 × 2,8 = 5,6 cm</strong>.
                </Step>
                <Step>
                  <strong>c)</strong> S, U, V sont alignés dans cet ordre, donc SV = SU + UV = 3,2 + 1,2 = 4,4 cm. Le
                  rayon du cercle de diamètre [SV] est <strong>4,4 ÷ 2 = 2,2 cm</strong>.
                </Step>
              </div>
            }
          />

          <GroupHeading>Reproductions de figures</GroupHeading>

          <ExerciseCard
            id="10"
            index={10}
            title="Reproduis la figure"
            items={
              <>
                <p className="mb-2 text-sm text-foreground-muted">
                  Reproduis la figure ci-dessous en vraie grandeur (deux cercles sécants alignés sur un même axe,
                  mesures 6 cm et 2 cm).
                </p>
                <Diagram caption="6 cm puis 2 cm le long de l'axe">
                  <svg viewBox="0 0 300 140" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="120" cy="70" r="65" className="fill-indigo-50/60 stroke-indigo-600" strokeWidth="2" />
                    <circle cx="205" cy="70" r="40" className="fill-violet-50/60 stroke-violet-600" strokeWidth="2" />
                    <line x1="55" y1="70" x2="245" y2="70" className="stroke-slate-400" strokeWidth="1.25" strokeDasharray="3,3" />
                  </svg>
                </Diagram>
              </>
            }
            correction={
              <Step>
                <strong>Méthode :</strong> trace d&apos;abord la droite horizontale. Place un point de départ, puis
                mesure 6 cm : c&apos;est la portion visible du grand cercle. Continue de 2 cm supplémentaires pour
                obtenir l&apos;extrémité du petit cercle. Pointe ensuite le compas au centre de chaque cercle (repéré
                à l&apos;œil au milieu de chaque disque sur le modèle) et trace les deux cercles de façon à ce
                qu&apos;ils se coupent comme sur le modèle.
              </Step>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Reproduis les figures"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Grand cercle contenant 3 cercles tangents entre eux et tangents au grand
                  cercle, alignés sur un même diamètre (les deux petits cercles ont un diamètre de 2 cm).
                </p>
                <p>
                  <strong>b.</strong> Forme obtenue à partir d&apos;arcs de cercle, avec un segment de référence de
                  3,2 cm.
                </p>
                <p>
                  <strong>c.</strong> Rectangle de 10 cm sur 3 cm avec un quart de cercle évidé à chaque coin.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram caption="a. trois cercles tangents alignés sur un diamètre">
                  <svg viewBox="0 0 280 180" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="140" cy="90" r="80" className="fill-green-50 stroke-green-600" strokeWidth="2" />
                    <circle cx="80" cy="90" r="20" className="fill-white stroke-indigo-500" strokeWidth="1.75" />
                    <circle cx="120" cy="90" r="20" className="fill-white stroke-indigo-500" strokeWidth="1.75" />
                    <circle cx="180" cy="90" r="40" className="fill-white stroke-indigo-500" strokeWidth="1.75" />
                  </svg>
                </Diagram>
                <Step>
                  <strong>a)</strong> Trace d&apos;abord les deux petits cercles de diamètre 2 cm, tangents l&apos;un
                  à l&apos;autre. Le grand cercle a pour diamètre la somme des diamètres des trois petits cercles
                  alignés ; ajuste son rayon au compas pour qu&apos;il soit tangent (intérieurement) à chacun des
                  trois petits cercles.
                </Step>
                <Step>
                  <strong>b)</strong> Trace le segment de 3,2 cm servant de diamètre, puis construis chaque arc au
                  compas en pointant successivement aux extrémités et au milieu de ce segment, en suivant le contour
                  du modèle.
                </Step>
                <Step>
                  <strong>c)</strong> Trace le rectangle 10 cm × 3 cm. À chaque coin, pointe le compas sur le sommet
                  et trace un quart de cercle de rayon 3 cm (le côté le plus court) vers l&apos;intérieur, pour
                  obtenir les courbes.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Sur quadrillage"
            items={
              <p className="text-sm text-foreground-muted">
                En utilisant le quadrillage de ton cahier, reproduis les figures suivantes :{" "}
                <strong>a.</strong> une rosace de cercles imbriqués, <strong>b.</strong> un parapluie fait de
                demi-cercles.
              </p>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram caption="a. rosace de cercles imbriqués · b. parapluie de demi-cercles">
                  <svg viewBox="0 0 280 140" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="70" cy="70" r="55" className="fill-none stroke-indigo-600" strokeWidth="2" />
                    <circle cx="70" cy="70" r="27.5" className="fill-none stroke-indigo-500" strokeWidth="1.5" />
                    <circle cx="42.5" cy="70" r="27.5" className="fill-none stroke-violet-500" strokeWidth="1.5" />
                    <circle cx="97.5" cy="70" r="27.5" className="fill-none stroke-violet-500" strokeWidth="1.5" />
                    <circle cx="70" cy="42.5" r="27.5" className="fill-none stroke-violet-500" strokeWidth="1.5" />
                    <circle cx="70" cy="97.5" r="27.5" className="fill-none stroke-violet-500" strokeWidth="1.5" />
                    <path
                      d="M175,105 A45,45 0 0,1 265,105 M175,105 A22.5,22.5 0 0,1 220,105 M220,105 A22.5,22.5 0 0,1 265,105 M220,105 L220,130"
                      className="fill-none stroke-indigo-600"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Diagram>
                <Step>
                  <strong>Méthode :</strong> compte le nombre de carreaux de chaque rayon sur le modèle, pointe le
                  compas (ou fais pivoter ta règle) sur les intersections du quadrillage correspondantes, puis trace
                  chaque cercle ou demi-cercle avec cet écartement.
                </Step>
              </div>
            }
          />

          <GroupHeading>Programme de construction</GroupHeading>

          <ExerciseCard
            id="13"
            index={13}
            title="Complète le programme"
            items={
              <>
                <Diagram>
                  <svg viewBox="0 0 300 180" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="150" cy="100" r="75" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <line x1="75" y1="100" x2="225" y2="100" className="stroke-slate-500" strokeWidth="1.5" />
                    <line x1="90" y1="45" x2="225" y2="100" className="stroke-slate-500" strokeWidth="1.5" />
                    <line x1="75" y1="100" x2="90" y2="45" className="stroke-slate-500" strokeWidth="1.5" strokeDasharray="3,3" />
                    <circle cx="150" cy="100" r="3" className="fill-slate-800" />
                    <circle cx="75" cy="100" r="4" className="fill-slate-800" />
                    <circle cx="225" cy="100" r="4" className="fill-slate-800" />
                    <circle cx="90" cy="45" r="4" className="fill-slate-800" />
                    <text x="55" y="95" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="233" y="95" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="73" y="38" fontSize="15" className="fill-slate-700 font-bold">M</text>
                    <text x="157" y="93" fontSize="14" className="fill-slate-700 font-bold">O</text>
                  </svg>
                </Diagram>
                <p className="mt-3 mb-2 text-sm text-foreground-muted">
                  Recopie et complète le programme de construction de la figure ci-dessus.
                </p>
                <ul className="list-inside list-disc space-y-1 text-sm text-foreground-muted">
                  <li>Trace un cercle de … O et de … 2,4 cm.</li>
                  <li>Trace un … [AB] de ce cercle.</li>
                  <li>Trace une … [AM] telle que AM = … .</li>
                  <li>Place le point C tel que M est le … de [AC].</li>
                  <li>Trace le … [CB].</li>
                </ul>
              </>
            }
            correction={
              <div className="space-y-2">
                <Step>
                  Trace un cercle de <strong>centre</strong> O et de <strong>rayon</strong> 2,4 cm.
                </Step>
                <Step>
                  Trace un <strong>diamètre</strong> [AB] de ce cercle.
                </Step>
                <Step>
                  Trace une <strong>corde</strong> [AM] telle que AM = <strong>2 cm</strong>.
                </Step>
                <Step>
                  Place le point C tel que M est le <strong>milieu</strong> de [AC].
                </Step>
                <Step>
                  Trace le <strong>segment</strong> [CB].
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="14"
            index={14}
            title="Bande dessinée"
            items={
              <p className="text-sm text-foreground-muted">
                Pour chaque étape de la bande dessinée (4 vignettes montrant progressivement un segment [CD], puis un
                point E, puis un point A sur [CD], puis le segment [AE]), écris la consigne qui a été donnée. (On ne
                tient pas compte des mesures.)
              </p>
            }
            correction={
              <div className="space-y-2">
                <Diagram>
                  <div className="grid grid-cols-4 gap-2">
                    <svg viewBox="0 0 100 90" className="h-auto w-full rounded-lg border border-border bg-surface">
                      <line x1="15" y1="30" x2="80" y2="45" className="stroke-slate-700" strokeWidth="2" />
                      <text x="6" y="26" fontSize="12" className="fill-slate-700 font-bold">C</text>
                      <text x="83" y="41" fontSize="12" className="fill-slate-700 font-bold">D</text>
                    </svg>
                    <svg viewBox="0 0 100 90" className="h-auto w-full rounded-lg border border-border bg-surface">
                      <line x1="15" y1="30" x2="80" y2="45" className="stroke-slate-700" strokeWidth="2" />
                      <text x="6" y="26" fontSize="12" className="fill-slate-700 font-bold">C</text>
                      <text x="83" y="41" fontSize="12" className="fill-slate-700 font-bold">D</text>
                      <text x="48" y="72" fontSize="12" className="fill-rose-600 font-bold">×E</text>
                    </svg>
                    <svg viewBox="0 0 100 90" className="h-auto w-full rounded-lg border border-border bg-surface">
                      <line x1="15" y1="30" x2="80" y2="45" className="stroke-slate-700" strokeWidth="2" />
                      <text x="6" y="26" fontSize="12" className="fill-slate-700 font-bold">C</text>
                      <text x="83" y="41" fontSize="12" className="fill-slate-700 font-bold">D</text>
                      <circle cx="52" cy="38" r="3" className="fill-violet-600" />
                      <text x="45" y="30" fontSize="12" className="fill-violet-700 font-bold">A</text>
                      <text x="48" y="72" fontSize="12" className="fill-rose-600 font-bold">×E</text>
                    </svg>
                    <svg viewBox="0 0 100 90" className="h-auto w-full rounded-lg border border-border bg-surface">
                      <line x1="15" y1="30" x2="80" y2="45" className="stroke-slate-700" strokeWidth="2" />
                      <line x1="52" y1="38" x2="48" y2="60" className="stroke-violet-500" strokeWidth="1.75" />
                      <text x="6" y="26" fontSize="12" className="fill-slate-700 font-bold">C</text>
                      <text x="83" y="41" fontSize="12" className="fill-slate-700 font-bold">D</text>
                      <circle cx="52" cy="38" r="3" className="fill-violet-600" />
                      <text x="45" y="30" fontSize="12" className="fill-violet-700 font-bold">A</text>
                      <text x="48" y="72" fontSize="12" className="fill-rose-600 font-bold">×E</text>
                    </svg>
                  </div>
                </Diagram>
                <Step>
                  <strong>Étape 1 :</strong> Trace un segment [CD].
                </Step>
                <Step>
                  <strong>Étape 2 :</strong> Place un point E n&apos;appartenant pas à la droite (CD).
                </Step>
                <Step>
                  <strong>Étape 3 :</strong> Place un point A sur le segment [CD].
                </Step>
                <Step>
                  <strong>Étape 4 :</strong> Trace le segment [AE].
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="15"
            index={15}
            title="À construire"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un segment [AB] de longueur 6 cm.
                </p>
                <p>
                  <strong>b.</strong> Marque le point O, milieu du segment [AB].
                </p>
                <p>
                  <strong>c.</strong> Trace le cercle de centre O et de rayon 3 cm.
                </p>
                <p>
                  <strong>d.</strong> Trace les cercles de diamètres [AO] et [OB].
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 320 160" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="160" cy="90" r="120" className="fill-none stroke-indigo-600" strokeWidth="2.25" />
                    <circle cx="100" cy="90" r="60" className="fill-none stroke-violet-500" strokeWidth="1.75" />
                    <circle cx="220" cy="90" r="60" className="fill-none stroke-violet-500" strokeWidth="1.75" />
                    <line x1="40" y1="90" x2="280" y2="90" className="stroke-slate-500" strokeWidth="1.5" />
                    <circle cx="40" cy="90" r="4" className="fill-slate-800" />
                    <circle cx="280" cy="90" r="4" className="fill-slate-800" />
                    <circle cx="160" cy="90" r="3.5" className="fill-rose-600" />
                    <text x="27" y="82" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="286" y="82" fontSize="14" className="fill-slate-700 font-bold">B</text>
                    <text x="153" y="76" fontSize="13" className="fill-rose-600 font-bold">O</text>
                  </svg>
                </Diagram>
                <Step>
                  O étant le milieu de [AB] avec AB = 6 cm, on a AO = OB = 3 cm, d&apos;où le cercle de centre O et
                  de rayon 3 cm passe justement par A et par B. Les cercles de diamètres [AO] et [OB] ont chacun pour
                  rayon <strong>3 ÷ 2 = 1,5 cm</strong> et sont tangents en O.
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="16"
            index={16}
            title="À construire (bis)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  <strong>a.</strong> Trace un segment [AB] de longueur 9 cm.
                </p>
                <p>
                  <strong>b.</strong> Trace le cercle de centre A et de rayon 3 cm. On appelle C le point
                  d&apos;intersection de ce cercle et du segment [AB].
                </p>
                <p>
                  <strong>c.</strong> Trace le cercle de centre B et de rayon 3 cm. Il coupe le segment [AB] en D.
                </p>
                <p>
                  <strong>d.</strong> Trace un demi-cercle de diamètre [CD].
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram>
                  <svg viewBox="0 0 360 130" className="mx-auto h-auto w-full max-w-sm">
                    <circle cx="30" cy="90" r="100" className="fill-none stroke-violet-400" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="330" cy="90" r="100" className="fill-none stroke-violet-400" strokeWidth="1.5" strokeDasharray="4,3" />
                    <path d="M130,90 A50,50 0 0,1 230,90" className="fill-none stroke-rose-500" strokeWidth="2.5" />
                    <line x1="30" y1="90" x2="330" y2="90" className="stroke-slate-500" strokeWidth="1.75" />
                    <circle cx="30" cy="90" r="4" className="fill-slate-800" />
                    <circle cx="330" cy="90" r="4" className="fill-slate-800" />
                    <circle cx="130" cy="90" r="3.5" className="fill-rose-600" />
                    <circle cx="230" cy="90" r="3.5" className="fill-rose-600" />
                    <text x="18" y="82" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="336" y="82" fontSize="14" className="fill-slate-700 font-bold">B</text>
                    <text x="124" y="80" fontSize="13" className="fill-rose-600 font-bold">C</text>
                    <text x="234" y="80" fontSize="13" className="fill-rose-600 font-bold">D</text>
                  </svg>
                </Diagram>
                <Step>
                  On a AC = 3 cm et BD = 3 cm. Comme AB = 9 cm, il reste{" "}
                  <Math tex="CD = AB - AC - BD = 9 - 3 - 3 = \mathbf{3\text{ cm}}" />. Le demi-cercle de diamètre [CD]
                  a donc pour rayon <strong>1,5 cm</strong>, centré au milieu de [CD].
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="17"
            index={17}
            title="Écris un programme"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p className="text-foreground-muted">Écris un programme de construction pour chacune des figures suivantes.</p>
                <p>
                  <strong>a.</strong> Deux cercles sécants : un grand cercle de centre O et de rayon 5,2 cm, et un
                  petit cercle de centre T, se coupant en un point R situé sur la droite (TO).
                </p>
                <p>
                  <strong>b.</strong> Un cercle de centre O et de rayon 3 cm, un diamètre [AA&apos;], un point B sur
                  le cercle, et un point C tel que B soit le milieu de [AC] avec AB = BC = 5 cm.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5">
                <Diagram caption="a. deux cercles sécants en R">
                  <svg viewBox="0 0 260 200" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="190" cy="110" r="90" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <circle cx="90" cy="110" r="45" className="fill-none stroke-violet-500" strokeWidth="2" />
                    <line x1="90" y1="110" x2="190" y2="110" className="stroke-slate-500" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx="90" cy="110" r="3.5" className="fill-slate-800" />
                    <circle cx="190" cy="110" r="3.5" className="fill-slate-800" />
                    <circle cx="110" cy="69.5" r="4" className="fill-rose-600" />
                    <text x="76" y="128" fontSize="13" className="fill-slate-700 font-bold">T</text>
                    <text x="196" y="128" fontSize="13" className="fill-slate-700 font-bold">O</text>
                    <text x="117" y="66" fontSize="13" className="fill-rose-600 font-bold">R</text>
                  </svg>
                </Diagram>
                <Step>
                  <strong>a) Un programme possible</strong> (plusieurs réponses sont valables) : Trace un cercle de
                  centre O et de rayon 5,2 cm. Place un point T à l&apos;intérieur de ce cercle. Trace un cercle de
                  centre T qui coupe le grand cercle ; nomme R l&apos;un des points d&apos;intersection situé sur la
                  droite (TO).
                </Step>
                <Diagram caption="b. B milieu de [AC], avec A, A' diamétralement opposés">
                  <svg viewBox="0 0 320 190" className="mx-auto h-auto w-full max-w-xs">
                    <circle cx="110" cy="110" r="70" className="fill-indigo-50 stroke-indigo-600" strokeWidth="2.25" />
                    <line x1="44" y1="86" x2="176" y2="134" className="stroke-slate-500" strokeWidth="1.5" strokeDasharray="4,3" />
                    <line x1="44" y1="86" x2="297" y2="64" className="stroke-rose-500" strokeWidth="2" />
                    <circle cx="110" cy="110" r="3" className="fill-slate-800" />
                    <circle cx="44" cy="86" r="4" className="fill-slate-800" />
                    <circle cx="176" cy="134" r="4" className="fill-slate-800" />
                    <circle cx="171" cy="75" r="4" className="fill-rose-600" />
                    <circle cx="297" cy="64" r="4" className="fill-rose-600" />
                    <text x="27" y="80" fontSize="14" className="fill-slate-700 font-bold">A</text>
                    <text x="182" y="150" fontSize="14" className="fill-slate-700 font-bold">A&apos;</text>
                    <text x="176" y="66" fontSize="14" className="fill-rose-600 font-bold">B</text>
                    <text x="303" y="60" fontSize="14" className="fill-rose-600 font-bold">C</text>
                    <text x="116" y="103" fontSize="13" className="fill-slate-700 font-bold">O</text>
                  </svg>
                </Diagram>
                <Step>
                  <strong>b) Un programme possible :</strong> Trace un cercle de centre O et de rayon 3 cm. Trace un
                  diamètre [AA&apos;] de ce cercle. Place un point B sur ce cercle. Trace la droite (AB). Place le
                  point C sur cette droite, du côté de B, tel que BC = AB = 5 cm.
                </Step>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
