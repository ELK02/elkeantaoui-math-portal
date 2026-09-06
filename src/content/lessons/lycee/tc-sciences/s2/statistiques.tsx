import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  FormulaBlock,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Statistiques · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet de statistiques : vocabulaire (population, caractère, effectifs, fréquences, pourcentages), paramètres de position (mode, moyenne, médiane), paramètres de dispersion (étendue, écart-moyen, variance, écart-type), diagrammes et histogrammes, avec 13 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 2.",
  kicker: "Tronc Commun Sciences · Semestre 2",
  heroTitle: "Statistiques",
  heroSubtitle:
    "Vocabulaire, moyenne, médiane, mode, écart-moyen, variance, écart-type et diagrammes statistiques : le cours complet, puis 13 exercices corrigés pas à pas.",
  footerNote: "Statistiques · Mathématiques, Tronc Commun Sciences et Technologies, semestre 2.",
  sections: [
    { id: "cours-vocabulaire", label: "Vocabulaire" },
    { id: "cours-position", label: "Position" },
    { id: "cours-dispersion", label: "Dispersion" },
    { id: "cours-diagrammes", label: "Diagrammes" },
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

/** Green "verified result" chip. */
function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-green-500/30 bg-green-100/60 px-3 py-1.5 text-sm font-semibold text-green-800">
      ✓ {children}
    </span>
  );
}

