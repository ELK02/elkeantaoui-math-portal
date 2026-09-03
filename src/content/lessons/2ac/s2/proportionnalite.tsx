import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Proportionnalité · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur la proportionnalité (tableaux, quatrième proportionnelle, représentation graphique, pourcentages, échelles, vitesse moyenne) et 8 exercices corrigés, 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 4",
  heroTitle: "Proportionnalité",
  heroSubtitle:
    "Deux grandeurs reliées par un seul coefficient. Une fois qu'on l'a trouvé, tout se calcule.",
  footerNote: "Proportionnalité · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "graphique", label: "Graphiques" },
    { id: "applications", label: "Applications" },
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
                  className={`px-4 py-2.5 whitespace-nowrap ${
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

const Q = () => <span className="text-foreground-muted/40">?</span>;

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
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
          { value: "8", label: "exercices" },
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
            <Math tex="y = k \times x" className="katex-formula-block text-4xl font-bold text-white sm:text-5xl" />
            <p className="font-mono text-xs text-neutral-400">coefficient de proportionnalité</p>
          </div>
        }
      />

      {/* ===================== I. COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Situations de proportionnalité"
        title="Tableaux et coefficient"
        tone="light"
        description="Deux séries de nombres, reliées par le même coefficient multiplicateur : c'est ça, la proportionnalité."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">1.1 · définition</p>
            <p className="text-sm text-foreground-muted">
              Une situation est <strong className="text-foreground">de proportionnalité</strong> quand deux
              grandeurs sont reliées par un même <strong className="text-foreground">coefficient multiplicateur</strong>,
              appelé coefficient de proportionnalité.
            </p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">1.2 · tableau de proportionnalité</p>
            <p className="text-sm text-foreground-muted">
              Un tableau de deux lignes est de proportionnalité s&apos;il existe un coefficient multiplicateur qui
              permet de passer d&apos;une ligne à l&apos;autre.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border p-5">
          <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">exemple</p>
          <DataTable
            rows={[
              ["Ligne 1", "0,2", "4", "7", "11"],
              ["Ligne 2", "1", "20", "35", "55"],
            ]}
          />
          <p className="mt-4 text-sm text-foreground-muted">
            On a <Math tex="\dfrac{1}{0{,}2} = \dfrac{20}{4} = \dfrac{35}{7} = \dfrac{55}{11} = \mathbf{5}" />.
          </p>
          <div className="mt-3">
            <Callout variant="success">
              Donc ce tableau est un tableau de proportionnalité : le coefficient de proportionnalité est 5.
            </Callout>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-surface-muted p-5">
          <p className="mb-2 font-mono text-xs text-foreground-muted">1.3 · quatrième proportionnelle</p>
          <p className="mb-4 text-sm text-foreground-muted">
            La quatrième proportionnelle de <Math tex="a" />, <Math tex="b" /> et <Math tex="c" /> est le nombre{" "}
            <Math tex="x" /> qui rend ce tableau proportionnel :
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <DataTable
              rows={[
                [<Math key="a" tex="a" />, <Math key="b" tex="b" />],
                [<Math key="c" tex="c" />, <Math key="x" tex="x" />],
              ]}
            />
          </div>
          <div className="mt-4">
            <FormulaBlock tex="x = \dfrac{b \times c}{a}" />
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. GRAPHIQUE ===================== */}
      <LessonSection
        id="graphique"
        kicker="02 · Représentation graphique"
        title="Des points alignés avec l'origine"
        tone="muted"
        description="Dans un repère, une situation de proportionnalité se voit tout de suite : les points sont alignés avec l'origine."
      >
        <div className="rounded-xl border border-border bg-surface p-5">
          <p className="text-sm text-foreground-muted">
            Si on représente une situation de proportionnalité dans un repère, on obtient des points{" "}
            <strong className="text-foreground">alignés avec l&apos;origine</strong> du repère. Réciproquement, des
            points alignés avec l&apos;origine représentent une situation de proportionnalité.
          </p>
        </div>

        <div className="mt-4 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 lg:grid-cols-2">
          <DataTable
            rows={[
              ["Grandeur 1", "10", "20", "25"],
              ["Grandeur 2", "4", "8", "10"],
            ]}
          />
          <svg viewBox="0 0 380 260" className="h-auto w-full">
            <line x1="40" y1="10" x2="40" y2="230" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="40" y1="230" x2="360" y2="230" stroke="#94a3b8" strokeWidth="1.5" />
            <g stroke="#e2e8f0" strokeWidth="1">
              <line x1="86" y1="10" x2="86" y2="230" />
              <line x1="132" y1="10" x2="132" y2="230" />
              <line x1="178" y1="10" x2="178" y2="230" />
              <line x1="224" y1="10" x2="224" y2="230" />
              <line x1="270" y1="10" x2="270" y2="230" />
              <line x1="316" y1="10" x2="316" y2="230" />
              <line x1="40" y1="194" x2="360" y2="194" />
              <line x1="40" y1="158" x2="360" y2="158" />
              <line x1="40" y1="122" x2="360" y2="122" />
              <line x1="40" y1="86" x2="360" y2="86" />
              <line x1="40" y1="50" x2="360" y2="50" />
            </g>
            <line x1="40" y1="230" x2="330" y2="14" stroke="#3a66f5" strokeWidth="2.5" />
            <circle cx="132" cy="158" r="5" fill="#2748d6" />
            <circle cx="178" cy="122" r="5" fill="#2748d6" />
            <circle cx="201" cy="104" r="5" fill="#2748d6" />
            <text x="140" y="150" fontSize="11" fill="#1c2f86" fontWeight="600">(10,4)</text>
            <text x="186" y="114" fontSize="11" fill="#1c2f86" fontWeight="600">(20,8)</text>
            <text x="208" y="96" fontSize="11" fill="#1c2f86" fontWeight="600">(25,10)</text>
            <text x="335" y="245" fontSize="11" fill="#94a3b8">Grandeur 1</text>
            <text x="8" y="15" fontSize="11" fill="#94a3b8">Grandeur 2</text>
            <text x="30" y="243" fontSize="10" fill="#94a3b8">0</text>
          </svg>
        </div>
        <p className="mt-3 text-sm text-foreground-muted">
          Cette situation de proportionnalité est représentée par des points alignés avec l&apos;origine.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Callout variant="success">
            <svg viewBox="0 0 200 160" className="mb-3 h-auto w-full rounded-lg bg-surface">
              <line x1="25" y1="10" x2="25" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="25" y1="140" x2="185" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="25" y1="140" x2="175" y2="18" stroke="#10b981" strokeWidth="3" />
              <circle cx="65" cy="112" r="4" fill="#047857" />
              <circle cx="105" cy="84" r="4" fill="#047857" />
              <circle cx="150" cy="52" r="4" fill="#047857" />
              <text x="18" y="153" fontSize="10" fill="#94a3b8">O</text>
            </svg>
            <p className="text-center text-sm font-semibold text-green-700">
              ✓ C&apos;est une situation de proportionnalité
            </p>
            <p className="mt-1 text-center text-xs text-foreground-muted">
              Les points sont alignés et passent par l&apos;origine.
            </p>
          </Callout>
          <Callout variant="danger">
            <svg viewBox="0 0 200 160" className="mb-3 h-auto w-full rounded-lg bg-surface">
              <line x1="25" y1="10" x2="25" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="25" y1="140" x2="185" y2="140" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="45" y1="118" x2="175" y2="38" stroke="#f43f5e" strokeWidth="3" />
              <circle cx="65" cy="105" r="4" fill="#be123c" />
              <circle cx="105" cy="80" r="4" fill="#be123c" />
              <circle cx="150" cy="52" r="4" fill="#be123c" />
              <text x="18" y="153" fontSize="10" fill="#94a3b8">O</text>
            </svg>
            <p className="text-center text-sm font-semibold text-rose-700">
              ✗ Ce n&apos;est pas une situation de proportionnalité
            </p>
            <p className="mt-1 text-center text-xs text-foreground-muted">
              La droite ne passe pas par l&apos;origine.
            </p>
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== III. APPLICATIONS ===================== */}
      <LessonSection
        id="applications"
        kicker="03 · Applications"
        title="Pourcentages, échelles, vitesse"
        tone="light"
        description="Trois situations classiques du quotidien qui sont, en fait, de la proportionnalité pure."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border p-5">
            <p className="mb-4 flex items-center gap-2 font-mono text-xs text-foreground-muted">
              <span className="text-lg">📊</span> 3.1 · pourcentage
            </p>

            <div className="mb-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple 1</p>
              <p className="mb-3 text-sm text-foreground-muted">
                Dans une classe de 25 élèves, 20 ont obtenu la moyenne au dernier devoir. Quel est le pourcentage
                d&apos;élèves qui ont la moyenne ?
              </p>
              <DataTable
                rows={[
                  ["Élèves avec la moyenne", "20", <Math key="x" tex="x" />],
                  ["Total des élèves", "25", "100"],
                ]}
              />
            </div>

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">Exemple 2</p>
              <p className="mb-3 text-sm text-foreground-muted">
                Dans un magasin, tous les prix augmentent de 20%. Calculer le prix d&apos;un article qui coûtait 13,5 dh.
              </p>
              <DataTable
                rows={[
                  ["Ancien prix (dh)", "100", "13,5"],
                  ["Augmentation (dh)", "20", <Math key="x" tex="x" />],
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border p-5">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs text-foreground-muted">
                <span className="text-lg">🗺️</span> 3.2 · échelle
              </p>
              <p className="mb-3 text-sm text-foreground-muted">
                Quand on agrandit ou réduit une figure, ses longueurs restent proportionnelles à celles de la figure
                de départ. Ce coefficient s&apos;appelle l&apos;<strong className="text-foreground">échelle</strong>.
              </p>
              <FormulaBlock tex="e = \dfrac{\text{longueur sur le plan}}{\text{longueur réelle}}" />
            </div>

            <div className="rounded-xl border border-border p-5">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs text-foreground-muted">
                <span className="text-lg">🚗</span> 3.3 · mouvement uniforme, vitesse moyenne
              </p>
              <p className="mb-3 text-sm text-foreground-muted">
                Un mouvement est <strong className="text-foreground">uniforme</strong> si la durée est proportionnelle
                à la distance parcourue. Le coefficient est la <strong className="text-foreground">vitesse moyenne</strong>.
              </p>
              <p className="mb-3 text-sm text-foreground-muted">
                Avec <Math tex="d" /> = distance, <Math tex="t" /> = durée, <Math tex="v" /> = vitesse moyenne :
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="rounded-lg bg-surface-muted px-4 py-2 text-sm font-semibold">
                  <Math tex="d = v \times t" />
                </span>
                <span className="rounded-lg bg-surface-muted px-4 py-2 text-sm font-semibold">
                  <Math tex="v = \dfrac{d}{t}" />
                </span>
                <span className="rounded-lg bg-surface-muted px-4 py-2 text-sm font-semibold">
                  <Math tex="t = \dfrac{d}{v}" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="8 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={8} celebrationTitle="Bravo, les 8 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la proportionnalité.">
          <ExerciseCard
            id="1"
            index={1}
            title="Tableaux de proportionnalité ?"
            itemsLabel="3 tableaux"
            items={
              <div className="grid gap-3 sm:grid-cols-3">
                <DataTable rows={[["3,5", "8"], ["7", "15"]]} />
                <DataTable rows={[["2,4", "88"], ["1,5", "55"]]} />
                <DataTable rows={[["5,6", "7", "9"], ["8", "10", "13"]]} />
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="7 \div 3{,}5 = 2" /> et <Math tex="15 \div 8 = 1{,}875" /> : coefficients différents →{" "}
                  <strong className="text-rose-600">ce n&apos;est pas</strong> un tableau de proportionnalité.
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <Math tex="1{,}5 \div 2{,}4 = 0{,}625" /> et <Math tex="55 \div 88 = 0{,}625" /> : même coefficient →{" "}
                  <strong className="text-green-700">c&apos;est</strong> un tableau de proportionnalité, coefficient ={" "}
                  <strong>0,625</strong>.
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="8 \div 5{,}6 \approx 1{,}43" />, <Math tex="10 \div 7 \approx 1{,}43" /> mais{" "}
                  <Math tex="13 \div 9 \approx 1{,}44" /> : coefficient non constant →{" "}
                  <strong className="text-rose-600">ce n&apos;est pas</strong> un tableau de proportionnalité.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Complète les tableaux"
            itemsLabel="2 tableaux"
            items={
              <div className="space-y-3">
                <DataTable rows={[["25", "32", <Q key="q" />, "50", <Q key="q2" />], ["10", <Q key="q3" />, "47", <Q key="q4" />, "4,7"]]} />
                <DataTable rows={[[<Q key="q5" />, "12", <Q key="q6" />, "90", "240"], ["0,1", "0,2", "1", <Q key="q7" />, <Q key="q8" />]]} />
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 text-foreground-muted">
                    Tableau 1 : coefficient = <Math tex="10 \div 25 = \mathbf{0{,}4}" /> (ligne 2 = ligne 1 × 0,4)
                  </p>
                  <DataTable
                    rows={[
                      ["25", "32", "117,5", "50", "11,75"],
                      ["10", "12,8", "47", "20", "4,7"],
                    ]}
                    highlight={[]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-foreground-muted">
                    Tableau 2 : coefficient = <Math tex="0{,}2 \div 12 = \dfrac{1}{60}" /> (ligne 1 = ligne 2 × 60)
                  </p>
                  <DataTable
                    rows={[
                      ["6", "12", "60", "90", "240"],
                      ["0,1", "0,2", "1", "1,5", "4"],
                    ]}
                  />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="2 kg de bananes coûtent 16 DH"
            items={
              <ol className="list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                <li>Quel est le prix au kilo ?</li>
                <li>Combien coûtent 3,5 kg de bananes ?</li>
                <li>Quelle masse de bananes puis-je acheter avec 58 DH ?</li>
              </ol>
            }
            correction={
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                <li>Prix au kilo = <Math tex="16 \div 2 = \mathbf{8 \text{ DH/kg}}" /></li>
                <li>Prix de 3,5 kg = <Math tex="3{,}5 \times 8 = \mathbf{28 \text{ DH}}" /></li>
                <li>Masse pour 58 DH = <Math tex="58 \div 8 = \mathbf{7{,}25 \text{ kg}}" /></li>
              </ol>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="20 L de lait pour 3 L de crème"
            items={
              <ol className="list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                <li>Combien faut-il de lait pour faire 4,5 L de crème ?</li>
                <li>Combien de litres de crème peut-on faire avec 1,5 L de lait ?</li>
              </ol>
            }
            correction={
              <div className="text-sm">
                <p className="mb-2 text-foreground-muted">
                  Coefficient (crème / lait) = <Math tex="3 \div 20 = \mathbf{0{,}15}" />
                </p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>Lait pour 4,5 L de crème = <Math tex="4{,}5 \div 0{,}15 = \mathbf{30 \text{ L}}" /></li>
                  <li>Crème avec 1,5 L de lait = <Math tex="1{,}5 \times 0{,}15 = \mathbf{0{,}225 \text{ L}}" /></li>
                </ol>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Pourcentage d'élèves à la boxe"
            items={
              <p className="text-sm text-foreground-muted">
                Dans un collège, 300 élèves sont inscrits à l&apos;AS. 40% de ces 300 élèves pratiquent la boxe.
                Quel est le nombre d&apos;élèves pratiquant la boxe ?
              </p>
            }
            correction={
              <p className="text-sm">
                Nombre d&apos;élèves = <Math tex="300 \times 40 \div 100 = 300 \times 0{,}40 = \mathbf{120 \text{ élèves}}" />
              </p>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Conversions de vitesses"
            items={
              <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground-muted">
                <li>Transformer en km/h : 20 m/s ; 14 m/s ; 200 m/s</li>
                <li>Transformer en m/s : 90 km/h ; 5 km/h ; 1200 km/h</li>
              </ol>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  <strong>m/s → km/h</strong> (on multiplie par 3,6) : <Math tex="20 \times 3{,}6 = \mathbf{72}" /> ·{" "}
                  <Math tex="14 \times 3{,}6 = \mathbf{50{,}4}" /> · <Math tex="200 \times 3{,}6 = \mathbf{720}" /> km/h
                </p>
                <p>
                  <strong>km/h → m/s</strong> (on divise par 3,6) : <Math tex="90 \div 3{,}6 = \mathbf{25}" /> ·{" "}
                  <Math tex="5 \div 3{,}6 \approx \mathbf{1{,}39}" /> · <Math tex="1200 \div 3{,}6 \approx \mathbf{333{,}33}" /> m/s
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Pourcentages en situation"
            items={
              <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground-muted">
                <li>Dans une classe de 30 élèves, il y a 18 filles. Quel est le pourcentage de filles ?</li>
                <li>Un fromage de 500 g compte 40% de matière grasse. Quelle est la masse de matière grasse ?</li>
                <li>
                  Les plus de 65 ans ne payent que 75% du prix d&apos;un billet de train. M. Dupont, 70 ans, a payé
                  son billet 34,35 €. Quel est le prix plein tarif ?
                </li>
              </ol>
            }
            correction={
              <ol className="list-decimal space-y-2 pl-5 text-sm">
                <li>Pourcentage de filles = <Math tex="18 \div 30 \times 100 = \mathbf{60\%}" /></li>
                <li>Masse de matière grasse = <Math tex="500 \times 40 \div 100 = \mathbf{200 \text{ g}}" /></li>
                <li>
                  Prix plein tarif = <Math tex="34{,}35 \div 75 \times 100 = 34{,}35 \div 0{,}75 = \mathbf{45{,}80}" /> €
                </li>
              </ol>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Usain Bolt : 100 m ou 200 m ?"
            items={
              <p className="text-sm text-foreground-muted">
                Le 16 août 2009, Usain Bolt a établi le record du 100 m en 9,58 s. Quatre jours plus tard, il a battu
                le record du 200 m en 19,19 s. Court-il plus vite le 100 m ou le 200 m ?
              </p>
            }
            correction={
              <div className="space-y-1.5 text-sm">
                <p>Vitesse sur 100 m : <Math tex="v = 100 \div 9{,}58 \approx \mathbf{10{,}44 \text{ m/s}}" /></p>
                <p>Vitesse sur 200 m : <Math tex="v = 200 \div 19{,}19 \approx \mathbf{10{,}42 \text{ m/s}}" /></p>
                <p className="pt-1">
                  Comme <Math tex="10{,}44 > 10{,}42" />,{" "}
                  <strong className="text-green-700">Usain Bolt a couru plus vite le 100 m</strong> que le 200 m.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
