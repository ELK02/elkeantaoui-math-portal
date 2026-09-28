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
  title: "Géométrie dans l'espace · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet de géométrie analytique dans l'espace pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : produit scalaire, plans, distances et sphères, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 2",
  heroTitle: "Géométrie dans l'espace",
  heroSubtitle:
    "Le produit scalaire quitte le plan et entre dans l'espace : vecteur normal, équation de plan, distance point-plan et équation de sphère — tout l'outillage analytique de l'espace en un seul chapitre.",
  footerNote: "Géométrie dans l'espace · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 2.",
  sections: [
    { id: "cours-produit-scalaire", label: "Produit scalaire" },
    { id: "cours-analytique", label: "Repère et normes" },
    { id: "cours-plans", label: "Plans" },
    { id: "cours-spheres", label: "Sphères" },
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
          { value: "10", label: "exercices corrigés" },
          { value: "4", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-produit-scalaire"
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
            <Math tex="\mathcal E" />
          </div>
        }
      />

      {/* ===================== I. PRODUIT SCALAIRE ===================== */}
      <LessonSection
        id="cours-produit-scalaire"
        kicker="01 · Le produit scalaire quitte le plan"
        title="Produit scalaire dans l'espace"
        tone="light"
        description="La définition et les propriétés du produit scalaire du plan restent valables dans l'espace : rien à réapprendre, tout à réutiliser."
      >
        <CourseBlock numeral="I" title="Définition et propriétés">
          <Box title="Définition" tone="def">
            Soient <Math tex="\vec u" /> et <Math tex="\vec v" /> deux vecteurs de l&apos;espace <Math tex="\mathcal E" />,
            et <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> trois points tels que <Math tex="\vec u=\overrightarrow{AB}" />{" "}
            et <Math tex="\vec v=\overrightarrow{AC}" />. Si <Math tex="H" /> est le projeté orthogonal de <Math tex="C" /> sur
            la droite <Math tex="(AB)" />, le <strong className="text-foreground">produit scalaire</strong> de{" "}
            <Math tex="\vec u" /> et <Math tex="\vec v" /> est le nombre réel :
          </Box>
          <MathBlock tex="\vec u\cdot\vec v=\overrightarrow{AB}\cdot\overrightarrow{AC}=\begin{cases}+\,AB\times AH &\text{si }\overrightarrow{AB}\text{ et }\overrightarrow{AH}\text{ ont même sens}\\[2pt] -\,AB\times AH &\text{sinon}\end{cases}" />
          <Box title="Autres écritures" tone="def">
            On a aussi <Math tex="\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos(\vec u,\vec v)" />, et par convention{" "}
            <Math tex="\vec u\cdot\vec v=0" /> dès que <Math tex="\vec u=\vec 0" /> ou <Math tex="\vec v=\vec 0" />. Le{" "}
            <strong>carré scalaire</strong> <Math tex="\vec u\cdot\vec u=\vec u^{\,2}" /> est toujours positif, et{" "}
            <Math tex="\|\vec u\|=\sqrt{\vec u\cdot\vec u}" />.
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong>Symétrie</strong> : <Math tex="\vec u\cdot\vec v=\vec v\cdot\vec u" />.
              </li>
              <li>
                <strong>Bilinéarité</strong> : <Math tex="\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w" /> et{" "}
                <Math tex="(\lambda\vec u)\cdot\vec v=\lambda(\vec u\cdot\vec v)" /> pour tout <Math tex="\lambda\in\mathbb R" />.
              </li>
              <li>
                <strong>Positivité, non-dégénérescence</strong> : <Math tex="\vec u\cdot\vec u\ge0" /> et{" "}
                <Math tex="\vec u\cdot\vec u=0\iff\vec u=\vec 0" />.
              </li>
              <li>
                <strong>Orthogonalité</strong> : <Math tex="\vec u\perp\vec v\iff\vec u\cdot\vec v=0" />.
              </li>
              <li>
                <strong>Identités remarquables</strong> :{" "}
                <Math tex="(\vec u+\vec v)^2=\vec u^{\,2}+2\vec u\cdot\vec v+\vec v^{\,2}" /> ;{" "}
                <Math tex="(\vec u-\vec v)^2=\vec u^{\,2}-2\vec u\cdot\vec v+\vec v^{\,2}" /> ;{" "}
                <Math tex="(\vec u+\vec v)\cdot(\vec u-\vec v)=\vec u^{\,2}-\vec v^{\,2}" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. REPÈRE ET EXPRESSION ANALYTIQUE ===================== */}
      <LessonSection
        id="cours-analytique"
        kicker="02 · Passer aux coordonnées"
        title="Repère orthonormé, norme et distance"
        tone="muted"
        description="Une base orthonormée transforme le produit scalaire en une simple somme de produits de coordonnées."
      >
        <CourseBlock numeral="II" title="Base et repère orthonormés de l'espace">
          <Box title="Définitions" tone="def">
            Trois vecteurs <Math tex="\vec\imath,\vec\jmath,\vec k" /> non coplanaires forment une{" "}
            <strong className="text-foreground">base</strong> de <Math tex="\mathcal E" /> : tout vecteur{" "}
            <Math tex="\vec u" /> s&apos;écrit de façon unique <Math tex="\vec u=x\vec\imath+y\vec\jmath+z\vec k" />, noté{" "}
            <Math tex="\vec u(x\,;y\,;z)" />. Muni d&apos;une origine <Math tex="O" />, le quadruplet{" "}
            <Math tex="(O,\vec\imath,\vec\jmath,\vec k)" /> est un <strong>repère</strong> de <Math tex="\mathcal E" />. La base
            est dite <strong>orthonormée</strong> si <Math tex="\vec\imath\cdot\vec\jmath=\vec\jmath\cdot\vec k=\vec k\cdot\vec\imath=0" />{" "}
            et <Math tex="\|\vec\imath\|=\|\vec\jmath\|=\|\vec k\|=1" /> ; le repère associé est alors{" "}
            <strong>orthonormé</strong>. Tout le reste du chapitre suppose l&apos;espace muni d&apos;un tel repère{" "}
            <Math tex="(O,\vec\imath,\vec\jmath,\vec k)" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="Expression analytique du produit scalaire">
          <Box title="Propriété" tone="prop">
            Pour <Math tex="\vec u(x\,;y\,;z)" /> et <Math tex="\vec v(x'\,;y'\,;z')" /> :
          </Box>
          <MathBlock tex="\vec u\cdot\vec v=xx'+yy'+zz'" />
          <Callout variant="success" title="Conséquences immédiates">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Norme d&apos;un vecteur : <Math tex="\|\vec u\|=\sqrt{x^2+y^2+z^2}" />.
              </li>
              <li>
                Distance entre deux points <Math tex="A(x_A,y_A,z_A)" /> et <Math tex="B(x_B,y_B,z_B)" /> :{" "}
                <Math tex="AB=\|\overrightarrow{AB}\|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}" />.
              </li>
              <li>
                Angle géométrique <Math tex="\widehat{BAC}" /> :{" "}
                <Math tex="\cos\widehat{BAC}=\dfrac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{AB\times AC}" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. PLANS ===================== */}
      <LessonSection
        id="cours-plans"
        kicker="03 · Décrire un plan par une équation"
        title="Vecteur normal, équation d'un plan, distances"
        tone="light"
        description="Un vecteur normal remplace la donnée de deux directions du plan : c'est lui qui donne directement l'équation cartésienne."
      >
        <CourseBlock numeral="IV" title="Vecteur normal et équation cartésienne d'un plan">
          <Box title="Définition" tone="def">
            Un vecteur <Math tex="\vec n\neq\vec 0" /> est <strong className="text-foreground">normal</strong> à un plan{" "}
            <Math tex="P" /> s&apos;il est orthogonal à deux vecteurs non colinéaires de <Math tex="P" />. Le plan passant par{" "}
            <Math tex="A" /> et de vecteur normal <Math tex="\vec n" /> se note <Math tex="P(A,\vec n)" />, et :
          </Box>
          <MathBlock tex="M\in P(A,\vec n)\iff \overrightarrow{AM}\cdot\vec n=0" />
          <Callout variant="success" title="Théorème — équation cartésienne d'un plan">
            <p className="mb-2">
              Avec <Math tex="\vec n(a\,;b\,;c)" />, l&apos;ensemble <Math tex="P(A,\vec n)" /> a pour équation cartésienne :
            </p>
            <MathBlock tex="ax+by+cz+d=0\qquad (a,b,c)\neq(0,0,0)" />
            <p>
              Réciproquement, toute équation <Math tex="ax+by+cz+d=0" /> avec <Math tex="(a,b,c)\neq(0,0,0)" /> est celle d&apos;un
              plan de vecteur normal <Math tex="\vec n(a\,;b\,;c)" />.
            </p>
          </Callout>
          <Box title="Méthode — plan donné par un point et deux vecteurs directeurs" tone="prop">
            Si <Math tex="P" /> passe par <Math tex="A" /> et est dirigé par <Math tex="\vec u,\vec v" /> non colinéaires, on
            cherche <Math tex="\vec n(a,b,c)" /> tel que <Math tex="\vec n\cdot\vec u=0" /> et <Math tex="\vec n\cdot\vec v=0" /> (
            deux équations, trois inconnues : on en fixe une), puis on écrit <Math tex="\overrightarrow{AM}\cdot\vec n=0" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Positions relatives, distance d'un point à un plan">
          <Callout variant="success" title="Deux plans, une droite et un plan">
            <p className="mb-2">
              Soient <Math tex="P(a,b,c)" /> et <Math tex="P'(a',b',c')" /> de vecteurs normaux <Math tex="\vec n,\vec n'" />, et{" "}
              <Math tex="D(A,\vec u)" /> une droite.
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="P\parallel P'\iff \vec n\text{ et }\vec n'\text{ colinéaires}" /> ; en particulier{" "}
                <Math tex="P\perp P'\iff \vec n\cdot\vec n'=0" />.
              </li>
              <li>
                <Math tex="D\parallel P\iff \vec u\cdot\vec n=0" /> ; <Math tex="D\perp P\iff \vec u\text{ et }\vec n\text{ colinéaires}" />
                .
              </li>
            </ul>
          </Callout>
          <Box title="Distance d'un point à un plan" tone="prop">
            Pour <Math tex="A(x_A,y_A,z_A)" /> et <Math tex="P:ax+by+cz+d=0" /> :
          </Box>
          <MathBlock tex="d(A,P)=\dfrac{|ax_A+by_A+cz_A+d|}{\sqrt{a^2+b^2+c^2}}" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. SPHÈRES ===================== */}
      <LessonSection
        id="cours-spheres"
        kicker="04 · L'équivalent spatial du cercle"
        title="Sphères et positions relatives"
        tone="muted"
        description="La sphère est à l'espace ce que le cercle est au plan : même logique, une coordonnée de plus."
      >
        <CourseBlock numeral="VI" title="Équation cartésienne d'une sphère">
          <Box title="Définition" tone="def">
            Soit <Math tex="\Omega" /> un point et <Math tex="R>0" />. La <strong className="text-foreground">sphère</strong>{" "}
            de centre <Math tex="\Omega" /> et de rayon <Math tex="R" />, notée <Math tex="S(\Omega,R)" />, est l&apos;ensemble
            des points <Math tex="M" /> tels que <Math tex="\Omega M=R" />.
          </Box>
          <Callout variant="success" title="Trois formes à connaître">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Forme centre-rayon</strong> : avec <Math tex="\Omega(a,b,c)" />,{" "}
                <Math tex="M(x,y,z)\in S(\Omega,R)\iff (x-a)^2+(y-b)^2+(z-c)^2=R^2" />.
              </li>
              <li>
                <strong>Sphère de diamètre <Math tex="[AB]" /></strong> :{" "}
                <Math tex="M\in S_{[AB]}\iff \overrightarrow{MA}\cdot\overrightarrow{MB}=0" /> (centre = milieu de{" "}
                <Math tex="[AB]" />, rayon <Math tex="=\dfrac{AB}{2}" />).
              </li>
              <li>
                <strong>Forme développée</strong> : une équation{" "}
                <Math tex="x^2+y^2+z^2+ax+by+cz+d=0" /> se ramène, en complétant le carré, à{" "}
                <Math tex="\left(x+\dfrac a2\right)^2+\left(y+\dfrac b2\right)^2+\left(z+\dfrac c2\right)^2=\dfrac{a^2+b^2+c^2-4d}{4}" />.
                En posant <Math tex="\Delta=a^2+b^2+c^2-4d" />, c&apos;est une sphère si <Math tex="\Delta>0" />, réduite au
                point <Math tex="\left(-\dfrac a2,-\dfrac b2,-\dfrac c2\right)" /> si <Math tex="\Delta=0" />, et
                l&apos;ensemble vide si <Math tex="\Delta<0" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Positions relatives sphère–plan et sphère–droite">
          <Box title="Sphère et plan" tone="prop">
            Soit <Math tex="S(\Omega,R)" /> et un plan <Math tex="P" />, et <Math tex="d=d(\Omega,P)" />.
          </Box>
          <MathBlock tex="d>R\Rightarrow P\cap S=\varnothing\qquad d=R\Rightarrow P\text{ tangent à }S\qquad d<R\Rightarrow P\cap S\text{ est un cercle de rayon }\sqrt{R^2-d^2}" />
          <Callout variant="warning" title="Trouver le point de tangence ou le centre du cercle">
            Dans les deux derniers cas, le point de tangence (ou le centre du cercle d&apos;intersection) est le projeté
            orthogonal <Math tex="H" /> de <Math tex="\Omega" /> sur <Math tex="P" /> : c&apos;est le point d&apos;intersection de{" "}
            <Math tex="P" /> avec la droite passant par <Math tex="\Omega" /> et normale à <Math tex="P" />.
          </Callout>
          <Box title="Sphère et droite" tone="prop">
            On remplace dans l&apos;équation de <Math tex="S" /> la représentation paramétrique de la droite <Math tex="D" />
            ; on obtient une équation du second degré en <Math tex="t" /> de discriminant <Math tex="\delta" /> :
          </Box>
          <MathBlock tex="\delta<0\Rightarrow D\cap S=\varnothing\qquad \delta=0\Rightarrow D\text{ tangente à }S\qquad \delta>0\Rightarrow D\text{ coupe }S\text{ en deux points}" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Géométrie dans l'espace"
        tone="light"
        description="10 exercices corrigés, au niveau Sciences Physiques : produit scalaire, plans, distances, sphères et positions relatives."
      >
        <ExerciseGroup
          total={10}
          celebrationTitle="Bravo, les 10 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre géométrie dans l'espace est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Produit scalaire dans un cube"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="ABCDEFGH" /> un cube d&apos;arête <Math tex="a" /> (base <Math tex="ABCD" />, face
                supérieure <Math tex="EFGH" />, avec <Math tex="(AE),(BF),(CG),(DH)" /> arêtes verticales).
                <br />
                1) Montrer, sans utiliser de repère, que <Math tex="\overrightarrow{AG}\cdot\overrightarrow{BD}=0" />.
                <br />
                2) Montrer de même que <Math tex="\overrightarrow{AG}\cdot\overrightarrow{BE}=0" />.
                <br />
                3) En déduire que la droite <Math tex="(AG)" /> est orthogonale au plan <Math tex="(BDE)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On a <Math tex="\overrightarrow{AG}=\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AE}" /> (relation
                  de Chasles, puisque <Math tex="\overrightarrow{BC}=\overrightarrow{AD}" /> et{" "}
                  <Math tex="\overrightarrow{CG}=\overrightarrow{AE}" />) et <Math tex="\overrightarrow{BD}=\overrightarrow{AD}-\overrightarrow{AB}" />.
                </p>
                <p>
                  1) En développant par bilinéarité, et puisque{" "}
                  <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AE}\cdot\overrightarrow{AD}=\overrightarrow{AE}\cdot\overrightarrow{AB}=0" />{" "}
                  (arêtes du cube deux à deux orthogonales) :
                </p>
                <MathBlock tex="\overrightarrow{AG}\cdot\overrightarrow{BD}=(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AE})\cdot(\overrightarrow{AD}-\overrightarrow{AB})=-\overrightarrow{AB}^2+\overrightarrow{AD}^2=-a^2+a^2=0" />
                <p>
                  2) De même, avec <Math tex="\overrightarrow{BE}=\overrightarrow{AE}-\overrightarrow{AB}" /> :
                </p>
                <MathBlock tex="\overrightarrow{AG}\cdot\overrightarrow{BE}=(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AE})\cdot(\overrightarrow{AE}-\overrightarrow{AB})=-\overrightarrow{AB}^2+\overrightarrow{AE}^2=-a^2+a^2=0" />
                <p className="font-semibold text-green-700">
                  3) <Math tex="\overrightarrow{BD}" /> et <Math tex="\overrightarrow{BE}" /> ne sont pas colinéaires (elles
                  dirigent deux arêtes distinctes du plan <Math tex="(BDE)" />), et <Math tex="\overrightarrow{AG}" /> leur est
                  orthogonal : donc <Math tex="\overrightarrow{AG}" /> est normal au plan <Math tex="(BDE)" />, c&apos;est-à-dire
                  que <Math tex="(AG)\perp(BDE)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Norme, distance et angle"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                L&apos;espace est muni d&apos;un repère orthonormé <Math tex="(O,\vec\imath,\vec\jmath,\vec k)" />. On donne{" "}
                <Math tex="A(1,2,-1)" />, <Math tex="B(3,0,1)" /> et <Math tex="C(2,-1,3)" />.
                <br />
                1) Calculer <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AC}" />.<br />
                2) Calculer <Math tex="AB" /> et <Math tex="AC" />.<br />
                3) En déduire <Math tex="\cos\widehat{BAC}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AB}(2\,;-2\,;2)" /> et <Math tex="\overrightarrow{AC}(1\,;-3\,;4)" />.
                </p>
                <p>
                  1) <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AC}=2\times1+(-2)\times(-3)+2\times4=2+6+8=16" />.
                </p>
                <p>
                  2) <Math tex="AB=\sqrt{2^2+(-2)^2+2^2}=\sqrt{12}=2\sqrt3" /> et{" "}
                  <Math tex="AC=\sqrt{1^2+(-3)^2+4^2}=\sqrt{26}" />.
                </p>
                <p className="font-semibold text-green-700">
                  3) <Math tex="\cos\widehat{BAC}=\dfrac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{AB\times AC}=\dfrac{16}{2\sqrt3\times\sqrt{26}}=\dfrac{16}{2\sqrt{78}}=\dfrac{4\sqrt{78}}{39}" />
                  .
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Équation d'un plan (point + normal)"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une équation cartésienne du plan <Math tex="P" /> passant par <Math tex="A(1,-2,3)" /> et de
                vecteur normal <Math tex="\vec n(2\,;-1\,;4)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="M(x,y,z)" /> : <Math tex="M\in P\iff \overrightarrow{AM}\cdot\vec n=0" />, avec{" "}
                  <Math tex="\overrightarrow{AM}(x-1\,;y+2\,;z-3)" />.
                </p>
                <p>
                  <Math tex="2(x-1)-1(y+2)+4(z-3)=0\iff 2x-y+4z-16=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="P:2x-y+4z-16=0" /> (on vérifie : <Math tex="2\times1-(-2)+4\times3-16=2+2+12-16=0" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Plan donné par un point et deux vecteurs directeurs"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="P" /> le plan passant par <Math tex="A(1,1,0)" /> et dirigé par{" "}
                <Math tex="\vec u(1\,;2\,;-1)" /> et <Math tex="\vec v(0\,;1\,;1)" />. Déterminer une équation cartésienne de{" "}
                <Math tex="P" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On cherche <Math tex="\vec n(a,b,c)" /> normal à <Math tex="P" />, donc orthogonal à <Math tex="\vec u" /> et{" "}
                  <Math tex="\vec v" /> :
                </p>
                <MathBlock tex="\begin{cases}\vec n\cdot\vec u=0\\ \vec n\cdot\vec v=0\end{cases}\iff\begin{cases}a+2b-c=0\\ b+c=0\end{cases}" />
                <p>
                  La 2ᵉ équation donne <Math tex="c=-b" />, puis la 1ʳᵉ : <Math tex="a+2b+b=0\iff a=-3b" />. En choisissant{" "}
                  <Math tex="b=1" /> : <Math tex="\vec n(-3\,;1\,;-1)" />.
                </p>
                <p>
                  Donc <Math tex="M\in P\iff \overrightarrow{AM}\cdot\vec n=0\iff -3(x-1)+(y-1)-z=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Soit <Math tex="P:3x-y+z-2=0" /> (en multipliant par <Math tex="-1" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Positions relatives de deux plans"
            itemsLabel="2 questions"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                1) Montrer que les plans <Math tex="P_1:x+y+z-1=0" /> et <Math tex="P_2:x-2y+z+2=0" /> sont perpendiculaires.
                <br />
                2) Déterminer l&apos;équation cartésienne du plan <Math tex="Q" />, parallèle au plan{" "}
                <Math tex="P:2x-y+3z-1=0" />, passant par le point <Math tex="A(1,0,-1)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) Les vecteurs normaux sont <Math tex="\vec n_1(1\,;1\,;1)" /> et <Math tex="\vec n_2(1\,;-2\,;1)" />.{" "}
                  <Math tex="\vec n_1\cdot\vec n_2=1-2+1=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\vec n_1\perp\vec n_2" />, d&apos;où <Math tex="P_1\perp P_2" />.
                </p>
                <p>
                  2) <Math tex="Q\parallel P" /> donc <Math tex="Q" /> a le même vecteur normal <Math tex="\vec n(2\,;-1\,;3)" />
                  , donc <Math tex="Q:2x-y+3z+d=0" />. Comme <Math tex="A\in Q" /> :{" "}
                  <Math tex="2\times1-0+3\times(-1)+d=0\iff d=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="Q:2x-y+3z+1=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Distance d'un point à un plan"
            itemsLabel="2 questions"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit le plan <Math tex="P:x+2y-2z+9=0" />, <Math tex="A(2,-1,1)" /> et <Math tex="B(-9,0,0)" />.
                <br />
                1) Calculer <Math tex="d(A,P)" />. <Math tex="A" /> appartient-il à <Math tex="P" /> ?<br />
                2) Vérifier que <Math tex="B\in P" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="\vec n(1\,;2\,;-2)" />, <Math tex="\|\vec n\|=\sqrt{1+4+4}=3" />.
                </p>
                <MathBlock tex="d(A,P)=\dfrac{|1\times2+2\times(-1)-2\times1+9|}{3}=\dfrac{|2-2-2+9|}{3}=\dfrac{7}{3}" />
                <p className="font-semibold text-green-700">
                  Comme <Math tex="d(A,P)=\dfrac73\neq0" />, <Math tex="A\notin P" />.
                </p>
                <p className="font-semibold text-green-700">
                  2) <Math tex="(-9)+2\times0-2\times0+9=0" /> : donc <Math tex="B\in P" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Équations de sphères"
            itemsLabel="2 équations"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                1) Donner l&apos;équation cartésienne de la sphère de centre <Math tex="\Omega(2,-1,3)" /> et de rayon{" "}
                <Math tex="R=4" />.
                <br />
                2) Soient <Math tex="A(1,2,-3)" /> et <Math tex="B(-3,0,1)" />. Déterminer l&apos;équation cartésienne de la
                sphère de diamètre <Math tex="[AB]" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-green-700">
                  1) <Math tex="(x-2)^2+(y+1)^2+(z-3)^2=16" />.
                </p>
                <p>
                  2) Le centre est le milieu <Math tex="I" /> de <Math tex="[AB]" /> : <Math tex="I(-1\,;1\,;-1)" />. On a{" "}
                  <Math tex="\overrightarrow{AB}(-4\,;-2\,;4)" />, donc <Math tex="AB=\sqrt{16+4+16}=6" /> et{" "}
                  <Math tex="R=\dfrac{AB}{2}=3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="S_{[AB]}:(x+1)^2+(y-1)^2+(z+1)^2=9" /> (ce qui équivaut à{" "}
                  <Math tex="\overrightarrow{MA}\cdot\overrightarrow{MB}=0" />, soit <Math tex="x^2+y^2+z^2+2x-2y+2z-6=0" />
                  ).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Sphère sous forme développée, avec paramètre"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="m\in\mathbb R" /> et <Math tex="S_m:x^2+y^2+z^2-4x+2my-2z+m^2+3=0" />.
                <br />
                1) Montrer que <Math tex="S_m" /> est une sphère dont le rayon ne dépend pas de <Math tex="m" />.<br />
                2) Déterminer l&apos;ensemble décrit par le centre de <Math tex="S_m" /> lorsque <Math tex="m" /> décrit{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>1) On complète le carré pour chaque variable :</p>
                <MathBlock tex="x^2-4x=(x-2)^2-4\quad;\quad y^2+2my=(y+m)^2-m^2\quad;\quad z^2-2z=(z-1)^2-1" />
                <p>En reportant dans l&apos;équation :</p>
                <MathBlock tex="(x-2)^2+(y+m)^2+(z-1)^2-4-m^2-1+m^2+3=0\iff (x-2)^2+(y+m)^2+(z-1)^2=2" />
                <p className="font-semibold text-green-700">
                  Le terme en <Math tex="m^2" /> disparaît : pour tout <Math tex="m\in\mathbb R" />, <Math tex="S_m" /> est la
                  sphère de centre <Math tex="\Omega_m(2\,;-m\,;1)" /> et de rayon constant <Math tex="R=\sqrt2" />.
                </p>
                <p className="font-semibold text-green-700">
                  2) Quand <Math tex="m" /> décrit <Math tex="\mathbb R" />, <Math tex="\Omega_m(2,-m,1)" /> décrit la droite
                  passant par <Math tex="(2,0,1)" /> et dirigée par <Math tex="(0\,;1\,;0)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Position relative d'une droite et d'une sphère"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="S:(x-1)^2+(y+1)^2+(z-2)^2=6" /> et <Math tex="D" /> la droite de représentation
                paramétrique <Math tex="x=4+t,\ y=1+t,\ z=t\ (t\in\mathbb R)" />. Étudier la position relative de{" "}
                <Math tex="D" /> et <Math tex="S" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="M(4+t,1+t,t)\in S\iff (3+t)^2+(2+t)^2+(t-2)^2=6" />.
                </p>
                <p>
                  En développant : <Math tex="(t^2+6t+9)+(t^2+4t+4)+(t^2-4t+4)=6\iff 3t^2+6t+17=6\iff 3t^2+6t+11=0" />.
                </p>
                <p>
                  Discriminant : <Math tex="\delta=6^2-4\times3\times11=36-132=-96<0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Aucune solution réelle : la droite <Math tex="D" /> ne rencontre pas la sphère <Math tex="S" />,{" "}
                  <Math tex="D\cap S=\varnothing" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Position relative d'un plan et d'une sphère, plan tangent"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="S:x^2+y^2+z^2-2x+4y-6z+5=0" /> et <Math tex="P:2x-y+2z-1=0" />.
                <br />
                1) Déterminer le centre <Math tex="\Omega" /> et le rayon <Math tex="R" /> de <Math tex="S" />.<br />
                2) Montrer que <Math tex="P" /> est tangent à <Math tex="S" />, et déterminer le point de tangence{" "}
                <Math tex="H" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>1) En complétant le carré :</p>
                <MathBlock tex="(x-1)^2-1+(y+2)^2-4+(z-3)^2-9+5=0\iff (x-1)^2+(y+2)^2+(z-3)^2=9" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\Omega(1,-2,3)" /> et <Math tex="R=3" />.
                </p>
                <p>
                  2) <Math tex="\vec n(2\,;-1\,;2)" />, <Math tex="\|\vec n\|=\sqrt{4+1+4}=3" />.
                </p>
                <MathBlock tex="d(\Omega,P)=\dfrac{|2\times1-(-2)+2\times3-1|}{3}=\dfrac{|2+2+6-1|}{3}=\dfrac{9}{3}=3=R" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="d(\Omega,P)=R" /> : le plan <Math tex="P" /> est tangent à <Math tex="S" />.
                </p>
                <p>
                  <Math tex="H" /> est le projeté orthogonal de <Math tex="\Omega" /> sur <Math tex="P" />, sur la droite{" "}
                  <Math tex="(1+2k,-2-k,3+2k)" />. En reportant dans l&apos;équation de <Math tex="P" /> :
                </p>
                <MathBlock tex="2(1+2k)-(-2-k)+2(3+2k)-1=0\iff 9k+9=0\iff k=-1" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="H(-1,-1,1)" /> (on vérifie <Math tex="\Omega H=\sqrt{4+1+4}=3=R" />).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
