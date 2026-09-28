import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Logique mathématique · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet de logique mathématique pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : proposition, fonction propositionnelle, quantificateurs, opérations logiques, implication, équivalence, lois logiques, types de raisonnement (contre-exemple, contraposée, absurde, récurrence...), symboles Σ et Π, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 1",
  heroTitle: "Logique mathématique",
  heroSubtitle:
    "Le langage de toutes les démonstrations : propositions, quantificateurs, opérations logiques et les sept types de raisonnement à connaître pour toute l'année.",
  footerNote: "Logique mathématique · Mathématiques, 1ère année Baccalauréat, semestre 1.",
  sections: [
    { id: "cours-propositions", label: "Propositions" },
    { id: "cours-operations", label: "Opérations" },
    { id: "cours-raisonnements", label: "Raisonnements" },
    { id: "cours-symboles", label: "Σ, Π" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function CourseBlock({ numeral, title, children }: { numeral: ReactNode; title: string; children: ReactNode }) {
  return (
    <article className="mb-8 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
          {numeral}
        </span>
        <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </article>
  );
}

const BOX_STYLES = {
  def: { wrap: "border-l-4 border-orange-400 bg-orange-100/50", title: "text-orange-700" },
  prop: { wrap: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5", title: "text-brand-700" },
  ex: { wrap: "border-l-4 border-sky-400 bg-sky-100/40 dark:bg-white/5", title: "text-sky-700" },
} as const;

function Box({ title, tone, children }: { title: string; tone: keyof typeof BOX_STYLES; children: ReactNode }) {
  const s = BOX_STYLES[tone];
  return (
    <div className={`rounded-r-xl p-4 text-sm sm:text-base ${s.wrap}`}>
      <p className={`mb-1 font-semibold ${s.title}`}>{title}</p>
      <div className="text-foreground-muted">{children}</div>
    </div>
  );
}

function TruthTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="flex justify-center">
      <table className="border-collapse text-center text-sm">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} className="border border-border bg-surface-muted px-4 py-2 font-semibold text-foreground">
                <Math tex={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-border px-4 py-2">
                  <Math tex={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RaisonnementCard({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4">
      <p className="mb-1 flex items-center gap-2 font-semibold text-foreground">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-[11px] font-bold text-white dark:bg-white dark:text-neutral-950">
          {n}
        </span>
        {title}
      </p>
      <div className="pl-8 text-sm text-foreground-muted">{children}</div>
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
          { value: "7", label: "types de raisonnement" },
          { value: "10", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-propositions"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-center gap-2 font-display text-6xl font-extrabold text-white sm:text-7xl">
            <Math tex="\forall\ \exists" />
          </div>
        }
      />

      {/* ===================== I. PROPOSITIONS ===================== */}
      <LessonSection
        id="cours-propositions"
        kicker="01 · Le langage des démonstrations"
        title="Proposition, fonction propositionnelle, quantificateurs"
        tone="light"
        description="Avant de démontrer quoi que ce soit, il faut savoir ce qu'est un énoncé vrai ou faux, et comment le quantifier."
      >
        <CourseBlock numeral="I" title="Proposition">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">proposition</strong> est un énoncé mathématique qui a un sens et
            qui est soit <strong>vrai</strong>, soit <strong>faux</strong> — jamais les deux à la fois. On la note
            souvent <Math tex="P" />, <Math tex="Q" /> ou <Math tex="R" />. Si <Math tex="P" /> est vraie on écrit{" "}
            <Math tex="V" /> (ou <Math tex="1" />), si elle est fausse on écrit <Math tex="F" /> (ou <Math tex="0" />
            ).
          </Box>
          <Callout variant="success" title="Exemples">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="P" /> : « 2 est un nombre pair » — <strong>vraie</strong>.
              </li>
              <li>
                <Math tex="Q" /> : « <Math tex="2+3=6" /> » — <strong>fausse</strong>.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Fonction propositionnelle">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">fonction propositionnelle</strong> est un énoncé contenant une
            ou plusieurs variables (<Math tex="x" />, <Math tex="x,y" />, …). On la note <Math tex="P(x)" /> ou{" "}
            <Math tex="P(x,y)" />. Dès qu&apos;on remplace la variable par un élément précis, elle devient une
            proposition (vraie ou fausse).
          </Box>
          <Callout variant="success" title="Exemple">
            <Math tex="A(x)" /> : « pour tout <Math tex="x" /> de <Math tex="\mathbb R" />, <Math tex="\sqrt{x^2}=x" />
            {" "}» est une fonction propositionnelle : si <Math tex="x=2" />, la proposition obtenue est vraie ; si{" "}
            <Math tex="x=-3" />, elle est fausse.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Les quantificateurs">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Quantificateur universel ∀" tone="def">
              <Math tex="\forall x\in E,\ Q(x)" /> se lit « pour tout <Math tex="x" /> de <Math tex="E" />,{" "}
              <Math tex="Q(x)" /> ». Exemple : <Math tex="\forall x\in\mathbb R:\sqrt{x^2}=|x|" />.
            </Box>
            <Box title="Quantificateur existentiel ∃" tone="def">
              <Math tex="\exists x\in E,\ Q(x)" /> se lit « il existe <Math tex="x" /> de <Math tex="E" /> tel que{" "}
              <Math tex="Q(x)" /> ». Exemple : <Math tex="\exists x\in\mathbb R: x+4\le3" />.
            </Box>
          </div>
          <Box title="Le symbole ∃!" tone="def">
            <Math tex="\exists!\,x\in E,\ Q(x)" /> signifie qu&apos;il existe un <strong>unique</strong>{" "}
            <Math tex="x" /> de <Math tex="E" /> vérifiant <Math tex="Q(x)" />. Exemple :{" "}
            <Math tex="\exists!\,x\in\mathbb R: x+4=3" />.
          </Box>
          <Callout variant="warning" title="À retenir absolument">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                L&apos;ordre de deux quantificateurs <strong>identiques</strong> ne change pas le sens :{" "}
                <Math tex="\forall x,\forall y" /> ou <Math tex="\forall y,\forall x" /> — même chose.
              </li>
              <li>
                L&apos;ordre de deux quantificateurs <strong>différents</strong> change tout le sens de la phrase :{" "}
                <Math tex="\exists x\in\mathbb R,\forall y\in\mathbb R, x+y>0" /> (faux) n&apos;est pas la même chose
                que <Math tex="\forall y\in\mathbb R,\exists x\in\mathbb R, x+y>0" /> (vrai).
              </li>
              <li>
                La négation de <Math tex="\forall" /> est <Math tex="\exists" />, et la négation de{" "}
                <Math tex="\exists" /> est <Math tex="\forall" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. OPÉRATIONS ===================== */}
      <LessonSection
        id="cours-operations"
        kicker="02 · Combiner des propositions"
        title="Négation, conjonction, disjonction, implication, équivalence"
        tone="muted"
        description="Cinq opérations, cinq tables de vérité — la base de toute manipulation logique."
      >
        <CourseBlock numeral="IV" title="Négation, conjonction (∧), disjonction (∨)">
          <Box title="Négation" tone="def">
            La négation de <Math tex="P" />, notée <Math tex="\overline P" /> ou <Math tex="\lnot P" />, a une
            valeur de vérité opposée à celle de <Math tex="P" />. Propriété : <Math tex="\overline{\overline P}=P" />
            .
          </Box>
          <TruthTable head={["P", "\\overline P"]} rows={[["1", "0"], ["0", "1"]]} />
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Conjonction P ∧ Q (« et »)" tone="def">
              Vraie <strong>seulement</strong> si <Math tex="P" /> et <Math tex="Q" /> sont toutes les deux vraies.
            </Box>
            <Box title="Disjonction P ∨ Q (« ou »)" tone="def">
              Fausse <strong>seulement</strong> si <Math tex="P" /> et <Math tex="Q" /> sont toutes les deux
              fausses.
            </Box>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <TruthTable
              head={["P", "Q", "P\\wedge Q"]}
              rows={[
                ["1", "1", "1"],
                ["1", "0", "0"],
                ["0", "1", "0"],
                ["0", "0", "0"],
              ]}
            />
            <TruthTable
              head={["P", "Q", "P\\vee Q"]}
              rows={[
                ["1", "1", "1"],
                ["1", "0", "1"],
                ["0", "1", "1"],
                ["0", "0", "0"],
              ]}
            />
          </div>
          <Callout variant="success" title="Propriétés (∧ et ∨)">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Commutativité :</strong> <Math tex="P\wedge Q=Q\wedge P" /> ;{" "}
                <Math tex="P\vee Q=Q\vee P" />.
              </li>
              <li>
                <strong>Associativité :</strong> <Math tex="(P\wedge Q)\wedge R=P\wedge(Q\wedge R)" /> (idem pour{" "}
                <Math tex="\vee" />).
              </li>
              <li>
                <strong>Lois de De Morgan :</strong> <Math tex="\overline{P\wedge Q}=\overline P\vee\overline Q" />
                {" "}et <Math tex="\overline{P\vee Q}=\overline P\wedge\overline Q" />.
              </li>
              <li>
                <strong>Distributivité :</strong>{" "}
                <Math tex="P\wedge(Q\vee R)=(P\wedge Q)\vee(P\wedge R)" />, et de même pour <Math tex="\vee" /> sur{" "}
                <Math tex="\wedge" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Implication et équivalence">
          <Box title="Implication P ⇒ Q" tone="def">
            La proposition <Math tex="P\Rightarrow Q" /> est <strong>fausse</strong> uniquement dans le cas où{" "}
            <Math tex="P" /> est vraie et <Math tex="Q" /> est fausse. <Math tex="P" /> s&apos;appelle
            l&apos;hypothèse, <Math tex="Q" /> la conclusion.
          </Box>
          <TruthTable
            head={["P", "Q", "P\\Rightarrow Q"]}
            rows={[
              ["1", "1", "1"],
              ["1", "0", "0"],
              ["0", "1", "1"],
              ["0", "0", "1"],
            ]}
          />
          <Callout variant="warning" title="Vocabulaire à ne pas confondre">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Réciproque</strong> de <Math tex="P\Rightarrow Q" /> : c&apos;est <Math tex="Q\Rightarrow P" />
                . Si <Math tex="P\Rightarrow Q" /> est vraie, la réciproque n&apos;est pas forcément vraie.
              </li>
              <li>
                <strong>Contraposée</strong> de <Math tex="P\Rightarrow Q" /> : c&apos;est{" "}
                <Math tex="\overline Q\Rightarrow\overline P" />, et elle est <strong>toujours équivalente</strong>{" "}
                à <Math tex="P\Rightarrow Q" />.
              </li>
              <li>
                Négation de l&apos;implication : <Math tex="\overline{P\Rightarrow Q}=P\wedge\overline Q" />.
              </li>
              <li>
                Transitivité : <Math tex="[(P\Rightarrow Q)\wedge(Q\Rightarrow R)]\Rightarrow(P\Rightarrow R)" />.
              </li>
            </ul>
          </Callout>
          <Box title="Équivalence P ⇔ Q" tone="def">
            <Math tex="P\Leftrightarrow Q" /> signifie <Math tex="(P\Rightarrow Q)\wedge(Q\Rightarrow P)" />, on lit
            « <Math tex="P" /> si et seulement si <Math tex="Q" /> ».
          </Box>
          <TruthTable
            head={["P", "Q", "P\\Leftrightarrow Q"]}
            rows={[
              ["1", "1", "1"],
              ["1", "0", "0"],
              ["0", "1", "0"],
              ["0", "0", "1"],
            ]}
          />
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. RAISONNEMENTS ===================== */}
      <LessonSection
        id="cours-raisonnements"
        kicker="03 · Sept techniques de démonstration"
        title="Les types de raisonnement"
        tone="light"
        description="La boîte à outils qui servira toute l'année : à chaque énoncé son type de preuve adapté."
      >
        <CourseBlock numeral="VI" title="Les sept raisonnements à connaître">
          <div className="grid gap-3">
            <RaisonnementCard n={1} title="Par contre-exemple">
              Pour montrer que <Math tex="\forall x\in E, P(x)" /> est <strong>fausse</strong>, il suffit de trouver
              un <Math tex="x" /> de <Math tex="E" /> qui ne vérifie pas <Math tex="P(x)" />.
              <br />
              Exemple : <Math tex="\sqrt2" /> et <Math tex="-\sqrt2" /> sont irrationnels, mais leur somme{" "}
              <Math tex="0" /> ne l&apos;est pas — donc « la somme de deux irrationnels est irrationnelle » est
              fausse.
            </RaisonnementCard>
            <RaisonnementCard n={2} title="Par équivalences successives">
              Pour montrer <Math tex="P\Leftrightarrow Q" />, on enchaîne{" "}
              <Math tex="P\Leftrightarrow Q_1\Leftrightarrow Q_2\Leftrightarrow\cdots\Leftrightarrow Q" />.
              <br />
              Exemple : <Math tex="a^2+b^2=2ab\Leftrightarrow(a-b)^2=0\Leftrightarrow a=b" />.
            </RaisonnementCard>
            <RaisonnementCard n={3} title="Déductif (direct)">
              Si <Math tex="P\Rightarrow Q" /> est vraie et que <Math tex="P" /> est donnée, alors <Math tex="Q" />{" "}
              est vraie : on l&apos;applique directement.
            </RaisonnementCard>
            <RaisonnementCard n={4} title="Par contraposée">
              Pour montrer <Math tex="P\Rightarrow Q" />, on montre <Math tex="\overline Q\Rightarrow\overline P" />
              {" "}— souvent plus simple quand la conclusion est une négation (« <Math tex="\neq" />
              », « n&apos;est pas… »).
            </RaisonnementCard>
            <RaisonnementCard n={5} title="Par disjonction des cas">
              On découpe <Math tex="E" /> en plusieurs sous-ensembles et on traite chaque cas séparément — typique
              pour les équations avec valeur absolue.
            </RaisonnementCard>
            <RaisonnementCard n={6} title="Par l'absurde">
              Pour montrer <Math tex="Q" />, on suppose <Math tex="\overline Q" /> vraie, et on aboutit à une
              contradiction avec une donnée <Math tex="P" /> (on obtient <Math tex="P" /> et{" "}
              <Math tex="\overline P" /> vraies en même temps, ce qui est impossible).
            </RaisonnementCard>
            <RaisonnementCard n={7} title="Par récurrence">
              Pour montrer <Math tex="P(n)" /> vraie pour tout <Math tex="n\ge n_0" /> : on vérifie{" "}
              <Math tex="P(n_0)" />, on suppose <Math tex="P(n)" /> vraie (hypothèse de récurrence), puis on montre{" "}
              <Math tex="P(n+1)" />.
            </RaisonnementCard>
          </div>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. SYMBOLES ===================== */}
      <LessonSection
        id="cours-symboles"
        kicker="04 · Notations condensées"
        title="Les symboles Σ et Π"
        tone="muted"
        description="Deux notations qui reviendront constamment pour écrire des sommes et des produits sans les étaler."
      >
        <CourseBlock numeral="VII" title="Somme Σ et produit Π">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Symbole Σ (somme)" tone="def">
              <Math tex="\displaystyle\sum_{i=1}^{n}a_i=a_1+a_2+\cdots+a_n" />
              <p className="mt-2">
                Exemple : <Math tex="\displaystyle\sum_{i=1}^{n}2i=2+4+6+\cdots+2n" />.
              </p>
            </Box>
            <Box title="Symbole Π (produit)" tone="def">
              <Math tex="\displaystyle\prod_{j=1}^{n}a_j=a_1\times a_2\times\cdots\times a_n" />
            </Box>
          </div>
          <Callout variant="success" title="Trois formules à connaître par cœur">
            <div className="space-y-2">
              <p>
                <Math tex="\displaystyle\sum_{i=1}^{n}i=1+2+\cdots+n=\dfrac{n(n+1)}{2}" />
              </p>
              <p>
                <Math tex="\displaystyle\sum_{i=1}^{n}i^2=\dfrac{n(n+1)(2n+1)}{6}" />
              </p>
              <p>
                <Math tex="\displaystyle\sum_{i=1}^{n}i^3=\left[\dfrac{n(n+1)}{2}\right]^2" />
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Logique mathématique"
        tone="light"
        description="10 exercices corrigés, un par type de raisonnement ou presque."
      >
        <ExerciseGroup total={10} celebrationTitle="Bravo, les 10 exercices sont vérifiés !" celebrationSubtitle="Le chapitre logique mathématique est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Vrai ou faux, attention à l'ordre des quantificateurs"
            itemsLabel="4 assertions"
            items={
              <div className="space-y-3">
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>a.</strong> <Math tex="\exists x\in\mathbb R,\ (x+1=0\ \text{et}\ x+2=0)" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>b.</strong>{" "}
                  <Math tex="(\exists x\in\mathbb R,\ x+1=0)\ \text{et}\ (\exists x\in\mathbb R,\ x+2=0)" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>c.</strong> <Math tex="\forall x\in\mathbb R,\ (x+1\neq0\ \text{ou}\ x+2\neq0)" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>d.</strong> « 136 est un multiple de 17 » et « 2 divise 167 ».
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a. Fausse.</strong> Il n&apos;existe pas de{" "}
                  <Math tex="x" /> unique annulant à la fois <Math tex="x+1" /> et <Math tex="x+2" /> (il faudrait{" "}
                  <Math tex="x=-1" /> et <Math tex="x=-2" /> en même temps).
                </p>
                <p>
                  <strong className="text-green-700">b. Vraie.</strong> Chaque existence est prise séparément :{" "}
                  <Math tex="x=-1" /> convient pour la première, <Math tex="x=-2" /> pour la seconde.
                </p>
                <p>
                  <strong className="text-green-700">c. Vraie.</strong> C&apos;est la négation de l&apos;assertion
                  a. (fausse), donc elle est vraie.
                </p>
                <p>
                  <strong className="text-green-700">d. Fausse.</strong> <Math tex="136=17\times8" /> est bien un
                  multiple de 17, mais 167 est impair donc 2 ne le divise pas : la conjonction est fausse.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Quatre assertions quantifiées"
            itemsLabel="4 assertions"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="P" /> : <Math tex="\exists x\in\mathbb R,\forall y\in\mathbb R,\ x+y>0" />
                </p>
                <p className="rounded-xl border border-border p-4">
                  <Math tex="Q" /> : <Math tex="\forall x\in\mathbb R,\exists y\in\mathbb R,\ x+y>0" />
                </p>
                <p className="rounded-xl border border-border p-4">
                  <Math tex="R" /> : <Math tex="\forall x\in\mathbb R,\forall y\in\mathbb R,\ x+y>0" />
                </p>
                <p className="rounded-xl border border-border p-4">
                  <Math tex="S" /> : <Math tex="\exists x\in\mathbb R,\forall y\in\mathbb R,\ y^2>x" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">P est fausse :</strong> pour tout <Math tex="x" />, en
                  choisissant <Math tex="y=-x-1" /> on obtient <Math tex="x+y=-1<0" />.
                </p>
                <p>
                  <strong className="text-green-700">Q est vraie :</strong> pour tout <Math tex="x" />, il suffit de
                  prendre <Math tex="y=1-x" />, alors <Math tex="x+y=1>0" />.
                </p>
                <p>
                  <strong className="text-green-700">R est fausse :</strong> pour <Math tex="x=y=0" />,{" "}
                  <Math tex="x+y=0" /> qui n&apos;est pas <Math tex=">0" />.
                </p>
                <p>
                  <strong className="text-green-700">S est vraie :</strong> pour <Math tex="x=-1" />, on a{" "}
                  <Math tex="y^2\ge0>-1" /> pour tout <Math tex="y" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Négations"
            itemsLabel="3 propositions"
            items={
              <div className="space-y-2">
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>a.</strong> <Math tex="P\Rightarrow Q" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>b.</strong> <Math tex="P\ \text{et}\ (Q\ \text{et}\ R)" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>c.</strong> <Math tex="(P\ \text{et}\ Q)\Rightarrow(R\Rightarrow S)" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="\overline{P\Rightarrow Q}=P\wedge\overline Q" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong>{" "}
                  <Math tex="\overline{P\wedge(Q\wedge R)}=\overline P\vee\overline Q\vee\overline R" /> (De
                  Morgan appliqué deux fois).
                </p>
                <p>
                  <strong className="text-green-700">c.</strong> En posant <Math tex="A=P\wedge Q" /> et{" "}
                  <Math tex="B=R\Rightarrow S" />, <Math tex="\overline{A\Rightarrow B}=A\wedge\overline B" />, donc
                  la négation est <Math tex="(P\wedge Q)\wedge(R\wedge\overline S)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Raisonnement par équivalences successives"
            itemsLabel="2 équivalences"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="\forall x,y\in\mathbb R:\ \dfrac{x^2+y^2}{2}=xy\iff x=y" />
                  .
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que, pour <Math tex="x\in\mathbb R^*" /> :{" "}
                  <Math tex="x+\dfrac1x>0\iff x>0" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">a.</p>
                  <MathBlock tex="\begin{gathered} \dfrac{x^2+y^2}{2}=xy \iff x^2+y^2-2xy=0 \\ \iff (x-y)^2=0 \iff x=y \end{gathered}" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">b.</p>
                  <p>
                    On écrit <Math tex="x+\dfrac1x=\dfrac{x^2+1}{x}" />. Comme <Math tex="x^2+1>0" /> toujours, le
                    signe de <Math tex="x+\dfrac1x" /> est exactement celui de <Math tex="x" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    Donc <Math tex="x+\dfrac1x>0\iff x>0" />.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Raisonnement par contre-exemple"
            itemsLabel="2 assertions"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="\forall n\in\mathbb N^*:\ n^2+n+1" /> est un nombre
                  premier, est <strong>fausse</strong>.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que <Math tex="\forall x\in\mathbb R:\ x^2+x\ge0" /> est{" "}
                  <strong>fausse</strong>.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> Pour <Math tex="n=4" /> :{" "}
                  <Math tex="4^2+4+1=21=3\times7" />, qui n&apos;est pas premier. Contre-exemple trouvé, donc
                  l&apos;assertion est fausse.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> Pour <Math tex="x=-\dfrac12" /> :{" "}
                  <Math tex="x^2+x=\dfrac14-\dfrac12=-\dfrac14<0" />. Contre-exemple trouvé, donc l&apos;assertion
                  est fausse.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Raisonnement direct (identité remarquable)"
            itemsLabel="2 propriétés"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="\forall x\in\mathbb R_+^*:\ x+\dfrac9x\ge6" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que <Math tex="\forall x\in\mathbb R:\ \dfrac{x^2+1}{2}\ge x" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">a.</p>
                  <MathBlock tex="x+\dfrac9x-6=\dfrac{x^2-6x+9}{x}=\dfrac{(x-3)^2}{x}" />
                  <p>
                    Comme <Math tex="x>0" /> et <Math tex="(x-3)^2\ge0" />, ce quotient est <Math tex="\ge0" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    Donc <Math tex="x+\dfrac9x\ge6" />.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">b.</p>
                  <MathBlock tex="\dfrac{x^2+1}{2}-x=\dfrac{x^2-2x+1}{2}=\dfrac{(x-1)^2}{2}\ge0" />
                  <p className="font-semibold text-green-700">
                    Donc <Math tex="\dfrac{x^2+1}{2}\ge x" /> pour tout réel <Math tex="x" />.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Une inégalité avec a² + b² = 1"
            itemsLabel="1 propriété"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="a" /> et <Math tex="b" /> deux réels tels que <Math tex="a^2+b^2=1" />. Montrer
                que <Math tex="|a+b|\le\sqrt2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>On développe :</p>
                <MathBlock tex="(a+b)^2=a^2+2ab+b^2=1+2ab" />
                <p>
                  Or <Math tex="2ab\le a^2+b^2=1" /> (car <Math tex="(a-b)^2\ge0" />), donc{" "}
                  <Math tex="(a+b)^2\le1+1=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="(a+b)^2\le2" />, on en déduit <Math tex="|a+b|\le\sqrt2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Raisonnement par contraposée"
            itemsLabel="2 implications"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que, pour <Math tex="a,b,c\in\mathbb R" /> :{" "}
                  <Math tex="a+b>2c\Rightarrow(a>c\ \text{ou}\ b>c)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que, si <Math tex="x\neq y" />, alors{" "}
                  <Math tex="(x+1)(y-1)\neq(x-1)(y+1)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">a. Par contraposée :</p>
                  <p>
                    On suppose <Math tex="a\le c" /> et <Math tex="b\le c" />. En additionnant :{" "}
                    <Math tex="a+b\le2c" />, ce qui est bien la négation de <Math tex="a+b>2c" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    La contraposée est vraie, donc l&apos;implication l&apos;est aussi.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">b. Par contraposée :</p>
                  <p>
                    On suppose <Math tex="(x+1)(y-1)=(x-1)(y+1)" />. En développant les deux membres :
                  </p>
                  <MathBlock tex="\begin{gathered} xy-x+y-1=xy+x-y-1 \iff -x+y=x-y \\ \iff 2y=2x \iff x=y \end{gathered}" />
                  <p className="font-semibold text-green-700">
                    Donc l&apos;égalité entraîne <Math tex="x=y" /> : la contraposée est vraie, ce qui prouve
                    l&apos;implication de départ.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Raisonnement par l'absurde"
            itemsLabel="1 propriété"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="n\in\mathbb N^*" />. Montrer que <Math tex="n^2+1" /> n&apos;est pas le carré
                d&apos;un entier.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On suppose, par l&apos;absurde, qu&apos;il existe <Math tex="k\in\mathbb N" /> tel que{" "}
                  <Math tex="n^2+1=k^2" />. Alors :
                </p>
                <MathBlock tex="k^2-n^2=1 \iff (k-n)(k+n)=1" />
                <p>
                  Comme <Math tex="n\ge1" />, on a <Math tex="k^2=n^2+1>n^2" /> donc <Math tex="k>n" />, si bien
                  que <Math tex="k-n" /> et <Math tex="k+n" /> sont deux entiers naturels{" "}
                  <Math tex="\ge1" />. Leur produit valant <Math tex="1" />, on doit avoir{" "}
                  <Math tex="k-n=1" /> et <Math tex="k+n=1" />.
                </p>
                <p>
                  Or <Math tex="k+n\ge(n+1)+n=2n+1\ge3" /> (puisque <Math tex="k\ge n+1" />), ce qui contredit{" "}
                  <Math tex="k+n=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Contradiction : <Math tex="n^2+1" /> n&apos;est donc jamais le carré d&apos;un entier.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Raisonnement par récurrence"
            itemsLabel="1 propriété"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que, pour tout <Math tex="n\in\mathbb N" />, le nombre{" "}
                <Math tex="10^n-(-1)^n" /> est divisible par <Math tex="11" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Initialisation</strong> (<Math tex="n=0" />) : <Math tex="10^0-(-1)^0=1-1=0=11\times0" />,
                  divisible par 11.
                </p>
                <p>
                  <strong>Hérédité :</strong> on suppose qu&apos;il existe <Math tex="k\in\mathbb Z" /> tel que{" "}
                  <Math tex="10^n-(-1)^n=11k" />, c&apos;est-à-dire <Math tex="10^n=11k+(-1)^n" />. Alors :
                </p>
                <MathBlock tex="10^{n+1}-(-1)^{n+1}=10\times10^n+(-1)^n=10\big(11k+(-1)^n\big)+(-1)^n" />
                <MathBlock tex="=110k+11\times(-1)^n=11\big(10k+(-1)^n\big)" />
                <p className="font-semibold text-green-700">
                  C&apos;est bien un multiple de 11, donc la propriété est vraie au rang <Math tex="n+1" />. Par
                  récurrence, elle est vraie pour tout <Math tex="n\in\mathbb N" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
