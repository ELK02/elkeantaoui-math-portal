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
  title: "Probabilités · Cours et exercices | 2ème Bac Sciences Math",
  description:
    "Cours complet de probabilités : rappels de dénombrement, vocabulaire des probabilités, probabilité conditionnelle, formule des probabilités totales, événements indépendants, variables aléatoires (loi, espérance, variance, fonction de répartition), épreuves de Bernoulli et loi binomiale, avec 11 exercices intégralement corrigés. 2ème Bac Sciences Mathématiques (A et B), semestre 2.",
  kicker: "2ème Bac Sciences Math · Semestre 2",
  heroTitle: "Probabilités",
  heroSubtitle:
    "Dénombrement, probabilité conditionnelle, indépendance, variables aléatoires et loi binomiale : le cours complet, puis 11 exercices corrigés en détail.",
  footerNote: "Probabilités · Mathématiques, 2ème Bac Sciences Mathématiques, semestre 2.",
  sections: [
    { id: "cours-denombrement", label: "Dénombrement" },
    { id: "cours-axiomes", label: "Vocabulaire & axiomes" },
    { id: "cours-conditionnelle", label: "Probabilité conditionnelle" },
    { id: "cours-variables", label: "Variables aléatoires" },
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

/** Small labelled box for grouped remarks/lists. */
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
          { value: "5", label: "notions du cours" },
          { value: "11", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-denombrement"
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
          <svg role="img" aria-label="Figure 1 — Probabilités : points A, B ; A∩B, P(A∪B)=P(A)+P(B)−P(A∩B)" viewBox="0 0 240 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <circle cx="90" cy="100" r="66" fill="none" stroke="white" strokeWidth="1.6" opacity="0.85" />
            <circle cx="150" cy="100" r="66" fill="none" stroke="#fb923c" strokeWidth="2" />
            <text x="52" y="60" fontSize="14" fontWeight="700" fill="white">A</text>
            <text x="182" y="60" fontSize="14" fontWeight="700" fill="#fb923c">B</text>
            <text x="112" y="104" fontSize="12" fill="white" opacity="0.85">A∩B</text>
            <text x="94" y="180" fontSize="12" fill="white" opacity="0.7">P(A∪B)=P(A)+P(B)−P(A∩B)</text>
          </svg>
        }
      />

      {/* ===================== I. RAPPELS DE DÉNOMBREMENT ===================== */}
      <LessonSection
        id="cours-denombrement"
        kicker="01 · Avant de compter les chances"
        title="Rappels de dénombrement"
        tone="light"
        description="Calculer une probabilité en situation d&apos;équiprobabilité suppose de savoir compter les cas favorables et les cas possibles."
      >
        <CourseBlock numeral="I" title="Permutations, arrangements, combinaisons">
          <Box title="Principe multiplicatif">
            <p>
              Si une expérience se déroule en <Math tex="k" /> étapes successives offrant respectivement{" "}
              <Math tex="n_1,n_2,\dots,n_k" /> possibilités, alors le nombre total d&apos;issues est{" "}
              <Math tex="n_1\times n_2\times\cdots\times n_k" />.
            </p>
          </Box>
          <div className="grid gap-4 sm:grid-cols-3">
            <Box title="Permutations">
              <p>
                Nombre de façons d&apos;ordonner <Math tex="n" /> objets distincts :
              </p>
              <FormulaBlock tex="n! = n\times(n-1)\times\cdots\times 1" />
            </Box>
            <Box title="Arrangements">
              <p>
                Nombre de façons de choisir et d&apos;ordonner <Math tex="p" /> objets parmi <Math tex="n" /> (sans
                répétition) :
              </p>
              <FormulaBlock tex="A_n^p = \dfrac{n!}{(n-p)!}" />
            </Box>
            <Box title="Combinaisons">
              <p>
                Nombre de façons de choisir <Math tex="p" /> objets parmi <Math tex="n" />, <strong>sans
                tenir compte de l&apos;ordre</strong> :
              </p>
              <FormulaBlock tex="C_n^p = \dfrac{n!}{p!\,(n-p)!}" />
            </Box>
          </div>
          <Callout variant="info" title="Quand utiliser quoi ?">
            <p>
              <strong>Tirage successif avec remise</strong> (ou avec ordre, répétitions possibles) : principe
              multiplicatif, <Math tex="n^p" /> si <Math tex="p" /> tirages parmi <Math tex="n" /> possibilités.{" "}
              <strong>Tirage successif sans remise</strong> (avec ordre) : arrangements <Math tex="A_n^p" />.{" "}
              <strong>Tirage simultané</strong> (sans ordre) : combinaisons <Math tex="C_n^p" />.
            </p>
          </Callout>
          <Example title="Exemple — une urne de 12 boules">
            <p>
              Une urne contient 12 boules (5 rouges, 4 blanches, 3 bleues). On tire 3 boules{" "}
              <strong>simultanément</strong>. Le nombre de tirages possibles est{" "}
              <Math tex="C_{12}^3=\dfrac{12!}{3!\,9!}=220" />. Le nombre de tirages amenant 3 boules rouges est{" "}
              <Math tex="C_5^3=10" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. VOCABULAIRE ET AXIOMES ===================== */}
      <LessonSection
        id="cours-axiomes"
        kicker="02 · Le cadre théorique"
        title="Vocabulaire des probabilités et axiomes"
        tone="muted"
        description="Toute expérience aléatoire est modélisée par un univers, des événements, et une probabilité qui pèse chaque événement."
      >
        <CourseBlock numeral="II" title="Univers et événements">
          <p>
            Une expérience est <strong>aléatoire</strong> si on ne peut pas prévoir son résultat avec certitude. On
            associe à cette expérience l&apos;ensemble <Math tex="\Omega" /> de tous les résultats possibles,
            appelé <strong>univers</strong>, dont les éléments sont les <strong>éventualités</strong>. On note{" "}
            <Math tex="\text{Card}(\Omega)" /> le nombre d&apos;éléments de <Math tex="\Omega" />.
          </p>
          <p>
            Un <strong>événement</strong> est une partie de <Math tex="\Omega" />. Un événement réduit à une seule
            éventualité est dit <strong>élémentaire</strong>. L&apos;événement <Math tex="\Omega" /> est
            l&apos;événement <strong>certain</strong>, et <Math tex="\varnothing" /> l&apos;événement{" "}
            <strong>impossible</strong>.
          </p>
          <Box title="Opérations sur les événements">
            <p>
              Si <Math tex="A" /> et <Math tex="B" /> sont deux événements : <Math tex="\bar A" /> (ou{" "}
              <Math tex="A^c" />) est l&apos;événement <strong>contraire</strong> de <Math tex="A" /> ;{" "}
              <Math tex="A\cup B" /> se réalise si <Math tex="A" /> ou <Math tex="B" /> (ou les deux) se réalise ;{" "}
              <Math tex="A\cap B" /> se réalise si <Math tex="A" /> et <Math tex="B" /> se réalisent tous les deux.{" "}
              <Math tex="A" /> et <Math tex="B" /> sont dits <strong>incompatibles</strong> si{" "}
              <Math tex="A\cap B=\varnothing" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="La probabilité d&apos;un événement">
          <Callout variant="success" title="Axiomes d&apos;une probabilité">
            Une probabilité <Math tex="P" /> sur <Math tex="\Omega" /> associe à chaque événement <Math tex="A" />{" "}
            un nombre <Math tex="P(A)" /> tel que :
            <FormulaBlock tex="\begin{gathered} 0\leq P(A)\leq 1,\quad P(\Omega)=1,\quad P(\varnothing)=0 \\ \text{si } A\cap B=\varnothing,\ P(A\cup B)=P(A)+P(B) \end{gathered}" />
          </Callout>
          <Box title="Situation d&apos;équiprobabilité">
            <p>
              Si toutes les éventualités de <Math tex="\Omega" /> ont la même probabilité de se réaliser (dé
              équilibré, boules indiscernables tirées au hasard...), alors pour tout événement <Math tex="A" /> :
            </p>
            <FormulaBlock tex="P(A) = \dfrac{\text{Card}(A)}{\text{Card}(\Omega)} = \dfrac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}" />
          </Box>
          <Callout variant="info" title="Propriétés à connaître">
            <p>Pour tous événements <Math tex="A,B" /> de <Math tex="\Omega" /> :</p>
            <FormulaBlock tex="\begin{gathered} P(\bar A) = 1-P(A) \\ P(A\cup B) = P(A)+P(B)-P(A\cap B) \\ P(B\setminus A) = P(B)-P(A\cap B) \end{gathered}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV, V. PROBABILITÉ CONDITIONNELLE ET INDÉPENDANCE ===================== */}
      <LessonSection
        id="cours-conditionnelle"
        kicker="03 · Quand un événement en éclaire un autre"
        title="Probabilité conditionnelle et indépendance"
        tone="light"
        description="Savoir qu&apos;un événement est réalisé modifie en général la probabilité qu&apos;on accorde à un autre : c&apos;est toute l&apos;idée du conditionnement."
      >
        <CourseBlock numeral="IV" title="Probabilité conditionnelle">
          <Callout variant="success" title="Définition">
            <p>
              Soit <Math tex="B" /> un événement de probabilité non nulle. La <strong>probabilité conditionnelle</strong>{" "}
              de <Math tex="A" /> sachant <Math tex="B" />, notée <Math tex="P_B(A)" /> (ou{" "}
              <Math tex="P(A\,|\,B)" />), est :
            </p>
            <FormulaBlock tex="P_B(A) = \dfrac{P(A\cap B)}{P(B)}" />
          </Callout>
          <p className="text-sm text-foreground-muted">
            On en déduit la <strong>formule des probabilités composées</strong> :{" "}
            <Math tex="P(A\cap B) = P(B)\times P_B(A) = P(A)\times P_A(B)" /> (si{" "}
            <Math tex="P(A)\neq 0" /> et <Math tex="P(B)\neq 0" />).
          </p>
          <Callout variant="warning" title="Partition de l&apos;univers et probabilités totales">
            <p>
              Les événements <Math tex="A_1,A_2,\dots,A_n" /> forment une <strong>partition</strong> de{" "}
              <Math tex="\Omega" /> s&apos;ils sont deux à deux incompatibles et si leur réunion est{" "}
              <Math tex="\Omega" />. Si de plus <Math tex="P(A_i)\neq 0" /> pour tout <Math tex="i" />, alors pour
              tout événement <Math tex="B" /> :
            </p>
            <FormulaBlock tex="P(B) = \sum_{i=1}^n P(A_i)\times P_{A_i}(B)" caption="loi des probabilités totales" />
          </Callout>
          <p className="text-sm text-foreground-muted">
            En pratique, on représente souvent la situation par un <strong>arbre pondéré</strong> : la probabilité
            d&apos;un chemin est le produit des probabilités portées sur ses branches, et la somme des probabilités
            partant d&apos;un même nœud vaut 1.
          </p>
        </CourseBlock>

        <CourseBlock numeral="V" title="Événements indépendants">
          <Callout variant="success" title="Définition">
            <p>
              Deux événements <Math tex="A" /> et <Math tex="B" /> de probabilité non nulle sont{" "}
              <strong>indépendants</strong> si et seulement si l&apos;une des conditions équivalentes suivantes est
              vérifiée :
            </p>
            <FormulaBlock tex="\begin{gathered} P_B(A) = P(A) \\ \text{ou}\quad P_A(B) = P(B) \\ \text{ou}\quad P(A\cap B) = P(A)\times P(B) \end{gathered}" />
          </Callout>
          <Callout variant="warning" title="Attention à ne pas confondre">
            <strong>Indépendants</strong> (<Math tex="P(A\cap B)=P(A)P(B)" />) et <strong>incompatibles</strong> (
            <Math tex="A\cap B=\varnothing" />) sont deux notions très différentes : si{" "}
            <Math tex="P(A),P(B)>0" />, deux événements incompatibles ne sont jamais indépendants (sauf cas
            dégénéré).
          </Callout>
          <p className="text-sm text-foreground-muted">
            Propriété : si <Math tex="A" /> et <Math tex="B" /> sont indépendants, alors <Math tex="A" /> et{" "}
            <Math tex="\bar B" /> le sont aussi (de même que <Math tex="\bar A" /> et <Math tex="B" />, et{" "}
            <Math tex="\bar A" /> et <Math tex="\bar B" />).
          </p>
        </CourseBlock>
      </LessonSection>

      {/* ===================== VI, VII. VARIABLES ALÉATOIRES ET LOI BINOMIALE ===================== */}
      <LessonSection
        id="cours-variables"
        kicker="04 · Mesurer le hasard par un nombre"
        title="Variables aléatoires et loi binomiale"
        tone="muted"
        description="Une variable aléatoire associe un nombre à chaque issue : on peut alors calculer une moyenne (l&apos;espérance) et une dispersion (la variance)."
      >
        <CourseBlock numeral="VI" title="Loi de probabilité, espérance, variance">
          <Callout variant="success" title="Définition">
            <p>
              Soit <Math tex="\Omega=\{\omega_1,\dots,\omega_n\}" /> un univers fini muni d&apos;une probabilité{" "}
              <Math tex="P" />. Une <strong>variable aléatoire</strong> <Math tex="X" /> est une fonction de{" "}
              <Math tex="\Omega" /> dans <Math tex="\mathbb R" />. Si <Math tex="X" /> prend les valeurs{" "}
              <Math tex="x_1,\dots,x_r" />, on pose <Math tex="p_i = P(X=x_i)" /> : c&apos;est la{" "}
              <strong>loi de probabilité</strong> de <Math tex="X" /> (souvent présentée en tableau, avec{" "}
              <Math tex="\sum p_i = 1" />).
            </p>
          </Callout>
          <FormulaBlock tex="\begin{gathered} E(X) = \sum_{i=1}^r x_i\,p_i \\ V(X) = \sum_{i=1}^r x_i^2\,p_i - E(X)^2 \\ \sigma(X) = \sqrt{V(X)} \end{gathered}" caption="espérance, variance et écart-type" />
          <p className="text-sm text-foreground-muted">
            L&apos;espérance <Math tex="E(X)" /> représente la valeur moyenne « théorique » prise par{" "}
            <Math tex="X" /> sur un grand nombre de répétitions. La <strong>fonction de répartition</strong> de{" "}
            <Math tex="X" /> est <Math tex="F_X(x) = P(X\leq x)" /> : c&apos;est une fonction en escalier, croissante
            de 0 à 1.
          </p>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Épreuve de Bernoulli et loi binomiale">
          <Box title="Épreuve et schéma de Bernoulli">
            <p>
              Une <strong>épreuve de Bernoulli</strong> n&apos;a que deux issues : Succès (<Math tex="S" />, de
              probabilité <Math tex="p" />) et Échec (<Math tex="E" />, de probabilité <Math tex="1-p" />). Un{" "}
              <strong>schéma de Bernoulli</strong> est la répétition de <Math tex="n" /> épreuves de Bernoulli{" "}
              <strong>identiques et indépendantes</strong>.
            </p>
          </Box>
          <Callout variant="success" title="Loi binomiale">
            <p>
              Si <Math tex="X" /> compte le nombre de succès obtenus au cours d&apos;un schéma de Bernoulli à{" "}
              <Math tex="n" /> épreuves de paramètre <Math tex="p" />, on dit que <Math tex="X" /> suit la{" "}
              <strong>loi binomiale</strong> de paramètres <Math tex="n" /> et <Math tex="p" />, notée{" "}
              <Math tex="\mathcal B(n,p)" />, et :
            </p>
            <FormulaBlock tex="P(X=k) = C_n^k\,p^k(1-p)^{n-k},\quad k\in\{0,1,\dots,n\}" />
          </Callout>
          <FormulaBlock tex="\begin{gathered} E(X) = np \\ V(X) = np(1-p) \end{gathered}" caption="espérance et variance d&apos;une loi binomiale" />
          <Example title="Exemple résolu">
            <p>
              On lance 3 fois une pièce équilibrée. Soit <Math tex="X" /> le nombre de « Pile » obtenus :{" "}
              <Math tex="X\sim\mathcal B\!\left(3;\dfrac12\right)" />.
            </p>
            <p>
              <Math tex="P(X=2)=C_3^2\left(\dfrac12\right)^2\left(\dfrac12\right)^1=3\times\dfrac18=\dfrac38" />,
              et <Math tex="E(X)=3\times\dfrac12=\dfrac32" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Probabilités"
        tone="light"
        description="11 exercices corrigés, du dénombrement à la loi binomiale. Cherche sur ton cahier, puis clique pour vérifier ta réponse."
      >
        <ExerciseGroup total={11} celebrationTitle="Bravo, les 11 exercices sont vérifiés !" celebrationSubtitle="Les probabilités n&apos;ont plus de secret pour toi.">
          <ExerciseCard
            id="1"
            index={1}
            title="Tirage simultané dans une urne de 12 boules"
            items={
              <p>
                Une urne contient 12 boules indiscernables au toucher : 5 rouges, 4 blanches et 3 bleues. On tire{" "}
                <strong>simultanément</strong> 3 boules de l&apos;urne.
                <br />
                <strong>1)</strong> Déterminer le nombre de tirages possibles.
                <br />
                <strong>2)</strong> Calculer la probabilité de <Math tex="D" /> : « obtenir 3 boules de couleurs
                différentes ».
                <br />
                <strong>3)</strong> Calculer la probabilité de <Math tex="M" /> : « obtenir 3 boules de la même
                couleur ».
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> Un tirage est une combinaison de 3 boules parmi 12 :{" "}
                  <Math tex="\text{Card}(\Omega)=C_{12}^3=\dfrac{12\times11\times10}{3\times2\times1}=220" />.
                </p>
                <p>
                  <strong>2)</strong> Obtenir 3 couleurs différentes revient à choisir 1 rouge, 1 blanche et 1
                  bleue :
                </p>
                <FormulaBlock tex="P(D) = \dfrac{C_5^1\times C_4^1\times C_3^1}{C_{12}^3} = \dfrac{5\times4\times3}{220} = \dfrac{60}{220} = \dfrac{3}{11}" />
                <p>
                  <strong>3)</strong> <Math tex="M" /> = « 3 rouges » ou « 3 blanches » ou « 3 bleues », événements
                  incompatibles :
                </p>
                <FormulaBlock tex="P(M) = \dfrac{C_5^3+C_4^3+C_3^3}{220} = \dfrac{10+4+1}{220} = \dfrac{15}{220} = \dfrac{3}{44}" />
                <p className="text-xs text-foreground-muted">
                  Vérification : <Math tex="M" /> et <Math tex="D" /> ne sont pas contraires en général, mais on
                  peut vérifier que <Math tex="P(D)+P(M)\leq 1" /> (ici <Math tex="\tfrac{3}{11}+\tfrac{3}{44}=\tfrac{15}{44}<1" />
                  , les tirages « deux couleurs seulement » complètent l&apos;univers).
                </p>
              </>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Tirages successifs avec remise"
            items={
              <p>
                Une urne contient 3 boules blanches et 4 boules noires. On tire successivement et{" "}
                <strong>avec remise</strong> deux boules.
                <br />
                Calculer la probabilité de <Math tex="B" /> : « les deux boules sont blanches », de{" "}
                <Math tex="N" /> : « les deux boules sont noires », et de <Math tex="D" /> : « les deux boules sont
                de couleurs différentes ».
              </p>
            }
            correction={
              <>
                <p>
                  Comme le tirage se fait avec remise, chaque tirage suit la même loi et les deux tirages sont
                  indépendants : <Math tex="\text{Card}(\Omega)=7\times7=49" />.
                </p>
                <FormulaBlock tex="\begin{gathered} P(B) = \left(\dfrac37\right)^2 = \dfrac9{49} \\ P(N) = \left(\dfrac47\right)^2 = \dfrac{16}{49} \end{gathered}" />
                <p>
                  <Math tex="D" /> est l&apos;événement contraire de « les deux boules sont de la même couleur »
                  (<Math tex="=B\cup N" />, incompatibles) :
                </p>
                <FormulaBlock tex="P(D) = 1-P(B)-P(N) = 1-\dfrac9{49}-\dfrac{16}{49} = \dfrac{24}{49}" />
              </>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Probabilités totales avec deux urnes"
            items={
              <p>
                On dispose de deux urnes <Math tex="U_1" /> et <Math tex="U_2" />. <Math tex="U_1" /> contient 2
                boules rouges et 3 boules noires ; <Math tex="U_2" /> contient 3 boules rouges et 4 boules noires.
                On choisit au hasard une urne (avec équiprobabilité) puis on tire une boule dans l&apos;urne
                choisie. Calculer la probabilité de <Math tex="R" /> : « la boule tirée est rouge ».
              </p>
            }
            correction={
              <>
                <p>
                  Notons <Math tex="A_1" /> : « on choisit <Math tex="U_1" /> » et <Math tex="A_2" /> : « on
                  choisit <Math tex="U_2" /> ». <Math tex="A_1" /> et <Math tex="A_2" /> forment une partition de{" "}
                  <Math tex="\Omega" />, avec <Math tex="P(A_1)=P(A_2)=\dfrac12" />.
                </p>
                <p>
                  <Math tex="P_{A_1}(R)=\dfrac25" /> et <Math tex="P_{A_2}(R)=\dfrac37" />. D&apos;après la loi des
                  probabilités totales :
                </p>
                <FormulaBlock tex="P(R) = P(A_1)P_{A_1}(R)+P(A_2)P_{A_2}(R) = \dfrac12\times\dfrac25+\dfrac12\times\dfrac37 = \dfrac15+\dfrac3{14}" />
                <p>
                  En réduisant au même dénominateur 70 :{" "}
                  <Math tex="P(R)=\dfrac{14}{70}+\dfrac{15}{70}=\dfrac{29}{70}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(R)=\dfrac{29}{70}" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Vérifier une indépendance"
            items={
              <p>
                On écrit les entiers de 1 à 20 sur vingt cartons indiscernables, et on en tire un au hasard. On
                considère <Math tex="A" /> : « le numéro tiré est impair » et <Math tex="B" /> : « le numéro tiré
                est un multiple de 5 ». Les événements <Math tex="A" /> et <Math tex="B" /> sont-ils indépendants ?
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="\Omega=\{1,\dots,20\}" />, <Math tex="\text{Card}(\Omega)=20" />.{" "}
                  <Math tex="A=\{1,3,5,\dots,19\}" />, <Math tex="\text{Card}(A)=10" /> donc{" "}
                  <Math tex="P(A)=\dfrac{10}{20}=\dfrac12" />.
                </p>
                <p>
                  <Math tex="B=\{5,10,15,20\}" />, <Math tex="\text{Card}(B)=4" /> donc{" "}
                  <Math tex="P(B)=\dfrac{4}{20}=\dfrac15" />.
                </p>
                <p>
                  <Math tex="A\cap B=\{5,15\}" /> (multiples de 5 qui sont impairs), donc{" "}
                  <Math tex="P(A\cap B)=\dfrac{2}{20}=\dfrac1{10}" />.
                </p>
                <p>
                  On compare : <Math tex="P(A)\times P(B)=\dfrac12\times\dfrac15=\dfrac1{10}=P(A\cap B)" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(A\cap B)=P(A)\,P(B)" /> : les événements <Math tex="A" /> et <Math tex="B" /> sont{" "}
                  <strong>indépendants</strong>.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Loi, espérance et variance d&apos;un jeu"
            items={
              <p>
                Un jeu consiste à faire tourner une roue truquée qui rapporte, en dirhams,{" "}
                <Math tex="-2" />, <Math tex="-1" />, <Math tex="3" /> ou <Math tex="8" /> avec les probabilités
                respectives <Math tex="\dfrac{4}{10}" />, <Math tex="\dfrac{2}{10}" />, <Math tex="\dfrac{3}{10}" />{" "}
                et <Math tex="\dfrac{1}{10}" />. Soit <Math tex="X" /> le gain algébrique.
                <br />
                <strong>1)</strong> Vérifier que la loi de <Math tex="X" /> est bien une loi de probabilité.
                <br />
                <strong>2)</strong> Calculer <Math tex="E(X)" /> et interpréter le résultat.
                <br />
                <strong>3)</strong> Calculer <Math tex="V(X)" /> et <Math tex="\sigma(X)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="\dfrac{4}{10}+\dfrac{2}{10}+\dfrac{3}{10}+\dfrac{1}{10}=\dfrac{10}{10}=1" /> : c&apos;est
                  bien une loi de probabilité.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="E(X) = (-2)\times\dfrac4{10}+(-1)\times\dfrac2{10}+3\times\dfrac3{10}+8\times\dfrac1{10}" />
                </p>
                <FormulaBlock tex="E(X) = \dfrac{-8-2+9+8}{10} = \dfrac{7}{10} = 0{,}7" />
                <p>
                  En moyenne, sur un grand nombre de parties, le joueur gagne <Math tex="0{,}7" /> DH par partie :
                  le jeu lui est favorable.
                </p>
                <p>
                  <strong>3)</strong>{" "}
                  <Math tex="E(X^2) = 4\times\dfrac4{10}+1\times\dfrac2{10}+9\times\dfrac3{10}+64\times\dfrac1{10} = \dfrac{16+2+27+64}{10}=\dfrac{109}{10}" />
                </p>
                <FormulaBlock tex="V(X) = E(X^2)-E(X)^2 = \dfrac{109}{10}-\left(\dfrac{7}{10}\right)^2 = 10{,}9-0{,}49 = 10{,}41" />
                <p className="font-semibold text-green-700">
                  <Math tex="V(X)=10{,}41" /> et <Math tex="\sigma(X)=\sqrt{10{,}41}\approx3{,}22" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Loi binomiale — pièce biaisée"
            items={
              <p>
                Une pièce truquée donne « Pile » avec la probabilité <Math tex="p=\dfrac13" />. On la lance{" "}
                <Math tex="n=5" /> fois de manière indépendante ; soit <Math tex="X" /> le nombre de « Pile »
                obtenus.
                <br />
                <strong>1)</strong> Justifier que <Math tex="X\sim\mathcal B\!\left(5;\dfrac13\right)" />.
                <br />
                <strong>2)</strong> Calculer <Math tex="P(X=2)" />.
                <br />
                <strong>3)</strong> Calculer <Math tex="E(X)" /> et <Math tex="V(X)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> Les 5 lancers sont des épreuves de Bernoulli identiques et indépendantes (
                  succès = « Pile », de probabilité <Math tex="\dfrac13" />) : <Math tex="X" /> compte le nombre de
                  succès, donc <Math tex="X\sim\mathcal B\!\left(5;\dfrac13\right)" />.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="P(X=2)=C_5^2\left(\dfrac13\right)^2\left(\dfrac23\right)^3=10\times\dfrac19\times\dfrac{8}{27}" />
                </p>
                <FormulaBlock tex="P(X=2) = \dfrac{80}{243}" />
                <p>
                  <strong>3)</strong> <Math tex="E(X)=np=5\times\dfrac13=\dfrac53" /> et{" "}
                  <Math tex="V(X)=np(1-p)=5\times\dfrac13\times\dfrac23=\dfrac{10}{9}" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Loi binomiale — tirages avec remise"
            items={
              <p>
                Une urne contient 3 boules blanches et 2 boules noires. On tire une boule, on note sa couleur, on la
                remet dans l&apos;urne, et on répète cette expérience 4 fois. Soit <Math tex="X" /> le nombre de
                boules blanches obtenues.
                <br />
                <strong>1)</strong> Donner la loi de <Math tex="X" />.
                <br />
                <strong>2)</strong> Calculer <Math tex="P(X=3)" />, puis <Math tex="E(X)" /> et <Math tex="V(X)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> Le tirage avec remise rend les 4 épreuves indépendantes et identiques, de
                  probabilité de succès (« boule blanche ») <Math tex="p=\dfrac35" /> : donc{" "}
                  <Math tex="X\sim\mathcal B\!\left(4;\dfrac35\right)" />, avec{" "}
                  <Math tex="P(X=k)=C_4^k\left(\dfrac35\right)^k\left(\dfrac25\right)^{4-k}" />.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="P(X=3)=C_4^3\left(\dfrac35\right)^3\left(\dfrac25\right)^1=4\times\dfrac{27}{125}\times\dfrac25=\dfrac{216}{625}" />
                </p>
                <p>
                  <Math tex="E(X)=np=4\times\dfrac35=\dfrac{12}5=2{,}4" /> et{" "}
                  <Math tex="V(X)=np(1-p)=4\times\dfrac35\times\dfrac25=\dfrac{24}{25}=0{,}96" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Tirages successifs sans remise et conditionnement"
            items={
              <p>
                Une urne contient 25 boules : 15 blanches et 10 noires. On tire au hasard une boule, puis, sans la
                remettre, une seconde boule.
                <br />
                <strong>1)</strong> Sachant que la première boule tirée est blanche, quelle est la probabilité que
                la seconde le soit aussi ?
                <br />
                <strong>2)</strong> En déduire la probabilité de <Math tex="E" /> : « les deux boules sont
                blanches ».
                <br />
                <strong>3)</strong> Calculer la probabilité de <Math tex="G" /> : « les deux boules sont de couleurs
                différentes ».
              </p>
            }
            correction={
              <>
                <p>
                  Notons <Math tex="B_1" /> : « la 1re boule est blanche », <Math tex="B_2" /> : « la 2e boule est
                  blanche », <Math tex="N_1,N_2" /> les événements analogues pour « noire ».
                </p>
                <p>
                  <strong>1)</strong> Après un tirage d&apos;une boule blanche, il reste 24 boules dont 14 blanches
                  : <Math tex="P_{B_1}(B_2)=\dfrac{14}{24}=\dfrac{7}{12}" />.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="P(E)=P(B_1\cap B_2)=P(B_1)\times P_{B_1}(B_2)=\dfrac{15}{25}\times\dfrac{7}{12}=\dfrac{3}5\times\dfrac{7}{12}=\dfrac{7}{20}" />
                </p>
                <p>
                  <strong>3)</strong> De même, <Math tex="P_{N_1}(N_2)=\dfrac9{24}=\dfrac38" />, donc{" "}
                  <Math tex="P(N_1\cap N_2)=\dfrac{10}{25}\times\dfrac38=\dfrac25\times\dfrac38=\dfrac{3}{20}" />.
                  L&apos;événement <Math tex="G" /> est le contraire de « même couleur »{" "}
                  <Math tex="=(B_1\cap B_2)\cup(N_1\cap N_2)" /> :
                </p>
                <FormulaBlock tex="P(G) = 1-\dfrac{7}{20}-\dfrac{3}{20} = \dfrac{10}{20} = \dfrac12" />
              </>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Un code à trois chiffres"
            items={
              <p>
                Un cadenas possède un code à 3 chiffres, chacun choisi entre 1 et 9 (répétitions autorisées).
                <br />
                <strong>1)</strong> Combien y a-t-il de codes possibles ?
                <br />
                <strong>2)</strong> Combien de codes se terminent par un chiffre pair ?
                <br />
                <strong>3)</strong> Combien de codes contiennent au moins une fois le chiffre 4 ?
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> Chaque chiffre a 9 choix indépendants :{" "}
                  <Math tex="9\times9\times9=9^3=729" /> codes possibles.
                </p>
                <p>
                  <strong>2)</strong> Les deux premiers chiffres ont 9 choix chacun, le dernier doit être pair (2,
                  4, 6 ou 8, soit 4 choix) : <Math tex="9\times9\times4=324" /> codes.
                </p>
                <p>
                  <strong>3)</strong> On passe par l&apos;événement contraire « ne contient jamais le chiffre 4 » :
                  chaque chiffre a alors 8 choix, soit <Math tex="8^3=512" /> codes sans le chiffre 4. Donc :
                </p>
                <FormulaBlock tex="729 - 512 = 217" />
                <p className="font-semibold text-green-700">217 codes contiennent au moins une fois le chiffre 4.</p>
              </>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Fonction de répartition d&apos;une loi binomiale"
            items={
              <p>
                On lance 3 fois une pièce équilibrée. Soit <Math tex="X" /> le nombre de « Pile » obtenus.
                <br />
                <strong>1)</strong> Donner la loi de <Math tex="X" />.
                <br />
                <strong>2)</strong> Déterminer la fonction de répartition <Math tex="F_X" /> de <Math tex="X" />.
                <br />
                <strong>3)</strong> Calculer <Math tex="E(X)" /> et <Math tex="V(X)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> <Math tex="X\sim\mathcal B\!\left(3;\dfrac12\right)" /> :
                </p>
                <FormulaBlock tex="P(X=0)=\dfrac18,\quad P(X=1)=\dfrac38,\quad P(X=2)=\dfrac38,\quad P(X=3)=\dfrac18" />
                <p>
                  <strong>2)</strong> <Math tex="F_X(x)=P(X\leq x)" /> :
                </p>
                <FormulaBlock tex="\begin{gathered} F_X(x)=0 \text{ si } x<0 \\ F_X(x)=\tfrac18 \text{ si } 0\leq x<1 \\ F_X(x)=\tfrac48=\tfrac12 \text{ si } 1\leq x<2 \\ F_X(x)=\tfrac78 \text{ si } 2\leq x<3 \\ F_X(x)=1 \text{ si } x\geq 3 \end{gathered}" />
                <p>
                  <strong>3)</strong> <Math tex="E(X)=np=3\times\dfrac12=\dfrac32" /> et{" "}
                  <Math tex="V(X)=np(1-p)=3\times\dfrac12\times\dfrac12=\dfrac34" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Au moins un six en deux lancers"
            items={
              <p>
                On lance deux fois de suite un dé cubique équilibré. Calculer la probabilité de l&apos;événement{" "}
                <Math tex="A" /> : « obtenir au moins un 6 ».
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="\text{Card}(\Omega)=6\times6=36" />. Il est plus simple de passer par
                  l&apos;événement contraire <Math tex="\bar A" /> : « n&apos;obtenir aucun 6 », c&apos;est-à-dire
                  obtenir un chiffre parmi <Math tex="\{1,2,3,4,5\}" /> aux deux lancers :
                </p>
                <FormulaBlock tex="P(\bar A) = \left(\dfrac56\right)^2 = \dfrac{25}{36}" />
                <p className="font-semibold text-green-700">
                  <Math tex="P(A) = 1-P(\bar A) = 1-\dfrac{25}{36} = \dfrac{11}{36}" />.
                </p>
              </>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
