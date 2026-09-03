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
  title: "Les Nombres Relatifs · Multiplication et Division · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur la règle des signes pour la multiplication et la division des nombres relatifs, et le produit de plusieurs facteurs, avec 7 exercices corrigés pas à pas. 1ère année collège, semestre 1.",
  kicker: "1ʳᵉ Année Collège · Chapitre 7",
  heroTitle: "Multiplication et division",
  heroSubtitle:
    "La règle des signes pour multiplier et diviser des nombres relatifs, et la méthode pour un produit de plusieurs facteurs.",
  footerNote: "Les nombres relatifs · Multiplication et division · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "multiplication", label: "Multiplication" },
    { id: "division", label: "Division" },
    { id: "exercices", label: "Exercices" },
  ],
};

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
      <p className="rounded-xl border-l-4 border-orange-500 bg-orange-100/60 p-4 text-sm text-foreground sm:text-base">{rule}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function ExampleCell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm">{children}</div>
  );
}

function DarkPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
      <p className="mb-4 text-xs font-bold uppercase tracking-wide text-neutral-400">{title}</p>
      {children}
    </div>
  );
}

function LetterCell({ letter, tex }: { letter: string; tex: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border p-4 text-center font-mono text-sm">
      <span className="mr-1 font-bold text-foreground">{letter}.</span>
      <Math tex={tex} />
    </div>
  );
}

