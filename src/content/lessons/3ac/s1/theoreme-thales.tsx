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
  title: "Théorème de Thalès · Cours et exercices corrigés | 3AC",
  description:
    "Cours illustré sur le théorème de Thalès et sa réciproque : configurations triangle et papillon, cas particulier du triangle, deux exemples résolus. 6 exercices de brevet corrigés en détail, 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Chapitre 5",
  heroTitle: "Le Théorème de Thalès",
  heroSubtitle:
    "Deux droites sécantes coupées par deux parallèles : un cours illustré, deux exemples résolus pas à pas, la réciproque du théorème, et 6 exercices de brevet corrigés.",
  footerNote: "Théorème de Thalès · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "cours", label: "Le théorème" },
    { id: "reciproque", label: "La réciproque" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Dark statement box used for the two formal properties. */
function PropertyBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-neutral-950 p-6 text-sm leading-relaxed text-neutral-200 sm:p-8 sm:text-base">
      {children}
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
          { value: "2", label: "exemples résolus" },
          { value: "6", label: "exercices de brevet" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Commencer le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Voir les exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 200 160" className="h-40 w-48 text-white/90">
            <line x1="100" y1="10" x2="20" y2="150" stroke="currentColor" strokeWidth="2" />
            <line x1="100" y1="10" x2="180" y2="150" stroke="currentColor" strokeWidth="2" />
            <line x1="55" y1="85" x2="145" y2="85" stroke="#fb923c" strokeWidth="3" />
            <line x1="20" y1="150" x2="180" y2="150" stroke="#fb923c" strokeWidth="3" />
          </svg>
        }
      />

      {/* ===================== COURS : LE THEOREME ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Deux configurations"
        title="Le théorème de Thalès"
        tone="light"
        description="Il permet de calculer une longueur ou un rapport de longueurs dès que deux droites sécantes sont coupées par deux droites parallèles."
      >
        <p className="text-sm text-foreground-muted">
          Soient <Math tex="(D)" /> et <Math tex="(D')" /> deux droites sécantes en un point <Math tex="A" />. Soient <Math tex="B" /> et <Math tex="M" /> deux points de <Math tex="(D)" /> distincts de <Math tex="A" />, et <Math tex="C" /> et <Math tex="N" /> deux points de <Math tex="(D')" /> distincts de <Math tex="A" />, tels que <Math tex="(BC) \parallel (MN)" />. Cette situation se présente sous deux formes.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-3 text-center font-semibold text-foreground">Configuration « triangle »</p>
            <svg viewBox="0 0 340 320" className="mx-auto">
              <line x1="160" y1="25" x2="30" y2="295" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="160" y1="25" x2="290" y2="295" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="95" y1="160" x2="225" y2="160" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
              <line x1="30" y1="295" x2="290" y2="295" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
              <circle cx="160" cy="25" r="4" fill="#1e293b" />
              <circle cx="95" cy="160" r="4" fill="#1e293b" />
              <circle cx="225" cy="160" r="4" fill="#1e293b" />
              <circle cx="30" cy="295" r="4" fill="#1e293b" />
              <circle cx="290" cy="295" r="4" fill="#1e293b" />
              <text x="160" y="16" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
              <text x="80" y="152" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
              <text x="240" y="152" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
              <text x="16" y="312" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">M</text>
              <text x="304" y="312" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">N</text>
            </svg>
            <p className="mt-2 text-center text-sm text-foreground-muted">B, M sur (D) · C, N sur (D′) · même côté de A</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-3 text-center font-semibold text-foreground">Configuration « papillon »</p>
            <svg viewBox="0 0 320 320" className="mx-auto">
              <line x1="60" y1="60" x2="290" y2="290" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="260" y1="60" x2="30" y2="290" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="60" y1="60" x2="260" y2="60" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
              <line x1="30" y1="290" x2="290" y2="290" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
              <circle cx="160" cy="160" r="4.5" fill="#f59e0b" />
              <circle cx="60" cy="60" r="4" fill="#1e293b" />
              <circle cx="260" cy="60" r="4" fill="#1e293b" />
              <circle cx="290" cy="290" r="4" fill="#1e293b" />
              <circle cx="30" cy="290" r="4" fill="#1e293b" />
              <text x="176" y="164" fontWeight="700" fontSize="16" fill="#b45309">A</text>
              <text x="46" y="48" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">M</text>
              <text x="274" y="48" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">N</text>
              <text x="304" y="305" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
              <text x="16" y="305" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
            </svg>
            <p className="mt-2 text-center text-sm text-foreground-muted">B, M de part et d&apos;autre de A (idem C, N)</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface-muted p-5 text-center">
          <p className="text-sm text-foreground-muted">Dans les deux cas, on obtient la même relation :</p>
          <p className="mt-2 text-base sm:text-lg"><Math tex="\dfrac{AB}{AM}=\dfrac{AC}{AN}=\dfrac{BC}{MN}" /> <span className="text-sm text-foreground-muted">(ou son inverse)</span></p>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground" id="theoreme">Propriété (Théorème de Thalès)</p>
        <PropertyBox>
          <p>
            Soient <Math tex="(D)" /> et <Math tex="(D')" /> deux droites sécantes en <Math tex="A" />. Soient <Math tex="B" /> et <Math tex="M" /> deux points de <Math tex="(D)" /> distincts de <Math tex="A" />, et <Math tex="C" /> et <Math tex="N" /> deux points de <Math tex="(D')" /> distincts de <Math tex="A" />.
          </p>
          <p className="mt-3 font-semibold text-white">Si <Math tex="(BC) \parallel (MN)" />, alors :</p>
          <div className="mt-4 rounded-xl bg-white/10 px-4 py-5 text-center text-lg sm:text-xl">
            <Math tex="\dfrac{AB}{AM}=\dfrac{AC}{AN}=\dfrac{BC}{MN} \qquad \text{ou} \qquad \dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}" />
          </div>
        </PropertyBox>
        <div className="mt-4">
          <Callout variant="info">
            On utilise le théorème de Thalès pour calculer des longueurs, ou pour comparer / calculer des rapports de longueurs.
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Cas particulier : le triangle</p>
        <div className="rounded-xl border-2 border-border bg-surface p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">
            Soit <Math tex="ABC" /> un triangle. Soit <Math tex="M" /> un point de <Math tex="(AB)" /> distinct de <Math tex="A" /> et <Math tex="B" />, et <Math tex="N" /> un point de <Math tex="(AC)" /> distinct de <Math tex="A" /> et <Math tex="C" />.
          </p>
          <p className="mt-2 text-sm font-semibold text-foreground">Si <Math tex="(BC) \parallel (MN)" />, alors :</p>
          <div className="mt-3 flex justify-center">
            <span className="rounded-full border border-border bg-surface-muted px-5 py-2.5 text-base font-bold text-foreground">
              <Math tex="\dfrac{AB}{AM}=\dfrac{AC}{AN}=\dfrac{BC}{MN}" />
            </span>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <ExerciseCard
          id="ex-app-1"
          index={1}
          title="Trapèze : calculer une longueur"
          items={
            <div className="text-sm">
              <p className="text-foreground-muted">
                <Math tex="ABCD" /> est un trapèze de bases <Math tex="[AB]" /> et <Math tex="[CD]" />, avec <Math tex="EB=2" /> cm, <Math tex="BC=1" /> cm et <Math tex="DC=6" /> cm (<Math tex="E" /> intersection des côtés obliques).
              </p>
              <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 340 300" className="mx-auto">
                    <line x1="300" y1="40" x2="40" y2="260" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="300" y1="40" x2="280" y2="260" stroke="#94a3b8" strokeWidth="1.5" />
                    <line x1="40" y1="260" x2="280" y2="260" stroke="#334155" strokeWidth="2" />
                    <line x1="126.7" y1="186.7" x2="286.7" y2="186.7" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="300" cy="40" r="4" fill="#1e293b" />
                    <circle cx="40" cy="260" r="4" fill="#1e293b" />
                    <circle cx="280" cy="260" r="4" fill="#1e293b" />
                    <circle cx="126.7" cy="186.7" r="4" fill="#1e293b" />
                    <circle cx="286.7" cy="186.7" r="4" fill="#1e293b" />
                    <text x="308" y="36" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                    <text x="112" y="182" textAnchor="end" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                    <text x="296" y="182" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                    <text x="26" y="278" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                    <text x="286" y="278" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                  </svg>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="EB=2" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=1" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="DC=6" /> cm</span>
                </div>
              </div>
              <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                <li>Montrer que <Math tex="\dfrac{AB}{DC}=\dfrac23" />.</li>
                <li>En déduire la longueur <Math tex="AB" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-2 text-sm">
              <p><Math tex="ABCD" /> trapèze de bases <Math tex="[AB]" />, <Math tex="[CD]" /> : <Math tex="(AB) \parallel (DC)" />. Dans le triangle <Math tex="EDC" />, avec <Math tex="A\in(ED)" />, <Math tex="B\in(EC)" />, Thalès donne :</p>
              <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="\dfrac{EA}{ED}=\dfrac{EB}{EC}=\dfrac{AB}{DC}" /></p>
              <p className="font-bold text-green-700">D&apos;où <Math tex="\dfrac{AB}{DC}=\dfrac{EB}{EC}=\dfrac23" /> ✓</p>
              <p className="mt-2 text-foreground-muted">Comme <Math tex="DC=6" /> cm : <Math tex="\dfrac{AB}6=\dfrac23 \Rightarrow AB=\dfrac{6\times2}3" /></p>
              <p className="font-bold text-green-700"><Math tex="AB=4" /> cm</p>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== RECIPROQUE ===================== */}
      <LessonSection
        id="reciproque"
        kicker="02 · Démontrer un parallélisme"
        title="La réciproque du théorème de Thalès"
        tone="muted"
        description="On l'utilise dans l'autre sens : pour démontrer que deux droites sont parallèles, à partir de longueurs connues."
      >
        <PropertyBox>
          <p>
            Soient <Math tex="(D)" /> et <Math tex="(D')" /> deux droites sécantes en <Math tex="A" />. Soient <Math tex="B" /> et <Math tex="M" /> deux points de <Math tex="(D)" /> distincts de <Math tex="A" />, et <Math tex="C" /> et <Math tex="N" /> deux points de <Math tex="(D')" /> distincts de <Math tex="A" />.
          </p>
          <div className="mt-4 rounded-xl bg-white/10 px-4 py-5 text-center text-lg">
            <Math tex="\text{Si } \dfrac{AM}{AB}=\dfrac{AN}{AC} \quad (\text{ou } \dfrac{AB}{AM}=\dfrac{AC}{AN})" />
          </div>
          <p className="mt-3">… et si <Math tex="A,B,M" /> d&apos;une part, et <Math tex="A,C,N" /> d&apos;autre part, sont alignés dans le même ordre, alors :</p>
          <p className="mt-2 text-center text-xl font-bold text-orange-400"><Math tex="(BC) \parallel (MN)" /></p>
        </PropertyBox>
        <div className="mt-4">
          <Callout variant="info">
            On utilise la réciproque du théorème de Thalès pour démontrer que deux droites sont parallèles.
          </Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Cas particulier : le triangle</p>
        <div className="rounded-xl border-2 border-border bg-surface p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">
            Soit <Math tex="ABC" /> un triangle, <Math tex="M" /> un point de <Math tex="(AB)" /> distinct de <Math tex="A" /> et <Math tex="B" />, <Math tex="N" /> un point de <Math tex="(AC)" /> distinct de <Math tex="A" /> et <Math tex="C" />.
          </p>
          <p className="mt-2 text-sm font-semibold text-foreground">
            Si <Math tex="\dfrac{AB}{AM}=\dfrac{AC}{AN}" /> (ou <Math tex="\dfrac{AM}{AB}=\dfrac{AN}{AC}" />) et si <Math tex="A,B,M" /> et <Math tex="A,C,N" /> sont alignés dans le même ordre, alors :
          </p>
          <div className="mt-3 flex justify-center">
            <span className="rounded-full border border-border bg-surface-muted px-5 py-2.5 text-base font-bold text-foreground">
              <Math tex="(BC) \parallel (MN)" />
            </span>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <ExerciseCard
          id="ex-app-2"
          index={2}
          title="Démontrer un parallélisme"
          items={
            <div className="text-sm">
              <p className="text-foreground-muted">
                <Math tex="AD=21" /> cm, <Math tex="AB=14" /> cm, <Math tex="AE=33" /> cm et <Math tex="CE=11" /> cm. Démontrer que <Math tex="(DE) \parallel (BC)" />.
              </p>
              <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 360 370" className="mx-auto">
                    <line x1="200" y1="40" x2="60" y2="290" stroke="#334155" strokeWidth="2" />
                    <line x1="200" y1="40" x2="320" y2="340" stroke="#334155" strokeWidth="2" />
                    <line x1="60" y1="290" x2="320" y2="340" stroke="#334155" strokeWidth="2" />
                    <line x1="106.7" y1="206.7" x2="280" y2="240" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="200" cy="40" r="4" fill="#1e293b" />
                    <circle cx="60" cy="290" r="4" fill="#1e293b" />
                    <circle cx="320" cy="340" r="4" fill="#1e293b" />
                    <circle cx="106.7" cy="206.7" r="4" fill="#1e293b" />
                    <circle cx="280" cy="240" r="4" fill="#1e293b" />
                    <text x="200" y="30" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                    <text x="90" y="207" textAnchor="end" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                    <text x="294" y="236" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                    <text x="45" y="305" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                    <text x="330" y="352" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                  </svg>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AD=21" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=14" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AE=33" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="CE=11" /> cm</span>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-2 text-sm">
              <p className="text-foreground-muted">Montrons que <Math tex="\dfrac{AB}{AD}=\dfrac{AC}{AE}" />, avec <Math tex="AC=AE-CE=33-11=22" /> cm.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{AB}{AD}=\dfrac{14}{21}=\dfrac23" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{AC}{AE}=\dfrac{22}{33}=\dfrac23" /></div>
              </div>
              <p className="text-foreground-muted">Dans le triangle <Math tex="ADE" />, <Math tex="B\in(AD)" />, <Math tex="C\in(AE)" />, et <Math tex="A,B,D" /> d&apos;une part, <Math tex="A,C,E" /> d&apos;autre part, alignés dans le même ordre. D&apos;après la réciproque du théorème de Thalès :</p>
              <p className="font-bold text-green-700"><Math tex="(DE) \parallel (BC)" /></p>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="Exercices : propriété de Thalès"
        tone="light"
        description="6 exercices authentiques, tirés de sujets du Brevet des collèges (session 2000) : Rennes, Clermont-Ferrand, Grenoble, Réunion, Nantes et Paris."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le théorème de Thalès.">
          <ExerciseCard
            id="1"
            index={1}
            title="Rennes · 2000"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Les droites <Math tex="(AB)" /> et <Math tex="(CD)" /> sont parallèles ; les droites <Math tex="(AC)" /> et <Math tex="(BD)" /> sont sécantes en <Math tex="O" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 320" className="mx-auto">
                      <line x1="260" y1="70" x2="135" y2="182.5" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="270" y1="260" x2="132.5" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="260" y1="70" x2="270" y2="260" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                      <line x1="135" y1="182.5" x2="132.5" y2="135" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="160" cy="160" r="4" fill="#f59e0b" />
                      <circle cx="260" cy="70" r="4" fill="#1e293b" />
                      <circle cx="270" cy="260" r="4" fill="#1e293b" />
                      <circle cx="135" cy="182.5" r="4" fill="#1e293b" />
                      <circle cx="132.5" cy="135" r="4" fill="#1e293b" />
                      <text x="168" y="155" fontWeight="700" fontSize="16" fill="#b45309">O</text>
                      <text x="270" y="62" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                      <text x="278" y="270" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                      <text x="120" y="192" textAnchor="end" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                      <text x="118" y="130" textAnchor="end" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="OA=8" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="OB=10" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="OC=2" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="DC=1{,}5" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Calculer la longueur du segment <Math tex="[AB]" />.</li>
                  <li>Calculer la longueur du segment <Math tex="[OD]" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">
                  <Math tex="O,A,C" /> alignés et <Math tex="O,B,D" /> alignés ; <Math tex="(AB) \parallel (CD)" /> : configuration papillon. Thalès :
                </p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="\dfrac{OA}{OC}=\dfrac{OB}{OD}=\dfrac{AB}{CD}" /></p>
                <p><Math tex="\dfrac{OA}{OC}=\dfrac82=4" />, donc <Math tex="\dfrac{AB}{CD}=4 \Rightarrow AB=4\times1{,}5" /></p>
                <p className="font-bold text-green-700"><Math tex="AB=6" /> cm</p>
                <p className="mt-2"><Math tex="\dfrac{OB}{OD}=4 \Rightarrow OD=\dfrac{OB}4=\dfrac{10}4" /></p>
                <p className="font-bold text-green-700"><Math tex="OD=2{,}5" /> cm</p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Clermont-Ferrand · 2000"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Figure tracée à main levée (on ne demande pas de la refaire).</p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 220 340" className="mx-auto">
                      <line x1="50" y1="260" x2="173" y2="174.5" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="50" y1="260" x2="119.3" y2="317.6" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="148.4" y1="191.6" x2="96.2" y2="298.4" stroke="#334155" strokeWidth="2" />
                      <line x1="173" y1="174.5" x2="107.75" y2="308" stroke="#334155" strokeWidth="2" />
                      <line x1="99.2" y1="225.8" x2="119.3" y2="317.6" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
                      <circle cx="50" cy="260" r="4.5" fill="#f59e0b" />
                      <circle cx="99.2" cy="225.8" r="4" fill="#1e293b" />
                      <circle cx="148.4" cy="191.6" r="4" fill="#1e293b" />
                      <circle cx="173" cy="174.5" r="4" fill="#1e293b" />
                      <circle cx="96.2" cy="298.4" r="4" fill="#1e293b" />
                      <circle cx="107.75" cy="308" r="4" fill="#1e293b" />
                      <circle cx="119.3" cy="317.6" r="4" fill="#1e293b" />
                      <text x="34" y="264" fontWeight="700" fontSize="15" fill="#b45309">I</text>
                      <text x="100" y="216" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">M</text>
                      <text x="155" y="184" fontWeight="700" fontSize="15" fill="#1e293b">R</text>
                      <text x="181" y="171" fontWeight="700" fontSize="15" fill="#1e293b">S</text>
                      <text x="80" y="300" textAnchor="end" fontWeight="700" fontSize="15" fill="#1e293b">P</text>
                      <text x="105" y="325" fontWeight="700" fontSize="15" fill="#1e293b">T</text>
                      <text x="126" y="330" fontWeight="700" fontSize="15" fill="#1e293b">N</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="IR=8" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="RP=10" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="IP=4" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="IM=4" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="IS=10" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="IN=6" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="IT=5" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Démontrer que <Math tex="(ST)" /> et <Math tex="(RP)" /> sont parallèles.</li>
                  <li>En déduire <Math tex="ST" />.</li>
                  <li>Les droites <Math tex="(MN)" /> et <Math tex="(ST)" /> sont-elles parallèles ? Justifier.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted"><Math tex="I,R,S" /> alignés et <Math tex="I,P,T" /> alignés :</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{IR}{IS}=\dfrac8{10}=0{,}8" /></div>
                  <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{IP}{IT}=\dfrac45=0{,}8" /></div>
                </div>
                <p className="font-bold text-green-700">Rapports égaux, même ordre : <Math tex="(RP) \parallel (ST)" /> (réciproque)</p>
                <p className="mt-2">Thalès : <Math tex="\dfrac{IR}{IS}=\dfrac{IP}{IT}=\dfrac{RP}{ST}" />, donc <Math tex="0{,}8=\dfrac{10}{ST}" /></p>
                <p className="font-bold text-green-700"><Math tex="ST=10\div0{,}8=12{,}5" /> cm</p>
                <p className="mt-2">Depuis <Math tex="I" /> : <Math tex="\dfrac{IM}{IR}=\dfrac48=0{,}5" /> et <Math tex="\dfrac{IN}{IP}=\dfrac64=1{,}5" />. <Math tex="0{,}5\neq1{,}5" /></p>
                <p className="font-bold text-green-700">(MN) n&apos;est pas parallèle à (ST)</p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Grenoble · 2000"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Triangle <Math tex="ABC" />. <Math tex="E" /> point de <Math tex="[AB]" /> ; la parallèle à <Math tex="(BC)" /> passant par <Math tex="E" /> coupe <Math tex="[AC]" /> en <Math tex="D" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 310" className="mx-auto">
                      <line x1="190" y1="40" x2="60" y2="290" stroke="#334155" strokeWidth="2" />
                      <line x1="190" y1="40" x2="320" y2="290" stroke="#334155" strokeWidth="2" />
                      <line x1="60" y1="290" x2="320" y2="290" stroke="#334155" strokeWidth="2" />
                      <line x1="8" y1="190" x2="268" y2="190" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                      <line x1="60" y1="290" x2="8" y2="190" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
                      <circle cx="190" cy="40" r="4" fill="#1e293b" />
                      <circle cx="60" cy="290" r="4" fill="#1e293b" />
                      <circle cx="320" cy="290" r="4" fill="#1e293b" />
                      <circle cx="112" cy="190" r="4" fill="#1e293b" />
                      <circle cx="268" cy="190" r="4" fill="#1e293b" />
                      <circle cx="8" cy="190" r="4" fill="#1e293b" />
                      <text x="190" y="30" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                      <text x="46" y="305" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                      <text x="326" y="295" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                      <text x="112" y="178" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                      <text x="268" y="178" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                      <text x="-2" y="178" fontWeight="700" fontSize="16" fill="#b45309">F</text>
                    </svg>
                    <p className="mt-2 text-center text-xs text-foreground-muted italic">(BF) en pointillé, question 2</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AE=BC=3" /></span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="EB=AD=2" /></span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Montrer que <Math tex="ED=1{,}8" />.</li>
                  <li>Sur <Math tex="[DE)" />, on place <Math tex="F" /> tel que <Math tex="DF=3" />. <Math tex="(AD)" /> et <Math tex="(BF)" /> sont-elles parallèles ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted"><Math tex="AB=AE+EB=3+2=5" /> cm. Dans <Math tex="ABC" />, <Math tex="E\in[AB]" />, <Math tex="D\in[AC]" />, <Math tex="(ED)\parallel(BC)" /> : Thalès donne <Math tex="\dfrac{AE}{AB}=\dfrac{ED}{BC}" />.</p>
                <p>Donc <Math tex="ED=BC\times\dfrac{AE}{AB}=3\times\dfrac35=\dfrac95" /></p>
                <p className="font-bold text-green-700"><Math tex="ED=1{,}8" /> cm</p>
                <p className="mt-2 text-foreground-muted"><Math tex="EF=DF-DE=3-1{,}8=1{,}2" /> cm. Configuration papillon en <Math tex="E" /> :</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{EA}{EB}=\dfrac32=1{,}5" /></div>
                  <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{ED}{EF}=\dfrac{1{,}8}{1{,}2}=1{,}5" /></div>
                </div>
                <p className="font-bold text-green-700">Rapports égaux, même configuration : oui, <Math tex="(AD) \parallel (BF)" /></p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Réunion · 2000"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Calculer la valeur exacte de <Math tex="ST" /> sachant que <Math tex="(QR) \parallel (UV)" /> et <Math tex="(UV) \parallel (ST)" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 380 220" className="mx-auto">
                      <line x1="190" y1="20" x2="88" y2="190" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="190" y1="20" x2="292" y2="190" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="148" y1="90" x2="232" y2="90" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                      <line x1="115" y1="145" x2="265" y2="145" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                      <line x1="88" y1="190" x2="292" y2="190" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="190" cy="20" r="4.5" fill="#f59e0b" />
                      <circle cx="148" cy="90" r="4" fill="#1e293b" />
                      <circle cx="232" cy="90" r="4" fill="#1e293b" />
                      <circle cx="115" cy="145" r="4" fill="#1e293b" />
                      <circle cx="265" cy="145" r="4" fill="#1e293b" />
                      <circle cx="88" cy="190" r="4" fill="#1e293b" />
                      <circle cx="292" cy="190" r="4" fill="#1e293b" />
                      <text x="190" y="13" textAnchor="middle" fontWeight="700" fontSize="15" fill="#b45309">P</text>
                      <text x="134" y="86" textAnchor="end" fontWeight="700" fontSize="15" fill="#1e293b">U</text>
                      <text x="246" y="86" fontWeight="700" fontSize="15" fill="#1e293b">V</text>
                      <text x="101" y="141" textAnchor="end" fontWeight="700" fontSize="15" fill="#1e293b">Q</text>
                      <text x="279" y="141" fontWeight="700" fontSize="15" fill="#1e293b">R</text>
                      <text x="74" y="200" textAnchor="end" fontWeight="700" fontSize="15" fill="#1e293b">S</text>
                      <text x="306" y="200" fontWeight="700" fontSize="15" fill="#1e293b">T</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="RP=4" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="QR=2{,}4" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="PV=2" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="PS=4{,}5" /> cm</span>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Par transitivité du parallélisme : <Math tex="(QR) \parallel (ST)" />. Thalès en <Math tex="P" /> :</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="\dfrac{PR}{PS}=\dfrac{PQ}{PT}=\dfrac{QR}{ST}" /></p>
                <p>Donc <Math tex="\dfrac4{4{,}5}=\dfrac{2{,}4}{ST}" /></p>
                <p className="font-bold text-green-700"><Math tex="ST=\dfrac{2{,}4\times4{,}5}4=2{,}7" /> cm</p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Nantes · 2000"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  Champ rectangulaire <Math tex="ABCD" /> traversé par une route de largeur uniforme. <Math tex="(AC) \parallel (MN)" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 400 220" className="mx-auto">
                      <polygon points="116.8,50 360,50 360,147.28 40,178" fill="#c7d2fe" opacity="0.45" />
                      <rect x="40" y="50" width="320" height="128" fill="none" stroke="#334155" strokeWidth="2" />
                      <line x1="40" y1="50" x2="360" y2="178" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,4" />
                      <line x1="116.8" y1="50" x2="360" y2="147.28" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="40" cy="50" r="4" fill="#1e293b" />
                      <circle cx="360" cy="50" r="4" fill="#1e293b" />
                      <circle cx="360" cy="178" r="4" fill="#1e293b" />
                      <circle cx="40" cy="178" r="4" fill="#1e293b" />
                      <circle cx="116.8" cy="50" r="4" fill="#1e293b" />
                      <circle cx="360" cy="147.28" r="4" fill="#1e293b" />
                      <text x="26" y="46" fontWeight="700" fontSize="15" fill="#1e293b">A</text>
                      <text x="368" y="46" fontWeight="700" fontSize="15" fill="#1e293b">B</text>
                      <text x="368" y="188" fontWeight="700" fontSize="15" fill="#1e293b">C</text>
                      <text x="26" y="192" fontWeight="700" fontSize="15" fill="#1e293b">D</text>
                      <text x="116.8" y="40" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">M</text>
                      <text x="368" y="150" fontWeight="700" fontSize="15" fill="#1e293b">N</text>
                    </svg>
                    <p className="mt-2 text-center text-xs text-foreground-muted italic">(AC) en pointillé · route en grisé</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=100" /> m</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=40" /> m</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AM=24" /> m</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Valeur arrondie au décimètre de <Math tex="AC" />.</li>
                  <li>Longueur <Math tex="MB" />.</li>
                  <li>Longueur <Math tex="BN" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted"><Math tex="ABC" /> rectangle en <Math tex="B" /> : Pythagore.</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="AC^2=AB^2+BC^2=100^2+40^2=11\,600" /></p>
                <p className="font-bold text-green-700"><Math tex="AC\approx107{,}7" /> m</p>
                <p className="mt-2"><Math tex="MB=AB-AM=100-24" /></p>
                <p className="font-bold text-green-700"><Math tex="MB=76" /> m</p>
                <p className="mt-2 text-foreground-muted">Dans <Math tex="BAC" /> : <Math tex="M\in[BA]" />, <Math tex="N\in[BC]" />, <Math tex="(MN)\parallel(AC)" /> : <Math tex="\dfrac{BM}{BA}=\dfrac{BN}{BC}" /></p>
                <p><Math tex="\dfrac{76}{100}=\dfrac{BN}{40} \Rightarrow BN=\dfrac{76\times40}{100}" /></p>
                <p className="font-bold text-green-700"><Math tex="BN=30{,}4" /> m</p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Paris · 2000"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABCD" /> parallélogramme. <Math tex="E" /> sur la droite <Math tex="(AD)" />, <Math tex="AE=1{,}5" /> cm, <Math tex="E" /> hors du segment <Math tex="[AD]" /> ; <Math tex="(EC)" /> coupe <Math tex="[AB]" /> en <Math tex="M" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 400 290" className="mx-auto">
                      <polygon points="100,105 380,105 340,260 60,260" fill="#eef2ff" stroke="#334155" strokeWidth="2" />
                      <line x1="113" y1="54" x2="60" y2="260" stroke="#334155" strokeWidth="2" />
                      <line x1="113" y1="54" x2="340" y2="260" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,4" />
                      <line x1="100" y1="105" x2="270" y2="260" stroke="#4f46e5" strokeWidth="2.5" strokeDasharray="2,4" />
                      <circle cx="113" cy="54" r="4" fill="#1e293b" />
                      <circle cx="100" cy="105" r="4" fill="#1e293b" />
                      <circle cx="380" cy="105" r="4" fill="#1e293b" />
                      <circle cx="60" cy="260" r="4" fill="#1e293b" />
                      <circle cx="340" cy="260" r="4" fill="#1e293b" />
                      <circle cx="170" cy="105" r="4.5" fill="#b45309" />
                      <circle cx="270" cy="260" r="4.5" fill="#b45309" />
                      <text x="113" y="44" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                      <text x="86" y="100" textAnchor="end" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                      <text x="388" y="102" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                      <text x="46" y="272" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                      <text x="348" y="272" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                      <text x="170" y="94" textAnchor="middle" fontWeight="700" fontSize="15" fill="#b45309">M</text>
                      <text x="270" y="278" textAnchor="middle" fontWeight="700" fontSize="15" fill="#b45309">N</text>
                    </svg>
                    <p className="mt-2 text-center text-xs text-foreground-muted italic">(EC) pointillé orange · (AN) pointillé indigo</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=8" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AD=4{,}5" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AE=1{,}5" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Calculer <Math tex="AM" />.</li>
                  <li>Placer <Math tex="N" /> sur <Math tex="[DC]" /> tel que <Math tex="DN=\dfrac34DC" />. Démontrer que <Math tex="(AN)" /> et <Math tex="(EC)" /> sont parallèles.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Ordre <Math tex="E,A,D" /> : <Math tex="ED=EA+AD=1{,}5+4{,}5=6" /> cm. <Math tex="(AB)\parallel(DC)\Rightarrow(AM)\parallel(DC)" />. Dans <Math tex="EDC" /> : <Math tex="A\in[ED]" />, <Math tex="M\in[EC]" />, Thalès :</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="\dfrac{EA}{ED}=\dfrac{EM}{EC}=\dfrac{AM}{DC}" /></p>
                <p><Math tex="\dfrac{EA}{ED}=\dfrac{1{,}5}6=0{,}25" />, <Math tex="DC=AB=8" /> cm, donc <Math tex="AM=0{,}25\times8" /></p>
                <p className="font-bold text-green-700"><Math tex="AM=2" /> cm</p>
                <p className="mt-2 text-foreground-muted"><Math tex="DN=\dfrac34\times8=6" /> cm. Depuis <Math tex="D" /> :</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{DA}{DE}=\dfrac{4{,}5}6=0{,}75" /></div>
                  <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{DN}{DC}=\dfrac68=0{,}75" /></div>
                </div>
                <p className="font-bold text-green-700">Rapports égaux, même ordre : <Math tex="(AN) \parallel (EC)" /></p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
