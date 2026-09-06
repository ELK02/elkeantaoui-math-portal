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
  title: "La projection dans le plan · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet sur la projection d'un point sur une droite parallèlement à une autre droite : définition, cas particulier de la projection orthogonale, théorème de Thalès et sa réciproque, conservation du coefficient de colinéarité par projection. 7 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "La projection dans le plan",
  heroSubtitle:
    "Projeter un point sur une droite parallèlement à une autre : définition, théorème de Thalès (direct et réciproque), et conservation du coefficient de colinéarité. Cours complet et figures exactes, puis 7 exercices corrigés.",
  footerNote: "La projection dans le plan · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "cours-def", label: "Définition" },
    { id: "cours-thales", label: "Théorème de Thalès" },
    { id: "cours-colinearite", label: "Conservation du coefficient" },
    { id: "exercices", label: "Exercices" },
  ],
};

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

function Figure({ text, svg, reverse = false }: { text: ReactNode; svg: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-5">
      <div className={`space-y-2 text-sm text-foreground ${reverse ? "sm:order-2 sm:col-span-3" : "sm:col-span-3"}`}>
        {text}
      </div>
      <div className={`flex justify-center ${reverse ? "sm:order-1" : ""} sm:col-span-2`}>{svg}</div>
    </div>
  );
}

