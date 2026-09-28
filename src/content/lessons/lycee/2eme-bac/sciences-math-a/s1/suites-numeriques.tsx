import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  FormulaBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Suites numériques · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet et rigoureux : monotonie et majoration, raisonnement par récurrence, limite d'une suite, opérations et théorèmes de comparaison, théorème de la limite monotone, suites adjacentes, suites récurrentes u(n+1) = f(u(n)) et convergence par contraction. 12 exercices intégralement corrigés. 2ème Bac Sciences Mathématiques, semestre 1.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "Suites numériques",
  heroSubtitle:
    "Monotonie, récurrence, limites, théorème de la limite monotone, suites adjacentes et suites récurrentes : le chapitre qui prépare directement l'étude rigoureuse de la convergence.",
  footerNote: "Suites numériques · Mathématiques, 2ème Bac Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-generalites", label: "Généralités" },
    { id: "cours-limites", label: "Limite d'une suite" },
    { id: "cours-convergence", label: "Convergence, suites adjacentes" },
    { id: "exercices", label: "Exercices" },
  ],
};

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

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <div className="text-foreground">{children}</div>
    </div>
  );
}

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
          { value: "12", label: "exercices corrigés" },
          { value: "3", label: "blocs de cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#cours-generalites" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <line x1="30" y1="10" x2="30" y2="190" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <line x1="30" y1="60" x2="210" y2="60" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
              const x = 45 + i * 20;
              const y = 60 + 100 / (i + 1);
              return <circle key={i} cx={x} cy={y} r="4" fill="#fb923c" />;
            })}
          </svg>
        }
      />

      {/* ===================== I. GÉNÉRALITÉS ===================== */}
      <LessonSection
        id="cours-generalites"
        kicker="01 · Les bases"
        title="Monotonie, majoration, raisonnement par récurrence"
        tone="light"
        description="Le vocabulaire fondamental des suites, et l'outil de démonstration indispensable pour toute suite définie par récurrence."
      >
        <CourseBlock numeral="I" title="Monotonie et suites bornées">
          <DefBox label="Définitions">
            Soit <Math tex="(u_n)_{n\ge n_0}" /> une suite réelle.
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="(u_n)" /> est <strong>croissante</strong> si, pour tout <Math tex="n" />,{" "}
                <Math tex="u_{n+1}\ge u_n" /> ; <strong>strictement croissante</strong> si{" "}
                <Math tex="u_{n+1}>u_n" />.
              </li>
              <li>
                <Math tex="(u_n)" /> est <strong>décroissante</strong> si, pour tout <Math tex="n" />,{" "}
                <Math tex="u_{n+1}\le u_n" /> ; <strong>strictement décroissante</strong> si{" "}
                <Math tex="u_{n+1}<u_n" />.
              </li>
              <li>
                <Math tex="(u_n)" /> est <strong>majorée</strong> s&apos;il existe <Math tex="M\in\mathbb R" /> tel
                que <Math tex="u_n\le M" /> pour tout <Math tex="n" /> ; <strong>minorée</strong> s&apos;il existe{" "}
                <Math tex="m\in\mathbb R" /> tel que <Math tex="u_n\ge m" /> pour tout <Math tex="n" />.
              </li>
              <li>
                <Math tex="(u_n)" /> est <strong>bornée</strong> si elle est majorée et minorée, c&apos;est-à-dire
                s&apos;il existe <Math tex="K\ge0" /> tel que <Math tex="|u_n|\le K" /> pour tout <Math tex="n" />.
              </li>
            </ul>
          </DefBox>
          <DefBox label="Méthode — étudier le sens de variation">
            On étudie le signe de <Math tex="u_{n+1}-u_n" /> (méthode générale), ou, si <Math tex="u_n>0" /> pour tout{" "}
            <Math tex="n" />, on compare <Math tex="\dfrac{u_{n+1}}{u_n}" /> à <Math tex="1" />.
          </DefBox>
          <Example title="Exemple résolu">
            <p>
              Soit <Math tex="u_n=\dfrac{n}{n+1}" />. Étudions sa monotonie.
            </p>
            <MathBlock tex="u_{n+1}-u_n=\dfrac{n+1}{n+2}-\dfrac{n}{n+1}=\dfrac{(n+1)^2-n(n+2)}{(n+1)(n+2)}=\dfrac{n^2+2n+1-n^2-2n}{(n+1)(n+2)}=\dfrac{1}{(n+1)(n+2)}" />
            <p className="font-semibold text-green-700">
              <Math tex="u_{n+1}-u_n>0" /> pour tout <Math tex="n\ge0" /> : la suite est strictement croissante. De
              plus <Math tex="u_n=1-\dfrac1{n+1}<1" /> : elle est majorée par 1.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="II" title="Raisonnement par récurrence">
          <Callout variant="success" title="Principe de récurrence">
            Soit <Math tex="P(n)" /> une propriété dépendant d&apos;un entier <Math tex="n\ge n_0" />. Si :
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Initialisation :</strong> <Math tex="P(n_0)" /> est vraie,
              </li>
              <li>
                <strong>Hérédité :</strong> pour tout <Math tex="n\ge n_0" />, <Math tex="P(n)" /> vraie{" "}
                <Math tex="\Rightarrow" /> <Math tex="P(n+1)" /> vraie,
              </li>
            </ul>
            alors <Math tex="P(n)" /> est vraie pour tout <Math tex="n\ge n_0" />.
          </Callout>
          <p className="text-sm text-foreground-muted">
            C&apos;est l&apos;outil <strong>indispensable</strong> pour établir qu&apos;une suite définie par
            récurrence reste dans un intervalle donné (stabilité), ou pour prouver une inégalité portant sur{" "}
            <Math tex="u_n" />.
          </p>
          <Example title="Exemple résolu — stabilité d'un intervalle">
            <p>
              Soit <Math tex="u_0=0" /> et <Math tex="u_{n+1}=\sqrt{u_n+2}" />. Montrons par récurrence que{" "}
              <Math tex="0\le u_n\le2" /> pour tout <Math tex="n" />.
            </p>
            <p>
              <strong>Initialisation :</strong> <Math tex="u_0=0\in[0,2]" />, vrai.
            </p>
            <p>
              <strong>Hérédité :</strong> supposons <Math tex="0\le u_n\le2" />. Alors{" "}
              <Math tex="2\le u_n+2\le4" />, donc <Math tex="\sqrt2\le\sqrt{u_n+2}\le2" />, c&apos;est-à-dire{" "}
              <Math tex="\sqrt2\le u_{n+1}\le2" />, donc en particulier <Math tex="0\le u_{n+1}\le2" />.
            </p>
            <p className="font-semibold text-green-700">
              Par récurrence, <Math tex="0\le u_n\le2" /> pour tout <Math tex="n\ge0" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. LIMITE D'UNE SUITE ===================== */}
      <LessonSection
        id="cours-limites"
        kicker="02 · Convergence"
        title="Limite d'une suite, opérations, comparaison"
        tone="muted"
        description="La définition rigoureuse de la convergence, et les règles de calcul héritées des limites de fonctions."
      >
        <CourseBlock numeral="III" title="Limite finie, limite infinie">
          <DefBox label="Définition (limite finie)">
            La suite <Math tex="(u_n)" /> <strong>converge</strong> vers <Math tex="\ell\in\mathbb R" /> si :
          </DefBox>
          <FormulaBlock tex="\forall\varepsilon>0,\ \exists\,N\in\mathbb N,\ \forall n\ge N:\quad |u_n-\ell|<\varepsilon" />
          <p className="text-sm text-foreground-muted">
            Autrement dit, <Math tex="u_n" /> se rapproche autant qu&apos;on veut de <Math tex="\ell" /> à partir
            d&apos;un certain rang. On note <Math tex="\displaystyle\lim_{n\to+\infty}u_n=\ell" />. Une suite qui ne
            converge pas est dite <strong>divergente</strong> (limite infinie, ou pas de limite du tout).
          </p>
          <Callout variant="success" title="Propriété — unicité de la limite">
            Si une suite converge, sa limite est <strong>unique</strong>.
          </Callout>
          <DefBox label="Limite infinie">
            <Math tex="\displaystyle\lim_{n\to+\infty}u_n=+\infty" /> si, pour tout <Math tex="A>0" />, il existe{" "}
            <Math tex="N" /> tel que pour tout <Math tex="n\ge N" />, <Math tex="u_n>A" /> (définition analogue pour{" "}
            <Math tex="-\infty" />).
          </DefBox>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Opérations et théorèmes de comparaison">
          <Callout variant="success" title="Opérations sur les limites">
            Les mêmes règles que pour les fonctions s&apos;appliquent (somme, produit, quotient des limites), avec les
            mêmes formes indéterminées <Math tex="\dfrac\infty\infty" />, <Math tex="\infty-\infty" />,{" "}
            <Math tex="0\times\infty" />, <Math tex="\dfrac00" />.
          </Callout>
          <Callout variant="success" title="Théorèmes de comparaison">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Si <Math tex="u_n\le v_n" /> à partir d&apos;un certain rang et{" "}
                <Math tex="\displaystyle\lim_{n\to+\infty}u_n=+\infty" />, alors{" "}
                <Math tex="\displaystyle\lim_{n\to+\infty}v_n=+\infty" />.
              </li>
              <li>
                Si <Math tex="u_n\le v_n" /> à partir d&apos;un certain rang, et si <Math tex="(u_n)" /> et{" "}
                <Math tex="(v_n)" /> convergent, alors <Math tex="\displaystyle\lim u_n\le\lim v_n" />.
              </li>
              <li>
                <strong>Théorème des gendarmes :</strong> si <Math tex="v_n\le u_n\le w_n" /> à partir d&apos;un
                certain rang, et si <Math tex="(v_n)" /> et <Math tex="(w_n)" /> convergent vers la même limite{" "}
                <Math tex="\ell" />, alors <Math tex="(u_n)" /> converge et <Math tex="\displaystyle\lim u_n=\ell" />.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu">
            <p>
              Soit <Math tex="u_n=\dfrac{(-1)^n}{n}" /> pour <Math tex="n\ge1" />. Pour tout <Math tex="n\ge1" /> :{" "}
              <Math tex="-\dfrac1n\le u_n\le\dfrac1n" />, et <Math tex="\displaystyle\lim_{n\to+\infty}\left(\pm\dfrac1n\right)=0" />
              .
            </p>
            <p className="font-semibold text-green-700">
              Par le théorème des gendarmes, <Math tex="\displaystyle\lim_{n\to+\infty}u_n=0" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. CONVERGENCE, SUITES ADJACENTES, SUITES RÉCURRENTES ===================== */}
      <LessonSection
        id="cours-convergence"
        kicker="03 · Les grands théorèmes"
        title="Théorème de la limite monotone, suites adjacentes, suites récurrentes"
        tone="light"
        description="Les théorèmes qui permettent de prouver l'existence d'une limite — sans toujours devoir la calculer directement."
      >
        <CourseBlock numeral="V" title="Théorème de la limite monotone">
          <Callout variant="success" title="Théorème (admis)">
            <ul className="list-disc space-y-2 pl-5">
              <li>Toute suite <strong>croissante et majorée</strong> converge (vers une limite finie).</li>
              <li>Toute suite <strong>décroissante et minorée</strong> converge (vers une limite finie).</li>
              <li>Toute suite <strong>croissante non majorée</strong> tend vers <Math tex="+\infty" />.</li>
              <li>Toute suite <strong>décroissante non minorée</strong> tend vers <Math tex="-\infty" />.</li>
            </ul>
          </Callout>
          <Callout variant="warning" title="Attention — ce théorème donne l'existence, pas toujours la valeur">
            Le théorème garantit que la limite <strong>existe</strong>, mais ne dit pas combien elle vaut. On calcule
            ensuite la limite par d&apos;autres moyens (souvent, si <Math tex="u_{n+1}=f(u_n)" /> avec <Math tex="f" />{" "}
            continue, la limite <Math tex="\ell" /> vérifie <Math tex="f(\ell)=\ell" />, voir plus bas).
          </Callout>
          <Example title="Exemple résolu">
            <p>
              Soit <Math tex="u_n=\displaystyle\sum_{k=1}^{n}\dfrac1{k^2}=1+\dfrac1{4}+\dfrac1{9}+\cdots+\dfrac1{n^2}" />
              . <Math tex="u_{n+1}-u_n=\dfrac1{(n+1)^2}>0" /> : <Math tex="(u_n)" /> est strictement croissante.
            </p>
            <p>
              De plus, pour <Math tex="k\ge2" />, <Math tex="\dfrac1{k^2}\le\dfrac1{k(k-1)}=\dfrac1{k-1}-\dfrac1k" />,
              donc par somme télescopique <Math tex="u_n\le1+\left(1-\dfrac1n\right)<2" /> : <Math tex="(u_n)" /> est
              majorée par 2.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="(u_n)" /> est croissante et majorée : elle converge (sa limite est en fait{" "}
              <Math tex="\pi^2/6" />, résultat hors-programme).
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Suites adjacentes">
          <DefBox label="Définition">
            Deux suites <Math tex="(u_n)" /> et <Math tex="(v_n)" /> sont dites <strong>adjacentes</strong> si :
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><Math tex="(u_n)" /> est croissante,</li>
              <li><Math tex="(v_n)" /> est décroissante,</li>
              <li><Math tex="\displaystyle\lim_{n\to+\infty}(v_n-u_n)=0" />.</li>
            </ul>
          </DefBox>
          <Callout variant="success" title="Théorème (admis)">
            Si <Math tex="(u_n)" /> et <Math tex="(v_n)" /> sont adjacentes, alors elles convergent toutes les deux, et{" "}
            vers la <strong>même limite</strong> <Math tex="\ell" />, avec de plus{" "}
            <Math tex="u_n\le\ell\le v_n" /> pour tout <Math tex="n" />.
          </Callout>
          <Example title="Exemple résolu">
            <p>
              Soient <Math tex="u_n=\displaystyle\sum_{k=0}^{n}\dfrac1{k!}" /> et{" "}
              <Math tex="v_n=u_n+\dfrac1{n\cdot n!}" /> pour <Math tex="n\ge1" />.
            </p>
            <p>
              <Math tex="u_{n+1}-u_n=\dfrac1{(n+1)!}>0" /> : <Math tex="(u_n)" /> croissante. On admet ici que{" "}
              <Math tex="(v_n)" /> est décroissante (calcul similaire), et :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="v_n-u_n=\dfrac1{n\cdot n!}\xrightarrow[n\to+\infty]{}0" /> : les deux suites sont adjacentes,
              donc convergent vers la même limite (qui est <Math tex="e" />, hors-programme).
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Suites récurrentes u(n+1) = f(u(n))">
          <DefBox label="Méthode générale d'étude">
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                <strong>Stabilité :</strong> montrer par récurrence que <Math tex="u_n\in I" /> pour tout{" "}
                <Math tex="n" />, où <Math tex="I" /> est un intervalle tel que <Math tex="f(I)\subset I" />.
              </li>
              <li>
                <strong>Monotonie :</strong> étudier le signe de <Math tex="f(x)-x" /> sur <Math tex="I" /> (si{" "}
                <Math tex="f" /> est croissante), ou comparer directement <Math tex="u_{n+1}" /> et <Math tex="u_n" />.
              </li>
              <li>
                <strong>Convergence :</strong> appliquer le théorème de la limite monotone (suite monotone et bornée).
              </li>
              <li>
                <strong>Valeur de la limite :</strong> si <Math tex="f" /> est continue sur <Math tex="I" /> et{" "}
                <Math tex="u_n\to\ell\in I" />, en passant à la limite dans <Math tex="u_{n+1}=f(u_n)" /> on obtient{" "}
                <Math tex="\ell=f(\ell)" /> : <Math tex="\ell" /> est un <strong>point fixe</strong> de{" "}
                <Math tex="f" />.
              </li>
            </ol>
          </DefBox>
          <Callout variant="success" title="Théorème — le cas où f est croissante">
            Si <Math tex="f" /> est croissante sur un intervalle <Math tex="I" /> stable par <Math tex="f" />, alors{" "}
            la suite <Math tex="(u_n)" /> définie par <Math tex="u_{n+1}=f(u_n)" />, <Math tex="u_0\in I" />, est{" "}
            <strong>monotone</strong> : croissante si <Math tex="u_1\ge u_0" />, décroissante si{" "}
            <Math tex="u_1\le u_0" />.
          </Callout>
          <Callout variant="info" title="Rappel — le principe de contraction (lien avec le TAF)">
            Si de plus <Math tex="f" /> est <Math tex="k" />-lipschitzienne sur <Math tex="I" /> avec{" "}
            <Math tex="0\le k<1" />, et <Math tex="\ell\in I" /> le point fixe de <Math tex="f" />, alors{" "}
            <Math tex="|u_n-\ell|\le k^n|u_0-\ell|\to0" /> : on obtient directement la convergence <strong>et</strong>{" "}
            une vitesse de convergence (voir le chapitre « Théorème des accroissements finis »).
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Suites arithmético-géométriques">
          <DefBox label="Définition et méthode">
            Une suite arithmético-géométrique vérifie <Math tex="u_{n+1}=au_n+b" /> avec <Math tex="a\neq1" />. On
            détermine le point fixe <Math tex="\ell" /> de <Math tex="x\mapsto ax+b" />, c&apos;est-à-dire{" "}
            <Math tex="\ell=\dfrac{b}{1-a}" />, puis on pose <Math tex="v_n=u_n-\ell" />.
          </DefBox>
          <MathBlock tex="v_{n+1}=u_{n+1}-\ell=au_n+b-\ell=a(u_n-\ell)+(a\ell+b-\ell)=a\,v_n" />
          <p className="text-sm text-foreground-muted">
            car <Math tex="a\ell+b-\ell=0" /> (par définition de <Math tex="\ell" />). Donc <Math tex="(v_n)" /> est{" "}
            <strong>géométrique</strong> de raison <Math tex="a" /> : <Math tex="v_n=a^n v_0" />, d&apos;où :
          </p>
          <FormulaBlock tex="u_n=\ell+a^n(u_0-\ell)" />
          <p className="text-sm text-foreground-muted">
            Si <Math tex="|a|<1" />, <Math tex="a^n\to0" /> et <Math tex="u_n\to\ell" />.
          </p>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Suites numériques"
        tone="muted"
        description="12 exercices corrigés en détail, niveau Sciences Mathématiques. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={12} celebrationTitle="Bravo, les 12 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les suites numériques.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Monotonie par étude du signe de u(n+1) − u(n)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="u_n=\dfrac{2n-1}{n+3}" /> pour <Math tex="n\ge0" />.
                </p>
                <p>Étudier le sens de variation de <Math tex="(u_n)" />.</p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <MathBlock tex="u_{n+1}-u_n=\dfrac{2n+1}{n+4}-\dfrac{2n-1}{n+3}=\dfrac{(2n+1)(n+3)-(2n-1)(n+4)}{(n+4)(n+3)}" />
                <p>Développons le numérateur :</p>
                <MathBlock tex="(2n+1)(n+3)=2n^2+7n+3 \qquad (2n-1)(n+4)=2n^2+7n-4" />
                <p>
                  Donc le numérateur vaut <Math tex="(2n^2+7n+3)-(2n^2+7n-4)=7" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u_{n+1}-u_n=\dfrac{7}{(n+4)(n+3)}>0" /> pour tout <Math tex="n\ge0" /> : la suite est
                  strictement croissante.
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Monotonie par comparaison de rapport (suite à termes positifs)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="u_n=\dfrac{2^n}{n!}" /> pour <Math tex="n\ge1" />.
                </p>
                <p>
                  Montrer que <Math tex="(u_n)" /> est décroissante à partir d&apos;un certain rang.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Tous les termes sont strictement positifs. Calculons le rapport :
                </p>
                <MathBlock tex="\dfrac{u_{n+1}}{u_n}=\dfrac{2^{n+1}}{(n+1)!}\times\dfrac{n!}{2^n}=\dfrac{2}{n+1}" />
                <p>
                  <Math tex="\dfrac{2}{n+1}\le1 \iff n+1\ge2 \iff n\ge1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Pour tout <Math tex="n\ge1" />, <Math tex="\dfrac{u_{n+1}}{u_n}\le1" />, donc{" "}
                  <Math tex="u_{n+1}\le u_n" /> : la suite est décroissante dès <Math tex="n=1" /> (donc sur tout son
                  domaine ici).
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Récurrence : stabilité d'un intervalle et majoration"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="u_0=3" /> et <Math tex="u_{n+1}=\dfrac12 u_n+2" />.
                </p>
                <p>
                  Montrer par récurrence que pour tout <Math tex="n\in\mathbb N" />, <Math tex="2\le u_n\le3" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Montrons par récurrence la propriété <Math tex="P(n):\ 2\le u_n\le3" />.
                </p>
                <p>
                  <strong>Initialisation :</strong> <Math tex="u_0=3" />, donc <Math tex="2\le u_0\le3" /> : vrai.
                </p>
                <p>
                  <strong>Hérédité :</strong> supposons <Math tex="2\le u_n\le3" />. Alors{" "}
                  <Math tex="1\le\dfrac12u_n\le\dfrac32" />, donc en ajoutant 2 :{" "}
                  <Math tex="3\le u_{n+1}\le\dfrac72" />, donc en particulier <Math tex="2\le u_{n+1}\le3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Par récurrence, <Math tex="2\le u_n\le3" /> pour tout <Math tex="n\in\mathbb N" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Suite arithmético-géométrique — formule explicite et limite"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="u_0=3" /> et <Math tex="u_{n+1}=\dfrac12 u_n+2" /> (suite de l&apos;exercice
                  précédent).
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que la suite <Math tex="v_n=u_n-4" /> est géométrique, et préciser sa raison et son
                    premier terme.
                  </li>
                  <li>
                    En déduire <Math tex="u_n" /> en fonction de <Math tex="n" />, puis{" "}
                    <Math tex="\displaystyle\lim_{n\to+\infty}u_n" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Le point fixe de <Math tex="x\mapsto\dfrac12x+2" /> est <Math tex="\ell" />{" "}
                  tel que <Math tex="\ell=\dfrac12\ell+2\iff\dfrac12\ell=2\iff\ell=4" />.
                </p>
                <MathBlock tex="v_{n+1}=u_{n+1}-4=\dfrac12u_n+2-4=\dfrac12u_n-2=\dfrac12(u_n-4)=\dfrac12v_n" />
                <p className="font-semibold text-green-700">
                  <Math tex="(v_n)" /> est géométrique de raison <Math tex="\dfrac12" />, de premier terme{" "}
                  <Math tex="v_0=u_0-4=-1" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="v_n=-\left(\dfrac12\right)^n" />, donc :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u_n=4-\left(\dfrac12\right)^n" />, et comme <Math tex="\left(\dfrac12\right)^n\to0" />,{" "}
                  <Math tex="\displaystyle\lim_{n\to+\infty}u_n=4" />.
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Théorème des gendarmes pour une suite"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="u_n=\dfrac{\sqrt{n}\sin(n)+n}{n+1}" /> pour <Math tex="n\ge1" />.
                </p>
                <p>
                  Calculer <Math tex="\displaystyle\lim_{n\to+\infty}u_n" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Pour tout <Math tex="n\ge1" />, <Math tex="-\sqrt n\le\sqrt n\sin(n)\le\sqrt n" />, donc en ajoutant{" "}
                  <Math tex="n" /> puis en divisant par <Math tex="n+1>0" /> :
                </p>
                <MathBlock tex="\dfrac{n-\sqrt n}{n+1}\le u_n\le\dfrac{n+\sqrt n}{n+1}" />
                <p>
                  Or <Math tex="\displaystyle\lim_{n\to+\infty}\dfrac{n-\sqrt n}{n+1}=\lim_{n\to+\infty}\dfrac{n}{n}=1" />{" "}
                  et de même <Math tex="\displaystyle\lim_{n\to+\infty}\dfrac{n+\sqrt n}{n+1}=1" /> (dans les deux cas,
                  on divise numérateur et dénominateur par <Math tex="n" />, et <Math tex="\sqrt n/n\to0" />).
                </p>
                <p className="font-semibold text-green-700">
                  Par le théorème des gendarmes, <Math tex="\displaystyle\lim_{n\to+\infty}u_n=1" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Convergence par le théorème de la limite monotone"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="u_n=\displaystyle\sum_{k=1}^{n}\dfrac1{2^k}=\dfrac12+\dfrac14+\cdots+\dfrac1{2^n}" />
                  .
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Montrer que <Math tex="(u_n)" /> est croissante.</li>
                  <li>
                    Montrer que <Math tex="u_n=1-\dfrac1{2^n}" /> pour tout <Math tex="n\ge1" /> (récurrence ou somme
                    géométrique), en déduire qu&apos;elle est majorée, puis qu&apos;elle converge, et calculer sa
                    limite.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="u_{n+1}-u_n=\dfrac1{2^{n+1}}>0" /> : <Math tex="(u_n)" /> est
                  strictement croissante.
                </p>
                <p>
                  <strong>2)</strong> C&apos;est la somme des <Math tex="n" /> premiers termes d&apos;une suite
                  géométrique de raison <Math tex="\dfrac12" /> et de premier terme <Math tex="\dfrac12" /> :
                </p>
                <MathBlock tex="u_n=\dfrac12\times\dfrac{1-\left(\frac12\right)^n}{1-\frac12}=1-\left(\dfrac12\right)^n" />
                <p className="font-semibold text-green-700">
                  Pour tout <Math tex="n" />, <Math tex="u_n=1-\left(\dfrac12\right)^n<1" /> : la suite est majorée par
                  1, donc, étant croissante et majorée, elle converge. Comme{" "}
                  <Math tex="\left(\dfrac12\right)^n\to0" />, <Math tex="\displaystyle\lim_{n\to+\infty}u_n=1" />.
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Suites adjacentes"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient <Math tex="u_n=\displaystyle\sum_{k=1}^{n}\dfrac1{k^2}" /> et{" "}
                  <Math tex="v_n=u_n+\dfrac1n" /> pour <Math tex="n\ge1" />.
                </p>
                <p>
                  Sachant que <Math tex="(u_n)" /> est croissante (voir le cours) montrer que <Math tex="(u_n)" /> et{" "}
                  <Math tex="(v_n)" /> sont adjacentes.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="(u_n)" /> est croissante (donné). Étudions <Math tex="(v_n)" /> :
                </p>
                <MathBlock tex="v_{n+1}-v_n=\left(u_{n+1}-u_n\right)+\left(\dfrac1{n+1}-\dfrac1n\right)=\dfrac1{(n+1)^2}-\dfrac1{n(n+1)}" />
                <p>On met au même dénominateur :</p>
                <MathBlock tex="v_{n+1}-v_n=\dfrac{n-(n+1)}{n(n+1)^2}=\dfrac{-1}{n(n+1)^2}<0" />
                <p>
                  Donc <Math tex="(v_n)" /> est strictement décroissante.
                </p>
                <p className="font-semibold text-green-700">
                  Enfin <Math tex="v_n-u_n=\dfrac1n\xrightarrow[n\to+\infty]{}0" />. Les trois conditions sont
                  vérifiées : <Math tex="(u_n)" /> et <Math tex="(v_n)" /> sont adjacentes, donc convergent vers la
                  même limite.
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Suite récurrente — étude complète avec f croissante"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{2x+3}{x+2}" /> et <Math tex="(u_n)" /> définie par <Math tex="u_0=0" />{" "}
                  et <Math tex="u_{n+1}=f(u_n)" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que pour tout <Math tex="n" />, <Math tex="u_n\in[0,\sqrt3]" />.
                  </li>
                  <li>
                    Étudier le signe de <Math tex="f(x)-x" /> sur <Math tex="[0,\sqrt3]" />, et en déduire le sens de
                    variation de <Math tex="(u_n)" />.
                  </li>
                  <li>
                    En déduire que <Math tex="(u_n)" /> converge, et calculer sa limite.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Par récurrence. <Math tex="u_0=0\in[0,\sqrt3]" />. Supposons{" "}
                  <Math tex="u_n\in[0,\sqrt3]" />. La fonction <Math tex="f" /> est croissante sur{" "}
                  <Math tex="[0,\sqrt3]" /> (car <Math tex="f'(x)=\dfrac{2(x+2)-(2x+3)}{(x+2)^2}=\dfrac1{(x+2)^2}>0" />
                  ), donc <Math tex="f(0)\le f(u_n)\le f(\sqrt3)" />.
                </p>
                <p>
                  <Math tex="f(0)=\dfrac32" /> et <Math tex="f(\sqrt3)=\dfrac{2\sqrt3+3}{\sqrt3+2}" />. En rationalisant
                  : <Math tex="f(\sqrt3)=\dfrac{(2\sqrt3+3)(\sqrt3-2)}{(\sqrt3+2)(\sqrt3-2)}=\dfrac{2\times3-4\sqrt3+3\sqrt3-6}{3-4}=\dfrac{-\sqrt3}{-1}=\sqrt3" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="u_{n+1}=f(u_n)\in\left[\dfrac32,\sqrt3\right]\subset[0,\sqrt3]" /> : par récurrence,{" "}
                  <Math tex="u_n\in[0,\sqrt3]" /> pour tout <Math tex="n" />.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="f(x)-x=\dfrac{2x+3}{x+2}-x=\dfrac{2x+3-x(x+2)}{x+2}=\dfrac{-x^2+3}{x+2}=\dfrac{3-x^2}{x+2}" />
                  .
                </p>
                <p>
                  Sur <Math tex="[0,\sqrt3]" />, <Math tex="x+2>0" /> et <Math tex="3-x^2\ge0" /> (car{" "}
                  <Math tex="x\le\sqrt3" />), donc <Math tex="f(x)-x\ge0" />, c&apos;est-à-dire{" "}
                  <Math tex="f(x)\ge x" /> sur <Math tex="[0,\sqrt3]" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="u_{n+1}=f(u_n)\ge u_n" /> pour tout <Math tex="n" /> : <Math tex="(u_n)" /> est
                  croissante.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="(u_n)" /> est croissante et majorée par <Math tex="\sqrt3" /> : elle
                  converge vers une limite <Math tex="\ell\in[0,\sqrt3]" />. Comme <Math tex="f" /> est continue et{" "}
                  <Math tex="u_{n+1}=f(u_n)" />, <Math tex="\ell" /> vérifie <Math tex="f(\ell)=\ell" />, c&apos;est-à-dire{" "}
                  <Math tex="3-\ell^2=0" /> (avec <Math tex="\ell+2\neq0" />), donc <Math tex="\ell=\pm\sqrt3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\ell\in[0,\sqrt3]" />, <Math tex="\ell=\sqrt3" /> : <Math tex="\displaystyle\lim_{n\to+\infty}u_n=\sqrt3" />
                  .
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Suite définie implicitement (existence par TVI, puis limite)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Pour <Math tex="n\ge1" />, on considère l&apos;équation <Math tex="x^n+x-1=0" /> d&apos;inconnue{" "}
                  <Math tex="x\in[0,1]" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que cette équation admet une unique solution <Math tex="u_n\in[0,1]" /> (on pourra étudier{" "}
                    <Math tex="g_n(x)=x^n+x-1" />).
                  </li>
                  <li>
                    Montrer que <Math tex="(u_n)" /> est croissante (on pourra comparer <Math tex="g_{n+1}(u_n)" />{" "}
                    à <Math tex="0" />), puis qu&apos;elle converge et déterminer sa limite.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="g_n" /> est continue sur <Math tex="[0,1]" /> (fonction polynôme),
                  et <Math tex="g_n'(x)=nx^{n-1}+1>0" /> pour <Math tex="x\ge0" /> (dès que <Math tex="n\ge1" />) :{" "}
                  <Math tex="g_n" /> est strictement croissante sur <Math tex="[0,1]" />.
                </p>
                <p>
                  <Math tex="g_n(0)=-1<0" /> et <Math tex="g_n(1)=1>0" /> : par le TVI (corollaire, car strictement
                  monotone), il existe une unique <Math tex="u_n\in[0,1]" /> telle que <Math tex="g_n(u_n)=0" />.
                </p>
                <p>
                  <strong>2)</strong> On a <Math tex="u_n^n+u_n=1" />, donc <Math tex="u_n^n=1-u_n" />. Évaluons{" "}
                  <Math tex="g_{n+1}" /> en <Math tex="u_n" /> :
                </p>
                <MathBlock tex="g_{n+1}(u_n)=u_n^{n+1}+u_n-1=u_n\cdot u_n^n+u_n-1=u_n(1-u_n)+u_n-1" />
                <MathBlock tex="=u_n-u_n^2+u_n-1=-u_n^2+2u_n-1=-(u_n-1)^2\le0" />
                <p>
                  Donc <Math tex="g_{n+1}(u_n)\le0=g_{n+1}(u_{n+1})" />. Comme <Math tex="g_{n+1}" /> est strictement
                  croissante sur <Math tex="[0,1]" />, l&apos;inégalité <Math tex="g_{n+1}(u_n)\le g_{n+1}(u_{n+1})" />{" "}
                  entraîne <Math tex="u_n\le u_{n+1}" />.
                </p>
                <p className="font-semibold text-green-700">
                  La suite <Math tex="(u_n)" /> est donc croissante. Étant majorée par 1, elle converge vers une
                  limite <Math tex="\ell\in[0,1]" />.
                </p>
                <p>
                  Si l&apos;on avait <Math tex="\ell<1" />, alors <Math tex="u_n\le\dfrac{\ell+1}2<1" /> à partir
                  d&apos;un certain rang, donc <Math tex="u_n^n\to0" /> ; or <Math tex="u_n^n=1-u_n\to1-\ell\neq0" />,
                  contradiction.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\ell=1" /> : <Math tex="\displaystyle\lim_{n\to+\infty}u_n=1" />.
                </p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Vitesse de convergence par contraction (lien avec le TAF)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac13\cos x" /> et <Math tex="(u_n)" /> définie par <Math tex="u_0=0" />,{" "}
                  <Math tex="u_{n+1}=f(u_n)" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="f\left(\left[-\dfrac13,\dfrac13\right]\right)\subset\left[-\dfrac13,\dfrac13\right]" />
                    , et que <Math tex="\left|f'(x)\right|\le\dfrac13" /> sur cet intervalle.
                  </li>
                  <li>
                    En admettant que <Math tex="f" /> possède un unique point fixe <Math tex="\ell\in\left[-\dfrac13,\dfrac13\right]" />
                    , montrer que <Math tex="|u_n-\ell|\le\dfrac13\left(\dfrac13\right)^n" />, et déterminer un rang{" "}
                    <Math tex="N" /> à partir duquel <Math tex="|u_N-\ell|\le10^{-3}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Pour tout <Math tex="x" />, <Math tex="|\cos x|\le1" />, donc{" "}
                  <Math tex="|f(x)|=\dfrac13|\cos x|\le\dfrac13" /> : <Math tex="f(x)\in\left[-\dfrac13,\dfrac13\right]" />
                  {" "}pour tout <Math tex="x\in\mathbb R" />, donc en particulier l&apos;intervalle est stable.
                </p>
                <p>
                  <Math tex="f'(x)=-\dfrac13\sin x" />, donc <Math tex="|f'(x)|=\dfrac13|\sin x|\le\dfrac13" /> pour
                  tout <Math tex="x" />.
                </p>
                <p>
                  <strong>2)</strong> D&apos;après l&apos;I.A.F. (car <Math tex="|f'|\le\dfrac13" /> sur
                  l&apos;intervalle stable), <Math tex="f" /> est <Math tex="\dfrac13" />-lipschitzienne, donc :
                </p>
                <MathBlock tex="|u_{n+1}-\ell|=|f(u_n)-f(\ell)|\le\dfrac13|u_n-\ell|" />
                <p>
                  Par récurrence, <Math tex="|u_n-\ell|\le\left(\dfrac13\right)^n|u_0-\ell|" />. Comme{" "}
                  <Math tex="u_0=0" /> et <Math tex="\ell\in\left[-\dfrac13,\dfrac13\right]" />,{" "}
                  <Math tex="|u_0-\ell|=|\ell|\le\dfrac13" />, donc :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="|u_n-\ell|\le\dfrac13\left(\dfrac13\right)^n=\left(\dfrac13\right)^{n+1}" />.
                </p>
                <p>
                  On veut <Math tex="\left(\dfrac13\right)^{n+1}\le10^{-3}" />. Comme{" "}
                  <Math tex="3^6=729" /> et <Math tex="3^7=2187" />, <Math tex="n+1=7" /> convient ({" "}
                  <Math tex="3^{-7}\approx0{,}00046<10^{-3}" />
                  ), donc <Math tex="N=6" />.
                </p>
                <p className="font-semibold text-green-700">
                  Dès <Math tex="n=6" />, <Math tex="|u_n-\ell|\le10^{-3}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Divergence vers +∞"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="u_0=1" /> et <Math tex="u_{n+1}=u_n+\sqrt{u_n}" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Montrer que pour tout <Math tex="n" />, <Math tex="u_n\ge1" />, puis que <Math tex="(u_n)" /> est croissante.</li>
                  <li>
                    En raisonnant par l&apos;absurde (si <Math tex="(u_n)" /> convergeait vers <Math tex="\ell" />),
                    montrer que <Math tex="(u_n)" /> ne peut pas converger, et conclure sur sa limite.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Par récurrence : <Math tex="u_0=1\ge1" />. Si <Math tex="u_n\ge1" />, alors{" "}
                  <Math tex="u_{n+1}=u_n+\sqrt{u_n}\ge1+1=2\ge1" />. Donc <Math tex="u_n\ge1" /> pour tout{" "}
                  <Math tex="n" />.
                </p>
                <p>
                  <Math tex="u_{n+1}-u_n=\sqrt{u_n}\ge1>0" /> (car <Math tex="u_n\ge1" />) : <Math tex="(u_n)" /> est
                  strictement croissante.
                </p>
                <p>
                  <strong>2)</strong> Supposons que <Math tex="(u_n)" /> converge vers <Math tex="\ell" />. Comme elle
                  est croissante et <Math tex="u_0=1" />, <Math tex="\ell\ge1" />. En passant à la limite dans{" "}
                  <Math tex="u_{n+1}=u_n+\sqrt{u_n}" /> (la fonction <Math tex="x\mapsto x+\sqrt x" /> est continue),
                  on obtiendrait <Math tex="\ell=\ell+\sqrt\ell" />, donc <Math tex="\sqrt\ell=0" />, c&apos;est-à-dire{" "}
                  <Math tex="\ell=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Mais <Math tex="\ell\ge1" /> et <Math tex="\ell=0" /> sont contradictoires : <Math tex="(u_n)" /> ne
                  converge pas. Étant croissante et non majorée (sinon elle convergerait, par le théorème de la limite
                  monotone), <Math tex="\displaystyle\lim_{n\to+\infty}u_n=+\infty" />.
                </p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="Problème de synthèse — étude complète d'une suite récurrente monotone"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{1}{2-x}" /> et <Math tex="(u_n)" /> définie par <Math tex="u_0=0" /> et{" "}
                  <Math tex="u_{n+1}=f(u_n)" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer par récurrence que <Math tex="u_n\in[0,1[" /> pour tout <Math tex="n" />.
                  </li>
                  <li>
                    Étudier les variations de <Math tex="f" /> sur <Math tex="[0,1[" />. En comparant{" "}
                    <Math tex="u_1" /> et <Math tex="u_0" />, montrer que <Math tex="(u_n)" /> est croissante.
                  </li>
                  <li>
                    On admet que <Math tex="(u_n)" /> converge vers un réel <Math tex="\ell\in[0,1]" />. Montrer que{" "}
                    <Math tex="\ell" /> vérifie <Math tex="\ell^2-2\ell+1=0" />, et en déduire <Math tex="\ell" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="u_0=0\in[0,1[" />. Supposons <Math tex="u_n\in[0,1[" /> : alors{" "}
                  <Math tex="2-u_n\in\,]1,2]" />, donc <Math tex="u_{n+1}=\dfrac1{2-u_n}\in\left[\dfrac12,1\right[\subset[0,1[" />
                  . Par récurrence, <Math tex="u_n\in[0,1[" /> pour tout <Math tex="n" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f'(x)=\dfrac1{(2-x)^2}>0" /> : <Math tex="f" /> est strictement
                  croissante sur <Math tex="[0,1[" />.
                </p>
                <p>
                  <Math tex="u_0=0" /> et <Math tex="u_1=f(0)=\dfrac12" />, donc <Math tex="u_1>u_0" />.
                </p>
                <p>
                  Montrons par récurrence que <Math tex="u_{n+1}\ge u_n" /> pour tout <Math tex="n" />. C&apos;est vrai
                  pour <Math tex="n=0" />. Supposons <Math tex="u_{n+1}\ge u_n" /> (avec <Math tex="u_n,u_{n+1}\in[0,1[" />
                  ) : comme <Math tex="f" /> est strictement croissante sur <Math tex="[0,1[" />, on obtient{" "}
                  <Math tex="f(u_{n+1})\ge f(u_n)" />, c&apos;est-à-dire <Math tex="u_{n+2}\ge u_{n+1}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Par récurrence, <Math tex="u_{n+1}\ge u_n" /> pour tout <Math tex="n" /> : <Math tex="(u_n)" /> est
                  croissante.
                </p>
                <p>
                  <strong>3)</strong> Par continuité de <Math tex="f" /> en <Math tex="\ell" /> et passage à la limite
                  dans <Math tex="u_{n+1}=\dfrac1{2-u_n}" /> : <Math tex="\ell=\dfrac1{2-\ell}" />, donc (avec{" "}
                  <Math tex="\ell\neq2" />) <Math tex="\ell(2-\ell)=1" />, c&apos;est-à-dire{" "}
                  <Math tex="2\ell-\ell^2=1" />, soit <Math tex="\ell^2-2\ell+1=0" />, c&apos;est-à-dire{" "}
                  <Math tex="(\ell-1)^2=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="\ell=1" /> : <Math tex="\displaystyle\lim_{n\to+\infty}u_n=1" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
