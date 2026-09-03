import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Repère dans le Plan · Cours et exercices corrigés | 3AC",
  description:
    "Cours complet sur le repère dans le plan (coordonnées d'un point, milieu d'un segment, coordonnées d'un vecteur, distance entre deux points) et 11 exercices corrigés pas à pas, 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 3",
  heroTitle: "Repère dans le Plan",
  heroSubtitle:
    "Coordonnées d'un point, milieu d'un segment, coordonnées d'un vecteur, distance entre deux points : le cours complet, plus 11 exercices corrigés.",
  footerNote: "Repère dans le plan · Mathématiques, 3ᵉ année collège, semestre 2.",
  sections: [
    { id: "points", label: "I. Points" },
    { id: "vecteurs", label: "II. Vecteurs" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Petits composants locaux ===================== */

/** Défs SVG partagées (flèches d'axes/vecteurs) réutilisées par tous les diagrammes ci-dessous. */
function DiagramDefs() {
  return (
    <svg width="0" height="0" className="absolute h-0 w-0 overflow-hidden">
      <defs>
        <marker id="arr-blue" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" fill="#2563eb" />
        </marker>
        <marker id="arr-rose" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" fill="#e11d48" />
        </marker>
        <marker id="arr-emerald" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" fill="#059669" />
        </marker>
        <marker id="arr-slate" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#475569" />
        </marker>
      </defs>
    </svg>
  );
}

/** Encadré définition/propriété/exemple, façon "box-def" / "box-prop" / "box-example" de la source. */
function Box({
  label,
  tone = "def",
  children,
}: {
  label?: string;
  tone?: "def" | "example";
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border p-5 text-sm ${
        tone === "example" ? "border-border bg-surface" : "border-border bg-surface-muted"
      }`}
    >
      {label ? (
        <p className="mb-2 font-mono text-xs font-semibold tracking-wide text-foreground-muted uppercase">{label}</p>
      ) : null}
      <div className="space-y-1.5 text-foreground">{children}</div>
    </div>
  );
}

/** Petit intitulé "a)" / "b)" entre deux blocs, comme dans la source. */
function SubHeading({ children }: { children: ReactNode }) {
  return <p className="mt-5 mb-2 font-mono text-xs font-medium text-foreground-muted">{children}</p>;
}

/** Badge + libellé pour les 4 notions clés du repère (Repère, Abscisses, Ordonnées, Origine). */
function Term({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 rounded-md bg-surface-muted px-2 py-1 font-mono text-[11px] font-semibold text-foreground-muted">
        {label}
      </span>
      <span className="text-sm text-foreground-muted">{children}</span>
    </li>
  );
}

/** Encadré vert de correction, façon "box-solution" de la source (numéro en gras inline). */
function Note({ children }: { children: ReactNode }) {
  return <div className="space-y-1.5 rounded-lg border border-green-500/20 bg-surface p-4 text-sm">{children}</div>;
}

/** Petit exercice d'application intégré au cours : énoncé visible, correction repliable. */
function Practice({
  diagram,
  children,
  solution,
}: {
  diagram?: ReactNode;
  children: ReactNode;
  solution: ReactNode;
}) {
  return (
    <div className="mt-6 rounded-xl border border-border p-5">
      <span className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-orange-100/80 px-2 py-1 font-mono text-xs font-semibold text-orange-700">
        Exercice d&apos;application
      </span>
      <div className="space-y-1.5 text-sm text-foreground">{children}</div>
      {diagram ? <div className="mt-4">{diagram}</div> : null}
      <div className="mt-4">
        <Accordion>
          <AccordionItem title="Afficher la correction">
            <div className="space-y-2 pt-1">{solution}</div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <DiagramDefs />

      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "2", label: "grandes parties" },
          { value: "8", label: "propriétés & formules" },
          { value: "11", label: "exercices corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#points"
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
          <div className="relative flex select-none items-baseline font-serif text-white italic">
            <span className="text-[7rem] leading-none font-bold sm:text-[9rem]">M</span>
            <span className="-mt-2 -ml-1 text-2xl leading-none font-bold text-orange-400 sm:text-3xl">(x;y)</span>
          </div>
        }
      />

      {/* ===================== I. COORDONNÉES D'UN POINT ===================== */}

      <LessonSection
        id="points"
        kicker="01 · Repère orthonormé"
        title="Le repère orthonormé du plan"
        tone="light"
        description="Deux droites graduées, perpendiculaires, avec la même unité : c'est tout ce qu'il faut pour repérer un point."
      >
        <p className="mb-3 text-sm text-foreground-muted">
          Soient <Math tex="(OI)" /> et <Math tex="(OJ)" /> deux droites graduées, dont l&apos;unité de graduation
          est respectivement <Math tex="OI" /> et <Math tex="OJ" />, telles que :
        </p>
        <FormulaBlock
          tex="\begin{cases} OI = OJ = 1 \\ (OI) \perp (OJ) \end{cases}"
          caption={<>repère orthonormé <Math tex="(O;I;J)" /></>}
        />

        <div className="mt-5 grid items-center gap-6 sm:grid-cols-2">
          <svg viewBox="0 0 318 318" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="278.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="278.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="278.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="278.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="278.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="278.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="278.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="278.0" x2="278.0" y2="40.0"/>
<line x1="40.0" y1="278.0" x2="278.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="278.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="278.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="278.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="278.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="278.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="278.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="278.0" y2="40.0"/>
</g>
<line x1="26.0" y1="210.0" x2="296.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="298.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="108.0" y1="292.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="94.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="226.0" textAnchor="middle">-2</text>
<text x="71.0" y="226.0" textAnchor="middle">-1</text>
<text x="139.0" y="226.0" textAnchor="middle">1</text>
<text x="173.0" y="226.0" textAnchor="middle">2</text>
<text x="207.0" y="226.0" textAnchor="middle">3</text>
<text x="241.0" y="226.0" textAnchor="middle">4</text>
<text x="275.0" y="226.0" textAnchor="middle">5</text>
<text x="100.0" y="281.5" textAnchor="end">-2</text>
<text x="100.0" y="247.5" textAnchor="end">-1</text>
<text x="100.0" y="179.5" textAnchor="end">1</text>
<text x="100.0" y="145.5" textAnchor="end">2</text>
<text x="100.0" y="111.5" textAnchor="end">3</text>
<text x="100.0" y="77.5" textAnchor="end">4</text>
<text x="100.0" y="43.5" textAnchor="end">5</text>
<text x="100.0" y="226.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<circle cx="108.0" cy="210.0" r="4" fill="#1e293b"/>
<text x="92.0" y="226.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">O</text>
<circle cx="142.0" cy="210.0" r="4" fill="#2563eb"/>
<text x="138.0" y="228.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#2563eb">I</text>
<circle cx="108.0" cy="176.0" r="4" fill="#e11d48"/>
<text x="93.0" y="170.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">J</text>
</svg>

          <ul className="space-y-2.5">
            <Term label="Repère">
              on dit que le plan <strong>est rapporté à un repère orthonormé</strong> <Math tex="(O;I;J)" />.
            </Term>
            <Term label="Abscisses">
              la droite <Math tex="(OI)" /> est appelée <strong>l&apos;axe des abscisses</strong>.
            </Term>
            <Term label="Ordonnées">
              la droite <Math tex="(OJ)" /> est appelée <strong>l&apos;axe des ordonnées</strong>.
            </Term>
            <Term label="Origine">
              le point <Math tex="O" /> est appelé <strong>l&apos;origine du repère</strong>.
            </Term>
          </ul>
        </div>
      </LessonSection>

      <LessonSection
        kicker="02 · Coordonnées d'un point"
        title="Les coordonnées d'un point"
        tone="light"
        description="Un point, un couple de nombres : c'est la base de tout ce chapitre."
      >
        <SubHeading>a) Définition</SubHeading>
        <Box label="définition">
          <p>
            Dans un plan rapporté à un repère orthonormé, pour tout point <Math tex="M" /> il existe un{" "}
            <strong>couple unique de nombres réels</strong> <Math tex="(x_M\,;\,y_M)" />, appelé couple de
            coordonnées du point <Math tex="M" />, et on écrit : <Math tex="M(x_M\,;\,y_M)" />.
          </p>
          <p>
            <Math tex="x_M" /> est appelé <strong>l&apos;abscisse</strong> de <Math tex="M" />. <Math tex="y_M" />{" "}
            est appelé <strong>l&apos;ordonnée</strong> de <Math tex="M" />.
          </p>
        </Box>

        <div className="mt-4">
          <Callout variant="warning" title="Remarque importante">
            <p>
              Si le plan est rapporté à un repère orthonormé <Math tex="(O;I;J)" />, alors :{" "}
              <Math tex="O(0;0)" /> ; <Math tex="I(1;0)" /> ; <Math tex="J(0;1)" />.
            </p>
          </Callout>
        </div>

        <SubHeading>b) Exemple</SubHeading>
        <p className="mb-3 text-sm text-foreground-muted">
          On considère que le plan est rapporté à un repère orthonormé <Math tex="(O;I;J)" />. Plaçons les points :
        </p>
        <Box tone="example">
          <p className="text-center">
            <Math tex="A(2;-3)" /> ; <Math tex="B(2;4)" /> ; <Math tex="C(-1;2)" /> ; <Math tex="D(-3;1)" /> ;{" "}
            <Math tex="E(0;-4)" /> ; <Math tex="F(3;0)" />
          </p>
        </Box>

        <svg viewBox="0 0 522 420" className="mx-auto mt-4 w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="380.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="380.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="380.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="380.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="380.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="380.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="380.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="380.0" x2="278.0" y2="40.0"/>
<line x1="312.0" y1="380.0" x2="312.0" y2="40.0"/>
<line x1="346.0" y1="380.0" x2="346.0" y2="40.0"/>
<line x1="380.0" y1="380.0" x2="380.0" y2="40.0"/>
<line x1="414.0" y1="380.0" x2="414.0" y2="40.0"/>
<line x1="448.0" y1="380.0" x2="448.0" y2="40.0"/>
<line x1="482.0" y1="380.0" x2="482.0" y2="40.0"/>
<line x1="40.0" y1="380.0" x2="482.0" y2="380.0"/>
<line x1="40.0" y1="346.0" x2="482.0" y2="346.0"/>
<line x1="40.0" y1="312.0" x2="482.0" y2="312.0"/>
<line x1="40.0" y1="278.0" x2="482.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="482.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="482.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="482.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="482.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="482.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="482.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="482.0" y2="40.0"/>
</g>
<line x1="26.0" y1="210.0" x2="500.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="502.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="244.0" y1="394.0" x2="244.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="230.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="226.0" textAnchor="middle">-6</text>
<text x="71.0" y="226.0" textAnchor="middle">-5</text>
<text x="105.0" y="226.0" textAnchor="middle">-4</text>
<text x="139.0" y="226.0" textAnchor="middle">-3</text>
<text x="173.0" y="226.0" textAnchor="middle">-2</text>
<text x="207.0" y="226.0" textAnchor="middle">-1</text>
<text x="275.0" y="226.0" textAnchor="middle">1</text>
<text x="309.0" y="226.0" textAnchor="middle">2</text>
<text x="343.0" y="226.0" textAnchor="middle">3</text>
<text x="377.0" y="226.0" textAnchor="middle">4</text>
<text x="411.0" y="226.0" textAnchor="middle">5</text>
<text x="445.0" y="226.0" textAnchor="middle">6</text>
<text x="479.0" y="226.0" textAnchor="middle">7</text>
<text x="236.0" y="383.5" textAnchor="end">-5</text>
<text x="236.0" y="349.5" textAnchor="end">-4</text>
<text x="236.0" y="315.5" textAnchor="end">-3</text>
<text x="236.0" y="281.5" textAnchor="end">-2</text>
<text x="236.0" y="247.5" textAnchor="end">-1</text>
<text x="236.0" y="179.5" textAnchor="end">1</text>
<text x="236.0" y="145.5" textAnchor="end">2</text>
<text x="236.0" y="111.5" textAnchor="end">3</text>
<text x="236.0" y="77.5" textAnchor="end">4</text>
<text x="236.0" y="43.5" textAnchor="end">5</text>
<text x="236.0" y="226.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<circle cx="312.0" cy="312.0" r="4" fill="#e11d48"/>
<text x="322.0" y="327.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">A</text>
<line x1="312.0" y1="312.0" x2="312.0" y2="210.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<line x1="312.0" y1="312.0" x2="244.0" y2="312.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<circle cx="312.0" cy="74.0" r="4" fill="#2563eb"/>
<text x="322.0" y="64.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#2563eb">B</text>
<line x1="312.0" y1="74.0" x2="312.0" y2="210.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<line x1="312.0" y1="74.0" x2="244.0" y2="74.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<circle cx="210.0" cy="142.0" r="4" fill="#059669"/>
<text x="193.0" y="134.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#059669">C</text>
<line x1="210.0" y1="142.0" x2="210.0" y2="210.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<line x1="210.0" y1="142.0" x2="244.0" y2="142.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<circle cx="142.0" cy="176.0" r="4" fill="#d97706"/>
<text x="132.0" y="164.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#d97706">D</text>
<line x1="142.0" y1="176.0" x2="142.0" y2="210.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<line x1="142.0" y1="176.0" x2="244.0" y2="176.0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
<circle cx="244.0" cy="346.0" r="4" fill="#7c3aed"/>
<text x="253.0" y="351.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#7c3aed">E</text>
<circle cx="346.0" cy="210.0" r="4" fill="#0284c7"/>
<text x="340.0" y="199.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#0284c7">F</text>
</svg>
      </LessonSection>

      <LessonSection
        kicker="03 · Milieu d'un segment"
        title="Le milieu d'un segment"
        tone="light"
        description="La moyenne des abscisses, la moyenne des ordonnées. Rien de plus."
      >
        <SubHeading>a) Définition</SubHeading>
        <Box label="définition">
          <p>
            Soient <Math tex="A" /> et <Math tex="B" /> deux points distincts du plan rapporté à un repère
            orthonormé <Math tex="(O;I;J)" />. Les coordonnées du point <Math tex="M" /> milieu du segment{" "}
            <Math tex="[AB]" /> sont :
          </p>
        </Box>
        <div className="mt-4">
          <FormulaBlock
            tex="x_M = \dfrac{x_A+x_B}{2} \quad \text{et} \quad y_M = \dfrac{y_A+y_B}{2}"
            caption={<>on écrit <Math tex="M\!\left(\dfrac{x_A+x_B}{2}\,;\,\dfrac{y_A+y_B}{2}\right)" /></>}
          />
        </div>

        <SubHeading>b) Exemple</SubHeading>
        <p className="mb-3 text-sm text-foreground-muted">
          Soient <Math tex="A(-2;6)" />, <Math tex="B(4;-8)" /> et <Math tex="E" /> trois points du plan rapporté à
          un repère orthonormé tels que <Math tex="E" /> est le milieu du segment <Math tex="[AB]" />. Déterminons
          les coordonnées du point <Math tex="E" />.
        </p>
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Box tone="example">
            <p>
              On a : <Math tex="\begin{cases} x_E = \dfrac{x_A+x_B}{2} = \dfrac{-2+4}{2} = \dfrac{2}{2} = 1 \\[6px] y_E = \dfrac{y_A+y_B}{2} = \dfrac{6-8}{2} = \dfrac{-2}{2} = -1 \end{cases}" />
            </p>
            <p className="font-semibold text-blue-700">
              D&apos;où : <Math tex="E(1;-1)" />
            </p>
          </Box>

          <svg viewBox="0 0 240 400" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="360.0" x2="40.0" y2="40.0"/>
<line x1="60.0" y1="360.0" x2="60.0" y2="40.0"/>
<line x1="80.0" y1="360.0" x2="80.0" y2="40.0"/>
<line x1="100.0" y1="360.0" x2="100.0" y2="40.0"/>
<line x1="120.0" y1="360.0" x2="120.0" y2="40.0"/>
<line x1="140.0" y1="360.0" x2="140.0" y2="40.0"/>
<line x1="160.0" y1="360.0" x2="160.0" y2="40.0"/>
<line x1="180.0" y1="360.0" x2="180.0" y2="40.0"/>
<line x1="200.0" y1="360.0" x2="200.0" y2="40.0"/>
<line x1="40.0" y1="360.0" x2="200.0" y2="360.0"/>
<line x1="40.0" y1="340.0" x2="200.0" y2="340.0"/>
<line x1="40.0" y1="320.0" x2="200.0" y2="320.0"/>
<line x1="40.0" y1="300.0" x2="200.0" y2="300.0"/>
<line x1="40.0" y1="280.0" x2="200.0" y2="280.0"/>
<line x1="40.0" y1="260.0" x2="200.0" y2="260.0"/>
<line x1="40.0" y1="240.0" x2="200.0" y2="240.0"/>
<line x1="40.0" y1="220.0" x2="200.0" y2="220.0"/>
<line x1="40.0" y1="200.0" x2="200.0" y2="200.0"/>
<line x1="40.0" y1="180.0" x2="200.0" y2="180.0"/>
<line x1="40.0" y1="160.0" x2="200.0" y2="160.0"/>
<line x1="40.0" y1="140.0" x2="200.0" y2="140.0"/>
<line x1="40.0" y1="120.0" x2="200.0" y2="120.0"/>
<line x1="40.0" y1="100.0" x2="200.0" y2="100.0"/>
<line x1="40.0" y1="80.0" x2="200.0" y2="80.0"/>
<line x1="40.0" y1="60.0" x2="200.0" y2="60.0"/>
<line x1="40.0" y1="40.0" x2="200.0" y2="40.0"/>
</g>
<line x1="26.0" y1="180.0" x2="218.0" y2="180.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="220.0" y="185.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="100.0" y1="374.0" x2="100.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="86.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="196.0" textAnchor="middle">-3</text>
<text x="57.0" y="196.0" textAnchor="middle">-2</text>
<text x="77.0" y="196.0" textAnchor="middle">-1</text>
<text x="117.0" y="196.0" textAnchor="middle">1</text>
<text x="137.0" y="196.0" textAnchor="middle">2</text>
<text x="157.0" y="196.0" textAnchor="middle">3</text>
<text x="177.0" y="196.0" textAnchor="middle">4</text>
<text x="197.0" y="196.0" textAnchor="middle">5</text>
<text x="92.0" y="363.5" textAnchor="end">-9</text>
<text x="92.0" y="343.5" textAnchor="end">-8</text>
<text x="92.0" y="323.5" textAnchor="end">-7</text>
<text x="92.0" y="303.5" textAnchor="end">-6</text>
<text x="92.0" y="283.5" textAnchor="end">-5</text>
<text x="92.0" y="263.5" textAnchor="end">-4</text>
<text x="92.0" y="243.5" textAnchor="end">-3</text>
<text x="92.0" y="223.5" textAnchor="end">-2</text>
<text x="92.0" y="203.5" textAnchor="end">-1</text>
<text x="92.0" y="163.5" textAnchor="end">1</text>
<text x="92.0" y="143.5" textAnchor="end">2</text>
<text x="92.0" y="123.5" textAnchor="end">3</text>
<text x="92.0" y="103.5" textAnchor="end">4</text>
<text x="92.0" y="83.5" textAnchor="end">5</text>
<text x="92.0" y="63.5" textAnchor="end">6</text>
<text x="92.0" y="43.5" textAnchor="end">7</text>
<text x="92.0" y="196.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="60.0" y1="60.0" x2="180.0" y2="340.0" stroke="#1e293b" strokeWidth="1.6"/>
<circle cx="60.0" cy="60.0" r="4" fill="#2563eb"/>
<text x="43.0" y="52.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#2563eb">A</text>
<circle cx="180.0" cy="340.0" r="4" fill="#e11d48"/>
<text x="190.0" y="350.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">B</text>
<circle cx="120.0" cy="200.0" r="4" fill="#059669"/>
<text x="130.0" y="194.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#059669">E</text>
</svg>
        </div>

        <Practice
          solution={
            <>
              <p className="font-medium">
                1) Déterminons le couple des coordonnées du point <Math tex="E" /> :
              </p>
              <p>
                <Math tex="E" /> le milieu du segment <Math tex="[AB]" /> signifie que :{" "}
                <Math tex="\begin{cases} x_E = \dfrac{x_A+x_B}{2} = \dfrac{2+3}{2} = \dfrac{5}{2} \\[6px] y_E = \dfrac{y_A+y_B}{2} = \dfrac{-4+1}{2} = \dfrac{-3}{2} \end{cases}" />
              </p>
              <p className="font-semibold text-emerald-700">
                D&apos;où : <Math tex="E\!\left(\dfrac{5}{2}\,;\,\dfrac{-3}{2}\right)" />.
              </p>
              <p className="mt-3 font-medium">
                2) Montrons que <Math tex="F(0;-1)" /> est le milieu du segment <Math tex="[AC]" /> :
              </p>
              <p>
                On calcule : <Math tex="\dfrac{x_A+x_C}{2} = \dfrac{2-2}{2} = 0" /> et{" "}
                <Math tex="\dfrac{y_A+y_C}{2} = \dfrac{-4+2}{2} = \dfrac{-2}{2} = -1" />.
              </p>
              <p>
                Or <Math tex="F(0;-1)" />, c&apos;est-à-dire <Math tex="x_F=0=\dfrac{x_A+x_C}{2}" /> et{" "}
                <Math tex="y_F=-1=\dfrac{y_A+y_C}{2}" />.
              </p>
              <p className="font-semibold text-emerald-700">
                D&apos;où : <Math tex="F(0;-1)" /> est bien le milieu du segment <Math tex="[AC]" />.
              </p>
            </>
          }
        >
          <p>
            Dans le plan rapporté à un repère orthonormé, on considère les points <Math tex="A(2;-4)" /> ;{" "}
            <Math tex="B(3;1)" /> et <Math tex="C(-2;2)" />.
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              Déterminer le couple des coordonnées du point <Math tex="E" /> le milieu du segment <Math tex="[AB]" />.
            </li>
            <li>
              Montrer (ou vérifier) que le point <Math tex="F(0;-1)" /> est le milieu du segment <Math tex="[AC]" />.
            </li>
          </ol>
        </Practice>
      </LessonSection>

      {/* ===================== II. COORDONNÉES D'UN VECTEUR ===================== */}

      <LessonSection
        id="vecteurs"
        kicker="04 · Définition d'un vecteur"
        title="Les coordonnées d'un vecteur"
        tone="light"
        description="Un vecteur AB, ce sont deux soustractions : l'arrivée moins le départ, sur chaque axe."
      >
        <Box label="définition">
          <p>
            <Math tex="A" /> et <Math tex="B" /> deux points distincts du plan rapporté à un repère orthonormé{" "}
            <Math tex="(O;I;J)" />. Les coordonnées du vecteur <Math tex="\overrightarrow{AB}" /> sont :{" "}
            <Math tex="x_B - x_A" /> et <Math tex="y_B - y_A" />.
          </p>
          <p>
            On écrit : <Math tex="\overrightarrow{AB}\big(x_B-x_A\,;\,y_B-y_A\big)" />.
          </p>
        </Box>

        <Practice
          diagram={
            <svg viewBox="0 0 284 420" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="380.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="380.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="380.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="380.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="380.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="380.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="380.0" x2="244.0" y2="40.0"/>
<line x1="40.0" y1="380.0" x2="244.0" y2="380.0"/>
<line x1="40.0" y1="346.0" x2="244.0" y2="346.0"/>
<line x1="40.0" y1="312.0" x2="244.0" y2="312.0"/>
<line x1="40.0" y1="278.0" x2="244.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="244.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="244.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="244.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="244.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="244.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="244.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="244.0" y2="40.0"/>
</g>
<line x1="26.0" y1="210.0" x2="262.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="264.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="108.0" y1="394.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="94.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="226.0" textAnchor="middle">-2</text>
<text x="71.0" y="226.0" textAnchor="middle">-1</text>
<text x="139.0" y="226.0" textAnchor="middle">1</text>
<text x="173.0" y="226.0" textAnchor="middle">2</text>
<text x="207.0" y="226.0" textAnchor="middle">3</text>
<text x="241.0" y="226.0" textAnchor="middle">4</text>
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
<line x1="176.0" y1="108.0" x2="74.0" y2="346.0" stroke="#2563eb" strokeWidth="2.4" markerEnd="url(#arr-blue)"/>
<line x1="176.0" y1="108.0" x2="210.0" y2="142.0" stroke="#e11d48" strokeWidth="2.4" markerEnd="url(#arr-rose)"/>
<line x1="176.0" y1="108.0" x2="210.0" y2="74.0" stroke="#059669" strokeWidth="2.4" markerEnd="url(#arr-emerald)"/>
<circle cx="176.0" cy="108.0" r="4" fill="#1e293b"/>
<text x="184.0" y="99.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="74.0" cy="346.0" r="4" fill="#1e293b"/>
<text x="57.0" y="357.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="210.0" cy="142.0" r="4" fill="#1e293b"/>
<text x="219.0" y="134.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="210.0" cy="74.0" r="4" fill="#059669"/>
<text x="219.0" y="66.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#059669">E</text>
</svg>
          }
          solution={
            <>
              <p className="font-medium">
                1) Déterminons les coordonnées du vecteur <Math tex="\overrightarrow{AB}" /> :
              </p>
              <p>
                On a : <Math tex="\begin{cases} x_B - x_A = -1-2 = -3 \\ y_B - y_A = -4-3 = -7 \end{cases}" /> d&apos;où :{" "}
                <Math tex="\overrightarrow{AB}(-3;-7)" />.
              </p>
              <p className="mt-3 font-medium">
                2) Montrons que <Math tex="\overrightarrow{AC}(1;-1)" /> :
              </p>
              <p>
                On a <Math tex="\overrightarrow{AC}(x_C-x_A\,;\,y_C-y_A)" />, c&apos;est-à-dire{" "}
                <Math tex="\overrightarrow{AC}(3-2\,;\,2-3)" />, d&apos;où <Math tex="\overrightarrow{AC}(1;-1)" />.
              </p>
              <p className="mt-3 font-medium">
                3) Déterminons les coordonnées du point <Math tex="E" /> tel que <Math tex="\overrightarrow{AE}(1;1)" /> :
              </p>
              <p>
                <Math tex="\overrightarrow{AE}(1;1)" /> signifie que :{" "}
                <Math tex="\begin{cases} x_E - x_A = 1 \\ y_E - y_A = 1 \end{cases}" /> c&apos;est-à-dire{" "}
                <Math tex="\begin{cases} x_E = 1+2 \\ y_E = 1+3 \end{cases}" />
              </p>
              <p className="font-semibold text-emerald-700">
                D&apos;où : <Math tex="E(3;4)" />.
              </p>
            </>
          }
        >
          <p>
            Soient <Math tex="A(2;3)" /> ; <Math tex="B(-1;-4)" /> et <Math tex="C(3;2)" /> trois points du plan
            rapporté à un repère orthonormé <Math tex="(O;I;J)" />.
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" />.
            </li>
            <li>
              Montrer que : <Math tex="\overrightarrow{AC}(1;-1)" />.
            </li>
            <li>
              Déterminer les coordonnées du point <Math tex="E" /> sachant que <Math tex="\overrightarrow{AE}(1;1)" />.
            </li>
          </ol>
        </Practice>
      </LessonSection>

      <LessonSection
        kicker="05 · Égalité de deux vecteurs"
        title="Égalité de deux vecteurs"
        tone="light"
        description="Deux vecteurs sont égaux quand leurs coordonnées le sont, terme à terme."
      >
        <SubHeading>a) Propriété</SubHeading>
        <Box label="propriété">
          <p>
            <Math tex="\overrightarrow{AB}(a;b)" /> et <Math tex="\overrightarrow{CD}(c;d)" /> deux vecteurs non
            nuls.
          </p>
          <p>
            <Math tex="\overrightarrow{AB}=\overrightarrow{CD}" /> est équivalent à <Math tex="a=c" /> et{" "}
            <Math tex="b=d" />.
          </p>
        </Box>

        <SubHeading>b) Exemple</SubHeading>
        <p className="mb-3 text-sm text-foreground-muted">
          Soient <Math tex="A(2;3)" /> ; <Math tex="B(-2;4)" /> ; <Math tex="C(-1;2)" /> et <Math tex="D(3;1)" /> des
          points du plan rapporté à un repère orthonormé. Comparons les vecteurs <Math tex="\overrightarrow{AB}" />{" "}
          et <Math tex="\overrightarrow{DC}" /> :
        </p>
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Box tone="example">
            <p>
              On a :{" "}
              <Math tex="\begin{cases} \overrightarrow{AB}(x_B-x_A\,;\,y_B-y_A) \\ \overrightarrow{DC}(x_C-x_D\,;\,y_C-y_D) \end{cases}" />
            </p>
            <p>
              c&apos;est-à-dire :{" "}
              <Math tex="\begin{cases} \overrightarrow{AB}(-2-2\,;\,4-3) \\ \overrightarrow{DC}(-1-3\,;\,2-1) \end{cases}" />
            </p>
            <p>
              <Math tex="\begin{cases} \overrightarrow{AB}(-4;3) \\ \overrightarrow{DC}(-4;3) \end{cases}" />
            </p>
            <p className="font-semibold text-cyan-700">
              D&apos;où : <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />
            </p>
          </Box>

          <svg viewBox="0 0 318 250" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="210.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="210.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="210.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="210.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="210.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="210.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="210.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="210.0" x2="278.0" y2="40.0"/>
<line x1="40.0" y1="210.0" x2="278.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="278.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="278.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="278.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="278.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="278.0" y2="40.0"/>
</g>
<line x1="26.0" y1="210.0" x2="296.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="298.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="142.0" y1="224.0" x2="142.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="128.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="226.0" textAnchor="middle">-3</text>
<text x="71.0" y="226.0" textAnchor="middle">-2</text>
<text x="105.0" y="226.0" textAnchor="middle">-1</text>
<text x="173.0" y="226.0" textAnchor="middle">1</text>
<text x="207.0" y="226.0" textAnchor="middle">2</text>
<text x="241.0" y="226.0" textAnchor="middle">3</text>
<text x="275.0" y="226.0" textAnchor="middle">4</text>
<text x="134.0" y="179.5" textAnchor="end">1</text>
<text x="134.0" y="145.5" textAnchor="end">2</text>
<text x="134.0" y="111.5" textAnchor="end">3</text>
<text x="134.0" y="77.5" textAnchor="end">4</text>
<text x="134.0" y="43.5" textAnchor="end">5</text>
<text x="134.0" y="226.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="210.0" y1="108.0" x2="74.0" y2="74.0" stroke="#2563eb" strokeWidth="2.6" markerEnd="url(#arr-blue)"/>
<line x1="244.0" y1="176.0" x2="108.0" y2="142.0" stroke="#e11d48" strokeWidth="2.6" markerEnd="url(#arr-rose)"/>
<circle cx="210.0" cy="108.0" r="4" fill="#1e293b"/>
<text x="218.0" y="100.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="74.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="65.0" y="64.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="108.0" cy="142.0" r="4" fill="#1e293b"/>
<text x="91.0" y="152.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="244.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="253.0" y="190.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">D</text>
</svg>
        </div>

        <Practice
          solution={
            <>
              <p>
                On a : <Math tex="\overrightarrow{AB}=\overrightarrow{CD}" /> signifie que :{" "}
                <Math tex="\begin{cases} x_B - x_A = x_D - x_C \\ y_B - y_A = y_D - y_C \end{cases}" />
              </p>
              <p>
                c&apos;est-à-dire :{" "}
                <Math tex="\begin{cases} 4-2 = x_D + 6 \\ -1+2 = y_D + 2 \end{cases}" />{" "}
                <Math tex="\begin{cases} 2 = x_D + 6 \\ 1 = y_D + 2 \end{cases}" />{" "}
                <Math tex="\begin{cases} x_D = 2-6 \\ y_D = 1-2 \end{cases}" />
              </p>
              <p className="font-semibold text-emerald-700">
                D&apos;où : <Math tex="D(-4;-1)" />.
              </p>
            </>
          }
        >
          <p>
            Dans le plan rapporté à un repère orthonormé, on considère les points : <Math tex="A(2;-2)" /> ;{" "}
            <Math tex="B(4;-1)" /> ; <Math tex="C(-6;-2)" /> et <Math tex="D" />.
          </p>
          <p>
            Déterminer le couple des coordonnées du point <Math tex="D" /> tel que :{" "}
            <Math tex="\overrightarrow{AB}=\overrightarrow{CD}" />.
          </p>
        </Practice>
      </LessonSection>

      <LessonSection
        kicker="06 · Somme de deux vecteurs"
        title="Somme de deux vecteurs"
        tone="light"
        description="On additionne les vecteurs coordonnée par coordonnée, exactement comme pour des points."
      >
        <Box label="propriété">
          <p>
            Si <Math tex="\overrightarrow{AB}(a;b)" /> et <Math tex="\overrightarrow{CD}(c;d)" /> sont deux
            vecteurs, alors :
          </p>
        </Box>
        <div className="mt-4">
          <FormulaBlock tex="\overrightarrow{AB}+\overrightarrow{CD}\,\big(a+c\,;\,b+d\big)" />
        </div>

        <SubHeading>b) Exemple</SubHeading>
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Box tone="example">
            <p>
              Soient <Math tex="\overrightarrow{AB}(-1;2)" /> et <Math tex="\overrightarrow{EF}(4;3)" /> deux
              vecteurs. Cherchons les coordonnées du vecteur <Math tex="\overrightarrow{AB}+\overrightarrow{EF}" /> :
            </p>
            <p>
              On a : <Math tex="\overrightarrow{AB}+\overrightarrow{EF}\,(-1+4\,;\,2+3)" />.
            </p>
            <p className="font-semibold text-cyan-700">
              D&apos;où : <Math tex="\overrightarrow{AB}+\overrightarrow{EF}\,(3;5)" />
            </p>
          </Box>

          <svg viewBox="0 0 318 318" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="278.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="278.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="278.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="278.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="278.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="278.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="278.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="278.0" x2="278.0" y2="40.0"/>
<line x1="40.0" y1="278.0" x2="278.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="278.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="278.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="278.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="278.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="278.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="278.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="278.0" y2="40.0"/>
</g>
<line x1="26.0" y1="244.0" x2="296.0" y2="244.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="298.0" y="249.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="108.0" y1="292.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="94.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="260.0" textAnchor="middle">-2</text>
<text x="71.0" y="260.0" textAnchor="middle">-1</text>
<text x="139.0" y="260.0" textAnchor="middle">1</text>
<text x="173.0" y="260.0" textAnchor="middle">2</text>
<text x="207.0" y="260.0" textAnchor="middle">3</text>
<text x="241.0" y="260.0" textAnchor="middle">4</text>
<text x="275.0" y="260.0" textAnchor="middle">5</text>
<text x="100.0" y="281.5" textAnchor="end">-1</text>
<text x="100.0" y="213.5" textAnchor="end">1</text>
<text x="100.0" y="179.5" textAnchor="end">2</text>
<text x="100.0" y="145.5" textAnchor="end">3</text>
<text x="100.0" y="111.5" textAnchor="end">4</text>
<text x="100.0" y="77.5" textAnchor="end">5</text>
<text x="100.0" y="43.5" textAnchor="end">6</text>
<text x="100.0" y="260.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="108.0" y1="244.0" x2="74.0" y2="176.0" stroke="#2563eb" strokeWidth="2.4" markerEnd="url(#arr-blue)"/>
<line x1="74.0" y1="176.0" x2="210.0" y2="74.0" stroke="#e11d48" strokeWidth="2.4" markerEnd="url(#arr-rose)"/>
<line x1="108.0" y1="244.0" x2="210.0" y2="74.0" stroke="#059669" strokeWidth="2.4" strokeDasharray="5 4" markerEnd="url(#arr-emerald)"/>
<circle cx="108.0" cy="244.0" r="4" fill="#1e293b"/>
<text x="94.0" y="258.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="74.0" cy="176.0" r="4" fill="#2563eb"/>
<text x="57.0" y="170.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#2563eb">B</text>
<circle cx="74.0" cy="176.0" r="0" fill="#2563eb"/>
<text x="74.0" y="176.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#2563eb">E</text>
<circle cx="210.0" cy="74.0" r="4" fill="#e11d48"/>
<text x="219.0" y="68.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">F</text>
</svg>
        </div>
      </LessonSection>

      <LessonSection
        kicker="07 · Produit par un réel"
        title="Produit d'un vecteur par un nombre réel"
        tone="light"
        description="On multiplie chaque coordonnée par le même nombre k."
      >
        <Box label="propriété">
          <p>
            Si <Math tex="\overrightarrow{AB}(a;b)" /> est un vecteur et <Math tex="k" /> un nombre réel, alors :
          </p>
        </Box>
        <div className="mt-4">
          <FormulaBlock tex="k\times\overrightarrow{AB}\,\big(k\times a\,;\,k\times b\big)" />
        </div>

        <SubHeading>b) Exemple</SubHeading>
        <Box tone="example">
          <p>
            Soit <Math tex="\overrightarrow{AB}(-5;2)" /> un vecteur. Cherchons les coordonnées du vecteur{" "}
            <Math tex="-3\overrightarrow{AB}" /> :
          </p>
          <p>
            On a : <Math tex="\overrightarrow{AB}(-5;2)" />, donc :{" "}
            <Math tex="-3\times\overrightarrow{AB}\,\big(-3\times(-5)\,;\,-3\times 2\big)" />
          </p>
          <p className="font-semibold text-cyan-700">
            D&apos;où : <Math tex="-3\overrightarrow{AB}\,(15;-6)" />
          </p>
        </Box>
      </LessonSection>

      <LessonSection
        kicker="08 · Distance entre deux points"
        title="La distance entre deux points"
        tone="light"
        description="Le théorème de Pythagore, appliqué aux coordonnées."
      >
        <SubHeading>a) Propriété (1)</SubHeading>
        <Box label="propriété">
          <p>Si <Math tex="A" /> et <Math tex="B" /> sont deux points du plan rapporté à un repère orthonormé, alors :</p>
        </Box>
        <div className="mt-4">
          <FormulaBlock tex="AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}" />
        </div>

        <SubHeading>Exemple</SubHeading>
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Box tone="example">
            <p>
              Soient <Math tex="A(-1;4)" /> et <Math tex="B(6;2)" /> deux points du plan rapporté à un repère
              orthonormé.
            </p>
            <p>
              <Math tex="AB=\sqrt{(6-(-1))^2+(2-4)^2}=\sqrt{7^2+(-2)^2}=\sqrt{49+4}" />
            </p>
            <p className="font-semibold text-cyan-700">
              D&apos;où : <Math tex="AB=\sqrt{53}" />
            </p>
          </Box>

          <svg viewBox="0 0 386 284" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="244.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="244.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="244.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="244.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="244.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="244.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="244.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="244.0" x2="278.0" y2="40.0"/>
<line x1="312.0" y1="244.0" x2="312.0" y2="40.0"/>
<line x1="346.0" y1="244.0" x2="346.0" y2="40.0"/>
<line x1="40.0" y1="244.0" x2="346.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="346.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="346.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="346.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="346.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="346.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="346.0" y2="40.0"/>
</g>
<line x1="26.0" y1="210.0" x2="364.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="366.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="108.0" y1="258.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="94.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="226.0" textAnchor="middle">-2</text>
<text x="71.0" y="226.0" textAnchor="middle">-1</text>
<text x="139.0" y="226.0" textAnchor="middle">1</text>
<text x="173.0" y="226.0" textAnchor="middle">2</text>
<text x="207.0" y="226.0" textAnchor="middle">3</text>
<text x="241.0" y="226.0" textAnchor="middle">4</text>
<text x="275.0" y="226.0" textAnchor="middle">5</text>
<text x="309.0" y="226.0" textAnchor="middle">6</text>
<text x="343.0" y="226.0" textAnchor="middle">7</text>
<text x="100.0" y="247.5" textAnchor="end">-1</text>
<text x="100.0" y="179.5" textAnchor="end">1</text>
<text x="100.0" y="145.5" textAnchor="end">2</text>
<text x="100.0" y="111.5" textAnchor="end">3</text>
<text x="100.0" y="77.5" textAnchor="end">4</text>
<text x="100.0" y="43.5" textAnchor="end">5</text>
<text x="100.0" y="226.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="74.0" y1="74.0" x2="312.0" y2="142.0" stroke="#2563eb" strokeWidth="2.4"/>
<circle cx="74.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="66.0" y="64.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="312.0" cy="142.0" r="4" fill="#1e293b"/>
<text x="321.0" y="146.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
</svg>
        </div>

        <SubHeading>b) Propriété (2)</SubHeading>
        <Box label="propriété">
          <p>Si <Math tex="\overrightarrow{AB}(a;b)" /> est un vecteur du plan rapporté à un repère orthonormé, alors :</p>
        </Box>
        <div className="mt-4">
          <FormulaBlock tex="AB=\sqrt{a^2+b^2}" />
        </div>

        <SubHeading>Exemple</SubHeading>
        <Box tone="example">
          <p>
            Soit <Math tex="\overrightarrow{AB}(-1;4)" /> un vecteur. On a :{" "}
            <Math tex="AB=\sqrt{(-1)^2+4^2}=\sqrt{1+16}" />
          </p>
          <p className="font-semibold text-cyan-700">
            D&apos;où : <Math tex="AB=\sqrt{17}" />
          </p>
        </Box>

        <Practice
          solution={
            <>
              <p className="font-medium">
                Calculons <Math tex="AB" /> :
              </p>
              <p>
                <Math tex="AB=\sqrt{3^2+4^2}=\sqrt{9+16}=\sqrt{25}" />
              </p>
              <p className="font-semibold text-emerald-700">
                D&apos;où : <Math tex="AB=5" />.
              </p>
              <p className="mt-3 font-medium">
                Calculons <Math tex="EF" /> :
              </p>
              <p>
                <Math tex="EF=\sqrt{(x_F-x_E)^2+(y_F-y_E)^2}=\sqrt{(0-3)^2+(-2-1)^2}=\sqrt{(-3)^2+(-3)^2}=\sqrt{9+9}=\sqrt{18}" />
              </p>
              <p className="font-semibold text-emerald-700">
                D&apos;où : <Math tex="EF=3\sqrt{2}" />.
              </p>
            </>
          }
        >
          <p>
            Soient <Math tex="\overrightarrow{AB}(3;4)" /> un vecteur, <Math tex="E(3;1)" /> et{" "}
            <Math tex="F(0;-2)" /> deux points.
          </p>
          <p>
            Calculer <Math tex="AB" /> puis <Math tex="EF" />.
          </p>
        </Practice>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}

      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="Exercices N°9"
        tone="muted"
        description="11 exercices (dont des sujets d'examens régionaux) : cherche d'abord seul(e), puis clique pour vérifier."
      >
        <ExerciseGroup
          total={11}
          celebrationTitle="Bravo, les 11 exercices sont vérifiés !"
          celebrationSubtitle="Le repère dans le plan n'a plus de secret pour toi."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Distances et milieux d'un triangle"
            items={
              <div className="space-y-3">
                <p>
                  On considère un repère orthonormé <Math tex="(O;I;J)" /> tel que : <Math tex="A(2;2)" /> ;{" "}
                  <Math tex="B(-1;-1)" /> et <Math tex="C(4;-1)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Placer les points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" />.
                  </li>
                  <li>
                    Déterminer la longueur <Math tex="AB" /> et la longueur <Math tex="AC" />.
                  </li>
                  <li>
                    Déterminer les coordonnées des points <Math tex="E" />, <Math tex="F" /> et <Math tex="G" /> les
                    milieux respectifs des segments <Math tex="[AB]" />, <Math tex="[AC]" /> et <Math tex="[BC]" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <svg viewBox="0 0 318 250" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="210.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="210.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="210.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="210.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="210.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="210.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="210.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="210.0" x2="278.0" y2="40.0"/>
<line x1="40.0" y1="210.0" x2="278.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="278.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="278.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="278.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="278.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="278.0" y2="40.0"/>
</g>
<line x1="26.0" y1="142.0" x2="296.0" y2="142.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="298.0" y="147.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="108.0" y1="224.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="94.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="158.0" textAnchor="middle">-2</text>
<text x="71.0" y="158.0" textAnchor="middle">-1</text>
<text x="139.0" y="158.0" textAnchor="middle">1</text>
<text x="173.0" y="158.0" textAnchor="middle">2</text>
<text x="207.0" y="158.0" textAnchor="middle">3</text>
<text x="241.0" y="158.0" textAnchor="middle">4</text>
<text x="275.0" y="158.0" textAnchor="middle">5</text>
<text x="100.0" y="213.5" textAnchor="end">-2</text>
<text x="100.0" y="179.5" textAnchor="end">-1</text>
<text x="100.0" y="111.5" textAnchor="end">1</text>
<text x="100.0" y="77.5" textAnchor="end">2</text>
<text x="100.0" y="43.5" textAnchor="end">3</text>
<text x="100.0" y="158.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<polygon points="176.0,74.0 74.0,176.0 244.0,176.0" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.3" opacity="0.5"/>
<circle cx="176.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="184.0" y="65.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="74.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="65.0" y="192.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="244.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="253.0" y="186.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="125.0" cy="125.0" r="4" fill="#2563eb"/>
<text x="108.0" y="121.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#2563eb">E</text>
<circle cx="210.0" cy="125.0" r="4" fill="#059669"/>
<text x="219.0" y="121.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#059669">F</text>
<circle cx="159.0" cy="176.0" r="4" fill="#e11d48"/>
<text x="153.0" y="193.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">G</text>
</svg>
                  <div className="space-y-2">
                    <p>
                      <strong>2)</strong>{" "}
                      <Math tex="AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}=\sqrt{(-1-2)^2+(-1-2)^2}=\sqrt{9+9}=\sqrt{18}" />
                    </p>
                    <p className="font-semibold text-emerald-700">
                      D&apos;où : <Math tex="AB=3\sqrt{2}" />
                    </p>
                    <p>
                      <Math tex="AC=\sqrt{(4-2)^2+(-1-2)^2}=\sqrt{4+9}=\sqrt{13}" />
                    </p>
                    <p className="font-semibold text-emerald-700">
                      D&apos;où : <Math tex="AC=\sqrt{13}" />
                    </p>
                  </div>
                </div>
                <Note>
                  <p>
                    <strong>3)</strong> <Math tex="E" /> milieu de <Math tex="[AB]" /> :{" "}
                    <Math tex="x_E=\dfrac{2-1}{2}=\dfrac12" /> ; <Math tex="y_E=\dfrac{2-1}{2}=\dfrac12" /> →{" "}
                    <Math tex="E\!\left(\dfrac12;\dfrac12\right)" />
                  </p>
                  <p>
                    <Math tex="F" /> milieu de <Math tex="[AC]" /> : <Math tex="x_F=\dfrac{2+4}{2}=3" /> ;{" "}
                    <Math tex="y_F=\dfrac{2-1}{2}=\dfrac12" /> → <Math tex="F\!\left(3;\dfrac12\right)" />
                  </p>
                  <p>
                    <Math tex="G" /> milieu de <Math tex="[BC]" /> : <Math tex="x_G=\dfrac{-1+4}{2}=\dfrac32" /> ;{" "}
                    <Math tex="y_G=\dfrac{-1-1}{2}=-1" /> → <Math tex="G\!\left(\dfrac32;-1\right)" />
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Symétrique d'un point"
            items={
              <div className="space-y-3">
                <p>
                  Soit <Math tex="A(-1;2)" /> et <Math tex="B(0;1)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Placer les points <Math tex="A" /> et <Math tex="B" /> dans un repère orthonormé{" "}
                    <Math tex="(O;I;J)" />.
                  </li>
                  <li>
                    Déterminer les coordonnées du point <Math tex="A'" /> symétrique de <Math tex="A" /> par
                    rapport à <Math tex="B" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="grid items-center gap-5 sm:grid-cols-2">
                <svg viewBox="0 0 216 216" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="176.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="176.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="176.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="176.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="176.0" x2="176.0" y2="40.0"/>
<line x1="40.0" y1="176.0" x2="176.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="176.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="176.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="176.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="176.0" y2="40.0"/>
</g>
<line x1="26.0" y1="142.0" x2="194.0" y2="142.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="196.0" y="147.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="108.0" y1="190.0" x2="108.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="94.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="158.0" textAnchor="middle">-2</text>
<text x="71.0" y="158.0" textAnchor="middle">-1</text>
<text x="139.0" y="158.0" textAnchor="middle">1</text>
<text x="173.0" y="158.0" textAnchor="middle">2</text>
<text x="100.0" y="179.5" textAnchor="end">-1</text>
<text x="100.0" y="111.5" textAnchor="end">1</text>
<text x="100.0" y="77.5" textAnchor="end">2</text>
<text x="100.0" y="43.5" textAnchor="end">3</text>
<text x="100.0" y="158.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="74.0" y1="74.0" x2="142.0" y2="142.0" stroke="#2563eb" strokeWidth="2"/>
<circle cx="74.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="66.0" y="64.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="108.0" cy="108.0" r="4" fill="#1e293b"/>
<text x="117.0" y="112.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="142.0" cy="142.0" r="4" fill="#e11d48"/>
<text x="151.0" y="152.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">A&apos;</text>
</svg>
                <div className="space-y-2 text-sm">
                  <p>
                    <Math tex="A'" /> symétrique de <Math tex="A" /> par rapport à <Math tex="B" /> signifie que{" "}
                    <Math tex="B" /> est le milieu du segment <Math tex="[AA']" />, donc :
                  </p>
                  <p>
                    <Math tex="\begin{cases} x_B = \dfrac{x_A+x_{A'}}{2} \\ y_B = \dfrac{y_A+y_{A'}}{2} \end{cases}" />{" "}
                    c&apos;est-à-dire{" "}
                    <Math tex="\begin{cases} 0 = \dfrac{-1+x_{A'}}{2} \\ 1 = \dfrac{2+y_{A'}}{2} \end{cases}" />
                  </p>
                  <p>
                    <Math tex="\begin{cases} x_{A'} = 1 \\ y_{A'} = 0 \end{cases}" />
                  </p>
                  <p className="font-semibold text-emerald-700">
                    D&apos;où : <Math tex="A'(1;0)" />
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Milieu et symétrique"
            items={
              <div className="space-y-3">
                <p>
                  Soit <Math tex="(O;I;J)" /> un repère orthonormé, tel que : <Math tex="A(1;1)" /> ;{" "}
                  <Math tex="C(2;4)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Placer les points <Math tex="A" /> et <Math tex="C" />.
                  </li>
                  <li>
                    Soit <Math tex="B" /> le milieu du segment <Math tex="[AC]" />.
                    <ol className="mt-1 ml-4 list-[lower-alpha] list-inside space-y-1">
                      <li>
                        Déterminer les coordonnées du point <Math tex="B" />.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Déterminer les coordonnées du point <Math tex="B'" /> symétrique de <Math tex="B" /> par
                    rapport à <Math tex="A" />.
                  </li>
                  <li>
                    Déterminer les coordonnées des vecteurs <Math tex="\overrightarrow{BC}" /> et{" "}
                    <Math tex="\overrightarrow{AB}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <svg viewBox="0 0 216 284" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="244.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="244.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="244.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="244.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="244.0" x2="176.0" y2="40.0"/>
<line x1="40.0" y1="244.0" x2="176.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="176.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="176.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="176.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="176.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="176.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="176.0" y2="40.0"/>
</g>
<line x1="26.0" y1="210.0" x2="194.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="196.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="74.0" y1="258.0" x2="74.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="60.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="226.0" textAnchor="middle">-1</text>
<text x="105.0" y="226.0" textAnchor="middle">1</text>
<text x="139.0" y="226.0" textAnchor="middle">2</text>
<text x="173.0" y="226.0" textAnchor="middle">3</text>
<text x="66.0" y="247.5" textAnchor="end">-1</text>
<text x="66.0" y="179.5" textAnchor="end">1</text>
<text x="66.0" y="145.5" textAnchor="end">2</text>
<text x="66.0" y="111.5" textAnchor="end">3</text>
<text x="66.0" y="77.5" textAnchor="end">4</text>
<text x="66.0" y="43.5" textAnchor="end">5</text>
<text x="66.0" y="226.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="108.0" y1="176.0" x2="142.0" y2="74.0" stroke="#1e293b" strokeWidth="1.6" strokeDasharray="5 4"/>
<line x1="91.0" y1="227.0" x2="125.0" y2="125.0" stroke="#e11d48" strokeWidth="1.8"/>
<circle cx="108.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="92.0" y="186.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="142.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="151.0" y="66.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="125.0" cy="125.0" r="4" fill="#2563eb"/>
<text x="134.0" y="119.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#2563eb">B</text>
<circle cx="91.0" cy="227.0" r="4" fill="#e11d48"/>
<text x="72.0" y="231.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">B&apos;</text>
</svg>
                  <div className="space-y-2">
                    <p>
                      <strong>2) a)</strong> <Math tex="B" /> milieu de <Math tex="[AC]" /> :{" "}
                      <Math tex="x_B=\dfrac{1+2}{2}=\dfrac32" /> ; <Math tex="y_B=\dfrac{1+4}{2}=\dfrac52" />
                    </p>
                    <p className="font-semibold text-emerald-700">
                      D&apos;où : <Math tex="B\!\left(\dfrac32;\dfrac52\right)" />
                    </p>
                    <p>
                      <strong>3)</strong> <Math tex="B'" /> symétrique de <Math tex="B" /> par rapport à{" "}
                      <Math tex="A" /> signifie que <Math tex="A" /> est le milieu de <Math tex="[BB']" /> :
                    </p>
                    <p>
                      <Math tex="x_{B'}=2x_A-x_B=2-\dfrac32=\dfrac12" /> ;{" "}
                      <Math tex="y_{B'}=2y_A-y_B=2-\dfrac52=-\dfrac12" />
                    </p>
                    <p className="font-semibold text-emerald-700">
                      D&apos;où : <Math tex="B'\!\left(\dfrac12;-\dfrac12\right)" />
                    </p>
                  </div>
                </div>
                <Note>
                  <p>
                    <strong>4)</strong>{" "}
                    <Math tex="\overrightarrow{BC}(x_C-x_B\,;\,y_C-y_B)=\left(2-\dfrac32\,;\,4-\dfrac52\right)=\left(\dfrac12\,;\,\dfrac32\right)" />
                  </p>
                  <p>
                    <Math tex="\overrightarrow{AB}(x_B-x_A\,;\,y_B-y_A)=\left(\dfrac32-1\,;\,\dfrac52-1\right)=\left(\dfrac12\,;\,\dfrac32\right)" />
                  </p>
                  <p className="text-xs text-foreground-muted">
                    On remarque que <Math tex="\overrightarrow{AB}=\overrightarrow{BC}" /> : c&apos;est cohérent
                    puisque <Math tex="B" /> est le milieu de <Math tex="[AC]" />.
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Translation et losange"
            items={
              <div className="space-y-3">
                <p>
                  On considère un repère orthonormé <Math tex="(O;I;J)" />. On donne : <Math tex="A(-3;6)" />,{" "}
                  <Math tex="B(4;5)" />, <Math tex="C(5;-2)" /> et <Math tex="D(-2;-1)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Construire les points <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> et <Math tex="D" />.
                  </li>
                  <li>
                    Calculer les coordonnées du milieu <Math tex="M" /> de <Math tex="[BD]" />.
                  </li>
                  <li>
                    Montrer que <Math tex="C" /> est l&apos;image de <Math tex="D" /> par la translation qui
                    transforme <Math tex="A" /> en <Math tex="B" />.
                  </li>
                  <li>
                    Calculer <Math tex="AB" />.
                  </li>
                  <li>
                    Démontrer que <Math tex="ABCD" /> est un losange.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <svg viewBox="0 0 420 420" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="380.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="380.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="380.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="380.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="380.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="380.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="380.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="380.0" x2="278.0" y2="40.0"/>
<line x1="312.0" y1="380.0" x2="312.0" y2="40.0"/>
<line x1="346.0" y1="380.0" x2="346.0" y2="40.0"/>
<line x1="380.0" y1="380.0" x2="380.0" y2="40.0"/>
<line x1="40.0" y1="380.0" x2="380.0" y2="380.0"/>
<line x1="40.0" y1="346.0" x2="380.0" y2="346.0"/>
<line x1="40.0" y1="312.0" x2="380.0" y2="312.0"/>
<line x1="40.0" y1="278.0" x2="380.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="380.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="380.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="380.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="380.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="380.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="380.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="380.0" y2="40.0"/>
</g>
<line x1="26.0" y1="278.0" x2="398.0" y2="278.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="400.0" y="283.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="176.0" y1="394.0" x2="176.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="162.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="294.0" textAnchor="middle">-4</text>
<text x="71.0" y="294.0" textAnchor="middle">-3</text>
<text x="105.0" y="294.0" textAnchor="middle">-2</text>
<text x="139.0" y="294.0" textAnchor="middle">-1</text>
<text x="207.0" y="294.0" textAnchor="middle">1</text>
<text x="241.0" y="294.0" textAnchor="middle">2</text>
<text x="275.0" y="294.0" textAnchor="middle">3</text>
<text x="309.0" y="294.0" textAnchor="middle">4</text>
<text x="343.0" y="294.0" textAnchor="middle">5</text>
<text x="377.0" y="294.0" textAnchor="middle">6</text>
<text x="168.0" y="383.5" textAnchor="end">-3</text>
<text x="168.0" y="349.5" textAnchor="end">-2</text>
<text x="168.0" y="315.5" textAnchor="end">-1</text>
<text x="168.0" y="247.5" textAnchor="end">1</text>
<text x="168.0" y="213.5" textAnchor="end">2</text>
<text x="168.0" y="179.5" textAnchor="end">3</text>
<text x="168.0" y="145.5" textAnchor="end">4</text>
<text x="168.0" y="111.5" textAnchor="end">5</text>
<text x="168.0" y="77.5" textAnchor="end">6</text>
<text x="168.0" y="43.5" textAnchor="end">7</text>
<text x="168.0" y="294.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<polygon points="74.0,74.0 312.0,108.0 346.0,346.0 108.0,312.0" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.3" opacity="0.55"/>
<line x1="74.0" y1="74.0" x2="108.0" y2="312.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<line x1="312.0" y1="108.0" x2="346.0" y2="346.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<circle cx="74.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="65.0" y="64.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="312.0" cy="108.0" r="4" fill="#1e293b"/>
<text x="321.0" y="100.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="346.0" cy="346.0" r="4" fill="#1e293b"/>
<text x="355.0" y="354.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="108.0" cy="312.0" r="4" fill="#1e293b"/>
<text x="99.0" y="328.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">D</text>
<circle cx="210.0" cy="210.0" r="4" fill="#e11d48"/>
<text x="220.0" y="214.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">M</text>
</svg>
                <Note>
                  <p>
                    <strong>2)</strong> <Math tex="M" /> milieu de <Math tex="[BD]" /> :{" "}
                    <Math tex="x_M=\dfrac{4-2}{2}=1" /> ; <Math tex="y_M=\dfrac{5-1}{2}=2" /> →{" "}
                    <Math tex="M(1;2)" />
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>3)</strong> La translation qui transforme <Math tex="A" /> en <Math tex="B" /> a pour
                    vecteur <Math tex="\overrightarrow{AB}(x_B-x_A\,;\,y_B-y_A)=(4+3\,;\,5-6)=(7;-1)" />.
                  </p>
                  <p>
                    L&apos;image de <Math tex="D" /> par cette translation est le point <Math tex="C" /> si, et
                    seulement si, <Math tex="\overrightarrow{DC}=\overrightarrow{AB}" />. Or{" "}
                    <Math tex="\overrightarrow{DC}(x_C-x_D\,;\,y_C-y_D)=(5+2\,;\,-2+1)=(7;-1)" />.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    Comme <Math tex="\overrightarrow{DC}=\overrightarrow{AB}=(7;-1)" />, <Math tex="C" /> est bien
                    l&apos;image de <Math tex="D" /> par la translation qui transforme <Math tex="A" /> en{" "}
                    <Math tex="B" />.
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>4)</strong> <Math tex="AB=\sqrt{7^2+(-1)^2}=\sqrt{49+1}=\sqrt{50}" />, d&apos;où{" "}
                    <Math tex="AB=5\sqrt2" />.
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>5)</strong> Puisque <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />, le
                    quadrilatère <Math tex="ABCD" /> est un parallélogramme (on peut aussi vérifier que{" "}
                    <Math tex="[AC]" /> et <Math tex="[BD]" /> ont le même milieu <Math tex="(1;2)" />).
                  </p>
                  <p>
                    Calculons <Math tex="AD" /> :{" "}
                    <Math tex="\overrightarrow{AD}(x_D-x_A\,;\,y_D-y_A)=(-2+3\,;\,-1-6)=(1;-7)" />, donc{" "}
                    <Math tex="AD=\sqrt{1^2+(-7)^2}=\sqrt{1+49}=\sqrt{50}=5\sqrt2" />.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    Comme <Math tex="AB=AD=5\sqrt2" /> (deux côtés consécutifs égaux) et <Math tex="ABCD" /> est un
                    parallélogramme, <Math tex="ABCD" /> est un losange.
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Parallélogramme et rectangle"
            items={
              <div className="space-y-3">
                <p>
                  On considère un repère orthonormé <Math tex="(O;I;J)" />. On donne : <Math tex="A(-3;2)" />,{" "}
                  <Math tex="B(3;5)" />, <Math tex="M\!\left(1;\dfrac32\right)" /> et <Math tex="D(-1;-2)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Construire les points <Math tex="A" />, <Math tex="B" />, <Math tex="M" /> et <Math tex="D" />.
                  </li>
                  <li>
                    Soit <Math tex="M" /> milieu de <Math tex="[AC]" /> ; calculer les coordonnées du point{" "}
                    <Math tex="C" />.
                  </li>
                  <li>
                    Montrer que le quadrilatère <Math tex="ABCD" /> est un parallélogramme.
                  </li>
                  <li>
                    Calculer <Math tex="BD" />.
                  </li>
                  <li>
                    Démontrer que <Math tex="ABCD" /> est un rectangle.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <svg viewBox="0 0 420 386" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="346.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="346.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="346.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="346.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="346.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="346.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="346.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="346.0" x2="278.0" y2="40.0"/>
<line x1="312.0" y1="346.0" x2="312.0" y2="40.0"/>
<line x1="346.0" y1="346.0" x2="346.0" y2="40.0"/>
<line x1="380.0" y1="346.0" x2="380.0" y2="40.0"/>
<line x1="40.0" y1="346.0" x2="380.0" y2="346.0"/>
<line x1="40.0" y1="312.0" x2="380.0" y2="312.0"/>
<line x1="40.0" y1="278.0" x2="380.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="380.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="380.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="380.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="380.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="380.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="380.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="380.0" y2="40.0"/>
</g>
<line x1="26.0" y1="244.0" x2="398.0" y2="244.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="400.0" y="249.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="176.0" y1="360.0" x2="176.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="162.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="260.0" textAnchor="middle">-4</text>
<text x="71.0" y="260.0" textAnchor="middle">-3</text>
<text x="105.0" y="260.0" textAnchor="middle">-2</text>
<text x="139.0" y="260.0" textAnchor="middle">-1</text>
<text x="207.0" y="260.0" textAnchor="middle">1</text>
<text x="241.0" y="260.0" textAnchor="middle">2</text>
<text x="275.0" y="260.0" textAnchor="middle">3</text>
<text x="309.0" y="260.0" textAnchor="middle">4</text>
<text x="343.0" y="260.0" textAnchor="middle">5</text>
<text x="377.0" y="260.0" textAnchor="middle">6</text>
<text x="168.0" y="349.5" textAnchor="end">-3</text>
<text x="168.0" y="315.5" textAnchor="end">-2</text>
<text x="168.0" y="281.5" textAnchor="end">-1</text>
<text x="168.0" y="213.5" textAnchor="end">1</text>
<text x="168.0" y="179.5" textAnchor="end">2</text>
<text x="168.0" y="145.5" textAnchor="end">3</text>
<text x="168.0" y="111.5" textAnchor="end">4</text>
<text x="168.0" y="77.5" textAnchor="end">5</text>
<text x="168.0" y="43.5" textAnchor="end">6</text>
<text x="168.0" y="260.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<polygon points="74.0,176.0 278.0,74.0 346.0,210.0 142.0,312.0" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.3" opacity="0.55"/>
<line x1="74.0" y1="176.0" x2="346.0" y2="210.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<line x1="278.0" y1="74.0" x2="142.0" y2="312.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<circle cx="74.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="65.0" y="186.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="278.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="287.0" y="66.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="346.0" cy="210.0" r="4" fill="#1e293b"/>
<text x="355.0" y="218.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="142.0" cy="312.0" r="4" fill="#1e293b"/>
<text x="133.0" y="328.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">D</text>
<circle cx="210.0" cy="193.0" r="4" fill="#e11d48"/>
<text x="220.0" y="185.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">M</text>
</svg>
                <Note>
                  <p>
                    <strong>2)</strong> <Math tex="M" /> milieu de <Math tex="[AC]" /> signifie que{" "}
                    <Math tex="x_C=2x_M-x_A=2-(-3)=5" /> et <Math tex="y_C=2y_M-y_A=3-2=1" />.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    D&apos;où : <Math tex="C(5;1)" />
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>3)</strong> Milieu de <Math tex="[BD]" /> : <Math tex="x=\dfrac{3-1}{2}=1" /> ;{" "}
                    <Math tex="y=\dfrac{5-2}{2}=\dfrac32" />, soit le point <Math tex="\left(1;\dfrac32\right)=M" />.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    Les diagonales <Math tex="[AC]" /> et <Math tex="[BD]" /> ont le même milieu <Math tex="M" />,
                    donc <Math tex="ABCD" /> est un parallélogramme.
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>4)</strong>{" "}
                    <Math tex="BD=\sqrt{(x_D-x_B)^2+(y_D-y_B)^2}=\sqrt{(-1-3)^2+(-2-5)^2}=\sqrt{16+49}=\sqrt{65}" />
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>5)</strong>{" "}
                    <Math tex="AC=\sqrt{(x_C-x_A)^2+(y_C-y_A)^2}=\sqrt{(5+3)^2+(1-2)^2}=\sqrt{64+1}=\sqrt{65}" />
                  </p>
                  <p className="font-semibold text-emerald-700">
                    Comme <Math tex="AC=BD=\sqrt{65}" /> (les diagonales sont égales) et <Math tex="ABCD" /> est un
                    parallélogramme, <Math tex="ABCD" /> est un rectangle.
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Construire un parallélogramme ABDC"
            items={
              <div className="space-y-3">
                <p>
                  <Math tex="(O;I;J)" /> est un repère orthonormé.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Placer les points : <Math tex="A(2;1)" /> ; <Math tex="B(3;-2)" /> et <Math tex="C(-4;-1)" />.
                  </li>
                  <li>
                    Trouver les coordonnées des vecteurs <Math tex="\overrightarrow{BC}" /> et{" "}
                    <Math tex="\overrightarrow{AC}" />.
                  </li>
                  <li>
                    Calculer les distances <Math tex="CB" /> ; <Math tex="AC" /> et <Math tex="AB" />.
                  </li>
                  <li>
                    Trouver les coordonnées du point <Math tex="M" /> milieu de <Math tex="[BD]" />.
                  </li>
                  <li>
                    Déterminer les coordonnées du point <Math tex="D" /> pour que <Math tex="ABDC" /> soit un
                    parallélogramme.
                  </li>
                </ol>
                <p className="text-xs text-foreground-muted italic">
                  Remarque : la question 4 utilise le point <Math tex="D" />, on commence donc naturellement par la
                  question 5.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <svg viewBox="0 0 386 318" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="278.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="278.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="278.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="278.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="278.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="278.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="278.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="278.0" x2="278.0" y2="40.0"/>
<line x1="312.0" y1="278.0" x2="312.0" y2="40.0"/>
<line x1="346.0" y1="278.0" x2="346.0" y2="40.0"/>
<line x1="40.0" y1="278.0" x2="346.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="346.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="346.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="346.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="346.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="346.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="346.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="346.0" y2="40.0"/>
</g>
<line x1="26.0" y1="108.0" x2="364.0" y2="108.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="366.0" y="113.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="210.0" y1="292.0" x2="210.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="196.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="124.0" textAnchor="middle">-5</text>
<text x="71.0" y="124.0" textAnchor="middle">-4</text>
<text x="105.0" y="124.0" textAnchor="middle">-3</text>
<text x="139.0" y="124.0" textAnchor="middle">-2</text>
<text x="173.0" y="124.0" textAnchor="middle">-1</text>
<text x="241.0" y="124.0" textAnchor="middle">1</text>
<text x="275.0" y="124.0" textAnchor="middle">2</text>
<text x="309.0" y="124.0" textAnchor="middle">3</text>
<text x="343.0" y="124.0" textAnchor="middle">4</text>
<text x="202.0" y="281.5" textAnchor="end">-5</text>
<text x="202.0" y="247.5" textAnchor="end">-4</text>
<text x="202.0" y="213.5" textAnchor="end">-3</text>
<text x="202.0" y="179.5" textAnchor="end">-2</text>
<text x="202.0" y="145.5" textAnchor="end">-1</text>
<text x="202.0" y="77.5" textAnchor="end">1</text>
<text x="202.0" y="43.5" textAnchor="end">2</text>
<text x="202.0" y="124.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<polygon points="278.0,74.0 312.0,176.0 108.0,244.0 74.0,142.0" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.3" opacity="0.55"/>
<line x1="278.0" y1="74.0" x2="108.0" y2="244.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<line x1="312.0" y1="176.0" x2="74.0" y2="142.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<circle cx="278.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="287.0" y="66.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="312.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="321.0" y="180.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="74.0" cy="142.0" r="4" fill="#1e293b"/>
<text x="65.0" y="133.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="108.0" cy="244.0" r="4" fill="#1e293b"/>
<text x="99.0" y="260.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">D</text>
<circle cx="210.0" cy="210.0" r="4" fill="#e11d48"/>
<text x="202.0" y="227.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">M</text>
</svg>
                  <div className="space-y-2">
                    <p>
                      <strong>2)</strong>{" "}
                      <Math tex="\overrightarrow{BC}(x_C-x_B\,;\,y_C-y_B)=(-4-3\,;\,-1+2)=(-7;1)" />
                    </p>
                    <p>
                      <Math tex="\overrightarrow{AC}(x_C-x_A\,;\,y_C-y_A)=(-4-2\,;\,-1-1)=(-6;-2)" />
                    </p>
                    <p>
                      <strong>3)</strong> <Math tex="CB=\sqrt{(-7)^2+1^2}=\sqrt{50}=5\sqrt2" />
                    </p>
                    <p>
                      <Math tex="AC=\sqrt{(-6)^2+(-2)^2}=\sqrt{40}=2\sqrt{10}" />
                    </p>
                    <p>
                      <Math tex="AB=\sqrt{(3-2)^2+(-2-1)^2}=\sqrt{1+9}=\sqrt{10}" />
                    </p>
                  </div>
                </div>
                <Note>
                  <p>
                    <strong>5) (résolue avant la question 4)</strong> <Math tex="ABDC" /> parallélogramme signifie
                    que ses diagonales <Math tex="[AD]" /> et <Math tex="[BC]" /> ont le même milieu.
                  </p>
                  <p>
                    Milieu de <Math tex="[BC]" /> :{" "}
                    <Math tex="\left(\dfrac{3-4}{2}\,;\,\dfrac{-2-1}{2}\right)=\left(-\dfrac12\,;\,-\dfrac32\right)" />
                  </p>
                  <p>
                    Donc <Math tex="x_D=2\times\left(-\dfrac12\right)-x_A=-1-2=-3" /> et{" "}
                    <Math tex="y_D=2\times\left(-\dfrac32\right)-y_A=-3-1=-4" />.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    D&apos;où : <Math tex="D(-3;-4)" />
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>4)</strong> <Math tex="M" /> milieu de <Math tex="[BD]" /> :{" "}
                    <Math tex="x_M=\dfrac{3-3}{2}=0" /> ; <Math tex="y_M=\dfrac{-2-4}{2}=-3" />
                  </p>
                  <p className="font-semibold text-emerald-700">
                    D&apos;où : <Math tex="M(0;-3)" />
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Triangle isocèle et alignement"
            itemsLabel="Casablanca 2021"
            items={
              <div className="space-y-3">
                <p>
                  Dans le plan muni d&apos;un repère orthonormé <Math tex="(O;E;F)" />, on considère les points :{" "}
                  <Math tex="A(2;2)" /> ; <Math tex="B(-2;-1)" /> et <Math tex="C(2;-3)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Placer les points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" />.
                  </li>
                  <li>
                    a) Calculer les distances <Math tex="AB" /> et <Math tex="AC" />. b) En déduire que{" "}
                    <Math tex="ABC" /> est un triangle isocèle.
                  </li>
                  <li>
                    <Math tex="I" /> et <Math tex="J" /> deux milieux respectifs de <Math tex="[BC]" /> et{" "}
                    <Math tex="[AC]" />. Soit <Math tex="G" /> un point tel que :{" "}
                    <Math tex="\overrightarrow{AG}=\dfrac{2}{3}\overrightarrow{AI}" />.
                    <br />
                    a) Montrer que les points <Math tex="B" />, <Math tex="G" /> et <Math tex="J" /> sont alignés.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <svg viewBox="0 0 284 318" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="278.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="278.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="278.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="278.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="278.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="278.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="278.0" x2="244.0" y2="40.0"/>
<line x1="40.0" y1="278.0" x2="244.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="244.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="244.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="244.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="244.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="244.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="244.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="244.0" y2="40.0"/>
</g>
<line x1="26.0" y1="142.0" x2="262.0" y2="142.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="264.0" y="147.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="142.0" y1="292.0" x2="142.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="128.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="158.0" textAnchor="middle">-3</text>
<text x="71.0" y="158.0" textAnchor="middle">-2</text>
<text x="105.0" y="158.0" textAnchor="middle">-1</text>
<text x="173.0" y="158.0" textAnchor="middle">1</text>
<text x="207.0" y="158.0" textAnchor="middle">2</text>
<text x="241.0" y="158.0" textAnchor="middle">3</text>
<text x="134.0" y="281.5" textAnchor="end">-4</text>
<text x="134.0" y="247.5" textAnchor="end">-3</text>
<text x="134.0" y="213.5" textAnchor="end">-2</text>
<text x="134.0" y="179.5" textAnchor="end">-1</text>
<text x="134.0" y="111.5" textAnchor="end">1</text>
<text x="134.0" y="77.5" textAnchor="end">2</text>
<text x="134.0" y="43.5" textAnchor="end">3</text>
<text x="134.0" y="158.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<polygon points="210.0,74.0 74.0,176.0 210.0,244.0" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.3" opacity="0.5"/>
<line x1="74.0" y1="176.0" x2="210.0" y2="159.0" stroke="#e11d48" strokeWidth="1.8"/>
<line x1="210.0" y1="74.0" x2="142.0" y2="210.0" stroke="#d97706" strokeWidth="1.3" strokeDasharray="5 4"/>
<circle cx="210.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="219.0" y="66.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="74.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="65.0" y="167.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="210.0" cy="244.0" r="4" fill="#1e293b"/>
<text x="219.0" y="254.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="142.0" cy="210.0" r="4" fill="#d97706"/>
<text x="134.0" y="227.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#d97706">I</text>
<circle cx="210.0" cy="159.0" r="4" fill="#059669"/>
<text x="219.0" y="153.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#059669">J</text>
<circle cx="164.7" cy="164.7" r="4" fill="#e11d48"/>
<text x="170.7" y="181.7" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">G</text>
</svg>
                  <div className="space-y-2">
                    <p>
                      <strong>2) a)</strong> <Math tex="AB=\sqrt{(-2-2)^2+(-1-2)^2}=\sqrt{16+9}=\sqrt{25}=5" />
                    </p>
                    <p>
                      <Math tex="AC=\sqrt{(2-2)^2+(-3-2)^2}=\sqrt{0+25}=5" />
                    </p>
                    <p className="font-semibold text-emerald-700">
                      <strong>b)</strong> Comme <Math tex="AB=AC=5" />, le triangle <Math tex="ABC" /> est isocèle
                      en <Math tex="A" />.
                    </p>
                  </div>
                </div>
                <Note>
                  <p>
                    <strong>3)</strong> <Math tex="I" /> milieu <Math tex="[BC]" /> : <Math tex="I(0;-2)" />.{" "}
                    <Math tex="J" /> milieu <Math tex="[AC]" /> : <Math tex="J\!\left(2;-\dfrac12\right)" />.
                  </p>
                  <p>
                    <Math tex="\overrightarrow{AI}(x_I-x_A\,;\,y_I-y_A)=(0-2\,;\,-2-2)=(-2;-4)" />, donc{" "}
                    <Math tex="\dfrac23\overrightarrow{AI}=\left(-\dfrac43\,;\,-\dfrac83\right)" />.
                  </p>
                  <p>
                    <Math tex="\overrightarrow{AG}=\dfrac23\overrightarrow{AI}" /> donne :{" "}
                    <Math tex="x_G=x_A-\dfrac43=\dfrac23" /> et <Math tex="y_G=y_A-\dfrac83=-\dfrac23" />, soit{" "}
                    <Math tex="G\!\left(\dfrac23;-\dfrac23\right)" />.
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>a)</strong>{" "}
                    <Math tex="\overrightarrow{BG}(x_G-x_B\,;\,y_G-y_B)=\left(\dfrac23+2\,;\,-\dfrac23+1\right)=\left(\dfrac83\,;\,\dfrac13\right)" />
                  </p>
                  <p>
                    <Math tex="\overrightarrow{BJ}(x_J-x_B\,;\,y_J-y_B)=\left(2+2\,;\,-\dfrac12+1\right)=\left(4\,;\,\dfrac12\right)" />
                  </p>
                  <p>
                    On remarque que :{" "}
                    <Math tex="\dfrac23\,\overrightarrow{BJ}=\dfrac23\left(4;\dfrac12\right)=\left(\dfrac83;\dfrac13\right)=\overrightarrow{BG}" />
                  </p>
                  <p className="font-semibold text-emerald-700">
                    Comme <Math tex="\overrightarrow{BG}=\dfrac23\overrightarrow{BJ}" />, les vecteurs{" "}
                    <Math tex="\overrightarrow{BG}" /> et <Math tex="\overrightarrow{BJ}" /> sont colinéaires : les
                    points <Math tex="B" />, <Math tex="G" /> et <Math tex="J" /> sont alignés.
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Milieu, vecteurs et droites concourantes"
            itemsLabel="Béni Mellal 2021"
            items={
              <div className="space-y-3">
                <p>
                  Le plan est rapporté à un repère orthonormé <Math tex="(O;I;J)" />. On considère les points :{" "}
                  <Math tex="A(1;3)" /> ; <Math tex="B(3;-1)" /> et <Math tex="C(4;2)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AC}" />.
                  </li>
                  <li>
                    Calculer les distances <Math tex="AC" /> et <Math tex="BC" />.
                  </li>
                  <li>
                    Soit <Math tex="H" /> le milieu du segment <Math tex="[AB]" />. Montrer que le point{" "}
                    <Math tex="H" /> a pour coordonnées <Math tex="(2;1)" />.
                  </li>
                  <li>
                    a) Déterminer les coordonnées de <Math tex="\overrightarrow{OH}-\overrightarrow{HC}" />. b)
                    Montrer que <Math tex="H" /> est le milieu de <Math tex="[OC]" />.
                  </li>
                  <li>
                    Construire dans le même repère le point <Math tex="H" /> et les droites <Math tex="(AB)" /> et{" "}
                    <Math tex="(OC)" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <svg viewBox="0 0 284 284" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="244.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="244.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="244.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="244.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="244.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="244.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="244.0" x2="244.0" y2="40.0"/>
<line x1="40.0" y1="244.0" x2="244.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="244.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="244.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="244.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="244.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="244.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="244.0" y2="40.0"/>
</g>
<line x1="26.0" y1="176.0" x2="262.0" y2="176.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="264.0" y="181.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="74.0" y1="258.0" x2="74.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="60.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="192.0" textAnchor="middle">-1</text>
<text x="105.0" y="192.0" textAnchor="middle">1</text>
<text x="139.0" y="192.0" textAnchor="middle">2</text>
<text x="173.0" y="192.0" textAnchor="middle">3</text>
<text x="207.0" y="192.0" textAnchor="middle">4</text>
<text x="241.0" y="192.0" textAnchor="middle">5</text>
<text x="66.0" y="247.5" textAnchor="end">-2</text>
<text x="66.0" y="213.5" textAnchor="end">-1</text>
<text x="66.0" y="145.5" textAnchor="end">1</text>
<text x="66.0" y="111.5" textAnchor="end">2</text>
<text x="66.0" y="77.5" textAnchor="end">3</text>
<text x="66.0" y="43.5" textAnchor="end">4</text>
<text x="66.0" y="192.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="108.0" y1="74.0" x2="176.0" y2="210.0" stroke="#1e293b" strokeWidth="1.6"/>
<line x1="74.0" y1="176.0" x2="210.0" y2="108.0" stroke="#059669" strokeWidth="1.8"/>
<line x1="108.0" y1="74.0" x2="210.0" y2="108.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<line x1="176.0" y1="210.0" x2="210.0" y2="108.0" stroke="#1e293b" strokeWidth="1.3" strokeDasharray="5 4"/>
<circle cx="108.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="100.0" y="64.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="176.0" cy="210.0" r="4" fill="#1e293b"/>
<text x="185.0" y="224.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="210.0" cy="108.0" r="4" fill="#1e293b"/>
<text x="219.0" y="104.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="142.0" cy="142.0" r="4" fill="#e11d48"/>
<text x="126.0" y="152.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">H</text>
<circle cx="74.0" cy="176.0" r="4" fill="#1e293b"/>
<text x="60.0" y="190.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">O</text>
</svg>
                  <div className="space-y-2">
                    <p>
                      <strong>1)</strong>{" "}
                      <Math tex="\overrightarrow{AC}(x_C-x_A\,;\,y_C-y_A)=(4-1\,;\,2-3)=(3;-1)" />
                    </p>
                    <p>
                      <strong>2)</strong> <Math tex="AC=\sqrt{3^2+(-1)^2}=\sqrt{10}" />
                    </p>
                    <p>
                      <Math tex="BC=\sqrt{(4-3)^2+(2+1)^2}=\sqrt{1+9}=\sqrt{10}" />
                    </p>
                  </div>
                </div>
                <Note>
                  <p>
                    <strong>3)</strong> <Math tex="H" /> milieu de <Math tex="[AB]" /> :{" "}
                    <Math tex="x_H=\dfrac{1+3}{2}=2" /> ; <Math tex="y_H=\dfrac{3-1}{2}=1" />, d&apos;où{" "}
                    <Math tex="H(2;1)" />, ce qui correspond bien aux coordonnées annoncées.
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>4) a)</strong> <Math tex="O" /> étant l&apos;origine,{" "}
                    <Math tex="\overrightarrow{OH}(x_H;y_H)=(2;1)" />. <Math tex="\overrightarrow{HC}(x_C-x_H\,;\,y_C-y_H)=(4-2\,;\,2-1)=(2;1)" />.
                  </p>
                  <p>
                    <Math tex="\overrightarrow{OH}-\overrightarrow{HC}=(2-2\,;\,1-1)=(0;0)=\vec 0" />
                  </p>
                  <p>
                    <strong>b)</strong> Comme <Math tex="\overrightarrow{OH}-\overrightarrow{HC}=\vec 0" />, on a{" "}
                    <Math tex="\overrightarrow{OH}=\overrightarrow{HC}" />, donc <Math tex="H" /> est le milieu du
                    segment <Math tex="[OC]" /> (ce que l&apos;on peut vérifier directement : milieu de{" "}
                    <Math tex="[OC]=\left(\dfrac{0+4}{2};\dfrac{0+2}{2}\right)=(2;1)=H" />).
                  </p>
                  <p className="text-xs text-foreground-muted">
                    Les droites <Math tex="(AB)" /> et <Math tex="(OC)" /> se coupent donc exactement au point{" "}
                    <Math tex="H" />, milieu commun des deux segments.
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Triangle rectangle et aire"
            itemsLabel="Casablanca 2019"
            items={
              <div className="space-y-3">
                <p>
                  Dans le plan rapporté à un repère orthonormé <Math tex="(O;I;J)" />, on considère les points :{" "}
                  <Math tex="A(0;2)" /> ; <Math tex="B(1;0)" /> et <Math tex="C(4;4)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" /> ; puis calculer la
                    distance <Math tex="AB" />.
                  </li>
                  <li>
                    Montrer que <Math tex="ABC" /> est un triangle rectangle.
                  </li>
                  <li>
                    Calculer l&apos;aire du triangle <Math tex="ABC" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <svg viewBox="0 0 284 284" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="244.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="244.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="244.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="244.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="244.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="244.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="244.0" x2="244.0" y2="40.0"/>
<line x1="40.0" y1="244.0" x2="244.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="244.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="244.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="244.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="244.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="244.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="244.0" y2="40.0"/>
</g>
<line x1="26.0" y1="210.0" x2="262.0" y2="210.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="264.0" y="215.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="74.0" y1="258.0" x2="74.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="60.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="226.0" textAnchor="middle">-1</text>
<text x="105.0" y="226.0" textAnchor="middle">1</text>
<text x="139.0" y="226.0" textAnchor="middle">2</text>
<text x="173.0" y="226.0" textAnchor="middle">3</text>
<text x="207.0" y="226.0" textAnchor="middle">4</text>
<text x="241.0" y="226.0" textAnchor="middle">5</text>
<text x="66.0" y="247.5" textAnchor="end">-1</text>
<text x="66.0" y="179.5" textAnchor="end">1</text>
<text x="66.0" y="145.5" textAnchor="end">2</text>
<text x="66.0" y="111.5" textAnchor="end">3</text>
<text x="66.0" y="77.5" textAnchor="end">4</text>
<text x="66.0" y="43.5" textAnchor="end">5</text>
<text x="66.0" y="226.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<polygon points="74.0,142.0 108.0,210.0 210.0,74.0" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.3" opacity="0.4"/>
<path d="M79.8,153.6 L91.4,147.8 L85.6,136.2" fill="none" stroke="#475569" strokeWidth="1.5"/>
<line x1="74.0" y1="142.0" x2="108.0" y2="210.0" stroke="#1e293b" strokeWidth="1.8"/>
<line x1="74.0" y1="142.0" x2="210.0" y2="74.0" stroke="#1e293b" strokeWidth="1.8"/>
<line x1="108.0" y1="210.0" x2="210.0" y2="74.0" stroke="#2563eb" strokeWidth="1.8"/>
<circle cx="74.0" cy="142.0" r="4" fill="#1e293b"/>
<text x="60.0" y="148.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="108.0" cy="210.0" r="4" fill="#1e293b"/>
<text x="114.0" y="227.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="210.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="219.0" y="68.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
</svg>
                  <div className="space-y-2">
                    <p>
                      <strong>1)</strong> <Math tex="\overrightarrow{AB}(x_B-x_A\,;\,y_B-y_A)=(1-0\,;\,0-2)=(1;-2)" />
                    </p>
                    <p>
                      <Math tex="AB=\sqrt{1^2+(-2)^2}=\sqrt{1+4}=\sqrt5" />
                    </p>
                  </div>
                </div>
                <Note>
                  <p>
                    <strong>2)</strong> Calculons les trois côtés : <Math tex="AB=\sqrt5" /> (question 1).
                  </p>
                  <p>
                    <Math tex="AC=\sqrt{(4-0)^2+(4-2)^2}=\sqrt{16+4}=\sqrt{20}=2\sqrt5" />
                  </p>
                  <p>
                    <Math tex="BC=\sqrt{(4-1)^2+(4-0)^2}=\sqrt{9+16}=\sqrt{25}=5" />
                  </p>
                  <p>
                    Or <Math tex="AB^2+AC^2=5+20=25=BC^2" />.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    D&apos;après la réciproque du théorème de Pythagore, le triangle <Math tex="ABC" /> est rectangle
                    en <Math tex="A" />.
                  </p>
                </Note>
                <Note>
                  <p>
                    <strong>3)</strong> <Math tex="ABC" /> étant rectangle en <Math tex="A" />, les côtés{" "}
                    <Math tex="[AB]" /> et <Math tex="[AC]" /> sont les côtés de l&apos;angle droit :
                  </p>
                  <p>
                    <Math tex="\text{Aire}=\dfrac{AB\times AC}{2}=\dfrac{\sqrt5\times2\sqrt5}{2}=\dfrac{2\times5}{2}=5" />
                  </p>
                  <p className="font-semibold text-emerald-700">
                    D&apos;où : l&apos;aire du triangle <Math tex="ABC" /> est <Math tex="5" /> unités d&apos;aire.
                  </p>
                </Note>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Vérifier une distance et un milieu"
            itemsLabel="Marrakech 2019"
            items={
              <div className="space-y-3">
                <p>
                  Dans le plan muni d&apos;un repère orthonormé <Math tex="(O;I;J)" />, on considère les points :{" "}
                  <Math tex="A(4;4)" /> ; <Math tex="B(1;5)" /> et <Math tex="C(3;1)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Représenter les points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" /> dans le repère{" "}
                    <Math tex="(O;I;J)" />.
                  </li>
                  <li>
                    a) Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" />. b) Vérifier que{" "}
                    <Math tex="AB=\sqrt{10}" />. c) Vérifier que <Math tex="K(2;3)" /> est le milieu de{" "}
                    <Math tex="[BC]" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="grid items-center gap-5 sm:grid-cols-2">
                <svg viewBox="0 0 250 284" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="244.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="244.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="244.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="244.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="244.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="244.0" x2="210.0" y2="40.0"/>
<line x1="40.0" y1="244.0" x2="210.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="210.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="210.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="210.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="210.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="210.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="210.0" y2="40.0"/>
</g>
<line x1="26.0" y1="244.0" x2="228.0" y2="244.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="230.0" y="249.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="40.0" y1="258.0" x2="40.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="26.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="71.0" y="260.0" textAnchor="middle">1</text>
<text x="105.0" y="260.0" textAnchor="middle">2</text>
<text x="139.0" y="260.0" textAnchor="middle">3</text>
<text x="173.0" y="260.0" textAnchor="middle">4</text>
<text x="207.0" y="260.0" textAnchor="middle">5</text>
<text x="32.0" y="213.5" textAnchor="end">1</text>
<text x="32.0" y="179.5" textAnchor="end">2</text>
<text x="32.0" y="145.5" textAnchor="end">3</text>
<text x="32.0" y="111.5" textAnchor="end">4</text>
<text x="32.0" y="77.5" textAnchor="end">5</text>
<text x="32.0" y="43.5" textAnchor="end">6</text>
<text x="32.0" y="260.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="176.0" y1="108.0" x2="74.0" y2="74.0" stroke="#1e293b" strokeWidth="1.6"/>
<line x1="74.0" y1="74.0" x2="142.0" y2="210.0" stroke="#1e293b" strokeWidth="1.6"/>
<line x1="142.0" y1="210.0" x2="176.0" y2="108.0" stroke="#1e293b" strokeWidth="1.6"/>
<circle cx="176.0" cy="108.0" r="4" fill="#1e293b"/>
<text x="185.0" y="102.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="74.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="65.0" y="65.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="142.0" cy="210.0" r="4" fill="#1e293b"/>
<text x="151.0" y="224.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="108.0" cy="142.0" r="4" fill="#e11d48"/>
<text x="91.0" y="146.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">K</text>
</svg>
                <div className="space-y-2">
                  <p>
                    <strong>2) a)</strong>{" "}
                    <Math tex="\overrightarrow{AB}(x_B-x_A\,;\,y_B-y_A)=(1-4\,;\,5-4)=(-3;1)" />
                  </p>
                  <p>
                    <strong>b)</strong> <Math tex="AB=\sqrt{(-3)^2+1^2}=\sqrt{9+1}=\sqrt{10}" />. On retrouve bien{" "}
                    <Math tex="AB=\sqrt{10}" />. ✓
                  </p>
                  <p>
                    <strong>c)</strong> Milieu de <Math tex="[BC]" /> : <Math tex="x=\dfrac{1+3}{2}=2" /> ;{" "}
                    <Math tex="y=\dfrac{5+1}{2}=3" />.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    On retrouve <Math tex="(2;3)=K" /> : <Math tex="K" /> est bien le milieu de <Math tex="[BC]" />. ✓
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Triangle isocèle et milieu"
            itemsLabel="Casablanca 2018"
            items={
              <div className="space-y-3">
                <p>
                  Dans le plan muni d&apos;un repère orthonormé <Math tex="(O;I;J)" />, on considère les points :{" "}
                  <Math tex="A(1;7)" /> ; <Math tex="B(-6;3)" /> et <Math tex="C(0;-1)" />.
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>
                    Calculer la distance <Math tex="AB" />.
                  </li>
                  <li>
                    Montrer que <Math tex="ABC" /> est un triangle isocèle en <Math tex="A" />.
                  </li>
                  <li>
                    Déterminer le couple de coordonnées du point <Math tex="L" /> milieu de <Math tex="[BC]" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="grid items-center gap-5 sm:grid-cols-2">
                  <svg viewBox="0 0 386 420" className="mx-auto w-full max-w-md" xmlns="http://www.w3.org/2000/svg">
<g stroke="#e2e8f0" strokeWidth="1">
<line x1="40.0" y1="380.0" x2="40.0" y2="40.0"/>
<line x1="74.0" y1="380.0" x2="74.0" y2="40.0"/>
<line x1="108.0" y1="380.0" x2="108.0" y2="40.0"/>
<line x1="142.0" y1="380.0" x2="142.0" y2="40.0"/>
<line x1="176.0" y1="380.0" x2="176.0" y2="40.0"/>
<line x1="210.0" y1="380.0" x2="210.0" y2="40.0"/>
<line x1="244.0" y1="380.0" x2="244.0" y2="40.0"/>
<line x1="278.0" y1="380.0" x2="278.0" y2="40.0"/>
<line x1="312.0" y1="380.0" x2="312.0" y2="40.0"/>
<line x1="346.0" y1="380.0" x2="346.0" y2="40.0"/>
<line x1="40.0" y1="380.0" x2="346.0" y2="380.0"/>
<line x1="40.0" y1="346.0" x2="346.0" y2="346.0"/>
<line x1="40.0" y1="312.0" x2="346.0" y2="312.0"/>
<line x1="40.0" y1="278.0" x2="346.0" y2="278.0"/>
<line x1="40.0" y1="244.0" x2="346.0" y2="244.0"/>
<line x1="40.0" y1="210.0" x2="346.0" y2="210.0"/>
<line x1="40.0" y1="176.0" x2="346.0" y2="176.0"/>
<line x1="40.0" y1="142.0" x2="346.0" y2="142.0"/>
<line x1="40.0" y1="108.0" x2="346.0" y2="108.0"/>
<line x1="40.0" y1="74.0" x2="346.0" y2="74.0"/>
<line x1="40.0" y1="40.0" x2="346.0" y2="40.0"/>
</g>
<line x1="26.0" y1="312.0" x2="364.0" y2="312.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="366.0" y="317.0" fontSize="13" fill="#475569" fontStyle="italic">x</text>
<line x1="278.0" y1="394.0" x2="278.0" y2="22.0" stroke="#475569" strokeWidth="1.8" markerEnd="url(#arr-slate)"/>
<text x="264.0" y="18.0" fontSize="13" fill="#475569" fontStyle="italic">y</text>
<g fontSize="10.5" fill="#94a3b8" fontFamily="sans-serif">
<text x="37.0" y="328.0" textAnchor="middle">-7</text>
<text x="71.0" y="328.0" textAnchor="middle">-6</text>
<text x="105.0" y="328.0" textAnchor="middle">-5</text>
<text x="139.0" y="328.0" textAnchor="middle">-4</text>
<text x="173.0" y="328.0" textAnchor="middle">-3</text>
<text x="207.0" y="328.0" textAnchor="middle">-2</text>
<text x="241.0" y="328.0" textAnchor="middle">-1</text>
<text x="309.0" y="328.0" textAnchor="middle">1</text>
<text x="343.0" y="328.0" textAnchor="middle">2</text>
<text x="270.0" y="383.5" textAnchor="end">-2</text>
<text x="270.0" y="349.5" textAnchor="end">-1</text>
<text x="270.0" y="281.5" textAnchor="end">1</text>
<text x="270.0" y="247.5" textAnchor="end">2</text>
<text x="270.0" y="213.5" textAnchor="end">3</text>
<text x="270.0" y="179.5" textAnchor="end">4</text>
<text x="270.0" y="145.5" textAnchor="end">5</text>
<text x="270.0" y="111.5" textAnchor="end">6</text>
<text x="270.0" y="77.5" textAnchor="end">7</text>
<text x="270.0" y="43.5" textAnchor="end">8</text>
<text x="270.0" y="328.0" textAnchor="end" fontStyle="italic" fill="#475569">O</text>
</g>
<line x1="312.0" y1="74.0" x2="74.0" y2="210.0" stroke="#1e293b" strokeWidth="1.6"/>
<line x1="74.0" y1="210.0" x2="278.0" y2="346.0" stroke="#1e293b" strokeWidth="1.6"/>
<line x1="278.0" y1="346.0" x2="312.0" y2="74.0" stroke="#1e293b" strokeWidth="1.6"/>
<circle cx="312.0" cy="74.0" r="4" fill="#1e293b"/>
<text x="321.0" y="68.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">A</text>
<circle cx="74.0" cy="210.0" r="4" fill="#1e293b"/>
<text x="65.0" y="201.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">B</text>
<circle cx="278.0" cy="346.0" r="4" fill="#1e293b"/>
<text x="287.0" y="356.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#1e293b">C</text>
<circle cx="176.0" cy="278.0" r="4" fill="#e11d48"/>
<text x="168.0" y="295.0" fontSize="15" fontStyle="italic" fontWeight="600" fill="#e11d48">L</text>
</svg>
                  <div className="space-y-2">
                    <p>
                      <strong>1)</strong> <Math tex="AB=\sqrt{(-6-1)^2+(3-7)^2}=\sqrt{49+16}=\sqrt{65}" />
                    </p>
                    <p>
                      <strong>2)</strong> <Math tex="AC=\sqrt{(0-1)^2+(-1-7)^2}=\sqrt{1+64}=\sqrt{65}" />
                    </p>
                    <p className="font-semibold text-emerald-700">
                      Comme <Math tex="AB=AC=\sqrt{65}" />, le triangle <Math tex="ABC" /> est isocèle en{" "}
                      <Math tex="A" />.
                    </p>
                  </div>
                </div>
                <Note>
                  <p>
                    <strong>3)</strong> <Math tex="L" /> milieu de <Math tex="[BC]" /> :{" "}
                    <Math tex="x_L=\dfrac{-6+0}{2}=-3" /> ; <Math tex="y_L=\dfrac{3-1}{2}=1" />
                  </p>
                  <p className="font-semibold text-emerald-700">
                    D&apos;où : <Math tex="L(-3;1)" />
                  </p>
                </Note>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
