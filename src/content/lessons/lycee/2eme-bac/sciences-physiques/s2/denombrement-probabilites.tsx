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
  title: "Dénombrement et probabilités · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet de dénombrement (arrangements, permutations, combinaisons, binôme de Newton) et de probabilités (probabilité conditionnelle, indépendance, probabilités totales, loi binomiale, variable aléatoire) pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 2",
  heroTitle: "Dénombrement et probabilités",
  heroSubtitle:
    "Compter sans lister, puis mesurer la chance : du principe multiplicatif aux combinaisons, de l'équiprobabilité à la loi binomiale — tout l'arsenal du dernier grand chapitre de l'année.",
  footerNote:
    "Dénombrement et probabilités · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 2.",
  sections: [
    { id: "cours-principe", label: "Principe multiplicatif" },
    { id: "cours-arrangements", label: "Arrangements" },
    { id: "cours-combinaisons", label: "Combinaisons" },
    { id: "cours-probabilites", label: "Probabilités" },
    { id: "cours-conditionnelle", label: "Conditionnelle" },
    { id: "cours-variables", label: "Variable aléatoire" },
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

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "12", label: "exercices corrigés" },
          { value: "6", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-principe"
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
            <Math tex="\binom{n}{p}" />
          </div>
        }
      />

      {/* ===================== I. PRINCIPE MULTIPLICATIF ===================== */}
      <LessonSection
        id="cours-principe"
        kicker="01 · Compter sans tout lister"
        title="Cardinal et principe fondamental de dénombrement"
        tone="light"
        description="Avant de dénombrer des choix compliqués, il faut savoir combiner des choix simples : c'est le principe multiplicatif."
      >
        <CourseBlock numeral="I" title="Cardinal d'un ensemble fini">
          <Box title="Définition" tone="def">
            Un ensemble <Math tex="E" /> est <strong className="text-foreground">fini</strong> s&apos;il contient un nombre
            fini <Math tex="n\in\mathbb N" /> d&apos;éléments ; ce nombre s&apos;appelle le{" "}
            <strong>cardinal</strong> de <Math tex="E" />, noté <Math tex="\operatorname{card}(E)" />, avec{" "}
            <Math tex="\operatorname{card}(\varnothing)=0" />.
          </Box>
          <Callout variant="success" title="Propriétés du cardinal">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="E\cap F=\varnothing" /> : <Math tex="\operatorname{card}(E\cup F)=\operatorname{card}(E)+\operatorname{card}(F)" />.
              </li>
              <li>
                En général :{" "}
                <Math tex="\operatorname{card}(E\cup F)=\operatorname{card}(E)+\operatorname{card}(F)-\operatorname{card}(E\cap F)" />{" "}
                (formule de Poincaré).
              </li>
              <li>
                <Math tex="\operatorname{card}(E\times F)=\operatorname{card}(E)\times\operatorname{card}(F)" />.
              </li>
              <li>
                Si <Math tex="A\subset E" />, le complémentaire <Math tex="\overline A=E\setminus A" /> vérifie{" "}
                <Math tex="\operatorname{card}(\overline A)=\operatorname{card}(E)-\operatorname{card}(A)" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Principe fondamental de dénombrement (principe multiplicatif)">
          <Box title="Propriété" tone="prop">
            Si une expérience se décompose en <Math tex="p" /> choix successifs, le choix n°<Math tex="i" /> pouvant se
            faire de <Math tex="n_i" /> manières différentes (indépendamment des choix précédents), alors le nombre total
            de résultats possibles est :
          </Box>
          <MathBlock tex="n_1\times n_2\times\cdots\times n_p" />
          <Callout variant="success" title="Exemple">
            On lance un dé (6 faces) puis une pièce de monnaie (2 faces). Le nombre de résultats possibles est{" "}
            <Math tex="6\times2=12" />. On représente souvent ces choix successifs par un <strong>arbre des choix</strong>.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. ARRANGEMENTS ===================== */}
      <LessonSection
        id="cours-arrangements"
        kicker="02 · L'ordre compte"
        title="Arrangements avec et sans répétition, permutations"
        tone="muted"
        description="Tirer des éléments un par un, en tenant compte de l'ordre d'obtention, avec ou sans remise : trois formules à distinguer."
      >
        <CourseBlock numeral="III" title="Arrangement avec répétition">
          <Box title="Définition" tone="def">
            Choisir, dans l&apos;ordre, <Math tex="p" /> éléments parmi <Math tex="n" /> éléments, en autorisant les
            répétitions (modèle : tirages successifs <strong>avec remise</strong>), s&apos;appelle un{" "}
            <strong className="text-foreground">arrangement avec répétition</strong> de <Math tex="p" /> éléments parmi{" "}
            <Math tex="n" />.
          </Box>
          <Callout variant="success" title="Propriété">
            Le nombre d&apos;arrangements avec répétition de <Math tex="p" /> éléments parmi <Math tex="n" /> est :
          </Callout>
          <MathBlock tex="n^p" />
        </CourseBlock>

        <CourseBlock numeral="IV" title="Arrangement sans répétition et permutation">
          <Box title="Définition" tone="def">
            Choisir, dans l&apos;ordre, <Math tex="p" /> éléments <strong>distincts</strong> parmi <Math tex="n" />{" "}
            éléments (modèle : tirages successifs <strong>sans remise</strong>) s&apos;appelle un{" "}
            <strong className="text-foreground">arrangement sans répétition</strong> de <Math tex="p" /> éléments parmi{" "}
            <Math tex="n" />, noté <Math tex="A_n^p" />. Lorsque <Math tex="p=n" />, on parle de{" "}
            <strong>permutation</strong> des <Math tex="n" /> éléments.
          </Box>
          <Callout variant="success" title="Propriétés — factorielle">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="n!=n\times(n-1)\times\cdots\times2\times1" /> (« factorielle <Math tex="n" /> »), avec{" "}
                <Math tex="0!=1" />.
              </li>
              <li>
                <Math tex="A_n^p=n(n-1)(n-2)\cdots(n-p+1)=\dfrac{n!}{(n-p)!}" /> avec <Math tex="0\le p\le n" />.
              </li>
              <li>
                Le nombre de permutations de <Math tex="n" /> éléments est <Math tex="A_n^n=n!" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. COMBINAISONS ===================== */}
      <LessonSection
        id="cours-combinaisons"
        kicker="03 · Choisir sans ordonner"
        title="Combinaisons et formule du binôme de Newton"
        tone="light"
        description="Quand l'ordre n'a plus d'importance — un tirage simultané, une équipe, un sous-ensemble — c'est la combinaison qui compte."
      >
        <CourseBlock numeral="V" title="Combinaison de p éléments parmi n">
          <Box title="Définition" tone="def">
            Si <Math tex="E" /> est un ensemble fini avec <Math tex="\operatorname{card}(E)=n" />, toute partie de{" "}
            <Math tex="E" /> à <Math tex="p" /> éléments (<Math tex="0\le p\le n" />) s&apos;appelle une{" "}
            <strong className="text-foreground">combinaison</strong> de <Math tex="p" /> éléments parmi <Math tex="n" />{" "}
            (modèle : tirage <strong>simultané</strong>). Leur nombre se note <Math tex="\binom{n}{p}" /> (ou{" "}
            <Math tex="C_n^p" />).
          </Box>
          <MathBlock tex="\binom{n}{p}=\dfrac{n!}{p!\,(n-p)!}=\dfrac{A_n^p}{p!}" />
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\binom{n}{0}=\binom{n}{n}=1" /> ; <Math tex="\binom{n}{1}=n" />.
              </li>
              <li>
                <strong>Symétrie</strong> : <Math tex="\binom{n}{p}=\binom{n}{n-p}" />.
              </li>
              <li>
                <strong>Relation de Pascal</strong> : <Math tex="\binom{n+1}{p}=\binom{n}{p}+\binom{n}{p-1}" /> pour{" "}
                <Math tex="1\le p\le n" /> (base du triangle de Pascal).
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Formule du binôme de Newton">
          <Box title="Théorème" tone="prop">
            Pour tous réels <Math tex="a,b" /> et tout <Math tex="n\in\mathbb N^*" /> :
          </Box>
          <MathBlock tex="(a+b)^n=\sum_{i=0}^{n}\binom{n}{i}a^{n-i}b^{i}" />
          <Callout variant="warning" title="À retenir">
            Les coefficients <Math tex="\binom{n}{i}" /> sont exactement les nombres de la <Math tex="n" />-ième ligne du
            triangle de Pascal. Substituer <Math tex="a=b=1" /> donne <Math tex="\sum_{i=0}^n\binom{n}{i}=2^n" />, une
            façon rapide de vérifier un développement.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. PROBABILITÉS — UNIVERS ===================== */}
      <LessonSection
        id="cours-probabilites"
        kicker="04 · Mesurer la chance"
        title="Vocabulaire probabiliste et probabilité sur un univers fini"
        tone="muted"
        description="Une expérience aléatoire, un univers, un événement — puis une règle qui associe un nombre entre 0 et 1 à chaque événement."
      >
        <CourseBlock numeral="VII" title="Vocabulaire : expérience aléatoire, univers, événement">
          <Box title="Définitions" tone="def">
            Une <strong className="text-foreground">expérience aléatoire</strong> est une expérience dont on connaît tous
            les résultats possibles, sans pouvoir prédire lequel se réalisera. L&apos;ensemble de tous ces résultats (ou{" "}
            <strong>éventualités</strong>) est l&apos;<strong>univers</strong>, noté <Math tex="\Omega=\{\omega_1,\dots,\omega_n\}" />
            . Toute partie <Math tex="A\subset\Omega" /> est un <strong>événement</strong>.
          </Box>
          <Callout variant="success" title="Vocabulaire des événements">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\Omega" /> est l&apos;<strong>événement certain</strong>, <Math tex="\varnothing" />{" "}
                l&apos;<strong>événement impossible</strong>, et <Math tex="\{\omega_i\}" /> un{" "}
                <strong>événement élémentaire</strong>.
              </li>
              <li>
                <Math tex="\overline A=\Omega\setminus A" /> est l&apos;<strong>événement contraire</strong> de{" "}
                <Math tex="A" />.
              </li>
              <li>
                <Math tex="A\cap B=\varnothing" /> : <Math tex="A" /> et <Math tex="B" /> sont{" "}
                <strong>incompatibles</strong>.
              </li>
              <li>
                <Math tex="A_1,\dots,A_p" /> forment une <strong>partition</strong> de <Math tex="\Omega" /> s&apos;ils sont
                deux à deux disjoints et <Math tex="A_1\cup\cdots\cup A_p=\Omega" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Probabilité sur un univers fini, équiprobabilité">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">probabilité</strong> sur <Math tex="\Omega" /> associe à chaque
            événement élémentaire <Math tex="\{\omega_i\}" /> un nombre <Math tex="p_i\in[0,1]" /> avec{" "}
            <Math tex="p_1+p_2+\cdots+p_n=1" />, et la probabilité d&apos;un événement <Math tex="A" /> est la somme des{" "}
            <Math tex="p_i" /> des éventualités qui le composent.
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="0\le p(A)\le1" />, <Math tex="p(\Omega)=1" />, <Math tex="p(\varnothing)=0" />.
              </li>
              <li>
                <Math tex="p(A\cup B)=p(A)+p(B)-p(A\cap B)" /> ; <Math tex="p(\overline A)=1-p(A)" />.
              </li>
            </ul>
          </Callout>
          <Box title="Équiprobabilité" tone="prop">
            Si toutes les éventualités ont la même probabilité, on dit qu&apos;il y a{" "}
            <strong className="text-foreground">équiprobabilité</strong> (« au hasard », « boules indiscernables au
            toucher »), et pour tout événement <Math tex="A" /> :
          </Box>
          <MathBlock tex="p(A)=\dfrac{\operatorname{card}(A)}{\operatorname{card}(\Omega)}" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== V. PROBABILITÉ CONDITIONNELLE ===================== */}
      <LessonSection
        id="cours-conditionnelle"
        kicker="05 · Une information change la donne"
        title="Probabilité conditionnelle, indépendance, probabilités totales"
        tone="light"
        description="Que devient une probabilité lorsqu'on apprend qu'un autre événement s'est déjà réalisé ?"
      >
        <CourseBlock numeral="IX" title="Probabilité conditionnelle et indépendance">
          <Box title="Définition" tone="def">
            Pour <Math tex="A,B\subset\Omega" /> avec <Math tex="p(A)\neq0" />, la{" "}
            <strong className="text-foreground">probabilité de <Math tex="B" /> sachant <Math tex="A" /></strong> est :
          </Box>
          <MathBlock tex="p_A(B)=p(B\mid A)=\dfrac{p(A\cap B)}{p(A)}" />
          <Callout variant="success" title="Indépendance et probabilité composée">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="A" /> et <Math tex="B" /> sont <strong>indépendants</strong> si{" "}
                <Math tex="p(A\cap B)=p(A)\times p(B)" />, ce qui équivaut (si <Math tex="p(A)\neq0" />) à{" "}
                <Math tex="p_A(B)=p(B)" />.
              </li>
              <li>
                <strong>Probabilité composée</strong> : <Math tex="p(A\cap B)=p(A)\times p_A(B)=p(B)\times p_B(A)" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="X" title="Formule des probabilités totales">
          <Box title="Théorème" tone="prop">
            Si <Math tex="A_1,A_2,\dots,A_n" /> forment une partition de <Math tex="\Omega" /> (avec{" "}
            <Math tex="p(A_i)\neq0" />), alors pour tout événement <Math tex="B" /> :
          </Box>
          <MathBlock tex="p(B)=\sum_{i=1}^{n}p(A_i)\times p_{A_i}(B)" />
          <Callout variant="warning" title="Méthode — l'arbre pondéré">
            Cette formule se lit directement sur un arbre de probabilités : on multiplie le long de chaque branche puis
            on additionne les chemins menant à <Math tex="B" />. Elle permet aussi, via <Math tex="p(A_i\cap B)=p(A_i)p_{A_i}(B)" />
            , de « retourner » une probabilité conditionnelle : <Math tex="p_B(A_i)=\dfrac{p(A_i)\,p_{A_i}(B)}{p(B)}" />.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== VI. VARIABLE ALÉATOIRE ET LOI BINOMIALE ===================== */}
      <LessonSection
        id="cours-variables"
        kicker="06 · Répéter, compter, résumer"
        title="Épreuves répétées, loi binomiale, variable aléatoire"
        tone="muted"
        description="Répéter une expérience plusieurs fois dans les mêmes conditions fait apparaître la loi binomiale, une des lois les plus utiles du programme."
      >
        <CourseBlock numeral="XI" title="Épreuve de Bernoulli répétée et loi binomiale">
          <Box title="Définition" tone="def">
            On répète <Math tex="n" /> fois, de façon indépendante, une expérience où un événement <Math tex="A" /> a la
            probabilité <Math tex="p" /> de se réaliser (et <Math tex="\overline A" /> la probabilité <Math tex="1-p" />
            ). Soit <Math tex="X" /> le nombre de fois où <Math tex="A" /> est réalisé. On dit que <Math tex="X" /> suit
            la <strong className="text-foreground">loi binomiale</strong> de paramètres <Math tex="n" /> et{" "}
            <Math tex="p" />, notée <Math tex="X\sim\mathcal B(n,p)" />.
          </Box>
          <Callout variant="success" title="Formule à connaître par cœur">
            Pour <Math tex="k\in\{0,1,\dots,n\}" /> :
          </Callout>
          <MathBlock tex="p(X=k)=\binom{n}{k}p^k(1-p)^{n-k}" />
        </CourseBlock>

        <CourseBlock numeral="XII" title="Variable aléatoire : loi de probabilité, espérance, variance, écart-type">
          <Box title="Définitions" tone="def">
            Une <strong className="text-foreground">variable aléatoire</strong> <Math tex="X" /> associe un nombre réel à
            chaque éventualité de <Math tex="\Omega" />. Ses valeurs sont <Math tex="x_1,\dots,x_n" />, et sa{" "}
            <strong>loi de probabilité</strong> donne les <Math tex="p(X=x_i)" /> (avec{" "}
            <Math tex="\sum_i p(X=x_i)=1" />).
          </Box>
          <Callout variant="success" title="Espérance, variance, écart-type">
            <div className="space-y-2">
              <p>
                <strong>Espérance mathématique</strong> :{" "}
                <Math tex="E(X)=\sum_{i=1}^{n}x_i\,p(X=x_i)" />.
              </p>
              <p>
                <strong>Variance</strong> :{" "}
                <Math tex="V(X)=\sum_{i=1}^{n}x_i^{\,2}\,p(X=x_i)-\big(E(X)\big)^2" /> (toujours{" "}
                <Math tex="V(X)\ge0" />).
              </p>
              <p>
                <strong>Écart-type</strong> : <Math tex="\sigma(X)=\sqrt{V(X)}" />.
              </p>
            </div>
          </Callout>
          <Box title="Cas particulier — loi binomiale" tone="prop">
            Si <Math tex="X\sim\mathcal B(n,p)" /> : <Math tex="E(X)=np" /> et <Math tex="V(X)=np(1-p)" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="07 · À toi de jouer"
        title="Exercices · Dénombrement et probabilités"
        tone="light"
        description="12 exercices corrigés, au niveau Sciences Physiques : 6 sur le dénombrement (principe multiplicatif, arrangements, combinaisons, binôme), 6 sur les probabilités (équiprobabilité, conditionnelle, indépendance, probabilités totales, loi binomiale)."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre dénombrement et probabilités est terminé — et l'année avec lui."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Principe multiplicatif — digicode"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Un digicode comporte 4 caractères, chacun choisi parmi les 10 chiffres <Math tex="0" /> à{" "}
                <Math tex="9" /> et les 26 lettres de l&apos;alphabet.
                <br />
                1) Combien de codes peut-on former si les caractères peuvent se répéter ?<br />
                2) Combien de codes peut-on former si les 4 caractères doivent être deux à deux distincts ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Il y a <Math tex="10+26=36" /> caractères possibles pour chaque position.
                </p>
                <p>
                  1) Avec répétition, chacun des 4 choix a 36 possibilités indépendantes :{" "}
                  <Math tex="36^4=1\,679\,616" /> codes.
                </p>
                <p className="font-semibold text-green-700">
                  2) Sans répétition, c&apos;est un arrangement de 4 éléments parmi 36 :{" "}
                  <Math tex="A_{36}^4=36\times35\times34\times33=1\,413\,720" /> codes.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Arrangements et permutations — course"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Une course oppose 12 chevaux.
                <br />
                1) Combien de podiums (1ᵉʳ, 2ᵉ, 3ᵉ) différents peut-on obtenir ?<br />
                2) Combien de classements complets des 12 chevaux peut-on obtenir ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) Un podium est un choix ordonné de 3 chevaux parmi 12 (arrangement sans répétition) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="A_{12}^3=12\times11\times10=1\,320" /> podiums possibles.
                </p>
                <p>2) Un classement complet ordonne les 12 chevaux : c&apos;est une permutation des 12 éléments.</p>
                <p className="font-semibold text-green-700">
                  <Math tex="A_{12}^{12}=12!=479\,001\,600" /> classements possibles.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Combinaisons — urne de boules colorées"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Une urne contient 12 boules indiscernables au toucher : 7 rouges et 5 vertes. On tire{" "}
                <strong>simultanément</strong> 4 boules.
                <br />
                1) Combien de tirages possibles ?<br />
                2) Combien de tirages contiennent exactement 2 boules rouges ?<br />
                3) Combien de tirages contiennent au moins 3 boules rouges ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) Un tirage simultané est une combinaison :{" "}
                  <Math tex="\binom{12}{4}=\dfrac{12\times11\times10\times9}{4\times3\times2\times1}=495" /> tirages
                  possibles.
                </p>
                <p>
                  2) Exactement 2 rouges (donc 2 vertes) :{" "}
                  <Math tex="\binom{7}{2}\times\binom{5}{2}=21\times10=210" /> tirages.
                </p>
                <p>
                  3) Au moins 3 rouges = exactement 3 rouges ou exactement 4 rouges :
                </p>
                <MathBlock tex="\binom{7}{3}\binom{5}{1}+\binom{7}{4}\binom{5}{0}=35\times5+35\times1=175+35=210" />
                <p className="font-semibold text-green-700">Il y a donc 210 tirages avec au moins 3 boules rouges.</p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Combinaisons — comité mixte"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Un comité de 4 personnes est formé au hasard parmi 6 hommes et 4 femmes. Calculer le nombre de comités
                comportant <strong>au moins 2 femmes</strong>.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Le nombre total de comités est <Math tex="\binom{10}{4}=210" />.
                </p>
                <p>
                  Méthode directe : on somme les cas « exactement 2, 3 ou 4 femmes » :
                </p>
                <MathBlock tex="\binom{4}{2}\binom{6}{2}+\binom{4}{3}\binom{6}{1}+\binom{4}{4}\binom{6}{0}=6\times15+4\times6+1\times1=90+24+1=115" />
                <p>Méthode du complémentaire (0 ou 1 femme) pour vérifier :</p>
                <MathBlock tex="\binom{4}{0}\binom{6}{4}+\binom{4}{1}\binom{6}{3}=1\times15+4\times20=15+80=95\quad\Rightarrow\quad 210-95=115" />
                <p className="font-semibold text-green-700">
                  Les deux méthodes concordent : il y a 115 comités avec au moins 2 femmes.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Arrangements avec répétition — anagrammes"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Combien d&apos;anagrammes (avec ou sans sens) peut-on former avec toutes les lettres du mot{" "}
                <Math tex="\text{ANANAS}" /> ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Le mot <Math tex="\text{ANANAS}" /> comporte 6 lettres : <Math tex="A" /> répétée 3 fois,{" "}
                  <Math tex="N" /> répétée 2 fois, <Math tex="S" /> une seule fois.
                </p>
                <p>
                  Si les 6 lettres étaient distinctes, il y aurait <Math tex="6!" /> arrangements ; comme les lettres
                  identiques sont interchangeables entre elles sans changer le mot obtenu, on divise par le nombre de
                  permutations internes de chaque groupe de lettres identiques :
                </p>
                <MathBlock tex="\dfrac{6!}{3!\times2!\times1!}=\dfrac{720}{6\times2}=\dfrac{720}{12}=60" />
                <p className="font-semibold text-green-700">Il y a 60 anagrammes du mot ANANAS.</p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Binôme de Newton"
            itemsLabel="1 développement"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                1) Développer <Math tex="(2x-1)^4" /> à l&apos;aide de la formule du binôme de Newton.
                <br />
                2) En déduire la somme des coefficients du polynôme obtenu.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) Avec <Math tex="a=2x" />, <Math tex="b=-1" />, <Math tex="n=4" /> :
                </p>
                <MathBlock tex="(2x-1)^4=\sum_{i=0}^{4}\binom{4}{i}(2x)^{4-i}(-1)^i" />
                <MathBlock tex="=\binom40(2x)^4-\binom41(2x)^3+\binom42(2x)^2-\binom43(2x)+\binom44" />
                <p className="font-semibold text-green-700">
                  <Math tex="(2x-1)^4=16x^4-32x^3+24x^2-8x+1" />.
                </p>
                <p>
                  2) La somme des coefficients s&apos;obtient en posant <Math tex="x=1" /> :{" "}
                  <Math tex="16-32+24-8+1=1" />, ce qui coïncide bien avec{" "}
                  <Math tex="(2\times1-1)^4=1^4=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Équiprobabilité — somme de deux dés"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On lance deux dés équilibrés à 6 faces et on note la somme des points obtenus.
                <br />
                1) Calculer la probabilité que la somme soit égale à 8.
                <br />
                2) Calculer la probabilité que la somme soit paire.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;univers <Math tex="\Omega" /> compte <Math tex="\operatorname{card}(\Omega)=6\times6=36" />{" "}
                  couples équiprobables.
                </p>
                <p>
                  1) La somme vaut 8 pour les couples <Math tex="(2,6),(3,5),(4,4),(5,3),(6,2)" />, soit 5 cas.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="p(\text{somme}=8)=\dfrac{5}{36}" />.
                </p>
                <p>
                  2) La somme est paire ssi les deux dés ont la même parité. Il y a 3 faces paires et 3 faces impaires
                  par dé, donc <Math tex="3\times3+3\times3=18" /> couples favorables.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="p(\text{somme paire})=\dfrac{18}{36}=\dfrac12" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Équiprobabilité et combinaisons — tirage de jetons"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Une urne contient 10 jetons indiscernables au toucher : 6 blancs et 4 noirs. On tire simultanément 3
                jetons. On considère : <Math tex="A" /> « les 3 jetons sont blancs », <Math tex="B" /> « exactement 2
                jetons sont noirs », <Math tex="C" /> « au moins un jeton est blanc ». Calculer <Math tex="p(A)" />,{" "}
                <Math tex="p(B)" /> et <Math tex="p(C)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\operatorname{card}(\Omega)=\binom{10}{3}=120" />.
                </p>
                <p>
                  <Math tex="\operatorname{card}(A)=\binom{6}{3}=20" /> donc <Math tex="p(A)=\dfrac{20}{120}=\dfrac16" />.
                </p>
                <p>
                  <Math tex="\operatorname{card}(B)=\binom{4}{2}\binom{6}{1}=6\times6=36" /> donc{" "}
                  <Math tex="p(B)=\dfrac{36}{120}=\dfrac{3}{10}" />.
                </p>
                <p>
                  <Math tex="\overline C" /> = « aucun jeton blanc » : <Math tex="\operatorname{card}(\overline C)=\binom{4}{3}=4" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="p(C)=1-p(\overline C)=1-\dfrac{4}{120}=1-\dfrac{1}{30}=\dfrac{29}{30}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Tirages successifs sans remise"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Une urne contient 5 boules rouges et 3 boules vertes. On tire successivement et sans remise 2 boules.
                Calculer la probabilité que les deux boules tirées soient de couleurs différentes.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;événement « couleurs différentes » se réalise si on tire (rouge puis verte) ou (verte puis
                  rouge). Comme le tirage est sans remise :
                </p>
                <MathBlock tex="p(\text{différentes})=p(R_1)\times p_{R_1}(V_2)+p(V_1)\times p_{V_1}(R_2)=\dfrac58\times\dfrac37+\dfrac38\times\dfrac57" />
                <MathBlock tex="=\dfrac{15}{56}+\dfrac{15}{56}=\dfrac{30}{56}=\dfrac{15}{28}" />
                <p className="font-semibold text-green-700">
                  La probabilité que les deux boules soient de couleurs différentes est <Math tex="\dfrac{15}{28}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Indépendance — jeu de cartes"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On tire au hasard une carte d&apos;un jeu de 32 cartes (4 couleurs, 8 valeurs). Soit <Math tex="A" /> «
                la carte est un roi » et <Math tex="B" /> « la carte est un cœur ».
                <br />
                1) Calculer <Math tex="p(A)" />, <Math tex="p(B)" /> et <Math tex="p(A\cap B)" />.<br />
                2) Les événements <Math tex="A" /> et <Math tex="B" /> sont-ils indépendants ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Il y a 4 rois (un par couleur) et 8 cœurs (une valeur par carte de cette couleur), dont un seul est à
                  la fois roi et cœur.
                </p>
                <p>
                  1) <Math tex="p(A)=\dfrac{4}{32}=\dfrac18" />, <Math tex="p(B)=\dfrac{8}{32}=\dfrac14" />,{" "}
                  <Math tex="p(A\cap B)=\dfrac{1}{32}" />.
                </p>
                <p>
                  2) On compare : <Math tex="p(A)\times p(B)=\dfrac18\times\dfrac14=\dfrac{1}{32}=p(A\cap B)" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;égalité est vérifiée : <Math tex="A" /> et <Math tex="B" /> sont indépendants (ce que confirme{" "}
                  <Math tex="p_B(A)=\dfrac{p(A\cap B)}{p(B)}=\dfrac{1/32}{1/4}=\dfrac18=p(A)" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Probabilités totales — deux urnes"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Une urne <Math tex="U_1" /> contient 3 boules rouges et 2 vertes ; une urne <Math tex="U_2" /> contient 2
                boules rouges et 4 vertes. On choisit au hasard une urne (équiprobabilité), puis on y tire une boule.
                <br />
                1) Calculer la probabilité de tirer une boule rouge.
                <br />
                2) Sachant que la boule tirée est rouge, calculer la probabilité qu&apos;elle provienne de{" "}
                <Math tex="U_1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Soit <Math tex="R" /> « la boule tirée est rouge ». On a{" "}
                  <Math tex="p(U_1)=p(U_2)=\dfrac12" />, <Math tex="p_{U_1}(R)=\dfrac35" /> et{" "}
                  <Math tex="p_{U_2}(R)=\dfrac26=\dfrac13" />.
                </p>
                <p>1) D&apos;après la formule des probabilités totales :</p>
                <MathBlock tex="p(R)=p(U_1)p_{U_1}(R)+p(U_2)p_{U_2}(R)=\dfrac12\times\dfrac35+\dfrac12\times\dfrac13=\dfrac{3}{10}+\dfrac16=\dfrac{9}{30}+\dfrac{5}{30}=\dfrac{14}{30}=\dfrac{7}{15}" />
                <p>2) On « retourne » la probabilité conditionnelle :</p>
                <MathBlock tex="p_R(U_1)=\dfrac{p(U_1)\,p_{U_1}(R)}{p(R)}=\dfrac{3/10}{7/15}=\dfrac{3}{10}\times\dfrac{15}{7}=\dfrac{45}{70}=\dfrac{9}{14}" />
                <p className="font-semibold text-green-700">
                  <Math tex="p(R)=\dfrac{7}{15}" /> et <Math tex="p_R(U_1)=\dfrac{9}{14}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Loi binomiale — répétition d'épreuves"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On lance un dé équilibré 4 fois de suite, de façon indépendante. Soit <Math tex="X" /> le nombre de fois
                où l&apos;on obtient la face 6.
                <br />
                1) Justifier que <Math tex="X" /> suit une loi binomiale et donner ses paramètres.
                <br />
                2) Calculer <Math tex="p(X=2)" />.<br />
                3) Calculer l&apos;espérance <Math tex="E(X)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) Chaque lancer est une épreuve à deux issues (« obtenir 6 » avec probabilité <Math tex="p=\dfrac16" />
                  , ou non), répétée <Math tex="n=4" /> fois de façon indépendante et dans les mêmes conditions : donc{" "}
                  <Math tex="X\sim\mathcal B\!\left(4,\dfrac16\right)" />.
                </p>
                <p>2) D&apos;après la formule de la loi binomiale :</p>
                <MathBlock tex="p(X=2)=\binom42\left(\dfrac16\right)^2\left(\dfrac56\right)^2=6\times\dfrac{1}{36}\times\dfrac{25}{36}=\dfrac{150}{1296}=\dfrac{25}{216}" />
                <p className="font-semibold text-green-700">
                  3) <Math tex="E(X)=np=4\times\dfrac16=\dfrac23" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
