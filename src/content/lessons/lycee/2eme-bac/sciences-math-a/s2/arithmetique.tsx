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
  title: "Arithmétique · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet d'arithmétique pour la 2ème année Baccalauréat Sciences Mathématiques A et B : divisibilité, division euclidienne, PGCD et algorithme d'Euclide, théorèmes de Bézout et de Gauss, équation ax + by = c, nombres premiers et congruences, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Math · Semestre 2",
  heroTitle: "Arithmétique",
  heroSubtitle:
    "Divisibilité, PGCD, théorèmes de Bézout et de Gauss, nombres premiers et congruences : les outils qui régissent les entiers relatifs, indispensables pour les problèmes de synthèse.",
  footerNote: "Arithmétique · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 2.",
  sections: [
    { id: "cours-divisibilite", label: "Divisibilité, PGCD" },
    { id: "cours-bezout-gauss", label: "Bézout et Gauss" },
    { id: "cours-nombres-premiers", label: "Nombres premiers" },
    { id: "cours-congruences", label: "Congruences" },
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
          { value: "4", label: "grandes parties" },
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
          <div className="relative flex select-none items-center gap-2 font-display text-6xl font-extrabold text-white sm:text-7xl">
            <Math tex="a\wedge b" />
          </div>
        }
      />

      {/* ===================== I. DIVISIBILITÉ, PGCD ===================== */}
      <LessonSection
        id="cours-divisibilite"
        kicker="01 · Les briques de base"
        title="Divisibilité, division euclidienne et PGCD"
        tone="light"
        description="Diviser, c'est comparer deux entiers ; le PGCD en est la mesure commune, calculée efficacement grâce à l'algorithme d'Euclide."
      >
        <CourseBlock numeral="I" title="Divisibilité et division euclidienne">
          <Box title="Définition" tone="def">
            Soient <Math tex="a,b\in\mathbb Z" /> avec <Math tex="b\neq0" />. On dit que <Math tex="b" />{" "}
            <strong className="text-foreground">divise</strong> <Math tex="a" />, noté <Math tex="b\mid a" />,
            s&apos;il existe <Math tex="k\in\mathbb Z" /> tel que <Math tex="a=kb" />.
          </Box>
          <Callout variant="success" title="Propriétés">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="a\mid b" /> et <Math tex="b\mid a" /> <Math tex="\implies |a|=|b|" />.
              </li>
              <li>
                <Math tex="a\mid b" /> et <Math tex="b\mid c" /> <Math tex="\implies a\mid c" /> (transitivité).
              </li>
              <li>
                <Math tex="a\mid m" /> et <Math tex="a\mid n" /> <Math tex="\implies a\mid(\alpha m+\beta n)" /> pour
                tous <Math tex="\alpha,\beta\in\mathbb Z" /> (combinaison linéaire).
              </li>
            </ul>
          </Callout>
          <Box title="Division euclidienne" tone="prop">
            Pour <Math tex="a\in\mathbb Z" /> et <Math tex="b\in\mathbb Z^*" />, il existe un unique couple{" "}
            <Math tex="(q,r)\in\mathbb Z\times\mathbb N" /> tel que :
          </Box>
          <MathBlock tex="a=bq+r\qquad\text{avec}\qquad 0\le r<|b|" />
        </CourseBlock>

        <CourseBlock numeral="II" title="PGCD et algorithme d'Euclide">
          <Box title="Définition" tone="def">
            Le <strong className="text-foreground">plus grand diviseur commun</strong> de deux entiers non nuls{" "}
            <Math tex="a" /> et <Math tex="b" />, noté <Math tex="a\wedge b" />, est le plus grand entier qui divise
            à la fois <Math tex="a" /> et <Math tex="b" />. On dit que <Math tex="a" /> et <Math tex="b" /> sont{" "}
            <strong>premiers entre eux</strong> si <Math tex="a\wedge b=1" />.
          </Box>
          <Callout variant="success" title="Propriétés du PGCD">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="a\wedge a=|a|" /> ; <Math tex="1\wedge a=1" /> ; si <Math tex="b\mid a" /> alors{" "}
                <Math tex="a\wedge b=|b|" />.
              </li>
              <li>
                <Math tex="(a\wedge b)\wedge c=a\wedge(b\wedge c)" /> ; <Math tex="a\wedge b=a\wedge(a-b)" />.
              </li>
            </ul>
          </Callout>
          <Box title="Algorithme d'Euclide" tone="prop">
            <p>
              Si <Math tex="a=bq+r" /> avec <Math tex="0\le r<b" />, alors <Math tex="a\wedge b=b\wedge r" />. En
              répétant les divisions euclidiennes successives, le <strong>dernier reste non nul</strong> est le
              PGCD cherché.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. BÉZOUT ET GAUSS ===================== */}
      <LessonSection
        id="cours-bezout-gauss"
        kicker="02 · Les deux théorèmes piliers"
        title="Théorèmes de Bézout et de Gauss"
        tone="muted"
        description="Deux résultats qui transforment le calcul du PGCD en équations à résoudre dans ℤ, et permettent de « simplifier » des divisibilités."
      >
        <CourseBlock numeral="III" title="Théorème de Bézout">
          <Box title="Théorème (identité de Bézout)" tone="prop">
            Soient <Math tex="a,b\in\mathbb Z^*" /> et <Math tex="d=a\wedge b" />. Il existe{" "}
            <Math tex="(u,v)\in\mathbb Z^2" /> tel que <Math tex="d=au+bv" />. En particulier :
          </Box>
          <MathBlock tex="a\wedge b=1 \iff \exists(u,v)\in\mathbb Z^2,\ au+bv=1" />
          <Callout variant="warning" title="À retenir">
            Le couple <Math tex="(u,v)" /> n&apos;est pas unique, et la réciproque de l&apos;identité de Bézout
            (sans l&apos;hypothèse <Math tex="d=a\wedge b" />) est fausse en général.
          </Callout>
          <Box title="Trouver u et v : remonter l'algorithme d'Euclide" tone="def">
            On effectue les divisions euclidiennes successives, puis on exprime chaque reste en fonction de{" "}
            <Math tex="a" /> et <Math tex="b" /> en remontant les calculs jusqu&apos;au dernier reste non nul.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Théorème de Gauss et équation ax + by = c">
          <Box title="Théorème de Gauss" tone="prop">
            Soient <Math tex="a,b,c\in\mathbb Z^*" />. Si <Math tex="c\mid ab" /> et <Math tex="c\wedge a=1" />,
            alors <Math tex="c\mid b" />.
          </Box>
          <Callout variant="success" title="Conséquences">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="a\mid c" />, <Math tex="b\mid c" /> et <Math tex="a\wedge b=1" />, alors{" "}
                <Math tex="ab\mid c" />.
              </li>
              <li>
                <Math tex="a\wedge b=1\iff a\wedge b^n=1" /> pour tout <Math tex="n\in\mathbb N^*" />.
              </li>
            </ul>
          </Callout>
          <Box title="Équation diophantienne ax + by = c" tone="def">
            <p>
              L&apos;équation <Math tex="(E):ax+by=c" /> (<Math tex="a,b,c\in\mathbb Z" />, <Math tex="(a,b)\neq(0,0)" />
              ) admet une solution dans <Math tex="\mathbb Z^2" /> si et seulement si <Math tex="(a\wedge b)\mid c" />
              . Si <Math tex="(x_0,y_0)" /> est une solution particulière, l&apos;ensemble des solutions est :
            </p>
            <MathBlock tex="S=\left\{\left(x_0+\dfrac{kb}{a\wedge b},\ y_0-\dfrac{ka}{a\wedge b}\right)\ /\ k\in\mathbb Z\right\}" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. NOMBRES PREMIERS ===================== */}
      <LessonSection
        id="cours-nombres-premiers"
        kicker="03 · Les briques élémentaires des entiers"
        title="Nombres premiers et décomposition en facteurs premiers"
        tone="light"
        description="Chaque entier se construit, de façon unique, à partir des nombres premiers : la clé pour compter les diviseurs et calculer PGCD, PPCM d'un seul coup d'œil."
      >
        <CourseBlock numeral="V" title="Nombres premiers">
          <Box title="Définition" tone="def">
            Un entier <Math tex="p\ge2" /> est <strong className="text-foreground">premier</strong> s&apos;il
            admet exactement deux diviseurs positifs : <Math tex="1" /> et <Math tex="p" />.
          </Box>
          <Callout variant="success" title="Propriétés">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Il existe une infinité de nombres premiers.</li>
              <li>
                Si <Math tex="n\ge2" /> n&apos;est pas premier, il admet un diviseur premier{" "}
                <Math tex="p" /> tel que <Math tex="p^2\le n" /> : c&apos;est le critère pratique pour tester la
                primalité d&apos;un entier.
              </li>
              <li>
                Si <Math tex="p" /> est premier et <Math tex="p\mid ab" />, alors <Math tex="p\mid a" /> ou{" "}
                <Math tex="p\mid b" /> (conséquence du théorème de Gauss).
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Décomposition en facteurs premiers">
          <Box title="Théorème fondamental" tone="prop">
            Tout entier <Math tex="n\ge2" /> se décompose de façon <strong>unique</strong> en produit de facteurs
            premiers :
          </Box>
          <MathBlock tex="n=p_1^{\alpha_1}\times p_2^{\alpha_2}\times\cdots\times p_k^{\alpha_k}" />
          <Callout variant="success" title="Applications directes">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Le nombre de diviseurs positifs de <Math tex="n" /> est{" "}
                <Math tex="(\alpha_1+1)(\alpha_2+1)\cdots(\alpha_k+1)" />.
              </li>
              <li>
                Si <Math tex="a=\prod p_i^{\alpha_i}" /> et <Math tex="b=\prod p_i^{\beta_i}" /> (mêmes facteurs
                premiers, exposant <Math tex="0" /> si absent), alors :
              </li>
            </ul>
            <MathBlock tex="a\wedge b=\prod p_i^{\min(\alpha_i,\beta_i)}\qquad\text{et}\qquad a\vee b=\prod p_i^{\max(\alpha_i,\beta_i)}" />
            <p>
              et on a toujours <Math tex="(a\wedge b)\times(a\vee b)=|ab|" />.
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. CONGRUENCES ===================== */}
      <LessonSection
        id="cours-congruences"
        kicker="04 · Comparer les restes"
        title="Congruences modulo n"
        tone="muted"
        description="Ne retenir que le reste d'une division euclidienne : un outil redoutable pour les démonstrations de divisibilité et le calcul de grandes puissances."
      >
        <CourseBlock numeral="VII" title="Définition et propriétés">
          <Box title="Définition" tone="def">
            Soient <Math tex="a,b\in\mathbb Z" /> et <Math tex="n\in\mathbb N^*" />. On dit que <Math tex="a" />{" "}
            est <strong className="text-foreground">congru</strong> à <Math tex="b" /> modulo <Math tex="n" />,
            noté <Math tex="a\equiv b\ [n]" />, si <Math tex="n\mid(b-a)" />.
          </Box>
          <Callout variant="success" title="Propriétés fondamentales">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>La relation <Math tex="\equiv\ [n]" /> est réflexive, symétrique et transitive.</li>
              <li>
                Si <Math tex="a\equiv b\ [n]" /> et <Math tex="c\equiv d\ [n]" />, alors{" "}
                <Math tex="a+c\equiv b+d\ [n]" /> et <Math tex="ac\equiv bd\ [n]" /> (compatibilité avec{" "}
                <Math tex="+" /> et <Math tex="\times" />).
              </li>
              <li>
                Si <Math tex="a\equiv b\ [n]" />, alors <Math tex="a^k\equiv b^k\ [n]" /> pour tout{" "}
                <Math tex="k\in\mathbb N" />.
              </li>
            </ul>
          </Callout>
          <Box title="Petit théorème de Fermat" tone="prop">
            Si <Math tex="p" /> est premier et <Math tex="a\in\mathbb Z" /> n&apos;est pas divisible par{" "}
            <Math tex="p" />, alors <Math tex="a^{p-1}\equiv1\ [p]" />, c&apos;est-à-dire{" "}
            <Math tex="a^p\equiv a\ [p]" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Arithmétique"
        tone="light"
        description="12 exercices corrigés, niveau Sciences Mathématiques : division euclidienne, PGCD, algorithme d'Euclide, Bézout, Gauss, nombres premiers et congruences."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre arithmétique est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Reste d'une division euclidienne"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que pour tout <Math tex="n\in\mathbb Z" />, le reste de la division euclidienne de{" "}
                <Math tex="n^2" /> par <Math tex="4" /> vaut <Math tex="0" /> ou <Math tex="1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Si <Math tex="n" /> est pair, <Math tex="n=2k" />, alors <Math tex="n^2=4k^2" /> : le reste est{" "}
                  <Math tex="0" />.
                </p>
                <p>
                  Si <Math tex="n" /> est impair, <Math tex="n=2k+1" />, alors{" "}
                  <Math tex="n^2=4k^2+4k+1=4(k^2+k)+1" /> avec <Math tex="0\le1<4" />.
                </p>
                <p className="font-semibold text-green-700">
                  Dans les deux cas, le reste de <Math tex="n^2" /> modulo <Math tex="4" /> vaut <Math tex="0" />{" "}
                  ou <Math tex="1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Deux entiers toujours premiers entre eux"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="n\in\mathbb N" />, <Math tex="a=2n+1" /> et <Math tex="b=n+1" />. Montrer que{" "}
                <Math tex="a" /> et <Math tex="b" /> sont premiers entre eux.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Soit <Math tex="d=a\wedge b" />. Alors <Math tex="d" /> divise{" "}
                  <Math tex="a-2b=(2n+1)-2(n+1)=-1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="d\mid1" />, d&apos;où <Math tex="d=1" /> : <Math tex="a" /> et <Math tex="b" />{" "}
                  sont premiers entre eux pour tout <Math tex="n" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Algorithme d'Euclide et coefficients de Bézout"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer <Math tex="1071\wedge462" /> à l&apos;aide de l&apos;algorithme d&apos;Euclide, puis
                trouver <Math tex="(u,v)\in\mathbb Z^2" /> tel que <Math tex="1071u+462v=1071\wedge462" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="1071=2\times462+147" /> ; <Math tex="462=3\times147+21" /> ;{" "}
                  <Math tex="147=7\times21+0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Le dernier reste non nul est <Math tex="21" />, donc <Math tex="1071\wedge462=21" />.
                </p>
                <p>
                  En remontant : <Math tex="147=1071-2\times462" />, puis{" "}
                  <Math tex="21=462-3\times147=462-3(1071-2\times462)=7\times462-3\times1071" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(u,v)=(-3,7)" /> convient : <Math tex="1071\times(-3)+462\times7=21" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Décomposition en facteurs premiers, PGCD et PPCM"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Décomposer <Math tex="360" /> en produit de facteurs premiers et donner le nombre de ses diviseurs
                positifs. Sachant que <Math tex="150=2\times3\times5^2" />, calculer{" "}
                <Math tex="360\wedge150" /> et <Math tex="360\vee150" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="360=2^3\times3^2\times5" />. Le nombre de diviseurs positifs est{" "}
                  <Math tex="(3+1)(2+1)(1+1)=24" />.
                </p>
                <p>
                  <Math tex="360\wedge150=2^{\min(3,1)}\times3^{\min(2,1)}\times5^{\min(1,2)}=2\times3\times5=30" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="360\vee150=2^3\times3^2\times5^2=1800" />. Vérification :{" "}
                  <Math tex="30\times1800=54000=360\times150" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Équation diophantienne"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb Z^2" /> l&apos;équation <Math tex="15x+9y=12" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="15\wedge9=3" /> et <Math tex="3\mid12" /> : l&apos;équation admet des solutions.
                  Après simplification par <Math tex="3" /> : <Math tex="5x+3y=4" />.
                </p>
                <p>
                  Le couple <Math tex="(2,-2)" /> est une solution particulière : <Math tex="5\times2+3\times(-2)=4" />
                  .
                </p>
                <p>
                  L&apos;équation homogène <Math tex="5x+3y=0" /> donne, puisque{" "}
                  <Math tex="5\wedge3=1" />, <Math tex="x=3k" /> et <Math tex="y=-5k" /> (<Math tex="k\in\mathbb Z" />
                  ).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{(2+3k,\,-2-5k)\ /\ k\in\mathbb Z\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Congruence linéaire"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb Z" /> la congruence <Math tex="7x\equiv3\ [12]" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="7\wedge12=1" />, donc <Math tex="7" /> est inversible modulo <Math tex="12" />. On a{" "}
                  <Math tex="7\times7=49=48+1\equiv1\ [12]" />, donc <Math tex="7^{-1}\equiv7\ [12]" />.
                </p>
                <p>
                  En multipliant les deux membres par <Math tex="7" /> : <Math tex="x\equiv7\times3=21\equiv9\ [12]" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{x\in\mathbb Z\ /\ x\equiv9\ [12]\}" /> (on vérifie{" "}
                  <Math tex="7\times9=63\equiv3\ [12]" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Divisibilité par congruence"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que pour tout <Math tex="n\in\mathbb N" />, <Math tex="3^{2n+1}+2^{n+2}" /> est divisible
                par <Math tex="7" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="3^{2n+1}=3\times9^n" /> et <Math tex="9\equiv2\ [7]" />, donc{" "}
                  <Math tex="9^n\equiv2^n\ [7]" />, d&apos;où <Math tex="3^{2n+1}\equiv3\times2^n\ [7]" />.
                </p>
                <p>
                  D&apos;autre part <Math tex="2^{n+2}=4\times2^n" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="3^{2n+1}+2^{n+2}\equiv3\times2^n+4\times2^n=7\times2^n\equiv0\ [7]" /> : le nombre
                  est bien divisible par <Math tex="7" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Petit théorème de Fermat"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer le reste de la division euclidienne de <Math tex="7^{100}" /> par <Math tex="5" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="5" /> est premier et <Math tex="7\equiv2\ [5]" />, donc{" "}
                  <Math tex="7^{100}\equiv2^{100}\ [5]" />.
                </p>
                <p>
                  D&apos;après le petit théorème de Fermat, <Math tex="2^4\equiv1\ [5]" />. Or{" "}
                  <Math tex="100=4\times25" />, donc <Math tex="2^{100}=(2^4)^{25}\equiv1^{25}=1\ [5]" />.
                </p>
                <p className="font-semibold text-green-700">
                  Le reste de la division de <Math tex="7^{100}" /> par <Math tex="5" /> est <Math tex="1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Diviseurs communs dépendant d'un paramètre"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="n\in\mathbb N" />, <Math tex="a=2n+3" /> et <Math tex="b=4n+1" />. 1) Montrer que
                tout diviseur commun de <Math tex="a" /> et <Math tex="b" /> divise <Math tex="5" />. 2) En
                déduire <Math tex="a\wedge b" /> selon les valeurs de <Math tex="n" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) Un diviseur commun <Math tex="d" /> de <Math tex="a" /> et <Math tex="b" /> divise{" "}
                  <Math tex="2a-b=2(2n+3)-(4n+1)=5" />.
                </p>
                <p>
                  2) Donc <Math tex="a\wedge b\in\{1,5\}" />. On a <Math tex="5\mid a" /> ssi{" "}
                  <Math tex="2n+3\equiv0\ [5]" />, c&apos;est-à-dire <Math tex="n\equiv1\ [5]" /> (car{" "}
                  <Math tex="2\times3\equiv1\ [5]" /> donne <Math tex="n\equiv3\times(-3)\equiv1\ [5]" />).
                </p>
                <p className="font-semibold text-green-700">
                  Si <Math tex="n\equiv1\ [5]" />, alors <Math tex="a\wedge b=5" /> ; sinon{" "}
                  <Math tex="a\wedge b=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Test de primalité"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="191" /> est un nombre premier.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On a <Math tex="13^2=169\le191" /> et <Math tex="14^2=196>191" />, donc il suffit de tester les
                  nombres premiers <Math tex="p" /> tels que <Math tex="p^2\le191" />, soit{" "}
                  <Math tex="p\in\{2,3,5,7,11,13\}" />.
                </p>
                <p>
                  <Math tex="191" /> est impair, sa somme des chiffres <Math tex="1+9+1=11" /> n&apos;est pas
                  divisible par <Math tex="3" />, il ne se termine pas par <Math tex="0" /> ou <Math tex="5" />.
                </p>
                <p>
                  <Math tex="191=7\times27+2" /> ; <Math tex="191=11\times17+4" /> ;{" "}
                  <Math tex="191=13\times14+9" /> : aucun reste n&apos;est nul.
                </p>
                <p className="font-semibold text-green-700">
                  Aucun nombre premier <Math tex="p\le13" /> ne divise <Math tex="191" /> : donc <Math tex="191" />{" "}
                  est premier.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Équation avec une différence de carrés"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb N^2" /> l&apos;équation <Math tex="x^2-y^2=45" /> avec{" "}
                <Math tex="x>y>0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="x^2-y^2=(x-y)(x+y)=45" />. Comme <Math tex="45" /> est impair, <Math tex="x-y" /> et{" "}
                  <Math tex="x+y" /> sont tous deux impairs (donc de même parité), ce qui est cohérent.
                </p>
                <p>
                  On pose <Math tex="x-y=d_1\le d_2=x+y" /> avec <Math tex="d_1d_2=45" /> :{" "}
                  <Math tex="(d_1,d_2)\in\{(1,45),(3,15),(5,9)\}" />, d&apos;où <Math tex="x=\dfrac{d_1+d_2}2" />,{" "}
                  <Math tex="y=\dfrac{d_2-d_1}2" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{(23,22),\,(9,6),\,(7,2)\}" /> (on vérifie par exemple{" "}
                  <Math tex="23^2-22^2=529-484=45" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Équation dans ℤ/7ℤ"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb Z/7\mathbb Z" /> l&apos;équation <Math tex="3\bar x=\bar5" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On a <Math tex="3\times5=15\equiv1\ [7]" />, donc l&apos;inverse de <Math tex="3" /> modulo{" "}
                  <Math tex="7" /> est <Math tex="5" />.
                </p>
                <p>
                  En multipliant par <Math tex="5" /> : <Math tex="x\equiv5\times5=25\equiv4\ [7]" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;unique solution dans <Math tex="\mathbb Z/7\mathbb Z" /> est <Math tex="\bar x=\bar4" /> (on
                  vérifie <Math tex="3\times4=12\equiv5\ [7]" />).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
