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
  title: "Logique mathématique · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet de logique mathématique pour la 1ère année Baccalauréat Sciences Mathématiques : proposition, fonction propositionnelle, quantificateurs, opérations logiques, lois logiques, les sept types de raisonnement (contre-exemple, contraposée, absurde, récurrence...), symboles Σ et Π, avec exercices intégralement corrigés au niveau SM.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Logique mathématique",
  heroSubtitle:
    "Le langage de toutes les démonstrations : propositions, quantificateurs, opérations logiques, lois logiques, et les sept raisonnements qui serviront toute l'année.",
  footerNote: "Logique mathématique · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
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
          { value: "6", label: "exercices corrigés" },
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
            <Math tex="A(x)" /> : « pour tout <Math tex="x" /> de <Math tex="\mathbb R" />,{" "}
            <Math tex="\sqrt{x^2}=x" /> » est une fonction propositionnelle : si <Math tex="x=2" />, la proposition
            obtenue est vraie ; si <Math tex="x=-3" />, elle est fausse.
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
        description="Cinq opérations, cinq tables de vérité — puis les lois logiques qui en découlent."
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
            La proposition <Math tex="P\Rightarrow Q" /> vaut <Math tex="\overline P\vee Q" /> ; elle est{" "}
            <strong>fausse</strong> uniquement dans le cas où <Math tex="P" /> est vraie et <Math tex="Q" /> est
            fausse. <Math tex="P" /> s&apos;appelle l&apos;hypothèse, <Math tex="Q" /> la conclusion.
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
                <strong>Réciproque</strong> de <Math tex="P\Rightarrow Q" /> : c&apos;est{" "}
                <Math tex="Q\Rightarrow P" />. Si <Math tex="P\Rightarrow Q" /> est vraie, la réciproque n&apos;est
                pas forcément vraie.
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

        <CourseBlock numeral="VI" title="Lois logiques">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">loi logique</strong> est une proposition qui est{" "}
            <strong>toujours vraie</strong>, quelles que soient les valeurs de vérité des propositions qui la
            composent.
          </Box>
          <Callout variant="success" title="Exemple — la preuve par équivalences">
            <p>
              Montrons que <Math tex="(P\wedge Q)\Rightarrow P" /> est une loi logique :
            </p>
            <MathBlock tex="\begin{gathered}(P\wedge Q)\Rightarrow P\iff\overline{P\wedge Q}\vee P\iff(\overline P\vee\overline Q)\vee P\\[2pt]\iff\underbrace{(\overline P\vee P)}_{\text{toujours vraie}}\vee\overline Q\end{gathered}" />
            <p>
              Une disjonction contenant une proposition toujours vraie est toujours vraie : donc{" "}
              <Math tex="(P\wedge Q)\Rightarrow P" /> est une loi logique.
            </p>
          </Callout>
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
        <CourseBlock numeral="VII" title="Les sept raisonnements à connaître">
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
        <CourseBlock numeral="VIII" title="Somme Σ et produit Π">
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
        description="6 exercices corrigés, au niveau Sciences Math : négations quantifiées, contraposée, raisonnement direct, récurrence, inégalité et équation par injectivité."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre logique mathématique est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Négations de propositions quantifiées"
            itemsLabel="2 négations"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Déterminer la négation de{" "}
                  <Math tex="\exists m\in\mathbb R,\ \forall x\in\mathbb R^+,\ \dfrac{1+\sqrt x}{2}\le m" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Déterminer la négation de{" "}
                  <Math tex="\forall a\in\mathbb R,\ \exists b\in\mathbb R,\ a^2+b^2=1" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On échange <Math tex="\forall\leftrightarrow\exists" /> et on nie la conclusion (une égalité ou
                  une inégalité large devient stricte de sens opposé, une égalité devient une inégalité{" "}
                  <Math tex="\neq" />).
                </p>
                <p className="font-semibold text-green-700">
                  <strong>a.</strong>{" "}
                  <Math tex="\forall m\in\mathbb R,\ \exists x\in\mathbb R^+,\ \dfrac{1+\sqrt x}{2}>m" />.
                </p>
                <p className="font-semibold text-green-700">
                  <strong>b.</strong> <Math tex="\exists a\in\mathbb R,\ \forall b\in\mathbb R,\ a^2+b^2\neq1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Raisonnement par contraposée"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que{" "}
                <Math tex="\forall(a,b)\in[2,+\infty[^2,\ a\neq b\Rightarrow\sqrt{1-\dfrac4{a^2}}\neq\sqrt{1-\dfrac4{b^2}}" />
                .
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On montre la contraposée :{" "}
                  <Math tex="\sqrt{1-\frac4{a^2}}=\sqrt{1-\frac4{b^2}}\Rightarrow a=b" />, pour{" "}
                  <Math tex="a,b\ge2" />.
                </p>
                <p>
                  Posons <Math tex="f(t)=\sqrt{1-\dfrac4{t^2}}" /> sur <Math tex="[2,+\infty[" />. On a{" "}
                  <Math tex="f'(t)=\dfrac{4}{t^2\sqrt{t^2-4}}>0" /> pour <Math tex="t>2" /> : <Math tex="f" /> est{" "}
                  <strong>strictement croissante</strong>, donc injective sur <Math tex="]2,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  Si <Math tex="f(a)=f(b)" />, l&apos;injectivité de <Math tex="f" /> donne <Math tex="a=b" />. Par
                  contraposition, <Math tex="a\neq b\Rightarrow f(a)\neq f(b)" />, ce qui est le résultat voulu.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Raisonnement direct — somme de termes positifs"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="\forall x\ge1,\ \forall y\ge1" />,{" "}
                <Math tex="x^2+y^2+xy-x-y-1=0\Rightarrow x=y=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="u=x-1\ge0" /> et <Math tex="v=y-1\ge0" />. En substituant{" "}
                  <Math tex="x=1+u" />, <Math tex="y=1+v" /> :
                </p>
                <MathBlock tex="x^2+y^2+xy-x-y-1=u^2+v^2+uv+2u+2v" />
                <p>
                  Or <Math tex="u,v\ge0" />, donc chacun des cinq termes <Math tex="u^2,\ v^2,\ uv,\ 2u,\ 2v" /> est{" "}
                  <Math tex="\ge0" />. Leur somme ne peut être nulle que si <strong>chaque terme est nul</strong> :
                </p>
                <MathBlock tex="u^2=0\ \text{et}\ v^2=0\ \Longrightarrow\ u=0\ \text{et}\ v=0" />
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="x=1" /> et <Math tex="y=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Raisonnement par récurrence"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="h" /> définie sur <Math tex="\mathbb N" /> par <Math tex="h(0)=3" /> et{" "}
                <Math tex="h(n+1)=2h(n)+5" />. Montrer par récurrence que{" "}
                <Math tex="\forall n\in\mathbb N,\ h(n)=2^{n+3}-5" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Initialisation :</strong> <Math tex="h(0)=3" /> et <Math tex="2^{0+3}-5=8-5=3" /> — la
                  formule est vraie pour <Math tex="n=0" />.
                </p>
                <p>
                  <strong>Hérédité :</strong> on suppose <Math tex="h(n)=2^{n+3}-5" /> (hypothèse de récurrence).
                  Alors :
                </p>
                <MathBlock tex="h(n+1)=2h(n)+5=2\big(2^{n+3}-5\big)+5=2^{n+4}-10+5=2^{(n+1)+3}-5" />
                <p className="font-semibold text-green-700">
                  La formule est donc vraie au rang <Math tex="n+1" /> : par récurrence,{" "}
                  <Math tex="\forall n\in\mathbb N,\ h(n)=2^{n+3}-5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Une inégalité par chaîne d'AM-GM"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="\forall(a,b)\in(\mathbb R_+^*)^2,\ \dfrac{a^2+1}{b}+\dfrac{b^2+1}{a}\ge4" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On sépare : <Math tex="\dfrac{a^2+1}{b}+\dfrac{b^2+1}{a}=\left(\dfrac{a^2}{b}+\dfrac{b^2}{a}\right)+\left(\dfrac1a+\dfrac1b\right)" />
                  .
                </p>
                <p>
                  Par AM-GM, <Math tex="\dfrac{a^2}{b}+b\ge2a" /> et <Math tex="\dfrac{b^2}{a}+a\ge2b" />, donc en
                  sommant : <Math tex="\dfrac{a^2}{b}+\dfrac{b^2}{a}\ge a+b" />.
                </p>
                <p>
                  Par AM-HM, <Math tex="\dfrac1a+\dfrac1b\ge\dfrac4{a+b}" />.
                </p>
                <p>
                  En posant <Math tex="s=a+b>0" />, on obtient donc une somme{" "}
                  <Math tex="\ge s+\dfrac4s" />. Or <Math tex="s+\dfrac4s-4=\dfrac{(s-2)^2}{s}\ge0" />, donc{" "}
                  <Math tex="s+\dfrac4s\ge4" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="\dfrac{a^2+1}{b}+\dfrac{b^2+1}{a}\ge4" />, avec égalité si et seulement si{" "}
                  <Math tex="a=b=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Résoudre une équation par injectivité"
            itemsLabel="1 démonstration + 1 résolution"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que{" "}
                  <Math tex="\forall x\in\mathbb R^+,\ \forall y\in\mathbb R^+,\ \big(\sqrt{x+1}-\sqrt x=\sqrt{y+1}-\sqrt y\big)\Rightarrow x=y" />
                  .
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> En déduire la résolution dans <Math tex="\mathbb R^+" /> de{" "}
                  <Math tex="\sqrt{x+1}+\sqrt5=\sqrt6+\sqrt x" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>a.</strong> En multipliant par la quantité conjuguée :{" "}
                  <Math tex="\sqrt{x+1}-\sqrt x=\dfrac{1}{\sqrt{x+1}+\sqrt x}" />. La fonction{" "}
                  <Math tex="f(x)=\dfrac{1}{\sqrt{x+1}+\sqrt x}" /> est <strong>strictement décroissante</strong>{" "}
                  sur <Math tex="\mathbb R^+" /> (son dénominateur croît strictement), donc{" "}
                  <strong>injective</strong> : <Math tex="f(x)=f(y)\Rightarrow x=y" />.
                </p>
                <p>
                  <strong>b.</strong> L&apos;équation se réécrit{" "}
                  <Math tex="\sqrt{x+1}-\sqrt x=\sqrt6-\sqrt5" />, c&apos;est-à-dire{" "}
                  <Math tex="f(x)=f(5)" /> (car <Math tex="\sqrt{5+1}-\sqrt5=\sqrt6-\sqrt5" />).
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;après la question <strong>a.</strong>, <Math tex="f" /> est injective, donc{" "}
                  <Math tex="x=5" /> : l&apos;unique solution est <Math tex="S=\{5\}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
