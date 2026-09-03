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
  title: "La Proportionnalité · Cours et exercices corrigés | 1AC",
  description:
    "Cours détaillé sur la proportionnalité : reconnaître un tableau ou un graphique de proportionnalité, quatrième proportionnelle, pourcentages, et 10 exercices corrigés en détail, 1ère année collège, semestre 2.",
  kicker: "1ʳᵉ Année Collège · Chapitre 11",
  heroTitle: "La Proportionnalité",
  heroSubtitle:
    "Deux grandeurs qui varient toujours dans la même proportion. Un seul nombre, le coefficient, suffit à passer de l'une à l'autre.",
  footerNote: "La proportionnalité · Mathématiques, 1ʳᵉ année collège, semestre 2.",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "situations", label: "Situations" },
    { id: "quatrieme", label: "4ᵉ proport." },
    { id: "pourcentage", label: "Pourcentage" },
    { id: "exercices", label: "Exercices" },
  ],
};

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      {n ? <span className="font-bold text-green-700">{n}.</span> : null} {children}
    </div>
  );
}

/** Small data table used for proportionality tables throughout the lesson. */
function DataTable({ rows }: { rows: ReactNode[][] }) {
  return (
    <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-center text-sm">
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i > 0 ? "border-t border-border" : ""}>
            {row.map((cell, j) => (
              <td key={j} className={`p-2 ${j === 0 ? "bg-surface-muted font-semibold" : ""}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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
          { value: "4", label: "parties de cours" },
          { value: "10", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#definition"
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
          <div className="relative flex select-none items-center gap-3 font-serif text-white italic">
            <span className="text-[6rem] leading-none font-bold sm:text-[8rem]">×</span>
            <span className="text-[6rem] leading-none font-bold text-amber-400 sm:text-[8rem]">k</span>
          </div>
        }
      />

      {/* ===================== I. DEFINITION ===================== */}
      <LessonSection
        id="definition"
        kicker="01 · La définition"
        title="Reconnaître la proportionnalité"
        tone="light"
        description="La notion de base : des nombres proportionnels, et un coefficient qui fait le lien."
      >
        <p className="mb-4 max-w-2xl text-sm text-foreground-muted">
          Dire que <Math tex="a" />, <Math tex="b" /> et <Math tex="c" /> sont respectivement proportionnels à{" "}
          <Math tex="x" />, <Math tex="y" /> et <Math tex="z" /> veut dire qu&apos;on passe des uns aux autres en
          multipliant par le <strong>même nombre</strong> <Math tex="k" /> (non nul).
        </p>
        <FormulaBlock
          tex="a = x \times k \qquad b = y \times k \qquad c = z \times k"
          caption={<><Math tex="k" /> : le coefficient de proportionnalité</>}
        />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-4">
            <p className="mb-2 font-mono text-xs font-semibold text-green-700 uppercase">Exemple</p>
            <p className="mb-2 text-sm">
              <Math tex="6" />, <Math tex="15" /> et <Math tex="21" /> sont proportionnels à <Math tex="2" />,{" "}
              <Math tex="5" /> et <Math tex="7" />.
            </p>
            <div className="space-y-1 text-sm text-foreground-muted">
              <p><Math tex="6 = 2 \times 3" /></p>
              <p><Math tex="15 = 5 \times 3" /></p>
              <p><Math tex="21 = 7 \times 3" /></p>
            </div>
            <p className="mt-2 text-sm">
              <Math tex="3" /> est le <strong className="text-green-700">coefficient de proportionnalité</strong>.
            </p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
            <p className="mb-2 font-mono text-xs font-semibold text-rose-700 uppercase">Contre-exemple</p>
            <p className="mb-2 text-sm">
              <Math tex="6" />, <Math tex="22" /> et <Math tex="40" /> ne sont <strong>pas</strong> proportionnels à{" "}
              <Math tex="3" />, <Math tex="11" /> et <Math tex="15" />.
            </p>
            <div className="space-y-1 text-sm text-foreground-muted">
              <p><Math tex="6 = 3 \times 2" /></p>
              <p><Math tex="22 = 11 \times 2" /></p>
              <p><Math tex="40 \neq 15 \times 2 \ (= 30)" /></p>
            </div>
            <p className="mt-2 text-sm">Le rapport n&apos;est <strong>pas constant</strong> : pas de proportionnalité.</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. SITUATIONS ===================== */}
      <LessonSection
        id="situations"
        kicker="02 · Deux façons de vérifier"
        title="Tableau ou graphique de proportionnalité"
        tone="muted"
        description="Un tableau : les rapports colonne par colonne sont tous égaux. Un graphique : tous les points sont alignés avec l'origine."
      >
        <div className="mb-6 rounded-2xl border border-border bg-surface p-5">
          <h3 className="mb-3 font-display text-lg font-bold text-foreground">1. Tableau de proportionnalité</h3>
          <Callout variant="info">
            Un tableau est <strong>de proportionnalité</strong> quand les nombres de la 2ᵉ ligne sont proportionnels
            à ceux de la 1ʳᵉ ligne.
          </Callout>

          <p className="mt-4 mb-2 font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
          <DataTable rows={[["1", "3", "7", "9"], ["4", "12", "28", "36"]]} />
          <p className="mt-2 text-sm text-foreground-muted">
            <Math tex="4 = 1 \times 4,\quad 12 = 3 \times 4,\quad 28 = 7 \times 4,\quad 36 = 9 \times 4" />
          </p>
          <p className="mt-2 text-sm">Le rapport est constant : <strong>c&apos;est un tableau de proportionnalité</strong>, de coefficient <Math tex="4" />.</p>

          <p className="mt-5 mb-2 font-mono text-xs font-semibold text-rose-600 uppercase">Contre-exemple</p>
          <DataTable rows={[["2", "4", "7", "11"], ["10", "20", "14", "55"]]} />
          <p className="mt-2 text-sm text-foreground-muted">
            <Math tex="10 = 2 \times 5,\quad 20 = 4 \times 5,\quad 14 \neq 7 \times 5,\quad 55 = 11 \times 5" />
          </p>
          <p className="mt-2 text-sm">Le rapport n&apos;est pas le même partout : <strong>ce n&apos;est pas un tableau de proportionnalité</strong>.</p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="mb-3 font-display text-lg font-bold text-foreground">2. Graphique de proportionnalité</h3>
          <Callout variant="info">
            Un graphique est <strong>de proportionnalité</strong> quand tous les points sont alignés{" "}
            <strong>avec l&apos;origine</strong> du repère.
          </Callout>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-4">
              <p className="mb-2 text-center font-mono text-xs font-semibold text-green-700 uppercase">Exemple</p>
              <svg viewBox="0 0 220 200" className="mx-auto h-auto w-full max-w-[220px]">
                <line x1="30" y1="170" x2="210" y2="170" className="stroke-foreground-muted" strokeWidth="1.5" />
                <line x1="30" y1="170" x2="30" y2="10" className="stroke-foreground-muted" strokeWidth="1.5" />
                <line x1="30" y1="170" x2="30" y2="130" strokeDasharray="3,3" className="stroke-border" />
                <line x1="30" y1="130" x2="70" y2="130" strokeDasharray="3,3" className="stroke-border" />
                <line x1="70" y1="170" x2="70" y2="130" strokeDasharray="3,3" className="stroke-border" />
                <line x1="30" y1="90" x2="110" y2="90" strokeDasharray="3,3" className="stroke-border" />
                <line x1="110" y1="170" x2="110" y2="90" strokeDasharray="3,3" className="stroke-border" />
                <line x1="30" y1="50" x2="150" y2="50" strokeDasharray="3,3" className="stroke-border" />
                <line x1="150" y1="170" x2="150" y2="50" strokeDasharray="3,3" className="stroke-border" />
                <line x1="30" y1="170" x2="190" y2="10" className="stroke-green-600" strokeWidth="2.5" />
                <circle cx="70" cy="130" r="4" className="fill-green-600" />
                <circle cx="110" cy="90" r="4" className="fill-green-600" />
                <circle cx="150" cy="50" r="4" className="fill-green-600" />
                <circle cx="30" cy="170" r="4" className="fill-foreground" />
                <text x="16" y="184" fontSize="11" className="fill-foreground-muted">0</text>
              </svg>
              <p className="mt-2 text-center text-xs text-foreground-muted">
                Tous les points sont alignés <strong>avec l&apos;origine</strong> → graphique de proportionnalité.
              </p>
            </div>
            <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
              <p className="mb-2 text-center font-mono text-xs font-semibold text-rose-700 uppercase">Contre-exemple</p>
              <svg viewBox="0 0 220 200" className="mx-auto h-auto w-full max-w-[220px]">
                <line x1="30" y1="170" x2="210" y2="170" className="stroke-foreground-muted" strokeWidth="1.5" />
                <line x1="30" y1="170" x2="30" y2="10" className="stroke-foreground-muted" strokeWidth="1.5" />
                <line x1="30" y1="130" x2="70" y2="130" strokeDasharray="3,3" className="stroke-border" />
                <line x1="70" y1="170" x2="70" y2="130" strokeDasharray="3,3" className="stroke-border" />
                <line x1="30" y1="100" x2="110" y2="100" strokeDasharray="3,3" className="stroke-border" />
                <line x1="110" y1="170" x2="110" y2="100" strokeDasharray="3,3" className="stroke-border" />
                <line x1="30" y1="50" x2="150" y2="50" strokeDasharray="3,3" className="stroke-border" />
                <line x1="150" y1="170" x2="150" y2="50" strokeDasharray="3,3" className="stroke-border" />
                <line x1="55" y1="150" x2="190" y2="30" className="stroke-rose-500" strokeWidth="2.5" />
                <circle cx="70" cy="130" r="4" className="fill-rose-500" />
                <circle cx="110" cy="100" r="4" className="fill-rose-500" />
                <circle cx="150" cy="50" r="4" className="fill-rose-500" />
                <circle cx="30" cy="170" r="4" className="fill-foreground" />
                <text x="16" y="184" fontSize="11" className="fill-foreground-muted">0</text>
              </svg>
              <p className="mt-2 text-center text-xs text-foreground-muted">
                La droite <strong>ne passe pas</strong> par l&apos;origine → pas de proportionnalité.
              </p>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. QUATRIEME PROPORTIONNELLE ===================== */}
      <LessonSection
        id="quatrieme"
        kicker="03 · La valeur manquante"
        title="Quatrième proportionnelle"
        tone="light"
        description="Trois valeurs connues sur quatre : la quatrième se calcule avec un produit en croix."
      >
        <Callout variant="warning">
          Dans un tableau de proportionnalité, si on connaît <strong>trois</strong> valeurs sur quatre, on peut
          calculer la quatrième : c&apos;est la <strong>quatrième proportionnelle</strong>.
        </Callout>

        <p className="mt-5 mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">Exemples</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <DataTable rows={[["2", "6"], ["x", "12"]]} />
            <p className="mt-3 text-center text-sm text-foreground-muted"><Math tex="x = \dfrac{2 \times 12}{6} = \dfrac{24}{6}" /></p>
            <p className="text-center text-sm font-bold text-green-700"><Math tex="x = 4" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <DataTable rows={[["8", "y"], ["4", "5"]]} />
            <p className="mt-3 text-center text-sm text-foreground-muted"><Math tex="y = \dfrac{8 \times 5}{4} = \dfrac{40}{4}" /></p>
            <p className="text-center text-sm font-bold text-green-700"><Math tex="y = 10" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <DataTable rows={[["3", "9"], ["2", "z"]]} />
            <p className="mt-3 text-center text-sm text-foreground-muted"><Math tex="z = \dfrac{2 \times 9}{3} = \dfrac{18}{3}" /></p>
            <p className="text-center text-sm font-bold text-green-700"><Math tex="z = 6" /></p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <DataTable rows={[["t", "6"], ["11", "3"]]} />
            <p className="mt-3 text-center text-sm text-foreground-muted"><Math tex="t = \dfrac{11 \times 6}{3} = \dfrac{66}{3}" /></p>
            <p className="text-center text-sm font-bold text-green-700"><Math tex="t = 22" /></p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== IV. POURCENTAGE ===================== */}
      <LessonSection
        id="pourcentage"
        kicker="04 · Un cas particulier"
        title="Le pourcentage"
        tone="muted"
        description="Toujours le même tableau, mais avec 100 dans une case."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="mb-1 font-display text-base font-bold text-foreground">a) Calculer un pourcentage</h3>
            <p className="mt-2 mb-3 text-sm text-foreground-muted">
              Une classe de 30 élèves compte 12 filles. Quel pourcentage de filles ?
            </p>
            <DataTable rows={[["30", "100"], ["12", "x"]]} />
            <p className="mt-3 text-sm text-foreground-muted">
              <Math tex="x = \dfrac{12 \times 100}{30} = \dfrac{1200}{30} = \mathbf{40}" />
            </p>
            <p className="mt-2 text-sm">Il y a <strong>40 %</strong> de filles dans cette classe.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="mb-1 font-display text-base font-bold text-foreground">b) Utiliser un pourcentage</h3>
            <p className="mt-2 mb-3 text-sm text-foreground-muted">
              Une classe de 40 élèves compte 15 % de garçons. Combien de garçons ?
            </p>
            <DataTable rows={[["40", "100"], ["x", "15"]]} />
            <p className="mt-3 text-sm text-foreground-muted">
              <Math tex="x = \dfrac{40 \times 15}{100} = \dfrac{600}{100} = \mathbf{6}" />
            </p>
            <p className="mt-2 text-sm">Il y a <strong>6 garçons</strong> dans cette classe.</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="10 exercices corrigés"
        tone="light"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={10} celebrationTitle="Bravo, les 10 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la proportionnalité.">
          <ExerciseCard
            id="1"
            index={1}
            title="Tableau de proportionnalité ?"
            itemsLabel="3 tableaux"
            items={
              <div className="grid gap-3 sm:grid-cols-3">
                <DataTable rows={[["2", "3", "5", "10", "15"], ["1,4", "2,1", "3,5", "7", "10,5"]]} />
                <DataTable rows={[["3", "5", "10", "12", "18"], ["21", "35", "60", "84", "90"]]} />
                <DataTable rows={[["6", "9", "14", "25", "30"], ["15", "22,5", "35", "60", "75"]]} />
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-3">
                <CorrectionCard n="Tab. 1">
                  <Math tex="\dfrac{1{,}4}{2}=\dfrac{2{,}1}{3}=\dfrac{3{,}5}{5}=\dfrac{7}{10}=\dfrac{10{,}5}{15}=0{,}7" /> : rapport constant → <strong>proportionnel</strong>.
                </CorrectionCard>
                <CorrectionCard n="Tab. 2">
                  <Math tex="\dfrac{21}{3}=7" /> mais <Math tex="\dfrac{60}{10}=6 \neq 7" /> → <strong>pas proportionnel</strong>.
                </CorrectionCard>
                <CorrectionCard n="Tab. 3">
                  <Math tex="\dfrac{15}{6}=2{,}5" /> mais <Math tex="\dfrac{60}{25}=2{,}4 \neq 2{,}5" /> → <strong>pas proportionnel</strong>.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Prix proportionnels aux masses ?"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">Les prix sont-ils proportionnels aux masses ? Explique.</p>
                <DataTable rows={[["Masse (g)", "100", "125", "300", "540"], ["Prix (dh)", "2,8", "3,5", "8,4", "15,12"]]} />
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="">
                  <Math tex="\dfrac{2{,}8}{100}=\dfrac{3{,}5}{125}=\dfrac{8{,}4}{300}=\dfrac{15{,}12}{540}=0{,}028" />
                </CorrectionCard>
                <CorrectionCard n="">
                  Le rapport est constant : <strong>oui</strong>, les prix sont proportionnels aux masses, coefficient <Math tex="0{,}028" /> dh/g.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Euros et dirhams"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">1 € vaut 10,60 dh. Complète le tableau en trouvant le coefficient.</p>
                <DataTable rows={[["Montant (€)", "1", "?", "100", "110"], ["Montant (dh)", "?", "265", "?", "?"]]} />
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="">Coefficient <Math tex="k = 10{,}60" /> (1 € = 10,60 dh).</CorrectionCard>
                <CorrectionCard n="">
                  <Math tex="1 \times 10{,}60 = \mathbf{10{,}60}" /> dh &nbsp;·&nbsp; <Math tex="265 \div 10{,}60 = \mathbf{25}" /> € &nbsp;·&nbsp; <Math tex="100 \times 10{,}60 = \mathbf{1060}" /> dh &nbsp;·&nbsp; <Math tex="110 \times 10{,}60 = \mathbf{1166}" /> dh
                </CorrectionCard>
                <DataTable rows={[["Montant (€)", "1", "25", "100", "110"], ["Montant (dh)", "10,60", "265", "1060", "1166"]]} />
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title={<>Calculer <Math tex="x" />, <Math tex="y" />, <Math tex="z" /></>}
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">Le tableau ci-dessous est de proportionnalité. Calcule x, y et z :</p>
                <DataTable rows={[["x", "2,8", "z+1", "7"], ["24", "y", "12", "4"]]} />
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="">La 4ᵉ colonne est complète : coefficient <Math tex="k = \dfrac{4}{7}" />.</CorrectionCard>
                <CorrectionCard n="x"><Math tex="\dfrac{24}{x}=\dfrac{4}{7} \implies x = 24 \times \dfrac{7}{4} = \dfrac{168}{4} = \mathbf{42}" /></CorrectionCard>
                <CorrectionCard n="y"><Math tex="\dfrac{y}{2{,}8}=\dfrac{4}{7} \implies y = 2{,}8 \times \dfrac{4}{7} = \dfrac{11{,}2}{7} = \mathbf{1{,}6}" /></CorrectionCard>
                <CorrectionCard n="z"><Math tex="\dfrac{12}{z+1}=\dfrac{4}{7} \implies z+1 = 12 \times \dfrac{7}{4} = 21 \implies \mathbf{z = 20}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Lequel de ces graphiques ?"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">Lesquels de ces deux graphiques représentent une proportionnalité ?</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-2 text-center text-xs font-semibold text-foreground-muted">a-</p>
                    <svg viewBox="0 0 200 160" className="mx-auto h-auto w-full max-w-[180px]">
                      <line x1="25" y1="140" x2="185" y2="140" className="stroke-foreground-muted" strokeWidth="1.5" />
                      <line x1="25" y1="140" x2="25" y2="15" className="stroke-foreground-muted" strokeWidth="1.5" />
                      <line x1="25" y1="140" x2="170" y2="25" className="stroke-blue-600" strokeWidth="2.5" />
                      <circle cx="25" cy="140" r="4" className="fill-foreground" />
                      <circle cx="75" cy="102" r="4" className="fill-blue-600" />
                      <circle cx="125" cy="64" r="4" className="fill-blue-600" />
                      <circle cx="170" cy="30" r="4" className="fill-blue-600" />
                      <text x="10" y="152" fontSize="11" className="fill-foreground-muted">0</text>
                    </svg>
                  </div>
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-2 text-center text-xs font-semibold text-foreground-muted">b-</p>
                    <svg viewBox="0 0 200 160" className="mx-auto h-auto w-full max-w-[180px]">
                      <line x1="25" y1="140" x2="185" y2="140" className="stroke-foreground-muted" strokeWidth="1.5" />
                      <line x1="25" y1="140" x2="25" y2="15" className="stroke-foreground-muted" strokeWidth="1.5" />
                      <line x1="25" y1="110" x2="170" y2="30" className="stroke-rose-500" strokeWidth="2.5" />
                      <circle cx="25" cy="140" r="4" className="fill-foreground" />
                      <circle cx="75" cy="88" r="4" className="fill-rose-500" />
                      <circle cx="125" cy="59" r="4" className="fill-rose-500" />
                      <circle cx="170" cy="35" r="4" className="fill-rose-500" />
                      <text x="10" y="152" fontSize="11" className="fill-foreground-muted">0</text>
                    </svg>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="a">Tous les points sont alignés <strong>avec l&apos;origine</strong> → <strong>graphique de proportionnalité</strong>.</CorrectionCard>
                <CorrectionCard n="b">Les points sont alignés entre eux, mais la droite <strong>ne passe pas par l&apos;origine</strong> → <strong>pas</strong> de proportionnalité.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title={<>Calculer <Math tex="x" /></>}
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">Ce tableau est de proportionnalité. Calcule x :</p>
                <DataTable rows={[["x−7", "x−5"], ["3", "4"]]} />
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="">Produits en croix égaux : <Math tex="(x-7) \times 4 = (x-5) \times 3" /></CorrectionCard>
                <CorrectionCard n=""><Math tex="4x - 28 = 3x - 15" /></CorrectionCard>
                <CorrectionCard n=""><Math tex="4x - 3x = -15 + 28 \implies \mathbf{x = 13}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title={<>Calculer <Math tex="a" />, <Math tex="b" />, <Math tex="c" /></>}
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">
                  Ce tableau est de proportionnalité et <Math tex="\dfrac{a}{4} = 2" />. Calcule a, b et c :
                </p>
                <DataTable rows={[["a", "15", "c"], ["4", "b", "9"]]} />
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="">
                  <Math tex="\dfrac{a}{4}=2 \implies \mathbf{a=8}" />, donc le coefficient (ligne 1 ÷ ligne 2) est <Math tex="k=2" />.
                </CorrectionCard>
                <CorrectionCard n="b"><Math tex="\dfrac{15}{b}=2 \implies b = \dfrac{15}{2} = \mathbf{7{,}5}" /></CorrectionCard>
                <CorrectionCard n="c"><Math tex="\dfrac{c}{9}=2 \implies c = 9 \times 2 = \mathbf{18}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Les machines"
            items={
              <p className="text-sm text-foreground-muted">
                3 machines produisent 600 pièces en 4 jours. Combien de pièces produisent 2 de ces machines en 7 jours ?
              </p>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="">
                  Production d&apos;une machine en un jour : <Math tex="600 \div 3 \div 4 = \mathbf{50}" /> pièces.
                </CorrectionCard>
                <CorrectionCard n="">
                  Pour 2 machines pendant 7 jours : <Math tex="50 \times 2 \times 7 = \mathbf{700}" /> pièces.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="La consommation de la voiture"
            items={
              <div className="space-y-2">
                <p className="text-sm text-foreground-muted">Cette voiture consomme 4 L pour 100 km.</p>
                <ol className="list-inside list-decimal space-y-1 text-sm">
                  <li>Quelle distance parcourt-elle avec : a) 1 L ? b) 18 L ?</li>
                  <li>Quelle quantité consomme-t-elle pour : a) 1 km ? b) 320 km ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <CorrectionCard n="1a"><Math tex="100 \div 4 = \mathbf{25}" /> km avec 1 L.</CorrectionCard>
                <CorrectionCard n="1b"><Math tex="25 \times 18 = \mathbf{450}" /> km avec 18 L.</CorrectionCard>
                <CorrectionCard n="2a"><Math tex="4 \div 100 = \mathbf{0{,}04}" /> L pour 1 km.</CorrectionCard>
                <CorrectionCard n="2b"><Math tex="0{,}04 \times 320 = \mathbf{12{,}8}" /> L pour 320 km.</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Avion ou voiture ?"
            items={
              <div className="space-y-3">
                <p className="text-sm text-foreground-muted">Deux voyages, pour un trajet de 700 km, quel moyen de transport est le plus économique par personne ?</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-4 text-sm">
                    <p className="mb-1 font-bold text-foreground">✈️ Avion</p>
                    <p>Distance : 8 000 km</p>
                    <p>Passagers : 320</p>
                    <p>Carburant : 76 800 L</p>
                    <p>CO₂ émis : 35,84 t</p>
                  </div>
                  <div className="rounded-lg border border-border p-4 text-sm">
                    <p className="mb-1 font-bold text-foreground">🚗 Voiture</p>
                    <p>Distance : 200 km</p>
                    <p>Passagers : 4</p>
                    <p>Carburant : 8,8 L</p>
                    <p>CO₂ émis : 28 kg</p>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="">
                  Carburant/personne/km, avion : <Math tex="76\,800 \div 320 = 240" /> L pour 8 000 km, soit{" "}
                  <Math tex="240 \div 8\,000 = 0{,}03" /> L/km. Pour 700 km : <Math tex="0{,}03 \times 700 = \mathbf{21}" /> L.
                </CorrectionCard>
                <CorrectionCard n="">
                  Carburant/personne/km, voiture : <Math tex="8{,}8 \div 4 = 2{,}2" /> L pour 200 km, soit{" "}
                  <Math tex="2{,}2 \div 200 = 0{,}011" /> L/km. Pour 700 km : <Math tex="0{,}011 \times 700 = \mathbf{7{,}7}" /> L.
                </CorrectionCard>
                <CorrectionCard n="a">
                  <Math tex="7{,}7 < 21" /> : <strong>la voiture</strong> est la plus économique en carburant par personne.
                </CorrectionCard>
                <CorrectionCard n="">
                  CO₂/personne/km, avion : <Math tex="35{,}84 \div 320 = 0{,}112" /> t pour 8 000 km, soit 14 g/km. Pour 700 km :{" "}
                  <Math tex="14 \times 700 = \mathbf{9{,}8}" /> kg.
                </CorrectionCard>
                <CorrectionCard n="">
                  CO₂/personne/km, voiture : <Math tex="28 \div 4 = 7" /> kg pour 200 km, soit 35 g/km. Pour 700 km :{" "}
                  <Math tex="35 \times 700 = \mathbf{24{,}5}" /> kg.
                </CorrectionCard>
                <CorrectionCard n="b">
                  <Math tex="9{,}8 < 24{,}5" /> : <strong>l&apos;avion</strong> émet moins de CO₂ par personne sur ce trajet.
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
