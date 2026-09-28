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
  title: "Dérivabilité et Étude des fonctions · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet de dérivabilité et étude des fonctions pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : nombre dérivé, tangente, opérations sur les dérivées, monotonie, extremums, concavité, points d'inflexion, symétries et branches infinies, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 1",
  heroTitle: "Dérivabilité et Étude des fonctions",
  heroSubtitle:
    "Du nombre dérivé à la tangente, de la monotonie aux branches infinies : tous les outils pour mener une étude complète de fonction, étape par étape.",
  footerNote:
    "Dérivabilité et Étude des fonctions · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 1.",
  sections: [
    { id: "cours-derivabilite", label: "Dérivabilité" },
    { id: "cours-operations", label: "Opérations" },
    { id: "cours-variations", label: "Variations" },
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
          { value: "11", label: "exercices corrigés" },
          { value: "8", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-derivabilite"
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
            <Math tex="f'" />
          </div>
        }
      />

      {/* ===================== I. DÉRIVABILITÉ ===================== */}
      <LessonSection
        id="cours-derivabilite"
        kicker="01 · Le nombre dérivé et la tangente"
        title="Dérivabilité en un point et interprétation géométrique"
        tone="light"
        description="Le nombre dérivé mesure la pente de la courbe en un point : il donne l'équation de la tangente."
      >
        <CourseBlock numeral="I" title="Dérivabilité en un point">
          <Box title="Définition" tone="def">
            <Math tex="f" /> est <strong className="text-foreground">dérivable en <Math tex="x_0" /></strong> si le
            taux d&apos;accroissement admet une limite finie :
          </Box>
          <MathBlock tex="\displaystyle\lim_{x\to x_0}\dfrac{f(x)-f(x_0)}{x-x_0}=\lim_{h\to0}\dfrac{f(x_0+h)-f(x_0)}{h}=l" />
          <Box title="Vocabulaire" tone="def">
            Ce nombre <Math tex="l" /> se note <Math tex="f'(x_0)" /> et s&apos;appelle le{" "}
            <strong>nombre dérivé</strong> de <Math tex="f" /> en <Math tex="x_0" />. On définit de même les
            nombres dérivés à droite <Math tex="f'_d(x_0)" /> et à gauche <Math tex="f'_g(x_0)" /> en restreignant
            la limite à <Math tex="x\to x_0^{+}" /> ou <Math tex="x\to x_0^{-}" />.
          </Box>
          <Callout variant="success" title="Propriété">
            <Math tex="f" /> est dérivable en <Math tex="x_0" /> si, et seulement si, <Math tex="f" /> est dérivable
            à droite et à gauche de <Math tex="x_0" /> avec <Math tex="f'_d(x_0)=f'_g(x_0)" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Interprétation géométrique">
          <Box title="Tangente" tone="prop">
            Si <Math tex="f" /> est dérivable en <Math tex="x_0" />, la courbe <Math tex="(C_f)" /> admet au point{" "}
            <Math tex="A(x_0,f(x_0))" /> une tangente <Math tex="T" /> de coefficient directeur{" "}
            <Math tex="f'(x_0)" />, d&apos;équation :
          </Box>
          <MathBlock tex="T:\ y=f'(x_0)(x-x_0)+f(x_0)" />
          <Callout variant="warning" title="Point anguleux et demi-tangentes">
            Si <Math tex="f'_d(x_0)" /> et <Math tex="f'_g(x_0)" /> existent mais sont{" "}
            <strong>différents</strong>, <Math tex="f" /> n&apos;est pas dérivable en <Math tex="x_0" /> : le point{" "}
            <Math tex="A(x_0,f(x_0))" /> est un <strong>point anguleux</strong>, avec une demi-tangente à droite de
            pente <Math tex="f'_d(x_0)" /> et une demi-tangente à gauche de pente <Math tex="f'_g(x_0)" />. Si le
            taux d&apos;accroissement tend vers <Math tex="\pm\infty" /> d&apos;un côté, la courbe admet une
            demi-tangente <strong>verticale</strong> de ce côté.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. OPÉRATIONS SUR LES DÉRIVÉES ===================== */}
      <LessonSection
        id="cours-operations"
        kicker="02 · Calculer une dérivée"
        title="Opérations sur les fonctions dérivables"
        tone="muted"
        description="Somme, produit, quotient, composée : les formules de dérivation à maîriser pour toute étude de fonction."
      >
        <CourseBlock numeral="III" title="Opérations usuelles">
          <Callout variant="success" title="Formules de base">
            <div className="space-y-1.5">
              <p>
                <Math tex="(f+g)'=f'+g'" /> ; <Math tex="(\lambda f)'=\lambda f'" /> ;{" "}
                <Math tex="(fg)'=f'g+fg'" />.
              </p>
              <p>
                <Math tex="\left(\dfrac1g\right)'=-\dfrac{g'}{g^2}" /> ;{" "}
                <Math tex="\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}" /> (sur <Math tex="g\neq0" />).
              </p>
              <p>
                <Math tex="(f^n)'=nf^{n-1}f'" /> (<Math tex="n\in\mathbb Z" />) ;{" "}
                <Math tex="\left(\sqrt f\right)'=\dfrac{f'}{2\sqrt f}" /> (sur <Math tex="f>0" />).
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Dérivée d'une composée et de la réciproque">
          <Box title="Composée" tone="prop">
            Si <Math tex="f" /> est dérivable en <Math tex="x_0" /> et <Math tex="g" /> est dérivable en{" "}
            <Math tex="f(x_0)" />, alors <Math tex="g\circ f" /> est dérivable en <Math tex="x_0" /> et :
          </Box>
          <MathBlock tex="(g\circ f)'(x_0)=f'(x_0)\times g'\big(f(x_0)\big)" />
          <Callout variant="success" title="Applications utiles">
            <div className="space-y-1.5">
              <p>
                <Math tex="\big(\sqrt[n]{f}\big)'=\dfrac{f'}{n\sqrt[n]{f^{\,n-1}}}" /> (sur <Math tex="f>0" />).
              </p>
              <p>
                <Math tex="\big(\sin(ax+b)\big)'=a\cos(ax+b)" /> ; <Math tex="\big(\cos(ax+b)\big)'=-a\sin(ax+b)" />
                .
              </p>
            </div>
          </Callout>
          <Box title="Dérivée de la fonction réciproque" tone="prop">
            Si <Math tex="f" /> est continue, strictement monotone sur <Math tex="I" />, dérivable en{" "}
            <Math tex="x_0" /> avec <Math tex="f'(x_0)\neq0" />, alors <Math tex="f^{-1}" /> est dérivable en{" "}
            <Math tex="y_0=f(x_0)" /> et <Math tex="\left(f^{-1}\right)'(y_0)=\dfrac{1}{f'(x_0)}" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. VARIATIONS ===================== */}
      <LessonSection
        id="cours-variations"
        kicker="03 · Lire le sens de variation dans le signe de f′"
        title="Monotonie, extremums, concavité et symétries"
        tone="light"
        description="Le signe de f′ donne le sens de variation ; le signe de f″ donne la concavité de la courbe."
      >
        <CourseBlock numeral="V" title="Monotonie et extremums">
          <Box title="Propriété" tone="prop">
            Si <Math tex="f'>0" /> sur <Math tex="I" /> (sauf en un nombre fini de points), <Math tex="f" /> est
            strictement croissante sur <Math tex="I" />. Si <Math tex="f'<0" /> sur <Math tex="I" />, <Math tex="f" />{" "}
            est strictement décroissante. Si <Math tex="f'=0" /> sur <Math tex="I" />, <Math tex="f" /> est
            constante.
          </Box>
          <Callout variant="warning" title="Extremums">
            Si <Math tex="f" /> est dérivable en <Math tex="a" /> et admet un extremum local en <Math tex="a" />,
            alors <Math tex="f'(a)=0" /> (condition nécessaire, pas suffisante). Réciproquement, si{" "}
            <Math tex="f'" /> s&apos;annule en <Math tex="a" /> <strong>en changeant de signe</strong>, alors{" "}
            <Math tex="f(a)" /> est un extremum local de <Math tex="f" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Concavité et points d'inflexion">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="f" /> deux fois dérivable sur <Math tex="I" />. Si <Math tex="f''>0" /> sur{" "}
            <Math tex="I" />, <Math tex="(C_f)" /> est <strong>convexe</strong> (au-dessus de ses tangentes). Si{" "}
            <Math tex="f''<0" /> sur <Math tex="I" />, <Math tex="(C_f)" /> est <strong>concave</strong> (en
            dessous de ses tangentes).
          </Box>
          <Callout variant="success" title="Point d'inflexion">
            Si <Math tex="f''" /> s&apos;annule en <Math tex="x_0" /> en changeant de signe, le point{" "}
            <Math tex="A(x_0,f(x_0))" /> est un <strong>point d&apos;inflexion</strong> : la tangente en{" "}
            <Math tex="A" /> traverse la courbe.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Éléments de symétrie">
          <Box title="Centre et axe de symétrie" tone="def">
            <div className="space-y-1.5">
              <p>
                Le point <Math tex="I(a,b)" /> est <strong>centre de symétrie</strong> de <Math tex="(C_f)" /> si,
                pour tout <Math tex="x" /> du domaine (avec <Math tex="2a-x" /> aussi dans le domaine) :{" "}
                <Math tex="f(2a-x)+f(x)=2b" />.
              </p>
              <p>
                La droite <Math tex="x=a" /> est <strong>axe de symétrie</strong> de <Math tex="(C_f)" /> si{" "}
                <Math tex="f(2a-x)=f(x)" /> pour tout <Math tex="x" /> du domaine.
              </p>
            </div>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. BRANCHES INFINIES ===================== */}
      <LessonSection
        id="cours-branches"
        kicker="04 · Le comportement à l'infini et l'approximation locale"
        title="Branches infinies et approximation affine"
        tone="muted"
        description="Asymptotes verticales, horizontales, obliques, branches paraboliques — et l'approximation d'une fonction au voisinage d'un point."
      >
        <CourseBlock numeral="VIII" title="Asymptotes et branches paraboliques">
          <Box title="Asymptote verticale / horizontale" tone="def">
            Si <Math tex="\displaystyle\lim_{x\to a} f(x)=\pm\infty" />, la droite <Math tex="x=a" /> est asymptote
            verticale à <Math tex="(C_f)" />. Si <Math tex="\displaystyle\lim_{x\to\pm\infty} f(x)=b" />, la droite{" "}
            <Math tex="y=b" /> est asymptote horizontale.
          </Box>
          <Box title="Asymptote oblique" tone="def">
            Si <Math tex="\displaystyle\lim_{x\to\pm\infty}\big[f(x)-(ax+b)\big]=0" /> avec <Math tex="a\neq0" />,
            la droite <Math tex="y=ax+b" /> est asymptote oblique. En pratique :{" "}
            <Math tex="a=\displaystyle\lim_{x\to\pm\infty}\dfrac{f(x)}{x}" /> puis{" "}
            <Math tex="b=\displaystyle\lim_{x\to\pm\infty}\big[f(x)-ax\big]" />.
          </Box>
          <Callout variant="warning" title="Cas particuliers (branches paraboliques)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="\displaystyle\lim\dfrac{f(x)}{x}=\pm\infty" /> : branche parabolique de direction
                l&apos;axe des ordonnées.
              </li>
              <li>
                Si <Math tex="\displaystyle\lim\dfrac{f(x)}{x}=0" /> : branche parabolique de direction l&apos;axe
                des abscisses.
              </li>
              <li>
                Si <Math tex="\displaystyle\lim\dfrac{f(x)}{x}=a\neq0" /> et{" "}
                <Math tex="\displaystyle\lim[f(x)-ax]=\pm\infty" /> : branche parabolique de direction{" "}
                <Math tex="y=ax" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Approximation affine">
          <Box title="Propriété" tone="prop">
            Si <Math tex="f" /> est dérivable en <Math tex="a" />, alors pour <Math tex="h" /> proche de{" "}
            <Math tex="0" /> :
          </Box>
          <MathBlock tex="f(a+h)\approx f(a)+h\,f'(a)" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Dérivabilité et Étude des fonctions"
        tone="light"
        description="11 exercices corrigés : tangentes, points anguleux, dérivées de composées, monotonie, extremums, concavité, symétries et branches infinies."
      >
        <ExerciseGroup
          total={11}
          celebrationTitle="Bravo, les 11 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre dérivabilité et étude des fonctions est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Nombre dérivé et tangente"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^2-3x+2" />. Calculer <Math tex="f'(2)" /> et écrire une équation de la
                tangente à <Math tex="(C_f)" /> au point d&apos;abscisse <Math tex="2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f(2)=4-6+2=0" /> et <Math tex="f'(x)=2x-3" /> donc <Math tex="f'(2)=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  La tangente est <Math tex="T:\ y=1\times(x-2)+0" />, soit <Math tex="T:\ y=x-2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Point anguleux"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=|x^2-1|" />. Étudier la dérivabilité de <Math tex="f" /> en{" "}
                <Math tex="x_0=1" /> et interpréter géométriquement.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Pour <Math tex="x" /> proche de <Math tex="1" /> avec <Math tex="x>1" /> :{" "}
                  <Math tex="f(x)=x^2-1" />, donc <Math tex="f'_d(1)=2\times1=2" />.
                </p>
                <p>
                  Pour <Math tex="x" /> proche de <Math tex="1" /> avec <Math tex="x<1" /> (et{" "}
                  <Math tex="x>-1" />) : <Math tex="f(x)=1-x^2" />, donc <Math tex="f'_g(1)=-2\times1=-2" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f'_d(1)=2\neq-2=f'_g(1)" /> : <Math tex="f" /> n&apos;est pas dérivable en{" "}
                  <Math tex="1" />. Le point <Math tex="A(1,0)" /> est un point anguleux, avec demi-tangente à
                  droite <Math tex="y=2x-2" /> (<Math tex="x\geq1" />) et demi-tangente à gauche{" "}
                  <Math tex="y=-2x+2" /> (<Math tex="x\leq1" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Dérivées de composées"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer les dérivées de <Math tex="h(x)=\sqrt{x^2+4}" />, <Math tex="k(x)=(3x-1)^5" /> et{" "}
                <Math tex="m(x)=\sqrt[3]{2x+1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="h'(x)=\dfrac{2x}{2\sqrt{x^2+4}}=\dfrac{x}{\sqrt{x^2+4}}" />.
                </p>
                <p>
                  <Math tex="k'(x)=5(3x-1)^4\times3=15(3x-1)^4" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="m'(x)=\dfrac13(2x+1)^{-\frac23}\times2=\dfrac{2}{3\sqrt[3]{(2x+1)^2}}" /> (pour{" "}
                  <Math tex="x\neq-\frac12" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Tableau de variation d'un polynôme"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Étudier les variations de <Math tex="f(x)=x^3-3x+2" /> sur <Math tex="\mathbb R" /> et dresser son
                tableau de variation.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=3x^2-3=3(x-1)(x+1)" />. <Math tex="f'" /> est positive sur{" "}
                  <Math tex="]-\infty,-1]\cup[1,+\infty[" /> et négative sur <Math tex="[-1,1]" />.
                </p>
                <p>
                  <Math tex="f(-1)=-1+3+2=4" /> (maximum local) et <Math tex="f(1)=1-3+2=0" /> (minimum local).{" "}
                  <Math tex="\displaystyle\lim_{x\to-\infty}f(x)=-\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to+\infty}f(x)=+\infty" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est croissante sur <Math tex="]-\infty,-1]" />, décroissante sur{" "}
                  <Math tex="[-1,1]" />, croissante sur <Math tex="[1,+\infty[" />, avec max local{" "}
                  <Math tex="4" /> en <Math tex="-1" /> et min local <Math tex="0" /> en <Math tex="1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Condition nécessaire vs suffisante d'extremum"
            itemsLabel="1 étude en 2 parties"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                a) Soit <Math tex="\varphi(x)=x^3-3x^2+3x" />. Montrer que <Math tex="\varphi'(1)=0" /> mais que{" "}
                <Math tex="\varphi" /> n&apos;admet pas d&apos;extremum en <Math tex="1" />. b) Soit{" "}
                <Math tex="\psi(x)=x^3-3x" />. Montrer que <Math tex="\psi" /> admet des extremums locaux en{" "}
                <Math tex="-1" /> et <Math tex="1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  a) <Math tex="\varphi'(x)=3x^2-6x+3=3(x-1)^2\geq0" /> sur <Math tex="\mathbb R" /> :{" "}
                  <Math tex="\varphi'" /> ne change pas de signe (elle s&apos;annule sans traverser), donc{" "}
                  <Math tex="\varphi" /> est strictement croissante sur <Math tex="\mathbb R" /> malgré{" "}
                  <Math tex="\varphi'(1)=0" /> : <Math tex="\varphi(1)=1" /> n&apos;est pas un extremum.
                </p>
                <p className="font-semibold text-green-700">
                  b) <Math tex="\psi'(x)=3x^2-3=3(x-1)(x+1)" /> change de signe en <Math tex="-1" /> et en{" "}
                  <Math tex="1" /> : <Math tex="\psi(-1)=2" /> est un maximum local et <Math tex="\psi(1)=-2" /> est
                  un minimum local.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Concavité et point d'inflexion"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^3-3x^2+2" />. Étudier la concavité de <Math tex="(C_f)" />, montrer
                qu&apos;elle admet un point d&apos;inflexion et donner l&apos;équation de la tangente en ce point.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=3x^2-6x" /> et <Math tex="f''(x)=6x-6=6(x-1)" />.
                </p>
                <p>
                  <Math tex="f''(x)<0" /> pour <Math tex="x<1" /> (concave) et <Math tex="f''(x)>0" /> pour{" "}
                  <Math tex="x>1" /> (convexe) : <Math tex="f''" /> change de signe en <Math tex="1" />.
                </p>
                <p>
                  <Math tex="f(1)=1-3+2=0" /> : le point <Math tex="I(1,0)" /> est un point d&apos;inflexion.{" "}
                  <Math tex="f'(1)=3-6=-3" />.
                </p>
                <p className="font-semibold text-green-700">
                  La tangente en <Math tex="I" /> est <Math tex="y=-3(x-1)" />, soit <Math tex="y=-3x+3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Centre de symétrie"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=x^3-3x^2+4x-1" />. Montrer que le point <Math tex="I(1,f(1))" /> est un
                centre de symétrie de <Math tex="(C_f)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f(1)=1-3+4-1=1" />. Il faut vérifier que <Math tex="f(2-x)+f(x)=2" /> pour tout{" "}
                  <Math tex="x\in\mathbb R" />.
                </p>
                <p>
                  <Math tex="f(2-x)=(2-x)^3-3(2-x)^2+4(2-x)-1=-x^3+3x^2-4x+3" /> (en développant).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(2-x)+f(x)=(-x^3+3x^2-4x+3)+(x^3-3x^2+4x-1)=2=2f(1)" /> : <Math tex="I(1,1)" />{" "}
                  est bien centre de symétrie de <Math tex="(C_f)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Étude complète des asymptotes"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{x^2-x+1}{x-1}" /> sur <Math tex="\mathbb R\setminus\{1\}" />.
                Déterminer les asymptotes de <Math tex="(C_f)" /> et la position de <Math tex="(C_f)" /> par
                rapport à son asymptote oblique.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  La division donne <Math tex="f(x)=x+\dfrac{1}{x-1}" /> (car{" "}
                  <Math tex="x^2-x+1=(x-1)x+1" />).
                </p>
                <p>
                  Comme <Math tex="\displaystyle\lim_{x\to1^{+}}f(x)=+\infty" /> et{" "}
                  <Math tex="\displaystyle\lim_{x\to1^{-}}f(x)=-\infty" /> : la droite <Math tex="x=1" /> est
                  asymptote verticale.
                </p>
                <p>
                  Comme <Math tex="f(x)-x=\dfrac{1}{x-1}\to0" /> quand <Math tex="x\to\pm\infty" /> : la droite{" "}
                  <Math tex="y=x" /> est asymptote oblique.
                </p>
                <p className="font-semibold text-green-700">
                  Pour <Math tex="x>1" />, <Math tex="f(x)-x=\frac1{x-1}>0" /> : <Math tex="(C_f)" /> est au-dessus
                  de l&apos;asymptote. Pour <Math tex="x<1" />, <Math tex="(C_f)" /> est en dessous.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Branches infinies avec racine carrée"
            itemsLabel="2 études"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\sqrt{x^2+x}" />. Étudier les branches infinies de <Math tex="(C_f)" /> en{" "}
                <Math tex="+\infty" /> et en <Math tex="-\infty" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En <Math tex="+\infty" /> : <Math tex="\dfrac{f(x)}{x}=\dfrac{\sqrt{x^2+x}}{x}=\sqrt{1+\frac1x}\to1" />
                  . Puis <Math tex="f(x)-x=\dfrac{x}{\sqrt{x^2+x}+x}\to\dfrac12" /> (conjugué). Donc{" "}
                  <Math tex="y=x+\dfrac12" /> est asymptote oblique en <Math tex="+\infty" />.
                </p>
                <p className="font-semibold text-green-700">
                  En <Math tex="-\infty" /> : de même, <Math tex="\dfrac{f(x)}{x}\to-1" /> et{" "}
                  <Math tex="f(x)+x\to-\dfrac12" />, donc <Math tex="y=-x-\dfrac12" /> est asymptote oblique en{" "}
                  <Math tex="-\infty" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Approximation affine"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                À l&apos;aide de la fonction <Math tex="f(x)=\sqrt x" />, donner une valeur approchée de{" "}
                <Math tex="\sqrt{16{,}1}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=\dfrac{1}{2\sqrt x}" /> donc <Math tex="f'(16)=\dfrac{1}{8}" />.
                </p>
                <p>
                  Avec <Math tex="a=16" /> et <Math tex="h=0{,}1" /> : <Math tex="f(16+h)\approx f(16)+h\,f'(16)=4+\dfrac{0{,}1}{8}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\sqrt{16{,}1}\approx4{,}0125" /> (la valeur exacte est{" "}
                  <Math tex="\approx4{,}01248" />, l&apos;approximation est très bonne).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Synthèse : parité, variations et asymptotes"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f(x)=\dfrac{x^2+1}{x}" /> sur <Math tex="\mathbb R^*" />. Étudier la parité de{" "}
                <Math tex="f" />, ses variations avec extremums, et les asymptotes de <Math tex="(C_f)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f(-x)=\dfrac{x^2+1}{-x}=-f(x)" /> : <Math tex="f" /> est impaire, <Math tex="(C_f)" />{" "}
                  est symétrique par rapport à <Math tex="O" />.
                </p>
                <p>
                  <Math tex="f'(x)=\dfrac{2x\cdot x-(x^2+1)}{x^2}=\dfrac{x^2-1}{x^2}" />. Positive pour{" "}
                  <Math tex="|x|>1" />, négative pour <Math tex="0<|x|<1" />.
                </p>
                <p>
                  <Math tex="f(-1)=-2" /> (maximum local), <Math tex="f(1)=2" /> (minimum local).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="x=0" /> est asymptote verticale (<Math tex="f(x)\to\pm\infty" />). Comme{" "}
                  <Math tex="f(x)=x+\dfrac1x" />, la droite <Math tex="y=x" /> est asymptote oblique, avec{" "}
                  <Math tex="(C_f)" /> au-dessus pour <Math tex="x>0" /> et en dessous pour <Math tex="x<0" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
