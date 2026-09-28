import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  FormulaBlock,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Structures algébriques · Cours et exercices | 2ème Bac Sciences Math",
  description:
    "Cours complet sur les structures algébriques : lois de composition interne (parties stables, commutativité, associativité, élément neutre, élément symétrisable, élément régulier, morphismes), puis les structures de groupe, anneau et corps, avec 11 exercices intégralement corrigés. 2ème Bac Sciences Mathématiques (A et B), semestre 2.",
  kicker: "2ème Bac Sciences Math · Semestre 2",
  heroTitle: "Structures algébriques",
  heroSubtitle:
    "Lois de composition interne, groupes, anneaux et corps : le cours complet avec démonstrations, puis 11 exercices corrigés en détail.",
  footerNote: "Structures algébriques · Mathématiques, 2ème Bac Sciences Mathématiques, semestre 2.",
  sections: [
    { id: "cours-lci", label: "Lois de composition interne" },
    { id: "cours-groupe", label: "Structure de groupe" },
    { id: "cours-anneau-corps", label: "Anneaux et corps" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** A numbered block used to structure the "Cours" section (I, II, III...). */
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

/** Worked example block, statement + solution. */
function Example({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm sm:p-5">
      <p className="mb-2 font-semibold text-foreground">{title}</p>
      <div className="space-y-2 text-foreground-muted">{children}</div>
    </div>
  );
}

/** Small labelled box for grouped examples/lists. */
function Box({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
      {title ? <p className="mb-2 font-semibold text-foreground-muted">{title}</p> : null}
      <div className="space-y-1.5">{children}</div>
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
          { value: "10", label: "notions du cours" },
          { value: "11", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours-lci"
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
          <svg viewBox="0 0 240 200" className="h-56 w-56 text-white sm:h-72 sm:w-72">
            <rect x="30" y="30" width="70" height="50" rx="6" fill="none" stroke="white" strokeWidth="1.6" opacity="0.85" />
            <rect x="30" y="110" width="70" height="50" rx="6" fill="none" stroke="white" strokeWidth="1.6" opacity="0.85" />
            <rect x="150" y="70" width="70" height="50" rx="6" fill="none" stroke="#fb923c" strokeWidth="2" />
            <text x="52" y="60" fontSize="16" fontWeight="700" fill="white">x</text>
            <text x="52" y="140" fontSize="16" fontWeight="700" fill="white">y</text>
            <text x="176" y="100" fontSize="15" fontWeight="700" fill="#fb923c">x∗y</text>
            <line x1="100" y1="55" x2="150" y2="85" stroke="white" strokeWidth="1.4" opacity="0.7" />
            <line x1="100" y1="135" x2="150" y2="105" stroke="white" strokeWidth="1.4" opacity="0.7" />
            <text x="30" y="20" fontSize="12" fill="white" opacity="0.7">E × E</text>
            <text x="150" y="60" fontSize="12" fill="#fb923c" opacity="0.9">E</text>
          </svg>
        }
      />

      {/* ===================== I. LCI : DÉFINITION ET EXEMPLES ===================== */}
      <LessonSection
        id="cours-lci"
        kicker="01 · Le vocabulaire de base"
        title="Lois de composition interne"
        tone="light"
        description="Une loi de composition interne combine deux éléments d&apos;un ensemble pour en produire un troisième, dans le même ensemble."
      >
        <CourseBlock numeral="I" title="Définition et exemples">
          <p>
            Soit <Math tex="E" /> un ensemble non vide. Une <strong>loi de composition interne</strong> (l.c.i.) sur{" "}
            <Math tex="E" /> (on dit aussi une opération dans <Math tex="E" />) est une application{" "}
            <Math tex="f" /> de <Math tex="E\times E" /> dans <Math tex="E" /> :
          </p>
          <FormulaBlock tex="\begin{gathered} f: E\times E \to E \\ (x,y)\longmapsto f(x,y) \end{gathered}" />
          <p>
            L&apos;élément <Math tex="f(x,y)" /> s&apos;appelle le composé de <Math tex="x" /> et <Math tex="y" />{" "}
            (dans cet ordre) par cette loi ; on le note le plus souvent <Math tex="x\ast y" /> (ou{" "}
            <Math tex="x\cdot y" />, <Math tex="x+y" />, <Math tex="xy" />, <Math tex="x\top y" />
            …) au lieu de <Math tex="f(x,y)" />.
          </p>
          <Box title="Exemples de lois de composition internes">
            <p>
              <strong className="text-foreground">•</strong> L&apos;addition et la multiplication sont des l.c.i.
              sur <Math tex="\mathbb N" />, <Math tex="\mathbb Z" />, <Math tex="\mathbb Q" />,{" "}
              <Math tex="\mathbb R" /> et <Math tex="\mathbb C" />.
            </p>
            <p>
              <strong className="text-foreground">•</strong> Dans <Math tex="\mathcal P(E)" /> (parties d&apos;un
              ensemble <Math tex="E" />), l&apos;intersection <Math tex="\cap" />, la réunion <Math tex="\cup" /> et
              la différence symétrique <Math tex="\Delta" /> sont des l.c.i.
            </p>
            <p>
              <strong className="text-foreground">•</strong> Dans <Math tex="\mathcal M_2(\mathbb R)" /> (matrices
              carrées d&apos;ordre 2), la somme et le produit matriciels sont des l.c.i.
            </p>
            <p>
              <strong className="text-foreground">•</strong> Dans <Math tex="\mathcal F(I,\mathbb R)" /> (fonctions
              d&apos;un intervalle <Math tex="I" /> dans <Math tex="\mathbb R" />), la somme et le produit de deux
              fonctions sont des l.c.i. ; dans <Math tex="\mathcal F(E,E)" />, la composition{" "}
              <Math tex="\circ" /> est une l.c.i.
            </p>
          </Box>
          <Callout variant="warning" title="Contre-exemples">
            <p>
              La soustraction n&apos;est <strong>pas</strong> une l.c.i. sur <Math tex="\mathbb N" /> (par exemple{" "}
              <Math tex="2\in\mathbb N" /> et <Math tex="3\in\mathbb N" /> mais{" "}
              <Math tex="2-3=-1\notin\mathbb N" />) — elle l&apos;est en revanche sur <Math tex="\mathbb Z" />. De
              même, le produit scalaire de deux vecteurs du plan n&apos;est <strong>pas</strong> une l.c.i. sur
              l&apos;ensemble des vecteurs : le résultat est un nombre réel, pas un vecteur.
            </p>
          </Callout>
        </CourseBlock>

        {/* ===================== II. PARTIES STABLES ===================== */}
        <CourseBlock numeral="II" title="Parties stables">
          <p>
            Soient <Math tex="(E,\ast)" /> un ensemble muni d&apos;une l.c.i. et <Math tex="F" /> une partie non
            vide de <Math tex="E" />.
          </p>
          <Callout variant="success" title="Définition">
            <Math tex="F" /> est <strong>stable</strong> pour <Math tex="\ast" /> si et seulement si :
            <p className="mt-1 text-center font-display text-lg font-bold text-green-700">
              <Math tex="\forall (x,y)\in F^2,\ x\ast y\in F" />
            </p>
          </Callout>
          <p>
            Si <Math tex="F" /> est stable dans <Math tex="(E,\ast)" />, alors <Math tex="\ast" /> induit une l.c.i.
            sur <Math tex="F" />, appelée <strong>loi induite</strong> sur <Math tex="F" />.
          </p>
          <Box title="Exemples">
            <p>
              L&apos;ensemble <Math tex="2\mathbb Z" /> des entiers pairs est stable pour <Math tex="+" /> dans{" "}
              <Math tex="\mathbb Z" /> (la somme de deux entiers pairs est paire), et aussi pour{" "}
              <Math tex="\times" />. L&apos;ensemble des entiers impairs est stable pour <Math tex="\times" /> mais{" "}
              <strong>pas</strong> pour <Math tex="+" /> (la somme de deux impairs est paire).
            </p>
            <p>
              Dans <Math tex="(\mathbb R,\times)" />, <Math tex="S=\{-1;1\}" /> est stable, mais{" "}
              <Math tex="S" /> n&apos;est pas stable dans <Math tex="(\mathbb R,+)" /> car{" "}
              <Math tex="1\in S" /> et <Math tex="-1\in S" /> mais <Math tex="1+(-1)=0\notin S" />.
            </p>
          </Box>
        </CourseBlock>

        {/* ===================== III. PROPRIÉTÉS : COMMUTATIVITÉ ET ASSOCIATIVITÉ ===================== */}
        <CourseBlock numeral="III" title="Commutativité et associativité">
          <p>
            Soient <Math tex="E" /> un ensemble non vide et <Math tex="\ast" /> une l.c.i. sur <Math tex="E" />.
          </p>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">1. Commutativité</p>
            <p>
              <Math tex="\ast" /> est commutative <Math tex="\iff \forall (x,y)\in E^2,\ x\ast y = y\ast x" />.
            </p>
            <p className="mt-3 mb-1 font-semibold text-foreground">2. Associativité</p>
            <p>
              <Math tex="\ast" /> est associative{" "}
              <Math tex="\iff \forall (x,y,z)\in E^3,\ (x\ast y)\ast z = x\ast(y\ast z)" />. Si <Math tex="\ast" />{" "}
              est associative, on peut alors noter simplement <Math tex="x\ast y\ast z" />.
            </p>
          </div>
          <Box title="Exemples et contre-exemples">
            <p>
              <Math tex="+" /> et <Math tex="\times" /> sont commutatives et associatives sur{" "}
              <Math tex="\mathbb N,\mathbb Z,\mathbb Q,\mathbb R,\mathbb C" />, mais la soustraction n&apos;est ni
              commutative ni associative : <Math tex="2-3\neq 3-2" /> et{" "}
              <Math tex="(2-3)-1\neq 2-(3-1)" />.
            </p>
            <p>
              La composition <Math tex="\circ" /> dans <Math tex="\mathcal F(\mathbb R,\mathbb R)" /> est{" "}
              <strong>associative</strong> mais en général <strong>non commutative</strong> : avec{" "}
              <Math tex="f(x)=x+1" /> et <Math tex="g(x)=2x" />, on a{" "}
              <Math tex="(f\circ g)(x)=2x+1" /> et <Math tex="(g\circ f)(x)=2x+2" />, donc{" "}
              <Math tex="f\circ g\neq g\circ f" />.
            </p>
            <p>
              Le produit dans <Math tex="\mathcal M_2(\mathbb R)" /> n&apos;est pas commutatif. Par exemple avec{" "}
              <Math tex="A=\begin{pmatrix}1&3\\2&0\end{pmatrix}" /> et{" "}
              <Math tex="B=\begin{pmatrix}0&2\\3&1\end{pmatrix}" /> :
            </p>
            <FormulaBlock tex="\begin{gathered} AB=\begin{pmatrix}9&5\\0&4\end{pmatrix} \\ BA=\begin{pmatrix}4&0\\5&9\end{pmatrix} \end{gathered}" />
            <p>donc <Math tex="AB\neq BA" />.</p>
          </Box>
        </CourseBlock>

        {/* ===================== IV. ÉLÉMENT NEUTRE, SYMÉTRISABLE, RÉGULIER ===================== */}
        <CourseBlock numeral="IV" title="Élément neutre, élément symétrisable, élément régulier">
          <p className="font-semibold text-foreground">1. Élément neutre</p>
          <Callout variant="success" title="Définition">
            <Math tex="(E,\ast)" /> admet un élément neutre si et seulement si :
            <p className="mt-1 text-center font-display text-lg font-bold text-green-700">
              <Math tex="\exists\, e\in E,\ \forall x\in E,\ e\ast x = x\ast e = x" />
            </p>
          </Callout>
          <Callout variant="info" title="Théorème — unicité de l&apos;élément neutre">
            <p>Si <Math tex="\ast" /> admet un élément neutre dans <Math tex="E" />, celui-ci est unique.</p>
            <p className="mt-2 text-xs">
              <strong>Démonstration.</strong> Soient <Math tex="e" /> et <Math tex="e'" /> deux éléments neutres.
              Alors <Math tex="e=e\ast e'=e'" /> (en calculant <Math tex="e\ast e'" /> de deux façons).
            </p>
          </Callout>
          <Box title="Exemples">
            <p>
              <Math tex="0" /> est neutre pour <Math tex="+" /> dans <Math tex="\mathbb N,\mathbb Z,\mathbb Q,\mathbb R,\mathbb C" /> ;{" "}
              <Math tex="1" /> est neutre pour <Math tex="\times" /> dans ces mêmes ensembles. <Math tex="\varnothing" />{" "}
              est neutre pour <Math tex="\cup" /> et <Math tex="E" /> est neutre pour <Math tex="\cap" /> dans{" "}
              <Math tex="\mathcal P(E)" />. La matrice identité <Math tex="I_2" /> est neutre pour le produit dans{" "}
              <Math tex="\mathcal M_2(\mathbb R)" />.
            </p>
            <p>
              Remarque : dans <Math tex="(\mathbb N^\ast,+)" />, il n&apos;y a pas d&apos;élément neutre.
            </p>
          </Box>

          <p className="font-semibold text-foreground">2. Élément symétrisable</p>
          <Callout variant="success" title="Définition">
            On suppose que <Math tex="(E,\ast)" /> admet un élément neutre <Math tex="e" />. Un élément{" "}
            <Math tex="x\in E" /> est <strong>symétrisable</strong> pour <Math tex="\ast" /> si et seulement si :
            <p className="mt-1 text-center font-display text-lg font-bold text-green-700">
              <Math tex="\exists\, x'\in E,\ x\ast x' = x'\ast x = e" />
            </p>
          </Callout>
          <Callout variant="info" title="Théorème — unicité du symétrique">
            <p>
              Si <Math tex="\ast" /> est associative et possède un élément neutre <Math tex="e" />, et si{" "}
              <Math tex="x\in E" /> admet un symétrique, celui-ci est unique.
            </p>
            <p className="mt-2 text-xs">
              <strong>Démonstration.</strong> Soient <Math tex="x'" /> et <Math tex="x''" /> deux symétriques de{" "}
              <Math tex="x" />. Alors <Math tex="x''=e\ast x''=(x'\ast x)\ast x''=x'\ast(x\ast x'')=x'\ast e=x'" />.
            </p>
          </Callout>
          <Callout variant="info" title="Théorème — symétrique d&apos;un composé">
            <p>
              Si <Math tex="x" /> et <Math tex="y" /> sont symétrisables, de symétriques respectifs{" "}
              <Math tex="x'" /> et <Math tex="y'" />, alors <Math tex="x\ast y" /> est symétrisable et :
            </p>
            <FormulaBlock tex="(x\ast y)' = y' \ast x'" />
            <p className="mt-2 text-xs">
              <strong>Démonstration.</strong>{" "}
              <Math tex="(x\ast y)\ast(y'\ast x') = x\ast(y\ast y')\ast x' = x\ast e\ast x' = x\ast x' = e" />, et de
              même <Math tex="(y'\ast x')\ast(x\ast y)=e" />.
            </p>
          </Callout>
          <Box title="Exemples">
            <p>
              Dans <Math tex="(\mathbb R,+)" />, tout élément <Math tex="a" /> admet un symétrique{" "}
              <Math tex="-a" /> (l&apos;opposé). Dans <Math tex="(\mathbb R,\times)" />, tout élément{" "}
              <Math tex="a\neq 0" /> admet un symétrique <Math tex="a^{-1}=\dfrac1a" /> (l&apos;inverse) ; mais{" "}
              <Math tex="0" /> n&apos;a pas de symétrique. Dans <Math tex="(\mathcal F(E,E),\circ)" />, les
              applications symétrisables sont exactement les bijections de <Math tex="E" /> sur{" "}
              <Math tex="E" />, et le symétrique de <Math tex="f" /> est sa réciproque <Math tex="f^{-1}" />.
            </p>
          </Box>

          <p className="font-semibold text-foreground">3. Élément régulier (simplifiable)</p>
          <Callout variant="success" title="Définition">
            <Math tex="x\in E" /> est <strong>régulier</strong> pour <Math tex="\ast" /> si et seulement si :
            <FormulaBlock tex="\begin{gathered} \forall (y,z)\in E^2,\ x\ast y = x\ast z \Rightarrow y=z \\ \text{et} \\ \forall (y,z)\in E^2,\ y\ast x = z\ast x \Rightarrow y=z \end{gathered}" />
          </Callout>
          <Callout variant="info" title="Théorème">
            <p>
              Si <Math tex="\ast" /> est associative et possède un élément neutre, tout élément symétrisable est
              régulier.
            </p>
            <p className="mt-2 text-xs">
              <strong>Démonstration.</strong> Soit <Math tex="x" /> symétrisable de symétrique <Math tex="x'" />.
              Si <Math tex="x\ast y = x\ast z" />, alors <Math tex="x'\ast(x\ast y)=x'\ast(x\ast z)" />, donc{" "}
              <Math tex="(x'\ast x)\ast y=(x'\ast x)\ast z" />, donc <Math tex="e\ast y = e\ast z" />, donc{" "}
              <Math tex="y=z" />.
            </p>
          </Callout>
        </CourseBlock>

        {/* ===================== V. MORPHISMES ===================== */}
        <CourseBlock numeral="V" title="Morphismes de structures algébriques">
          <p>
            « Morphisme » signifie à peu près « qui respecte la forme ». Soient <Math tex="(E,\ast)" /> et{" "}
            <Math tex="(F,\top)" /> deux ensembles munis chacun d&apos;une l.c.i.
          </p>
          <Callout variant="success" title="Définition">
            <p>
              Une application <Math tex="f" /> de <Math tex="E" /> dans <Math tex="F" /> est un{" "}
              <strong>morphisme</strong> de <Math tex="(E,\ast)" /> dans <Math tex="(F,\top)" /> lorsque :
            </p>
            <p className="mt-1 text-center font-display text-lg font-bold text-green-700">
              <Math tex="\forall (x,y)\in E^2,\ f(x\ast y) = f(x)\top f(y)" />
            </p>
            <p className="mt-2">
              Si de plus <Math tex="f" /> est bijective, on parle d&apos;<strong>isomorphisme</strong>. Si{" "}
              <Math tex="E=F" /> et <Math tex="\ast=\top" />, on parle d&apos;<strong>endomorphisme</strong>, et si
              en plus <Math tex="f" /> est bijective, d&apos;<strong>automorphisme</strong>.
            </p>
          </Callout>
          <Box title="Exemples classiques de morphismes">
            <p>
              <Math tex="\exp" /> est un morphisme (même un isomorphisme) de{" "}
              <Math tex="(\mathbb R,+)" /> dans <Math tex="(\mathbb R^{\ast}_+,\times)" /> :{" "}
              <Math tex="e^{x+y}=e^x e^y" />. Sa réciproque <Math tex="\ln" /> est un isomorphisme de{" "}
              <Math tex="(\mathbb R^{\ast}_+,\times)" /> dans <Math tex="(\mathbb R,+)" />.
            </p>
            <p>
              La conjugaison <Math tex="z\mapsto\bar z" /> est un morphisme de <Math tex="(\mathbb C,\times)" />{" "}
              dans lui-même (c&apos;est même un automorphisme) : <Math tex="\overline{zz'}=\bar z\,\bar{z'}" />.
            </p>
          </Box>
          <Callout variant="warning" title="Théorème (transport de structure)">
            <p>
              Soit <Math tex="f" /> un morphisme de <Math tex="(E,\ast)" /> dans <Math tex="(F,\top)" />. Alors :
            </p>
            <ol className="list-decimal space-y-1 pl-5">
              <li><Math tex="f(E)" /> est une partie stable de <Math tex="(F,\top)" /> ;</li>
              <li>
                si <Math tex="\ast" /> est commutative dans <Math tex="E" />, alors <Math tex="\top" /> est
                commutative dans <Math tex="(f(E),\top)" /> ;
              </li>
              <li>
                si <Math tex="\ast" /> est associative dans <Math tex="E" />, alors <Math tex="\top" /> est
                associative dans <Math tex="(f(E),\top)" /> ;
              </li>
              <li>
                si <Math tex="\ast" /> admet un élément neutre <Math tex="e" /> dans <Math tex="E" />, alors{" "}
                <Math tex="f(e)" /> est élément neutre dans <Math tex="(f(E),\top)" /> ;
              </li>
              <li>
                si de plus <Math tex="x\in E" /> admet un symétrique <Math tex="x'" /> pour <Math tex="\ast" />,
                alors <Math tex="f(x)" /> admet <Math tex="f(x')" /> pour symétrique dans{" "}
                <Math tex="(f(E),\top)" />.
              </li>
            </ol>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== VI, VII, VIII. STRUCTURE DE GROUPE ===================== */}
      <LessonSection
        id="cours-groupe"
        kicker="02 · Une l.c.i. bien apprivoisée"
        title="Structure de groupe"
        tone="muted"
        description="Un groupe est un ensemble muni d&apos;une seule loi qui est associative, possède un neutre, et où tout élément est symétrisable."
      >
        <CourseBlock numeral="VI" title="Définition et exemples">
          <Callout variant="success" title="Définition">
            <p>
              Soit <Math tex="G" /> un ensemble non vide muni d&apos;une l.c.i. <Math tex="\ast" />. On dit que{" "}
              <Math tex="(G,\ast)" /> est un <strong>groupe</strong> si et seulement si :
            </p>
            <ol className="list-decimal space-y-1 pl-5">
              <li><Math tex="\ast" /> est associative ;</li>
              <li><Math tex="\ast" /> possède un élément neutre dans <Math tex="G" /> ;</li>
              <li>tout élément de <Math tex="G" /> possède un symétrique pour <Math tex="\ast" /> dans <Math tex="G" />.</li>
            </ol>
            <p className="mt-2">
              Si de plus <Math tex="\ast" /> est commutative, on dit que le groupe est{" "}
              <strong>commutatif</strong> (ou <strong>abélien</strong>).
            </p>
          </Callout>
          <Box title="Exemples et contre-exemples">
            <p>
              <Math tex="(\mathbb Z,+)" />, <Math tex="(\mathbb Q,+)" />, <Math tex="(\mathbb R,+)" />,{" "}
              <Math tex="(\mathbb C,+)" />, <Math tex="(\mathbb Q^\ast,\times)" />,{" "}
              <Math tex="(\mathbb R^\ast,\times)" />, <Math tex="(\mathbb C^\ast,\times)" /> sont des groupes
              commutatifs.
            </p>
            <p>
              <Math tex="(\mathbb N,+)" /> n&apos;est <strong>pas</strong> un groupe (aucun élément non nul n&apos;a
              d&apos;opposé dans <Math tex="\mathbb N" />). <Math tex="(\mathbb Z,\times)" /> n&apos;est{" "}
              <strong>pas</strong> un groupe (<Math tex="2" /> n&apos;a pas d&apos;inverse dans{" "}
              <Math tex="\mathbb Z" />).
            </p>
            <p>
              L&apos;ensemble des matrices carrées inversibles d&apos;ordre 2, muni du produit matriciel, est un
              groupe <strong>non commutatif</strong>.
            </p>
          </Box>
        </CourseBlock>

        <CourseBlock numeral="VII" title="Propriétés des groupes">
          <Callout variant="info" title="Théorème">
            <p>Soit <Math tex="(G,\ast)" /> un groupe, d&apos;élément neutre <Math tex="e" />. Alors :</p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>l&apos;élément neutre est unique ;</li>
              <li>tout élément de <Math tex="G" /> possède un unique symétrique dans <Math tex="G" /> ;</li>
              <li>
                tout élément de <Math tex="G" /> est <strong>régulier</strong> : pour <Math tex="a\in G" /> et{" "}
                <Math tex="(x,y)\in G^2" />, <Math tex="a\ast x=a\ast y\Rightarrow x=y" /> et{" "}
                <Math tex="x\ast a=y\ast a\Rightarrow x=y" />.
              </li>
            </ol>
          </Callout>
          <p>
            (Les points 1 et 2 ont déjà été démontrés au paragraphe précédent : un groupe est associatif et possède
            un neutre, donc les théorèmes d&apos;unicité s&apos;appliquent ; le point 3 découle du théorème{" "}
            « symétrisable <Math tex="\Rightarrow" /> régulier ».)
          </p>
          <Callout variant="success" title="Conséquence — équations dans un groupe">
            <p>
              Soient <Math tex="(G,\ast)" /> un groupe d&apos;élément neutre <Math tex="e" />, et{" "}
              <Math tex="(a,b)\in G^2" />, <Math tex="a'" /> le symétrique de <Math tex="a" />. Les équations{" "}
              <Math tex="a\ast x = b" /> et <Math tex="x\ast a = b" /> d&apos;inconnue <Math tex="x\in G" />{" "}
              admettent chacune une <strong>unique</strong> solution :
            </p>
            <FormulaBlock tex="\begin{gathered} a\ast x = b \iff x = a'\ast b \\ x\ast a = b \iff x = b\ast a' \end{gathered}" />
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="VIII" title="Sous-groupes">
          <Callout variant="success" title="Définition">
            <p>
              Soient <Math tex="(G,\ast)" /> un groupe et <Math tex="H" /> une partie stable de <Math tex="G" />{" "}
              pour <Math tex="\ast" />. On dit que <Math tex="H" /> est un <strong>sous-groupe</strong> de{" "}
              <Math tex="(G,\ast)" /> si et seulement si <Math tex="(H,\ast)" /> (muni de la loi induite) est
              lui-même un groupe.
            </p>
          </Callout>
          <Callout variant="warning" title="Théorème — caractérisation pratique">
            <p>
              Soient <Math tex="(G,\ast)" /> un groupe d&apos;élément neutre <Math tex="e" />, et <Math tex="H" />{" "}
              une partie de <Math tex="G" />. Alors <Math tex="H" /> est un sous-groupe de <Math tex="(G,\ast)" /> si
              et seulement si :
            </p>
            <FormulaBlock tex="\begin{gathered} e\in H \\ \forall (x,y)\in H^2,\ x\ast y\in H \\ \forall x\in H,\ x'\in H \end{gathered}" />
            <p className="mt-2">
              Version condensée : <Math tex="H\neq\varnothing" /> et{" "}
              <Math tex="\forall (x,y)\in H^2,\ x\ast y'\in H" />.
            </p>
          </Callout>
          <Box title="Exemples">
            <p>
              <Math tex="\{e\}" /> et <Math tex="G" /> sont des sous-groupes de <Math tex="(G,\ast)" />, dits{" "}
              <strong>triviaux</strong>. <Math tex="n\mathbb Z" /> est un sous-groupe de <Math tex="(\mathbb Z,+)" />{" "}
              pour tout <Math tex="n\in\mathbb N" />. L&apos;ensemble{" "}
              <Math tex="U=\{z\in\mathbb C, |z|=1\}" /> est un sous-groupe de <Math tex="(\mathbb C^\ast,\times)" />.
            </p>
          </Box>
          <Callout variant="info" title="Deux propriétés utiles">
            <p>
              <strong>1)</strong> Si <Math tex="H" /> et <Math tex="K" /> sont deux sous-groupes de{" "}
              <Math tex="(G,\ast)" />, alors <Math tex="H\cap K" /> est aussi un sous-groupe de{" "}
              <Math tex="(G,\ast)" /> (une intersection de sous-groupes est un sous-groupe).
            </p>
            <p>
              <strong>2)</strong> Si <Math tex="f" /> est un morphisme du groupe <Math tex="(G,\ast)" /> dans un
              ensemble <Math tex="(F,\top)" /> muni d&apos;une l.c.i., alors <Math tex="(f(G),\top)" /> est un
              groupe (image d&apos;un groupe par un morphisme).
            </p>
          </Callout>
        </CourseBlock>
      </LessonSection>

      {/* ===================== IX, X. ANNEAUX ET CORPS ===================== */}
      <LessonSection
        id="cours-anneau-corps"
        kicker="03 · Deux lois en même temps"
        title="Anneaux et corps"
        tone="light"
        description="Un anneau combine deux lois de composition interne liées par la distributivité ; un corps est un anneau où l&apos;on peut « diviser »."
      >
        <CourseBlock numeral="IX" title="Anneaux">
          <p className="font-semibold text-foreground">1. Distributivité</p>
          <Callout variant="success" title="Définition">
            Soient <Math tex="\ast" /> et <Math tex="\top" /> deux l.c.i. sur <Math tex="E" />.{" "}
            <Math tex="\top" /> est <strong>distributive</strong> sur <Math tex="\ast" /> si et seulement si :
            <FormulaBlock tex="\forall (x,y,z)\in E^3,\ x\top(y\ast z)=(x\top y)\ast(x\top z)\ \text{et}\ (y\ast z)\top x=(y\top x)\ast(z\top x)" />
          </Callout>
          <p className="font-semibold text-foreground">2. Définition d&apos;un anneau</p>
          <Callout variant="success" title="Définition">
            <p>
              Soit <Math tex="A" /> un ensemble muni de deux l.c.i. notées <Math tex="+" /> et{" "}
              <Math tex="\times" />. <Math tex="(A,+,\times)" /> est un <strong>anneau</strong> si et seulement si :
            </p>
            <ol className="list-decimal space-y-1 pl-5">
              <li><Math tex="(A,+)" /> est un groupe commutatif ;</li>
              <li><Math tex="\times" /> est associative ;</li>
              <li><Math tex="\times" /> est distributive sur <Math tex="+" />.</li>
            </ol>
            <p className="mt-2">
              L&apos;anneau est <strong>commutatif</strong> si <Math tex="\times" /> est commutative, et{" "}
              <strong>unitaire</strong> si <Math tex="\times" /> admet un élément neutre (noté{" "}
              <Math tex="1_A" />). On note <Math tex="0_A" /> l&apos;élément neutre de <Math tex="+" />.
            </p>
          </Callout>
          <Box title="Exemples et contre-exemples">
            <p>
              <Math tex="(\mathbb Z,+,\times)" />, <Math tex="(\mathbb Q,+,\times)" />,{" "}
              <Math tex="(\mathbb R,+,\times)" />, <Math tex="(\mathbb C,+,\times)" /> sont des anneaux commutatifs
              unitaires. <Math tex="(\mathcal M_2(\mathbb R),+,\times)" /> est un anneau{" "}
              <strong>unitaire mais non commutatif</strong>. <Math tex="(2\mathbb Z,+,\times)" /> n&apos;est{" "}
              <strong>pas</strong> unitaire (pas d&apos;élément neutre pour <Math tex="\times" /> dans{" "}
              <Math tex="2\mathbb Z" />).
            </p>
          </Box>
          <p className="font-semibold text-foreground">3. Règles de calcul dans un anneau</p>
          <Callout variant="info" title="Théorème">
            <p>Soit <Math tex="(A,+,\times)" /> un anneau. Pour tous <Math tex="x,a,b\in A" /> :</p>
            <FormulaBlock tex="\begin{gathered} x\times 0_A = 0_A\times x = 0_A \\ (-a)\times b = a\times(-b) = -(a\times b) \end{gathered}" />
            <p className="mt-2 text-xs">
              <strong>Démonstration (1re égalité).</strong>{" "}
              <Math tex="x\times 0_A = x\times(0_A+0_A) = x\times 0_A + x\times 0_A" />. Comme{" "}
              <Math tex="(A,+)" /> est un groupe, tout élément y est régulier ; en simplifiant par{" "}
              <Math tex="x\times 0_A" />, on obtient <Math tex="0_A = x\times 0_A" />.
            </p>
          </Callout>
          <p className="font-semibold text-foreground">4. Diviseurs de zéro, anneau intègre</p>
          <Callout variant="warning" title="Définitions">
            <p>
              Un élément <Math tex="a\neq 0_A" /> de <Math tex="A" /> est un <strong>diviseur de zéro</strong> s&apos;il
              existe <Math tex="b\neq 0_A" /> tel que <Math tex="a\times b=0_A" /> (ou{" "}
              <Math tex="b\times a=0_A" />). L&apos;anneau <Math tex="A" /> est dit <strong>intègre</strong> s&apos;il
              n&apos;a pas de diviseur de zéro, c&apos;est-à-dire :
            </p>
            <p className="mt-1 text-center font-display text-lg font-bold text-orange-700">
              <Math tex="\forall (a,b)\in A^2,\ a\times b = 0_A \Rightarrow a=0_A\ \text{ou}\ b=0_A" />
            </p>
          </Callout>
          <p className="text-sm text-foreground-muted">
            <Math tex="(\mathbb Z,+,\times)" /> est intègre. En revanche,{" "}
            <Math tex="(\mathcal M_2(\mathbb R),+,\times)" /> n&apos;est <strong>pas</strong> intègre : avec{" "}
            <Math tex="A=\begin{pmatrix}1&0\\0&0\end{pmatrix}" /> et{" "}
            <Math tex="B=\begin{pmatrix}0&0\\0&1\end{pmatrix}" />, on a <Math tex="A\neq 0" />,{" "}
            <Math tex="B\neq 0" /> mais <Math tex="AB=\begin{pmatrix}0&0\\0&0\end{pmatrix}" />.
          </p>
          <p className="font-semibold text-foreground">5. Groupe des éléments inversibles</p>
          <Callout variant="info" title="Théorème">
            Soit <Math tex="(A,+,\times)" /> un anneau unitaire. L&apos;ensemble <Math tex="A^\times" /> des
            éléments de <Math tex="A" /> inversibles pour <Math tex="\times" /> (symétrisables), muni de{" "}
            <Math tex="\times" />, est un groupe.
          </Callout>
        </CourseBlock>

        <CourseBlock numeral="X" title="Corps">
          <Callout variant="success" title="Définition">
            <p>
              Soit <Math tex="(K,+,\times)" /> un anneau <strong>unitaire</strong>. On dit que{" "}
              <Math tex="(K,+,\times)" /> est un <strong>corps</strong> si et seulement si tout élément non nul de{" "}
              <Math tex="K" /> est inversible pour <Math tex="\times" />, c&apos;est-à-dire{" "}
              <Math tex="(K^\ast,\times)" /> est un groupe. Le corps est dit <strong>commutatif</strong> si{" "}
              <Math tex="\times" /> est commutative.
            </p>
          </Callout>
          <Box title="Exemples et contre-exemples">
            <p>
              <Math tex="(\mathbb Q,+,\times)" />, <Math tex="(\mathbb R,+,\times)" />,{" "}
              <Math tex="(\mathbb C,+,\times)" /> sont des corps commutatifs. <Math tex="(\mathbb Z,+,\times)" />{" "}
              n&apos;est <strong>pas</strong> un corps (<Math tex="2" /> n&apos;est pas inversible dans{" "}
              <Math tex="\mathbb Z" />). <Math tex="(\mathcal M_2(\mathbb R),+,\times)" /> n&apos;est{" "}
              <strong>pas</strong> un corps (une matrice non nulle et non inversible, par exemple{" "}
              <Math tex="\begin{pmatrix}1&1\\1&1\end{pmatrix}" />, y existe).
            </p>
          </Box>
          <Callout variant="info" title="Théorème — un corps n&apos;a pas de diviseur de zéro">
            <p>
              Dans un corps <Math tex="(K,+,\times)" />, un produit de facteurs est nul si et seulement si l&apos;un
              des facteurs est nul :
            </p>
            <FormulaBlock tex="\forall (x,y)\in K^2,\ xy=0 \iff x=0\ \text{ou}\ y=0" />
            <p className="mt-2 text-xs">
              <strong>Démonstration.</strong> Si <Math tex="x\neq 0" />, <Math tex="x" /> est inversible :{" "}
              <Math tex="xy=0 \Rightarrow x^{-1}(xy)=0 \Rightarrow y=0" />.
            </p>
          </Callout>
          <p className="text-sm text-foreground-muted">
            Conséquence : dans un corps, tout élément non nul est régulier pour <Math tex="\times" />.
          </p>
        </CourseBlock>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Exercices · Structures algébriques"
        tone="muted"
        description="11 exercices corrigés, des lois de composition interne jusqu&apos;aux corps. Cherche sur ton cahier, puis clique pour vérifier ta réponse."
      >
        <ExerciseGroup total={11} celebrationTitle="Bravo, les 11 exercices sont vérifiés !" celebrationSubtitle="Les structures algébriques n&apos;ont plus de secret pour toi.">
          <ExerciseCard
            id="1"
            index={1}
            title="Tables de composition dans ℤ/5ℤ"
            items={
              <p>
                On munit <Math tex="\mathbb Z/5\mathbb Z=\{0,1,2,3,4\}" /> de l&apos;addition et de la
                multiplication modulo 5. Dresser les tables de <Math tex="+" /> et de <Math tex="\times" />, et
                vérifier sur ces tables que ce sont bien des lois de composition internes.
              </p>
            }
            correction={
              <>
                <p>Table de l&apos;addition modulo 5 :</p>
                <FormulaBlock tex="\begin{array}{c|ccccc} + & 0 & 1 & 2 & 3 & 4 \\ \hline 0 & 0 & 1 & 2 & 3 & 4 \\ 1 & 1 & 2 & 3 & 4 & 0 \\ 2 & 2 & 3 & 4 & 0 & 1 \\ 3 & 3 & 4 & 0 & 1 & 2 \\ 4 & 4 & 0 & 1 & 2 & 3 \end{array}" />
                <p>Table de la multiplication modulo 5 :</p>
                <FormulaBlock tex="\begin{array}{c|ccccc} \times & 0 & 1 & 2 & 3 & 4 \\ \hline 0 & 0 & 0 & 0 & 0 & 0 \\ 1 & 0 & 1 & 2 & 3 & 4 \\ 2 & 0 & 2 & 4 & 1 & 3 \\ 3 & 0 & 3 & 1 & 4 & 2 \\ 4 & 0 & 4 & 3 & 2 & 1 \end{array}" />
                <p className="font-semibold text-green-700">
                  Chaque case des deux tables contient un élément de <Math tex="\{0,1,2,3,4\}" />, donc{" "}
                  <Math tex="+" /> et <Math tex="\times" /> sont bien des lois de composition internes sur{" "}
                  <Math tex="\mathbb Z/5\mathbb Z" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Une loi sur l&apos;intervalle ]−1 ; 1["
            items={
              <p>
                On définit sur <Math tex="I=\,]-1;1[" /> la loi <Math tex="\ast" /> par{" "}
                <Math tex="x\ast y = \dfrac{x+y}{1+xy}" /> pour <Math tex="(x,y)\in I^2" />. Montrer que{" "}
                <Math tex="\ast" /> est une loi de composition interne dans <Math tex="I" />.
              </p>
            }
            correction={
              <>
                <p>
                  Soient <Math tex="x\in I" /> et <Math tex="y\in I" />, donc <Math tex="|x|<1" /> et{" "}
                  <Math tex="|y|<1" />. On a <Math tex="x^2<1" /> et <Math tex="y^2<1" />, donc{" "}
                  <Math tex="x^2y^2<1" />, d&apos;où <Math tex="1-x^2y^2>0" />, c&apos;est-à-dire{" "}
                  <Math tex="1+xy>0" /> et <Math tex="1-xy>0" /> ne peuvent être tous deux négatifs — en fait{" "}
                  <Math tex="1+xy\neq 0" /> car sinon <Math tex="xy=-1" /> impliquerait{" "}
                  <Math tex="|x||y|=1" />, impossible puisque <Math tex="|x|<1" /> et <Math tex="|y|<1" />. Donc{" "}
                  <Math tex="x\ast y" /> est bien défini.
                </p>
                <p>Montrons que <Math tex="-1&lt;x\ast y&lt;1" />, c&apos;est-à-dire <Math tex="(x\ast y)^2&lt;1" /> :</p>
                <FormulaBlock tex="1-(x\ast y)^2 = 1-\left(\dfrac{x+y}{1+xy}\right)^2 = \dfrac{(1+xy)^2-(x+y)^2}{(1+xy)^2} = \dfrac{(1-x^2)(1-y^2)}{(1+xy)^2}" />
                <p>
                  Or <Math tex="1-x^2>0" /> et <Math tex="1-y^2>0" /> (car <Math tex="x,y\in I" />), donc ce
                  quotient est strictement positif : <Math tex="1-(x\ast y)^2>0" />, donc{" "}
                  <Math tex="(x\ast y)^2<1" />, donc <Math tex="x\ast y\in I" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="\ast" /> est une loi de composition interne dans <Math tex="I" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Stabilité et transport de structure"
            items={
              <>
                <p>
                  On munit <Math tex="\mathbb R" /> de la loi <Math tex="\ast" /> définie par{" "}
                  <Math tex="x\ast y = x+y+xy" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Montrer que <Math tex="S=[0;+\infty[" /> est une partie stable de <Math tex="(\mathbb R,\ast)" />.</li>
                  <li>
                    Soit <Math tex="f:\mathbb R\to\mathbb R" />, <Math tex="f(x)=x+1" />. Montrer que{" "}
                    <Math tex="f" /> est un isomorphisme de <Math tex="(\mathbb R,\ast)" /> dans{" "}
                    <Math tex="(\mathbb R,\times)" />.
                  </li>
                  <li>En déduire que <Math tex="\ast" /> est commutative, associative, et déterminer son élément neutre.</li>
                  <li>Déterminer l&apos;ensemble des éléments symétrisables pour <Math tex="\ast" /> et leur symétrique.</li>
                </ol>
              </>
            }
            correction={
              <>
                <p>
                  <strong>1)</strong> Soient <Math tex="x,y\in S" />, donc <Math tex="x\geq 0" /> et{" "}
                  <Math tex="y\geq 0" />. Alors <Math tex="x\ast y = x+y+xy" /> est une somme de trois termes
                  positifs ou nuls, donc <Math tex="x\ast y\geq 0" />, donc <Math tex="x\ast y\in S" />.{" "}
                  <strong className="text-green-700">Donc <Math tex="S" /> est stable.</strong>
                </p>
                <p>
                  <strong>2)</strong> <Math tex="f" /> est affine de pente <Math tex="1\neq 0" />, donc bijective de{" "}
                  <Math tex="\mathbb R" /> dans <Math tex="\mathbb R" />. De plus, pour tous <Math tex="x,y" /> :
                </p>
                <FormulaBlock tex="f(x\ast y) = x+y+xy+1 = (x+1)(y+1) = f(x)\,f(y)" />
                <p>
                  <strong className="text-green-700">Donc <Math tex="f" /> est un isomorphisme de{" "}
                  <Math tex="(\mathbb R,\ast)" /> dans <Math tex="(\mathbb R,\times)" />.</strong>
                </p>
                <p>
                  <strong>3)</strong> Puisque <Math tex="f" /> est un isomorphisme et que{" "}
                  <Math tex="\times" /> est commutative et associative dans <Math tex="\mathbb R" />, le théorème de
                  transport de structure donne : <Math tex="\ast" /> est <strong>commutative</strong> et{" "}
                  <strong>associative</strong> dans <Math tex="\mathbb R" />. L&apos;élément neutre de{" "}
                  <Math tex="\times" /> est <Math tex="1" />, donc l&apos;élément neutre de <Math tex="\ast" /> est{" "}
                  <Math tex="e" /> tel que <Math tex="f(e)=1" />, soit <Math tex="e+1=1" />, donc{" "}
                  <strong className="text-green-700"><Math tex="e=0" /></strong> (on vérifie directement :{" "}
                  <Math tex="x\ast 0=x+0+0=x" />).
                </p>
                <p>
                  <strong>4)</strong> Un réel <Math tex="x" /> est symétrisable dans <Math tex="(\mathbb R,\times)" />{" "}
                  ssi <Math tex="f(x)=x+1\neq 0" />, c&apos;est-à-dire <Math tex="x\neq -1" />. Le symétrique de{" "}
                  <Math tex="f(x)" /> pour <Math tex="\times" /> est <Math tex="\dfrac1{x+1}" />, donc le symétrique
                  de <Math tex="x" /> pour <Math tex="\ast" /> est <Math tex="x'" /> tel que{" "}
                  <Math tex="f(x')=\dfrac1{x+1}" />, soit <Math tex="x'+1=\dfrac1{x+1}" />, donc :
                </p>
                <FormulaBlock tex="x' = \dfrac{1}{x+1}-1 = \dfrac{-x}{x+1}" />
                <p className="font-semibold text-green-700">
                  Les éléments symétrisables sont tous les réels <Math tex="x\neq -1" />, de symétrique{" "}
                  <Math tex="x'=\dfrac{-x}{x+1}" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Une loi ni commutative ni associative"
            items={
              <p>
                On munit <Math tex="\mathbb R" /> de la loi <Math tex="\ast" /> définie par{" "}
                <Math tex="x\ast y = 2x+3y-1" />. La loi <Math tex="\ast" /> est-elle commutative ? Est-elle
                associative ?
              </p>
            }
            correction={
              <>
                <p>
                  <strong>Commutativité.</strong> Prenons <Math tex="x=0" />, <Math tex="y=1" /> :{" "}
                  <Math tex="0\ast 1 = 3-1=2" /> et <Math tex="1\ast 0 = 2-1=1" />. Comme{" "}
                  <Math tex="0\ast 1\neq 1\ast 0" />,{" "}
                  <strong className="text-green-700"><Math tex="\ast" /> n&apos;est pas commutative.</strong>
                </p>
                <p>
                  <strong>Associativité.</strong> Calculons <Math tex="(x\ast y)\ast z" /> et{" "}
                  <Math tex="x\ast(y\ast z)" /> :
                </p>
                <FormulaBlock tex="\begin{gathered} (x\ast y)\ast z = 2(2x+3y-1)+3z-1 = 4x+6y+3z-3 \\ x\ast(y\ast z) = 2x+3(2y+3z-1)-1 = 2x+6y+9z-4 \end{gathered}" />
                <p>
                  Avec <Math tex="x=y=z=0" /> par exemple : <Math tex="(0\ast 0)\ast 0=-3" /> alors que{" "}
                  <Math tex="0\ast(0\ast 0)=-4" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\ast" /> n&apos;est ni commutative, ni associative.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Un groupe commutatif construit sur ℝ ∖ {1}"
            items={
              <p>
                On munit <Math tex="E=\mathbb R\setminus\{1\}" /> de la loi <Math tex="\ast" /> définie par{" "}
                <Math tex="x\ast y = x+y-xy" />. Montrer que <Math tex="(E,\ast)" /> est un groupe commutatif, et
                déterminer le symétrique d&apos;un élément <Math tex="x\in E" />.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>Loi interne sur <Math tex="E" />.</strong> Remarquons que{" "}
                  <Math tex="x\ast y - 1 = x+y-xy-1 = -(1-x)(1-y)" />. Si <Math tex="x\neq 1" /> et{" "}
                  <Math tex="y\neq 1" />, alors <Math tex="(1-x)(1-y)\neq 0" />, donc{" "}
                  <Math tex="x\ast y\neq 1" /> : <Math tex="\ast" /> est bien une loi interne sur <Math tex="E" />.
                </p>
                <p>
                  <strong>Commutativité.</strong> <Math tex="x\ast y = x+y-xy = y+x-yx = y\ast x" />.{" "}
                  <strong className="text-green-700">Commutative.</strong>
                </p>
                <p>
                  <strong>Associativité.</strong> <Math tex="(x\ast y)\ast z = (x+y-xy)+z-(x+y-xy)z = x+y+z-xy-xz-yz+xyz" />
                  , qui est symétrique en <Math tex="x,y,z" />, donc égale à{" "}
                  <Math tex="x\ast(y\ast z)" />. <strong className="text-green-700">Associative.</strong>
                </p>
                <p>
                  <strong>Élément neutre.</strong> <Math tex="x\ast 0 = x+0-0=x" />, donc{" "}
                  <strong className="text-green-700"><Math tex="0" /> est neutre</strong> (et <Math tex="0\in E" />).
                </p>
                <p>
                  <strong>Symétrique.</strong> Pour <Math tex="x\in E" />, on cherche <Math tex="x'" /> tel que{" "}
                  <Math tex="x\ast x'=0" /> : <Math tex="x+x'-xx'=0 \iff x'(1-x)=-x \iff x'=\dfrac{x}{x-1}" />{" "}
                  (licite car <Math tex="x\neq 1" />, et <Math tex="x'\neq 1" /> puisque{" "}
                  <Math tex="\dfrac{x}{x-1}=1" /> donnerait <Math tex="x=x-1" />, impossible).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="(E,\ast)" /> est un groupe commutatif, d&apos;élément neutre <Math tex="0" />, et le
                  symétrique de <Math tex="x" /> est <Math tex="x'=\dfrac{x}{x-1}" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Un sous-groupe classique : les entiers pairs"
            items={
              <p>
                Montrer que <Math tex="2\mathbb Z" /> (l&apos;ensemble des entiers relatifs pairs) est un
                sous-groupe de <Math tex="(\mathbb Z,+)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="2\mathbb Z\subset\mathbb Z" />, et <Math tex="0=2\times 0\in 2\mathbb Z" /> donc{" "}
                  <Math tex="2\mathbb Z\neq\varnothing" />.
                </p>
                <p>
                  Soient <Math tex="x,y\in 2\mathbb Z" /> : il existe <Math tex="p,q\in\mathbb Z" /> tels que{" "}
                  <Math tex="x=2p" /> et <Math tex="y=2q" />. Alors{" "}
                  <Math tex="x-y=2p-2q=2(p-q)\in 2\mathbb Z" /> (car <Math tex="p-q\in\mathbb Z" />).
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;après la caractérisation des sous-groupes (<Math tex="2\mathbb Z\neq\varnothing" /> et{" "}
                  <Math tex="\forall x,y\in 2\mathbb Z,\ x-y\in 2\mathbb Z" />), <Math tex="2\mathbb Z" /> est un
                  sous-groupe de <Math tex="(\mathbb Z,+)" />.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Un sous-groupe du groupe des complexes non nuls"
            items={
              <p>
                Montrer que <Math tex="U=\{z\in\mathbb C,\ |z|=1\}" /> est un sous-groupe de{" "}
                <Math tex="(\mathbb C^\ast,\times)" />.
              </p>
            }
            correction={
              <>
                <p>
                  <Math tex="U\subset\mathbb C^\ast" /> (un nombre complexe de module 1 est non nul), et{" "}
                  <Math tex="|1|=1" /> donc <Math tex="1\in U" /> : <Math tex="U\neq\varnothing" />.
                </p>
                <p>
                  Soient <Math tex="z_1,z_2\in U" />. Alors :
                </p>
                <FormulaBlock tex="\left|z_1\times \dfrac1{z_2}\right| = \dfrac{|z_1|}{|z_2|} = \dfrac11 = 1" />
                <p>
                  donc <Math tex="z_1\times z_2^{-1}\in U" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;après la caractérisation des sous-groupes, <Math tex="U" /> est un sous-groupe de{" "}
                  <Math tex="(\mathbb C^\ast,\times)" /> ; comme <Math tex="(\mathbb C^\ast,\times)" /> est
                  commutatif, <Math tex="(U,\times)" /> est un groupe commutatif.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Une caractérisation des groupes commutatifs"
            items={
              <p>
                Soit <Math tex="(G,\times)" /> un groupe (loi notée multiplicativement). On suppose que{" "}
                <Math tex="\forall (a,b)\in G^2,\ (ab)^2=a^2b^2" />. Montrer que <Math tex="G" /> est commutatif.
              </p>
            }
            correction={
              <>
                <p>
                  Soient <Math tex="a,b\in G" />. Par hypothèse :
                </p>
                <FormulaBlock tex="(ab)(ab) = a^2b^2 = (aa)(bb) \iff abab = aabb" />
                <p>
                  Dans un groupe, tout élément est régulier (théorème du cours). En simplifiant{" "}
                  <Math tex="abab=aabb" /> <strong>à gauche par <Math tex="a" /></strong>, on obtient{" "}
                  <Math tex="bab=abb" />, puis en simplifiant <strong>à droite par <Math tex="b" /></strong>, on
                  obtient <Math tex="ba=ab" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="\forall (a,b)\in G^2,\ ab=ba" /> : le groupe <Math tex="G" /> est commutatif.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Diviseurs de zéro dans les matrices"
            items={
              <p>
                Dans <Math tex="\mathcal M_2(\mathbb R)" />, exhiber deux matrices non nulles dont le produit est
                la matrice nulle. Que peut-on en conclure sur l&apos;anneau{" "}
                <Math tex="(\mathcal M_2(\mathbb R),+,\times)" /> ?
              </p>
            }
            correction={
              <>
                <p>
                  Posons <Math tex="A=\begin{pmatrix}1&0\\0&0\end{pmatrix}" /> et{" "}
                  <Math tex="B=\begin{pmatrix}0&0\\0&1\end{pmatrix}" />. Ni <Math tex="A" /> ni{" "}
                  <Math tex="B" /> n&apos;est la matrice nulle, et :
                </p>
                <FormulaBlock tex="AB = \begin{pmatrix}1\times 0+0\times 0 & 1\times 0+0\times 1\\ 0\times 0+0\times 0 & 0\times 0+0\times 1\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}" />
                <p className="font-semibold text-green-700">
                  <Math tex="A" /> et <Math tex="B" /> sont des diviseurs de zéro : l&apos;anneau{" "}
                  <Math tex="(\mathcal M_2(\mathbb R),+,\times)" /> n&apos;est <strong>pas intègre</strong>.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Anneau de Boole"
            items={
              <p>
                Soit <Math tex="(A,+,\times)" /> un anneau tel que <Math tex="x^2=x" /> pour tout{" "}
                <Math tex="x\in A" /> (on dit que <Math tex="A" /> est un anneau de Boole). Montrer que{" "}
                <Math tex="x+x=0_A" /> pour tout <Math tex="x\in A" />, puis que <Math tex="A" /> est commutatif.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>Étape 1 : <Math tex="x+x=0_A" />.</strong> Pour tout <Math tex="x\in A" />, l&apos;élément{" "}
                  <Math tex="x+x" /> est aussi dans <Math tex="A" />, donc vérifie l&apos;hypothèse :
                </p>
                <FormulaBlock tex="(x+x)^2 = x+x" />
                <p>
                  Or, en développant par distributivité (<Math tex="x^2=x" />) :
                </p>
                <FormulaBlock tex="(x+x)(x+x) = x^2+x^2+x^2+x^2 = x+x+x+x" />
                <p>
                  D&apos;où <Math tex="x+x+x+x = x+x" />. En simplifiant (régularité dans le groupe{" "}
                  <Math tex="(A,+)" />) par <Math tex="x+x" /> des deux côtés :{" "}
                  <strong className="text-green-700"><Math tex="x+x=0_A" /></strong>, c&apos;est-à-dire{" "}
                  <Math tex="-x=x" /> pour tout <Math tex="x\in A" />.
                </p>
                <p>
                  <strong>Étape 2 : commutativité.</strong> Soient <Math tex="x,y\in A" />. Alors{" "}
                  <Math tex="(x+y)^2=x+y" />, et en développant :
                </p>
                <FormulaBlock tex="(x+y)(x+y) = x^2+xy+yx+y^2 = x+xy+yx+y" />
                <p>
                  D&apos;où <Math tex="x+xy+yx+y = x+y" />, donc <Math tex="xy+yx=0_A" />, donc{" "}
                  <Math tex="xy=-yx" />. Or, d&apos;après l&apos;étape 1, <Math tex="-yx=yx" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="xy=yx" /> pour tous <Math tex="x,y\in A" /> : l&apos;anneau <Math tex="A" /> est
                  commutatif.
                </p>
              </>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="ℚ(√2) est un corps"
            items={
              <p>
                Soit <Math tex="K=\mathbb Q(\sqrt2)=\{a+b\sqrt2,\ (a,b)\in\mathbb Q^2\}" />, muni de{" "}
                <Math tex="+" /> et <Math tex="\times" /> usuels. Montrer que <Math tex="(K,+,\times)" /> est un
                sous-anneau de <Math tex="(\mathbb R,+,\times)" />, puis que <Math tex="(K,+,\times)" /> est un
                corps.
              </p>
            }
            correction={
              <>
                <p>
                  <strong>Sous-anneau.</strong> <Math tex="K\subset\mathbb R" />, <Math tex="0=0+0\sqrt2\in K" />{" "}
                  et <Math tex="1=1+0\sqrt2\in K" />. Pour <Math tex="a+b\sqrt2,\ c+d\sqrt2\in K" />{" "}
                  (<Math tex="a,b,c,d\in\mathbb Q" />) :
                </p>
                <FormulaBlock tex="\begin{gathered} (a+b\sqrt2)-(c+d\sqrt2) = (a-c)+(b-d)\sqrt2 \in K \\ (a+b\sqrt2)(c+d\sqrt2) = (ac+2bd)+(ad+bc)\sqrt2 \in K \end{gathered}" />
                <p>
                  (on a utilisé <Math tex="\sqrt2\times\sqrt2=2" />, et <Math tex="ac+2bd,\ ad+bc\in\mathbb Q" />).
                  Donc <Math tex="K" /> est un sous-anneau commutatif unitaire de <Math tex="\mathbb R" />.
                </p>
                <p>
                  <strong>Inversibilité.</strong> Soit <Math tex="x=a+b\sqrt2\in K" /> non nul, avec{" "}
                  <Math tex="(a,b)\neq(0,0)" />. Posons <Math tex="N=a^2-2b^2" />.
                </p>
                <p>
                  Si <Math tex="N=0" />, alors <Math tex="a^2=2b^2" />. Si <Math tex="b\neq 0" />, on aurait{" "}
                  <Math tex="\left(\dfrac{a}{b}\right)^2=2" />, donc <Math tex="\sqrt2=\dfrac{|a|}{|b|}\in\mathbb Q" />
                  , ce qui est faux (<Math tex="\sqrt2" /> est irrationnel). Donc <Math tex="b=0" />, puis{" "}
                  <Math tex="a^2=0" /> donc <Math tex="a=0" /> : contradiction avec{" "}
                  <Math tex="(a,b)\neq(0,0)" />. Donc <Math tex="N=a^2-2b^2\neq 0" />.
                </p>
                <p>
                  On a alors <Math tex="(a+b\sqrt2)(a-b\sqrt2)=a^2-2b^2=N" />, donc :
                </p>
                <FormulaBlock tex="(a+b\sqrt2)\left(\dfrac{a}{N}-\dfrac{b}{N}\sqrt2\right) = 1" />
                <p>
                  avec <Math tex="\dfrac{a}{N},\dfrac{-b}{N}\in\mathbb Q" />, donc l&apos;inverse{" "}
                  <Math tex="\dfrac{a}{N}-\dfrac{b}{N}\sqrt2" /> appartient bien à <Math tex="K" />.
                </p>
                <p className="font-semibold text-green-700">
                  Tout élément non nul de <Math tex="K" /> est inversible dans <Math tex="K" /> : donc{" "}
                  <Math tex="(K,+,\times)" /> est un corps commutatif.
                </p>
              </>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
