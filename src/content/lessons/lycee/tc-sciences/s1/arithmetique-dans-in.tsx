import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  FormulaBlock,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Arithmétique dans IN · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet d'arithmétique dans IN (parité, critères de divisibilité, nombres premiers, décomposition en facteurs premiers, PGCD, PPCM, division euclidienne) et 13 exercices intégralement corrigés. Tronc Commun Sciences et Technologiques, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "Arithmétique dans IN",
  heroSubtitle:
    "Parité, divisibilité, nombres premiers, PGCD, PPCM et division euclidienne : le cours complet, puis 13 exercices corrigés pas à pas.",
  footerNote: "Arithmétique dans IN · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "formulaire", label: "Formulaire" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** A numbered topic card used throughout the "Cours" section (I → VII). */
function TopicCard({
  numeral,
  title,
  children,
}: {
  numeral: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8">
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
      <p className="text-foreground">{children}</p>
    </div>
  );
}

/** A worked example block: statement in a bordered card, solution revealed on click. */
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
          { value: "13", label: "exercices corrigés" },
          { value: "7", label: "notions du cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
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
          <div className="relative flex select-none flex-col items-center text-white">
            <span className="font-display text-7xl font-extrabold sm:text-8xl">
              <Math tex="\mathbb{N}" />
            </span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              divisibilité · nombres premiers · pgcd · ppcm
            </span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Le cours complet"
        title="Arithmétique dans IN"
        tone="light"
        description="Sept notions à maîtriser, chacune avec sa définition, ses propriétés et un exemple entièrement résolu."
      >
        {/* I. Parité */}
        <TopicCard numeral="I" title="Nombres pairs, nombres impairs">
          <DefBox label="Définition">
            Soit <Math tex="n \in \mathbb{N}" />. Si <Math tex="n" /> est divisible par 2, c&apos;est un{" "}
            <strong>nombre pair</strong>. Sinon, <Math tex="n" /> est <strong>impair</strong>.
          </DefBox>
          <FormulaBlock
            tex="n=2k \ \text{(pair)} \qquad \text{ou} \qquad n=2k+1 \ \text{(impair)}"
            caption="avec k ∈ ℕ"
          />
          <Callout variant="info" title="Remarque">
            0 est pair (car 2 divise 0), et 1 est impair.
          </Callout>
          <Example title="Exemple résolu · trois petites démonstrations">
            <Accordion>
              <AccordionItem title="Voir les démonstrations">
                <div className="space-y-3">
                  <p>
                    <strong>a) La somme de deux entiers pairs est un entier pair.</strong> Si{" "}
                    <Math tex="a=2k" /> et <Math tex="b=2k'" /> (avec <Math tex="k,k'\in\mathbb N" />), alors{" "}
                    <Math tex="a+b=2k+2k'=2(k+k')" />, qui est bien de la forme <Math tex="2\times\text{entier}" />
                    {" "}: <span className="text-green-700 font-semibold">a + b est pair.</span>
                  </p>
                  <p>
                    <strong>b) Le produit de deux entiers impairs est un entier impair.</strong> Si{" "}
                    <Math tex="a=2k+1" /> et <Math tex="b=2k'+1" />, alors{" "}
                    <Math tex="ab=(2k+1)(2k'+1)=4kk'+2k+2k'+1=2(2kk'+k+k')+1" />, qui est de la forme{" "}
                    <Math tex="2\times\text{entier}+1" /> :{" "}
                    <span className="text-green-700 font-semibold">ab est impair.</span>
                  </p>
                  <p>
                    <strong>c) La différence de deux entiers impairs est un entier pair.</strong> Si{" "}
                    <Math tex="a=2k+1" /> et <Math tex="b=2k'+1" />, alors{" "}
                    <Math tex="a-b=2k+1-2k'-1=2(k-k')" /> :{" "}
                    <span className="text-green-700 font-semibold">a − b est pair.</span>
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </Example>
        </TopicCard>

        {/* II. Critères de divisibilité */}
        <TopicCard numeral="II" title="Critères de divisibilité">
          <p className="text-sm text-foreground">Un nombre naturel est divisible par :</p>
          <ul className="space-y-2 rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <li><strong>2</strong> si le chiffre des unités est pair.</li>
            <li><strong>3</strong> si la somme de ses chiffres est divisible par 3.</li>
            <li><strong>4</strong> si le nombre formé par ses deux derniers chiffres est divisible par 4.</li>
            <li><strong>5</strong> si le chiffre des unités est 0 ou 5.</li>
            <li><strong>8</strong> si le nombre formé par ses trois derniers chiffres est divisible par 8.</li>
            <li><strong>9</strong> si la somme de ses chiffres est divisible par 9.</li>
            <li><strong>25</strong> si le nombre formé par ses deux derniers chiffres est divisible par 25.</li>
            <li>
              <strong>11</strong> : on note S₁ la somme des chiffres de rang impair (en partant des unités, de
              droite à gauche) et S₂ la somme des chiffres de rang pair, puis <Math tex="d = S_1 - S_2" />. Le
              nombre est divisible par 11 <strong>si et seulement si d est un multiple de 11</strong> (c&apos;est-à-dire{" "}
              <Math tex="d=0,\pm 11,\pm 22,\dots" />).
            </li>
          </ul>
          <Example title="Exemple résolu · 540 est-il divisible par 2, 3, 4, 5, 9 ?">
            <p>Chiffre des unités : 0, donc <strong className="text-green-700">540 est divisible par 2 et par 5</strong>.</p>
            <p>
              Somme des chiffres : <Math tex="5+4+0=9" />, divisible par 3 et par 9, donc{" "}
              <strong className="text-green-700">540 est divisible par 3 et par 9</strong>.
            </p>
            <p>
              Deux derniers chiffres : 40, et <Math tex="40 = 4\times 10" /> est divisible par 4, donc{" "}
              <strong className="text-green-700">540 est divisible par 4</strong>.
            </p>
          </Example>
          <Example title="Exemple résolu · le critère de 11 sur 9163">
            <p>
              En partant des unités : rang 1 (unités) = 3, rang 2 (dizaines) = 6, rang 3 (centaines) = 1, rang 4
              (milliers) = 9.
            </p>
            <p>
              <Math tex="S_1 = 3+1 = 4" /> (rangs impairs), <Math tex="S_2 = 6+9 = 15" /> (rangs pairs), donc{" "}
              <Math tex="d = S_1 - S_2 = 4-15=-11" />.
            </p>
            <p>
              <Math tex="d=-11" /> est un multiple de 11, donc{" "}
              <strong className="text-green-700">9163 est divisible par 11</strong> (en effet, <Math tex="9163 = 11\times 833" />).
            </p>
          </Example>
        </TopicCard>

        {/* III. Nombres premiers */}
        <TopicCard numeral="III" title="Entiers premiers entre eux · nombres premiers">
          <DefBox label="Définition · entiers premiers entre eux">
            Deux entiers <Math tex="a" /> et <Math tex="b" /> sont <strong>premiers entre eux</strong> (ou étrangers)
            si <Math tex="\text{pgcd}(a,b)=1" />.
          </DefBox>
          <Callout variant="info" title="Exemple">
            <Math tex="\text{pgcd}(17,42)=1" />, donc 17 et 42 sont premiers entre eux.
          </Callout>
          <DefBox label="Définition · nombre premier">
            Un entier naturel <Math tex="p \ge 2" /> est dit <strong>premier</strong> si ses seuls diviseurs positifs
            sont 1 et lui-même. Un entier naturel différent de 1 qui n&apos;est pas premier est appelé{" "}
            <strong>nombre composé</strong>.
          </DefBox>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground-muted">Théorèmes</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Tout entier naturel admet au moins un diviseur premier.</li>
              <li>Pour tout entier naturel différent de 1, son plus petit diviseur (après 1) est un nombre premier.</li>
              <li>
                Un entier naturel <Math tex="n \ne 1" /> est <strong>composé</strong> si et seulement s&apos;il admet
                un diviseur premier <Math tex="p" /> tel que <Math tex="p \le \sqrt{n}" />.
              </li>
            </ul>
          </div>
          <Example title="Exemple résolu · 299 est-il premier ?">
            <p>
              <Math tex="\sqrt{299}\approx 17{,}29" />, donc <Math tex="17^2 < 299 < 18^2" /> : il suffit de tester
              les nombres premiers <Math tex="\le 17" />, soit 2, 3, 5, 7, 11, 13, 17.
            </p>
            <p>2, 3, 5, 7 et 11 ne divisent pas 299. Mais <Math tex="299 = 13\times 23" /> : 13 divise 299.</p>
            <p className="font-semibold text-green-700">
              Conclusion : 299 est un nombre composé (299 n&apos;est pas premier).
            </p>
          </Example>
          <Callout variant="warning" title="Remarque">
            Il existe une infinité de nombres premiers.
          </Callout>
        </TopicCard>

        {/* IV. Décomposition en facteurs premiers */}
        <TopicCard numeral="IV" title="Décomposition en facteurs premiers">
          <DefBox label="Définition">
            Tout entier <Math tex="a \in \mathbb{N}^{*}" /> avec <Math tex="a \ne 1" /> s&apos;écrit de façon unique
            comme un produit de nombres premiers : c&apos;est la <strong>décomposition en facteurs premiers</strong>{" "}
            de <Math tex="a" />.
          </DefBox>
          <FormulaBlock tex="a = p_1^{\alpha_1}\times p_2^{\alpha_2}\times \cdots \times p_i^{\alpha_i}" caption="p₁, …, pᵢ premiers distincts deux à deux" />
          <Example title="Exemples résolus">
            <p><Math tex="30 = 2\times 3\times 5" />.</p>
            <p>31 est déjà un nombre premier : il n&apos;a pas d&apos;autre décomposition.</p>
            <p>
              <Math tex="1980 = 2^2\times 3^2\times 5\times 11" /> et <Math tex="45=3^2\times 5" />.
            </p>
          </Example>
        </TopicCard>

        {/* V. PGCD */}
        <TopicCard numeral="V" title="Diviseurs communs · PGCD">
          <DefBox label="Définition">
            Soient <Math tex="a" /> et <Math tex="b" /> deux entiers naturels non nuls. Le{" "}
            <strong>plus grand commun diviseur</strong> de <Math tex="a" /> et <Math tex="b" /> se note{" "}
            <Math tex="\text{pgcd}(a,b)" /> ou <Math tex="a\wedge b" />.
          </DefBox>
          <Example title="Exemple résolu · pgcd(42, 18)">
            <p>
              <Math tex="42=2\times 3\times 7" /> et <Math tex="18=2\times 3^2" />.
            </p>
            <p>
              <Math tex="D_{42}=\{1,2,3,6,7,14,21,42\}" /> et <Math tex="D_{18}=\{1,2,3,6,9,18\}" />, d&apos;où{" "}
              <Math tex="D_{42}\cap D_{18}=\{1,2,3,6\}" />.
            </p>
            <p className="font-semibold text-green-700"><Math tex="\text{pgcd}(42,18)=6" />.</p>
          </Example>
          <Callout variant="success" title="Théorème (admis)">
            Pour <Math tex="a,b\ge 2" />, <Math tex="\text{pgcd}(a,b)" /> est le produit des facteurs premiers{" "}
            <strong>communs</strong> à <Math tex="a" /> et <Math tex="b" />, chacun affecté du{" "}
            <strong>plus petit</strong> des deux exposants trouvés dans leurs décompositions.
          </Callout>
          <Example title="Exemple résolu · avec la décomposition">
            <p>
              Si <Math tex="a=2\times 3^4\times 7" /> et <Math tex="b=2^5\times 3^2\times 5\times 11^2" />, les
              facteurs communs sont 2 (exposants 1 et 5, on garde 1) et 3 (exposants 4 et 2, on garde 2).
            </p>
            <p className="font-semibold text-green-700"><Math tex="\text{pgcd}(a,b)=2\times 3^2 = 18" />.</p>
          </Example>
        </TopicCard>

        {/* VI. PPCM */}
        <TopicCard numeral="VI" title="Multiples communs · PPCM">
          <DefBox label="Définition">
            Soient <Math tex="a" /> et <Math tex="b" /> deux entiers naturels non nuls. Le{" "}
            <strong>plus petit commun multiple</strong> de <Math tex="a" /> et <Math tex="b" /> se note{" "}
            <Math tex="\text{ppcm}(a,b)" /> ou <Math tex="a\vee b" />.
          </DefBox>
          <Example title="Exemple résolu · ppcm(42, 18)">
            <p>
              Multiples de 42 : <Math tex="\{0,42,84,126,168,210,\dots\}" />. Multiples de 18 :{" "}
              <Math tex="\{0,18,36,54,72,90,108,126,144,\dots\}" />.
            </p>
            <p>
              Le plus petit multiple commun non nul est 126.
            </p>
            <p className="font-semibold text-green-700"><Math tex="\text{ppcm}(42,18)=126" />.</p>
          </Example>
          <Callout variant="success" title="Théorème (admis)">
            Pour <Math tex="a,b\ge 2" />, <Math tex="\text{ppcm}(a,b)" /> est le produit de{" "}
            <strong>tous</strong> les facteurs premiers, communs ou non, de <Math tex="a" /> et <Math tex="b" />,
            chacun affecté du <strong>plus grand</strong> des exposants trouvés.
          </Callout>
          <Example title="Exemples résolus">
            <p>
              Avec <Math tex="a=2\times 3^4\times 7" /> et <Math tex="b=2^5\times 3^2\times 5\times 11^2" /> :{" "}
              <Math tex="\text{ppcm}(a,b)=2^5\times 3^4\times 5\times 7\times 11^2" />.
            </p>
            <p>
              Avec <Math tex="a=2^3\times 3^4\times 5^7\times 11^2" /> et{" "}
              <Math tex="b=2^2\times 3^8\times 7^4\times 13^3" /> :{" "}
              <Math tex="\text{ppcm}(a,b)=2^3\times 3^8\times 5^7\times 7^4\times 11^2\times 13^3" /> et{" "}
              <Math tex="\text{pgcd}(a,b)=2^2\times 3^4" />.
            </p>
          </Example>
          <Callout variant="warning" title="Propriétés à retenir">
            <ul className="list-disc space-y-1 pl-5">
              <li><Math tex="\text{pgcd}(a,b)=\text{pgcd}(b,a)" />, <Math tex="\text{pgcd}(1,a)=1" />, <Math tex="\text{pgcd}(a,a)=a" />.</li>
              <li><Math tex="\text{ppcm}(a,b)=\text{ppcm}(b,a)" />, <Math tex="\text{ppcm}(1,a)=a" />, <Math tex="\text{ppcm}(a,a)=a" />.</li>
            </ul>
          </Callout>
          <FormulaBlock tex="\text{pgcd}(a,b)\times \text{ppcm}(a,b) = a\times b" />
        </TopicCard>

        {/* VII. Division euclidienne */}
        <TopicCard numeral="VII" title="Division euclidienne dans IN">
          <DefBox label="Définition">
            Soient <Math tex="a" /> et <Math tex="b" /> deux entiers naturels avec <Math tex="b>0" />. Il existe un
            unique couple d&apos;entiers naturels <Math tex="(q,r)" /> tels que :
          </DefBox>
          <FormulaBlock tex="a = bq+r \qquad \text{avec} \qquad 0\le r < b" />
          <p className="text-sm text-foreground">
            <Math tex="q" /> est le <strong>quotient</strong>, <Math tex="r" /> le <strong>reste</strong>,{" "}
            <Math tex="a" /> le <strong>dividende</strong> et <Math tex="b" /> le <strong>diviseur</strong>.
          </p>
          <Example title="Exemple résolu · division euclidienne de 17 par 5">
            <p><Math tex="17 = 5\times 3 + 2" />, avec <Math tex="0\le 2 < 5" />.</p>
            <p>Quotient : 3. Reste : 2. Dividende : 17. Diviseur : 5.</p>
          </Example>
        </TopicCard>
      </LessonSection>

      {/* ===================== FORMULAIRE ===================== */}
      <LessonSection
        id="formulaire"
        kicker="02 · Teste-toi"
        title="Formulaire express"
        tone="muted"
        description="Essaie de répondre dans ta tête avant de cliquer pour vérifier."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Accordion>
            <AccordionItem title="🔵 n est pair, n est impair : comment l'écrire ?">
              <Math tex="n=2k" /> (pair) ou <Math tex="n=2k+1" /> (impair), avec <Math tex="k\in\mathbb N" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟢 Comment reconnaître un multiple de 9 ou de 3 ?">
              La somme de ses chiffres est divisible par 9 (respectivement par 3).
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟠 Un nombre premier, c'est quoi ?">
              Un entier <Math tex="p\ge 2" /> dont les seuls diviseurs positifs sont 1 et <Math tex="p" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🔴 Comment calcule-t-on pgcd(a,b) avec les décompositions ?">
              Produit des facteurs premiers <strong>communs</strong>, chacun avec le <strong>plus petit</strong> exposant.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟣 Comment calcule-t-on ppcm(a,b) avec les décompositions ?">
              Produit de <strong>tous</strong> les facteurs premiers, chacun avec le <strong>plus grand</strong> exposant.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟡 La relation entre pgcd et ppcm ?">
              <Math tex="\text{pgcd}(a,b)\times\text{ppcm}(a,b)=a\times b" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="⚪ La division euclidienne de a par b ?">
              <Math tex="a=bq+r" /> avec <Math tex="0\le r < b" /> : <Math tex="q" /> quotient, <Math tex="r" /> reste.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="⚫ n(n+1), toujours pair : pourquoi ?">
              n et n+1 sont deux entiers consécutifs : l&apos;un des deux est nécessairement pair, donc leur produit
              aussi.
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Arithmétique dans IN"
        tone="light"
        description="13 exercices corrigés en détail. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup
          total={13}
          celebrationTitle="Bravo, les 13 exercices sont vérifiés !"
          celebrationSubtitle="Tu maîtrises l'arithmétique dans IN."
        >
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Étudier la parité"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="n\in\mathbb N" />. Étudier la parité des nombres suivants :
                </p>
                <p>
                  <Math tex="4n+300" /> ; <Math tex="14n+111" /> ; <Math tex="731\times 432" /> ;{" "}
                  <Math tex="2^{n+1}+15" /> ; <Math tex="4n^2+8n+13" /> ; <Math tex="n(n+1)" /> ;{" "}
                  <Math tex="n^2+5n+3" /> ; <Math tex="n(n+1)(n^2+5n+3)" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="4n+300=2(2n+150)" /> : <strong className="text-green-700">toujours pair</strong>.
                </p>
                <p>
                  <Math tex="14n+111" /> : <Math tex="14n" /> est pair et 111 est impair, donc pair + impair ={" "}
                  <strong className="text-green-700">toujours impair</strong>.
                </p>
                <p>
                  <Math tex="731\times 432" /> : 432 est pair, donc le produit est{" "}
                  <strong className="text-green-700">pair</strong>, quelle que soit la parité de 731 (c&apos;est un
                  nombre fixe, indépendant de n).
                </p>
                <p>
                  <Math tex="2^{n+1}+15" /> : pour <Math tex="n\in\mathbb N" />, <Math tex="n+1\ge 1" /> donc{" "}
                  <Math tex="2^{n+1}" /> est pair ; pair + 15 (impair) ={" "}
                  <strong className="text-green-700">toujours impair</strong>.
                </p>
                <p>
                  <Math tex="4n^2+8n+13" /> : <Math tex="4n^2" /> et <Math tex="8n" /> sont pairs, +13 est impair,
                  donc <strong className="text-green-700">toujours impair</strong>.
                </p>
                <p>
                  <Math tex="n(n+1)" /> : produit de deux entiers consécutifs, l&apos;un des deux est pair, donc le
                  produit est <strong className="text-green-700">toujours pair</strong>.
                </p>
                <p>
                  <Math tex="n^2+5n+3=(n^2+n)+4n+3" />. Or <Math tex="n^2+n=n(n+1)" /> est pair et <Math tex="4n" />{" "}
                  est pair, donc leur somme est paire ; +3 donne un nombre{" "}
                  <strong className="text-green-700">toujours impair</strong> (que n soit pair ou impair).
                </p>
                <p>
                  <Math tex="n(n+1)(n^2+5n+3)" /> : d&apos;après ce qui précède, <Math tex="n(n+1)" /> est pair, donc
                  ce produit contient un facteur pair : il est{" "}
                  <strong className="text-green-700">toujours pair</strong>.
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Parité, simplification et multiple de 20"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="n\in\mathbb N" />. On pose <Math tex="a=2n+4" /> et <Math tex="b=6n+11" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Étudier la parité de a et de b.</li>
                  <li>
                    Simplifier le nombre <Math tex="(6n+11)(-1)^{2n+4}-(2n+4)(-1)^{6n+11}" />.
                  </li>
                  <li>
                    Montrer que <Math tex="a^2+(b+1)^2" /> est un multiple de 20.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="a=2n+4=2(n+2)" /> :{" "}
                  <strong className="text-green-700">a est toujours pair</strong>. <Math tex="b=6n+11" /> : {""}
                  <Math tex="6n" /> pair + 11 impair, donc{" "}
                  <strong className="text-green-700">b est toujours impair</strong>.
                </p>
                <p>
                  <strong>2)</strong> Comme <Math tex="a=2n+4" /> est pair, <Math tex="(-1)^{2n+4}=1" />. Comme{" "}
                  <Math tex="b=6n+11" /> est impair, <Math tex="(-1)^{6n+11}=-1" />. L&apos;expression devient :
                </p>
                <p>
                  <Math tex="(6n+11)\times 1-(2n+4)\times(-1)=6n+11+2n+4" />, soit{" "}
                  <strong className="text-green-700"><Math tex="8n+15" /></strong>.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="a^2=(2n+4)^2=4n^2+16n+16" /> et{" "}
                  <Math tex="(b+1)^2=(6n+12)^2=36n^2+144n+144" />.
                </p>
                <p>
                  <Math tex="a^2+(b+1)^2=40n^2+160n+160=40(n^2+4n+4)=40(n+2)^2" />.
                </p>
                <p>
                  Or <Math tex="40(n+2)^2=20\times\big[2(n+2)^2\big]" />, où <Math tex="2(n+2)^2\in\mathbb N" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="a^2+(b+1)^2" /> est bien un multiple de 20.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Divisibilité par 3 et par 56"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="n\in\mathbb N" />. On pose <Math tex="a=2^{n+3}-5\times 2^n" /> et{" "}
                  <Math tex="b=7^{n+1}\times 2^{n+3}" />.
                </p>
                <p>Montrer que a est multiple de 3 et que 56 divise b.</p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="a=2^{n+3}-5\times 2^n=2^n\times 2^3-5\times 2^n=2^n(8-5)=3\times 2^n" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="a=3\times 2^n" /> est bien un multiple de 3, pour tout <Math tex="n\in\mathbb N" />.
                </p>
                <p>
                  <Math tex="b=7^{n+1}\times 2^{n+3}=7^n\times 7\times 2^n\times 2^3=(7\times 8)\times(7^n\times 2^n)=56\times 14^n" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="b=56\times 14^n" /> est bien divisible par 56, pour tout <Math tex="n\in\mathbb N" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Chiffres inconnus et divisibilité"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Déterminer le chiffre a tel que le nombre <Math tex="\overline{5a74}" /> soit divisible par 3.
                  </li>
                  <li>
                    Déterminer le chiffre b tel que le nombre <Math tex="\overline{815b}" /> soit divisible à la
                    fois par 2 et par 9.
                  </li>
                  <li>
                    Déterminer le chiffre c tel que le nombre <Math tex="\overline{921c}" /> soit divisible par 3 et
                    non pas par 9.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Somme des chiffres : <Math tex="5+a+7+4=16+a" />. Il faut{" "}
                  <Math tex="16+a\equiv 0" /> mod 3, c&apos;est-à-dire <Math tex="a\equiv 2" /> mod 3, avec{" "}
                  <Math tex="0\le a\le 9" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="a\in\{2,5,8\}" /> (16+2=18, 16+5=21, 16+8=24, tous multiples de 3).
                </p>
                <p>
                  <strong>2)</strong> Divisible par 2 : b pair, donc <Math tex="b\in\{0,2,4,6,8\}" />. Divisible par
                  9 : <Math tex="8+1+5+b=14+b" /> doit être multiple de 9, donc <Math tex="b=4" /> (14+4=18).
                </p>
                <p className="font-semibold text-green-700">
                  b = 4 est le seul chiffre pair qui vérifie aussi la divisibilité par 9.
                </p>
                <p>
                  <strong>3)</strong> Somme des chiffres : <Math tex="9+2+1+c=12+c" />. Divisible par 3 :{" "}
                  <Math tex="12+c\equiv 0" /> mod 3, donc <Math tex="c\in\{0,3,6,9\}" />. On retire les valeurs qui
                  rendent la somme divisible par 9 : pour <Math tex="c=6" />, <Math tex="12+6=18" /> est divisible
                  par 9, donc on exclut <Math tex="c=6" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="c\in\{0,3,9\}" /> (sommes 12, 15, 21 : divisibles par 3, non par 9).
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Reconnaître les nombres premiers"
            items={
              <p className="text-sm text-foreground">
                Parmi la liste de nombres ci-dessous, indiquer ceux qui sont premiers :{" "}
                <Math tex="25422" /> ; <Math tex="101" /> ; <Math tex="70107" /> ; <Math tex="137" /> ;{" "}
                <Math tex="15631" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <Math tex="25422" /> est pair (se termine par 2) : <Math tex="25422=2\times 3\times 19\times 223" />,{" "}
                  <strong>composé</strong>.
                </p>
                <p>
                  <Math tex="101" /> : <Math tex="\sqrt{101}\approx 10{,}05" />, on teste 2, 3, 5, 7 — aucun ne
                  divise 101. <strong className="text-green-700">101 est premier.</strong>
                </p>
                <p>
                  <Math tex="70107" /> : somme des chiffres <Math tex="=7+0+1+0+7=15" />, divisible par 3 : <Math tex="70107=3\times 23369" />,{" "}
                  <strong>composé</strong>.
                </p>
                <p>
                  <Math tex="137" /> : <Math tex="\sqrt{137}\approx 11{,}7" />, on teste 2, 3, 5, 7, 11 — aucun ne
                  divise 137. <strong className="text-green-700">137 est premier.</strong>
                </p>
                <p>
                  <Math tex="15631=7^2\times 11\times 29" />, <strong>composé</strong>.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : seuls 101 et 137 sont des nombres premiers dans cette liste.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Un entier impair : n²−1 et n⁴−1"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soit n un entier naturel impair.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Étudier la parité de <Math tex="n^2-1" /> et <Math tex="n^2+1" />.
                  </li>
                  <li>
                    Montrer que 8 divise <Math tex="n^2-1" />.
                  </li>
                  <li>
                    En déduire que 16 divise <Math tex="n^4-1" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> n impair <Math tex="\Rightarrow" /> n² impair (impair × impair). Donc{" "}
                  <Math tex="n^2-1" /> et <Math tex="n^2+1" /> sont{" "}
                  <strong className="text-green-700">tous les deux pairs</strong>.
                </p>
                <p>
                  <strong>2)</strong> Écrivons <Math tex="n=2k+1" /> (<Math tex="k\in\mathbb N" />). Alors :
                </p>
                <p>
                  <Math tex="n^2-1=(n-1)(n+1)=2k(2k+2)=4k(k+1)" />.
                </p>
                <p>
                  Or <Math tex="k(k+1)" /> est un produit de deux entiers consécutifs, donc pair : on peut écrire{" "}
                  <Math tex="k(k+1)=2m" /> avec <Math tex="m\in\mathbb N" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="n^2-1=4\times 2m=8m" /> : 8 divise bien <Math tex="n^2-1" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="n^4-1=(n^2-1)(n^2+1)" />. On a <Math tex="n^2-1=8m" /> et{" "}
                  <Math tex="n^2+1=(n^2-1)+2=8m+2=2(4m+1)" />.
                </p>
                <p>
                  Donc <Math tex="n^4-1=8m\times 2(4m+1)=16\,m(4m+1)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : 16 divise bien <Math tex="n^4-1" />.
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Une identité et un diviseur variable"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Vérifier que pour tout entier naturel n :{" "}
                    <Math tex="n^2+4n+9=(n+3)(n+1)+6" />.
                  </li>
                  <li>
                    Déterminer toutes les valeurs de l&apos;entier naturel n pour que le nombre n+3 divise{" "}
                    <Math tex="n^2+4n+9" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="(n+3)(n+1)+6=n^2+n+3n+3+6=n^2+4n+9" /> :{" "}
                  <strong className="text-green-700">l&apos;identité est vérifiée</strong>.
                </p>
                <p>
                  <strong>2)</strong> Puisque <Math tex="n^2+4n+9=(n+3)(n+1)+6" />, et que <Math tex="(n+3)" />{" "}
                  divise toujours <Math tex="(n+3)(n+1)" />, on a :
                </p>
                <p>
                  <Math tex="(n+3) \mid (n^2+4n+9) \iff (n+3)\mid 6" />.
                </p>
                <p>
                  Comme <Math tex="n\in\mathbb N" />, <Math tex="n+3\ge 3" />. Les diviseurs de 6 supérieurs ou
                  égaux à 3 sont 3 et 6.
                </p>
                <p>
                  <Math tex="n+3=3 \Rightarrow n=0" /> ; <Math tex="n+3=6 \Rightarrow n=3" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="n\in\{0,3\}" /> (vérification : pour n=0, <Math tex="9\div 3=3" /> ; pour
                  n=3, <Math tex="30\div 6=5" />).
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Même parité et différence de carrés"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soient n et m deux entiers naturels.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="m+n" /> et <Math tex="m-n" /> ont la même parité.
                  </li>
                  <li>
                    Déterminer tous les nombres entiers m et n qui vérifient <Math tex="m^2-n^2=12" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="(m+n)-(m-n)=2n" />, qui est pair. Or deux nombres dont la
                  différence est paire ont{" "}
                  <strong className="text-green-700">nécessairement la même parité</strong>.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="m^2-n^2=(m-n)(m+n)=12" />. Comme <Math tex="12>0" />, on a{" "}
                  <Math tex="m>n" />, donc <Math tex="m-n" /> et <Math tex="m+n" /> sont deux entiers strictement
                  positifs, avec <Math tex="(m-n)\le(m+n)" />.
                </p>
                <p>
                  D&apos;après 1), <Math tex="m-n" /> et <Math tex="m+n" /> ont la même parité. Comme leur produit
                  vaut 12 (pair), ils ne peuvent pas être tous les deux impairs (impair × impair = impair) : ils
                  sont donc <strong>tous les deux pairs</strong>.
                </p>
                <p>
                  Parmi les couples de diviseurs de 12, seul <Math tex="(2,6)" /> est formé de deux nombres pairs
                  (les couples <Math tex="(1,12)" /> et <Math tex="(3,4)" /> mélangent un pair et un impair).
                </p>
                <p>
                  Donc <Math tex="m-n=2" /> et <Math tex="m+n=6" />, d&apos;où <Math tex="m=4" /> et{" "}
                  <Math tex="n=2" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : l&apos;unique solution est <Math tex="(m,n)=(4,2)" /> (vérification :{" "}
                  <Math tex="4^2-2^2=16-4=12" />).
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Diviseurs de 22 et équation produit"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-1 pl-5">
                  <li>Déterminer les diviseurs du nombre 22.</li>
                  <li>
                    En déduire tous les entiers naturels x et y qui vérifient{" "}
                    <Math tex="(x+2)(y+1)=22" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="22=2\times 11" />, donc ses diviseurs sont{" "}
                  <Math tex="\{1,2,11,22\}" />.
                </p>
                <p>
                  <strong>2)</strong> Comme <Math tex="x\in\mathbb N" />, <Math tex="x+2\ge 2" /> : le facteur{" "}
                  <Math tex="x+2" /> doit être un diviseur de 22 supérieur ou égal à 2, donc{" "}
                  <Math tex="x+2\in\{2,11,22\}" />.
                </p>
                <p>
                  <Math tex="x+2=2\Rightarrow x=0" />, et alors <Math tex="y+1=11\Rightarrow y=10" />.
                </p>
                <p>
                  <Math tex="x+2=11\Rightarrow x=9" />, et alors <Math tex="y+1=2\Rightarrow y=1" />.
                </p>
                <p>
                  <Math tex="x+2=22\Rightarrow x=20" />, et alors <Math tex="y+1=1\Rightarrow y=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="(x,y)\in\{(0,10),\,(9,1),\,(20,0)\}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Décompositions, simplifications, pgcd et ppcm"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Décomposer en produit de facteurs premiers les nombres : <Math tex="495" /> ; <Math tex="156" /> ;{" "}
                    <Math tex="1404" /> ; <Math tex="4056" />.
                  </li>
                  <li>
                    Simplifier l&apos;écriture des nombres suivants : <Math tex="\dfrac{1404}{4056}" /> ;{" "}
                    <Math tex="\sqrt{1404\times 4056}" /> ; <Math tex="\dfrac{495}{1404}+\dfrac{156}{4056}" />.
                  </li>
                  <li>
                    Déterminer <Math tex="\text{pgcd}(495,156)" /> ; <Math tex="\text{pgcd}(495,1404)" /> ;{" "}
                    <Math tex="\text{pgcd}(1404,4056)" /> ; <Math tex="\text{ppcm}(495,156)" /> ;{" "}
                    <Math tex="\text{ppcm}(495,1404)" /> ; <Math tex="\text{ppcm}(1404,4056)" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="495=3^2\times 5\times 11" /> ; <Math tex="156=2^2\times 3\times 13" /> ;{" "}
                  <Math tex="1404=2^2\times 3^3\times 13" /> ; <Math tex="4056=2^3\times 3\times 13^2" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="\text{pgcd}(1404,4056)=156" />, donc{" "}
                  <Math tex="\dfrac{1404}{4056}=\dfrac{1404\div 156}{4056\div 156}=\dfrac{9}{26}" />.
                </p>
                <p>
                  <Math tex="1404\times 4056=2^5\times 3^4\times 13^3" />, donc{" "}
                  <Math tex="\sqrt{1404\times 4056}=2^2\times 3^2\times 13\times\sqrt{2\times 13}=468\sqrt{26}" />.
                </p>
                <p>
                  <Math tex="\dfrac{495}{1404}=\dfrac{495\div 9}{1404\div 9}=\dfrac{55}{156}" /> (car{" "}
                  <Math tex="\text{pgcd}(495,1404)=9" />) et <Math tex="\dfrac{156}{4056}=\dfrac{1}{26}=\dfrac{6}{156}" />.
                </p>
                <p>
                  Donc <Math tex="\dfrac{495}{1404}+\dfrac{156}{4056}=\dfrac{55}{156}+\dfrac{6}{156}=\dfrac{61}{156}" />{" "}
                  (fraction irréductible, car 61 est premier).
                </p>
                <p>
                  <strong>3)</strong> En comparant les décompositions du 1) :
                </p>
                <p>
                  <Math tex="\text{pgcd}(495,156)=3" /> ; <Math tex="\text{pgcd}(495,1404)=3^2=9" /> ;{" "}
                  <Math tex="\text{pgcd}(1404,4056)=2^2\times 3\times 13=156" />.
                </p>
                <p>
                  <Math tex="\text{ppcm}(495,156)=2^2\times 3^2\times 5\times 11\times 13=25740" /> ;{" "}
                  <Math tex="\text{ppcm}(495,1404)=2^2\times 3^3\times 5\times 11\times 13=77220" /> ;{" "}
                  <Math tex="\text{ppcm}(1404,4056)=2^3\times 3^3\times 13^2=36504" />.
                </p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Étude complète de a = 4680 et b = 5940"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soient a et b deux entiers naturels tels que <Math tex="a=4680" /> et <Math tex="b=5940" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Décomposer a et b en produit de facteurs premiers.</li>
                  <li>
                    En déduire la décomposition en produit de facteurs premiers de <Math tex="a^2\times b^3" />.
                  </li>
                  <li>
                    Déterminer <Math tex="\text{pgcd}(a,b)" /> et <Math tex="\text{ppcm}(a,b)" />, puis vérifier que{" "}
                    <Math tex="\text{pgcd}(a,b)\times\text{ppcm}(a,b)=ab" />.
                  </li>
                  <li>
                    Déterminer le plus petit entier naturel m tel que ma soit un carré parfait.
                  </li>
                  <li>
                    Déterminer le plus petit entier naturel n tel que nb soit le cube d&apos;un entier naturel.
                  </li>
                  <li>
                    Simplifier <Math tex="\dfrac{a}{b}" /> et <Math tex="\sqrt{ab}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="a=4680=2^3\times 3^2\times 5\times 13" /> et{" "}
                  <Math tex="b=5940=2^2\times 3^3\times 5\times 11" />.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="a^2=2^6\times 3^4\times 5^2\times 13^2" /> et{" "}
                  <Math tex="b^3=2^6\times 3^9\times 5^3\times 11^3" />, donc :
                </p>
                <p>
                  <Math tex="a^2\times b^3=2^{12}\times 3^{13}\times 5^5\times 11^3\times 13^2" />.
                </p>
                <p>
                  <strong>3)</strong> Facteurs communs à a et b : 2 (min(3,2)=2), 3 (min(2,3)=2), 5 (min(1,1)=1).
                </p>
                <p>
                  <Math tex="\text{pgcd}(a,b)=2^2\times 3^2\times 5=180" />.
                </p>
                <p>
                  <Math tex="\text{ppcm}(a,b)=2^3\times 3^3\times 5\times 11\times 13=154440" /> (exposants maximaux
                  sur tous les facteurs 2, 3, 5, 11, 13).
                </p>
                <p>
                  Vérification : <Math tex="180\times 154440=27\,799\,200" /> et{" "}
                  <Math tex="4680\times 5940=27\,799\,200" /> :{" "}
                  <strong className="text-green-700">l&apos;égalité est bien vérifiée</strong>.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="a=2^3\times 3^2\times 5^1\times 13^1" /> : pour que ma soit un
                  carré parfait, chaque exposant doit devenir pair. Il faut donc ajouter un facteur 2 (exposant 3{" "}
                  <Math tex="\to" /> 4), un facteur 5 et un facteur 13.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="m=2\times 5\times 13=130" /> (on obtient{" "}
                  <Math tex="130\times 4680=608400=780^2" />).
                </p>
                <p>
                  <strong>5)</strong> <Math tex="b=2^2\times 3^3\times 5^1\times 11^1" /> : pour que nb soit un
                  cube, chaque exposant doit devenir multiple de 3. Il faut ajouter un facteur 2 (2{" "}
                  <Math tex="\to" /> 3), deux facteurs 5 (1 <Math tex="\to" /> 3) et deux facteurs 11 (1{" "}
                  <Math tex="\to" /> 3).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="n=2\times 5^2\times 11^2=6050" /> (on obtient{" "}
                  <Math tex="6050\times 5940=35\,937\,000=330^3" />).
                </p>
                <p>
                  <strong>6)</strong> <Math tex="\text{pgcd}(a,b)=180" />, donc{" "}
                  <Math tex="\dfrac{a}{b}=\dfrac{4680\div 180}{5940\div 180}=\dfrac{26}{33}" /> (fraction
                  irréductible : <Math tex="26=2\times 13" />, <Math tex="33=3\times 11" />, aucun facteur commun).
                </p>
                <p>
                  <Math tex="ab=2^5\times 3^5\times 5^2\times 11\times 13" />, donc{" "}
                  <Math tex="\sqrt{ab}=2^2\times 3^2\times 5\times\sqrt{2\times 3\times 11\times 13}=180\sqrt{858}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="x et y en fonction de n"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Pour tout <Math tex="n\in\mathbb N" />, on pose <Math tex="x=7^{n+2}-7^n" /> et{" "}
                  <Math tex="y=3\times 7^{n+1}+5\times 7^n" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que x est divisible par 3 et que y est un multiple de 13.
                  </li>
                  <li>
                    Décomposer, en fonction de n, les nombres x et y en produit de facteurs premiers.
                  </li>
                  <li>
                    Déterminer <Math tex="\text{pgcd}(x,y)" /> et <Math tex="\text{ppcm}(x,y)" /> en fonction de n.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1) et 2)</strong> <Math tex="x=7^{n+2}-7^n=7^n(7^2-1)=7^n\times 48=2^4\times 3\times 7^n" />.
                  Comme <Math tex="48=3\times 16" />, x est bien{" "}
                  <strong className="text-green-700">divisible par 3</strong>.
                </p>
                <p>
                  <Math tex="y=3\times 7^{n+1}+5\times 7^n=7^n(3\times 7+5)=7^n\times 26=2\times 13\times 7^n" />.
                  Comme le facteur 13 apparaît, y est bien{" "}
                  <strong className="text-green-700">un multiple de 13</strong>.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="x=2^4\times 3\times 7^n" /> et <Math tex="y=2\times 13\times 7^n" />.
                </p>
                <p>
                  Facteurs communs : 2 (min(4,1)=1) et <Math tex="7^n" /> (présent dans les deux avec le même
                  exposant n).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\text{pgcd}(x,y)=2\times 7^n" />.
                </p>
                <p>
                  Pour le ppcm, on prend chaque facteur premier avec son plus grand exposant : 2 (max(4,1)=4), 3
                  (max(1,0)=1), 7 (exposant n), 13 (max(0,1)=1).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\text{ppcm}(x,y)=2^4\times 3\times 13\times 7^n=624\times 7^n" />.
                </p>
              </div>
            }
          />

          {/* Exercice 13 */}
          <ExerciseCard
            id="13"
            index={13}
            title="Différence de carrés d'entiers consécutifs"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Soit <Math tex="n\in\mathbb N" />.</p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Développer <Math tex="(n+1)^2-n^2" />.
                  </li>
                  <li>
                    En déduire que tout nombre impair peut s&apos;écrire comme la différence des carrés de deux
                    entiers consécutifs.
                  </li>
                  <li>Application : montrer que 2017 est la différence de deux carrés d&apos;entiers consécutifs.</li>
                  <li>
                    Soit <Math tex="a=n^2+n+7" />.
                    <br />
                    a) Montrer que a est impair.
                    <br />
                    b) En déduire que a est la différence de deux carrés d&apos;entiers consécutifs.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="(n+1)^2-n^2=n^2+2n+1-n^2=2n+1" />.
                </p>
                <p>
                  <strong>2)</strong> Quand n décrit <Math tex="\mathbb N" />, <Math tex="2n+1" /> décrit exactement
                  l&apos;ensemble des nombres impairs (1, 3, 5, 7, …). D&apos;après 1), chaque nombre impair{" "}
                  <Math tex="2n+1" /> s&apos;écrit <Math tex="(n+1)^2-n^2" /> :{" "}
                  <strong className="text-green-700">
                    tout nombre impair est bien la différence des carrés de deux entiers consécutifs
                  </strong>
                  .
                </p>
                <p>
                  <strong>3)</strong> <Math tex="2017=2n+1 \Rightarrow n=1008" />. D&apos;après 1) avec{" "}
                  <Math tex="n=1008" /> :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="2017=1009^2-1008^2" /> (vérification : <Math tex="1009+1008=2017" />, et{" "}
                  <Math tex="1009^2-1008^2=(1009-1008)(1009+1008)=1\times 2017" />).
                </p>
                <p>
                  <strong>4a)</strong> <Math tex="a=n^2+n+7=n(n+1)+7" />. Or <Math tex="n(n+1)" /> est un produit de
                  deux entiers consécutifs, donc toujours pair. Ainsi <Math tex="a" /> = pair + 7 (impair) :{" "}
                  <strong className="text-green-700">a est toujours impair</strong>, quel que soit{" "}
                  <Math tex="n\in\mathbb N" />.
                </p>
                <p>
                  <strong>4b)</strong> Puisque a est impair, on peut écrire <Math tex="a=2k+1" /> avec{" "}
                  <Math tex="k=\dfrac{a-1}{2}=\dfrac{n^2+n+6}{2}" /> (ce quotient est bien un entier naturel car{" "}
                  <Math tex="n^2+n" /> est pair, donc <Math tex="n^2+n+6" /> aussi).
                </p>
                <p>
                  D&apos;après 2), <Math tex="a=(k+1)^2-k^2" />, c&apos;est-à-dire :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=\left(\dfrac{n^2+n+8}{2}\right)^{\!2}-\left(\dfrac{n^2+n+6}{2}\right)^{\!2}" />.
                </p>
                <p>
                  Conclusion : a est bien la différence des carrés de deux entiers consécutifs.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
