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
  title: "Généralités sur les fonctions · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur les généralités des fonctions pour la 1ère année Baccalauréat Sciences Mathématiques : parité, monotonie, extremums absolus et relatifs, taux d'accroissement, fonction périodique, fonction majorée/minorée/bornée, comparaison de fonctions, composée, monotonie de f+c/c·f/g∘f, fonctions de référence (trinôme, homographique, partie entière), avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Généralités sur les fonctions",
  heroSubtitle:
    "Le vocabulaire et les outils qui serviront à étudier toute fonction cette année : parité, monotonie, taux d'accroissement, périodicité, bornes, et composée.",
  footerNote: "Généralités sur les fonctions · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
  sections: [
    { id: "cours-rappels", label: "Rappels" },
    { id: "cours-taux", label: "Taux, périodicité" },
    { id: "cours-bornes", label: "Bornes" },
    { id: "cours-composee", label: "Composée" },
    { id: "cours-reference", label: "Fonctions de référence" },
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
          { value: "3", label: "fonctions de référence" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-rappels"
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
            <Math tex="T_f(x,x')" />
          </div>
        }
      />

      {/* ===================== I. RAPPELS ===================== */}
      <LessonSection
        id="cours-rappels"
        kicker="01 · Ce qu'on suppose déjà connu"
        title="Parité, monotonie, extremums absolus et relatifs"
        tone="light"
        description="La base sur laquelle s'appuient tous les outils plus fins de ce chapitre."
      >
        <CourseBlock numeral="I" title="Parité et domaine d'étude">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Fonction paire" tone="def">
              <MathBlock tex="\begin{gathered}\forall x\in D_f,\ -x\in D_f\\\forall x\in D_f,\ f(-x)=f(x)\end{gathered}" />
            </Box>
            <Box title="Fonction impaire" tone="def">
              <MathBlock tex="\begin{gathered}\forall x\in D_f,\ -x\in D_f\\\forall x\in D_f,\ f(-x)=-f(x)\end{gathered}" />
            </Box>
          </div>
          <Callout variant="success" title="Domaine d'étude">
            <p>
              Si <Math tex="D_f=I\cup I'" /> avec <Math tex="I,I'" /> symétriques par rapport à{" "}
              <Math tex="0" />, et si <Math tex="f" /> est paire ou impaire, il suffit d&apos;étudier{" "}
              <Math tex="f" /> sur <Math tex="D_E=D_f\cap\mathbb R_+" /> (le{" "}
              <strong>domaine d&apos;étude</strong>) : si <Math tex="f" /> est paire, les variations sur{" "}
              <Math tex="I'" /> sont <strong>opposées</strong> à celles sur <Math tex="I" /> ; si{" "}
              <Math tex="f" /> est impaire, elles sont les <strong>mêmes</strong>.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Monotonie et extremums absolus">
          <Box title="Monotonie sur un intervalle I" tone="def">
            <MathBlock tex="\begin{gathered}f\text{ croissante sur }I\iff\big(\forall x,x'\in I,\ x<x'\Rightarrow f(x)\le f(x')\big)\\f\text{ décroissante sur }I\iff\big(\forall x,x'\in I,\ x<x'\Rightarrow f(x)\ge f(x')\big)\end{gathered}" />
          </Box>
          <Box title="Extremum absolu en x₀" tone="prop">
            <p>
              <Math tex="f(x_0)" /> est un <strong>maximum absolu</strong> ssi{" "}
              <Math tex="\forall x\in D_f,\ f(x)\le f(x_0)" /> — et de même pour un minimum absolu avec{" "}
              <Math tex="\ge" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. TAUX, PÉRIODICITÉ ===================== */}
      <LessonSection
        id="cours-taux"
        kicker="02 · Trois outils nouveaux"
        title="Extremum relatif, taux d'accroissement, fonction périodique"
        tone="muted"
        description="Le taux d'accroissement donne un critère de monotonie extrêmement pratique — il reviendra constamment en dérivation."
      >
        <CourseBlock numeral="III" title="Extremum relatif">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="f(x_0)" /> est un <strong className="text-foreground">maximum relatif</strong> de{" "}
              <Math tex="f" /> s&apos;il existe un intervalle ouvert <Math tex="I_{x_0}\subset D_f" /> centré en{" "}
              <Math tex="x_0" /> tel que <Math tex="\forall x\in I_{x_0},\ f(x)\le f(x_0)" /> (et de même pour un
              minimum relatif, avec <Math tex="\ge" />).
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Taux d'accroissement">
          <Box title="Définition" tone="def">
            <p>
              Pour <Math tex="x\neq x'" /> dans <Math tex="I" />, le{" "}
              <strong className="text-foreground">taux d&apos;accroissement</strong> de <Math tex="f" /> entre{" "}
              <Math tex="x" /> et <Math tex="x'" /> est :
            </p>
            <MathBlock tex="T_f(x,x')=\dfrac{f(x)-f(x')}{x-x'}" />
          </Box>
          <Callout variant="success" title="Le critère de monotonie par le taux d'accroissement">
            <div className="space-y-1">
              <p>
                <Math tex="T_f\ge0" /> sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f" /> croissante sur{" "}
                <Math tex="I" /> (<Math tex="T_f>0\iff" /> strictement croissante).
              </p>
              <p>
                <Math tex="T_f\le0" /> sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f" /> décroissante sur{" "}
                <Math tex="I" /> (<Math tex="T_f<0\iff" /> strictement décroissante).
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Fonction périodique">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="f" /> est périodique de période <Math tex="T>0" /> sur <Math tex="D_f" /> ssi :
            </p>
            <MathBlock tex="\begin{gathered}(\forall x\in D_f)\ x+T\in D_f\ \text{et}\ x-T\in D_f\\(\forall x\in D_f)\ f(x+T)=f(x)\end{gathered}" />
            <p>
              (<Math tex="T" /> est le <strong>plus petit</strong> réel strictement positif vérifiant cette
              égalité.)
            </p>
          </Box>
          <Callout variant="warning" title="Construire la courbe">
            Une fois <Math tex="C_0" /> tracée sur un intervalle de longueur <Math tex="T" />, toute la courbe
            s&apos;obtient par translations de vecteurs <Math tex="kT\vec\imath" /> (<Math tex="k\in\mathbb Z" />
            ). Exemples classiques : <Math tex="\sin,\cos" /> ont pour période <Math tex="2\pi" />,{" "}
            <Math tex="\tan" /> a pour période <Math tex="\pi" />.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. BORNES ===================== */}
      <LessonSection
        id="cours-bornes"
        kicker="03 · Encadrer une fonction"
        title="Fonction majorée, minorée, bornée"
        tone="light"
        description="Trois définitions simples, mais qui reviendront dans presque tous les chapitres futurs (limites, suites...)."
      >
        <CourseBlock numeral="VI" title="Définitions">
          <Box title="Sur un intervalle I" tone="def">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="f" /> <strong className="text-foreground">majorée</strong> par <Math tex="M" /> sur{" "}
                <Math tex="I" /> : <Math tex="\forall x\in I,\ f(x)\le M" />.
              </li>
              <li>
                <Math tex="f" /> <strong className="text-foreground">minorée</strong> par <Math tex="m" /> sur{" "}
                <Math tex="I" /> : <Math tex="\forall x\in I,\ m\le f(x)" />.
              </li>
              <li>
                <Math tex="f" /> <strong className="text-foreground">bornée</strong> sur <Math tex="I" /> :
                majorée <strong>et</strong> minorée.
              </li>
            </ul>
          </Box>
          <Callout variant="success" title="Formulation équivalente avec la valeur absolue">
            <MathBlock tex="f\ \text{bornée sur}\ I\iff \exists A\in\mathbb R_+,\ \forall x\in I,\ |f(x)|\le A" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. COMPOSÉE ===================== */}
      <LessonSection
        id="cours-composee"
        kicker="04 · Comparer, combiner, composer"
        title="Comparaison, composée, et leurs monotonies"
        tone="muted"
        description="La règle « même sens ⇒ croissante, sens opposés ⇒ décroissante » pour g∘f est l'un des outils les plus utilisés de l'année."
      >
        <CourseBlock numeral="VII" title="Comparer deux fonctions">
          <Box title="Définitions" tone="def">
            <p>
              Pour <Math tex="f,g" /> définies sur <Math tex="I" /> :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="f\le g" /> sur <Math tex="I" /> : <Math tex="\forall x\in I,\ f(x)\le g(x)" /> (
                <Math tex="C_f" /> en dessous de <Math tex="C_g" />).
              </li>
              <li>
                <Math tex="f>g" /> sur <Math tex="I" /> : <Math tex="\forall x\in I,\ f(x)>g(x)" /> (
                <Math tex="C_f" /> strictement au-dessus de <Math tex="C_g" />).
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Composée de deux fonctions">
          <Box title="Définition" tone="def">
            <p>
              Pour <Math tex="f" /> et <Math tex="g" /> avec <Math tex="f(D_f)\subset D_g" />, la composée{" "}
              <Math tex="g\circ f" /> est définie sur <Math tex="D_{g\circ f}=\{x\in D_f\ /\ f(x)\in D_g\}" /> par :
            </p>
            <MathBlock tex="(g\circ f)(x)=g\big(f(x)\big)" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Monotonie de f+c, c·f, g∘f">
          <Callout variant="success" title="Trois règles à retenir">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="f" /> et <Math tex="f+c" /> (<Math tex="c\in\mathbb R" />) ont{" "}
                <strong>toujours le même sens</strong> de variation sur <Math tex="I" />.
              </li>
              <li>
                Si <Math tex="c>0" />, <Math tex="f" /> et <Math tex="c\cdot f" /> ont le{" "}
                <strong>même sens</strong> ; si <Math tex="c<0" />, elles ont des{" "}
                <strong>sens opposés</strong>.
              </li>
              <li>
                Si <Math tex="f" /> et <Math tex="g" /> ont <strong>même monotonie</strong> (avec{" "}
                <Math tex="f(D_f)\subset D_g" />), <Math tex="g\circ f" /> est{" "}
                <strong>croissante</strong>. Si leurs monotonies sont <strong>opposées</strong>,{" "}
                <Math tex="g\circ f" /> est <strong>décroissante</strong>.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== V. FONCTIONS DE RÉFÉRENCE ===================== */}
      <LessonSection
        id="cours-reference"
        kicker="05 · Trois modèles à connaître par cœur"
        title="Trinôme, fonction homographique, partie entière"
        tone="light"
        description="Ces trois familles reviendront sans cesse — leurs éléments caractéristiques doivent être automatiques."
      >
        <CourseBlock numeral="X" title="Trinôme f(x) = ax² + bx + c">
          <Box title="Forme canonique et sommet" tone="def">
            <MathBlock tex="f(x)=a\left(x+\dfrac{b}{2a}\right)^2+f\!\left(-\dfrac{b}{2a}\right)" />
            <p>
              La courbe est une <strong>parabole</strong> de sommet{" "}
              <Math tex="S\!\left(-\dfrac{b}{2a},f\!\left(-\dfrac b{2a}\right)\right)" />, d&apos;axe de
              symétrie <Math tex="x=-\dfrac b{2a}" />.
            </p>
          </Box>
          <Callout variant="success" title="Le sens de la parabole">
            <p>
              Si <Math tex="a>0" /> : parabole orientée vers le haut, <Math tex="f\!\left(-\dfrac b{2a}\right)" />{" "}
              est le <strong>minimum absolu</strong>. Si <Math tex="a<0" /> : orientée vers le bas,{" "}
              <strong>maximum absolu</strong>.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="XI" title="Fonction homographique">
          <Box title="Éléments caractéristiques" tone="def">
            <p>
              Pour <Math tex="f(x)=\dfrac{ax+b}{cx+d}" /> (<Math tex="c\neq0" />), on pose{" "}
              <Math tex="\Delta=ad-bc" />. La courbe est une <strong>hyperbole</strong> :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                centre de symétrie <Math tex="\Omega\!\left(-\dfrac dc,\dfrac ac\right)" />,
              </li>
              <li>
                asymptote verticale <Math tex="x=-\dfrac dc" />, asymptote horizontale{" "}
                <Math tex="y=\dfrac ac" />,
              </li>
              <li>
                <Math tex="\Delta>0\Rightarrow f" /> strictement croissante sur chaque intervalle de{" "}
                <Math tex="D_f" /> ; <Math tex="\Delta<0\Rightarrow f" /> strictement décroissante.
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="XII" title="Fonction partie entière">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="E(x)" /> (ou <Math tex="[x]" />) est l&apos;unique entier <Math tex="p" /> tel que{" "}
              <Math tex="p\le x<p+1" />.
            </p>
          </Box>
          <Callout variant="success" title="Propriétés à retenir">
            <div className="space-y-1">
              <p>
                <Math tex="E(x)\le x<E(x)+1" />
              </p>
              <p>
                <Math tex="x-1<E(x)\le x" />
              </p>
              <p>
                <Math tex="\forall k\in\mathbb Z,\ E(x+k)=E(x)+k" />
              </p>
              <p>
                <Math tex="x\in\mathbb Z\iff E(x)=x" />
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="06 · À toi de jouer"
        title="Exercices · Généralités sur les fonctions"
        tone="muted"
        description="6 exercices corrigés au niveau Sciences Math : taux d'accroissement, extremum, inégalité par AM-GM, fonction homographique, fonction minorée, monotonie de g∘f, et partie entière."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre généralités sur les fonctions est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Taux d'accroissement et extremum"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="m>0" /> et <Math tex="f_m" /> définie sur <Math tex="\mathbb R_+^*" /> par{" "}
                <Math tex="f_m(x)=x+\dfrac mx" />. <Math tex="f_m" /> est-elle impaire ? Calculer{" "}
                <Math tex="T_{f_m}(x,y)" />, étudier ses variations sur <Math tex="]0,\sqrt m[" /> et{" "}
                <Math tex="]\sqrt m,+\infty[" />, et en déduire son extremum.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D_{f_m}=\mathbb R_+^*" /> n&apos;est <strong>pas symétrique</strong> par rapport à{" "}
                  <Math tex="0" /> (par exemple <Math tex="1\in D_{f_m}" /> mais <Math tex="-1\notin D_{f_m}" />
                  ).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f_m" /> n&apos;est ni paire ni impaire.
                </p>
                <p>Pour <Math tex="x\neq y" /> dans <Math tex="\mathbb R_+^*" /> :</p>
                <MathBlock tex="T_{f_m}(x,y)=\dfrac{\left(x+\frac mx\right)-\left(y+\frac my\right)}{x-y}=1+\dfrac{m\left(\frac1x-\frac1y\right)}{x-y}=1-\dfrac{m}{xy}" />
                <p>
                  Si <Math tex="x,y\in]\sqrt m,+\infty[" />, alors <Math tex="xy>m" /> donc{" "}
                  <Math tex="T_{f_m}>0" /> : <Math tex="f_m" /> strictement croissante sur{" "}
                  <Math tex="]\sqrt m,+\infty[" />. Si <Math tex="x,y\in]0,\sqrt m[" />, alors{" "}
                  <Math tex="xy<m" /> donc <Math tex="T_{f_m}<0" /> : <Math tex="f_m" /> strictement
                  décroissante sur <Math tex="]0,\sqrt m[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f_m" /> décroît puis croît : elle admet un{" "}
                  <strong>minimum absolu</strong> en <Math tex="x=\sqrt m" />, valant{" "}
                  <Math tex="f_m(\sqrt m)=2\sqrt m" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Inégalité par la technique AM-GM"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="a,b,c\in\mathbb R_+^*" />. Montrer que{" "}
                <Math tex="\dfrac{a^2}b+\dfrac{b^2}c+\dfrac{c^2}a\ge a+b+c" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;après l&apos;exercice précédent (avec <Math tex="x=\dfrac ab" />, ce qui donne{" "}
                  <Math tex="x+\dfrac1x\ge2" />, soit <Math tex="\dfrac{a^2}{b^2}+1\ge\dfrac{2a}b" />, donc en
                  multipliant par <Math tex="b>0" />) :
                </p>
                <MathBlock tex="\dfrac{a^2}b+b-2a=\dfrac{(a-b)^2}{b}\ge0\ \Longrightarrow\ \dfrac{a^2}b\ge2a-b" />
                <p>
                  De même : <Math tex="\dfrac{b^2}c\ge2b-c" /> et <Math tex="\dfrac{c^2}a\ge2c-a" />.
                </p>
                <p>En sommant les trois inégalités :</p>
                <MathBlock tex="\dfrac{a^2}b+\dfrac{b^2}c+\dfrac{c^2}a\ge(2a-b)+(2b-c)+(2c-a)=a+b+c" />
                <p className="font-semibold text-green-700">
                  D&apos;où le résultat, avec égalité si et seulement si <Math tex="a=b=c" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Fonction homographique"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{2x-1}{x-1}" />. Déterminer les éléments caractéristiques de la
                courbe de <Math tex="f" /> (centre de symétrie, asymptotes) et son sens de variation.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D_f=\mathbb R\setminus\{1\}" />. Avec <Math tex="a=2,b=-1,c=1,d=-1" /> :{" "}
                  <Math tex="\Delta=ad-bc=(2)(-1)-(-1)(1)=-1<0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f" /> est strictement <strong>décroissante</strong> sur{" "}
                  <Math tex="]-\infty,1[" /> et sur <Math tex="]1,+\infty[" />.
                </p>
                <p>
                  Centre de symétrie : <Math tex="\Omega\!\left(-\dfrac dc,\dfrac ac\right)=\Omega(1,2)" />.
                  Asymptote verticale : <Math tex="x=1" />. Asymptote horizontale : <Math tex="y=2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Fonction minorée"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x+4-2\sqrt{x+2}" />. Déterminer <Math tex="D_f" />, montrer que{" "}
                <Math tex="f" /> est minorée par <Math tex="1" />, puis résoudre <Math tex="f(x)=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D_f=[-2,+\infty[" /> (il faut <Math tex="x+2\ge0" />).
                </p>
                <p>
                  Posons <Math tex="t=\sqrt{x+2}\ge0" />, donc <Math tex="x=t^2-2" /> :
                </p>
                <MathBlock tex="f(x)=(t^2-2)+4-2t=t^2-2t+2=(t-1)^2+1" />
                <p className="font-semibold text-green-700">
                  Comme <Math tex="(t-1)^2\ge0" />, on a <Math tex="f(x)\ge1" /> pour tout{" "}
                  <Math tex="x\in D_f" /> : <Math tex="f" /> est minorée par <Math tex="1" />.
                </p>
                <p>
                  <Math tex="f(x)=1\iff(t-1)^2=0\iff t=1\iff\sqrt{x+2}=1\iff x+2=1\iff x=-1" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;unique solution est <Math tex="x=-1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Monotonie d'une composée g∘f"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="f(x)=|x|+5" /> et <Math tex="g(x)=x^2" />. Étudier la monotonie de{" "}
                <Math tex="g\circ f" /> sur <Math tex="\mathbb R_-" /> puis sur <Math tex="\mathbb R_+" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f" /> est décroissante sur <Math tex="\mathbb R_-" /> et croissante sur{" "}
                  <Math tex="\mathbb R_+" />, à valeurs dans <Math tex="[5,+\infty[" />.
                </p>
                <p>
                  Sur <Math tex="[5,+\infty[" />, <Math tex="g" /> est strictement croissante (car{" "}
                  <Math tex="g'(x)=2x>0" /> pour <Math tex="x>0" />, ou directement :{" "}
                  <Math tex="5\le u<v\Rightarrow u^2<v^2" />).
                </p>
                <p className="font-semibold text-green-700">
                  Sur <Math tex="\mathbb R_-" /> : <Math tex="f" /> décroissante et <Math tex="g" /> croissante
                  — sens opposés — donc <Math tex="g\circ f" /> est <strong>décroissante</strong> sur{" "}
                  <Math tex="\mathbb R_-" />.
                </p>
                <p className="font-semibold text-green-700">
                  Sur <Math tex="\mathbb R_+" /> : <Math tex="f" /> et <Math tex="g" /> croissantes — même sens
                  — donc <Math tex="g\circ f" /> est <strong>croissante</strong> sur <Math tex="\mathbb R_+" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Fonction partie entière"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=2x-E(x)" />. Pour <Math tex="k\in\mathbb Z" /> et{" "}
                <Math tex="x\in I_k=[k,k+1[" />, exprimer <Math tex="f(x)" /> en fonction de <Math tex="x" />{" "}
                et <Math tex="k" />, puis donner les valeurs prises par <Math tex="f" /> aux bornes de{" "}
                <Math tex="I_k" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x\in[k,k+1[" />, on a <Math tex="E(x)=k" /> par définition. Donc :
                </p>
                <MathBlock tex="f(x)=2x-k" />
                <p className="font-semibold text-green-700">
                  Au point <Math tex="x=k" /> : <Math tex="f(k)=2k-k=k" />. Quand <Math tex="x" /> tend vers{" "}
                  <Math tex="(k+1)^-" /> : <Math tex="f(x)\to2(k+1)-k=k+2" /> (valeur non atteinte). Sur
                  chaque intervalle <Math tex="I_k" />, <Math tex="f" /> est donc affine, strictement
                  croissante (pente <Math tex="2" />), allant de <Math tex="k" /> jusqu&apos;à{" "}
                  <Math tex="k+2" /> exclu — avec un saut vers le bas de <Math tex="2" /> à chaque entier.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
