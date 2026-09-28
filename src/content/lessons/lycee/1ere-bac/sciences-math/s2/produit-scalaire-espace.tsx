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
  title: "Le produit scalaire dans l'espace · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur le produit scalaire dans l'espace pour la 1ère année Baccalauréat Sciences Mathématiques : produit scalaire et expression analytique, vecteur normal et équation cartésienne d'un plan, positions relatives de deux plans, distance d'un point à un plan, équation cartésienne d'une sphère, intersection d'une sphère avec une droite ou un plan, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "Le produit scalaire dans l'espace",
  heroSubtitle:
    "Un vecteur normal remplace deux vecteurs directeurs pour décrire un plan — et le produit scalaire donne accès à toute la géométrie de la sphère.",
  footerNote: "Le produit scalaire dans l'espace · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
  sections: [
    { id: "cours-produit-scalaire", label: "Produit scalaire" },
    { id: "cours-plan", label: "Vecteur normal, plan" },
    { id: "cours-sphere", label: "La sphère" },
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
          { value: "1", label: "vecteur normal suffit" },
          { value: "6", label: "exercices corrigés" },
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
          <div className="relative flex select-none items-center font-serif text-white italic">
            <Math tex="\vec n\cdot\overrightarrow{AM}=0" />
          </div>
        }
      />

      {/* ===================== I. PRODUIT SCALAIRE ===================== */}
      <LessonSection
        id="cours-produit-scalaire"
        kicker="01 · Prolonger le plan à l'espace"
        title="Produit scalaire dans l'espace"
        tone="light"
        description="Même définition, mêmes propriétés qu'en géométrie plane — le produit scalaire se calcule dans le plan formé par les deux vecteurs."
      >
        <CourseBlock numeral="I" title="Définition et expression analytique">
          <Box title="Définition" tone="def">
            <p>
              Pour <Math tex="\vec u,\vec v" /> non nuls : <Math tex="\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos(\vec u,\vec v)" />
              . Toutes les propriétés du produit scalaire du plan restent valables (bilinéarité, symétrie,{" "}
              <Math tex="\vec u\cdot\vec u=\|\vec u\|^2" />).
            </p>
          </Box>
          <Callout variant="success" title="Dans une base orthonormée">
            <p>
              Pour <Math tex="\vec u(x,y,z)" /> et <Math tex="\vec v(x',y',z')" /> :
            </p>
            <MathBlock tex="\vec u\cdot\vec v=xx'+yy'+zz',\qquad \|\vec u\|=\sqrt{x^2+y^2+z^2}" />
            <MathBlock tex="\vec u\perp\vec v\iff\vec u\cdot\vec v=0" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. VECTEUR NORMAL, PLAN ===================== */}
      <LessonSection
        id="cours-plan"
        kicker="02 · Un seul vecteur pour décrire un plan"
        title="Vecteur normal, équation cartésienne d'un plan"
        tone="muted"
        description="Le produit scalaire remplace la paire de vecteurs directeurs par un unique vecteur orthogonal à tout le plan."
      >
        <CourseBlock numeral="II" title="Vecteur normal">
          <Box title="Définition et propriété" tone="def">
            <p>
              <Math tex="\vec n" /> est <strong className="text-foreground">normal</strong> au plan{" "}
              <Math tex="P" /> ssi <Math tex="\vec n\neq\vec0" /> et{" "}
              <Math tex="\vec n\cdot\overrightarrow{AM}=0" /> pour tous <Math tex="A,M\in P" />. Il suffit que{" "}
              <Math tex="\vec n" /> soit orthogonal à <strong>deux vecteurs non colinéaires</strong> de{" "}
              <Math tex="P" />.
            </p>
          </Box>
          <Callout variant="success" title="Équation cartésienne d'un plan">
            <p>
              Le plan passant par <Math tex="A(x_A,y_A,z_A)" /> de vecteur normal <Math tex="\vec n(a,b,c)" />{" "}
              a pour équation <Math tex="ax+by+cz+d=0" /> avec <Math tex="d=-(ax_A+by_A+cz_A)" />.
              Réciproquement, toute équation <Math tex="ax+by+cz+d=0" /> (<Math tex="(a,b,c)\neq(0,0,0)" />)
              définit un plan de vecteur normal <Math tex="\vec n(a,b,c)" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Positions relatives, distance point-plan">
          <Box title="Deux plans" tone="def">
            <p>
              Pour <Math tex="(P):ax+by+cz+d=0" /> et <Math tex="(P'):a'x+b'y+c'z+d'=0" />, de normaux{" "}
              <Math tex="\vec n,\vec n'" /> :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="P\parallel P'" /> ssi <Math tex="\vec n,\vec n'" /> colinéaires.
              </li>
              <li>
                <Math tex="P,P'" /> sécants ssi <Math tex="\vec n,\vec n'" /> non colinéaires.
              </li>
              <li>
                <Math tex="P\perp P'" /> ssi <Math tex="\vec n\cdot\vec n'=0" />.
              </li>
            </ul>
          </Box>
          <Callout variant="success" title="Distance d'un point à un plan">
            <MathBlock tex="d(A,P)=\dfrac{|ax_A+by_A+cz_A+d|}{\sqrt{a^2+b^2+c^2}}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. LA SPHÈRE ===================== */}
      <LessonSection
        id="cours-sphere"
        kicker="03 · Le cercle de l'espace"
        title="La sphère : équation, intersections"
        tone="light"
        description="Une équation quadratique cache toujours une sphère, un point, ou l'ensemble vide — un simple calcul de signe tranche."
      >
        <CourseBlock numeral="IV" title="Équation cartésienne d'une sphère">
          <Box title="Définition" tone="def">
            <p>
              La sphère <Math tex="S(\Omega,R)" /> de centre <Math tex="\Omega(a,b,c)" /> et de rayon{" "}
              <Math tex="R" /> a pour équation :
            </p>
            <MathBlock tex="(x-a)^2+(y-b)^2+(z-c)^2=R^2" />
          </Box>
          <Callout variant="warning" title="Discrimination d'une équation quadratique">
            <p>
              L&apos;ensemble <Math tex="x^2+y^2+z^2-2ax-2by-2cz+d=0" /> se ramène à{" "}
              <Math tex="(x-a)^2+(y-b)^2+(z-c)^2=a^2+b^2+c^2-d" />, d&apos;où :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="a^2+b^2+c^2-d>0" /> : sphère de centre <Math tex="\Omega(a,b,c)" />, rayon{" "}
                <Math tex="R=\sqrt{a^2+b^2+c^2-d}" />.
              </li>
              <li>
                <Math tex="a^2+b^2+c^2-d=0" /> : réduit au seul point <Math tex="\Omega(a,b,c)" />.
              </li>
              <li>
                <Math tex="a^2+b^2+c^2-d<0" /> : ensemble vide.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Intersection d'une sphère avec une droite ou un plan">
          <Box title="Sphère et droite" tone="def">
            <p>
              Soit <Math tex="H" /> le projeté orthogonal du centre <Math tex="\Omega" /> sur la droite{" "}
              <Math tex="D" /> et <Math tex="d=\Omega H" /> :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="d>R" /> : intersection vide.
              </li>
              <li>
                <Math tex="d=R" /> : <Math tex="D" /> tangente à la sphère en <Math tex="H" />.
              </li>
              <li>
                <Math tex="d<R" /> : <Math tex="D" /> sécante, en deux points symétriques par rapport à{" "}
                <Math tex="H" />.
              </li>
            </ul>
          </Box>
          <Callout variant="success" title="Sphère et plan">
            <p>
              Soit <Math tex="H" /> le projeté orthogonal de <Math tex="\Omega" /> sur le plan{" "}
              <Math tex="P" /> et <Math tex="d=\Omega H" /> :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="d>R" /> : intersection vide.
              </li>
              <li>
                <Math tex="d=R" /> : <Math tex="P" /> tangent à la sphère en <Math tex="H" />.
              </li>
              <li>
                <Math tex="d<R" /> : intersection = cercle de centre <Math tex="H" />, de rayon{" "}
                <Math tex="r=\sqrt{R^2-d^2}" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Le produit scalaire dans l'espace"
        tone="muted"
        description="6 exercices corrigés couvrant produit scalaire analytique, équation de plan, distance point-plan, équation de sphère, et les deux types d'intersection."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre produit scalaire dans l'espace est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Produit scalaire et orthogonalité"
            itemsLabel="1 vérification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="\vec u(1,2,-1)" /> et <Math tex="\vec v(1,1,3)" />. Calculer{" "}
                <Math tex="\vec u\cdot\vec v" /> et dire si <Math tex="\vec u" /> et <Math tex="\vec v" /> sont
                orthogonaux.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\vec u\cdot\vec v=1\times1+2\times1+(-1)\times3=1+2-3=0" />
                <p className="font-semibold text-green-700">
                  <Math tex="\vec u\cdot\vec v=0" /> : les vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" />{" "}
                  sont <strong>orthogonaux</strong>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Équation cartésienne d'un plan"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer l&apos;équation cartésienne du plan <Math tex="P" /> passant par{" "}
                <Math tex="A(2,-1,3)" /> et de vecteur normal <Math tex="\vec n(1,-2,3)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;équation est de la forme <Math tex="x-2y+3z+d=0" />. Comme{" "}
                  <Math tex="A\in P" /> :
                </p>
                <MathBlock tex="2-2(-1)+3(3)+d=0\iff2+2+9+d=0\iff d=-13" />
                <p className="font-semibold text-green-700">
                  <Math tex="P:x-2y+3z-13=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Distance d'un point à un plan"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la distance de <Math tex="B(0,2,-1)" /> au plan{" "}
                <Math tex="P:x-2y+3z-13=0" /> (celui de l&apos;exercice précédent).
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="d(B,P)=\dfrac{|0-2(2)+3(-1)-13|}{\sqrt{1^2+(-2)^2+3^2}}=\dfrac{|-20|}{\sqrt{14}}=\dfrac{20}{\sqrt{14}}" />
                <p className="font-semibold text-green-700">
                  <Math tex="d(B,P)=\dfrac{10\sqrt{14}}7" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Équation de sphère et discrimination"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="x^2+y^2+z^2-4x+2y-6z+5=0" /> est l&apos;équation d&apos;une sphère, et
                déterminer son centre et son rayon.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On identifie <Math tex="a=2" />, <Math tex="b=-1" />, <Math tex="c=3" />,{" "}
                  <Math tex="d=5" /> (avec <Math tex="-2a=-4,\ -2b=2,\ -2c=-6" />) :
                </p>
                <MathBlock tex="a^2+b^2+c^2-d=4+1+9-5=9>0" />
                <p className="font-semibold text-green-700">
                  C&apos;est bien une sphère, de centre <Math tex="\Omega(2,-1,3)" /> et de rayon{" "}
                  <Math tex="R=\sqrt9=3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Intersection sphère-droite"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit la sphère <Math tex="S" /> de centre <Math tex="\Omega(1,1,1)" /> et de rayon{" "}
                <Math tex="R=3" />, et la droite <Math tex="D:\begin{cases}x=1\\y=1\\z=-2+t\end{cases}" />
                . Étudier la position relative de <Math tex="S" /> et <Math tex="D" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On substitue dans l&apos;équation <Math tex="(x-1)^2+(y-1)^2+(z-1)^2=9" /> :
                </p>
                <MathBlock tex="0+0+(-2+t-1)^2=9\iff(t-3)^2=9\iff t-3=\pm3\iff t=0\ \text{ou}\ t=6" />
                <p className="font-semibold text-green-700">
                  Deux solutions : <Math tex="D" /> est <strong>sécante</strong> à <Math tex="S" />, aux points{" "}
                  <Math tex="A(1,1,-2)" /> (<Math tex="t=0" />) et <Math tex="B(1,1,4)" /> (<Math tex="t=6" />
                  ).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Intersection sphère-plan"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit la sphère <Math tex="S" /> de centre <Math tex="\Omega(1,2,-1)" /> et de rayon{" "}
                <Math tex="R=3" />, et le plan <Math tex="P:x+2y-2z-3=0" />. Étudier la position relative de{" "}
                <Math tex="S" /> et <Math tex="P" />, et préciser le rayon du cercle d&apos;intersection le
                cas échéant.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="d(\Omega,P)=\dfrac{|1+2(2)-2(-1)-3|}{\sqrt{1^2+2^2+(-2)^2}}=\dfrac{|4|}{3}=\dfrac43" />
                <p>
                  Comme <Math tex="d=\dfrac43<R=3" />, le plan <Math tex="P" /> est{" "}
                  <strong>sécant</strong> à la sphère <Math tex="S" />, suivant un cercle de rayon :
                </p>
                <MathBlock tex="r=\sqrt{R^2-d^2}=\sqrt{9-\dfrac{16}9}=\sqrt{\dfrac{65}9}" />
                <p className="font-semibold text-green-700">
                  <Math tex="r=\dfrac{\sqrt{65}}3" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
