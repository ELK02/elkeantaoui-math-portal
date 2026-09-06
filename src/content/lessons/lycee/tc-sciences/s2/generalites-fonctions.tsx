import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  FormulaBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Généralités sur les fonctions · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet : fonction numérique, image et antécédent, ensemble de définition, courbe représentative, égalité de deux fonctions, parité, sens de variation, taux d'accroissement, extremums, et étude des fonctions usuelles ax², a/x, ax²+bx+c et (ax+b)/(cx+d). 28 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 2.",
  kicker: "Tronc Commun Sciences · Semestre 2",
  heroTitle: "Généralités sur les fonctions",
  heroSubtitle:
    "Domaine de définition, courbe représentative, parité, variations, taux d'accroissement, extremums, et les fonctions de référence (parabole, hyperbole, homographique) : le cours complet, puis 28 exercices corrigés.",
  footerNote: "Généralités sur les fonctions · Mathématiques, Tronc Commun Sciences et Technologies, semestre 2.",
  sections: [
    { id: "cours-generalites", label: "Généralités" },
    { id: "cours-variations", label: "Parité & variations" },
    { id: "cours-usuelles", label: "Fonctions usuelles" },
    { id: "exercices", label: "Exercices" },
  ],
};

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

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <p className="text-foreground">{children}</p>
    </div>
  );
}

function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-4 text-sm">
      <p className="mb-2 font-semibold text-foreground-muted">{title}</p>
      <div className="space-y-2 text-foreground">{children}</div>
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

/** A small coordinate-grid frame with axes, for plotting a curve inside. */
function Grid({
  viewBox,
  children,
  className = "max-w-[260px]",
}: {
  viewBox: string;
  children: ReactNode;
  className?: string;
}) {
  const [, , w, h] = viewBox.split(" ").map(Number);
  return (
    <svg viewBox={viewBox} className={`h-auto w-full ${className} text-neutral-700`}>
      <rect x="0" y="0" width={w} height={h} fill="none" />
      {children}
    </svg>
  );
}

