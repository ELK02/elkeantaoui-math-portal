import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Les Nombres Relatifs · Présentation et Comparaison · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur les nombres relatifs : positifs, négatifs, droite graduée, distance à zéro, nombres opposés et règles de comparaison, avec 7 exercices corrigés. 1ère année collège, semestre 1.",
  kicker: "1ʳᵉ Année Collège · Chapitre 5",
  heroTitle: "Les nombres relatifs",
  heroSubtitle:
    "Positifs, négatifs, repérés sur une droite graduée. Trois règles suffisent pour tous les comparer.",
  footerNote: "Les nombres relatifs · Présentation et comparaison · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "definitions", label: "Définitions" },
    { id: "droite-graduee", label: "Droite graduée" },
    { id: "comparaison", label: "Comparaison" },
    { id: "exercices", label: "Exercices" },
  ],
};

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

function FamilyCard({
  icon,
  tone,
  title,
  children,
  examples,
}: {
  icon: ReactNode;
  tone: "green" | "rose" | "neutral";
  title: string;
  children: ReactNode;
  examples: string[];
}) {
  const badge =
    tone === "green"
      ? "bg-green-100 text-green-700"
      : tone === "rose"
        ? "bg-rose-100 text-rose-600"
        : "bg-surface-muted text-foreground";
  const chip =
    tone === "green"
      ? "bg-green-100/60 text-green-700"
      : tone === "rose"
        ? "bg-rose-100/60 text-rose-600"
        : "bg-surface-muted text-foreground";
  return (
    <div className="rounded-2xl border border-border p-6">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-bold ${badge}`}>
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-foreground-muted">{children}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {examples.map((ex) => (
          <span key={ex} className={`rounded-lg px-2.5 py-1 font-mono text-sm ${chip}`}>
            <Math tex={ex} />
          </span>
        ))}
      </div>
    </div>
  );
}

function RuleCard({
  index,
  title,
  rule,
  tone,
  children,
}: {
  index: number;
  title: string;
  rule: ReactNode;
  tone: "green" | "rose" | "neutral";
  children: ReactNode;
}) {
  const barTone =
    tone === "green"
      ? "border-green-500/40 bg-green-100/60"
      : tone === "rose"
        ? "border-rose-500/40 bg-rose-100/60"
        : "border-border bg-surface-muted";
  return (
    <div className="rounded-2xl border border-border bg-surface-muted p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
          {index}
        </span>
        <h4 className="font-display font-bold text-foreground">{title}</h4>
      </div>
      <p className={`rounded-xl border-l-4 p-4 text-sm sm:text-base ${barTone}`}>{rule}</p>
      <div className="mt-4 flex flex-wrap gap-3 font-mono text-sm">{children}</div>
    </div>
  );
}

function NumberLineExample() {
  return (
    <svg viewBox="0 0 640 130" className="h-auto w-full" style={{ minWidth: 560 }} role="img" aria-labelledby="nlExampleTitle">
      <title id="nlExampleTitle">Droite graduée avec les points H, E, C, B, G, O, I, A, F et D</title>
      <line x1="20" y1="65" x2="615" y2="65" stroke="#94a3b8" strokeWidth="2" />
      <polygon points="615,58 630,65 615,72" fill="#94a3b8" />
      <g stroke="#94a3b8" strokeWidth="2">
        <line x1="30" y1="59" x2="30" y2="71" />
        <line x1="94" y1="59" x2="94" y2="71" />
        <line x1="158" y1="59" x2="158" y2="71" />
        <line x1="222" y1="59" x2="222" y2="71" />
        <line x1="286" y1="59" x2="286" y2="71" />
        <line x1="350" y1="59" x2="350" y2="71" />
        <line x1="414" y1="59" x2="414" y2="71" />
        <line x1="478" y1="59" x2="478" y2="71" />
        <line x1="542" y1="59" x2="542" y2="71" />
        <line x1="606" y1="59" x2="606" y2="71" />
      </g>
      <g fontFamily="Inter, sans-serif" fontSize="13" fill="#64748b" textAnchor="middle">
        <text x="30" y="92">−5</text>
        <text x="94" y="92">−4</text>
        <text x="158" y="92">−3</text>
        <text x="222" y="92">−2</text>
        <text x="286" y="92">−1</text>
        <text x="350" y="92">0</text>
        <text x="414" y="92">1</text>
        <text x="478" y="92">2</text>
        <text x="542" y="92">3</text>
        <text x="606" y="92">4</text>
      </g>
      <g fontFamily="Lexend, sans-serif" fontSize="14" fontWeight="700" textAnchor="middle">
        <circle cx="94" cy="65" r="5" fill="#e11d48" /><text x="94" y="42" fill="#e11d48">H</text>
        <circle cx="158" cy="65" r="5" fill="#e11d48" /><text x="158" y="42" fill="#e11d48">E</text>
        <circle cx="222" cy="65" r="5" fill="#e11d48" /><text x="222" y="42" fill="#e11d48">C</text>
        <circle cx="254" cy="65" r="5" fill="#e11d48" /><text x="254" y="42" fill="#e11d48">B</text>
        <circle cx="286" cy="65" r="5" fill="#e11d48" /><text x="286" y="42" fill="#e11d48">G</text>
        <circle cx="350" cy="65" r="5" fill="#d97706" /><text x="350" y="42" fill="#d97706">O</text>
        <circle cx="414" cy="65" r="5" fill="#059669" /><text x="414" y="42" fill="#059669">I</text>
        <circle cx="478" cy="65" r="5" fill="#059669" /><text x="478" y="42" fill="#059669">A</text>
        <circle cx="510" cy="65" r="5" fill="#059669" /><text x="510" y="42" fill="#059669">F</text>
        <circle cx="542" cy="65" r="5" fill="#059669" /><text x="542" y="42" fill="#059669">D</text>
      </g>
    </svg>
  );
}

function NumberLineExercise1() {
  return (
    <svg viewBox="0 0 660 130" className="h-auto w-full" style={{ minWidth: 560 }} role="img" aria-labelledby="nlEx1Title">
      <title id="nlEx1Title">Droite graduée avec les points E, B, D, O, I, A, F et C à repérer</title>
      <line x1="12" y1="65" x2="635" y2="65" stroke="#94a3b8" strokeWidth="2" />
      <polygon points="635,58 650,65 635,72" fill="#94a3b8" />
      <g stroke="#94a3b8" strokeWidth="2">
        <line x1="20" y1="59" x2="20" y2="71" />
        <line x1="80" y1="59" x2="80" y2="71" />
        <line x1="140" y1="59" x2="140" y2="71" />
        <line x1="200" y1="59" x2="200" y2="71" />
        <line x1="260" y1="59" x2="260" y2="71" />
        <line x1="320" y1="59" x2="320" y2="71" />
        <line x1="380" y1="59" x2="380" y2="71" />
        <line x1="440" y1="59" x2="440" y2="71" />
        <line x1="500" y1="59" x2="500" y2="71" />
        <line x1="560" y1="59" x2="560" y2="71" />
        <line x1="620" y1="59" x2="620" y2="71" />
      </g>
      <g fontFamily="Inter, sans-serif" fontSize="13" fill="#64748b" textAnchor="middle">
        <text x="20" y="92">−4</text><text x="80" y="92">−3</text><text x="140" y="92">−2</text>
        <text x="200" y="92">−1</text><text x="260" y="92">0</text><text x="320" y="92">1</text>
        <text x="380" y="92">2</text><text x="440" y="92">3</text><text x="500" y="92">4</text>
        <text x="560" y="92">5</text><text x="620" y="92">6</text>
      </g>
      <g fontFamily="Lexend, sans-serif" fontSize="15" fontWeight="700" fill="#7c3aed" textAnchor="middle">
        <circle cx="20" cy="65" r="5.5" fill="#7c3aed" /><text x="20" y="42">E</text>
        <circle cx="140" cy="65" r="5.5" fill="#7c3aed" /><text x="140" y="42">B</text>
        <circle cx="200" cy="65" r="5.5" fill="#7c3aed" /><text x="200" y="42">D</text>
        <circle cx="260" cy="65" r="5.5" fill="#7c3aed" /><text x="260" y="42">O</text>
        <circle cx="320" cy="65" r="5.5" fill="#7c3aed" /><text x="320" y="42">I</text>
        <circle cx="440" cy="65" r="5.5" fill="#7c3aed" /><text x="440" y="42">A</text>
        <circle cx="500" cy="65" r="5.5" fill="#7c3aed" /><text x="500" y="42">F</text>
        <circle cx="560" cy="65" r="5.5" fill="#7c3aed" /><text x="560" y="42">C</text>
      </g>
    </svg>
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
          { value: "3", label: "familles de nombres" },
          { value: "1", label: "droite graduée" },
          { value: "3", label: "règles de comparaison" },
          { value: "7", label: "exercices corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#definitions"
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
          <div className="relative flex select-none flex-col items-end gap-3 font-serif italic">
            <span className="text-[3.5rem] leading-none font-bold text-emerald-400 sm:text-[4.5rem]">+7</span>
            <span className="text-[3.5rem] leading-none font-bold text-rose-400 sm:text-[4.5rem]">−7</span>
          </div>
        }
      />

      {/* ===================== I. DÉFINITIONS ===================== */}
      <LessonSection
        id="definitions"
        kicker="01 · Les familles de nombres"
        title="Positifs, négatifs, relatifs"
        tone="light"
        description="Tout nombre relatif appartient à l'une (ou aux deux) de ces deux familles : les positifs et les négatifs."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FamilyCard icon="+" tone="green" title="Nombres positifs" examples={["0", "11", "+127", "5{,}2", "+15{,}37"]}>
            Les nombres <strong>supérieurs ou égaux à zéro</strong>. Ils s&apos;écrivent avec ou sans le signe +.
          </FamilyCard>
          <FamilyCard icon="−" tone="rose" title="Nombres négatifs" examples={["0", "-21", "-327", "-9{,}12", "-0{,}075"]}>
            Les nombres <strong>inférieurs ou égaux à zéro</strong>. Ils s&apos;écrivent toujours avec le signe −, sauf le nombre zéro.
          </FamilyCard>
          <FamilyCard icon="ℤ" tone="neutral" title="Nombres relatifs" examples={["+21", "-9{,}12", "+327", "-15{,}17"]}>
            La réunion des nombres positifs <strong>et</strong> des nombres négatifs forme les nombres relatifs.
          </FamilyCard>
        </div>

        <div className="mt-4">
          <Callout variant="warning" title="Remarque">
            Le nombre <Math tex="0" /> est à la fois positif et négatif : c&apos;est le seul nombre relatif dans ce cas, et il ne porte jamais de signe.
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== II. DROITE GRADUÉE ===================== */}
      <LessonSection
        id="droite-graduee"
        kicker="02 · Repérage sur une droite graduée"
        title="La droite graduée"
        tone="light"
        description="Chaque point d'une droite graduée est repéré par un unique nombre relatif : son abscisse."
      >
        <div className="mb-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8 lg:col-span-1">
            <h3 className="mb-3 font-display font-bold text-foreground">Droite graduée</h3>
            <p className="text-sm text-foreground-muted">Une droite sur laquelle on fixe :</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li className="flex gap-2"><span className="font-bold text-foreground">·</span>Un point appelé <strong>origine</strong> (noté O)</li>
              <li className="flex gap-2"><span className="font-bold text-foreground">·</span>Un <strong>sens</strong> de parcours</li>
              <li className="flex gap-2"><span className="font-bold text-foreground">·</span>Une <strong>unité de graduation</strong> (notée OI)</li>
            </ul>
            <div className="mt-5 rounded-xl border border-border bg-surface p-4">
              <p className="text-sm text-foreground-muted">
                <strong className="text-foreground">Abscisse :</strong> chaque point <em>M</em> est repéré par un nombre relatif noté <Math tex="x_M" />, appelé abscisse de <em>M</em>.
              </p>
            </div>
            <p className="mt-3 text-xs text-foreground-muted">
              Si l&apos;unité de graduation est OI, alors <Math tex="x_O = 0" /> et <Math tex="x_I = 1" />. Les positifs sont à droite de O, les négatifs à gauche.
            </p>
          </div>

          <div className="rounded-2xl border border-border p-6 sm:p-8 lg:col-span-2">
            <h3 className="mb-4 font-display font-bold text-foreground">Exemple</h3>
            <div className="overflow-x-auto rounded-xl border border-border bg-surface p-4">
              <NumberLineExample />
            </div>
            <p className="mt-4 text-sm text-foreground-muted">
              Puisque l&apos;unité de graduation est OI, alors <Math tex="x_O = 0" /> et <Math tex="x_I = 1" />. On en déduit :
            </p>
            <div className="mt-3 flex flex-wrap gap-2 font-mono text-sm">
              <span className="rounded-lg bg-rose-100/60 px-2.5 py-1 text-rose-600"><Math tex="x_H = -4" /></span>
              <span className="rounded-lg bg-rose-100/60 px-2.5 py-1 text-rose-600"><Math tex="x_E = -3" /></span>
              <span className="rounded-lg bg-rose-100/60 px-2.5 py-1 text-rose-600"><Math tex="x_C = -2" /></span>
              <span className="rounded-lg bg-rose-100/60 px-2.5 py-1 text-rose-600"><Math tex="x_B = -1{,}5" /></span>
              <span className="rounded-lg bg-rose-100/60 px-2.5 py-1 text-rose-600"><Math tex="x_G = -1" /></span>
              <span className="rounded-lg bg-orange-100/60 px-2.5 py-1 text-orange-700"><Math tex="x_O = 0" /></span>
              <span className="rounded-lg bg-green-100/60 px-2.5 py-1 text-green-700"><Math tex="x_I = 1" /></span>
              <span className="rounded-lg bg-green-100/60 px-2.5 py-1 text-green-700"><Math tex="x_A = 2" /></span>
              <span className="rounded-lg bg-green-100/60 px-2.5 py-1 text-green-700"><Math tex="x_F = 2{,}5" /></span>
              <span className="rounded-lg bg-green-100/60 px-2.5 py-1 text-green-700"><Math tex="x_D = 3" /></span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="mb-2 font-display font-bold text-foreground">Distance d&apos;un nombre relatif à zéro</h3>
            <p className="text-sm text-foreground-muted">
              C&apos;est le nombre que l&apos;on obtient en supprimant le signe du nombre. <strong>Elle n&apos;est jamais négative.</strong>
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p className="rounded-lg bg-surface-muted p-3">
                distance de <Math tex="-4" /> (ou <Math tex="+4" />) à zéro = <span className="font-bold text-foreground"><Math tex="4" /></span>
              </p>
              <p className="rounded-lg bg-surface-muted p-3">
                distance de <Math tex="-11{,}5" /> à zéro = <span className="font-bold text-foreground"><Math tex="11{,}5" /></span>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border p-6 sm:p-8">
            <h3 className="mb-2 font-display font-bold text-foreground">Nombres opposés</h3>
            <p className="text-sm text-foreground-muted">
              Deux nombres relatifs opposés ont la <strong>même distance à zéro</strong> et des <strong>signes contraires</strong>.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg bg-surface-muted p-3">
                <span className="rounded bg-green-100 px-2 py-0.5 text-green-700"><Math tex="+7" /></span>
                <span className="text-xs text-foreground-muted">opposé de</span>
                <span className="rounded bg-rose-100 px-2 py-0.5 text-rose-700"><Math tex="-7" /></span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-surface-muted p-3">
                <span className="rounded bg-rose-100 px-2 py-0.5 text-rose-700"><Math tex="-5{,}11" /></span>
                <span className="text-xs text-foreground-muted">opposé de</span>
                <span className="rounded bg-green-100 px-2 py-0.5 text-green-700"><Math tex="+5{,}11" /></span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-surface-muted p-3">
                <span className="rounded bg-orange-100 px-2 py-0.5 text-orange-700"><Math tex="0" /></span>
                <span className="text-xs text-foreground-muted">opposé de</span>
                <span className="rounded bg-orange-100 px-2 py-0.5 text-orange-700"><Math tex="0" /></span>
              </div>
            </div>
            <p className="mt-3 text-xs text-foreground-muted">
              Si A et B sont deux points d&apos;une droite graduée d&apos;origine O et si leurs abscisses sont opposées, alors <strong>O est le milieu du segment [AB]</strong>.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. COMPARAISON ===================== */}
      <LessonSection
        id="comparaison"
        kicker="03 · Comparer deux nombres relatifs"
        title="Trois règles, trois situations"
        tone="light"
        description="Cherche sur ton cahier ; il n'y a que trois cas possibles."
      >
        <div className="grid gap-4">
          <RuleCard
            index={1}
            title="Deux nombres positifs"
            tone="green"
            rule={<>Le plus grand est celui qui est <strong>le plus éloigné de zéro</strong>.</>}
          >
            <span className="rounded-lg border border-border bg-surface px-4 py-2"><Math tex="14{,}5 > 8{,}2" /></span>
            <span className="rounded-lg border border-border bg-surface px-4 py-2"><Math tex="10{,}5 < 25" /></span>
          </RuleCard>

          <RuleCard
            index={2}
            title="Deux nombres négatifs"
            tone="rose"
            rule={<>Le plus grand est celui qui est <strong>le plus proche de zéro</strong>.</>}
          >
            <span className="rounded-lg border border-border bg-surface px-4 py-2"><Math tex="-17 > -28{,}2" /></span>
            <span className="rounded-lg border border-border bg-surface px-4 py-2"><Math tex="-11{,}3 < -2{,}5" /></span>
          </RuleCard>

          <RuleCard
            index={3}
            title="Deux nombres de signes contraires"
            tone="neutral"
            rule={<>Le plus grand est <strong>le nombre positif</strong>.</>}
          >
            <span className="rounded-lg border border-border bg-surface px-4 py-2"><Math tex="14 > -28{,}2" /></span>
            <span className="rounded-lg border border-border bg-surface px-4 py-2"><Math tex="-9{,}7 < 0{,}5" /></span>
          </RuleCard>
        </div>

        <div className="mt-4">
          <Callout variant="warning" title="Remarques importantes">
            <ul className="list-inside list-disc space-y-1">
              <li>Le nombre <Math tex="0" /> est le plus grand des négatifs et le plus petit des positifs.</li>
              <li>Deux nombres de signes contraires : le plus grand est toujours le positif.</li>
              <li>Deux nombres positifs : le plus grand est le plus éloigné de zéro.</li>
              <li>Deux nombres négatifs : le plus grand est le plus proche de zéro.</li>
            </ul>
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== IV. EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="7 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les nombres relatifs.">
          <ExerciseCard
            id="1"
            index={1}
            title="Abscisses sur une droite graduée"
            itemsLabel="8 points à repérer"
            items={
              <div>
                <div className="mb-4 overflow-x-auto rounded-xl border border-border bg-surface-muted p-4">
                  <NumberLineExercise1 />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {["A", "O", "I", "B", "C", "D", "E", "F"].map((l) => (
                    <div key={l} className="rounded-lg border border-border p-3 text-center font-mono text-sm">{l}</div>
                  ))}
                </div>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <CorrectionCard n="A"><Math tex="+3" /></CorrectionCard>
                <CorrectionCard n="O"><Math tex="0" /></CorrectionCard>
                <CorrectionCard n="I"><Math tex="+1" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="-2" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="+5" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="-1" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="-4" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="+4" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Comparer une liste de nombres"
            itemsLabel="6 nombres"
            items={
              <div>
                <div className="mb-4 flex flex-wrap gap-2 font-mono text-sm">
                  {["2{,}11", "2{,}1", "-2", "-2{,}01", "-2{,}001", "-2{,}011"].map((t) => (
                    <span key={t} className="rounded-lg bg-surface-muted px-3 py-1.5"><Math tex={t} /></span>
                  ))}
                </div>
                <div className="space-y-2 text-sm">
                  <p className="rounded-lg border border-border p-3">Le plus grand nombre est …</p>
                  <p className="rounded-lg border border-border p-3">Le plus petit nombre est …</p>
                  <p className="rounded-lg border border-border p-3">Le nombre qui a la plus petite distance à zéro est …</p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n={1}>Le plus grand nombre est <Math tex="+2{,}11" /></CorrectionCard>
                <CorrectionCard n={2}>Le plus petit nombre est <Math tex="-2{,}011" /></CorrectionCard>
                <CorrectionCard n={3}>
                  Le nombre qui a la plus petite distance à zéro est <Math tex="-2" />{" "}
                  <span className="text-xs text-foreground-muted">(distance = 2, la plus petite de toutes)</span>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Complète par < ou >"
            itemsLabel="20 comparaisons"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "-9 \\ \\Box\\ +7",
                  "-2{,}4 \\ \\Box\\ -2{,}5",
                  "-7{,}21 \\ \\Box\\ -8{,}34",
                  "-3{,}22 \\ \\Box\\ -5{,}17",
                  "-6 \\ \\Box\\ -11",
                  "-3 \\ \\Box\\ -4",
                  "-3{,}8 \\ \\Box\\ +6",
                  "+8{,}11 \\ \\Box\\ +8",
                  "-8{,}34 \\ \\Box\\ -5{,}19",
                  "-5 \\ \\Box\\ -1",
                  "-7 \\ \\Box\\ +2",
                  "-3{,}5 \\ \\Box\\ -7{,}2",
                  "+3{,}21 \\ \\Box\\ -4{,}6",
                  "+4{,}22 \\ \\Box\\ -6{,}11",
                  "+9{,}3 \\ \\Box\\ -4{,}2",
                  "-15 \\ \\Box\\ +3",
                  "-9{,}1 \\ \\Box\\ -6{,}7",
                  "-3{,}21 \\ \\Box\\ -3{,}19",
                  "-5{,}3 \\ \\Box\\ -5{,}29",
                  "-4 \\ \\Box\\ -3{,}9",
                ].map((t) => (
                  <div key={t} className="rounded-lg border border-border p-3 text-center font-mono text-sm">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "-9 < +7",
                  "-2{,}4 > -2{,}5",
                  "-7{,}21 > -8{,}34",
                  "-3{,}22 > -5{,}17",
                  "-6 > -11",
                  "-3 > -4",
                  "-3{,}8 < +6",
                  "+8{,}11 > +8",
                  "-8{,}34 < -5{,}19",
                  "-5 < -1",
                  "-7 < +2",
                  "-3{,}5 > -7{,}2",
                  "+3{,}21 > -4{,}6",
                  "+4{,}22 > -6{,}11",
                  "+9{,}3 > -4{,}2",
                  "-15 < +3",
                  "-9{,}1 < -6{,}7",
                  "-3{,}21 < -3{,}19",
                  "-5{,}3 < -5{,}29",
                  "-4 < -3{,}9",
                ].map((t) => (
                  <div key={t} className="rounded-lg border border-green-500/20 bg-surface p-3 text-center">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Ranger une liste de nombres"
            items={
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-sm"><strong>1)</strong> Range par ordre croissant :</p>
                  <div className="mb-3 flex flex-wrap gap-2 font-mono text-sm">
                    {["-2{,}5", "-2{,}54", "-2{,}537", "-2{,}6", "-2{,}46", "-2{,}56"].map((t) => (
                      <span key={t} className="rounded-lg bg-surface-muted px-3 py-1.5"><Math tex={t} /></span>
                    ))}
                  </div>
                  <p className="rounded-lg border border-dashed border-border p-3 text-sm text-foreground-muted">Réponse ⋯</p>
                </div>
                <div>
                  <p className="mb-2 text-sm"><strong>2)</strong> Range par ordre décroissant :</p>
                  <div className="mb-3 flex flex-wrap gap-2 font-mono text-sm">
                    {["-8{,}1", "+7{,}9", "0", "-5{,}8", "+3{,}6", "-5{,}9", "-6{,}5"].map((t) => (
                      <span key={t} className="rounded-lg bg-surface-muted px-3 py-1.5"><Math tex={t} /></span>
                    ))}
                  </div>
                  <p className="rounded-lg border border-dashed border-border p-3 text-sm text-foreground-muted">Réponse ⋯</p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-3">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">Ordre croissant</p>
                  <Math tex="-2{,}6 < -2{,}56 < -2{,}54 < -2{,}537 < -2{,}5 < -2{,}46" />
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
                  <p className="mb-1 text-xs text-foreground-muted">Ordre décroissant</p>
                  <Math tex="+7{,}9 > +3{,}6 > 0 > -5{,}8 > -5{,}9 > -6{,}5 > -8{,}1" />
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Nombres entiers dans un intervalle"
            itemsLabel="4 encadrements"
            items={
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border p-4"><strong>a)</strong> <Math tex="-5 < x \le 3" /></div>
                <div className="rounded-lg border border-border p-4"><strong>b)</strong> <Math tex="-7 \le x \le 2" /></div>
                <div className="rounded-lg border border-border p-4"><strong>c)</strong> <Math tex="-3{,}24 < x \le 8" /></div>
                <div className="rounded-lg border border-border p-4"><strong>d)</strong> <Math tex="-12{,}45 \le x < -1" /></div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <CorrectionCard n="a"><Math tex="x \in \{-4,\ -3,\ -2,\ -1,\ 0,\ 1,\ 2,\ 3\}" /></CorrectionCard>
                <CorrectionCard n="b"><Math tex="x \in \{-7,\ -6,\ -5,\ -4,\ -3,\ -2,\ -1,\ 0,\ 1,\ 2\}" /></CorrectionCard>
                <CorrectionCard n="c"><Math tex="x \in \{-3,\ -2,\ -1,\ 0,\ 1,\ 2,\ 3,\ 4,\ 5,\ 6,\ 7,\ 8\}" /></CorrectionCard>
                <CorrectionCard n="d"><Math tex="x \in \{-12,\ -11,\ -10,\ -9,\ -8,\ -7,\ -6,\ -5,\ -4,\ -3,\ -2\}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Encadrer par deux entiers consécutifs"
            itemsLabel="5 encadrements"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {["\\Box < 4{,}3 < \\Box", "\\Box < -4{,}3 < \\Box", "\\Box < -24{,}6 < \\Box", "\\Box < +8{,}13 < \\Box", "\\Box < -0{,}6 < \\Box"].map((t) => (
                  <div key={t} className="rounded-lg border border-border p-3 text-center font-mono text-sm">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {["4 < 4{,}3 < 5", "-5 < -4{,}3 < -4", "-25 < -24{,}6 < -24", "8 < +8{,}13 < 9", "-1 < -0{,}6 < 0"].map((t) => (
                  <div key={t} className="rounded-lg border border-green-500/20 bg-surface p-3 text-center">
                    <Math tex={t} />
                  </div>
                ))}
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Vrai ou Faux"
            itemsLabel="4 affirmations"
            items={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-border p-4"><strong>a)</strong> L&apos;opposé d&apos;un nombre négatif est un nombre positif.</div>
                <div className="rounded-lg border border-border p-4"><strong>b)</strong> Deux nombres relatifs de signes contraires sont opposés.</div>
                <div className="rounded-lg border border-border p-4"><strong>c)</strong> L&apos;opposé de l&apos;opposé d&apos;un nombre négatif <Math tex="x" /> est égal à <Math tex="x" />.</div>
                <div className="rounded-lg border border-border p-4"><strong>d)</strong> Chaque nombre relatif est plus grand que son opposé.</div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-green-100/60 p-4">
                  <strong className="text-green-700">a) Vrai.</strong>{" "}
                  <span className="text-foreground-muted">L&apos;opposé d&apos;un négatif a la même distance à zéro mais un signe contraire, donc il est positif.</span>
                </div>
                <div className="rounded-lg border border-rose-500/30 bg-rose-100/60 p-4">
                  <strong className="text-rose-700">b) Faux.</strong>{" "}
                  <span className="text-foreground-muted">
                    Il faut en plus la même distance à zéro. Exemple : <Math tex="-2" /> et <Math tex="+5" /> sont de signes contraires mais ne sont pas opposés.
                  </span>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-green-100/60 p-4">
                  <strong className="text-green-700">c) Vrai.</strong>{" "}
                  <span className="text-foreground-muted">L&apos;opposé de l&apos;opposé d&apos;un nombre redonne toujours ce nombre.</span>
                </div>
                <div className="rounded-lg border border-rose-500/30 bg-rose-100/60 p-4">
                  <strong className="text-rose-700">d) Faux.</strong>{" "}
                  <span className="text-foreground-muted">Vrai seulement pour un nombre positif ; un négatif est plus petit que son opposé, et l&apos;opposé de 0 est égal à 0.</span>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
