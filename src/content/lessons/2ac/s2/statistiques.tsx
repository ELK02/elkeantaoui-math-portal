import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Statistiques · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur les statistiques (vocabulaire, effectifs et fréquences cumulés, moyenne, médiane, étendue, diagrammes circulaire et en bâtons) et 4 exercices corrigés, 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 5",
  heroTitle: "Statistiques",
  heroSubtitle:
    "Lire un tableau de données, en tirer une moyenne, une médiane, un graphique. Des outils qui servent tous les jours.",
  footerNote: "Statistiques · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "moyenne", label: "Moyenne & médiane" },
    { id: "diagrammes", label: "Diagrammes" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Generic small data table matching the lesson's card style. */
function DataTable({ rows, highlight = [] }: { rows: ReactNode[][]; highlight?: number[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-max border-collapse text-center text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`${i < rows.length - 1 ? "border-b border-border" : ""} ${
                highlight.includes(i) ? "bg-green-100/60 font-semibold text-green-700" : i === 0 ? "bg-surface-muted" : ""
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

function BarChart({
  groups,
  barWidth = "w-9",
  barsHeight = "h-32",
  wrapHeight = "h-40",
}: {
  groups: { label: string; bars: { pct: number; color: string }[] }[];
  barWidth?: string;
  barsHeight?: string;
  wrapHeight?: string;
}) {
  return (
    <div className={`flex items-end gap-2.5 overflow-x-auto ${wrapHeight}`}>
      {groups.map((g, i) => (
        <div key={i} className={`flex shrink-0 flex-col items-center gap-1.5 ${barWidth}`}>
          <div className={`flex w-full items-end gap-0.5 ${barsHeight}`}>
            {g.bars.map((b, j) => (
              <div key={j} className="w-full rounded-t" style={{ height: `${b.pct}%`, backgroundColor: b.color }} />
            ))}
          </div>
          <span className="text-center text-[10px] font-medium text-foreground-muted">{g.label}</span>
        </div>
      ))}
    </div>
  );
}

function PieChart({ gradient, size = "h-44 w-44" }: { gradient: string; size?: string }) {
  return <div className={`shrink-0 rounded-full shadow ${size}`} style={{ background: gradient }} />;
}

function LegendItem({ color, children }: { color: string; children: ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-xs">
      <span className="h-3 w-3 shrink-0 rounded-sm" style={{ backgroundColor: color }} />
      {children}
    </span>
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
          { value: "4", label: "exercices" },
          { value: "3", label: "parties de cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Découvrir le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              S&apos;entraîner
            </a>
          </>
        }
        visual={
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-10 py-8">
            <Math tex="M = \dfrac{\sum x_i}{n}" className="katex-formula-block text-4xl font-bold text-white sm:text-5xl" />
            <p className="font-mono text-xs text-neutral-400">moyenne d&apos;une série statistique</p>
          </div>
        }
      />

      {/* ===================== I. COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Vocabulaire & effectifs cumulés"
        title="Le vocabulaire de base"
        tone="light"
        description="Six mots à connaître avant de calculer quoi que ce soit."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Population", "C'est l'ensemble étudié dans l'enquête."],
            ["Individu", "C'est un élément de la population."],
            ["Caractère (variable)", "Ce qui est étudié dans la population et qui est commun à tous les individus."],
            ["Modalités", "Ce sont les différentes valeurs que le caractère peut prendre."],
            ["Effectif d'une valeur", "C'est le nombre de fois où cette valeur apparaît dans la série statistique."],
            ["Effectif total", "Il est égal au nombre de données de la série statistique."],
          ].map(([title, text], i) => (
            <div key={title} className="rounded-xl border border-border p-4">
              <p className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500">
                  {i + 1}
                </span>
                {title}
              </p>
              <p className="text-sm text-foreground-muted">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-surface-muted p-5">
          <p className="mb-2 font-mono text-xs text-foreground-muted">1.7 · fréquence</p>
          <p className="mb-4 text-sm text-foreground-muted">La fréquence d&apos;une modalité est le quotient :</p>
          <FormulaBlock tex="\text{Fréquence} = \dfrac{\text{effectif de la modalité}}{\text{effectif total}}" />
          <ul className="mt-4 space-y-1.5 text-sm text-foreground-muted">
            <li>· Une fréquence est un nombre compris entre 0 et 1.</li>
            <li>· On peut l&apos;exprimer en fraction, en décimal ou en pourcentage : <Math tex="\text{Pourcentage} = \text{Fréquence} \times 100" />.</li>
            <li>· La somme des fréquences de toutes les données est égale à 1.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-xl border border-border p-5">
          <p className="mb-2 font-mono text-xs text-foreground-muted">1.8 · effectif cumulé croissant</p>
          <p className="mb-4 text-sm text-foreground-muted">
            L&apos;<strong className="text-foreground">effectif cumulé croissant</strong> d&apos;une valeur, c&apos;est le nombre
            d&apos;individus qui ont cette valeur ou une valeur inférieure. On l&apos;obtient en ajoutant à l&apos;effectif
            d&apos;une valeur les effectifs des valeurs précédentes.
          </p>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">
            Exemple · notes d&apos;une classe de cinquième
          </p>
          <DataTable
            rows={[
              ["Notes des élèves", "2", "6", "8", "9", "10", "11", "12", "14", "16"],
              ["Nombre d'élèves", "1", "3", "3", "7", "6", "5", "3", "2", "1"],
              ["Effectifs cumulés", "1", "4", "7", "14", "20", "25", "28", "30", "31"],
            ]}
            highlight={[2]}
          />
          <p className="mt-3 text-xs text-foreground-muted">
            Pour la note 6 : il y a 3 élèves et l&apos;effectif cumulé précédent est 1, donc 1 + 3 = 4 élèves.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-border p-5">
          <p className="mb-2 font-mono text-xs text-foreground-muted">1.9 · fréquence cumulée croissante</p>
          <p className="mb-4 text-sm text-foreground-muted">
            La <strong className="text-foreground">fréquence cumulée croissante</strong> d&apos;une valeur est la somme des
            fréquences des valeurs inférieures ou égales.
          </p>
          <DataTable
            rows={[
              ["Notes", "2", "6", "8", "9", "10", "11", "12", "14", "16"],
              ["Fréquence", "0,032", "0,097", "0,097", "0,226", "0,194", "0,161", "0,097", "0,065", "0,032"],
              ["Fréquence cumulée", "0,032", "0,129", "0,226", "0,452", "0,646", "0,807", "0,904", "0,969", "1"],
              ["Pourcentage (%)", "3,2", "9,7", "9,7", "22,6", "19,4", "16,1", "9,7", "6,5", "3,2"],
              ["Pourcentage cumulé", "3,2", "12,9", "22,6", "45,2", "64,6", "80,7", "90,4", "96,9", "100"],
            ]}
            highlight={[2, 4]}
          />
        </div>
      </LessonSection>

      {/* ===================== II. MOYENNE ===================== */}
      <LessonSection
        id="moyenne"
        kicker="02 · Trois indicateurs"
        title="Moyenne, médiane et étendue"
        tone="muted"
        description="Trois nombres qui résument une série entière : sa valeur typique, sa valeur centrale, et son écart."
      >
        <div className="grid gap-3">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">2.1 · moyenne d&apos;une série</p>
            <p className="mb-4 text-sm text-foreground-muted">
              La moyenne d&apos;une série est égale à la somme de toutes les données divisée par l&apos;effectif total.
            </p>
            <FormulaBlock tex="\text{Moyenne} = \dfrac{\text{somme de toutes les valeurs}}{\text{nombre de valeurs}}" />
            <p className="mt-4 text-sm text-foreground-muted">
              <strong className="text-foreground">Exemple :</strong> moyenne de 9 ; 6 ; 4 ; 11 ; 6 ; 7 ; 8 ?
            </p>
            <p className="text-sm text-foreground-muted">
              <Math tex="(9+6+4+11+6+7+8) \div 7 = 51 \div 7 \approx \mathbf{7{,}29}" />
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">2.2 · médiane d&apos;une série</p>
            <p className="mb-4 text-sm text-foreground-muted">
              Une fois les données <strong className="text-foreground">ordonnées</strong> par ordre croissant, la{" "}
              <strong className="text-foreground">médiane</strong> partage la série en deux groupes de même effectif.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <p className="mb-1 text-sm font-semibold text-foreground">Effectif total impair</p>
                <p className="text-sm text-foreground-muted">La médiane est la valeur du milieu de la série ordonnée.</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="mb-1 text-sm font-semibold text-foreground">Effectif total pair</p>
                <p className="text-sm text-foreground-muted">
                  La médiane est la moyenne des deux valeurs du milieu de la série ordonnée.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">2.3 · étendue d&apos;une série</p>
            <p className="mb-4 text-sm text-foreground-muted">
              L&apos;<strong className="text-foreground">étendue</strong> mesure l&apos;écart entre la plus grande et la plus
              petite valeur de la série : c&apos;est un indicateur de dispersion.
            </p>
            <FormulaBlock tex="\text{Étendue} = \text{valeur maximale} - \text{valeur minimale}" />
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. DIAGRAMMES ===================== */}
      <LessonSection
        id="diagrammes"
        kicker="03 · Diagrammes"
        title="Représenter une série statistique"
        tone="light"
        description="Deux façons classiques de rendre une série lisible d'un coup d'œil."
      >
        <div className="rounded-xl border border-border p-5">
          <p className="mb-2 font-mono text-xs text-foreground-muted">3.1 · diagramme circulaire</p>
          <p className="mb-2 text-sm text-foreground-muted">
            Un diagramme circulaire découpe le cercle en secteurs dont les angles sont proportionnels aux effectifs.
          </p>
          <p className="mb-4 text-sm text-foreground-muted">
            L&apos;effectif total correspond à un angle de 360° (180° pour un semi-circulaire). On obtient l&apos;angle en
            multipliant la fréquence par 360° (ou 180°).
          </p>
          <FormulaBlock tex="\text{Angle} = \dfrac{\text{pourcentage}}{100} \times 360°" />
          <p className="mt-4 mb-3 text-xs font-bold uppercase tracking-wide text-foreground-muted">
            Exemple · couleur des cheveux d&apos;une classe
          </p>
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative">
                <PieChart
                  size="h-52 w-52"
                  gradient="conic-gradient(from 0deg, #1e293b 0% 31.25%, #fbbf24 31.25% 53.125%, #f43f5e 53.125% 100%)"
                />
                <div className="absolute inset-6 flex items-center justify-center rounded-full bg-surface text-center">
                  <span className="text-xs font-bold text-foreground-muted">360°<br />= effectif total</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <LegendItem color="#1e293b">Cheveux noirs · 112,5°</LegendItem>
              <LegendItem color="#fbbf24">Cheveux blonds · 78,75°</LegendItem>
              <LegendItem color="#f43f5e">Cheveux roux · 168,75°</LegendItem>
              <p className="pt-2 text-xs text-foreground-muted">
                Ex : angle « cheveux noirs » = (pourcentage cheveux noirs ÷ 100) × 360° = 112,5°
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border p-5">
          <p className="mb-2 font-mono text-xs text-foreground-muted">3.2 · diagramme en bâtons (en barres)</p>
          <p className="mb-6 text-sm text-foreground-muted">
            À chaque modalité, on associe un bâton dont la hauteur est proportionnelle à l&apos;effectif correspondant.
          </p>
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-foreground-muted">
            Exemple · couleur des cheveux d&apos;une classe
          </p>
          <div className="border-b border-border pb-1">
            <BarChart
              barWidth="w-20"
              barsHeight="h-40"
              groups={[
                { label: "rouges (15)", bars: [{ pct: 100, color: "#f43f5e" }] },
                { label: "blonds (7)", bars: [{ pct: 46.7, color: "#fbbf24" }] },
                { label: "noirs (10)", bars: [{ pct: 66.7, color: "#1e293b" }] },
              ]}
            />
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="4 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={4} celebrationTitle="Bravo, les 4 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les statistiques.">
          <ExerciseCard
            id="1"
            index={1}
            title="Saut en hauteur (classe de troisième)"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Performances en saut en hauteur des élèves d&apos;une classe de troisième, en centimètres :
                </p>
                <DataTable
                  rows={[
                    ["117", "111", "133", "134", "129", "109", "129", "122", "111", "106"],
                    ["122", "128", "120", "120", "131", "130", "110", "109", "112", ""],
                  ]}
                />
                <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                  <li>Préciser la population et le caractère étudiés.</li>
                  <li>Calculer un indicateur de dispersion de cette série.</li>
                  <li>Déterminer la performance moyenne M des élèves, arrondie à l&apos;unité.</li>
                  <li>Déterminer la performance médiane m et donner sa signification.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <p>
                  <strong>1.</strong> Population : les élèves de la classe de troisième. Caractère étudié : la
                  performance (hauteur du saut), en cm.
                </p>
                <p>
                  <strong>2.</strong> Étendue = valeur maximale − valeur minimale ={" "}
                  <Math tex="134 - 106 = \mathbf{28 \text{ cm}}" />.
                </p>
                <p>
                  <strong>3.</strong> Somme des 19 valeurs = 2 283. Moyenne <Math tex="M = 2283 \div 19 \approx 120{,}16" />{" "}
                  → <strong className="text-green-700">M ≈ 120 cm</strong>.
                </p>
                <p>
                  <strong>4.</strong> Données ordonnées : 106, 109, 109, 110, 111, 111, 112, 117, 120,{" "}
                  <strong className="text-green-700">120</strong>, 122, 122, 128, 129, 129, 130, 131, 133, 134 (19
                  valeurs, impair) → médiane = 10<sup>e</sup> valeur = <strong className="text-green-700">m = 120 cm</strong>.
                </p>
                <p className="text-foreground-muted italic">
                  Signification : la moitié des élèves ont sauté une hauteur inférieure ou égale à 120 cm, l&apos;autre
                  moitié une hauteur supérieure ou égale à 120 cm.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Personnel de 80 restaurants"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Une enquête a été menée dans 80 restaurants d&apos;une région pour connaître l&apos;effectif de leur personnel.
                </p>
                <DataTable
                  rows={[
                    ["Nombre de salariés", "2", "3", "4", "5", "6", "7", "8"],
                    ["Nombre de restaurants", "5", "7", "14", "17", "21", "10", "6"],
                  ]}
                />
                <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                  <li>Préciser la population et le caractère étudiés.</li>
                  <li>Calculer la moyenne et la médiane de la série en interprétant les résultats.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  <strong>1.</strong> Population : les 80 restaurants enquêtés. Caractère étudié : le nombre de
                  salariés (effectif du personnel).
                </p>
                <p>
                  <strong>2.</strong> Moyenne ={" "}
                  <Math tex="(2\times5 + 3\times7 + 4\times14 + 5\times17 + 6\times21 + 7\times10 + 8\times6) \div 80 = 416 \div 80 = \mathbf{5{,}2}" />{" "}
                  salariés.
                </p>
                <DataTable
                  rows={[
                    ["Salariés", "2", "3", "4", "5", "6", "7", "8"],
                    ["Cumulés", "5", "12", "26", "43", "64", "74", "80"],
                  ]}
                  highlight={[1]}
                />
                <p>
                  Effectif total 80 (pair) → médiane = moyenne du 40<sup>e</sup> et du 41<sup>e</sup> valeur. L&apos;effectif
                  cumulé passe de 26 (à 4 salariés) à 43 (à 5 salariés) : le 40<sup>e</sup> et le 41<sup>e</sup> élément
                  appartiennent tous les deux à la valeur 5 →{" "}
                  <strong className="text-green-700">médiane = 5 salariés</strong>.
                </p>
                <p className="text-foreground-muted italic">
                  Interprétation : la moitié des restaurants emploient au plus 5 salariés, l&apos;autre moitié au moins 5
                  salariés. La moyenne (5,2) est très proche de la médiane (5) : la répartition du personnel est assez
                  homogène.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Charlez et Siana comparent leurs classes"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Charlez et Siana sont deux professeurs de mathématiques, chacun avec une classe de troisième de 20
                  élèves. Ils comparent les notes du dernier devoir commun.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="mb-1.5 text-xs font-bold uppercase text-foreground-muted">Notes de Charlez</p>
                    <DataTable
                      rows={[
                        ["7", "8", "12", "12", "6"],
                        ["18", "5", "11", "6", "18"],
                        ["3", "8", "5", "18", "7"],
                        ["9", "20", "6", "16", "15"],
                      ]}
                    />
                  </div>
                  <div>
                    <p className="mb-1.5 text-xs font-bold uppercase text-foreground-muted">Notes de Siana</p>
                    <DataTable
                      rows={[
                        ["8", "8", "9", "12", "11"],
                        ["8", "13", "15", "7", "9"],
                        ["10", "10", "12", "8", "10"],
                        ["14", "12", "11", "14", "9"],
                      ]}
                    />
                  </div>
                </div>
                <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                  <li>Construire, dans un même repère et avec deux couleurs différentes, le diagramme en bâtons de chaque série.</li>
                  <li>Calculer l&apos;étendue de chaque série.</li>
                  <li>Calculer la moyenne de chaque série.</li>
                  <li>Déterminer la médiane de chaque série.</li>
                  <li>Comparer les deux classes à partir de ces réponses.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 font-semibold text-foreground">1. Diagramme en bâtons (bleu = Charlez, orange = Siana)</p>
                  <BarChart
                    barWidth="w-9"
                    barsHeight="h-32"
                    wrapHeight="h-44"
                    groups={[
                      { label: "3", bars: [{ pct: 25, color: "#3f6a9c" }, { pct: 0, color: "#fbbf24" }] },
                      { label: "5", bars: [{ pct: 50, color: "#3f6a9c" }, { pct: 0, color: "#fbbf24" }] },
                      { label: "6", bars: [{ pct: 75, color: "#3f6a9c" }, { pct: 0, color: "#fbbf24" }] },
                      { label: "7", bars: [{ pct: 50, color: "#3f6a9c" }, { pct: 25, color: "#fbbf24" }] },
                      { label: "8", bars: [{ pct: 50, color: "#3f6a9c" }, { pct: 100, color: "#fbbf24" }] },
                      { label: "9", bars: [{ pct: 25, color: "#3f6a9c" }, { pct: 75, color: "#fbbf24" }] },
                      { label: "10", bars: [{ pct: 0, color: "#3f6a9c" }, { pct: 75, color: "#fbbf24" }] },
                      { label: "11", bars: [{ pct: 25, color: "#3f6a9c" }, { pct: 50, color: "#fbbf24" }] },
                      { label: "12", bars: [{ pct: 50, color: "#3f6a9c" }, { pct: 75, color: "#fbbf24" }] },
                      { label: "13", bars: [{ pct: 0, color: "#3f6a9c" }, { pct: 25, color: "#fbbf24" }] },
                      { label: "14", bars: [{ pct: 0, color: "#3f6a9c" }, { pct: 50, color: "#fbbf24" }] },
                      { label: "15", bars: [{ pct: 25, color: "#3f6a9c" }, { pct: 25, color: "#fbbf24" }] },
                      { label: "16", bars: [{ pct: 25, color: "#3f6a9c" }, { pct: 0, color: "#fbbf24" }] },
                      { label: "18", bars: [{ pct: 75, color: "#3f6a9c" }, { pct: 0, color: "#fbbf24" }] },
                      { label: "20", bars: [{ pct: 25, color: "#3f6a9c" }, { pct: 0, color: "#fbbf24" }] },
                    ]}
                  />
                  <div className="mt-3 flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm" style={{ backgroundColor: "#3f6a9c" }} />Charlez</span>
                    <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-sm" style={{ backgroundColor: "#fbbf24" }} />Siana</span>
                  </div>
                </div>
                <p><strong>2.</strong> Étendue Charlez = <Math tex="20 - 3 = \mathbf{17}" />. Étendue Siana = <Math tex="15 - 7 = \mathbf{8}" />.</p>
                <p>
                  <strong>3.</strong> Somme des notes de Charlez = 210, moyenne = <Math tex="210 \div 20 = \mathbf{10{,}5}" />.
                  Somme des notes de Siana = 210, moyenne = <Math tex="210 \div 20 = \mathbf{10{,}5}" /> (même moyenne pour
                  les deux classes).
                </p>
                <p>
                  <strong>4.</strong> Charlez ordonné : 3, 5, 5, 6, 6, 6, 7, 7, 8, <strong className="underline">8</strong>,{" "}
                  <strong className="underline">9</strong>, 11, 12, 12, 15, 16, 18, 18, 18, 20 → médiane ={" "}
                  <Math tex="(8+9) \div 2 = \mathbf{8{,}5}" />. Siana ordonné : 7, 8, 8, 8, 8, 9, 9, 9,{" "}
                  <strong className="underline">10</strong>, <strong className="underline">10</strong>, 10, 11, 11, 12,
                  12, 12, 13, 14, 14, 15 → médiane = <Math tex="(10+10) \div 2 = \mathbf{10}" />.
                </p>
                <p className="text-foreground-muted italic">
                  <strong>5.</strong> Les deux classes ont la même moyenne (10,5), mais l&apos;étendue de Charlez (17) est
                  bien plus grande que celle de Siana (8) : les notes de Charlez vont de 3 à 20 (très dispersées),
                  celles de Siana restent entre 7 et 15 (plus regroupées). La médiane de Siana (10) est proche de sa
                  moyenne, signe d&apos;une distribution homogène ; celle de Charlez (8,5) s&apos;en écarte davantage. La
                  classe de Siana est donc plus régulière, celle de Charlez plus hétérogène.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Visites du site Éducmat"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Lors d&apos;un sondage, on a demandé aux élèves combien de fois par semaine ils visitent le site
                  Éducmat. Voici les réponses :
                </p>
                <DataTable
                  rows={[
                    ["Nombre de visites", "0", "1", "2", "3", "4", "5", "6", "Total"],
                    ["Effectifs", "52", "132", "164", "196", "86", "44", "46", "720"],
                    ["Angles", "?", "?", "?", "?", "?", "?", "?", "360°"],
                  ]}
                  highlight={[1]}
                />
                <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                  <li>Construire le diagramme en barres de cette série statistique.</li>
                  <li>Compléter le tableau puis construire le diagramme circulaire associé.</li>
                  <li>Déterminer graphiquement la médiane de la série.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 font-semibold text-foreground">1. Diagramme en barres</p>
                  <BarChart
                    barWidth="w-10"
                    barsHeight="h-32"
                    wrapHeight="h-40"
                    groups={[
                      { label: "0", bars: [{ pct: 26.5, color: "#3f6a9c" }] },
                      { label: "1", bars: [{ pct: 67.3, color: "#3f6a9c" }] },
                      { label: "2", bars: [{ pct: 83.7, color: "#3f6a9c" }] },
                      { label: "3", bars: [{ pct: 100, color: "#3f6a9c" }] },
                      { label: "4", bars: [{ pct: 43.9, color: "#3f6a9c" }] },
                      { label: "5", bars: [{ pct: 22.4, color: "#3f6a9c" }] },
                      { label: "6", bars: [{ pct: 23.5, color: "#3f6a9c" }] },
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 font-semibold text-foreground">
                    2. Tableau complété (fréquence = effectif ÷ 720 ; angle = fréquence × 360°)
                  </p>
                  <DataTable
                    rows={[
                      ["Visites", "0", "1", "2", "3", "4", "5", "6"],
                      ["Angle", "26°", "66°", "82°", "98°", "43°", "22°", "23°"],
                    ]}
                    highlight={[1]}
                  />
                  <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row">
                    <PieChart gradient="conic-gradient(from 0deg, #2748d6 0% 7.22%, #38bdf8 7.22% 25.56%, #34d399 25.56% 48.33%, #fbbf24 48.33% 75.56%, #fb7185 75.56% 87.5%, #a78bfa 87.5% 93.61%, #94a3b8 93.61% 100%)" />
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                      <LegendItem color="#2748d6">0 visite · 26°</LegendItem>
                      <LegendItem color="#38bdf8">1 visite · 66°</LegendItem>
                      <LegendItem color="#34d399">2 visites · 82°</LegendItem>
                      <LegendItem color="#fbbf24">3 visites · 98°</LegendItem>
                      <LegendItem color="#fb7185">4 visites · 43°</LegendItem>
                      <LegendItem color="#a78bfa">5 visites · 22°</LegendItem>
                      <LegendItem color="#94a3b8">6 visites · 23°</LegendItem>
                    </div>
                  </div>
                </div>
                <p>
                  <strong>3.</strong> Effectif total N = 720 (pair) → médiane = moyenne du 360<sup>e</sup> et du 361
                  <sup>e</sup> élève. Effectifs cumulés : 52, 184, 348, <strong className="text-green-700">544</strong>,
                  630, 674, 720. Comme 348 &lt; 360 ≤ 544 et 348 &lt; 361 ≤ 544, le 360<sup>e</sup> et le 361<sup>e</sup> élève
                  appartiennent au groupe « 3 visites » → <strong className="text-green-700">médiane = 3 visites par semaine</strong>.
                  Graphiquement, on lit l&apos;abscisse correspondant à N/2 = 360 sur la courbe des effectifs cumulés
                  croissants.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
