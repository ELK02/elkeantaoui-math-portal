import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Examens Régionaux · 6 sujets corrigés | 3AC",
  description:
    "6 examens régionaux corrigés de mathématiques pour la 3ème année collège (2019 à 2022, régions Souss-Massa, Casablanca-Settat, Drâa-Tafilalet, Oriental) : sujets complets et corrections détaillées, un clic par examen.",
  kicker: "3ᵉ Année Collège · Examens régionaux",
  heroTitle: "6 examens régionaux, sujets et corrections",
  heroSubtitle:
    "Six sujets officiels de l'Examen Régional Unifié (Souss-Massa, Casablanca-Settat, Drâa-Tafilalet, Oriental), reproduits fidèlement avec leur correction complète en un clic.",
  footerNote: "Examens régionaux · Mathématiques, 3ème année collège, semestre 2.",
  sections: [
    { id: "sommaire", label: "Sommaire" },
    { id: "examen-1", label: "N°1" },
    { id: "examen-2", label: "N°2" },
    { id: "examen-3", label: "N°3" },
    { id: "examen-4", label: "N°4" },
    { id: "examen-5", label: "N°5" },
    { id: "examen-6", label: "N°6" },
  ],
};

type Accent = "indigo" | "sky" | "teal" | "violet" | "rose" | "amber";

const ACCENTS: Record<Accent, { badge: string; text: string; chip: string }> = {
  indigo: {
    badge: "bg-indigo-600",
    text: "text-indigo-700 dark:text-indigo-300",
    chip: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
  },
  sky: {
    badge: "bg-sky-600",
    text: "text-sky-700 dark:text-sky-300",
    chip: "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  },
  teal: {
    badge: "bg-teal-600",
    text: "text-teal-700 dark:text-teal-300",
    chip: "bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300",
  },
  violet: {
    badge: "bg-violet-600",
    text: "text-violet-700 dark:text-violet-300",
    chip: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  },
  rose: {
    badge: "bg-rose-600",
    text: "text-rose-700 dark:text-rose-300",
    chip: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
  },
  amber: {
    badge: "bg-amber-600",
    text: "text-amber-700 dark:text-amber-300",
    chip: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  },
};

const EXAMS: { n: number; accent: Accent; session: string; region: string }[] = [
  { n: 1, accent: "indigo", session: "Juin 2019", region: "Souss-Massa" },
  { n: 2, accent: "sky", session: "Juin 2021", region: "Souss-Massa" },
  { n: 3, accent: "teal", session: "Juin 2022", region: "Souss-Massa" },
  { n: 4, accent: "violet", session: "Juin 2022", region: "Casablanca-Settat" },
  { n: 5, accent: "rose", session: "Juin 2022", region: "Drâa-Tafilalet" },
  { n: 6, accent: "amber", session: "Juin 2022", region: "Oriental" },
];

function ExNum({ n, accent }: { n: number; accent: Accent }) {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white ${ACCENTS[accent].badge}`}
    >
      {n}
    </span>
  );
}

function ExerciseBlock({
  n,
  accent,
  title,
  tag,
  children,
}: {
  n: number;
  accent: Accent;
  title?: ReactNode;
  tag: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <ExNum n={n} accent={accent} />
        <p className="font-semibold text-foreground">
          Exercice {n}
          {title ? <> · {title}</> : null}
        </p>
        <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-semibold ${ACCENTS[accent].chip}`}>
          {tag}
        </span>
      </div>
      <div className="space-y-3 text-sm text-foreground-muted">{children}</div>
    </div>
  );
}

function CorrectionBlock({
  n,
  accent,
  title,
  children,
}: {
  n: number;
  accent: Accent;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className={`mb-2 font-mono text-xs font-bold tracking-wide uppercase ${ACCENTS[accent].text}`}>
        Exercice {n}
        {title ? ` · ${title}` : ""}
      </p>
      <div className="space-y-2 text-sm text-foreground-muted">{children}</div>
    </div>
  );
}

function QRow({ children }: { children: ReactNode }) {
  return <div className="mt-2 grid grid-cols-3 gap-2">{children}</div>;
}

function QOpt({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center justify-center rounded-lg border border-border bg-surface-muted px-2.5 py-2 text-center text-sm">
      {children}
    </span>
  );
}

function Fig({
  children,
  caption,
  max = "max-w-xs",
}: {
  children: ReactNode;
  caption?: ReactNode;
  max?: string;
}) {
  return (
    <div className={`mx-auto mt-3 ${max} rounded-xl border border-border bg-surface-muted p-3`}>
      {children}
      {caption ? <p className="mt-2 text-center text-xs text-foreground-muted">{caption}</p> : null}
    </div>
  );
}

function Answer({ children }: { children: ReactNode }) {
  return <p className="font-semibold text-green-700 dark:text-green-500">{children}</p>;
}

function StatTable({ rows }: { rows: { label: string; values: (string | ReactNode)[]; strong?: boolean }[] }) {
  return (
    <div className="mt-3 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[360px] text-center text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i === 0 ? "border-b border-border bg-surface-muted" : ""}>
              <td className="p-2 text-left font-semibold text-foreground">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className={`p-1.5 ${row.strong ? "font-bold text-green-700 dark:text-green-500" : ""}`}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExamMeta({ session, region }: { session: string; region: string }) {
  const items = [
    `📅 ${session}`,
    `📍 ${region}`,
    "⏱️ 2 heures",
    "✖️ Coefficient 3",
    "📝 Note sur 20",
    "🚫 Calculatrice non autorisée",
  ];
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {items.map((it) => (
        <span key={it} className="rounded-full border border-border px-3 py-1 text-xs text-foreground-muted">
          {it}
        </span>
      ))}
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
          { value: "6", label: "examens complets" },
          { value: "4", label: "régions" },
          { value: "100%", label: "corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#sommaire"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Choisir un examen
            </a>
            <a
              href="#examen-1"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              Commencer par le N°1
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none flex-col items-end font-serif text-white italic">
            <span className="text-[6rem] leading-none font-bold sm:text-[8rem]">6</span>
            <span className="-mt-2 font-mono text-lg text-orange-400 not-italic">examens</span>
          </div>
        }
      />

      {/* ===================== SOMMAIRE ===================== */}
      <LessonSection
        id="sommaire"
        kicker="Sommaire"
        title="Choisissez votre examen"
        tone="light"
        description="Chaque carte indique la session, la région et sert de raccourci vers le sujet complet."
      >
        <Callout variant="info" title="Méthode">
          <p>
            Traitez d&apos;abord un examen complet comme le jour J, au brouillon, puis cliquez sur{" "}
            <strong>Voir la correction</strong> en bas de la carte pour vérifier toutes vos réponses d&apos;un
            coup, exercice par exercice.
          </p>
        </Callout>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMS.map((e) => (
            <a
              key={e.n}
              href={`#examen-${e.n}`}
              className="flex items-center gap-4 rounded-xl border border-border p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-base font-bold text-white ${ACCENTS[e.accent].badge}`}
              >
                {e.n}
              </span>
              <span>
                <span className="block font-semibold text-foreground">Examen N°{e.n}</span>
                <span className="block text-sm text-foreground-muted">
                  {e.session} · {e.region}
                </span>
              </span>
            </a>
          ))}
        </div>
      </LessonSection>

      {/* ===================== EXAMEN N°1 ===================== */}
      <LessonSection
        id="examen-1"
        kicker="01 · Session Juin 2019"
        title="Examen Régional N°1"
        tone="muted"
        description="Région Souss-Massa."
      >
        <ExamMeta session="Juin 2019" region="Souss-Massa" />
        <ExerciseCard
          id="1"
          index={1}
          title="Sujet complet"
          itemsLabel="6 exercices"
          items={
            <div className="space-y-4">
              <ExerciseBlock n={1} accent="indigo" tag="QCM · 4 points">
                <p>
                  Cet exercice est constitué de questions à choix multiples. Pour chaque question, trois réponses
                  (a), (b) et (c) sont proposées dont une seule est correcte. Recopier sur la copie le numéro de
                  la question et la bonne réponse : aucune justification n&apos;est demandée.
                </p>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    1) Soit <Math tex="EFGH" /> un parallélogramme :
                  </p>
                  <Fig max="max-w-[220px]">
                    <svg viewBox="0 0 300 190" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="190" fill="white" rx="12"/><polygon points="90.0,140.0 260.0,110.0 230.0,30.0 60.0,60.0" fill="#eef2ff" stroke="#334155" strokeWidth="2"/><circle cx="60.0" cy="60.0" r="3.6" fill="#1e293b"/><text x="40.0" y="56.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">H</text><circle cx="230.0" cy="30.0" r="3.6" fill="#1e293b"/><text x="238.0" y="24.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">G</text><circle cx="260.0" cy="110.0" r="3.6" fill="#1e293b"/><text x="270.0" y="114.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">F</text><circle cx="90.0" cy="140.0" r="3.6" fill="#1e293b"/><text x="82.0" y="162.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">E</text></svg>
                  </Fig>
                  <div className="mt-3 space-y-3">
                    <div>
                      <p>
                        <strong>a)</strong> L&apos;image du point <Math tex="F" /> par la translation qui
                        transforme <Math tex="G" /> en <Math tex="H" /> est :
                      </p>
                      <QRow>
                        <QOpt>(a) <Math tex="G" /></QOpt>
                        <QOpt>(b) <Math tex="H" /></QOpt>
                        <QOpt>(c) <Math tex="E" /></QOpt>
                      </QRow>
                    </div>
                    <div>
                      <p>
                        <strong>b)</strong> L&apos;image de la droite <Math tex="(EH)" /> par la translation qui
                        transforme <Math tex="H" /> en <Math tex="F" /> est :
                      </p>
                      <QRow>
                        <QOpt>(a) <Math tex="(FG)" /></QOpt>
                        <QOpt>(b) <Math tex="(EG)" /></QOpt>
                        <QOpt>(c) <Math tex="(HG)" /></QOpt>
                      </QRow>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    2) On considère la fonction linéaire <Math tex="f" /> telle que : <Math tex="f(2)=3" />
                  </p>
                  <div className="mt-3 space-y-4">
                    <div>
                      <p><Math tex="f(x)" /> est égale à :</p>
                      <QRow>
                        <QOpt>(a) <Math tex="2x+3" /></QOpt>
                        <QOpt>(b) <Math tex="\dfrac32 x" /></QOpt>
                        <QOpt>(c) <Math tex="\dfrac23 x" /></QOpt>
                      </QRow>
                    </div>
                    <div>
                      <p>Dans la figure ci-dessous, la représentation de <Math tex="f" /> est la droite :</p>
                      <Fig max="max-w-[240px]">
                        <svg viewBox="0 0 338 308" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="338" height="308" fill="white" rx="12"/>
