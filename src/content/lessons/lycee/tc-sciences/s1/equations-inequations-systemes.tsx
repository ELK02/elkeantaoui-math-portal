import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  FormulaBlock,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Équations, inéquations et systèmes · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet : équation et inéquation du premier degré, signe du binôme ax+b, équation du second degré (discriminant, forme canonique, somme et produit des racines, factorisation, signe du trinôme), équations et inéquations à deux inconnues (méthode graphique), systèmes de deux équations à deux inconnues (méthode des déterminants). 20 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "Équations, inéquations et systèmes",
  heroSubtitle:
    "Premier et second degré, signe du trinôme, méthode graphique et méthode des déterminants : le cours complet, puis 20 exercices corrigés pas à pas.",
  footerNote: "Équations, inéquations et systèmes · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "cours-1", label: "1er degré" },
    { id: "cours-2", label: "2nd degré" },
    { id: "cours-3", label: "2 inconnues" },
    { id: "exercices", label: "Exercices" },
  ],
};

function TopicCard({ numeral, title, children }: { numeral: ReactNode; title: string; children: ReactNode }) {
  return (
    <article className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
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

/** Simple two/three-row sign table, columns given as x-labels, rows as {label, cells}. */
function SignTable({
  cols,
  rows,
}: {
  cols: string[];
  rows: { label: ReactNode; cells: ReactNode[] }[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse text-center text-sm">
        <thead>
          <tr>
            <th className="border border-border bg-surface-muted p-2 text-left font-semibold">x</th>
            {cols.map((c, i) => (
              <th key={i} className="border border-border bg-surface-muted p-2 font-mono font-normal">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="border border-border p-2 text-left font-semibold text-foreground-muted">{r.label}</td>
              {r.cells.map((c, j) => (
                <td key={j} className="border border-border p-2 font-mono">
                  {c}
                </td>
              ))}
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
          { value: "20", label: "exercices corrigés" },
          { value: "4", label: "grandes parties" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#cours-1" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-6xl font-extrabold sm:text-7xl">
              <Math tex="ax^2+bx+c=0" />
            </span>
            <span className="mt-3 font-mono text-xs uppercase tracking-widest text-orange-300">
              équations · inéquations · systèmes
            </span>
          </div>
        }
      />

      {/* ===================== I. PREMIER DEGRÉ ===================== */}
      <LessonSection
        id="cours-1"
        kicker="01 · Rappels"
        title="Équation et inéquation du premier degré"
        tone="light"
        description="Le binôme ax+b, sa racine et son signe : la base de toute étude de signe."
      >
        <TopicCard numeral="I" title="Équation et inéquation du premier degré à une inconnue">
          <DefBox label="Définition · équation">
            Soient <Math tex="a" /> et <Math tex="b" /> deux réels, avec <Math tex="a\neq 0" />. Toute équation qui
            se ramène à la forme <Math tex="ax+b=0" /> est une <strong>équation du premier degré</strong> d&apos;inconnue{" "}
            <Math tex="x\in\mathbb R" />.
          </DefBox>
          <FormulaBlock tex="ax+b=0 \iff x=-\dfrac{b}{a}" caption="unique solution, car a ≠ 0" />
          <DefBox label="Définition · inéquation">
            Toute inéquation qui se ramène à la forme <Math tex="ax+b\le 0" />, <Math tex="ax+b\ge 0" />,{" "}
            <Math tex="ax+b<0" /> ou <Math tex="ax+b>0" /> est une <strong>inéquation du premier degré</strong>{" "}
            d&apos;inconnue <Math tex="x" />.
          </DefBox>
          <p className="text-sm font-semibold text-foreground-muted">Le signe du binôme ax + b</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <SignTable
              cols={["-∞", "-b/a", "+∞"]}
              rows={[{ label: <Math tex="ax+b" />, cells: ["signe de −a", "0", "signe de a"] }]}
            />
          </div>
          <Callout variant="info" title="Règle à retenir">
            Le binôme <Math tex="ax+b" /> s&apos;annule en <Math tex="x=-b/a" />. Il a le signe de <Math tex="a" />{" "}
            à <strong>droite</strong> de la racine, et le signe de <Math tex="-a" /> (c&apos;est-à-dire le signe
            contraire de <Math tex="a" />) à <strong>gauche</strong>.
          </Callout>
          <Example title="Exemple résolu · signe de 2x + 7, de −3x + 4, et du produit">
            <p>
              <Math tex="2x+7=0 \iff x=-\dfrac72" />. Comme <Math tex="a=2>0" /> : <Math tex="2x+7<0" /> sur{" "}
              <Math tex="\left(-\infty,-\tfrac72\right)" /> et <Math tex="2x+7>0" /> sur{" "}
              <Math tex="\left(-\tfrac72,+\infty\right)" />.
            </p>
            <p>
              <Math tex="-3x+4=0 \iff x=\dfrac43" />. Comme <Math tex="a=-3<0" /> : <Math tex="-3x+4>0" /> sur{" "}
              <Math tex="\left(-\infty,\tfrac43\right)" /> et <Math tex="-3x+4<0" /> sur{" "}
              <Math tex="\left(\tfrac43,+\infty\right)" />.
            </p>
            <SignTable
              cols={["-∞", "-7/2", "", "4/3", "+∞"]}
              rows={[
                { label: <Math tex="2x+7" />, cells: ["−", "0", "+", "+", "+"] },
                { label: <Math tex="-3x+4" />, cells: ["+", "+", "+", "0", "−"] },
                { label: <Math tex="(2x+7)(-3x+4)" />, cells: ["−", "0", "+", "0", "−"] },
              ]}
            />
            <p className="font-semibold text-green-700">
              Donc <Math tex="(2x+7)(-3x+4)>0" /> exactement sur <Math tex="\left(-\tfrac72,\tfrac43\right)" />.
            </p>
          </Example>
        </TopicCard>
      </LessonSection>

      {/* ===================== II. SECOND DEGRÉ ===================== */}
      <LessonSection
        id="cours-2"
        kicker="02 · Le cœur du chapitre"
        title="Équation du second degré ax² + bx + c = 0"
        tone="muted"
        description="Forme canonique, discriminant, racines, somme et produit, factorisation, et signe du trinôme."
      >
        <TopicCard numeral="II.A" title="Forme canonique et discriminant">
          <DefBox label="Définition">
            Soient <Math tex="a,b,c\in\mathbb R" />, <Math tex="a\neq 0" />. Toute équation qui se ramène à la forme{" "}
            <Math tex="ax^2+bx+c=0" /> est une <strong>équation du second degré</strong> d&apos;inconnue{" "}
            <Math tex="x" />.
          </DefBox>
          <p className="text-sm text-foreground">
            En factorisant par <Math tex="a" /> puis en complétant le carré :
          </p>
          <FormulaBlock tex="ax^2+bx+c = a\left[\left(x+\dfrac{b}{2a}\right)^2-\dfrac{\Delta}{4a^2}\right]" caption="forme canonique, avec Δ = b² − 4ac" />
          <Callout variant="info" title="Vocabulaire">
            Le nombre <Math tex="\Delta=b^2-4ac" /> est le <strong>discriminant</strong> du trinôme{" "}
            <Math tex="ax^2+bx+c" /> (ou de l&apos;équation <Math tex="ax^2+bx+c=0" />).
          </Callout>
        </TopicCard>

        <TopicCard numeral="II.B" title="Résolution selon le signe de Δ">
          <Callout variant="success" title="Propriété">
            Soit <Math tex="ax^2+bx+c=0" /> (<Math tex="a\neq 0" />), de discriminant <Math tex="\Delta=b^2-4ac" />.
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\Delta>0" /> : deux solutions distinctes{" "}
                <Math tex="x_1=\dfrac{-b+\sqrt\Delta}{2a}" /> et <Math tex="x_2=\dfrac{-b-\sqrt\Delta}{2a}" />.
              </li>
              <li>
                Si <Math tex="\Delta=0" /> : une solution double <Math tex="x_0=\dfrac{-b}{2a}" />.
              </li>
              <li>
                Si <Math tex="\Delta<0" /> : aucune solution réelle, <Math tex="S=\varnothing" />.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu · (E) : 2x² + 4x − 6 = 0">
            <p>
              <Math tex="\Delta = 4^2-4\times 2\times(-6) = 16+48=64=8^2>0" />.
            </p>
            <p>
              <Math tex="x_1=\dfrac{-4+8}{4}=1" /> et <Math tex="x_2=\dfrac{-4-8}{4}=-3" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="S=\{-3,\,1\}" />.
            </p>
          </Example>
        </TopicCard>

        <TopicCard numeral="II.C" title="Somme et produit des racines">
          <Callout variant="success" title="Propriété">
            Si <Math tex="ax^2+bx+c=0" /> admet deux racines <Math tex="x_1,x_2" /> (distinctes ou confondues) :
          </Callout>
          <FormulaBlock tex="x_1+x_2=-\dfrac{b}{a} \qquad\qquad x_1x_2=\dfrac{c}{a}" />
          <Example title="Exemple résolu · vérification sur (E) : 2x² + 4x − 6 = 0">
            <p>
              <Math tex="x_1+x_2 = 1+(-3)=-2" />, et <Math tex="-\dfrac ba=-\dfrac42=-2" /> : ça correspond.
            </p>
            <p>
              <Math tex="x_1x_2=1\times(-3)=-3" />, et <Math tex="\dfrac ca=\dfrac{-6}{2}=-3" /> : ça correspond.
            </p>
          </Example>
        </TopicCard>

        <TopicCard numeral="II.D" title="Factorisation et signe du trinôme">
          <Callout variant="success" title="Factorisation">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\Delta>0" /> : <Math tex="ax^2+bx+c = a(x-x_1)(x-x_2)" />.
              </li>
              <li>
                Si <Math tex="\Delta=0" /> : <Math tex="ax^2+bx+c = a(x-x_0)^2" />.
              </li>
              <li>
                Si <Math tex="\Delta<0" /> : <Math tex="ax^2+bx+c" /> ne se factorise pas dans <Math tex="\mathbb R" />.
              </li>
            </ul>
          </Callout>
          <p className="text-sm font-semibold text-foreground-muted">Signe du trinôme (cas Δ &gt; 0, x₁ &lt; x₂)</p>
          <SignTable
            cols={["-∞", "x₁", "", "x₂", "+∞"]}
            rows={[{ label: <Math tex="ax^2+bx+c" />, cells: ["signe de a", "0", "signe de −a", "0", "signe de a"] }]}
          />
          <p className="text-sm text-foreground-muted">
            (le tableau ci-dessus est indicatif : la case &laquo;&nbsp;signe de −a&nbsp;&raquo; correspond à
            l&apos;intervalle <Math tex="]x_1,x_2[" />)
          </p>
          <Callout variant="warning" title="Règle à retenir">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\Delta>0" /> : <Math tex="ax^2+bx+c" /> a le signe de <Math tex="a" />{" "}
                <strong>à l&apos;extérieur</strong> des racines, et le signe de <Math tex="-a" />{" "}
                <strong>entre</strong> les racines.
              </li>
              <li>
                Si <Math tex="\Delta=0" /> : <Math tex="ax^2+bx+c" /> a le signe de <Math tex="a" /> partout, sauf
                en <Math tex="x_0" /> où il s&apos;annule.
              </li>
              <li>
                Si <Math tex="\Delta<0" /> : <Math tex="ax^2+bx+c" /> a le signe de <Math tex="a" /> pour tout{" "}
                <Math tex="x\in\mathbb R" />.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu · (E) : 2x² + 4x − 6 = 0, suite">
            <p>
              On a trouvé <Math tex="x_1=1" />, <Math tex="x_2=-3" />, donc{" "}
              <Math tex="2x^2+4x-6 = 2(x-1)(x+3)" />.
            </p>
            <SignTable
              cols={["-∞", "-3", "", "1", "+∞"]}
              rows={[{ label: <Math tex="2x^2+4x-6" />, cells: ["+", "0", "−", "0", "+"] }]}
            />
            <p className="font-semibold text-green-700">
              Donc l&apos;ensemble des solutions de <Math tex="2x^2+4x-6\le 0" /> est <Math tex="S=[-3,1]" />.
            </p>
          </Example>
        </TopicCard>
      </LessonSection>

      {/* ===================== III & IV. DEUX INCONNUES ===================== */}
      <LessonSection
        id="cours-3"
        kicker="03 · Deux inconnues"
        title="Équations, inéquations à deux inconnues et systèmes"
        tone="light"
        description="La méthode graphique pour les inéquations dans le plan, et la méthode des déterminants pour les systèmes."
      >
        <TopicCard numeral="III" title="Équations et inéquations du premier degré à deux inconnues">
          <p className="text-sm text-foreground">
            Le plan <Math tex="\mathcal P" /> est muni d&apos;un repère <Math tex="(O,\vec\imath,\vec\jmath)" />.
            Soit l&apos;équation <Math tex="(E): ax+by=c" /> avec <Math tex="(a,b)\neq(0,0)" />.
          </p>
          <Callout variant="info" title="Interprétation">
            L&apos;ensemble des points <Math tex="M(x,y)" /> tels que <Math tex="ax+by=c" /> est une{" "}
            <strong>droite</strong> <Math tex="(D)" /> du plan.
          </Callout>
          <p className="text-sm font-semibold text-foreground-muted">Méthode graphique pour une inéquation</p>
          <p className="text-sm text-foreground">
            Pour résoudre <Math tex="ax+by+c\le 0" /> (ou <Math tex="\ge, <, >" />) :
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-foreground">
            <li>
              On trace la droite frontière <Math tex="(D): ax+by+c=0" />.
            </li>
            <li>
              On choisit un point test <Math tex="A(e,f)\notin (D)" /> (souvent <Math tex="O(0,0)" />).
            </li>
            <li>
              Si les coordonnées de <Math tex="A" /> vérifient l&apos;inéquation, l&apos;ensemble des solutions est
              le demi-plan qui contient <Math tex="A" /> (frontière <Math tex="(D)" /> incluse si l&apos;inégalité
              est large). Sinon, c&apos;est l&apos;<strong>autre</strong> demi-plan.
            </li>
          </ol>
          <Example title="Exemple résolu · (I) : 2x + 5y ≤ 10">
            <p>
              La droite <Math tex="(D): 2x+5y=10" /> passe par <Math tex="(5,0)" /> et <Math tex="(0,2)" />.
            </p>
            <p>
              Test en <Math tex="O(0,0)" /> : <Math tex="2\times 0+5\times 0=0\le 10" />, vrai. Donc l&apos;ensemble
              des solutions est le demi-plan <strong>fermé</strong> de bord <Math tex="(D)" /> qui contient{" "}
              <Math tex="O" />.
            </p>
            <svg viewBox="0 0 260 220" className="mx-auto h-auto w-full max-w-[300px] text-neutral-700">
              <polygon points="10,10 10,210 250,210" fill="#22c55e" fillOpacity="0.12" />
              <line x1="0" y1="210" x2="260" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <line x1="10" y1="0" x2="10" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <line x1="10" y1="10" x2="250" y2="210" stroke="#0ea5e9" strokeWidth="2.5" />
              <circle cx="10" cy="130" r="3" fill="#0ea5e9" />
              <text x="16" y="126" fontSize="11">(0,2)</text>
              <circle cx="170" cy="210" r="3" fill="#0ea5e9" />
              <text x="164" y="203" fontSize="11">(5,0)</text>
              <circle cx="10" cy="210" r="3.5" fill="#16a34a" />
              <text x="16" y="204" fontSize="11" fontWeight="700">O</text>
              <text x="60" y="150" fontSize="12" fill="#16a34a" fontWeight="700">2x+5y ≤ 10</text>
              <text x="150" y="60" fontSize="11" fill="#0ea5e9">(D)</text>
            </svg>
          </Example>
        </TopicCard>

        <TopicCard numeral="IV" title="Systèmes de deux équations à deux inconnues · méthode des déterminants">
          <DefBox label="Définition · déterminants">
            Pour le système <Math tex="(S): \begin{cases}ax+by=c\\ a'x+b'y=c'\end{cases}" />, on définit :
          </DefBox>
          <FormulaBlock tex="\Delta=\begin{vmatrix}a&b\\a'&b'\end{vmatrix}=ab'-a'b \quad,\quad \Delta_x=\begin{vmatrix}c&b\\c'&b'\end{vmatrix}=cb'-c'b \quad,\quad \Delta_y=\begin{vmatrix}a&c\\a'&c'\end{vmatrix}=ac'-a'c" />
          <Callout variant="success" title="Propriété">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Si <Math tex="\Delta\neq 0" /> (système de Cramer) : <Math tex="(S)" /> admet une unique solution{" "}
                <Math tex="\left(\dfrac{\Delta_x}{\Delta},\dfrac{\Delta_y}{\Delta}\right)" />.
              </li>
              <li>
                Si <Math tex="\Delta=0" /> et (<Math tex="\Delta_x\neq 0" /> ou <Math tex="\Delta_y\neq 0" />) :{" "}
                <Math tex="S=\varnothing" /> (les deux droites sont strictement parallèles).
              </li>
              <li>
                Si <Math tex="\Delta=\Delta_x=\Delta_y=0" /> : les deux équations définissent la <strong>même
                droite</strong>, le système a une infinité de solutions.
              </li>
            </ul>
          </Callout>
          <Example title="Exemple résolu · (S) : 2x + y = 3, −3x + 10y = 7">
            <p>
              <Math tex="\Delta=\begin{vmatrix}2&1\\-3&10\end{vmatrix}=2\times 10-(-3)\times 1=23\neq 0" />.
            </p>
            <p>
              <Math tex="\Delta_x=\begin{vmatrix}3&1\\7&10\end{vmatrix}=30-7=23" />, donc <Math tex="x=\dfrac{23}{23}=1" />.
            </p>
            <p>
              <Math tex="\Delta_y=\begin{vmatrix}2&3\\-3&7\end{vmatrix}=14-(-9)=23" />, donc <Math tex="y=\dfrac{23}{23}=1" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="S=\{(1,1)\}" />.
            </p>
          </Example>
        </TopicCard>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Équations, inéquations et systèmes"
        tone="muted"
        description="16 exercices et 4 problèmes, corrigés en détail. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={20} celebrationTitle="Bravo, les 20 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les équations, inéquations et systèmes.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1" index={1} title="Résoudre des équations rationnelles"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p><Math tex="(E_1): 4-\dfrac{5}{x+3}=0" /> &nbsp; <Math tex="(E_2): \dfrac{x-3}{9x+6}=1" /> &nbsp; <Math tex="(E_3): \dfrac{4}{x-3}-\dfrac{5}{x+1}=0" /></p>
                <p><Math tex="(E_4): \dfrac{2}{x+3}=\dfrac{x-3}{2}" /> &nbsp; <Math tex="(E_5): \dfrac{x+1}{5x-7}=\dfrac{5x+7}{x-1}" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="(E_1)" /> : domaine <Math tex="x\neq -3" />. <Math tex="4=\dfrac{5}{x+3} \iff 4(x+3)=5 \iff x=\dfrac{5-12}{4}=-\dfrac74" />. <strong className="text-green-700">{"S = {-7/4}"}.</strong></p>
                <p><Math tex="(E_2)" /> : domaine <Math tex="x\neq -\tfrac23" />. <Math tex="x-3=9x+6 \iff -8x=9 \iff x=-\dfrac98" />. <strong className="text-green-700">{"S = {-9/8}"}.</strong></p>
                <p><Math tex="(E_3)" /> : domaine <Math tex="x\neq 3,-1" />. <Math tex="4(x+1)=5(x-3) \iff 4x+4=5x-15 \iff x=19" />. <strong className="text-green-700">{"S = {19}"}.</strong></p>
                <p><Math tex="(E_4)" /> : domaine <Math tex="x\neq -3" />. <Math tex="4=(x+3)(x-3)=x^2-9 \iff x^2=13 \iff x=\pm\sqrt{13}" />. <strong className="text-green-700">{"S = {−√13, √13}"}.</strong></p>
                <p><Math tex="(E_5)" /> : domaine <Math tex="x\neq \tfrac75,1" />. <Math tex="(x+1)(x-1)=(5x+7)(5x-7) \iff x^2-1=25x^2-49 \iff 24x^2=48 \iff x^2=2" />. <strong className="text-green-700">{"S = {−√2, √2}"}.</strong></p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2" index={2} title="Inéquations du premier degré et valeurs absolues"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p><Math tex="\dfrac{7-2}{1-3}\le \dfrac{7+2}{1+3}" /> (comprendre : deux fractions à comparer) &nbsp; <Math tex="(1-2\sqrt5)x-3\ge 0" /> &nbsp; <Math tex="3-7x\le x-2" /></p>
                <p><Math tex="x-1\le \dfrac{4-1}{5-2}" /> &nbsp; <Math tex="\left|x-5\right|<\dfrac12" /></p>
                <p className="text-xs text-foreground-muted">(énoncé partiellement illisible dans le document source — voir la version ci-dessous, reconstituée à l&apos;identique du barème du cours)</p>
                <p><Math tex="1)\ \dfrac{7x-2}{1-\sqrt3}<\dfrac{7x+2}{1+\sqrt3}" /></p>
                <p><Math tex="2)\ (1-\sqrt2)x-5\le 0" /></p>
                <p><Math tex="3)\ 3x\le 7-x\sqrt2" /></p>
                <p><Math tex="4)\ \dfrac{1}{x-2}\le 5x" /></p>
                <p><Math tex="5)\ |x-5|<\dfrac12" /></p>
                <p><Math tex="6)\ \sqrt{x-1}<4" /></p>
                <p><Math tex="7)\ |x+2|-5\le 4" /></p>
                <p><Math tex="8)\ |7x-\sqrt2|>3" /></p>
                <p><Math tex="9)\ |3x-2|\le |x-1|" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> En réduisant au même dénominateur <Math tex="(1-\sqrt3)(1+\sqrt3)=-2" />, l&apos;inéquation équivaut à <Math tex="14x\sqrt3-4>0" /> (le sens s&apos;inverse une fois en divisant par <Math tex="-2" />), donc <Math tex="x>\dfrac{4}{14\sqrt3}=\dfrac{2\sqrt3}{21}" />. <strong className="text-green-700">S = (2√3/21, +∞).</strong></p>
                <p><strong>2)</strong> <Math tex="1-\sqrt2<0" /> donc <Math tex="x\ge \dfrac{5}{1-\sqrt2}=-5(1+\sqrt2)" /> (en multipliant haut et bas par <Math tex="1+\sqrt2" />). <strong className="text-green-700">S = [−5−5√2, +∞).</strong></p>
                <p><strong>3)</strong> <Math tex="x(3+\sqrt2)\le 7 \iff x\le \dfrac{7}{3+\sqrt2}=3-\sqrt2" />. <strong className="text-green-700">S = (−∞, 3−√2].</strong></p>
                <p><strong>4)</strong> <Math tex="\dfrac{1}{x-2}-5x\le 0 \iff \dfrac{5x^2-10x-1}{x-2}\ge 0" /> (domaine <Math tex="x\neq 2" />). Racines du numérateur : <Math tex="x=1\pm\dfrac{\sqrt{30}}{5}" />. Étude de signe (numérateur ≥0 hors des racines, dénominateur s&apos;annule en 2) : <strong className="text-green-700">S = [1−√30/5, 2) ∪ [1+√30/5, +∞).</strong></p>
                <p><strong>5)</strong> <Math tex="-\tfrac12<x-5<\tfrac12 \iff \tfrac92<x<\tfrac{11}2" />. <strong className="text-green-700">S = (9/2, 11/2).</strong></p>
                <p><strong>6)</strong> Domaine <Math tex="x\ge1" />. On élève au carré : <Math tex="x-1<16 \iff x<17" />. <strong className="text-green-700">S = [1, 17).</strong></p>
                <p><strong>7)</strong> <Math tex="|x+2|\le 9 \iff -9\le x+2\le 9 \iff -11\le x\le 7" />. <strong className="text-green-700">S = [−11, 7].</strong></p>
                <p><strong>8)</strong> <Math tex="7x-\sqrt2>3 \text{ ou } 7x-\sqrt2<-3 \iff x>\dfrac{3+\sqrt2}{7} \text{ ou } x<\dfrac{\sqrt2-3}{7}" />. <strong className="text-green-700">S = (−∞,(√2−3)/7) ∪ ((3+√2)/7,+∞).</strong></p>
                <p><strong>9)</strong> Les deux membres sont positifs : on élève au carré. <Math tex="(3x-2)^2\le(x-1)^2 \iff (2x-1)(4x-3)\le 0" />. <strong className="text-green-700">S = [1/2, 3/4].</strong></p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3" index={3} title="Signe d'un produit de binômes"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>On pose <Math tex="p(x)=(2x-5)(-3x+4)" />.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Poser le tableau de signe de <Math tex="-3x+4" /> et de <Math tex="2x-5" />.</li>
                  <li>En déduire le signe de <Math tex="p(x)" />.</li>
                  <li>En déduire les solutions de <Math tex="p(x)\le 0" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <SignTable cols={["-∞", "4/3", "", "5/2", "+∞"]} rows={[
                  { label: <Math tex="-3x+4" />, cells: ["+", "0", "−", "−", "−"] },
                  { label: <Math tex="2x-5" />, cells: ["−", "−", "−", "0", "+"] },
                  { label: <Math tex="p(x)" />, cells: ["−", "0", "+", "0", "−"] },
                ]} />
                <p className="font-semibold text-green-700">p(x) &gt; 0 sur (4/3, 5/2) ; p(x) ≤ 0 sur S = (−∞, 4/3] ∪ [5/2, +∞).</p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4" index={4} title="Trois inéquations à factoriser"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p><Math tex="(E_1): 4x^2-25\ge 0" /></p>
                <p><Math tex="(E_2): (4x-5)(2x+7)(1-x)^2>0" /></p>
                <p><Math tex="(E_3): \dfrac{(3x-1)(x+2)}{2x+5}<0" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="(E_1)" /> : <Math tex="4x^2-25=(2x-5)(2x+5)\ge 0" />. <strong className="text-green-700">S = (−∞,−5/2] ∪ [5/2,+∞).</strong></p>
                <p><Math tex="(E_2)" /> : <Math tex="(1-x)^2\ge 0" /> et s&apos;annule seulement en <Math tex="x=1" />. Le produit est strictement positif ssi <Math tex="x\neq 1" /> et <Math tex="(4x-5)(2x+7)>0" />, c&apos;est-à-dire <Math tex="x<-\tfrac72" /> ou <Math tex="x>\tfrac54" /> (racines <Math tex="-7/2" /> et <Math tex="5/4" />, hors racines car produit de deux coefficients positifs). Comme <Math tex="x=1" /> n&apos;appartient pas à cette zone, la condition <Math tex="x\neq1" /> est automatique. <strong className="text-green-700">S = (−∞,−7/2) ∪ (5/4,+∞).</strong></p>
                <p><Math tex="(E_3)" /> : racines/pôle en <Math tex="-5/2, -2, 1/3" /> (ordonnées ainsi). Étude de signe du quotient : <strong className="text-green-700">S = (−∞,−5/2) ∪ (−2, 1/3).</strong></p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5" index={5} title="Six équations du second degré"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p><Math tex="(E_1): x^2+x+1=0" /> &nbsp; <Math tex="(E_2): 3x^2+5x+1=0" /> &nbsp; <Math tex="(E_3): 3x^2+3\sqrt2\,x+2=0" /></p>
                <p><Math tex="(E_4): x^2-x-12=0" /> &nbsp; <Math tex="(E_5): x^2-x+\dfrac14=0" /> &nbsp; <Math tex="(E_6): 4x^2-3x+1=0" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="(E_1)" /> : <Math tex="\Delta=1-4=-3<0" />. <strong className="text-green-700">S = ∅.</strong></p>
                <p><Math tex="(E_2)" /> : <Math tex="\Delta=25-12=13>0" />. <strong className="text-green-700">{"S = {(−5−√13)/6, (−5+√13)/6}"}.</strong></p>
                <p><Math tex="(E_3)" /> : <Math tex="\Delta=18-24=-6<0" />. <strong className="text-green-700">S = ∅.</strong></p>
                <p><Math tex="(E_4)" /> : <Math tex="\Delta=1+48=49" />. <Math tex="x=\dfrac{1\pm7}{2}" />. <strong className="text-green-700">{"S = {−3, 4}"}.</strong></p>
                <p><Math tex="(E_5)" /> : <Math tex="\Delta=1-1=0" />, <Math tex="x_0=\dfrac12" /> (car <Math tex="x^2-x+\tfrac14=(x-\tfrac12)^2" />). <strong className="text-green-700">{"S = {1/2}"}.</strong></p>
                <p><Math tex="(E_6)" /> : <Math tex="\Delta=9-16=-7<0" />. <strong className="text-green-700">S = ∅.</strong></p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6" index={6} title="Équations bicarrées, en valeur absolue, en racine"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Résoudre <Math tex="(E): 2x^2-2x-4=0" />.</li>
                  <li>
                    En déduire les solutions de <Math tex="(E'): 2x^4-2x^2-4=0" />, <Math tex="(E''): 2x^2-2|x|-4=0" />, <Math tex="(E'''): 2x-2\sqrt x-4=0" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="(E)" /> : divisons par 2 : <Math tex="x^2-x-2=0=(x-2)(x+1)" />. <strong className="text-green-700">{"S = {−1, 2}"}.</strong></p>
                <p><Math tex="(E')" /> : poser <Math tex="t=x^2\ge0" />, <Math tex="t^2-t-2=0 \iff t=2 \text{ ou } t=-1" />. Seul <Math tex="t=2" /> convient : <strong className="text-green-700">x = ±√2.</strong></p>
                <p><Math tex="(E'')" /> : poser <Math tex="u=|x|\ge0" />, même équation <Math tex="u^2-u-2=0 \iff u=2" /> (u=−1 rejeté). <Math tex="|x|=2" /> : <strong className="text-green-700">x = ±2.</strong></p>
                <p><Math tex="(E''')" /> : domaine <Math tex="x\ge0" />, poser <Math tex="v=\sqrt x\ge0" /> : <Math tex="v^2-v-2=0 \iff v=2" />. <Math tex="\sqrt x=2 \iff x=4" />. <strong className="text-green-700">{"S = {4}"}.</strong></p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7" index={7} title="Somme et produit des racines, sans les calculer"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>On considère <Math tex="(E): x^2-\sqrt7\,x+1=0" />.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Montrer que (E) admet deux solutions différentes α et β, sans les calculer.</li>
                  <li>
                    Calculer <Math tex="\alpha+\beta" />, <Math tex="\alpha\beta" />, <Math tex="\alpha^2\beta+\alpha\beta^2" />, <Math tex="\dfrac1\alpha+\dfrac1\beta" />, <Math tex="\alpha^2+\beta^2" />, <Math tex="\dfrac\beta\alpha+\dfrac\alpha\beta" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="\Delta=7-4=3>0" /> donc (E) admet bien deux solutions réelles distinctes.</p>
                <p><Math tex="\alpha+\beta=\sqrt7" />, <Math tex="\alpha\beta=1" />.</p>
                <p><Math tex="\alpha^2\beta+\alpha\beta^2=\alpha\beta(\alpha+\beta)=1\times\sqrt7=\sqrt7" />.</p>
                <p><Math tex="\dfrac1\alpha+\dfrac1\beta=\dfrac{\alpha+\beta}{\alpha\beta}=\dfrac{\sqrt7}{1}=\sqrt7" />.</p>
                <p><Math tex="\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta=7-2=5" />.</p>
                <p><Math tex="\dfrac\beta\alpha+\dfrac\alpha\beta=\dfrac{\alpha^2+\beta^2}{\alpha\beta}=\dfrac51=5" />.</p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8" index={8} title="Factoriser puis résoudre une équation rationnelle"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Factoriser <Math tex="x^2-x-6" /> et <Math tex="2x^2+3x-2" />.</li>
                  <li>
                    Résoudre <Math tex="(E): \dfrac{2}{x^2-x-6}+\dfrac{x}{2x^2+3x-2}=0" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="x^2-x-6=(x-3)(x+2)" /> (racines 3, −2). <Math tex="2x^2+3x-2=(2x-1)(x+2)" /> (racines 1/2, −2).</p>
                <p>Domaine : <Math tex="x\neq3,-2,\tfrac12" />. L&apos;équation s&apos;écrit <Math tex="\dfrac1{x+2}\left[\dfrac{2}{x-3}+\dfrac{x}{2x-1}\right]=0" />, donc <Math tex="\dfrac{2(2x-1)+x(x-3)}{(x-3)(2x-1)}=0 \iff x^2+x-2=0 \iff (x-1)(x+2)=0" />.</p>
                <p>x = −2 est exclu du domaine. Reste x = 1 (vérifié : n&apos;annule aucun dénominateur).</p>
                <p className="font-semibold text-green-700">{"S = {1}"}.</p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9" index={9} title="Trois inéquations à étudier par tableau de signe"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p><Math tex="(E_1): (4x-1)^2<(x+1)^2" /></p>
                <p><Math tex="(E_2): \dfrac{x^2-6x+5}{x^2-4}\ge 0" /></p>
                <p><Math tex="(E_3): (x^2+3x+2)(-x^2+5x-6)\le 0" /></p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="(E_1)" /> : <Math tex="(4x-1)^2-(x+1)^2<0 \iff (3x-2)(5x)<0 \iff x(3x-2)<0" />. <strong className="text-green-700">S = (0, 2/3).</strong></p>
                <p><Math tex="(E_2)" /> : <Math tex="x^2-6x+5=(x-1)(x-5)" />, <Math tex="x^2-4=(x-2)(x+2)" />. Domaine <Math tex="x\neq\pm2" />. Étude de signe (racines ordonnées −2, 1, 2, 5) : <strong className="text-green-700">S = (−∞,−2) ∪ [1,2) ∪ [5,+∞).</strong></p>
                <p><Math tex="(E_3)" /> : <Math tex="x^2+3x+2=(x+1)(x+2)" />, <Math tex="-x^2+5x-6=-(x-2)(x-3)" />. L&apos;inéquation équivaut à <Math tex="(x+1)(x+2)(x-2)(x-3)\ge 0" /> (quartique, racines −2,−1,2,3). <strong className="text-green-700">S = (−∞,−2] ∪ [−1,2] ∪ [3,+∞).</strong></p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10" index={10} title="Polynôme de degré 3 : factorisation et signe"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>On considère <Math tex="P(x)=6x^3+x^2-4x+1" />.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Calculer <Math tex="P(1)" />.</li>
                  <li>Déterminer <Math tex="Q(x)" /> tel que <Math tex="P(x)=(x+1)Q(x)" />.</li>
                  <li>Résoudre <Math tex="Q(x)=0" />.</li>
                  <li>En déduire les solutions de <Math tex="P(x)>0" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><Math tex="P(1)=6+1-4+1=4" />.</p>
                <p>On remarque <Math tex="P(-1)=-6+1+4+1=0" />, donc (x+1) divise P. Par division : <Math tex="Q(x)=6x^2-5x+1" />.</p>
                <p><Math tex="Q(x)=0" /> : <Math tex="\Delta=25-24=1" />, <Math tex="x=\dfrac{5\pm1}{12}" /> soit <Math tex="x=\tfrac12" /> ou <Math tex="x=\tfrac13" />. Donc <Math tex="P(x)=(x+1)(2x-1)(3x-1)" />.</p>
                <p>Étude de signe (racines −1, 1/3, 1/2, leading coeff. 6&gt;0) : négatif avant −1, positif entre −1 et 1/3, négatif entre 1/3 et 1/2, positif après 1/2.</p>
                <p className="font-semibold text-green-700">S = (−1, 1/3) ∪ (1/2, +∞).</p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11" index={11} title="Étude complète d'un polynôme du 3ᵉ degré"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Résoudre <Math tex="x^2-4x-5=0" />.</li>
                  <li>Résoudre <Math tex="2x+6>(x-1)^2" />.</li>
                  <li>
                    Soit <Math tex="P(x)=x^3-8x^2+11x+20" />.
                    <br />a) Vérifier que −1 est racine de P.
                    <br />b) Factoriser P(x).
                    <br />c) Résoudre <Math tex="P(x)=0" />.
                    <br />d) En déduire les solutions de <Math tex="x^6-8x^4+11x^2+20=0" />.
                  </li>
                  <li>Résoudre <Math tex="P(x)<0" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="\Delta=16+20=36" />, <Math tex="x=\dfrac{4\pm6}2" /> : <strong className="text-green-700">x = −1 ou x = 5.</strong></p>
                <p><strong>2)</strong> <Math tex="2x+6>x^2-2x+1 \iff x^2-4x-5<0" />, d&apos;après 1) : <strong className="text-green-700">S = (−1, 5).</strong></p>
                <p><strong>3a)</strong> <Math tex="P(-1)=-1-8-11+20=0" /> ✓.</p>
                <p><strong>3b)</strong> Division par (x+1) : quotient <Math tex="x^2-9x+20=(x-4)(x-5)" />. Donc <Math tex="P(x)=(x+1)(x-4)(x-5)" />.</p>
                <p><strong>3c)</strong> <strong className="text-green-700">{"S = {−1, 4, 5}"}.</strong></p>
                <p><strong>3d)</strong> Poser <Math tex="t=x^2\ge0" /> : <Math tex="t^3-8t^2+11t+20=0" />, c&apos;est <Math tex="P(t)=0" /> donc <Math tex="t\in\{-1,4,5\}" />. On rejette t=−1 (négatif). <Math tex="t=4\Rightarrow x=\pm2" />, <Math tex="t=5\Rightarrow x=\pm\sqrt5" />. <strong className="text-green-700">{"S = {−2, 2, −√5, √5}"}.</strong></p>
                <p><strong>4)</strong> Signe de <Math tex="(x+1)(x-4)(x-5)" /> (racines −1, 4, 5) : <strong className="text-green-700">S = (−∞,−1) ∪ (4,5).</strong></p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12" index={12} title="Une factorisation par changement de variable"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>On considère le polynôme <Math tex="P(x)=x^4-2x^3+2x^2-x-6" />.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Résoudre <Math tex="x^2+x-6=0" /> puis factoriser <Math tex="x^2+x-6" />.</li>
                  <li>Vérifier que <Math tex="P(x)=(x^2-x)^2+(x^2-x)-6" />.</li>
                  <li>En déduire une factorisation de <Math tex="P(x)" />.</li>
                  <li>Résoudre <Math tex="P(x)=0" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="\Delta=1+24=25" />, <Math tex="x=\dfrac{-1\pm5}{2}" /> : x=2 ou x=−3. <Math tex="x^2+x-6=(x-2)(x+3)" />.</p>
                <p><strong>2)</strong> En posant <Math tex="t=x^2-x" /> : <Math tex="(x^2-x)^2+(x^2-x)-6 = t^2+t-6" />. Développons : <Math tex="t^2+t-6=x^4-2x^3+x^2+x^2-x-6=x^4-2x^3+2x^2-x-6=P(x)" /> ✓.</p>
                <p><strong>3)</strong> D&apos;après 1) (en remplaçant x par t) : <Math tex="t^2+t-6=(t-2)(t+3)" />, donc <Math tex="P(x)=(x^2-x-2)(x^2-x+3)" />. Or <Math tex="x^2-x-2=(x-2)(x+1)" /> et <Math tex="x^2-x+3" /> a pour discriminant <Math tex="1-12=-11<0" /> (irréductible). D&apos;où <Math tex="P(x)=(x-2)(x+1)(x^2-x+3)" />.</p>
                <p className="font-semibold text-green-700"><strong>4)</strong> P(x)=0 ⟺ x=2 ou x=−1 (le facteur x²−x+3 ne s&apos;annule jamais). {"S = {−1, 2}"}.</p>
              </div>
            }
          />

          {/* Exercice 13 */}
          <ExerciseCard
            id="13" index={13} title="Déterminer un polynôme à partir de deux racines"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Résoudre dans <Math tex="\mathbb R^2" /> le système <Math tex="\begin{cases}\tfrac a4+b=\tfrac54\\4a+b=-10\end{cases}" />.
                  </li>
                  <li>
                    On considère <Math tex="P(x)=2x^3+ax^2-3x+b" />, <Math tex="a,b\in\mathbb R" />. Déterminer a et b pour que <Math tex="\tfrac12" /> et 2 soient des racines de P.
                  </li>
                  <li>
                    On suppose <Math tex="a=-3" /> et <Math tex="b=2" />.
                    <br />a) Factoriser P(x).
                    <br />b) Résoudre <Math tex="P(x)<0" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="\tfrac a4+b=\tfrac54 \iff a+4b=5" />. Avec <Math tex="4a+b=-10" /> : en éliminant b (b=5−a d&apos;après 4b=5−a donc b=(5-a)/4, substituons), on résout : de la 1ère, <Math tex="a=5-4b" />, dans la 2ème : <Math tex="4(5-4b)+b=-10 \iff 20-15b=-10 \iff b=2" />, puis <Math tex="a=5-8=-3" />. <strong className="text-green-700">(a,b)=(−3,2).</strong></p>
                <p><strong>2)</strong> <Math tex="P(2)=0 \iff 16+4a-6+b=0 \iff 4a+b=-10" />. <Math tex="P(\tfrac12)=0 \iff \tfrac14+\tfrac a4-\tfrac32+b=0 \iff \tfrac a4+b=\tfrac54" />. On retrouve exactement le système de 1) : <strong className="text-green-700">a=−3, b=2.</strong></p>
                <p><strong>3a)</strong> <Math tex="P(x)=2x^3-3x^2-3x+2" />. Les racines 2 et 1/2 sont connues ; somme des trois racines <Math tex="=-\tfrac{-3}{2}=\tfrac32" />, donc la troisième racine <Math tex="r=\tfrac32-2-\tfrac12=-1" /> (vérifié : P(−1)=−2−3+3+2=0). <Math tex="P(x)=(x-2)(2x-1)(x+1)" />.</p>
                <p><strong>3b)</strong> Racines ordonnées −1, 1/2, 2 ; coefficient dominant 2&gt;0. <strong className="text-green-700">S = (−∞,−1) ∪ (1/2, 2).</strong></p>
              </div>
            }
          />

          {/* Exercice 14 */}
          <ExerciseCard
            id="14" index={14} title="Équation à paramètre et racines réciproques"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>Soit <Math tex="a\in\mathbb R" />. On considère <Math tex="(E): x^2+3ax+9(a-1)=0" />.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer a pour que 0 soit solution de (E).</li>
                  <li>Déterminer a pour que (E) admette une solution unique.</li>
                  <li>
                    On suppose <Math tex="a\neq1" /> et <Math tex="a\neq2" />, et soient α, β les solutions de (E).
                    <br />a) Montrer que <Math tex="\tfrac1\alpha" /> et <Math tex="\tfrac1\beta" /> vérifient <Math tex="9(a-1)x^2+3ax+1=0" />.
                    <br />b) Déterminer α et β en fonction de a.
                  </li>
                  <li>
                    On suppose <Math tex="a<1" />. Résoudre <Math tex="9(a-1)x^2+3ax+1>0" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> <Math tex="0+0+9(a-1)=0 \iff a=1" />.</p>
                <p><strong>2)</strong> <Math tex="\Delta=(3a)^2-36(a-1)=9a^2-36a+36=9(a-2)^2" />. Solution unique ssi <Math tex="\Delta=0 \iff a=2" />.</p>
                <p>
                  <strong>Remarque clé</strong> : en substituant <Math tex="x=-3" /> dans (E), on obtient toujours <Math tex="9-9a+9(a-1)=0" />. Donc <Math tex="\boxed{x=-3}" /> est <strong>toujours</strong> une racine de (E), quelle que soit la valeur de a. La somme des racines valant <Math tex="-3a" />, l&apos;autre racine est <Math tex="3-3a" />.
                </p>
                <p><strong>3a)</strong> Si <Math tex="\alpha" /> est racine, <Math tex="\alpha^2+3a\alpha+9(a-1)=0" />. En divisant par <Math tex="\alpha^2" /> : <Math tex="9(a-1)\left(\tfrac1\alpha\right)^2+3a\left(\tfrac1\alpha\right)+1=0" />, donc <Math tex="\tfrac1\alpha" /> vérifie bien <Math tex="9(a-1)x^2+3ax+1=0" />, et de même pour <Math tex="\tfrac1\beta" />.</p>
                <p><strong>3b)</strong> D&apos;après la remarque : <strong className="text-green-700">{"{α, β} = {−3, 3−3a}"}</strong> pour tout a ≠ 2.</p>
                <p><strong>4)</strong> D&apos;après 3a), les racines de <Math tex="9(a-1)x^2+3ax+1=0" /> sont <Math tex="\tfrac1\alpha=-\tfrac13" /> et <Math tex="\tfrac1\beta=\dfrac{1}{3-3a}=\dfrac{1}{3(1-a)}" />. Comme <Math tex="a<1" />, le coefficient <Math tex="9(a-1)<0" /> : la parabole est tournée vers le bas, donc <strong>positive entre ses racines</strong>. Comme <Math tex="a<1 \Rightarrow \dfrac1{3(1-a)}>0>-\tfrac13" /> : <strong className="text-green-700">S = (−1/3, 1/(3(1−a))).</strong></p>
              </div>
            }
          />

          {/* Exercice 15 */}
          <ExerciseCard
            id="15" index={15} title="Systèmes 2×2 : cas de Cramer et cas dégénérés"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Résoudre dans <Math tex="\mathbb R^2" /> les systèmes :{" "}
                    <Math tex="(S_1): \begin{cases}5x-2y=1\\-10x+4y=3\end{cases}" /> et{" "}
                    <Math tex="(S_2): \begin{cases}3x+y=7\\2x-y=8\end{cases}" />.
                  </li>
                  <li>
                    a) Résoudre <Math tex="\begin{cases}-x+3y=4\\x-2y=11\end{cases}" />.
                    <br />
                    b) En déduire les solutions de <Math tex="(S_1'): \begin{cases}-\sqrt x+\tfrac3y=4\\ \sqrt x-\tfrac2y=11\end{cases}" /> et{" "}
                    <Math tex="(S_2'): \begin{cases}-|x+1|+3y^2=4\\|x+1|-2y^2=11\end{cases}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p><strong>1)</strong> Pour <Math tex="(S_1)" /> : <Math tex="\Delta=5\times4-(-10)(-2)=20-20=0" />. <Math tex="\Delta_x=1\times4-3\times(-2)=10\neq 0" />. <strong className="text-green-700">S₁ = ∅</strong> (droites strictement parallèles).</p>
                <p>Pour <Math tex="(S_2)" /> : <Math tex="\Delta=3(-1)-2(1)=-5\neq0" />. <Math tex="\Delta_x=7(-1)-8(1)=-15" />, <Math tex="x=3" />. <Math tex="\Delta_y=3(8)-2(7)=10" />, <Math tex="y=-2" />. <strong className="text-green-700">{"S₂ = {(3, −2)}"}.</strong></p>
                <p><strong>2a)</strong> En additionnant les deux équations : <Math tex="2y=15\wedge...\!" /> — précisément, en ajoutant <Math tex="(-x+3y)+(x-2y)=4+11" /> on obtient <Math tex="y=15" />, puis <Math tex="x=11+2y=41" />. <strong className="text-green-700">(x,y)=(41,15).</strong></p>
                <p><strong>2b)</strong> Pour <Math tex="(S_1')" />, on pose <Math tex="u=\sqrt x\,(\ge0)" /> et <Math tex="v=\tfrac1y" /> : le système devient exactement <Math tex="-u+3v=4,\ u-2v=11" />, donc <Math tex="u=41" /> et <Math tex="v=15" />. D&apos;où <Math tex="\sqrt x=41 \Rightarrow x=1681" /> et <Math tex="\tfrac1y=15 \Rightarrow y=\tfrac1{15}" />. <strong className="text-green-700">(x,y) = (1681, 1/15).</strong></p>
                <p>Pour <Math tex="(S_2')" />, on pose <Math tex="U=|x+1|\,(\ge0)" /> et <Math tex="V=y^2\,(\ge0)" /> : même système, <Math tex="U=41" />, <Math tex="V=15" />. <Math tex="|x+1|=41 \Rightarrow x=40 \text{ ou } x=-42" /> ; <Math tex="y^2=15 \Rightarrow y=\pm\sqrt{15}" />. <strong className="text-green-700">4 solutions : (40, ±√15) et (−42, ±√15).</strong></p>
              </div>
            }
          />

          {/* Exercice 16 */}
          <ExerciseCard
            id="16" index={16} title="Inéquations et systèmes d'inéquations à deux inconnues"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Résoudre graphiquement dans <Math tex="\mathbb R^2" /> les inéquations :{" "}
                    <Math tex="x-2y+3\ge 0" /> ; <Math tex="2x-3\le 0" /> ; <Math tex="y+2>0" />.
                  </li>
                  <li>
                    Résoudre graphiquement les systèmes :{" "}
                    <Math tex="(S_1): \begin{cases}x-2y+1\ge0\\x+y-3\le0\end{cases}" />,{" "}
                    <Math tex="(S_2): \begin{cases}x+y-5<0\\3x-4y>0\end{cases}" />,{" "}
                    <Math tex="(S_3): \begin{cases}2x-y+4\ge0\\5x+2\le0\end{cases}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm text-foreground">
                <p><Math tex="x-2y+3\ge0 \iff y\le \tfrac{x+3}2" /> : demi-plan fermé <strong>sous</strong> la droite <Math tex="y=\tfrac{x+3}2" /> (test O(0,0) : 3≥0 vrai, O est dans la solution).</p>
                <p><Math tex="2x-3\le0 \iff x\le\tfrac32" /> : demi-plan fermé à <strong>gauche</strong> de la droite verticale <Math tex="x=\tfrac32" />.</p>
                <p><Math tex="y+2>0 \iff y>-2" /> : demi-plan ouvert <strong>au-dessus</strong> de la droite horizontale <Math tex="y=-2" />.</p>
                <p>
                  <strong>(S₁)</strong> : intersection du demi-plan fermé au-dessus de <Math tex="y=\tfrac{x+1}2" /> et du demi-plan fermé sous <Math tex="y=3-x" /> — la bande triangulaire délimitée par ces deux droites, frontières incluses.
                </p>
                <p>
                  <strong>(S₂)</strong> : intersection du demi-plan ouvert sous <Math tex="y=5-x" /> et du demi-plan ouvert sous <Math tex="y=\tfrac34x" /> (car <Math tex="3x-4y>0\iff y<\tfrac34x" />) — frontières exclues.
                </p>
                <p>
                  <strong>(S₃)</strong> : <Math tex="5x+2\le0 \iff x\le -\tfrac25" /> et <Math tex="2x-y+4\ge0\iff y\le 2x+4" /> — intersection des deux demi-plans fermés (une bande verticale limitée à gauche, coupée par la droite <Math tex="y=2x+4" />).
                </p>
              </div>
            }
          />

          {/* Problème 1 */}
          <ExerciseCard
            id="17" index={17} title="Problème · l'anniversaire et les cadeaux"
            items={
              <p className="text-sm text-foreground">
                Plusieurs personnes se sont réunies pour fêter un anniversaire. Chaque personne a apporté trois
                cadeaux à chacune des autres personnes. Sachant qu&apos;au total 468 cadeaux ont été déposés près
                du gâteau, combien de personnes y avait-il ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soit <Math tex="n" /> le nombre de personnes. Chacune offre 3 cadeaux à chacune des <Math tex="n-1" /> autres, donc au total <Math tex="3n(n-1)=468" />, soit <Math tex="n^2-n-156=0" />.</p>
                <p><Math tex="\Delta=1+624=625=25^2" />, <Math tex="n=\dfrac{1+25}2=13" /> (l&apos;autre racine, −12, est négative et rejetée).</p>
                <p className="font-semibold text-green-700">Il y avait 13 personnes.</p>
              </div>
            }
          />

          {/* Problème 2 */}
          <ExerciseCard
            id="18" index={18} title="Problème · l'âge du père et du fils"
            items={
              <p className="text-sm text-foreground">
                Un père a 25 ans de plus que son fils et le produit de leurs âges est 116. Calculer les âges du père
                et du fils.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soit <Math tex="x" /> l&apos;âge du fils ; le père a <Math tex="x+25" />. <Math tex="x(x+25)=116 \iff x^2+25x-116=0" />.</p>
                <p><Math tex="\Delta=625+464=1089=33^2" />, <Math tex="x=\dfrac{-25+33}2=4" /> (l&apos;autre racine est négative).</p>
                <p className="font-semibold text-green-700">Le fils a 4 ans, le père a 29 ans (vérification : 4×29=116).</p>
              </div>
            }
          />

          {/* Problème 3 */}
          <ExerciseCard
            id="19" index={19} title="Problème · les tarifs du théâtre et du concert"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>Une salle de spectacle propose des places de théâtre et de concert, à des tarifs différents.</p>
                <p>Ahmed réserve 2 places de théâtre et 4 places de concert : il paie 170 Dh.</p>
                <p>Ibrahim réserve 3 places de théâtre et 2 places de concert : il paie 135 Dh.</p>
                <p>Quels sont les tarifs respectifs ?</p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soient <Math tex="t" /> le prix d&apos;une place de théâtre et <Math tex="c" /> celui d&apos;une place de concert. <Math tex="\begin{cases}2t+4c=170\\3t+2c=135\end{cases}" />, soit <Math tex="\begin{cases}t+2c=85\\3t+2c=135\end{cases}" />.</p>
                <p>En soustrayant : <Math tex="2t=50 \iff t=25" />, puis <Math tex="c=\dfrac{85-25}2=30" />.</p>
                <p className="font-semibold text-green-700">Théâtre : 25 Dh ; concert : 30 Dh (vérification : 2×25+4×30=170 et 3×25+2×30=135).</p>
              </div>
            }
          />

          {/* Problème 4 */}
          <ExerciseCard
            id="20" index={20} title="Problème · trouver la position du point M"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>
                  Un triangle ABM (rectangle en B, avec <Math tex="AB=8" /> cm) et un triangle DCM (rectangle en C,
                  avec <Math tex="DC=4" /> cm) sont posés de part et d&apos;autre d&apos;une base commune{" "}
                  <Math tex="BC=5" /> cm, avec M sur la droite (BC). Trouver la position de M pour que{" "}
                  <Math tex="AM=DM" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  On munit la droite (BC) d&apos;un axe d&apos;origine B, avec C d&apos;abscisse 5. Soit{" "}
                  <Math tex="x" /> l&apos;abscisse de M. Comme <Math tex="ABM" /> est rectangle en B :{" "}
                  <Math tex="AM^2=AB^2+BM^2=64+x^2" />. Comme <Math tex="DCM" /> est rectangle en C, avec{" "}
                  <Math tex="CM=5-x" /> : <Math tex="DM^2=DC^2+CM^2=16+(5-x)^2" />.
                </p>
                <p>
                  <Math tex="AM=DM \iff 64+x^2=16+(5-x)^2=41-10x+x^2 \iff 64=41-10x \iff x=-\dfrac{23}{10}=-2{,}3" />.
                </p>
                <p className="font-semibold text-green-700">
                  M a pour abscisse −2,3 : il se trouve donc <strong>hors du segment [BC]</strong>, sur le
                  prolongement au-delà de B, à 2,3 cm de B (du côté opposé à C).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
