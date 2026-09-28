import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  FormulaBlock,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Espaces vectoriels · Cours et exercices | 2ème Bac Sciences Math",
  description:
    "Cours complet sur les espaces vectoriels réels : loi de composition externe, axiomes d&apos;un espace vectoriel, règles de calcul, sous-espaces vectoriels, combinaisons linéaires, familles libres et liées, bases et dimension, avec 11 exercices intégralement corrigés. 2ème Bac Sciences Mathématiques (A et B), semestre 2.",
  kicker: "2ème Bac Sciences Math · Semestre 2",
  heroTitle: "Espaces vectoriels",
  heroSubtitle:
    "Axiomes, sous-espaces, combinaisons linéaires, familles libres et bases : le cours complet d&apos;algèbre linéaire, puis 11 exercices corrigés en détail.",
  footerNote: "Espaces vectoriels · Mathématiques, 2ème Bac Sciences Mathématiques, semestre 2.",
  sections: [
    { id: "cours-definition", label: "Définition & axiomes" },
    { id: "cours-sous-espaces", label: "Sous-espaces vectoriels" },
    { id: "cours-familles", label: "Combinaisons & familles libres" },
    { id: "cours-bases", label: "Bases et dimension" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** A numbered block used to structure the "Cours" section (I, II, III...). */
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

/** Worked example block, statement + solution. */
function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm sm:p-5">
      <p className="mb-2 font-semibold text-foreground">{title}</p>
      <div className="space-y-2 text-foreground-muted">{children}</div>
    </div>
  );
}

