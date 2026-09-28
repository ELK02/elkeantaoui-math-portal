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
  title: "La fonction logarithme · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet de la fonction logarithme népérien pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : définition, propriétés algébriques, limites, dérivée logarithmique, étude de ln, et logarithme de base a, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 1",
  heroTitle: "La fonction logarithme",
  heroSubtitle:
    "Le logarithme népérien transforme les produits en sommes : définition comme primitive de 1/x, propriétés algébriques, limites de référence et étude complète de la fonction ln.",
  footerNote: "La fonction logarithme · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 1.",
  sections: [
    { id: "cours-definition", label: "Définition" },
    { id: "cours-algebrique", label: "Propriétés" },
    { id: "cours-composee", label: "Fonction ln(u)" },
    { id: "cours-base-a", label: "Base a" },
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
          { value: "7", label: "notions clés" },
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
            <Math tex="\ln" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="01 · Une primitive qui devient fonction de référence"
        title="Définition de la fonction logarithme népérien"
        tone="light"
        description="La fonction x↦1/x est continue sur ]0,+∞[ : elle admet donc des primitives. On choisit celle qui s'annule en 1."
      >
        <CourseBlock numeral="I" title="Définition">
          <Box title="Définition" tone="def">
            La fonction <Math tex="x\mapsto\dfrac1x" /> est continue sur <Math tex="]0,+\infty[" />, elle admet donc
            des primitives sur cet intervalle. On appelle{" "}
            <strong className="text-foreground">fonction logarithme népérien</strong>, notée <Math tex="\ln" />,
            l&apos;unique primitive de <Math tex="x\mapsto\dfrac1x" /> sur <Math tex="]0,+\infty[" /> qui
            s&apos;annule en <Math tex="1" /> : <Math tex="\ln(1)=0" /> et{" "}
            <Math tex="\forall x>0,\ (\ln x)'=\dfrac1x" />.
          </Box>
          <Callout variant="success" title="Conséquences immédiates">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\ln" /> est définie sur <Math tex="]0,+\infty[" />, dérivable donc continue sur cet
                intervalle.
              </li>
              <li>
                <Math tex="(\ln x)'=\dfrac1x>0" /> sur <Math tex="]0,+\infty[" /> donc <Math tex="\ln" /> est{" "}
                <strong>strictement croissante</strong>.
              </li>
              <li>
                Pour tous <Math tex="a,b>0" /> : <Math tex="a<b\iff\ln a<\ln b" /> et{" "}
                <Math tex="a=b\iff\ln a=\ln b" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Signe de ln x">
          <Box title="Propriété" tone="prop">
            Comme <Math tex="\ln" /> est strictement croissante et <Math tex="\ln(1)=0" /> :
          </Box>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[320px] border-collapse text-center text-sm">
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-semibold">x</td>
                  <td className="p-3">0</td>
                  <td className="p-3">⋯</td>
                  <td className="p-3">1</td>
                  <td className="p-3">⋯</td>
                  <td className="p-3">+∞</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">signe de ln x</td>
                  <td className="p-3">‖</td>
                  <td className="p-3">−</td>
                  <td className="p-3">0</td>
                  <td className="p-3">+</td>
                  <td className="p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground-muted">
            Autrement dit : <Math tex="\ln x<0" /> sur <Math tex="]0,1[" />, <Math tex="\ln x=0" /> en{" "}
            <Math tex="x=1" />, et <Math tex="\ln x>0" /> sur <Math tex="]1,+\infty[" />.
          </p>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PROPRIÉTÉS ALGÉBRIQUES ET LIMITES ===================== */}
      <LessonSection
        id="cours-algebrique"
        kicker="02 · Transformer un produit en somme"
        title="Propriétés algébriques et limites de référence"
        tone="muted"
        description="La propriété fondamentale ln(ab)=ln a+ln b transforme tous les calculs sur les produits, quotients et puissances."
      >
        <CourseBlock numeral="III" title="Propriétés algébriques">
          <Box title="Propriété (admise pour le produit)" tone="prop">
            Pour tous <Math tex="a>0" />, <Math tex="b>0" /> et <Math tex="r\in\mathbb Q" /> :
          </Box>
          <ul className="list-disc space-y-1.5 pl-5 text-sm sm:text-base">
            <li>
              <Math tex="\ln(ab)=\ln a+\ln b" />
            </li>
            <li>
              <Math tex="\ln\!\left(\dfrac1a\right)=-\ln a" />
            </li>
            <li>
              <Math tex="\ln\!\left(\dfrac ab\right)=\ln a-\ln b" />
            </li>
            <li>
              <Math tex="\ln(a^r)=r\ln a" />, en particulier <Math tex="\ln\sqrt a=\dfrac12\ln a" /> et{" "}
              <Math tex="\ln\sqrt[3]a=\dfrac13\ln a" />
            </li>
          </ul>
          <Callout variant="success" title="Exemple (avec ln 2≈0,7 et ln 3≈1,1)">
            <div className="space-y-1.5">
              <p>
                <Math tex="\ln12=\ln(4\times3)=2\ln2+\ln3\approx1,4+1,1=2,5" />.
              </p>
              <p>
                <Math tex="\ln\!\left(\dfrac18\right)=-3\ln2\approx-2,1" />.
              </p>
              <p>
                <Math tex="\ln\sqrt{18}=\dfrac12\ln(2\times9)=\dfrac12(\ln2+2\ln3)\approx\dfrac{2,9}{2}=1,45" />.
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Limites de référence">
          <Callout variant="success" title="À connaître par cœur">
            <div className="space-y-2">
              <p>
                <Math tex="\lim_{x\to+\infty}\ln x=+\infty" /> et <Math tex="\lim_{x\to0^+}\ln x=-\infty" />.
              </p>
              <p>
                <Math tex="\lim_{x\to0^+}x\ln x=0" /> et, plus généralement,{" "}
                <Math tex="\lim_{x\to0^+}x^n\ln x=0\ (n\in\mathbb N^*)" />.
              </p>
              <p>
                <Math tex="\lim_{x\to+\infty}\dfrac{\ln x}{x}=0" /> et{" "}
                <Math tex="\lim_{x\to+\infty}\dfrac{\ln x}{x^n}=0\ (n\in\mathbb N^*)" />.
              </p>
              <p>
                <Math tex="\lim_{x\to1}\dfrac{\ln x}{x-1}=1" /> et <Math tex="\lim_{x\to0}\dfrac{\ln(1+x)}{x}=1" />.
              </p>
            </div>
          </Callout>
          <Box title="Remarque" tone="def">
            La droite d&apos;équation <Math tex="x=0" /> est asymptote verticale à la courbe de <Math tex="\ln" />{" "}
            (car <Math tex="\lim_{x\to0^+}\ln x=-\infty" />). Comme <Math tex="\lim_{x\to+\infty}\dfrac{\ln x}x=0" />
            , la courbe admet une branche parabolique de direction l&apos;axe des abscisses en{" "}
            <Math tex="+\infty" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. FONCTION COMPOSÉE ln(u) ET ÉTUDE DE ln ===================== */}
      <LessonSection
        id="cours-composee"
        kicker="03 · Composer avec ln"
        title="Fonction ln(u), dérivée logarithmique et étude de ln"
        tone="light"
        description="En composant ln avec une fonction u, on obtient la dérivée logarithmique u'/u — omniprésente dans les études de fonctions."
      >
        <CourseBlock numeral="V" title="Fonction x ↦ ln(u(x))">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="u" /> une fonction dérivable et strictement positive sur un intervalle{" "}
            <Math tex="I" />. Alors <Math tex="f=\ln(u)" /> est dérivable sur <Math tex="I" /> et :
          </Box>
          <MathBlock tex="f'(x)=\dfrac{u'(x)}{u(x)}" />
          <Callout variant="success" title="Primitives de la forme u'/u">
            Les fonctions primitives de <Math tex="\dfrac{u'}{u}" /> sur un intervalle où <Math tex="u>0" /> sont
            les fonctions <Math tex="F(x)=\ln\big(u(x)\big)+c" />, <Math tex="c\in\mathbb R" />. (Si{" "}
            <Math tex="u" /> change de signe mais ne s&apos;annule pas, on utilise{" "}
            <Math tex="F(x)=\ln|u(x)|+c" />.)
          </Callout>
          <Box title="Exemple" tone="def">
            Soit <Math tex="f(x)=\ln(x^2+x)" /> sur <Math tex="]0,+\infty[" />. On a{" "}
            <Math tex="f'(x)=\dfrac{2x+1}{x^2+x}" />. Et les primitives de{" "}
            <Math tex="g(x)=\dfrac{5}{x-2}" /> sur <Math tex="]2,+\infty[" /> sont{" "}
            <Math tex="G(x)=5\ln(x-2)+c" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Étude complète de f(x)=ln x">
          <ul className="list-disc space-y-1.5 pl-5 text-sm sm:text-base">
            <li>
              Domaine : <Math tex="D_f=]0,+\infty[" />, continue et dérivable sur <Math tex="D_f" />.
            </li>
            <li>
              Limites : <Math tex="\lim_{x\to0^+}\ln x=-\infty" /> (asymptote verticale <Math tex="x=0" />),{" "}
              <Math tex="\lim_{x\to+\infty}\ln x=+\infty" /> (branche parabolique d&apos;axe <Math tex="(Ox)" />
              ).
            </li>
            <li>
              Dérivée : <Math tex="(\ln x)'=\dfrac1x>0" /> : <Math tex="\ln" /> est strictement croissante sur{" "}
              <Math tex="]0,+\infty[" />.
            </li>
          </ul>
          <Box title="Existence du nombre e" tone="prop">
            <Math tex="\ln" /> est continue et strictement croissante de <Math tex="]0,+\infty[" /> vers{" "}
            <Math tex="\mathbb R" />. D&apos;après le théorème des valeurs intermédiaires, l&apos;équation{" "}
            <Math tex="\ln x=1" /> admet une unique solution, notée <Math tex="e\approx2{,}718" /> (nombre
            irrationnel). On en déduit <Math tex="\ln e=1" />, <Math tex="\ln\!\left(\dfrac1e\right)=-1" /> et{" "}
            <Math tex="\ln(e^r)=r" /> pour tout <Math tex="r\in\mathbb Q" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. LOGARITHME DE BASE a ===================== */}
      <LessonSection
        id="cours-base-a"
        kicker="04 · Changer d'échelle"
        title="Fonction logarithme de base a"
        tone="muted"
        description="En divisant ln x par une constante ln a, on obtient toute une famille de logarithmes — dont le logarithme décimal, utile en sciences physiques."
      >
        <CourseBlock numeral="VII" title="Définition et propriétés">
          <Box title="Définition" tone="def">
            Soit <Math tex="a\in]0,1[\cup]1,+\infty[" />. La fonction logarithme de base <Math tex="a" />, notée{" "}
            <Math tex="\log_a" />, est définie sur <Math tex="]0,+\infty[" /> par :
          </Box>
          <MathBlock tex="\log_a(x)=\dfrac{\ln x}{\ln a}" />
          <Callout variant="success" title="Cas particuliers et propriétés">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="a=e" /> : <Math tex="\log_e x=\ln x" /> (logarithme népérien).
              </li>
              <li>
                <Math tex="a=10" /> : <Math tex="\log_{10}x" /> se note <Math tex="\log x" /> (logarithme
                décimal) ; <Math tex="\log(10^r)=r" />, <Math tex="\log1=0" />, <Math tex="\log10=1" />.
              </li>
              <li>
                <Math tex="\log_a(xy)=\log_ax+\log_ay" /> ; <Math tex="\log_a\!\left(\dfrac xy\right)=\log_ax-\log_ay" />
                ; <Math tex="\log_a(x^r)=r\log_ax" />.
              </li>
              <li>
                <Math tex="\log_a a=1" /> ; <Math tex="\log_a1=0" />.
              </li>
            </ul>
          </Callout>
          <Box title="Variations" tone="prop">
            <Math tex="(\log_ax)'=\dfrac{1}{x\ln a}" />. Le signe de la dérivée est celui de <Math tex="\ln a" /> :
            si <Math tex="a>1" />, <Math tex="\log_a" /> est strictement croissante ; si <Math tex="0<a<1" />,{" "}
            <Math tex="\log_a" /> est strictement décroissante.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · La fonction logarithme"
        tone="light"
        description="11 exercices corrigés : domaines de définition, équations et inéquations, propriétés algébriques, dérivée logarithmique, primitives, limites et logarithme de base a."
      >
        <ExerciseGroup
          total={11}
          celebrationTitle="Bravo, les 11 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre fonction logarithme est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Domaine de définition"
            itemsLabel="1 domaine"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer le domaine de définition de <Math tex="f(x)=\ln\left(x^2-3x+2\right)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f" /> est définie ssi <Math tex="x^2-3x+2>0" />. Le discriminant vaut{" "}
                  <Math tex="\Delta=9-8=1" />, les racines sont <Math tex="x=1" /> et <Math tex="x=2" />, donc{" "}
                  <Math tex="x^2-3x+2=(x-1)(x-2)" />.
                </p>
                <p>
                  Ce trinôme (coefficient dominant positif) est strictement positif à l&apos;extérieur des racines.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="D_f=\,]-\infty,1[\,\cup\,]2,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Domaine de définition (quotient)"
            itemsLabel="1 domaine"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer le domaine de définition de <Math tex="h(x)=\dfrac{x}{\ln x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Il faut <Math tex="x>0" /> (domaine de <Math tex="\ln" />) et <Math tex="\ln x\neq0" />, c&apos;est-à-dire{" "}
                  <Math tex="x\neq1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="D_h=\,]0,1[\,\cup\,]1,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Résoudre une équation simple"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\ln(x-2)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : <Math tex="x-2>0\iff x>2" />, donc <Math tex="D=\,]2,+\infty[" />.
                </p>
                <p>
                  <Math tex="\ln(x-2)=0=\ln(1)\iff x-2=1\iff x=3" />. Or <Math tex="3\in D" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="S=\{3\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Résoudre une équation avec deux ln"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\ln(3x-1)=\ln(5x-2)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : <Math tex="3x-1>0\iff x>\dfrac13" /> et <Math tex="5x-2>0\iff x>\dfrac25" />, donc{" "}
                  <Math tex="D=\,\left]\dfrac25,+\infty\right[" />.
                </p>
                <p>
                  Comme <Math tex="\ln" /> est strictement croissante (donc injective) :{" "}
                  <Math tex="\ln(3x-1)=\ln(5x-2)\iff3x-1=5x-2\iff x=\dfrac12" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac12>\dfrac25" /> donc <Math tex="\dfrac12\in D" /> : <Math tex="S=\left\{\dfrac12\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Résoudre une inéquation"
            itemsLabel="1 inéquation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;inéquation <Math tex="\ln(2x+1)\leqslant\ln(x+3)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : <Math tex="2x+1>0\iff x>-\dfrac12" /> et <Math tex="x+3>0\iff x>-3" />, donc{" "}
                  <Math tex="D=\,\left]-\dfrac12,+\infty\right[" />.
                </p>
                <p>
                  <Math tex="\ln" /> étant strictement croissante :{" "}
                  <Math tex="\ln(2x+1)\leqslant\ln(x+3)\iff2x+1\leqslant x+3\iff x\leqslant2" />.
                </p>
                <p className="font-semibold text-green-700">
                  En combinant avec le domaine : <Math tex="S=\,\left]-\dfrac12,2\right]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Simplifier avec ln 2 et ln 3"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On donne <Math tex="\ln2\approx0{,}7" /> et <Math tex="\ln3\approx1{,}1" />. Calculer{" "}
                <Math tex="\ln12" />, <Math tex="\ln\!\left(\dfrac18\right)" /> et <Math tex="\ln\sqrt{18}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\ln12=\ln(2^2\times3)=2\ln2+\ln3\approx1,4+1,1=2,5" />.
                </p>
                <p>
                  <Math tex="\ln\!\left(\dfrac18\right)=-\ln\left(2^3\right)=-3\ln2\approx-2,1" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\ln\sqrt{18}=\dfrac12\ln(2\times3^2)=\dfrac12(\ln2+2\ln3)\approx\dfrac{0,7+2,2}{2}=1,45" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Dérivée logarithmique"
            itemsLabel="1 dérivée"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\ln\left(x^2+1\right)" />. Déterminer le domaine de dérivabilité de{" "}
                <Math tex="f" /> et calculer <Math tex="f'(x)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="u(x)=x^2+1" /> est strictement positive pour tout <Math tex="x\in\mathbb R" />, donc{" "}
                  <Math tex="f" /> est dérivable sur <Math tex="\mathbb R" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u'(x)=2x" /> donc <Math tex="f'(x)=\dfrac{u'(x)}{u(x)}=\dfrac{2x}{x^2+1}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Primitive de la forme u'/u"
            itemsLabel="1 primitive"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les primitives de <Math tex="f(x)=\dfrac{2x-3}{x^2-3x+7}" /> sur <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Le trinôme <Math tex="u(x)=x^2-3x+7" /> a pour discriminant <Math tex="\Delta=9-28=-19<0" /> :
                  il est donc strictement positif sur <Math tex="\mathbb R" />.
                </p>
                <p>
                  Or <Math tex="u'(x)=2x-3" />, donc <Math tex="f=\dfrac{u'}{u}" /> avec <Math tex="u>0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="F(x)=\ln\left(x^2-3x+7\right)+c" />, <Math tex="c\in\mathbb R" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Limites de référence"
            itemsLabel="2 limites"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\dfrac{\ln x}{\sqrt x}" /> et{" "}
                <Math tex="\displaystyle\lim_{x\to0^+}x^2\ln x" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En posant <Math tex="t=\sqrt x" /> (donc <Math tex="x=t^2" />, <Math tex="\ln x=2\ln t" />), on a{" "}
                  <Math tex="\dfrac{\ln x}{\sqrt x}=\dfrac{2\ln t}{t}" />, et quand <Math tex="x\to+\infty" />,{" "}
                  <Math tex="t\to+\infty" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\lim_{x\to+\infty}\dfrac{\ln x}{\sqrt x}=\lim_{t\to+\infty}\dfrac{2\ln t}{t}=0" />
                  , et, par limite de référence, <Math tex="\lim_{x\to0^+}x^2\ln x=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Étude et inégalité classique"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\ln x-x+1" /> sur <Math tex="]0,+\infty[" />. Étudier les variations de{" "}
                <Math tex="f" /> et en déduire que <Math tex="\ln x\leqslant x-1" /> pour tout <Math tex="x>0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=\dfrac1x-1=\dfrac{1-x}{x}" />. Sur <Math tex="]0,+\infty[" />,{" "}
                  <Math tex="f'(x)" /> est du signe de <Math tex="1-x" /> : positif sur <Math tex="]0,1[" />,
                  négatif sur <Math tex="]1,+\infty[" />, nul en <Math tex="x=1" />.
                </p>
                <p>
                  <Math tex="f" /> admet donc un maximum en <Math tex="x=1" />, qui vaut{" "}
                  <Math tex="f(1)=\ln1-1+1=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\forall x>0,\ f(x)\leqslant f(1)=0" />, c&apos;est-à-dire{" "}
                  <Math tex="\ln x-x+1\leqslant0" />, soit <Math tex="\ln x\leqslant x-1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Logarithme de base a"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation <Math tex="\log_3(x+1)=2" />, puis calculer{" "}
                <Math tex="\log_39+\log_3\!\left(\dfrac13\right)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Domaine : <Math tex="x+1>0\iff x>-1" />.{" "}
                  <Math tex="\log_3(x+1)=2\iff x+1=3^2=9\iff x=8" />. Or <Math tex="8>-1" />.
                </p>
                <p>
                  Donc <Math tex="S=\{8\}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\log_39=\log_3\left(3^2\right)=2" /> et{" "}
                  <Math tex="\log_3\!\left(\dfrac13\right)=\log_3\left(3^{-1}\right)=-1" />, donc la somme vaut{" "}
                  <Math tex="2+(-1)=1" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
