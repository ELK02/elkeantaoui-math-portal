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
  title: "La Symétrie Axiale · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur la symétrie axiale (médiatrice, symétrique d'un point, symétrique des figures usuelles) et 8 exercices corrigés en détail, 2ᵉ année collège, semestre 1.",
  kicker: "2ᵉ Année Collège · Chapitre 5",
  heroTitle: "La symétrie axiale",
  heroSubtitle:
    "Médiatrice, symétrique d'un point, puis ce que la symétrie conserve sur les figures usuelles. Ensuite, 8 exercices corrigés en détail.",
  footerNote: "La symétrie axiale · Mathématiques, 2ᵉ année collège, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "figures", label: "Figures usuelles" },
    { id: "serie", label: "Exercice N°5" },
  ],
};

/** Two-column layout: statement / correction text on the left, a diagram on the right. */
function Figure({ text, svg }: { text: ReactNode; svg: ReactNode }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-5">
      <div className="space-y-2 text-sm text-foreground sm:col-span-3">{text}</div>
      <div className="flex justify-center sm:col-span-2">{svg}</div>
    </div>
  );
}

/** A numbered definition card used in the "Cours" section (I, II…). */
function CourseCard({
  numeral,
  title,
  visual,
  children,
}: {
  numeral: ReactNode;
  title: string;
  visual: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
              {numeral}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
          </div>
          <div className="space-y-3">{children}</div>
        </div>
        <div className="flex justify-center lg:col-span-2">{visual}</div>
      </div>
    </article>
  );
}

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <p className="text-foreground">{children}</p>
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
          { value: "8", label: "exercices" },
          { value: "6", label: "figures usuelles" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#serie"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-center gap-8 font-serif text-white italic">
            <span className="text-6xl font-bold sm:text-8xl">M</span>
            <span className="h-32 w-px bg-orange-400/70 sm:h-48" />
            <span className="text-6xl font-bold text-orange-400 sm:text-8xl">M&apos;</span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Les définitions"
        title="Ce que vous allez apprendre"
        tone="light"
        description="La médiatrice d'un segment, la construction du symétrique d'un point, puis les propriétés de la symétrie axiale."
      >
        <CourseCard
          numeral="I"
          title="Médiatrice d'un segment"
          visual={
            <svg viewBox="0 0 320 200" className="h-auto w-full max-w-[320px]">
              <line x1="160" y1="15" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="168" y="28" fill="#e11d48" fontSize="14" fontWeight="600">(Δ)</text>
              <line x1="60" y1="150" x2="260" y2="150" stroke="#4f46e5" strokeWidth="2.5" />
              <line x1="160" y1="150" x2="160" y2="60" stroke="#4f46e5" strokeWidth="2.5" />
              <line x1="60" y1="150" x2="160" y2="60" stroke="#4f46e5" strokeWidth="2.5" />
              <line x1="260" y1="150" x2="160" y2="60" stroke="#4f46e5" strokeWidth="2.5" />
              <path d="M160,138 L172,138 L172,150" fill="none" stroke="#334155" strokeWidth="1.6" />
              <line x1="105" y1="145" x2="115" y2="155" stroke="#4f46e5" strokeWidth="2" />
              <line x1="205" y1="145" x2="215" y2="155" stroke="#4f46e5" strokeWidth="2" />
              <circle cx="60" cy="150" r="3.5" fill="#0f172a" />
              <circle cx="260" cy="150" r="3.5" fill="#0f172a" />
              <circle cx="160" cy="60" r="3.5" fill="#0f172a" />
              <text x="42" y="168" fontSize="15" fontWeight="700" fill="#0f172a">A</text>
              <text x="266" y="168" fontSize="15" fontWeight="700" fill="#0f172a">B</text>
              <text x="166" y="52" fontSize="15" fontWeight="700" fill="#0f172a">M</text>
            </svg>
          }
        >
          <DefBox label="Définition">
            La médiatrice d&apos;un segment est la droite <strong>perpendiculaire</strong> à ce segment en{" "}
            <strong>son milieu</strong>.
          </DefBox>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriété</p>
            <p>
              Soit [AB] un segment, (Δ) sa médiatrice et M un point. Si M ∈ (Δ) alors :{" "}
              <Math tex="\mathbf{MA = MB}" />.
            </p>
          </div>
        </CourseCard>

        <CourseCard
          numeral="II"
          title="Symétrique d'un point"
          visual={
            <svg viewBox="0 0 320 200" className="h-auto w-full max-w-[320px]">
              <line x1="160" y1="15" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="168" y="28" fill="#e11d48" fontSize="14" fontWeight="600">(Δ)</text>
              <line x1="230" y1="70" x2="90" y2="70" stroke="#64748b" strokeWidth="1.6" strokeDasharray="3 3" />
              <path d="M160,58 L172,58 L172,70" fill="none" stroke="#334155" strokeWidth="1.6" />
              <line x1="118" y1="65" x2="122" y2="75" stroke="#334155" strokeWidth="2" />
              <line x1="198" y1="65" x2="202" y2="75" stroke="#334155" strokeWidth="2" />
              <circle cx="230" cy="70" r="4" fill="#4f46e5" />
              <circle cx="90" cy="70" r="4" fill="#059669" />
              <circle cx="160" cy="155" r="3.5" fill="#0f172a" />
              <text x="238" y="66" fontSize="15" fontWeight="700" fill="#4f46e5">M</text>
              <text x="64" y="66" fontSize="15" fontWeight="700" fill="#059669">M&apos;</text>
              <text x="168" y="175" fontSize="14" fill="#0f172a">A ∈ (Δ) : A&apos; = A</text>
            </svg>
          }
        >
          <DefBox label="Définition">
            Soit (Δ) une droite et M un point du plan. Le symétrique de M par rapport à (Δ) est le point M&apos; tel
            que (Δ) est <strong>la médiatrice</strong> du segment [MM&apos;].
          </DefBox>
          <Callout variant="warning" title="Remarque">
            Si un point A ∈ (Δ), alors ce point est le symétrique de lui-même par rapport à (Δ).
          </Callout>
        </CourseCard>
      </LessonSection>

      {/* ===================== FIGURES USUELLES ===================== */}
      <LessonSection
        id="figures"
        kicker="02 · Ce que la symétrie conserve"
        title="Symétrique des figures usuelles"
        tone="muted"
        description="Dans tous les cas ci-dessous, (Δ) est une droite ; A', B', O'… sont les symétriques respectifs de A, B, O… par rapport à (Δ)."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-2 font-semibold text-foreground">1 · Symétrique d&apos;un segment</p>
            <p className="mb-3 text-sm text-foreground-muted">
              Le symétrique du segment [AB] est le segment [A&apos;B&apos;], avec <Math tex="A'B' = AB" /> : la
              symétrie <em>conserve les longueurs</em>.
            </p>
            <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-[320px]">
              <line x1="160" y1="10" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="166" y="24" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
              <line x1="210" y1="60" x2="250" y2="140" stroke="#4f46e5" strokeWidth="2.5" />
              <line x1="110" y1="60" x2="70" y2="140" stroke="#059669" strokeWidth="2.5" />
              <line x1="210" y1="60" x2="110" y2="60" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3" />
              <line x1="250" y1="140" x2="70" y2="140" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3" />
              <circle cx="210" cy="60" r="4" fill="#4f46e5" /><circle cx="250" cy="140" r="4" fill="#4f46e5" />
              <circle cx="110" cy="60" r="4" fill="#059669" /><circle cx="70" cy="140" r="4" fill="#059669" />
              <text x="216" y="56" fontSize="14" fontWeight="700" fill="#4f46e5">A</text>
              <text x="256" y="144" fontSize="14" fontWeight="700" fill="#4f46e5">B</text>
              <text x="86" y="56" fontSize="14" fontWeight="700" fill="#059669">A&apos;</text>
              <text x="44" y="144" fontSize="14" fontWeight="700" fill="#059669">B&apos;</text>
            </svg>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-2 font-semibold text-foreground">2 · Symétrique d&apos;une droite</p>
            <p className="mb-3 text-sm text-foreground-muted">
              Le symétrique de la droite (AB) par rapport à (Δ) est la droite (A&apos;B&apos;).
            </p>
            <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-[320px]">
              <defs>
                <marker id="arrIndigoSA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 Z" fill="#4f46e5" />
                </marker>
                <marker id="arrLeafSA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 Z" fill="#059669" />
                </marker>
              </defs>
              <line x1="160" y1="10" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="166" y="24" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
              <line x1="220" y1="55" x2="195" y2="150" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arrIndigoSA)" markerStart="url(#arrIndigoSA)" />
              <line x1="100" y1="55" x2="125" y2="150" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arrLeafSA)" markerStart="url(#arrLeafSA)" />
              <circle cx="220" cy="55" r="4" fill="#4f46e5" /><circle cx="195" cy="150" r="4" fill="#4f46e5" />
              <circle cx="100" cy="55" r="4" fill="#059669" /><circle cx="125" cy="150" r="4" fill="#059669" />
              <text x="226" y="52" fontSize="14" fontWeight="700" fill="#4f46e5">A</text>
              <text x="201" y="166" fontSize="14" fontWeight="700" fill="#4f46e5">B</text>
              <text x="76" y="52" fontSize="14" fontWeight="700" fill="#059669">A&apos;</text>
              <text x="84" y="166" fontSize="14" fontWeight="700" fill="#059669">B&apos;</text>
            </svg>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-2 font-semibold text-foreground">3 · Symétrique d&apos;une demi-droite</p>
            <p className="mb-3 text-sm text-foreground-muted">
              Le symétrique de la demi-droite [AB) par rapport à (Δ) est la demi-droite [A&apos;B&apos;).
            </p>
            <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-[320px]">
              <line x1="160" y1="10" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="166" y="24" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
              <line x1="220" y1="55" x2="195" y2="150" stroke="#4f46e5" strokeWidth="2.5" markerEnd="url(#arrIndigoSA)" />
              <line x1="100" y1="55" x2="125" y2="150" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arrLeafSA)" />
              <circle cx="220" cy="55" r="4" fill="#4f46e5" /><circle cx="195" cy="150" r="4" fill="#4f46e5" />
              <circle cx="100" cy="55" r="4" fill="#059669" /><circle cx="125" cy="150" r="4" fill="#059669" />
              <text x="226" y="52" fontSize="14" fontWeight="700" fill="#4f46e5">A</text>
              <text x="201" y="166" fontSize="14" fontWeight="700" fill="#4f46e5">B</text>
              <text x="76" y="52" fontSize="14" fontWeight="700" fill="#059669">A&apos;</text>
              <text x="84" y="166" fontSize="14" fontWeight="700" fill="#059669">B&apos;</text>
            </svg>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-2 font-semibold text-foreground">4 · Conservation de l&apos;alignement</p>
            <p className="mb-3 text-sm text-foreground-muted">
              Les symétriques de points alignés par rapport à une droite sont eux aussi alignés.
            </p>
            <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-[320px]">
              <line x1="160" y1="10" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="166" y="24" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
              <line x1="220" y1="40" x2="270" y2="160" stroke="#4f46e5" strokeWidth="2.5" />
              <line x1="100" y1="40" x2="50" y2="160" stroke="#059669" strokeWidth="2.5" />
              <circle cx="220" cy="40" r="4" fill="#4f46e5" /><circle cx="240" cy="88" r="4" fill="#4f46e5" /><circle cx="270" cy="160" r="4" fill="#4f46e5" />
              <circle cx="100" cy="40" r="4" fill="#059669" /><circle cx="80" cy="88" r="4" fill="#059669" /><circle cx="50" cy="160" r="4" fill="#059669" />
              <text x="226" y="37" fontSize="13" fontWeight="700" fill="#4f46e5">A</text>
              <text x="246" y="86" fontSize="13" fontWeight="700" fill="#4f46e5">B</text>
              <text x="276" y="158" fontSize="13" fontWeight="700" fill="#4f46e5">C</text>
              <text x="72" y="37" fontSize="13" fontWeight="700" fill="#059669">A&apos;</text>
              <text x="44" y="86" fontSize="13" fontWeight="700" fill="#059669">B&apos;</text>
              <text x="18" y="158" fontSize="13" fontWeight="700" fill="#059669">C&apos;</text>
            </svg>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-2 font-semibold text-foreground">5 · Symétrique d&apos;un angle</p>
            <p className="mb-3 text-sm text-foreground-muted">
              Le symétrique de l&apos;angle AOB est l&apos;angle A&apos;O&apos;B&apos;, avec{" "}
              <Math tex="AOB = A'O'B'" /> : la symétrie <em>conserve la mesure des angles</em>.
            </p>
            <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-[320px]">
              <line x1="160" y1="10" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="166" y="24" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
              <line x1="220" y1="140" x2="280" y2="60" stroke="#4f46e5" strokeWidth="2.5" />
              <line x1="220" y1="140" x2="290" y2="170" stroke="#4f46e5" strokeWidth="2.5" />
              <line x1="100" y1="140" x2="40" y2="60" stroke="#059669" strokeWidth="2.5" />
              <line x1="100" y1="140" x2="30" y2="170" stroke="#059669" strokeWidth="2.5" />
              <circle cx="220" cy="140" r="4" fill="#4f46e5" /><circle cx="100" cy="140" r="4" fill="#059669" />
              <text x="226" y="138" fontSize="14" fontWeight="700" fill="#4f46e5">O</text>
              <text x="286" y="58" fontSize="13" fontWeight="700" fill="#4f46e5">A</text>
              <text x="294" y="172" fontSize="13" fontWeight="700" fill="#4f46e5">B</text>
              <text x="74" y="138" fontSize="14" fontWeight="700" fill="#059669">O&apos;</text>
              <text x="14" y="58" fontSize="13" fontWeight="700" fill="#059669">A&apos;</text>
              <text x="0" y="172" fontSize="13" fontWeight="700" fill="#059669">B&apos;</text>
            </svg>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-2 font-semibold text-foreground">6 · Symétrique d&apos;un cercle</p>
            <p className="mb-3 text-sm text-foreground-muted">
              Le symétrique du cercle C(O ; r) est le cercle C&apos;(O&apos; ; r) : <strong>même rayon r</strong>.
            </p>
            <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-[320px]">
              <line x1="160" y1="10" x2="160" y2="190" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
              <text x="166" y="24" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
              <circle cx="230" cy="100" r="35" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
              <circle cx="90" cy="100" r="35" fill="none" stroke="#059669" strokeWidth="2.5" />
              <circle cx="230" cy="100" r="3" fill="#4f46e5" /><circle cx="90" cy="100" r="3" fill="#059669" />
              <line x1="230" y1="100" x2="265" y2="100" stroke="#4f46e5" strokeWidth="1.5" />
              <line x1="90" y1="100" x2="55" y2="100" stroke="#059669" strokeWidth="1.5" />
              <text x="236" y="96" fontSize="14" fontWeight="700" fill="#4f46e5">O</text>
              <text x="246" y="98" fontSize="12" fill="#4f46e5">r</text>
              <text x="70" y="96" fontSize="14" fontWeight="700" fill="#059669">O&apos;</text>
              <text x="66" y="98" fontSize="12" fill="#059669">r</text>
            </svg>
          </div>
        </div>
      </LessonSection>

      {/* ===================== SERIE N°5 ===================== */}
      <LessonSection
        id="serie"
        kicker="À toi de jouer"
        title="Exercice N°5 · La symétrie axiale"
        tone="light"
        description="8 exercices corrigés. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={8} celebrationTitle="Bravo, les 8 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la symétrie axiale.">
          <ExerciseCard
            id="1"
            index={1}
            title="Tracer l'axe de symétrie"
            items={
              <Figure
                text={<p>M et N sont deux points du plan. Trace la droite (Δ) telle que M soit le symétrique de N par rapport à (Δ).</p>}
                svg={
                  <svg viewBox="0 0 320 200" className="h-auto w-full max-w-[300px]">
                    <line x1="90" y1="80" x2="230" y2="180" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3" />
                    <circle cx="90" cy="80" r="4" fill="#0f172a" /><circle cx="230" cy="180" r="4" fill="#0f172a" />
                    <text x="70" y="72" fontSize="14" fontWeight="700" fill="#0f172a">M</text>
                    <text x="238" y="184" fontSize="14" fontWeight="700" fill="#0f172a">N</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>« M est le symétrique de N par rapport à (Δ) » signifie, par définition, que <strong>(Δ) est la médiatrice du segment [MN]</strong>.</p>
                    <p className="font-semibold">Construction :</p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>On trace le segment [MN] et on place son milieu I.</li>
                      <li>On trace la droite perpendiculaire à (MN) passant par I : c&apos;est la droite (Δ) cherchée.</li>
                    </ul>
                  </>
                }
                svg={
                  <svg viewBox="0 0 320 260" className="h-auto w-full max-w-[300px]">
                    <line x1="90" y1="80" x2="230" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <line x1="96" y1="220" x2="224" y2="40" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="6 4" />
                    <text x="200" y="55" fill="#e11d48" fontSize="14" fontWeight="600">(Δ)</text>
                    <circle cx="90" cy="80" r="4" fill="#0f172a" /><circle cx="230" cy="180" r="4" fill="#0f172a" />
                    <circle cx="160" cy="130" r="3.5" fill="#334155" />
                    <path d="M148,138 L158,146 L166,136" fill="none" stroke="#334155" strokeWidth="1.6" />
                    <text x="70" y="72" fontSize="14" fontWeight="700" fill="#0f172a">M</text>
                    <text x="238" y="184" fontSize="14" fontWeight="700" fill="#0f172a">N</text>
                    <text x="168" y="122" fontSize="12" fill="#334155">I</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Symétrique d'un sommet de triangle"
            items={
              <Figure
                text={
                  <>
                    <p>ABC est un triangle.</p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Construis le point A&apos; symétrique du point A par rapport à la droite (BC).</li>
                      <li>Quel est le symétrique de la droite (AB) par rapport à la droite (BC) ? Justifier.</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 200" className="h-auto w-full max-w-[300px]">
                    <line x1="30" y1="150" x2="270" y2="150" stroke="#0f172a" strokeWidth="2" />
                    <line x1="30" y1="150" x2="150" y2="50" stroke="#0f172a" strokeWidth="2" />
                    <line x1="270" y1="150" x2="150" y2="50" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="30" cy="150" r="4" fill="#0f172a" /><circle cx="270" cy="150" r="4" fill="#0f172a" /><circle cx="150" cy="50" r="4" fill="#0f172a" />
                    <text x="12" y="168" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="276" y="168" fontSize="14" fontWeight="700" fill="#0f172a">C</text>
                    <text x="156" y="46" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p><strong>1)</strong> On trace la perpendiculaire à (BC) passant par A ; elle coupe (BC) en un point H. On place A&apos; sur cette perpendiculaire, de l&apos;autre côté de (BC), tel que HA&apos; = HA.</p>
                    <p><strong>2)</strong> Le point B appartient à la droite (BC), donc B est son propre symétrique : B&apos; = B.</p>
                    <p>Le symétrique de la droite (AB) par rapport à (BC) est donc la droite passant par les symétriques de A et de B, c&apos;est-à-dire la droite <strong className="text-green-700">(A&apos;B)</strong>.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 270" className="h-auto w-full max-w-[300px]">
                    <line x1="30" y1="150" x2="270" y2="150" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="50" x2="150" y2="250" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3" />
                    <line x1="30" y1="150" x2="150" y2="50" stroke="#4f46e5" strokeWidth="2.5" />
                    <line x1="270" y1="150" x2="150" y2="50" stroke="#0f172a" strokeWidth="2" />
                    <line x1="30" y1="150" x2="150" y2="250" stroke="#059669" strokeWidth="2.5" />
                    <path d="M150,138 L162,138 L162,150" fill="none" stroke="#334155" strokeWidth="1.6" />
                    <circle cx="30" cy="150" r="4" fill="#0f172a" /><circle cx="270" cy="150" r="4" fill="#0f172a" />
                    <circle cx="150" cy="50" r="4" fill="#4f46e5" /><circle cx="150" cy="150" r="3" fill="#334155" /><circle cx="150" cy="250" r="4" fill="#059669" />
                    <text x="12" y="168" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="276" y="168" fontSize="14" fontWeight="700" fill="#0f172a">C</text>
                    <text x="156" y="46" fontSize="14" fontWeight="700" fill="#4f46e5">A</text>
                    <text x="158" y="145" fontSize="12" fill="#334155">H</text>
                    <text x="156" y="264" fontSize="14" fontWeight="700" fill="#059669">A&apos;</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Deux droites parallèles"
            items={
              <Figure
                text={
                  <>
                    <p>(D) et (Δ) sont deux droites parallèles. A est un point n&apos;appartenant ni à (Δ) ni à (D).</p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Construis le point M symétrique de A par rapport à (Δ).</li>
                      <li>Construis le point N symétrique de A par rapport à (D).</li>
                      <li>Montre que les points A, M et N sont alignés.</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 250" className="h-auto w-full max-w-[300px]">
                    <line x1="90" y1="20" x2="90" y2="230" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="210" y1="20" x2="210" y2="230" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <circle cx="150" cy="120" r="4" fill="#0f172a" />
                    <text x="78" y="14" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
                    <text x="198" y="14" fill="#e11d48" fontSize="13" fontWeight="600">(D)</text>
                    <text x="130" y="112" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>Comme (Δ) est la médiatrice de [AM], on a <strong>(AM) ⊥ (Δ)</strong>. Comme (D) est la médiatrice de [AN], on a <strong>(AN) ⊥ (D)</strong>.</p>
                    <p>Or (D) ∥ (Δ). Toute droite perpendiculaire à (Δ) est donc aussi perpendiculaire à (D). Il n&apos;existe qu&apos;une seule droite passant par A et perpendiculaire à (Δ), donc (AM) et (AN) sont <strong>la même droite</strong>.</p>
                    <p className="font-semibold text-green-700">Conclusion : les points A, M et N sont alignés.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 250" className="h-auto w-full max-w-[300px]">
                    <line x1="90" y1="20" x2="90" y2="230" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="210" y1="20" x2="210" y2="230" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="30" y1="120" x2="270" y2="120" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="150" cy="120" r="4" fill="#0f172a" /><circle cx="30" cy="120" r="4" fill="#059669" /><circle cx="270" cy="120" r="4" fill="#059669" />
                    <text x="78" y="14" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
                    <text x="198" y="14" fill="#e11d48" fontSize="13" fontWeight="600">(D)</text>
                    <text x="130" y="112" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="10" y="112" fontSize="14" fontWeight="700" fill="#059669">M</text>
                    <text x="278" y="112" fontSize="14" fontWeight="700" fill="#059669">N</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Symétrique d'un angle"
            items={
              <Figure
                text={
                  <>
                    <p>
                      ABC est un triangle tel que : <Math tex="AB = 6\text{ cm}" />, <Math tex="BAC = 100^{\circ}" /> et{" "}
                      <Math tex="ABC = 30^{\circ}" />. Soit M le milieu de [BC]. E est le symétrique de B par rapport à la
                      droite (AM) et F le symétrique de C par rapport à la droite (AM).
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Fais un schéma.</li>
                      <li>Quel est le symétrique de l&apos;angle BAC par rapport à la droite (AM) ? Justifier.</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 260" className="h-auto w-full max-w-[300px]">
                    <line x1="150" y1="50" x2="140" y2="205" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="150" y1="50" x2="50" y2="220" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="50" x2="230" y2="190" stroke="#0f172a" strokeWidth="2" />
                    <line x1="50" y1="220" x2="230" y2="190" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="150" cy="50" r="4" fill="#0f172a" /><circle cx="50" cy="220" r="4" fill="#0f172a" /><circle cx="230" cy="190" r="4" fill="#0f172a" /><circle cx="140" cy="205" r="3.5" fill="#334155" />
                    <text x="156" y="46" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="30" y="234" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="238" y="188" fontSize="14" fontWeight="700" fill="#0f172a">C</text>
                    <text x="146" y="222" fontSize="12" fill="#334155">M</text>
                    <text x="164" y="130" fill="#e11d48" fontSize="12" fontWeight="600">(Δ)</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>Le point A appartient à la droite (AM) : A est donc son propre symétrique.</p>
                    <p>
                      Le symétrique de B est E, le symétrique de C est F. Le symétrique de l&apos;angle BAC par rapport à
                      (AM) est donc l&apos;angle <strong className="text-green-700">EAF</strong>.
                    </p>
                    <p>Or la symétrie axiale conserve la mesure des angles, donc :</p>
                    <p className="text-center font-semibold text-green-700">
                      <Math tex="EAF = BAC = \mathbf{100^{\circ}}" />
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 320 260" className="h-auto w-full max-w-[300px]">
                    <line x1="150" y1="50" x2="140" y2="205" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="150" y1="50" x2="50" y2="220" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="150" y1="50" x2="230" y2="190" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="150" y1="50" x2="227" y2="231" stroke="#059669" strokeWidth="2" />
                    <line x1="150" y1="50" x2="53" y2="179" stroke="#059669" strokeWidth="2" />
                    <circle cx="150" cy="50" r="4" fill="#0f172a" />
                    <circle cx="50" cy="220" r="4" fill="#4f46e5" /><circle cx="230" cy="190" r="4" fill="#4f46e5" />
                    <circle cx="227" cy="231" r="4" fill="#059669" /><circle cx="53" cy="179" r="4" fill="#059669" />
                    <text x="156" y="46" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="30" y="234" fontSize="13" fontWeight="700" fill="#4f46e5">B</text>
                    <text x="238" y="188" fontSize="13" fontWeight="700" fill="#4f46e5">C</text>
                    <text x="233" y="245" fontSize="13" fontWeight="700" fill="#059669">F</text>
                    <text x="20" y="182" fontSize="13" fontWeight="700" fill="#059669">E</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Triangle rectangle et symétrie"
            items={
              <Figure
                text={
                  <>
                    <p>ABC est un triangle rectangle en A. B&apos; est le symétrique de B par rapport au point A.</p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Fais une figure.</li>
                      <li>Montre que B&apos; est le symétrique de B par rapport à la droite (AC).</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 200" className="h-auto w-full max-w-[300px]">
                    <line x1="150" y1="180" x2="150" y2="60" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="180" x2="270" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="60" x2="270" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <path d="M150,168 L162,168 L162,180" fill="none" stroke="#334155" strokeWidth="1.6" />
                    <circle cx="150" cy="180" r="4" fill="#0f172a" /><circle cx="150" cy="60" r="4" fill="#0f172a" /><circle cx="270" cy="180" r="4" fill="#0f172a" />
                    <text x="130" y="196" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="156" y="56" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="276" y="184" fontSize="14" fontWeight="700" fill="#0f172a">C</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      B&apos; symétrique de B par rapport au point A signifie que <strong>A est le milieu de [BB&apos;]</strong>.
                      Donc B, A, B&apos; sont alignés et <Math tex="AB = AB'" />.
                    </p>
                    <p>
                      Le triangle ABC est rectangle en A, donc <Math tex="(AC) \perp (AB)" />, c&apos;est-à-dire{" "}
                      <Math tex="(AC) \perp (BB')" /> puisque B&apos; appartient à la droite (AB).
                    </p>
                    <p>
                      Ainsi (AC) passe par le milieu A de [BB&apos;] et est perpendiculaire à [BB&apos;] : (AC) est donc la{" "}
                      <strong>médiatrice</strong> de [BB&apos;].
                    </p>
                    <p className="font-semibold text-green-700">Conclusion : B&apos; est le symétrique de B par rapport à la droite (AC).</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 340" className="h-auto w-full max-w-[300px]">
                    <line x1="150" y1="300" x2="150" y2="60" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="180" x2="270" y2="180" stroke="#e11d48" strokeWidth="2.5" />
                    <line x1="150" y1="60" x2="270" y2="180" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="150" y1="300" x2="270" y2="180" stroke="#059669" strokeWidth="2" />
                    <path d="M150,168 L162,168 L162,180" fill="none" stroke="#334155" strokeWidth="1.6" />
                    <circle cx="150" cy="180" r="4" fill="#0f172a" /><circle cx="150" cy="60" r="4" fill="#4f46e5" /><circle cx="270" cy="180" r="4" fill="#0f172a" /><circle cx="150" cy="300" r="4" fill="#059669" />
                    <text x="130" y="196" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="156" y="56" fontSize="14" fontWeight="700" fill="#4f46e5">B</text>
                    <text x="276" y="176" fontSize="14" fontWeight="700" fill="#e11d48">C</text>
                    <text x="156" y="304" fontSize="14" fontWeight="700" fill="#059669">B&apos;</text>
                    <text x="180" y="160" fill="#e11d48" fontSize="12" fontWeight="600">(AC)</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Alignement à partir d'une figure"
            items={
              <Figure
                text={
                  <>
                    <p>Soit la figure ci-contre, où A, E et B sont alignés et où E appartient à (Δ).</p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Construis les points A&apos; et B&apos; symétriques de A et B par rapport à (Δ).</li>
                      <li>Montre que les points A&apos;, E et B&apos; sont alignés.</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 320 220" className="h-auto w-full max-w-[300px]">
                    <line x1="200" y1="15" x2="200" y2="200" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="120" y1="60" x2="260" y2="150" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="120" cy="60" r="4" fill="#0f172a" /><circle cx="260" cy="150" r="4" fill="#0f172a" /><circle cx="200" cy="111" r="3.5" fill="#334155" />
                    <text x="100" y="52" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="266" y="154" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="206" y="104" fontSize="14" fontWeight="700" fill="#334155">E</text>
                    <text x="206" y="30" fill="#e11d48" fontSize="13" fontWeight="600">(Δ)</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p><strong>1)</strong> On construit A&apos; et B&apos; en traçant les perpendiculaires à (Δ) issues de A et de B, et en reportant des distances égales de l&apos;autre côté de (Δ).</p>
                    <p><strong>2)</strong> Le point E appartient à (Δ), donc E est son propre symétrique : E&apos; = E.</p>
                    <p>Or A, E, B sont alignés. Comme la symétrie axiale <strong>conserve l&apos;alignement</strong>, leurs symétriques A&apos;, E&apos; = E et B&apos; sont eux aussi alignés.</p>
                    <p className="font-semibold text-green-700">Conclusion : les points A&apos;, E et B&apos; sont alignés.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 320 220" className="h-auto w-full max-w-[300px]">
                    <line x1="200" y1="15" x2="200" y2="200" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="120" y1="60" x2="260" y2="150" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="280" y1="60" x2="140" y2="150" stroke="#059669" strokeWidth="2" />
                    <line x1="120" y1="60" x2="280" y2="60" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
                    <line x1="260" y1="150" x2="140" y2="150" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="120" cy="60" r="4" fill="#4f46e5" /><circle cx="260" cy="150" r="4" fill="#4f46e5" />
                    <circle cx="280" cy="60" r="4" fill="#059669" /><circle cx="140" cy="150" r="4" fill="#059669" />
                    <circle cx="200" cy="111" r="3.5" fill="#334155" />
                    <text x="100" y="52" fontSize="14" fontWeight="700" fill="#4f46e5">A</text>
                    <text x="266" y="154" fontSize="14" fontWeight="700" fill="#4f46e5">B</text>
                    <text x="286" y="56" fontSize="14" fontWeight="700" fill="#059669">A&apos;</text>
                    <text x="112" y="158" fontSize="14" fontWeight="700" fill="#059669">B&apos;</text>
                    <text x="206" y="104" fontSize="14" fontWeight="700" fill="#334155">E</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Point sur la bissectrice"
            items={
              <Figure
                text={
                  <>
                    <p>ABC est un triangle. I est un point de la bissectrice de l&apos;angle BAC, distinct de A.</p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Construis le point E symétrique de I par rapport à (AB).</li>
                      <li>Construis le point F symétrique de I par rapport à (AC).</li>
                      <li>Calcule l&apos;angle EAF en fonction de l&apos;angle BAC. Dans quel cas A, E et F sont-ils alignés ?</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 250" className="h-auto w-full max-w-[300px]">
                    <line x1="150" y1="220" x2="150" y2="100" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="150" y1="220" x2="58" y2="89" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="220" x2="230" y2="105" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="150" cy="220" r="4" fill="#0f172a" /><circle cx="58" cy="89" r="4" fill="#0f172a" /><circle cx="230" cy="105" r="4" fill="#0f172a" /><circle cx="150" cy="130" r="3.5" fill="#334155" />
                    <text x="156" y="234" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="38" y="86" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="236" y="102" fontSize="14" fontWeight="700" fill="#0f172a">C</text>
                    <text x="156" y="126" fontSize="13" fontWeight="700" fill="#334155">I</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      Comme I appartient à la bissectrice de l&apos;angle BAC, on a :{" "}
                      <Math tex="BAI = IAC = \tfrac{1}{2}BAC" />.
                    </p>
                    <p>
                      A appartient à (AB), donc A est son propre symétrique. La symétrie par rapport à (AB) conserve
                      les longueurs et les angles, donc <Math tex="AE = AI" /> et BAE = BAI (E est de l&apos;autre côté
                      de (AB) par rapport à I).
                    </p>
                    <p>De même, par rapport à (AC) : <Math tex="AF = AI" /> et CAF = CAI.</p>
                    <p>
                      En additionnant ces quatre angles égaux :{" "}
                      <Math tex="EAF = EAB + BAI + IAC + CAF = 4\times\left(\tfrac{1}{2}BAC\right) = \mathbf{2\times BAC}" />.
                    </p>
                    <p>
                      Les points A, E, F sont alignés lorsque <Math tex="EAF = 180^{\circ}" />, c&apos;est-à-dire lorsque{" "}
                      <Math tex="BAC = 90^{\circ}" />. Dans tous les cas, le triangle AEF est isocèle en A (
                      <Math tex="AE = AF = AI" />) et la bissectrice (AI) est un axe de symétrie de la figure AEIF.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 250" className="h-auto w-full max-w-[300px]">
                    <line x1="150" y1="220" x2="150" y2="100" stroke="#e11d48" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="150" y1="220" x2="58" y2="89" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="150" y1="220" x2="230" y2="105" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="150" y1="220" x2="65" y2="189" stroke="#059669" strokeWidth="2" />
                    <line x1="150" y1="220" x2="235" y2="189" stroke="#059669" strokeWidth="2" />
                    <circle cx="150" cy="220" r="4" fill="#0f172a" /><circle cx="58" cy="89" r="4" fill="#4f46e5" /><circle cx="230" cy="105" r="4" fill="#4f46e5" />
                    <circle cx="150" cy="130" r="3.5" fill="#334155" /><circle cx="65" cy="189" r="4" fill="#059669" /><circle cx="235" cy="189" r="4" fill="#059669" />
                    <text x="156" y="234" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="38" y="86" fontSize="13" fontWeight="700" fill="#4f46e5">B</text>
                    <text x="236" y="102" fontSize="13" fontWeight="700" fill="#4f46e5">C</text>
                    <text x="156" y="126" fontSize="13" fontWeight="700" fill="#334155">I</text>
                    <text x="42" y="196" fontSize="13" fontWeight="700" fill="#059669">E</text>
                    <text x="241" y="196" fontSize="13" fontWeight="700" fill="#059669">F</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Construction à la règle non graduée"
            items={
              <Figure
                text={
                  <>
                    <p>Dans la figure ci-contre, (Δ) est une droite et A&apos; est le symétrique de A par rapport à (Δ).</p>
                    <p>
                      En utilisant une <strong>règle non graduée</strong>, détermine le point B&apos; symétrique de B
                      par rapport à (Δ).
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 320 260" className="h-auto w-full max-w-[300px]">
                    <line x1="10" y1="150" x2="310" y2="150" stroke="#0f172a" strokeWidth="2" />
                    <line x1="90" y1="70" x2="90" y2="230" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3" />
                    <path d="M90,138 L102,138 L102,150" fill="none" stroke="#334155" strokeWidth="1.6" />
                    <line x1="80" y1="105" x2="86" y2="115" stroke="#334155" strokeWidth="2" />
                    <line x1="94" y1="185" x2="100" y2="195" stroke="#334155" strokeWidth="2" />
                    <circle cx="90" cy="70" r="4" fill="#0f172a" /><circle cx="90" cy="230" r="4" fill="#0f172a" /><circle cx="200" cy="90" r="4" fill="#0f172a" />
                    <text x="70" y="62" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="96" y="234" fontSize="14" fontWeight="700" fill="#0f172a">A&apos;</text>
                    <text x="208" y="88" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="270" y="146" fill="#0f172a" fontSize="13" fontWeight="600">(Δ)</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>On ne peut pas mesurer : on utilise uniquement des droites passant par des points déjà connus (ou par leurs symétriques).</p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>On trace la droite (AB) : elle coupe (Δ) en un point <strong>K</strong>. Comme K ∈ (Δ), K est son propre symétrique.</li>
                      <li>Le symétrique de la droite (AB) est donc la droite <strong>(A&apos;K)</strong> : B&apos; appartient à cette droite.</li>
                      <li>On trace la droite (A&apos;B) : elle coupe (Δ) en un point <strong>M</strong>, lui aussi son propre symétrique.</li>
                      <li>Le symétrique de la droite (A&apos;B) est donc la droite <strong>(AM)</strong> : B&apos; appartient aussi à cette droite.</li>
                    </ul>
                    <p className="font-semibold text-green-700">
                      B&apos; est donc le point d&apos;intersection des droites (A&apos;K) et (AM), obtenu uniquement à la règle, sans aucune mesure.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 320 260" className="h-auto w-full max-w-[300px]">
                    <line x1="10" y1="150" x2="310" y2="150" stroke="#0f172a" strokeWidth="2" />
                    <line x1="90" y1="70" x2="90" y2="230" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 3" />
                    <path d="M90,138 L102,138 L102,150" fill="none" stroke="#334155" strokeWidth="1.6" />
                    <line x1="80" y1="60" x2="240" y2="175" stroke="#4f46e5" strokeWidth="1.8" />
                    <line x1="80" y1="240" x2="210" y2="120" stroke="#f59e0b" strokeWidth="1.8" />
                    <line x1="80" y1="240" x2="245" y2="145" stroke="#059669" strokeWidth="1.8" />
                    <line x1="80" y1="60" x2="210" y2="180" stroke="#7c3aed" strokeWidth="1.8" />
                    <circle cx="90" cy="70" r="4" fill="#4f46e5" /><circle cx="90" cy="230" r="4" fill="#f59e0b" />
                    <circle cx="200" cy="90" r="4" fill="#0f172a" />
                    <circle cx="236.7" cy="150" r="3.5" fill="#334155" /><circle cx="178" cy="150" r="3.5" fill="#334155" />
                    <circle cx="200" cy="170" r="4.5" fill="#059669" />
                    <text x="70" y="62" fontSize="13" fontWeight="700" fill="#4f46e5">A</text>
                    <text x="96" y="234" fontSize="13" fontWeight="700" fill="#f59e0b">A&apos;</text>
                    <text x="208" y="88" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <text x="240" y="145" fontSize="12" fill="#334155">K</text>
                    <text x="160" y="146" fontSize="12" fill="#334155">M</text>
                    <text x="206" y="180" fontSize="13" fontWeight="700" fill="#059669">B&apos;</text>
                    <text x="270" y="146" fill="#0f172a" fontSize="12" fontWeight="600">(Δ)</text>
                  </svg>
                }
              />
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
