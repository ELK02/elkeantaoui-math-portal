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
  title: "La fonction logarithme · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet sur la fonction logarithme népérien pour la 2ème année Baccalauréat Sciences Mathématiques (Semestre 1) : existence, propriété fondamentale, étude complète (limites de référence, monotonie, courbe), dérivée de ln(u) et logarithmes de base a, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "La fonction logarithme",
  heroSubtitle:
    "Une fonction née d'une équation fonctionnelle : transformer les produits en sommes. Existence, propriété fondamentale, étude complète et logarithmes de base a.",
  footerNote: "La fonction logarithme · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-existence", label: "Existence" },
    { id: "cours-algebrique", label: "Propriété fondamentale" },
    { id: "cours-etude", label: "Étude de ln" },
    { id: "cours-base-a", label: "Dérivée & bases" },
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
          { value: "5", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-existence"
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
            <Math tex="\ln" />
          </div>
        }
      />

      {/* ===================== I. EXISTENCE ===================== */}
      <LessonSection
        id="cours-existence"
        kicker="01 · Une fonction née d'une équation"
        title="Existence de la fonction logarithme népérien"
        tone="light"
        description="On cherche une fonction qui transforme les produits en sommes. Il en existe une seule qui s'annule en 1 : le logarithme népérien."
      >
        <CourseBlock numeral="I" title="Activité : recherche d'une fonction f telle que f(xy)=f(x)+f(y)">
          <Box title="Activité (admise)" tone="def">
            On cherche une fonction <Math tex="f" /> non nulle, dérivable sur <Math tex="]0,+\infty[" />, telle que{" "}
            <Math tex="(\forall x>0)(\forall y>0)\big(f(xy)=f(x)+f(y)\big)" />. En prenant{" "}
            <Math tex="x=y=1" />, on obtient <Math tex="f(1)=2f(1)" />, donc <Math tex="f(1)=0" />. En dérivant la
            relation par rapport à <Math tex="x" /> (à <Math tex="y" /> fixé), on obtient{" "}
            <Math tex="y\,f'(xy)=f'(x)" /> ; pour <Math tex="x=1" />, il vient{" "}
            <Math tex="f'(y)=\dfrac{f'(1)}{y}" />. Ainsi <Math tex="f" /> est nécessairement une primitive sur{" "}
            <Math tex="]0,+\infty[" /> de <Math tex="x\mapsto \dfrac{k}{x}" /> (avec <Math tex="k=f'(1)" />) qui
            s&apos;annule en <Math tex="1" />. On admet que la réciproque est vraie.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Définition du logarithme népérien">
          <Box title="Définition" tone="def">
            La <strong className="text-foreground">fonction logarithme népérien</strong>, notée{" "}
            <Math tex="\ln" />, est la primitive sur <Math tex="]0,+\infty[" /> de la fonction{" "}
            <Math tex="x\mapsto \dfrac1x" /> qui s&apos;annule en <Math tex="1" />.
          </Box>
          <Callout variant="success" title="Conséquences immédiates">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\ln" /> est définie sur <Math tex="]0,+\infty[" /> ; la fonction{" "}
                <Math tex="x\mapsto \ln(u(x))" /> est définie si et seulement si <Math tex="u(x)>0" />.
              </li>
              <li>
                <Math tex="\ln(1)=0" />.
              </li>
              <li>
                <Math tex="\ln" /> est dérivable (donc continue) sur <Math tex="]0,+\infty[" /> et{" "}
                <Math tex="(\forall x>0)\left(\ln'(x)=\dfrac1x\right)" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. PROPRIÉTÉ FONDAMENTALE ===================== */}
      <LessonSection
        id="cours-algebrique"
        kicker="02 · Le cœur du logarithme"
        title="Propriété fondamentale et règles de calcul"
        tone="muted"
        description="La relation ln(xy)=ln(x)+ln(y) fait de ln un outil puissant : elle transforme les produits en sommes, les quotients en différences, les puissances en produits."
      >
        <CourseBlock numeral="III" title="La propriété fondamentale">
          <Box title="Théorème" tone="prop">
            <Math tex="(\forall x>0)(\forall y>0)\big(\ln(xy)=\ln(x)+\ln(y)\big)" />.
          </Box>
          <Callout variant="info" title="Démonstration">
            Fixons <Math tex="y>0" /> et posons, pour <Math tex="x>0" />,{" "}
            <Math tex="\varphi(x)=\ln(xy)-\ln(x)" />. La fonction <Math tex="\varphi" /> est dérivable et :
            <MathBlock tex="\varphi'(x)=y\times\dfrac{1}{xy}-\dfrac1x=\dfrac1x-\dfrac1x=0" />
            Donc <Math tex="\varphi" /> est constante sur <Math tex="]0,+\infty[" />, égale à{" "}
            <Math tex="\varphi(1)=\ln(y)-\ln(1)=\ln(y)" />. D&apos;où{" "}
            <Math tex="\ln(xy)-\ln(x)=\ln(y)" />, c&apos;est-à-dire <Math tex="\ln(xy)=\ln(x)+\ln(y)" />.
          </Callout>
          <Callout variant="success" title="Règles de calcul (à connaître par cœur)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="(\forall x>0)\left(\ln\left(\dfrac1x\right)=-\ln(x)\right)" />.
              </li>
              <li>
                <Math tex="(\forall x>0)(\forall y>0)\left(\ln\left(\dfrac{x}{y}\right)=\ln(x)-\ln(y)\right)" />.
              </li>
              <li>
                <Math tex="(\forall x>0)(\forall n\in\mathbb Z)\big(\ln(x^n)=n\ln(x)\big)" />.
              </li>
              <li>
                <Math tex="(\forall x>0)\left(\ln(\sqrt x)=\dfrac12\ln(x)\right)" />.
              </li>
              <li>
                Plus généralement, <Math tex="(\forall x>0)(\forall r\in\mathbb Q)\big(\ln(x^r)=r\ln(x)\big)" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. ÉTUDE DE LN ===================== */}
      <LessonSection
        id="cours-etude"
        kicker="03 · Comportement global"
        title="Étude complète de la fonction logarithme"
        tone="light"
        description="Monotonie, signe, limites de référence, le nombre e et la courbe : tout ce qu'il faut savoir sur ln."
      >
        <CourseBlock numeral="IV" title="Monotonie et signe">
          <Box title="Propriété" tone="prop">
            Pour tout <Math tex="x>0" />, <Math tex="\ln'(x)=\dfrac1x>0" />. Donc <Math tex="\ln" /> est{" "}
            <strong>strictement croissante</strong> sur <Math tex="]0,+\infty[" />.
          </Box>
          <Callout variant="warning" title="Conséquences (à connaître par cœur)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="(\forall a>0)(\forall b>0)\big(\ln(a)=\ln(b)\iff a=b\big)" /> ;{" "}
                <Math tex="\ln(a)\leqslant\ln(b)\iff a\leqslant b" />.
              </li>
              <li>
                <Math tex="\ln(x)>0 \iff x>1" /> ; <Math tex="\ln(x)<0 \iff 0<x<1" /> ;{" "}
                <Math tex="\ln(x)=0 \iff x=1" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Limites de référence et le nombre e">
          <Callout variant="success" title="Limites usuelles à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\displaystyle\lim_{x\to+\infty}\ln(x)=+\infty" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to0^+}\ln(x)=-\infty" />.
              </li>
              <li>
                <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{\ln(x)}{x}=0" /> et, plus généralement pour{" "}
                <Math tex="r>0" />, <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{\ln(x)}{x^r}=0" />.
              </li>
              <li>
                <Math tex="\displaystyle\lim_{x\to0^+}x\ln(x)=0" /> et, pour <Math tex="r>0" />,{" "}
                <Math tex="\displaystyle\lim_{x\to0^+}x^r\ln(x)=0" />.
              </li>
              <li>
                <Math tex="\displaystyle\lim_{x\to1}\dfrac{\ln(x)}{x-1}=1" /> (nombre dérivé de{" "}
                <Math tex="\ln" /> en <Math tex="1" />) et{" "}
                <Math tex="\displaystyle\lim_{x\to0}\dfrac{\ln(1+x)}{x}=1" />.
              </li>
            </ul>
          </Callout>
          <Box title="Définition : le nombre e" tone="def">
            La fonction <Math tex="\ln" /> est continue et strictement croissante sur <Math tex="]0,+\infty[" />,
            avec <Math tex="\displaystyle\lim_{x\to0^+}\ln(x)=-\infty" /> et{" "}
            <Math tex="\displaystyle\lim_{x\to+\infty}\ln(x)=+\infty" />. D&apos;après le théorème des valeurs
            intermédiaires, il existe un unique réel, noté <Math tex="e" />, tel que <Math tex="\ln(e)=1" />. On a{" "}
            <Math tex="e\approx 2{,}718" />.
          </Box>
          <Callout variant="info" title="Tableau de variation et courbe">
            <p>
              <Math tex="\ln" /> est strictement croissante de <Math tex="-\infty" /> à <Math tex="+\infty" /> sur{" "}
              <Math tex="]0,+\infty[" />. La droite <Math tex="x=0" /> est asymptote verticale à la courbe{" "}
              <Math tex="(C_{\ln})" /> (car <Math tex="\lim_{x\to0^+}\ln(x)=-\infty" />). La tangente à{" "}
              <Math tex="(C_{\ln})" /> au point <Math tex="A(1,0)" /> a pour équation{" "}
              <Math tex="y=x-1" /> (car <Math tex="\ln(1)=0" /> et <Math tex="\ln'(1)=1" />).
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== VI. DÉRIVÉE & BASES ===================== */}
      <LessonSection
        id="cours-base-a"
        kicker="04 · Dérivées composées et autres bases"
        title="Dérivée de ln(u), logarithme décimal et logarithme de base a"
        tone="muted"
        description="On généralise la dérivation aux fonctions composées, puis on construit des logarithmes adaptés à d'autres bases que e."
      >
        <CourseBlock numeral="VI" title="Dérivée de ln∘u">
          <Box title="Propriété" tone="prop">
            Si <Math tex="u" /> est dérivable et strictement positive sur un intervalle <Math tex="I" />, alors{" "}
            <Math tex="\ln(u)" /> est dérivable sur <Math tex="I" /> et :
          </Box>
          <MathBlock tex="\big(\ln(u)\big)'=\dfrac{u'}{u}" />
        </CourseBlock>

        <CourseBlock numeral="VII" title="Logarithme décimal et logarithme de base a">
          <Box title="Définition" tone="def">
            La <strong className="text-foreground">fonction logarithme décimal</strong>, notée{" "}
            <Math tex="\log" /> (ou <Math tex="\log_{10}" />), est définie sur <Math tex="]0,+\infty[" /> par{" "}
            <Math tex="\log(x)=\dfrac{\ln(x)}{\ln(10)}" />. On a <Math tex="\log(10)=1" />,{" "}
            <Math tex="\log(1)=0" /> et <Math tex="(\forall n\in\mathbb Z)\big(\log(10^n)=n\big)" />.
          </Box>
          <Box title="Définition" tone="def">
            Soit <Math tex="a>0" />, <Math tex="a\neq1" />. La{" "}
            <strong className="text-foreground">fonction logarithme de base a</strong>, notée{" "}
            <Math tex="\log_a" />, est définie sur <Math tex="]0,+\infty[" /> par{" "}
            <Math tex="\log_a(x)=\dfrac{\ln(x)}{\ln(a)}" />.
          </Box>
          <Callout variant="success" title="Propriétés (comme pour ln)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\log_a(a)=1" /> et <Math tex="\log_a(1)=0" />.
              </li>
              <li>
                <Math tex="(\forall x>0)(\forall y>0)\big(\log_a(xy)=\log_a(x)+\log_a(y)\big)" />.
              </li>
              <li>
                Si <Math tex="a>1" />, <Math tex="\log_a" /> est strictement croissante ; si{" "}
                <Math tex="0<a<1" />, <Math tex="\log_a" /> est strictement décroissante (car{" "}
                <Math tex="\ln(a)" /> change de signe).
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · La fonction logarithme"
        tone="light"
        description="12 exercices corrigés, au niveau Sciences Mathématiques : domaine de définition, calculs, équations, inéquations, limites et étude de fonction."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre fonction logarithme est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Domaines de définition"
            itemsLabel="3 fonctions"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer le domaine de définition de <Math tex="f(x)=\ln(x-1)" />,{" "}
                <Math tex="g(x)=\ln(x^2-3x+2)" /> et <Math tex="h(x)=\ln(\ln(x))" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f" /> est définie ssi <Math tex="x-1>0" />, donc{" "}
                  <Math tex="D_f=]1,+\infty[" />.
                </p>
                <p>
                  <Math tex="x^2-3x+2=(x-1)(x-2)" /> s&apos;annule en <Math tex="1" /> et <Math tex="2" /> et est
                  positif à l&apos;extérieur des racines, donc <Math tex="D_g=]-\infty,1[\cup]2,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="h" /> est définie ssi <Math tex="x>0" /> et <Math tex="\ln(x)>0" /> ssi{" "}
                  <Math tex="x>1" />, donc <Math tex="D_h=]1,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Calculs avec les règles de ln"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On pose <Math tex="\ln2\approx0{,}7" /> et <Math tex="\ln3\approx1{,}1" />. Exprimer{" "}
                <Math tex="\ln(72)" /> et <Math tex="\ln\!\left(\dfrac{16}{27}\right)" /> en fonction de{" "}
                <Math tex="\ln2" /> et <Math tex="\ln3" />, puis donner une valeur approchée.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="72=2^3\times3^2" />, donc{" "}
                  <Math tex="\ln(72)=3\ln2+2\ln3\approx3(0{,}7)+2(1{,}1)=2{,}1+2{,}2=4{,}3" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac{16}{27}=\dfrac{2^4}{3^3}" />, donc{" "}
                  <Math tex="\ln\!\left(\dfrac{16}{27}\right)=4\ln2-3\ln3\approx4(0{,}7)-3(1{,}1)=2{,}8-3{,}3=-0{,}5" />
                  .
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Résoudre une équation"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation{" "}
                <Math tex="\ln(2x-1)+\ln(x+1)=\ln(4x+2)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : il faut <Math tex="2x-1>0" />, <Math tex="x+1>0" /> et{" "}
                  <Math tex="4x+2>0" />, soit <Math tex="x>\dfrac12" />.
                </p>
                <p>
                  Sur ce domaine :{" "}
                  <Math tex="\ln\big((2x-1)(x+1)\big)=\ln(4x+2) \iff (2x-1)(x+1)=4x+2" />.
                </p>
                <p>
                  <Math tex="(2x-1)(x+1)=2x^2+x-1" />, donc l&apos;équation devient{" "}
                  <Math tex="2x^2+x-1=4x+2 \iff 2x^2-3x-3=0" />.
                </p>
                <p>
                  <Math tex="\Delta=9+24=33" />, donc <Math tex="x=\dfrac{3-\sqrt{33}}{4}" /> (à rejeter, négatif)
                  ou <Math tex="x=\dfrac{3+\sqrt{33}}{4}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\dfrac{3+\sqrt{33}}{4}\approx2{,}19>\dfrac12" />, l&apos;ensemble des solutions
                  est <Math tex="S=\left\{\dfrac{3+\sqrt{33}}{4}\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Résoudre une inéquation"
            itemsLabel="1 inéquation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;inéquation <Math tex="\ln(3x+1)\leqslant\ln(x+5)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : <Math tex="3x+1>0" /> et <Math tex="x+5>0" />, soit{" "}
                  <Math tex="x>-\dfrac13" />.
                </p>
                <p>
                  Comme <Math tex="\ln" /> est strictement croissante :{" "}
                  <Math tex="\ln(3x+1)\leqslant\ln(x+5) \iff 3x+1\leqslant x+5 \iff x\leqslant2" />.
                </p>
                <p className="font-semibold text-green-700">
                  En tenant compte du domaine : <Math tex="S=\left]-\dfrac13,2\right]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Équation quadratique en ln(x)"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation{" "}
                <Math tex="2(\ln x)^2-\ln x-1=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : <Math tex="x>0" />. On pose <Math tex="X=\ln x" /> : l&apos;équation devient{" "}
                  <Math tex="2X^2-X-1=0" />.
                </p>
                <p>
                  <Math tex="\Delta=1+8=9" />, donc <Math tex="X=\dfrac{1-3}{4}=-\dfrac12" /> ou{" "}
                  <Math tex="X=\dfrac{1+3}{4}=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\ln x=-\dfrac12 \iff x=e^{-1/2}=\dfrac1{\sqrt e}" />, ou{" "}
                  <Math tex="\ln x=1 \iff x=e" />. Ainsi{" "}
                  <Math tex="S=\left\{\dfrac1{\sqrt e}\,;\,e\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Limites de référence"
            itemsLabel="4 limites"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\big(\ln(x+1)-\ln(x)\big)" />,{" "}
                <Math tex="\displaystyle\lim_{x\to0^+}x^2\ln(x)" />,{" "}
                <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{\ln(x)}{\sqrt x}" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to1}\dfrac{\ln(x)}{x^2-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\ln(x+1)-\ln(x)=\ln\!\left(\dfrac{x+1}{x}\right)=\ln\!\left(1+\dfrac1x\right)\to\ln(1)=0" />
                  .
                </p>
                <p>
                  D&apos;après le cours (limite de référence, <Math tex="r=2" />) :{" "}
                  <Math tex="\displaystyle\lim_{x\to0^+}x^2\ln(x)=0" />.
                </p>
                <p>
                  D&apos;après le cours (limite de référence, <Math tex="r=\dfrac12" />) :{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{\ln(x)}{\sqrt x}=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac{\ln(x)}{x^2-1}=\dfrac{\ln(x)}{x-1}\times\dfrac1{x+1}\to1\times\dfrac12=\dfrac12" />
                  .
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Dérivée d'une composée"
            itemsLabel="2 dérivées"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la dérivée de <Math tex="f(x)=\ln(x^2+1)" /> et de{" "}
                <Math tex="g(x)=\big(\ln(x)\big)^2" /> sur leurs domaines respectifs.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="u(x)=x^2+1>0" /> : <Math tex="f'(x)=\dfrac{u'(x)}{u(x)}=\dfrac{2x}{x^2+1}" /> sur{" "}
                  <Math tex="\mathbb R" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="g=\ln\times\ln" />, donc <Math tex="g'(x)=2\ln(x)\times\ln'(x)=\dfrac{2\ln(x)}{x}" />{" "}
                  sur <Math tex="]0,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Tangente à la courbe de ln"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer une équation de la tangente à la courbe de <Math tex="\ln" /> au point d&apos;abscisse{" "}
                <Math tex="e" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  La tangente en <Math tex="e" /> a pour équation{" "}
                  <Math tex="y=\ln'(e)(x-e)+\ln(e)" />.
                </p>
                <p>
                  Or <Math tex="\ln'(e)=\dfrac1e" /> et <Math tex="\ln(e)=1" />, donc{" "}
                  <Math tex="y=\dfrac1e(x-e)+1=\dfrac{x}{e}-1+1" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;équation de la tangente est <Math tex="y=\dfrac{x}{e}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Logarithme de base a"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\log(x)+\log(x-3)=1" /> (où{" "}
                <Math tex="\log" /> est le logarithme décimal).
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : <Math tex="x>0" /> et <Math tex="x-3>0" />, soit <Math tex="x>3" />.
                </p>
                <p>
                  <Math tex="\log(x)+\log(x-3)=\log\big(x(x-3)\big)=1=\log(10)" />, donc{" "}
                  <Math tex="x(x-3)=10 \iff x^2-3x-10=0" />.
                </p>
                <p>
                  <Math tex="\Delta=9+40=49" />, donc <Math tex="x=\dfrac{3-7}{2}=-2" /> (rejeté) ou{" "}
                  <Math tex="x=\dfrac{3+7}{2}=5" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="5>3" />, l&apos;ensemble des solutions est <Math tex="S=\{5\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Étude d'une fonction avec ln"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x-\ln(x)" /> définie sur <Math tex="]0,+\infty[" />. Étudier les variations de{" "}
                <Math tex="f" />, en déduire son signe minimal, puis calculer{" "}
                <Math tex="\displaystyle\lim_{x\to0^+}f(x)" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to+\infty}f(x)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=1-\dfrac1x=\dfrac{x-1}{x}" />. Sur <Math tex="]0,+\infty[" />,{" "}
                  <Math tex="f'(x)" /> est du signe de <Math tex="x-1" /> : <Math tex="f" /> décroît sur{" "}
                  <Math tex="]0,1]" /> puis croît sur <Math tex="[1,+\infty[" />.
                </p>
                <p>
                  <Math tex="f" /> admet donc un minimum en <Math tex="x=1" /> qui vaut{" "}
                  <Math tex="f(1)=1-\ln(1)=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(\forall x>0)(f(x)\geqslant1>0)" />. De plus{" "}
                  <Math tex="\displaystyle\lim_{x\to0^+}f(x)=0-(-\infty)=+\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}x\left(1-\dfrac{\ln x}{x}\right)=+\infty" />
                  .
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Existence et unicité d'une solution"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="g(x)=\ln(x)+x-2" /> sur <Math tex="]0,+\infty[" />. Montrer que l&apos;équation{" "}
                <Math tex="g(x)=0" /> admet une unique solution <Math tex="\alpha" /> dans{" "}
                <Math tex="]0,+\infty[" />, puis vérifier que <Math tex="1<\alpha<2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="g'(x)=\dfrac1x+1>0" /> sur <Math tex="]0,+\infty[" />, donc <Math tex="g" /> est
                  continue et strictement croissante sur cet intervalle.
                </p>
                <p>
                  <Math tex="\displaystyle\lim_{x\to0^+}g(x)=-\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}g(x)=+\infty" /> (car{" "}
                  <Math tex="g(x)=x\left(1+\dfrac{\ln x}{x}\right)-2\to+\infty" />
                  ).
                </p>
                <p>
                  D&apos;après le théorème de la bijection (corollaire du TVI), <Math tex="g" /> réalise une
                  bijection de <Math tex="]0,+\infty[" /> vers <Math tex="\mathbb R" />, donc l&apos;équation{" "}
                  <Math tex="g(x)=0" /> admet une unique solution <Math tex="\alpha" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="g(1)=\ln(1)+1-2=-1<0" /> et{" "}
                  <Math tex="g(2)=\ln(2)+2-2=\ln(2)>0" />, et <Math tex="g" /> est strictement croissante, donc{" "}
                  <Math tex="1<\alpha<2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Étude de fonction et courbe (niveau bac)"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{\ln(x)}{x}" /> définie sur <Math tex="]0,+\infty[" />, de courbe{" "}
                <Math tex="(C_f)" />. 1) Calculer les limites de <Math tex="f" /> en <Math tex="0^+" /> et en{" "}
                <Math tex="+\infty" />, et interpréter graphiquement. 2) Montrer que{" "}
                <Math tex="f'(x)=\dfrac{1-\ln(x)}{x^2}" />, puis dresser le tableau de variation de{" "}
                <Math tex="f" />. 3) En déduire que <Math tex="f(x)\leqslant\dfrac1e" /> pour tout{" "}
                <Math tex="x>0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="\displaystyle\lim_{x\to0^+}f(x)=\lim_{x\to0^+}\ln(x)\times\dfrac1x=-\infty" /> (
                  <Math tex="\ln(x)\to-\infty" /> et <Math tex="\dfrac1x\to+\infty" />) : la droite{" "}
                  <Math tex="x=0" /> est asymptote verticale à <Math tex="(C_f)" />.
                </p>
                <p>
                  <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}\dfrac{\ln(x)}{x}=0" /> : la
                  droite <Math tex="y=0" /> est asymptote horizontale à <Math tex="(C_f)" /> en{" "}
                  <Math tex="+\infty" />.
                </p>
                <p>
                  2) Avec <Math tex="f=\dfrac{u}{v}" />, <Math tex="u(x)=\ln(x)" />, <Math tex="v(x)=x" /> :{" "}
                  <Math tex="f'(x)=\dfrac{u'v-uv'}{v^2}=\dfrac{\frac1x\cdot x-\ln(x)\cdot1}{x^2}=\dfrac{1-\ln(x)}{x^2}" />
                  .
                </p>
                <p>
                  Sur <Math tex="]0,+\infty[" />, <Math tex="x^2>0" /> donc <Math tex="f'(x)" /> est du signe de{" "}
                  <Math tex="1-\ln(x)" /> : <Math tex="f'(x)>0 \iff \ln(x)<1 \iff x<e" />. Donc <Math tex="f" />{" "}
                  croît sur <Math tex="]0,e]" /> et décroît sur <Math tex="[e,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  3) <Math tex="f" /> admet donc un maximum absolu en <Math tex="x=e" />, qui vaut{" "}
                  <Math tex="f(e)=\dfrac{\ln(e)}{e}=\dfrac1e" />. Donc{" "}
                  <Math tex="(\forall x>0)\left(f(x)\leqslant\dfrac1e\right)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
