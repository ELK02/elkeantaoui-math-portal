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
  title: "La dérivation · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur la dérivation pour la 1ère année Baccalauréat Sciences Mathématiques : nombre dérivé et tangente, approximation affine, dérivabilité à gauche/à droite et points anguleux, fonction dérivée et opérations, dérivées usuelles, monotonie et extremums, équation différentielle y''+ω²y=0, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "La dérivation",
  heroSubtitle:
    "Du nombre dérivé à l'approximation affine, des points anguleux aux extremums — le socle de toute l'étude de fonctions à venir.",
  footerNote: "La dérivation · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
  sections: [
    { id: "cours-nombre-derive", label: "Nombre dérivé" },
    { id: "cours-approximation", label: "Approximation affine" },
    { id: "cours-fonction-derivee", label: "Fonction dérivée" },
    { id: "cours-applications", label: "Monotonie, extremums, équation diff." },
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
          { value: "3", label: "grandes idées" },
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
        title="Nombre dérivé et tangente"
        tone="light"
        description="Le nombre dérivé est une limite — et cette limite est exactement le coefficient directeur de la tangente."
      >
        <CourseBlock numeral="I" title="Nombre dérivé en un point">
          <Box title="Définition" tone="def">
            <Math tex="f" /> est <strong className="text-foreground">dérivable</strong> en <Math tex="x_0" />{" "}
            s&apos;il existe <Math tex="\ell\in\mathbb R" /> tel que :
            <MathBlock tex="\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}=\lim_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h}=\ell" />
            <p>
              On note <Math tex="\ell=f'(x_0)" />, le <strong className="text-foreground">nombre dérivé</strong>{" "}
              de <Math tex="f" /> en <Math tex="x_0" />.
            </p>
          </Box>
          <Callout variant="success" title="Exemple">
            <p>
              Pour <Math tex="f(x)=x^2+2x-1" /> en <Math tex="a=2" /> :
            </p>
            <MathBlock tex="\dfrac{f(x)-f(2)}{x-2}=\dfrac{x^2+2x-1-7}{x-2}=\dfrac{(x-2)(x+4)}{x-2}=x+4\xrightarrow[x\to2]{}6" />
            <p className="font-semibold text-green-700">
              Donc <Math tex="f" /> est dérivable en <Math tex="2" /> et <Math tex="f'(2)=6" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Interprétation géométrique — la tangente">
          <Callout variant="success" title="Propriété">
            Si <Math tex="f" /> est dérivable en <Math tex="x_0" />, la courbe <Math tex="C_f" /> admet en{" "}
            <Math tex="A(x_0,f(x_0))" /> une <strong>tangente</strong> <Math tex="(T)" /> d&apos;équation :
            <MathBlock tex="(T):\ y=(x-x_0)f'(x_0)+f(x_0)" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. APPROXIMATION AFFINE ===================== */}
      <LessonSection
        id="cours-approximation"
        kicker="02 · Remplacer une courbe par sa tangente"
        title="Approximation affine"
        tone="muted"
        description="Au voisinage du point de contact, la tangente est presque indiscernable de la courbe — ce qui permet d'estimer f(x) sans calculatrice."
      >
        <CourseBlock numeral="III" title="Définition et formule">
          <Box title="Définition" tone="def">
            <p>
              Si <Math tex="f" /> est dérivable en <Math tex="a" />, alors pour <Math tex="x" /> proche de{" "}
              <Math tex="a" /> (ou <Math tex="h" /> proche de <Math tex="0" />, avec <Math tex="x=a+h" />) :
            </p>
            <MathBlock tex="f(x)\approx f(a)+(x-a)f'(a)\qquad\text{ou de façon équivalente}\qquad f(a+h)\approx f(a)+hf'(a)" />
            <p>
              La fonction <Math tex="x\mapsto f(a)+(x-a)f'(a)" /> s&apos;appelle la{" "}
              <strong className="text-foreground">fonction affine tangente</strong> à <Math tex="f" /> en{" "}
              <Math tex="a" />.
            </p>
          </Box>
          <Callout variant="success" title="Exemple — estimer une racine carrée sans calculatrice">
            <p>
              Pour <Math tex="f(x)=\sqrt x" /> en <Math tex="a=9" /> : <Math tex="f'(x)=\dfrac1{2\sqrt x}" />,
              donc <Math tex="f'(9)=\dfrac16" />. Ainsi :
            </p>
            <MathBlock tex="\sqrt{9{,}002}=f(9+0{,}002)\approx f(9)+0{,}002\times f'(9)=3+0{,}002\times\dfrac16\approx3{,}000333" />
            <p>
              (La valeur exacte est <Math tex="3{,}000333315\ldots" /> — l&apos;approximation est excellente.)
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. DÉRIVABILITÉ À DROITE/GAUCHE ===================== */}
      <LessonSection
        id="cours-fonction-derivee"
        kicker="03 · De la valeur en un point à la fonction entière"
        title="Dérivabilité à gauche et à droite, fonction dérivée"
        tone="light"
        description="Quand les deux demi-tangentes n'ont pas la même pente, la courbe présente un point anguleux — et le tableau des dérivées usuelles permet de dériver toute fonction du programme."
      >
        <CourseBlock numeral="IV" title="Dérivabilité à gauche et à droite">
          <Box title="Définitions" tone="def">
            <Math tex="f_d'(x_0)=\displaystyle\lim_{x\to x_0^+}\dfrac{f(x)-f(x_0)}{x-x_0}" /> et{" "}
            <Math tex="f_g'(x_0)=\displaystyle\lim_{x\to x_0^-}\dfrac{f(x)-f(x_0)}{x-x_0}" />.
          </Box>
          <Callout variant="warning" title="Point anguleux">
            <p>
              <Math tex="f" /> est dérivable en <Math tex="x_0" /> ssi elle est dérivable à gauche{" "}
              <strong>et</strong> à droite de <Math tex="x_0" /> <strong>et</strong>{" "}
              <Math tex="f_d'(x_0)=f_g'(x_0)" />. Sinon, <Math tex="A(x_0,f(x_0))" /> est un{" "}
              <strong>point anguleux</strong>, avec deux demi-tangentes distinctes d&apos;équations{" "}
              <Math tex="y=(x-x_0)f_d'(x_0)+f(x_0)" /> (pour <Math tex="x\ge x_0" />) et{" "}
              <Math tex="y=(x-x_0)f_g'(x_0)+f(x_0)" /> (pour <Math tex="x\le x_0" />).
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Tableau des dérivées usuelles et opérations">
          <DerivTable
            rows={[
              ["a\\ (a\\in\\mathbb R)", "0"],
              ["x", "1"],
              ["x^n\\ (n\\in\\mathbb Z^*)", "nx^{n-1}"],
              ["\\sqrt x", "\\dfrac{1}{2\\sqrt x}"],
              ["\\sin x", "\\cos x"],
              ["\\cos x", "-\\sin x"],
              ["\\tan x", "1+\\tan^2x=\\dfrac{1}{\\cos^2x}"],
            ]}
          />
          <Callout variant="success" title="Opérations et composées">
            <div className="space-y-1.5">
              <p>
                <Math tex="(f+g)'=f'+g'" />, <Math tex="(fg)'=f'g+fg'" />,{" "}
                <Math tex="\left(\dfrac1g\right)'=-\dfrac{g'}{g^2}" />,{" "}
                <Math tex="\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}" />
              </p>
              <p>
                <Math tex="(f^n)'=nf'f^{n-1}" />, <Math tex="\big(\sqrt f\,\big)'=\dfrac{f'}{2\sqrt f}" />,{" "}
                <Math tex="\big(f(ax+b)\big)'=af'(ax+b)" />
              </p>
              <p>
                <Math tex="\big(\cos(ax+b)\big)'=-a\sin(ax+b)" />,{" "}
                <Math tex="\big(\sin(ax+b)\big)'=a\cos(ax+b)" />
              </p>
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. APPLICATIONS ===================== */}
      <LessonSection
        id="cours-applications"
        kicker="04 · À quoi ça sert"
        title="Monotonie, extremums, équation différentielle"
        tone="muted"
        description="Le signe de f' pilote entièrement les variations — et une équation différentielle classique clôt le chapitre."
      >
        <CourseBlock numeral="VI" title="Signe de f′ et sens de variation">
          <Callout variant="success" title="Le résultat central de l'analyse">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="f'(x)>0" /> sur <Math tex="I" /> (sauf en un nombre fini de points) : <Math tex="f" />{" "}
                strictement croissante.
              </li>
              <li>
                Si <Math tex="f'(x)<0" /> sur <Math tex="I" /> (sauf en un nombre fini de points) : <Math tex="f" />{" "}
                strictement décroissante.
              </li>
              <li>
                Si <Math tex="f'(x)=0" /> partout sur <Math tex="I" /> : <Math tex="f" /> constante.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Extremum">
          <Box title="Propriété" tone="prop">
            <p>
              Si <Math tex="f" /> admet un extremum en <Math tex="a" />, alors <Math tex="f'(a)=0" />.
              Réciproquement, si <Math tex="f'(a)=0" /> <strong>et</strong> <Math tex="f'" /> change de signe
              en <Math tex="a" />, alors <Math tex="f" /> admet un extremum en <Math tex="a" />.
            </p>
          </Box>
          <Callout variant="warning" title="Attention — la réciproque seule ne suffit pas">
            <Math tex="f'(a)=0" /> ne garantit <strong>pas</strong> un extremum si <Math tex="f'" /> ne
            change pas de signe (exemple : <Math tex="f(x)=2x^3" /> en <Math tex="0" /> : <Math tex="f'(x)=6x^2\ge0" />
            {" "}toujours, pas de changement de signe).
          </Callout>
          <Box title="Optimisation" tone="def">
            De nombreux problèmes concrets (aire maximale, coût minimal…) se ramènent à modéliser une
            quantité par une fonction, puis à chercher son extremum grâce à cette même méthode : calculer{" "}
            <Math tex="f'" />, étudier son signe, et conclure.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Équation différentielle y″ + ω²y = 0">
          <Callout variant="success" title="Solution générale">
            <p>
              Les solutions de <Math tex="y''+\omega^2y=0" /> (<Math tex="\omega\in\mathbb R" />) sont
              exactement les fonctions :
            </p>
            <MathBlock tex="y:x\mapsto\alpha\cos(\omega x)+\beta\sin(\omega x),\qquad \alpha,\beta\in\mathbb R" />
          </Callout>
          <Box title="Exemple avec conditions initiales" tone="def">
            <p>
              <Math tex="y''+9y=0" /> a pour solution générale <Math tex="y(x)=\alpha\cos(3x)+\beta\sin(3x)" />
              . Si on impose <Math tex="f(0)" /> et une deuxième condition, on obtient un système linéaire en{" "}
              <Math tex="\alpha,\beta" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · La dérivation"
        tone="light"
        description="6 exercices corrigés couvrant nombre dérivé et tangente, approximation affine, point anguleux, dérivée d'une composée, extremums, et équation différentielle avec conditions initiales."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre dérivation est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Nombre dérivé et équation de la tangente"
            itemsLabel="1 calcul complet"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^2+2x-1" />. Montrer que <Math tex="f" /> est dérivable en{" "}
                <Math tex="a=2" />, calculer <Math tex="f'(2)" />, et donner l&apos;équation de la tangente à{" "}
                <Math tex="C_f" /> en <Math tex="a=2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f(2)=4+4-1=7" />.
                </p>
                <MathBlock tex="\dfrac{f(x)-f(2)}{x-2}=\dfrac{x^2+2x-8}{x-2}=\dfrac{(x-2)(x+4)}{x-2}=x+4\xrightarrow[x\to2]{}6" />
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est dérivable en <Math tex="2" /> et <Math tex="f'(2)=6" />.
                </p>
                <p className="font-semibold text-green-700">
                  Équation de la tangente : <Math tex="y=6(x-2)+7=6x-5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Approximation affine d'une racine carrée"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Trouver une approximation affine de <Math tex="\sqrt{16{,}02}" />, sans calculatrice.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="f(x)=\sqrt x" />, <Math tex="a=16" />, <Math tex="h=0{,}02" />. On a{" "}
                  <Math tex="f'(x)=\dfrac1{2\sqrt x}" />, donc <Math tex="f'(16)=\dfrac18" />.
                </p>
                <MathBlock tex="\sqrt{16{,}02}=f(16+0{,}02)\approx f(16)+0{,}02\times f'(16)=4+0{,}02\times\dfrac18=4{,}0025" />
                <p className="font-semibold text-green-700">
                  <Math tex="\sqrt{16{,}02}\approx4{,}0025" /> (valeur exacte <Math tex="\approx4{,}002499" />
                  ).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Point anguleux"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=|x^2-4|" />. Étudier la dérivabilité de <Math tex="f" /> en{" "}
                <Math tex="x_0=2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Près de <Math tex="2" /> : pour <Math tex="x>2" />, <Math tex="f(x)=x^2-4" /> ; pour{" "}
                  <Math tex="x<2" />, <Math tex="f(x)=4-x^2" />.
                </p>
                <MathBlock tex="\dfrac{f(x)-f(2)}{x-2}=\dfrac{x^2-4}{x-2}=x+2\xrightarrow[x\to2^+]{}4" />
                <MathBlock tex="\dfrac{f(x)-f(2)}{x-2}=\dfrac{4-x^2}{x-2}=-(x+2)\xrightarrow[x\to2^-]{}-4" />
                <p className="font-semibold text-green-700">
                  <Math tex="f_d'(2)=4\neq f_g'(2)=-4" /> : <Math tex="f" /> n&apos;est pas dérivable en{" "}
                  <Math tex="2" />. Le point <Math tex="A(2,0)" /> est un <strong>point anguleux</strong> de{" "}
                  <Math tex="C_f" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Dériver un produit avec une racine"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer la dérivée de <Math tex="f(x)=\sqrt{3x^2+1}\,(2x-5)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="(uv)'=u'v+uv'" />, <Math tex="u=\sqrt{3x^2+1}" /> (
                  <Math tex="u'=\dfrac{6x}{2\sqrt{3x^2+1}}=\dfrac{3x}{\sqrt{3x^2+1}}" />), <Math tex="v=2x-5" />{" "}
                  (<Math tex="v'=2" />) :
                </p>
                <MathBlock tex="f'(x)=\dfrac{3x}{\sqrt{3x^2+1}}(2x-5)+2\sqrt{3x^2+1}" />
                <p>En réduisant au même dénominateur :</p>
                <MathBlock tex="f'(x)=\dfrac{3x(2x-5)+2(3x^2+1)}{\sqrt{3x^2+1}}=\dfrac{6x^2-15x+6x^2+2}{\sqrt{3x^2+1}}=\dfrac{12x^2-15x+2}{\sqrt{3x^2+1}}" />
                <p className="font-semibold text-green-700">
                  <Math tex="f'(x)=\dfrac{12x^2-15x+2}{\sqrt{3x^2+1}}" /> (par exemple{" "}
                  <Math tex="f'(1)=-\dfrac12" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Extremums locaux"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier les variations de <Math tex="f(x)=x^3-3x+2" /> sur <Math tex="\mathbb R" /> et donner
                ses extremums éventuels, avec justification.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="f'(x)=3x^2-3=3(x-1)(x+1)" />
                <p>
                  <Math tex="f'(x)=0" /> pour <Math tex="x=-1" /> ou <Math tex="x=1" />. Comme{" "}
                  <Math tex="a=3>0" />, <Math tex="f'" /> est positif à l&apos;extérieur des racines, négatif
                  entre elles : <Math tex="f" /> croît sur <Math tex="]-\infty,-1]" />, décroît sur{" "}
                  <Math tex="[-1,1]" />, croît sur <Math tex="[1,+\infty[" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f'" /> change de signe en chaque racine : <Math tex="f" /> admet un{" "}
                  <strong>maximum local</strong> <Math tex="f(-1)=4" /> et un{" "}
                  <strong>minimum local</strong> <Math tex="f(1)=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Équation différentielle avec conditions initiales"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="y''+4y=0" /> sachant que <Math tex="f(0)=2" /> et{" "}
                <Math tex="f\!\left(\dfrac\pi4\right)=-3" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Ici <Math tex="\omega^2=4\Rightarrow\omega=2" />, donc la solution générale est{" "}
                  <Math tex="y(x)=\alpha\cos(2x)+\beta\sin(2x)" />.
                </p>
                <p>Les conditions initiales donnent :</p>
                <MathBlock tex="f(0)=\alpha\cos0+\beta\sin0=\alpha=2" />
                <MathBlock tex="f\!\left(\dfrac\pi4\right)=\alpha\cos\dfrac\pi2+\beta\sin\dfrac\pi2=\beta=-3" />
                <p className="font-semibold text-green-700">
                  La solution cherchée est <Math tex="f(x)=2\cos(2x)-3\sin(2x)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
