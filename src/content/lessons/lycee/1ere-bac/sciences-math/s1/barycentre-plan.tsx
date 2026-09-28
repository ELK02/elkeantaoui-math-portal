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
  title: "Barycentre dans le plan · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur le barycentre dans le plan pour la 1ère année Baccalauréat Sciences Mathématiques : barycentre de deux, trois et quatre points pondérés, invariance, propriété caractéristique, associativité (barycentre partiel), coordonnées du barycentre, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Barycentre dans le plan",
  heroSubtitle:
    "Le point d'équilibre d'un système de points pondérés — et l'outil d'associativité qui transforme presque tout problème de points alignés ou de droites concourantes.",
  footerNote: "Barycentre dans le plan · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
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

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "3", label: "propriétés clés" },
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
          <div className="relative flex select-none items-center font-serif text-white italic">
            <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0" />
          </div>
        }
      />

      {/* ===================== I. DEUX POINTS ===================== */}
      <LessonSection
        id="cours-deux-points"
        kicker="01 · Le point d'équilibre de deux points"
        title="Barycentre de deux points pondérés"
        tone="light"
        description="Un point unique défini par une relation vectorielle — dont les propriétés le rendent immédiatement utile pour caractériser des ensembles de points."
      >
        <CourseBlock numeral="I" title="Définition et existence">
          <Box title="Vocabulaire" tone="def">
            <p>
              Dans <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0" />, <Math tex="a" /> est le{" "}
              <strong className="text-foreground">poids</strong> de <Math tex="A" />, le couple{" "}
              <Math tex="(A,a)" /> un <strong className="text-foreground">point pondéré</strong>, et{" "}
              <Math tex="\{(A,a),(B,b)\}" /> un <strong className="text-foreground">système pondéré</strong>.
            </p>
          </Box>
          <Callout variant="success" title="Théorème d'existence et unicité">
            <p>
              Si <Math tex="A\neq B" /> et <Math tex="a+b\neq0" />, il existe un{" "}
              <strong>unique</strong> point <Math tex="G" />, le{" "}
              <strong className="text-foreground">barycentre</strong> de <Math tex="\{(A,a),(B,b)\}" />, tel
              que :
            </p>
            <MathBlock tex="a\overrightarrow{GA}+b\overrightarrow{GB}=\vec0,\qquad \overrightarrow{AG}=\dfrac{b}{a+b}\overrightarrow{AB}" />
            <p>
              (Si <Math tex="a=b\neq0" />, <Math tex="G" /> est l&apos;<strong>isobarycentre</strong>, le
              milieu de <Math tex="[AB]" />.)
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Trois propriétés fondamentales">
          <Box title="1. Invariance" tone="def">
            Le barycentre ne change pas si on multiplie tous les poids par un même réel{" "}
            <Math tex="k\neq0" /> : <Math tex="\{(A,a),(B,b)\}" /> et <Math tex="\{(A,ka),(B,kb)\}" /> ont le
            même barycentre.
          </Box>
          <Callout variant="success" title="2. Propriété caractéristique">
            <p>
              <Math tex="G" /> est barycentre de <Math tex="\{(A,a),(B,b)\}" /> (avec{" "}
              <Math tex="a+b\neq0" />) ssi, pour <strong>tout</strong> point <Math tex="M" /> :
            </p>
            <MathBlock tex="a\overrightarrow{MA}+b\overrightarrow{MB}=(a+b)\overrightarrow{MG}" />
            <p>
              C&apos;est l&apos;outil le plus utilisé du chapitre : il transforme une combinaison de vecteurs en
              un multiple d&apos;un seul vecteur <Math tex="\overrightarrow{MG}" />.
            </p>
          </Callout>
          <Box title="3. Coordonnées" tone="prop">
            <p>
              Dans un repère, pour <Math tex="A(x_A,y_A)" />, <Math tex="B(x_B,y_B)" /> :
            </p>
            <MathBlock tex="x_G=\dfrac{ax_A+bx_B}{a+b},\qquad y_G=\dfrac{ay_A+by_B}{a+b}" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. TROIS POINTS ===================== */}
      <LessonSection
        id="cours-trois-points"
        kicker="02 · L'outil qui débloque presque tout"
        title="Barycentre de trois points pondérés — associativité"
        tone="muted"
        description="La propriété d'associativité (barycentre partiel) permet de ramener un système à trois points à une simple combinaison de deux points, en cascade."
      >
        <CourseBlock numeral="III" title="Définition et propriétés">
          <Box title="Définition" tone="def">
            <p>
              Si <Math tex="a+b+c\neq0" />, il existe un unique <Math tex="G" /> tel que{" "}
              <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}+c\overrightarrow{GC}=\vec0" /> —{" "}
              <strong className="text-foreground">barycentre</strong> de{" "}
              <Math tex="\{(A,a),(B,b),(C,c)\}" />. Si <Math tex="a=b=c\neq0" />, <Math tex="G" /> est le{" "}
              <strong className="text-foreground">centre de gravité</strong> du triangle <Math tex="ABC" />.
            </p>
          </Box>
          <Callout variant="success" title="Propriété caractéristique (identique au cas à deux points)">
            <MathBlock tex="G=\mathrm{Bar}\{(A,a),(B,b),(C,c)\}\iff a+b+c\neq0\ \text{et}\ \forall M,\ a\overrightarrow{MA}+b\overrightarrow{MB}+c\overrightarrow{MC}=(a+b+c)\overrightarrow{MG}" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Associativité — le barycentre partiel">
          <Callout variant="warning" title="Le théorème clé">
            <p>
              Le barycentre ne change pas si on remplace <strong>deux</strong> des points du système par leur
              barycentre partiel, affecté de la <strong>somme</strong> de leurs poids : si{" "}
              <Math tex="G_2=\mathrm{Bar}\{(A,a),(B,b)\}" /> (avec <Math tex="a+b\neq0" />) et{" "}
              <Math tex="G=\mathrm{Bar}\{(A,a),(B,b),(C,c)\}" />, alors :
            </p>
            <MathBlock tex="G=\mathrm{Bar}\{(G_2,a+b),(C,c)\}" />
          </Callout>
          <Box title="Exemple de référence — le centre de gravité" tone="prop">
            <p>
              <Math tex="G" /> centre de gravité de <Math tex="ABC" /> (isobarycentre), <Math tex="A'" />{" "}
              milieu de <Math tex="[BC]" /> : comme <Math tex="A'=\mathrm{Bar}\{(B,1),(C,1)\}" />,
              l&apos;associativité donne <Math tex="G=\mathrm{Bar}\{(A,1),(A',2)\}" />, d&apos;où :
            </p>
            <MathBlock tex="\overrightarrow{AG}=\dfrac{2}{1+2}\overrightarrow{AA'}=\dfrac23\overrightarrow{AA'}" />
            <p>
              — la propriété classique du centre de gravité, retrouvée en une ligne.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. QUATRE POINTS ===================== */}
      <LessonSection
        id="cours-quatre-points"
        kicker="03 · Généraliser sans effort"
        title="Barycentre de quatre points pondérés"
        tone="light"
        description="Toutes les propriétés se généralisent sans surprise — seule la formule des coordonnées s'allonge d'un terme."
      >
        <CourseBlock numeral="V" title="Définition, coordonnées, associativité">
          <Box title="Définition et coordonnées" tone="def">
            <p>
              Si <Math tex="a+b+c+d\neq0" />, il existe un unique{" "}
              <Math tex="G=\mathrm{Bar}\{(A,a),(B,b),(C,c),(D,d)\}" /> vérifiant{" "}
              <Math tex="a\overrightarrow{GA}+b\overrightarrow{GB}+c\overrightarrow{GC}+d\overrightarrow{GD}=\vec0" />
              , avec :
            </p>
            <MathBlock tex="x_G=\dfrac{ax_A+bx_B+cx_C+dx_D}{a+b+c+d},\qquad y_G=\dfrac{ay_A+by_B+cy_C+dy_D}{a+b+c+d}" />
          </Box>
          <Callout variant="success" title="Associativité, encore et toujours">
            On peut remplacer <strong>deux ou trois</strong> points du système par leur barycentre partiel
            (affecté de la somme de leurs poids) — exactement comme pour trois points. C&apos;est ce qui permet
            de démontrer des <strong>alignements</strong> et des <strong>concours de droites</strong> en
            cascade.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Barycentre dans le plan"
        tone="muted"
        description="6 exercices corrigés couvrant coordonnées, propriété caractéristique, associativité et alignement — le cœur des techniques du chapitre."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre barycentre dans le plan est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Coordonnées d'un barycentre"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Dans un repère, soient <Math tex="A(3,2)" /> et <Math tex="B(4,1)" />. Déterminer les
                coordonnées de <Math tex="G=\mathrm{Bar}\{(A,1),(B,-5)\}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="x_G=\dfrac{1\times3+(-5)\times4}{1-5}=\dfrac{3-20}{-4}=\dfrac{17}{4}" />
                <MathBlock tex="y_G=\dfrac{1\times2+(-5)\times1}{1-5}=\dfrac{2-5}{-4}=\dfrac34" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="G\left(\dfrac{17}4,\dfrac34\right)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Propriété caractéristique et cercle"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer l&apos;ensemble des points <Math tex="M" /> du plan tels que{" "}
                <Math tex="\|\overrightarrow{MA}+2\overrightarrow{MB}\|=6" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Soit <Math tex="G=\mathrm{Bar}\{(A,1),(B,2)\}" /> (possible car <Math tex="1+2=3\neq0" />).
                  D&apos;après la propriété caractéristique :
                </p>
                <MathBlock tex="\overrightarrow{MA}+2\overrightarrow{MB}=3\overrightarrow{MG}" />
                <p>
                  L&apos;égalité devient <Math tex="\|3\overrightarrow{MG}\|=6\iff 3\,MG=6\iff MG=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble cherché est le cercle de centre <Math tex="G" /> et de rayon <Math tex="2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Centre de gravité et associativité"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABC" /> un triangle, <Math tex="G" /> son centre de gravité, <Math tex="I" /> le
                milieu de <Math tex="[BC]" />. Montrer que <Math tex="G" /> est le barycentre de{" "}
                <Math tex="\{(A,1),(I,2)\}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="G" /> centre de gravité : <Math tex="G=\mathrm{Bar}\{(A,1),(B,1),(C,1)\}" />.
                  Comme <Math tex="I" /> est le milieu de <Math tex="[BC]" />,{" "}
                  <Math tex="I=\mathrm{Bar}\{(B,1),(C,1)\}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Par <strong>associativité</strong> (on remplace <Math tex="B,C" /> par leur barycentre
                  partiel <Math tex="I" /> affecté du poids <Math tex="1+1=2" />) :{" "}
                  <Math tex="G=\mathrm{Bar}\{(A,1),(I,2)\}" />, d&apos;où{" "}
                  <Math tex="\overrightarrow{AG}=\dfrac23\overrightarrow{AI}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Identifier un barycentre à partir d'une relation vectorielle"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABC" /> un triangle et <Math tex="G" /> un point tel que{" "}
                <Math tex="2\overrightarrow{AC}=3\overrightarrow{AG}-\overrightarrow{GB}" />. Montrer que{" "}
                <Math tex="G=\mathrm{Bar}\{(A,1),(B,1),(C,2)\}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On réécrit <Math tex="\overrightarrow{AC}=\overrightarrow{AG}+\overrightarrow{GC}" /> et{" "}
                  <Math tex="\overrightarrow{GB}=-\overrightarrow{BG}" /> :
                </p>
                <MathBlock tex="2\overrightarrow{AG}+2\overrightarrow{GC}=3\overrightarrow{AG}-\overrightarrow{GB}\iff -\overrightarrow{AG}+2\overrightarrow{GC}+\overrightarrow{GB}=\vec0" />
                <p>
                  En passant à <Math tex="\overrightarrow{GA}=-\overrightarrow{AG}" /> :
                </p>
                <MathBlock tex="\overrightarrow{GA}+\overrightarrow{GB}+2\overrightarrow{GC}=\vec0" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="G" /> vérifie exactement la relation caractéristique du barycentre de{" "}
                  <Math tex="\{(A,1),(B,1),(C,2)\}" /> : <Math tex="G=\mathrm{Bar}\{(A,1),(B,1),(C,2)\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Barycentre de quatre points pondérés"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Dans un repère, soient <Math tex="A(-1,1)" />, <Math tex="B(0,2)" />, <Math tex="C(1,-1)" />,{" "}
                <Math tex="D(1,0)" />. Déterminer les coordonnées du barycentre de{" "}
                <Math tex="\{(A,2),(B,3),(C,1),(D,-1)\}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Somme des poids : <Math tex="2+3+1-1=5\neq0" />.
                </p>
                <MathBlock tex="x_G=\dfrac{2(-1)+3(0)+1(1)+(-1)(1)}{5}=\dfrac{-2+0+1-1}{5}=-\dfrac25" />
                <MathBlock tex="y_G=\dfrac{2(1)+3(2)+1(-1)+(-1)(0)}{5}=\dfrac{2+6-1-0}{5}=\dfrac75" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="G\left(-\dfrac25,\dfrac75\right)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Alignement de trois points par barycentre"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABC" /> un triangle, <Math tex="I" /> tel que{" "}
                <Math tex="\overrightarrow{AI}=\dfrac23\overrightarrow{AB}" />, <Math tex="J" /> le milieu de{" "}
                <Math tex="[BC]" />, <Math tex="K" /> le symétrique de <Math tex="A" /> par rapport à{" "}
                <Math tex="C" />. Montrer que <Math tex="I,J,K" /> sont alignés.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\overrightarrow{AI}=\dfrac23\overrightarrow{AB}\iff3\overrightarrow{AI}=2\overrightarrow{AB}\iff3\overrightarrow{AI}=2\overrightarrow{AI}+2\overrightarrow{IB}\iff\overrightarrow{IA}+2\overrightarrow{IB}=\vec0" />
                  , donc <Math tex="I=\mathrm{Bar}\{(A,1),(B,2)\}" />.
                </p>
                <p>
                  <Math tex="K" /> symétrique de <Math tex="A" /> par <Math tex="C" /> :{" "}
                  <Math tex="\overrightarrow{KA}=2\overrightarrow{KC}\iff\overrightarrow{KA}-2\overrightarrow{KC}=\vec0" />
                  , donc <Math tex="K=\mathrm{Bar}\{(A,1),(C,-2)\}" />, soit encore{" "}
                  <Math tex="K=\mathrm{Bar}\{(A,1),(B,2),(B,-2),(C,-2)\}" /> (on ajoute{" "}
                  <Math tex="(B,2)" /> et <Math tex="(B,-2)" />, de somme nulle, ce qui ne change rien).
                </p>
                <p>
                  Or <Math tex="I=\mathrm{Bar}\{(A,1),(B,2)\}" /> et, comme <Math tex="J" /> est le milieu de{" "}
                  <Math tex="[BC]" />, <Math tex="J=\mathrm{Bar}\{(B,1),(C,1)\}" />, donc{" "}
                  <Math tex="\{(B,-2),(C,-2)\}" /> a pour barycentre <Math tex="J" /> (invariance, poids{" "}
                  <Math tex="\times(-2)" />).
                </p>
                <p className="font-semibold text-green-700">
                  Par associativité, <Math tex="K=\mathrm{Bar}\{(I,3),(J,-4)\}" /> : donc{" "}
                  <Math tex="K\in(IJ)" />, c&apos;est-à-dire que <Math tex="I,J,K" /> sont{" "}
                  <strong>alignés</strong>.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