<defs>
<marker id="arq1x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arq1y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlnq10" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#e11d48"/></marker>
<marker id="arlnq11" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb"/></marker>
<marker id="arlnq12" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#0d9488"/></marker>
</defs>
<line x1="34.0" y1="34.0" x2="34.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="64.0" y1="34.0" x2="64.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="94.0" y1="34.0" x2="94.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="124.0" y1="34.0" x2="124.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="154.0" y1="34.0" x2="154.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="184.0" y1="34.0" x2="184.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="214.0" y1="34.0" x2="214.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="244.0" y1="34.0" x2="244.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="274.0" y1="34.0" x2="274.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="304.0" y1="34.0" x2="304.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="274.0" x2="304.0" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="244.0" x2="304.0" y2="244.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="214.0" x2="304.0" y2="214.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="184.0" x2="304.0" y2="184.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="154.0" x2="304.0" y2="154.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="124.0" x2="304.0" y2="124.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="94.0" x2="304.0" y2="94.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="64.0" x2="304.0" y2="64.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="34.0" x2="304.0" y2="34.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="36.0" y1="214.0" x2="302.0" y2="214.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arq1x)"/><line x1="124.0" y1="276.0" x2="124.0" y2="32.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arq1y)"/>
<text x="110.0" y="230.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="150.0" y="230.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="110.0" y="188.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="84.0" y1="274.0" x2="244.0" y2="34.0" stroke="#e11d48" strokeWidth="2.6" markerEnd="url(#arlnq10)"/><text x="208.0" y="91.0" fontSize="13" fontWeight="700" fontStyle="italic" fill="#e11d48">(Δ)</text>
<line x1="64.0" y1="274.0" x2="304.0" y2="34.0" stroke="#2563eb" strokeWidth="2.4" markerEnd="url(#arlnq11)"/><text x="256.0" y="82.0" fontSize="13" fontWeight="700" fontStyle="italic" fill="#2563eb">(L)</text>
<line x1="34.0" y1="259.0" x2="304.0" y2="124.0" stroke="#0d9488" strokeWidth="2.4" markerEnd="url(#arlnq12)"/><text x="286.0" y="130.0" fontSize="13" fontWeight="700" fontStyle="italic" fill="#0d9488">(D)</text>
</svg>
                      </Fig>
                      <QRow>
                        <QOpt>(a) <Math tex="(D)" /></QOpt>
                        <QOpt>(b) <Math tex="(L)" /></QOpt>
                        <QOpt>(c) <Math tex="(\Delta)" /></QOpt>
                      </QRow>
                    </div>
                  </div>
                </div>
              </ExerciseBlock>

              <ExerciseBlock n={2} accent="indigo" tag="Équations · Inéquation · Système · 5 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Résoudre les deux équations suivantes : <Math tex="-3x-5=9x+6" /> et{" "}
                    <Math tex="(3x-12)(10-5x)=0" />
                  </li>
                  <li>
                    Résoudre l&apos;inéquation suivante : <Math tex="5x-1>1-7x" />
                  </li>
                  <li>
                    Résoudre le système suivant : <Math tex="\begin{cases}x-y=3\\-3x+y=-7\end{cases}" />
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={3} accent="indigo" tag="Statistiques · 2 points">
                <p>
                  On a demandé aux élèves de 3ème année collège le nombre de livres qu&apos;ils ont lus depuis la
                  rentrée. Le diagramme suivant représente les résultats obtenus :
                </p>
                <Fig max="max-w-sm">
                  <svg viewBox="0 0 420 300" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="420" height="300" fill="white" rx="12"/><line x1="50" y1="254.0" x2="400" y2="254.0" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="258.0" fontSize="10.5" fill="#94a3b8" textAnchor="end">0</text><line x1="50" y1="220.6" x2="400" y2="220.6" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="224.6" fontSize="10.5" fill="#94a3b8" textAnchor="end">2</text><line x1="50" y1="187.1" x2="400" y2="187.1" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="191.1" fontSize="10.5" fill="#94a3b8" textAnchor="end">4</text><line x1="50" y1="153.7" x2="400" y2="153.7" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="157.7" fontSize="10.5" fill="#94a3b8" textAnchor="end">6</text><line x1="50" y1="120.3" x2="400" y2="120.3" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="124.3" fontSize="10.5" fill="#94a3b8" textAnchor="end">8</text><line x1="50" y1="86.9" x2="400" y2="86.9" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="90.9" fontSize="10.5" fill="#94a3b8" textAnchor="end">10</text><line x1="50" y1="53.4" x2="400" y2="53.4" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="57.4" fontSize="10.5" fill="#94a3b8" textAnchor="end">12</text><line x1="50" y1="20.0" x2="400" y2="20.0" stroke="#f1f5f9" strokeWidth="1"/><text x="42" y="24.0" fontSize="10.5" fill="#94a3b8" textAnchor="end">14</text><line x1="50" y1="20" x2="50" y2="254" stroke="#1e293b" strokeWidth="1.6"/><line x1="50" y1="254" x2="400" y2="254" stroke="#1e293b" strokeWidth="1.6"/><rect x="78.9" y="70.1" width="29.8" height="183.9" rx="4" fill="#4f46e5"/><text x="93.8" y="62.1" fontSize="12" fontWeight="700" fill="#4f46e5" textAnchor="middle">11</text><text x="93.8" y="274.0" fontSize="12" fill="#334155" textAnchor="middle">1</text><rect x="166.4" y="20.0" width="29.8" height="234.0" rx="4" fill="#4f46e5"/><text x="181.2" y="12.0" fontSize="12" fontWeight="700" fill="#4f46e5" textAnchor="middle">14</text><text x="181.2" y="274.0" fontSize="12" fill="#334155" textAnchor="middle">2</text><rect x="253.9" y="103.6" width="29.8" height="150.4" rx="4" fill="#4f46e5"/><text x="268.8" y="95.6" fontSize="12" fontWeight="700" fill="#4f46e5" textAnchor="middle">9</text><text x="268.8" y="274.0" fontSize="12" fill="#334155" textAnchor="middle">3</text><rect x="341.4" y="153.7" width="29.8" height="100.3" rx="4" fill="#4f46e5"/><text x="356.2" y="145.7" fontSize="12" fontWeight="700" fill="#4f46e5" textAnchor="middle">6</text><text x="356.2" y="274.0" fontSize="12" fill="#334155" textAnchor="middle">4</text><text x="210.0" y="294.0" fontSize="11.5" fill="#64748b" textAnchor="middle">Nombre de livres lus</text><text x="14" y="30" fontSize="11.5" fill="#64748b">Effectif</text></svg>
                </Fig>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Compléter le tableau suivant :
                    <StatTable
                      rows={[
                        { label: "Nombre de livres lus", values: ["1", "…", "…", "…"] },
                        { label: "Effectif", values: ["11", "…", "…", "…"] },
                      ]}
                    />
                  </li>
                  <li>Quel est le mode de cette série statistique ?</li>
                  <li>Calculer la moyenne arithmétique.</li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={4} accent="indigo" tag="Fonction affine · 2 points">
                <p>
                  Soit <Math tex="g" /> une fonction affine telle que : <Math tex="g(1)=6" /> et{" "}
                  <Math tex="g(-1)=-4" />
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Déterminer le coefficient de <Math tex="g" />.
                  </li>
                  <li>
                    Exprimer <Math tex="g(x)" /> en fonction de <Math tex="x" />.
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={5} accent="indigo" tag="Repère · 4 points">
                <p>
                  Dans un repère orthonormé <Math tex="(O;I;J)" /> on considère les points <Math tex="A(1;5)" /> ;{" "}
                  <Math tex="B(7;2)" /> et <Math tex="C(3;0)" />
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" />.
                  </li>
                  <li>
                    Déterminer les coordonnées de <Math tex="M" /> le milieu du segment <Math tex="[BC]" />.
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Déterminer l&apos;équation réduite de la droite <Math tex="(BC)" />.
                      </li>
                      <li>
                        On considère la droite <Math tex="(\Delta)" /> d&apos;équation réduite :{" "}
                        <Math tex="y=\dfrac12 x+3" />. Les droites <Math tex="(\Delta)" /> et <Math tex="(BC)" />{" "}
                        sont-elles parallèles ? Justifier ta réponse.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={6} accent="indigo" tag="Géométrie dans l'espace · 3 points">
                <p>
                  Soit <Math tex="SABCD" /> une pyramide de base le rectangle <Math tex="ABCD" /> de centre{" "}
                  <Math tex="O" /> et de hauteur <Math tex="[SO]" /> telles que :{" "}
                  <Math tex="SA=SB=SC=SD=6{,}5\text{ cm}" /> ; <Math tex="AB=4\text{ cm}" /> et{" "}
                  <Math tex="AD=3\text{ cm}" />
                </p>
                <Fig max="max-w-sm">
                  <svg viewBox="0 0 560 320" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="560" height="320" fill="white" rx="12"/><line x1="230.0" y1="230.0" x2="500.0" y2="230.0" stroke="#1e293b" strokeWidth="1.8" strokeDasharray="5 4"/><line x1="150.0" y1="290.0" x2="230.0" y2="230.0" stroke="#1e293b" strokeWidth="1.8" strokeDasharray="5 4"/><line x1="150.0" y1="290.0" x2="420.0" y2="290.0" stroke="#1e293b" strokeWidth="1.8"/><line x1="420.0" y1="290.0" x2="500.0" y2="230.0" stroke="#1e293b" strokeWidth="1.8"/><line x1="150.0" y1="290.0" x2="325.0" y2="260.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="500.0" y1="230.0" x2="325.0" y2="260.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="420.0" y1="290.0" x2="325.0" y2="260.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="230.0" y1="230.0" x2="325.0" y2="260.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="325.0" y1="55.0" x2="325.0" y2="260.0" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="5 4"/><line x1="325.0" y1="55.0" x2="230.0" y2="230.0" stroke="#1e293b" strokeWidth="1.8" strokeDasharray="5 4"/><line x1="325.0" y1="55.0" x2="150.0" y2="290.0" stroke="#1e293b" strokeWidth="1.8"/><line x1="325.0" y1="55.0" x2="420.0" y2="290.0" stroke="#1e293b" strokeWidth="1.8"/><line x1="325.0" y1="55.0" x2="500.0" y2="230.0" stroke="#1e293b" strokeWidth="1.8"/><text x="317.0" y="43.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">S</text><text x="130.0" y="308.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text><text x="428.0" y="308.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text><text x="510.0" y="226.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text><text x="212.0" y="224.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text><text x="331.0" y="276.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#64748b">O</text></svg>
                </Fig>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Calculer <Math tex="OA" />.
                  </li>
                  <li>
                    Vérifier que : <Math tex="SO=6\text{ cm}" />
                  </li>
                  <li>
                    Calculer le volume de la pyramide <Math tex="SABCD" />.
                  </li>
                </ol>
              </ExerciseBlock>
            </div>
          }
          correction={
            <div className="space-y-6">
              <CorrectionBlock n={1} accent="indigo" title="QCM">
                <StatTable
                  rows={[
                    { label: "1 - a", values: [<Math key="a" tex="(c)\ E" />], strong: true },
                    { label: "1 - b", values: [<Math key="a" tex="(a)\ (FG)" />], strong: true },
                    { label: "2 - a", values: [<Math key="a" tex="(b)\ \dfrac32 x" />], strong: true },
                    { label: "2 - b", values: [<Math key="a" tex="(c)\ (\Delta)" />], strong: true },
                  ]}
                />
              </CorrectionBlock>

              <CorrectionBlock n={2} accent="indigo">
                <p className="font-semibold text-foreground">
                  1) <Math tex="-3x-5=9x+6" />
                </p>
                <MathBlock tex="-3x-9x=6+5 \;\Rightarrow\; -12x=11 \;\Rightarrow\; x=-\dfrac{11}{12}" />
                <Answer>
                  D&apos;où : <Math tex="-\dfrac{11}{12}" /> est la solution de cette équation.
                </Answer>
                <p className="font-semibold text-foreground">
                  <Math tex="(3x-12)(10-5x)=0" />
                </p>
                <MathBlock tex="3x-12=0 \;\text{ou}\; 10-5x=0 \;\Rightarrow\; x=4 \;\text{ou}\; x=2" />
                <Answer>D&apos;où : 4 et 2 sont les solutions de cette équation.</Answer>
                <p className="font-semibold text-foreground">
                  2) <Math tex="5x-1>1-7x" />
                </p>
                <MathBlock tex="5x+7x>1+1 \;\Rightarrow\; 12x>2 \;\Rightarrow\; x>\dfrac16" />
                <Answer>
                  Les solutions sont tous les nombres strictement supérieurs à <Math tex="\dfrac16" />.
                </Answer>
                <p className="font-semibold text-foreground">
                  3) <Math tex="\begin{cases}x-y=3\\-3x+y=-7\end{cases}" />
                </p>
                <MathBlock tex="x=3+y \;\Rightarrow\; -3(3+y)+y=-7 \;\Rightarrow\; -2y=2 \;\Rightarrow\; y=-1,\; x=2" />
                <Answer>
                  D&apos;où le couple <Math tex="(2;-1)" /> est la solution de ce système.
                </Answer>
              </CorrectionBlock>

              <CorrectionBlock n={3} accent="indigo" title="Statistiques">
                <StatTable
                  rows={[
                    { label: "Nombre de livres lus", values: ["1", "2", "3", "4"] },
                    { label: "Effectif", values: ["11", "14", "9", "6"], strong: true },
                  ]}
                />
                <p>
                  2) Le mode de cette série statistique est la valeur <strong>2</strong> (car elle a le plus grand
                  effectif, 14).
                </p>
                <p>3) Calculons la moyenne arithmétique :</p>
                <MathBlock tex="m=\dfrac{1\times11+2\times14+3\times9+4\times6}{40}=\dfrac{90}{40}=2{,}25" />
              </CorrectionBlock>

              <CorrectionBlock n={4} accent="indigo">
                <p>
                  1) Coefficient de <Math tex="g" /> :
                </p>
                <MathBlock tex="a=\dfrac{g(1)-g(-1)}{1-(-1)}=\dfrac{6-(-4)}{2}=\dfrac{10}{2}=5" />
                <p>
                  2) <Math tex="g" /> est affine donc <Math tex="g(x)=ax+b" /> avec <Math tex="a=5" /> :{" "}
                  <Math tex="g(1)=6 \Rightarrow 5+b=6 \Rightarrow b=1" />
                </p>
                <Answer>
                  D&apos;où : <Math tex="g(x)=5x+1" />
                </Answer>
              </CorrectionBlock>

              <CorrectionBlock n={5} accent="indigo" title="Repère">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                  <div className="space-y-2">
                    <p>
                      1) <Math tex="\overrightarrow{AB}(x_B-x_A;y_B-y_A) \Rightarrow \overrightarrow{AB}(7-1;2-5)" />{" "}
                      d&apos;où <Math tex="\overrightarrow{AB}(6;-3)" />
                    </p>
                    <p>
                      2){" "}
                      <Math tex="M\left(\dfrac{x_C+x_B}{2};\dfrac{y_C+y_B}{2}\right) \Rightarrow M\left(\dfrac{10}{2};\dfrac{2}{2}\right)" />{" "}
                      d&apos;où <Math tex="M(5;1)" />
                    </p>
                    <p>
                      3a) Pente : <Math tex="a=\dfrac{y_B-y_C}{x_B-x_C}=\dfrac{2-0}{7-3}=\dfrac12" />, et{" "}
                      <Math tex="C(3;0)\in(BC)" /> donne <Math tex="b=-\dfrac32" />
                    </p>
                    <Answer>
                      D&apos;où : <Math tex="(BC): y=\dfrac12 x-\dfrac32" />
                    </Answer>
                    <p>
                      3b) <Math tex="(\Delta): y=\dfrac12 x+3" /> a la même pente <Math tex="\dfrac12" /> que{" "}
                      <Math tex="(BC)" />.
                    </p>
                    <Answer>
                      D&apos;où : <Math tex="(\Delta)" /> et <Math tex="(BC)" /> sont parallèles.
                    </Answer>
                  </div>
                  <Fig
                    max="max-w-[220px]"
                    caption={
                      <>
                        <Math tex="(BC)" /> en <span className="font-semibold text-blue-600">bleu</span>,{" "}
                        <Math tex="(\Delta)" /> en{" "}
                        <span className="font-semibold text-emerald-600">vert pointillé</span> · même pente{" "}
                        <Math tex="\tfrac12" />
                      </>
                    }
                  >
                    <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="320" fill="white" rx="12"/>
