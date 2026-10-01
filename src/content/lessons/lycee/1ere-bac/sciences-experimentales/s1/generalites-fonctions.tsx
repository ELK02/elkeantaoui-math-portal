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
  title: "Généralités sur les fonctions · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur les généralités des fonctions numériques pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : parité, monotonie, extremums, taux d'accroissement, fonction périodique, fonction bornée, composée de deux fonctions, monotonie de g∘f, et l'étude des fonctions de référence (parabole, ax³, homographique, √(x+a)), avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 1",
  heroTitle: "Généralités sur les fonctions",
  heroSubtitle:
    "Parité, monotonie, extremums, composée de fonctions et les quatre familles de courbes de référence à connaître par cœur : parabole, cubique, hyperbole homographique et racine carrée décalée.",
  footerNote: "Généralités sur les fonctions · Mathématiques, 1ère année Baccalauréat, semestre 1.",
  sections: [
    { id: "cours-parite", label: "Parité, monotonie" },
    { id: "cours-taux", label: "Taux, périodicité" },
    { id: "cours-bornee", label: "Bornée, composée" },
    { id: "cours-reference", label: "Réf. de courbes" },
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

function Grid({ viewBox, children, className = "max-w-[240px]" }: { viewBox: string; children: ReactNode; className?: string }) {
  return (
    <svg role="img" aria-label="Figure 1 — Généralités sur les fonctions" viewBox={viewBox} className={`h-auto w-full ${className} text-neutral-700`}>
      {children}
    </svg>
  );
}

function VarTable({ cols, valueRow }: { cols: string[]; valueRow: ReactNode[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[320px] border-collapse text-center text-sm">
        <tbody>
          <tr>
            <td className="border border-border bg-surface-muted p-2 text-left font-semibold">x</td>
            {cols.map((c, i) => (
              <td key={i} className="border border-border bg-surface-muted p-2 font-mono">
                <Math tex={c} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-border p-2 text-left font-semibold text-foreground-muted">f</td>
            <td colSpan={cols.length} className="border border-border p-3">
              <div className="flex items-center justify-around">
                {valueRow.map((v, i) => (
                  <span key={i}>{v}</span>
                ))}
              </div>
            </td>
          </tr>
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
          { value: "4", label: "familles de référence" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-parite"
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
          <svg role="img" aria-label="Figure 2 — Généralités sur les fonctions" viewBox="0 0 220 160" className="h-48 w-56 text-white">
            <line x1="10" y1="140" x2="210" y2="140" stroke="white" strokeWidth="1.4" opacity="0.5" />
            <line x1="110" y1="20" x2="110" y2="150" stroke="white" strokeWidth="1.4" opacity="0.5" />
            <path
              d="M40,30 L48,52 L56,71 L64,88 L72,102 L80,113 L88,121 L96,126 L104,128 L112,128 L120,126 L128,121 L136,113 L144,102 L152,88 L160,71 L168,52 L176,30"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
            />
          </svg>
        }
      />

      {/* ===================== I. PARITÉ, MONOTONIE ===================== */}
      <LessonSection
        id="cours-parite"
        kicker="01 · Les rappels essentiels"
        title="Parité, monotonie, extremums"
        tone="light"
        description="Les définitions de base qui reviendront dans chaque étude de fonction de l'année."
      >
        <CourseBlock numeral="I" title="Fonction paire, fonction impaire">
          <Box title="Définitions" tone="def">
            <Math tex="f" /> est <strong className="text-foreground">paire</strong> sur <Math tex="D_f" /> si et
            seulement si <Math tex="D_f" /> est symétrique par rapport à 0 et{" "}
            <Math tex="\forall x\in D_f:\ f(-x)=f(x)" />.
            <br />
            <Math tex="f" /> est <strong className="text-foreground">impaire</strong> sur <Math tex="D_f" /> si et
            seulement si <Math tex="D_f" /> est symétrique par rapport à 0 et{" "}
            <Math tex="\forall x\in D_f:\ f(-x)=-f(x)" />.
          </Box>
          <Callout variant="success" title="Ce que ça change concrètement">
            Si <Math tex="D_f=I\cup I'" /> avec <Math tex="I" /> et <Math tex="I'" /> symétriques par rapport à 0,
            il suffit d&apos;étudier <Math tex="f" /> sur l&apos;ensemble d&apos;étude{" "}
            <Math tex="D_E=D_f\cap\mathbb R^+" /> : si <Math tex="f" /> est paire, les variations sur{" "}
            <Math tex="I'" /> sont <strong>opposées</strong> à celles sur <Math tex="I" /> ; si elle est impaire,
            elles sont <strong>identiques</strong>.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Monotonie et extremums absolus">
          <Box title="Monotonie sur un intervalle I" tone="def">
            <Math tex="f" /> est <strong className="text-foreground">croissante</strong> sur <Math tex="I" /> ssi{" "}
            <Math tex="\forall x,x'\in I: x<x'\Rightarrow f(x)\le f(x')" /> (le sens de l&apos;inégalité ne change
            pas). Elle est <strong className="text-foreground">décroissante</strong> ssi le sens change :{" "}
            <Math tex="x<x'\Rightarrow f(x)\ge f(x')" />. Elle est{" "}
            <strong className="text-foreground">constante</strong> ssi <Math tex="f(x)=f(x')" /> pour tous{" "}
            <Math tex="x,x'\in I" />.
          </Box>
          <Box title="Extremum absolu" tone="def">
            <Math tex="f(x_0)" /> est le <strong className="text-foreground">maximum absolu</strong> de{" "}
            <Math tex="f" /> ssi <Math tex="\forall x\in D_f:\ f(x)\le f(x_0)" />. C&apos;est le{" "}
            <strong className="text-foreground">minimum absolu</strong> ssi{" "}
            <Math tex="\forall x\in D_f:\ f(x_0)\le f(x)" />.
          </Box>
          <Callout variant="warning" title="Extremum relatif — la différence">
            <Math tex="f(x_0)" /> est un maximum (ou minimum) <strong>relatif</strong> s&apos;il existe seulement un
            intervalle ouvert <Math tex="I_{x_0}" /> centré en <Math tex="x_0" /> sur lequel l&apos;inégalité est
            vraie — pas nécessairement sur <Math tex="D_f" /> tout entier.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. TAUX, PÉRIODICITÉ ===================== */}
      <LessonSection
        id="cours-taux"
        kicker="02 · Deux nouveaux outils"
        title="Taux d'accroissement et fonction périodique"
        tone="muted"
        description="Le taux d'accroissement relie directement le signe d'un quotient au sens de variation."
      >
        <CourseBlock numeral="III" title="Taux d'accroissement">
          <Box title="Définition" tone="def">
            Pour <Math tex="x\neq x'" /> dans <Math tex="I" />, le{" "}
            <strong className="text-foreground">taux d&apos;accroissement</strong> de <Math tex="f" /> entre{" "}
            <Math tex="x" /> et <Math tex="x'" /> est <Math tex="T_f=\dfrac{f(x)-f(x')}{x-x'}" />.
          </Box>
          <Callout variant="success" title="Propriétés — le lien avec la monotonie">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="T_f\ge0" /> sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f" /> croissante sur{" "}
                <Math tex="I" /> (<Math tex="T_f>0" /> pour strictement croissante).
              </li>
              <li>
                <Math tex="T_f\le0" /> sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f" /> décroissante sur{" "}
                <Math tex="I" /> (<Math tex="T_f<0" /> pour strictement décroissante).
              </li>
              <li>
                <Math tex="T_f=0" /> sur <Math tex="I" /> <Math tex="\iff" /> <Math tex="f" /> constante sur{" "}
                <Math tex="I" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Fonction périodique">
          <Box title="Définition" tone="def">
            <Math tex="f" /> est périodique sur <Math tex="D_f" /> de période <Math tex="T>0" /> ssi :{" "}
            <Math tex="x\in D_f\Rightarrow(x+T\in D_f\ \text{et}\ x-T\in D_f)" /> et{" "}
            <Math tex="\forall x\in D_f:\ f(x+T)=f(x)" /> (<Math tex="T" /> étant le plus petit réel{" "}
            <Math tex=">0" /> vérifiant cette égalité).
          </Box>
          <Callout variant="success" title="Exemples classiques et conséquence">
            <p>
              <Math tex="\sin" /> et <Math tex="\cos" /> sont périodiques de période <Math tex="2\pi" /> ;{" "}
              <Math tex="\tan" /> est périodique de période <Math tex="\pi" />.
            </p>
            <p className="mt-2">
              Conséquence : <Math tex="\forall n\in\mathbb Z,\forall x\in D_f:\ f(x+nT)=f(x)" />. Pour tracer la
              courbe, il suffit de construire <Math tex="C_0" /> sur un intervalle de longueur <Math tex="T" />{" "}
              puis de la translater par <Math tex="\vec u=kT\vec i" /> pour chaque <Math tex="k\in\mathbb Z" />.
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. BORNÉE, COMPOSÉE ===================== */}
      <LessonSection
        id="cours-bornee"
        kicker="03 · Comparer et combiner"
        title="Fonction bornée, comparaison, composée de deux fonctions"
        tone="light"
        description="On termine les rappels par ce qui permettra d'étudier des fonctions plus complexes en les décomposant."
      >
        <CourseBlock numeral="V" title="Fonction majorée, minorée, bornée">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Majorée / minorée" tone="def">
              <Math tex="f" /> est <strong className="text-foreground">majorée</strong> par <Math tex="M" /> sur{" "}
              <Math tex="I" /> ssi <Math tex="\forall x\in I:\ f(x)\le M" />.
              <br />
              <Math tex="f" /> est <strong className="text-foreground">minorée</strong> par <Math tex="m" /> sur{" "}
              <Math tex="I" /> ssi <Math tex="\forall x\in I:\ m\le f(x)" />.
            </Box>
            <Box title="Bornée" tone="def">
              <Math tex="f" /> est <strong className="text-foreground">bornée</strong> sur <Math tex="I" /> ssi
              elle est à la fois majorée et minorée, ce qui équivaut à :{" "}
              <Math tex="\exists A\in\mathbb R^+,\forall x\in I:\ |f(x)|\le A" />.
            </Box>
          </div>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Comparaison de deux fonctions">
          <Box title="Définitions" tone="def">
            Soient <Math tex="f" /> et <Math tex="g" /> définies sur <Math tex="I" />.{" "}
            <Math tex="f\le g" /> sur <Math tex="I" /> signifie <Math tex="\forall x\in I:\ f(x)\le g(x)" /> —{" "}
            <Math tex="C_f" /> est alors sous <Math tex="C_g" />. De même, <Math tex="f\ge g" /> place{" "}
            <Math tex="C_f" /> au-dessus de <Math tex="C_g" />, et <Math tex="f=g" /> signifie que les deux
            courbes sont confondues sur <Math tex="I" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Composée de deux fonctions">
          <Box title="Définition" tone="def">
            Soient <Math tex="f" /> définie sur <Math tex="D_f" /> et <Math tex="g" /> définie sur{" "}
            <Math tex="D_g" />. On pose <Math tex="D_{g\circ f}=\{x\in\mathbb R\ /\ x\in D_f\ \text{et}\ f(x)\in D_g\}" />
            . Sur cet ensemble, la fonction <Math tex="h(x)=g(f(x))" /> est appelée la{" "}
            <strong className="text-foreground">composée</strong> de <Math tex="f" /> et <Math tex="g" /> dans cet
            ordre, notée <Math tex="h=g\circ f" />.
          </Box>
          <Callout variant="warning" title="Attention à l'ordre">
            En général <Math tex="g\circ f\neq f\circ g" /> : il faut toujours préciser dans quel ordre les
            fonctions sont composées, et leurs domaines de définition sont généralement différents.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Monotonie de f + c, c·f et g ∘ f">
          <Callout variant="success" title="Propriétés (via le taux d'accroissement)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="f" /> et <Math tex="f+c" /> ont toujours le <strong>même sens</strong> de variation sur{" "}
                <Math tex="I" />, quel que soit <Math tex="c\in\mathbb R" /> (car <Math tex="T_{f+c}=T_f" />).
              </li>
              <li>
                Si <Math tex="c>0" />, <Math tex="f" /> et <Math tex="c\cdot f" /> varient dans le{" "}
                <strong>même sens</strong> ; si <Math tex="c<0" />, leurs variations sont{" "}
                <strong>opposées</strong> (car <Math tex="T_{c\cdot f}=c\,T_f" />).
              </li>
              <li>
                Si <Math tex="f" /> et <Math tex="g" /> ont la <strong>même</strong> monotonie (sur{" "}
                <Math tex="D_f" /> et <Math tex="f(D_f)\subset D_g" /> respectivement), alors{" "}
                <Math tex="g\circ f" /> est <strong>croissante</strong>.
              </li>
              <li>
                Si <Math tex="f" /> et <Math tex="g" /> ont des monotonies <strong>opposées</strong>, alors{" "}
                <Math tex="g\circ f" /> est <strong>décroissante</strong>.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. FONCTIONS DE RÉFÉRENCE ===================== */}
      <LessonSection
        id="cours-reference"
        kicker="04 · Les courbes à reconnaître au premier coup d'œil"
        title="Étude des fonctions de référence"
        tone="muted"
        description="Quatre familles de courbes qui reviendront sans cesse : la parabole, la cubique, l'hyperbole homographique et la racine décalée."
      >
        <CourseBlock numeral="IX" title="A. La parabole : f(x) = ax² + bx + c (a ≠ 0)">
          <Box title="Forme canonique" tone="def">
            <Math tex="f(x)=a\left(x+\dfrac{b}{2a}\right)^2-\dfrac{\Delta}{4a}" />, d&apos;où{" "}
            <Math tex="f\!\left(-\dfrac{b}{2a}\right)=-\dfrac{\Delta}{4a}" />.
          </Box>
          <Callout variant="success" title="Vocabulaire et propriétés">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                La courbe est une <strong>parabole</strong> de sommet{" "}
                <Math tex="S\!\left(-\dfrac{b}{2a},f\!\left(-\dfrac{b}{2a}\right)\right)" />, d&apos;axe de symétrie{" "}
                <Math tex="(D):\ x=-\dfrac{b}{2a}" />.
              </li>
              <li>
                Si <Math tex="a>0" /> : parabole orientée vers le haut, <Math tex="f\!\left(-\frac{b}{2a}\right)" />
                {" "}est le <strong>minimum absolu</strong>.
              </li>
              <li>
                Si <Math tex="a<0" /> : parabole orientée vers le bas,{" "}
                <Math tex="f\!\left(-\frac{b}{2a}\right)" /> est le <strong>maximum absolu</strong>.
              </li>
            </ul>
          </Callout>
          <Figure
            text={
              <>
                <p>
                  Exemple : <Math tex="f(x)=2x^2+4x+3" />. Comme <Math tex="a=2>0" />, sommet{" "}
                  <Math tex="S(-1,1)" />, axe <Math tex="x=-1" />, minimum absolu <Math tex="f(-1)=1" />.
                </p>
                <VarTable
                  cols={["-\\infty", "-1", "+\\infty"]}
                  valueRow={[<Math key="a" tex="\searrow" />, <Math key="b" tex="1" />, <Math key="c" tex="\nearrow" />]}
                />
              </>
            }
            svg={
              <Grid viewBox="0 0 200 160" className="max-w-[220px]">
                <line x1="0" y1="150" x2="200" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <line x1="70" y1="10" x2="70" y2="160" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
                <path
                  d="M19.0,28.0 L23.9,46.8 L28.7,63.8 L33.6,78.9 L38.4,92.1 L43.3,103.5 L48.1,112.9 L53.0,120.4 L57.9,126.1 L62.7,129.9 L67.6,131.8 L72.4,131.8 L77.3,129.9 L82.1,126.1 L87.0,120.4 L91.9,112.9 L96.7,103.5 L101.6,92.1 L106.4,78.9 L111.3,63.8 L116.1,46.8 L121.0,28.0"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2.2"
                />
                <circle cx="70" cy="132" r="3" fill="#e11d48" />
                <text x="76" y="128" fontSize="11" fill="#e11d48">S(-1,1)</text>
              </Grid>
            }
          />
        </CourseBlock>

        <CourseBlock numeral="X" title="B. La cubique : f(x) = ax³ (a ≠ 0)">
          <Callout variant="success" title="Propriétés">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="D_f=\mathbb R" />, et <Math tex="f" /> est <strong>impaire</strong> (
                <Math tex="a(-x)^3=-ax^3=-f(x)" />), donc l&apos;étude se fait sur{" "}
                <Math tex="D_E=\mathbb R^+" />.
              </li>
              <li>
                Si <Math tex="a>0" /> : <Math tex="f" /> strictement croissante sur <Math tex="\mathbb R" />.
              </li>
              <li>
                Si <Math tex="a<0" /> : <Math tex="f" /> strictement décroissante sur <Math tex="\mathbb R" />.
              </li>
            </ul>
          </Callout>
          <Figure
            reverse
            text={
              <p>
                Exemple : <Math tex="f(x)=\dfrac12x^3" /> (<Math tex="a>0" />) — strictement croissante sur{" "}
                <Math tex="\mathbb R" />, symétrique par rapport à l&apos;origine.
              </p>
            }
            svg={
              <Grid viewBox="0 0 260 220" className="max-w-[240px]">
                <line x1="0" y1="110" x2="260" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <line x1="130" y1="0" x2="130" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <path
                  d="M53.2,206.8 L60.5,181.7 L67.8,161.3 L75.1,145.3 L82.5,133.0 L89.8,123.9 L97.1,117.6 L104.4,113.6 L111.7,111.3 L119.0,110.3 L126.3,110.0 L133.7,110.0 L141.0,109.7 L148.3,108.7 L155.6,106.4 L162.9,102.4 L170.2,96.1 L177.5,87.0 L184.9,74.7 L192.2,58.7 L199.5,38.3 L206.8,13.2"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="2.2"
                />
                <circle cx="130" cy="110" r="2.6" fill="#0ea5e9" />
              </Grid>
            }
          />
        </CourseBlock>

        <CourseBlock numeral="XI" title="C. La fonction homographique : f(x) = (ax+b)/(cx+d), c ≠ 0">
          <Box title="Domaine et taux d'accroissement" tone="def">
            <Math tex="D_f=\mathbb R\setminus\left\{-\dfrac dc\right\}" />. On pose{" "}
            <Math tex="\Delta=ad-bc=\begin{vmatrix}a&b\\c&d\end{vmatrix}" /> : un calcul du taux d&apos;accroissement
            donne <Math tex="T_f=\dfrac{\Delta}{(cx+d)(cx'+d)}" />, dont le signe est celui de{" "}
            <Math tex="\Delta" /> (le dénominateur est toujours positif de chaque côté de l&apos;asymptote).
          </Box>
          <Callout variant="success" title="Vocabulaire et propriétés">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                La courbe est une <strong>hyperbole</strong> de centre de symétrie{" "}
                <Math tex="\Omega\!\left(-\dfrac dc,\dfrac ac\right)" />, d&apos;asymptotes{" "}
                <Math tex="(D_v):\ x=-\dfrac dc" /> (verticale) et <Math tex="(D_h):\ y=\dfrac ac" /> (horizontale).
              </li>
              <li>
                Si <Math tex="\Delta>0" /> : <Math tex="f" /> strictement croissante sur chacun des deux
                intervalles de <Math tex="D_f" />.
              </li>
              <li>
                Si <Math tex="\Delta<0" /> : <Math tex="f" /> strictement décroissante sur chacun des deux
                intervalles de <Math tex="D_f" />.
              </li>
            </ul>
          </Callout>
          <Figure
            text={
              <p>
                Exemple : <Math tex="f(x)=\dfrac{2x+1}{x+1}" />.{" "}
                <Math tex="\Delta=\begin{vmatrix}2&1\\1&1\end{vmatrix}=2-1=1>0" />, donc <Math tex="f" /> est
                strictement croissante sur chaque intervalle. Centre <Math tex="\Omega(-1,2)" />, asymptotes{" "}
                <Math tex="x=-1" /> et <Math tex="y=2" />.
              </p>
            }
            svg={
              <Grid viewBox="0 0 220 160" className="max-w-[220px]">
                <line x1="0" y1="66" x2="220" y2="66" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="84" y1="0" x2="84" y2="160" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
                <path
                  d="M16.4,57.5 L20.2,57.0 L24.0,56.5 L27.8,55.8 L31.7,55.1 L35.5,54.2 L39.3,53.2 L43.1,52.0 L46.9,50.6 L50.7,48.8 L54.5,46.6 L58.3,43.7 L62.2,39.8 L66.0,34.3 L69.8,25.8 L73.6,11.0"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2.2"
                />
                <path
                  d="M90.8,150.6 L97.1,109.8 L103.4,95.5 L109.7,88.3 L116.0,83.9 L122.3,80.9 L128.6,78.8 L134.9,77.2 L141.2,76.0 L147.5,75.0 L153.9,74.2 L160.2,73.5 L166.5,72.9 L172.8,72.4 L179.1,72.0 L185.4,71.6"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2.2"
                />
                <circle cx="84" cy="66" r="2.6" fill="#0ea5e9" />
                <text x="88" y="62" fontSize="10" fill="#0ea5e9">Ω(-1,2)</text>
              </Grid>
            }
          />
        </CourseBlock>

        <CourseBlock numeral="XII" title="D. La fonction f(x) = √(x + a)">
          <Callout variant="success" title="Propriétés">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="f(x)=\sqrt{x+a}" /> est définie sur <Math tex="[-a,+\infty[" /> et strictement
                croissante sur cet intervalle.
              </li>
              <li>
                <Math tex="f(x)=\sqrt{a-x}" /> est définie sur <Math tex="]-\infty,a]" /> et strictement
                décroissante sur cet intervalle.
              </li>
            </ul>
          </Callout>
          <Figure
            reverse
            text={
              <p>
                Exemple : <Math tex="f(x)=\sqrt{x+2}" />, <Math tex="D_f=[-2,+\infty[" />, strictement croissante,
                point de départ <Math tex="(-2,0)" />.
              </p>
            }
            svg={
              <Grid viewBox="0 0 220 140" className="max-w-[220px]">
                <line x1="0" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                <path
                  d="M18.0,120.0 L27.3,104.4 L36.6,98.0 L45.9,93.1 L55.2,88.9 L64.5,85.2 L73.8,81.9 L83.1,78.8 L92.4,76.0 L101.7,73.3 L111.1,70.8 L120.4,68.4 L129.7,66.1 L139.0,63.9 L148.3,61.8 L157.6,59.8 L166.9,57.8 L176.2,55.9 L185.5,54.0 L194.8,52.2"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2.2"
                />
                <circle cx="18" cy="120" r="3" fill="#16a34a" />
                <text x="22" y="132" fontSize="10" fill="#16a34a">(-2,0)</text>
              </Grid>
            }
          />
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Généralités sur les fonctions"
        tone="light"
        description="6 exercices corrigés, calqués sur les techniques du cours."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre généralités sur les fonctions est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Domaines de définition"
            itemsLabel="4 fonctions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>a.</strong> <Math tex="f(x)=\dfrac{x+2}{x-1}" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>b.</strong> <Math tex="f(x)=\dfrac{x^2+5x+9}{x^2-18}" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>c.</strong> <Math tex="f(x)=\sqrt{\dfrac{x+2}{x-1}}" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>d.</strong> <Math tex="f(x)=\sqrt{\dfrac{x^2+5x+9}{x^2-18}}" />
                </p>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">a.</p>
                  <p>
                    Il faut <Math tex="x-1\neq0" />, donc <Math tex="D_f=\mathbb R\setminus\{1\}" />.
                  </p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">b.</p>
                  <p>
                    <Math tex="x^2-18\neq0\iff x\neq\pm3\sqrt2" />, donc{" "}
                    <Math tex="D_f=\mathbb R\setminus\{-3\sqrt2;3\sqrt2\}" />.
                  </p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">c.</p>
                  <p>
                    Il faut <Math tex="\dfrac{x+2}{x-1}\ge0" /> et <Math tex="x\neq1" /> : en étudiant le signe du
                    quotient (racines <Math tex="-2" /> et <Math tex="1" />), on trouve{" "}
                    <Math tex="D_f=]-\infty,-2]\cup]1,+\infty[" />.
                  </p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">d.</p>
                  <p>
                    <Math tex="x^2+5x+9" /> a un discriminant négatif (<Math tex="25-36=-11" />), donc il est{" "}
                    <strong>toujours strictement positif</strong>. Il faut alors <Math tex="x^2-18>0" />, d&apos;où{" "}
                    <Math tex="D_f=\left]-\infty,-3\sqrt2\right[\cup\left]3\sqrt2,+\infty\right[" />.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Sommet et tableau de variation"
            itemsLabel="2 paraboles"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>a.</strong> <Math tex="f(x)=x^2-\dfrac12x+4" />
                </p>
                <p className="rounded-xl border border-border p-4 text-sm">
                  <strong>b.</strong> <Math tex="f(x)=2x^2-4x-2" />
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">a.</p>
                  <p>
                    <Math tex="a=1>0" />, sommet <Math tex="x=-\dfrac{b}{2a}=\dfrac14" />,{" "}
                    <Math tex="f\!\left(\dfrac14\right)=\dfrac{63}{16}" />. Parabole vers le haut, minimum absolu{" "}
                    <Math tex="\dfrac{63}{16}" /> en <Math tex="x=\dfrac14" />. <Math tex="f" /> décroît sur{" "}
                    <Math tex="\left]-\infty,\dfrac14\right]" /> puis croît sur <Math tex="\left[\dfrac14,+\infty\right[" />.
                  </p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">b.</p>
                  <p>
                    <Math tex="a=2>0" />, sommet <Math tex="x=-\dfrac{-4}{4}=1" />,{" "}
                    <Math tex="f(1)=2-4-2=-4" />. Parabole vers le haut, minimum absolu <Math tex="-4" /> en{" "}
                    <Math tex="x=1" />. <Math tex="f" /> décroît sur <Math tex="]-\infty,1]" /> puis croît sur{" "}
                    <Math tex="[1,+\infty[" />.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Composées et leurs domaines"
            itemsLabel="2 couples de fonctions"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> <Math tex="f(x)=3x+6" /> et <Math tex="g(x)=x^2-1" /> — calculer{" "}
                  <Math tex="f\circ g" /> et <Math tex="g\circ f" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> <Math tex="f(x)=\sqrt{1+x^2}" /> et <Math tex="g(x)=\sqrt{x^2-1}" /> —
                  calculer <Math tex="f\circ g" />, <Math tex="g\circ f" /> et leurs domaines.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">a.</p>
                  <MathBlock tex="f\circ g(x)=f(x^2-1)=3(x^2-1)+6=3x^2+3" />
                  <MathBlock tex="g\circ f(x)=g(3x+6)=(3x+6)^2-1=9x^2+36x+35" />
                  <p>
                    <Math tex="D_f=D_g=\mathbb R" />, donc <Math tex="D_{f\circ g}=D_{g\circ f}=\mathbb R" />.
                  </p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">b.</p>
                  <p>
                    <Math tex="D_f=\mathbb R" /> et <Math tex="D_g=]-\infty,-1]\cup[1,+\infty[" /> (il faut{" "}
                    <Math tex="x^2-1\ge0" />).
                  </p>
                  <MathBlock tex="f\circ g(x)=\sqrt{1+(x^2-1)}=\sqrt{x^2}=|x|,\quad D_{f\circ g}=D_g" />
                  <p>
                    Pour <Math tex="g\circ f" />, il faut de plus <Math tex="f(x)^2-1\ge0" /> c&apos;est-à-dire{" "}
                    <Math tex="1+x^2-1\ge0\iff x^2\ge0" />, toujours vrai :
                  </p>
                  <MathBlock tex="g\circ f(x)=\sqrt{(1+x^2)-1}=\sqrt{x^2}=|x|,\quad D_{g\circ f}=\mathbb R" />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Minoration et composée gof"
            itemsLabel="3 fonctions liées"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  On pose <Math tex="f(x)=x^2+4x+1" />, <Math tex="g(x)=\sqrt{x+4}" />,{" "}
                  <Math tex="h(x)=\sqrt{x^2+4x+5}" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="f" /> est minorée par <Math tex="-3" />, et que{" "}
                  <Math tex="h" /> est minorée par <Math tex="1" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Vérifier que <Math tex="h=g\circ f" />, puis étudier les variations de{" "}
                  <Math tex="h" /> sur <Math tex="]-\infty,-2]" /> et <Math tex="[-2,+\infty[" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">a.</p>
                  <MathBlock tex="f(x)=x^2+4x+1=(x+2)^2-3\ge-3" />
                  <MathBlock tex="\begin{gathered} x^2+4x+5=(x+2)^2+1\ge1 \\ \Rightarrow h(x)=\sqrt{(x+2)^2+1}\ge\sqrt1=1 \end{gathered}" />
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">b.</p>
                  <MathBlock tex="g\circ f(x)=g(x^2+4x+1)=\sqrt{(x^2+4x+1)+4}=\sqrt{x^2+4x+5}=h(x)" />
                  <p>
                    <Math tex="f" /> est une parabole de sommet <Math tex="(-2,-3)" /> : décroissante sur{" "}
                    <Math tex="]-\infty,-2]" />, croissante sur <Math tex="[-2,+\infty[" />. <Math tex="g" /> est
                    strictement croissante sur son domaine. Par composition (<Math tex="h=g\circ f" />
                    ) :
                  </p>
                  <p className="font-semibold text-green-700">
                    Sur <Math tex="]-\infty,-2]" />, <Math tex="f" /> décroît et <Math tex="g" /> croît (monotonies
                    opposées) donc <Math tex="h=g\circ f" /> est <strong>décroissante</strong>. Sur{" "}
                    <Math tex="[-2,+\infty[" />, <Math tex="f" /> et <Math tex="g" /> croissent toutes les deux
                    (même monotonie) donc <Math tex="h" /> est <strong>croissante</strong>.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Racines d'une équation cubique lues graphiquement"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  On pose <Math tex="f(x)=x^2-4x+3" /> et <Math tex="g(x)=\dfrac{1}{x-1}" />, et{" "}
                  <Math tex="(E):\ x^3-5x^2+7x-4=0" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Donner la nature de <Math tex="C_f" />, et les points d&apos;intersection de{" "}
                  <Math tex="C_f" /> avec les axes du repère.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que <Math tex="(E)" /> équivaut à <Math tex="f(x)=g(x)" />, puis
                  situer graphiquement sa (ses) solution(s).
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">a.</p>
                  <p>
                    <Math tex="C_f" /> est une parabole (<Math tex="a=1>0" />, sommet <Math tex="(2,-1)" />).{" "}
                    <Math tex="f(x)=x^2-4x+3=(x-1)(x-3)" /> s&apos;annule en <Math tex="x=1" /> et{" "}
                    <Math tex="x=3" /> : intersections avec l&apos;axe des abscisses <Math tex="(1,0)" /> et{" "}
                    <Math tex="(3,0)" />. Avec l&apos;axe des ordonnées : <Math tex="f(0)=3" />, point{" "}
                    <Math tex="(0,3)" />.
                  </p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">b.</p>
                  <p>
                    Pour <Math tex="x\neq1" />, <Math tex="f(x)=g(x)\iff(x^2-4x+3)(x-1)=1" />, et en développant :
                  </p>
                  <MathBlock tex="(x^2-4x+3)(x-1)-1=x^3-5x^2+7x-4" />
                  <p>
                    donc <Math tex="f(x)=g(x)\iff x^3-5x^2+7x-4=0" />, c&apos;est-à-dire <Math tex="(E)" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    Les solutions de <Math tex="(E)" /> sont donc les abscisses des points d&apos;intersection de{" "}
                    <Math tex="C_f" /> et <Math tex="C_g" /> : il n&apos;y en a{" "}
                    <strong>qu&apos;une seule</strong>, visible sur le graphique au voisinage de{" "}
                    <Math tex="x\approx3{,}2" />.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Monotonie d'une composée sur un intervalle"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-3 text-sm">
                <p className="rounded-xl border border-border p-4">
                  On pose <Math tex="g(x)=-x^2+2x+2" /> et <Math tex="f(x)=\sqrt{x+1}" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Calculer <Math tex="g\circ f(x)" /> pour <Math tex="x\in[-1,3]" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Étudier les variations de <Math tex="g\circ f" /> sur <Math tex="[-1,3]" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">a.</p>
                  <MathBlock tex="g\circ f(x)=g(\sqrt{x+1})=-(\sqrt{x+1})^2+2\sqrt{x+1}+2=-x+2\sqrt{x+1}+1" />
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="font-bold text-green-700">b.</p>
                  <p>
                    <Math tex="f" /> est strictement croissante sur <Math tex="[-1,3]" />, avec{" "}
                    <Math tex="f([-1,3])=[0,2]" />. Or <Math tex="g(x)=-(x-1)^2+3" /> a son sommet en{" "}
                    <Math tex="x=1" /> : elle croît sur <Math tex="[0,1]" /> et décroît sur <Math tex="[1,2]" />.
                  </p>
                  <p>
                    L&apos;antécédent de <Math tex="1" /> par <Math tex="f" /> est <Math tex="x=0" /> (car{" "}
                    <Math tex="\sqrt{0+1}=1" />). Comme <Math tex="f" /> est croissante, la monotonie de{" "}
                    <Math tex="g\circ f" /> suit celle de <Math tex="g" /> sur l&apos;intervalle-image
                    correspondant :
                  </p>
                  <p className="font-semibold text-green-700">
                    <Math tex="g\circ f" /> est <strong>croissante</strong> sur <Math tex="[-1,0]" /> et{" "}
                    <strong>décroissante</strong> sur <Math tex="[0,3]" />.
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
