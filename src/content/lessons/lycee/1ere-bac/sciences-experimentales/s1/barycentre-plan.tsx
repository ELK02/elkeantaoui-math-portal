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
  title: "Barycentre dans le plan · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur le barycentre dans le plan pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : barycentre de deux, trois et quatre points pondérés, propriété caractéristique, associativité (barycentre partiel), coordonnées du barycentre, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 1",
  heroTitle: "Barycentre dans le plan",
  heroSubtitle:
    "Le point d'équilibre d'un système de points pondérés — et l'outil le plus puissant du programme pour prouver des alignements et des concourances sans aucun calcul de coordonnées.",
  footerNote: "Barycentre dans le plan · Mathématiques, 1ère année Baccalauréat, semestre 1.",
  sections: [
    { id: "cours-deux-points", label: "Deux points" },
    { id: "cours-trois-points", label: "Trois points" },
    { id: "cours-quatre-points", label: "Quatre points" },
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

function Figure({ text, svg, reverse = false }: { text: ReactNode; svg: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-5">
      <div className={`space-y-2 text-sm text-foreground ${reverse ? "sm:order-2 sm:col-span-3" : "sm:col-span-3"}`}>
        {text}
      </div>
      <div className={`flex justify-center ${reverse ? "sm:order-1" : ""} sm:col-span-2`}>{svg}</div>
    </div>
  );
}

function FigureBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface-muted p-4">
      {children}
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
          { value: "3", label: "propriétés-clés" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-deux-points"
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
          <svg viewBox="0 0 220 140" className="h-40 w-56 text-white">
            <line x1="20" y1="90" x2="200" y2="90" stroke="white" strokeWidth="2" opacity="0.6" />
            <circle cx="20" cy="90" r="4" fill="white" />
            <circle cx="200" cy="90" r="4" fill="white" />
            <circle cx="140" cy="90" r="6" fill="#fb923c" />
            <text x="14" y="75" fontSize="14" fontStyle="italic" fill="white">A</text>
            <text x="196" y="75" fontSize="14" fontStyle="italic" fill="white">B</text>
            <text x="134" y="112" fontSize="14" fontStyle="italic" fill="#fb923c">G</text>
          </svg>
        }
      />

      {/* ===================== I. DEUX POINTS ===================== */}
      <LessonSection
        id="cours-deux-points"
        kicker="01 · Le cas le plus simple"
        title="Barycentre de deux points pondérés"
        tone="light"
        description="Un point pondéré, c'est un point affecté d'un coefficient — le barycentre est le point d'équilibre du système."
      >
        <CourseBlock numeral="I" title="Définition et existence">
          <Box title="Vocabulaire" tone="def">
            Dans l&apos;écriture <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0" />, le nombre{" "}
            <Math tex="a" /> s&apos;appelle le <strong className="text-foreground">poids</strong> (ou coefficient)
            du point <Math tex="A" />. Le couple <Math tex="(A,a)" /> est un{" "}
            <strong className="text-foreground">point pondéré</strong>, et{" "}
            <Math tex="S=\{(A,a),(B,b)\}" /> un <strong className="text-foreground">système pondéré</strong>.
          </Box>
          <Box title="Théorème d'existence" tone="prop">
            Soient <Math tex="(A,a)" /> et <Math tex="(B,b)" /> deux points pondérés avec <Math tex="A\neq B" />.
            Si <Math tex="a+b\neq0" />, il existe un <strong>unique</strong> point <Math tex="G" /> tel que{" "}
            <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0" /> ; <Math tex="G" /> s&apos;appelle le{" "}
            <strong className="text-foreground">barycentre</strong> du système <Math tex="S" />. Si de plus{" "}
            <Math tex="a=b" />, <Math tex="G" /> s&apos;appelle{" "}
            <strong className="text-foreground">isobarycentre</strong> (ou centre de gravité) de{" "}
            <Math tex="A" /> et <Math tex="B" /> — c&apos;est alors le milieu de <Math tex="[AB]" />.
          </Box>
          <Callout variant="warning" title="Preuve — d'où sort l'unicité">
            <MathBlock tex="a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0 \iff \overrightarrow{AG}=\dfrac{b}{a+b}\overrightarrow{AB}" />
            <p>
              Comme <Math tex="A" />, <Math tex="B" /> et le réel <Math tex="\dfrac{b}{a+b}" /> sont fixés, il n&apos;y
              a qu&apos;un seul point <Math tex="G" /> vérifiant cette égalité vectorielle.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Invariance et propriété caractéristique">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Invariance" tone="prop">
              Si <Math tex="G" /> est barycentre de <Math tex="\{(A,a),(B,b)\}" />, alors pour tout{" "}
              <Math tex="k\in\mathbb R^*" />, <Math tex="G" /> est aussi barycentre de{" "}
              <Math tex="\{(A,ka),(B,kb)\}" /> — multiplier tous les poids par un même réel non nul ne change pas
              le barycentre.
            </Box>
            <Box title="Propriété caractéristique" tone="prop">
              <Math tex="G" /> est barycentre de <Math tex="\{(A,a),(B,b)\}" /> ssi{" "}
              <Math tex="a+b\neq0" /> et pour <strong>tout</strong> point <Math tex="M" /> du plan :{" "}
              <MathBlock tex="a\overrightarrow{MA}+b\overrightarrow{MB}=(a+b)\overrightarrow{MG}" />
            </Box>
          </div>
          <Callout variant="success" title="Le résultat le plus utile de tout le chapitre">
            En prenant <Math tex="M=A" /> (ou <Math tex="M=B" />), on obtient{" "}
            <Math tex="\overrightarrow{AG}=\dfrac{b}{a+b}\overrightarrow{AB}" /> : les points <Math tex="A" />,{" "}
            <Math tex="B" /> et <Math tex="G" /> sont donc toujours{" "}
            <strong>alignés</strong>. C&apos;est ce fait, combiné à la propriété caractéristique, qui permet de
            prouver des alignements sans aucune coordonnée.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Construction de G">
          <Figure
            text={
              <>
                <p>
                  On divise <Math tex="[AB]" /> en <Math tex="|a+b|" /> segments égaux de longueur{" "}
                  <Math tex="d=\dfrac{AB}{|a+b|}" />. <Math tex="G" /> est alors à <Math tex="|b|" /> segments de{" "}
                  <Math tex="A" />, dans le sens de <Math tex="A" /> vers <Math tex="B" /> si{" "}
                  <Math tex="\dfrac{b}{a+b}>0" />, dans le sens opposé sinon.
                </p>
                <p>
                  Exemple : <Math tex="(A,2)" /> et <Math tex="(B,3)" /> — <Math tex="\dfrac{b}{a+b}=\dfrac35" />,
                  donc <Math tex="G" /> est aux 3/5 de <Math tex="[AB]" /> à partir de <Math tex="A" />.
                </p>
              </>
            }
            svg={
              <FigureBox>
                <svg viewBox="0 0 240 120" className="w-full max-w-[260px]">
                  <line x1="20" y1="90" x2="220" y2="90" stroke="#334155" strokeWidth="2" />
                  <circle cx="20" cy="90" r="3.5" fill="#1e293b" />
                  <circle cx="220" cy="90" r="3.5" fill="#1e293b" />
                  <circle cx="140" cy="90" r="4.5" fill="#f97316" />
                  <text x="14" y="76" fontSize="13" fontWeight="700">A</text>
                  <text x="216" y="76" fontSize="13" fontWeight="700">B</text>
                  <text x="135" y="76" fontSize="13" fontWeight="700" fill="#f97316">G</text>
                </svg>
              </FigureBox>
            }
          />
          <Box title="Application — ensembles de points" tone="prop">
            <p>
              Déterminer l&apos;ensemble des points <Math tex="M" /> tels que{" "}
              <Math tex="\|2\overrightarrow{MA}+4\overrightarrow{MB}\|=12" />, avec <Math tex="G" /> barycentre de{" "}
              <Math tex="\{(A,2),(B,4)\}" /> :
            </p>
            <MathBlock tex="\begin{gathered} \|2\overrightarrow{MA}+4\overrightarrow{MB}\|=12 \iff \|6\overrightarrow{MG}\|=12 \\ \iff MG=2 \end{gathered}" />
            <p className="font-semibold text-foreground">
              L&apos;ensemble cherché est le <strong>cercle</strong> <Math tex="\mathcal C(G,2)" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Coordonnées de G">
          <Callout variant="success" title="Formule">
            Dans un repère <Math tex="(O,\vec i,\vec j)" />, si <Math tex="A(x_A,y_A)" /> et{" "}
            <Math tex="B(x_B,y_B)" />, le barycentre <Math tex="G" /> de <Math tex="\{(A,a),(B,b)\}" /> a pour
            coordonnées :
            <MathBlock tex="x_G=\dfrac{ax_A+bx_B}{a+b},\qquad y_G=\dfrac{ay_A+by_B}{a+b}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. TROIS POINTS ===================== */}
      <LessonSection
        id="cours-trois-points"
        kicker="02 · Le cas du triangle"
        title="Barycentre de trois points pondérés"
        tone="muted"
        description="Même logique qu'avec deux points, avec un outil supplémentaire décisif : l'associativité."
      >
        <CourseBlock numeral="V" title="Définition, invariance, propriété caractéristique">
          <Box title="Théorème d'existence" tone="prop">
            Si <Math tex="a+b+c\neq0" />, il existe un unique point <Math tex="G" /> tel que{" "}
            <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}+c\overrightarrow{GC}=\vec0" />. Si{" "}
            <Math tex="a=b=c\neq0" />, <Math tex="G" /> est l&apos;isobarycentre de <Math tex="A,B,C" /> — le{" "}
            <strong className="text-foreground">centre de gravité du triangle</strong> <Math tex="ABC" />.
          </Box>
          <Callout variant="success" title="Invariance et propriété caractéristique (mêmes idées qu'à 2 points)">
            <p>
              Multiplier <Math tex="a,b,c" /> par un même <Math tex="k\neq0" /> ne change pas <Math tex="G" />.
              Et pour tout point <Math tex="M" /> :
            </p>
            <MathBlock tex="a\overrightarrow{MA}+b\overrightarrow{MB}+c\overrightarrow{MC}=(a+b+c)\overrightarrow{MG}" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Associativité — le barycentre partiel">
          <Box title="Théorème (l'outil le plus puissant du chapitre)" tone="prop">
            Si <Math tex="G_2" /> est le barycentre de <Math tex="\{(A,a),(B,b)\}" /> (avec{" "}
            <Math tex="a+b\neq0" />) et <Math tex="G" /> le barycentre de{" "}
            <Math tex="\{(A,a),(B,b),(C,c)\}" />, alors <Math tex="G" /> est aussi le barycentre de{" "}
            <Math tex="\{(G_2,a+b),(C,c)\}" />.
          </Box>
          <Callout variant="warning" title="Autrement dit">
            On peut remplacer deux points du système par leur barycentre, affecté de la{" "}
            <strong>somme</strong> de leurs poids, sans changer <Math tex="G" />. C&apos;est ce qui permet de
            ramener un problème à 3 points à un problème à 2 points (donc à un alignement).
          </Callout>
          <Figure
            reverse
            text={
              <p>
                Exemple : le centre de gravité <Math tex="G" /> d&apos;un triangle <Math tex="ABC" /> est le
                barycentre de <Math tex="\{(A,1),(B,1),(C,1)\}" />. En regroupant <Math tex="B" /> et{" "}
                <Math tex="C" /> (isobarycentre <Math tex="A'" />, milieu de <Math tex="[BC]" />), <Math tex="G" />
                {" "}est barycentre de <Math tex="\{(A,1),(A',2)\}" />, d&apos;où{" "}
                <Math tex="\overrightarrow{AG}=\dfrac23\overrightarrow{AA'}" /> : <Math tex="G" /> est aux 2/3 de
                chaque médiane, en partant du sommet.
              </p>
            }
            svg={
              <FigureBox>
                <svg viewBox="0 0 260 190" className="w-full max-w-[260px]">
                  <polygon points="120,20 20,170 230,170" fill="none" stroke="#334155" strokeWidth="2" />
                  <line x1="120" y1="20" x2="125" y2="170" stroke="#0ea5e9" strokeWidth="1.6" strokeDasharray="4 3" />
                  <line x1="20" y1="170" x2="175" y2="95" stroke="#0ea5e9" strokeWidth="1.6" strokeDasharray="4 3" />
                  <line x1="230" y1="170" x2="70" y2="95" stroke="#0ea5e9" strokeWidth="1.6" strokeDasharray="4 3" />
                  <circle cx="120" cy="20" r="3" fill="#1e293b" />
                  <circle cx="20" cy="170" r="3" fill="#1e293b" />
                  <circle cx="230" cy="170" r="3" fill="#1e293b" />
                  <circle cx="125" cy="170" r="2.6" fill="#334155" />
                  <circle cx="123.3" cy="120" r="4.5" fill="#f97316" />
                  <text x="110" y="12" fontSize="13" fontWeight="700">A</text>
                  <text x="8" y="184" fontSize="13" fontWeight="700">B</text>
                  <text x="234" y="184" fontSize="13" fontWeight="700">C</text>
                  <text x="128" y="184" fontSize="12" fontWeight="700">A&apos;</text>
                  <text x="128" y="116" fontSize="13" fontWeight="700" fill="#f97316">G</text>
                </svg>
              </FigureBox>
            }
          />
        </CourseBlock>

        <CourseBlock numeral="VII" title="Coordonnées de G">
          <Callout variant="success" title="Formule">
            <MathBlock tex="x_G=\dfrac{ax_A+bx_B+cx_C}{a+b+c},\qquad y_G=\dfrac{ay_A+by_B+cy_C}{a+b+c}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. QUATRE POINTS ===================== */}
      <LessonSection
        id="cours-quatre-points"
        kicker="03 · On généralise"
        title="Barycentre de quatre points pondérés"
        tone="light"
        description="Rien de nouveau conceptuellement : toutes les mêmes propriétés se prolongent."
      >
        <CourseBlock numeral="VIII" title="Définition, invariance, associativité, coordonnées">
          <Box title="Théorème d'existence" tone="prop">
            Si <Math tex="a+b+c+d\neq0" />, il existe un unique <Math tex="G" /> tel que{" "}
            <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}+c\overrightarrow{GC}+d\overrightarrow{GD}=\vec0" />
            . Si <Math tex="a=b=c=d\neq0" />, <Math tex="G" /> est l&apos;isobarycentre — le centre de gravité du
            quadrilatère <Math tex="ABCD" />.
          </Box>
          <Callout variant="success" title="L'associativité se prolonge exactement pareil">
            On peut remplacer <strong>deux ou trois</strong> points du système par leur barycentre (affecté de la
            somme de leurs poids) sans changer <Math tex="G" />. Par exemple, si <Math tex="G_2" /> est barycentre
            de <Math tex="\{(A,a),(B,b)\}" /> et <Math tex="G_2'" /> de <Math tex="\{(C,c),(D,d)\}" />, alors{" "}
            <Math tex="G" /> est barycentre de <Math tex="\{(G_2,a+b),(G_2',c+d)\}" />.
          </Callout>
          <Callout variant="warning" title="Coordonnées">
            <MathBlock tex="x_G=\dfrac{ax_A+bx_B+cx_C+dx_D}{a+b+c+d},\qquad y_G=\dfrac{ay_A+by_B+cy_C+dy_D}{a+b+c+d}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Barycentre dans le plan"
        tone="muted"
        description="6 exercices corrigés : coordonnées, réduction algébrique, associativité pour prouver alignements et concourances, et ensembles de points."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre barycentre dans le plan est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Coordonnées du barycentre de trois points"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Le plan est muni d&apos;un repère <Math tex="(O,\vec i,\vec j)" />. On considère les points
                pondérés <Math tex="(A,3)" />, <Math tex="(B,1)" /> et <Math tex="(C,1)" />, avec{" "}
                <Math tex="A(1,1)" />, <Math tex="B(4,1)" /> et <Math tex="C(-1,3)" />. Calculer les coordonnées
                du barycentre <Math tex="G" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="x_G=\dfrac{3\times1+1\times4+1\times(-1)}{3+1+1}=\dfrac{6}{5}" />
                <MathBlock tex="y_G=\dfrac{3\times1+1\times1+1\times3}{3+1+1}=\dfrac{7}{5}" />
                <p className="font-semibold text-green-700">
                  <Math tex="G\left(\dfrac65,\dfrac75\right)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Réduire le système autrement"
            itemsLabel="1 étude"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  Soit <Math tex="G" /> le barycentre de <Math tex="(A,2)" /> et <Math tex="(B,1)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="A" /> est le barycentre de <Math tex="(G,-3)" /> et{" "}
                  <Math tex="(B,1)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que <Math tex="B" /> est le barycentre de <Math tex="(G,-6)" /> et{" "}
                  <Math tex="(A,4)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Par définition, <Math tex="2\overrightarrow{GA}+\overrightarrow{GB}=\vec0" />.
                </p>
                <p>
                  <strong className="text-green-700">a.</strong> En écrivant{" "}
                  <Math tex="\overrightarrow{GB}=\overrightarrow{GA}+\overrightarrow{AB}" /> :
                </p>
                <MathBlock tex="2\overrightarrow{GA}+\overrightarrow{GA}+\overrightarrow{AB}=\vec0 \iff 3\overrightarrow{GA}+\overrightarrow{AB}=\vec0 \iff \overrightarrow{AB}=-3\overrightarrow{GA}=3\overrightarrow{AG}" />
                <p>
                  Donc <Math tex="-3\overrightarrow{AG}+\overrightarrow{AB}=\vec0" />, c&apos;est-à-dire{" "}
                  <Math tex="A" /> est le barycentre de <Math tex="(G,-3)" /> et <Math tex="(B,1)" /> (poids{" "}
                  <Math tex="-3+1=-2\neq0" />).
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> De <Math tex="2\overrightarrow{GA}+\overrightarrow{GB}=\vec0" />
                  {" "}on tire <Math tex="\overrightarrow{GB}=-2\overrightarrow{GA}=2\overrightarrow{AG}" />, donc{" "}
                  <Math tex="\overrightarrow{BG}=-2\overrightarrow{AG}=2\overrightarrow{GA}" />. Or{" "}
                  <Math tex="\overrightarrow{GA}=\dfrac13\overrightarrow{BA}" /> (d&apos;après a.), donc{" "}
                  <Math tex="\overrightarrow{BG}=\dfrac23\overrightarrow{BA}" />, soit{" "}
                  <Math tex="-6\overrightarrow{BG}+4\overrightarrow{BA}=\vec0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="B" /> est le barycentre de <Math tex="(G,-6)" /> et <Math tex="(A,4)" /> (poids{" "}
                  <Math tex="-6+4=-2\neq0" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Un quadrilatère et un alignement"
            itemsLabel="1 étude"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="ABCD" /> est un quadrilatère, <Math tex="I" /> le milieu de <Math tex="[AC]" />,{" "}
                  <Math tex="J" /> le milieu de <Math tex="[BD]" />, et <Math tex="G" /> défini par{" "}
                  <Math tex="\overrightarrow{AG}=\dfrac12(\overrightarrow{BC}+\overrightarrow{DC})" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="G" /> est le barycentre de <Math tex="(A,2)" />,{" "}
                  <Math tex="(B,-1)" />, <Math tex="(C,2)" /> et <Math tex="(D,-1)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> En déduire que <Math tex="I" />, <Math tex="J" /> et <Math tex="G" /> sont
                  alignés.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> En exprimant tous les vecteurs à partir de{" "}
                  <Math tex="A" /> (<Math tex="\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}" />,{" "}
                  <Math tex="\overrightarrow{DC}=\overrightarrow{AC}-\overrightarrow{AD}" />) :
                </p>
                <MathBlock tex="\overrightarrow{AG}=\dfrac12\big(2\overrightarrow{AC}-\overrightarrow{AB}-\overrightarrow{AD}\big)=\overrightarrow{AC}-\dfrac12\overrightarrow{AB}-\dfrac12\overrightarrow{AD}" />
                <p>
                  On vérifie alors que{" "}
                  <Math tex="2\overrightarrow{GA}-\overrightarrow{GB}+2\overrightarrow{GC}-\overrightarrow{GD}=\vec0" />
                  {" "}en substituant <Math tex="\overrightarrow{GX}=\overrightarrow{AX}-\overrightarrow{AG}" /> pour
                  chaque point : tout se simplifie à <Math tex="\vec0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="2-1+2-1=2\neq0" />, <Math tex="G" /> est bien le barycentre de{" "}
                  <Math tex="(A,2),(B,-1),(C,2),(D,-1)" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> Par associativité, on regroupe{" "}
                  <Math tex="(A,2),(C,2)" /> en <Math tex="I" /> (poids <Math tex="4" />, car <Math tex="I" /> est
                  déjà l&apos;isobarycentre de <Math tex="A" /> et <Math tex="C" />) et{" "}
                  <Math tex="(B,-1),(D,-1)" /> en <Math tex="J" /> (poids <Math tex="-2" />) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="G" /> est le barycentre de <Math tex="(I,4)" /> et <Math tex="(J,-2)" />, donc{" "}
                  <Math tex="G\in(IJ)" /> : les points <Math tex="I" />, <Math tex="J" /> et <Math tex="G" /> sont
                  alignés.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Deux alignements par associativité"
            itemsLabel="1 étude"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="ABC" /> est un triangle, <Math tex="I" /> le milieu de <Math tex="[BC]" />, et{" "}
                  <Math tex="G" /> le barycentre de <Math tex="(A,-1)" />, <Math tex="(B,2)" /> et{" "}
                  <Math tex="(C,2)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="G" /> appartient à la droite <Math tex="(AI)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Soit <Math tex="H" /> le symétrique de <Math tex="A" /> par rapport à{" "}
                  <Math tex="B" />. Montrer que <Math tex="C" />, <Math tex="G" /> et <Math tex="H" /> sont
                  alignés.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> <Math tex="I" /> est le milieu de{" "}
                  <Math tex="[BC]" />, donc <Math tex="I" /> est le barycentre de <Math tex="(B,2),(C,2)" />
                  {" "}(poids égaux). Par associativité, <Math tex="G" /> est le barycentre de{" "}
                  <Math tex="(A,-1),(I,4)" /> (poids <Math tex="-1+4=3\neq0" />).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="G\in(AI)" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> <Math tex="B" /> est le milieu de{" "}
                  <Math tex="[AH]" />, donc le barycentre de <Math tex="(A,-1),(B,2)" /> est le point{" "}
                  <Math tex="P" /> tel que <Math tex="P=\dfrac{-A+2B}{-1+2}=2B-A=H" />. Ainsi{" "}
                  <Math tex="(A,-1),(B,2)" /> se réduit à <Math tex="(H,1)" />. Par associativité,{" "}
                  <Math tex="G" /> est le barycentre de <Math tex="(H,1),(C,2)" /> (poids{" "}
                  <Math tex="1+2=3\neq0" />).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="G\in(HC)" /> : les points <Math tex="C" />, <Math tex="G" /> et{" "}
                  <Math tex="H" /> sont alignés.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Trois barycentres partiels, un milieu à trouver"
            itemsLabel="1 étude"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="ABC" /> est un triangle. On pose : <Math tex="I" /> barycentre de{" "}
                  <Math tex="(A,2),(C,1)" /> ; <Math tex="J" /> barycentre de <Math tex="(A,1),(B,2)" /> ;{" "}
                  <Math tex="K" /> barycentre de <Math tex="(C,1),(B,-4)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="B" /> est le barycentre de <Math tex="(K,3)" /> et{" "}
                  <Math tex="(C,1)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> En déduire le barycentre de <Math tex="(A,2),(K,3),(C,1)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>c.</strong> Montrer que <Math tex="J" /> est le milieu de <Math tex="[IK]" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> <Math tex="K" /> barycentre de{" "}
                  <Math tex="(C,1),(B,-4)" /> signifie <Math tex="\overrightarrow{KC}-4\overrightarrow{KB}=\vec0" />
                  , soit <Math tex="K=\dfrac{C-4B}{1-4}=\dfrac{4B-C}{3}" />. On vérifie alors que{" "}
                  <Math tex="3\overrightarrow{BK}+\overrightarrow{BC}=\vec0" />, c&apos;est-à-dire exactement la
                  condition pour que <Math tex="B" /> soit le barycentre de <Math tex="(K,3),(C,1)" /> (poids{" "}
                  <Math tex="3+1=4\neq0" />).
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> Par associativité, comme{" "}
                  <Math tex="(K,3),(C,1)" /> se réduit à <Math tex="(B,4)" /> :
                </p>
                <p className="font-semibold text-green-700">
                  Le barycentre de <Math tex="(A,2),(K,3),(C,1)" /> est le même que celui de{" "}
                  <Math tex="(A,2),(B,4)" />, qui — par invariance (on divise les poids par 2) — est exactement{" "}
                  <Math tex="J" />, barycentre de <Math tex="(A,1),(B,2)" />.
                </p>
                <p>
                  <strong className="text-green-700">c.</strong> D&apos;après b., <Math tex="J" /> est aussi le
                  barycentre de <Math tex="(A,2),(K,3),(C,1)" />. En regroupant <Math tex="(A,2),(C,1)" /> en{" "}
                  <Math tex="I" /> (poids <Math tex="2+1=3" />), <Math tex="J" /> devient le barycentre de{" "}
                  <Math tex="(I,3),(K,3)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Les poids de <Math tex="I" /> et <Math tex="K" /> sont égaux : <Math tex="J" /> est donc le{" "}
                  <strong>milieu</strong> de <Math tex="[IK]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Ensembles de points définis par des normes"
            itemsLabel="1 triangle, 3 ensembles"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABC" /> est un triangle tel que <Math tex="AB=6" />, <Math tex="BC=4" /> et{" "}
                <Math tex="CA=5" />, et <Math tex="G" /> son centre de gravité. Déterminer les ensembles de
                points <Math tex="M" /> du plan tels que :
                <br />
                <strong>a.</strong> <Math tex="\|\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}\|=6" />
                <br />
                <strong>b.</strong> <Math tex="\|\overrightarrow{MA}+\overrightarrow{MB}\|=\|\overrightarrow{MB}+\overrightarrow{MC}\|" />
                <br />
                <strong>c.</strong> <Math tex="\|\overrightarrow{MA}+3\overrightarrow{MB}\|=\|\overrightarrow{MB}-\overrightarrow{MC}\|" />
              </p>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">a.</p>
                  <p>
                    <Math tex="G" /> est l&apos;isobarycentre de <Math tex="A,B,C" />, donc{" "}
                    <Math tex="\overrightarrow{MA}+\overrightarrow{MB}+\overrightarrow{MC}=3\overrightarrow{MG}" />.
                  </p>
                  <MathBlock tex="\|3\overrightarrow{MG}\|=6 \iff MG=2" />
                  <p className="font-semibold text-green-700">
                    L&apos;ensemble est le cercle de centre <Math tex="G" /> et de rayon <Math tex="2" />.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">b.</p>
                  <p>
                    Soit <Math tex="I'" /> le milieu de <Math tex="[AB]" /> et <Math tex="J'" /> le milieu de{" "}
                    <Math tex="[BC]" /> : <Math tex="\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI'}" />
                    {" "}et <Math tex="\overrightarrow{MB}+\overrightarrow{MC}=2\overrightarrow{MJ'}" />.
                  </p>
                  <MathBlock tex="\|2\overrightarrow{MI'}\|=\|2\overrightarrow{MJ'}\| \iff MI'=MJ'" />
                  <p className="font-semibold text-green-700">
                    L&apos;ensemble est la médiatrice du segment <Math tex="[I'J']" />.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">c.</p>
                  <p>
                    Soit <Math tex="K'" /> le barycentre de <Math tex="(A,1),(B,3)" /> :{" "}
                    <Math tex="\overrightarrow{MA}+3\overrightarrow{MB}=4\overrightarrow{MK'}" />. De plus,{" "}
                    <Math tex="\overrightarrow{MB}-\overrightarrow{MC}=\overrightarrow{CB}" /> ne dépend pas de{" "}
                    <Math tex="M" /> !
                  </p>
                  <MathBlock tex="\|4\overrightarrow{MK'}\|=\|\overrightarrow{CB}\|=BC=4 \iff MK'=1" />
                  <p className="font-semibold text-green-700">
                    L&apos;ensemble est le cercle de centre <Math tex="K'" /> et de rayon <Math tex="1" />.
                  </p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