/** Small labelled box for grouped examples/lists. */
function Box({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      {title ? <p className="mb-2 font-semibold text-foreground-muted">{title}</p> : null}
      <div className="space-y-1.5">{children}</div>
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
          { value: "4", label: "notions du cours" },
          { value: "11", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-definition"
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
          <svg viewBox="0 0 240 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <line x1="30" y1="170" x2="220" y2="170" stroke="white" strokeWidth="1.4" opacity="0.5" />
            <line x1="30" y1="170" x2="30" y2="20" stroke="white" strokeWidth="1.4" opacity="0.5" />
            <line x1="30" y1="170" x2="130" y2="60" stroke="#fb923c" strokeWidth="2.4" markerEnd="url(#evArrow)" />
            <line x1="30" y1="170" x2="190" y2="130" stroke="white" strokeWidth="2" markerEnd="url(#evArrow2)" />
            <defs>
              <marker id="evArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L6,3 L0,6 Z" fill="#fb923c" />
              </marker>
              <marker id="evArrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L6,3 L0,6 Z" fill="white" />
              </marker>
            </defs>
            <text x="134" y="52" fontSize="13" fontWeight="700" fill="#fb923c">u⃗</text>
            <text x="194" y="122" fontSize="13" fontWeight="700" fill="white">v⃗</text>
            <text x="60" y="190" fontSize="12" fill="white" opacity="0.7">Vect(u⃗, v⃗)</text>
          </svg>
        }
      />

      {/* ===================== I, II. LOI EXTERNE ET AXIOMES D'UN E.V. ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · Une nouvelle structure"
        title="Loi externe et espace vectoriel"
        tone="light"
        description="Un espace vectoriel combine une addition entre vecteurs et une multiplication par un scalaire, liées par des règles de distributivité."
      >
        <CourseBlock numeral="I" title="Loi de composition externe">
          <Callout variant="success" title="Définition">
            <p>
              Soient <Math tex="E" /> un ensemble non vide et <Math tex="\mathbb K" /> un ensemble de scalaires
              (ici <Math tex="\mathbb K=\mathbb R" />). Une <strong>loi de composition externe</strong> sur{" "}
              <Math tex="E" /> à coefficients dans <Math tex="\mathbb K" /> est une application :
            </p>
            <FormulaBlock tex="\begin{gathered} \cdot\, :\ \mathbb K\times E \to E \\ (\lambda,x)\longmapsto \lambda\cdot x \end{gathered}" />
          </Callout>
          <Box title="Exemples">
            <p>
              Dans <Math tex="\mathcal M_2(\mathbb R)" />, la multiplication d&apos;une matrice par un réel{" "}
              <Math tex="\lambda" /> ; dans <Math tex="\mathbb R^n" />, la multiplication d&apos;un vecteur par un
              réel ; dans <Math tex="\mathbb R_n[X]" /> (polynômes de degré <Math tex="\leq n" />), la
              multiplication d&apos;un polynôme par un réel ; dans <Math tex="\mathcal F(I,\mathbb R)" />, la
              fonction <Math tex="\lambda\cdot f" /> définie par <Math tex="(\lambda\cdot f)(x)=\lambda f(x)" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Définition d&apos;un espace vectoriel réel">
          <Callout variant="success" title="Définition">
            <p>
              Soit <Math tex="E" /> un ensemble muni d&apos;une l.c.i. <Math tex="+" /> et d&apos;une loi externe{" "}
              <Math tex="\cdot" /> à coefficients dans <Math tex="\mathbb R" />. On dit que{" "}
              <Math tex="(E,+,\cdot)" /> est un <strong>espace vectoriel réel</strong> (ou{" "}
              <Math tex="\mathbb R" />-espace vectoriel) si :
            </p>
            <ol className="list-decimal space-y-1 pl-5">
              <li><Math tex="(E,+)" /> est un groupe commutatif ;</li>
              <li><Math tex="\forall \lambda,\mu\in\mathbb R,\ \forall x\in E,\ (\lambda+\mu)\cdot x = \lambda\cdot x + \mu\cdot x" /> ;</li>
              <li><Math tex="\forall \lambda,\mu\in\mathbb R,\ \forall x\in E,\ \lambda\cdot(\mu\cdot x) = (\lambda\mu)\cdot x" /> ;</li>
              <li><Math tex="\forall \lambda\in\mathbb R,\ \forall x,y\in E,\ \lambda\cdot(x+y) = \lambda\cdot x+\lambda\cdot y" /> ;</li>
              <li><Math tex="\forall x\in E,\ 1\cdot x = x" />.</li>
            </ol>
            <p className="mt-2">
              Les éléments de <Math tex="E" /> sont appelés <strong>vecteurs</strong>, ceux de{" "}
              <Math tex="\mathbb R" /> des <strong>scalaires</strong>. L&apos;élément neutre de <Math tex="+" /> est
              le <strong>vecteur nul</strong>, noté <Math tex="0_E" /> ou <Math tex="\vec 0" />.
            </p>
          </Callout>
          <Box title="Exemples fondamentaux d&apos;espaces vectoriels réels">
            <p>
              <Math tex="(\mathbb R^2,+,\cdot)" /> et <Math tex="(\mathbb R^3,+,\cdot)" /> (addition et
              multiplication externe coordonnée par coordonnée) ; <Math tex="(\mathcal M_2(\mathbb R),+,\cdot)" />{" "}
              et <Math tex="(\mathcal M_3(\mathbb R),+,\cdot)" /> ; <Math tex="(\mathbb R_n[X],+,\cdot)" /> ;{" "}
              <Math tex="(\mathcal F(I,\mathbb R),+,\cdot)" /> ; <Math tex="\mathbb C" /> lui-même, vu comme{" "}
              <Math tex="\mathbb R" />-espace vectoriel (addition de complexes, multiplication par un réel).
            </p>
          </Box>
          <Callout variant="warning" title="Théorème — règles de calcul">
            <p>Soit <Math tex="(E,+,\cdot)" /> un espace vectoriel réel. Pour tous <Math tex="x,y\in E" /> et{" "}
            <Math tex="\lambda,\mu\in\mathbb R" /> :</p>
            <FormulaBlock tex="\begin{gathered} 0\cdot x = 0_E \qquad \lambda\cdot 0_E = 0_E \qquad (-1)\cdot x=-x \\ \lambda\cdot x = 0_E \iff \lambda=0\ \text{ou}\ x=0_E \end{gathered}" />
            <p className="mt-2 text-xs">
              <strong>Démonstration (extrait).</strong> Dans <Math tex="\mathbb R" />, <Math tex="0+0=0" />, donc{" "}
              <Math tex="(0+0)\cdot x = 0\cdot x" />, soit par distributivité{" "}
              <Math tex="0\cdot x+0\cdot x=0\cdot x=0\cdot x+0_E" />. En simplifiant dans le groupe{" "}
              <Math tex="(E,+)" />, on obtient <Math tex="0\cdot x=0_E" />. Pour la réciproque de la dernière
              égalité : si <Math tex="\lambda\neq 0" /> et <Math tex="\lambda\cdot x=0_E" />, alors{" "}
              <Math tex="\lambda^{-1}\cdot(\lambda\cdot x)=\lambda^{-1}\cdot 0_E" />, soit{" "}
              <Math tex="1\cdot x=0_E" />, donc <Math tex="x=0_E" />.
            </p>
          </Callout>
          <Example title="Exemple résolu — résoudre une équation vectorielle">
            <p>
              Dans l&apos;espace vectoriel <Math tex="(V_2,+,\cdot)" />, déterminer <Math tex="\lambda\in\mathbb R" />{" "}
              et <Math tex="\vec u\in V_2" /> tels que <Math tex="(3\lambda-2)(5-2\lambda)\cdot\vec u = \vec 0" />.
            </p>
            <p>
              D&apos;après la règle de calcul, cette égalité équivaut à{" "}
              <Math tex="\vec u=\vec 0" /> ou <Math tex="(3\lambda-2)(5-2\lambda)=0" />, c&apos;est-à-dire{" "}
              <Math tex="\lambda=\dfrac23" /> ou <Math tex="\lambda=\dfrac52" />.
            </p>
            <p className="font-semibold text-green-700">
              L&apos;ensemble des solutions est <Math tex="\left\{\left(\dfrac23,\vec u\right),\left(\dfrac52,\vec u\right),\ \vec u\in V_2\right\}\cup\left\{(\lambda,\vec 0),\ \lambda\in\mathbb R\right\}" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. SOUS-ESPACES VECTORIELS ===================== */}
      <LessonSection
        id="cours-sous-espaces"
        kicker="02 · Un espace vectoriel dans un autre"
        title="Sous-espaces vectoriels"
        tone="muted"
        description="Plutôt que revérifier les 5 axiomes à chaque fois, un critère pratique suffit à reconnaître un sous-espace vectoriel."
      >
        <CourseBlock numeral="III" title="Définition et caractérisation">
          <Callout variant="success" title="Définition">
            <p>
              Soient <Math tex="(E,+,\cdot)" /> un espace vectoriel réel et <Math tex="F\subset E" />. On dit que{" "}
              <Math tex="F" /> est un <strong>sous-espace vectoriel</strong> de <Math tex="E" /> si{" "}
              <Math tex="(F,+,\cdot)" /> (pour les lois induites) est lui-même un espace vectoriel réel.
            </p>
          </Callout>
          <Callout variant="warning" title="Théorème — caractérisation pratique">
            <p><Math tex="F" /> est un sous-espace vectoriel de <Math tex="E" /> si et seulement si :</p>
            <FormulaBlock tex="\begin{gathered} F\neq\varnothing\ (\text{en particulier } 0_E\in F) \\ \forall (x,y)\in F^2,\ \forall(\lambda,\mu)\in\mathbb R^2,\ \lambda\cdot x+\mu\cdot y \in F \end{gathered}" caption="stabilité par combinaison linéaire" />
          </Callout>
          <Box title="Exemples immédiats">
            <p>
              <Math tex="\{0_E\}" /> et <Math tex="E" /> sont des sous-espaces vectoriels de <Math tex="E" />, dits{" "}
              triviaux. <Math tex="\mathbb R_n[X]" /> est un sous-espace vectoriel de{" "}
              <Math tex="\mathcal F(\mathbb R,\mathbb R)" />.
            </p>
          </Box>
          <Example title="Exemple résolu — une droite vectorielle de ℝ²">
            <p>
              Montrer que <Math tex="F=\{(x,y)\in\mathbb R^2,\ y=2x\}" /> est un sous-espace vectoriel de{" "}
              <Math tex="\mathbb R^2" />.
            </p>
            <p>
              <Math tex="F\subset\mathbb R^2" />, et <Math tex="(0,0)\in F" /> (car <Math tex="0=2\times 0" />)
              donc <Math tex="F\neq\varnothing" />.
            </p>
            <p>
              Soient <Math tex="(x,y),(x',y')\in F" /> (donc <Math tex="y=2x" /> et <Math tex="y'=2x'" />) et{" "}
              <Math tex="\lambda,\mu\in\mathbb R" />. Alors :
            </p>
            <FormulaBlock tex="\lambda(x,y)+\mu(x',y') = (\lambda x+\mu x',\ \lambda y+\mu y') = (\lambda x+\mu x',\ 2\lambda x+2\mu x')" />
            <p>
              La deuxième coordonnée vaut bien <Math tex="2" /> fois la première : le vecteur obtenu est dans{" "}
              <Math tex="F" />.
            </p>
            <p className="font-semibold text-green-700">Donc <Math tex="F" /> est un sous-espace vectoriel de <Math tex="\mathbb R^2" /> (une droite vectorielle).</p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV, V. COMBINAISONS LINÉAIRES, FAMILLES LIBRES ===================== */}
      <LessonSection
        id="cours-familles"
        kicker="03 · Fabriquer de nouveaux vecteurs"
        title="Combinaisons linéaires, familles libres et liées"
        tone="light"
        description="Toute la richesse de l&apos;algèbre linéaire tient dans une seule opération : combiner des vecteurs avec des coefficients."
      >
        <CourseBlock numeral="IV" title="Combinaison linéaire et sous-espace engendré">
          <Callout variant="success" title="Définition">
            <p>
              Soit <Math tex="(x_1,\dots,x_n)" /> une famille de vecteurs de <Math tex="E" />. Un vecteur{" "}
              <Math tex="x" /> est une <strong>combinaison linéaire</strong> de cette famille s&apos;il existe des
              scalaires <Math tex="\lambda_1,\dots,\lambda_n\in\mathbb R" /> tels que :
            </p>
            <FormulaBlock tex="x = \lambda_1 x_1 + \lambda_2 x_2 + \cdots + \lambda_n x_n = \sum_{i=1}^n \lambda_i x_i" />
          </Callout>
          <p>
            On dit que la famille <Math tex="(x_1,\dots,x_n)" /> <strong>engendre</strong> <Math tex="E" /> (ou est{" "}
            <strong>génératrice</strong> de <Math tex="E" />) si tout vecteur de <Math tex="E" /> est combinaison
            linéaire de <Math tex="x_1,\dots,x_n" />.
          </p>
          <Callout variant="info" title="Théorème — sous-espace engendré">
            <p>
              L&apos;ensemble des combinaisons linéaires des vecteurs <Math tex="x_1,\dots,x_n" /> est un
              sous-espace vectoriel de <Math tex="E" />, le <strong>plus petit</strong> (au sens de
              l&apos;inclusion) contenant ces vecteurs. On le note <Math tex="\text{Vect}(x_1,\dots,x_n)" />.
            </p>
          </Callout>
          <Example title="Exemple résolu">
            <p>
              Dans <Math tex="(\mathbb R^2,+,\cdot)" />, le vecteur <Math tex="x_3=(7,2)" /> est-il combinaison
              linéaire de <Math tex="x_1=(1,2)" /> et <Math tex="x_2=(5,-1)" /> ?
            </p>
            <p>
              On cherche <Math tex="\alpha,\beta\in\mathbb R" /> tels que{" "}
              <Math tex="\alpha x_1+\beta x_2=x_3" />, soit <Math tex="\alpha+5\beta=7" /> et{" "}
              <Math tex="2\alpha-\beta=2" />. La 2e équation donne <Math tex="\beta=2\alpha-2" />, d&apos;où{" "}
              <Math tex="\alpha+5(2\alpha-2)=7 \iff 11\alpha=17 \iff \alpha=\dfrac{17}{11}" />, puis{" "}
              <Math tex="\beta=\dfrac{12}{11}" />.
            </p>
            <p className="font-semibold text-green-700">
              Oui : <Math tex="x_3=\dfrac{17}{11}x_1+\dfrac{12}{11}x_2" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="V" title="Familles libres, familles liées">
          <Callout variant="success" title="Définitions">
            <p>Soit <Math tex="(x_1,\dots,x_n)" /> une famille de vecteurs de <Math tex="E" />.</p>
            <p className="mt-2">Cette famille est <strong>libre</strong> (les vecteurs sont linéairement indépendants) si :</p>
            <FormulaBlock tex="\forall (\lambda_1,\dots,\lambda_n)\in\mathbb R^n,\ \ \lambda_1x_1+\cdots+\lambda_nx_n=0_E \ \Longrightarrow\ \lambda_1=\cdots=\lambda_n=0" />
            <p className="mt-2">Sinon, la famille est dite <strong>liée</strong>.</p>
          </Callout>
          <Callout variant="info" title="Théorème — caractérisation d&apos;une famille liée">
            Une famille est liée si et seulement si l&apos;un de ses vecteurs est combinaison linéaire des autres.
          </Callout>
          <Box title="Conséquences pratiques">
            <p>
              • Une famille contenant le vecteur nul, ou deux fois le même vecteur, est toujours liée.
              <br />• Une sur-famille d&apos;une famille liée est liée ; une sous-famille d&apos;une famille libre
              est libre.
              <br />• Une famille de deux vecteurs colinéaires (proportionnels) est toujours liée.
            </p>
          </Box>
          <Callout variant="warning" title="Critère pratique par déterminant (dimension 2 ou 3)">
            <p>
              Dans une base <Math tex="(\vec i,\vec j)" /> de <Math tex="E" /> (avec{" "}
              <Math tex="\dim E=2" />), la famille <Math tex="(\vec u_1,\vec u_2)" />, avec{" "}
              <Math tex="\vec u_1=x_1\vec i+y_1\vec j" /> et <Math tex="\vec u_2=x_2\vec i+y_2\vec j" />, est libre
              si et seulement si :
            </p>
            <FormulaBlock tex="\begin{vmatrix}x_1&x_2\\y_1&y_2\end{vmatrix} = x_1y_2-x_2y_1 \neq 0" />
            <p className="mt-2">
              (Critère analogue avec un déterminant <Math tex="3\times3" /> pour trois vecteurs d&apos;un espace de
              dimension 3.)
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== VI. BASE ET DIMENSION ===================== */}
      <LessonSection
        id="cours-bases"
        kicker="04 · Décrire tout l&apos;espace en un minimum de vecteurs"
        title="Base et dimension d&apos;un espace vectoriel"
        tone="muted"
        description="Une base est une famille libre et génératrice : elle permet de repérer chaque vecteur par des coordonnées uniques."
      >
        <CourseBlock numeral="VI" title="Base, coordonnées, dimension">
          <Callout variant="success" title="Définition — base">
            <p>
              Une famille <Math tex="B=(x_1,\dots,x_n)" /> de vecteurs de <Math tex="E" /> est une{" "}
              <strong>base</strong> de <Math tex="E" /> si et seulement si elle est <strong>libre</strong> et{" "}
              <strong>génératrice</strong> de <Math tex="E" />, c&apos;est-à-dire si tout vecteur{" "}
              <Math tex="x\in E" /> s&apos;écrit de façon <strong>unique</strong> :
            </p>
            <FormulaBlock tex="x = \lambda_1x_1+\cdots+\lambda_nx_n" />
            <p className="mt-2">
              Les scalaires <Math tex="(\lambda_1,\dots,\lambda_n)" /> sont les <strong>coordonnées</strong> de{" "}
              <Math tex="x" /> dans la base <Math tex="B" />.
            </p>
          </Callout>
          <Box title="Bases canoniques à connaître">
            <p>
              <Math tex="\mathbb R^2" /> : <Math tex="((1,0),(0,1))" />, dimension <Math tex="2" />.<br />
              <Math tex="\mathbb R^3" /> : <Math tex="((1,0,0),(0,1,0),(0,0,1))" />, dimension <Math tex="3" />.
              <br />
              <Math tex="\mathcal M_2(\mathbb R)" /> :{" "}
              <Math tex="\left(\begin{pmatrix}1&0\\0&0\end{pmatrix},\begin{pmatrix}0&1\\0&0\end{pmatrix},\begin{pmatrix}0&0\\1&0\end{pmatrix},\begin{pmatrix}0&0\\0&1\end{pmatrix}\right)" />
              , dimension <Math tex="4" />.<br />
              <Math tex="\mathbb R_n[X]" /> : <Math tex="(1,X,X^2,\dots,X^n)" />, dimension <Math tex="n+1" />.
            </p>
          </Box>
          <Callout variant="info" title="Théorème — dimension">
            <p>
              Si <Math tex="E" /> admet une base à <Math tex="n" /> éléments, alors{" "}
              <strong>toutes</strong> les bases de <Math tex="E" /> ont exactement <Math tex="n" /> éléments. Ce
              nombre <Math tex="n" /> s&apos;appelle la <strong>dimension</strong> de <Math tex="E" />, notée{" "}
              <Math tex="\dim E" />.
            </p>
            <p className="mt-2">
              Conséquence utile : dans un espace de dimension <Math tex="n" />, une famille{" "}
              <strong>libre</strong> de <Math tex="n" /> vecteurs est automatiquement une <strong>base</strong> (et
              de même pour une famille génératrice de <Math tex="n" /> vecteurs).
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Espaces vectoriels"
        tone="light"
        description="11 exercices corrigés, des sous-espaces vectoriels jusqu&apos;aux bases. Cherche sur ton cahier, puis clique pour vérifier ta réponse."
      >
        <ExerciseGroup total={11} celebrationTitle="Bravo, les 11 exercices sont vérifiés !" celebrationSubtitle="Les espaces vectoriels n&apos;ont plus de secret pour toi.">
          <ExerciseCard
            id="1"
            index={1}
            title="Une droite vectorielle de ℝ²"
            items={
              <p>
                Montrer que <Math tex="F=\{(x,y)\in\mathbb R^2,\ y=2x\}" /> est un sous-espace vectoriel de{" "}
                <Math tex="(\mathbb R^2,+,\cdot)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="F\subset\mathbb R^2" /> et <Math tex="(0,0)\in F" /> (<Math tex="0=2\times0" />), donc{" "}
                  <Math tex="F\neq\varnothing" />.
                </p>
                <p>
                  Soient <Math tex="(x,y),(x',y')\in F" />, donc <Math tex="y=2x" /> et <Math tex="y'=2x'" />, et{" "}
                  <Math tex="\lambda,\mu\in\mathbb R" />. Alors :
                </p>
                <FormulaBlock tex="\lambda(x,y)+\mu(x',y') = (\lambda x+\mu x',\ \lambda y+\mu y') = (\lambda x+\mu x',\ 2(\lambda x+\mu x'))" />
                <p className="font-semibold text-green-700">
                  La deuxième coordonnée est bien le double de la première : <Math tex="\lambda(x,y)+\mu(x',y')\in F" />
                  . Donc <Math tex="F" /> est un sous-espace vectoriel de <Math tex="\mathbb R^2" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Un sous-espace de matrices"
            items={
              <p>
                Montrer que <Math tex="F=\left\{\begin{pmatrix}a&2b\\b&a\end{pmatrix},\ (a,b)\in\mathbb R^2\right\}" />{" "}
                est un sous-espace vectoriel de <Math tex="(\mathcal M_2(\mathbb R),+,\cdot)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="F\subset\mathcal M_2(\mathbb R)" />, et pour <Math tex="a=b=0" /> on obtient la
                  matrice nulle : <Math tex="F\neq\varnothing" />.
                </p>
                <p>
                  Soient <Math tex="M=\begin{pmatrix}a&2b\\b&a\end{pmatrix}\in F" /> et{" "}
                  <Math tex="M'=\begin{pmatrix}a'&2b'\\b'&a'\end{pmatrix}\in F" />, et{" "}
                  <Math tex="\lambda,\mu\in\mathbb R" />. Alors :
                </p>
                <FormulaBlock tex="\lambda M+\mu M' = \begin{pmatrix}\lambda a+\mu a' & 2(\lambda b+\mu b')\\ \lambda b+\mu b' & \lambda a+\mu a'\end{pmatrix}" />
                <p className="font-semibold text-green-700">
                  En posant <Math tex="A=\lambda a+\mu a'" /> et <Math tex="B=\lambda b+\mu b'" />, cette matrice
                  s&apos;écrit <Math tex="\begin{pmatrix}A&2B\\B&A\end{pmatrix}\in F" />. Donc <Math tex="F" /> est
                  un sous-espace vectoriel de <Math tex="\mathcal M_2(\mathbb R)" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Résoudre une équation vectorielle"
            items={
              <p>
                Dans un espace vectoriel réel <Math tex="(E,+,\cdot)" />, résoudre l&apos;équation d&apos;inconnues{" "}
                <Math tex="\lambda\in\mathbb R" /> et <Math tex="\vec u\in E" /> :{" "}
                <Math tex="(3\lambda-2)(5-2\lambda)\cdot\vec u = \vec 0" />.
              </p>
            }
            correction={
              <>
                <p>
                  D&apos;après la règle de calcul <Math tex="\alpha\cdot x=0_E \iff \alpha=0\ \text{ou}\ x=0_E" />,
                  cette égalité équivaut à :
                </p>
                <FormulaBlock tex="\vec u = \vec 0 \quad \text{ou} \quad (3\lambda-2)(5-2\lambda)=0" />
                <p>
                  La seconde condition donne <Math tex="\lambda=\dfrac23" /> ou <Math tex="\lambda=\dfrac52" />{" "}
                  (avec <Math tex="\vec u" /> quelconque).
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble des solutions est <Math tex="S=\big(\{\lambda=\tfrac23\}\cup\{\lambda=\tfrac52\}\big)\times E \ \cup\ \mathbb R\times\{\vec 0\}" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Combinaison linéaire de deux vecteurs de ℝ²"
            items={
              <p>
                Dans <Math tex="(\mathbb R^2,+,\cdot)" />, on considère <Math tex="x_1=(1,2)" /> et{" "}
                <Math tex="x_2=(5,-1)" />. Le vecteur <Math tex="x_3=(7,2)" /> est-il combinaison linéaire de{" "}
                <Math tex="x_1" /> et <Math tex="x_2" /> ?
              </p>
            }
            correction={
              <>
                <p>
                  On cherche <Math tex="\alpha,\beta\in\mathbb R" /> tels que{" "}
                  <Math tex="\alpha x_1+\beta x_2=x_3" />, c&apos;est-à-dire :
                </p>
                <FormulaBlock tex="\begin{gathered} \alpha+5\beta = 7 \\ 2\alpha-\beta = 2 \end{gathered}" />
                <p>
                  De la 2e équation : <Math tex="\beta=2\alpha-2" />. En substituant dans la 1re :{" "}
                  <Math tex="\alpha+5(2\alpha-2)=7 \iff 11\alpha-10=7 \iff \alpha=\dfrac{17}{11}" />, puis{" "}
                  <Math tex="\beta=2\times\dfrac{17}{11}-2=\dfrac{12}{11}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Oui : <Math tex="x_3=\dfrac{17}{11}\,x_1+\dfrac{12}{11}\,x_2" />, ce que l&apos;on peut vérifier :{" "}
                  <Math tex="\dfrac{17}{11}(1,2)+\dfrac{12}{11}(5,-1)=\left(\dfrac{17+60}{11},\dfrac{34-12}{11}\right)=(7,2)" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Une combinaison linéaire dans M₂(ℝ)"
            items={
              <p>
                Dans <Math tex="\mathcal M_2(\mathbb R)" />, on pose{" "}
                <Math tex="A_1=\begin{pmatrix}1&0\\1&0\end{pmatrix}" /> et{" "}
                <Math tex="A_2=\begin{pmatrix}0&1\\0&1\end{pmatrix}" />. Montrer que{" "}
                <Math tex="M=\begin{pmatrix}3&5\\3&5\end{pmatrix}" /> est combinaison linéaire de{" "}
                <Math tex="A_1" /> et <Math tex="A_2" />, et que <Math tex="A_1,A_2" /> forment une famille libre.
              </p>
            }
            correction={
              <>
                <p>
                  On cherche <Math tex="a,b\in\mathbb R" /> tels que <Math tex="aA_1+bA_2=M" /> :
                </p>
                <FormulaBlock tex="aA_1+bA_2 = \begin{pmatrix}a&b\\a&b\end{pmatrix} = \begin{pmatrix}3&5\\3&5\end{pmatrix}" />
                <p>
                  On identifie <Math tex="a=3" /> et <Math tex="b=5" />, donc{" "}
                  <strong className="text-green-700"><Math tex="M=3A_1+5A_2" /></strong>.
                </p>
                <p>
                  <strong>Famille libre.</strong> Si <Math tex="aA_1+bA_2=0" />, alors{" "}
                  <Math tex="\begin{pmatrix}a&b\\a&b\end{pmatrix}=\begin{pmatrix}0&0\\0&0\end{pmatrix}" />, donc{" "}
                  <Math tex="a=0" /> et <Math tex="b=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  La seule combinaison nulle est la combinaison triviale : <Math tex="(A_1,A_2)" /> est une famille
                  libre.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Famille libre de trois vecteurs de ℝ³"
            items={
              <p>
                Les vecteurs <Math tex="x_1=(1,2,-1)" />, <Math tex="x_2=(2,1,3)" /> et <Math tex="x_3=(0,1,-1)" />{" "}
                forment-ils une famille libre de <Math tex="\mathbb R^3" /> ?
              </p>
            }
            correction={
              <>
                <p>
                  On calcule le déterminant des coordonnées (en colonnes) :
                </p>
                <FormulaBlock tex="\begin{vmatrix}1&2&0\\2&1&1\\-1&3&-1\end{vmatrix}" />
                <p>
                  En développant par rapport à la première ligne :
                </p>
                <FormulaBlock tex="\begin{gathered} =1\times\begin{vmatrix}1&1\\3&-1\end{vmatrix} - 2\times\begin{vmatrix}2&1\\-1&-1\end{vmatrix} + 0 \\ = 1\times(-1-3) - 2\times(-2+1) = -4+2 = -2 \end{gathered}" />
                <p className="font-semibold text-green-700">
                  Le déterminant vaut <Math tex="-2\neq 0" /> : la famille <Math tex="(x_1,x_2,x_3)" /> est{" "}
                  <strong>libre</strong>. Comme <Math tex="\dim\mathbb R^3=3" />, c&apos;est même une{" "}
                  <strong>base</strong> de <Math tex="\mathbb R^3" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Une famille liée par colinéarité"
            items={
              <p>
                Les vecteurs <Math tex="x_1=(1,-1,2)" /> et <Math tex="x_2=(2,-2,4)" /> forment-ils une famille
                libre de <Math tex="\mathbb R^3" /> ?
              </p>
            }
            correction={
              <>
                <p>
                  On remarque que <Math tex="x_2 = 2\,x_1" /> (chaque coordonnée de <Math tex="x_2" /> est le
                  double de celle de <Math tex="x_1" />).
                </p>
                <p>
                  Donc <Math tex="1\cdot x_2 + (-2)\cdot x_1 = \vec 0" />, avec des coefficients{" "}
                  <Math tex="(-2,1)" /> non tous nuls.
                </p>
                <p className="font-semibold text-green-700">
                  La famille <Math tex="(x_1,x_2)" /> est <strong>liée</strong> (deux vecteurs colinéaires forment
                  toujours une famille liée) — elle n&apos;engendre qu&apos;une droite vectorielle, pas tout{" "}
                  <Math tex="\mathbb R^3" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Base et dimension d&apos;un plan vectoriel"
            items={
              <p>
                Soit <Math tex="E=\{(x,y,z)\in\mathbb R^3,\ x-2y+z=0\}" />.
                <br />
                <strong>1)</strong> Montrer que <Math tex="E" /> est un sous-espace vectoriel de{" "}
                <Math tex="\mathbb R^3" />.
                <br />
                <strong>2)</strong> Déterminer une famille génératrice de <Math tex="E" />, puis une base de{" "}
                <Math tex="E" />. En déduire <Math tex="\dim E" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> <Math tex="E\subset\mathbb R^3" /> et <Math tex="(0,0,0)\in E" />. Soient{" "}
                  <Math tex="(x,y,z),(x',y',z')\in E" /> et <Math tex="\lambda,\mu\in\mathbb R" /> :{" "}
                  <Math tex="\lambda(x,y,z)+\mu(x',y',z')=(\lambda x+\mu x',\lambda y+\mu y',\lambda z+\mu z')" />,
                  et :
                </p>
                <FormulaBlock tex="(\lambda x+\mu x')-2(\lambda y+\mu y')+(\lambda z+\mu z') = \lambda(x-2y+z)+\mu(x'-2y'+z') = \lambda\times0+\mu\times0 = 0" />
                <p className="font-semibold text-green-700">
                  Donc la combinaison est dans <Math tex="E" /> : <Math tex="E" /> est un sous-espace vectoriel de{" "}
                  <Math tex="\mathbb R^3" />.
                </p>
                <p>
                  <strong>2)</strong> Dans <Math tex="E" />, <Math tex="x=2y-z" />, donc :
                </p>
                <FormulaBlock tex="(x,y,z) = (2y-z,\,y,\,z) = y\,(2,1,0) + z\,(-1,0,1)" />
                <p>
                  Donc <Math tex="\big((2,1,0),(-1,0,1)\big)" /> engendre <Math tex="E" />. Ces deux vecteurs ne
                  sont pas colinéaires, donc la famille est libre : c&apos;est une base de <Math tex="E" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dim E = 2" /> (<Math tex="E" /> est un plan vectoriel).
                </p>
              </>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Une base de ℝ₂[X] centrée en 1"
            items={
              <p>
                Montrer que <Math tex="\big(1,\ (X-1),\ (X-1)^2\big)" /> est une base de{" "}
                <Math tex="\mathbb R_2[X]" /> (polynômes de degré <Math tex="\leq 2" />).
              </p>
            }
            correction={
              <>
                <p>
                  Supposons <Math tex="a\cdot1 + b(X-1) + c(X-1)^2 = 0" /> (polynôme nul), avec{" "}
                  <Math tex="a,b,c\in\mathbb R" />. En développant :
                </p>
                <FormulaBlock tex="cX^2 + (b-2c)X + (a-b+c) = 0" />
                <p>
                  Un polynôme est nul si et seulement si tous ses coefficients sont nuls :{" "}
                  <Math tex="c=0" />, puis <Math tex="b-2c=0\Rightarrow b=0" />, puis{" "}
                  <Math tex="a-b+c=0\Rightarrow a=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  La famille est donc <strong>libre</strong>. Comme <Math tex="\dim\mathbb R_2[X]=3" /> et que la
                  famille compte 3 vecteurs libres, c&apos;est une <strong>base</strong> de{" "}
                  <Math tex="\mathbb R_2[X]" /> (tout polynôme <Math tex="P" /> de degré <Math tex="\leq 2" /> s&apos;y
                  décompose via <Math tex="P=P(1)+P'(1)(X-1)+\dfrac{P''(1)}2(X-1)^2" />).
                </p>
              </>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Les suites convergentes forment un sous-espace vectoriel"
            items={
              <p>
                On note <Math tex="\mathcal S" /> l&apos;ensemble des suites réelles, muni de sa structure naturelle
                de <Math tex="\mathbb R" />-espace vectoriel. Montrer que l&apos;ensemble{" "}
                <Math tex="C" /> des suites réelles <strong>convergentes</strong> est un sous-espace vectoriel de{" "}
                <Math tex="\mathcal S" />.
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="C\subset\mathcal S" />, et la suite constante nulle converge vers <Math tex="0" />,
                  donc <Math tex="C\neq\varnothing" />.
                </p>
                <p>
                  Soient <Math tex="(u_n)" /> et <Math tex="(v_n)" /> deux suites convergentes, de limites{" "}
                  <Math tex="\ell" /> et <Math tex="\ell'" />, et <Math tex="\lambda,\mu\in\mathbb R" />. D&apos;après
                  les théorèmes généraux sur les limites (limite d&apos;une somme, limite d&apos;un produit par une
                  constante), la suite <Math tex="(\lambda u_n+\mu v_n)" /> converge, et :
                </p>
                <FormulaBlock tex="\lim_{n\to+\infty}(\lambda u_n+\mu v_n) = \lambda\ell+\mu\ell'" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\lambda(u_n)+\mu(v_n)\in C" /> : <Math tex="C" /> est un sous-espace vectoriel de{" "}
                  <Math tex="\mathcal S" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Quatre vecteurs, pas une base"
            items={
              <p>
                Dans <Math tex="\mathcal M_2(\mathbb R)" /> (de dimension 4), on considère{" "}
                <Math tex="A_1=\begin{pmatrix}1&1\\0&0\end{pmatrix}" />,{" "}
                <Math tex="A_2=\begin{pmatrix}1&0\\1&0\end{pmatrix}" />,{" "}
                <Math tex="A_3=\begin{pmatrix}0&1\\0&1\end{pmatrix}" />,{" "}
                <Math tex="A_4=\begin{pmatrix}0&0\\1&1\end{pmatrix}" />. La famille{" "}
                <Math tex="(A_1,A_2,A_3,A_4)" /> est-elle une base de <Math tex="\mathcal M_2(\mathbb R)" /> ?
              </p>
            }
            correction={
              <>
                <p>
                  Cherchons <Math tex="(a,b,c,d)\in\mathbb R^4" /> tels que{" "}
                  <Math tex="aA_1+bA_2+cA_3+dA_4=0" /> :
                </p>
                <FormulaBlock tex="aA_1+bA_2+cA_3+dA_4 = \begin{pmatrix}a+b & a+c\\ b+d & c+d\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}" />
                <p>
                  On obtient le système <Math tex="a+b=0" />, <Math tex="a+c=0" />, <Math tex="b+d=0" />,{" "}
                  <Math tex="c+d=0" />. En posant <Math tex="a=1" /> : <Math tex="b=-1" />, <Math tex="c=-1" />,{" "}
                  <Math tex="d=1" />. On vérifie : <Math tex="b+d=-1+1=0" /> ✓ et <Math tex="c+d=-1+1=0" /> ✓.
                </p>
                <p>
                  Le quadruplet <Math tex="(1,-1,-1,1)" /> est une solution <strong>non triviale</strong>{" "}
                  (<Math tex="A_1-A_2-A_3+A_4=0" />).
                </p>
                <p className="font-semibold text-green-700">
                  La famille <Math tex="(A_1,A_2,A_3,A_4)" /> est <strong>liée</strong> : ce n&apos;est{" "}
                  <strong>pas</strong> une base de <Math tex="\mathcal M_2(\mathbb R)" />, même si elle compte
                  autant de vecteurs que la dimension de l&apos;espace — il faut toujours vérifier
                  l&apos;indépendance, le simple décompte ne suffit pas.
                </p>
              </>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
