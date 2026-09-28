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
  title: "Limites d'une fonction · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur les limites d'une fonction pour la 1ère année Baccalauréat Sciences Mathématiques : définition formelle (ε-α), limite finie/infinie en un point et à l'infini, asymptotes, opérations sur les limites et formes indéterminées, limites des fonctions polynômes et rationnelles à l'infini, limites trigonométriques fondamentales, introduction à la continuité, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Limites d'une fonction",
  heroSubtitle:
    "La définition rigoureuse (ε-α) derrière l'intuition, et les techniques qui lèvent toutes les formes indéterminées : factorisation, quantité conjuguée, termes dominants, limites trigonométriques.",
  footerNote: "Limites d'une fonction · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
  sections: [
    { id: "cours-definition", label: "Définition formelle" },
    { id: "cours-asymptotes", label: "Asymptotes" },
    { id: "cours-operations", label: "Opérations, formes indéterminées" },
    { id: "cours-poly-trigo", label: "Polynômes, trigonométrie" },
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
          { value: "3", label: "limites trigonométriques" },
          { value: "6", label: "exercices corrigés" },
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
          <div className="relative flex select-none items-center font-serif text-white italic">
            <Math tex="\lim_{x\to a}f(x)" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITION FORMELLE ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · Rendre l'intuition rigoureuse"
        title="Définition formelle de la limite"
        tone="light"
        description="Derrière « f(x) se rapproche de l se sert une formule précise avec ε et α — c'est elle qui permet de tout démontrer."
      >
        <CourseBlock numeral="I" title="Limite finie en un point">
          <Box title="Définition (ε-α)" tone="def">
            <p>
              Soit <Math tex="f" /> définie sur un intervalle pointé de centre <Math tex="a" />, et{" "}
              <Math tex="\ell\in\mathbb R" />. On dit que <Math tex="f" /> tend vers <Math tex="\ell" /> quand{" "}
              <Math tex="x" /> tend vers <Math tex="a" /> si :
            </p>
            <MathBlock tex="(\forall\varepsilon>0)(\exists\alpha>0)(\forall x\in D_f)\big(0<|x-a|<\alpha\Rightarrow|f(x)-\ell|<\varepsilon\big)" />
            <p>
              On note <Math tex="\displaystyle\lim_{x\to a}f(x)=\ell" />. (Cela équivaut à{" "}
              <Math tex="\displaystyle\lim_{x\to a}\big(f(x)-\ell\big)=0" />.)
            </p>
          </Box>
          <Callout variant="success" title="Propriétés utiles pour démontrer une limite">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="|f(x)-\ell|\le u(x)" /> au voisinage de <Math tex="a" /> et{" "}
                <Math tex="\lim_{x\to a}u(x)=0" />, alors <Math tex="\lim_{x\to a}f(x)=\ell" />.
              </li>
              <li>
                <strong>Théorème des gendarmes :</strong> si <Math tex="g(x)\le f(x)\le h(x)" /> et{" "}
                <Math tex="\lim g=\lim h=\ell" /> au voisinage de <Math tex="a" />, alors{" "}
                <Math tex="\lim_{x\to a}f(x)=\ell" />.
              </li>
              <li>
                Si <Math tex="f" /> admet une limite en <Math tex="a" />, cette limite est{" "}
                <strong>unique</strong>.
              </li>
            </ul>
          </Callout>
          <Box title="Limite à droite / à gauche" tone="prop">
            <MathBlock tex="\lim_{x\to a}f(x)=\ell\iff\lim_{x\to a^+}f(x)=\ell\ \text{et}\ \lim_{x\to a^-}f(x)=\ell" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Limite infinie, limite à l'infini">
          <Box title="Les quatre autres cas (schéma commun)" tone="def">
            <p>
              Chaque cas remplace la condition <Math tex="|x-a|<\alpha" /> ou <Math tex="|f(x)-\ell|<\varepsilon" />{" "}
              par sa version « infinie » :
            </p>
            <MathBlock tex="\lim_{x\to a}f(x)=+\infty\iff(\forall A>0)(\exists\alpha>0)(0<|x-a|<\alpha\Rightarrow f(x)>A)" />
            <MathBlock tex="\lim_{x\to+\infty}f(x)=\ell\iff(\forall\varepsilon>0)(\exists B>0)(x>B\Rightarrow|f(x)-\ell|<\varepsilon)" />
            <MathBlock tex="\lim_{x\to+\infty}f(x)=+\infty\iff(\forall A>0)(\exists B>0)(x>B\Rightarrow f(x)>A)" />
            <p>
              (Et de même pour <Math tex="-\infty" />, en adaptant les inégalités.)
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. ASYMPTOTES ===================== */}
      <LessonSection
        id="cours-asymptotes"
        kicker="02 · L'interprétation géométrique"
        title="Asymptotes verticale et horizontale"
        tone="muted"
        description="Chaque type de limite infinie ou à l'infini se lit directement sur la courbe."
      >
        <CourseBlock numeral="III" title="Définitions">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Asymptote verticale" tone="def">
              <p>
                Si <Math tex="\lim_{x\to a^+}f(x)" /> ou <Math tex="\lim_{x\to a^-}f(x)" /> vaut{" "}
                <Math tex="\pm\infty" />, alors <Math tex="x=a" /> est asymptote verticale à{" "}
                <Math tex="C_f" />.
              </p>
            </Box>
            <Box title="Asymptote horizontale" tone="def">
              <p>
                Si <Math tex="\lim_{x\to+\infty}f(x)=\ell" /> ou <Math tex="\lim_{x\to-\infty}f(x)=\ell" />,
                alors <Math tex="y=\ell" /> est asymptote horizontale à <Math tex="C_f" />.
              </p>
            </Box>
          </div>
          <Callout variant="warning" title="Position de la courbe par rapport à l'asymptote horizontale">
            Le signe de <Math tex="f(x)-\ell" /> donne la position : positif → <Math tex="C_f" /> au-dessus,
            négatif → en dessous.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. OPÉRATIONS ===================== */}
      <LessonSection
        id="cours-operations"
        kicker="03 · Le tableau à retenir"
        title="Opérations sur les limites, formes indéterminées"
        tone="light"
        description="Somme, produit, quotient se comportent presque toujours comme prévu — sauf dans quatre cas, les formes indéterminées, qu'il faut toujours lever par le calcul."
      >
        <CourseBlock numeral="IV" title="Les quatre formes indéterminées">
          <Callout variant="warning" title="À repérer immédiatement">
            <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
              <p>
                <Math tex="\infty-\infty" />
              </p>
              <p>
                <Math tex="0\times\infty" />
              </p>
              <p>
                <Math tex="\dfrac{\infty}{\infty}" />
              </p>
              <p>
                <Math tex="\dfrac00" />
              </p>
            </div>
            <p className="mt-2">
              Dans ces quatre cas, on ne peut <strong>rien conclure directement</strong> : il faut transformer
              l&apos;expression (factoriser, mettre le terme dominant en facteur, multiplier par la quantité
              conjuguée…) avant de reprendre la limite.
            </p>
          </Callout>
          <Box title="Le reste des cas se traite sans ambiguïté" tone="def">
            <p>
              Par exemple <Math tex="\ell+\infty=+\infty" />, <Math tex="\ell\times(+\infty)=+\infty" /> si{" "}
              <Math tex="\ell>0" />, <Math tex="\dfrac{\ell}{0^+}=+\infty" /> si <Math tex="\ell>0" />, etc. —
              ces règles se retrouvent en revenant à l&apos;intuition (« un nombre fini plus l&apos;infini reste
              infini »).
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. POLYNÔMES, TRIGO ===================== */}
      <LessonSection
        id="cours-poly-trigo"
        kicker="04 · Deux familles à connaître par cœur"
        title="Polynômes/fractions rationnelles à l'infini, limites trigonométriques"
        tone="muted"
        description="Un raccourci pour les polynômes et fractions rationnelles, et trois limites fondamentales prouvées géométriquement à partir des aires sur le cercle trigonométrique."
      >
        <CourseBlock numeral="V" title="Limites en ±∞ d'un polynôme ou d'une fraction rationnelle">
          <Callout variant="success" title="La règle du terme dominant">
            <p>
              En <Math tex="\pm\infty" />, la limite d&apos;une fonction polynôme est celle de son terme de{" "}
              <strong>plus haut degré</strong>, et la limite d&apos;une fraction rationnelle est celle du{" "}
              <strong>rapport des termes de plus haut degré</strong> du numérateur et du dénominateur.
            </p>
            <MathBlock tex="\lim_{x\to+\infty}\big(a_nx^n+\cdots+a_0\big)=\lim_{x\to+\infty}a_nx^n" />
            <MathBlock tex="\lim_{x\to\pm\infty}\dfrac{a_nx^n+\cdots}{b_mx^m+\cdots}=\lim_{x\to\pm\infty}\dfrac{a_nx^n}{b_mx^m}" />
          </Callout>
          <Box title="Exemple" tone="def">
            <MathBlock tex="\lim_{x\to+\infty}\dfrac{7x^3+2x^2+8}{3x^4+2x^2-5x}=\lim_{x\to+\infty}\dfrac{7x^3}{3x^4}=\lim_{x\to+\infty}\dfrac{7}{3x}=0" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Limites trigonométriques fondamentales">
          <Box title="Idée de la preuve géométrique" tone="def">
            <p>
              Pour <Math tex="x\in\left]0,\dfrac\pi2\right[" />, en comparant les aires du triangle{" "}
              <Math tex="OAB" />, du secteur circulaire, et du triangle <Math tex="OAT" /> (tangente en{" "}
              <Math tex="A" />) on obtient <Math tex="\sin x\le x\le\tan x" />, d&apos;où{" "}
              <Math tex="|\sin x|\le|x|\le|\tan x|" /> sur <Math tex="\left]-\dfrac\pi2,\dfrac\pi2\right[" />.
              Le théorème des gendarmes donne ensuite les trois limites.
            </p>
          </Box>
          <Callout variant="success" title="Les trois limites à connaître par cœur">
            <MathBlock tex="\lim_{x\to0}\dfrac{\sin x}{x}=1,\qquad \lim_{x\to0}\dfrac{\tan x}{x}=1,\qquad \lim_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Introduction à la continuité">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="f" /> est <strong className="text-foreground">continue</strong> en <Math tex="a" />{" "}
              si elle admet en <Math tex="a" /> une limite finie égale à <Math tex="f(a)" /> :
            </p>
            <MathBlock tex="f\text{ continue en }a\iff\lim_{x\to a}f(x)=f(a)" />
            <p>
              Toute fonction polynôme est continue partout ; toute fonction rationnelle est continue en tout
              point de son domaine ; <Math tex="\sin" /> et <Math tex="\cos" /> sont continues partout.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Limites d'une fonction"
        tone="light"
        description="6 exercices corrigés couvrant les formes indéterminées 0/0, la quantité conjuguée, les fractions rationnelles à l'infini, les limites trigonométriques, un raccord de limites, et la forme ∞−∞."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre limites d'une fonction est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Forme 0/0 par factorisation"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x^2-3x+2}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  C&apos;est une forme <Math tex="\dfrac00" />. On factorise :{" "}
                  <Math tex="x^2-4=(x-2)(x+2)" /> et <Math tex="x^2-3x+2=(x-2)(x-1)" />.
                </p>
                <MathBlock tex="\dfrac{x^2-4}{x^2-3x+2}=\dfrac{(x-2)(x+2)}{(x-2)(x-1)}=\dfrac{x+2}{x-1}\quad(x\neq2)" />
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x^2-3x+2}=\dfrac{2+2}{2-1}=4" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Forme 0/0 par la quantité conjuguée"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to0}\dfrac{\sqrt{1+x}-1}{x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>On multiplie par la quantité conjuguée :</p>
                <MathBlock tex="\dfrac{\sqrt{1+x}-1}{x}=\dfrac{(\sqrt{1+x}-1)(\sqrt{1+x}+1)}{x(\sqrt{1+x}+1)}=\dfrac{(1+x)-1}{x(\sqrt{1+x}+1)}=\dfrac{1}{\sqrt{1+x}+1}" />
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{x\to0}\dfrac{\sqrt{1+x}-1}{x}=\dfrac1{1+1}=\dfrac12" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Fraction rationnelle à l'infini"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{3x^3+2x^2+8}{2x^4+5x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On garde les termes de plus haut degré au numérateur et au dénominateur :
                </p>
                <MathBlock tex="\lim_{x\to+\infty}\dfrac{3x^3+2x^2+8}{2x^4+5x}=\lim_{x\to+\infty}\dfrac{3x^3}{2x^4}=\lim_{x\to+\infty}\dfrac3{2x}" />
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{3x^3+2x^2+8}{2x^4+5x}=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Limite trigonométrique"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to0}\dfrac{\sin5x}{\tan3x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>On fait apparaître les deux limites de référence :</p>
                <MathBlock tex="\dfrac{\sin5x}{\tan3x}=\dfrac{5x}{3x}\times\dfrac{\dfrac{\sin5x}{5x}}{\dfrac{\tan3x}{3x}}=\dfrac53\times\dfrac{\dfrac{\sin5x}{5x}}{\dfrac{\tan3x}{3x}}" />
                <p>
                  Or <Math tex="\dfrac{\sin5x}{5x}\to1" /> et <Math tex="\dfrac{\tan3x}{3x}\to1" /> quand{" "}
                  <Math tex="x\to0" /> (en posant <Math tex="u=5x" /> et <Math tex="v=3x" />, qui tendent vers{" "}
                  <Math tex="0" /> aussi).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{x\to0}\dfrac{\sin5x}{\tan3x}=\dfrac53" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Raccord de limites (fonction définie par morceaux)"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="g(x)=2x^2-x+3" /> si <Math tex="x\ge1" />, et{" "}
                <Math tex="g(x)=-x^2+x+\alpha" /> si <Math tex="x<1" />. Déterminer <Math tex="\alpha" />{" "}
                pour que <Math tex="g" /> admette une limite en <Math tex="1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Les deux morceaux sont polynomiaux, donc continus : il suffit d&apos;égaler les limites à
                  droite et à gauche de <Math tex="1" />.
                </p>
                <MathBlock tex="\lim_{x\to1^+}g(x)=2(1)^2-1+3=4" />
                <MathBlock tex="\lim_{x\to1^-}g(x)=-(1)^2+1+\alpha=\alpha" />
                <p>Pour que <Math tex="g" /> admette une limite en <Math tex="1" />, il faut <Math tex="\alpha=4" />.</p>
                <p className="font-semibold text-green-700">
                  <Math tex="\alpha=4" /> (et dans ce cas, <Math tex="\displaystyle\lim_{x\to1}g(x)=4" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Forme ∞ − ∞ par la quantité conjuguée"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  C&apos;est une forme <Math tex="\infty-\infty" />. On multiplie par la quantité conjuguée :
                </p>
                <MathBlock tex="\sqrt{x^2+x}-x=\dfrac{\big(\sqrt{x^2+x}-x\big)\big(\sqrt{x^2+x}+x\big)}{\sqrt{x^2+x}+x}=\dfrac{(x^2+x)-x^2}{\sqrt{x^2+x}+x}=\dfrac{x}{\sqrt{x^2+x}+x}" />
                <p>
                  Pour <Math tex="x>0" />, en factorisant par <Math tex="x" /> sous la racine (
                  <Math tex="\sqrt{x^2+x}=x\sqrt{1+\frac1x}" />) :
                </p>
                <MathBlock tex="\dfrac{x}{\sqrt{x^2+x}+x}=\dfrac{x}{x\left(\sqrt{1+\frac1x}+1\right)}=\dfrac{1}{\sqrt{1+\frac1x}+1}" />
                <p className="font-semibold text-green-700">
                  <Math tex="\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^2+x}-x\big)=\dfrac1{1+1}=\dfrac12" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
