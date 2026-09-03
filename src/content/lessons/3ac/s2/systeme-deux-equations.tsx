import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Callout,
  Math,
  MathBlock,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Système de deux équations · Cours et exercices corrigés | 3AC",
  description:
    "Cours complet sur les systèmes de deux équations du premier degré à deux inconnues : méthode par substitution, méthode par combinaison linéaire, résolution graphique et résolution de problèmes, avec 6 exercices corrigés en détail. 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 5",
  heroTitle: "Système de deux équations",
  heroSubtitle:
    "Deux équations à vérifier en même temps : il faut trouver le seul couple (x ; y) qui convient aux deux à la fois.",
  footerNote: "Système de deux équations · Mathématiques, 3ème année collège, semestre 2.",
  sections: [
    { id: "systeme", label: "Système" },
    { id: "problemes", label: "Problèmes" },
    { id: "memo", label: "Mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Helpers locaux ===================== */

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n})</span> {children}
    </div>
  );
}

function Step({ n, title, children }: { n: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <div className="flex-1 pb-0.5">
        <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">{title}</p>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Worked({ children }: { children: ReactNode }) {
  return <div className="space-y-4 rounded-xl border border-border p-5">{children}</div>;
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-lg border border-border bg-surface px-3 py-2 text-sm">{children}</span>;
}

function SubHeading({ children, hint }: { children: ReactNode; hint?: ReactNode }) {
  return (
    <div className="mt-10 mb-4">
      <h3 className="font-display text-lg font-semibold text-foreground">{children}</h3>
      {hint ? <p className="mt-1 text-sm text-foreground-muted">{hint}</p> : null}
    </div>
  );
}

/** Mini result card used for exercises 3, 4 and 5 (five small systems each). */
function MiniCard({ n, children, result }: { n: string; children: ReactNode; result: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="text-xs font-bold text-foreground-muted uppercase">
        Système <Math tex={`(${n})`} />
      </p>
      <div className="mt-2 space-y-1 text-sm text-foreground-muted">{children}</div>
      <p className="mt-2 text-sm font-bold text-green-700">
        <Math tex={result} />
      </p>
    </div>
  );
}

/** Shared grid + axes background reused by the three "position relative" diagrams. */
function PlaneAxes() {
  return (
    <>
      <g stroke="#e2e8f0" strokeWidth="1">
        <line x1="20" y1="20" x2="20" y2="244" />
        <line x1="48" y1="20" x2="48" y2="244" />
        <line x1="76" y1="20" x2="76" y2="244" />
        <line x1="104" y1="20" x2="104" y2="244" />
        <line x1="132" y1="20" x2="132" y2="244" />
        <line x1="160" y1="20" x2="160" y2="244" />
        <line x1="188" y1="20" x2="188" y2="244" />
        <line x1="216" y1="20" x2="216" y2="244" />
        <line x1="20" y1="20" x2="216" y2="20" />
        <line x1="20" y1="48" x2="216" y2="48" />
        <line x1="20" y1="76" x2="216" y2="76" />
        <line x1="20" y1="104" x2="216" y2="104" />
        <line x1="20" y1="132" x2="216" y2="132" />
        <line x1="20" y1="160" x2="216" y2="160" />
        <line x1="20" y1="188" x2="216" y2="188" />
        <line x1="20" y1="216" x2="216" y2="216" />
        <line x1="20" y1="244" x2="216" y2="244" />
      </g>
      <g stroke="#94a3b8" strokeWidth="1.5">
        <line x1="104" y1="244" x2="104" y2="12" />
        <line x1="16" y1="132" x2="228" y2="132" />
      </g>
      <polygon points="104,8 100,16 108,16" fill="#94a3b8" />
      <polygon points="228,132 220,128 220,136" fill="#94a3b8" />
      <text x="110" y="146" fontSize="9" fill="#94a3b8">O</text>
    </>
  );
}

function LineLegend() {
  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-foreground-muted">
      <span className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#4f46e5" }} />
        (D)
      </span>
      <span className="flex items-center gap-1">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#e11d48" }} />
        (Δ)
      </span>
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
          { value: "2", label: "méthodes de résolution" },
          { value: "6", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#systeme"
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
          <div className="relative flex select-none flex-col items-center gap-3">
            <span className="font-serif text-[4.5rem] leading-none font-bold text-white italic sm:text-[5.5rem]">
              x ; y
            </span>
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center font-mono text-sm text-orange-400 sm:text-base">
              ax+by+c=0
              <br />
              a&apos;x+b&apos;y+c&apos;=0
            </div>
          </div>
        }
      />

      {/* ===================== I. SYSTÈME D'ÉQUATIONS ===================== */}
      <LessonSection
        id="systeme"
        kicker="01 · La définition"
        title="Système de deux équations à deux inconnues"
        tone="light"
        description="Un système, c'est deux équations qu'on doit vérifier en même temps."
      >
        <FormulaBlock
          tex="\begin{cases}ax+by+c=0\\a'x+b'y+c'=0\end{cases}"
          caption="a, b, c, a′, b′, c′ : réels donnés · x, y : inconnues"
        />

        <p className="mt-4 font-mono text-xs text-foreground-muted uppercase">exemples</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Chip><Math tex="\begin{cases}2x+y-1=0\\-3x-4y=-2\end{cases}" /></Chip>
          <Chip><Math tex="\begin{cases}\dfrac12x-3y=\dfrac23\\-3x+y+2=0\end{cases}" /></Chip>
          <Chip><Math tex="\begin{cases}\dfrac{x+2y}{2}-1=0\\3x+y=-4\end{cases}" /></Chip>
        </div>

        <SubHeading>Résoudre un système</SubHeading>
        <Callout variant="danger" title="Définition">
          <p>
            <strong>Résoudre un système</strong> de deux équations à deux inconnues <Math tex="x" /> et <Math tex="y" />, c&apos;est trouver tous les couples <Math tex="(x\,;y)" />, s&apos;ils existent, pour lesquels les deux équations sont vraies simultanément.
          </p>
        </Callout>

        <p className="mt-8 text-sm font-semibold text-foreground">Deux méthodes de résolution</p>
        <div className="mt-3 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="rounded-xl border border-border p-5">
            <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Méthode par substitution</p>
            <Callout variant="warning" title="À utiliser quand…">
              <p>l&apos;une des deux inconnues a pour coefficient <Math tex="1" /> ou <Math tex="-1" /> dans l&apos;une des équations.</p>
            </Callout>

            <p className="mt-4 text-sm">Exemple : résolvons</p>
            <MathBlock tex="\begin{cases}(1)\ \ 3x-y=1\\(2)\ \ 2x+3y=19\end{cases}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-xs font-semibold text-foreground-muted uppercase">Ici, y a pour coefficient −1 dans (1)</p>

            <div className="mt-3">
              <Worked>
                <Step n={1} title="On exprime y en fonction de x dans (1)">
                  <MathBlock tex="3x-y=1 \;\Longrightarrow\; -y=1-3x \;\Longrightarrow\; (3)\ \ y=3x-1" className="katex-formula-block text-base" />
                </Step>
                <Step n={2} title="On substitue y par 3x−1 dans (2), puis on calcule x">
                  <MathBlock tex="\begin{aligned}2x+3y&=19\\2x+3(3x-1)&=19\\2x+9x-3&=19\\11x&=22\\x&=2\end{aligned}" className="katex-formula-block text-base" />
                </Step>
                <Step n={3} title="On remplace x par 2 dans (3), puis on calcule y">
                  <MathBlock tex="y=3\times2-1=5" className="katex-formula-block text-base" />
                </Step>
              </Worked>
            </div>
            <p className="mt-3 rounded-lg bg-green-100/60 px-3 py-2 text-sm font-bold text-green-700">
              D&apos;où : le système admet pour unique solution le couple <Math tex="(2\,;5)" />.
            </p>
          </div>

          <div className="rounded-xl border border-border p-5">
            <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Méthode par combinaison linéaire</p>
            <Callout variant="warning" title="À utiliser quand…">
              <p>aucun coefficient n&apos;est égal à <Math tex="1" /> ou <Math tex="-1" /> : on utilise cette méthode dans tous les autres cas.</p>
            </Callout>

            <p className="mt-4 text-sm">Exemple : résolvons</p>
            <MathBlock tex="\begin{cases}(1)\ \ {-5x}+4y=-1\\(2)\ \ 3x-2y=1\end{cases}" className="katex-formula-block mt-2 text-base" />
            <p className="mt-2 text-xs font-semibold text-foreground-muted uppercase">Aucun coefficient n&apos;est égal à 1 ou −1</p>

            <div className="mt-3">
              <Worked>
                <Step n={1} title="On multiplie (2) par 2, pour retrouver le coefficient de y de (1)">
                  <MathBlock tex="(2)\times2 \;\Longrightarrow\; (3)\ \ 6x-4y=2" className="katex-formula-block text-base" />
                </Step>
                <Step n={2} title="On additionne (1) et (3) membre à membre, puis on calcule x">
                  <MathBlock tex="\begin{aligned}(-5x+4y)+(6x-4y)&=-1+2\\x&=1\end{aligned}" className="katex-formula-block text-base" />
                </Step>
                <Step n={3} title="On remplace x par 1 dans (3), puis on calcule y">
                  <MathBlock tex="\begin{aligned}6\times1-4y&=2\\-4y&=2-6=-4\\y&=1\end{aligned}" className="katex-formula-block text-base" />
                </Step>
              </Worked>
            </div>
            <p className="mt-3 rounded-lg bg-green-100/60 px-3 py-2 text-sm font-bold text-green-700">
              D&apos;où : le système admet pour unique solution le couple <Math tex="(1\,;1)" />.
            </p>
          </div>
        </div>

        <SubHeading hint="Chaque équation ax+by+c=0 représente une droite. Résoudre le système, c'est chercher les points communs à ces deux droites. Trois cas peuvent se présenter.">
          Résolution graphique d&apos;un système
        </SubHeading>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple 1</p>
            <MathBlock tex="\begin{cases}2x+y-1=0\\4x+2y=2\end{cases}" className="katex-formula-block mt-2 text-sm" />
            <MathBlock tex="\begin{aligned}(D)&:\ y=-2x+1\\(\Delta)&:\ y=-2x+1\end{aligned}" className="katex-formula-block mt-1 bg-surface text-sm" />
            <div className="mt-3 rounded-xl bg-surface-muted p-3">
              <svg viewBox="0 0 236 256" className="mx-auto h-auto w-full max-w-[210px]" role="img" aria-label="Deux droites confondues, identiques">
                <PlaneAxes />
                <line x1="20" y1="-64" x2="216" y2="328" stroke="#4f46e5" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="20" y1="-64" x2="216" y2="328" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round" />
              </svg>
              <LineLegend />
            </div>
            <p className="mt-3 text-sm text-foreground-muted">
              Même équation réduite ⇒ <strong className="text-foreground">droites confondues</strong>.
            </p>
            <p className="mt-1 text-sm font-bold text-foreground">Infinité de solutions.</p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple 2</p>
            <MathBlock tex="\begin{cases}3x+y-5=0\\6x+2y+1=0\end{cases}" className="katex-formula-block mt-2 text-sm" />
            <MathBlock tex="\begin{aligned}(D)&:\ y=-3x+5\\(\Delta)&:\ y=-3x-\dfrac12\end{aligned}" className="katex-formula-block mt-1 bg-surface text-sm" />
            <div className="mt-3 rounded-xl bg-surface-muted p-3">
              <svg viewBox="0 0 236 256" className="mx-auto h-auto w-full max-w-[210px]" role="img" aria-label="Deux droites strictement parallèles, sans point commun">
                <PlaneAxes />
                <line x1="20" y1="-260" x2="216" y2="328" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="20" y1="-106" x2="216" y2="482" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <LineLegend />
            </div>
            <p className="mt-3 text-sm text-foreground-muted">
              Même coefficient directeur, ordonnées différentes ⇒ <strong className="text-rose-600">droites strictement parallèles</strong>.
            </p>
            <p className="mt-1 text-sm font-bold text-rose-600">
              Aucune solution : <Math tex="S=\varnothing" />
            </p>
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="font-mono text-xs font-semibold text-foreground-muted uppercase">Exemple 3</p>
            <MathBlock tex="\begin{cases}2x-y-1=0\\-3x+y+2=0\end{cases}" className="katex-formula-block mt-2 text-sm" />
            <MathBlock tex="\begin{aligned}(D)&:\ y=2x-1\\(\Delta)&:\ y=3x-2\end{aligned}" className="katex-formula-block mt-1 bg-surface text-sm" />
            <div className="mt-3 rounded-xl bg-surface-muted p-3">
              <svg viewBox="0 0 236 256" className="mx-auto h-auto w-full max-w-[210px]" role="img" aria-label="Deux droites sécantes se coupant au point M(1;1)">
                <PlaneAxes />
                <line x1="20" y1="328" x2="216" y2="-64" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="20" y1="440" x2="216" y2="-148" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="132" cy="104" r="4.5" fill="#0f172a" stroke="white" strokeWidth="1.5" />
                <text x="138" y="100" fontSize="11" fontWeight="700" fill="#0f172a">M</text>
              </svg>
              <LineLegend />
            </div>
            <p className="mt-3 text-sm text-foreground-muted">
              Coefficients directeurs différents ⇒ <strong className="text-green-700">droites sécantes</strong> en un point <Math tex="M" />.
            </p>
            <p className="mt-1 text-sm font-bold text-green-700">
              Solution unique : <Math tex="M(1\,;1)" />
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. RÉSOLUTION DE PROBLÈMES ===================== */}
      <LessonSection
        id="problemes"
        kicker="02 · Sur le terrain"
        title="Résolution de problèmes"
        tone="light"
        description="On choisit deux inconnues, on traduit l'énoncé en système, on résout, puis on répond à la question posée."
      >
        <Callout variant="info" title="Méthode">
          <p>La résolution d&apos;un problème se déroule en 4 étapes :</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5">
            <li>Choisir des inconnues.</li>
            <li>Mise en système d&apos;équations.</li>
            <li>Résolution du système.</li>
            <li>Retour au problème.</li>
          </ol>
        </Callout>

        <div className="mt-5 rounded-xl border border-border p-5">
          <p className="text-sm italic text-foreground-muted">
            « Une usine fabrique deux sortes d&apos;objets : A et B. L&apos;objet A nécessite 2,4 kg d&apos;acier et 3 heures de fabrication. L&apos;objet B nécessite 4 kg d&apos;acier et 2 heures de fabrication. Combien d&apos;objets de chaque sorte a-t-on fabriqué en 67 heures de travail et en utilisant 80 kg d&apos;acier ? »
          </p>
          <div className="mt-4">
            <Worked>
              <Step n={1} title="Choix des inconnues">
                <p>
                  Soient <Math tex="x" /> le nombre d&apos;objets A, et <Math tex="y" /> le nombre d&apos;objets B fabriqués.
                </p>
              </Step>
              <Step n={2} title="Mise en système d'équations">
                <p>L&apos;acier : <Math tex="2{,}4x+4y=80" />. Les heures : <Math tex="3x+2y=67" />. D&apos;où le système :</p>
                <MathBlock tex="\begin{cases}(1)\ \ 2{,}4x+4y=80\\(2)\ \ 3x+2y=67\end{cases}" className="katex-formula-block mt-2 text-base" />
              </Step>
              <Step n={3} title="Résolution et vérification">
                <p>On multiplie (2) par <Math tex="-2" /> pour obtenir le même coefficient de <Math tex="y" /> :</p>
                <MathBlock tex="\begin{cases}(1)\ \ 2{,}4x+4y=80\\(3)\ \ {-6x}-4y=-134\end{cases}" className="katex-formula-block mt-2 text-base" />
                <p className="mt-2">On additionne (1) et (3) :</p>
                <MathBlock tex="\begin{aligned}2{,}4x+4y-6x-4y&=80-134\\-3{,}6x&=-54\\x&=\dfrac{-54}{-3{,}6}=15\end{aligned}" className="katex-formula-block mt-1 text-base" />
                <p className="mt-2">On remplace <Math tex="x" /> par <Math tex="15" /> dans (2) :</p>
                <MathBlock tex="\begin{aligned}3\times15+2y&=67\\45+2y&=67\\y&=11\end{aligned}" className="katex-formula-block mt-1 text-base" />
                <p className="mt-2 text-foreground-muted">
                  Vérification : <Math tex="2{,}4\times15+4\times11=36+44=80" /> ✓ et <Math tex="3\times15+2\times11=45+22=67" /> ✓
                </p>
              </Step>
              <Step n="✓" title="Retour au problème">
                <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <p className="text-2xl font-bold text-green-700">15 <span className="text-sm font-medium">objets</span></p>
                    <p className="text-xs font-medium text-foreground-muted">Objets A fabriqués</p>
                  </div>
                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <p className="text-2xl font-bold text-green-700">11 <span className="text-sm font-medium">objets</span></p>
                    <p className="text-xs font-medium text-foreground-muted">Objets B fabriqués</p>
                  </div>
                </div>
              </Step>
            </Worked>
          </div>
        </div>
      </LessonSection>

      {/* ===================== FICHE MÉMO ===================== */}
      <LessonSection
        id="memo"
        kicker="03 · Fiche mémo"
        title="Points clés à retenir"
        tone="muted"
        description="Les réflexes indispensables avant d'attaquer les exercices."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Quelle méthode choisir ?</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li className="flex items-center justify-between gap-2 border-b border-dashed border-border pb-1.5">
                <span>Un coefficient = 1 ou −1</span> <span className="font-semibold text-foreground">Substitution</span>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Sinon</span> <span className="font-semibold text-foreground">Combinaison linéaire</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">3 cas · lecture graphique</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li className="flex items-center justify-between gap-2 border-b border-dashed border-border pb-1.5">
                <span>Droites sécantes</span> <span className="font-semibold text-green-700">1 solution</span>
              </li>
              <li className="flex items-center justify-between gap-2 border-b border-dashed border-border pb-1.5">
                <span>Droites confondues</span> <span className="font-semibold text-foreground">Infinité</span>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Droites // strictes</span> <span className="font-semibold text-rose-600">Aucune</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="font-display font-semibold text-foreground">Toujours vérifier</p>
            <p className="mt-2 text-sm text-foreground-muted">
              Une fois le couple <Math tex="(x\,;y)" /> trouvé, on le remplace dans <strong>les deux équations</strong> du système de départ.
            </p>
            <MathBlock tex="a x_0+by_0+c=0 \ \ \text{et}\ \ a'x_0+b'y_0+c'=0" className="katex-formula-block mt-2 bg-surface-muted text-sm" />
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 sm:col-span-2">
            <p className="font-display font-semibold text-foreground">Méthode pour un problème concret</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">1. Choix des inconnues</div>
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">2. Mise en système</div>
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">3. Résolution</div>
              <div className="rounded-xl bg-surface-muted p-3 text-center text-xs font-semibold">4. Retour au problème</div>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="6 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={6} celebrationTitle="Bravo, les 6 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les systèmes de deux équations.">
          <ExerciseCard
            id="1"
            index={1}
            title="Équation à deux inconnues"
            itemsLabel="4 questions"
            items={
              <>
                <p className="text-sm">On considère l&apos;équation :</p>
                <MathBlock tex="7x-3y=5" className="katex-formula-block my-2 text-base" />
                <ol className="list-decimal space-y-1.5 pl-5 text-sm text-foreground-muted">
                  <li>Montrer que le couple <Math tex="(2\,;3)" /> est une solution de l&apos;équation.</li>
                  <li>
                    Est-ce que les couples <Math tex="(-1\,;5)" />, <Math tex="\left(\dfrac12\,;-\dfrac12\right)" />, <Math tex="(5\,;10)" /> sont des solutions ?
                  </li>
                  <li>Donner 3 solutions de l&apos;équation.</li>
                  <li>Résoudre l&apos;équation <Math tex="7x-3y=5" />.</li>
                </ol>
              </>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n={1}>
                  <MathBlock tex="7\times2-3\times3=14-9=5" className="katex-formula-block text-base" />
                  <p className="mt-1">L&apos;égalité est vraie ⇒ <Math tex="(2\,;3)" /> est bien une solution.</p>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <p><Math tex="7\times(-1)-3\times5=-7-15=-22\neq5" /> → non solution</p>
                  <p className="mt-1"><Math tex="7\times\dfrac12-3\times\left(-\dfrac12\right)=3{,}5+1{,}5=5" /> → solution</p>
                  <p className="mt-1"><Math tex="7\times5-3\times10=35-30=5" /> → solution</p>
                </CorrectionCard>
                <CorrectionCard n={3}>
                  <p>On choisit une valeur de <Math tex="x" /> et on calcule <Math tex="y=\dfrac{7x-5}{3}" /> :</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Chip><Math tex="(2\,;3)" /></Chip>
                    <Chip><Math tex="(5\,;10)" /></Chip>
                    <Chip><Math tex="(8\,;17)" /></Chip>
                  </div>
                </CorrectionCard>
                <CorrectionCard n={4}>
                  <MathBlock tex="7x-3y=5 \iff -3y=5-7x \iff y=\dfrac{7x-5}{3}" className="katex-formula-block text-base" />
                  <p className="mt-1">Une équation à deux inconnues admet une <strong>infinité de solutions</strong> :</p>
                  <p className="mt-1 rounded-lg bg-green-100/60 px-3 py-2 font-bold text-green-700">
                    <Math tex="S=\left\{\left(x\,;\dfrac{7x-5}{3}\right),\ x\in\mathbb{R}\right\}" />
                  </p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Reconnaître une solution"
            itemsLabel="2 questions"
            items={
              <>
                <p className="text-sm">1) Parmi ces systèmes, lesquels ont pour solution le couple <Math tex="(-1\,;2)" /> ?</p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <Chip><Math tex="(S_1)\begin{cases}3x+2y=1\\x-y=4\end{cases}" /></Chip>
                  <Chip><Math tex="(S_2)\begin{cases}5x+3y=2\\7x+4y=1\end{cases}" /></Chip>
                  <Chip><Math tex="(S_3)\begin{cases}9x+7y=5\\-4x+3y=10\end{cases}" /></Chip>
                  <Chip><Math tex="(S_4)\begin{cases}x+y=3\\6x+2y=3\end{cases}" /></Chip>
                </div>
                <p className="mt-4 text-sm">
                  2) Parmi ces couples, lesquels sont solutions de <Math tex="\begin{cases}2x+3y=7\\3x-y=5\end{cases}" /> ?
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Chip><Math tex="(-1\,;3)" /></Chip>
                  <Chip><Math tex="(2\,;1)" /></Chip>
                  <Chip><Math tex="(0\,;0)" /></Chip>
                  <Chip><Math tex="(3\,;-1)" /></Chip>
                </div>
              </>
            }
            correction={
              <div className="space-y-3 text-sm">
                <CorrectionCard n={1}>
                  <p><Math tex="(S_1)" /> : <Math tex="3(-1)+2(2)=1" /> ✓ mais <Math tex="-1-2=-3\neq4" /> ✗ → rejeté</p>
                  <p className="mt-1"><Math tex="(S_2)" /> : <Math tex="5(-1)+3(2)=1\neq2" /> ✗ → rejeté</p>
                  <p className="mt-1"><Math tex="(S_3)" /> : <Math tex="9(-1)+7(2)=5" /> ✓ et <Math tex="-4(-1)+3(2)=4+6=10" /> ✓ → les deux équations sont vérifiées !</p>
                  <p className="mt-1"><Math tex="(S_4)" /> : <Math tex="-1+2=1\neq3" /> ✗ → rejeté</p>
                  <p className="mt-2 rounded-lg bg-green-100/60 px-3 py-2 font-bold text-green-700">Seul <Math tex="(S_3)" /> admet <Math tex="(-1\,;2)" /> comme solution.</p>
                </CorrectionCard>
                <CorrectionCard n={2}>
                  <p><Math tex="(-1\,;3)" /> : <Math tex="2(-1)+3(3)=7" /> ✓ mais <Math tex="3(-1)-3=-6\neq5" /> ✗ → rejeté</p>
                  <p className="mt-1"><Math tex="(2\,;1)" /> : <Math tex="2(2)+3(1)=7" /> ✓ et <Math tex="3(2)-1=5" /> ✓ → solution !</p>
                  <p className="mt-1"><Math tex="(0\,;0)" /> : <Math tex="0\neq7" /> ✗ → rejeté</p>
                  <p className="mt-1"><Math tex="(3\,;-1)" /> : <Math tex="2(3)+3(-1)=3\neq7" /> ✗ → rejeté</p>
                  <p className="mt-2 rounded-lg bg-green-100/60 px-3 py-2 font-bold text-green-700">Seul <Math tex="(2\,;1)" /> est solution du système.</p>
                </CorrectionCard>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Méthode par substitution"
            itemsLabel="5 systèmes"
            items={
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                <Chip><Math tex="(S_1)\begin{cases}x+y=5\\x-y=1\end{cases}" /></Chip>
                <Chip><Math tex="(S_2)\begin{cases}x+y=15\\2x+y=21\end{cases}" /></Chip>
                <Chip><Math tex="(S_3)\begin{cases}3x-4y=24\\x+5y=19\end{cases}" /></Chip>
                <Chip><Math tex="(S_4)\begin{cases}2x-y=4\\5x-y=1\end{cases}" /></Chip>
                <Chip><Math tex="(S_5)\begin{cases}3x+2y=1\\x+2y=3\end{cases}" /></Chip>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <MiniCard n="S_1" result="S=\{(3\,;2)\}">
                  <p><Math tex="y=5-x" /></p>
                  <p><Math tex="x-(5-x)=1 \Rightarrow 2x=6 \Rightarrow x=3" /></p>
                  <p><Math tex="y=5-3=2" /></p>
                </MiniCard>
                <MiniCard n="S_2" result="S=\{(6\,;9)\}">
                  <p><Math tex="y=15-x" /></p>
                  <p><Math tex="2x+15-x=21 \Rightarrow x=6" /></p>
                  <p><Math tex="y=15-6=9" /></p>
                </MiniCard>
                <MiniCard n="S_3" result="S=\left\{\left(\dfrac{196}{19}\,;\dfrac{33}{19}\right)\right\}">
                  <p><Math tex="x=19-5y" /></p>
                  <p><Math tex="3(19-5y)-4y=24 \Rightarrow 57-19y=24" /></p>
                  <p><Math tex="y=\dfrac{33}{19}\ ;\ x=\dfrac{196}{19}" /></p>
                </MiniCard>
                <MiniCard n="S_4" result="S=\{(-1\,;-6)\}">
                  <p><Math tex="y=2x-4" /></p>
                  <p><Math tex="5x-(2x-4)=1 \Rightarrow 3x=-3 \Rightarrow x=-1" /></p>
                  <p><Math tex="y=2(-1)-4=-6" /></p>
                </MiniCard>
                <MiniCard n="S_5" result="S=\{(-1\,;2)\}">
                  <p><Math tex="x=3-2y" /></p>
                  <p><Math tex="3(3-2y)+2y=1 \Rightarrow 9-4y=1 \Rightarrow y=2" /></p>
                  <p><Math tex="x=3-2(2)=-1" /></p>
                </MiniCard>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Méthode par combinaison linéaire"
            itemsLabel="5 systèmes"
            items={
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                <Chip><Math tex="(S_1)\begin{cases}2x+3y=5\\5x-2y=3\end{cases}" /></Chip>
                <Chip><Math tex="(S_2)\begin{cases}4x+3y=27\\5x+4y=23\end{cases}" /></Chip>
                <Chip><Math tex="(S_3)\begin{cases}6x-5y=3\\7x-5y=-4\end{cases}" /></Chip>
                <Chip><Math tex="(S_4)\begin{cases}3x-5y=-2\\x+5y=4\end{cases}" /></Chip>
                <Chip><Math tex="(S_5)\begin{cases}3x+2y=1\\5x+3y=3\end{cases}" /></Chip>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <MiniCard n="S_1" result="S=\{(1\,;1)\}">
                  <p><Math tex="(\times2)\ 4x+6y=10" /></p>
                  <p><Math tex="(\times3)\ 15x-6y=9" /></p>
                  <p>On additionne : <Math tex="19x=19 \Rightarrow x=1" /></p>
                  <p><Math tex="2+3y=5 \Rightarrow y=1" /></p>
                </MiniCard>
                <MiniCard n="S_2" result="S=\{(39\,;-43)\}">
                  <p><Math tex="(\times4)\ 16x+12y=108" /></p>
                  <p><Math tex="(\times3)\ 15x+12y=69" /></p>
                  <p>On soustrait : <Math tex="x=39" /></p>
                  <p><Math tex="4(39)+3y=27 \Rightarrow y=-43" /></p>
                </MiniCard>
                <MiniCard n="S_3" result="S=\{(-7\,;-9)\}">
                  <p>Même coefficient de <Math tex="y" /></p>
                  <p>On soustrait : <Math tex="-x=7 \Rightarrow x=-7" /></p>
                  <p><Math tex="6(-7)-5y=3 \Rightarrow y=-9" /></p>
                </MiniCard>
                <MiniCard n="S_4" result="S=\left\{\left(\dfrac12\,;\dfrac{7}{10}\right)\right\}">
                  <p>Coefficients de <Math tex="y" /> opposés</p>
                  <p>On additionne : <Math tex="4x=2 \Rightarrow x=\dfrac12" /></p>
                  <p><Math tex="\dfrac12+5y=4 \Rightarrow y=\dfrac{7}{10}" /></p>
                </MiniCard>
                <MiniCard n="S_5" result="S=\{(3\,;-4)\}">
                  <p><Math tex="(\times3)\ 9x+6y=3" /></p>
                  <p><Math tex="(\times2)\ 10x+6y=6" /></p>
                  <p>On soustrait : <Math tex="x=3" /></p>
                  <p><Math tex="9+2y=1 \Rightarrow y=-4" /></p>
                </MiniCard>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Méthode au choix"
            itemsLabel="5 systèmes"
            items={
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                <Chip><Math tex="(S_1)\begin{cases}3x+4y=48\\5x+6y=75\end{cases}" /></Chip>
                <Chip><Math tex="(S_2)\begin{cases}7x+3y=1\\x-3y=7\end{cases}" /></Chip>
                <Chip><Math tex="(S_3)\begin{cases}5x+3y-6=0\\-5x+2y-1=0\end{cases}" /></Chip>
                <Chip><Math tex="(S_4)\begin{cases}3x-y=-3\\2x-3y=4\end{cases}" /></Chip>
                <Chip><Math tex="(S_5)\begin{cases}3x+7y=5\\5x-3y=-3\end{cases}" /></Chip>
              </div>
            }
            correction={
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <MiniCard n="S_1" result="S=\{(6\,;7{,}5)\}">
                  <p><Math tex="(\times3)\ 9x+12y=144" /></p>
                  <p><Math tex="(\times2)\ 10x+12y=150" /></p>
                  <p>On soustrait : <Math tex="x=6" /></p>
                  <p><Math tex="18+4y=48 \Rightarrow y=7{,}5" /></p>
                </MiniCard>
                <MiniCard n="S_2" result="S=\{(1\,;-2)\}">
                  <p>Coefficients de <Math tex="y" /> opposés</p>
                  <p>On additionne : <Math tex="8x=8 \Rightarrow x=1" /></p>
                  <p><Math tex="1-3y=7 \Rightarrow y=-2" /></p>
                </MiniCard>
                <MiniCard n="S_3" result="S=\left\{\left(\dfrac{9}{25}\,;\dfrac{7}{5}\right)\right\}">
                  <p><Math tex="5x+3y=6\ ;\ -5x+2y=1" /></p>
                  <p>On additionne : <Math tex="5y=7 \Rightarrow y=\dfrac75" /></p>
                  <p><Math tex="5x+\dfrac{21}{5}=6 \Rightarrow x=\dfrac{9}{25}" /></p>
                </MiniCard>
                <MiniCard n="S_4" result="S=\left\{\left(-\dfrac{13}{7}\,;-\dfrac{18}{7}\right)\right\}">
                  <p><Math tex="y=3x+3" /></p>
                  <p><Math tex="2x-3(3x+3)=4 \Rightarrow -7x=13" /></p>
                  <p><Math tex="x=-\dfrac{13}{7}\ ;\ y=-\dfrac{18}{7}" /></p>
                </MiniCard>
                <MiniCard n="S_5" result="S=\left\{\left(-\dfrac{3}{22}\,;\dfrac{17}{22}\right)\right\}">
                  <p><Math tex="(\times3)\ 9x+21y=15" /></p>
                  <p><Math tex="(\times7)\ 35x-21y=-21" /></p>
                  <p>On additionne : <Math tex="44x=-6 \Rightarrow x=-\dfrac{3}{22}" /></p>
                  <p><Math tex="y=\dfrac{17}{22}" /></p>
                </MiniCard>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Problème concret"
            itemsLabel="2 questions"
            items={
              <>
                <p className="text-sm">1) Résoudre le système d&apos;équations :</p>
                <MathBlock tex="\begin{cases}3x+y=15{,}50\\2x+3y=20{,}60\end{cases}" className="katex-formula-block my-2 text-base" />
                <p className="text-sm">
                  2) Un client achète 3 baguettes et 4 pains au chocolat, il paye 14,50 dirhams. Un deuxième client achète 4 baguettes et 5 pains au chocolat, il paye 18,50 dirhams. Quel est le prix d&apos;une baguette et le prix d&apos;un pain au chocolat ?
                </p>
              </>
            }
            correction={
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground">1) Résolution du système</p>
                  <MathBlock tex="\begin{aligned}2x+3(15{,}50-3x)&=20{,}60\\2x+46{,}50-9x&=20{,}60\\-7x&=-25{,}90\\x&=3{,}70\end{aligned}" className="katex-formula-block mt-2 text-base" />
                  <p className="mt-1 text-foreground-muted">
                    On avait <Math tex="y=15{,}50-3x" />, donc <Math tex="y=15{,}50-3(3{,}70)=4{,}40" />.
                  </p>
                  <p className="mt-2 rounded-lg bg-green-100/60 px-3 py-2 text-center font-bold text-green-700">
                    <Math tex="S=\{(3{,}70\,;4{,}40)\}" />
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">2) Le problème des baguettes</p>
                  <div className="mt-2">
                    <Worked>
                      <Step n={1} title="Choix des inconnues">
                        <p>
                          Soit <Math tex="b" /> le prix d&apos;une baguette et <Math tex="p" /> le prix d&apos;un pain au chocolat (en dirhams).
                        </p>
                      </Step>
                      <Step n={2} title="Mise en système">
                        <MathBlock tex="\begin{cases}(1)\ \ 3b+4p=14{,}50\\(2)\ \ 4b+5p=18{,}50\end{cases}" className="katex-formula-block text-base" />
                      </Step>
                      <Step n={3} title="Résolution">
                        <MathBlock tex="\begin{aligned}(1)\times4&:\ 12b+16p=58\\(2)\times3&:\ 12b+15p=55{,}50\end{aligned}" className="katex-formula-block text-base" />
                        <p className="mt-2">
                          On soustrait : <Math tex="p=2{,}50" />. Puis dans (1) : <Math tex="3b+10=14{,}50 \Rightarrow b=1{,}50" />.
                        </p>
                        <p className="mt-1 text-foreground-muted">
                          Vérification : <Math tex="4(1{,}50)+5(2{,}50)=6+12{,}5=18{,}50" /> ✓
                        </p>
                      </Step>
                      <Step n="✓" title="Retour au problème">
                        <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div className="rounded-xl bg-surface-muted p-4 text-center">
                            <p className="text-2xl font-bold text-green-700">1,50 <span className="text-sm font-medium">dh</span></p>
                            <p className="text-xs font-medium text-foreground-muted">Prix d&apos;une baguette</p>
                          </div>
                          <div className="rounded-xl bg-surface-muted p-4 text-center">
                            <p className="text-2xl font-bold text-green-700">2,50 <span className="text-sm font-medium">dh</span></p>
                            <p className="text-xs font-medium text-foreground-muted">Prix d&apos;un pain au chocolat</p>
                          </div>
                        </div>
                      </Step>
                    </Worked>
                  </div>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