function Chart({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-border bg-surface p-4">{children}</div>;
}

/** Simple table renderer: rows[0] is the header row. */
function DataTable({ rows, highlight = [] }: { rows: ReactNode[][]; highlight?: number[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-max border-collapse text-center text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`${i < rows.length - 1 ? "border-b border-border" : ""} ${
                highlight.includes(i) ? "bg-green-100/60 font-semibold text-green-700" : i === 0 ? "bg-surface-muted font-semibold" : ""
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2 whitespace-nowrap ${
                    j === 0 ? "text-left font-medium text-foreground-muted" : "border-l border-border"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Equal-width bar chart. Heights (px) are pre-computed exactly from the data (max bar = 140px). */
function BarChart({ bars }: { bars: { label: ReactNode; value: ReactNode; heightPx: number }[] }) {
  return (
    <div className="flex items-end gap-2 overflow-x-auto rounded-xl border border-border bg-surface p-4" style={{ minHeight: 190 }}>
      {bars.map((b, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1" style={{ minWidth: 30 }}>
          <span className="text-xs font-semibold text-foreground">{b.value}</span>
          <div className="w-full rounded-t bg-indigo-500" style={{ height: `${b.heightPx}px` }} />
          <span className="text-[11px] text-foreground-muted">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Variable-width histogram. Heights and widths are pre-computed exactly from effectif/amplitude. */
function Histogram({ bars }: { bars: { label: ReactNode; value: ReactNode; heightPx: number; widthPct: number }[] }) {
  return (
    <div className="flex items-end gap-0.5 overflow-x-auto rounded-xl border border-border bg-surface p-4" style={{ minHeight: 190 }}>
      {bars.map((b, i) => (
        <div key={i} className="flex flex-col items-center gap-1" style={{ width: `${b.widthPct}%`, minWidth: 40 }}>
          <span className="text-[11px] font-semibold text-foreground">{b.value}</span>
          <div className="w-full rounded-t bg-sky-500" style={{ height: `${b.heightPx}px` }} />
          <span className="text-[10px] text-foreground-muted">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Pie chart via conic-gradient. Boundaries (in degrees) are pre-computed exactly from the data. */
function PieChart({
  segments,
  size = 170,
}: {
  segments: { color: string; from: number; to: number; label: string }[];
  size?: number;
}) {
  const stops = segments.map((s) => `${s.color} ${s.from}deg ${s.to}deg`).join(", ");
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <div className="rounded-full" style={{ width: size, height: size, background: `conic-gradient(${stops})` }} />
      <div className="space-y-1.5">
        {segments.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="h-3 w-3 rounded-sm" style={{ background: s.color }} />
            <span className="text-foreground-muted">{s.label}</span>
          </div>
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
          { value: "9", label: "notions du cours" },
          { value: "13", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-vocabulaire"
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
          <svg viewBox="0 0 200 160" className="h-44 w-52 sm:h-52 sm:w-60">
            <line x1="20" y1="10" x2="20" y2="140" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
            <line x1="20" y1="140" x2="190" y2="140" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
            <rect x="35" y="98" width="24" height="42" fill="#ffffff" fillOpacity="0.35" rx="2" />
            <rect x="75" y="65" width="24" height="75" fill="#fb923c" rx="2" />
            <rect x="115" y="10" width="24" height="130" fill="#ffffff" fillOpacity="0.55" rx="2" />
            <rect x="155" y="87" width="24" height="53" fill="#ffffff" fillOpacity="0.35" rx="2" />
          </svg>
        }
      />

      {/* ===================== I. VOCABULAIRE ===================== */}
      <LessonSection
        id="cours-vocabulaire"
        kicker="01 · Le vocabulaire de base"
        title="Terminologie et symboles statistiques"
        tone="light"
        description="Population, caractère, effectifs, fréquences : les mots à maîtriser avant de calculer quoi que ce soit. Trois exemples-fils rouges les illustrent tout au long du cours."
      >
        <CourseBlock numeral="I" title="Population, caractère, valeurs, classes">
          <div className="grid gap-3 sm:grid-cols-3">
            <Callout variant="info" title="Exemple 1 — discret">
              10 candidats passent un concours (sur 150 points). Notes : 60, 70, 80, 60, 60, 70, 90, 70, 60, 80.
            </Callout>
            <Callout variant="info" title="Exemple 2 — continu">
              Poids (en kg) de 60 bébés de 4 mois, regroupés en 5 classes de <Math tex="[5\,;5{,}5[" /> à{" "}
              <Math tex="[7\,;7{,}5[" />.
            </Callout>
            <Callout variant="info" title="Exemple 3 — qualitatif">
              Marque de 300 voitures vendues en un mois : Dacia, Peugeot, Ford, Mercedes, BMW.
            </Callout>
          </div>
          <DataTable
            rows={[
              ["Termes", "Exemple 1", "Exemple 2", "Exemple 3"],
              ["Population statistique", "10 candidats", "60 bébés", "300 voitures vendues"],
              ["Unité statistique (individu)", "un candidat", "un bébé", "une voiture vendue"],
              ["Caractère étudié", "la note obtenue", "le poids", "la marque"],
              ["Type de caractère", "quantitatif discret", "quantitatif continu", "qualitatif"],
            ]}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <DefBox label="Quantitatif discret">
              Le caractère prend des valeurs isolées <Math tex="x_i" /> (ex. nombre de frères et sœurs, note à un
              devoir).
            </DefBox>
            <DefBox label="Quantitatif continu">
              Le caractère prend des valeurs très proches, regroupées en classes <Math tex="[a_i\,;a_{i+1}[" /> de
              même amplitude (ex. poids, taille). Le <strong>centre</strong> de la classe est{" "}
              <Math tex="c_i=\dfrac{a_i+a_{i+1}}2" />.
            </DefBox>
            <DefBox label="Qualitatif">
              Le caractère ne s&apos;exprime pas par un nombre (ex. couleur des yeux, marque préférée).
            </DefBox>
          </div>
        </CourseBlock>

        <CourseBlock numeral="II" title="Effectifs, effectifs cumulés, fréquences, pourcentages">
          <p className="text-sm text-foreground-muted">
            Soit <Math tex="(x_i,n_i)" /> une série statistique : <Math tex="x_i" /> est une valeur (ou une classe)
            du caractère, <Math tex="n_i" /> son <strong>effectif</strong> (nombre de fois qu&apos;elle apparaît).
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <DefBox label="Effectif total N">
              <Math tex="N=n_1+n_2+\cdots+n_p" />. La valeur (ou classe) de plus grand effectif est dite{" "}
              <strong>modale</strong>.
            </DefBox>
            <DefBox label="Effectif cumulé (croissant)">
              Effectif cumulé de <Math tex="x_i" /> : <Math tex="n_1+n_2+\cdots+n_i" /> (somme des effectifs jusqu&apos;à
              <Math tex="x_i" /> inclus).
            </DefBox>
            <DefBox label="Fréquence">
              <Math tex="f_i=\dfrac{n_i}{N}" />. Remarque : <Math tex="f_1+f_2+\cdots+f_p=1" />.
            </DefBox>
            <DefBox label="Fréquence cumulée">
              <Math tex="f_1+f_2+\cdots+f_i" /> (somme des fréquences jusqu&apos;à <Math tex="x_i" /> inclus).
            </DefBox>
            <DefBox label="Pourcentage">
              <Math tex="p_i=f_i\times100\%" />. Remarque : <Math tex="p_1+p_2+\cdots+p_p=100\%" />.
            </DefBox>
          </div>
          <p className="mt-2 mb-2 text-sm font-semibold text-foreground">Tableau complet de l&apos;exemple 1 (10 candidats)</p>
          <DataTable
            rows={[
              ["Note", "60", "70", "80", "90"],
              ["Effectif", "4", "3", "2", "1"],
              ["Effectif cumulé", "4", "7", "9", "10"],
              ["Fréquence", "0,4", "0,3", "0,2", "0,1"],
              ["Fréquence cumulée", "0,4", "0,7", "0,9", "1"],
              ["Pourcentage", "40 %", "30 %", "20 %", "10 %"],
            ]}
            highlight={[2, 4]}
          />
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PARAMÈTRES DE POSITION ===================== */}
      <LessonSection
        id="cours-position"
        kicker="02 · Résumer une série par un nombre"
        title="Paramètres de position : mode, moyenne, médiane"
        tone="muted"
        description="Trois nombres pour résumer une série statistique entière — chacun avec ses avantages."
      >
        <CourseBlock numeral="III" title="Moyenne arithmétique">
          <Callout variant="danger" title="Définition">
            La moyenne arithmétique d&apos;une série <Math tex="(x_i,n_i)" /> est le nombre <Math tex="\bar x" />
            {" "}tel que :
          </Callout>
          <FormulaBlock tex="\bar x=\dfrac{n_1x_1+n_2x_2+\cdots+n_px_p}{N}" />
          <Example title="Exemple résolu — 10 candidats">
            <p>
              <Math tex="\bar x=\dfrac{4\times60+3\times70+2\times80+1\times90}{10}=\dfrac{700}{10}" />
            </p>
            <p><Chip><Math tex="\bar x=70" /></Chip></p>
          </Example>
          <Callout variant="warning" title="Remarque — série regroupée en classes">
            Pour une série en classes <Math tex="[a_i\,;a_{i+1}[" />, on remplace chaque <Math tex="x_i" /> par le
            centre <Math tex="c_i" /> de sa classe : <Math tex="\bar x=\dfrac{\sum n_ic_i}{N}" />. C&apos;est alors
            une <strong>valeur approchée</strong> de la vraie moyenne (calculée sur les données brutes) si l&apos;on
            dispose par ailleurs de la liste complète des valeurs.
          </Callout>
          <Example title="Exemple résolu — durée de vie de 60 lampes (série en classes)">
            <DataTable
              rows={[
                ["Classe", "[10;20[", "[20;30[", "[30;40[", "[40;50[", "[50;60["],
                ["Effectif", "2", "7", "3", "10", "8"],
                ["Centre", "15", "25", "35", "45", "55"],
              ]}
            />
            <p>
              <Math tex="\bar x=\dfrac{2\times15+7\times25+3\times35+10\times45+8\times55}{30}=\dfrac{1200}{30}" />
            </p>
            <p><Chip><Math tex="\bar x=40" /></Chip></p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Médiane">
          <Callout variant="danger" title="Définition">
            La médiane <Math tex="M_e" /> d&apos;une série statistique dont les valeurs sont classées par ordre
            croissant est la plus petite valeur du caractère dont l&apos;effectif cumulé est{" "}
            <strong>supérieur ou égal à la moitié</strong> de l&apos;effectif total <Math tex="N" />.
          </Callout>
          <Example title="Exemple résolu — 10 candidats">
            <p>
              Effectif cumulé de <Math tex="x_2=70" /> est <Math tex="4+3=7\geq \tfrac{10}2=5" />, et celui de{" "}
              <Math tex="x_1=60" /> vaut <Math tex="4<5" />.
            </p>
            <p><Chip><Math tex="M_e=70" /></Chip></p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. PARAMÈTRES DE DISPERSION ===================== */}
      <LessonSection
        id="cours-dispersion"
        kicker="03 · Mesurer l'homogénéité"
        title="Paramètres de dispersion : étendue, écart-moyen, variance, écart-type"
        tone="light"
        description="Deux séries peuvent avoir la même moyenne tout en étant très différentes : les paramètres de dispersion mesurent à quel point les valeurs sont regroupées, ou au contraire dispersées, autour de la moyenne."
      >
        <CourseBlock numeral="V" title="Étendue et écart-moyen">
          <DefBox label="Étendue">
            La différence entre la valeur maximale et la valeur minimale de la série.
          </DefBox>
          <Callout variant="danger" title="Définition — écart-moyen">
            La moyenne des écarts (en valeur absolue) à la moyenne <Math tex="\bar x" />, noté <Math tex="e" /> :
          </Callout>
          <FormulaBlock tex="e=\dfrac{n_1|x_1-\bar x|+n_2|x_2-\bar x|+\cdots+n_p|x_p-\bar x|}{N}" />
          <Example title="Exemple résolu — 10 candidats (étendue et écart-moyen)">
            <p>
              Étendue : <Math tex="x_4-x_1=90-60=30" />.
            </p>
            <p>
              Écart-moyen (<Math tex="\bar x=70" />) :{" "}
              <Math tex="e=\dfrac{4\times|60-70|+3\times|70-70|+2\times|80-70|+1\times|90-70|}{10}=\dfrac{40+0+20+20}{10}=\dfrac{80}{10}" />
            </p>
            <p><Chip><Math tex="e=8" /></Chip></p>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Variance et écart-type">
          <Callout variant="danger" title="Définition — variance">
            La variance <Math tex="V" /> d&apos;une série <Math tex="(x_i,n_i)" /> de moyenne <Math tex="\bar x" />
            {" "}:
          </Callout>
          <FormulaBlock tex="V=\dfrac{n_1(x_1-\bar x)^2+n_2(x_2-\bar x)^2+\cdots+n_p(x_p-\bar x)^2}{N}" />
          <Callout variant="success" title="Propriété — formule pratique (König-Huygens)">
            <FormulaBlock tex="V=\dfrac{n_1x_1^2+n_2x_2^2+\cdots+n_px_p^2}{N}-\bar x^{\,2}" />
            La variance est toujours <Math tex="\geq 0" />.
          </Callout>
          <Callout variant="danger" title="Définition — écart-type">
            L&apos;écart-type est <Math tex="\sigma=\sqrt V" />.
          </Callout>
          <Example title="Exemple résolu — 10 candidats (variance et écart-type)">
            <p>
              <Math tex="V=\dfrac{4\times60^2+3\times70^2+2\times80^2+1\times90^2}{10}-70^2" />
            </p>
            <p>
              <Math tex="V=\dfrac{14400+14700+12800+8100}{10}-4900=\dfrac{50000}{10}-4900=5000-4900" />
            </p>
            <p><Chip><Math tex="V=100" /></Chip> puis <Chip><Math tex="\sigma=\sqrt{100}=10" /></Chip></p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. DIAGRAMMES ===================== */}
      <LessonSection
        id="cours-diagrammes"
        kicker="04 · Visualiser une série"
        title="Diagrammes en bâtons, en bandes, sectoriels, histogrammes"
        tone="muted"
        description="Chaque type de diagramme convient à un type de caractère : bâtons pour un caractère discret, histogramme pour des classes, secteurs pour une répartition en pourcentages."
      >
        <CourseBlock numeral="VII" title="Diagramme en bâtons et polygone statistique">
          <p className="text-sm text-foreground-muted">
            On place les valeurs <Math tex="x_i" /> sur un axe horizontal et on trace, pour chacune, un segment
            vertical de hauteur <Math tex="n_i" /> (ou <Math tex="f_i" />). Relier les sommets des bâtons donne le{" "}
            <strong>polygone statistique</strong>.
          </p>
          <Example title="Exemple résolu">
            <DataTable
              rows={[
                ["Valeur", "30", "50", "170", "200", "320"],
                ["Effectif", "12", "8", "14", "20", "6"],
              ]}
            />
            <Chart>
              <BarChart
                bars={[
                  { label: "30", value: "12", heightPx: 84 },
                  { label: "50", value: "8", heightPx: 56 },
                  { label: "170", value: "14", heightPx: 98 },
                  { label: "200", value: "20", heightPx: 140 },
                  { label: "320", value: "6", heightPx: 42 },
                ]}
              />
            </Chart>
          </Example>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Diagramme sectoriel">
          <Callout variant="success" title="Propriété">
            L&apos;effectif total <Math tex="N" /> correspond à un secteur de <Math tex="360\degree" />. La valeur{" "}
            <Math tex="x_i" /> d&apos;effectif <Math tex="n_i" /> correspond donc à un secteur d&apos;angle :
          </Callout>
          <FormulaBlock tex="\theta_i=\dfrac{360\degree\times n_i}{N}" />
          <Example title="Exemple résolu — reprise du tableau ci-dessus (N = 60)">
            <p>
              <Math tex="\theta_1=\dfrac{360\times12}{60}=72\degree" />,{" "}
              <Math tex="\theta_2=48\degree" />, <Math tex="\theta_3=84\degree" />,{" "}
              <Math tex="\theta_4=120\degree" />, <Math tex="\theta_5=36\degree" />.
            </p>
            <PieChart
              segments={[
                { color: "#4f46e5", from: 0, to: 72, label: "30 (12) — 72°" },
                { color: "#0ea5e9", from: 72, to: 120, label: "50 (8) — 48°" },
                { color: "#16a34a", from: 120, to: 204, label: "170 (14) — 84°" },
                { color: "#f59e0b", from: 204, to: 324, label: "200 (20) — 120°" },
                { color: "#e11d48", from: 324, to: 360, label: "320 (6) — 36°" },
              ]}
            />
          </Example>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Histogramme">
          <p className="text-sm text-foreground-muted">
            Pour une série en classes, on remplace les valeurs par les classes sur l&apos;axe horizontal.
          </p>
          <Callout variant="warning" title="Classes d'amplitudes différentes">
            Si les classes n&apos;ont pas toutes la même amplitude, l&apos;<strong>aire</strong> de chaque rectangle
            doit rester proportionnelle à l&apos;effectif : la hauteur du rectangle est alors la{" "}
            <strong>densité</strong> <Math tex="\dfrac{n_i}{\text{amplitude}_i}" />, et non l&apos;effectif brut.
          </Callout>
          <Example title="Exemple résolu — classes d'amplitude constante (10)">
            <DataTable rows={[["Classe", "[10;20[", "[20;30[", "[30;40[", "[40;50[", "[50;60["], ["Effectif", "2", "7", "3", "10", "8"]]} />
            <Chart>
              <BarChart
                bars={[
                  { label: "[10;20[", value: "2", heightPx: 28 },
                  { label: "[20;30[", value: "7", heightPx: 98 },
                  { label: "[30;40[", value: "3", heightPx: 42 },
                  { label: "[40;50[", value: "10", heightPx: 140 },
                  { label: "[50;60[", value: "8", heightPx: 112 },
                ]}
              />
            </Chart>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Statistiques"
        tone="light"
        description="13 exercices corrigés en détail. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={13} celebrationTitle="Bravo, les 13 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les statistiques.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Vocabulaire, tableau des effectifs, moyenne, médiane"
            items={
              <div className="space-y-2">
                <p>
                  Voici la liste des notes des élèves d&apos;une classe de tronc commun sciences lors d&apos;un
                  devoir de mathématiques :
                </p>
                <p className="rounded-lg bg-surface-muted p-2 text-center font-mono text-sm">
                  9 – 8 – 10 – 12 – 10 – 8 – 15 – 18 – 16 – 15 – 12 – 12 – 10 – 10 – 9 – 8 – 15 – 12 – 8 – 10
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Quelle est la population concernée par l&apos;étude statistique ? Quel est l&apos;individu ?
                    Quel est le caractère étudié ? Ce caractère est-il quantitatif ou qualitatif ?
                  </li>
                  <li>Dresser le tableau des effectifs et des effectifs cumulés croissants, et déterminer l&apos;effectif total.</li>
                  <li>Calculer la fréquence et le pourcentage associés à la note 12.</li>
                  <li>Calculer les paramètres de position de cette série (mode, moyenne, médiane).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <p>
                  <strong>1)</strong> Population : les 20 élèves de la classe de tronc commun sciences. Individu :
                  un élève de cette classe. Caractère étudié : la note obtenue au devoir de mathématiques. C&apos;est
                  un caractère <strong className="text-green-700">quantitatif discret</strong> (il prend des valeurs
                  numériques isolées).
                </p>
                <p><strong>2)</strong> Effectif total <Math tex="N=20" />.</p>
                <DataTable
                  rows={[
                    ["Note", "8", "9", "10", "12", "15", "16", "18"],
                    ["Effectif", "4", "2", "5", "4", "3", "1", "1"],
                    ["Effectif cumulé", "4", "6", "11", "15", "18", "19", "20"],
                  ]}
                  highlight={[2]}
                />
                <p>
                  <strong>3)</strong> Effectif de la note 12 : <Math tex="4" />. Fréquence :{" "}
                  <Math tex="f=\dfrac{4}{20}=0{,}2" />.
                </p>
                <p><Chip>fréquence = 0,2 · pourcentage = 20 %</Chip></p>
                <p>
                  <strong>4)</strong> Mode : la note <Math tex="10" /> a le plus grand effectif (5).
                </p>
                <p>
                  Moyenne : <Math tex="\bar x=\dfrac{8\times4+9\times2+10\times5+12\times4+15\times3+16\times1+18\times1}{20}=\dfrac{227}{20}" />
                </p>
                <p>
                  Médiane : <Math tex="N=20" /> (pair) → moyenne des 10ᵉ et 11ᵉ valeurs. Les effectifs cumulés
                  donnent : rangs 7 à 11 → valeur 10. Donc la 10ᵉ et la 11ᵉ valeur valent toutes les deux 10.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Chip>mode = 10</Chip>
                  <Chip><Math tex="\bar x=11{,}35" /></Chip>
                  <Chip>médiane = 10</Chip>
                </div>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Paramètres de dispersion d'une petite série"
            items={
              <div className="space-y-2">
                <p>On considère la série statistique suivante :</p>
                <DataTable rows={[["Caractère", "1", "2", "7"], ["Effectif", "5", "4", "1"]]} />
                <p>Calculer les paramètres de dispersion de cette série (écart-moyen, variance, écart-type).</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  Effectif total <Math tex="N=5+4+1=10" />. Moyenne :{" "}
                  <Math tex="\bar x=\dfrac{1\times5+2\times4+7\times1}{10}=\dfrac{5+8+7}{10}=\dfrac{20}{10}" />
                  , donc <Chip><Math tex="\bar x=2" /></Chip>.
                </p>
                <p>
                  Écart-moyen : <Math tex="e=\dfrac{5|1-2|+4|2-2|+1|7-2|}{10}=\dfrac{5+0+5}{10}=\dfrac{10}{10}" />
                </p>
                <p><Chip><Math tex="e=1" /></Chip></p>
                <p>
                  Variance (formule de König) :{" "}
                  <Math tex="V=\dfrac{5\times1^2+4\times2^2+1\times7^2}{10}-2^2=\dfrac{5+16+49}{10}-4=\dfrac{70}{10}-4=7-4" />
                </p>
                <p><Chip><Math tex="V=3" /></Chip></p>
                <p>
                  Écart-type : <Math tex="\sigma=\sqrt{3}\approx1{,}73" />.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Absences d'une classe : tableau, position et dispersion"
            items={
              <div className="space-y-2">
                <p>
                  Après avoir compté les absences des élèves d&apos;une classe de 40 élèves, on a regroupé les
                  résultats dans le tableau suivant :
                </p>
                <DataTable
                  rows={[
                    ["Heures d'absence", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    ["Effectif", "4", "2", "1", "5", "5", "5", "8", "1", "3", "3", "3"],
                  ]}
                />
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Compléter le tableau (effectifs cumulés).</li>
                  <li>Déterminer le nombre et le pourcentage des élèves ayant une absence supérieure ou égale à 6 heures.</li>
                  <li>Calculer les paramètres de position (mode, moyenne, médiane).</li>
                  <li>Calculer les paramètres de dispersion (écart-moyen, variance, écart-type).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <p><strong>1)</strong> On vérifie d&apos;abord que <Math tex="N=4+2+1+5+5+5+8+1+3+3+3=40" />, conforme à l&apos;énoncé.</p>
                <DataTable
                  rows={[
                    ["Heures", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    ["Effectif", "4", "2", "1", "5", "5", "5", "8", "1", "3", "3", "3"],
                    ["Eff. cumulé", "4", "6", "7", "12", "17", "22", "30", "31", "34", "37", "40"],
                  ]}
                  highlight={[2]}
                />
                <p>
                  <strong>2)</strong> Absence <Math tex="\geq 6" /> h : effectifs de 6,7,8,9,10 →{" "}
                  <Math tex="8+1+3+3+3=18" /> élèves, soit <Math tex="\dfrac{18}{40}=45\%" />.
                </p>
                <p><Chip>18 élèves · 45 %</Chip></p>
                <p>
                  <strong>3)</strong> Mode : la valeur 6 a le plus grand effectif (8).
                </p>
                <p>
                  Moyenne : <Math tex="\bar x=\dfrac{0\times4+1\times2+2\times1+3\times5+4\times5+5\times5+6\times8+7\times1+8\times3+9\times3+10\times3}{40}=\dfrac{200}{40}" />
                </p>
                <p>
                  Médiane : <Math tex="N=40" /> (pair) → moyenne des 20ᵉ et 21ᵉ valeurs. D&apos;après les effectifs
                  cumulés (17 puis 22), les rangs 18 à 22 valent tous 5 : les 20ᵉ et 21ᵉ valeurs valent 5.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Chip>mode = 6</Chip>
                  <Chip><Math tex="\bar x=5" /></Chip>
                  <Chip>médiane = 5</Chip>
                </div>
                <p>
                  <strong>4)</strong> Écart-moyen :{" "}
                  <Math tex="e=\dfrac{4|0-5|+2|1-5|+1|2-5|+5|3-5|+5|4-5|+5|5-5|+8|6-5|+1|7-5|+3|8-5|+3|9-5|+3|10-5|}{40}" />
                </p>
                <p>
                  <Math tex="e=\dfrac{20+8+3+10+5+0+8+2+9+12+15}{40}=\dfrac{92}{40}" />
                </p>
                <p><Chip><Math tex="e=2{,}3" /></Chip></p>
                <p>
                  Variance :{" "}
                  <Math tex="V=\dfrac{4\times0^2+2\times1^2+1\times2^2+5\times3^2+5\times4^2+5\times5^2+8\times6^2+1\times7^2+3\times8^2+3\times9^2+3\times10^2}{40}-5^2" />
                </p>
                <p>
                  <Math tex="V=\dfrac{0+2+4+45+80+125+288+49+192+243+300}{40}-25=\dfrac{1328}{40}-25=33{,}2-25" />
                </p>
                <p><Chip><Math tex="V=8{,}2" /></Chip> puis <Chip><Math tex="\sigma=\sqrt{8{,}2}\approx2{,}86" /></Chip></p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Notes en classes : effectifs, moyenne exacte, dispersion, histogramme"
            items={
              <div className="space-y-2">
                <p>
                  Voici la liste des notes des élèves d&apos;une classe de tronc commun sciences lors d&apos;un
                  devoir de mathématiques :
                </p>
                <p className="rounded-lg bg-surface-muted p-2 text-center font-mono text-sm">
                  14 – 15 – 06 – 08 – 10 – 07 – 14 – 19 – 06 – 08 – 09 – 02 – 10 – 12 – 08 – 06 – 15 – 08 – 12 – 10
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Remplir le tableau des classes <Math tex="[0;5[" />, <Math tex="[5;10[" />, <Math tex="[10;15[" />
                    , <Math tex="[15;20[" /> (effectifs, effectif cumulé).
                  </li>
                  <li>Déterminer la classe modale de cette série.</li>
                  <li>Calculer la moyenne des notes obtenues, en donnant le résultat sous sa forme décimale exacte.</li>
                  <li>Calculer les paramètres de dispersion (écart-moyen, variance, écart-type).</li>
                  <li>Représenter l&apos;histogramme des effectifs de cette série.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3">
                <p>
                  <strong>1)</strong> On classe les 20 notes : <Math tex="[0;5[" /> ne contient que 2 ;{" "}
                  <Math tex="[5;10[" /> contient 6,8,7,6,8,9,8,6,8 (9 notes) ; <Math tex="[10;15[" /> contient
                  10,14,10,12,12,10 (7 notes) ; <Math tex="[15;20[" /> contient 15,19,15 (3 notes). Total :{" "}
                  <Math tex="1+9+7+3=20" /> ✓.
                </p>
                <DataTable
                  rows={[
                    ["Classe", "[0;5[", "[5;10[", "[10;15[", "[15;20["],
                    ["Effectif", "1", "9", "7", "3"],
                    ["Effectif cumulé", "1", "10", "17", "20"],
                  ]}
                  highlight={[2]}
                />
                <p>
                  <strong>2)</strong> La classe de plus grand effectif est <Math tex="[5;10[" /> (effectif 9).
                </p>
                <p><Chip>classe modale = [5;10[</Chip></p>
                <p>
                  <strong>3)</strong> Comme on dispose de la liste complète des 20 notes, la moyenne{" "}
                  <strong>exacte</strong> se calcule directement à partir des notes brutes (et non à partir des
                  centres de classes, qui ne donnent qu&apos;une valeur approchée) :
                </p>
                <p>
                  Somme des 20 notes :{" "}
                  <Math tex="14{+}15{+}6{+}8{+}10{+}7{+}14{+}19{+}6{+}8{+}9{+}2{+}10{+}12{+}8{+}6{+}15{+}8{+}12{+}10=199" />
                </p>
                <p>
                  <Math tex="\bar x=\dfrac{199}{20}" />
                </p>
                <p><Chip><Math tex="\bar x=9{,}95" /></Chip></p>
                <p className="text-xs text-foreground-muted">
                  (À titre de comparaison, la moyenne <strong>approchée</strong> obtenue à partir des centres de
                  classes du tableau — 2,5 ; 7,5 ; 12,5 ; 17,5 — vaudrait{" "}
                  <Math tex="\dfrac{1\times2{,}5+9\times7{,}5+7\times12{,}5+3\times17{,}5}{20}=\dfrac{210}{20}=10{,}5" />
                  , une valeur différente de la moyenne exacte : le regroupement en classes fait perdre de
                  l&apos;information.)
                </p>
                <p>
                  <strong>4)</strong> On calcule les paramètres de dispersion à partir des notes brutes également.
                  Effectifs des valeurs distinctes : 2(×1), 6(×3), 7(×1), 8(×4), 9(×1), 10(×3), 12(×2), 14(×2),
                  15(×2), 19(×1).
                </p>
                <p>
                  Écart-moyen :{" "}
                  <Math tex="e=\dfrac{1|2{-}9{,}95|+3|6{-}9{,}95|+1|7{-}9{,}95|+4|8{-}9{,}95|+1|9{-}9{,}95|+3|10{-}9{,}95|+2|12{-}9{,}95|+2|14{-}9{,}95|+2|15{-}9{,}95|+1|19{-}9{,}95|}{20}" />
                </p>
                <p>
                  <Math tex="e=\dfrac{7{,}95+11{,}85+2{,}95+7{,}8+0{,}95+0{,}15+4{,}1+8{,}1+10{,}1+9{,}05}{20}=\dfrac{63}{20}" />
                </p>
                <p><Chip><Math tex="e=3{,}15" /></Chip></p>
                <p>
                  Variance (König) : <Math tex="V=\dfrac{\sum n_ix_i^2}{20}-\bar x^{\,2}=\dfrac{2317}{20}-9{,}95^2=115{,}85-99{,}0025" />
                </p>
                <p><Chip><Math tex="V=16{,}4475" /></Chip> puis <Chip><Math tex="\sigma\approx4{,}06" /></Chip></p>
                <p className="text-xs text-foreground-muted">
                  (On a utilisé <Math tex="\sum n_ix_i^2=1\times4+3\times36+1\times49+4\times64+1\times81+3\times100+2\times144+2\times196+2\times225+1\times361=2317" />
                  .)
                </p>
                <p>
                  <strong>5)</strong> Histogramme des effectifs par classe (classes de même amplitude 5, hauteur ∝ effectif) :
                </p>
                <Chart>
                  <BarChart
                    bars={[
                      { label: "[0;5[", value: "1", heightPx: 15.6 },
                      { label: "[5;10[", value: "9", heightPx: 140 },
                      { label: "[10;15[", value: "7", heightPx: 108.9 },
                      { label: "[15;20[", value: "3", heightPx: 46.7 },
                    ]}
                  />
                </Chart>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Série en classes : classe modale, moyenne, dispersion"
            items={
              <div className="space-y-2">
                <p>On considère la série statistique suivante :</p>
                <DataTable
                  rows={[
                    ["Classe", "[0;4[", "[4;8[", "[8;12[", "[12;16[", "[16;20["],
                    ["Effectif", "1", "2", "4", "2", "1"],
                  ]}
                />
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer la classe modale de cette série.</li>
                  <li>Calculer la moyenne.</li>
                  <li>Calculer les paramètres de dispersion (écart-moyen, variance, écart-type).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  <strong>1)</strong> Effectif total <Math tex="N=1+2+4+2+1=10" />. La classe de plus grand
                  effectif est <Math tex="[8;12[" /> (effectif 4).
                </p>
                <p><Chip>classe modale = [8;12[</Chip></p>
                <p>
                  <strong>2)</strong> Centres des classes : 2, 6, 10, 14, 18.
                </p>
                <p>
                  <Math tex="\bar x=\dfrac{1\times2+2\times6+4\times10+2\times14+1\times18}{10}=\dfrac{2+12+40+28+18}{10}=\dfrac{100}{10}" />
                </p>
                <p><Chip><Math tex="\bar x=10" /></Chip></p>
                <p>
                  <strong>3)</strong> Écart-moyen :{" "}
                  <Math tex="e=\dfrac{1|2-10|+2|6-10|+4|10-10|+2|14-10|+1|18-10|}{10}=\dfrac{8+8+0+8+8}{10}=\dfrac{32}{10}" />
                </p>
                <p><Chip><Math tex="e=3{,}2" /></Chip></p>
                <p>
                  Variance : <Math tex="V=\dfrac{1\times2^2+2\times6^2+4\times10^2+2\times14^2+1\times18^2}{10}-10^2=\dfrac{4+72+400+392+324}{10}-100=\dfrac{1192}{10}-100" />
                </p>
                <p><Chip><Math tex="V=19{,}2" /></Chip> puis <Chip><Math tex="\sigma=\sqrt{19{,}2}\approx4{,}38" /></Chip></p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Diagramme en bâtons — nombre d'enfants par famille"
            items={
              <div className="space-y-2">
                <p>
                  On étudie le nombre d&apos;enfants par famille au pays de Cocagne. On compte 10 familles n&apos;ayant
                  aucun enfant.
                </p>
                <DataTable
                  rows={[
                    ["Nombre d'enfants", "0", "1", "2", "3", "4"],
                    ["Nombre de familles", "10", "20", "25", "15", "5"],
                  ]}
                />
                <p>Représenter cette série statistique par un diagramme en bâtons.</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>Effectif total : <Math tex="10+20+25+15+5=75" /> familles.</p>
                <Chart>
                  <BarChart
                    bars={[
                      { label: "0 enfant", value: "10", heightPx: 56 },
                      { label: "1 enfant", value: "20", heightPx: 112 },
                      { label: "2 enfants", value: "25", heightPx: 140 },
                      { label: "3 enfants", value: "15", heightPx: 84 },
                      { label: "4 enfants", value: "5", heightPx: 28 },
                    ]}
                  />
                </Chart>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Lecture d'un diagramme en bâtons — employés par âge"
            items={
              <div className="space-y-2">
                <p>
                  Soit le diagramme en bâtons suivant, représentant le nombre d&apos;employés d&apos;une entreprise
                  selon leur âge (les pointillés indiquent la hauteur exacte de chaque bâton) :
                </p>
                <Chart>
                  <BarChart
                    bars={[
                      { label: "moins de 30 ans", value: "15", heightPx: 24.7 },
                      { label: "de 30 à 45 ans", value: "85", heightPx: 140 },
                      { label: "plus de 45 ans", value: "40", heightPx: 65.9 },
                    ]}
                  />
                </Chart>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Quel est le nombre d&apos;employés de moins de 30 ans ?</li>
                  <li>Quel est le nombre d&apos;employés de plus de 30 ans ?</li>
                  <li>Quel est le nombre d&apos;employés de 30 à 45 ans ?</li>
                  <li>Quel est le nombre d&apos;employés de plus de 30 à 45 ans ?</li>
                  <li>Quel est le nombre d&apos;employés de moins de 45 ans ?</li>
                  <li>Quel est le nombre total d&apos;employés ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p><strong>1)</strong> Lecture directe du premier bâton : <Chip>15 employés</Chip>.</p>
                <p>
                  <strong>2)</strong> Employés de plus de 30 ans = ceux de « 30 à 45 ans » + ceux de « plus de 45
                  ans » : <Math tex="85+40=125" />.
                </p>
                <p><Chip>125 employés</Chip></p>
                <p><strong>3)</strong> Lecture directe du deuxième bâton : <Chip>85 employés</Chip>.</p>
                <p><strong>4)</strong> C&apos;est la même catégorie que la question 3 : <Chip>85 employés</Chip>.</p>
                <p>
                  <strong>5)</strong> Employés de moins de 45 ans = ceux de « moins de 30 » + ceux de « 30 à 45 » :{" "}
                  <Math tex="15+85=100" />.
                </p>
                <p><Chip>100 employés</Chip></p>
                <p>
                  <strong>6)</strong> Total : <Math tex="15+85+40=140" />.
                </p>
                <p><Chip>140 employés</Chip></p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Lecture d'un diagramme en bâtons — notes à un contrôle"
            items={
              <div className="space-y-2">
                <p>
                  Voici le diagramme en bâtons représentant une série de notes obtenues par une classe à un
                  contrôle :
                </p>
                <Chart>
                  <BarChart
                    bars={[
                      { label: "2", value: "1", heightPx: 23.3 },
                      { label: "4", value: "2", heightPx: 46.7 },
                      { label: "5", value: "1", heightPx: 23.3 },
                      { label: "6", value: "1", heightPx: 23.3 },
                      { label: "7", value: "3", heightPx: 70 },
                      { label: "8", value: "4", heightPx: 93.3 },
                      { label: "9", value: "5", heightPx: 116.7 },
                      { label: "10", value: "6", heightPx: 140 },
                      { label: "11", value: "2", heightPx: 46.7 },
                      { label: "12", value: "4", heightPx: 93.3 },
                      { label: "14", value: "3", heightPx: 70 },
                      { label: "17", value: "1", heightPx: 23.3 },
                    ]}
                  />
                </Chart>
                <p>Recopier et compléter le tableau des effectifs et des pourcentages.</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  Effectif total : <Math tex="1{+}2{+}1{+}1{+}3{+}4{+}5{+}6{+}2{+}4{+}3{+}1=33" /> élèves.
                </p>
                <DataTable
                  rows={[
                    ["Note", "2", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "17", "Total"],
                    ["Effectif", "1", "2", "1", "1", "3", "4", "5", "6", "2", "4", "3", "1", "33"],
                    [
                      "Pourcentage",
                      "3,03 %",
                      "6,06 %",
                      "3,03 %",
                      "3,03 %",
                      "9,09 %",
                      "12,12 %",
                      "15,15 %",
                      "18,18 %",
                      "6,06 %",
                      "12,12 %",
                      "9,09 %",
                      "3,03 %",
                      "100 %",
                    ],
                  ]}
                  highlight={[2]}
                />
                <p className="text-xs text-foreground-muted">
                  Chaque pourcentage est calculé par <Math tex="p_i=\dfrac{n_i}{33}\times100" /> (par exemple, pour
                  la note 10 : <Math tex="\dfrac{6}{33}\times100\approx18{,}18\%" />).
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Diagramme circulaire — adhérents d'un club sportif"
            items={
              <div className="space-y-2">
                <p>
                  Voici un diagramme circulaire représentant la répartition des adhérents à un club sportif :
                </p>
                <Chart>
                  <PieChart
                    segments={[
                      { color: "#16a34a", from: 0, to: 210, label: "Football : 58,3 %" },
                      { color: "#0ea5e9", from: 210, to: 300, label: "Tennis : 25 %" },
                      { color: "#f59e0b", from: 300, to: 360, label: "Handball : 16,7 %" },
                    ]}
                  />
                </Chart>
                <p>
                  Sachant que le club compte 240 adhérents, combien d&apos;adhérents jouent au football ? Au
                  tennis ? Au handball ?
                </p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  Les pourcentages 58,3 %, 25 % et 16,7 % correspondent exactement aux fractions{" "}
                  <Math tex="\dfrac7{12}" />, <Math tex="\dfrac14" /> et <Math tex="\dfrac16" /> (qui somment bien à
                  1).
                </p>
                <p>
                  Football : <Math tex="240\times\dfrac7{12}=140" />. Tennis : <Math tex="240\times\dfrac14=60" />.
                  Handball : <Math tex="240\times\dfrac16=40" />.
                </p>
                <p className="text-xs text-foreground-muted">Vérification : <Math tex="140+60+40=240" /> ✓.</p>
                <div className="flex flex-wrap gap-2">
                  <Chip>football = 140</Chip>
                  <Chip>tennis = 60</Chip>
                  <Chip>handball = 40</Chip>
                </div>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Médiane — lancer de javelot"
            items={
              <div className="space-y-2">
                <p>
                  Le tableau ci-dessous représente les longueurs obtenues par des athlètes lors d&apos;un concours
                  de lancer de javelot :
                </p>
                <DataTable
                  rows={[
                    ["Longueur (m)", "37", "39", "40", "41", "42", "43", "44", "48"],
                    ["Effectif", "4", "3", "4", "3", "2", "3", "5", "2"],
                  ]}
                />
                <p>Déterminer la médiane de cette série.</p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  Effectif total : <Math tex="4+3+4+3+2+3+5+2=26" /> (pair) → la médiane est la moyenne des 13ᵉ et
                  14ᵉ valeurs.
                </p>
                <DataTable
                  rows={[
                    ["Longueur", "37", "39", "40", "41", "42", "43", "44", "48"],
                    ["Effectif cumulé", "4", "7", "11", "14", "16", "19", "24", "26"],
                  ]}
                  highlight={[1]}
                />
                <p>
                  Les rangs 12 à 14 correspondent à la valeur 41 (effectif cumulé passant de 11 à 14) : la 13ᵉ et la
                  14ᵉ valeur valent toutes les deux 41.
                </p>
                <p><Chip><Math tex="M_e=\dfrac{41+41}2=41" /></Chip></p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Histogramme — largeur de classes constante"
            items={
              <div className="space-y-2">
                <p>Construire l&apos;histogramme correspondant à cette série (classes de largeur constante 10) :</p>
                <DataTable
                  rows={[
                    ["Taille (cm)", "[0;10[", "[10;20[", "[20;30[", "[30;40["],
                    ["Effectif", "10", "7", "29", "25"],
                  ]}
                />
                <DataTable
                  rows={[
                    ["Taille (cm)", "[40;50[", "[50;60[", "[60;70[", "[70;80[", "[80;90["],
                    ["Effectif", "15", "12", "5", "6", "5"],
                  ]}
                />
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  Toutes les classes ayant la même amplitude (10), la hauteur de chaque rectangle est directement
                  proportionnelle à l&apos;effectif :
                </p>
                <Chart>
                  <BarChart
                    bars={[
                      { label: "[0;10[", value: "10", heightPx: 48.3 },
                      { label: "[10;20[", value: "7", heightPx: 33.8 },
                      { label: "[20;30[", value: "29", heightPx: 140 },
                      { label: "[30;40[", value: "25", heightPx: 120.7 },
                      { label: "[40;50[", value: "15", heightPx: 72.4 },
                      { label: "[50;60[", value: "12", heightPx: 57.9 },
                      { label: "[60;70[", value: "5", heightPx: 24.1 },
                      { label: "[70;80[", value: "6", heightPx: 29 },
                      { label: "[80;90[", value: "5", heightPx: 24.1 },
                    ]}
                  />
                </Chart>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="Histogramme — largeur de classes non constante (méthode des densités)"
            items={
              <div className="space-y-2">
                <p>
                  Construire l&apos;histogramme correspondant à cette série (les amplitudes sont différentes, donc
                  on doit raisonner en aires) :
                </p>
                <DataTable
                  rows={[
                    ["Classe", "[0;20[", "[20;50[", "[50;60[", "[60;85[", "[85;100["],
                    ["Effectif", "15", "34", "8", "10", "13"],
                  ]}
                />
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  Amplitude de chaque classe : 20, 30, 10, 25, 15. Pour que l&apos;<strong>aire</strong> de chaque
                  rectangle reste proportionnelle à l&apos;effectif, on prend pour hauteur la{" "}
                  <strong>densité</strong> <Math tex="\dfrac{\text{effectif}}{\text{amplitude}}" /> :
                </p>
                <DataTable
                  rows={[
                    ["Classe", "[0;20[", "[20;50[", "[50;60[", "[60;85[", "[85;100["],
                    ["Amplitude", "20", "30", "10", "25", "15"],
                    ["Effectif", "15", "34", "8", "10", "13"],
                    ["Densité = eff/amp", "0,75", "1,133", "0,8", "0,4", "0,867"],
                  ]}
                  highlight={[3]}
                />
                <Chart>
                  <Histogram
                    bars={[
                      { label: "[0;20[", value: "15", heightPx: 92.6, widthPct: 20 },
                      { label: "[20;50[", value: "34", heightPx: 140, widthPct: 30 },
                      { label: "[50;60[", value: "8", heightPx: 98.8, widthPct: 10 },
                      { label: "[60;85[", value: "10", heightPx: 49.4, widthPct: 25 },
                      { label: "[85;100[", value: "13", heightPx: 107.1, widthPct: 15 },
                    ]}
                  />
                </Chart>
                <p className="text-xs text-foreground-muted">
                  La largeur de chaque rectangle est proportionnelle à son amplitude, sa hauteur à sa densité :
                  l&apos;aire (largeur × hauteur) reste ainsi proportionnelle à l&apos;effectif de la classe.
                </p>
              </div>
            }
          />

          {/* Exercice 13 */}
          <ExerciseCard
            id="13"
            index={13}
            title="Histogramme — tailles d'élèves, classes non constantes (méthode par intervalle-unité)"
            items={
              <div className="space-y-2">
                <p>
                  On relève les tailles des élèves d&apos;une classe, regroupées en classes d&apos;amplitudes
                  différentes :
                </p>
                <DataTable
                  rows={[
                    ["Taille (m)", "[1,50;1,60[", "[1,60;1,70[", "[1,70;1,80[", "[1,80;2,00["],
                    ["Effectif", "2", "6", "9", "8"],
                    ["Largeur (I.U.)", "1", "1", "1", "2"],
                  ]}
                />
                <p>
                  On prend comme <strong>intervalle-unité</strong> (I.U.) une amplitude de référence de 0,10 m.
                  Tracer l&apos;histogramme correspondant.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2">
                <p>
                  La dernière classe <Math tex="[1{,}80\,;2{,}00[" /> a une amplitude double (0,20 m = 2 I.U.) des
                  trois premières (0,10 m = 1 I.U. chacune). On calcule donc l&apos;effectif « par intervalle-unité »
                  <Math tex="\dfrac{\text{effectif}}{\text{I.U.}}" /> pour obtenir la hauteur de chaque rectangle :
                </p>
                <DataTable
                  rows={[
                    ["Taille (m)", "[1,50;1,60[", "[1,60;1,70[", "[1,70;1,80[", "[1,80;2,00["],
                    ["Effectif", "2", "6", "9", "8"],
                    ["Largeur (I.U.)", "1", "1", "1", "2"],
                    ["Effectif / I.U.", "2", "6", "9", "4"],
                  ]}
                  highlight={[3]}
                />
                <Chart>
                  <Histogram
                    bars={[
                      { label: "[1,50;1,60[", value: "2", heightPx: 31.1, widthPct: 20 },
                      { label: "[1,60;1,70[", value: "6", heightPx: 93.3, widthPct: 20 },
                      { label: "[1,70;1,80[", value: "9", heightPx: 140, widthPct: 20 },
                      { label: "[1,80;2,00[", value: "4", heightPx: 62.2, widthPct: 40 },
                    ]}
                  />
                </Chart>
                <p className="text-xs text-foreground-muted">
                  La dernière classe est deux fois plus large : sa hauteur (4) est donc la moitié de son effectif
                  réel (8) pour que son aire reste proportionnelle à l&apos;effectif.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
