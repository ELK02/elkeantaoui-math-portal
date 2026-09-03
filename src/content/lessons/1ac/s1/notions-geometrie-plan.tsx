import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Notions de Géométrie du Plan · Cours et exercices corrigés | 1AC",
  description:
    "Cours illustré sur le plan, le point, la droite, la demi-droite, le segment et le milieu, avec 12 exercices corrigés en détail, figures à l'appui. 1ère année collège, semestre 1.",
  kicker: "1ʳᵉ Année Collège · Chapitre 9",
  heroTitle: "Géométrie du plan",
  heroSubtitle:
    "Le plan, le point, la droite, la demi-droite, le segment et le milieu : les bases, en images, avec 12 exercices corrigés.",
  footerNote: "Notions de géométrie du plan · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "plan", label: "Le plan" },
    { id: "point", label: "Le point" },
    { id: "droite", label: "La droite" },
    { id: "demidroite", label: "Demi-droite" },
    { id: "segment", label: "Segment" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Helpers ===================== */

/** Point cross-mark (×), matching the figure convention: top-left corner (x,y), 10×10 box. */
function PointCross({ x, y, w = 10, strokeWidth = 2 }: { x: number; y: number; w?: number; strokeWidth?: number }) {
  return (
    <path d={`M${x},${y} L${x + w},${y + w} M${x},${y + w} L${x + w},${y}`} stroke="#0f172a" strokeWidth={strokeWidth} />
  );
}

/** Italic serif label used for point/line names inside figures. */
function FigLabel({
  x,
  y,
  children,
  fontSize = 15,
  fill = "#0f172a",
  fontWeight,
  textAnchor,
}: {
  x: number;
  y: number;
  children: ReactNode;
  fontSize?: number;
  fill?: string;
  fontWeight?: string;
  textAnchor?: "start" | "middle" | "end";
}) {
  return (
    <text x={x} y={y} fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontSize={fontSize} fill={fill} fontWeight={fontWeight} textAnchor={textAnchor}>
      {children}
    </text>
  );
}

/** Small square right-angle marker. */
function RightAngle({ x, y, size = 11, rotate }: { x: number; y: number; size?: number; rotate?: string }) {
  return (
    <rect x={x} y={y} width={size} height={size} fill="none" stroke="#0f172a" strokeWidth={1.2} transform={rotate} />
  );
}

function Fig({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`overflow-x-auto rounded-xl border border-border bg-surface p-4 ${className}`}>{children}</div>;
}

function FigCaption({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-center text-sm text-foreground-muted">{children}</p>;
}

/** Small rose notation chip, e.g. "A ≠ B" or "A ∈ (D)". */
function Notation({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded border border-rose-300 bg-rose-50 px-2 py-0.5 font-mono font-semibold text-rose-700">
      {children}
    </span>
  );
}

/** Rose "definition" box used throughout the course. */
function DefBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-5 text-sm leading-relaxed text-rose-900 sm:text-base">
      {children}
    </div>
  );
}

