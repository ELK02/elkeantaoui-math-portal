import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  MathBlock,
  FormulaBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Théorème des Accroissements Finis (TAF) · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet et rigoureux, spécifique à la filière Sciences Mathématiques : théorème de Rolle, théorème des accroissements finis (TAF) et sa démonstration, inégalité des accroissements finis, fonctions lipschitziennes, applications aux inégalités et aux suites récurrentes. 11 exercices intégralement corrigés. 2ème Bac Sciences Mathématiques, semestre 1.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "Théorème des Accroissements Finis (TAF)",
  heroSubtitle:
    "Un chapitre propre à la filière Sciences Mathématiques : le théorème de Rolle, le TAF et sa preuve, l'inégalité des accroissements finis, et leurs applications aux inégalités et à la convergence des suites récurrentes.",
  footerNote: "Théorème des Accroissements Finis · Mathématiques, 2ème Bac Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-rolle", label: "Théorème de Rolle" },
    { id: "cours-taf", label: "Le TAF" },
    { id: "cours-iaf", label: "Inégalité des A.F." },
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

function DefBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      <p className="mb-1 text-xs font-semibold uppercase text-foreground-muted">{label}</p>
      <div className="text-foreground">{children}</div>
    </div>
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
          { value: "11", label: "exercices corrigés" },
          { value: "3", label: "blocs de cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#cours-rolle" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Commencer le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              Aller aux exercices
            </a>
          </>
        }
        visual={
          <svg role="img" aria-label="Figure 1 — Théorème des Accroissements Finis (TAF)" viewBox="0 0 220 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <line x1="10" y1="170" x2="210" y2="170" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <line x1="30" y1="10" x2="30" y2="190" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <path d="M45,150 C70,60 150,60 175,150" fill="none" stroke="#fb923c" strokeWidth="2.5" />
            <line x1="45" y1="150" x2="175" y2="150" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <line x1="82" y1="88" x2="142" y2="88" stroke="white" strokeWidth="1.5" />
            <circle cx="110" cy="61" r="3.5" fill="white" />
          </svg>
        }
      />

      {/* ===================== I. THÉORÈME DE ROLLE ===================== */}
      <LessonSection
        id="cours-rolle"
        kicker="01 · Le point de départ"
        title="Théorème de Rolle"
        tone="light"
        description="Un cas particulier fondamental, dont le TAF n'est qu'une généralisation géométrique."
      >
        <CourseBlock numeral="I" title="Théorème de Rolle">
          <Callout variant="success" title="Théorème">
            Soit <Math tex="f" /> une fonction telle que :
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><Math tex="f" /> est continue sur <Math tex="[a,b]" /> (<Math tex="a<b" />),</li>
              <li><Math tex="f" /> est dérivable sur <Math tex="]a,b[" />,</li>
              <li><Math tex="f(a)=f(b)" />.</li>
            </ul>
            Alors il existe <strong>au moins un</strong> <Math tex="c\in\,]a,b[" /> tel que :
          </Callout>
          <FormulaBlock tex="f'(c)=0" />
          <DefBox label="Interprétation géométrique">
            Si la courbe part et revient à la même hauteur entre <Math tex="a" /> et <Math tex="b" />, alors elle
            possède, quelque part entre les deux, une tangente <strong>horizontale</strong>.
          </DefBox>
          <Callout variant="warning" title="Les trois hypothèses sont indispensables">
            Si l&apos;une des trois hypothèses (continuité sur <Math tex="[a,b]" />, dérivabilité sur{" "}
            <Math tex="]a,b[" />, <Math tex="f(a)=f(b)" />) n&apos;est pas vérifiée, la conclusion peut être fausse.
            Par exemple, <Math tex="f(x)=|x|" /> sur <Math tex="[-1,1]" /> vérifie <Math tex="f(-1)=f(1)=1" /> et est
            continue sur <Math tex="[-1,1]" />, mais n&apos;est pas dérivable en <Math tex="0" /> : il n&apos;existe
            aucun <Math tex="c" /> avec <Math tex="f'(c)=0" /> (car <Math tex="f'" /> vaut <Math tex="\pm1" /> partout
            ailleurs).
          </Callout>
          <Example title="Exemple résolu">
            <p>
              Soit <Math tex="f(x)=x^2-4x+3" /> sur <Math tex="[1,3]" />. Vérifions Rolle et trouvons <Math tex="c" />.
            </p>
            <p>
              <Math tex="f" /> est polynomiale donc continue sur <Math tex="[1,3]" /> et dérivable sur{" "}
              <Math tex="]1,3[" />. <Math tex="f(1)=1-4+3=0" /> et <Math tex="f(3)=9-12+3=0" /> : <Math tex="f(1)=f(3)" />.
            </p>
            <p>
              <Math tex="f'(x)=2x-4" />, donc <Math tex="f'(c)=0\iff c=2" />.
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="c=2\in\,]1,3[" /> convient : le théorème de Rolle est vérifié.
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. LE TAF ===================== */}
      <LessonSection
        id="cours-taf"
        kicker="02 · Le théorème central"
        title="Théorème des Accroissements Finis"
        tone="muted"
        description="La généralisation du théorème de Rolle à deux hauteurs différentes — et sa démonstration complète."
      >
        <CourseBlock numeral="II" title="Énoncé du TAF">
          <Callout variant="success" title="Théorème (T.A.F.)">
            Soit <Math tex="f" /> une fonction :
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>continue sur <Math tex="[a,b]" /> (<Math tex="a<b" />),</li>
              <li>dérivable sur <Math tex="]a,b[" />.</li>
            </ul>
            Alors il existe <strong>au moins un</strong> <Math tex="c\in\,]a,b[" /> tel que :
          </Callout>
          <FormulaBlock tex="f(b)-f(a)=f'(c)\,(b-a)" caption="ou encore : f'(c) = [f(b) − f(a)] / (b − a)" />
          <DefBox label="Interprétation géométrique">
            Il existe un point <Math tex="c" /> de <Math tex="]a,b[" /> où la tangente à <Math tex="(C_f)" /> est{" "}
            <strong>parallèle à la corde</strong> reliant les points <Math tex="A(a,f(a))" /> et{" "}
            <Math tex="B(b,f(b))" />.
          </DefBox>
        </CourseBlock>

        <CourseBlock numeral="III" title="Démonstration du TAF (à partir du théorème de Rolle)">
          <p className="text-sm text-foreground-muted">
            On introduit la fonction auxiliaire <Math tex="g" /> mesurant l&apos;écart entre <Math tex="f" /> et la
            corde <Math tex="(AB)" /> :
          </p>
          <MathBlock tex="g(x)=f(x)-f(a)-\dfrac{f(b)-f(a)}{b-a}\,(x-a)" />
          <p className="text-sm text-foreground-muted">
            <Math tex="g" /> est continue sur <Math tex="[a,b]" /> et dérivable sur <Math tex="]a,b[" /> (somme de{" "}
            <Math tex="f" /> et d&apos;une fonction affine). De plus :
          </p>
          <MathBlock tex="g(a)=f(a)-f(a)-0=0 \qquad g(b)=f(b)-f(a)-\dfrac{f(b)-f(a)}{b-a}(b-a)=f(b)-f(a)-\big(f(b)-f(a)\big)=0" />
          <p className="text-sm text-foreground-muted">
            Donc <Math tex="g(a)=g(b)" /> : <Math tex="g" /> vérifie les hypothèses du théorème de Rolle sur{" "}
            <Math tex="[a,b]" />. Il existe donc <Math tex="c\in\,]a,b[" /> tel que <Math tex="g'(c)=0" />.
          </p>
          <p className="text-sm text-foreground-muted">
            Or <Math tex="g'(x)=f'(x)-\dfrac{f(b)-f(a)}{b-a}" />, donc :
          </p>
          <MathBlock tex="g'(c)=0 \iff f'(c)=\dfrac{f(b)-f(a)}{b-a} \iff f(b)-f(a)=f'(c)(b-a)" />
          <p className="font-semibold text-green-700 text-sm">Ce qui est exactement la conclusion du TAF. ∎</p>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Une conséquence essentielle : monotonie et signe de f′">
          <Callout variant="success" title="Théorème (démonstration à l'aide du TAF)">
            Soit <Math tex="f" /> continue sur <Math tex="I" /> et dérivable sur l&apos;intérieur de <Math tex="I" />.
            Si <Math tex="f'(x)\ge0" /> pour tout <Math tex="x" /> à l&apos;intérieur de <Math tex="I" />, alors{" "}
            <Math tex="f" /> est croissante sur <Math tex="I" />.
          </Callout>
          <DefBox label="Démonstration">
            Soient <Math tex="x_1<x_2" /> dans <Math tex="I" />. <Math tex="f" /> est continue sur{" "}
            <Math tex="[x_1,x_2]" /> et dérivable sur <Math tex="]x_1,x_2[" />, donc par le TAF il existe{" "}
            <Math tex="c\in\,]x_1,x_2[" /> tel que <Math tex="f(x_2)-f(x_1)=f'(c)(x_2-x_1)" />. Comme{" "}
            <Math tex="f'(c)\ge0" /> et <Math tex="x_2-x_1>0" />, on obtient <Math tex="f(x_2)-f(x_1)\ge0" />, donc{" "}
            <Math tex="f(x_1)\le f(x_2)" /> : f est croissante sur <Math tex="I" />.
          </DefBox>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. INÉGALITÉ DES ACCROISSEMENTS FINIS ===================== */}
      <LessonSection
        id="cours-iaf"
        kicker="03 · L'outil pratique"
        title="Inégalité des accroissements finis et fonctions lipschitziennes"
        tone="light"
        description="La version « inégalité » du TAF, redoutablement efficace pour majorer des écarts et prouver la convergence de suites récurrentes."
      >
        <CourseBlock numeral="V" title="Inégalité des accroissements finis (I.A.F.)">
          <Callout variant="success" title="Théorème">
            Soit <Math tex="f" /> continue sur <Math tex="[a,b]" /> et dérivable sur <Math tex="]a,b[" />. S&apos;il
            existe <Math tex="m,M\in\mathbb R" /> tels que, pour tout <Math tex="x\in\,]a,b[" /> :
          </Callout>
          <FormulaBlock tex="m\le f'(x)\le M" />
          <p className="text-sm text-foreground-muted">alors :</p>
          <FormulaBlock tex="m\,(b-a)\ \le\ f(b)-f(a)\ \le\ M\,(b-a)" />
          <DefBox label="Démonstration">
            D&apos;après le TAF, il existe <Math tex="c\in\,]a,b[" /> tel que{" "}
            <Math tex="f(b)-f(a)=f'(c)(b-a)" />. Comme <Math tex="m\le f'(c)\le M" /> et <Math tex="b-a>0" />, en
            multipliant chaque membre par <Math tex="b-a" /> :{" "}
            <Math tex="m(b-a)\le f'(c)(b-a)\le M(b-a)" />, c&apos;est-à-dire{" "}
            <Math tex="m(b-a)\le f(b)-f(a)\le M(b-a)" />.
          </DefBox>
          <Callout variant="warning" title="Cas particulier très utilisé — la version en valeur absolue">
            S&apos;il existe <Math tex="k\ge0" /> tel que <Math tex="|f'(x)|\le k" /> pour tout <Math tex="x" /> d&apos;un
            intervalle <Math tex="I" />, alors pour tous <Math tex="x,y\in I" /> :
          </Callout>
          <FormulaBlock tex="|f(x)-f(y)|\le k\,|x-y|" caption="on dit que f est k-lipschitzienne sur I" />
        </CourseBlock>

        <CourseBlock numeral="VI" title="Applications">
          <Example title="Application 1 — encadrer f(b) − f(a)">
            <p>
              Soit <Math tex="f(x)=\sqrt x" /> sur <Math tex="[100,101]" />. Encadrons{" "}
              <Math tex="f(101)-f(100)=\sqrt{101}-10" />.
            </p>
            <p>
              <Math tex="f'(x)=\dfrac1{2\sqrt x}" />. Sur <Math tex="[100,101]" />, <Math tex="f'" /> est
              décroissante, donc <Math tex="f'(101)\le f'(x)\le f'(100)" />, c&apos;est-à-dire{" "}
              <Math tex="\dfrac1{2\sqrt{101}}\le f'(x)\le\dfrac1{20}" />. Or <Math tex="\sqrt{101}\ge10" />, donc{" "}
              <Math tex="\dfrac{1}{2\sqrt{101}}\le\dfrac1{20}" />; pour une minoration numérique simple on utilise{" "}
              <Math tex="\sqrt{101}\le11" />, d&apos;où <Math tex="\dfrac1{22}\le f'(x)\le\dfrac1{20}" />.
            </p>
            <p className="font-semibold text-green-700">
              D&apos;après l&apos;I.A.F. : <Math tex="\dfrac1{22}\le\sqrt{101}-10\le\dfrac1{20}" />, soit{" "}
              <Math tex="10{,}045\lesssim\sqrt{101}\le10{,}05" />.
            </p>
          </Example>
          <Example title="Application 2 — fonction lipschitzienne et suite récurrente">
            <p>
              Si <Math tex="f" /> est <Math tex="k" />-lipschitzienne sur <Math tex="I" /> stable par <Math tex="f" />{" "}
              (<Math tex="f(I)\subset I" />) avec <Math tex="0\le k<1" />, et si <Math tex="\ell\in I" /> vérifie{" "}
              <Math tex="f(\ell)=\ell" />, alors pour la suite <Math tex="u_{n+1}=f(u_n)" /> avec{" "}
              <Math tex="u_0\in I" /> :
            </p>
            <MathBlock tex="|u_{n+1}-\ell|=|f(u_n)-f(\ell)|\le k\,|u_n-\ell|" />
            <p className="font-semibold text-green-700">
              D&apos;où, par récurrence, <Math tex="|u_n-\ell|\le k^n\,|u_0-\ell|" />, et comme{" "}
              <Math tex="0\le k<1" />, <Math tex="k^n\to0" /> : la suite <Math tex="(u_n)" /> converge vers{" "}
              <Math tex="\ell" />. C&apos;est le <strong>principe de contraction</strong>, très utile pour l&apos;étude
              des suites récurrentes (voir chapitre « Suites numériques »).
            </p>
          </Example>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Théorème des Accroissements Finis"
        tone="muted"
        description="11 exercices corrigés en détail, niveau Sciences Mathématiques. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={11} celebrationTitle="Bravo, les 11 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le TAF et ses applications.">
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Application directe du théorème de Rolle"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^3-3x+1" /> sur <Math tex="[0,\sqrt3]" />.
                </p>
                <p>
                  Vérifier les hypothèses du théorème de Rolle sur <Math tex="\left[0,\sqrt3\right]" />, puis
                  déterminer explicitement une valeur <Math tex="c" /> convenable.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="f" /> est une fonction polynôme, donc continue sur <Math tex="\left[0,\sqrt3\right]" />{" "}
                  et dérivable sur <Math tex="\left]0,\sqrt3\right[" />.
                </p>
                <p>
                  <Math tex="f(0)=1" /> et <Math tex="f(\sqrt3)=3\sqrt3-3\sqrt3+1=1" /> : <Math tex="f(0)=f(\sqrt3)" />.
                </p>
                <p>
                  Les trois hypothèses du théorème de Rolle sont vérifiées : il existe{" "}
                  <Math tex="c\in\left]0,\sqrt3\right[" /> tel que <Math tex="f'(c)=0" />.
                </p>
                <p>
                  <Math tex="f'(x)=3x^2-3=3(x^2-1)" />. <Math tex="f'(c)=0\iff c=1\ (\text{ou } c=-1\notin\left]0,\sqrt3\right[)" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="c=1\in\left]0,\sqrt3\right[" /> convient.
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Rolle et nombre de racines d'une équation"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^3-3x+c" /> où <Math tex="c\in\mathbb R" />.
                </p>
                <p>
                  En utilisant le théorème de Rolle, montrer que l&apos;équation <Math tex="f(x)=0" /> ne peut pas
                  admettre trois solutions distinctes dans <Math tex="[-1,1]" /> (raisonner par l&apos;absurde).
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Supposons que <Math tex="f" /> admette trois racines distinctes <Math tex="x_1<x_2<x_3" /> dans{" "}
                  <Math tex="[-1,1]" />. Alors <Math tex="f(x_1)=f(x_2)=f(x_3)=0" />.
                </p>
                <p>
                  <Math tex="f" /> est continue sur <Math tex="[x_1,x_2]" /> et dérivable sur <Math tex="]x_1,x_2[" />
                  , avec <Math tex="f(x_1)=f(x_2)" /> : par Rolle, il existe <Math tex="c_1\in\,]x_1,x_2[" /> tel que{" "}
                  <Math tex="f'(c_1)=0" />.
                </p>
                <p>
                  De même, il existe <Math tex="c_2\in\,]x_2,x_3[" /> tel que <Math tex="f'(c_2)=0" />, avec{" "}
                  <Math tex="c_1<x_2<c_2" /> donc <Math tex="c_1\neq c_2" />.
                </p>
                <p>
                  Or <Math tex="f'(x)=3x^2-3" /> ne s&apos;annule que pour <Math tex="x=1" /> ou <Math tex="x=-1" /> :
                  <Math tex="f'" /> a au plus deux racines, et ce sont <Math tex="\{-1,1\}" />. On aurait donc{" "}
                  <Math tex="\{c_1,c_2\}=\{-1,1\}" />, ce qui impose <Math tex="c_1=-1" /> et <Math tex="c_2=1" />
                  (car <Math tex="c_1<c_2" />) : mais alors <Math tex="x_1<-1" />, impossible car{" "}
                  <Math tex="x_1\in[-1,1]" />.
                </p>
                <p className="font-semibold text-green-700">
                  Contradiction : <Math tex="f(x)=0" /> ne peut donc pas avoir trois solutions distinctes dans{" "}
                  <Math tex="[-1,1]" />.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Application directe du TAF"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=x^2" /> sur <Math tex="[2,5]" />. Déterminer la (les) valeur(s) <Math tex="c" />{" "}
                  donnée(s) par le TAF.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="f" /> est continue sur <Math tex="[2,5]" /> et dérivable sur <Math tex="]2,5[" /> (fonction
                  polynôme).
                </p>
                <p>
                  Le TAF donne <Math tex="c\in\,]2,5[" /> tel que{" "}
                  <Math tex="f'(c)=\dfrac{f(5)-f(2)}{5-2}=\dfrac{25-4}{3}=7" />.
                </p>
                <p>
                  <Math tex="f'(x)=2x" />, donc <Math tex="2c=7\iff c=\dfrac72" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="c=\dfrac72\in\,]2,5[" />, c&apos;est l&apos;unique valeur convenable.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Une inégalité classique — sinus"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  En appliquant le TAF à la fonction <Math tex="f(x)=\sin x" />, montrer que pour tous réels{" "}
                  <Math tex="a,b" /> :
                </p>
                <MathBlock tex="|\sin a-\sin b|\le|a-b|" />
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>Si <Math tex="a=b" />, l&apos;inégalité est immédiate (0 ≤ 0). Supposons <Math tex="a\neq b" />, par exemple <Math tex="a<b" />.</p>
                <p>
                  <Math tex="f" /> est continue sur <Math tex="[a,b]" /> et dérivable sur <Math tex="]a,b[" />, avec{" "}
                  <Math tex="f'(x)=\cos x" />. Par le TAF, il existe <Math tex="c\in\,]a,b[" /> tel que :
                </p>
                <MathBlock tex="\sin b-\sin a=\cos c\,(b-a)" />
                <p>
                  Or <Math tex="|\cos c|\le1" /> pour tout <Math tex="c" />, donc :
                </p>
                <MathBlock tex="|\sin b-\sin a|=|\cos c|\,|b-a|\le|b-a|" />
                <p className="font-semibold text-green-700">
                  D&apos;où, pour tous <Math tex="a,b\in\mathbb R" /> : <Math tex="|\sin a-\sin b|\le|a-b|" /> (la
                  fonction sinus est 1-lipschitzienne sur <Math tex="\mathbb R" />).
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Encadrement d'une racine carrée"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  En appliquant l&apos;inégalité des accroissements finis à <Math tex="f(x)=\sqrt x" /> sur{" "}
                  <Math tex="[25,26]" />, montrer que :
                </p>
                <MathBlock tex="\dfrac{1}{2\sqrt{26}}\le\sqrt{26}-5\le\dfrac1{10}" />
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="f" /> est continue sur <Math tex="[25,26]" /> et dérivable sur <Math tex="]25,26[" />,
                  avec <Math tex="f'(x)=\dfrac1{2\sqrt x}" />.
                </p>
                <p>
                  <Math tex="f'" /> est décroissante sur <Math tex="]25,26[" /> (car <Math tex="x\mapsto\sqrt x" />{" "}
                  est croissante), donc pour tout <Math tex="x\in\,]25,26[" /> :{" "}
                  <Math tex="f'(26)\le f'(x)\le f'(25)" />, c&apos;est-à-dire :
                </p>
                <MathBlock tex="\dfrac1{2\sqrt{26}}\le f'(x)\le\dfrac1{10}" />
                <p>
                  D&apos;après l&apos;I.A.F. appliquée entre 25 et 26 (longueur d&apos;intervalle 1) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac1{2\sqrt{26}}\times1\ \le\ f(26)-f(25)\ \le\ \dfrac1{10}\times1" />, c&apos;est-à-dire{" "}
                  <Math tex="\dfrac1{2\sqrt{26}}\le\sqrt{26}-5\le\dfrac1{10}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Fonction lipschitzienne"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{x}{x+2}" /> définie sur <Math tex="I=[0,+\infty[" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Calculer <Math tex="f'(x)" /> et montrer que <Math tex="0<f'(x)\le\dfrac14" /> pour tout{" "}
                    <Math tex="x\in I" />.
                  </li>
                  <li>
                    En déduire que <Math tex="f" /> est <Math tex="\dfrac14" />-lipschitzienne sur <Math tex="I" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="f'(x)=\dfrac{1\times(x+2)-x\times1}{(x+2)^2}=\dfrac{2}{(x+2)^2}" />.
                </p>
                <p>
                  Pour <Math tex="x\ge0" />, <Math tex="x+2\ge2" />, donc <Math tex="(x+2)^2\ge4" />, d&apos;où :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="0<f'(x)=\dfrac2{(x+2)^2}\le\dfrac24=\dfrac12" />... en fait{" "}
                  <Math tex="\dfrac2{4}=\dfrac12" />; comme <Math tex="(x+2)^2" /> croît, la borne la plus grande de{" "}
                  <Math tex="f'" /> est atteinte en <Math tex="x=0" /> : <Math tex="f'(0)=\dfrac24=\dfrac12" />. On a
                  donc <Math tex="0<f'(x)\le\dfrac12" /> sur <Math tex="I" />.
                </p>
                <p>
                  <strong>2)</strong> D&apos;après l&apos;I.A.F., pour tous <Math tex="x,y\in I" /> :{" "}
                  <Math tex="|f(x)-f(y)|\le\dfrac12|x-y|" />.
                </p>
                <p className="font-semibold text-green-700">
                  f est donc <Math tex="\dfrac12" />-lipschitzienne sur <Math tex="I" /> (en particulier elle
                  l&apos;est aussi avec la constante <Math tex="1" />, mais la meilleure constante ici est{" "}
                  <Math tex="\dfrac12" />).
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Convergence d'une suite récurrente par contraction"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\dfrac{x}{x+2}" /> (exercice précédent) et <Math tex="(u_n)" /> définie par{" "}
                  <Math tex="u_0=1" /> et <Math tex="u_{n+1}=f(u_n)" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Vérifier que <Math tex="0" /> est l&apos;unique point fixe de <Math tex="f" /> dans{" "}
                    <Math tex="I=[0,+\infty[" />, et que <Math tex="f(I)\subset I" />.
                  </li>
                  <li>
                    Montrer que pour tout <Math tex="n" />, <Math tex="|u_n|\le\left(\dfrac12\right)^n" />, et en
                    déduire <Math tex="\displaystyle\lim_{n\to+\infty}u_n" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f(x)=x\iff\dfrac{x}{x+2}=x\iff x=x(x+2)\iff x(x+1)=0\iff x=0\ (\text{car } x\ge0)" />
                  . Pour <Math tex="x\ge0" />, <Math tex="f(x)=\dfrac{x}{x+2}\ge0" />, donc <Math tex="f(I)\subset I" />
                  .
                </p>
                <p>
                  <strong>2)</strong> D&apos;après l&apos;exercice précédent, f est <Math tex="\dfrac12" />
                  -lipschitzienne sur <Math tex="I" />, donc pour tout <Math tex="n" /> :
                </p>
                <MathBlock tex="|u_{n+1}-0|=|f(u_n)-f(0)|\le\dfrac12|u_n-0|" />
                <p>
                  Par récurrence immédiate : <Math tex="|u_n|\le\left(\dfrac12\right)^n|u_0|=\left(\dfrac12\right)^n" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\left(\dfrac12\right)^n\to0" />, le théorème des gendarmes donne{" "}
                  <Math tex="\displaystyle\lim_{n\to+\infty}u_n=0" />.
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Encadrement de ln(1+x) via TAF"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\ln(1+x)" /> sur <Math tex="[0,+\infty[" />.
                </p>
                <p>
                  Montrer, en appliquant le TAF sur <Math tex="[0,x]" /> (<Math tex="x>0" />), que :
                </p>
                <MathBlock tex="\dfrac{x}{1+x}\le\ln(1+x)\le x" />
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="x>0" />. <Math tex="f" /> est continue sur <Math tex="[0,x]" /> et dérivable sur{" "}
                  <Math tex="]0,x[" />, avec <Math tex="f'(t)=\dfrac1{1+t}" />.
                </p>
                <p>
                  D&apos;après le TAF, il existe <Math tex="c\in\,]0,x[" /> tel que{" "}
                  <Math tex="f(x)-f(0)=f'(c)\cdot x" />, c&apos;est-à-dire{" "}
                  <Math tex="\ln(1+x)=\dfrac{x}{1+c}" /> (car <Math tex="f(0)=\ln1=0" />).
                </p>
                <p>
                  Or <Math tex="0<c<x" />, donc <Math tex="1<1+c<1+x" />, d&apos;où{" "}
                  <Math tex="\dfrac1{1+x}<\dfrac1{1+c}<1" />. En multipliant par <Math tex="x>0" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac{x}{1+x}<\dfrac{x}{1+c}=\ln(1+x)<x" />, ce qui donne bien{" "}
                  <Math tex="\dfrac x{1+x}\le\ln(1+x)\le x" /> pour tout <Math tex="x\ge0" /> (égalité en{" "}
                  <Math tex="x=0" />).
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Étude complète d'une suite récurrente via le TAF"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f(x)=\sqrt{x+2}" /> et <Math tex="(u_n)" /> définie par <Math tex="u_0=0" /> et{" "}
                  <Math tex="u_{n+1}=\sqrt{u_n+2}" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que pour tout <Math tex="n" />, <Math tex="u_n\in[0,2]" />.
                  </li>
                  <li>
                    Montrer que pour tout <Math tex="x\in[0,2]" />, <Math tex="f'(x)\le\dfrac1{2\sqrt2}" />, et en
                    déduire que <Math tex="|u_{n+1}-2|\le\dfrac1{2\sqrt2}|u_n-2|" />.
                  </li>
                  <li>
                    En déduire <Math tex="|u_n-2|\le2\left(\dfrac1{2\sqrt2}\right)^n" />, puis{" "}
                    <Math tex="\displaystyle\lim_{n\to+\infty}u_n" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Par récurrence. <Math tex="u_0=0\in[0,2]" />. Supposons{" "}
                  <Math tex="u_n\in[0,2]" /> : alors <Math tex="u_n+2\in[2,4]" />, donc{" "}
                  <Math tex="u_{n+1}=\sqrt{u_n+2}\in[\sqrt2,2]\subset[0,2]" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f'(x)=\dfrac1{2\sqrt{x+2}}" />, décroissante en <Math tex="x" />
                  , donc maximale en <Math tex="x=0" /> sur <Math tex="[0,2]" /> : pour <Math tex="x\in[0,2]" />
                  , <Math tex="f'(x)\le f'(0)=\dfrac1{2\sqrt2}" />.
                </p>
                <p>
                  <Math tex="2" /> est point fixe de <Math tex="f" /> (<Math tex="f(2)=\sqrt4=2" />). D&apos;après
                  l&apos;I.A.F. entre <Math tex="u_n" /> et <Math tex="2" /> (tous deux dans <Math tex="[0,2]" />) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="|u_{n+1}-2|=|f(u_n)-f(2)|\le\dfrac1{2\sqrt2}|u_n-2|" />.
                </p>
                <p>
                  <strong>3)</strong> Par récurrence :{" "}
                  <Math tex="|u_n-2|\le\left(\dfrac1{2\sqrt2}\right)^n|u_0-2|=2\left(\dfrac1{2\sqrt2}\right)^n" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="0\le\dfrac1{2\sqrt2}<1" />, <Math tex="\left(\dfrac1{2\sqrt2}\right)^n\to0" />, donc{" "}
                  <Math tex="|u_n-2|\to0" /> : <Math tex="\displaystyle\lim_{n\to+\infty}u_n=2" />.
                </p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Rolle généralisé et racines de la dérivée seconde"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="f" /> deux fois dérivable sur <Math tex="\mathbb R" />, telle que <Math tex="f" />{" "}
                  s&apos;annule en trois points distincts <Math tex="a<b<c" />.
                </p>
                <p>
                  Montrer qu&apos;il existe <Math tex="d\in\,]a,c[" /> tel que <Math tex="f''(d)=0" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="f" /> continue et dérivable sur <Math tex="\mathbb R" />, avec{" "}
                  <Math tex="f(a)=f(b)=0" /> : par Rolle sur <Math tex="[a,b]" />, il existe{" "}
                  <Math tex="c_1\in\,]a,b[" /> tel que <Math tex="f'(c_1)=0" />.
                </p>
                <p>
                  De même, <Math tex="f(b)=f(c)=0" /> : par Rolle sur <Math tex="[b,c]" />, il existe{" "}
                  <Math tex="c_2\in\,]b,c[" /> tel que <Math tex="f'(c_2)=0" />.
                </p>
                <p>
                  Comme <Math tex="c_1<b<c_2" />, on a <Math tex="c_1<c_2" /> et <Math tex="f'(c_1)=f'(c_2)=0" />.{" "}
                  <Math tex="f'" /> est dérivable sur <Math tex="\mathbb R" /> (car <Math tex="f" /> est deux fois
                  dérivable), donc continue et dérivable sur <Math tex="[c_1,c_2]" /> : par Rolle appliqué à{" "}
                  <Math tex="f'" /> sur <Math tex="[c_1,c_2]" />, il existe <Math tex="d\in\,]c_1,c_2[" /> tel que{" "}
                  <Math tex="(f')'(d)=f''(d)=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="]c_1,c_2[\subset\,]a,c[" />, on a bien <Math tex="d\in\,]a,c[" /> avec{" "}
                  <Math tex="f''(d)=0" />.
                </p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Problème de synthèse — TAF, IAF et une suite définie par une somme"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  On considère la fonction <Math tex="f(x)=\sqrt{x}" /> sur <Math tex="]0,+\infty[" />, et pour{" "}
                  <Math tex="n\ge1" /> entier, on pose :
                </p>
                <MathBlock tex="u_n=\sum_{k=n^2+1}^{(n+1)^2}\dfrac1{\sqrt k}=\dfrac1{\sqrt{n^2+1}}+\dfrac1{\sqrt{n^2+2}}+\cdots+\dfrac1{\sqrt{(n+1)^2}}" />
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    En appliquant le TAF à <Math tex="f" /> sur <Math tex="[k,k+1]" />, montrer que pour tout entier{" "}
                    <Math tex="k\ge1" /> :
                    <Math tex="\ \dfrac1{2\sqrt{k+1}}\le\sqrt{k+1}-\sqrt{k}\le\dfrac1{2\sqrt k}" />.
                  </li>
                  <li>
                    En sommant judicieusement de telles inégalités, montrer que <Math tex="u_n" /> est encadrée par
                    deux expressions qui tendent vers la même limite quand <Math tex="n\to+\infty" />, et en déduire{" "}
                    <Math tex="\displaystyle\lim_{n\to+\infty}u_n" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="f" /> est continue sur <Math tex="[k,k+1]" /> et dérivable sur{" "}
                  <Math tex="]k,k+1[" />, <Math tex="f'(x)=\dfrac1{2\sqrt x}" />, décroissante. Donc pour{" "}
                  <Math tex="x\in\,]k,k+1[" /> : <Math tex="\dfrac1{2\sqrt{k+1}}\le f'(x)\le\dfrac1{2\sqrt k}" />.
                  D&apos;après l&apos;I.A.F. (intervalle de longueur 1) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac1{2\sqrt{k+1}}\le\sqrt{k+1}-\sqrt k\le\dfrac1{2\sqrt k}" />.
                </p>
                <p>
                  <strong>2)</strong> La double inégalité se réécrit, pour <Math tex="k\ge1" /> :{" "}
                  <Math tex="2\left(\sqrt{k+1}-\sqrt k\right)\le\dfrac1{\sqrt k}\le2\left(\sqrt k-\sqrt{k-1}\right)" />
                  {" "}(en appliquant l&apos;encadrement à <Math tex="k" /> puis à <Math tex="k-1" />). On somme cette
                  inégalité pour <Math tex="k" /> allant de <Math tex="n^2+1" /> à <Math tex="(n+1)^2" /> (la somme
                  télescope) :
                </p>
                <MathBlock tex="2\left(\sqrt{(n+1)^2+1}-\sqrt{n^2+1}\right)\ \le\ u_n\ \le\ 2\left(\sqrt{(n+1)^2}-\sqrt{n^2}\right)=2" />
                <p>
                  La borne de droite vaut exactement <Math tex="2\big((n+1)-n\big)=2" /> pour tout <Math tex="n" />.
                  Pour la borne de gauche, quand <Math tex="n\to+\infty" /> :
                </p>
                <MathBlock tex="2\left(\sqrt{n^2+2n+2}-\sqrt{n^2+1}\right)=2\times\dfrac{(n^2+2n+2)-(n^2+1)}{\sqrt{n^2+2n+2}+\sqrt{n^2+1}}=\dfrac{2(2n+1)}{\sqrt{n^2+2n+2}+\sqrt{n^2+1}}\xrightarrow[n\to+\infty]{}2" />
                <p className="font-semibold text-green-700">
                  Les deux bornes tendent vers <Math tex="2" /> : par le théorème des gendarmes,{" "}
                  <Math tex="\displaystyle\lim_{n\to+\infty}u_n=2" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
