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
  title: "Dénombrement · Cours et exercices | 1ère Bac Sciences Math",
  description:
    "Cours complet sur le dénombrement pour la 1ère année Baccalauréat Sciences Mathématiques : cardinal d'un ensemble fini et formule de Poincaré, principe multiplicatif, arrangements avec et sans répétition, permutations, combinaisons et triangle de Pascal, formule du binôme de Newton, avec exercices intégralement corrigés.",
  kicker: "1ère Bac Sciences Math · Semestre 2",
  heroTitle: "Dénombrement",
  heroSubtitle:
    "Compter sans énumérer : la bonne question à se poser — l'ordre compte-t-il ? peut-on répéter ? — mène directement à la bonne formule.",
  footerNote: "Dénombrement · Mathématiques, 1ère année Baccalauréat Sciences Math, semestre 2.",
  sections: [
    { id: "cours-cardinal", label: "Cardinal, Poincaré" },
    { id: "cours-principe", label: "Principe multiplicatif" },
    { id: "cours-arrangements", label: "Arrangements, permutations" },
    { id: "cours-combinaisons", label: "Combinaisons, binôme" },
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
          { value: "4", label: "outils de comptage" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-cardinal"
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
            <Math tex="C_n^p" />
          </div>
        }
      />

      {/* ===================== I. CARDINAL, POINCARÉ ===================== */}
      <LessonSection
        id="cours-cardinal"
        kicker="01 · Compter les éléments d'un ensemble"
        title="Cardinal d'un ensemble fini, formule de Poincaré"
        tone="light"
        description="Additionner deux cardinaux compte deux fois l'intersection — il faut la retrancher."
      >
        <CourseBlock numeral="I" title="Cardinal, réunion, complémentaire">
          <Box title="Définitions" tone="def">
            <p>
              <Math tex="\mathrm{card}(E)" /> est le nombre d&apos;éléments de <Math tex="E" /> ;{" "}
              <Math tex="\mathrm{card}(\varnothing)=0" />.
            </p>
          </Box>
          <Callout variant="success" title="Propriétés fondamentales">
            <MathBlock tex="\mathrm{card}(E\cup F)=\mathrm{card}(E)+\mathrm{card}(F)-\mathrm{card}(E\cap F)" />
            <p>
              Si <Math tex="E\cap F=\varnothing" /> : <Math tex="\mathrm{card}(E\cup F)=\mathrm{card}(E)+\mathrm{card}(F)" />
              . Si <Math tex="E\subset F" /> : <Math tex="\mathrm{card}(F\setminus E)=\mathrm{card}(F)-\mathrm{card}(E)" />
              .
            </p>
          </Callout>
          <Box title="Formule de Poincaré à trois ensembles" tone="prop">
            <MathBlock tex="\mathrm{card}(A\cup B\cup C)=\mathrm{card}A+\mathrm{card}B+\mathrm{card}C-\mathrm{card}(A\cap B)-\mathrm{card}(A\cap C)-\mathrm{card}(B\cap C)+\mathrm{card}(A\cap B\cap C)" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== II. PRINCIPE MULTIPLICATIF ===================== */}
      <LessonSection
        id="cours-principe"
        kicker="02 · Compter les possibilités successives"
        title="Principe multiplicatif"
        tone="muted"
        description="Le résultat central du chapitre : si chaque étape offre un choix indépendant, on multiplie les nombres de possibilités."
      >
        <CourseBlock numeral="II" title="Le théorème fondamental du dénombrement">
          <Callout variant="success" title="Propriété">
            <p>
              Si un événement <Math tex="C_1" /> peut se produire de <Math tex="n_1" /> façons, ...,{" "}
              <Math tex="C_p" /> de <Math tex="n_p" /> façons, tous indépendants, le nombre total de
              possibilités de l&apos;événement combiné est :
            </p>
            <MathBlock tex="n=n_1\times n_2\times\cdots\times n_p" />
          </Callout>
          <Box title="Nombre d'applications de N dans M" tone="def">
            <p>
              Si <Math tex="\mathrm{card}(N)=n" /> et <Math tex="\mathrm{card}(M)=m" />, le nombre
              d&apos;applications de <Math tex="N" /> dans <Math tex="M" /> est <Math tex="m^n" />. Le nombre
              de parties d&apos;un ensemble à <Math tex="n" /> éléments est <Math tex="2^n" />.
            </p>
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== III. ARRANGEMENTS, PERMUTATIONS ===================== */}
      <LessonSection
        id="cours-arrangements"
        kicker="03 · Quand l'ordre compte"
        title="Arrangements et permutations"
        tone="light"
        description="Un arrangement est une liste ordonnée d'éléments distincts d'un ensemble ; une permutation utilise tous les éléments."
      >
        <CourseBlock numeral="III" title="Arrangements avec et sans répétition">
          <Box title="Définitions et formules" tone="def">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Avec répétition</strong> (p-liste) : le nombre
                d&apos;arrangements de <Math tex="p" /> éléments (non nécessairement distincts) d&apos;un
                ensemble à <Math tex="n" /> éléments est <Math tex="n^p" />.
              </li>
              <li>
                <strong className="text-foreground">Sans répétition</strong> (<Math tex="p\le n" />) : le
                nombre d&apos;arrangements de <Math tex="p" /> éléments distincts est :
                <MathBlock tex="A_n^p=n\times(n-1)\times\cdots\times(n-p+1)=\dfrac{n!}{(n-p)!}" />
              </li>
            </ul>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="IV" title="Permutations">
          <Callout variant="success" title="Propriétés">
            <p>
              Le nombre de <strong>permutations</strong> (arrangements sans répétition de{" "}
              <Math tex="n" /> éléments parmi <Math tex="n" />) est <Math tex="A_n^n=n!" />.
            </p>
            <p>
              Si <Math tex="n" /> éléments comportent des répétitions (<Math tex="n_1" /> fois le
              premier, ..., <Math tex="n_k" /> fois le dernier, avec{" "}
              <Math tex="n_1+\cdots+n_k=n" />), le nombre de{" "}
              <strong>permutations avec répétitions</strong> (par exemple d&apos;anagrammes) est :
            </p>
            <MathBlock tex="P_n=\dfrac{n!}{n_1!\,n_2!\,\cdots\,n_k!}" />
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IV. COMBINAISONS, BINÔME ===================== */}
      <LessonSection
        id="cours-combinaisons"
        kicker="04 · Quand l'ordre ne compte pas"
        title="Combinaisons, triangle de Pascal, binôme de Newton"
        tone="muted"
        description="Choisir un sous-ensemble : c'est le concept qui structure toute la fin du chapitre."
      >
        <CourseBlock numeral="V" title="Combinaisons">
          <Box title="Définition et formule" tone="def">
            <p>
              Une <strong className="text-foreground">combinaison</strong> de <Math tex="p" /> éléments
              d&apos;un ensemble à <Math tex="n" /> éléments est un sous-ensemble à <Math tex="p" /> éléments
              (l&apos;ordre n&apos;importe pas). Leur nombre se note <Math tex="C_n^p" /> :
            </p>
            <MathBlock tex="C_n^p=\dfrac{A_n^p}{p!}=\dfrac{n!}{p!(n-p)!}" />
          </Box>
          <Callout variant="success" title="Propriétés et triangle de Pascal">
            <MathBlock tex="C_n^0=1,\qquad C_n^1=n,\qquad C_n^n=1,\qquad C_n^p=C_n^{n-p}" />
            <MathBlock tex="C_n^p=C_{n-1}^{p-1}+C_{n-1}^p\quad(\text{relation de Pascal})" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VI" title="Formule du binôme de Newton">
          <Box title="Propriété" tone="prop">
            <MathBlock tex="(a+b)^n=\sum_{p=0}^{n}C_n^p\,a^{n-p}b^p=C_n^0a^n+C_n^1a^{n-1}b+\cdots+C_n^{n-1}ab^{n-1}+C_n^nb^n" />
          </Box>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="05 · À toi de jouer"
        title="Exercices · Dénombrement"
        tone="light"
        description="6 exercices corrigés couvrant Poincaré, principe multiplicatif, arrangement, permutation avec répétition, combinaison et binôme de Newton."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Le chapitre dénombrement est terminé.">
          <ExerciseCard
            id="1"
            index={1}
            title="Exercice 1 · Formule de Poincaré"
            itemsLabel="1 étude"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Dans une classe de <Math tex="40" /> élèves, <Math tex="25" /> aiment les mathématiques,{" "}
                <Math tex="18" /> aiment la physique, et <Math tex="10" /> aiment les deux. Combien
                d&apos;élèves aiment au moins une des deux matières ? Combien n&apos;aiment ni l&apos;une ni
                l&apos;autre ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Soient <Math tex="M" /> et <Math tex="P" /> les ensembles d&apos;élèves aimant les maths et
                  la physique. <Math tex="\mathrm{card}(M)=25" />, <Math tex="\mathrm{card}(P)=18" />,{" "}
                  <Math tex="\mathrm{card}(M\cap P)=10" />.
                </p>
                <MathBlock tex="\mathrm{card}(M\cup P)=25+18-10=33" />
                <p className="font-semibold text-green-700">
                  <Math tex="33" /> élèves aiment au moins une matière, donc{" "}
                  <Math tex="40-33=7" /> n&apos;aiment ni l&apos;une ni l&apos;autre.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Exercice 2 · Principe multiplicatif"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Une plaque d&apos;immatriculation est formée de <Math tex="2" /> lettres (parmi{" "}
                <Math tex="26" />) suivies de <Math tex="4" /> chiffres (parmi <Math tex="10" />), avec
                répétitions autorisées. Combien de plaques différentes peut-on former ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Il y a <Math tex="26" /> choix pour chacune des <Math tex="2" /> lettres et{" "}
                  <Math tex="10" /> choix pour chacun des <Math tex="4" /> chiffres, tous indépendants :
                </p>
                <MathBlock tex="n=26^2\times10^4=676\times10\,000=6\,760\,000" />
                <p className="font-semibold text-green-700">
                  Il y a <Math tex="6\,760\,000" /> plaques possibles.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Exercice 3 · Arrangement (podium)"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Une course oppose <Math tex="12" /> coureurs. Combien de podiums (1ᵉʳ, 2ᵉ, 3ᵉ) différents
                peut-on constituer ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;ordre compte et les répétitions sont interdites (un coureur ne peut pas occuper deux
                  places) : c&apos;est un arrangement sans répétition de <Math tex="3" /> éléments parmi{" "}
                  <Math tex="12" />.
                </p>
                <MathBlock tex="A_{12}^3=12\times11\times10=1320" />
                <p className="font-semibold text-green-700">
                  Il y a <Math tex="1320" /> podiums possibles.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Exercice 4 · Permutation avec répétition (anagrammes)"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Combien d&apos;anagrammes peut-on former avec les lettres du mot{" "}
                « <Math tex="\text{ARRANGER}" /> » ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  Le mot comporte <Math tex="8" /> lettres, avec <Math tex="A" /> répété <Math tex="2" /> fois
                  et <Math tex="R" /> répété <Math tex="3" /> fois (les autres lettres{" "}
                  <Math tex="N,G,E" /> apparaissant une seule fois) :
                </p>
                <MathBlock tex="P_8=\dfrac{8!}{2!\,3!}=\dfrac{40\,320}{2\times6}=3360" />
                <p className="font-semibold text-green-700">
                  Il y a <Math tex="3360" /> anagrammes.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exercice 5 · Combinaison"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Un groupe compte <Math tex="6" /> hommes et <Math tex="4" /> femmes. Combien de comités de{" "}
                <Math tex="4" /> personnes comportant exactement <Math tex="2" /> hommes et <Math tex="2" />{" "}
                femmes peut-on former ?
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  L&apos;ordre n&apos;importe pas : il faut choisir <Math tex="2" /> hommes parmi{" "}
                  <Math tex="6" />, et indépendamment <Math tex="2" /> femmes parmi <Math tex="4" /> :
                </p>
                <MathBlock tex="C_6^2\times C_4^2=\dfrac{6\times5}2\times\dfrac{4\times3}2=15\times6=90" />
                <p className="font-semibold text-green-700">
                  Il y a <Math tex="90" /> comités possibles.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Exercice 6 · Binôme de Newton"
            itemsLabel="1 calcul"
            items={
              <p className="rounded-xl border border-border p-4 text-sm">
                Déterminer le coefficient de <Math tex="x^3" /> dans le développement de{" "}
                <Math tex="(2x-1)^5" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  D&apos;après la formule du binôme :{" "}
                  <Math tex="(2x-1)^5=\displaystyle\sum_{p=0}^{5}C_5^p(2x)^{5-p}(-1)^p" />. Le terme en{" "}
                  <Math tex="x^3" /> correspond à <Math tex="5-p=3" />, soit <Math tex="p=2" /> :
                </p>
                <MathBlock tex="C_5^2(2x)^3(-1)^2=10\times8x^3\times1=80x^3" />
                <p className="font-semibold text-green-700">
                  Le coefficient de <Math tex="x^3" /> est <Math tex="80" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
