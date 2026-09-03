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
  title: "Fonction Linéaire et Fonction Affine · Cours et exercices | 3AC",
  description:
    "Cours complet sur la fonction linéaire et la fonction affine (définitions, propriété du coefficient, représentations graphiques) avec exemples résolus et 5 exercices corrigés en détail, 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 6",
  heroTitle: "Fonction Linéaire & Fonction Affine",
  heroSubtitle:
    "De f(x) = ax à f(x) = ax + b : deux droites presque jumelles, et tout ce qu'il faut pour les calculer et les tracer.",
  footerNote: "Fonction linéaire et fonction affine · Mathématiques, 3ᵉ année collège, semestre 2.",
  sections: [
    { id: "fonction-lineaire", label: "F. linéaire" },
    { id: "fonction-affine", label: "F. affine" },
    { id: "memo", label: "Mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Small labeled fact box used in course sections. */
function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <p className="mb-1 font-mono text-xs text-foreground-muted">{label}</p>
      <p className="text-base">{children}</p>
    </div>
  );
}

/** A small coordinate-plane "card" wrapper for the SVG graphs. */
function Graph({ children, caption, className = "" }: { children: ReactNode; caption?: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-xs rounded-2xl border border-border bg-surface-muted p-4 ${className}`}>
      {children}
      {caption ? <p className="mt-2 text-center text-xs text-foreground-muted">{caption}</p> : null}
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
          { value: "2", label: "notions clés" },
          { value: "5", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#fonction-lineaire"
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
          <div className="flex select-none flex-col gap-5 font-serif text-white italic">
            <span className="text-4xl font-bold leading-none sm:text-5xl">f(x) = ax</span>
            <span className="text-4xl font-bold leading-none sm:text-5xl">
              g(x) = ax<span className="text-orange-400">+b</span>
            </span>
          </div>
        }
      />

      {/* ===================== I. FONCTION LINÉAIRE ===================== */}
      <LessonSection
        id="fonction-lineaire"
        kicker="01 · Cas particulier : b = 0"
        title="Fonction linéaire"
        tone="light"
        description="La fonction qui multiplie x par un nombre fixe a. Sa droite passe toujours par l'origine du repère."
      >
        <p className="mb-2 text-sm font-semibold text-foreground">1. Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Soit <Math tex="a" /> un nombre réel donné. La relation <Math tex="f" /> qui, à tout réel <Math tex="x" />
            , fait correspondre le réel <Math tex="ax" /> s&apos;appelle <strong>fonction linéaire de coefficient <Math tex="a" /></strong>,
            notée <Math tex="f: x\to ax" />. On dit que <Math tex="ax" /> est <strong>l&apos;image</strong> de <Math tex="x" /> par <Math tex="f" />, et on écrit <Math tex="f(x)=ax" />.
          </p>
          <p className="mt-2 text-xs italic">Remarque : une fonction linéaire peut aussi se noter g, h, l…</p>
        </Callout>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">2. Exemple</p>
        <p className="mb-3 text-sm text-foreground-muted">
          On considère <Math tex="f" /> telle que <Math tex="f(x)=2x" />. Son coefficient est <Math tex="2" />.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Fact label="image de −2">
            <Math tex="f(-2)=2\times(-2)=-4" />
          </Fact>
          <Fact label="calcul de f(√3)">
            <Math tex="f(\sqrt3)=2\times\sqrt3=2\sqrt3" />
          </Fact>
        </div>
        <div className="mt-3 rounded-xl border border-border p-4">
          <p className="mb-1 font-mono text-xs text-foreground-muted">antécédent de −4</p>
          <p className="text-base">
            <Math tex="f(x)=-4 \iff 2x=-4 \iff x=\dfrac{-4}{2}=-2" />
          </p>
          <p className="mt-2 text-sm text-foreground-muted">Le nombre qui a pour image −4 par f est −2.</p>
        </div>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">3. Propriété du coefficient</p>
        <Callout variant="info" title="Propriété">
          <p>
            Soit <Math tex="a" /> un nombre réel donné et <Math tex="x" /> un réel quelconque. Si <Math tex="f" /> est
            une fonction linéaire de coefficient <Math tex="a" />, alors :
          </p>
        </Callout>
        <FormulaBlock tex="a=\dfrac{f(x)}{x} \quad \text{et} \quad x\neq0" />

        <div className="mt-4">
          <ExerciseCard
            id="fl-app-coef"
            index={1}
            title="Applique"
            items={
              <p className="text-sm">
                Soit <Math tex="g" /> une fonction linéaire telle que <Math tex="g(2)=-4" />. Définis <Math tex="g" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="g" /> est linéaire donc <Math tex="g(x)=ax" />, avec <Math tex="a" /> et <Math tex="x" /> réels.
                </p>
                <p>
                  <Math tex="a=\dfrac{g(x)}{x}, \; x\neq0 \;\text{donc}\; a=\dfrac{g(2)}{2}=\dfrac{-4}{2}=-2" />
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où : <Math tex="g(x)=-2x" />
                </p>
              </div>
            }
          />
        </div>

        <p className="mt-8 mb-1 text-lg font-bold text-foreground">4. Représentation graphique</p>

        <p className="mt-4 mb-2 text-sm font-semibold text-foreground">a) Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Dans un plan muni d&apos;un repère orthonormé, la représentation graphique d&apos;une fonction linéaire est{" "}
            <strong>une droite qui passe par l&apos;origine du repère</strong>, d&apos;équation réduite :
          </p>
        </Callout>
        <FormulaBlock tex="y=ax" caption={<><Math tex="a" /> est le coefficient directeur de la droite</>} />

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">b) Exemple</p>
        <p className="mb-3 text-sm text-foreground-muted">
          La droite <Math tex="(D)" /> est la représentation graphique d&apos;une fonction linéaire : elle passe par
          l&apos;origine <Math tex="O" />.
        </p>
        <Graph caption={<>La droite (D) passe par l&apos;origine O du repère (O,I,J)</>}>
          <svg viewBox="0 0 260 260" className="mx-auto h-auto w-full max-w-xs">
            <defs><marker id="arrg1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
            <rect width="260" height="260" fill="white" rx="12"/>
            <line x1="24.0" y1="24" x2="24.0" y2="236" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="59.3" y1="24" x2="59.3" y2="236" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="94.7" y1="24" x2="94.7" y2="236" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="130.0" y1="24" x2="130.0" y2="236" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="165.3" y1="24" x2="165.3" y2="236" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="200.7" y1="24" x2="200.7" y2="236" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="236.0" y1="24" x2="236.0" y2="236" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="24" y1="236.0" x2="236" y2="236.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="24" y1="200.7" x2="236" y2="200.7" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="24" y1="165.3" x2="236" y2="165.3" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="24" y1="130.0" x2="236" y2="130.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="24" y1="94.7" x2="236" y2="94.7" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="24" y1="59.3" x2="236" y2="59.3" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="24" y1="24.0" x2="236" y2="24.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="16" y1="130.0" x2="246" y2="130.0" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg1)"/>
            <line x1="130.0" y1="244" x2="130.0" y2="14" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg1)"/>
            <line x1="-11.3" y1="271.3" x2="271.3" y2="-11.3" stroke="#2563eb" strokeWidth="2.5"/>
            <circle cx="165.3" cy="130.0" r="2.2" fill="#334155"/>
            <text x="162.3" y="145.0" fontSize="11" fill="#334155" fontStyle="italic">I</text>
            <circle cx="130.0" cy="94.7" r="2.2" fill="#334155"/>
            <text x="115.0" y="98.7" fontSize="11" fill="#334155" fontStyle="italic">J</text>
            <text x="116.0" y="145.0" fontSize="11" fill="#334155" fontStyle="italic">O</text>
            <text x="211.3" y="27.5" fontSize="13" fontWeight="700" fill="#2563eb" fontStyle="italic">(D)</text>
          </svg>
        </Graph>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">c) Propriété</p>
        <Callout variant="info" title="Propriété">
          <p>
            Soient <Math tex="A" /> un point et <Math tex="(D)" /> la représentation graphique d&apos;une fonction linéaire <Math tex="f" /> :
          </p>
        </Callout>
        <FormulaBlock tex="A\in(D) \iff A\big(x_A\,;\,f(x_A)\big) \iff y_A=ax_A" />

        <div className="mt-6 space-y-4">
          <ExerciseCard
            id="fl-app-graph-1"
            index={1}
            title="Applique"
            items={
              <p className="text-sm">
                Le plan est muni d&apos;un repère orthonormé. Soit <Math tex="f" /> une fonction linéaire définie par{" "}
                <Math tex="f(x)=-2x" /> et <Math tex="(D)" /> sa représentation graphique. Les points <Math tex="A(-1\,;5)" /> et{" "}
                <Math tex="B(3\,;-6)" /> appartiennent-ils à <Math tex="(D)" /> ?
              </p>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Cherchons si A ∈ (D) :</p>
                  <p><Math tex="y_A=5 \quad\text{et}\quad -2x_A=-2\times(-1)=2" /></p>
                  <p>
                    Donc <Math tex="y_A\neq-2x_A" />, d&apos;où <strong>A ∉ (D)</strong>.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Cherchons si B ∈ (D) :</p>
                  <p><Math tex="y_B=-6 \quad\text{et}\quad -2x_B=-2\times3=-6" /></p>
                  <p>
                    Donc <Math tex="y_B=-2x_B" />, d&apos;où <strong>B ∈ (D)</strong>.
                  </p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="fl-app-graph-2"
            index={2}
            title="Applique"
            items={
              <p className="text-sm">
                Le plan est muni d&apos;un repère orthonormé <Math tex="(O,I,J)" />. Soit <Math tex="g" /> une fonction
                linéaire définie par <Math tex="g(x)=-\dfrac12x" />. Trace <Math tex="(\Delta)" />, la représentation
                graphique de <Math tex="g" />.
              </p>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>Tableau de valeurs :</p>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[260px] border-collapse text-center text-sm">
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-2 text-left font-semibold text-foreground-muted"><Math tex="x" /></td>
                        <td className="p-2"><Math tex="0" /></td>
                        <td className="p-2"><Math tex="2" /></td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-2 text-left font-semibold text-foreground-muted"><Math tex="g(x)" /></td>
                        <td className="p-2"><Math tex="0" /></td>
                        <td className="p-2"><Math tex="-1" /></td>
                      </tr>
                      <tr>
                        <td className="p-2 text-left font-semibold text-foreground-muted"><Math tex="M(x\,;g(x))" /></td>
                        <td className="p-2"><Math tex="O(0\,;0)" /></td>
                        <td className="p-2"><Math tex="A(2\,;-1)" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Donc <Math tex="(\Delta)=(OA)" />
                </p>
                <Graph>
                  <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-xs">
                    <defs><marker id="arrg2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
                    <rect width="300" height="300" fill="white" rx="12"/>
                    <line x1="28.0" y1="28" x2="28.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="58.5" y1="28" x2="58.5" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="89.0" y1="28" x2="89.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="119.5" y1="28" x2="119.5" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="150.0" y1="28" x2="150.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="180.5" y1="28" x2="180.5" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="211.0" y1="28" x2="211.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="241.5" y1="28" x2="241.5" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="272.0" y1="28" x2="272.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="272.0" x2="272" y2="272.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="237.1" x2="272" y2="237.1" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="202.3" x2="272" y2="202.3" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="167.4" x2="272" y2="167.4" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="132.6" x2="272" y2="132.6" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="97.7" x2="272" y2="97.7" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="62.9" x2="272" y2="62.9" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="28.0" x2="272" y2="28.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="20" y1="167.4" x2="282" y2="167.4" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg2)"/>
                    <line x1="150.0" y1="280" x2="150.0" y2="18" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg2)"/>
                    <line x1="-2.5" y1="80.3" x2="302.5" y2="254.6" stroke="#2563eb" strokeWidth="2.5"/>
                    <circle cx="180.5" cy="167.4" r="2.2" fill="#334155"/>
                    <text x="177.5" y="182.4" fontSize="11" fill="#334155" fontStyle="italic">I</text>
                    <circle cx="150.0" cy="132.6" r="2.2" fill="#334155"/>
                    <text x="135.0" y="136.6" fontSize="11" fill="#334155" fontStyle="italic">J</text>
                    <text x="136.0" y="182.4" fontSize="11" fill="#334155" fontStyle="italic">O</text>
                    <circle cx="150.0" cy="167.4" r="3.3" fill="#0f172a"/>
                    <text x="134.0" y="183.4" fontSize="12.5" fontWeight="700" fill="#0f172a" fontStyle="italic">O</text>
                    <circle cx="211.0" cy="202.3" r="3.3" fill="#2563eb"/>
                    <text x="219.0" y="218.3" fontSize="12.5" fontWeight="700" fill="#2563eb" fontStyle="italic">A</text>
                    <text x="40.2" y="80.3" fontSize="13" fontWeight="700" fill="#2563eb" fontStyle="italic">(Δ)</text>
                  </svg>
                </Graph>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== II. FONCTION AFFINE ===================== */}
      <LessonSection
        id="fonction-affine"
        kicker="02 · Le cas général"
        title="Fonction affine"
        tone="light"
        description="On ajoute une constante b à ax. La droite ne passe plus forcément par l'origine, mais tout le reste marche pareil."
      >
        <p className="mb-2 text-sm font-semibold text-foreground">1. Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Soient <Math tex="a" /> et <Math tex="b" /> deux réels donnés. La relation <Math tex="f" /> qui, à tout
            réel <Math tex="x" />, fait correspondre le réel <Math tex="ax+b" /> s&apos;appelle{" "}
            <strong>fonction affine de coefficient <Math tex="a" /></strong>, notée <Math tex="f: x\to ax+b" />. On
            dit que <Math tex="ax+b" /> est <strong>l&apos;image</strong> de <Math tex="x" /> par <Math tex="f" />, et
            on écrit <Math tex="f(x)=ax+b" />.
          </p>
          <p className="mt-2 text-xs italic">Remarque : une fonction affine peut aussi se noter g, h, l…</p>
        </Callout>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">2. Exemple</p>
        <p className="mb-3 text-sm text-foreground-muted">
          On considère <Math tex="f" /> telle que <Math tex="f(x)=-\dfrac12x+3" />. Son coefficient est <Math tex="-\dfrac12" />.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Fact label="image de −2">
            <Math tex="f(-2)=\dfrac{-1}{2}\times(-2)+3=1+3=4" />
          </Fact>
          <Fact label="calcul de f(2/5)">
            <Math tex="f\!\left(\dfrac25\right)=\dfrac{-1}{2}\times\dfrac25+3=\dfrac{-1}{5}+\dfrac{15}{5}=\dfrac{14}{5}" />
          </Fact>
        </div>
        <div className="mt-3 rounded-xl border border-border p-4">
          <p className="mb-1 font-mono text-xs text-foreground-muted">antécédent de 2/3</p>
          <p className="text-base">
            <Math tex="\dfrac{-1}{2}x+3=\dfrac23 \iff \dfrac{-1}{2}x=\dfrac23-3=\dfrac{-7}{3} \iff x=\dfrac{-7}{3}\times\dfrac{2}{-1}=\dfrac{14}{3}" />
          </p>
          <p className="mt-2 text-sm text-foreground-muted">Le nombre qui a pour image 2/3 par f est 14/3.</p>
        </div>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">3. Propriété du coefficient</p>
        <Callout variant="info" title="Propriété">
          <p>
            Soit <Math tex="a" /> un réel donné et <Math tex="x" />, <Math tex="x'" /> deux réels quelconques. Si{" "}
            <Math tex="f" /> est une fonction affine de coefficient <Math tex="a" />, alors :
          </p>
        </Callout>
        <FormulaBlock tex="a=\dfrac{f(x)-f(x')}{x-x'} \quad \text{et} \quad x\neq x'" />

        <div className="mt-4">
          <ExerciseCard
            id="fa-app-coef"
            index={1}
            title="Applique"
            items={
              <p className="text-sm">
                Soit <Math tex="g" /> une fonction affine telle que <Math tex="g(-3)=9" /> et <Math tex="g(0)=-6" />.
                Définis <Math tex="g" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="g" /> est affine donc <Math tex="g(x)=ax+b" />.
                </p>
                <div>
                  <p className="font-semibold">Déterminons a :</p>
                  <p><Math tex="a=\dfrac{g(-3)-g(0)}{-3-0}=\dfrac{9-(-6)}{-3}=\dfrac{15}{-3}=-5" /></p>
                  <p>D&apos;où : <Math tex="g(x)=-5x+b" />.</p>
                </div>
                <div>
                  <p className="font-semibold">Déterminons b :</p>
                  <p><Math tex="g(-3)=9 \iff -5\times(-3)+b=9 \iff 15+b=9 \iff b=9-15=-6" /></p>
                </div>
                <p className="font-semibold text-green-700">
                  D&apos;où : <Math tex="g(x)=-5x-6" />
                </p>
              </div>
            }
          />
        </div>

        <p className="mt-8 mb-1 text-lg font-bold text-foreground">4. Représentation graphique</p>

        <p className="mt-4 mb-2 text-sm font-semibold text-foreground">a) Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Dans un plan muni d&apos;un repère orthonormé, la représentation graphique d&apos;une fonction affine est{" "}
            <strong>une droite</strong> d&apos;équation réduite :
          </p>
        </Callout>
        <FormulaBlock
          tex="y=ax+b"
          caption={
            <>
              <Math tex="a" /> : coefficient directeur · <Math tex="b" /> : ordonnée à l&apos;origine
            </>
          }
        />

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">b) Exemple</p>
        <p className="mb-3 text-sm text-foreground-muted">
          Soit <Math tex="f" /> une fonction affine définie par <Math tex="f(x)=2x+1" />. Traçons <Math tex="(D)" />{" "}
          dans un repère orthonormé <Math tex="(O,I,J)" />.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[260px] border-collapse text-center text-sm">
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 text-left font-semibold text-foreground-muted"><Math tex="x" /></td>
                <td className="p-2"><Math tex="1" /></td>
                <td className="p-2"><Math tex="-2" /></td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 text-left font-semibold text-foreground-muted"><Math tex="f(x)" /></td>
                <td className="p-2"><Math tex="3" /></td>
                <td className="p-2"><Math tex="-3" /></td>
              </tr>
              <tr>
                <td className="p-2 text-left font-semibold text-foreground-muted"><Math tex="M(x\,;f(x))" /></td>
                <td className="p-2"><Math tex="A(1\,;3)" /></td>
                <td className="p-2"><Math tex="B(-2\,;-3)" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm">
          Donc <Math tex="(D)=(AB)" />
        </p>
        <Graph className="mt-3">
          <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-xs">
            <defs><marker id="arrg3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
            <rect width="300" height="300" fill="white" rx="12"/>
            <line x1="28.0" y1="28" x2="28.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="68.7" y1="28" x2="68.7" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="109.3" y1="28" x2="109.3" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="150.0" y1="28" x2="150.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="190.7" y1="28" x2="190.7" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="231.3" y1="28" x2="231.3" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="272.0" y1="28" x2="272.0" y2="272" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="272.0" x2="272" y2="272.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="241.5" x2="272" y2="241.5" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="211.0" x2="272" y2="211.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="180.5" x2="272" y2="180.5" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="150.0" x2="272" y2="150.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="119.5" x2="272" y2="119.5" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="89.0" x2="272" y2="89.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="58.5" x2="272" y2="58.5" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="28" y1="28.0" x2="272" y2="28.0" stroke="#e2e8f0" strokeWidth="1"/>
            <line x1="20" y1="150.0" x2="282" y2="150.0" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg3)"/>
            <line x1="150.0" y1="280" x2="150.0" y2="18" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg3)"/>
            <line x1="-12.7" y1="363.5" x2="312.7" y2="-124.5" stroke="#7c3aed" strokeWidth="2.5"/>
            <circle cx="190.7" cy="150.0" r="2.2" fill="#334155"/>
            <text x="187.7" y="165.0" fontSize="11" fill="#334155" fontStyle="italic">I</text>
            <circle cx="150.0" cy="119.5" r="2.2" fill="#334155"/>
            <text x="135.0" y="123.5" fontSize="11" fill="#334155" fontStyle="italic">J</text>
            <text x="136.0" y="165.0" fontSize="11" fill="#334155" fontStyle="italic">O</text>
            <circle cx="190.7" cy="58.5" r="3.3" fill="#7c3aed"/>
            <text x="198.7" y="52.5" fontSize="12.5" fontWeight="700" fill="#7c3aed" fontStyle="italic">A</text>
            <circle cx="68.7" cy="241.5" r="3.3" fill="#7c3aed"/>
            <text x="50.7" y="255.5" fontSize="12.5" fontWeight="700" fill="#7c3aed" fontStyle="italic">B</text>
            <text x="227.3" y="18.8" fontSize="13" fontWeight="700" fill="#7c3aed" fontStyle="italic">(D)</text>
          </svg>
        </Graph>

        <div className="mt-6 space-y-4">
          <ExerciseCard
            id="fa-app-graph-1"
            index={1}
            title="Applique"
            items={
              <div className="text-sm">
                <p>
                  Soit <Math tex="g" /> une fonction affine telle que sa représentation graphique <Math tex="(\Delta)" />{" "}
                  passe par les points <Math tex="A(1\,;2)" /> et <Math tex="B(-1\,;-4)" />.
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Montre que <Math tex="g(x)=3x-1" />.</li>
                  <li>Détermine les coordonnées de <Math tex="E" />, intersection de <Math tex="(\Delta)" /> et l&apos;axe des abscisses.</li>
                  <li>Détermine les coordonnées de <Math tex="F" />, intersection de <Math tex="(\Delta)" /> et l&apos;axe des ordonnées.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1) g est affine donc g(x) = ax + b. (Δ) passe par A(1;2) et B(-1;-4) donc g(1)=2 et g(-1)=-4.</p>
                  <p><Math tex="a=\dfrac{g(1)-g(-1)}{1-(-1)}=\dfrac{2-(-4)}{2}=\dfrac62=3" /></p>
                  <p><Math tex="g(1)=2 \iff 3\times1+b=2 \iff b=2-3=-1" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="g(x)=3x-1" /></p>
                </div>
                <div>
                  <p className="font-semibold">2) Coordonnées de E (axe des abscisses) :</p>
                  <p><Math tex="y_E=3x_E-1 \;\text{et}\; y_E=0 \iff 0=3x_E-1 \iff x_E=\dfrac13" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="E\!\left(\dfrac13\,;0\right)" /></p>
                </div>
                <div>
                  <p className="font-semibold">3) Coordonnées de F (axe des ordonnées) :</p>
                  <p><Math tex="x_F=0 \;\text{et}\; y_F=3x_F-1=3\times0-1=-1" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="F(0\,;-1)" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="fa-app-graph-2"
            index={2}
            title="Applique"
            items={
              <p className="text-sm">
                Soient <Math tex="f" /> une fonction linéaire de représentation graphique <Math tex="(D)" />, et{" "}
                <Math tex="g" /> une fonction affine de représentation graphique <Math tex="(\Delta)" />, telles que{" "}
                <Math tex="f(x)=-4x" /> et <Math tex="g(x)=2x+2" />. Détermine les coordonnées de <Math tex="E" />,
                point d&apos;intersection de <Math tex="(D)" /> et <Math tex="(\Delta)" />.
              </p>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="E" /> est le point d&apos;intersection de <Math tex="(D)" /> et <Math tex="(\Delta)" />, donc <Math tex="f(x_E)=g(x_E)" />.
                </p>
                <p><Math tex="-4x_E=2x_E+2 \iff -6x_E=2 \iff x_E=\dfrac{2}{-6}=\dfrac{-1}{3}" /></p>
                <p>
                  D&apos;autre part : <Math tex="f\!\left(\dfrac{-1}{3}\right)=-4\times\dfrac{-1}{3}=\dfrac43" />
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;où : <Math tex="E\!\left(\dfrac{-1}{3}\,;\dfrac43\right)" />
                </p>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== MÉMO ===================== */}
      <LessonSection
        id="memo"
        kicker="03 · Révision express"
        title="Points clés à retenir"
        tone="muted"
        description="Le comparatif pour ne plus jamais confondre les deux fonctions."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="font-display text-lg font-bold text-foreground">Fonction linéaire</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li>✔ Expression : <Math tex="f(x)=ax" /></li>
              <li>✔ Coefficient : <Math tex="a=\dfrac{f(x)}{x}" />, <Math tex="x\neq0" /></li>
              <li>✔ Droite passant par l&apos;origine O</li>
              <li>✔ Un seul point (hors O) suffit pour la tracer</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="font-display text-lg font-bold text-foreground">Fonction affine</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li>✔ Expression : <Math tex="f(x)=ax+b" /></li>
              <li>✔ Coefficient : <Math tex="a=\dfrac{f(x)-f(x')}{x-x'}" />, <Math tex="x\neq x'" /></li>
              <li>✔ Droite quelconque (ordonnée à l&apos;origine b)</li>
              <li>✔ Deux points sont nécessaires pour la tracer</li>
            </ul>
          </div>
        </div>

        <Callout variant="warning" title="Astuce" >
          <p>
            Pour déterminer une fonction affine <Math tex="f(x)=ax+b" /> à partir de deux images : calcule d&apos;abord{" "}
            <Math tex="a" /> avec la formule du coefficient, remplace-le dans <Math tex="f(x)=ax+b" />, puis utilise
            une des deux images connues pour isoler <Math tex="b" />.
          </p>
        </Callout>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="5 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={5} celebrationTitle="Bravo, les 5 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la fonction linéaire et la fonction affine.">
          <ExerciseCard
            id="1"
            index={1}
            title="Calcul et construction"
            items={
              <div className="text-sm">
                <p>Le plan est rapporté à un repère orthonormé <Math tex="(O,I,J)" />.</p>
                <ol className="mt-2 list-decimal space-y-2 pl-5">
                  <li>
                    Soit <Math tex="f" /> la fonction linéaire dont la représentation graphique passe par <Math tex="K(2,3)" />.
                    <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
                      <li>Vérifie que <Math tex="f(x)=\dfrac32x" />.</li>
                      <li>Calcule <Math tex="f(-4)" />.</li>
                      <li>Détermine le nombre qui a pour image 6 par <Math tex="f" />.</li>
                    </ol>
                  </li>
                  <li>
                    On considère la fonction affine <Math tex="g" /> telle que <Math tex="g(0)=6" /> et <Math tex="g(4)=0" />.
                    Détermine l&apos;expression de <Math tex="g(x)" />.
                  </li>
                  <li>Construis les représentations graphiques de <Math tex="f" /> et <Math tex="g" /> dans un même repère <Math tex="(O,I,J)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1a) (D) passe par K(2,3) donc f(2)=3. f linéaire donc f(x)=ax :</p>
                  <p><Math tex="a=\dfrac{f(2)}{2}=\dfrac32 \quad\text{d'où}\quad f(x)=\dfrac32x" /></p>
                </div>
                <div>
                  <p className="font-semibold">1b)</p>
                  <p><Math tex="f(-4)=\dfrac32\times(-4)=-6" /></p>
                </div>
                <div>
                  <p className="font-semibold">1c) Soit m l&apos;antécédent de 6 par f :</p>
                  <p><Math tex="\dfrac32m=6 \iff m=6\times\dfrac23=4" /></p>
                  <p>Le nombre qui a pour image 6 par f est 4.</p>
                </div>
                <div>
                  <p className="font-semibold">2) g affine donc g(x) = ax + b :</p>
                  <p><Math tex="a=\dfrac{g(0)-g(4)}{0-4}=\dfrac{6-0}{-4}=\dfrac{-3}{2}" /></p>
                  <p><Math tex="g(4)=-6+b \;\text{et}\; g(4)=0 \iff -6+b=0 \iff b=6" /></p>
                  <p className="font-semibold text-green-700">Donc : <Math tex="g(x)=\dfrac{-3}{2}x+6" /></p>
                </div>
                <div>
                  <p className="font-semibold">3) f linéaire donc (D) passe par O(0,0) et K(2,3) ; g affine donc (Δ) passe par A(0,6) et B(4,0).</p>
                  <Graph>
                    <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full max-w-xs">
                      <defs><marker id="arrg4" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
                      <rect width="320" height="320" fill="white" rx="12"/>
                      <line x1="30.0" y1="30" x2="30.0" y2="290" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="73.3" y1="30" x2="73.3" y2="290" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="116.7" y1="30" x2="116.7" y2="290" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="160.0" y1="30" x2="160.0" y2="290" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="203.3" y1="30" x2="203.3" y2="290" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="246.7" y1="30" x2="246.7" y2="290" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="290.0" y1="30" x2="290.0" y2="290" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="290.0" x2="290" y2="290.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="257.5" x2="290" y2="257.5" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="225.0" x2="290" y2="225.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="192.5" x2="290" y2="192.5" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="160.0" x2="290" y2="160.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="127.5" x2="290" y2="127.5" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="95.0" x2="290" y2="95.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="62.5" x2="290" y2="62.5" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="30" y1="30.0" x2="290" y2="30.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="22" y1="257.5" x2="300" y2="257.5" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg4)"/>
                      <line x1="73.3" y1="298" x2="73.3" y2="20" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg4)"/>
                      <line x1="-13.3" y1="355.0" x2="333.3" y2="-35.0" stroke="#2563eb" strokeWidth="2.5"/>
                      <line x1="-13.3" y1="-35.0" x2="333.3" y2="355.0" stroke="#7c3aed" strokeWidth="2.5"/>
                      <circle cx="116.7" cy="257.5" r="2.2" fill="#334155"/>
                      <text x="113.7" y="272.5" fontSize="11" fill="#334155" fontStyle="italic">I</text>
                      <circle cx="73.3" cy="225.0" r="2.2" fill="#334155"/>
                      <text x="58.3" y="229.0" fontSize="11" fill="#334155" fontStyle="italic">J</text>
                      <text x="59.3" y="272.5" fontSize="11" fill="#334155" fontStyle="italic">O</text>
                      <circle cx="73.3" cy="257.5" r="3.3" fill="#0f172a"/>
                      <text x="58.3" y="273.5" fontSize="12.5" fontWeight="700" fill="#0f172a" fontStyle="italic">O</text>
                      <circle cx="160.0" cy="160.0" r="3.3" fill="#2563eb"/>
                      <text x="168.0" y="154.0" fontSize="12.5" fontWeight="700" fill="#2563eb" fontStyle="italic">K</text>
                      <circle cx="73.3" cy="62.5" r="3.3" fill="#7c3aed"/>
                      <text x="57.3" y="58.5" fontSize="12.5" fontWeight="700" fill="#7c3aed" fontStyle="italic">A</text>
                      <circle cx="246.7" cy="257.5" r="3.3" fill="#7c3aed"/>
                      <text x="252.7" y="273.5" fontSize="12.5" fontWeight="700" fill="#7c3aed" fontStyle="italic">B</text>
                      <text x="248.8" y="43.0" fontSize="13" fontWeight="700" fill="#2563eb" fontStyle="italic">(D)</text>
                      <text x="190.8" y="301.9" fontSize="13" fontWeight="700" fill="#7c3aed" fontStyle="italic">(Δ)</text>
                    </svg>
                  </Graph>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Calcul et lecture graphique"
            items={
              <div className="text-sm">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    On considère la fonction linéaire <Math tex="g" /> telle que <Math tex="g(x)=\dfrac12x" />.
                    <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
                      <li>Calcule l&apos;image de −4 par <Math tex="g" />.</li>
                      <li>Quel est le nombre qui a pour image 6 par <Math tex="g" /> ?</li>
                      <li>Construis la représentation graphique de <Math tex="g" /> dans un repère <Math tex="(O,I,J)" />.</li>
                    </ol>
                  </li>
                  <li>
                    Dans la figure ci-dessous, la droite <Math tex="(D)" /> est la représentation graphique de la
                    fonction affine <Math tex="f" />.
                    <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
                      <li>Détermine l&apos;image de 2 par <Math tex="f" />.</li>
                      <li>Quel est le nombre qui a pour image 1 par <Math tex="f" /> ?</li>
                      <li>Détermine <Math tex="f(x)" /> en fonction de <Math tex="x" />.</li>
                    </ol>
                  </li>
                </ol>
                <Graph className="mt-4" caption="Lis les coordonnées de deux points de (D) sur la grille">
                  <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-xs">
                    <defs><marker id="arrg5" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
                    <rect width="300" height="300" fill="white" rx="12"/>
                    <line x1="26.0" y1="26" x2="26.0" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="61.4" y1="26" x2="61.4" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="96.9" y1="26" x2="96.9" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="132.3" y1="26" x2="132.3" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="167.7" y1="26" x2="167.7" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="203.1" y1="26" x2="203.1" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="238.6" y1="26" x2="238.6" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="274.0" y1="26" x2="274.0" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="274.0" x2="274" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="246.4" x2="274" y2="246.4" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="218.9" x2="274" y2="218.9" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="191.3" x2="274" y2="191.3" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="163.8" x2="274" y2="163.8" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="136.2" x2="274" y2="136.2" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="108.7" x2="274" y2="108.7" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="81.1" x2="274" y2="81.1" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="53.6" x2="274" y2="53.6" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="26" y1="26.0" x2="274" y2="26.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="18" y1="191.3" x2="284" y2="191.3" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg5)"/>
                    <line x1="132.3" y1="282" x2="132.3" y2="16" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg5)"/>
                    <line x1="-9.4" y1="384.2" x2="309.4" y2="-111.8" stroke="#1d4ed8" strokeWidth="2.5"/>
                    <circle cx="167.7" cy="191.3" r="2.2" fill="#334155"/>
                    <text x="164.7" y="206.3" fontSize="11" fill="#334155" fontStyle="italic">I</text>
                    <circle cx="132.3" cy="163.8" r="2.2" fill="#334155"/>
                    <text x="117.3" y="167.8" fontSize="11" fill="#334155" fontStyle="italic">J</text>
                    <text x="118.3" y="206.3" fontSize="11" fill="#334155" fontStyle="italic">O</text>
                    <text x="210.2" y="37.0" fontSize="13" fontWeight="700" fill="#1d4ed8" fontStyle="italic">(D)</text>
                  </svg>
                </Graph>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1a)</p>
                  <p><Math tex="g(-4)=\dfrac12\times(-4)=\dfrac{-4}{2}=-2" /></p>
                </div>
                <div>
                  <p className="font-semibold">1b) g(x)=6 signifie 1/2 · x = 6. En multipliant par 2 :</p>
                  <p><Math tex="x=12" /></p>
                  <p>Le nombre qui a pour image 6 par g est 12.</p>
                </div>
                <div>
                  <p className="font-semibold">1c) g linéaire donc (Δ) passe par l&apos;origine O et A(2,1) :</p>
                  <Graph className="max-w-[220px]">
                    <svg viewBox="0 0 240 240" className="mx-auto h-auto w-full max-w-[200px]">
                      <defs><marker id="arrg6" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
                      <rect width="240" height="240" fill="white" rx="12"/>
                      <line x1="22.0" y1="22" x2="22.0" y2="218" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="54.7" y1="22" x2="54.7" y2="218" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="87.3" y1="22" x2="87.3" y2="218" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="120.0" y1="22" x2="120.0" y2="218" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="152.7" y1="22" x2="152.7" y2="218" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="185.3" y1="22" x2="185.3" y2="218" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="218.0" y1="22" x2="218.0" y2="218" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="22" y1="218.0" x2="218" y2="218.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="22" y1="178.8" x2="218" y2="178.8" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="22" y1="139.6" x2="218" y2="139.6" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="22" y1="100.4" x2="218" y2="100.4" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="22" y1="61.2" x2="218" y2="61.2" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="22" y1="22.0" x2="218" y2="22.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="14" y1="139.6" x2="228" y2="139.6" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg6)"/>
                      <line x1="120.0" y1="226" x2="120.0" y2="12" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg6)"/>
                      <line x1="-10.7" y1="218.0" x2="250.7" y2="61.2" stroke="#2563eb" strokeWidth="2.5"/>
                      <circle cx="152.7" cy="139.6" r="2.2" fill="#334155"/>
                      <text x="149.7" y="154.6" fontSize="11" fill="#334155" fontStyle="italic">I</text>
                      <circle cx="120.0" cy="100.4" r="2.2" fill="#334155"/>
                      <text x="105.0" y="104.4" fontSize="11" fill="#334155" fontStyle="italic">J</text>
                      <text x="106.0" y="154.6" fontSize="11" fill="#334155" fontStyle="italic">O</text>
                      <circle cx="120.0" cy="139.6" r="3.3" fill="#0f172a"/>
                      <text x="105.0" y="154.6" fontSize="12.5" fontWeight="700" fill="#0f172a" fontStyle="italic">O</text>
                      <circle cx="185.3" cy="100.4" r="3.3" fill="#2563eb"/>
                      <text x="192.3" y="94.4" fontSize="12.5" fontWeight="700" fill="#2563eb" fontStyle="italic">A</text>
                      <text x="178.8" y="33.8" fontSize="13" fontWeight="700" fill="#2563eb" fontStyle="italic">(Δ)</text>
                    </svg>
                  </Graph>
                </div>
                <p className="font-semibold">2a) D&apos;après le graphe : f(2) = 5</p>
                <p className="font-semibold">2b) Le nombre qui a pour image 1 par f est 0 (c&apos;est-à-dire f(0)=1).</p>
                <div>
                  <p className="font-semibold">2c)</p>
                  <p><Math tex="a=\dfrac{f(2)-f(0)}{2-0}=\dfrac{5-1}{2}=2 \quad\text{d'où}\quad f(x)=2x+b" /></p>
                  <p><Math tex="f(0)=2\times0+b=b \;\text{et}\; f(0)=1 \iff b=1" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="f(x)=2x+1" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Calcul et construction"
            items={
              <div className="text-sm">
                <p><Math tex="f" /> et <Math tex="g" /> sont deux fonctions définies par <Math tex="f:x\to2x" /> et <Math tex="g:x\to4x-1" />.</p>
                <ol className="mt-2 list-decimal space-y-2 pl-5">
                  <li>Calcule <Math tex="f(2)" />, <Math tex="g(2)" />, <Math tex="g(0)" /> et <Math tex="g(1)" />.</li>
                  <li>Détermine <Math tex="a" />, l&apos;antécédent de −20 par <Math tex="f" />, et <Math tex="b" />, l&apos;antécédent de −10 par <Math tex="g" />.</li>
                  <li>Dans un repère orthogonal, trace <Math tex="(C_f)" /> et <Math tex="(C_g)" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1)</p>
                  <p><Math tex="f(2)=2\times2=4\,;\quad g(2)=4\times2-1=7" /></p>
                  <p><Math tex="g(0)=4\times0-1=-1\,;\quad g(1)=4\times1-1=3" /></p>
                </div>
                <div>
                  <p className="font-semibold">2) a antécédent de −20 par f signifie f(a) = −20 :</p>
                  <p><Math tex="f(x)=2x \;\Rightarrow\; 2a=-20 \iff a=\dfrac{-20}{2}=-10" /></p>
                  <p className="mt-1 font-semibold">b antécédent de −10 par g signifie g(b) = −10 :</p>
                  <p><Math tex="g(x)=4x-1 \;\Rightarrow\; 4b-1=-10 \iff b=\dfrac{-9}{4}" /></p>
                  <p className="font-semibold text-green-700">Donc : <Math tex="a=-10" /> et <Math tex="b=\dfrac{-9}{4}" /></p>
                </div>
                <div>
                  <p className="font-semibold">3) f(2)=4 donc (Cf) passe par O(0,0) et A(2,4). g(0)=−1 et g(1)=3 donc (Cg) passe par B(0,−1) et C(1,3).</p>
                  <Graph>
                    <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-xs">
                      <defs><marker id="arrg7" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
                      <rect width="300" height="300" fill="white" rx="12"/>
                      <line x1="26.0" y1="26" x2="26.0" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="75.6" y1="26" x2="75.6" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="125.2" y1="26" x2="125.2" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="174.8" y1="26" x2="174.8" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="224.4" y1="26" x2="224.4" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="274.0" y1="26" x2="274.0" y2="274" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="274.0" x2="274" y2="274.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="243.0" x2="274" y2="243.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="212.0" x2="274" y2="212.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="181.0" x2="274" y2="181.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="150.0" x2="274" y2="150.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="119.0" x2="274" y2="119.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="88.0" x2="274" y2="88.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="57.0" x2="274" y2="57.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="26" y1="26.0" x2="274" y2="26.0" stroke="#e2e8f0" strokeWidth="1"/>
                      <line x1="18" y1="181.0" x2="284" y2="181.0" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg7)"/>
                      <line x1="125.2" y1="282" x2="125.2" y2="16" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg7)"/>
                      <line x1="-23.6" y1="367.0" x2="323.6" y2="-67.0" stroke="#2563eb" strokeWidth="2.5"/>
                      <line x1="-23.6" y1="584.0" x2="323.6" y2="-284.0" stroke="#7c3aed" strokeWidth="2.5"/>
                      <circle cx="174.8" cy="181.0" r="2.2" fill="#334155"/>
                      <text x="171.8" y="196.0" fontSize="11" fill="#334155" fontStyle="italic">I</text>
                      <circle cx="125.2" cy="150.0" r="2.2" fill="#334155"/>
                      <text x="110.2" y="154.0" fontSize="11" fill="#334155" fontStyle="italic">J</text>
                      <text x="111.2" y="196.0" fontSize="11" fill="#334155" fontStyle="italic">O</text>
                      <circle cx="125.2" cy="181.0" r="3.3" fill="#0f172a"/>
                      <text x="110.2" y="197.0" fontSize="12.5" fontWeight="700" fill="#0f172a" fontStyle="italic">O</text>
                      <circle cx="224.4" cy="57.0" r="3.3" fill="#2563eb"/>
                      <text x="231.4" y="51.0" fontSize="12.5" fontWeight="700" fill="#2563eb" fontStyle="italic">A</text>
                      <circle cx="125.2" cy="212.0" r="3.3" fill="#7c3aed"/>
                      <text x="109.2" y="228.0" fontSize="12.5" fontWeight="700" fill="#7c3aed" fontStyle="italic">B</text>
                      <circle cx="174.8" cy="88.0" r="3.3" fill="#7c3aed"/>
                      <text x="182.8" y="82.0" fontSize="12.5" fontWeight="700" fill="#7c3aed" fontStyle="italic">C</text>
                      <text x="202.1" y="41.5" fontSize="13" fontWeight="700" fill="#2563eb" fontStyle="italic">(Cf)</text>
                      <text x="162.4" y="41.5" fontSize="13" fontWeight="700" fill="#7c3aed" fontStyle="italic">(Cg)</text>
                    </svg>
                  </Graph>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Calcul et appartenance"
            items={
              <div className="text-sm">
                <p>
                  <Math tex="f" /> est une fonction linéaire telle que <Math tex="f(-2)=8" />, et <Math tex="g" /> est
                  une fonction affine telle que <Math tex="g(2)=3" /> et <Math tex="g(3)=9" />.
                </p>
                <ol className="mt-2 list-decimal space-y-2 pl-5">
                  <li>Détermine <Math tex="f(x)" /> et <Math tex="g(x)" />.</li>
                  <li>Calcule le nombre qui a pour image 15 par <Math tex="g" />.</li>
                  <li>Le point <Math tex="A\!\left(\dfrac54,5\right)" /> appartient-il à <Math tex="(C_f)" /> ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1) f linéaire donc f(x) = ax :</p>
                  <p><Math tex="a=\dfrac{f(-2)}{-2}=\dfrac{8}{-2}=-4 \quad\text{d'où}\quad f(x)=-4x" /></p>
                  <p className="mt-1">g affine donc g(x) = a&apos;x + b :</p>
                  <p><Math tex="a'=\dfrac{g(3)-g(2)}{3-2}=\dfrac{9-3}{1}=6 \quad\text{d'où}\quad g(x)=6x+b" /></p>
                  <p><Math tex="g(2)=12+b \;\text{et}\; g(2)=3 \iff 12+b=3 \iff b=-9" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="g(x)=6x-9" /></p>
                </div>
                <div>
                  <p className="font-semibold">2)</p>
                  <p><Math tex="g(k)=15 \iff 6k-9=15 \iff k=\dfrac{24}{6}=4" /></p>
                  <p>Le nombre qui a pour image 15 par g est 4.</p>
                </div>
                <div>
                  <p className="font-semibold">3)</p>
                  <p><Math tex="f\!\left(\dfrac54\right)=-4\times\dfrac54=-5\neq5" /></p>
                  <p className="font-semibold text-green-700">Donc le point A(5/4, 5) n&apos;appartient pas à (Cf)</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Lecture graphique"
            items={
              <div className="text-sm">
                <p>Le graphique ci-dessous représente deux fonctions <Math tex="f" /> et <Math tex="g" /> :</p>
                <Graph className="mt-3" caption={<>Droite rouge : <Math tex="f" /> · Droite bleue : <Math tex="g" /></>}>
                  <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full max-w-xs">
                    <defs><marker id="arrg8" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>
                    <rect width="320" height="320" fill="white" rx="12"/>
                    <line x1="28.0" y1="28" x2="28.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="61.0" y1="28" x2="61.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="94.0" y1="28" x2="94.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="127.0" y1="28" x2="127.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="160.0" y1="28" x2="160.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="193.0" y1="28" x2="193.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="226.0" y1="28" x2="226.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="259.0" y1="28" x2="259.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="292.0" y1="28" x2="292.0" y2="292" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="292.0" x2="292" y2="292.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="262.7" x2="292" y2="262.7" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="233.3" x2="292" y2="233.3" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="204.0" x2="292" y2="204.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="174.7" x2="292" y2="174.7" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="145.3" x2="292" y2="145.3" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="116.0" x2="292" y2="116.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="86.7" x2="292" y2="86.7" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="57.3" x2="292" y2="57.3" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="28" y1="28.0" x2="292" y2="28.0" stroke="#e2e8f0" strokeWidth="1"/>
                    <line x1="20" y1="174.7" x2="302" y2="174.7" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg8)"/>
                    <line x1="160.0" y1="300" x2="160.0" y2="18" stroke="#334155" strokeWidth="1.6" markerEnd="url(#arrg8)"/>
                    <line x1="-5.0" y1="380.0" x2="325.0" y2="-206.7" stroke="#e11d48" strokeWidth="2.5"/>
                    <line x1="-5.0" y1="28.0" x2="325.0" y2="321.3" stroke="#2563eb" strokeWidth="2.5"/>
                    <circle cx="193.0" cy="174.7" r="2.2" fill="#334155"/>
                    <text x="190.0" y="189.7" fontSize="11" fill="#334155" fontStyle="italic">I</text>
                    <circle cx="160.0" cy="145.3" r="2.2" fill="#334155"/>
                    <text x="145.0" y="149.3" fontSize="11" fill="#334155" fontStyle="italic">J</text>
                    <text x="146.0" y="189.7" fontSize="11" fill="#334155" fontStyle="italic">O</text>
                    <text x="178.2" y="39.7" fontSize="13" fontWeight="700" fill="#e11d48" fontStyle="italic">f</text>
                    <text x="51.1" y="69.1" fontSize="13" fontWeight="700" fill="#2563eb" fontStyle="italic">g</text>
                  </svg>
                </Graph>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-rose-100/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-rose-700">Fonction f</p>
                    <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5 text-sm">
                      <li>Quelle est la nature de <Math tex="f" /> ?</li>
                      <li>Calcule <Math tex="f(-3)" />.</li>
                      <li>Quel est l&apos;antécédent de 1 par <Math tex="f" /> ?</li>
                      <li>Trouve l&apos;expression de <Math tex="f" />.</li>
                    </ol>
                  </div>
                  <div className="rounded-xl bg-blue-100/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Fonction g</p>
                    <ol className="mt-2 list-[lower-alpha] space-y-1 pl-5 text-sm">
                      <li>Quelle est la nature de <Math tex="g" /> ?</li>
                      <li>Calcule <Math tex="g(3)" />.</li>
                      <li>Quel est l&apos;antécédent de −2 par <Math tex="g" /> ?</li>
                      <li>Trouve l&apos;expression de <Math tex="g" />.</li>
                    </ol>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div className="rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="font-semibold text-rose-700">Fonction f</p>
                  <p className="mt-2">a) La droite de f ne passe <strong>pas</strong> par l&apos;origine, donc f est <strong>affine</strong>.</p>
                  <p className="mt-2">b) En projetant −3 sur la droite puis sur l&apos;axe des ordonnées, on lit f(−3) = −3.</p>
                  <p className="mt-2">c) En projetant 1 de l&apos;axe des ordonnées sur la droite puis sur l&apos;axe des abscisses, on lit −1 : l&apos;antécédent de 1 par f est −1, c&apos;est-à-dire f(−1)=1.</p>
                  <p className="mt-2">d) f est affine donc f(x) = ax + b :</p>
                  <p><Math tex="a=\dfrac{f(-3)-f(-1)}{-3-(-1)}=\dfrac{-3-1}{-2}=2" /></p>
                  <p><Math tex="f(x)=2x+b \;\text{donc}\; f(-3)=-6+b=-3 \iff b=3" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="f(x)=2x+3" /></p>
                </div>
                <div className="rounded-xl border border-green-500/20 bg-surface p-4">
                  <p className="font-semibold text-blue-700">Fonction g</p>
                  <p className="mt-2">a) La droite de g <strong>passe</strong> par l&apos;origine, donc g est <strong>linéaire</strong>.</p>
                  <p className="mt-2">b) g(3) = −3</p>
                  <p className="mt-2">c) L&apos;antécédent de −2 par g est 2.</p>
                  <p className="mt-2">d)</p>
                  <p><Math tex="a=\dfrac{g(3)}{3}=\dfrac{-3}{3}=-1" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="g(x)=-x" /></p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
