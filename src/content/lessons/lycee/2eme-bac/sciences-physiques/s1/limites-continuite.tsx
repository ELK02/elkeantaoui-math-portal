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
  title: "Limites et Continuité · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet de continuité pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : continuité en un point et sur un intervalle, théorème des valeurs intermédiaires, fonction réciproque, racine n-ième et puissance rationnelle, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 1",
  heroTitle: "Limites et Continuité",
  heroSubtitle:
    "La continuité formalise l'idée d'une courbe « sans saut » : elle permet de démontrer l'existence de solutions, de construire des fonctions réciproques, et d'étendre la notion de puissance à tous les exposants rationnels.",
  footerNote: "Limites et Continuité · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 1.",
  sections: [
    { id: "cours-continuite", label: "Continuité" },
    { id: "cours-tvi", label: "TVI" },
    { id: "cours-reciproque", label: "Fonction réciproque" },
    { id: "cours-racines", label: "Racine n-ième" },
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
          { value: "6", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-continuite"
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
            <Math tex="\lim" />
          </div>
        }
      />

      {/* ===================== I. CONTINUITÉ ===================== */}
      <LessonSection
        id="cours-continuite"
        kicker="01 · Le prolongement naturel de la limite"
        title="Continuité en un point et sur un intervalle"
        tone="light"
        description="Une fonction est continue en un point lorsque sa limite en ce point existe et coïncide avec sa valeur : la courbe ne « saute » pas."
      >
        <CourseBlock numeral="I" title="Continuité en un point">
          <Box title="Définition" tone="def">
            Soit <Math tex="f" /> une fonction définie sur un intervalle ouvert contenant <Math tex="x_0" />. On dit
            que <Math tex="f" /> est <strong className="text-foreground">continue en <Math tex="x_0" /></strong> si{" "}
            <Math tex="\displaystyle\lim_{x\to x_0} f(x) = f(x_0)" />.
          </Box>
          <Box title="Continuité à droite / à gauche" tone="def">
            <Math tex="f" /> est <strong>continue à droite</strong> de <Math tex="x_0" /> si{" "}
            <Math tex="\displaystyle\lim_{x\to x_0^{+}} f(x) = f(x_0)" />. <Math tex="f" /> est{" "}
            <strong>continue à gauche</strong> de <Math tex="x_0" /> si{" "}
            <Math tex="\displaystyle\lim_{x\to x_0^{-}} f(x) = f(x_0)" />.
          </Box>
          <Callout variant="success" title="Propriété à connaître par cœur">
            <Math tex="f" /> est continue en <Math tex="x_0" /> si, et seulement si,{" "}
            <Math tex="f" /> est continue à droite et à gauche de <Math tex="x_0" />, c&apos;est-à-dire :
            <div className="mt-2">
              <Math tex="\displaystyle\lim_{x\to x_0^{-}} f(x) = \lim_{x\to x_0^{+}} f(x) = f(x_0)" />.
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Continuité sur un intervalle">
          <Box title="Définitions" tone="def">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="f" /> est continue sur un intervalle ouvert <Math tex="I" /> si <Math tex="f" /> est
                continue en tout point de <Math tex="I" />.
              </li>
              <li>
                <Math tex="f" /> est continue sur <Math tex="[a,b]" /> si <Math tex="f" /> est continue sur{" "}
                <Math tex="]a,b[" />, continue à droite de <Math tex="a" /> et continue à gauche de{" "}
                <Math tex="b" />.
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="Opérations et fonctions usuelles">
          <Callout variant="success" title="Opérations sur les fonctions continues">
            Si <Math tex="f" /> et <Math tex="g" /> sont continues sur <Math tex="I" />, alors <Math tex="f+g" />,{" "}
            <Math tex="f\times g" />, <Math tex="\lambda f" /> (<Math tex="\lambda\in\mathbb R" />) sont continues sur{" "}
            <Math tex="I" />, et <Math tex="\dfrac{f}{g}" /> est continue en tout point de <Math tex="I" /> où{" "}
            <Math tex="g" /> ne s&apos;annule pas.
          </Callout>
          <Box title="Fonctions usuelles continues" tone="prop">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Toute fonction polynomiale est continue sur <Math tex="\mathbb R" />.</li>
              <li>Toute fonction rationnelle est continue sur son domaine de définition.</li>
              <li>
                Les fonctions <Math tex="x\mapsto\sin x" /> et <Math tex="x\mapsto\cos x" /> sont continues sur{" "}
                <Math tex="\mathbb R" /> ; <Math tex="x\mapsto\tan x" /> est continue sur son domaine.
              </li>
              <li>
                La fonction <Math tex="x\mapsto\sqrt x" /> est continue sur <Math tex="[0,+\infty[" />.
              </li>
            </ul>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. TVI ===================== */}
      <LessonSection
        id="cours-tvi"
        kicker="02 · De l'image d'un intervalle au TVI"
        title="Image d'un intervalle et théorème des valeurs intermédiaires"
        tone="muted"
        description="La continuité transforme un intervalle en intervalle — d'où le théorème le plus utile du chapitre pour prouver l'existence de solutions."
      >
        <CourseBlock numeral="IV" title="Image d'un intervalle par une fonction continue">
          <Box title="Propriété" tone="prop">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                L&apos;image d&apos;un segment <Math tex="[a,b]" /> par une fonction continue <Math tex="f" /> est
                un segment <Math tex="[m,M]" /> ( <Math tex="f" /> est bornée sur <Math tex="[a,b]" /> et atteint
                ses bornes <Math tex="m" /> et <Math tex="M" /> ).
              </li>
              <li>
                Plus généralement, l&apos;image d&apos;un intervalle <Math tex="I" /> par une fonction continue est
                un intervalle <Math tex="J=f(I)" />.
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Continuité de la composée">
          <Box title="Théorème" tone="prop">
            Si <Math tex="f" /> est continue en <Math tex="x_0" /> et <Math tex="g" /> est continue en{" "}
            <Math tex="f(x_0)" />, alors <Math tex="g\circ f" /> est continue en <Math tex="x_0" />. Si{" "}
            <Math tex="f" /> est continue sur <Math tex="I" /> et <Math tex="g" /> est continue sur{" "}
            <Math tex="f(I)" />, alors <Math tex="g\circ f" /> est continue sur <Math tex="I" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Théorème des valeurs intermédiaires (TVI)">
          <Box title="Théorème" tone="prop">
            Soit <Math tex="f" /> une fonction continue sur <Math tex="[a,b]" />. Pour tout réel <Math tex="k" />{" "}
            compris entre <Math tex="f(a)" /> et <Math tex="f(b)" />, il existe (au moins) un réel{" "}
            <Math tex="c\in[a,b]" /> tel que <Math tex="f(c)=k" />.
          </Box>
          <Callout variant="warning" title="Corollaire — équation f(x) = 0">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="f" /> est continue sur <Math tex="[a,b]" /> et <Math tex="f(a)\cdot f(b)<0" />, alors
                l&apos;équation <Math tex="f(x)=0" /> admet au moins une solution <Math tex="c" /> dans{" "}
                <Math tex="]a,b[" />.
              </li>
              <li>
                Si de plus <Math tex="f" /> est strictement monotone sur <Math tex="[a,b]" />, cette solution{" "}
                <Math tex="c" /> est <strong>unique</strong>.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. FONCTION RÉCIPROQUE ===================== */}
      <LessonSection
        id="cours-reciproque"
        kicker="03 · Bijections et fonction réciproque"
        title="Fonction réciproque d'une fonction continue et monotone"
        tone="light"
        description="Une fonction continue et strictement monotone réalise une bijection : elle admet une fonction réciproque, avec des propriétés remarquables."
      >
        <CourseBlock numeral="VII" title="Théorème et propriétés de la réciproque">
          <Box title="Théorème" tone="prop">
            Soit <Math tex="f" /> une fonction continue et strictement monotone sur un intervalle <Math tex="I" />,
            et <Math tex="J=f(I)" />. Alors <Math tex="f" /> réalise une bijection de <Math tex="I" /> sur{" "}
            <Math tex="J" />, et sa <strong>fonction réciproque</strong> <Math tex="f^{-1}:J\to I" /> vérifie :
          </Box>
          <MathBlock tex="\forall x\in I,\ f^{-1}\big(f(x)\big)=x \qquad \text{et} \qquad \forall y\in J,\ f\big(f^{-1}(y)\big)=y" />
          <Callout variant="success" title="Propriétés de f⁻¹">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="f^{-1}" /> est continue sur <Math tex="J" />.
              </li>
              <li>
                <Math tex="f^{-1}" /> varie dans le même sens que <Math tex="f" /> (même monotonie).
              </li>
              <li>
                Les courbes de <Math tex="f" /> et de <Math tex="f^{-1}" /> sont symétriques par rapport à la
                droite d&apos;équation <Math tex="y=x" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. RACINE N-IÈME ET PUISSANCE RATIONNELLE ===================== */}
      <LessonSection
        id="cours-racines"
        kicker="04 · Étendre la notion de puissance"
        title="Fonction racine n-ième et puissance rationnelle"
        tone="muted"
        description="En appliquant le théorème de la réciproque à x ↦ xⁿ, on construit la racine n-ième, puis toute puissance d'exposant rationnel."
      >
        <CourseBlock numeral="VIII" title="Fonction racine n-ième">
          <Box title="Définition" tone="def">
            Pour <Math tex="n\in\mathbb N^*" />, la fonction <Math tex="x\mapsto x^n" /> est continue et
            strictement croissante sur <Math tex="[0,+\infty[" />. Sa fonction réciproque, notée{" "}
            <Math tex="x\mapsto\sqrt[n]{x}=x^{\frac1n}" />, est appelée <strong>fonction racine n-ième</strong> ;
            elle est continue et strictement croissante sur <Math tex="[0,+\infty[" />.
          </Box>
          <Callout variant="success" title="Propriétés (a, b ≥ 0)">
            <div className="space-y-1.5">
              <p>
                <Math tex="\sqrt[n]{a}\cdot\sqrt[n]{b}=\sqrt[n]{ab}" /> ;{" "}
                <Math tex="\dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}=\sqrt[n]{\dfrac{a}{b}}\ \ (b\neq0)" />.
              </p>
              <p>
                <Math tex="\left(\sqrt[n]{a}\right)^m=\sqrt[n]{a^m}" /> ;{" "}
                <Math tex="\sqrt[p]{\sqrt[n]{a}}=\sqrt[pn]{a}" />.
              </p>
              <p>
                Si <Math tex="\lim_{x\to x_0} f(x)=l\geq0" /> alors{" "}
                <Math tex="\lim_{x\to x_0}\sqrt[n]{f(x)}=\sqrt[n]{l}" /> ; si{" "}
                <Math tex="\lim_{x\to x_0} f(x)=+\infty" /> alors <Math tex="\lim_{x\to x_0}\sqrt[n]{f(x)}=+\infty" />.
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Puissance rationnelle d'un réel positif">
          <Box title="Définition" tone="def">
            Pour <Math tex="x>0" /> et un rationnel <Math tex="r=\dfrac{p}{q}" /> (<Math tex="p\in\mathbb Z" />,{" "}
            <Math tex="q\in\mathbb N^*" />), on pose :
          </Box>
          <MathBlock tex="x^{r}=\sqrt[q]{x^{p}}=\left(\sqrt[q]{x}\right)^{p}" />
          <Callout variant="success" title="Propriétés (x, y > 0 ; r, s ∈ ℚ)">
            <div className="space-y-1.5">
              <p>
                <Math tex="x^{r}\cdot x^{s}=x^{r+s}" /> ; <Math tex="\left(x^{r}\right)^{s}=x^{rs}" />.
              </p>
              <p>
                <Math tex="(xy)^{r}=x^{r}y^{r}" /> ; <Math tex="x^{-r}=\dfrac{1}{x^{r}}" /> ; <Math tex="x^0=1" />.
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Limites et Continuité"
        tone="light"
        description="11 exercices corrigés : continuité en un point, TVI, équations, fonctions réciproques, limites avec racines et puissances rationnelles."
      >
        <ExerciseGroup
          total={11}
          celebrationTitle="Bravo, les 11 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre limites et continuité est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Continuité en un point (quotient de racines)"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f" /> définie par <Math tex="f(x)=\dfrac{\sqrt{x+2}-\sqrt2}{x}" /> si{" "}
                <Math tex="x\neq0" />, et <Math tex="f(0)=\dfrac{\sqrt2}{4}" />. Montrer que <Math tex="f" /> est
                continue en <Math tex="x_0=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En multipliant par la quantité conjuguée <Math tex="\sqrt{x+2}+\sqrt2" /> :
                </p>
                <p>
                  <Math tex="f(x)=\dfrac{(x+2)-2}{x\left(\sqrt{x+2}+\sqrt2\right)}=\dfrac{x}{x\left(\sqrt{x+2}+\sqrt2\right)}=\dfrac{1}{\sqrt{x+2}+\sqrt2}" />{" "}
                  pour <Math tex="x\neq0" />.
                </p>
                <p>
                  Donc <Math tex="\displaystyle\lim_{x\to0} f(x)=\dfrac{1}{\sqrt2+\sqrt2}=\dfrac{1}{2\sqrt2}=\dfrac{\sqrt2}{4}=f(0)" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  La limite en <Math tex="0" /> est égale à <Math tex="f(0)" /> : <Math tex="f" /> est continue en{" "}
                  <Math tex="0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Continuité et paramètre"
            itemsLabel="1 recherche"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f" /> définie par <Math tex="f(x)=ax+3" /> si <Math tex="x\leq2" />, et{" "}
                <Math tex="f(x)=x^2+1" /> si <Math tex="x>2" />. Déterminer <Math tex="a" /> pour que{" "}
                <Math tex="f" /> soit continue en <Math tex="x_0=2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On a <Math tex="f(2)=2a+3" /> et <Math tex="\displaystyle\lim_{x\to2^{+}} f(x)=2^2+1=5" />.
                </p>
                <p>
                  <Math tex="f" /> est continue en <Math tex="2" /> ssi <Math tex="2a+3=5" />, soit{" "}
                  <Math tex="a=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="a=1" /> rend <Math tex="f" /> continue en <Math tex="2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Continuité (différence de racines)"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f" /> définie sur <Math tex="]-1,0[\cup]0,1[" /> par{" "}
                <Math tex="f(x)=\dfrac{\sqrt{1+x}-\sqrt{1-x}}{x}" />, et <Math tex="f(0)=1" />. Montrer que{" "}
                <Math tex="f" /> est continue en <Math tex="0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En multipliant par le conjugué <Math tex="\sqrt{1+x}+\sqrt{1-x}" /> :
                </p>
                <p>
                  <Math tex="f(x)=\dfrac{(1+x)-(1-x)}{x\left(\sqrt{1+x}+\sqrt{1-x}\right)}=\dfrac{2x}{x\left(\sqrt{1+x}+\sqrt{1-x}\right)}=\dfrac{2}{\sqrt{1+x}+\sqrt{1-x}}" />
                  .
                </p>
                <p>
                  Donc <Math tex="\displaystyle\lim_{x\to0} f(x)=\dfrac{2}{1+1}=1=f(0)" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est donc continue en <Math tex="0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · TVI et encadrement d'une solution"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="g(x)=x^3+3x-1" />. Montrer que l&apos;équation <Math tex="g(x)=0" /> admet une
                unique solution <Math tex="\alpha" /> dans <Math tex="]0,1[" />, puis donner un encadrement
                d&apos;amplitude <Math tex="0{,}125" /> de <Math tex="\alpha" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="g" /> est continue sur <Math tex="\mathbb R" /> (fonction polynomiale) et{" "}
                  <Math tex="g'(x)=3x^2+3>0" />, donc <Math tex="g" /> est strictement croissante sur{" "}
                  <Math tex="\mathbb R" />.
                </p>
                <p>
                  <Math tex="g(0)=-1<0" /> et <Math tex="g(1)=1+3-1=3>0" />, donc <Math tex="g(0)\cdot g(1)<0" />.
                  D&apos;après le corollaire du TVI, l&apos;équation <Math tex="g(x)=0" /> admet une unique
                  solution <Math tex="\alpha\in]0,1[" /> (unicité car <Math tex="g" /> est strictement monotone).
                </p>
                <p>
                  <Math tex="g(0{,}5)=0{,}125+1{,}5-1=0{,}625>0" /> donc <Math tex="\alpha\in]0,0{,}5[" />.
                </p>
                <p>
                  <Math tex="g(0{,}25)=0{,}015625+0{,}75-1=-0{,}234375<0" /> donc{" "}
                  <Math tex="\alpha\in]0{,}25\,;0{,}5[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="g(0{,}375)=0{,}052734\ldots+1{,}125-1>0" /> donc <Math tex="\alpha\in]0{,}25\,;0{,}375[" />
                  , un encadrement d&apos;amplitude <Math tex="0{,}125" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Corollaire du TVI"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que l&apos;équation <Math tex="\cos x=x" /> admet une unique solution dans{" "}
                <Math tex="\left[0,\dfrac{\pi}{2}\right]" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="g(x)=\cos x-x" />, continue sur <Math tex="\left[0,\frac{\pi}{2}\right]" />{" "}
                  comme somme de fonctions continues.
                </p>
                <p>
                  <Math tex="g(0)=1>0" /> et <Math tex="g\!\left(\dfrac{\pi}{2}\right)=-\dfrac{\pi}{2}<0" />, donc{" "}
                  <Math tex="g(0)\cdot g\!\left(\frac{\pi}{2}\right)<0" />.
                </p>
                <p>
                  De plus <Math tex="g'(x)=-\sin x-1\leq-1<0" /> sur cet intervalle : <Math tex="g" /> est
                  strictement décroissante.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;après le corollaire du TVI, l&apos;équation <Math tex="g(x)=0" />, c&apos;est-à-dire{" "}
                  <Math tex="\cos x=x" />, admet une unique solution dans <Math tex="\left[0,\frac{\pi}{2}\right]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Fonction réciproque (avec racine carrée)"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x+\sqrt{x^2+1}" /> définie sur <Math tex="\mathbb R" />. Montrer que{" "}
                <Math tex="f" /> réalise une bijection de <Math tex="\mathbb R" /> sur un intervalle{" "}
                <Math tex="J" /> à préciser, puis déterminer <Math tex="f^{-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=1+\dfrac{x}{\sqrt{x^2+1}}=\dfrac{\sqrt{x^2+1}+x}{\sqrt{x^2+1}}" />. Comme{" "}
                  <Math tex="\sqrt{x^2+1}>|x|\geq-x" />, on a <Math tex="\sqrt{x^2+1}+x>0" />, donc{" "}
                  <Math tex="f'(x)>0" /> : <Math tex="f" /> est strictement croissante sur <Math tex="\mathbb R" />.
                </p>
                <p>
                  En écrivant <Math tex="f(x)=\dfrac{1}{\sqrt{x^2+1}-x}" /> (conjugué), on obtient{" "}
                  <Math tex="\displaystyle\lim_{x\to-\infty} f(x)=0" /> et <Math tex="\displaystyle\lim_{x\to+\infty} f(x)=+\infty" />
                  . Donc <Math tex="f" /> est continue et strictement croissante, réalisant une bijection de{" "}
                  <Math tex="\mathbb R" /> sur <Math tex="J=]0,+\infty[" />.
                </p>
                <p>
                  Pour <Math tex="y>0" />, on résout <Math tex="y=x+\sqrt{x^2+1}" />, soit{" "}
                  <Math tex="\sqrt{x^2+1}=y-x" /> (avec <Math tex="y\geq x" />) : en élevant au carré,{" "}
                  <Math tex="x^2+1=y^2-2xy+x^2" />, d&apos;où <Math tex="2xy=y^2-1" />, soit{" "}
                  <Math tex="x=\dfrac{y^2-1}{2y}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f^{-1}(x)=\dfrac{x^2-1}{2x}" /> pour tout <Math tex="x\in]0,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Fonction réciproque (fonction homographique)"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{x-1}{x+1}" /> définie sur <Math tex="I=]-1,+\infty[" />. Montrer que{" "}
                <Math tex="f" /> réalise une bijection de <Math tex="I" /> sur un intervalle <Math tex="J" /> à
                préciser, puis déterminer <Math tex="f^{-1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=\dfrac{(x+1)-(x-1)}{(x+1)^2}=\dfrac{2}{(x+1)^2}>0" /> : <Math tex="f" /> est
                  strictement croissante et continue sur <Math tex="I" />.
                </p>
                <p>
                  <Math tex="\displaystyle\lim_{x\to-1^{+}} f(x)=-\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty} f(x)=1" /> (car{" "}
                  <Math tex="f(x)=1-\dfrac{2}{x+1}" />), donc <Math tex="J=f(I)=]-\infty,1[" />.
                </p>
                <p>
                  Pour <Math tex="y<1" />, on résout <Math tex="y=\dfrac{x-1}{x+1}" /> :{" "}
                  <Math tex="y(x+1)=x-1\iff x(y-1)=-1-y\iff x=\dfrac{1+y}{1-y}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f^{-1}(x)=\dfrac{1+x}{1-x}" /> pour tout <Math tex="x\in]-\infty,1[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Limites avec conjugué à l'infini"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+x+1}-x\right)" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to-\infty}\left(\sqrt{x^2+x+1}+x\right)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En <Math tex="+\infty" /> : en multipliant par le conjugué,{" "}
                  <Math tex="\sqrt{x^2+x+1}-x=\dfrac{x+1}{\sqrt{x^2+x+1}+x}" />. En divisant par{" "}
                  <Math tex="x" /> (haut et bas) : <Math tex="\dfrac{1+\frac1x}{\sqrt{1+\frac1x+\frac1{x^2}}+1}\to\dfrac{1}{2}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+x+1}-x\right)=\dfrac12" />.
                </p>
                <p>
                  En <Math tex="-\infty" /> : de même,{" "}
                  <Math tex="\sqrt{x^2+x+1}+x=\dfrac{x+1}{\sqrt{x^2+x+1}-x}" />. En posant <Math tex="x=-t" /> avec{" "}
                  <Math tex="t\to+\infty" />, on obtient <Math tex="\dfrac{-t+1}{\sqrt{t^2-t+1}+t}\to-\dfrac12" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\displaystyle\lim_{x\to-\infty}\left(\sqrt{x^2+x+1}+x\right)=-\dfrac12" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Puissance rationnelle : simplifications"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Simplifier <Math tex="A=\dfrac{2^{\frac12}\times2^{\frac32}}{2^{-1}}" /> et{" "}
                <Math tex="B=27^{\frac23}-16^{\frac34}+32^{\frac15}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="A=2^{\frac12+\frac32-(-1)}=2^{3}=8" />.
                </p>
                <p>
                  <Math tex="27^{\frac23}=\left(\sqrt[3]{27}\right)^2=3^2=9" /> ;{" "}
                  <Math tex="16^{\frac34}=\left(\sqrt[4]{16}\right)^3=2^3=8" /> ;{" "}
                  <Math tex="32^{\frac15}=\sqrt[5]{32}=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="A=8" /> et <Math tex="B=9-8+2=3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Limite avec racine cubique"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\left(\sqrt[3]{x^3+3x^2}-x\right)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="a=\sqrt[3]{x^3+3x^2}" /> et <Math tex="b=x" />. On a{" "}
                  <Math tex="a^3-b^3=3x^2" />, et en utilisant <Math tex="a-b=\dfrac{a^3-b^3}{a^2+ab+b^2}" /> :
                </p>
                <p>
                  <Math tex="a-b=\dfrac{3x^2}{a^2+ab+b^2}" />. Or <Math tex="a=x\sqrt[3]{1+\frac3x}\sim x" />, donc{" "}
                  <Math tex="a^2\sim x^2" />, <Math tex="ab\sim x^2" /> et <Math tex="b^2=x^2" />, d&apos;où{" "}
                  <Math tex="a^2+ab+b^2\sim3x^2" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="a-b\to\dfrac{3x^2}{3x^2}=1" />, soit{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}\left(\sqrt[3]{x^3+3x^2}-x\right)=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Synthèse : continuité, TVI et réciproque"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^3+x-1" /> sur <Math tex="\mathbb R" />. Montrer que <Math tex="f" /> est
                continue et strictement croissante sur <Math tex="\mathbb R" />, que l&apos;équation{" "}
                <Math tex="f(x)=0" /> admet une unique solution <Math tex="\alpha\in]0,1[" />, puis que{" "}
                <Math tex="f" /> réalise une bijection de <Math tex="\mathbb R" /> sur <Math tex="\mathbb R" />.
                Calculer <Math tex="f^{-1}(1)" /> et <Math tex="f^{-1}(-1)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f" /> est polynomiale donc continue sur <Math tex="\mathbb R" />, et{" "}
                  <Math tex="f'(x)=3x^2+1>0" /> : <Math tex="f" /> est strictement croissante sur{" "}
                  <Math tex="\mathbb R" />.
                </p>
                <p>
                  <Math tex="f(0)=-1<0" /> et <Math tex="f(1)=1+1-1=1>0" />, donc <Math tex="f(0)\cdot f(1)<0" />.
                  D&apos;après le corollaire du TVI (avec stricte monotonie), <Math tex="f(x)=0" /> admet une
                  unique solution <Math tex="\alpha\in]0,1[" />.
                </p>
                <p>
                  Comme <Math tex="\displaystyle\lim_{x\to-\infty} f(x)=-\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty} f(x)=+\infty" />, on a{" "}
                  <Math tex="f(\mathbb R)=\mathbb R" /> : <Math tex="f" /> réalise une bijection de{" "}
                  <Math tex="\mathbb R" /> sur <Math tex="\mathbb R" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="f(1)=1" />, on a <Math tex="f^{-1}(1)=1" />. Comme <Math tex="f(0)=-1" />, on a{" "}
                  <Math tex="f^{-1}(-1)=0" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