<defs>
<marker id="arg9x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg9y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng90" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb"/></marker>
<marker id="arlng91" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#059669"/></marker>
</defs>
<line x1="34.0" y1="34.0" x2="34.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="62.0" y1="34.0" x2="62.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="90.0" y1="34.0" x2="90.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="118.0" y1="34.0" x2="118.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="146.0" y1="34.0" x2="146.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="174.0" y1="34.0" x2="174.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="202.0" y1="34.0" x2="202.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="230.0" y1="34.0" x2="230.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="258.0" y1="34.0" x2="258.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="286.0" y1="34.0" x2="286.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="286.0" x2="286.0" y2="286.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="258.0" x2="286.0" y2="258.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="230.0" x2="286.0" y2="230.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="202.0" x2="286.0" y2="202.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="174.0" x2="286.0" y2="174.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="146.0" x2="286.0" y2="146.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="118.0" x2="286.0" y2="118.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="90.0" x2="286.0" y2="90.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="62.0" x2="286.0" y2="62.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="34.0" x2="286.0" y2="34.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="36.0" y1="230.0" x2="284.0" y2="230.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg9x)"/><line x1="62.0" y1="288.0" x2="62.0" y2="32.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg9y)"/>
<text x="48.0" y="246.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="86.0" y="246.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="48.0" y="206.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="34.0" y1="286.0" x2="286.0" y2="160.0" stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#arlng90)"/><text x="244.4" y="177.8" fontSize="13" fontWeight="700" fontStyle="italic" fill="#2563eb">(BC)</text>
<line x1="34.0" y1="160.0" x2="286.0" y2="34.0" stroke="#059669" strokeWidth="2.2" strokeDasharray="7 5" markerEnd="url(#arlng91)"/><text x="107.2" y="120.4" fontSize="13" fontWeight="700" fontStyle="italic" fill="#059669">(Δ)</text>
<circle cx="90.0" cy="90.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="74.0" y="82.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
<circle cx="258.0" cy="174.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="266.0" y="166.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
<circle cx="146.0" cy="230.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="152.0" y="248.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text>
<circle cx="202.0" cy="202.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/><text x="210.0" y="218.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#e11d48">M</text>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={6} accent="indigo" title="Pyramide">
                <p>
                  1) <Math tex="ABC" /> rectangle en <Math tex="B" />, Pythagore :{" "}
                  <Math tex="AC^2=AB^2+BC^2=4^2+3^2=25 \Rightarrow AC=5\text{ cm}" />. <Math tex="O" /> centre du
                  rectangle donc <Math tex="OA=\dfrac{AC}{2}=2{,}5\text{ cm}" />
                </p>
                <p>
                  2) <Math tex="[SO]\perp(ABCD)" /> donc <Math tex="SOA" /> rectangle en <Math tex="O" /> :{" "}
                  <Math tex="SO^2=SA^2-OA^2=6{,}5^2-2{,}5^2=42{,}25-6{,}25=36 \Rightarrow SO=\sqrt{36}=6\text{ cm}" />{" "}
                  ✓
                </p>
                <p>
                  3) Volume :{" "}
                  <Math tex="V_{SABCD}=\dfrac13\times A_{ABCD}\times SO=\dfrac13\times4\times3\times6=24\text{ cm}^3" />
                </p>
              </CorrectionBlock>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== EXAMEN N°2 ===================== */}
      <LessonSection
        id="examen-2"
        kicker="02 · Session Juin 2021"
        title="Examen Régional N°2"
        tone="light"
        description="Région Souss-Massa."
      >
        <ExamMeta session="Juin 2021" region="Souss-Massa" />
        <ExerciseCard
          id="2"
          index={2}
          title="Sujet complet"
          itemsLabel="5 exercices"
          items={
            <div className="space-y-4">
              <ExerciseBlock n={1} accent="sky" tag="QCM · 4 points">
                <p>
                  Cet exercice est constitué de questions à choix multiples. Pour chaque question, trois réponses
                  (a), (b) et (c) sont proposées dont une seule est correcte.
                </p>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    1) La solution de l&apos;équation <Math tex="2(x+1)=4" /> est :
                  </p>
                  <QRow>
                    <QOpt>(a) <Math tex="-3" /></QOpt>
                    <QOpt>(b) <Math tex="1" /></QOpt>
                    <QOpt>(c) <Math tex="\dfrac32" /></QOpt>
                  </QRow>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    2) Les solutions de l&apos;inéquation <Math tex="x-3\geq2x" /> sont tous les nombres réels{" "}
                    <Math tex="x" /> qui vérifient :
                  </p>
                  <QRow>
                    <QOpt>(a) <Math tex="x\geq3" /></QOpt>
                    <QOpt>(b) <Math tex="x>-3" /></QOpt>
                    <QOpt>(c) <Math tex="x\leq-3" /></QOpt>
                  </QRow>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    3) Le système <Math tex="\begin{cases}x-3y=1\\-2x+6y=5\end{cases}" /> :
                  </p>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <QOpt>(a) Admet une seule solution</QOpt>
                    <QOpt>(b) N&apos;admet aucune solution</QOpt>
                    <QOpt>(c) Admet une infinité de solutions</QOpt>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    4) Dans un repère orthonormé, le point <Math tex="M(2;3)" /> appartient à une droite dont
                    l&apos;équation réduite est :
                  </p>
                  <QRow>
                    <QOpt>(a) <Math tex="y=2x+3" /></QOpt>
                    <QOpt>(b) <Math tex="y=2x-1" /></QOpt>
                    <QOpt>(c) <Math tex="y=2x-3" /></QOpt>
                  </QRow>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    5) Si <Math tex="\overrightarrow{AB}=\overrightarrow{EF}" /> alors :
                  </p>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <QOpt>
                      (a) <Math tex="F" /> est l&apos;image de <Math tex="E" /> par la translation de vecteur{" "}
                      <Math tex="\overrightarrow{AB}" />
                    </QOpt>
                    <QOpt>
                      (b) <Math tex="E" /> est l&apos;image de <Math tex="F" /> par la translation de vecteur{" "}
                      <Math tex="\overrightarrow{AB}" />
                    </QOpt>
                    <QOpt>
                      (c) <Math tex="A" /> est l&apos;image de <Math tex="B" /> par la translation de vecteur{" "}
                      <Math tex="\overrightarrow{EF}" />
                    </QOpt>
                  </div>
                </div>
              </ExerciseBlock>

              <ExerciseBlock n={2} accent="sky" tag="Équations · Problème · 4 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Résoudre l&apos;équation <Math tex="2-3x=11-6x" />
                  </li>
                  <li>
                    Résoudre l&apos;équation <Math tex="2x(x-5)+4(x-5)=0" />
                  </li>
                  <li>
                    Le prix de 50 cahiers de deux formats différents est 455 DH. Le prix d&apos;un cahier de grand
                    format est 10 DH chacun et celui d&apos;un cahier de petit format est 7 DH chacun. Quel est le
                    nombre de cahiers de petit format ?
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={3} accent="sky" tag="Système · Problème · 4 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    On considère le système : <Math tex="(S):\begin{cases}4x+y=7\\x+3y=10\end{cases}" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Le couple <Math tex="(2;-1)" /> est-il solution du système <Math tex="(S)" /> ?
                      </li>
                      <li>
                        En utilisant la méthode de substitution, résoudre le système <Math tex="(S)" />.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        En utilisant la méthode de la combinaison linéaire, résoudre le système :{" "}
                        <Math tex="\begin{cases}x+y=14\\x+2y=20\end{cases}" />
                      </li>
                      <li>
                        La masse de 14 boules est 1000 g. Parmi ces boules il y en a qui pèsent 50 g et
                        d&apos;autres qui pèsent 100 g. Quel est le nombre de boules de chaque catégorie ?
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={4} accent="sky" tag="Translation · 2,5 points">
                <p>
                  On considère la figure ci-contre telle que : <Math tex="ABCD" /> est un parallélogramme de
                  centre <Math tex="O" /> ; les droites <Math tex="(AC)" /> et <Math tex="(BE)" /> sont
                  parallèles ; les droites <Math tex="(DB)" /> et <Math tex="(AE)" /> sont parallèles.
                </p>
                <Fig max="max-w-sm">
                  <svg viewBox="0 0 400 320" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="320" fill="white" rx="12"/><defs><marker id="s2ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker></defs><polygon points="70.0,150.0 345.0,100.0 330.0,230.0 55.0,280.0" fill="none" stroke="#334155" strokeWidth="2"/><line x1="70.0" y1="150.0" x2="330.0" y2="230.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="345.0" y1="100.0" x2="55.0" y2="280.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="345.0" y1="100.0" x2="215.0" y2="60.0" stroke="#0d9488" strokeWidth="2"/><line x1="70.0" y1="150.0" x2="215.0" y2="60.0" stroke="#e11d48" strokeWidth="2"/><circle cx="70.0" cy="150.0" r="3.6" fill="#1e293b"/><text x="50.0" y="154.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text><circle cx="345.0" cy="100.0" r="3.6" fill="#1e293b"/><text x="355.0" y="100.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text><circle cx="330.0" cy="230.0" r="3.6" fill="#1e293b"/><text x="338.0" y="248.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text><circle cx="55.0" cy="280.0" r="3.6" fill="#1e293b"/><text x="35.0" y="298.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text><circle cx="200.0" cy="190.0" r="3.6" fill="#64748b"/><text x="206.0" y="206.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#64748b">O</text><circle cx="215.0" cy="60.0" r="3.6" fill="#7c3aed"/><text x="221.0" y="52.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#7c3aed">E</text></svg>
                </Fig>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Donner le vecteur de la translation qui transforme <Math tex="O" /> en <Math tex="C" />.
                  </li>
                  <li>
                    Montrer que le point <Math tex="B" /> est l&apos;image du point <Math tex="O" /> par la
                    translation qui transforme <Math tex="D" /> en <Math tex="O" />.
                  </li>
                  <li>
                    Déterminer l&apos;image de la droite <Math tex="(AC)" /> par la translation qui transforme{" "}
                    <Math tex="D" /> en <Math tex="O" />. Justifier ta réponse.
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={5} accent="sky" tag="Repère · 5,5 points">
                <p>
                  Dans un repère orthonormé <Math tex="(O;I;J)" /> on considère les points <Math tex="A(1;2)" /> ;{" "}
                  <Math tex="B(2;0)" /> et <Math tex="C(-2;-2)" />
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" /> puis calculer la
                    distance <Math tex="AB" />.
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Montrer que l&apos;équation réduite de la droite <Math tex="(AB)" /> est :{" "}
                        <Math tex="y=-2x+4" />
                      </li>
                      <li>
                        Montrer que la pente de la droite <Math tex="(BC)" /> est <Math tex="\dfrac12" />. En
                        déduire que les droites <Math tex="(AB)" /> et <Math tex="(BC)" /> sont perpendiculaires.
                      </li>
                      <li>
                        En déduire la résolution graphique du système :{" "}
                        <Math tex="\begin{cases}2x+y=4\\x-2y=2\end{cases}" />
                      </li>
                    </ol>
                  </li>
                  <li>
                    On considère la droite <Math tex="(\Delta)" /> d&apos;équation réduite <Math tex="y=-2x-1" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Vérifier que <Math tex="(0;-1)" /> est le couple de coordonnées de <Math tex="H" /> le
                        milieu du segment <Math tex="[BC]" />.
                      </li>
                      <li>
                        Montrer que <Math tex="(\Delta)" /> est la médiatrice du segment <Math tex="[BC]" />.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>
            </div>
          }
          correction={
            <div className="space-y-6">
              <CorrectionBlock n={1} accent="sky" title="QCM">
                <StatTable
                  rows={[
                    { label: "1)", values: [<Math key="a" tex="(b)\ 1" />], strong: true },
                    { label: "2)", values: [<Math key="a" tex="(c)\ x\leq-3" />], strong: true },
                    { label: "3)", values: ["(b) N'admet aucune solution"], strong: true },
                    { label: "4)", values: [<Math key="a" tex="(b)\ y=2x-1" />], strong: true },
                    {
                      label: "5)",
                      values: [
                        <span key="a">
                          (a) <Math tex="F" /> est l&apos;image de <Math tex="E" /> par la translation de vecteur{" "}
                          <Math tex="\overrightarrow{AB}" />
                        </span>,
                      ],
                      strong: true,
                    },
                  ]}
                />
              </CorrectionBlock>

              <CorrectionBlock n={2} accent="sky">
                <p className="font-semibold text-foreground">
                  1) <Math tex="2-3x=11-6x" />
                </p>
                <MathBlock tex="-3x+6x=11-2 \;\Rightarrow\; 3x=9 \;\Rightarrow\; x=3" />
                <p className="font-semibold text-foreground">
                  2) <Math tex="2x(x-5)+4(x-5)=0" />
                </p>
                <MathBlock tex="(x-5)(2x+4)=0 \;\Rightarrow\; x=5 \;\text{ou}\; x=-2" />
                <p className="font-semibold text-foreground">3) Problème, cahiers :</p>
                <p>
                  Soit <Math tex="x" /> le nombre de cahiers de petit format ; alors <Math tex="50-x" /> est le
                  nombre de cahiers de grand format.
                </p>
                <MathBlock tex="7x+10(50-x)=455 \;\Rightarrow\; 7x+500-10x=455 \;\Rightarrow\; -3x=-45 \;\Rightarrow\; x=15" />
                <Answer>D&apos;où : le nombre de cahiers de petit format est 15.</Answer>
              </CorrectionBlock>

              <CorrectionBlock n={3} accent="sky">
                <p className="font-semibold text-foreground">
                  1a) <Math tex="4\times2+(-1)=7" /> et <Math tex="2+3\times(-1)=-1\neq10" />
                </p>
                <p className="font-semibold text-rose-700 dark:text-rose-400">
                  Donc <Math tex="(2;-1)" /> n&apos;est pas solution de <Math tex="(S)" />.
                </p>
                <p className="font-semibold text-foreground">1b) Substitution :</p>
                <MathBlock tex="y=7-4x \;\Rightarrow\; x+3(7-4x)=10 \;\Rightarrow\; -11x=-11 \;\Rightarrow\; x=1,\;y=3" />
                <Answer>
                  D&apos;où le couple <Math tex="(1;3)" /> est la solution.
                </Answer>
                <p className="font-semibold text-foreground">2a) Combinaison linéaire :</p>
                <MathBlock tex="\begin{cases}x+y=14\\-(x+2y)=-20\end{cases} \Rightarrow -y=-6 \Rightarrow y=6,\;x=8" />
                <Answer>
                  D&apos;où le couple <Math tex="(8;6)" /> est la solution.
                </Answer>
                <p className="font-semibold text-foreground">2b) Problème, boules :</p>
                <p>
                  Soit <Math tex="x" /> le nombre de boules de 50 g et <Math tex="y" /> le nombre de boules de 100
                  g.
                </p>
                <MathBlock tex="\begin{cases}x+y=14\\50x+100y=1000\end{cases} \;\Longleftrightarrow\; \begin{cases}x+y=14\\x+2y=20\end{cases} \Rightarrow (x;y)=(8;6)" />
                <Answer>D&apos;où : 8 boules pèsent 50 g et 6 boules pèsent 100 g.</Answer>
              </CorrectionBlock>

              <CorrectionBlock n={4} accent="sky">
                <p>
                  1) Le vecteur de la translation qui transforme <Math tex="O" /> en <Math tex="C" /> est le
                  vecteur <Math tex="\overrightarrow{OC}" />.
                </p>
                <p>
                  2) <Math tex="O" /> est le centre du parallélogramme <Math tex="ABCD" /> donc <Math tex="O" />{" "}
                  est le milieu de <Math tex="[DB]" />, donc <Math tex="\overrightarrow{OB}=\overrightarrow{DO}" />{" "}
                  : <Math tex="B" /> est bien l&apos;image de <Math tex="O" /> par la translation qui transforme{" "}
                  <Math tex="D" /> en <Math tex="O" />.
                </p>
                <p>
                  3) <Math tex="(AC)\parallel(BE)" /> donne <Math tex="(AO)\parallel(BE)" />, et{" "}
                  <Math tex="(DB)\parallel(AE)" /> donne <Math tex="(OB)\parallel(AE)" /> : donc{" "}
                  <Math tex="AOBE" /> est un parallélogramme, d&apos;où{" "}
                  <Math tex="\overrightarrow{AE}=\overrightarrow{OB}=\overrightarrow{DO}" />.
                </p>
                <Answer>
                  Donc <Math tex="E" /> est l&apos;image de <Math tex="A" />, et <Math tex="B" /> l&apos;image de{" "}
                  <Math tex="O" />, par la translation <Math tex="D\to O" /> : l&apos;image de la droite{" "}
                  <Math tex="(AC)" /> est donc la droite <Math tex="(EB)" />.
                </Answer>
              </CorrectionBlock>

              <CorrectionBlock n={5} accent="sky" title="Repère">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                  <div className="space-y-2">
                    <p>
                      1) <Math tex="\overrightarrow{AB}(1;-2)" />, <Math tex="AB=\sqrt{1^2+(-2)^2}=\sqrt5" />
                    </p>
                    <p>
                      2a) pente <Math tex="=\dfrac{0-2}{2-1}=-2" />, et <Math tex="B(2;0)\in(AB)" /> donne{" "}
                      <Math tex="b=4" /> : <Math tex="(AB):y=-2x+4" />
                    </p>
                    <p>
                      2b) pente<Math tex="(BC)=\dfrac{0-(-2)}{2-(-2)}=\dfrac12" />. <Math tex="-2\times\dfrac12=-1" />{" "}
                      donc <Math tex="(AB)\perp(BC)" />.
                    </p>
                    <p>
                      2c) <Math tex="(AB)" /> et <Math tex="(BC)" /> sont sécantes en <Math tex="B(2;0)" /> :{" "}
                      <Math tex="(2;0)" /> est la solution du système.
                    </p>
                    <p>
                      3a) <Math tex="H\left(\dfrac{2+(-2)}{2};\dfrac{0+(-2)}{2}\right)=(0;-1)" /> ✓
                    </p>
                    <p>
                      3b) <Math tex="a_{(\Delta)}\times a_{(BC)}=-2\times\dfrac12=-1" /> donc{" "}
                      <Math tex="(\Delta)\perp(BC)" />, et <Math tex="H(0;-1)\in(\Delta)" />.
                    </p>
                    <Answer>
                      D&apos;où : <Math tex="(\Delta)" /> est la médiatrice du segment <Math tex="[BC]" />.
                    </Answer>
                  </div>
                  <Fig max="max-w-[220px]">
                    <svg viewBox="0 0 268 336" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="268" height="336" fill="white" rx="12"/>
