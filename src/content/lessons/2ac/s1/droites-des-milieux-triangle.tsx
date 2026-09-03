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
  title: "Droites des Milieux d'un Triangle · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur les droites des milieux dans un triangle (propriétés, théorème de Thalès) et 9 exercices corrigés, 2ᵉ année collège, semestre 1.",
  kicker: "2ᵉ Année Collège · Chapitre 7",
  heroTitle: "Droites des milieux dans un triangle",
  heroSubtitle:
    "Trois propriétés de la droite des milieux, le théorème de Thalès dans le triangle, puis 9 exercices corrigés un par un.",
  footerNote: "Droites des milieux d'un triangle · Mathématiques, 2ᵉ année collège, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "thales", label: "Thalès" },
    { id: "serie", label: "Exercice N°6" },
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

/** A numbered property card used in the "Cours" and "Thalès" sections. */
function CourseCard({
  numeral,
  title,
  tone = "brand",
  visual,
  children,
}: {
  numeral: ReactNode;
  title: string;
  tone?: "brand" | "leaf";
  visual: ReactNode;
  children: ReactNode;
}) {
  const badgeClass =
    tone === "leaf"
      ? "bg-green-600 text-white"
      : "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950";
  return (
    <article className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${badgeClass}`}>
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
          { value: "9", label: "exercices" },
          { value: "3", label: "propriétés" },
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
          <svg viewBox="0 0 220 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <polygon points="110,20 20,170 200,150" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85" />
            <line x1="65" y1="95" x2="155" y2="85" stroke="#fb923c" strokeWidth="3" />
            <circle cx="110" cy="20" r="4" fill="currentColor" />
            <circle cx="20" cy="170" r="4" fill="currentColor" />
            <circle cx="200" cy="150" r="4" fill="currentColor" />
            <circle cx="65" cy="95" r="4.5" fill="#fb923c" />
            <circle cx="155" cy="85" r="4.5" fill="#fb923c" />
          </svg>
        }
      />

      {/* ===================== COMPETENCES ===================== */}
      <LessonSection
        kicker="Avant de commencer"
        title="Repères du chapitre"
        tone="light"
        description=""
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-1 font-display font-bold text-foreground">🎯 Compétences exigibles</p>
            <p className="text-sm text-foreground-muted">
              Connaître et utiliser les théorèmes relatifs aux milieux des côtés d&apos;un triangle, ainsi que la
              proportionnalité des longueurs (Thalès).
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-1 font-display font-bold text-foreground">🔗 Pré-requis</p>
            <p className="text-sm text-foreground-muted">
              Triangles, droites parallèles, symétrie centrale et propriétés du parallélogramme.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="mb-1 font-display font-bold text-foreground">🧭 Extensions</p>
            <p className="text-sm text-foreground-muted">
              Théorème de Thalès réciproque, théorème de Pythagore, applications en physique.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Les trois propriétés"
        title="Les trois propriétés de la droite des milieux"
        tone="muted"
        description="Elles permettent tour à tour de démontrer un parallélisme, de prouver qu'un point est un milieu, et de calculer une longueur."
      >
        <CourseCard
          numeral={1}
          title="Théorème direct"
          visual={
            <svg viewBox="0 0 320 220" className="h-auto w-full max-w-[300px]">
              <line x1="60" y1="180" x2="260" y2="180" stroke="#0f172a" strokeWidth="2" />
              <line x1="60" y1="180" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
              <line x1="260" y1="180" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
              <line x1="105" y1="105" x2="205" y2="105" stroke="#4f46e5" strokeWidth="2.5" />
              <circle cx="60" cy="180" r="4" fill="#0f172a" /><circle cx="260" cy="180" r="4" fill="#0f172a" /><circle cx="150" cy="30" r="4" fill="#0f172a" />
              <circle cx="105" cy="105" r="4" fill="#4f46e5" /><circle cx="205" cy="105" r="4" fill="#4f46e5" />
              <line x1="98" y1="98" x2="112" y2="112" stroke="#4f46e5" strokeWidth="1.6" />
              <line x1="130" y1="65" x2="144" y2="79" stroke="#4f46e5" strokeWidth="1.6" />
              <line x1="198" y1="98" x2="212" y2="112" stroke="#4f46e5" strokeWidth="1.6" />
              <line x1="156" y1="65" x2="170" y2="79" stroke="#4f46e5" strokeWidth="1.6" />
              <text x="40" y="198" fontSize="15" fontWeight="700" fill="#0f172a">B</text>
              <text x="266" y="198" fontSize="15" fontWeight="700" fill="#0f172a">C</text>
              <text x="156" y="24" fontSize="15" fontWeight="700" fill="#0f172a">A</text>
              <text x="76" y="98" fontSize="14" fontWeight="700" fill="#4f46e5">K</text>
              <text x="212" y="98" fontSize="14" fontWeight="700" fill="#4f46e5">J</text>
            </svg>
          }
        >
          <DefBox label="Énoncé">
            Dans un triangle, si une droite passe par les <strong>milieux de deux côtés</strong>, alors elle est{" "}
            <strong>parallèle au troisième côté</strong>.
          </DefBox>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Rédaction type</p>
            <p>
              Dans le triangle ABC, K est le milieu de [AB] et J est le milieu de [AC]. Or, dans un triangle, si une
              droite passe par les milieux de deux côtés, alors elle est parallèle au troisième. On déduit que (KJ)
              est parallèle à (BC).
            </p>
          </div>
          <p className="text-sm text-foreground-muted">
            💡 Cette propriété permet de <strong>démontrer que deux droites sont parallèles</strong>.
          </p>
        </CourseCard>

        <CourseCard
          numeral={2}
          title="Théorème réciproque"
          visual={
            <svg viewBox="0 0 320 220" className="h-auto w-full max-w-[300px]">
              <line x1="60" y1="180" x2="260" y2="180" stroke="#0f172a" strokeWidth="2" />
              <line x1="60" y1="180" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
              <line x1="260" y1="180" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
              <line x1="105" y1="105" x2="205" y2="105" stroke="#059669" strokeWidth="2.5" />
              <circle cx="60" cy="180" r="4" fill="#0f172a" /><circle cx="260" cy="180" r="4" fill="#0f172a" /><circle cx="150" cy="30" r="4" fill="#0f172a" />
              <circle cx="105" cy="105" r="4" fill="#059669" /><circle cx="205" cy="105" r="4" fill="#059669" />
              <line x1="98" y1="98" x2="112" y2="112" stroke="#059669" strokeWidth="1.6" />
              <line x1="130" y1="65" x2="144" y2="79" stroke="#059669" strokeWidth="1.6" />
              <text x="40" y="198" fontSize="15" fontWeight="700" fill="#0f172a">B</text>
              <text x="266" y="198" fontSize="15" fontWeight="700" fill="#0f172a">C</text>
              <text x="156" y="24" fontSize="15" fontWeight="700" fill="#0f172a">A</text>
              <text x="76" y="98" fontSize="14" fontWeight="700" fill="#059669">K</text>
              <text x="212" y="98" fontSize="14" fontWeight="700" fill="#059669">J</text>
              <text x="150" y="118" fontSize="11" fill="#059669" textAnchor="middle">(KJ) ∥ (BC)</text>
            </svg>
          }
        >
          <DefBox label="Énoncé">
            Dans un triangle, si une droite passe par le <strong>milieu d&apos;un côté</strong> et est{" "}
            <strong>parallèle à un second côté</strong>, alors elle coupe le troisième côté en{" "}
            <strong>son milieu</strong>.
          </DefBox>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Rédaction type</p>
            <p>
              Dans le triangle ABC, K milieu de [AB], J ∈ [AC] et (KJ) parallèle à (BC). Or, dans un triangle, si une
              droite passe par le milieu d&apos;un côté et est parallèle à un second, alors elle coupe le troisième en
              son milieu. Donc J est le milieu de [AC].
            </p>
          </div>
          <p className="text-sm text-foreground-muted">
            💡 Cette propriété permet de <strong>démontrer qu&apos;un point est le milieu d&apos;un segment</strong>.
          </p>
        </CourseCard>

        <CourseCard
          numeral={3}
          title="Propriété de longueur"
          visual={
            <svg viewBox="0 0 320 220" className="h-auto w-full max-w-[300px]">
              <line x1="60" y1="180" x2="260" y2="180" stroke="#0f172a" strokeWidth="2" />
              <line x1="60" y1="180" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
              <line x1="260" y1="180" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
              <line x1="105" y1="105" x2="205" y2="105" stroke="#4f46e5" strokeWidth="2.5" />
              <circle cx="60" cy="180" r="4" fill="#0f172a" /><circle cx="260" cy="180" r="4" fill="#0f172a" /><circle cx="150" cy="30" r="4" fill="#0f172a" />
              <circle cx="105" cy="105" r="4" fill="#4f46e5" /><circle cx="205" cy="105" r="4" fill="#4f46e5" />
              <text x="40" y="198" fontSize="15" fontWeight="700" fill="#0f172a">B</text>
              <text x="266" y="198" fontSize="15" fontWeight="700" fill="#0f172a">C</text>
              <text x="156" y="24" fontSize="15" fontWeight="700" fill="#0f172a">A</text>
              <text x="76" y="98" fontSize="14" fontWeight="700" fill="#4f46e5">I</text>
              <text x="212" y="98" fontSize="14" fontWeight="700" fill="#4f46e5">J</text>
              <text x="150" y="98" fontSize="11" fill="#4f46e5" textAnchor="middle" fontWeight="700">IJ = BC/2</text>
              <text x="150" y="196" fontSize="11" fill="#0f172a" textAnchor="middle">BC</text>
            </svg>
          }
        >
          <DefBox label="Énoncé">
            Dans un triangle, la longueur du segment joignant les milieux de deux côtés est égale à la{" "}
            <strong>moitié</strong> de celle du troisième côté.
          </DefBox>
          <div className="rounded-xl border border-border p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Exemple</p>
            <p>
              L milieu de [PE] et F milieu de [ET], avec <Math tex="PT = 12" />. On a alors :{" "}
              <Math tex="LF = \tfrac{PT}{2} = \mathbf{6}" />.
            </p>
          </div>
          <p className="text-sm text-foreground-muted">
            💡 Cette propriété permet de <strong>calculer la longueur d&apos;un segment</strong>.
          </p>
        </CourseCard>
      </LessonSection>

      {/* ===================== THALES ===================== */}
      <LessonSection
        id="thales"
        kicker="02 · Proportionnalité"
        title="Théorème de Thalès dans le triangle"
        tone="light"
        description="Une généralisation de la droite des milieux : il relie les longueurs de deux droites sécantes coupées par des parallèles."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">4</span>
              <h3 className="font-display text-lg font-bold text-foreground">Propriété 4 · Thalès</h3>
            </div>
            <p className="mb-3 text-sm text-foreground">
              Dans un triangle LFR, si M est un point de [LF], N un point de [LR] et si (MN) ∥ (FR), alors :
            </p>
            <FormulaBlock tex="\dfrac{LM}{LF} = \dfrac{LN}{LR} = \dfrac{MN}{FR}" />
            <svg viewBox="0 0 300 200" className="mx-auto mt-4 h-auto w-full max-w-[280px]">
              <line x1="150" y1="20" x2="60" y2="180" stroke="#0f172a" strokeWidth="2" />
              <line x1="150" y1="20" x2="240" y2="180" stroke="#0f172a" strokeWidth="2" />
              <line x1="60" y1="180" x2="240" y2="180" stroke="#0f172a" strokeWidth="2" />
              <line x1="105" y1="100" x2="195" y2="100" stroke="#4f46e5" strokeWidth="2.5" />
              <circle cx="150" cy="20" r="4" fill="#0f172a" /><circle cx="60" cy="180" r="4" fill="#0f172a" /><circle cx="240" cy="180" r="4" fill="#0f172a" />
              <circle cx="105" cy="100" r="4" fill="#4f46e5" /><circle cx="195" cy="100" r="4" fill="#4f46e5" />
              <text x="156" y="16" fontSize="14" fontWeight="700" fill="#0f172a">L</text>
              <text x="40" y="198" fontSize="14" fontWeight="700" fill="#0f172a">F</text>
              <text x="246" y="198" fontSize="14" fontWeight="700" fill="#0f172a">R</text>
              <text x="78" y="94" fontSize="13" fontWeight="700" fill="#4f46e5">M</text>
              <text x="202" y="94" fontSize="13" fontWeight="700" fill="#4f46e5">N</text>
            </svg>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">5</span>
              <h3 className="font-display text-lg font-bold text-foreground">Diviser un segment en parties égales</h3>
            </div>
            <p className="mb-3 text-sm text-foreground">Pour diviser [AB] en 5 parties égales grâce au théorème de Thalès :</p>
            <ol className="list-decimal space-y-1.5 pl-5 text-sm text-foreground">
              <li>Tracer le segment [AB] à diviser.</li>
              <li>Tracer une demi-droite oblique issue de A.</li>
              <li>Avec un compas, reporter 5 fois la même ouverture sur cette demi-droite : on obtient les points 1, 2, 3, 4, 5.</li>
              <li>Joindre le point 5 au point B.</li>
              <li>Tracer les parallèles à (5B) passant par les points 4, 3, 2 et 1.</li>
            </ol>
            <p className="mt-3 text-sm text-foreground-muted">➡ [AB] est ainsi divisé en 5 segments de même longueur.</p>
            <svg viewBox="0 0 300 190" className="mx-auto mt-2 h-auto w-full max-w-[280px]">
              <line x1="40" y1="160" x2="260" y2="160" stroke="#0f172a" strokeWidth="2" />
              <line x1="40" y1="160" x2="140" y2="20" stroke="#334155" strokeWidth="1.6" />
              <circle cx="40" cy="160" r="3.5" fill="#0f172a" /><circle cx="260" cy="160" r="3.5" fill="#0f172a" />
              <circle cx="62" cy="132" r="3" fill="#059669" /><circle cx="84" cy="104" r="3" fill="#059669" />
              <circle cx="106" cy="76" r="3" fill="#059669" /><circle cx="128" cy="48" r="3" fill="#059669" />
              <circle cx="140" cy="20" r="3.5" fill="#059669" />
              <line x1="140" y1="20" x2="260" y2="160" stroke="#059669" strokeWidth="2" />
              <line x1="128" y1="48" x2="234" y2="160" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3" />
              <line x1="106" y1="76" x2="208" y2="160" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3" />
              <line x1="84" y1="104" x2="182" y2="160" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3" />
              <line x1="62" y1="132" x2="156" y2="160" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3" />
              <text x="22" y="176" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
              <text x="264" y="176" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
              <text x="146" y="16" fontSize="12" fontWeight="700" fill="#059669">5</text>
              <text x="132" y="46" fontSize="11" fill="#059669">4</text>
              <text x="110" y="74" fontSize="11" fill="#059669">3</text>
              <text x="88" y="102" fontSize="11" fill="#059669">2</text>
              <text x="66" y="130" fontSize="11" fill="#059669">1</text>
            </svg>
          </div>
        </div>
      </LessonSection>

      {/* ===================== SERIE N°6 ===================== */}
      <LessonSection
        id="serie"
        kicker="À toi de jouer"
        title="Exercice N°6 · Droites des milieux dans un triangle"
        tone="muted"
        description="9 exercices corrigés. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={9} celebrationTitle="Bravo, les 9 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les droites des milieux et Thalès.">
          <ExerciseCard
            id="1"
            index={1}
            title="Calcul de longueur IJ"
            items={
              <Figure
                text={
                  <>
                    <p>
                      Construire le triangle ABC tel que <Math tex="AB = 5\text{ cm}" />,{" "}
                      <Math tex="AC = 4\text{ cm}" /> et <Math tex="C\widehat{A}B = 55^{\circ}" />. Place les points I
                      et J milieux respectifs des côtés [BA] et [BC].
                    </p>
                    <p className="font-semibold">➤ Calcule la longueur IJ en justifiant clairement la démarche utilisée.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 200" className="h-auto w-full max-w-[280px]">
                    <line x1="60" y1="170" x2="240" y2="170" stroke="#0f172a" strokeWidth="2" />
                    <line x1="60" y1="170" x2="130" y2="30" stroke="#0f172a" strokeWidth="2" />
                    <line x1="240" y1="170" x2="130" y2="30" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="60" cy="170" r="4" fill="#0f172a" /><circle cx="240" cy="170" r="4" fill="#0f172a" /><circle cx="130" cy="30" r="4" fill="#0f172a" />
                    <text x="40" y="188" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="246" y="188" fontSize="14" fontWeight="700" fill="#0f172a">C</text>
                    <text x="136" y="24" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                  </svg>
                }
              />
            }
            correction={
              <Figure
                text={
                  <>
                    <p>Dans le triangle ABC : I est le milieu de [BA] et J est le milieu de [BC].</p>
                    <p>Or, dans un triangle, la longueur du segment joignant les milieux de deux côtés est égale à la moitié de celle du troisième côté.</p>
                    <p>
                      Donc <Math tex="IJ = \dfrac{AC}{2} = \dfrac{4}{2} = \mathbf{2\text{ cm}}" /> (et de plus{" "}
                      <Math tex="(IJ) \parallel (AC)" />).
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 200" className="h-auto w-full max-w-[280px]">
                    <line x1="60" y1="170" x2="240" y2="170" stroke="#0f172a" strokeWidth="2" />
                    <line x1="60" y1="170" x2="130" y2="30" stroke="#0f172a" strokeWidth="2" />
                    <line x1="240" y1="170" x2="130" y2="30" stroke="#0f172a" strokeWidth="2" />
                    <line x1="95" y1="100" x2="185" y2="100" stroke="#059669" strokeWidth="2.5" />
                    <circle cx="60" cy="170" r="4" fill="#0f172a" /><circle cx="240" cy="170" r="4" fill="#0f172a" /><circle cx="130" cy="30" r="4" fill="#0f172a" />
                    <circle cx="95" cy="100" r="4" fill="#059669" /><circle cx="185" cy="100" r="4" fill="#059669" />
                    <text x="40" y="188" fontSize="14" fontWeight="700" fill="#0f172a">B</text>
                    <text x="246" y="188" fontSize="14" fontWeight="700" fill="#0f172a">C</text>
                    <text x="136" y="24" fontSize="14" fontWeight="700" fill="#0f172a">A</text>
                    <text x="68" y="94" fontSize="13" fontWeight="700" fill="#059669">I</text>
                    <text x="192" y="94" fontSize="13" fontWeight="700" fill="#059669">J</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Le dessin de Karim"
            items={
              <Figure
                text={
                  <>
                    <p>
                      Observe le dessin de Karim. Dans le triangle KJL, il veut montrer que les droites (KL) et (MN)
                      sont parallèles.
                    </p>
                    <p className="font-semibold">➤ À l&apos;aide du codage du dessin, rédige une démonstration.</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 260 220" className="h-auto w-full max-w-[280px]">
                    <line x1="40" y1="190" x2="210" y2="190" stroke="#0f172a" strokeWidth="2" />
                    <line x1="40" y1="190" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
                    <line x1="210" y1="190" x2="150" y2="30" stroke="#0f172a" strokeWidth="2" />
                    <line x1="95" y1="110" x2="180" y2="110" stroke="#4f46e5" strokeWidth="2.2" />
                    <circle cx="40" cy="190" r="4" fill="#0f172a" /><circle cx="210" cy="190" r="4" fill="#0f172a" /><circle cx="150" cy="30" r="4" fill="#0f172a" />
                    <circle cx="95" cy="110" r="4" fill="#4f46e5" /><circle cx="180" cy="110" r="4" fill="#4f46e5" />
                    <line x1="88" y1="103" x2="102" y2="117" stroke="#4f46e5" strokeWidth="1.6" />
                    <line x1="118" y1="60" x2="132" y2="74" stroke="#4f46e5" strokeWidth="1.6" />
                    <line x1="177" y1="103" x2="187" y2="115" stroke="#4f46e5" strokeWidth="1.6" />
                    <line x1="163" y1="60" x2="173" y2="72" stroke="#4f46e5" strokeWidth="1.6" />
                    <text x="22" y="208" fontSize="14" fontWeight="700" fill="#0f172a">K</text>
                    <text x="216" y="208" fontSize="14" fontWeight="700" fill="#0f172a">L</text>
                    <text x="156" y="24" fontSize="14" fontWeight="700" fill="#0f172a">J</text>
                    <text x="66" y="104" fontSize="13" fontWeight="700" fill="#4f46e5">M</text>
                    <text x="188" y="104" fontSize="13" fontWeight="700" fill="#4f46e5">N</text>
                  </svg>
                }
              />
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>D&apos;après le codage de la figure : M est le milieu de [KJ] (deux tirets identiques) et N est le milieu de [JL] (un tiret identique sur [JN] et [NL]).</p>
                <p>Or, dans un triangle, si une droite passe par les milieux de deux côtés, alors elle est parallèle au troisième côté.</p>
                <p>Dans le triangle KJL : M milieu de [KJ], N milieu de [JL].</p>
                <p className="font-semibold text-green-700">On déduit que (MN) est parallèle à (KL).</p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Triangle RST"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  RST est un triangle tel que <Math tex="RS = 8\text{ cm}" />, <Math tex="RT = 6\text{ cm}" /> et{" "}
                  <Math tex="TS = 7\text{ cm}" />. P est le milieu de [RT] et F est le milieu de [TS].
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Fais un dessin à main levée et code-le.</li>
                  <li>Montre que (RS) et (PF) sont parallèles.</li>
                  <li>Calcule PF en justifiant la démarche utilisée.</li>
                </ol>
              </div>
            }
            correction={
              <Figure
                text={
                  <>
                    <p><strong>1)</strong> Dessin à main levée codé : sur [RT], on marque RP = PT ; sur [TS], on marque TF = FS.</p>
                    <p>
                      <strong>2)</strong> Dans le triangle RST : P milieu de [RT], F milieu de [TS]. Or, dans un
                      triangle, si une droite passe par les milieux de deux côtés, alors elle est parallèle au
                      troisième. Donc <Math tex="(PF) \parallel (RS)" />.
                    </p>
                    <p>
                      <strong>3)</strong> D&apos;après la propriété de la longueur :{" "}
                      <Math tex="PF = \dfrac{RS}{2} = \dfrac{8}{2} = \mathbf{4\text{ cm}}" />.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 210" className="h-auto w-full max-w-[280px]">
                    <line x1="150" y1="20" x2="60" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="20" x2="240" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <line x1="60" y1="180" x2="240" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <line x1="105" y1="100" x2="195" y2="100" stroke="#059669" strokeWidth="2.5" />
                    <circle cx="150" cy="20" r="4" fill="#0f172a" /><circle cx="60" cy="180" r="4" fill="#0f172a" /><circle cx="240" cy="180" r="4" fill="#0f172a" />
                    <circle cx="105" cy="100" r="4" fill="#059669" /><circle cx="195" cy="100" r="4" fill="#059669" />
                    <text x="156" y="16" fontSize="14" fontWeight="700" fill="#0f172a">T</text>
                    <text x="40" y="198" fontSize="14" fontWeight="700" fill="#0f172a">R</text>
                    <text x="246" y="198" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                    <text x="80" y="94" fontSize="13" fontWeight="700" fill="#059669">P</text>
                    <text x="202" y="94" fontSize="13" fontWeight="700" fill="#059669">F</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Triangle rectangle EFG"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  EFG est un triangle rectangle en F tel que <Math tex="EF = 5\text{ cm}" /> et{" "}
                  <Math tex="FG = 3{,}5\text{ cm}" />. Soit A le milieu de [EF] et B le milieu de [EG].
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Fais un dessin en vraie grandeur et code-le.</li>
                  <li>Montre que (AB) est parallèle à (FG).</li>
                  <li>Déduis-en que (AB) est perpendiculaire à (EF).</li>
                </ol>
              </div>
            }
            correction={
              <Figure
                text={
                  <>
                    <p>
                      <strong>2)</strong> Dans le triangle EFG : A milieu de [EF], B milieu de [EG]. D&apos;après la
                      propriété de la droite des milieux relative au troisième côté [FG],{" "}
                      <Math tex="(AB) \parallel (FG)" />.
                    </p>
                    <p>
                      <strong>3)</strong> Le triangle EFG est rectangle en F, donc <Math tex="(EF) \perp (FG)" />.
                      Comme (AB) ∥ (FG), on déduit que <strong className="text-green-700"><Math tex="(AB) \perp (EF)" /></strong>.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 220" className="h-auto w-full max-w-[280px]">
                    <line x1="60" y1="180" x2="60" y2="40" stroke="#0f172a" strokeWidth="2" />
                    <line x1="60" y1="180" x2="230" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <line x1="60" y1="40" x2="230" y2="180" stroke="#0f172a" strokeWidth="2" />
                    <path d="M60,168 L72,168 L72,180" fill="none" stroke="#334155" strokeWidth="1.6" />
                    <line x1="60" y1="110" x2="145" y2="110" stroke="#059669" strokeWidth="2.5" />
                    <circle cx="60" cy="180" r="4" fill="#0f172a" /><circle cx="60" cy="40" r="4" fill="#0f172a" /><circle cx="230" cy="180" r="4" fill="#0f172a" />
                    <circle cx="60" cy="110" r="4" fill="#059669" /><circle cx="145" cy="110" r="4" fill="#059669" />
                    <text x="40" y="198" fontSize="14" fontWeight="700" fill="#0f172a">F</text>
                    <text x="40" y="36" fontSize="14" fontWeight="700" fill="#0f172a">E</text>
                    <text x="236" y="184" fontSize="14" fontWeight="700" fill="#0f172a">G</text>
                    <text x="30" y="114" fontSize="13" fontWeight="700" fill="#059669">A</text>
                    <text x="152" y="114" fontSize="13" fontWeight="700" fill="#059669">B</text>
                  </svg>
                }
              />
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="H, milieu de [MN] ?"
            items={
              <Figure
                text={
                  <>
                    <p>Les droites vertes sont parallèles (codage : K est marqué milieu de [MP]).</p>
                    <p className="font-semibold">➤ Démontre que H est le milieu de [MN].</p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 200" className="h-auto w-full max-w-[280px]">
                    <line x1="40" y1="40" x2="240" y2="40" stroke="#059669" strokeWidth="2.5" />
                    <line x1="60" y1="110" x2="220" y2="110" stroke="#059669" strokeWidth="2.5" />
                    <line x1="150" y1="180" x2="40" y2="40" stroke="#0f172a" strokeWidth="2" />
                    <line x1="150" y1="180" x2="240" y2="40" stroke="#0f172a" strokeWidth="2" />
                    <circle cx="40" cy="40" r="4" fill="#0f172a" /><circle cx="240" cy="40" r="4" fill="#0f172a" />
                    <circle cx="150" cy="180" r="4" fill="#0f172a" />
                    <circle cx="86" cy="110" r="4" fill="#4f46e5" /><circle cx="182" cy="110" r="4" fill="#4f46e5" />
                    <text x="24" y="34" fontSize="14" fontWeight="700" fill="#0f172a">P</text>
                    <text x="246" y="34" fontSize="14" fontWeight="700" fill="#0f172a">N</text>
                    <text x="156" y="196" fontSize="14" fontWeight="700" fill="#0f172a">M</text>
                    <text x="66" y="102" fontSize="13" fontWeight="700" fill="#4f46e5">K</text>
                    <text x="188" y="102" fontSize="13" fontWeight="700" fill="#4f46e5">H</text>
                  </svg>
                }
              />
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>D&apos;après le codage, K est le milieu de [MP] (MK = KP).</p>
                <p>Les droites (KH) et (PN) sont parallèles (donné dans l&apos;énoncé).</p>
                <p>Or, dans un triangle, si une droite passe par le milieu d&apos;un côté et est parallèle à un second côté, alors elle coupe le troisième côté en son milieu.</p>
                <p>Dans le triangle MPN : K milieu de [MP], (KH) ∥ (PN).</p>
                <p className="font-semibold text-green-700">On en déduit que H est le milieu de [MN].</p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Deux triangles accolés · ABC et ACD"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  ABC est un triangle tel que <Math tex="AC = 6\text{ cm}" />, <Math tex="AB = 4\text{ cm}" /> et{" "}
                  <Math tex="BC = 3{,}5\text{ cm}" />. ACD est un triangle tel que <Math tex="AD = 5\text{ cm}" />,{" "}
                  <Math tex="CD = 4\text{ cm}" /> et B et D ne sont pas du même côté de la droite (AC). E est le
                  milieu de [AB] et F est le milieu de [AC]. La parallèle à (CD) passant par F coupe (AD) en G.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Fais un dessin en vraie grandeur et code-le.</li>
                  <li>Montre que (EF) est parallèle à (BC).</li>
                  <li>Montre que G est le milieu de [AD].</li>
                  <li>Montre que (EG) et (BD) sont parallèles.</li>
                  <li>Calcule les longueurs EF et FG. Justifie.</li>
                  <li>Calcule le périmètre de AEFG.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>2)</strong> Dans le triangle ABC : E milieu de [AB], F milieu de [AC]. C&apos;est la droite
                  des milieux relative au 3ᵉ côté [BC], donc <strong className="text-green-700"><Math tex="(EF) \parallel (BC)" /></strong>.
                </p>
                <p>
                  <strong>3)</strong> Dans le triangle ACD : F milieu de [AC], (FG) ∥ (CD) (donné). D&apos;après le
                  théorème réciproque, <strong className="text-green-700">G est le milieu de [AD]</strong>.
                </p>
                <p>
                  <strong>4)</strong> Dans le triangle ABD : E milieu de [AB], G milieu de [AD]. C&apos;est la droite
                  des milieux relative au 3ᵉ côté [BD], donc <strong className="text-green-700"><Math tex="(EG) \parallel (BD)" /></strong>.
                </p>
                <p>
                  <strong>5)</strong> <Math tex="EF = \dfrac{BC}{2} = \dfrac{3{,}5}{2} = \mathbf{1{,}75\text{ cm}}" />.{" "}
                  <Math tex="FG = \dfrac{CD}{2} = \dfrac{4}{2} = \mathbf{2\text{ cm}}" />.
                </p>
                <p>
                  <strong>6)</strong> <Math tex="AE = \dfrac{AB}{2} = 2\text{ cm}" /> ;{" "}
                  <Math tex="AG = \dfrac{AD}{2} = 2{,}5\text{ cm}" />.
                  <br />
                  Périmètre de AEFG ={" "}
                  <Math tex="AE + EF + FG + GA = 2 + 1{,}75 + 2 + 2{,}5 = \mathbf{8{,}25\text{ cm}}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Applications du théorème de Thalès"
            items={
              <div className="space-y-4 text-sm text-foreground">
                <p>Dans chacun des cas suivants, les droites vertes sont parallèles.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <p className="mb-2 font-semibold text-foreground">a. Calcule AN et AB.</p>
                    <svg viewBox="0 0 260 220" className="mx-auto h-auto w-full max-w-[240px]">
                      <defs>
                        <marker id="arrIndigoDM" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M0,0 L10,5 L0,10 Z" fill="#4f46e5" />
                        </marker>
                      </defs>
                      <line x1="150" y1="20" x2="60" y2="200" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrIndigoDM)" markerStart="url(#arrIndigoDM)" />
                      <line x1="130" y1="60" x2="230" y2="150" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrIndigoDM)" markerStart="url(#arrIndigoDM)" />
                      <line x1="103" y1="112" x2="188" y2="112" stroke="#059669" strokeWidth="2.5" />
                      <circle cx="103" cy="112" r="4" fill="#059669" /><circle cx="188" cy="112" r="4" fill="#059669" />
                      <circle cx="150" cy="20" r="3.5" fill="#0f172a" /><circle cx="60" cy="200" r="3.5" fill="#0f172a" /><circle cx="230" cy="150" r="3.5" fill="#0f172a" />
                      <text x="152" y="14" fontSize="13" fontWeight="700" fill="#0f172a">M</text>
                      <text x="40" y="212" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                      <text x="236" y="150" fontSize="13" fontWeight="700" fill="#0f172a">N</text>
                      <text x="84" y="106" fontSize="12" fontWeight="700" fill="#059669">B</text>
                      <text x="194" y="106" fontSize="12" fontWeight="700" fill="#059669">C</text>
                      <text x="98" y="60" fontSize="11" fill="#4f46e5">4,5</text>
                      <text x="60" y="150" fontSize="11" fill="#0f172a">4</text>
                      <text x="145" y="98" fontSize="11" fill="#059669">2</text>
                      <text x="185" y="80" fontSize="11" fill="#0f172a">6</text>
                    </svg>
                    <p className="mt-1 text-center text-xs text-foreground-muted">
                      <Math tex="AM = 4{,}5" /> · <Math tex="AC = 4" /> · <Math tex="BC = 2" /> · <Math tex="MN = 6" />
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <p className="mb-2 font-semibold text-foreground">b. Calcule CT et AB.</p>
                    <svg viewBox="0 0 260 220" className="mx-auto h-auto w-full max-w-[240px]">
                      <line x1="150" y1="20" x2="55" y2="150" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrIndigoDM)" markerStart="url(#arrIndigoDM)" />
                      <line x1="150" y1="20" x2="205" y2="200" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrIndigoDM)" markerStart="url(#arrIndigoDM)" />
                      <line x1="112" y1="94" x2="172" y2="122" stroke="#059669" strokeWidth="2.5" />
                      <circle cx="112" cy="94" r="4" fill="#059669" /><circle cx="172" cy="122" r="4" fill="#059669" />
                      <circle cx="150" cy="20" r="3.5" fill="#0f172a" /><circle cx="55" cy="150" r="3.5" fill="#0f172a" /><circle cx="205" cy="200" r="3.5" fill="#0f172a" />
                      <text x="152" y="14" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                      <text x="30" y="150" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                      <text x="211" y="200" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                      <text x="88" y="90" fontSize="12" fontWeight="700" fill="#059669">S</text>
                      <text x="178" y="118" fontSize="12" fontWeight="700" fill="#059669">T</text>
                      <text x="70" y="70" fontSize="11" fill="#4f46e5">13</text>
                      <text x="176" y="80" fontSize="11" fill="#4f46e5">6,5</text>
                      <text x="118" y="80" fontSize="11" fill="#059669">5</text>
                      <text x="150" y="120" fontSize="11" fill="#059669">3</text>
                    </svg>
                    <p className="mt-1 text-center text-xs text-foreground-muted">
                      <Math tex="CB = 13" /> · <Math tex="CS = 5" /> · <Math tex="ST = 3" /> · <Math tex="CA = 6{,}5" />
                    </p>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-6 text-sm text-foreground sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="font-semibold">a) Triangle AMN, B ∈ [AM], C ∈ [AN], (BC) ∥ (MN).</p>
                  <p>D&apos;après Thalès : <Math tex="\dfrac{AB}{AM} = \dfrac{AC}{AN} = \dfrac{BC}{MN}" /></p>
                  <p><Math tex="\dfrac{AC}{AN} = \dfrac{BC}{MN} \rightarrow \dfrac{4}{AN} = \dfrac{2}{6} \rightarrow AN = \dfrac{4\times 6}{2} = \mathbf{12\text{ cm}}" /></p>
                  <p><Math tex="\dfrac{AB}{AM} = \dfrac{BC}{MN} \rightarrow \dfrac{AB}{4{,}5} = \dfrac{2}{6} \rightarrow AB = \dfrac{4{,}5\times 2}{6} = \mathbf{1{,}5\text{ cm}}" /></p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">b) Triangle CBA, S ∈ [CB], T ∈ [CA], (ST) ∥ (BA).</p>
                  <p>D&apos;après Thalès : <Math tex="\dfrac{CS}{CB} = \dfrac{CT}{CA} = \dfrac{ST}{BA}" /></p>
                  <p><Math tex="CT = CA \times \dfrac{CS}{CB} = 6{,}5 \times \dfrac{5}{13} = \mathbf{2{,}5\text{ cm}}" /></p>
                  <p><Math tex="BA = ST \times \dfrac{CB}{CS} = 3 \times \dfrac{13}{5} = \mathbf{7{,}8\text{ cm}}" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Triangle rectangle 3-4-5"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Construire un triangle ABC rectangle en B tel que <Math tex="AB = 4\text{ cm}" />,{" "}
                  <Math tex="BC = 3\text{ cm}" /> et <Math tex="AC = 5\text{ cm}" />. Sur la demi-droite [BA), place le
                  point E tel que <Math tex="BE = 8{,}8\text{ cm}" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Trace la droite parallèle à (AC) passant par E, elle coupe la droite (BC) en F.</li>
                  <li>Calcule EF et BF.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>E ∈ (BA), F ∈ (BC), (EF) ∥ (AC). D&apos;après le théorème de Thalès dans le triangle BAC :</p>
                <p className="font-semibold"><Math tex="\dfrac{BE}{BA} = \dfrac{BF}{BC} = \dfrac{EF}{AC}" /></p>
                <p><Math tex="\dfrac{BE}{BA} = \dfrac{8{,}8}{4} = 2{,}2" /></p>
                <p><Math tex="BF = BC \times 2{,}2 = 3 \times 2{,}2 = \mathbf{6{,}6\text{ cm}}" /></p>
                <p><Math tex="EF = AC \times 2{,}2 = 5 \times 2{,}2 = \mathbf{11\text{ cm}}" /></p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Trapèze DRAP"
            items={
              <Figure
                text={
                  <>
                    <p>
                      On considère le trapèze DRAP tel que (AP) soit parallèle à (DR) et à (IJ),{" "}
                      <Math tex="AP = 32\text{ mm}" />, <Math tex="DR = 48\text{ mm}" />, <Math tex="DA = 45\text{ mm}" />,{" "}
                      <Math tex="DI = 15\text{ mm}" /> et <Math tex="IP = 5\text{ mm}" />. Les points I, J et K sont
                      alignés.
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Calcule IJ et DJ.</li>
                      <li>Calcule la valeur exacte de AJ/AD.</li>
                      <li>Déduis-en JK.</li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 260 220" className="h-auto w-full max-w-[280px]">
                    <line x1="40" y1="40" x2="220" y2="30" stroke="#0f172a" strokeWidth="2" />
                    <line x1="70" y1="190" x2="190" y2="170" stroke="#0f172a" strokeWidth="2" />
                    <line x1="40" y1="40" x2="70" y2="190" stroke="#0f172a" strokeWidth="2" />
                    <line x1="220" y1="30" x2="190" y2="170" stroke="#0f172a" strokeWidth="2" />
                    <line x1="40" y1="40" x2="190" y2="170" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3" />
                    <line x1="55" y1="150" x2="150" y2="130" stroke="#4f46e5" strokeWidth="2.2" />
                    <circle cx="40" cy="40" r="4" fill="#0f172a" /><circle cx="220" cy="30" r="4" fill="#0f172a" />
                    <circle cx="70" cy="190" r="4" fill="#0f172a" /><circle cx="190" cy="170" r="4" fill="#0f172a" />
                    <circle cx="55" cy="150" r="4" fill="#4f46e5" /><circle cx="115" cy="141" r="4" fill="#4f46e5" /><circle cx="150" cy="130" r="4" fill="#4f46e5" />
                    <text x="22" y="34" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                    <text x="226" y="26" fontSize="13" fontWeight="700" fill="#0f172a">R</text>
                    <text x="52" y="208" fontSize="13" fontWeight="700" fill="#0f172a">P</text>
                    <text x="196" y="186" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <text x="34" y="164" fontSize="12" fontWeight="700" fill="#4f46e5">I</text>
                    <text x="120" y="134" fontSize="12" fontWeight="700" fill="#4f46e5">J</text>
                    <text x="156" y="122" fontSize="12" fontWeight="700" fill="#4f46e5">K</text>
                  </svg>
                }
              />
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="DP = DI + IP = 15 + 5 = 20\text{ mm}" />.</p>
                <p><strong>1)</strong> Dans le triangle DPA : I ∈ [DP], J ∈ [DA], (IJ) ∥ (PA). D&apos;après Thalès :</p>
                <p className="font-semibold"><Math tex="\dfrac{DI}{DP} = \dfrac{DJ}{DA} = \dfrac{IJ}{PA}" /></p>
                <p><Math tex="\dfrac{DI}{DP} = \dfrac{15}{20} = \dfrac{3}{4}" /></p>
                <p><Math tex="DJ = DA \times \dfrac{3}{4} = 45 \times \dfrac{3}{4} = \mathbf{33{,}75\text{ mm}}" /></p>
                <p><Math tex="IJ = PA \times \dfrac{3}{4} = 32 \times \dfrac{3}{4} = \mathbf{24\text{ mm}}" /></p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="\dfrac{AJ}{AD} = 1 - \dfrac{DJ}{AD} = 1 - \dfrac{3}{4} = \mathbf{\dfrac{1}{4}}" /> (valeur
                  exacte).
                </p>
                <p><strong>3)</strong> Dans le triangle DRA : J ∈ [DA], K ∈ [RA], (JK) ∥ (DR). D&apos;après Thalès : <Math tex="\dfrac{AJ}{AD} = \dfrac{JK}{DR}" />.</p>
                <p><Math tex="JK = DR \times \dfrac{AJ}{AD} = 48 \times \dfrac{1}{4} = \mathbf{12\text{ mm}}" />.</p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
