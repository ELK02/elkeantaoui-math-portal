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
  title: "Les nombres complexes (Partie 1) · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet des nombres complexes (partie 1) pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : forme algébrique, conjugué, représentation géométrique, module, argument et forme trigonométrique, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 1",
  heroTitle: "Les nombres complexes (Partie 1)",
  heroSubtitle:
    "Un nouvel ensemble de nombres pour résoudre toutes les équations : forme algébrique, conjugué, module, argument et forme trigonométrique — la base de tout le calcul complexe à venir.",
  footerNote:
    "Les nombres complexes (Partie 1) · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 1.",
  sections: [
    { id: "cours-algebrique", label: "Forme algébrique" },
    { id: "cours-geometrique", label: "Module" },
    { id: "cours-argument", label: "Argument" },
    { id: "cours-trigonometrique", label: "Forme trig." },
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
          { value: "10", label: "exercices corrigés" },
          { value: "6", label: "notions clés" },
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
        kicker="01 · Un nouvel ensemble de nombres"
        title="Forme algébrique, opérations et conjugué"
        tone="light"
        description="L'équation x²+1=0 n'a pas de solution dans ℝ. On invente un nombre i tel que i²=−1, et un nouvel ensemble ℂ qui contient ℝ."
      >
        <CourseBlock numeral="I" title="Forme algébrique d'un nombre complexe">
          <Box title="Définition" tone="def">
            Un <strong className="text-foreground">nombre complexe</strong> est un nombre qui s&apos;écrit sous la
            forme <Math tex="z=a+bi" /> avec <Math tex="a,b\in\mathbb R" /> et <Math tex="i" /> un nombre tel que{" "}
            <Math tex="i^2=-1" />. Cette écriture est appelée la <strong>forme algébrique</strong> de{" "}
            <Math tex="z" />. L&apos;ensemble des nombres complexes est noté <Math tex="\mathbb C" />, et{" "}
            <Math tex="\mathbb R\subset\mathbb C" />.
          </Box>
          <Box title="Vocabulaire" tone="def">
            Le réel <Math tex="a" /> est la <strong>partie réelle</strong> de <Math tex="z" />, notée{" "}
            <Math tex="\operatorname{Re}(z)=a" />. Le réel <Math tex="b" /> est la{" "}
            <strong>partie imaginaire</strong> de <Math tex="z" />, notée <Math tex="\operatorname{Im}(z)=b" />.{" "}
            <Math tex="z" /> est réel ssi <Math tex="\operatorname{Im}(z)=0" /> ; <Math tex="z" /> est{" "}
            <strong>imaginaire pur</strong> ssi <Math tex="\operatorname{Re}(z)=0" />.
          </Box>
          <Callout variant="success" title="Opérations">
            <div className="space-y-1.5">
              <p>
                Avec <Math tex="z=a+bi" /> et <Math tex="z'=a'+b'i" /> :
              </p>
              <p>
                <Math tex="z+z'=(a+a')+(b+b')i" />
              </p>
              <p>
                <Math tex="z\times z'=(aa'-bb')+(ab'+a'b)i" />
              </p>
            </div>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Conjugué d'un nombre complexe">
          <Box title="Définition" tone="def">
            Le <strong className="text-foreground">conjugué</strong> de <Math tex="z=a+bi" /> est le nombre complexe{" "}
            <Math tex="\bar z=a-bi" />.
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="z+\bar z=2\operatorname{Re}(z)" /> et <Math tex="z-\bar z=2i\operatorname{Im}(z)" />.
              </li>
              <li>
                <Math tex="\overline{\bar z}=z" /> ; <Math tex="\overline{z+z'}=\bar z+\bar z'" /> ;{" "}
                <Math tex="\overline{zz'}=\bar z\,\bar z'" />.
              </li>
              <li>
                <Math tex="z\in\mathbb R\iff z=\bar z" /> ; <Math tex="z" /> imaginaire pur{" "}
                <Math tex="\iff z=-\bar z" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. REPRÉSENTATION GÉOMÉTRIQUE ET MODULE ===================== */}
      <LessonSection
        id="cours-geometrique"
        kicker="02 · Un point pour chaque nombre"
        title="Représentation géométrique et module"
        tone="muted"
        description="Chaque nombre complexe devient un point du plan — et sa distance à l'origine devient son module."
      >
        <CourseBlock numeral="III" title="Le plan complexe">
          <Box title="Définition" tone="def">
            Le plan est muni d&apos;un repère orthonormé <Math tex="(O,\vec u,\vec v)" />. À tout{" "}
            <Math tex="z=a+bi" /> on associe le point <Math tex="M(a,b)" />, appelé{" "}
            <strong>image de z</strong> ; on note <Math tex="M(z)" />. Réciproquement, <Math tex="z" /> est{" "}
            <strong>l&apos;affixe</strong> de <Math tex="M" />.
          </Box>
          <Callout variant="success" title="Affixes remarquables">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Affixe du vecteur <Math tex="\overrightarrow{AB}" /> : <Math tex="z_{\overrightarrow{AB}}=z_B-z_A" />
                .
              </li>
              <li>
                Affixe du milieu <Math tex="I" /> de <Math tex="[AB]" /> : <Math tex="z_I=\dfrac{z_A+z_B}{2}" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Module d'un nombre complexe">
          <Box title="Définition" tone="def">
            Le <strong className="text-foreground">module</strong> de <Math tex="z=a+bi" /> est le réel positif{" "}
            <Math tex="|z|=\sqrt{z\bar z}=\sqrt{a^2+b^2}" />. Géométriquement, <Math tex="|z|=OM" />, et pour deux
            points <Math tex="A(z_A)" />, <Math tex="B(z_B)" /> : <Math tex="AB=|z_B-z_A|" />.
          </Box>
          <Callout variant="success" title="Propriétés du module">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="|z|=0\iff z=0" /> ; <Math tex="|\bar z|=|z|" /> ; <Math tex="|-z|=|z|" />.
              </li>
              <li>
                <Math tex="|zz'|=|z||z'|" /> ; <Math tex="\left|\dfrac{z}{z'}\right|=\dfrac{|z|}{|z'|}" /> (
                <Math tex="z'\neq0" />) ; <Math tex="|z^n|=|z|^n" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. ARGUMENT ===================== */}
      <LessonSection
        id="cours-argument"
        kicker="03 · L'angle d'un nombre complexe"
        title="Argument d'un nombre complexe non nul"
        tone="light"
        description="Le module donne la distance à l'origine ; l'argument donne la direction."
      >
        <CourseBlock numeral="V" title="Définition et propriétés">
          <Box title="Définition" tone="def">
            Pour <Math tex="z\neq0" /> d&apos;image <Math tex="M" />, tout argument de <Math tex="z" /> est une
            mesure de l&apos;angle orienté <Math tex="(\vec u,\overrightarrow{OM})" />. On note{" "}
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
          <Callout variant="success" title="Propriétés à connaître par cœur">
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
      </LessonSection>

      {/* ===================== IV. FORME TRIGONOMÉTRIQUE ===================== */}
      <LessonSection
        id="cours-trigonometrique"
        kicker="04 · Module + argument = tout savoir sur z"
        title="Forme trigonométrique et formule de Moivre"
        tone="muted"
        description="En combinant module et argument, on obtient une écriture où multiplier des complexes revient à additionner des angles."
      >
        <CourseBlock numeral="VI" title="Forme trigonométrique">
          <Box title="Définition" tone="def">
            Pour <Math tex="z\neq0" />, avec <Math tex="r=|z|" /> et <Math tex="\theta=\arg(z)" /> :
          </Box>
          <MathBlock tex="z=r(\cos\theta+i\sin\theta)" />
          <Callout variant="success" title="Opérations sur les formes trigonométriques">
            <div className="space-y-2">
              <p>
                Avec <Math tex="z=r(\cos\theta+i\sin\theta)" /> et <Math tex="z'=r'(\cos\theta'+i\sin\theta')" /> :
              </p>
              <p>
                <Math tex="zz'=rr'\big(\cos(\theta+\theta')+i\sin(\theta+\theta')\big)" />
              </p>
              <p>
                <Math tex="\dfrac{z}{z'}=\dfrac{r}{r'}\big(\cos(\theta-\theta')+i\sin(\theta-\theta')\big)" />
              </p>
            </div>
          </Callout>
          <Box title="Formule de Moivre" tone="prop">
            Pour tout <Math tex="n\in\mathbb Z" /> : <Math tex="(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)" />
            , d&apos;où <Math tex="z^n=r^n\big(\cos(n\theta)+i\sin(n\theta)\big)" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Les nombres complexes (Partie 1)"
        tone="light"
        description="10 exercices corrigés, au niveau Sciences Physiques : forme algébrique, alignement, parallélogramme, module, argument, forme trigonométrique, équation et ensembles de points."
      >
        <ExerciseGroup
          total={10}
          celebrationTitle="Bravo, les 10 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre nombres complexes (partie 1) est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Forme algébrique"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Écrire sous forme algébrique <Math tex="z_1=(2+3i)(1-2i)" /> et{" "}
                <Math tex="z_2=\dfrac{1+i}{2-i}" />, puis donner leurs parties réelle et imaginaire.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z_1=(2+3i)(1-2i)=2-4i+3i-6i^2=2-i+6=8-i" />, donc{" "}
                  <Math tex="\operatorname{Re}(z_1)=8" /> et <Math tex="\operatorname{Im}(z_1)=-1" />.
                </p>
                <p>
                  En multipliant par le conjugué du dénominateur :{" "}
                  <Math tex="z_2=\dfrac{(1+i)(2+i)}{(2-i)(2+i)}=\dfrac{2+i+2i+i^2}{4+1}=\dfrac{1+3i}{5}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="z_2=\dfrac15+\dfrac35 i" />, avec <Math tex="\operatorname{Re}(z_2)=\dfrac15" /> et{" "}
                  <Math tex="\operatorname{Im}(z_2)=\dfrac35" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Points alignés"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(z_A=2+i)" />, <Math tex="B(z_B=4+5i)" /> et <Math tex="C(z_C=-1-5i)" />. Montrer
                que <Math tex="A" />, <Math tex="B" /> et <Math tex="C" /> sont alignés.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Les points sont alignés ssi <Math tex="\dfrac{z_C-z_A}{z_B-z_A}\in\mathbb R" />.
                </p>
                <p>
                  On a <Math tex="z_B-z_A=2+4i=2(1+2i)" /> et <Math tex="z_C-z_A=-3-6i=-3(1+2i)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{-3(1+2i)}{2(1+2i)}=-\dfrac32\in\mathbb R" /> : les
                  points <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> sont alignés.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Parallélogramme"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(1+2i)" />, <Math tex="B(4+3i)" />, <Math tex="C(5+6i)" /> et{" "}
                <Math tex="D(2+5i)" />. Montrer que <Math tex="ABCD" /> est un parallélogramme.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="ABCD" /> est un parallélogramme ssi <Math tex="\overrightarrow{AB}=\overrightarrow{DC}" />
                  , c&apos;est-à-dire <Math tex="z_B-z_A=z_C-z_D" />.
                </p>
                <p>
                  <Math tex="z_B-z_A=(4+3i)-(1+2i)=3+i" /> et <Math tex="z_C-z_D=(5+6i)-(2+5i)=3+i" />.
                </p>
                <p className="font-semibold text-green-700">
                  Les deux affixes sont égales : <Math tex="ABCD" /> est bien un parallélogramme.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Calcul de modules"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Calculer le module de <Math tex="z_1=3-4i" /> et de <Math tex="z_2=\dfrac{1+i}{1-i}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="|z_1|=\sqrt{3^2+(-4)^2}=\sqrt{25}=5" />.
                </p>
                <p>
                  En multipliant par le conjugué :{" "}
                  <Math tex="z_2=\dfrac{(1+i)^2}{(1-i)(1+i)}=\dfrac{1+2i-1}{2}=\dfrac{2i}{2}=i" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="|z_2|=|i|=1" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Calcul d'arguments"
            itemsLabel="2 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer un argument de <Math tex="z_1=\sqrt3+i" /> et de <Math tex="z_2=-1+i" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="|z_1|=\sqrt{3+1}=2" />, donc{" "}
                  <Math tex="z_1=2\left(\dfrac{\sqrt3}{2}+i\dfrac12\right)" /> : <Math tex="\cos\theta=\dfrac{\sqrt3}2" />
                  , <Math tex="\sin\theta=\dfrac12" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\arg(z_1)\equiv\dfrac{\pi}{6}\ [2\pi]" />.
                </p>
                <p>
                  <Math tex="|z_2|=\sqrt{1+1}=\sqrt2" />, donc <Math tex="\cos\theta=-\dfrac{1}{\sqrt2}" />,{" "}
                  <Math tex="\sin\theta=\dfrac1{\sqrt2}" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\arg(z_2)\equiv\dfrac{3\pi}{4}\ [2\pi]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Forme trigonométrique et puissance"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Écrire <Math tex="z=1+i" /> sous forme trigonométrique, puis calculer <Math tex="z^8" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="|z|=\sqrt2" /> et <Math tex="\arg(z)\equiv\dfrac{\pi}{4}\ [2\pi]" />, donc{" "}
                  <Math tex="z=\sqrt2\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)" />.
                </p>
                <p>
                  D&apos;après la formule de Moivre :{" "}
                  <Math tex="z^8=(\sqrt2)^8\left(\cos\dfrac{8\pi}{4}+i\sin\dfrac{8\pi}{4}\right)=16(\cos2\pi+i\sin2\pi)" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="z^8=16" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Ensemble de points — cercle"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer l&apos;ensemble des points <Math tex="M(z)" /> du plan tels que{" "}
                <Math tex="|z-2-i|=3" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="A(z_A=2+i)" />. On a <Math tex="|z-2-i|=|z-z_A|=AM" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="AM=3" /> : l&apos;ensemble cherché est le cercle de centre{" "}
                  <Math tex="A(2,1)" /> et de rayon <Math tex="3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Ensemble de points — médiatrice"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer l&apos;ensemble des points <Math tex="M(z)" /> du plan tels que{" "}
                <Math tex="|z-4|=|z-2i|" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Posons <Math tex="A(z_A=4)" /> et <Math tex="B(z_B=2i)" />. On a{" "}
                  <Math tex="|z-4|=AM" /> et <Math tex="|z-2i|=BM" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="AM=BM" /> : l&apos;ensemble cherché est la médiatrice du segment{" "}
                  <Math tex="[AB]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Résoudre dans ℂ"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb C" /> l&apos;équation <Math tex="z^2-2z+5=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\Delta=(-2)^2-4\times1\times5=4-20=-16=(4i)^2" />.
                </p>
                <p>
                  Les solutions sont <Math tex="z=\dfrac{2-4i}{2}=1-2i" /> et{" "}
                  <Math tex="z=\dfrac{2+4i}{2}=1+2i" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble des solutions est <Math tex="S=\{1-2i\,;\,1+2i\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Ensemble de points — nombre imaginaire pur"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="z=x+iy" /> (<Math tex="x,y\in\mathbb R" />, <Math tex="z\neq-i" />) et{" "}
                <Math tex="Z=\dfrac{z-1}{z+i}" />. Déterminer l&apos;ensemble des points <Math tex="M(z)" /> tels que{" "}
                <Math tex="Z" /> soit un imaginaire pur non nul.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  En multipliant par le conjugué du dénominateur :{" "}
                  <Math tex="Z=\dfrac{(x-1+iy)(x-i(y+1))}{x^2+(y+1)^2}" />.
                </p>
                <p>
                  Le numérateur vaut <Math tex="\big[x(x-1)+y(y+1)\big]+i\big[y-x+1\big]" />, donc{" "}
                  <Math tex="\operatorname{Re}(Z)=\dfrac{x^2-x+y^2+y}{x^2+(y+1)^2}" />.
                </p>
                <p>
                  <Math tex="Z" /> est imaginaire pur ssi <Math tex="\operatorname{Re}(Z)=0" />, c&apos;est-à-dire{" "}
                  <Math tex="x^2-x+y^2+y=0" />, soit{" "}
                  <Math tex="\left(x-\dfrac12\right)^2+\left(y+\dfrac12\right)^2=\dfrac12" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;ensemble cherché est le cercle de centre <Math tex="\left(\dfrac12,-\dfrac12\right)" /> et de
                  rayon <Math tex="\dfrac{\sqrt2}{2}" />, privé du point <Math tex="(1,0)" /> (où{" "}
                  <Math tex="Z=0" />).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
