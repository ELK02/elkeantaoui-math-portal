import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Les Puissances des Nombres Rationnels · 2AC",
  description:
    "Fiche pédagogique, cours complet (exposants positifs et négatifs, opérations sur les puissances, écriture scientifique) et 14 exercices corrigés sur les puissances, 2ème année collège.",
  kicker: "2ᵉ Année Collège · Chapitre 4",
  heroTitle: "Les puissances des nombres rationnels",
  heroSubtitle:
    "Exposants positifs, négatifs, opérations sur les puissances et écriture scientifique. Le cours complet, suivi de 14 exercices corrigés.",
  footerNote: "Les puissances des nombres rationnels · Mathématiques, 2ᵉ année collège, semestre 1.",
  sections: [
    { id: "fiche", label: "Fiche" },
    { id: "cours", label: "Cours" },
    { id: "exercices", label: "Exercices" },
  ],
};

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500">
      {children}
    </span>
  );
}

function Item({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <Pill>{n}</Pill>
      <span className="text-sm">{children}</span>
    </div>
  );
}

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

/** A term + its sign verdict, side by side (Exercice 3 / Exercice 13 pattern). */
function VerdictItem({ n, tex, ok }: { n: number | string; tex: string; ok: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border p-4">
      <span className="flex items-center gap-3 text-sm">
        <Pill>{n}</Pill>
        <Math tex={tex} />
      </span>
      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
          ok ? "bg-green-100 text-green-700" : "bg-rose-100 text-rose-600"
        }`}
      >
        {ok ? "Positif" : "Négatif"}
      </span>
    </div>
  );
}

function FicheCard({ title, items, tone, children }: { title: string; items?: ReactNode[]; tone: "amber" | "sky" | "rose" | "emerald"; children?: ReactNode }) {
  const tones = {
    amber: "border-orange-500/30 bg-orange-100/60 text-orange-700",
    sky: "border-border bg-surface-muted text-foreground",
    rose: "border-rose-500/30 bg-rose-100/60 text-rose-700",
    emerald: "border-green-500/20 bg-green-100/60 text-green-700",
  } as const;
  return (
    <div className={`rounded-2xl border p-5 sm:p-6 ${tones[tone]}`}>
      <p className="mb-3 text-sm font-bold">{title}</p>
      {items ? (
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-foreground">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-foreground">{children}</div>
      )}
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
          { value: "14", label: "exercices" },
          { value: "3", label: "parties de cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Voir le cours
            </a>
            <a
              href="#exercices"
              className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              S&apos;entraîner
            </a>
          </>
        }
        visual={
          <div className="relative flex select-none items-baseline font-serif text-white italic">
            <span className="text-[7rem] leading-none font-bold sm:text-[9rem]">a</span>
            <span className="-mt-16 -ml-1 text-[3.5rem] leading-none font-bold text-orange-400 sm:text-[4.5rem]">
              −n
            </span>
          </div>
        }
      />

      {/* ===================== FICHE PEDAGOGIQUE ===================== */}
      <LessonSection id="fiche" kicker="Repères" title="Fiche pédagogique" tone="light"
        description="Chapitre 4 · Les puissances."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FicheCard
            title="Objectifs d'apprentissage"
            tone="amber"
            items={[
              "Connaître et utiliser la puissance d'un nombre rationnel à exposant positif ou négatif.",
              "Déterminer le signe d'une puissance d'un nombre négatif.",
              "Maîtriser les opérations sur les puissances (produit, quotient, puissance d'une puissance).",
              "Écrire un nombre en notation scientifique.",
            ]}
          />
          <FicheCard
            title="Prérequis"
            tone="sky"
            items={[
              "Opérations (addition, soustraction, multiplication, division) sur les nombres rationnels.",
              "Notion de puissance vue en 1ère année collège (exposant entier naturel).",
              "Simplification et comparaison de fractions.",
            ]}
          />
          <FicheCard title="Plan du chapitre" tone="rose">
            I. Puissance d&apos;un nombre rationnel · II. Opérations sur les puissances · III. L&apos;écriture scientifique.
          </FicheCard>
          <FicheCard title="Série d'entraînement" tone="emerald">
            14 exercices progressifs, tous corrigés en un clic pour s&apos;auto-évaluer.
          </FicheCard>
        </div>
      </LessonSection>

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 · La définition" title="Puissance d'un nombre rationnel" tone="light"
        description="Une écriture rapide, à exposant positif ou négatif."
      >
        <p className="mb-2 font-semibold text-foreground">1) Puissance à exposant positif</p>
        <Callout variant="warning" title="Définition">
          Soient <Math tex="a" /> un nombre rationnel et <Math tex="n" /> un entier strictement supérieur à 1.
          <div className="mt-2">
            <Math tex="a^n = a \times a \times a \times \cdots \times a \quad (n \text{ facteurs})" />
          </div>
        </Callout>
        <Callout variant="info" title="Vocabulaire">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <Math tex="a^n" /> est une puissance du nombre <Math tex="a" /> et se lit « <Math tex="a" /> exposant <Math tex="n" /> »
              ou « <Math tex="a" /> puissance <Math tex="n" /> ». Le nombre <Math tex="n" /> est appelé <strong>exposant</strong>.
            </li>
            <li>
              <Math tex="a^2" /> se lit « <Math tex="a" /> au carré » · <Math tex="a^3" /> se lit « <Math tex="a" /> au cube ».
            </li>
          </ul>
        </Callout>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="11^3 = 11 \times 11 \times 11" /></p>
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="(-5)^2 = (-5) \times (-5)" /></p>
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="\left(\dfrac{7}{9}\right)^4 = \dfrac{7}{9} \times \dfrac{7}{9} \times \dfrac{7}{9} \times \dfrac{7}{9}" /></p>
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="\left(\dfrac{-13}{6}\right)^3 = \dfrac{-13}{6} \times \dfrac{-13}{6} \times \dfrac{-13}{6}" /></p>
        </div>

        <Callout variant="warning" title="Cas particulier">
          Si <Math tex="a" /> est un nombre rationnel non nul, alors :
          <div className="mt-2"><Math tex="a^0 = 1 \quad \text{et} \quad a^1 = a" /></div>
          <p className="mt-2">
            Exemples : <Math tex="14^0 = 1" /> ; <Math tex="(-15)^0 = 1" /> ; <Math tex="17^1 = 17" /> ; <Math tex="(-25)^1 = -25" />.
          </p>
          <p className="mt-2 font-bold">Remarque : la puissance <Math tex="0^0" /> n&apos;existe pas.</p>
        </Callout>

        <p className="mt-8 mb-2 font-semibold text-foreground">2) Puissance à exposant négatif</p>
        <Callout variant="warning" title="Définition">
          Soient <Math tex="x" /> et <Math tex="\dfrac{a}{b}" /> deux nombres rationnels non nuls et <Math tex="n" /> un entier positif.
          <div className="mt-2">
            <Math tex="x^{-n} = \dfrac{1}{x^n} \quad \text{et} \quad \left(\dfrac{a}{b}\right)^{-n} = \left(\dfrac{b}{a}\right)^n" />
          </div>
        </Callout>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="5^{-3} = \dfrac{1}{5^3}" /></p>
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="(-11)^{-9} = \dfrac{1}{(-11)^9}" /></p>
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="\left(\dfrac{5}{7}\right)^{-11} = \left(\dfrac{7}{5}\right)^{11}" /></p>
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="\left(\dfrac{-13}{25}\right)^{-2} = \left(\dfrac{-25}{13}\right)^2" /></p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">3) Le signe d&apos;une puissance d&apos;un nombre négatif</p>
        <Callout variant="info" title="Propriété">
          Une puissance d&apos;un nombre rationnel négatif est :
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><strong>Positive</strong>, si son exposant est un nombre pair.</li>
            <li><strong>Négative</strong>, si son exposant est un nombre impair.</li>
          </ul>
        </Callout>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="(-125)^{12}" /> est <strong className="text-green-700">positif</strong>, car 12 est pair.
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="\left(\dfrac{-117}{19}\right)^{31}" /> est <strong className="text-rose-600">négatif</strong>, car 31 est impair.
          </p>
        </div>
        <Callout variant="warning" title="Remarques importantes">
          <p><Math tex="(-5)^2 \neq -5^2" />, car <Math tex="(-5)^2 = 25" /> (positif) alors que <Math tex="-5^2 = -25" /> (négatif, c&apos;est l&apos;opposé d&apos;une puissance).</p>
          <p className="mt-2"><Math tex="(-5)^3 = -5^3" />, car les deux valent <Math tex="-125" />.</p>
        </Callout>

        <div className="mt-8">
          <ExerciseCard
            id="appli-1"
            index={1}
            title="Application : calculer"
            itemsLabel="5 puissances"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="25^2" /></Item>
                <Item n={2}><Math tex="\left(\dfrac{3}{4}\right)^{-3}" /></Item>
                <Item n={3}><Math tex="\left(\dfrac{-7}{5}\right)^{-3}" /></Item>
                <Item n={4}><Math tex="\left(\dfrac{-9}{7}\right)^{-2}" /></Item>
                <Item n={5}><Math tex="\left(\dfrac{-1}{2}\right)^5" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="25^2 = \mathbf{625}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\left(\dfrac{4}{3}\right)^3 = \mathbf{\dfrac{64}{27}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\left(\dfrac{-5}{7}\right)^3 = \mathbf{\dfrac{-125}{343}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\left(\dfrac{-7}{9}\right)^2 = \mathbf{\dfrac{49}{81}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{\dfrac{-1}{32}}" /></CorrectionCard>
              </div>
            }
          />
        </div>
      </LessonSection>

      <LessonSection kicker="02 · Les cinq règles" title="Les opérations sur les puissances" tone="light"
        description="Toujours la même logique : on additionne, soustrait ou multiplie les exposants."
      >
        <div className="grid grid-cols-1 gap-5">
          <div>
            <p className="mb-2 font-semibold text-foreground">1) Produit de deux puissances d&apos;un même nombre</p>
            <FormulaBlock tex="a^n \times a^m = a^{n+m}" />
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="11^{14} \times 11^8 = 11^{22}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="17^{-5} \times 17^{-10} = 17^{-15}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\left(\dfrac{-7}{5}\right)^{11} \times \left(\dfrac{-7}{5}\right)^{-20} = \left(\dfrac{-7}{5}\right)^{-9}" /></p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold text-foreground">2) Produit de deux puissances de même exposant</p>
            <FormulaBlock tex="a^n \times b^n = (a \times b)^n" />
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="25^{14} \times 10^{14} = 250^{14}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="30^{-5} \times 2^{-5} = 60^{-5}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\left(\dfrac{-5}{11}\right)^{11} \times \left(\dfrac{2}{7}\right)^{11} = \left(\dfrac{-10}{77}\right)^{11}" /></p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold text-foreground">3) Quotient de deux puissances d&apos;un même nombre</p>
            <FormulaBlock tex="\dfrac{a^m}{a^n} = a^{m-n}" />
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\dfrac{12^{23}}{12^{15}} = 12^8" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\dfrac{(-9)^{-14}}{(-9)^{30}} = (-9)^{-44}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\dfrac{(7/11)^{-17}}{(7/11)^{-20}} = \left(\dfrac{7}{11}\right)^3" /></p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold text-foreground">4) Quotient de deux puissances de même exposant</p>
            <FormulaBlock tex="\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n" />
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\dfrac{16^{25}}{12^{25}} = \left(\dfrac{4}{3}\right)^{25}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\dfrac{(-27)^{-15}}{18^{-15}} = \left(\dfrac{-3}{2}\right)^{-15}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\dfrac{(2/5)^3}{(-1/3)^3} = \left(\dfrac{-6}{5}\right)^3" /></p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-semibold text-foreground">5) Puissance d&apos;une puissance</p>
            <FormulaBlock tex="(a^m)^n = a^{m \times n}" />
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="(12^{-5})^4 = 12^{-20}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="\left(\left(\dfrac{-7}{6}\right)^{11}\right)^{-6} = \left(\dfrac{-7}{6}\right)^{-66}" /></p>
              <p className="rounded-xl border border-border p-4 text-center text-sm"><Math tex="((-17)^{-10})^{-9} = (-17)^{90}" /></p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ExerciseCard
            id="appli-2"
            index={2}
            title={<>Application 1 : écrire sous la forme <Math tex="a^n" /> avec <Math tex="n \neq 1, -1" /></>}
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="A"><Math tex="A = \dfrac{-1}{2} \times \left(\dfrac{-1}{2}\right)^2" /></Item>
                <Item n="B"><Math tex="B = \left(\dfrac{11}{7}\right)^{11} \times \left(\dfrac{11}{7}\right)^{-11}" /></Item>
                <Item n="C"><Math tex="C = \dfrac{5^7}{5^6 \times ((5)^2)^{-1}}" /></Item>
                <Item n="D"><Math tex="D = \dfrac{(2/3)^6}{((2/3)^2)^3}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n="A"><Math tex="\left(\dfrac{-1}{2}\right)^3 = \mathbf{\dfrac{-1}{8}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="\left(\dfrac{11}{7}\right)^0 = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="\dfrac{5^7}{5^4} = 5^3 = \mathbf{125}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="\left(\dfrac{2}{3} \times \dfrac{3}{2}\right)^6 = 1^6 = \mathbf{1}" /></CorrectionCard>
              </div>
            }
          />
        </div>

        <div className="mt-8">
          <ExerciseCard
            id="appli-3"
            index={3}
            title="Application 2 : transformer en une seule puissance"
            itemsLabel={"a, b non nuls"}
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n="x"><Math tex="x = a^{-3} \times a^4 \times \dfrac{1}{a^7}" /></Item>
                <Item n="y"><Math tex="y = \dfrac{(a^5 \times a)^{-2}}{a^3}" /></Item>
                <Item n="z"><Math tex="z = \dfrac{(a \times b^2)^{-3} \times a}{a^{-5} \times b^{-3}}" /></Item>
                <Item n="t"><Math tex="t = \left(\dfrac{a}{b}\right)^{-3} \times a^5 \times \left(\dfrac{1}{b}\right)^5" /></Item>
                <Item n="u"><Math tex="u = \dfrac{(a^2)^{-3} \times a^{-5}}{(1/b) \times (b^5)^{-2}}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n="x"><Math tex="a^{-3+4-7} = \mathbf{a^{-6}}" /></CorrectionCard>
                <CorrectionCard n="y"><Math tex="\dfrac{a^{-12}}{a^3} = \mathbf{a^{-15}}" /></CorrectionCard>
                <CorrectionCard n="z"><Math tex="a^{-2+5} \times b^{-6+3} = \mathbf{a^3 \times b^{-3}}" /></CorrectionCard>
                <CorrectionCard n="t"><Math tex="\left(\dfrac{a}{b}\right)^{-3} \times \left(\dfrac{a}{b}\right)^5 = \mathbf{\left(\dfrac{a}{b}\right)^2}" /></CorrectionCard>
                <CorrectionCard n="u"><Math tex="\dfrac{a^{-11}}{b^{-11}} = \mathbf{\left(\dfrac{a}{b}\right)^{-11}}" /></CorrectionCard>
              </div>
            }
          />
        </div>
      </LessonSection>

      <LessonSection kicker="03 · L'écriture scientifique" title="Puissances de 10 et notation scientifique" tone="light"
        description={<>Une écriture <Math tex="a \times 10^n" /> avec <Math tex="1 \leq a < 10" />.</>}
      >
        <p className="mb-2 font-semibold text-foreground">1) Puissance de 10</p>
        <Callout variant="warning">
          Soit <Math tex="n" /> un nombre entier naturel non nul.
          <div className="mt-2">
            <Math tex="10^n = 1\,000\ldots0 \ (n \text{ zéros}) \quad \text{et} \quad 10^{-n} = 0{,}000\ldots01 \ (n \text{ zéros})" />
          </div>
        </Callout>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="10^5 = 100\,000" /> · <Math tex="10\,000\,000\,000 = 10^{10}" /></p>
          <p className="rounded-xl border border-border p-4 text-sm"><Math tex="10^{-7} = 0{,}0000001" /> · <Math tex="0{,}000\ldots0 = 10^{-13}" /></p>
        </div>

        <p className="mt-8 mb-2 font-semibold text-foreground">2) Écriture scientifique</p>
        <Callout variant="warning" title="Définition">
          Soient <Math tex="a" /> un nombre décimal et <Math tex="n" /> un entier relatif non nul. Toute écriture de la forme{" "}
          <Math tex="x = a \times 10^n" /> ou <Math tex="x = -a \times 10^n" /> avec <strong><Math tex="1 \leq a < 10" /></strong> s&apos;appelle
          l&apos;écriture scientifique de <Math tex="x" />.
        </Callout>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="a = 3452" /> <br />⇒ <Math tex="\mathbf{3{,}452 \times 10^3}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="b = -0{,}00000234" /> <br />⇒ <Math tex="\mathbf{-2{,}34 \times 10^{-6}}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="c = 678{,}25 \times 10^5 = 6{,}7825 \times 10^2 \times 10^5" /> ⇒ <Math tex="\mathbf{6{,}7825 \times 10^7}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="d = -0{,}000254 \times 10^{-9} = -2{,}54 \times 10^{-4} \times 10^{-9}" /> ⇒ <Math tex="\mathbf{-2{,}54 \times 10^{-13}}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="e = -24{,}5 \times 10^{-11} \times 1{,}2 \times 10^3 = -29{,}4 \times 10^{-8}" /> ⇒ <Math tex="\mathbf{-2{,}94 \times 10^{-7}}" />
          </p>
          <p className="rounded-xl border border-border p-4 text-sm">
            <Math tex="f = -113 \times 10^5 + 7{,}2 \times 10^7 = 607 \times 10^5" /> ⇒ <Math tex="\mathbf{6{,}07 \times 10^7}" />
          </p>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="Série n°7 · Les puissances" title="Série d'exercices" tone="muted"
        description="14 exercices. Clique sur « Voir la correction » pour vérifier chaque exercice."
      >
        <ExerciseGroup total={14} celebrationTitle="Bravo, les 14 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les puissances des nombres rationnels.">
          <ExerciseCard
            id="1"
            index={1}
            title="Écriture fractionnaire"
            itemsLabel="6 puissances"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="2^{-3}" /></Item>
                <Item n={2}><Math tex="(-5)^{-3}" /></Item>
                <Item n={3}><Math tex="3^{-2}" /></Item>
                <Item n={4}><Math tex="7^{-1}" /></Item>
                <Item n={5}><Math tex="10^{-3}" /></Item>
                <Item n={6}><Math tex="(2{,}5)^{-4}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{\dfrac{1}{8}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{\dfrac{-1}{125}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{\dfrac{1}{9}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\dfrac{1}{7}}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{\dfrac{1}{1000}}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\left(\dfrac{2}{5}\right)^4 = \mathbf{\dfrac{16}{625}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Entier ou fraction irréductible"
            itemsLabel="4 puissances"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="\left(\dfrac{3}{4}\right)^{-2}" /></Item>
                <Item n={2}><Math tex="\left(\dfrac{9}{5}\right)^{-4}" /></Item>
                <Item n={3}><Math tex="\left(\dfrac{-1}{2}\right)^{-3}" /></Item>
                <Item n={4}><Math tex="-\left(\dfrac{11}{20}\right)^{-2}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{\dfrac{16}{9}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{\dfrac{625}{6561}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{-8}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\dfrac{-400}{121}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Le signe des nombres"
            itemsLabel="14 puissances, positif ou négatif"
            items={
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <VerdictItem n={1} tex="(-3)^7" ok={false} />
                <VerdictItem n={2} tex="(-5{,}4)^{-4}" ok={true} />
                <VerdictItem n={3} tex="-3^{126}" ok={false} />
                <VerdictItem n={4} tex="\left(\dfrac{-1}{3}\right)^{-11}" ok={false} />
                <VerdictItem n={5} tex="\left(\dfrac{-1}{9}\right)^{-14}" ok={true} />
                <VerdictItem n={6} tex="\left(\dfrac{22}{23}\right)^{-1}" ok={true} />
                <VerdictItem n={7} tex="\left(\dfrac{-3}{4}\right)^5" ok={false} />
                <VerdictItem n={8} tex="(-3)^{-78}" ok={true} />
                <VerdictItem n={9} tex="(-1)^{-1}" ok={false} />
                <VerdictItem n={10} tex="5{,}4^{-4}" ok={true} />
                <VerdictItem n={11} tex="-\left(\dfrac{22}{23}\right)^{-2}" ok={false} />
                <VerdictItem n={12} tex="\left(\dfrac{-5}{3}\right)^6" ok={true} />
                <VerdictItem n={13} tex="\left(\dfrac{-2}{7}\right)^8" ok={true} />
                <VerdictItem n={14} tex="\left(\dfrac{-5}{3}\right)^{-6}" ok={true} />
              </div>
            }
            correction={
              <p className="text-sm text-foreground-muted">
                Réflexe : on regarde seulement si l&apos;exposant (une fois le signe négatif éventuel devant la parenthèse mis à part) est pair ou impair. Les verdicts sont affichés directement sur chaque carte ci-dessus.
              </p>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title={<>Forme <Math tex="a^n" /> avec <Math tex="n" /> négatif</>}
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Item n={1}><Math tex="\dfrac{1}{8}" /></Item>
                <Item n={2}><Math tex="\dfrac{4}{9}" /></Item>
                <Item n={3}><Math tex="\dfrac{-1}{8}" /></Item>
                <Item n={4}><Math tex="\dfrac{9}{4}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <CorrectionCard n={1}><Math tex="\mathbf{2^{-3}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{\left(\dfrac{3}{2}\right)^{-2}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{(-2)^{-3}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\left(\dfrac{2}{3}\right)^{-2}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Puissance d'un nombre"
            itemsLabel="8 écritures"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Item n={1}><Math tex="\dfrac{1}{5^{-12}}" /></Item>
                <Item n={2}><Math tex="\dfrac{1}{(-2)^{-2}}" /></Item>
                <Item n={3}><Math tex="\dfrac{1}{(-2)^{-6}}" /></Item>
                <Item n={4}><Math tex="\dfrac{-1}{(-5)^{-1}}" /></Item>
                <Item n={5}><Math tex="\dfrac{1}{3^{-1}}" /></Item>
                <Item n={6}><Math tex="\dfrac{1}{a^{-7}}" /></Item>
                <Item n={7}><Math tex="\dfrac{1}{(-3)^6}" /></Item>
                <Item n={8}><Math tex="\dfrac{-1}{(-a)^{-3}}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <CorrectionCard n={1}><Math tex="\mathbf{5^{12}}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{(-2)^2}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{(-2)^6}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="-(-5)^1 = \mathbf{5}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="3^1 = \mathbf{3}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{a^7}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\mathbf{(-3)^{-6}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="-(-a)^3 = \mathbf{a^3}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Effectue les calculs"
            itemsLabel="10 expressions"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n="A"><Math tex="A = 2 + 3 \times 5^4" /></Item>
                <Item n="B"><Math tex="B = 5 - 3 \times 2^3" /></Item>
                <Item n="C"><Math tex="C = 3 \times 2^2 + 4 \times 5^2 - 3^2 \times 2^3" /></Item>
                <Item n="D"><Math tex="D = 2 \times (5+4)^2" /></Item>
                <Item n="E"><Math tex="E = \dfrac{16}{(3-1)^2}" /></Item>
                <Item n="F"><Math tex="F = 2 \times (1-5)^3" /></Item>
                <Item n="G"><Math tex="G = [2 + 2 \times (-3)]^4" /></Item>
                <Item n="H"><Math tex="H = [2 + (-2)^4 \times 3] \times (3^3 - 1)" /></Item>
                <Item n="I"><Math tex="I = 3 \times (1-3)^5 - 2^2 \times (3+2)" /></Item>
                <Item n="L"><Math tex="L = \dfrac{(5 - 2 \times 3)^4}{(2-3)^5}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A = \mathbf{1877}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{-19}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C = \mathbf{40}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D = \mathbf{162}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E = \mathbf{4}" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F = \mathbf{-128}" /></CorrectionCard>
                <CorrectionCard n="G"><Math tex="G = \mathbf{256}" /></CorrectionCard>
                <CorrectionCard n="H"><Math tex="H = \mathbf{1300}" /></CorrectionCard>
                <CorrectionCard n="I"><Math tex="I = \mathbf{-116}" /></CorrectionCard>
                <CorrectionCard n="L"><Math tex="L = \dfrac{(-1)^4}{(-1)^5} = \dfrac{1}{-1} = \mathbf{-1}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Fraction irréductible"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Item n="A"><Math tex="A = 5 \times 2^{-1} - 3^{-2}" /></Item>
                <Item n="B"><Math tex="B = 3 \times 2^{-2} + 5 \times 2^{-3}" /></Item>
                <Item n={3}><Math tex="\left(\dfrac{3}{4}\right)^2" /></Item>
                <Item n={4}><Math tex="\left(\dfrac{10}{3}\right)^5" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <CorrectionCard n="A"><Math tex="A = \mathbf{\dfrac{43}{18}}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B = \mathbf{\dfrac{11}{8}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{\dfrac{9}{16}}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{\dfrac{100000}{243}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Calcul littéral"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Item n={1}><span>Calcule A pour <Math tex="x = -3" /> : <Math tex="A = 2x^2 - 4x + 1" /></span></Item>
                <Item n={2}><span>Calcule B pour <Math tex="a = 2, b = -4" /> : <Math tex="B = 2(a+b)^2 - ab^2" /></span></Item>
                <Item n={3}><span>Calcule C pour <Math tex="x = \dfrac{2}{3}" /> : <Math tex="C = 3x^3 - 2x^2 - 4" /></span></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <CorrectionCard n="A"><Math tex="2 \times (-3)^2 - 4 \times (-3) + 1 = 18+12+1 = \mathbf{31}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="2 \times (-2)^2 - 2 \times 16 = 8-32 = \mathbf{-24}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="3 \times \dfrac{8}{27} - 2 \times \dfrac{4}{9} - 4 = \dfrac{8}{9} - \dfrac{8}{9} - 4 = \mathbf{-4}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Calcul astucieux"
            items={
              <p className="text-sm">
                En remarquant que <Math tex="2^{19} = 2^4 \times 2^{15}" />, calcule <Math tex="2^{19} \times 5^{15}" /> sans utiliser ta calculatrice.
              </p>
            }
            correction={
              <div className="text-sm">
                <p><Math tex="2^{19} \times 5^{15} = 2^4 \times 2^{15} \times 5^{15} = 16 \times (2 \times 5)^{15} = 16 \times 10^{15}" /></p>
                <p className="mt-2 font-bold"><Math tex="= 16\,000\,000\,000\,000\,000 = \mathbf{1{,}6 \times 10^{16}}" /></p>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Puissances de 2"
            items={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>1.</strong> On donne <Math tex="A = 2^{31} + 2^{30} + 2^{29}" />. Écris A sous la forme <Math tex="a \times 2^{30}" /> où{" "}
                  <Math tex="a" /> est un nombre décimal à déterminer.
                </p>
                <p>
                  <strong>2.</strong> On donne <Math tex="B = 4^{15}" />. Écris B sous la forme <Math tex="2^n" /> où <Math tex="n" /> est un nombre entier à déterminer.
                </p>
                <p>
                  <strong>3.</strong> Trouve le nombre entier x tel que <Math tex="\dfrac{A}{x} = \dfrac{B}{2}" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <strong>1)</strong> <Math tex="A = 4 \times 2^{29} + 2 \times 2^{29} + 2^{29} = 7 \times 2^{29} = 3{,}5 \times 2^{30}" />. Donc{" "}
                  <strong>a = 3,5</strong>.
                </p>
                <p>
                  <strong>2)</strong> <Math tex="B = 4^{15} = (2^2)^{15} = 2^{30}" />. Donc <strong>n = 30</strong>.
                </p>
                <p>
                  <strong>3)</strong> <Math tex="x = \dfrac{2A}{B} = 2 \times \dfrac{3{,}5 \times 2^{30}}{2^{30}} = 2 \times 3{,}5 = \mathbf{7}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="11"
            index={11}
            title="Écriture décimale"
            itemsLabel="6 nombres"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="1{,}35 \times 10^5" /></Item>
                <Item n={2}><Math tex="0{,}00605 \times 10^2" /></Item>
                <Item n={3}><Math tex="45200 \times 10^{-5}" /></Item>
                <Item n={4}><Math tex="2 \times 10^{-4}" /></Item>
                <Item n={5}><Math tex="0{,}05 \times 10^4" /></Item>
                <Item n={6}><Math tex="13{,}45 \times 10^{-3}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{135\,000}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{0{,}605}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{0{,}452}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{0{,}0002}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{500}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{0{,}01345}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="12"
            index={12}
            title="Complète"
            itemsLabel="10 égalités"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Item n={1}><Math tex="1{,}45 \times 10^{\ldots} = 14\,500" /></Item>
                <Item n={2}><Math tex="\ldots \times 10^{-2} = 85" /></Item>
                <Item n={3}><Math tex="45 \times 10^{\ldots} = 0{,}045" /></Item>
                <Item n={4}><Math tex="\ldots \times 10^4 = 7{,}1" /></Item>
                <Item n={5}><Math tex="6{,}3 \times 10^{\ldots} = 6\,300" /></Item>
                <Item n={6}><Math tex="\ldots \times 10^{-3} = -0{,}063" /></Item>
                <Item n={7}><Math tex="45\,324 = 45{,}324 \times 10^{\ldots} = 4{,}5324 \times 10^{\ldots}" /></Item>
                <Item n={8}><Math tex="20{,}07 = 2\,007 \times 10^{\ldots} = 0{,}2007 \times 10^{\ldots}" /></Item>
                <Item n={9}><Math tex="-917{,}2 = \ldots \times 10^2 = \ldots \times 10^{-4}" /></Item>
                <Item n={10}><Math tex="-0{,}0031 = \ldots \times 10^3 = \ldots \times 10^{-1}" /></Item>
                <Item n={11}><Math tex="0{,}02135 = \ldots \times 10^{-3} = 2\,135 \times 10^{\ldots}" /></Item>
                <Item n={12}><Math tex="-4\,245\,000 = \ldots \times 10^5 = -4\,245 \times 10^{\ldots}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n={1}>exposant = <Math tex="\mathbf{4}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{8\,500}" /></CorrectionCard>
                <CorrectionCard n={3}>exposant = <Math tex="\mathbf{-3}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{0{,}00071}" /></CorrectionCard>
                <CorrectionCard n={5}>exposant = <Math tex="\mathbf{3}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{-63}" /></CorrectionCard>
                <CorrectionCard n={7}>exposants = <Math tex="\mathbf{3}" /> puis <Math tex="\mathbf{4}" /></CorrectionCard>
                <CorrectionCard n={8}>exposants = <Math tex="\mathbf{-2}" /> puis <Math tex="\mathbf{2}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\mathbf{-9{,}172}" /> puis <Math tex="\mathbf{-9\,172\,000}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="\mathbf{-0{,}0000031}" /> puis <Math tex="\mathbf{-0{,}031}" /></CorrectionCard>
                <CorrectionCard n={11}><Math tex="\mathbf{21{,}35}" /> puis exposant <Math tex="\mathbf{-5}" /></CorrectionCard>
                <CorrectionCard n={12}><Math tex="\mathbf{-42{,}45}" /> puis exposant <Math tex="\mathbf{3}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="13"
            index={13}
            title="Notation scientifique ?"
            itemsLabel="forme a × 10ⁿ, 1 ⩽ a < 10"
            items={
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                <VerdictItem n={1} tex="56 \times 10^{-5}" ok={false} />
                <VerdictItem n={2} tex="8{,}7 \times 10^{12}" ok={true} />
                <VerdictItem n={3} tex="0{,}97" ok={false} />
                <VerdictItem n={4} tex="-13{,}4 \times 10^{10}" ok={false} />
                <VerdictItem n={5} tex="0{,}56 \times 10^{-1}" ok={false} />
                <VerdictItem n={6} tex="10 \times 10^5" ok={false} />
                <VerdictItem n={7} tex="-1{,}32 \times 10^0" ok={true} />
                <VerdictItem n={8} tex="8{,}71 \times 10^{-15}" ok={true} />
                <VerdictItem n={9} tex="-3 \times 10^{-7}" ok={true} />
                <VerdictItem n={10} tex="5{,}98" ok={false} />
                <VerdictItem n={11} tex="\pi \times 10^4" ok={false} />
                <VerdictItem n={12} tex="-9{,}9 \times 10" ok={true} />
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <CorrectionCard n={1}>Non (56 ⩾ 10)</CorrectionCard>
                <CorrectionCard n={2}>Oui ✓</CorrectionCard>
                <CorrectionCard n={3}>Non (&lt; 1)</CorrectionCard>
                <CorrectionCard n={4}>Non (13,4 ⩾ 10)</CorrectionCard>
                <CorrectionCard n={5}>Non (&lt; 1)</CorrectionCard>
                <CorrectionCard n={6}>Non (10 ⩾ 10)</CorrectionCard>
                <CorrectionCard n={7}>Oui ✓</CorrectionCard>
                <CorrectionCard n={8}>Oui ✓</CorrectionCard>
                <CorrectionCard n={9}>Oui ✓</CorrectionCard>
                <CorrectionCard n={10}>Non (pas de <Math tex="\times 10^n" />)</CorrectionCard>
                <CorrectionCard n={11}>Non (π n&apos;est pas décimal)</CorrectionCard>
                <CorrectionCard n={12}>Oui ✓ (<Math tex="= \times 10^1" />)</CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="14"
            index={14}
            title="Écriture scientifique"
            itemsLabel="9 nombres"
            items={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="6\,540" /></Item>
                <Item n={2}><Math tex="0{,}0032" /></Item>
                <Item n={3}><Math tex="-1\,475{,}2" /></Item>
                <Item n={4}><Math tex="23{,}45" /></Item>
                <Item n={5}><Math tex="-34{,}3" /></Item>
                <Item n={6}><Math tex="-0{,}001" /></Item>
                <Item n={7}><Math tex="645{,}3 \times 10^{-15}" /></Item>
                <Item n={8}><Math tex="0{,}056 \times 10^{17}" /></Item>
                <Item n={9}><Math tex="-13{,}6 \times 10^{-9}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <CorrectionCard n={1}><Math tex="\mathbf{6{,}54 \times 10^3}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\mathbf{3{,}2 \times 10^{-3}}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\mathbf{-1{,}4752 \times 10^3}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\mathbf{2{,}345 \times 10^1}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\mathbf{-3{,}43 \times 10^1}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="\mathbf{-1 \times 10^{-3}}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="\mathbf{6{,}453 \times 10^{-13}}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\mathbf{5{,}6 \times 10^{15}}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="\mathbf{-1{,}36 \times 10^{-8}}" /></CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
