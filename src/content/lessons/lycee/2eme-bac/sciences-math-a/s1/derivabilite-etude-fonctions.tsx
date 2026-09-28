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
  title: "Dérivabilité et Étude des fonctions · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet et rigoureux : dérivabilité en un point, dérivabilité et continuité, opérations sur les dérivées, dérivée de la fonction réciproque, sens de variation, extremums, convexité et points d'inflexion, plan d'étude complet d'une fonction. 12 exercices intégralement corrigés. 2ème Bac Sciences Mathématiques, semestre 1.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "Dérivabilité et Étude des fonctions",
  heroSubtitle:
    "Nombre dérivé, tangente, opérations sur les dérivées, dérivée de la réciproque, monotonie, extremums, convexité : tous les outils pour mener une étude de fonction complète et rigoureuse.",
  footerNote: "Dérivabilité et Étude des fonctions · Mathématiques, 2ème Bac Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-derivabilite", label: "Dérivabilité en un point" },
    { id: "cours-operations", label: "Opérations, dérivée de f⁻¹" },
    { id: "cours-variations", label: "Variations, extremums, convexité" },
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
          { value: "12", label: "exercices corrigés" },
          { value: "3", label: "blocs de cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#cours-derivabilite" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
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
            <path d="M40,160 C70,60 130,60 160,160" fill="none" stroke="#fb923c" strokeWidth="2.5" />
            <line x1="60" y1="150" x2="150" y2="70" stroke="white" strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="100" cy="98" r="3.5" fill="white" />
          </svg>
        }
      />

      {/* ===================== I. DÉRIVABILITÉ EN UN POINT ===================== */}
      <LessonSection
        id="cours-derivabilite"
        kicker="01 · Le nombre dérivé"
        title="Dérivabilité en un point, tangente, dérivabilité et continuité"
        tone="light"
        description="La définition fondamentale — la limite du taux d'accroissement — et son interprétation graphique."
      >
        <CourseBlock numeral="I" title="Dérivabilité en un point">
          <DefBox label="Définition">
            Soit <Math tex="f" /> définie sur un intervalle ouvert <Math tex="I" /> contenant <Math tex="x_0" />. On
            dit que <Math tex="f" /> est <strong>dérivable en <Math tex="x_0" /></strong> si le{" "}
            <strong>taux d&apos;accroissement</strong> de <Math tex="f" /> en <Math tex="x_0" /> admet une{" "}
            <strong>limite finie</strong> quand <Math tex="x" /> tend vers <Math tex="x_0" /> :
          </DefBox>
          <FormulaBlock
            tex="\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}=\ell\in\mathbb R \qquad \left(\text{ou, avec } h=x-x_0:\ \lim_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h}=\ell\right)"
          />
          <p className="text-sm text-foreground-muted">
            Ce nombre <Math tex="\ell" /> est alors appelé le <strong>nombre dérivé</strong> de <Math tex="f" /> en{" "}
            <Math tex="x_0" />, noté <Math tex="f'(x_0)" />.
          </p>
          <DefBox label="Dérivabilité à droite / à gauche">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="f" /> est <strong>dérivable à droite</strong> en <Math tex="x_0" /> si{" "}
                <Math tex="\displaystyle\lim_{x\to x_0^+}\dfrac{f(x)-f(x_0)}{x-x_0}=f_d'(x_0)\in\mathbb R" />.
              </li>
              <li>
                <Math tex="f" /> est <strong>dérivable à gauche</strong> en <Math tex="x_0" /> si{" "}
                <Math tex="\displaystyle\lim_{x\to x_0^-}\dfrac{f(x)-f(x_0)}{x-x_0}=f_g'(x_0)\in\mathbb R" />.
              </li>
              <li>
                <Math tex="f" /> est dérivable en <Math tex="x_0" /> ssi <Math tex="f_d'(x_0)" /> et{" "}
                <Math tex="f_g'(x_0)" /> existent et sont <strong>égaux</strong>.
              </li>
            </ul>
          </DefBox>
          <Example title="Exemple résolu — un point anguleux">
            <p>
              Étudions la dérivabilité de <Math tex="f(x)=|x|" /> en <Math tex="x_0=0" />.
            </p>
            <MathBlock tex="\dfrac{f(x)-f(0)}{x-0}=\dfrac{|x|}{x}=\begin{cases}1 & \text{si } x>0\\-1 & \text{si } x<0\end{cases}" />
            <p>
              Donc <Math tex="f_d'(0)=1" /> et <Math tex="f_g'(0)=-1" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="f_d'(0)\neq f_g'(0)" /> : f n&apos;est pas dérivable en 0. La courbe présente un{" "}
              <strong>point anguleux</strong> en <Math tex="O" /> (deux demi-tangentes distinctes).
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="II" title="Interprétation graphique — la tangente">
          <Callout variant="success" title="Propriété">
            Si <Math tex="f" /> est dérivable en <Math tex="x_0" />, la courbe <Math tex="(C_f)" /> admet au point{" "}
            <Math tex="M_0(x_0,f(x_0))" /> une <strong>tangente</strong> non verticale, de coefficient directeur{" "}
            <Math tex="f'(x_0)" />, d&apos;équation :
          </Callout>
          <FormulaBlock tex="T:\ y=f'(x_0)(x-x_0)+f(x_0)" />
          <Callout variant="info" title="Cas particuliers">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\displaystyle\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}=\pm\infty" />, <Math tex="f" />{" "}
                n&apos;est pas dérivable en <Math tex="x_0" />, mais <Math tex="(C_f)" /> admet une{" "}
                <strong>tangente verticale</strong> d&apos;équation <Math tex="x=x_0" />.
              </li>
              <li>
                Si <Math tex="f_d'(x_0)\neq f_g'(x_0)" /> (toutes deux finies), <Math tex="(C_f)" /> admet deux{" "}
                <strong>demi-tangentes</strong> distinctes en <Math tex="M_0" /> : c&apos;est un{" "}
                <strong>point anguleux</strong>.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Dérivabilité et continuité">
          <Callout variant="success" title="Théorème">
            Si <Math tex="f" /> est dérivable en <Math tex="x_0" />, alors <Math tex="f" /> est <strong>continue</strong>{" "}
            en <Math tex="x_0" />.
          </Callout>
          <DefBox label="Démonstration">
            Pour <Math tex="x\neq x_0" /> au voisinage de <Math tex="x_0" /> :
            <MathBlock tex="f(x)-f(x_0)=\dfrac{f(x)-f(x_0)}{x-x_0}\times(x-x_0)" />
            Quand <Math tex="x\to x_0" />, le premier facteur tend vers <Math tex="f'(x_0)\in\mathbb R" /> (f est
            dérivable en <Math tex="x_0" />) et le second tend vers <Math tex="0" />, donc par produit :{" "}
            <Math tex="\displaystyle\lim_{x\to x_0}\big(f(x)-f(x_0)\big)=0" />, c&apos;est-à-dire{" "}
            <Math tex="\displaystyle\lim_{x\to x_0}f(x)=f(x_0)" /> : f est continue en <Math tex="x_0" />.
          </DefBox>
          <Callout variant="warning" title="Attention — la réciproque est fausse !">
            Une fonction peut être continue en <Math tex="x_0" /> sans y être dérivable. L&apos;exemple type est{" "}
            <Math tex="f(x)=|x|" /> en <Math tex="0" /> : continue, mais non dérivable (voir l&apos;exemple ci-dessus).
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. OPÉRATIONS, DÉRIVÉE DE LA RÉCIPROQUE ===================== */}
      <LessonSection
        id="cours-operations"
        kicker="02 · Calculer une dérivée"
        title="Opérations sur les dérivées, dérivée de la fonction réciproque"
        tone="muted"
        description="Les formules de calcul indispensables, et un théorème plus spécifique aux Sciences Mathématiques : dériver f⁻¹ sans la calculer."
      >
        <CourseBlock numeral="IV" title="Opérations sur les fonctions dérivables">
          <Callout variant="success" title="Propriété">
            Si <Math tex="u" /> et <Math tex="v" /> sont dérivables sur <Math tex="I" />, et <Math tex="\lambda\in\mathbb R" />
            :
          </Callout>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(u+v)'=u'+v'" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(\lambda u)'=\lambda u'" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(uv)'=u'v+uv'" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}\ (v\neq0)" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\ (v\neq0)" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(u^n)'=n\,u'\,u^{n-1}\ (n\in\mathbb Z^*)" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="\left(\sqrt u\right)'=\dfrac{u'}{2\sqrt u}\ (u>0)" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(v\circ u)'=u'\times(v'\circ u)" />
            </div>
          </div>
          <Callout variant="info" title="Cas particulier très utile — dérivée de f(ax+b)">
            Si <Math tex="g(x)=f(ax+b)" /> avec <Math tex="f" /> dérivable, alors{" "}
            <Math tex="g'(x)=a\,f'(ax+b)" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Dérivée de x ↦ xʳ et fonctions usuelles">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(x^n)'=nx^{n-1}\ (n\in\mathbb Z)" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="\left(\sqrt[n]{x}\right)'=\dfrac1n\,x^{\frac1n-1}\ (x>0)" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(x^r)'=r\,x^{r-1}\ (r\in\mathbb Q,\ x>0)" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="(\sin x)'=\cos x \qquad (\cos x)'=-\sin x" />
            </div>
          </div>
          <Example title="Exemple résolu">
            <p>
              Dérivons <Math tex="f(x)=\sqrt{x^2+1}" />. On pose <Math tex="u(x)=x^2+1>0" />, <Math tex="u'(x)=2x" />
              :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="f'(x)=\dfrac{u'(x)}{2\sqrt{u(x)}}=\dfrac{2x}{2\sqrt{x^2+1}}=\dfrac{x}{\sqrt{x^2+1}}" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Dérivabilité de la fonction réciproque">
          <Callout variant="success" title="Théorème (spécifique Sciences Mathématiques)">
            Soit <Math tex="f" /> continue et strictement monotone sur <Math tex="I" />, réalisant une bijection de{" "}
            <Math tex="I" /> sur <Math tex="J=f(I)" />. Soit <Math tex="x_0\in I" /> et <Math tex="y_0=f(x_0)" />.
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                Si <Math tex="f" /> est dérivable en <Math tex="x_0" /> et <Math tex="f'(x_0)\neq0" />, alors{" "}
                <Math tex="f^{-1}" /> est dérivable en <Math tex="y_0" />, et :
              </li>
            </ul>
          </Callout>
          <FormulaBlock tex="\left(f^{-1}\right)'(y_0)=\dfrac{1}{f'(x_0)}=\dfrac{1}{f'\big(f^{-1}(y_0)\big)}" />
          <Callout variant="warning" title="Cas où f'(x₀) = 0">
            Si <Math tex="f" /> est dérivable en <Math tex="x_0" /> et <Math tex="f'(x_0)=0" />, alors{" "}
            <Math tex="f^{-1}" /> <strong>n&apos;est pas dérivable</strong> en <Math tex="y_0" /> ; la courbe{" "}
            <Math tex="(C_{f^{-1}})" /> admet en <Math tex="(y_0,x_0)" /> une <strong>tangente verticale</strong>{" "}
            (cohérent avec la symétrie des courbes par rapport à <Math tex="y=x" />).
          </Callout>
          <Example title="Exemple résolu — sans calculer f⁻¹ explicitement">
            <p>
              Soit <Math tex="f(x)=x^3+2x+1" /> sur <Math tex="\mathbb R" />, continue et strictement croissante (car{" "}
              <Math tex="f'(x)=3x^2+2>0" />), donc bijective de <Math tex="\mathbb R" /> sur <Math tex="\mathbb R" />.
              Calculons <Math tex="\left(f^{-1}\right)'(1)" />.
            </p>
            <p>
              On cherche <Math tex="x_0" /> tel que <Math tex="f(x_0)=1" /> : <Math tex="x_0=0" /> convient (car{" "}
              <Math tex="f(0)=1" />). <Math tex="f'(0)=2\neq0" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="\left(f^{-1}\right)'(1)=\dfrac{1}{f'(0)}=\dfrac12" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. VARIATIONS, EXTREMUMS, CONVEXITÉ ===================== */}
      <LessonSection
        id="cours-variations"
        kicker="03 · Étudier une fonction"
        title="Sens de variation, extremums, convexité, plan d'étude"
        tone="light"
        description="Le signe de f' pour les variations, le signe de f'' pour la convexité : la méthode complète pour construire une courbe."
      >
        <CourseBlock numeral="VII" title="Sens de variation et signe de la dérivée">
          <Callout variant="success" title="Théorème">
            Soit <Math tex="f" /> dérivable sur un intervalle <Math tex="I" />.
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="f" /> est croissante sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f'(x)\ge0" /> pour
                tout <Math tex="x\in I" />.
              </li>
              <li>
                <Math tex="f" /> est décroissante sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f'(x)\le0" />{" "}
                pour tout <Math tex="x\in I" />.
              </li>
              <li>
                <Math tex="f" /> est constante sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f'(x)=0" /> pour
                tout <Math tex="x\in I" />.
              </li>
              <li>
                Si <Math tex="f'(x)>0" /> sur <Math tex="I" /> sauf en un <strong>nombre fini</strong> de points où{" "}
                <Math tex="f'" /> s&apos;annule, alors <Math tex="f" /> est <strong>strictement croissante</strong> sur{" "}
                <Math tex="I" /> (idem pour strictement décroissante).
              </li>
            </ul>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Ce théorème est en réalité une conséquence du <strong>théorème des accroissements finis</strong>{" "}
            (chapitre suivant), qui en donne la démonstration rigoureuse.
          </p>
          <Example title="Exemple résolu">
            <p>
              Soit <Math tex="f(x)=x^3-3x" /> sur <Math tex="\mathbb R" />. <Math tex="f'(x)=3x^2-3=3(x-1)(x+1)" />.
            </p>
            <p>
              <Math tex="f'(x)\ge0 \iff x\le-1 \text{ ou } x\ge1" />.
            </p>
            <p className="font-semibold text-green-700">
              f est strictement croissante sur <Math tex="]-\infty,-1]" /> et sur <Math tex="[1,+\infty[" />,
              strictement décroissante sur <Math tex="[-1,1]" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Extremums relatifs">
          <Callout variant="success" title="Théorème">
            Soit <Math tex="f" /> dérivable sur un intervalle ouvert <Math tex="I" /> et <Math tex="x_0\in I" />.
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="f" /> admet un extremum relatif en <Math tex="x_0" />, alors <Math tex="f'(x_0)=0" />.
              </li>
              <li>
                Réciproquement, si <Math tex="f'" /> s&apos;annule en <Math tex="x_0" /> en{" "}
                <strong>changeant de signe</strong>, alors <Math tex="f" /> admet un extremum relatif en{" "}
                <Math tex="x_0" />.
              </li>
            </ul>
          </Callout>
          <Callout variant="warning" title="Attention">
            <Math tex="f'(x_0)=0" /> ne suffit pas : par exemple <Math tex="f(x)=x^3" /> vérifie{" "}
            <Math tex="f'(0)=0" />, mais <Math tex="f'" /> ne change pas de signe en <Math tex="0" /> (positif de part
            et d&apos;autre) : <Math tex="f" /> est strictement croissante sur <Math tex="\mathbb R" />, pas
            d&apos;extremum en 0 (point d&apos;inflexion à tangente horizontale).
          </Callout>
          <Example title="Exemple résolu — suite de l'exemple précédent">
            <p>
              Pour <Math tex="f(x)=x^3-3x" /> : <Math tex="f'" /> s&apos;annule et change de signe en{" "}
              <Math tex="-1" /> (de <Math tex="+" /> à <Math tex="-" />) et en <Math tex="1" /> (de{" "}
              <Math tex="-" /> à <Math tex="+" />).
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="f(-1)=2" /> est un maximum relatif ; <Math tex="f(1)=-2" /> est un minimum relatif.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Convexité, concavité, points d'inflexion">
          <DefBox label="Définitions (via f'')">
            Soit <Math tex="f" /> deux fois dérivable sur <Math tex="I" />.
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="f''(x)\ge0" /> sur <Math tex="I" />, <Math tex="f" /> est <strong>convexe</strong> sur{" "}
                <Math tex="I" /> : <Math tex="(C_f)" /> est au-dessus de chacune de ses tangentes.
              </li>
              <li>
                Si <Math tex="f''(x)\le0" /> sur <Math tex="I" />, <Math tex="f" /> est <strong>concave</strong> sur{" "}
                <Math tex="I" /> : <Math tex="(C_f)" /> est en-dessous de chacune de ses tangentes.
              </li>
              <li>
                Si <Math tex="f''" /> s&apos;annule en <Math tex="x_0" /> en <strong>changeant de signe</strong>,{" "}
                <Math tex="(C_f)" /> traverse sa tangente en <Math tex="x_0" /> : <Math tex="I(x_0,f(x_0))" /> est un{" "}
                <strong>point d&apos;inflexion</strong>.
              </li>
            </ul>
          </DefBox>
          <Example title="Exemple résolu">
            <p>
              Pour <Math tex="f(x)=x^3-3x" /> : <Math tex="f''(x)=6x" />. <Math tex="f''(x)\ge0\iff x\ge0" />.
            </p>
            <p className="font-semibold text-green-700">
              f est concave sur <Math tex="]-\infty,0]" />, convexe sur <Math tex="[0,+\infty[" /> ; le point{" "}
              <Math tex="O(0,0)" /> est un point d&apos;inflexion (f&apos;&apos; change de signe en 0).
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="X" title="Branches infinies et plan d'étude d'une fonction">
          <Callout variant="info" title="Rappel — branches infinies">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\displaystyle\lim_{x\to a}f(x)=\pm\infty" /> : <Math tex="(C_f)" /> admet une{" "}
                <strong>asymptote verticale</strong> <Math tex="x=a" />.
              </li>
              <li>
                Si <Math tex="\displaystyle\lim_{x\to\pm\infty}f(x)=b" /> : <Math tex="(C_f)" /> admet une{" "}
                <strong>asymptote horizontale</strong> <Math tex="y=b" />.
              </li>
              <li>
                Si <Math tex="\displaystyle\lim_{x\to\pm\infty}\big[f(x)-(ax+b)\big]=0" /> : <Math tex="(C_f)" />{" "}
                admet une <strong>asymptote oblique</strong> <Math tex="y=ax+b" /> (on trouve souvent{" "}
                <Math tex="a" /> via <Math tex="\displaystyle\lim_{x\to\pm\infty}\dfrac{f(x)}{x}" />).
              </li>
            </ul>
          </Callout>
          <DefBox label="Plan d'une étude de fonction complète">
            <ol className="list-decimal space-y-1 pl-5">
              <li>Domaine de définition ; parité / périodicité éventuelle (réduction du domaine d&apos;étude).</li>
              <li>Limites aux bornes du domaine ; asymptotes / branches infinies.</li>
              <li>Calcul de <Math tex="f'" />, étude de son signe, tableau de variation.</li>
              <li>Extremums relatifs, éventuellement convexité via <Math tex="f''" />.</li>
              <li>Points remarquables (intersections avec les axes), tracé de la courbe.</li>
            </ol>
          </DefBox>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Dérivabilité et Étude des fonctions"
        tone="muted"
        description="12 exercices corrigés en détail, niveau Sciences Mathématiques. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={12} celebrationTitle="Bravo, les 12 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la dérivabilité et l'étude des fonctions.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Dérivabilité en un point par la définition"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\sqrt{x}" />. En utilisant la définition (limite du taux d&apos;accroissement),
                  montrer que <Math tex="f" /> est dérivable en <Math tex="4" /> et calculer <Math tex="f'(4)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>Pour <Math tex="x\ge0" />, <Math tex="x\neq4" /> :</p>
                <MathBlock tex="\dfrac{f(x)-f(4)}{x-4}=\dfrac{\sqrt x-2}{x-4}=\dfrac{\sqrt x-2}{(\sqrt x-2)(\sqrt x+2)}=\dfrac{1}{\sqrt x+2}" />
                <p>
                  <Math tex="\displaystyle\lim_{x\to4}\dfrac1{\sqrt x+2}=\dfrac1{2+2}=\dfrac14" />, limite finie.
                </p>
                <p className="font-semibold text-green-700">
                  f est dérivable en 4, et <Math tex="f'(4)=\dfrac14" />.
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Étude de dérivabilité d'une fonction définie par morceaux"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soit f définie par :</p>
                <MathBlock tex="f(x)=\begin{cases}x^2+1 & \text{si } x\le1\\2x & \text{si } x>1\end{cases}" />
                <p>
                  <Math tex="f" /> est-elle continue en 1 ? Dérivable en 1 ?
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>Continuité :</strong>{" "}
                  <Math tex="\displaystyle\lim_{x\to1^-}f(x)=2=f(1)" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to1^+}f(x)=2" /> : f est continue en 1.
                </p>
                <p>
                  <strong>Dérivabilité :</strong> pour <Math tex="x<1" />,{" "}
                  <Math tex="\dfrac{f(x)-f(1)}{x-1}=\dfrac{x^2-1}{x-1}=x+1\to2" />, donc{" "}
                  <Math tex="f_g'(1)=2" />.
                </p>
                <p>
                  Pour <Math tex="x>1" />,{" "}
                  <Math tex="\dfrac{f(x)-f(1)}{x-1}=\dfrac{2x-2}{x-1}=2\to2" />, donc <Math tex="f_d'(1)=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f_g'(1)=f_d'(1)=2" /> : f est dérivable en 1, et <Math tex="f'(1)=2" />.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Équation de la tangente"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^3-2x^2+1" />. Déterminer une équation de la tangente à <Math tex="(C_f)" /> au
                  point d&apos;abscisse <Math tex="x_0=1" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="f(1)=1-2+1=0" />. <Math tex="f'(x)=3x^2-4x" />, donc <Math tex="f'(1)=3-4=-1" />.
                </p>
                <p>Équation de la tangente : <Math tex="y=f'(1)(x-1)+f(1)" /> :</p>
                <p className="font-semibold text-green-700">
                  <Math tex="T:\ y=-(x-1)=-x+1" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Calculs de dérivées"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Calculer la dérivée des fonctions suivantes, en précisant le domaine de dérivabilité :</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li><Math tex="f(x)=\dfrac{2x-1}{x^2+1}" /></li>
                  <li><Math tex="g(x)=\sqrt{4-x^2}" /></li>
                  <li><Math tex="h(x)=(3x+1)^{5}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="D_f=\mathbb R" />. Avec <Math tex="u=2x-1" />, <Math tex="v=x^2+1" />
                  :
                </p>
                <MathBlock tex="f'(x)=\dfrac{2(x^2+1)-(2x-1)(2x)}{(x^2+1)^2}=\dfrac{2x^2+2-4x^2+2x}{(x^2+1)^2}=\dfrac{-2x^2+2x+2}{(x^2+1)^2}" />
                <p>
                  <strong>2)</strong> Domaine de dérivabilité : <Math tex="]-2,2[" /> (il faut{" "}
                  <Math tex="4-x^2>0" />). Avec <Math tex="u=4-x^2" />, <Math tex="u'=-2x" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="g'(x)=\dfrac{-2x}{2\sqrt{4-x^2}}=\dfrac{-x}{\sqrt{4-x^2}}" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="D_h=\mathbb R" />. Avec <Math tex="u=3x+1" />, <Math tex="u'=3" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="h'(x)=5\times3\times(3x+1)^4=15(3x+1)^4" />.
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Dérivée de la fonction réciproque, sans calculer f⁻¹"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^5+x" /> définie sur <Math tex="\mathbb R" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="f" /> réalise une bijection de <Math tex="\mathbb R" /> sur{" "}
                    <Math tex="\mathbb R" />.
                  </li>
                  <li>
                    Calculer <Math tex="\left(f^{-1}\right)'(2)" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f'(x)=5x^4+1\ge1>0" />, donc <Math tex="f" /> est continue et
                  strictement croissante sur <Math tex="\mathbb R" />. Comme{" "}
                  <Math tex="\displaystyle\lim_{x\to-\infty}f(x)=-\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=+\infty" />, <Math tex="f(\mathbb R)=\mathbb R" />.
                </p>
                <p className="font-semibold text-green-700">
                  f est une bijection de <Math tex="\mathbb R" /> sur <Math tex="\mathbb R" />.
                </p>
                <p>
                  <strong>2)</strong> On cherche <Math tex="x_0" /> tel que <Math tex="f(x_0)=2" /> :{" "}
                  <Math tex="x_0=1" /> convient (<Math tex="f(1)=1+1=2" />). <Math tex="f'(1)=5+1=6\neq0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\left(f^{-1}\right)'(2)=\dfrac1{f'(1)}=\dfrac16" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Sens de variation et extremums"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{x^2+3}{x}" /> définie sur <Math tex="\mathbb R^*" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Calculer <Math tex="f'(x)" /> et étudier son signe.</li>
                  <li>Dresser le tableau de variation de f et donner les extremums relatifs.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="f'(x)=\dfrac{2x\times x-(x^2+3)\times1}{x^2}=\dfrac{2x^2-x^2-3}{x^2}=\dfrac{x^2-3}{x^2}" />
                </p>
                <p>
                  <Math tex="f'(x)\ge0\iff x^2\ge3\iff x\le-\sqrt3\ \text{ou}\ x\ge\sqrt3" /> (le dénominateur{" "}
                  <Math tex="x^2" /> est toujours positif).
                </p>
                <p>
                  <strong>2)</strong> f est strictement croissante sur <Math tex="]-\infty,-\sqrt3]" /> et sur{" "}
                  <Math tex="[\sqrt3,+\infty[" />, strictement décroissante sur <Math tex="[-\sqrt3,0[" /> et sur{" "}
                  <Math tex="]0,\sqrt3]" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f(-\sqrt3)=-2\sqrt3" /> est un maximum relatif ; <Math tex="f(\sqrt3)=2\sqrt3" /> est un
                  minimum relatif (f'change de signe en chacun de ces points).
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Convexité et point d'inflexion"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^4-6x^2+2" /> sur <Math tex="\mathbb R" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Calculer <Math tex="f''(x)" /> et étudier son signe.</li>
                  <li>En déduire les intervalles de convexité et les points d&apos;inflexion de <Math tex="(C_f)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f'(x)=4x^3-12x" />, <Math tex="f''(x)=12x^2-12=12(x^2-1)" />.
                </p>
                <p>
                  <Math tex="f''(x)\ge0\iff x^2\ge1\iff x\le-1\ \text{ou}\ x\ge1" />.
                </p>
                <p>
                  <strong>2)</strong> f est concave sur <Math tex="[-1,1]" />, convexe sur <Math tex="]-\infty,-1]" />{" "}
                  et sur <Math tex="[1,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f''" /> change de signe en <Math tex="-1" /> et en <Math tex="1" /> : les points{" "}
                  <Math tex="(-1,f(-1))=(-1,-3)" /> et <Math tex="(1,f(1))=(1,-3)" /> sont des points d&apos;inflexion.
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Une inégalité par l'étude des variations"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\sin x-x" /> définie sur <Math tex="[0,+\infty[" />.
                </p>
                <p>
                  En étudiant le sens de variation de <Math tex="f" />, montrer que <Math tex="\sin x\le x" /> pour
                  tout <Math tex="x\ge0" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="f'(x)=\cos x-1\le0" /> pour tout <Math tex="x" /> (car <Math tex="\cos x\le1" />), donc{" "}
                  <Math tex="f" /> est décroissante sur <Math tex="[0,+\infty[" />.
                </p>
                <p>
                  Donc pour tout <Math tex="x\ge0" /> : <Math tex="f(x)\le f(0)" />, c&apos;est-à-dire{" "}
                  <Math tex="\sin x-x\le\sin0-0=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="\sin x\le x" /> pour tout <Math tex="x\ge0" />.
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Asymptotes et branches infinies"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{x^2-x+1}{x-1}" /> définie sur <Math tex="\mathbb R\setminus\{1\}" />.
                </p>
                <p>
                  Montrer que <Math tex="(C_f)" /> admet une asymptote verticale et une asymptote oblique, dont on
                  précisera les équations.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="\displaystyle\lim_{x\to1}(x-1)=0" /> et <Math tex="x^2-x+1\to1\neq0" /> en{" "}
                  <Math tex="1" />, donc <Math tex="\displaystyle\lim_{x\to1}f(x)=\pm\infty" /> :{" "}
                  <strong>asymptote verticale</strong> <Math tex="x=1" />.
                </p>
                <p>On effectue la division euclidienne :</p>
                <MathBlock tex="f(x)=\dfrac{x^2-x+1}{x-1}=x+\dfrac{1}{x-1}" />
                <p>
                  <Math tex="\displaystyle\lim_{x\to\pm\infty}\big[f(x)-x\big]=\lim_{x\to\pm\infty}\dfrac1{x-1}=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="(C_f)" /> admet l&apos;<strong>asymptote oblique</strong> <Math tex="y=x" /> en{" "}
                  <Math tex="\pm\infty" />.
                </p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Étude complète d'une fonction rationnelle"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{x^2}{x-1}" /> définie sur <Math tex="D_f=\mathbb R\setminus\{1\}" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Calculer les limites de f aux bornes de son domaine.</li>
                  <li>
                    Calculer <Math tex="f'(x)" />, étudier son signe, et dresser le tableau de variation de{" "}
                    <Math tex="f" />.
                  </li>
                  <li>Montrer que la droite <Math tex="y=x+1" /> est asymptote à <Math tex="(C_f)" /> en <Math tex="\pm\infty" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="\displaystyle\lim_{x\to\pm\infty}f(x)=\lim_{x\to\pm\infty}\dfrac{x^2}{x}=\lim_{x\to\pm\infty}x=\pm\infty" />
                  . En 1 : le numérateur tend vers 1, le dénominateur vers 0, donc{" "}
                  <Math tex="\displaystyle\lim_{x\to1^-}f(x)=-\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to1^+}f(x)=+\infty" />.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="f'(x)=\dfrac{2x(x-1)-x^2}{(x-1)^2}=\dfrac{2x^2-2x-x^2}{(x-1)^2}=\dfrac{x^2-2x}{(x-1)^2}=\dfrac{x(x-2)}{(x-1)^2}" />
                </p>
                <p>
                  Le dénominateur est toujours positif, donc <Math tex="f'(x)" /> a le signe de{" "}
                  <Math tex="x(x-2)" /> : <Math tex="f'(x)\ge0\iff x\le0\ \text{ou}\ x\ge2" />.
                </p>
                <p className="font-semibold text-green-700">
                  f est strictement croissante sur <Math tex="]-\infty,0]" /> et sur <Math tex="[2,+\infty[" />,
                  strictement décroissante sur <Math tex="[0,1[" /> et sur <Math tex="]1,2]" />. Maximum relatif{" "}
                  <Math tex="f(0)=0" />, minimum relatif <Math tex="f(2)=4" />.
                </p>
                <p>
                  <strong>3)</strong> Division euclidienne : <Math tex="x^2=(x-1)(x+1)+1" />, donc{" "}
                  <Math tex="f(x)=x+1+\dfrac1{x-1}" />, et{" "}
                  <Math tex="\displaystyle\lim_{x\to\pm\infty}\big[f(x)-(x+1)\big]=\lim_{x\to\pm\infty}\dfrac1{x-1}=0" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="y=x+1" /> est bien asymptote oblique à <Math tex="(C_f)" /> en <Math tex="\pm\infty" />.
                </p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Dérivabilité d'une fonction avec racine, étude complète"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x\sqrt{x}" /> (c&apos;est-à-dire <Math tex="f(x)=x^{\frac32}" />) définie sur{" "}
                  <Math tex="[0,+\infty[" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Étudier la dérivabilité de f en 0 (utiliser la définition). Que peut-on dire de la tangente en{" "}
                    <Math tex="O" /> ?
                  </li>
                  <li>Calculer <Math tex="f'(x)" /> pour <Math tex="x>0" /> et dresser le tableau de variation de f.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Pour <Math tex="x>0" /> :{" "}
                  <Math tex="\dfrac{f(x)-f(0)}{x-0}=\dfrac{x\sqrt x}{x}=\sqrt x\xrightarrow[x\to0^+]{}0" />.
                </p>
                <p className="font-semibold text-green-700">
                  f est dérivable à droite en 0, avec <Math tex="f_d'(0)=0" /> : la courbe admet une{" "}
                  <strong>tangente horizontale</strong> en <Math tex="O" /> (l&apos;axe des abscisses).
                </p>
                <p>
                  <strong>2)</strong> Pour <Math tex="x>0" />, <Math tex="f(x)=x^{\frac32}" />, donc{" "}
                  <Math tex="f'(x)=\dfrac32\,x^{\frac12}=\dfrac32\sqrt x" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f'(x)>0" /> pour tout <Math tex="x>0" /> : f est strictement croissante sur{" "}
                  <Math tex="[0,+\infty[" />, de <Math tex="f(0)=0" /> à <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=+\infty" />.
                </p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="Problème de synthèse — bijection, réciproque, convexité"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{x^3}{3}-x" /> définie sur <Math tex="I=[1,+\infty[" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Étudier le sens de variation de <Math tex="f" /> sur <Math tex="I" />, et montrer que{" "}
                    <Math tex="f" /> réalise une bijection de <Math tex="I" /> sur un intervalle <Math tex="J" /> à
                    préciser.
                  </li>
                  <li>
                    Montrer que <Math tex="f^{-1}" /> est dérivable en <Math tex="0=f(1)-1+1" />… plus précisément,
                    calculer <Math tex="\left(f^{-1}\right)'\left(-\dfrac23\right)" />.
                  </li>
                  <li>
                    Étudier la convexité de <Math tex="f" /> sur <Math tex="I" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f'(x)=x^2-1" />. Sur <Math tex="I=[1,+\infty[" /> :{" "}
                  <Math tex="f'(x)\ge0" />, nul seulement en <Math tex="x=1" />, donc <Math tex="f" /> est{" "}
                  <strong>strictement croissante</strong> sur <Math tex="I" />. Elle est continue (fonction
                  polynôme).
                </p>
                <p>
                  <Math tex="f(1)=\dfrac13-1=-\dfrac23" />, et <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=+\infty" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  f est une bijection de <Math tex="I=[1,+\infty[" /> sur <Math tex="J=\left[-\dfrac23,+\infty\right[" />
                  .
                </p>
                <p>
                  <strong>2)</strong> On veut <Math tex="\left(f^{-1}\right)'(y_0)" /> avec{" "}
                  <Math tex="y_0=-\dfrac23=f(1)" />, donc <Math tex="x_0=1" />. Comme{" "}
                  <Math tex="f'(1)=1-1=0" />&nbsp;:
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f'(1)=0" /> : <Math tex="f^{-1}" /> <strong>n&apos;est pas dérivable</strong> en{" "}
                  <Math tex="-\dfrac23" /> ; la courbe de <Math tex="f^{-1}" /> admet une tangente verticale en ce
                  point.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="f''(x)=2x" />. Sur <Math tex="I=[1,+\infty[" />,{" "}
                  <Math tex="f''(x)=2x>0" />.
                </p>
                <p className="font-semibold text-green-700">f est convexe sur I.</p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
