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
  title: "Équations différentielles · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet sur les équations différentielles pour la 2ème année Baccalauréat Sciences Mathématiques (Semestre 1) : vocabulaire et linéarité, équations du premier ordre y'=ay et y'=ay+b, équations du second ordre à coefficients constants ay''+by'+cy=0 (trois cas selon le discriminant), avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "Équations différentielles",
  heroSubtitle:
    "Des équations dont l'inconnue est une fonction. Du premier ordre y'=ay+b au second ordre ay''+by'+cy=0, avec les trois cas du discriminant.",
  footerNote:
    "Équations différentielles · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-definitions", label: "Définitions" },
    { id: "cours-premier-ordre", label: "Ordre 1" },
    { id: "cours-second-ordre", label: "Ordre 2" },
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
          { value: "10", label: "exercices corrigés" },
          { value: "3", label: "types d'équations" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-definitions"
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
          <div className="relative flex select-none items-center gap-2 font-display text-5xl font-extrabold text-white sm:text-6xl">
            <Math tex="y'=ay+b" />
          </div>
        }
      />

      {/* ===================== I. DÉFINITIONS ===================== */}
      <LessonSection
        id="cours-definitions"
        kicker="01 · Une équation dont l'inconnue est une fonction"
        title="Vocabulaire et linéarité"
        tone="light"
        description="Une équation différentielle relie une fonction inconnue à ses dérivées successives. On se limite ici aux équations linéaires à coefficients constants."
      >
        <CourseBlock numeral="I" title="Définitions et vocabulaire">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">équation différentielle</strong> est une équation dont
            l&apos;inconnue est une fonction (notée <Math tex="y" /> au lieu de <Math tex="y(x)" />), reliant cette
            fonction à une ou plusieurs de ses dérivées successives. L&apos;<strong>ordre</strong> de l&apos;équation
            est le plus grand ordre de dérivation qui y apparaît.
          </Box>
          <Callout variant="info" title="Exemples">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="y'=e^{2x}" /> est une équation différentielle du{" "}
                <strong>premier ordre</strong> ; ses solutions sont les primitives de{" "}
                <Math tex="x\mapsto e^{2x}" />, soit <Math tex="x\mapsto \dfrac12e^{2x}+c" /> (<Math tex="c\in\mathbb R" />
                ).
              </li>
              <li>
                <Math tex="y''+4y=0" /> est une équation différentielle du <strong>second ordre</strong>, sans
                second membre.
              </li>
            </ul>
          </Callout>
          <Box title="Linéarité" tone="prop">
            Les équations étudiées dans ce chapitre sont <strong>linéaires à coefficients constants</strong> : elles
            s&apos;écrivent comme une combinaison des dérivées de <Math tex="y" /> égale à une constante (ou à{" "}
            <Math tex="0" />). Conséquence essentielle (<strong>principe de superposition</strong>) : si{" "}
            <Math tex="y_1" /> et <Math tex="y_2" /> sont solutions d&apos;une équation{" "}
            <em>sans second membre</em>, alors, pour tous réels <Math tex="A" /> et <Math tex="B" />, la fonction{" "}
            <Math tex="Ay_1+By_2" /> est encore solution.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PREMIER ORDRE ===================== */}
      <LessonSection
        id="cours-premier-ordre"
        kicker="02 · Le cas le plus simple"
        title="Équations différentielles du premier ordre"
        tone="muted"
        description="Les solutions de y'=ay et de y'=ay+b s'expriment toutes à l'aide de la fonction exponentielle."
      >
        <CourseBlock numeral="II" title="L'équation y′=ay (a∈ℝ*)">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="a\in\mathbb R^*" />. La solution générale de l&apos;équation différentielle{" "}
            <Math tex="(E):y'=ay" /> est l&apos;ensemble des fonctions :
          </Box>
          <MathBlock tex="x\longmapsto \lambda e^{ax},\quad \lambda\in\mathbb R" />
          <Callout variant="info" title="Démonstration (idée)">
            La fonction nulle est solution. Si <Math tex="y" /> ne s&apos;annule pas, <Math tex="(E)" /> équivaut à{" "}
            <Math tex="\dfrac{y'}{y}=a" />, c&apos;est-à-dire <Math tex="\big(\ln|y|\big)'=a" />, donc{" "}
            <Math tex="\ln|y(x)|=ax+c" />, puis <Math tex="y(x)=\pm e^{c}e^{ax}=\lambda e^{ax}" /> avec{" "}
            <Math tex="\lambda\in\mathbb R^*" />. La fonction nulle correspond au cas <Math tex="\lambda=0" />.
          </Callout>
          <Callout variant="success" title="Exemple">
            La solution générale de <Math tex="y'=3y" /> est <Math tex="x\mapsto\lambda e^{3x}" /> (
            <Math tex="\lambda\in\mathbb R" />).
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="L'équation y′=ay+b (a∈ℝ*, b∈ℝ)">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="a\in\mathbb R^*" /> et <Math tex="b\in\mathbb R" />. La solution générale de{" "}
            <Math tex="(E):y'=ay+b" /> est l&apos;ensemble des fonctions :
          </Box>
          <MathBlock tex="x\longmapsto \lambda e^{ax}-\dfrac{b}{a},\quad \lambda\in\mathbb R" />
          <Callout variant="info" title="Démonstration (idée)">
            La fonction constante <Math tex="y=-\dfrac{b}{a}" /> est solution particulière de <Math tex="(E)" /> (
            <Math tex="a\times\left(-\dfrac ba\right)+b=0" />). Posons <Math tex="z=y+\dfrac ba" /> : on a{" "}
            <Math tex="z'=y'=ay+b=a\left(z-\dfrac ba\right)+b=az" />, donc <Math tex="z" /> est solution de{" "}
            <Math tex="z'=az" />, c&apos;est-à-dire <Math tex="z(x)=\lambda e^{ax}" />. D&apos;où{" "}
            <Math tex="y(x)=\lambda e^{ax}-\dfrac ba" />.
          </Callout>
          <Callout variant="warning" title="Remarque">
            Le réel <Math tex="\lambda" /> se détermine grâce à une <strong>condition initiale</strong>, comme{" "}
            <Math tex="y(0)" />.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. SECOND ORDRE ===================== */}
      <LessonSection
        id="cours-second-ordre"
        kicker="03 · L'équation caractéristique"
        title="Équations différentielles du second ordre à coefficients constants"
        tone="light"
        description="On cherche des solutions de la forme x↦e^(rx) : le nombre r doit alors vérifier une équation du second degré, l'équation caractéristique."
      >
        <CourseBlock numeral="IV" title="L'équation ay″+by′+cy=0 (a≠0)">
          <Box title="Définition" tone="def">
            Soit <Math tex="a\in\mathbb R^*" />, <Math tex="b,c\in\mathbb R" />. On considère{" "}
            <Math tex="(E):ay''+by'+cy=0" />. On cherche des solutions de la forme{" "}
            <Math tex="y(x)=e^{rx}" /> où <Math tex="r" /> est un nombre (a priori complexe). Comme{" "}
            <Math tex="y'(x)=re^{rx}" /> et <Math tex="y''(x)=r^2e^{rx}" />, dire que <Math tex="y" /> est solution
            équivaut à <Math tex="\big(ar^2+br+c\big)e^{rx}=0" />, soit, puisque{" "}
            <Math tex="e^{rx}\neq0" />, à :
          </Box>
          <MathBlock tex="ar^2+br+c=0" />
          <Box title="Vocabulaire" tone="def">
            Cette équation, d&apos;inconnue <Math tex="r" />, s&apos;appelle l&apos;
            <strong className="text-foreground">équation caractéristique</strong> de <Math tex="(E)" />. Son
            discriminant est <Math tex="\Delta=b^2-4ac" />.
          </Box>
          <Callout variant="success" title="Théorème : les trois cas">
            <div className="space-y-3">
              <p>
                <strong>1) Si <Math tex="\Delta>0" /></strong> : l&apos;équation caractéristique a deux racines
                réelles distinctes <Math tex="r_1" /> et <Math tex="r_2" />. Les solutions de <Math tex="(E)" />{" "}
                sont les fonctions :
              </p>
              <MathBlock tex="y(x)=Ae^{r_1x}+Be^{r_2x},\quad (A,B)\in\mathbb R^2" />
              <p>
                <strong>2) Si <Math tex="\Delta=0" /></strong> : l&apos;équation caractéristique a une racine double{" "}
                <Math tex="r=-\dfrac{b}{2a}" />. Les solutions de <Math tex="(E)" /> sont les fonctions :
              </p>
              <MathBlock tex="y(x)=(Ax+B)e^{rx},\quad (A,B)\in\mathbb R^2" />
              <p>
                <strong>3) Si <Math tex="\Delta<0" /></strong> : l&apos;équation caractéristique a deux racines
                complexes conjuguées <Math tex="p\pm iq" />. Les solutions de <Math tex="(E)" /> sont les fonctions
                (à valeurs réelles) :
              </p>
              <MathBlock tex="y(x)=e^{px}\big(A\cos(qx)+B\sin(qx)\big),\quad (A,B)\in\mathbb R^2" />
            </div>
          </Callout>
          <Callout variant="warning" title="Remarque">
            Comme pour l&apos;ordre 1, deux conditions initiales (par exemple <Math tex="y(0)" /> et{" "}
            <Math tex="y'(0)" />) permettent de déterminer les deux constantes <Math tex="A" /> et{" "}
            <Math tex="B" />.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Équations différentielles"
        tone="muted"
        description="10 exercices corrigés, au niveau Sciences Mathématiques : premier ordre, second ordre (les trois cas), vérification directe et application concrète."
      >
        <ExerciseGroup
          total={10}
          celebrationTitle="Bravo, les 10 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre équations différentielles est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Premier ordre sans second membre"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre l&apos;équation différentielle <Math tex="(E):y'=-2y" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-green-700">
                  D&apos;après le cours, la solution générale de <Math tex="(E)" /> est l&apos;ensemble des
                  fonctions <Math tex="x\mapsto \lambda e^{-2x}" /> où <Math tex="\lambda\in\mathbb R" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Premier ordre avec second membre et condition initiale"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y'=3y-6" />, puis déterminer la solution <Math tex="f" /> de{" "}
                <Math tex="(E)" /> telle que <Math tex="f(0)=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Ici <Math tex="a=3" /> et <Math tex="b=-6" />, donc <Math tex="-\dfrac ba=\dfrac63=2" />. La
                  solution générale de <Math tex="(E)" /> est <Math tex="x\mapsto\lambda e^{3x}+2" /> (
                  <Math tex="\lambda\in\mathbb R" />).
                </p>
                <p>
                  <Math tex="f(0)=\lambda+2=1" />, donc <Math tex="\lambda=-1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=-e^{3x}+2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Mettre sous forme standard"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre l&apos;équation différentielle <Math tex="(E):3y'-2y+6=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="(E)\iff 3y'=2y-6\iff y'=\dfrac23y-2" />. Ici <Math tex="a=\dfrac23" /> et{" "}
                  <Math tex="b=-2" />, donc <Math tex="-\dfrac ba=\dfrac{2}{2/3}=3" />.
                </p>
                <p className="font-semibold text-green-700">
                  La solution générale de <Math tex="(E)" /> est{" "}
                  <Math tex="x\mapsto\lambda e^{\frac23x}+3" /> (<Math tex="\lambda\in\mathbb R" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Second ordre, Δ>0"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''-5y'+6y=0" />, puis déterminer la solution <Math tex="f" /> de{" "}
                <Math tex="(E)" /> telle que <Math tex="f(0)=1" /> et <Math tex="f'(0)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2-5r+6=0" />, soit{" "}
                  <Math tex="(r-2)(r-3)=0" />, donc <Math tex="r_1=2" /> et <Math tex="r_2=3" /> (
                  <Math tex="\Delta=1>0" />).
                </p>
                <p>
                  La solution générale de <Math tex="(E)" /> est <Math tex="y(x)=Ae^{2x}+Be^{3x}" />.
                </p>
                <p>
                  <Math tex="f(0)=A+B=1" /> et <Math tex="f'(x)=2Ae^{2x}+3Be^{3x}" /> donc{" "}
                  <Math tex="f'(0)=2A+3B=0" />.
                </p>
                <p>
                  De <Math tex="A=1-B" /> on tire <Math tex="2(1-B)+3B=0\iff 2+B=0\iff B=-2" />, puis{" "}
                  <Math tex="A=3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=3e^{2x}-2e^{3x}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Second ordre, Δ=0"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''-6y'+9y=0" />, puis déterminer la solution <Math tex="f" /> de{" "}
                <Math tex="(E)" /> telle que <Math tex="f(0)=2" /> et <Math tex="f'(0)=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2-6r+9=0" />, soit <Math tex="(r-3)^2=0" /> (
                  <Math tex="\Delta=0" />) : racine double <Math tex="r=3" />.
                </p>
                <p>
                  La solution générale de <Math tex="(E)" /> est <Math tex="y(x)=(Ax+B)e^{3x}" />.
                </p>
                <p>
                  <Math tex="f(0)=B=2" />. Et{" "}
                  <Math tex="f'(x)=Ae^{3x}+3(Ax+B)e^{3x}=\big(A+3Ax+3B\big)e^{3x}" />, donc{" "}
                  <Math tex="f'(0)=A+3B=1\iff A+6=1\iff A=-5" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=(-5x+2)e^{3x}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Second ordre, Δ<0"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''+2y'+5y=0" />, puis déterminer la solution <Math tex="f" /> de{" "}
                <Math tex="(E)" /> telle que <Math tex="f(0)=1" /> et <Math tex="f'(0)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2+2r+5=0" />, <Math tex="\Delta=4-20=-16<0" />. Les
                  racines sont <Math tex="r=\dfrac{-2\pm4i}{2}=-1\pm2i" />, donc <Math tex="p=-1" /> et{" "}
                  <Math tex="q=2" />.
                </p>
                <p>
                  La solution générale de <Math tex="(E)" /> est{" "}
                  <Math tex="y(x)=e^{-x}\big(A\cos(2x)+B\sin(2x)\big)" />.
                </p>
                <p>
                  <Math tex="f(0)=A=1" />. On calcule{" "}
                  <Math tex="f'(x)=e^{-x}\Big[(-A+2B)\cos(2x)+(-B-2A)\sin(2x)\Big]" />, donc{" "}
                  <Math tex="f'(0)=-A+2B=0\iff B=\dfrac12" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=e^{-x}\left(\cos(2x)+\dfrac12\sin(2x)\right)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Oscillateur pur (p=0)"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''+9y=0" />, puis déterminer la solution <Math tex="f" /> de{" "}
                <Math tex="(E)" /> telle que <Math tex="f(0)=2" /> et <Math tex="f'(0)=3" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2+9=0" />, de racines <Math tex="r=\pm3i" /> (
                  <Math tex="p=0" />, <Math tex="q=3" />).
                </p>
                <p>
                  La solution générale de <Math tex="(E)" /> est{" "}
                  <Math tex="y(x)=A\cos(3x)+B\sin(3x)" />.
                </p>
                <p>
                  <Math tex="f(0)=A=2" />. <Math tex="f'(x)=-3A\sin(3x)+3B\cos(3x)" />, donc{" "}
                  <Math tex="f'(0)=3B=3\iff B=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=2\cos(3x)+\sin(3x)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Application : décroissance radioactive"
            itemsLabel="1 problème"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                La quantité <Math tex="N(t)" /> d&apos;atomes radioactifs d&apos;un échantillon vérifie{" "}
                <Math tex="N'(t)=-\lambda N(t)" /> où <Math tex="\lambda>0" /> est une constante, avec{" "}
                <Math tex="N(0)=N_0" />. Exprimer <Math tex="N(t)" />, puis déterminer la{" "}
                <strong>demi-vie</strong> <Math tex="T" /> (l&apos;instant où <Math tex="N(T)=\dfrac{N_0}{2}" />)
                en fonction de <Math tex="\lambda" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="N'=-\lambda N" /> est de la forme <Math tex="y'=ay" /> avec <Math tex="a=-\lambda" />,
                  donc <Math tex="N(t)=Ce^{-\lambda t}" />. Comme <Math tex="N(0)=C=N_0" /> :
                </p>
                <p>
                  <Math tex="N(t)=N_0e^{-\lambda t}" />.
                </p>
                <p>
                  <Math tex="N(T)=\dfrac{N_0}{2}\iff N_0e^{-\lambda T}=\dfrac{N_0}{2}\iff e^{-\lambda T}=\dfrac12\iff -\lambda T=\ln\!\left(\dfrac12\right)=-\ln2" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="T=\dfrac{\ln2}{\lambda}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Vérification directe"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Vérifier que <Math tex="f(x)=xe^{2x}" /> est solution de{" "}
                <Math tex="(E):y''-4y'+4y=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="f'(x)=e^{2x}+2xe^{2x}=(1+2x)e^{2x}" />.
                </p>
                <p>
                  <Math tex="f''(x)=2e^{2x}+2(1+2x)e^{2x}=e^{2x}\big(2+2+4x\big)=(4+4x)e^{2x}" />.
                </p>
                <p>
                  <Math tex="f''(x)-4f'(x)+4f(x)=(4+4x)e^{2x}-4(1+2x)e^{2x}+4xe^{2x}" />
                </p>
                <p>
                  <Math tex="=e^{2x}\big[(4+4x)-(4+8x)+4x\big]=e^{2x}\times0=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;égalité <Math tex="f''-4f'+4f=0" /> est vérifiée pour tout <Math tex="x" /> : <Math tex="f" />{" "}
                  est bien solution de <Math tex="(E)" />. (On retrouve d&apos;ailleurs que{" "}
                  <Math tex="r=2" /> est racine double de l&apos;équation caractéristique{" "}
                  <Math tex="r^2-4r+4=0" />.)
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Second ordre, Δ>0 (deuxième exemple)"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''+y'-6y=0" />, puis déterminer la solution <Math tex="f" /> de{" "}
                <Math tex="(E)" /> telle que <Math tex="f(0)=0" /> et <Math tex="f'(0)=5" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2+r-6=0" />, <Math tex="\Delta=1+24=25" />, donc{" "}
                  <Math tex="r=\dfrac{-1-5}{2}=-3" /> ou <Math tex="r=\dfrac{-1+5}{2}=2" />.
                </p>
                <p>
                  La solution générale de <Math tex="(E)" /> est <Math tex="y(x)=Ae^{2x}+Be^{-3x}" />.
                </p>
                <p>
                  <Math tex="f(0)=A+B=0\iff B=-A" />. <Math tex="f'(x)=2Ae^{2x}-3Be^{-3x}" />, donc{" "}
                  <Math tex="f'(0)=2A-3B=2A+3A=5A=5\iff A=1" />, d&apos;où <Math tex="B=-1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=e^{2x}-e^{-3x}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
