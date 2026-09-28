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
  title: "Calcul intégral · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet de calcul intégral pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : définition de l'intégrale, propriétés (Chasles, linéarité, ordre), valeur moyenne, intégration par parties, calculs d'aires et de volumes de révolution, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 2",
  heroTitle: "Calcul intégral",
  heroSubtitle:
    "De la primitive à l'aire sous une courbe : définir l'intégrale, maîtriser ses propriétés, intégrer par parties, et calculer aires et volumes de révolution.",
  footerNote: "Calcul intégral · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 2.",
  sections: [
    { id: "cours-definition", label: "Définition" },
    { id: "cours-proprietes", label: "Propriétés" },
    { id: "cours-ipp", label: "Intégration par parties" },
    { id: "cours-aires-volumes", label: "Aires et volumes" },
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
          { value: "12", label: "exercices corrigés" },
          { value: "4", label: "notions clés" },
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
            <Math tex="\int_a^b" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · De la primitive à l'aire"
        title="Intégrale d'une fonction continue sur un segment"
        tone="light"
        description="On définit l'intégrale à partir d'une primitive : un nombre unique, indépendant de la primitive choisie."
      >
        <CourseBlock numeral="I" title="Définition">
          <Box title="Définition" tone="def">
            Soit <Math tex="f" /> une fonction continue sur un segment <Math tex="[a,b]" /> et <Math tex="F" /> une
            primitive de <Math tex="f" /> sur <Math tex="[a,b]" />. Le nombre <Math tex="F(b)-F(a)" /> est appelé{" "}
            <strong className="text-foreground">intégrale de <Math tex="f" /> de <Math tex="a" /> à{" "}
            <Math tex="b" /></strong>, noté :
          </Box>
          <MathBlock tex="\int_a^b f(x)\,dx=\big[F(x)\big]_a^b=F(b)-F(a)" />
          <Callout variant="success" title="Remarques essentielles">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Ce nombre ne dépend pas de la primitive choisie (deux primitives diffèrent d&apos;une constante qui
                disparaît dans la différence), ni du nom de la variable :{" "}
                <Math tex="\int_a^b f(x)\,dx=\int_a^b f(t)\,dt" />.
              </li>
              <li>
                Si <Math tex="f" /> est dérivable sur <Math tex="[a,b]" /> avec <Math tex="f'" /> continue :{" "}
                <Math tex="\int_a^b f'(x)\,dx=f(b)-f(a)" />.
              </li>
            </ul>
          </Callout>
          <Box title="Exemple" tone="prop">
            <Math tex="\displaystyle\int_0^1\left(x^2+2x\right)dx=\left[\dfrac{x^3}3+x^2\right]_0^1=\dfrac13+1=\dfrac43" />
            .
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PROPRIÉTÉS ===================== */}
      <LessonSection
        id="cours-proprietes"
        kicker="02 · Ce que l'on peut faire avec une intégrale"
        title="Relation de Chasles, linéarité, ordre et valeur moyenne"
        tone="muted"
        description="Ces propriétés permettent de découper, combiner et encadrer les intégrales sans jamais recalculer de primitive."
      >
        <CourseBlock numeral="II" title="Relation de Chasles">
          <Callout variant="success" title="Propriétés">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\displaystyle\int_a^a f(x)\,dx=0" /> et{" "}
                <Math tex="\displaystyle\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx" />.
              </li>
              <li>
                Pour <Math tex="a,b,c" /> dans un intervalle où <Math tex="f" /> est continue (relation de
                Chasles) : <Math tex="\displaystyle\int_a^c f(x)\,dx+\int_c^b f(x)\,dx=\int_a^b f(x)\,dx" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Linéarité, ordre et valeur moyenne">
          <Box title="Linéarité" tone="def">
            Pour <Math tex="f,g" /> continues sur <Math tex="[a,b]" /> et <Math tex="\lambda\in\mathbb R" /> :{" "}
            <Math tex="\displaystyle\int_a^b\big(f(x)+g(x)\big)dx=\int_a^b f(x)\,dx+\int_a^b g(x)\,dx" /> et{" "}
            <Math tex="\displaystyle\int_a^b \lambda f(x)\,dx=\lambda\int_a^b f(x)\,dx" />.
          </Box>
          <Box title="Positivité et ordre" tone="def">
            Pour <Math tex="a\leqslant b" /> : si <Math tex="f\geqslant0" /> sur <Math tex="[a,b]" /> alors{" "}
            <Math tex="\displaystyle\int_a^b f(x)\,dx\geqslant0" /> ; si <Math tex="f\leqslant g" /> sur{" "}
            <Math tex="[a,b]" /> alors <Math tex="\displaystyle\int_a^b f(x)\,dx\leqslant\int_a^b g(x)\,dx" />.
          </Box>
          <Box title="Valeur moyenne" tone="prop">
            Pour <Math tex="f" /> continue sur <Math tex="[a,b]" />, <Math tex="a<b" /> : il existe{" "}
            <Math tex="c\in[a,b]" /> tel que <Math tex="\displaystyle f(c)=\dfrac1{b-a}\int_a^b f(x)\,dx" />. Ce
            nombre est appelé <strong>valeur moyenne</strong> de <Math tex="f" /> sur <Math tex="[a,b]" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. INTÉGRATION PAR PARTIES ===================== */}
      <LessonSection
        id="cours-ipp"
        kicker="03 · Défaire un produit"
        title="Intégration par parties"
        tone="light"
        description="Quand une primitive directe est hors de portée, on transfère la dérivation d'une fonction vers l'autre."
      >
        <CourseBlock numeral="IV" title="Théorème et méthode">
          <Box title="Théorème" tone="def">
            Soient <Math tex="u" /> et <Math tex="v" /> deux fonctions dérivables sur <Math tex="[a,b]" />, de
            dérivées <Math tex="u'" /> et <Math tex="v'" /> continues sur <Math tex="[a,b]" />. Alors :
          </Box>
          <MathBlock tex="\int_a^b u(x)v'(x)\,dx=\big[u(x)v(x)\big]_a^b-\int_a^b u'(x)v(x)\,dx" />
          <Callout variant="warning" title="Exemple">
            <div className="space-y-2">
              <p>
                Calculer <Math tex="\displaystyle I=\int_0^{\pi/2}x\cos x\,dx" /> : on pose{" "}
                <Math tex="u(x)=x" /> (donc <Math tex="u'(x)=1" />) et <Math tex="v'(x)=\cos x" /> (donc{" "}
                <Math tex="v(x)=\sin x" />).
              </p>
              <p>
                <Math tex="I=\big[x\sin x\big]_0^{\pi/2}-\int_0^{\pi/2}\sin x\,dx=\dfrac\pi2+\big[\cos x\big]_0^{\pi/2}=\dfrac\pi2+(0-1)=\dfrac\pi2-1" />
                .
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. AIRES ET VOLUMES ===================== */}
      <LessonSection
        id="cours-aires-volumes"
        kicker="04 · La géométrie de l'intégrale"
        title="Calculs d'aires et de volumes de révolution"
        tone="muted"
        description="L'intégrale mesure une aire — à condition de tenir compte du signe de la fonction — et engendre un volume par rotation."
      >
        <CourseBlock numeral="V" title="Aire entre une courbe et l'axe des abscisses">
          <Box title="Définition" tone="def">
            Le plan est muni d&apos;un repère orthogonal <Math tex="(O,\vec\imath,\vec\jmath)" />. L&apos;unité
            d&apos;aire <Math tex="\text{(u.a.)}" /> est l&apos;aire du rectangle construit sur{" "}
            <Math tex="\vec\imath" /> et <Math tex="\vec\jmath" />.
          </Box>
          <Callout variant="success" title="Propriété — aire sous une courbe">
            Soit <Math tex="f" /> continue sur <Math tex="[a,b]" /> et <Math tex="\mathcal C_f" /> sa courbe. L&apos;aire{" "}
            <Math tex="A" /> du domaine compris entre <Math tex="\mathcal C_f" />, l&apos;axe des abscisses et les
            droites <Math tex="x=a" />, <Math tex="x=b" /> est :
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                si <Math tex="f\geqslant0" /> sur <Math tex="[a,b]" /> :{" "}
                <Math tex="A=\left(\displaystyle\int_a^b f(x)\,dx\right)\text{u.a.}" />
              </li>
              <li>
                si <Math tex="f\leqslant0" /> sur <Math tex="[a,b]" /> :{" "}
                <Math tex="A=\left(-\displaystyle\int_a^b f(x)\,dx\right)\text{u.a.}" />
              </li>
              <li>
                si <Math tex="f" /> change de signe : on découpe <Math tex="[a,b]" /> avec Chasles aux points où{" "}
                <Math tex="f" /> s&apos;annule, et on applique la bonne formule sur chaque morceau.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Aire entre deux courbes et volume de révolution">
          <Box title="Aire entre deux courbes" tone="prop">
            Pour <Math tex="f,g" /> continues sur <Math tex="[a,b]" />, l&apos;aire du domaine compris entre{" "}
            <Math tex="\mathcal C_f" />, <Math tex="\mathcal C_g" /> et les droites <Math tex="x=a" />,{" "}
            <Math tex="x=b" /> est <Math tex="A=\left(\displaystyle\int_a^b|f(x)-g(x)|\,dx\right)\text{u.a.}" /> (si{" "}
            <Math tex="f\geqslant g" /> sur tout <Math tex="[a,b]" />, la valeur absolue disparaît).
          </Box>
          <Box title="Volume de révolution" tone="prop">
            L&apos;espace est muni d&apos;un repère orthogonal <Math tex="(O,\vec\imath,\vec\jmath,\vec k)" />. Le
            volume du solide engendré par la rotation de <Math tex="\mathcal C_f" /> (<Math tex="f" /> continue sur{" "}
            <Math tex="[a,b]" />) autour de l&apos;axe des abscisses est :
          </Box>
          <MathBlock tex="V=\pi\left(\int_a^b \big[f(x)\big]^2\,dx\right)\text{u.v.}" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Calcul intégral"
        tone="light"
        description="12 exercices corrigés : calculs directs, système linéaire d'intégrales, intégration par parties, valeur moyenne, aires, volumes, encadrement et suite définie par une intégrale."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre calcul intégral est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Calculs directs"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle I=\int_0^1\left(3x^2-2x+1\right)dx" /> et{" "}
                <Math tex="\displaystyle J=\int_1^2\dfrac{1}{x^2}\,dx" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="I=\big[x^3-x^2+x\big]_0^1=(1-1+1)-0=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="J=\left[-\dfrac1x\right]_1^2=-\dfrac12-(-1)=\dfrac12" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Relation de Chasles avec une valeur absolue"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle I=\int_0^3|x-1|\,dx" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x\in[0,1]" />, <Math tex="x-1\leqslant0" /> donc <Math tex="|x-1|=1-x" /> ; pour{" "}
                  <Math tex="x\in[1,3]" />, <Math tex="|x-1|=x-1" />. La relation de Chasles donne :
                </p>
                <p>
                  <Math tex="I=\int_0^1(1-x)\,dx+\int_1^3(x-1)\,dx=\left[x-\dfrac{x^2}2\right]_0^1+\left[\dfrac{x^2}2-x\right]_1^3" />
                </p>
                <p>
                  <Math tex="=\dfrac12+\left(\left(\dfrac92-3\right)-\left(\dfrac12-1\right)\right)=\dfrac12+\left(\dfrac32+\dfrac12\right)=\dfrac12+2" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="I=\dfrac52" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Système linéaire d'intégrales"
            itemsLabel="1 système"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On pose <Math tex="\displaystyle A=\int_0^{\pi/4}\cos^2x\,dx" /> et{" "}
                <Math tex="\displaystyle B=\int_0^{\pi/4}\sin^2x\,dx" />. Calculer <Math tex="A+B" /> et{" "}
                <Math tex="A-B" />, puis en déduire <Math tex="A" /> et <Math tex="B" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="A+B=\displaystyle\int_0^{\pi/4}\big(\cos^2x+\sin^2x\big)dx=\int_0^{\pi/4}1\,dx=\dfrac\pi4" />
                  .
                </p>
                <p>
                  <Math tex="A-B=\displaystyle\int_0^{\pi/4}\big(\cos^2x-\sin^2x\big)dx=\int_0^{\pi/4}\cos2x\,dx=\left[\dfrac{\sin2x}2\right]_0^{\pi/4}=\dfrac12" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Par somme et différence : <Math tex="A=\dfrac12\left(\dfrac\pi4+\dfrac12\right)=\dfrac\pi8+\dfrac14" />{" "}
                  et <Math tex="B=\dfrac\pi8-\dfrac14" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Intégration par parties"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle I=\int_0^1 xe^x\,dx" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=x" />, <Math tex="v'(x)=e^x" />, donc <Math tex="u'(x)=1" /> et{" "}
                  <Math tex="v(x)=e^x" />.
                </p>
                <p>
                  <Math tex="I=\big[xe^x\big]_0^1-\int_0^1e^x\,dx=e-\big[e^x\big]_0^1=e-(e-1)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="I=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Intégration par parties avec un logarithme"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle I=\int_1^e\ln x\,dx" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On écrit <Math tex="\ln x=1\times\ln x" /> et on pose <Math tex="u(x)=\ln x" />,{" "}
                  <Math tex="v'(x)=1" />, donc <Math tex="u'(x)=\dfrac1x" /> et <Math tex="v(x)=x" />.
                </p>
                <p>
                  <Math tex="I=\big[x\ln x\big]_1^e-\int_1^e1\,dx=(e-0)-(e-1)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="I=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Valeur moyenne"
            itemsLabel="1 application"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer la valeur moyenne de <Math tex="f(x)=x^2" /> sur <Math tex="[0,3]" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\mu=\dfrac1{3-0}\int_0^3x^2\,dx=\dfrac13\left[\dfrac{x^3}3\right]_0^3=\dfrac13\times9=3" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  La valeur moyenne de <Math tex="f" /> sur <Math tex="[0,3]" /> est <Math tex="3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Aire avec étude de signe"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^2-4" /> et <Math tex="\mathcal C_f" /> sa courbe. Calculer l&apos;aire{" "}
                <Math tex="A" /> du domaine limité par <Math tex="\mathcal C_f" />, l&apos;axe des abscisses et les
                droites <Math tex="x=0" />, <Math tex="x=3" /> (unité d&apos;aire : <Math tex="1" /> u.a.).
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f(x)=0\iff x=\pm2" />, et <Math tex="f\leqslant0" /> sur <Math tex="[0,2]" />,{" "}
                  <Math tex="f\geqslant0" /> sur <Math tex="[2,3]" />.
                </p>
                <p>
                  Une primitive de <Math tex="f" /> est <Math tex="F(x)=\dfrac{x^3}3-4x" />.{" "}
                  <Math tex="F(0)=0" />, <Math tex="F(2)=\dfrac83-8=-\dfrac{16}3" />, <Math tex="F(3)=9-12=-3" />.
                </p>
                <p>
                  <Math tex="A=\left(-\int_0^2 f(x)\,dx+\int_2^3f(x)\,dx\right)\text{u.a.}=\big(-(F(2)-F(0))+(F(3)-F(2))\big)\text{u.a.}" />
                </p>
                <p>
                  <Math tex="=\left(\dfrac{16}3+\left(-3+\dfrac{16}3\right)\right)\text{u.a.}=\left(\dfrac{16}3+\dfrac73\right)\text{u.a.}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="A=\dfrac{23}3" /> u.a.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Aire entre deux courbes"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="f(x)=x" /> et <Math tex="g(x)=x^2" />. Calculer l&apos;aire du domaine compris
                entre <Math tex="\mathcal C_f" />, <Math tex="\mathcal C_g" /> et les droites <Math tex="x=0" />,{" "}
                <Math tex="x=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Sur <Math tex="[0,1]" /> : <Math tex="f(x)-g(x)=x-x^2=x(1-x)\geqslant0" />, donc{" "}
                  <Math tex="f\geqslant g" />.
                </p>
                <p>
                  <Math tex="A=\left(\int_0^1(x-x^2)\,dx\right)\text{u.a.}=\left(\left[\dfrac{x^2}2-\dfrac{x^3}3\right]_0^1\right)\text{u.a.}=\left(\dfrac12-\dfrac13\right)\text{u.a.}" />
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="A=\dfrac16" /> u.a.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Volume de révolution"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\sqrt x" /> sur <Math tex="[1,4]" />. Calculer le volume <Math tex="V" /> du
                solide engendré par la rotation de <Math tex="\mathcal C_f" /> autour de l&apos;axe des abscisses.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="V=\pi\left(\int_1^4\big[f(x)\big]^2dx\right)\text{u.v.}=\pi\left(\int_1^4x\,dx\right)\text{u.v.}=\pi\left[\dfrac{x^2}2\right]_1^4\text{u.v.}" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="V=\pi\left(8-\dfrac12\right)\text{u.v.}=\dfrac{15\pi}2" /> u.v.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Encadrement d'une intégrale"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="\displaystyle 1\leqslant\int_0^1 e^{x^2}\,dx\leqslant e" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x\in[0,1]" />, <Math tex="0\leqslant x^2\leqslant1" />, et la fonction{" "}
                  <Math tex="t\mapsto e^t" /> est croissante sur <Math tex="\mathbb R" />, donc{" "}
                  <Math tex="e^0\leqslant e^{x^2}\leqslant e^1" />, c&apos;est-à-dire{" "}
                  <Math tex="1\leqslant e^{x^2}\leqslant e" />.
                </p>
                <p>
                  Par positivité et croissance de l&apos;intégrale sur <Math tex="[0,1]" /> :{" "}
                  <Math tex="\int_0^11\,dx\leqslant\int_0^1e^{x^2}dx\leqslant\int_0^1e\,dx" />.
                </p>
                <p className="font-semibold text-green-700">
                  Or <Math tex="\int_0^11\,dx=1" /> et <Math tex="\int_0^1e\,dx=e" />, donc{" "}
                  <Math tex="1\leqslant\displaystyle\int_0^1e^{x^2}dx\leqslant e" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Suite définie par une intégrale"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Pour <Math tex="n\in\mathbb N" />, on pose <Math tex="\displaystyle u_n=\int_0^1\dfrac{x^n}{1+x}\,dx" />
                . Montrer que <Math tex="(u_n)" /> est décroissante et que{" "}
                <Math tex="0\leqslant u_n\leqslant\dfrac1{n+1}" /> pour tout <Math tex="n" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="u_{n+1}-u_n=\displaystyle\int_0^1\dfrac{x^{n+1}-x^n}{1+x}\,dx=\int_0^1\dfrac{x^n(x-1)}{1+x}\,dx" />
                  .
                </p>
                <p>
                  Pour <Math tex="x\in[0,1]" /> : <Math tex="x^n\geqslant0" />, <Math tex="x-1\leqslant0" /> et{" "}
                  <Math tex="1+x>0" />, donc l&apos;intégrande est <Math tex="\leqslant0" />, d&apos;où{" "}
                  <Math tex="u_{n+1}-u_n\leqslant0" /> : la suite <Math tex="(u_n)" /> est décroissante.
                </p>
                <p>
                  De plus, pour <Math tex="x\in[0,1]" /> : <Math tex="1+x\geqslant1" />, donc{" "}
                  <Math tex="0\leqslant\dfrac{x^n}{1+x}\leqslant x^n" />.
                </p>
                <p className="font-semibold text-green-700">
                  Par positivité et croissance de l&apos;intégrale :{" "}
                  <Math tex="0\leqslant u_n\leqslant\displaystyle\int_0^1x^n\,dx=\dfrac1{n+1}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Aire sous une courbe exponentielle"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=e^{-x}+1" />. Calculer l&apos;aire du domaine limité par <Math tex="\mathcal C_f" />
                , l&apos;axe des abscisses et les droites <Math tex="x=0" />, <Math tex="x=\ln2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour tout <Math tex="x" />, <Math tex="e^{-x}>0" /> donc <Math tex="f(x)>0" /> : la courbe est
                  entièrement au-dessus de l&apos;axe des abscisses sur <Math tex="[0,\ln2]" />.
                </p>
                <p>
                  <Math tex="A=\left(\int_0^{\ln2}\big(e^{-x}+1\big)dx\right)\text{u.a.}=\left(\big[-e^{-x}+x\big]_0^{\ln2}\right)\text{u.a.}" />
                </p>
                <p>
                  <Math tex="=\left(\left(-e^{-\ln2}+\ln2\right)-(-1+0)\right)\text{u.a.}=\left(-\dfrac12+\ln2+1\right)\text{u.a.}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="A=\left(\dfrac12+\ln2\right)" /> u.a.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
