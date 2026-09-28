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
  title: "Fonctions primitives · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet des fonctions primitives pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : définition, existence, primitive vérifiant une condition initiale, et tableau des primitives usuelles et composées, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 1",
  heroTitle: "Fonctions primitives",
  heroSubtitle:
    "Remonter d'une fonction dérivée f à la fonction F dont elle provient : définition, existence, et le tableau des primitives usuelles — le socle de tout le calcul intégral à venir.",
  footerNote: "Fonctions primitives · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 1.",
  sections: [
    { id: "cours-definition", label: "Définition" },
    { id: "cours-usuelles", label: "Primitives usuelles" },
    { id: "cours-composees", label: "Fonctions composées" },
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
          { value: "3", label: "formes composées" },
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
            <Math tex="F'=f" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITION ET EXISTENCE ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · Le chemin inverse de la dérivation"
        title="Notion de primitive"
        tone="light"
        description="Dériver, on sait faire. Ici on fait l'inverse : à partir de f, retrouver une fonction F dont f est la dérivée."
      >
        <CourseBlock numeral="I" title="Définition d'une primitive">
          <Box title="Définition" tone="def">
            Soit <Math tex="f" /> une fonction définie sur un intervalle <Math tex="I" />. On dit qu&apos;une
            fonction <Math tex="F" /> est une <strong className="text-foreground">primitive</strong> de{" "}
            <Math tex="f" /> sur <Math tex="I" /> si <Math tex="F" /> est dérivable sur <Math tex="I" /> et si{" "}
            <Math tex="\forall x\in I,\ F'(x)=f(x)" />.
          </Box>
          <Callout variant="success" title="Exemple">
            <div className="space-y-1.5">
              <p>
                Une primitive de <Math tex="f(x)=4x-2" /> sur <Math tex="\mathbb R" /> est{" "}
                <Math tex="F(x)=2x^2-2x" />, car <Math tex="F'(x)=4x-2=f(x)" />.
              </p>
              <p>
                Une primitive de <Math tex="f(x)=\cos x" /> sur <Math tex="\mathbb R" /> est{" "}
                <Math tex="F(x)=\sin x" />, car <Math tex="F'(x)=\cos x" />.
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Existence et ensemble des primitives">
          <Box title="Théorème (admis)" tone="prop">
            Toute fonction <strong className="text-foreground">continue</strong> sur un intervalle{" "}
            <Math tex="I" /> admet des primitives sur <Math tex="I" />.
          </Box>
          <Box title="Propriété" tone="prop">
            Si <Math tex="F" /> est une primitive de <Math tex="f" /> sur <Math tex="I" />, alors{" "}
            <strong className="text-foreground">toutes</strong> les primitives de <Math tex="f" /> sur{" "}
            <Math tex="I" /> sont les fonctions <Math tex="G=F+c" /> avec <Math tex="c\in\mathbb R" />. Deux
            primitives d&apos;une même fonction sur un intervalle diffèrent donc toujours d&apos;une constante.
          </Box>
          <Box title="Propriété (condition initiale)" tone="prop">
            Soit <Math tex="F" /> une primitive de <Math tex="f" /> sur <Math tex="I" />. Pour tout{" "}
            <Math tex="x_0\in I" /> et tout <Math tex="y_0\in\mathbb R" />, il existe{" "}
            <strong className="text-foreground">une unique</strong> primitive <Math tex="G" /> de <Math tex="f" />{" "}
            sur <Math tex="I" /> qui vérifie <Math tex="G(x_0)=y_0" />.
          </Box>
          <Callout variant="success" title="Exemple">
            <p className="mb-2">
              Déterminons la primitive de <Math tex="f(x)=x^3-2x+3" /> qui s&apos;annule en <Math tex="1" />.
            </p>
            <p className="mb-2">
              Les primitives de <Math tex="f" /> sur <Math tex="\mathbb R" /> sont les fonctions{" "}
              <Math tex="F(x)=\dfrac{x^4}{4}-x^2+3x+c" /> avec <Math tex="c\in\mathbb R" />.
            </p>
            <p className="mb-2">
              La condition <Math tex="F(1)=0" /> donne <Math tex="\dfrac14-1+3+c=0" />, soit{" "}
              <Math tex="c=-\dfrac94" />.
            </p>
            <p className="font-semibold text-green-700">
              La primitive cherchée est <Math tex="F(x)=\dfrac{x^4}{4}-x^2+3x-\dfrac94" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Linéarité">
          <Box title="Propriété" tone="prop">
            Si <Math tex="F" /> et <Math tex="G" /> sont des primitives respectives de <Math tex="f" /> et{" "}
            <Math tex="g" /> sur <Math tex="I" />, et si <Math tex="k\in\mathbb R" />, alors :
          </Box>
          <ul className="list-disc space-y-1.5 pl-5 text-sm sm:text-base">
            <li>
              <Math tex="F+G" /> est une primitive de <Math tex="f+g" /> sur <Math tex="I" /> ;
            </li>
            <li>
              <Math tex="kF" /> est une primitive de <Math tex="kf" /> sur <Math tex="I" />.
            </li>
          </ul>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PRIMITIVES USUELLES ===================== */}
      <LessonSection
        id="cours-usuelles"
        kicker="02 · Le tableau à connaître par cœur"
        title="Primitives des fonctions usuelles"
        tone="muted"
        description="Chaque formule de dérivée se lit aussi à l'envers : voici les primitives des fonctions de référence."
      >
        <CourseBlock numeral="IV" title="Tableau des primitives usuelles">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="bg-surface-muted text-left">
                  <th className="p-3 font-semibold text-foreground">Fonction f</th>
                  <th className="p-3 font-semibold text-foreground">Primitive F</th>
                  <th className="p-3 font-semibold text-foreground">Sur l&apos;intervalle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=a\ (a\in\mathbb R)" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=ax+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="\mathbb R" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=x^n\ (n\in\mathbb N)" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=\dfrac{x^{n+1}}{n+1}+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="\mathbb R" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=\dfrac{1}{x^2}" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=-\dfrac1x+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="]0,+\infty[\text{ ou }]-\infty,0[" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=\dfrac{1}{\sqrt x}" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=2\sqrt x+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="]0,+\infty[" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=\cos x" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=\sin x+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="\mathbb R" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=\sin x" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=-\cos x+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="\mathbb R" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=1+\tan^2x=\dfrac{1}{\cos^2x}" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=\tan x+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="\left]-\dfrac\pi2,\dfrac\pi2\right[" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=\cos(ax+b)\ (a\neq0)" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=\dfrac1a\sin(ax+b)+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="\mathbb R" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="f(x)=\sin(ax+b)\ (a\neq0)" />
                  </td>
                  <td className="p-3">
                    <Math tex="F(x)=-\dfrac1a\cos(ax+b)+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="\mathbb R" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Callout variant="warning" title="Attention">
            Une primitive n&apos;est définie <strong>que sur un intervalle</strong>. Sur une réunion de plusieurs
            intervalles (par exemple <Math tex="\mathbb R^*" />), la constante <Math tex="c" /> peut être différente
            sur chaque intervalle.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. FONCTIONS COMPOSÉES ===================== */}
      <LessonSection
        id="cours-composees"
        kicker="03 · Reconnaître la forme u'×g(u)"
        title="Primitives de fonctions composées"
        tone="light"
        description="La plupart des exercices demandent de repérer une fonction u et sa dérivée u' cachées dans f."
      >
        <CourseBlock numeral="V" title="Formes composées usuelles">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="u" /> une fonction dérivable sur un intervalle <Math tex="I" />.
          </Box>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="bg-surface-muted text-left">
                  <th className="p-3 font-semibold text-foreground">Fonction</th>
                  <th className="p-3 font-semibold text-foreground">Primitive</th>
                  <th className="p-3 font-semibold text-foreground">Condition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3">
                    <Math tex="u'u^n\ (n\in\mathbb N)" />
                  </td>
                  <td className="p-3">
                    <Math tex="\dfrac{u^{n+1}}{n+1}+c" />
                  </td>
                  <td className="p-3">sur <Math tex="I" /></td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="\dfrac{u'}{u^2}" />
                  </td>
                  <td className="p-3">
                    <Math tex="-\dfrac1u+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="u\neq0" /> sur <Math tex="I" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="\dfrac{u'}{\sqrt u}" />
                  </td>
                  <td className="p-3">
                    <Math tex="2\sqrt u+c" />
                  </td>
                  <td className="p-3">
                    <Math tex="u>0" /> sur <Math tex="I" />
                  </td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="u'\cos(u)" />
                  </td>
                  <td className="p-3">
                    <Math tex="\sin(u)+c" />
                  </td>
                  <td className="p-3">sur <Math tex="I" /></td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="u'\sin(u)" />
                  </td>
                  <td className="p-3">
                    <Math tex="-\cos(u)+c" />
                  </td>
                  <td className="p-3">sur <Math tex="I" /></td>
                </tr>
                <tr>
                  <td className="p-3">
                    <Math tex="u'(1+\tan^2(u))" />
                  </td>
                  <td className="p-3">
                    <Math tex="\tan(u)+c" />
                  </td>
                  <td className="p-3">sur <Math tex="I" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Callout variant="success" title="Méthode">
            <p>
              Pour reconnaître une forme composée : on repère une fonction <Math tex="u" /> « à l&apos;intérieur »,
              on calcule <Math tex="u'" />, puis on compare avec le reste de l&apos;expression — au besoin en
              ajustant par une constante multiplicative.
            </p>
          </Callout>
          <Box title="Exemple" tone="def">
            Trouvons les primitives de <Math tex="f(x)=x\sqrt{x^2+1}" /> sur <Math tex="\mathbb R" />. On pose{" "}
            <Math tex="u(x)=x^2+1" />, donc <Math tex="u'(x)=2x" />. Ainsi{" "}
            <Math tex="f(x)=\dfrac12\,u'(x)\sqrt{u(x)}" />, et puisque la primitive de <Math tex="u'\sqrt u" /> est{" "}
            <Math tex="\dfrac23u^{3/2}" />, on obtient{" "}
            <Math tex="F(x)=\dfrac13\left(x^2+1\right)^{3/2}+c" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Fonctions primitives"
        tone="muted"
        description="10 exercices corrigés : primitives usuelles, condition initiale, formes composées u'uⁿ, u'/u², u'/√u, et l'exercice classique sur l'existence d'une primitive."
      >
        <ExerciseGroup
          total={10}
          celebrationTitle="Bravo, les 10 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre fonctions primitives est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Condition initiale"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer la primitive <Math tex="F" /> de <Math tex="f(x)=3x^2+2x-1" /> sur{" "}
                <Math tex="\mathbb R" /> qui vérifie <Math tex="F(2)=5" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Les primitives de <Math tex="f" /> sur <Math tex="\mathbb R" /> sont les fonctions{" "}
                  <Math tex="F(x)=x^3+x^2-x+c" /> avec <Math tex="c\in\mathbb R" />.
                </p>
                <p>
                  <Math tex="F(2)=5" /> donne <Math tex="8+4-2+c=5" />, soit <Math tex="10+c=5" />, donc{" "}
                  <Math tex="c=-5" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="F(x)=x^3+x^2-x-5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Puissances négatives"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les primitives de <Math tex="f(x)=\dfrac{2}{x^2}-\dfrac{3}{\sqrt x}" /> sur{" "}
                <Math tex="]0,+\infty[" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  La primitive de <Math tex="\dfrac2{x^2}" /> est <Math tex="-\dfrac2x" />, et la primitive de{" "}
                  <Math tex="\dfrac{3}{\sqrt x}" /> est <Math tex="3\times2\sqrt x=6\sqrt x" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc les primitives de <Math tex="f" /> sur <Math tex="]0,+\infty[" /> sont{" "}
                  <Math tex="F(x)=-\dfrac2x-6\sqrt x+c" />, <Math tex="c\in\mathbb R" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Trigonométrie linéaire"
            itemsLabel="2 primitives"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les primitives de <Math tex="f(x)=\cos(3x-1)" /> et de{" "}
                <Math tex="g(x)=\sin(2x+5)" /> sur <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="a=3,\ b=-1" /> : <Math tex="F(x)=\dfrac13\sin(3x-1)+c" />.
                </p>
                <p className="font-semibold text-green-700">
                  Avec <Math tex="a=2,\ b=5" /> : <Math tex="G(x)=-\dfrac12\cos(2x+5)+c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Forme u'uⁿ"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive de <Math tex="f(x)=6x\left(3x^2-1\right)^4" /> sur{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=3x^2-1" />, donc <Math tex="u'(x)=6x" />. Ainsi{" "}
                  <Math tex="f=u'u^4" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac{u^5}{5}=\dfrac{\left(3x^2-1\right)^5}{5}+c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Forme u'/u²"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive de <Math tex="f(x)=\dfrac{x}{\left(x^2+4\right)^2}" /> sur{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=x^2+4" />, donc <Math tex="u'(x)=2x" />. Ainsi{" "}
                  <Math tex="f=\dfrac12\times\dfrac{u'}{u^2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac12\times\left(-\dfrac1u\right)=-\dfrac{1}{2\left(x^2+4\right)}+c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Forme u'/√u"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive de <Math tex="f(x)=\dfrac{x}{\sqrt{x^2+9}}" /> sur{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=x^2+9" /> (toujours <Math tex="{}>0" />), donc{" "}
                  <Math tex="u'(x)=2x" />. Ainsi <Math tex="f=\dfrac12\times\dfrac{u'}{\sqrt u}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=\dfrac12\times2\sqrt u=\sqrt{x^2+9}+c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Forme u'uⁿ avec u=cos x"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive de <Math tex="f(x)=\sin x\cos^3x" /> sur <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="u(x)=\cos x" />, donc <Math tex="u'(x)=-\sin x" />. Ainsi{" "}
                  <Math tex="f=-u'u^3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Une primitive est <Math tex="F(x)=-\dfrac{u^4}{4}=-\dfrac{\cos^4x}{4}+c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Reconnaître (fg)'"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une primitive de <Math tex="f(x)=2x\sin x+x^2\cos x" /> sur <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On reconnaît la dérivée d&apos;un produit : en posant <Math tex="p(x)=x^2\sin x" />, on a{" "}
                  <Math tex="p'(x)=2x\sin x+x^2\cos x=f(x)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc une primitive de <Math tex="f" /> est <Math tex="F(x)=x^2\sin x+c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Une fonction sans primitive"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f" /> définie sur <Math tex="\mathbb R" /> par <Math tex="f(x)=2x+1" /> si{" "}
                <Math tex="x\leqslant1" /> et <Math tex="f(x)=2x-1" /> si <Math tex="x>1" />. Montrer que{" "}
                <Math tex="f" /> n&apos;admet pas de primitive sur <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Supposons qu&apos;une primitive <Math tex="F" /> de <Math tex="f" /> existe sur{" "}
                  <Math tex="\mathbb R" />. Sur <Math tex="]-\infty,1]" />, <Math tex="F'=f" /> donne{" "}
                  <Math tex="F(x)=x^2+x+c_1" /> ; sur <Math tex="]1,+\infty[" />,{" "}
                  <Math tex="F(x)=x^2-x+c_2" />.
                </p>
                <p>
                  <Math tex="F" /> serait dérivable en <Math tex="1" />, donc en particulier le nombre dérivé à
                  gauche et à droite en <Math tex="1" /> coïncideraient. Or le nombre dérivé à gauche vaut{" "}
                  <Math tex="f(1^-)=2(1)+1=3" /> (dérivée de <Math tex="x^2+x+c_1" /> en <Math tex="1" />) et le
                  nombre dérivé à droite vaut <Math tex="\displaystyle\lim_{x\to1^+}\dfrac{F(x)-F(1)}{x-1}=2(1)-1=1" />{" "}
                  (dérivée de <Math tex="x^2-x+c_2" />).
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="3\neq1" />, <Math tex="F" /> ne serait pas dérivable en <Math tex="1" /> :
                  contradiction. Donc <Math tex="f" /> n&apos;admet pas de primitive sur <Math tex="\mathbb R" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Combiner polynôme et forme u'/u²"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les primitives de <Math tex="f(x)=2-\dfrac{3}{(x+2)^2}" /> sur{" "}
                <Math tex="]-2,+\infty[" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  La primitive de <Math tex="2" /> est <Math tex="2x" />. Pour le second terme, on pose{" "}
                  <Math tex="u(x)=x+2" /> (donc <Math tex="u'(x)=1" />) : <Math tex="\dfrac{3}{(x+2)^2}=3\times\dfrac{u'}{u^2}" />
                  , dont une primitive est <Math tex="3\times\left(-\dfrac1u\right)=-\dfrac{3}{x+2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="F(x)=2x-\left(-\dfrac{3}{x+2}\right)+c=2x+\dfrac{3}{x+2}+c" />,{" "}
                  <Math tex="c\in\mathbb R" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
