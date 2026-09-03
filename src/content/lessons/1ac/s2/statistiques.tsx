import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  QcmSection,
  QcmQuestion,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Les Statistiques · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur les statistiques : effectif, effectif total, fréquence, tableaux, diagramme en bâtons, histogramme et diagrammes circulaires, accompagné de 27 exercices corrigés et d'un QCM, 1ère année collège, semestre 2.",
  kicker: "1ʳᵉ Année Collège · Chapitre 10",
  heroTitle: "Les Statistiques",
  heroSubtitle:
    "Compter, classer et représenter des données : effectif, fréquence, tableaux et diagrammes.",
  footerNote: "Les statistiques · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "vocabulaire", label: "Vocabulaire" },
    { id: "representation", label: "Représentations" },
    { id: "exercices", label: "Exercices" },
    { id: "qcm", label: "QCM" },
    { id: "plus-loin", label: "Plus loin" },
  ],
};

function CorrectionCard({ n, children }: { n?: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      {n ? <span className="font-bold text-green-700">{n}.</span> : null} {children}
    </div>
  );
}

/** Small data table used throughout the lesson. */
function DataTable({ rows, highlightLast }: { rows: ReactNode[][]; highlightLast?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse overflow-hidden rounded-lg border border-border text-center text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`${i > 0 ? "border-t border-border" : ""} ${highlightLast && i === rows.length - 1 ? "bg-surface-muted" : ""}`}
            >
              {row.map((cell, j) => (
                <td key={j} className={`p-2 ${j === 0 ? "bg-surface-muted font-semibold" : ""}`}>
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

/** Simple bar chart matching the source's flex/div bars. */
function BarChart({
  bars,
  color = "bg-cyan-500",
  height = "h-40",
  barWidth = "w-8",
  gap = "gap-2",
}: {
  bars: { label: string; value: string; heightPct: number }[];
  color?: string;
  height?: string;
  barWidth?: string;
  gap?: string;
}) {
  return (
    <div className={`flex items-end justify-center ${gap} ${height} overflow-x-auto border-b-2 border-l-2 border-border px-3 pb-1`}>
      {bars.map((b, i) => (
        <div key={i} className="flex h-full shrink-0 flex-col items-center justify-end gap-1">
          <span className="text-xs font-semibold text-foreground">{b.value}</span>
          <div className={`${barWidth} rounded-t ${color}`} style={{ height: `${b.heightPct}%` }} />
          <span className="text-[10px] text-foreground-muted">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Conic-gradient pie / semi-pie chart. */
function PieChart({ stops, caption, size = "h-32 w-32" }: { stops: string; caption?: ReactNode; size?: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${size} rounded-full`} style={{ background: `conic-gradient(${stops})` }} />
      {caption ? <p className="text-center text-xs text-foreground-muted">{caption}</p> : null}
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
          { value: "2", label: "parties de cours" },
          { value: "27", label: "exercices corrigés" },
          { value: "8", label: "questions de QCM" },
        ]}
        ctas={
          <>
            <a
              href="#vocabulaire"
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
          <div className="flex select-none items-end gap-2">
            {[40, 70, 100, 55, 25].map((h, i) => (
              <div key={i} className="w-6 rounded-t bg-amber-400" style={{ height: `${h}px` }} />
            ))}
          </div>
        }
      />

      {/* ===================== I. VOCABULAIRE ===================== */}
      <LessonSection
        id="vocabulaire"
        kicker="01 · Les mots clés"
        title="Vocabulaire des statistiques"
        tone="light"
        description="Effectif, effectif total et fréquence : trois mots à connaître par cœur."
      >
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
            <p className="mb-1 font-mono text-xs font-semibold text-rose-700 uppercase">1. Effectif</p>
            <p className="text-sm">L&apos;<strong>effectif</strong> d&apos;une donnée est le nombre de fois qu&apos;elle apparaît.</p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
            <p className="mb-1 font-mono text-xs font-semibold text-rose-700 uppercase">2. Effectif total</p>
            <p className="text-sm">L&apos;<strong>effectif total</strong>, noté <Math tex="N" />, est la somme des effectifs.</p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
            <p className="mb-1 font-mono text-xs font-semibold text-rose-700 uppercase">3. Fréquence</p>
            <p className="text-sm">La <strong>fréquence</strong> d&apos;une donnée est son effectif divisé par l&apos;effectif total.</p>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-3 font-mono text-xs font-semibold text-teal-600 uppercase">4. Exemple</p>
          <p className="mb-3 text-sm text-foreground-muted">Notes d&apos;un contrôle dans une classe :</p>
          <div className="mb-4 rounded-xl bg-teal-100/60 p-4 text-center font-mono text-sm text-teal-800">
            10 ; 12 ; 12 ; 10 ; 16 ; 8 ; 9 ; 8 ; 9 ; 10 &nbsp;·&nbsp; 8 ; 10 ; 8 ; 10 ; 16 ; 12 ; 10 ; 12 ; 12 ; 16
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
              <p className="mb-2 font-semibold">Pour la note <strong>10</strong> :</p>
              <ul className="space-y-1 text-foreground-muted">
                <li>Effectif : <strong>6</strong></li>
                <li>Effectif total : <strong>20</strong> élèves</li>
                <li>Fréquence : <Math tex="6/20 = \mathbf{0{,}3}" /></li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
              <p className="mb-2 font-semibold">Pour la note <strong>12</strong> :</p>
              <ul className="space-y-1 text-foreground-muted">
                <li>Effectif : <strong>5</strong></li>
                <li>Effectif total : <strong>20</strong> élèves</li>
                <li>Fréquence : <Math tex="5/20 = \mathbf{0{,}25}" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <p className="mb-3 font-mono text-xs font-semibold text-teal-600 uppercase">5. Tableau d&apos;effectifs et de fréquences</p>
          <DataTable
            rows={[
              ["Notes", "8", "9", "10", "12", "16"],
              ["Effectifs", "4", "2", "6", "5", "3"],
              ["Fréquences", "0,2", "0,1", "0,3", "0,25", "0,15"],
            ]}
          />
        </div>

        <Callout variant="warning" title="Remarques">
          <ul className="list-inside list-disc space-y-1">
            <li>Une fréquence est toujours comprise entre <strong>0</strong> et <strong>1</strong>.</li>
            <li>La somme des fréquences des données est toujours égale à <strong>1</strong>.</li>
          </ul>
        </Callout>
      </LessonSection>

      {/* ===================== II. REPRESENTATION ===================== */}
      <LessonSection
        id="representation"
        kicker="02 · Trois façons de représenter"
        title="Représenter les données"
        tone="muted"
        description="Diagramme en bâtons, histogramme, et diagrammes circulaires."
      >
        <p className="mb-3 text-sm text-foreground-muted">On reprend le tableau précédent :</p>
        <div className="mb-6">
          <DataTable rows={[["Notes", "8", "9", "10", "12", "16"], ["Effectifs", "4", "2", "6", "5", "3"]]} />
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="mb-4 font-display text-base font-bold text-foreground">1. Diagramme en bâtons</h3>
            <BarChart
              barWidth="w-1.5"
              gap="gap-4"
              bars={[
                { label: "8", value: "4", heightPct: 67 },
                { label: "9", value: "2", heightPct: 33 },
                { label: "10", value: "6", heightPct: 100 },
                { label: "12", value: "5", heightPct: 83 },
                { label: "16", value: "3", heightPct: 50 },
              ]}
            />
            <p className="mt-3 text-center text-xs text-foreground-muted">Un trait fin par donnée, de hauteur égale à l&apos;effectif.</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="mb-4 font-display text-base font-bold text-foreground">2. Diagramme à barres (histogramme)</h3>
            <BarChart
              bars={[
                { label: "8", value: "4", heightPct: 67 },
                { label: "9", value: "2", heightPct: 33 },
                { label: "10", value: "6", heightPct: 100 },
                { label: "12", value: "5", heightPct: 83 },
                { label: "16", value: "3", heightPct: 50 },
              ]}
            />
            <p className="mt-3 text-center text-xs text-foreground-muted"><strong>Remarque :</strong> les barres ont toutes la même largeur.</p>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-violet-400/50 bg-violet-100/40 p-5 md:p-6">
          <p className="mb-2 font-mono text-xs font-semibold text-violet-700 uppercase">💡 Complément utile · diagrammes circulaires</p>
          <p className="mb-3 text-sm">
            Le <strong>diagramme circulaire</strong> (camembert) et le <strong>diagramme semi-circulaire</strong> représentent
            chaque catégorie par une portion d&apos;angle proportionnel à sa fréquence.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-violet-300/50 bg-surface p-4 text-center">
              <p className="mb-1 text-sm font-semibold text-violet-700">Diagramme circulaire</p>
              <p className="font-mono text-sm">angle = fréquence × 360°</p>
              <p className="mt-1 text-xs text-foreground-muted">(le disque entier = 360° = 100 %)</p>
            </div>
            <div className="rounded-xl border border-violet-300/50 bg-surface p-4 text-center">
              <p className="mb-1 text-sm font-semibold text-violet-700">Diagramme semi-circulaire</p>
              <p className="font-mono text-sm">angle = fréquence × 180°</p>
              <p className="mt-1 text-xs text-foreground-muted">(le demi-disque = 180° = 100 %)</p>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="27 exercices corrigés"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={27} celebrationTitle="Bravo, les 27 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les statistiques.">
          <ExerciseCard
            id="1"
            index={1}
            title="Le concessionnaire automobile"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">Un concessionnaire a vendu ce mois-ci 85 véhicules. Complète le tableau :</p>
                <DataTable
                  rows={[
                    ["Vendeurs", "Citadines", "Sportives", "Routières", "Totaux"],
                    ["Paul", "3", "5", "?", "17"],
                    ["Denis", "4", "?", "6", "15"],
                    ["Henri", "3", "?", "8", "?"],
                    ["Steeve", "?", "4", "?", "18"],
                    ["Eliess", "5", "?", "2", "16"],
                    ["Totaux", "?", "31", "30", "85"],
                  ]}
                />
                <p className="text-sm text-foreground-muted">
                  a. Voitures de Henri ? b. Citadines vendues ? c. Meilleur vendeur en sportives ? d. Denis a-t-il vendu
                  autant de sportives que de routières ? e. Meilleur vendeur ? f. Type le plus vendu ?
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard>
                  Total citadines = <Math tex="85-31-30 = \mathbf{24}" />. On en déduit : Paul routières{" "}
                  <Math tex="=17-3-5=\mathbf{9}" /> ; Denis sportives <Math tex="=15-4-6=\mathbf{5}" /> ; Steeve citadines{" "}
                  <Math tex="=24-3-4-3-5=\mathbf{9}" /> puis routières <Math tex="=18-9-4=\mathbf{5}" /> ; Eliess sportives{" "}
                  <Math tex="=16-5-2=\mathbf{9}" /> ; Henri sportives <Math tex="=31-(5+5+4+9)=\mathbf{8}" /> puis total{" "}
                  <Math tex="=3+8+8=\mathbf{19}" />.
                </CorrectionCard>
                <CorrectionCard>
                  <strong>a.</strong> Henri a vendu <strong>19</strong> voitures. &nbsp;<strong>b.</strong>{" "}
                  <strong>24</strong> citadines vendues. &nbsp;<strong>c.</strong> Eliess a vendu le plus de sportives
                  (<strong>9</strong>).
                </CorrectionCard>
                <CorrectionCard>
                  <strong>d.</strong> Non : Denis a vendu 5 sportives et 6 routières, ce n&apos;est pas autant.{" "}
                  <strong>e.</strong> Henri est le meilleur vendeur (19 ventes). <strong>f.</strong> Les sportives sont
                  le type le plus vendu (31).
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Les groupes sanguins"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">Répartition en groupes sanguins des salariés d&apos;une entreprise :</p>
                <BarChart
                  barWidth="w-6"
                  bars={[
                    { label: "O+", value: "160", heightPct: 94 },
                    { label: "O-", value: "30", heightPct: 18 },
                    { label: "A+", value: "170", heightPct: 100 },
                    { label: "A-", value: "25", heightPct: 15 },
                    { label: "B+", value: "25", heightPct: 15 },
                    { label: "B-", value: "10", heightPct: 6 },
                    { label: "AB+", value: "15", heightPct: 9 },
                    { label: "AB-", value: "5", heightPct: 3 },
                  ]}
                />
                <p className="text-sm text-foreground-muted">a. Groupe le plus/moins répandu ? b. Réalise un tableau à partir du graphique.</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard>
                  Lecture du graphique : O+≈160 ; O-≈30 ; A+≈170 ; A-≈25 ; B+≈25 ; B-≈10 ; AB+≈15 ; AB-≈5. Effectif total ≈{" "}
                  <strong>440</strong> salariés.
                </CorrectionCard>
                <CorrectionCard n="a">Le plus répandu : <strong>A+</strong>. Le moins répandu : <strong>AB-</strong>.</CorrectionCard>
                <CorrectionCard n="b">
                  Fréquences (effectif ÷ 440) : O+ 0,36 · O- 0,07 · A+ 0,39 · A- 0,06 · B+ 0,06 · B- 0,02 · AB+ 0,03 · AB- 0,01
                  (somme ≈ 1).
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Plein champ"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">Diagramme circulaire de l&apos;utilisation des terres d&apos;une exploitation :</p>
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <PieChart stops="#7c3aed 0% 50%, #0ea5e9 50% 74%, #22c55e 74% 84%, #f59e0b 84% 91%, #eab308 91% 98%, #ec4899 98% 100%" />
                  <ul className="space-y-1 text-sm text-foreground-muted">
                    <li>Vigne <strong className="text-foreground">— 50 %</strong></li>
                    <li>Blé <strong className="text-foreground">— 24 %</strong></li>
                    <li>Fruitiers <strong className="text-foreground">— 10 %</strong></li>
                    <li>Betteraves <strong className="text-foreground">— 7 %</strong></li>
                    <li>Pommes de terre <strong className="text-foreground">— 7 %</strong></li>
                    <li>Asperges <strong className="text-foreground">— 2 %</strong></li>
                  </ul>
                </div>
                <p className="text-sm text-foreground-muted">a. Culture occupant la moitié des terres ? b. La moins répandue ? c. Le quart des terres ? d. Cultures de même surface ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard>
                  <strong>a.</strong> La <strong>vigne</strong> occupe la moitié (50 %). <strong>b.</strong> Les{" "}
                  <strong>asperges</strong> sont les moins répandues (2 %).
                </CorrectionCard>
                <CorrectionCard>
                  <strong>c.</strong> Le <strong>blé</strong> occupe environ un quart (24 %). <strong>d.</strong> Les{" "}
                  <strong>betteraves</strong> et les <strong>pommes de terre</strong> occupent la même surface (7 % chacune).
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Le concours de lancer de javelot"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">
                  Distances (en m) de 21 élèves : 9,1 · 6,5 · 9,8 · 13,6 · 11,9 · 14,5 · 8 · 11 · 13,1 · 13,7 · 8,7 · 6,1 ·
                  11,9 · 10 · 9,1 · 8,3 · 8 · 12,1 · 13,7 · 9,4 · 8,1
                </p>
                <p className="text-sm text-foreground-muted">a. Combien ont lancé à 12 m ou plus ? b. À 8,9 m ou moins ? c. Complète le tableau par classes. d. À 9 m ou plus ?</p>
                <DataTable rows={[["Performance", "De 6 à 8,9 m", "De 9 à 11,9 m", "De 12 à 14,9 m"], ["Nombre de lancers", "?", "?", "?"]]} />
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">6 élèves à 12 m ou plus (13,6 ; 14,5 ; 13,1 ; 13,7 ; 12,1 ; 13,7).</CorrectionCard>
                <CorrectionCard n="b">7 élèves à 8,9 m ou moins (6,5 ; 8 ; 8,7 ; 6,1 ; 8,3 ; 8 ; 8,1).</CorrectionCard>
                <CorrectionCard n="c">
                  De 6 à 8,9 m → <strong>7</strong> ; de 9 à 11,9 m → <strong>8</strong> ; de 12 à 14,9 m → <strong>6</strong> (total <Math tex="7+8+6=21" /> ✓).
                </CorrectionCard>
                <CorrectionCard n="d">À 9 m ou plus : <Math tex="8+6=\mathbf{14}" /> élèves.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Recensement départemental"
            items={
              <p className="text-sm text-foreground-muted">
                a. Télécharge le fichier tableur donnant la population des départements. b. Trie du moins peuplé au
                plus peuplé. c. Construis un tableau de classes (moins de 200 000 hab., entre 200 000 et 399 999,
                etc.). d. Combien de départements dépassent un million d&apos;habitants ?
              </p>
            }
            correction={
              <CorrectionCard>
                📎 <strong>Activité pratique (tableur)</strong> : nécessite des données réelles, pas de réponse numérique
                unique. <strong>Méthode :</strong> b. utilise « Trier » sur la colonne population. c. compte avec NB.SI le
                nombre de départements par tranche de 200 000 habitants. d. filtre ou trie pour compter les départements
                au-delà d&apos;1 000 000.
              </CorrectionCard>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Le fabricant de reblochons"
            items={
              <p className="text-sm text-foreground-muted">
                63 fromages sont pesés (théoriquement 250 g). Vente au marché entre 243 g et 247 g (bénéfice 1,50 €/fromage) ;
                supermarché entre 248 g et 252 g (0,90 €) ; le reste chez des fromagers (1,20 €). a. Tableau à trois
                classes. b. Quel bénéfice total ?
              </p>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">
                  Entre 243 g et 247 g → <strong>20</strong> fromages (marché) ; entre 248 g et 252 g → <strong>28</strong>{" "}
                  (supermarché) ; entre 253 g et 257 g → <strong>15</strong> (fromagers). Total : <Math tex="20+28+15=63" /> ✓.
                </CorrectionCard>
                <CorrectionCard n="b">
                  <Math tex="20 \times 1{,}50 + 28 \times 0{,}90 + 15 \times 1{,}20 = 30 + 25{,}20 + 18 = \mathbf{73{,}20}" /> €
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="« Se Canto »"
            items={
              <p className="text-sm text-foreground-muted">
                « Se Canto » est une chanson provençale dont on donne la partition. Quelle est la fréquence (arrondie
                au dixième) d&apos;apparition de chaque note ?
              </p>
            }
            correction={
              <CorrectionCard>
                📎 <strong>Activité pratique (lecture de partition)</strong> : sans la partition, pas de résultat
                numérique unique. <strong>Méthode :</strong> compte le nombre total de notes N, puis l&apos;effectif de
                chaque note ; fréquence = effectif ÷ N, arrondie au dixième. Vérifie que la somme fait environ 1.
              </CorrectionCard>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Les carottes"
            items={<p className="text-sm text-foreground-muted">Deux cinquièmes des légumes d&apos;un maraîcher sont des carottes. Exprime cette fréquence en nombre puis en pourcentage.</p>}
            correction={<CorrectionCard><Math tex="2/5 = \mathbf{0{,}4}" />, soit <strong>40 %</strong>.</CorrectionCard>}
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Comparer des fréquences"
            items={
              <p className="text-sm text-foreground-muted">
                a. Abdel trouve 1/4, Alice trouve 0,25. Même résultat ? b. Abdel trouve 1/5, Alice 0,1, François 17 %.
                Compare ces trois fréquences.
              </p>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a"><Math tex="1/4 = 0{,}25" /> : <strong>même résultat</strong>.</CorrectionCard>
                <CorrectionCard n="b">
                  En pourcentage : Abdel <Math tex="=1/5=0{,}2=\mathbf{20\%}" /> ; Alice <Math tex="=0{,}1=\mathbf{10\%}" /> ;
                  François <strong>17 %</strong>. Donc Abdel &gt; François &gt; Alice.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Le rayon peinture"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">Un magasin a en stock : 221 pots de 0,5 L, 272 pots de 1 L, 170 pots de 2 L et 187 pots de 5 L.</p>
                <p className="text-sm text-foreground-muted">a. Complète le tableau. b. Combien de pots au total ? c./d. Fréquence et fréquence en %. e. Les pots ≥ 2 L représentent-ils moins de 50 % ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="b">Total : <Math tex="221+272+170+187=\mathbf{850}" /> pots.</CorrectionCard>
                <DataTable
                  rows={[
                    ["Contenance", "0,5 L", "1 L", "2 L", "5 L", "Total"],
                    ["Effectif", "221", "272", "170", "187", "850"],
                    ["Fréquence", "0,26", "0,32", "0,20", "0,22", "1"],
                    ["Fréquence %", "26", "32", "20", "22", "100"],
                  ]}
                />
                <CorrectionCard n="e">
                  Pots ≥ 2 L : <Math tex="170+187=357" />, soit <Math tex="357/850 = \mathbf{42\%} < 50\%" />. Oui, moins de la moitié.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="La feuille de calcul"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">
                  Feuille incomplète : B1..E1 = classes « 1 à 5 », « 6 à 10 », « 11 à 15 », « 16 à 20 » ; B2=4, C2=8,
                  D2=11, E2=5, F2 = SOMME(B2:E2) ; B3 = B2/F2 ; B4 = B3×100.
                </p>
                <p className="text-sm text-foreground-muted">a. Contenu de A1 et A2 ? b. Que calculent F2, B3, B4 ? c. Propositions pour F1, A3, A4 ? d. Complète la feuille.</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">A1 = « Classe » ; A2 = « Effectif ». <strong>c.</strong> F1 = « Total » ; A3 = « Fréquence » ; A4 = « Fréquence en % ».</CorrectionCard>
                <CorrectionCard n="b">F2 calcule l&apos;effectif total ; B3 la fréquence de « 1 à 5 » ; B4 cette fréquence en %.</CorrectionCard>
                <DataTable
                  rows={[
                    ["Classe", "1 à 5", "6 à 10", "11 à 15", "16 à 20", "Total"],
                    ["Effectif", "4", "8", "11", "5", "28"],
                    ["Fréquence", "0,14", "0,29", "0,39", "0,18", "1"],
                    ["Fréquence %", "14", "29", "39", "18", "100"],
                  ]}
                />
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Retour sur les groupes sanguins"
            items={<p className="text-sm text-foreground-muted">Reporte-toi au graphique de l&apos;exercice 2. a. Calcule la fréquence pour chaque groupe. b. Résultats analogues pour la population française ?</p>}
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">O+ 36 % · O- 7 % · A+ 39 % · A- 6 % · B+ 6 % · B- 2 % · AB+ 3 % · AB- 1 %.</CorrectionCard>
                <CorrectionCard n="b">
                  Oui, ces proportions sont proches de la réalité française, où <strong>O+</strong> et <strong>A+</strong>{" "}
                  sont largement majoritaires et <strong>AB-</strong> le plus rare.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="13"
            index={13}
            title="La Tour Eiffel"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">Fréquences des tarifs : Adultes 0,45 ; Enfants ? ; Étudiants 0,1 ; Groupes 0,2.</p>
                <p className="text-sm text-foreground-muted">a. Complète. b. Ajoute la fréquence en %. c. Calcule les effectifs pour 1 700 visiteurs.</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">Enfants <Math tex="= 1-0{,}45-0{,}1-0{,}2 = \mathbf{0{,}25}" />.</CorrectionCard>
                <DataTable
                  rows={[
                    ["Origine", "Adultes", "Enfants", "Étudiants", "Groupes"],
                    ["Fréquence", "0,45", "0,25", "0,1", "0,2"],
                    ["Fréquence %", "45", "25", "10", "20"],
                    ["Effectif", "765", "425", "170", "340"],
                  ]}
                />
                <CorrectionCard n="c">Effectifs = fréquence × 1700 : <Math tex="765+425+170+340=\mathbf{1700}" /> ✓.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="14"
            index={14}
            title="Diagramme des ventes"
            items={<p className="text-sm text-foreground-muted">Reporte-toi au tableau de l&apos;exercice 1. Construis un diagramme en barres du total des ventes par vendeur.</p>}
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard>Totaux (ex. 1) : Paul 17 · Denis 15 · Henri 19 · Steeve 18 · Eliess 16.</CorrectionCard>
                <BarChart
                  height="h-32"
                  barWidth="w-7"
                  color="bg-amber-500"
                  bars={[
                    { label: "Paul", value: "17", heightPct: 89 },
                    { label: "Denis", value: "15", heightPct: 79 },
                    { label: "Henri", value: "19", heightPct: 100 },
                    { label: "Steeve", value: "18", heightPct: 95 },
                    { label: "Eliess", value: "16", heightPct: 84 },
                  ]}
                />
              </div>
            }
          />

          <ExerciseCard
            id="15"
            index={15}
            title="Le sondage télévisé"
            items={<p className="text-sm text-foreground-muted">50 % « oui », 25 % « non », 25 % sans opinion. Sans aucun calcul, représente ces résultats par un diagramme circulaire.</p>}
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard>
                  50 % = un <strong>demi-disque</strong> ; 25 % = un <strong>quart de disque</strong> (×2). Pas de calcul
                  d&apos;angle nécessaire : on partage le disque en 2 puis en 4.
                </CorrectionCard>
                <PieChart
                  stops="#0d9488 0% 50%, #f59e0b 50% 75%, #64748b 75% 100%"
                  caption="Oui (teal, moitié) · Non (ambre, quart) · Sans opinion (gris, quart)"
                />
              </div>
            }
          />

          <ExerciseCard
            id="16"
            index={16}
            title="Le stock de canapés"
            items={<p className="text-sm text-foreground-muted">Stock : 2 places 18 · 3 places 14 · Clic-clac 42 · BZ 9. a. Total ? b. Diagramme en barres (1 cm = 5 canapés). c. Tableau des angles. d. Diagramme circulaire.</p>}
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="a">Total : <Math tex="18+14+42+9=\mathbf{83}" /> canapés.</CorrectionCard>
                <CorrectionCard n="b">Hauteurs (÷5) : 2 places 3,6 cm · 3 places 2,8 cm · Clic-clac 8,4 cm · BZ 1,8 cm.</CorrectionCard>
                <CorrectionCard n="c">Angle = effectif/83 × 360° : 2 places ≈ 78,1° · 3 places ≈ 60,7° · Clic-clac ≈ 182,2° · BZ ≈ 39,0° (somme ≈ 360°).</CorrectionCard>
                <PieChart
                  stops="#0ea5e9 0% 21.7%, #f59e0b 21.7% 38.6%, #dc2626 38.6% 89.2%, #64748b 89.2% 100%"
                  caption="2 places (bleu) · 3 places (ambre) · Clic-clac (rouge) · BZ (gris)"
                />
              </div>
            }
          />

          <ExerciseCard
            id="17"
            index={17}
            title="Le vote de l'assemblée"
            items={<p className="text-sm text-foreground-muted">Résultats : 96 voix M. Marcel · 72 Mme Samia · 60 M. Brandon · 156 M. David · 48 abstentions. Réalise un tableau puis un diagramme semi-circulaire.</p>}
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard>Total : <Math tex="96+72+60+156+48=\mathbf{432}" /> votants.</CorrectionCard>
                <DataTable
                  rows={[
                    ["Résultat", "Marcel", "Samia", "Brandon", "David", "Abst."],
                    ["Effectif", "96", "72", "60", "156", "48"],
                    ["Angle (demi-cercle)", "40°", "30°", "25°", "65°", "20°"],
                  ]}
                />
                <p className="text-xs text-foreground-muted">Angle = (effectif/432) × 180° ; somme = 40+30+25+65+20 = 180° ✓.</p>
                <PieChart stops="#0d9488 0% 22.2%, #0ea5e9 22.2% 38.9%, #f59e0b 38.9% 52.8%, #dc2626 52.8% 88.9%, #64748b 88.9% 100%" />
              </div>
            }
          />

          <ExerciseCard
            id="18"
            index={18}
            title="Retour sur la feuille de calcul"
            items={<p className="text-sm text-foreground-muted">Reporte-toi au tableau de l&apos;exercice 11. Construis un diagramme en barres puis un diagramme circulaire.</p>}
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard>
                  Effectifs (total 28) : 1-5→4 ; 6-10→8 ; 11-15→11 ; 16-20→5. Angles = effectif/28×360° :{" "}
                  <strong>51,4° ; 102,9° ; 141,4° ; 64,3°</strong> (somme = 360°).
                </CorrectionCard>
                <PieChart stops="#0ea5e9 0% 14.3%, #f59e0b 14.3% 42.9%, #dc2626 42.9% 82.1%, #64748b 82.1% 100%" />
              </div>
            }
          />

          <ExerciseCard
            id="19"
            index={19}
            title="Les vendanges"
            items={<p className="text-sm text-foreground-muted">48 tombereaux sont pesés (en kg), de 264 kg à 1 243 kg. Regroupe ces données en quatre classes de même amplitude puis réalise l&apos;histogramme.</p>}
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard>Minimum 264 kg, maximum 1 243 kg → 4 classes d&apos;amplitude <strong>400 kg</strong> : [0;400[, [400;800[, [800;1200[, [1200;1600[.</CorrectionCard>
                <DataTable rows={[["Masse (kg)", "[0;400[", "[400;800[", "[800;1200[", "[1200;1600["], ["Effectif", "6", "26", "12", "4"]]} />
                <p className="text-xs text-foreground-muted">Total : 6+26+12+4 = 48 ✓</p>
                <BarChart
                  height="h-28"
                  barWidth="w-9"
                  color="bg-green-600"
                  bars={[
                    { label: "", value: "6", heightPct: 23 },
                    { label: "", value: "26", heightPct: 100 },
                    { label: "", value: "12", heightPct: 46 },
                    { label: "", value: "4", heightPct: 15 },
                  ]}
                />
              </div>
            }
          />

          <ExerciseCard
            id="20"
            index={20}
            title="La population française par âge"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">
                  Diagramme semi-circulaire (INSEE 2008) : Moins de 20 ans 44,7° · 20-59 ans 96,4° · 60-75 ans 23,6° ·
                  Plus de 75 ans 15,3°. Population totale ≈ 63,7 millions.
                </p>
                <p className="text-sm text-foreground-muted">a. Construis le tableau des effectifs (au dixième de million). b. Construis un diagramme circulaire.</p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n="a">
                  Effectif = (angle/180) × 63,7 : moins de 20 ans ≈ <strong>15,8 M</strong> ; 20-59 ans ≈{" "}
                  <strong>34,1 M</strong> ; 60-75 ans ≈ <strong>8,4 M</strong> ; plus de 75 ans ≈ <strong>5,4 M</strong>{" "}
                  (somme ≈ 63,7 M ✓).
                </CorrectionCard>
                <CorrectionCard n="b">Pour le circulaire (360°), on double chaque angle : 89,4° · 192,8° · 47,2° · 30,6°.</CorrectionCard>
                <PieChart stops="#0d9488 0% 24.8%, #dc2626 24.8% 78.4%, #f59e0b 78.4% 91.5%, #64748b 91.5% 100%" />
              </div>
            }
          />

          <ExerciseCard
            id="21"
            index={21}
            title="Question de proportions"
            items={
              <div className="space-y-3">
                <DataTable
                  rows={[
                    ["Ingrédients", "Farine", "Sucre", "Beurre", "Œufs"],
                    ["Recette 1", "135 g", "135 g", "150 g", "4"],
                    ["Recette 2", "150 g", "110 g", "130 g", "3"],
                  ]}
                />
                <p className="text-sm text-foreground-muted">
                  a. Compare le beurre puis le sucre. b. Calcule la proportion de chaque ingrédient (un œuf ≈ 60 g). c.
                  Recette la moins grasse ? la moins sucrée ? d. Compare a. et c.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">La recette 1 contient plus de beurre (150 g &gt; 130 g) et plus de sucre (135 g &gt; 110 g).</CorrectionCard>
                <CorrectionCard n="b">
                  Masse totale : R1 <Math tex="=135+135+150+4\times60=\mathbf{660\ g}" /> ; R2{" "}
                  <Math tex="=150+110+130+3\times60=\mathbf{570\ g}" />.<br />
                  R1 : farine 20,5 % · sucre 20,5 % · beurre 22,7 % · œufs 36,4 %.<br />
                  R2 : farine 26,3 % · sucre 19,3 % · beurre 22,8 % · œufs 31,6 %.
                </CorrectionCard>
                <CorrectionCard n="c">Moins grasse : R1 (22,7 % &lt; 22,8 %, très proche). Moins sucrée : R2 (19,3 % &lt; 20,5 %).</CorrectionCard>
                <CorrectionCard n="d">
                  En grammes bruts, R1 semble « plus riche », mais en <strong>proportion</strong> les deux recettes sont
                  presque aussi grasses, et R2 est même moins sucrée : comparer des masses brutes de tailles différentes
                  peut être trompeur, il faut comparer des <strong>fréquences</strong>.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="22"
            index={22}
            title="Sur autoroute"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">Lundi, effectifs par classe (1 à 5) : 681, 171, 255, 336, 57. Dimanche, pourcentages : 55, 11, 15, 3, 16 (total 1 200 véhicules).</p>
                <p className="text-sm text-foreground-muted">a. Total lundi ? b. Pourcentages lundi ? c. Véhicules classe 3 dimanche ? d. Plus de classe 1 : lundi ou dimanche ? e. Plus de chances d&apos;être classe 1 quel jour ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">Total lundi : <Math tex="681+171+255+336+57=\mathbf{1500}" /> véhicules.</CorrectionCard>
                <CorrectionCard n="b">Lundi : classe1 45,4 % · classe2 11,4 % · classe3 17 % · classe4 22,4 % · classe5 3,8 %.</CorrectionCard>
                <CorrectionCard n="c">Dimanche, classe 3 : <Math tex="15\% \times 1200 = \mathbf{180}" /> véhicules.</CorrectionCard>
                <CorrectionCard n="d">Lundi classe1 = 681 ; dimanche <Math tex="=55\% \times 1200 = 660" />. <strong>Lundi</strong> (681 &gt; 660).</CorrectionCard>
                <CorrectionCard n="e">En fréquence, lundi = 45,4 % et dimanche = 55 % : plus de chances un <strong>dimanche</strong>.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="23"
            index={23}
            title="L'élection de délégués"
            items={<p className="text-sm text-foreground-muted">Ahmed a obtenu 40 % des voix. a. Peut-on connaître le nombre de votants pour lui ? b. Peut-on représenter sa part sur un diagramme semi-circulaire ? c. A-t-il la majorité ? Peut-on le lire sur un diagramme circulaire ou en barres ?</p>}
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a"><strong>Non</strong> : un pourcentage seul ne donne pas un effectif, il manque l&apos;effectif total.</CorrectionCard>
                <CorrectionCard n="b"><strong>Oui</strong>, une fréquence se représente toujours : angle <Math tex="=40\% \times 180° = \mathbf{72°}" />.</CorrectionCard>
                <CorrectionCard n="c">
                  Non, 40 % &lt; 50 % : pas de majorité. Cela se lit sur les deux diagrammes : sur le circulaire, la
                  portion ne dépasse pas la moitié ; sur le diagramme en barres, la barre ne dépasse pas 50 %.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="24"
            index={24}
            title="Les poubelles de la famille"
            items={
              <div className="space-y-3">
                <DataTable rows={[["Masse (kg)", "0 à 14", "15 à 29", "30 à 44", "45 à 60"], ["Effectif", "6", "17", "22", "7"]]} />
                <p className="text-sm text-foreground-muted">a. Combien de semaines ≥ 30 kg ? b. Combien de semaines &lt; 7 kg ? c. Avantages/inconvénients d&apos;une répartition en classes ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">≥ 30 kg : <Math tex="22+7=\mathbf{29}" /> semaines.</CorrectionCard>
                <CorrectionCard n="b">
                  <strong>Impossible à déterminer précisément</strong> : les données sont regroupées par classes de 15 kg ;
                  on sait qu&apos;il y a 6 semaines entre 0 et 14 kg, mais pas combien sont sous 7 kg.
                </CorrectionCard>
                <CorrectionCard n="c">
                  <strong>Avantage :</strong> résume 52 semaines en une vue d&apos;ensemble claire. <strong>Inconvénient :</strong>{" "}
                  on perd les valeurs exactes à l&apos;intérieur de chaque classe.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="25"
            index={25}
            title="La forêt française"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">
                  Barres (millions de m³) : Chênes 672 · Hêtres 264 · Autres feuillus 576 · Sapins-Épicéas 360 · Pins
                  maritimes 168 · Autres conifères 360. Cercle (%) : 28, 11, 24, 15, 7, 15.
                </p>
                <p className="text-sm text-foreground-muted">a. Volume total ? Quel graphique utiliser ? b. Chênes : plus ou moins du quart ? c. Comment Leïla trouve le total avec le circulaire + une valeur des barres ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">
                  Total : <Math tex="672+264+576+360+168+360=\mathbf{2400}" /> millions de m³. On utilise le diagramme en{" "}
                  <strong>barres</strong> (valeurs absolues additionnables).
                </CorrectionCard>
                <CorrectionCard n="b">Chênes = 28 % &gt; 25 % : un peu <strong>plus</strong> du quart. Le <strong>circulaire</strong> répond facilement (comparaison directe des %).</CorrectionCard>
                <CorrectionCard n="c">
                  Elle prend une valeur connue en barres (Chênes = 672 correspond à 28 % du cercle), donc total{" "}
                  <Math tex="=672 \div 0{,}28 = \mathbf{2400}" /> millions de m³.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="26"
            index={26}
            title="À table !"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">
                  État des tables du collège : 132 neuves, 231 en bon état, 99 passables, 55 à réparer, 33 à changer.
                  Feuille de calcul avec colonnes A à G (lignes Nombre, Fréquence, Fréquence %, Angle).
                </p>
                <p className="text-sm text-foreground-muted">b. Formule de G2 ? c. Formule de B3 ? d. Valeur de G4 ? g. Valeur de G5 ? h. Angles ? i. Ligne 4 → ligne 5 ? k. Pour un diagramme semi-circulaire ?</p>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">Total : <Math tex="132+231+99+55+33=\mathbf{550}" /> tables.</CorrectionCard>
                <CorrectionCard n="b">G2 = <span className="font-mono">SOMME(B2:F2)</span> = nombre total de tables (550).</CorrectionCard>
                <CorrectionCard n="c">B3 = <span className="font-mono">B2/G2</span> (fréquence des tables neuves), recopiée sur C3..F3.</CorrectionCard>
                <DataTable
                  rows={[
                    ["", "Neuves", "Bon état", "Passables", "À réparer", "À changer", "Total"],
                    ["Nombre", "132", "231", "99", "55", "33", "550"],
                    ["Fréquence", "0,24", "0,42", "0,18", "0,1", "0,06", "1"],
                    ["Fréquence %", "24", "42", "18", "10", "6", "100"],
                    ["Angle", "86,4°", "151,2°", "64,8°", "36°", "21,6°", "360°"],
                  ]}
                />
                <CorrectionCard n="d">G4 = <strong>100</strong> (100 %). <strong>g.</strong> G5 = <strong>360</strong> (un disque complet). <strong>e.</strong> Fréquence % = fréquence × 100.</CorrectionCard>
                <CorrectionCard n="i">On passe de la ligne 4 à la ligne 5 en multipliant la <strong>fréquence</strong> (pas le %) par 360 au lieu de 100, ou le pourcentage par 3,6.</CorrectionCard>
                <CorrectionCard n="k">Pour un diagramme <strong>semi-circulaire</strong>, il suffit de changer <strong>G5</strong> (360 → 180) : les formules recalculent tout.</CorrectionCard>
                <PieChart stops="#0d9488 0% 24%, #0ea5e9 24% 66%, #f59e0b 66% 84%, #dc2626 84% 94%, #64748b 94% 100%" />
              </div>
            }
          />

          <ExerciseCard
            id="27"
            index={27}
            title="Pêche en haute mer"
            items={
              <p className="text-sm text-foreground-muted">
                Un poissonnier achète en Bretagne deux fois plus de poissons qu&apos;en Vendée et quatre fois plus
                qu&apos;en Mer du Nord ; en Méditerranée, autant qu&apos;en Mer du Nord. a. Pourcentage de chaque
                commande. b. Diagramme circulaire. c. Sachant qu&apos;il a acheté 45 t l&apos;an dernier, quantité par
                fournisseur ?
              </p>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard>En notant x = part « Mer du Nord » : Bretagne = 4x, Vendée = 2x, Méditerranée = x. Total = 8x.</CorrectionCard>
                <CorrectionCard n="a">
                  Bretagne <Math tex="=4/8=\mathbf{50\%}" /> ; Vendée <Math tex="=2/8=\mathbf{25\%}" /> ; Mer du Nord{" "}
                  <Math tex="=1/8=\mathbf{12{,}5\%}" /> ; Méditerranée <Math tex="=1/8=\mathbf{12{,}5\%}" />.
                </CorrectionCard>
                <CorrectionCard n="c">
                  Pour 45 t : Bretagne = 22,5 t ; Vendée = 11,25 t ; Mer du Nord = 5,625 t ; Méditerranée = 5,625 t (somme = 45 t ✓).
                </CorrectionCard>
                <PieChart
                  stops="#0d9488 0% 50%, #f59e0b 50% 75%, #0ea5e9 75% 87.5%, #dc2626 87.5% 100%"
                  caption="Bretagne (teal) · Vendée (ambre) · Mer du Nord (bleu) · Méditerranée (rouge)"
                />
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>

      {/* ===================== QCM ===================== */}
      <LessonSection
        id="qcm"
        kicker="Se tester"
        title="QCM · 8 questions"
        tone="muted"
        description="Pour chaque question, une ou plusieurs réponses parmi R1 à R4 sont correctes."
      >
        <QcmSection total={8} doneMessage="Quiz terminé, bravo !">
          <QcmQuestion
            id="qcm1"
            prompt={
              <>
                Notes à l&apos;oral d&apos;histoire des arts : 8-15-17-10-9-8-5-17-20-8-12-9-14-18-14-14-10-8-12-15-6-11-13-7-9.{" "}
                <strong>L&apos;effectif total est…</strong>
              </>
            }
            options={[
              { id: "r1", content: "R1 : 100", correct: false },
              { id: "r2", content: "R2 : 20", correct: false },
              { id: "r3", content: "R3 : 25", correct: true },
              { id: "r4", content: "R4 : 180", correct: false },
            ]}
          />
          <QcmQuestion
            id="qcm2"
            prompt={<>Avec la même série de 25 notes, réparties en classes 1-4 / 5-9 / 10-14 / 15-20, <strong>quelles répartitions sont possibles ?</strong></>}
            options={[
              { id: "r1", content: "R1 : 0, 9, 10, 6", correct: false },
              { id: "r2", content: "R2 : 0, 10, 9, 6", correct: true },
              { id: "r3", content: "R3 : (5 classes)", correct: false },
              { id: "r4", content: "R4 : (5 classes)", correct: false },
            ]}
          />
          <QcmQuestion
            id="qcm3"
            prompt={<>Toujours avec cette série de 25 notes, <strong>quelles affirmations sont vraies ?</strong></>}
            options={[
              { id: "r1", content: "R1 : fréq(17) = 0,08", correct: true },
              { id: "r2", content: "R2 : fréq(8) = 1/5", correct: false },
              { id: "r3", content: "R3 : fréq(15) = 2/25", correct: true },
              { id: "r4", content: "R4 : 15 % ont 14", correct: false },
            ]}
          />
          <QcmQuestion
            id="qcm4"
            prompt={<>Zoo — fréquences : reptiles 13 %, mammifères 60 %, poissons 9 %. <strong>La fréquence d&apos;oiseaux est…</strong></>}
            options={[
              { id: "r1", content: "R1 : 0,18", correct: true },
              { id: "r2", content: "R2 : 8 %", correct: false },
              { id: "r3", content: "R3 : 18 %", correct: true },
              { id: "r4", content: "R4 : 82 %", correct: false },
            ]}
          />
          <QcmQuestion
            id="qcm5"
            prompt={<strong>La mesure de l&apos;angle d&apos;un diagramme semi-circulaire correspondant aux poissons (9 %) est…</strong>}
            options={[
              { id: "r1", content: "R1 : 9°", correct: false },
              { id: "r2", content: "R2 : 18°", correct: false },
              { id: "r3", content: "R3 : 16,2°", correct: true },
              { id: "r4", content: "R4 : 14,4°", correct: false },
            ]}
          />
          <QcmQuestion
            id="qcm6"
            prompt={<strong>Il y a 27 poissons…</strong>}
            options={[
              { id: "r1", content: "R1 : et 120 mammifères", correct: false },
              { id: "r2", content: "R2 : et 39 reptiles", correct: true },
              { id: "r3", content: "R3 : et 17 reptiles", correct: false },
              { id: "r4", content: "R4 : et 69 mammifères", correct: false },
            ]}
          />
          <QcmQuestion
            id="qcm7"
            prompt={<strong>La répartition (reptiles 13 %, oiseaux 18 %, mammifères 60 %, poissons 9 %) peut être représentée par les deux graphiques…</strong>}
            options={[
              { id: "r1", content: "R1 : cercle A", correct: true },
              { id: "r2", content: "R2 : cercle B", correct: false },
              { id: "r3", content: "R3 : barres A", correct: false },
              { id: "r4", content: "R4 : barres B", correct: true },
            ]}
          />
          <QcmQuestion
            id="qcm8"
            prompt={<strong>Quelles sont les affirmations vraies ?</strong>}
            options={[
              { id: "r1", content: "R1 : la fréquence d'une valeur est un nombre compris entre 0 et 1", correct: true },
              { id: "r2", content: "R2 : la fréquence 0,5 correspond à 5 %", correct: false },
              { id: "r3", content: "R3 : dans un diagramme circulaire, la fréquence 100 % correspond à 100°", correct: false },
              { id: "r4", content: "R4 : dans un diagramme semi-circulaire, un angle droit correspond à une fréquence de 0,25", correct: false },
            ]}
          />
        </QcmSection>
      </LessonSection>

      {/* ===================== POUR ALLER PLUS LOIN ===================== */}
      <LessonSection
        id="plus-loin"
        kicker="Pour aller plus loin"
        title="Une activité corrigée, et deux projets de groupe"
        tone="light"
      >
        <div className="mb-6 rounded-2xl border border-border bg-surface p-5 md:p-7">
          <h3 className="mb-3 font-display text-lg font-bold text-foreground">π · Les mystères du nombre π</h3>
          <p className="mb-2 text-sm text-foreground-muted">Voici les 60 premières décimales de 22/7 et de π :</p>
          <div className="mb-3 space-y-1 rounded-xl bg-violet-100/60 p-4 font-mono text-xs break-all text-violet-800">
            <p>22/7 ≈ 3,142857 142857 142857 142857 142857 142857 142857 142857 142857 142857</p>
            <p>π ≈ 3,141592 653589 793238 462643 383279 502884 197169 399375 105820 974944</p>
          </div>
          <p className="mb-3 text-sm text-foreground-muted">
            a. Que dire des parties décimales de ces deux nombres ? b. Calcule la fréquence d&apos;apparition de chaque
            chiffre pour les 60 premières décimales. Que remarques-tu ? c. Quel monument de Paris contient une salle
            avec les décimales de π ? Combien en connaît-on aujourd&apos;hui ?
          </p>
          <Accordion>
            <AccordionItem title="Voir la correction">
              <div className="space-y-2.5">
                <p>
                  <strong>a.</strong> 22/7 est un nombre <strong>rationnel</strong> : ses décimales sont{" "}
                  <strong>périodiques</strong> (le motif « 142857 » se répète). π est <strong>irrationnel</strong> : ses
                  décimales ne se répètent jamais et semblent aléatoires, bien que 22/7 soit une approximation courante
                  de π.
                </p>
                <p>
                  <strong>b.</strong> Pour 22/7 : sur 60 décimales (10 cycles complets), seuls les chiffres{" "}
                  <strong>1, 2, 4, 5, 7, 8</strong> apparaissent, chacun 10 fois (fréquence 1/6 ≈ 16,7 %) ; les chiffres{" "}
                  <strong>0, 3, 6, 9</strong> n&apos;apparaissent <strong>jamais</strong>. Pour π : les 10 chiffres
                  apparaissent tous, avec des fréquences proches de 10 % chacun (entre 5 % et 16,7 % ici), sans motif
                  répétitif.
                </p>
                <p>
                  Cette différence illustre le caractère périodique de 22/7 (rationnel) contre le caractère irrégulier
                  de π (irrationnel).
                </p>
                <p>
                  <strong>c.</strong> Le <strong>Palais de la Découverte</strong>, à Paris, possède une salle circulaire
                  (la « salle π ») où sont inscrites plusieurs centaines de décimales de π. Grâce aux supercalculateurs,
                  on en connaît aujourd&apos;hui plusieurs dizaines de <strong>milliers de milliards</strong>.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        <Callout variant="warning" title="🤝 Travailler en groupe — deux projets ouverts (sans correction type)">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-1 font-bold">1. Menez l&apos;enquête…</p>
              <p>
                Élaborez un questionnaire de deux questions (une qualitative, une quantitative), distribuez-le à la
                classe, dépouillez les réponses, puis construisez un diagramme circulaire et un histogramme.
              </p>
            </div>
            <div>
              <p className="mb-1 font-bold">2. Du côté de Monte-Carlo…</p>
              <p>
                À l&apos;aide d&apos;un simulateur de tirs aléatoires sur une cible, estimez l&apos;aire d&apos;une
                figure : Aire estimée ≈ Aire de la cible × fréquence de tirs dans la figure. Comparez avec l&apos;aire
                calculée par la formule.
              </p>
            </div>
          </div>
        </Callout>
      </LessonSection>
    </LessonShell>
  );
}