<defs>
<marker id="arg10x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg10y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng100" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb"/></marker>
<marker id="arlng101" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#0d9488"/></marker>
<marker id="arlng102" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#059669"/></marker>
</defs>
<line x1="32.0" y1="32.0" x2="32.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="66.0" y1="32.0" x2="66.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="100.0" y1="32.0" x2="100.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="134.0" y1="32.0" x2="134.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="168.0" y1="32.0" x2="168.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="202.0" y1="32.0" x2="202.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="236.0" y1="32.0" x2="236.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="304.0" x2="236.0" y2="304.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="270.0" x2="236.0" y2="270.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="236.0" x2="236.0" y2="236.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="202.0" x2="236.0" y2="202.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="168.0" x2="236.0" y2="168.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="134.0" x2="236.0" y2="134.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="100.0" x2="236.0" y2="100.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="66.0" x2="236.0" y2="66.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="32.0" x2="236.0" y2="32.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="34.0" y1="202.0" x2="234.0" y2="202.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg10x)"/><line x1="134.0" y1="306.0" x2="134.0" y2="30.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg10y)"/>
<text x="120.0" y="218.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="164.0" y="218.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="120.0" y="172.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="117.0" y1="32.0" x2="236.0" y2="270.0" stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#arlng100)"/><text x="146.8" y="73.6" fontSize="13" fontWeight="700" fontStyle="italic" fill="#2563eb">(AB)</text>
<line x1="32.0" y1="287.0" x2="236.0" y2="185.0" stroke="#0d9488" strokeWidth="2.2" markerEnd="url(#arlng101)"/><text x="82.2" y="258.9" fontSize="13" fontWeight="700" fontStyle="italic" fill="#0d9488">(BC)</text>
<line x1="32.0" y1="32.0" x2="168.0" y2="304.0" stroke="#059669" strokeWidth="2.0" strokeDasharray="7 5" markerEnd="url(#arlng102)"/><text x="92.4" y="134.8" fontSize="13" fontWeight="700" fontStyle="italic" fill="#059669">(Δ)</text>
<circle cx="168.0" cy="134.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="152.0" y="126.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
<circle cx="202.0" cy="202.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="212.0" y="208.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
<circle cx="66.0" cy="270.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="48.0" y="284.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text>
<circle cx="134.0" cy="236.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/><text x="118.0" y="250.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#e11d48">H</text>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== EXAMEN N°3 ===================== */}
      <LessonSection
        id="examen-3"
        kicker="03 · Session Juin 2022"
        title="Examen Régional N°3"
        tone="muted"
        description="Région Souss-Massa."
      >
        <ExamMeta session="Juin 2022" region="Souss-Massa" />
        <ExerciseCard
          id="3"
          index={3}
          title="Sujet complet"
          itemsLabel="6 exercices"
          items={
            <div className="space-y-4">
              <ExerciseBlock n={1} accent="teal" tag="QCM · 2 points">
                <p>
                  Cet exercice est constitué de questions à choix multiples. Pour chaque question, trois réponses
                  (I), (II) et (III) sont proposées dont une seule est correcte.
                </p>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    1) On considère les points <Math tex="M(5;2)" /> et <Math tex="N(1;0)" /> dans un repère
                    orthonormé :
                  </p>
                  <div className="mt-3 space-y-3">
                    <div>
                      <p>
                        <strong>a)</strong> Le couple de coordonnées du vecteur <Math tex="\overrightarrow{MN}" />{" "}
                        est :
                      </p>
                      <QRow>
                        <QOpt>(I) <Math tex="(4;2)" /></QOpt>
                        <QOpt>(II) <Math tex="(-4;-2)" /></QOpt>
                        <QOpt>(III) <Math tex="(6;2)" /></QOpt>
                      </QRow>
                    </div>
                    <div>
                      <p>
                        <strong>b)</strong> Le couple de coordonnées du milieu du segment <Math tex="[MN]" /> est
                        :
                      </p>
                      <QRow>
                        <QOpt>(I) <Math tex="(3;1)" /></QOpt>
                        <QOpt>(II) <Math tex="(-2;-1)" /></QOpt>
                        <QOpt>(III) <Math tex="(2;1)" /></QOpt>
                      </QRow>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <p className="font-semibold text-foreground">
                    2) Les solutions de l&apos;inéquation <Math tex="3x-5<7-x" /> sont les nombres réels{" "}
                    <Math tex="x" /> qui vérifient :
                  </p>
                  <QRow>
                    <QOpt>(I) <Math tex="x>3" /></QOpt>
                    <QOpt>(II) <Math tex="x>4" /></QOpt>
                    <QOpt>(III) <Math tex="x<3" /></QOpt>
                  </QRow>
                </div>
              </ExerciseBlock>

              <ExerciseBlock n={2} accent="teal" tag="Équations · Système · 4 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Résoudre l&apos;équation <Math tex="4x-5=2x+3" />
                  </li>
                  <li>
                    Résoudre l&apos;équation <Math tex="(x-11)(6-2x)=0" />
                  </li>
                  <li>
                    Résoudre algébriquement le système suivant :{" "}
                    <Math tex="\begin{cases}5x-y=8\\2x+y=13\end{cases}" />
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={3} accent="teal" tag="Fonctions · 4 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    On considère la fonction linéaire <Math tex="f" /> définie par : <Math tex="f(x)=5x" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Calculer <Math tex="f(2)" />.
                      </li>
                      <li>
                        Déterminer le nombre dont l&apos;image par <Math tex="f" /> est 1.
                      </li>
                    </ol>
                  </li>
                  <li>
                    On considère la fonction affine <Math tex="g" /> telle que : <Math tex="g(2)=1" /> et{" "}
                    <Math tex="g(3)=3" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Montrer que le coefficient de la fonction <Math tex="g" /> est <Math tex="a=2" />.
                      </li>
                      <li>
                        Vérifier que : <Math tex="g(x)=2x-3" />
                      </li>
                      <li>
                        Construire la représentation graphique de la fonction <Math tex="g" /> dans un repère
                        orthonormé.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={4} accent="teal" tag="Statistiques · 2 points">
                <p>Les données suivantes représentent les consommations d&apos;eau en m³ de 25 familles :</p>
                <p className="rounded-xl bg-surface-muted p-3 text-center font-mono text-sm">
                  5, 7, 6, 5, 8, 8, 7, 6, 7, 4, 7, 6, 7, 5, 7, 5, 6, 5, 7, 6, 4, 7, 5, 5, 7
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Compléter le tableau des effectifs suivant :
                    <StatTable
                      rows={[
                        { label: "Consommation d'eau (m³)", values: ["…", "…", "6", "7", "8"] },
                        { label: "Nombre de familles", values: ["2", "7", "…", "9", "…"] },
                      ]}
                    />
                  </li>
                  <li>Déterminer le mode de cette série statistique.</li>
                  <li>Calculer la moyenne arithmétique de cette série statistique.</li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={5} accent="teal" tag="Repère · 5,5 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Construire dans le même repère <Math tex="(O;I;J)" /> les points suivants :{" "}
                    <Math tex="A(-2;-1)" /> ; <Math tex="B(2;3)" />
                  </li>
                  <li>
                    Construire le point <Math tex="C(-1;-2)" />
                  </li>
                  <li>
                    Calculer la distance <Math tex="AB" />.
                  </li>
                  <li>
                    Montrer que : <Math tex="y=x+1" /> est l&apos;équation réduite de la droite <Math tex="(AB)" />
                  </li>
                  <li>
                    On considère la droite <Math tex="(\Delta)" /> d&apos;équation réduite <Math tex="y=-x-3" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Vérifier que les deux points <Math tex="A" /> et <Math tex="C" /> appartiennent à la
                        droite <Math tex="(\Delta)" />.
                      </li>
                      <li>
                        En déduire que les droites <Math tex="(AB)" /> et <Math tex="(AC)" /> sont
                        perpendiculaires.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Construire (dans le même repère) le point <Math tex="D" /> image du point <Math tex="C" />{" "}
                        par la translation qui transforme <Math tex="A" /> en <Math tex="B" />.
                      </li>
                      <li>
                        Déterminer l&apos;image du segment <Math tex="[AC]" /> par la translation qui transforme{" "}
                        <Math tex="A" /> en <Math tex="B" />.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={6} accent="teal" tag="Géométrie dans l'espace · 3 points">
                <p>
                  <Math tex="ABCDEFGH" /> est un parallélépipède tel que : <Math tex="AE=6\text{ cm}" /> ;{" "}
                  <Math tex="FH=5\text{ cm}" /> et <Math tex="EF=4\text{ cm}" />
                </p>
                <Fig
                  max="max-w-xs"
                  caption={
                    <>
                      Pyramide <Math tex="AEFH" /> mise en évidence en{" "}
                      <span className="font-semibold text-teal-600">teal</span>
                    </>
                  }
                >
                  <svg viewBox="0 0 350 330" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="350" height="330" fill="white" rx="12"/><line x1="150.0" y1="300.0" x2="195.0" y2="270.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="195.0" y1="270.0" x2="295.0" y2="270.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="195.0" y1="270.0" x2="195.0" y2="150.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="195.0" y1="150.0" x2="150.0" y2="180.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="195.0" y1="150.0" x2="295.0" y2="150.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="150.0" y1="300.0" x2="250.0" y2="300.0" stroke="#64748b" strokeWidth="1.6"/><line x1="250.0" y1="300.0" x2="295.0" y2="270.0" stroke="#64748b" strokeWidth="1.6"/><line x1="150.0" y1="300.0" x2="150.0" y2="180.0" stroke="#64748b" strokeWidth="1.6"/><line x1="250.0" y1="300.0" x2="250.0" y2="180.0" stroke="#64748b" strokeWidth="1.6"/><line x1="295.0" y1="270.0" x2="295.0" y2="150.0" stroke="#64748b" strokeWidth="1.6"/><line x1="150.0" y1="180.0" x2="250.0" y2="180.0" stroke="#64748b" strokeWidth="1.6"/><line x1="250.0" y1="180.0" x2="295.0" y2="150.0" stroke="#64748b" strokeWidth="1.6"/><polygon points="150.0,180.0 250.0,180.0 195.0,150.0" fill="#0d9488" fillOpacity="0.12" stroke="none" strokeWidth="1.8"/><line x1="150.0" y1="300.0" x2="250.0" y2="180.0" stroke="#0d9488" strokeWidth="2.4"/><line x1="150.0" y1="300.0" x2="195.0" y2="150.0" stroke="#0d9488" strokeWidth="2.4" strokeDasharray="5 4"/><line x1="250.0" y1="180.0" x2="195.0" y2="150.0" stroke="#0d9488" strokeWidth="2.4"/><line x1="150.0" y1="300.0" x2="150.0" y2="180.0" stroke="#0d9488" strokeWidth="2.4"/><line x1="195.0" y1="150.0" x2="150.0" y2="180.0" stroke="#0d9488" strokeWidth="2.4" strokeDasharray="5 4"/><text x="142.0" y="320.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text><text x="258.0" y="320.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text><text x="179.0" y="272.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text><text x="303.0" y="272.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text><text x="132.0" y="178.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#0d9488">E</text><text x="258.0" y="178.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#0d9488">F</text><text x="189.0" y="140.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#0d9488">H</text><text x="303.0" y="140.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">G</text></svg>
                </Fig>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Montrer que : <Math tex="EH=3\text{ cm}" />
                  </li>
                  <li>
                    Montrer que le volume de la pyramide <Math tex="AEFH" /> est : <Math tex="V=12\text{ cm}^3" />
                  </li>
                  <li>
                    Si <Math tex="2" /> est le coefficient (rapport) de l&apos;agrandissement de la pyramide{" "}
                    <Math tex="AEFH" /> ; que sera le volume <Math tex="V'" /> de cette pyramide agrandie ?
                  </li>
                </ol>
              </ExerciseBlock>
            </div>
          }
          correction={
            <div className="space-y-6">
              <CorrectionBlock n={1} accent="teal" title="QCM">
                <StatTable
                  rows={[
                    { label: "1 - a", values: [<Math key="a" tex="(II)\ (-4;-2)" />], strong: true },
                    { label: "1 - b", values: [<Math key="a" tex="(I)\ (3;1)" />], strong: true },
                    { label: "2)", values: [<Math key="a" tex="(III)\ x<3" />], strong: true },
                  ]}
                />
              </CorrectionBlock>

              <CorrectionBlock n={2} accent="teal">
                <p className="font-semibold text-foreground">
                  1) <Math tex="4x-5=2x+3" />
                </p>
                <MathBlock tex="4x-2x=3+5 \;\Rightarrow\; 2x=8 \;\Rightarrow\; x=4" />
                <p className="font-semibold text-foreground">
                  2) <Math tex="(x-11)(6-2x)=0" />
                </p>
                <MathBlock tex="x-11=0 \;\text{ou}\; 6-2x=0 \;\Rightarrow\; x=11 \;\text{ou}\; x=3" />
                <p className="font-semibold text-foreground">
                  3) <Math tex="\begin{cases}5x-y=8\\2x+y=13\end{cases}" />
                </p>
                <MathBlock tex="\text{On additionne : } 7x=21 \;\Rightarrow\; x=3,\; 2(3)+y=13 \;\Rightarrow\; y=7" />
                <Answer>
                  D&apos;où le couple <Math tex="(3;7)" /> est la solution du système.
                </Answer>
              </CorrectionBlock>

              <CorrectionBlock n={3} accent="teal">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
                  <div className="space-y-2">
                    <p>
                      1a) <Math tex="f(2)=5\times2=10" />
                    </p>
                    <p>
                      1b) Soit <Math tex="c" /> tel que <Math tex="f(c)=1" /> : <Math tex="5c=1 \Rightarrow c=\dfrac15" />
                    </p>
                    <p>
                      2a) <Math tex="a=\dfrac{g(3)-g(2)}{3-2}=\dfrac{3-1}{1}=2" />
                    </p>
                    <p>
                      2b) <Math tex="g(x)=2x+b" />, <Math tex="g(2)=1 \Rightarrow 4+b=1 \Rightarrow b=-3" />
                    </p>
                    <Answer>
                      D&apos;où : <Math tex="g(x)=2x-3" />
                    </Answer>
                  </div>
                  <Fig max="max-w-[200px]" caption={<><Math tex="g(x)=2x-3" /> · point <Math tex="(2;1)" /> marqué</>}>
                    <svg viewBox="0 0 224 344" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="224" height="344" fill="white" rx="12"/>
