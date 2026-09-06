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
  title: "Géométrie dans l'espace · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet de géométrie dans l'espace : axiomes, positions relatives de deux droites, d'une droite et d'un plan, de deux plans, parallélisme et orthogonalité dans l'espace, formulaire des solides usuels, avec 3 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 2.",
  kicker: "Tronc Commun Sciences · Semestre 2",
  heroTitle: "Géométrie dans l'espace",
  heroSubtitle:
    "Droites et plans de l'espace : positions relatives, parallélisme et orthogonalité — le cours complet, puis 3 exercices corrigés en détail.",
  footerNote: "Géométrie dans l'espace · Mathématiques, Tronc Commun Sciences et Technologies, semestre 2.",
  sections: [
    { id: "cours-positions", label: "Positions relatives" },
    { id: "cours-parallelisme", label: "Parallélisme" },
    { id: "cours-orthogonalite", label: "Orthogonalité" },
    { id: "cours-formulaire", label: "Formulaire" },
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

/** A plane, drawn with the universal "shaded parallelogram" convention. */
function PlaneSVG({
  points,
  fill = "#0ea5e9",
  label,
  labelPos,
}: {
  points: string;
  fill?: string;
  label?: string;
  labelPos?: [number, number];
}) {
  return (
    <>
      <polygon points={points} fill={fill} fillOpacity="0.12" stroke={fill} strokeWidth="1.6" />
      {label && labelPos ? (
        <text x={labelPos[0]} y={labelPos[1]} fontSize="13" fontStyle="italic" fill={fill} fontWeight="700">
          {label}
        </text>
      ) : null}
    </>
  );
}

/** Small labelled mini-figure used inside a 3-column "cases" grid. */
function CaseCard({ title, svg, caption }: { title: string; svg: ReactNode; caption: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground-muted">{title}</p>
      <div className="flex justify-center">{svg}</div>
      <p className="mt-2 text-sm text-foreground">{caption}</p>
    </div>
  );
}

/** Box used for axioms / properties, matching the college convention. */
const BOX_STYLES = {
  def: { wrap: "border-l-4 border-orange-400 bg-orange-100/50", title: "text-orange-700" },
  prop: { wrap: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5", title: "text-brand-700" },
  thm: { wrap: "border-l-4 border-green-500 bg-green-100/50", title: "text-green-700" },
} as const;

function Box({ title, tone, children }: { title: string; tone: keyof typeof BOX_STYLES; children: ReactNode }) {
  const s = BOX_STYLES[tone];
  return (
    <div className={`rounded-r-xl p-4 text-sm sm:text-base ${s.wrap}`}>
      <p className={`mb-1 font-semibold ${s.title}`}>{title}</p>
      <div className="text-foreground-muted">{children}</div>
    </div>
  );
}

function FigureBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface-muted p-4">
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
          { value: "3", label: "familles de positions" },
          { value: "3", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-positions"
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
          <svg viewBox="0 0 220 170" className="h-56 w-56 text-white sm:h-64 sm:w-64">
            {/* Cube en perspective cavalière, un seul sommet caché (arrière-bas-gauche). */}
            <polygon points="95,140 175,140 175,60 95,60" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1.4" strokeDasharray="4 3" />
            <line x1="30" y1="160" x2="95" y2="140" stroke="white" strokeWidth="1.4" strokeDasharray="4 3" />
            <polygon points="30,160 110,160 110,80 30,80" fill="white" fillOpacity="0.14" stroke="white" strokeWidth="2" />
            <line x1="110" y1="160" x2="175" y2="140" stroke="white" strokeWidth="2" />
            <line x1="30" y1="80" x2="95" y2="60" stroke="white" strokeWidth="2" />
            <line x1="110" y1="80" x2="175" y2="60" stroke="white" strokeWidth="2" />
          </svg>
        }
      />

      {/* ===================== I. POSITIONS RELATIVES ===================== */}
      <LessonSection
        id="cours-positions"
        kicker="01 · Le vocabulaire de l'espace"
        title="Axiomes et positions relatives"
        tone="light"
        description="Dans l'espace, deux droites peuvent être sécantes, parallèles, ou même ne se rencontrer jamais sans être parallèles : c'est la grande nouveauté par rapport à la géométrie plane."
      >
        <CourseBlock numeral="I" title="Les axiomes de l'espace">
          <p className="text-sm text-foreground-muted">
            L&apos;espace usuel est noté <Math tex="\mathcal E" />. Toutes les propriétés de la géométrie plane
            restent valables dans chaque plan <Math tex="\mathcal P" /> de <Math tex="\mathcal E" />.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Axiome 1" tone="def">
              Par deux points distincts <Math tex="A" /> et <Math tex="B" /> de <Math tex="\mathcal E" /> passe une
              et une seule droite, notée <Math tex="(AB)" />.
            </Box>
            <Box title="Axiome 2" tone="def">
              Par trois points non alignés de <Math tex="\mathcal E" /> passe un plan et un seul, noté{" "}
              <Math tex="(ABC)" />.
            </Box>
            <Box title="Axiome 3" tone="def">
              Si <Math tex="A" /> et <Math tex="B" /> sont deux points distincts d&apos;un plan <Math tex="\mathcal P" />
              , alors la droite <Math tex="(AB)" /> est incluse dans <Math tex="\mathcal P" /> :{" "}
              <Math tex="(AB)\subset \mathcal P" />.
            </Box>
            <Box title="Axiome 4" tone="def">
              Si deux plans distincts <Math tex="\mathcal P" /> et <Math tex="\mathcal P'" /> ont un point{" "}
              <Math tex="A" /> commun, alors ils se coupent suivant une droite passant par <Math tex="A" />.
            </Box>
          </div>
          <Callout variant="success" title="Détermination d'un plan">
            <p>Un plan est déterminé de façon unique par :</p>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              <li>
                une droite <Math tex="\mathcal D" /> et un point <Math tex="A\notin\mathcal D" /> ;
              </li>
              <li>trois points non alignés ;</li>
              <li>
                deux droites <Math tex="\mathcal D" /> et <Math tex="\mathcal D'" /> sécantes ;
              </li>
              <li>
                deux droites <Math tex="\mathcal D" /> et <Math tex="\mathcal D'" /> strictement parallèles.
              </li>
            </ol>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Positions relatives de deux droites de l'espace">
          <p className="text-sm text-foreground-muted">
            Soient <Math tex="\mathcal D" /> et <Math tex="\mathcal D'" /> deux droites de l&apos;espace. Trois cas
            sont possibles.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <CaseCard
              title="Sécantes"
              caption={
                <>
                  <Math tex="\mathcal D\cap\mathcal D'=\{I\}" /> : coplanaires, un seul point commun.
                </>
              }
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <ArrowDefs id="ge1" />
                  <line x1="15" y1="90" x2="125" y2="30" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#ge1)" />
                  <line x1="15" y1="30" x2="125" y2="90" stroke="#e11d48" strokeWidth="2" markerEnd="url(#ge1)" />
                  <circle cx="70" cy="60" r="3" fill="currentColor" />
                  <text x="76" y="54" fontSize="12" fontWeight="700">I</text>
                </svg>
              }
            />
            <CaseCard
              title="Parallèles"
              caption={
                <>
                  <Math tex="\mathcal D /\!/ \mathcal D'" /> : coplanaires, disjointes (ou confondues).
                </>
              }
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <ArrowDefs id="ge2" />
                  <line x1="15" y1="35" x2="125" y2="35" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#ge2)" />
                  <line x1="15" y1="80" x2="125" y2="80" stroke="#e11d48" strokeWidth="2" markerEnd="url(#ge2)" />
                </svg>
              }
            />
            <CaseCard
              title="Non coplanaires"
              caption={
                <>
                  <Math tex="\mathcal D" /> et <Math tex="\mathcal D'" /> gauches : aucun plan ne les contient
                  toutes les deux.
                </>
              }
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <ArrowDefs id="ge3" />
                  <PlaneSVG points="10,80 70,95 130,60 70,45" fill="#94a3b8" />
                  <line x1="20" y1="30" x2="100" y2="10" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#ge3)" />
                  <line x1="40" y1="100" x2="120" y2="70" stroke="#e11d48" strokeWidth="2" markerEnd="url(#ge3)" />
                </svg>
              }
            />
          </div>
        </CourseBlock>

        <CourseBlock numeral="III" title="Positions relatives d'une droite et d'un plan">
          <div className="grid gap-4 sm:grid-cols-3">
            <CaseCard
              title="Incluse"
              caption={
                <>
                  <Math tex="\mathcal D\subset\mathcal P" />
                </>
              }
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <ArrowDefs id="ge4" />
                  <PlaneSVG points="10,80 70,95 130,60 70,45" fill="#0ea5e9" />
                  <line x1="25" y1="70" x2="115" y2="65" stroke="#e11d48" strokeWidth="2" markerEnd="url(#ge4)" />
                </svg>
              }
            />
            <CaseCard
              title="Strictement parallèles"
              caption={
                <>
                  <Math tex="\mathcal D /\!/ \mathcal P" />, <Math tex="\mathcal D\cap\mathcal P=\varnothing" />
                </>
              }
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <ArrowDefs id="ge5" />
                  <PlaneSVG points="10,90 70,100 130,75 70,65" fill="#0ea5e9" />
                  <line x1="25" y1="40" x2="115" y2="30" stroke="#e11d48" strokeWidth="2" markerEnd="url(#ge5)" />
                </svg>
              }
            />
            <CaseCard
              title="Sécants"
              caption={
                <>
                  <Math tex="\mathcal D\cap\mathcal P=\{I\}" />
                </>
              }
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <ArrowDefs id="ge6" />
                  <PlaneSVG points="10,80 70,95 130,60 70,45" fill="#0ea5e9" />
                  <line x1="30" y1="20" x2="100" y2="100" stroke="#e11d48" strokeWidth="2" markerEnd="url(#ge6)" />
                  <circle cx="63" cy="73" r="3" fill="currentColor" />
                  <text x="68" y="70" fontSize="12" fontWeight="700">I</text>
                </svg>
              }
            />
          </div>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Positions relatives de deux plans">
          <div className="grid gap-4 sm:grid-cols-3">
            <CaseCard
              title="Confondus"
              caption={<Math tex="\mathcal P=\mathcal P'" />}
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <PlaneSVG points="10,80 70,95 130,60 70,45" fill="#0ea5e9" />
                </svg>
              }
            />
            <CaseCard
              title="Strictement parallèles"
              caption={<Math tex="\mathcal P /\!/ \mathcal P'" />}
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <PlaneSVG points="10,45 70,58 130,28 70,15" fill="#0ea5e9" />
                  <PlaneSVG points="10,95 70,108 130,78 70,65" fill="#e11d48" />
                </svg>
              }
            />
            <CaseCard
              title="Sécants"
              caption={
                <>
                  <Math tex="\mathcal P\cap\mathcal P'=\mathcal D" />
                </>
              }
              svg={
                <svg viewBox="0 0 140 110" className="h-24 w-32">
                  <ArrowDefs id="ge7" />
                  <PlaneSVG points="15,30 125,30 105,90 -5,90" fill="#0ea5e9" />
                  <PlaneSVG points="70,10 135,55 70,100 5,55" fill="#e11d48" />
                  <line x1="27" y1="35" x2="88" y2="83" stroke="currentColor" strokeWidth="2.4" markerEnd="url(#ge7)" />
                </svg>
              }
            />
          </div>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PARALLÉLISME ===================== */}
      <LessonSection
        id="cours-parallelisme"
        kicker="02 · Le parallélisme dans l'espace"
        title="Parallélisme de droites et de plans"
        tone="muted"
        description="Les trois mêmes idées reviennent à chaque fois : transitivité, un unique parallèle par un point, et le passage par des droites/plans intermédiaires."
      >
        <CourseBlock numeral="V" title="A. Deux droites parallèles">
          <Box title="Définition" tone="def">
            Deux droites <Math tex="\mathcal D" /> et <Math tex="\mathcal D'" /> de l&apos;espace sont{" "}
            <strong className="text-foreground">parallèles</strong> (<Math tex="\mathcal D /\!/ \mathcal D'" />)
            si et seulement si elles sont coplanaires et disjointes, ou confondues.
          </Box>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriétés</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                Par un point <Math tex="O" /> de l&apos;espace passe une et une seule droite parallèle à une droite{" "}
                <Math tex="\mathcal D" /> donnée.
              </li>
              <li>
                Si <Math tex="\mathcal D /\!/ \mathcal D'" /> et <Math tex="\Delta /\!/ \mathcal D" />, alors{" "}
                <Math tex="\Delta /\!/ \mathcal D'" /> (transitivité).
              </li>
              <li>
                Si <Math tex="\Delta /\!/ \mathcal D" /> et <Math tex="\Delta /\!/ \mathcal D'" />, alors{" "}
                <Math tex="\mathcal D /\!/ \mathcal D'" />.
              </li>
            </ol>
          </div>
        </CourseBlock>

        <CourseBlock numeral="VI" title="B. Droite parallèle à un plan">
          <Box title="Définition" tone="def">
            Une droite <Math tex="\mathcal D" /> est <strong className="text-foreground">parallèle</strong> à un
            plan <Math tex="\mathcal P" /> (<Math tex="\mathcal D /\!/ \mathcal P" />) si et seulement si{" "}
            <Math tex="\mathcal D\subset\mathcal P" />, ou <Math tex="\mathcal D\cap\mathcal P=\varnothing" />.
          </Box>
          <Callout variant="success" title="Propriété (la plus utilisée en pratique)">
            <Math tex="\mathcal D /\!/ \mathcal P" /> si et seulement s&apos;il existe une droite{" "}
            <Math tex="\mathcal D'" /> incluse dans <Math tex="\mathcal P" /> telle que{" "}
            <Math tex="\mathcal D /\!/ \mathcal D'" />.
          </Callout>
          <Figure
            text={
              <p>
                Autrement dit : pour montrer qu&apos;une droite est parallèle à un plan, il suffit de trouver{" "}
                <strong>une seule droite du plan</strong> qui lui est parallèle.
              </p>
            }
            svg={
              <svg viewBox="0 0 200 140" className="h-auto w-full max-w-[220px] text-neutral-700">
                <ArrowDefs id="ge8" />
                <PlaneSVG points="15,110 100,125 185,80 100,65" fill="#0ea5e9" label="P" labelPos={[95, 118]} />
                <line x1="35" y1="95" x2="150" y2="90" stroke="#0ea5e9" strokeWidth="1.8" markerEnd="url(#ge8)" />
                <text x="152" y="86" fontSize="12" fontStyle="italic" fill="#0ea5e9">D&apos;</text>
                <line x1="30" y1="30" x2="145" y2="25" stroke="#e11d48" strokeWidth="2" markerEnd="url(#ge8)" />
                <text x="147" y="21" fontSize="12" fontStyle="italic" fill="#e11d48">D</text>
              </svg>
            }
          />
        </CourseBlock>

        <CourseBlock numeral="VII" title="C. Deux plans parallèles">
          <Box title="Définition" tone="def">
            Deux plans <Math tex="\mathcal P" /> et <Math tex="\mathcal P'" /> sont{" "}
            <strong className="text-foreground">parallèles</strong> (<Math tex="\mathcal P /\!/ \mathcal P'" />) si
            et seulement s&apos;ils sont confondus, ou disjoints.
          </Box>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriétés</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                Par un point <Math tex="O" /> passe un unique plan parallèle à un plan donné.
              </li>
              <li>
                Transitivité : si <Math tex="\mathcal P /\!/ \mathcal P'" /> et <Math tex="\mathcal Q /\!/ \mathcal P" />
                , alors <Math tex="\mathcal Q /\!/ \mathcal P'" />.
              </li>
              <li>
                <strong className="text-foreground">Critère très utilisé :</strong> <Math tex="\mathcal P" /> et{" "}
                <Math tex="\mathcal P'" /> sont parallèles si l&apos;un des deux contient{" "}
                <strong>deux droites sécantes</strong> chacune parallèle au second plan.
              </li>
            </ol>
          </div>
          <Callout variant="warning" title="Propriétés de recoupement">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\mathcal P /\!/ \mathcal P'" /> et une droite <Math tex="\mathcal D" /> coupe{" "}
                <Math tex="\mathcal P" /> en <Math tex="I" />, alors <Math tex="\mathcal D" /> coupe aussi{" "}
                <Math tex="\mathcal P'" />.
              </li>
              <li>
                Si <Math tex="\mathcal P /\!/ \mathcal P'" /> et un plan <Math tex="\mathcal Q" /> coupe{" "}
                <Math tex="\mathcal P" /> suivant <Math tex="\Delta" />, alors <Math tex="\mathcal Q" /> coupe{" "}
                <Math tex="\mathcal P'" /> suivant une droite <Math tex="\Delta'" /> avec{" "}
                <Math tex="\Delta /\!/ \Delta'" /> (<strong>théorème du toit</strong>).
              </li>
              <li>
                Si <Math tex="\mathcal D /\!/ \mathcal P" /> et <Math tex="\mathcal D /\!/ \mathcal P'" />, et si{" "}
                <Math tex="\mathcal P" /> et <Math tex="\mathcal P'" /> sont sécants suivant <Math tex="\Delta" />
                , alors <Math tex="\mathcal D /\!/ \Delta" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. ORTHOGONALITÉ ===================== */}
      <LessonSection
        id="cours-orthogonalite"
        kicker="03 · L'orthogonalité dans l'espace"
        title="Orthogonalité de droites et de plans"
        tone="light"
        description="Le résultat-clé : une droite est orthogonale à un plan dès qu'elle est orthogonale à deux droites sécantes de ce plan — inutile de vérifier toutes les droites du plan."
      >
        <CourseBlock numeral="VIII" title="A. Orthogonalité de deux droites">
          <Box title="Définition" tone="def">
            <Math tex="\mathcal D" /> et <Math tex="\Delta" /> sont <strong className="text-foreground">orthogonales</strong>
            {" "}(<Math tex="\mathcal D\perp\Delta" />) si et seulement s&apos;il existe deux droites{" "}
            <Math tex="\mathcal D'" /> et <Math tex="\Delta'" /> sécantes en un point <Math tex="A" />, telles que{" "}
            <Math tex="\mathcal D' /\!/ \mathcal D" /> et <Math tex="\Delta' /\!/ \Delta" />, et{" "}
            <Math tex="\mathcal D'\perp\Delta'" /> (au sens usuel du plan).
          </Box>
          <Callout variant="info" title="Remarque">
            Deux droites orthogonales ne sont pas nécessairement sécantes : elles peuvent être{" "}
            <strong>non coplanaires</strong> (orthogonales « à distance »), c&apos;est là toute la différence avec
            la géométrie plane.
          </Callout>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriétés</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\mathcal D\perp\mathcal D'" /> et <Math tex="\Delta /\!/ \mathcal D" />, alors{" "}
                <Math tex="\Delta\perp\mathcal D'" />.
              </li>
              <li>
                Si <Math tex="\mathcal D /\!/ \mathcal D'" /> et <Math tex="\Delta\perp\mathcal D" />, alors{" "}
                <Math tex="\Delta\perp\mathcal D'" />.
              </li>
            </ul>
          </div>
        </CourseBlock>

        <CourseBlock numeral="IX" title="B. Orthogonalité d'une droite et d'un plan">
          <Box title="Définition" tone="def">
            Une droite <Math tex="\mathcal D" /> est <strong className="text-foreground">orthogonale</strong> à un
            plan <Math tex="\mathcal P" /> (<Math tex="\mathcal D\perp\mathcal P" />) si et seulement si{" "}
            <Math tex="\mathcal D" /> est orthogonale à <strong>toute droite</strong> <Math tex="\Delta" /> de{" "}
            <Math tex="\mathcal P" />.
          </Box>
          <Callout variant="success" title="Propriété 1 — le critère pratique">
            <Math tex="\mathcal D\perp\mathcal P" /> si et seulement si <Math tex="\mathcal D" /> est orthogonale à{" "}
            <strong>deux droites sécantes</strong> de <Math tex="\mathcal P" />.
          </Callout>
          <Figure
            text={
              <>
                <p>
                  Il suffit donc de vérifier l&apos;orthogonalité avec deux droites sécantes du plan (pas toutes !)
                  pour conclure que <Math tex="\mathcal D" /> est orthogonale au plan tout entier.
                </p>
                <div className="rounded-xl border border-border bg-surface-muted p-3 text-sm">
                  <p className="font-semibold text-foreground-muted">Propriétés 2 et 3</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Si <Math tex="\mathcal D /\!/ \mathcal D'" /> et <Math tex="\mathcal P\perp\mathcal D" />,
                      alors <Math tex="\mathcal P\perp\mathcal D'" />.
                    </li>
                    <li>
                      Si <Math tex="\mathcal P /\!/ \mathcal P'" /> et <Math tex="\mathcal D\perp\mathcal P" />,
                      alors <Math tex="\mathcal D\perp\mathcal P'" />.
                    </li>
                  </ul>
                </div>
              </>
            }
            svg={
              <svg viewBox="0 0 200 160" className="h-auto w-full max-w-[220px] text-neutral-700">
                <ArrowDefs id="ge9" />
                <PlaneSVG points="20,120 100,135 180,90 100,75" fill="#0ea5e9" />
                <line x1="35" y1="105" x2="130" y2="100" stroke="#0ea5e9" strokeWidth="1.6" markerEnd="url(#ge9)" />
                <line x1="55" y1="130" x2="150" y2="88" stroke="#0ea5e9" strokeWidth="1.6" markerEnd="url(#ge9)" />
                <line x1="100" y1="107" x2="100" y2="15" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#ge9)" />
                <circle cx="100" cy="107" r="3" fill="currentColor" />
                <text x="106" y="112" fontSize="12" fontWeight="700">A</text>
                <text x="104" y="26" fontSize="13" fontStyle="italic" fill="#e11d48">D</text>
              </svg>
            }
          />
          <Callout variant="warning" title="Remarque">
            Par un point de l&apos;espace passe un unique plan orthogonal à une droite donnée, et une unique droite
            orthogonale à un plan donné. (Mais il est <strong>faux</strong> de dire que par un point passe une
            unique droite orthogonale à une droite donnée : il en existe une infinité, formant tout un plan.)
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="X" title="C. Orthogonalité de deux plans">
          <Box title="Définition" tone="def">
            Deux plans <Math tex="\mathcal P" /> et <Math tex="\mathcal P'" /> sont{" "}
            <strong className="text-foreground">orthogonaux</strong> (<Math tex="\mathcal P\perp\mathcal P'" />)
            si et seulement si l&apos;un des deux contient une droite orthogonale à l&apos;autre.
          </Box>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriétés</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\mathcal P" /> et <Math tex="\mathcal P'" /> sont orthogonaux à une même droite,
                alors <Math tex="\mathcal P /\!/ \mathcal P'" />.
              </li>
              <li>
                Si <Math tex="\mathcal P /\!/ \mathcal P'" /> : tout plan (ou toute droite) orthogonal à l&apos;un
                l&apos;est aussi à l&apos;autre.
              </li>
              <li>
                Tout plan orthogonal à deux plans sécants suivant <Math tex="\mathcal D" /> est orthogonal à{" "}
                <Math tex="\mathcal D" />.
              </li>
            </ul>
          </div>
        </CourseBlock>
      </LessonSection>

      {/* ===================== FORMULAIRE ===================== */}
      <LessonSection
        id="cours-formulaire"
        kicker="04 · Mémo"
        title="Formulaire des solides usuels"
        tone="muted"
        description="Les aires et volumes des solides de référence, à connaître pour les exercices de synthèse."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-display font-bold text-foreground">Cube (arête a)</p>
            <p className="mt-2"><Math tex="S_L=4a^2 \qquad S_T=6a^2 \qquad V=a^3" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-display font-bold text-foreground">Parallélépipède rectangle</p>
            <p className="mt-1 text-xs text-foreground-muted">Longueur L, largeur l, hauteur h</p>
            <p className="mt-2"><Math tex="S_L=2(L+l)h \qquad S_T=S_L+2Ll \qquad V=L\,l\,h" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-display font-bold text-foreground">Prisme droit</p>
            <p className="mt-1 text-xs text-foreground-muted">Hauteur h, périmètre de base P_B, aire de base S_B</p>
            <p className="mt-2"><Math tex="S_L=P_B\times h \qquad V=S_B\times h" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-display font-bold text-foreground">Cylindre droit</p>
            <p className="mt-1 text-xs text-foreground-muted">Rayon R, hauteur h</p>
            <p className="mt-2"><Math tex="S_L=2\pi R h \qquad V=\pi R^2 h" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-display font-bold text-foreground">Pyramide (sommet S)</p>
            <p className="mt-1 text-xs text-foreground-muted">Hauteur h, aire de base S_B</p>
            <p className="mt-2"><Math tex="V=\dfrac13\,S_B\times h" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-display font-bold text-foreground">Cône de révolution</p>
            <p className="mt-1 text-xs text-foreground-muted">Rayon R, hauteur h</p>
            <p className="mt-2"><Math tex="V=\dfrac13\pi R^2 h" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm sm:col-span-2 lg:col-span-1">
            <p className="font-display font-bold text-foreground">Sphère (rayon R)</p>
            <p className="mt-2"><Math tex="V=\dfrac43\pi R^3" /></p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Géométrie dans l'espace"
        tone="light"
        description="3 exercices corrigés (les distances sont exprimées en cm)."
      >
        <ExerciseGroup total={3} celebrationTitle="Bravo, les 3 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la géométrie dans l'espace.">
          <ExerciseCard
            id="1"
            index={1}
            title="Pyramide sur base carrée : orthogonalité et parallélisme"
            items={
              <Figure
                text={
                  <>
                    <p>
                      <Math tex="ABCD" /> est un carré et <Math tex="S" /> un point de l&apos;espace
                      n&apos;appartenant pas au plan <Math tex="(ABCD)" />, tel que <Math tex="SAB" /> et{" "}
                      <Math tex="SAD" /> sont des triangles rectangles en <Math tex="A" />, avec{" "}
                      <Math tex="AB=8" /> et <Math tex="SA=6" />.
                    </p>
                    <p>
                      <strong>1) a)</strong> Montrer que <Math tex="(SA)" /> est perpendiculaire à{" "}
                      <Math tex="(ABCD)" />.
                      <br />
                      <strong>b)</strong> Calculer les distances <Math tex="AC" /> et <Math tex="SC" />.
                    </p>
                    <p>
                      <strong>2)</strong> Soit <Math tex="\Delta" /> la droite passant par <Math tex="S" /> et
                      parallèle à <Math tex="(AB)" />.
                      <br />
                      <strong>a)</strong> Montrer que les droites <Math tex="(DC)" /> et <Math tex="\Delta" /> sont
                      parallèles.
                      <br />
                      <strong>b)</strong> En déduire l&apos;intersection des plans <Math tex="(SAB)" /> et{" "}
                      <Math tex="(SDC)" />.
                    </p>
                  </>
                }
                svg={
                  <FigureBox>
                    <svg viewBox="0 0 220 220" className="w-full max-w-[220px]">
                      {/* Base ABCD (parallélogramme perspective, D caché) + S à l'aplomb de A. */}
                      <polygon points="40,190 140,190 175,150 75,150" fill="#eef2ff" fillOpacity="0.5" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="75" y1="150" x2="175" y2="150" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="40" y1="190" x2="75" y2="150" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="40" y1="190" x2="140" y2="190" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="140" y1="190" x2="175" y2="150" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="40" y1="190" x2="40" y2="40" stroke="#f97316" strokeWidth="2.4" />
                      <line x1="40" y1="40" x2="140" y2="190" stroke="#4338ca" strokeWidth="2" />
                      <line x1="40" y1="40" x2="175" y2="150" stroke="#4338ca" strokeWidth="2" />
                      <line x1="40" y1="40" x2="75" y2="150" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <text x="14" y="30" fontSize="13" fontWeight="700">S</text>
                      <text x="20" y="208" fontSize="13" fontWeight="700">A</text>
                      <text x="144" y="208" fontSize="13" fontWeight="700">B</text>
                      <text x="60" y="146" fontSize="13" fontWeight="700">D</text>
                      <text x="180" y="148" fontSize="13" fontWeight="700">C</text>
                    </svg>
                  </FigureBox>
                }
              />
            }
            correction={
              <>
                <p>
                  <strong>1) a)</strong> <Math tex="(AB)" /> et <Math tex="(AD)" /> sont deux droites{" "}
                  <strong>sécantes</strong> en <Math tex="A" />, toutes deux incluses dans le plan{" "}
                  <Math tex="(ABCD)" />. Comme <Math tex="SAB" /> est rectangle en <Math tex="A" />,{" "}
                  <Math tex="(SA)\perp(AB)" /> ; comme <Math tex="SAD" /> est rectangle en <Math tex="A" />,{" "}
                  <Math tex="(SA)\perp(AD)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(SA)" /> est orthogonale à deux droites sécantes du plan <Math tex="(ABCD)" />,
                  donc <Math tex="(SA)\perp(ABCD)" />.
                </p>
                <p>
                  <strong>b)</strong> <Math tex="ABCD" /> est un carré de côté <Math tex="8" />, donc{" "}
                  <Math tex="AC=AB\sqrt2=8\sqrt2" /> cm.
                </p>
                <p>
                  Comme <Math tex="(SA)\perp(ABCD)" />, <Math tex="(SA)\perp(AC)" /> (car <Math tex="(AC)" /> est
                  une droite du plan <Math tex="(ABCD)" />) : le triangle <Math tex="SAC" /> est rectangle en{" "}
                  <Math tex="A" />, donc <Math tex="SC^2=SA^2+AC^2=6^2+(8\sqrt2)^2=36+128=164" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="AC=8\sqrt2" /> cm <Math tex="\approx11{,}31" /> cm, et{" "}
                  <Math tex="SC=\sqrt{164}=2\sqrt{41}" /> cm <Math tex="\approx12{,}81" /> cm.
                </p>
                <p>
                  <strong>2) a)</strong> <Math tex="ABCD" /> est un carré, donc <Math tex="(DC) /\!/ (AB)" />. Par
                  définition, <Math tex="\Delta /\!/ (AB)" />. Deux droites parallèles à une même troisième droite
                  sont parallèles entre elles :
                </p>
                <p className="font-semibold text-green-700">
                  donc <Math tex="(DC) /\!/ \Delta" />.
                </p>
                <p>
                  <strong>b)</strong> <Math tex="\Delta" /> passe par <Math tex="S" /> et est parallèle à{" "}
                  <Math tex="(AB)\subset(SAB)" /> : comme <Math tex="S\in(SAB)" />, <Math tex="\Delta" /> est la
                  droite du plan <Math tex="(SAB)" /> passant par <Math tex="S" /> et parallèle à <Math tex="(AB)" />
                  {" "}(unicité de la parallèle), donc <Math tex="\Delta\subset(SAB)" />.
                </p>
                <p>
                  De même, <Math tex="\Delta /\!/ (DC)" /> avec <Math tex="(DC)\subset(SDC)" /> et{" "}
                  <Math tex="S\in(SDC)" /> : donc <Math tex="\Delta\subset(SDC)" />.
                </p>
                <p>
                  <Math tex="\Delta" /> est donc une droite commune aux deux plans <Math tex="(SAB)" /> et{" "}
                  <Math tex="(SDC)" />, qui sont distincts et ont le point <Math tex="S" /> en commun : d&apos;après
                  l&apos;axiome 4, leur intersection est une droite unique passant par <Math tex="S" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="(SAB)\cap(SDC)=\Delta" />, la droite passant par <Math tex="S" /> et
                  parallèle à <Math tex="(AB)" /> et <Math tex="(DC)" /> (théorème du toit).
                </p>
              </>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Parallélépipède ABCDEFGH : distances, orthogonalité et volumes"
            items={
              <Figure
                text={
                  <>
                    <p>
                      <Math tex="ABCDEFGH" /> est un parallélépipède rectangle avec <Math tex="AB=10" />,{" "}
                      <Math tex="AD=25" /> et <Math tex="AE=7" /> (en cm).
                    </p>
                    <p>
                      <strong>1) a)</strong> Calculer la distance <Math tex="BD" />.
                      <br />
                      <strong>b)</strong> Montrer que la droite <Math tex="(DH)" /> est perpendiculaire au plan{" "}
                      <Math tex="(ABCD)" />.
                      <br />
                      <strong>c)</strong> En déduire que le triangle <Math tex="BDH" /> est rectangle en{" "}
                      <Math tex="D" />.
                      <br />
                      <strong>d)</strong> Calculer <Math tex="BH" />.
                    </p>
                    <p>
                      <strong>2)</strong> Soit <Math tex="P" /> le périmètre de la base <Math tex="EFGH" /> et{" "}
                      <Math tex="S" /> sa surface.
                      <br />
                      <strong>a)</strong> Calculer <Math tex="P" /> et <Math tex="S" />.
                      <br />
                      <strong>b)</strong> Donner l&apos;expression de la surface latérale <Math tex="S_L" /> et de
                      la surface totale <Math tex="S_T" /> du parallélépipède, puis les calculer.
                      <br />
                      <strong>c)</strong> Donner l&apos;expression du volume <Math tex="V_1" /> du
                      parallélépipède, puis le calculer.
                      <br />
                      <strong>d)</strong> Donner l&apos;expression du volume <Math tex="V_2" /> de la pyramide{" "}
                      <Math tex="DEFGH" />, puis le calculer.
                    </p>
                  </>
                }
                svg={
                  <FigureBox>
                    <svg viewBox="0 0 210 170" className="w-full max-w-[210px]">
                      {/* Pavé droit ABCDEFGH, un seul sommet caché (D, arrière-bas-gauche). */}
                      <polygon points="75,110 165,110 165,30 75,30" fill="#c7d2fe" fillOpacity="0.3" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="35" y1="130" x2="75" y2="110" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <polygon points="35,130 130,130 130,50 35,50" fill="#eef2ff" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="130" y1="130" x2="165" y2="110" stroke="#4338ca" strokeWidth="2" />
                      <line x1="35" y1="50" x2="75" y2="30" stroke="#4338ca" strokeWidth="2" />
                      <line x1="130" y1="50" x2="165" y2="30" stroke="#4338ca" strokeWidth="2" />
                      <text x="20" y="146" fontSize="12" fontWeight="700">A</text>
                      <text x="134" y="146" fontSize="12" fontWeight="700">B</text>
                      <text x="65" y="126" fontSize="12" fontWeight="700">D</text>
                      <text x="170" y="118" fontSize="12" fontWeight="700">C</text>
                      <text x="20" y="42" fontSize="12" fontWeight="700">E</text>
                      <text x="134" y="42" fontSize="12" fontWeight="700">F</text>
                      <text x="65" y="24" fontSize="12" fontWeight="700">H</text>
                      <text x="170" y="26" fontSize="12" fontWeight="700">G</text>
                    </svg>
                  </FigureBox>
                }
              />
            }
            correction={
              <>
                <p>
                  <strong>1) a)</strong> <Math tex="ABCD" /> est un rectangle avec <Math tex="AB=10" />,{" "}
                  <Math tex="AD=25" />, donc <Math tex="BD^2=AB^2+AD^2=100+625=725" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="BD=\sqrt{725}=5\sqrt{29}" /> cm <Math tex="\approx26{,}93" /> cm.
                </p>
                <p>
                  <strong>b)</strong> <Math tex="(DH)" /> est une arête verticale du pavé : <Math tex="(DH)\perp(DA)" />
                  {" "}et <Math tex="(DH)\perp(DC)" /> (faces rectangles). Or <Math tex="(DA)" /> et{" "}
                  <Math tex="(DC)" /> sont deux droites sécantes en <Math tex="D" />, incluses dans{" "}
                  <Math tex="(ABCD)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="(DH)" /> est orthogonale à deux droites sécantes de <Math tex="(ABCD)" /> :{" "}
                  <Math tex="(DH)\perp(ABCD)" />.
                </p>
                <p>
                  <strong>c)</strong> <Math tex="(DH)\perp(ABCD)" /> et <Math tex="(DB)\subset(ABCD)" />, donc{" "}
                  <Math tex="(DH)\perp(DB)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc le triangle <Math tex="BDH" /> est rectangle en <Math tex="D" />.
                </p>
                <p>
                  <strong>d)</strong> <Math tex="DH=AE=7" /> (arêtes opposées du parallélépipède), donc dans le
                  triangle rectangle <Math tex="BDH" /> : <Math tex="BH^2=BD^2+DH^2=725+49=774" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="BH=\sqrt{774}=3\sqrt{86}" /> cm <Math tex="\approx27{,}82" /> cm.
                </p>
                <p>
                  <strong>2) a)</strong> <Math tex="EFGH" /> est un rectangle de côtés <Math tex="EF=AB=10" /> et{" "}
                  <Math tex="FG=AD=25" />, donc <Math tex="P=2(10+25)=70" /> cm et{" "}
                  <Math tex="S=10\times25=250" /> cm².
                </p>
                <p>
                  <strong>b)</strong> <Math tex="S_L=2(L+l)h=P\times h=70\times7=490" /> cm² ; puis{" "}
                  <Math tex="S_T=S_L+2S=490+2\times250=990" /> cm².
                </p>
                <p>
                  <strong>c)</strong> <Math tex="V_1=L\times l\times h=AB\times AD\times AE=10\times25\times7=1750" />
                  {" "}cm³.
                </p>
                <p>
                  <strong>d)</strong> La pyramide <Math tex="DEFGH" /> a pour base <Math tex="EFGH" /> (aire{" "}
                  <Math tex="S=250" /> cm²) et pour hauteur la distance de <Math tex="D" /> au plan{" "}
                  <Math tex="(EFGH)" />, qui vaut <Math tex="AE=7" /> (plans <Math tex="(ABCD)" /> et{" "}
                  <Math tex="(EFGH)" /> parallèles, distants de <Math tex="AE" />) :
                </p>
                <p>
                  <Math tex="V_2=\dfrac13\times S\times AE=\dfrac13\times250\times7=\dfrac{1750}{3}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="V_2=\dfrac{1750}{3}\approx583{,}33" /> cm³ (soit exactement{" "}
                  <Math tex="\dfrac{V_1}{3}" />).
                </p>
              </>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Pyramide SABCD : triangles rectangles, distances et volume d'un tronc"
            items={
              <Figure
                text={
                  <>
                    <p>
                      La figure représente une pyramide <Math tex="SABCD" /> de hauteur{" "}
                      <Math tex="h=SH=12" /> telle que <Math tex="(SH)\perp(ABCD)" />, avec{" "}
                      <Math tex="H\in[AC]" /> et de base un carré <Math tex="ABCD" /> de côté <Math tex="a=5" />.{" "}
                      <Math tex="K" /> est un point de <Math tex="[SH]" /> tel que <Math tex="h'=KH=4" />. (Distances
                      en cm.)
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>
                        Montrer que chacun des triangles <Math tex="SHA" />, <Math tex="SHB" />, <Math tex="SHC" />
                        {" "}et <Math tex="SHD" /> est rectangle en <Math tex="H" />.
                      </li>
                      <li>
                        Calculer la distance <Math tex="AC" />. En déduire <Math tex="BD" />.
                      </li>
                      <li>
                        Sachant que <Math tex="AH=\sqrt2" />, calculer la distance <Math tex="SA" />, en déduire{" "}
                        <Math tex="SC" />.
                      </li>
                      <li>
                        Sachant que <Math tex="\widehat{SBH}=60\degree" />, calculer la distance <Math tex="BH" />
                        {" "}puis <Math tex="SB" />.
                      </li>
                      <li>
                        Calculer <Math tex="V_1" /> le volume de la pyramide <Math tex="SABCD" />, puis{" "}
                        <Math tex="V_2" /> le volume de la pyramide <Math tex="KABCD" />.
                      </li>
                      <li>
                        Calculer <Math tex="V_3" /> le volume du solide obtenu en enlevant de la pyramide{" "}
                        <Math tex="SABCD" /> la pyramide (plus petite, semblable) découpée par le plan parallèle à{" "}
                        <Math tex="(ABCD)" /> passant par <Math tex="K" />.
                      </li>
                    </ol>
                  </>
                }
                svg={
                  <FigureBox>
                    <svg viewBox="0 0 220 200" className="w-full max-w-[220px]">
                      {/* Base ABCD (parallélogramme perspective, D caché), H sur [AC] intérieur, K sur [SH]. */}
                      <polygon points="30,170 150,170 190,140 70,140" fill="#eef2ff" fillOpacity="0.5" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="70" y1="140" x2="190" y2="140" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="30" y1="170" x2="70" y2="140" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="30" y1="170" x2="150" y2="170" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="150" y1="170" x2="190" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="110" y1="30" x2="30" y2="170" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="110" y1="30" x2="150" y2="170" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="110" y1="30" x2="190" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="110" y1="30" x2="70" y2="140" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="110" y1="30" x2="98" y2="152" stroke="#f97316" strokeWidth="2" strokeDasharray="4 3" />
                      <circle cx="98" cy="152" r="3" fill="#f97316" />
                      <circle cx="110" cy="82" r="3" fill="#16a34a" />
                      <text x="98" y="20" fontSize="13" fontWeight="700">S</text>
                      <text x="114" y="80" fontSize="12" fontWeight="700" fill="#16a34a">K</text>
                      <text x="12" y="188" fontSize="13" fontWeight="700">A</text>
                      <text x="154" y="188" fontSize="13" fontWeight="700">B</text>
                      <text x="60" y="136" fontSize="13" fontWeight="700">D</text>
                      <text x="195" y="138" fontSize="13" fontWeight="700">C</text>
                      <text x="88" y="168" fontSize="12" fontWeight="700" fill="#f97316">H</text>
                    </svg>
                  </FigureBox>
                }
              />
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> <Math tex="(SH)\perp(ABCD)" /> : la droite <Math tex="(SH)" /> est donc
                  orthogonale à <strong>toute</strong> droite du plan <Math tex="(ABCD)" />, en particulier à{" "}
                  <Math tex="(HA)" />, <Math tex="(HB)" />, <Math tex="(HC)" /> et <Math tex="(HD)" /> (car{" "}
                  <Math tex="H,A,B,C,D" /> sont tous dans ce plan).
                </p>
                <p className="font-semibold text-green-700">
                  Donc chacun des triangles <Math tex="SHA" />, <Math tex="SHB" />, <Math tex="SHC" />,{" "}
                  <Math tex="SHD" /> est rectangle en <Math tex="H" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="ABCD" /> est un carré de côté <Math tex="5" />, donc{" "}
                  <Math tex="AC=5\sqrt2" /> cm. Les diagonales d&apos;un carré sont égales :{" "}
                  <strong className="text-green-700"><Math tex="BD=AC=5\sqrt2" /> cm.</strong>
                </p>
                <p>
                  <strong>3)</strong> Le triangle <Math tex="SHA" /> est rectangle en <Math tex="H" /> :{" "}
                  <Math tex="SA^2=SH^2+AH^2=12^2+(\sqrt2)^2=144+2=146" />, donc{" "}
                  <strong className="text-green-700"><Math tex="SA=\sqrt{146}" /> cm <Math tex="\approx12{,}08" /> cm.</strong>
                </p>
                <p>
                  Comme <Math tex="H\in[AC]" />, <Math tex="HC=AC-AH=5\sqrt2-\sqrt2=4\sqrt2" />. Dans le triangle
                  rectangle <Math tex="SHC" /> : <Math tex="SC^2=SH^2+HC^2=144+(4\sqrt2)^2=144+32=176" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="SC=\sqrt{176}=4\sqrt{11}" /> cm <Math tex="\approx13{,}27" /> cm.
                </p>
                <p>
                  <strong>4)</strong> Dans le triangle <Math tex="SHB" /> rectangle en <Math tex="H" /> :{" "}
                  <Math tex="\tan(\widehat{SBH})=\dfrac{SH}{BH}" />, donc{" "}
                  <Math tex="BH=\dfrac{SH}{\tan60\degree}=\dfrac{12}{\sqrt3}=4\sqrt3" /> cm{" "}
                  <Math tex="\approx6{,}93" /> cm.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="SB=\dfrac{SH}{\sin60\degree}=\dfrac{12}{\sqrt3/2}=8\sqrt3" /> cm{" "}
                  <Math tex="\approx13{,}86" /> cm (on vérifie : <Math tex="SB^2=SH^2+BH^2=144+48=192=(8\sqrt3)^2" />
                  ).
                </p>
                <p>
                  <strong>5)</strong> Aire de la base : <Math tex="a^2=5^2=25" /> cm². Donc{" "}
                  <Math tex="V_1=\dfrac13\times25\times12=100" /> cm³.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="V_1=100" /> cm³. Comme <Math tex="(SH)\perp(ABCD)" /> et <Math tex="K\in[SH]" />, la
                  hauteur de <Math tex="K" /> au-dessus de <Math tex="(ABCD)" /> vaut <Math tex="KH=4" />, donc{" "}
                  <Math tex="V_2=\dfrac13\times25\times4=\dfrac{100}{3}\approx33{,}33" /> cm³.
                </p>
                <p>
                  <strong>6)</strong> Le plan parallèle à <Math tex="(ABCD)" /> passant par <Math tex="K" /> découpe
                  une pyramide réduite, semblable à <Math tex="SABCD" />, de sommet <Math tex="S" /> et de hauteur{" "}
                  <Math tex="SK=SH-KH=12-4=8" />. Le rapport de réduction est{" "}
                  <Math tex="k=\dfrac{SK}{SH}=\dfrac{8}{12}=\dfrac23" />.
                </p>
                <p>
                  Le volume de cette petite pyramide vaut <Math tex="k^3\times V_1=\left(\dfrac23\right)^3\times100=\dfrac{8}{27}\times100=\dfrac{800}{27}" />
                  {" "}cm³.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="V_3=V_1-\dfrac{800}{27}=100-\dfrac{800}{27}=\dfrac{2700-800}{27}=\dfrac{1900}{27}\approx70{,}37" />
                  {" "}cm³.
                </p>
              </>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
