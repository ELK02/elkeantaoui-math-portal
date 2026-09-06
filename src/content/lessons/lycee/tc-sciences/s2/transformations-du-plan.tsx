import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  FormulaBlock,
  Math,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Transformations du plan · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet sur les transformations du plan (symétrie axiale, symétrie centrale, translation, homothétie), leurs propriétés de conservation, et exercices entièrement corrigés avec figures calculées exactement. Tronc Commun Sciences et Technologies, semestre 2.",
  kicker: "Tronc Commun Sciences · Semestre 2",
  heroTitle: "Transformations du plan",
  heroSubtitle:
    "Symétrie axiale, symétrie centrale, translation et homothétie : définitions, propriétés de conservation, puis des exercices corrigés avec figures placées aux coordonnées exactes.",
  footerNote: "Transformations du plan · Mathématiques, Tronc Commun Sciences et Technologies, semestre 2.",
  sections: [
    { id: "notion", label: "Transformations" },
    { id: "symetries", label: "Symétries" },
    { id: "translation", label: "Translation" },
    { id: "homothetie", label: "Homothétie" },
    { id: "proprietes", label: "Propriétés" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Two-column layout: statement / correction text on the left, a diagram on the right. */
function Figure({ text, svg }: { text: ReactNode; svg: ReactNode }) {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-5">
      <div className="space-y-2 text-sm text-foreground sm:col-span-3">{text}</div>
      <div className="flex justify-center sm:col-span-2">{svg}</div>
    </div>
  );
}

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <p className="text-foreground">{children}</p>
    </div>
  );
}

/** A numbered definition card used in the "Cours" sections. */
function CourseCard({
  numeral,
  title,
  visual,
  children,
  footer,
}: {
  numeral: ReactNode;
  title: string;
  visual: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <article className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-sm font-bold text-white dark:bg-white dark:text-neutral-950">
              {numeral}
            </span>
            <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
          </div>
          <div className="space-y-3">{children}</div>
        </div>
        <div className="flex justify-center lg:col-span-2">{visual}</div>
      </div>
      {footer ? <div className="border-t border-border bg-surface-muted p-6 sm:p-8">{footer}</div> : null}
    </article>
  );
}

/* ============================================================
   Illustrative diagrams (coordinates computed exactly in Python,
   see reflect_point_over_line / midpoint / homothety formulas).
   ============================================================ */

function SvgSymetrieAxiale() {
  return (
    <svg viewBox="0 0 300 240" className="h-auto w-full max-w-[260px]">
      <line x1="48" y1="192" x2="216" y2="48" stroke="#e11d48" strokeWidth="2" />
      <text x="220" y="44" fontSize="13" fontWeight="700" fill="#e11d48">(D)</text>
      <line x1="79.2" y1="67.2" x2="176.1" y2="180.3" stroke="#334155" strokeWidth="1.6" strokeDasharray="4 3" />
      <rect x="120" y="118" width="7" height="7" fill="none" stroke="#334155" strokeWidth="1" transform="rotate(-49 123.5 121.5)" />
      <circle cx="79.2" cy="67.2" r="3.2" fill="#0f172a" />
      <text x="60" y="60" fontSize="13" fontWeight="700" fill="#0f172a">M</text>
      <circle cx="176.1" cy="180.3" r="3.2" fill="#4f46e5" />
      <text x="182" y="192" fontSize="13" fontWeight="700" fill="#4f46e5">M&apos;</text>
      <circle cx="127.7" cy="123.7" r="2.6" fill="#334155" />
    </svg>
  );
}

function SvgSymetrieCentrale() {
  return (
    <svg viewBox="0 0 300 240" className="h-auto w-full max-w-[260px]">
      <line x1="72" y1="60" x2="216" y2="180" stroke="#334155" strokeWidth="1.6" strokeDasharray="4 3" />
      <circle cx="144" cy="120" r="3.4" fill="#e11d48" />
      <text x="150" y="115" fontSize="13" fontWeight="700" fill="#e11d48">I</text>
      <circle cx="72" cy="60" r="3.2" fill="#0f172a" />
      <text x="52" y="54" fontSize="13" fontWeight="700" fill="#0f172a">M</text>
      <circle cx="216" cy="180" r="3.2" fill="#4f46e5" />
      <text x="222" y="192" fontSize="13" fontWeight="700" fill="#4f46e5">M&apos;</text>
    </svg>
  );
}

function SvgTranslation() {
  return (
    <svg viewBox="0 0 300 240" className="h-auto w-full max-w-[260px]">
      <defs>
        <marker id="tr-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
      <g color="#f97316">
        <line x1="72" y1="72" x2="164" y2="26" stroke="currentColor" strokeWidth="2.2" markerEnd="url(#tr-arrow)" />
        <text x="100" y="38" fontSize="13" fontWeight="700" fill="#f97316">u</text>
      </g>
      <g color="#059669">
        <line x1="72" y1="168" x2="164" y2="122" stroke="currentColor" strokeWidth="2.2" markerEnd="url(#tr-arrow)" />
      </g>
      <circle cx="72" cy="168" r="3.2" fill="#0f172a" />
      <text x="52" y="182" fontSize="13" fontWeight="700" fill="#0f172a">M</text>
      <circle cx="168" cy="120" r="3.2" fill="#4f46e5" />
      <text x="174" y="112" fontSize="13" fontWeight="700" fill="#4f46e5">M&apos;</text>
    </svg>
  );
}