<defs>
<marker id="arg6x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg6y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng60" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#e11d48"/></marker>
</defs>
<line x1="32.0" y1="32.0" x2="32.0" y2="312.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="72.0" y1="32.0" x2="72.0" y2="312.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="112.0" y1="32.0" x2="112.0" y2="312.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="152.0" y1="32.0" x2="152.0" y2="312.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="192.0" y1="32.0" x2="192.0" y2="312.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="312.0" x2="192.0" y2="312.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="272.0" x2="192.0" y2="272.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="232.0" x2="192.0" y2="232.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="192.0" x2="192.0" y2="192.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="152.0" x2="192.0" y2="152.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="112.0" x2="192.0" y2="112.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="72.0" x2="192.0" y2="72.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="32.0" x2="192.0" y2="32.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="34.0" y1="152.0" x2="190.0" y2="152.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg6x)"/><line x1="72.0" y1="314.0" x2="72.0" y2="30.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg6y)"/>
<text x="58.0" y="168.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="108.0" y="168.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="58.0" y="116.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="52.0" y1="312.0" x2="192.0" y2="32.0" stroke="#e11d48" strokeWidth="2.6" markerEnd="url(#arlng60)"/>
<line x1="152.0" y1="152.0" x2="152.0" y2="112.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/><line x1="72.0" y1="112.0" x2="152.0" y2="112.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/>
<circle cx="152.0" cy="112.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={4} accent="teal" title="Statistiques">
                <StatTable
                  rows={[
                    { label: "Consommation (m³)", values: ["4", "5", "6", "7", "8"], strong: false },
                    { label: "Familles", values: ["2", "7", "5", "9", "2"], strong: false },
                  ]}
                />
                <p>2) Mode = <strong>7</strong> (effectif le plus grand : 9).</p>
                <p>3) Moyenne :</p>
                <MathBlock tex="m=\dfrac{4\times2+5\times7+6\times5+7\times9+8\times2}{25}=\dfrac{152}{25}=6{,}08" />
              </CorrectionBlock>

              <CorrectionBlock n={5} accent="teal" title="Repère">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                  <div className="space-y-2">
                    <p>
                      3) <Math tex="AB=\sqrt{(2-(-2))^2+(3-(-1))^2}=\sqrt{16+16}=4\sqrt2" />
                    </p>
                    <p>
                      4) pente <Math tex="=\dfrac{3-(-1)}{2-(-2)}=1" />, <Math tex="B(2;3)\in(AB)\Rightarrow b=1" />{" "}
                      : <Math tex="(AB):y=x+1" />
                    </p>
                    <p>
                      5a) <Math tex="A(-2;-1)" /> : <Math tex="-(-2)-3=-1" /> ✓ ; <Math tex="C(-1;-2)" /> :{" "}
                      <Math tex="-(-1)-3=-2" /> ✓
                    </p>
                    <p>
                      5b) <Math tex="(AC)" /> et <Math tex="(\Delta)" /> confondues, pente <Math tex="-1" /> ;{" "}
                      <Math tex="1\times(-1)=-1" /> donc <Math tex="(AB)\perp(AC)" />
                    </p>
                    <p>
                      6a-b) <Math tex="D" /> image de <Math tex="C" /> par la translation <Math tex="A\to B" /> :{" "}
                      <Math tex="\overrightarrow{CD}=\overrightarrow{AB}" />, d&apos;où <Math tex="D(3;2)" />.
                      L&apos;image de <Math tex="[AC]" /> est le segment <Math tex="[BD]" />.
                    </p>
                  </div>
                  <Fig max="max-w-[220px]">
                    <svg viewBox="0 0 340 340" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="340" height="340" fill="white" rx="12"/>
<defs>
<marker id="arg3x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg3y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng30" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb"/></marker>
<marker id="arlng31" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#059669"/></marker>
<marker id="arvg30" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#94a3b8"/></marker>
</defs>
<line x1="34.0" y1="34.0" x2="34.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="68.0" y1="34.0" x2="68.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="102.0" y1="34.0" x2="102.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="136.0" y1="34.0" x2="136.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="170.0" y1="34.0" x2="170.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="204.0" y1="34.0" x2="204.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="238.0" y1="34.0" x2="238.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="272.0" y1="34.0" x2="272.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="306.0" y1="34.0" x2="306.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="306.0" x2="306.0" y2="306.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="272.0" x2="306.0" y2="272.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="238.0" x2="306.0" y2="238.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="204.0" x2="306.0" y2="204.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="170.0" x2="306.0" y2="170.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="136.0" x2="306.0" y2="136.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="102.0" x2="306.0" y2="102.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="68.0" x2="306.0" y2="68.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="34.0" x2="306.0" y2="34.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="36.0" y1="170.0" x2="304.0" y2="170.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg3x)"/><line x1="170.0" y1="308.0" x2="170.0" y2="32.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg3y)"/>
<text x="156.0" y="186.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="200.0" y="186.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="156.0" y="140.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="34.0" y1="272.0" x2="272.0" y2="34.0" stroke="#2563eb" strokeWidth="2.4" markerEnd="url(#arlng30)"/><text x="288.2" y="17.8" fontSize="13" fontWeight="700" fontStyle="italic" fill="#2563eb">(AB)</text>
<line x1="34.0" y1="136.0" x2="204.0" y2="306.0" stroke="#059669" strokeWidth="2.4" strokeDasharray="7 5" markerEnd="url(#arlng31)"/><text x="87.6" y="177.6" fontSize="13" fontWeight="700" fontStyle="italic" fill="#059669">(Δ)</text>
<line x1="102.0" y1="204.0" x2="238.0" y2="68.0" stroke="#94a3b8" strokeWidth="1.6" markerEnd="url(#arvg30)"/>
<circle cx="102.0" cy="204.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="84.0" y="218.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
<circle cx="238.0" cy="68.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="246.0" y="60.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
<circle cx="136.0" cy="238.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/><text x="130.0" y="256.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#e11d48">C</text>
<circle cx="272.0" cy="102.0" r="4.2" fill="#7c3aed" stroke="#7c3aed" strokeWidth="2"/><text x="280.0" y="94.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#7c3aed">D</text>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={6} accent="teal" title="Parallélépipède">
                <p>
                  1) <Math tex="EFGH" /> est un rectangle donc <Math tex="EFH" /> est rectangle en <Math tex="E" />{" "}
                  : <Math tex="FH^2=EF^2+EH^2 \Rightarrow EH^2=5^2-4^2=9 \Rightarrow EH=3\text{ cm}" />
                </p>
                <p>
                  2) <Math tex="V=\dfrac13\times S_{EFH}\times AE=\dfrac13\times\dfrac{4\times3}{2}\times6=12\text{ cm}^3" />
                </p>
                <p>
                  3) Rapport <Math tex="k=2" /> :{" "}
                  <Math tex="V'=k^3\times V=2^3\times12=8\times12=96\text{ cm}^3" />
                </p>
              </CorrectionBlock>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== EXAMEN N°4 ===================== */}
      <LessonSection
        id="examen-4"
        kicker="04 · Session Juin 2022"
        title="Examen Régional N°4"
        tone="light"
        description="Région Casablanca-Settat."
      >
        <ExamMeta session="Juin 2022" region="Casablanca-Settat" />
        <ExerciseCard
          id="4"
          index={4}
          title="Sujet complet"
          itemsLabel="5 exercices"
          items={
            <div className="space-y-4">
              <ExerciseBlock n={1} accent="violet" tag="Équations · Système · Problème · 5 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Résoudre les deux équations : <Math tex="5x+8=6" /> et <Math tex="(2x-1)(2x+3)=0" />
                  </li>
                  <li>
                    Résoudre l&apos;inéquation : <Math tex="3x-1\leq-x+7" />
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Résoudre algébriquement le système suivant :{" "}
                        <Math tex="\begin{cases}3x+2y=23\\2x+y=14\end{cases}" />
                      </li>
                      <li>
                        Chez un marchand de légumes, Omar achète 3 kg de pommes de terre et 2 kg de tomates avec
                        un montant de 23 DH. Chez le même marchand, Amina achète 6 kg de pommes de terre et 3 kg
                        de tomates avec un montant de 42 DH. Déterminer le prix d&apos;un kilogramme de pommes de
                        terre et le prix d&apos;un kilogramme de tomates.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={2} accent="violet" tag="Statistiques · 2 points">
                <p>Le tableau suivant représente la répartition des notes de mathématiques de quarante élèves :</p>
                <StatTable
                  rows={[
                    { label: "Notes", values: ["8", "10", "11", "15", "17", "18"] },
                    { label: "Effectifs", values: ["3", "7", "12", "13", "3", "2"] },
                  ]}
                />
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Déterminer le mode de cette série statistique.</li>
                  <li>Déterminer la médiane de cette série statistique.</li>
                  <li>Calculer la moyenne arithmétique de cette série statistique.</li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={3} accent="violet" tag="Fonctions · 4 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Soit <Math tex="f" /> la fonction affine telle que : <Math tex="f(0)=-3" /> et{" "}
                    <Math tex="f(1)=-1" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Vérifier que : <Math tex="f(x)=2x-3" />
                      </li>
                      <li>
                        Déterminer l&apos;image de 5 par la fonction <Math tex="f" />
                      </li>
                      <li>
                        Déterminer le nombre qui a pour image le nombre 8 par la fonction <Math tex="f" />.
                      </li>
                    </ol>
                  </li>
                  <li>
                    On considère la fonction linéaire <Math tex="g" /> telle que : <Math tex="g(4)=-2" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Déterminer le coefficient de la fonction linéaire <Math tex="g" />.
                      </li>
                      <li>
                        Écrire <Math tex="g(x)" /> en fonction de <Math tex="x" />.
                      </li>
                      <li>
                        Tracer la représentation graphique de la fonction <Math tex="g" /> dans un repère
                        orthonormé.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={4} accent="violet" tag="Repère · Translation · 6 points">
                <p>
                  Dans le plan muni d&apos;un repère orthonormé <Math tex="(O;I;J)" /> on considère les points :{" "}
                  <Math tex="A(1;3)" /> ; <Math tex="B(2;0)" /> et <Math tex="C(3;1)" />
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Représenter les points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" />
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" />.
                      </li>
                      <li>
                        Calculer la distance <Math tex="AB" />
                      </li>
                    </ol>
                  </li>
                  <li>
                    Montrer que : <Math tex="y=-3x+6" /> est l&apos;équation réduite de la droite{" "}
                    <Math tex="(AB)" />.
                  </li>
                  <li>
                    Déterminer l&apos;équation réduite de la droite <Math tex="(\Delta)" /> passant par le point{" "}
                    <Math tex="C" /> et parallèle à la droite <Math tex="(AB)" />.
                  </li>
                  <li>
                    Soit <Math tex="t" /> la translation qui transforme <Math tex="A" /> en <Math tex="C" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Construire le point <Math tex="E" /> image du point <Math tex="B" /> par la translation{" "}
                        <Math tex="t" />.
                      </li>
                      <li>
                        Déterminer les coordonnées du point <Math tex="E" />.
                      </li>
                      <li>
                        Montrer que la droite <Math tex="(\Delta)" /> est l&apos;image de la droite{" "}
                        <Math tex="(AB)" /> par la translation <Math tex="t" />.
                      </li>
                      <li>
                        Montrer que le point <Math tex="E" /> appartient à la droite <Math tex="(\Delta)" />.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Soit <Math tex="F" /> le point du plan tel que :{" "}
                    <Math tex="\overrightarrow{BF}=\overrightarrow{BC}+\overrightarrow{BA}" />. Montrer que{" "}
                    <Math tex="C" /> est le milieu du segment <Math tex="[EF]" />
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={5} accent="violet" tag="Géométrie dans l'espace · 3 points">
                <p>
                  Dans la figure ci-contre, <Math tex="SABCD" /> est une pyramide de base le rectangle{" "}
                  <Math tex="ABCD" /> et de hauteur <Math tex="[SA]" /> telle que : <Math tex="AB=3\text{ cm}" /> ;{" "}
                  <Math tex="AD=8\text{ cm}" /> et <Math tex="SA=6\text{ cm}" />
                </p>
                <Fig
                  max="max-w-[220px]"
                  caption={
                    <>
                      Section <Math tex="IJKL" /> parallèle à la base, en{" "}
                      <span className="font-semibold text-teal-600">teal</span>
                    </>
                  }
                >
                  <svg viewBox="0 0 260 350" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="260" height="350" fill="white" rx="12"/><line x1="88.0" y1="273.0" x2="163.0" y2="273.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="150.0" y1="320.0" x2="88.0" y2="273.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="150.0" y1="188.0" x2="88.0" y2="273.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="150.0" y1="188.0" x2="163.0" y2="273.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="150.0" y1="320.0" x2="225.0" y2="320.0" stroke="#334155" strokeWidth="1.8"/><line x1="225.0" y1="320.0" x2="163.0" y2="273.0" stroke="#334155" strokeWidth="1.6" strokeDasharray="5 4"/><line x1="150.0" y1="188.0" x2="150.0" y2="320.0" stroke="#334155" strokeWidth="1.8"/><line x1="150.0" y1="188.0" x2="225.0" y2="320.0" stroke="#334155" strokeWidth="1.8"/><polygon points="150.0,254.0 187.5,254.0 156.5,230.5 119.0,230.5" fill="#0d9488" fillOpacity="0.14" stroke="#0d9488" strokeWidth="2.4"/><text x="142.0" y="178.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">S</text><text x="142.0" y="340.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text><text x="233.0" y="338.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text><text x="173.0" y="271.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text><text x="70.0" y="269.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text><text x="134.0" y="258.0" fontSize="13" fontWeight="700" fontStyle="italic" fill="#0d9488">I</text><text x="193.5" y="258.0" fontSize="13" fontWeight="700" fontStyle="italic" fill="#0d9488">J</text><text x="162.5" y="226.5" fontSize="13" fontWeight="700" fontStyle="italic" fill="#0d9488">K</text><text x="103.0" y="226.5" fontSize="13" fontWeight="700" fontStyle="italic" fill="#0d9488">L</text></svg>
                </Fig>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Montrer que : <Math tex="SD=10\text{ cm}" />
                  </li>
                  <li>
                    Montrer que le volume de la pyramide <Math tex="SABCD" /> est :{" "}
                    <Math tex="V_1=48\text{ cm}^3" />
                  </li>
                  <li>
                    La pyramide <Math tex="SIJKL" /> est une réduction de la pyramide <Math tex="SABCD" /> de
                    rapport <Math tex="\dfrac12" />.
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Calculer <Math tex="V_2" /> le volume de la pyramide <Math tex="SIJKL" />.
                      </li>
                      <li>
                        Calculer l&apos;aire du rectangle <Math tex="IJKL" />.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>
            </div>
          }
          correction={
            <div className="space-y-6">
              <CorrectionBlock n={1} accent="violet">
                <p>
                  1) <Math tex="5x+8=6 \Rightarrow x=\dfrac{-2}{5}" /> · <Math tex="(2x-1)(2x+3)=0 \Rightarrow x=\dfrac12 \text{ ou } x=\dfrac{-3}{2}" />
                </p>
                <p>
                  2) <Math tex="3x-1\leq-x+7 \Rightarrow 4x\leq8 \Rightarrow x\leq2" />
                </p>
                <p className="font-semibold text-foreground">
                  3a) <Math tex="\begin{cases}3x+2y=23\\2x+y=14\end{cases}" />
                </p>
                <MathBlock tex="y=14-2x \;\Rightarrow\; 3x+2(14-2x)=23 \;\Rightarrow\; -x=-5 \;\Rightarrow\; x=5,\;y=4" />
                <Answer>
                  D&apos;où le couple <Math tex="(5;4)" /> est la solution.
                </Answer>
                <p className="font-semibold text-foreground">3b) Problème :</p>
                <p>
                  Soit <Math tex="x" /> le prix d&apos;un kg de pommes et <Math tex="y" /> celui d&apos;un kg de
                  tomates :
                </p>
                <MathBlock tex="\begin{cases}3x+2y=23\ \text{(Omar)}\\6x+3y=42\ \text{(Amina)}\end{cases} \Longleftrightarrow \begin{cases}3x+2y=23\\2x+y=14\end{cases}" />
                <Answer>
                  D&apos;après 3a) : le kg de pommes de terre coûte 5 DH et le kg de tomates coûte 4 DH.
                </Answer>
              </CorrectionBlock>

              <CorrectionBlock n={2} accent="violet" title="Statistiques">
                <p>1) Mode = <strong>15</strong> (effectif le plus grand : 13).</p>
                <p>
                  2) Effectifs cumulés : 3, 10, 22, 35, 38, 40. <Math tex="N/2=20" /> ; le premier effectif cumulé{" "}
                  <Math tex="\geq20" /> est 22, donc médiane = <strong>11</strong>.
                </p>
                <p>3) Moyenne :</p>
                <MathBlock tex="m=\dfrac{8\times3+10\times7+11\times12+15\times13+17\times3+18\times2}{40}=\dfrac{508}{40}=12{,}7" />
              </CorrectionBlock>

              <CorrectionBlock n={3} accent="violet">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
                  <div className="space-y-2">
                    <p>
                      1a) <Math tex="a=\dfrac{f(1)-f(0)}{1-0}=\dfrac{-1-(-3)}{1}=2" />, <Math tex="f(0)=b=-3" /> donc{" "}
                      <Math tex="f(x)=2x-3" />
                    </p>
                    <p>
                      1b) <Math tex="f(5)=2\times5-3=7" />
                    </p>
                    <p>
                      1c) <Math tex="2c-3=8 \Rightarrow c=\dfrac{11}{2}" />
                    </p>
                    <p>
                      2a) <Math tex="a=\dfrac{g(4)}{4}=\dfrac{-2}{4}=-\dfrac12" />
                    </p>
                    <p>
                      2b) <Math tex="g(x)=-\dfrac12 x" />
                    </p>
                  </div>
                  <Fig max="max-w-[200px]" caption={<><Math tex="g(x)=-\tfrac12 x" /> · point <Math tex="(4;-2)" /> marqué</>}>
                    <svg viewBox="0 0 280 280" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="280" height="280" fill="white" rx="12"/>
