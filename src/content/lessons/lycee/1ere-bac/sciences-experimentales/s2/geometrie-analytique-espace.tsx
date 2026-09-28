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
  title: "Géométrie analytique de l'espace · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur la géométrie analytique de l'espace pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : repère et coordonnées, déterminant de trois vecteurs, colinéarité et coplanarité analytiques, représentation paramétrique et équations cartésiennes d'une droite, représentation paramétrique et équation cartésienne d'un plan, positions relatives de droites et de plans, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 2",
  heroTitle: "Géométrie analytique de l'espace",
  heroSubtitle:
    "Passer des vecteurs aux coordonnées : équations de droites et de plans, et les critères analytiques du parallélisme et de l'intersection.",
  footerNote: "Géométrie analytique de l'espace · Mathématiques, 1ère année Baccalauréat, semestre 2.",
  sections: [
    { id: "cours-coordonnees", label: "Coordonnées" },
    { id: "cours-determinant", label: "Déterminant" },
    { id: "cours-droites", label: "Droites" },
    { id: "cours-plans", label: "Plans" },
    { id: "cours-positions", label: "Positions relatives" },
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
          { value: "3×3", label: "déterminant" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-coordonnees"
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
          <div className="relative flex select-none items-center font-serif text-white italic">
            <Math tex="ax+by+cz+d=0" />
          </div>
        }
      />

      {/* ===================== I. COORDONNÉES ===================== */}
      <LessonSection
        id="cours-coordonnees"
        kicker="01 · Nommer les points par des nombres"
        title="Repère et coordonnées dans l'espace"
        tone="light"
        description="Une base et un repère de l'espace se construisent avec quatre points non coplanaires — tout point, tout vecteur, s'écrit alors de façon unique."
      >
        <CourseBlock numeral="I" title="Base et repère de l'espace">
          <Box title="Définition" tone="def">
            <p>
              Soient <Math tex="O,I,J,K" /> quatre points non coplanaires, et{" "}
              <Math tex="\vec\imath=\overrightarrow{OI}" />, <Math tex="\vec\jmath=\overrightarrow{OJ}" />,{" "}
              <Math tex="\vec k=\overrightarrow{OK}" />. Le triplet <Math tex="(\vec\imath,\vec\jmath,\vec k)" />{" "}
              est une <strong className="text-foreground">base</strong> de l&apos;espace, et{" "}
              <Math tex="(O;\vec\imath,\vec\jmath,\vec k)" /> un{" "}
              <strong className="text-foreground">repère</strong> de l&apos;espace.
            </p>
          </Box>
          <Callout variant="success" title="Propriété fondamentale">
            <p>
              Pour tout point <Math tex="M" /> (resp. tout vecteur <Math tex="\vec u" />), il existe un{" "}
              <strong>unique</strong> triplet <Math tex="(x,y,z)\in\mathbb R^3" /> tel que :
            </p>
            <MathBlock tex="\overrightarrow{OM}=x\vec\imath+y\vec\jmath+z\vec k\qquad\big(\text{resp. }\vec u=x\vec\imath+y\vec\jmath+z\vec k\big)" />
            <p>
              On note <Math tex="M(x,y,z)" /> et <Math tex="\vec u(x,y,z)" /> — <Math tex="x" /> l&apos;abscisse,{" "}
              <Math tex="y" /> l&apos;ordonnée, <Math tex="z" /> la côte.
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. DÉTERMINANT ===================== */}
      <LessonSection
        id="cours-determinant"
        kicker="02 · Le nombre qui décide de tout"
        title="Déterminant de trois vecteurs"
        tone="muted"
        description="Un seul calcul remplace toutes les vérifications géométriques : colinéarité et coplanarité deviennent des égalités à zéro."
      >
        <CourseBlock numeral="II" title="Colinéarité analytique">
          <Box title="Propriété" tone="def">
            <p>
              <Math tex="\vec u(x,y,z)" /> et <Math tex="\vec v(x',y',z')" /> non nuls sont{" "}
              <strong className="text-foreground">colinéaires</strong> ssi :
            </p>
            <MathBlock tex="\begin{vmatrix}x&x'\\y&y'\end{vmatrix}=0,\qquad \begin{vmatrix}x&x'\\z&z'\end{vmatrix}=0,\qquad \begin{vmatrix}y&y'\\z&z'\end{vmatrix}=0" />
            <p>
              où <Math tex="\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc" />. Il suffit qu&apos;un seul de ces
              déterminants soit non nul pour conclure que <Math tex="\vec u,\vec v" /> ne sont pas colinéaires.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="Déterminant de trois vecteurs, coplanarité">
          <Box title="Définition" tone="def">
            <p>
              Pour <Math tex="\vec u(x,y,z)" />, <Math tex="\vec v(x',y',z')" />,{" "}
              <Math tex="\vec w(x'',y'',z'')" /> :
            </p>
            <MathBlock tex="\det(\vec u,\vec v,\vec w)=\begin{vmatrix}x&x'&x''\\y&y'&y''\\z&z'&z''\end{vmatrix}=x\begin{vmatrix}y'&y''\\z'&z''\end{vmatrix}-y\begin{vmatrix}x'&x''\\z'&z''\end{vmatrix}+z\begin{vmatrix}x'&x''\\y'&y''\end{vmatrix}" />
          </Box>
          <Callout variant="success" title="Le critère de coplanarité">
            <MathBlock tex="\vec u,\vec v,\vec w\ \text{coplanaires}\iff \det(\vec u,\vec v,\vec w)=0" />
          </Callout>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="\vec u(1,2,3)" />, <Math tex="\vec v(3,1,2)" />, <Math tex="\vec w(2,3,1)" /> :
            </p>
            <MathBlock tex="\det(\vec u,\vec v,\vec w)=1(1-6)-2(3-4)+3(9-2)=-5+2+21=18\neq0" />
            <p className="font-semibold text-green-700">
              Donc <Math tex="\vec u,\vec v,\vec w" /> ne sont pas coplanaires.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. DROITES ===================== */}
      <LessonSection
        id="cours-droites"
        kicker="03 · Décrire une droite par des équations"
        title="Représentation paramétrique et équations cartésiennes d'une droite"
        tone="light"
        description="Deux écritures pour le même objet : l'une décrit comment le parcourir, l'autre comment tester si un point y appartient."
      >
        <CourseBlock numeral="IV" title="Représentation paramétrique d'une droite">
          <Box title="Définition" tone="def">
            <p>
              Soit <Math tex="A(x_A,y_A,z_A)" /> et <Math tex="\vec u(a,b,c)\neq\vec0" />. La droite{" "}
              <Math tex="\mathcal D(A,\vec u)" /> a pour représentation paramétrique :
            </p>
            <MathBlock tex="\begin{cases}x=x_A+at\\y=y_A+bt\\z=z_A+ct\end{cases}\quad(t\in\mathbb R)" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Deux équations cartésiennes d'une droite">
          <Box title="Propriété" tone="prop">
            <p>
              Si <Math tex="a,b,c" /> sont tous non nuls, la droite <Math tex="\mathcal D(A,\vec u)" /> admet
              pour équations cartésiennes :
            </p>
            <MathBlock tex="\dfrac{x-x_A}{a}=\dfrac{y-y_A}{b}=\dfrac{z-z_A}{c}" />
            <p>
              (Si l&apos;une des composantes de <Math tex="\vec u" /> est nulle, on adapte le système en
              conséquence — voir l&apos;exemple ci-dessous.)
            </p>
          </Box>
          <Box title="Exemple" tone="def">
            <p>
              <Math tex="A(1,1,0)" />, <Math tex="B(2,-1,1)" /> : <Math tex="\overrightarrow{AB}(1,-2,1)" />, donc{" "}
              deux équations cartésiennes de <Math tex="(AB)" /> sont{" "}
              <Math tex="\dfrac{x-1}{1}=\dfrac{y-1}{-2}=z" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. PLANS ===================== */}
      <LessonSection
        id="cours-plans"
        kicker="04 · Décrire un plan par une seule équation"
        title="Représentation paramétrique et équation cartésienne d'un plan"
        tone="muted"
        description="Un plan a besoin de deux paramètres pour être parcouru — mais d'une seule équation pour être testé."
      >
        <CourseBlock numeral="VI" title="Représentation paramétrique d'un plan">
          <Box title="Définition" tone="def">
            <p>
              Soit <Math tex="A(x_A,y_A,z_A)" />, <Math tex="\vec u(a,b,c)" /> et{" "}
              <Math tex="\vec v(a',b',c')" /> non colinéaires. Le plan <Math tex="P(A,\vec u,\vec v)" /> a pour
              représentation paramétrique :
            </p>
            <MathBlock tex="\begin{cases}x=x_A+at+a't'\\y=y_A+bt+b't'\\z=z_A+ct+c't'\end{cases}\quad(t,t')\in\mathbb R^2" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Équation cartésienne d'un plan">
          <Callout variant="success" title="Le lien avec le déterminant">
            <p>
              Un point <Math tex="M(x,y,z)" /> appartient au plan <Math tex="P(A,\vec u,\vec v)" /> ssi{" "}
              <Math tex="\overrightarrow{AM}" />, <Math tex="\vec u" />, <Math tex="\vec v" /> sont coplanaires :
            </p>
            <MathBlock tex="M\in P(A,\vec u,\vec v)\iff \det\big(\overrightarrow{AM},\vec u,\vec v\big)=0" />
            <p>
              En développant ce déterminant, on obtient une équation de la forme{" "}
              <Math tex="ax+by+cz+d=0" /> avec <Math tex="(a,b,c)\neq(0,0,0)" />.
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== V. POSITIONS RELATIVES ===================== */}
      <LessonSection
        id="cours-positions"
        kicker="05 · Deux objets, quelle relation ?"
        title="Positions relatives — droites, plans"
        tone="light"
        description="Colinéarité et coplanarité, réunies, tranchent entièrement la question."
      >
        <CourseBlock numeral="VIII" title="Deux droites">
          <Box title="Critère" tone="def">
            <p>
              <Math tex="\mathcal D(A,\vec u)" /> et <Math tex="\Delta(B,\vec v)" /> :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="\vec u,\vec v" /> colinéaires et <Math tex="A\in\Delta" /> : droites confondues.
              </li>
              <li>
                <Math tex="\vec u,\vec v" /> colinéaires et <Math tex="A\notin\Delta" /> : strictement
                parallèles.
              </li>
              <li>
                <Math tex="\vec u,\vec v" /> non colinéaires et <Math tex="\det(\overrightarrow{AB},\vec u,\vec v)=0" /> :
                sécantes.
              </li>
              <li>
                <Math tex="\vec u,\vec v" /> non colinéaires et <Math tex="\det(\overrightarrow{AB},\vec u,\vec v)\neq0" /> :
                non coplanaires.
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Une droite et un plan">
          <Box title="Critère" tone="prop">
            <p>
              <Math tex="\mathcal D(A,\vec w)" /> et <Math tex="P(B,\vec u,\vec v)" /> :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="\det(\vec u,\vec v,\vec w)=0" /> et <Math tex="A\in P" /> : <Math tex="\mathcal D\subset P" />.
              </li>
              <li>
                <Math tex="\det(\vec u,\vec v,\vec w)=0" /> et <Math tex="A\notin P" /> : strictement
                parallèles.
              </li>
              <li>
                <Math tex="\det(\vec u,\vec v,\vec w)\neq0" /> : <Math tex="\mathcal D" /> perce <Math tex="P" />{" "}
                en un point unique.
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="X" title="Deux plans">
          <Box title="Avec les équations cartésiennes" tone="def">
            <p>
              <Math tex="(P):ax+by+cz+d=0" /> et <Math tex="(P'):a'x+b'y+c'z+d'=0" /> :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Se coupent suivant une droite ssi <Math tex="ab'-ba'\neq0" /> ou{" "}
                <Math tex="ac'-ca'\neq0" /> ou <Math tex="bc'-cb'\neq0" />.
              </li>
              <li>
                Parallèles ssi <Math tex="\exists k\neq0" />, <Math tex="a'=ka,\ b'=kb,\ c'=kc" />.
              </li>
              <li>
                Confondus ssi en plus <Math tex="d'=kd" />.
              </li>
            </ul>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="06 · À toi de jouer"
        title="Exercices · Géométrie analytique de l'espace"
        tone="muted"
        description="6 exercices corrigés couvrant colinéarité, coplanarité, équation de plan, appartenance à une droite, et les deux types de positions relatives."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre géométrie analytique de l'espace, et l'année, sont terminés.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Colinéarité analytique"
            itemsLabel="2 vérifications"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="\vec u(1,-1,2)" />, <Math tex="\vec v(-2,2,-4)" /> et{" "}
                <Math tex="\vec w(1,1,2)" />. Étudier la colinéarité de <Math tex="\vec u,\vec v" />, puis de{" "}
                <Math tex="\vec u,\vec w" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On remarque directement <Math tex="\vec v=-2\vec u" /> (car{" "}
                  <Math tex="(-2,2,-4)=-2\times(1,-1,2)" />).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\vec u" /> et <Math tex="\vec v" /> sont colinéaires.
                </p>
                <p>
                  Pour <Math tex="\vec u,\vec w" /> :{" "}
                  <Math tex="\begin{vmatrix}1&1\\-1&1\end{vmatrix}=1\times1-1\times(-1)=2\neq0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\vec u" /> et <Math tex="\vec w" /> ne sont pas colinéaires.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Coplanarité par déterminant"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="\vec u(2,-4,3)" />, <Math tex="\vec v(-1,1,2)" /> et{" "}
                <Math tex="\vec w(3,1,-1)" />. Les vecteurs <Math tex="\vec u,\vec v,\vec w" /> sont-ils
                coplanaires ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\det(\vec u,\vec v,\vec w)=2\begin{vmatrix}1&1\\2&-1\end{vmatrix}-(-4)\begin{vmatrix}-1&3\\2&-1\end{vmatrix}+3\begin{vmatrix}-1&3\\1&1\end{vmatrix}" />
                <MathBlock tex="=2(-1-2)+4(1-6)+3(-1-3)=-6-20-12=-38\neq0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\vec u,\vec v,\vec w" /> ne sont pas coplanaires.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Équation cartésienne d'un plan"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer l&apos;équation cartésienne du plan <Math tex="P(A,\vec u,\vec v)" /> qui passe par{" "}
                <Math tex="A(1,-3,1)" /> et de vecteurs directeurs <Math tex="\vec u(-2,4,1)" /> et{" "}
                <Math tex="\vec v(-1,0,2)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="M(x,y,z)\in P\iff\det(\overrightarrow{AM},\vec u,\vec v)=0" />, avec{" "}
                  <Math tex="\overrightarrow{AM}(x-1,y+3,z-1)" /> :
                </p>
                <MathBlock tex="(x-1)\begin{vmatrix}4&0\\1&2\end{vmatrix}-(y+3)\begin{vmatrix}-2&-1\\1&2\end{vmatrix}+(z-1)\begin{vmatrix}-2&-1\\4&0\end{vmatrix}=0" />
                <MathBlock tex="8(x-1)-3(y+3)+4(z-1)=0\ \Longrightarrow\ 8x-8-3y-9+4z-4=0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(P):8x+3y+4z-3=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Appartenance à une droite"
            itemsLabel="1 vérification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(-1,1,0)" />, <Math tex="B(2,-1,1)" /> et <Math tex="C(0,-1,2)" />.
                Déterminer deux équations cartésiennes de <Math tex="(AB)" /> et dire si{" "}
                <Math tex="C\in(AB)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AB}(3,-2,1)" />, donc deux équations cartésiennes de{" "}
                  <Math tex="(AB)" /> sont <Math tex="\dfrac{x+1}{3}=\dfrac{y-1}{-2}=z" />.
                </p>
                <p>
                  Pour <Math tex="C(0,-1,2)" /> : <Math tex="\dfrac{0+1}{3}=\dfrac13" /> et{" "}
                  <Math tex="\dfrac{-1-1}{-2}=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\dfrac13\neq1" />, les coordonnées de <Math tex="C" /> ne vérifient pas les
                  équations : <Math tex="C\notin(AB)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Position relative de deux droites"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier la position relative de{" "}
                <Math tex="(D):\begin{cases}x=-2+k\\y=2-2k\\z=4+k\end{cases}" /> et{" "}
                <Math tex="(\Delta):\begin{cases}x=-1-t\\y=2t\\z=1+t\end{cases}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\vec u(1,-2,1)" /> dirige <Math tex="(D)" />, <Math tex="\vec v(-1,2,1)" /> dirige{" "}
                  <Math tex="(\Delta)" />. Comme <Math tex="\begin{vmatrix}1&-1\\-2&2\end{vmatrix}=2-2=0" /> mais{" "}
                  <Math tex="\begin{vmatrix}1&-1\\1&1\end{vmatrix}=1+1=2\neq0" />, <Math tex="\vec u,\vec v" /> ne
                  sont pas colinéaires.
                </p>
                <p>On résout le système d&apos;intersection (en identifiant les trois coordonnées) :</p>
                <MathBlock tex="\begin{cases}-2+k=-1-t\\2-2k=2t\\4+k=1+t\end{cases}\iff\begin{cases}k+t=1\\k+t=1\\k-t=-3\end{cases}" />
                <p className="font-semibold text-green-700">
                  Ce système admet la solution unique <Math tex="k=-1,\ t=2" />, qui donne le même point dans
                  les deux représentations : <Math tex="(D)" /> et <Math tex="(\Delta)" /> sont donc sécantes,
                  au point <Math tex="E(-3,4,3)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Position relative d'une droite et d'un plan"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier la position relative de{" "}
                <Math tex="(D):\begin{cases}x=2-4t\\y=-1+2t\\z=3t\end{cases}" /> et du plan{" "}
                <Math tex="(P):3x+2y+z+1=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On remplace <Math tex="x,y,z" /> par leurs expressions paramétriques dans l&apos;équation de{" "}
                  <Math tex="(P)" /> :
                </p>
                <MathBlock tex="3(2-4t)+2(-1+2t)+3t+1=0\iff6-12t-2+4t+3t+1=0\iff5-5t=0\iff t=1" />
                <p className="font-semibold text-green-700">
                  Le coefficient de <Math tex="t" /> n&apos;est pas nul : l&apos;équation admet une solution
                  unique <Math tex="t=1" />, donc <Math tex="(D)" /> n&apos;est pas parallèle à <Math tex="(P)" />{" "}
                  — elle perce le plan en un point unique.
                </p>
                <p>
                  En remplaçant <Math tex="t=1" /> dans la représentation paramétrique de <Math tex="(D)" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="(D)" /> perce <Math tex="(P)" /> au point <Math tex="A(-2,1,3)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
