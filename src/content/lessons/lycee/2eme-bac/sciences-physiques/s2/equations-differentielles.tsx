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
  title: "Équations différentielles · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet des équations différentielles pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : équations y'=ay+b, équations y''+ay'+by=0 et leur équation caractéristique, solutions générales et particulières avec conditions initiales, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 2",
  heroTitle: "Équations différentielles",
  heroSubtitle:
    "Trouver toutes les fonctions qui vérifient une relation entre elles-mêmes et leurs dérivées — premier ordre puis second ordre à coefficients constants.",
  footerNote: "Équations différentielles · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 2.",
  sections: [
    { id: "cours-ordre1", label: "Premier ordre" },
    { id: "cours-ordre2", label: "Second ordre" },
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
          { value: "12", label: "exercices corrigés" },
          { value: "2", label: "types d'équations" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-ordre1"
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
          <div className="relative flex select-none items-center gap-2 font-display text-6xl font-extrabold text-white sm:text-7xl">
            <Math tex="y''+ay'+by=0" />
          </div>
        }
      />

      {/* ===================== I. PREMIER ORDRE ===================== */}
      <LessonSection
        id="cours-ordre1"
        kicker="01 · Une équation, une famille de fonctions"
        title="Équations différentielles du premier ordre : y'=ay+b"
        tone="light"
        description="Résoudre une équation différentielle, c'est trouver toutes les fonctions qui la vérifient — pas une seule."
      >
        <CourseBlock numeral="I" title="Vocabulaire">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">équation différentielle</strong> est une équation dont
            l&apos;inconnue est une fonction <Math tex="y" />, reliant <Math tex="y" /> à ses dérivées. L&apos;écriture{" "}
            <Math tex="y'=ay+b" /> (<Math tex="a,b\in\mathbb R" />) est une équation différentielle linéaire du
            premier ordre à coefficients constants. Une fonction dérivable <Math tex="g" /> qui vérifie{" "}
            <Math tex="g'(x)=ag(x)+b" /> pour tout <Math tex="x" /> est appelée <strong>solution</strong> de
            l&apos;équation. <strong>Résoudre</strong> l&apos;équation, c&apos;est déterminer l&apos;ensemble de{" "}
            <em>toutes</em> ses solutions.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Solution générale">
          <Callout variant="success" title="Théorème">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="a\neq0" /> : les solutions de <Math tex="(E):y'=ay+b" /> sont exactement les fonctions{" "}
                <Math tex="f(x)=Ce^{ax}-\dfrac{b}{a}" />, <Math tex="C\in\mathbb R" />.
              </li>
              <li>
                Si <Math tex="a=0" /> et <Math tex="b\neq0" /> (l&apos;équation est <Math tex="y'=b" />) : les
                solutions sont <Math tex="f(x)=bx+C" />, <Math tex="C\in\mathbb R" />.
              </li>
              <li>
                Si <Math tex="a=0" /> et <Math tex="b=0" /> (l&apos;équation est <Math tex="y'=0" />) : les solutions
                sont les fonctions constantes <Math tex="f(x)=C" />, <Math tex="C\in\mathbb R" />.
              </li>
            </ul>
          </Callout>
          <Box title="Exemple" tone="prop">
            Résoudre <Math tex="y'=3y-6" /> : ici <Math tex="a=3" />, <Math tex="b=-6" />, donc{" "}
            <Math tex="f(x)=Ce^{3x}-\dfrac{-6}3=Ce^{3x}+2" />, <Math tex="C\in\mathbb R" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="III" title="Solution avec condition initiale">
          <Box title="Propriété" tone="def">
            Pour <Math tex="(E):y'=ay+b" /> (<Math tex="a\neq0" />) et un couple <Math tex="(x_0,y_0)" /> donné, il
            existe une <strong>unique</strong> solution <Math tex="f" /> de <Math tex="(E)" /> telle que{" "}
            <Math tex="f(x_0)=y_0" /> : on détermine la constante <Math tex="C" /> grâce à cette condition.
          </Box>
          <Box title="Exemple" tone="prop">
            Déterminer la solution de <Math tex="y'=3y-6" /> telle que <Math tex="f(0)=5" /> : on a{" "}
            <Math tex="f(x)=Ce^{3x}+2" />, donc <Math tex="f(0)=C+2=5\Rightarrow C=3" />. D&apos;où{" "}
            <Math tex="f(x)=3e^{3x}+2" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. SECOND ORDRE ===================== */}
      <LessonSection
        id="cours-ordre2"
        kicker="02 · Une dérivée seconde entre en jeu"
        title="Équations différentielles du second ordre : y''+ay'+by=0"
        tone="muted"
        description="La nature des solutions dépend entièrement du signe du discriminant de l'équation caractéristique."
      >
        <CourseBlock numeral="IV" title="Équation caractéristique">
          <Box title="Définition" tone="def">
            L&apos;équation <Math tex="(E):y''+ay'+by=0" /> (<Math tex="a,b\in\mathbb R" />) est appelée équation
            différentielle linéaire du second ordre à coefficients constants, sans second membre. On lui associe
            l&apos;<strong>équation caractéristique</strong> <Math tex="(E_c):r^2+ar+b=0" />, d&apos;inconnue{" "}
            <Math tex="r\in\mathbb C" />, de discriminant <Math tex="\Delta=a^2-4b" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="V" title="Solution générale selon le signe de Δ">
          <Callout variant="success" title="Théorème">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="\Delta>0" /> : <Math tex="(E_c)" /> a deux racines réelles distinctes{" "}
                <Math tex="r_1,r_2" />. Les solutions de <Math tex="(E)" /> sont{" "}
                <Math tex="f(x)=C_1e^{r_1x}+C_2e^{r_2x}" />, <Math tex="C_1,C_2\in\mathbb R" />.
              </li>
              <li>
                Si <Math tex="\Delta=0" /> : <Math tex="(E_c)" /> a une racine double{" "}
                <Math tex="r_0=-\dfrac{a}2" />. Les solutions de <Math tex="(E)" /> sont{" "}
                <Math tex="f(x)=(C_1x+C_2)e^{r_0x}" />, <Math tex="C_1,C_2\in\mathbb R" />.
              </li>
              <li>
                Si <Math tex="\Delta<0" /> : <Math tex="(E_c)" /> a deux racines complexes conjuguées{" "}
                <Math tex="r=p\pm iq" /> (avec <Math tex="p=-\dfrac a2" />, <Math tex="q=\dfrac{\sqrt{-\Delta}}2" />).
                Les solutions de <Math tex="(E)" /> sont{" "}
                <Math tex="f(x)=\big(C_1\cos(qx)+C_2\sin(qx)\big)e^{px}" />, <Math tex="C_1,C_2\in\mathbb R" />.
              </li>
            </ul>
          </Callout>
          <Box title="Exemple" tone="prop">
            Résoudre <Math tex="y''-5y'+6y=0" /> : équation caractéristique <Math tex="r^2-5r+6=0" />,{" "}
            <Math tex="\Delta=25-24=1>0" />, racines <Math tex="r_1=2" />, <Math tex="r_2=3" />. Solutions :{" "}
            <Math tex="f(x)=C_1e^{2x}+C_2e^{3x}" />.
          </Box>
          <Callout variant="warning" title="Condition initiale à deux données">
            Une solution particulière de <Math tex="(E)" /> vérifiant <Math tex="f(x_0)=y_0" /> et{" "}
            <Math tex="f'(x_0)=y_0'" /> est unique : on forme un système de deux équations à deux inconnues{" "}
            <Math tex="(C_1,C_2)" /> en évaluant <Math tex="f" /> et <Math tex="f'" /> en <Math tex="x_0" />.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="03 · À toi de jouer"
        title="Exercices · Équations différentielles"
        tone="light"
        description="12 exercices corrigés : équations du premier ordre, second ordre dans les trois cas du discriminant, avec ou sans conditions initiales."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre équations différentielles est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Premier ordre, cas général"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre l&apos;équation différentielle <Math tex="(E):y'=-2y+4" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Ici <Math tex="a=-2" /> et <Math tex="b=4" />, donc les solutions sont{" "}
                  <Math tex="f(x)=Ce^{-2x}-\dfrac4{-2}=Ce^{-2x}+2" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble des solutions de <Math tex="(E)" /> est <Math tex="\{x\mapsto Ce^{-2x}+2\,;\,C\in\mathbb R\}" />
                  .
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Premier ordre avec condition initiale"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer la solution <Math tex="\varphi" /> de <Math tex="(E):y'=-2y+4" /> telle que{" "}
                <Math tex="\varphi(0)=-1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;après l&apos;exercice précédent, <Math tex="\varphi(x)=Ce^{-2x}+2" />.
                </p>
                <p>
                  <Math tex="\varphi(0)=C+2=-1\Rightarrow C=-3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\varphi(x)=-3e^{-2x}+2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Cas particulier a=0"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y'=7" />, puis déterminer la solution <Math tex="g" /> telle que{" "}
                <Math tex="g(1)=2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Ici <Math tex="a=0" /> et <Math tex="b=7\neq0" />, donc les solutions sont{" "}
                  <Math tex="f(x)=7x+C" />, <Math tex="C\in\mathbb R" />.
                </p>
                <p>
                  <Math tex="g(1)=7+C=2\Rightarrow C=-5" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="g(x)=7x-5" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Équation à réécrire sous forme y'=ay+b"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):2y'+4y=3" />, puis déterminer la solution <Math tex="\varphi" /> telle que{" "}
                <Math tex="\varphi(0)=2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On divise par <Math tex="2" /> : <Math tex="y'=-2y+\dfrac32" />, donc <Math tex="a=-2" /> et{" "}
                  <Math tex="b=\dfrac32" />.
                </p>
                <p>
                  Les solutions sont <Math tex="f(x)=Ce^{-2x}-\dfrac{3/2}{-2}=Ce^{-2x}+\dfrac34" />.
                </p>
                <p>
                  <Math tex="\varphi(0)=C+\dfrac34=2\Rightarrow C=\dfrac54" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\varphi(x)=\dfrac54e^{-2x}+\dfrac34" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Second ordre, Δ&gt;0"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''-7y'+12y=0" />, puis déterminer la solution <Math tex="f" /> telle que{" "}
                <Math tex="f(0)=0" /> et <Math tex="f'(0)=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2-7r+12=0" />, <Math tex="\Delta=49-48=1>0" />, racines{" "}
                  <Math tex="r_1=\dfrac{7-1}2=3" /> et <Math tex="r_2=\dfrac{7+1}2=4" />.
                </p>
                <p>
                  Solutions : <Math tex="f(x)=C_1e^{3x}+C_2e^{4x}" />, donc{" "}
                  <Math tex="f'(x)=3C_1e^{3x}+4C_2e^{4x}" />.
                </p>
                <p>
                  <Math tex="f(0)=C_1+C_2=0" /> et <Math tex="f'(0)=3C_1+4C_2=1" />. De la première,{" "}
                  <Math tex="C_2=-C_1" />, d&apos;où <Math tex="3C_1-4C_1=1\Rightarrow C_1=-1" />,{" "}
                  <Math tex="C_2=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=-e^{3x}+e^{4x}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Second ordre, Δ=0"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''+2y'+y=0" />, puis déterminer la solution <Math tex="f" /> telle que{" "}
                <Math tex="f(0)=0" /> et <Math tex="f'(0)=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2+2r+1=0" />, soit <Math tex="(r+1)^2=0" />,{" "}
                  <Math tex="\Delta=0" />, racine double <Math tex="r_0=-1" />.
                </p>
                <p>
                  Solutions : <Math tex="f(x)=(C_1x+C_2)e^{-x}" />, donc{" "}
                  <Math tex="f'(x)=C_1e^{-x}-(C_1x+C_2)e^{-x}=\big(C_1-C_1x-C_2\big)e^{-x}" />.
                </p>
                <p>
                  <Math tex="f(0)=C_2=0" />. <Math tex="f'(0)=C_1-C_2=1\Rightarrow C_1=1" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=xe^{-x}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Second ordre, Δ&lt;0"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''-4y'+13y=0" />, puis déterminer la solution <Math tex="f" /> telle que{" "}
                <Math tex="f(0)=0" /> et <Math tex="f'(0)=1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2-4r+13=0" />, <Math tex="\Delta=16-52=-36<0" />, racines{" "}
                  <Math tex="r=\dfrac{4\pm6i}2=2\pm3i" />. Donc <Math tex="p=2" />, <Math tex="q=3" />.
                </p>
                <p>
                  Solutions : <Math tex="f(x)=\big(C_1\cos3x+C_2\sin3x\big)e^{2x}" />, donc{" "}
                  <Math tex="f'(x)=e^{2x}\Big(2(C_1\cos3x+C_2\sin3x)+(-3C_1\sin3x+3C_2\cos3x)\Big)" />.
                </p>
                <p>
                  <Math tex="f(0)=C_1=0" />. <Math tex="f'(0)=2C_1+3C_2=1" />, donc avec{" "}
                  <Math tex="C_1=0" /> : <Math tex="C_2=\dfrac13" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=\dfrac13e^{2x}\sin3x" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Δ&lt;0 avec p=0"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''+2y=0" />, puis déterminer la solution <Math tex="f" /> telle que{" "}
                <Math tex="f(0)=1" /> et <Math tex="f'(0)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2+2=0" />, <Math tex="\Delta=-8<0" />, racines{" "}
                  <Math tex="r=\pm i\sqrt2" />. Donc <Math tex="p=0" />, <Math tex="q=\sqrt2" />.
                </p>
                <p>
                  Solutions : <Math tex="f(x)=C_1\cos(\sqrt2x)+C_2\sin(\sqrt2x)" />, donc{" "}
                  <Math tex="f'(x)=-\sqrt2C_1\sin(\sqrt2x)+\sqrt2C_2\cos(\sqrt2x)" />.
                </p>
                <p>
                  <Math tex="f(0)=C_1=1" />. <Math tex="f'(0)=\sqrt2C_2=0\Rightarrow C_2=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=\cos(\sqrt2x)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Second ordre, deux racines réelles"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y''+y'-6y=0" />, puis déterminer la solution <Math tex="f" /> telle que{" "}
                <Math tex="f(0)=5" /> et <Math tex="f'(0)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Équation caractéristique : <Math tex="r^2+r-6=0" />, <Math tex="\Delta=1+24=25>0" />, racines{" "}
                  <Math tex="r=\dfrac{-1\pm5}2" />, soit <Math tex="r_1=2" /> et <Math tex="r_2=-3" />.
                </p>
                <p>
                  Solutions : <Math tex="f(x)=C_1e^{2x}+C_2e^{-3x}" />, donc{" "}
                  <Math tex="f'(x)=2C_1e^{2x}-3C_2e^{-3x}" />.
                </p>
                <p>
                  <Math tex="f(0)=C_1+C_2=5" /> et <Math tex="f'(0)=2C_1-3C_2=0\Rightarrow C_1=\dfrac32C_2" />.
                </p>
                <p>
                  En remplaçant : <Math tex="\dfrac32C_2+C_2=5\Rightarrow\dfrac52C_2=5\Rightarrow C_2=2" />, donc{" "}
                  <Math tex="C_1=3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=3e^{2x}+2e^{-3x}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Vérifier une solution puis conclure"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Vérifier que <Math tex="g(x)=xe^{2x}" /> est solution de <Math tex="(E):y''-4y'+4y=0" />, puis
                donner l&apos;ensemble de toutes les solutions de <Math tex="(E)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="g'(x)=e^{2x}+2xe^{2x}=(1+2x)e^{2x}" /> et{" "}
                  <Math tex="g''(x)=2e^{2x}+2(1+2x)e^{2x}=(4+4x)e^{2x}" />.
                </p>
                <p>
                  <Math tex="g''(x)-4g'(x)+4g(x)=(4+4x)e^{2x}-4(1+2x)e^{2x}+4xe^{2x}=\big(4+4x-4-8x+4x\big)e^{2x}=0" />
                  . Donc <Math tex="g" /> est bien solution.
                </p>
                <p>
                  Équation caractéristique de <Math tex="(E)" /> : <Math tex="r^2-4r+4=0" />, soit{" "}
                  <Math tex="(r-2)^2=0" />, racine double <Math tex="r_0=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble des solutions de <Math tex="(E)" /> est{" "}
                  <Math tex="\{x\mapsto(C_1x+C_2)e^{2x}\,;\,C_1,C_2\in\mathbb R\}" /> (qui contient bien{" "}
                  <Math tex="g" /> avec <Math tex="C_1=1" />, <Math tex="C_2=0" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Premier ordre, modèle de refroidissement"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre <Math tex="(E):y'+y=2" />, puis déterminer la solution <Math tex="f" /> telle que{" "}
                <Math tex="f(0)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On réécrit <Math tex="(E)" /> sous la forme <Math tex="y'=-y+2" /> : <Math tex="a=-1" />,{" "}
                  <Math tex="b=2" />.
                </p>
                <p>
                  Solutions : <Math tex="f(x)=Ce^{-x}-\dfrac2{-1}=Ce^{-x}+2" />.
                </p>
                <p>
                  <Math tex="f(0)=C+2=0\Rightarrow C=-2" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="f(x)=-2e^{-x}+2=2\big(1-e^{-x}\big)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Reconnaître le bon cas à partir du discriminant"
            itemsLabel="1 étude comparée"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Sans chercher les racines explicitement, déterminer dans chaque cas le signe de{" "}
                <Math tex="\Delta" /> puis la forme de la solution générale de : 1){" "}
                <Math tex="y''+2y'+2y=0" /> ; 2) <Math tex="y''+4y'+4y=0" /> ; 3) <Math tex="y''-y'-2y=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="\Delta=4-8=-4<0" /> : racines <Math tex="r=-1\pm i" /> (<Math tex="p=-1" />,{" "}
                  <Math tex="q=1" />). Solutions :{" "}
                  <Math tex="f(x)=(C_1\cos x+C_2\sin x)e^{-x}" />.
                </p>
                <p>
                  2) <Math tex="\Delta=16-16=0" /> : racine double <Math tex="r_0=-2" />. Solutions :{" "}
                  <Math tex="f(x)=(C_1x+C_2)e^{-2x}" />.
                </p>
                <p className="font-semibold text-green-700">
                  3) <Math tex="\Delta=1+8=9>0" /> : racines <Math tex="r_1=\dfrac{1-3}2=-1" /> et{" "}
                  <Math tex="r_2=\dfrac{1+3}2=2" />. Solutions : <Math tex="f(x)=C_1e^{-x}+C_2e^{2x}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