function PropCard({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface-muted p-6">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
          {index}
        </span>
        <h4 className="font-display text-sm font-bold text-foreground">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function Rule({ children }: { children: ReactNode }) {
  return <blockquote className="rounded-lg border-l-4 border-rose-400 bg-rose-50 p-3 text-xs text-rose-900 sm:text-sm">{children}</blockquote>;
}

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "6", label: "notions clés" },
          { value: "12", label: "exercices corrigés" },
          { value: "40+", label: "figures illustrées" },
        ]}
        ctas={
          <>
            <a
              href="#plan"
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
          <svg viewBox="0 0 220 140" className="h-40 w-56" aria-hidden="true">
            <line x1="20" y1="110" x2="200" y2="30" stroke="white" strokeOpacity={0.6} strokeWidth={2} />
            <path d="M55,70 L65,80 M55,80 L65,70" stroke="white" strokeWidth={2} />
            <path d="M155,45 L165,55 M155,55 L165,45" stroke="white" strokeWidth={2} />
            <text x="45" y="62" fill="white" fontFamily="Georgia, serif" fontStyle="italic" fontSize="16">A</text>
            <text x="168" y="42" fill="white" fontFamily="Georgia, serif" fontStyle="italic" fontSize="16">B</text>
          </svg>
        }
      />

      {/* ===================== I. LE PLAN ===================== */}
      <LessonSection id="plan" kicker="01 · La scène de la géométrie" title="Le plan" tone="light" description="La surface sur laquelle vivent tous les objets de la géométrie.">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="mb-4 font-display font-bold text-foreground">1. Définition</h3>
            <DefBox>
              <p><strong>Le plan</strong> est une surface infinie sur laquelle on trace : les points, les droites, les demi-droites, les segments, ainsi que toutes les figures géométriques.</p>
              <p className="mt-3">On dit aussi que <strong>le plan est un ensemble de points</strong>.</p>
            </DefBox>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="mb-4 font-display font-bold text-foreground">2. Représentation</h3>
            <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
              Le plan peut être représenté en classe par <strong className="text-foreground">le tableau</strong> et par <strong className="text-foreground">la feuille</strong> de notre cahier de géométrie.
            </p>
            <div className="mt-4 flex gap-3">
              <span className="rounded-lg border border-border bg-surface-muted px-3 py-1.5 text-sm">Le tableau</span>
              <span className="rounded-lg border border-border bg-surface-muted px-3 py-1.5 text-sm">La feuille</span>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. LE POINT ===================== */}
      <LessonSection id="point" kicker="02 · Le point" title="Les figures géométriques usuelles · Le point" tone="light" description="L'élément le plus simple de la géométrie.">
        <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
          <ul className="list-inside list-disc space-y-2 text-sm text-foreground-muted sm:text-base">
            <li>Le point est l&apos;élément le plus simple de la géométrie.</li>
            <li>Un point est représenté le plus souvent par une croix <span className="font-mono font-bold">(×)</span>.</li>
            <li>Un point peut porter un nom comme : <span className="font-semibold italic">A, B, C, D, ...</span></li>
            <li><strong className="text-foreground">Deux points distincts</strong> sont deux points différents et ne portent jamais le même nom.</li>
            <li><strong className="text-foreground">Deux points confondus</strong> sont deux points égaux et représentent le même point.</li>
          </ul>

          <p className="mt-6 font-mono text-xs font-semibold text-foreground-muted uppercase">** Exemples</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Fig>
              <svg viewBox="0 0 200 120" className="mx-auto h-auto w-full max-w-xs">
                <PointCross x={55} y={25} />
                <FigLabel x={47} y={18}>A</FigLabel>
                <PointCross x={135} y={80} />
                <FigLabel x={147} y={78}>B</FigLabel>
              </svg>
              <FigCaption>Soient <em>A</em> et <em>B</em> deux points distincts. On écrit : <Notation>A ≠ B</Notation></FigCaption>
            </Fig>
            <Fig>
              <svg viewBox="0 0 200 120" className="mx-auto h-auto w-full max-w-xs">
                <PointCross x={95} y={55} />
                <FigLabel x={80} y={48}>A</FigLabel>
                <FigLabel x={107} y={80}>B</FigLabel>
              </svg>
              <FigCaption>Soient <em>A</em> et <em>B</em> deux points confondus. On écrit : <Notation>A = B</Notation></FigCaption>
            </Fig>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. LA DROITE ===================== */}
      <LessonSection id="droite" kicker="03 · La droite" title="La droite" tone="light" description="Une ligne droite illimitée des deux côtés, et tout ce qu'on peut dire de deux ou trois droites entre elles.">
        <h3 className="mb-4 font-display text-xl font-bold text-foreground">a) Qu&apos;est-ce qu&apos;une droite ?</h3>
        <div className="mb-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <ul className="list-inside list-disc space-y-2 text-sm text-foreground-muted sm:text-base">
              <li>La droite est une ligne droite illimitée des deux côtés.</li>
              <li>Pour tracer une droite on utilise la règle.</li>
              <li>Une droite peut porter un nom comme : <span className="italic">(D), (Δ), (D′), (Δ′), (L), (L′), ...</span></li>
            </ul>
            <p className="mt-5 font-mono text-xs font-semibold text-foreground-muted uppercase">** Exemple</p>
            <svg viewBox="0 0 260 150" className="mx-auto mt-2 h-auto w-full max-w-sm">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="40" y1="120" x2="150" y2="20" />
                <line x1="170" y1="130" x2="230" y2="30" />
              </g>
              <FigLabel x={150} y={15}>(D)</FigLabel>
              <FigLabel x={228} y={25}>(Δ)</FigLabel>
            </svg>
            <FigCaption>Soient (D) et (Δ) deux droites.</FigCaption>
          </div>

          <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
            <p className="mb-2 font-mono text-xs font-semibold text-foreground-muted uppercase">** Vocabulaire</p>
            <p className="mb-4 text-sm text-foreground-muted">On considère la figure ci-contre telle que : (D) une droite et A, B deux points distincts.</p>
            <svg viewBox="0 0 300 140" className="mx-auto h-auto w-full max-w-sm">
              <line x1="20" y1="110" x2="280" y2="40" stroke="#0f172a" strokeWidth={2} />
              <FigLabel x={262} y={30}>(D)</FigLabel>
              <PointCross x={158} y={66.5} />
              <FigLabel x={163} y={60}>A</FigLabel>
              <PointCross x={85} y={110} />
              <FigLabel x={90} y={132}>B</FigLabel>
            </svg>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li>Le point A se trouve <strong>sur</strong> la droite (D) : on dit que A <strong className="text-foreground">appartient</strong> à (D). On écrit : <Notation>A ∈ (D)</Notation></li>
              <li>Le point B est à <strong>l&apos;extérieur</strong> de (D) : on dit que B <strong className="text-foreground">n&apos;appartient pas</strong> à (D). On écrit : <Notation>B ∉ (D)</Notation></li>
            </ul>
            <p className="mt-3 text-xs text-foreground-muted">∈ signifie « appartient à » · ∉ signifie « n&apos;appartient pas à »</p>
          </div>
        </div>

        <h3 className="mb-4 font-display text-xl font-bold text-foreground">b) Propriétés</h3>
        <div className="mb-10 grid gap-4 lg:grid-cols-2">
          <PropCard index={1} title="Propriété 1">
            <Rule>Par deux points distincts passe <strong>une et une seule droite</strong>.</Rule>
            <p className="mt-4 text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
            <svg viewBox="0 0 260 120" className="mx-auto mt-1 h-auto w-full max-w-sm">
              <line x1="212.8" y1="19.8" x2="67.2" y2="85.3" stroke="#0f172a" strokeWidth={2} />
              <PointCross x={185} y={25} />
              <FigLabel x={196} y={24}>A</FigLabel>
              <PointCross x={85} y={70} />
              <FigLabel x={70} y={68}>B</FigLabel>
            </svg>
            <FigCaption>Cette droite porte le nom (AB) ou (BA).</FigCaption>
          </PropCard>

          <PropCard index={2} title="Propriété 2">
            <Rule>Par un point passe <strong>une infinité de droites</strong>.</Rule>
            <p className="mt-4 text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
            <svg viewBox="0 0 240 200" className="mx-auto mt-1 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={1.5} opacity={0.85}>
                <line x1="35.8" y1="88.2" x2="204.2" y2="111.8" />
                <line x1="46.8" y1="56.9" x2="193.2" y2="143.1" />
                <line x1="68.8" y1="32.1" x2="171.2" y2="167.9" />
                <line x1="98.7" y1="17.7" x2="141.3" y2="182.3" />
                <line x1="131.8" y1="15.8" x2="108.2" y2="184.2" />
                <line x1="163.1" y1="26.8" x2="76.9" y2="173.2" />
                <line x1="187.9" y1="48.8" x2="52.1" y2="151.2" />
                <line x1="202.3" y1="78.7" x2="37.7" y2="121.3" />
              </g>
              <PointCross x={115} y={95} strokeWidth={2.2} />
              <FigLabel x={127} y={98}>A</FigLabel>
            </svg>
            <FigCaption>Par le point A passent une infinité de droites (plusieurs droites).</FigCaption>
          </PropCard>
        </div>

        <h3 className="mb-4 font-display text-xl font-bold text-foreground">c) Points alignés</h3>
        <div className="mb-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-2">
            <DefBox><strong>Les points alignés</strong> sont des points qui appartiennent à une même droite.</DefBox>
          </div>
          <div className="rounded-2xl border border-border bg-surface-muted p-6">
            <svg viewBox="0 0 260 100" className="mx-auto h-auto w-full max-w-sm">
              <line x1="5.8" y1="89.8" x2="244.2" y2="10.3" stroke="#0f172a" strokeWidth={2} />
              <PointCross x={15} y={80} /><FigLabel x={8} y={76}>A</FigLabel>
              <PointCross x={105} y={50} /><FigLabel x={108} y={45}>B</FigLabel>
              <PointCross x={225} y={10} /><FigLabel x={228} y={30}>C</FigLabel>
            </svg>
            <p className="mt-1 text-center text-sm font-medium text-green-700">A, B et C sont des points alignés</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface-muted p-6">
            <svg viewBox="0 0 260 100" className="mx-auto h-auto w-full max-w-sm">
              <line x1="18.3" y1="72.5" x2="231.7" y2="27.5" stroke="#0f172a" strokeWidth={2} />
              <PointCross x={25} y={65} /><FigLabel x={18} y={62}>E</FigLabel>
              <PointCross x={215} y={25} /><FigLabel x={218} y={45}>F</FigLabel>
              <PointCross x={185} y={10} /><FigLabel x={188} y={8}>G</FigLabel>
            </svg>
            <p className="mt-1 text-center text-sm font-medium text-rose-600">E, F et G ne sont pas des points alignés</p>
          </div>
        </div>

        <h3 className="mb-4 font-display text-xl font-bold text-foreground">d) Positions de deux droites</h3>
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h4 className="mb-2 font-display font-bold text-foreground">Droites sécantes</h4>
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">Deux droites sécantes sont deux droites qui n&apos;ont qu&apos;<strong>un seul point commun</strong>.</div>
            <svg viewBox="0 0 260 140" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="40" y1="30" x2="220" y2="110" />
                <line x1="40" y1="110" x2="220" y2="30" />
              </g>
              <FigLabel x={226} y={106} fontSize={14}>(D)</FigLabel>
              <FigLabel x={226} y={34} fontSize={14}>(Δ)</FigLabel>
              <PointCross x={125} y={65} /><FigLabel x={136} y={63}>A</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">(D) et (Δ) sécantes en A</p>
            <p className="mt-3 text-xs text-foreground-muted">A est le <strong>point d&apos;intersection</strong>. Deux droites sécantes sont distinctes.</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h4 className="mb-2 font-display font-bold text-foreground">Droites confondues</h4>
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">Deux droites confondues sont deux droites qui ont <strong>plus d&apos;un point commun</strong>.</div>
            <svg viewBox="0 0 260 140" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <line x1="30" y1="110" x2="230" y2="30" stroke="#0f172a" strokeWidth={4} />
              <line x1="30" y1="115" x2="230" y2="35" stroke="#e11d48" strokeWidth={1.5} strokeDasharray="5 4" />
              <FigLabel x={205} y={60} fontSize={14}>(D)</FigLabel>
              <FigLabel x={205} y={80} fontSize={14} fill="#e11d48">(Δ)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">(D) et (Δ) confondues</p>
            <p className="mt-3 text-xs text-foreground-muted">On écrit : (D) = (Δ) ou (Δ) = (D).</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h4 className="mb-2 font-display font-bold text-foreground">Droites parallèles</h4>
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">Deux droites parallèles sont deux droites <strong>non sécantes</strong> ou confondues.</div>
            <svg viewBox="0 0 260 140" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="30" y1="120" x2="230" y2="50" />
                <line x1="20.1" y1="91.7" x2="220.1" y2="21.7" />
              </g>
              <FigLabel x={205} y={45} fontSize={14}>(D)</FigLabel>
              <FigLabel x={195} y={17} fontSize={14}>(Δ)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">On écrit : (D) ∥ (Δ) ou (Δ) ∥ (D)</p>
          </div>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
            <div className="mb-4 rounded-xl border-2 border-rose-200 bg-rose-50 p-4 text-sm text-rose-900"><strong>Propriété :</strong> par un point donné passe une seule droite <strong>parallèle</strong> à une droite donnée.</div>
            <svg viewBox="0 0 260 130" className="mx-auto h-auto w-full max-w-xs">
              <line x1="30" y1="105" x2="230" y2="55" stroke="#0f172a" strokeWidth={2} />
              <FigLabel x={205} y={50} fontSize={14}>(D)</FigLabel>
              <line x1="36" y1="43.5" x2="196.1" y2="3.5" stroke="#0f172a" strokeWidth={2} />
              <PointCross x={65} y={30} /><FigLabel x={55} y={26}>M</FigLabel>
            </svg>
            <FigCaption>Par le point M passe une seule droite parallèle à (D).</FigCaption>
          </div>
          <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
            <div className="mb-4 rounded-xl border-2 border-rose-200 bg-rose-50 p-4 text-sm text-rose-900"><strong>Propriété :</strong> par un point donné passe une seule droite <strong>perpendiculaire</strong> à une droite donnée.</div>
            <svg viewBox="0 0 260 200" className="mx-auto h-auto w-full max-w-xs">
              <line x1="30" y1="100" x2="230" y2="60" stroke="#0f172a" strokeWidth={2} />
              <FigLabel x={205} y={55} fontSize={14}>(D)</FigLabel>
              <line x1="77.1" y1="15.3" x2="112.4" y2="191.8" stroke="#0f172a" strokeWidth={2} />
              <path d="M91.5,87.7 l 3.3,-16.9 l 16.6,3.3" fill="none" stroke="#0f172a" strokeWidth={1.3} />
              <PointCross x={75} y={25} /><FigLabel x={65} y={21}>M</FigLabel>
            </svg>
            <FigCaption>Par le point M passe une seule droite perpendiculaire à (D).</FigCaption>
          </div>
        </div>

        <div className="mb-10 grid items-stretch gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h4 className="mb-2 font-display font-bold text-foreground">Droites perpendiculaires</h4>
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-3 text-sm text-rose-900">Deux droites perpendiculaires sont deux droites <strong>sécantes</strong> qui forment <strong>quatre angles droits</strong>.</div>
            <svg viewBox="0 0 260 140" className="mx-auto mt-4 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="130" y1="20" x2="130" y2="120" />
                <line x1="30" y1="70" x2="230" y2="70" />
              </g>
              <RightAngle x={130} y={58} />
              <FigLabel x={135} y={16} fontSize={14}>(D)</FigLabel>
              <FigLabel x={212} y={64} fontSize={14}>(Δ)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">On écrit : (D) ⊥ (Δ) ou (Δ) ⊥ (D)</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h4 className="mb-2 font-display font-bold text-foreground">Projeté orthogonal &amp; distance</h4>
            <p className="text-sm text-foreground-muted">(D) une droite et E un point à l&apos;extérieur de (D). La perpendiculaire à (D) passant par E coupe (D) en H.</p>
            <svg viewBox="0 0 320 230" className="mx-auto mt-3 h-auto w-full max-w-sm">
              <line x1="15.1" y1="216.3" x2="304.8" y2="191.1" stroke="#0f172a" strokeWidth={2} />
              <FigLabel x={280} y={185} fontSize={14}>(D)</FigLabel>
              <line x1="70" y1="60" x2="83.1" y2="210.4" stroke="#0f172a" strokeWidth={2} />
              <line x1="70" y1="60" x2="83.1" y2="210.4" stroke="#e11d48" strokeWidth={1.3} strokeDasharray="4 4" transform="translate(6,0)" />
              <path d="M83.1,210.4 l -1,-13.2 l 13.2,-1" fill="none" stroke="#0f172a" strokeWidth={1.2} transform="translate(-13,0)" />
              <PointCross x={65} y={55} /><FigLabel x={52} y={53}>E</FigLabel>
              <PointCross x={78} y={205} /><FigLabel x={90} y={220}>H</FigLabel>
            </svg>
            <ul className="mt-2 space-y-1 text-xs text-foreground-muted">
              <li><strong className="text-foreground">H</strong> est appelé : projeté orthogonal de E sur (D).</li>
              <li><strong className="text-foreground">EH</strong> est appelée : distance entre E et (D).</li>
            </ul>
          </div>
        </div>

        <h3 className="mb-2 font-display text-xl font-bold text-foreground">e) Propriétés de trois droites</h3>
        <p className="mb-6 max-w-3xl text-sm text-foreground-muted sm:text-base">
          Ces cinq propriétés de « transitivité » sont la clé de presque tous les exercices de démonstration de ce chapitre : elles reviennent sans cesse dans les exercices 08 à 12.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <PropCard index={1} title="Propriété 1">
            <Rule>Si deux droites sont parallèles, alors toute <strong>sécante</strong> à l&apos;une est sécante à l&apos;autre.</Rule>
            <svg viewBox="0 0 260 190" className="mx-auto mt-3 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="20" y1="110" x2="240" y2="80" />
                <line x1="10.1" y1="166.4" x2="252.8" y2="133.2" />
                <line x1="75" y1="10" x2="150" y2="185" />
              </g>
              <FigLabel x={242} y={76} fontSize={13}>(D)</FigLabel>
              <FigLabel x={228} y={129} fontSize={13}>(Δ)</FigLabel>
              <FigLabel x={152} y={20} fontSize={13}>(L)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">(D) ∥ (Δ), (L) sécante à (D) ⟹ (L) sécante à (Δ)</p>
          </PropCard>

          <PropCard index={2} title="Propriété 2">
            <Rule>Si deux droites sont parallèles, alors toute <strong>parallèle</strong> à l&apos;une est parallèle à l&apos;autre.</Rule>
            <svg viewBox="0 0 260 190" className="mx-auto mt-3 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="20" y1="115" x2="230" y2="85" />
                <line x1="10.1" y1="161.4" x2="242.7" y2="128.2" />
                <line x1="10.1" y1="76.4" x2="242.7" y2="43.2" />
              </g>
              <FigLabel x={232} y={81} fontSize={13}>(D)</FigLabel>
              <FigLabel x={220} y={124} fontSize={13}>(Δ)</FigLabel>
              <FigLabel x={220} y={39} fontSize={13}>(L)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">(D) ∥ (Δ), (L) ∥ (D) ⟹ (L) ∥ (Δ)</p>
          </PropCard>

          <PropCard index={3} title="Propriété 3">
            <Rule>Si deux droites sont parallèles, alors toute <strong>perpendiculaire</strong> à l&apos;une est perpendiculaire à l&apos;autre.</Rule>
            <svg viewBox="0 0 260 210" className="mx-auto mt-3 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="20" y1="110" x2="230" y2="85" />
                <line x1="10.1" y1="156.2" x2="243.4" y2="128.4" />
                <line x1="145.0" y1="59.9" x2="161.5" y2="198.9" />
              </g>
              <RightAngle x={141} y={90} rotate="rotate(-8 146 96)" />
              <FigLabel x={232} y={81} fontSize={13}>(D)</FigLabel>
              <FigLabel x={220} y={124} fontSize={13}>(Δ)</FigLabel>
              <FigLabel x={163} y={55} fontSize={13}>(L)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">(D) ∥ (Δ), (L) ⊥ (D) ⟹ (L) ⊥ (Δ)</p>
          </PropCard>

          <PropCard index={4} title="Propriété 4">
            <Rule>Si deux droites sont perpendiculaires, alors toute <strong>perpendiculaire</strong> à l&apos;une est parallèle à l&apos;autre.</Rule>
            <svg viewBox="0 0 260 240" className="mx-auto mt-3 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="18.5" y1="135.6" x2="244.8" y2="72.3" />
                <line x1="84.4" y1="18.5" x2="139.7" y2="215.9" />
                <line x1="46.8" y1="106.9" x2="83.2" y2="236.9" />
              </g>
              <RightAngle x={98} y={103} rotate="rotate(-16 103 108)" />
              <FigLabel x={246} y={68} fontSize={13}>(D)</FigLabel>
              <FigLabel x={128} y={16} fontSize={13}>(Δ)</FigLabel>
              <FigLabel x={60} y={100} fontSize={13}>(L)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">(D) ⊥ (Δ), (L) ⊥ (D) ⟹ (L) ∥ (Δ)</p>
          </PropCard>

          <PropCard index={5} title="Propriété 5">
            <Rule>Si deux droites sont perpendiculaires, alors toute <strong>parallèle</strong> à l&apos;une est perpendiculaire à l&apos;autre.</Rule>
            <svg viewBox="0 0 300 210" className="mx-auto mt-3 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2}>
                <line x1="70.6" y1="104.9" x2="274.3" y2="53.9" />
                <line x1="70.6" y1="22.4" x2="116.7" y2="206.7" />
                <line x1="39.1" y1="184.9" x2="242.8" y2="134.0" />
              </g>
              <RightAngle x={82} y={88} rotate="rotate(-14 87 93)" />
              <FigLabel x={278} y={50} fontSize={13}>(D)</FigLabel>
              <FigLabel x={100} y={18} fontSize={13}>(Δ)</FigLabel>
              <FigLabel x={20} y={182} fontSize={13}>(L)</FigLabel>
            </svg>
            <p className="mt-1 text-center text-xs text-foreground-muted">(D) ⊥ (Δ), (L) ∥ (D) ⟹ (L) ⊥ (Δ)</p>
          </PropCard>

          <div className="flex flex-col justify-center rounded-2xl bg-neutral-950 p-6 text-white">
            <p className="mb-2 font-display font-bold">💡 À retenir</p>
            <p className="text-sm leading-relaxed text-neutral-300">
              Pour prouver qu&apos;une droite est parallèle ou perpendiculaire à une autre dans un exercice, cherche toujours une <strong>troisième droite</strong> qui les relie déjà par une propriété ci-dessus.
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== IV. DEMI-DROITE ===================== */}
      <LessonSection id="demidroite" kicker="04 · La demi-droite" title="La demi-droite" tone="light">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
            <h3 className="mb-3 font-display font-bold text-foreground">a) Qu&apos;est-ce qu&apos;une demi-droite ?</h3>
            <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
              La demi-droite est une partie d&apos;une droite limitée d&apos;un côté par un point appelé <strong className="text-foreground">origine</strong> de la demi-droite, et illimitée de l&apos;autre côté.
            </p>
            <h3 className="mt-6 mb-3 font-display font-bold text-foreground">b) Exemple</h3>
            <svg viewBox="0 0 260 140" className="mx-auto h-auto w-full max-w-xs">
              <line x1="40" y1="110" x2="224.5" y2="33.1" stroke="#0f172a" strokeWidth={2} />
              <PointCross x={35} y={105} /><FigLabel x={24} y={128}>A</FigLabel>
              <PointCross x={155} y={55} /><FigLabel x={167} y={53}>B</FigLabel>
            </svg>
            <FigCaption>Demi-droite d&apos;origine A qui passe par B. On note : <Notation>[AB)</Notation></FigCaption>
            <p className="mt-3 text-xs text-foreground-muted"><strong>Remarque :</strong> la droite (AB) s&apos;appelle le <strong className="text-foreground">support</strong> de la demi-droite [AB).</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
            <h3 className="mb-3 font-display font-bold text-foreground">c) Demi-droites opposées</h3>
            <DefBox>
              <p className="mb-1 font-semibold">Deux demi-droites opposées sont deux demi-droites qui ont :</p>
              <ul className="list-inside list-disc space-y-0.5">
                <li>Même origine.</li>
                <li>Même support.</li>
                <li>Un seul point commun, qui est l&apos;origine.</li>
              </ul>
            </DefBox>
            <p className="mt-4 font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
            <svg viewBox="0 0 320 190" className="mx-auto mt-1 h-auto w-full max-w-sm">
              <line x1="25.8" y1="167.1" x2="294.2" y2="32.9" stroke="#0f172a" strokeWidth={2} />
              <PointCross x={39} y={153} /><FigLabel x={22} y={150}>C</FigLabel>
              <PointCross x={155} y={95} /><FigLabel x={167} y={93}>A</FigLabel>
              <PointCross x={271} y={37} /><FigLabel x={283} y={35}>B</FigLabel>
            </svg>
            <FigCaption>[AB) et [AC) sont deux demi-droites opposées.</FigCaption>
          </div>
        </div>
      </LessonSection>

      {/* ===================== V. LE SEGMENT ===================== */}
      <LessonSection id="segment" kicker="05 · Le segment et son milieu" title="Le segment" tone="light">
        <div className="mb-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-3 font-display font-bold text-foreground">a) Définition</h3>
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">Un segment est une partie d&apos;une droite limitée des deux côtés par deux points appelés <strong>extrémités</strong> du segment.</div>
            <h3 className="mt-4 mb-1 font-display font-bold text-foreground">b) Exemple</h3>
            <svg viewBox="0 0 240 120" className="mx-auto mt-1 h-auto w-full max-w-xs">
              <line x1="40" y1="95" x2="220" y2="35" stroke="#0f172a" strokeWidth={2.5} />
              <PointCross x={35} y={90} /><FigLabel x={24} y={113}>A</FigLabel>
              <PointCross x={215} y={30} /><FigLabel x={222} y={24}>B</FigLabel>
            </svg>
            <FigCaption>Segment d&apos;extrémités A et B, noté <Notation>[AB]</Notation></FigCaption>
            <p className="mt-2 text-xs text-foreground-muted"><strong>Remarque :</strong> la droite (AB) s&apos;appelle le <strong className="text-foreground">support</strong> du segment [AB].</p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-3 font-display font-bold text-foreground">c) Longueur d&apos;un segment</h3>
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">La longueur d&apos;un segment [AB], c&apos;est la <strong>distance</strong> entre ses extrémités A et B, notée <strong>AB</strong>.</div>
            <p className="mt-4 font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
            <svg viewBox="0 0 240 110" className="mx-auto mt-1 h-auto w-full max-w-xs">
              <line x1="35" y1="55" x2="215" y2="55" stroke="#0f172a" strokeWidth={2.5} />
              <PointCross x={30} y={50} /><FigLabel x={26} y={42}>A</FigLabel>
              <PointCross x={210} y={50} /><FigLabel x={216} y={42}>B</FigLabel>
              <line x1="35" y1="75" x2="215" y2="75" stroke="#0d9488" strokeWidth={1} />
              <line x1="35" y1="70" x2="35" y2="80" stroke="#0d9488" strokeWidth={1} />
              <line x1="215" y1="70" x2="215" y2="80" stroke="#0d9488" strokeWidth={1} />
              <FigLabel x={125} y={94} textAnchor="middle" fontSize={14} fill="#0d9488">5,5 cm</FigLabel>
            </svg>
            <FigCaption>Traçons [AB] tel que : AB = 5,5 cm</FigCaption>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-3 font-display font-bold text-foreground">d) Segments égaux (isométriques)</h3>
            <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">Deux segments égaux (isométriques) sont deux segments de <strong>même longueur</strong>.</div>
            <p className="mt-4 font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
            <svg viewBox="0 0 260 150" className="mx-auto mt-1 h-auto w-full max-w-xs">
              <g stroke="#0f172a" strokeWidth={2.2}>
                <line x1="30" y1="55" x2="190" y2="35" />
                <line x1="55" y1="140" x2="220" y2="90" />
              </g>
              <path d="M107,44 l6,8 M134,111 l6,8" stroke="#0f172a" strokeWidth={1.6} />
              <PointCross x={25} y={50} strokeWidth={2} /><FigLabel x={14} y={46} fontSize={14}>A</FigLabel>
              <PointCross x={185} y={30} strokeWidth={2} /><FigLabel x={196} y={27} fontSize={14}>B</FigLabel>
              <PointCross x={50} y={135} strokeWidth={2} /><FigLabel x={36} y={146} fontSize={14}>E</FigLabel>
              <PointCross x={215} y={85} strokeWidth={2} /><FigLabel x={226} y={82} fontSize={14}>F</FigLabel>
            </svg>
            <FigCaption>AB = 6 cm et EF = 6 cm. On écrit : <span className="font-mono font-semibold text-rose-700">AB = EF</span></FigCaption>
          </div>
        </div>

        <h3 className="mb-2 font-display text-xl font-bold text-foreground">e) Milieu d&apos;un segment</h3>
        <p className="mb-6 max-w-3xl text-sm text-foreground-muted sm:text-base">La notion la plus utilisée dans les exercices de construction (08 à 12) : savoir reconnaître et utiliser un milieu.</p>

        <div className="mb-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <DefBox><strong>Le milieu</strong> d&apos;un segment est le point qui appartient au segment et qui est <strong>équidistant</strong> à ses extrémités.</DefBox>
            <p className="mt-4 font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple</p>
            <svg viewBox="0 0 260 110" className="mx-auto mt-1 h-auto w-full max-w-xs">
              <line x1="35" y1="90" x2="230" y2="40" stroke="#0f172a" strokeWidth={2.2} />
              <path d="M83,77 l6,7.5 M177,53 l6,7.5" stroke="#0f172a" strokeWidth={1.6} />
              <PointCross x={30} y={85} /><FigLabel x={20} y={80}>A</FigLabel>
              <PointCross x={127.5} y={60} /><FigLabel x={132} y={54}>E</FigLabel>
              <PointCross x={225} y={35} /><FigLabel x={222} y={27}>B</FigLabel>
              <FigLabel x={80} y={100} textAnchor="middle" fontSize={12} fill="#0d9488">3 cm</FigLabel>
              <FigLabel x={182} y={76} textAnchor="middle" fontSize={12} fill="#0d9488">3 cm</FigLabel>
            </svg>
            <FigCaption>AB = 6 cm, E ∈ [AB], AE = 3 cm, EB = 3 cm : E est le milieu de [AB].</FigCaption>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">1</span>
              <h4 className="font-display font-bold text-foreground">Propriété directe</h4>
            </div>
            <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">Si un point M est le milieu d&apos;un segment [AB], alors :</div>
            <div className="mt-3 rounded-xl border border-border bg-surface-muted p-4 text-center">
              <p className="font-mono font-semibold text-foreground">M ∈ [AB] et AM = MB = AB∕2</p>
              <p className="mt-1 text-xs text-foreground-muted">(AB = 2 × AM et AB = 2 × MB)</p>
            </div>
            <div className="mt-5 rounded-xl bg-surface-muted p-4">
              <p className="mb-2 font-mono text-xs font-semibold text-foreground-muted uppercase">Application</p>
              <p className="text-sm text-foreground-muted">Soient E, F, G trois points tels que EF = 3,5 cm et F le milieu du segment [EG]. Calculer FG puis EG.</p>
              <svg viewBox="0 0 260 60" className="mx-auto mt-3 h-auto w-full max-w-xs">
                <line x1="25" y1="30" x2="235" y2="30" stroke="#0f172a" strokeWidth={2} />
                <path d="M83,25 l0,10 M177,25 l0,10" stroke="#0f172a" strokeWidth={1.6} />
                <PointCross x={20} y={25} /><FigLabel x={15} y={20} fontSize={14}>E</FigLabel>
                <PointCross x={125} y={25} /><FigLabel x={125} y={20} fontSize={14}>F</FigLabel>
                <PointCross x={230} y={25} /><FigLabel x={232} y={20} fontSize={14}>G</FigLabel>
              </svg>
              <p className="mt-3 text-sm text-foreground-muted"><strong>FG :</strong> F milieu de [EG] ⟹ EF = FG, donc <strong className="text-foreground">FG = 3,5 cm</strong>.</p>
              <p className="mt-1 text-sm text-foreground-muted"><strong>EG :</strong> EG = 2 × EF = 2 × 3,5, donc <strong className="text-foreground">EG = 7 cm</strong>.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">2</span>
            <h4 className="font-display font-bold text-foreground">Propriété réciproque</h4>
          </div>
          <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
            Si [AB] est un segment et M un point tels que : <strong>M ∈ [AB]</strong> et <strong>AM = MB</strong>, alors <strong>M est le milieu du segment [AB]</strong>.
          </div>
          <div className="mt-5 grid items-center gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-surface-muted p-4">
              <p className="mb-2 font-mono text-xs font-semibold text-foreground-muted uppercase">Application</p>
              <p className="text-sm text-foreground-muted">Soit (ζ) un cercle de centre O, de rayon r et de diamètre [AB]. Montrer que O est le milieu du segment [AB].</p>
              <svg viewBox="0 0 220 190" className="mx-auto mt-3 h-auto w-full max-w-[220px]">
                <circle cx="110" cy="95" r="80" fill="none" stroke="#0f172a" strokeWidth={2} />
                <FigLabel x={30} y={18} fontSize={14}>(ζ)</FigLabel>
                <line x1="30" y1="95" x2="190" y2="95" stroke="#0f172a" strokeWidth={1.6} />
                <PointCross x={25} y={90} /><FigLabel x={14} y={86} fontSize={14}>A</FigLabel>
                <PointCross x={105} y={90} /><FigLabel x={108} y={86} fontSize={14}>O</FigLabel>
                <PointCross x={185} y={90} /><FigLabel x={192} y={86} fontSize={14}>B</FigLabel>
              </svg>
            </div>
            <div className="space-y-2 rounded-xl bg-surface-muted p-4 text-sm text-foreground-muted">
              <p><strong>1)</strong> O est le centre du cercle (ζ) de diamètre [AB], donc : <strong className="text-foreground">O ∈ [AB]</strong> (1)</p>
              <p><strong>2)</strong> A ∈ (ζ) et B ∈ (ζ), (ζ) de centre O et de rayon r, donc : AO = r et OB = r, d&apos;où <strong className="text-foreground">AO = OB</strong> (2)</p>
              <p>D&apos;après (1) et (2), d&apos;après la propriété réciproque : <strong className="text-foreground">O est le milieu du segment [AB]</strong>.</p>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== VI. EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="12 exercices corrigés" tone="muted" description="Cherche chaque exercice sur ton cahier, puis clique pour vérifier ta réponse.">
        <ExerciseGroup total={12} celebrationTitle="Bravo, les 12 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les notions de base de la géométrie du plan.">
          <ExerciseCard
            id="1"
            index={1}
            title="Droites, segments, demi-droites, alignement"
            items={
              <div>
                <Fig>
                  <svg viewBox="0 0 380 280" className="mx-auto h-auto w-full max-w-md">
                    <PointCross x={165} y={65} /><FigLabel x={171} y={60} fontSize={16}>A</FigLabel>
                    <PointCross x={305} y={40} /><FigLabel x={317} y={38} fontSize={16}>B</FigLabel>
                    <PointCross x={45} y={125} /><FigLabel x={30} y={122} fontSize={16}>E</FigLabel>
                    <PointCross x={270} y={155} /><FigLabel x={282} y={153} fontSize={16}>C</FigLabel>
                    <PointCross x={125} y={190} /><FigLabel x={108} y={207} fontSize={16}>D</FigLabel>
                  </svg>
                </Fig>
                <ol className="mt-4 list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                  <li>Tracer la droite (AC) et le segment [BC].</li>
                  <li>Tracer les demi-droites [AD) et [DC).</li>
                  <li>Construire M le point d&apos;intersection de (AC) et (BD).</li>
                  <li>Les points A, B et C sont …………</li>
                  <li>Les points C, D et E sont …………</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="0 0 380 280" className="mx-auto h-auto w-full max-w-md">
                    <line x1="151" y1="53.7" x2="294" y2="176.3" stroke="#0f172a" strokeWidth={2} />
                    <line x1="310" y1="45" x2="275" y2="160" stroke="#0f172a" strokeWidth={2.5} />
                    <line x1="170" y1="70" x2="108.7" y2="261.7" stroke="#0d9488" strokeWidth={2} />
                    <line x1="130" y1="195" x2="328.5" y2="147.1" stroke="#e11d48" strokeWidth={2} />
                    <line x1="310" y1="45" x2="130" y2="195" stroke="#7c3aed" strokeWidth={1.3} strokeDasharray="4 3" />
                    <PointCross x={165} y={65} /><FigLabel x={171} y={60} fontSize={16}>A</FigLabel>
                    <PointCross x={305} y={40} /><FigLabel x={317} y={38} fontSize={16}>B</FigLabel>
                    <PointCross x={45} y={125} /><FigLabel x={30} y={122} fontSize={16}>E</FigLabel>
                    <PointCross x={270} y={155} /><FigLabel x={282} y={153} fontSize={16}>C</FigLabel>
                    <PointCross x={125} y={190} /><FigLabel x={108} y={207} fontSize={16}>D</FigLabel>
                    <PointCross x={219} y={112} strokeWidth={2.2} /><FigLabel x={231} y={110} fontSize={16} fontWeight="bold">M</FigLabel>
                    <text x="8" y="16" fontSize="11" fill="#64748b">(AC) noir · [BC] gras · [AD) teal · [DC) rouge · (BD) violet pointillé</text>
                  </svg>
                </Fig>
                <ul className="mt-4 space-y-2 text-sm text-foreground-muted">
                  <li><strong>3)</strong> M est le point où la droite (AC) coupe la droite (BD) <span className="text-foreground-muted">((BD) en violet pointillé, tracée comme aide de construction : elle ne fait pas partie de la réponse à tracer)</span>.</li>
                  <li><strong>4)</strong> Les points A, B et C <strong className="text-green-700">ne sont pas alignés</strong> : ils n&apos;appartiennent pas à une même droite (aucun n&apos;est situé sur la droite formée par les deux autres).</li>
                  <li><strong>5)</strong> Les points C, D et E <strong className="text-green-700">ne sont pas alignés</strong>, pour la même raison.</li>
                </ul>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Vocabulaire"
            itemsLabel="7 blancs"
            items={
              <ol className="list-inside list-decimal space-y-2 text-sm text-foreground-muted sm:text-base">
                <li>[AB] est un ……… ;</li>
                <li>(AB) est une ……… ;</li>
                <li>[AB) est une ……… ;</li>
                <li>AB est une ……… ;</li>
                <li>Le point A appartient à la droite (D). On note : ……</li>
                <li>Le point A n&apos;appartient pas à la droite (D). On note : ……</li>
                <li>Les points A, B et C appartiennent à la droite (D). On dit que les points A, B et C sont ………</li>
              </ol>
            }
            correction={
              <ol className="list-inside list-decimal space-y-2 text-sm text-foreground sm:text-base">
                <li>[AB] est un <strong className="text-green-700">segment</strong> ;</li>
                <li>(AB) est une <strong className="text-green-700">droite</strong> ;</li>
                <li>[AB) est une <strong className="text-green-700">demi-droite</strong> ;</li>
                <li>AB est une <strong className="text-green-700">longueur (distance)</strong> ;</li>
                <li>On note : <strong className="font-mono text-green-700">A ∈ (D)</strong></li>
                <li>On note : <strong className="font-mono text-green-700">A ∉ (D)</strong></li>
                <li>On dit que les points A, B et C sont <strong className="text-green-700">alignés</strong>.</li>
              </ol>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Vocabulaire + figures"
            itemsLabel="4 phrases à compléter"
            items={
              <div className="space-y-3 text-sm text-foreground-muted sm:text-base">
                <p className="rounded-lg border border-border p-4">a) La ……. (D) coupe le ……. [IJ] au ……. K mais ce n&apos;est pas le milieu du ……. [IJ].</p>
                <p className="rounded-lg border border-border p-4">b) La ……. (D₁) coupe le ……. (ζ) de centre O et de rayon 4cm en deux ……. A et B mais le ……. [AB] n&apos;est pas un diamètre du cercle (ζ).</p>
                <p className="rounded-lg border border-border p-4">c) Le ……. C appartient à la [BA) mais il n&apos;appartient pas au ……. [BA].</p>
                <p className="rounded-lg border border-border p-4">d) Le ……. A est le ……. d&apos;intersection de la ……. (BC) et de la ……. (EF). Le ……. E appartient au ……. [FA] mais le ……. A n&apos;appartient pas au ……. [BC].</p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm text-foreground">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>a) La <strong className="text-green-700">droite</strong> (D) coupe le <strong className="text-green-700">segment</strong> [IJ] au <strong className="text-green-700">point</strong> K mais ce n&apos;est pas le milieu du <strong className="text-green-700">segment</strong> [IJ].</p>
                  <svg viewBox="0 0 260 190" className="mx-auto mt-3 h-auto w-full max-w-xs">
                    <line x1="40" y1="90" x2="220" y2="90" stroke="#0f172a" strokeWidth={2.2} />
                    <line x1="114.1" y1="6.2" x2="185.9" y2="173.8" stroke="#0d9488" strokeWidth={2} />
                    <PointCross x={35} y={85} /><FigLabel x={24} y={82}>I</FigLabel>
                    <PointCross x={215} y={85} /><FigLabel x={222} y={82}>J</FigLabel>
                    <PointCross x={145} y={85} strokeWidth={2.2} /><FigLabel x={157} y={83}>K</FigLabel>
                    <FigLabel x={188} y={20} fontSize={14} fill="#0d9488">(D)</FigLabel>
                  </svg>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>b) La <strong className="text-green-700">droite</strong> (D₁) coupe le <strong className="text-green-700">cercle</strong> (ζ) de centre O et de rayon 4cm en deux <strong className="text-green-700">points</strong> A et B mais le <strong className="text-green-700">segment</strong> [AB] n&apos;est pas un diamètre du cercle (ζ).</p>
                  <svg viewBox="0 0 260 200" className="mx-auto mt-3 h-auto w-full max-w-xs">
                    <circle cx="130" cy="100" r="70" fill="none" stroke="#0f172a" strokeWidth={2} />
                    <line x1="14.5" y1="56.2" x2="235.5" y2="88.8" stroke="#0d9488" strokeWidth={2} />
                    <PointCross x={65} y={59} /><FigLabel x={52} y={56}>A</FigLabel>
                    <PointCross x={193} y={78} /><FigLabel x={205} y={76}>B</FigLabel>
                    <PointCross x={125} y={95} /><FigLabel x={128} y={118}>O</FigLabel>
                    <FigLabel x={8} y={140} fontSize={14}>(ζ)</FigLabel>
                    <FigLabel x={10} y={50} fontSize={14} fill="#0d9488">(D₁)</FigLabel>
                  </svg>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>c) Le <strong className="text-green-700">point</strong> C appartient à la <strong className="text-green-700">demi-droite</strong> [BA) mais il n&apos;appartient pas au <strong className="text-green-700">segment</strong> [BA].</p>
                  <svg viewBox="0 0 260 100" className="mx-auto mt-3 h-auto w-full max-w-xs">
                    <line x1="200" y1="50" x2="20" y2="50" stroke="#0f172a" strokeWidth={2.2} />
                    <PointCross x={195} y={45} /><FigLabel x={200} y={70}>B</FigLabel>
                    <PointCross x={95} y={45} /><FigLabel x={98} y={70}>A</FigLabel>
                    <PointCross x={25} y={45} /><FigLabel x={25} y={35}>C</FigLabel>
                  </svg>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p>d) Le <strong className="text-green-700">point</strong> A est le <strong className="text-green-700">point</strong> d&apos;intersection de la <strong className="text-green-700">droite</strong> (BC) et de la <strong className="text-green-700">droite</strong> (EF). Le <strong className="text-green-700">point</strong> E appartient au <strong className="text-green-700">segment</strong> [FA] mais le <strong className="text-green-700">point</strong> A n&apos;appartient pas au <strong className="text-green-700">segment</strong> [BC].</p>
                  <svg viewBox="0 0 260 180" className="mx-auto mt-3 h-auto w-full max-w-xs">
                    <line x1="50" y1="150" x2="240" y2="150" stroke="#0f172a" strokeWidth={2.2} />
                    <line x1="40" y1="40" x2="70" y2="150" stroke="#0d9488" strokeWidth={2} />
                    <PointCross x={35} y={35} /><FigLabel x={20} y={33}>F</FigLabel>
                    <PointCross x={53} y={101} /><FigLabel x={65} y={99}>E</FigLabel>
                    <PointCross x={65} y={145} strokeWidth={2.2} /><FigLabel x={55} y={170}>A</FigLabel>
                    <PointCross x={145} y={145} /><FigLabel x={147} y={140}>B</FigLabel>
                    <PointCross x={225} y={145} /><FigLabel x={228} y={140}>C</FigLabel>
                  </svg>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Segment, distances, milieu"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                <li>Tracer un segment [AB] de longueur 6 cm et un point M ∈ [AB] tel que : AM = 2,5 cm.</li>
                <li>Déterminer la distance BM.</li>
                <li>Construire le point C le milieu du segment [AB].</li>
                <li>Déterminer AC, MC et MB.</li>
              </ol>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="0 0 240 100" className="mx-auto h-auto w-full max-w-sm">
                    <line x1="30" y1="70" x2="210" y2="70" stroke="#0f172a" strokeWidth={2.2} />
                    <PointCross x={25} y={65} /><FigLabel x={20} y={60}>A</FigLabel>
                    <PointCross x={100} y={65} /><FigLabel x={96} y={60}>M</FigLabel>
                    <PointCross x={115} y={65} /><FigLabel x={122} y={60}>C</FigLabel>
                    <PointCross x={205} y={65} /><FigLabel x={208} y={60}>B</FigLabel>
                    <FigLabel x={65} y={90} textAnchor="middle" fontSize={11} fill="#0d9488">2,5 cm</FigLabel>
                    <FigLabel x={167} y={90} textAnchor="middle" fontSize={11} fill="#0d9488">3,5 cm</FigLabel>
                  </svg>
                </Fig>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground">
                  <li><strong>2)</strong> BM = AB − AM = 6 − 2,5, donc <strong className="text-green-700">BM = 3,5 cm</strong>.</li>
                  <li><strong>3)</strong> C milieu de [AB] ⟹ AC = AB∕2 = 6∕2, donc <strong className="text-green-700">AC = 3 cm</strong>.</li>
                  <li><strong>4)</strong> Comme AM = 2,5 cm &lt; AC = 3 cm, M est entre A et C, donc MC = AC − AM = 3 − 2,5 = <strong className="text-green-700">0,5 cm</strong>. Et MB = 3,5 cm (question 2), ou encore MB = MC + CB = 0,5 + 3 = <strong className="text-green-700">3,5 cm</strong>.</li>
                </ul>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Construction : milieu et demi-droite"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                <li>Tracer une droite (D) et placer un point A sur cette droite.</li>
                <li>Placer un point B ∈ (D) qui se trouve à 4 cm du point A.</li>
                <li>Placer le point M le milieu de [AB].</li>
                <li>Tracer en vert la demi-droite d&apos;origine B qui ne passe pas par les points A et M.</li>
              </ol>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="0 0 320 190" className="mx-auto h-auto w-full max-w-sm">
                    <line x1="30" y1="140" x2="260" y2="50" stroke="#0f172a" strokeWidth={2} />
                    <FigLabel x={34} y={155} fontSize={14}>(D)</FigLabel>
                    <line x1="202.5" y1="72.5" x2="295.5" y2="36.1" stroke="#16a34a" strokeWidth={2.4} />
                    <PointCross x={105.5} y={103.5} /><FigLabel x={94} y={99}>A</FigLabel>
                    <PointCross x={151.5} y={85.5} /><FigLabel x={155} y={102}>M</FigLabel>
                    <PointCross x={197.5} y={67.5} /><FigLabel x={208} y={65}>B</FigLabel>
                    <FigLabel x={230} y={95} textAnchor="middle" fontSize={11} fill="#0d9488">4 cm</FigLabel>
                  </svg>
                </Fig>
                <p className="mt-3 text-sm text-foreground-muted">La demi-droite verte a pour origine B et part <strong>à l&apos;opposé</strong> de A (donc à l&apos;opposé de M aussi, puisque M ∈ [AB]) : c&apos;est la demi-droite opposée à [BA).</p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Lecture de figure · ∈ / ∉"
            items={
              <div>
                <Fig>
                  <svg viewBox="0 0 460 250" className="mx-auto h-auto w-full max-w-lg">
                    <line x1="30" y1="220" x2="420" y2="220" stroke="#0f172a" strokeWidth={2} />
                    <path d="M420,220 l-10,-5 l0,10 z" fill="#0f172a" />
                    <line x1="266" y1="40" x2="60" y2="220" stroke="#0f172a" strokeWidth={2} />
                    <line x1="60" y1="220" x2="421" y2="30" stroke="#0f172a" strokeWidth={2} />
                    <PointCross x={55} y={215} /><FigLabel x={42} y={238}>A</FigLabel>
                    <PointCross x={225} y={215} /><FigLabel x={220} y={238}>B</FigLabel>
                    <PointCross x={295} y={215} /><FigLabel x={298} y={238}>C</FigLabel>
                    <PointCross x={245} y={115} /><FigLabel x={257} y={113}>O</FigLabel>
                    <PointCross x={261} y={35} /><FigLabel x={264} y={30}>D</FigLabel>
                    <PointCross x={416} y={25} /><FigLabel x={428} y={28}>E</FigLabel>
                    <PointCross x={105} y={135} /><FigLabel x={88} y={132}>M</FigLabel>
                    <PointCross x={425} y={190} /><FigLabel x={437} y={188}>F</FigLabel>
                  </svg>
                </Fig>
                <p className="mt-4 break-words font-mono text-sm leading-loose text-foreground-muted">
                  B⋯(AC) ; C⋯(AB) ; A⋯(BC) ; B⋯[AC] ; A⋯[BC] ; B⋯[AC] ; C⋯[AB] ; A⋯[BC] ; B⋯(AC) ; A⋯(BC) ; C⋯[AB] ; C⋯(AB) ; A⋯(OE) ; A⋯[OE] ; A⋯(OE) ; A⋯[EO) ; O⋯[DB) ; D⋯[BO) ; M⋯[ME] ; M⋯(AD) ; F⋯(AB) ; M⋯[AD] ; F⋯[BA) ; O⋯(DF)
                </p>
                <p className="mt-4 text-sm text-foreground-muted">2. Cite trois points alignés. 3. Cite trois points non alignés.</p>
                <p className="mt-2 text-sm text-foreground-muted">4. Complète : (AE)&amp;(BD) sont … en … · (AB)&amp;(BC) sont … · O est … de (AE) et (BD) · B, D sont … de [BD] · D est … de [DO) · A,B,C sont … · B … au segment [AC].</p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm text-foreground">
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Repère : A, B, C alignés (même droite horizontale) ; A, O, E alignés ; B, O, D alignés ; M et F ne sont sur aucune des droites tracées.</p>
                  <div className="grid gap-x-6 gap-y-1.5 font-mono sm:grid-cols-2">
                    <p>B <strong className="text-green-700">∈</strong> (AC)</p><p>C <strong className="text-green-700">∈</strong> (AB)</p>
                    <p>A <strong className="text-green-700">∈</strong> (BC)</p><p>B <strong className="text-green-700">∈</strong> [AC]</p>
                    <p>A <strong className="text-green-700">∉</strong> [BC]</p><p>B <strong className="text-green-700">∈</strong> [AC]</p>
                    <p>C <strong className="text-green-700">∉</strong> [AB]</p><p>A <strong className="text-green-700">∉</strong> [BC]</p>
                    <p>B <strong className="text-green-700">∈</strong> (AC)</p><p>A <strong className="text-green-700">∈</strong> (BC)</p>
                    <p>C <strong className="text-green-700">∉</strong> [AB]</p><p>C <strong className="text-green-700">∈</strong> (AB)</p>
                    <p>A <strong className="text-green-700">∈</strong> (OE)</p><p>A <strong className="text-green-700">∉</strong> [OE]</p>
                    <p>A <strong className="text-green-700">∈</strong> (OE)</p><p>A <strong className="text-green-700">∈</strong> [EO)</p>
                    <p>O <strong className="text-green-700">∈</strong> [DB)</p><p>D <strong className="text-green-700">∈</strong> [BO)</p>
                    <p>M <strong className="text-green-700">∈</strong> [ME]</p><p>M <strong className="text-green-700">∉</strong> (AD)</p>
                    <p>F <strong className="text-green-700">∉</strong> (AB)</p><p>M <strong className="text-green-700">∉</strong> [AD]</p>
                    <p>F <strong className="text-green-700">∉</strong> [BA)</p><p>O <strong className="text-green-700">∉</strong> (DF)</p>
                  </div>
                </div>
                <div>
                  <p><strong>2)</strong> A, B et C sont alignés <span className="text-foreground-muted">(ou : A, O et E ; ou : B, O et D)</span>.</p>
                  <p><strong>3)</strong> A, B et D ne sont pas alignés <span className="text-foreground-muted">(par exemple)</span>.</p>
                </div>
                <div className="space-y-1.5">
                  <p>· Les droites (AE) et (BD) sont <strong className="text-green-700">sécantes</strong> en <strong className="text-green-700">O</strong>.</p>
                  <p>· Les droites (AB) et (BC) sont <strong className="text-green-700">confondues</strong> <span className="text-foreground-muted">(même droite, car A, B, C alignés)</span>.</p>
                  <p>· Le point O est <strong className="text-green-700">le point d&apos;intersection</strong> des droites (AE) et (BD).</p>
                  <p>· Les points B et D sont <strong className="text-green-700">les extrémités</strong> du segment [BD].</p>
                  <p>· Le point D est <strong className="text-green-700">l&apos;origine</strong> de la demi-droite [DO).</p>
                  <p>· Les points A, B et C sont <strong className="text-green-700">alignés</strong>.</p>
                  <p>· Le point B <strong className="text-green-700">appartient</strong> au segment [AC].</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Positions relatives de 6 droites"
            items={
              <div>
                <Fig>
                  <svg viewBox="0 0 420 300" className="mx-auto h-auto w-full max-w-md">
                    <g stroke="#0f172a" strokeWidth={1.8}>
                      <line x1="71.1" y1="193.4" x2="228.9" y2="256.6" />
                      <line x1="78.5" y1="255.6" x2="134.2" y2="116.4" />
                      <line x1="129.6" y1="276.1" x2="179.7" y2="150.7" />
                      <line x1="305.9" y1="150.4" x2="354.1" y2="29.6" />
                      <line x1="269.6" y1="65.9" x2="390.4" y2="114.1" />
                      <line x1="134" y1="237" x2="346" y2="78" />
                    </g>
                    <path d="M162.1,229.8 L166.9,217.8 L154.8,212.9" fill="none" stroke="#0f172a" strokeWidth={1.2} />
                    <path d="M334.8,77.9 L346.9,82.8 L342.1,94.8" fill="none" stroke="#0f172a" strokeWidth={1.2} />
                    <FigLabel x={68} y={189} textAnchor="end" fontSize={14}>(d₁)</FigLabel>
                    <FigLabel x={131} y={111} textAnchor="end" fontSize={14}>(d₂)</FigLabel>
                    <FigLabel x={155} y={142} fontSize={14}>(d₃)</FigLabel>
                    <FigLabel x={358} y={26} fontSize={14}>(d₄)</FigLabel>
                    <FigLabel x={393} y={112} fontSize={14}>(d₅)</FigLabel>
                    <FigLabel x={229} y={143} textAnchor="middle" fontSize={14}>(d₆)</FigLabel>
                  </svg>
                </Fig>
                <p className="mt-4 text-sm text-foreground-muted"><strong>1.</strong> Complète par : <em>Sécantes ; parallèles ; perpendiculaire ; concourantes</em></p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-foreground-muted">
                  <li>Les droites (d₁) et (d₂) sont ……</li>
                  <li>Les droites (d₁) et (d₃) sont ……</li>
                  <li>Les droites (d₄), (d₅) et (d₆) sont ……</li>
                  <li>Les droites (d₁) et (d₅) sont ……</li>
                  <li>Les droites (d₂), (d₃) et (d₄) sont ……</li>
                  <li>Les droites (d₁), (d₃) et (d₆) sont ……</li>
                  <li>Les droites (d₂) et (d₃) sont ……</li>
                </ul>
              </div>
            }
            correction={
              <div className="text-sm text-foreground">
                <p className="mb-3 text-xs text-foreground-muted">Repères : (d₂) ∥ (d₃), toutes deux ⊥ (d₁) ; (d₁), (d₃), (d₆) se coupent au même point ; (d₄), (d₅), (d₆) se coupent au même point ; (d₅) ⊥ (d₂) et (d₅) ⊥ (d₃).</p>
                <div className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  <p>(d₁) et (d₂) : <strong className="text-green-700">perpendiculaires</strong></p>
                  <p>(d₁) et (d₃) : <strong className="text-green-700">perpendiculaires</strong></p>
                  <p>(d₄), (d₅) et (d₆) : <strong className="text-green-700">concourantes</strong></p>
                  <p>(d₁) et (d₅) : <strong className="text-green-700">parallèles</strong></p>
                  <p>(d₂), (d₃) et (d₄) : <strong className="text-green-700">parallèles</strong></p>
                  <p>(d₁), (d₃) et (d₆) : <strong className="text-green-700">concourantes</strong></p>
                  <p>(d₂) et (d₃) : <strong className="text-green-700">parallèles</strong></p>
                </div>
                <p className="mt-3 text-xs text-foreground-muted">
                  Astuce : (d₂) ∥ (d₃) et (d₁) ⊥ (d₂) ⟹ (d₁) ⊥ (d₃) <span className="text-foreground-muted/70">(propriété e3)</span>. Comme (d₃) ∥ (d₄) aussi, on obtient de même (d₁) ⊥ (d₄) et (d₅) ⊥ (d₄) (marqué sur la figure) : (d₁) et (d₅) sont donc toutes les deux perpendiculaires à (d₄), donc <strong>parallèles entre elles</strong> <span className="text-foreground-muted/70">(propriété e4)</span>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Construction + démonstration"
            items={
              <div>
                <Fig>
                  <svg viewBox="0 0 460 260" className="mx-auto h-auto w-full max-w-md">
                    <line x1="40.1" y1="91.6" x2="449.9" y2="58.4" stroke="#0f172a" strokeWidth={2} />
                    <FigLabel x={30} y={105} fontSize={14}>(d)</FigLabel>
                    <PointCross x={145} y={35} /><FigLabel x={134} y={30}>A</FigLabel>
                    <PointCross x={325} y={20} /><FigLabel x={337} y={18}>B</FigLabel>
                    <PointCross x={75} y={225} /><FigLabel x={64} y={222}>C</FigLabel>
                  </svg>
                </Fig>
                <ol className="mt-4 list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                  <li>Tracer la droite (d₁) passant par le point A et perpendiculaire à la droite (d).</li>
                  <li>Tracer la droite (d₂) passant par le point B et perpendiculaire à la droite (d).</li>
                  <li>Tracer la droite (d₃) passant par le point C et parallèle à la droite (d).</li>
                  <li>Montrer que (d₁) ∥ (d₂).</li>
                  <li>Montrer que (d₂) ⊥ (d₃) et (d₁) ⊥ (d₃).</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="0 0 460 260" className="mx-auto h-auto w-full max-w-md">
                    <line x1="40.1" y1="91.6" x2="449.9" y2="58.4" stroke="#0f172a" strokeWidth={2} />
                    <line x1="148.8" y1="25" x2="166.2" y2="239.3" stroke="#0d9488" strokeWidth={2} />
                    <line x1="328.8" y1="10" x2="346.6" y2="229.3" stroke="#0d9488" strokeWidth={2} />
                    <line x1="20.2" y1="234.8" x2="379" y2="205.8" stroke="#e11d48" strokeWidth={2} />
                    <RightAngle x={147} y={76} rotate="rotate(-7 152.5 81.5)" />
                    <RightAngle x={327} y={62} rotate="rotate(-7 332.5 67.5)" />
                    <PointCross x={145} y={35} /><FigLabel x={134} y={30}>A</FigLabel>
                    <PointCross x={325} y={20} /><FigLabel x={337} y={18}>B</FigLabel>
                    <PointCross x={75} y={225} /><FigLabel x={64} y={222}>C</FigLabel>
                    <text x="8" y="16" fontSize="11" fill="#64748b">(d₁),(d₂) teal · (d₃) rouge</text>
                  </svg>
                </Fig>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  <li><strong>4)</strong> (d₁) ⊥ (d) et (d₂) ⊥ (d) : deux droites perpendiculaires à une même troisième sont parallèles <span className="text-foreground-muted">(propriété e4)</span>, donc <strong className="text-green-700">(d₁) ∥ (d₂)</strong>.</li>
                  <li><strong>5)</strong> (d₃) ∥ (d) et (d₂) ⊥ (d) : toute perpendiculaire à l&apos;une est perpendiculaire à l&apos;autre <span className="text-foreground-muted">(propriété e3)</span>, donc <strong className="text-green-700">(d₂) ⊥ (d₃)</strong>. De même, (d₃) ∥ (d) et (d₁) ⊥ (d) donnent <strong className="text-green-700">(d₁) ⊥ (d₃)</strong>.</li>
                </ul>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Projeté orthogonal"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted sm:text-base">Soit (D) une droite, E et F deux points n&apos;appartenant pas à la droite (D).</p>
                <Fig>
                  <svg viewBox="0 0 470 260" className="mx-auto h-auto w-full max-w-md">
                    <line x1="25" y1="230.8" x2="445" y2="209.2" stroke="#0f172a" strokeWidth={2} />
                    <FigLabel x={20} y={245} fontSize={14}>(D)</FigLabel>
                    <PointCross x={145} y={55} /><FigLabel x={134} y={50}>E</FigLabel>
                    <PointCross x={325} y={105} /><FigLabel x={337} y={103}>F</FigLabel>
                  </svg>
                </Fig>
                <ol className="mt-4 list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                  <li>Tracer le point E′ projeté orthogonal du point E sur la droite (D).</li>
                  <li>Tracer le point F′ projeté orthogonal du point F sur la droite (D).</li>
                  <li>Montrer que les droites (EE′) et (FF′) sont parallèles.</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="0 0 470 260" className="mx-auto h-auto w-full max-w-md">
                    <line x1="25" y1="230.8" x2="445" y2="209.2" stroke="#0f172a" strokeWidth={2} />
                    <line x1="150" y1="60" x2="158.4" y2="223.9" stroke="#0d9488" strokeWidth={2} />
                    <line x1="330" y1="110" x2="335.4" y2="214.9" stroke="#e11d48" strokeWidth={2} />
                    <RightAngle x={151} y={212} rotate="rotate(-8 156.5 217.5)" />
                    <RightAngle x={327} y={203} rotate="rotate(-8 332.5 208.5)" />
                    <PointCross x={145} y={55} /><FigLabel x={134} y={50}>E</FigLabel>
                    <PointCross x={325} y={105} /><FigLabel x={337} y={103}>F</FigLabel>
                    <PointCross x={153.4} y={218.9} /><FigLabel x={150} y={245}>E′</FigLabel>
                    <PointCross x={330.4} y={209.9} /><FigLabel x={330} y={238}>F′</FigLabel>
                  </svg>
                </Fig>
                <p className="mt-4 text-sm text-foreground">Par construction, (EE′) ⊥ (D) et (FF′) ⊥ (D). Or deux droites perpendiculaires à une même troisième droite sont parallèles entre elles <span className="text-foreground-muted">(propriété e4)</span>. Donc <strong className="text-green-700">(EE′) ∥ (FF′)</strong>.</p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Construction guidée (6 étapes)"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted sm:text-base">On considère la figure suivante :</p>
                <Fig>
                  <svg viewBox="0 0 500 260" className="mx-auto h-auto w-full max-w-md">
                    <line x1="25.2" y1="232.1" x2="474.8" y2="167.9" stroke="#0f172a" strokeWidth={2} />
                    <FigLabel x={18} y={248} fontSize={14}>(D)</FigLabel>
                    <PointCross x={140} y={210} /><FigLabel x={150} y={238}>B</FigLabel>
                    <PointCross x={404} y={177} /><FigLabel x={410} y={172}>A</FigLabel>
                    <PointCross x={265} y={50} /><FigLabel x={278} y={48}>C</FigLabel>
                  </svg>
                </Fig>
                <ol className="mt-4 list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                  <li>Tracer une droite (Δ) passant par le point C et qui coupe (D) au point A.</li>
                  <li>Tracer une droite (K) passant par le point C et parallèle à la droite (D).</li>
                  <li>Construire E le projeté orthogonal du point C sur la droite (D).</li>
                  <li>Construire F le milieu du segment [AC].</li>
                  <li>Construire un point M tel que : M ∈ (K) et B, F et M sont des points alignés.</li>
                  <li>Construire un point N tel que : le point C est le milieu du segment [AN].</li>
                </ol>
              </div>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="0 0 500 260" className="mx-auto h-auto w-full max-w-md">
                    <line x1="25.2" y1="232.1" x2="474.8" y2="167.9" stroke="#0f172a" strokeWidth={2} />
                    <FigLabel x={18} y={248} fontSize={14}>(D)</FigLabel>
                    <line x1="264.8" y1="133.9" x2="328.1" y2="208.9" stroke="#0d9488" strokeWidth={2} />
                    <FigLabel x={330} y={215} fontSize={13} fill="#0d9488">(Δ)</FigLabel>
                    <line x1="111.6" y1="162.6" x2="463" y2="112.4" stroke="#e11d48" strokeWidth={2} />
                    <FigLabel x={465} y={108} fontSize={13} fill="#e11d48">(K)</FigLabel>
                    <line x1="270" y1="140" x2="278" y2="196" stroke="#0f172a" strokeWidth={1.3} strokeDasharray="4 3" />
                    <RightAngle x={272} y={187} size={10} rotate="rotate(7 277 192)" />
                    <line x1="145" y1="215" x2="438" y2="116" stroke="#7c3aed" strokeWidth={1.3} strokeDasharray="3 3" />
                    <line x1="313" y1="191" x2="227" y2="89" stroke="#f59e0b" strokeWidth={1.6} strokeDasharray="5 3" />
                    <PointCross x={140} y={210} /><FigLabel x={150} y={238}>B</FigLabel>
                    <PointCross x={308} y={186} /><FigLabel x={314} y={182}>A</FigLabel>
                    <PointCross x={265} y={135} /><FigLabel x={278} y={133}>C</FigLabel>
                    <PointCross x={273} y={191} /><FigLabel x={284} y={205}>E</FigLabel>
                    <PointCross x={286.5} y={160.5} /><FigLabel x={298} y={158}>F</FigLabel>
                    <PointCross x={433} y={111} /><FigLabel x={443} y={108}>M</FigLabel>
                    <PointCross x={222} y={84} /><FigLabel x={207} y={82}>N</FigLabel>
                  </svg>
                </Fig>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground">
                  <li><strong>3)</strong> E : pied de la perpendiculaire à (D) passant par C <span className="text-foreground-muted">(pointillés noirs, angle droit en E)</span>.</li>
                  <li><strong>4)</strong> F : milieu de [AC] <span className="text-foreground-muted">(sur (Δ), à mi-chemin entre A et C)</span>.</li>
                  <li><strong>5)</strong> M : intersection de la droite (BF) <span className="text-foreground-muted">(violet)</span> et de la parallèle (K) <span className="text-foreground-muted">(rouge)</span>.</li>
                  <li><strong>6)</strong> N : symétrique de A par rapport à C, sur la droite (Δ) <span className="text-foreground-muted">(orange)</span>, C est le milieu de [AN].</li>
                </ul>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Triangle entre deux parallèles"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                <li>Tracer deux droites parallèles (D) et (Δ).</li>
                <li>Construire le triangle ABC tel que : A ∈ (D), B ∈ (Δ) et C ∈ (Δ).</li>
                <li>Tracer le point H, projeté orthogonal du point A sur la droite (Δ).</li>
                <li>Soit E un point de la droite (D) (différent de A). Tracer le point K, projeté orthogonal du point E sur la droite (Δ).</li>
                <li>Montrer que (D) ⊥ (AH) et (D) ⊥ (EK).</li>
                <li>Montrer que (AH) ∥ (EK).</li>
              </ol>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="0 0 500 300" className="mx-auto h-auto w-full max-w-md">
                    <line x1="15" y1="81" x2="485" y2="49" stroke="#0f172a" strokeWidth={2} />
                    <FigLabel x={8} y={70} fontSize={14}>(D)</FigLabel>
                    <line x1="5" y1="239.5" x2="495" y2="255.5" stroke="#0f172a" strokeWidth={2} />
                    <FigLabel x={8} y={235} fontSize={14}>(Δ)</FigLabel>
                    <line x1="179.7" y1="69.8" x2="110" y2="242.9" stroke="#0d9488" strokeWidth={1.8} />
                    <line x1="179.7" y1="69.8" x2="349.8" y2="250.8" stroke="#0d9488" strokeWidth={1.8} />
                    <line x1="179.7" y1="69.8" x2="173.9" y2="245.0" stroke="#e11d48" strokeWidth={1.6} strokeDasharray="5 3" />
                    <line x1="379.2" y1="56.2" x2="372.8" y2="251.5" stroke="#7c3aed" strokeWidth={1.6} strokeDasharray="5 3" />
                    <RightAngle x={164} y={234} size={11} />
                    <RightAngle x={362} y={240} size={11} />
                    <PointCross x={174.7} y={64.8} /><FigLabel x={182} y={60}>A</FigLabel>
                    <PointCross x={105} y={237.9} /><FigLabel x={90} y={245}>B</FigLabel>
                    <PointCross x={344.8} y={245.8} /><FigLabel x={348} y={268}>C</FigLabel>
                    <PointCross x={168.9} y={240} /><FigLabel x={182} y={256}>H</FigLabel>
                    <PointCross x={374.2} y={51.2} /><FigLabel x={386} y={49}>E</FigLabel>
                    <PointCross x={367.8} y={246.5} /><FigLabel x={345} y={256}>K</FigLabel>
                    <text x="8" y="20" fontSize="11" fill="#64748b">(AH) rouge · (EK) violet</text>
                  </svg>
                </Fig>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  <li><strong>5)</strong> Par construction (AH) ⊥ (Δ) et (EK) ⊥ (Δ). Or (D) ∥ (Δ), donc toute perpendiculaire à (Δ) est perpendiculaire à (D) <span className="text-foreground-muted">(propriété e3)</span>. D&apos;où <strong className="text-green-700">(D) ⊥ (AH)</strong> et <strong className="text-green-700">(D) ⊥ (EK)</strong>.</li>
                  <li><strong>6)</strong> (AH) ⊥ (D) et (EK) ⊥ (D) (question 5) : deux droites perpendiculaires à une même troisième sont parallèles <span className="text-foreground-muted">(propriété e4)</span>. Donc <strong className="text-green-700">(AH) ∥ (EK)</strong>.</li>
                </ul>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Triangle rectangle et parallèles"
            items={
              <ol className="list-inside list-decimal space-y-1.5 text-sm text-foreground-muted sm:text-base">
                <li>
                  Construire le triangle ABC rectangle en A, et tracer les droites suivantes :
                  <ul className="mt-1 ml-5 list-inside list-disc space-y-0.5 text-foreground-muted/90">
                    <li>La droite (D₁) qui passe par A et parallèle à (BC).</li>
                    <li>La droite (D₂) qui passe par B et parallèle à (AC).</li>
                    <li>La droite (D₃) qui passe par C et parallèle à (AB).</li>
                  </ul>
                </li>
                <li>Montrer que : (AB) ⊥ (D₂) et (AC) ⊥ (D₃) et (D₂) ⊥ (D₃).</li>
              </ol>
            }
            correction={
              <div>
                <Fig>
                  <svg viewBox="-25 0 490 330" className="mx-auto h-auto w-full max-w-md">
                    <g stroke="#0f172a" strokeWidth={2}>
                      <line x1="150" y1="55" x2="55" y2="190" />
                      <line x1="150" y1="55" x2="387.2" y2="221.9" />
                      <line x1="55" y1="190" x2="387.2" y2="221.9" />
                    </g>
                    <RightAngle x={128} y={66} size={13} rotate="rotate(125 134.5 72.5)" />
                    <line x1="55.4" y1="45.9" x2="244.6" y2="64.1" stroke="#0d9488" strokeWidth={1.8} />
                    <line x1="-18.6" y1="138.2" x2="128.6" y2="241.8" stroke="#e11d48" strokeWidth={1.8} />
                    <line x1="439.0" y1="148.3" x2="335.4" y2="295.5" stroke="#7c3aed" strokeWidth={1.8} />
                    <FigLabel x={246} y={60} fontSize={13} fill="#0d9488">(D₁)</FigLabel>
                    <FigLabel x={-22} y={135} fontSize={13} fill="#e11d48">(D₂)</FigLabel>
                    <FigLabel x={441} y={145} fontSize={13} fill="#7c3aed">(D₃)</FigLabel>
                    <PointCross x={145} y={50} /><FigLabel x={152} y={46}>A</FigLabel>
                    <PointCross x={50} y={185} /><FigLabel x={34} y={192}>B</FigLabel>
                    <PointCross x={382.2} y={216.9} /><FigLabel x={393} y={230}>C</FigLabel>
                  </svg>
                </Fig>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  <li>(D₂) ∥ (AC) et (AB) ⊥ (AC) <span className="text-foreground-muted">(angle droit en A, donné)</span> : toute perpendiculaire à (AC) est perpendiculaire à (D₂) <span className="text-foreground-muted">(propriété e3)</span>. Donc <strong className="text-green-700">(AB) ⊥ (D₂)</strong>.</li>
                  <li>(D₃) ∥ (AB) et (AC) ⊥ (AB) : de même, <strong className="text-green-700">(AC) ⊥ (D₃)</strong>.</li>
                  <li>(D₂) ∥ (AC) et (AC) ⊥ (D₃) (ligne précédente) : toute perpendiculaire à (AC) l&apos;est aussi à toute parallèle de (AC), donc <strong className="text-green-700">(D₂) ⊥ (D₃)</strong> <span className="text-foreground-muted">(propriété e3, appliquée à (D₃) ⊥ (AC) et (D₂) ∥ (AC))</span>.</li>
                </ul>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
