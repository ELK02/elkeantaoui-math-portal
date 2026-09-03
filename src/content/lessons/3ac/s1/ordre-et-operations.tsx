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
  title: "Ordre et Opérations · Cours et exercices corrigés | 3AC",
  description:
    "Cours sur la comparaison de deux réels, l'ordre face à l'addition, la multiplication, l'inverse, le carré et la racine carrée, et les encadrements. 4 exercices corrigés en détail, 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Chapitre 6",
  heroTitle: "Ordre et Opérations",
  heroSubtitle:
    "Comparer deux réels, garder ou inverser le sens d'une inégalité selon l'opération, puis encadrer un résultat. Tout part d'une seule idée : le signe d'une différence.",
  footerNote: "Ordre et opérations · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "comparaison", label: "Comparaison" },
    { id: "operations", label: "Ordre & opérations" },
    { id: "encadrements", label: "Encadrements" },
    { id: "memo", label: "Mémo" },
    { id: "exercice1", label: "Ex.1" },
    { id: "exercice2", label: "Ex.2" },
    { id: "exercice3", label: "Ex.3" },
    { id: "exercice4", label: "Ex.4" },
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
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

/** Small labeled rule box used inside the "Ordre et opérations" section. */
function Rule({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-10">
      <p className="mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">{label}</p>
      {children}
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
          { value: "3", label: "grandes parties" },
          { value: "9", label: "propriétés" },
          { value: "4", label: "exercices corrigés" },
        ]}
        ctas={
          <>
            <a
              href="#comparaison"
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
          <div className="relative flex select-none items-baseline gap-4 font-serif text-white italic">
            <span className="text-[6rem] leading-none font-bold sm:text-[7.5rem]">a</span>
            <span className="text-[3.5rem] leading-none font-bold text-orange-400 sm:text-[4.5rem]">≥</span>
            <span className="text-[6rem] leading-none font-bold sm:text-[7.5rem]">b</span>
          </div>
        }
      />

      {/* ===================== COMPARAISON ===================== */}
      <LessonSection
        id="comparaison"
        kicker="01 · La règle"
        title="Comparer deux nombres réels"
        tone="light"
        description="Toute comparaison de deux réels repose sur une seule idée : étudier le signe de leur différence."
      >
        <FormulaBlock
          tex="a-b\geq0 \Longleftrightarrow a\geq b"
          caption={<><Math tex="a-b\leq0 \Longleftrightarrow a\leq b" /></>}
        />

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">exemple 1</p>
            <p className="text-sm">
              Comparons <Math tex="2\sqrt3-4" /> et <Math tex="\sqrt3-5" /> :
            </p>
            <div className="mt-2 space-y-1 rounded-lg bg-surface-muted p-3 text-sm">
              <p><Math tex="(2\sqrt3-4)-(\sqrt3-5)=2\sqrt3-4-\sqrt3+5=\sqrt3+1" /></p>
              <p>Or <Math tex="\sqrt3+1\geq0" />, donc <Math tex="(2\sqrt3-4)-(\sqrt3-5)\geq0" /></p>
            </div>
            <p className="mt-2 text-center font-semibold text-foreground">
              D&apos;où : <Math tex="2\sqrt3-4\geq\sqrt3-5" />
            </p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">exemple 2</p>
            <p className="text-sm">
              Comparons <Math tex="x" /> et <Math tex="y" /> tels que <Math tex="x=y-3" /> :
            </p>
            <div className="mt-2 space-y-1 rounded-lg bg-surface-muted p-3 text-sm">
              <p><Math tex="x-y=(y-3)-y=-3" /></p>
              <p>Or <Math tex="-3\leq0" />, donc <Math tex="x-y\leq0" /></p>
            </div>
            <p className="mt-2 text-center font-semibold text-foreground">
              D&apos;où : <Math tex="x\leq y" />
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== ORDRE ET OPERATIONS ===================== */}
      <LessonSection
        id="operations"
        kicker="02 · Six règles à connaître"
        title="Ordre et opérations"
        tone="light"
        description="Comment une inégalité se transforme quand on ajoute, multiplie, inverse, met au carré ou prend la racine carrée des deux côtés."
      >
        <Rule label="Addition et soustraction">
          <div className="rounded-xl border border-border p-5 text-center">
            <p className="text-sm"><Math tex="a\leq b \Leftrightarrow a+k\leq b+k \text{ et } a-k\leq b-k" /></p>
            <p className="mt-1 text-sm"><Math tex="a\geq b \Leftrightarrow a+k\geq b+k \text{ et } a-k\geq b-k" /></p>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-surface-muted p-4 text-sm">
              Si <Math tex="x\leq3" />, alors <Math tex="x+5\leq3+5" />, donc <Math tex="x+5\leq8" />.
            </div>
            <div className="rounded-lg bg-surface-muted p-4 text-sm">
              Si <Math tex="2x-3\geq x+2" /> : <Math tex="2x\geq x+5 \Rightarrow x\geq5" />.
            </div>
          </div>
        </Rule>

        <Rule label="Opposé (inverse le sens)">
          <div className="rounded-xl border border-border p-5 text-center text-sm">
            <p><Math tex="a\leq b \Leftrightarrow -a\geq-b" /> &nbsp;·&nbsp; <Math tex="a\geq b \Leftrightarrow -a\leq-b" /></p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4">
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="12\geq9 \Rightarrow -12\leq-9" /></div>
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="47\geq-213 \Rightarrow -47\leq213" /></div>
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="-25\leq-2 \Rightarrow 25\geq2" /></div>
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="-452\leq12 \Rightarrow 452\geq-12" /></div>
          </div>
        </Rule>

        <Rule label="Multiplication : le signe de k décide">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-4 text-center">
              <p className="text-xs font-semibold text-green-700 uppercase">Si <Math tex="k\gt0" /></p>
              <p className="mt-1 text-sm"><Math tex="a\leq b \Rightarrow ak\leq bk" /></p>
              <p className="text-sm"><Math tex="a\geq b \Rightarrow ak\geq bk" /></p>
              <p className="mt-1 text-xs text-foreground-muted">le sens ne change pas</p>
            </div>
            <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4 text-center">
              <p className="text-xs font-semibold text-rose-700 uppercase">Si <Math tex="k\lt0" /></p>
              <p className="mt-1 text-sm"><Math tex="a\leq b \Rightarrow ak\geq bk" /></p>
              <p className="text-sm"><Math tex="a\geq b \Rightarrow ak\leq bk" /></p>
              <p className="mt-1 text-xs text-foreground-muted">le sens s&apos;inverse</p>
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 text-center text-sm">
            <div className="rounded-lg bg-surface-muted p-4"><Math tex="45\leq100 \Rightarrow 135\leq300" /></div>
            <div className="rounded-lg bg-surface-muted p-4"><Math tex="-15\geq-25 \Rightarrow 15\sqrt2\leq25\sqrt2" /></div>
          </div>
        </Rule>

        <Rule label="Inverse (a, b non nuls, même signe)">
          <div className="rounded-xl border border-border p-5 text-center text-sm">
            <p><Math tex="a\leq b \Leftrightarrow \dfrac1a\geq\dfrac1b" /> &nbsp;·&nbsp; <Math tex="a\geq b \Leftrightarrow \dfrac1a\leq\dfrac1b" /></p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-center text-sm">
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="15\geq10 \Rightarrow \dfrac1{15}\leq\dfrac1{10}" /></div>
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="11\leq25 \Rightarrow \dfrac1{11}\geq\dfrac1{25}" /></div>
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="-42\leq-2 \Rightarrow \dfrac{-1}{42}\geq\dfrac{-1}2" /></div>
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="-30\geq-124 \Rightarrow \dfrac{-1}{30}\leq\dfrac{-1}{124}" /></div>
          </div>
        </Rule>

        <Rule label="Carré">
          <div className="grid gap-3 sm:grid-cols-2 text-center">
            <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-4">
              <p className="text-xs font-semibold text-green-700 uppercase">Si <Math tex="a\gt0" /> et <Math tex="b\gt0" /></p>
              <p className="mt-1 text-sm"><Math tex="a\leq b \Leftrightarrow a^2\leq b^2" /></p>
            </div>
            <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-4">
              <p className="text-xs font-semibold text-rose-700 uppercase">Si <Math tex="a\lt0" /> et <Math tex="b\lt0" /></p>
              <p className="mt-1 text-sm"><Math tex="a\leq b \Leftrightarrow a^2\geq b^2" /></p>
            </div>
          </div>
          <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-surface-muted p-4 text-center"><Math tex="5\leq11 \Rightarrow 25\leq121" /></div>
            <div className="rounded-lg bg-surface-muted p-4 text-center"><Math tex="-2\geq-20 \Rightarrow 4\leq400" /></div>
            <div className="rounded-lg bg-surface-muted p-4 sm:col-span-2">
              Comparons <Math tex="2\sqrt3" /> et <Math tex="3\sqrt7" /> : <Math tex="(2\sqrt3)^2=12" /> et <Math tex="(3\sqrt7)^2=63" />, donc <Math tex="(2\sqrt3)^2\leq(3\sqrt7)^2" />. Comme les deux sont positifs :
              <span className="ml-1 font-semibold text-foreground"><Math tex="2\sqrt3\leq3\sqrt7" /></span>
            </div>
            <div className="rounded-lg bg-surface-muted p-4 sm:col-span-2">
              Comparons <Math tex="-\sqrt{11}" /> et <Math tex="-2\sqrt5" /> : <Math tex="(-\sqrt{11})^2=11" /> et <Math tex="(-2\sqrt5)^2=20" />, donc <Math tex="(-\sqrt{11})^2\leq(-2\sqrt5)^2" />. Comme les deux sont négatifs :
              <span className="ml-1 font-semibold text-foreground"><Math tex="-\sqrt{11}\geq-2\sqrt5" /></span>
            </div>
          </div>
        </Rule>

        <Rule label="Racine carrée (a, b positifs)">
          <div className="rounded-xl border border-border p-5 text-center text-sm">
            <p><Math tex="a\leq b \Leftrightarrow \sqrt a\leq\sqrt b" /> &nbsp;·&nbsp; <Math tex="a\geq b \Leftrightarrow \sqrt a\geq\sqrt b" /></p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-center text-sm">
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="12\geq7 \Rightarrow \sqrt{12}\geq\sqrt7" /></div>
            <div className="rounded-lg bg-surface-muted p-3"><Math tex="5\leq23 \Rightarrow \sqrt5\leq\sqrt{23}" /></div>
          </div>
        </Rule>

        <Callout variant="info" title="Remarque">
          Ces six propriétés restent vraies avec les symboles strictes <Math tex="\gt" /> et <Math tex="\lt" />.
        </Callout>
      </LessonSection>

      {/* ===================== ENCADREMENTS ===================== */}
      <LessonSection
        id="encadrements"
        kicker="03 · Placer un nombre entre deux bornes"
        title="Encadrements"
        tone="muted"
        description="Encadrer un nombre, puis encadrer le résultat d'une opération à partir de plusieurs encadrements."
      >
        <div className="rounded-xl border border-border bg-surface p-5 text-center text-sm">
          Soient <Math tex="a" />, <Math tex="b" /> et <Math tex="x" /> trois réels avec <Math tex="a\leq b" /> :
          on appelle <strong>encadrement</strong> de <Math tex="x" /> par <Math tex="a" /> et <Math tex="b" /> toute écriture <Math tex="a\leq x\leq b" />.
        </div>

        <div className="mt-4 rounded-xl border border-border bg-surface p-5 text-center">
          <p className="mb-2 font-mono text-xs text-foreground-muted">on réutilise ces 4 encadrements dans toute la suite</p>
          <p className="text-sm sm:text-base">
            <Math tex="3\leq x\leq11" /> &nbsp;·&nbsp; <Math tex="-11\leq y\leq-3" /> &nbsp;·&nbsp; <Math tex="-25\leq z\leq2" /> &nbsp;·&nbsp; <Math tex="4\leq t\leq9" />
          </p>
        </div>

        <p className="mt-6 mb-3 font-mono text-xs font-semibold text-foreground-muted uppercase">Encadrement et opérations</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">Somme <Math tex="x+y" /></p>
            <p><Math tex="3-11\leq x+y\leq11-3" /></p>
            <p className="mt-1 font-semibold text-foreground">D&apos;où : <Math tex="-8\leq x+y\leq8" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">Différence <Math tex="x-z" /></p>
            <p><Math tex="3-2\leq x-z\leq11+25" /></p>
            <p className="mt-1 font-semibold text-foreground">D&apos;où : <Math tex="1\leq x-z\leq36" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">Produit <Math tex="x\times t" /></p>
            <p><Math tex="3\times4\leq x\times t\leq11\times9" /></p>
            <p className="mt-1 font-semibold text-foreground">D&apos;où : <Math tex="12\leq x\times t\leq99" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">Produit <Math tex="x\times y" /></p>
            <p><Math tex="3\leq x\leq11" /> et <Math tex="3\leq-y\leq11 \Rightarrow 9\leq-xy\leq121" /></p>
            <p className="mt-1 font-semibold text-foreground">D&apos;où : <Math tex="-121\leq x\times y\leq-9" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">Quotient <Math tex="\dfrac xt=x\times\dfrac1t" /></p>
            <p><Math tex="3\times\dfrac19\leq x\times\dfrac1t\leq11\times\dfrac14" /></p>
            <p className="mt-1 font-semibold text-foreground">D&apos;où : <Math tex="\dfrac13\leq\dfrac xt\leq\dfrac{11}4" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">Carrés <Math tex="x^2" />, <Math tex="y^2" /></p>
            <p><Math tex="3\leq x\leq11 \Rightarrow 9\leq x^2\leq121" /></p>
            <p><Math tex="-11\leq y\leq-3 \Rightarrow 9\leq y^2\leq121" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground">Racine <Math tex="\sqrt t" /></p>
            <p><Math tex="\sqrt4\leq\sqrt t\leq\sqrt9" /></p>
            <p className="mt-1 font-semibold text-foreground">D&apos;où : <Math tex="2\leq\sqrt t\leq3" /></p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="mb-1 font-semibold text-foreground"><Math tex="6x" /> et <Math tex="-7z" /></p>
            <p><Math tex="18\leq6x\leq66" /></p>
            <p><Math tex="-14\leq-7z\leq175" /></p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== FICHE MEMO ===================== */}
      <LessonSection
        id="memo"
        kicker="★ Fiche mémo express"
        title="Les 9 propriétés à connaître par cœur"
        tone="light"
        description="Un aide-mémoire compact avant un contrôle."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Comparaison</p>
            <Math tex="a-b\geq0 \Leftrightarrow a\geq b" />
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Addition / soustraction</p>
            <Math tex="a\leq b \Leftrightarrow a+k\leq b+k" />
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Opposé</p>
            <Math tex="a\leq b \Leftrightarrow -a\geq-b" />
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Multiplication par <Math tex="k\gt0" /></p>
            <Math tex="a\leq b \Leftrightarrow ak\leq bk" />
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Multiplication par <Math tex="k\lt0" /></p>
            <Math tex="a\leq b \Leftrightarrow ak\geq bk" /> <span className="text-neutral-500">(inversé)</span>
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Inverse (même signe)</p>
            <Math tex="a\leq b \Leftrightarrow \dfrac1a\geq\dfrac1b" /> <span className="text-neutral-500">(inversé)</span>
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Carré (<Math tex="a,b\gt0" />)</p>
            <Math tex="a\leq b \Leftrightarrow a^2\leq b^2" />
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Carré (<Math tex="a,b\lt0" />)</p>
            <Math tex="a\leq b \Leftrightarrow a^2\geq b^2" /> <span className="text-neutral-500">(inversé)</span>
          </div>
          <div className="rounded-xl bg-neutral-950 p-4 text-white">
            <p className="mb-1 font-mono text-xs text-neutral-400 uppercase">Racine carrée (<Math tex="a,b\geq0" />)</p>
            <Math tex="a\leq b \Leftrightarrow \sqrt a\leq\sqrt b" />
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="4 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={4} celebrationTitle="Bravo, les 4 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises l'ordre et les opérations.">
          <ExerciseCard
            id="1"
            index={1}
            title="Comparer par la différence"
            items={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2">1) Comparer <Math tex="a" /> et <Math tex="b" /> pour chacun des cas suivants :</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=\dfrac45,\ b=\dfrac{-3}2" /></div>
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=\dfrac{-5}7,\ b=\dfrac37" /></div>
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=\dfrac86,\ b=\dfrac83" /></div>
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=\dfrac37,\ b=\dfrac49" /></div>
                  </div>
                </div>
                <p>2) Soit <Math tex="a-b=-\sqrt2" /> (<Math tex="a" />, <Math tex="b" /> non nuls). Comparer <Math tex="a" /> et <Math tex="b" />.</p>
                <div>
                  <p>3) Soient <Math tex="a=\dfrac37" /> et <Math tex="b=\dfrac49" />.</p>
                  <p className="ml-4">a. Calculer <Math tex="a-b" /> et déduire la comparaison de <Math tex="a" /> et <Math tex="b" />.</p>
                  <p className="ml-4">b. Rendre au même dénominateur et déduire la comparaison de <Math tex="a" /> et <Math tex="b" />.</p>
                </div>
                <div>
                  <p>4) Soient <Math tex="a=2\sqrt3" /> et <Math tex="b=\sqrt{11}" />.</p>
                  <p className="ml-4">a. Calculer <Math tex="a^2" /> et <Math tex="b^2" /> et déduire la comparaison de <Math tex="a" /> et <Math tex="b" />.</p>
                  <p className="ml-4">b. Montrer que <Math tex="a-b=\dfrac1{2\sqrt3+\sqrt{11}}" />, déduire la comparaison de <Math tex="a" /> et <Math tex="b" />.</p>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 font-bold text-green-700">1. On étudie le signe de <Math tex="a-b" /> :</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <CorrectionCard n="a"><Math tex="a-b=\dfrac45+\dfrac32=\dfrac{23}{10}\geq0" /> donc <Math tex="a\geq b" /></CorrectionCard>
                    <CorrectionCard n="b"><Math tex="a-b=\dfrac{-5}7-\dfrac37=\dfrac{-8}7\leq0" /> donc <Math tex="a\leq b" /></CorrectionCard>
                    <CorrectionCard n="c"><Math tex="a-b=\dfrac86-\dfrac{16}6=\dfrac{-8}6\leq0" /> donc <Math tex="a\leq b" /></CorrectionCard>
                    <CorrectionCard n="d"><Math tex="a-b=\dfrac{27}{63}-\dfrac{28}{63}=\dfrac{-1}{63}\leq0" /> donc <Math tex="a\leq b" /></CorrectionCard>
                  </div>
                </div>
                <CorrectionCard n={2}>
                  <Math tex="a-b=-\sqrt2\leq0" />, donc <strong className="text-green-700"><Math tex="a\leq b" /></strong>
                </CorrectionCard>
                <CorrectionCard n={3}>
                  a. <Math tex="a-b=\dfrac{27}{63}-\dfrac{28}{63}=\dfrac{-1}{63}\leq0 \Rightarrow a\leq b" />.<br />
                  b. Au même dénominateur : <Math tex="a=\dfrac{27}{63}" />, <Math tex="b=\dfrac{28}{63}" />. Comme <Math tex="27\lt28" />, on retrouve <Math tex="a\leq b" />.
                </CorrectionCard>
                <CorrectionCard n={4}>
                  a. <Math tex="a^2=12" />, <Math tex="b^2=11" />. Comme <Math tex="a\gt0" />, <Math tex="b\gt0" /> et <Math tex="a^2\geq b^2" /> (ordre et carré), alors <Math tex="a\geq b" />.<br />
                  b. <Math tex="a-b=\dfrac{(2\sqrt3-\sqrt{11})(2\sqrt3+\sqrt{11})}{2\sqrt3+\sqrt{11}}=\dfrac{12-11}{2\sqrt3+\sqrt{11}}=\dfrac1{2\sqrt3+\sqrt{11}}" />, qui est <Math tex="\gt0" /> : on retrouve <Math tex="a\geq b" />.
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Racines carrées et inverses"
            items={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2">1) Comparer <Math tex="a" /> et <Math tex="b" /> :</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=2\sqrt3+\sqrt{10},\ b=\sqrt{11}+\sqrt{10}" /></div>
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=\sqrt{2\sqrt3+\sqrt{10}},\ b=\sqrt{\sqrt{11}+\sqrt{10}}" /></div>
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=2\sqrt3-7,\ b=\sqrt{11}-7" /></div>
                    <div className="rounded-lg border border-border p-3 text-center"><Math tex="a=4\sqrt3,\ b=4\sqrt5" /></div>
                    <div className="rounded-lg border border-border p-3 text-center sm:col-span-2"><Math tex="a=-5\sqrt5,\ b=-5\sqrt5" /></div>
                  </div>
                </div>
                <div>
                  <p>2) Soient <Math tex="a=7\sqrt2" /> et <Math tex="b=5\sqrt3" />.</p>
                  <p className="ml-4">a. Comparer <Math tex="a" /> et <Math tex="b" />.</p>
                  <p className="ml-4">b. Déduire la comparaison de <Math tex="7\sqrt2+9" /> et <Math tex="5\sqrt3+9" />.</p>
                  <p className="ml-4">c. Déduire la comparaison de <Math tex="\dfrac1{7\sqrt2+9}" /> et <Math tex="\dfrac1{5\sqrt3+9}" />.</p>
                </div>
                <p>3) Comparer <Math tex="-5\sqrt2" /> et <Math tex="-4\sqrt2" /> ; déduire la comparaison de <Math tex="\dfrac1{-5\sqrt2}" /> et <Math tex="\dfrac1{-4\sqrt2}" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 font-bold text-green-700">1.</p>
                  <div className="grid gap-3">
                    <CorrectionCard n="a"><Math tex="2\sqrt3=\sqrt{12}" /> et <Math tex="12\gt11" />, donc <Math tex="\sqrt{12}\gt\sqrt{11}" /> ; en ajoutant <Math tex="\sqrt{10}" /> : <Math tex="a\gt b" /></CorrectionCard>
                    <CorrectionCard n="b">D&apos;après ci-dessus <Math tex="2\sqrt3+\sqrt{10}\gt\sqrt{11}+\sqrt{10}\gt0" />, donc par racine carrée : <Math tex="a\gt b" /></CorrectionCard>
                    <CorrectionCard n="c"><Math tex="a-b=2\sqrt3-\sqrt{11}=\sqrt{12}-\sqrt{11}\gt0" /> : <Math tex="a\gt b" /></CorrectionCard>
                    <CorrectionCard n="d"><Math tex="\sqrt3\lt\sqrt5" /> (car <Math tex="3\lt5" />) et <Math tex="4\gt0" />, donc : <Math tex="a\lt b" /></CorrectionCard>
                    <CorrectionCard n="e"><Math tex="a-b=-5\sqrt5-(-5\sqrt5)=0" /> : <Math tex="a=b" /> (égalité)</CorrectionCard>
                  </div>
                </div>
                <CorrectionCard n={2}>
                  a. <Math tex="a^2=98" />, <Math tex="b^2=75" />, <Math tex="98\gt75 \Rightarrow a\gt b" /> (ordre et carré).<br />
                  b. (ordre et addition, +9) : <Math tex="7\sqrt2+9\gt5\sqrt3+9" />.<br />
                  c. Deux nombres non nuls, de même signe (positif), sens inversé : <Math tex="\dfrac1{7\sqrt2+9}\lt\dfrac1{5\sqrt3+9}" />.
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <Math tex="\sqrt2\gt0" /> et <Math tex="-5\lt-4" />, donc <Math tex="-5\sqrt2\lt-4\sqrt2" />. Non nuls, de même signe (négatif), sens inversé :{" "}
                  <strong className="text-green-700"><Math tex="\dfrac1{-5\sqrt2}\gt\dfrac1{-4\sqrt2}" /></strong>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Encadrements"
            items={
              <div className="space-y-2 text-sm">
                <p>1) <Math tex="x" /> et <Math tex="y" /> réels non nuls tels que <Math tex="4\lt x\lt5" /> et <Math tex="-3\lt y\lt-2" />.</p>
                <p className="ml-4">a. Encadrer : <Math tex="2x\ ;\ -2x\ ;\ 3y\ ;\ -3y\ ;\ x^2\ ;\ y^2\ ;\ x+y\ ;\ x-y\ ;\ xy\ ;\ 3x-5y" /></p>
                <p className="ml-4">b. Montrer que <Math tex="6\lt(x+y)(x-y)\lt24" />.</p>
                <p className="ml-4">c. <Math tex="z" /> réel tel que <Math tex="3\leq5z-2\leq8" />. Montrer que <Math tex="1\leq z\leq2" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="mb-2 font-bold text-green-700">a. En combinant les deux encadrements :</p>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="2x" /></p><Math tex="8\lt2x\lt10" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="-2x" /></p><Math tex="-10\lt-2x\lt-8" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="3y" /></p><Math tex="-9\lt3y\lt-6" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="-3y" /></p><Math tex="6\lt-3y\lt9" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="x^2" /></p><Math tex="16\lt x^2\lt25" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="y^2" /></p><Math tex="4\lt y^2\lt9" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="x+y" /></p><Math tex="1\lt x+y\lt3" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="x-y" /></p><Math tex="6\lt x-y\lt8" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="xy" /></p><Math tex="-15\lt xy\lt-8" /></div>
                    <div className="rounded-lg border border-green-500/20 bg-surface p-2.5 text-center"><p className="text-xs text-foreground-muted"><Math tex="3x-5y" /></p><Math tex="22\lt3x-5y\lt30" /></div>
                  </div>
                </div>
                <CorrectionCard n="b">
                  D&apos;après a., <Math tex="1\lt x+y\lt3" /> et <Math tex="6\lt x-y\lt8" /> sont deux encadrements positifs : on multiplie membre à membre.
                  <br /><Math tex="1\times6\lt(x+y)(x-y)\lt3\times8" /> d&apos;où <strong className="text-green-700"><Math tex="6\lt(x+y)(x-y)\lt24" /></strong> ✓
                </CorrectionCard>
                <CorrectionCard n="c">
                  On ajoute 2 : <Math tex="5\leq5z\leq10" />. On divise par <Math tex="5\gt0" /> : <strong className="text-green-700"><Math tex="1\leq z\leq2" /></strong> ✓
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Inégalités classiques et Pythagore"
            items={
              <div className="space-y-2 text-sm">
                <p><Math tex="a" />, <Math tex="b" /> et <Math tex="m" /> réels avec <Math tex="a\gt0" />, <Math tex="b\gt0" /> et <Math tex="m\lt0" />.</p>
                <p>1) Comparer <Math tex="a+m" /> et <Math tex="m" /> ; puis <Math tex="a+m" /> et <Math tex="a-m" />.</p>
                <p>2) Comparer <Math tex="\dfrac ab+\dfrac ba" /> et <Math tex="2" /> ; <Math tex="a+b" /> et <Math tex="2\sqrt{ab}" /> ; <Math tex="\dfrac1{a^2}+a^2" /> et <Math tex="2" /> ; <Math tex="a^2+b^2" /> et <Math tex="2ab" />.</p>
                <p>3) <Math tex="ABC" /> rectangle en <Math tex="A" />, avec <Math tex="2.999\lt AB\lt3.001" /> et <Math tex="1.999\lt AC\lt2.001" />. Montrer que <Math tex="3.604\lt BC\lt3.607" />.</p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <CorrectionCard n={1}>
                  <Math tex="(a+m)-m=a\gt0 \Rightarrow a+m\gt m" />.<br />
                  <Math tex="(a+m)-(a-m)=2m\lt0 \Rightarrow a+m\lt a-m" />.
                </CorrectionCard>
                <div>
                  <p className="mb-2 font-bold text-green-700">2. Même méthode à chaque fois : calculer la différence et la factoriser en carré.</p>
                  <div className="grid gap-3">
                    <CorrectionCard n="a"><Math tex="\dfrac ab+\dfrac ba-2=\dfrac{(a-b)^2}{ab}\geq0" /> (car <Math tex="ab\gt0" />) : <Math tex="\dfrac ab+\dfrac ba\geq2" /></CorrectionCard>
                    <CorrectionCard n="b"><Math tex="(a+b)^2-(2\sqrt{ab})^2=(a-b)^2\geq0" />, et <Math tex="a+b\gt0" />, <Math tex="2\sqrt{ab}\gt0" /> : <Math tex="a+b\geq2\sqrt{ab}" /></CorrectionCard>
                    <CorrectionCard n="c"><Math tex="\dfrac1{a^2}+a^2-2=\dfrac{(a^2-1)^2}{a^2}\geq0" /> : <Math tex="\dfrac1{a^2}+a^2\geq2" /></CorrectionCard>
                    <CorrectionCard n="d"><Math tex="a^2+b^2-2ab=(a-b)^2\geq0" /> : <Math tex="a^2+b^2\geq2ab" /></CorrectionCard>
                  </div>
                </div>
                <CorrectionCard n={3}>
                  Pythagore : <Math tex="BC^2=AB^2+AC^2" />.<br />
                  <Math tex="2.999\lt AB\lt3.001 \Rightarrow 8.994001\lt AB^2\lt9.006001" /><br />
                  <Math tex="1.999\lt AC\lt2.001 \Rightarrow 3.996001\lt AC^2\lt4.004001" /><br />
                  En additionnant : <Math tex="12.990002\lt BC^2\lt13.010002" />.<br />
                  Or <Math tex="3.604^2=12.988816\lt12.990002" /> et <Math tex="3.607^2=13.010449\gt13.010002" />, donc (ordre et racine carrée) :{" "}
                  <strong className="text-green-700"><Math tex="3.604\lt BC\lt3.607" /></strong> ✓ CQFD
                </CorrectionCard>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
