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
  title: "Ensembles et applications · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur les applications pour la 1ère année Baccalauréat Sciences Mathématiques : définition et égalité d'applications, image directe et image réciproque, restriction et prolongement, applications injective, surjective, bijective et application réciproque, composée d'applications, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Ensembles et applications",
  heroSubtitle:
    "Le vocabulaire précis des fonctions : image directe, image réciproque, injectivité, surjectivité, bijectivité et composée — la base de toute l'étude de fonctions à venir.",
  footerNote: "Ensembles et applications · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
  sections: [
    { id: "cours-generalites", label: "Généralités" },
    { id: "cours-images", label: "Image directe / réciproque" },
    { id: "cours-injective", label: "Injective, surjective, bijective" },
    { id: "cours-composee", label: "Composée" },
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
          { value: "3", label: "injective / surjective / bijective" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-generalites"
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
            <Math tex="f:E\to F" />
          </div>
        }
      />

      {/* ===================== I. GÉNÉRALITÉS ===================== */}
      <LessonSection
        id="cours-generalites"
        kicker="01 · Le vocabulaire précis"
        title="Application : définition et égalité"
        tone="light"
        description="Toute fonction est une application ; le vocabulaire (antécédent, image, ensemble de départ/d'arrivée) sert pour tout le reste du chapitre."
      >
        <CourseBlock numeral="I" title="Application">
          <Box title="Définition" tone="def">
            <p>
              Soient <Math tex="E" /> et <Math tex="F" /> deux ensembles non vides. Une{" "}
              <strong className="text-foreground">application</strong> <Math tex="f" /> de <Math tex="E" /> vers{" "}
              <Math tex="F" /> associe à <strong>chaque</strong> élément <Math tex="x" /> de <Math tex="E" /> un{" "}
              <strong>unique</strong> élément <Math tex="y=f(x)" /> de <Math tex="F" />. On note :
            </p>
            <MathBlock tex="\begin{gathered}f:E\to F\\x\mapsto f(x)\end{gathered}" />
            <p>
              <Math tex="E" /> est l&apos;ensemble de départ, <Math tex="F" /> l&apos;ensemble d&apos;arrivée,{" "}
              <Math tex="x" /> l&apos;antécédent, <Math tex="y=f(x)" /> l&apos;image.
            </p>
          </Box>
          <Callout variant="success" title="Égalité de deux applications">
            <MathBlock tex="f=g\iff \big(E=E'\big)\wedge\big(F=F'\big)\wedge\big(\forall x\in E,\ f(x)=g(x)\big)" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. IMAGES ===================== */}
      <LessonSection
        id="cours-images"
        kicker="02 · Transporter des sous-ensembles"
        title="Image directe et image réciproque"
        tone="muted"
        description="Deux opérations qui transportent un sous-ensemble d'un côté à l'autre de l'application, avec des propriétés à connaître par cœur."
      >
        <CourseBlock numeral="II" title="Définitions">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Image directe" tone="def">
              <p>
                Pour <Math tex="A\subset E" /> :
              </p>
              <MathBlock tex="f(A)=\{f(x)\ /\ x\in A\}\subset F" />
              <p>
                <Math tex="y\in f(A)\iff \exists x\in A,\ y=f(x)" />.
              </p>
            </Box>
            <Box title="Image réciproque" tone="def">
              <p>
                Pour <Math tex="B\subset F" /> :
              </p>
              <MathBlock tex="f^{-1}(B)=\{x\in E\ /\ f(x)\in B\}\subset E" />
              <p>
                <Math tex="x\in f^{-1}(B)\iff f(x)\in B" />.
              </p>
            </Box>
          </div>
        </CourseBlock>

        <CourseBlock numeral="III" title="Propriétés (à connaître par cœur)">
          <Callout variant="success" title="Six propriétés">
            <div className="space-y-1.5">
              <p>
                <Math tex="A\subset B\Rightarrow f(A)\subset f(B)" />
              </p>
              <p>
                <Math tex="f(A\cup B)=f(A)\cup f(B)" />
              </p>
              <p>
                <Math tex="f(A\cap B)\subset f(A)\cap f(B)" /> (inclusion seulement — pas toujours l&apos;égalité !)
              </p>
              <p>
                <Math tex="C\subset D\Rightarrow f^{-1}(C)\subset f^{-1}(D)" />
              </p>
              <p>
                <Math tex="f^{-1}(C\cap D)=f^{-1}(C)\cap f^{-1}(D)" />
              </p>
              <p>
                <Math tex="f^{-1}(C\cup D)=f^{-1}(C)\cup f^{-1}(D)" />
              </p>
            </div>
          </Callout>
          <Box title="Remarque essentielle" tone="prop">
            L&apos;image directe d&apos;une <strong>intersection</strong> n&apos;est en général qu&apos;une
            inclusion, pas une égalité — contrairement à l&apos;image réciproque, où les deux opérations{" "}
            <Math tex="\cup" /> et <Math tex="\cap" /> se comportent parfaitement.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Restriction et prolongement">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Restriction" tone="def">
              <p>
                Si <Math tex="A\subset E" />, la <strong className="text-foreground">restriction</strong> de{" "}
                <Math tex="f" /> à <Math tex="A" /> est l&apos;application <Math tex="g:A\to F" /> avec{" "}
                <Math tex="g(x)=f(x)" /> pour tout <Math tex="x\in A" />.
              </p>
            </Box>
            <Box title="Prolongement" tone="def">
              <p>
                Si <Math tex="E\subset B" />, un <strong className="text-foreground">prolongement</strong> de{" "}
                <Math tex="f" /> à <Math tex="B" /> est une application <Math tex="h:B\to F" /> telle que{" "}
                <Math tex="h(x)=f(x)" /> pour tout <Math tex="x\in E" /> (et <Math tex="h" /> libre ailleurs sur{" "}
                <Math tex="B\setminus E" />).
              </p>
            </Box>
          </div>
          <Callout variant="warning" title="Attention">
            Un prolongement n&apos;est <strong>pas unique</strong> — il existe une infinité de façons de prolonger
            une application sur un ensemble plus grand.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. INJECTIVE / SURJECTIVE / BIJECTIVE ===================== */}
      <LessonSection
        id="cours-injective"
        kicker="03 · Le cœur du chapitre"
        title="Application injective, surjective, bijective"
        tone="light"
        description="Trois propriétés qui décrivent combien d'antécédents peut avoir chaque élément de l'ensemble d'arrivée."
      >
        <CourseBlock numeral="V" title="Injective, surjective">
          <Box title="Injective — au plus un antécédent" tone="def">
            <MathBlock tex="f\ \text{injective}\iff \forall x,x'\in E,\ f(x)=f(x')\Rightarrow x=x'" />
          </Box>
          <Box title="Surjective — au moins un antécédent" tone="def">
            <MathBlock tex="f\ \text{surjective}\iff \forall y\in F,\ \exists x\in E,\ y=f(x)\iff f(E)=F" />
            <p className="mt-1">
              En pratique : <Math tex="f" /> est surjective ssi l&apos;équation <Math tex="f(x)=y" /> admet{" "}
              <strong>au moins une</strong> solution <Math tex="x\in E" />, pour tout <Math tex="y\in F" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Bijective et application réciproque">
          <Callout variant="success" title="Bijective — exactement un antécédent">
            <MathBlock tex="f\ \text{bijective}\iff \forall y\in F,\ \exists!\,x\in E,\ y=f(x)\iff f\ \text{injective et surjective}" />
            <p className="mt-2">
              Dans ce cas, l&apos;application <Math tex="f^{-1}:F\to E" /> qui associe à chaque{" "}
              <Math tex="y" /> son unique antécédent est l&apos;<strong>application réciproque</strong> de{" "}
              <Math tex="f" />.
            </p>
          </Callout>
          <Box title="Relation fondamentale" tone="prop">
            <MathBlock tex="x=f(x)\ (x\in E)\iff f^{-1}(y)=x\ (y\in F)" />
            <p>
              et <Math tex="f\circ f^{-1}=\mathrm{Id}_F" />, <Math tex="f^{-1}\circ f=\mathrm{Id}_E" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. COMPOSÉE ===================== */}
      <LessonSection
        id="cours-composee"
        kicker="04 · Enchaîner deux applications"
        title="Composée de deux applications"
        tone="muted"
        description="Une opération non commutative, mais associative — elle enchaîne deux applications en une seule."
      >
        <CourseBlock numeral="VII" title="Définition et propriétés">
          <Box title="Définition" tone="def">
            <p>
              Pour <Math tex="f:E\to F" /> et <Math tex="g:F\to G" />, la composée{" "}
              <Math tex="g\circ f:E\to G" /> est définie par :
            </p>
            <MathBlock tex="(g\circ f)(x)=g\big(f(x)\big)" />
          </Box>
          <Callout variant="warning" title="À retenir">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                En général, <Math tex="f\circ g\neq g\circ f" /> (non commutative).
              </li>
              <li>
                <Math tex="(f\circ g)\circ h=f\circ(g\circ h)" /> (associative).
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Ensembles et applications"
        tone="light"
        description="6 exercices corrigés, au niveau Sciences Math : restriction, propriétés de l'image, injectivité/surjectivité, et trois bijections classiques avec leur réciproque."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre ensembles et applications est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Restriction d'une application"
            itemsLabel="1 vérification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On considère <Math tex="f:\mathbb R\to\mathbb R,\ f(x)=|x|-5x" /> et{" "}
                <Math tex="g:[0,+\infty[\to\mathbb R,\ g(x)=-4x" />. Montrer que <Math tex="g" /> est la
                restriction de <Math tex="f" /> sur <Math tex="[0,+\infty[" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x\ge0" />, <Math tex="|x|=x" />, donc :
                </p>
                <MathBlock tex="f(x)=x-5x=-4x" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\forall x\in[0,+\infty[,\ f(x)=-4x=g(x)" /> : <Math tex="g" /> est bien la
                  restriction de <Math tex="f" /> sur <Math tex="[0,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Image d'une intersection"
            itemsLabel="3 questions"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Soit <Math tex="f:E\to F" />, <Math tex="A,B\subset E" />. Montrer que{" "}
                  <Math tex="f(A\cap B)\subset f(A)\cap f(B)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Donner un exemple où l&apos;inclusion est stricte.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>c.</strong> Montrer que si <Math tex="f" /> est injective, alors{" "}
                  <Math tex="f(A\cap B)=f(A)\cap f(B)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>a.</strong> Soit <Math tex="y\in f(A\cap B)" /> : il existe <Math tex="x\in A\cap B" />{" "}
                  tel que <Math tex="y=f(x)" />.
                </p>
                <p>
                  Comme <Math tex="x\in A" />, <Math tex="y\in f(A)" /> ; comme <Math tex="x\in B" />,{" "}
                  <Math tex="y\in f(B)" />.
                </p>
                <p>
                  Donc <Math tex="y\in f(A)\cap f(B)" />.
                </p>
                <p>
                  <strong>b.</strong> Prenons <Math tex="f(x)=x^2" /> sur <Math tex="\mathbb R" />,{" "}
                  <Math tex="A=[-1,0]" />, <Math tex="B=[0,1]" />.
                </p>
                <p>
                  Alors <Math tex="A\cap B=\{0\}" /> donc <Math tex="f(A\cap B)=\{0\}" />, mais{" "}
                  <Math tex="f(A)=f(B)=[0,1]" /> donc <Math tex="f(A)\cap f(B)=[0,1]" />.
                </p>
                <p>
                  L&apos;inclusion <Math tex="\{0\}\subsetneq[0,1]" /> est stricte.
                </p>
                <p>
                  <strong>c.</strong> Reste à montrer <Math tex="f(A)\cap f(B)\subset f(A\cap B)" />.
                </p>
                <p>
                  Soit <Math tex="y\in f(A)\cap f(B)" /> : <Math tex="\exists x_1\in A,\ y=f(x_1)" /> et{" "}
                  <Math tex="\exists x_2\in B,\ y=f(x_2)" />.
                </p>
                <p>
                  Alors <Math tex="f(x_1)=f(x_2)" />, et par <strong>injectivité</strong>,{" "}
                  <Math tex="x_1=x_2\in A\cap B" />, donc <Math tex="y=f(x_1)\in f(A\cap B)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Avec l&apos;inclusion de <strong>a.</strong>, on conclut{" "}
                  <Math tex="f(A\cap B)=f(A)\cap f(B)" /> lorsque <Math tex="f" /> est injective.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Injectivité et surjectivité"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f:\mathbb N\times\mathbb N\to\mathbb N" /> définie par{" "}
                <Math tex="f(a,b)=a" />. <Math tex="f" /> est-elle injective ? surjective ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Injectivité :</strong> <Math tex="f(1,0)=1" /> et <Math tex="f(1,5)=1" />, mais{" "}
                  <Math tex="(1,0)\neq(1,5)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f" /> n&apos;est <strong>pas injective</strong>.
                </p>
                <p>
                  <strong>Surjectivité :</strong> pour tout <Math tex="a\in\mathbb N" />, le couple{" "}
                  <Math tex="(a,0)\in\mathbb N\times\mathbb N" /> vérifie <Math tex="f(a,0)=a" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f" /> est <strong>surjective</strong>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Bijection ℝ → ]−1,1["
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f:\mathbb R\to\mathbb R" />, <Math tex="f(x)=\dfrac{x}{|x|+1}" />. Montrer que{" "}
                <Math tex="f" /> est injective, puis que <Math tex="f" /> réalise une bijection de{" "}
                <Math tex="\mathbb R" /> vers <Math tex="]-1,1[" />, et déterminer <Math tex="f^{-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Sur <Math tex="\mathbb R^+" />, <Math tex="f(x)=\dfrac{x}{x+1}" /> est strictement croissante ;
                  sur <Math tex="\mathbb R^-" />, <Math tex="f(x)=\dfrac{x}{1-x}" /> aussi.
                </p>
                <p>
                  Comme <Math tex="f(\mathbb R^-)\subset[-1,0[" /> et <Math tex="f(\mathbb R^+)\subset[0,1[" />,{" "}
                  <Math tex="f" /> est strictement croissante sur <Math tex="\mathbb R" /> tout entier, donc{" "}
                  <strong>injective</strong>.
                </p>
                <p>
                  On a toujours <Math tex="|f(x)|<1" />, donc <Math tex="f(\mathbb R)\subset]-1,1[" />.
                </p>
                <p>
                  Pour <Math tex="y\in[0,1[" />, on résout <Math tex="y=\dfrac{x}{x+1}" /> (avec{" "}
                  <Math tex="x\ge0" />) : <Math tex="x=\dfrac{y}{1-y}" />.
                </p>
                <p>
                  Pour <Math tex="y\in]-1,0]" />, on résout <Math tex="y=\dfrac{x}{1-x}" /> (avec{" "}
                  <Math tex="x\le0" />) : <Math tex="x=\dfrac{y}{1+y}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Chaque <Math tex="y\in]-1,1[" /> a un unique antécédent : <Math tex="f" /> réalise une bijection
                  de <Math tex="\mathbb R" /> vers <Math tex="]-1,1[" />, avec :
                </p>
                <MathBlock tex="f^{-1}(y)=\dfrac{y}{1-|y|}" />
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Bijection ℝ → ℝ₊*"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f:\mathbb R\to\mathbb R" />, <Math tex="f(x)=\sqrt{x^2+1}-x" />. Montrer que{" "}
                <Math tex="f" /> est injective, que <Math tex="f" /> réalise une bijection de{" "}
                <Math tex="\mathbb R" /> vers <Math tex="\mathbb R_+^*" />, et déterminer <Math tex="f^{-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x,y\in\mathbb R" />, en multipliant par la quantité conjuguée :
                </p>
                <MathBlock tex="f(x)-f(y)=(x-y)\left(\dfrac{x+y}{\sqrt{x^2+1}+\sqrt{y^2+1}}-1\right)" />
                <p>
                  Or <Math tex="\left|\dfrac{x+y}{\sqrt{x^2+1}+\sqrt{y^2+1}}\right|<1" /> toujours (le numérateur
                  est dominé strictement par le dénominateur).
                </p>
                <p>
                  Donc le second facteur est <strong>strictement négatif</strong>, jamais nul.
                </p>
                <p className="font-semibold text-green-700">
                  Si <Math tex="f(x)=f(y)" />, le produit est nul, donc <Math tex="x-y=0" /> : <Math tex="f" /> est{" "}
                  <strong>injective</strong>.
                </p>
                <p>
                  On a toujours <Math tex="f(x)=\sqrt{x^2+1}-x>0" /> (car <Math tex="\sqrt{x^2+1}>|x|\ge x" />).
                </p>
                <p>
                  Pour <Math tex="y>0" />, on résout <Math tex="y=\sqrt{x^2+1}-x\iff\sqrt{x^2+1}=x+y" /> (avec{" "}
                  <Math tex="x+y\ge0" />) ; en élevant au carré : <Math tex="x^2+1=x^2+2xy+y^2" />, d&apos;où :
                </p>
                <MathBlock tex="x=\dfrac{1-y^2}{2y}" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f" /> réalise une bijection de <Math tex="\mathbb R" /> vers{" "}
                  <Math tex="\mathbb R_+^*" />, avec <Math tex="f^{-1}(y)=\dfrac{1-y^2}{2y}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Une application égale à sa propre réciproque"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f:[0,2]\to[0,2]" />, <Math tex="f(x)=(\sqrt2-\sqrt x)^2" />. Montrer que{" "}
                <Math tex="f" /> est bijective, calculer <Math tex="f\circ f(x)" />, et en déduire{" "}
                <Math tex="f^{-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x\in[0,2]" />, <Math tex="\sqrt x\in[0,\sqrt2]" />, donc{" "}
                  <Math tex="\sqrt2-\sqrt x\in[0,\sqrt2]" />, et <Math tex="f(x)=(\sqrt2-\sqrt x)^2\in[0,2]" /> — la
                  fonction est bien à valeurs dans <Math tex="[0,2]" />.
                </p>
                <p>
                  Sur cet intervalle, <Math tex="x\mapsto\sqrt2-\sqrt x" /> est strictement décroissante et à
                  valeurs positives, donc <Math tex="x\mapsto(\sqrt2-\sqrt x)^2" /> est strictement décroissante :{" "}
                  <Math tex="f" /> est <strong>injective</strong>, et comme <Math tex="f(0)=2" />,{" "}
                  <Math tex="f(2)=0" />, elle prend toutes les valeurs de <Math tex="[0,2]" /> : <Math tex="f" />{" "}
                  est <strong>bijective</strong>.
                </p>
                <p>Calculons <Math tex="f(f(x))" /> ; comme <Math tex="f(x)\in[0,2]" />, on a :</p>
                <MathBlock tex="\sqrt{f(x)}=\big|\sqrt2-\sqrt x\big|=\sqrt2-\sqrt x\quad(\text{car }\sqrt x\le\sqrt2)" />
                <MathBlock tex="f(f(x))=\Big(\sqrt2-\big(\sqrt2-\sqrt x\big)\Big)^2=(\sqrt x)^2=x" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f\circ f=\mathrm{Id}_{[0,2]}" /> : <Math tex="f" /> est sa propre réciproque,{" "}
                  <Math tex="f^{-1}=f" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
