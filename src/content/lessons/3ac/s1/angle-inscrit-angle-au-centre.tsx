import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Angles Inscrits et Angles au Centre · Cours et exercices corrigés | 3AC",
  description:
    "Cours illustré sur les angles inscrits et les angles au centre dans un cercle : définitions, cas particulier de la tangente, propriétés démontrées, et 3 exercices avec correction détaillée. 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Géométrie du cercle",
  heroTitle: "Angles Inscrits et Angles au Centre",
  heroSubtitle:
    "Dans un cercle, deux familles d'angles se répondent : l'angle inscrit, posé sur le cercle, et l'angle au centre, posé au centre. Deux propriétés démontrées pas à pas, et 3 exercices corrigés.",
  footerNote: "Angles inscrits et angles au centre · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "angle-inscrit", label: "Angle inscrit" },
    { id: "angle-au-centre", label: "Angle au centre" },
    { id: "proprietes", label: "Propriétés" },
    { id: "exercices", label: "Exercices" },
  ],
};

function LegendDot({ className }: { className: string }) {
  return <span className={`inline-block h-3 w-3 shrink-0 rounded-full ${className}`} />;
}

function DiagramPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-xl border border-border bg-surface-muted p-4 ${className}`}>
      {children}
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

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "2", label: "définitions à maîtriser" },
          { value: "2", label: "propriétés démontrées" },
          { value: "3", label: "exercices corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#angle-inscrit"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Voir les exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">2×</span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              angle au centre = 2 · angle inscrit
            </span>
          </div>
        }
      />

      {/* ===================== I. ANGLE INSCRIT ===================== */}
      <LessonSection
        id="angle-inscrit"
        kicker="01 · Cours"
        title="L'angle inscrit dans un cercle"
        tone="light"
        description="Le premier angle qu'on étudie dans un cercle : son sommet est posé sur le cercle lui-même."
      >
        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-border bg-surface p-4 text-sm">
          <span className="font-mono text-xs font-bold uppercase tracking-wide text-foreground-muted">
            Légende des figures :
          </span>
          <span className="inline-flex items-center gap-2"><LegendDot className="bg-indigo-600" />Angle inscrit</span>
          <span className="inline-flex items-center gap-2"><LegendDot className="bg-orange-500" />Angle au centre</span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-4 rounded-full bg-sky-500" />Arc intercepté
          </span>
        </div>

        <Callout variant="info" title="Définition">
          Dans un cercle, un <strong>angle inscrit</strong> est un angle dont <strong>le sommet est sur le cercle</strong>{" "}
          et dont <strong>les côtés coupent le cercle</strong>.
        </Callout>

        <div className="mt-6 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <DiagramPanel>
            <svg viewBox="0 0 300 300" className="w-full max-w-xs">
              <circle cx="150" cy="150" r="105" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <text x="228" y="65" fontSize="14" fill="#94a3b8" fontStyle="italic">(ζ)</text>
              <path d="M 114.1 248.7 A 105 105 0 0 0 253.4 168.2" fill="none" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />
              <line x1="64.0" y1="89.8" x2="114.1" y2="248.7" stroke="#475569" strokeWidth="2" />
              <line x1="64.0" y1="89.8" x2="287.5" y2="182.3" stroke="#475569" strokeWidth="2" />
              <path d="M 64.0 89.8 L 88.0 99.7 A 26 26 0 0 1 71.8 114.6 Z" fill="#4f46e5" fillOpacity="0.55" />
              <circle cx="150" cy="150" r="3" fill="#475569" />
              <text x="156" y="146" fontSize="13" fill="#64748b">O</text>
              <circle cx="64.0" cy="89.8" r="4" fill="#1e293b" />
              <circle cx="114.1" cy="248.7" r="4" fill="#1e293b" />
              <circle cx="253.4" cy="168.2" r="4" fill="#1e293b" />
              <text x="47.6" y="78.3" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
              <text x="107.2" y="267.5" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
              <text x="273.1" y="171.7" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
              <text x="216.5" y="265.2" textAnchor="middle" fontSize="12" fill="#0369a1" fontStyle="italic">arc BC</text>
            </svg>
          </DiagramPanel>
          <div className="space-y-3 text-sm leading-relaxed sm:text-base">
            <p>On considère la figure ci-contre.</p>
            <p>
              L&apos;angle <Math tex="\widehat{BAC}" /> est appelé : <strong className="text-indigo-700">angle inscrit</strong>.
            </p>
            <p>
              On dit que l&apos;angle inscrit <Math tex="\widehat{BAC}" /> intercepte l&apos;arc{" "}
              <Math tex="\overgroup{BC}" /> <span className="font-semibold text-sky-600">(en bleu)</span>.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Cas particulier</h3>
          <p className="mb-4 text-sm text-foreground-muted">
            On considère la figure suivante telle que <strong>(AC)</strong> est une tangente au cercle{" "}
            <Math tex="(\zeta)" /> en <Math tex="A" /> :
          </p>
          <div className="grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
            <DiagramPanel>
              <svg viewBox="0 0 300 300" className="w-full max-w-xs">
                <circle cx="150" cy="150" r="100" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <text x="88" y="42" fontSize="14" fill="#94a3b8" fontStyle="italic">(ζ)</text>
                <path d="M 250.0 150.0 A 100 100 0 0 1 56.0 184.2" fill="none" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />
                <line x1="250" y1="55" x2="250" y2="245" stroke="#475569" strokeWidth="2" />
                <line x1="150" y1="150" x2="250" y2="150" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="250" y1="150" x2="56.0" y2="184.2" stroke="#475569" strokeWidth="2" />
                <path d="M 238 150 L 238 138 L 250 138" fill="none" stroke="#94a3b8" strokeWidth="1.6" />
                <path d="M 250.0 150.0 L 250.0 172.0 A 22 22 0 0 1 228.3 153.8 Z" fill="#4f46e5" fillOpacity="0.55" />
                <circle cx="150" cy="150" r="3" fill="#475569" />
                <text x="138" y="146" fontSize="13" fill="#64748b">O</text>
                <circle cx="250" cy="150" r="4" fill="#1e293b" />
                <circle cx="56.0" cy="184.2" r="4" fill="#1e293b" />
                <circle cx="250" cy="245" r="4" fill="#1e293b" />
                <text x="270.0" y="150.0" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                <text x="37.2" y="191.0" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                <text x="264" y="252" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                <text x="170.8" y="268.2" textAnchor="middle" fontSize="12" fill="#0369a1" fontStyle="italic">arc AB</text>
              </svg>
            </DiagramPanel>
            <div className="space-y-3 text-sm leading-relaxed sm:text-base">
              <p>
                L&apos;angle <Math tex="\widehat{BAC}" /> est appelé aussi <strong className="text-indigo-700">angle inscrit</strong>.
              </p>
              <p>
                Il intercepte l&apos;arc <Math tex="\overgroup{AB}" /> <span className="font-semibold text-sky-600">(en bleu)</span>.
              </p>
              <Callout variant="info">
                Un des côtés de l&apos;angle inscrit peut donc être une <strong>tangente</strong> au cercle plutôt qu&apos;une corde.
              </Callout>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. ANGLE AU CENTRE ===================== */}
      <LessonSection
        id="angle-au-centre"
        kicker="02 · Cours"
        title="L'angle au centre"
        tone="muted"
        description="Le second angle a, cette fois, son sommet au centre du cercle. Il relie la mesure d'un angle inscrit à celle d'un arc."
      >
        <Callout variant="info" title="Définition">
          Dans un cercle, un <strong>angle au centre</strong> est un angle dont <strong>le sommet est le centre du cercle</strong>.
        </Callout>

        <div className="mt-6 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <DiagramPanel>
            <svg viewBox="0 0 300 300" className="w-full max-w-xs">
              <circle cx="150" cy="150" r="105" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              <text x="228" y="65" fontSize="14" fill="#94a3b8" fontStyle="italic">(ζ)</text>
              <path d="M 131.8 253.4 A 105 105 0 0 0 255.0 150.0" fill="none" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" />
              <line x1="150" y1="150" x2="131.8" y2="253.4" stroke="#475569" strokeWidth="2" />
              <line x1="150" y1="150" x2="255.0" y2="150.0" stroke="#475569" strokeWidth="2" />
              <path d="M 150 150 L 144.5 181.5 A 32 32 0 0 0 182.0 150.0 Z" fill="#f59e0b" fillOpacity="0.6" />
              <circle cx="150" cy="150" r="4" fill="#1e293b" />
              <text x="158" y="145" fontWeight="700" fontSize="16" fill="#1e293b">O</text>
              <circle cx="131.8" cy="253.4" r="4" fill="#1e293b" />
              <circle cx="255.0" cy="150.0" r="4" fill="#1e293b" />
              <text x="128.3" y="273.1" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
              <text x="275.0" y="150.0" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
              <text x="235.5" y="251.9" textAnchor="middle" fontSize="12" fill="#0369a1" fontStyle="italic">arc BC</text>
            </svg>
          </DiagramPanel>
          <div className="space-y-3 text-sm leading-relaxed sm:text-base">
            <p>On considère la figure ci-contre.</p>
            <p>
              L&apos;angle <Math tex="\widehat{BOC}" /> est appelé : <strong className="text-orange-600">angle au centre</strong>.
            </p>
            <p>
              On dit que l&apos;angle au centre <Math tex="\widehat{BOC}" /> intercepte l&apos;arc{" "}
              <Math tex="\overgroup{BC}" /> <span className="font-semibold text-sky-600">(en bleu)</span>.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. PROPRIÉTÉS ===================== */}
      <LessonSection
        id="proprietes"
        kicker="03 · Cours"
        title="Propriétés des angles inscrits et au centre"
        tone="light"
        description="Deux propriétés relient les angles inscrits et les angles au centre lorsqu'ils interceptent le même arc."
      >
        <div className="space-y-10">
          {/* Propriété 1 */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Propriété 1</h3>
            <Callout variant="danger">
              Dans un cercle, si <strong>deux angles inscrits interceptent le même arc</strong>, alors ils ont la même
              mesure (ils sont isométriques).
            </Callout>

            <div className="mt-6">
              <ExerciseCard
                id="prop1"
                index={1}
                title="Exercice d'application"
                items={
                  <div>
                    <p className="mb-4 text-sm text-foreground-muted">
                      On considère la figure suivante telle que : <Math tex="\widehat{BAC}=60°" />. Calculer la
                      mesure de l&apos;angle <Math tex="\widehat{BDC}" />, en justifiant la réponse.
                    </p>
                    <DiagramPanel>
                      <svg viewBox="0 0 300 300" className="w-full max-w-[260px]">
                        <circle cx="150" cy="150" r="100" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        <text x="228" y="70" fontSize="14" fill="#94a3b8" fontStyle="italic">(ζ)</text>
                        <path d="M 73.4 214.3 A 100 100 0 0 0 244.0 184.2" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                        <line x1="63.4" y1="100.0" x2="244.0" y2="184.2" stroke="#94a3b8" strokeWidth="1.6" />
                        <line x1="73.4" y1="214.3" x2="200.0" y2="63.4" stroke="#94a3b8" strokeWidth="1.6" />
                        <line x1="63.4" y1="100.0" x2="73.4" y2="214.3" stroke="#475569" strokeWidth="2" />
                        <line x1="200.0" y1="63.4" x2="244.0" y2="184.2" stroke="#475569" strokeWidth="2" />
                        <path d="M 63.4 100.0 L 83.3 109.3 A 22 22 0 0 1 65.3 121.9 Z" fill="#4f46e5" fillOpacity="0.55" />
                        <path d="M 200.0 63.4 L 207.5 84.1 A 22 22 0 0 1 185.9 80.3 Z" fill="#4f46e5" fillOpacity="0.3" />
                        <circle cx="63.4" cy="100.0" r="4" fill="#1e293b" />
                        <circle cx="200.0" cy="63.4" r="4" fill="#1e293b" />
                        <circle cx="244.0" cy="184.2" r="4" fill="#1e293b" />
                        <circle cx="73.4" cy="214.3" r="4" fill="#1e293b" />
                        <circle cx="150" cy="150" r="3" fill="#475569" />
                        <text x="156" y="146" fontSize="13" fill="#64748b">O</text>
                        <text x="46.1" y="90.0" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                        <text x="210.0" y="46.1" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                        <text x="262.8" y="191.0" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                        <text x="58.1" y="227.1" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                        <text x="90" y="112" fontSize="12.5" fontWeight="700" fill="#4338ca">60°</text>
                        <text x="196" y="90" fontSize="12.5" fontWeight="700" fill="#4338ca">?</text>
                      </svg>
                    </DiagramPanel>
                  </div>
                }
                correction={
                  <div className="space-y-2 text-sm">
                    <p>On a d&apos;après la figure :</p>
                    <p>
                      <Math tex="\widehat{BAC}" /> et <Math tex="\widehat{BDC}" /> sont deux angles inscrits qui
                      interceptent le même arc <Math tex="\overgroup{BC}" />.
                    </p>
                    <p>
                      Donc : <Math tex="\widehat{BAC}=\widehat{BDC}" />.
                    </p>
                    <p>
                      Et puisque <Math tex="\widehat{BAC}=60°" />, alors :{" "}
                      <Math tex="\mathbf{\widehat{BDC}=60°}" />
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          {/* Propriété 2 */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">Propriété 2</h3>
            <Callout variant="danger">
              Dans un cercle, si <strong>un angle inscrit et un angle au centre interceptent le même arc</strong>,
              alors la mesure de l&apos;angle au centre est <strong>le double</strong> de celle de l&apos;angle inscrit.
            </Callout>

            <div className="mt-6">
              <ExerciseCard
                id="prop2"
                index={2}
                title="Exercice d'application"
                items={
                  <div>
                    <p className="mb-4 text-sm text-foreground-muted">
                      On considère la figure suivante telle que : <Math tex="\widehat{BOC}=130°" />. Calculer la
                      mesure de l&apos;angle <Math tex="\widehat{BAC}" />, en justifiant la réponse.
                    </p>
                    <DiagramPanel>
                      <svg viewBox="0 0 300 300" className="w-full max-w-[260px]">
                        <circle cx="150" cy="150" r="100" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                        <text x="228" y="70" fontSize="14" fill="#94a3b8" fontStyle="italic">(ζ)</text>
                        <path d="M 73.4 214.3 A 100 100 0 0 0 248.5 167.4" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                        <line x1="150" y1="150" x2="73.4" y2="214.3" stroke="#475569" strokeWidth="1.8" />
                        <line x1="150" y1="150" x2="248.5" y2="167.4" stroke="#475569" strokeWidth="1.8" />
                        <line x1="73.4" y1="85.7" x2="73.4" y2="214.3" stroke="#475569" strokeWidth="2" />
                        <line x1="73.4" y1="85.7" x2="248.5" y2="167.4" stroke="#475569" strokeWidth="2" />
                        <path d="M 150 150 L 125.5 170.6 A 32 32 0 0 0 181.5 155.6 Z" fill="#f59e0b" fillOpacity="0.6" />
                        <path d="M 73.4 85.7 L 73.4 107.7 A 22 22 0 0 0 93.3 95.0 Z" fill="#4f46e5" fillOpacity="0.3" />
                        <circle cx="73.4" cy="85.7" r="4" fill="#1e293b" />
                        <circle cx="73.4" cy="214.3" r="4" fill="#1e293b" />
                        <circle cx="248.5" cy="167.4" r="4" fill="#1e293b" />
                        <circle cx="150" cy="150" r="4" fill="#1e293b" />
                        <text x="58.1" y="72.9" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                        <text x="58.1" y="227.1" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                        <text x="268.2" y="170.8" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                        <text x="158" y="145" fontWeight="700" fontSize="16" fill="#1e293b">O</text>
                        <text x="152" y="185" fontSize="12.5" fontWeight="700" fill="#b45309">130°</text>
                        <text x="82" y="100" fontSize="12.5" fontWeight="700" fill="#4338ca">?</text>
                      </svg>
                    </DiagramPanel>
                  </div>
                }
                correction={
                  <div className="space-y-2 text-sm">
                    <p>On a d&apos;après la figure :</p>
                    <p>
                      <Math tex="\widehat{BAC}" /> est un angle inscrit et <Math tex="\widehat{BOC}" /> est un angle au
                      centre qui interceptent le même arc <Math tex="\overgroup{BC}" />.
                    </p>
                    <p>
                      Donc : <Math tex="\widehat{BOC}=2\times\widehat{BAC}" />.
                    </p>
                    <p>
                      D&apos;où : <Math tex="\widehat{BAC}=\dfrac{\widehat{BOC}}{2}" />.
                    </p>
                    <p>
                      Et puisque <Math tex="\widehat{BOC}=130°" />, alors :{" "}
                      <Math tex="\widehat{BAC}=\dfrac{130°}{2}" />
                    </p>
                    <p>
                      <Math tex="\mathbf{\widehat{BAC}=65°}" />
                    </p>
                  </div>
                }
              />
            </div>
          </div>

          <FormulaBlock
            tex="\text{Angle au centre} = 2 \times \text{Angle inscrit}"
            caption="pour un même arc intercepté, c'est-à-dire angle inscrit = angle au centre ÷ 2"
          />
        </div>
      </LessonSection>

      {/* ===================== IV. EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · Entraînement"
        title="3 exercices corrigés"
        tone="muted"
        description="Cherche chaque exercice au brouillon, puis clique sur « Voir la correction » pour vérifier."
      >
        <ExerciseGroup total={3} celebrationTitle="Bravo, les 3 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les angles inscrits et au centre.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 01"
            itemsLabel="Angle inscrit & angle au centre"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">
                  On considère la figure suivante : les points <Math tex="R" />, <Math tex="P" /> et <Math tex="M" />{" "}
                  sont sur le cercle de centre <Math tex="O" />.
                </p>
                <DiagramPanel className="mb-4">
                  <svg viewBox="0 0 300 300" className="w-full max-w-[220px]">
                    <circle cx="150" cy="150" r="100" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="150" cy="150" r="3.5" fill="#475569" />
                    <text x="158" y="146" fontSize="13" fill="#64748b">O</text>
                    <circle cx="56.0" cy="115.8" r="4" fill="#1e293b" />
                    <circle cx="79.3" cy="220.7" r="4" fill="#1e293b" />
                    <circle cx="141.3" cy="249.6" r="4" fill="#1e293b" />
                    <text x="37.2" y="109.0" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">R</text>
                    <text x="65.1" y="234.9" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">P</text>
                    <text x="139.5" y="269.5" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">M</text>
                  </svg>
                </DiagramPanel>
                <div className="grid gap-3">
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-1 text-xs font-bold uppercase text-indigo-600">1)</p>
                    <p className="text-sm">
                      Sachant que <Math tex="\widehat{ROP}=65°" />, déterminer la mesure de l&apos;angle{" "}
                      <Math tex="\widehat{RMP}" />.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-1 text-xs font-bold uppercase text-indigo-600">2)</p>
                    <div className="space-y-1 text-sm">
                      <p>a) Colorier l&apos;arc de cercle intercepté par l&apos;angle inscrit <Math tex="\widehat{RPM}" />.</p>
                      <p>b) Colorier l&apos;angle au centre associé à l&apos;angle inscrit <Math tex="\widehat{RPM}" />.</p>
                      <p>
                        c) Sachant que <Math tex="\widehat{RPM}=105°" />, déterminer, en justifiant, la mesure de
                        l&apos;angle au centre associé à l&apos;angle inscrit <Math tex="\widehat{RPM}" />.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-5 text-sm">
                <div className="grid items-center gap-6 rounded-xl border border-green-500/20 bg-surface p-4 sm:grid-cols-2 sm:p-5">
                  <DiagramPanel>
                    <svg viewBox="0 0 300 300" className="w-full max-w-[220px]">
                      <circle cx="150" cy="150" r="100" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                      <line x1="150" y1="150" x2="141.3" y2="249.6" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3 3" />
                      <path d="M 56.0 115.8 A 100 100 0 1 1 141.3 249.6" fill="none" stroke="#0ea5e9" strokeWidth="3.5" strokeDasharray="7 5" strokeLinecap="round" />
                      <line x1="150" y1="150" x2="56.0" y2="115.8" stroke="#475569" strokeWidth="2" />
                      <line x1="150" y1="150" x2="79.3" y2="220.7" stroke="#475569" strokeWidth="2" />
                      <line x1="141.3" y1="249.6" x2="56.0" y2="115.8" stroke="#475569" strokeWidth="2" />
                      <line x1="141.3" y1="249.6" x2="79.3" y2="220.7" stroke="#475569" strokeWidth="2" />
                      <path d="M 150 150 L 125.6 141.1 A 26 26 0 0 0 131.6 168.4 Z" fill="#f59e0b" fillOpacity="0.6" />
                      <path d="M 141.3 249.6 L 123.2 241.2 A 20 20 0 0 1 130.5 232.7 Z" fill="#4f46e5" fillOpacity="0.55" />
                      <circle cx="150" cy="150" r="3.5" fill="#475569" />
                      <text x="158" y="146" fontSize="13" fill="#64748b">O</text>
                      <circle cx="56.0" cy="115.8" r="4" fill="#1e293b" />
                      <circle cx="79.3" cy="220.7" r="4" fill="#1e293b" />
                      <circle cx="141.3" cy="249.6" r="4" fill="#1e293b" />
                      <text x="37.2" y="109.0" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">R</text>
                      <text x="65.1" y="234.9" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">P</text>
                      <text x="139.5" y="269.5" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">M</text>
                      <text x="118" y="140" fontSize="12" fontWeight="700" fill="#b45309">65°</text>
                      <text x="115" y="234" fontSize="11.5" fontWeight="700" fill="#4338ca">32,5°</text>
                      <text x="200" y="80" textAnchor="middle" fontSize="11.5" fill="#0369a1" fontStyle="italic">grand arc RM</text>
                    </svg>
                  </DiagramPanel>
                  <div className="space-y-2 text-xs leading-relaxed sm:text-sm">
                    <p><LegendDot className="mr-1.5 align-middle bg-orange-500" />Angle au centre <Math tex="\widehat{ROP}=65°" /></p>
                    <p><LegendDot className="mr-1.5 align-middle bg-indigo-600" />Angle inscrit <Math tex="\widehat{RMP}" /> (question 1)</p>
                    <p>
                      <span className="mr-1 inline-block h-1.5 w-4 rounded-full bg-sky-500 align-middle" />
                      Arc en pointillé = grand arc <Math tex="\overgroup{RM}" /> (question 2)
                    </p>
                  </div>
                </div>

                <CorrectionCard n="1">
                  Mesure de <Math tex="\widehat{RMP}" /> : dans le cercle, <Math tex="\widehat{ROP}" /> est l&apos;angle
                  au centre associé à l&apos;angle inscrit <Math tex="\widehat{RMP}" /> et <Math tex="\widehat{ROP}=65°" />.
                  Or la mesure d&apos;un angle inscrit est égale à la moitié de celle de l&apos;angle au centre associé.
                  Donc : <Math tex="\widehat{RMP}=\dfrac{\widehat{ROP}}{2}=\dfrac{65°}{2}=\mathbf{32{,}5°}" />
                </CorrectionCard>
                <CorrectionCard n="2 a-b">
                  L&apos;angle inscrit <Math tex="\widehat{RPM}" /> a son sommet en <Math tex="P" />, entre{" "}
                  <Math tex="R" /> et <Math tex="M" /> : il intercepte donc l&apos;arc <Math tex="\overgroup{RM}" /> qui
                  ne contient pas <Math tex="P" />, ici le <strong>grand arc</strong> <Math tex="\overgroup{RM}" /> (en
                  pointillé bleu ci-dessus). L&apos;angle au centre associé doit intercepter ce même grand arc : c&apos;est
                  donc l&apos;<strong>angle rentrant</strong> <Math tex="\widehat{ROM}" /> (la partie de l&apos;angle en{" "}
                  <Math tex="O" /> supérieure à 180°, de l&apos;autre côté du petit angle <Math tex="\widehat{ROM}" />).
                </CorrectionCard>
                <CorrectionCard n="2 c">
                  L&apos;angle rentrant <Math tex="\widehat{ROM}" /> est l&apos;angle au centre associé à l&apos;angle
                  inscrit <Math tex="\widehat{RPM}" /> et <Math tex="\widehat{RPM}=105°" />. Or{" "}
                  <Math tex="\widehat{RPM}=\dfrac{\widehat{ROM}}{2}" />. D&apos;où :{" "}
                  <Math tex="\widehat{ROM}=2\times\widehat{RPM}=2\times105°=\mathbf{210°}" />
                </CorrectionCard>
                <Callout variant="warning" title="À retenir">
                  Un angle inscrit intercepte toujours l&apos;arc qui <strong>ne contient pas</strong> son sommet. Si
                  cet arc est le « grand » arc (plus de la moitié du cercle), l&apos;angle au centre associé est un{" "}
                  <strong>angle rentrant</strong> (supérieur à 180°).
                </Callout>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 02"
            itemsLabel="Angles inscrits & diamètre"
            items={
              <div>
                <p className="mb-2 text-sm text-foreground-muted">On considère la figure ci-dessous dans laquelle :</p>
                <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-foreground-muted">
                  <li>
                    les points <Math tex="E" />, <Math tex="D" />, <Math tex="P" />, <Math tex="F" />, <Math tex="N" />,{" "}
                    <Math tex="M" /> et <Math tex="G" /> appartiennent au cercle de centre <Math tex="I" /> ;
                  </li>
                  <li>
                    le segment <Math tex="[GP]" /> est un diamètre du cercle.
                  </li>
                </ul>
                <DiagramPanel className="mb-4">
                  <svg viewBox="0 0 300 300" className="w-full max-w-[260px]">
                    <circle cx="150" cy="150" r="105" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    <line x1="69.6" y1="217.5" x2="230.4" y2="82.5" stroke="#475569" strokeWidth="2" />
                    <line x1="69.6" y1="217.5" x2="131.8" y2="46.6" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="131.8" y1="46.6" x2="248.7" y2="185.9" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="69.6" y1="217.5" x2="48.6" y2="122.8" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="48.6" y1="122.8" x2="248.7" y2="185.9" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="48.6" y1="122.8" x2="230.4" y2="82.5" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="69.6" y1="217.5" x2="105.6" y2="245.2" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="105.6" y1="245.2" x2="230.4" y2="82.5" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="105.6" y1="245.2" x2="248.7" y2="185.9" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="69.6" y1="217.5" x2="168.2" y2="253.4" stroke="#94a3b8" strokeWidth="1.4" />
                    <line x1="168.2" y1="253.4" x2="248.7" y2="185.9" stroke="#94a3b8" strokeWidth="1.4" />
                    <path d="M 150 150 L 180.1 160.9 A 32 32 0 0 1 125.5 170.6 Z" fill="#f59e0b" fillOpacity="0.6" />
                    <circle cx="150" cy="150" r="3.5" fill="#475569" />
                    <text x="137" y="139" fontSize="12.5" fontWeight="700" fill="#64748b">I</text>
                    <circle cx="69.6" cy="217.5" r="4" fill="#1e293b" />
                    <circle cx="230.4" cy="82.5" r="4" fill="#1e293b" />
                    <circle cx="131.8" cy="46.6" r="4" fill="#1e293b" />
                    <circle cx="48.6" cy="122.8" r="4" fill="#1e293b" />
                    <circle cx="248.7" cy="185.9" r="4" fill="#1e293b" />
                    <circle cx="105.6" cy="245.2" r="4" fill="#1e293b" />
                    <circle cx="168.2" cy="253.4" r="4" fill="#1e293b" />
                    <text x="52.7" y="231.6" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">G</text>
                    <text x="247.3" y="68.4" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">P</text>
                    <text x="127.9" y="24.9" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">D</text>
                    <text x="27.3" y="117.1" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">E</text>
                    <text x="269.3" y="193.4" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">F</text>
                    <text x="96.3" y="265.1" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">M</text>
                    <text x="172.1" y="275.1" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">N</text>
                    <text x="163" y="152" fontSize="12" fontWeight="700" fill="#b45309">120°</text>
                  </svg>
                </DiagramPanel>
                <div className="grid gap-3">
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-1 text-xs font-bold uppercase text-indigo-600">1)</p>
                    <p className="text-sm">
                      Démontrer que la mesure de l&apos;angle <Math tex="\widehat{GEF}" /> est égale à celle de
                      l&apos;angle <Math tex="\widehat{GDF}" />. Quelle est cette mesure ? Justifier.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-1 text-xs font-bold uppercase text-indigo-600">2)</p>
                    <p className="text-sm">
                      Démontrer que la mesure de l&apos;angle <Math tex="\widehat{GEP}" /> est égale à celle de
                      l&apos;angle <Math tex="\widehat{GMP}" />. Quelle est cette mesure ? Justifier.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-4">
                    <p className="mb-1 text-xs font-bold uppercase text-indigo-600">3)</p>
                    <p className="text-sm">
                      Démontrer que la mesure de l&apos;angle <Math tex="\widehat{GMF}" /> est égale à celle de
                      l&apos;angle <Math tex="\widehat{GNF}" />. Calculer la mesure de <Math tex="\widehat{GMF}" />.
                      Justifier.
                    </p>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="1">
                  <Math tex="\widehat{GEF}" /> et <Math tex="\widehat{GDF}" /> sont deux angles inscrits interceptant
                  le même arc <Math tex="\overgroup{GF}" />, donc <Math tex="\widehat{GEF}=\widehat{GDF}" />. De plus,{" "}
                  <Math tex="\widehat{GIF}" /> est l&apos;angle au centre associé à ces deux angles inscrits, et{" "}
                  <Math tex="\widehat{GIF}=120°" />. Donc :{" "}
                  <Math tex="\widehat{GEF}=\widehat{GDF}=\dfrac{\widehat{GIF}}{2}=\dfrac{120°}{2}=\mathbf{60°}" />
                </CorrectionCard>
                <CorrectionCard n="2">
                  Les triangles <Math tex="GEP" /> et <Math tex="GMP" /> sont inscrits dans le cercle de diamètre{" "}
                  <Math tex="[GP]" />. Or, si un triangle est inscrit dans un cercle et si l&apos;un de ses côtés est
                  un diamètre de ce cercle, alors ce triangle est rectangle. Donc <Math tex="GEP" /> et{" "}
                  <Math tex="GMP" /> sont rectangles, respectivement en <Math tex="E" /> et en <Math tex="M" />. On en
                  déduit que : <Math tex="\widehat{GEP}=\widehat{GMP}=\mathbf{90°}" />
                </CorrectionCard>
                <CorrectionCard n="3">
                  <Math tex="\widehat{GMF}" /> et <Math tex="\widehat{GNF}" /> sont deux angles inscrits interceptant
                  le grand arc <Math tex="\overgroup{GF}" />, donc <Math tex="\widehat{GMF}=\widehat{GNF}" />.
                  L&apos;angle au centre associé à ce grand arc est l&apos;angle <Math tex="\widehat{GIF}" /> rentrant,
                  c&apos;est-à-dire <Math tex="360°-120°=240°" />. Donc :{" "}
                  <Math tex="\widehat{GMF}=\widehat{GNF}=\dfrac{240°}{2}=\mathbf{120°}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 03"
            itemsLabel="Angles inscrits & triangle"
            items={
              <div>
                <p className="mb-1 text-sm text-foreground-muted">
                  Sur la figure ci-dessous, les points <Math tex="E" />, <Math tex="F" />, <Math tex="G" /> et{" "}
                  <Math tex="H" /> sont sur le cercle <Math tex="(\zeta)" /> de centre <Math tex="O" />. Les droites{" "}
                  <Math tex="(FH)" /> et <Math tex="(EG)" /> sont sécantes au point <Math tex="I" />.
                </p>
                <p className="mb-4 text-sm font-semibold">
                  <Math tex="\widehat{HOG}=130°" /> et <Math tex="\widehat{EHF}=40°" />
                </p>
                <DiagramPanel className="mb-4">
                  <svg viewBox="0 0 300 300" className="w-full max-w-[240px]">
                    <circle cx="150" cy="150" r="105" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    <text x="52" y="60" fontSize="14" fill="#94a3b8" fontStyle="italic">(ζ)</text>
                    <line x1="150" y1="150" x2="140.8" y2="45.4" stroke="#475569" strokeWidth="1.8" />
                    <line x1="150" y1="150" x2="75.8" y2="224.2" stroke="#475569" strokeWidth="1.8" />
                    <line x1="140.8" y1="45.4" x2="75.8" y2="224.2" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="140.8" y1="45.4" x2="224.2" y2="224.2" stroke="#475569" strokeWidth="2" />
                    <line x1="140.8" y1="45.4" x2="236.0" y2="89.8" stroke="#475569" strokeWidth="2" />
                    <line x1="236.0" y1="89.8" x2="75.8" y2="224.2" stroke="#475569" strokeWidth="2" />
                    <line x1="75.8" y1="224.2" x2="224.2" y2="224.2" stroke="#e11d48" strokeWidth="2.4" />
                    <path d="M 150 150 L 130.2 169.8 A 28 28 0 0 1 147.5 122.1 Z" fill="#f59e0b" fillOpacity="0.6" />
                    <path d="M 140.8 45.4 L 149.3 63.5 A 20 20 0 0 0 158.9 53.9 Z" fill="#4f46e5" fillOpacity="0.55" />
                    <circle cx="150" cy="150" r="3.5" fill="#475569" />
                    <text x="156" y="146" fontSize="13" fill="#64748b">O</text>
                    <circle cx="140.8" cy="45.4" r="4" fill="#1e293b" />
                    <circle cx="236.0" cy="89.8" r="4" fill="#1e293b" />
                    <circle cx="224.2" cy="224.2" r="4" fill="#1e293b" />
                    <circle cx="75.8" cy="224.2" r="4" fill="#1e293b" />
                    <circle cx="182.5" cy="134.7" r="3.5" fill="#e11d48" />
                    <text x="138.9" y="23.5" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">H</text>
                    <text x="254.0" y="77.2" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                    <text x="239.8" y="239.8" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">F</text>
                    <text x="60.2" y="239.8" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">G</text>
                    <text x="190" y="128" fontSize="13" fontWeight="700" fill="#e11d48">I</text>
                    <text x="122" y="140" fontSize="12" fontWeight="700" fill="#b45309">130°</text>
                    <text x="152" y="58" fontSize="11.5" fontWeight="700" fill="#4338ca">40°</text>
                  </svg>
                </DiagramPanel>
                <div className="rounded-xl border border-border p-4 text-sm">
                  Calculer la mesure de <strong>chaque angle du triangle FGI</strong> (en rouge sur la figure).
                  Justifier chaque réponse.
                </div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="HFG">
                  <Math tex="\widehat{HFG}" /> (= angle <Math tex="\widehat{GFI}" /> du triangle, car{" "}
                  <Math tex="I\in(FH)" />) : dans le cercle <Math tex="(\zeta)" />, <Math tex="\widehat{HOG}" /> est
                  l&apos;angle au centre associé à l&apos;angle inscrit <Math tex="\widehat{HFG}" /> et{" "}
                  <Math tex="\widehat{HOG}=130°" />. Donc :{" "}
                  <Math tex="\widehat{HFG}=\dfrac{\widehat{HOG}}{2}=\dfrac{130°}{2}=\mathbf{65°}" />
                </CorrectionCard>
                <CorrectionCard n="EGF">
                  <Math tex="\widehat{EGF}" /> (= angle <Math tex="\widehat{FGI}" /> du triangle, car{" "}
                  <Math tex="I\in(EG)" />) : <Math tex="\widehat{EGF}" /> et <Math tex="\widehat{EHF}" /> sont deux
                  angles inscrits interceptant le même arc <Math tex="\overgroup{EF}" />, et{" "}
                  <Math tex="\widehat{EHF}=40°" />. Donc : <Math tex="\widehat{EGF}=\widehat{EHF}=\mathbf{40°}" />
                </CorrectionCard>
                <CorrectionCard n="FIG">
                  Dans le triangle <Math tex="FIG" />, la somme des angles vaut 180° :{" "}
                  <Math tex="\widehat{FIG}+\widehat{IGF}+\widehat{GFI}=180°" />, soit{" "}
                  <Math tex="\widehat{FIG}+40°+65°=180°" />. Donc :{" "}
                  <Math tex="\widehat{FIG}=180°-105°=\mathbf{75°}" />
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
