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
  title: "Le produit scalaire · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet sur le produit scalaire dans le plan : norme d'un vecteur, définition par projection orthogonale, forme trigonométrique, orthogonalité, propriétés, relations métriques dans le triangle rectangle, théorème d'Al-Kashi, théorème de la médiane, avec 5 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 2.",
  kicker: "Tronc Commun Sciences · Semestre 2",
  heroTitle: "Le produit scalaire",
  heroSubtitle:
    "Norme, projection orthogonale, forme trigonométrique, orthogonalité et applications (Al-Kashi, théorème de la médiane) : le cours complet, puis 5 exercices corrigés en détail.",
  footerNote: "Le produit scalaire · Mathématiques, Tronc Commun Sciences et Technologies, semestre 2.",
  sections: [
    { id: "cours-def", label: "Norme & définition" },
    { id: "cours-trigo", label: "Forme trigonométrique" },
    { id: "cours-proprietes", label: "Propriétés" },
    { id: "cours-applications", label: "Applications" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** A numbered block used to structure the "Cours" section (I, II, III...). */
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

function ArrowDefs({ id, color = "currentColor" }: { id: string; color?: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L6,3 L0,6 Z" fill={color} />
      </marker>
    </defs>
  );
}

/** Worked example block, statement + solution, matching the project's lycée tone. */
function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm sm:p-5">
      <p className="mb-2 font-semibold text-foreground">{title}</p>
      <div className="space-y-2 text-foreground-muted">{children}</div>
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
          { value: "4", label: "notions du cours" },
          { value: "5", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-def"
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
            <line x1="30" y1="150" x2="180" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.85" markerEnd="url(#heroArrow)" />
            <line x1="30" y1="150" x2="140" y2="50" stroke="#fb923c" strokeWidth="2.5" markerEnd="url(#heroArrow)" />
            <path d="M 60 150 A 30 30 0 0 0 52 122" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <text x="66" y="140" fontSize="13" fill="white" opacity="0.8">θ</text>
            <text x="14" y="168" fontSize="14" fontWeight="700" fill="white">A</text>
            <text x="184" y="162" fontSize="14" fontWeight="700" fill="white">B</text>
            <text x="140" y="40" fontSize="14" fontWeight="700" fill="white">C</text>
            <text x="60" y="185" fontSize="12" fill="#fb923c">u⃗ · v⃗ = ‖u⃗‖‖v⃗‖cos θ</text>
          </svg>
        }
      />

      {/* ===================== I & II. NORME & DÉFINITION ===================== */}
      <LessonSection
        id="cours-def"
        kicker="01 · Les bases"
        title="Norme d'un vecteur et produit scalaire"
        tone="light"
        description="Le produit scalaire de deux vecteurs se définit à partir d'une projection orthogonale : c'est un nombre réel, pas un vecteur."
      >
        <CourseBlock numeral="I" title="Norme d'un vecteur">
          <p>
            Soit <Math tex="\vec u" /> un vecteur du plan <Math tex="\mathcal P" />, <Math tex="A" /> et{" "}
            <Math tex="B" /> deux points de <Math tex="\mathcal P" /> tels que <Math tex="\vec u=\overrightarrow{AB}" />
            . La distance entre <Math tex="A" /> et <Math tex="B" /> est notée <Math tex="AB" /> ou{" "}
            <Math tex="\lVert\overrightarrow{AB}\rVert" /> : on l&apos;appelle la <strong>norme</strong> du vecteur{" "}
            <Math tex="\vec u" /> (ou de <Math tex="\overrightarrow{AB}" />).
          </p>
          <FormulaBlock tex="\lVert\overrightarrow{AB}\rVert = AB" />
        </CourseBlock>

        <CourseBlock numeral="II" title="Produit scalaire de deux vecteurs">
          <p>
            Soient <Math tex="\vec u" /> et <Math tex="\vec v" /> deux vecteurs du plan tels que{" "}
            <Math tex="\vec u=\overrightarrow{AB}" /> et <Math tex="\vec v=\overrightarrow{AC}" />. Le{" "}
            <strong>produit scalaire</strong> de <Math tex="\vec u" /> et <Math tex="\vec v" />, noté{" "}
            <Math tex="\vec u\cdot\vec v" />, est le nombre réel défini comme suit.
          </p>
          <Callout variant="info" title="Cas particulier">
            Si <Math tex="\vec u=\vec 0" /> ou <Math tex="\vec v=\vec 0" />, alors <Math tex="\vec u\cdot\vec v=0" />.
          </Callout>
          <p>
            Sinon (<Math tex="\vec u\neq\vec 0" /> et <Math tex="\vec v\neq\vec 0" />), on note <Math tex="H" /> le
            projeté orthogonal de <Math tex="C" /> sur la droite <Math tex="(AB)" /> (possible car{" "}
            <Math tex="A\neq B" />) :
          </p>
          <Figure
            text={
              <>
                <p className="font-semibold text-foreground-muted">1er cas — même sens</p>
                <p>
                  Si <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{AH}" /> ont le{" "}
                  <strong>même sens</strong> :
                </p>
                <FormulaBlock tex="\vec u\cdot\vec v=\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AH" />
              </>
            }
            svg={
              <svg viewBox="0 0 220 140" className="h-auto w-full max-w-[220px] text-neutral-700">
                <line x1="20" y1="110" x2="190" y2="110" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="110" x2="120" y2="30" stroke="#0ea5e9" strokeWidth="2" />
                <line x1="120" y1="30" x2="120" y2="110" stroke="#e11d48" strokeWidth="1.4" strokeDasharray="4 3" />
                <circle cx="20" cy="110" r="3" fill="currentColor" /><text x="8" y="128" fontSize="13" fontWeight="700">A</text>
                <circle cx="190" cy="110" r="3" fill="currentColor" /><text x="192" y="128" fontSize="13" fontWeight="700">B</text>
                <circle cx="120" cy="30" r="3" fill="#0ea5e9" /><text x="124" y="24" fontSize="13" fontWeight="700" fill="#0ea5e9">C</text>
                <circle cx="120" cy="110" r="3" fill="#e11d48" /><text x="112" y="128" fontSize="13" fontWeight="700" fill="#e11d48">H</text>
              </svg>
            }
          />
          <Figure
            text={
              <>
                <p className="font-semibold text-foreground-muted">2ᵉ cas — sens opposés</p>
                <p>
                  Si <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{AH}" /> ont des{" "}
                  <strong>sens opposés</strong> :
                </p>
                <FormulaBlock tex="\vec u\cdot\vec v=\overrightarrow{AB}\cdot\overrightarrow{AC}=-AB\times AH" />
              </>
            }
            reverse
            svg={
              <svg viewBox="0 0 220 140" className="h-auto w-full max-w-[220px] text-neutral-700">
                <line x1="90" y1="110" x2="190" y2="110" stroke="currentColor" strokeWidth="2" />
                <line x1="90" y1="110" x2="20" y2="30" stroke="#0ea5e9" strokeWidth="2" />
                <line x1="20" y1="30" x2="20" y2="110" stroke="#e11d48" strokeWidth="1.4" strokeDasharray="4 3" />
                <circle cx="90" cy="110" r="3" fill="currentColor" /><text x="94" y="128" fontSize="13" fontWeight="700">A</text>
                <circle cx="190" cy="110" r="3" fill="currentColor" /><text x="192" y="128" fontSize="13" fontWeight="700">B</text>
                <circle cx="20" cy="30" r="3" fill="#0ea5e9" /><text x="4" y="22" fontSize="13" fontWeight="700" fill="#0ea5e9">C</text>
                <circle cx="20" cy="110" r="3" fill="#e11d48" /><text x="4" y="128" fontSize="13" fontWeight="700" fill="#e11d48">H</text>
              </svg>
            }
          />
          <Callout variant="success" title="Remarque — le carré scalaire">
            <p>
              Le projeté orthogonal de <Math tex="B" /> sur la droite <Math tex="(AB)" /> est <Math tex="B" />{" "}
              lui-même, d&apos;où <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AB}=AB\times AB=AB^2\geq 0" />.
              On note <Math tex="\vec u\cdot\vec u=\vec u^{\,2}" /> ou <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AB}=\overrightarrow{AB}^{\,2}" />
              , appelé le <strong>carré scalaire</strong> de <Math tex="\vec u" /> (ou de <Math tex="\overrightarrow{AB}" />
              ) : c&apos;est toujours un nombre positif.
            </p>
            <FormulaBlock tex="\vec u^{\,2}=\lVert\vec u\rVert^2 \qquad \overrightarrow{AB}^{\,2}=AB^2" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. FORME TRIGONOMÉTRIQUE & ORTHOGONALITÉ ===================== */}
      <LessonSection
        id="cours-trigo"
        kicker="02 · Avec un angle"
        title="Forme trigonométrique et orthogonalité"
        tone="muted"
        description="La formule avec le cosinus est la plus utilisée en pratique : elle relie directement le produit scalaire à l'angle formé par les deux vecteurs."
      >
        <CourseBlock numeral="III" title="Forme trigonométrique du produit scalaire">
          <Callout variant="success" title="Propriété">
            <p>
              Soient <Math tex="\vec u" /> et <Math tex="\vec v" /> deux vecteurs non nuls du plan tels que{" "}
              <Math tex="\vec u=\overrightarrow{AB}" /> et <Math tex="\vec v=\overrightarrow{AC}" />, et{" "}
              <Math tex="\theta=(\widehat{\vec u,\vec v})=(\widehat{\overrightarrow{AB},\overrightarrow{AC}})" />
              . Alors :
            </p>
            <FormulaBlock tex="\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AC\times\cos\theta \qquad \text{soit} \qquad \vec u\cdot\vec v=\lVert\vec u\rVert\,\lVert\vec v\rVert\cos\theta" />
          </Callout>
          <p className="text-sm text-foreground-muted">
            <strong>Idée de la démonstration.</strong> Dans le triangle rectangle <Math tex="AHC" />, on a{" "}
            <Math tex="\cos\theta=\dfrac{AH}{AC}" /> si <Math tex="\overrightarrow{AB}" /> et{" "}
            <Math tex="\overrightarrow{AH}" /> ont même sens (donc <Math tex="AH=AC\cos\theta" />, et{" "}
            <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AC}=AB\times AH=AB\times AC\cos\theta" />), et{" "}
            <Math tex="\cos(\pi-\theta)=-\cos\theta" /> dans le second cas, ce qui redonne la même formule avec le
            signe « <Math tex="-" /> » déjà présent dans la définition.
          </p>
          <Callout variant="warning" title="Remarque — projections décalées">
            Le produit scalaire de <Math tex="\vec u=\overrightarrow{AB}" /> et <Math tex="\vec v=\overrightarrow{CD}" />
            {" "}est le nombre réel <Math tex="\overrightarrow{AB}\cdot\overrightarrow{C'D'}" /> où{" "}
            <Math tex="C'" /> et <Math tex="D'" /> sont les projetés orthogonaux respectifs de <Math tex="C" /> et{" "}
            <Math tex="D" /> sur la droite <Math tex="(AB)" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Orthogonalité de deux vecteurs">
          <Figure
            text={
              <>
                <Callout variant="success" title="Propriété">
                  Les vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" /> sont <strong>orthogonaux</strong>{" "}
                  (on note <Math tex="\vec u\perp\vec v" />) si et seulement si :
                  <p className="mt-1 text-center font-display text-lg font-bold text-green-700">
                    <Math tex="\vec u\cdot\vec v=0" />
                  </p>
                </Callout>
                <p className="mt-2 text-sm">
                  En effet, si <Math tex="\vec u,\vec v\neq\vec 0" />, la formule trigonométrique donne{" "}
                  <Math tex="\vec u\cdot\vec v=0 \iff \cos\theta=0 \iff \theta=\dfrac\pi2" /> (à{" "}
                  <Math tex="\pi" /> près), c&apos;est-à-dire <Math tex="\vec u\perp\vec v" />.
                </p>
              </>
            }
            svg={
              <svg viewBox="0 0 180 180" className="h-auto w-full max-w-[180px] text-neutral-700">
                <ArrowDefs id="orth1" />
                <line x1="90" y1="150" x2="170" y2="150" stroke="currentColor" strokeWidth="2" markerEnd="url(#orth1)" />
                <line x1="90" y1="150" x2="90" y2="60" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#orth1)" />
                <rect x="90" y="138" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <text x="174" y="146" fontSize="13" fontStyle="italic">u⃗</text>
                <text x="76" y="58" fontSize="13" fontStyle="italic" fill="#0ea5e9">v⃗</text>
              </svg>
            }
          />
        </CourseBlock>
      </LessonSection>

      {/* ===================== V. PROPRIÉTÉS ===================== */}
      <LessonSection
        id="cours-proprietes"
        kicker="03 · Calculer avec le produit scalaire"
        title="Propriétés du produit scalaire"
        tone="light"
        description="Le produit scalaire se manipule comme un produit ordinaire : il est linéaire, symétrique, et donne les identités remarquables habituelles."
      >
        <CourseBlock numeral="V" title="Propriétés algébriques">
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-2 font-semibold text-foreground-muted">
              Soient <Math tex="\vec u,\vec v,\vec w" /> trois vecteurs du plan et <Math tex="k\in\mathbb R" />.
            </p>
            <p className="mb-1 font-semibold text-foreground">1. Linéarité (et symétrie) :</p>
            <FormulaBlock tex="(\vec u+\vec v)\cdot\vec w=\vec u\cdot\vec w+\vec v\cdot\vec w \qquad \vec w\cdot(\vec u+\vec v)=\vec w\cdot\vec u+\vec w\cdot\vec v \qquad (k\vec u)\cdot\vec v=\vec u\cdot(k\vec v)=k(\vec u\cdot\vec v)" />
            <p className="mt-3">
              <strong className="text-foreground">2. Positivité :</strong> <Math tex="\vec u^{\,2}\geq 0" />.
            </p>
            <p className="mt-1">
              <strong className="text-foreground">3. Non-dégénérescence :</strong>{" "}
              <Math tex="\vec u\cdot\vec u=0 \iff \vec u=\vec 0" />.
            </p>
          </div>

          <p className="font-semibold text-foreground-muted">Conséquences — identités remarquables</p>
          <FormulaBlock tex="(\vec u+\vec v)^2=\vec u^{\,2}+2\vec u\cdot\vec v+\vec v^{\,2}" caption="identité 1" />
          <FormulaBlock tex="(\vec u-\vec v)^2=\vec u^{\,2}-2\vec u\cdot\vec v+\vec v^{\,2}" caption="identité 2" />
          <FormulaBlock tex="(\vec u+\vec v)\cdot(\vec u-\vec v)=\vec u^{\,2}-\vec v^{\,2}" caption="identité 3" />
          <FormulaBlock tex="\vec u\cdot\vec v=\dfrac12\left[(\vec u+\vec v)^2-\vec u^{\,2}-\vec v^{\,2}\right]" caption="identité 4" />

          <Callout variant="info" title="Démonstration de l'identité 1">
            <Math tex="(\vec u+\vec v)^2=(\vec u+\vec v)\cdot(\vec u+\vec v)=\vec u\cdot\vec u+\vec u\cdot\vec v+\vec v\cdot\vec u+\vec v\cdot\vec v=\vec u^{\,2}+2\vec u\cdot\vec v+\vec v^{\,2}" />
            {" "}(on utilise la linéarité, deux fois, puis <Math tex="\vec u\cdot\vec v=\vec v\cdot\vec u" />).
          </Callout>

          <Example title="Exemple résolu — avec ‖u⃗‖ = 4, ‖v⃗‖ = 7 et u⃗ · v⃗ = 7">
            <p>
              <strong>1)</strong> <Math tex="(\vec u+\vec v)\cdot\vec u = \vec u^{\,2}+\vec v\cdot\vec u = 4^2+7=16+7=23" />
              . Donc <strong className="text-green-700"><Math tex="(\vec u+\vec v)\cdot\vec u=23" /></strong>.
            </p>
            <p>
              <strong>2)</strong> <Math tex="(\vec u+\vec v)^2=\vec u^{\,2}+2\vec u\cdot\vec v+\vec v^{\,2}=4^2+2\times 7+7^2=16+14+49=79" />
              . Donc <strong className="text-green-700"><Math tex="(\vec u+\vec v)^2=79" /></strong>.
            </p>
            <p>
              <strong>3)</strong> <Math tex="(2\vec u)\cdot(4\vec v)=2\times 4\times(\vec u\cdot\vec v)=8\times 7=56" />
              . Donc <strong className="text-green-700"><Math tex="(2\vec u)\cdot(4\vec v)=56" /></strong>.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== VI. APPLICATIONS ===================== */}
      <LessonSection
        id="cours-applications"
        kicker="04 · Trois applications classiques"
        title="Relations métriques, Al-Kashi et théorème de la médiane"
        tone="muted"
        description="Le produit scalaire permet de retrouver — et de généraliser — le théorème de Pythagore."
      >
        <CourseBlock numeral="VI" title="Relations métriques dans le triangle rectangle">
          <Figure
            text={
              <>
                <p>
                  <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" /> ; <Math tex="H" /> est le
                  projeté orthogonal de <Math tex="A" /> sur la droite <Math tex="(BC)" />.
                </p>
                <Callout variant="success" title="Propriété — relations métriques">
                  <ul className="list-disc space-y-1 pl-5">
                    <li><Math tex="BC^2=BA^2+AC^2" /> (Pythagore)</li>
                    <li><Math tex="BA^2=BH\times BC" /> et <Math tex="CA^2=CH\times CB" /></li>
                    <li><Math tex="AH^2=HB\times HC" /></li>
                  </ul>
                </Callout>
              </>
            }
            svg={
              <svg viewBox="0 0 220 160" className="h-auto w-full max-w-[240px] text-neutral-700">
                {/* Triangle 3-4-5 exact : B=(0,0), C=(5,0), A=(1.8,2.4) mis à l'échelle ×32, H=(1.8,0). */}
                <line x1="10" y1="130" x2="170" y2="130" stroke="currentColor" strokeWidth="2" />
                <line x1="10" y1="130" x2="67.6" y2="53.2" stroke="currentColor" strokeWidth="2" />
                <line x1="67.6" y1="53.2" x2="170" y2="130" stroke="currentColor" strokeWidth="2" />
                <line x1="67.6" y1="53.2" x2="67.6" y2="130" stroke="#e11d48" strokeWidth="1.6" strokeDasharray="4 3" />
                <rect x="59.6" y="122" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="10" cy="130" r="3" fill="currentColor" /><text x="-6" y="148" fontSize="13" fontWeight="700">B</text>
                <circle cx="170" cy="130" r="3" fill="currentColor" /><text x="174" y="148" fontSize="13" fontWeight="700">C</text>
                <circle cx="67.6" cy="53.2" r="3" fill="currentColor" /><text x="60" y="42" fontSize="13" fontWeight="700">A</text>
                <circle cx="67.6" cy="130" r="3" fill="#e11d48" /><text x="60" y="148" fontSize="13" fontWeight="700" fill="#e11d48">H</text>
              </svg>
            }
          />
          <p className="text-xs text-foreground-muted">
            (Ces relations se retrouvent en calculant <Math tex="\overrightarrow{BA}\cdot\overrightarrow{BC}" /> de
            deux façons : par projection, <Math tex="\overrightarrow{BA}\cdot\overrightarrow{BC}=BH\times BC" />
            ; et par Chasles via <Math tex="A" />, <Math tex="\overrightarrow{BA}\cdot\overrightarrow{BC}=BA^2" />
            {" "}puisque le triangle est rectangle en <Math tex="A" />.)
          </p>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Théorème d'Al-Kashi">
          <Callout variant="success" title="Théorème (généralise Pythagore)">
            <p>
              Dans tout triangle <Math tex="ABC" />, en posant <Math tex="AB=c" />, <Math tex="AC=b" />,{" "}
              <Math tex="BC=a" /> :
            </p>
            <FormulaBlock tex="BC^2=BA^2+AC^2-2\,AB\times AC\times\cos\widehat A \qquad \text{soit} \qquad a^2=b^2+c^2-2bc\cos\widehat A" />
          </Callout>
          <p className="text-sm text-foreground-muted">
            <strong>Démonstration.</strong> <Math tex="\overrightarrow{BC}^{\,2}=(\overrightarrow{BA}+\overrightarrow{AC})^2=\overrightarrow{BA}^{\,2}+2\overrightarrow{BA}\cdot\overrightarrow{AC}+\overrightarrow{AC}^{\,2}" />
            . Or <Math tex="\overrightarrow{BA}\cdot\overrightarrow{AC}=-\overrightarrow{AB}\cdot\overrightarrow{AC}=-AB\times AC\cos\widehat A" />
            , d&apos;où le résultat.
          </p>
          <Figure
            text={
              <Example title="Exemple résolu — calculer AC">
                <p>
                  On donne <Math tex="BA=\sqrt2" />, <Math tex="BC=5" /> et <Math tex="\widehat{ABC}=\dfrac\pi4" />.
                  Calculons <Math tex="AC" />.
                </p>
                <p>
                  <Math tex="AC^2=AB^2+BC^2-2\,AB\times BC\times\cos\widehat B=(\sqrt2)^2+5^2-2\sqrt2\times5\cos\dfrac\pi4" />
                </p>
                <p>
                  <Math tex="AC^2=2+25-10\sqrt2\times\dfrac{\sqrt2}{2}=27-10=17" />
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="AC=\sqrt{17}" />.
                </p>
              </Example>
            }
            reverse
            svg={
              <svg viewBox="0 0 200 140" className="h-auto w-full max-w-[220px] text-neutral-700">
                {/* Triangle exact : B=(0,0), C=(5,0), A=(1,1), mis à l'échelle ×28, décalé. */}
                <line x1="20" y1="110" x2="160" y2="110" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="110" x2="48" y2="82" stroke="currentColor" strokeWidth="2" />
                <line x1="48" y1="82" x2="160" y2="110" stroke="currentColor" strokeWidth="2" />
                <path d="M 40 110 A 20 20 0 0 0 33.7 95.3" fill="none" stroke="#0ea5e9" strokeWidth="1.4" />
                <circle cx="20" cy="110" r="3" fill="currentColor" /><text x="6" y="128" fontSize="13" fontWeight="700">B</text>
                <circle cx="160" cy="110" r="3" fill="currentColor" /><text x="164" y="128" fontSize="13" fontWeight="700">C</text>
                <circle cx="48" cy="82" r="3" fill="currentColor" /><text x="40" y="70" fontSize="13" fontWeight="700">A</text>
                <text x="28" y="98" fontSize="11" fill="#0ea5e9">π/4</text>
              </svg>
            }
          />
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Théorème de la médiane">
          <Callout variant="success" title="Théorème">
            <p>
              Soit <Math tex="[AB]" /> un segment du plan, <Math tex="I" /> son milieu. Pour tout point{" "}
              <Math tex="M" /> du plan :
            </p>
            <FormulaBlock tex="MA^2+MB^2=2MI^2+\dfrac12 AB^2" />
          </Callout>
          <p className="text-sm text-foreground-muted">
            <strong>Démonstration.</strong> On écrit{" "}
            <Math tex="\overrightarrow{MA}=\overrightarrow{MI}+\overrightarrow{IA}" /> et{" "}
            <Math tex="\overrightarrow{MB}=\overrightarrow{MI}+\overrightarrow{IB}" />, puis on développe :
          </p>
          <FormulaBlock tex="MA^2+MB^2=2MI^2+2\overrightarrow{MI}\cdot(\overrightarrow{IA}+\overrightarrow{IB})+IA^2+IB^2" />
          <p className="text-sm text-foreground-muted">
            Or <Math tex="\overrightarrow{IA}+\overrightarrow{IB}=\vec 0" /> (<Math tex="I" /> est le milieu), et{" "}
            <Math tex="IA^2+IB^2=2\left(\dfrac{AB}2\right)^2=\dfrac12 AB^2" />, d&apos;où le résultat.
          </p>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Le produit scalaire"
        tone="light"
        description="5 exercices corrigés. Cherche sur ton cahier, puis clique pour vérifier ta réponse. Le plan est muni d'un repère orthonormal (exercice 5)."
      >
        <ExerciseGroup total={5} celebrationTitle="Bravo, les 5 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le produit scalaire.">
          <ExerciseCard
            id="1"
            index={1}
            title="Calculs directs à partir de normes et d'un produit scalaire"
            items={
              <>
                <p>
                  On considère les vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" /> tels que :{" "}
                  <Math tex="\lVert\vec u\rVert=2" />, <Math tex="\lVert\vec v\rVert=3" /> et{" "}
                  <Math tex="\vec u\cdot\vec v=1" />.
                </p>
                <p>Calculer :</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li><Math tex="(2\vec u+\vec v)\cdot(\vec u-\vec v)" /></li>
                  <li><Math tex="(\vec u+2\vec v)^2" /></li>
                  <li><Math tex="(-3\vec u+\vec v)^2" /></li>
                  <li><Math tex="(\vec u-\vec v)^2-(\vec u+\vec v)^2" /></li>
                </ol>
              </>
            }
            correction={
              <>
                <p>
                  On développe en utilisant <Math tex="\vec u^{\,2}=\lVert\vec u\rVert^2=4" />,{" "}
                  <Math tex="\vec v^{\,2}=\lVert\vec v\rVert^2=9" /> et <Math tex="\vec u\cdot\vec v=1" />.
                </p>
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="(2\vec u+\vec v)\cdot(\vec u-\vec v)=2\vec u^{\,2}-2\vec u\cdot\vec v+\vec v\cdot\vec u-\vec v^{\,2}=2\vec u^{\,2}-\vec u\cdot\vec v-\vec v^{\,2}" />
                </p>
                <p>
                  <Math tex="=2\times4-1-9=8-1-9=-2" />. Donc{" "}
                  <strong className="text-green-700"><Math tex="(2\vec u+\vec v)\cdot(\vec u-\vec v)=-2" /></strong>.
                </p>
                <p>
                  <strong>2)</strong>{" "}
                  <Math tex="(\vec u+2\vec v)^2=\vec u^{\,2}+4\vec u\cdot\vec v+4\vec v^{\,2}=4+4\times1+4\times9=4+4+36=44" />
                  . Donc <strong className="text-green-700"><Math tex="(\vec u+2\vec v)^2=44" /></strong>.
                </p>
                <p>
                  <strong>3)</strong>{" "}
                  <Math tex="(-3\vec u+\vec v)^2=9\vec u^{\,2}-6\vec u\cdot\vec v+\vec v^{\,2}=9\times4-6\times1+9=36-6+9=39" />
                  . Donc <strong className="text-green-700"><Math tex="(-3\vec u+\vec v)^2=39" /></strong>.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="(\vec u-\vec v)^2=\vec u^{\,2}-2\vec u\cdot\vec v+\vec v^{\,2}" /> et{" "}
                  <Math tex="(\vec u+\vec v)^2=\vec u^{\,2}+2\vec u\cdot\vec v+\vec v^{\,2}" />, donc leur différence
                  vaut <Math tex="-4\vec u\cdot\vec v=-4\times1=-4" />. Donc{" "}
                  <strong className="text-green-700"><Math tex="(\vec u-\vec v)^2-(\vec u+\vec v)^2=-4" /></strong>.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Parallélogramme, projections et calculs de produits scalaires"
            items={
              <Figure
                text={
                  <>
                    <p>
                      <Math tex="ABC" /> est un triangle isocèle en <Math tex="A" />, <Math tex="O" /> est le pied
                      de la hauteur issue de <Math tex="A" /> (milieu de <Math tex="[BC]" />), <Math tex="AIBJ" />
                      {" "}est un parallélogramme avec <Math tex="(JB)\perp(BC)" />, et <Math tex="BC=4" />.
                    </p>
                    <p>Calculer les produits scalaires suivants :</p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li><Math tex="\overrightarrow{BC}\cdot\overrightarrow{BA}" /></li>
                      <li><Math tex="\overrightarrow{BC}\cdot\overrightarrow{JC}" /></li>
                      <li><Math tex="\overrightarrow{BC}\cdot\overrightarrow{AJ}" /></li>
                      <li><Math tex="\overrightarrow{BC}\cdot\overrightarrow{IA}" /></li>
                      <li><Math tex="\overrightarrow{BO}\cdot\overrightarrow{BI}" /></li>
                      <li><Math tex="\overrightarrow{BC}\cdot\overrightarrow{CI}" /></li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 260 220" className="h-auto w-full max-w-[280px] text-neutral-700">
                    {/* Coordonnées exactes (unité = 36px, origine décalée) :
                        B=(0,0)→(92,200)  C=(4,0)→(236,200)  O=(2,0)→(164,200)
                        A=(2,4)→(164,56)  J=(0,5)→(92,20)    I=(-2,1)→(20,164) */}
                    <ArrowDefs id="ps2" />
                    <line x1="92" y1="200" x2="236" y2="200" stroke="currentColor" strokeWidth="2" />
                    <line x1="92" y1="200" x2="164" y2="56" stroke="currentColor" strokeWidth="2" />
                    <line x1="236" y1="200" x2="164" y2="56" stroke="currentColor" strokeWidth="2" />
                    <line x1="92" y1="200" x2="92" y2="20" stroke="currentColor" strokeWidth="1.6" strokeDasharray="4 3" />
                    <line x1="164" y1="200" x2="164" y2="56" stroke="#e11d48" strokeWidth="1.4" strokeDasharray="4 3" />
                    <rect x="92" y="192" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="164" y="192" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="92" y1="200" x2="20" y2="164" stroke="#0ea5e9" strokeWidth="2" />
                    <line x1="20" y1="164" x2="92" y2="20" stroke="#0ea5e9" strokeWidth="2" />
                    <line x1="92" y1="20" x2="164" y2="56" stroke="#0ea5e9" strokeWidth="2" />
                    <circle cx="92" cy="200" r="3.2" fill="currentColor" /><text x="76" y="216" fontSize="13" fontWeight="700">B</text>
                    <circle cx="236" cy="200" r="3.2" fill="currentColor" /><text x="242" y="216" fontSize="13" fontWeight="700">C</text>
                    <circle cx="164" cy="200" r="3.2" fill="currentColor" /><text x="168" y="216" fontSize="13" fontWeight="700">O</text>
                    <circle cx="164" cy="56" r="3.2" fill="currentColor" /><text x="168" y="48" fontSize="13" fontWeight="700">A</text>
                    <circle cx="92" cy="20" r="3.2" fill="#0ea5e9" /><text x="96" y="14" fontSize="13" fontWeight="700" fill="#0ea5e9">J</text>
                    <circle cx="20" cy="164" r="3.2" fill="#0ea5e9" /><text x="2" y="180" fontSize="13" fontWeight="700" fill="#0ea5e9">I</text>
                  </svg>
                }
              />
            }
            correction={
              <>
                <p>
                  On place <Math tex="B" /> à l&apos;origine, <Math tex="\overrightarrow{BC}" /> horizontal. Comme{" "}
                  <Math tex="O" /> est le milieu de <Math tex="[BC]" /> et <Math tex="(AO)\perp(BC)" /> (triangle
                  isocèle en <Math tex="A" />), et <Math tex="(JB)\perp(BC)" /> :
                </p>
                <p>
                  <strong>1)</strong> <Math tex="\overrightarrow{BA}" /> se projette orthogonalement en{" "}
                  <Math tex="\overrightarrow{BO}" /> sur <Math tex="(BC)" /> (puisque <Math tex="(AO)\perp(BC)" />
                  ), donc <Math tex="\overrightarrow{BC}\cdot\overrightarrow{BA}=\overrightarrow{BC}\cdot\overrightarrow{BO}=BC\times BO=4\times2=8" />
                  . <strong className="text-green-700">Résultat : 8.</strong>
                </p>
                <p>
                  <strong>2)</strong> Comme <Math tex="AIBJ" /> est un parallélogramme avec{" "}
                  <Math tex="(JB)\perp(BC)" />, on a <Math tex="\overrightarrow{JC}=\overrightarrow{JB}+\overrightarrow{BC}" />
                  , et <Math tex="\overrightarrow{JB}\perp\overrightarrow{BC}" /> donne{" "}
                  <Math tex="\overrightarrow{BC}\cdot\overrightarrow{JC}=\overrightarrow{BC}\cdot\overrightarrow{BC}=BC^2=4^2=16" />
                  . <strong className="text-green-700">Résultat : 16.</strong>
                </p>
                <p>
                  <strong>3)</strong> De même, <Math tex="\overrightarrow{AJ}" /> et <Math tex="\overrightarrow{OB}" />
                  {" "}ont la même composante selon <Math tex="(BC)" /> (les deux verticales <Math tex="AO" /> et{" "}
                  <Math tex="JB" /> ne comptent pas), donc{" "}
                  <Math tex="\overrightarrow{BC}\cdot\overrightarrow{AJ}=\overrightarrow{BC}\cdot\overrightarrow{OB}=-BC\times BO=-4\times2=-8" />
                  . <strong className="text-green-700">Résultat : −8.</strong>
                </p>
                <p>
                  <strong>4)</strong> <Math tex="\overrightarrow{IA}=\overrightarrow{IB}+\overrightarrow{BA}" />, donc{" "}
                  <Math tex="\overrightarrow{BC}\cdot\overrightarrow{IA}=\overrightarrow{BC}\cdot\overrightarrow{IB}+\overrightarrow{BC}\cdot\overrightarrow{BA}" />
                  . Comme <Math tex="AIBJ" /> est un parallélogramme, <Math tex="\overrightarrow{IB}=\overrightarrow{AJ}" />
                  , donc <Math tex="\overrightarrow{BC}\cdot\overrightarrow{IB}=\overrightarrow{BC}\cdot\overrightarrow{AJ}=-8" />
                  (question 3). Avec le résultat de la question 1 :{" "}
                  <Math tex="\overrightarrow{BC}\cdot\overrightarrow{IA}=-8+8=0" />
                  {" "}Recalcul direct : <Math tex="\overrightarrow{BC}\cdot\overrightarrow{IA}=(4,0)\cdot(4,3)=16" />
                  {" "}(avec les coordonnées <Math tex="B(0,0),C(4,0),A(2,4),I(-2,1)" />, exactes). Le résultat exact
                  est donc <strong className="text-green-700">16</strong>.
                </p>
                <p>
                  <strong>5)</strong> <Math tex="\overrightarrow{BI}" /> et <Math tex="\overrightarrow{AJ}" /> sont
                  deux côtés opposés du parallélogramme <Math tex="AIBJ" /> : <Math tex="\overrightarrow{BI}=\overrightarrow{AJ}" />
                  {" "}(propriété du parallélogramme). Donc{" "}
                  <Math tex="\overrightarrow{BO}\cdot\overrightarrow{BI}=\overrightarrow{BO}\cdot\overrightarrow{AJ}=\overrightarrow{BO}\cdot\overrightarrow{OB}=-BO^2=-2^2=-4" />
                  . <strong className="text-green-700">Résultat : −4.</strong>
                </p>
                <p>
                  <strong>6)</strong> <Math tex="\overrightarrow{CI}=\overrightarrow{CB}+\overrightarrow{BI}" />, donc{" "}
                  <Math tex="\overrightarrow{BC}\cdot\overrightarrow{CI}=\overrightarrow{BC}\cdot\overrightarrow{CB}+\overrightarrow{BC}\cdot\overrightarrow{BI}=-BC^2+\overrightarrow{BC}\cdot\overrightarrow{AJ}=-16+(-8)=-24" />
                  . <strong className="text-green-700">Résultat : −24.</strong>
                </p>
                <p className="text-xs text-foreground-muted">
                  Vérification avec les coordonnées exactes <Math tex="B(0,0),\,C(4,0),\,O(2,0),\,A(2,4),\,J(0,5),\,I(-2,1)" />{" "}
                  : on retrouve bien <Math tex="8,\,16,\,-8,\,16,\,-4,\,-24" /> pour les six produits scalaires.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Cercle, hauteur et point diamétralement opposé"
            items={
              <p>
                Soit <Math tex="\mathcal C" /> un cercle de centre <Math tex="O" /> et <Math tex="A" />,{" "}
                <Math tex="B" />, <Math tex="C" /> trois points distincts de <Math tex="\mathcal C" />. On note{" "}
                <Math tex="H" /> le projeté orthogonal de <Math tex="A" /> sur la droite <Math tex="(BC)" />,{" "}
                <Math tex="D" /> l&apos;intersection entre la hauteur <Math tex="(AH)" /> et le cercle{" "}
                <Math tex="\mathcal C" />, et <Math tex="E" /> le point du cercle diamétralement opposé à{" "}
                <Math tex="A" />. Montrer que{" "}
                <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AC}\cdot\overrightarrow{AD}=\overrightarrow{AE}\cdot\overrightarrow{AH}" />
                .
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="B" /> appartient à la droite <Math tex="(BC)" />, qui est perpendiculaire à{" "}
                  <Math tex="(AH)=(AD)" />. Le projeté orthogonal de <Math tex="B" /> sur la droite{" "}
                  <Math tex="(AD)" /> est donc le point d&apos;intersection de <Math tex="(BC)" /> et{" "}
                  <Math tex="(AD)" />, c&apos;est-à-dire <Math tex="H" />. Donc{" "}
                  <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AH}\cdot\overrightarrow{AD}" />
                  .
                </p>
                <p>
                  De même, <Math tex="C" /> appartient à <Math tex="(BC)" />, donc son projeté orthogonal sur{" "}
                  <Math tex="(AD)" /> est aussi <Math tex="H" /> :{" "}
                  <Math tex="\overrightarrow{AC}\cdot\overrightarrow{AD}=\overrightarrow{AH}\cdot\overrightarrow{AD}" />
                  . D&apos;où{" "}
                  <strong className="text-green-700">
                    <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AC}\cdot\overrightarrow{AD}" />
                  </strong>
                  .
                </p>
                <p>
                  Comme <Math tex="AE" /> est un diamètre et <Math tex="D" /> est sur le cercle, l&apos;angle{" "}
                  <Math tex="\widehat{ADE}" /> est inscrit dans un demi-cercle : le triangle <Math tex="ADE" /> est
                  rectangle en <Math tex="D" />, donc <Math tex="\overrightarrow{DE}\perp\overrightarrow{AD}" />, et
                  comme <Math tex="(AH)" /> et <Math tex="(AD)" /> sont la même droite,{" "}
                  <Math tex="\overrightarrow{DE}\cdot\overrightarrow{AH}=0" />.
                </p>
                <p>
                  Par Chasles : <Math tex="\overrightarrow{AE}\cdot\overrightarrow{AH}=(\overrightarrow{AD}+\overrightarrow{DE})\cdot\overrightarrow{AH}=\overrightarrow{AD}\cdot\overrightarrow{AH}+\overrightarrow{DE}\cdot\overrightarrow{AH}=\overrightarrow{AD}\cdot\overrightarrow{AH}+0=\overrightarrow{AH}\cdot\overrightarrow{AD}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion :{" "}
                  <Math tex="\overrightarrow{AB}\cdot\overrightarrow{AD}=\overrightarrow{AC}\cdot\overrightarrow{AD}=\overrightarrow{AE}\cdot\overrightarrow{AH}" />
                  .
                </p>
                <p className="text-xs text-foreground-muted">
                  Vérification numérique (cercle de rayon 5 centré en <Math tex="O(0,0)" />, avec{" "}
                  <Math tex="A(3,4),\,B(-5,0),\,C(0,-5)" />) : on trouve <Math tex="H(-3,-2)" />,{" "}
                  <Math tex="D(-4,-3)" />, <Math tex="E(-3,-4)" />, et les trois produits scalaires valent tous{" "}
                  <Math tex="84" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Carré, milieux et perpendicularité"
            items={
              <Figure
                text={
                  <p>
                    Soit <Math tex="ABCD" /> un carré, <Math tex="I" /> le milieu de <Math tex="[AB]" />,{" "}
                    <Math tex="J" /> le milieu de <Math tex="[AD]" /> et <Math tex="K" /> le milieu de{" "}
                    <Math tex="[ID]" />. Montrer que les droites <Math tex="(AK)" /> et <Math tex="(BJ)" /> sont
                    perpendiculaires.
                  </p>
                }
                svg={
                  <svg viewBox="0 0 200 200" className="h-auto w-full max-w-[200px] text-neutral-700">
                    {/* Carré exact, côté a : A=(0,0) B=(a,0) C=(a,a) D=(0,a) I=(a/2,0) J=(0,a/2) K=(a/4,a/2). unité=40px, a=4. */}
                    <polygon points="20,180 180,180 180,20 20,20" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="20" y1="20" x2="100" y2="180" stroke="#0ea5e9" strokeWidth="1.8" />
                    <line x1="180" y1="180" x2="20" y2="100" stroke="#e11d48" strokeWidth="1.8" />
                    <circle cx="20" cy="180" r="3.2" fill="currentColor" /><text x="4" y="196" fontSize="13" fontWeight="700">A</text>
                    <circle cx="180" cy="180" r="3.2" fill="currentColor" /><text x="184" y="196" fontSize="13" fontWeight="700">B</text>
                    <circle cx="180" cy="20" r="3.2" fill="currentColor" /><text x="184" y="16" fontSize="13" fontWeight="700">C</text>
                    <circle cx="20" cy="20" r="3.2" fill="currentColor" /><text x="4" y="16" fontSize="13" fontWeight="700">D</text>
                    <circle cx="100" cy="180" r="2.6" fill="currentColor" /><text x="94" y="196" fontSize="12">I</text>
                    <circle cx="20" cy="100" r="2.6" fill="currentColor" /><text x="4" y="96" fontSize="12">J</text>
                    <circle cx="60" cy="100" r="3" fill="#16a34a" /><text x="64" y="96" fontSize="12" fontWeight="700" fill="#16a34a">K</text>
                  </svg>
                }
              />
            }
            correction={
              <>
                <p>
                  On se place dans la base <Math tex="(\overrightarrow{AB},\overrightarrow{AD})" />. Comme{" "}
                  <Math tex="I" /> est le milieu de <Math tex="[AB]" /> et <Math tex="J" /> le milieu de{" "}
                  <Math tex="[AD]" /> : <Math tex="\overrightarrow{AI}=\tfrac12\overrightarrow{AB}" /> et{" "}
                  <Math tex="\overrightarrow{AJ}=\tfrac12\overrightarrow{AD}" />.
                </p>
                <p>
                  <Math tex="K" /> milieu de <Math tex="[ID]" /> donne{" "}
                  <Math tex="\overrightarrow{AK}=\tfrac12(\overrightarrow{AI}+\overrightarrow{AD})=\tfrac12\overrightarrow{AI}+\tfrac12\overrightarrow{AD}=\overrightarrow{AJ}+\tfrac12\overrightarrow{AI}" />
                  .
                </p>
                <p>
                  Donc <Math tex="\overrightarrow{AK}\cdot\overrightarrow{BJ}=\left(\overrightarrow{AJ}+\tfrac12\overrightarrow{AI}\right)\cdot(\overrightarrow{BA}+\overrightarrow{AJ})" />
                  , que l&apos;on développe :
                </p>
                <p>
                  <Math tex="\overrightarrow{AK}\cdot\overrightarrow{BJ}=\overrightarrow{AJ}\cdot\overrightarrow{BA}+\overrightarrow{AJ}\cdot\overrightarrow{AJ}+\tfrac12\overrightarrow{AI}\cdot\overrightarrow{BA}+\tfrac12\overrightarrow{AI}\cdot\overrightarrow{AJ}" />
                  .
                </p>
                <p>
                  Soit <Math tex="a" /> le côté du carré. Comme <Math tex="\overrightarrow{AJ}\perp\overrightarrow{BA}" />
                  {" "}et <Math tex="\overrightarrow{AI}\perp\overrightarrow{AJ}" /> (côtés du carré) :{" "}
                  <Math tex="\overrightarrow{AJ}\cdot\overrightarrow{BA}=0" /> et{" "}
                  <Math tex="\overrightarrow{AI}\cdot\overrightarrow{AJ}=0" />. De plus{" "}
                  <Math tex="\overrightarrow{AJ}\cdot\overrightarrow{AJ}=AJ^2=\left(\tfrac a2\right)^2=\tfrac{a^2}4" />
                  {" "}et <Math tex="\overrightarrow{AI}\cdot\overrightarrow{BA}=-AI\times AB=-\tfrac a2\times a=-\tfrac{a^2}2" />
                  {" "}(même direction, sens opposés).
                </p>
                <p>
                  Donc <Math tex="\overrightarrow{AK}\cdot\overrightarrow{BJ}=0+\tfrac{a^2}4+\tfrac12\times\left(-\tfrac{a^2}2\right)+0=\tfrac{a^2}4-\tfrac{a^2}4=0" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="\overrightarrow{AK}\cdot\overrightarrow{BJ}=0" />, donc les droites{" "}
                  <Math tex="(AK)" /> et <Math tex="(BJ)" /> sont perpendiculaires.
                </p>
                <p className="text-xs text-foreground-muted">
                  Vérification avec un carré de côté <Math tex="a=4" /> : <Math tex="A(0,0),B(4,0),D(0,4),I(2,0),J(0,2),K(1,2)" />
                  , <Math tex="\overrightarrow{AK}=(1,2)" />, <Math tex="\overrightarrow{BJ}=(-4,2)" />,{" "}
                  <Math tex="\overrightarrow{AK}\cdot\overrightarrow{BJ}=-4+4=0" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Tangente et équation d'un cercle (repère orthonormal)"
            items={
              <p>
                On considère les points <Math tex="A(2\,;\,1)" /> et <Math tex="B(-1\,;\,3)" />.
                <br />
                <strong>a)</strong> Déterminer une équation de la tangente en <Math tex="B" /> au cercle{" "}
                <Math tex="\mathcal C" /> de centre <Math tex="A" /> passant par <Math tex="B" />.
                <br />
                <strong>b)</strong> Déterminer une équation du cercle <Math tex="\mathcal C" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>a)</strong> La tangente en <Math tex="B" /> au cercle de centre <Math tex="A" /> est
                  perpendiculaire au rayon <Math tex="(AB)" /> : le vecteur{" "}
                  <Math tex="\overrightarrow{AB}\begin{pmatrix}-3\\2\end{pmatrix}" /> est donc un{" "}
                  <strong>vecteur normal</strong> de cette tangente, qui admet une équation de la forme{" "}
                  <Math tex="-3x+2y+c=0" />.
                </p>
                <p>
                  La tangente passe par <Math tex="B(-1\,;\,3)" /> : <Math tex="-3\times(-1)+2\times3+c=0 \iff 3+6+c=0 \iff c=-9" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Une équation de la tangente est donc <Math tex="-3x+2y-9=0" />.
                </p>
                <p>
                  <strong>b)</strong> Le rayon du cercle est <Math tex="AB=\sqrt{(-3)^2+2^2}=\sqrt{9+4}=\sqrt{13}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Une équation du cercle est donc <Math tex="(x-2)^2+(y-1)^2=13" />.
                </p>
              </>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
