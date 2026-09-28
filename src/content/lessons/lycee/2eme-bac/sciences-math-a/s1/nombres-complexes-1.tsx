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
  title: "Nombres complexes (Partie 1) · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet et approfondi des nombres complexes (partie 1) pour la 2ème année Baccalauréat Sciences Mathématiques (Semestre 1) : structure de corps de ℂ, affixes, alignement, module, argument, forme trigonométrique, racines carrées et interprétation géométrique des arguments (angles orientés, perpendicularité, cocyclicité), avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Math · Semestre 1",
  heroTitle: "Nombres complexes (Partie 1)",
  heroSubtitle:
    "Au-delà de la forme algébrique : structure de corps, affixes et alignement, module et argument, racines carrées, et l'interprétation géométrique des arguments.",
  footerNote:
    "Nombres complexes (Partie 1) · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 1.",
  sections: [
    { id: "cours-algebrique", label: "Forme algébrique" },
    { id: "cours-geometrique", label: "Affixes & module" },
    { id: "cours-argument", label: "Argument & forme trig." },
    { id: "cours-angles", label: "Angles orientés" },
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
          { value: "8", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-algebrique"
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
            <Math tex="\mathbb C" />
          </div>
        }
      />

      {/* ===================== I. FORME ALGÉBRIQUE ===================== */}
      <LessonSection
        id="cours-algebrique"
        kicker="01 · Un corps qui prolonge ℝ"
        title="L'ensemble ℂ, opérations et conjugué"
        tone="light"
        description="ℂ est construit pour que toute équation du second degré ait une solution. On y retrouve toutes les règles de calcul de ℝ, mais pas sa relation d'ordre."
      >
        <CourseBlock numeral="I" title="L'ensemble ℂ et la forme algébrique">
          <Box title="Définition (admise)" tone="def">
            Il existe un ensemble, noté <Math tex="\mathbb C" />, muni d&apos;une addition et d&apos;une
            multiplication qui prolongent celles de <Math tex="\mathbb R" />, tel que : <Math tex="\mathbb R\subset\mathbb C" />
            ; il existe dans <Math tex="\mathbb C" /> un nombre noté <Math tex="i" /> vérifiant{" "}
            <Math tex="i^2=-1" /> ; et tout nombre complexe <Math tex="z" /> s&apos;écrit{" "}
            <strong>de façon unique</strong> <Math tex="z=a+ib" /> avec <Math tex="a,b\in\mathbb R" />.
          </Box>
          <Callout variant="success" title="Vocabulaire">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Cette écriture s&apos;appelle la <strong>forme algébrique</strong> de <Math tex="z" /> ;{" "}
                <Math tex="a=\operatorname{Re}(z)" /> est sa <strong>partie réelle</strong>,{" "}
                <Math tex="b=\operatorname{Im}(z)" /> sa <strong>partie imaginaire</strong>.
              </li>
              <li>
                <Math tex="z\in\mathbb R\iff\operatorname{Im}(z)=0" /> ; <Math tex="z" /> est{" "}
                <strong>imaginaire pur</strong> (<Math tex="z\in i\mathbb R" />)<Math tex="\iff\operatorname{Re}(z)=0" />
                .
              </li>
              <li>
                Unicité : <Math tex="a+ib=a'+ib' \iff (a=a' \text{ et } b=b')" />. En particulier{" "}
                <Math tex="a+ib=0 \iff (a=0 \text{ et } b=0)" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Structure de corps de ℂ">
          <Box title="Définition" tone="def">
            Pour <Math tex="z=a+ib" /> et <Math tex="z'=a'+ib'" /> :
          </Box>
          <MathBlock tex="z+z'=(a+a')+i(b+b') \qquad z\times z'=(aa'-bb')+i(ab'+a'b)" />
          <Callout variant="success" title="Propriétés algébriques">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="(\mathbb C,+)" /> est un groupe commutatif : associativité, commutativité,{" "}
                <Math tex="0" /> neutre, tout <Math tex="z" /> a un opposé <Math tex="-z" />.
              </li>
              <li>
                <Math tex="(\mathbb C^*,\times)" /> est un groupe commutatif : associativité, commutativité,{" "}
                <Math tex="1" /> neutre, tout <Math tex="z\neq0" /> a un inverse <Math tex="z^{-1}=\dfrac1z" />.
              </li>
              <li>
                La multiplication est distributive par rapport à l&apos;addition : on dit que{" "}
                <Math tex="(\mathbb C,+,\times)" /> est un <strong>corps commutatif</strong>. Toutes les règles de
                calcul connues dans <Math tex="\mathbb R" /> (identités remarquables, puissances, binôme de
                Newton...) restent valables dans <Math tex="\mathbb C" />.
              </li>
            </ul>
          </Callout>
          <Callout variant="warning" title="Attention : ℂ n'est pas ordonné">
            Contrairement à <Math tex="\mathbb R" />, il n&apos;existe <strong>pas</strong> de relation d&apos;ordre
            sur <Math tex="\mathbb C" /> compatible avec les opérations. Des écritures comme{" "}
            <Math tex="z\leqslant z'" /> n&apos;ont donc <strong>aucun sens</strong> pour des complexes non réels.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="III" title="Le conjugué d'un nombre complexe">
          <Box title="Définition" tone="def">
            Le <strong className="text-foreground">conjugué</strong> de <Math tex="z=a+ib" /> est{" "}
            <Math tex="\bar z=a-ib" />.
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="z\bar z=a^2+b^2" /> (réel positif) ; <Math tex="\overline{\bar z}=z" />.
              </li>
              <li>
                <Math tex="z+\bar z=2\operatorname{Re}(z)" /> ; <Math tex="z-\bar z=2i\operatorname{Im}(z)" />.
              </li>
              <li>
                <Math tex="\overline{z+z'}=\bar z+\bar z'" /> ; <Math tex="\overline{zz'}=\bar z\,\bar z'" /> ;{" "}
                <Math tex="\overline{z^n}=\bar z^{\,n}" /> ; <Math tex="\overline{\left(\dfrac{z}{z'}\right)}=\dfrac{\bar z}{\bar z'}" />
                .
              </li>
              <li>
                <Math tex="z\in\mathbb R\iff z=\bar z" /> ; <Math tex="z" /> imaginaire pur{" "}
                <Math tex="\iff z=-\bar z" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. AFFIXES, ALIGNEMENT, MODULE ===================== */}
      <LessonSection
        id="cours-geometrique"
        kicker="02 · Un point pour chaque nombre"
        title="Affixes, alignement et module"
        tone="muted"
        description="Chaque nombre complexe devient un point (ou un vecteur) du plan. L'alignement se lit alors sur un simple quotient, et la distance devient un module."
      >
        <CourseBlock numeral="IV" title="Affixe d'un point, d'un vecteur">
          <Box title="Définition" tone="def">
            Le plan est muni d&apos;un repère orthonormé <Math tex="(O,\vec u,\vec v)" />. À{" "}
            <Math tex="z=a+ib" /> on associe le point <Math tex="M(a,b)" />, son <strong>image</strong>, et le
            vecteur <Math tex="\vec w(a,b)" />. Réciproquement, <Math tex="z" /> est l&apos;
            <strong>affixe</strong> de <Math tex="M" /> (noté <Math tex="z=\operatorname{aff}(M)" />) et de{" "}
            <Math tex="\vec w" />.
          </Box>
          <Callout variant="success" title="Opérations sur les affixes">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\operatorname{aff}(\overrightarrow{AB})=z_B-z_A" /> ;{" "}
                <Math tex="\operatorname{aff}(\vec u+\vec v)=\operatorname{aff}(\vec u)+\operatorname{aff}(\vec v)" />
                .
              </li>
              <li>
                Milieu <Math tex="I" /> de <Math tex="[AB]" /> : <Math tex="z_I=\dfrac{z_A+z_B}{2}" />.
              </li>
              <li>
                Barycentre <Math tex="G" /> de <Math tex="\{(A,\alpha);(B,\beta)\}" /> (
                <Math tex="\alpha+\beta\neq0" />) : <Math tex="z_G=\dfrac{\alpha z_A+\beta z_B}{\alpha+\beta}" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="V" title="Condition complexe d'alignement">
          <Box title="Propriété" tone="prop">
            Soient <Math tex="A(a)" />, <Math tex="B(b)" />, <Math tex="C(c)" /> trois points{" "}
            <strong>distincts</strong>. Les points <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> sont{" "}
            <strong>alignés</strong> si et seulement si :
          </Box>
          <MathBlock tex="\dfrac{c-a}{b-a}\in\mathbb R" />
          <Callout variant="info" title="Pourquoi ?">
            <Math tex="A,B,C" /> alignés <Math tex="\iff" /> il existe <Math tex="k\in\mathbb R" /> tel que{" "}
            <Math tex="\overrightarrow{AC}=k\,\overrightarrow{AB}" />, c&apos;est-à-dire{" "}
            <Math tex="c-a=k(b-a)" />, soit <Math tex="\dfrac{c-a}{b-a}=k\in\mathbb R" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Module d'un nombre complexe">
          <Box title="Définition" tone="def">
            Le <strong className="text-foreground">module</strong> de <Math tex="z=a+ib" /> est{" "}
            <Math tex="|z|=\sqrt{z\bar z}=\sqrt{a^2+b^2}\geqslant0" />. Géométriquement,{" "}
            <Math tex="|z|=OM" />, et pour <Math tex="A(z_A)" />, <Math tex="B(z_B)" /> :{" "}
            <Math tex="AB=|z_B-z_A|" />.
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="|z|=0\iff z=0" /> ; <Math tex="|\bar z|=|z|=|-z|" />.
              </li>
              <li>
                <Math tex="|zz'|=|z||z'|" /> ; <Math tex="\left|\dfrac{z}{z'}\right|=\dfrac{|z|}{|z'|}" /> (
                <Math tex="z'\neq0" />) ; <Math tex="|z^n|=|z|^n" />.
              </li>
              <li>
                <strong>Inégalité triangulaire</strong> : <Math tex="|z+z'|\leqslant|z|+|z'|" />, avec égalité ssi{" "}
                <Math tex="z" /> et <Math tex="z'" /> sont « positivement colinéaires ».
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. ARGUMENT & FORME TRIGONOMÉTRIQUE ===================== */}
      <LessonSection
        id="cours-argument"
        kicker="03 · La direction d'un nombre complexe"
        title="Argument, forme trigonométrique et racines carrées"
        tone="light"
        description="Module et argument déterminent entièrement un nombre complexe non nul : c'est la forme trigonométrique, où multiplier revient à additionner des angles."
      >
        <CourseBlock numeral="VII" title="Argument d'un nombre complexe non nul">
          <Box title="Définition" tone="def">
            Pour <Math tex="z\neq0" /> d&apos;image <Math tex="M" />, un argument de <Math tex="z" /> est une
            mesure de l&apos;angle orienté <Math tex="(\vec u,\overrightarrow{OM})" />, noté{" "}
            <Math tex="\arg(z)\equiv\theta\ [2\pi]" />. Le nombre <Math tex="0" /> n&apos;a pas d&apos;argument.
          </Box>
          <Callout variant="warning" title="Cas particuliers">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="z\in\mathbb R_+^*\iff\arg(z)\equiv0\ [2\pi]" /> ;{" "}
                <Math tex="z\in\mathbb R_-^*\iff\arg(z)\equiv\pi\ [2\pi]" />.
              </li>
              <li>
                <Math tex="z\in i\mathbb R_+^*\iff\arg(z)\equiv\dfrac{\pi}{2}\ [2\pi]" /> ;{" "}
                <Math tex="z\in i\mathbb R_-^*\iff\arg(z)\equiv-\dfrac{\pi}{2}\ [2\pi]" />.
              </li>
            </ul>
          </Callout>
          <Callout variant="success" title="Règles de calcul à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="\arg(\bar z)\equiv-\arg(z)\ [2\pi]" /> ; <Math tex="\arg(-z)\equiv\arg(z)+\pi\ [2\pi]" />.
              </li>
              <li>
                <Math tex="\arg(zz')\equiv\arg(z)+\arg(z')\ [2\pi]" /> ;{" "}
                <Math tex="\arg(z^n)\equiv n\arg(z)\ [2\pi]" />.
              </li>
              <li>
                <Math tex="\arg\!\left(\dfrac1z\right)\equiv-\arg(z)\ [2\pi]" /> ;{" "}
                <Math tex="\arg\!\left(\dfrac{z}{z'}\right)\equiv\arg(z)-\arg(z')\ [2\pi]" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Forme trigonométrique et formule de Moivre">
          <Box title="Propriété" tone="prop">
            Tout <Math tex="z\neq0" /> s&apos;écrit, avec <Math tex="r=|z|" /> et <Math tex="\theta=\arg(z)" /> :
          </Box>
          <MathBlock tex="z=r(\cos\theta+i\sin\theta)" />
          <Callout variant="info" title="Notation [r,θ] et règles de calcul">
            <p>
              On note parfois <Math tex="z=[r,\theta]" />. Avec <Math tex="z=[r,\theta]" /> et{" "}
              <Math tex="z'=[r',\theta']" /> :
            </p>
            <div className="mt-1.5 space-y-1">
              <p>
                <Math tex="zz'=[rr',\theta+\theta'] \qquad \dfrac{1}{z}=\left[\dfrac1r,-\theta\right] \qquad z^n=[r^n,n\theta]" />
              </p>
            </div>
          </Callout>
          <Box title="Formule de Moivre" tone="prop">
            Pour tout <Math tex="n\in\mathbb Z" /> :{" "}
            <Math tex="(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)" />, d&apos;où{" "}
            <Math tex="z^n=r^n\big(\cos(n\theta)+i\sin(n\theta)\big)" />.
          </Box>
          <Callout variant="info" title="Notation exponentielle (formule d'Euler)">
            On pose <Math tex="e^{i\theta}=\cos\theta+i\sin\theta" />. La forme trigonométrique s&apos;écrit alors{" "}
            <Math tex="z=re^{i\theta}" />, et la formule de Moivre devient{" "}
            <Math tex="\big(e^{i\theta}\big)^n=e^{in\theta}" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IX" title="Racines carrées d'un nombre complexe">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">racine carrée</strong> de <Math tex="z" /> est un complexe{" "}
            <Math tex="u" /> tel que <Math tex="u^2=z" />. Tout complexe non nul admet{" "}
            <strong>exactement deux</strong> racines carrées, opposées l&apos;une de l&apos;autre.
          </Box>
          <Callout variant="success" title="Méthode (forme trigonométrique)">
            Si <Math tex="z=[r,\theta]" /> (<Math tex="r>0" />), ses racines carrées sont :
            <MathBlock tex="u_1=\left[\sqrt r,\dfrac\theta2\right] \qquad u_2=-u_1=\left[\sqrt r,\dfrac\theta2+\pi\right]" />
            (car <Math tex="u^2=z\iff\rho^2=r" /> et <Math tex="2\alpha\equiv\theta\ [2\pi]" />, avec{" "}
            <Math tex="u=[\rho,\alpha]" />).
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. ANGLES ORIENTÉS ===================== */}
      <LessonSection
        id="cours-angles"
        kicker="04 · Le niveau Sciences Mathématiques"
        title="Interprétation géométrique des arguments"
        tone="muted"
        description="L'argument d'un quotient d'affixes donne directement la mesure d'un angle orienté : c'est l'outil le plus puissant de ce chapitre pour la géométrie plane."
      >
        <CourseBlock numeral="X" title="Angles orientés et argument">
          <Box title="Propriété fondamentale" tone="prop">
            Soient <Math tex="A(a)" />, <Math tex="B(b)" />, <Math tex="C(c)" />, <Math tex="D(d)" /> des points
            deux à deux distincts. On a :
          </Box>
          <div className="space-y-2">
            <MathBlock tex="\big(\vec u,\overrightarrow{OM}\big)\equiv\arg(z)\ [2\pi]" />
            <MathBlock tex="\big(\overrightarrow{AB},\overrightarrow{AC}\big)\equiv\arg\!\left(\dfrac{c-a}{b-a}\right)\ [2\pi]" />
            <MathBlock tex="\big(\overrightarrow{AB},\overrightarrow{CD}\big)\equiv\arg\!\left(\dfrac{d-c}{b-a}\right)\ [2\pi]" />
          </div>
        </CourseBlock>

        <CourseBlock numeral="XI" title="Corollaires : alignement, parallélisme, perpendicularité, cocyclicité">
          <Callout variant="success" title="Quatre corollaires à connaître par cœur">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Alignement</strong> : <Math tex="A,B,C" /> alignés{" "}
                <Math tex="\iff \arg\!\left(\dfrac{c-a}{b-a}\right)\equiv0\ [\pi]" />.
              </li>
              <li>
                <strong>Parallélisme</strong> : <Math tex="(AB)\parallel(CD)\iff \arg\!\left(\dfrac{d-c}{b-a}\right)\equiv0\ [\pi]" />
                .
              </li>
              <li>
                <strong>Perpendicularité</strong> :{" "}
                <Math tex="(AB)\perp(CD)\iff \arg\!\left(\dfrac{d-c}{b-a}\right)\equiv\dfrac\pi2\ [\pi]" />, ce qui
                équivaut à <Math tex="\dfrac{d-c}{b-a}\in i\mathbb R^*" />.
              </li>
              <li>
                <strong>Cocyclicité</strong> : <Math tex="A,B,C,D" /> (avec <Math tex="A,B,C" /> non alignés) sont
                cocycliques ou alignés si et seulement si le <em>birapport</em>{" "}
                <Math tex="\dfrac{c-a}{b-a}\Big/\dfrac{c-d}{b-d}" /> est réel.
              </li>
            </ul>
          </Callout>
          <Callout variant="warning" title="Remarque">
            Ces critères transforment un problème de géométrie plane (angles, perpendicularité, cercles) en un
            simple <strong>calcul algébrique</strong> sur des quotients de complexes : c&apos;est toute la
            puissance de ce chapitre.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Nombres complexes (Partie 1)"
        tone="light"
        description="12 exercices corrigés, au niveau Sciences Mathématiques : calculs, alignement, module, argument, forme trigonométrique, racines carrées, équations avec z et z̄, angles orientés et cocyclicité."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre nombres complexes (partie 1) est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Forme algébrique"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Écrire sous forme algébrique <Math tex="z_1=(1+2i)(3-i)" /> et{" "}
                <Math tex="z_2=\dfrac{2-i}{1+2i}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z_1=(1+2i)(3-i)=3-i+6i-2i^2=3+5i+2=5+5i" />.
                </p>
                <p className="font-semibold text-green-700">
                  En multipliant par le conjugué du dénominateur :{" "}
                  <Math tex="z_2=\dfrac{(2-i)(1-2i)}{(1+2i)(1-2i)}=\dfrac{2-4i-i+2i^2}{1+4}=\dfrac{-5i}{5}=-i" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Alignement de trois points"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(z_A=2+i)" />, <Math tex="B(z_B=5+4i)" /> et <Math tex="C(z_C=-1-2i)" />. Montrer
                que <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> sont alignés.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z_B-z_A=(5+4i)-(2+i)=3+3i" /> et{" "}
                  <Math tex="z_C-z_A=(-1-2i)-(2+i)=-3-3i" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{-3-3i}{3+3i}=\dfrac{-(3+3i)}{3+3i}=-1\in\mathbb R" />{" "}
                  : les points <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> sont alignés.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Triangle équilatéral (modules)"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(2)" />, <Math tex="B(-1+i\sqrt3)" /> et <Math tex="C(-1-i\sqrt3)" />. Montrer que
                le triangle <Math tex="ABC" /> est équilatéral.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="AB=|z_B-z_A|=|{-3+i\sqrt3}|=\sqrt{9+3}=\sqrt{12}=2\sqrt3" />.
                </p>
                <p>
                  <Math tex="AC=|z_C-z_A|=|{-3-i\sqrt3}|=\sqrt{9+3}=2\sqrt3" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="BC=|z_C-z_B|=|{-2i\sqrt3}|=2\sqrt3" />. Donc <Math tex="AB=AC=BC" /> : le triangle{" "}
                  <Math tex="ABC" /> est équilatéral.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Ensembles de points (cercle et médiatrice)"
            itemsLabel="2 études"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer l&apos;ensemble des points <Math tex="M(z)" /> du plan tels que{" "}
                <Math tex="|z-3+4i|=5" />, puis l&apos;ensemble des points <Math tex="M(z)" /> tels que{" "}
                <Math tex="|z-1|=|z+3-2i|" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="A(z_A=3-4i)" />. On a <Math tex="|z-3+4i|=|z-z_A|=AM" />, donc l&apos;ensemble
                  cherché est le <strong>cercle</strong> de centre <Math tex="A(3,-4)" /> et de rayon{" "}
                  <Math tex="5" />.
                </p>
                <p className="font-semibold text-green-700">
                  Posons <Math tex="B(z_B=1)" /> et <Math tex="C(z_C=-3+2i)" /> : <Math tex="AM=BM" /> devient{" "}
                  <Math tex="BM=CM" />, donc l&apos;ensemble cherché est la <strong>médiatrice</strong> du segment{" "}
                  <Math tex="[BC]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Forme trigonométrique"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer la forme trigonométrique de <Math tex="z=-\sqrt3+i" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="|z|=\sqrt{3+1}=2" />, donc{" "}
                  <Math tex="z=2\left(-\dfrac{\sqrt3}{2}+i\dfrac12\right)" /> : <Math tex="\cos\theta=-\dfrac{\sqrt3}2" />
                  , <Math tex="\sin\theta=\dfrac12" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\arg(z)\equiv\dfrac{5\pi}{6}\ [2\pi]" /> et{" "}
                  <Math tex="z=2\left(\cos\dfrac{5\pi}6+i\sin\dfrac{5\pi}6\right)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Racines carrées d'un nombre complexe"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les racines carrées de <Math tex="z=1+i\sqrt3" /> sous forme algébrique.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="|z|=\sqrt{1+3}=2" /> et <Math tex="z=2\left(\dfrac12+i\dfrac{\sqrt3}2\right)" />, donc{" "}
                  <Math tex="\arg(z)\equiv\dfrac\pi3\ [2\pi]" /> : <Math tex="z=\left[2,\dfrac\pi3\right]" />.
                </p>
                <p>
                  Les racines carrées sont <Math tex="u_1=\left[\sqrt2,\dfrac\pi6\right]" /> et{" "}
                  <Math tex="u_2=-u_1" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="u_1=\sqrt2\left(\cos\dfrac\pi6+i\sin\dfrac\pi6\right)=\sqrt2\left(\dfrac{\sqrt3}2+i\dfrac12\right)=\dfrac{\sqrt6+i\sqrt2}{2}" />
                  . Les racines carrées de <Math tex="z" /> sont donc{" "}
                  <Math tex="\pm\dfrac{\sqrt6+i\sqrt2}{2}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Équation avec z et son conjugué"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb C" /> l&apos;équation <Math tex="2z+i\bar z=8+7i" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="z=x+iy" /> (<Math tex="x,y\in\mathbb R" />). Alors{" "}
                  <Math tex="2z=2x+2iy" /> et <Math tex="i\bar z=i(x-iy)=y+ix" />.
                </p>
                <p>
                  Donc <Math tex="2z+i\bar z=(2x+y)+i(x+2y)" />. L&apos;équation équivaut au système{" "}
                  <Math tex="\begin{cases}2x+y=8\\x+2y=7\end{cases}" />.
                </p>
                <p>
                  En multipliant la première ligne par <Math tex="2" /> et en soustrayant la seconde :{" "}
                  <Math tex="3x=9\iff x=3" />, puis <Math tex="y=8-2x=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;unique solution est <Math tex="z=3+2i" /> (vérification :{" "}
                  <Math tex="2(3+2i)+i(3-2i)=6+4i+3i+2=8+7i" /> ✓).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Ensemble de points via U(z)"
            itemsLabel="1 étude en 2 parties"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="z=x+iy" /> (<Math tex="x,y\in\mathbb R" />, <Math tex="z\neq i" />) et{" "}
                <Math tex="U=\dfrac{z-1}{z-i}" />. Déterminer l&apos;ensemble des points <Math tex="M(z)" /> tels
                que <Math tex="U" /> soit réel, puis l&apos;ensemble des points <Math tex="M(z)" /> tels que{" "}
                <Math tex="U" /> soit imaginaire pur non nul.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En multipliant par le conjugué du dénominateur :{" "}
                  <Math tex="U=\dfrac{(x-1+iy)\big(x-i(y-1)\big)}{x^2+(y-1)^2}" />.
                </p>
                <p>
                  Le numérateur vaut{" "}
                  <Math tex="\big[x^2-x+y^2-y\big]+i\big[x+y-1\big]" />, donc{" "}
                  <Math tex="\operatorname{Re}(U)=\dfrac{x^2+y^2-x-y}{x^2+(y-1)^2}" /> et{" "}
                  <Math tex="\operatorname{Im}(U)=\dfrac{x+y-1}{x^2+(y-1)^2}" />.
                </p>
                <p>
                  <Math tex="U" /> est réel ssi <Math tex="\operatorname{Im}(U)=0" />, c&apos;est-à-dire{" "}
                  <Math tex="x+y-1=0" /> : l&apos;ensemble cherché est la <strong>droite</strong>{" "}
                  <Math tex="x+y=1" /> (privée du point <Math tex="(0,1)" />, exclu du domaine).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="U" /> est imaginaire pur non nul ssi <Math tex="\operatorname{Re}(U)=0" /> et{" "}
                  <Math tex="U\neq0" />, c&apos;est-à-dire{" "}
                  <Math tex="\left(x-\dfrac12\right)^2+\left(y-\dfrac12\right)^2=\dfrac12" /> privé du point{" "}
                  <Math tex="(1,0)" /> (où <Math tex="U=0" />) : c&apos;est le <strong>cercle</strong> de centre{" "}
                  <Math tex="\left(\dfrac12,\dfrac12\right)" /> et de rayon <Math tex="\dfrac{\sqrt2}{2}" />, privé
                  de ce point.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Angle orienté et triangle rectangle isocèle"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(0)" />, <Math tex="B(2)" /> et <Math tex="C(1+i)" />. Montrer que le triangle{" "}
                <Math tex="ABC" /> est rectangle et isocèle en <Math tex="C" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On calcule <Math tex="\dfrac{z_B-z_C}{z_A-z_C}=\dfrac{2-(1+i)}{0-(1+i)}=\dfrac{1-i}{-1-i}" />.
                </p>
                <p>
                  En multipliant par le conjugué du dénominateur :{" "}
                  <Math tex="\dfrac{(1-i)(-1+i)}{(-1-i)(-1+i)}=\dfrac{-1+i+i-i^2}{1+1}=\dfrac{2i}{2}=i" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\dfrac{z_B-z_C}{z_A-z_C}=i" />, d&apos;où <Math tex="\left|\dfrac{z_B-z_C}{z_A-z_C}\right|=1" />{" "}
                  (donc <Math tex="CA=CB" />) et{" "}
                  <Math tex="\big(\overrightarrow{CA},\overrightarrow{CB}\big)\equiv\arg(i)\equiv\dfrac\pi2\ [2\pi]" />
                  . Le triangle <Math tex="ABC" /> est donc rectangle et isocèle en <Math tex="C" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Alignement par l'argument"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(1)" />, <Math tex="B(3+2i)" /> et <Math tex="C(-3-4i)" />. En utilisant
                l&apos;argument, montrer que <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> sont alignés.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z_C-z_A=(-3-4i)-1=-4-4i=-4(1+i)" /> et{" "}
                  <Math tex="z_B-z_A=(3+2i)-1=2+2i=2(1+i)" />.
                </p>
                <p>
                  Donc <Math tex="\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{-4(1+i)}{2(1+i)}=-2\in\mathbb R_-^*" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\arg\!\left(\dfrac{z_C-z_A}{z_B-z_A}\right)\equiv\pi\equiv0\ [\pi]" /> : d&apos;après
                  le corollaire du cours, les points <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> sont
                  alignés.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Cocyclicité de quatre points (birapport)"
            itemsLabel="1 démonstration avancée"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(1)" />, <Math tex="B(i)" />, <Math tex="C(-1)" /> et <Math tex="D(-i)" />. En
                utilisant le birapport, montrer que <Math tex="A" />, <Math tex="B" />, <Math tex="C" />,{" "}
                <Math tex="D" /> sont cocycliques.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{-1-1}{i-1}=\dfrac{-2}{i-1}" />. En multipliant par le
                  conjugué : <Math tex="\dfrac{-2(-1-i)}{(i-1)(-1-i)}=\dfrac{2+2i}{2}=1+i" />.
                </p>
                <p>
                  <Math tex="\dfrac{z_C-z_D}{z_B-z_D}=\dfrac{-1-(-i)}{i-(-i)}=\dfrac{-1+i}{2i}" />. En multipliant
                  par <Math tex="\dfrac{-i}{-i}" /> : <Math tex="\dfrac{(-1+i)(-i)}{2i(-i)}=\dfrac{i+1}{2}=\dfrac{1+i}{2}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Le birapport vaut <Math tex="\dfrac{1+i}{\frac{1+i}2}=2\in\mathbb R" /> : d&apos;après le cours,{" "}
                  <Math tex="A" />, <Math tex="B" />, <Math tex="C" />, <Math tex="D" /> sont cocycliques (ils sont
                  d&apos;ailleurs tous sur le cercle trigonométrique, ce que confirme ce calcul).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Équation à coefficients complexes et volet géométrique"
            itemsLabel="1 équation + 1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                1) Résoudre dans <Math tex="\mathbb C" /> l&apos;équation{" "}
                <Math tex="(E):z^2-3z+3+i=0" />. 2) On note <Math tex="A" /> et <Math tex="B" /> les points
                d&apos;affixes les deux solutions. Montrer que le triangle <Math tex="OAB" /> (<Math tex="O" />{" "}
                étant l&apos;origine) est isocèle.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1) <Math tex="\Delta=(-3)^2-4(3+i)=9-12-4i=-3-4i" />. Cherchons{" "}
                  <Math tex="u=a+ib" /> tel que <Math tex="u^2=-3-4i" /> : <Math tex="a^2-b^2=-3" /> et{" "}
                  <Math tex="2ab=-4" />.
                </p>
                <p>
                  De <Math tex="b=-\dfrac2a" /> on tire <Math tex="a^2-\dfrac4{a^2}=-3\iff a^4+3a^2-4=0" />. En
                  posant <Math tex="X=a^2" /> : <Math tex="X^2+3X-4=0\iff(X-1)(X+4)=0" />, donc{" "}
                  <Math tex="X=1" /> (seule valeur positive), soit <Math tex="a=\pm1" />.
                </p>
                <p>
                  Pour <Math tex="a=1" />, <Math tex="b=-2" /> : <Math tex="u=1-2i" /> vérifie{" "}
                  <Math tex="u^2=1-4i+4i^2=-3-4i" /> ✓. Donc <Math tex="\sqrt\Delta=\pm(1-2i)" />.
                </p>
                <p>
                  Les solutions sont <Math tex="z=\dfrac{3\pm(1-2i)}{2}" />, soit{" "}
                  <Math tex="z_1=\dfrac{4-2i}{2}=2-i" /> et <Math tex="z_2=\dfrac{2+2i}{2}=1+i" />.
                </p>
                <p className="font-semibold text-green-700">
                  2) Avec <Math tex="A(2-i)" /> et <Math tex="B(1+i)" /> : <Math tex="OA=|2-i|=\sqrt5" />,{" "}
                  <Math tex="OB=|1+i|=\sqrt2" /> et{" "}
                  <Math tex="AB=|z_B-z_A|=|(1+i)-(2-i)|=|-1+2i|=\sqrt5" />. Comme{" "}
                  <Math tex="OA=AB=\sqrt5" />, le triangle <Math tex="OAB" /> est isocèle en <Math tex="A" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
