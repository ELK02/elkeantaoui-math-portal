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
  title: "Les Puissances — Cours & Exercices corrigés | 1AC",
  description:
    "Cours détaillé sur les puissances (définitions, signe, puissances de 10, propriétés) et 5 exercices corrigés en détail (calculs, équations d'exposants, écritures littérales, démonstrations) — 1ère année collège, semestre 1.",
  kicker: "1ʳᵉ Année Collège · Chapitre 8",
  heroTitle: "Les Puissances",
  heroSubtitle:
    "Multiplier un nombre plusieurs fois par lui-même, en une seule petite écriture. Ça va très vite à comprendre.",
  footerNote: "Les puissances · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "exercice1", label: "Ex.1" },
    { id: "exercice2", label: "Ex.2" },
    { id: "exercice3", label: "Ex.3" },
    { id: "exercice4", label: "Ex.4" },
    { id: "exercice5", label: "Ex.5" },
  ],
};

/** Small numbered/lettered pill used inside item grids. */
function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls =
    tone === "rose"
      ? "bg-rose-100 text-rose-600"
      : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
      {children}
    </span>
  );
}

function Item({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border p-3">
      <Pill>{n}</Pill>
      <span className="text-sm">{children}</span>
    </div>
  );
}

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-3 text-sm">
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
          { value: "5", label: "exercices" },
          { value: "30", label: "questions" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
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
            <span className="text-[7rem] leading-none font-bold sm:text-[9rem]">a</span>
            <span className="-mt-16 -ml-1 text-[3.5rem] leading-none font-bold text-orange-400 sm:text-[4.5rem]">
              n
            </span>
          </div>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection id="cours" kicker="01 — La définition" title="C'est quoi, une puissance ?" tone="light"
        description={
          <>
            Une façon rapide d&apos;écrire « je multiplie <Math tex="a" /> par lui-même, <Math tex="n" /> fois ».
          </>
        }
      >
        <FormulaBlock tex="a^n = a \times a \times a \times \cdots \times a" caption={<><Math tex="n" /> facteurs</>} />

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">la base</p>
            <p className="text-lg"><Math tex="a^n" /> — <Math tex="a" /> est le nombre qu&apos;on multiplie</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted">l&apos;exposant</p>
            <p className="text-lg"><Math tex="a^n" /> — <Math tex="n" /> dit combien de fois</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <div className="rounded-xl border border-border bg-surface-muted p-3 text-center font-semibold">
            <Math tex="a^0 = 1" />
          </div>
          <div className="rounded-xl border border-border bg-surface-muted p-3 text-center font-semibold">
            <Math tex="a^1 = a" />
          </div>
          <div className="col-span-2 rounded-xl border border-rose-500/30 bg-rose-100/60 p-3 text-center font-semibold text-rose-700 sm:col-span-2">
            <Math tex="0^0" /> n&apos;existe pas
          </div>
        </div>

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemples</p>
        <div className="mt-2 grid gap-x-6 gap-y-2 rounded-xl border border-border p-5 sm:grid-cols-2">
          <p><Math tex="3^5 = 3 \times 3 \times 3 \times 3 \times 3" /></p>
          <p><Math tex="1{,}2^3 = 1{,}2 \times 1{,}2 \times 1{,}2" /></p>
          <p><Math tex="(-7)^4 = (-7) \times (-7) \times (-7) \times (-7)" /></p>
          <p><Math tex="124^0 = 1" /></p>
        </div>
      </LessonSection>

      <LessonSection kicker="02 — Le piège classique" title="Positif ou négatif ?" tone="light"
        description="Pour une base négative, un seul réflexe à avoir : compter pair ou impair."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/20 bg-green-100/60 p-5">
            <p className="font-mono text-xs font-semibold text-green-700 uppercase">exposant pair</p>
            <p className="mt-2 text-lg"><Math tex="(-a)^n" /> est <strong>positif</strong></p>
            <p className="mt-3 text-sm text-foreground-muted"><Math tex="(-21{,}5)^{124} > 0" /> · 124 est pair</p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-100/60 p-5">
            <p className="font-mono text-xs font-semibold text-rose-700 uppercase">exposant impair</p>
            <p className="mt-2 text-lg"><Math tex="(-a)^n" /> est <strong>négatif</strong></p>
            <p className="mt-3 text-sm text-foreground-muted"><Math tex="(-225)^{217} < 0" /> · 217 est impair</p>
          </div>
        </div>

        <Callout variant="warning" title="⚠ Attention à ne pas confondre" >
          <p><Math tex="(-a)^n \neq -a^n" /> en général</p>
          <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <p className="rounded-lg bg-surface p-3"><Math tex="(-3{,}5)^2 = +3{,}5 \times 3{,}5 = \mathbf{12{,}25}" /></p>
            <p className="rounded-lg bg-surface p-3"><Math tex="(-3)^5 = -3 \times 3 \times 3 \times 3 \times 3 = \mathbf{-729}" /></p>
          </div>
        </Callout>
      </LessonSection>

      <LessonSection kicker="03 — Le raccourci le plus utile" title="Les puissances de 10" tone="light"
        description="L'exposant compte directement les zéros. Rien à calculer."
      >
        <FormulaBlock tex="10^n = 1\,000\ldots0" caption={<><Math tex="n" /> zéros</>} />
        <div className="mt-4 grid gap-3 text-center sm:grid-cols-3">
          <p className="rounded-xl border border-border p-4"><Math tex="10^3 = 1\,000" /></p>
          <p className="rounded-xl border border-border p-4"><Math tex="10^7 = 10\,000\,000" /></p>
          <p className="rounded-xl border border-border p-4"><Math tex="10^{12} = 1\,000\,000\,000\,000" /></p>
        </div>
      </LessonSection>

      <LessonSection kicker="04 — Les 5 règles à connaître" title="Propriétés des puissances" tone="light"
        description="Toujours la même idée : on additionne ou on multiplie les exposants selon le cas."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">même base · produit</p>
            <p className="mb-2 text-center text-xl font-bold text-foreground"><Math tex="a^m \times a^n = a^{m+n}" /></p>
            <p className="text-center text-sm text-foreground-muted"><Math tex="2{,}5^{12} \times 2{,}5^7 = 2{,}5^{19}" /></p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">même base · quotient</p>
            <p className="mb-2 text-center text-xl font-bold text-foreground"><Math tex="\dfrac{a^m}{a^n} = a^{m-n}" /></p>
            <p className="text-center text-sm text-foreground-muted"><Math tex="11^{25} \div 11^{11} = 11^{14}" /></p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">même exposant · produit</p>
            <p className="mb-2 text-center text-xl font-bold text-foreground"><Math tex="a^m \times b^m = (ab)^m" /></p>
            <p className="text-center text-sm text-foreground-muted"><Math tex="4^7 \times 15^7 = 60^7" /></p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <p className="mb-2 font-mono text-xs text-foreground-muted">même exposant · quotient</p>
            <p className="mb-2 text-center text-xl font-bold text-foreground">
              <Math tex="\dfrac{a^m}{b^m} = \left(\dfrac{a}{b}\right)^m" />
            </p>
            <p className="text-center text-sm text-foreground-muted"><Math tex="25^{11} \div 5^{11} = 5^{11}" /></p>
          </div>
          <div className="rounded-xl border border-border p-5 sm:col-span-2">
            <p className="mb-2 font-mono text-xs text-foreground-muted">puissance d&apos;une puissance</p>
            <p className="mb-2 text-center text-xl font-bold text-foreground"><Math tex="(a^m)^n = a^{m \times n}" /></p>
            <p className="text-center text-sm text-foreground-muted"><Math tex="(23^{13})^{10} = 23^{130}" /></p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="5 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={5} celebrationTitle="Bravo, les 5 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les puissances.">
          <ExerciseCard
            id="1"
            index={1}
            title="Calculer"
            itemsLabel="11 expressions"
            items={
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                <Item n={1}><Math tex="3^2 \times 5^2" /></Item>
                <Item n={2}><Math tex="(-0{,}25)^4" /></Item>
                <Item n={3}><Math tex="[(-3{,}5)^2]^3" /></Item>
                <Item n={4}><Math tex="[(-5)^0]^{240}" /></Item>
                <Item n={5}><Math tex="-17^3" /></Item>
                <Item n={6}><Math tex="-2{,}6^4" /></Item>
                <Item n={7}><Math tex="-[(-5)^2]^2" /></Item>
                <Item n={8}><Math tex="(-2254{,}326)^1" /></Item>
                <Item n={9}><Math tex="(-2{,}5^2)^3" /></Item>
                <Item n={10}><Math tex="[-(-3{,}2)^3]^2" /></Item>
                <div className="col-span-2 flex items-center gap-2 rounded-lg border border-border p-3 sm:col-span-1">
                  <Pill>11</Pill>
                  <span className="text-sm"><Math tex="-(-(-(-2)^2)^2)^2" /></span>
                </div>
              </div>
            }
            correction={
              <div className="grid grid-cols-2 gap-2.5 text-sm sm:grid-cols-3 lg:grid-cols-4">
                <CorrectionCard n={1}><Math tex="3^2 \times 5^2 = 9 \times 25 = \mathbf{225}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="0{,}25^4 = \mathbf{0{,}00390625}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="(-3{,}5)^6 = \mathbf{1838{,}265625}" /></CorrectionCard>
                <CorrectionCard n={4}><Math tex="1^{240} = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n={5}><Math tex="-17^3 = \mathbf{-4913}" /></CorrectionCard>
                <CorrectionCard n={6}><Math tex="-2{,}6^4 = \mathbf{-45{,}6976}" /></CorrectionCard>
                <CorrectionCard n={7}><Math tex="-[25]^2 = \mathbf{-625}" /></CorrectionCard>
                <CorrectionCard n={8}><Math tex="\mathbf{-2254{,}326}" /></CorrectionCard>
                <CorrectionCard n={9}><Math tex="(-6{,}25)^3 = \mathbf{-244{,}140625}" /></CorrectionCard>
                <CorrectionCard n={10}><Math tex="[32{,}768]^2 = \mathbf{1073{,}741824}" /></CorrectionCard>
                <div className="col-span-2 rounded-lg border border-green-500/20 bg-surface p-3 sm:col-span-3 lg:col-span-4">
                  <span className="font-bold text-green-700">11.</span> <Math tex="-(-(-(-2)^2)^2)^2" /> — de l&apos;intérieur vers l&apos;extérieur :
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-foreground-muted">
                    <Math tex="(-2)^2=4" /><span>→</span><Math tex="-4" /><span>→</span>
                    <Math tex="(-4)^2=16" /><span>→</span><Math tex="-16" /><span>→</span>
                    <Math tex="(-16)^2=256" /><span>→</span>
                    <span className="font-bold text-green-700"><Math tex="-256" /></span>
                  </div>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title={<>Trouve <Math tex="n" /></>}
            items={
              <div className="grid gap-2.5 sm:grid-cols-2">
                <Item n={1}><Math tex="(7^2)^n = 7^{12}" /></Item>
                <Item n={2}><Math tex="(-5)^n \times (-5)^3 = (-5)^{11}" /></Item>
                <Item n={3}><Math tex="(-11)^5 \times [(-11)^2]^n = (-11)^5 \times (-11)^6" /></Item>
                <Item n={4}><Math tex="(2{,}5)^{4-n} = \dfrac{2{,}5^4}{2{,}5}" /></Item>
              </div>
            }
            correction={
              <div className="grid gap-2.5 text-sm sm:grid-cols-2">
                <CorrectionCard n={1}><Math tex="7^{2n}=7^{12} \implies 2n=12 \implies \mathbf{n=6}" /></CorrectionCard>
                <CorrectionCard n={2}><Math tex="n+3=11 \implies \mathbf{n=8}" /></CorrectionCard>
                <CorrectionCard n={3}><Math tex="5+2n=11 \implies 2n=6 \implies \mathbf{n=3}" /></CorrectionCard>
                <CorrectionCard n={4}>
                  <Math tex="2{,}5^4 \div 2{,}5 = 2{,}5^3" /> donc <Math tex="4-n=3 \implies \mathbf{n=1}" />
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Écris comme une seule puissance"
            items={
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">A</Pill>
                  <span className="pt-0.5 text-base"><Math tex="a^2 \times b \times a^3 \times b^4" /></span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">B</Pill>
                  <span className="pt-0.5 text-base"><Math tex="(a^2)^3 \times b^2 \times (a \times b)^3 \times (b^2)^2" /></span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">C</Pill>
                  <span className="pt-0.5 text-base"><Math tex="\dfrac{a^2 \times b^3 \times a}{(a \times b)^3}" /></span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">D</Pill>
                  <span className="pt-0.5 text-base">
                    <Math tex="\dfrac{(a^2)^3}{(b^3)^2} \times \dfrac{a^4 \times (a^2)^2}{b^2 \times (b^3)^2}" />
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                  <Pill tone="rose">E</Pill>
                  <span className="pt-0.5 text-base">
                    <Math tex="a^2 \times (a \times a^3 \times a^4)^5 \times \dfrac{1}{(b^7)^6}" />
                  </span>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2.5 text-sm">
                <CorrectionCard n="A"><Math tex="a^{2+3} \times b^{1+4} = \mathbf{a^5 \times b^5}" /></CorrectionCard>
                <CorrectionCard n="B"><Math tex="a^6 \times b^2 \times a^3 b^3 \times b^4 = \mathbf{a^9 \times b^9}" /></CorrectionCard>
                <CorrectionCard n="C"><Math tex="\dfrac{a^3 b^3}{a^3 b^3} = \mathbf{1}" /></CorrectionCard>
                <CorrectionCard n="D"><Math tex="\dfrac{a^6}{b^6} \times \dfrac{a^8}{b^8} = \mathbf{\dfrac{a^{14}}{b^{14}}}" /></CorrectionCard>
                <CorrectionCard n="E"><Math tex="a^2 \times a^{40} \times \dfrac{1}{b^{42}} = \mathbf{\dfrac{a^{42}}{b^{42}}}" /></CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Démontre à partir d'une donnée"
            items={
              <div>
                <div className="mb-4 flex items-start gap-3 rounded-xl border border-border bg-surface-muted p-4">
                  <span className="shrink-0 rounded-md bg-neutral-950 px-2.5 py-1 text-xs font-bold text-white">Donnée</span>
                  <p className="pt-0.5 text-sm">On pose : <Math tex="a \times b \times c = -1" /></p>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <Item n={1}><Math tex="a^2 \times b \times c = -a" /></Item>
                  <Item n={2}><Math tex="a^2 \times b^2 \times c^2 = 1" /></Item>
                  <Item n={3}><Math tex="a^3 \times b \times c = -a^2" /></Item>
                  <Item n={4}><Math tex="a^3 \times b^3 \times c^3 = -1" /></Item>
                </div>
              </div>
            }
            correction={
              <div>
                <p className="mb-3 text-xs text-foreground-muted">
                  Méthode : faire apparaître <Math tex="a \times b \times c" /> (ou sa puissance) pour le remplacer par −1.
                </p>
                <div className="grid gap-2.5 text-sm sm:grid-cols-2">
                  <CorrectionCard n={1}><Math tex="a^2bc = a \times (abc) = a \times (-1) = \mathbf{-a}" /> ✓</CorrectionCard>
                  <CorrectionCard n={2}><Math tex="a^2b^2c^2 = (abc)^2 = (-1)^2 = \mathbf{1}" /> ✓</CorrectionCard>
                  <CorrectionCard n={3}><Math tex="a^3bc = a^2 \times (abc) = a^2 \times (-1) = \mathbf{-a^2}" /> ✓</CorrectionCard>
                  <CorrectionCard n={4}><Math tex="a^3b^3c^3 = (abc)^3 = (-1)^3 = \mathbf{-1}" /> ✓</CorrectionCard>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Exprime en une seule puissance"
            items={
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                <Item n={1}><Math tex="(10^4)^5" /></Item>
                <Item n={2}><Math tex="2^7 \times 5^7" /></Item>
                <Item n={3}><Math tex="(5^2)^4 \times 4^8 \times 5^3" /></Item>
                <Item n={4}><Math tex="10^8 \times 10^6" /></Item>
                <Item n={5}><Math tex="\dfrac{100000}{100}" /></Item>
                <Item n={6}><Math tex="\dfrac{5^{12} \times 4^{12}}{2^{12}}" /></Item>
              </div>
            }
            correction={
              <div>
                <div className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <CorrectionCard n={1}><Math tex="10^{4 \times 5} = \mathbf{10^{20}}" /></CorrectionCard>
                  <CorrectionCard n={2}><Math tex="(2 \times 5)^7 = \mathbf{10^7}" /></CorrectionCard>
                  <CorrectionCard n={3}><Math tex="5^8 \times 4^8 \times 5^3 = \mathbf{5^{11} \times 4^8}" /></CorrectionCard>
                  <CorrectionCard n={4}><Math tex="10^{8+6} = \mathbf{10^{14}}" /></CorrectionCard>
                  <CorrectionCard n={5}><Math tex="\dfrac{10^5}{10^2} = \mathbf{10^3}" /></CorrectionCard>
                  <CorrectionCard n={6}><Math tex="\dfrac{20^{12}}{2^{12}} = \mathbf{10^{12}}" /></CorrectionCard>
                </div>
                <p className="mt-3 text-xs text-foreground-muted">
                  Pour l&apos;item 3 : les exposants 8 et 3 (base 5) se cumulent, mais la base 4 reste distincte, donc le résultat le plus simple est un produit de deux puissances.
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