<defs>
<marker id="arg7x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg7y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng70" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#e11d48"/></marker>
</defs>
<line x1="32.0" y1="32.0" x2="32.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="68.0" y1="32.0" x2="68.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="104.0" y1="32.0" x2="104.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="140.0" y1="32.0" x2="140.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="176.0" y1="32.0" x2="176.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="212.0" y1="32.0" x2="212.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="248.0" y1="32.0" x2="248.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="248.0" x2="248.0" y2="248.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="212.0" x2="248.0" y2="212.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="176.0" x2="248.0" y2="176.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="140.0" x2="248.0" y2="140.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="104.0" x2="248.0" y2="104.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="68.0" x2="248.0" y2="68.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="32.0" x2="248.0" y2="32.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="34.0" y1="140.0" x2="246.0" y2="140.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg7x)"/><line x1="68.0" y1="250.0" x2="68.0" y2="30.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg7y)"/>
<text x="54.0" y="156.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="100.0" y="156.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="54.0" y="108.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="32.0" y1="122.0" x2="248.0" y2="230.0" stroke="#e11d48" strokeWidth="2.6" markerEnd="url(#arlng70)"/>
<line x1="212.0" y1="140.0" x2="212.0" y2="212.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/><line x1="68.0" y1="212.0" x2="212.0" y2="212.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="4 3"/>
<circle cx="212.0" cy="212.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={4} accent="violet" title="Repère et translation">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                  <div className="space-y-2">
                    <p>
                      2) <Math tex="\overrightarrow{AB}(1;-3)" />, <Math tex="AB=\sqrt{1^2+(-3)^2}=\sqrt{10}" />
                    </p>
                    <p>
                      3) pente <Math tex="=\dfrac{0-3}{2-1}=-3" />, <Math tex="B(2;0)\in(AB)\Rightarrow b=6" /> :{" "}
                      <Math tex="(AB):y=-3x+6" />
                    </p>
                    <p>
                      4) <Math tex="(\Delta)\parallel(AB)\Rightarrow a=-3" /> ; <Math tex="C(3;1)\in(\Delta)\Rightarrow b=10" /> :{" "}
                      <Math tex="(\Delta):y=-3x+10" />
                    </p>
                    <p>
                      5b) <Math tex="\overrightarrow{BE}=\overrightarrow{AC}=(2;-2)\Rightarrow E(4;-2)" />
                    </p>
                    <p>
                      5c-d) <Math tex="C\in(\Delta)" /> est l&apos;image de <Math tex="A\in(AB)" /> par{" "}
                      <Math tex="t" />, donc <Math tex="(\Delta)" /> est l&apos;image de <Math tex="(AB)" /> ; et{" "}
                      <Math tex="-3\times4+10=-2" /> donc <Math tex="E\in(\Delta)" />.
                    </p>
                    <p>
                      6) <Math tex="\overrightarrow{BF}=\overrightarrow{BC}+\overrightarrow{BA}\Rightarrow F(2;4)" />
                      . Milieu de <Math tex="[EF]" /> : <Math tex="\left(\dfrac{4+2}{2};\dfrac{-2+4}{2}\right)=(3;1)=C" /> ✓
                    </p>
                  </div>
                  <Fig max="max-w-[220px]">
                    <svg viewBox="0 0 260 324" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="260" height="324" fill="white" rx="12"/>
<defs>
<marker id="arg4x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg4y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng40" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb"/></marker>
<marker id="arlng41" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#059669"/></marker>
<marker id="arvg40" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7c3aed"/></marker>
</defs>
<line x1="34.0" y1="34.0" x2="34.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="66.0" y1="34.0" x2="66.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="98.0" y1="34.0" x2="98.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="130.0" y1="34.0" x2="130.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="162.0" y1="34.0" x2="162.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="194.0" y1="34.0" x2="194.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="226.0" y1="34.0" x2="226.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="290.0" x2="226.0" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="258.0" x2="226.0" y2="258.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="226.0" x2="226.0" y2="226.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="194.0" x2="226.0" y2="194.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="162.0" x2="226.0" y2="162.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="130.0" x2="226.0" y2="130.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="98.0" x2="226.0" y2="98.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="66.0" x2="226.0" y2="66.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="34.0" y1="34.0" x2="226.0" y2="34.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="36.0" y1="194.0" x2="224.0" y2="194.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg4x)"/><line x1="66.0" y1="292.0" x2="66.0" y2="32.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg4y)"/>
<text x="52.0" y="210.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="94.0" y="210.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="52.0" y="166.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="76.7" y1="34.0" x2="162.0" y2="290.0" stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#arlng40)"/><text x="123.2" y="149.6" fontSize="13" fontWeight="700" fontStyle="italic" fill="#2563eb">(AB)</text>
<line x1="119.3" y1="34.0" x2="204.7" y2="290.0" stroke="#059669" strokeWidth="2.2" strokeDasharray="7 5" markerEnd="url(#arlng41)"/><text x="147.2" y="93.6" fontSize="13" fontWeight="700" fontStyle="italic" fill="#059669">(Δ)</text>
<line x1="130.0" y1="194.0" x2="194.0" y2="258.0" stroke="#7c3aed" strokeWidth="2.4" markerEnd="url(#arvg40)"/><text x="170.0" y="226.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">t</text>
<circle cx="98.0" cy="98.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="82.0" y="88.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
<circle cx="130.0" cy="194.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="138.0" y="210.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
<circle cx="162.0" cy="162.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/><text x="170.0" y="154.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#e11d48">C</text>
<circle cx="194.0" cy="258.0" r="4.2" fill="#7c3aed" stroke="#7c3aed" strokeWidth="2"/><text x="202.0" y="274.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#7c3aed">E</text>
<circle cx="130.0" cy="66.0" r="4.2" fill="#0d9488" stroke="#0d9488" strokeWidth="2"/><text x="138.0" y="58.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#0d9488">F</text>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={5} accent="violet" title="Pyramide">
                <p>
                  1) <Math tex="[SA]\perp(ABCD)" /> donc <Math tex="SAD" /> rectangle en <Math tex="A" /> :{" "}
                  <Math tex="SD^2=SA^2+AD^2=36+64=100 \Rightarrow SD=10\text{ cm}" />
                </p>
                <p>
                  2) <Math tex="V_1=\dfrac13\times S_{ABCD}\times SA=\dfrac13\times3\times8\times6=48\text{ cm}^3" />
                </p>
                <p>
                  3a) <Math tex="V_2=k^3\times V_1=\left(\dfrac12\right)^3\times48=\dfrac{48}{8}=6\text{ cm}^3" />
                </p>
                <p>
                  3b) <Math tex="A_{IJKL}=k^2\times A_{ABCD}=\left(\dfrac12\right)^2\times(3\times8)=\dfrac{24}{4}=6\text{ cm}^2" />
                </p>
              </CorrectionBlock>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== EXAMEN N°5 ===================== */}
      <LessonSection
        id="examen-5"
        kicker="05 · Session Juin 2022"
        title="Examen Régional N°5"
        tone="muted"
        description="Région Drâa-Tafilalet."
      >
        <ExamMeta session="Juin 2022" region="Drâa-Tafilalet" />
        <ExerciseCard
          id="5"
          index={5}
          title="Sujet complet"
          itemsLabel="6 exercices"
          items={
            <div className="space-y-4">
              <ExerciseBlock n={1} accent="rose" tag="Équations · Système · Problème · 5 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Soit <Math tex="x" /> un nombre réel, résoudre l&apos;équation suivante :{" "}
                        <Math tex="3x+11=2(x+11)" />
                      </li>
                      <li>
                        L&apos;âge d&apos;un père est égal à trois fois l&apos;âge de son fils ; après 11 ans
                        l&apos;âge du père sera égal à deux fois l&apos;âge du fils. Quel est l&apos;âge du père ?
                        et quel est l&apos;âge du fils ?
                      </li>
                    </ol>
                  </li>
                  <li>
                    Soit <Math tex="x" /> un nombre réel, résoudre l&apos;équation suivante : <Math tex="x(x-4)=0" />
                  </li>
                  <li>
                    Soit <Math tex="x" /> un nombre réel, résoudre l&apos;inéquation suivante :{" "}
                    <Math tex="3(x-4)>5x-(x+2)" />
                  </li>
                  <li>
                    Soit <Math tex="x" /> et <Math tex="y" /> deux nombres réels, résoudre le système suivant :{" "}
                    <Math tex="\begin{cases}3x+y=7\\2x-y=3\end{cases}" />
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={2} accent="rose" tag="Translation · 2 points">
                <p>
                  On considère un parallélogramme <Math tex="ABCD" /> ; <Math tex="M" /> est le milieu du segment{" "}
                  <Math tex="[AB]" /> et <Math tex="T" /> la translation qui transforme <Math tex="D" /> en{" "}
                  <Math tex="M" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Construire le point <Math tex="E" /> image du point <Math tex="M" /> par la translation{" "}
                    <Math tex="T" />.
                  </li>
                  <li>
                    Soit <Math tex="(C)" /> le cercle de centre <Math tex="M" /> passant par le point{" "}
                    <Math tex="A" />. Déterminer l&apos;image du cercle <Math tex="(C)" /> par la translation{" "}
                    <Math tex="T" />.
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={3} accent="rose" tag="Repère · 4 points">
                <p>
                  Le plan est rapporté à un repère orthonormé <Math tex="(O;I;J)" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Construire dans le même repère <Math tex="(O;I;J)" /> les points suivants :{" "}
                    <Math tex="A(-2;3)" /> ; <Math tex="B(2;1)" /> et <Math tex="M(0;2)" />
                  </li>
                  <li>
                    Calculer la distance <Math tex="AB" /> puis montrer que <Math tex="M(0;2)" /> est le milieu du
                    segment <Math tex="[AB]" />.
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Montrer que le coefficient directeur (la pente) de la droite <Math tex="(AB)" /> est{" "}
                        <Math tex="-\dfrac12" />.
                      </li>
                      <li>
                        Montrer que l&apos;équation réduite de la médiatrice du segment <Math tex="[AB]" /> est{" "}
                        <Math tex="y=2x+2" />
                      </li>
                    </ol>
                  </li>
                  <li>
                    Considérons le point <Math tex="C(3;4)" /> ; déterminer les coordonnées du point{" "}
                    <Math tex="D" /> pour que le quadrilatère <Math tex="ABCD" /> soit un parallélogramme.
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={4} accent="rose" tag="Fonctions · 4 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Soit <Math tex="f" /> la fonction linéaire telle que : <Math tex="f(2)=3" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Déterminer le coefficient de la fonction linéaire <Math tex="f" /> et en déduire que{" "}
                        <Math tex="f(x)=\dfrac32 x" />
                      </li>
                      <li>
                        Déterminer <Math tex="f(-2)" />
                      </li>
                    </ol>
                  </li>
                  <li>
                    Soit <Math tex="g" /> la fonction affine telle que : <Math tex="g(x)=-2x+1" />. Déterminer{" "}
                    <Math tex="g(0)" /> et le coefficient de <Math tex="g" />.
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Les représentations graphiques de <Math tex="f" /> et <Math tex="g" /> sont-elles
                        parallèles ? Justifier votre réponse.
                      </li>
                      <li>
                        Tracer les représentations graphiques de <Math tex="f" /> et <Math tex="g" /> dans un
                        repère orthonormé.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={5} accent="rose" tag="Géométrie dans l'espace · 3 points">
                <p>
                  <Math tex="ABCDEFGH" /> est un cube d&apos;arête <Math tex="AB=18\text{ cm}" />.
                </p>
                <Fig
                  max="max-w-xs"
                  caption={
                    <>
                      Pyramide <Math tex="EBCDA" /> (sommet <Math tex="E" />, base <Math tex="ABCD" />) en{" "}
                      <span className="font-semibold text-violet-600">violet</span>
                    </>
                  }
                >
                  <svg viewBox="0 0 400 330" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="330" fill="white" rx="12"/><line x1="294.0" y1="156.0" x2="344.0" y2="121.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="344.0" y1="121.0" x2="200.0" y2="121.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="200.0" y1="121.0" x2="150.0" y2="156.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="344.0" y1="265.0" x2="344.0" y2="121.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="150.0" y1="156.0" x2="294.0" y2="156.0" stroke="#334155" strokeWidth="1.5"/><line x1="294.0" y1="300.0" x2="294.0" y2="156.0" stroke="#334155" strokeWidth="1.5"/><polygon points="150.0,300.0 294.0,300.0 344.0,265.0 200.0,265.0" fill="#7c3aed" fillOpacity="0.08" stroke="none" strokeWidth="1.8"/><line x1="150.0" y1="300.0" x2="294.0" y2="300.0" stroke="#7c3aed" strokeWidth="2.4"/><line x1="294.0" y1="300.0" x2="344.0" y2="265.0" stroke="#7c3aed" strokeWidth="2.2" strokeDasharray="5 4"/><line x1="344.0" y1="265.0" x2="200.0" y2="265.0" stroke="#7c3aed" strokeWidth="2.2" strokeDasharray="5 4"/><line x1="200.0" y1="265.0" x2="150.0" y2="300.0" stroke="#7c3aed" strokeWidth="2.2" strokeDasharray="5 4"/><line x1="150.0" y1="156.0" x2="150.0" y2="300.0" stroke="#7c3aed" strokeWidth="2.4"/><line x1="150.0" y1="156.0" x2="294.0" y2="300.0" stroke="#7c3aed" strokeWidth="2.4"/><line x1="150.0" y1="156.0" x2="344.0" y2="265.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><line x1="150.0" y1="156.0" x2="200.0" y2="265.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><text x="142.0" y="320.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text><text x="302.0" y="320.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text><text x="184.0" y="269.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text><text x="352.0" y="269.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text><text x="132.0" y="154.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#7c3aed">E</text><text x="302.0" y="154.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">F</text><text x="194.0" y="111.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">H</text><text x="352.0" y="111.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">G</text></svg>
                </Fig>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Montrer que le volume de la pyramide <Math tex="EBCDA" /> (de sommet <Math tex="E" /> et de
                    base <Math tex="BCDA" />) est : <Math tex="V=1944\text{ cm}^3" />
                  </li>
                  <li>
                    Si on réduit la pyramide <Math tex="EBCDA" /> de rapport <Math tex="\dfrac13" />. Quel est
                    alors le volume de la nouvelle pyramide obtenue ?
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={6} accent="rose" tag="Statistiques · 2 points">
                <p>
                  Le tableau suivant présente une série statistique des notes de 25 élèves d&apos;un devoir
                  surveillé dans une classe de 3ème année collégiale.
                </p>
                <StatTable
                  rows={[
                    { label: "Notes", values: ["7", "8", "9", "10", "11", "12", "13", "14", "15"] },
                    { label: "Effectifs", values: ["1", "1", "3", "5", "7", "2", "3", "2", "1"] },
                  ]}
                />
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Déterminer le mode de cette série statistique.</li>
                  <li>Déterminer la médiane de cette série statistique.</li>
                  <li>Calculer la moyenne arithmétique de cette série statistique.</li>
                </ol>
              </ExerciseBlock>
            </div>
          }
          correction={
            <div className="space-y-6">
              <CorrectionBlock n={1} accent="rose">
                <p className="font-semibold text-foreground">
                  1a) <Math tex="3x+11=2(x+11)" />
                </p>
                <MathBlock tex="3x+11=2x+22 \;\Rightarrow\; x=11" />
                <p className="font-semibold text-foreground">1b) Problème, âges :</p>
                <p>
                  Soit <Math tex="x" /> l&apos;âge du fils, alors l&apos;âge du père est <Math tex="3x" />. Après
                  11 ans : <Math tex="3x+11=2(x+11)" />, donc d&apos;après 1a) <Math tex="x=11" />.
                </p>
                <Answer>D&apos;où : l&apos;âge du père est 33 ans, l&apos;âge du fils est 11 ans.</Answer>
                <p>
                  2) <Math tex="x(x-4)=0 \Rightarrow x=0 \text{ ou } x=4" />
                </p>
                <p className="font-semibold text-foreground">
                  3) <Math tex="3(x-4)>5x-(x+2)" />
                </p>
                <MathBlock tex="3x-12>4x-2 \;\Rightarrow\; -x>10 \;\Rightarrow\; x<-10" />
                <p className="font-semibold text-foreground">
                  4) <Math tex="\begin{cases}3x+y=7\\2x-y=3\end{cases}" />
                </p>
                <MathBlock tex="\text{On additionne : } 5x=10 \Rightarrow x=2,\; y=1" />
                <Answer>
                  D&apos;où le couple <Math tex="(2;1)" /> est la solution.
                </Answer>
              </CorrectionBlock>

              <CorrectionBlock n={2} accent="rose" title="Translation">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                  <p>
                    <Math tex="E" /> est l&apos;image de <Math tex="M" />, centre du cercle <Math tex="(C)" />,
                    par la translation <Math tex="T" />. Donc <Math tex="E" /> est le centre du cercle{" "}
                    <Math tex="(C')" />, image de <Math tex="(C)" /> par <Math tex="T" />, de même rayon{" "}
                    <Math tex="R=MA" />.
                  </p>
                  <Fig max="max-w-xs">
                    <svg viewBox="0 0 560 460" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect width="560" height="460" fill="white" rx="12"/><defs><marker id="s3ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7c3aed"/></marker></defs><circle cx="280.0" cy="195.0" r="130.9" fill="#6366f1" fillOpacity="0.06" stroke="#6366f1" strokeWidth="1.6"/><circle cx="420.0" cy="50.0" r="130.9" fill="#e11d48" fillOpacity="0.05" stroke="#e11d48" strokeWidth="1.6"/><polygon points="150.0,210.0 410.0,180.0 400.0,310.0 140.0,340.0" fill="white" stroke="#334155" strokeWidth="2"/><line x1="140.0" y1="340.0" x2="274.0" y2="200.0" stroke="#7c3aed" strokeWidth="2.2" markerEnd="url(#s3ar)"/><text x="200.0" y="261.5" fontSize="14" fontWeight="700" fontStyle="italic" fill="#7c3aed">T</text><line x1="280.0" y1="195.0" x2="420.0" y2="50.0" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 4"/><circle cx="150.0" cy="210.0" r="3.6" fill="#1e293b"/><text x="132.0" y="204.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text><circle cx="410.0" cy="180.0" r="3.6" fill="#1e293b"/><text x="420.0" y="176.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text><circle cx="400.0" cy="310.0" r="3.6" fill="#1e293b"/><text x="410.0" y="320.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text><circle cx="140.0" cy="340.0" r="3.6" fill="#1e293b"/><text x="122.0" y="354.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text><circle cx="280.0" cy="195.0" r="3.6" fill="#1e293b"/><text x="286.0" y="185.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">M</text><circle cx="420.0" cy="50.0" r="3.6" fill="#e11d48"/><text x="428.0" y="42.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#e11d48">E</text><text x="325.8" y="123.0" fontSize="13" fontWeight="700" fontStyle="italic" fill="#6366f1">(C)</text><text x="446.2" y="148.1" fontSize="13" fontWeight="700" fontStyle="italic" fill="#e11d48">(C&apos;)</text></svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={3} accent="rose" title="Repère">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                  <div className="space-y-2">
                    <p>
                      2) <Math tex="AB=\sqrt{(2-(-2))^2+(1-3)^2}=\sqrt{16+4}=\sqrt{20}=2\sqrt5" />. Milieu{" "}
                      <Math tex="=\left(\dfrac{-2+2}{2};\dfrac{3+1}{2}\right)=(0;2)=M" /> ✓
                    </p>
                    <p>
                      3a) pente <Math tex="=\dfrac{3-1}{-2-2}=\dfrac{2}{-4}=-\dfrac12" />
                    </p>
                    <p>
                      3b) médiatrice <Math tex="\perp(AB)" /> donc pente <Math tex="=2" />, et passe par{" "}
                      <Math tex="M(0;2)" /> : <Math tex="y=2x+2" />
                    </p>
                    <p>
                      4) <Math tex="ABCD" /> parallélogramme <Math tex="\Rightarrow \overrightarrow{CD}=\overrightarrow{BA}" /> :{" "}
                      <Math tex="D=A+C-B=(-2+3-2;3+4-1)=(-1;6)" />
                    </p>
                  </div>
                  <Fig max="max-w-[200px]">
                    <svg viewBox="0 0 292 254" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="292" height="254" fill="white" rx="12"/>
