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
  title: "La dérivation · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur la dérivation pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : nombre dérivé, tangente à une courbe, dérivabilité à gauche et à droite, fonction dérivée, dérivées usuelles et opérations sur les dérivées, dérivées successives, sens de variation, extremums, équation différentielle y''+ω²y=0, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 2",
  heroTitle: "La dérivation",
  heroSubtitle:
    "Le nombre dérivé, la tangente, la fonction dérivée et son lien direct avec le sens de variation — le socle de toute l'étude de fonctions à venir.",
  footerNote: "La dérivation · Mathématiques, 1ère année Baccalauréat, semestre 2.",
  sections: [
    { id: "cours-nombre-derive", label: "Nombre dérivé" },
    { id: "cours-fonction-derivee", label: "Fonction dérivée" },
    { id: "cours-applications", label: "Applications" },
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

function DerivTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[360px] border-collapse text-center text-sm">
        <thead>
          <tr>
            <th className="border border-border bg-surface-muted p-2 font-semibold">f(x)</th>
            <th className="border border-border bg-surface-muted p-2 font-semibold">f&apos;(x)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([f, fp], i) => (
            <tr key={i}>
              <td className="border border-border p-2">
                <Math tex={f} />
              </td>
              <td className="border border-border p-2">
                <Math tex={fp} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          { value: "9", label: "règles de dérivation" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-nombre-derive"
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
            <Math tex="f'(a)" />
          </div>
        }
      />

      {/* ===================== I. NOMBRE DÉRIVÉ ===================== */}
      <LessonSection
        id="cours-nombre-derive"
        kicker="01 · La pente d'une courbe en un point"
        title="Nombre dérivé, tangente, dérivabilité latérale"
        tone="light"
        description="Le nombre dérivé est une limite — et cette limite est exactement le coefficient directeur de la tangente."
      >
        <CourseBlock numeral="I" title="Nombre dérivé en un point">
          <Box title="Définition" tone="def">
            <Math tex="f" /> est <strong className="text-foreground">dérivable</strong> en <Math tex="a" /> s&apos;il
            existe <Math tex="l\in\mathbb R" /> tel que{" "}
            <Math tex="\displaystyle\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}=l" />. On note{" "}
            <Math tex="l=f'(a)" />, le <strong className="text-foreground">nombre dérivé</strong> de{" "}
            <Math tex="f" /> en <Math tex="a" />.
          </Box>
          <Box title="Exemple" tone="prop">
            <p>
              Pour <Math tex="f(x)=2x^2+2x" /> en <Math tex="a=1" /> :
            </p>
            <MathBlock tex="\dfrac{f(x)-f(1)}{x-1}=\dfrac{2x^2+2x-4}{x-1}=\dfrac{2(x-1)(x+2)}{x-1}=2(x+2)\xrightarrow[x\to1]{}6" />
            <p className="font-semibold text-green-700">
              Donc <Math tex="f" /> est dérivable en <Math tex="1" /> et <Math tex="f'(1)=6" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Interprétation géométrique — la tangente">
          <Callout variant="success" title="Propriété">
            Si <Math tex="f" /> est dérivable en <Math tex="a" />, la courbe <Math tex="C_f" /> admet en{" "}
            <Math tex="A(a,f(a))" /> une <strong>tangente</strong> <Math tex="(T)" /> d&apos;équation :
            <MathBlock tex="(T):\ y=f'(a)(x-a)+f(a)" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Dérivabilité à gauche et à droite">
          <Box title="Définitions" tone="def">
            <Math tex="f_d'(a)=\displaystyle\lim_{x\to a^+}\dfrac{f(x)-f(a)}{x-a}" /> et{" "}
            <Math tex="f_g'(a)=\displaystyle\lim_{x\to a^-}\dfrac{f(x)-f(a)}{x-a}" />.
          </Box>
          <Callout variant="warning" title="Le critère complet de dérivabilité">
            <Math tex="f" /> est dérivable en <Math tex="a" /> ssi <Math tex="f" /> est dérivable à gauche{" "}
            <strong>et</strong> à droite de <Math tex="a" /> <strong>et</strong>{" "}
            <Math tex="f_d'(a)=f_g'(a)" />. Sinon, la courbe présente un <strong>point anguleux</strong> en{" "}
            <Math tex="a" />, avec deux <strong>demi-tangentes</strong> distinctes.
          </Callout>
          <Box title="Exemple classique — f(x) = |x| en 0" tone="prop">
            <MathBlock tex="\dfrac{|x|-0}{x-0}=\dfrac{x}{x}=1\ (x>0),\qquad \dfrac{|x|-0}{x-0}=\dfrac{-x}{x}=-1\ (x<0)" />
            <p className="font-semibold text-green-700">
              <Math tex="f_d'(0)=1\neq f_g'(0)=-1" /> : <Math tex="f" /> n&apos;est pas dérivable en{" "}
              <Math tex="0" /> (point anguleux).
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. FONCTION DÉRIVÉE ===================== */}
      <LessonSection
        id="cours-fonction-derivee"
        kicker="02 · De la valeur en un point à la fonction entière"
        title="Fonction dérivée, dérivées usuelles, opérations"
        tone="muted"
        description="Le tableau des dérivées usuelles et les règles d'opération permettent de dériver n'importe quelle fonction du programme sans repasser par la limite."
      >
        <CourseBlock numeral="IV" title="Dérivées des fonctions usuelles">
          <DerivTable
            rows={[
              ["k\\ (k\\in\\mathbb R)", "0"],
              ["x", "1"],
              ["x^n\\ (n\\in\\mathbb N^*)", "nx^{n-1}"],
              ["\\dfrac1x", "-\\dfrac{1}{x^2}"],
              ["\\sqrt x", "\\dfrac{1}{2\\sqrt x}"],
              ["\\sin x", "\\cos x"],
              ["\\cos x", "-\\sin x"],
              ["\\tan x", "1+\\tan^2x=\\dfrac{1}{\\cos^2x}"],
            ]}
          />
        </CourseBlock>

        <CourseBlock numeral="V" title="Opérations sur les dérivées">
          <Callout variant="success" title="Les formules à connaître par cœur">
            <div className="space-y-1.5">
              <p>
                <Math tex="(f+g)'=f'+g'" />, <Math tex="(k f)'=k f'" />
              </p>
              <p>
                <Math tex="(fg)'=f'g+g'f" />
              </p>
              <p>
                <Math tex="\left(\dfrac1f\right)'=-\dfrac{f'}{f^2}" /> (<Math tex="f\neq0" />),{" "}
                <Math tex="\left(\dfrac fg\right)'=\dfrac{f'g-g'f}{g^2}" /> (<Math tex="g\neq0" />)
              </p>
              <p>
                <Math tex="(\sqrt f\,)'=\dfrac{f'}{2\sqrt f}" /> (<Math tex="f>0" />), <Math tex="(f^n)'=n f' f^{n-1}" />
              </p>
              <p>
                <Math tex="\big(f(ax+b)\big)'=a\,f'(ax+b)" />
              </p>
            </div>
          </Callout>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="f(x)=\sin(3x+2)" /> : <Math tex="f'(x)=3\cos(3x+2)" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Dérivées successives">
          <Box title="Définition" tone="def">
            La dérivée de <Math tex="f'" /> s&apos;appelle la <strong className="text-foreground">dérivée
            seconde</strong>, notée <Math tex="f''" />. On définit de même <Math tex="f^{(n)}" />, la dérivée
            à l&apos;ordre <Math tex="n" />, par <Math tex="f^{(n)}=\big(f^{(n-1)}\big)'" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. APPLICATIONS ===================== */}
      <LessonSection
        id="cours-applications"
        kicker="03 · À quoi ça sert"
        title="Sens de variation, extremums, équation différentielle"
        tone="light"
        description="Le signe de la dérivée pilote entièrement le sens de variation — c'est l'application la plus importante de tout le chapitre."
      >
        <CourseBlock numeral="VII" title="Signe de f′ et sens de variation">
          <Callout variant="success" title="Le résultat central de l'analyse">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="f'(x)=0" /> sur <Math tex="I" />, alors <Math tex="f" /> est{" "}
                <strong>constante</strong> sur <Math tex="I" />.
              </li>
              <li>
                Si <Math tex="f'(x)>0" /> sur <Math tex="I" />, alors <Math tex="f" /> est{" "}
                <strong>strictement croissante</strong> sur <Math tex="I" />.
              </li>
              <li>
                Si <Math tex="f'(x)<0" /> sur <Math tex="I" />, alors <Math tex="f" /> est{" "}
                <strong>strictement décroissante</strong> sur <Math tex="I" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Extremum">
          <Box title="Propriété" tone="prop">
            <p>
              Si <Math tex="f" /> admet un extremum en <Math tex="a" />, alors <Math tex="f'(a)=0" />.
              Réciproquement, si <Math tex="f'(a)=0" /> <strong>et</strong> <Math tex="f'" /> change de signe
              en <Math tex="a" />, alors <Math tex="f" /> admet un extremum en <Math tex="a" />.
            </p>
          </Box>
          <Callout variant="warning" title="Attention — la réciproque seule ne suffit pas">
            <Math tex="f'(a)=0" /> ne garantit <strong>pas</strong> un extremum si <Math tex="f'" /> ne
            change pas de signe (exemple : <Math tex="f(x)=x^3" /> en <Math tex="0" />).
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Équation différentielle y″ + ω²y = 0">
          <Callout variant="success" title="Solution générale">
            <p>
              Les solutions de <Math tex="y''+\omega^2y=0" /> (<Math tex="\omega\in\mathbb R" />) sont
              exactement les fonctions :
            </p>
            <MathBlock tex="y:x\mapsto\alpha\cos(\omega x)+\beta\sin(\omega x),\qquad \alpha,\beta\in\mathbb R" />
          </Callout>
          <Box title="Exemple" tone="prop">
            <p>
              <Math tex="y''+16y=0" /> a pour solutions <Math tex="y(x)=\alpha\cos(4x)+\beta\sin(4x)" /> (car{" "}
              <Math tex="\omega^2=16\Rightarrow\omega=4" />).
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · La dérivation"
        tone="muted"
        description="6 exercices corrigés, calqués sur les techniques essentielles du cours."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre dérivation est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Nombre dérivé par la définition"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="f(x)=x^2+x-3" /> est dérivable en <Math tex="a=-2" /> et calculer{" "}
                <Math tex="f'(-2)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\dfrac{f(x)-f(-2)}{x-(-2)}=\dfrac{x^2+x-3-(-1)}{x+2}=\dfrac{x^2+x-2}{x+2}=\dfrac{(x+2)(x-1)}{x+2}=x-1" />
                <p className="font-semibold text-green-700">
                  Cette expression tend vers <Math tex="-3" /> quand <Math tex="x\to-2" /> : <Math tex="f" />{" "}
                  est dérivable en <Math tex="-2" /> et <Math tex="f'(-2)=-3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Point anguleux avec valeur absolue"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=|x^2-1|" />. Étudier la dérivabilité de <Math tex="f" /> à gauche et à
                droite de <Math tex="x_0=1" />, et donner une interprétation géométrique.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Près de <Math tex="1" /> : pour <Math tex="x>1" />, <Math tex="f(x)=x^2-1" /> ; pour{" "}
                  <Math tex="x<1" />, <Math tex="f(x)=1-x^2" /> (changement de signe de{" "}
                  <Math tex="x^2-1" /> en <Math tex="1" />).
                </p>
                <MathBlock tex="\dfrac{f(x)-f(1)}{x-1}=\dfrac{x^2-1}{x-1}=x+1\xrightarrow[x\to1^+]{}2" />
                <MathBlock tex="\dfrac{f(x)-f(1)}{x-1}=\dfrac{1-x^2}{x-1}=-(x+1)\xrightarrow[x\to1^-]{}-2" />
                <p className="font-semibold text-green-700">
                  <Math tex="f_d'(1)=2\neq f_g'(1)=-2" /> : <Math tex="f" /> n&apos;est pas dérivable en{" "}
                  <Math tex="1" />. La courbe présente un <strong>point anguleux</strong>, avec une
                  demi-tangente de pente <Math tex="2" /> à droite et de pente <Math tex="-2" /> à gauche.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Dériver un produit"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la dérivée de <Math tex="f(x)=(5x^2+1)(3x-1)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="(fg)'=f'g+g'f" />, <Math tex="f=5x^2+1" /> (<Math tex="f'=10x" />),{" "}
                  <Math tex="g=3x-1" /> (<Math tex="g'=3" />) :
                </p>
                <MathBlock tex="f'(x)=10x(3x-1)+3(5x^2+1)=30x^2-10x+15x^2+3=45x^2-10x+3" />
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Calculer une limite grâce au nombre dérivé"
            itemsLabel="1 limite"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to\frac\pi6}\dfrac{2\sin x-1}{x-\frac\pi6}" /> en
                reconnaissant un nombre dérivé.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="f(x)=2\sin x" />. Comme <Math tex="f\!\left(\dfrac\pi6\right)=2\times\dfrac12=1" />
                  , l&apos;expression est exactement <Math tex="\dfrac{f(x)-f(\frac\pi6)}{x-\frac\pi6}" />, qui
                  tend vers <Math tex="f'\!\left(\dfrac\pi6\right)" />.
                </p>
                <p>
                  Or <Math tex="f'(x)=2\cos x" />, donc <Math tex="f'\!\left(\dfrac\pi6\right)=2\cos\dfrac\pi6=2\times\dfrac{\sqrt3}{2}=\sqrt3" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\lim_{x\to\frac\pi6}\dfrac{2\sin x-1}{x-\frac\pi6}=\sqrt3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Variations et extremums"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier les variations de <Math tex="f(x)=x^3-6x+1" /> sur <Math tex="\mathbb R" /> et donner
                ses extremums éventuels.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="f'(x)=3x^2-6=3(x^2-2)=3(x-\sqrt2)(x+\sqrt2)" />
                <p>
                  <Math tex="f'(x)=0" /> pour <Math tex="x=-\sqrt2" /> ou <Math tex="x=\sqrt2" />. Comme{" "}
                  <Math tex="a=3>0" />, <Math tex="f'" /> est positif à l&apos;extérieur des racines, négatif
                  entre elles.
                </p>
                <p>
                  <Math tex="f" /> est donc croissante sur <Math tex="]-\infty,-\sqrt2]" />, décroissante sur{" "}
                  <Math tex="[-\sqrt2,\sqrt2]" />, croissante sur <Math tex="[\sqrt2,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f'" /> change de signe en chaque racine : <Math tex="f" /> admet un{" "}
                  <strong>maximum local</strong> <Math tex="f(-\sqrt2)=1+4\sqrt2" /> et un{" "}
                  <strong>minimum local</strong> <Math tex="f(\sqrt2)=1-4\sqrt2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Résoudre une équation différentielle"
            itemsLabel="2 équations"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Résoudre <Math tex="y''+16y=0" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Résoudre <Math tex="2y''+9y=0" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> <Math tex="\omega^2=16\Rightarrow\omega=4" />
                  :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="y(x)=\alpha\cos(4x)+\beta\sin(4x)" />, <Math tex="\alpha,\beta\in\mathbb R" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> On réécrit :{" "}
                  <Math tex="y''+\dfrac92y=0" />, donc <Math tex="\omega^2=\dfrac92\Rightarrow\omega=\dfrac{3}{\sqrt2}=\dfrac{3\sqrt2}{2}" />
                  :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="y(x)=\alpha\cos\!\left(\dfrac{3\sqrt2}{2}x\right)+\beta\sin\!\left(\dfrac{3\sqrt2}{2}x\right)" />
                  .
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
