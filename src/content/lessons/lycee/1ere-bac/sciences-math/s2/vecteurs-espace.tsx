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
  title: "Vecteurs de l'espace · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur les vecteurs de l'espace pour la 1ère année Baccalauréat Sciences Mathématiques : calcul vectoriel dans l'espace, colinéarité, définition vectorielle d'une droite, vecteurs coplanaires, détermination vectorielle d'un plan, parallélisme des droites et des plans, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "Vecteurs de l'espace",
  heroSubtitle:
    "Prolonger le calcul vectoriel du plan à l'espace : colinéarité, coplanarité, et les critères vectoriels du parallélisme.",
  footerNote: "Vecteurs de l'espace · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
  sections: [
    { id: "cours-calcul-vectoriel", label: "Calcul vectoriel" },
    { id: "cours-colinearite", label: "Colinéarité" },
    { id: "cours-coplanarite", label: "Coplanarité" },
    { id: "cours-parallelisme", label: "Parallélisme" },
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

/** Labeled cube ABCDEFGH (cavalier projection) — anchors the space-vector notions. */
function CubeFigure() {
  const solid = { stroke: "#334155", strokeWidth: 1.8, fill: "none" } as const;
  const hidden = { stroke: "#94a3b8", strokeWidth: 1.5, fill: "none", strokeDasharray: "4 3" } as const;
  const label = "fill-foreground text-[11px] font-semibold";
  return (
    <figure className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-muted p-4">
      <svg viewBox="0 0 220 180" className="h-48 w-full max-w-xs">
        {/* hidden edges (through D) */}
        <line x1="40" y1="140" x2="75" y2="110" {...hidden} />
        <line x1="175" y1="110" x2="75" y2="110" {...hidden} />
        <line x1="75" y1="110" x2="75" y2="40" {...hidden} />
        {/* visible bottom edges */}
        <line x1="40" y1="140" x2="140" y2="140" {...solid} />
        <line x1="140" y1="140" x2="175" y2="110" {...solid} />
        {/* visible top face */}
        <line x1="40" y1="70" x2="140" y2="70" {...solid} />
        <line x1="140" y1="70" x2="175" y2="40" {...solid} />
        <line x1="175" y1="40" x2="75" y2="40" {...solid} />
        <line x1="75" y1="40" x2="40" y2="70" {...solid} />
        {/* visible vertical edges */}
        <line x1="40" y1="140" x2="40" y2="70" {...solid} />
        <line x1="140" y1="140" x2="140" y2="70" {...solid} />
        <line x1="175" y1="110" x2="175" y2="40" {...solid} />
        {/* vertices */}
        {[
          ["A", 40, 140, 0, 16],
          ["B", 140, 140, 6, 16],
          ["C", 175, 110, 8, 4],
          ["D", 75, 110, -10, 6],
          ["E", 40, 70, -10, 2],
          ["F", 140, 70, 6, -6],
          ["G", 175, 40, 8, -4],
          ["H", 75, 40, -4, -8],
        ].map(([txt, x, y, dx, dy]) => (
          <text key={txt as string} x={(x as number) + (dx as number)} y={(y as number) + (dy as number)} className={label}>
            {txt}
          </text>
        ))}
        {[
          [40, 140],
          [140, 140],
          [175, 110],
          [75, 110],
          [40, 70],
          [140, 70],
          [175, 40],
          [75, 40],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#0f766e" />
        ))}
      </svg>
      <figcaption className="text-center text-xs text-foreground-subtle">
        Cube ABCDEFGH — ABCD la base, EFGH la face du dessus (E au-dessus de A, etc.)
      </figcaption>
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
          { value: "4", label: "notions clés" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-calcul-vectoriel"
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
            <Math tex="\vec u,\vec v,\vec w" />
          </div>
        }
      />

      {/* ===================== I. CALCUL VECTORIEL ===================== */}
      <LessonSection
        id="cours-calcul-vectoriel"
        kicker="01 · Du plan à l'espace"
        title="Vecteurs de l'espace, calcul vectoriel"
        tone="light"
        description="Toutes les propriétés des vecteurs du plan restent valables dans l'espace — rien à réapprendre, tout à prolonger."
      >
        <CourseBlock numeral="I" title="Notion de vecteur dans l'espace">
          <Box title="Rappel" tone="def">
            <p>
              Un vecteur <Math tex="\overrightarrow{AB}" /> de l&apos;espace <Math tex="\mathcal E" /> est
              défini par sa <strong className="text-foreground">direction</strong> (la droite{" "}
              <Math tex="(AB)" />), son <strong className="text-foreground">sens</strong> et sa{" "}
              <strong className="text-foreground">norme</strong> <Math tex="\|\overrightarrow{AB}\|=AB" />.
              Toutes les propriétés vues dans le plan restent valables dans chaque plan de{" "}
              <Math tex="\mathcal E" />.
            </p>
          </Box>
          <Callout variant="success" title="À retenir">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="I" /> milieu de <Math tex="[AB]" /> <Math tex="\iff" />{" "}
                <Math tex="\overrightarrow{AB}=2\overrightarrow{AI}" />.
              </li>
              <li>
                <Math tex="ABCD" /> est un parallélogramme de l&apos;espace ssi{" "}
                <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />.
              </li>
              <li>
                Relation de Chasles : <Math tex="\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}" />.
              </li>
            </ul>
          </Callout>
          <CubeFigure />
        </CourseBlock>

        <CourseBlock numeral="II" title="Propriétés du calcul vectoriel">
          <Box title="Propriétés" tone="prop">
            <p>Pour tous vecteurs, tous réels <Math tex="k,k'" /> :</p>
            <MathBlock tex="\begin{gathered}(k+k')\vec u=k\vec u+k'\vec u,\qquad k(\vec u+\vec v)=k\vec u+k\vec v \\ k(k'\vec u)=(kk')\vec u,\qquad 1\cdot\vec u=\vec u \\ k\vec u=\vec 0\iff k=0\ \text{ou}\ \vec u=\vec 0\end{gathered}" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. COLINÉARITÉ ===================== */}
      <LessonSection
        id="cours-colinearite"
        kicker="02 · Deux vecteurs, une même direction"
        title="Colinéarité et définition vectorielle d'une droite"
        tone="muted"
        description="Colinéarité de vecteurs, alignement de points, et l'écriture vectorielle d'une droite de l'espace."
      >
        <CourseBlock numeral="III" title="Colinéarité de deux vecteurs">
          <Box title="Définition" tone="def">
            <Math tex="\vec u" /> et <Math tex="\vec v" /> sont <strong className="text-foreground">colinéaires</strong>{" "}
            ssi il existe <Math tex="\alpha\in\mathbb R" /> tel que <Math tex="\vec u=\alpha\vec v" /> ou{" "}
            <Math tex="\vec v=\alpha\vec u" />.
          </Box>
          <Callout variant="warning" title="Conséquences immédiates">
            <ul className="list-disc space-y-1 pl-5">
              <li>Le vecteur nul est colinéaire à tout vecteur.</li>
              <li>
                <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" /> colinéaires{" "}
                <Math tex="\iff" /> <Math tex="(AB)\parallel(CD)" />.
              </li>
              <li>
                <Math tex="A,B,C" /> alignés <Math tex="\iff" /> <Math tex="\overrightarrow{AB}" /> et{" "}
                <Math tex="\overrightarrow{AC}" /> colinéaires.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Définition vectorielle d'une droite">
          <Box title="Définition" tone="prop">
            <p>
              Soit <Math tex="A" /> un point et <Math tex="\vec u\neq\vec0" />. La droite{" "}
              <Math tex="\mathcal D(A,\vec u)" /> de <strong className="text-foreground">vecteur directeur</strong>{" "}
              <Math tex="\vec u" /> passant par <Math tex="A" /> est :
            </p>
            <MathBlock tex="\mathcal D(A,\vec u)=\big\{M\in\mathcal E\ /\ \overrightarrow{AM}=\alpha\vec u,\ \alpha\in\mathbb R\big\}" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. COPLANARITÉ ===================== */}
      <LessonSection
        id="cours-coplanarite"
        kicker="03 · Trois vecteurs dans un même plan"
        title="Vecteurs coplanaires, plan défini vectoriellement"
        tone="light"
        description="Le concept central du chapitre : décider si trois vecteurs — ou quatre points — vivent dans un même plan."
      >
        <CourseBlock numeral="V" title="Vecteurs coplanaires">
          <Box title="Définition" tone="def">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="A,B,C,D" /> sont <strong className="text-foreground">coplanaires</strong> ssi ils
                appartiennent à un même plan.
              </li>
              <li>
                <Math tex="\vec u,\vec v,\vec w" /> sont coplanaires ssi il existe <Math tex="A,B,C,D" />{" "}
                coplanaires tels que <Math tex="\vec u=\overrightarrow{AB}" />,{" "}
                <Math tex="\vec v=\overrightarrow{AC}" />, <Math tex="\vec w=\overrightarrow{AD}" />.
              </li>
            </ul>
          </Box>
          <Callout variant="success" title="Le critère pratique le plus utile">
            <Math tex="\vec u,\vec v,\vec w" /> sont coplanaires ssi <Math tex="\vec w" /> s&apos;écrit en
            fonction de <Math tex="\vec u" /> et <Math tex="\vec v" /> :
            <MathBlock tex="\vec u,\vec v,\vec w\ \text{coplanaires}\iff \exists\,x,y\in\mathbb R,\ \vec w=x\vec u+y\vec v" />
            En particulier : si deux des trois vecteurs sont colinéaires, alors les trois sont automatiquement
            coplanaires.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Détermination vectorielle d'un plan">
          <Box title="Définition" tone="prop">
            <p>
              Un plan est déterminé par un point <Math tex="A" /> et deux vecteurs{" "}
              <strong className="text-foreground">non coplanaires</strong> <Math tex="\vec u,\vec v" /> (vecteurs
              directeurs du plan), noté <Math tex="P(A,\vec u,\vec v)" /> :
            </p>
            <MathBlock tex="P(A,\vec u,\vec v)=\big\{M\in\mathcal E\ /\ \overrightarrow{AM}=x\vec u+y\vec v,\ x,y\in\mathbb R\big\}" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. PARALLÉLISME ===================== */}
      <LessonSection
        id="cours-parallelisme"
        kicker="04 · Traduire le parallélisme en vecteurs"
        title="Parallélisme des droites et des plans"
        tone="muted"
        description="Trois critères vectoriels, tous construits sur la colinéarité et la coplanarité déjà vues."
      >
        <CourseBlock numeral="VII" title="Les trois critères de parallélisme">
          <Box title="Droite ∥ droite" tone="def">
            <MathBlock tex="\Delta(B,\vec v)\parallel\mathcal D(A,\vec u)\iff \vec v=\alpha\vec u,\ \alpha\in\mathbb R^*" />
          </Box>
          <Box title="Droite ∥ plan" tone="def">
            <p>
              <Math tex="\mathcal D(A,\vec u)" /> et <Math tex="P(B,\vec v,\vec w)" /> :
            </p>
            <MathBlock tex="\mathcal D(A,\vec u)\parallel P(B,\vec v,\vec w)\iff \vec u=x\vec v+y\vec w,\ x,y\in\mathbb R" />
          </Box>
          <Box title="Plan ∥ plan" tone="def">
            <p>
              <Math tex="P(A,\vec u,\vec v)" /> et <Math tex="Q(B,\vec u_1,\vec v_1)" /> sont parallèles ssi{" "}
              <Math tex="\vec u,\vec v,\vec u_1" /> et <Math tex="\vec u,\vec v,\vec v_1" /> sont coplanaires
              (chacun des deux vecteurs directeurs de <Math tex="Q" /> s&apos;écrit en fonction de{" "}
              <Math tex="\vec u" /> et <Math tex="\vec v" />).
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Vecteurs de l'espace"
        tone="light"
        description="6 exercices corrigés sur cube, parallélépipède et tétraèdre, couvrant Chasles, coplanarité et parallélisme."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre vecteurs de l'espace est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Simplifier une somme vectorielle (Chasles)"
            itemsLabel="1 simplification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABCDEFGH" /> un cube. Simplifier{" "}
                <Math tex="\vec t=\overrightarrow{DC}+\overrightarrow{DE}+\overrightarrow{FH}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On a <Math tex="\overrightarrow{DC}=\overrightarrow{AB}" /> et{" "}
                  <Math tex="\overrightarrow{FH}=\overrightarrow{BD}" /> (car <Math tex="FHDB" /> est un
                  parallélogramme). Par Chasles :
                </p>
                <MathBlock tex="\vec t=\overrightarrow{AB}+\overrightarrow{DE}+\overrightarrow{BD}=\overrightarrow{DA}+\overrightarrow{AB}+\overrightarrow{AE}+\overrightarrow{FH}=\overrightarrow{DB}+\overrightarrow{AE}+\overrightarrow{BD}=\overrightarrow{BB}+\overrightarrow{AE}" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\vec t=\vec0+\overrightarrow{AE}=\overrightarrow{AE}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Coplanarité de quatre points"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A,B,C,D,E" /> tels que{" "}
                <Math tex="2\overrightarrow{EA}+4\overrightarrow{EB}-5\overrightarrow{EC}-\overrightarrow{ED}=\vec0" />
                . Montrer que <Math tex="A,B,C,D" /> sont coplanaires.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On remplace chaque vecteur en passant par <Math tex="A" /> (Chasles) :
                </p>
                <MathBlock tex="2\overrightarrow{EA}+4\big(\overrightarrow{EA}+\overrightarrow{AB}\big)-5\big(\overrightarrow{EA}+\overrightarrow{AC}\big)-\big(\overrightarrow{EA}+\overrightarrow{AD}\big)=\vec0" />
                <MathBlock tex="4\overrightarrow{AB}-5\overrightarrow{AC}-\overrightarrow{AD}=\vec0\ \Longrightarrow\ \overrightarrow{AD}=4\overrightarrow{AB}-5\overrightarrow{AC}" />
                <p className="font-semibold text-green-700">
                  <Math tex="\overrightarrow{AD}" /> s&apos;écrit en fonction de <Math tex="\overrightarrow{AB}" />{" "}
                  et <Math tex="\overrightarrow{AC}" /> : les vecteurs sont coplanaires, donc{" "}
                  <Math tex="A,B,C,D" /> sont coplanaires.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Coplanarité dans un parallélépipède"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABCDEFGH" /> un parallélépipède de centre <Math tex="O" />, <Math tex="I" /> le
                milieu de <Math tex="[AD]" />. On pose <Math tex="\vec u=\overrightarrow{EG}" />,{" "}
                <Math tex="\vec v=\overrightarrow{FC}" />, <Math tex="\vec w=\overrightarrow{IO}" />. Montrer
                que <Math tex="\vec u,\vec v,\vec w" /> sont coplanaires.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Comme <Math tex="EFGH" /> et <Math tex="ABCD" /> sont deux faces opposées de même
                  orientation, <Math tex="\overrightarrow{EG}=\overrightarrow{AC}" />, donc{" "}
                  <Math tex="\vec u=\overrightarrow{AC}" />.
                </p>
                <p>
                  Dans le triangle <Math tex="ADF" />, <Math tex="I" /> est le milieu de <Math tex="[AD]" /> et{" "}
                  <Math tex="O" /> le milieu de <Math tex="[FD]" /> (diagonale du parallélépipède), donc{" "}
                  <Math tex="\overrightarrow{IO}=\dfrac12\overrightarrow{AF}" /> : en posant <Math tex="K" />{" "}
                  le milieu de <Math tex="[AF]" />, <Math tex="\vec w=\overrightarrow{AK}" />.
                </p>
                <p>
                  Enfin, en considérant <Math tex="L" /> tel que <Math tex="AFCL" /> soit un
                  parallélogramme, <Math tex="\vec v=\overrightarrow{AL}" />.
                </p>
                <p className="font-semibold text-green-700">
                  On a donc <Math tex="\vec u=\overrightarrow{AC}" />, <Math tex="\vec v=\overrightarrow{AL}" />
                  , <Math tex="\vec w=\overrightarrow{AK}" /> : trois vecteurs issus de <Math tex="A" />, donc{" "}
                  <Math tex="\vec u,\vec v,\vec w" /> sont <strong>coplanaires</strong>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Parallélisme de deux droites (tétraèdre)"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABCD" /> un tétraèdre. Soient <Math tex="N,Q,P,M" /> tels que{" "}
                <Math tex="\overrightarrow{AN}=2\overrightarrow{AD}" />,{" "}
                <Math tex="\overrightarrow{CQ}=3\overrightarrow{CB}" />,{" "}
                <Math tex="\overrightarrow{CP}=3\overrightarrow{CD}" />,{" "}
                <Math tex="\overrightarrow{AM}=2\overrightarrow{AB}" />. Montrer que <Math tex="(MN)" /> et{" "}
                <Math tex="(PQ)" /> sont parallèles.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>Par Chasles :</p>
                <MathBlock tex="\overrightarrow{MN}=\overrightarrow{MA}+\overrightarrow{AN}=-2\overrightarrow{AB}+2\overrightarrow{AD}=2\big(\overrightarrow{AB}+\overrightarrow{AD}\big)=2\overrightarrow{BD}" />
                <MathBlock tex="\overrightarrow{PQ}=\overrightarrow{PC}+\overrightarrow{CQ}=-3\overrightarrow{CD}+3\overrightarrow{CB}=-3\big(\overrightarrow{CD}-\overrightarrow{CB}\big)=-3\overrightarrow{BD}" />
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\overrightarrow{MN}=-\dfrac23\overrightarrow{PQ}" /> : les vecteurs sont
                  colinéaires, donc <Math tex="(MN)\parallel(PQ)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Parallélisme via décomposition (tétraèdre)"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABCD" /> un tétraèdre, <Math tex="E" /> le milieu de <Math tex="[BC]" />. Soient{" "}
                <Math tex="L,K" /> tels que <Math tex="\overrightarrow{CL}=\dfrac12\big(\overrightarrow{AB}+\overrightarrow{AC}\big)" />{" "}
                et <Math tex="\overrightarrow{DK}=\dfrac14\overrightarrow{CB}-\dfrac12\overrightarrow{AD}" />.
                Montrer que <Math tex="(LD)\parallel(EK)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;une part : <Math tex="\overrightarrow{AL}=\overrightarrow{AC}+\overrightarrow{CL}=\dfrac32\overrightarrow{AC}+\dfrac12\overrightarrow{AB}" />
                  , donc <Math tex="\overrightarrow{LD}=\overrightarrow{AD}-\overrightarrow{AL}=\overrightarrow{AD}-\dfrac12\overrightarrow{AB}-\dfrac32\overrightarrow{AC}" />
                  .
                </p>
                <p>
                  D&apos;autre part, en développant <Math tex="\overrightarrow{DK}" /> puis{" "}
                  <Math tex="\overrightarrow{EK}=\overrightarrow{AK}-\overrightarrow{AE}" /> avec{" "}
                  <Math tex="\overrightarrow{AE}=\dfrac12(\overrightarrow{AB}+\overrightarrow{AC})" /> :
                </p>
                <MathBlock tex="\overrightarrow{EK}=\dfrac14\overrightarrow{AB}-\dfrac14\overrightarrow{AC}+\dfrac12\overrightarrow{AD}-\dfrac12\big(\overrightarrow{AB}+\overrightarrow{AC}\big)=\dfrac12\overrightarrow{AD}-\dfrac14\overrightarrow{AB}-\dfrac34\overrightarrow{AC}" />
                <p className="font-semibold text-green-700">
                  On constate que <Math tex="\overrightarrow{EK}=\dfrac12\overrightarrow{LD}" /> : les
                  vecteurs sont colinéaires, donc <Math tex="(LD)\parallel(EK)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Droite parallèle à un plan"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABCDEFGH" /> un cube. <Math tex="K" /> est le symétrique de <Math tex="D" /> par
                rapport à <Math tex="H" />. Montrer que <Math tex="(AK)\parallel(BCG)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Comme <Math tex="H" /> est le milieu de <Math tex="[DK]" /> :{" "}
                  <Math tex="\overrightarrow{DK}=2\overrightarrow{DH}" />, donc :
                </p>
                <MathBlock tex="\overrightarrow{AK}=\overrightarrow{AD}+\overrightarrow{DK}=\overrightarrow{AD}+2\overrightarrow{DH}" />
                <p>
                  Or <Math tex="\overrightarrow{AD}=\overrightarrow{BC}" /> et{" "}
                  <Math tex="\overrightarrow{DH}=\overrightarrow{CG}" /> (faces opposées du cube), donc :
                </p>
                <MathBlock tex="\overrightarrow{AK}=\overrightarrow{BC}+2\overrightarrow{CG}" />
                <p className="font-semibold text-green-700">
                  <Math tex="\overrightarrow{AK}" /> s&apos;écrit en fonction de <Math tex="\overrightarrow{CB}" />{" "}
                  et <Math tex="\overrightarrow{CG}" />, deux vecteurs directeurs du plan <Math tex="(BCG)" /> :
                  donc <Math tex="(AK)\parallel(BCG)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
