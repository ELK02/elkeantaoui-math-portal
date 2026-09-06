import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  FormulaBlock,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "L'ordre dans IR · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet sur l'ordre dans IR (comparaison, propriétés de l'ordre et opérations, intervalles, encadrement, intersection et réunion d'intervalles, valeur absolue, distance, approximation décimale) et 14 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "L'ordre dans IR",
  heroSubtitle:
    "Comparaison de réels, intervalles et encadrements, valeur absolue et distance, approximation décimale : le cours complet, puis 14 exercices corrigés pas à pas.",
  footerNote: "L'ordre dans IR · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "formulaire", label: "Formulaire" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** A numbered topic card used throughout the "Cours" section (I → V). */
function TopicCard({
  numeral,
  title,
  children,
}: {
  numeral: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
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

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <p className="text-foreground">{children}</p>
    </div>
  );
}

/** A worked example block: statement in a bordered card. */
function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-4 text-sm">
      <p className="mb-2 font-semibold text-foreground-muted">{title}</p>
      <div className="space-y-2 text-foreground">{children}</div>
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
          { value: "14", label: "exercices corrigés" },
          { value: "5", label: "notions du cours" },
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
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-6xl font-extrabold sm:text-7xl">
              <Math tex="a \le b" />
            </span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              intervalles · encadrement · valeur absolue
            </span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Le cours complet"
        title="L'ordre dans IR"
        tone="light"
        description="Cinq notions à maîtriser, chacune avec sa définition, ses propriétés et un exemple entièrement résolu."
      >
        {/* I. Ordre dans R */}
        <TopicCard numeral="I" title="Ordre dans ℝ : définitions et propriétés">
          <DefBox label="Définitions">
            Soient <Math tex="a" /> et <Math tex="b" /> deux réels.
          </DefBox>
          <ul className="list-disc space-y-1.5 rounded-xl border border-border bg-surface-muted p-4 pl-9 text-sm">
            <li>
              <Math tex="a \le b" /> équivaut à <Math tex="(b-a) \in \mathbb{R}^{+}" />.
            </li>
            <li>
              <Math tex="a < b" /> équivaut à <Math tex="(b-a) \in \mathbb{R}^{+*}" />.
            </li>
            <li>
              <Math tex="a \ge b" /> équivaut à <Math tex="(a-b) \in \mathbb{R}^{+}" />.
            </li>
            <li>
              <Math tex="a > b" /> équivaut à <Math tex="(a-b) \in \mathbb{R}^{+*}" />.
            </li>
          </ul>
          <Callout variant="info" title="Exemple">
            <Math tex="\dfrac{2}{7} > \dfrac{1}{7}" />, <Math tex="\sqrt{2} < 2" />, <Math tex="-100 < 1" />.
          </Callout>
          <Example title="Exemple résolu · comparer a = 5 − √3 et b = 2√3">
            <p>
              <Math tex="a-b = (5-\sqrt3)-2\sqrt3 = 5-3\sqrt3" />. Comparons 5 et <Math tex="3\sqrt3" /> en élevant
              au carré (les deux sont positifs) : <Math tex="5^2=25" /> et <Math tex="(3\sqrt3)^2=27" />.
            </p>
            <p>
              Comme <Math tex="25 < 27" />, on a <Math tex="5 < 3\sqrt3" />, donc <Math tex="a-b=5-3\sqrt3 < 0" />.
            </p>
            <p className="font-semibold text-green-700">
              Conclusion : <Math tex="a < b" />.
            </p>
          </Example>

          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-2 font-semibold text-foreground-muted">
              Propriétés de l&apos;ordre et des opérations — pour tous <Math tex="a,b,c,d \in \mathbb{R}" /> :
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="a \le b" /> et <Math tex="b \le c" />, alors <Math tex="a \le c" /> (transitivité).
              </li>
              <li>
                Si <Math tex="a \le b" />, alors <Math tex="a+c \le b+c" /> et <Math tex="a-c \le b-c" /> (compatibilité
                avec l&apos;addition).
              </li>
              <li>
                Si <Math tex="a \le b" /> et <Math tex="c \le d" />, alors <Math tex="a+c \le b+d" />.
              </li>
              <li>
                Si <Math tex="c > 0" /> et <Math tex="a \le b" />, alors <Math tex="ac \le bc" /> et{" "}
                <Math tex="\dfrac{a}{c} \le \dfrac{b}{c}" />.
              </li>
              <li>
                Si <Math tex="c < 0" /> et <Math tex="a \le b" />, alors <Math tex="ac \ge bc" /> et{" "}
                <Math tex="\dfrac{a}{c} \ge \dfrac{b}{c}" /> (l&apos;inégalité change de sens).
              </li>
              <li>
                Si <Math tex="a" /> et <Math tex="b" /> sont non nuls et de même signe : <Math tex="a \le b" />{" "}
                équivaut à <Math tex="\dfrac1a \ge \dfrac1b" />.
              </li>
              <li>
                Si <Math tex="a,b \ge 0" /> : <Math tex="a \le b \iff a^2 \le b^2 \iff \sqrt a \le \sqrt b" />, et{" "}
                <Math tex="a \le b \iff a^n \le b^n" /> pour <Math tex="n \in \mathbb{N}" />.
              </li>
            </ul>
          </div>
          <Example title="Exemple résolu · encadrer B = 2x + 3/x pour x ∈ [1, 7]">
            <p>
              <Math tex="1 \le x \le 7 \implies 2 \le 2x \le 14" />.
            </p>
            <p>
              <Math tex="1 \le x \le 7" />, et <Math tex="x \mapsto \dfrac1x" /> est décroissante sur les positifs,
              donc <Math tex="\dfrac17 \le \dfrac1x \le 1" />, d&apos;où <Math tex="\dfrac37 \le \dfrac3x \le 3" />.
            </p>
            <p>
              On additionne les deux encadrements (compatibilité de l&apos;ordre avec l&apos;addition) :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="2+\dfrac37 \le B \le 14+3" />, c&apos;est-à-dire <Math tex="\dfrac{17}{7} \le B \le 17" />.
            </p>
          </Example>
        </TopicCard>

        {/* II. Intervalles et encadrement */}
        <TopicCard numeral="II" title="Intervalles et encadrement">
          <p className="text-sm text-foreground">
            Soient <Math tex="a" /> et <Math tex="b" /> deux réels tels que <Math tex="a < b" />. Pour les
            intervalles <Math tex="[a,b]" />, <Math tex="]a,b[" />, <Math tex="[a,b[" /> et <Math tex="]a,b]" /> :
          </p>
          <ul className="list-disc space-y-1.5 rounded-xl border border-border bg-surface-muted p-4 pl-9 text-sm">
            <li>
              <Math tex="a" /> et <Math tex="b" /> sont appelés les <strong>extrémités</strong> de l&apos;intervalle.
            </li>
            <li>
              Le nombre positif <Math tex="b-a" /> est appelé la <strong>distance</strong> entre <Math tex="a" /> et{" "}
              <Math tex="b" />, ou la <strong>longueur</strong> (capacité) de l&apos;intervalle.
            </li>
            <li>
              Le nombre <Math tex="x_0 = \dfrac{a+b}{2}" /> représente le <strong>centre</strong> de l&apos;intervalle.
            </li>
            <li>
              Le nombre positif <Math tex="r = \dfrac{b-a}{2}" /> représente le <strong>rayon</strong> de l&apos;intervalle.
            </li>
            <li>
              Les symboles <Math tex="-\infty" /> et <Math tex="+\infty" /> ne sont pas des nombres.
            </li>
            <li>
              <Math tex="\mathbb{R}^{+}=[0,+\infty[" />, <Math tex="\mathbb{R}^{+*}=]0,+\infty[" />,{" "}
              <Math tex="\mathbb{R}^{-}=]-\infty,0]" />, <Math tex="\mathbb{R}^{-*}=]-\infty,0[" />, et{" "}
              <Math tex="]a,a[=\varnothing" />.
            </li>
            <li>
              <Math tex="\varnothing" /> (l&apos;<strong>ensemble vide</strong>) est lui-même considéré comme un
              intervalle.
            </li>
          </ul>
          <DefBox label="Définition · encadrement">
            Réaliser un encadrement d&apos;un réel <Math tex="x" /> c&apos;est trouver deux réels <Math tex="a" /> et{" "}
            <Math tex="b" /> (avec <Math tex="a<b" />) tels que <Math tex="a \le x \le b" /> (ou avec des inégalités
            strictes). Le nombre positif <Math tex="b-a" /> s&apos;appelle l&apos;<strong>amplitude</strong> de cet
            encadrement.
          </DefBox>
          <FormulaBlock tex="a \le x \le b \qquad \text{amplitude } = b-a" caption="encadrement d'un réel x" />
          <Example title="Exemple résolu · encadrer √2 d'amplitude 0,01">
            <p>
              <Math tex="1{,}41^2 = 1{,}9881" /> et <Math tex="1{,}42^2 = 2{,}0164" />, avec{" "}
              <Math tex="1{,}9881 < 2 < 2{,}0164" />.
            </p>
            <p className="font-semibold text-green-700">
              Donc <Math tex="1{,}41 \le \sqrt2 \le 1{,}42" />, un encadrement d&apos;amplitude{" "}
              <Math tex="1{,}42-1{,}41 = 0{,}01" />.
            </p>
          </Example>
          <Example title="Exemple résolu · soit x ∈ ]1/3, 1[, encadrer x/(x+4)">
            <p>
              <Math tex="\dfrac13 < x < 1 \implies \dfrac13+4 < x+4 < 1+4" />, soit{" "}
              <Math tex="\dfrac{13}{3} < x+4 < 5" />.
            </p>
            <p>
              La fonction inverse est décroissante sur les positifs, donc <Math tex="\dfrac15 < \dfrac{1}{x+4} < \dfrac{3}{13}" />,
              puis en multipliant par 4 : <Math tex="\dfrac45 < \dfrac{4}{x+4} < \dfrac{12}{13}" />.
            </p>
            <p>
              Or <Math tex="\dfrac{x}{x+4} = \dfrac{(x+4)-4}{x+4} = 1-\dfrac{4}{x+4}" />. Comme on retranche un
              nombre compris entre 4/5 et 12/13, l&apos;inégalité se retourne :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="1-\dfrac{12}{13} < \dfrac{x}{x+4} < 1-\dfrac45" />, c&apos;est-à-dire{" "}
              <Math tex="\dfrac{1}{13} < \dfrac{x}{x+4} < \dfrac15" />.
            </p>
          </Example>
        </TopicCard>

        {/* III. Intersection et reunion */}
        <TopicCard numeral="III" title="Intersection et réunion d'intervalles">
          <DefBox label="Définition · intersection">
            Soient <Math tex="A" /> et <Math tex="B" /> deux ensembles. L&apos;ensemble des éléments communs à{" "}
            <Math tex="A" /> et à <Math tex="B" /> est noté <Math tex="A \cap B" /> :{" "}
            <Math tex="A \cap B = \{x \mid x \in A \text{ et } x \in B\}" />. On a :{" "}
            <Math tex="x \in A \cap B \iff (x \in A \text{ et } x \in B)" />.
          </DefBox>
          <DefBox label="Définition · réunion">
            L&apos;ensemble des éléments qui appartiennent à <Math tex="A" /> ou à <Math tex="B" /> est noté{" "}
            <Math tex="A \cup B" /> : <Math tex="A \cup B = \{x \mid x \in A \text{ ou } x \in B\}" />. On a :{" "}
            <Math tex="x \in A \cup B \iff (x \in A \text{ ou } x \in B)" />.
          </DefBox>
          <Callout variant="info" title="Exemple avec des ensembles finis">
            Avec <Math tex="A=\{1,2,3,4,5,6\}" /> et <Math tex="B=\{-1,2,4,6,44,50\}" /> :{" "}
            <Math tex="A \cap B = \{2,4,6\}" /> et <Math tex="A \cup B = \{-1,1,2,3,4,5,6,44,50\}" />.
          </Callout>
          <Example title="Exemples résolus · avec I = [−1, 3]">
            <p>
              Si <Math tex="J=[1,5]" /> : <Math tex="I \cap J = [1,3]" /> et <Math tex="I \cup J = [-1,5]" />.
            </p>
            <p>
              Si <Math tex="J=]1,5]" /> : <Math tex="I \cap J = ]1,3]" /> et <Math tex="I \cup J = [-1,5]" />.
            </p>
            <p>
              Si <Math tex="J=]3,5[" /> : <Math tex="I \cap J = \varnothing" /> (aucun point commun) et{" "}
              <Math tex="I \cup J = [-1,5[" />.
            </p>
          </Example>
        </TopicCard>

        {/* IV. Valeur absolue et distance */}
        <TopicCard numeral="IV" title="Valeur absolue et distance">
          <DefBox label="Définition">
            Soit une droite graduée d&apos;origine <Math tex="O" /> et d&apos;unité <Math tex="OI=1" />, et{" "}
            <Math tex="M" /> le point d&apos;abscisse <Math tex="x" />. La <strong>valeur absolue</strong> de{" "}
            <Math tex="x" /> est la distance <Math tex="OM" />, notée <Math tex="OM=|x|" />.
          </DefBox>
          <ul className="list-disc space-y-1.5 rounded-xl border border-border bg-surface-muted p-4 pl-9 text-sm">
            <li>
              Si <Math tex="x \ge 0" />, alors <Math tex="|x|=x" /> ; si <Math tex="x \le 0" />, alors{" "}
              <Math tex="|x|=-x" />.
            </li>
            <li>
              <Math tex="|0|=0" />, <Math tex="|-x|=|x|" />, <Math tex="|x| \ge 0" />.
            </li>
          </ul>
          <Callout variant="info" title="Exemples">
            <Math tex="|1-\sqrt2| = \sqrt2-1" /> (car <Math tex="1<\sqrt2" />), <Math tex="|-\sqrt3|=\sqrt3" />,{" "}
            <Math tex="\left|-\dfrac37\right| = \dfrac37" />, <Math tex="|\sqrt5|=\sqrt5" />.
          </Callout>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-2 font-semibold text-foreground-muted">Propriétés — pour tous a, b réels :</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\sqrt{a^2} = |a|" />.
              </li>
              <li>
                <Math tex="|ab| = |a|\,|b|" /> et <Math tex="|a^n| = |a|^n" /> (<Math tex="n \in \mathbb{N}" />).
              </li>
              <li>
                <Math tex="|a+b| \le |a|+|b|" /> (inégalité triangulaire).
              </li>
              <li>
                Pour <Math tex="b \ne 0" /> : <Math tex="\left|\dfrac1b\right| = \dfrac{1}{|b|}" /> et{" "}
                <Math tex="\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}" />.
              </li>
              <li>
                <Math tex="|a| = |b| \iff (a=b \text{ ou } a=-b)" />.
              </li>
            </ul>
          </div>
          <Example title="Exemple résolu · simplifier √((2x−3)²) sachant x ≥ 2">
            <p>
              Si <Math tex="x \ge 2" />, alors <Math tex="2x \ge 4" />, donc <Math tex="2x-3 \ge 1 > 0" />.
            </p>
            <p className="font-semibold text-green-700">
              Donc <Math tex="\sqrt{(2x-3)^2} = |2x-3| = 2x-3" />.
            </p>
          </Example>

          <DefBox label="Définition · distance">
            Soient <Math tex="A" /> d&apos;abscisse <Math tex="a" /> et <Math tex="B" /> d&apos;abscisse{" "}
            <Math tex="b" /> sur une droite graduée. La <strong>distance</strong> entre <Math tex="A" /> et{" "}
            <Math tex="B" /> est <Math tex="AB = |b-a|" />.
          </DefBox>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-2 font-semibold text-foreground-muted">
              Propriétés — soit <Math tex="r>0" /> et <Math tex="x_0 \in \mathbb{R}" /> :
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="|x| \le r \iff -r \le x \le r" /> ; <Math tex="|x| < r \iff -r < x < r" />.
              </li>
              <li>
                <Math tex="|x| \ge r \iff x \in \,]-\infty,-r] \cup [r,+\infty[" />.
              </li>
              <li>
                <Math tex="|x-x_0| \le r \iff x_0-r \le x \le x_0+r" />.
              </li>
              <li>
                <Math tex="[a,b] = [x_0-r,\, x_0+r]" /> avec <Math tex="x_0=\dfrac{a+b}{2}" /> et{" "}
                <Math tex="r=\dfrac{b-a}{2}" />.
              </li>
            </ul>
          </div>
          <Example title="Exemple résolu · |x − 3| ≤ 2">
            <p>
              Ici <Math tex="x_0=3" /> et <Math tex="r=2" />, donc <Math tex="|x-3|\le2 \iff 1 \le x \le 5" />.
            </p>
            <p className="font-semibold text-green-700">
              L&apos;intervalle cherché est <Math tex="[a,b]=[1,5]" />.
            </p>
          </Example>
        </TopicCard>

        {/* V. Approximation decimale */}
        <TopicCard numeral="V" title="Approximation décimale">
          <DefBox label="Définitions — soit x ∈ ℝ et r > 0">
            <span className="block space-y-1">
              <span className="block">
                <Math tex="a" /> est une <strong>valeur approchée</strong> de <Math tex="x" /> à <Math tex="r" />{" "}
                près lorsque <Math tex="|x-a| \le r" />.
              </span>
              <span className="block">
                <Math tex="a" /> est une valeur approchée <strong>par défaut</strong> de <Math tex="x" /> à{" "}
                <Math tex="r" /> près lorsque <Math tex="a \le x \le a+r" /> (a est en-dessous de x).
              </span>
              <span className="block">
                <Math tex="a" /> est une valeur approchée <strong>par excès</strong> de <Math tex="x" /> à{" "}
                <Math tex="r" /> près lorsque <Math tex="a-r \le x \le a" /> (a est au-dessus de x).
              </span>
            </span>
          </DefBox>
          <Callout variant="success" title="Cas particulier">
            Si <Math tex="a \le x \le a+r=b" />, alors <Math tex="a" /> est valeur approchée par défaut de{" "}
            <Math tex="x" /> à la précision <Math tex="b-a" />, <Math tex="b" /> est valeur approchée par excès à la
            même précision, et <Math tex="\dfrac{a+b}{2}" /> est une valeur approchée (générale) de <Math tex="x" />{" "}
            à la précision <Math tex="\dfrac{b-a}{2}" />.
          </Callout>
          <Example title="Exemple résolu · avec 1,4142 ≤ √2 ≤ 1,4143">
            <p>
              <Math tex="1{,}4142" /> est une valeur approchée par défaut de <Math tex="\sqrt2" /> à la précision{" "}
              <Math tex="10^{-4}" /> (car <Math tex="1{,}4143-1{,}4142=0{,}0001=10^{-4}" />).
            </p>
            <p>
              <Math tex="1{,}4143" /> est une valeur approchée par excès de <Math tex="\sqrt2" /> à la précision{" "}
              <Math tex="10^{-4}" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="1{,}41425" /> est une valeur approchée de <Math tex="\sqrt2" /> à la précision{" "}
              <Math tex="5\times10^{-5}" /> (la demi-amplitude).
            </p>
          </Example>
          <DefBox label="Partie entière">
            Pour tout réel <Math tex="x" />, il existe un unique entier relatif <Math tex="p" /> tel que{" "}
            <Math tex="p \le x < p+1" />. On l&apos;appelle la <strong>partie entière</strong> de <Math tex="x" />,
            notée <Math tex="E(x)=p" />.
          </DefBox>
          <Callout variant="info" title="Exemples">
            <Math tex="E(21)=21" />, <Math tex="E(2{,}14)=2" />, <Math tex="E(-7)=-7" />, et{" "}
            <Math tex="E(-2{,}5)=-3" /> (car <Math tex="-3 \le -2{,}5 < -2" />).
          </Callout>
          <DefBox label="Approximation décimale d'ordre n">
            Soit <Math tex="n \in \mathbb{N}" /> et <Math tex="p = E(10^n x)" />, c&apos;est-à-dire{" "}
            <Math tex="p \le 10^n x < p+1" />. Le nombre <Math tex="p \times 10^{-n}" /> est l&apos;
            <strong>approximation décimale par défaut</strong> de <Math tex="x" /> à la précision{" "}
            <Math tex="10^{-n}" />, et <Math tex="(p+1)\times10^{-n}" /> est l&apos;
            <strong>approximation décimale par excès</strong>, à la même précision.
          </DefBox>
        </TopicCard>
      </LessonSection>

      {/* ===================== FORMULAIRE ===================== */}
      <LessonSection
        id="formulaire"
        kicker="02 · Teste-toi"
        title="Formulaire express"
        tone="muted"
        description="Essaie de répondre dans ta tête avant de cliquer pour vérifier."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Accordion>
            <AccordionItem title="🔵 Comment multiplier une inégalité par c < 0 ?">
              L&apos;inégalité change de sens : si <Math tex="c<0" /> et <Math tex="a\le b" />, alors{" "}
              <Math tex="ac \ge bc" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟢 Centre et rayon d'un intervalle [a,b] ?">
              <Math tex="x_0=\dfrac{a+b}{2}" /> (centre) et <Math tex="r=\dfrac{b-a}{2}" /> (rayon).
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟠 |x| ≤ r équivaut à quoi ?">
              <Math tex="-r \le x \le r" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🔴 |x − x₀| ≤ r équivaut à quoi ?">
              <Math tex="x_0-r \le x \le x_0+r" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟣 |a| = |b| équivaut à quoi ?">
              <Math tex="a=b" /> ou <Math tex="a=-b" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟡 Inégalité triangulaire ?">
              <Math tex="|a+b| \le |a|+|b|" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="⚪ Valeur approchée par défaut à r près ?">
              <Math tex="a \le x \le a+r" /> (a est en-dessous de x).
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="⚫ Partie entière E(x) ?">
              L&apos;unique entier <Math tex="p" /> tel que <Math tex="p \le x < p+1" />.
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · L'ordre dans IR"
        tone="light"
        description="14 exercices corrigés en détail. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup
          total={14}
          celebrationTitle="Bravo, les 14 exercices sont vérifiés !"
          celebrationSubtitle="Tu maîtrises l'ordre dans IR."
        >
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Comparer deux nombres"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Comparer les deux nombres a et b dans les cas suivants :</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    <Math tex="a=2-\sqrt3" /> et <Math tex="b=(2-\sqrt3)^2" />.
                  </li>
                  <li>
                    <Math tex="a=5+\sqrt2" /> et <Math tex="b=\sqrt{25+10\sqrt2}" />.
                  </li>
                  <li>
                    <Math tex="a=\sqrt{10}" /> et <Math tex="b=\sqrt3+\sqrt7" />.
                  </li>
                  <li>
                    <Math tex="a=4+\sqrt{17}" /> et <Math tex="b=3\sqrt2+\sqrt{17}" />.
                  </li>
                  <li>
                    <Math tex="a=4\sqrt5-\sqrt{79}" /> et <Math tex="b=9-4\sqrt5" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="a=2-\sqrt3 \in\,]0,1[" /> (car <Math tex="\sqrt3\approx1{,}73" />).
                  Pour <Math tex="0<a<1" />, on a <Math tex="a^2<a" />, donc <Math tex="b=a^2<a" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="a>b" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="b^2=25+10\sqrt2" /> et <Math tex="a^2=(5+\sqrt2)^2=27+10\sqrt2" />.
                  Donc <Math tex="a^2-b^2=2>0" />, et comme <Math tex="a,b>0" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a>b" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="a^2=10" /> et <Math tex="b^2=3+7+2\sqrt{21}=10+2\sqrt{21}" />. Donc{" "}
                  <Math tex="b^2>a^2" />, et comme <Math tex="a,b>0" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a<b" />.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="a-b=4-3\sqrt2" />. Or <Math tex="4^2=16" /> et{" "}
                  <Math tex="(3\sqrt2)^2=18" />, donc <Math tex="4<3\sqrt2" />, d&apos;où <Math tex="a-b<0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="a<b" />.
                </p>
                <p>
                  <strong>5)</strong> <Math tex="a-b = 8\sqrt5-\sqrt{79}-9" />. Montrons <Math tex="8\sqrt5-9>\sqrt{79}" />{" "}
                  (les deux membres sont positifs car <Math tex="8\sqrt5\approx17{,}9" />) en comparant les carrés :{" "}
                  <Math tex="(8\sqrt5-9)^2 = 320-144\sqrt5+81 = 401-144\sqrt5" />.
                </p>
                <p>
                  Il reste à comparer <Math tex="401-144\sqrt5" /> et 79, soit <Math tex="322" /> et{" "}
                  <Math tex="144\sqrt5" />, soit (en divisant par 2) <Math tex="161" /> et <Math tex="72\sqrt5" />.
                  En élevant au carré : <Math tex="161^2=25921" /> et <Math tex="(72\sqrt5)^2=25920" />.
                </p>
                <p>
                  Comme <Math tex="25921>25920" />, on remonte la chaîne : <Math tex="161>72\sqrt5" />, donc{" "}
                  <Math tex="401-144\sqrt5>79" />, donc <Math tex="(8\sqrt5-9)^2>79" />, donc{" "}
                  <Math tex="8\sqrt5-9>\sqrt{79}" />, donc <Math tex="a-b>0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="a>b" /> (l&apos;écart est très faible : <Math tex="a-b\approx0{,}00035" />).
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Encadrer une expression rationnelle"
            items={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Soit <Math tex="a>0" /> et <Math tex="b<0" />, en posant{" "}
                  <Math tex="A=\dfrac{9a-4b}{3a-2b}" />. Montrer que <Math tex="2<A<3" />.
                </p>
                <p>
                  <strong>2)</strong> Soit <Math tex="a>0" /> et <Math tex="b>0" />, en posant{" "}
                  <Math tex="A=\dfrac{12a+10b}{3a+2b}" />. Montrer que <Math tex="4<A<5" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Comme <Math tex="a>0" /> et <Math tex="b<0" />, on a <Math tex="3a>0" /> et{" "}
                  <Math tex="-2b>0" />, donc le dénominateur <Math tex="3a-2b>0" />.
                </p>
                <p>
                  <Math tex="A-2 = \dfrac{9a-4b-2(3a-2b)}{3a-2b} = \dfrac{3a}{3a-2b} > 0" /> (numérateur et
                  dénominateur positifs), donc <Math tex="A>2" />.
                </p>
                <p>
                  <Math tex="3-A = \dfrac{3(3a-2b)-(9a-4b)}{3a-2b} = \dfrac{-2b}{3a-2b} > 0" /> (car{" "}
                  <Math tex="-2b>0" />), donc <Math tex="A<3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="2<A<3" />.
                </p>
                <p>
                  <strong>2)</strong> Comme <Math tex="a,b>0" />, le dénominateur <Math tex="3a+2b>0" />.
                </p>
                <p>
                  <Math tex="A-4 = \dfrac{12a+10b-4(3a+2b)}{3a+2b} = \dfrac{2b}{3a+2b} > 0" />, donc{" "}
                  <Math tex="A>4" />.
                </p>
                <p>
                  <Math tex="5-A = \dfrac{5(3a+2b)-(12a+10b)}{3a+2b} = \dfrac{3a}{3a+2b} > 0" />, donc{" "}
                  <Math tex="A<5" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="4<A<5" />.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Une double inégalité et l'encadrement de √15"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient <Math tex="a" /> et <Math tex="b" /> deux réels distincts strictement positifs.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="a^2+b^2 > 2ab" />.
                  </li>
                  <li>
                    Montrer que <Math tex="\dfrac{2}{a^2+b^2} < \dfrac{1}{ab} < \dfrac{a^2+b^2}{2a^2b^2}" />.
                  </li>
                  <li>
                    Déduire que <Math tex="3{,}75 < \sqrt{15} < 4" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Comme <Math tex="a \ne b" />, <Math tex="(a-b)^2 > 0" />, c&apos;est-à-dire{" "}
                  <Math tex="a^2-2ab+b^2 > 0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="a^2+b^2 > 2ab" />.
                </p>
                <p>
                  <strong>2)</strong> Comme <Math tex="a,b>0" />, <Math tex="ab>0" /> et <Math tex="a^2+b^2>0" />. En
                  divisant l&apos;inégalité du 1) par <Math tex="ab(a^2+b^2) > 0" /> :
                </p>
                <p>
                  <Math tex="\dfrac{a^2+b^2}{ab(a^2+b^2)} > \dfrac{2ab}{ab(a^2+b^2)}" />, c&apos;est-à-dire{" "}
                  <Math tex="\dfrac{1}{ab} > \dfrac{2}{a^2+b^2}" />.
                </p>
                <p>
                  De même, en divisant l&apos;inégalité du 1) par <Math tex="2a^2b^2>0" /> :{" "}
                  <Math tex="\dfrac{a^2+b^2}{2a^2b^2} > \dfrac{2ab}{2a^2b^2} = \dfrac1{ab}" />.
                </p>
                <p className="font-semibold text-green-700">
                  En combinant : <Math tex="\dfrac{2}{a^2+b^2} < \dfrac{1}{ab} < \dfrac{a^2+b^2}{2a^2b^2}" />.
                </p>
                <p>
                  <strong>3)</strong> Appliquons le 2) avec <Math tex="a=\sqrt3" /> et <Math tex="b=\sqrt5" /> (distincts,
                  strictement positifs). Alors <Math tex="ab=\sqrt{15}" />, <Math tex="a^2+b^2=8" /> et{" "}
                  <Math tex="a^2b^2=15" />, donc <Math tex="2a^2b^2=30" />.
                </p>
                <p>
                  L&apos;encadrement devient <Math tex="\dfrac{2}{8} < \dfrac{1}{\sqrt{15}} < \dfrac{8}{30}" />,
                  c&apos;est-à-dire <Math tex="\dfrac14 < \dfrac{1}{\sqrt{15}} < \dfrac{4}{15}" />.
                </p>
                <p>
                  En passant aux inverses (tous les termes sont positifs, l&apos;ordre s&apos;inverse) :{" "}
                  <Math tex="\dfrac{15}{4} < \sqrt{15} < 4" />.
                </p>
                <p className="font-semibold text-green-700">
                  Or <Math tex="\dfrac{15}{4}=3{,}75" />, donc <Math tex="3{,}75 < \sqrt{15} < 4" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Encadrer ab, a², b² et 3a²+b²−a+b"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient <Math tex="a" /> et <Math tex="b" /> des réels tels que <Math tex="-6<a<3" /> et{" "}
                  <Math tex="5<b<9" />.
                </p>
                <p>
                  Encadrer les nombres suivants : <Math tex="ab" /> ; <Math tex="a^2" /> ; <Math tex="b^2" /> ;{" "}
                  <Math tex="3a^2+b^2-a+b" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>Encadrer ab.</strong> Comme <Math tex="b>0" />, on multiplie <Math tex="-6<a<3" /> par{" "}
                  <Math tex="b" /> (positif) : <Math tex="-6b < ab < 3b" />.
                </p>
                <p>
                  Or <Math tex="5<b<9" /> donne <Math tex="15<3b<27" /> et (en multipliant par <Math tex="-6<0" />,
                  l&apos;ordre s&apos;inverse) <Math tex="-54<-6b<-30" />.
                </p>
                <p className="font-semibold text-green-700">
                  En combinant : <Math tex="-54 < ab < 27" />.
                </p>
                <p>
                  <strong>Encadrer a².</strong> Comme <Math tex="-6<a<3" />, on a <Math tex="|a|<6" /> (la plus
                  grande valeur absolue possible est 6), donc <Math tex="a^2<36" />. De plus{" "}
                  <Math tex="a=0" /> appartient à l&apos;intervalle et donne <Math tex="a^2=0" />, qui est bien le
                  minimum possible (un carré est toujours <Math tex="\ge0" />).
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="0 \le a^2 < 36" />.
                </p>
                <p>
                  <strong>Encadrer b².</strong> Comme <Math tex="5<b<9" /> avec <Math tex="b>0" />, on élève au
                  carré directement :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="25 < b^2 < 81" />.
                </p>
                <p>
                  <strong>Encadrer 3a²+b²−a+b.</strong> On combine les encadrements déjà obtenus. De{" "}
                  <Math tex="0\le a^2<36" /> : <Math tex="0\le 3a^2<108" />. De <Math tex="-6<a<3" /> (en
                  multipliant par <Math tex="-1" />) : <Math tex="-3<-a<6" />.
                </p>
                <p>On additionne terme à terme les quatre encadrements :</p>
                <p>
                  <Math tex="0 \le 3a^2 < 108" />
                  <br />
                  <Math tex="25 < b^2 < 81" />
                  <br />
                  <Math tex="-3 < -a < 6" />
                  <br />
                  <Math tex="5 < b < 9" />
                </p>
                <p>
                  Somme des bornes inférieures : <Math tex="0+25-3+5=27" />. Somme des bornes supérieures :{" "}
                  <Math tex="108+81+6+9=204" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="27 < 3a^2+b^2-a+b < 204" />.
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Inégalités et intervalles : traduire dans les deux sens"
            items={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Écrire les inégalités suivantes sous forme d&apos;intervalles :
                </p>
                <p>
                  <Math tex="3 \le x \le 7" /> ; <Math tex="\dfrac23 < x < \dfrac54" /> ; <Math tex="-3<x\le0" /> ;{" "}
                  <Math tex="x \ge 5" /> ; <Math tex="x \le 7" /> ; <Math tex="x > \dfrac{6}{11}" /> ;{" "}
                  <Math tex="x<0" />.
                </p>
                <p>
                  <strong>2)</strong> Écrire les intervalles suivants sous forme d&apos;inégalités :
                </p>
                <p>
                  <Math tex="[2,5[" /> ; <Math tex="]-2,+\infty[" /> ; <Math tex="]-\infty,0]" /> ;{" "}
                  <Math tex="\left[\dfrac13,+\infty\right[" /> ; <Math tex="]4,5[" /> ; <Math tex="]-3,3]" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="3 \le x \le 7 \;\to\; [3,7]" />.{" "}
                  <Math tex="\dfrac23<x<\dfrac54 \;\to\; \left]\dfrac23,\dfrac54\right[" />.{" "}
                  <Math tex="-3<x\le0 \;\to\; ]-3,0]" />.{" "}
                  <Math tex="x \ge 5 \;\to\; [5,+\infty[" />. <Math tex="x\le7 \;\to\; ]-\infty,7]" />.{" "}
                  <Math tex="x>\dfrac{6}{11} \;\to\; \left]\dfrac{6}{11},+\infty\right[" />.{" "}
                  <Math tex="x<0 \;\to\; ]-\infty,0[" />.
                </p>
                <Callout variant="warning" title="Remarque">
                  L&apos;énoncé de cet exercice comporte également &laquo; <Math tex="-5 \le x < -8" /> &raquo;. Comme{" "}
                  <Math tex="-5 > -8" />, aucun réel ne peut vérifier à la fois <Math tex="x \ge -5" /> et{" "}
                  <Math tex="x<-8" /> : cette double inégalité décrit en réalité l&apos;<strong>ensemble vide</strong>{" "}
                  <Math tex="\varnothing" />.
                </Callout>
                <p>
                  <strong>2)</strong> <Math tex="[2,5[ \;\to\; 2 \le x < 5" />.{" "}
                  <Math tex="]-2,+\infty[ \;\to\; x>-2" />. <Math tex="]-\infty,0] \;\to\; x \le 0" />.{" "}
                  <Math tex="\left[\dfrac13,+\infty\right[ \;\to\; x \ge \dfrac13" />.{" "}
                  <Math tex="]4,5[ \;\to\; 4<x<5" />. <Math tex="]-3,3] \;\to\; -3<x\le3" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Simplifier des intersections et réunions d'intervalles"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Simplifier :</p>
                <p>
                  <Math tex="]-3,4[ \cap [2,7[" /> ; <Math tex="[-8,4[ \cap [10,20[" /> ;{" "}
                  <Math tex="]-\infty,1[ \cap \left[-\dfrac74,+\infty\right[" />
                </p>
                <p>
                  <Math tex="]5,9[ \cup [4,8[" /> ; <Math tex="[-5,-2[ \cup [-3,+\infty[" /> ;{" "}
                  <Math tex="\left]-\infty,\dfrac27\right[ \cup \left[-\dfrac12,+\infty\right[" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="]-3,4[ \cap [2,7[ \;=\; [2,4[" /> (borne inférieure : le plus grand des deux, ici 2,
                  fermée ; borne supérieure : le plus petit des deux, ici 4, ouverte).
                </p>
                <p>
                  <Math tex="[-8,4[ \cap [10,20[ \;=\; \varnothing" /> (les deux intervalles sont disjoints, car{" "}
                  <Math tex="4<10" />).
                </p>
                <p>
                  <Math tex="]-\infty,1[ \cap \left[-\dfrac74,+\infty\right[ \;=\; \left[-\dfrac74,1\right[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="]5,9[ \cup [4,8[ \;=\; [4,9[" /> (les deux intervalles se chevauchent : la réunion va
                  de 4, fermée, à 9, ouverte).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="[-5,-2[ \cup [-3,+\infty[ \;=\; [-5,+\infty[" /> (car <Math tex="-3 \in [-5,-2[" />, les
                  deux intervalles se rejoignent sans trou).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\left]-\infty,\dfrac27\right[ \cup \left[-\dfrac12,+\infty\right[ \;=\; \mathbb{R}" />{" "}
                  (car <Math tex="-\dfrac12 < \dfrac27" />, les deux intervalles se chevauchent et couvrent toute la
                  droite réelle).
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Valeur absolue : simplifications, équations et inéquations"
            items={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Soient <Math tex="x\in[-2,5]" /> et <Math tex="y\in[-3,-1]" />. Simplifier{" "}
                  <Math tex="A=2|2x+7|-|3y|+2|y+8|-|2y-x|" />.
                </p>
                <p>
                  <strong>2)</strong> Simplifier les nombres : <Math tex="\sqrt{(5\sqrt7-59\sqrt3)^2}" /> ;{" "}
                  <Math tex="|3\sqrt2-2\sqrt3|" /> ; <Math tex="|-5\sqrt{13}-13\sqrt5|" /> ;{" "}
                  <Math tex="\sqrt{7-4\sqrt3}" />.
                </p>
                <p>
                  <strong>3)</strong> Soient <Math tex="a \in \mathbb{R}^{-}" /> et{" "}
                  <Math tex="b \in \left[0,\dfrac13\right]" />. Simplifier <Math tex="\sqrt{(3b-1)^2}" /> et{" "}
                  <Math tex="\sqrt{(a-5)^2}" />.
                </p>
                <p>
                  <strong>4)</strong> Résoudre les équations : <Math tex="|5x+2|=8" /> ;{" "}
                  <Math tex="|-2x+1|=-1" /> ; <Math tex="|2x-1|=|3x-4|" />.
                </p>
                <p>
                  <strong>5)</strong> Résoudre les inéquations : <Math tex="|2x-3|\le1" /> ;{" "}
                  <Math tex="|6x+11| \ge \dfrac16" /> ; <Math tex="2\le|10x+2|\le5" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Pour <Math tex="x\in[-2,5]" /> : <Math tex="2x+7 \in [3,17]" />, positif,
                  donc <Math tex="|2x+7|=2x+7" />.
                </p>
                <p>
                  Pour <Math tex="y\in[-3,-1]" /> : <Math tex="3y\in[-9,-3]" />, négatif, donc{" "}
                  <Math tex="|3y|=-3y" /> ; et <Math tex="y+8\in[5,7]" />, positif, donc <Math tex="|y+8|=y+8" />.
                </p>
                <p>
                  Pour <Math tex="2y-x" /> : <Math tex="2y \le -2" /> et <Math tex="-x \le 2" />, donc{" "}
                  <Math tex="2y-x \le 0" />, d&apos;où <Math tex="|2y-x| = x-2y" />.
                </p>
                <p>
                  Donc <Math tex="A = 2(2x+7)-(-3y)+2(y+8)-(x-2y) = 4x+14+3y+2y+16-x+2y" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="A = 3x+7y+30" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="\sqrt{(5\sqrt7-59\sqrt3)^2} = |5\sqrt7-59\sqrt3|" />. Comme{" "}
                  <Math tex="5\sqrt7 \approx 13{,}2" /> et <Math tex="59\sqrt3 \approx 102{,}2" />, ce nombre est
                  négatif, donc <Math tex="|5\sqrt7-59\sqrt3| = 59\sqrt3-5\sqrt7" />.
                </p>
                <p>
                  <Math tex="|3\sqrt2-2\sqrt3|" /> : <Math tex="(3\sqrt2)^2=18>(2\sqrt3)^2=12" />, donc{" "}
                  <Math tex="3\sqrt2>2\sqrt3" />, d&apos;où <Math tex="|3\sqrt2-2\sqrt3|=3\sqrt2-2\sqrt3" />.
                </p>
                <p>
                  <Math tex="|-5\sqrt{13}-13\sqrt5| = 5\sqrt{13}+13\sqrt5" /> (les deux termes sont négatifs).
                </p>
                <p>
                  <Math tex="\sqrt{7-4\sqrt3}" /> : on remarque <Math tex="7-4\sqrt3 = 4-4\sqrt3+3 = (2-\sqrt3)^2" />.
                  Comme <Math tex="2>\sqrt3" />, <Math tex="2-\sqrt3>0" />, donc{" "}
                  <Math tex="\sqrt{7-4\sqrt3} = 2-\sqrt3" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="b\in\left[0,\dfrac13\right] \Rightarrow 3b-1 \in [-1,0]" />, donc{" "}
                  <Math tex="\sqrt{(3b-1)^2} = |3b-1| = 1-3b" />.
                </p>
                <p>
                  <Math tex="a \le 0 \Rightarrow a-5 \le -5 <0" />, donc <Math tex="\sqrt{(a-5)^2}=|a-5|=5-a" />.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="|5x+2|=8 \iff 5x+2=8 \text{ ou } 5x+2=-8" />, soit{" "}
                  <Math tex="x=\dfrac65" /> ou <Math tex="x=-2" />.
                </p>
                <p>
                  <Math tex="|-2x+1|=-1" /> : une valeur absolue ne peut être négative, donc{" "}
                  <strong>aucune solution</strong> (<Math tex="\mathcal S = \varnothing" />).
                </p>
                <p>
                  <Math tex="|2x-1|=|3x-4| \iff 2x-1=3x-4 \text{ ou } 2x-1=-(3x-4)" />, soit <Math tex="x=3" /> ou{" "}
                  <Math tex="x=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Solutions : <Math tex="x\in\left\{-2,\dfrac65\right\}" />, puis <Math tex="\varnothing" />, puis{" "}
                  <Math tex="x\in\{1,3\}" />.
                </p>
                <p>
                  <strong>5)</strong> <Math tex="|2x-3|\le1 \iff -1\le2x-3\le1 \iff 1\le x\le2" />.
                </p>
                <p>
                  <Math tex="|6x+11|\ge\dfrac16 \iff 6x+11\ge\dfrac16 \text{ ou } 6x+11\le-\dfrac16" />, soit{" "}
                  <Math tex="x \ge -\dfrac{65}{36}" /> ou <Math tex="x \le -\dfrac{67}{36}" />.
                </p>
                <p>
                  <Math tex="2\le|10x+2|\le5" /> se décompose en <Math tex="|10x+2|\le5" /> ET{" "}
                  <Math tex="|10x+2|\ge2" />.
                </p>
                <p>
                  <Math tex="|10x+2|\le5 \iff -\dfrac{7}{10}\le x\le\dfrac{3}{10}" />.{" "}
                  <Math tex="|10x+2|\ge2 \iff x\ge0 \text{ ou } x\le-\dfrac25" />.
                </p>
                <p className="font-semibold text-green-700">
                  En combinant : <Math tex="\mathcal S = \left[1,2\right]" />, puis{" "}
                  <Math tex="\left]-\infty,-\dfrac{67}{36}\right] \cup \left[-\dfrac{65}{36},+\infty\right[" />,
                  puis <Math tex="\left[-\dfrac{7}{10},-\dfrac25\right] \cup \left[0,\dfrac{3}{10}\right]" />.
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="x − y = 6 : calculer, encadrer et simplifier"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient <Math tex="x" /> et <Math tex="y" /> tels que : <Math tex="x \ge -2" /> ;{" "}
                  <Math tex="y \le -1" /> ; <Math tex="x-y=6" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Calculer <Math tex="A = \sqrt{(x+2)^2}+\sqrt{(y+1)^2}" />.
                  </li>
                  <li>
                    Montrer que <Math tex="x \le 5" /> et <Math tex="y \ge -8" />.
                  </li>
                  <li>
                    Établir que <Math tex="0 \le x^2+y^2 \le 89" />.
                  </li>
                  <li>
                    Calculer <Math tex="B = |x+y-4|+|x+y+10|" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="x\ge-2 \Rightarrow x+2\ge0" />, donc{" "}
                  <Math tex="\sqrt{(x+2)^2}=x+2" />. <Math tex="y\le-1 \Rightarrow y+1\le0" />, donc{" "}
                  <Math tex="\sqrt{(y+1)^2}=-(y+1)" />.
                </p>
                <p>
                  <Math tex="A = (x+2)-(y+1) = (x-y)+1 = 6+1 = 7" /> (en utilisant <Math tex="x-y=6" />).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="A=7" />.
                </p>
                <p>
                  <strong>2)</strong> Comme <Math tex="y=x-6" /> et <Math tex="y\le-1" /> : <Math tex="x-6\le-1" />,
                  donc <Math tex="x\le5" />.
                </p>
                <p>
                  Comme <Math tex="x=y+6" /> et <Math tex="x\ge-2" /> : <Math tex="y+6\ge-2" />, donc{" "}
                  <Math tex="y\ge-8" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="-2\le x\le5" /> et <Math tex="-8\le y\le-1" />.
                </p>
                <p>
                  <strong>3)</strong> Un carré est toujours <Math tex="\ge 0" />, donc <Math tex="x^2+y^2 \ge 0" />.
                </p>
                <p>
                  De <Math tex="-2\le x\le5" />, <Math tex="|x|\le5" />, donc <Math tex="x^2\le25" />. De{" "}
                  <Math tex="-8\le y\le-1" />, <Math tex="|y|\le8" />, donc <Math tex="y^2\le64" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="x^2+y^2 \le 25+64=89" />, donc <Math tex="0 \le x^2+y^2 \le 89" />.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="x+y = x+(x-6) = 2x-6" />. Avec <Math tex="-2\le x\le5" /> :{" "}
                  <Math tex="-10 \le x+y \le 4" />.
                </p>
                <p>
                  Donc <Math tex="x+y-4 \le 0" /> (car <Math tex="x+y\le4" />), soit{" "}
                  <Math tex="|x+y-4|=4-(x+y)" />. Et <Math tex="x+y+10 \ge 0" /> (car <Math tex="x+y\ge-10" />), soit{" "}
                  <Math tex="|x+y+10|=x+y+10" />.
                </p>
                <p>
                  <Math tex="B = [4-(x+y)]+[(x+y)+10] = 14" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="B=14" />, une constante indépendante de x et y.
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="|a| ≤ 1 et |b| ≤ 1 : encadrer ab+1 et majorer (a+b)/(ab+1)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient <Math tex="a" /> et <Math tex="b" /> tels que <Math tex="|a|\le1" /> et{" "}
                  <Math tex="|b|\le1" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Encadrer le nombre <Math tex="ab+1" /> et étudier le cas où <Math tex="ab+1=0" />.
                  </li>
                  <li>
                    Montrer que <Math tex="\left|\dfrac{a+b}{ab+1}\right| \le 1" /> (lorsque <Math tex="ab+1\ne0" />
                    ).
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="|ab| = |a|\,|b| \le 1\times1 = 1" />, donc{" "}
                  <Math tex="-1 \le ab \le 1" />, d&apos;où :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="0 \le ab+1 \le 2" />.
                </p>
                <p>
                  En particulier <Math tex="ab+1\ge0" />. L&apos;égalité <Math tex="ab+1=0" /> exigerait{" "}
                  <Math tex="ab=-1" />, donc <Math tex="|a|\,|b|=1" /> avec <Math tex="|a|\le1" /> et{" "}
                  <Math tex="|b|\le1" /> : cela n&apos;est possible que si <Math tex="|a|=|b|=1" /> avec{" "}
                  <Math tex="a" /> et <Math tex="b" /> de signes contraires (<Math tex="a=1,b=-1" /> ou{" "}
                  <Math tex="a=-1,b=1" />). Pour tout autre couple <Math tex="(a,b)" /> vérifiant les hypothèses, on
                  a bien <Math tex="ab+1>0" />.
                </p>
                <p>
                  <strong>2)</strong> Puisque <Math tex="ab+1\ge0" /> (question 1), il suffit de montrer que{" "}
                  <Math tex="-(ab+1) \le a+b \le ab+1" />.
                </p>
                <p>
                  <strong>Majoration :</strong> <Math tex="ab+1-(a+b) = ab-a-b+1 = (a-1)(b-1)" />. Or{" "}
                  <Math tex="|a|\le1 \Rightarrow a-1\le0" /> et de même <Math tex="b-1\le0" />, donc leur produit{" "}
                  <Math tex="(a-1)(b-1) \ge 0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="ab+1-(a+b)\ge0" />, c&apos;est-à-dire <Math tex="a+b \le ab+1" />.
                </p>
                <p>
                  <strong>Minoration :</strong> <Math tex="(a+b)-(-(ab+1)) = a+b+ab+1 = (a+1)(b+1)" />. Or{" "}
                  <Math tex="|a|\le1 \Rightarrow a+1\ge0" /> et de même <Math tex="b+1\ge0" />, donc{" "}
                  <Math tex="(a+1)(b+1) \ge 0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="a+b \ge -(ab+1)" />. En combinant les deux : <Math tex="|a+b| \le ab+1 = |ab+1|" />
                  , d&apos;où <Math tex="\left|\dfrac{a+b}{ab+1}\right| \le 1" /> dès que <Math tex="ab+1\ne0" />.
                </p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="√(x²+1) : encadrement et application numérique"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="x\in\mathbb{R}" />. On pose <Math tex="A=\sqrt{x^2+1}-|x|" /> et{" "}
                  <Math tex="B=\sqrt{x^2+1}+|x|" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Montrer que <Math tex="A>0" /> et en déduire que <Math tex="B>2|x|" />.
                  </li>
                  <li>
                    Calculer <Math tex="AB" /> et en déduire que <Math tex="A < \dfrac{1}{2|x|}" /> pour{" "}
                    <Math tex="x\ne0" />.
                  </li>
                  <li>
                    Démontrer que pour tout <Math tex="x\ne0" /> :{" "}
                    <Math tex="|x| < \sqrt{x^2+1} < |x|+\dfrac{1}{2|x|}" />.
                  </li>
                  <li>
                    Donner un encadrement d&apos;amplitude <Math tex="\dfrac{1}{66}" /> pour le nombre{" "}
                    <Math tex="\dfrac{\sqrt{122}}{3}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="x^2+1>x^2" />, donc (les deux membres étant positifs){" "}
                  <Math tex="\sqrt{x^2+1} > \sqrt{x^2} = |x|" />, d&apos;où <Math tex="A = \sqrt{x^2+1}-|x| > 0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\sqrt{x^2+1}>|x|" />, on a{" "}
                  <Math tex="B=\sqrt{x^2+1}+|x| > |x|+|x| = 2|x|" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="AB = (\sqrt{x^2+1}-|x|)(\sqrt{x^2+1}+|x|) = (x^2+1)-x^2 = 1" />.
                </p>
                <p>
                  Comme <Math tex="AB=1" /> et <Math tex="B>2|x|>0" /> (pour <Math tex="x\ne0" />) :{" "}
                  <Math tex="A = \dfrac1B < \dfrac{1}{2|x|}" />.
                </p>
                <p>
                  <strong>3)</strong> On a déjà <Math tex="|x| < \sqrt{x^2+1}" /> (question 1). De plus,{" "}
                  <Math tex="\sqrt{x^2+1} = |x|+A" />, et comme <Math tex="A<\dfrac{1}{2|x|}" /> (question 2) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\sqrt{x^2+1} = |x|+A < |x|+\dfrac{1}{2|x|}" />.
                </p>
                <p>
                  <strong>4)</strong> Remarquons <Math tex="122 = 121+1 = 11^2+1" />. En appliquant le résultat du 3)
                  avec <Math tex="x=11" /> (donc <Math tex="|x|=11" />) :
                </p>
                <p>
                  <Math tex="11 < \sqrt{122} < 11+\dfrac{1}{22}" />.
                </p>
                <p>
                  En divisant par 3 : <Math tex="\dfrac{11}{3} < \dfrac{\sqrt{122}}{3} < \dfrac{11}{3}+\dfrac{1}{66}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;amplitude de cet encadrement est exactement <Math tex="\dfrac{1}{66}" /> : c&apos;est
                  l&apos;encadrement demandé, <Math tex="\dfrac{11}{3} < \dfrac{\sqrt{122}}{3} < \dfrac{81}{22}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Deux valeurs absolues combinées"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient <Math tex="x\in\mathbb{R}" /> et <Math tex="y\in\mathbb{R}" /> tels que{" "}
                  <Math tex="\left|2x-\dfrac32\right| < \dfrac12" /> et <Math tex="\left|y-\dfrac34\right| < \dfrac14" />
                  .
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Démontrer que <Math tex="x \in \left]\dfrac12,1\right[" /> et{" "}
                    <Math tex="y \in \left]\dfrac12,1\right[" />.
                  </li>
                  <li>
                    Vérifier que <Math tex="xy-3x-2y-1 = (x-2)(y-3)-7" />.
                  </li>
                  <li>
                    En déduire que <Math tex="-5 < xy-3x-2y-1 < -\dfrac{13}{4}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="\left|2x-\dfrac32\right|<\dfrac12 \iff -\dfrac12 < 2x-\dfrac32 < \dfrac12" />
                  , soit <Math tex="1 < 2x < 2" />, soit <Math tex="\dfrac12 < x < 1" />.
                </p>
                <p>
                  <Math tex="\left|y-\dfrac34\right|<\dfrac14 \iff -\dfrac14 < y-\dfrac34 < \dfrac14" />, soit{" "}
                  <Math tex="\dfrac12 < y < 1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="x \in \left]\dfrac12,1\right[" /> et <Math tex="y \in \left]\dfrac12,1\right[" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="(x-2)(y-3)-7 = xy-3x-2y+6-7 = xy-3x-2y-1" />, qui est bien
                  l&apos;expression de gauche.
                </p>
                <p>
                  <strong>3)</strong> De <Math tex="\dfrac12<x<1" /> : <Math tex="x-2 \in \left]-\dfrac32,-1\right[" />
                  , donc <Math tex="2-x \in \left]1,\dfrac32\right[" />.
                </p>
                <p>
                  De <Math tex="\dfrac12<y<1" /> : <Math tex="y-3 \in \left]-\dfrac52,-2\right[" />, donc{" "}
                  <Math tex="3-y \in \left]2,\dfrac52\right[" />.
                </p>
                <p>
                  Le produit de deux quantités positives <Math tex="(2-x)" /> et <Math tex="(3-y)" /> se encadre en
                  multipliant les bornes : <Math tex="(2-x)(3-y) \in \left]1\times2,\ \dfrac32\times\dfrac52\right[ = \left]2,\dfrac{15}{4}\right[" />
                  .
                </p>
                <p>
                  Or <Math tex="(x-2)(y-3) = (2-x)(3-y)" />, donc <Math tex="(x-2)(y-3) \in \left]2,\dfrac{15}{4}\right[" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  En retranchant 7 : <Math tex="xy-3x-2y-1 = (x-2)(y-3)-7 \in \left]-5,-\dfrac{13}{4}\right[" />.
                </p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="Approximation de 1/x"
            items={
              <p className="text-sm text-foreground">
                Soit <Math tex="x \in \mathbb{R}^{*}" /> tel que <Math tex="|x-1| < \dfrac12" />. Démontrer que{" "}
                <Math tex="\dfrac43" /> est une valeur approchée du nombre <Math tex="\dfrac1x" /> avec la
                précision <Math tex="\dfrac23" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="|x-1|<\dfrac12 \iff \dfrac12 < x < \dfrac32" />.
                </p>
                <p>
                  Comme <Math tex="x>0" />, la fonction inverse est décroissante, donc{" "}
                  <Math tex="\dfrac{1}{3/2} < \dfrac1x < \dfrac{1}{1/2}" />, c&apos;est-à-dire{" "}
                  <Math tex="\dfrac23 < \dfrac1x < 2" />.
                </p>
                <p>
                  D&apos;après le cas particulier du cours (si <Math tex="a\le y\le b" />, alors{" "}
                  <Math tex="\dfrac{a+b}{2}" /> est une valeur approchée de <Math tex="y" /> à la précision{" "}
                  <Math tex="\dfrac{b-a}{2}" />), avec <Math tex="a=\dfrac23" /> et <Math tex="b=2" /> :
                </p>
                <p>
                  <Math tex="\dfrac{a+b}{2} = \dfrac{\frac23+2}{2} = \dfrac{\frac83}{2} = \dfrac43" />, et{" "}
                  <Math tex="\dfrac{b-a}{2} = \dfrac{2-\frac23}{2} = \dfrac{\frac43}{2} = \dfrac23" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\left|\dfrac1x-\dfrac43\right| \le \dfrac23" /> : <Math tex="\dfrac43" /> est bien
                  une valeur approchée de <Math tex="\dfrac1x" /> à la précision <Math tex="\dfrac23" />.
                </p>
              </div>
            }
          />

          {/* Exercice 13 */}
          <ExerciseCard
            id="13"
            index={13}
            title="Un encadrement en chaîne"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="\alpha \in \mathbb{R}" /> une valeur approchée par défaut de <Math tex="\dfrac13" />{" "}
                  à <Math tex="2\times10^{-1}" /> près.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="\dfrac{2}{15} \le \alpha \le \dfrac13" />, puis donner un encadrement de{" "}
                    <Math tex="\dfrac{\alpha}{\alpha-1}" />.
                  </li>
                  <li>
                    Soit <Math tex="x \in \mathbb{R}" /> tel que <Math tex="\left|\dfrac{x-1}{\alpha}\right| < \dfrac{1}{10}" />
                    . Montrer que <Math tex="\dfrac{29}{30} < x < \dfrac{31}{30}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Par définition, <Math tex="\alpha" /> valeur approchée par défaut de{" "}
                  <Math tex="\dfrac13" /> à <Math tex="0{,}2" /> près signifie{" "}
                  <Math tex="\alpha \le \dfrac13 \le \alpha+0{,}2" />, c&apos;est-à-dire{" "}
                  <Math tex="\dfrac13-0{,}2 \le \alpha \le \dfrac13" />.
                </p>
                <p className="font-semibold text-green-700">
                  Or <Math tex="\dfrac13-\dfrac15 = \dfrac{5-3}{15}=\dfrac{2}{15}" />, donc{" "}
                  <Math tex="\dfrac{2}{15} \le \alpha \le \dfrac13" />.
                </p>
                <p>
                  Comme <Math tex="\alpha < 1" />, <Math tex="\alpha-1" /> est toujours négatif : pour{" "}
                  <Math tex="\alpha=\dfrac{2}{15}" />, <Math tex="\alpha-1=-\dfrac{13}{15}" /> ; pour{" "}
                  <Math tex="\alpha=\dfrac13" />, <Math tex="\alpha-1=-\dfrac23" />.
                </p>
                <p>
                  Écrivons <Math tex="\dfrac{\alpha}{\alpha-1} = 1+\dfrac{1}{\alpha-1}" />. La fonction{" "}
                  <Math tex="t \mapsto \dfrac1t" /> est décroissante sur les négatifs, et{" "}
                  <Math tex="-\dfrac{13}{15} \le \alpha-1 \le -\dfrac23" />, donc :
                </p>
                <p>
                  <Math tex="\dfrac{1}{-2/3} \le \dfrac{1}{\alpha-1} \le \dfrac{1}{-13/15}" />, soit{" "}
                  <Math tex="-\dfrac32 \le \dfrac{1}{\alpha-1} \le -\dfrac{15}{13}" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="1-\dfrac32 \le \dfrac{\alpha}{\alpha-1} \le 1-\dfrac{15}{13}" />,
                  c&apos;est-à-dire <Math tex="-\dfrac12 \le \dfrac{\alpha}{\alpha-1} \le -\dfrac{2}{13}" /> (on
                  vérifie directement : pour <Math tex="\alpha=\frac{2}{15}" />, le quotient vaut{" "}
                  <Math tex="-\frac{2}{13}" /> ; pour <Math tex="\alpha=\frac13" />, il vaut <Math tex="-\frac12" />
                  ).
                </p>
                <p>
                  <strong>2)</strong> <Math tex="\left|\dfrac{x-1}{\alpha}\right|<\dfrac{1}{10} \iff |x-1| < \dfrac{\alpha}{10}" />{" "}
                  (car <Math tex="\alpha>0" />).
                </p>
                <p>
                  Or, d&apos;après le 1), <Math tex="\alpha \le \dfrac13" />, donc <Math tex="\dfrac{\alpha}{10} \le \dfrac{1}{30}" />
                  .
                </p>
                <p>
                  D&apos;où <Math tex="|x-1| < \dfrac{\alpha}{10} \le \dfrac{1}{30}" />, donc{" "}
                  <Math tex="|x-1| < \dfrac{1}{30}" />, c&apos;est-à-dire <Math tex="-\dfrac{1}{30} < x-1 < \dfrac{1}{30}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="\dfrac{29}{30} < x < \dfrac{31}{30}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 14 */}
          <ExerciseCard
            id="14"
            index={14}
            title="Un encadrement de √5 par étapes"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="x \in [3,+\infty[" />. On pose <Math tex="A = \dfrac{\sqrt x}{\sqrt{x-1}}" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Montrer que <Math tex="A-1 = \dfrac{1}{\sqrt{x-1}\left(\sqrt x+\sqrt{x-1}\right)}" />.
                  </li>
                  <li>
                    a) Établir que <Math tex="2\sqrt{x-1} < \sqrt x+\sqrt{x-1} < 2\sqrt x" />.
                    <br />
                    b) Déduire que <Math tex="\dfrac{1}{2\sqrt x\sqrt{x-1}} < A-1 < \dfrac{1}{2(x-1)}" />.
                  </li>
                  <li>
                    a) Montrer que <Math tex="\dfrac{1}{x-1} \le \dfrac{3}{2x}" /> et{" "}
                    <Math tex="\dfrac1x \le \dfrac{1}{\sqrt x\sqrt{x-1}}" />.
                    <br />
                    b) Déduire que <Math tex="1+\dfrac{1}{2x} < A < 1+\dfrac{3}{4x}" />.
                  </li>
                  <li>
                    Déduire que <Math tex="\dfrac94" /> est une valeur approchée de <Math tex="\sqrt5" /> avec la
                    précision <Math tex="5\times10^{-2}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="A-1 = \dfrac{\sqrt x-\sqrt{x-1}}{\sqrt{x-1}}" />. En multipliant
                  numérateur et dénominateur par <Math tex="\sqrt x+\sqrt{x-1}" /> :
                </p>
                <p>
                  <Math tex="\sqrt x-\sqrt{x-1} = \dfrac{(\sqrt x-\sqrt{x-1})(\sqrt x+\sqrt{x-1})}{\sqrt x+\sqrt{x-1}} = \dfrac{x-(x-1)}{\sqrt x+\sqrt{x-1}} = \dfrac{1}{\sqrt x+\sqrt{x-1}}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="A-1 = \dfrac{1}{\sqrt{x-1}\left(\sqrt x+\sqrt{x-1}\right)}" />.
                </p>
                <p>
                  <strong>2a)</strong> Comme <Math tex="x>x-1\ge0" />, <Math tex="\sqrt x > \sqrt{x-1}" />. Donc{" "}
                  <Math tex="\sqrt x+\sqrt{x-1} > \sqrt{x-1}+\sqrt{x-1} = 2\sqrt{x-1}" /> et{" "}
                  <Math tex="\sqrt x+\sqrt{x-1} < \sqrt x+\sqrt x = 2\sqrt x" />.
                </p>
                <p>
                  <strong>2b)</strong> En multipliant l&apos;encadrement du 2a) par <Math tex="\sqrt{x-1}>0" /> :
                </p>
                <p>
                  <Math tex="2(x-1) < \sqrt{x-1}\left(\sqrt x+\sqrt{x-1}\right) < 2\sqrt x\sqrt{x-1}" />.
                </p>
                <p className="font-semibold text-green-700">
                  En passant aux inverses (tous positifs, l&apos;ordre s&apos;inverse) :{" "}
                  <Math tex="\dfrac{1}{2\sqrt x\sqrt{x-1}} < A-1 < \dfrac{1}{2(x-1)}" />.
                </p>
                <p>
                  <strong>3a)</strong> Pour <Math tex="x\ge3" /> : <Math tex="\dfrac{1}{x-1}\le\dfrac{3}{2x} \iff 2x \le 3(x-1) \iff x \ge 3" />
                  , ce qui est vrai.
                </p>
                <p>
                  <Math tex="\dfrac1x \le \dfrac{1}{\sqrt x\sqrt{x-1}} \iff \sqrt x\sqrt{x-1} \le x \iff x(x-1)\le x^2 \iff -x\le0" />
                  , ce qui est vrai pour <Math tex="x\ge3>0" />.
                </p>
                <p>
                  <strong>3b)</strong> D&apos;après 2b) et 3a) : <Math tex="A-1 < \dfrac{1}{2(x-1)} \le \dfrac{3}{4x}" />
                  , donc <Math tex="A < 1+\dfrac{3}{4x}" />.
                </p>
                <p className="font-semibold text-green-700">
                  De même, <Math tex="A-1 > \dfrac{1}{2\sqrt x\sqrt{x-1}} \ge \dfrac{1}{2x}" />, donc{" "}
                  <Math tex="A > 1+\dfrac{1}{2x}" />. D&apos;où <Math tex="1+\dfrac{1}{2x} < A < 1+\dfrac{3}{4x}" />.
                </p>
                <p>
                  <strong>4)</strong> Appliquons le 3b) avec <Math tex="x=5" /> (bien dans <Math tex="[3,+\infty[" />
                  ) : <Math tex="A = \dfrac{\sqrt5}{\sqrt4} = \dfrac{\sqrt5}{2}" />.
                </p>
                <p>
                  <Math tex="1+\dfrac{1}{10} < \dfrac{\sqrt5}{2} < 1+\dfrac{3}{20}" />, soit{" "}
                  <Math tex="\dfrac{11}{10} < \dfrac{\sqrt5}{2} < \dfrac{23}{20}" />. En multipliant par 2 :{" "}
                  <Math tex="2{,}2 < \sqrt5 < 2{,}3" />.
                </p>
                <p>
                  Le centre de cet encadrement est <Math tex="\dfrac{2{,}2+2{,}3}{2} = 2{,}25 = \dfrac94" />, et sa
                  demi-amplitude est <Math tex="\dfrac{2{,}3-2{,}2}{2} = 0{,}05 = 5\times10^{-2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="\left|\sqrt5-\dfrac94\right| \le 5\times10^{-2}" /> : <Math tex="\dfrac94" />{" "}
                  est bien une valeur approchée de <Math tex="\sqrt5" /> à la précision <Math tex="5\times10^{-2}" />
                  .
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
