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
  title: "Les polynômes · Cours et exercices | Tronc Commun Sciences",
  description:
    "Cours complet sur les polynômes (degré, coefficients, égalité de deux polynômes, somme et produit, racine d'un polynôme, division euclidienne par x − a, schéma de Horner) et 14 exercices intégralement corrigés. Tronc Commun Sciences et Technologies, semestre 1.",
  kicker: "Tronc Commun Sciences · Semestre 1",
  heroTitle: "Les polynômes",
  heroSubtitle:
    "Degré et coefficients, égalité de polynômes, somme et produit, racines et division euclidienne par x − a : le cours complet, puis 14 exercices corrigés pas à pas.",
  footerNote: "Les polynômes · Mathématiques, Tronc Commun Sciences et Technologies, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "formulaire", label: "Formulaire" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** A numbered topic card used throughout the "Cours" section (I → III). */
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

/** A worked example block: statement in a bordered card. */
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
          { value: "14", label: "exercices corrigés" },
          { value: "3", label: "notions du cours" },
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
            <span className="font-display text-6xl font-extrabold sm:text-7xl">
              <Math tex="P(x)" />
            </span>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-orange-300">
              degré · racines · division euclidienne
            </span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Le cours complet"
        title="Les polynômes"
        tone="light"
        description="Trois notions à maîtriser, chacune avec sa définition, ses propriétés et un exemple entièrement résolu."
      >
        {/* I. Approche et egalite */}
        <TopicCard numeral="I" title="Approche sur les polynômes — égalité de deux polynômes">
          <Example title="Activité · le volume d'une boîte">
            <p>
              Une usine construit une boîte de carton (parallélépipède droit) de hauteur{" "}
              <Math tex="(30-2x)" /> cm, de longueur <Math tex="(15-x)" /> cm et de largeur <Math tex="x" /> cm,
              avec <Math tex="0<x<15" />.
            </p>
            <p>
              Le volume est <Math tex="V(x) = x(15-x)(30-2x)" />. En développant :{" "}
              <Math tex="(15-x)(30-2x) = 450-60x+2x^2" />, puis :
            </p>
            <p className="font-semibold text-green-700">
              <Math tex="V(x) = x(2x^2-60x+450) = 2x^3-60x^2+450x" />.
            </p>
          </Example>
          <DefBox label="Vocabulaire">
            L&apos;expression <Math tex="2x^3-60x^2+450x" /> est appelée <strong>polynôme de degré 3</strong>. On
            note un polynôme <Math tex="P(x)" />, <Math tex="Q(x)" /> ou <Math tex="R(x)" />, et son degré{" "}
            <Math tex="d°P" />. Ici <Math tex="d°V=3" />, et les nombres 2, −60 et 450 sont les{" "}
            <strong>coefficients</strong> du polynôme.
          </DefBox>
          <DefBox label="Définition générale">
            Soit <Math tex="n \in \mathbb{N}^*" /> et <Math tex="a_0,a_1,\dots,a_{n-1},a_n" /> des réels donnés,
            avec <Math tex="a_n \ne 0" />. L&apos;expression
          </DefBox>
          <FormulaBlock tex="P(x) = a_0+a_1x+a_2x^2+\cdots+a_{n-1}x^{n-1}+a_nx^n" caption="ou, dans le sens décroissant : anxⁿ + ... + a1x + a0" />
          <ul className="list-disc space-y-1.5 rounded-xl border border-border bg-surface-muted p-4 pl-9 text-sm">
            <li>est appelée <strong>polynôme de degré n</strong>, noté <Math tex="d°P=n" /> ;</li>
            <li>
              chaque terme <Math tex="a_ix^i" /> est un <strong>monôme</strong> de degré <Math tex="i" /> ;
            </li>
            <li>
              <Math tex="a_0,a_1,\dots,a_n" /> sont les <strong>coefficients</strong> du polynôme ;
            </li>
            <li>
              si <Math tex="P(x)=a_0" /> avec <Math tex="a_0\ne0" />, alors <Math tex="\deg(P)=0" /> ;
            </li>
            <li>
              si tous les coefficients sont nuls, <Math tex="P(x)=0" /> : <Math tex="P" /> n&apos;a pas de degré,
              c&apos;est le <strong>polynôme nul</strong>.
            </li>
          </ul>
          <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm">
            <p className="mb-2 font-semibold text-foreground-muted">Cas particuliers (avec a ≠ 0) :</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <Math tex="P(x)=ax" /> : monôme de 1er degré ; <Math tex="P(x)=ax^2" /> : monôme de 2ᵉ degré.
              </li>
              <li>
                <Math tex="P(x)=ax+b" /> : binôme de 1er degré ; <Math tex="P(x)=ax^2+bx+c" /> : trinôme de 2ᵉ
                degré.
              </li>
            </ul>
          </div>
          <Callout variant="success" title="Propriété · égalité de deux polynômes">
            Deux polynômes <Math tex="P(x)" /> et <Math tex="Q(x)" /> sont <strong>égaux</strong> si et seulement si{" "}
            <Math tex="\deg(P)=\deg(Q)" /> et les coefficients des monômes de même degré sont égaux.
          </Callout>
          <Example title="Exemple résolu · P(x) trinôme de degré 2">
            <p>
              <Math tex="P(x)=ax^2+bx+c" /> est un trinôme de degré 2 dont le coefficient de degré 2 est le même
              que celui de <Math tex="3x^2-5x+8" />, avec <Math tex="P(0)=-1" /> et <Math tex="P(1)=0" />.
            </p>
            <p>
              Le coefficient de degré 2 vaut donc <Math tex="a=3" />. <Math tex="P(0)=c=-1" />, donc{" "}
              <Math tex="c=-1" />. <Math tex="P(1)=3+b+c=0 \Rightarrow 3+b-1=0 \Rightarrow b=-2" />.
            </p>
            <p className="font-semibold text-green-700">
              Conclusion : <Math tex="P(x)=3x^2-2x-1" />.
            </p>
          </Example>
        </TopicCard>

        {/* II. Somme et produit */}
        <TopicCard numeral="II" title="Somme et produit de deux polynômes">
          <Callout variant="success" title="Propriétés">
            <p>
              La somme de deux polynômes <Math tex="P(x)" /> et <Math tex="Q(x)" /> est un polynôme{" "}
              <Math tex="(P+Q)(x)" /> dont le degré vérifie <Math tex="d°(P+Q) \le \sup(d°P,\,d°Q)" />.
            </p>
            <p className="mt-2">
              Le produit de deux polynômes <Math tex="P(x)" /> et <Math tex="Q(x)" /> est un polynôme{" "}
              <Math tex="(P\times Q)(x)" /> tel que <Math tex="d°(P\times Q) = d°P + d°Q" />.
            </p>
          </Callout>
          <Example title="Exemple résolu · additionner deux trinômes">
            <p>
              Avec <Math tex="P(x)=3x^2-5x+1" /> et <Math tex="Q(x)=4x^2+7x-8" /> :{" "}
              <Math tex="(P+Q)(x)=7x^2+2x-7" />, de degré 2 (le degré ne baisse pas ici).
            </p>
            <p>
              Avec <Math tex="P(x)=3x^2-5x+1" /> et <Math tex="Q(x)=-3x^2+7x-8" /> :{" "}
              <Math tex="(P+Q)(x)=2x-7" />, de degré 1 : les termes de degré 2 se sont annulés, ce qui illustre
              pourquoi on a seulement <Math tex="d°(P+Q)\le\sup(d°P,d°Q)" /> (et non toujours l&apos;égalité).
            </p>
          </Example>
          <Example title="Exemple résolu · multiplier deux polynômes">
            <p>
              Avec <Math tex="P(x)=5x+1" /> (degré 1) et <Math tex="Q(x)=7x-8" /> (degré 1) :{" "}
              <Math tex="(P\times Q)(x) = 35x^2-33x-8" />, de degré <Math tex="1+1=2" />.
            </p>
            <p>
              Avec <Math tex="P(x)=-5x+1" /> (degré 1) et <Math tex="Q(x)=5x^2-8" /> (degré 2) :{" "}
              <Math tex="(P\times Q)(x) = -25x^3+5x^2+40x-8" />, de degré <Math tex="1+2=3" /> : le degré du produit
              est toujours exactement <Math tex="d°P+d°Q" />.
            </p>
          </Example>
        </TopicCard>

        {/* III. Racine et division */}
        <TopicCard numeral="III" title="Racine d'un polynôme — division par x − a">
          <DefBox label="Définition · racine (ou zéro)">
            On dit qu&apos;un réel <Math tex="\alpha" /> est une <strong>racine</strong> (ou un <strong>zéro</strong>)
            d&apos;un polynôme <Math tex="P(x)" /> si et seulement si <Math tex="P(\alpha)=0" />.
          </DefBox>
          <Callout variant="info" title="Exemple">
            Pour <Math tex="P(x)=x^2-5x+6" />, <Math tex="P(3)=9-15+6=0" /> : 3 est racine de <Math tex="P" />.
          </Callout>
          <Callout variant="success" title="Propriété fondamentale de la division euclidienne">
            Soit <Math tex="P(x)" /> un polynôme de degré <Math tex="n" /> (<Math tex="n\in\mathbb{N}^*" />) et{" "}
            <Math tex="a\in\mathbb{R}" />. Il existe un unique polynôme <Math tex="Q(x)" /> tel que
          </Callout>
          <FormulaBlock tex="\begin{gathered} P(x) = (x-a)\,Q(x) + P(a) \\ \text{avec}\ \deg(Q)=n-1 \end{gathered}" />
          <p className="text-sm text-foreground">
            <Math tex="Q(x)" /> est le <strong>quotient</strong> et <Math tex="P(a)" /> le <strong>reste</strong> de
            la division euclidienne de <Math tex="P(x)" /> par <Math tex="x-a" />.
          </p>
          <Callout variant="warning" title="Cas particulier">
            Si <Math tex="P(a)=0" /> (a est racine de P), alors <Math tex="P(x)=(x-a)Q(x)" /> : on dit que{" "}
            <Math tex="P(x)" /> est <strong>divisible</strong> par <Math tex="x-a" />, ou que <Math tex="P(x)" /> est{" "}
            <strong>factorisé</strong> par <Math tex="x-a" />.
          </Callout>
          <Example title="Trois méthodes pour trouver Q(x) et le reste — sur P(x) = 6x³ − 5x² + 4 divisé par x − 2">
            <Accordion>
              <AccordionItem title="Méthode 1 · identification des coefficients">
                <div className="space-y-2">
                  <p>
                    <Math tex="P(2) = 6\times8-5\times4+4 = 48-20+4 = 32" />. On sait que{" "}
                    <Math tex="d°Q=2" />, donc <Math tex="Q(x)=ax^2+bx+c" />, et :
                  </p>
                  <p>
                    <Math tex="6x^3-5x^2+4 = (x-2)(ax^2+bx+c)+32 = ax^3+(b-2a)x^2+(c-2b)x-2c+32" />.
                  </p>
                  <p>
                    En identifiant : <Math tex="a=6" /> ; <Math tex="b-2a=-5 \Rightarrow b=7" /> ;{" "}
                    <Math tex="c-2b=0 \Rightarrow c=14" /> ; on vérifie <Math tex="-2c+32=4" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    <Math tex="P(x)=(x-2)(6x^2+7x+14)+32" />.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="Méthode 2 · division euclidienne posée">
                <div className="space-y-2">
                  <p>
                    <Math tex="6x^3-5x^2+0x+4" /> divisé par <Math tex="x-2" /> : on soustrait successivement{" "}
                    <Math tex="6x^2(x-2)=6x^3-12x^2" />, puis <Math tex="7x(x-2)=7x^2-14x" />, puis{" "}
                    <Math tex="14(x-2)=14x-28" />.
                  </p>
                  <p className="font-semibold text-green-700">
                    On obtient le même résultat : quotient <Math tex="6x^2+7x+14" />, reste <Math tex="32" />.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem title="Méthode 3 · schéma de Horner">
                <div className="space-y-2">
                  <p>
                    On aligne les coefficients de <Math tex="P" /> : <Math tex="6,\ -5,\ 0,\ 4" />, et on multiplie
                    par <Math tex="a=2" /> en cascade :
                  </p>
                  <p>
                    <Math tex="6" /> ; puis <Math tex="-5+2\times6=7" /> ; puis{" "}
                    <Math tex="0+2\times7=14" /> ; puis <Math tex="4+2\times14=32" /> (le reste).
                  </p>
                  <p className="font-semibold text-green-700">
                    Même résultat : <Math tex="Q(x)=6x^2+7x+14" />, reste 32.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
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
            <AccordionItem title="🔵 Deux polynômes sont égaux : condition ?">
              Même degré, et coefficients des monômes de même degré égaux.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟢 Degré d'une somme P + Q ?">
              <Math tex="d°(P+Q) \le \sup(d°P,d°Q)" /> (peut baisser si les termes de plus haut degré
              s&apos;annulent).
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟠 Degré d'un produit P × Q ?">
              <Math tex="d°(P\times Q) = d°P+d°Q" /> (toujours exact).
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🔴 α est racine de P : que peut-on écrire ?">
              <Math tex="P(\alpha)=0" />, donc <Math tex="P(x)=(x-\alpha)Q(x)" /> (P est divisible/factorisé par{" "}
              <Math tex="x-\alpha" />).
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟣 Division euclidienne par x − a : formule générale ?">
              <Math tex="P(x)=(x-a)Q(x)+P(a)" />, avec <Math tex="\deg(Q)=\deg(P)-1" />.
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem title="🟡 Comment trouver Q(x) et le reste rapidement ?">
              Par le schéma de Horner : coefficients de P, multipliés en cascade par a et additionnés.
            </AccordionItem>
          </Accordion>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="Série d'exercices · Les polynômes"
        tone="light"
        description="14 exercices corrigés en détail. Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup
          total={14}
          celebrationTitle="Bravo, les 14 exercices sont vérifiés !"
          celebrationSubtitle="Tu maîtrises les polynômes."
        >
          {/* Exercice 1 */}
          <ExerciseCard
            id="1"
            index={1}
            title="Déterminer des coefficients par identification"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Déterminer les réels a, b et c pour que l&apos;égalité soit valide :</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Cas 1 : <Math tex="(x-1)(ax^2+bx+c) = -2x^3-3x^2+5x" />.
                  </li>
                  <li>
                    Cas 2 : <Math tex="(x-2)^2(ax^2+bx+c) = 3x^4-12x^3+18x^2-24x+24" />.
                  </li>
                  <li>
                    Cas 3 : <Math tex="(x^2-1)(ax^3+bx^2+cx) = x^5+x^3-2x" />.
                  </li>
                </ul>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>Cas 1.</strong> En développant : <Math tex="(x-1)(ax^2+bx+c) = ax^3+(b-a)x^2+(c-b)x-c" />.
                </p>
                <p>
                  Par identification avec <Math tex="-2x^3-3x^2+5x+0" /> : <Math tex="a=-2" /> ;{" "}
                  <Math tex="b-a=-3 \Rightarrow b=-5" /> ; <Math tex="c-b=5 \Rightarrow c=0" /> (cohérent avec{" "}
                  <Math tex="-c=0" />).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=-2,\ b=-5,\ c=0" />.
                </p>
                <p>
                  <strong>Cas 2.</strong> <Math tex="(x-2)^2=x^2-4x+4" />, donc{" "}
                  <Math tex="(x^2-4x+4)(ax^2+bx+c) = ax^4+(b-4a)x^3+(c-4b+4a)x^2+(4b-4c)x+4c" />.
                </p>
                <p>
                  Par identification : <Math tex="a=3" /> ; <Math tex="b-4a=-12 \Rightarrow b=0" /> ;{" "}
                  <Math tex="c-4b+4a=18 \Rightarrow c=6" /> (cohérent avec les deux dernières équations).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=3,\ b=0,\ c=6" />.
                </p>
                <p>
                  <strong>Cas 3.</strong>{" "}
                  <Math tex="(x^2-1)(ax^3+bx^2+cx) = ax^5+bx^4+(c-a)x^3-bx^2-cx" />.
                </p>
                <p>
                  Par identification avec <Math tex="x^5+0x^4+x^3+0x^2-2x" /> : <Math tex="a=1" /> ;{" "}
                  <Math tex="b=0" /> ; <Math tex="c-a=1 \Rightarrow c=2" /> (cohérent avec{" "}
                  <Math tex="-b=0" /> et <Math tex="-c=-2" />).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=1,\ b=0,\ c=2" />.
                </p>
              </div>
            }
          />

          {/* Exercice 2 */}
          <ExerciseCard
            id="2"
            index={2}
            title="Le polynôme nul"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Déterminer les deux réels a et b tels que <Math tex="P(-2)=0" /> et <Math tex="P(0)=5" /> où{" "}
                    <Math tex="P(x)=-2x^3+ax+b" />.
                  </li>
                  <li>
                    Déterminer les trois réels a, b et c tels que pour tout réel x, on a <Math tex="P(x)=0" /> où{" "}
                    <Math tex="P(x) = ax^3-3(x-b)x+cx^2+(x^2-3)x" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="P(0)=b=5" />, donc <Math tex="b=5" />.
                </p>
                <p>
                  <Math tex="P(-2)=-2\times(-8)+a\times(-2)+b = 16-2a+5=0 \Rightarrow 21-2a=0 \Rightarrow a=\dfrac{21}{2}" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=\dfrac{21}{2},\ b=5" />.
                </p>
                <p>
                  <strong>2)</strong> Développons : <Math tex="-3(x-b)x = -3x^2+3bx" /> et{" "}
                  <Math tex="(x^2-3)x = x^3-3x" />, donc
                </p>
                <p>
                  <Math tex="P(x) = ax^3-3x^2+3bx+cx^2+x^3-3x = (a+1)x^3+(c-3)x^2+(3b-3)x" />.
                </p>
                <p>
                  Pour que <Math tex="P(x)=0" /> pour tout <Math tex="x" /> (polynôme nul), chaque coefficient doit
                  être nul : <Math tex="a+1=0" /> ; <Math tex="c-3=0" /> ; <Math tex="3b-3=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=-1,\ b=1,\ c=3" />.
                </p>
              </div>
            }
          />

          {/* Exercice 3 */}
          <ExerciseCard
            id="3"
            index={3}
            title="Divisions euclidiennes"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>Effectuer la division euclidienne de E(x) par F(x) dans les cas suivants :</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Cas 1 : <Math tex="E(x)=5x^4-x^3-3x^2+x-1" /> et <Math tex="F(x)=x-2" />.
                  </li>
                  <li>
                    Cas 2 : <Math tex="E(x)=4x^3+5x^2-x+7" /> et <Math tex="F(x)=x+1" />.
                  </li>
                  <li>
                    Cas 3 : <Math tex="E(x)=4x^5-5x^3+2x+1" /> et <Math tex="F(x)=2x+3" />.
                  </li>
                </ul>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>Cas 1</strong> (Horner avec <Math tex="a=2" />, coefficients 5, −1, −3, 1, −1) :{" "}
                  <Math tex="5" /> ; <Math tex="-1+2\times5=9" /> ; <Math tex="-3+2\times9=15" /> ;{" "}
                  <Math tex="1+2\times15=31" /> ; reste <Math tex="-1+2\times31=61" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="E(x) = (x-2)(5x^3+9x^2+15x+31)+61" />.
                </p>
                <p>
                  <strong>Cas 2</strong> (<Math tex="F(x)=x+1=x-(-1)" />, Horner avec <Math tex="a=-1" />,
                  coefficients 4, 5, −1, 7) : <Math tex="4" /> ; <Math tex="5-4=1" /> ; <Math tex="-1-1=-2" /> ;
                  reste <Math tex="7+2=9" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="E(x) = (x+1)(4x^2+x-2)+9" />.
                </p>
                <p>
                  <strong>Cas 3.</strong> <Math tex="F(x)=2x+3 = 2\left(x+\dfrac32\right)" />. On divise d&apos;abord
                  par <Math tex="\left(x+\dfrac32\right)" /> via Horner avec <Math tex="a=-\dfrac32" /> et les
                  coefficients 4, 0, −5, 0, 2, 1 :
                </p>
                <p>
                  <Math tex="4" /> ; <Math tex="0-6=-6" /> ; <Math tex="-5+9=4" /> ; <Math tex="0-6=-6" /> ;{" "}
                  <Math tex="2+9=11" /> ; reste <Math tex="1-16{,}5=-\dfrac{31}{2}" />.
                </p>
                <p>
                  Donc <Math tex="E(x) = \left(x+\dfrac32\right)(4x^4-6x^3+4x^2-6x+11) - \dfrac{31}{2}" />. Comme{" "}
                  <Math tex="x+\dfrac32 = \dfrac{2x+3}{2}" />, on peut réécrire avec <Math tex="F(x)=2x+3" /> en
                  divisant le quotient par 2 :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="E(x) = (2x+3)\left(2x^4-3x^3+2x^2-3x+\dfrac{11}{2}\right) - \dfrac{31}{2}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 4 */}
          <ExerciseCard
            id="4"
            index={4}
            title="Degré d'un produit de trois polynômes"
            items={
              <p className="text-sm text-foreground">
                Soient <Math tex="P(x)" />, <Math tex="Q(x)" /> et <Math tex="R(x)" /> trois polynômes dont les
                degrés successifs sont 2, 1 et 5. Déterminer le degré du produit <Math tex="P(x)\cdot Q(x)\cdot R(x)" />
                .
              </p>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  D&apos;après la propriété <Math tex="d°(P\times Q) = d°P+d°Q" /> (qui s&apos;étend à plusieurs
                  facteurs) :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="d°(P\cdot Q\cdot R) = 2+1+5 = 8" />.
                </p>
              </div>
            }
          />

          {/* Exercice 5 */}
          <ExerciseCard
            id="5"
            index={5}
            title="Construire un polynôme à partir de conditions"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Trouver un polynôme <Math tex="P(x)" /> de second degré tel que :{" "}
                    <Math tex="P(2)=3" /> ; <Math tex="P(1)=3" /> ; <Math tex="P(-1)=4" />.
                  </li>
                  <li>Déterminer un trinôme du second degré admettant 2 et 5 comme racines.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Posons <Math tex="P(x)=ax^2+bx+c" />. Les conditions donnent le système :
                </p>
                <p>
                  <Math tex="4a+2b+c=3" /> ; <Math tex="a+b+c=3" /> ; <Math tex="a-b+c=4" />.
                </p>
                <p>
                  En soustrayant les deux dernières : <Math tex="2b=-1 \Rightarrow b=-\dfrac12" />.
                </p>
                <p>
                  La deuxième équation donne <Math tex="a+c = 3-b = \dfrac72" />. La première donne{" "}
                  <Math tex="4a+c = 3-2b = 4" />. En soustrayant : <Math tex="3a = 4-\dfrac72=\dfrac12 \Rightarrow a=\dfrac16" />
                  , puis <Math tex="c = \dfrac72-\dfrac16 = \dfrac{10}{3}" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(x) = \dfrac16x^2-\dfrac12x+\dfrac{10}{3}" /> (on vérifie bien{" "}
                  <Math tex="P(2)=3" />, <Math tex="P(1)=3" />, <Math tex="P(-1)=4" />).
                </p>
                <p>
                  <strong>2)</strong> Un trinôme admettant 2 et 5 comme racines s&apos;écrit{" "}
                  <Math tex="P(x)=k(x-2)(x-5)" /> pour tout réel <Math tex="k\ne0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Par exemple, avec <Math tex="k=1" /> : <Math tex="P(x)=(x-2)(x-5)=x^2-7x+10" />.
                </p>
              </div>
            }
          />

          {/* Exercice 6 */}
          <ExerciseCard
            id="6"
            index={6}
            title="Un polynôme qui est un carré parfait"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="P(x)=x^4+6x^3-11x^2-60x+100" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Vérifier que <Math tex="P(x)=(x^2+3x-10)^2" />.
                  </li>
                  <li>
                    Vérifier que 2 est racine de <Math tex="P(x)" />.
                  </li>
                  <li>Factoriser P(x).</li>
                  <li>
                    Résoudre l&apos;équation <Math tex="P(x)=0" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="(x^2+3x-10)^2 = x^4+6x^3-20x^2+9x^2-60x+100 = x^4+6x^3-11x^2-60x+100" /> (en utilisant{" "}
                  <Math tex="(A+B+C)^2=A^2+B^2+C^2+2AB+2AC+2BC" /> avec <Math tex="A=x^2,B=3x,C=-10" />).
                </p>
                <p className="font-semibold text-green-700">
                  On retrouve exactement <Math tex="P(x)" /> : l&apos;égalité est vérifiée.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="2^2+3\times2-10 = 4+6-10=0" />, donc{" "}
                  <Math tex="P(2)=(x^2+3x-10)^2" /> évalué en 2 vaut <Math tex="0^2=0" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="x^2+3x-10" /> a pour discriminant <Math tex="9+40=49=7^2" />, donc
                  ses racines sont <Math tex="\dfrac{-3\pm7}{2}" />, soit 2 et −5 :{" "}
                  <Math tex="x^2+3x-10=(x-2)(x+5)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="P(x) = (x-2)^2(x+5)^2" />.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="P(x)=0 \iff (x-2)^2(x+5)^2=0 \iff x=2 \text{ ou } x=-5" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\mathcal S = \{-5,\,2\}" /> (chacune racine double).
                </p>
              </div>
            }
          />

          {/* Exercice 7 */}
          <ExerciseCard
            id="7"
            index={7}
            title="Factoriser par x + 1 (deux méthodes)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="P(x) = -2x^3+2x^2+10x+6" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="P(x)" /> est divisible par <Math tex="x+1" />.
                  </li>
                  <li>
                    En utilisant deux méthodes, déterminer les trois réels a, b et c tels que pour tout réel x :{" "}
                    <Math tex="P(x) = (x+1)(ax^2+bx+c)" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="P(-1) = -2(-1)+2(1)+10(-1)+6 = 2+2-10+6=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Comme <Math tex="P(-1)=0" />, <Math tex="P(x)" /> est bien divisible par <Math tex="x-(-1)=x+1" />.
                </p>
                <p>
                  <strong>2) Méthode 1 (identification).</strong>{" "}
                  <Math tex="(x+1)(ax^2+bx+c) = ax^3+(a+b)x^2+(b+c)x+c" />.
                </p>
                <p>
                  Par identification avec <Math tex="-2x^3+2x^2+10x+6" /> : <Math tex="a=-2" /> ;{" "}
                  <Math tex="a+b=2 \Rightarrow b=4" /> ; <Math tex="b+c=10 \Rightarrow c=6" /> (cohérent avec{" "}
                  <Math tex="c=6" />).
                </p>
                <p>
                  <strong>Méthode 2 (Horner, a = −1).</strong> Coefficients de P : −2, 2, 10, 6 :{" "}
                  <Math tex="-2" /> ; <Math tex="2+2=4" /> ; <Math tex="10-4=6" /> ; reste <Math tex="6-6=0" />{" "}
                  (confirme la divisibilité).
                </p>
                <p className="font-semibold text-green-700">
                  Les deux méthodes donnent : <Math tex="a=-2,\ b=4,\ c=6" />, soit{" "}
                  <Math tex="P(x)=(x+1)(-2x^2+4x+6)" />.
                </p>
              </div>
            }
          />

          {/* Exercice 8 */}
          <ExerciseCard
            id="8"
            index={8}
            title="Divisibilité par un trinôme"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Soit <Math tex="Q(x) = x^2-x-12" />. Calculer <Math tex="Q(-3)" /> et factoriser{" "}
                    <Math tex="Q(x)" />.
                  </li>
                  <li>
                    Déterminer les réels a et b tels que le polynôme{" "}
                    <Math tex="P(x) = 2x^4-4x^3-33x^2+ax+b" /> soit divisible par <Math tex="Q(x)" />.
                  </li>
                  <li>Factoriser P(x).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="Q(-3) = 9+3-12=0" />. Les racines de <Math tex="x^2-x-12" /> sont 4
                  et −3 (somme 1, produit −12).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="Q(x) = (x-4)(x+3)" />.
                </p>
                <p>
                  <strong>2)</strong> P divisible par <Math tex="Q=(x-4)(x+3)" /> équivaut à <Math tex="P(4)=0" />{" "}
                  et <Math tex="P(-3)=0" />.
                </p>
                <p>
                  <Math tex="P(4) = 512-256-528+4a+b = -272+4a+b=0 \Rightarrow 4a+b=272" />.
                </p>
                <p>
                  <Math tex="P(-3) = 162+108-297-3a+b = -27-3a+b=0 \Rightarrow b=3a+27" />.
                </p>
                <p>
                  En substituant : <Math tex="4a+3a+27=272 \Rightarrow 7a=245 \Rightarrow a=35" />, puis{" "}
                  <Math tex="b=3\times35+27=132" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=35,\ b=132" />.
                </p>
                <p>
                  <strong>3)</strong> En divisant <Math tex="P(x)=2x^4-4x^3-33x^2+35x+132" /> par{" "}
                  <Math tex="x^2-x-12" /> (division posée), on obtient le quotient <Math tex="2x^2-2x-11" /> et un
                  reste nul.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(x) = (x-4)(x+3)(2x^2-2x-11)" />. Le trinôme <Math tex="2x^2-2x-11" /> a pour
                  discriminant <Math tex="4+88=92" />, non carré parfait : il ne se factorise pas avec des
                  coefficients rationnels (ses racines sont <Math tex="\dfrac{1\pm\sqrt{23}}{2}" />).
                </p>
              </div>
            }
          />

          {/* Exercice 9 */}
          <ExerciseCard
            id="9"
            index={9}
            title="Factoriser en chaîne à partir d'une racine connue"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  On considère le polynôme <Math tex="P(x) = x^3-15x-4" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    a) Vérifier que 4 est une racine de <Math tex="P(x)" />.
                    <br />
                    b) Montrer que <Math tex="P(x) = (x-4)(x^2+4x+1)" />.
                  </li>
                  <li>
                    a) Montrer que <Math tex="x^2+4x+3 = (x+1)(x+3)" />.
                    <br />
                    b) Déterminer les deux réels a et b tels que : <Math tex="P(x)+2(x-4) = (x-4)(x+a)(x+b)" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1a)</strong> <Math tex="P(4) = 64-60-4=0" /> : 4 est bien racine de <Math tex="P(x)" />.
                </p>
                <p>
                  <strong>1b)</strong> Par Horner (a = 4, coefficients 1, 0, −15, −4) : <Math tex="1" /> ;{" "}
                  <Math tex="0+4=4" /> ; <Math tex="-15+16=1" /> ; reste <Math tex="-4+4=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(x) = (x-4)(x^2+4x+1)" />.
                </p>
                <p>
                  <strong>2a)</strong> <Math tex="(x+1)(x+3) = x^2+4x+3" /> : identité vérifiée.
                </p>
                <p>
                  <strong>2b)</strong> D&apos;après 1b), <Math tex="P(x)+2(x-4) = (x-4)(x^2+4x+1)+2(x-4) = (x-4)(x^2+4x+3)" />
                  .
                </p>
                <p>
                  Or, d&apos;après 2a), <Math tex="x^2+4x+3=(x+1)(x+3)" />, donc{" "}
                  <Math tex="P(x)+2(x-4) = (x-4)(x+1)(x+3)" />.
                </p>
                <p className="font-semibold text-green-700">
                  Conclusion : <Math tex="a=1" /> et <Math tex="b=3" /> (ou inversement).
                </p>
              </div>
            }
          />

          {/* Exercice 10 */}
          <ExerciseCard
            id="10"
            index={10}
            title="Un polynôme dépendant d'un paramètre n"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="P(x) = (x-2)^{3n}+(x-1)^{2n}-1" />, <Math tex="n\in\mathbb{N}^*" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Prouver l&apos;existence d&apos;un polynôme <Math tex="Q(x)" /> tel que{" "}
                    <Math tex="P(x)=(x-2)Q(x)" />.
                  </li>
                  <li>
                    Déterminer le degré de <Math tex="Q(x)" />.
                  </li>
                  <li>
                    Calculer <Math tex="P(1)" /> en fonction de <Math tex="n" />.
                  </li>
                  <li>
                    Déterminer les valeurs de <Math tex="n" /> pour que <Math tex="P(x)" /> soit divisible par{" "}
                    <Math tex="x-1" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong>{" "}
                  <Math tex="P(2) = (2-2)^{3n}+(2-1)^{2n}-1 = 0+1-1 = 0" />. Comme <Math tex="P(2)=0" />, 2 est
                  racine de <Math tex="P" />, donc, d&apos;après la propriété de division par <Math tex="x-a" />,
                  il existe un polynôme <Math tex="Q(x)" /> tel que <Math tex="P(x)=(x-2)Q(x)" />.
                </p>
                <p>
                  <strong>2)</strong> Le terme <Math tex="(x-2)^{3n}" /> a pour degré <Math tex="3n" /> et{" "}
                  <Math tex="(x-1)^{2n}" /> a pour degré <Math tex="2n" />. Comme <Math tex="n\ge1" />,{" "}
                  <Math tex="3n>2n" />, donc <Math tex="\deg(P)=3n" /> (le terme dominant ne s&apos;annule pas).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="\deg(Q) = \deg(P)-1 = 3n-1" />.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="P(1) = (1-2)^{3n}+(1-1)^{2n}-1 = (-1)^{3n}+0-1 = (-1)^n-1" /> (car{" "}
                  <Math tex="(-1)^{3n}=\left((-1)^3\right)^n=(-1)^n" />).
                </p>
                <p className="font-semibold text-green-700">
                  Si <Math tex="n" /> est pair : <Math tex="P(1)=1-1=0" />. Si <Math tex="n" /> est impair :{" "}
                  <Math tex="P(1)=-1-1=-2" />.
                </p>
                <p>
                  <strong>4)</strong> <Math tex="P(x)" /> divisible par <Math tex="x-1" /> équivaut à{" "}
                  <Math tex="P(1)=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;après le 3), cela équivaut à : <Math tex="n" /> pair (<Math tex="n=2,4,6,\dots" />).
                </p>
              </div>
            }
          />

          {/* Exercice 11 */}
          <ExerciseCard
            id="11"
            index={11}
            title="Un polynôme réciproque (palindromique)"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit <Math tex="P(x) = 2x^4-9x^3+14x^2-9x+2" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Vérifier que 0 n&apos;est pas racine de ce polynôme.
                  </li>
                  <li>
                    Montrer que si <Math tex="\alpha" /> est racine de <Math tex="P(x)" />, alors{" "}
                    <Math tex="\dfrac1\alpha" /> est aussi une racine de <Math tex="P(x)" />.
                  </li>
                  <li>
                    a) Vérifier que 2 est racine de <Math tex="P(x)" />.
                    <br />
                    b) Déduire une autre racine de <Math tex="P(x)" />.
                    <br />
                    c) En effectuant la division euclidienne de <Math tex="P(x)" /> par <Math tex="x-2" />,
                    déterminer <Math tex="Q(x)" /> tel que <Math tex="P(x)=(x-2)Q(x)" />.
                  </li>
                  <li>
                    a) Déterminer les trois réels a, b et c tels que{" "}
                    <Math tex="Q(x) = \left(x-\dfrac12\right)(ax^2+bx+c)" />.
                    <br />
                    b) Factoriser P(x) en monômes.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> <Math tex="P(0)=2 \ne 0" /> : 0 n&apos;est pas racine.
                </p>
                <p>
                  <strong>2)</strong> Les coefficients de <Math tex="P" /> (2, −9, 14, −9, 2) sont symétriques
                  (palindromiques). Pour <Math tex="\alpha \ne 0" /> :
                </p>
                <p>
                  <Math tex="\alpha^4 P\!\left(\dfrac1\alpha\right) = \alpha^4\!\left(\dfrac{2}{\alpha^4}-\dfrac{9}{\alpha^3}+\dfrac{14}{\alpha^2}-\dfrac{9}{\alpha}+2\right) = 2-9\alpha+14\alpha^2-9\alpha^3+2\alpha^4 = P(\alpha)" />
                  .
                </p>
                <p className="font-semibold text-green-700">
                  Si <Math tex="P(\alpha)=0" /> et <Math tex="\alpha\ne0" /> (question 1), alors{" "}
                  <Math tex="\alpha^4P\!\left(\frac1\alpha\right)=0" />, et comme <Math tex="\alpha^4\ne0" />,{" "}
                  <Math tex="P\!\left(\dfrac1\alpha\right)=0" /> : <Math tex="\dfrac1\alpha" /> est bien racine.
                </p>
                <p>
                  <strong>3a)</strong>{" "}
                  <Math tex="P(2) = 32-72+56-18+2 = 0" /> : 2 est racine de <Math tex="P(x)" />.
                </p>
                <p>
                  <strong>3b)</strong> D&apos;après la question 2 (et <Math tex="2\ne0" />),{" "}
                  <Math tex="\dfrac12" /> est aussi une racine de <Math tex="P(x)" />.
                </p>
                <p>
                  <strong>3c)</strong> Par Horner (a = 2, coefficients 2, −9, 14, −9, 2) : <Math tex="2" /> ;{" "}
                  <Math tex="-9+4=-5" /> ; <Math tex="14-10=4" /> ; <Math tex="-9+8=-1" /> ; reste{" "}
                  <Math tex="2-2=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="Q(x) = 2x^3-5x^2+4x-1" />.
                </p>
                <p>
                  <strong>4a)</strong> Comme <Math tex="\dfrac12" /> est racine de P mais pas de{" "}
                  <Math tex="(x-2)" />, c&apos;est une racine de <Math tex="Q(x)" /> (on vérifie{" "}
                  <Math tex="Q\!\left(\frac12\right)=\frac14-\frac54+2-1=0" />). Par Horner (a = 1/2, coefficients 2,
                  −5, 4, −1) : <Math tex="2" /> ; <Math tex="-5+1=-4" /> ; <Math tex="4-2=2" /> ; reste{" "}
                  <Math tex="-1+1=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="Q(x) = \left(x-\dfrac12\right)(2x^2-4x+2)" /> : <Math tex="a=2,\ b=-4,\ c=2" />.
                </p>
                <p>
                  <strong>4b)</strong> <Math tex="2x^2-4x+2 = 2(x^2-2x+1) = 2(x-1)^2" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où <Math tex="Q(x) = 2\left(x-\dfrac12\right)(x-1)^2" />, puis :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(x) = (x-2)\,Q(x) = 2(x-2)\left(x-\dfrac12\right)(x-1)^2 = (x-2)(2x-1)(x-1)^2" />.
                </p>
              </div>
            }
          />

          {/* Exercice 12 */}
          <ExerciseCard
            id="12"
            index={12}
            title="Somme géométrique via factorisation"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  Soit le polynôme <Math tex="P(x) = 1-x^{n+1}" />.
                </p>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    Montrer que <Math tex="P(x) = (1-x)(1+x+x^2+x^3+\cdots+x^n)" />.
                  </li>
                  <li>
                    En déduire la valeur de la somme :{" "}
                    <Math tex="S = 1+2+2^2+2^3+\cdots+2^{2009}" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> En développant le membre de droite (somme télescopique) :
                </p>
                <p>
                  <Math tex="(1-x)(1+x+x^2+\cdots+x^n) = (1+x+\cdots+x^n) - (x+x^2+\cdots+x^{n+1})" />.
                </p>
                <p className="font-semibold text-green-700">
                  Tous les termes intermédiaires s&apos;annulent : il reste <Math tex="1-x^{n+1} = P(x)" />.
                </p>
                <p>
                  <strong>2)</strong> Appliquons l&apos;identité avec <Math tex="x=2" /> et <Math tex="n=2009" /> :
                </p>
                <p>
                  <Math tex="1-2^{2010} = (1-2)(1+2+2^2+\cdots+2^{2009}) = -S" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="S = 2^{2010}-1" />.
                </p>
              </div>
            }
          />

          {/* Exercice 13 */}
          <ExerciseCard
            id="13"
            index={13}
            title="Un polynôme télescopique pour retrouver 1+2+...+n"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Déterminer un polynôme de second degré <Math tex="P(x)" /> tel que pour tout réel{" "}
                    <Math tex="x" />, on a <Math tex="P(x+1)-P(x)=x" />.
                  </li>
                  <li>
                    En déduire la valeur de la somme : <Math tex="S = 1+2+3+\cdots+n" /> où <Math tex="n" /> est un
                    entier naturel.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Posons <Math tex="P(x)=ax^2+bx+c" />.{" "}
                  <Math tex="P(x+1) = a(x+1)^2+b(x+1)+c = ax^2+(2a+b)x+(a+b+c)" />.
                </p>
                <p>
                  <Math tex="P(x+1)-P(x) = 2ax+(a+b)" />. Pour que ceci vaille <Math tex="x" /> pour tout{" "}
                  <Math tex="x" /> : <Math tex="2a=1 \Rightarrow a=\dfrac12" />, et{" "}
                  <Math tex="a+b=0 \Rightarrow b=-\dfrac12" /> (c reste libre, on choisit <Math tex="c=0" />).
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(x) = \dfrac12x^2-\dfrac12x = \dfrac{x(x-1)}{2}" /> convient.
                </p>
                <p>
                  <strong>2)</strong> Sommons l&apos;identité <Math tex="P(x+1)-P(x)=x" /> pour{" "}
                  <Math tex="x=1,2,\dots,n" /> :
                </p>
                <p>
                  <Math tex="\sum_{x=1}^{n} \big[P(x+1)-P(x)\big] = \sum_{x=1}^{n} x = S" />.
                </p>
                <p>
                  La somme de gauche est télescopique : elle vaut <Math tex="P(n+1)-P(1)" />.
                </p>
                <p>
                  <Math tex="P(n+1) = \dfrac{(n+1)n}{2}" /> et <Math tex="P(1) = \dfrac{1\times0}{2}=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="S = \dfrac{n(n+1)}{2}" />.
                </p>
              </div>
            }
          />

          {/* Exercice 14 */}
          <ExerciseCard
            id="14"
            index={14}
            title="Divisibilité par (x + 1)²"
            items={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  On veut déterminer les réels a et b de sorte que le polynôme{" "}
                  <Math tex="P(x)=ax^6+bx^5+1" /> soit divisible par <Math tex="(x+1)^2" />.
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Montrer que si <Math tex="(x+1)" /> divise <Math tex="P(x)" />, alors{" "}
                    <Math tex="P(x) = a(x^6+x^5)+x^5+1" />.
                  </li>
                  <li>
                    Déterminer la factorisation de <Math tex="x^5+1" /> par <Math tex="x+1" />. En déduire la
                    factorisation de <Math tex="P(x)" /> par <Math tex="x+1" />.
                  </li>
                  <li>Déterminer alors la valeur de a puis celle de b.</li>
                  <li>
                    Effectuer enfin la factorisation de <Math tex="P(x)" /> par <Math tex="(x+1)^2" />.
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <strong>1)</strong> Si <Math tex="(x+1)" /> divise <Math tex="P(x)" />, alors{" "}
                  <Math tex="P(-1)=0" /> : <Math tex="a-b+1=0 \Rightarrow b=a+1" />.
                </p>
                <p>
                  En remplaçant : <Math tex="P(x) = ax^6+(a+1)x^5+1 = a(x^6+x^5)+x^5+1" />.
                </p>
                <p>
                  <strong>2)</strong> Par Horner (a = −1, coefficients 1, 0, 0, 0, 0, 1) :{" "}
                  <Math tex="1" /> ; <Math tex="-1" /> ; <Math tex="1" /> ; <Math tex="-1" /> ; <Math tex="1" /> ;
                  reste 0.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="x^5+1 = (x+1)(x^4-x^3+x^2-x+1)" />.
                </p>
                <p>
                  D&apos;après le 1), <Math tex="P(x) = a\,x^5(x+1) + (x+1)(x^4-x^3+x^2-x+1)" />, donc :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(x) = (x+1)\big[ax^5+x^4-x^3+x^2-x+1\big]" />.
                </p>
                <p>
                  <strong>3)</strong> Notons <Math tex="g(x)=ax^5+x^4-x^3+x^2-x+1" />. Pour que{" "}
                  <Math tex="(x+1)^2" /> divise <Math tex="P(x)" />, il faut que <Math tex="(x+1)" /> divise{" "}
                  <Math tex="g(x)" />, c&apos;est-à-dire <Math tex="g(-1)=0" />.
                </p>
                <p>
                  <Math tex="g(-1) = -a+1+1+1+1+1 = -a+5 = 0 \Rightarrow a=5" />.
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="a=5" />, puis <Math tex="b=a+1=6" />.
                </p>
                <p>
                  <strong>4)</strong> Avec <Math tex="a=5" /> : <Math tex="g(x) = 5x^5+x^4-x^3+x^2-x+1" />. Divisons
                  par <Math tex="(x+1)" /> (Horner, a = −1, coefficients 5, 1, −1, 1, −1, 1) : <Math tex="5" /> ;{" "}
                  <Math tex="1-5=-4" /> ; <Math tex="-1+4=3" /> ; <Math tex="1-3=-2" /> ; <Math tex="-1+2=1" /> ;
                  reste <Math tex="1-1=0" />.
                </p>
                <p className="font-semibold text-green-700">
                  Donc <Math tex="g(x) = (x+1)(5x^4-4x^3+3x^2-2x+1)" />, et finalement :
                </p>
                <p className="font-semibold text-green-700">
                  <Math tex="P(x) = 5x^6+6x^5+1 = (x+1)^2(5x^4-4x^3+3x^2-2x+1)" />.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
