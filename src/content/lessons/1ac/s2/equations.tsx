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
  title: "Les Équations · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur les équations du premier degré à une inconnue (1ère année collège) : définition, résolution de x+a=b et ax=b, propriétés d'équivalence, méthode de résolution de problèmes, et 66 exercices et problèmes corrigés en détail.",
  kicker: "1ʳᵉ Année Collège · Chapitre 2",
  heroTitle: "Les Équations",
  heroSubtitle:
    "Du premier degré à une inconnue. Trouver la valeur de x qui rend une égalité vraie, avec une méthode qui marche à tous les coups.",
  footerNote: "Les équations · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "resoudre", label: "Résoudre" },
    { id: "methodes", label: "Méthodes" },
    { id: "problemes", label: "Problèmes" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Petits composants locaux ===================== */

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500">
      {children}
    </span>
  );
}

function Item({ n, children }: { n: number; children: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <Pill>{n}</Pill>
      <span className="text-sm">
        <Math tex={children} />
      </span>
    </div>
  );
}

function CorrectionCard({ n, lines }: { n: number | string; lines: string[] }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span>
      <div className="mt-1 space-y-1">
        {lines.map((tex, i) => (
          <p key={i} className={i === lines.length - 1 ? "font-bold text-foreground" : "text-foreground-muted"}>
            <Math tex={tex} />
          </p>
        ))}
      </div>
    </div>
  );
}

function PropBox({ tone, children }: { tone: "violet" | "sky" | "emerald" | "teal"; children: ReactNode }) {
  const map: Record<string, string> = {
    violet: "border-violet-300 bg-violet-50 text-violet-800 dark:border-violet-800 dark:bg-violet-950/20 dark:text-violet-200",
    sky: "border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-800 dark:bg-sky-950/20 dark:text-sky-200",
    emerald: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-200",
    teal: "border-teal-300 bg-teal-50 text-teal-800 dark:border-teal-800 dark:bg-teal-950/20 dark:text-teal-200",
  };
  return <div className={`rounded-xl border p-4 text-center text-sm font-medium ${map[tone]}`}>{children}</div>;
}

