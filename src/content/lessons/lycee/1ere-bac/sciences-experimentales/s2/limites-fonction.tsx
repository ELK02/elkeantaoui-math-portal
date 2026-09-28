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
  title: "Les limites d'une fonction · Cours et exercices | 1ère Bac Sciences",
  description:
    "Cours complet sur les limites d'une fonction pour la 1ère année Baccalauréat (Sciences Expérimentales, Sciences et Technologies Électriques et Mécaniques) : limites en ±∞, limites en un point, limites à gauche et à droite, opérations sur les limites, limites de fonctions polynômes et rationnelles, limites et ordre (théorèmes de comparaison), limites trigonométriques usuelles, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences · Semestre 2",
  heroTitle: "Les limites d'une fonction",
  heroSubtitle:
    "Ce qui se passe quand x s'approche d'une valeur ou part à l'infini — la notion qui fonde toute l'analyse du lycée, des asymptotes à la dérivation.",
  footerNote: "Les limites d'une fonction · Mathématiques, 1ère année Baccalauréat, semestre 2.",
  sections: [
    { id: "cours-infini", label: "Limites en ±∞" },
    { id: "cours-point", label: "Limites en un point" },
    { id: "cours-operations", label: "Opérations, ordre" },
    { id: "cours-trigo", label: "Limites trigo" },
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

function FITable({ rows, cols }: { rows: string[]; cols: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-center text-xs sm:text-sm">
        <tbody>
          {cols.map((row, i) => (
            <tr key={i}>
              <td className="border border-border bg-surface-muted p-2 text-left font-semibold">{rows[i]}</td>
              {row.map((c, j) => (
                <td key={j} className="border border-border p-2">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
          { value: "4", label: "familles de limites" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-infini"
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
            <Math tex="\lim_{x\to a}f(x)" />
          </div>
        }
      />

      {/* ===================== I. LIMITES EN ±∞ ===================== */}
      <LessonSection
        id="cours-infini"
        kicker="01 · Ce qui se passe très loin"
        title="Limites en +∞ et en −∞"
        tone="light"
        description="On distingue les limites infinies (f(x) explose) des limites finies (f(x) se stabilise près d'une valeur)."
      >
        <CourseBlock numeral="I" title="Limite infinie en ±∞">
          <Box title="Définitions" tone="def">
            Si <Math tex="f(x)" /> tend vers <Math tex="+\infty" /> (ou <Math tex="-\infty" />) quand{" "}
            <Math tex="x" /> tend vers <Math tex="+\infty" />, on écrit{" "}
            <Math tex="\lim_{x\to+\infty}f(x)=+\infty" /> (ou <Math tex="-\infty" />) — et de même en{" "}
            <Math tex="-\infty" />.
          </Box>
          <Callout variant="success" title="Limites usuelles (n entier naturel non nul, k réel)">
            <div className="space-y-1.5">
              <p>
                <Math tex="\lim_{x\to+\infty}x^n=+\infty" />, <Math tex="\lim_{x\to+\infty}\sqrt x=+\infty" />
              </p>
              <p>
                <Math tex="\lim_{x\to-\infty}x^{2n}=+\infty" /> et <Math tex="\lim_{x\to-\infty}x^{2n+1}=-\infty" />{" "}
                (pair vs impair)
              </p>
              <p>
                <Math tex="\lim_{x\to\pm\infty}k\cdot x^n" /> : signe de <Math tex="+\infty" /> si{" "}
                <Math tex="k>0" />, de <Math tex="-\infty" /> si <Math tex="k<0" /> (attention au signe de{" "}
                <Math tex="x^n" /> en <Math tex="-\infty" />).
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Limite finie en ±∞">
          <Box title="Définitions et méthode" tone="def">
            <Math tex="\lim_{x\to+\infty}f(x)=l \iff \lim_{x\to+\infty}\big(f(x)-l\big)=0" /> (idem en{" "}
            <Math tex="-\infty" />).
          </Box>
          <Callout variant="success" title="Limites usuelles">
            <Math tex="\lim_{x\to+\infty}\dfrac{k}{x^n}=0" />, <Math tex="\lim_{x\to-\infty}\dfrac{k}{x^n}=0" />,{" "}
            <Math tex="\lim_{x\to+\infty}\dfrac{k}{\sqrt x}=0" />.
          </Callout>
          <Box title="Application" tone="prop">
            <MathBlock tex="\lim_{x\to-\infty}\dfrac{2x^3+x}{x^3}=\lim_{x\to-\infty}\left(2+\dfrac{1}{x^2}\right)=2" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. LIMITES EN UN POINT ===================== */}
      <LessonSection
        id="cours-point"
        kicker="02 · Ce qui se passe tout près d'un point"
        title="Limite finie et infinie en un point, limites latérales"
        tone="muted"
        description="En un point a, une limite peut être finie, infinie, ou même ne pas exister si les limites à gauche et à droite diffèrent."
      >
        <CourseBlock numeral="III" title="Limite finie en un point, unicité">
          <Box title="Définition et propriété" tone="def">
            Si <Math tex="f(x)\to l" /> quand <Math tex="x\to a" />, on écrit{" "}
            <Math tex="\lim_{x\to a}f(x)=l" />. <strong className="text-foreground">Si elle existe, cette
            limite est unique.</strong>
          </Box>
          <Callout variant="warning" title="Méthode pratique — on remplace x par a">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="f(a)" /> est bien défini : <Math tex="\lim_{x\to a}f(x)=f(a)" />.
              </li>
              <li>
                Si on obtient <Math tex="\dfrac00" />, il faut{" "}
                <strong>factoriser</strong> par <Math tex="(x-a)" /> ou <strong>multiplier par le
                conjugué</strong>.
              </li>
              <li>
                Les <strong>formes indéterminées</strong> à retenir :{" "}
                <Math tex="\dfrac00,\ \dfrac{\infty}{\infty},\ 0\times\infty,\ \infty-\infty" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Limite infinie, limites à gauche et à droite">
          <div className="grid gap-3 sm:grid-cols-2">
            <Box title="Limite infinie en a" tone="def">
              <Math tex="\lim_{x\to a}f(x)=+\infty" /> (ou <Math tex="-\infty" />) si <Math tex="f(x)" /> tend
              vers <Math tex="+\infty" /> (ou <Math tex="-\infty" />) quand <Math tex="x\to a" />.
            </Box>
            <Box title="Limites à gauche / à droite" tone="def">
              <Math tex="\lim_{x\to a^+}f(x)" /> (limite quand <Math tex="x\to a" /> avec{" "}
              <Math tex="x>a" />) et <Math tex="\lim_{x\to a^-}f(x)" /> (avec <Math tex="x<a" />).
            </Box>
          </div>
          <Callout variant="success" title="Le lien entre les deux — la propriété la plus utile pour les fonctions par morceaux">
            <MathBlock tex="\lim_{x\to a}f(x)=l \iff \lim_{x\to a^+}f(x)=\lim_{x\to a^-}f(x)=l" />
          </Callout>
          <Box title="Limites usuelles en 0" tone="prop">
            <div className="grid gap-1.5 sm:grid-cols-2">
              <p>
                <Math tex="\lim_{x\to0^+}\dfrac1x=+\infty" />, <Math tex="\lim_{x\to0^-}\dfrac1x=-\infty" />
              </p>
              <p>
                <Math tex="\lim_{x\to0^+}\dfrac{1}{\sqrt x}=+\infty" />, <Math tex="\lim_{x\to0^+}\dfrac1{x^n}=+\infty" />
              </p>
            </div>
            <p className="mt-1">
              <Math tex="\lim_{x\to0^-}\dfrac1{x^n}" /> vaut <Math tex="+\infty" /> si <Math tex="n" /> est
              pair, <Math tex="-\infty" /> si <Math tex="n" /> est impair.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. OPÉRATIONS, ORDRE ===================== */}
      <LessonSection
        id="cours-operations"
        kicker="03 · Combiner et comparer"
        title="Opérations sur les limites, limites et ordre"
        tone="light"
        description="Les résultats se combinent presque toujours naturellement — sauf dans quatre cas de forme indéterminée (F.I.) qu'il faut lever avant de conclure."
      >
        <CourseBlock numeral="V" title="Somme, produit, quotient">
          <Callout variant="warning" title="Les quatre formes indéterminées">
            <p>
              Une somme <Math tex="(+\infty)+(-\infty)" />, un produit <Math tex="0\times(\pm\infty)" />, un
              quotient <Math tex="\dfrac{\pm\infty}{\pm\infty}" /> ou <Math tex="\dfrac00" /> sont des{" "}
              <strong>F.I.</strong> : le résultat dépend de la fonction précise, il faut transformer
              l&apos;écriture (factoriser, mettre le terme dominant en facteur, multiplier par le conjugué…)
              avant de conclure.
            </p>
          </Callout>
          <FITable
            rows={["lim f", "lim g", "lim (f×g)"]}
            cols={[
              [
                <Math key="a" tex="l" />,
                <Math key="b" tex="l>0" />,
                <Math key="c" tex="l<0" />,
                <Math key="d" tex="+\infty" />,
                <Math key="e" tex="0" />,
              ],
              [
                <Math key="a" tex="l'" />,
                <Math key="b" tex="+\infty" />,
                <Math key="c" tex="+\infty" />,
                <Math key="d" tex="+\infty" />,
                <Math key="e" tex="\pm\infty" />,
              ],
              [
                <Math key="a" tex="l\times l'" />,
                <Math key="b" tex="+\infty" />,
                <Math key="c" tex="-\infty" />,
                <Math key="d" tex="+\infty" />,
                <strong key="e" className="text-orange-700">
                  F.I.
                </strong>,
              ],
            ]}
          />
          <p className="text-xs text-foreground-muted">
            (extrait du tableau du produit — le cours complet couvre aussi la somme et le quotient, avec la
            même logique : tout se combine sauf les quatre cas F.I. ci-dessus.)
          </p>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Fonctions polynômes et rationnelles">
          <Callout variant="success" title="Deux résultats à retenir par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                En un point <Math tex="a" /> : <Math tex="\lim_{x\to a}f(x)=f(a)" /> pour une fonction
                polynôme, et <Math tex="\lim_{x\to a}\dfrac{P(x)}{Q(x)}=\dfrac{P(a)}{Q(a)}" /> pour une
                fonction rationnelle (si <Math tex="Q(a)\neq0" />).
              </li>
              <li>
                En <Math tex="\pm\infty" /> : la limite d&apos;un polynôme est celle de son{" "}
                <strong>terme de plus haut degré</strong> ; la limite d&apos;une fraction rationnelle est
                celle du <strong>quotient des termes de plus haut degré</strong> du numérateur et du
                dénominateur.
              </li>
            </ul>
          </Callout>
          <Box title="Exemple" tone="prop">
            <MathBlock tex="\lim_{x\to-\infty}5x^2+3x-4=\lim_{x\to-\infty}5x^2=+\infty" />
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Limites et ordre — les théorèmes de comparaison">
          <Callout variant="success" title="Trois théorèmes indispensables">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="f(x)\le g(x)" /> au voisinage de <Math tex="a" /> et{" "}
                <Math tex="\lim_{x\to a}g(x)=-\infty" />, alors <Math tex="\lim_{x\to a}f(x)=-\infty" /> (et
                symétriquement pour <Math tex="+\infty" />).
              </li>
              <li>
                <strong>Théorème des gendarmes :</strong> si{" "}
                <Math tex="g(x)\le f(x)\le h(x)" /> au voisinage de <Math tex="a" /> et{" "}
                <Math tex="\lim_{x\to a}g(x)=\lim_{x\to a}h(x)=l" />, alors{" "}
                <Math tex="\lim_{x\to a}f(x)=l" />.
              </li>
              <li>
                Si <Math tex="|f(x)-l|\le g(x)" /> au voisinage de <Math tex="a" /> et{" "}
                <Math tex="\lim_{x\to a}g(x)=0" />, alors <Math tex="\lim_{x\to a}f(x)=l" />.
              </li>
            </ul>
          </Callout>
          <Box title="Exemple" tone="prop">
            <p>
              Calculons <Math tex="\lim_{x\to+\infty}x^2+\cos x" />. On a{" "}
              <Math tex="-1\le\cos x\le1 \Rightarrow x^2-1\le x^2+\cos x\le x^2+1" />, et{" "}
              <Math tex="\lim_{x\to+\infty}(x^2\pm1)=+\infty" />, donc par le théorème des gendarmes{" "}
              (côté minorant) : <Math tex="\lim_{x\to+\infty}x^2+\cos x=+\infty" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. LIMITES TRIGO ===================== */}
      <LessonSection
        id="cours-trigo"
        kicker="04 · Trois limites de référence"
        title="Limites trigonométriques usuelles"
        tone="muted"
        description="Ces trois limites en 0 sont des résultats fondamentaux, réutilisés dans tout le calcul différentiel à venir."
      >
        <CourseBlock numeral="VIII" title="sin(x)/x, tan(x)/x, (1−cos x)/x²">
          <Callout variant="success" title="À connaître par cœur">
            <div className="grid gap-1.5 sm:grid-cols-3">
              <p>
                <Math tex="\lim_{x\to0}\dfrac{\sin x}{x}=1" />
              </p>
              <p>
                <Math tex="\lim_{x\to0}\dfrac{\tan x}{x}=1" />
              </p>
              <p>
                <Math tex="\lim_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12" />
              </p>
            </div>
          </Callout>
          <Box title="Généralisation (a réel non nul)" tone="prop">
            <MathBlock tex="\lim_{x\to0}\dfrac{\sin(ax)}{ax}=1,\qquad \lim_{x\to0}\dfrac{\tan(ax)}{ax}=1,\qquad \lim_{x\to0}\dfrac{1-\cos(ax)}{(ax)^2}=\dfrac12" />
          </Box>
          <Callout variant="warning" title="Le piège classique — bien réécrire le rapport">
            Pour calculer <Math tex="\lim_{x\to0}\dfrac{\sin(3x)}{4x}" />, on réécrit :
            <MathBlock tex="\dfrac{\sin(3x)}{4x}=\dfrac34\times\dfrac{\sin(3x)}{3x}\xrightarrow[x\to0]{}\dfrac34\times1=\dfrac34" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Les limites d'une fonction"
        tone="light"
        description="6 exercices corrigés, calqués sur les techniques essentielles du cours."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre limites d'une fonction est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Limites en un point avec signe (gauche/droite)"
            itemsLabel="1 fonction, 2 points"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les limites à gauche et à droite de{" "}
                <Math tex="f(x)=\dfrac{x}{(x+1)(x-2)}" /> en <Math tex="x=2" /> et en <Math tex="x=-1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En <Math tex="x=2" /> : le numérateur tend vers <Math tex="2>0" />, et le dénominateur
                  s&apos;annule en changeant de signe. Pour <Math tex="x\to2^+" /> (juste après{" "}
                  <Math tex="2" />), <Math tex="(x+1)(x-2)\to0^+" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\lim_{x\to2^+}f(x)=+\infty" /> et <Math tex="\lim_{x\to2^-}f(x)=-\infty" />.
                </p>
                <p>
                  En <Math tex="x=-1" /> : le numérateur tend vers <Math tex="-1<0" />, et pour{" "}
                  <Math tex="x\to-1^+" />, <Math tex="(x+1)(x-2)\to0^-" /> (car <Math tex="x-2<0" />) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\lim_{x\to-1^+}f(x)=+\infty" /> et <Math tex="\lim_{x\to-1^-}f(x)=-\infty" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Forme 0/0 par factorisation"
            itemsLabel="1 limite"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to2}\dfrac{x^2-x-2}{x-2}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On obtient la forme <Math tex="\dfrac00" /> en remplaçant <Math tex="x" /> par{" "}
                  <Math tex="2" />. On factorise : <Math tex="x^2-x-2=(x-2)(x+1)" />, donc pour{" "}
                  <Math tex="x\neq2" /> :
                </p>
                <MathBlock tex="\dfrac{x^2-x-2}{x-2}=\dfrac{(x-2)(x+1)}{x-2}=x+1" />
                <p className="font-semibold text-green-700">
                  <Math tex="\lim_{x\to2}\dfrac{x^2-x-2}{x-2}=\lim_{x\to2}(x+1)=3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Forme ∞−∞ par le conjugué"
            itemsLabel="1 limite"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to+\infty}\sqrt{x+3}-\sqrt x" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On multiplie par le conjugué (forme <Math tex="\infty-\infty" />) :
                </p>
                <MathBlock tex="\sqrt{x+3}-\sqrt x=\dfrac{(\sqrt{x+3}-\sqrt x)(\sqrt{x+3}+\sqrt x)}{\sqrt{x+3}+\sqrt x}=\dfrac{3}{\sqrt{x+3}+\sqrt x}" />
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\lim_{x\to+\infty}(\sqrt{x+3}+\sqrt x)=+\infty" /> :{" "}
                  <Math tex="\lim_{x\to+\infty}\sqrt{x+3}-\sqrt x=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Théorème des gendarmes par encadrement"
            itemsLabel="1 étude complète"
            items={
              <div className="space-y-2 text-sm">
                <p className="rounded-xl border border-border p-4">
                  Soit <Math tex="f" /> définie sur <Math tex="D=[0,+\infty[" /> par{" "}
                  <Math tex="f(x)=\sqrt{x+2}-\sqrt x" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>a.</strong> Montrer que <Math tex="f(x)=\dfrac{2}{\sqrt{x+2}+\sqrt x}" />.
                </p>
                <p className="rounded-xl border border-border p-4">
                  <strong>b.</strong> Montrer que, pour <Math tex="x>0" /> : <Math tex="0\le f(x)\le\dfrac{2}{\sqrt x}" />
                  , et en déduire <Math tex="\lim_{x\to+\infty}f(x)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-green-700">a.</strong> En multipliant par le conjugué :
                </p>
                <MathBlock tex="f(x)=\dfrac{(\sqrt{x+2}-\sqrt x)(\sqrt{x+2}+\sqrt x)}{\sqrt{x+2}+\sqrt x}=\dfrac{2}{\sqrt{x+2}+\sqrt x}" />
                <p>
                  <strong className="text-green-700">b.</strong> Pour <Math tex="x>0" /> :{" "}
                  <Math tex="f(x)>0" /> évidemment. De plus{" "}
                  <Math tex="\sqrt{x+2}+\sqrt x>\sqrt x" />, donc{" "}
                  <Math tex="f(x)=\dfrac{2}{\sqrt{x+2}+\sqrt x}<\dfrac{2}{\sqrt x}" />.
                </p>
                <p>
                  Or <Math tex="\lim_{x\to+\infty}\dfrac{2}{\sqrt x}=0" />, donc par le théorème des
                  gendarmes :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\lim_{x\to+\infty}f(x)=0" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Limite trigonométrique en 0"
            itemsLabel="1 limite"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer <Math tex="\displaystyle\lim_{x\to0}\dfrac{\sin(5x)}{2x}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <MathBlock tex="\dfrac{\sin(5x)}{2x}=\dfrac52\times\dfrac{\sin(5x)}{5x}" />
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\lim_{x\to0}\dfrac{\sin(5x)}{5x}=1" /> :{" "}
                  <Math tex="\lim_{x\to0}\dfrac{\sin(5x)}{2x}=\dfrac52" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Trouver une asymptote oblique"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que la droite d&apos;équation <Math tex="y=2x" /> est asymptote à la courbe de{" "}
                <Math tex="f(x)=x+\sqrt{x^2-1}" /> quand <Math tex="x\to+\infty" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Il faut montrer que <Math tex="\lim_{x\to+\infty}\big(f(x)-2x\big)=0" />. On a{" "}
                  <Math tex="f(x)-2x=\sqrt{x^2-1}-x" />, forme <Math tex="\infty-\infty" /> : on multiplie
                  par le conjugué.
                </p>
                <MathBlock tex="\sqrt{x^2-1}-x=\dfrac{(x^2-1)-x^2}{\sqrt{x^2-1}+x}=\dfrac{-1}{\sqrt{x^2-1}+x}" />
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\lim_{x\to+\infty}(\sqrt{x^2-1}+x)=+\infty" /> :{" "}
                  <Math tex="\lim_{x\to+\infty}\big(f(x)-2x\big)=0" />, donc <Math tex="y=2x" /> est bien
                  asymptote en <Math tex="+\infty" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
