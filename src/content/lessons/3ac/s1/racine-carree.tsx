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
  title: "Racines carrées · Cours et exercices corrigés | 3AC",
  description:
    "Cours sur la racine carrée : définition, propriétés, résolution de l'équation x²=a, extraction d'un carré parfait, produit, quotient et rationalisation du dénominateur. 7 exercices corrigés, 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Chapitre 4",
  heroTitle: "Racines carrées",
  heroSubtitle:
    "Définir √a, résoudre l'équation x²=a, puis apprendre à simplifier, multiplier, diviser et rationaliser. Toutes les propriétés illustrées par des exemples résolus.",
  footerNote: "Racines carrées · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "definition", label: "Définition" },
    { id: "carre-racine", label: "Propriétés" },
    { id: "equation", label: "Équation x²=a" },
    { id: "produit-quotient", label: "Opérations" },
    { id: "exercices", label: "Exercices" },
    { id: "memo", label: "Mémo" },
  ],
};

function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls = tone === "rose" ? "bg-rose-100 text-rose-600" : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
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
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-center text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
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
          { value: "7", label: "exercices" },
          { value: "39", label: "expressions" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#definition"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Découvrir le cours
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
            <span className="text-[6rem] leading-none font-bold sm:text-[7.5rem]">√</span>
            <span className="text-[6rem] leading-none font-bold text-orange-400 sm:text-[7.5rem]">a</span>
          </div>
        }
      />

      {/* ===================== DEFINITION ===================== */}
      <LessonSection
        id="definition"
        kicker="01 · D'où ça vient"
        title="La racine carrée d'un nombre positif"
        tone="light"
        description="Trois exemples pour comprendre l'idée, puis la définition générale."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">racine entière</p>
            <p className="text-sm text-foreground-muted">Le nombre positif dont le carré vaut <Math tex="4" /> est <Math tex="2" />.</p>
            <div className="mt-3 rounded-lg bg-surface-muted py-3 text-center text-lg"><Math tex="\sqrt4=2" /></div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">racine décimale</p>
            <p className="text-sm text-foreground-muted">Le nombre positif dont le carré vaut <Math tex="0{,}25" /> est <Math tex="0{,}5" />.</p>
            <div className="mt-3 rounded-lg bg-surface-muted py-3 text-center text-lg"><Math tex="\sqrt{0{,}25}=0{,}5" /></div>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">racine rationnelle</p>
            <p className="text-sm text-foreground-muted">Le nombre positif dont le carré vaut <Math tex="\dfrac{16}{49}" /> est <Math tex="\dfrac47" />.</p>
            <div className="mt-3 rounded-lg bg-surface-muted py-3 text-center text-lg"><Math tex="\sqrt{\dfrac{16}{49}}=\dfrac47" /></div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">
            Soit <Math tex="a" /> un réel positif ou nul (<Math tex="a\geq0" />). La racine carrée de <Math tex="a" />, c&apos;est{" "}
            <strong className="text-foreground">le nombre réel positif dont le carré est égal à <Math tex="a" /></strong>, noté <Math tex="\sqrt a" />.
            Le symbole <Math tex="\sqrt{\ }" /> s&apos;appelle le <strong className="text-foreground">symbole radical</strong>.
          </p>
        </div>

        <p className="mt-6 mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">Quatre pièges à ne jamais confondre</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Callout variant="danger">
            La racine carrée d&apos;un nombre négatif <strong>n&apos;existe pas</strong>. Exemple : <Math tex="\sqrt{-9}" /> n&apos;existe pas.
          </Callout>
          <Callout variant="danger">
            La racine carrée d&apos;un nombre positif <strong>n&apos;est jamais négative</strong>. Exemple : <Math tex="\sqrt{25}\neq-5" />.
          </Callout>
          <Callout variant="info">
            L&apos;opposé de <Math tex="\sqrt a" /> (avec <Math tex="a\geq0" />) est <Math tex="-\sqrt a" />. Exemple : l&apos;opposé de <Math tex="\sqrt{11}" /> est <Math tex="-\sqrt{11}" />.
          </Callout>
          <Callout variant="info">
            Deux valeurs à connaître par cœur : <Math tex="\sqrt0=0" /> et <Math tex="\sqrt1=1" />.
          </Callout>
        </div>

        <p className="mt-6 mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">À apprendre par cœur · les carrés parfaits de 1 à 20</p>
        <div className="grid grid-cols-2 gap-2.5 rounded-xl border-2 border-border p-4 text-center text-sm sm:grid-cols-4 sm:gap-3 lg:grid-cols-5">
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt1=1" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt4=2" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt9=3" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{16}=4" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{25}=5" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{36}=6" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{49}=7" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{64}=8" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{81}=9" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{100}=10" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{121}=11" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{144}=12" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{169}=13" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{196}=14" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{225}=15" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{256}=16" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{289}=17" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{324}=18" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{361}=19" /></div>
          <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt{400}=20" /></div>
        </div>

        <p className="mt-6 mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">Application · simplifier</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4 text-center">
            <Math tex="\sqrt{144}" /><div className="mt-2 text-lg font-bold text-rose-600"><Math tex="12" /></div>
          </div>
          <div className="rounded-lg border border-border p-4 text-center">
            <Math tex="\sqrt{\dfrac19}" /><div className="mt-2 text-lg font-bold text-rose-600"><Math tex="\dfrac13" /></div>
          </div>
          <div className="rounded-lg border border-border p-4 text-center">
            <Math tex="\sqrt{\dfrac{16}{25}}" /><div className="mt-2 text-lg font-bold text-rose-600"><Math tex="\dfrac45" /></div>
          </div>
          <div className="rounded-lg border border-border p-4 text-center">
            <Math tex="\dfrac3{\sqrt{81}}" /><div className="mt-2 text-lg font-bold text-rose-600"><Math tex="\dfrac13" /></div>
          </div>
          <div className="rounded-lg border border-border p-4 text-center">
            <Math tex="\dfrac{\sqrt{0{,}36}}{0{,}25}" /><div className="mt-2 text-lg font-bold text-rose-600"><Math tex="\dfrac{12}5" /></div>
          </div>
          <div className="rounded-lg border border-border p-4 text-center">
            <Math tex="\dfrac{\sqrt{121}}4" /><div className="mt-2 text-lg font-bold text-rose-600"><Math tex="\dfrac{11}4" /></div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== CARRE D'UNE RACINE ===================== */}
      <LessonSection
        id="carre-racine"
        kicker="02 · Deux opérations qui s'annulent"
        title="Le carré d'une racine carrée"
        tone="light"
        description="Élever au carré et prendre la racine carrée s'annulent l'un l'autre, sous conditions."
      >
        <FormulaBlock
          tex="\sqrt{a^2}=(\sqrt a)^2=a"
          caption={<>pour <Math tex="a\gt0" />, et <Math tex="\sqrt{(-a)^2}=a" /></>}
        />
        <div className="mt-4 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{3^2}=3" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{(-11)^2}=11" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\left(\sqrt{\dfrac52}\right)^2=\dfrac52" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{\left(\dfrac{-6}7\right)^2}=\dfrac67" /></div>
        </div>
        <div className="mt-4">
          <Callout variant="danger" title="Remarque importante">
            <Math tex="\sqrt{(-7)^2}\neq(\sqrt{-7})^2" />, car <Math tex="\sqrt{(-7)^2}=7" /> alors que <Math tex="(\sqrt{-7})^2" /> n&apos;existe pas
            (on ne prend jamais la racine carrée d&apos;un nombre négatif).
          </Callout>
        </div>
      </LessonSection>

      {/* ===================== EQUATION X2=A ===================== */}
      <LessonSection
        id="equation"
        kicker="03 · Trois cas à connaître"
        title="Résolution de l'équation x² = a"
        tone="muted"
        description="Le nombre de solutions dépend entièrement du signe de a."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-green-500/20 bg-surface p-5">
            <p className="mb-3 text-sm font-bold text-green-700">Si <Math tex="a\gt0" /></p>
            <p className="mb-3 text-sm text-foreground-muted">Deux solutions opposées :</p>
            <div className="rounded-lg bg-green-100/60 py-3 text-center text-lg"><Math tex="x=\sqrt a\ \text{ou}\ x=-\sqrt a" /></div>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-surface p-5">
            <p className="mb-3 text-sm font-bold text-amber-700">Si <Math tex="a=0" /></p>
            <p className="mb-3 text-sm text-foreground-muted">Une seule solution :</p>
            <div className="rounded-lg bg-amber-100/60 py-3 text-center text-lg"><Math tex="x=0" /></div>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-surface p-5">
            <p className="mb-3 text-sm font-bold text-rose-700">Si <Math tex="a\lt0" /></p>
            <p className="mb-3 text-sm text-foreground-muted">Pas de solution :</p>
            <div className="rounded-lg bg-rose-100/60 py-3 text-center text-lg"><Math tex="\varnothing" /></div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
          <p className="mb-4 font-mono text-xs text-neutral-400 uppercase">Pourquoi (cas a &gt; 0) : la démonstration</p>
          <div className="space-y-1.5 text-center">
            <p><Math tex="x^2-a=0" /></p>
            <p><Math tex="x^2-\sqrt a^2=0" /></p>
            <p><Math tex="(x-\sqrt a)(x+\sqrt a)=0" /></p>
            <p><Math tex="x-\sqrt a=0\ \text{ou}\ x+\sqrt a=0" /></p>
            <p className="font-semibold text-orange-400"><Math tex="x=\sqrt a\ \text{ou}\ x=-\sqrt a" /></p>
          </div>
        </div>

        <p className="mt-6 mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">Application · résoudre</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="3x^2=15" />
            <p className="mt-2 text-foreground-muted"><Math tex="x^2=\dfrac{15}3=5" /></p>
            <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="x=\sqrt5\ \text{ou}\ x=-\sqrt5" /></div>
          </div>
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="3(x^2+1)=3" />
            <p className="mt-2 text-foreground-muted"><Math tex="3x^2=0 \Rightarrow x^2=0" /></p>
            <div className="mt-2 rounded-lg bg-amber-100/60 py-2 font-semibold text-amber-700"><Math tex="x=0" /></div>
          </div>
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="2x^2+11=5" />
            <p className="mt-2 text-foreground-muted"><Math tex="x^2=-3" /> (impossible)</p>
            <div className="mt-2 rounded-lg bg-rose-100/60 py-2 font-semibold text-rose-700">Pas de solution</div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== CARRE PARFAIT ===================== */}
      <LessonSection
        id="carre-parfait"
        kicker="04 · La technique la plus utile"
        title="Extraire un carré parfait"
        tone="light"
        description="Faire sortir un facteur du radical pour simplifier une racine."
      >
        <FormulaBlock tex="\sqrt{a^2\times b}=a\sqrt b" caption="a, b réels positifs non nuls" />
        <div className="mt-4 grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4">
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{3^2\times7}=3\sqrt7" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{49\times5}=7\sqrt5" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{2^2\times5^2\times3}=10\sqrt3" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{7^4\times2}=49\sqrt2" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{5^3}=5\sqrt5" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{3^7\times5}=27\sqrt{15}" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{45}=3\sqrt5" /></div>
          <div className="rounded-lg border border-border p-4"><Math tex="\sqrt{1125}=15\sqrt5" /></div>
        </div>

        <p className="mt-6 mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">Application · simplifier puis calculer</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="a=\sqrt{(\sqrt3)^4\times5^2\times2^7}" />
            <p className="mt-2 text-xs text-foreground-muted"><Math tex="=\sqrt{3^2\times5^2\times2^2\times2^2\times2^2\times2}" /></p>
            <p className="text-xs text-foreground-muted"><Math tex="=3\times5\times2\times2\times2\sqrt2" /></p>
            <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="a=120\sqrt2" /></div>
          </div>
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="b=\sqrt{2^2+3^2+6^2}" />
            <p className="mt-2 text-xs text-foreground-muted"><Math tex="=\sqrt{4+9+36}=\sqrt{49}" /></p>
            <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="b=7" /></div>
          </div>
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="c=\sqrt{25}+\sqrt{81}-2\sqrt9" />
            <p className="mt-2 text-xs text-foreground-muted"><Math tex="=5+9-2\times3=14-6" /></p>
            <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="c=8" /></div>
          </div>
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="d=(3\sqrt2+\sqrt5)(3\sqrt2-\sqrt5)" />
            <p className="mt-2 text-xs text-foreground-muted"><Math tex="=(3\sqrt2)^2-(\sqrt5)^2=18-5" /></p>
            <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="d=13" /></div>
          </div>
          <div className="rounded-xl border border-border p-4 text-center text-sm">
            <Math tex="e=\sqrt{96}+2\sqrt{24}-3\sqrt{54}" />
            <p className="mt-2 text-xs text-foreground-muted"><Math tex="=4\sqrt6+4\sqrt6-9\sqrt6=(4+4-9)\sqrt6" /></p>
            <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="e=-\sqrt6" /></div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== PRODUIT & QUOTIENT / RATIONALISER ===================== */}
      <LessonSection
        id="produit-quotient"
        kicker="05 · Produit, quotient, rationalisation"
        title="Les opérations sur les racines carrées"
        tone="muted"
        description="Multiplier, diviser, puis ne jamais laisser de racine carrée seule au dénominateur."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-1 font-semibold text-foreground">Produit</p>
            <p className="mb-3 text-xs text-foreground-muted">Pour <Math tex="a\geq0" /> et <Math tex="b\geq0" /></p>
            <div className="mb-4 rounded-lg bg-surface-muted py-3 text-center text-lg"><Math tex="\sqrt a\times\sqrt b=\sqrt{a\times b}" /></div>
            <div className="space-y-2 text-center text-sm">
              <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt5\times\sqrt3=\sqrt{15}" /></div>
              <div className="rounded-lg bg-surface-muted py-3"><Math tex="-\sqrt7\times\sqrt2=-\sqrt{14}" /></div>
              <div className="rounded-lg bg-surface-muted py-3"><Math tex="\sqrt2\times\sqrt5\times(-\sqrt{10})=-\sqrt{100}=-10" /></div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="mb-1 font-semibold text-foreground">Quotient</p>
            <p className="mb-3 text-xs text-foreground-muted">Pour <Math tex="a\geq0" /> et <Math tex="b\gt0" /></p>
            <div className="mb-4 rounded-lg bg-surface-muted py-3 text-center text-lg"><Math tex="\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}" /></div>
            <div className="space-y-2 text-center text-sm">
              <div className="rounded-lg bg-surface-muted py-3"><Math tex="\dfrac{\sqrt{12}}{\sqrt3}=\sqrt4=2" /></div>
              <div className="rounded-lg bg-surface-muted py-3"><Math tex="\dfrac{-\sqrt{75}}{\sqrt5}=-\sqrt{15}" /></div>
            </div>
          </div>
        </div>

        <div id="rationaliser" className="scroll-mt-28 mt-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">Propriété 1 · dénominateur = une seule racine</p>
          <p className="mb-3 text-sm text-foreground-muted">Soient <Math tex="a" /> et <Math tex="b" /> réels, <Math tex="b\gt0" /> :</p>
          <div className="mb-4 flex flex-col items-center justify-center gap-3 rounded-lg bg-surface-muted py-5 text-center sm:flex-row sm:gap-8">
            <Math tex="\sqrt{\dfrac1b}=\dfrac1{\sqrt b}=\dfrac{\sqrt b}b" />
            <Math tex="\dfrac a{\sqrt b}=\dfrac{a\sqrt b}b" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-surface-muted py-3 text-center text-sm"><Math tex="\sqrt{\dfrac17}=\dfrac1{\sqrt7}=\dfrac{\sqrt7}7" /></div>
            <div className="rounded-lg bg-surface-muted py-3 text-center text-sm"><Math tex="\dfrac2{\sqrt5}=\dfrac{2\sqrt5}5" /></div>
            <div className="rounded-lg bg-surface-muted py-3 text-center text-sm"><Math tex="\dfrac3{2\sqrt{11}}=\dfrac{3\sqrt{11}}{22}" /></div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-3 font-mono text-xs text-foreground-muted uppercase">Propriété 2 · expression du conjugué</p>
          <p className="mb-2 text-sm text-foreground-muted">
            Pour supprimer le radical au dénominateur, on multiplie numérateur <strong>et</strong> dénominateur par le <strong>conjugué du dénominateur</strong>.
          </p>
          <p className="mb-4 text-sm text-foreground-muted">
            Le conjugué de <Math tex="a-b" /> est <Math tex="a+b" />, et le conjugué de <Math tex="a+b" /> est <Math tex="a-b" />.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-surface-muted p-4 text-center text-sm">
              <Math tex="\dfrac3{\sqrt2-\sqrt5}" />
              <p className="mt-2 text-xs text-foreground-muted"><Math tex="=\dfrac{3(\sqrt2+\sqrt5)}{(\sqrt2-\sqrt5)(\sqrt2+\sqrt5)}=\dfrac{3\sqrt2+3\sqrt5}{2-5}" /></p>
              <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="=-\sqrt2-\sqrt5" /></div>
            </div>
            <div className="rounded-lg bg-surface-muted p-4 text-center text-sm">
              <Math tex="\dfrac{\sqrt3}{4-\sqrt6}" />
              <p className="mt-2 text-xs text-foreground-muted"><Math tex="=\dfrac{\sqrt3(4+\sqrt6)}{(4-\sqrt6)(4+\sqrt6)}=\dfrac{4\sqrt3+\sqrt{18}}{16-6}" /></p>
              <div className="mt-2 rounded-lg bg-green-100/60 py-2 font-semibold text-green-700"><Math tex="=\dfrac{4\sqrt3+3\sqrt2}{10}" /></div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="7 exercices corrigés"
        tone="light"
        description="Exercices officiels du professeur (2013/2014), suivis d'exercices supplémentaires ciblant chaque propriété du cours."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les racines carrées.">
          <ExerciseCard
            id="1"
            index={1}
            title="Calculer et simplifier"
            itemsLabel="6 expressions"
            items={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme <Math tex="a\sqrt b" /> (<Math tex="a,b" /> entiers, <Math tex="b" /> minimal) :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="A=2\sqrt{160}+4\sqrt{90}-2\sqrt{40}" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="B=\sqrt{32}\times\sqrt{18}\times\sqrt8" /></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme <Math tex="a+b\sqrt c" /> (<Math tex="a,b,c" /> entiers) :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="C=(2\sqrt6-5\sqrt{10})^2" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="D=(3\sqrt5+5\sqrt2)^2" /></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme d&apos;un nombre entier :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="E=(2-4\sqrt2)(2+4\sqrt2)" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="F=\dfrac{64\sqrt{54}}{12\sqrt{96}}" /></div>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=16\sqrt{10}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=48\sqrt2" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=274-40\sqrt{15}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=95+30\sqrt{10}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=-28" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=4" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Calculer et simplifier"
            itemsLabel="6 expressions"
            items={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme <Math tex="a\sqrt b" /> :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="A=\sqrt{40}+5\sqrt{160}+2\sqrt{90}" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="B=\sqrt{54}\times\sqrt{96}\times\sqrt{24}" /></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme <Math tex="a+b\sqrt c" /> :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="C=(4\sqrt5+\sqrt6)^2" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="D=(4\sqrt2-\sqrt3)^2" /></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme d&apos;un nombre entier :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="E=(4-5\sqrt2)(4+5\sqrt2)" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="F=\dfrac{24\sqrt{45}}{9\sqrt{80}}" /></div>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=28\sqrt{10}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=144\sqrt6" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=86+8\sqrt{30}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=35-8\sqrt6" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=-34" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=2" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Calculer et simplifier"
            itemsLabel="6 expressions"
            items={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme <Math tex="a\sqrt b" /> :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="A=2\sqrt{12}-3\sqrt{27}-\sqrt{48}" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="B=\sqrt{48}\times\sqrt{27}\times\sqrt{12}" /></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme <Math tex="a+b\sqrt c" /> :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="C=(4\sqrt{10}+3\sqrt6)^2" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="D=(3\sqrt3-3\sqrt2)^2" /></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-foreground-muted">Résultat sous la forme d&apos;un nombre entier :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="E=(3-4\sqrt{10})(3+4\sqrt{10})" /></div>
                    <div className="rounded-lg border border-border p-4 text-center"><Math tex="F=\dfrac{27\sqrt{40}}{6\sqrt{90}}" /></div>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 sm:grid-cols-3">
                <CorrectionCard n="A"><Math tex="A=-9\sqrt3" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="B=72\sqrt3" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="C=214+48\sqrt{15}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="D=45-18\sqrt6" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="E=-151" /></CorrectionCard>
                <CorrectionCard n="F"><Math tex="F=3" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Extraire le plus grand carré parfait"
            itemsLabel="6 expressions"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Item n={1}><Math tex="\sqrt{50}" /></Item>
                <Item n={2}><Math tex="\sqrt{72}" /></Item>
                <Item n={3}><Math tex="\sqrt{200}" /></Item>
                <Item n={4}><Math tex="\sqrt{98}" /></Item>
                <Item n={5}><Math tex="\sqrt{48}" /></Item>
                <Item n={6}><Math tex="\sqrt{75}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <CorrectionCard n={1}><Math tex="5\sqrt2" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="6\sqrt2" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="10\sqrt2" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="7\sqrt2" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="4\sqrt3" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="5\sqrt3" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Résoudre les équations"
            itemsLabel="6 équations"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Item n={1}><Math tex="x^2=49" /></Item>
                <Item n={2}><Math tex="x^2=0" /></Item>
                <Item n={3}><Math tex="5x^2=80" /></Item>
                <Item n={4}><Math tex="x^2+9=0" /></Item>
                <Item n={5}><Math tex="3x^2-27=0" /></Item>
                <Item n={6}><Math tex="2x^2=50" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <CorrectionCard n={1}><Math tex="x=7\ \text{ou}\ x=-7" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="x=0" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="x=4\ \text{ou}\ x=-4" /></CorrectionCard>
                <CorrectionCard n={4}>Pas de solution</CorrectionCard>
                <CorrectionCard n={5}><Math tex="x=3\ \text{ou}\ x=-3" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="x=5\ \text{ou}\ x=-5" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Calculer avec produit ou quotient"
            itemsLabel="4 expressions"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Item n={1}><Math tex="\sqrt3\times\sqrt{12}" /></Item>
                <Item n={2}><Math tex="\sqrt7\times\sqrt7" /></Item>
                <Item n={3}><Math tex="\dfrac{\sqrt{98}}{\sqrt2}" /></Item>
                <Item n={4}><Math tex="\sqrt6\times\sqrt{24}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <CorrectionCard n={1}><Math tex="\sqrt{36}=6" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="7" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\sqrt{49}=7" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\sqrt{144}=12" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Rendre le dénominateur rationnel"
            itemsLabel="5 expressions"
            items={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                <Item n={1}><Math tex="\dfrac1{\sqrt5}" /></Item>
                <Item n={2}><Math tex="\dfrac3{\sqrt2}" /></Item>
                <Item n={3}><Math tex="\dfrac4{\sqrt7}" /></Item>
                <Item n={4}><Math tex="\dfrac2{\sqrt3-1}" /></Item>
                <Item n={5}><Math tex="\dfrac5{3+\sqrt2}" /></Item>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                <CorrectionCard n={1}><Math tex="\dfrac{\sqrt5}5" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="\dfrac{3\sqrt2}2" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="\dfrac{4\sqrt7}7" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="\sqrt3+1" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="\dfrac{15-5\sqrt2}7" /></CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>

      {/* ===================== FICHE MEMO ===================== */}
      <LessonSection
        id="memo"
        kicker="★ Révision rapide"
        title="Fiche mémo"
        tone="muted"
        description="Toutes les formules du chapitre réunies en un coup d'œil."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">01 · Définition</p>
            <Math tex="\sqrt a,\ a\geq0" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">02 · Valeurs</p>
            <Math tex="\sqrt0=0\ ;\ \sqrt1=1" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">03 · Opposé</p>
            <Math tex="\text{oppos. de } \sqrt a=-\sqrt a" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">04 · Carré</p>
            <Math tex="\sqrt{a^2}=a\ (a>0)" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">05 · Carré parfait</p>
            <Math tex="\sqrt{a^2b}=a\sqrt b" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">06 · Produit</p>
            <Math tex="\sqrt a\sqrt b=\sqrt{ab}" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">07 · Quotient</p>
            <Math tex="\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="mb-2 font-mono text-xs text-foreground-muted uppercase">08 · Rationaliser</p>
            <Math tex="\dfrac a{\sqrt b}=\dfrac{a\sqrt b}b" />
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-center text-white sm:col-span-2 lg:col-span-3">
            <p className="mb-2 font-mono text-xs text-neutral-400 uppercase">09 · Équation x² = a, les trois cas</p>
            <Math tex="a\gt0\Rightarrow x=\pm\sqrt a \qquad a=0\Rightarrow x=0 \qquad a\lt0\Rightarrow \text{pas de solution}" />
          </div>
        </div>
      </LessonSection>
    </LessonShell>
  );
}
