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
  title: "Les Nombres Relatifs · Addition et Soustraction · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur l'addition et la soustraction des nombres relatifs (règles, propriétés, expressions algébriques) avec 6 exercices corrigés pas à pas. 1ère année collège, semestre 1.",
  kicker: "1ʳᵉ Année Collège · Chapitre 6",
  heroTitle: "Addition et soustraction",
  heroSubtitle:
    "Huit règles pour additionner, soustraire et simplifier des expressions avec des nombres relatifs, illustrées d'exemples résolus.",
  footerNote: "Les nombres relatifs · Addition et soustraction · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "addition", label: "Addition" },
    { id: "soustraction", label: "Soustraction" },
    { id: "expressions", label: "Expressions" },
    { id: "exercices", label: "Exercices" },
  ],
};

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

function RuleBox({
  index,
  title,
  rule,
  children,
}: {
  index: number;
  title: string;
  rule: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
          {index}
        </span>
        <h3 className="font-display font-bold text-foreground">{title}</h3>
      </div>
      <p className="rounded-xl border-l-4 border-rose-400 bg-rose-100/60 p-4 text-sm text-foreground sm:text-base">{rule}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function ExampleCell({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm">
      {label ? <p className="mb-2 font-sans text-xs text-foreground-muted uppercase tracking-wide">{label}</p> : null}
      <div className="space-y-1">{children}</div>
    </div>
  );
}

type Cell = { value: string; given: boolean };

function Pyramid({ rows, mode }: { rows: Cell[][]; mode: "question" | "answer" }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface-muted py-6">
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center gap-2">
          {row.map((cell, j) => {
            const cls = cell.given
              ? "border-border bg-surface text-foreground"
              : mode === "answer"
                ? "border-green-500/40 bg-green-100/60 text-green-700"
                : "border-dashed border-border bg-surface text-foreground-muted";
            return (
              <div
                key={j}
                className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 font-mono text-sm font-bold sm:h-14 sm:w-14 sm:text-base ${cls}`}
              >
                {cell.given ? cell.value : mode === "answer" ? cell.value : "?"}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function MagicSquare({ cells, cols, mode }: { cells: Cell[]; cols: number; mode: "question" | "answer" }) {
  return (
    <div
      className="grid w-full gap-1.5 sm:gap-2"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, maxWidth: cols === 3 ? 220 : 280 }}
    >
      {cells.map((cell, i) => {
        const cls = cell.given
          ? "border-border bg-surface text-foreground"
          : mode === "answer"
            ? "border-green-500/40 bg-green-100/60 text-green-700"
            : "border-dashed border-border bg-surface text-foreground-muted";
        return (
          <div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-lg border-2 font-mono text-sm font-bold sm:text-base ${cls}`}
          >
            {cell.given ? cell.value : mode === "answer" ? cell.value : "?"}
          </div>
        );
      })}
    </div>
  );
}

const pyramid1: Cell[][] = [
  [{ value: "-13", given: false }],
  [
    { value: "-1", given: false },
    { value: "-12", given: false },
  ],
  [
    { value: "1", given: false },
    { value: "-2", given: false },
    { value: "-10", given: false },
  ],
  [
    { value: "-2", given: true },
    { value: "3", given: true },
    { value: "-5", given: true },
    { value: "-5", given: true },
  ],
];

const pyramid2: Cell[][] = [
  [{ value: "10", given: false }],
  [
    { value: "10", given: false },
    { value: "0", given: false },
  ],
  [
    { value: "7", given: true },
    { value: "3", given: false },
    { value: "-3", given: true },
  ],
  [
    { value: "6", given: true },
    { value: "1", given: false },
    { value: "2", given: false },
    { value: "-5", given: true },
  ],
];

const square1: Cell[] = [
  { value: "0", given: false },
  { value: "1", given: false },
  { value: "-4", given: true },
  { value: "-5", given: true },
  { value: "-1", given: true },
  { value: "3", given: false },
  { value: "2", given: true },
  { value: "-3", given: false },
  { value: "-2", given: false },
];