function MiniExample({ n, tone, eq, steps }: { n: number; tone: "violet" | "sky" | "emerald" | "teal"; eq: string; steps: string[] }) {
  const dot: Record<string, string> = {
    violet: "bg-violet-500",
    sky: "bg-sky-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
  };
  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${dot[tone]}`}>{n}</span>
        <p className="text-sm font-semibold text-foreground">
          <Math tex={eq} />
        </p>
      </div>
      <div className="space-y-1 border-t border-dashed border-border pt-2 pl-8 text-xs text-foreground-muted">
        {steps.map((tex, i) => (
          <p key={i} className={i === steps.length - 1 ? "pt-0.5 text-sm font-bold text-green-600 dark:text-green-400" : ""}>
            <Math tex={tex} />
          </p>
        ))}
      </div>
    </div>
  );
}

function MethodStep({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-surface-muted p-3 text-sm">
      <span className="font-bold text-sky-600 dark:text-sky-400">
        {n}) {title}
      </span>{" "}
      {children}
    </div>
  );
}

function FigureBox({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-border bg-surface-muted p-4">{children}</div>;
}

/* ===================== Données : 60 équations (Exercices 1 à 3) ===================== */

const ex1Items: { eq: string; steps: string[] }[] = [
  { eq: "-5x = -20", steps: ["x = -20 \\div (-5)", "x = 4"] },
  { eq: "-4x = -12", steps: ["x = -12 \\div (-4)", "x = 3"] },
  { eq: "-2x = 18", steps: ["x = 18 \\div (-2)", "x = -9"] },
  { eq: "3x = 21", steps: ["x = 21 \\div 3", "x = 7"] },
  { eq: "x - 12 = -17", steps: ["x = -17 + 12", "x = -5"] },
  { eq: "3x = -24", steps: ["x = -24 \\div 3", "x = -8"] },
  { eq: "-3x = 21", steps: ["x = 21 \\div (-3)", "x = -7"] },
  { eq: "-3x = 21", steps: ["x = 21 \\div (-3)", "x = -7"] },
  { eq: "x + 7 = 1", steps: ["x = 1 - 7", "x = -6"] },
  { eq: "x + 2 = -3", steps: ["x = -3 - 2", "x = -5"] },
  { eq: "x - 10 = 0", steps: ["x = 0 + 10", "x = 10"] },
  { eq: "x + 1 = -4", steps: ["x = -4 - 1", "x = -5"] },
  { eq: "2x = 6", steps: ["x = 6 \\div 2", "x = 3"] },
  { eq: "x - 15 = -16", steps: ["x = -16 + 15", "x = -1"] },
  { eq: "-3x = 24", steps: ["x = 24 \\div (-3)", "x = -8"] },
  { eq: "x - 9 = -13", steps: ["x = -13 + 9", "x = -4"] },
  { eq: "x - 15 = -25", steps: ["x = -25 + 15", "x = -10"] },
  { eq: "x + 14 = 11", steps: ["x = 11 - 14", "x = -3"] },
  { eq: "2x = 4", steps: ["x = 4 \\div 2", "x = 2"] },
  { eq: "x + 16 = 13", steps: ["x = 13 - 16", "x = -3"] },
];

const ex2Items: { eq: string; steps: string[] }[] = [
  { eq: "4(x - 6) = 8", steps: ["x - 6 = 2", "x = 8"] },
  { eq: "4(x - 7) = 8", steps: ["x - 7 = 2", "x = 9"] },
  { eq: "-(x - 5) = 13", steps: ["x - 5 = -13", "x = -8"] },
  { eq: "4(x + 3) = -16", steps: ["x + 3 = -4", "x = -7"] },
  { eq: "-3x - 5 = 16", steps: ["-3x = 21", "x = -7"] },
  { eq: "5(x + 6) = 55", steps: ["x + 6 = 11", "x = 5"] },
  { eq: "-2x + 8 = 8", steps: ["-2x = 0", "x = 0"] },
  { eq: "-x + 8 = -1", steps: ["-x = -9", "x = 9"] },
  { eq: "3x - 9 = 15", steps: ["3x = 24", "x = 8"] },
  { eq: "-2x + 3 = -15", steps: ["-2x = -18", "x = 9"] },
  { eq: "3(x - 7) = -3", steps: ["x - 7 = -1", "x = 6"] },
  { eq: "3(x - 1) = 18", steps: ["x - 1 = 6", "x = 7"] },
  { eq: "-4(x - 6) = 52", steps: ["x - 6 = -13", "x = -7"] },
  { eq: "-2x + 7 = 11", steps: ["-2x = 4", "x = -2"] },
  { eq: "3(x - 10) = -12", steps: ["x - 10 = -4", "x = 6"] },
  { eq: "4(x + 2) = 40", steps: ["x + 2 = 10", "x = 8"] },
  { eq: "4(x + 5) = 56", steps: ["x + 5 = 14", "x = 9"] },
  { eq: "-4(x + 3) = 20", steps: ["x + 3 = -5", "x = -8"] },
  { eq: "5(x + 5) = 70", steps: ["x + 5 = 14", "x = 9"] },
  { eq: "4x + 1 = -35", steps: ["4x = -36", "x = -9"] },
];

const ex3Items: { eq: string; steps: string[] }[] = [
  { eq: "-(x - 5) = -5x - 19", steps: ["-x + 5 = -5x - 19", "-x + 5x = -19 - 5", "4x = -24", "x = -6"] },
  { eq: "-5x + 8 = x + 38", steps: ["-5x - x = 38 - 8", "x = -5"] },
  { eq: "-2(x - 4) = -3x", steps: ["-2x + 8 = -3x", "-2x + 3x = -8", "x = -8"] },
  { eq: "-2x - 10 = 5x + 18", steps: ["-2x - 5x = 18 + 10", "x = -4"] },
  { eq: "-2(x - 9) = -5x + 21", steps: ["-2x + 18 = -5x + 21", "-2x + 5x = 21 - 18", "3x = 3", "x = 1"] },
  { eq: "4x - 10 = -x - 40", steps: ["4x + x = -40 + 10", "x = -6"] },
  { eq: "3(x + 1) = 2x + 11", steps: ["3x + 3 = 2x + 11", "3x - 2x = 11 - 3", "x = 8"] },
  { eq: "4(x - 7) = -4x + 28", steps: ["4x - 28 = -4x + 28", "4x + 4x = 28 + 28", "x = 7"] },
  { eq: "-4(x - 5) = -3x + 23", steps: ["-4x + 20 = -3x + 23", "-4x + 3x = 23 - 20", "x = -3"] },
  { eq: "3(x + 7) = -2x + 61", steps: ["3x + 21 = -2x + 61", "3x + 2x = 61 - 21", "x = 8"] },
  { eq: "2x - 6 = -2x - 18", steps: ["2x + 2x = -18 + 6", "x = -3"] },
  { eq: "-2x - 6 = -4x - 12", steps: ["-2x + 4x = -12 + 6", "x = -3"] },
  { eq: "2x - 3 = x + 3", steps: ["2x - x = 3 + 3", "x = 6"] },
  { eq: "-x + 2 = 3x + 22", steps: ["-x - 3x = 22 - 2", "x = -5"] },
  { eq: "3(x - 9) = 5x - 27", steps: ["3x - 27 = 5x - 27", "3x - 5x = -27 + 27", "x = 0"] },
  { eq: "4x - 3 = x - 33", steps: ["4x - x = -33 + 3", "x = -10"] },
  { eq: "-4(x - 10) = 3x + 40", steps: ["-4x + 40 = 3x + 40", "-4x - 3x = 40 - 40", "x = 0"] },
  { eq: "-4x - 6 = -2x - 16", steps: ["-4x + 2x = -16 + 6", "x = 5"] },
  { eq: "3(x - 9) = -4x - 6", steps: ["3x - 27 = -4x - 6", "3x + 4x = -6 + 27", "x = 3"] },
  { eq: "-4(x - 9) = -3x + 30", steps: ["-4x + 36 = -3x + 30", "-4x + 3x = 30 - 36", "x = 6"] },
];

const exampleEquations = [
  "x + 1{,}5 = 3{,}5",
  "-x - 7 = -4",
  "x - 2{,}5 = 12",
  "-x + 2 = 0",
  "3x = 15",
  "-2x = -11",
  "-7x = 21",
  "2{,}5x = 0",
];

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "4", label: "parties de cours" },
          { value: "66", label: "exercices & problèmes" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#definition"
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
          <div className="flex select-none items-baseline gap-3 font-serif text-white italic">
            <span className="text-6xl font-bold sm:text-7xl">x</span>
            <span className="text-4xl text-orange-400 sm:text-5xl">=</span>
            <span className="text-6xl font-bold sm:text-7xl">?</span>
          </div>
        }
      />

      {/* ===================== I. DEFINITION ===================== */}
      <LessonSection
        id="definition"
        kicker="01 · Vocabulaire"
        title="Définition & vocabulaire"
        tone="light"
        description="L'équation du premier degré à une inconnue."
      >
        <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
          <p className="mb-1 text-xs font-bold text-rose-600 uppercase">Définition</p>
          <p className="text-foreground">
            Soient <strong>a</strong>, <strong>b</strong> et <strong>x</strong> des nombres relatifs. Toute égalité de la forme{" "}
            <strong className="font-mono"><Math tex="x + a = b" /></strong> ou <strong className="font-mono"><Math tex="a \times x = b" /></strong>{" "}
            (avec <Math tex="a \neq 0" />) est appelée <strong>équation du premier degré à une inconnue x</strong>.
          </p>
        </div>

        <div className="mb-8">
          <Callout variant="warning" title="Vocabulaire">
            <p>
              <strong>Résoudre</strong> une équation du premier degré à une inconnue x, c&apos;est <strong>trouver la valeur de l&apos;inconnue x</strong>,
              qui s&apos;appelle <strong>la solution de l&apos;équation</strong>.
            </p>
          </Callout>
        </div>

        <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">Exemples d&apos;équations</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {exampleEquations.map((eq, i) => (
            <div key={i} className="rounded-xl border border-border bg-surface p-3 text-center text-sm font-semibold text-foreground shadow-sm">
              <Math tex={eq} />
            </div>
          ))}
        </div>
      </LessonSection>

      {/* ===================== II. RESOUDRE ===================== */}
      <LessonSection
        id="resoudre"
        kicker="02 · Les deux formes de base"
        title="Résoudre une équation"
        tone="muted"
        description="x + a = b et a × x = b : deux formes, deux règles simples."
      >
        <div className="mb-12">
          <h3 className="mb-3 text-xl font-bold text-foreground">
            a) Résolution de l&apos;équation <Math tex="x + a = b" />
          </h3>
          <div className="mb-4">
            <PropBox tone="violet">
              Pour résoudre l&apos;équation <strong>x + a = b</strong>, on ajoute à <strong>b</strong> l&apos;opposé de <strong>a</strong>. On écrit :{" "}
              <span className="font-mono font-bold"><Math tex="x = b - a" /></span>.
            </PropBox>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MiniExample n={1} tone="violet" eq="2{,}5 + x = 5" steps={["x = 5 - 2{,}5", "x = 2{,}5"]} />
            <MiniExample n={2} tone="violet" eq="x - 11 = -2" steps={["x = -2 + 11", "x = 9"]} />
            <MiniExample n={3} tone="violet" eq="7 - x = 14{,}6" steps={["-x = 14{,}6 - 7 = 7{,}6", "x = -7{,}6"]} />
            <MiniExample n={4} tone="violet" eq="-x - 9 = -12" steps={["-x = -12 + 9 = -3", "x = 3"]} />
            <MiniExample n={5} tone="violet" eq="x + 5 = 0" steps={["x = 0 - 5", "x = -5"]} />
            <MiniExample n={6} tone="violet" eq="-11 - x = 0" steps={["-x = 0 + 11 = 11", "x = -11"]} />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold text-foreground">
            b) Résolution de l&apos;équation <Math tex="a \times x = b" /> (a ≠ 0)
          </h3>
          <div className="mb-4">
            <PropBox tone="sky">
              Pour résoudre l&apos;équation <strong>ax = b</strong> (a ≠ 0), on divise <strong>b</strong> par <strong>a</strong>. On écrit :{" "}
              <span className="font-mono font-bold"><Math tex="x = \dfrac{b}{a}" /></span>.
            </PropBox>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <MiniExample n={1} tone="sky" eq="2x = 4" steps={["x = 4 \\div 2", "x = 2"]} />
            <MiniExample n={2} tone="sky" eq="-5x = 12" steps={["x = 12 \\div (-5)", "x = -2{,}4"]} />
            <MiniExample n={3} tone="sky" eq="-6x = -9" steps={["x = -9 \\div (-6)", "x = 1{,}5"]} />
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. METHODES ===================== */}
      <LessonSection
        id="methodes"
        kicker="03 · Transformer une équation"
        title="Méthodes et techniques"
        tone="light"
        description="Deux propriétés pour transformer une équation en une équation équivalente."
      >
        <div className="mb-12">
          <h3 className="mb-3 text-xl font-bold text-foreground">a) Propriété 1</h3>
          <div className="mb-4">
            <PropBox tone="emerald">
              Si on <strong>ajoute</strong> ou on <strong>retranche</strong> le même nombre aux deux membres d&apos;une équation, on obtient une{" "}
              <strong>nouvelle équation équivalente</strong>.
            </PropBox>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniExample n={1} tone="emerald" eq="2x + 1 = x - 6" steps={["2x - x = -6 - 1", "x = -7"]} />
            <MiniExample n={2} tone="emerald" eq="5x - 5 = 2x - 20" steps={["5x - 2x = -20 + 5", "3x = -15", "x = -5"]} />
            <MiniExample n={3} tone="emerald" eq="2(2x + 1) = 5(x - 5)" steps={["4x + 2 = 5x - 25", "4x - 5x = -25 - 2", "-x = -27", "x = 27"]} />
            <MiniExample
              n={4}
              tone="emerald"
              eq="2x - 3(x - 4) + 5(x + 3) = 0"
              steps={["2x - 3x + 12 + 5x + 15 = 0", "2x - 3x + 5x = -12 - 15", "4x = -27", "x = -6{,}75"]}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold text-foreground">b) Propriété 2</h3>
          <div className="mb-4">
            <PropBox tone="teal">
              Si on <strong>multiplie</strong> ou on <strong>divise</strong> les deux membres d&apos;une équation par le même nombre relatif non nul, on
              obtient une <strong>nouvelle équation équivalente</strong>.
            </PropBox>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MiniExample
              n={1}
              tone="teal"
              eq="\dfrac{2x+1}{3} = x - 5"
              steps={["3\\times\\dfrac{2x+1}{3} = 3\\times(x-5)", "2x + 1 = 3x - 15", "2x - 3x = -15 - 1", "x = 16"]}
            />
            <MiniExample
              n={2}
              tone="teal"
              eq="\dfrac{2x-1}{2} = \dfrac{x+1}{3}"
              steps={["3(2x-1) = 2(x+1)", "6x - 3 = 2x + 2", "6x - 2x = 2 + 3", "x = \\dfrac{5}{4} = 1{,}25"]}
            />
            <MiniExample
              n={3}
              tone="teal"
              eq="\dfrac{x+1}{2} + x = \dfrac{3x-1}{4}"
              steps={["2(x+1) + 4x = 3x - 1", "2x + 2 + 4x = 3x - 1", "2x + 4x - 3x = -1 - 2", "x = -1"]}
            />
          </div>
        </div>
      </LessonSection>

      {/* ===================== IV. PROBLEMES ===================== */}
      <LessonSection
        id="problemes"
        kicker="04 · La méthode en 4 étapes"
        title="Résolution de problèmes"
        tone="muted"
        description="Toujours la même méthode, appliquée à deux exemples."
      >
        <div className="mb-10 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-4 text-xs font-bold tracking-wide text-sky-500 uppercase">Règle : pour résoudre un problème, on suit les étapes suivantes</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Choix de l'inconnue", "Mise en équation", "Résolution & vérification", "Retour au problème"].map((label, i) => (
              <div key={i} className="rounded-xl border border-sky-300 bg-sky-50 p-4 text-center dark:border-sky-800 dark:bg-sky-950/20">
                <p className="text-2xl font-extrabold text-sky-600 dark:text-sky-400">{i + 1}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <p className="mb-3 text-xs font-bold tracking-wide text-indigo-500 uppercase">✍️ Exemple 1</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Saïd a deux ans de plus que sa sœur Amal. Après 5 ans, la somme de leurs âges sera 40 ans. Quel est l&apos;âge de chacun d&apos;entre eux
              maintenant ?
            </p>
            <div className="space-y-3 text-sm">
              <MethodStep n="1" title="Choix de l&apos;inconnue —">Soit x l&apos;âge d&apos;Amal maintenant.</MethodStep>
              <MethodStep n="2" title="Mise en équation —">
                L&apos;âge de Saïd est (x+2). Après 5 ans, Amal aura (x+5) et Saïd aura ((x+2)+5). Donc :{" "}
                <span className="font-mono"><Math tex="(x+5) + ((x+2)+5) = 40" /></span>
              </MethodStep>
              <div className="rounded-lg border border-border bg-surface-muted p-3 font-mono text-xs text-foreground-muted">
                <p className="mb-1 font-sans text-sm font-bold text-sky-600 dark:text-sky-400">3) Résolution —</p>
                <p><Math tex="x + 5 + x + 2 + 5 = 40" /></p>
                <p><Math tex="2x = 40 - 5 - 2 - 5" /></p>
                <p><Math tex="2x = 28 \implies x = 14" /></p>
              </div>
              <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3">
                <strong className="text-green-700">4) Retour au problème —</strong> Amal a <strong>14 ans</strong> et Saïd a <strong>16 ans</strong>.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 md:p-7">
            <p className="mb-3 text-xs font-bold tracking-wide text-violet-500 uppercase">✍️ Exemple 2</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Dans une classe de 1AC, le nombre d&apos;élèves est 32 (filles et garçons). Quel est le nombre de filles et le nombre de garçons, sachant
              que les garçons représentent un tiers des filles ?
            </p>
            <div className="space-y-3 text-sm">
              <MethodStep n="1" title="Choix de l&apos;inconnue —">Soit x le nombre de filles.</MethodStep>
              <MethodStep n="2" title="Mise en équation —">
                Le nombre de garçons est <span className="font-mono"><Math tex="\dfrac{1}{3}x" /></span>. Comme il y a 32 élèves :{" "}
                <span className="font-mono"><Math tex="x + \dfrac{1}{3}x = 32" /></span>
              </MethodStep>
              <div className="rounded-lg border border-border bg-surface-muted p-3 font-mono text-xs text-foreground-muted">
                <p className="mb-1 font-sans text-sm font-bold text-sky-600 dark:text-sky-400">3) Résolution —</p>
                <p><Math tex="\dfrac{3x}{3} + \dfrac{x}{3} = \dfrac{96}{3}" /></p>
                <p><Math tex="3x + x = 96" /></p>
                <p><Math tex="4x = 96 \implies x = 24" /></p>
              </div>
              <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3">
                <strong className="text-green-700">4) Retour au problème —</strong> Il y a <strong>24 filles</strong> et <strong>8 garçons</strong>.
              </div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="66 exercices & problèmes corrigés"
        tone="light"
        description="Trois séries d'équations à résoudre, puis six problèmes avec la méthode en 4 étapes."
      >
        <ExerciseGroup total={9} celebrationTitle="Bravo, tout est vérifié !" celebrationSubtitle="Tu maîtrises les équations du premier degré.">
          <ExerciseCard
            id="1"
            index={1}
            title="Résoudre les équations : x + a = b et ax = b"
            itemsLabel="20 équations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ex1Items.map((it, i) => (
                  <Item key={i} n={i + 1}>{it.eq}</Item>
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                {ex1Items.map((it, i) => (
                  <CorrectionCard key={i} n={i + 1} lines={it.steps} />
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Résoudre les équations avec parenthèses"
            itemsLabel="20 équations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ex2Items.map((it, i) => (
                  <Item key={i} n={i + 1}>{it.eq}</Item>
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                {ex2Items.map((it, i) => (
                  <CorrectionCard key={i} n={i + 1} lines={it.steps} />
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Résoudre les équations : x des deux côtés"
            itemsLabel="20 équations"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ex3Items.map((it, i) => (
                  <Item key={i} n={i + 1}>{it.eq}</Item>
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                {ex3Items.map((it, i) => (
                  <CorrectionCard key={i} n={i + 1} lines={it.steps} />
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="pb1"
            index={4}
            title="Problème · Le prix d'un livre"
            items={<p className="text-sm text-foreground-muted">Ahmed achète 3 livres et Karim en achète 4. Ensemble, ils ont dépensé 70 dh. Quel est le prix d&apos;un livre ?</p>}
            correction={
              <div className="space-y-2.5 text-sm">
                <MethodStep n="1" title="Choix de l&apos;inconnue —">Soit x le prix d&apos;un livre, en dh.</MethodStep>
                <MethodStep n="2" title="Mise en équation —">
                  Ahmed paie 3x et Karim paie 4x. Ensemble : <span className="font-mono"><Math tex="3x + 4x = 70" /></span>
                </MethodStep>
                <MethodStep n="3" title="Résolution —">
                  <span className="font-mono"><Math tex="7x = 70 \implies x = 10" /></span>
                </MethodStep>
                <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3">
                  <strong className="text-green-700">4) Retour au problème —</strong> le prix d&apos;un livre est <strong>10 dh</strong>.
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="pb2"
            index={5}
            title="Problème · Même périmètre"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">
                  On considère les deux figures suivantes. Déterminer la valeur de x afin que le triangle ABC et le rectangle GDEF (GF et DE
                  horizontaux) aient le même périmètre.
                </p>
                <FigureBox>
                  <svg viewBox="0 0 480 260" className="mx-auto h-auto w-full max-w-md">
                    <polygon points="30,230 150,30 240,165" className="fill-indigo-50 stroke-indigo-600 dark:fill-indigo-950/30 dark:stroke-indigo-400" strokeWidth="2.5" />
                    <circle cx="30" cy="230" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="150" cy="30" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <circle cx="240" cy="165" r="4.5" className="fill-indigo-600 dark:fill-indigo-400" />
                    <text x="10" y="250" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">A</text>
                    <text x="144" y="20" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">C</text>
                    <text x="248" y="160" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">B</text>
                    <text x="62" y="122" fontSize="12" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">4</text>
                    <text x="196" y="90" fontSize="12" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">x+1</text>
                    <text x="105" y="220" fontSize="12" className="fill-indigo-700 dark:fill-indigo-300 font-semibold">3x-2</text>
                    <rect x="290" y="50" width="170" height="140" className="fill-rose-50 stroke-rose-600 dark:fill-rose-950/20 dark:stroke-rose-400" strokeWidth="2.5" />
                    <circle cx="290" cy="50" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="460" cy="50" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="290" cy="190" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
                    <circle cx="460" cy="190" r="4.5" className="fill-rose-600 dark:fill-rose-400" />
                    <text x="277" y="42" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">G</text>
                    <text x="465" y="42" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">F</text>
                    <text x="277" y="210" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">D</text>
                    <text x="465" y="210" fontSize="15" className="fill-slate-700 dark:fill-slate-200 font-bold">E</text>
                    <text x="353" y="212" fontSize="12" className="fill-rose-700 dark:fill-rose-300 font-semibold">2x-1</text>
                    <text x="466" y="124" fontSize="12" className="fill-rose-700 dark:fill-rose-300 font-semibold">3x-5</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <MethodStep n="1" title="Mise en équation —">
                  périmètre(ABC) = périmètre(rectangle) :{" "}
                  <span className="font-mono"><Math tex="4 + (x+1) + (3x-2) = 2\times[(2x-1) + (3x-5)]" /></span>
                </MethodStep>
                <div className="rounded-lg border border-border bg-surface-muted p-3 font-mono text-xs text-foreground-muted">
                  <p className="mb-1 font-sans text-sm font-bold text-sky-600 dark:text-sky-400">2) Résolution —</p>
                  <p><Math tex="4x + 3 = 2(5x-6)" /></p>
                  <p><Math tex="4x + 3 = 10x - 12" /></p>
                  <p><Math tex="4x - 10x = -12 - 3" /></p>
                  <p><Math tex="-6x = -15 \implies x = 2{,}5" /></p>
                </div>
                <MethodStep n="3" title="Vérification —">
                  périmètre triangle = 4 + 3,5 + 5,5 = <strong>13</strong> ; périmètre rectangle = 2×(4 + 2,5) = <strong>13</strong>. Les deux
                  périmètres sont bien égaux.
                </MethodStep>
                <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3">
                  <strong className="text-green-700">4) Retour au problème —</strong> la valeur cherchée est <strong>x = 2,5</strong>.
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="pb3"
            index={6}
            title="Problème · Trois nombres consécutifs"
            items={<p className="text-sm text-foreground-muted">Déterminer trois nombres consécutifs entiers naturels dont la somme est 309.</p>}
            correction={
              <div className="space-y-2.5 text-sm">
                <MethodStep n="1" title="Choix de l&apos;inconnue —">Soit x le premier des trois nombres. Les nombres sont x, x+1 et x+2.</MethodStep>
                <MethodStep n="2" title="Mise en équation —">
                  <span className="font-mono"><Math tex="x + (x+1) + (x+2) = 309" /></span>
                </MethodStep>
                <MethodStep n="3" title="Résolution —">
                  <span className="font-mono"><Math tex="3x + 3 = 309 \implies 3x = 306 \implies x = 102" /></span>
                </MethodStep>
                <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3">
                  <strong className="text-green-700">4) Retour au problème —</strong> les trois nombres sont <strong>102, 103 et 104</strong>.
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="pb4"
            index={7}
            title="Problème · Les âges"
            items={<p className="text-sm text-foreground-muted">Safaa a 11 ans et son frère a 26 ans. Dans combien d&apos;années l&apos;âge du frère sera-t-il le double de celui de Safaa ?</p>}
            correction={
              <div className="space-y-2.5 text-sm">
                <MethodStep n="1" title="Choix de l&apos;inconnue —">Soit x le nombre d&apos;années à attendre.</MethodStep>
                <MethodStep n="2" title="Mise en équation —">
                  Dans x années, Safaa aura (11+x) ans et son frère (26+x) ans :{" "}
                  <span className="font-mono"><Math tex="26 + x = 2(11 + x)" /></span>
                </MethodStep>
                <MethodStep n="3" title="Résolution —">
                  <span className="font-mono"><Math tex="26 + x = 22 + 2x \implies 26 - 22 = 2x - x \implies x = 4" /></span>
                </MethodStep>
                <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3">
                  <strong className="text-green-700">4) Retour au problème —</strong> dans <strong>4 ans</strong> (Safaa aura 15 ans, son frère 30
                  ans, soit bien le double).
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="pb5"
            index={8}
            title="Problème · La salle d'étude"
            items={
              <p className="text-sm text-foreground-muted">
                Dans une salle d&apos;étude, la moitié des élèves font des mathématiques, le quart étudie l&apos;histoire, le septième l&apos;anglais, et
                trois élèves font du dessin. Trouver le nombre d&apos;élèves dans cette salle.
              </p>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <MethodStep n="1" title="Choix de l&apos;inconnue —">Soit x le nombre total d&apos;élèves.</MethodStep>
                <MethodStep n="2" title="Mise en équation —">
                  <span className="font-mono"><Math tex="\dfrac{x}{2} + \dfrac{x}{4} + \dfrac{x}{7} + 3 = x" /></span>
                </MethodStep>
                <div className="rounded-lg border border-border bg-surface-muted p-3 font-mono text-xs text-foreground-muted">
                  <p className="mb-1 font-sans text-sm font-bold text-sky-600 dark:text-sky-400">3) Résolution — (×28)</p>
                  <p><Math tex="14x + 7x + 4x + 84 = 28x" /></p>
                  <p><Math tex="25x + 84 = 28x \implies 84 = 3x \implies x = 28" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-green-100/50 p-3">
                  <strong className="text-green-700">4) Retour au problème —</strong> il y a <strong>28 élèves</strong> (14 en maths, 7 en histoire,
                  4 en anglais, 3 en dessin).
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="pb6"
            index={9}
            title="Problème · Les bonbons"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  J&apos;ai 36 bonbons. 7/12 d&apos;entre eux sont à la fraise, et les 2/3 des bonbons restants sont au caramel.
                </p>
                <ol className="list-inside list-decimal space-y-1 text-sm text-foreground">
                  <li>Combien y a-t-il de bonbons à la fraise ? Combien en reste-t-il ?</li>
                  <li>Combien y en a-t-il au caramel ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <MethodStep n="1" title="Bonbons à la fraise —">
                  <span className="font-mono"><Math tex="\dfrac{7}{12}\times 36 = 21" /></span> bonbons à la fraise. Il en reste{" "}
                  <span className="font-mono"><Math tex="36 - 21 = 15" /></span>.
                </MethodStep>
                <MethodStep n="2" title="Bonbons au caramel —">
                  <span className="font-mono"><Math tex="\dfrac{2}{3}\times 15 = 10" /></span> bonbons au caramel.
                </MethodStep>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
