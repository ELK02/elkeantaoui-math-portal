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
  title: "Calcul vectoriel dans le plan · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet de calcul vectoriel dans le plan : vecteurs, égalité de deux vecteurs, somme et relation de Chasles, multiplication d'un vecteur par un réel, colinéarité, milieu d'un segment, avec 12 exercices corrigés. Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "Calcul vectoriel dans le plan",
  heroSubtitle:
    "Vecteurs, relation de Chasles, multiplication par un réel, colinéarité et milieu d'un segment : le cours complet, illustré, puis 12 exercices intégralement corrigés.",
  footerNote: "Calcul vectoriel dans le plan · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "cours-vecteurs", label: "Vecteurs & égalité" },
    { id: "cours-somme", label: "Somme & Chasles" },
    { id: "cours-mult", label: "Multiplication par un réel" },
    { id: "cours-colinearite", label: "Colinéarité & milieu" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Two-column layout: text on the left, an SVG figure on the right. */
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

/** A numbered block used to structure the "Cours" section (I, II, III...). */
function CourseBlock({
  numeral,
  title,
  children,
}: {
  numeral: ReactNode;
  title: string;
  children: ReactNode;
}) {
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

function ArrowDefs({ id, color = "currentColor" }: { id: string; color?: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L6,3 L0,6 Z" fill={color} />
      </marker>
    </defs>
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
          { value: "6", label: "notions du cours" },
          { value: "12", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-vecteurs"
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
          <svg viewBox="0 0 240 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <ArrowDefs id="heroArrow" color="#fb923c" />
            <line x1="30" y1="170" x2="120" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.85" markerEnd="url(#heroArrow)" />
            <line x1="120" y1="60" x2="210" y2="110" stroke="currentColor" strokeWidth="2" opacity="0.85" markerEnd="url(#heroArrow)" />
            <line x1="30" y1="170" x2="210" y2="110" stroke="#fb923c" strokeWidth="2.5" markerEnd="url(#heroArrow)" />
            <text x="14" y="185" fontSize="14" fontWeight="700" fill="white">A</text>
            <text x="118" y="50" fontSize="14" fontWeight="700" fill="white">B</text>
            <text x="214" y="122" fontSize="14" fontWeight="700" fill="white">C</text>
          </svg>
        }
      />

      {/* ===================== I & II. VECTEURS & ÉGALITÉ ===================== */}
      <LessonSection
        id="cours-vecteurs"
        kicker="01 · Les bases"
        title="Vecteurs du plan et égalité de deux vecteurs"
        tone="light"
        description="Un vecteur est défini par une direction, un sens et une norme. Deux vecteurs sont égaux s'ils partagent ces trois données."
      >
        <CourseBlock numeral="I" title="Vecteurs du plan">
          <Figure
            text={
              <>
                <p>
                  Soient <Math tex="A" /> et <Math tex="B" /> deux points du plan <Math tex="\mathcal P" />. Un
                  vecteur <Math tex="\overrightarrow{AB}" /> est défini par trois données :
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    une <strong>direction</strong> : celle de la droite <Math tex="(AB)" /> ;
                  </li>
                  <li>
                    un <strong>sens</strong> de parcours (de <Math tex="A" /> vers <Math tex="B" />) ;
                  </li>
                  <li>
                    une <strong>norme</strong> (ou longueur), notée <Math tex="\lVert\overrightarrow{AB}\rVert = AB" />.
                  </li>
                </ul>
              </>
            }
            svg={
              <svg viewBox="0 0 240 200" className="h-auto w-full max-w-[260px] text-neutral-700">
                <ArrowDefs id="v1" />
                <line x1="50" y1="150" x2="210" y2="60" stroke="currentColor" strokeWidth="2" markerEnd="url(#v1)" />
                <circle cx="50" cy="150" r="3" fill="currentColor" />
                <circle cx="210" cy="60" r="3" fill="currentColor" />
                <text x="34" y="168" fontSize="14" fontWeight="700">A</text>
                <text x="214" y="52" fontSize="14" fontWeight="700">B</text>
                <text x="120" y="95" fontSize="13" fontStyle="italic">direction, sens, norme</text>
              </svg>
            }
          />
          <Callout variant="info" title="Vecteur nul">
            Pour tout point <Math tex="A" /> du plan, on note <Math tex="\vec 0" /> le vecteur nul :{" "}
            <Math tex="\overrightarrow{AA} = \vec 0" />. Le vecteur <Math tex="\overrightarrow{BA}" /> a la même
            direction que <Math tex="\overrightarrow{AB}" /> mais un sens contraire : c&apos;est son{" "}
            <strong>opposé</strong>, on écrit <Math tex="\overrightarrow{BA} = -\overrightarrow{AB}" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="L'égalité de deux vecteurs">
          <Callout variant="success" title="Définition">
            Deux vecteurs <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" /> sont{" "}
            <strong>égaux</strong> s&apos;ils ont même direction, même sens et même norme.
          </Callout>
          <Callout variant="warning" title="Remarque">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\overrightarrow{AB}=\overrightarrow{CD}=\overrightarrow{EF}=\dots" />, on note ce
                vecteur <Math tex="\vec u" /> ; <Math tex="\overrightarrow{AB}" />, <Math tex="\overrightarrow{CD}" />{" "}
                et <Math tex="\overrightarrow{EF}" /> sont des représentants du même vecteur <Math tex="\vec u" />.
              </li>
              <li>
                <Math tex="\overrightarrow{AB}=\vec 0" /> si et seulement si <Math tex="A=B" />.
              </li>
            </ul>
          </Callout>
          <Figure
            text={
              <>
                <p className="font-semibold text-foreground-muted">Propriété 1</p>
                <p>
                  Soient <Math tex="A,B,C,D" /> des points du plan avec <Math tex="A\neq B" /> et{" "}
                  <Math tex="C\neq D" />. Alors :
                </p>
                <p className="text-center">
                  <Math tex="\overrightarrow{AB}=\overrightarrow{CD}\ \text{ ssi } ABDC \text{ est un parallélogramme}" />
                </p>
                <p className="text-xs text-foreground-muted">
                  (attention à l&apos;ordre des sommets : <Math tex="ABDC" />, et non <Math tex="ABCD" />)
                </p>
                <p className="mt-3 font-semibold text-foreground-muted">Propriétés 2 et 3</p>
                <p>
                  <Math tex="\overrightarrow{AB}=\overrightarrow{CD} \iff \overrightarrow{AC}=\overrightarrow{BD}" />.
                  Étant donné un point <Math tex="A" /> et un vecteur <Math tex="\vec u" />, il existe un{" "}
                  <strong>unique</strong> point <Math tex="M" /> tel que <Math tex="\overrightarrow{AM}=\vec u" />.
                </p>
              </>
            }
            svg={
              <svg viewBox="0 0 220 260" className="h-auto w-full max-w-[220px] text-neutral-700">
                <ArrowDefs id="v2" />
                <polygon points="60,180 150,80 180,120 90,220" fill="#4f46e5" fillOpacity="0.06" stroke="none" />
                <line x1="60" y1="180" x2="150" y2="80" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#v2)" />
                <line x1="90" y1="220" x2="180" y2="120" stroke="#e11d48" strokeWidth="2" markerEnd="url(#v2)" />
                <line x1="60" y1="180" x2="90" y2="220" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" />
                <line x1="150" y1="80" x2="180" y2="120" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 3" />
                <circle cx="60" cy="180" r="3" fill="currentColor" /><text x="42" y="198" fontSize="13" fontWeight="700">A</text>
                <circle cx="150" cy="80" r="3" fill="currentColor" /><text x="154" y="72" fontSize="13" fontWeight="700">B</text>
                <circle cx="90" cy="220" r="3" fill="currentColor" /><text x="72" y="238" fontSize="13" fontWeight="700">C</text>
                <circle cx="180" cy="120" r="3" fill="currentColor" /><text x="184" y="112" fontSize="13" fontWeight="700">D</text>
              </svg>
            }
          />
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. SOMME & CHASLES ===================== */}
      <LessonSection
        id="cours-somme"
        kicker="02 · Addition de vecteurs"
        title="Somme de deux vecteurs et relation de Chasles"
        tone="muted"
        description="La relation de Chasles définit la somme de deux vecteurs ; elle sert aussi à factoriser ou à faire apparaître de nouveaux points dans une démonstration."
      >
        <CourseBlock numeral="III" title="Relation de Chasles et règle du parallélogramme">
          <Callout variant="success" title="Propriété — relation de Chasles (admise)">
            <p className="text-center">
              Pour tous points <Math tex="A,B,C" /> du plan :{" "}
              <strong>
                <Math tex="\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}" />
              </strong>
            </p>
          </Callout>
          <Figure
            text={
              <>
                <p>Cette relation s&apos;utilise de trois manières différentes :</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>c&apos;est elle qui définit la somme de deux vecteurs ;</li>
                  <li>elle permet de <strong>réduire</strong> des sommes vectorielles (« factorisation ») ;</li>
                  <li>
                    elle permet, dans les démonstrations, d&apos;<strong>intercaler un point</strong> dans une écriture
                    vectorielle (« développement »).
                  </li>
                </ul>
              </>
            }
            svg={
              <svg viewBox="0 0 260 200" className="h-auto w-full max-w-[260px] text-neutral-700">
                <ArrowDefs id="v3" />
                <line x1="50" y1="190" x2="190" y2="70" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#v3)" />
                <line x1="190" y1="70" x2="260" y2="150" stroke="currentColor" strokeWidth="1.8" markerEnd="url(#v3)" />
                <line x1="50" y1="190" x2="260" y2="150" stroke="#e11d48" strokeWidth="2.2" markerEnd="url(#v3)" />
                <circle cx="50" cy="190" r="3" fill="currentColor" /><text x="32" y="208" fontSize="13" fontWeight="700">A</text>
                <circle cx="190" cy="70" r="3" fill="currentColor" /><text x="190" y="60" fontSize="13" fontWeight="700">B</text>
                <circle cx="260" cy="150" r="3" fill="currentColor" /><text x="238" y="168" fontSize="13" fontWeight="700">C</text>
              </svg>
            }
          />
          <FormulaBlock
            tex="\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{AC}\ \text{ tel que } ABDC \text{ est un parallélogramme}"
            caption="règle du parallélogramme"
          />
          <Figure
            text={
              <p>
                Soient <Math tex="\vec u" /> et <Math tex="\vec v" /> deux vecteurs et <Math tex="A" /> un point du
                plan. Il existe un unique point <Math tex="B" /> tel que <Math tex="\overrightarrow{AB}=\vec u" /> et
                un unique point <Math tex="C" /> tel que <Math tex="\overrightarrow{AC}=\vec v" />. La somme{" "}
                <Math tex="\vec u+\vec v" /> est alors le vecteur <Math tex="\overrightarrow{AD}" /> tel que{" "}
                <Math tex="ABDC" /> soit un parallélogramme.
              </p>
            }
            reverse
            svg={
              <svg viewBox="0 0 360 260" className="h-auto w-full max-w-[300px] text-neutral-700">
                <ArrowDefs id="v4" />
                <polygon points="70,240 240,160 320,10 150,90" fill="#0ea5e9" fillOpacity="0.06" stroke="none" />
                <line x1="70" y1="240" x2="240" y2="160" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#v4)" />
                <line x1="70" y1="240" x2="150" y2="90" stroke="#e11d48" strokeWidth="2" markerEnd="url(#v4)" />
                <line x1="70" y1="240" x2="320" y2="10" stroke="currentColor" strokeWidth="2.2" markerEnd="url(#v4)" />
                <line x1="240" y1="160" x2="320" y2="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
                <line x1="150" y1="90" x2="320" y2="10" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
                <circle cx="70" cy="240" r="3.2" fill="currentColor" /><text x="52" y="256" fontSize="14" fontWeight="700">A</text>
                <circle cx="240" cy="160" r="3.2" fill="#0ea5e9" /><text x="244" y="154" fontSize="14" fontWeight="700" fill="#0ea5e9">B</text>
                <circle cx="150" cy="90" r="3.2" fill="#e11d48" /><text x="118" y="84" fontSize="14" fontWeight="700" fill="#e11d48">C</text>
                <circle cx="320" cy="10" r="3.2" fill="currentColor" /><text x="326" y="14" fontSize="14" fontWeight="700">D</text>
              </svg>
            }
          />
          <Callout variant="warning" title="Remarque — différence de deux vecteurs">
            <Math tex="\vec u - \vec v = \vec u + (-\vec v)" />.
          </Callout>
        </CourseBlock>

        <div className="rounded-2xl border border-border bg-surface p-6 text-sm sm:p-8">
          <p className="mb-3 font-display font-bold text-foreground">Exemple résolu — parallélogramme</p>
          <Figure
            text={
              <>
                <p>
                  <Math tex="ABC" /> un triangle non aligné. <Math tex="D" /> et <Math tex="E" /> vérifient{" "}
                  <Math tex="\overrightarrow{AD}=\overrightarrow{BC}" /> et{" "}
                  <Math tex="\overrightarrow{AE}+\overrightarrow{AD}=\vec 0" />. Quelle est la nature du quadrilatère{" "}
                  <Math tex="EACB" /> ?
                </p>
                <p>
                  De <Math tex="\overrightarrow{AE}+\overrightarrow{AD}=\vec 0" /> on tire{" "}
                  <Math tex="\overrightarrow{AE}=-\overrightarrow{AD}" />. Or{" "}
                  <Math tex="\overrightarrow{AD}=\overrightarrow{BC}" />, donc{" "}
                  <Math tex="\overrightarrow{BC}=-\overrightarrow{AE}=\overrightarrow{EA}" />. Ainsi{" "}
                  <strong className="text-green-700">
                    <Math tex="\overrightarrow{BC}=\overrightarrow{EA}" />
                  </strong>{" "}
                  : le quadrilatère <Math tex="EACB" /> est un parallélogramme.
                </p>
              </>
            }
            svg={
              <svg viewBox="0 0 320 300" className="h-auto w-full max-w-[280px] text-neutral-700">
                <ArrowDefs id="v7" />
                <ArrowDefs id="v7blue" color="#0ea5e9" />
                {/* quadrilatère EACB, la réponse */}
                <polygon points="230,270 130,150 190,30 290,150" fill="#4f46e5" fillOpacity="0.07" stroke="none" />
                <polyline
                  points="230,270 130,150 190,30 290,150 230,270"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeOpacity="0.5"
                />
                {/* diagonale AB, 3e côté du triangle ABC */}
                <line x1="130" y1="150" x2="290" y2="150" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.6" />
                {/* construction : A -> D, tel que AD = BC */}
                <line x1="130" y1="150" x2="30" y2="30" stroke="#0ea5e9" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#v7blue)" />
                {/* les deux vecteurs égaux : E->A et B->C */}
                <line x1="230" y1="270" x2="130" y2="150" stroke="#0ea5e9" strokeWidth="2.2" markerEnd="url(#v7blue)" />
                <line x1="290" y1="150" x2="190" y2="30" stroke="#0ea5e9" strokeWidth="2.2" markerEnd="url(#v7blue)" />
                <circle cx="130" cy="150" r="3.2" fill="currentColor" /><text x="112" y="170" fontSize="14" fontWeight="700">A</text>
                <circle cx="290" cy="150" r="3.2" fill="currentColor" /><text x="296" y="154" fontSize="14" fontWeight="700">B</text>
                <circle cx="190" cy="30" r="3.2" fill="currentColor" /><text x="196" y="24" fontSize="14" fontWeight="700">C</text>
                <circle cx="30" cy="30" r="3.2" fill="#0ea5e9" /><text x="6" y="24" fontSize="14" fontWeight="700" fill="#0ea5e9">D</text>
                <circle cx="230" cy="270" r="3.2" fill="#0ea5e9" /><text x="236" y="288" fontSize="14" fontWeight="700" fill="#0ea5e9">E</text>
              </svg>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== IV. MULTIPLICATION PAR UN RÉEL ===================== */}
      <LessonSection
        id="cours-mult"
        kicker="03 · Multiplication par un réel"
        title="Multiplier un vecteur par un nombre"
        tone="light"
        description="Multiplier un vecteur par un réel k change (ou non) son sens et multiplie sa norme par |k|."
      >
        <CourseBlock numeral="IV" title="Définition et propriétés">
          <Figure
            text={
              <>
                <p>
                  Étant donné un vecteur <Math tex="\vec u" /> et un réel <Math tex="k" />, on appelle{" "}
                  <Math tex="k\vec u" /> le vecteur tel que :
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    si <Math tex="k=0" /> ou <Math tex="\vec u=\vec 0" />, alors <Math tex="k\vec u=\vec 0" /> ;
                  </li>
                  <li>
                    si <Math tex="k>0" />, alors <Math tex="k\vec u" /> a même direction et même sens que{" "}
                    <Math tex="\vec u" />, avec <Math tex="\lVert k\vec u\rVert = k\lVert\vec u\rVert" /> ;
                  </li>
                  <li>
                    si <Math tex="k<0" />, alors <Math tex="k\vec u" /> a même direction et un sens{" "}
                    <strong>contraire</strong> à <Math tex="\vec u" />, avec{" "}
                    <Math tex="\lVert k\vec u\rVert = -k\lVert\vec u\rVert" />.
                  </li>
                </ul>
              </>
            }
            svg={
              <svg viewBox="0 0 360 200" className="h-auto w-full max-w-[320px] text-neutral-700">
                <ArrowDefs id="v5" />
                <line x1="40" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="2" markerEnd="url(#v5)" />
                <text x="80" y="48" fontSize="13" fontStyle="italic">u</text>
                <line x1="40" y1="110" x2="240" y2="110" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#v5)" />
                <text x="130" y="98" fontSize="13" fontStyle="italic" fill="#0ea5e9">2u</text>
                <line x1="340" y1="170" x2="40" y2="170" stroke="#e11d48" strokeWidth="2" markerEnd="url(#v5)" />
                <text x="170" y="188" fontSize="13" fontStyle="italic" fill="#e11d48">−3u</text>
              </svg>
            }
          />
          <Callout variant="warning" title="Cas particuliers et remarques">
            <Math tex="1\cdot\vec u=\vec u" />, <Math tex="(-1)\cdot\vec u=-\vec u" />. Si{" "}
            <Math tex="k\vec u=\vec 0" /> alors <Math tex="k=0" /> ou <Math tex="\vec u=\vec 0" />.
          </Callout>
          <FormulaBlock tex="a(\vec u+\vec v)=a\vec u+a\vec v \qquad (a+b)\vec u=a\vec u+b\vec u \qquad a(b\vec u)=(ab)\vec u" />
          <p className="text-sm text-foreground-muted">
            Conséquences : <Math tex="a(\vec u-\vec v)=a\vec u-a\vec v" /> et{" "}
            <Math tex="(a-b)\vec u=a\vec u-b\vec u" />, pour tous vecteurs <Math tex="\vec u,\vec v" /> et tous réels{" "}
            <Math tex="a,b" />.
          </p>
        </CourseBlock>

        <div className="rounded-2xl border border-border bg-surface p-6 text-sm sm:p-8">
          <p className="mb-3 font-display font-bold text-foreground">Exemple résolu — simplifier une écriture</p>
          <p className="mb-2">
            Simplifier <Math tex="\overrightarrow{W_1}=2(\vec u+\vec v)-4\!\left(\tfrac12\vec u-\vec v\right)" />.
          </p>
          <p>
            <Math tex="\overrightarrow{W_1}=2\vec u+2\vec v-4\times\tfrac12\vec u+4\vec v = 2\vec u+2\vec v-2\vec u+4\vec v = 6\vec v" />
            . Donc <strong className="text-green-700"><Math tex="\overrightarrow{W_1}=6\vec v" /></strong>.
          </p>
        </div>
      </LessonSection>

      {/* ===================== V & VI. COLINÉARITÉ & MILIEU ===================== */}
      <LessonSection
        id="cours-colinearite"
        kicker="04 · Colinéarité et milieu"
        title="Colinéarité de deux vecteurs, milieu d'un segment"
        tone="muted"
        description="La colinéarité est l'outil de base pour prouver un alignement ou un parallélisme. Le milieu d'un segment se caractérise de plusieurs façons équivalentes."
      >
        <CourseBlock numeral="V" title="La colinéarité de deux vecteurs">
          <Callout variant="success" title="Définition">
            Deux vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" /> sont <strong>colinéaires</strong> s&apos;il
            existe un réel <Math tex="k" /> tel que <Math tex="\vec u=k\vec v" />. Le vecteur nul est colinéaire à
            tous les vecteurs du plan ; deux vecteurs non nuls sont colinéaires ssi ils ont la même direction.
          </Callout>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/40 p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Propriété (admise)</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                <Math tex="A,B,C" /> alignés ssi il existe <Math tex="k\in\mathbb R" /> tel que{" "}
                <Math tex="\overrightarrow{AB}=k\overrightarrow{AC}" />.
              </li>
              <li>
                Pour <Math tex="(AB)" /> une droite : <Math tex="M\in(AB)" /> ssi <Math tex="\overrightarrow{AM}" />{" "}
                et <Math tex="\overrightarrow{AB}" /> sont colinéaires.
              </li>
              <li>
                <Math tex="(AB)\parallel(CD)" /> ssi <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" />{" "}
                sont colinéaires.
              </li>
            </ol>
          </div>
          <Figure
            text={
              <>
                <p>
                  <strong>Exemple résolu.</strong> <Math tex="ABC" /> un triangle, <Math tex="E,F" /> tels que{" "}
                  <Math tex="\overrightarrow{AF}=\tfrac43\overrightarrow{AC}" /> et{" "}
                  <Math tex="\overrightarrow{CE}=\tfrac14\overrightarrow{AB}" />. Montrer que <Math tex="E,F,B" /> sont
                  alignés.
                </p>
                <p>
                  De <Math tex="\overrightarrow{CE}=\tfrac14\overrightarrow{AB}" /> on tire{" "}
                  <Math tex="\overrightarrow{BA}=4\overrightarrow{EC}" />, donc{" "}
                  <Math tex="\overrightarrow{BF}=\overrightarrow{BA}+\overrightarrow{AF}=4\overrightarrow{EC}+\tfrac43\overrightarrow{AC}" />
                  . Comme <Math tex="\overrightarrow{CF}=\tfrac13\overrightarrow{AC}" />, on a{" "}
                  <Math tex="\overrightarrow{BF}=4(\overrightarrow{EC}+\overrightarrow{CF})=4\overrightarrow{EF}" />.
                </p>
                <p>
                  Donc <Math tex="\overrightarrow{BF}" /> et <Math tex="\overrightarrow{EF}" /> sont colinéaires :{" "}
                  <strong className="text-green-700"><Math tex="E,F,B" /> sont alignés</strong>.
                </p>
              </>
            }
            svg={
              <svg viewBox="0 0 240 260" className="h-auto w-full max-w-[240px] text-neutral-700">
                <ArrowDefs id="v6" />
                <line x1="60" y1="220" x2="60" y2="60" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#v6)" />
                <line x1="60" y1="220" x2="180" y2="220" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#v6)" />
                <line x1="180" y1="220" x2="90" y2="100" stroke="#e11d48" strokeWidth="1.8" strokeDasharray="0" />
                <circle cx="60" cy="220" r="3" fill="currentColor" /><text x="42" y="238" fontSize="13" fontWeight="700">A</text>
                <circle cx="180" cy="220" r="3" fill="currentColor" /><text x="184" y="238" fontSize="13" fontWeight="700">B</text>
                <circle cx="60" cy="100" r="3" fill="#e11d48" /><text x="40" y="98" fontSize="13" fontWeight="700" fill="#e11d48">C</text>
                <circle cx="60" cy="60" r="3" fill="currentColor" /><text x="40" y="56" fontSize="13" fontWeight="700">F</text>
                <circle cx="90" cy="100" r="3" fill="#e11d48" /><text x="96" y="96" fontSize="13" fontWeight="700" fill="#e11d48">E</text>
              </svg>
            }
          />
        </CourseBlock>

        <CourseBlock numeral="VI" title="Milieu d'un segment">
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-2 font-semibold text-foreground-muted">Propriété 1 — caractérisations équivalentes</p>
            <p>Pour <Math tex="A,B,I" /> points du plan, les assertions suivantes sont équivalentes :</p>
            <ol className="mt-1 list-decimal space-y-1 pl-5">
              <li><Math tex="I" /> est le milieu du segment <Math tex="[AB]" />.</li>
              <li><Math tex="\overrightarrow{AI}=\overrightarrow{IB}" /></li>
              <li><Math tex="\overrightarrow{AI}=\tfrac12\overrightarrow{AB}" /></li>
              <li><Math tex="\overrightarrow{IA}+\overrightarrow{IB}=\vec 0" /></li>
            </ol>
          </div>
          <Callout variant="success" title="Propriété 2 — caractérisation du milieu par un point quelconque">
            <p>
              <Math tex="I" /> est le milieu de <Math tex="[AB]" /> ssi, pour tout point <Math tex="M" /> :
            </p>
            <p className="mt-1 text-center font-display text-lg font-bold text-green-700">
              <Math tex="\overrightarrow{MA}+\overrightarrow{MB}=2\overrightarrow{MI}" />
            </p>
          </Callout>
          <Figure
            text={
              <>
                <p>
                  <strong>Exemple résolu.</strong> <Math tex="ABC" /> un triangle, <Math tex="E,F" /> tels que{" "}
                  <Math tex="\overrightarrow{AF}=\overrightarrow{AB}+\overrightarrow{AC}" /> et{" "}
                  <Math tex="\overrightarrow{BE}=\overrightarrow{BA}+\overrightarrow{BC}" />. Montrer que{" "}
                  <Math tex="C" /> est le milieu de <Math tex="[EF]" />.
                </p>
                <p>
                  De <Math tex="\overrightarrow{BE}=\overrightarrow{BA}+\overrightarrow{BC}" /> et Chasles (via{" "}
                  <Math tex="C" />) : <Math tex="\overrightarrow{BC}+\overrightarrow{CE}=\overrightarrow{BA}+\overrightarrow{BC}" />
                  , donc <Math tex="\overrightarrow{CE}=\overrightarrow{BA}" />. De même,{" "}
                  <Math tex="\overrightarrow{AC}+\overrightarrow{CF}=\overrightarrow{AB}+\overrightarrow{AC}" />, donc{" "}
                  <Math tex="\overrightarrow{CF}=\overrightarrow{AB}" />.
                </p>
                <p>
                  Donc <Math tex="\overrightarrow{CE}+\overrightarrow{CF}=\overrightarrow{BA}+\overrightarrow{AB}=\vec 0" />
                  . D&apos;où <strong className="text-green-700"><Math tex="C" /> est le milieu de <Math tex="[EF]" /></strong>.
                </p>
              </>
            }
            reverse
            svg={
              <svg viewBox="0 0 340 230" className="h-auto w-full max-w-[300px] text-neutral-700">
                <line x1="150" y1="200" x2="258" y2="200" stroke="currentColor" strokeWidth="1.6" />
                <line x1="78" y1="110" x2="294" y2="110" stroke="#e11d48" strokeWidth="1.6" strokeDasharray="5 3" />
                <line x1="150" y1="200" x2="186" y2="110" stroke="currentColor" strokeWidth="1.4" />
                <line x1="258" y1="200" x2="186" y2="110" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="150" cy="200" r="3" fill="currentColor" /><text x="132" y="218" fontSize="13" fontWeight="700">A</text>
                <circle cx="258" cy="200" r="3" fill="currentColor" /><text x="262" y="218" fontSize="13" fontWeight="700">B</text>
                <circle cx="186" cy="110" r="3.2" fill="#e11d48" /><text x="192" y="108" fontSize="13" fontWeight="700" fill="#e11d48">C</text>
                <circle cx="78" cy="110" r="3" fill="currentColor" /><text x="56" y="102" fontSize="13" fontWeight="700">E</text>
                <circle cx="294" cy="110" r="3" fill="currentColor" /><text x="298" y="102" fontSize="13" fontWeight="700">F</text>
              </svg>
            }
          />
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Calcul vectoriel dans le plan"
        tone="light"
        description="12 exercices corrigés. Cherche sur ton cahier, puis clique pour vérifier ta réponse."
      >
        <ExerciseGroup total={12} celebrationTitle="Bravo, les 12 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le calcul vectoriel dans le plan.">
          <ExerciseCard
            id="1" index={1}
            title="Exprimer trois vecteurs en fonction de AB et AC"
            items={
              <>
                <p>
                  <Math tex="A,B,C" /> sont trois points non alignés. Exprimer, en fonction des vecteurs{" "}
                  <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{AC}" /> seulement, les vecteurs :
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li><Math tex="\vec u = 2\overrightarrow{AB}-3\overrightarrow{AC}+\overrightarrow{BA}" /></li>
                  <li><Math tex="\vec v = \overrightarrow{AB}+2\overrightarrow{AC}-\overrightarrow{BC}" /></li>
                  <li><Math tex="\vec w = -2\overrightarrow{BA}+\overrightarrow{BC}" /></li>
                </ul>
              </>
            }
            correction={
              <>
                <p>
                  On utilise <Math tex="\overrightarrow{BA}=-\overrightarrow{AB}" /> et{" "}
                  <Math tex="\overrightarrow{BC}=\overrightarrow{AC}-\overrightarrow{AB}" /> (Chasles).
                </p>
                <p>
                  <Math tex="\vec u = 2\overrightarrow{AB}-3\overrightarrow{AC}-\overrightarrow{AB} = \overrightarrow{AB}-3\overrightarrow{AC}" />
                </p>
                <p>
                  <Math tex="\vec v = \overrightarrow{AB}+2\overrightarrow{AC}-(\overrightarrow{AC}-\overrightarrow{AB}) = 2\overrightarrow{AB}+\overrightarrow{AC}" />
                </p>
                <p>
                  <Math tex="\vec w = 2\overrightarrow{AB}+(\overrightarrow{AC}-\overrightarrow{AB}) = \overrightarrow{AB}+\overrightarrow{AC}" />
                </p>
              </>
            }
          />

          <ExerciseCard
            id="2" index={2}
            title="Deux identités vectorielles générales"
            items={
              <p>
                <Math tex="A,B,C,D" /> sont quatre points du plan. Montrer que :{" "}
                <Math tex="\overrightarrow{AB}+\overrightarrow{DC}=\overrightarrow{AC}+\overrightarrow{DB}" /> et{" "}
                <Math tex="\overrightarrow{AC}+\overrightarrow{BD}=\overrightarrow{AD}+\overrightarrow{BC}" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> Par Chasles (on intercale <Math tex="A" /> dans{" "}
                  <Math tex="\overrightarrow{DC}" />) :{" "}
                  <Math tex="\overrightarrow{DC}=\overrightarrow{DA}+\overrightarrow{AC}" />, donc{" "}
                  <Math tex="\overrightarrow{AB}+\overrightarrow{DC}=\overrightarrow{AB}+\overrightarrow{DA}+\overrightarrow{AC}=(\overrightarrow{DA}+\overrightarrow{AB})+\overrightarrow{AC}" />
                  . Or <Math tex="\overrightarrow{DA}+\overrightarrow{AB}=\overrightarrow{DB}" /> (Chasles), donc{" "}
                  <strong className="text-green-700">
                    <Math tex="\overrightarrow{AB}+\overrightarrow{DC}=\overrightarrow{AC}+\overrightarrow{DB}" />
                  </strong>
                  .
                </p>
                <p>
                  <strong>2)</strong> On intercale <Math tex="D" /> dans <Math tex="\overrightarrow{AC}" /> :{" "}
                  <Math tex="\overrightarrow{AC}=\overrightarrow{AD}+\overrightarrow{DC}" />, donc{" "}
                  <Math tex="\overrightarrow{AC}+\overrightarrow{BD}=\overrightarrow{AD}+(\overrightarrow{DC}+\overrightarrow{BD})=\overrightarrow{AD}+(\overrightarrow{BD}+\overrightarrow{DC})" />
                  . Or <Math tex="\overrightarrow{BD}+\overrightarrow{DC}=\overrightarrow{BC}" /> (Chasles), donc{" "}
                  <strong className="text-green-700">
                    <Math tex="\overrightarrow{AC}+\overrightarrow{BD}=\overrightarrow{AD}+\overrightarrow{BC}" />
                  </strong>
                  .
                </p>
              </>
            }
          />

          <ExerciseCard
            id="3" index={3}
            title="Parallélogramme de centre O : trois vecteurs nuls"
            items={
              <p>
                <Math tex="ABCD" /> est un parallélogramme de centre <Math tex="O" />. Montrer que{" "}
                <Math tex="\vec u = \overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}" />
                , <Math tex="\vec v=\overrightarrow{AO}-\overrightarrow{BO}+\overrightarrow{CO}-\overrightarrow{DO}" />
                {" "}et <Math tex="\vec w = \overrightarrow{AB}+2\overrightarrow{BC}-\overrightarrow{AC}-\overrightarrow{AD}" />
                {" "}sont tous nuls.
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="O" /> est le milieu de <Math tex="[AC]" /> et de <Math tex="[BD]" />, donc{" "}
                  <Math tex="\overrightarrow{OA}+\overrightarrow{OC}=\vec 0" /> et{" "}
                  <Math tex="\overrightarrow{OB}+\overrightarrow{OD}=\vec 0" />. Donc{" "}
                  <strong className="text-green-700"><Math tex="\vec u=\vec 0" /></strong>.
                </p>
                <p>
                  <Math tex="\vec v = -\overrightarrow{OA}+\overrightarrow{OB}-\overrightarrow{OC}+\overrightarrow{OD} = -(\overrightarrow{OA}+\overrightarrow{OC})+(\overrightarrow{OB}+\overrightarrow{OD}) = \vec 0" />
                  . Donc <strong className="text-green-700"><Math tex="\vec v=\vec 0" /></strong>.
                </p>
                <p>
                  <Math tex="\overrightarrow{AB}-\overrightarrow{AC}=-\overrightarrow{BC}" /> (Chasles), donc{" "}
                  <Math tex="\vec w = -\overrightarrow{BC}+2\overrightarrow{BC}-\overrightarrow{AD}=\overrightarrow{BC}-\overrightarrow{AD}" />
                  . Or dans le parallélogramme <Math tex="ABCD" />, <Math tex="\overrightarrow{AD}=\overrightarrow{BC}" />
                  , donc <strong className="text-green-700"><Math tex="\vec w=\vec 0" /></strong>.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="4" index={4}
            title="Réduire un vecteur, prouver une colinéarité"
            items={
              <>
                <p>
                  <Math tex="A,B,C,M" /> quatre points du plan, <Math tex="\vec u = \overrightarrow{MA}+2\overrightarrow{MB}-3\overrightarrow{MC}" />.
                </p>
                <p><strong>1)</strong> Montrer que <Math tex="\vec u = 2\overrightarrow{AB}-3\overrightarrow{AC}" />.</p>
                <p>
                  <strong>2)</strong> Soit <Math tex="\vec v = 2\overrightarrow{BA}-6\overrightarrow{BC}" />. Montrer
                  que <Math tex="\vec u" /> et <Math tex="\vec v" /> sont colinéaires.
                </p>
              </>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> On écrit <Math tex="\overrightarrow{MB}=\overrightarrow{MA}+\overrightarrow{AB}" /> et{" "}
                  <Math tex="\overrightarrow{MC}=\overrightarrow{MA}+\overrightarrow{AC}" /> (Chasles) :{" "}
                  <Math tex="\vec u = \overrightarrow{MA}+2(\overrightarrow{MA}+\overrightarrow{AB})-3(\overrightarrow{MA}+\overrightarrow{AC}) = (1+2-3)\overrightarrow{MA}+2\overrightarrow{AB}-3\overrightarrow{AC}" />
                  . D&apos;où <strong className="text-green-700"><Math tex="\vec u=2\overrightarrow{AB}-3\overrightarrow{AC}" /></strong>.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="\vec v=2\overrightarrow{BA}-6\overrightarrow{BC}=-2\overrightarrow{AB}-6(\overrightarrow{AC}-\overrightarrow{AB})=4\overrightarrow{AB}-6\overrightarrow{AC}=2(2\overrightarrow{AB}-3\overrightarrow{AC})=2\vec u" />
                  . Donc <strong className="text-green-700"><Math tex="\vec v=2\vec u" /></strong> : <Math tex="\vec u" />{" "}
                  et <Math tex="\vec v" /> sont colinéaires.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="5" index={5}
            title="Alignement et milieu dans un parallélogramme"
            items={
              <>
                <p>
                  <Math tex="ABCD" /> est un parallélogramme, <Math tex="M" /> le point du plan tel que{" "}
                  <Math tex="\overrightarrow{AM}=\overrightarrow{AB}+2\overrightarrow{AD}" />.
                </p>
                <p><strong>1)</strong> Montrer que <Math tex="B,C,M" /> sont alignés.</p>
                <p><strong>2)</strong> En déduire que <Math tex="C" /> est le milieu de <Math tex="[BM]" />.</p>
              </>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="\overrightarrow{BM}=\overrightarrow{AM}-\overrightarrow{AB}=2\overrightarrow{AD}" />. Or
                  dans le parallélogramme <Math tex="ABCD" />, <Math tex="\overrightarrow{BC}=\overrightarrow{AD}" />
                  , donc <Math tex="\overrightarrow{BM}=2\overrightarrow{BC}" />. Ainsi{" "}
                  <strong className="text-green-700"><Math tex="B,C,M" /> sont alignés</strong>.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="\overrightarrow{BM}=2\overrightarrow{BC}" /> signifie exactement
                  que <Math tex="\overrightarrow{BC}=\tfrac12\overrightarrow{BM}" />, donc{" "}
                  <strong className="text-green-700"><Math tex="C" /> est le milieu de <Math tex="[BM]" /></strong>{" "}
                  (propriété 1.3 du milieu).
                </p>
              </>
            }
          />

          <ExerciseCard
            id="6" index={6}
            title="Théorème de la droite des milieux (par les vecteurs)"
            items={
              <p>
                <Math tex="ABC" /> un triangle, <Math tex="I" /> et <Math tex="J" /> les milieux respectifs de{" "}
                <Math tex="[AB]" /> et <Math tex="[AC]" />. Montrer que <Math tex="\overrightarrow{BC}=2\overrightarrow{IJ}" />.
              </p>
            }
            correction={
              <p>
                <Math tex="\overrightarrow{IJ}=\overrightarrow{AJ}-\overrightarrow{AI}=\tfrac12\overrightarrow{AC}-\tfrac12\overrightarrow{AB}=\tfrac12(\overrightarrow{AC}-\overrightarrow{AB})=\tfrac12\overrightarrow{BC}" />
                . D&apos;où <strong className="text-green-700"><Math tex="\overrightarrow{BC}=2\overrightarrow{IJ}" /></strong>.
              </p>
            }
          />

          <ExerciseCard
            id="7" index={7}
            title="Centre de gravité et milieu d'un côté"
            items={
              <>
                <p>
                  <Math tex="ABC" /> un triangle et <Math tex="G" /> son centre de gravité (
                  <Math tex="\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0" />), <Math tex="O" />{" "}
                  le milieu de <Math tex="[BC]" />. Montrer que <Math tex="\overrightarrow{OA}=3\overrightarrow{OG}" />{" "}
                  et <Math tex="-2\overrightarrow{GO}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0" />.
                </p>
              </>
            }
            correction={
              <>
                <p>
                  <Math tex="O" /> milieu de <Math tex="[BC]" /> donne, pour tout point (propriété 2 du milieu){" "}
                  : <Math tex="\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GO}" />.
                </p>
                <p>
                  Dans <Math tex="\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0" />, on remplace :{" "}
                  <Math tex="\overrightarrow{GA}+2\overrightarrow{GO}=\vec 0" />, donc{" "}
                  <Math tex="\overrightarrow{GA}=-2\overrightarrow{GO}=2\overrightarrow{OG}" />.
                </p>
                <p>
                  Donc <Math tex="\overrightarrow{OA}=\overrightarrow{OG}+\overrightarrow{GA}=\overrightarrow{OG}+2\overrightarrow{OG}" />
                  , soit <strong className="text-green-700"><Math tex="\overrightarrow{OA}=3\overrightarrow{OG}" /></strong>.
                </p>
                <p>
                  Et <Math tex="-2\overrightarrow{GO}+\overrightarrow{GB}+\overrightarrow{GC}=-2\overrightarrow{GO}+2\overrightarrow{GO}" />
                  , donc <strong className="text-green-700"><Math tex="-2\overrightarrow{GO}+\overrightarrow{GB}+\overrightarrow{GC}=\vec 0" /></strong>.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="8" index={8}
            title="Construction et parallélisme dans un parallélogramme"
            items={
              <>
                <p>
                  <Math tex="ABCD" /> un parallélogramme. <Math tex="M" /> tel que{" "}
                  <Math tex="\overrightarrow{AM}=\tfrac32\overrightarrow{AB}" />, <Math tex="N" /> tel que{" "}
                  <Math tex="\overrightarrow{AN}=3\overrightarrow{AD}" />.
                </p>
                <p>
                  <strong>1) et 2)</strong> Placer <Math tex="M" /> et <Math tex="N" />.
                </p>
                <p>
                  <strong>3)</strong> Montrer que <Math tex="\overrightarrow{CM}=\tfrac32\overrightarrow{AB}-\overrightarrow{AC}" />{" "}
                  et <Math tex="\overrightarrow{NM}=\tfrac92\overrightarrow{AB}-3\overrightarrow{AC}" />.
                </p>
                <p><strong>4)</strong> En déduire que <Math tex="(MN)\parallel(CM)" />.</p>
              </>
            }
            correction={
              <>
                <p>
                  <strong>3)</strong> <Math tex="\overrightarrow{CM}=\overrightarrow{AM}-\overrightarrow{AC}=\tfrac32\overrightarrow{AB}-\overrightarrow{AC}" />
                  . Comme <Math tex="ABCD" /> est un parallélogramme, <Math tex="\overrightarrow{AD}=\overrightarrow{AC}-\overrightarrow{AB}" />
                  , donc <Math tex="\overrightarrow{AN}=3\overrightarrow{AC}-3\overrightarrow{AB}" />, d&apos;où{" "}
                  <Math tex="\overrightarrow{NM}=\overrightarrow{AM}-\overrightarrow{AN}=\tfrac32\overrightarrow{AB}-3\overrightarrow{AC}+3\overrightarrow{AB}=\tfrac92\overrightarrow{AB}-3\overrightarrow{AC}" />
                  .
                </p>
                <p>
                  <strong>4)</strong> On remarque que{" "}
                  <Math tex="\overrightarrow{NM}=3\left(\tfrac32\overrightarrow{AB}-\overrightarrow{AC}\right)=3\overrightarrow{CM}" />
                  . Donc <Math tex="\overrightarrow{NM}" /> et <Math tex="\overrightarrow{CM}" /> sont colinéaires :{" "}
                  <strong className="text-green-700">
                    <Math tex="M,N,C" /> sont alignés, donc <Math tex="(MN)\parallel(CM)" />
                  </strong>
                  .
                </p>
              </>
            }
          />

          <ExerciseCard
            id="9" index={9}
            title="Combinaison vectorielle nulle dans un parallélogramme"
            items={
              <>
                <p>
                  <Math tex="ABCD" /> un parallélogramme, <Math tex="M,N" /> tels que{" "}
                  <Math tex="\overrightarrow{DM}=\tfrac52\overrightarrow{DA}" /> et{" "}
                  <Math tex="\overrightarrow{CN}=\tfrac23\overrightarrow{DC}" />.
                </p>
                <p>
                  <strong>1)</strong> Montrer que <Math tex="\overrightarrow{BM}=\tfrac32\overrightarrow{DA}-\overrightarrow{AB}" />{" "}
                  et <Math tex="\overrightarrow{BN}=\tfrac23\overrightarrow{DC}+\overrightarrow{BC}" />.
                </p>
                <p>
                  <strong>2)</strong> Calculer <Math tex="\overrightarrow{BM}" /> et <Math tex="\overrightarrow{BN}" />{" "}
                  en fonction de <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{BC}" />.
                </p>
                <p><strong>3)</strong> Montrer que <Math tex="2\overrightarrow{BM}+3\overrightarrow{BN}=\vec 0" />.</p>
              </>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> <Math tex="\overrightarrow{AM}=\overrightarrow{AD}+\overrightarrow{DM}=\overrightarrow{AD}-\tfrac52\overrightarrow{AD}=-\tfrac32\overrightarrow{AD}=\tfrac32\overrightarrow{DA}" />
                  , donc <Math tex="\overrightarrow{BM}=\overrightarrow{AM}-\overrightarrow{AB}=\tfrac32\overrightarrow{DA}-\overrightarrow{AB}" />
                  . De même <Math tex="\overrightarrow{BN}=\overrightarrow{BC}+\overrightarrow{CN}=\overrightarrow{BC}+\tfrac23\overrightarrow{DC}" />
                  .
                </p>
                <p>
                  <strong>2)</strong> Dans le parallélogramme, <Math tex="\overrightarrow{DA}=-\overrightarrow{BC}" />{" "}
                  et <Math tex="\overrightarrow{DC}=\overrightarrow{AB}" />, donc{" "}
                  <Math tex="\overrightarrow{BM}=-\overrightarrow{AB}-\tfrac32\overrightarrow{BC}" /> et{" "}
                  <Math tex="\overrightarrow{BN}=\tfrac23\overrightarrow{AB}+\overrightarrow{BC}" />.
                </p>
                <p>
                  <strong>3)</strong>{" "}
                  <Math tex="2\overrightarrow{BM}+3\overrightarrow{BN}=(-2\overrightarrow{AB}-3\overrightarrow{BC})+(2\overrightarrow{AB}+3\overrightarrow{BC})=\vec 0" />
                  . <strong className="text-green-700">CQFD</strong>.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="10" index={10}
            title="Nature de deux quadrilatères, alignement"
            items={
              <Figure
                text={
                  <>
                    <p>
                      <Math tex="ABC" /> un triangle, <Math tex="I,J" /> les milieux de <Math tex="[AB]" /> et{" "}
                      <Math tex="[AC]" />.
                    </p>
                    <p>
                      <strong>1)</strong> Montrer que <Math tex="\overrightarrow{BJ}=-\overrightarrow{AB}+\tfrac12\overrightarrow{AC}" />{" "}
                      et <Math tex="\overrightarrow{CI}=-\overrightarrow{AC}+\tfrac12\overrightarrow{AB}" />.
                    </p>
                    <p>
                      <strong>2)</strong> <Math tex="M,N" /> tels que <Math tex="\overrightarrow{BM}=2\overrightarrow{BJ}" />{" "}
                      et <Math tex="\overrightarrow{CN}=2\overrightarrow{CI}" />.
                    </p>
                    <p className="pl-4">
                      a. Quelle est la nature des quadrilatères <Math tex="ACBN" /> et <Math tex="ABCM" /> ?
                      <br />
                      b. Montrer que <Math tex="A,M,N" /> sont alignés.
                    </p>
                  </>
                }
                svg={
                  <svg viewBox="0 0 280 280" className="h-auto w-full max-w-[240px] text-neutral-700">
                    <polygon points="140,140 236,140 140,44" fill="#0ea5e9" fillOpacity="0.06" stroke="none" />
                    <line x1="140" y1="140" x2="236" y2="140" stroke="currentColor" strokeWidth="1.6" />
                    <line x1="140" y1="140" x2="140" y2="44" stroke="currentColor" strokeWidth="1.6" />
                    <line x1="236" y1="140" x2="140" y2="44" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 3" />
                    <line x1="44" y1="44" x2="140" y2="140" stroke="#e11d48" strokeWidth="1.4" strokeDasharray="4 3" />
                    <line x1="236" y1="140" x2="236" y2="236" stroke="#0ea5e9" strokeWidth="1.4" strokeDasharray="4 3" />
                    <circle cx="140" cy="140" r="3.2" fill="currentColor" /><text x="146" y="156" fontSize="13" fontWeight="700">A</text>
                    <circle cx="236" cy="140" r="3.2" fill="currentColor" /><text x="242" y="140" fontSize="13" fontWeight="700">B</text>
                    <circle cx="140" cy="44" r="3.2" fill="currentColor" /><text x="146" y="40" fontSize="13" fontWeight="700">C</text>
                    <circle cx="188" cy="140" r="2.6" fill="currentColor" /><text x="190" y="156" fontSize="12">J</text>
                    <circle cx="140" cy="92" r="2.6" fill="currentColor" /><text x="112" y="92" fontSize="12">I</text>
                    <circle cx="44" cy="44" r="3" fill="#e11d48" /><text x="20" y="38" fontSize="13" fontWeight="700" fill="#e11d48">M</text>
                    <circle cx="236" cy="236" r="3" fill="#0ea5e9" /><text x="242" y="240" fontSize="13" fontWeight="700" fill="#0ea5e9">N</text>
                  </svg>
                }
              />
            }
            correction={
              <>
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="\overrightarrow{BJ}=\overrightarrow{AJ}-\overrightarrow{AB}=\tfrac12\overrightarrow{AC}-\overrightarrow{AB}" />{" "}
                  et <Math tex="\overrightarrow{CI}=\overrightarrow{AI}-\overrightarrow{AC}=\tfrac12\overrightarrow{AB}-\overrightarrow{AC}" />.
                </p>
                <p>
                  <strong>2a)</strong> <Math tex="\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{BM}=\overrightarrow{AB}+2\overrightarrow{BJ}=\overrightarrow{AB}+\overrightarrow{AC}-2\overrightarrow{AB}=\overrightarrow{AC}-\overrightarrow{AB}=\overrightarrow{BC}" />
                  . Comme <Math tex="\overrightarrow{AM}=\overrightarrow{BC}" />, on a{" "}
                  <Math tex="\overrightarrow{AB}=\overrightarrow{MC}" /> : <strong className="text-green-700">
                    <Math tex="ABCM" /> est un parallélogramme
                  </strong>
                  . De même, <Math tex="\overrightarrow{AN}=\overrightarrow{AC}+\overrightarrow{CN}=\overrightarrow{AC}+2\overrightarrow{CI}=\overrightarrow{AC}+\overrightarrow{AB}-2\overrightarrow{AC}=\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}" />
                  , donc <Math tex="\overrightarrow{AC}=\overrightarrow{NB}" /> : <strong className="text-green-700">
                    <Math tex="ACBN" /> est un parallélogramme
                  </strong>
                  .
                </p>
                <p>
                  <strong>2b)</strong> On a <Math tex="\overrightarrow{AM}=\overrightarrow{BC}" /> et{" "}
                  <Math tex="\overrightarrow{AN}=\overrightarrow{CB}=-\overrightarrow{BC}" />, donc{" "}
                  <Math tex="\overrightarrow{AN}=-\overrightarrow{AM}" />. Ainsi <strong className="text-green-700">
                    <Math tex="A,M,N" /> sont alignés
                  </strong>{" "}
                  (et <Math tex="A" /> est même le milieu de <Math tex="[MN]" />).
                </p>
              </>
            }
          />

          <ExerciseCard
            id="11" index={11}
            title="Alignement et parallélisme, milieu d'un segment"
            items={
              <>
                <p>
                  <Math tex="ABCD" /> un parallélogramme, <Math tex="M,N" /> tels que{" "}
                  <Math tex="\overrightarrow{BM}=\tfrac12\overrightarrow{AB}" /> et{" "}
                  <Math tex="\overrightarrow{AN}=3\overrightarrow{AD}" />.
                </p>
                <p>
                  <strong>2)</strong> Montrer que <Math tex="\overrightarrow{CM}=\tfrac12\overrightarrow{AB}-\overrightarrow{BC}" />{" "}
                  et <Math tex="\overrightarrow{CN}=2\overrightarrow{AD}-\overrightarrow{DC}" />.
                </p>
                <p><strong>3)</strong> Montrer que <Math tex="C,M,N" /> sont alignés.</p>
                <p>
                  <strong>4)</strong> <Math tex="E" /> milieu de <Math tex="[DN]" />, <Math tex="F" /> tel que{" "}
                  <Math tex="\overrightarrow{AB}=\overrightarrow{BF}" />. Montrer que <Math tex="C" /> est le milieu
                  de <Math tex="[EF]" />.
                </p>
                <p><strong>5)</strong> Montrer que <Math tex="(BD)\parallel(EF)" />.</p>
              </>
            }
            correction={
              <>
                <p>
                  <strong>2)</strong> <Math tex="\overrightarrow{CM}=\overrightarrow{BM}-\overrightarrow{BC}=\tfrac12\overrightarrow{AB}-\overrightarrow{BC}" />
                  . Et comme <Math tex="\overrightarrow{AC}=\overrightarrow{AD}+\overrightarrow{DC}" />,{" "}
                  <Math tex="\overrightarrow{CN}=\overrightarrow{AN}-\overrightarrow{AC}=3\overrightarrow{AD}-\overrightarrow{AD}-\overrightarrow{DC}=2\overrightarrow{AD}-\overrightarrow{DC}" />
                  .
                </p>
                <p>
                  <strong>3)</strong> Comme <Math tex="\overrightarrow{BC}=\overrightarrow{AD}" /> et{" "}
                  <Math tex="\overrightarrow{DC}=\overrightarrow{AB}" /> : <Math tex="\overrightarrow{CM}=\tfrac12\overrightarrow{AB}-\overrightarrow{AD}" />{" "}
                  et <Math tex="\overrightarrow{CN}=2\overrightarrow{AD}-\overrightarrow{AB}=-2\left(\tfrac12\overrightarrow{AB}-\overrightarrow{AD}\right)=-2\overrightarrow{CM}" />
                  . Donc <strong className="text-green-700"><Math tex="C,M,N" /> sont alignés</strong>.
                </p>
                <p>
                  <strong>4)</strong> En posant <Math tex="A" /> à l&apos;origine (<Math tex="A=\vec 0" />) :{" "}
                  <Math tex="D=\overrightarrow{AD}" />, <Math tex="N=3\overrightarrow{AD}" />, donc{" "}
                  <Math tex="E=\tfrac12(D+N)=2\overrightarrow{AD}" />. Et <Math tex="F=2B-A=2\overrightarrow{AB}" />{" "}
                  (car <Math tex="\overrightarrow{AB}=\overrightarrow{BF}" />). Le milieu de <Math tex="[EF]" /> est
                  donc <Math tex="\overrightarrow{AD}+\overrightarrow{AB}" />, qui est exactement le point{" "}
                  <Math tex="C" /> (diagonale du parallélogramme). D&apos;où <strong className="text-green-700">
                    <Math tex="C" /> est le milieu de <Math tex="[EF]" />
                  </strong>
                  .
                </p>
                <p>
                  <strong>5)</strong> <Math tex="\overrightarrow{BD}=\overrightarrow{AD}-\overrightarrow{AB}" /> et{" "}
                  <Math tex="\overrightarrow{EF}=F-E=2\overrightarrow{AB}-2\overrightarrow{AD}=-2\overrightarrow{BD}" />
                  . Donc <strong className="text-green-700"><Math tex="(BD)\parallel(EF)" /></strong>.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="12" index={12}
            title="Un quadrilatère, un paramètre x, et le cas M = N"
            items={
              <>
                <p>
                  <Math tex="ABCD" /> un quadrilatère, <Math tex="x\in\mathbb R" />, <Math tex="M,N" /> tels que{" "}
                  <Math tex="\overrightarrow{AM}=x\overrightarrow{AB}" /> et <Math tex="\overrightarrow{DN}=x\overrightarrow{DC}" />.
                </p>
                <p>
                  <strong>1)</strong> Montrer que <Math tex="\overrightarrow{MN}=x\overrightarrow{BC}+(1-x)\overrightarrow{AD}" />.
                </p>
                <p>
                  <strong>2)</strong> On suppose <Math tex="\overrightarrow{AD}=3\overrightarrow{BC}" />.
                </p>
                <p className="pl-4">
                  a. Quelle est la nature de <Math tex="ABCD" /> ?<br />
                  b. Calculer <Math tex="\overrightarrow{MN}" /> en fonction de <Math tex="\overrightarrow{BC}" />.
                  <br />
                  c. Déterminer <Math tex="x" /> pour que <Math tex="M=N" />.
                </p>
              </>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="\overrightarrow{MN}=\overrightarrow{AN}-\overrightarrow{AM}=(\overrightarrow{AD}+\overrightarrow{DN})-x\overrightarrow{AB}=\overrightarrow{AD}+x\overrightarrow{DC}-x\overrightarrow{AB}" />
                  . Or <Math tex="\overrightarrow{DC}-\overrightarrow{AB}=\overrightarrow{DC}+\overrightarrow{BA}" />, et
                  comme <Math tex="\overrightarrow{AD}+\overrightarrow{DC}=\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}" />
                  , on a <Math tex="\overrightarrow{DC}-\overrightarrow{AB}=\overrightarrow{BC}-\overrightarrow{AD}" />
                  . Donc <Math tex="\overrightarrow{MN}=\overrightarrow{AD}+x(\overrightarrow{BC}-\overrightarrow{AD})" />
                  , soit <strong className="text-green-700">
                    <Math tex="\overrightarrow{MN}=x\overrightarrow{BC}+(1-x)\overrightarrow{AD}" />
                  </strong>
                  .
                </p>
                <p>
                  <strong>2a)</strong> <Math tex="\overrightarrow{AD}=3\overrightarrow{BC}" /> : les côtés{" "}
                  <Math tex="[AD]" /> et <Math tex="[BC]" /> sont colinéaires, donc parallèles ; <Math tex="ABCD" />{" "}
                  est un <strong className="text-green-700">trapèze</strong> de bases <Math tex="(AD)" /> et{" "}
                  <Math tex="(BC)" />.
                </p>
                <p>
                  <strong>2b)</strong>{" "}
                  <Math tex="\overrightarrow{MN}=x\overrightarrow{BC}+(1-x)(3\overrightarrow{BC})=(3-2x)\overrightarrow{BC}" />
                  .
                </p>
                <p>
                  <strong>2c)</strong> <Math tex="M=N \iff \overrightarrow{MN}=\vec 0 \iff (3-2x)\overrightarrow{BC}=\vec 0" />
                  . Comme <Math tex="\overrightarrow{BC}\neq\vec 0" />, il faut <Math tex="3-2x=0" />, soit{" "}
                  <strong className="text-green-700"><Math tex="x=\tfrac32" /></strong>.
                </p>
              </>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
