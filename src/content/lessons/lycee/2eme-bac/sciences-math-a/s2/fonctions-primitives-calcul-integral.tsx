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
  title: "Fonctions primitives et calcul intégral · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet sur les fonctions primitives et le calcul intégral pour la 2ème année Baccalauréat Sciences Mathématiques A et B : tableau des primitives usuelles, définition et propriétés de l'intégrale, intégration par parties, changement de variable, calcul d'aires et de volumes, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Math · Semestre 2",
  heroTitle: "Fonctions primitives et calcul intégral",
  heroSubtitle:
    "Retrouver une fonction à partir de sa dérivée, puis calculer des aires, des volumes et des valeurs moyennes : les deux faces d'un même outil, au cœur de l'analyse.",
  footerNote:
    "Fonctions primitives et calcul intégral · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 2.",
  sections: [
    { id: "cours-primitives", label: "Fonctions primitives" },
    { id: "cours-integrale", label: "L'intégrale" },
    { id: "cours-techniques", label: "Techniques de calcul" },
    { id: "cours-applications", label: "Aires, volumes" },
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
          { value: "13", label: "exercices corrigés" },
          { value: "2", label: "notions réunies" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-primitives"
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
            <Math tex="\int_a^b f" />
          </div>
        }
      />

      {/* ===================== I. FONCTIONS PRIMITIVES ===================== */}
      <LessonSection
        id="cours-primitives"
        kicker="01 · Remonter d'une dérivée à une fonction"
        title="Fonctions primitives d'une fonction"
        tone="light"
        description="Chercher une primitive, c'est inverser la dérivation : une opération essentielle qui ne s'effectue, contrairement à la dérivée, que grâce à un tableau et quelques savoir-faire."
      >
        <CourseBlock numeral="I" title="Définition et existence">
          <Box title="Définition" tone="def">
            Soit <Math tex="f" /> une fonction définie sur un intervalle <Math tex="I" />. On dit que{" "}
            <Math tex="F" /> est une <strong className="text-foreground">fonction primitive</strong> de{" "}
            <Math tex="f" /> sur <Math tex="I" /> si <Math tex="F" /> est dérivable sur <Math tex="I" /> et si{" "}
            <Math tex="(\forall x\in I)\big(F'(x)=f(x)\big)" />.
          </Box>
          <Callout variant="success" title="Propriétés fondamentales">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Toute fonction continue sur <Math tex="I" /> admet une primitive sur <Math tex="I" />.</li>
              <li>
                Si <Math tex="F" /> est une primitive de <Math tex="f" /> sur <Math tex="I" />, toutes les
                primitives de <Math tex="f" /> sur <Math tex="I" /> sont les fonctions{" "}
                <Math tex="F+\lambda" /> (<Math tex="\lambda\in\mathbb R" />) — deux primitives d&apos;une même
                fonction sur un intervalle diffèrent d&apos;une constante.
              </li>
              <li>
                Si <Math tex="x_0\in I" /> et <Math tex="y_0\in\mathbb R" />, il existe une <strong>unique</strong>{" "}
                primitive <Math tex="F" /> de <Math tex="f" /> sur <Math tex="I" /> telle que{" "}
                <Math tex="F(x_0)=y_0" />.
              </li>
              <li>
                Si <Math tex="F" /> et <Math tex="G" /> sont des primitives de <Math tex="f" /> et <Math tex="g" />{" "}
                sur <Math tex="I" />, et <Math tex="\alpha\in\mathbb R" />, alors <Math tex="F+G" /> est une
                primitive de <Math tex="f+g" />, et <Math tex="\alpha F" /> est une primitive de{" "}
                <Math tex="\alpha f" /> sur <Math tex="I" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Tableau des primitives usuelles">
          <Box title="Fonctions de référence" tone="def">
            <div className="space-y-1.5">
              <p>
                <Math tex="x\mapsto x^n\ (n\in\mathbb N)" /> a pour primitive{" "}
                <Math tex="x\mapsto \dfrac{x^{n+1}}{n+1}" />.
              </p>
              <p>
                <Math tex="x\mapsto \dfrac1{x^2}" /> (sur <Math tex="\mathbb R^*" />) a pour primitive{" "}
                <Math tex="x\mapsto -\dfrac1x" />.
              </p>
              <p>
                <Math tex="x\mapsto \dfrac1{\sqrt x}" /> (sur <Math tex="\mathbb R_+^*" />) a pour primitive{" "}
                <Math tex="x\mapsto 2\sqrt x" />.
              </p>
              <p>
                <Math tex="x\mapsto \dfrac1x" /> (sur <Math tex="\mathbb R_+^*" /> ou <Math tex="\mathbb R_-^*" />)
                a pour primitive <Math tex="x\mapsto \ln|x|" />.
              </p>
              <p>
                <Math tex="e^x" />, <Math tex="\cos x" />, <Math tex="\sin x" /> et{" "}
                <Math tex="1+\tan^2x=\dfrac1{\cos^2x}" /> ont pour primitives respectivement{" "}
                <Math tex="e^x" />, <Math tex="\sin x" />, <Math tex="-\cos x" /> et <Math tex="\tan x" />.
              </p>
              <p>
                <Math tex="\dfrac1{1+x^2}" /> a pour primitive <Math tex="\arctan x" />.
              </p>
            </div>
          </Box>
          <Callout variant="success" title="Généralisation avec une fonction dérivable u (grâce à la dérivée composée)">
            <div className="space-y-1.5">
              <p>
                <Math tex="u'u^n" /> (<Math tex="n\in\mathbb N" />) <Math tex="\;\rightsquigarrow\;" />{" "}
                <Math tex="\dfrac{u^{n+1}}{n+1}" />
              </p>
              <p>
                <Math tex="\dfrac{u'}{u}" /> (<Math tex="u" /> ne s&apos;annule pas) <Math tex="\;\rightsquigarrow\;" />{" "}
                <Math tex="\ln|u|" />
              </p>
              <p>
                <Math tex="\dfrac{u'}{\sqrt u}" /> (<Math tex="u>0" />) <Math tex="\;\rightsquigarrow\;" />{" "}
                <Math tex="2\sqrt u" />
              </p>
              <p>
                <Math tex="u'e^u" /> <Math tex="\;\rightsquigarrow\;" /> <Math tex="e^u" /> ; <Math tex="u'\cos u" />{" "}
                <Math tex="\;\rightsquigarrow\;" /> <Math tex="\sin u" /> ; <Math tex="u'\sin u" />{" "}
                <Math tex="\;\rightsquigarrow\;" /> <Math tex="-\cos u" />
              </p>
              <p>
                <Math tex="\dfrac{u'}{1+u^2}" /> <Math tex="\;\rightsquigarrow\;" /> <Math tex="\arctan u" />
              </p>
            </div>
          </Callout>
          <Box title="Formules de linéarisation utiles" tone="prop">
            <Math tex="\cos^2a=\dfrac{1+\cos2a}{2}" /> et <Math tex="\sin^2a=\dfrac{1-\cos2a}{2}" /> permettent de
            trouver des primitives de <Math tex="\cos^2" /> et <Math tex="\sin^2" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. L'INTÉGRALE ===================== */}
      <LessonSection
        id="cours-integrale"
        kicker="02 · De la primitive au nombre"
        title="Définition et propriétés de l'intégrale"
        tone="muted"
        description="À partir d'une primitive, on définit un nombre : l'intégrale, qui hérite d'une longue liste de propriétés de calcul."
      >
        <CourseBlock numeral="III" title="Définition">
          <Box title="Définition" tone="def">
            Soit <Math tex="f" /> continue sur un intervalle <Math tex="I" />, <Math tex="a,b\in I" /> et{" "}
            <Math tex="F" /> une primitive de <Math tex="f" /> sur <Math tex="I" />. Le nombre{" "}
            <Math tex="F(b)-F(a)" /> s&apos;appelle l&apos;<strong className="text-foreground">intégrale</strong>{" "}
            de <Math tex="f" /> entre <Math tex="a" /> et <Math tex="b" />, noté :
          </Box>
          <MathBlock tex="\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b)-F(a)" />
          <p className="text-sm text-foreground-muted sm:text-base">
            <Math tex="a" /> est la borne inférieure, <Math tex="b" /> la borne supérieure ; <Math tex="x" /> est
            une variable muette (on peut la renommer).
          </p>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Propriétés de l'intégrale">
          <Callout variant="success" title="Linéarité et relation de Chasles">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\displaystyle\int_a^a f(x)\,dx=0" /> ; <Math tex="\displaystyle\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx" />
              </li>
              <li>
                <Math tex="\displaystyle\int_a^b\big(f(x)+g(x)\big)dx=\int_a^b f(x)\,dx+\int_a^b g(x)\,dx" /> ;{" "}
                <Math tex="\displaystyle\int_a^b\alpha f(x)\,dx=\alpha\int_a^b f(x)\,dx" />
              </li>
              <li>
                Relation de Chasles :{" "}
                <Math tex="\displaystyle\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx" />
              </li>
            </ul>
          </Callout>
          <Callout variant="warning" title="Intégrale et ordre (a ≤ b)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="f\ge0" /> sur <Math tex="[a,b]" />, alors <Math tex="\displaystyle\int_a^b f(x)\,dx\ge0" />
                .
              </li>
              <li>
                Si <Math tex="f\le g" /> sur <Math tex="[a,b]" />, alors{" "}
                <Math tex="\displaystyle\int_a^b f(x)\,dx\le\int_a^b g(x)\,dx" />.
              </li>
              <li>
                <Math tex="\displaystyle\left|\int_a^b f(x)\,dx\right|\le\int_a^b |f(x)|\,dx" />.
              </li>
            </ul>
          </Callout>
          <Box title="Valeur moyenne et théorème de la moyenne" tone="prop">
            <p>
              Si <Math tex="f" /> est continue sur <Math tex="[a,b]" /> (<Math tex="a<b" />), le nombre{" "}
              <Math tex="\mu=\dfrac1{b-a}\displaystyle\int_a^b f(x)\,dx" /> s&apos;appelle la{" "}
              <strong className="text-foreground">valeur moyenne</strong> de <Math tex="f" /> sur{" "}
              <Math tex="[a,b]" />. De plus, il existe (au moins) un <Math tex="c\in[a,b]" /> tel que{" "}
              <Math tex="f(c)=\mu" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. TECHNIQUES DE CALCUL ===================== */}
      <LessonSection
        id="cours-techniques"
        kicker="03 · Deux méthodes incontournables"
        title="Techniques de calcul d'une intégrale"
        tone="light"
        description="Quand le tableau de primitives ne suffit plus : intégration par parties et changement de variable."
      >
        <CourseBlock numeral="V" title="Intégration par parties">
          <Box title="Propriété" tone="prop">
            Soient <Math tex="u" /> et <Math tex="v" /> deux fonctions dérivables sur <Math tex="I" />, de dérivées{" "}
            <Math tex="u'" /> et <Math tex="v'" /> continues sur <Math tex="I" />, et <Math tex="a,b\in I" />.
          </Box>
          <MathBlock tex="\int_a^b u(x)v'(x)\,dx=\Big[u(x)v(x)\Big]_a^b-\int_a^b u'(x)v(x)\,dx" />
          <Box title="Exemple" tone="def">
            <p>
              <Math tex="\displaystyle\int_0^{\pi/2} x\sin x\,dx" /> avec <Math tex="u(x)=x" /> et{" "}
              <Math tex="v'(x)=\sin x" /> (donc <Math tex="u'(x)=1" /> et <Math tex="v(x)=-\cos x" />) :
            </p>
            <MathBlock tex="\int_0^{\pi/2} x\sin x\,dx=\Big[-x\cos x\Big]_0^{\pi/2}+\int_0^{\pi/2}\cos x\,dx=0+\Big[\sin x\Big]_0^{\pi/2}=1" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Changement de variable">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="g" /> dérivable sur <Math tex="[a,b]" /> avec <Math tex="g'" /> continue, et{" "}
            <Math tex="f" /> continue sur <Math tex="g([a,b])" />. Alors :
          </Box>
          <MathBlock tex="\int_a^b (f\circ g)(t)\,g'(t)\,dt=\int_{g(a)}^{g(b)} f(x)\,dx" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. AIRES, VOLUMES ===================== */}
      <LessonSection
        id="cours-applications"
        kicker="04 · L'intégrale, outil de mesure"
        title="Calcul d'aires, de volumes et fonction définie par une intégrale"
        tone="muted"
        description="L'intégrale mesure des aires sous une courbe, engendre des volumes de révolution, et permet même de définir de nouvelles fonctions."
      >
        <CourseBlock numeral="VII" title="Aires et volumes">
          <Box title="Aire sous une courbe" tone="def">
            Si <Math tex="f" /> est continue et <strong>positive</strong> sur <Math tex="[a,b]" />, l&apos;aire du
            domaine limité par <Math tex="\mathcal C_f" />, l&apos;axe des abscisses et les droites{" "}
            <Math tex="x=a" />, <Math tex="x=b" /> vaut, en unités d&apos;aire :
          </Box>
          <MathBlock tex="\mathcal A=\int_a^b f(x)\,dx\ \text{(u.a.)}" />
          <Callout variant="success" title="Aire entre deux courbes">
            <p>
              L&apos;aire du domaine compris entre <Math tex="\mathcal C_f" />, <Math tex="\mathcal C_g" /> et les
              droites <Math tex="x=a" />, <Math tex="x=b" /> vaut :
            </p>
            <MathBlock tex="\mathcal A=\int_a^b |f(x)-g(x)|\,dx" />
            <p>
              Si le signe de <Math tex="f-g" /> change en un point <Math tex="c\in[a,b]" />, on découpe avec Chasles
              : <Math tex="\displaystyle\mathcal A=\int_a^c|f-g|+\int_c^b|f-g|" />.
            </p>
          </Callout>
          <Box title="Volume d'un solide de révolution" tone="prop">
            Si <Math tex="f" /> est continue sur <Math tex="[a,b]" />, la rotation de <Math tex="\mathcal C_f" />{" "}
            autour de l&apos;axe des abscisses engendre un solide de volume :
          </Box>
          <MathBlock tex="V=\pi\int_a^b \big(f(x)\big)^2\,dx\ \text{(u.v.)}" />
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Fonction définie par une intégrale">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="f" /> continue sur <Math tex="I" /> et <Math tex="a\in I" />. La fonction{" "}
            <Math tex="F(x)=\displaystyle\int_a^x f(t)\,dt" /> est l&apos;unique primitive de <Math tex="f" /> sur{" "}
            <Math tex="I" /> qui s&apos;annule en <Math tex="a" /> : elle est dérivable sur <Math tex="I" /> et{" "}
            <Math tex="F'(x)=f(x)" />.
          </Box>
          <Callout variant="success" title="Cas général : bornes variables">
            <p>
              Si <Math tex="u" /> et <Math tex="v" /> sont dérivables sur <Math tex="I" /> à valeurs dans un
              intervalle où <Math tex="f" /> est continue, alors{" "}
              <Math tex="H(x)=\displaystyle\int_{u(x)}^{v(x)} f(t)\,dt" /> est dérivable sur <Math tex="I" /> et :
            </p>
            <MathBlock tex="H'(x)=v'(x)\,f\big(v(x)\big)-u'(x)\,f\big(u(x)\big)" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Fonctions primitives et calcul intégral"
        tone="light"
        description="13 exercices corrigés, niveau Sciences Mathématiques, mêlant recherche de primitives et calcul intégral : IPP, changement de variable, aires, volumes, valeur moyenne."
      >
        <ExerciseGroup
          total={13}
          celebrationTitle="Bravo, les 13 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre fonctions primitives et calcul intégral est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Primitive de la forme u'uⁿ"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive sur <Math tex="\mathbb R" /> de{" "}
                <Math tex="f(x)=(3x^2+2x)(x^3+x^2+1)^4" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=x^3+x^2+1" />, donc <Math tex="u'(x)=3x^2+2x" /> et{" "}
                  <Math tex="f=u'u^4" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac15\big(x^3+x^2+1\big)^5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Intégration par parties"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="I=\displaystyle\int_0^{\pi/2} x\sin x\,dx" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=x" />, <Math tex="v'(x)=\sin x" />, donc <Math tex="u'(x)=1" /> et{" "}
                  <Math tex="v(x)=-\cos x" />.
                </p>
                <p>
                  <Math tex="I=\Big[-x\cos x\Big]_0^{\pi/2}+\int_0^{\pi/2}\cos x\,dx=0+\Big[\sin x\Big]_0^{\pi/2}" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="I=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Primitive de la forme u'/u"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive sur <Math tex="\mathbb R" /> de{" "}
                <Math tex="f(x)=\dfrac{2x-1}{x^2-x+3}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Le discriminant de <Math tex="x^2-x+3" /> vaut <Math tex="1-12=-11<0" />, donc{" "}
                  <Math tex="x^2-x+3>0" /> pour tout <Math tex="x" />.
                </p>
                <p>
                  En posant <Math tex="u(x)=x^2-x+3" />, on a <Math tex="u'(x)=2x-1" /> et <Math tex="f=\dfrac{u'}u" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\ln\big(x^2-x+3\big)" /> (pas de valeur absolue car{" "}
                  <Math tex="u>0" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Intégration par parties (logarithme)"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="I=\displaystyle\int_1^{e} \ln x\,dx" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=\ln x" />, <Math tex="v'(x)=1" />, donc <Math tex="u'(x)=\dfrac1x" /> et{" "}
                  <Math tex="v(x)=x" />.
                </p>
                <p>
                  <Math tex="I=\Big[x\ln x\Big]_1^{e}-\int_1^{e}1\,dx=(e-0)-(e-1)" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="I=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Primitive de la forme u'eᵘ"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive sur <Math tex="\mathbb R" /> de <Math tex="f(x)=xe^{x^2}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=x^2" />, donc <Math tex="u'(x)=2x" />, et{" "}
                  <Math tex="f(x)=\dfrac12\times2x\,e^{x^2}=\dfrac12 u'(x)e^{u(x)}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac12 e^{x^2}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Aire entre une droite et une parabole"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer l&apos;aire du domaine plan compris entre les courbes de{" "}
                <Math tex="f(x)=x" /> et <Math tex="g(x)=x^2" /> sur <Math tex="[0,1]" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x\in[0,1]" />, <Math tex="x\ge x^2" /> (car <Math tex="x-x^2=x(1-x)\ge0" />).
                </p>
                <p>
                  <Math tex="\mathcal A=\displaystyle\int_0^1\big(x-x^2\big)dx=\left[\dfrac{x^2}2-\dfrac{x^3}3\right]_0^1=\dfrac12-\dfrac13" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\mathcal A=\dfrac16" /> u.a.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Primitive trigonométrique de la forme u'uⁿ"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive sur <Math tex="\mathbb R" /> de{" "}
                <Math tex="f(x)=\cos x\sin^3x" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=\sin x" />, donc <Math tex="u'(x)=\cos x" /> et{" "}
                  <Math tex="f=u'u^3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac14\sin^4x" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Volume d'un solide de révolution"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On considère la fonction <Math tex="f(x)=\sqrt x" /> sur <Math tex="[0,4]" />. Calculer le volume{" "}
                <Math tex="V" /> du solide engendré par la rotation de <Math tex="\mathcal C_f" /> autour de
                l&apos;axe des abscisses.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="V=\pi\displaystyle\int_0^4\big(\sqrt x\big)^2dx=\pi\int_0^4 x\,dx=\pi\left[\dfrac{x^2}2\right]_0^4" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="V=8\pi" /> u.v.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Primitive de la forme u'/√u"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive sur <Math tex="\left]-\dfrac12,+\infty\right[" /> de{" "}
                <Math tex="f(x)=\dfrac1{\sqrt{2x+1}}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=2x+1" />, donc <Math tex="u'(x)=2" /> et{" "}
                  <Math tex="f(x)=\dfrac12\times\dfrac{2}{\sqrt{2x+1}}=\dfrac12\dfrac{u'(x)}{\sqrt{u(x)}}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac12\times2\sqrt{2x+1}=\sqrt{2x+1}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Fonction définie par une intégrale"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="F(x)=\displaystyle\int_1^{x^2} \dfrac{dt}{t}" /> pour <Math tex="x>0" />. Calculer{" "}
                <Math tex="F(x)" /> puis <Math tex="F'(x)" /> de deux façons.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Une primitive de <Math tex="t\mapsto\dfrac1t" /> est <Math tex="\ln t" />, donc{" "}
                  <Math tex="F(x)=\Big[\ln t\Big]_1^{x^2}=\ln(x^2)-\ln1=2\ln x" /> (pour <Math tex="x>0" />).
                </p>
                <p>
                  Directement, <Math tex="F'(x)=2\times\dfrac1x=\dfrac2x" />.
                </p>
                <p>
                  Avec la formule <Math tex="H'(x)=v'(x)f(v(x))-u'(x)f(u(x))" /> pour <Math tex="v(x)=x^2" />,{" "}
                  <Math tex="u(x)=1" />, <Math tex="f(t)=\dfrac1t" /> : <Math tex="F'(x)=2x\times\dfrac1{x^2}-0=\dfrac2x" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Les deux méthodes donnent bien <Math tex="F'(x)=\dfrac2x" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Primitive de type arctangente"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive sur <Math tex="\mathbb R" /> de <Math tex="f(x)=\dfrac2{1+4x^2}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=2x" />, donc <Math tex="u'(x)=2" /> et{" "}
                  <Math tex="f(x)=\dfrac{u'(x)}{1+u(x)^2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\arctan(2x)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Valeur moyenne et théorème de la moyenne"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la valeur moyenne <Math tex="\mu" /> de <Math tex="f(x)=x^2" /> sur <Math tex="[1,3]" />,
                puis déterminer <Math tex="c\in[1,3]" /> tel que <Math tex="f(c)=\mu" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\mu=\dfrac1{3-1}\displaystyle\int_1^3 x^2\,dx=\dfrac12\left[\dfrac{x^3}3\right]_1^3=\dfrac12\left(9-\dfrac13\right)=\dfrac{13}3" />
                </p>
                <p>
                  On cherche <Math tex="c" /> tel que <Math tex="c^2=\dfrac{13}3" />, avec <Math tex="c\in[1,3]" />{" "}
                  donc <Math tex="c>0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="c=\sqrt{\dfrac{13}3}" />, et on vérifie <Math tex="1<\sqrt{13/3}\approx2{,}08<3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="13"
            index={13}
            title="Exercice 13 · Changement de variable"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="I=\displaystyle\int_0^1 x\sqrt{1-x^2}\,dx" /> à l&apos;aide du changement de
                variable <Math tex="t=1-x^2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="t=1-x^2" />, donc <Math tex="dt=-2x\,dx" />, soit{" "}
                  <Math tex="x\,dx=-\dfrac{dt}2" />. Quand <Math tex="x=0" />, <Math tex="t=1" /> ; quand{" "}
                  <Math tex="x=1" />, <Math tex="t=0" />.
                </p>
                <p>
                  <Math tex="I=\displaystyle\int_1^0 \sqrt t\left(-\dfrac{dt}2\right)=\dfrac12\int_0^1\sqrt t\,dt=\dfrac12\left[\dfrac23t^{3/2}\right]_0^1" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="I=\dfrac13" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
