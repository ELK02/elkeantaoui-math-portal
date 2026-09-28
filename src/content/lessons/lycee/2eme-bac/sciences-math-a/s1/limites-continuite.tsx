import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  FormulaBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Limites et Continuité · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet et rigoureux : rappels sur les limites, opérations et théorèmes de comparaison, continuité en un point et sur un intervalle, théorème des valeurs intermédiaires, fonction réciproque d'une fonction continue et strictement monotone, fonction racine n-ième et puissance rationnelle. 11 exercices intégralement corrigés. 2ème Bac Sciences Mathématiques, semestre 1.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "Limites et Continuité",
  heroSubtitle:
    "Le socle de toute l'analyse en 2ème Bac : limites, continuité, théorème des valeurs intermédiaires, fonction réciproque et racines n-ièmes. Cours rigoureux, puis 11 exercices corrigés en détail.",
  footerNote: "Limites et Continuité · Mathématiques, 2ème Bac Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-limites", label: "Rappels sur les limites" },
    { id: "cours-continuite", label: "Continuité" },
    { id: "cours-reciproque", label: "Fonction réciproque" },
    { id: "exercices", label: "Exercices" },
  ],
};

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

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <div className="text-foreground">{children}</div>
    </div>
  );
}

function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-4 text-sm">
      <p className="mb-2 font-semibold text-foreground-muted">{title}</p>
      <div className="space-y-2 text-foreground">{children}</div>
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
          { value: "3", label: "blocs de cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#cours-limites" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <line x1="30" y1="10" x2="30" y2="190" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <path
              d="M40,150 C70,150 70,60 100,60 S130,150 160,150"
              fill="none"
              stroke="#fb923c"
              strokeWidth="2.5"
            />
            <circle cx="100" cy="60" r="3.5" fill="white" />
            <line x1="90" y1="170" x2="110" y2="170" stroke="#fb923c" strokeWidth="2" strokeDasharray="2 2" />
          </svg>
        }
      />

      {/* ===================== I. RAPPELS SUR LES LIMITES ===================== */}
      <LessonSection
        id="cours-limites"
        kicker="01 · Rappels et compléments"
        title="Limites : rappels, opérations, comparaison"
        tone="light"
        description="Les outils de calcul de limites déjà rencontrés en 1ère Bac, complétés par le théorème de la limite monotone."
      >
        <CourseBlock numeral="I" title="Limites usuelles et opérations sur les limites">
          <p className="text-sm text-foreground-muted">
            Soit <Math tex="f" /> une fonction et <Math tex="x_0\in\mathbb R" /> (ou <Math tex="x_0=\pm\infty" />).
            On admet les limites usuelles :
          </p>
          <FormulaBlock
            tex="\lim_{x\to+\infty}x^n=+\infty \quad ; \quad \lim_{x\to-\infty}x^n=\begin{cases}+\infty & \text{si } n \text{ pair}\\ -\infty & \text{si } n \text{ impair}\end{cases} \quad ; \quad \lim_{x\to\pm\infty}\dfrac1{x^n}=0"
          />
          <DefBox label="Méthode — limites en ±∞ des fonctions polynômes et rationnelles">
            À l&apos;infini, une fonction polynôme a la même limite que son <strong>terme de plus haut degré</strong>,
            et une fonction rationnelle a la même limite que le <strong>quotient des termes de plus haut degré</strong>
            du numérateur et du dénominateur.
          </DefBox>
          <Example title="Exemple résolu">
            <p>
              <Math tex="\displaystyle\lim_{x\to-\infty}\left(3x^3-5x^2+1\right)=\lim_{x\to-\infty}3x^3=-\infty" />.
            </p>
            <p>
              <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{2x^2-x}{x^2+3}=\lim_{x\to+\infty}\dfrac{2x^2}{x^2}=2" />.
            </p>
          </Example>
          <Callout variant="warning" title="Formes indéterminées">
            Quatre formes ne se calculent pas directement et exigent de transformer l&apos;écriture (factorisation,
            quantité conjuguée, mise en évidence du terme dominant) :
            <div className="mt-2 flex flex-wrap gap-3 font-mono text-sm">
              <Math tex="\dfrac00" /> <Math tex="\dfrac{\infty}{\infty}" /> <Math tex="\infty-\infty" />{" "}
              <Math tex="0\times\infty" />
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Limite d'une fonction composée">
          <Callout variant="success" title="Théorème">
            Soit <Math tex="a,b,c" /> des éléments de <Math tex="\overline{\mathbb R}=\mathbb R\cup\{-\infty,+\infty\}" />.
            Si <Math tex="\displaystyle\lim_{x\to a}f(x)=b" /> et <Math tex="\displaystyle\lim_{y\to b}g(y)=c" />,
            alors :
          </Callout>
          <FormulaBlock tex="\lim_{x\to a}\,(g\circ f)(x)=c" caption="on dit qu'on a effectué le changement de variable y = f(x)" />
          <Example title="Exemple résolu">
            <p>
              Calculons <Math tex="\displaystyle\lim_{x\to+\infty}\sqrt{\dfrac{2x+1}{x+3}}" />. On pose{" "}
              <Math tex="u(x)=\dfrac{2x+1}{x+3}" /> : <Math tex="\displaystyle\lim_{x\to+\infty}u(x)=2" />, et{" "}
              <Math tex="\displaystyle\lim_{y\to2}\sqrt y=\sqrt2" /> (continuité de la racine carrée en 2). Donc, par
              composition :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="\displaystyle\lim_{x\to+\infty}\sqrt{\dfrac{2x+1}{x+3}}=\sqrt2" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="III" title="Limites et ordre, théorème des gendarmes">
          <Callout variant="success" title="Théorèmes de comparaison">
            Soient <Math tex="f,g,h" /> définies au voisinage de <Math tex="a\in\overline{\mathbb R}" /> (éventuellement
            sauf en <Math tex="a" />).
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                Si <Math tex="f(x)\le g(x)" /> au voisinage de <Math tex="a" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to a}f(x)=+\infty" />, alors{" "}
                <Math tex="\displaystyle\lim_{x\to a}g(x)=+\infty" />.
              </li>
              <li>
                Si <Math tex="f(x)\le g(x)" /> au voisinage de <Math tex="a" />,{" "}
                <Math tex="\displaystyle\lim_{x\to a}f(x)=\ell" /> et <Math tex="\displaystyle\lim_{x\to a}g(x)=\ell'" />
                , alors <Math tex="\ell\le\ell'" />.
              </li>
              <li>
                <strong>Théorème des gendarmes :</strong> si <Math tex="h(x)\le f(x)\le g(x)" /> au voisinage de{" "}
                <Math tex="a" /> et si <Math tex="h" /> et <Math tex="g" /> ont la même limite finie <Math tex="\ell" />
                {" "}en <Math tex="a" />, alors <Math tex="f" /> admet une limite en <Math tex="a" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to a}f(x)=\ell" />.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu — théorème des gendarmes">
            <p>
              Calculons <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{\sin x}{x}" />. Pour tout{" "}
              <Math tex="x>0" /> : <Math tex="-1\le\sin x\le1" />, donc en divisant par <Math tex="x>0" /> :
            </p>
            <MathBlock tex="-\dfrac1x\le\dfrac{\sin x}{x}\le\dfrac1x" />
            <p>
              Or <Math tex="\displaystyle\lim_{x\to+\infty}\left(-\dfrac1x\right)=\lim_{x\to+\infty}\dfrac1x=0" />.
            </p>
            <p className="font-semibold text-green-700">
              Par le théorème des gendarmes, <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{\sin x}{x}=0" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Théorème de la limite monotone">
          <Callout variant="success" title="Théorème (admis)">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Si <Math tex="f" /> est <strong>croissante et majorée</strong> sur <Math tex="[a,b[" /> (avec{" "}
                <Math tex="b\in\mathbb R\cup\{+\infty\}" />), alors <Math tex="f" /> admet une <strong>limite finie</strong>{" "}
                en <Math tex="b" />.
              </li>
              <li>
                Si <Math tex="f" /> est <strong>croissante et non majorée</strong> sur <Math tex="[a,b[" />, alors{" "}
                <Math tex="\displaystyle\lim_{x\to b}f(x)=+\infty" />.
              </li>
              <li>
                Énoncés analogues pour une fonction <strong>décroissante et minorée</strong> (limite finie), ou{" "}
                <strong>décroissante et non minorée</strong> (limite <Math tex="-\infty" />).
              </li>
            </ul>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Ce théorème est très utile lorsqu&apos;on ne sait pas calculer directement une limite, mais qu&apos;on peut
            établir la monotonie et le caractère borné de la fonction : il garantit alors l&apos;<strong>existence</strong>{" "}
            de la limite, sans en donner nécessairement la valeur.
          </p>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. CONTINUITÉ ===================== */}
      <LessonSection
        id="cours-continuite"
        kicker="02 · Le cœur du chapitre"
        title="Continuité en un point, sur un intervalle, valeurs intermédiaires"
        tone="muted"
        description="Définitions rigoureuses, opérations, et le théorème central de ce chapitre : le théorème des valeurs intermédiaires."
      >
        <CourseBlock numeral="V" title="Continuité en un point">
          <DefBox label="Définition">
            Soit <Math tex="f" /> définie sur un intervalle ouvert <Math tex="I" /> contenant <Math tex="x_0" />. On dit
            que <Math tex="f" /> est <strong>continue en <Math tex="x_0" /></strong> si :
          </DefBox>
          <FormulaBlock tex="\lim_{x\to x_0}f(x)=f(x_0)" />
          <DefBox label="Continuité à droite / à gauche">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="f" /> est <strong>continue à droite</strong> en <Math tex="x_0" /> ssi{" "}
                <Math tex="\displaystyle\lim_{x\to x_0^+}f(x)=f(x_0)" />.
              </li>
              <li>
                <Math tex="f" /> est <strong>continue à gauche</strong> en <Math tex="x_0" /> ssi{" "}
                <Math tex="\displaystyle\lim_{x\to x_0^-}f(x)=f(x_0)" />.
              </li>
            </ul>
          </DefBox>
          <Callout variant="info" title="Propriété">
            <Math tex="f" /> est continue en <Math tex="x_0" /> si, et seulement si, <Math tex="f" /> est continue à
            droite <strong>et</strong> à gauche en <Math tex="x_0" /> :
          </Callout>
          <MathBlock tex="f \text{ continue en } x_0 \iff \lim_{x\to x_0^-}f(x)=\lim_{x\to x_0^+}f(x)=f(x_0)" />
          <Example title="Exemple résolu — raccordement d'une fonction définie par morceaux">
            <p>
              Soit <Math tex="f" /> définie par <Math tex="f(x)=x^2+1" /> si <Math tex="x\le1" /> et{" "}
              <Math tex="f(x)=ax+b" /> si <Math tex="x>1" />. Déterminons <Math tex="a" /> et <Math tex="b" /> pour que{" "}
              <Math tex="f" /> soit continue en <Math tex="1" />.
            </p>
            <p>
              <Math tex="\displaystyle\lim_{x\to1^-}f(x)=1^2+1=2=f(1)" /> : <Math tex="f" /> est toujours continue à
              gauche en 1. Il faut donc <Math tex="\displaystyle\lim_{x\to1^+}f(x)=2" />, c&apos;est-à-dire{" "}
              <Math tex="a+b=2" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="f" /> est continue en 1 si et seulement si <Math tex="a+b=2" /> (une infinité de couples{" "}
              <Math tex="(a,b)" /> conviennent).
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Continuité sur un intervalle, opérations">
          <DefBox label="Définitions">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="f" /> est continue sur l&apos;intervalle <strong>ouvert</strong> <Math tex="]a,b[" /> ssi{" "}
                <Math tex="f" /> est continue en tout point de <Math tex="]a,b[" />.
              </li>
              <li>
                <Math tex="f" /> est continue sur <Math tex="[a,b]" /> ssi <Math tex="f" /> est continue sur{" "}
                <Math tex="]a,b[" />, continue à droite en <Math tex="a" /> et continue à gauche en <Math tex="b" />.
              </li>
            </ul>
          </DefBox>
          <Callout variant="success" title="Propriété — opérations">
            Si <Math tex="f" /> et <Math tex="g" /> sont continues sur <Math tex="I" />, et <Math tex="\lambda\in\mathbb R" />
            , alors <Math tex="f+g" />, <Math tex="\lambda f" />, <Math tex="fg" /> sont continues sur <Math tex="I" />
            , et <Math tex="\dfrac{f}{g}" /> est continue en tout point de <Math tex="I" /> où <Math tex="g" /> ne
            s&apos;annule pas.
          </Callout>
          <Callout variant="success" title="Propriété — fonctions usuelles">
            <ul className="list-disc space-y-1 pl-5">
              <li>Toute fonction polynôme est continue sur <Math tex="\mathbb R" />.</li>
              <li>Toute fonction rationnelle est continue sur son domaine de définition.</li>
              <li>Les fonctions <Math tex="x\mapsto\sin x" />, <Math tex="x\mapsto\cos x" /> sont continues sur <Math tex="\mathbb R" />.</li>
              <li>
                La fonction <Math tex="x\mapsto\sqrt x" /> est continue sur <Math tex="[0,+\infty[" />, et{" "}
                <Math tex="x\mapsto\tan x" /> est continue sur son domaine de définition.
              </li>
              <li>
                Si <Math tex="g" /> est continue sur <Math tex="I" /> et <Math tex="f" /> continue sur{" "}
                <Math tex="g(I)" />, alors <Math tex="f\circ g" /> est continue sur <Math tex="I" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Image d'un intervalle par une fonction continue">
          <Callout variant="success" title="Propriété (admise)">
            Si <Math tex="f" /> est continue sur un <strong>segment</strong> <Math tex="[a,b]" />, alors{" "}
            <Math tex="f\big([a,b]\big)" /> est un <strong>segment</strong> <Math tex="[m,M]" />, où <Math tex="m" /> et{" "}
            <Math tex="M" /> sont respectivement le minimum et le maximum de <Math tex="f" /> sur <Math tex="[a,b]" />.
            Plus généralement, l&apos;image d&apos;un intervalle par une fonction continue est un intervalle.
          </Callout>
          <Callout variant="info" title="Propriété — cas où f est de plus strictement monotone">
            Si <Math tex="f" /> est continue et <strong>strictement croissante</strong> sur <Math tex="[a,b]" />, alors{" "}
            <Math tex="f\big([a,b]\big)=\big[f(a),f(b)\big]" />. Si <Math tex="f" /> est continue et{" "}
            <strong>strictement décroissante</strong>, alors <Math tex="f\big([a,b]\big)=\big[f(b),f(a)\big]" />. Des
            règles analogues, avec crochets ouverts et limites aux bornes, s&apos;appliquent à des intervalles{" "}
            <Math tex="]a,b[" />, <Math tex="[a,b[" />, <Math tex="]-\infty,b]" />, etc.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Théorème des valeurs intermédiaires (TVI)">
          <Callout variant="success" title="Théorème (admis)">
            Soit <Math tex="f" /> continue sur <Math tex="[a,b]" />. Pour tout réel <Math tex="k" /> compris entre{" "}
            <Math tex="f(a)" /> et <Math tex="f(b)" />, il existe <strong>au moins un</strong> <Math tex="c\in[a,b]" />{" "}
            tel que <Math tex="f(c)=k" />.
          </Callout>
          <Callout variant="warning" title="Corollaires (les plus utilisés)">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Si <Math tex="f" /> est continue sur <Math tex="[a,b]" /> et si <Math tex="f(a)\cdot f(b)<0" />, alors
                l&apos;équation <Math tex="f(x)=0" /> admet <strong>au moins une</strong> solution dans{" "}
                <Math tex="]a,b[" />.
              </li>
              <li>
                Si de plus <Math tex="f" /> est <strong>strictement monotone</strong> sur <Math tex="[a,b]" />, cette
                solution est <strong>unique</strong>.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu">
            <p>
              Soit <Math tex="f(x)=x^3+x-3" />. <Math tex="f" /> est continue sur <Math tex="\mathbb R" /> (fonction
              polynôme), et sa dérivée <Math tex="f'(x)=3x^2+1>0" /> montre qu&apos;elle est strictement croissante sur{" "}
              <Math tex="\mathbb R" />. De plus <Math tex="f(1)=-1<0" /> et <Math tex="f(2)=7>0" />, donc{" "}
              <Math tex="f(1)\cdot f(2)<0" />.
            </p>
            <p className="font-semibold text-green-700">
              L&apos;équation <Math tex="f(x)=0" /> admet une unique solution <Math tex="\alpha\in\,]1,2[" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. FONCTION RÉCIPROQUE ===================== */}
      <LessonSection
        id="cours-reciproque"
        kicker="03 · Bijections et racines"
        title="Fonction réciproque, racine n-ième, puissance rationnelle"
        tone="light"
        description="Le théorème de la bijection continue, ses conséquences graphiques, et la construction des racines n-ièmes."
      >
        <CourseBlock numeral="IX" title="Fonction réciproque d'une fonction continue et strictement monotone">
          <Callout variant="success" title="Théorème (admis)">
            Si <Math tex="f" /> est continue et strictement monotone sur un intervalle <Math tex="I" />, alors{" "}
            <Math tex="f" /> réalise une <strong>bijection</strong> de <Math tex="I" /> sur <Math tex="J=f(I)" />. Elle
            admet donc une fonction réciproque <Math tex="f^{-1}:J\to I" />, caractérisée par :
          </Callout>
          <FormulaBlock tex="\forall x\in I,\ \forall y\in J:\quad y=f(x) \iff x=f^{-1}(y)" />
          <Callout variant="info" title="Propriétés de f⁻¹">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="f^{-1}" /> est continue sur <Math tex="J" /> et <strong>varie dans le même sens</strong>{" "}
                que <Math tex="f" />.
              </li>
              <li>
                Les courbes <Math tex="(C_f)" /> et <Math tex="(C_{f^{-1}})" /> sont <strong>symétriques</strong> par
                rapport à la droite <Math tex="\Delta:\ y=x" /> (première bissectrice du repère).
              </li>
              <li>
                Pour tout <Math tex="x\in I" />, <Math tex="f^{-1}\big(f(x)\big)=x" />, et pour tout{" "}
                <Math tex="y\in J" />, <Math tex="f\big(f^{-1}(y)\big)=y" />.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu — déterminer f⁻¹ explicitement">
            <p>
              Soit <Math tex="f(x)=x^2" /> définie sur <Math tex="I=[0,3]" />. La fonction{" "}
              <Math tex="x\mapsto x^2" /> est continue et strictement croissante sur <Math tex="[0,+\infty[" />, donc{" "}
              sa restriction à <Math tex="I" /> est continue et strictement croissante : <Math tex="f" /> réalise donc
              une bijection de <Math tex="I" /> sur <Math tex="J=f(I)=\big[f(0),f(3)\big]=[0,9]" />.
            </p>
            <p>
              Pour <Math tex="y\in[0,9]" />, on résout <Math tex="x^2=y" /> avec <Math tex="x\in[0,3]" /> : comme{" "}
              <Math tex="x\ge0" />, la seule solution est <Math tex="x=\sqrt y" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="f^{-1}:[0,9]\to[0,3]" />, <Math tex="f^{-1}(x)=\sqrt x" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="X" title="La fonction racine n-ième">
          <Callout variant="success" title="Définition et théorème">
            Soit <Math tex="n\in\mathbb N^*" />. La fonction <Math tex="x\mapsto x^n" /> est continue et strictement
            croissante sur <Math tex="[0,+\infty[" />, à valeurs dans <Math tex="[0,+\infty[" />. Elle admet donc une
            fonction réciproque, appelée <strong>racine n-ième</strong>, notée :
          </Callout>
          <FormulaBlock tex="\sqrt[n]{\,\cdot\,}:[0,+\infty[\;\to\;[0,+\infty[\,,\qquad x\mapsto \sqrt[n]{x}=x^{\frac1n}" />
          <p className="text-sm text-foreground-muted">
            Pour <Math tex="n=2" /> on retrouve la racine carrée, pour <Math tex="n=3" /> la racine cubique.
          </p>
          <Callout variant="info" title="Propriétés (a, b ≥ 0, n, m ∈ ℕ*)">
            <div className="grid gap-2 sm:grid-cols-2">
              <Math tex="\sqrt[n]{a}\ge0" />
              <Math tex="\left(\sqrt[n]{a}\right)^n=a" />
              <Math tex="\sqrt[n]{a}=\sqrt[n]{b}\iff a=b" />
              <Math tex="\sqrt[n]{a}\le\sqrt[n]{b}\iff a\le b" />
              <Math tex="\sqrt[n]{ab}=\sqrt[n]{a}\times\sqrt[n]{b}" />
              <Math tex="\sqrt[n]{\dfrac ab}=\dfrac{\sqrt[n]a}{\sqrt[n]b}\ (b\neq0)" />
              <Math tex="\sqrt[n]{a^m}=\left(\sqrt[n]a\right)^m" />
              <Math tex="\sqrt[n]{\sqrt[m]a}=\sqrt[nm]{a}" />
            </div>
          </Callout>
          <Example title="Exemple résolu — limite avec une racine n-ième">
            <p>
              Calculons <Math tex="\displaystyle\lim_{x\to+\infty}\sqrt[3]{\dfrac{8x^3+1}{x^3}}" />. On a{" "}
              <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{8x^3+1}{x^3}=8" />, et par continuité de{" "}
              <Math tex="\sqrt[3]{\cdot}" /> en 8 :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="\displaystyle\lim_{x\to+\infty}\sqrt[3]{\dfrac{8x^3+1}{x^3}}=\sqrt[3]8=2" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="XI" title="Puissance rationnelle d'un réel positif">
          <DefBox label="Définition">
            Soit <Math tex="x>0" /> et <Math tex="r=\dfrac mn\in\mathbb Q" /> avec <Math tex="n\in\mathbb N^*" /> et{" "}
            <Math tex="m\in\mathbb Z" />. On pose :
          </DefBox>
          <FormulaBlock tex="x^{r}=x^{\frac mn}=\sqrt[n]{x^{m}}=\left(\sqrt[n]{x}\right)^{m}" />
          <Callout variant="success" title="Propriété — les règles de calcul restent valables">
            Pour <Math tex="a,b>0" /> et <Math tex="r,r'\in\mathbb Q" /> :
          </Callout>
          <div className="grid gap-2 rounded-xl border border-border p-4 text-sm sm:grid-cols-2">
            <Math tex="a^{r}\times a^{r'}=a^{r+r'}" />
            <Math tex="\dfrac{a^r}{a^{r'}}=a^{r-r'}" />
            <Math tex="\left(a^r\right)^{r'}=a^{rr'}" />
            <Math tex="(ab)^r=a^rb^r" />
            <Math tex="\left(\dfrac ab\right)^r=\dfrac{a^r}{b^r}" />
            <Math tex="a^{-r}=\dfrac1{a^r}" />
          </div>
          <Example title="Exemple résolu — simplifier une écriture">
            <p>
              Simplifions <Math tex="A=\dfrac{2^{\frac53}\times2^{-\frac23}}{2^{\frac12}}" />.
            </p>
            <MathBlock tex="A=\dfrac{2^{\frac53-\frac23}}{2^{\frac12}}=\dfrac{2^{1}}{2^{\frac12}}=2^{1-\frac12}=2^{\frac12}=\sqrt2" />
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Limites et Continuité"
        tone="muted"
        description="11 exercices corrigés en détail, niveau Sciences Mathématiques. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={11} celebrationTitle="Bravo, les 11 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les limites et la continuité.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Calculs de limites — formes indéterminées classiques"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Calculer les limites suivantes :</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    <Math tex="\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x^2-3x+2}" />
                  </li>
                  <li>
                    <Math tex="\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+1}-1}{x}" />
                  </li>
                  <li>
                    <Math tex="\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)" />
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <strong>1)</strong> On factorise : <Math tex="x^2-4=(x-2)(x+2)" /> et{" "}
                  <Math tex="x^2-3x+2=(x-1)(x-2)" />. Pour <Math tex="x\neq2" /> :
                </p>
                <MathBlock tex="\dfrac{(x-2)(x+2)}{(x-1)(x-2)}=\dfrac{x+2}{x-1}\xrightarrow[x\to2]{}\dfrac{4}{1}=4" />
                <p>
                  <strong>2)</strong> On multiplie par la quantité conjuguée <Math tex="\sqrt{x+1}+1" /> :
                </p>
                <MathBlock tex="\dfrac{\sqrt{x+1}-1}{x}=\dfrac{(x+1)-1}{x\left(\sqrt{x+1}+1\right)}=\dfrac{1}{\sqrt{x+1}+1}\xrightarrow[x\to0]{}\dfrac12" />
                <p>
                  <strong>3)</strong> Forme <Math tex="\infty-\infty" />, on multiplie par la quantité conjuguée :
                </p>
                <MathBlock tex="\sqrt{x^2+x}-x=\dfrac{x^2+x-x^2}{\sqrt{x^2+x}+x}=\dfrac{x}{\sqrt{x^2+x}+x}=\dfrac{1}{\sqrt{1+\frac1x}+1}\xrightarrow[x\to+\infty]{}\dfrac12" />
                <p className="font-semibold text-green-700">
                  Réponses : 4 ; 1/2 ; 1/2.
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Théorème des gendarmes"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^2\cos\left(\dfrac1x\right)" /> pour <Math tex="x\neq0" />.
                </p>
                <p>
                  Montrer que <Math tex="\displaystyle\lim_{x\to0}f(x)=0" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Pour tout <Math tex="x\neq0" />, <Math tex="-1\le\cos\left(\dfrac1x\right)\le1" />, donc en
                  multipliant par <Math tex="x^2>0" /> :
                </p>
                <MathBlock tex="-x^2\le x^2\cos\left(\dfrac1x\right)\le x^2" />
                <p>
                  Or <Math tex="\displaystyle\lim_{x\to0}(-x^2)=\lim_{x\to0}x^2=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Par le théorème des gendarmes, <Math tex="\displaystyle\lim_{x\to0}f(x)=0" />.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Limite d'une fonction composée"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Calculer <Math tex="\displaystyle\lim_{x\to1}\sqrt{\dfrac{3x-1}{x+1}}" /> en effectuant un changement
                  de variable.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Posons <Math tex="u(x)=\dfrac{3x-1}{x+1}" />, fonction rationnelle continue en 1 (dénominateur non
                  nul), donc <Math tex="\displaystyle\lim_{x\to1}u(x)=u(1)=\dfrac{2}{2}=1" />.
                </p>
                <p>
                  La fonction racine carrée est continue en <Math tex="1" />, avec <Math tex="\sqrt1=1" />, donc par
                  composition :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{x\to1}\sqrt{\dfrac{3x-1}{x+1}}=\sqrt1=1" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Étude de continuité avec un paramètre"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soit f la fonction définie par :</p>
                <MathBlock tex="f(x)=\begin{cases}\dfrac{x^2-1}{x-1} & \text{si } x<1\\[4pt] m & \text{si } x=1\\[2pt] \sqrt{x}+x & \text{si } x>1\end{cases}" />
                <p>
                  Déterminer <Math tex="m" /> pour que <Math tex="f" /> soit continue en <Math tex="1" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="\displaystyle\lim_{x\to1^-}f(x)=\lim_{x\to1^-}\dfrac{(x-1)(x+1)}{x-1}=\lim_{x\to1^-}(x+1)=2" />
                </p>
                <p>
                  <Math tex="\displaystyle\lim_{x\to1^+}f(x)=\sqrt1+1=2" />
                </p>
                <p>
                  <Math tex="f" /> continue en 1 <Math tex="\iff \displaystyle\lim_{x\to1^-}f(x)=\lim_{x\to1^+}f(x)=f(1)" />
                  , c&apos;est-à-dire <Math tex="2=2=m" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est continue en 1 si et seulement si <Math tex="m=2" />.
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Prolongement par continuité"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="g(x)=\dfrac{\sqrt{x+4}-2}{x}" /> définie sur <Math tex="]-4,0[\,\cup\,]0,+\infty[" />.
                </p>
                <p>
                  Montrer que <Math tex="g" /> admet un prolongement par continuité en <Math tex="0" />, et le
                  préciser.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>On multiplie par la quantité conjuguée :</p>
                <MathBlock tex="g(x)=\dfrac{(x+4)-4}{x\left(\sqrt{x+4}+2\right)}=\dfrac{x}{x\left(\sqrt{x+4}+2\right)}=\dfrac{1}{\sqrt{x+4}+2}" />
                <p>
                  La fonction <Math tex="x\mapsto\dfrac1{\sqrt{x+4}+2}" /> est continue en 0 (composée/quotient de
                  fonctions continues, dénominateur non nul), donc <Math tex="g" /> admet une limite finie en 0 :
                </p>
                <MathBlock tex="\lim_{x\to0}g(x)=\dfrac1{\sqrt4+2}=\dfrac14" />
                <p className="font-semibold text-green-700">
                  Le prolongement par continuité <Math tex="\tilde g" /> de <Math tex="g" /> en 0 est défini par{" "}
                  <Math tex="\tilde g(x)=g(x)" /> si <Math tex="x\neq0" /> et <Math tex="\tilde g(0)=\dfrac14" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="TVI — existence et unicité d'une solution"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^3+3x-5" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que l&apos;équation <Math tex="f(x)=0" /> admet une unique solution <Math tex="\alpha" />{" "}
                    dans <Math tex="\mathbb R" />.
                  </li>
                  <li>
                    Vérifier que <Math tex="\alpha\in\,]1,2[" />, puis que <Math tex="\alpha\in\,]1,1.2[" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f" /> est une fonction polynôme, donc continue et dérivable sur{" "}
                  <Math tex="\mathbb R" />, avec <Math tex="f'(x)=3x^2+3>0" /> pour tout <Math tex="x" /> :{" "}
                  <Math tex="f" /> est strictement croissante sur <Math tex="\mathbb R" />.
                </p>
                <p>
                  De plus <Math tex="\displaystyle\lim_{x\to-\infty}f(x)=-\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=+\infty" />, donc{" "}
                  <Math tex="f(\mathbb R)=\mathbb R" /> contient 0.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="f" /> est continue et strictement croissante sur <Math tex="\mathbb R" />,
                  l&apos;équation <Math tex="f(x)=0" /> admet une unique solution <Math tex="\alpha" /> dans{" "}
                  <Math tex="\mathbb R" /> (corollaire du TVI).
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f(1)=1+3-5=-1<0" /> et <Math tex="f(2)=8+6-5=9>0" />, donc{" "}
                  <Math tex="f(1)f(2)<0" /> : comme <Math tex="f" /> est continue et strictement croissante sur{" "}
                  <Math tex="[1,2]" />, <Math tex="\alpha\in\,]1,2[" />.
                </p>
                <p>
                  <Math tex="f(1.2)=1.728+3.6-5=0.328>0" />, et <Math tex="f(1)<0" />, donc{" "}
                  <Math tex="\alpha\in\,]1,1.2[" />.
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Théorème du point fixe (TVI appliqué à g(x) = f(x) − x)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f:[0,1]\to[0,1]" /> une fonction continue.
                </p>
                <p>
                  Montrer que l&apos;équation <Math tex="f(x)=x" /> admet au moins une solution dans <Math tex="[0,1]" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  On pose <Math tex="g(x)=f(x)-x" />, continue sur <Math tex="[0,1]" /> comme différence de fonctions
                  continues.
                </p>
                <p>
                  Puisque <Math tex="f(0)\in[0,1]" />, <Math tex="f(0)\ge0" />, donc <Math tex="g(0)=f(0)-0\ge0" />.
                </p>
                <p>
                  Puisque <Math tex="f(1)\in[0,1]" />, <Math tex="f(1)\le1" />, donc{" "}
                  <Math tex="g(1)=f(1)-1\le0" />.
                </p>
                <p>
                  Donc <Math tex="g(0)\ge0" /> et <Math tex="g(1)\le0" />, c&apos;est-à-dire <Math tex="0" /> est
                  compris entre <Math tex="g(0)" /> et <Math tex="g(1)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Par le TVI, il existe <Math tex="c\in[0,1]" /> tel que <Math tex="g(c)=0" />, c&apos;est-à-dire{" "}
                  <Math tex="f(c)=c" /> : l&apos;équation <Math tex="f(x)=x" /> admet au moins une solution dans{" "}
                  <Math tex="[0,1]" />.
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Bijection et détermination explicite de la réciproque"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{2x-1}{x+1}" /> définie sur <Math tex="I=[0,+\infty[" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="f" /> réalise une bijection de <Math tex="I" /> sur un intervalle{" "}
                    <Math tex="J" /> à préciser.
                  </li>
                  <li>
                    Déterminer <Math tex="f^{-1}(x)" /> pour <Math tex="x\in J" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> On écrit <Math tex="f(x)=\dfrac{2(x+1)-3}{x+1}=2-\dfrac{3}{x+1}" />. Comme{" "}
                  <Math tex="x\mapsto\dfrac3{x+1}" /> est strictement décroissante sur <Math tex="I" /> (quotient
                  d&apos;une constante positive par une fonction strictement croissante et positive), <Math tex="f" />{" "}
                  est strictement croissante sur <Math tex="I" />, et continue (fonction rationnelle, dénominateur{" "}
                  <Math tex="x+1\ge1\neq0" />).
                </p>
                <p>
                  <Math tex="f(0)=-1" /> et <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=2" />, donc{" "}
                  <Math tex="J=f(I)=[-1,2[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> continue et strictement croissante sur <Math tex="I" /> : c&apos;est une bijection
                  de <Math tex="I=[0,+\infty[" /> sur <Math tex="J=[-1,2[" />.
                </p>
                <p>
                  <strong>2)</strong> Pour <Math tex="y\in J" />, on résout <Math tex="\dfrac{2x-1}{x+1}=y" /> d&apos;inconnue{" "}
                  <Math tex="x\ge0" /> :
                </p>
                <MathBlock tex="2x-1=y(x+1)\iff x(2-y)=y+1\iff x=\dfrac{y+1}{2-y}\ (\text{car } y<2)" />
                <p className="font-semibold text-green-700">
                  <Math tex="f^{-1}:[-1,2[\,\to[0,+\infty[" />, <Math tex="f^{-1}(x)=\dfrac{x+1}{2-x}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Racines n-ièmes et puissances rationnelles"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Simplifier les expressions suivantes :</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    <Math tex="A=\sqrt[3]{16}\times\sqrt[3]{4}" />
                  </li>
                  <li>
                    <Math tex="B=\dfrac{5^{\frac23}\times5^{\frac13}}{5^{-1}}" />
                  </li>
                  <li>
                    <Math tex="C=\sqrt{2\sqrt2}" /> (écrire C sous la forme <Math tex="2^{r}" />)
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="A=\sqrt[3]{16\times4}=\sqrt[3]{64}=\sqrt[3]{4^3}=4" />.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="B=\dfrac{5^{\frac23+\frac13}}{5^{-1}}=\dfrac{5^{1}}{5^{-1}}=5^{1-(-1)}=5^2=25" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="2\sqrt2=2^1\times2^{\frac12}=2^{\frac32}" />, donc :
                </p>
                <MathBlock tex="C=\sqrt{2^{\frac32}}=\left(2^{\frac32}\right)^{\frac12}=2^{\frac34}" />
                <p className="font-semibold text-green-700">A = 4 ; B = 25 ; C = 2^(3/4).</p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Limites faisant intervenir une racine n-ième"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Calculer les limites suivantes :</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    <Math tex="\displaystyle\lim_{x\to+\infty}\sqrt[3]{\dfrac{27x^3-x+1}{x^3+2}}" />
                  </li>
                  <li>
                    <Math tex="\displaystyle\lim_{x\to1}\dfrac{\sqrt[3]{x}-1}{x-1}" /> (poser <Math tex="t=\sqrt[3]x" />)
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{27x^3-x+1}{x^3+2}=27" />, et par continuité de{" "}
                  <Math tex="\sqrt[3]\cdot" /> en 27 :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{x\to+\infty}\sqrt[3]{\dfrac{27x^3-x+1}{x^3+2}}=\sqrt[3]{27}=3" />.
                </p>
                <p>
                  <strong>2)</strong> On pose <Math tex="t=\sqrt[3]x" />, donc <Math tex="x=t^3" />, et{" "}
                  <Math tex="x\to1 \Rightarrow t\to1" /> (car <Math tex="t\mapsto t^3" /> est continue et bijective).
                  On factorise <Math tex="t^3-1=(t-1)(t^2+t+1)" /> :
                </p>
                <MathBlock tex="\dfrac{\sqrt[3]{x}-1}{x-1}=\dfrac{t-1}{t^3-1}=\dfrac{t-1}{(t-1)(t^2+t+1)}=\dfrac1{t^2+t+1}\xrightarrow[t\to1]{}\dfrac13" />
                <p className="font-semibold text-green-700">Réponses : 3 ; 1/3.</p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Problème de synthèse — continuité, TVI et bijection"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f" /> la fonction définie sur <Math tex="[0,+\infty[" /> par{" "}
                  <Math tex="f(x)=\sqrt{x^2+1}-x" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="f(x)=\dfrac{1}{\sqrt{x^2+1}+x}" /> pour tout <Math tex="x\ge0" />, et en
                    déduire le sens de variation de <Math tex="f" /> sur <Math tex="[0,+\infty[" />.
                  </li>
                  <li>
                    Calculer <Math tex="f(0)" /> et <Math tex="\displaystyle\lim_{x\to+\infty}f(x)" />. En déduire que{" "}
                    <Math tex="f" /> réalise une bijection de <Math tex="[0,+\infty[" /> sur un intervalle{" "}
                    <Math tex="J" /> à préciser.
                  </li>
                  <li>
                    Montrer que l&apos;équation <Math tex="f(x)=\dfrac12" /> admet une unique solution{" "}
                    <Math tex="\alpha" />, et calculer <Math tex="\alpha" /> explicitement.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Pour <Math tex="x\ge0" />, <Math tex="\sqrt{x^2+1}+x>0" />, donc on peut
                  multiplier par la quantité conjuguée :
                </p>
                <MathBlock tex="f(x)=\sqrt{x^2+1}-x=\dfrac{(x^2+1)-x^2}{\sqrt{x^2+1}+x}=\dfrac{1}{\sqrt{x^2+1}+x}" />
                <p>
                  Le dénominateur <Math tex="x\mapsto\sqrt{x^2+1}+x" /> est strictement croissant et strictement
                  positif sur <Math tex="[0,+\infty[" /> (somme de deux fonctions croissantes, dont une strictement),
                  donc son inverse <Math tex="f" /> est <strong>strictement décroissante</strong> sur{" "}
                  <Math tex="[0,+\infty[" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f(0)=\dfrac{1}{\sqrt1+0}=1" />. Comme{" "}
                  <Math tex="\sqrt{x^2+1}+x\to+\infty" /> quand <Math tex="x\to+\infty" /> :{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est continue (quotient de fonctions continues, dénominateur non nul) et strictement
                  décroissante sur <Math tex="[0,+\infty[" />, donc c&apos;est une bijection de{" "}
                  <Math tex="[0,+\infty[" /> sur <Math tex="J=\;]0,1]" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="\dfrac12\in J=\,]0,1]" />, donc, <Math tex="f" /> étant une bijection,
                  l&apos;équation <Math tex="f(x)=\dfrac12" /> admet une unique solution <Math tex="\alpha\ge0" />.
                </p>
                <MathBlock tex="\sqrt{\alpha^2+1}-\alpha=\dfrac12 \iff \sqrt{\alpha^2+1}=\alpha+\dfrac12" />
                <p>
                  Comme <Math tex="\alpha\ge0" />, <Math tex="\alpha+\frac12>0" />, on peut élever au carré :
                </p>
                <MathBlock tex="\alpha^2+1=\alpha^2+\alpha+\dfrac14 \iff \alpha=\dfrac34" />
                <p className="font-semibold text-green-700">
                  <Math tex="\alpha=\dfrac34" /> (on vérifie <Math tex="f(3/4)=\sqrt{25/16}-3/4=5/4-3/4=1/2" />, ce qui
                  confirme le résultat).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
