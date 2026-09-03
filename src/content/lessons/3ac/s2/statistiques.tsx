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
  title: "Les Statistiques · Cours et exercices | 3AC",
  description:
    "Cours complet de statistiques : vocabulaire (population, caractère, effectif, fréquence), moyenne arithmétique, médiane et mode, avec exemples résolus et 6 exercices d'application corrigés en détail avec graphiques, 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 7",
  heroTitle: "Les Statistiques",
  heroSubtitle:
    "Population, effectif, fréquence : le vocabulaire de base. Puis trois nombres pour résumer une série entière : moyenne, médiane et mode.",
  footerNote: "Statistiques · Mathématiques, 3ᵉ année collège, semestre 2.",
  sections: [
    { id: "vocabulaire", label: "Vocabulaire" },
    { id: "moyenne", label: "Moyenne" },
    { id: "mediane", label: "Médiane" },
    { id: "mode", label: "Mode" },
    { id: "memo", label: "Mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Green "verified result" chip (source's "result-chip-ok"). */
function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-green-500/30 bg-green-100/60 px-3 py-1.5 text-sm font-semibold text-green-800">
      ✓ {children}
    </span>
  );
}

/** Wrapper for the SVG bar-charts / histograms / pie-chart. */
function Chart({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-border bg-surface p-4">{children}</div>;
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "4", label: "notions clés" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "étapes détaillées" },
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
          <svg viewBox="0 0 200 160" className="h-44 w-52 sm:h-52 sm:w-60">
            <line x1="20" y1="10" x2="20" y2="140" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
            <line x1="20" y1="140" x2="190" y2="140" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
            <rect x="35" y="95" width="24" height="45" fill="#ffffff" fillOpacity="0.35" rx="2" />
            <rect x="75" y="60" width="24" height="80" fill="#fb923c" rx="2" />
            <rect x="115" y="80" width="24" height="60" fill="#ffffff" fillOpacity="0.35" rx="2" />
            <rect x="155" y="30" width="24" height="110" fill="#ffffff" fillOpacity="0.55" rx="2" />
          </svg>
        }
      />

      {/* ===================== I. VOCABULAIRE ===================== */}
      <LessonSection
        id="vocabulaire"
        kicker="01 · Le vocabulaire de base"
        title="Vocabulaire : rappel"
        tone="light"
        description="Population, caractère, effectif, fréquence : les mots qu'il faut maîtriser avant de calculer quoi que ce soit."
      >
        <Callout variant="info" title="Exemple 1 · fil rouge">
          <p>
            Le tableau suivant présente les notes obtenues par des élèves d&apos;une classe de <Math tex="3APIC" /> :
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[280px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-sky-600 text-white">
                  <th className="px-3 py-2 font-semibold">Notes</th>
                  <th className="px-3 py-2 font-semibold">8</th>
                  <th className="px-3 py-2 font-semibold">10</th>
                  <th className="px-3 py-2 font-semibold">13</th>
                  <th className="px-3 py-2 font-semibold">16</th>
                </tr>
              </thead>
              <tbody className="bg-surface">
                <tr>
                  <td className="px-3 py-2 text-left font-semibold text-foreground">Nombre d&apos;élèves</td>
                  <td className="px-3 py-2">2</td><td className="px-3 py-2">6</td><td className="px-3 py-2">9</td><td className="px-3 py-2">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Callout>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-l-4 border-rose-400 border-y border-r border-border bg-surface p-4">
            <p className="font-display font-bold text-rose-700">Population</p>
            <p className="mt-1.5 text-sm text-foreground-muted">C&apos;est l&apos;ensemble étudié dans l&apos;enquête.</p>
            <p className="mt-2 text-xs text-foreground-muted">Ex. 1 : la population est <strong>une classe de 3APIC</strong>.</p>
          </div>
          <div className="rounded-xl border-l-4 border-rose-400 border-y border-r border-border bg-surface p-4">
            <p className="font-display font-bold text-rose-700">Caractère</p>
            <p className="mt-1.5 text-sm text-foreground-muted">C&apos;est ce qui est étudié dans la population.</p>
            <p className="mt-2 text-xs text-foreground-muted">Ex. 1 : le caractère est <strong>la note</strong>.</p>
          </div>
          <div className="rounded-xl border-l-4 border-indigo-400 border-y border-r border-border bg-surface p-4">
            <p className="font-display font-bold text-indigo-700">Effectif</p>
            <p className="mt-1.5 text-sm text-foreground-muted">L&apos;effectif d&apos;une valeur est le nombre de fois qu&apos;on la retrouve.</p>
            <p className="mt-2 text-xs text-foreground-muted">Ex. 1 : l&apos;effectif de 10 est 6.</p>
          </div>
          <div className="rounded-xl border-l-4 border-indigo-400 border-y border-r border-border bg-surface p-4">
            <p className="font-display font-bold text-indigo-700">Effectif total</p>
            <p className="mt-1.5 text-sm text-foreground-muted">C&apos;est le nombre d&apos;individus de la population : la somme de tous les effectifs.</p>
            <p className="mt-2 text-xs text-foreground-muted">Ex. 1 : <Math tex="2+6+9+3=20" />.</p>
          </div>
          <div className="rounded-xl border-l-4 border-violet-400 border-y border-r border-border bg-surface p-4">
            <p className="font-display font-bold text-violet-700">Effectif cumulé</p>
            <p className="mt-1.5 text-sm text-foreground-muted">Somme de l&apos;effectif de cette valeur et des effectifs de toutes les valeurs précédentes.</p>
            <p className="mt-2 text-xs text-foreground-muted">Ex. 1 : effectifs cumulés 2, 8, 17, 20.</p>
          </div>
          <div className="rounded-xl border-l-4 border-violet-400 border-y border-r border-border bg-surface p-4">
            <p className="font-display font-bold text-violet-700">Fréquence</p>
            <p className="mt-1.5 text-sm text-foreground-muted">Quotient de l&apos;effectif d&apos;une valeur par l&apos;effectif total.</p>
            <p className="mt-2 text-xs text-foreground-muted">Ex. 1 : fréquence de 10 = <Math tex="\dfrac{6}{20}=0{,}3" />.</p>
          </div>
          <div className="rounded-xl border-l-4 border-green-400 border-y border-r border-border bg-surface p-4 sm:col-span-2">
            <p className="font-display font-bold text-green-700">Fréquence cumulée</p>
            <p className="mt-1.5 text-sm text-foreground-muted">Somme de la fréquence de cette valeur et des fréquences de toutes les valeurs précédentes.</p>
            <p className="mt-2 text-xs text-foreground-muted">Ex. 1 : fréquences cumulées 0,1, 0,4, 0,85, 1.</p>
          </div>
        </div>

        <p className="mt-8 mb-2 text-sm font-semibold text-foreground">Le tableau complet de l&apos;exemple 1</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-center text-sm">
            <tbody className="bg-surface">
              <tr className="bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">
                <td className="px-3 py-2 text-left font-semibold">Caractères</td><td className="px-3 py-2">8</td><td className="px-3 py-2">10</td><td className="px-3 py-2">13</td><td className="px-3 py-2">16</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Effectifs</td><td className="px-3 py-2">2</td><td className="px-3 py-2">6</td><td className="px-3 py-2">9</td><td className="px-3 py-2">3</td>
              </tr>
              <tr className="border-t border-border bg-surface-muted">
                <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Effectifs cumulés</td><td className="px-3 py-2">2</td><td className="px-3 py-2">8</td><td className="px-3 py-2">17</td><td className="px-3 py-2 font-bold text-indigo-700">20</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Fréquences</td><td className="px-3 py-2">0,1</td><td className="px-3 py-2">0,3</td><td className="px-3 py-2">0,45</td><td className="px-3 py-2">0,15</td>
              </tr>
              <tr className="border-t border-border bg-surface-muted">
                <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Fréquences cumulées</td><td className="px-3 py-2">0,1</td><td className="px-3 py-2">0,4</td><td className="px-3 py-2">0,85</td><td className="px-3 py-2 font-bold text-indigo-700">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-foreground-muted">
          L&apos;effectif total (20) est aussi la dernière valeur des effectifs cumulés ; 1 est toujours la dernière
          valeur des fréquences cumulées.
        </p>
      </LessonSection>

      {/* ===================== II. MOYENNE ===================== */}
      <LessonSection
        id="moyenne"
        kicker="02 · Une valeur qui résume tout"
        title="Moyenne arithmétique"
        tone="light"
        description="Le quotient de la somme pondérée des valeurs par l'effectif total."
      >
        <Callout variant="danger" title="Définition">
          <p>
            La moyenne arithmétique d&apos;une série statistique est le quotient de la somme des produits de chaque
            valeur du caractère par l&apos;effectif correspondant, par l&apos;effectif total de la série :
          </p>
        </Callout>
        <FormulaBlock tex="m=\dfrac{\text{somme des (valeur}\times\text{effectif)}}{\text{effectif total}}" />

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">Exemple 1 · série discrète (reprend l&apos;exemple 1)</p>
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-center text-sm"><Math tex="m=\dfrac{8\times2+10\times6+13\times9+16\times3}{20}=\dfrac{241}{20}" /></p>
          <p className="mt-3"><Chip><Math tex="m=12{,}05" /></Chip></p>
        </div>

        <Callout variant="warning" title="Remarque">
          <p>
            Pour une série <strong>regroupée en classes</strong>, la moyenne est le quotient de la somme des produits
            du <strong>centre de chaque classe</strong> par l&apos;effectif de la classe, par l&apos;effectif total.
            Si <Math tex="a\leq x<b" /> est une classe, son centre est <Math tex="\dfrac{a+b}{2}" />.
          </p>
        </Callout>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">Exemple 2 · série regroupée en classes (poids, en kg)</p>
        <div className="rounded-xl border border-border bg-surface p-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-center text-sm">
              <tbody>
                <tr className="bg-violet-600 text-white">
                  <td className="px-3 py-2 text-left font-semibold">Classe de poids</td>
                  <td className="px-3 py-2"><Math tex="30\leq p<40" /></td>
                  <td className="px-3 py-2"><Math tex="40\leq p<50" /></td>
                  <td className="px-3 py-2"><Math tex="50\leq p<60" /></td>
                  <td className="px-3 py-2"><Math tex="60\leq p<70" /></td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Effectif</td>
                  <td className="px-3 py-2">14</td><td className="px-3 py-2">8</td><td className="px-3 py-2">6</td><td className="px-3 py-2">12</td>
                </tr>
                <tr className="border-t border-border bg-surface-muted">
                  <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Centre</td>
                  <td className="px-3 py-2">35,5</td><td className="px-3 py-2">45,5</td><td className="px-3 py-2">55,5</td><td className="px-3 py-2">65,5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm"><Math tex="m=\dfrac{14\times35{,}5+8\times45{,}5+6\times55{,}5+12\times65{,}5}{14+8+6+12}=\dfrac{1980}{40}" /></p>
          <p className="mt-3"><Chip><Math tex="m=49{,}5" /></Chip></p>
        </div>
      </LessonSection>

      {/* ===================== III. MÉDIANE ===================== */}
      <LessonSection
        id="mediane"
        kicker="03 · Couper la série en deux"
        title="Médiane d'une série statistique"
        tone="light"
        description="La valeur qui partage la population en deux groupes de même effectif."
      >
        <Callout variant="danger" title="Définition">
          <p>
            La médiane d&apos;une série statistique dont les valeurs sont classées par ordre croissant est la valeur
            du caractère qui partage la population en deux groupes de <strong>même effectif</strong>.
          </p>
        </Callout>

        <p className="mt-6 mb-1 text-lg font-bold text-foreground">Méthode 1 · effectif réduit, valeurs triées</p>
        <p className="mb-4 text-sm text-foreground-muted">On classe toutes les valeurs par ordre croissant, puis :</p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs font-semibold uppercase text-foreground-muted">Effectif total impair</p>
            <p className="mt-2 text-sm">La médiane est la valeur qui se trouve exactement au milieu.</p>
            <div className="mt-3 rounded-lg bg-surface-muted p-3 text-center font-mono text-sm">
              6 ; 7 ; 7 ; 7 ; <span className="rounded bg-neutral-950 px-1.5 py-0.5 font-bold text-white dark:bg-white dark:text-neutral-950">7</span> ; 8 ; 9 ; 9 ; 10
            </div>
            <p className="mt-2 text-center text-xs text-foreground-muted">4 valeurs · médiane · 4 valeurs</p>
            <p className="mt-3"><Chip>médiane <Math tex="=7" /></Chip></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs font-semibold uppercase text-foreground-muted">Effectif total pair</p>
            <p className="mt-2 text-sm">La médiane est la <strong>moyenne des deux valeurs</strong> du milieu.</p>
            <div className="mt-3 rounded-lg bg-surface-muted p-3 text-center font-mono text-sm">
              6 ; 6 ; 7 ; 7 ; <span className="rounded bg-neutral-950 px-1.5 py-0.5 font-bold text-white dark:bg-white dark:text-neutral-950">7 ; 8</span> ; 8 ; 9 ; 9 ; 10
            </div>
            <p className="mt-2 text-center text-xs text-foreground-muted">4 valeurs · les 2 du milieu · 4 valeurs</p>
            <p className="mt-2 text-center text-sm"><Math tex="\text{médiane}=\dfrac{7+8}{2}=7{,}5" /></p>
          </div>
        </div>

        <p className="mt-8 mb-2 text-lg font-bold text-foreground">Méthode 2 · grand effectif, effectifs cumulés</p>
        <Callout variant="info" title="Règle">
          <p>
            Si les valeurs sont classées par ordre croissant, la médiane est la <strong>plus petite valeur</strong>{" "}
            dont l&apos;effectif cumulé croissant est supérieur ou égal à la <strong>moitié de l&apos;effectif total</strong>.
          </p>
        </Callout>

        <div className="mt-4 rounded-xl border border-border bg-surface p-4">
          <p className="text-sm font-semibold text-foreground">Exemple · ventes journalières de voitures (31 jours)</p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-center text-sm">
              <tbody>
                <tr className="bg-teal-600 text-white">
                  <td className="px-3 py-2 text-left font-semibold">Les ventes</td><td className="px-3 py-2">0</td><td className="px-3 py-2">5</td><td className="px-3 py-2 ring-2 ring-inset ring-amber-400">7</td><td className="px-3 py-2">9</td><td className="px-3 py-2">10</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Les jours</td><td className="px-3 py-2">4</td><td className="px-3 py-2">8</td><td className="px-3 py-2">10</td><td className="px-3 py-2">6</td><td className="px-3 py-2">3</td>
                </tr>
                <tr className="border-t border-border bg-surface-muted">
                  <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Effectifs cumulés</td><td className="px-3 py-2">4</td><td className="px-3 py-2">12</td><td className="px-3 py-2 font-bold text-amber-600">22</td><td className="px-3 py-2">28</td><td className="px-3 py-2">31</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 space-y-4 border-l-2 border-indigo-200 pl-5">
            <div>
              <p className="text-xs font-semibold uppercase text-foreground-muted">1 · Moitié de l&apos;effectif total</p>
              <p className="mt-1 text-sm"><Math tex="\dfrac{31}{2}=15{,}5" /></p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-foreground-muted">2 · Plus petite valeur avec effectif cumulé ≥ 15,5</p>
              <p className="mt-1 text-sm text-foreground-muted">
                Effectifs cumulés : 4, 12, 22, 28, 31. Le premier ≥ 15,5 est 22, qui correspond à la valeur 7.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-green-700">✓ Conclusion</p>
              <p className="mt-1 text-sm">La valeur médiane de cette série est <Math tex="\boxed{7}" />.</p>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== IV. MODE ===================== */}
      <LessonSection
        id="mode"
        kicker="04 · La valeur la plus fréquente"
        title="Mode d'une série statistique"
        tone="light"
        description="La valeur (ou la classe) qui a le plus grand effectif."
      >
        <Callout variant="danger" title="Définition">
          <p>
            Le mode d&apos;une série statistique est la valeur (ou la classe) du caractère qui possède le{" "}
            <strong>plus grand effectif</strong>.
          </p>
        </Callout>
        <div className="mt-4 rounded-xl border border-border bg-surface p-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[280px] border-collapse text-center text-sm">
              <tbody>
                <tr className="bg-fuchsia-600 text-white">
                  <td className="px-3 py-2 text-left font-semibold">Caractère</td><td className="px-3 py-2">4</td><td className="px-3 py-2 ring-2 ring-inset ring-amber-400">5</td><td className="px-3 py-2">7</td><td className="px-3 py-2">10</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-3 py-2 text-left font-semibold text-foreground-muted">Effectif</td><td className="px-3 py-2">5</td><td className="px-3 py-2 font-bold text-amber-600">11</td><td className="px-3 py-2">10</td><td className="px-3 py-2">3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-foreground-muted">La valeur 5 possède le plus grand effectif (11).</p>
          <p className="mt-3"><Chip>le mode de cette série est <Math tex="5" /></Chip></p>
        </div>
      </LessonSection>

      {/* ===================== MÉMO ===================== */}
      <LessonSection id="memo" kicker="05 · Révision express" title="Points clés à retenir" tone="muted"
        description="Les six formules indispensables avant d'attaquer les exercices."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg">Σ</span>
            <p className="mt-3 font-display font-bold text-foreground">Effectif total</p>
            <p className="mt-2 text-sm text-foreground-muted">Somme de tous les effectifs de la série.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-lg">📊</span>
            <p className="mt-3 font-display font-bold text-foreground">Fréquence</p>
            <p className="mt-2 text-center text-sm"><Math tex="f=\dfrac{\text{effectif}}{\text{effectif total}}" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-lg">🧮</span>
            <p className="mt-3 font-display font-bold text-foreground">Moyenne arithmétique</p>
            <p className="mt-2 text-center text-sm"><Math tex="m=\dfrac{\sum(\text{valeur}\times\text{effectif})}{\text{effectif total}}" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-lg">🎯</span>
            <p className="mt-3 font-display font-bold text-foreground">Médiane (petit effectif)</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li className="flex justify-between gap-2 border-b border-dashed border-border pb-1.5"><span>effectif impair</span><span className="font-semibold text-teal-700">valeur du milieu</span></li>
              <li className="flex justify-between gap-2"><span>effectif pair</span><span className="font-semibold text-teal-700">moyenne des 2 du milieu</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-lg">📈</span>
            <p className="mt-3 font-display font-bold text-foreground">Médiane (grand effectif)</p>
            <p className="mt-2 text-sm text-foreground-muted">Plus petite valeur dont l&apos;effectif cumulé croissant ≥ moitié de l&apos;effectif total.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-100 text-lg">⭐</span>
            <p className="mt-3 font-display font-bold text-foreground">Mode</p>
            <p className="mt-2 text-sm text-foreground-muted">Valeur (ou classe) qui a le plus grand effectif.</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="6 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les statistiques.">
          <ExerciseCard
            id="1"
            index={1}
            title="Série discrète et diagramme en bâtons"
            items={
              <div className="text-sm">
                <p>
                  Après la correction d&apos;un devoir d&apos;expression écrite de français, le professeur a mis un
                  tableau contenant les erreurs commises par les élèves.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[280px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="bg-indigo-600 text-white">
                        <td className="px-3 py-1.5 text-left font-semibold">Nombre d&apos;erreurs</td><td className="px-3 py-1.5">0</td><td className="px-3 py-1.5">1</td><td className="px-3 py-1.5">2</td><td className="px-3 py-1.5">3</td><td className="px-3 py-1.5">4</td>
                      </tr>
                      <tr className="border-t border-border bg-surface">
                        <td className="px-3 py-1.5 text-left font-semibold text-foreground-muted">Nombre d&apos;élèves</td><td className="px-3 py-1.5">15</td><td className="px-3 py-1.5">5</td><td className="px-3 py-1.5">8</td><td className="px-3 py-1.5">6</td><td className="px-3 py-1.5">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ol className="mt-3 list-decimal space-y-1 pl-5">
                  <li>Construis le tableau des effectifs, effectifs cumulés, fréquences et fréquences cumulées.</li>
                  <li>Construis la représentation graphique (diagramme en bâtons) de cette série.</li>
                  <li>Calcule la moyenne arithmétique.</li>
                  <li>Calcule la médiane et le mode.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">1. Tableau complet</p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full min-w-[480px] border-collapse text-center text-sm">
                      <tbody>
                        <tr className="bg-indigo-600 text-white">
                          <td className="px-2 py-1.5 text-left font-semibold">Erreurs</td><td className="px-2 py-1.5">0</td><td className="px-2 py-1.5">1</td><td className="px-2 py-1.5">2</td><td className="px-2 py-1.5">3</td><td className="px-2 py-1.5">4</td>
                        </tr>
                        <tr className="border-t border-border bg-surface">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Effectifs</td><td className="px-2 py-1.5">15</td><td className="px-2 py-1.5">5</td><td className="px-2 py-1.5">8</td><td className="px-2 py-1.5">6</td><td className="px-2 py-1.5">6</td>
                        </tr>
                        <tr className="border-t border-border bg-surface-muted">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Eff. cumulés</td><td className="px-2 py-1.5 font-bold text-indigo-700">15</td><td className="px-2 py-1.5 font-bold text-indigo-700">20</td><td className="px-2 py-1.5 font-bold text-indigo-700">28</td><td className="px-2 py-1.5 font-bold text-indigo-700">34</td><td className="px-2 py-1.5 font-bold text-indigo-700">40</td>
                        </tr>
                        <tr className="border-t border-border bg-surface">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Fréquences</td><td className="px-2 py-1.5">0,375</td><td className="px-2 py-1.5">0,125</td><td className="px-2 py-1.5">0,2</td><td className="px-2 py-1.5">0,15</td><td className="px-2 py-1.5">0,15</td>
                        </tr>
                        <tr className="border-t border-border bg-surface-muted">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Fréq. cumulées</td><td className="px-2 py-1.5 font-bold text-indigo-700">0,375</td><td className="px-2 py-1.5 font-bold text-indigo-700">0,5</td><td className="px-2 py-1.5 font-bold text-indigo-700">0,7</td><td className="px-2 py-1.5 font-bold text-indigo-700">0,85</td><td className="px-2 py-1.5 font-bold text-indigo-700">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-foreground-muted">Effectif total = 15+5+8+6+6 = 40 élèves.</p>
                </div>
                <div>
                  <p className="font-semibold">2. Diagramme en bâtons</p>
                  <Chart>
                    <svg viewBox="0 0 460 280" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="46" y1="20" x2="46" y2="234" stroke="#94a3b8" strokeWidth="1.5"/>
                      <line x1="46" y1="234" x2="440" y2="234" stroke="#94a3b8" strokeWidth="1.5"/>
                      <line x1="42" y1="234.0" x2="440" y2="234.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <text x="38" y="238.0" fontSize="11" fill="#94a3b8" textAnchor="end">0</text>
                      <line x1="42" y1="162.7" x2="440" y2="162.7" stroke="#e2e8f0" strokeWidth="1"/>
                      <text x="38" y="166.7" fontSize="11" fill="#94a3b8" textAnchor="end">5</text>
                      <line x1="42" y1="91.3" x2="440" y2="91.3" stroke="#e2e8f0" strokeWidth="1"/>
                      <text x="38" y="95.3" fontSize="11" fill="#94a3b8" textAnchor="end">10</text>
                      <line x1="42" y1="20.0" x2="440" y2="20.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <text x="38" y="24.0" fontSize="11" fill="#94a3b8" textAnchor="end">15</text>
                      <rect x="69.6" y="20.0" width="31.5" height="214.0" fill="#4f46e5" rx="3"/>
                      <text x="85.4" y="14.0" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">15</text>
                      <text x="85.4" y="252.0" fontSize="12" fill="#475569" textAnchor="middle">0</text>
                      <rect x="148.4" y="162.7" width="31.5" height="71.3" fill="#4f46e5" rx="3"/>
                      <text x="164.2" y="156.7" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">5</text>
                      <text x="164.2" y="252.0" fontSize="12" fill="#475569" textAnchor="middle">1</text>
                      <rect x="227.2" y="119.9" width="31.5" height="114.1" fill="#4f46e5" rx="3"/>
                      <text x="243.0" y="113.9" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">8</text>
                      <text x="243.0" y="252.0" fontSize="12" fill="#475569" textAnchor="middle">2</text>
                      <rect x="306.0" y="148.4" width="31.5" height="85.6" fill="#4f46e5" rx="3"/>
                      <text x="321.8" y="142.4" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">6</text>
                      <text x="321.8" y="252.0" fontSize="12" fill="#475569" textAnchor="middle">3</text>
                      <rect x="384.8" y="148.4" width="31.5" height="85.6" fill="#4f46e5" rx="3"/>
                      <text x="400.6" y="142.4" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">6</text>
                      <text x="400.6" y="252.0" fontSize="12" fill="#475569" textAnchor="middle">4</text>
                      <text x="243.0" y="274" fontSize="12" fill="#334155" textAnchor="middle" fontStyle="italic">Nombre d&apos;erreurs</text>
                      <text x="14" y="30" fontSize="11" fill="#334155" textAnchor="start" fontStyle="italic">Effectif</text>
                    </svg>
                  </Chart>
                </div>
                <div>
                  <p className="font-semibold">3. Moyenne arithmétique</p>
                  <p className="mt-1"><Math tex="m=\dfrac{0\times15+1\times5+2\times8+3\times6+4\times6}{40}=\dfrac{63}{40}" /></p>
                  <p className="mt-1"><Chip><Math tex="m=1{,}575" /> erreur</Chip></p>
                </div>
                <div>
                  <p className="font-semibold">4. Médiane et mode</p>
                  <p className="mt-1 text-foreground-muted">
                    Effectif total <Math tex="n=40" /> (pair) → la médiane est la moyenne des 20ᵉ et 21ᵉ valeurs.
                    D&apos;après les effectifs cumulés : rangs 16 à 20 → valeur 1 ; rangs 21 à 28 → valeur 2. Donc la
                    20ᵉ valeur est 1 et la 21ᵉ est 2.
                  </p>
                  <p className="mt-2 text-center"><Math tex="\text{médiane}=\dfrac{1+2}{2}=1{,}5" /></p>
                  <p className="mt-2 text-foreground-muted">Le plus grand effectif est 15, pour la valeur 0.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Chip>médiane <Math tex="=1{,}5" /></Chip>
                    <Chip>mode <Math tex="=0" /></Chip>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Classes et histogramme"
            items={
              <div className="text-sm">
                <p>Dans un club de sport, 25 adhérents ont parcouru une distance <Math tex="d" /> (en km) :</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[300px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="bg-sky-600 text-white">
                        <td className="px-3 py-1.5 text-left font-semibold">Distance</td>
                        <td className="px-3 py-1.5"><Math tex="0\leq d<2" /></td><td className="px-3 py-1.5"><Math tex="2\leq d<4" /></td><td className="px-3 py-1.5"><Math tex="4\leq d<6" /></td><td className="px-3 py-1.5"><Math tex="6\leq d<8" /></td>
                      </tr>
                      <tr className="border-t border-border bg-surface">
                        <td className="px-3 py-1.5 text-left font-semibold text-foreground-muted">Effectif</td><td className="px-3 py-1.5">2</td><td className="px-3 py-1.5">12</td><td className="px-3 py-1.5">7</td><td className="px-3 py-1.5">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ol className="mt-3 list-decimal space-y-1 pl-5">
                  <li>Construis le tableau des effectifs, effectifs cumulés, fréquences et fréquences cumulées.</li>
                  <li>Calcule la moyenne arithmétique.</li>
                  <li>Calcule la médiane et le mode.</li>
                  <li>Représente les données par un histogramme.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">1. Tableau complet</p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full min-w-[420px] border-collapse text-center text-sm">
                      <tbody>
                        <tr className="bg-sky-600 text-white">
                          <td className="px-2 py-1.5 text-left font-semibold">Distance</td><td className="px-2 py-1.5">[0;2[</td><td className="px-2 py-1.5">[2;4[</td><td className="px-2 py-1.5">[4;6[</td><td className="px-2 py-1.5">[6;8[</td>
                        </tr>
                        <tr className="border-t border-border bg-surface">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Effectif</td><td className="px-2 py-1.5">2</td><td className="px-2 py-1.5">12</td><td className="px-2 py-1.5">7</td><td className="px-2 py-1.5">4</td>
                        </tr>
                        <tr className="border-t border-border bg-surface-muted">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Eff. cumulé</td><td className="px-2 py-1.5 font-bold text-sky-700">2</td><td className="px-2 py-1.5 font-bold text-sky-700">14</td><td className="px-2 py-1.5 font-bold text-sky-700">21</td><td className="px-2 py-1.5 font-bold text-sky-700">25</td>
                        </tr>
                        <tr className="border-t border-border bg-surface">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Fréquence</td><td className="px-2 py-1.5">0,08</td><td className="px-2 py-1.5">0,48</td><td className="px-2 py-1.5">0,28</td><td className="px-2 py-1.5">0,16</td>
                        </tr>
                        <tr className="border-t border-border bg-surface-muted">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Fréq. cumulée</td><td className="px-2 py-1.5 font-bold text-sky-700">0,08</td><td className="px-2 py-1.5 font-bold text-sky-700">0,56</td><td className="px-2 py-1.5 font-bold text-sky-700">0,84</td><td className="px-2 py-1.5 font-bold text-sky-700">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="font-semibold">2. Moyenne (centres de classes 1, 3, 5, 7)</p>
                    <p className="mt-1"><Math tex="m=\dfrac{1\times2+3\times12+5\times7+7\times4}{25}=\dfrac{101}{25}" /></p>
                    <p className="mt-1"><Chip><Math tex="m=4{,}04" /> km</Chip></p>
                    <p className="mt-3 font-semibold">3. Médiane et mode</p>
                    <p className="mt-1 text-foreground-muted">
                      Moitié de l&apos;effectif total : <Math tex="\frac{25}{2}=12{,}5" />. Effectifs cumulés : 2, 14,
                      21, 25 → le premier ≥ 12,5 est 14, dans la classe [2;4[.
                    </p>
                    <p className="mt-1 text-foreground-muted">Classe modale = classe de plus grand effectif (12).</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Chip>médiane dans [2;4[</Chip>
                      <Chip>mode = [2;4[</Chip>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">4. Histogramme</p>
                    <Chart>
                      <svg viewBox="0 0 520 280" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50" y1="20" x2="50" y2="230" stroke="#94a3b8" strokeWidth="1.5"/>
                        <line x1="50" y1="230" x2="500" y2="230" stroke="#94a3b8" strokeWidth="1.5"/>
                        <line x1="46" y1="230.0" x2="500" y2="230.0" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="234.0" fontSize="11" fill="#94a3b8" textAnchor="end">0</text>
                        <line x1="46" y1="177.5" x2="500" y2="177.5" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="181.5" fontSize="11" fill="#94a3b8" textAnchor="end">3</text>
                        <line x1="46" y1="125.0" x2="500" y2="125.0" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="129.0" fontSize="11" fill="#94a3b8" textAnchor="end">6</text>
                        <line x1="46" y1="72.5" x2="500" y2="72.5" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="76.5" fontSize="11" fill="#94a3b8" textAnchor="end">9</text>
                        <line x1="46" y1="20.0" x2="500" y2="20.0" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="24.0" fontSize="11" fill="#94a3b8" textAnchor="end">12</text>
                        <rect x="50.0" y="195.0" width="112.5" height="35.0" fill="#0ea5e9" stroke="white" strokeWidth="1.5"/>
                        <text x="106.2" y="189.0" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">2</text>
                        <rect x="162.5" y="20.0" width="112.5" height="210.0" fill="#0ea5e9" stroke="white" strokeWidth="1.5"/>
                        <text x="218.8" y="14.0" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">12</text>
                        <rect x="275.0" y="107.5" width="112.5" height="122.5" fill="#0ea5e9" stroke="white" strokeWidth="1.5"/>
                        <text x="331.2" y="101.5" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">7</text>
                        <rect x="387.5" y="160.0" width="112.5" height="70.0" fill="#0ea5e9" stroke="white" strokeWidth="1.5"/>
                        <text x="443.8" y="154.0" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">4</text>
                        <text x="50.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">0</text>
                        <text x="162.5" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">2</text>
                        <text x="275.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">4</text>
                        <text x="387.5" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">6</text>
                        <text x="500.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">8</text>
                        <text x="275.0" y="274" fontSize="12" fill="#334155" textAnchor="middle" fontStyle="italic">Distance parcourue (km)</text>
                      </svg>
                    </Chart>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Fréquence inconnue et diagramme demi-circulaire"
            items={
              <div className="text-sm">
                <p>
                  Une enquête menée auprès de 40 jeunes sur le nombre d&apos;heures de connexion à internet par jour a
                  donné les résultats suivants :
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[320px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="bg-violet-600 text-white">
                        <td className="px-3 py-1.5 text-left font-semibold">Connexion (h)</td><td className="px-3 py-1.5">1</td><td className="px-3 py-1.5">2</td><td className="px-3 py-1.5">3</td><td className="px-3 py-1.5">4</td>
                      </tr>
                      <tr className="border-t border-border bg-surface">
                        <td className="px-3 py-1.5 text-left font-semibold text-foreground-muted">Fréquence</td>
                        <td className="px-3 py-1.5"><Math tex="\frac{7}{20}" /></td><td className="px-3 py-1.5"><Math tex="\frac{3}{10}" /></td><td className="px-3 py-1.5">x</td><td className="px-3 py-1.5"><Math tex="\frac{3}{20}" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ol className="mt-3 list-decimal space-y-1 pl-5">
                  <li>Calcule la fréquence <Math tex="x" /> de la valeur 3.</li>
                  <li>Montre que 14 est l&apos;effectif de la valeur 1.</li>
                  <li>Dresse le tableau des effectifs et des effectifs cumulés.</li>
                  <li>Calcule le nombre d&apos;heures moyen.</li>
                  <li>Calcule la médiane et le mode.</li>
                  <li>Est-il vrai qu&apos;au moins la moitié de ces jeunes se connectent 2h par jour ?</li>
                  <li>Représente les effectifs par un diagramme demi-circulaire.</li>
                </ol>
              </div>
            }
            correction={
              <div className="grid gap-6 text-sm lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">1. Fréquence x de la valeur 3</p>
                    <p className="mt-1 text-foreground-muted">La somme de toutes les fréquences vaut 1 :</p>
                    <p className="mt-1"><Math tex="\dfrac{7}{20}+\dfrac{3}{10}+x+\dfrac{3}{20}=1 \ \Longrightarrow\ \dfrac{7}{20}+\dfrac{6}{20}+x+\dfrac{3}{20}=1" /></p>
                    <p className="mt-1"><Math tex="x=1-\dfrac{16}{20}=\dfrac{4}{20}" /></p>
                    <p className="mt-1"><Chip><Math tex="x=\frac{1}{5}=0{,}2" /></Chip></p>
                  </div>
                  <div>
                    <p className="font-semibold">2. Effectif de la valeur 1</p>
                    <p className="mt-1"><Math tex="\text{effectif}=\text{fréquence}\times\text{effectif total}=\dfrac{7}{20}\times40=14" /></p>
                    <p className="mt-1"><Chip>effectif de la valeur 1 <Math tex="=14" /></Chip></p>
                  </div>
                  <div>
                    <p className="font-semibold">3. Tableau des effectifs</p>
                    <div className="mt-2 overflow-x-auto">
                      <table className="w-full min-w-[320px] border-collapse text-center text-sm">
                        <tbody>
                          <tr className="bg-violet-600 text-white">
                            <td className="px-2 py-1.5 text-left font-semibold">Valeur (h)</td><td className="px-2 py-1.5">1</td><td className="px-2 py-1.5">2</td><td className="px-2 py-1.5">3</td><td className="px-2 py-1.5">4</td>
                          </tr>
                          <tr className="border-t border-border bg-surface">
                            <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Effectif</td><td className="px-2 py-1.5">14</td><td className="px-2 py-1.5">12</td><td className="px-2 py-1.5">8</td><td className="px-2 py-1.5">6</td>
                          </tr>
                          <tr className="border-t border-border bg-surface-muted">
                            <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Eff. cumulé</td><td className="px-2 py-1.5 font-bold text-violet-700">14</td><td className="px-2 py-1.5 font-bold text-violet-700">26</td><td className="px-2 py-1.5 font-bold text-violet-700">34</td><td className="px-2 py-1.5 font-bold text-violet-700">40</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">4. Nombre d&apos;heures moyen</p>
                    <p className="mt-1"><Math tex="m=\dfrac{1\times14+2\times12+3\times8+4\times6}{40}=\dfrac{86}{40}" /></p>
                    <p className="mt-1"><Chip><Math tex="m=2{,}15" /> h</Chip></p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">5. Médiane et mode</p>
                    <p className="mt-1 text-foreground-muted">
                      <Math tex="n=40" /> (pair) → moyenne des 20ᵉ et 21ᵉ valeurs. Effectifs cumulés : 14 puis 26 :
                      les rangs 15 à 26 valent tous 2, donc les 20ᵉ et 21ᵉ valeurs valent toutes les deux 2.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Chip>médiane <Math tex="=2" /></Chip>
                      <Chip>mode <Math tex="=1" /></Chip>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">6. Au moins la moitié se connectent-ils 2h par jour ?</p>
                    <p className="mt-1 text-foreground-muted">On calcule la fréquence de la valeur 2 :</p>
                    <p className="mt-1"><Math tex="f(2)=\dfrac{12}{40}=0{,}3=30\%" /></p>
                    <p className="mt-2 text-foreground-muted">30% &lt; 50% donc :</p>
                    <p className="mt-1"><Chip>Faux · seulement 30% des jeunes se connectent 2h par jour</Chip></p>
                  </div>
                  <div>
                    <p className="font-semibold">7. Diagramme demi-circulaire</p>
                    <p className="mt-1 text-xs text-foreground-muted">Angle = (effectif / 40) × 180°</p>
                    <Chart>
                      <svg viewBox="0 0 480 250" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
                        <path d="M160.00,190.00 L30.00,190.00 A130,130 0 0,1 100.98,74.17 Z" fill="#7c3aed" stroke="white" strokeWidth="2"/>
                        <text x="88.0" y="145.8" fontSize="14" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle">35%</text>
                        <path d="M160.00,190.00 L100.98,74.17 A130,130 0 0,1 219.02,74.17 Z" fill="#0ea5e9" stroke="white" strokeWidth="2"/>
                        <text x="160.0" y="105.5" fontSize="14" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle">30%</text>
                        <path d="M160.00,190.00 L219.02,74.17 A130,130 0 0,1 275.83,130.98 Z" fill="#10b981" stroke="white" strokeWidth="2"/>
                        <text x="219.8" y="130.2" fontSize="14" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle">20%</text>
                        <path d="M160.00,190.00 L275.83,130.98 A130,130 0 0,1 290.00,190.00 Z" fill="#f59e0b" stroke="white" strokeWidth="2"/>
                        <text x="242.2" y="170.3" fontSize="14" fontWeight="700" fill="white" textAnchor="middle" dominantBaseline="middle">15%</text>
                        <line x1="30" y1="190" x2="290" y2="190" stroke="#475569" strokeWidth="1.5"/>
                        <rect x="320" y="60" width="18" height="18" rx="4" fill="#7c3aed"/>
                        <text x="346" y="74" fontSize="13" fill="#334155" fontFamily="Inter,sans-serif">1 h · 14 (63°)</text>
                        <rect x="320" y="94" width="18" height="18" rx="4" fill="#0ea5e9"/>
                        <text x="346" y="108" fontSize="13" fill="#334155" fontFamily="Inter,sans-serif">2 h · 12 (54°)</text>
                        <rect x="320" y="128" width="18" height="18" rx="4" fill="#10b981"/>
                        <text x="346" y="142" fontSize="13" fill="#334155" fontFamily="Inter,sans-serif">3 h · 8 (36°)</text>
                        <rect x="320" y="162" width="18" height="18" rx="4" fill="#f59e0b"/>
                        <text x="346" y="176" fontSize="13" fill="#334155" fontFamily="Inter,sans-serif">4 h · 6 (27°)</text>
                      </svg>
                    </Chart>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Classes et histogramme"
            items={
              <div className="text-sm">
                <p>
                  Le tableau suivant donne la répartition des âges des ouvriers dans une entreprise de construction de
                  bâtiments :
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="bg-rose-500 text-white">
                        <td className="px-3 py-1.5 text-left font-semibold">Âge</td>
                        <td className="px-3 py-1.5"><Math tex="20\leq t<28" /></td><td className="px-3 py-1.5"><Math tex="28\leq t<36" /></td><td className="px-3 py-1.5"><Math tex="36\leq t<44" /></td><td className="px-3 py-1.5"><Math tex="44\leq t<52" /></td><td className="px-3 py-1.5"><Math tex="52\leq t<60" /></td>
                      </tr>
                      <tr className="border-t border-border bg-surface">
                        <td className="px-3 py-1.5 text-left font-semibold text-foreground-muted">Effectif</td><td className="px-3 py-1.5">4</td><td className="px-3 py-1.5">8</td><td className="px-3 py-1.5">7</td><td className="px-3 py-1.5">6</td><td className="px-3 py-1.5">5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ol className="mt-3 list-decimal space-y-1 pl-5">
                  <li>Dresse le tableau des effectifs cumulés.</li>
                  <li>Calcule l&apos;âge moyen des ouvriers.</li>
                  <li>Quelle est la classe modale ?</li>
                  <li>Dans quelle classe se trouve la médiane ?</li>
                  <li>Détermine le pourcentage d&apos;ouvriers dont l&apos;âge est strictement inférieur à 36 ans.</li>
                  <li>Représente cette série par un histogramme.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">1. Effectifs cumulés</p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full min-w-[440px] border-collapse text-center text-sm">
                      <tbody>
                        <tr className="bg-rose-500 text-white">
                          <td className="px-2 py-1.5 text-left font-semibold">Âge</td><td className="px-2 py-1.5">[20;28[</td><td className="px-2 py-1.5">[28;36[</td><td className="px-2 py-1.5">[36;44[</td><td className="px-2 py-1.5">[44;52[</td><td className="px-2 py-1.5">[52;60[</td>
                        </tr>
                        <tr className="border-t border-border bg-surface">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Effectif</td><td className="px-2 py-1.5">4</td><td className="px-2 py-1.5">8</td><td className="px-2 py-1.5">7</td><td className="px-2 py-1.5">6</td><td className="px-2 py-1.5">5</td>
                        </tr>
                        <tr className="border-t border-border bg-surface-muted">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Eff. cumulé</td><td className="px-2 py-1.5 font-bold text-rose-700">4</td><td className="px-2 py-1.5 font-bold text-rose-700">12</td><td className="px-2 py-1.5 font-bold text-rose-700">19</td><td className="px-2 py-1.5 font-bold text-rose-700">25</td><td className="px-2 py-1.5 font-bold text-rose-700">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-foreground-muted">Effectif total = 4+8+7+6+5 = 30 ouvriers.</p>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div>
                    <p className="font-semibold">2. Âge moyen (centres 24, 32, 40, 48, 56)</p>
                    <p className="mt-1"><Math tex="m=\dfrac{24\times4+32\times8+40\times7+48\times6+56\times5}{30}=\dfrac{1200}{30}" /></p>
                    <p className="mt-1"><Chip><Math tex="m=40" /> ans</Chip></p>
                    <p className="mt-3 font-semibold">3. Classe modale</p>
                    <p className="mt-1 text-foreground-muted">C&apos;est la classe de plus grand effectif (8) :</p>
                    <p className="mt-1"><Chip>classe modale = [28;36[</Chip></p>
                    <p className="mt-3 font-semibold">4. Classe de la médiane</p>
                    <p className="mt-1 text-foreground-muted">
                      Moitié de l&apos;effectif total : <Math tex="\frac{30}{2}=15" />. Effectifs cumulés : 4, 12, 19,
                      25, 30 → le premier ≥ 15 est 19, dans la classe [36;44[.
                    </p>
                    <p className="mt-1"><Chip>médiane dans [36;44[</Chip></p>
                    <p className="mt-3 font-semibold">5. Pourcentage d&apos;âge &lt; 36 ans</p>
                    <p className="mt-1 text-foreground-muted">Ouvriers des classes [20;28[ et [28;36[ : effectif cumulé = 12.</p>
                    <p className="mt-1"><Math tex="\dfrac{12}{30}=0{,}4=40\%" /></p>
                    <p className="mt-1"><Chip>40% des ouvriers ont moins de 36 ans</Chip></p>
                  </div>
                  <div>
                    <p className="font-semibold">6. Histogramme</p>
                    <Chart>
                      <svg viewBox="0 0 520 280" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50" y1="20" x2="50" y2="230" stroke="#94a3b8" strokeWidth="1.5"/>
                        <line x1="50" y1="230" x2="500" y2="230" stroke="#94a3b8" strokeWidth="1.5"/>
                        <line x1="46" y1="230.0" x2="500" y2="230.0" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="234.0" fontSize="11" fill="#94a3b8" textAnchor="end">0</text>
                        <line x1="46" y1="177.5" x2="500" y2="177.5" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="181.5" fontSize="11" fill="#94a3b8" textAnchor="end">2</text>
                        <line x1="46" y1="125.0" x2="500" y2="125.0" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="129.0" fontSize="11" fill="#94a3b8" textAnchor="end">4</text>
                        <line x1="46" y1="72.5" x2="500" y2="72.5" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="76.5" fontSize="11" fill="#94a3b8" textAnchor="end">6</text>
                        <line x1="46" y1="20.0" x2="500" y2="20.0" stroke="#e2e8f0" strokeWidth="1"/>
                        <text x="42" y="24.0" fontSize="11" fill="#94a3b8" textAnchor="end">8</text>
                        <rect x="50.0" y="125.0" width="90.0" height="105.0" fill="#f43f5e" stroke="white" strokeWidth="1.5"/>
                        <text x="95.0" y="119.0" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">4</text>
                        <rect x="140.0" y="20.0" width="90.0" height="210.0" fill="#f43f5e" stroke="white" strokeWidth="1.5"/>
                        <text x="185.0" y="14.0" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">8</text>
                        <rect x="230.0" y="46.2" width="90.0" height="183.8" fill="#f43f5e" stroke="white" strokeWidth="1.5"/>
                        <text x="275.0" y="40.2" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">7</text>
                        <rect x="320.0" y="72.5" width="90.0" height="157.5" fill="#f43f5e" stroke="white" strokeWidth="1.5"/>
                        <text x="365.0" y="66.5" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">6</text>
                        <rect x="410.0" y="98.8" width="90.0" height="131.2" fill="#f43f5e" stroke="white" strokeWidth="1.5"/>
                        <text x="455.0" y="92.8" fontSize="12" fontWeight="700" fill="#334155" textAnchor="middle">5</text>
                        <text x="50.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">20</text>
                        <text x="140.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">28</text>
                        <text x="230.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">36</text>
                        <text x="320.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">44</text>
                        <text x="410.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">52</text>
                        <text x="500.0" y="248.0" fontSize="10.5" fill="#475569" textAnchor="middle">60</text>
                        <text x="275.0" y="274" fontSize="12" fill="#334155" textAnchor="middle" fontStyle="italic">Âge (ans)</text>
                      </svg>
                    </Chart>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Complète le tableau"
            items={
              <div className="text-sm">
                <p>
                  Le tableau suivant représente la distribution du nombre de communications téléphoniques reçues par
                  une personne durant le mois de juin :
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[380px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="bg-teal-600 text-white">
                        <td className="px-3 py-1.5 text-left font-semibold">Nb communications</td><td className="px-3 py-1.5">0</td><td className="px-3 py-1.5">4</td><td className="px-3 py-1.5">5</td><td className="px-3 py-1.5">6</td><td className="px-3 py-1.5">7</td>
                      </tr>
                      <tr className="border-t border-border bg-surface">
                        <td className="px-3 py-1.5 text-left font-semibold text-foreground-muted">Nombre de jours</td><td className="px-3 py-1.5">4</td><td className="px-3 py-1.5">5</td><td className="px-3 py-1.5">7</td><td className="px-3 py-1.5">?</td><td className="px-3 py-1.5">10</td>
                      </tr>
                      <tr className="border-t border-border bg-surface-muted">
                        <td className="px-3 py-1.5 text-left font-semibold text-foreground-muted">Effectif cumulé</td><td className="px-3 py-1.5">–</td><td className="px-3 py-1.5">–</td><td className="px-3 py-1.5">–</td><td className="px-3 py-1.5 font-bold text-teal-700">21</td><td className="px-3 py-1.5">–</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ol className="mt-3 list-decimal space-y-1 pl-5">
                  <li>Complète le tableau.</li>
                  <li>Calcule la moyenne arithmétique.</li>
                  <li>Calcule la médiane et le mode.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">1. Tableau complété</p>
                  <p className="mt-1 text-foreground-muted">
                    Effectif cumulé à la valeur 6 est 21, et à la valeur 5 il vaut 4+5+7=16, donc l&apos;effectif de la
                    valeur 6 est 21−16=5.
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full min-w-[380px] border-collapse text-center text-sm">
                      <tbody>
                        <tr className="bg-teal-600 text-white">
                          <td className="px-2 py-1.5 text-left font-semibold">Nb communications</td><td className="px-2 py-1.5">0</td><td className="px-2 py-1.5">4</td><td className="px-2 py-1.5">5</td><td className="px-2 py-1.5">6</td><td className="px-2 py-1.5">7</td>
                        </tr>
                        <tr className="border-t border-border bg-surface">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Nombre de jours</td><td className="px-2 py-1.5">4</td><td className="px-2 py-1.5">5</td><td className="px-2 py-1.5">7</td><td className="px-2 py-1.5 font-bold text-teal-700">5</td><td className="px-2 py-1.5">10</td>
                        </tr>
                        <tr className="border-t border-border bg-surface-muted">
                          <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Effectif cumulé</td><td className="px-2 py-1.5 font-bold text-teal-700">4</td><td className="px-2 py-1.5 font-bold text-teal-700">9</td><td className="px-2 py-1.5 font-bold text-teal-700">16</td><td className="px-2 py-1.5 font-bold text-teal-700">21</td><td className="px-2 py-1.5 font-bold text-teal-700">31</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2 text-xs text-foreground-muted">Effectif total (nombre de jours observés) = 31.</p>
                </div>
                <div>
                  <p className="font-semibold">2. Moyenne arithmétique</p>
                  <p className="mt-1"><Math tex="m=\dfrac{0\times4+4\times5+5\times7+6\times5+7\times10}{31}=\dfrac{155}{31}" /></p>
                  <p className="mt-1"><Chip><Math tex="m=5" /> communications/jour</Chip></p>
                </div>
                <div>
                  <p className="font-semibold">3. Médiane et mode</p>
                  <p className="mt-1 text-foreground-muted">
                    <Math tex="n=31" /> (impair) → la médiane est la 16ᵉ valeur triée (<Math tex="\frac{31}{2}=15{,}5" />).
                    Effectifs cumulés : 4, 9, 16, 21, 31 → le premier ≥ 15,5 est 16, pour la valeur 5.
                  </p>
                  <p className="mt-1 text-foreground-muted">Le plus grand effectif est 10, pour la valeur 7.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Chip>médiane <Math tex="=5" /></Chip>
                    <Chip>mode <Math tex="=7" /></Chip>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Effectif inconnu via la moyenne"
            items={
              <div className="text-sm">
                <p>Le tableau suivant représente la répartition des âges des adhérents d&apos;un club :</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="bg-fuchsia-600 text-white">
                        <td className="px-2 py-1.5 text-left font-semibold">Âges</td><td className="px-2 py-1.5">17</td><td className="px-2 py-1.5">18</td><td className="px-2 py-1.5">22</td><td className="px-2 py-1.5">24</td><td className="px-2 py-1.5">28</td><td className="px-2 py-1.5">29</td><td className="px-2 py-1.5">30</td><td className="px-2 py-1.5">37</td><td className="px-2 py-1.5">38</td>
                      </tr>
                      <tr className="border-t border-border bg-surface">
                        <td className="px-2 py-1.5 text-left font-semibold text-foreground-muted">Adhérents</td><td className="px-2 py-1.5">2</td><td className="px-2 py-1.5">3</td><td className="px-2 py-1.5">3</td><td className="px-2 py-1.5">x</td><td className="px-2 py-1.5">2</td><td className="px-2 py-1.5">1</td><td className="px-2 py-1.5">3</td><td className="px-2 py-1.5">1</td><td className="px-2 py-1.5">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3">Sachant que la moyenne de l&apos;âge de ce groupe est 25 :</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Montre que le nombre des adhérents âgés de 24 ans est 4.</li>
                  <li>Détermine le pourcentage des adhérents âgés de plus de 23 ans.</li>
                  <li>Calcule la médiane et le mode.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">1. Valeur de x</p>
                  <p className="mt-1 text-foreground-muted">
                    Effectif total = 2+3+3+x+2+1+3+1+1 = 16+x. La somme des âges pondérés (hors terme en x) :
                  </p>
                  <p className="mt-1"><Math tex="17{\times}2+18{\times}3+22{\times}3+28{\times}2+29{\times}1+30{\times}3+37{\times}1+38{\times}1=404" /></p>
                  <p className="mt-2 text-foreground-muted">La moyenne vaut 25, donc :</p>
                  <p className="mt-1"><Math tex="\dfrac{404+24x}{16+x}=25 \ \Longrightarrow\ 404+24x=400+25x \ \Longrightarrow\ x=4" /></p>
                  <p className="mt-1"><Chip>x = 4, donc effectif total = 20 adhérents</Chip></p>
                </div>
                <div>
                  <p className="font-semibold">2. Pourcentage âgé de plus de 23 ans</p>
                  <p className="mt-1 text-foreground-muted">
                    Âges &gt; 23 : 24 (4), 28 (2), 29 (1), 30 (3), 37 (1), 38 (1) → effectif = 4+2+1+3+1+1 = 12.
                  </p>
                  <p className="mt-1"><Math tex="\dfrac{12}{20}=0{,}6=60\%" /></p>
                  <p className="mt-1"><Chip>60% des adhérents ont plus de 23 ans</Chip></p>
                </div>
                <div>
                  <p className="font-semibold">3. Médiane et mode</p>
                  <p className="mt-1 text-foreground-muted">
                    <Math tex="n=20" /> (pair) → moyenne des 10ᵉ et 11ᵉ valeurs. Effectifs cumulés : 2, 5, 8, 12, 14,
                    15, 18, 19, 20 → les rangs 9 à 12 valent tous 24, donc les 10ᵉ et 11ᵉ valeurs valent 24.
                  </p>
                  <p className="mt-1 text-foreground-muted">Le plus grand effectif est 4, pour l&apos;âge 24.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Chip>médiane <Math tex="=24" /> ans</Chip>
                    <Chip>mode <Math tex="=24" /> ans</Chip>
                  </div>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
