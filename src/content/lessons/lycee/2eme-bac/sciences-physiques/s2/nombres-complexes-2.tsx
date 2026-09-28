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
  title: "Les nombres complexes (Partie 2) · Cours et exercices | 2ème Bac Sciences Physiques",
  description:
    "Cours complet des nombres complexes (partie 2) pour la 2ème année Baccalauréat Sciences Physiques, SVT, Sc. & Tech Électriques et Mécaniques : forme exponentielle, formules d'Euler, équations du second degré, écriture complexe des transformations (translation, homothétie, rotation) et applications géométriques, avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Physiques · Semestre 2",
  heroTitle: "Les nombres complexes (Partie 2)",
  heroSubtitle:
    "La forme exponentielle, les équations du second degré dans ℂ et l'écriture complexe des transformations planes — le complexe devient enfin un outil de géométrie.",
  footerNote:
    "Les nombres complexes (Partie 2) · Mathématiques, 2ème année Baccalauréat Sciences Physiques, semestre 2.",
  sections: [
    { id: "cours-exponentielle", label: "Forme exponentielle" },
    { id: "cours-equations", label: "Équations dans ℂ" },
    { id: "cours-transformations", label: "Transformations" },
    { id: "cours-geometrie", label: "Géométrie" },
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
          { value: "4", label: "notions clés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-exponentielle"
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
            <Math tex="re^{i\theta}" />
          </div>
        }
      />

      {/* ===================== I. FORME EXPONENTIELLE ===================== */}
      <LessonSection
        id="cours-exponentielle"
        kicker="01 · Une écriture encore plus compacte"
        title="Forme exponentielle et formules d'Euler"
        tone="light"
        description="Le module et l'argument se combinent en une seule écriture, où multiplier deux complexes revient à additionner deux angles."
      >
        <CourseBlock numeral="I" title="Notation exponentielle">
          <Box title="Définition" tone="def">
            Pour tout réel <Math tex="\theta" />, on pose <Math tex="e^{i\theta}=\cos\theta+i\sin\theta" />. Pour{" "}
            <Math tex="z\neq0" /> de module <Math tex="r" /> et d&apos;argument <Math tex="\theta" />, l&apos;écriture{" "}
            <Math tex="z=re^{i\theta}" /> est appelée la <strong>forme exponentielle</strong> de <Math tex="z" />.
          </Box>
          <Callout variant="success" title="Propriétés à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="e^{i\theta}e^{i\theta'}=e^{i(\theta+\theta')}" /> ;{" "}
                <Math tex="\dfrac{e^{i\theta}}{e^{i\theta'}}=e^{i(\theta-\theta')}" /> ;{" "}
                <Math tex="\dfrac{1}{e^{i\theta}}=e^{-i\theta}" /> ; <Math tex="\overline{e^{i\theta}}=e^{-i\theta}" />.
              </li>
              <li>
                <Math tex="\left(e^{i\theta}\right)^n=e^{in\theta}" /> pour tout <Math tex="n\in\mathbb Z" /> (formule
                de Moivre).
              </li>
              <li>
                Avec <Math tex="z=re^{i\theta}" /> et <Math tex="z'=r'e^{i\theta'}" /> (<Math tex="r,r'>0" />) :{" "}
                <Math tex="zz'=rr'e^{i(\theta+\theta')}" />, <Math tex="\dfrac{z}{z'}=\dfrac{r}{r'}e^{i(\theta-\theta')}" />
                , <Math tex="z^n=r^ne^{in\theta}" />.
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Formules d'Euler et linéarisation">
          <Box title="Formules d'Euler" tone="def">
            Pour tout réel <Math tex="\theta" /> :
          </Box>
          <MathBlock tex="\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}{2} \qquad \sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}" />
          <Callout variant="warning" title="Méthode : linéariser une puissance de cos ou sin">
            On remplace <Math tex="\cos\theta" /> (ou <Math tex="\sin\theta" />) par sa formule d&apos;Euler, on
            développe avec le binôme de Newton, puis on regroupe les termes conjugués{" "}
            <Math tex="e^{ik\theta}+e^{-ik\theta}=2\cos(k\theta)" /> (ou{" "}
            <Math tex="e^{ik\theta}-e^{-ik\theta}=2i\sin(k\theta)" />).
          </Callout>
          <Box title="Application : linéariser cos³θ" tone="prop">
            <div className="space-y-2">
              <p>
                <Math tex="\cos^3\theta=\left(\dfrac{e^{i\theta}+e^{-i\theta}}{2}\right)^3=\dfrac18\left(e^{3i\theta}+3e^{i\theta}+3e^{-i\theta}+e^{-3i\theta}\right)" />
              </p>
              <p>
                <Math tex="=\dfrac18\left(\left(e^{3i\theta}+e^{-3i\theta}\right)+3\left(e^{i\theta}+e^{-i\theta}\right)\right)=\dfrac18\left(2\cos3\theta+6\cos\theta\right)" />
              </p>
              <p className="font-semibold text-green-700">
                Conclusion : <Math tex="\cos^3\theta=\dfrac14\cos3\theta+\dfrac34\cos\theta" />.
              </p>
            </div>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. ÉQUATIONS DANS ℂ ===================== */}
      <LessonSection
        id="cours-equations"
        kicker="02 · Résoudre dans ℂ"
        title="Équations du second degré à coefficients réels"
        tone="muted"
        description="Grâce à ℂ, toute équation du second degré à coefficients réels admet désormais des solutions — réelles ou complexes conjuguées."
      >
        <CourseBlock numeral="III" title="Théorème général">
          <Box title="Définition" tone="def">
            Soit <Math tex="az^2+bz+c=0" /> avec <Math tex="a,b,c\in\mathbb R" />, <Math tex="a\neq0" />, et{" "}
            <Math tex="\Delta=b^2-4ac" /> son discriminant.
          </Box>
          <Callout variant="success" title="Théorème">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="\Delta>0" /> : deux solutions réelles{" "}
                <Math tex="z_1=\dfrac{-b-\sqrt\Delta}{2a}" /> et <Math tex="z_2=\dfrac{-b+\sqrt\Delta}{2a}" />.
              </li>
              <li>
                Si <Math tex="\Delta=0" /> : une solution double <Math tex="z_0=\dfrac{-b}{2a}" />.
              </li>
              <li>
                Si <Math tex="\Delta<0" /> : deux solutions complexes conjuguées{" "}
                <Math tex="z_1=\dfrac{-b-i\sqrt{-\Delta}}{2a}" /> et <Math tex="z_2=\overline{z_1}=\dfrac{-b+i\sqrt{-\Delta}}{2a}" />
                .
              </li>
            </ul>
          </Callout>
          <Box title="Somme et produit des racines" tone="prop">
            Dans tous les cas (racines <Math tex="z_1,z_2" />, éventuellement égales) :{" "}
            <Math tex="z_1+z_2=-\dfrac{b}{a}" /> et <Math tex="z_1z_2=\dfrac{c}{a}" />, d&apos;où la factorisation{" "}
            <Math tex="az^2+bz+c=a(z-z_1)(z-z_2)" />.
          </Box>
          <Callout variant="warning" title="Application">
            Résoudre <Math tex="z^2+2z+5=0" /> : <Math tex="\Delta=4-20=-16<0" />, donc{" "}
            <Math tex="z_1=\dfrac{-2-4i}{2}=-1-2i" /> et <Math tex="z_2=-1+2i" />.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Équations de degré supérieur à racine connue">
          <Box title="Méthode" tone="def">
            Pour résoudre une équation polynomiale <Math tex="P(z)=0" /> de degré <Math tex="3" /> à coefficients
            réels (ou complexes) : on vérifie qu&apos;un nombre <Math tex="z_0" /> (souvent réel ou imaginaire pur)
            est racine (<Math tex="P(z_0)=0" />), on factorise{" "}
            <Math tex="P(z)=(z-z_0)(az^2+bz+c)" /> par identification des coefficients, puis on résout l&apos;équation
            du second degré restante.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. TRANSFORMATIONS ===================== */}
      <LessonSection
        id="cours-transformations"
        kicker="03 · Le complexe au service de la géométrie"
        title="Écriture complexe des transformations du plan"
        tone="light"
        description="Translation, homothétie, rotation : chaque transformation du plan a une écriture complexe de la forme z'=az+b."
      >
        <CourseBlock numeral="V" title="Vocabulaire">
          <Box title="Définition" tone="def">
            Le plan complexe <Math tex="\mathcal P" /> est muni d&apos;un repère orthonormé direct{" "}
            <Math tex="(O,\vec u,\vec v)" />. Une transformation <Math tex="f" /> associe à tout point{" "}
            <Math tex="M(z)" /> un unique point <Math tex="M'(z')" />. La relation <Math tex="z'=f(z)" /> est
            appelée <strong>l&apos;écriture complexe</strong> de <Math tex="f" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Translation, homothétie et rotation">
          <Box title="Translation" tone="prop">
            L&apos;écriture complexe de la translation <Math tex="t_{\vec u}" /> de vecteur <Math tex="\vec u" />{" "}
            d&apos;affixe <Math tex="b" /> est <Math tex="z'=z+b" />.
          </Box>
          <Box title="Homothétie" tone="prop">
            L&apos;écriture complexe de l&apos;homothétie <Math tex="h(\Omega,k)" /> de centre <Math tex="\Omega(\omega)" />{" "}
            et de rapport <Math tex="k\in\mathbb R\setminus\{0,1\}" /> est <Math tex="z'-\omega=k(z-\omega)" />, soit{" "}
            <Math tex="z'=kz+b" /> avec <Math tex="b=\omega(1-k)" />.
          </Box>
          <Box title="Rotation" tone="prop">
            L&apos;écriture complexe de la rotation <Math tex="r(\Omega,\theta)" /> de centre <Math tex="\Omega(\omega)" />{" "}
            et d&apos;angle <Math tex="\theta" /> est <Math tex="z'-\omega=e^{i\theta}(z-\omega)" />, soit{" "}
            <Math tex="z'=az+b" /> avec <Math tex="a=e^{i\theta}" /> (donc <Math tex="|a|=1" />).
          </Box>
          <Callout variant="success" title="Théorème de reconnaissance — à retenir par cœur">
            Toute transformation d&apos;écriture complexe <Math tex="z'=az+b" /> (<Math tex="a\in\mathbb C^*" />,{" "}
            <Math tex="b\in\mathbb C" />) est :
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                une <strong>translation</strong> de vecteur d&apos;affixe <Math tex="b" /> si <Math tex="a=1" /> ;
              </li>
              <li>
                une <strong>homothétie</strong> de rapport <Math tex="a" /> et de centre{" "}
                <Math tex="\Omega\left(\dfrac{b}{1-a}\right)" /> si <Math tex="a\in\mathbb R\setminus\{0,1\}" /> ;
              </li>
              <li>
                une <strong>rotation</strong> d&apos;angle <Math tex="\arg(a)" /> et de centre{" "}
                <Math tex="\Omega\left(\dfrac{b}{1-a}\right)" /> si <Math tex="|a|=1" /> et <Math tex="a\neq1" />.
              </li>
            </ul>
            Dans les deux derniers cas, <Math tex="\Omega" /> est l&apos;unique point invariant par{" "}
            <Math tex="f" /> (<Math tex="f(\Omega)=\Omega" />), c&apos;est-à-dire <Math tex="\omega=a\omega+b" />.
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. GÉOMÉTRIE ===================== */}
      <LessonSection
        id="cours-geometrie"
        kicker="04 · La géométrie plane avec les affixes"
        title="Nombres complexes et géométrie plane"
        tone="muted"
        description="Distances, angles, alignement, orthogonalité : toute la géométrie plane se traduit en calculs sur les affixes."
      >
        <CourseBlock numeral="VII" title="Distances et angles">
          <Callout variant="success" title="Formulaire — A(zA), B(zB), C(zC), D(zD)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Distance : <Math tex="AB=|z_B-z_A|" />.
              </li>
              <li>
                Angle orienté : <Math tex="\left(\vec u,\overrightarrow{AB}\right)\equiv\arg(z_B-z_A)\ [2\pi]" />.
              </li>
              <li>
                Angle entre deux vecteurs :{" "}
                <Math tex="\left(\overrightarrow{AB},\overrightarrow{CD}\right)\equiv\arg\!\left(\dfrac{z_D-z_C}{z_B-z_A}\right)\ [2\pi]" />
                .
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Alignement, orthogonalité et triangles particuliers">
          <Callout variant="success" title="Caractérisations à connaître par cœur">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> alignés <Math tex="\iff \dfrac{z_C-z_A}{z_B-z_A}\in\mathbb R^*" />.
              </li>
              <li>
                <Math tex="(AB)\perp(CD) \iff \dfrac{z_D-z_C}{z_B-z_A}\in i\mathbb R^*" />.
              </li>
              <li>
                <Math tex="ABC" /> équilatéral <Math tex="\iff \dfrac{z_C-z_A}{z_B-z_A}=e^{\pm i\pi/3}" />.
              </li>
              <li>
                <Math tex="ABC" /> rectangle et isocèle en <Math tex="A" /> <Math tex="\iff \dfrac{z_C-z_A}{z_B-z_A}=\pm i" />
                .
              </li>
            </ul>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Les nombres complexes (Partie 2)"
        tone="light"
        description="12 exercices corrigés : forme exponentielle, linéarisation, équations dans ℂ, transformations planes et géométrie avec les affixes."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre nombres complexes (partie 2) est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Forme exponentielle"
            itemsLabel="2 conversions"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Écrire sous forme exponentielle <Math tex="z_1=\sqrt2-i\sqrt2" /> et <Math tex="z_2=-2+2i\sqrt3" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="|z_1|=\sqrt{2+2}=2" />, donc{" "}
                  <Math tex="z_1=2\left(\dfrac{\sqrt2}{2}-i\dfrac{\sqrt2}{2}\right)=2\left(\cos\left(-\dfrac{\pi}4\right)+i\sin\left(-\dfrac\pi4\right)\right)" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="z_1=2e^{-i\pi/4}" />.
                </p>
                <p>
                  <Math tex="|z_2|=\sqrt{4+12}=4" />, donc{" "}
                  <Math tex="z_2=4\left(-\dfrac12+i\dfrac{\sqrt3}2\right)=4\left(\cos\dfrac{2\pi}3+i\sin\dfrac{2\pi}3\right)" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="z_2=4e^{2i\pi/3}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Produit et quotient en forme exponentielle"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Avec <Math tex="z_1=2e^{i\pi/4}" /> et <Math tex="z_2=4e^{2i\pi/3}" />, calculer{" "}
                <Math tex="z_1z_2" /> et <Math tex="\dfrac{z_1}{z_2}" /> sous forme exponentielle, puis en déduire
                leurs modules et arguments.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z_1z_2=2\times4\,e^{i(\pi/4+2\pi/3)}=8e^{i\cdot11\pi/12}" />, donc{" "}
                  <Math tex="|z_1z_2|=8" /> et <Math tex="\arg(z_1z_2)\equiv\dfrac{11\pi}{12}\ [2\pi]" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac{z_1}{z_2}=\dfrac24\,e^{i(\pi/4-2\pi/3)}=\dfrac12e^{-5i\pi/12}" />, donc{" "}
                  <Math tex="\left|\dfrac{z_1}{z_2}\right|=\dfrac12" /> et{" "}
                  <Math tex="\arg\!\left(\dfrac{z_1}{z_2}\right)\equiv-\dfrac{5\pi}{12}\ [2\pi]" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Linéariser sin²θ cos θ"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Linéariser <Math tex="\sin^2\theta\cos\theta" /> à l&apos;aide des formules d&apos;Euler.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\sin^2\theta\cos\theta=\left(\dfrac{e^{i\theta}-e^{-i\theta}}{2i}\right)^2\left(\dfrac{e^{i\theta}+e^{-i\theta}}2\right)" />
                </p>
                <p>
                  <Math tex="=-\dfrac1{4}\left(e^{2i\theta}-2+e^{-2i\theta}\right)\times\dfrac12\left(e^{i\theta}+e^{-i\theta}\right)" />
                </p>
                <p>
                  <Math tex="=-\dfrac18\left(e^{3i\theta}+e^{i\theta}-2e^{i\theta}-2e^{-i\theta}+e^{-i\theta}+e^{-3i\theta}\right)" />
                </p>
                <p>
                  <Math tex="=-\dfrac18\left(\left(e^{3i\theta}+e^{-3i\theta}\right)-\left(e^{i\theta}+e^{-i\theta}\right)\right)=-\dfrac18\left(2\cos3\theta-2\cos\theta\right)" />
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\sin^2\theta\cos\theta=\dfrac14\cos\theta-\dfrac14\cos3\theta" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Équation à discriminant négatif"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb C" /> l&apos;équation <Math tex="2z^2-2z+5=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\Delta=(-2)^2-4\times2\times5=4-40=-36=(6i)^2" />.
                </p>
                <p>
                  <Math tex="z_1=\dfrac{2-6i}{4}=\dfrac12-\dfrac32i" /> et{" "}
                  <Math tex="z_2=\dfrac12+\dfrac32i" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\left\{\dfrac12-\dfrac32i\,;\,\dfrac12+\dfrac32i\right\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Équation de degré 3 à racine réelle connue"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On considère <Math tex="P(z)=z^3-3z^2+7z-5" />.
                <br />
                1. Vérifier que <Math tex="1" /> est une racine de <Math tex="P" />.
                <br />
                2. Déterminer les réels <Math tex="a" /> et <Math tex="b" /> tels que{" "}
                <Math tex="P(z)=(z-1)(z^2+az+b)" />.
                <br />
                3. Résoudre dans <Math tex="\mathbb C" /> l&apos;équation <Math tex="P(z)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1. <Math tex="P(1)=1-3+7-5=0" />, donc <Math tex="1" /> est racine de <Math tex="P" />.
                </p>
                <p>
                  2. En développant : <Math tex="(z-1)(z^2+az+b)=z^3+(a-1)z^2+(b-a)z-b" />. Par identification avec{" "}
                  <Math tex="z^3-3z^2+7z-5" /> : <Math tex="a-1=-3" /> et <Math tex="-b=-5" />, d&apos;où{" "}
                  <Math tex="a=-2" /> et <Math tex="b=5" /> (on vérifie <Math tex="b-a=5+2=7" />, cohérent).
                </p>
                <p>
                  Donc <Math tex="P(z)=(z-1)(z^2-2z+5)" />.
                </p>
                <p>
                  3. <Math tex="P(z)=0 \iff z=1" /> ou <Math tex="z^2-2z+5=0" />. Pour cette dernière :{" "}
                  <Math tex="\Delta=4-20=-16" />, racines <Math tex="1-2i" /> et <Math tex="1+2i" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{1\,;\,1-2i\,;\,1+2i\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Reconnaître une translation"
            itemsLabel="1 identification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer la nature et les éléments caractéristiques de la transformation <Math tex="f" /> qui, à{" "}
                <Math tex="M(z)" />, associe <Math tex="M'(z')" /> tel que <Math tex="z'=z-3+4i" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;écriture est de la forme <Math tex="z'=z+b" /> (donc <Math tex="a=1" />) avec{" "}
                  <Math tex="b=-3+4i" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est la translation de vecteur <Math tex="\vec u" /> d&apos;affixe{" "}
                  <Math tex="-3+4i" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Reconnaître une homothétie"
            itemsLabel="1 identification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer la nature et les éléments caractéristiques de <Math tex="f" /> : <Math tex="z'=-3z+8" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;écriture <Math tex="z'=az+b" /> a pour coefficient <Math tex="a=-3\in\mathbb R\setminus\{0,1\}" />
                  , donc <Math tex="f" /> est une homothétie de rapport <Math tex="-3" />.
                </p>
                <p>
                  Le centre <Math tex="\Omega(\omega)" /> vérifie <Math tex="\omega=\dfrac{b}{1-a}=\dfrac{8}{1-(-3)}=2" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est l&apos;homothétie de centre <Math tex="\Omega(2)" /> et de rapport{" "}
                  <Math tex="-3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Reconnaître une rotation"
            itemsLabel="1 identification"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer la nature et les éléments caractéristiques de <Math tex="f" /> :{" "}
                <Math tex="z'=iz+2-i" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On a <Math tex="a=i" />, donc <Math tex="|a|=1" /> et <Math tex="a\neq1" /> : <Math tex="f" /> est
                  une rotation, d&apos;angle <Math tex="\arg(i)\equiv\dfrac\pi2\ [2\pi]" />.
                </p>
                <p>
                  Centre <Math tex="\Omega(\omega)" /> : <Math tex="\omega=\dfrac{b}{1-a}=\dfrac{2-i}{1-i}=\dfrac{(2-i)(1+i)}{(1-i)(1+i)}=\dfrac{2+2i-i+1}2=\dfrac{3+i}2" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="f" /> est la rotation de centre <Math tex="\Omega\!\left(\dfrac32,\dfrac12\right)" /> et
                  d&apos;angle <Math tex="\dfrac\pi2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Alignement"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(1+i)" />, <Math tex="B(4+7i)" /> et <Math tex="C(-2-5i)" />. Montrer que{" "}
                <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> sont alignés.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z_B-z_A=3+6i=3(1+2i)" /> et <Math tex="z_C-z_A=-3-6i=-3(1+2i)" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{-3(1+2i)}{3(1+2i)}=-1\in\mathbb R^*" /> : les points sont
                  alignés.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Orthogonalité"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(1+i)" />, <Math tex="B(4+5i)" />, <Math tex="C(0)" /> et <Math tex="D(-4+3i)" />.
                Montrer que <Math tex="(AB)\perp(CD)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z_B-z_A=3+4i" /> et <Math tex="z_D-z_C=-4+3i" />.
                </p>
                <p>
                  <Math tex="\dfrac{z_D-z_C}{z_B-z_A}=\dfrac{-4+3i}{3+4i}=\dfrac{(-4+3i)(3-4i)}{(3+4i)(3-4i)}=\dfrac{-12+16i+9i+12}{25}=\dfrac{25i}{25}=i" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Ce quotient <Math tex="i" /> est imaginaire pur non nul, donc <Math tex="(AB)\perp(CD)" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Triangle équilatéral"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soient <Math tex="A(0)" />, <Math tex="B(2)" /> et <Math tex="C\!\left(1+i\sqrt3\right)" />. Montrer
                que <Math tex="ABC" /> est équilatéral.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\dfrac{z_C-z_A}{z_B-z_A}=\dfrac{1+i\sqrt3}{2}=\cos\dfrac\pi3+i\sin\dfrac\pi3=e^{i\pi/3}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Ce quotient vaut <Math tex="e^{i\pi/3}" /> (module <Math tex="1" />), donc{" "}
                  <Math tex="AC=AB" /> et <Math tex="\left(\overrightarrow{AB},\overrightarrow{AC}\right)\equiv\dfrac\pi3\ [2\pi]" />
                  : le triangle <Math tex="ABC" /> est équilatéral (direct).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Composée d'une rotation et d'une image"
            itemsLabel="1 étude complète"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="A(1+2i)" /> et <Math tex="r" /> la rotation de centre <Math tex="A" /> et
                d&apos;angle <Math tex="\dfrac\pi2" />. Déterminer l&apos;écriture complexe de <Math tex="r" />, puis
                l&apos;image <Math tex="B'" /> du point <Math tex="B(4+2i)" /> par <Math tex="r" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Écriture complexe : <Math tex="z'-z_A=e^{i\pi/2}(z-z_A)" />, soit{" "}
                  <Math tex="z'=iz+z_A-iz_A=iz+(1+2i)-i(1+2i)=iz+(1+2i)+(2-i)=iz+3+i" />.
                </p>
                <p>
                  Pour <Math tex="B(4+2i)" /> : <Math tex="z_{B'}=i(4+2i)+3+i=4i-2+3+i=1+5i" />.
                </p>
                <p className="font-semibold text-green-700">
                  L&apos;écriture complexe de <Math tex="r" /> est <Math tex="z'=iz+3+i" />, et{" "}
                  <Math tex="B'(1+5i)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