<defs>
<marker id="arg5x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg5y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
</defs>
<line x1="32.0" y1="32.0" x2="32.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="70.0" y1="32.0" x2="70.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="108.0" y1="32.0" x2="108.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="146.0" y1="32.0" x2="146.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="184.0" y1="32.0" x2="184.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="222.0" y1="32.0" x2="222.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="260.0" y1="32.0" x2="260.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="222.0" x2="260.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="184.0" x2="260.0" y2="184.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="146.0" x2="260.0" y2="146.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="108.0" x2="260.0" y2="108.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="70.0" x2="260.0" y2="70.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="32.0" x2="260.0" y2="32.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="34.0" y1="184.0" x2="258.0" y2="184.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg5x)"/><line x1="146.0" y1="224.0" x2="146.0" y2="30.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg5y)"/>
<text x="132.0" y="200.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="180.0" y="200.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="132.0" y="150.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="70.0" y1="184.0" x2="70.0" y2="70.0" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/><line x1="146.0" y1="70.0" x2="70.0" y2="70.0" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/><line x1="222.0" y1="184.0" x2="222.0" y2="146.0" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/><line x1="146.0" y1="146.0" x2="222.0" y2="146.0" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="4 3"/>
<line x1="70.0" y1="70.0" x2="222.0" y2="146.0" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="6 4"/>
<circle cx="70.0" cy="70.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="52.0" y="62.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
<circle cx="222.0" cy="146.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="230.0" y="138.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
<circle cx="146.0" cy="108.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/><text x="154.0" y="100.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#e11d48">M</text>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={4} accent="rose">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
                  <div className="space-y-2">
                    <p>
                      1a) <Math tex="a=\dfrac{f(2)}{2}=\dfrac32" /> donc <Math tex="f(x)=\dfrac32 x" />
                    </p>
                    <p>
                      1b) <Math tex="f(-2)=\dfrac32\times(-2)=-3" />
                    </p>
                    <p>
                      2) <Math tex="g(0)=-2\times0+1=1" /> ; coefficient de <Math tex="g" /> : <Math tex="a=-2" />
                    </p>
                    <p>
                      3a) <Math tex="f" /> et <Math tex="g" /> ont des coefficients différents (
                      <Math tex="\tfrac32\neq-2" />), donc leurs représentations{" "}
                      <strong>ne sont pas parallèles</strong>.
                    </p>
                  </div>
                  <Fig max="max-w-[200px]">
                    <svg viewBox="0 0 254 330" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="254" height="330" fill="white" rx="12"/>
