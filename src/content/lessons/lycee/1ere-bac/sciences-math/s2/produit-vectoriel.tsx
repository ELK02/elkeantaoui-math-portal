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
  title: "Le produit vectoriel · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur le produit vectoriel pour la 1ère année Baccalauréat Sciences Mathématiques : orientation de l'espace, définition et propriétés du produit vectoriel, interprétation géométrique (aire d'un triangle), expression analytique, applications (alignement de points, équation d'un plan, intersection de deux plans, distance d'un point à une droite), avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "Le produit vectoriel",
  heroSubtitle:
    "Le dernier outil du programme : un vecteur perpendiculaire à deux autres, dont la norme mesure une aire — la clé de toutes les applications de fin d'année.",
  footerNote: "Le produit vectoriel · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
  sections: [
    { id: "cours-definition", label: "Définition" },
    { id: "cours-aire", label: "Aire, expression analytique" },
    { id: "cours-applications", label: "Applications" },
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
          { value: "1", label: "vecteur, une aire" },
          { value: "6", label: "exercices corrigés" },
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
          <div className="relative flex select-none items-center font-serif text-white italic">
            <Math tex="\vec u\wedge\vec v" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · Un nouveau produit entre vecteurs"
        title="Orientation de l'espace, définition du produit vectoriel"
        tone="light"
        description="Contrairement au produit scalaire (un nombre), le produit vectoriel de deux vecteurs est un troisième vecteur, perpendiculaire aux deux premiers."
      >
        <CourseBlock numeral="I" title="Orientation de l'espace">
          <Box title="Base directe / indirecte" tone="def">
            <p>
              Une base <Math tex="(\vec\imath,\vec\jmath,\vec k)" /> est{" "}
              <strong className="text-foreground">directe</strong> si elle vérifie la règle de la main droite
              (ou du bonhomme d&apos;Ampère). Permuter deux vecteurs d&apos;une base directe donne une base{" "}
              <strong className="text-foreground">indirecte</strong> ; une permutation circulaire (
              <Math tex="\vec\jmath,\vec k,\vec\imath" />) conserve le caractère direct.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Définition du produit vectoriel">
          <Box title="Définition" tone="def">
            <p>
              Pour <Math tex="\vec u,\vec v" /> non colinéaires, le{" "}
              <strong className="text-foreground">produit vectoriel</strong>{" "}
              <Math tex="\vec u\wedge\vec v" /> est l&apos;unique vecteur <Math tex="\vec w" /> tel que :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="\vec w" /> est orthogonal à <Math tex="\vec u" /> et à <Math tex="\vec v" /> ;
              </li>
              <li>
                <Math tex="(\vec u,\vec v,\vec w)" /> forme une base directe ;
              </li>
              <li>
                <Math tex="\|\vec w\|=\|\vec u\|\,\|\vec v\|\,|\sin\alpha|" />, <Math tex="\alpha" /> étant
                l&apos;angle géométrique entre <Math tex="\vec u" /> et <Math tex="\vec v" />.
              </li>
            </ul>
            <p className="mt-1">
              Si <Math tex="\vec u,\vec v" /> sont colinéaires (ou l&apos;un est nul),{" "}
              <Math tex="\vec u\wedge\vec v=\vec0" />.
            </p>
          </Box>
          <Callout variant="success" title="Propriétés">
            <MathBlock tex="\vec u\wedge\vec u=\vec0,\qquad \vec v\wedge\vec u=-(\vec u\wedge\vec v)\ \text{(antisymétrie)}" />
            <MathBlock tex="(\vec u+\vec v)\wedge\vec w=(\vec u\wedge\vec w)+(\vec v\wedge\vec w)\quad\text{(bilinéarité)}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. AIRE, EXPRESSION ANALYTIQUE ===================== */}
      <LessonSection
        id="cours-aire"
        kicker="02 · Calculer une aire, calculer un produit"
        title="Interprétation géométrique et expression analytique"
        tone="muted"
        description="La norme du produit vectoriel donne directement l'aire d'un parallélogramme — et une formule analytique simple permet de le calculer sans angle."
      >
        <CourseBlock numeral="III" title="Aire d'un triangle, d'un parallélogramme">
          <Callout variant="success" title="Propriétés">
            <p>
              Pour <Math tex="A,B,C" /> non alignés :
            </p>
            <MathBlock tex="\text{Aire du parallélogramme }ABA'C=\big\|\overrightarrow{AB}\wedge\overrightarrow{AC}\big\|" />
            <MathBlock tex="\text{Aire}(ABC)=\dfrac12\big\|\overrightarrow{AB}\wedge\overrightarrow{AC}\big\|" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Expression analytique">
          <Box title="Propriété" tone="def">
            <p>
              Dans une base orthonormée directe, pour <Math tex="\vec u(x,y,z)" /> et{" "}
              <Math tex="\vec v(x',y',z')" /> :
            </p>
            <MathBlock tex="\vec u\wedge\vec v=(yz'-zy')\,\vec\imath-(xz'-zx')\,\vec\jmath+(xy'-yx')\,\vec k" />
            <p>
              soit <Math tex="\vec u\wedge\vec v\big(yz'-zy',\ zx'-xz',\ xy'-yx'\big)" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. APPLICATIONS ===================== */}
      <LessonSection
        id="cours-applications"
        kicker="03 · Un outil, quatre usages"
        title="Applications du produit vectoriel"
        tone="light"
        description="Alignement, équation de plan, intersection de plans, distance point-droite : quatre problèmes classiques, résolus en une ligne."
      >
        <CourseBlock numeral="V" title="Alignement, équation de plan">
          <Box title="Alignement de trois points" tone="def">
            <MathBlock tex="A,B,C\text{ alignés}\iff\overrightarrow{AB}\wedge\overrightarrow{AC}=\vec0" />
          </Box>
          <Callout variant="success" title="Équation cartésienne du plan (ABC)">
            <p>
              Le vecteur <Math tex="\overrightarrow{AB}\wedge\overrightarrow{AC}" /> est normal au plan{" "}
              <Math tex="(ABC)" /> :
            </p>
            <MathBlock tex="M\in(ABC)\iff\overrightarrow{AM}\cdot\big(\overrightarrow{AB}\wedge\overrightarrow{AC}\big)=0" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Intersection de deux plans, distance point-droite">
          <Box title="Droite d'intersection de deux plans" tone="prop">
            <p>
              Si <Math tex="\vec n,\vec n'" /> sont les normaux de deux plans sécants{" "}
              <Math tex="P,P'" />, alors <Math tex="\vec n\wedge\vec n'" /> est un vecteur directeur de leur
              droite d&apos;intersection.
            </p>
          </Box>
          <Callout variant="success" title="Distance d'un point à une droite">
            <p>
              Pour <Math tex="\mathcal D(A,\vec u)" /> et <Math tex="M" /> :
            </p>
            <MathBlock tex="d(M,\mathcal D)=\dfrac{\big\|\vec u\wedge\overrightarrow{AM}\big\|}{\|\vec u\|}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Le produit vectoriel"
        tone="muted"
        description="6 exercices corrigés couvrant norme via l'angle, expression analytique, alignement, aire d'un triangle, équation de plan, et distance d'un point à une droite."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre produit vectoriel — et le programme de 1ère Bac Sciences Math — sont terminés.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Norme du produit vectoriel via l'angle"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="\vec u,\vec v" /> tels que <Math tex="\|\vec u\|=2" />,{" "}
                <Math tex="\|\vec v\|=5" /> et <Math tex="(\widehat{\vec u,\vec v})=\dfrac\pi6" />. Calculer{" "}
                <Math tex="\|\vec u\wedge\vec v\|" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\|\vec u\wedge\vec v\|=\|\vec u\|\,\|\vec v\|\sin\dfrac\pi6=2\times5\times\dfrac12=5" />
                <p className="font-semibold text-green-700">
                  <Math tex="\|\vec u\wedge\vec v\|=5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Expression analytique"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="\vec u(2,-1,1)" /> et <Math tex="\vec v(1,3,-2)" />. Calculer{" "}
                <Math tex="\vec u\wedge\vec v" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\vec u\wedge\vec v=\big(yz'-zy',\ zx'-xz',\ xy'-yx'\big)" />
                <MathBlock tex="=\big((-1)(-2)-(1)(3),\ \ (1)(1)-(2)(-2),\ \ (2)(3)-(-1)(1)\big)" />
                <p className="font-semibold text-green-700">
                  <Math tex="\vec u\wedge\vec v=(-1,\ 5,\ 7)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Alignement de trois points"
            itemsLabel="1 vérification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(1,0,-1)" />, <Math tex="B(2,1,0)" />, <Math tex="C(3,2,1)" />. Les
                points <Math tex="A,B,C" /> sont-ils alignés ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AB}(1,1,1)" />, <Math tex="\overrightarrow{AC}(2,2,2)" />. On
                  remarque directement <Math tex="\overrightarrow{AC}=2\overrightarrow{AB}" />, donc :
                </p>
                <MathBlock tex="\overrightarrow{AB}\wedge\overrightarrow{AC}=\vec0" />
                <p className="font-semibold text-green-700">
                  <Math tex="A,B,C" /> sont <strong>alignés</strong>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Aire d'un triangle"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(0,0,0)" />, <Math tex="B(1,2,0)" />, <Math tex="C(0,1,3)" />. Calculer
                l&apos;aire du triangle <Math tex="ABC" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AB}(1,2,0)" />, <Math tex="\overrightarrow{AC}(0,1,3)" /> :
                </p>
                <MathBlock tex="\overrightarrow{AB}\wedge\overrightarrow{AC}=\big(2\times3-0\times1,\ 0\times0-1\times3,\ 1\times1-2\times0\big)=(6,-3,1)" />
                <MathBlock tex="\big\|\overrightarrow{AB}\wedge\overrightarrow{AC}\big\|=\sqrt{36+9+1}=\sqrt{46}" />
                <p className="font-semibold text-green-700">
                  <Math tex="\text{Aire}(ABC)=\dfrac{\sqrt{46}}2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Équation cartésienne d'un plan"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(0,0,0)" />, <Math tex="B(1,2,0)" />, <Math tex="C(0,1,3)" /> (les
                points de l&apos;exercice précédent). Déterminer l&apos;équation cartésienne du plan{" "}
                <Math tex="(ABC)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;après l&apos;exercice précédent, <Math tex="\overrightarrow{AB}\wedge\overrightarrow{AC}=(6,-3,1)" />
                  {" "}est normal au plan <Math tex="(ABC)" />. L&apos;équation est donc de la forme{" "}
                  <Math tex="6x-3y+z+d=0" />.
                </p>
                <p>
                  Comme <Math tex="A(0,0,0)\in(ABC)" /> : <Math tex="d=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="(ABC):6x-3y+z=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Distance d'un point à une droite"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la distance du point <Math tex="M(2,2,2)" /> à la droite{" "}
                <Math tex="\mathcal D(A(1,0,0),\vec u(0,1,1))" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AM}(1,2,2)" /> :
                </p>
                <MathBlock tex="\vec u\wedge\overrightarrow{AM}=\big(1\times2-1\times2,\ 1\times1-0\times2,\ 0\times2-1\times1\big)=(0,1,-1)" />
                <MathBlock tex="\big\|\vec u\wedge\overrightarrow{AM}\big\|=\sqrt{0+1+1}=\sqrt2,\qquad\|\vec u\|=\sqrt{0+1+1}=\sqrt2" />
                <p className="font-semibold text-green-700">
                  <Math tex="d(M,\mathcal D)=\dfrac{\sqrt2}{\sqrt2}=1" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
