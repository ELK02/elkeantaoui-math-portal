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
  title: "Le produit scalaire et ses applications · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur le produit scalaire dans le plan pour la 1ère année Baccalauréat Sciences Mathématiques : expression analytique, inégalités de Cauchy-Schwarz et triangulaire, formules de sin et cos par déterminant, aire d'un triangle, la droite (vecteur normal, équation cartésienne, orthogonalité, distance), le cercle (équation cartésienne, tangente, positions relatives), ensembles de points classiques, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Le produit scalaire et ses applications",
  heroSubtitle:
    "Un seul outil algébrique pour tout démontrer en géométrie plane : angles, distances, droites, cercles et tangentes.",
  footerNote: "Le produit scalaire et ses applications · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
  sections: [
    { id: "cours-rappels", label: "Rappels" },
    { id: "cours-inegalites", label: "Inégalités" },
    { id: "cours-aire", label: "Aire" },
    { id: "cours-droite", label: "La droite" },
    { id: "cours-cercle", label: "Le cercle" },
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
          { value: "2", label: "inégalités fondamentales" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-rappels"
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
            <Math tex="\vec u\cdot\vec v" />
          </div>
        }
      />

      {/* ===================== I. RAPPELS ===================== */}
      <LessonSection
        id="cours-rappels"
        kicker="01 · L'outil de base"
        title="Rappels : définition, propriétés, expression analytique"
        tone="light"
        description="Trois façons d'écrire le même produit scalaire — projection, trigonométrique, analytique — et il faut savoir choisir la bonne selon la situation."
      >
        <CourseBlock numeral="I" title="Définition et propriétés">
          <Box title="Définition (par projection)" tone="def">
            <p>
              Pour <Math tex="\vec u=\overrightarrow{AB}" />, <Math tex="\vec v=\overrightarrow{AC}" />, et{" "}
              <Math tex="H" /> le projeté orthogonal de <Math tex="C" /> sur <Math tex="(AB)" /> :
            </p>
            <MathBlock tex="\vec u\cdot\vec v=\overrightarrow{AB}\cdot\overrightarrow{AH}=\begin{cases}+AB\times AH&\text{si }\overrightarrow{AB},\overrightarrow{AH}\text{ même sens}\\-AB\times AH&\text{si sens opposés}\end{cases}" />
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <div className="space-y-1">
              <p>
                <strong>Trigonométrique :</strong>{" "}
                <Math tex="\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos(\vec u,\vec v)" />
              </p>
              <p>
                <strong>Symétrie :</strong> <Math tex="\vec u\cdot\vec v=\vec v\cdot\vec u" />
              </p>
              <p>
                <strong>Linéarité :</strong> <Math tex="(\vec u+\vec v)\cdot\vec w=\vec u\cdot\vec w+\vec v\cdot\vec w" />
                , <Math tex="(\alpha\vec u)\cdot\vec v=\alpha(\vec u\cdot\vec v)" />
              </p>
              <p>
                <strong>Orthogonalité :</strong> <Math tex="\vec u\perp\vec v\iff\vec u\cdot\vec v=0" />
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Expression analytique">
          <Box title="Dans un repère orthonormé" tone="prop">
            <p>
              Pour <Math tex="\vec u(x,y)" /> et <Math tex="\vec v(x',y')" /> :
            </p>
            <MathBlock tex="\vec u\cdot\vec v=xx'+yy',\qquad \|\vec u\|=\sqrt{x^2+y^2}" />
            <MathBlock tex="AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad \vec u\perp\vec v\iff xx'+yy'=0" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. INÉGALITÉS ===================== */}
      <LessonSection
        id="cours-inegalites"
        kicker="02 · Deux inégalités universelles"
        title="Inégalités de Cauchy-Schwarz et triangulaire"
        tone="muted"
        description="Deux résultats vrais pour tous vecteurs, avec des cas d'égalité qui caractérisent la colinéarité."
      >
        <CourseBlock numeral="III" title="Les deux inégalités">
          <Callout variant="success" title="Propriétés">
            <div className="space-y-2">
              <p>
                <strong>Cauchy-Schwarz :</strong> <Math tex="|\vec u\cdot\vec v|\le\|\vec u\|\,\|\vec v\|" />,
                avec égalité ssi <Math tex="\vec u,\vec v" /> sont colinéaires.
              </p>
              <p>
                <strong>Inégalité triangulaire :</strong>{" "}
                <Math tex="\|\vec u+\vec v\|\le\|\vec u\|+\|\vec v\|" />.
              </p>
            </div>
          </Callout>
          <Box title="Idée de la démonstration (Cauchy-Schwarz)" tone="def">
            <p>
              Comme <Math tex="|\cos(\vec u,\vec v)|\le1" />, on multiplie par{" "}
              <Math tex="\|\vec u\|\,\|\vec v\|\ge0" /> :
            </p>
            <MathBlock tex="\|\vec u\|\,\|\vec v\||\cos(\vec u,\vec v)|\le\|\vec u\|\,\|\vec v\|\iff|\vec u\cdot\vec v|\le\|\vec u\|\,\|\vec v\|" />
            <p>
              L&apos;inégalité triangulaire s&apos;en déduit en développant{" "}
              <Math tex="\|\vec u+\vec v\|^2=\|\vec u\|^2+2\vec u\cdot\vec v+\|\vec v\|^2" /> et en majorant{" "}
              <Math tex="\vec u\cdot\vec v" /> par Cauchy-Schwarz.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. AIRE ===================== */}
      <LessonSection
        id="cours-aire"
        kicker="03 · Sinus, déterminant, aire"
        title="Formules de sin, cos et l'aire d'un triangle"
        tone="light"
        description="Le déterminant de deux vecteurs donne à la fois le sinus de leur angle et l'aire du triangle qu'ils forment — un raccourci redoutable."
      >
        <CourseBlock numeral="IV" title="Formules de sin et cos par déterminant">
          <Box title="Propriété" tone="def">
            <p>
              Pour <Math tex="\vec u(x,y)" />, <Math tex="\vec v(x',y')" /> non nuls,{" "}
              <Math tex="\det(\vec u,\vec v)=xy'-yx'" /> :
            </p>
            <MathBlock tex="\cos(\vec u,\vec v)=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}=\dfrac{xx'+yy'}{\sqrt{x^2+y^2}\sqrt{x'^2+y'^2}}" />
            <MathBlock tex="\sin(\vec u,\vec v)=\dfrac{\det(\vec u,\vec v)}{\|\vec u\|\,\|\vec v\|}=\dfrac{xy'-yx'}{\sqrt{x^2+y^2}\sqrt{x'^2+y'^2}}" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Aire d'un triangle et d'un parallélogramme">
          <Callout variant="success" title="Propriété">
            <MathBlock tex="S_{ABC}=\dfrac12\big|\det(\overrightarrow{AB},\overrightarrow{AC})\big|,\qquad S_{ABCD}=\big|\det(\overrightarrow{AB},\overrightarrow{AC})\big|" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. LA DROITE ===================== */}
      <LessonSection
        id="cours-droite"
        kicker="04 · Décrire une droite par un vecteur normal"
        title="La droite dans le plan — étude analytique"
        tone="muted"
        description="Le vecteur normal remplace le vecteur directeur comme outil principal — il rend l'orthogonalité et la distance immédiates."
      >
        <CourseBlock numeral="VI" title="Vecteur normal et équation cartésienne">
          <Box title="Définitions" tone="def">
            <p>
              <Math tex="\vec n" /> est un <strong className="text-foreground">vecteur normal</strong> à{" "}
              <Math tex="\mathcal D(A,\vec u)" /> s&apos;il est non nul et orthogonal à <Math tex="\vec u" />.
              Pour <Math tex="\vec n(a,b)" />, un vecteur directeur associé est <Math tex="\vec u(-b,a)" />.
            </p>
          </Box>
          <Callout variant="success" title="Équation cartésienne">
            <p>
              La droite passant par <Math tex="A(x_A,y_A)" /> de vecteur normal <Math tex="\vec n(a,b)" /> a
              pour équation :
            </p>
            <MathBlock tex="ax+by+c=0,\qquad c=-ax_A-by_A" />
            <p>
              Réciproquement, toute équation <Math tex="ax+by+c=0" /> (<Math tex="(a,b)\neq(0,0)" />) est une
              droite de vecteur normal <Math tex="\vec n(a,b)" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Orthogonalité et distance point-droite">
          <Box title="Deux droites perpendiculaires" tone="prop">
            <p>
              Pour <Math tex="(D):ax+by+c=0" /> et <Math tex="(D'):a'x+b'y+c'=0" /> :
            </p>
            <MathBlock tex="D\perp D'\iff aa'+bb'=0" />
          </Box>
          <Callout variant="success" title="Distance d'un point à une droite">
            <MathBlock tex="d(A,\mathcal D)=\dfrac{|ax_A+by_A+c|}{\sqrt{a^2+b^2}}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== V. LE CERCLE ===================== */}
      <LessonSection
        id="cours-cercle"
        kicker="05 · Le second objet analytique"
        title="Le cercle — équation, tangente, positions relatives"
        tone="light"
        description="Trois formes d'équation, un critère de tangence, et le lien entre position relative et distance au centre."
      >
        <CourseBlock numeral="VIII" title="Équations cartésiennes du cercle">
          <Box title="Forme centre-rayon et forme développée" tone="def">
            <MathBlock tex="\mathcal C(\Omega(a,b),r):\ (x-a)^2+(y-b)^2=r^2\ \iff\ x^2+y^2-2ax-2by+c=0,\ c=a^2+b^2-r^2" />
          </Box>
          <Box title="Cercle de diamètre [AB]" tone="prop">
            <MathBlock tex="M\in\mathcal C_{[AB]}\iff\overrightarrow{AM}\cdot\overrightarrow{BM}=0\iff(x-x_A)(x-x_B)+(y-y_A)(y-y_B)=0" />
          </Box>
          <Callout variant="warning" title="Étude de x² + y² + ax + by + c = 0">
            <p>Avec <Math tex="\Delta=a^2+b^2-4c" /> :</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="\Delta<0" /> : ensemble vide.
              </li>
              <li>
                <Math tex="\Delta=0" /> : un point unique <Math tex="\Omega\!\left(-\dfrac a2,-\dfrac b2\right)" />.
              </li>
              <li>
                <Math tex="\Delta>0" /> : un cercle de centre <Math tex="\Omega\!\left(-\dfrac a2,-\dfrac b2\right)" />
                {" "}et de rayon <Math tex="\dfrac{\sqrt\Delta}2" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Positions relatives et tangente">
          <Box title="Droite et cercle" tone="def">
            <p>
              Pour <Math tex="\mathcal C(\Omega,r)" /> et une droite <Math tex="\mathcal D" /> :{" "}
              <Math tex="d(\Omega,\mathcal D)>r" /> (disjoints), <Math tex="d(\Omega,\mathcal D)=r" />{" "}
              (tangente), <Math tex="d(\Omega,\mathcal D)<r" /> (sécante en deux points).
            </p>
          </Box>
          <Callout variant="success" title="Équation de la tangente en un point A du cercle">
            <MathBlock tex="\overrightarrow{\Omega A}\cdot\vec u=0\quad\text{où }\vec u\text{ est le vecteur directeur de la tangente}" />
            <p>
              Autrement dit : la tangente en <Math tex="A" /> passe par <Math tex="A" /> et a pour vecteur
              normal <Math tex="\overrightarrow{\Omega A}" />.
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="06 · À toi de jouer"
        title="Exercices · Le produit scalaire et ses applications"
        tone="muted"
        description="6 exercices corrigés couvrant aire par déterminant, droite perpendiculaire, cercle de diamètre, tangente, et deux ensembles de points classiques."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre produit scalaire est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Aire d'un triangle par déterminant"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Dans un repère orthonormé, soient <Math tex="A(1,1)" />, <Math tex="B(4,1)" />,{" "}
                <Math tex="C(2,5)" />. Calculer l&apos;aire du triangle <Math tex="ABC" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AB}(3,0)" />, <Math tex="\overrightarrow{AC}(1,4)" /> :
                </p>
                <MathBlock tex="\det(\overrightarrow{AB},\overrightarrow{AC})=3\times4-0\times1=12" />
                <p className="font-semibold text-green-700">
                  <Math tex="S_{ABC}=\dfrac12|12|=6" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Droite perpendiculaire"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(d):3x-y+5=0" />. Trouver l&apos;équation de la droite{" "}
                <Math tex="(\Delta)" /> passant par <Math tex="A(1,2)" /> et perpendiculaire à{" "}
                <Math tex="(d)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="(d)" /> a pour vecteur normal <Math tex="\vec n(3,-1)" />. Pour que{" "}
                  <Math tex="(\Delta)" /> soit perpendiculaire à <Math tex="(d)" />, son vecteur normal{" "}
                  <Math tex="\vec n'(a,b)" /> doit vérifier <Math tex="3a-b=0" />, par exemple{" "}
                  <Math tex="\vec n'(1,3)" />.
                </p>
                <p>
                  Donc <Math tex="(\Delta):1(x-1)+3(y-2)=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="(\Delta):x+3y-7=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Reconnaître un cercle de diamètre"
            itemsLabel="1 identification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="(x-2)(x+5)+(y-1)(y-4)=0" /> est l&apos;équation d&apos;un cercle, et
                déterminer son centre et son rayon.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On reconnaît la forme <Math tex="(x-x_A)(x-x_B)+(y-y_A)(y-y_B)=0" /> avec{" "}
                  <Math tex="A(2,1)" /> et <Math tex="B(-5,4)" /> : c&apos;est l&apos;équation du{" "}
                  <strong>cercle de diamètre</strong> <Math tex="[AB]" />.
                </p>
                <p className="font-semibold text-green-700">
                  Centre : milieu de <Math tex="[AB]" /> = <Math tex="\Omega\!\left(-\dfrac32,\dfrac52\right)" />
                  . Rayon : <Math tex="r=\dfrac{AB}{2}" />, avec{" "}
                  <Math tex="AB=\sqrt{(2+5)^2+(1-4)^2}=\sqrt{49+9}=\sqrt{58}" />, donc{" "}
                  <Math tex="r=\dfrac{\sqrt{58}}2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Tangente à un cercle en un point"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="I(4,-1)" /> et <Math tex="A(1,5)" />, et <Math tex="\mathcal C" /> le
                cercle de centre <Math tex="I" /> passant par <Math tex="A" />. Montrer que la droite{" "}
                <Math tex="(d):x-2y+9=0" /> est tangente à <Math tex="\mathcal C" /> en <Math tex="A" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;abord, <Math tex="A\in(d)" /> : <Math tex="1-2(5)+9=1-10+9=0" />. ✓
                </p>
                <p>
                  <Math tex="\overrightarrow{IA}(1-4,5+1)=(-3,6)" />. Un vecteur directeur de{" "}
                  <Math tex="(d)" /> (normal <Math tex="(1,-2)" />) est <Math tex="\vec u(2,1)" />.
                </p>
                <MathBlock tex="\overrightarrow{IA}\cdot\vec u=(-3)(2)+6(1)=-6+6=0" />
                <p className="font-semibold text-green-700">
                  <Math tex="\overrightarrow{IA}\perp\vec u" /> et <Math tex="A\in(d)\cap\mathcal C" /> : donc{" "}
                  <Math tex="(d)" /> est tangente à <Math tex="\mathcal C" /> en <Math tex="A" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Ensemble de points MA² + MB² = k"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="A,B" /> tels que <Math tex="AB=6" />, <Math tex="I" /> le milieu de{" "}
                <Math tex="[AB]" />. Déterminer l&apos;ensemble des points <Math tex="M" /> tels que{" "}
                <Math tex="MA^2+MB^2=68" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En introduisant <Math tex="I" /> (relation du parallélogramme médian) :
                </p>
                <MathBlock tex="MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}" />
                <p>
                  Donc <Math tex="68=2MI^2+\dfrac{36}{2}=2MI^2+18" />, soit <Math tex="MI^2=25" />, donc{" "}
                  <Math tex="MI=5" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble cherché est le cercle de centre <Math tex="I" /> et de rayon{" "}
                  <Math tex="5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Ensemble de points MA² − MB² = k"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="A,B" /> deux points distincts et <Math tex="I" /> le milieu de{" "}
                <Math tex="[AB]" />. Montrer que <Math tex="MA^2-MB^2=2\,\overrightarrow{AB}\cdot\overrightarrow{IM}" />
                , et en déduire la nature de l&apos;ensemble des points <Math tex="M" /> tels que{" "}
                <Math tex="MA^2-MB^2=k" /> (<Math tex="k" /> fixé).
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On écrit <Math tex="\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}" /> et{" "}
                  <Math tex="\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}" /> :
                </p>
                <MathBlock tex="MA^2-MB^2=\big(\overrightarrow{MI}+\overrightarrow{IA}\big)^2-\big(\overrightarrow{MI}+\overrightarrow{IB}\big)^2=2\overrightarrow{MI}\cdot(\overrightarrow{IA}-\overrightarrow{IB})+IA^2-IB^2" />
                <p>
                  Comme <Math tex="I" /> est le milieu de <Math tex="[AB]" />,{" "}
                  <Math tex="IA=IB" /> (donc <Math tex="IA^2-IB^2=0" />) et{" "}
                  <Math tex="\overrightarrow{IA}-\overrightarrow{IB}=2\overrightarrow{IA}=-\overrightarrow{AB}" />
                  . D&apos;où :
                </p>
                <MathBlock tex="MA^2-MB^2=-2\overrightarrow{MI}\cdot\overrightarrow{AB}=2\overrightarrow{AB}\cdot\overrightarrow{IM}" />
                <p className="font-semibold text-green-700">
                  L&apos;équation <Math tex="2\overrightarrow{AB}\cdot\overrightarrow{IM}=k" /> est de la
                  forme <Math tex="\overrightarrow{AB}\cdot\overrightarrow{IM}=\text{cste}" /> : c&apos;est
                  l&apos;équation d&apos;une <strong>droite perpendiculaire à</strong>{" "}
                  <Math tex="(AB)" /> (car <Math tex="\overrightarrow{AB}" /> en est un vecteur normal).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
