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
  title: "La rotation dans le plan · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur la rotation dans le plan pour la 1ère année Baccalauréat Sciences Mathématiques : rappels sur la symétrie axiale et les angles orientés, la rotation comme composée de deux symétries axiales, définition et propriétés (isométrie, bijection réciproque, propriété fondamentale), composition de deux rotations de même centre et de centres différents, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 1",
  heroTitle: "La rotation dans le plan",
  heroSubtitle:
    "Une isométrie construite à partir de deux symétries axiales — avec un théorème central : composer deux rotations donne soit une rotation d'angle somme, soit une translation.",
  footerNote: "La rotation dans le plan · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 1.",
  sections: [
    { id: "cours-rappels", label: "Rappels" },
    { id: "cours-definition", label: "Définition" },
    { id: "cours-proprietes", label: "Propriétés" },
    { id: "cours-composition", label: "Composition" },
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
          { value: "2", label: "symétries axiales composées" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-rappels"
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
            <Math tex="R_{(\Omega,\theta)}" />
          </div>
        }
      />

      {/* ===================== I. RAPPELS ===================== */}
      <LessonSection
        id="cours-rappels"
        kicker="01 · Les deux outils qui construisent tout"
        title="Rappels : symétrie axiale, angles orientés"
        tone="light"
        description="La rotation se construit à partir de deux symétries axiales — il faut donc maîtriser leurs propriétés avant d'aller plus loin."
      >
        <CourseBlock numeral="I" title="Symétrie axiale">
          <Box title="Définition et propriétés" tone="def">
            <p>
              <Math tex="S_{(D)}(M)=M'" /> ssi <Math tex="(D)" /> est la médiatrice de <Math tex="[MM']" />{" "}
              (ou <Math tex="M'=M" /> si <Math tex="M\in(D)" />). La symétrie axiale conserve les{" "}
              <strong>distances</strong>, le <strong>milieu</strong> (et plus généralement le{" "}
              <strong>barycentre</strong>), et les <strong>angles géométriques</strong> — mais elle{" "}
              <strong>inverse</strong> les angles orientés :
            </p>
            <MathBlock tex="\big(\overrightarrow{A'B'},\overrightarrow{A'C'}\big)\equiv-\big(\overrightarrow{AB},\overrightarrow{AC}\big)\ [2\pi]" />
            <p>
              <Math tex="S_{(D)}" /> est une bijection, et sa réciproque est elle-même :{" "}
              <Math tex="S_{(D)}\circ S_{(D)}=\mathrm{Id}" />.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="II" title="Angles orientés — propriétés utiles">
          <Callout variant="success" title="À retenir">
            <div className="space-y-1.5">
              <p>
                <Math tex="\big(\vec v,\vec u\big)\equiv-\big(\vec u,\vec v\big)\ [2\pi]" />
              </p>
              <p>
                Si <Math tex="hk>0" /> : <Math tex="\big(h\vec u,k\vec v\big)\equiv\big(\vec u,\vec v\big)\ [2\pi]" />
                . Si <Math tex="hk<0" /> : <Math tex="\big(h\vec u,k\vec v\big)\equiv\pi+\big(\vec u,\vec v\big)\ [2\pi]" />
                .
              </p>
              <p>
                Pour <Math tex="(D)" /> et <Math tex="(\Delta)" /> sécantes en <Math tex="A" />, de directeurs{" "}
                <Math tex="\vec u,\vec v" />, et <Math tex="B\in(D)" />, <Math tex="C\in(\Delta)" /> :
              </p>
              <MathBlock tex="2\big(\overrightarrow{AB},\overrightarrow{AC}\big)\equiv2\big(\vec u,\vec v\big)\ [2\pi]" />
            </div>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. DÉFINITION ===================== */}
      <LessonSection
        id="cours-definition"
        kicker="02 · Composer deux symétries"
        title="Définition de la rotation"
        tone="muted"
        description="Composer deux symétries axiales d'axes sécants produit exactement une rotation — c'est la construction fondatrice du chapitre."
      >
        <CourseBlock numeral="III" title="La rotation comme composée de deux symétries axiales">
          <Callout variant="success" title="Propriété fondatrice">
            <p>
              Pour <Math tex="(\Delta)" /> et <Math tex="(\Delta')" /> sécantes en <Math tex="O" />, de
              directeurs <Math tex="\vec u,\vec v" /> avec <Math tex="(\vec u,\vec v)\equiv\alpha\,[2\pi]" />,
              l&apos;application <Math tex="S_{(\Delta')}\circ S_{(\Delta)}" /> transforme <Math tex="M" /> en{" "}
              <Math tex="M'" /> tel que :
            </p>
            <MathBlock tex="OM=OM'\qquad\text{et}\qquad\big(\overrightarrow{OM},\overrightarrow{OM'}\big)\equiv2\alpha\ [2\pi]" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Définition de la rotation">
          <Box title="Définition" tone="def">
            <p>
              La <strong className="text-foreground">rotation</strong> de centre <Math tex="\Omega" /> et
              d&apos;angle <Math tex="\theta" />, notée <Math tex="R_{(\Omega,\theta)}" />, transforme{" "}
              <Math tex="M" /> en <Math tex="M'" /> tel que :
            </p>
            <MathBlock tex="\Omega M=\Omega M'\qquad\text{et}\qquad\big(\overrightarrow{\Omega M},\overrightarrow{\Omega M'}\big)\equiv\theta\ [2\pi]" />
          </Box>
          <Callout variant="warning" title="Trois cas particuliers">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                La symétrie centrale <Math tex="S_\Omega" /> est la rotation <Math tex="R_{(\Omega,\pi)}" />.
              </li>
              <li>
                L&apos;identité est la rotation d&apos;angle nul (n&apos;importe quel point en est le centre).
              </li>
              <li>
                Si <Math tex="\theta\neq0" /> (modulo <Math tex="2\pi" />), <Math tex="\Omega" /> est le{" "}
                <strong>seul</strong> point invariant.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. PROPRIÉTÉS ===================== */}
      <LessonSection
        id="cours-proprietes"
        kicker="03 · Ce qu'une rotation conserve"
        title="Propriétés de la rotation"
        tone="light"
        description="Composée de deux isométries, la rotation hérite de toutes leurs propriétés de conservation — et regagne même les angles orientés."
      >
        <CourseBlock numeral="V" title="Isométrie et bijection">
          <Box title="Propriétés de conservation" tone="def">
            <p>La rotation conserve :</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                les <strong>distances</strong> (isométrie) : <Math tex="A'B'=AB" /> ;
              </li>
              <li>le coefficient de colinéarité, donc l&apos;alignement des points ;</li>
              <li>le milieu et, plus généralement, le barycentre d&apos;un système pondéré ;</li>
              <li>
                les angles <strong>géométriques</strong> et, à la différence de la symétrie axiale (composée
                de deux symétries : les inversions s&apos;annulent), les angles <strong>orientés</strong>.
              </li>
            </ul>
          </Box>
          <Callout variant="success" title="Bijection réciproque">
            <MathBlock tex="R_{(\Omega,\theta)}\text{ est une bijection, et }\big(R_{(\Omega,\theta)}\big)^{-1}=R_{(\Omega,-\theta)}" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="La propriété fondamentale">
          <Callout variant="success" title="À utiliser dans presque tous les exercices">
            <p>
              Si <Math tex="R_{(\Omega,\theta)}(M)=M'" /> et <Math tex="R_{(\Omega,\theta)}(N)=N'" />, alors :
            </p>
            <MathBlock tex="\big(\overrightarrow{MN},\overrightarrow{M'N'}\big)\equiv\theta\ [2\pi]" />
            <p>
              (Combinée à <Math tex="M'N'=MN" />, cette propriété montre que la rotation transforme toute
              figure en une figure superposable, tournée d&apos;un angle <Math tex="\theta" />.)
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. COMPOSITION ===================== */}
      <LessonSection
        id="cours-composition"
        kicker="04 · Le théorème central du chapitre"
        title="Composition de deux rotations"
        tone="muted"
        description="Composer deux rotations donne toujours soit une rotation, soit une translation — jamais autre chose."
      >
        <CourseBlock numeral="VII" title="Même centre : les angles s'additionnent">
          <Callout variant="success" title="Propriété">
            <MathBlock tex="R'_{(\Omega,\beta)}\circ R_{(\Omega,\alpha)}=R''_{(\Omega,\alpha+\beta)}" />
            <p>
              (En particulier, <Math tex="R_{(\Omega,-\alpha)}\circ R_{(\Omega,\alpha)}=\mathrm{Id}" />,
              retrouvant la bijection réciproque.)
            </p>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Centres différents : rotation ou translation">
          <Box title="Idée de la démonstration" tone="def">
            <p>
              En décomposant chaque rotation en deux symétries axiales partageant l&apos;axe commun{" "}
              <Math tex="(\Delta)=(O\Omega)" />, la composée <Math tex="R'\circ R" /> se réduit à la composée
              de deux symétries axiales <Math tex="S_{(\Delta_2)}\circ S_{(\Delta_1)}" />. Sa nature dépend de
              la position relative de <Math tex="(\Delta_1)" /> et <Math tex="(\Delta_2)" /> :
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                sécantes → <strong>rotation</strong> (d&apos;angle <Math tex="\alpha+\beta" />) ;
              </li>
              <li>
                parallèles → <strong>translation</strong>.
              </li>
            </ul>
          </Box>
          <Callout variant="success" title="Théorème">
            <p>
              Soient <Math tex="R_{(O,\alpha)}" /> et <Math tex="R'_{(\Omega,\beta)}" /> deux rotations avec{" "}
              <Math tex="\Omega\neq O" />.
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Si <Math tex="\alpha+\beta\neq2k\pi" /> : <Math tex="R'\circ R" /> est une{" "}
                <strong>rotation</strong> d&apos;angle <Math tex="\alpha+\beta" /> (de centre à déterminer).
              </li>
              <li>
                Si <Math tex="\alpha+\beta=2k\pi" /> : <Math tex="R'\circ R" /> est une{" "}
                <strong>translation</strong>.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · La rotation dans le plan"
        tone="light"
        description="6 exercices corrigés couvrant la définition, la propriété fondamentale, la bijection réciproque, et les deux cas de composition de deux rotations."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre rotation dans le plan est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Rotation et carré direct"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                <Math tex="ABCD" /> un carré direct de centre <Math tex="O" />. Soit{" "}
                <Math tex="R=R_{(O,\frac\pi2)}" />. Montrer que <Math tex="R(A)=B" />,{" "}
                <Math tex="R(B)=C" />, <Math tex="R(C)=D" /> et <Math tex="R(D)=A" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Comme <Math tex="ABCD" /> est un carré de centre <Math tex="O" /> : <Math tex="OA=OB=OC=OD" />
                  , et comme il est <strong>direct</strong> (sens trigonométrique), les quatre sommets sont
                  régulièrement espacés d&apos;un quart de tour :
                </p>
                <MathBlock tex="\big(\overrightarrow{OA},\overrightarrow{OB}\big)\equiv\big(\overrightarrow{OB},\overrightarrow{OC}\big)\equiv\big(\overrightarrow{OC},\overrightarrow{OD}\big)\equiv\big(\overrightarrow{OD},\overrightarrow{OA}\big)\equiv\dfrac\pi2\ [2\pi]" />
                <p className="font-semibold text-green-700">
                  D&apos;après la définition de <Math tex="R_{(O,\frac\pi2)}" /> (même distance au centre et
                  angle <Math tex="\dfrac\pi2" /> depuis <Math tex="O" />), on a exactement{" "}
                  <Math tex="R(A)=B" />, <Math tex="R(B)=C" />, <Math tex="R(C)=D" />, <Math tex="R(D)=A" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Composition de deux rotations de même centre"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="R_1=R_{(\Omega,\frac\pi3)}" /> et <Math tex="R_2=R_{(\Omega,\frac\pi4)}" />.
                Déterminer la nature et les éléments caractéristiques de <Math tex="R_2\circ R_1" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="R_1" /> et <Math tex="R_2" /> ont le <strong>même centre</strong>{" "}
                  <Math tex="\Omega" /> :
                </p>
                <MathBlock tex="R_2\circ R_1=R_{\left(\Omega,\frac\pi3+\frac\pi4\right)}" />
                <p className="font-semibold text-green-700">
                  <Math tex="R_2\circ R_1" /> est la rotation de centre <Math tex="\Omega" /> et d&apos;angle{" "}
                  <Math tex="\dfrac{7\pi}{12}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Composition, centres différents, cas rotation"
            itemsLabel="1 identification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="R=R_{\left(O,\frac{2\pi}3\right)}" /> et{" "}
                <Math tex="R'=R'_{\left(\Omega,\frac\pi3\right)}" /> avec <Math tex="\Omega\neq O" />.
                Déterminer la nature de <Math tex="R'\circ R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\alpha+\beta=\dfrac{2\pi}3+\dfrac\pi3=\pi\neq2k\pi" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="R'\circ R" /> est donc une <strong>rotation</strong> d&apos;angle{" "}
                  <Math tex="\pi" /> — c&apos;est-à-dire une <strong>symétrie centrale</strong> (de centre à
                  déterminer par construction).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Composition, centres différents, cas translation"
            itemsLabel="1 identification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="R=R_{\left(O,\frac\pi2\right)}" /> et{" "}
                <Math tex="R'=R'_{\left(\Omega,-\frac\pi2\right)}" /> avec <Math tex="\Omega\neq O" />.
                Déterminer la nature de <Math tex="R'\circ R" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\alpha+\beta=\dfrac\pi2-\dfrac\pi2=0=2\times0\times\pi" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="\alpha+\beta\equiv0\ [2\pi]" />, <Math tex="R'\circ R" /> est une{" "}
                  <strong>translation</strong>.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Application de la propriété fondamentale"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="R" /> une rotation d&apos;angle <Math tex="\dfrac\pi3" /> telle que{" "}
                <Math tex="R(A)=B" /> et <Math tex="R(C)=D" />. Montrer que <Math tex="AC=BD" /> et que{" "}
                <Math tex="(AC)" /> et <Math tex="(BD)" /> font un angle de <Math tex="\dfrac\pi3" /> (au sens
                des angles orientés).
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="R" /> est une isométrie : comme <Math tex="R(A)=B" /> et <Math tex="R(C)=D" />,
                  la distance entre <Math tex="A" /> et <Math tex="C" /> est conservée :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="AC=BD" />.
                </p>
                <p>
                  D&apos;après la <strong>propriété fondamentale</strong> de la rotation (appliquée à{" "}
                  <Math tex="M=A,\ N=C,\ M'=B,\ N'=D" />) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\big(\overrightarrow{AC},\overrightarrow{BD}\big)\equiv\dfrac\pi3\ [2\pi]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Bijection réciproque"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Montrer que si <Math tex="R_{(\Omega,\theta)}(M)=M'" />, alors{" "}
                <Math tex="R_{(\Omega,-\theta)}(M')=M" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Par définition, <Math tex="R_{(\Omega,\theta)}(M)=M'" /> signifie :
                </p>
                <MathBlock tex="\Omega M=\Omega M'\qquad\text{et}\qquad\big(\overrightarrow{\Omega M},\overrightarrow{\Omega M'}\big)\equiv\theta\ [2\pi]" />
                <p>
                  En passant à l&apos;angle opposé (propriété de l&apos;antisymétrie des angles orientés) :
                </p>
                <MathBlock tex="\Omega M'=\Omega M\qquad\text{et}\qquad\big(\overrightarrow{\Omega M'},\overrightarrow{\Omega M}\big)\equiv-\theta\ [2\pi]" />
                <p className="font-semibold text-green-700">
                  C&apos;est exactement la définition de <Math tex="R_{(\Omega,-\theta)}(M')=M" />. Donc{" "}
                  <Math tex="\big(R_{(\Omega,\theta)}\big)^{-1}=R_{(\Omega,-\theta)}" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
