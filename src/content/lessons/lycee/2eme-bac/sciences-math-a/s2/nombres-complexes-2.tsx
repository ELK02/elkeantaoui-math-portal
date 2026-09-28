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
  title: "Les nombres complexes (Partie 2) · Cours et exercices | 2ème Bac Sciences Mathématiques",
  description:
    "Cours complet des nombres complexes (partie 2) pour la 2ème année Baccalauréat Sciences Mathématiques A et B : forme exponentielle, formules de Moivre et d'Euler, équations du second degré dans ℂ, racines n-ièmes et transformations planes (translation, homothétie, rotation, similitude directe), avec exercices intégralement corrigés.",
  kicker: "2ème Bac Sciences Math · Semestre 2",
  heroTitle: "Les nombres complexes (Partie 2)",
  heroSubtitle:
    "La forme exponentielle, les équations du second degré dans ℂ, les racines n-ièmes et les transformations planes : le prolongement naturel du calcul complexe, au cœur de la géométrie du plan.",
  footerNote:
    "Les nombres complexes (Partie 2) · Mathématiques, 2ème année Baccalauréat Sciences Mathématiques, semestre 2.",
  sections: [
    { id: "cours-exponentielle", label: "Forme exponentielle" },
    { id: "cours-equations", label: "Équations dans ℂ" },
    { id: "cours-racines-n", label: "Racines n-ièmes" },
    { id: "cours-transformations", label: "Transformations" },
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
          { value: "4", label: "grandes parties" },
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
        kicker="01 · Une écriture pour multiplier facilement"
        title="La forme exponentielle d'un nombre complexe non nul"
        tone="light"
        description="En combinant module et argument dans une seule notation, la forme exponentielle transforme les produits de complexes en sommes d'angles."
      >
        <CourseBlock numeral="I" title="Notation exponentielle">
          <Box title="Définition" tone="def">
            Pour tout réel <Math tex="\theta" />, on pose <Math tex="e^{i\theta}=\cos\theta+i\sin\theta" />. Si{" "}
            <Math tex="z\neq0" /> a pour module <Math tex="r=|z|" /> et pour argument{" "}
            <Math tex="\theta=\arg(z)" />, on écrit <Math tex="z=re^{i\theta}" /> : c&apos;est la{" "}
            <strong className="text-foreground">forme exponentielle</strong> de <Math tex="z" />.
          </Box>
          <Callout variant="success" title="Règles de calcul (r, r' > 0)">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="re^{i\theta}\times r'e^{i\theta'}=rr'e^{i(\theta+\theta')}" />
              </li>
              <li>
                <Math tex="\dfrac{re^{i\theta}}{r'e^{i\theta'}}=\dfrac{r}{r'}e^{i(\theta-\theta')}" /> ;{" "}
                <Math tex="\dfrac{1}{re^{i\theta}}=\dfrac{1}{r}e^{-i\theta}" />
              </li>
              <li>
                <Math tex="\left(re^{i\theta}\right)^n=r^ne^{in\theta}" /> (<Math tex="n\in\mathbb Z" />)
              </li>
              <li>
                <Math tex="\overline{re^{i\theta}}=re^{-i\theta}" /> ; <Math tex="-re^{i\theta}=re^{i(\theta+\pi)}" />
              </li>
            </ul>
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="II" title="Formules de Moivre et d'Euler">
          <Box title="Formule de Moivre" tone="prop">
            Pour tout réel <Math tex="\theta" /> et tout <Math tex="n\in\mathbb Z" /> :
          </Box>
          <MathBlock tex="(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)" />
          <Box title="Formule d'Euler" tone="prop">
            Pour tout réel <Math tex="\theta" /> :
          </Box>
          <MathBlock tex="\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}{2}\qquad\text{et}\qquad \sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}" />
          <Callout variant="success" title="Factorisation à l'aide de l'exponentielle">
            <p>
              Pour tous réels <Math tex="p" /> et <Math tex="q" /> :
            </p>
            <p className="mt-1">
              <Math tex="e^{ip}+e^{iq}=2\cos\!\left(\dfrac{p-q}{2}\right)e^{i\frac{p+q}{2}}" /> et{" "}
              <Math tex="e^{ip}-e^{iq}=2i\sin\!\left(\dfrac{p-q}{2}\right)e^{i\frac{p+q}{2}}" />
            </p>
          </Callout>
          <Box title="Application : linéariser cos³θ" tone="def">
            <p>
              D&apos;après Euler, <Math tex="\cos^3\theta=\left(\dfrac{e^{i\theta}+e^{-i\theta}}{2}\right)^3" />. En
              développant le cube :
            </p>
            <MathBlock tex="\cos^3\theta=\dfrac{1}{8}\left(e^{3i\theta}+3e^{i\theta}+3e^{-i\theta}+e^{-3i\theta}\right)=\dfrac{1}{8}\big(2\cos3\theta+6\cos\theta\big)" />
            <p>
              Donc <Math tex="\cos^3\theta=\dfrac14\cos3\theta+\dfrac34\cos\theta" />. On procède de même pour
              linéariser <Math tex="\sin^n\theta" /> ou <Math tex="\cos^n\theta" /> quel que soit{" "}
              <Math tex="n" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. ÉQUATIONS DU SECOND DEGRÉ DANS ℂ ===================== */}
      <LessonSection
        id="cours-equations"
        kicker="02 · Toute équation du second degré se résout dans ℂ"
        title="Équations du second degré dans ℂ"
        tone="muted"
        description="Racines carrées d'un complexe, discriminant complexe : la méthode du 1ère Bac s'étend sans exception à des coefficients complexes."
      >
        <CourseBlock numeral="III" title="Racines carrées d'un nombre complexe">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">racine carrée</strong> d&apos;un complexe{" "}
            <Math tex="\Delta" /> est un complexe <Math tex="\delta" /> tel que <Math tex="\delta^2=\Delta" />.
          </Box>
          <Callout variant="success" title="Propriété">
            <p>
              Tout complexe <Math tex="\Delta\neq0" /> admet exactement deux racines carrées, opposées l&apos;une de
              l&apos;autre. Si <Math tex="\Delta=re^{i\theta}" />, ces racines sont{" "}
              <Math tex="\pm\sqrt r\,e^{i\theta/2}" />.
            </p>
          </Callout>
          <Box title="Méthode algébrique" tone="def">
            <p>
              On pose <Math tex="\delta=x+iy" /> (<Math tex="x,y\in\mathbb R" />) et on résout le système obtenu en
              identifiant <Math tex="\delta^2=\Delta" /> et <Math tex="|\delta|^2=|\Delta|" /> :
            </p>
            <MathBlock tex="\begin{cases}x^2-y^2=\operatorname{Re}(\Delta)\\ x^2+y^2=|\Delta|\\ 2xy=\operatorname{Im}(\Delta)\end{cases}" />
            <p>
              Les deux premières lignes donnent <Math tex="x^2" /> et <Math tex="y^2" /> ; le signe de{" "}
              <Math tex="xy" /> impose alors de choisir <Math tex="x" /> et <Math tex="y" /> de même signe ou de
              signes contraires.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Résolution de az² + bz + c = 0">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="az^2+bz+c=0" /> (<Math tex="a,b,c\in\mathbb C" />, <Math tex="a\neq0" />), de
            discriminant <Math tex="\Delta=b^2-4ac" />.
          </Box>
          <Callout variant="success" title="Résolution">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="\Delta=0" /> : une unique solution (racine double){" "}
                <Math tex="z=-\dfrac{b}{2a}" />.
              </li>
              <li>
                Si <Math tex="\Delta\neq0" />, en notant <Math tex="\delta" /> une racine carrée de{" "}
                <Math tex="\Delta" /> : deux solutions <Math tex="z_1=\dfrac{-b+\delta}{2a}" /> et{" "}
                <Math tex="z_2=\dfrac{-b-\delta}{2a}" />.
              </li>
              <li>
                Dans tous les cas : <Math tex="z_1+z_2=-\dfrac{b}{a}" /> et <Math tex="z_1z_2=\dfrac{c}{a}" />.
              </li>
            </ul>
          </Callout>
          <Box title="Cas particulier : coefficients réels" tone="def">
            Si <Math tex="a,b,c\in\mathbb R" /> et <Math tex="\Delta<0" />, alors <Math tex="(E)" /> admet deux
            solutions complexes <strong>conjuguées</strong> : <Math tex="z=\dfrac{-b+i\sqrt{-\Delta}}{2a}" /> et{" "}
            <Math tex="\bar z=\dfrac{-b-i\sqrt{-\Delta}}{2a}" />.
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. RACINES N-IÈMES ===================== */}
      <LessonSection
        id="cours-racines-n"
        kicker="03 · Généraliser la racine carrée"
        title="Racines n-ièmes d'un nombre complexe"
        tone="light"
        description="L'équation zⁿ = a possède toujours exactement n solutions complexes, régulièrement réparties sur un cercle."
      >
        <CourseBlock numeral="V" title="Racines n-ièmes de l'unité">
          <Box title="Définition" tone="def">
            Une <strong className="text-foreground">racine n-ième de l&apos;unité</strong> est un complexe{" "}
            <Math tex="u" /> tel que <Math tex="u^n=1" /> (<Math tex="n\in\mathbb N^*" />).
          </Box>
          <Callout variant="success" title="Propriété">
            <p>
              L&apos;équation <Math tex="u^n=1" /> admet exactement <Math tex="n" /> solutions :
            </p>
            <MathBlock tex="u_k=e^{i\frac{2k\pi}{n}},\qquad k\in\{0,1,\dots,n-1\}" />
            <p>
              De plus, pour <Math tex="n\ge2" />, la somme de toutes les racines n-ièmes de l&apos;unité est nulle :{" "}
              <Math tex="\displaystyle\sum_{k=0}^{n-1}u_k=0" />.
            </p>
          </Callout>
          <Box title="Exemple : racines cubiques de l'unité" tone="def">
            Pour <Math tex="n=3" /> : <Math tex="1" />, <Math tex="j=e^{i\frac{2\pi}{3}}=-\dfrac12+i\dfrac{\sqrt3}{2}" />{" "}
            et <Math tex="j^2=e^{i\frac{4\pi}{3}}=\bar j=-\dfrac12-i\dfrac{\sqrt3}{2}" />, avec{" "}
            <Math tex="1+j+j^2=0" /> et <Math tex="j^3=1" />.
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Racines n-ièmes d'un complexe non nul">
          <Box title="Propriété" tone="prop">
            Soit <Math tex="a=re^{i\theta}" /> un complexe non nul (<Math tex="r>0" />) et{" "}
            <Math tex="n\in\mathbb N^*" />. L&apos;équation <Math tex="z^n=a" /> admet exactement{" "}
            <Math tex="n" /> solutions :
          </Box>
          <MathBlock tex="z_k=\sqrt[n]{r}\;e^{i\frac{\theta+2k\pi}{n}},\qquad k\in\{0,1,\dots,n-1\}" />
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. TRANSFORMATIONS PLANES ===================== */}
      <LessonSection
        id="cours-transformations"
        kicker="04 · La géométrie racontée par les complexes"
        title="Transformations planes et nombres complexes"
        tone="muted"
        description="Translation, homothétie, rotation et similitude directe : chaque transformation usuelle du plan possède une écriture complexe simple."
      >
        <CourseBlock numeral="VII" title="Translation, homothétie, rotation">
          <Box title="Translation" tone="def">
            Soit <Math tex="\vec u" /> d&apos;affixe <Math tex="b" />. La translation de vecteur{" "}
            <Math tex="\vec u" /> transforme <Math tex="M(z)" /> en <Math tex="M'(z')" /> avec :
          </Box>
          <MathBlock tex="z'=z+b" />
          <Box title="Homothétie" tone="def">
            Soit <Math tex="\Omega(\omega)" /> et <Math tex="k\in\mathbb R^*\setminus\{1\}" />.
            L&apos;homothétie de centre <Math tex="\Omega" /> et de rapport <Math tex="k" /> transforme{" "}
            <Math tex="M(z)" /> en <Math tex="M'(z')" /> avec :
          </Box>
          <MathBlock tex="z'-\omega=k(z-\omega)\qquad\text{c'est-à-dire}\qquad z'=kz+\omega(1-k)" />
          <Box title="Rotation" tone="def">
            Soit <Math tex="\Omega(\omega)" /> et <Math tex="\theta\in\mathbb R" />. La rotation de centre{" "}
            <Math tex="\Omega" /> et d&apos;angle <Math tex="\theta" /> transforme <Math tex="M(z)" /> en{" "}
            <Math tex="M'(z')" /> avec :
          </Box>
          <MathBlock tex="z'-\omega=e^{i\theta}(z-\omega)" />
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Similitude plane directe : l'écriture z' = az + b">
          <Box title="Théorème" tone="prop">
            Soit <Math tex="a\in\mathbb C^*\setminus\{1\}" /> et <Math tex="b\in\mathbb C" />. La transformation qui
            associe à <Math tex="M(z)" /> le point <Math tex="M'(z')" /> tel que <Math tex="z'=az+b" /> admet un
            unique point invariant <Math tex="\Omega(\omega)" /> avec <Math tex="\omega=\dfrac{b}{1-a}" />, et
            s&apos;écrit :
          </Box>
          <MathBlock tex="z'-\omega=a(z-\omega)" />
          <p className="text-sm text-foreground-muted sm:text-base">
            On dit que c&apos;est la <strong className="text-foreground">similitude plane directe</strong> de centre{" "}
            <Math tex="\Omega(\omega)" />, de rapport <Math tex="k=|a|" /> et d&apos;angle{" "}
            <Math tex="\theta\equiv\arg(a)\ [2\pi]" /> : elle vérifie{" "}
            <Math tex="\Omega M'=k\,\Omega M" /> et{" "}
            <Math tex="\big(\overrightarrow{\Omega M},\overrightarrow{\Omega M'}\big)\equiv\theta\ [2\pi]" />.
          </p>
          <Callout variant="warning" title="Cas particuliers à repérer immédiatement">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Si <Math tex="a=1" /> : <Math tex="z'=z+b" /> est une translation (pas de point invariant si{" "}
                <Math tex="b\neq0" />).
              </li>
              <li>
                Si <Math tex="a\in\mathbb R\setminus\{0,1\}" /> : c&apos;est une homothétie de rapport{" "}
                <Math tex="a" />.
              </li>
              <li>
                Si <Math tex="|a|=1" /> et <Math tex="a\neq1" /> : c&apos;est une rotation d&apos;angle{" "}
                <Math tex="\arg(a)" />.
              </li>
              <li>
                Si <Math tex="a\notin\mathbb R" /> et <Math tex="|a|\neq1" /> : similitude directe « générale »
                (ni homothétie, ni rotation).
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
        description="12 exercices corrigés, niveau Sciences Mathématiques : forme exponentielle, linéarisation, équations dans ℂ, racines n-ièmes, transformations et similitude directe."
      >
        <ExerciseGroup
          total={12}
          celebrationTitle="Bravo, les 12 exercices sont vérifiés !"
          celebrationSubtitle="Le chapitre nombres complexes (partie 2) est terminé."
        >
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Forme exponentielle et calculs"
            itemsLabel="3 calculs"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Écrire <Math tex="z_1=1+i\sqrt3" /> et <Math tex="z_2=1-i" /> sous forme exponentielle, puis
                calculer <Math tex="z_1z_2" />, <Math tex="\dfrac{z_1}{z_2}" /> et <Math tex="z_1^6" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="|z_1|=\sqrt{1+3}=2" /> et <Math tex="\arg(z_1)\equiv\dfrac\pi3\ [2\pi]" />, donc{" "}
                  <Math tex="z_1=2e^{i\pi/3}" />.
                </p>
                <p>
                  <Math tex="|z_2|=\sqrt2" /> et <Math tex="\arg(z_2)\equiv-\dfrac\pi4\ [2\pi]" />, donc{" "}
                  <Math tex="z_2=\sqrt2\,e^{-i\pi/4}" />.
                </p>
                <p>
                  <Math tex="z_1z_2=2\sqrt2\,e^{i(\pi/3-\pi/4)}=2\sqrt2\,e^{i\pi/12}" /> ;{" "}
                  <Math tex="\dfrac{z_1}{z_2}=\sqrt2\,e^{i(\pi/3+\pi/4)}=\sqrt2\,e^{i7\pi/12}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="z_1^6=2^6e^{i6\pi/3}=64e^{i2\pi}=64" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Linéarisation"
            itemsLabel="1 linéarisation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Linéariser <Math tex="\cos^4\theta" /> à l&apos;aide de la formule d&apos;Euler.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\cos^4\theta=\left(\dfrac{e^{i\theta}+e^{-i\theta}}{2}\right)^4=\dfrac{1}{16}\left(e^{4i\theta}+4e^{2i\theta}+6+4e^{-2i\theta}+e^{-4i\theta}\right)" />
                </p>
                <p>
                  <Math tex="\cos^4\theta=\dfrac{1}{16}\big(2\cos4\theta+8\cos2\theta+6\big)" />
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\cos^4\theta=\dfrac18\cos4\theta+\dfrac12\cos2\theta+\dfrac38" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Équation à coefficients réels"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb C" /> l&apos;équation <Math tex="z^2+2z+5=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\Delta=2^2-4\times1\times5=4-20=-16=(4i)^2" />.
                </p>
                <p>
                  Les solutions sont <Math tex="z_1=\dfrac{-2+4i}{2}=-1+2i" /> et{" "}
                  <Math tex="z_2=\dfrac{-2-4i}{2}=-1-2i" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{-1-2i\,;\,-1+2i\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Équation à coefficients complexes"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb C" /> l&apos;équation{" "}
                <Math tex="z^2-(3+i)z+(2+2i)=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="\Delta=(3+i)^2-4(2+2i)=(8+6i)-(8+8i)=-2i" />.
                </p>
                <p>
                  Cherchons <Math tex="\delta=x+iy" /> tel que <Math tex="\delta^2=-2i" /> :{" "}
                  <Math tex="x^2-y^2=0" />, <Math tex="2xy=-2" /> et <Math tex="x^2+y^2=2" />. D&apos;où{" "}
                  <Math tex="x^2=y^2=1" /> et <Math tex="xy=-1<0" />, donc <Math tex="\delta=1-i" /> (ou{" "}
                  <Math tex="-1+i" />).
                </p>
                <p>
                  <Math tex="z_1=\dfrac{(3+i)+(1-i)}{2}=2" /> et{" "}
                  <Math tex="z_2=\dfrac{(3+i)-(1-i)}{2}=1+i" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{2\,;\,1+i\}" /> (on vérifie : <Math tex="z_1+z_2=3+i" /> et{" "}
                  <Math tex="z_1z_2=2+2i" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Racines carrées d'un complexe"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les racines carrées du nombre complexe <Math tex="\Delta=5+12i" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  On pose <Math tex="\delta=x+iy" />. On a <Math tex="x^2-y^2=5" />,{" "}
                  <Math tex="2xy=12" /> et <Math tex="x^2+y^2=|\Delta|=\sqrt{25+144}=13" />.
                </p>
                <p>
                  D&apos;où <Math tex="x^2=9" /> et <Math tex="y^2=4" />, avec <Math tex="xy=6>0" /> donc{" "}
                  <Math tex="x" /> et <Math tex="y" /> de même signe.
                </p>
                <p className="font-semibold text-green-700">
                  Les racines carrées de <Math tex="\Delta" /> sont <Math tex="\delta_1=3+2i" /> et{" "}
                  <Math tex="\delta_2=-3-2i" /> (on vérifie <Math tex="(3+2i)^2=9+12i-4=5+12i" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Racines cubiques de l'unité"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer les racines cubiques de l&apos;unité, puis calculer <Math tex="1+j+j^2" /> et{" "}
                <Math tex="j\times j^2" /> où <Math tex="j=e^{i2\pi/3}" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Les racines cubiques de l&apos;unité sont <Math tex="u_k=e^{i\frac{2k\pi}{3}}" /> pour{" "}
                  <Math tex="k\in\{0,1,2\}" />, soit <Math tex="1" />, <Math tex="j=-\dfrac12+i\dfrac{\sqrt3}2" />{" "}
                  et <Math tex="j^2=-\dfrac12-i\dfrac{\sqrt3}2" />.
                </p>
                <p>
                  <Math tex="1+j+j^2=\left(-\dfrac12-\dfrac12+1\right)+i\left(\dfrac{\sqrt3}2-\dfrac{\sqrt3}2\right)=0" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="j\times j^2=j^3=1" /> (car <Math tex="j" /> est une racine cubique de l&apos;unité).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Exercice 7 · Racines 4-ièmes d'un complexe"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Résoudre dans <Math tex="\mathbb C" /> l&apos;équation <Math tex="z^4=-16" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="-16=16\,e^{i\pi}" />, donc les solutions sont{" "}
                  <Math tex="z_k=16^{1/4}e^{i\frac{\pi+2k\pi}{4}}=2e^{i\left(\frac\pi4+\frac{k\pi}2\right)}" /> pour{" "}
                  <Math tex="k\in\{0,1,2,3\}" />.
                </p>
                <p>
                  <Math tex="z_0=2e^{i\pi/4}=\sqrt2+i\sqrt2" /> ; <Math tex="z_1=2e^{i3\pi/4}=-\sqrt2+i\sqrt2" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="z_2=2e^{i5\pi/4}=-\sqrt2-i\sqrt2" /> ;{" "}
                  <Math tex="z_3=2e^{i7\pi/4}=\sqrt2-i\sqrt2" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Exercice 8 · Équation du troisième degré"
            itemsLabel="1 équation"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                On considère <Math tex="P(z)=z^3-(4+i)z^2+(5+4i)z-5i" />. Vérifier que{" "}
                <Math tex="z_0=i" /> est une solution de <Math tex="P(z)=0" />, puis résoudre cette équation dans{" "}
                <Math tex="\mathbb C" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="P(i)=i^3-(4+i)i^2+(5+4i)i-5i=-i+(4+i)+(-4+5i)-5i=0" />, donc{" "}
                  <Math tex="z_0=i" /> est bien une solution.
                </p>
                <p>
                  Par division euclidienne de <Math tex="P(z)" /> par <Math tex="(z-i)" /> :{" "}
                  <Math tex="P(z)=(z-i)(z^2-4z+5)" />.
                </p>
                <p>
                  Pour <Math tex="z^2-4z+5=0" /> : <Math tex="\Delta=16-20=-4=(2i)^2" />, donc{" "}
                  <Math tex="z=\dfrac{4\pm2i}{2}=2\pm i" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="S=\{i\,;\,2-i\,;\,2+i\}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Exercice 9 · Écriture complexe d'une rotation"
            itemsLabel="1 image"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="\Omega(1+i)" /> et <Math tex="A(4+3i)" />. Déterminer l&apos;affixe de
                l&apos;image <Math tex="A'" /> de <Math tex="A" /> par la rotation de centre <Math tex="\Omega" />{" "}
                et d&apos;angle <Math tex="\dfrac\pi2" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;écriture complexe est <Math tex="z'-\omega=e^{i\pi/2}(z-\omega)=i(z-\omega)" />.
                </p>
                <p>
                  <Math tex="z_{A'}=(1+i)+i\big((4+3i)-(1+i)\big)=(1+i)+i(3+2i)=(1+i)+(3i-2)" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="z_{A'}=-1+4i" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Exercice 10 · Écriture complexe d'une homothétie"
            itemsLabel="1 image"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="\Omega(2-i)" /> et <Math tex="A(1+i)" />. Déterminer l&apos;affixe de
                l&apos;image <Math tex="A'" /> de <Math tex="A" /> par l&apos;homothétie de centre{" "}
                <Math tex="\Omega" /> et de rapport <Math tex="k=3" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="z'=kz+\omega(1-k)=3(1+i)+(2-i)(1-3)" />
                </p>
                <p>
                  <Math tex="z_{A'}=3+3i+(2-i)(-2)=3+3i-4+2i" />
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="z_{A'}=-1+5i" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Exercice 11 · Nature d'une transformation z' = az + b"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="f" /> la transformation qui associe à <Math tex="M(z)" /> le point{" "}
                <Math tex="M'(z')" /> tel que <Math tex="z'=(1+i\sqrt3)z-2" />. Déterminer la nature de{" "}
                <Math tex="f" /> et ses éléments caractéristiques.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Ici <Math tex="a=1+i\sqrt3" /> et <Math tex="b=-2" />. On a{" "}
                  <Math tex="|a|=\sqrt{1+3}=2" /> et <Math tex="\arg(a)\equiv\dfrac\pi3\ [2\pi]" />.
                </p>
                <p>
                  Puisque <Math tex="a\notin\mathbb R" /> et <Math tex="|a|\neq1" />, <Math tex="f" /> est une{" "}
                  <strong>similitude plane directe</strong> de rapport <Math tex="k=2" /> et d&apos;angle{" "}
                  <Math tex="\theta=\dfrac\pi3" />.
                </p>
                <p>
                  Son centre <Math tex="\Omega(\omega)" /> vérifie{" "}
                  <Math tex="\omega=\dfrac{b}{1-a}=\dfrac{-2}{-i\sqrt3}=\dfrac{2}{i\sqrt3}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\omega=-\dfrac{2\sqrt3}{3}i" />, donc <Math tex="f" /> est la similitude directe de
                  centre <Math tex="\Omega\!\left(0,-\dfrac{2\sqrt3}{3}\right)" />, de rapport <Math tex="2" /> et
                  d&apos;angle <Math tex="\dfrac\pi3" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Exercice 12 · Triangle équilatéral direct"
            itemsLabel="1 démonstration"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Soit <Math tex="A(a)" />, <Math tex="B(b)" /> et <Math tex="C(c)" /> trois points d&apos;affixes{" "}
                <Math tex="a" />, <Math tex="b" />, <Math tex="c" />, et <Math tex="j=e^{i2\pi/3}" />. Montrer que{" "}
                <Math tex="C" /> est l&apos;image de <Math tex="B" /> par la rotation de centre <Math tex="A" /> et
                d&apos;angle <Math tex="\dfrac\pi3" /> si et seulement si <Math tex="aj+bj^2+c=0" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="C" /> est l&apos;image de <Math tex="B" /> par cette rotation ssi{" "}
                  <Math tex="c-a=e^{i\pi/3}(b-a)" />.
                </p>
                <p>
                  Or <Math tex="-j^2=-e^{i4\pi/3}=e^{i\pi}e^{i4\pi/3}=e^{i\pi/3}" />, donc la relation
                  s&apos;écrit <Math tex="c-a=-j^2(b-a)=-j^2b+j^2a" />.
                </p>
                <p>
                  D&apos;où <Math tex="c+a(-1-j^2)+j^2b=0" />. Comme <Math tex="1+j+j^2=0" />, on a{" "}
                  <Math tex="-1-j^2=j" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc la relation équivaut à <Math tex="c+aj+j^2b=0" />, c&apos;est-à-dire{" "}
                  <Math tex="aj+bj^2+c=0" />. CQFD.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
