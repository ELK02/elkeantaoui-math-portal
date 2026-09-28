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
  title: "Calcul trigonométrique · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet de calcul trigonométrique pour la 1ère année Baccalauréat Sciences Mathématiques : formules d'addition et de duplication, transformations somme-produit et produit-somme, transformation de a cos x + b sin x, substitution t = tan(x/2), équations trigonométriques, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "Calcul trigonométrique",
  heroSubtitle:
    "Les formules qui transforment n'importe quelle expression trigonométrique — et les méthodes pour résoudre toutes les équations qui en découlent.",
  footerNote: "Calcul trigonométrique · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
  sections: [
    { id: "cours-addition", label: "Addition, duplication" },
    { id: "cours-somme-produit", label: "Somme ↔ produit" },
    { id: "cours-acosx-bsinx", label: "a cos x + b sin x" },
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
          { value: "4", label: "familles de formules" },
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
            <Math tex="\cos(a+b)" />
          </div>
        }
      />

      {/* ===================== I. ADDITION, DUPLICATION ===================== */}
      <LessonSection
        id="cours-addition"
        kicker="01 · Les formules fondatrices"
        title="Formules d'addition et de duplication"
        tone="light"
        description="Quatre formules d'addition (obtenues via le produit scalaire sur le cercle trigonométrique) engendrent absolument tout le reste du chapitre."
      >
        <CourseBlock numeral="I" title="Formules d'addition">
          <Callout variant="success" title="À connaître par cœur">
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
            <p className="mt-2">
              <Math tex="\tan(a+b)=\dfrac{\tan a+\tan b}{1-\tan a\tan b}" />, <Math tex="\tan(a-b)=\dfrac{\tan a-\tan b}{1+\tan a\tan b}" />
            </p>
          </Callout>
          <Box title="Exemple" tone="def">
            <p>
              <Math tex="\cos\dfrac{7\pi}{12}=\cos\!\left(\dfrac\pi4+\dfrac\pi3\right)=\cos\dfrac\pi4\cos\dfrac\pi3-\sin\dfrac\pi4\sin\dfrac\pi3=\dfrac{\sqrt2-\sqrt6}4" />
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Formules de duplication (a = b)">
          <Box title="Propriétés" tone="prop">
            <MathBlock tex="\sin2a=2\sin a\cos a" />
            <MathBlock tex="\cos2a=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a" />
            <MathBlock tex="\tan2a=\dfrac{2\tan a}{1-\tan^2a}" />
          </Box>
          <Callout variant="warning" title="Les formules de linéarisation">
            <MathBlock tex="\cos^2a=\dfrac{1+\cos2a}2,\qquad \sin^2a=\dfrac{1-\cos2a}2" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. SOMME ↔ PRODUIT ===================== */}
      <LessonSection
        id="cours-somme-produit"
        kicker="02 · Deux directions de transformation"
        title="Transformations somme ↔ produit"
        tone="muted"
        description="Les formules d'addition, combinées deux à deux, transforment un produit en somme — et réciproquement, une somme en produit."
      >
        <CourseBlock numeral="III" title="Les deux tableaux à connaître">
          <div className="grid gap-4 sm:grid-cols-2">
            <Box title="Somme → produit" tone="def">
              <div className="space-y-1.5">
                <p>
                  <Math tex="\cos a+\cos b=2\cos\dfrac{a+b}2\cos\dfrac{a-b}2" />
                </p>
                <p>
                  <Math tex="\cos a-\cos b=-2\sin\dfrac{a+b}2\sin\dfrac{a-b}2" />
                </p>
                <p>
                  <Math tex="\sin a+\sin b=2\sin\dfrac{a+b}2\cos\dfrac{a-b}2" />
                </p>
                <p>
                  <Math tex="\sin a-\sin b=2\cos\dfrac{a+b}2\sin\dfrac{a-b}2" />
                </p>
              </div>
            </Box>
            <Box title="Produit → somme" tone="def">
              <div className="space-y-1.5">
                <p>
                  <Math tex="\cos a\cos b=\tfrac12[\cos(a+b)+\cos(a-b)]" />
                </p>
                <p>
                  <Math tex="\sin a\sin b=-\tfrac12[\cos(a+b)-\cos(a-b)]" />
                </p>
                <p>
                  <Math tex="\sin a\cos b=\tfrac12[\sin(a+b)+\sin(a-b)]" />
                </p>
              </div>
            </Box>
          </div>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. acosx+bsinx ===================== */}
      <LessonSection
        id="cours-acosx-bsinx"
        kicker="03 · Deux techniques puissantes"
        title="Transformation de a cos x + b sin x, substitution t = tan(x/2)"
        tone="light"
        description="Deux outils qui ramènent une expression compliquée à une seule fonction trigonométrique — indispensables pour les équations qui mêlent sinus et cosinus."
      >
        <CourseBlock numeral="IV" title="Transformation de a cos x + b sin x">
          <Callout variant="success" title="Propriété">
            <p>
              Pour <Math tex="a,b\in\mathbb R^*" /> :
            </p>
            <MathBlock tex="a\cos x+b\sin x=\sqrt{a^2+b^2}\,\sin(x+\varphi),\quad \sin\varphi=\dfrac{a}{\sqrt{a^2+b^2}},\ \cos\varphi=\dfrac{b}{\sqrt{a^2+b^2}}" />
            <p>ou de manière équivalente :</p>
            <MathBlock tex="a\cos x+b\sin x=\sqrt{a^2+b^2}\,\cos(x-\alpha),\quad \cos\alpha=\dfrac{a}{\sqrt{a^2+b^2}},\ \sin\alpha=\dfrac{b}{\sqrt{a^2+b^2}}" />
          </Callout>
          <Box title="Résoudre a cos x + b sin x = c" tone="prop">
            <p>
              On écrit l&apos;équation sous la forme <Math tex="\sqrt{a^2+b^2}\cos(x-\alpha)=c" />. Si{" "}
              <Math tex="\dfrac{c}{\sqrt{a^2+b^2}}\notin[-1,1]" />, pas de solution. Sinon, on résout{" "}
              <Math tex="\cos(x-\alpha)=\cos\beta" /> comme une équation classique.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="La substitution t = tan(x/2)">
          <Box title="Formules" tone="def">
            <p>
              Pour <Math tex="x\neq\pi+2k\pi" />, en posant <Math tex="t=\tan\dfrac x2" /> :
            </p>
            <MathBlock tex="\cos x=\dfrac{1-t^2}{1+t^2},\qquad \sin x=\dfrac{2t}{1+t^2},\qquad \tan x=\dfrac{2t}{1-t^2}" />
          </Box>
          <Callout variant="warning" title="Quand l'utiliser">
            Cette substitution ramène toute équation en <Math tex="\sin x,\cos x" /> à une équation{" "}
            <strong>polynomiale en <Math tex="t" /></strong> — particulièrement utile pour calculer{" "}
            <Math tex="\tan" /> d&apos;un angle non standard.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. ÉQUATIONS ===================== */}
      <LessonSection
        id="cours-equations"
        kicker="04 · Rappel indispensable"
        title="Équations trigonométriques de base"
        tone="muted"
        description="Trois formes à résoudre automatiquement — elles reviennent dans presque tous les exercices du chapitre."
      >
        <CourseBlock numeral="VI" title="cos x = a, sin x = a, tan x = a">
          <Box title="Propriétés" tone="def">
            <p>
              Pour <Math tex="a\in[-1,1]" />, on cherche <Math tex="\alpha" /> tel que <Math tex="a=\cos\alpha" />{" "}
              (resp. <Math tex="\sin\alpha" />) :
            </p>
            <MathBlock tex="\cos x=a\iff\cos x=\cos\alpha\iff x=\alpha+2k\pi\ \text{ou}\ x=-\alpha+2k\pi" />
            <MathBlock tex="\sin x=a\iff\sin x=\sin\alpha\iff x=\alpha+2k\pi\ \text{ou}\ x=\pi-\alpha+2k\pi" />
            <MathBlock tex="\tan x=a\iff\tan x=\tan\alpha\iff x=\alpha+k\pi" />
            <p>
              (Si <Math tex="a\notin[-1,1]" />, les équations <Math tex="\cos x=a" /> et{" "}
              <Math tex="\sin x=a" /> n&apos;ont pas de solution.)
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Calcul trigonométrique"
        tone="light"
        description="6 exercices corrigés couvrant addition, la substitution t=tan(x/2), équations, transformation a cos x + b sin x, et somme-produit."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre calcul trigonométrique est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Formule d'addition"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\sin\dfrac{5\pi}{12}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On écrit <Math tex="\dfrac{5\pi}{12}=\dfrac\pi6+\dfrac\pi4" /> :
                </p>
                <MathBlock tex="\sin\dfrac{5\pi}{12}=\sin\dfrac\pi6\cos\dfrac\pi4+\cos\dfrac\pi6\sin\dfrac\pi4=\dfrac12\times\dfrac{\sqrt2}2+\dfrac{\sqrt3}2\times\dfrac{\sqrt2}2" />
                <p className="font-semibold text-green-700">
                  <Math tex="\sin\dfrac{5\pi}{12}=\dfrac{\sqrt2+\sqrt6}4" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Calcul par la substitution t = tan(x/2)"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\tan\dfrac\pi{12}" /> en utilisant <Math tex="t=\tan\dfrac\pi{12}" /> et{" "}
                la formule de <Math tex="\sin\dfrac\pi6" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Avec <Math tex="t=\tan\dfrac\pi{12}" />, <Math tex="\sin\dfrac\pi6=\dfrac{2t}{1+t^2}" />,
                  donc :
                </p>
                <MathBlock tex="\dfrac12=\dfrac{2t}{1+t^2}\iff1+t^2=4t\iff t^2-4t+1=0" />
                <p>
                  <Math tex="\Delta'=4-1=3" />, donc <Math tex="t=2-\sqrt3" /> ou <Math tex="t=2+\sqrt3" />.
                </p>
                <p>
                  Comme <Math tex="0<\dfrac\pi{12}<\dfrac\pi4" />, on a <Math tex="0<\tan\dfrac\pi{12}<1" />
                  ; seule <Math tex="t=2-\sqrt3\approx0{,}27" /> convient.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\tan\dfrac\pi{12}=2-\sqrt3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Équation trigonométrique à argument linéaire"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="[0,2\pi[" /> l&apos;équation{" "}
                <Math tex="\cos\!\left(2x-\dfrac\pi3\right)=\dfrac12" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\cos\!\left(2x-\dfrac\pi3\right)=\dfrac12=\cos\dfrac\pi3\iff2x-\dfrac\pi3=\pm\dfrac\pi3+2k\pi" />
                <p>
                  Soit <Math tex="2x=\dfrac{2\pi}3+2k\pi\ \text{ou}\ 2x=2k\pi" />, donc{" "}
                  <Math tex="x=\dfrac\pi3+k\pi\ \text{ou}\ x=k\pi" />.
                </p>
                <p className="font-semibold text-green-700">
                  Dans <Math tex="[0,2\pi[" /> : <Math tex="S=\left\{0,\dfrac\pi3,\pi,\dfrac{4\pi}3\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Transformation et résolution de a cos x + b sin x = c"
            itemsLabel="1 transformation + 1 résolution"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Écrire <Math tex="\sqrt3\sin x+\cos x" /> sous la forme{" "}
                  <Math tex="R\sin(x+\varphi)" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Résoudre <Math tex="\sqrt3\sin x+\cos x=1" /> dans <Math tex="\mathbb R" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>a.</strong> <Math tex="R=\sqrt{3+1}=2" />, et <Math tex="\sin\varphi=\dfrac{\sqrt3}2" />
                  , <Math tex="\cos\varphi=\dfrac12" />, donc <Math tex="\varphi=\dfrac\pi6" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\sqrt3\sin x+\cos x=2\sin\!\left(x+\dfrac\pi6\right)" />.
                </p>
                <p>
                  <strong>b.</strong> L&apos;équation devient{" "}
                  <Math tex="2\sin\!\left(x+\dfrac\pi6\right)=1\iff\sin\!\left(x+\dfrac\pi6\right)=\dfrac12" />
                  :
                </p>
                <MathBlock tex="x+\dfrac\pi6=\dfrac\pi6+2k\pi\ \text{ou}\ x+\dfrac\pi6=\dfrac{5\pi}6+2k\pi" />
                <p className="font-semibold text-green-700">
                  <Math tex="S=\left\{2k\pi,\ \dfrac{2\pi}3+2k\pi\ /\ k\in\mathbb Z\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Somme → produit"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\cos\dfrac{5\pi}{12}+\cos\dfrac\pi{12}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\cos\dfrac{5\pi}{12}+\cos\dfrac\pi{12}=2\cos\!\left(\dfrac{\frac{5\pi}{12}+\frac\pi{12}}2\right)\cos\!\left(\dfrac{\frac{5\pi}{12}-\frac\pi{12}}2\right)=2\cos\dfrac\pi4\cos\dfrac\pi6" />
                <MathBlock tex="=2\times\dfrac{\sqrt2}2\times\dfrac{\sqrt3}2=\dfrac{\sqrt6}2" />
                <p className="font-semibold text-green-700">
                  <Math tex="\cos\dfrac{5\pi}{12}+\cos\dfrac\pi{12}=\dfrac{\sqrt6}2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Méthode complète a cos x + b sin x = c"
            itemsLabel="1 résolution"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb R" /> l&apos;équation{" "}
                <Math tex="\cos x+\sqrt3\sin x=\sqrt2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="R=\sqrt{1+3}=2" />. On cherche <Math tex="\alpha" /> tel que{" "}
                  <Math tex="\cos\alpha=\dfrac12" /> et <Math tex="\sin\alpha=\dfrac{\sqrt3}2" />, soit{" "}
                  <Math tex="\alpha=\dfrac\pi3" />. Donc <Math tex="\cos x+\sqrt3\sin x=2\cos\!\left(x-\dfrac\pi3\right)" />
                  .
                </p>
                <p>L&apos;équation devient :</p>
                <MathBlock tex="2\cos\!\left(x-\dfrac\pi3\right)=\sqrt2\iff\cos\!\left(x-\dfrac\pi3\right)=\dfrac{\sqrt2}2=\cos\dfrac\pi4" />
                <MathBlock tex="x-\dfrac\pi3=\pm\dfrac\pi4+2k\pi\iff x=\dfrac\pi3+\dfrac\pi4+2k\pi\ \text{ou}\ x=\dfrac\pi3-\dfrac\pi4+2k\pi" />
                <p className="font-semibold text-green-700">
                  <Math tex="S=\left\{\dfrac{7\pi}{12}+2k\pi,\ \dfrac\pi{12}+2k\pi\ /\ k\in\mathbb Z\right\}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
