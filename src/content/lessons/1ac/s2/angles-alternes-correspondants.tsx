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
  title: "Angles Alternes-Internes & Correspondants · Cours et exercices | 1AC",
  description:
    "Cours complet sur les angles alternes-internes et les angles correspondants (1ère année collège) : définitions, propriétés directes et réciproques, applications, avec 6 exercices corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 6",
  heroTitle: "Angles Alternes-Internes & Correspondants",
  heroSubtitle:
    "Deux droites coupées par une sécante : reconnaître les angles en Z et en F, et utiliser leurs propriétés directes et réciproques.",
  footerNote: "Angles alternes-internes et correspondants · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "alternes-internes", label: "Alternes-internes" },
    { id: "correspondants", label: "Correspondants" },
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

/** Colored property statement box. */
function Statement({ tone, children }: { tone: "teal" | "fuchsia"; children: ReactNode }) {
  const cls =
    tone === "teal" ? "border-teal-200 bg-teal-50 text-teal-900" : "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900";
  return <div className={`rounded-xl border p-4 text-center text-sm font-medium ${cls}`}>{children}</div>;
}

/** Two-column "problem / figure" application block, followed by its solution steps. */
function Application({
  prompt,
  question,
  diagram,
  solution,
}: {
  prompt: ReactNode;
  question: ReactNode;
  diagram: ReactNode;
  solution: ReactNode;
}) {
  return (
    <>
      <p className="mt-6 mb-3 text-xs font-bold text-indigo-500 uppercase">Application</p>
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm text-foreground-muted">{prompt}</p>
          <p className="text-sm font-semibold text-foreground">{question}</p>
        </div>
        {diagram}
      </div>
      <div className="mt-5 space-y-2.5 border-t border-dashed border-border pt-5">
        <p className="text-xs font-bold text-green-600 uppercase">Solution</p>
        {solution}
      </div>
    </>
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
          { value: "2", label: "types d'angles" },
          { value: "6", label: "exercices" },
          { value: "100%", label: "corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#alternes-internes"
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
            <line x1="20" y1="60" x2="180" y2="60" stroke="white" strokeWidth="3" />
            <line x1="20" y1="140" x2="180" y2="140" stroke="white" strokeWidth="3" />
            <line x1="65" y1="20" x2="135" y2="180" stroke="#fb923c" strokeWidth="2.5" />
            <circle cx="90" cy="60" r="4" fill="#fb923c" />
            <circle cx="110" cy="140" r="4" fill="#fb923c" />
          </svg>
        }
      />

      {/* ===================== I. ANGLES ALTERNES-INTERNES ===================== */}
      <LessonSection
        id="alternes-internes"
        kicker="01 · La configuration en Z"
        title="Angles alternes-internes"
        tone="light"
        description="Deux droites, une sécante : la configuration en « Z »."
      >
        <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Exemple</h3>
          <p className="mb-5 text-sm text-foreground-muted">
            On considère deux droites distinctes (D) et (D&apos;), coupées par une sécante (Δ) aux points A et B.
          </p>

          <Diagram>
            <svg viewBox="0 0 380 260" className="mx-auto h-auto w-full max-w-sm">
              <line x1="30" y1="80" x2="345" y2="80" className="stroke-teal-600" strokeWidth="2.25" />
              <line x1="30" y1="190" x2="345" y2="190" className="stroke-teal-600" strokeWidth="2.25" />
              <line x1="122" y1="20" x2="265" y2="245" className="stroke-slate-500" strokeWidth="2" />
              <polygon points="160,80 136,80 173,100" className="fill-teal-400/40" />
              <polygon points="230,190 217,170 254,190" className="fill-teal-400/40" />
              <circle cx="160" cy="80" r="5" className="fill-teal-600" />
              <circle cx="230" cy="190" r="5" className="fill-teal-600" />
              <circle cx="60" cy="80" r="3.5" className="fill-slate-400" />
              <circle cx="320" cy="80" r="3.5" className="fill-slate-400" />
              <circle cx="60" cy="190" r="3.5" className="fill-slate-400" />
              <circle cx="320" cy="190" r="3.5" className="fill-slate-400" />
              <text x="128" y="14" fontSize="14" className="fill-slate-500 italic">(Δ)</text>
              <text x="322" y="100" fontSize="14" className="fill-teal-700 font-semibold italic">(D)</text>
              <text x="322" y="174" fontSize="14" className="fill-teal-700 font-semibold italic">(D′)</text>
              <text x="44" y="72" fontSize="15" className="fill-slate-700 font-bold">E</text>
              <text x="326" y="72" fontSize="15" className="fill-slate-700 font-bold">F</text>
              <text x="44" y="206" fontSize="15" className="fill-slate-700 font-bold">G</text>
              <text x="326" y="206" fontSize="15" className="fill-slate-700 font-bold">H</text>
              <text x="166" y="70" fontSize="15" className="fill-teal-700 font-bold">A</text>
              <text x="236" y="202" fontSize="15" className="fill-teal-700 font-bold">B</text>
            </svg>
          </Diagram>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-center text-sm text-teal-900">
              Les angles <strong>EÂB</strong> et <strong>AB̂H</strong> sont des angles <strong>alternes-internes</strong>{" "}
              <span className="text-xs text-teal-600">(zone teintée)</span>.
            </div>
            <div className="rounded-xl border border-border bg-surface-muted p-4 text-center text-sm text-foreground">
              De même, <strong>AB̂G</strong> et <strong>FÂB</strong> forment un second couple d&apos;angles
              alternes-internes.
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-foreground-muted">
            Ils sont « internes » (entre les deux droites) et « alternes » (de part et d&apos;autre de la sécante),
            repérables par la forme d&apos;un <strong>Z</strong>.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Propriétés</h3>
          <p className="mt-4 mb-2 text-xs font-bold text-teal-500 uppercase">a) Propriété directe</p>
          <Statement tone="teal">
            Si deux droites sont <strong>parallèles</strong>, alors elles déterminent avec toute sécante des angles
            alternes-internes <strong>isométriques</strong> (égaux).
          </Statement>

          <Application
            prompt={
              <>
                <strong>ABC</strong> est un triangle équilatéral et <strong>(EC) ∥ (AB)</strong>, avec E un point tel
                que C soit entre B et E sur cette parallèle.
              </>
            }
            question={
              <>
                Calculons <Math tex="\widehat{ACE}" />.
              </>
            }
            diagram={
              <svg viewBox="0 0 300 220" className="mx-auto h-auto w-full max-w-xs">
                <polygon points="150,30 60,180 240,180" className="fill-teal-50 stroke-teal-600" strokeWidth="2.25" />
                <line x1="240" y1="180" x2="276" y2="120" strokeDasharray="5,4" className="stroke-violet-500" strokeWidth="1.75" />
                <g className="stroke-slate-600" strokeWidth="1.75">
                  <line x1="98" y1="101" x2="112" y2="109" />
                  <line x1="150" y1="176" x2="150" y2="184" />
                  <line x1="188" y1="109" x2="202" y2="101" />
                </g>
                <circle cx="150" cy="30" r="5" className="fill-teal-600" />
                <circle cx="60" cy="180" r="5" className="fill-teal-600" />
                <circle cx="240" cy="180" r="5" className="fill-teal-600" />
                <circle cx="276" cy="120" r="4.5" className="fill-violet-500" />
                <text x="142" y="20" fontSize="15" className="fill-slate-700 font-bold">A</text>
                <text x="42" y="200" fontSize="15" className="fill-slate-700 font-bold">B</text>
                <text x="246" y="200" fontSize="15" className="fill-slate-700 font-bold">C</text>
                <text x="282" y="116" fontSize="15" className="fill-violet-600 font-bold">E</text>
              </svg>
            }
            solution={
              <div className="space-y-2.5">
                <Step>
                  On considère les parallèles <strong>(AB)</strong> et <strong>(EC)</strong>, et la sécante{" "}
                  <strong>(AC)</strong>.
                </Step>
                <Step>
                  On a : <Math tex="\widehat{BAC}" /> et <Math tex="\widehat{ACE}" /> sont deux angles
                  alternes-internes, donc <Math tex="\widehat{BAC} = \widehat{ACE}" />.
                </Step>
                <Step>
                  Or ABC est équilatéral, donc <Math tex="\widehat{BAC} = 60°" />.
                </Step>
                <Step>
                  <strong>
                    D&apos;où : <Math tex="\widehat{ACE} = 60°" />.
                  </strong>
                </Step>
              </div>
            }
          />
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-2 text-xs font-bold text-teal-500 uppercase">b) Propriété réciproque</p>
          <Statement tone="teal">
            Si deux droites déterminent avec une sécante deux angles alternes-internes <strong>isométriques</strong>{" "}
            (égaux), alors elles sont <strong>parallèles</strong>.
          </Statement>

          <Application
            prompt={
              <>
                On considère la figure ci-contre telle que : <Math tex="\widehat{ABC} = 50°" /> et{" "}
                <Math tex="\widehat{BCD} = 50°" />.
              </>
            }
            question="Montrons que (AB) ∥ (CD)."
            diagram={
              <svg viewBox="0 0 320 220" className="mx-auto h-auto w-full max-w-xs">
                <line x1="40" y1="40" x2="180" y2="60" className="stroke-teal-600" strokeWidth="2.25" />
                <line x1="180" y1="60" x2="150" y2="170" className="stroke-slate-500" strokeWidth="2" />
                <line x1="150" y1="170" x2="295" y2="190" className="stroke-teal-600" strokeWidth="2.25" />
                <circle cx="180" cy="60" r="5" className="fill-teal-600" />
                <circle cx="150" cy="170" r="5" className="fill-teal-600" />
                <circle cx="40" cy="40" r="4" className="fill-slate-400" />
                <circle cx="295" cy="190" r="4" className="fill-slate-400" />
                <text x="24" y="34" fontSize="15" className="fill-slate-700 font-bold">A</text>
                <text x="188" y="52" fontSize="15" className="fill-slate-700 font-bold">B</text>
                <text x="126" y="172" fontSize="15" className="fill-slate-700 font-bold">C</text>
                <text x="300" y="200" fontSize="15" className="fill-slate-700 font-bold">D</text>
                <text x="146" y="82" fontSize="13" className="fill-teal-700 font-bold">50°</text>
                <text x="152" y="152" fontSize="13" className="fill-teal-700 font-bold">50°</text>
              </svg>
            }
            solution={
              <div className="space-y-2.5">
                <Step>
                  On considère les droites <strong>(AB)</strong> et <strong>(CD)</strong>, et la sécante{" "}
                  <strong>(BC)</strong>.
                </Step>
                <Step>
                  On a : <Math tex="\widehat{ABC}" /> et <Math tex="\widehat{BCD}" /> sont deux angles
                  alternes-internes.
                </Step>
                <Step>
                  Or <Math tex="\widehat{ABC} = 50°" /> et <Math tex="\widehat{BCD} = 50°" />, donc{" "}
                  <Math tex="\widehat{ABC} = \widehat{BCD}" />.
                </Step>
                <Step>
                  <strong>
                    D&apos;après la propriété réciproque des angles alternes-internes : (AB) ∥ (CD).
                  </strong>
                </Step>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== II. ANGLES CORRESPONDANTS ===================== */}
      <LessonSection
        id="correspondants"
        kicker="02 · La configuration en F"
        title="Angles correspondants"
        tone="muted"
        description="Deux droites, une sécante : la configuration en « F »."
      >
        <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Exemple</h3>
          <p className="mb-5 text-sm text-foreground-muted">
            On reprend (D) et (D&apos;), coupées par la sécante (Δ) aux points A et B, prolongée jusqu&apos;aux
            points M et N.
          </p>

          <Diagram>
            <svg viewBox="0 0 380 260" className="mx-auto h-auto w-full max-w-sm">
              <line x1="30" y1="80" x2="345" y2="80" className="stroke-fuchsia-600" strokeWidth="2.25" />
              <line x1="30" y1="190" x2="345" y2="190" className="stroke-fuchsia-600" strokeWidth="2.25" />
              <line x1="122" y1="20" x2="265" y2="245" className="stroke-slate-500" strokeWidth="2" />
              <polygon points="160,80 136,80 173,100" className="fill-fuchsia-400/40" />
              <polygon points="230,190 206,190 243,210" className="fill-fuchsia-400/40" />
              <circle cx="160" cy="80" r="5" className="fill-fuchsia-600" />
              <circle cx="230" cy="190" r="5" className="fill-fuchsia-600" />
              <circle cx="60" cy="80" r="3.5" className="fill-slate-400" />
              <circle cx="320" cy="80" r="3.5" className="fill-slate-400" />
              <circle cx="60" cy="190" r="3.5" className="fill-slate-400" />
              <circle cx="320" cy="190" r="3.5" className="fill-slate-400" />
              <circle cx="122" cy="20" r="3.5" className="fill-slate-400" />
              <circle cx="265" cy="245" r="3.5" className="fill-slate-400" />
              <text x="108" y="14" fontSize="15" className="fill-slate-700 font-bold">M</text>
              <text x="271" y="248" fontSize="15" className="fill-slate-700 font-bold">N</text>
              <text x="322" y="100" fontSize="14" className="fill-fuchsia-700 font-semibold italic">(D)</text>
              <text x="322" y="174" fontSize="14" className="fill-fuchsia-700 font-semibold italic">(D′)</text>
              <text x="44" y="72" fontSize="15" className="fill-slate-700 font-bold">E</text>
              <text x="326" y="72" fontSize="15" className="fill-slate-700 font-bold">F</text>
              <text x="44" y="206" fontSize="15" className="fill-slate-700 font-bold">G</text>
              <text x="326" y="206" fontSize="15" className="fill-slate-700 font-bold">H</text>
              <text x="166" y="70" fontSize="15" className="fill-fuchsia-700 font-bold">A</text>
              <text x="236" y="202" fontSize="15" className="fill-fuchsia-700 font-bold">B</text>
            </svg>
          </Diagram>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-fuchsia-200 bg-fuchsia-50 p-4 text-center text-sm text-fuchsia-900">
              Les angles <strong>EÂB</strong> et <strong>GB̂N</strong> sont des angles <strong>correspondants</strong>{" "}
              <span className="text-xs text-fuchsia-600">(zone teintée)</span>.
            </div>
            <div className="rounded-xl border border-border bg-surface-muted p-4 text-center text-sm text-foreground">
              De même : <strong>MÂF</strong> et <strong>AB̂H</strong> ; ainsi que <strong>FÂB</strong> et{" "}
              <strong>HB̂N</strong> ; et <strong>MÂE</strong> et <strong>AB̂G</strong>.
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-foreground-muted">
            Ils occupent la <strong>même position</strong> à chacun des deux points d&apos;intersection, repérables
            par la forme d&apos;un <strong>F</strong>.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-1 font-display text-xl font-bold text-foreground">Propriétés</h3>
          <p className="mt-4 mb-2 text-xs font-bold text-fuchsia-500 uppercase">a) Propriété directe</p>
          <Statement tone="fuchsia">
            Si deux droites sont <strong>parallèles</strong>, alors elles déterminent avec toute sécante des angles
            correspondants <strong>isométriques</strong> (égaux).
          </Statement>

          <Application
            prompt={
              <>
                <strong>ABC</strong> est un triangle rectangle en <strong>A</strong>, et <strong>(EF) ∥ (AB)</strong>{" "}
                avec E sur [CA] et F sur [CB].
              </>
            }
            question="Montrons que le triangle CEF est rectangle en E."
            diagram={
              <svg viewBox="0 0 300 220" className="mx-auto h-auto w-full max-w-xs">
                <polygon points="70,30 70,180 260,180" className="fill-fuchsia-50 stroke-fuchsia-600" strokeWidth="2.25" />
                <line x1="70" y1="110" x2="171.3" y2="110" strokeDasharray="5,4" className="stroke-violet-500" strokeWidth="1.75" />
                <path d="M70,168 L82,168 L82,180" fill="none" className="stroke-slate-600" strokeWidth="1.75" />
                <circle cx="70" cy="30" r="5" className="fill-fuchsia-600" />
                <circle cx="70" cy="180" r="5" className="fill-fuchsia-600" />
                <circle cx="260" cy="180" r="5" className="fill-fuchsia-600" />
                <circle cx="70" cy="110" r="4.5" className="fill-violet-500" />
                <circle cx="171.3" cy="110" r="4.5" className="fill-violet-500" />
                <text x="62" y="20" fontSize="15" className="fill-slate-700 font-bold">C</text>
                <text x="52" y="200" fontSize="15" className="fill-slate-700 font-bold">A</text>
                <text x="266" y="200" fontSize="15" className="fill-slate-700 font-bold">B</text>
                <text x="50" y="106" fontSize="14" className="fill-violet-600 font-bold">E</text>
                <text x="177" y="106" fontSize="14" className="fill-violet-600 font-bold">F</text>
              </svg>
            }
            solution={
              <div className="space-y-2.5">
                <Step>
                  On considère les parallèles <strong>(AB)</strong> et <strong>(EF)</strong>, et la sécante{" "}
                  <strong>(AC)</strong>.
                </Step>
                <Step>
                  On a : <Math tex="\widehat{CEF}" /> et <Math tex="\widehat{CAB}" /> sont deux angles
                  correspondants, donc <Math tex="\widehat{CEF} = \widehat{CAB}" />.
                </Step>
                <Step>
                  Or <Math tex="\widehat{CAB}" /> est un angle droit (ABC rectangle en A), donc{" "}
                  <Math tex="\widehat{CEF}" /> est aussi un angle droit.
                </Step>
                <Step>
                  <strong>D&apos;où : le triangle CEF est rectangle en E.</strong>
                </Step>
              </div>
            }
          />
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-2 text-xs font-bold text-fuchsia-500 uppercase">b) Propriété réciproque</p>
          <Statement tone="fuchsia">
            Si deux droites déterminent avec une sécante deux angles correspondants <strong>isométriques</strong>{" "}
            (égaux), alors elles sont <strong>parallèles</strong>.
          </Statement>

          <Application
            prompt={
              <>
                On considère la figure ci-contre telle que : <Math tex="\widehat{AEF} = 60°" /> et{" "}
                <Math tex="\widehat{EBC} = 60°" />.
              </>
            }
            question="Montrons que (EF) ∥ (BC)."
            diagram={
              <svg viewBox="0 0 300 220" className="mx-auto h-auto w-full max-w-xs">
                <line x1="150" y1="30" x2="50" y2="190" className="stroke-slate-500" strokeWidth="2" />
                <line x1="150" y1="30" x2="250" y2="190" className="stroke-slate-500" strokeWidth="2" />
                <line x1="50" y1="190" x2="250" y2="190" className="stroke-fuchsia-600" strokeWidth="2.25" />
                <line x1="95" y1="118" x2="205" y2="118" className="stroke-fuchsia-600" strokeWidth="2.25" />
                <circle cx="150" cy="30" r="5" className="fill-slate-600" />
                <circle cx="50" cy="190" r="5" className="fill-fuchsia-600" />
                <circle cx="250" cy="190" r="5" className="fill-fuchsia-600" />
                <circle cx="95" cy="118" r="5" className="fill-fuchsia-600" />
                <circle cx="205" cy="118" r="5" className="fill-fuchsia-600" />
                <text x="142" y="20" fontSize="15" className="fill-slate-700 font-bold">A</text>
                <text x="34" y="208" fontSize="15" className="fill-slate-700 font-bold">B</text>
                <text x="256" y="208" fontSize="15" className="fill-slate-700 font-bold">C</text>
                <text x="79" y="112" fontSize="15" className="fill-slate-700 font-bold">E</text>
                <text x="211" y="112" fontSize="15" className="fill-slate-700 font-bold">F</text>
                <text x="108" y="103" fontSize="12" className="fill-fuchsia-700 font-bold">60°</text>
                <text x="60" y="175" fontSize="12" className="fill-fuchsia-700 font-bold">60°</text>
              </svg>
            }
            solution={
              <div className="space-y-2.5">
                <Step>
                  On considère les droites <strong>(EF)</strong> et <strong>(BC)</strong>, et la sécante{" "}
                  <strong>(AB)</strong>.
                </Step>
                <Step>
                  On a : <Math tex="\widehat{AEF}" /> et <Math tex="\widehat{EBC}" /> sont deux angles
                  correspondants.
                </Step>
                <Step>
                  Or <Math tex="\widehat{AEF} = 60°" /> et <Math tex="\widehat{EBC} = 60°" />, donc{" "}
                  <Math tex="\widehat{AEF} = \widehat{EBC}" />.
                </Step>
                <Step>
                  <strong>D&apos;après la propriété réciproque des angles correspondants : (EF) ∥ (BC).</strong>
                </Step>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== FICHE MEMO ===================== */}
      <LessonSection
        id="memo"
        kicker="03 · Fiche mémo"
        title="Fiche mémo"
        tone="light"
        description="Les deux couples d'angles en un coup d'œil, pour réviser vite."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-lg font-bold text-teal-600">Z</span>
              <h3 className="font-display font-bold text-foreground">Alternes-internes</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <strong>Position :</strong> entre les deux droites, de part et d&apos;autre de la sécante.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Directe :</strong> droites ∥ ⟹ angles égaux.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Réciproque :</strong> angles égaux ⟹ droites ∥.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100 text-lg font-bold text-fuchsia-600">F</span>
              <h3 className="font-display font-bold text-foreground">Correspondants</h3>
            </div>
            <p className="text-sm text-foreground-muted">
              <strong>Position :</strong> même position relative aux deux points d&apos;intersection.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Directe :</strong> droites ∥ ⟹ angles égaux.
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              <strong>Réciproque :</strong> angles égaux ⟹ droites ∥.
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-teal-50 via-indigo-50 to-fuchsia-50 p-5 sm:col-span-2">
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">💡</span>
              <h3 className="font-display font-bold text-foreground">Méthode pour une démonstration</h3>
            </div>
            <ol className="list-inside list-decimal space-y-1 text-sm text-foreground-muted">
              <li>
                <strong>Pour prouver deux angles égaux :</strong> nommer les deux droites et la sécante, identifier
                le type d&apos;angles (alternes-internes ou correspondants), citer la <strong>propriété directe</strong>{" "}
                en précisant que les droites sont parallèles.
              </li>
              <li>
                <strong>Pour prouver deux droites parallèles :</strong> nommer les deux droites et la sécante,
                montrer que les deux angles (alternes-internes ou correspondants) sont égaux, puis citer la{" "}
                <strong>propriété réciproque</strong>.
              </li>
            </ol>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="6 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les angles alternes-internes et correspondants.">
          <ExerciseCard
            id="1"
            index={1}
            title="Réciproque"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  Soit la figure ci-dessous, où <strong>(AO)</strong> est une sécante commune à <strong>(d₁)</strong>{" "}
                  et <strong>(d₂)</strong> :
                </p>
                <Diagram>
                  <svg viewBox="0 0 320 220" className="mx-auto h-auto w-full max-w-xs">
                    <line x1="50" y1="50" x2="250" y2="50" className="stroke-teal-600" strokeWidth="2.25" />
                    <line x1="150" y1="50" x2="150" y2="180" className="stroke-slate-500" strokeWidth="2" />
                    <line x1="30" y1="180" x2="280" y2="180" className="stroke-teal-600" strokeWidth="2.25" />
                    <path d="M210,150 L202,145" fill="none" className="stroke-slate-400" strokeWidth="1.5" strokeDasharray="3,3" />
                    <line x1="150" y1="180" x2="210" y2="150" className="stroke-slate-400" strokeWidth="1.5" strokeDasharray="3,3" />
                    <path d="M136,50 L136,64 L150,64" fill="none" className="stroke-slate-600" strokeWidth="1.75" />
                    <circle cx="150" cy="50" r="5" className="fill-teal-600" />
                    <circle cx="150" cy="180" r="5" className="fill-teal-600" />
                    <circle cx="70" cy="50" r="4" className="fill-slate-400" />
                    <circle cx="270" cy="180" r="4" className="fill-slate-400" />
                    <text x="156" y="42" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="54" y="42" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="132" y="200" fontSize="15" className="fill-slate-700 font-bold">O</text>
                    <text x="274" y="176" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="255" y="46" fontSize="14" className="fill-teal-700 italic">(d₁)</text>
                    <text x="255" y="200" fontSize="14" className="fill-teal-700 italic">(d₂)</text>
                    <text x="163" y="140" fontSize="13" className="fill-slate-600 font-bold">60°</text>
                    <text x="188" y="172" fontSize="13" className="fill-slate-600 font-bold">30°</text>
                  </svg>
                </Diagram>
                <p className="mt-3 mb-3 text-xs text-foreground-muted">
                  (BA) ⊥ (AO) en A ; l&apos;angle AÔC est partagé en deux angles adjacents de 60° et 30°.
                </p>
                <p className="text-sm font-semibold text-foreground">Montrer que (d₁) ∥ (d₂).</p>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  On considère les droites <strong>(d₁)</strong> et <strong>(d₂)</strong>, et la sécante{" "}
                  <strong>(AO)</strong>.
                </Step>
                <Step>
                  <Math tex="\widehat{BAO}" /> et <Math tex="\widehat{AOC}" /> sont deux angles{" "}
                  <strong>alternes-internes</strong> (B et C de part et d&apos;autre de la sécante (AO)).
                </Step>
                <Step>
                  Or <Math tex="\widehat{BAO} = 90°" /> (angle droit donné), et{" "}
                  <Math tex="\widehat{AOC} = 60° + 30° = 90°" /> (somme des deux angles adjacents donnés).
                </Step>
                <Step>
                  Donc <Math tex="\widehat{BAO} = \widehat{AOC}" /> (= 90°).
                </Step>
                <Step>
                  <strong>
                    D&apos;après la propriété réciproque des angles alternes-internes : (d₁) ∥ (d₂).
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Directe"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  Les droites <strong>(AB)</strong> et <strong>(CD)</strong> sont parallèles. Le point{" "}
                  <strong>M</strong> appartient à la demi-droite [CD) hors du segment [CD] (voir figure).
                </p>
                <Diagram>
                  <svg viewBox="0 0 360 230" className="mx-auto h-auto w-full max-w-xs">
                    <line x1="50" y1="50" x2="280" y2="50" className="stroke-teal-600" strokeWidth="2.25" />
                    <line x1="90" y1="190" x2="340" y2="190" className="stroke-teal-600" strokeWidth="2.25" />
                    <line x1="70" y1="50" x2="150" y2="190" className="stroke-slate-500" strokeWidth="2" />
                    <circle cx="70" cy="50" r="5" className="fill-teal-600" />
                    <circle cx="260" cy="50" r="5" className="fill-teal-600" />
                    <circle cx="150" cy="190" r="5" className="fill-teal-600" />
                    <circle cx="320" cy="190" r="5" className="fill-teal-600" />
                    <circle cx="110" cy="190" r="5" className="fill-fuchsia-500" />
                    <text x="56" y="42" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="266" y="42" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="152" y="212" fontSize="15" className="fill-slate-700 font-bold">D</text>
                    <text x="326" y="212" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="98" y="212" fontSize="15" className="fill-fuchsia-600 font-bold">M</text>
                  </svg>
                </Diagram>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Montrer que <Math tex="\widehat{BAD} = \widehat{ADM}" />.
                </p>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  On considère les parallèles <strong>(AB)</strong> et <strong>(CD)</strong>, et la sécante{" "}
                  <strong>(AD)</strong>.
                </Step>
                <Step>
                  On a : <Math tex="\widehat{BAD}" /> et <Math tex="\widehat{ADM}" /> sont deux angles{" "}
                  <strong>alternes-internes</strong> (B et M de part et d&apos;autre de la sécante (AD), entre les
                  deux parallèles).
                </Step>
                <Step>Or (AB) ∥ (CD) (donné).</Step>
                <Step>
                  <strong>
                    D&apos;après la propriété directe des angles alternes-internes :{" "}
                    <Math tex="\widehat{BAD} = \widehat{ADM}" />.
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Directe"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>ABC</strong> est un triangle équilatéral et <strong>(AF)</strong> est une droite passant
                  par A et parallèle à <strong>(BC)</strong>. E est un point de la demi-droite [BA) hors du segment
                  [AB].
                </p>
                <Diagram>
                  <svg viewBox="0 0 320 260" className="mx-auto h-auto w-full max-w-xs">
                    <polygon points="175,83 90,230 260,230" className="fill-fuchsia-50 stroke-fuchsia-600" strokeWidth="2.25" />
                    <line x1="110" y1="83" x2="255" y2="83" className="stroke-teal-600" strokeWidth="2.25" />
                    <line x1="175" y1="83" x2="205" y2="31" className="stroke-slate-500" strokeWidth="2" />
                    <g className="stroke-slate-600" strokeWidth="1.75">
                      <line x1="126" y1="153" x2="139" y2="160" />
                      <line x1="175" y1="225" x2="175" y2="235" />
                      <line x1="211" y1="160" x2="224" y2="153" />
                    </g>
                    <circle cx="175" cy="83" r="5" className="fill-fuchsia-600" />
                    <circle cx="90" cy="230" r="5" className="fill-fuchsia-600" />
                    <circle cx="260" cy="230" r="5" className="fill-fuchsia-600" />
                    <circle cx="255" cy="83" r="4.5" className="fill-teal-600" />
                    <circle cx="205" cy="31" r="4.5" className="fill-violet-500" />
                    <text x="167" y="73" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="72" y="250" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="266" y="250" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="261" y="79" fontSize="14" className="fill-teal-700 font-bold">F</text>
                    <text x="210" y="25" fontSize="14" className="fill-violet-600 font-bold">E</text>
                  </svg>
                </Diagram>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  Calculer la mesure de l&apos;angle <Math tex="\widehat{EAF}" />.
                </p>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  On considère les parallèles <strong>(AF)</strong> et <strong>(BC)</strong>, et la sécante{" "}
                  <strong>(BE)</strong> [prolongement de (BA)].
                </Step>
                <Step>
                  On a : <Math tex="\widehat{EAF}" /> et <Math tex="\widehat{ABC}" /> sont deux angles{" "}
                  <strong>correspondants</strong> (E prolonge la demi-droite [BA) au-delà de A, F et C du même côté).
                </Step>
                <Step>
                  Or (AF) ∥ (BC), donc, d&apos;après la propriété directe des angles correspondants :{" "}
                  <Math tex="\widehat{EAF} = \widehat{ABC}" />.
                </Step>
                <Step>
                  Or ABC est équilatéral, donc <Math tex="\widehat{ABC} = 60°" />.
                </Step>
                <Step>
                  <strong>
                    D&apos;où : <Math tex="\widehat{EAF} = 60°" />.
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Réciproque"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>ABC</strong> est un triangle isocèle en A tel que <Math tex="\widehat{BAC} = 80°" />. [AE)
                  est une demi-droite telle que les angles <strong>CÂB</strong> et <strong>BÂE</strong> soient
                  adjacents, avec <Math tex="\widehat{BAE} = 50°" />.
                </p>
                <Diagram>
                  <svg viewBox="0 0 320 220" className="mx-auto h-auto w-full max-w-xs">
                    <polygon points="175,40 66,170 284,170" className="fill-teal-50 stroke-teal-600" strokeWidth="2.25" />
                    <line x1="175" y1="40" x2="45" y2="40" className="stroke-slate-500" strokeWidth="2" />
                    <circle cx="175" cy="40" r="5" className="fill-teal-600" />
                    <circle cx="66" cy="170" r="5" className="fill-teal-600" />
                    <circle cx="284" cy="170" r="5" className="fill-teal-600" />
                    <circle cx="45" cy="40" r="4.5" className="fill-violet-500" />
                    <text x="180" y="30" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="50" y="192" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="290" y="192" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="30" y="34" fontSize="15" className="fill-violet-600 font-bold">E</text>
                    <text x="130" y="60" fontSize="12" className="fill-violet-700 font-bold">50°</text>
                    <text x="172" y="85" fontSize="12" className="fill-teal-700 font-bold">80°</text>
                  </svg>
                </Diagram>
                <p className="mt-3 text-sm font-semibold text-foreground">Montrer que (AE) ∥ (BC).</p>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  ABC est isocèle en A avec <Math tex="\widehat{BAC} = 80°" />, donc ses angles à la base sont
                  égaux : <Math tex="\widehat{ABC} = \widehat{ACB} = (180° - 80°) \div 2 = 50°" />.
                </Step>
                <Step>
                  On considère les droites <strong>(AE)</strong> et <strong>(BC)</strong>, et la sécante{" "}
                  <strong>(AB)</strong>.
                </Step>
                <Step>
                  On a : <Math tex="\widehat{EAB}" /> et <Math tex="\widehat{ABC}" /> sont deux angles{" "}
                  <strong>alternes-internes</strong> (E et C de part et d&apos;autre de la sécante (AB)).
                </Step>
                <Step>
                  Or <Math tex="\widehat{EAB} = 50°" /> (donné) et <Math tex="\widehat{ABC} = 50°" /> (calculé),
                  donc <Math tex="\widehat{EAB} = \widehat{ABC}" />.
                </Step>
                <Step>
                  <strong>
                    D&apos;après la propriété réciproque des angles alternes-internes : (AE) ∥ (BC).
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Grand classique"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  <strong>ABC</strong> est un triangle et <strong>(D)</strong> est une droite passant par A et
                  parallèle à <strong>(BC)</strong>, avec F et E deux points de (D) de part et d&apos;autre de A.
                </p>
                <Diagram>
                  <svg viewBox="0 0 340 240" className="mx-auto h-auto w-full max-w-xs">
                    <line x1="40" y1="50" x2="310" y2="50" className="stroke-indigo-600" strokeWidth="2.25" />
                    <polygon points="175,50 80,210 270,210" className="fill-indigo-50 stroke-slate-600" strokeWidth="2.25" />
                    <circle cx="175" cy="50" r="5" className="fill-indigo-600" />
                    <circle cx="80" cy="210" r="5" className="fill-slate-600" />
                    <circle cx="270" cy="210" r="5" className="fill-slate-600" />
                    <circle cx="60" cy="50" r="4.5" className="fill-indigo-500" />
                    <circle cx="290" cy="50" r="4.5" className="fill-indigo-500" />
                    <text x="180" y="40" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="64" y="230" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="276" y="230" fontSize="15" className="fill-slate-700 font-bold">C</text>
                    <text x="44" y="42" fontSize="15" className="fill-indigo-700 font-bold">F</text>
                    <text x="296" y="42" fontSize="15" className="fill-indigo-700 font-bold">E</text>
                    <text x="330" y="46" fontSize="13" className="fill-indigo-700 italic">(D)</text>
                  </svg>
                </Diagram>
                <ol className="mt-3 list-inside list-decimal space-y-1.5 text-sm text-foreground">
                  <li>
                    Montrer que <Math tex="\widehat{ACB} = \widehat{EAC}" />.
                  </li>
                  <li>
                    Montrer que <Math tex="\widehat{ABC} = \widehat{FAB}" />.
                  </li>
                  <li>
                    Déduire que <Math tex="\widehat{ABC} + \widehat{ACB} + \widehat{BAC} = 180°" />.
                  </li>
                  <li>Cela vous rappelle quelle propriété ?</li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  <strong>1)</strong> On considère les parallèles (D) [=(AE)] et (BC), et la sécante (AC).{" "}
                  <Math tex="\widehat{ACB}" /> et <Math tex="\widehat{EAC}" /> sont des angles alternes-internes (B
                  et E de part et d&apos;autre de (AC)). Or (D) ∥ (BC), donc{" "}
                  <Math tex="\widehat{ACB} = \widehat{EAC}" />.
                </Step>
                <Step>
                  <strong>2)</strong> On considère les parallèles (D) [=(AF)] et (BC), et la sécante (AB).{" "}
                  <Math tex="\widehat{ABC}" /> et <Math tex="\widehat{FAB}" /> sont des angles alternes-internes (C
                  et F de part et d&apos;autre de (AB)). Or (D) ∥ (BC), donc{" "}
                  <Math tex="\widehat{ABC} = \widehat{FAB}" />.
                </Step>
                <Step>
                  <strong>3)</strong> F, A, E sont alignés sur (D), donc{" "}
                  <Math tex="\widehat{FAB} + \widehat{BAC} + \widehat{EAC} = 180°" /> (angles adjacents formant un
                  angle plat). Or, d&apos;après 2) <Math tex="\widehat{FAB} = \widehat{ABC}" />, et d&apos;après 1){" "}
                  <Math tex="\widehat{EAC} = \widehat{ACB}" />. En remplaçant :{" "}
                  <Math tex="\widehat{ABC} + \widehat{BAC} + \widehat{ACB} = 180°" />.
                </Step>
                <Step>
                  <strong>
                    4) Cela rappelle la propriété : la somme des mesures des angles d&apos;un triangle est égale à
                    180°.
                  </strong>
                </Step>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Directe"
            items={
              <>
                <p className="mb-2 text-sm text-foreground">
                  Soit la figure ci-dessous, avec les informations codées : <strong>(AB) ∥ (ED)</strong>.
                </p>
                <Diagram>
                  <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-xs">
                    <line x1="150" y1="40" x2="280" y2="40" className="stroke-teal-600" strokeWidth="2.25" />
                    <line x1="150" y1="40" x2="150" y2="150" className="stroke-slate-500" strokeWidth="2" />
                    <line x1="40" y1="150" x2="150" y2="150" className="stroke-teal-600" strokeWidth="2.25" />
                    <line x1="280" y1="40" x2="40" y2="150" className="stroke-slate-500" strokeWidth="2" />
                    <path d="M164,40 L164,54 L150,54" fill="none" className="stroke-slate-600" strokeWidth="1.75" />
                    <path d="M150,136 L136,136 L136,150" fill="none" className="stroke-slate-600" strokeWidth="1.75" />
                    <circle cx="150" cy="40" r="5" className="fill-teal-600" />
                    <circle cx="280" cy="40" r="5" className="fill-teal-600" />
                    <circle cx="150" cy="150" r="5" className="fill-teal-600" />
                    <circle cx="40" cy="150" r="5" className="fill-teal-600" />
                    <circle cx="150" cy="100" r="5" className="fill-fuchsia-500" />
                    <text x="132" y="32" fontSize="15" className="fill-slate-700 font-bold">A</text>
                    <text x="286" y="36" fontSize="15" className="fill-slate-700 font-bold">B</text>
                    <text x="132" y="170" fontSize="15" className="fill-slate-700 font-bold">E</text>
                    <text x="24" y="170" fontSize="15" className="fill-slate-700 font-bold">D</text>
                    <text x="158" y="98" fontSize="15" className="fill-fuchsia-600 font-bold">C</text>
                    <text x="248" y="60" fontSize="13" className="fill-teal-700 font-bold">40°</text>
                  </svg>
                </Diagram>
                <p className="mt-3 mb-3 text-xs text-foreground-muted">
                  C est le point d&apos;intersection de (AE) et (BD) ; <Math tex="\widehat{ABD} = 40°" /> ; angle
                  droit en A et en E.
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Déterminer la mesure de l&apos;angle <Math tex="\widehat{ECD}" />.
                </p>
              </>
            }
            correction={
              <div className="space-y-2.5">
                <Step>
                  On considère les parallèles <strong>(AB)</strong> et <strong>(ED)</strong>, et la sécante{" "}
                  <strong>(BD)</strong> [qui passe par C].
                </Step>
                <Step>
                  On a : <Math tex="\widehat{ABD}" /> (soit <Math tex="\widehat{ABC}" />) et{" "}
                  <Math tex="\widehat{EDB}" /> (soit <Math tex="\widehat{EDC}" />) sont deux angles{" "}
                  <strong>alternes-internes</strong> (A et E de part et d&apos;autre de la sécante (BD)).
                </Step>
                <Step>
                  Or (AB) ∥ (ED), donc <Math tex="\widehat{EDC} = \widehat{ABD} = 40°" />.
                </Step>
                <Step>
                  Dans le triangle ECD, l&apos;angle en E est droit : <Math tex="\widehat{DEC} = 90°" />. La somme
                  des angles du triangle vaut 180°, donc <Math tex="\widehat{ECD} = 180° - 90° - 40°" />.
                </Step>
                <Step>
                  <strong>
                    D&apos;où : <Math tex="\widehat{ECD} = 50°" />.
                  </strong>
                </Step>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
