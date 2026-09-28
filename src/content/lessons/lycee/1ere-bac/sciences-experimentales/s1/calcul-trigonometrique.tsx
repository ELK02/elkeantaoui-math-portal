import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Calcul trigonométrique · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet de calcul trigonométrique pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : formules d'addition et de duplication, transformations sommes ↔ produits, expression a cos x + b sin x, la substitution t = tan(x/2), et les équations trigonométriques, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 1",
  heroTitle: "Calcul trigonométrique",
  heroSubtitle:
    "Toutes les formules de transformation trigonométrique réunies, et la méthode complète pour résoudre n'importe quelle équation trigonométrique du programme.",
  footerNote: "Calcul trigonométrique · Mathématiques, 1ère année Baccalauréat, semestre 1.",
  sections: [
    { id: "cours-addition", label: "Formules d'addition" },
    { id: "cours-sommes-produits", label: "Sommes ↔ produits" },
    { id: "cours-equations", label: "Équations" },
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

const BOX_STYLES = {
  def: { wrap: "border-l-4 border-orange-400 bg-orange-100/50", title: "text-orange-700" },
  prop: { wrap: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5", title: "text-brand-700" },
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

export default function Lesson() {
  return (
    <LessonShell meta={meta}>
      <LessonHero
        kicker={meta.kicker}
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        stats={[
          { value: "12+", label: "formules à connaître" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-addition"
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
          <div className="relative flex select-none items-center font-serif text-white italic">
            <Math tex="\cos(a\!+\!b)" />
          </div>
        }
      />

      {/* ===================== I. FORMULES D'ADDITION ===================== */}
      <LessonSection
        id="cours-addition"
        kicker="01 · Les formules fondatrices"
        title="Formules d'addition, de duplication, de tan(a+b)"
        tone="light"
        description="Ces formules se démontrent avec le produit scalaire sur le cercle trigonométrique — et elles servent de base à absolument tout le reste du chapitre."
      >
        <CourseBlock numeral="I" title="cos(a±b) et sin(a±b)">
          <Callout variant="success" title="Les quatre formules d'addition">
            <div className="grid gap-2 sm:grid-cols-2">
              <p>
                <Math tex="\cos(a+b)=\cos a\cos b-\sin a\sin b" />
              </p>
              <p>
                <Math tex="\cos(a-b)=\cos a\cos b+\sin a\sin b" />
              </p>
              <p>
                <Math tex="\sin(a+b)=\sin a\cos b+\cos a\sin b" />
              </p>
              <p>
                <Math tex="\sin(a-b)=\sin a\cos b-\cos a\sin b" />
              </p>
            </div>
          </Callout>
          <Box title="Application — calculer cos(7π/12)" tone="prop">
            <MathBlock tex="\cos\dfrac{7\pi}{12}=\cos\left(\dfrac{\pi}{4}+\dfrac{\pi}{3}\right)=\cos\dfrac{\pi}{4}\cos\dfrac{\pi}{3}-\sin\dfrac{\pi}{4}\sin\dfrac{\pi}{3}=\dfrac{\sqrt2-\sqrt6}{4}" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Formules de duplication et de linéarisation">
          <Callout variant="success" title="Le cas a = b">
            <div className="space-y-1.5">
              <p>
                <Math tex="\sin2a=2\sin a\cos a" />
              </p>
              <p>
                <Math tex="\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a" />
              </p>
              <p>
                <Math tex="\sin^2a=\dfrac{1-\cos2a}{2}" /> et <Math tex="\cos^2a=\dfrac{1+\cos2a}{2}" />
              </p>
            </div>
          </Callout>
          <Box title="Application — calculer cos(π/8)" tone="prop">
            <p>
              On applique <Math tex="\cos2a=2\cos^2a-1" /> à <Math tex="a=\dfrac\pi8" /> :
            </p>
            <MathBlock tex="\cos\dfrac{\pi}{4}=2\cos^2\dfrac{\pi}{8}-1 \Rightarrow \cos\dfrac{\pi}{8}=\sqrt{\dfrac{1+\cos\frac\pi4}{2}}=\dfrac{\sqrt{2+\sqrt2}}{2}" />
            <p className="text-xs">
              (le signe <Math tex="+" /> est choisi car <Math tex="0<\dfrac\pi8<\dfrac\pi2" />, donc{" "}
              <Math tex="\cos\dfrac\pi8>0" />.)
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="Formule de tan(a+b)">
          <Callout variant="success" title="Propriété">
            <p>
              Pour <Math tex="a,b,a+b,a-b\neq\dfrac\pi2+k\pi" /> :
            </p>
            <MathBlock tex="\tan(a+b)=\dfrac{\tan a+\tan b}{1-\tan a\tan b},\qquad \tan(a-b)=\dfrac{\tan a-\tan b}{1+\tan a\tan b},\qquad \tan2a=\dfrac{2\tan a}{1-\tan^2a}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. SOMMES ↔ PRODUITS ===================== */}
      <LessonSection
        id="cours-sommes-produits"
        kicker="02 · Transformer une somme en produit (et vice versa)"
        title="Transformations sommes ↔ produits, et a cos x + b sin x"
        tone="muted"
        description="Ces formules découlent directement des formules d'addition — elles sont indispensables pour résoudre certaines équations et identités."
      >
        <CourseBlock numeral="IV" title="Sommes ↔ produits">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-center text-sm">
              <thead>
                <tr>
                  <th className="border border-border bg-surface-muted p-2 font-semibold">Somme → produit</th>
                  <th className="border border-border bg-surface-muted p-2 font-semibold">Produit → somme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">
                    <Math tex="\cos a+\cos b=2\cos\frac{a+b}2\cos\frac{a-b}2" />
                  </td>
                  <td className="border border-border p-2">
                    <Math tex="\cos a\cos b=\frac12[\cos(a+b)+\cos(a-b)]" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <Math tex="\cos a-\cos b=-2\sin\frac{a+b}2\sin\frac{a-b}2" />
                  </td>
                  <td className="border border-border p-2">
                    <Math tex="\sin a\sin b=-\frac12[\cos(a+b)-\cos(a-b)]" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <Math tex="\sin a+\sin b=2\sin\frac{a+b}2\cos\frac{a-b}2" />
                  </td>
                  <td className="border border-border p-2">
                    <Math tex="\sin a\cos b=\frac12[\sin(a+b)+\sin(a-b)]" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <Math tex="\sin a-\sin b=2\cos\frac{a+b}2\sin\frac{a-b}2" />
                  </td>
                  <td className="border border-border p-2" />
                </tr>
              </tbody>
            </table>
          </div>
          <Box title="Application" tone="prop">
            <MathBlock tex="\cos\dfrac{5\pi}{12}+\cos\dfrac{\pi}{12}=2\cos\dfrac{\pi}{4}\cos\dfrac{\pi}{6}=2\times\dfrac{\sqrt2}{2}\times\dfrac{\sqrt3}{2}=\dfrac{\sqrt6}{2}" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Transformation de a cos x + b sin x">
          <Callout variant="success" title="Propriété">
            <p>
              Pour <Math tex="a,b\in\mathbb R^*" /> :
            </p>
            <MathBlock tex="a\cos x+b\sin x=\sqrt{a^2+b^2}\,\sin(x+\alpha)\quad\left(\sin\alpha=\dfrac{a}{\sqrt{a^2+b^2}},\ \cos\alpha=\dfrac{b}{\sqrt{a^2+b^2}}\right)" />
            <MathBlock tex="a\cos x+b\sin x=\sqrt{a^2+b^2}\,\cos(x-\alpha)\quad\left(\cos\alpha=\dfrac{a}{\sqrt{a^2+b^2}},\ \sin\alpha=\dfrac{b}{\sqrt{a^2+b^2}}\right)" />
          </Callout>
          <Box title="Application" tone="prop">
            <MathBlock tex="\sqrt3\sin2x+\cos2x=2\left(\dfrac{\sqrt3}{2}\sin2x+\dfrac12\cos2x\right)=2\left(\cos\dfrac\pi6\sin2x+\sin\dfrac\pi6\cos2x\right)=2\sin\!\left(2x+\dfrac\pi6\right)" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. ÉQUATIONS TRIGONOMÉTRIQUES ===================== */}
      <LessonSection
        id="cours-equations"
        kicker="03 · Le point de tout ce chapitre"
        title="Résoudre des équations trigonométriques"
        tone="light"
        description="Quatre formes classiques, une méthode systématique à chaque fois."
      >
        <CourseBlock numeral="VI" title="cos x = a, sin x = a, tan x = a">
          <Callout variant="success" title="Méthode et solutions">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="a\notin[-1,1]" />, les équations <Math tex="\cos x=a" /> et{" "}
                <Math tex="\sin x=a" /> n&apos;ont <strong>pas de solution</strong>.
              </li>
              <li>
                <Math tex="\cos x=a=\cos\alpha \iff x=\alpha+2k\pi" /> ou{" "}
                <Math tex="x=-\alpha+2k\pi" /> (<Math tex="k\in\mathbb Z" />).
              </li>
              <li>
                <Math tex="\sin x=a=\sin\alpha \iff x=\alpha+2k\pi" /> ou{" "}
                <Math tex="x=\pi-\alpha+2k\pi" />.
              </li>
              <li>
                <Math tex="\tan x=a=\tan\alpha \iff x=\alpha+k\pi" />.
              </li>
            </ul>
          </Callout>
          <Box title="Application — cos x = 1/2" tone="prop">
            <MathBlock tex="\cos x=\dfrac12=\cos\dfrac\pi3 \iff x=\dfrac\pi3+2k\pi\ \text{ou}\ x=-\dfrac\pi3+2k\pi" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VII" title="a cos x + b sin x = c">
          <Callout variant="warning" title="Méthode en trois étapes">
            <p>
              <strong>1.</strong> Transformer <Math tex="a\cos x+b\sin x" /> en{" "}
              <Math tex="\sqrt{a^2+b^2}\cos(x-\alpha)" /> (ou{" "}
              <Math tex="\sqrt{a^2+b^2}\sin(x+\alpha)" />), ce qui ramène l&apos;équation à{" "}
              <Math tex="\cos(x-\alpha)=\dfrac{c}{\sqrt{a^2+b^2}}" />.
            </p>
            <p className="mt-1">
              <strong>2.</strong> Si <Math tex="\dfrac{c}{\sqrt{a^2+b^2}}\notin[-1,1]" />, pas de solution.
              Sinon on résout normalement.
            </p>
            <p className="mt-1">
              <strong>3.</strong> On revient à <Math tex="x" /> en ajoutant <Math tex="\alpha" />.
            </p>
          </Callout>
          <Box title="Application — cos3x + sin3x = 1" tone="prop">
            <MathBlock tex="\begin{gathered} \cos3x+\sin3x=1 \iff \sqrt2\cos\!\left(3x-\dfrac\pi4\right)=1 \\ \iff \cos\!\left(3x-\dfrac\pi4\right)=\dfrac{\sqrt2}{2}=\cos\dfrac\pi4 \end{gathered}" />
            <p>
              d&apos;où <Math tex="3x-\dfrac\pi4=\pm\dfrac\pi4+2k\pi" />, soit{" "}
              <Math tex="x=\dfrac\pi6-\dfrac{2k\pi}{3}" /> ou <Math tex="x=-\dfrac{2k\pi}{3}" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="Exercices · Calcul trigonométrique"
        tone="muted"
        description="6 exercices corrigés, calqués sur les techniques du cours."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre calcul trigonométrique est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · À partir des valeurs de π/12"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Sachant que <Math tex="\cos\dfrac\pi{12}=\dfrac{\sqrt6+\sqrt2}{4}" /> et{" "}
                <Math tex="\sin\dfrac\pi{12}=\dfrac{\sqrt6-\sqrt2}{4}" />, calculer{" "}
                <Math tex="\cos\dfrac{11\pi}{12}" /> et <Math tex="\sin\dfrac{11\pi}{12}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\dfrac{11\pi}{12}=\pi-\dfrac{\pi}{12}" />, donc :
                </p>
                <MathBlock tex="\cos\dfrac{11\pi}{12}=\cos\left(\pi-\dfrac\pi{12}\right)=-\cos\dfrac\pi{12}=-\dfrac{\sqrt6+\sqrt2}{4}" />
                <MathBlock tex="\sin\dfrac{11\pi}{12}=\sin\left(\pi-\dfrac\pi{12}\right)=\sin\dfrac\pi{12}=\dfrac{\sqrt6-\sqrt2}{4}" />
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Produit → somme"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\cos\dfrac{7\pi}{12}\times\cos\dfrac{5\pi}{12}" /> et{" "}
                <Math tex="\sin\dfrac{7\pi}{12}\times\cos\dfrac{5\pi}{12}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="\cos a\cos b=\frac12[\cos(a+b)+\cos(a-b)]" />, <Math tex="a=\dfrac{7\pi}{12}" />
                  , <Math tex="b=\dfrac{5\pi}{12}" /> (<Math tex="a+b=\pi" />, <Math tex="a-b=\dfrac\pi6" />) :
                </p>
                <MathBlock tex="\cos\dfrac{7\pi}{12}\cos\dfrac{5\pi}{12}=\dfrac12\left(\cos\pi+\cos\dfrac\pi6\right)=\dfrac12\left(-1+\dfrac{\sqrt3}2\right)=\dfrac{\sqrt3-2}{4}" />
                <p>
                  Avec <Math tex="\sin a\cos b=\frac12[\sin(a+b)+\sin(a-b)]" /> :
                </p>
                <MathBlock tex="\sin\dfrac{7\pi}{12}\cos\dfrac{5\pi}{12}=\dfrac12\left(\sin\pi+\sin\dfrac\pi6\right)=\dfrac12\left(0+\dfrac12\right)=\dfrac14" />
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Une tangente remarquable"
            itemsLabel="1 identité"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que <Math tex="\tan\dfrac\pi{12}=2-\sqrt3" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\dfrac\pi{12}=\dfrac\pi3-\dfrac\pi4" />, donc avec la formule de{" "}
                  <Math tex="\tan(a-b)" /> :
                </p>
                <MathBlock tex="\tan\dfrac\pi{12}=\dfrac{\tan\frac\pi3-\tan\frac\pi4}{1+\tan\frac\pi3\tan\frac\pi4}=\dfrac{\sqrt3-1}{1+\sqrt3}" />
                <p>En multipliant numérateur et dénominateur par <Math tex="\sqrt3-1" /> :</p>
                <MathBlock tex="\tan\dfrac\pi{12}=\dfrac{(\sqrt3-1)^2}{(\sqrt3+1)(\sqrt3-1)}=\dfrac{4-2\sqrt3}{2}=2-\sqrt3" />
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Résoudre a cos x + b sin x = c"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="[0,2\pi]" /> l&apos;équation{" "}
                <Math tex="\sqrt3\cos x+\sin x=\sqrt3" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\sqrt{a^2+b^2}=\sqrt{3+1}=2" />, donc :
                </p>
                <MathBlock tex="\begin{gathered} \sqrt3\cos x+\sin x=\sqrt3 \iff 2\left(\dfrac{\sqrt3}2\cos x+\dfrac12\sin x\right)=\sqrt3 \\ \iff 2\cos\!\left(x-\dfrac\pi6\right)=\sqrt3 \iff \cos\!\left(x-\dfrac\pi6\right)=\dfrac{\sqrt3}2=\cos\dfrac\pi6 \end{gathered}" />
                <p>
                  D&apos;où <Math tex="x-\dfrac\pi6=\pm\dfrac\pi6+2k\pi" />, soit{" "}
                  <Math tex="x=\dfrac\pi3+2k\pi" /> ou <Math tex="x=2k\pi" />.
                </p>
                <p className="font-semibold text-green-700">
                  Dans <Math tex="[0,2\pi]" /> : <Math tex="S=\left\{0,\ \dfrac\pi3,\ 2\pi\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Équation du type cos(u) = cos(v)"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation{" "}
                <Math tex="\cos(2x)=\cos\!\left(x-\dfrac\pi3\right)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\cos(2x)=\cos\!\left(x-\dfrac\pi3\right) \iff 2x=x-\dfrac\pi3+2k\pi\ \text{ou}\ 2x=-\left(x-\dfrac\pi3\right)+2k\pi" />
                <p>
                  <strong>Premier cas :</strong> <Math tex="2x=x-\dfrac\pi3+2k\pi \iff x=-\dfrac\pi3+2k\pi" />.
                </p>
                <p>
                  <strong>Second cas :</strong>{" "}
                  <Math tex="2x=-x+\dfrac\pi3+2k\pi \iff 3x=\dfrac\pi3+2k\pi \iff x=\dfrac\pi9+\dfrac{2k\pi}{3}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\left\{-\dfrac\pi3+2k\pi\ ;\ \dfrac\pi9+\dfrac{2k\pi}{3}\ /\ k\in\mathbb Z\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · D'une équation du second degré à tan(π/8)"
            itemsLabel="1 étude"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Résoudre dans <Math tex="\mathbb R" /> l&apos;équation{" "}
                  <Math tex="x^2+2x-1=0" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> En déduire <Math tex="\tan\dfrac\pi8" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> <Math tex="\Delta'=1+1=2" />, donc{" "}
                  <Math tex="x=-1\pm\sqrt2" /> : <Math tex="S=\{-1+\sqrt2\,;\,-1-\sqrt2\}" />.
                </p>
                <p>
                  <strong className="text-green-700">b.</strong> On sait que{" "}
                  <Math tex="\tan2a=\dfrac{2\tan a}{1-\tan^2a}" />. En posant <Math tex="t=\tan\dfrac\pi8" /> et{" "}
                  <Math tex="a=\dfrac\pi8" /> (donc <Math tex="2a=\dfrac\pi4" />, <Math tex="\tan\dfrac\pi4=1" />) :
                </p>
                <MathBlock tex="1=\dfrac{2t}{1-t^2} \iff t^2+2t-1=0" />
                <p>
                  On retrouve exactement l&apos;équation de la question a. Comme{" "}
                  <Math tex="0<\dfrac\pi8<\dfrac\pi2" />, <Math tex="\tan\dfrac\pi8>0" /> : on rejette la
                  solution négative.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\tan\dfrac\pi8=-1+\sqrt2" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