function VarTable({
  cols,
  domainRow,
  signRow,
}: {
  cols: string[];
  domainRow: ReactNode[];
  signRow: ReactNode[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[360px] border-collapse text-center text-sm">
        <tbody>
          <tr>
            <td className="border border-border bg-surface-muted p-2 text-left font-semibold">x</td>
            {cols.map((c, i) => (
              <td key={i} className="border border-border bg-surface-muted p-2 font-mono">
                {c}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border border-border p-2 text-left font-semibold text-foreground-muted">f</td>
            <td colSpan={cols.length} className="border border-border p-3">
              <div className="flex items-center justify-around">
                {domainRow.map((d, i) => (
                  <span key={i} className="font-mono">
                    {d}
                  </span>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-1 flex items-center justify-around text-xs text-foreground-muted">
        {signRow.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
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
          { value: "28", label: "exercices corrigés" },
          { value: "8", label: "notions du cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#cours-generalites" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <line x1="30" y1="10" x2="30" y2="190" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <path
              d="M50,170 L58,140 L66,116 L74,96 L82,80 L90,68 L98,60 L106,56 L114,56 L122,60 L130,68 L138,80 L146,96 L154,116 L162,140 L170,170"
              fill="none"
              stroke="#fb923c"
              strokeWidth="2.5"
            />
            <circle cx="110" cy="55" r="3.5" fill="white" />
          </svg>
        }
      />

      {/* ===================== I, II, III. GÉNÉRALITÉS ===================== */}
      <LessonSection
        id="cours-generalites"
        kicker="01 · Les bases"
        title="Fonction numérique, ensemble de définition, courbe"
        tone="light"
        description="Le vocabulaire de base — image, antécédent, domaine — et la représentation graphique."
      >
        <CourseBlock numeral="I" title="Fonction numérique d'une variable réelle">
          <DefBox label="Définition">
            Une <strong>fonction numérique</strong> <Math tex="f" /> associe à chaque élément <Math tex="x" />{" "}
            d&apos;un ensemble, au plus, <strong>un seul</strong> réel noté <Math tex="f(x)" />. On note :
          </DefBox>
          <FormulaBlock tex="f:\ x \longmapsto f(x)" caption="x est la variable, f(x) est l'image de x par f" />
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-2 font-semibold text-foreground-muted">Vocabulaire</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="y=f(x)" />, on dit que <Math tex="y" /> est <strong>l&apos;image</strong> de{" "}
                <Math tex="x" /> par <Math tex="f" />, et que <Math tex="x" /> est <strong>un antécédent</strong> de{" "}
                <Math tex="y" /> par <Math tex="f" />.
              </li>
              <li>
                Si l&apos;image de <Math tex="x" /> existe, on dit que <Math tex="f" /> est{" "}
                <strong>définie en x</strong>.
              </li>
              <li>
                L&apos;ensemble de tous les réels qui ont une image par <Math tex="f" /> est appelé{" "}
                <strong>ensemble (ou domaine) de définition</strong> de <Math tex="f" />, noté{" "}
                <Math tex="D_f" />.
              </li>
              <li>
                <Math tex="x\in D_f \iff f(x)\in\mathbb R" />.
              </li>
            </ul>
          </div>
          <Example title="Exemples résolus — ensemble de définition">
            <p>
              <Math tex="f(x)=\dfrac1x" /> : il faut <Math tex="x\neq 0" />, donc{" "}
              <Math tex="D_f=\mathbb R^*=\;]-\infty,0[\,\cup\,]0,+\infty[" />.
            </p>
            <p>
              <Math tex="f(x)=\sqrt x" /> : il faut <Math tex="x\ge 0" />, donc{" "}
              <Math tex="D_f=[0,+\infty[" />.
            </p>
            <p>
              <Math tex="f(x)=2x" /> : fonction polynomiale, définie pour tout réel, donc{" "}
              <Math tex="D_f=\mathbb R" />.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="II" title="La courbe représentative d'une fonction">
          <DefBox label="Définition">
            Le plan <Math tex="\mathcal P" /> est muni d&apos;un repère <Math tex="(O,\vec\imath,\vec\jmath)" />
            (en général orthonormé). On appelle <strong>courbe représentative</strong> de <Math tex="f" />, notée{" "}
            <Math tex="(C_f)" />, l&apos;ensemble des points <Math tex="M(x,f(x))" /> où <Math tex="x\in D_f" />.
          </DefBox>
          <FormulaBlock tex="M(x,y)\in(C_f) \iff x\in D_f \ \text{et}\ y=f(x)" caption="équation cartésienne de la courbe : y = f(x)" />
        </CourseBlock>

        <CourseBlock numeral="III" title="Égalité de deux fonctions">
          <Callout variant="success" title="Définition">
            Deux fonctions <Math tex="f" /> et <Math tex="g" />, définies respectivement sur <Math tex="D_f" /> et{" "}
            <Math tex="D_g" />, sont <strong>égales</strong> (on écrit <Math tex="f=g" />) si et seulement si :
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="D_f=D_g" />,
              </li>
              <li>
                pour tout <Math tex="x\in D_f" />, <Math tex="f(x)=g(x)" />.
              </li>
            </ul>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Si <Math tex="f=g" />, alors les courbes <Math tex="(C_f)" /> et <Math tex="(C_g)" /> sont{" "}
            <strong>confondues</strong>. Attention : deux fonctions qui coïncident partout où elles sont{" "}
            <em>toutes les deux</em> définies ne sont pas forcément égales — il faut aussi que leurs domaines soient
            identiques !
          </p>
          <Example title="Exemple résolu — un piège classique">
            <p>
              <Math tex="h(x)=\dfrac{x^2-x}{x}" /> a pour domaine <Math tex="D_h=\mathbb R^*" /> (il faut{" "}
              <Math tex="x\neq0" />). Pour <Math tex="x\neq0" />, <Math tex="h(x)=\dfrac{x(x-1)}{x}=x-1" />.
            </p>
            <p>
              Soit <Math tex="t(x)=x-1" />, définie sur <Math tex="D_t=\mathbb R" />.
            </p>
            <p className="font-semibold text-green-700">
              Bien que <Math tex="h(x)=t(x)" /> partout où <Math tex="h" /> est définie, on a{" "}
              <Math tex="D_h\neq D_t" /> (0 est dans <Math tex="D_t" /> mais pas dans <Math tex="D_h" />) : donc{" "}
              <Math tex="h\neq t" />.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV, V, VI, VII. PARITÉ ET VARIATIONS ===================== */}
      <LessonSection
        id="cours-variations"
        kicker="02 · Étudier une fonction"
        title="Parité, sens de variation, taux d'accroissement, extremums"
        tone="muted"
        description="Les quatre outils qui permettent de décrire complètement le comportement d'une fonction."
      >
        <CourseBlock numeral="IV" title="Fonction paire, fonction impaire">
          <Callout variant="success" title="Définitions">
            Soit <Math tex="f" /> définie sur <Math tex="D_f" />.
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <Math tex="f" /> est <strong>paire</strong> sur <Math tex="D_f" /> ssi, pour tout{" "}
                <Math tex="x\in D_f" /> : <Math tex="-x\in D_f" /> et <Math tex="f(-x)=f(x)" />.
              </li>
              <li>
                <Math tex="f" /> est <strong>impaire</strong> sur <Math tex="D_f" /> ssi, pour tout{" "}
                <Math tex="x\in D_f" /> : <Math tex="-x\in D_f" /> et <Math tex="f(-x)=-f(x)" />.
              </li>
            </ul>
          </Callout>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-4 text-sm">
              <p className="font-semibold text-foreground-muted">Fonction paire</p>
              <p>
                La courbe est <strong>symétrique par rapport à l&apos;axe des ordonnées</strong>. Le domaine
                d&apos;étude est <Math tex="D_E=D_f\cap\mathbb R^+" />.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <p className="font-semibold text-foreground-muted">Fonction impaire</p>
              <p>
                La courbe est <strong>symétrique par rapport à l&apos;origine</strong> du repère. Le domaine
                d&apos;étude est aussi <Math tex="D_E=D_f\cap\mathbb R^+" />.
              </p>
            </div>
          </div>
          <Example title="Exemples résolus">
            <p>
              <Math tex="f(x)=3x^2+5" /> : <Math tex="D_f=\mathbb R" />, symétrique. <Math tex="f(-x)=3(-x)^2+5=3x^2+5=f(x)" />. <strong className="text-green-700">f est paire.</strong>
            </p>
            <p>
              <Math tex="f(x)=7x^3+2x" /> : <Math tex="D_f=\mathbb R" />, symétrique. <Math tex="f(-x)=7(-x)^3+2(-x)=-7x^3-2x=-f(x)" />. <strong className="text-green-700">f est impaire.</strong>
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="V" title="Sens de variation d'une fonction">
          <Callout variant="success" title="Définitions">
            Soit <Math tex="I\subset D_f" /> un intervalle. Pour tous <Math tex="x,x'\in I" /> :
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="f" /> <strong>croissante</strong> sur <Math tex="I" /> ssi <Math tex="x<x' \Rightarrow f(x)\le f(x')" />.
              </li>
              <li>
                <Math tex="f" /> <strong>strictement croissante</strong> ssi <Math tex="x<x' \Rightarrow f(x)<f(x')" />.
              </li>
              <li>
                <Math tex="f" /> <strong>décroissante</strong> ssi <Math tex="x<x' \Rightarrow f(x)\ge f(x')" />.
              </li>
              <li>
                <Math tex="f" /> <strong>strictement décroissante</strong> ssi <Math tex="x<x' \Rightarrow f(x)>f(x')" />.
              </li>
              <li>
                <Math tex="f" /> <strong>constante</strong> sur <Math tex="I" /> ssi <Math tex="f(x)=f(x')" /> pour
                tous <Math tex="x,x'\in I" />.
              </li>
            </ul>
          </Callout>
          <Callout variant="info" title="Vocabulaire">
            Croissante ou décroissante : on dit que <Math tex="f" /> est <strong>monotone</strong>. Strictement
            croissante ou strictement décroissante : <strong>strictement monotone</strong>. Le tableau qui résume{" "}
            <Math tex="D_f" /> et les variations de <Math tex="f" /> est le <strong>tableau de variation</strong>.
          </Callout>
          <Example title="Exemple résolu — f(x) = 5x − 3">
            <p>
              Soient <Math tex="x<x'" />. Alors <Math tex="5x<5x'" /> (on multiplie par 5&gt;0, l&apos;ordre est
              conservé), donc <Math tex="5x-3<5x'-3" />, c&apos;est-à-dire <Math tex="f(x)<f(x')" />.
            </p>
            <p className="font-semibold text-green-700">f est strictement croissante sur ℝ.</p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Taux d'accroissement">
          <DefBox label="Définition">
            Soient <Math tex="x,x'\in I\subset D_f" />, <Math tex="x\neq x'" />. Le{" "}
            <strong>taux d&apos;accroissement</strong> de <Math tex="f" /> entre <Math tex="x" /> et{" "}
            <Math tex="x'" /> est le nombre :
          </DefBox>
          <FormulaBlock tex="T_f=\dfrac{f(x)-f(x')}{x-x'}" />
          <Callout variant="success" title="Propriété — le lien avec les variations">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="T_f>0" /> sur <Math tex="I" /> : <Math tex="f" /> est strictement{" "}
                <strong>croissante</strong> sur <Math tex="I" />.
              </li>
              <li>
                Si <Math tex="T_f<0" /> sur <Math tex="I" /> : <Math tex="f" /> est strictement{" "}
                <strong>décroissante</strong> sur <Math tex="I" />.
              </li>
              <li>
                Si <Math tex="T_f=0" /> sur <Math tex="I" /> : <Math tex="f" /> est <strong>constante</strong> sur{" "}
                <Math tex="I" />.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu — f(x) = 5x − 3, encore">
            <p>
              <Math tex="T_f=\dfrac{(5x-3)-(5x'-3)}{x-x'}=\dfrac{5(x-x')}{x-x'}=5" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="T_f=5>0" /> : on retrouve que f est strictement croissante sur ℝ.
            </p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Extremums d'une fonction">
          <Callout variant="success" title="Définitions">
            Soit <Math tex="a\in I\subset D_f" />.
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <Math tex="f(a)" /> est une <strong>valeur maximale</strong> de <Math tex="f" /> sur <Math tex="I" />{" "}
                ssi <Math tex="f(x)\le f(a)" /> pour tout <Math tex="x\in I" />.
              </li>
              <li>
                <Math tex="f(a)" /> est une <strong>valeur minimale</strong> de <Math tex="f" /> sur <Math tex="I" />{" "}
                ssi <Math tex="f(a)\le f(x)" /> pour tout <Math tex="x\in I" />.
              </li>
            </ul>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Un <strong>extremum</strong> est un maximum ou un minimum. Si <Math tex="I=D_f" />, on parle
            d&apos;extremum <strong>absolu</strong> ; sinon, d&apos;extremum <strong>relatif</strong> (local).
          </p>
          <Example title="Exemple résolu — un minimum absolu">
            <p>
              Soit <Math tex="f(x)=5x^2+3" />. Pour tout <Math tex="x\in\mathbb R" /> :{" "}
              <Math tex="f(x)-f(0)=5x^2+3-3=5x^2\ge0" />, donc <Math tex="f(x)\ge f(0)" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="f(0)=3" /> est donc une valeur minimale (absolue) de f sur ℝ.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== VIII. FONCTIONS USUELLES ===================== */}
      <LessonSection
        id="cours-usuelles"
        kicker="03 · Les fonctions de référence"
        title="Étude des fonctions ax², a/x, ax²+bx+c et (ax+b)/(cx+d)"
        tone="light"
        description="Quatre familles de fonctions à connaître par cœur, avec leur courbe, leurs variations, et la méthode de translation."
      >
        <CourseBlock numeral="VIII.A" title="La fonction f(x) = ax² (a ≠ 0)">
          <Figure
            text={
              <>
                <p>
                  <Math tex="D_f=\mathbb R" />. Comme <Math tex="f(-x)=a(-x)^2=ax^2=f(x)" />, <strong>f est
                  paire</strong>. Le domaine d&apos;étude est <Math tex="D_E=[0,+\infty[" />.
                </p>
                <p>
                  Pour <Math tex="x,x'\ge0" />, <Math tex="x\neq x'" /> :{" "}
                  <Math tex="T_f=\dfrac{ax^2-ax'^2}{x-x'}=a(x+x')" />. Comme <Math tex="x+x'>0" />, le signe de{" "}
                  <Math tex="T_f" /> est celui de <Math tex="a" />.
                </p>
              </>
            }
            svg={
              <Grid viewBox="0 0 220 200">
                <line x1="0" y1="170" x2="220" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <line x1="110" y1="0" x2="110" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <path d="M20.0,20.0 L24.5,34.6 L29.0,48.5 L33.5,61.6 L38.0,74.0 L42.5,85.6 L47.0,96.5 L51.5,106.6 L56.0,116.0 L60.5,124.6 L65.0,132.5 L69.5,139.6 L74.0,146.0 L78.5,151.6 L83.0,156.5 L87.5,160.6 L92.0,164.0 L96.5,166.6 L101.0,168.5 L105.5,169.6 L110.0,170.0 L114.5,169.6 L119.0,168.5 L123.5,166.6 L128.0,164.0 L132.5,160.6 L137.0,156.5 L141.5,151.6 L146.0,146.0 L150.5,139.6 L155.0,132.5 L159.5,124.6 L164.0,116.0 L168.5,106.6 L173.0,96.5 L177.5,85.6 L182.0,74.0 L186.5,61.6 L191.0,48.5 L195.5,34.6 L200.0,20.0"
                  fill="none" stroke="#0ea5e9" strokeWidth="2.2" />
                <circle cx="110" cy="170" r="3" fill="#0ea5e9" />
                <text x="150" y="30" fontSize="12" fill="#0ea5e9">a &gt; 0</text>
              </Grid>
            }
          />
          <Callout variant="success" title="Propriété">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="a>0" /> : f strictement décroissante sur <Math tex="]-\infty,0]" />, strictement
                croissante sur <Math tex="[0,+\infty[" />, minimum <Math tex="f(0)=0" />. La courbe est une{" "}
                <strong>parabole tournée vers le haut</strong>.
              </li>
              <li>
                Si <Math tex="a<0" /> : f strictement croissante sur <Math tex="]-\infty,0]" />, strictement
                décroissante sur <Math tex="[0,+\infty[" />, maximum <Math tex="f(0)=0" />. Parabole tournée vers le
                bas.
              </li>
            </ul>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Dans les deux cas, la courbe est une <strong>parabole</strong> de sommet l&apos;origine{" "}
            <Math tex="O" />, d&apos;axe de symétrie <Math tex="(Oy)" />.
          </p>
        </CourseBlock>

        <CourseBlock numeral="VIII.B" title="La fonction f(x) = a/x (a ≠ 0)">
          <Figure
            text={
              <>
                <p>
                  <Math tex="D_f=\mathbb R^*" />. <Math tex="f(-x)=\dfrac{a}{-x}=-f(x)" /> : <strong>f est
                  impaire</strong>. Domaine d&apos;étude <Math tex="D_E=\;]0,+\infty[" />.
                </p>
                <p>
                  Pour <Math tex="x,x'>0" />, <Math tex="x\neq x'" /> :{" "}
                  <Math tex="T_f=\dfrac{\frac ax-\frac a{x'}}{x-x'}=\dfrac{-a}{xx'}" />.
                </p>
              </>
            }
            svg={
              <Grid viewBox="0 0 240 220">
                <line x1="0" y1="110" x2="240" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <line x1="120" y1="0" x2="120" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                <path d="M130.0,30.0 L132.2,44.4 L134.4,54.4 L136.6,61.8 L138.8,67.4 L141.0,71.9 L143.2,75.5 L145.4,78.5 L147.6,81.0 L149.8,83.2 L152.0,85.0 L154.2,86.6 L156.4,88.0 L158.6,89.3 L160.8,90.4 L163.0,91.4 L165.2,92.3 L167.4,93.1 L169.6,93.9 L171.8,94.6 L174.0,95.2 L176.2,95.8 L178.4,96.3 L180.6,96.8 L182.8,97.3 L185.0,97.7 L187.2,98.1 L189.4,98.5 L191.6,98.8 L193.8,99.2 L196.0,99.5 L198.2,99.8 L200.4,100.0 L202.6,100.3 L204.8,100.6 L207.0,100.8 L209.2,101.0 L211.4,101.2 L213.6,101.5 L215.8,101.6 L218.0,101.8 L220.2,102.0 L222.4,102.2 L224.6,102.4 L226.8,102.5 L229.0,102.7 L231.2,102.8 L233.4,102.9 L235.6,103.1 L237.8,103.2 L240.0,103.3"
                  fill="none" stroke="#0ea5e9" strokeWidth="2.2" />
                <path d="M0.0,116.7 L2.2,116.8 L4.4,116.9 L6.6,117.1 L8.8,117.2 L11.0,117.3 L13.2,117.5 L15.4,117.6 L17.6,117.8 L19.8,118.0 L22.0,118.2 L24.2,118.4 L26.4,118.5 L28.6,118.8 L30.8,119.0 L33.0,119.2 L35.2,119.4 L37.4,119.7 L39.6,120.0 L41.8,120.2 L44.0,120.5 L46.2,120.8 L48.4,121.2 L50.6,121.5 L52.8,121.9 L55.0,122.3 L57.2,122.7 L59.4,123.2 L61.6,123.7 L63.8,124.2 L66.0,124.8 L68.2,125.4 L70.4,126.1 L72.6,126.9 L74.8,127.7 L77.0,128.6 L79.2,129.6 L81.4,130.7 L83.6,132.0 L85.8,133.4 L88.0,135.0 L90.2,136.8 L92.4,139.0 L94.6,141.5 L96.8,144.5 L99.0,148.1 L101.2,152.6 L103.4,158.2 L105.6,165.6 L107.8,175.6 L110.0,190.0"
                  fill="none" stroke="#0ea5e9" strokeWidth="2.2" />
                <text x="150" y="30" fontSize="12" fill="#0ea5e9">a &gt; 0 (a=2)</text>
              </Grid>
            }
          />
          <Callout variant="success" title="Propriété">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="a>0" /> : <Math tex="T_f<0" />, donc f est strictement <strong>décroissante</strong>{" "}
                sur <Math tex="]0,+\infty[" /> — et, par imparité, strictement décroissante aussi sur{" "}
                <Math tex="]-\infty,0[" />.
              </li>
              <li>
                Si <Math tex="a<0" /> : <Math tex="T_f>0" />, donc f est strictement <strong>croissante</strong> sur{" "}
                les deux intervalles <Math tex="]-\infty,0[" /> et <Math tex="]0,+\infty[" />.
              </li>
            </ul>
          </Callout>
          <p className="text-sm text-foreground-muted">
            La courbe est une <strong>hyperbole</strong>, de centre de symétrie <Math tex="O" />, d&apos;asymptote
            horizontale <Math tex="(Ox)" /> et d&apos;asymptote verticale <Math tex="(Oy)" />.
          </p>
        </CourseBlock>

        <CourseBlock numeral="VIII.C" title="La fonction f(x) = ax² + bx + c (a ≠ 0)">
          <Callout variant="success" title="Propriété (admise) — forme canonique">
            <Math tex="f(x)=ax^2+bx+c" /> s&apos;écrit <Math tex="f(x)=a(x+\alpha)^2+\beta" /> avec{" "}
            <Math tex="\alpha,\beta\in\mathbb R" />. La courbe <Math tex="(C_f)" /> est une <strong>parabole</strong>,
            de sommet <Math tex="S(-\alpha,\beta)" />, d&apos;axe de symétrie <Math tex="x=-\alpha" />, obtenue à
            partir de la courbe de <Math tex="g(x)=ax^2" /> par la translation de vecteur{" "}
            <Math tex="\vec u=-\alpha\vec\imath+\beta\vec\jmath" />.
          </Callout>
          <Example title="Exemple résolu — f(x) = x² − 4x + 3">
            <Figure
              text={
                <>
                  <p>
                    <Math tex="a=1>0" />, <Math tex="b=-4" />, <Math tex="c=3" />. Forme canonique :
                  </p>
                  <p className="text-center">
                    <Math tex="f(x)=a\left(x+\dfrac b{2a}\right)^2-\dfrac{\Delta}{4a}=\left(x-2\right)^2-1" />
                  </p>
                  <p>
                    Donc <Math tex="\alpha=-2" /> et <Math tex="\beta=-1" /> : sommet <Math tex="S(2,-1)" />, axe de
                    symétrie <Math tex="x=2" />.
                  </p>
                  <p>
                    <Math tex="a=1>0" /> : f est strictement décroissante sur <Math tex="]-\infty,2]" /> et
                    strictement croissante sur <Math tex="[2,+\infty[" />, minimum <Math tex="f(2)=-1" />.
                  </p>
                </>
              }
              svg={
                <Grid viewBox="0 0 260 240" className="max-w-[280px]">
                  <line x1="0" y1="210" x2="260" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="60" y1="0" x2="60" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M-7.6,34.2 L-5.2,46.7 L-2.7,58.7 L-0.3,70.3 L2.2,81.4 L4.6,92.0 L7.1,102.2 L9.5,111.9 L12.0,121.2 L14.4,130.0 L16.8,138.4 L19.3,146.2 L21.7,153.7 L24.2,160.6 L26.6,167.1 L29.1,173.2 L31.5,178.8 L33.9,183.9 L36.4,188.6 L38.8,192.8 L41.3,196.5 L43.7,199.8 L46.2,202.6 L48.6,205.0 L51.1,206.9 L53.5,208.4 L55.9,209.4 L58.4,209.9 L60.8,210.0 L63.3,209.6 L65.7,208.7 L68.2,207.4 L70.6,205.7 L73.1,203.4 L75.5,200.8 L77.9,197.6 L80.4,194.0 L82.8,190.0 L85.3,185.4 L87.7,180.5 L90.2,175.0 L92.6,169.1 L95.0,162.8 L97.5,155.9 L99.9,148.7 L102.4,140.9 L104.8,132.7 L107.3,124.1 L109.7,115.0 L112.2,105.4 L114.6,95.3"
                    fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.5" />
                  <path d="M47.0,73.5 L49.6,86.2 L52.2,98.5 L54.8,110.2 L57.4,121.3 L60.0,132.0 L62.6,142.1 L65.2,151.8 L67.8,160.9 L70.4,169.4 L73.0,177.5 L75.6,185.0 L78.2,192.1 L80.8,198.6 L83.4,204.5 L86.0,210.0 L88.6,214.9 L91.2,219.4 L93.8,223.3 L96.4,226.6 L99.0,229.5 L101.6,231.8 L104.2,233.7 L106.8,235.0 L109.4,235.7 L112.0,236.0 L114.6,235.7 L117.2,235.0 L119.8,233.7 L122.4,231.8 L125.0,229.5 L127.6,226.6 L130.2,223.3 L132.8,219.4 L135.4,214.9 L138.0,210.0 L140.6,204.5 L143.2,198.6 L145.8,192.1 L148.4,185.0 L151.0,177.5 L153.6,169.4 L156.2,160.9 L158.8,151.8 L161.4,142.1 L164.0,132.0 L166.6,121.3 L169.2,110.2 L171.8,98.5 L174.4,86.2 L177.0,73.5"
                    fill="none" stroke="#e11d48" strokeWidth="2.4" />
                  <circle cx="112" cy="236" r="3.5" fill="#e11d48" />
                  <text x="118" y="236" fontSize="11" fontWeight="700" fill="#e11d48">S(2,−1)</text>
                  <line x1="112" y1="0" x2="112" y2="236" stroke="#e11d48" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
                </Grid>
              }
            />
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VIII.D" title="La fonction homographique f(x) = (ax+b)/(cx+d)">
          <Callout variant="success" title="Propriété (admise)">
            Si <Math tex="c\neq0" /> et <Math tex="\Delta=ad-bc\neq0" />, <Math tex="f(x)=\dfrac{ax+b}{cx+d}" />{" "}
            s&apos;écrit <Math tex="f(x)=\beta+\dfrac{k}{x+\alpha}" /> (avec <Math tex="x\neq-\alpha" />). La courbe
            est une <strong>hyperbole</strong> de centre <Math tex="S(-\alpha,\beta)" />, d&apos;asymptote
            horizontale <Math tex="y=\beta" /> et d&apos;asymptote verticale <Math tex="x=-\alpha" />, obtenue à
            partir de <Math tex="g(x)=\dfrac kx" /> par la translation de vecteur <Math tex="\vec u=-\alpha\vec\imath+\beta\vec\jmath" />.
          </Callout>
          <Callout variant="warning" title="Signe de k et sens de variation">
            Comme pour <Math tex="a/x" /> : si <Math tex="k>0" />, f est strictement décroissante sur chacun des
            deux intervalles de <Math tex="D_f" /> ; si <Math tex="k<0" />, f est strictement croissante sur chacun
            des deux intervalles.
          </Callout>
          <Example title="Exemple résolu — f(x) = (x−1)/(x+2)">
            <Figure
              text={
                <>
                  <p>
                    <Math tex="D_f=\mathbb R\setminus\{-2\}" />. On écrit <Math tex="x-1=(x+2)-3" />, donc :
                  </p>
                  <p className="text-center">
                    <Math tex="f(x)=\dfrac{(x+2)-3}{x+2}=1-\dfrac{3}{x+2}" />
                  </p>
                  <p>
                    D&apos;où <Math tex="\alpha=2" />, <Math tex="\beta=1" />, <Math tex="k=-3" />. Centre{" "}
                    <Math tex="S(-2,1)" />, asymptotes <Math tex="x=-2" /> et <Math tex="y=1" />.
                  </p>
                  <p>
                    <Math tex="k=-3<0" /> : f est strictement <strong>croissante</strong> sur{" "}
                    <Math tex="]-\infty,-2[" /> et sur <Math tex="]-2,+\infty[" />.
                  </p>
                </>
              }
              reverse
              svg={
                <Grid viewBox="0 0 280 240" className="max-w-[280px]">
                  <line x1="0" y1="120" x2="280" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="140" y1="0" x2="140" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="96" y1="0" x2="96" y2="240" stroke="#e11d48" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <line x1="0" y1="98" x2="280" y2="98" stroke="#e11d48" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <path d="M152.1,240.0 L154.1,223.3 L156.0,210.7 L158.0,200.8 L159.9,192.8 L161.9,186.3 L163.8,180.9 L165.8,176.3 L167.8,172.3 L169.7,168.9 L171.7,165.8 L173.6,163.2 L175.6,160.8 L177.6,158.7 L179.5,156.7 L181.5,155.0 L183.4,153.4 L185.4,152.0 L187.3,150.7 L189.3,149.5 L191.3,148.3 L193.2,147.3 L195.2,146.3 L197.1,145.4 L199.1,144.6 L201.1,143.8 L203.0,143.0 L205.0,142.4 L206.9,141.7 L208.9,141.1 L210.8,140.5 L212.8,139.9 L214.8,139.4 L216.7,138.9 L218.7,138.5 L220.6,138.0 L222.6,137.6 L224.5,137.2 L226.5,136.8 L228.5,136.4 L230.4,136.1 L232.4,135.7 L234.3,135.4 L236.3,135.1 L238.3,134.8 L240.2,134.5 L242.2,134.2 L244.1,133.9 L246.1,133.7 L248.0,133.4 L250.0,133.2"
                    fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.5" />
                  <path d="M30.0,106.8 L32.0,106.6 L33.9,106.3 L35.9,106.1 L37.8,105.8 L39.8,105.5 L41.7,105.2 L43.7,104.9 L45.7,104.6 L47.6,104.3 L49.6,103.9 L51.5,103.6 L53.5,103.2 L55.5,102.8 L57.4,102.4 L59.4,102.0 L61.3,101.5 L63.3,101.1 L65.2,100.6 L67.2,100.1 L69.2,99.5 L71.1,98.9 L73.1,98.3 L75.0,97.6 L77.0,97.0 L79.0,96.2 L80.9,95.4 L82.9,94.6 L84.8,93.7 L86.8,92.7 L88.7,91.7 L90.7,90.5 L92.7,89.3 L94.6,88.0 L96.6,86.6 L98.5,85.0 L100.5,83.3 L102.4,81.3 L104.4,79.2 L106.4,76.8 L108.3,74.2 L110.3,71.1 L112.2,67.7 L114.2,63.7 L116.2,59.1 L118.1,53.7 L120.1,47.2 L122.0,39.2 L124.0,29.3 L125.9,16.7 L127.9,-0.0"
                    fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.5" />
                  <path d="M101.5,240.0 L104.5,240.0 L107.4,224.9 L110.4,198.8 L113.4,181.5 L116.3,169.4 L119.3,160.3 L122.3,153.2 L125.3,147.6 L128.2,143.1 L131.2,139.2 L134.2,136.0 L137.1,133.3 L140.1,130.9 L143.1,128.8 L146.1,127.0 L149.0,125.4 L152.0,123.9 L155.0,122.6 L157.9,121.4 L160.9,120.4 L163.9,119.4 L166.8,118.5 L169.8,117.7 L172.8,116.9 L175.8,116.2 L178.7,115.6 L181.7,114.9 L184.7,114.4 L187.6,113.8 L190.6,113.3 L193.6,112.9 L196.5,112.4 L199.5,112.0 L202.5,111.6 L205.4,111.3 L208.4,110.9 L211.4,110.6 L214.4,110.3 L217.3,110.0 L220.3,109.7 L223.3,109.4 L226.2,109.1 L229.2,108.9 L232.2,108.7 L235.2,108.4 L238.1,108.2 L241.1,108.0 L244.1,107.8 L247.0,107.6 L250.0,107.4"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <path d="M14.6,80.2 L16.1,79.8 L17.6,79.5 L19.2,79.1 L20.7,78.7 L22.2,78.3 L23.7,77.9 L25.2,77.5 L26.7,77.0 L28.3,76.6 L29.8,76.1 L31.3,75.6 L32.8,75.0 L34.3,74.5 L35.9,73.9 L37.4,73.2 L38.9,72.6 L40.4,71.9 L41.9,71.1 L43.4,70.4 L45.0,69.6 L46.5,68.7 L48.0,67.8 L49.5,66.8 L51.0,65.7 L52.5,64.6 L54.1,63.4 L55.6,62.1 L57.1,60.7 L58.6,59.2 L60.1,57.5 L61.7,55.7 L63.2,53.8 L64.7,51.6 L66.2,49.3 L67.7,46.6 L69.2,43.7 L70.8,40.5 L72.3,36.8 L73.8,32.6 L75.3,27.8 L76.8,22.2 L78.4,15.7 L79.9,8.0 L81.4,0.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <circle cx="96" cy="98" r="3.5" fill="#0ea5e9" />
                  <text x="52" y="94" fontSize="11" fontWeight="700" fill="#0ea5e9">S(−2,1)</text>
                </Grid>
              }
            />
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Généralités sur les fonctions"
        tone="muted"
        description="28 exercices corrigés en détail (Prof. Atmani Najib). Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={28} celebrationTitle="Bravo, les 28 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les généralités sur les fonctions.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1" index={1} title="Calculer des images, chercher des antécédents"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=3x^2-1" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Calculer l&apos;image de <Math tex="1" />, de <Math tex="\sqrt2" /> et de <Math tex="-1" /> par{" "}
                    <Math tex="f" />.
                  </li>
                  <li>
                    Déterminer les antécédents éventuels de <Math tex="2" /> par <Math tex="f" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f(1)=3-1=2" />. <Math tex="f(\sqrt2)=3\times2-1=5" />.{" "}
                  <Math tex="f(-1)=3\times1-1=2" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f(x)=2 \iff 3x^2-1=2 \iff x^2=1 \iff x=\pm1" />.
                </p>
                <p className="font-semibold text-green-700">1 et −1 sont les deux antécédents de 2 (ce qui est cohérent avec le calcul de f(1) et f(−1) ci-dessus).</p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2" index={2} title="Valeurs sans image"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  a) <Math tex="f(x)=\dfrac1{x-3}" /> : parmi 0 ; 2 ; −3 ; 3, laquelle/lesquelles n&apos;a/ont pas
                  d&apos;image par f ?
                </p>
                <p>
                  b) <Math tex="g(x)=\sqrt{x-3}" /> : parmi 0 ; 2 ; −3 ; 4, laquelle/lesquelles n&apos;a/ont pas
                  d&apos;image par g ?
                </p>
                <p>
                  c) <Math tex="h(x)=\dfrac1{\sqrt{7-x}}" /> : parmi 5 ; −6 ; 9 ; 7, laquelle/lesquelles n&apos;a/ont
                  pas d&apos;image par h ?
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>a)</strong> Il faut <Math tex="x\neq3" />. Seul <strong className="text-green-700">3</strong> n&apos;a pas d&apos;image.
                </p>
                <p>
                  <strong>b)</strong> Il faut <Math tex="x\ge3" />. <strong className="text-green-700">0, 2 et −3</strong> n&apos;ont pas d&apos;image (seul 4 en a une).
                </p>
                <p>
                  <strong>c)</strong> Il faut <Math tex="7-x>0" />, c&apos;est-à-dire <Math tex="x<7" />.{" "}
                  <strong className="text-green-700">9 et 7</strong> n&apos;ont pas d&apos;image (5 et −6 en ont une).
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3" index={3} title="21 ensembles de définition à déterminer"
            items={
              <div className="grid gap-x-6 gap-y-1 text-sm text-foreground sm:grid-cols-2">
                <p>1) <Math tex="f(x)=3x^2-x+1" /></p>
                <p>2) <Math tex="f(x)=\dfrac{x^3}{2x-4}" /></p>
                <p>3) <Math tex="f(x)=\dfrac{2x^4}{x^2-4}" /></p>
                <p>4) <Math tex="f(x)=\dfrac{7x-1}{x^3-2x}" /></p>
                <p>5) <Math tex="f(x)=\sqrt{-3x+6}" /></p>
                <p>6) <Math tex="f(x)=\dfrac{x-5}{2x^2-5x-3}" /></p>
                <p>7) <Math tex="f(x)=\sqrt{x^2-3x+2}" /></p>
                <p>8) <Math tex="f(x)=\sqrt{\dfrac{-3x+9}{x+1}}" /></p>
                <p>9) <Math tex="f(x)=\dfrac{x+1}{\sqrt{-2x^2+x+3}}" /></p>
                <p>10) <Math tex="f(x)=\dfrac{|x-5|}{x^2+1}" /></p>
                <p>11) <Math tex="f(x)=\dfrac{\sqrt{|x|}}{x}" /></p>
                <p>12) <Math tex="f(x)=\dfrac{\sqrt{x+2}}{x-1}" /></p>
                <p>13) <Math tex="f(x)=\sqrt{-2x^2+x+3}" /></p>
                <p>14) <Math tex="f(x)=\dfrac{|x-5|}{x^2+1}" /></p>
                <p>15) <Math tex="f(x)=\dfrac{\sqrt{|x|}}{x}" /></p>
                <p>16) <Math tex="f(x)=\dfrac{\sqrt{x-2}}{2x+4}" /></p>
                <p>17) <Math tex="f(x)=3x^2-\dfrac1x+\sqrt{-x}" /></p>
                <p>18) <Math tex="f(x)=\dfrac{x}{|2x-4|-|x-1|}" /></p>
                <p>19) <Math tex="f(x)=\dfrac{2\sin x}{2\cos x-1}" /></p>
                <p>20) <Math tex="f(x)=\sqrt{\dfrac{-2x^2+2x+13}{x^2-x-6}}" /></p>
                <p>21) <Math tex="f(x)=\sqrt{x^2+(2\sqrt3-\sqrt2)x-2\sqrt6}" /></p>
              </div>
            }
            correction={
              <div className="space-y-1.5 text-sm text-foreground">
                <p>1) polynomiale : <Math tex="D_f=\mathbb R" />.</p>
                <p>2) <Math tex="2x-4\neq0" /> : <Math tex="D_f=\mathbb R\setminus\{2\}" />.</p>
                <p>3) <Math tex="x^2\neq4" /> : <Math tex="D_f=\mathbb R\setminus\{-2,2\}" />.</p>
                <p>4) <Math tex="x(x^2-2)\neq0" /> : <Math tex="D_f=\mathbb R\setminus\{-\sqrt2,0,\sqrt2\}" />.</p>
                <p>5) <Math tex="-3x+6\ge0" /> : <Math tex="D_f=\;]-\infty,2]" />.</p>
                <p>6) <Math tex="2x^2-5x-3=0" /> a pour racines 3 et −1/2 : <Math tex="D_f=\mathbb R\setminus\{-\tfrac12,3\}" />.</p>
                <p>7) <Math tex="x^2-3x+2\ge0" /> (racines 1, 2) : <Math tex="D_f=\;]-\infty,1]\cup[2,+\infty[" />.</p>
                <p>8) besoin de <Math tex="\dfrac{-3x+9}{x+1}\ge0" /> et <Math tex="x\neq-1" /> : étude de signe (racines −1 exclue, 3) donne <Math tex="D_f=\;]-1,3]" />.</p>
                <p>9) besoin de <Math tex="-2x^2+x+3>0" /> strictement (racines −1, 3/2) : <Math tex="D_f=\;]-1,\tfrac32[" />.</p>
                <p>10) dénominateur toujours <Math tex=">0" /> : <Math tex="D_f=\mathbb R" />.</p>
                <p>11) <Math tex="x\neq0" /> (le numérateur <Math tex="\ge0" /> toujours) : <Math tex="D_f=\mathbb R^*" />.</p>
                <p>12) <Math tex="x\ge-2" /> et <Math tex="x\neq1" /> : <Math tex="D_f=[-2,1[\,\cup\,]1,+\infty[" />.</p>
                <p>13) <Math tex="-2x^2+x+3\ge0" /> : <Math tex="D_f=[-1,\tfrac32]" />.</p>
                <p>14) identique à 10) : <Math tex="D_f=\mathbb R" />.</p>
                <p>15) identique à 11) : <Math tex="D_f=\mathbb R^*" />.</p>
                <p>16) <Math tex="x\ge2" /> (et alors <Math tex="2x+4>0" /> automatiquement) : <Math tex="D_f=[2,+\infty[" />.</p>
                <p>17) <Math tex="x\neq0" /> et <Math tex="-x\ge0" /> : <Math tex="D_f=\;]-\infty,0[" />.</p>
                <p>18) <Math tex="|2x-4|=|x-1|" /> ssi <Math tex="x=3" /> ou <Math tex="x=\tfrac53" /> : <Math tex="D_f=\mathbb R\setminus\{\tfrac53,3\}" />.</p>
                <p>19) <Math tex="\cos x\neq\tfrac12" /> : <Math tex="D_f=\mathbb R\setminus\{\pm\tfrac\pi3+2k\pi,\ k\in\mathbb Z\}" />.</p>
                <p>
                  20) numérateur <Math tex="-2x^2+2x+13" /> s&apos;annule en <Math tex="r_{1,2}=\dfrac{1\mp3\sqrt3}{2}" /> (<Math tex="r_1\approx-2{,}10" />, <Math tex="r_2\approx3{,}10" />) ; dénominateur <Math tex="(x-3)(x+2)" />. Étude de signe complète (avec <Math tex="r_1<-2<3<r_2" />) donne <Math tex="D_f=\left[\dfrac{1-3\sqrt3}2,-2\right[\,\cup\,\left]3,\dfrac{1+3\sqrt3}2\right]" />.
                </p>
                <p>
                  21) on remarque <Math tex="x^2+(2\sqrt3-\sqrt2)x-2\sqrt6=(x-\sqrt2)(x+2\sqrt3)" /> (racines <Math tex="\sqrt2" /> et <Math tex="-2\sqrt3" />) : <Math tex="D_f=\;]-\infty,-2\sqrt3]\cup[\sqrt2,+\infty[" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4" index={4} title="f = g ? (cas où c'est vrai)"
            items={
              <p className="text-sm text-foreground">
                Soient <Math tex="f(x)=\dfrac{3x^2+1}{\sqrt{x^2}}" /> et <Math tex="g(x)=\dfrac{1+3x^2}{|x|}" />.
                Est-ce que <Math tex="f=g" /> ? Justifier.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="\sqrt{x^2}=|x|" />, donc <Math tex="f(x)=\dfrac{3x^2+1}{|x|}" />, qui est exactement{" "}
                  <Math tex="g(x)" /> (numérateurs identiques à l&apos;ordre près). De plus{" "}
                  <Math tex="D_f=D_g=\mathbb R^*" /> (il faut <Math tex="x\neq0" /> dans les deux cas).
                </p>
                <p className="font-semibold text-green-700">Oui, f = g (mêmes domaines, mêmes valeurs partout).</p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5" index={5} title="h = t ? (cas où c'est faux)"
            items={
              <p className="text-sm text-foreground">
                Soient <Math tex="h(x)=\dfrac{x^2-x}{x}" /> et <Math tex="t(x)=x-1" />. Est-ce que{" "}
                <Math tex="h=t" /> ? Justifier.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="D_h=\mathbb R^*" /> (il faut <Math tex="x\neq0" />), alors que <Math tex="D_t=\mathbb R" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="D_h\neq D_t" />, on a h ≠ t, même si <Math tex="h(x)=t(x)" /> pour tout{" "}
                  <Math tex="x\neq0" /> (0 est dans <Math tex="D_t" /> mais pas dans <Math tex="D_h" />).
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6" index={6} title="Tracer la courbe de f(x) = 1/(x²+1) sur [−2,3]"
            items={
              <p className="text-sm text-foreground">
                Tracer la représentation graphique de <Math tex="f(x)=\dfrac1{x^2+1}" /> sur <Math tex="I=[-2,3]" />.
              </p>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <Math tex="f" /> est toujours définie (<Math tex="x^2+1>0" />), paire, maximale en{" "}
                  <Math tex="x=0" /> (<Math tex="f(0)=1" />), et décroît vers 0 quand <Math tex="|x|" /> augmente.
                  Table de valeurs : <Math tex="f(-2)=\tfrac15" />, <Math tex="f(-1)=\tfrac12" />,{" "}
                  <Math tex="f(0)=1" />, <Math tex="f(1)=\tfrac12" />, <Math tex="f(2)=\tfrac15" />,{" "}
                  <Math tex="f(3)=\tfrac1{10}" />.
                </p>
                <Grid viewBox="0 0 260 160" className="max-w-[300px]">
                  <line x1="0" y1="140" x2="260" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="40" y1="0" x2="40" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M-32.0,118.0 L-28.4,116.1 L-24.8,114.1 L-21.2,111.7 L-17.6,109.1 L-14.0,106.2 L-10.4,102.8 L-6.8,99.1 L-3.2,94.9 L0.4,90.2 L4.0,85.0 L7.6,79.2 L11.2,72.9 L14.8,66.2 L18.4,59.1 L22.0,52.0 L25.6,45.2 L29.2,39.1 L32.8,34.2 L36.4,31.1 L40.0,30.0 L43.6,31.1 L47.2,34.2 L50.8,39.1 L54.4,45.2 L58.0,52.0 L61.6,59.1 L65.2,66.2 L68.8,72.9 L72.4,79.2 L76.0,85.0 L79.6,90.2 L83.2,94.9 L86.8,99.1 L90.4,102.8 L94.0,106.2 L97.6,109.1 L101.2,111.7 L104.8,114.1 L108.4,116.1 L112.0,118.0 L115.6,119.7 L119.2,121.2 L122.8,122.5 L126.4,123.7 L130.0,124.8 L133.6,125.8 L137.2,126.7 L140.8,127.6 L144.4,128.3 L148.0,129.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.2" transform="translate(40,0)" />
                </Grid>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7" index={7} title="Le graphe d'une fonction affine"
            items={
              <p className="text-sm text-foreground">
                Que représente la courbe représentative d&apos;une fonction affine <Math tex="f(x)=ax+b" /> (avec{" "}
                <Math tex="a,b\in\mathbb R" />) ?
              </p>
            }
            correction={
              <p className="text-sm text-foreground">
                <strong className="text-green-700">C&apos;est une droite</strong> (non verticale), de coefficient
                directeur (pente) <Math tex="a" /> et d&apos;ordonnée à l&apos;origine <Math tex="b" /> — elle coupe
                l&apos;axe des ordonnées au point <Math tex="(0,b)" />. Si <Math tex="a=0" />, c&apos;est une droite
                horizontale (fonction constante).
              </p>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8" index={8} title="Tracer la courbe de f(x) = |2x + 3|"
            items={
              <p className="text-sm text-foreground">
                Tracer la représentation graphique de <Math tex="f(x)=|2x+3|" />.
              </p>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <Math tex="f(x)=2x+3" /> si <Math tex="x\ge-\tfrac32" />, et <Math tex="f(x)=-2x-3" /> si{" "}
                  <Math tex="x<-\tfrac32" /> : c&apos;est un « V », de sommet <Math tex="\left(-\tfrac32,0\right)" />,
                  de pentes <Math tex="-2" /> puis <Math tex="+2" />.
                </p>
                <Grid viewBox="0 0 240 200" className="max-w-[280px]">
                  <line x1="0" y1="180" x2="240" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="120" y1="0" x2="120" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M40.0,80.0 L46.0,92.0 L52.0,104.0 L58.0,116.0 L64.0,128.0 L70.0,140.0 L76.0,152.0 L82.0,164.0 L88.0,176.0 L94.0,172.0 L100.0,160.0 L106.0,148.0 L112.0,136.0 L118.0,124.0 L124.0,112.0 L130.0,100.0 L136.0,88.0 L142.0,76.0 L148.0,64.0 L154.0,52.0 L160.0,40.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <circle cx="90" cy="180" r="3" fill="#e11d48" />
                </Grid>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9" index={9} title="Tracer la courbe de f(x) = |x−2| + |x+2|"
            items={
              <p className="text-sm text-foreground">
                Tracer la représentation graphique de <Math tex="f(x)=|x-2|+|x+2|" />.
              </p>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  Pour <Math tex="x\le-2" /> : <Math tex="f(x)=(2-x)+(-x-2)=-2x" />. Pour{" "}
                  <Math tex="-2\le x\le2" /> : <Math tex="f(x)=(2-x)+(x+2)=4" /> (constante !). Pour{" "}
                  <Math tex="x\ge2" /> : <Math tex="f(x)=(x-2)+(x+2)=2x" />.
                </p>
                <p>C&apos;est un « plateau » : deux demi-droites de pentes ∓2, reliées par un palier horizontal à hauteur 4.</p>
                <Grid viewBox="0 0 240 200" className="max-w-[280px]">
                  <line x1="0" y1="180" x2="240" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="120" y1="0" x2="120" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M40.0,52.0 L50.0,68.0 L60.0,84.0 L70.0,100.0 L80.0,116.0 L90.0,116.0 L100.0,116.0 L110.0,116.0 L120.0,116.0 L130.0,116.0 L140.0,116.0 L150.0,116.0 L160.0,116.0 L170.0,100.0 L180.0,84.0 L190.0,68.0 L200.0,52.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                </Grid>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10" index={10} title="Lecture graphique sur [−6, 7]"
            items={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  La courbe ci-dessous représente une fonction <Math tex="f" /> définie sur <Math tex="[-6,7]" />{" "}
                  (ligne brisée passant par les points <Math tex="(-6,-4)" />, <Math tex="(-3,2)" />,{" "}
                  <Math tex="(0,-1)" />, <Math tex="(2,2)" />, <Math tex="(4,2)" />, <Math tex="(7,-4)" />).
                </p>
                <Grid viewBox="0 0 320 200" className="max-w-[340px]">
                  <line x1="0" y1="100" x2="320" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M40.0,180.0 L100.0,60.0 L160.0,120.0 L200.0,60.0 L240.0,60.0 L300.0,180.0" fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  {[[-6,-4],[-3,2],[0,-1],[2,2],[4,2],[7,-4]].map(([x,y],i)=>(
                    <circle key={i} cx={160+x*20} cy={100-y*20} r="3" fill="#e11d48" />
                  ))}
                </Grid>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Quelles sont les images des réels −5, −3, 0 et 6 ?</li>
                  <li>Quels sont les antécédents de −1 et de 0 ?</li>
                  <li>Résoudre graphiquement <Math tex="f(x)=0" />.</li>
                  <li>
                    Quel est, en fonction de <Math tex="m" />, le nombre de solutions de <Math tex="f(x)=m" /> ?
                  </li>
                  <li>Résoudre graphiquement <Math tex="f(x)<0" />.</li>
                  <li>Résoudre graphiquement <Math tex="f(x)\ge2" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Sur [−6,−3], la pente est <Math tex="\frac{2-(-4)}{-3-(-6)}=2" />, donc{" "}
                  <Math tex="f(-5)=-4+2(1)=-2" />. <Math tex="f(-3)=2" /> (sommet). <Math tex="f(0)=-1" /> (sommet).
                  Sur [4,7], la pente est <Math tex="\frac{-4-2}{7-4}=-2" />, donc{" "}
                  <Math tex="f(6)=2-2(2)=-2" />.
                </p>
                <p className="font-semibold text-green-700">f(−5) = −2, f(−3) = 2, f(0) = −1, f(6) = −2.</p>
                <p>
                  <strong>2)</strong> En résolvant sur chaque segment : <Math tex="f(x)=-1" /> pour{" "}
                  <Math tex="x=-4{,}5" /> (segment [−6,−3]), <Math tex="x=0" /> (sommet), et <Math tex="x=5{,}5" />{" "}
                  (segment [4,7]). <strong className="text-green-700">3 antécédents de −1 : −4,5 ; 0 ; 5,5.</strong>
                </p>
                <p>
                  <Math tex="f(x)=0" /> pour <Math tex="x=-4" />, <Math tex="x=-1" />, <Math tex="x=\tfrac23" />,{" "}
                  <Math tex="x=5" />. <strong className="text-green-700">4 antécédents de 0.</strong>
                </p>
                <p>
                  <strong>3)</strong> D&apos;après ce qui précède : <strong className="text-green-700">S = {"{"}−4, −1, 2/3, 5{"}"}</strong>.
                </p>
                <p>
                  <strong>4)</strong> Le minimum de f vaut −4 (atteint en x=−6 et x=7), le maximum vaut 2 (atteint en
                  x=−3, et sur tout le palier [2,4]).
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Si m &lt; −4 ou m &gt; 2 : 0 solution.</li>
                  <li>Si m = −4 : 2 solutions (x=−6 et x=7).</li>
                  <li>Si −4 &lt; m &lt; −1 : 2 solutions.</li>
                  <li>Si m = −1 : 3 solutions.</li>
                  <li>Si −1 &lt; m &lt; 2 : 4 solutions.</li>
                  <li>Si m = 2 : une infinité de solutions (x=−3, plus tout le palier [2,4]).</li>
                </ul>
                <p>
                  <strong>5)</strong> <strong className="text-green-700">f(x) &lt; 0 sur [−6,−4[ ∪ ]−1, 2/3[ ∪ ]5,7].</strong>
                </p>
                <p>
                  <strong>6)</strong> f(x) ≥ 2 seulement là où f atteint son maximum 2 : <strong className="text-green-700">S = {"{"}−3{"}"} ∪ [2,4].</strong>
                </p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11" index={11} title="Étudier la parité (4 fonctions)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>1) <Math tex="f(x)=3x^2-5" /> &nbsp; 2) <Math tex="g(x)=\dfrac3x" /> &nbsp; 3) <Math tex="h(x)=2x^3+x^2" /> &nbsp; 4) <Math tex="t(x)=\dfrac{x}{x-2}" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>1) <Math tex="f(-x)=3x^2-5=f(x)" /> : <strong className="text-green-700">paire.</strong></p>
                <p>2) <Math tex="g(-x)=-\tfrac3x=-g(x)" /> : <strong className="text-green-700">impaire.</strong></p>
                <p>3) <Math tex="h(-x)=-2x^3+x^2" />, ni égal à <Math tex="h(x)" /> ni à <Math tex="-h(x)" /> (test x=1 : h(1)=3, h(−1)=−1) : <strong className="text-green-700">ni paire, ni impaire.</strong></p>
                <p>4) domaine <Math tex="\mathbb R\setminus\{2\}" />, non symétrique par rapport à 0 (2 est exclu mais pas −2) : <strong className="text-green-700">ni paire, ni impaire.</strong></p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12" index={12} title="Étudier la parité (7 fonctions)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>1) <Math tex="f(x)=\dfrac{x^2-1}{x}" /> &nbsp; 2) <Math tex="f(x)=x^2+\dfrac1x" /> &nbsp; 3) <Math tex="f(x)=\dfrac{x}{x^2+1}" /></p>
                <p>4) <Math tex="f(x)=\dfrac{|x|}{x^2-1}" /> &nbsp; 5) <Math tex="f(x)=\sqrt{1-x^2}" /> &nbsp; 6) <Math tex="f(x)=\dfrac{2x^3}{x^2+5}" /></p>
                <p>7) <Math tex="f(x)=|x|-\sqrt{2x^2+4}" /> &nbsp; 8) <Math tex="f(x)=\dfrac{\sqrt x}2" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>1) <Math tex="D=\mathbb R^*" />, <Math tex="f(-x)=\dfrac{x^2-1}{-x}=-f(x)" /> : <strong className="text-green-700">impaire.</strong></p>
                <p>2) <Math tex="f(-x)=x^2-\tfrac1x" />, ni f(x) ni −f(x) : <strong className="text-green-700">ni paire ni impaire.</strong></p>
                <p>3) <Math tex="D=\mathbb R" />, <Math tex="f(-x)=\dfrac{-x}{x^2+1}=-f(x)" /> : <strong className="text-green-700">impaire.</strong></p>
                <p>4) <Math tex="D=\mathbb R\setminus\{-1,1\}" /> symétrique, <Math tex="f(-x)=\dfrac{|x|}{x^2-1}=f(x)" /> : <strong className="text-green-700">paire.</strong></p>
                <p>5) <Math tex="D=[-1,1]" /> symétrique, <Math tex="f(-x)=f(x)" /> : <strong className="text-green-700">paire.</strong></p>
                <p>6) <Math tex="D=\mathbb R" />, <Math tex="f(-x)=\dfrac{-2x^3}{x^2+5}=-f(x)" /> : <strong className="text-green-700">impaire.</strong></p>
                <p>7) <Math tex="D=\mathbb R" />, <Math tex="f(-x)=|x|-\sqrt{2x^2+4}=f(x)" /> : <strong className="text-green-700">paire.</strong></p>
                <p>8) <Math tex="D=[0,+\infty[" />, non symétrique par rapport à 0 : <strong className="text-green-700">ni paire ni impaire.</strong></p>
              </div>
            }
          />

          {/* Exercice 13 */}
          <ExerciseCard
            id="13" index={13} title="Étudier la monotonie de f et de g"
            items={
              <p className="text-sm text-foreground">
                1) <Math tex="f(x)=7x-5" /> &nbsp; 2) <Math tex="g(x)=\dfrac2x" />
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Pour <Math tex="x<x'" /> : <Math tex="7x<7x'" /> donc <Math tex="f(x)<f(x')" />. <strong className="text-green-700">f strictement croissante sur ℝ.</strong>
                </p>
                <p>
                  <strong>2)</strong> <Math tex="g(x)=\dfrac2x" /> avec <Math tex="a=2>0" /> : <strong className="text-green-700">g est strictement décroissante sur ]−∞,0[ et sur ]0,+∞[</strong> (elle n&apos;est pas monotone sur tout ℝ*, car il y a une discontinuité en 0).
                </p>
              </div>
            }
          />

          {/* Exercice 14 */}
          <ExerciseCard
            id="14" index={14} title="Dresser un tableau de variation à partir d'une courbe"
            items={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  La courbe ci-dessous représente une fonction sur <Math tex="[-5,5]" /> (ligne brisée par les
                  points <Math tex="(-5,5)" />, <Math tex="(-2,-2)" />, <Math tex="(1,2)" />, <Math tex="(5,0{,}5)" />
                  ). Dresser son tableau de variation.
                </p>
                <Grid viewBox="0 0 260 220" className="max-w-[300px]">
                  <line x1="0" y1="110" x2="260" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M30.0,30.0 L90.0,142.0 L150.0,78.0 L230.0,102.0" fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  {[[-5,5],[-2,-2],[1,2],[5,0.5]].map(([x,y],i)=>(
                    <circle key={i} cx={130+x*20} cy={110-y*16} r="3" fill="#e11d48" />
                  ))}
                </Grid>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>La fonction est strictement décroissante sur [−5,−2] (de 5 à −2), strictement croissante sur [−2,1] (de −2 à 2), puis strictement décroissante sur [1,5] (de 2 à 0,5).</p>
                <VarTable
                  cols={["-5", "-2", "1", "5"]}
                  domainRow={["5 ↘ −2", "↗", "2 ↘ 0,5"]}
                  signRow={[]}
                />
              </div>
            }
          />

          {/* Exercice 15 */}
          <ExerciseCard
            id="15" index={15} title="Domaine, taux d'accroissement et variations de f(x) = 3x² + 2"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_f" />.</li>
                  <li>Calculer le taux d&apos;accroissement de f entre <Math tex="x_1" /> et <Math tex="x_2" /> (<Math tex="x_1\neq x_2" />).</li>
                  <li>Étudier les variations de f sur <Math tex="[0,+\infty[" /> et sur <Math tex="]-\infty,0]" />.</li>
                  <li>Dresser le tableau de variation de f.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="D_f=\mathbb R" />.</p>
                <p><strong>2)</strong> <Math tex="T_f=\dfrac{3x_1^2+2-3x_2^2-2}{x_1-x_2}=\dfrac{3(x_1-x_2)(x_1+x_2)}{x_1-x_2}=3(x_1+x_2)" />.</p>
                <p><strong>3)</strong> Sur <Math tex="[0,+\infty[" /> : <Math tex="x_1+x_2>0" /> (car <Math tex="x_1\neq x_2" />, tous deux ≥0), donc <Math tex="T_f>0" /> : <strong className="text-green-700">f strictement croissante.</strong> Sur <Math tex="]-\infty,0]" /> : <Math tex="x_1+x_2<0" />, donc <Math tex="T_f<0" /> : <strong className="text-green-700">f strictement décroissante.</strong></p>
                <p><strong>4)</strong> Minimum <Math tex="f(0)=2" /> ; f décroît sur ]−∞,0], croît sur [0,+∞[.</p>
              </div>
            }
          />

          {/* Exercice 16 */}
          <ExerciseCard
            id="16" index={16} title="Domaine, taux d'accroissement et variations de g(x) = x/(x+1)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_g" />.</li>
                  <li>Calculer le taux d&apos;accroissement de g entre <Math tex="x_1" /> et <Math tex="x_2" /> (<Math tex="x_1\neq x_2" />).</li>
                  <li>Étudier les variations de g sur <Math tex="I=\;]-\infty,-1[" /> et <Math tex="J=\;]-1,+\infty[" />.</li>
                  <li>Dresser le tableau de variation de g.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="D_g=\mathbb R\setminus\{-1\}" />.</p>
                <p>
                  <strong>2)</strong> <Math tex="g(x_1)-g(x_2)=\dfrac{x_1(x_2+1)-x_2(x_1+1)}{(x_1+1)(x_2+1)}=\dfrac{x_1-x_2}{(x_1+1)(x_2+1)}" />, donc <Math tex="T_g=\dfrac{1}{(x_1+1)(x_2+1)}" />.
                </p>
                <p><strong>3)</strong> Sur I comme sur J, <Math tex="(x_1+1)" /> et <Math tex="(x_2+1)" /> sont de même signe, donc leur produit est positif : <Math tex="T_g>0" /> dans les deux cas. <strong className="text-green-700">g est strictement croissante sur I et sur J.</strong></p>
                <p><strong>4)</strong> Asymptote verticale x=−1, horizontale y=1 (car <Math tex="g(x)=1-\tfrac1{x+1}" />) ; g croît de −∞ à 1⁻ sur I puis de 1⁺ à +∞ sur J.</p>
              </div>
            }
          />

          {/* Exercice 17 */}
          <ExerciseCard
            id="17" index={17} title="Étude complète de f(x) = x + 1/x"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_f" /> et étudier la parité de f.</li>
                  <li>Calculer le taux d&apos;accroissement <Math tex="T(x_1,x_2)" /> entre <Math tex="x_1\neq x_2" /> de <Math tex="D_f" />.</li>
                  <li>Étudier les variations de f sur <Math tex="I=\;]0,1]" /> puis sur <Math tex="J=[1,+\infty[" />.</li>
                  <li>En déduire les variations de f sur <Math tex="D_f" />.</li>
                  <li>Dresser le tableau de variations de f sur <Math tex="D_f" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="D_f=\mathbb R^*" />. <Math tex="f(-x)=-x-\tfrac1x=-f(x)" /> : <strong className="text-green-700">f est impaire.</strong></p>
                <p>
                  <strong>2)</strong> <Math tex="T(x_1,x_2)=\dfrac{(x_1-x_2)+\left(\frac1{x_1}-\frac1{x_2}\right)}{x_1-x_2}=1+\dfrac{-1}{x_1x_2}=1-\dfrac1{x_1x_2}=\dfrac{x_1x_2-1}{x_1x_2}" />.
                </p>
                <p><strong>3)</strong> Sur I=]0,1] : <Math tex="0<x_1x_2<1" />, donc <Math tex="T<0" /> : <strong className="text-green-700">f strictement décroissante sur I.</strong> Sur J=[1,+∞[ : <Math tex="x_1x_2>1" />, donc <Math tex="T>0" /> : <strong className="text-green-700">f strictement croissante sur J.</strong></p>
                <p><strong>4)</strong> Par imparité (même sens de variation par symétrie centrale) : f est décroissante sur [−1,0[ et croissante sur ]−∞,−1].</p>
                <p><strong>5)</strong> f décroît de −∞ à f(−1)=−2 sur ]−∞,−1], croît de −∞ à −2 en fait décroît... précisément : croissante sur ]−∞,−1] (max local f(−1)=−2), décroissante sur [−1,0[ (de −2 à −∞), décroissante sur ]0,1] (de +∞ à f(1)=2), croissante sur [1,+∞[ (de 2 à +∞).</p>
              </div>
            }
          />

          {/* Exercice 18 */}
          <ExerciseCard
            id="18" index={18} title="Un minimum, directement"
            items={
              <p className="text-sm text-foreground">
                Soit <Math tex="f(x)=5x^2+3" />. Montrer que <Math tex="f(0)=3" /> est un minimum de f sur{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <p className="text-sm text-foreground">
                Pour tout <Math tex="x\in\mathbb R" /> : <Math tex="f(x)-f(0)=5x^2+3-3=5x^2\ge0" />, donc{" "}
                <Math tex="f(x)\ge f(0)" />. <strong className="text-green-700">f(0)=3 est bien un minimum (absolu) de f sur ℝ.</strong>
              </p>
            }
          />

          {/* Exercice 19 */}
          <ExerciseCard
            id="19" index={19} title="Un maximum, directement"
            items={
              <p className="text-sm text-foreground">
                Soit <Math tex="g(x)=-4x^2+1" />. Montrer que <Math tex="g(0)=1" /> est un maximum de g sur{" "}
                <Math tex="\mathbb R" />.
              </p>
            }
            correction={
              <p className="text-sm text-foreground">
                Pour tout <Math tex="x\in\mathbb R" /> : <Math tex="g(x)-g(0)=-4x^2\le0" />, donc{" "}
                <Math tex="g(x)\le g(0)" />. <strong className="text-green-700">g(0)=1 est bien un maximum (absolu) de g sur ℝ.</strong>
              </p>
            }
          />

          {/* Exercice 20 */}
          <ExerciseCard
            id="20" index={20} title="Extremum via une forme canonique imposée"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>Soit <Math tex="f(x)=-4x^2+4x+5" />.</p>
                <p>1°) a) Montrer que <Math tex="f(x)=6-(2x-1)^2" /> pour tout <Math tex="x\in\mathbb R" />.</p>
                <p>b) Montrer que <Math tex="f(x)\le6" /> pour tout <Math tex="x\in\mathbb R" />.</p>
                <p>2°) Calculer <Math tex="f\left(\tfrac12\right)" /> et en déduire les extremums de f sur <Math tex="\mathbb R" />.</p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1a)</strong> <Math tex="6-(2x-1)^2=6-(4x^2-4x+1)=-4x^2+4x+5=f(x)" /> ✓.
                </p>
                <p>
                  <strong>1b)</strong> <Math tex="(2x-1)^2\ge0" />, donc <Math tex="6-(2x-1)^2\le6" />, c&apos;est-à-dire <Math tex="f(x)\le6" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f\left(\tfrac12\right)=6-(1-1)^2=6" />. Comme <Math tex="f(x)\le6" /> pour tout x et <Math tex="f(\tfrac12)=6" />, <strong className="text-green-700">f(1/2) = 6 est le maximum (absolu) de f sur ℝ.</strong>
                </p>
              </div>
            }
          />

          {/* Exercice 21 */}
          <ExerciseCard
            id="21" index={21} title="Tableau et courbe de ½x² et −½x²"
            items={
              <p className="text-sm text-foreground">
                Donner le tableau de variation et représenter la courbe de : 1) <Math tex="f(x)=\tfrac12x^2" /> ;
                2) <Math tex="f(x)=-\tfrac12x^2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="a=\tfrac12>0" /> : f paire, décroissante sur ]−∞,0], croissante sur [0,+∞[, minimum f(0)=0. Parabole tournée vers le haut.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="a=-\tfrac12<0" /> : f paire, croissante sur ]−∞,0], décroissante sur [0,+∞[, maximum f(0)=0. Parabole tournée vers le bas (symétrique de la précédente par rapport à (Ox)).
                </p>
              </div>
            }
          />

          {/* Exercice 22 */}
          <ExerciseCard
            id="22" index={22} title="Étude complète de f(x) = 2x² − 4x − 2"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_f" />.</li>
                  <li>Déterminer α et β tels que <Math tex="f(x)=2(x-\alpha)^2+\beta" /> pour tout <Math tex="x" />.</li>
                  <li>Déterminer le tableau de variations de f.</li>
                  <li>Tracer la courbe représentative <Math tex="(C_f)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="D_f=\mathbb R" />.</p>
                <p>
                  <strong>2)</strong> <Math tex="2x^2-4x-2=2(x^2-2x)-2=2\left[(x-1)^2-1\right]-2=2(x-1)^2-4" />. Donc <strong className="text-green-700">α = 1, β = −4.</strong>
                </p>
                <p><strong>3)</strong> <Math tex="a=2>0" /> : f décroissante sur ]−∞,1], croissante sur [1,+∞[, minimum f(1)=−4.</p>
                <Grid viewBox="0 0 260 240" className="max-w-[280px]">
                  <line x1="0" y1="220" x2="260" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="90" y1="0" x2="90" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M48.4,96.2 L51.8,113.4 L55.2,129.6 L58.5,145.0 L61.9,159.5 L65.3,173.1 L68.7,185.9 L72.1,197.7 L75.4,208.7 L78.8,218.8 L82.2,228.1 L85.6,236.4 L89.0,243.9 L92.3,250.5 L95.7,256.2 L99.1,261.0 L102.5,265.0 L105.9,268.0 L109.2,270.2 L112.6,271.6 L116.0,272.0 L119.4,271.6 L122.8,270.2 L126.1,268.0 L129.5,265.0 L132.9,261.0 L136.3,256.2 L139.7,250.5 L143.0,243.9 L146.4,236.4 L149.8,228.1 L153.2,218.8 L156.6,208.7 L159.9,197.7 L163.3,185.9 L166.7,173.1 L170.1,159.5 L173.5,145.0 L176.8,129.6 L180.2,113.4 L183.6,96.2"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <circle cx="116" cy="272" r="3.5" fill="#e11d48" />
                  <text x="120" y="272" fontSize="11" fontWeight="700" fill="#e11d48">S(1,−4)</text>
                </Grid>
              </div>
            }
          />

          {/* Exercice 23 */}
          <ExerciseCard
            id="23" index={23} title="Étude complète de g(x) = −½x² + 2x + 1"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_g" />.</li>
                  <li>Déterminer α et β tels que <Math tex="g(x)=-\tfrac12(x-\alpha)^2+\beta" /> pour tout <Math tex="x" />.</li>
                  <li>Déterminer le tableau de variations de g.</li>
                  <li>Tracer la courbe représentative <Math tex="(C_g)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="D_g=\mathbb R" />.</p>
                <p>
                  <strong>2)</strong> <Math tex="-\tfrac12x^2+2x+1=-\tfrac12(x^2-4x)+1=-\tfrac12\left[(x-2)^2-4\right]+1=-\tfrac12(x-2)^2+3" />. Donc <strong className="text-green-700">α = 2, β = 3.</strong>
                </p>
                <p><strong>3)</strong> <Math tex="a=-\tfrac12<0" /> : g croissante sur ]−∞,2], décroissante sur [2,+∞[, maximum g(2)=3.</p>
                <Grid viewBox="0 0 260 220" className="max-w-[280px]">
                  <line x1="0" y1="190" x2="260" y2="190" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="60" y1="0" x2="60" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M28.8,223.9 L33.0,215.9 L37.1,208.4 L41.3,201.2 L45.4,194.4 L49.6,188.1 L53.8,182.1 L57.9,176.6 L62.1,171.5 L66.2,166.8 L70.4,162.5 L74.6,158.6 L78.7,155.1 L82.9,152.0 L87.0,149.4 L91.2,147.1 L95.4,145.3 L99.5,143.8 L103.7,142.8 L107.8,142.2 L112.0,142.0 L116.2,142.2 L120.3,142.8 L124.5,143.8 L128.6,145.3 L132.8,147.1 L137.0,149.4 L141.1,152.0 L145.3,155.1 L149.4,158.6 L153.6,162.5 L157.8,166.8 L161.9,171.5 L166.1,176.6 L170.2,182.1 L174.4,188.1 L178.6,194.4 L182.7,201.2 L186.9,208.4 L191.0,215.9 L195.2,223.9"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <circle cx="112" cy="142" r="3.5" fill="#e11d48" />
                  <text x="118" y="140" fontSize="11" fontWeight="700" fill="#e11d48">S(2,3)</text>
                </Grid>
              </div>
            }
          />

          {/* Exercice 24 */}
          <ExerciseCard
            id="24" index={24} title="Étude complète de f(x) = (−2x+1)/(2x−4)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_f" />.</li>
                  <li>Déterminer α, β et k tels que <Math tex="f(x)=\beta+\dfrac{k}{x-\alpha}" /> pour tout <Math tex="x" />.</li>
                  <li>Déterminer le tableau de variations de f.</li>
                  <li>Tracer <Math tex="(C_f)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="2x-4\neq0" /> : <Math tex="D_f=\mathbb R\setminus\{2\}" />.</p>
                <p>
                  <strong>2)</strong> <Math tex="-2x+1=-(2x-4)-3" />, donc <Math tex="f(x)=\dfrac{-(2x-4)-3}{2x-4}=-1-\dfrac{3/2}{x-2}" />. <strong className="text-green-700">α=2, β=−1, k=−3/2.</strong>
                </p>
                <p><strong>3)</strong> <Math tex="k=-\tfrac32<0" /> : f strictement croissante sur ]−∞,2[ et sur ]2,+∞[. Asymptotes x=2, y=−1.</p>
                <Grid viewBox="0 0 260 220" className="max-w-[280px]">
                  <line x1="0" y1="110" x2="260" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="130" y1="0" x2="130" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M181.7,220.0 L184.0,204.7 L186.3,191.2 L188.5,181.9 L190.8,175.1 L193.1,170.0 L195.4,165.9 L197.7,162.7 L200.0,160.0 L202.2,157.7 L204.5,155.8 L206.8,154.1 L209.1,152.7 L211.4,151.4 L213.7,150.3 L215.9,149.3 L218.2,148.4 L220.5,147.6 L222.8,146.9 L225.1,146.2 L227.4,145.6 L229.6,145.0 L231.9,144.5 L234.2,144.1 L236.5,143.6 L238.8,143.2 L241.0,142.8 L243.3,142.5 L245.6,142.1 L247.9,141.8 L250.2,141.5 L252.5,141.3"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <path d="M75.0,124.7 L77.3,124.5 L79.6,124.3 L81.8,124.1 L84.1,123.9 L86.4,123.7 L88.7,123.5 L91.0,123.3 L93.3,123.0 L95.5,122.7 L97.8,122.5 L100.1,122.2 L102.4,121.9 L104.7,121.5 L107.0,121.2 L109.2,120.8 L111.5,120.4 L113.8,119.9 L116.1,119.5 L118.4,119.0 L120.7,118.4 L122.9,117.8 L125.2,117.1 L127.5,116.4 L129.8,115.6 L132.1,114.7 L134.3,113.7 L136.6,112.6 L138.9,111.3 L141.2,109.9 L143.5,108.2 L145.8,106.3 L148.0,104.0 L150.3,101.3 L152.6,98.1 L154.9,94.0 L157.2,88.9 L159.5,82.1 L161.7,72.8 L164.0,59.3 L166.3,37.7"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <circle cx="130" cy="132" r="3.5" fill="#e11d48" />
                  <text x="136" y="132" fontSize="11" fontWeight="700" fill="#e11d48">S(2,−1)</text>
                </Grid>
              </div>
            }
          />

          {/* Exercice 25 */}
          <ExerciseCard
            id="25" index={25} title="Étude complète de f(x) = (2x+1)/(x−1)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_f" />.</li>
                  <li>Déterminer α, β et k tels que <Math tex="f(x)=\beta+\dfrac{k}{x-\alpha}" /> pour tout <Math tex="x" />.</li>
                  <li>Déterminer le tableau de variations de f.</li>
                  <li>Tracer <Math tex="(C_f)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="D_f=\mathbb R\setminus\{1\}" />.</p>
                <p>
                  <strong>2)</strong> <Math tex="2x+1=2(x-1)+3" />, donc <Math tex="f(x)=2+\dfrac{3}{x-1}" />. <strong className="text-green-700">α=1, β=2, k=3.</strong>
                </p>
                <p><strong>3)</strong> <Math tex="k=3>0" /> : f strictement décroissante sur ]−∞,1[ et sur ]1,+∞[. Asymptotes x=1, y=2.</p>
                <Grid viewBox="0 0 260 220" className="max-w-[280px]">
                  <line x1="0" y1="110" x2="260" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="100" y1="0" x2="100" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M139.1,220.0 L141.9,220.0 L144.8,220.0 L147.7,27.8 L150.6,32.5 L153.5,36.3 L156.4,39.4 L159.3,42.1 L162.2,44.4 L165.0,46.4 L167.9,48.1 L170.8,49.7 L173.7,51.0 L176.6,52.2 L179.5,53.3 L182.4,54.3 L185.2,55.2 L188.1,56.0 L191.0,56.8 L193.9,57.5 L196.8,58.1 L199.7,58.7 L202.6,59.3 L205.5,59.8 L208.3,60.2 L211.2,60.7 L214.1,61.1 L217.0,61.5 L219.9,61.9 L222.8,62.2 L225.7,62.5 L228.6,62.9 L231.4,63.1 L234.3,63.4 L237.2,63.7 L240.1,63.9 L243.0,64.2"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <path d="M23.0,86.0 L25.3,86.3 L27.7,86.6 L30.0,86.9 L32.3,87.3 L34.7,87.6 L37.0,88.0 L39.4,88.4 L41.7,88.8 L44.0,89.2 L46.4,89.7 L48.7,90.2 L51.0,90.7 L53.4,91.3 L55.7,91.9 L58.1,92.6 L60.4,93.3 L62.7,94.0 L65.1,94.9 L67.4,95.8 L69.8,96.7 L72.1,97.8 L74.4,99.0 L76.8,100.3 L79.1,101.7 L81.4,103.3 L83.8,105.1 L86.1,107.1 L88.5,109.4 L90.8,112.1 L93.1,115.1 L95.5,118.8 L97.8,123.1 L100.1,128.3 L102.5,134.8 L104.8,143.1 L107.2,154.0 L109.5,168.9 L111.8,190.8 L114.2,220.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <circle cx="100" cy="74" r="3.5" fill="#e11d48" />
                  <text x="60" y="70" fontSize="11" fontWeight="700" fill="#e11d48">S(1,2)</text>
                </Grid>
              </div>
            }
          />

          {/* Exercice 26 */}
          <ExerciseCard
            id="26" index={26} title="Étude complète de g(x) = −x/(x−2)"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer <Math tex="D_g" />.</li>
                  <li>Déterminer α, β et k tels que <Math tex="g(x)=\beta+\dfrac{k}{x-\alpha}" /> pour tout <Math tex="x" />.</li>
                  <li>Déterminer le tableau de variations de g.</li>
                  <li>Tracer <Math tex="(C_g)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="D_g=\mathbb R\setminus\{2\}" />.</p>
                <p>
                  <strong>2)</strong> <Math tex="-x=-(x-2)-2" />, donc <Math tex="g(x)=-1-\dfrac2{x-2}" />. <strong className="text-green-700">α=2, β=−1, k=−2.</strong>
                </p>
                <p><strong>3)</strong> <Math tex="k=-2<0" /> : g strictement croissante sur ]−∞,2[ et sur ]2,+∞[. Asymptotes x=2, y=−1.</p>
                <Grid viewBox="0 0 260 220" className="max-w-[280px]">
                  <line x1="0" y1="110" x2="260" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="130" y1="0" x2="130" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M181.7,220.0 L184.3,220.0 L186.8,207.5 L189.4,195.0 L191.9,186.0 L194.5,179.2 L197.0,174.0 L199.6,169.8 L202.2,166.4 L204.7,163.5 L207.3,161.1 L209.8,159.0 L212.4,157.2 L214.9,155.6 L217.5,154.3 L220.1,153.0 L222.6,151.9 L225.2,150.9 L227.7,150.0 L230.3,149.2 L232.9,148.4 L235.4,147.8 L238.0,147.1 L240.5,146.6 L243.1,146.0 L245.6,145.5 L248.2,145.0 L250.8,144.6 L253.3,144.2"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <path d="M53.0,124.0 L55.8,123.8 L58.7,123.6 L61.5,123.4 L64.3,123.2 L67.2,122.9 L70.0,122.7 L72.8,122.4 L75.7,122.2 L78.5,121.9 L81.3,121.6 L84.2,121.2 L87.0,120.9 L89.8,120.5 L92.7,120.1 L95.5,119.7 L98.3,119.2 L101.2,118.7 L104.0,118.2 L106.8,117.6 L109.7,117.0 L112.5,116.3 L115.3,115.5 L118.1,114.7 L121.0,113.7 L123.8,112.7 L126.6,111.6 L129.5,110.3 L132.3,108.8 L135.1,107.1 L138.0,105.1 L140.8,102.8 L143.6,100.1 L146.5,96.8 L149.3,92.8 L152.1,87.7 L155.0,81.1 L157.8,72.2 L160.6,59.6 L163.5,40.1 L166.3,10.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <circle cx="130" cy="132" r="3.5" fill="#e11d48" />
                  <text x="136" y="132" fontSize="11" fontWeight="700" fill="#e11d48">S(2,−1)</text>
                </Grid>
              </div>
            }
          />

          {/* Exercice 27 */}
          <ExerciseCard
            id="27" index={27} title="Lecture graphique : cubique et droite"
            items={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  Soit <Math tex="(C_f)" /> la courbe de <Math tex="f(x)=x^3-4x^2+3" /> et <Math tex="(D)" /> la
                  droite d&apos;équation <Math tex="y=-x-3" />.
                </p>
                <Grid viewBox="0 0 260 260" className="max-w-[300px]">
                  <line x1="0" y1="230" x2="260" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="90" y1="0" x2="90" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M43.2,267.4 L46.5,249.9 L49.8,233.9 L53.1,219.6 L56.4,206.9 L59.7,195.6 L63.0,185.7 L66.3,177.2 L69.6,170.1 L72.9,164.1 L76.2,159.4 L79.5,155.7 L82.8,153.2 L86.1,151.6 L89.4,151.0 L92.7,151.3 L96.0,152.4 L99.3,154.2 L102.6,156.8 L105.9,160.0 L109.2,163.8 L112.5,168.1 L115.8,172.9 L119.1,178.1 L122.4,183.6 L125.7,189.5 L129.0,195.5 L132.3,201.7 L135.6,208.0 L138.9,214.4 L142.2,220.7 L145.5,227.0 L148.8,233.1 L152.1,239.0 L155.4,244.7 L158.7,250.0 L162.0,255.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <path d="M43.2,212.1 L200,236" fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="5 3" />
                </Grid>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Résoudre graphiquement <Math tex="f(x)=3" />, puis l&apos;inéquation <Math tex="f(x)\le3" />.</li>
                  <li>Résoudre graphiquement <Math tex="f(x)=0" /> et l&apos;inéquation <Math tex="f(x)\ge0" />.</li>
                  <li>Résoudre graphiquement <Math tex="f(x)=-x-3" /> puis l&apos;inéquation <Math tex="f(x)\le-x-3" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f(x)=3 \iff x^3-4x^2=0 \iff x^2(x-4)=0" />. <strong className="text-green-700">S = {"{"}0, 4{"}"}</strong> (0 est racine double). Le signe de <Math tex="x^2(x-4)" /> est celui de <Math tex="(x-4)" /> (car <Math tex="x^2\ge0" />) : <strong className="text-green-700">f(x) ≤ 3 sur ]−∞, 4].</strong>
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f(1)=1-4+3=0" /> : x=1 est racine. Division : <Math tex="x^3-4x^2+3=(x-1)(x^2-3x-3)" />, et <Math tex="x^2-3x-3=0" /> a pour racines <Math tex="\dfrac{3\pm\sqrt{21}}{2}" />. <strong className="text-green-700">S = {"{"}(3−√21)/2, 1, (3+√21)/2{"}"}</strong> (≈ −0,79 ; 1 ; 3,79). Étude de signe (cubique, coefficient dominant +1, 3 racines distinctes) : <strong className="text-green-700">f(x) ≥ 0 sur [(3−√21)/2, 1] ∪ [(3+√21)/2, +∞[.</strong>
                </p>
                <p>
                  <strong>3)</strong> <Math tex="f(x)=-x-3 \iff x^3-4x^2+x+6=0" />. On vérifie <Math tex="x=-1" /> racine : <Math tex="x^3-4x^2+x+6=(x+1)(x-2)(x-3)" />. <strong className="text-green-700">S = {"{"}−1, 2, 3{"}"}</strong>. Signe de <Math tex="(x+1)(x-2)(x-3)" /> (racines −1,2,3, coefficient +1) : <strong className="text-green-700">f(x) ≤ −x−3 sur ]−∞,−1] ∪ [2,3].</strong>
                </p>
              </div>
            }
          />

          {/* Exercice 28 */}
          <ExerciseCard
            id="28" index={28} title="Deux courbes qui se coupent : parabole et droite"
            items={
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  Soient <Math tex="f(x)=x^2-3x-4" /> et <Math tex="g(x)=3x+12" />, définies sur <Math tex="\mathbb R" />.
                </p>
                <Grid viewBox="0 0 260 260" className="max-w-[300px]">
                  <line x1="0" y1="230" x2="260" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="90" y1="0" x2="90" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <path d="M10.0,62.0 L15.2,81.5 L20.4,100.1 L25.6,117.8 L30.8,134.5 L36.0,150.3 L41.2,165.1 L46.4,179.0 L51.6,191.9 L56.8,203.9 L62.0,214.9 L67.2,225.0 L72.4,234.1 L77.6,242.3 L82.8,249.5 L88.0,255.8 L93.2,260.0 L98.4,260.0 L103.6,260.0 L108.8,260.0 L114.0,260.0 L119.2,260.0 L124.4,260.0 L129.6,260.0"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <path d="M129.6,260.0 L134.8,260.0 L140.0,260.0 L145.2,260.0 L150.4,257.6 L155.6,251.6 L160.8,244.6 L166.0,236.7 L171.2,227.9 L176.4,218.1 L181.6,207.3 L186.8,195.7 L192.0,183.0 L197.2,169.5 L202.4,154.9 L207.6,139.5 L212.8,123.0 L218.0,105.7 L223.2,87.4 L228.4,68.1 L233.6,47.9 L238.8,26.8 L244.0,4.7"
                    fill="none" stroke="#0ea5e9" strokeWidth="2.4" />
                  <path d="M10.0,230.0 L165,50" fill="none" stroke="#e11d48" strokeWidth="2.2" />
                </Grid>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Tracer les courbes <Math tex="(C_f)" /> et <Math tex="(C_g)" />.</li>
                  <li>Résoudre graphiquement et algébriquement <Math tex="f(x)=g(x)" />.</li>
                  <li>Résoudre graphiquement et algébriquement <Math tex="f(x)\ge g(x)" />.</li>
                  <li>Trouver les points d&apos;intersection de <Math tex="(C_f)" /> avec les axes du repère.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>2)</strong> <Math tex="x^2-3x-4=3x+12 \iff x^2-6x-16=0" />. <Math tex="\Delta=36+64=100" />, <Math tex="x=\dfrac{6\pm10}2" />. <strong className="text-green-700">S = {"{"}−2, 8{"}"}</strong>.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="x^2-6x-16\ge0" />, racines −2 et 8, coefficient dominant +1 : <strong className="text-green-700">f(x) ≥ g(x) sur ]−∞,−2] ∪ [8,+∞[.</strong>
                </p>
                <p>
                  <strong>4)</strong> Avec l&apos;axe des abscisses : <Math tex="f(x)=0 \iff x^2-3x-4=0" />, <Math tex="\Delta=9+16=25" />, <Math tex="x=\dfrac{3\pm5}2" /> soit <Math tex="x=4" /> ou <Math tex="x=-1" /> : points <Math tex="(-1,0)" /> et <Math tex="(4,0)" />. Avec l&apos;axe des ordonnées : <Math tex="f(0)=-4" /> : point <Math tex="(0,-4)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