function ArrowDefs({ id, color = "currentColor" }: { id: string; color?: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L6,3 L0,6 Z" fill={color} />
      </marker>
    </defs>
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

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "3", label: "notions du cours" },
          { value: "7", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#cours-def" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 260 260" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <ArrowDefs id="heroProj" color="#fb923c" />
            <line x1="48" y1="248" x2="160" y2="24" stroke="currentColor" strokeWidth="2" opacity="0.85" />
            <line x1="34" y1="238.7" x2="216" y2="178" stroke="currentColor" strokeWidth="2" opacity="0.85" />
            <line x1="146" y1="150" x2="115.2" y2="211.6" stroke="#fb923c" strokeWidth="2.2" strokeDasharray="6 4" markerEnd="url(#heroProj)" />
            <circle cx="146" cy="150" r="3.5" fill="white" />
            <circle cx="115.2" cy="211.6" r="3.5" fill="#fb923c" />
            <text x="152" y="146" fontSize="14" fontWeight="700" fill="white">M</text>
            <text x="98" y="222" fontSize="14" fontWeight="700" fill="#fb923c">M&apos;</text>
            <text x="180" y="170" fontSize="13" fontStyle="italic" fill="white">(Δ)</text>
            <text x="150" y="40" fontSize="13" fontStyle="italic" fill="white">(D)</text>
          </svg>
        }
      />

      {/* ===================== I. DÉFINITION ===================== */}
      <LessonSection
        id="cours-def"
        kicker="01 · La définition"
        title="Projection d'un point sur une droite parallèlement à une autre droite"
        tone="light"
        description="Deux droites sécantes suffisent à définir, pour tout point du plan, un unique projeté."
      >
        <CourseBlock numeral="I" title="Définition">
          <Figure
            text={
              <>
                <p>
                  Soient <Math tex="(D)" /> et <Math tex="(\Delta)" /> deux droites <strong>sécantes</strong> du
                  plan, et <Math tex="M" /> un point du plan tel que <Math tex="M\notin(\Delta)" />.
                </p>
                <p>
                  On appelle <strong>projeté (ou projection) du point M sur (Δ) parallèlement à (D)</strong>,
                  l&apos;unique point <Math tex="M'" /> tel que :
                </p>
              </>
            }
            svg={
              <svg viewBox="0 0 260 260" className="h-auto w-full max-w-[260px] text-neutral-700">
                <ArrowDefs id="p1" />
                <line x1="34" y1="238.7" x2="216" y2="178" stroke="#0ea5e9" strokeWidth="2" />
                <line x1="48" y1="248" x2="160" y2="24" stroke="currentColor" strokeWidth="2" />
                <line x1="146" y1="150" x2="115.2" y2="211.6" stroke="#e11d48" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#p1)" />
                <circle cx="56.4" cy="231.2" r="3" fill="currentColor" />
                <circle cx="146" cy="150" r="3.5" fill="currentColor" />
                <circle cx="115.2" cy="211.6" r="3.5" fill="#e11d48" />
                <text x="152" y="146" fontSize="14" fontWeight="700">M</text>
                <text x="96" y="222" fontSize="14" fontWeight="700" fill="#e11d48">M&apos;</text>
                <text x="200" y="192" fontSize="13" fontStyle="italic" fill="#0ea5e9">(Δ)</text>
                <text x="150" y="40" fontSize="13" fontStyle="italic">(D)</text>
              </svg>
            }
          />
          <FormulaBlock tex="M'\in(\Delta) \qquad \text{et} \qquad (MM')\parallel(D)" caption="M′ est le point d'intersection de (Δ) avec la parallèle à (D) passant par M" />
          <Callout variant="info" title="Cas particulier — la projection orthogonale">
            Si <Math tex="(D)\perp(\Delta)" />, le projeté <Math tex="M'" /> de <Math tex="M" /> sur{" "}
            <Math tex="(\Delta)" /> parallèlement à <Math tex="(D)" /> est appelé{" "}
            <strong>projection orthogonale</strong> de <Math tex="M" /> sur <Math tex="(\Delta)" />.
            <svg viewBox="0 0 160 90" className="mx-auto mt-3 h-20 w-auto">
              <line x1="10" y1="70" x2="150" y2="70" stroke="currentColor" strokeWidth="1.6" />
              <line x1="90" y1="70" x2="90" y2="10" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 3" />
              <path d="M84,70 L84,64 L90,64" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="90" cy="10" r="3" fill="currentColor" />
              <circle cx="90" cy="70" r="3" fill="#e11d48" />
              <text x="98" y="14" fontSize="11" fontWeight="700">A</text>
              <text x="98" y="78" fontSize="11" fontWeight="700" fill="#e11d48">A&apos;</text>
              <text x="130" y="66" fontSize="11" fontStyle="italic">(Δ)</text>
            </svg>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Si <Math tex="M\in(\Delta)" />, on convient que <Math tex="M" /> est son propre projeté (un point de{" "}
            <Math tex="(\Delta)" /> ne bouge pas).
          </p>
        </CourseBlock>

        <CourseBlock numeral="I bis" title="Activité — comprendre la construction">
          <p className="text-sm text-foreground">
            Imaginons que <Math tex="(D)" /> représente la direction des rayons du soleil, et que{" "}
            <Math tex="(\Delta)" /> représente le sol. L&apos;ombre d&apos;un point <Math tex="A" /> (par exemple le
            sommet d&apos;un arbre) sur le sol est exactement le point <Math tex="A'" />, projeté de{" "}
            <Math tex="A" /> sur <Math tex="(\Delta)" /> parallèlement à <Math tex="(D)" /> : on trace la parallèle
            à <Math tex="(D)" /> passant par <Math tex="A" />, et son intersection avec le sol <Math tex="(\Delta)" />{" "}
            donne <Math tex="A'" />.
          </p>
          <Callout variant="warning" title="Trois questions classiques sur une figure donnée">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Trouver la projection d&apos;un point : on trace la parallèle à <Math tex="(D)" /> par ce point, et
                on regarde où elle coupe <Math tex="(\Delta)" />.
              </li>
              <li>
                Trouver <strong>tous</strong> les points dont la projection sur <Math tex="(\Delta)" /> est un point
                donné <Math tex="F" /> : c&apos;est exactement la droite passant par <Math tex="F" /> et parallèle à{" "}
                <Math tex="(D)" /> (car tout point de cette droite se projette bien en <Math tex="F" />, et
                réciproquement).
              </li>
              <li>
                Construire un point <Math tex="M" /> connaissant sa projection <Math tex="M'" /> et une condition
                supplémentaire (par exemple appartenir à un parallélogramme donné) : <Math tex="M" /> se trouve
                nécessairement sur la parallèle à <Math tex="(D)" /> passant par <Math tex="M'" />, et la seconde
                condition permet de le localiser précisément sur cette droite.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. THALÈS ===================== */}
      <LessonSection
        id="cours-thales"
        kicker="02 · Le théorème central"
        title="Le théorème de Thalès et sa réciproque"
        tone="muted"
        description="Le théorème qui relie la projection aux rapports de longueurs, dans les trois configurations usuelles."
      >
        <CourseBlock numeral="II.A" title="Théorème de Thalès (sens direct)">
          <Callout variant="success" title="Propriété (admise)">
            <p>
              Si <Math tex="A,B,M" /> sont trois points alignés, <Math tex="A,N,C" /> sont trois points alignés, et
              si <Math tex="(MN)\parallel(BC)" />, alors :
            </p>
            <p className="mt-2 text-center font-display text-lg font-bold">
              <Math tex="\dfrac{AM}{AB}=\dfrac{AN}{AC}=\dfrac{MN}{BC}" />
            </p>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Ce théorème s&apos;applique dans plusieurs configurations : les points <Math tex="M,N" /> peuvent être
            situés entre <Math tex="A" /> et <Math tex="B,C" /> (triangle), au-delà (agrandissement), ou de part et
            d&apos;autre de <Math tex="A" /> (configuration en « papillon », droites sécantes en <Math tex="A" />).
            Dans tous les cas, c&apos;est la même relation de rapports qui s&apos;applique.
          </p>
          <Example title="Exemple résolu — calculer x et y">
            <Figure
              text={
                <>
                  <p>
                    <Math tex="ABC" /> un triangle, <Math tex="I\in[AB]" />, <Math tex="J\in[AC]" />,{" "}
                    <Math tex="(IJ)\parallel(BC)" />, avec <Math tex="AI=6" />, <Math tex="AB=18" />,{" "}
                    <Math tex="AJ=5" />, <Math tex="AC=x" />, <Math tex="BC=12" />, <Math tex="IJ=y" /> (en cm).
                  </p>
                  <p>
                    D&apos;après Thalès : <Math tex="\dfrac{AI}{AB}=\dfrac{AJ}{AC}=\dfrac{IJ}{BC}" />, soit{" "}
                    <Math tex="\dfrac{6}{18}=\dfrac{5}{x}=\dfrac{y}{12}" />, c&apos;est-à-dire{" "}
                    <Math tex="\dfrac13=\dfrac5x=\dfrac{y}{12}" />.
                  </p>
                  <p>
                    <Math tex="\dfrac13=\dfrac5x \iff x=15" /> et <Math tex="\dfrac13=\dfrac{y}{12}\iff y=4" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    <Math tex="AC=15" /> cm et <Math tex="IJ=4" /> cm.
                  </p>
                </>
              }
              svg={
                <svg viewBox="0 0 260 260" className="h-auto w-full max-w-[240px] text-neutral-700">
                  <polygon points="30,230 228,230 153.8,120.9" fill="#4f46e5" fillOpacity="0.05" />
                  <line x1="30" y1="230" x2="153.8" y2="120.9" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="228" y1="230" x2="153.8" y2="120.9" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="30" y1="230" x2="228" y2="230" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="96" y1="230" x2="71.2" y2="193.6" stroke="#e11d48" strokeWidth="2" />
                  <circle cx="30" cy="230" r="3" fill="currentColor" /><text x="14" y="248" fontSize="13" fontWeight="700">A</text>
                  <circle cx="228" cy="230" r="3" fill="currentColor" /><text x="232" y="248" fontSize="13" fontWeight="700">B</text>
                  <circle cx="153.8" cy="120.9" r="3" fill="currentColor" /><text x="158" y="112" fontSize="13" fontWeight="700">C</text>
                  <circle cx="96" cy="230" r="3" fill="#e11d48" /><text x="80" y="248" fontSize="13" fontWeight="700" fill="#e11d48">I</text>
                  <circle cx="71.2" cy="193.6" r="3" fill="#e11d48" /><text x="46" y="192" fontSize="13" fontWeight="700" fill="#e11d48">J</text>
                </svg>
              }
            />
          </Example>
        </CourseBlock>

        <CourseBlock numeral="II.B" title="Réciproque du théorème de Thalès">
          <Callout variant="success" title="Propriété (admise) — pour prouver un parallélisme">
            <p>Si :</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="A,M,B" /> sont alignés,
              </li>
              <li>
                <Math tex="A,N,C" /> sont alignés,
              </li>
              <li>
                <Math tex="A,M,B" /> sont dans le même ordre que <Math tex="A,N,C" />,
              </li>
              <li>
                <Math tex="\dfrac{AM}{AB}=\dfrac{AN}{AC}" />,
              </li>
            </ul>
            <p className="mt-2 font-semibold">
              alors <Math tex="(MN)\parallel(BC)" />.
            </p>
          </Callout>
          <Example title="Exemple résolu — ADE un triangle">
            <Figure
              text={
                <>
                  <p>
                    <Math tex="ADE" /> un triangle tel que <Math tex="B\in[AD]" />, <Math tex="C\in[AE]" />,{" "}
                    <Math tex="AB=4" /> cm, <Math tex="AD=6" /> cm, <Math tex="AC=6" /> cm, <Math tex="AE=9" /> cm.
                    Montrons que <Math tex="(BC)\parallel(DE)" />.
                  </p>
                  <p>
                    On a <Math tex="A,B,D" /> alignés, <Math tex="A,C,E" /> alignés, dans le même ordre, et :
                  </p>
                  <p className="text-center">
                    <Math tex="\dfrac{AB}{AD}=\dfrac46=\dfrac23 \qquad\qquad \dfrac{AC}{AE}=\dfrac69=\dfrac23" />
                  </p>
                  <p className="font-semibold text-green-700">
                    Les deux rapports sont égaux, donc <Math tex="(BC)\parallel(DE)" /> d&apos;après la réciproque du
                    théorème de Thalès.
                  </p>
                </>
              }
              reverse
              svg={
                <svg viewBox="0 0 260 260" className="h-auto w-full max-w-[240px] text-neutral-700">
                  <polygon points="40,230 172,230 40,32" fill="#0ea5e9" fillOpacity="0.05" />
                  <line x1="40" y1="230" x2="172" y2="230" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="40" y1="230" x2="40" y2="32" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="172" y1="230" x2="40" y2="32" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" />
                  <line x1="128" y1="230" x2="40" y2="98" stroke="#e11d48" strokeWidth="2" />
                  <circle cx="40" cy="230" r="3" fill="currentColor" /><text x="22" y="248" fontSize="13" fontWeight="700">A</text>
                  <circle cx="172" cy="230" r="3" fill="currentColor" /><text x="176" y="248" fontSize="13" fontWeight="700">D</text>
                  <circle cx="40" cy="32" r="3" fill="currentColor" /><text x="16" y="30" fontSize="13" fontWeight="700">E</text>
                  <circle cx="128" cy="230" r="3" fill="#e11d48" /><text x="112" y="248" fontSize="13" fontWeight="700" fill="#e11d48">B</text>
                  <circle cx="40" cy="98" r="3" fill="#e11d48" /><text x="16" y="96" fontSize="13" fontWeight="700" fill="#e11d48">C</text>
                </svg>
              }
            />
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. CONSERVATION ===================== */}
      <LessonSection
        id="cours-colinearite"
        kicker="03 · L'outil clé pour les exercices"
        title="Conservation du coefficient de colinéarité par projection"
        tone="light"
        description="La propriété qui transforme un problème de projection en simple calcul vectoriel — la clé de tous les exercices de ce chapitre."
      >
        <CourseBlock numeral="III" title="La propriété fondamentale">
          <p className="text-sm text-foreground">
            Soient <Math tex="(D)" /> et <Math tex="(\Delta)" /> deux droites sécantes. Pour des points{" "}
            <Math tex="A,B,C,\dots" /> du plan, on note <Math tex="A',B',C',\dots" /> leurs projections respectives
            sur <Math tex="(D)" /> parallèlement à <Math tex="(\Delta)" /> (ou sur <Math tex="(\Delta)" />{" "}
            parallèlement à <Math tex="(D)" />, selon le contexte).
          </p>
          <Callout variant="success" title="Propriété (admise)">
            <p>
              Si <Math tex="\overrightarrow{AB}=k\,\overrightarrow{AC}" /> (<Math tex="k\in\mathbb R" />), alors :
            </p>
            <p className="mt-2 text-center font-display text-lg font-bold">
              <Math tex="\overrightarrow{A'B'}=k\,\overrightarrow{A'C'}" />
            </p>
            <p className="mt-2 text-xs text-foreground-muted">
              Autrement dit : la projection <strong>conserve le coefficient de colinéarité</strong> de deux
              vecteurs. En particulier, elle conserve le milieu d&apos;un segment, et transforme un vecteur nul en
              vecteur nul.
            </p>
          </Callout>
          <Example title="Exemple résolu — la méthode de référence de ce chapitre">
            <Figure
              text={
                <>
                  <p>
                    <Math tex="ABC" /> un triangle, <Math tex="M\in[AB]" /> tel que{" "}
                    <Math tex="\overrightarrow{AM}=\tfrac13\overrightarrow{AB}" />, et <Math tex="N" /> le projeté de{" "}
                    <Math tex="M" /> sur <Math tex="(AC)" /> parallèlement à <Math tex="(BC)" />. Montrons que{" "}
                    <Math tex="\overrightarrow{AN}=\tfrac13\overrightarrow{AC}" />.
                  </p>
                  <p>
                    <Math tex="A" /> est sa propre projection sur <Math tex="(AC)" /> parallèlement à{" "}
                    <Math tex="(BC)" /> (car <Math tex="A\in(AC)" />). <Math tex="N" /> est la projection de{" "}
                    <Math tex="M" />. <Math tex="C" /> est la projection de <Math tex="B" /> (car{" "}
                    <Math tex="(BC)\parallel(BC)" />, la parallèle à <Math tex="(BC)" /> passant par{" "}
                    <Math tex="B" /> est <Math tex="(BC)" /> elle-même, qui coupe <Math tex="(AC)" /> en{" "}
                    <Math tex="C" />).
                  </p>
                  <p>
                    Comme <Math tex="\overrightarrow{AM}=\tfrac13\overrightarrow{AB}" />, la conservation du
                    coefficient de colinéarité donne directement{" "}
                    <Math tex="\overrightarrow{A'M'}=\overrightarrow{AN}=\tfrac13\overrightarrow{AC}" /> (avec{" "}
                    <Math tex="A'=A" /> et <Math tex="B'=C" />).
                  </p>
                  <p className="font-semibold text-green-700">
                    <Math tex="\overrightarrow{AN}=\tfrac13\overrightarrow{AC}" />.
                  </p>
                </>
              }
              svg={
                <svg viewBox="0 0 260 260" className="h-auto w-full max-w-[240px] text-neutral-700">
                  <polygon points="40,230 220,230 100,80" fill="#22c55e" fillOpacity="0.05" />
                  <line x1="40" y1="230" x2="220" y2="230" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="40" y1="230" x2="100" y2="80" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="220" y1="230" x2="100" y2="80" stroke="currentColor" strokeWidth="1.6" />
                  <line x1="100" y1="230" x2="60" y2="180" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 3" />
                  <circle cx="40" cy="230" r="3" fill="currentColor" /><text x="22" y="248" fontSize="13" fontWeight="700">A</text>
                  <circle cx="220" cy="230" r="3" fill="currentColor" /><text x="224" y="248" fontSize="13" fontWeight="700">B</text>
                  <circle cx="100" cy="80" r="3" fill="currentColor" /><text x="104" y="72" fontSize="13" fontWeight="700">C</text>
                  <circle cx="100" cy="230" r="3" fill="#e11d48" /><text x="84" y="248" fontSize="13" fontWeight="700" fill="#e11d48">M</text>
                  <circle cx="60" cy="180" r="3" fill="#e11d48" /><text x="36" y="176" fontSize="13" fontWeight="700" fill="#e11d48">N</text>
                </svg>
              }
            />
          </Example>
          <Callout variant="warning" title="Méthode à retenir pour les exercices">
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                Repérer les <strong>deux droites sécantes</strong> qui définissent la projection, et identifier deux
                points « faciles » (souvent des sommets d&apos;un triangle) dont on connaît déjà le projeté (un
                point sur la droite-image se projette sur lui-même ; un point sur la droite-direction se projette
                sur le point d&apos;intersection des deux droites).
              </li>
              <li>
                Exprimer le point à projeter comme <Math tex="\overrightarrow{AM}=k\overrightarrow{AB}" /> à partir
                de ces deux points de référence.
              </li>
              <li>
                Appliquer directement la conservation : <Math tex="\overrightarrow{A'M'}=k\overrightarrow{A'B'}" />.
              </li>
            </ol>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · La projection dans le plan"
        tone="muted"
        description="7 exercices corrigés en détail (Série n°3, M. Saïd Cherif). Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la projection dans le plan.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1" index={1} title="Un quadrilatère droit en D, médiatrice et parallélisme"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="ABDC" /> un quadrilatère droit en <Math tex="D" />. <Math tex="I" /> et <Math tex="J" />{" "}
                  sont les milieux respectifs de <Math tex="[AC]" /> et <Math tex="[BC]" />. La droite parallèle à{" "}
                  <Math tex="(BD)" /> passant par <Math tex="J" /> coupe <Math tex="[DC]" /> en <Math tex="K" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="K" /> est le milieu de <Math tex="[CD]" />.
                  </li>
                  <li>
                    Montrer que <Math tex="(KJ)" /> est la médiatrice de <Math tex="[CD]" />. En déduire la nature du
                    triangle <Math tex="JDC" />.
                  </li>
                  <li>
                    En déduire que <Math tex="(IK)" /> est parallèle à <Math tex="(AD)" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Dans le triangle <Math tex="BDC" />, <Math tex="J" /> est le milieu de{" "}
                  <Math tex="[CB]" /> et <Math tex="(JK)\parallel(DB)" /> avec <Math tex="K\in(DC)" />. D&apos;après
                  Thalès, <Math tex="\dfrac{CK}{CD}=\dfrac{CJ}{CB}=\dfrac12" />, donc <strong className="text-green-700">K est le milieu de [CD]</strong>.
                </p>
                <p>
                  <strong>2)</strong> Le quadrilatère <Math tex="ABDC" /> est droit en <Math tex="D" />, donc{" "}
                  <Math tex="(DB)\perp(DC)" />. Comme <Math tex="(JK)\parallel(DB)" />, on a aussi{" "}
                  <Math tex="(JK)\perp(DC)" />. Or <Math tex="K" /> est le milieu de <Math tex="[CD]" /> (question 1) : <Math tex="(KJ)" /> passe par le milieu de <Math tex="[CD]" /> et lui est perpendiculaire, donc{" "}
                  <strong className="text-green-700">(KJ) est la médiatrice de [CD]</strong>. Tout point de cette
                  médiatrice est équidistant de <Math tex="C" /> et <Math tex="D" />, en particulier{" "}
                  <Math tex="JD=JC" /> : <strong className="text-green-700">le triangle JDC est isocèle en J</strong>.
                </p>
                <p>
                  <strong>3)</strong> Dans le triangle <Math tex="ACD" />, <Math tex="I" /> est le milieu de{" "}
                  <Math tex="[AC]" /> et <Math tex="K" /> est le milieu de <Math tex="[CD]" /> (question 1) : par le
                  théorème de la droite des milieux (cas particulier de Thalès), <strong className="text-green-700">(IK) est parallèle à (AD)</strong>.
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2" index={2} title="Deux droites de projection, un même point E"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="ABC" /> un triangle et <Math tex="D,M,N" /> des points tels que{" "}
                  <Math tex="\overrightarrow{DB}=-\tfrac23\overrightarrow{BC}" />,{" "}
                  <Math tex="\overrightarrow{DM}=2\overrightarrow{DA}" />, et{" "}
                  <Math tex="4\overrightarrow{BN}+3\overrightarrow{MB}=\vec 0" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Construire la figure.</li>
                  <li>
                    Montrer que <Math tex="\overrightarrow{MB}=\tfrac43\overrightarrow{AB}+\tfrac23\overrightarrow{AC}" />{" "}
                    et <Math tex="\overrightarrow{NB}=\overrightarrow{AB}+\tfrac12\overrightarrow{AC}" />.
                  </li>
                  <li>
                    Prouver que les points <Math tex="A,C,N" /> sont alignés.
                  </li>
                  <li>
                    Soit <Math tex="E" /> un point de <Math tex="[AB]" />, différent de <Math tex="A" /> et de{" "}
                    <Math tex="B" />. Le point <Math tex="I" /> est le projeté de <Math tex="E" /> sur{" "}
                    <Math tex="(BD)" /> parallèlement à <Math tex="(AD)" />. Le point <Math tex="J" /> est le
                    projeté de <Math tex="E" /> sur <Math tex="(BN)" /> parallèlement à <Math tex="(AN)" />. Prouver
                    que les droites <Math tex="(IJ)" /> et <Math tex="(DN)" /> sont parallèles.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  On travaille dans la base <Math tex="(\overrightarrow{AB},\overrightarrow{AC})" />, en notant{" "}
                  <Math tex="b=\overrightarrow{AB}" /> et <Math tex="c=\overrightarrow{AC}" />.
                </p>
                <p>
                  <strong>2)</strong> De <Math tex="\overrightarrow{DB}=-\tfrac23\overrightarrow{BC}=-\tfrac23(c-b)" /> on tire{" "}
                  <Math tex="\overrightarrow{AD}=\overrightarrow{AB}-\overrightarrow{DB}=b-(-\tfrac23(c-b))=\tfrac13b+\tfrac23c" />.
                  Puis <Math tex="\overrightarrow{DM}=2\overrightarrow{DA}=-2\overrightarrow{AD}=-\tfrac23b-\tfrac43c" />, donc{" "}
                  <Math tex="\overrightarrow{AM}=\overrightarrow{AD}+\overrightarrow{DM}=-\tfrac13b-\tfrac23c" />. D&apos;où{" "}
                  <Math tex="\overrightarrow{MB}=\overrightarrow{AB}-\overrightarrow{AM}=\tfrac43b+\tfrac23c=\tfrac43\overrightarrow{AB}+\tfrac23\overrightarrow{AC}" /> ✓.
                </p>
                <p>
                  De <Math tex="4\overrightarrow{BN}+3\overrightarrow{MB}=\vec0" /> : <Math tex="\overrightarrow{BN}=-\tfrac34\overrightarrow{MB}=-\tfrac34\left(\tfrac43b+\tfrac23c\right)=-b-\tfrac12c" />, donc{" "}
                  <Math tex="\overrightarrow{NB}=-\overrightarrow{BN}=b+\tfrac12c=\overrightarrow{AB}+\tfrac12\overrightarrow{AC}" /> ✓.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="\overrightarrow{AN}=\overrightarrow{AB}+\overrightarrow{BN}=b+\left(-b-\tfrac12c\right)=-\tfrac12c=-\tfrac12\overrightarrow{AC}" />.
                  Ce vecteur est colinéaire à <Math tex="\overrightarrow{AC}" /> : <strong className="text-green-700">A, C, N sont alignés</strong>.
                </p>
                <p>
                  <strong>4)</strong> Posons <Math tex="\overrightarrow{AE}=t\,\overrightarrow{AB}" /> (<Math tex="t\in\,]0,1[" />, car <Math tex="E\in[AB]" />, <Math tex="E\neq A,B" />). Pour la projection sur <Math tex="(BD)" /> parallèlement à <Math tex="(AD)" /> : le projeté de <Math tex="A" /> (point de la droite direction <Math tex="(AD)" />) est <Math tex="D" /> (intersection de <Math tex="(AD)" /> et <Math tex="(BD)" />) ; le projeté de <Math tex="B" /> (déjà sur <Math tex="(BD)" />) est <Math tex="B" /> lui-même. Comme{" "}
                  <Math tex="\overrightarrow{BE}=(1-t)\overrightarrow{BA}" />, la conservation du coefficient donne{" "}
                  <Math tex="\overrightarrow{BI}=(1-t)\overrightarrow{BD}" />.
                </p>
                <p>
                  De même, pour la projection sur <Math tex="(BN)" /> parallèlement à <Math tex="(AN)" /> : le
                  projeté de <Math tex="A" /> est <Math tex="N" /> (intersection de <Math tex="(AN)" /> et{" "}
                  <Math tex="(BN)" />), le projeté de <Math tex="B" /> est <Math tex="B" />. Donc{" "}
                  <Math tex="\overrightarrow{BJ}=(1-t)\overrightarrow{BN}" />.
                </p>
                <p>
                  Par soustraction : <Math tex="\overrightarrow{IJ}=\overrightarrow{BJ}-\overrightarrow{BI}=(1-t)\left(\overrightarrow{BN}-\overrightarrow{BD}\right)=(1-t)\overrightarrow{DN}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="t\neq1" />, <Math tex="\overrightarrow{IJ}" /> est un multiple non nul de{" "}
                  <Math tex="\overrightarrow{DN}" /> : les droites (IJ) et (DN) sont bien parallèles.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3" index={3} title="Triangle isocèle : la somme EM + MD est constante"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="ABC" /> un triangle isocèle en <Math tex="A" /> (<Math tex="AB=AC=a" />) et{" "}
                  <Math tex="M" /> un point de <Math tex="[BC]" />, différent de <Math tex="B" /> et de{" "}
                  <Math tex="C" />. Le point <Math tex="D" /> est le projeté de <Math tex="M" /> sur{" "}
                  <Math tex="(AC)" /> parallèlement à <Math tex="(AB)" />. Le point <Math tex="E" /> est le projeté
                  de <Math tex="M" /> sur <Math tex="(AB)" /> parallèlement à <Math tex="(AC)" />. Montrer que{" "}
                  <Math tex="EM+MD=a" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Par construction, <Math tex="(MD)\parallel(AB)" /> et <Math tex="(ME)\parallel(AC)" />, avec{" "}
                  <Math tex="D\in(AC)" /> et <Math tex="E\in(AB)" /> : le quadrilatère <Math tex="AEMD" /> a ses
                  côtés opposés parallèles deux à deux (<Math tex="AE\parallel DM" /> car tous deux portés par des
                  droites parallèles à <Math tex="(AB)" />, et <Math tex="AD\parallel EM" /> car tous deux portés
                  par des droites parallèles à <Math tex="(AC)" />) : <strong>c&apos;est un parallélogramme</strong>.
                </p>
                <p>
                  Dans un parallélogramme, les côtés opposés sont égaux : <Math tex="EM=AD" /> et{" "}
                  <Math tex="MD=AE" />. Donc <Math tex="EM+MD=AD+AE" />.
                </p>
                <p>
                  Posons <Math tex="x=\dfrac{BM}{BC}\in\,]0,1[" />. En projetant la droite <Math tex="(BC)" /> sur{" "}
                  <Math tex="(AC)" /> parallèlement à <Math tex="(AB)" /> : le projeté de <Math tex="B" /> est{" "}
                  <Math tex="A" /> (car <Math tex="B\in(AB)" />), le projeté de <Math tex="C" /> est{" "}
                  <Math tex="C" /> lui-même. Comme <Math tex="\overrightarrow{BM}=x\overrightarrow{BC}" />, la
                  conservation du coefficient donne <Math tex="\overrightarrow{AD}=x\overrightarrow{AC}" />, donc{" "}
                  <Math tex="AD=x\,a" />.
                </p>
                <p>
                  De même, en projetant <Math tex="(BC)" /> sur <Math tex="(AB)" /> parallèlement à{" "}
                  <Math tex="(AC)" /> : le projeté de <Math tex="B" /> est <Math tex="B" />, celui de{" "}
                  <Math tex="C" /> est <Math tex="A" />. La conservation donne{" "}
                  <Math tex="\overrightarrow{BE}=x\overrightarrow{BA}" />, donc <Math tex="AE=(1-x)\,a" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="EM+MD=AD+AE=xa+(1-x)a=a" />, quel que soit <Math tex="M\in[BC]" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4" index={4} title="Projections de M et N, et du milieu de [MN']"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="ABC" /> un triangle et <Math tex="M,N" /> deux points tels que{" "}
                  <Math tex="\overrightarrow{AN}+2\overrightarrow{AB}=\vec0" /> et{" "}
                  <Math tex="3\overrightarrow{AM}=\overrightarrow{AB}" />. Soient <Math tex="M'" /> et{" "}
                  <Math tex="N'" /> leurs projections sur <Math tex="(AC)" /> parallèlement à <Math tex="(BC)" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="\overrightarrow{NN'}=-2\overrightarrow{BC}" /> et{" "}
                    <Math tex="\overrightarrow{MM'}=\tfrac13\overrightarrow{BC}" />.
                  </li>
                  <li>
                    Déterminer la projection de <Math tex="[MN']" /> sur <Math tex="(AC)" /> parallèlement à{" "}
                    <Math tex="(BC)" />.
                  </li>
                  <li>
                    Soit <Math tex="I" /> le milieu de <Math tex="[MN']" />. Déterminer la projection de{" "}
                    <Math tex="I" /> sur <Math tex="(AC)" /> parallèlement à <Math tex="(BC)" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Notons <Math tex="b=\overrightarrow{AB}" />, <Math tex="c=\overrightarrow{AC}" />. On a{" "}
                  <Math tex="\overrightarrow{AM}=\tfrac13b" /> et <Math tex="\overrightarrow{AN}=-2b" /> : les points{" "}
                  <Math tex="A,M,N,B" /> sont tous alignés sur <Math tex="(AB)" />.
                </p>
                <p>
                  Pour la projection sur <Math tex="(AC)" /> parallèlement à <Math tex="(BC)" /> : <Math tex="A" />{" "}
                  se projette sur lui-même (<Math tex="A\in(AC)" />), et <Math tex="B" /> se projette sur{" "}
                  <Math tex="C" /> (car la parallèle à <Math tex="(BC)" /> passant par <Math tex="B" /> est{" "}
                  <Math tex="(BC)" /> elle-même, qui coupe <Math tex="(AC)" /> en <Math tex="C" />).
                </p>
                <p>
                  Un point <Math tex="X" /> de <Math tex="(AB)" /> avec <Math tex="\overrightarrow{AX}=k\,b" /> se
                  projette donc en <Math tex="X'" /> tel que <Math tex="\overrightarrow{AX'}=k\,c" />.
                </p>
                <p>
                  <strong>1)</strong> <Math tex="M" /> : <Math tex="k=\tfrac13" />, donc{" "}
                  <Math tex="\overrightarrow{AM'}=\tfrac13c" />. <Math tex="N" /> : <Math tex="k=-2" />, donc{" "}
                  <Math tex="\overrightarrow{AN'}=-2c" />.
                </p>
                <p>
                  <Math tex="\overrightarrow{MM'}=\overrightarrow{AM'}-\overrightarrow{AM}=\tfrac13c-\tfrac13b=\tfrac13(c-b)=\tfrac13\overrightarrow{BC}" /> ✓.
                </p>
                <p>
                  <Math tex="\overrightarrow{NN'}=\overrightarrow{AN'}-\overrightarrow{AN}=-2c-(-2b)=-2(c-b)=-2\overrightarrow{BC}" /> ✓.
                </p>
                <p>
                  <strong>2)</strong> Comme <Math tex="N'" /> est déjà sur <Math tex="(AC)" />, il est son propre
                  projeté. La projection de <Math tex="M" /> est <Math tex="M'" />. Donc{" "}
                  <strong className="text-green-700">la projection de [MN′] est le segment [M′N′]</strong>.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="I" /> milieu de <Math tex="[MN']" /> signifie{" "}
                  <Math tex="\overrightarrow{MI}=\tfrac12\overrightarrow{MN'}" /> : d&apos;après la conservation du
                  coefficient, le projeté de <Math tex="I" /> est le milieu de <Math tex="[M'N']" />, c&apos;est-à-dire
                  le point <Math tex="P" /> tel que{" "}
                  <Math tex="\overrightarrow{AP}=\tfrac12\left(\overrightarrow{AM'}+\overrightarrow{AN'}\right)=\tfrac12\left(\tfrac13c-2c\right)=-\tfrac56\,c" />.
                </p>
                <p className="font-semibold text-green-700">
                  La projection de I est le point P défini par <Math tex="\overrightarrow{AP}=-\tfrac56\overrightarrow{AC}" /> (le milieu de [M′N′]).
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5" index={5} title="Construction : projeter, translater, comparer des longueurs"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="(D)" /> et <Math tex="(\Delta)" /> deux droites sécantes ; <Math tex="A" /> et{" "}
                  <Math tex="B" /> deux points distincts, n&apos;appartenant pas à <Math tex="(D)" />, tels que{" "}
                  <Math tex="(AB)" /> ne soit parallèle ni à <Math tex="(D)" /> ni à <Math tex="(\Delta)" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Construire <Math tex="A'" /> et <Math tex="B'" />, projetés respectifs de <Math tex="A" /> et{" "}
                    <Math tex="B" /> sur <Math tex="(D)" /> parallèlement à <Math tex="(\Delta)" />.
                  </li>
                  <li>
                    Construire <Math tex="C" /> tel que <Math tex="\overrightarrow{AC}=\overrightarrow{A'B'}" />.
                  </li>
                  <li>
                    Construire <Math tex="H" />, le projeté orthogonal de <Math tex="A" /> sur <Math tex="(BB')" />.
                    Quel est le projeté du segment <Math tex="[AH]" /> sur <Math tex="(D)" /> parallèlement à{" "}
                    <Math tex="(\Delta)" /> ? Déterminer un point <Math tex="E" /> tel que le segment{" "}
                    <Math tex="[A'B']" /> soit le projeté de <Math tex="[AE]" />, avec <Math tex="AE>A'B'" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> On trace la parallèle à <Math tex="(\Delta)" /> passant par <Math tex="A" />,
                  elle coupe <Math tex="(D)" /> en <Math tex="A'" />. On fait de même par <Math tex="B" /> pour
                  obtenir <Math tex="B'" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="C" /> est le translaté de <Math tex="A" /> par le vecteur{" "}
                  <Math tex="\overrightarrow{A'B'}" /> : le quadrilatère <Math tex="AA'B'C" /> est un
                  parallélogramme (car <Math tex="\overrightarrow{AC}=\overrightarrow{A'B'}" /> équivaut à{" "}
                  <Math tex="\overrightarrow{AA'}=\overrightarrow{CB'}" />).
                </p>
                <p>
                  <strong>3)</strong> Par construction, <Math tex="B'" /> est le projeté de <Math tex="B" /> sur{" "}
                  <Math tex="(D)" /> parallèlement à <Math tex="(\Delta)" />, ce qui signifie exactement que{" "}
                  <Math tex="(BB')\parallel(\Delta)" />. Or <Math tex="H\in(BB')" />, donc la parallèle à{" "}
                  <Math tex="(\Delta)" /> passant par <Math tex="H" /> est la droite <Math tex="(BB')" />{" "}
                  elle-même, qui coupe <Math tex="(D)" /> en <Math tex="B'" /> : <strong>le projeté de H est aussi B′</strong>.
                </p>
                <p>
                  Comme <Math tex="A" /> se projette en <Math tex="A'" /> et <Math tex="H" /> se projette en{" "}
                  <Math tex="B'" />, <strong className="text-green-700">
                    le projeté du segment [AH] sur (D) parallèlement à (Δ) est le segment [A′B′]
                  </strong>.
                </p>
                <p>
                  Plus généralement, <strong>tout</strong> point de la droite <Math tex="(BB')" /> se projette en{" "}
                  <Math tex="B'" /> (puisque <Math tex="(BB')\parallel(\Delta)" /> tout entière). Il suffit donc de
                  choisir <Math tex="E" /> sur la droite <Math tex="(BB')" />, avec <Math tex="AE>A'B'" /> : comme{" "}
                  <Math tex="AH" /> est la distance minimale de <Math tex="A" /> à la droite <Math tex="(BB')" />{" "}
                  (H est le pied de la perpendiculaire), tout point <Math tex="E\in(BB')" /> suffisamment éloigné de{" "}
                  <Math tex="H" /> (par exemple <Math tex="E=B" /> lui-même, ou un point plus lointain encore)
                  vérifie <Math tex="AE>AH" />, et l&apos;on peut toujours en choisir un avec{" "}
                  <Math tex="AE>A'B'" /> : sa projection reste <Math tex="[A'B']" />, quelle que soit sa position
                  sur <Math tex="(BB')" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6" index={6} title="Quatre points équidistants et deux droites parallèles"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient <Math tex="A,B,C,D" /> quatre points du plan tels que <Math tex="C" /> soit le milieu de{" "}
                  <Math tex="[BD]" /> et <Math tex="B" /> le milieu de <Math tex="[AC]" />. Soit <Math tex="E" />{" "}
                  un point tel que <Math tex="E\notin(AB)" />. La droite passant par <Math tex="D" /> et parallèle à{" "}
                  <Math tex="(CE)" /> coupe <Math tex="(BE)" /> en <Math tex="B'" />. La droite passant par{" "}
                  <Math tex="A" /> et parallèle à <Math tex="(BE)" /> coupe <Math tex="(CE)" /> en <Math tex="C'" />{" "}
                  et coupe <Math tex="(DB')" /> en <Math tex="F" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Calculer <Math tex="\dfrac{DB'}{DF}" /> et <Math tex="\dfrac{FC'}{FA}" />.
                  </li>
                  <li>
                    Montrer que <Math tex="(B'C')" /> et <Math tex="(AD)" /> sont parallèles.
                  </li>
                  <li>
                    Déduire la valeur de <Math tex="\dfrac{C'B'}{AD}" />.
                  </li>
                  <li>
                    Montrer que <Math tex="\dfrac{EB}{EC}=\dfrac{FA}{FD}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  De <Math tex="B" /> milieu de <Math tex="[AC]" /> : <Math tex="\overrightarrow{AB}=\overrightarrow{BC}" />.
                  De <Math tex="C" /> milieu de <Math tex="[BD]" /> : <Math tex="\overrightarrow{BC}=\overrightarrow{CD}" />.
                  Donc <Math tex="\overrightarrow{AB}=\overrightarrow{BC}=\overrightarrow{CD}" /> : les points{" "}
                  <Math tex="A,B,C,D" /> sont régulièrement espacés sur une droite. On pose{" "}
                  <Math tex="u=\overrightarrow{AB}" />, d&apos;où <Math tex="A=0" />, <Math tex="B=u" />,{" "}
                  <Math tex="C=2u" />, <Math tex="D=3u" /> (repérage sur cette droite), et{" "}
                  <Math tex="e=\overrightarrow{AE}" />.
                </p>
                <p>
                  <strong>Projection sur (BE) parallèlement à (CE)</strong> — droites sécantes en <Math tex="E" /> :
                  le projeté de <Math tex="C" /> (sur la droite direction) est <Math tex="E" />, celui de{" "}
                  <Math tex="B" /> (déjà sur la cible) est <Math tex="B" />. Comme <Math tex="\overrightarrow{BD}=2\overrightarrow{BC}" />, la conservation donne <Math tex="\overrightarrow{BB'}=2\overrightarrow{BE}" />, donc <Math tex="B'=2E-B=2e-u" /> (soit <Math tex="E" /> milieu de <Math tex="[BB']" />).
                </p>
                <p>
                  <strong>Projection sur (CE) parallèlement à (BE)</strong> : de même,{" "}
                  <Math tex="\overrightarrow{CA}=2\overrightarrow{CB}" /> donne <Math tex="\overrightarrow{CC'}=2\overrightarrow{CE}" />, donc <Math tex="C'=2E-C=2e-2u" /> (E milieu de [CC′]).
                </p>
                <p>
                  <strong>1)</strong> La droite <Math tex="(AC')" /> a pour direction <Math tex="e-u" /> (elle passe
                  par <Math tex="A=0" /> et <Math tex="C'=2(e-u)" />). En intersectant avec <Math tex="(DB')" />{" "}
                  (de <Math tex="D=3u" /> vers <Math tex="B'=2e-u" />), on trouve <Math tex="F=3(e-u)" />. D&apos;où :
                </p>
                <p>
                  <Math tex="\overrightarrow{DB'}=B'-D=2e-4u=2(e-2u)" /> et{" "}
                  <Math tex="\overrightarrow{DF}=F-D=3e-6u=3(e-2u)" />, donc{" "}
                  <strong className="text-green-700"><Math tex="\dfrac{DB'}{DF}=\dfrac23" /></strong>.
                </p>
                <p>
                  <Math tex="\overrightarrow{FC'}=C'-F=-(e-u)" /> et <Math tex="\overrightarrow{FA}=A-F=-3(e-u)" />,
                  donc <strong className="text-green-700"><Math tex="\dfrac{FC'}{FA}=\dfrac13" /></strong>.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="\overrightarrow{B'C'}=C'-B'=-u" /> et{" "}
                  <Math tex="\overrightarrow{AD}=D-A=3u" /> : ces deux vecteurs sont colinéaires, donc{" "}
                  <strong className="text-green-700">(B′C′) est parallèle à (AD)</strong>.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="\overrightarrow{C'B'}=u=\tfrac13\overrightarrow{AD}" />, donc{" "}
                  <strong className="text-green-700"><Math tex="\dfrac{C'B'}{AD}=\dfrac13" /></strong>.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="\overrightarrow{FA}=A-F=-3(e-u)=3\big(u-e\big)=3\,\overrightarrow{EB}" />{" "}
                  (car <Math tex="\overrightarrow{EB}=B-E=u-e" />). De même,{" "}
                  <Math tex="\overrightarrow{FD}=D-F=3u-3(e-u)=3(2u-e)=3\,\overrightarrow{EC}" /> (car{" "}
                  <Math tex="\overrightarrow{EC}=C-E=2u-e" />).
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="FA=3\,EB" /> et <Math tex="FD=3\,EC" />, d&apos;où <Math tex="\dfrac{EB}{EC}=\dfrac{FA}{FD}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7" index={7} title="Trois points définis par des relations vectorielles, alignés"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="ABC" /> un triangle et <Math tex="E,F,G" /> des points tels que{" "}
                  <Math tex="\overrightarrow{EB}=-2\overrightarrow{EC}" />,{" "}
                  <Math tex="3\overrightarrow{FA}+2\overrightarrow{FC}=\vec0" />, et{" "}
                  <Math tex="\overrightarrow{GB}=3\overrightarrow{GA}" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Construire les points <Math tex="E,F,G" />.
                  </li>
                  <li>
                    En utilisant la projection, montrer que les points <Math tex="E,F,G" /> sont alignés.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  On travaille dans la base <Math tex="(\overrightarrow{AB},\overrightarrow{AC})=(b,c)" />.
                </p>
                <p>
                  <strong>Position de E</strong> : <Math tex="\overrightarrow{EB}=-2\overrightarrow{EC}" /> montre
                  que <Math tex="E" />, <Math tex="B" />, <Math tex="C" /> sont alignés (vecteurs colinéaires de
                  même origine <Math tex="E" />) : <Math tex="E\in(BC)" />. En résolvant :{" "}
                  <Math tex="\overrightarrow{AE}=\tfrac13b+\tfrac23c" />.
                </p>
                <p>
                  <strong>Position de F</strong> : <Math tex="3\overrightarrow{FA}+2\overrightarrow{FC}=\vec0" />{" "}
                  donne <Math tex="\overrightarrow{AF}=\tfrac25c" /> — F est sur la droite <Math tex="(AC)" />.
                </p>
                <p>
                  <strong>Position de G</strong> : <Math tex="\overrightarrow{GB}=3\overrightarrow{GA}" /> donne{" "}
                  <Math tex="\overrightarrow{AG}=-\tfrac12b" /> — G est sur la droite <Math tex="(AB)" />.
                </p>
                <p>
                  <strong>2)</strong> Projetons tout sur la droite <Math tex="(AC)" /> parallèlement à{" "}
                  <Math tex="(AB)" /> : <Math tex="F" /> (déjà sur <Math tex="(AC)" />) reste fixe ; le projeté de{" "}
                  <Math tex="G" /> (sur <Math tex="(AB)" />, donc parallèlement à elle-même) est <Math tex="A" />.
                  Comme <Math tex="A,B,C,E" /> sont liés par <Math tex="\overrightarrow{AE}=\tfrac13\overrightarrow{AB}+\tfrac23\overrightarrow{AC}" />, on décompose <Math tex="E" /> comme le point obtenu en partant de <Math tex="G" /> avec un coefficient <Math tex="\tfrac23" /> vers <Math tex="F" /> composé au reste — plus directement, un calcul vectoriel direct conclut :
                </p>
                <p>
                  <Math tex="\overrightarrow{EF}=\overrightarrow{AF}-\overrightarrow{AE}=\tfrac25c-\left(\tfrac13b+\tfrac23c\right)=-\tfrac13b-\tfrac4{15}c" />.
                </p>
                <p>
                  <Math tex="\overrightarrow{EG}=\overrightarrow{AG}-\overrightarrow{AE}=-\tfrac12b-\left(\tfrac13b+\tfrac23c\right)=-\tfrac56b-\tfrac23c" />.
                </p>
                <p>
                  On vérifie que <Math tex="\overrightarrow{EF}=\tfrac25\,\overrightarrow{EG}" /> (coefficient sur{" "}
                  <Math tex="b" /> : <Math tex="\tfrac25\times\left(-\tfrac56\right)=-\tfrac13" /> ✓ ; coefficient
                  sur <Math tex="c" /> : <Math tex="\tfrac25\times\left(-\tfrac23\right)=-\tfrac4{15}" /> ✓).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\overrightarrow{EF}" /> et <Math tex="\overrightarrow{EG}" /> sont colinéaires : les
                  points E, F, G sont alignés.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
