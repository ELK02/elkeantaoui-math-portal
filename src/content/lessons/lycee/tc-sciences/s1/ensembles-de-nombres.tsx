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
  kicker: "Tronc Commun Sciences · Semestre 1",
  title: "Les ensembles de nombres · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet sur les ensembles de nombres N, Z, D, Q et IR : définitions, notations, inclusions, règles de calcul sur les fractions, racine carrée, identités remarquables, puissances de 10 et écriture scientifique — suivi de 8 exercices corrigés en détail. Tronc Commun Sciences et Technologies, semestre 1.",
  heroTitle: "Les ensembles de nombres",
  heroSubtitle:
    "N, Z, D, Q, IR : cinq ensembles de nombres emboîtés les uns dans les autres, les règles de calcul qui vont avec, puis 8 exercices corrigés pas à pas.",
  footerNote: "Les ensembles de nombres · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "ensembles", label: "Les ensembles" },
    { id: "regles", label: "Règles de calcul" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ==================================================================== */
/*  Petits composants locaux                                            */
/* ==================================================================== */

/** Diagramme d'inclusion N ⊂ Z ⊂ D ⊂ Q ⊂ IR, en rectangles emboîtés. */
function SetsDiagram({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "#ffffff" : "#0f172a";
  const muted = dark ? "#a3a3a3" : "#64748b";
  const boxes = [
    { w: 260, h: 200, label: "IR", color: "#fb923c" },
    { w: 210, h: 160, label: "Q", color: "#f59e0b" },
    { w: 160, h: 122, label: "D", color: "#84cc16" },
    { w: 110, h: 84, label: "Z", color: "#22d3ee" },
    { w: 62, h: 46, label: "N", color: "#f472b6" },
  ];
  const cx = 140;
  const cy = 110;
  return (
    <svg viewBox="0 0 280 220" className="h-56 w-56 sm:h-72 sm:w-72">
      {boxes.map((b, i) => (
        <g key={b.label}>
          <rect
            x={cx - b.w / 2}
            y={cy - b.h / 2}
            width={b.w}
            height={b.h}
            rx={16}
            fill="none"
            stroke={i === boxes.length - 1 ? b.color : stroke}
            strokeWidth={1.6}
            opacity={i === boxes.length - 1 ? 1 : 0.75}
          />
          <text
            x={cx - b.w / 2 + 10}
            y={cy - b.h / 2 + 20}
            fontSize="13"
            fontWeight="700"
            fill={i === boxes.length - 1 ? b.color : muted}
          >
            {b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Carte pour l'une des cinq familles de nombres dans la section "Cours". */
function SetCard({ letter, title, children }: { letter: string; title: string; children: ReactNode }) {
  return (
    <article className="mb-5 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
          {letter}
        </span>
        <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
    </article>
  );
}

function Bullets({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-1.5 pl-5 text-sm text-foreground">{children}</ul>;
}

/** Une règle avec un intitulé, une formule encadrée, et des exemples. */
function RuleCard({
  label,
  title,
  formula,
  children,
}: {
  label: ReactNode;
  title: string;
  formula: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-sm font-bold text-foreground-muted">
          {label}
        </span>
        <h4 className="font-semibold text-foreground">{title}</h4>
      </div>
      <div className="mb-4 rounded-lg bg-surface-muted p-3 text-center text-lg font-semibold">{formula}</div>
      {children ? <div className="space-y-2">{children}</div> : null}
    </div>
  );
}

function ExampleRow({ children }: { children: ReactNode }) {
  return <div className="rounded-lg bg-surface-muted px-4 py-2.5 text-sm">{children}</div>;
}

/** Une identité remarquable, présentée dans une petite carte. */
function IdCard({ tex }: { tex: string }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface-muted p-4">
      <Math tex={tex} />
    </div>
  );
}

/* ---- Composants pour les exercices ---- */

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[11px] font-bold text-neutral-500 dark:bg-white/10 dark:text-neutral-300">
      {children}
    </span>
  );
}

function Item({ n, children }: { n: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <Pill>{n}</Pill>
      <span className="overflow-x-auto text-sm">{children}</span>
    </div>
  );
}

function CorrectionCard({ n, children }: { n: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <p className="mb-1.5 font-bold text-green-700">{n}</p>
      <div className="space-y-1.5 text-foreground">{children}</div>
    </div>
  );
}

/** Table de classement (Exercice 1) : appartenance de 9 nombres à N, Z, D, Q, IR. */
const EX1_ROWS: { label: string; belongs: [boolean, boolean, boolean, boolean, boolean] }[] = [
  { label: "3", belongs: [true, true, true, true, true] },
  { label: "\\dfrac{18}{3}", belongs: [true, true, true, true, true] },
  { label: "2\\times10^{-2}", belongs: [false, false, true, true, true] },
  { label: "\\dfrac{22}{5}", belongs: [false, false, true, true, true] },
  { label: "-\\dfrac{28}{4}", belongs: [false, true, true, true, true] },
  { label: "\\dfrac{5}{6}", belongs: [false, false, false, true, true] },
  { label: "\\dfrac{\\pi}{5}", belongs: [false, false, false, false, true] },
  { label: "\\sqrt{1{,}44}", belongs: [false, false, true, true, true] },
  { label: "-\\sqrt{64}", belongs: [false, true, true, true, true] },
];

function Ex1Table({ filled = false }: { filled?: boolean }) {
  const cols = ["N", "Z", "D", "Q", "R"];
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[440px] border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-border bg-surface-muted p-2" />
            {cols.map((c) => (
              <th key={c} className="border border-border bg-surface-muted p-2 text-center">
                <Math tex={c === "R" ? "\\mathbb{R}" : `\\mathbb{${c}}`} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {EX1_ROWS.map((row, i) => (
            <tr key={i}>
              <td className="border border-border p-2">
                <Math tex={row.label} />
              </td>
              {row.belongs.map((b, j) => (
                <td key={j} className="border border-border p-2 text-center">
                  {filled ? (
                    b ? (
                      <span className="font-bold text-green-700">✓</span>
                    ) : (
                      <span className="font-bold text-rose-500">✗</span>
                    )
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ==================================================================== */
/*  Page                                                                 */
/* ==================================================================== */

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "5", label: "ensembles emboîtés" },
          { value: "8", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#ensembles"
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
        visual={<SetsDiagram dark />}
      />

      {/* ===================== I. LES ENSEMBLES ===================== */}
      <LessonSection
        id="ensembles"
        kicker="01 · Cinq ensembles emboîtés"
        title="Les ensembles N, Z, D, Q et IR"
        tone="light"
        description="À chaque étape on construit un ensemble plus grand que le précédent, en y ajoutant des nombres qui n'existaient pas avant."
      >
        <SetCard letter="a" title="Les entiers naturels — N">
          <Callout variant="info" title="Ensemble N">
            Les nombres entiers naturels forment un ensemble appelé <strong>ensemble des entiers naturels</strong>,
            noté <Math tex="\mathbb{N}" />. En extension : <Math tex="\mathbb{N}=\{0,1,2,3,\ldots\}" />.
          </Callout>
          <Bullets>
            <li>
              L&apos;ensemble <Math tex="\{1,2,3,\ldots\}" /> est noté <Math tex="\mathbb{N}^{*}" /> (les entiers
              naturels <em>non nuls</em>) : <Math tex="\mathbb{N}^{*}\subset\mathbb{N}" />.
            </li>
          </Bullets>
        </SetCard>

        <SetCard letter="b" title="Les entiers relatifs — Z">
          <Callout variant="info" title="Ensemble Z">
            Les nombres entiers relatifs forment un ensemble appelé <strong>ensemble des entiers relatifs</strong>,
            noté <Math tex="\mathbb{Z}" />. En extension :{" "}
            <Math tex="\mathbb{Z}=\{\ldots,-3,-2,-1,0,1,2,3,\ldots\}" />.
          </Callout>
          <Bullets>
            <li>
              <Math tex="\mathbb{Z}^{*}=\{\ldots,-3,-2,-1,1,2,3,\ldots\}" /> (les entiers relatifs non nuls), avec{" "}
              <Math tex="\mathbb{Z}^{*}\subset\mathbb{Z}" />.
            </li>
            <li>
              <Math tex="\mathbb{Z}^{+}=\{0,1,2,3,\ldots\}=\mathbb{N}" /> : l&apos;ensemble des entiers positifs. On a
              donc <Math tex="\mathbb{N}\subset\mathbb{Z}" />.
            </li>
            <li>
              <Math tex="\mathbb{Z}^{+*}=\{1,2,3,\ldots\}=\mathbb{N}^{*}" /> : les entiers strictement positifs.
            </li>
            <li>
              <Math tex="\mathbb{Z}^{-}=\{0,-1,-2,-3,\ldots\}" /> : les entiers négatifs, avec{" "}
              <Math tex="\mathbb{Z}^{-}\subset\mathbb{Z}" />.
            </li>
            <li>
              <Math tex="\mathbb{Z}^{-*}=\{-1,-2,-3,\ldots\}" /> : les entiers strictement négatifs.
            </li>
          </Bullets>
          <Callout variant="warning" title="Remarque">
            Tout entier relatif est positif ou négatif : <Math tex="\mathbb{Z}^{-}\cup\mathbb{Z}^{+}=\mathbb{Z}" />.
          </Callout>
        </SetCard>

        <SetCard letter="c" title="Les nombres décimaux — D">
          <Callout variant="info" title="Définition">
            Un nombre décimal est un nombre qui peut s&apos;écrire avec un <strong>nombre fini</strong> de chiffres
            après la virgule. Par exemple <Math tex="-15{,}237" />, <Math tex="0{,}21" /> et{" "}
            <Math tex="\dfrac{3}{4}=0{,}75" /> sont des nombres décimaux ; mais{" "}
            <Math tex="\dfrac{2}{3}=0{,}6666\ldots" /> n&apos;est pas décimal, car ses chiffres après la virgule ne
            s&apos;arrêtent jamais.
          </Callout>
          <FormulaBlock
            tex="\mathbb{D}=\left\{\dfrac{a}{10^{p}}\ \middle|\ a\in\mathbb{Z},\ p\in\mathbb{N}\right\}"
            caption="l'ensemble des nombres décimaux"
          />
          <p className="text-sm text-foreground-muted">
            Par exemple : <Math tex="15{,}237=\dfrac{15237}{1000}=\dfrac{15237}{10^{3}}" /> et{" "}
            <Math tex="0{,}21=\dfrac{21}{100}=\dfrac{21}{10^{2}}" />.
          </p>
          <Callout variant="success" title="Remarque">
            Tout entier relatif est décimal : <Math tex="17=\dfrac{17}{10^{0}}\in\mathbb{D}" /> et{" "}
            <Math tex="-5=\dfrac{-5}{10^{0}}\in\mathbb{D}" />, d&apos;où <Math tex="\mathbb{Z}\subset\mathbb{D}" />.
          </Callout>
        </SetCard>

        <SetCard letter="d" title="Les nombres rationnels — Q">
          <Callout variant="info" title="Définition">
            On a <Math tex="\dfrac{2}{3}=0{,}6666\ldots\notin\mathbb{D}" />, mais <Math tex="\dfrac{2}{3}" /> est un{" "}
            <strong>nombre rationnel</strong> (du latin <em>ratio</em> = fraction). Chaque nombre rationnel peut
            s&apos;écrire sous la forme <Math tex="\dfrac{a}{b}" /> avec <Math tex="a" /> et <Math tex="b" /> deux
            entiers (<Math tex="b\neq0" />, on préfère <Math tex="b>0" />). L&apos;ensemble des nombres rationnels se
            note <Math tex="\mathbb{Q}" />.
          </Callout>
          <Bullets>
            <li>
              On définit de même <Math tex="\mathbb{Q}^{*}" />, <Math tex="\mathbb{Q}^{+}" /> et{" "}
              <Math tex="\mathbb{Q}^{-}" />.
            </li>
            <li>
              <Math tex="\dfrac{2}{3}\in\mathbb{Q}" /> mais <Math tex="\dfrac{2}{3}\notin\mathbb{D}" /> ;{" "}
              <Math tex="\dfrac{3}{4}\in\mathbb{Q}" /> et <Math tex="\dfrac{3}{4}\in\mathbb{D}" /> : tout nombre
              décimal est rationnel, donc <Math tex="\mathbb{D}\subset\mathbb{Q}" />, mais la réciproque est fausse.
            </li>
            <li>
              Tout nombre rationnel admet une infinité de représentants, par exemple :{" "}
              <Math tex="\dfrac{3}{4}=\dfrac{6}{8}=\dfrac{15}{20}=\dfrac{-3}{-4}" />. Le représentant privilégié est
              la fraction irréductible <Math tex="\dfrac{3}{4}" />.
            </li>
            <li>
              <Math tex="\dfrac{3}{4}" /> est une fraction, et <Math tex="0{,}75" /> en est le développement
              décimal.
            </li>
          </Bullets>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ExampleRow>
              <Math tex="\dfrac13=0{,}3333\ldots=0{,}\overline{3}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="\dfrac{1}{11}=0{,}090909\ldots=0{,}\overline{09}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="\dfrac{47}{37}=1{,}270270270\ldots=1{,}\overline{270}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="\dfrac{7}{101}=0{,}\overline{0693}" />
            </ExampleRow>
          </div>
          <Callout variant="success" title="Théorème">
            Dans le développement décimal de tout nombre rationnel apparaît une suite de chiffres qui se répète
            indéfiniment, appelée la <strong>période</strong> de ce nombre.
          </Callout>
        </SetCard>

        <SetCard letter="e" title="Les nombres réels — IR">
          <Callout variant="info" title="Exemples de nombres irrationnels">
            <Math tex="\sqrt2\approx1{,}41421356\ldots" /> et <Math tex="\pi\approx3{,}14159265\ldots" /> : leur
            écriture décimale est infinie et <strong>non périodique</strong>. Ce ne sont ni des décimaux, ni des
            rationnels.
          </Callout>
          <p className="text-sm text-foreground">
            Les nombres rationnels et les nombres irrationnels forment ensemble l&apos;<strong>ensemble des nombres
            réels</strong>, noté <Math tex="\mathbb{R}" />.
          </p>
          <Bullets>
            <li>
              <Math tex="\mathbb{R}^{*}" /> est l&apos;ensemble des réels non nuls.
            </li>
            <li>
              <Math tex="\mathbb{R}^{+}" /> est l&apos;ensemble des réels positifs, <Math tex="\mathbb{R}^{+*}" /> des
              réels strictement positifs.
            </li>
            <li>
              <Math tex="\mathbb{R}^{-}" /> est l&apos;ensemble des réels négatifs.
            </li>
            <li>
              <Math tex="\mathbb{R}^{+}\cup\mathbb{R}^{-}=\mathbb{R}" /> et{" "}
              <Math tex="\mathbb{R}^{+}\cap\mathbb{R}^{-}=\{0\}" />.
            </li>
          </Bullets>
        </SetCard>

        <div className="mt-8 grid items-center gap-6 rounded-2xl border border-border bg-surface-muted p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground-muted">
              À retenir · le résultat de toute la section
            </p>
            <FormulaBlock tex="\mathbb{N}\subset\mathbb{Z}\subset\mathbb{D}\subset\mathbb{Q}\subset\mathbb{R}" />
            <p className="mt-3 text-sm text-foreground-muted">
              Chaque ensemble contient tous ceux qui le précèdent dans la chaîne.
            </p>
          </div>
          <div className="flex justify-center">
            <SetsDiagram />
          </div>
        </div>

        <Callout variant="success" title="Exemple résolu · classer un nombre">
          <p className="mb-1.5">
            <strong>Énoncé :</strong> quelle est la nature de <Math tex="x=-\dfrac{9}{4}" /> ?
          </p>
          <p>
            <Math tex="x=-\dfrac94=-2{,}25" /> : la division s&apos;arrête (2 chiffres après la virgule), donc{" "}
            <Math tex="x" /> est un nombre <strong>décimal</strong> : <Math tex="x\in\mathbb{D}" />. Par conséquent{" "}
            <Math tex="x\in\mathbb{Q}" /> et <Math tex="x\in\mathbb{R}" />. En revanche <Math tex="x" /> n&apos;est
            pas un entier, donc <Math tex="x\notin\mathbb{Z}" /> et <Math tex="x\notin\mathbb{N}" />.
          </p>
        </Callout>
      </LessonSection>

      {/* ===================== II. RÈGLES DE CALCUL ===================== */}
      <LessonSection
        id="regles"
        kicker="02 · Les outils de calcul"
        title="Fractions, racine carrée, identités remarquables, puissances de 10"
        tone="muted"
        description="Les règles à connaître par cœur pour mener n'importe quel calcul dans IR."
      >
        <h3 className="mb-3 font-display text-lg font-bold text-foreground">a. Opérations sur les fractions</h3>
        <p className="mb-4 text-sm text-foreground-muted">
          Soient <Math tex="a,b,c,d" /> des réels, avec <Math tex="b\neq0" /> et <Math tex="d\neq0" />.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <RuleCard label="+" title="Addition" formula={<Math tex="\dfrac{a}{b}+\dfrac{c}{d}=\dfrac{ad+bc}{bd}" />}>
            <ExampleRow>
              <Math tex="\dfrac23+\dfrac14=\dfrac{2\times4+3\times1}{3\times4}=\dfrac{11}{12}" />
            </ExampleRow>
          </RuleCard>
          <RuleCard label="−" title="Soustraction" formula={<Math tex="\dfrac{a}{b}-\dfrac{c}{d}=\dfrac{ad-bc}{bd}" />}>
            <ExampleRow>
              <Math tex="\dfrac56-\dfrac14=\dfrac{5\times4-6\times1}{6\times4}=\dfrac{14}{24}=\dfrac{7}{12}" />
            </ExampleRow>
          </RuleCard>
          <RuleCard label="×" title="Multiplication" formula={<Math tex="\dfrac{a}{b}\times\dfrac{c}{d}=\dfrac{ac}{bd}" />}>
            <ExampleRow>
              <Math tex="\dfrac23\times\dfrac57=\dfrac{10}{21}" />
            </ExampleRow>
          </RuleCard>
          <RuleCard
            label="÷"
            title="Division"
            formula={<Math tex="\dfrac{\ \dfrac{a}{b}\ }{\dfrac{c}{d}}=\dfrac{a}{b}\times\dfrac{d}{c}=\dfrac{ad}{bc}" />}
          >
            <ExampleRow>
              <Math tex="\dfrac23\div\dfrac57=\dfrac23\times\dfrac75=\dfrac{14}{15}" />
            </ExampleRow>
          </RuleCard>
        </div>

        <h3 className="mt-10 mb-3 font-display text-lg font-bold text-foreground">b. Racine carrée</h3>
        <Callout variant="info" title="Définition">
          La racine carrée d&apos;un nombre positif <Math tex="x" /> est le nombre positif <Math tex="a" /> tel que{" "}
          <Math tex="a^{2}=x" />. On le note <Math tex="a=\sqrt{x}" /> (c&apos;est-à-dire{" "}
          <Math tex="\left(\sqrt{x}\right)^{2}=x" />).
        </Callout>
        <Callout variant="warning" title="Attention">
          <Math tex="\sqrt{x}" /> n&apos;est défini que pour <Math tex="x\geqslant0" />, et{" "}
          <Math tex="\sqrt{x}\geqslant0" /> toujours.
        </Callout>

        <h3 className="mt-10 mb-3 font-display text-lg font-bold text-foreground">c. Identités remarquables</h3>
        <p className="mb-4 text-sm text-foreground-muted">
          Pour tous réels <Math tex="a" /> et <Math tex="b" /> :
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <IdCard tex="(a+b)^{2}=a^{2}+2ab+b^{2}" />
          <IdCard tex="(a-b)^{2}=a^{2}-2ab+b^{2}" />
          <IdCard tex="(a+b)(a-b)=a^{2}-b^{2}" />
          <IdCard tex="(a+b)^{3}=a^{3}+3a^{2}b+3ab^{2}+b^{3}" />
          <IdCard tex="(a-b)^{3}=a^{3}-3a^{2}b+3ab^{2}-b^{3}" />
          <IdCard tex="a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})" />
          <IdCard tex="a^{3}+b^{3}=(a+b)(a^{2}-ab+b^{2})" />
        </div>

        <h3 className="mt-10 mb-3 font-display text-lg font-bold text-foreground">d. Puissances de 10</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <FormulaBlock tex="10^{n}=\underbrace{10\times10\times\cdots\times10}_{n\ \text{facteurs}}" caption="= 1 suivi de n zéros" />
            <div className="mt-3 space-y-2">
              <ExampleRow>
                <Math tex="10^{3}=1\,000" /> (1 suivi de 3 zéros)
              </ExampleRow>
              <ExampleRow>
                <Math tex="10^{6}=1\,000\,000" />
              </ExampleRow>
            </div>
          </div>
          <div>
            <FormulaBlock tex="10^{-n}=\dfrac{1}{10^{n}}" caption="nombre décimal avec n chiffres après la virgule" />
            <div className="mt-3 space-y-2">
              <ExampleRow>
                <Math tex="10^{-1}=0{,}1\ ;\quad 10^{-2}=0{,}01\ ;\quad 10^{-3}=0{,}001" />
              </ExampleRow>
            </div>
          </div>
        </div>

        <h3 className="mt-10 mb-3 font-display text-lg font-bold text-foreground">e. Écriture scientifique</h3>
        <Callout variant="info" title="Définition">
          Écrire un nombre non nul <Math tex="b" /> en écriture scientifique, c&apos;est l&apos;écrire sous la forme{" "}
          <Math tex="b=a\times10^{n}" /> avec <Math tex="1\leqslant|a|<10" /> et <Math tex="n\in\mathbb{Z}" />.
        </Callout>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <RuleCard
            label={<Math tex="|b|\geqslant1" />}
            title="n est positif ou nul"
            formula={<Math tex="n\geqslant0" />}
          >
            <ExampleRow>
              <Math tex="5{,}4=5{,}4\times10^{0}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="47{,}3=4{,}73\times10^{1}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="-5110=-5{,}11\times10^{3}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="59{,}4=5{,}94\times10^{1}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="\dfrac74=1{,}75=1{,}75\times10^{0}" />
            </ExampleRow>
          </RuleCard>
          <RuleCard
            label={<Math tex="|b|<1" />}
            title="n est strictement négatif"
            formula={<Math tex="n<0" />}
          >
            <ExampleRow>
              <Math tex="-0{,}4=-4\times10^{-1}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="0{,}043=4{,}3\times10^{-2}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="-0{,}00757=-7{,}57\times10^{-3}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="-\dfrac25=-0{,}4=-4\times10^{-1}" />
            </ExampleRow>
            <ExampleRow>
              <Math tex="-0{,}00009999=-9{,}999\times10^{-5}" />
            </ExampleRow>
          </RuleCard>
        </div>
      </LessonSection>

      {/* ===================== III. EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="8 exercices corrigés"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier la correction détaillée."
      >
        <ExerciseGroup total={8} celebrationTitle="Bravo, les 8 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les ensembles de nombres.">
          {/* ---------- Exercice 1 ---------- */}
          <ExerciseCard
            id="1"
            index={1}
            title="Appartenance aux ensembles N, Z, D, Q, IR"
            itemsLabel="9 nombres à classer"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground">
                  Indiquer, dans chacun des cas, si le nombre appartient ou non à chacun des ensembles proposés.
                </p>
                <Ex1Table />
              </div>
            }
            correction={
              <div className="space-y-4">
                <Ex1Table filled />
                <div className="space-y-1.5 text-sm">
                  <p>
                    <Math tex="2\times10^{-2}=0{,}02" />, <Math tex="\dfrac{22}{5}=4{,}4" /> et{" "}
                    <Math tex="\sqrt{1{,}44}=1{,}2" /> : la division (ou la racine) s&apos;arrête, ce sont des
                    nombres <strong>décimaux</strong>, mais pas des entiers.
                  </p>
                  <p>
                    <Math tex="\dfrac56=0{,}8333\ldots" /> : le développement ne s&apos;arrête jamais, c&apos;est un
                    rationnel <strong>non décimal</strong>.
                  </p>
                  <p>
                    <Math tex="\dfrac{\pi}{5}" /> : <Math tex="\pi" /> est irrationnel, donc <Math tex="\dfrac{\pi}{5}" />{" "}
                    aussi — il n&apos;appartient à aucun des ensembles <Math tex="\mathbb{N}" />,{" "}
                    <Math tex="\mathbb{Z}" />, <Math tex="\mathbb{D}" />, <Math tex="\mathbb{Q}" />, seulement à{" "}
                    <Math tex="\mathbb{R}" />.
                  </p>
                  <p>
                    <Math tex="-\dfrac{28}{4}=-7" /> et <Math tex="-\sqrt{64}=-8" /> : ce sont des entiers relatifs
                    négatifs.
                  </p>
                </div>
              </div>
            }
          />

          {/* ---------- Exercice 2 ---------- */}
          <ExerciseCard
            id="2"
            index={2}
            title="∈, ∉, ⊂ ou ⊄ ? Et quelle est la nature de..."
            itemsLabel="6 symboles + 5 natures"
            items={
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    1) Compléter par <Math tex="\in" />, <Math tex="\notin" />, <Math tex="\subset" /> ou{" "}
                    <Math tex="\not\subset" /> :
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <Item n="a">
                      <Math tex="3\ \ldots\ \mathbb{Z}" />
                    </Item>
                    <Item n="b">
                      <Math tex="\dfrac54\ \ldots\ \mathbb{D}" />
                    </Item>
                    <Item n="c">
                      <Math tex="\sqrt2\ \ldots\ \mathbb{Q}" />
                    </Item>
                    <Item n="d">
                      <Math tex="\dfrac13\ \ldots\ \mathbb{D}" />
                    </Item>
                    <Item n="e">
                      <Math tex="\mathbb{Q}\ \ldots\ \mathbb{D}" />
                    </Item>
                    <Item n="f">
                      <Math tex="\mathbb{N}\ \ldots\ \mathbb{Q}" />
                    </Item>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    2) Sans calculatrice, donner la nature des nombres suivants :
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <Item n="1">
                      <Math tex="-5{,}6" />
                    </Item>
                    <Item n="2">
                      <Math tex="\dfrac34" />
                    </Item>
                    <Item n="3">
                      <Math tex="\dfrac45" />
                    </Item>
                    <Item n="4">
                      <Math tex="\dfrac25" />
                    </Item>
                    <Item n="5">
                      <Math tex="\sqrt{6{,}25}" />
                    </Item>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <CorrectionCard n="a)">
                    <Math tex="3\in\mathbb{Z}" /> (3 est un élément de <Math tex="\mathbb{Z}" />)
                  </CorrectionCard>
                  <CorrectionCard n="b)">
                    <Math tex="\dfrac54=1{,}25" />, donc <Math tex="\dfrac54\in\mathbb{D}" />
                  </CorrectionCard>
                  <CorrectionCard n="c)">
                    <Math tex="\sqrt2" /> est irrationnel : <Math tex="\sqrt2\notin\mathbb{Q}" />
                  </CorrectionCard>
                  <CorrectionCard n="d)">
                    <Math tex="\dfrac13=0{,}333\ldots" /> ne s&apos;arrête pas : <Math tex="\dfrac13\notin\mathbb{D}" />
                  </CorrectionCard>
                  <CorrectionCard n="e)">
                    <Math tex="\mathbb{D}\subset\mathbb{Q}" />, pas l&apos;inverse : <Math tex="\mathbb{Q}\not\subset\mathbb{D}" />
                  </CorrectionCard>
                  <CorrectionCard n="f)">
                    <Math tex="\mathbb{N}\subset\mathbb{Q}" />
                  </CorrectionCard>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <CorrectionCard n="1.">
                    <Math tex="-5{,}6" /> : nombre <strong>décimal</strong> (donc aussi rationnel et réel).
                  </CorrectionCard>
                  <CorrectionCard n="2.">
                    <Math tex="\dfrac34=0{,}75" /> : <strong>décimal</strong>.
                  </CorrectionCard>
                  <CorrectionCard n="3.">
                    <Math tex="\dfrac45=0{,}8" /> : <strong>décimal</strong>.
                  </CorrectionCard>
                  <CorrectionCard n="4.">
                    <Math tex="\dfrac25=0{,}4" /> : <strong>décimal</strong>.
                  </CorrectionCard>
                  <CorrectionCard n="5.">
                    <Math tex="\sqrt{6{,}25}=2{,}5" /> (car <Math tex="2{,}5^{2}=6{,}25" />) : <strong>décimal</strong>.
                  </CorrectionCard>
                </div>
              </div>
            }
          />

          {/* ---------- Exercice 3 ---------- */}
          <ExerciseCard
            id="3"
            index={3}
            title="Calculer et simplifier"
            itemsLabel="5 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A">
                  <Math tex="A=\left((-3+5)\times\dfrac27\right)\div\dfrac{5}{21}" />
                </Item>
                <Item n="B">
                  <Math tex="B=\dfrac{2+\dfrac34}{5}\times\dfrac{40}{3}-\dfrac76" />
                </Item>
                <Item n="C">
                  <Math tex="C=\dfrac{2+\dfrac34-\dfrac13}{3+\dfrac32-\dfrac16}" />
                </Item>
                <Item n="D">
                  <Math tex="D=\dfrac{(3+\sqrt5)(3-\sqrt5)}{(2-\sqrt7)(2+\sqrt7)}" />
                </Item>
                <Item n="E">
                  <Math tex="E=\dfrac{(\sqrt7+\sqrt2)^{2}+(\sqrt7-\sqrt2)^{2}}{(\sqrt5+\sqrt2)(\sqrt5-\sqrt2)}" />
                </Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A.">
                  <p>
                    <Math tex="-3+5=2" />, donc <Math tex="2\times\dfrac27=\dfrac47" />.
                  </p>
                  <p>
                    <Math tex="A=\dfrac47\div\dfrac{5}{21}=\dfrac47\times\dfrac{21}{5}=\dfrac{84}{35}" />
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="A=\dfrac{12}{5}=2{,}4" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="B.">
                  <p>
                    <Math tex="2+\dfrac34=\dfrac{11}{4}" />, donc <Math tex="\dfrac{11/4}{5}=\dfrac{11}{20}" />.
                  </p>
                  <p>
                    <Math tex="\dfrac{11}{20}\times\dfrac{40}{3}=\dfrac{22}{3}" />, puis{" "}
                    <Math tex="\dfrac{22}{3}-\dfrac76=\dfrac{44}{6}-\dfrac76" />
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="B=\dfrac{37}{6}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="C.">
                  <p>
                    Numérateur : <Math tex="2+\dfrac34-\dfrac13=\dfrac{24+9-4}{12}=\dfrac{29}{12}" />
                  </p>
                  <p>
                    Dénominateur : <Math tex="3+\dfrac32-\dfrac16=\dfrac{18+9-1}{6}=\dfrac{26}{6}=\dfrac{13}{3}" />
                  </p>
                  <p>
                    <Math tex="C=\dfrac{29/12}{13/3}=\dfrac{29}{12}\times\dfrac{3}{13}=\dfrac{87}{156}" />
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="C=\dfrac{29}{52}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="D.">
                  <p>
                    Identité <Math tex="(x+y)(x-y)=x^{2}-y^{2}" /> deux fois :
                  </p>
                  <p>
                    <Math tex="(3+\sqrt5)(3-\sqrt5)=3^{2}-5=4" /> et <Math tex="(2-\sqrt7)(2+\sqrt7)=2^{2}-7=-3" />
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="D=\dfrac{4}{-3}=-\dfrac43" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="E.">
                  <p>
                    <Math tex="(\sqrt7+\sqrt2)^{2}=9+2\sqrt{14}" /> et <Math tex="(\sqrt7-\sqrt2)^{2}=9-2\sqrt{14}" />,
                    la somme vaut <Math tex="18" />.
                  </p>
                  <p>
                    <Math tex="(\sqrt5+\sqrt2)(\sqrt5-\sqrt2)=5-2=3" />
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="E=\dfrac{18}{3}=6" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />

          {/* ---------- Exercice 4 ---------- */}
          <ExerciseCard
            id="4"
            index={4}
            title="Développer puis simplifier"
            itemsLabel="6 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A">
                  <Math tex="A=\left(\dfrac{x^{3}}{2}-\dfrac{5x^{2}}{4}-1\right)(4x^{2}-2)" />
                </Item>
                <Item n="B">
                  <Math tex="B=(x^{2}+2)^{2}-(2x^{2}-1)^{2}" />
                </Item>
                <Item n="C">
                  <Math tex="C=(x-2)^{3}-(x+2)^{3}" />
                </Item>
                <Item n="D">
                  <Math tex="D=\left(\dfrac{a}{3}-ab^{2}\right)^{3}" />
                </Item>
                <Item n="E">
                  <Math tex="E=(x+y+z)^{2}" />
                </Item>
                <Item n="F">
                  <Math tex="F=\left(\dfrac45ac+\dfrac13bd\right)\left(\dfrac34ab-\dfrac23cd\right)" />
                </Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A.">
                  <p>On distribue chaque terme sur <Math tex="(4x^2-2)" />, puis on réduit :</p>
                  <p className="font-bold text-green-700">
                    <Math tex="A=2x^{5}-5x^{4}-x^{3}-\dfrac32x^{2}+2" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="B.">
                  <p>
                    <Math tex="(x^2+2)^2=x^4+4x^2+4" /> et <Math tex="(2x^2-1)^2=4x^4-4x^2+1" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="B=-3x^{4}+8x^{2}+3" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="C.">
                  <p>
                    <Math tex="(x-2)^3=x^3-6x^2+12x-8" /> et <Math tex="(x+2)^3=x^3+6x^2+12x+8" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="C=-12x^{2}-16" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="D.">
                  <p>
                    Avec <Math tex="(p-q)^3=p^3-3p^2q+3pq^2-q^3" />, <Math tex="p=\dfrac{a}{3}" />,{" "}
                    <Math tex="q=ab^2" /> :
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="D=\dfrac{a^{3}}{27}-\dfrac{a^{3}b^{2}}{3}+a^{3}b^{4}-a^{3}b^{6}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="E.">
                  <p>Identité à trois termes :</p>
                  <p className="font-bold text-green-700">
                    <Math tex="E=x^{2}+y^{2}+z^{2}+2xy+2xz+2yz" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="F.">
                  <p>On développe les quatre produits terme à terme :</p>
                  <p className="font-bold text-green-700">
                    <Math tex="F=\dfrac35a^{2}bc+\dfrac14ab^{2}d-\dfrac{8}{15}ac^{2}d-\dfrac29bcd^{2}" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />

          {/* ---------- Exercice 5 ---------- */}
          <ExerciseCard
            id="5"
            index={5}
            title="Factoriser"
            itemsLabel="4 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A">
                  <Math tex="A=(a+b)^{2}(a^{2}b-4b)-(a^{2}-b^{2})(a+b)" />
                </Item>
                <Item n="B">
                  <Math tex="B=x(a-b)+3(b-a)+(a-b)^{2}" />
                </Item>
                <Item n="C">
                  <Math tex="C=1+9x+27x^{2}+27x^{3}" />
                </Item>
                <Item n="D">
                  <Math tex="D=(x^{2}+2)^{2}-(2x^{2}-1)^{2}" />
                </Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A.">
                  <p>
                    <Math tex="a^{2}b-4b=b(a-2)(a+2)" /> et <Math tex="a^{2}-b^{2}=(a-b)(a+b)" />, donc{" "}
                    <Math tex="(a^{2}-b^{2})(a+b)=(a-b)(a+b)^{2}" />.
                  </p>
                  <p>
                    On met <Math tex="(a+b)^{2}" /> en facteur commun :
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="A=(a+b)^{2}\big(a^{2}b-a-3b\big)" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="B.">
                  <p>
                    <Math tex="3(b-a)=-3(a-b)" />, donc <Math tex="B=x(a-b)-3(a-b)+(a-b)^{2}" />.
                  </p>
                  <p>
                    On met <Math tex="(a-b)" /> en facteur commun :
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="B=(a-b)(a-b+x-3)" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="C.">
                  <p>
                    On reconnaît <Math tex="(1+3x)^{3}=1+3(3x)+3(3x)^{2}+(3x)^{3}" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="C=(1+3x)^{3}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="D.">
                  <p>
                    Différence de carrés avec <Math tex="M=x^{2}+2" />, <Math tex="N=2x^{2}-1" /> :{" "}
                    <Math tex="M-N=3-x^{2}" />, <Math tex="M+N=3x^{2}+1" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="D=(3-x^{2})(3x^{2}+1)" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />

          {/* ---------- Exercice 6 ---------- */}
          <ExerciseCard
            id="6"
            index={6}
            title="Factoriser et simplifier"
            itemsLabel="5 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A">
                  <Math tex="A=\dfrac{4(2x-3y)^{2}}{9y^{2}-4x^{2}}" />
                </Item>
                <Item n="B">
                  <Math tex="B=\dfrac{a^{6}-b^{6}}{(a+b)^{3}(a^{3}-b^{3})}" />
                </Item>
                <Item n="C">
                  <Math tex="C=\dfrac{2x^{3}-4x^{2}+2x}{6x^{2}-6}" />
                </Item>
                <Item n="D">
                  <Math tex="D=\dfrac{x^{8}-1}{(x^{4}+1)(x^{2}-1)}" />
                </Item>
                <Item n="E">
                  <Math tex="E=\dfrac{9x^{2}-12x+4}{4-9x^{2}}" />
                </Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="A.">
                  <p>
                    <Math tex="9y^{2}-4x^{2}=(3y-2x)(3y+2x)=-(2x-3y)(2x+3y)" />.
                  </p>
                  <p>On simplifie par <Math tex="(2x-3y)" /> :</p>
                  <p className="font-bold text-green-700">
                    <Math tex="A=\dfrac{-4(2x-3y)}{2x+3y}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="B.">
                  <p>
                    <Math tex="a^{6}-b^{6}=(a-b)(a+b)(a^{2}+ab+b^{2})(a^{2}-ab+b^{2})" /> et{" "}
                    <Math tex="a^{3}-b^{3}=(a-b)(a^{2}+ab+b^{2})" />.
                  </p>
                  <p>On simplifie par <Math tex="(a-b)(a^{2}+ab+b^{2})" /> :</p>
                  <p className="font-bold text-green-700">
                    <Math tex="B=\dfrac{a^{2}-ab+b^{2}}{(a+b)^{2}}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="C.">
                  <p>
                    <Math tex="2x^{3}-4x^{2}+2x=2x(x-1)^{2}" /> et <Math tex="6x^{2}-6=6(x-1)(x+1)" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="C=\dfrac{x(x-1)}{3(x+1)}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="D.">
                  <p>
                    <Math tex="x^{8}-1=(x^{4}-1)(x^{4}+1)=(x^{2}-1)(x^{2}+1)(x^{4}+1)" />.
                  </p>
                  <p>On simplifie par <Math tex="(x^{4}+1)(x^{2}-1)" /> :</p>
                  <p className="font-bold text-green-700">
                    <Math tex="D=x^{2}+1" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="E.">
                  <p>
                    <Math tex="9x^{2}-12x+4=(3x-2)^{2}" /> et <Math tex="4-9x^{2}=-(3x-2)(3x+2)" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="E=\dfrac{-(3x-2)}{3x+2}" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />

          {/* ---------- Exercice 7 ---------- */}
          <ExerciseCard
            id="7"
            index={7}
            title="Puissances : simplifier, calculer, écriture scientifique"
            itemsLabel="a, b réels non nuls"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground">
                  On considère l&apos;expression <Math tex="H" /> telle que :
                </p>
                <div className="overflow-x-auto rounded-lg border border-border p-4">
                  <Math tex="H=\dfrac{b\,a^{-4}\times(a^{-3}\times b)^{-5}}{a^{11}\times(a\times b^{2})^{4}\times(b)^{2}}" />
                </div>
                <ol className="list-decimal space-y-1.5 pl-5 text-sm text-foreground">
                  <li>
                    Montrer que <Math tex="H=a^{-4}\times b^{-14}" />.
                  </li>
                  <li>
                    Calculer la valeur de <Math tex="H" /> pour <Math tex="a=2" /> et <Math tex="b=10^{-2}" />.
                  </li>
                  <li>Écrire le résultat trouvé sous forme d&apos;écriture scientifique.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="1.">
                  <p>
                    Numérateur : <Math tex="b\,a^{-4}\times(a^{-3}b)^{-5}=b\,a^{-4}\times a^{15}b^{-5}=a^{11}b^{-4}" />
                  </p>
                  <p>
                    Dénominateur : <Math tex="a^{11}\times(ab^{2})^{4}\times b^{2}=a^{11}\times a^{4}b^{8}\times b^{2}=a^{15}b^{10}" />
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="H=\dfrac{a^{11}b^{-4}}{a^{15}b^{10}}=a^{11-15}\,b^{-4-10}=a^{-4}\times b^{-14}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="2.">
                  <p>
                    <Math tex="a^{-4}=2^{-4}=\dfrac{1}{16}=0{,}0625" /> et{" "}
                    <Math tex="b^{-14}=(10^{-2})^{-14}=10^{28}" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="H=0{,}0625\times10^{28}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="3.">
                  <p>
                    <Math tex="0{,}0625=6{,}25\times10^{-2}" />, donc :
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="H=6{,}25\times10^{26}" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />

          {/* ---------- Exercice 8 ---------- */}
          <ExerciseCard
            id="8"
            index={8}
            title="Donner l'écriture scientifique"
            itemsLabel="3 expressions"
            items={
              <div className="space-y-3">
                <Item n="A">
                  <Math tex="A=16\times10^{-19}+840\times10^{-10}" />
                </Item>
                <Item n="B">
                  <Math tex="B=\dfrac{50\times10^{-7}+1{,}5\times10^{-6}+800\times10^{-8}}{0{,}25\times10^{12}+85\times10^{10}}" />
                </Item>
                <Item n="C">
                  <Math tex="C=\dfrac{5\times10^{-17}+1{,}5\times10^{-16}+800\times10^{-18}}{0{,}25\times10^{12}+85\times10^{10}}" />
                </Item>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="A.">
                  <p>
                    <Math tex="16\times10^{-19}=1{,}6\times10^{-18}" /> et <Math tex="840\times10^{-10}=8{,}4\times10^{-8}" />.
                  </p>
                  <p>
                    <Math tex="10^{-18}" /> est neuf ordres de grandeur plus petit que <Math tex="10^{-8}" /> : le
                    premier terme est totalement négligeable devant le second.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="A\approx8{,}4\times10^{-8}" /> (valeur exacte : <Math tex="8{,}40000000016\times10^{-8}" />)
                  </p>
                </CorrectionCard>
                <CorrectionCard n="B.">
                  <p>
                    Numérateur, tout en <Math tex="\times10^{-6}" /> : <Math tex="5\times10^{-6}+1{,}5\times10^{-6}+8\times10^{-6}=14{,}5\times10^{-6}=1{,}45\times10^{-5}" />
                  </p>
                  <p>
                    Dénominateur, tout en <Math tex="\times10^{11}" /> : <Math tex="2{,}5\times10^{11}+8{,}5\times10^{11}=11\times10^{11}=1{,}1\times10^{12}" />
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="B=\dfrac{1{,}45\times10^{-5}}{1{,}1\times10^{12}}\approx1{,}32\times10^{-17}" />
                  </p>
                </CorrectionCard>
                <CorrectionCard n="C.">
                  <p>
                    Numérateur, tout en <Math tex="\times10^{-18}" /> : <Math tex="50\times10^{-18}+150\times10^{-18}+800\times10^{-18}=1000\times10^{-18}=10^{-15}" />
                  </p>
                  <p>
                    Le dénominateur est le même qu&apos;en <strong>B.</strong> : <Math tex="1{,}1\times10^{12}" />.
                  </p>
                  <p className="font-bold text-green-700">
                    <Math tex="C=\dfrac{10^{-15}}{1{,}1\times10^{12}}\approx9{,}09\times10^{-28}" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