const square2: Cell[] = [
  { value: "-4", given: true },
  { value: "6", given: true },
  { value: "7", given: true },
  { value: "-7", given: true },
  { value: "1", given: true },
  { value: "-1", given: false },
  { value: "-2", given: true },
  { value: "4", given: true },
  { value: "-3", given: true },
  { value: "3", given: true },
  { value: "2", given: false },
  { value: "0", given: true },
  { value: "8", given: false },
  { value: "-6", given: false },
  { value: "-5", given: false },
  { value: "5", given: false },
];

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "8", label: "règles et propriétés" },
          { value: "6", label: "exercices corrigés" },
          { value: "47", label: "questions corrigées" },
        ]}
        ctas={
          <>
            <a
              href="#addition"
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
          <div className="relative flex select-none items-center gap-4 font-serif italic">
            <span className="text-[6rem] leading-none font-bold text-emerald-400 sm:text-[7rem]">+</span>
            <span className="text-[6rem] leading-none font-bold text-rose-400 sm:text-[7rem]">−</span>
          </div>
        }
      />

      {/* ===================== I. ADDITION ===================== */}
      <LessonSection
        id="addition"
        kicker="01 · Additionner deux nombres relatifs"
        title="Addition de deux nombres relatifs"
        tone="light"
        description="Quatre situations à connaître : même signe, signes contraires, addition avec zéro, addition de deux nombres opposés."
      >
        <div className="grid gap-4">
          <RuleBox index={1} title="Règle 1 · Somme de deux nombres de même signe" rule="Pour calculer la somme de deux nombres relatifs de même signe, on garde le même signe puis on additionne les distances des deux nombres à zéro.">
            <ExampleCell><Math tex="(-25) + (-11) = -(25+11) = \mathbf{-36}" /></ExampleCell>
            <ExampleCell><Math tex="(-37{,}5) + (-20) = -(37{,}5+20) = \mathbf{-57{,}5}" /></ExampleCell>
            <ExampleCell><Math tex="12{,}03 + 0{,}5 = \mathbf{12{,}53}" /></ExampleCell>
            <ExampleCell><Math tex="314 + 19{,}23 = \mathbf{333{,}23}" /></ExampleCell>
          </RuleBox>

          <RuleBox index={2} title="Règle 2 · Somme de deux nombres de signes contraires" rule="Pour calculer la somme de deux nombres relatifs de signes contraires, on garde le signe du nombre le plus éloigné de zéro, puis on fait la différence des distances des deux nombres à zéro.">
            <ExampleCell><Math tex="(-15) + 11 = -(15-11) = \mathbf{-4}" /></ExampleCell>
            <ExampleCell><Math tex="(-25{,}6) + 45 = +(45-25{,}6) = \mathbf{19{,}4}" /></ExampleCell>
            <ExampleCell><Math tex="22 + (-7) = +(22-7) = \mathbf{15}" /></ExampleCell>
            <ExampleCell><Math tex="17 + (-23) = -(23-17) = \mathbf{-6}" /></ExampleCell>
          </RuleBox>

          <RuleBox
            index={3}
            title="Propriété 1 · Somme d'un nombre relatif et de zéro"
            rule={<>Soit <Math tex="x" /> un nombre relatif : <Math tex="x + 0 = x" /> et <Math tex="0 + x = x" />.</>}
          >
            <ExampleCell><Math tex="-22{,}5 + 0 = \mathbf{-22{,}5}" /></ExampleCell>
            <ExampleCell><Math tex="17 + 0 = \mathbf{17}" /></ExampleCell>
            <ExampleCell><Math tex="0 + (-114) = \mathbf{-114}" /></ExampleCell>
            <ExampleCell><Math tex="0 + 25{,}33 = \mathbf{25{,}33}" /></ExampleCell>
          </RuleBox>

          <RuleBox index={4} title="Propriété 2 · Somme de deux nombres opposés" rule="La somme de deux nombres relatifs opposés est égale à zéro.">
            <ExampleCell><Math tex="-221 + 221 = \mathbf{0}" /></ExampleCell>
            <ExampleCell><Math tex="11{,}12 + (-11{,}12) = \mathbf{0}" /></ExampleCell>
          </RuleBox>
        </div>
      </LessonSection>

      {/* ===================== II. SOUSTRACTION ===================== */}
      <LessonSection
        id="soustraction"
        kicker="02 · Soustraire deux nombres relatifs"
        title="Soustraction de deux nombres relatifs"
        tone="light"
        description="Une seule propriété suffit : elle ramène toujours la soustraction à une addition déjà connue."
      >
        <RuleBox
          index={5}
          title="Propriété · Soustraire, c'est ajouter l'opposé"
          rule={
            <>
              Soustraire un nombre relatif revient à ajouter son opposé. C&apos;est-à-dire : <Math tex="a - b = a + (-b)" />, où{" "}
              <Math tex="a" /> et <Math tex="b" /> sont deux nombres relatifs.
            </>
          }
        >
          <ExampleCell><Math tex="25 - 29 = 25 + (-29) = \mathbf{-4}" /></ExampleCell>
          <ExampleCell><Math tex="-47{,}5 - 20 = -47{,}5 + (-20) = \mathbf{-67{,}5}" /></ExampleCell>
          <ExampleCell><Math tex="15{,}23 - (-11) = 15{,}23 + 11 = \mathbf{26{,}23}" /></ExampleCell>
          <ExampleCell><Math tex="-12 - (-27{,}5) = -12 + 27{,}5 = \mathbf{15{,}5}" /></ExampleCell>
        </RuleBox>
      </LessonSection>

      {/* ===================== III. EXPRESSIONS ALGÉBRIQUES ===================== */}
      <LessonSection
        id="expressions"
        kicker="03 · Simplifier et calculer"
        title="Expressions algébriques"
        tone="light"
        description="Une expression algébrique mélange nombres relatifs, parenthèses et opérations. On la simplifie avant de la calculer."
      >
        <h3 className="mb-4 font-display text-xl font-bold text-foreground">1. Exemples d&apos;expressions algébriques</h3>
        <div className="mb-10 grid gap-3">
          <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm sm:text-base">
            <Math tex="A = 2{,}5 + 11 - (-1{,}3) - 47 + 12 - 1" />
          </div>
          <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm sm:text-base">
            <Math tex="B = (2{,}5+1) - (-25+0{,}25-12) - 11" />
          </div>
          <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm sm:text-base">
            <Math tex="C = -4{,}5 - 23 + (6-1{,}5+7-(-4+5{,}2)) - 1{,}5 + 3" />
          </div>
        </div>

        <h3 className="mb-2 font-display text-xl font-bold text-foreground">2. Simplifier une expression algébrique</h3>
        <p className="mb-6 text-sm text-foreground-muted sm:text-base">
          Pour simplifier une expression algébrique, on supprime les parenthèses en commençant par les plus intérieures, selon les deux règles suivantes.
        </p>
        <div className="mb-10 grid gap-4">
          <RuleBox
            index={6}
            title="Règle 1 · Parenthèses précédées du signe +"
            rule={
              <>
                Si des parenthèses sont précédées du signe <strong>+</strong>, on peut supprimer les parenthèses et le signe <strong>+</strong> (en commençant par les plus intérieures), <u>sans changer les signes</u> des termes entre les parenthèses.
              </>
            }
          >
            <ExampleCell label="Exemple A">
              <p><Math tex="A = 2{,}5 + (-11) + (25+2-7) - 4" /></p>
              <p><Math tex="A = 2{,}5 - 11 + 25 + 2 - 7 - 4" /></p>
            </ExampleCell>
            <ExampleCell label="Exemple B">
              <p><Math tex="B = (5-2{,}5) + (11+(-7+8)) - 6" /></p>
              <p><Math tex="B = 5 - 2{,}5 + (11-7+8) - 6" /></p>
              <p><Math tex="B = 5 - 2{,}5 + 11 - 7 + 8 - 6" /></p>
            </ExampleCell>
          </RuleBox>

          <RuleBox
            index={7}
            title="Règle 2 · Parenthèses précédées du signe −"
            rule={
              <>
                Si des parenthèses sont précédées du signe <strong>−</strong>, on peut supprimer les parenthèses et le signe <strong>−</strong> (en commençant par les plus intérieures), <u>et changer les signes</u> des termes entre les parenthèses.
              </>
            }
          >
            <ExampleCell label="Exemple A">
              <p><Math tex="A = 7{,}5 - (-31) - (2{,}5+12-4) - 2" /></p>
              <p><Math tex="A = 7{,}5 + 31 - 2{,}5 - 12 + 4 - 2" /></p>
            </ExampleCell>
            <ExampleCell label="Exemple B">
              <p><Math tex="B = -(15-3{,}5) - (1-(-3+4{,}5)) - 3" /></p>
              <p><Math tex="B = -15 + 3{,}5 - (1+3-4{,}5) - 3" /></p>
              <p><Math tex="B = -15 + 3{,}5 - 1 - 3 + 4{,}5 - 3" /></p>
            </ExampleCell>
          </RuleBox>
        </div>

        <h3 className="mb-2 font-display text-xl font-bold text-foreground">3. Calculer une expression algébrique simplifiée</h3>
        <p className="mb-6 text-sm text-foreground-muted sm:text-base">Pour calculer une expression algébrique, il faut d&apos;abord la simplifier.</p>
        <RuleBox index={8} title="Règle 3 · Regrouper avant de calculer" rule="Pour calculer une expression algébrique simplifiée, on ajoute entre eux : les nombres opposés, puis les nombres positifs, puis les nombres négatifs.">
          <ExampleCell label="Exemple A · calculons l'expression">
            <p><Math tex="A = 2{,}5 - 11 + 3 - 2{,}5 + 7 - 3 + 4{,}5 + 1 - 6" /></p>
            <p><Math tex="A = 2{,}5 - 2{,}5 + 3 - 3 + 7 + 4{,}5 + 1 - 11 - 6" /></p>
            <p><Math tex="A = 0 + 0 + 12{,}5 - 17" /></p>
            <p><Math tex="A = 12{,}5 - 17" /></p>
            <p><Math tex="A = \mathbf{-4{,}5}" /></p>
          </ExampleCell>
          <ExampleCell label="Exemple B · simplifions puis calculons">
            <p><Math tex="B = 3{,}5 - (11+3{,}5) + (-7-(-11+1)) + 15" /></p>
            <p><Math tex="B = 3{,}5 - 11 - 3{,}5 + (-7+11-1) + 15" /></p>
            <p><Math tex="B = 3{,}5 - 11 - 3{,}5 - 7 + 11 - 1 + 15" /></p>
            <p><Math tex="B = 3{,}5 - 3{,}5 - 11 + 11 + 15 - 7 - 1" /></p>
            <p><Math tex="B = 0 - 0 + 15 - 8" /></p>
            <p><Math tex="B = 15 - 8" /></p>
            <p><Math tex="B = \mathbf{7}" /></p>
          </ExampleCell>
        </RuleBox>

        <div className="mt-6">
          <Callout variant="warning" title="Remarque utile pour les exercices">
            Les exercices 5 et 6.1 ci-dessous appliquent directement la propriété de la partie II (transformer une soustraction en addition) ; l&apos;exercice 6.2 applique les règles de suppression des parenthèses de cette partie III.
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== IV. EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="6 exercices corrigés"
        tone="muted"
        description="Cherche la solution de chaque exercice, puis clique pour vérifier tes réponses."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises l'addition et la soustraction des nombres relatifs.">
          <ExerciseCard
            id="1"
            index={1}
            title="Gains ou pertes"
            itemsLabel="5 situations"
            items={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-border bg-surface-muted p-4">
                  <p className="mb-1 text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
                  <p>Perd 15 DH, puis gagne 13 DH → <strong>Une perte de 2 DH</strong></p>
                </div>
                {[
                  "Perd 15 DH, puis gagne 12 DH",
                  "Gagne 15 DH, puis perd 17 DH",
                  "Perd 10 DH, puis gagne 17 DH",
                  "Gagne 35 DH, puis gagne 47 DH",
                  "Perd 15 DH, puis gagne 15 DH",
                ].map((s) => (
                  <div key={s} className="rounded-lg border border-border p-4">{s}</div>
                ))}
              </div>
            }
            correction={
              <div className="space-y-2">
                <CorrectionCard n={1}>Une perte de 3 DH</CorrectionCard>
                <CorrectionCard n={2}>Une perte de 2 DH</CorrectionCard>
                <CorrectionCard n={3}>Un gain de 7 DH</CorrectionCard>
                <CorrectionCard n={4}>Un gain de 82 DH</CorrectionCard>
                <CorrectionCard n={5}>Ni gain ni perte (0 DH)</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Calculer les sommes suivantes"
            itemsLabel="15 sommes"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "(+11) + (+3)", "(-2{,}5) + (-12)", "-4 + (-12)", "(+7) + (-5)", "(-7) + (+5)",
                  "(-7) + (-4)", "(+2{,}5) + (-12)", "-14 + (+17)", "-8 + 4", "(+76) + (-76)",
                  "(-1) + (-5)", "(-12) + (+1{,}5)", "(+4) + (-7)", "(+5) + (-2)", "+4 + (-12)",
                ].map((t) => (
                  <div key={t} className="rounded-xl border border-border p-4 text-center font-mono text-sm">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "+14", "-14{,}5", "-16", "+2", "-2",
                  "-11", "-9{,}5", "+3", "-4", "0",
                  "-6", "-10{,}5", "-3", "+3", "-8",
                ].map((t) => (
                  <div key={t} className="rounded-xl border border-green-500/20 bg-surface p-4 text-center font-mono text-sm font-bold text-green-700">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Complète les schémas"
            itemsLabel="pyramides et carrés magiques"
            items={
              <div>
                <h4 className="mb-1 font-display font-semibold text-foreground">1. Pyramides additives</h4>
                <p className="mb-4 text-sm text-foreground-muted">Chaque nombre est la somme des deux nombres juste en dessous.</p>
                <div className="mb-10 grid gap-6 sm:grid-cols-2">
                  <Pyramid rows={pyramid1} mode="question" />
                  <Pyramid rows={pyramid2} mode="question" />
                </div>
                <h4 className="mb-1 font-display font-semibold text-foreground">2. Carrés magiques</h4>
                <p className="mb-4 text-sm text-foreground-muted">Les sommes de chaque ligne, de chaque colonne et de chaque diagonale doivent être égales.</p>
                <div className="grid items-start gap-6 sm:grid-cols-2">
                  <div className="flex flex-col items-center rounded-2xl border border-border bg-surface-muted p-6">
                    <MagicSquare cells={square1} cols={3} mode="question" />
                  </div>
                  <div className="flex flex-col items-center rounded-2xl border border-border bg-surface-muted p-6">
                    <MagicSquare cells={square2} cols={4} mode="question" />
                  </div>
                </div>
              </div>
            }
            correction={
              <div>
                <p className="mb-4 text-xs font-semibold text-foreground-muted uppercase">Pyramides</p>
                <div className="mb-8 grid gap-6 sm:grid-cols-2">
                  <Pyramid rows={pyramid1} mode="answer" />
                  <Pyramid rows={pyramid2} mode="answer" />
                </div>
                <p className="mb-4 text-xs font-semibold text-foreground-muted uppercase">Carrés magiques</p>
                <div className="grid items-start gap-6 sm:grid-cols-2">
                  <div className="flex flex-col items-center rounded-2xl border border-green-500/20 bg-surface p-6">
                    <MagicSquare cells={square1} cols={3} mode="answer" />
                  </div>
                  <div className="flex flex-col items-center rounded-2xl border border-green-500/20 bg-surface p-6">
                    <MagicSquare cells={square2} cols={4} mode="answer" />
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Détermine la valeur manquante"
            itemsLabel="5 égalités"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border p-4 font-mono text-sm"><Math tex="\Box + (+4) = (+3)" /></div>
                <div className="rounded-xl border border-border p-4 font-mono text-sm"><Math tex="(-3) + \Box = (-5)" /></div>
                <div className="rounded-xl border border-border p-4 font-mono text-sm"><Math tex="\Box + (+7) = (-12)" /></div>
                <div className="rounded-xl border border-border p-4 font-mono text-sm"><Math tex="\Box + (-7{,}2) = (-1{,}8)" /></div>
                <div className="rounded-xl border border-border p-4 font-mono text-sm sm:col-span-2"><Math tex="(-5{,}8) + \Box = (+6{,}4)" /></div>
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="\mathbf{-1} + (+4) = (+3)" /></div>
                <div className="rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="(-3) + \mathbf{-2} = (-5)" /></div>
                <div className="rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="\mathbf{-19} + (+7) = (-12)" /></div>
                <div className="rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="\mathbf{5{,}4} + (-7{,}2) = (-1{,}8)" /></div>
                <div className="rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm sm:col-span-2"><Math tex="(-5{,}8) + \mathbf{12{,}2} = (+6{,}4)" /></div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Transforme puis calcule"
            itemsLabel="6 soustractions"
            items={
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "(+10) - (-12)",
                  "(-21) - (+13)",
                  "(-9) - (+14)",
                  "(+12{,}4) - (-9{,}7)",
                  "(-65) - (-78)",
                  "(-17{,}2) - (+5{,}5)",
                ].map((t) => (
                  <div key={t} className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "(+10) - (-12) = (+10) + (+12) = \\mathbf{+22}",
                  "(-21) - (+13) = (-21) + (-13) = \\mathbf{-34}",
                  "(-9) - (+14) = (-9) + (-14) = \\mathbf{-23}",
                  "(+12{,}4) - (-9{,}7) = (+12{,}4) + (+9{,}7) = \\mathbf{+22{,}1}",
                  "(-65) - (-78) = (-65) + (+78) = \\mathbf{+13}",
                  "(-17{,}2) - (+5{,}5) = (-17{,}2) + (-5{,}5) = \\mathbf{-22{,}7}",
                ].map((t) => (
                  <div key={t} className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Supprime les parenthèses, puis calcule"
            itemsLabel="11 expressions"
            items={
              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 font-display font-semibold text-foreground">1. Transforme la (ou les) soustraction(s) en addition(s), puis calcule</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="A = (-3) + (+6) - (-8)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="B = (+2) - (+3) - (+4)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="C = (-5) - (+3) - (-4) + (-10)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="D = (-9) + (-15) - (+1) + (+4)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm sm:col-span-2"><Math tex="E = (-8) - (+5) - (-4) - (-14) - (-3)" /></div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 font-display font-semibold text-foreground">2. Supprime toutes les parenthèses, puis effectue les calculs demandés</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="A = (-5) + (-4) - (+6) - (-5) + (+4)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="B = (+7{,}6) + (-3{,}8) - (-5{,}4) - (+6{,}2) + (+10)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="C = (-0{,}25) - (+1{,}3) + (-9{,}7) + (-0{,}75)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="F = (+1) - (+2) + (+1) - (+3) + (+1) - (+4)" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm sm:col-span-2"><Math tex="D = [(+9)+(-4)] - (+7) + (+15) - [(+8)-(-5)]" /></div>
                    <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm sm:col-span-2"><Math tex="E = (+4) - (-5) + (+7) - [(+6)+(-9)]" /></div>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-8">
                <div>
                  <p className="mb-3 text-xs font-semibold text-foreground-muted uppercase">1. Transformer en addition</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="A = (-3)+(+6)+(+8) = \mathbf{+11}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="B = (+2)+(-3)+(-4) = \mathbf{-5}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="C = (-5)+(-3)+(+4)+(-10) = \mathbf{-14}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="D = (-9)+(-15)+(-1)+(+4) = \mathbf{-21}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm sm:col-span-2"><Math tex="E = (-8)+(-5)+(+4)+(+14)+(+3) = \mathbf{+8}" /></div>
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold text-foreground-muted uppercase">2. Supprimer les parenthèses</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="A = -5-4-6+5+4 = \mathbf{-6}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="B = 7{,}6-3{,}8+5{,}4-6{,}2+10 = \mathbf{+13}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="C = -0{,}25-1{,}3-9{,}7-0{,}75 = \mathbf{-12}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="F = 1-2+1-3+1-4 = \mathbf{-6}" /></div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm sm:col-span-2">
                      <Math tex="D = [5]-7+15-[13] = 5-7+15-13 = \mathbf{0}" />
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm sm:col-span-2">
                      <Math tex="E = 4+5+7-[-3] = 4+5+7+3 = \mathbf{+19}" />
                    </div>
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
