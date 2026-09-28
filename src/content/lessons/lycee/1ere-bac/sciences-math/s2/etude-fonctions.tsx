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
  title: "Étude des fonctions · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur l'étude des fonctions pour la 1ère année Baccalauréat Sciences Mathématiques : concavité et points d'inflexion via la dérivée seconde, centre et axe de symétrie de la courbe, branches infinies (asymptote verticale, horizontale, oblique) et branches paraboliques avec les trois cas particuliers, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "Étude des fonctions",
  heroSubtitle:
    "La dérivée seconde révèle la forme locale de la courbe, et un système de limites précise entièrement son comportement à l'infini.",
  footerNote: "Étude des fonctions · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
  sections: [
    { id: "cours-concavite", label: "Concavité" },
    { id: "cours-symetrie", label: "Symétrie" },
    { id: "cours-branches", label: "Branches infinies" },
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
          { value: "3", label: "types de branches infinies" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-concavite"
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
            <Math tex="f''(x)" />
          </div>
        }
      />

      {/* ===================== I. CONCAVITÉ ===================== */}
      <LessonSection
        id="cours-concavite"
        kicker="01 · La forme locale de la courbe"
        title="Concavité, convexité, points d'inflexion"
        tone="light"
        description="Le signe de la dérivée seconde décrit si la courbe est au-dessus ou en dessous de ses tangentes."
      >
        <CourseBlock numeral="I" title="Position de la courbe par rapport à ses tangentes">
          <Box title="Propriété et définition" tone="def">
            <p>
              Soit <Math tex="f" /> deux fois dérivable sur un intervalle <Math tex="I" />.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\forall x\in I,\ f''(x)>0" /> : <Math tex="C_f" /> est{" "}
                <strong className="text-foreground">convexe</strong> (au-dessus de toutes ses tangentes),
                notée <Math tex="\smile" />.
              </li>
              <li>
                Si <Math tex="\forall x\in I,\ f''(x)<0" /> : <Math tex="C_f" /> est{" "}
                <strong className="text-foreground">concave</strong> (au-dessous de toutes ses tangentes),
                notée <Math tex="\frown" />.
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Points d'inflexion">
          <Callout variant="success" title="Propriété et définition">
            <p>
              Si <Math tex="f''" /> s&apos;annule en <Math tex="x_0" /> <strong>en changeant de signe</strong>,
              alors <Math tex="A(x_0,f(x_0))" /> est un <strong>point d&apos;inflexion</strong> de{" "}
              <Math tex="C_f" /> — la tangente en ce point <strong>traverse</strong> la courbe.
            </p>
          </Callout>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="f(x)=x^3-6x^2+9x" /> : <Math tex="f''(x)=6x-6-...=6(x-2)" />, qui change de signe en{" "}
              <Math tex="x=2" />. Donc <Math tex="A(2,f(2))=A(2,2)" /> est un point d&apos;inflexion de{" "}
              <Math tex="C_f" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. SYMÉTRIE ===================== */}
      <LessonSection
        id="cours-symetrie"
        kicker="02 · Diviser le travail par deux"
        title="Centre et axe de symétrie"
        tone="muted"
        description="Un axe ou un centre de symétrie réduit l'étude d'une fonction à la moitié de son domaine."
      >
        <CourseBlock numeral="III" title="Centre de symétrie">
          <Box title="Propriété" tone="def">
            <p>
              Le point <Math tex="I(a,b)" /> est <strong className="text-foreground">centre de symétrie</strong>{" "}
              de <Math tex="C_f" /> ssi :
            </p>
            <MathBlock tex="\begin{gathered}(\forall x\in D_f)\ 2a-x\in D_f \\ (\forall x\in D_f)\ f(2a-x)+f(x)=2b\end{gathered}" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Axe de symétrie">
          <Box title="Propriété" tone="def">
            <p>
              La droite <Math tex="(D):x=a" /> est <strong className="text-foreground">axe de symétrie</strong>{" "}
              de <Math tex="C_f" /> ssi :
            </p>
            <MathBlock tex="\begin{gathered}(\forall x\in D_f)\ 2a-x\in D_f \\ (\forall x\in D_f)\ f(2a-x)=f(x)\end{gathered}" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. BRANCHES INFINIES ===================== */}
      <LessonSection
        id="cours-branches"
        kicker="03 · Le comportement de la courbe à l'infini"
        title="Branches infinies"
        tone="light"
        description="Trois asymptotes possibles, plus trois cas particuliers de branches paraboliques quand aucune asymptote n'existe — un système de limites qui couvre tous les cas."
      >
        <CourseBlock numeral="V" title="Les trois asymptotes">
          <Box title="Verticale, horizontale, oblique" tone="def">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Verticale :</strong> si{" "}
                <Math tex="\lim_{x\to a^+}f(x)=\pm\infty" /> ou <Math tex="\lim_{x\to a^-}f(x)=\pm\infty" />,
                alors <Math tex="x=a" /> est asymptote verticale.
              </li>
              <li>
                <strong className="text-foreground">Horizontale :</strong> si{" "}
                <Math tex="\lim_{x\to\pm\infty}f(x)=b" />, alors <Math tex="y=b" /> est asymptote
                horizontale.
              </li>
              <li>
                <strong className="text-foreground">Oblique :</strong> si{" "}
                <Math tex="\lim_{x\to\pm\infty}\big(f(x)-(ax+b)\big)=0" /> (<Math tex="a\neq0" />), alors{" "}
                <Math tex="y=ax+b" /> est asymptote oblique.
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Déterminer une asymptote oblique — et les trois cas particuliers">
          <Callout variant="success" title="Méthode pratique">
            <MathBlock tex="a=\lim_{x\to\pm\infty}\dfrac{f(x)}{x},\qquad b=\lim_{x\to\pm\infty}\big(f(x)-ax\big)" />
            <p>Trois cas particuliers (branche parabolique de direction — B.P.D) :</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <Math tex="a=\pm\infty" /> : B.P.D l&apos;<strong>axe des ordonnées</strong> (ex.{" "}
                <Math tex="f(x)=x^3" />).
              </li>
              <li>
                <Math tex="a=0" /> : B.P.D l&apos;<strong>axe des abscisses</strong> (ex.{" "}
                <Math tex="f(x)=\sqrt x" />).
              </li>
              <li>
                <Math tex="a\in\mathbb R^*" /> et <Math tex="b=\pm\infty" /> : B.P.D la{" "}
                <strong>droite</strong> <Math tex="y=ax" /> (ex. <Math tex="f(x)=x+\sqrt{x-3}" />).
              </li>
            </ul>
          </Callout>
          <Box title="Position relative de Cf et de l'asymptote oblique" tone="prop">
            <p>
              Le signe de <Math tex="f(x)-(ax+b)" /> donne la position : positif → <Math tex="C_f" />{" "}
              au-dessus de <Math tex="(D):y=ax+b" /> ; négatif → en dessous.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Étude des fonctions"
        tone="muted"
        description="6 exercices corrigés couvrant concavité, symétrie, asymptote oblique avec position relative, branche parabolique, axe de symétrie et lien tangente-convexité."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre étude des fonctions est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Concavité et point d'inflexion"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^3-6x^2+9x" />. Calculer <Math tex="f''(x)" />, étudier son signe, et
                en déduire la concavité de <Math tex="C_f" /> et ses points d&apos;inflexion.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="f'(x)=3x^2-12x+9,\qquad f''(x)=6x-12=6(x-2)" />
                <p>
                  <Math tex="f''(x)\ge0\iff x\ge2" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="C_f" /> est concave sur <Math tex="]-\infty,2]" /> et convexe sur{" "}
                  <Math tex="[2,+\infty[" />. Comme <Math tex="f''" /> change de signe en <Math tex="2" /> et{" "}
                  <Math tex="f(2)=8-24+18=2" />, le point <Math tex="A(2,2)" /> est un{" "}
                  <strong>point d&apos;inflexion</strong> de <Math tex="C_f" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Centre de symétrie"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{2x-1}{x-1}" /> (<Math tex="x\neq1" />). Montrer que{" "}
                <Math tex="I(1,2)" /> est un centre de symétrie de <Math tex="C_f" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D_f=\mathbb R\setminus\{1\}" />. Si <Math tex="x\neq1" />, alors{" "}
                  <Math tex="2(1)-x=2-x\neq1" />, donc <Math tex="2-x\in D_f" />.
                </p>
                <p>On écrit d&apos;abord <Math tex="f(x)=2+\dfrac{1}{x-1}" />. Alors :</p>
                <MathBlock tex="f(2-x)+f(x)=\left(2+\dfrac1{1-x}\right)+\left(2+\dfrac1{x-1}\right)=4+\dfrac1{1-x}-\dfrac1{1-x}=4" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(2-x)+f(x)=4=2\times2" /> pour tout <Math tex="x\neq1" /> : le point{" "}
                  <Math tex="I(1,2)" /> est un centre de symétrie de <Math tex="C_f" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Asymptote oblique et position relative"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{x^2-3x+5}{x+1}" /> (<Math tex="x\neq-1" />). Montrer que{" "}
                <Math tex="C_f" /> admet une asymptote oblique <Math tex="(D)" /> en <Math tex="\pm\infty" />,
                et étudier la position relative de <Math tex="C_f" /> et <Math tex="(D)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On effectue la division : <Math tex="f(x)=x-4+\dfrac{9}{x+1}" />.
                </p>
                <MathBlock tex="\lim_{x\to\pm\infty}\big(f(x)-(x-4)\big)=\lim_{x\to\pm\infty}\dfrac9{x+1}=0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(D):y=x-4" /> est asymptote oblique à <Math tex="C_f" /> en{" "}
                  <Math tex="+\infty" /> et en <Math tex="-\infty" />.
                </p>
                <p>
                  Position : <Math tex="f(x)-(x-4)=\dfrac9{x+1}" />, de signe celui de <Math tex="x+1" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="C_f" /> est au-dessous de <Math tex="(D)" /> sur <Math tex="]-\infty,-1[" />, et
                  au-dessus de <Math tex="(D)" /> sur <Math tex="]-1,+\infty[" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Branche parabolique (cas particulier)"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x+\sqrt{x-3}" /> définie sur <Math tex="[3,+\infty[" />. Étudier la
                branche infinie de <Math tex="C_f" /> au voisinage de <Math tex="+\infty" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\lim_{x\to+\infty}\dfrac{f(x)}{x}=\lim_{x\to+\infty}\left(1+\dfrac{\sqrt{x-3}}{x}\right)=1" />
                <p>Mais :</p>
                <MathBlock tex="\lim_{x\to+\infty}\big(f(x)-x\big)=\lim_{x\to+\infty}\sqrt{x-3}=+\infty" />
                <p className="font-semibold text-green-700">
                  On est dans le <strong>3ᵉ cas particulier</strong> (<Math tex="a=1\in\mathbb R^*" />,{" "}
                  <Math tex="b=+\infty" />) : <Math tex="C_f" /> admet une branche parabolique de direction{" "}
                  la droite <Math tex="y=x" /> au voisinage de <Math tex="+\infty" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Axe de symétrie"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=(x-2)^2+3" />. Montrer que la droite <Math tex="x=2" /> est un axe de
                symétrie de <Math tex="C_f" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D_f=\mathbb R" />, donc <Math tex="2(2)-x=4-x\in D_f" /> pour tout{" "}
                  <Math tex="x" />.
                </p>
                <MathBlock tex="f(4-x)=\big((4-x)-2\big)^2+3=(2-x)^2+3=(x-2)^2+3=f(x)" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(4-x)=f(x)" /> pour tout <Math tex="x\in\mathbb R" /> : la droite{" "}
                  <Math tex="x=2" /> est axe de symétrie de <Math tex="C_f" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Convexité et position par rapport à une tangente"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^2" />. Montrer que <Math tex="f''(x)>0" /> pour tout{" "}
                <Math tex="x" />, puis montrer directement que <Math tex="C_f" /> est au-dessus de sa
                tangente au point d&apos;abscisse <Math tex="1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=2x" /> et <Math tex="f''(x)=2>0" /> pour tout <Math tex="x\in\mathbb R" />{" "}
                  : <Math tex="C_f" /> est <strong>convexe</strong> sur <Math tex="\mathbb R" />.
                </p>
                <p>
                  La tangente en <Math tex="1" /> a pour équation{" "}
                  <Math tex="y=(x-1)f'(1)+f(1)=2(x-1)+1=2x-1" />. On calcule :
                </p>
                <MathBlock tex="f(x)-(2x-1)=x^2-2x+1=(x-1)^2\ge0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)\ge2x-1" /> pour tout <Math tex="x" /> : <Math tex="C_f" /> est bien
                  au-dessus de sa tangente en <Math tex="1" /> (cohérent avec la convexité de{" "}
                  <Math tex="C_f" />).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