function LetterResult({ letter, tex }: { letter: string; tex: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 text-center font-mono text-sm">
      <span className="mr-1 font-bold text-foreground">{letter}.</span>
      <Math tex={tex} />
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
          { value: "4", label: "règles au programme" },
          { value: "7", label: "exercices corrigés" },
          { value: "42", label: "questions corrigées" },
        ]}
        ctas={
          <>
            <a
              href="#multiplication"
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
            <span className="text-[6rem] leading-none font-bold text-emerald-400 sm:text-[7rem]">×</span>
            <span className="text-[6rem] leading-none font-bold text-rose-400 sm:text-[7rem]">÷</span>
          </div>
        }
      />

      {/* ===================== I. MULTIPLICATION ===================== */}
      <LessonSection
        id="multiplication"
        kicker="01 · La règle des signes"
        title="Multiplication de nombres relatifs"
        tone="light"
        description="Deux règles suffisent pour déterminer le signe d'un produit, plus une propriété pour zéro et une méthode pour plusieurs facteurs."
      >
        <div className="grid gap-4">
          <RuleBox index={1} title="Règle 1 · Produit de deux nombres de même signe" rule={<>Le produit de deux nombres relatifs de <strong>même signe</strong> est un nombre <strong>positif</strong>, égal au produit de leurs distances à zéro.</>}>
            <div className="grid gap-4 sm:grid-cols-2">
              <ExampleCell><Math tex="(+4) \times (+7) = \mathbf{+28}" /></ExampleCell>
              <ExampleCell><Math tex="(-4) \times (-7) = \mathbf{+28}" /></ExampleCell>
              <ExampleCell><Math tex="(-12) \times (-0{,}5) = \mathbf{+6}" /></ExampleCell>
              <ExampleCell><Math tex="9 \times 9 = \mathbf{+81}" /></ExampleCell>
            </div>
          </RuleBox>

          <RuleBox index={2} title="Règle 2 · Produit de deux nombres de signes contraires" rule={<>Le produit de deux nombres relatifs de <strong>signes contraires</strong> est un nombre <strong>négatif</strong>, égal au produit de leurs distances à zéro.</>}>
            <div className="grid gap-4 sm:grid-cols-2">
              <ExampleCell><Math tex="(+5) \times (-3) = \mathbf{-15}" /></ExampleCell>
              <ExampleCell><Math tex="(-8) \times (+2) = \mathbf{-16}" /></ExampleCell>
              <ExampleCell><Math tex="6 \times (-5) = \mathbf{-30}" /></ExampleCell>
              <ExampleCell><Math tex="-2 \times 7 = \mathbf{-14}" /></ExampleCell>
            </div>
          </RuleBox>

          <DarkPanel title="À retenir · la grille des signes">
            <div className="grid grid-cols-2 gap-3 font-mono text-center sm:w-2/3">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4"><Math tex="(+) \times (+) = \mathbf{+}" /></div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4"><Math tex="(+) \times (-) = \mathbf{-}" /></div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4"><Math tex="(-) \times (+) = \mathbf{-}" /></div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4"><Math tex="(-) \times (-) = \mathbf{+}" /></div>
            </div>
          </DarkPanel>

          <RuleBox
            index={3}
            title="Propriété · Produit par zéro"
            rule={
              <>
                Le produit de n&apos;importe quel nombre relatif par <Math tex="0" /> est égal à <Math tex="0" /> : <Math tex="a \times 0 = 0" /> et{" "}
                <Math tex="0 \times a = 0" />.
              </>
            }
          >
            <div className="grid max-w-xl grid-cols-2 gap-4">
              <ExampleCell><Math tex="-1547 \times 0 = \mathbf{0}" /></ExampleCell>
              <ExampleCell><Math tex="0 \times 25{,}3 = \mathbf{0}" /></ExampleCell>
            </div>
          </RuleBox>

          <RuleBox index={4} title="Règle 3 · Produit de plusieurs facteurs non nuls" rule="Pour connaître le signe d'un produit de plusieurs facteurs non nuls, on compte le nombre de facteurs négatifs :">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-500/20 bg-surface p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-green-700">Nombre pair de facteurs négatifs</p>
                <p className="text-sm text-foreground-muted">Le produit est <strong className="text-green-700">positif</strong>.</p>
              </div>
              <div className="rounded-xl border border-rose-500/30 bg-surface p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-600">Nombre impair de facteurs négatifs</p>
                <p className="text-sm text-foreground-muted">Le produit est <strong className="text-rose-700">négatif</strong>.</p>
              </div>
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-sm">
              <Math tex="4 \times (-7) \times (-6) \times 5 \times 3" /> : deux facteurs négatifs (−7 et −6) → nombre{" "}
              <strong className="text-green-700">pair</strong> → produit <span className="font-semibold text-green-700">positif</span>.
            </div>
            <p className="mt-3 text-sm text-foreground-muted">
              Si <strong>l&apos;un des facteurs est nul</strong>, le produit est nul, quels que soient les autres facteurs.
            </p>
          </RuleBox>
        </div>
      </LessonSection>

      {/* ===================== II. DIVISION ===================== */}
      <LessonSection
        id="division"
        kicker="02 · Diviser deux nombres relatifs"
        title="Division de nombres relatifs"
        tone="light"
        description="Les mêmes règles de signes que pour la multiplication s'appliquent au quotient."
      >
        <div className="grid gap-4">
          <RuleBox index={1} title="Règle 1 · Quotient de deux nombres de même signe" rule={<>Le quotient de deux nombres relatifs de <strong>même signe</strong> est un nombre <strong>positif</strong>.</>}>
            <div className="grid gap-4 sm:grid-cols-2">
              <ExampleCell><Math tex="(-55) \div (-2) = \mathbf{+27{,}5}" /></ExampleCell>
              <ExampleCell><Math tex="12 \div 6 = \mathbf{+2}" /></ExampleCell>
            </div>
          </RuleBox>

          <RuleBox index={2} title="Règle 2 · Quotient de deux nombres de signes contraires" rule={<>Le quotient de deux nombres relatifs de <strong>signes contraires</strong> est un nombre <strong>négatif</strong>.</>}>
            <div className="grid gap-4 sm:grid-cols-2">
              <ExampleCell><Math tex="-120 \div 10 = \mathbf{-12}" /></ExampleCell>
              <ExampleCell><Math tex="250 \div (-25) = \mathbf{-10}" /></ExampleCell>
            </div>
          </RuleBox>

          <DarkPanel title="Remarque">
            <p className="text-sm sm:text-base">
              Pour tout nombre relatif <Math tex="a" /> non nul, <Math tex="0 \div a = 0" />. En revanche, la <strong>division par 0 est impossible</strong> (interdite).
            </p>
          </DarkPanel>
        </div>
      </LessonSection>

      {/* ===================== III. EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="7 exercices corrigés"
        tone="muted"
        description="Calcule sur ton cahier, puis clique pour vérifier chaque exercice."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la multiplication et la division des nombres relatifs.">
          <ExerciseCard
            id="1"
            index={1}
            title="Calculer mentalement les produits suivants"
            itemsLabel="10 produits"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["a", "-4 \\times 6"], ["b", "6 \\times (-5)"], ["c", "4 \\times (-3)"], ["d", "-1 \\times 3"], ["e", "-5 \\times (-1)"],
                  ["f", "-2 \\times 7"], ["g", "9 \\times (-9)"], ["h", "-6 \\times (-7)"], ["i", "-8 \\times 4"], ["j", "-1547 \\times 0"],
                ].map(([l, t]) => (
                  <LetterCell key={l} letter={l} tex={t} />
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["a", "\\mathbf{-24}"], ["b", "\\mathbf{-30}"], ["c", "\\mathbf{-12}"], ["d", "\\mathbf{-3}"], ["e", "\\mathbf{+5}"],
                  ["f", "\\mathbf{-14}"], ["g", "\\mathbf{-81}"], ["h", "\\mathbf{+42}"], ["i", "\\mathbf{-32}"], ["j", "\\mathbf{0}"],
                ].map(([l, t]) => (
                  <LetterResult key={l} letter={l} tex={t} />
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Calculer mentalement les produits suivants"
            itemsLabel="10 produits décimaux"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["a", "-25 \\times 4"], ["b", "-0{,}5 \\times (-8)"], ["c", "0{,}2 \\times (-45)"], ["d", "-1000 \\times 1{,}234"], ["e", "-0{,}001 \\times (-100)"],
                  ["f", "4 \\times (-125)"], ["g", "0{,}25 \\times (-12)"], ["h", "-9{,}8 \\times 100"], ["i", "-0{,}1 \\times (-987)"], ["j", "0{,}01 \\times (-2015)"],
                ].map(([l, t]) => (
                  <LetterCell key={l} letter={l} tex={t} />
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["a", "\\mathbf{-100}"], ["b", "\\mathbf{+4}"], ["c", "\\mathbf{-9}"], ["d", "\\mathbf{-1234}"], ["e", "\\mathbf{+0{,}1}"],
                  ["f", "\\mathbf{-500}"], ["g", "\\mathbf{-3}"], ["h", "\\mathbf{-980}"], ["i", "\\mathbf{+98{,}7}"], ["j", "\\mathbf{-20{,}15}"],
                ].map(([l, t]) => (
                  <LetterResult key={l} letter={l} tex={t} />
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Quel est le signe de chacun de ces produits ?"
            itemsLabel="6 produits"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <LetterCell letter="a" tex="4 \times (-7) \times (-6) \times 5 \times 3" />
                <LetterCell letter="b" tex="1{,}5 \times (-1{,}6) \times (-1{,}9) \times 1{,}1 \times (-1{,}4)" />
                <LetterCell letter="c" tex="1 \times (-2) \times 3 \times (-4) \times 5 \times (-6) \times 7" />
                <LetterCell letter="d" tex="-6 \times (-8) \times (-7) \times (-6) \times (-5)" />
                <LetterCell letter="e" tex="-9 \times 9 \times (-9) \times 9 \times 9 \times 9 \times (-9)" />
                <LetterCell letter="f" tex="-7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 \times 0" />
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 text-xs text-foreground-muted">2 facteurs négatifs (pair)</p>
                  <p className="font-bold text-green-700">a. Signe : positif</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 text-xs text-foreground-muted">3 facteurs négatifs (impair)</p>
                  <p className="font-bold text-rose-700">b. Signe : négatif</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 text-xs text-foreground-muted">3 facteurs négatifs (impair)</p>
                  <p className="font-bold text-rose-700">c. Signe : négatif</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 text-xs text-foreground-muted">5 facteurs négatifs (impair)</p>
                  <p className="font-bold text-rose-700">d. Signe : négatif</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 text-xs text-foreground-muted">3 facteurs négatifs (impair)</p>
                  <p className="font-bold text-rose-700">e. Signe : négatif</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 text-xs text-foreground-muted">l&apos;un des facteurs est 0</p>
                  <p className="font-bold text-foreground">f. Produit nul (ni positif ni négatif)</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Calculer mentalement les produits suivants"
            itemsLabel="5 produits en chaîne"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <LetterCell letter="a" tex="-2 \times 3 \times (-5) \times 8" />
                <LetterCell letter="b" tex="-6 \times (-1) \times 2 \times (-1) \times (-5) \times 7" />
                <LetterCell letter="c" tex="(-10) \times 2 \times (-2) \times 5 \times (-3) \times (-5)" />
                <LetterCell letter="d" tex="-1 \times (-2) \times (-3) \times 5 \times 10" />
                <div className="overflow-x-auto rounded-xl border border-border p-4 text-center font-mono text-sm sm:col-span-2">
                  <span className="mr-1 font-bold text-foreground">e.</span>
                  <Math tex="10 \times (-0{,}1) \times (-1000) - 0{,}01 \times (-100)" />
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">a. 2 facteurs négatifs (pair)</p>
                  <Math tex="\mathbf{+240}" />
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">b. 4 facteurs négatifs (pair)</p>
                  <Math tex="\mathbf{+420}" />
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">c. 4 facteurs négatifs (pair)</p>
                  <Math tex="\mathbf{+3\,000}" />
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">d. 3 facteurs négatifs (impair)</p>
                  <Math tex="\mathbf{-300}" />
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm sm:col-span-2">
                  <p className="mb-1 text-xs text-foreground-muted">e.</p>
                  <Math tex="1000 - (-1) = \mathbf{+1\,001}" />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Calculer, en respectant les étapes"
            itemsLabel="6 expressions"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="A = (-6+9) \times (5-12)" /></div>
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="B = 6 \times [3 \times (-8)]" /></div>
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="C = -4 \times 7 - (-2) \times (-8)" /></div>
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="D = -7 \times 5 - 3 \times 11" /></div>
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="E = -5 \times (7-13+2)" /></div>
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="F = 25 - (-2) \times (-9) \times 3" /></div>
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="A = (3) \times (-7) = \mathbf{-21}" /></div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="B = 6 \times (-24) = \mathbf{-144}" /></div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="C = -28 - 16 = \mathbf{-44}" /></div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="D = -35 - 33 = \mathbf{-68}" /></div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="E = -5 \times (-4) = \mathbf{+20}" /></div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="F = 25 - 54 = \mathbf{-29}" /></div>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Calculer, en respectant les étapes"
            itemsLabel="3 expressions"
            items={
              <div className="grid gap-3">
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="A = (-8+12-5+7) \times (11-13-7-2)" /></div>
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="B = -7 \times 3 - 9 \times (-5) + (-4) \times 9 - 7" /></div>
                <div className="overflow-x-auto rounded-xl border border-border p-4 font-mono text-sm"><Math tex="C = 6 - [-4 \times (-3) + 5 \times (-2)] \times (-4)" /></div>
              </div>
            }
            correction={
              <div className="grid gap-3">
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="A = (6) \times (-11) = \mathbf{-66}" /></div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm"><Math tex="B = -21+45-36-7 = \mathbf{-19}" /></div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                  <Math tex="C = 6 - [12-10] \times (-4) = 6 - [2] \times (-4) = 6 - (-8) = \mathbf{+14}" />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Remplacer x et y par leur valeur pour calculer chaque expression"
            itemsLabel="2 substitutions"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border p-4 font-mono text-sm">
                  <p><span className="mr-1 font-bold text-foreground">a.</span><Math tex="3 \times x + 5 \times y" /></p>
                  <p className="mt-1 text-xs text-foreground-muted">pour <Math tex="x = -8" /> et <Math tex="y = -2" /></p>
                </div>
                <div className="rounded-xl border border-border p-4 font-mono text-sm">
                  <p><span className="mr-1 font-bold text-foreground">b.</span><Math tex="-9 \times x + 4 \times y" /></p>
                  <p className="mt-1 text-xs text-foreground-muted">pour <Math tex="x = 7" /> et <Math tex="y = -4" /></p>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">a.</p>
                  <Math tex="3 \times (-8) + 5 \times (-2) = -24 + (-10) = \mathbf{-34}" />
                </div>
                <div className="overflow-x-auto rounded-xl border border-green-500/20 bg-surface p-4 font-mono text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">b.</p>
                  <Math tex="-9 \times 7 + 4 \times (-4) = -63 + (-16) = \mathbf{-79}" />
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