function SvgHomothetie() {
  return (
    <svg viewBox="0 0 300 240" className="h-auto w-full max-w-[260px]">
      <line x1="72" y1="168" x2="168" y2="120" stroke="#334155" strokeWidth="1.6" />
      <circle cx="72" cy="168" r="3.4" fill="#e11d48" />
      <text x="52" y="182" fontSize="13" fontWeight="700" fill="#e11d48">Ω</text>
      <circle cx="120" cy="144" r="3.2" fill="#0f172a" />
      <text x="100" y="138" fontSize="13" fontWeight="700" fill="#0f172a">M</text>
      <circle cx="168" cy="120" r="3.2" fill="#4f46e5" />
      <text x="174" y="112" fontSize="13" fontWeight="700" fill="#4f46e5">M&apos;</text>
      <text x="180" y="200" fontSize="11" fill="#64748b">k = 2</text>
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
          { value: "4", label: "transformations" },
          { value: "4", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#notion"
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
          <svg viewBox="0 0 220 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <polygon points="60,150 60,90 110,90 110,150" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85" />
            <polygon points="140,110 140,50 190,50 190,110" fill="none" stroke="#fb923c" strokeWidth="2.2" />
            <line x1="85" y1="90" x2="165" y2="50" stroke="#fb923c" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.7" />
            <line x1="85" y1="150" x2="165" y2="110" stroke="#fb923c" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.7" />
            <circle cx="85" cy="120" r="3" fill="currentColor" />
            <circle cx="165" cy="80" r="3" fill="#fb923c" />
          </svg>
        }
      />

      {/* ===================== I. NOTION DE TRANSFORMATION ===================== */}
      <LessonSection
        id="notion"
        kicker="01 · Vocabulaire"
        title="Transformation du plan"
        tone="light"
        description="Une transformation associe à chaque point du plan un unique point image. C'est l'outil qui permet ensuite de définir précisément la symétrie, la translation et l'homothétie."
      >
        <CourseCard
          numeral="I"
          title="Transformation du plan"
          visual={
            <svg viewBox="0 0 300 240" className="h-auto w-full max-w-[280px]">
              <line x1="30" y1="120" x2="270" y2="120" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="150" y1="20" x2="150" y2="220" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="90" cy="150" r="3.2" fill="#0f172a" />
              <text x="70" y="165" fontSize="13" fontWeight="700" fill="#0f172a">M</text>
              <circle cx="215" cy="70" r="3.2" fill="#4f46e5" />
              <text x="222" y="65" fontSize="13" fontWeight="700" fill="#4f46e5">M&apos; = t(M)</text>
              <path d="M 95,145 Q 150,60 210,72" fill="none" stroke="#f97316" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#tr-arrow2)" />
              <defs>
                <marker id="tr-arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
                </marker>
              </defs>
            </svg>
          }
        >
          <DefBox label="Définition">
            Toute relation qui associe à tout point <Math tex="M" /> du plan <Math tex="(P)" /> un unique point{" "}
            <Math tex="M'" /> de <Math tex="(P)" /> vérifiant une (ou plusieurs) condition(s) s&apos;appelle une{" "}
            <strong>transformation</strong> du plan <Math tex="(P)" />, notée <Math tex="t" /> (ou <Math tex="h" />,{" "}
            <Math tex="S_{(D)}" />, <Math tex="S_O" />, <Math tex="r" />, …).
          </DefBox>
          <FormulaBlock tex="\begin{gathered} t:(P)\to (P) \\ M\mapsto t(M)=M' \end{gathered}" />
          <Callout variant="info" title="Vocabulaire">
            <p>
              On dit que <Math tex="t" /> transforme <Math tex="M" /> en <Math tex="M'" />, ou que <Math tex="M'" /> est
              le <strong>transformé</strong> (ou l&apos;<strong>image</strong>) de <Math tex="M" /> par <Math tex="t" />.
              On dit aussi que <Math tex="M" /> est un <strong>antécédent</strong> de <Math tex="M'" /> par{" "}
              <Math tex="t" />.
            </p>
          </Callout>
        </CourseCard>
      </LessonSection>

      {/* ===================== II/III. SYMETRIES ===================== */}
      <LessonSection
        id="symetries"
        kicker="02 · Symétries"
        title="Symétrie axiale et symétrie centrale"
        tone="muted"
        description="Deux transformations qui envoient chaque point M sur un point M' tel qu'un élément fixe (droite ou point) soit respectivement la médiatrice ou le milieu de [MM']."
      >
        <CourseCard
          numeral="II"
          title="Symétrie axiale d'axe (D)"
          visual={<SvgSymetrieAxiale />}
        >
          <DefBox label="Définition">
            La symétrie axiale <Math tex="S_{(D)}" /> d&apos;axe une droite <Math tex="(D)" /> du plan <Math tex="(P)" />{" "}
            est la transformation qui associe à tout point <Math tex="M" /> de <Math tex="(P)" /> le point{" "}
            <Math tex="M'" /> tel que <Math tex="(D)" /> soit la <strong>médiatrice</strong> du segment{" "}
            <Math tex="[MM']" />.
          </DefBox>
          <FormulaBlock tex="S_{(D)}(M)=M'" />
          <Callout variant="warning" title="Construction">
            Pour construire <Math tex="M'" />, on trace la perpendiculaire à <Math tex="(D)" /> passant par{" "}
            <Math tex="M" />, qui coupe <Math tex="(D)" /> en un point <Math tex="H" /> ; <Math tex="M'" /> est le point
            de cette perpendiculaire tel que <Math tex="H" /> soit le milieu de <Math tex="[MM']" />.
          </Callout>
        </CourseCard>

        <CourseCard
          numeral="III"
          title="Symétrie centrale de centre I"
          visual={<SvgSymetrieCentrale />}
        >
          <DefBox label="Définition">
            La symétrie centrale <Math tex="S_I" /> de centre un point <Math tex="I" /> du plan <Math tex="(P)" /> est
            la transformation qui associe à tout point <Math tex="M" /> de <Math tex="(P)" /> le point{" "}
            <Math tex="M'" /> tel que <Math tex="I" /> soit le <strong>milieu</strong> du segment <Math tex="[MM']" />.
          </DefBox>
          <FormulaBlock tex="S_I(M)=M'" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="S_I(M)=M' \iff \overrightarrow{IM'}=-\overrightarrow{IM}" />
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <Math tex="S_I(M)=M' \iff S_I(M')=M" />
            </div>
          </div>
          <Callout variant="danger" title="Point invariant">
            <Math tex="I" /> est le <strong>seul</strong> point invariant par <Math tex="S_I" /> : <Math tex="S_I(I)=I" />.
          </Callout>
        </CourseCard>
      </LessonSection>

      {/* ===================== IV. TRANSLATION ===================== */}
      <LessonSection
        id="translation"
        kicker="03 · Translation"
        title="Translation de vecteur u"
        tone="light"
        description="La translation « glisse » tout le plan selon un vecteur donné, sans le déformer et sans le faire tourner."
      >
        <CourseCard
          numeral="IV"
          title="Translation de vecteur u"
          visual={<SvgTranslation />}
        >
          <DefBox label="Définition">
            La translation de vecteur <Math tex="\vec u" /> du plan <Math tex="(P)" /> est la transformation qui
            associe à tout point <Math tex="M" /> de <Math tex="(P)" /> le point <Math tex="M'" /> tel que{" "}
            <Math tex="\overrightarrow{MM'}=\vec u" />. On la note <Math tex="t_{\vec u}" />.
          </DefBox>
          <FormulaBlock tex="t_{\vec u}(M)=M' \iff \overrightarrow{MM'}=\vec u" />
          <Callout variant="info" title="Remarques">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="t_{\vec u}(M)=M'" /> équivaut à : le quadrilatère <Math tex="ABM'M" /> est un
                parallélogramme, avec <Math tex="\overrightarrow{AB}=\vec u" />.
              </li>
              <li>
                <Math tex="t_{\vec u}(M)=M' \iff t_{-\vec u}(M')=M" />.
              </li>
              <li>
                Si <Math tex="\vec u\ne\vec 0" />, aucun point du plan n&apos;est invariant.
              </li>
              <li>
                Si <Math tex="\vec u=\vec 0" />, tous les points du plan sont invariants : <Math tex="t_{\vec 0}(M)=M" />.
              </li>
            </ul>
          </Callout>
        </CourseCard>
      </LessonSection>

      {/* ===================== V. HOMOTHETIE ===================== */}
      <LessonSection
        id="homothetie"
        kicker="04 · Homothétie"
        title="Homothétie de centre Ω et de rapport k"
        tone="muted"
        description="L'homothétie agrandit ou réduit le plan à partir d'un centre fixe, selon un rapport k réel non nul — c'est la seule des quatre transformations qui ne conserve pas les distances."
      >
        <CourseCard
          numeral="V"
          title="Homothétie h(Ω,k)"
          visual={<SvgHomothetie />}
        >
          <DefBox label="Définition">
            L&apos;homothétie de centre <Math tex="\Omega" /> et de rapport <Math tex="k" /> (avec{" "}
            <Math tex="k\in\mathbb R^*" />) est la transformation qui associe à tout point <Math tex="M" /> du plan le
            point <Math tex="M'" /> tel que <Math tex="\overrightarrow{\Omega M'}=k\,\overrightarrow{\Omega M}" />. On
            la note <Math tex="h(\Omega,k)" />.
          </DefBox>
          <FormulaBlock tex="h(M)=M' \iff \overrightarrow{\Omega M'}=k\,\overrightarrow{\Omega M}" />
          <Callout variant="info" title="Cas particuliers et remarques">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Math tex="M" />, <Math tex="M'" /> et <Math tex="\Omega" /> sont toujours alignés.
              </li>
              <li>
                Si <Math tex="k=1" /> : tous les points sont invariants (<Math tex="h(M)=M" />).
              </li>
              <li>
                Si <Math tex="k=-1" /> : <Math tex="h(\Omega,-1)" /> est exactement la symétrie centrale{" "}
                <Math tex="S_\Omega" />.
              </li>
              <li>
                Si <Math tex="k&gt;0" /> : <Math tex="M'" /> est sur la demi-droite <Math tex="[\Omega M)" />.
              </li>
              <li>
                Si <Math tex="k&lt;0" /> : <Math tex="M'" /> est sur la demi-droite opposée à <Math tex="[\Omega M)" />.
              </li>
              <li>
                On prend en pratique <Math tex="k\in\mathbb R\setminus\{0,1\}" /> pour que l&apos;homothétie soit
                intéressante.
              </li>
            </ul>
          </Callout>
        </CourseCard>
      </LessonSection>

      {/* ===================== VI/VII. PROPRIETES ===================== */}
      <LessonSection
        id="proprietes"
        kicker="05 · Propriétés"
        title="Propriété caractéristique et conservations"
        tone="light"
        description="Un critère vectoriel permet de reconnaître la nature d'une transformation à partir des images de deux points, et une liste de propriétés que chaque transformation conserve ou non."
      >
        <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h3 className="mb-4 font-display text-lg font-bold text-foreground">
            Propriété caractéristique (reconnaître une transformation)
          </h3>
          <p className="mb-4 text-sm text-foreground">
            Soit <Math tex="f" /> une transformation du plan telle que pour tous points <Math tex="A" /> et{" "}
            <Math tex="B" /> on ait <Math tex="f(A)=A'" /> et <Math tex="f(B)=B'" />.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-4 text-sm">
              <p className="mb-1 font-semibold text-foreground-muted">Translation</p>
              <p>
                <Math tex="f" /> est une translation <Math tex="\iff \overrightarrow{A'B'}=\overrightarrow{AB}" />.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <p className="mb-1 font-semibold text-foreground-muted">Homothétie</p>
              <p>
                <Math tex="f" /> est une homothétie <Math tex="\iff \overrightarrow{A'B'}=k\overrightarrow{AB}" /> avec{" "}
                <Math tex="k\in\mathbb R\setminus\{0,1\}" />.
              </p>
            </div>
            <div className="rounded-xl border border-border p-4 text-sm">
              <p className="mb-1 font-semibold text-foreground-muted">Symétrie centrale</p>
              <p>
                <Math tex="f" /> est une symétrie centrale <Math tex="\iff \overrightarrow{A'B'}=-\overrightarrow{AB}" />
                .
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h3 className="mb-4 font-display text-lg font-bold text-foreground">
            Images de figures usuelles par <Math tex="S_{(D)}" />, <Math tex="S_\Omega" />, <Math tex="t_{\vec u}" /> et{" "}
            <Math tex="h(\Omega,k)" />
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs font-semibold uppercase text-foreground-muted">
                  <th className="py-2 pr-4">Figure</th>
                  <th className="py-2 pr-4">Image par <Math tex="S_{(D)}" />, <Math tex="S_\Omega" />, <Math tex="t_{\vec u}" /></th>
                  <th className="py-2">Image par <Math tex="h(\Omega,k)" /></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-2 pr-4">Droite <Math tex="(AB)" /></td>
                  <td className="py-2 pr-4">Droite <Math tex="(A'B')" />, avec <Math tex="(AB)\parallel(A'B')" /></td>
                  <td className="py-2">Droite <Math tex="(A'B')" />, avec <Math tex="(AB)\parallel(A'B')" /></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Segment <Math tex="[AB]" /></td>
                  <td className="py-2 pr-4">Segment <Math tex="[A'B']" />, <Math tex="A'B'=AB" /></td>
                  <td className="py-2">Segment <Math tex="[A'B']" />, <Math tex="A'B'=|k|\,AB" /></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Vecteur <Math tex="\alpha\overrightarrow{AB}" /></td>
                  <td className="py-2 pr-4">Vecteur <Math tex="\alpha\overrightarrow{A'B'}" /></td>
                  <td className="py-2">Vecteur <Math tex="k\alpha\overrightarrow{A'B'}" /></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Cercle <Math tex="\mathcal C(A,r)" /></td>
                  <td className="py-2 pr-4">Cercle <Math tex="\mathcal C(A',r)" /></td>
                  <td className="py-2">Cercle <Math tex="\mathcal C(A',|k|\,r)" /></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Angle géométrique <Math tex="\widehat{AOB}" /></td>
                  <td className="py-2 pr-4" colSpan={2}>Angle géométrique <Math tex="\widehat{A'O'B'}" /> de même mesure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Callout variant="success" title="Ce qui est conservé">
            <p>
              La symétrie axiale, la symétrie centrale et la translation conservent : les distances, le milieu, le
              coefficient de colinéarité, le parallélisme, l&apos;orthogonalité, les mesures des angles géométriques,
              et l&apos;intersection des figures.
            </p>
            <p className="mt-2">
              L&apos;homothétie conserve tout cela <strong>sauf les distances</strong> (elle les multiplie par{" "}
              <Math tex="|k|" />).
            </p>
          </Callout>
          <Callout variant="warning" title="Image d'une droite par une symétrie (cas particuliers)">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Par <Math tex="S_{(D)}" />, l&apos;image de <Math tex="(\Delta)" /> est une droite{" "}
                <Math tex="(\Delta')" /> telle que : si <Math tex="(\Delta)\parallel(D)" /> alors{" "}
                <Math tex="(\Delta')\parallel(\Delta)\parallel(D)" /> ; si <Math tex="(\Delta)\perp(D)" /> alors{" "}
                <Math tex="(\Delta')=(\Delta)" />.
              </li>
              <li>
                Par <Math tex="S_\Omega" />, l&apos;image de <Math tex="(\Delta)" /> est une droite{" "}
                <Math tex="(\Delta')" /> telle que : si <Math tex="\Omega\notin(\Delta)" /> alors{" "}
                <Math tex="(\Delta')\parallel(\Delta)" /> ; si <Math tex="\Omega\in(\Delta)" /> alors{" "}
                <Math tex="(\Delta')=(\Delta)" />.
              </li>
            </ul>
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Transformations du plan"
        tone="muted"
        description="4 exercices corrigés. Cherche sur ton cahier, puis clique pour vérifier — chaque figure est placée aux coordonnées exactes calculées dans la correction."
      >
        <ExerciseGroup
          total={4}
          celebrationTitle="Bravo, les 4 exercices sont vérifiés !"
          celebrationSubtitle="Tu maîtrises les transformations du plan."
        >
          {/* ---------- Exercice 1 ---------- */}
          <ExerciseCard
            id="1"
            index={1}
            title={
              <>
                Losange, symétries et translations
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                  Symétrie centrale, symétrie axiale, translation
                </span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      <Math tex="ABCD" /> est un losange de centre <Math tex="O" />, <Math tex="I" /> le milieu du
                      segment <Math tex="[AB]" /> et <Math tex="J" /> le milieu du segment <Math tex="[AD]" />.
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Fais une figure.</li>
                      <li>
                        Détermine <Math tex="S_O(A)" />, <Math tex="S_O(B)" />, <Math tex="S_O(O)" /> et{" "}
                        <Math tex="S_O((AB))" />.
                      </li>
                      <li>
                        Détermine <Math tex="S_{(AC)}(B)" />, <Math tex="S_{(AC)}(A)" />, <Math tex="S_{(AC)}(O)" />,{" "}
                        <Math tex="S_{(AC)}([AB])" />, <Math tex="S_{(AC)}(I)" /> et <Math tex="S_{(AC)}((OI))" />.
                      </li>
                      <li>
                        Détermine <Math tex="t_{\overrightarrow{BC}}(A)" />, <Math tex="t_{\overrightarrow{IJ}}(B)" />{" "}
                        et <Math tex="t_{\overrightarrow{IJ}}([OB])" />.
                      </li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 300 220" className="h-auto w-full max-w-[280px]">
                    <polygon points="56.7,110 136.7,163.3 216.7,110 136.7,56.7" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="56.7" cy="110" r="2.8" fill="#0f172a" /><text x="38" y="106" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="136.7" cy="163.3" r="2.8" fill="#0f172a" /><text x="130" y="182" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="216.7" cy="110" r="2.8" fill="#0f172a" /><text x="224" y="106" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="136.7" cy="56.7" r="2.8" fill="#0f172a" /><text x="130" y="42" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                    <circle cx="136.7" cy="110" r="2.8" fill="#e11d48" /><text x="142" y="106" fontSize="12" fontWeight="700" fill="#e11d48">O</text>
                  </svg>
                }
              />
            }
            correction={
              <div className="space-y-4">
                <Figure
                  text={
                    <>
                      <p className="font-semibold">1) Figure (repère choisi pour la correction)</p>
                      <p>
                        On place <Math tex="A(-3;0)" />, <Math tex="B(0;-2)" />, <Math tex="C(3;0)" />,{" "}
                        <Math tex="D(0;2)" />, donc <Math tex="O(0;0)" />, <Math tex="I(-1{,}5;-1)" /> et{" "}
                        <Math tex="J(-1{,}5;1)" />.
                      </p>
                    </>
                  }
                  svg={
                    <svg viewBox="0 0 300 220" className="h-auto w-full max-w-[280px]">
                      <polygon points="56.7,110 136.7,163.3 216.7,110 136.7,56.7" fill="none" stroke="#334155" strokeWidth="2" />
                      <line x1="56.7" y1="110" x2="216.7" y2="110" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 3" />
                      <line x1="136.7" y1="56.7" x2="136.7" y2="163.3" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 3" />
                      <circle cx="56.7" cy="110" r="2.8" fill="#0f172a" /><text x="38" y="106" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                      <circle cx="136.7" cy="163.3" r="2.8" fill="#0f172a" /><text x="130" y="182" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                      <circle cx="216.7" cy="110" r="2.8" fill="#0f172a" /><text x="224" y="106" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                      <circle cx="136.7" cy="56.7" r="2.8" fill="#0f172a" /><text x="130" y="42" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                      <circle cx="136.7" cy="110" r="2.8" fill="#e11d48" /><text x="142" y="118" fontSize="12" fontWeight="700" fill="#e11d48">O</text>
                      <circle cx="96.7" cy="136.7" r="2.6" fill="#4f46e5" /><text x="76" y="150" fontSize="12" fontWeight="700" fill="#4f46e5">I</text>
                      <circle cx="96.7" cy="83.3" r="2.6" fill="#059669" /><text x="76" y="78" fontSize="12" fontWeight="700" fill="#059669">J</text>
                    </svg>
                  }
                />
                <div className="rounded-xl border border-border p-4 text-sm">
                  <p className="mb-2 font-semibold text-foreground-muted">2) Symétrie centrale de centre O</p>
                  <p>
                    <Math tex="A" /> et <Math tex="C" /> sont symétriques par rapport au centre du losange, de même{" "}
                    <Math tex="B" /> et <Math tex="D" />. Donc :
                  </p>
                  <p className="mt-1">
                    <Math tex="S_O(A)=C" />&nbsp;&nbsp;<Math tex="S_O(B)=D" />&nbsp;&nbsp;
                    <Math tex="S_O(O)=O" /> (O est le centre, donc invariant)&nbsp;&nbsp;
                    <Math tex="S_O((AB))=(CD)" /> (image de la droite <Math tex="(AB)" />, qui passe par{" "}
                    <Math tex="S_O(A)=C" /> et <Math tex="S_O(B)=D" />).
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4 text-sm">
                  <p className="mb-2 font-semibold text-foreground-muted">
                    3) Symétrie axiale d&apos;axe <Math tex="(AC)" />
                  </p>
                  <p>
                    Dans un losange, la diagonale <Math tex="(AC)" /> est la médiatrice de <Math tex="[BD]" /> (et
                    contient <Math tex="A" />, <Math tex="C" /> et <Math tex="O" />). Donc :
                  </p>
                  <p className="mt-1">
                    <Math tex="S_{(AC)}(B)=D" />&nbsp;&nbsp;<Math tex="S_{(AC)}(A)=A" /> (A est sur l&apos;axe)&nbsp;&nbsp;
                    <Math tex="S_{(AC)}(O)=O" /> (O est sur l&apos;axe)&nbsp;&nbsp;
                    <Math tex="S_{(AC)}([AB])=[AD]" /> (segment joignant <Math tex="S(A)=A" /> et{" "}
                    <Math tex="S(B)=D" />).
                  </p>
                  <p className="mt-1">
                    <Math tex="I" /> est le symétrique de <Math tex="J" /> par rapport à <Math tex="(AC)" /> (même
                    abscisse <Math tex="-1{,}5" />, ordonnées opposées <Math tex="-1" /> et <Math tex="1" />), donc{" "}
                    <Math tex="S_{(AC)}(I)=J" />, et par suite <Math tex="S_{(AC)}((OI))=(OJ)" />.
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4 text-sm">
                  <p className="mb-2 font-semibold text-foreground-muted">4) Translations</p>
                  <p>
                    <Math tex="\overrightarrow{BC}=C-B=(3;2)" />, donc{" "}
                    <Math tex="t_{\overrightarrow{BC}}(A)=A+\overrightarrow{BC}=(-3+3;0+2)=(0;2)=D" />. D&apos;où{" "}
                    <Math tex="t_{\overrightarrow{BC}}(A)=D" />.
                  </p>
                  <p className="mt-1">
                    <Math tex="\overrightarrow{IJ}=J-I=(0;2)" />, donc{" "}
                    <Math tex="t_{\overrightarrow{IJ}}(B)=B+\overrightarrow{IJ}=(0;-2+2)=(0;0)=O" />. D&apos;où{" "}
                    <Math tex="t_{\overrightarrow{IJ}}(B)=O" />.
                  </p>
                  <p className="mt-1">
                    Par la même translation, <Math tex="O+\overrightarrow{IJ}=(0;2)=D" />, donc <Math tex="[OB]" />{" "}
                    a pour image le segment joignant <Math tex="t_{\overrightarrow{IJ}}(O)=D" /> et{" "}
                    <Math tex="t_{\overrightarrow{IJ}}(B)=O" /> : <Math tex="t_{\overrightarrow{IJ}}([OB])=[DO]" />.
                  </p>
                </div>
              </div>
            }
          />

          {/* ---------- Exercice 2 ---------- */}
          <ExerciseCard
            id="2"
            index={2}
            title="Écrire une relation vectorielle à l'aide d'une homothétie"
            items={
              <p className="text-sm text-foreground">
                Écrire l&apos;expression vectorielle suivante <Math tex="\overrightarrow{IC}=-\dfrac{2}{3}\overrightarrow{IB}" /> en
                utilisant une homothétie.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  La relation <Math tex="\overrightarrow{IC}=-\dfrac23\overrightarrow{IB}" /> est exactement de la
                  forme <Math tex="\overrightarrow{\Omega M'}=k\,\overrightarrow{\Omega M}" /> avec centre{" "}
                  <Math tex="\Omega=I" />, <Math tex="M=B" />, <Math tex="M'=C" /> et rapport{" "}
                  <Math tex="k=-\dfrac23" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : c&apos;est l&apos;homothétie <Math tex="h\!\left(I,-\dfrac23\right)" /> qui transforme{" "}
                  <Math tex="B" /> en <Math tex="C" />, c&apos;est-à-dire <Math tex="h(B)=C" />.
                </p>
              </div>
            }
          />

          {/* ---------- Exercice 3 ---------- */}
          <ExerciseCard
            id="3"
            index={3}
            title="Reconnaître une homothétie dans trois relations vectorielles"
            items={
              <div className="space-y-1 text-sm text-foreground">
                <p>Écrire les expressions vectorielles suivantes en utilisant une homothétie :</p>
                <p>
                  a) <Math tex="2\overrightarrow{IA}+3\overrightarrow{AB}=\vec 0" /> avec <Math tex="I" /> un point
                  donné.
                </p>
                <p>
                  b) <Math tex="2\overrightarrow{\Omega B}=-\overrightarrow{BA}" /> avec <Math tex="\Omega" /> un point
                  donné.
                </p>
                <p>
                  c) <Math tex="3\overrightarrow{IA}-5\overrightarrow{AB}=\vec 0" /> avec <Math tex="I" /> un point
                  donné.
                </p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm text-foreground">
                <div>
                  <p className="font-semibold">a)</p>
                  <p>
                    On remplace <Math tex="\overrightarrow{AB}=\overrightarrow{IB}-\overrightarrow{IA}" /> :{" "}
                    <Math tex="2\overrightarrow{IA}+3\left(\overrightarrow{IB}-\overrightarrow{IA}\right)=\vec 0" />, donc{" "}
                    <Math tex="-\overrightarrow{IA}+3\overrightarrow{IB}=\vec0" />, d&apos;où{" "}
                    <Math tex="\overrightarrow{IA}=3\overrightarrow{IB}" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    C&apos;est l&apos;homothétie <Math tex="h(I,3)" /> qui transforme <Math tex="B" /> en{" "}
                    <Math tex="A" /> : <Math tex="h(B)=A" />.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">b)</p>
                  <p>
                    On remplace <Math tex="\overrightarrow{BA}=\overrightarrow{\Omega A}-\overrightarrow{\Omega B}" /> :{" "}
                    <Math tex="2\overrightarrow{\Omega B}=-\overrightarrow{\Omega A}+\overrightarrow{\Omega B}" />, donc{" "}
                    <Math tex="\overrightarrow{\Omega B}=-\overrightarrow{\Omega A}" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    C&apos;est l&apos;homothétie de rapport <Math tex="k=-1" />, donc la{" "}
                    <strong>symétrie centrale</strong> de centre <Math tex="\Omega" /> : <Math tex="S_\Omega(A)=B" />{" "}
                    (soit <Math tex="h(\Omega,-1)(A)=B" />).
                  </p>
                </div>
                <div>
                  <p className="font-semibold">c)</p>
                  <p>
                    On remplace <Math tex="\overrightarrow{AB}=\overrightarrow{IB}-\overrightarrow{IA}" /> :{" "}
                    <Math tex="3\overrightarrow{IA}-5\left(\overrightarrow{IB}-\overrightarrow{IA}\right)=\vec0" />, donc{" "}
                    <Math tex="8\overrightarrow{IA}=5\overrightarrow{IB}" />, d&apos;où{" "}
                    <Math tex="\overrightarrow{IA}=\dfrac58\overrightarrow{IB}" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    C&apos;est l&apos;homothétie <Math tex="h\!\left(I,\dfrac58\right)" /> qui transforme{" "}
                    <Math tex="B" /> en <Math tex="A" /> : <Math tex="h(B)=A" />.
                  </p>
                </div>
              </div>
            }
          />

          {/* ---------- Exercice 4 ---------- */}
          <ExerciseCard
            id="4"
            index={4}
            title={
              <>
                Parallélogramme, translation et homothétie
                <span className="block text-xs font-semibold uppercase tracking-wide text-foreground-muted">
                  Exercice de synthèse
                </span>
              </>
            }
            items={
              <Figure
                text={
                  <>
                    <p>
                      <Math tex="ABCD" /> est un parallélogramme et <Math tex="I" />, <Math tex="J" /> deux points tels
                      que <Math tex="\overrightarrow{CI}=\dfrac23\overrightarrow{CB}" /> et{" "}
                      <Math tex="\overrightarrow{IJ}=\overrightarrow{DC}" />.
                    </p>
                    <ol className="list-decimal space-y-1 pl-5">
                      <li>Fais une figure.</li>
                      <li>
                        Montre que la droite <Math tex="(BJ)" /> est l&apos;image de la droite <Math tex="(AI)" /> par
                        la translation <Math tex="t_{\overrightarrow{AB}}" />, et déduis-en une propriété de{" "}
                        <Math tex="(BJ)" /> et <Math tex="(AI)" />.
                      </li>
                      <li>
                        Soit <Math tex="h" /> l&apos;homothétie de centre <Math tex="I" /> qui transforme{" "}
                        <Math tex="B" /> en <Math tex="C" />.
                        <br />
                        a) Montre que <Math tex="h((AB))=(CD)" />.
                        <br />
                        b) Montre que le rapport <Math tex="k" /> de l&apos;homothétie est <Math tex="k=-2" />.
                      </li>
                      <li>
                        Soit <Math tex="K" /> le point tel que <Math tex="\overrightarrow{KI}=2\overrightarrow{AB}" />.
                        <br />
                        a) Montre que <Math tex="h(J)=K" />.
                        <br />
                        b) Montre que <Math tex="AI=\dfrac12 CK" />.
                      </li>
                    </ol>
                  </>
                }
                svg={
                  <svg viewBox="0 0 340 200" className="h-auto w-full max-w-[300px]">
                    <polygon points="119.3,151.7 200.4,151.7 241,90.9 159.9,90.9" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="119.3" cy="151.7" r="2.8" fill="#0f172a" /><text x="105" y="168" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                    <circle cx="200.4" cy="151.7" r="2.8" fill="#0f172a" /><text x="206" y="168" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                    <circle cx="241" cy="90.9" r="2.8" fill="#0f172a" /><text x="248" y="88" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                    <circle cx="159.9" cy="90.9" r="2.8" fill="#0f172a" /><text x="145" y="80" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                  </svg>
                }
              />
            }
            correction={
              <div className="space-y-4 text-sm text-foreground">
                <Figure
                  text={
                    <>
                      <p className="font-semibold">1) Figure (repère choisi pour la correction)</p>
                      <p>
                        On place <Math tex="A(0;0)" />, <Math tex="B(4;0)" />, <Math tex="C(6;3)" />,{" "}
                        <Math tex="D(2;3)" /> (on vérifie <Math tex="\overrightarrow{AB}=\overrightarrow{DC}=(4;0)" />,
                        donc <Math tex="ABCD" /> est bien un parallélogramme). On calcule alors{" "}
                        <Math tex="I=\left(\dfrac{14}{3};1\right)" />, <Math tex="J=\left(\dfrac{26}{3};1\right)" /> et{" "}
                        <Math tex="K=\left(-\dfrac{10}{3};1\right)" />.
                      </p>
                    </>
                  }
                  svg={
                    <svg viewBox="0 0 340 200" className="h-auto w-full max-w-[320px]">
                      <polygon points="119.3,151.7 200.4,151.7 241,90.9 159.9,90.9" fill="none" stroke="#334155" strokeWidth="2" />
                      <line x1="119.3" y1="151.7" x2="214" y2="131.4" stroke="#4f46e5" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="200.4" y1="151.7" x2="295.1" y2="131.4" stroke="#059669" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="51.7" y1="131.4" x2="295.1" y2="131.4" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="119.3" cy="151.7" r="2.8" fill="#0f172a" /><text x="105" y="168" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
                      <circle cx="200.4" cy="151.7" r="2.8" fill="#0f172a" /><text x="206" y="168" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
                      <circle cx="241" cy="90.9" r="2.8" fill="#0f172a" /><text x="248" y="88" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
                      <circle cx="159.9" cy="90.9" r="2.8" fill="#0f172a" /><text x="145" y="80" fontSize="13" fontWeight="700" fill="#0f172a">D</text>
                      <circle cx="214" cy="131.4" r="2.8" fill="#e11d48" /><text x="215" y="122" fontSize="12" fontWeight="700" fill="#e11d48">I</text>
                      <circle cx="295.1" cy="131.4" r="2.8" fill="#059669" /><text x="298" y="127" fontSize="12" fontWeight="700" fill="#059669">J</text>
                      <circle cx="51.7" cy="131.4" r="2.8" fill="#f97316" /><text x="34" y="127" fontSize="12" fontWeight="700" fill="#f97316">K</text>
                    </svg>
                  }
                />
                <div className="rounded-xl border border-border p-4">
                  <p className="mb-1 font-semibold text-foreground-muted">
                    2) (BJ) est l&apos;image de (AI) par <Math tex="t_{\overrightarrow{AB}}" />
                  </p>
                  <p>
                    Une translation envoie toujours <Math tex="A" /> sur <Math tex="B" /> : <Math tex="t_{\overrightarrow{AB}}(A)=B" />.
                  </p>
                  <p className="mt-1">
                    Comme <Math tex="ABCD" /> est un parallélogramme, <Math tex="\overrightarrow{DC}=\overrightarrow{AB}" />, et
                    par hypothèse <Math tex="\overrightarrow{IJ}=\overrightarrow{DC}" />, donc{" "}
                    <Math tex="\overrightarrow{IJ}=\overrightarrow{AB}" />, c&apos;est-à-dire{" "}
                    <Math tex="t_{\overrightarrow{AB}}(I)=J" />.
                  </p>
                  <p className="mt-1">
                    La translation <Math tex="t_{\overrightarrow{AB}}" /> transforme donc <Math tex="A" /> en{" "}
                    <Math tex="B" /> et <Math tex="I" /> en <Math tex="J" /> : elle transforme la droite{" "}
                    <Math tex="(AI)" /> en la droite <Math tex="(BJ)" />.
                  </p>
                  <p className="mt-1 font-semibold text-green-700">
                    Une translation conservant les directions (l&apos;image d&apos;une droite lui est parallèle), on en
                    déduit <Math tex="(AI)\parallel(BJ)" />.
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="mb-1 font-semibold text-foreground-muted">3a) h((AB)) = (CD)</p>
                  <p>
                    Par hypothèse <Math tex="h(B)=C" />. Comme <Math tex="h" /> est une homothétie, l&apos;image de la
                    droite <Math tex="(AB)" /> par <Math tex="h" /> est une droite <strong>parallèle</strong> à{" "}
                    <Math tex="(AB)" /> passant par <Math tex="h(B)=C" />.
                  </p>
                  <p className="mt-1">
                    Or <Math tex="ABCD" /> est un parallélogramme, donc <Math tex="(AB)\parallel(DC)" />. La droite
                    cherchée est donc parallèle à <Math tex="(CD)" /> et passe par <Math tex="C\in(CD)" /> : c&apos;est
                    donc la droite <Math tex="(CD)" /> elle-même (deux droites parallèles ayant un point commun sont
                    confondues).
                  </p>
                  <p className="mt-1 font-semibold text-green-700">
                    Conclusion : <Math tex="h((AB))=(CD)" />.
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="mb-1 font-semibold text-foreground-muted">3b) k = -2</p>
                  <p>
                    De <Math tex="\overrightarrow{CI}=\dfrac23\overrightarrow{CB}" />, on tire{" "}
                    <Math tex="\overrightarrow{IC}=-\dfrac23\overrightarrow{CB}" />. Puis :
                  </p>
                  <FormulaBlock tex="\overrightarrow{IB}=\overrightarrow{IC}+\overrightarrow{CB}=-\tfrac23\overrightarrow{CB}+\overrightarrow{CB}=\tfrac13\overrightarrow{CB}" />
                  <p className="mt-1">
                    Donc <Math tex="\overrightarrow{CB}=3\overrightarrow{IB}" />, d&apos;où{" "}
                    <Math tex="\overrightarrow{IC}=-\tfrac23\overrightarrow{CB}=-\tfrac23\times3\overrightarrow{IB}=-2\overrightarrow{IB}" />.
                  </p>
                  <p className="mt-1 font-semibold text-green-700">
                    Comme <Math tex="h(B)=C" /> signifie <Math tex="\overrightarrow{IC}=k\,\overrightarrow{IB}" />, on
                    identifie <Math tex="k=-2" />.
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="mb-1 font-semibold text-foreground-muted">4a) h(J) = K</p>
                  <p>
                    Par hypothèse <Math tex="\overrightarrow{KI}=2\overrightarrow{AB}" />, donc{" "}
                    <Math tex="\overrightarrow{IK}=-2\overrightarrow{AB}" />.
                  </p>
                  <p className="mt-1">
                    Or <Math tex="\overrightarrow{IJ}=\overrightarrow{DC}=\overrightarrow{AB}" /> (parallélogramme),
                    donc :
                  </p>
                  <FormulaBlock tex="\overrightarrow{IK}=-2\overrightarrow{AB}=-2\overrightarrow{IJ}" />
                  <p className="mt-1 font-semibold text-green-700">
                    C&apos;est exactement la relation caractéristique de l&apos;homothétie{" "}
                    <Math tex="h(I,-2)" /> appliquée à <Math tex="J" /> : donc <Math tex="h(J)=K" />.
                  </p>
                </div>
                <div className="rounded-xl border border-border p-4">
                  <p className="mb-1 font-semibold text-foreground-muted">
                    4b) <Math tex="AI=\dfrac12 CK" />
                  </p>
                  <p>
                    L&apos;homothétie <Math tex="h(I,-2)" /> transforme <Math tex="B" /> en <Math tex="C" /> et{" "}
                    <Math tex="J" /> en <Math tex="K" /> ; une homothétie de rapport <Math tex="k" /> multiplie les
                    distances par <Math tex="|k|" />, donc :
                  </p>
                  <FormulaBlock tex="CK = |-2|\times BJ = 2\,BJ \quad\Longrightarrow\quad BJ=\tfrac12 CK" />
                  <p className="mt-1">
                    Or la translation <Math tex="t_{\overrightarrow{AB}}" /> (question 2) transforme{" "}
                    <Math tex="A" /> en <Math tex="B" /> et <Math tex="I" /> en <Math tex="J" />, et une translation
                    conserve les distances, donc <Math tex="AI=BJ" />.
                  </p>
                  <p className="mt-1 font-semibold text-green-700">
                    En combinant : <Math tex="AI=BJ=\dfrac12 CK" />.
                  </p>
                  <p className="mt-2 text-xs text-foreground-muted">
                    Vérification numérique (repère de la question 1) :{" "}
                    <Math tex="AI=BJ=\dfrac{\sqrt{205}}{3}" /> et <Math tex="CK=\dfrac{2\sqrt{205}}{3}" />, et l&apos;on
                    a bien <Math tex="AI=\dfrac12 CK" />.
                  </p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
