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
  title: "Étude des fonctions numériques · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur l'étude des fonctions numériques pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : branches infinies, asymptotes verticale/horizontale/oblique, branches paraboliques, concavité et points d'inflexion, éléments de symétrie d'une courbe, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 2",
  heroTitle: "Étude des fonctions numériques",
  heroSubtitle:
    "Décrire précisément l'allure d'une courbe à l'infini et sa forme locale : asymptotes, branches paraboliques, concavité, symétries.",
  footerNote: "Étude des fonctions numériques · Mathématiques, 1ère année Baccalauréat, semestre 2.",
  sections: [
    { id: "cours-branches-infinies", label: "Branches infinies" },
    { id: "cours-concavite", label: "Concavité" },
    { id: "cours-symetrie", label: "Symétrie" },
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

/** Small labeled SVG sketch of a branch-infinie type. */
function Figure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-muted p-3">
      <svg role="img" aria-label="Figure 1 — Étude des fonctions numériques" viewBox="0 0 160 120" className="h-28 w-full">
        {children}
      </svg>
      <figcaption className="text-center text-xs text-foreground-subtle">{caption}</figcaption>
    </figure>
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
          { value: "3", label: "types d'asymptotes" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-branches-infinies"
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
            <Math tex="y=ax+b" />
          </div>
        }
      />

      {/* ===================== I. BRANCHES INFINIES ===================== */}
      <LessonSection
        id="cours-branches-infinies"
        kicker="01 · Le comportement de la courbe à l'infini"
        title="Asymptotes et branches paraboliques"
        tone="light"
        description="Quand x ou f(x) tend vers l'infini, la courbe admet une branche infinie — il en existe quatre types, entièrement caractérisés par des limites."
      >
        <CourseBlock numeral="I.1" title="Asymptote verticale, asymptote horizontale">
          <Box title="Définitions" tone="def">
            <p>
              Soit <Math tex="f" /> une fonction numérique et <Math tex="a,b\in\mathbb R" />.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\displaystyle\lim_{x\to\infty}f(x)=b" />, alors <Math tex="C_f" /> admet une{" "}
                <strong className="text-foreground">asymptote horizontale</strong> d&apos;équation{" "}
                <Math tex="y=b" />.
              </li>
              <li>
                Si <Math tex="\displaystyle\lim_{x\to a}f(x)=\infty" />, alors <Math tex="C_f" /> admet une{" "}
                <strong className="text-foreground">asymptote verticale</strong> d&apos;équation{" "}
                <Math tex="x=a" />.
              </li>
            </ul>
          </Box>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="f(x)=\dfrac{2x}{x-1}" /> : <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=2" /> donc{" "}
              <Math tex="C_f" /> admet l&apos;asymptote horizontale <Math tex="y=2" />, et{" "}
              <Math tex="\displaystyle\lim_{x\to1^+}f(x)=+\infty" /> donc <Math tex="C_f" /> admet l&apos;asymptote
              verticale <Math tex="x=1" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="I.2" title="Asymptote oblique">
          <Callout variant="success" title="Définition et propriété pratique">
            <p>
              La droite <Math tex="y=ax+b" /> (<Math tex="a\neq0" />) est une{" "}
              <strong>asymptote oblique</strong> de <Math tex="C_f" /> au voisinage de <Math tex="\infty" /> ssi :
            </p>
            <MathBlock tex="\lim_{x\to\infty}\big(f(x)-(ax+b)\big)=0" />
            <p>En pratique, pour la déterminer :</p>
            <MathBlock tex="a=\lim_{x\to\infty}\dfrac{f(x)}{x},\qquad b=\lim_{x\to\infty}\big(f(x)-ax\big)" />
          </Callout>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="f(x)=2x-3+\dfrac{3}{x^2}" /> : comme{" "}
              <Math tex="\displaystyle\lim_{x\to\infty}\big(f(x)-(2x-3)\big)=\lim_{x\to\infty}\dfrac{3}{x^2}=0" />
              , la droite <Math tex="y=2x-3" /> est asymptote oblique à <Math tex="C_f" /> aux deux voisinages.
            </p>
          </Box>
          <Box title="Position relative de Cf et de l'asymptote" tone="def">
            <p>
              Le signe de <Math tex="f(x)-(ax+b)" /> donne la position de <Math tex="C_f" /> par rapport à{" "}
              <Math tex="(\Delta):y=ax+b" /> : positif → <Math tex="C_f" /> au-dessus, négatif → en dessous, nul →
              elles se coupent.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="I.3" title="Branches paraboliques">
          <Box title="Définitions" tone="def">
            <p>
              Si <Math tex="\displaystyle\lim_{x\to\infty}f(x)=\infty" />, on étudie{" "}
              <Math tex="\displaystyle\lim_{x\to\infty}\dfrac{f(x)}{x}" /> :
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Si cette limite vaut <Math tex="0" /> : branche parabolique de direction l&apos;axe des abscisses.
              </li>
              <li>
                Si cette limite vaut <Math tex="\infty" /> : branche parabolique de direction l&apos;axe des
                ordonnées.
              </li>
              <li>
                Si cette limite vaut <Math tex="a\in\mathbb R^*" /> <strong>et</strong>{" "}
                <Math tex="\displaystyle\lim_{x\to\infty}\big(f(x)-ax\big)=\infty" /> : branche parabolique de
                direction la droite <Math tex="y=ax" />.
              </li>
            </ul>
          </Box>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Figure caption="Direction : axe des abscisses">
              <path d="M10,105 Q60,100 150,20" fill="none" stroke="#0f766e" strokeWidth="2.5" />
              <line x1="10" y1="105" x2="150" y2="105" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="15" y1="10" x2="15" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
            </Figure>
            <Figure caption="Direction : axe des ordonnées">
              <path d="M15,105 Q40,60 55,10" fill="none" stroke="#0f766e" strokeWidth="2.5" />
              <line x1="10" y1="105" x2="150" y2="105" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="15" y1="10" x2="15" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
            </Figure>
            <Figure caption="Direction : la droite y = ax">
              <line x1="15" y1="105" x2="150" y2="20" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M15,105 Q80,85 150,10" fill="none" stroke="#0f766e" strokeWidth="2.5" />
              <line x1="10" y1="105" x2="150" y2="105" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="15" y1="10" x2="15" y2="110" stroke="#94a3b8" strokeWidth="1.5" />
            </Figure>
          </div>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. CONCAVITÉ ===================== */}
      <LessonSection
        id="cours-concavite"
        kicker="02 · La forme locale de la courbe"
        title="Concavité, convexité, point d'inflexion"
        tone="muted"
        description="Le signe de la dérivée seconde décrit si la courbe est au-dessus ou en dessous de ses tangentes."
      >
        <CourseBlock numeral="II" title="Concavité et point d'inflexion">
          <Box title="Définitions" tone="def">
            <p>
              Soit <Math tex="f" /> deux fois dérivable sur un intervalle ouvert <Math tex="I" />.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="C_f" /> est <strong className="text-foreground">convexe</strong> sur <Math tex="I" />{" "}
                si elle est au-dessus de toutes ses tangentes sur <Math tex="I" />.
              </li>
              <li>
                <Math tex="C_f" /> est <strong className="text-foreground">concave</strong> sur <Math tex="I" />{" "}
                si elle est au-dessous de toutes ses tangentes sur <Math tex="I" />.
              </li>
              <li>
                <Math tex="A(a,f(a))" /> est un <strong className="text-foreground">point d&apos;inflexion</strong>{" "}
                si <Math tex="C_f" /> change de concavité en <Math tex="a" /> — la tangente y traverse la courbe.
              </li>
            </ul>
          </Box>
          <Callout variant="success" title="Propriété (le critère pratique)">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="f''(x)\geq0" /> sur <Math tex="I" />, alors <Math tex="C_f" /> est convexe sur{" "}
                <Math tex="I" />.
              </li>
              <li>
                Si <Math tex="f''(x)\leq0" /> sur <Math tex="I" />, alors <Math tex="C_f" /> est concave sur{" "}
                <Math tex="I" />.
              </li>
              <li>
                Si <Math tex="f''" /> s&apos;annule <strong>en changeant de signe</strong> en <Math tex="a" />,
                alors <Math tex="A(a,f(a))" /> est un point d&apos;inflexion de <Math tex="C_f" />.
              </li>
            </ul>
          </Callout>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="f(x)=x^3-3x^2+x+1" /> : <Math tex="f''(x)=6x-6=6(x-1)" />, qui s&apos;annule en changeant
              de signe en <Math tex="x=1" />. Donc <Math tex="A(1,f(1))" /> est un point d&apos;inflexion de{" "}
              <Math tex="C_f" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. SYMÉTRIE ===================== */}
      <LessonSection
        id="cours-symetrie"
        kicker="03 · Diviser le travail par deux"
        title="Éléments de symétrie d'une courbe"
        tone="light"
        description="Un axe ou un centre de symétrie réduit l'étude d'une fonction à la moitié de son domaine."
      >
        <CourseBlock numeral="III.1" title="Axe de symétrie">
          <Box title="Propriété" tone="def">
            <p>
              La droite <Math tex="x=a" /> est un <strong className="text-foreground">axe de symétrie</strong> de{" "}
              <Math tex="C_f" /> (<Math tex="f" /> définie sur <Math tex="D" />) ssi :
            </p>
            <MathBlock tex="\begin{gathered}(\forall x\in D)\ 2a-x\in D \\ (\forall x\in D)\ f(2a-x)=f(x)\end{gathered}" />
          </Box>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="f(x)=\cos x" /> : <Math tex="f(2\pi-x)=\cos(2\pi-x)=\cos(-x)=\cos x=f(x)" />, donc{" "}
              <Math tex="x=\pi" /> est un axe de symétrie de <Math tex="C_f" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III.2" title="Centre de symétrie">
          <Box title="Propriété" tone="def">
            <p>
              Le point <Math tex="I(a,b)" /> est un{" "}
              <strong className="text-foreground">centre de symétrie</strong> de <Math tex="C_f" /> ssi :
            </p>
            <MathBlock tex="\begin{gathered}(\forall x\in D)\ 2a-x\in D \\ (\forall x\in D)\ f(2a-x)+f(x)=2b\end{gathered}" />
          </Box>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="f(x)=x^3-3x+3" /> : <Math tex="f(-x)=-x^3+3x+3=6-f(x)" />, donc{" "}
              <Math tex="f(-x)+f(x)=6=2\times3" /> : le point <Math tex="I(0,3)" /> est centre de symétrie de{" "}
              <Math tex="C_f" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Étude des fonctions numériques"
        tone="muted"
        description="6 exercices corrigés couvrant asymptotes, branches paraboliques, concavité et symétrie."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre étude des fonctions numériques est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Asymptotes verticale et horizontale"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{2x-1}{3x-6}" />. Déterminer les limites de <Math tex="f" /> aux
                bornes de <Math tex="D_f" /> et en déduire les asymptotes de <Math tex="C_f" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D_f=\mathbb R\setminus\{2\}" />.
                </p>
                <MathBlock tex="\lim_{x\to2^+}f(x)=+\infty,\qquad \lim_{x\to2^-}f(x)=-\infty" />
                <p className="font-semibold text-green-700">
                  Donc la droite <Math tex="x=2" /> est une asymptote verticale à <Math tex="C_f" />.
                </p>
                <MathBlock tex="\lim_{x\to+\infty}f(x)=\lim_{x\to-\infty}f(x)=\lim_{x\to\infty}\dfrac{2x}{3x}=\dfrac23" />
                <p className="font-semibold text-green-700">
                  Donc la droite <Math tex="y=\dfrac23" /> est une asymptote horizontale à <Math tex="C_f" /> aux
                  deux voisinages.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Asymptote oblique"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=2x-1+\dfrac{1}{x-3}" /> (<Math tex="x\neq3" />). Montrer que <Math tex="C_f" />{" "}
                admet une asymptote oblique aux deux voisinages de l&apos;infini que l&apos;on déterminera.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f(x)-(2x-1)=\dfrac{1}{x-3}" />, donc :
                </p>
                <MathBlock tex="\lim_{x\to+\infty}\big(f(x)-(2x-1)\big)=\lim_{x\to-\infty}\big(f(x)-(2x-1)\big)=\lim_{x\to\infty}\dfrac{1}{x-3}=0" />
                <p className="font-semibold text-green-700">
                  Donc la droite <Math tex="y=2x-1" /> est une asymptote oblique à <Math tex="C_f" /> au
                  voisinage de <Math tex="+\infty" /> et de <Math tex="-\infty" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Position relative avec l'asymptote"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=2+\dfrac{x-1}{x^2}" /> (<Math tex="x\neq0" />). Montrer que <Math tex="y=2" />{" "}
                est asymptote horizontale à <Math tex="C_f" />, puis étudier la position de <Math tex="C_f" />{" "}
                par rapport à cette asymptote.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\lim_{x\to+\infty}f(x)=\lim_{x\to-\infty}f(x)=2+\lim_{x\to\infty}\dfrac{x-1}{x^2}=2" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="y=2" /> est une asymptote horizontale à <Math tex="C_f" /> aux deux voisinages.
                </p>
                <p>
                  Position : <Math tex="f(x)-2=\dfrac{x-1}{x^2}" />, de signe celui de <Math tex="x-1" /> (car{" "}
                  <Math tex="x^2>0" />).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="C_f" /> est au-dessous de <Math tex="y=2" /> sur{" "}
                  <Math tex="]-\infty,0[\cup]0,1[" />, coupe <Math tex="y=2" /> au point <Math tex="(1,2)" />, et
                  est au-dessus de <Math tex="y=2" /> sur <Math tex="]1,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Branche parabolique"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x+\sqrt x" /> définie sur <Math tex="[0,+\infty[" />. Étudier la branche
                infinie de <Math tex="C_f" /> au voisinage de <Math tex="+\infty" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\lim_{x\to+\infty}f(x)=+\infty,\qquad \lim_{x\to+\infty}\dfrac{f(x)}{x}=\lim_{x\to+\infty}\left(1+\dfrac{1}{\sqrt x}\right)=1" />
                <p>Mais :</p>
                <MathBlock tex="\lim_{x\to+\infty}\big(f(x)-x\big)=\lim_{x\to+\infty}\sqrt x=+\infty" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="C_f" /> admet une branche parabolique de direction la droite{" "}
                  <Math tex="y=x" /> au voisinage de <Math tex="+\infty" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Concavité et points d'inflexion"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{1}{12}x^4-2x^2+x+\dfrac23" />. Calculer <Math tex="f''(x)" />, étudier
                son signe et en déduire la concavité de <Math tex="C_f" /> et ses points d&apos;inflexion.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="f'(x)=\dfrac13x^3-4x+1,\qquad f''(x)=x^2-4=(x-2)(x+2)" />
                <p>
                  <Math tex="f''(x)=0\iff x=-2" /> ou <Math tex="x=2" />, avec <Math tex="f''\geq0" /> à
                  l&apos;extérieur de <Math tex="[-2,2]" /> et <Math tex="f''\leq0" /> sur <Math tex="[-2,2]" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="C_f" /> est convexe sur <Math tex="]-\infty,-2]\cup[2,+\infty[" />, concave sur{" "}
                  <Math tex="[-2,2]" />, et <Math tex="f''" /> change de signe en <Math tex="\pm2" /> :{" "}
                  <Math tex="A(-2,-8)" /> et <Math tex="B(2,-4)" /> sont les points d&apos;inflexion de{" "}
                  <Math tex="C_f" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Centre de symétrie"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{x^2-x}{x+1}" /> (<Math tex="x\neq-1" />). Montrer que{" "}
                <Math tex="\Omega(-1,-3)" /> est un centre de symétrie de <Math tex="C_f" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D_f=\mathbb R\setminus\{-1\}" />. Si <Math tex="x\neq-1" /> alors{" "}
                  <Math tex="2(-1)-x=-2-x\neq-1" />, donc <Math tex="-2-x\in D_f" />.
                </p>
                <p>
                  On écrit d&apos;abord <Math tex="f(x)=x-2+\dfrac{2}{x+1}" />. Alors :
                </p>
                <MathBlock tex="f(-2-x)+f(x)=(-2-x-2)+\dfrac{2}{-1-x}+(x-2)+\dfrac{2}{x+1}=-6+\dfrac{2}{x+1}-\dfrac{2}{x+1}=-6" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(-2-x)+f(x)=-6=2\times(-3)" /> pour tout <Math tex="x\neq-1" /> : le point{" "}
                  <Math tex="\Omega(-1,-3)" /> est un centre de symétrie de <Math tex="C_f" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