<defs>
<marker id="arg8x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg8y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng80" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7c3aed"/></marker>
<marker id="arlng81" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#e11d48"/></marker>
</defs>
<line x1="32.0" y1="32.0" x2="32.0" y2="298.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="70.0" y1="32.0" x2="70.0" y2="298.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="108.0" y1="32.0" x2="108.0" y2="298.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="146.0" y1="32.0" x2="146.0" y2="298.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="184.0" y1="32.0" x2="184.0" y2="298.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="222.0" y1="32.0" x2="222.0" y2="298.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="298.0" x2="222.0" y2="298.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="260.0" x2="222.0" y2="260.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="222.0" x2="222.0" y2="222.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="184.0" x2="222.0" y2="184.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="146.0" x2="222.0" y2="146.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="108.0" x2="222.0" y2="108.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="70.0" x2="222.0" y2="70.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="32.0" x2="222.0" y2="32.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="34.0" y1="184.0" x2="220.0" y2="184.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg8x)"/><line x1="108.0" y1="300.0" x2="108.0" y2="30.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg8y)"/>
<text x="94.0" y="200.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="142.0" y="200.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="94.0" y="150.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="32.0" y1="298.0" x2="209.3" y2="32.0" stroke="#7c3aed" strokeWidth="2.4" markerEnd="url(#arlng80)"/><text x="178.6" y="81.1" fontSize="13" fontWeight="700" fontStyle="italic" fill="#7c3aed">Cf</text>
<line x1="51.0" y1="32.0" x2="184.0" y2="298.0" stroke="#e11d48" strokeWidth="2.4" markerEnd="url(#arlng81)"/><text x="72.2" y="56.4" fontSize="13" fontWeight="700" fontStyle="italic" fill="#e11d48">Cg</text>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={5} accent="rose" title="Cube">
                <p>
                  1) <Math tex="V=\dfrac13\times S_{ABCD}\times AE=\dfrac13\times18\times18\times18=\dfrac{5832}{3}=1944\text{ cm}^3" />
                </p>
                <p>
                  2) Rapport <Math tex="k=\dfrac13" /> :{" "}
                  <Math tex="V'=k^3\times V=\left(\dfrac13\right)^3\times1944=\dfrac{1944}{27}=72\text{ cm}^3" />
                </p>
              </CorrectionBlock>

              <CorrectionBlock n={6} accent="rose" title="Statistiques">
                <StatTable
                  rows={[
                    { label: "Notes", values: ["7", "8", "9", "10", "11", "12", "13", "14", "15"] },
                    { label: "Effectifs", values: ["1", "1", "3", "5", "7", "2", "3", "2", "1"], strong: false },
                    {
                      label: "Effectif cumulé",
                      values: ["1", "2", "5", "10", "17", "19", "22", "24", "25"],
                    },
                  ]}
                />
                <p>1) Mode = <strong>11</strong> (effectif le plus grand : 7).</p>
                <p>
                  2) <Math tex="N=25" />, <Math tex="\dfrac{N}{2}=12{,}5" />. Le premier effectif cumulé{" "}
                  <Math tex="\geq12{,}5" /> est 17, atteint à la valeur 11.
                </p>
                <Answer>
                  D&apos;où : la médiane est <Math tex="M=11" />.
                </Answer>
                <p>3) Moyenne :</p>
                <MathBlock tex="m=\dfrac{7\times1+8\times1+9\times3+10\times5+11\times7+12\times2+13\times3+14\times2+15\times1}{25}=\dfrac{275}{25}=11" />
              </CorrectionBlock>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== EXAMEN N°6 ===================== */}
      <LessonSection
        id="examen-6"
        kicker="06 · Session Juin 2022"
        title="Examen Régional N°6"
        tone="light"
        description="Région Oriental."
      >
        <ExamMeta session="Juin 2022" region="Oriental" />
        <ExerciseCard
          id="6"
          index={6}
          title="Sujet complet"
          itemsLabel="5 exercices"
          items={
            <div className="space-y-4">
              <ExerciseBlock n={1} accent="amber" tag="Équations · Inéquations · Système · 5 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Résoudre l&apos;équation suivante : <Math tex="4x+1=-3" />
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Vérifier que : <Math tex="(x+3)(2-x)=-x^2-x+6" />
                      </li>
                      <li>
                        Résoudre l&apos;équation : <Math tex="-x^2-x+6=0" />
                      </li>
                    </ol>
                  </li>
                  <li>
                    Résoudre les inéquations suivantes : <Math tex="7x-5\leq0" /> et <Math tex="3x-1\leq5x+7" />
                  </li>
                  <li>
                    Considérons le système suivant : <Math tex="(S):\begin{cases}3x+y=7\\2x-y=3\end{cases}" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Le couple <Math tex="(2;-1)" /> est-il une solution du système <Math tex="(S)" /> ?
                      </li>
                      <li>
                        Résoudre le système <Math tex="(S)" />.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={2} accent="amber" tag="Statistiques · 2 points">
                <p>Le tableau suivant présente le nombre d&apos;enfants par famille dans un quartier.</p>
                <StatTable
                  rows={[
                    { label: "Nombre d'enfants", values: ["0", "1", "2", "3", "4"] },
                    { label: "Nombre de familles", values: ["5", "3", "2", "7", "3"] },
                  ]}
                />
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Donner le nombre total des familles du quartier.</li>
                  <li>Déterminer le mode de cette série statistique.</li>
                  <li>Calculer la moyenne arithmétique.</li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={3} accent="amber" tag="Repère · 6 points">
                <p>
                  Le plan est muni d&apos;un repère orthonormé <Math tex="(O;I;J)" />. Considérons les points{" "}
                  <Math tex="A(0;1)" /> ; <Math tex="B(1;4)" /> et <Math tex="C(3;4)" />
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Déterminer les coordonnées du vecteur <Math tex="\overrightarrow{AB}" />
                  </li>
                  <li>
                    Calculer la distance <Math tex="AB" />.
                  </li>
                  <li>
                    Calculer les coordonnées du point <Math tex="K" /> le milieu du segment <Math tex="[AB]" />.
                  </li>
                  <li>
                    Montrer que l&apos;équation réduite de la droite <Math tex="(AB)" /> est <Math tex="y=3x+1" />
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Déterminer l&apos;équation réduite de la droite parallèle à <Math tex="(AB)" /> et passant
                        par <Math tex="C" />.
                      </li>
                      <li>
                        Montrer que la droite d&apos;équation <Math tex="y=\dfrac{-1}3 x+4" /> est perpendiculaire
                        à <Math tex="(AB)" />.
                      </li>
                    </ol>
                  </li>
                  <li>
                    Déterminer les coordonnées du point <Math tex="D" /> l&apos;image de <Math tex="C" /> par la
                    translation de vecteur <Math tex="\overrightarrow{AB}" />
                  </li>
                  <li>
                    Déterminer l&apos;image de la droite <Math tex="(AC)" /> par la translation de vecteur{" "}
                    <Math tex="\overrightarrow{AB}" />.
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={4} accent="amber" tag="Fonctions · 4 points">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Soit <Math tex="f" /> la fonction linéaire définie par : <Math tex="f(x)=3x" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Déterminer le coefficient de la fonction linéaire <Math tex="f" />
                      </li>
                      <li>
                        Calculer <Math tex="f(1)" /> et <Math tex="f(-2)" />.
                      </li>
                      <li>
                        Le point <Math tex="E(10;30)" /> appartient-il à la représentation graphique de la
                        fonction <Math tex="f" /> ?
                      </li>
                    </ol>
                  </li>
                  <li>
                    Soit la fonction <Math tex="g" /> définie par : <Math tex="g(x)=-5x+1" />
                    <ol className="mt-2 list-[lower-alpha] space-y-2 pl-5">
                      <li>
                        Déterminer la nature de la fonction <Math tex="g" /> et préciser son coefficient.
                      </li>
                      <li>
                        Déterminer le nombre dont l&apos;image par la fonction <Math tex="g" /> est{" "}
                        <Math tex="-9" />.
                      </li>
                    </ol>
                  </li>
                </ol>
              </ExerciseBlock>

              <ExerciseBlock n={5} accent="amber" tag="Géométrie dans l'espace · 3 points">
                <p>
                  <Math tex="ABCDEFGH" /> est un parallélépipède rectangle tel que :{" "}
                  <Math tex="AB=8\text{ cm}" /> ; <Math tex="BC=6\text{ cm}" /> et <Math tex="AE=4\text{ cm}" />.
                </p>
                <Fig
                  max="max-w-[260px]"
                  caption={
                    <>
                      Réduction <Math tex="IJKDMNOP" /> (rapport <Math tex="\tfrac12" />, centre <Math tex="D" />)
                      en <span className="font-semibold text-violet-600">violet</span>
                    </>
                  }
                >
                  <svg viewBox="128 188 214 150" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg"><rect x="128" y="188" width="214" height="150" fill="white" rx="12"/><line x1="160.0" y1="300.0" x2="200.0" y2="272.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="200.0" y1="272.0" x2="304.0" y2="272.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="200.0" y1="272.0" x2="200.0" y2="220.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="264.0" y1="248.0" x2="304.0" y2="220.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="304.0" y1="220.0" x2="200.0" y2="220.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="304.0" y1="272.0" x2="304.0" y2="220.0" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="5 4"/><line x1="160.0" y1="300.0" x2="264.0" y2="300.0" stroke="#64748b" strokeWidth="1.6"/><line x1="264.0" y1="300.0" x2="304.0" y2="272.0" stroke="#64748b" strokeWidth="1.4" strokeDasharray="5 4"/><line x1="160.0" y1="300.0" x2="160.0" y2="248.0" stroke="#64748b" strokeWidth="1.6"/><line x1="264.0" y1="300.0" x2="264.0" y2="248.0" stroke="#64748b" strokeWidth="1.6"/><line x1="160.0" y1="248.0" x2="264.0" y2="248.0" stroke="#64748b" strokeWidth="1.6"/><line x1="160.0" y1="248.0" x2="200.0" y2="220.0" stroke="#64748b" strokeWidth="1.4" strokeDasharray="5 4"/><polygon points="180.0,260.0 232.0,260.0 252.0,246.0 200.0,246.0" fill="#7c3aed" fillOpacity="0.14" stroke="none" strokeWidth="1.8"/><line x1="180.0" y1="286.0" x2="232.0" y2="286.0" stroke="#7c3aed" strokeWidth="2.2"/><line x1="232.0" y1="286.0" x2="252.0" y2="272.0" stroke="#7c3aed" strokeWidth="2.2"/><line x1="252.0" y1="272.0" x2="200.0" y2="272.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><line x1="200.0" y1="272.0" x2="180.0" y2="286.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><line x1="180.0" y1="260.0" x2="232.0" y2="260.0" stroke="#7c3aed" strokeWidth="2.2"/><line x1="232.0" y1="260.0" x2="252.0" y2="246.0" stroke="#7c3aed" strokeWidth="2.2"/><line x1="252.0" y1="246.0" x2="200.0" y2="246.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><line x1="200.0" y1="246.0" x2="180.0" y2="260.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><line x1="180.0" y1="286.0" x2="180.0" y2="260.0" stroke="#7c3aed" strokeWidth="2.2"/><line x1="232.0" y1="286.0" x2="232.0" y2="260.0" stroke="#7c3aed" strokeWidth="2.2"/><line x1="252.0" y1="272.0" x2="252.0" y2="246.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><line x1="200.0" y1="272.0" x2="200.0" y2="246.0" stroke="#7c3aed" strokeWidth="2.0" strokeDasharray="5 4"/><text x="152.0" y="318.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text><text x="272.0" y="318.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text><text x="312.0" y="274.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text><text x="196.0" y="290.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#7c3aed">D</text><text x="144.0" y="246.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">E</text><text x="272.0" y="246.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">F</text><text x="312.0" y="212.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">G</text><text x="184.0" y="212.0" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">H</text><text x="176.0" y="302.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">I</text><text x="236.0" y="302.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">J</text><text x="258.0" y="274.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">K</text><text x="166.0" y="258.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">M</text><text x="236.0" y="254.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">N</text><text x="258.0" y="242.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">O</text><text x="196.0" y="238.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#7c3aed">P</text></svg>
                </Fig>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Calculer la distance <Math tex="AC" />.
                  </li>
                  <li>
                    Calculer <Math tex="V" /> le volume du parallélépipède <Math tex="ABCDEFGH" />
                  </li>
                  <li>
                    Après une réduction de rapport <Math tex="k=\dfrac12" /> du parallélépipède{" "}
                    <Math tex="ABCDEFGH" />, on obtient le parallélépipède <Math tex="IJKDMNOP" /> (voir le schéma
                    ci-dessus). Calculer <Math tex="V'" /> le volume du parallélépipède <Math tex="IJKDMNOP" />
                  </li>
                </ol>
              </ExerciseBlock>
            </div>
          }
          correction={
            <div className="space-y-6">
              <CorrectionBlock n={1} accent="amber">
                <p>
                  1) <Math tex="4x+1=-3 \Rightarrow 4x=-4 \Rightarrow x=-1" />
                </p>
                <p className="font-semibold text-foreground">
                  2a) <Math tex="(x+3)(2-x)=2x-x^2+6-3x=-x^2-x+6" /> ✓
                </p>
                <p className="font-semibold text-foreground">
                  2b) <Math tex="(x+3)(2-x)=0 \Rightarrow x=-3 \text{ ou } x=2" />
                </p>
                <p>
                  3) <Math tex="7x-5\leq0 \Rightarrow x\leq\dfrac57" /> · <Math tex="3x-1\leq5x+7 \Rightarrow -2x\leq8 \Rightarrow x\geq-4" />
                </p>
                <p className="font-semibold text-foreground">
                  4a) <Math tex="3(2)+(-1)=5\neq7" />
                </p>
                <p className="font-semibold text-rose-700 dark:text-rose-400">
                  Donc <Math tex="(2;-1)" /> n&apos;est pas solution de <Math tex="(S)" />.
                </p>
                <p className="font-semibold text-foreground">
                  4b) On additionne : <Math tex="5x=10 \Rightarrow x=2,\; y=1" />
                </p>
                <Answer>
                  D&apos;où le couple <Math tex="(2;1)" /> est la solution de <Math tex="(S)" />.
                </Answer>
              </CorrectionBlock>

              <CorrectionBlock n={2} accent="amber" title="Statistiques">
                <p>1) Total <Math tex="=5+3+2+7+3=20" /> familles.</p>
                <p>2) Mode = <strong>3</strong> (effectif le plus grand : 7).</p>
                <p>
                  3) Moyenne : <Math tex="m=\dfrac{0\times5+1\times3+2\times2+3\times7+4\times3}{20}=\dfrac{40}{20}=2" />
                </p>
              </CorrectionBlock>

              <CorrectionBlock n={3} accent="amber" title="Repère">
                <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
                  <div className="space-y-2">
                    <p>
                      1) <Math tex="\overrightarrow{AB}(1;3)" /> · 2) <Math tex="AB=\sqrt{1^2+3^2}=\sqrt{10}" />
                    </p>
                    <p>
                      3) <Math tex="K\left(\dfrac{0+1}{2};\dfrac{1+4}{2}\right)=\left(\dfrac12;\dfrac52\right)" />
                    </p>
                    <p>
                      4) pente <Math tex="=\dfrac{4-1}{1-0}=3" />, <Math tex="A(0;1)\in(AB)\Rightarrow b=1" /> :{" "}
                      <Math tex="(AB):y=3x+1" />
                    </p>
                    <p>
                      5a) <Math tex="(L)\parallel(AB)\Rightarrow a=3" /> ; <Math tex="C(3;4)\in(L)\Rightarrow b=-5" /> :{" "}
                      <Math tex="(L):y=3x-5" />
                    </p>
                    <p>
                      5b) <Math tex="3\times\left(-\dfrac13\right)=-1" /> donc cette droite est perpendiculaire à{" "}
                      <Math tex="(AB)" />.
                    </p>
                    <p>
                      6) <Math tex="\overrightarrow{CD}=\overrightarrow{AB}(1;3)\Rightarrow D(4;7)" />
                    </p>
                    <p>
                      7) <Math tex="A\to B" /> et <Math tex="C\to D" /> : l&apos;image de la droite{" "}
                      <Math tex="(AC)" /> par cette translation est la droite <Math tex="(BD)" />.
                    </p>
                  </div>
                  <Fig max="max-w-[200px]">
                    <svg viewBox="0 0 244 334" className="mx-auto h-auto w-full" xmlns="http://www.w3.org/2000/svg">
<rect width="244" height="334" fill="white" rx="12"/>
<defs>
<marker id="arg11x" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arg11y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1e293b"/></marker>
<marker id="arlng110" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#2563eb"/></marker>
<marker id="arlng111" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#0d9488"/></marker>
<marker id="arvg110" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7c3aed"/></marker>
</defs>
<line x1="32.0" y1="32.0" x2="32.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="62.0" y1="32.0" x2="62.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="92.0" y1="32.0" x2="92.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="122.0" y1="32.0" x2="122.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="152.0" y1="32.0" x2="152.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="182.0" y1="32.0" x2="182.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="212.0" y1="32.0" x2="212.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="302.0" x2="212.0" y2="302.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="272.0" x2="212.0" y2="272.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="242.0" x2="212.0" y2="242.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="212.0" x2="212.0" y2="212.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="182.0" x2="212.0" y2="182.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="152.0" x2="212.0" y2="152.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="122.0" x2="212.0" y2="122.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="92.0" x2="212.0" y2="92.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="62.0" x2="212.0" y2="62.0" stroke="#e2e8f0" strokeWidth="1"/><line x1="32.0" y1="32.0" x2="212.0" y2="32.0" stroke="#e2e8f0" strokeWidth="1"/>
<line x1="34.0" y1="272.0" x2="210.0" y2="272.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg11x)"/><line x1="62.0" y1="304.0" x2="62.0" y2="30.0" stroke="#1e293b" strokeWidth="1.8" markerEnd="url(#arg11y)"/>
<text x="48.0" y="288.0" fontSize="12" fontWeight="700" fontStyle="italic" fill="#1e293b">O</text><text x="88.0" y="288.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">I</text><text x="48.0" y="246.0" fontSize="11" fontWeight="700" fontStyle="italic" fill="#475569">J</text>
<line x1="42.0" y1="302.0" x2="132.0" y2="32.0" stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#arlng110)"/><text x="113.0" y="101.0" fontSize="13" fontWeight="700" fontStyle="italic" fill="#2563eb">(AB)</text>
<line x1="102.0" y1="302.0" x2="192.0" y2="32.0" stroke="#0d9488" strokeWidth="2.0" strokeDasharray="7 5" markerEnd="url(#arlng111)"/><text x="144.5" y="186.5" fontSize="13" fontWeight="700" fontStyle="italic" fill="#0d9488">(L)</text>
<line x1="152.0" y1="152.0" x2="182.0" y2="62.0" stroke="#7c3aed" strokeWidth="2.2" markerEnd="url(#arvg110)"/>
<circle cx="62.0" cy="242.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="46.0" y="256.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
<circle cx="92.0" cy="152.0" r="4.2" fill="#1e293b" stroke="#1e293b" strokeWidth="2"/><text x="100.0" y="144.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
<circle cx="152.0" cy="152.0" r="4.2" fill="#e11d48" stroke="#e11d48" strokeWidth="2"/><text x="160.0" y="144.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#e11d48">C</text>
<circle cx="182.0" cy="62.0" r="4.2" fill="#7c3aed" stroke="#7c3aed" strokeWidth="2"/><text x="190.0" y="54.0" fontSize="13.5" fontWeight="700" fontStyle="italic" fill="#7c3aed">D</text>
</svg>
                  </Fig>
                </div>
              </CorrectionBlock>

              <CorrectionBlock n={4} accent="amber">
                <p>
                  1a) Coefficient de <Math tex="f" /> : <Math tex="3" />
                </p>
                <p>
                  1b) <Math tex="f(1)=3\times1=3" /> et <Math tex="f(-2)=3\times(-2)=-6" />
                </p>
                <p>
                  1c) <Math tex="f(10)=3\times10=30" />, donc <Math tex="E(10;30)" /> appartient à la
                  représentation graphique de <Math tex="f" />.
                </p>
                <p>
                  2a) <Math tex="g" /> est une fonction affine (<Math tex="g(x)=ax+b" />) de coefficient{" "}
                  <Math tex="a=-5" />.
                </p>
                <p>
                  2b) Soit <Math tex="y" /> tel que <Math tex="g(y)=-9" /> :{" "}
                  <Math tex="-5y+1=-9 \Rightarrow -5y=-10 \Rightarrow y=2" />
                </p>
              </CorrectionBlock>

              <CorrectionBlock n={5} accent="amber" title="Parallélépipède">
                <p>
                  1) <Math tex="ABCD" /> rectangle donc <Math tex="ABC" /> rectangle en <Math tex="B" /> :{" "}
                  <Math tex="AC^2=AB^2+BC^2=8^2+6^2=100 \Rightarrow AC=10\text{ cm}" />
                </p>
                <p>
                  2) <Math tex="V=AB\times BC\times AE=8\times6\times4=192\text{ cm}^3" />
                </p>
                <p>
                  3) Rapport <Math tex="k=\dfrac12" /> :{" "}
                  <Math tex="V'=k^3\times V=\left(\dfrac12\right)^3\times192=\dfrac{192}{8}=24\text{ cm}^3" />
                </p>
              </CorrectionBlock>
            </div>
          }
        />
      </LessonSection>
    </LessonShell>
  );
}
