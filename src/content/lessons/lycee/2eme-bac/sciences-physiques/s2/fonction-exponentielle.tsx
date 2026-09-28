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
  title: "La fonction Exponentielle · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet de la fonction exponentielle népérienne pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : réciproque de ln, propriétés algébriques, limites, dérivée, primitives, étude de exp, et exponentielle de base a, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 2",
  heroTitle: "La fonction Exponentielle",
  heroSubtitle:
    "La fonction réciproque de ln : en inversant le logarithme népérien, on obtient la fonction exponentielle e^x — sa propre dérivée, toujours positive, et le socle de tous les modèles de croissance.",
  footerNote: "La fonction Exponentielle · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 2.",
  sections: [
    { id: "cours-definition", label: "Définition" },
    { id: "cours-algebrique", label: "Propriétés" },
    { id: "cours-derivee", label: "Limites et dérivée" },
    { id: "cours-base-a", label: "Base a" },
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
          { value: "11", label: "exercices corrigés" },
          { value: "7", label: "notions clés" },
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
          <div className="relative flex select-none items-center gap-2 font-display text-6xl font-extrabold text-white sm:text-7xl">
            <Math tex="e^x" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · La fonction réciproque de ln"
        title="Définition de la fonction exponentielle népérienne"
        tone="light"
        description="ln est continue et strictement croissante de ]0,+∞[ vers ℝ : elle admet donc une fonction réciproque, l'exponentielle."
      >
        <CourseBlock numeral="I" title="Définition">
          <Box title="Rappel" tone="def">
            La fonction <Math tex="\ln" /> est continue et strictement croissante sur <Math tex="]0,+\infty[" />,
            à valeurs dans <Math tex="\mathbb R" /> tout entier (car <Math tex="\lim_{x\to0^+}\ln x=-\infty" /> et{" "}
            <Math tex="\lim_{x\to+\infty}\ln x=+\infty" />). Elle réalise donc une bijection de{" "}
            <Math tex="]0,+\infty[" /> vers <Math tex="\mathbb R" />, et admet une fonction réciproque.
          </Box>
          <Box title="Définition" tone="def">
            La fonction réciproque de <Math tex="\ln" /> s&apos;appelle la{" "}
            <strong className="text-foreground">fonction exponentielle népérienne</strong>. Elle est définie sur{" "}
            <Math tex="\mathbb R" />, à valeurs dans <Math tex="]0,+\infty[" />, et on la note <Math tex="\exp" />{" "}
            (ou, comme on le verra, <Math tex="x\mapsto e^x" />).
          </Box>
          <Callout variant="success" title="Nouvelle notation">
            <p className="mb-2">
              Pour tout <Math tex="r\in\mathbb Q" />, on montre que <Math tex="\exp(r)=e^r" /> où{" "}
              <Math tex="e" /> est le nombre tel que <Math tex="\ln e=1" />. On prolonge cette écriture à tous les
              réels :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="\forall x\in\mathbb R,\ \exp(x)=e^x" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Relation fondamentale et conséquences">
          <Box title="Propriété" tone="prop">
            Pour tout <Math tex="x\in\mathbb R" /> et tout <Math tex="y>0" /> :
          </Box>
          <MathBlock tex="e^x=y\iff x=\ln y" />
          <Callout variant="success" title="Conséquences à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\forall x\in\mathbb R,\ e^x>0" /> (la courbe de <Math tex="\exp" /> reste toujours
                au-dessus de l&apos;axe des abscisses).
              </li>
              <li>
                <Math tex="\forall x>0,\ e^{\ln x}=x" /> et <Math tex="\forall x\in\mathbb R,\ \ln\left(e^x\right)=x" />.
              </li>
              <li>
                <Math tex="e^0=1" /> (car <Math tex="\ln1=0" />) et <Math tex="e^1=e" />.
              </li>
              <li>
                Les courbes de <Math tex="\ln" /> et de <Math tex="\exp" /> sont symétriques par rapport à la
                droite d&apos;équation <Math tex="y=x" />.
              </li>
              <li>
                Pour <Math tex="a,b\in\mathbb R" /> : <Math tex="a<b\iff e^a<e^b" /> (stricte croissance).
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PROPRIÉTÉS ALGÉBRIQUES ===================== */}
      <LessonSection
        id="cours-algebrique"
        kicker="02 · Transformer une somme en produit"
        title="Propriétés algébriques de l'exponentielle"
        tone="muted"
        description="Miroir des propriétés de ln : l'exponentielle transforme les sommes d'exposants en produits."
      >
        <CourseBlock numeral="III" title="Propriétés algébriques">
          <Box title="Propriété" tone="prop">
            Pour tous <Math tex="a,b\in\mathbb R" /> et <Math tex="r\in\mathbb Q" /> :
          </Box>
          <ul className="list-disc space-y-1.5 pl-5 text-sm sm:text-base">
            <li>
              <Math tex="e^{a+b}=e^a\times e^b" />
            </li>
            <li>
              <Math tex="e^{-a}=\dfrac{1}{e^a}" />
            </li>
            <li>
              <Math tex="e^{a-b}=\dfrac{e^a}{e^b}" />
            </li>
            <li>
              <Math tex="\left(e^a\right)^r=e^{ar}" />, en particulier <Math tex="\left(e^a\right)^n=e^{na}" />{" "}
              pour <Math tex="n\in\mathbb Z" />.
            </li>
          </ul>
          <Callout variant="success" title="Exemple">
            <div className="space-y-1.5">
              <p>
                <Math tex="e^{x-3}=0\text{ n'a pas de solution}" /> car <Math tex="e^{x-3}>0" /> toujours.
              </p>
              <p>
                Résolvons <Math tex="e^{x+3}=e^{2x-7}" /> : par stricte croissance,{" "}
                <Math tex="x+3=2x-7\iff x=10" />.
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. LIMITES, DÉRIVÉE, PRIMITIVES ===================== */}
      <LessonSection
        id="cours-derivee"
        kicker="03 · La fonction qui est sa propre dérivée"
        title="Limites de référence, dérivée et primitives"
        tone="light"
        description="e^x possède une propriété unique : sa dérivée est elle-même. Cela en fait l'outil central de toute la modélisation de croissance."
      >
        <CourseBlock numeral="IV" title="Limites de référence">
          <Callout variant="success" title="À connaître par cœur">
            <div className="space-y-2">
              <p>
                <Math tex="\lim_{x\to-\infty}e^x=0" /> et <Math tex="\lim_{x\to+\infty}e^x=+\infty" />.
              </p>
              <p>
                <Math tex="\lim_{x\to-\infty}xe^x=0" /> et, plus généralement,{" "}
                <Math tex="\lim_{x\to-\infty}x^ne^x=0\ (n\in\mathbb N^*)" />.
              </p>
              <p>
                <Math tex="\lim_{x\to+\infty}\dfrac{e^x}{x}=+\infty" /> et{" "}
                <Math tex="\lim_{x\to+\infty}\dfrac{e^x}{x^n}=+\infty\ (n\in\mathbb N^*)" />.
              </p>
              <p>
                <Math tex="\lim_{x\to0}\dfrac{e^x-1}{x}=1" />.
              </p>
            </div>
          </Callout>
          <Box title="Remarque" tone="def">
            La droite d&apos;équation <Math tex="y=0" /> (axe des abscisses) est asymptote horizontale à la courbe
            de <Math tex="\exp" /> en <Math tex="-\infty" />. En <Math tex="+\infty" />, la croissance de{" "}
            <Math tex="e^x" /> l&apos;emporte sur toute puissance de <Math tex="x" /> : la courbe admet une branche
            parabolique de direction l&apos;axe des ordonnées.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Dérivée de exp et de e^u(x)">
          <Box title="Théorème" tone="prop">
            La fonction <Math tex="x\mapsto e^x" /> est dérivable sur <Math tex="\mathbb R" /> et :
          </Box>
          <MathBlock tex="\forall x\in\mathbb R,\ \left(e^x\right)'=e^x" />
          <Box title="Théorème (composée)" tone="prop">
            Si <Math tex="u" /> est dérivable sur un intervalle <Math tex="I" />, alors{" "}
            <Math tex="f(x)=e^{u(x)}" /> est dérivable sur <Math tex="I" /> et :
          </Box>
          <MathBlock tex="f'(x)=u'(x)\,e^{u(x)}" />
          <Callout variant="success" title="Primitives de la forme u'eᵘ">
            Les primitives de <Math tex="g(x)=u'(x)e^{u(x)}" /> sur <Math tex="I" /> sont les fonctions{" "}
            <Math tex="G(x)=e^{u(x)}+c" />, <Math tex="c\in\mathbb R" />.
          </Callout>
          <Box title="Exemple" tone="def">
            Soit <Math tex="f(x)=e^{5x^3-3x}" />. On a <Math tex="f'(x)=\left(15x^2-3\right)e^{5x^3-3x}" />. Et les
            primitives de <Math tex="g(x)=x\,e^{3x^2+1}" /> sont <Math tex="G(x)=\dfrac16e^{3x^2+1}+c" /> (car{" "}
            <Math tex="u(x)=3x^2+1" /> donne <Math tex="u'(x)=6x" />).
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. ÉTUDE DE exp ET EXPONENTIELLE DE BASE a ===================== */}
      <LessonSection
        id="cours-base-a"
        kicker="04 · La famille des fonctions aˣ"
        title="Étude de f(x)=eˣ et exponentielle de base a"
        tone="muted"
        description="Comme pour le logarithme, on peut changer de base : la fonction x↦aˣ généralise l'exponentielle népérienne."
      >
        <CourseBlock numeral="VI" title="Étude complète de f(x)=eˣ">
          <ul className="list-disc space-y-1.5 pl-5 text-sm sm:text-base">
            <li>
              Domaine : <Math tex="D_f=\mathbb R" />, continue et dérivable sur <Math tex="\mathbb R" />.
            </li>
            <li>
              Limites : <Math tex="\lim_{x\to-\infty}e^x=0" /> (asymptote horizontale <Math tex="y=0" /> en{" "}
              <Math tex="-\infty" />), <Math tex="\lim_{x\to+\infty}e^x=+\infty" /> (branche parabolique d&apos;axe{" "}
              <Math tex="(Oy)" />).
            </li>
            <li>
              Dérivée : <Math tex="(e^x)'=e^x>0" /> : <Math tex="\exp" /> est strictement croissante sur{" "}
              <Math tex="\mathbb R" />.
            </li>
            <li>
              Point remarquable : la courbe passe par <Math tex="(0,1)" /> avec une tangente de coefficient
              directeur <Math tex="e^0=1" />.
            </li>
          </ul>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Fonction exponentielle de base a">
          <Box title="Définition" tone="def">
            Soit <Math tex="a\in]0,1[\cup]1,+\infty[" />. La fonction exponentielle de base <Math tex="a" /> est
            définie sur <Math tex="\mathbb R" /> par :
          </Box>
          <MathBlock tex="a^x=e^{x\ln a}" />
          <Callout variant="success" title="Propriétés">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="a^{x+y}=a^xa^y" /> ; <Math tex="a^{-x}=\dfrac1{a^x}" /> ; <Math tex="\left(a^x\right)^r=a^{rx}" />.
              </li>
              <li>
                Pour tout <Math tex="x" /> : <Math tex="\log_a\left(a^x\right)=x" />, et pour tout{" "}
                <Math tex="x>0" /> : <Math tex="a^{\log_ax}=x" />.
              </li>
              <li>
                <Math tex="\left(a^x\right)'=(\ln a)\,a^x" />, du signe de <Math tex="\ln a" /> : si{" "}
                <Math tex="a>1" />, <Math tex="x\mapsto a^x" /> est strictement croissante ; si{" "}
                <Math tex="0<a<1" />, elle est strictement décroissante.
              </li>
            </ul>
          </Callout>
          <Box title="Remarque" tone="prop">
            Le cas <Math tex="a=e" /> redonne l&apos;exponentielle népérienne. La fonction{" "}
            <Math tex="x\mapsto10^x" /> (base <Math tex="10" />) est la fonction réciproque du logarithme
            décimal <Math tex="\log" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · La fonction Exponentielle"
        tone="light"
        description="11 exercices corrigés : équations et inéquations, limites de référence, dérivée et primitives de eᵘ, étude complète d'une fonction, et exponentielle de base a."
      >
        <ExerciseGroup
          total={11}
          celebrationTitle="Bravo, les 11 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre fonction exponentielle est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Résoudre une équation simple"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="e^{2x-1}=e^{x+3}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;équation est définie sur <Math tex="\mathbb R" /> tout entier. Par stricte croissance de{" "}
                  <Math tex="\exp" /> (donc injectivité) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="e^{2x-1}=e^{x+3}\iff2x-1=x+3\iff x=4" />. Donc <Math tex="S=\{4\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Équation du second degré en eˣ"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="e^{2x}-3e^x-4=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="X=e^x>0" />. L&apos;équation devient <Math tex="X^2-3X-4=0" />, dont le
                  discriminant est <Math tex="\Delta=9+16=25" />.
                </p>
                <p>
                  Les racines sont <Math tex="X=\dfrac{3-5}{2}=-1" /> et <Math tex="X=\dfrac{3+5}{2}=4" />. Comme{" "}
                  <Math tex="X=e^x>0" />, on rejette <Math tex="X=-1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Il reste <Math tex="e^x=4\iff x=\ln4" />. Donc <Math tex="S=\{\ln4\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Résoudre une inéquation"
            itemsLabel="1 inéquation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;inéquation <Math tex="e^{2x+1}\leqslant e^{x-2}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\exp" /> étant strictement croissante sur <Math tex="\mathbb R" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="e^{2x+1}\leqslant e^{x-2}\iff2x+1\leqslant x-2\iff x\leqslant-3" />. Donc{" "}
                  <Math tex="S=\,]-\infty,-3]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Limites de référence"
            itemsLabel="3 limites"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}xe^{-x}" />,{" "}
                <Math tex="\displaystyle\lim_{x\to-\infty}xe^x" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to0}\dfrac{e^x-1}{x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En posant <Math tex="t=-x" /> : <Math tex="xe^{-x}=-te^t" />, et quand <Math tex="x\to+\infty" />,{" "}
                  <Math tex="t\to-\infty" />, donc <Math tex="\lim_{x\to+\infty}xe^{-x}=\lim_{t\to-\infty}(-te^t)=0" />{" "}
                  (limite de référence <Math tex="te^t\to0" />).
                </p>
                <p>
                  <Math tex="\lim_{x\to-\infty}xe^x=0" /> est directement une limite de référence.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\lim_{x\to0}\dfrac{e^x-1}{x}=1" /> (limite de référence, aussi le nombre dérivé de{" "}
                  <Math tex="\exp" /> en <Math tex="0" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Dérivée d'une composée"
            itemsLabel="1 dérivée"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la dérivée de <Math tex="f(x)=e^{-x^2+3x}" /> sur <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=-x^2+3x" />, donc <Math tex="u'(x)=-2x+3" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f'(x)=u'(x)e^{u(x)}=(3-2x)e^{-x^2+3x}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Primitive de la forme u'eᵘ"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive de <Math tex="f(x)=xe^{x^2}" /> sur <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=x^2" />, donc <Math tex="u'(x)=2x" />. Ainsi{" "}
                  <Math tex="f(x)=\dfrac12u'(x)e^{u(x)}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac12e^{x^2}+c" />, <Math tex="c\in\mathbb R" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Primitive de la forme u'/u²"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive de <Math tex="f(x)=\dfrac{e^x}{\left(e^x+1\right)^2}" /> sur{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=e^x+1" /> (toujours <Math tex="{}>0" />), donc{" "}
                  <Math tex="u'(x)=e^x" />. Ainsi <Math tex="f=\dfrac{u'}{u^2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=-\dfrac1u=-\dfrac{1}{e^x+1}+c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Étude complète de f(x)=xe⁻ˣ"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=xe^{-x}" /> sur <Math tex="\mathbb R" />. Calculer les limites de{" "}
                <Math tex="f" /> en <Math tex="-\infty" /> et <Math tex="+\infty" />, étudier ses variations et
                donner son tableau de variation.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En <Math tex="-\infty" /> : <Math tex="e^{-x}\to+\infty" /> et <Math tex="x\to-\infty" />, donc{" "}
                  <Math tex="\lim_{x\to-\infty}f(x)=-\infty" />.
                </p>
                <p>
                  En <Math tex="+\infty" /> : <Math tex="\lim_{x\to+\infty}xe^{-x}=0" /> (limite de référence,{" "}
                  <Math tex="y=0" /> asymptote horizontale).
                </p>
                <p>
                  <Math tex="f'(x)=e^{-x}+x\times\left(-e^{-x}\right)=(1-x)e^{-x}" />, du signe de{" "}
                  <Math tex="1-x" /> (car <Math tex="e^{-x}>0" />) : positif sur <Math tex="]-\infty,1[" />,
                  négatif sur <Math tex="]1,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est donc strictement croissante sur <Math tex="]-\infty,1]" />, strictement
                  décroissante sur <Math tex="[1,+\infty[" />, avec un maximum <Math tex="f(1)=\dfrac1e" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Équation exponentielle de base a"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="3^x=5^{2x-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En passant au logarithme népérien (strictement croissant, donc équivalence) :{" "}
                  <Math tex="\ln\left(3^x\right)=\ln\left(5^{2x-1}\right)\iff x\ln3=(2x-1)\ln5" />.
                </p>
                <p>
                  <Math tex="x\ln3=2x\ln5-\ln5\iff x(\ln3-2\ln5)=-\ln5\iff x=\dfrac{\ln5}{2\ln5-\ln3}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="2\ln5-\ln3=\ln25-\ln3=\ln\!\left(\dfrac{25}{3}\right)" />, on a{" "}
                  <Math tex="S=\left\{\dfrac{\ln5}{\ln(25/3)}\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Inéquation avec une base entre 0 et 1"
            itemsLabel="1 inéquation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;inéquation{" "}
                <Math tex="(0{,}5)^{x+1}\geqslant(0{,}5)^{3x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  La base <Math tex="0{,}5" /> vérifie <Math tex="0<0{,}5<1" /> : la fonction{" "}
                  <Math tex="t\mapsto(0{,}5)^t" /> est donc <strong>strictement décroissante</strong>, ce qui
                  inverse le sens de l&apos;inégalité.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="(0{,}5)^{x+1}\geqslant(0{,}5)^{3x}\iff x+1\leqslant3x\iff x\geqslant\dfrac12" />. Donc{" "}
                  <Math tex="S=\left[\dfrac12,+\infty\right[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Système d'équations exponentielles"
            itemsLabel="1 système"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R^2" /> le système{" "}
                <Math tex="\begin{cases}e^xe^y=e^5\\ e^x/e^y=e\end{cases}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="e^xe^y=e^{x+y}" /> et <Math tex="e^x/e^y=e^{x-y}" />, donc le système équivaut à{" "}
                  <Math tex="\begin{cases}x+y=5\\x-y=1\end{cases}" /> (par injectivité de <Math tex="\exp" />
                  ).
                </p>
                <p>
                  En additionnant : <Math tex="2x=6\iff x=3" />, puis <Math tex="y=5-3=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="S=\{(3,2)\}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
