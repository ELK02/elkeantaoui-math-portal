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
  title: "Géométrie dans l'espace · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur la géométrie analytique de l'espace pour la 1ère année Baccalauréat Sciences Mathématiques : repère et base de l'espace, colinéarité et coplanarité analytiques (déterminants extraits, déterminant de trois vecteurs), représentation paramétrique et équations cartésiennes d'une droite, représentation paramétrique et équation cartésienne d'un plan, positions relatives de droites et de plans, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "Géométrie dans l'espace",
  heroSubtitle:
    "Passer des vecteurs aux coordonnées : équations de droites et de plans, et les critères analytiques du parallélisme et de l'intersection.",
  footerNote: "Géométrie dans l'espace · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
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
        title="Repère et base de l'espace"
        tone="light"
        description="Un repère de l'espace se construit avec un point et trois vecteurs non coplanaires — tout point, tout vecteur, s'écrit alors de façon unique."
      >
        <CourseBlock numeral="I" title="Base et repère de l'espace">
          <Box title="Définition" tone="def">
            <p>
              Soient <Math tex="\vec\imath,\vec\jmath,\vec k" /> trois vecteurs{" "}
              <strong className="text-foreground">non coplanaires</strong>. Pour tout vecteur{" "}
              <Math tex="\vec u" /> (resp. tout point <Math tex="M" />), il existe un{" "}
              <strong>unique</strong> triplet <Math tex="(x,y,z)\in\mathbb R^3" /> tel que :
            </p>
            <MathBlock tex="\vec u=x\vec\imath+y\vec\jmath+z\vec k\qquad\big(\text{resp. }\overrightarrow{OM}=x\vec\imath+y\vec\jmath+z\vec k\big)" />
            <p>
              <Math tex="B(\vec\imath,\vec\jmath,\vec k)" /> est une <strong>base</strong> de l&apos;espace
              vectoriel, et <Math tex="R(O,\vec\imath,\vec\jmath,\vec k)" /> un{" "}
              <strong>repère</strong> de l&apos;espace. On note <Math tex="M(x,y,z)" /> et{" "}
              <Math tex="\vec u(x,y,z)" />.
            </p>
          </Box>
          <Callout variant="success" title="Opérations et formules usuelles">
            <MathBlock tex="\vec u+\vec v(x+x',y+y',z+z'),\qquad k\vec u(kx,ky,kz)" />
            <MathBlock tex="\overrightarrow{AB}(x_B-x_A,y_B-y_A,z_B-z_A),\qquad AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}" />
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
              <strong className="text-foreground">colinéaires</strong> ssi les trois{" "}
              <strong>déterminants extraits</strong> sont nuls :
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
              <Math tex="\vec w(x'',y'',z'')" /> (développement suivant la première colonne) :
            </p>
            <MathBlock tex="\det(\vec u,\vec v,\vec w)=\begin{vmatrix}x&x'&x''\\y&y'&y''\\z&z'&z''\end{vmatrix}=x\begin{vmatrix}y'&y''\\z'&z''\end{vmatrix}-y\begin{vmatrix}x'&x''\\z'&z''\end{vmatrix}+z\begin{vmatrix}x'&x''\\y'&y''\end{vmatrix}" />
          </Box>
          <Callout variant="success" title="Le critère de coplanarité">
            <MathBlock tex="\vec u,\vec v,\vec w\ \text{coplanaires}\iff \det(\vec u,\vec v,\vec w)=0" />
          </Callout>
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
              Soit <Math tex="A(x_A,y_A,z_A)" /> et <Math tex="\vec u(a,b,c)\neq\vec0" />. Un point{" "}
              <Math tex="M(x,y,z)" /> appartient à <Math tex="\mathcal D(A,\vec u)" /> ssi il existe{" "}
              <Math tex="k\in\mathbb R" /> tel que <Math tex="\overrightarrow{AM}=k\vec u" /> :
            </p>
            <MathBlock tex="\begin{cases}x=x_A+ka\\y=y_A+kb\\z=z_A+kc\end{cases}\quad(k\in\mathbb R)" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Deux équations cartésiennes d'une droite">
          <Box title="Propriété" tone="prop">
            <p>
              Si <Math tex="abc\neq0" />, la droite <Math tex="\mathcal D(A,\vec u)" /> admet pour équations
              cartésiennes :
            </p>
            <MathBlock tex="\dfrac{x-x_A}{a}=\dfrac{y-y_A}{b}=\dfrac{z-z_A}{c}" />
            <p>
              (Si l&apos;une des composantes de <Math tex="\vec u" /> est nulle, par exemple{" "}
              <Math tex="c=0" />, on écrit <Math tex="\dfrac{x-x_A}a=\dfrac{y-y_A}b" /> et{" "}
              <Math tex="z=z_A" /> séparément.)
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
            <MathBlock tex="\begin{cases}x=x_A+ka+k'a'\\y=y_A+kb+k'b'\\z=z_A+kc+k'c'\end{cases}\quad(k,k')\in\mathbb R^2" />
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
              <Math tex="\mathcal D(A,\vec u)" /> et le plan <Math tex="P" /> d&apos;équation{" "}
              <Math tex="ax+by+cz+d=0" />, avec <Math tex="\vec u(\alpha,\beta,\gamma)" /> :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="a\alpha+b\beta+c\gamma=0" /> et <Math tex="A\in P" /> : <Math tex="\mathcal D\subset P" />.
              </li>
              <li>
                <Math tex="a\alpha+b\beta+c\gamma=0" /> et <Math tex="A\notin P" /> : strictement parallèles.
              </li>
              <li>
                <Math tex="a\alpha+b\beta+c\gamma\neq0" /> : <Math tex="\mathcal D" /> perce <Math tex="P" />{" "}
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
        title="Exercices · Géométrie dans l'espace"
        tone="muted"
        description="6 exercices corrigés couvrant colinéarité, coplanarité, équation de plan, et les trois positions relatives."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre géométrie dans l'espace est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Colinéarité analytique"
            itemsLabel="2 vérifications"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="\vec u(2,-1,3)" />, <Math tex="\vec v(-4,2,-6)" /> et{" "}
                <Math tex="\vec w(1,2,-1)" />. Étudier la colinéarité de <Math tex="\vec u,\vec v" />, puis de{" "}
                <Math tex="\vec u,\vec w" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On remarque directement <Math tex="\vec v=-2\vec u" /> (car{" "}
                  <Math tex="(-4,2,-6)=-2\times(2,-1,3)" />).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\vec u" /> et <Math tex="\vec v" /> sont colinéaires.
                </p>
                <p>
                  Pour <Math tex="\vec u,\vec w" /> :{" "}
                  <Math tex="\begin{vmatrix}2&1\\-1&2\end{vmatrix}=2\times2-1\times(-1)=5\neq0" />.
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
                Soient <Math tex="\vec u(1,2,-1)" />, <Math tex="\vec v(2,1,1)" /> et{" "}
                <Math tex="\vec w(-1,4,-5)" />. Les vecteurs <Math tex="\vec u,\vec v,\vec w" /> sont-ils
                coplanaires ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\det(\vec u,\vec v,\vec w)=1\begin{vmatrix}1&4\\1&-5\end{vmatrix}-2\begin{vmatrix}2&-1\\1&-5\end{vmatrix}+(-1)\begin{vmatrix}2&-1\\1&4\end{vmatrix}" />
                <MathBlock tex="=1(-5-4)-2(-10+1)-1(8+1)=-9+18-9=0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\vec u,\vec v,\vec w" /> sont <strong>coplanaires</strong>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Équation cartésienne d'un plan (ABC)"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer l&apos;équation cartésienne du plan <Math tex="(ABC)" /> avec{" "}
                <Math tex="A(1,0,-2)" />, <Math tex="B(2,1,0)" />, <Math tex="C(0,3,1)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AB}(1,1,2)" /> et <Math tex="\overrightarrow{AC}(-1,3,3)" /> sont
                  deux vecteurs directeurs de <Math tex="(ABC)" />.{" "}
                  <Math tex="M(x,y,z)\in(ABC)\iff\det(\overrightarrow{AM},\overrightarrow{AB},\overrightarrow{AC})=0" />
                  , avec <Math tex="\overrightarrow{AM}(x-1,y,z+2)" /> :
                </p>
                <MathBlock tex="(x-1)\begin{vmatrix}1&3\\2&3\end{vmatrix}-y\begin{vmatrix}1&-1\\2&3\end{vmatrix}+(z+2)\begin{vmatrix}1&-1\\1&3\end{vmatrix}=0" />
                <MathBlock tex="-3(x-1)-5y+4(z+2)=0\ \Longrightarrow\ -3x+3-5y+4z+8=0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(ABC):3x+5y-4z-11=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Position relative de deux droites"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier la position relative de{" "}
                <Math tex="\mathcal D_1(A_1(1,1,0),\vec u_1(1,0,1))" /> et{" "}
                <Math tex="\mathcal D_2(A_2(2,1,1),\vec u_2(0,1,-1))" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\vec u_1,\vec u_2" /> ne sont clairement pas colinéaires (aucune composante
                  commune non nulle proportionnelle). On résout le système d&apos;intersection :
                </p>
                <MathBlock tex="\begin{cases}1+k=2\\1=1+t\\k=1-t\end{cases}\iff\begin{cases}k=1\\t=0\end{cases}" />
                <p className="font-semibold text-green-700">
                  Solution unique <Math tex="k=1,\ t=0" />, donnant le même point dans les deux
                  représentations : les droites sont donc <strong>sécantes</strong>, au point{" "}
                  <Math tex="E(2,1,1)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Position relative d'une droite et d'un plan"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier la position relative de <Math tex="\mathcal D(A(1,2,0),\vec u(1,-1,2))" /> et du plan{" "}
                <Math tex="(P):2x+y-z-3=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="\vec u(\alpha,\beta,\gamma)=(1,-1,2)" /> et{" "}
                  <Math tex="(a,b,c)=(2,1,-1)" /> :
                </p>
                <MathBlock tex="a\alpha+b\beta+c\gamma=2(1)+1(-1)+(-1)(2)=2-1-2=-1\neq0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\mathcal D" /> n&apos;est pas parallèle à <Math tex="(P)" /> : elle perce le
                  plan en un point unique.
                </p>
                <p>
                  On substitue <Math tex="x=1+k,\ y=2-k,\ z=2k" /> dans l&apos;équation de <Math tex="(P)" /> :
                </p>
                <MathBlock tex="2(1+k)+(2-k)-2k-3=0\iff2+2k+2-k-2k-3=0\iff1-k=0\iff k=1" />
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="k=1" />, et <Math tex="\mathcal D" /> perce <Math tex="(P)" /> au point{" "}
                  <Math tex="(2,1,2)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Position relative de deux plans"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier la position relative de <Math tex="(P):x+y-z-1=0" /> et{" "}
                <Math tex="(Q):2x-y+z-2=0" />, et déterminer, le cas échéant, une représentation
                paramétrique de leur intersection.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="(a,b,c)=(1,1,-1)" /> et <Math tex="(a',b',c')=(2,-1,1)" /> :
                </p>
                <MathBlock tex="ab'-ba'=1(-1)-1(2)=-3\neq0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(P)" /> et <Math tex="(Q)" /> sont <strong>sécants</strong>, suivant une
                  droite <Math tex="(D)" />.
                </p>
                <p>
                  On résout le système <Math tex="\begin{cases}x+y-z-1=0\\2x-y+z-2=0\end{cases}" />. En
                  additionnant les deux équations : <Math tex="3x-3=0\Rightarrow x=1" />, puis{" "}
                  <Math tex="y=z" />. En posant <Math tex="z=t" /> :
                </p>
                <MathBlock tex="(D):\begin{cases}x=1\\y=t\\z=t\end{cases}\quad(t\in\mathbb R)" />
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
