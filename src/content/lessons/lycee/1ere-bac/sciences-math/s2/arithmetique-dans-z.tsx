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
  title: "Arithmétique dans Z · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet d'arithmétique dans Z pour la 1ère année Baccalauréat Sciences Mathématiques : divisibilité, division euclidienne, nombres premiers, PGCD et PPCM, algorithme d'Euclide et identité de Bézout, congruence modulo n, décomposition en facteurs premiers, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "Arithmétique dans Z",
  heroSubtitle:
    "Diviser, décomposer, comparer des restes — les outils qui structurent tous les nombres entiers.",
  footerNote: "Arithmétique dans Z · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
  sections: [
    { id: "cours-divisibilite", label: "Divisibilité" },
    { id: "cours-pgcd", label: "PGCD, PPCM" },
    { id: "cours-congruence", label: "Congruence" },
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
          { value: "2", label: "PGCD, PPCM" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-divisibilite"
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
            <Math tex="a\wedge b" />
          </div>
        }
      />

      {/* ===================== I. DIVISIBILITÉ ===================== */}
      <LessonSection
        id="cours-divisibilite"
        kicker="01 · Le vocabulaire de base"
        title="Divisibilité, division euclidienne, nombres premiers"
        tone="light"
        description="Une relation simple entre entiers structure tout le reste du chapitre."
      >
        <CourseBlock numeral="I" title="Divisibilité">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="b" /> divise <Math tex="a" /> (<Math tex="b\mid a" />) ssi il existe{" "}
              <Math tex="k\in\mathbb Z" /> tel que <Math tex="a=kb" />.
            </p>
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="a\mid b" /> et <Math tex="b\mid a" /> <Math tex="\Rightarrow" />{" "}
                <Math tex="|a|=|b|" />.
              </li>
              <li>
                <Math tex="a\mid b" /> et <Math tex="b\mid c" /> <Math tex="\Rightarrow" /> <Math tex="a\mid c" />
                {" "}(transitivité).
              </li>
              <li>
                <Math tex="a\mid m" /> et <Math tex="a\mid n" /> <Math tex="\Rightarrow" />{" "}
                <Math tex="a\mid(\alpha m+\beta n)" /> pour tous <Math tex="\alpha,\beta\in\mathbb Z" />.
              </li>
              <li>
                <Math tex="b\mid a" /> et <Math tex="a\neq0" /> <Math tex="\Rightarrow" />{" "}
                <Math tex="|b|\le|a|" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Division euclidienne">
          <Box title="Propriété" tone="def">
            <p>
              Pour <Math tex="a\in\mathbb Z" /> et <Math tex="b\in\mathbb Z^*" />, il existe un unique couple{" "}
              <Math tex="(q,r)" /> tel que :
            </p>
            <MathBlock tex="a=bq+r,\qquad 0\le r<|b|" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="Nombres premiers">
          <Box title="Définition et critère" tone="prop">
            <p>
              <Math tex="p" /> est <strong className="text-foreground">premier</strong> ssi{" "}
              <Math tex="p\neq1" /> et ses seuls diviseurs positifs sont <Math tex="1" /> et{" "}
              <Math tex="|p|" />. Pour tester si <Math tex="n" /> est premier, il suffit de vérifier
              qu&apos;aucun nombre premier <Math tex="p\le\sqrt n" /> ne le divise.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PGCD, PPCM ===================== */}
      <LessonSection
        id="cours-pgcd"
        kicker="02 · Comparer deux entiers"
        title="PGCD, PPCM, algorithme d'Euclide"
        tone="muted"
        description="Le plus grand diviseur commun se calcule en une poignée de divisions successives — et révèle immédiatement une identité de Bézout."
      >
        <CourseBlock numeral="IV" title="PGCD et PPCM">
          <Box title="Définitions" tone="def">
            <p>
              <Math tex="a\wedge b" /> (PGCD) est le plus grand diviseur commun de <Math tex="a" /> et{" "}
              <Math tex="b" /> ; <Math tex="a\vee b" /> (PPCM) est le plus petit multiple commun
              strictement positif.
            </p>
          </Box>
          <Callout variant="success" title="Propriétés">
            <MathBlock tex="(a\wedge b)\times(a\vee b)=|ab|" />
            <p>
              <Math tex="a" /> et <Math tex="b" /> sont <strong>premiers entre eux</strong> ssi{" "}
              <Math tex="a\wedge b=1" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Algorithme d'Euclide et identité de Bézout">
          <Box title="Théorème (algorithme d'Euclide)" tone="prop">
            <p>
              Si <Math tex="a=bq+r" /> (<Math tex="0\le r<b" />), alors <Math tex="a\wedge b=b\wedge r" />. Le{" "}
              <Math tex="a\wedge b" /> est le <strong>dernier reste non nul</strong> des divisions
              euclidiennes successives.
            </p>
          </Box>
          <Callout variant="warning" title="Identité de Bézout">
            <p>
              En remontant l&apos;algorithme d&apos;Euclide, on trouve <Math tex="u,v\in\mathbb Z" /> tels
              que :
            </p>
            <MathBlock tex="au+bv=a\wedge b" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. CONGRUENCE ===================== */}
      <LessonSection
        id="cours-congruence"
        kicker="03 · Comparer des restes"
        title="Congruence modulo n, décomposition en facteurs premiers"
        tone="light"
        description="Deux entiers qui ont le même reste se comportent comme des égaux, aussi bien pour l'addition que pour la multiplication."
      >
        <CourseBlock numeral="VI" title="Congruence modulo n">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="a\equiv b\,[n]" /> ssi <Math tex="n\mid(b-a)" /> — équivalent à : <Math tex="a" /> et{" "}
              <Math tex="b" /> ont le même reste dans la division par <Math tex="n" />.
            </p>
          </Box>
          <Callout variant="success" title="Compatibilité avec + et ×">
            <p>
              Si <Math tex="a\equiv b\,[n]" /> et <Math tex="c\equiv d\,[n]" /> :
            </p>
            <MathBlock tex="a+c\equiv b+d\,[n],\qquad ac\equiv bd\,[n],\qquad a^k\equiv b^k\,[n]\ (k\in\mathbb N)" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Décomposition en facteurs premiers">
          <Box title="Théorème" tone="prop">
            <p>
              Tout entier <Math tex="n\ge2" /> s&apos;écrit de façon unique{" "}
              <Math tex="n=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}" /> (<Math tex="p_i" /> premiers
              distincts). Le nombre de diviseurs positifs de <Math tex="n" /> est :
            </p>
            <MathBlock tex="(\alpha_1+1)(\alpha_2+1)\cdots(\alpha_k+1)" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Arithmétique dans Z"
        tone="muted"
        description="6 exercices corrigés couvrant divisibilité, algorithme d'Euclide et Bézout, congruence, équation diophantienne, et décomposition en facteurs premiers."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre arithmétique dans Z est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Divisibilité par 6"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="\forall n\in\mathbb Z,\ 6\mid(n^3-n)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>On factorise :</p>
                <MathBlock tex="n^3-n=n(n^2-1)=n(n-1)(n+1)=(n-1)\,n\,(n+1)" />
                <p>
                  C&apos;est le produit de <strong>trois entiers consécutifs</strong>. Parmi trois entiers
                  consécutifs, il y en a toujours au moins un multiple de <Math tex="2" /> et exactement un
                  multiple de <Math tex="3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="2\mid n^3-n" /> et <Math tex="3\mid n^3-n" />, et comme{" "}
                  <Math tex="2\wedge3=1" />, on a <Math tex="6\mid n^3-n" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Algorithme d'Euclide et identité de Bézout"
            itemsLabel="1 calcul complet"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="252\wedge180" /> par l&apos;algorithme d&apos;Euclide, puis trouver{" "}
                <Math tex="u,v\in\mathbb Z" /> tels que <Math tex="252u+180v=252\wedge180" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\begin{gathered}252=1\times180+72\\180=2\times72+36\\72=2\times36+0\end{gathered}" />
                <p className="font-semibold text-green-700">
                  Dernier reste non nul : <Math tex="252\wedge180=36" />.
                </p>
                <p>En remontant :</p>
                <MathBlock tex="36=180-2\times72=180-2\times(252-180)=3\times180-2\times252" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(-2)\times252+3\times180=36" /> : <Math tex="u=-2,\ v=3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Reste d'une puissance par congruence"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer le reste de la division euclidienne de <Math tex="7^{100}" /> par <Math tex="13" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On cherche un cycle : <Math tex="7^{12}\equiv1\,[13]" /> (petit théorème de Fermat, car{" "}
                  <Math tex="13" /> est premier et ne divise pas <Math tex="7" />). Comme{" "}
                  <Math tex="100=12\times8+4" /> :
                </p>
                <MathBlock tex="7^{100}=\big(7^{12}\big)^8\times7^4\equiv1^8\times7^4\,[13]\equiv7^4\,[13]" />
                <p>
                  Or <Math tex="7^2=49\equiv10\,[13]" />, donc <Math tex="7^4\equiv10^2=100\equiv9\,[13]" />{" "}
                  (car <Math tex="100=7\times13+9" />).
                </p>
                <p className="font-semibold text-green-700">
                  Le reste de <Math tex="7^{100}" /> par <Math tex="13" /> est <Math tex="9" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Équation diophantienne"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb Z^2" /> l&apos;équation <Math tex="15x+9y=6" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="15\wedge9=3" /> et <Math tex="3\mid6" /> : l&apos;équation a des solutions. On
                  simplifie par <Math tex="3" /> : <Math tex="5x+3y=2" />.
                </p>
                <p>
                  Une solution particulière : <Math tex="x_0=-2,\ y_0=4" /> (
                  <Math tex="5(-2)+3(4)=-10+12=2" />
                  ✓). On soustrait :
                </p>
                <MathBlock tex="5(x-x_0)+3(y-y_0)=0\iff5(x+2)=-3(y-4)" />
                <p>
                  Comme <Math tex="5\wedge3=1" />, <Math tex="5\mid(y-4)" />, soit <Math tex="y-4=5k" />, d&apos;où{" "}
                  <Math tex="x+2=-3k" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{(-2-3k,\ 4+5k)\ /\ k\in\mathbb Z\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Diviseurs d'une expression affine"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les entiers relatifs <Math tex="n" /> tels que <Math tex="(n+3)\mid(2n+7)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>On fait apparaître <Math tex="n+3" /> :</p>
                <MathBlock tex="2n+7=2(n+3)+1" />
                <p>
                  Donc <Math tex="(n+3)\mid(2n+7)\iff(n+3)\mid\big(2n+7-2(n+3)\big)\iff(n+3)\mid1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="n+3\in\{-1,1\}" />, soit <Math tex="n=-4" /> ou <Math tex="n=-2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Décomposition en facteurs premiers, PGCD, PPCM"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Décomposer <Math tex="360" /> et <Math tex="150" /> en produit de facteurs premiers, puis en
                déduire <Math tex="360\wedge150" /> et <Math tex="360\vee150" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="360=2^3\times3^2\times5,\qquad150=2\times3\times5^2" />
                <p>
                  Le PGCD prend, pour chaque facteur premier, l&apos;exposant{" "}
                  <strong>minimum</strong> ; le PPCM prend l&apos;exposant <strong>maximum</strong> :
                </p>
                <MathBlock tex="360\wedge150=2^1\times3^1\times5^1=30" />
                <MathBlock tex="360\vee150=2^3\times3^2\times5^2=1800" />
                <p className="font-semibold text-green-700">
                  <Math tex="360\wedge150=30" /> et <Math tex="360\vee150=1800" /> (on vérifie :{" "}
                  <Math tex="30\times1800=54\,000=360\times150" />).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
