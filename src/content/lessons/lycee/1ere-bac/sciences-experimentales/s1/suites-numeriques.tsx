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
  title: "Les suites numériques · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur les suites numériques pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : généralités, suite bornée, monotonie, suites arithmétiques et géométriques, terme général, somme des n premiers termes, moyenne arithmétique et géométrique, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 1",
  heroTitle: "Les suites numériques",
  heroSubtitle:
    "Suites arithmétiques, suites géométriques, et la technique-clé pour toute l'année : faire apparaître une suite auxiliaire arithmétique ou géométrique pour percer une récurrence compliquée.",
  footerNote: "Les suites numériques · Mathématiques, 1ère année Baccalauréat, semestre 1.",
  sections: [
    { id: "cours-generalites", label: "Généralités" },
    { id: "cours-arithmetique", label: "Arithmétique" },
    { id: "cours-geometrique", label: "Géométrique" },
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
            <span className="text-[5rem] leading-none font-bold sm:text-[6rem]">
              u<span className="text-3xl align-sub">n</span>
            </span>
          </div>
        }
      />

      {/* ===================== I. GÉNÉRALITÉS ===================== */}
      <LessonSection
        id="cours-generalites"
        kicker="01 · Le vocabulaire des suites"
        title="Généralités, suite bornée, monotonie"
        tone="light"
        description="Une suite n'est qu'une fonction dont la variable est un entier — tout le vocabulaire des fonctions se retrouve ici."
      >
        <CourseBlock numeral="I" title="Définition et vocabulaire">
          <Box title="Définition" tone="def">
            Soit <Math tex="I\subset\mathbb N" />. Toute application <Math tex="u:I\to\mathbb R" /> s&apos;appelle
            une <strong className="text-foreground">suite numérique</strong>, notée <Math tex="(u_n)_{n\in I}" />.
          </Box>
          <Callout variant="success" title="Vocabulaire">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="u_n" /> s&apos;appelle le <strong>terme général</strong> de la suite.
              </li>
              <li>
                <Math tex="u_{n_0}" /> s&apos;appelle le <strong>premier terme</strong>, où <Math tex="n_0" /> est
                le plus petit élément de <Math tex="I" />.
              </li>
              <li>
                <Math tex="u_{n_0}+u_{n_0+1}+\cdots+u_n" /> s&apos;appelle la somme des{" "}
                <Math tex="n-n_0+1" /> premiers termes.
              </li>
            </ul>
          </Callout>
          <Callout variant="warning" title="Suite récurrente">
            Une suite peut être donnée par une <strong>relation de récurrence</strong>, par exemple{" "}
            <Math tex="u_0=3,\ u_1=4" />, <Math tex="u_{n+2}=2u_{n+1}-u_n" /> — pour calculer{" "}
            <Math tex="u_{i+2}" /> il faut connaître <Math tex="u_i" /> et <Math tex="u_{i+1}" /> (suite
            récurrente d&apos;ordre 2).
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Suite majorée, minorée, bornée">
          <Box title="Définitions" tone="def">
            <Math tex="(u_n)_{n\ge n_0}" /> est <strong className="text-foreground">majorée</strong> par{" "}
            <Math tex="M" /> ssi <Math tex="\forall n\ge n_0:\ u_n\le M" />, <strong className="text-foreground">
              minorée
            </strong>{" "}
            par <Math tex="m" /> ssi <Math tex="\forall n\ge n_0:\ m\le u_n" />, et{" "}
            <strong className="text-foreground">bornée</strong> ssi elle est à la fois majorée et minorée.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="Monotonie d'une suite">
          <Box title="Définitions" tone="def">
            <Math tex="(u_n)_{n\ge n_0}" /> est <strong className="text-foreground">croissante</strong> ssi{" "}
            <Math tex="\forall n,n'\ge n_0:\ n>n'\Rightarrow u_n\ge u_{n'}" />, et{" "}
            <strong className="text-foreground">décroissante</strong> ssi{" "}
            <Math tex="n>n'\Rightarrow u_n\le u_{n'}" /> (idem avec <Math tex=">" /> strict pour les versions
            strictes).
          </Box>
          <Callout variant="success" title="Le critère le plus pratique — un seul terme à comparer">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="(u_n)" /> croissante <Math tex="\iff" /> <Math tex="\forall n\ge n_0:\ u_{n+1}\ge u_n" />
                {" "}(strictement si <Math tex=">" />).
              </li>
              <li>
                <Math tex="(u_n)" /> décroissante <Math tex="\iff" /> <Math tex="\forall n\ge n_0:\ u_{n+1}\le u_n" />
                {" "}(strictement si <Math tex="<" />).
              </li>
              <li>
                <Math tex="(u_n)" /> constante <Math tex="\iff" /> <Math tex="\forall n\ge n_0:\ u_{n+1}=u_n" />.
              </li>
            </ul>
            <p className="mt-2">
              Inutile de comparer tous les couples <Math tex="(n,n')" /> : il suffit d&apos;étudier le signe de{" "}
              <Math tex="u_{n+1}-u_n" />.
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. SUITE ARITHMÉTIQUE ===================== */}
      <LessonSection
        id="cours-arithmetique"
        kicker="02 · La première famille de référence"
        title="Suite arithmétique"
        tone="muted"
        description="On ajoute toujours la même quantité pour passer d'un terme au suivant."
      >
        <CourseBlock numeral="IV" title="Définition">
          <Box title="Définition" tone="def">
            <Math tex="(u_n)_{n\ge n_0}" /> est <strong className="text-foreground">arithmétique</strong> de
            raison <Math tex="r" /> ssi <Math tex="\forall n\ge n_0:\ u_{n+1}-u_n=r" /> (ou{" "}
            <Math tex="u_{n+1}=u_n+r" />), avec <Math tex="r" /> constant.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Terme général">
          <Callout variant="success" title="Formules">
            <p>
              <Math tex="\forall n\ge n_0:\ u_n=u_{n_0}+(n-n_0)r" />, et plus généralement pour{" "}
              <Math tex="p,q\ge n_0" /> : <Math tex="u_q=u_p+(q-p)r" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Somme des n premiers termes">
          <Callout variant="success" title="Formule">
            <MathBlock tex="S_n=\sum_{i=p}^{n}u_i=u_p+u_{p+1}+\cdots+u_n=\dfrac{u_p+u_n}{2}\times(n-p+1)" />
            <p>
              Autrement dit : <Math tex="S=\dfrac{(\text{premier terme})+(\text{dernier terme})}{2}\times(\text{nombre de termes})" />
              .
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. SUITE GÉOMÉTRIQUE ===================== */}
      <LessonSection
        id="cours-geometrique"
        kicker="03 · La deuxième famille de référence"
        title="Suite géométrique"
        tone="light"
        description="On multiplie toujours par la même quantité pour passer d'un terme au suivant."
      >
        <CourseBlock numeral="VII" title="Définition">
          <Box title="Définition" tone="def">
            <Math tex="(u_n)_{n\ge n_0}" /> est <strong className="text-foreground">géométrique</strong> de raison{" "}
            <Math tex="q\neq0" /> ssi <Math tex="\forall n\ge n_0:\ u_{n+1}=q\times u_n" /> (ou{" "}
            <Math tex="\dfrac{u_{n+1}}{u_n}=q" /> si <Math tex="u_n\neq0" />).
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Terme général">
          <Callout variant="success" title="Formules">
            <p>
              <Math tex="\forall n\ge n_0:\ u_n=u_{n_0}\times q^{n-n_0}" />, et pour <Math tex="p,q'\ge n_0" /> :{" "}
              <Math tex="u_{q'}=u_p\times q^{q'-p}" />.
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Somme des n premiers termes">
          <Callout variant="success" title="Formule (attention au cas q = 1)">
            <p>
              Si <Math tex="q\neq1" /> : <Math tex="S_n=\displaystyle\sum_{i=p}^n u_i=u_p\times\dfrac{q^{n-p+1}-1}{q-1}" />
              .
            </p>
            <p className="mt-1">
              Si <Math tex="q=1" /> : tous les termes sont égaux, donc{" "}
              <Math tex="S_n=u_p\times(n-p+1)" />.
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. MOYENNES ===================== */}
      <LessonSection
        id="cours-moyennes"
        kicker="04 · Trois termes consécutifs"
        title="Moyenne arithmétique, moyenne géométrique"
        tone="muted"
        description="Un raccourci très utile quand on connaît deux termes qui encadrent un troisième."
      >
        <CourseBlock numeral="X" title="Les deux propriétés">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Moyenne arithmétique" tone="prop">
              Si <Math tex="a,b,c" /> sont trois termes <strong>consécutifs</strong> d&apos;une suite{" "}
              <strong>arithmétique</strong>, alors <Math tex="a+c=2b" /> (car <Math tex="b-a=c-b=r" />).
            </Box>
            <Box title="Moyenne géométrique" tone="prop">
              Si <Math tex="a,b,c" /> sont trois termes <strong>consécutifs</strong> d&apos;une suite{" "}
              <strong>géométrique</strong>, alors <Math tex="ac=b^2" /> (car <Math tex="\dfrac ba=\dfrac cb=q" />).
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
        description="6 exercices corrigés : les deux familles de référence, deux récurrences classiques à percer avec une suite auxiliaire, et les moyennes."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre suites numériques est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Suite arithmétique explicite"
            itemsLabel="1 suite"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  On pose <Math tex="u_n=2n+3" /> pour <Math tex="n\ge0" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="(u_n)" /> est arithmétique et préciser sa raison et
                  son premier terme.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Calculer <Math tex="u_{50}" />, puis <Math tex="S=u_0+u_1+\cdots+u_{50}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="u_{n+1}-u_n=2(n+1)+3-(2n+3)=2" />, constant : <Math tex="(u_n)" /> est arithmétique
                  de raison <Math tex="r=2" /> et de premier terme <Math tex="u_0=3" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> <Math tex="u_{50}=2\times50+3=103" />.
                </p>
                <MathBlock tex="S=\dfrac{u_0+u_{50}}{2}\times51=\dfrac{3+103}{2}\times51=53\times51=2\,703" />
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Suite géométrique explicite"
            itemsLabel="1 suite"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  On pose <Math tex="u_n=2\times5^n" /> pour <Math tex="n\ge0" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="(u_n)" /> est géométrique et préciser sa raison et
                  son premier terme.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Calculer <Math tex="S=u_0+u_1+\cdots+u_{10}" /> (sans calculer chaque terme).
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="\dfrac{u_{n+1}}{u_n}=\dfrac{2\times5^{n+1}}{2\times5^n}=5" />, constant :{" "}
                  <Math tex="(u_n)" /> est géométrique de raison <Math tex="q=5" /> et de premier terme{" "}
                  <Math tex="u_0=2" />.
                </p>
                <MathBlock tex="S=u_0\times\dfrac{q^{11}-1}{q-1}=2\times\dfrac{5^{11}-1}{4}=\mathbf{24\,414\,062}" />
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Suite auxiliaire géométrique (récurrence homographique)"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="(u_n)" /> définie par <Math tex="u_0=3" />,{" "}
                  <Math tex="u_{n+1}=\dfrac{2}{1+u_n}" />. On pose <Math tex="v_n=\dfrac{u_n-1}{u_n+2}" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="(v_n)" /> est géométrique et préciser ses éléments
                  caractéristiques.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> En déduire <Math tex="u_n" /> en fonction de <Math tex="n" />, puis calculer{" "}
                  <Math tex="u_{10}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>{" "}
                  <Math tex="v_{n+1}=\dfrac{u_{n+1}-1}{u_{n+1}+2}=\dfrac{\frac{2}{1+u_n}-1}{\frac{2}{1+u_n}+2}=\dfrac{2-(1+u_n)}{2+2(1+u_n)}=\dfrac{1-u_n}{4+2u_n}" />
                </p>
                <MathBlock tex="v_{n+1}=\dfrac{-(u_n-1)}{2(u_n+2)}=-\dfrac12\times\dfrac{u_n-1}{u_n+2}=-\dfrac12 v_n" />
                <p>
                  Donc <Math tex="(v_n)" /> est géométrique de raison <Math tex="q=-\dfrac12" /> et de premier
                  terme <Math tex="v_0=\dfrac{u_0-1}{u_0+2}=\dfrac{2}{5}" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> On a{" "}
                  <Math tex="v_n=\dfrac25\left(-\dfrac12\right)^n" />, et en résolvant{" "}
                  <Math tex="v_n=\dfrac{u_n-1}{u_n+2}" /> par rapport à <Math tex="u_n" /> :
                </p>
                <MathBlock tex="u_n=\dfrac{5\times2^n+4\times(-1)^n}{5\times2^n-2\times(-1)^n}" />
                <p className="font-semibold text-green-700">
                  Pour <Math tex="n=10" /> : <Math tex="u_{10}=\dfrac{5\times1024+4}{5\times1024-2}=\dfrac{5124}{5118}=\dfrac{854}{853}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Suite auxiliaire géométrique (récurrence affine)"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <Math tex="(u_n)" /> définie par <Math tex="u_0=-3" />, <Math tex="u_{n+1}=3u_n+8" />. On pose{" "}
                  <Math tex="v_n=u_n+4" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="(v_n)" /> est géométrique et préciser ses éléments
                  caractéristiques.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> En déduire <Math tex="u_n" /> en fonction de <Math tex="n" />, puis calculer{" "}
                  <Math tex="u_{10}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>
                </p>
                <MathBlock tex="v_{n+1}=u_{n+1}+4=3u_n+8+4=3u_n+12=3(u_n+4)=3v_n" />
                <p>
                  Donc <Math tex="(v_n)" /> est géométrique de raison <Math tex="q=3" /> et de premier terme{" "}
                  <Math tex="v_0=u_0+4=1" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> <Math tex="v_n=3^n" />, donc{" "}
                  <Math tex="u_n=v_n-4=3^n-4" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u_{10}=3^{10}-4=59\,049-4=\mathbf{59\,045}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Deux suites explicites, sommes croisées"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  On pose <Math tex="u_n=\dfrac14(2^n+4n-5)" /> et <Math tex="v_n=\dfrac14(2^n-4n+5)" /> pour{" "}
                  <Math tex="n\ge0" />, puis <Math tex="a_n=u_n+v_n" /> et <Math tex="b_n=u_n-v_n" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="(a_n)" /> est géométrique et <Math tex="(b_n)" /> est
                  arithmétique ; préciser leurs éléments caractéristiques.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Calculer <Math tex="S_1=\sum_{k=0}^{n}a_k" /> et{" "}
                  <Math tex="S_2=\sum_{k=0}^n b_k" />, puis en déduire{" "}
                  <Math tex="S_3=\sum_{k=0}^n u_k" /> et <Math tex="S_4=\sum_{k=0}^n v_k" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong>
                </p>
                <MathBlock tex="a_n=u_n+v_n=\dfrac14(2\times2^n)=\dfrac12\times2^n=2^{n-1}" />
                <p>
                  <Math tex="(a_n)" /> est géométrique de raison <Math tex="2" />, premier terme{" "}
                  <Math tex="a_0=\dfrac12" />.
                </p>
                <MathBlock tex="b_n=u_n-v_n=\dfrac14(8n-10)=2n-\dfrac52" />
                <p>
                  <Math tex="(b_n)" /> est arithmétique de raison <Math tex="2" />, premier terme{" "}
                  <Math tex="b_0=-\dfrac52" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong>
                </p>
                <MathBlock tex="S_1=a_0\times\dfrac{2^{n+1}-1}{2-1}=2^n-\dfrac12" />
                <MathBlock tex="S_2=\dfrac{b_0+b_n}{2}\times(n+1)=n^2-\dfrac{3n}{2}-\dfrac52" />
                <p className="font-semibold text-green-700">
                  Comme <Math tex="S_1=S_3+S_4" /> et <Math tex="S_2=S_3-S_4" /> :
                </p>
                <MathBlock tex="S_3=\dfrac{S_1+S_2}{2}=\dfrac{2^n}{2}+\dfrac{n^2}{2}-\dfrac{3n}{4}-\dfrac32,\qquad S_4=\dfrac{S_1-S_2}{2}=2^{n-1}-\dfrac{n^2}{2}+\dfrac{3n}{4}+1" />
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Moyenne arithmétique et moyenne géométrique"
            itemsLabel="2 applications"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> <Math tex="u_i=5" /> et <Math tex="u_{i+2}=17" /> sont deux termes
                  d&apos;une suite <strong>arithmétique</strong>. Calculer <Math tex="u_{i+1}" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> <Math tex="u_i=4" /> et <Math tex="u_{i+2}=9" /> sont deux termes{" "}
                  <strong>positifs</strong> d&apos;une suite <strong>géométrique</strong>. Calculer{" "}
                  <Math tex="u_{i+1}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> Par la moyenne arithmétique,{" "}
                  <Math tex="u_i+u_{i+2}=2u_{i+1}" />, donc <Math tex="u_{i+1}=\dfrac{5+17}{2}=\mathbf{11}" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> Par la moyenne géométrique,{" "}
                  <Math tex="u_i\times u_{i+2}=u_{i+1}^{\,2}" />, donc{" "}
                  <Math tex="u_{i+1}=\sqrt{4\times9}=\sqrt{36}=\mathbf6" /> (on prend la racine positive car{" "}
                  <Math tex="u_{i+1}" /> est un terme positif).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
