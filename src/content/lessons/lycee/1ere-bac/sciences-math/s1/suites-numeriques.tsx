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
  title: "Les suites numériques · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur les suites numériques pour la 1ère année Baccalauréat Sciences Mathématiques : généralités (majoration, minoration, monotonie), suite arithmétique, suite géométrique, terme général, somme des n premiers termes, moyennes arithmétique et géométrique, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Les suites numériques",
  heroSubtitle:
    "Deux familles de suites, deux formules de terme général, deux formules de somme — et la technique de la suite auxiliaire pour tout ramener à ces deux familles.",
  footerNote: "Les suites numériques · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
  sections: [
    { id: "cours-generalites", label: "Généralités" },
    { id: "cours-arithmetique", label: "Suite arithmétique" },
    { id: "cours-geometrique", label: "Suite géométrique" },
    { id: "cours-moyennes", label: "Moyennes" },
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
          { value: "2", label: "familles de suites" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-generalites"
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
            <Math tex="(u_n)" />
          </div>
        }
      />

      {/* ===================== I. GÉNÉRALITÉS ===================== */}
      <LessonSection
        id="cours-generalites"
        kicker="01 · Le vocabulaire de base"
        title="Généralités : majoration, minoration, monotonie"
        tone="light"
        description="Une suite est une fonction définie sur les entiers — les mêmes notions de bornes et de monotonie que pour les fonctions, avec un critère simplifié."
      >
        <CourseBlock numeral="I" title="Définition et vocabulaire">
          <Box title="Définition" tone="def">
            <p>
              Une <strong className="text-foreground">suite numérique</strong> est une application{" "}
              <Math tex="u:I\to\mathbb R" /> (<Math tex="I\subset\mathbb N" />), notée{" "}
              <Math tex="(u_n)_{n\in I}" />. <Math tex="u_n" /> est le terme général,{" "}
              <Math tex="u_{n_0}" /> le premier terme.
            </p>
          </Box>
          <Callout variant="warning" title="Suite récurrente">
            Une suite définie par <Math tex="u_{n+1}" /> en fonction de <Math tex="u_n" /> (et{" "}
            <Math tex="u_0" /> donné) est dite <strong>récurrente</strong>. C&apos;est la forme la plus
            fréquente dans les exercices.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Suite majorée, minorée, bornée, monotone">
          <Box title="Bornes" tone="def">
            <MathBlock tex="(u_n)\text{ majorée par }M\iff\forall n\ge n_0,\ u_n\le M" />
            <MathBlock tex="(u_n)\text{ minorée par }m\iff\forall n\ge n_0,\ m\le u_n" />
            <p>Bornée = majorée et minorée.</p>
          </Box>
          <Callout variant="success" title="Critère de monotonie (le plus utile)">
            <MathBlock tex="(u_n)\text{ croissante}\iff\forall n\ge n_0,\ u_{n+1}\ge u_n" />
            <MathBlock tex="(u_n)\text{ décroissante}\iff\forall n\ge n_0,\ u_{n+1}\le u_n" />
            <p>
              (On étudie donc le signe de <Math tex="u_{n+1}-u_n" />, plutôt que de comparer{" "}
              <Math tex="u_n" /> et <Math tex="u_{n'}" /> pour <Math tex="n,n'" /> quelconques.)
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. SUITE ARITHMÉTIQUE ===================== */}
      <LessonSection
        id="cours-arithmetique"
        kicker="02 · Une différence constante"
        title="Suite arithmétique"
        tone="muted"
        description="On ajoute toujours le même nombre pour passer d'un terme au suivant."
      >
        <CourseBlock numeral="III" title="Définition, terme général, somme">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="(u_n)" /> est <strong className="text-foreground">arithmétique</strong> de raison{" "}
              <Math tex="r" /> ssi <Math tex="\forall n\ge n_0,\ u_{n+1}=u_n+r" />.
            </p>
          </Box>
          <Callout variant="success" title="Terme général et somme">
            <MathBlock tex="u_n=u_{n_0}+(n-n_0)r,\qquad u_q=u_p+(q-p)r" />
            <MathBlock tex="S_n=u_p+u_{p+1}+\cdots+u_n=\dfrac{(u_p+u_n)}2\times(n-p+1)=\dfrac{(\text{1}^{\text{er}}\text{ terme})+(\text{dernier terme})}2\times(\text{nombre de termes})" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. SUITE GÉOMÉTRIQUE ===================== */}
      <LessonSection
        id="cours-geometrique"
        kicker="03 · Un rapport constant"
        title="Suite géométrique"
        tone="light"
        description="On multiplie toujours par le même nombre pour passer d'un terme au suivant."
      >
        <CourseBlock numeral="IV" title="Définition, terme général, somme">
          <Box title="Définition" tone="def">
            <p>
              <Math tex="(u_n)" /> est <strong className="text-foreground">géométrique</strong> de raison{" "}
              <Math tex="q\neq0" /> ssi <Math tex="\forall n\ge n_0,\ u_{n+1}=q\times u_n" />.
            </p>
          </Box>
          <Callout variant="success" title="Terme général et somme">
            <MathBlock tex="u_n=u_{n_0}\times q^{(n-n_0)},\qquad u_q=u_p\times q^{(q-p)}" />
            <MathBlock tex="\text{Si }q\neq1:\ S_n=u_p+\cdots+u_n=u_p\times\dfrac{q^{(n-p+1)}-1}{q-1}" />
            <p>
              (Si <Math tex="q=1" />, la suite est constante et <Math tex="S_n=u_p\times(n-p+1)" />.)
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="La technique de la suite auxiliaire">
          <Box title="Idée générale" tone="prop">
            <p>
              Pour une suite récurrente <Math tex="u_n" /> qui n&apos;est ni arithmétique ni géométrique, on
              introduit souvent une suite auxiliaire <Math tex="v_n=f(u_n)" /> (par exemple{" "}
              <Math tex="v_n=u_n-\ell" /> ou <Math tex="v_n=\dfrac1{u_n-\ell}" />) et on montre que{" "}
              <Math tex="(v_n)" /> <strong>est</strong> arithmétique ou géométrique — on en déduit ensuite{" "}
              <Math tex="u_n" /> en fonction de <Math tex="n" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. MOYENNES ===================== */}
      <LessonSection
        id="cours-moyennes"
        kicker="04 · Trois termes consécutifs"
        title="Moyenne arithmétique, moyenne géométrique"
        tone="muted"
        description="Deux relations simples qui caractérisent trois termes consécutifs d'une suite arithmétique ou géométrique."
      >
        <CourseBlock numeral="VI" title="Les deux propriétés">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Moyenne arithmétique" tone="def">
              <p>
                Si <Math tex="a,b,c" /> sont trois termes consécutifs d&apos;une suite arithmétique :
              </p>
              <MathBlock tex="a+c=2b" />
            </Box>
            <Box title="Moyenne géométrique" tone="def">
              <p>
                Si <Math tex="a,b,c" /> sont trois termes consécutifs d&apos;une suite géométrique :
              </p>
              <MathBlock tex="a\times c=b^2" />
            </Box>
          </div>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Les suites numériques"
        tone="light"
        description="6 exercices corrigés couvrant suite arithmétique, suite géométrique, la technique de la suite auxiliaire, et les deux moyennes."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre suites numériques est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Suite arithmétique récurrente"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(u_n)_{n\ge0}" /> définie par <Math tex="u_0=7" /> et{" "}
                <Math tex="u_{n+1}=u_n-4" />. Montrer que <Math tex="(u_n)" /> est arithmétique, donner{" "}
                <Math tex="u_n" /> en fonction de <Math tex="n" />, et calculer{" "}
                <Math tex="S=u_0+u_1+\cdots+u_{20}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="u_{n+1}-u_n=-4" /> (constant) : <Math tex="(u_n)" /> est arithmétique de raison{" "}
                  <Math tex="r=-4" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u_n=u_0+n\times(-4)=7-4n" />.
                </p>
                <p>
                  La somme <Math tex="S" /> comporte <Math tex="21" /> termes (<Math tex="u_0" /> à{" "}
                  <Math tex="u_{20}" />), avec <Math tex="u_{20}=7-80=-73" /> :
                </p>
                <MathBlock tex="S=\dfrac{(u_0+u_{20})}{2}\times21=\dfrac{7-73}{2}\times21=-33\times21=-693" />
                <p className="font-semibold text-green-700">
                  <Math tex="S=-693" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Suite géométrique récurrente"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(u_n)_{n\ge0}" /> définie par <Math tex="u_0=3" /> et{" "}
                <Math tex="u_{n+1}=2u_n" />. Montrer que <Math tex="(u_n)" /> est géométrique, donner{" "}
                <Math tex="u_n" /> en fonction de <Math tex="n" />, et calculer{" "}
                <Math tex="S=u_0+u_1+\cdots+u_7" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\dfrac{u_{n+1}}{u_n}=2" /> (constant, <Math tex="u_n\neq0" />) :{" "}
                  <Math tex="(u_n)" /> est géométrique de raison <Math tex="q=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u_n=3\times2^n" />.
                </p>
                <p>
                  La somme <Math tex="S" /> comporte <Math tex="8" /> termes :
                </p>
                <MathBlock tex="S=u_0\times\dfrac{q^{8}-1}{q-1}=3\times\dfrac{2^8-1}{2-1}=3\times255=765" />
                <p className="font-semibold text-green-700">
                  <Math tex="S=765" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · La technique de la suite auxiliaire"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="(u_n)_{n\ge0}" /> définie par <Math tex="u_0=-3" /> et{" "}
                <Math tex="u_{n+1}=\dfrac9{6-u_n}" />. On pose <Math tex="v_n=\dfrac1{u_n-3}" />. Montrer
                que <Math tex="(v_n)" /> est arithmétique, puis donner <Math tex="u_n" /> en fonction de{" "}
                <Math tex="n" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On calcule <Math tex="u_{n+1}-3" /> :
                </p>
                <MathBlock tex="u_{n+1}-3=\dfrac9{6-u_n}-3=\dfrac{9-3(6-u_n)}{6-u_n}=\dfrac{3u_n-9}{6-u_n}=\dfrac{3(u_n-3)}{6-u_n}" />
                <p>D&apos;où :</p>
                <MathBlock tex="v_{n+1}-v_n=\dfrac1{u_{n+1}-3}-\dfrac1{u_n-3}=\dfrac{6-u_n}{3(u_n-3)}-\dfrac1{u_n-3}=\dfrac{(6-u_n)-3}{3(u_n-3)}=\dfrac{-(u_n-3)}{3(u_n-3)}=-\dfrac13" />
                <p className="font-semibold text-green-700">
                  <Math tex="(v_n)" /> est arithmétique de raison <Math tex="-\dfrac13" />, de premier terme{" "}
                  <Math tex="v_0=\dfrac1{u_0-3}=\dfrac1{-6}=-\dfrac16" />.
                </p>
                <p>
                  Donc <Math tex="v_n=-\dfrac16-\dfrac n3=-\dfrac{1+2n}6" />, et comme{" "}
                  <Math tex="u_n=3+\dfrac1{v_n}" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u_n=3-\dfrac6{1+2n}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Moyenne arithmétique"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer <Math tex="x\in\mathbb R" /> tel que <Math tex="5,\ x,\ 17" /> soient trois
                termes consécutifs d&apos;une suite arithmétique.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="5+17=2x\iff22=2x\iff x=11" />
                <p className="font-semibold text-green-700">
                  <Math tex="x=11" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Moyenne géométrique"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer <Math tex="x>0" /> tel que <Math tex="4,\ x,\ 25" /> soient trois termes
                consécutifs d&apos;une suite géométrique.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="4\times25=x^2\iff x^2=100\iff x=10\ (\text{ou }x=-10,\text{ rejeté car }x>0)" />
                <p className="font-semibold text-green-700">
                  <Math tex="x=10" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Combiner les deux formules de somme"
            itemsLabel="2 calculs"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="(u_n)" /> arithmétique avec <Math tex="u_0=2" />, <Math tex="r=5" />, et{" "}
                  <Math tex="(v_n)" /> géométrique avec <Math tex="v_0=3" />, <Math tex="q=2" />. Calculer{" "}
                  <Math tex="S_u=\displaystyle\sum_{i=0}^{10}u_i" /> et{" "}
                  <Math tex="S_v=\displaystyle\sum_{i=0}^{10}v_i" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Pour <Math tex="S_u" /></strong> (11 termes) : <Math tex="u_{10}=2+10\times5=52" />
                  .
                </p>
                <MathBlock tex="S_u=\dfrac{(u_0+u_{10})}2\times11=\dfrac{2+52}2\times11=27\times11=297" />
                <p>
                  <strong>Pour <Math tex="S_v" /></strong> (11 termes) :
                </p>
                <MathBlock tex="S_v=v_0\times\dfrac{q^{11}-1}{q-1}=3\times\dfrac{2^{11}-1}{2-1}=3\times2047=6141" />
                <p className="font-semibold text-green-700">
                  <Math tex="S_u=297" /> et <Math tex="S_v=6141" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
