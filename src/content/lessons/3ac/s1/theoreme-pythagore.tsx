import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Théorème de Pythagore · Cours et exercices corrigés | 3AC",
  description:
    "Cours illustré sur le théorème de Pythagore et sa réciproque : calcul de longueurs dans un triangle rectangle, démonstration qu'un triangle est rectangle. 10 exercices corrigés en détail (hauteur, terrain, carré, losange, pavé droit, aires), 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Chapitre 7",
  heroTitle: "Le Théorème de Pythagore",
  heroSubtitle:
    "Calculer un côté d'un triangle rectangle à partir des deux autres : un cours illustré, deux exemples résolus pas à pas, la réciproque du théorème, et 10 exercices corrigés.",
  footerNote: "Théorème de Pythagore · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "cours", label: "Le théorème" },
    { id: "reciproque", label: "La réciproque" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** Dark statement box used for the two formal properties. */
function PropertyBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-neutral-950 p-6 text-sm leading-relaxed text-neutral-200 sm:p-8 sm:text-base">
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
          { value: "2", label: "exemples résolus" },
          { value: "10", label: "exercices corrigés" },
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
              Voir les exercices
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 200 160" className="h-40 w-48 text-white/90">
            <line x1="30" y1="20" x2="30" y2="140" stroke="currentColor" strokeWidth="2.5" />
            <line x1="30" y1="140" x2="170" y2="140" stroke="currentColor" strokeWidth="2.5" />
            <line x1="30" y1="20" x2="170" y2="140" stroke="#fb923c" strokeWidth="2.5" />
            <rect x="30" y="128" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        }
      />

      {/* ===================== COURS ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · L'exemple qui explique tout"
        title="Le théorème de Pythagore"
        tone="light"
        description="Il permet de calculer la longueur d'un côté d'un triangle rectangle dès que l'on connaît les deux autres."
      >
        <p className="text-sm text-foreground-muted">
          Soit <Math tex="ABC" /> un triangle rectangle en <Math tex="A" /> tel que <Math tex="AB=3" /> cm, <Math tex="AC=4" /> cm et <Math tex="BC=5" /> cm. Comparons <Math tex="BC^2" /> et <Math tex="AB^2+AC^2" />.
        </p>

        <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <svg viewBox="0 0 340 300" className="mx-auto">
              <line x1="70" y1="60" x2="70" y2="250" stroke="#334155" strokeWidth="2.2" />
              <line x1="70" y1="250" x2="300" y2="250" stroke="#334155" strokeWidth="2.2" />
              <line x1="70" y1="60" x2="300" y2="250" stroke="#4f46e5" strokeWidth="2.6" />
              <rect x="70" y="238" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
              <circle cx="70" cy="60" r="4" fill="#1e293b" />
              <circle cx="70" cy="250" r="4" fill="#1e293b" />
              <circle cx="300" cy="250" r="4" fill="#1e293b" />
              <text x="58" y="58" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
              <text x="56" y="264" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
              <text x="310" y="264" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
              <text x="30" y="158" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic" transform="rotate(-90 30 158)">3 cm</text>
              <text x="185" y="270" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic">4 cm</text>
              <text x="210" y="140" textAnchor="middle" fontSize="14" fill="#4338ca" fontWeight="600" fontStyle="italic" transform="rotate(40 210 140)">5 cm</text>
            </svg>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted p-5">
            <p className="mb-3 text-xs font-bold text-foreground-muted uppercase">On a :</p>
            <p><Math tex="BC^2=5^2=25" /></p>
            <p className="mt-1"><Math tex="AB^2+AC^2=3^2+4^2=9+16=25" /></p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="rounded-lg border border-border bg-surface py-2.5 text-center font-bold text-foreground">
                <Math tex="BC^2=AB^2+AC^2" />
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground" id="theoreme">Propriété (Théorème de Pythagore)</p>
        <PropertyBox>
          <p>
            Dans un triangle rectangle, le carré de la longueur de l&apos;<strong>hypoténuse</strong> est égal à la somme des carrés des longueurs des <strong>côtés de l&apos;angle droit</strong>.
          </p>
          <p className="mt-3 font-semibold text-white">Autrement dit, si <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" />, alors :</p>
          <div className="mt-4 rounded-xl bg-white/10 px-4 py-5 text-center text-xl sm:text-2xl">
            <Math tex="BC^2=AB^2+AC^2" />
          </div>
        </PropertyBox>

        <div className="mt-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <svg viewBox="0 0 360 300" className="mx-auto max-w-sm">
            <line x1="90" y1="50" x2="90" y2="240" stroke="#334155" strokeWidth="2.2" />
            <line x1="90" y1="240" x2="300" y2="240" stroke="#334155" strokeWidth="2.2" />
            <line x1="90" y1="50" x2="300" y2="240" stroke="#4f46e5" strokeWidth="2.6" />
            <rect x="90" y="228" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
            <circle cx="90" cy="50" r="4" fill="#1e293b" />
            <circle cx="90" cy="240" r="4" fill="#1e293b" />
            <circle cx="300" cy="240" r="4" fill="#1e293b" />
            <text x="78" y="46" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
            <text x="76" y="256" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
            <text x="310" y="256" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
            <line x1="195" y1="145" x2="255" y2="95" stroke="#4f46e5" strokeWidth="1.3" strokeDasharray="3,3" />
            <text x="256" y="90" fontSize="13.5" fill="#4338ca" fontWeight="700">Hypoténuse</text>
            <line x1="90" y1="195" x2="30" y2="270" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3,3" />
            <line x1="180" y1="240" x2="30" y2="270" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3,3" />
            <text x="4" y="286" fontSize="12.5" fill="#64748b" fontWeight="600">côtés de l&apos;angle droit</text>
          </svg>
        </div>

        <div className="mt-4">
          <Callout variant="info">On utilise le théorème de Pythagore pour calculer des longueurs.</Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exercice d&apos;application</p>
        <ExerciseCard
          id="ex-app-1"
          index={1}
          title="Calculer un côté de l'angle droit"
          items={
            <div className="text-sm">
              <p className="text-foreground-muted">
                Soit <Math tex="EFG" /> un triangle rectangle en <Math tex="G" /> tel que <Math tex="EF=7" /> cm et <Math tex="EG=3" /> cm. Calculer <Math tex="FG" />.
              </p>
              <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 380 280" className="mx-auto">
                    <line x1="80" y1="50" x2="80" y2="230" stroke="#334155" strokeWidth="2.2" />
                    <line x1="80" y1="230" x2="360" y2="230" stroke="#334155" strokeWidth="2.2" />
                    <line x1="80" y1="50" x2="360" y2="230" stroke="#4f46e5" strokeWidth="2.6" />
                    <rect x="80" y="218" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                    <circle cx="80" cy="50" r="4" fill="#1e293b" />
                    <circle cx="80" cy="230" r="4" fill="#1e293b" />
                    <circle cx="360" cy="230" r="4" fill="#1e293b" />
                    <text x="68" y="46" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">E</text>
                    <text x="66" y="244" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">G</text>
                    <text x="370" y="244" fontWeight="700" fontSize="17" fill="#1e293b">F</text>
                    <text x="40" y="144" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic" transform="rotate(-90 40 144)">3 cm</text>
                    <text x="220" y="118" textAnchor="middle" fontSize="14" fill="#4338ca" fontWeight="600" fontStyle="italic" transform="rotate(24 220 118)">7 cm</text>
                    <text x="220" y="248" textAnchor="middle" fontSize="14" fill="#b45309" fontWeight="700" fontStyle="italic">?</text>
                  </svg>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="EFG" /> rectangle en <Math tex="G" /></span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="EF=7" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="EG=3" /> cm</span>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-2 text-sm">
              <p><Math tex="EFG" /> rectangle en <Math tex="G" /> : <Math tex="EF^2=EG^2+FG^2" /></p>
              <p><Math tex="7^2=3^2+FG^2 \Rightarrow 49=9+FG^2 \Rightarrow FG^2=40" /></p>
              <p>Or <Math tex="FG\gt0" />, donc <Math tex="FG=\sqrt{40}" /></p>
              <p className="font-bold text-green-700"><Math tex="FG=2\sqrt{10}" /> cm</p>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== RECIPROQUE ===================== */}
      <LessonSection
        id="reciproque"
        kicker="02 · Démontrer qu'un triangle est rectangle"
        title="La réciproque du théorème de Pythagore"
        tone="muted"
        description="On l'utilise dans l'autre sens : pour démontrer qu'un triangle est rectangle, à partir de longueurs connues."
      >
        <PropertyBox>
          <p>
            Si, dans un triangle, le carré de la longueur d&apos;un côté est égal à la somme des carrés des longueurs des deux autres côtés, alors ce triangle est <strong>rectangle</strong>.
          </p>
          <p className="mt-3 font-semibold text-white">Autrement dit, si dans un triangle <Math tex="ABC" /> on a :</p>
          <div className="mt-4 rounded-xl bg-white/10 px-4 py-5 text-center text-xl sm:text-2xl">
            <Math tex="BC^2=AB^2+AC^2" />
          </div>
          <p className="mt-3">alors <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" />.</p>
        </PropertyBox>
        <div className="mt-4">
          <Callout variant="info">On utilise la réciproque du théorème de Pythagore pour montrer qu&apos;un triangle est rectangle.</Callout>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exercice d&apos;application</p>
        <ExerciseCard
          id="ex-app-2"
          index={2}
          title="Montrer qu'un triangle est rectangle"
          items={
            <div className="text-sm">
              <p className="text-foreground-muted">
                Soit <Math tex="ABC" /> un triangle tel que <Math tex="AB=2\sqrt2" /> cm, <Math tex="AC=\sqrt3" /> cm et <Math tex="BC=\sqrt5" /> cm. Montrer que <Math tex="ABC" /> est un triangle rectangle.
              </p>
              <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 320 280" className="mx-auto">
                    <line x1="70" y1="92" x2="70" y2="230" stroke="#334155" strokeWidth="2.2" />
                    <line x1="70" y1="230" x2="249" y2="230" stroke="#334155" strokeWidth="2.2" />
                    <line x1="70" y1="92" x2="249" y2="230" stroke="#4f46e5" strokeWidth="2.6" />
                    <circle cx="70" cy="92" r="4" fill="#1e293b" />
                    <circle cx="70" cy="230" r="4" fill="#1e293b" />
                    <circle cx="249" cy="230" r="4" fill="#1e293b" />
                    <text x="58" y="88" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
                    <text x="56" y="244" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
                    <text x="259" y="244" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
                    <text x="34" y="164" textAnchor="middle" fontSize="13.5" fill="#64748b" fontStyle="italic" transform="rotate(-90 34 164)">√3 cm</text>
                    <text x="160" y="246" textAnchor="middle" fontSize="13.5" fill="#64748b" fontStyle="italic">√5 cm</text>
                    <text x="185" y="150" textAnchor="middle" fontSize="13.5" fill="#4338ca" fontWeight="600" fontStyle="italic" transform="rotate(38 185 150)">2√2 cm</text>
                  </svg>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=2\sqrt2" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AC=\sqrt3" /> cm</span>
                  <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=\sqrt5" /> cm</span>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-2 text-sm">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="AB^2=(2\sqrt2)^2=8" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="AC^2=(\sqrt3)^2=3" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="BC^2=(\sqrt5)^2=5" /></div>
              </div>
              <p className="text-foreground-muted">On remarque que <Math tex="AB^2=AC^2+BC^2" /> (car <Math tex="8=3+5" />).</p>
              <p className="font-bold text-green-700">D&apos;après la réciproque du théorème de Pythagore : <Math tex="ABC" /> est un triangle rectangle en <Math tex="C" /></p>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="Exercices : théorème de Pythagore"
        tone="light"
        description="Hauteur dans un triangle, terrain rectangulaire, carré, losange, pavé droit, aires. Cherchez chaque exercice au brouillon, puis vérifiez."
      >
        <ExerciseGroup total={10} celebrationTitle="Bravo, les 10 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le théorème de Pythagore.">
          <ExerciseCard
            id="1"
            index={1}
            title="Hauteur et triangle"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="(AH)" /> est la hauteur du triangle <Math tex="ABC" /> issue de <Math tex="A" />, avec <Math tex="H" /> sur <Math tex="[BC]" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 300" className="mx-auto">
                      <line x1="60" y1="260" x2="312" y2="260" stroke="#334155" strokeWidth="2.2" />
                      <line x1="60" y1="260" x2="252" y2="116" stroke="#4f46e5" strokeWidth="2.6" />
                      <line x1="252" y1="116" x2="312" y2="260" stroke="#4f46e5" strokeWidth="2.6" />
                      <line x1="252" y1="116" x2="252" y2="260" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="5,4" />
                      <rect x="240" y="248" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="252" cy="116" r="4" fill="#1e293b" />
                      <circle cx="60" cy="260" r="4" fill="#1e293b" />
                      <circle cx="312" cy="260" r="4" fill="#1e293b" />
                      <circle cx="252" cy="260" r="4" fill="#f59e0b" />
                      <text x="252" y="104" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
                      <text x="46" y="272" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
                      <text x="322" y="272" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
                      <text x="252" y="282" textAnchor="middle" fontWeight="700" fontSize="15" fill="#b45309">H</text>
                      <text x="130" y="176" textAnchor="middle" fontSize="14" fill="#4338ca" fontWeight="600" fontStyle="italic" transform="rotate(-37 130 176)">10 cm</text>
                      <text x="156" y="276" textAnchor="middle" fontSize="13.5" fill="#64748b" fontStyle="italic">8 cm</text>
                      <text x="282" y="276" textAnchor="middle" fontSize="13.5" fill="#64748b" fontStyle="italic">2,5 cm</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=10" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BH=8" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="HC=2{,}5" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-[lower-alpha] space-y-1 text-foreground-muted">
                  <li>Calculer la longueur <Math tex="AH" />.</li>
                  <li>En déduire la longueur <Math tex="AC" />.</li>
                  <li>Le triangle <Math tex="ABC" /> est-il rectangle ?</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">a. Longueur AH</p>
                  <p><Math tex="ABH" /> rectangle en <Math tex="H" /> : <Math tex="AB^2=AH^2+BH^2 \Rightarrow 10^2=AH^2+8^2 \Rightarrow AH^2=36" /></p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="AH=6" /> cm</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">b. Longueur AC</p>
                  <p><Math tex="AHC" /> rectangle en <Math tex="H" /> : <Math tex="AC^2=AH^2+HC^2=36+6{,}25=42{,}25" /></p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="AC=6{,}5" /> cm</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">c. ABC rectangle ?</p>
                  <p><Math tex="BC=BH+HC=8+2{,}5=10{,}5" /> cm (le plus grand côté).</p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-2 text-center"><Math tex="BC^2=10{,}5^2=110{,}25" /></div>
                    <div className="rounded-lg border border-border p-2 text-center"><Math tex="AB^2+AC^2=100+42{,}25=142{,}25" /></div>
                  </div>
                  <p className="mt-2 font-semibold text-green-700"><Math tex="110{,}25\neq142{,}25" /> : le triangle n&apos;est pas rectangle</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Terrain rectangulaire"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Un terrain de football rectangulaire mesure 95 m de longueur et 72 m de largeur.</p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 260" className="mx-auto">
                      <rect x="40" y="40" width="260" height="180" fill="none" stroke="#334155" strokeWidth="2.2" />
                      <line x1="40" y1="40" x2="300" y2="220" stroke="#4f46e5" strokeWidth="2.4" strokeDasharray="6,5" />
                      <circle cx="40" cy="40" r="4" fill="#1e293b" />
                      <circle cx="300" cy="40" r="4" fill="#1e293b" />
                      <circle cx="300" cy="220" r="4" fill="#1e293b" />
                      <circle cx="40" cy="220" r="4" fill="#1e293b" />
                      <text x="170" y="234" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic">95 m</text>
                      <text x="20" y="134" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic" transform="rotate(-90 20 134)">72 m</text>
                      <text x="185" y="118" textAnchor="middle" fontSize="14" fill="#4338ca" fontWeight="700" fontStyle="italic" transform="rotate(35 185 118)">?</text>
                    </svg>
                    <p className="mt-2 text-center text-xs text-foreground-muted italic">Figure illustrative, non à l&apos;échelle</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Longueur = 95 m</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Largeur = 72 m</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-[lower-alpha] space-y-1 text-foreground-muted">
                  <li>Faire une figure à main levée.</li>
                  <li>Calculer la diagonale du terrain (arrondir au centième).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">La longueur, la largeur et la diagonale forment un triangle rectangle (angle du rectangle). Si <Math tex="d" /> est la diagonale :</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="d^2=95^2+72^2=9025+5184=14\,209" /></p>
                <p className="text-foreground-muted">Or <Math tex="d\gt0" />, donc <Math tex="d=\sqrt{14209}\approx119{,}20" /></p>
                <p className="font-bold text-green-700">La diagonale mesure environ 119,20 m</p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Carré"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">Un foulard est un carré d&apos;étoffe de 60 cm de côté. Calculer la longueur d&apos;une diagonale (arrondir au dixième).</p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 300 260" className="mx-auto">
                      <rect x="70" y="40" width="180" height="180" fill="none" stroke="#334155" strokeWidth="2.2" />
                      <line x1="70" y1="40" x2="250" y2="220" stroke="#4f46e5" strokeWidth="2.4" strokeDasharray="6,5" />
                      <circle cx="70" cy="40" r="4" fill="#1e293b" />
                      <circle cx="250" cy="40" r="4" fill="#1e293b" />
                      <circle cx="250" cy="220" r="4" fill="#1e293b" />
                      <circle cx="70" cy="220" r="4" fill="#1e293b" />
                      <text x="160" y="234" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic">60 cm</text>
                      <text x="50" y="134" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic" transform="rotate(-90 50 134)">60 cm</text>
                      <text x="175" y="112" textAnchor="middle" fontSize="14" fill="#4338ca" fontWeight="700" fontStyle="italic" transform="rotate(45 175 112)">?</text>
                    </svg>
                    <p className="mt-2 text-center text-xs text-foreground-muted italic">Figure illustrative, non à l&apos;échelle</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Côté = 60 cm</span>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Deux côtés consécutifs et la diagonale <Math tex="d" /> forment un triangle rectangle :</p>
                <p className="rounded-lg bg-surface-muted p-3 text-center"><Math tex="d^2=60^2+60^2=3600+3600=7200" /></p>
                <p className="text-foreground-muted">Or <Math tex="d\gt0" />, donc <Math tex="d=\sqrt{7200}=60\sqrt2\approx84{,}9" /></p>
                <p className="font-bold text-green-700">La diagonale mesure environ 84,9 cm</p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Triangle isocèle"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted"><Math tex="ABC" /> est isocèle en <Math tex="A" /> avec <Math tex="AB=AC=6" /> cm et <Math tex="BC=5" /> cm.</p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 270" className="mx-auto">
                      <line x1="95" y1="230" x2="245" y2="230" stroke="#334155" strokeWidth="2.2" />
                      <line x1="95" y1="230" x2="170" y2="67" stroke="#4f46e5" strokeWidth="2.6" />
                      <line x1="245" y1="230" x2="170" y2="67" stroke="#4f46e5" strokeWidth="2.6" />
                      <line x1="170" y1="67" x2="170" y2="230" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="5,4" />
                      <rect x="158" y="218" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="170" cy="67" r="4" fill="#1e293b" />
                      <circle cx="95" cy="230" r="4" fill="#1e293b" />
                      <circle cx="245" cy="230" r="4" fill="#1e293b" />
                      <circle cx="170" cy="230" r="4" fill="#f59e0b" />
                      <text x="170" y="54" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
                      <text x="80" y="248" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
                      <text x="260" y="248" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
                      <text x="170" y="250" textAnchor="middle" fontWeight="700" fontSize="14" fill="#b45309">H</text>
                      <text x="115" y="156" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic" transform="rotate(-58 115 156)">6 cm</text>
                      <text x="225" y="156" textAnchor="middle" fontSize="14" fill="#64748b" fontStyle="italic" transform="rotate(58 225 156)">6 cm</text>
                      <text x="120" y="244" textAnchor="middle" fontSize="13.5" fill="#64748b" fontStyle="italic">5 cm</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=AC=6" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=5" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-[lower-alpha] space-y-1 text-foreground-muted">
                  <li>Construire ce triangle et sa hauteur <Math tex="[AH]" />.</li>
                  <li>Calculer la hauteur <Math tex="AH" /> (arrondie au dixième).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted"><Math tex="ABC" /> isocèle en <Math tex="A" /> : <Math tex="[AH]" /> est aussi la médiane, <Math tex="H" /> milieu de <Math tex="[BC]" />, donc <Math tex="BH=2{,}5" /> cm.</p>
                <p><Math tex="ABH" /> rectangle en <Math tex="H" /> : <Math tex="AB^2=AH^2+BH^2 \Rightarrow 6^2=AH^2+2{,}5^2 \Rightarrow AH^2=29{,}75" /></p>
                <p className="font-bold text-green-700"><Math tex="AH=\sqrt{29{,}75}\approx5{,}5" /> cm</p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Triangle équilatéral"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted"><Math tex="IJK" /> est équilatéral de côté 4 cm. Calculer la longueur des médianes (arrondie au dixième).</p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 260" className="mx-auto">
                      <line x1="80" y1="230" x2="300" y2="230" stroke="#334155" strokeWidth="2.2" />
                      <line x1="80" y1="230" x2="190" y2="40" stroke="#334155" strokeWidth="2.2" />
                      <line x1="300" y1="230" x2="190" y2="40" stroke="#334155" strokeWidth="2.2" />
                      <line x1="190" y1="40" x2="190" y2="230" stroke="#4f46e5" strokeWidth="2.4" strokeDasharray="6,5" />
                      <rect x="178" y="218" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="190" cy="40" r="4" fill="#1e293b" />
                      <circle cx="80" cy="230" r="4" fill="#1e293b" />
                      <circle cx="300" cy="230" r="4" fill="#1e293b" />
                      <circle cx="190" cy="230" r="4" fill="#f59e0b" />
                      <text x="190" y="27" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">I</text>
                      <text x="65" y="248" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">J</text>
                      <text x="315" y="248" fontWeight="700" fontSize="17" fill="#1e293b">K</text>
                      <text x="190" y="250" textAnchor="middle" fontWeight="700" fontSize="14" fill="#b45309">M</text>
                      <text x="130" y="248" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic">4 cm</text>
                      <text x="205" y="135" textAnchor="middle" fontSize="12.5" fill="#4338ca" fontWeight="700">médiane</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="IJ=JK=KI=4" /> cm</span>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p className="text-foreground-muted">Chaque médiane est aussi une hauteur. Pour <Math tex="[IM]" /> issue de <Math tex="I" />, <Math tex="M" /> milieu de <Math tex="[JK]" /> : <Math tex="JM=2" /> cm.</p>
                <p><Math tex="IJM" /> rectangle en <Math tex="M" /> : <Math tex="IJ^2=IM^2+JM^2 \Rightarrow 16=IM^2+4 \Rightarrow IM^2=12" /></p>
                <p className="font-bold text-green-700"><Math tex="IM=\sqrt{12}=2\sqrt3\approx3{,}5" /> cm (les trois médianes sont égales)</p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Losange"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted"><Math tex="ABCD" /> est un losange de centre <Math tex="O" /> avec <Math tex="AC=20" /> cm et <Math tex="BD=48" /> cm.</p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 260" className="mx-auto">
                      <line x1="190" y1="30" x2="310" y2="130" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="310" y1="130" x2="190" y2="230" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="190" y1="230" x2="70" y2="130" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="70" y1="130" x2="190" y2="30" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="190" y1="30" x2="190" y2="230" stroke="#334155" strokeWidth="1.8" strokeDasharray="5,4" />
                      <line x1="70" y1="130" x2="310" y2="130" stroke="#334155" strokeWidth="1.8" strokeDasharray="5,4" />
                      <rect x="190" y="118" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="190" cy="30" r="4" fill="#1e293b" />
                      <circle cx="310" cy="130" r="4" fill="#1e293b" />
                      <circle cx="190" cy="230" r="4" fill="#1e293b" />
                      <circle cx="70" cy="130" r="4" fill="#1e293b" />
                      <circle cx="190" cy="130" r="4" fill="#f59e0b" />
                      <text x="190" y="18" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
                      <text x="322" y="134" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
                      <text x="190" y="248" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
                      <text x="52" y="134" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">D</text>
                      <text x="203" y="112" fontWeight="700" fontSize="14" fill="#b45309">O</text>
                      <text x="203" y="90" fontSize="13" fill="#64748b" fontStyle="italic">20 cm</text>
                      <text x="240" y="122" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic">48 cm</text>
                    </svg>
                    <p className="mt-2 text-center text-xs text-foreground-muted italic">Figure illustrative, non à l&apos;échelle</p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AC=20" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BD=48" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-[lower-alpha] space-y-1 text-foreground-muted">
                  <li>Faire une figure à main levée.</li>
                  <li>Calculer <Math tex="AB" />.</li>
                  <li>Calculer le périmètre de ce losange.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">b. Longueur AB</p>
                  <p>Diagonales du losange : <Math tex="OA=\dfrac{AC}2=10" /> cm, <Math tex="OB=\dfrac{BD}2=24" /> cm. <Math tex="OAB" /> rectangle en <Math tex="O" /> :</p>
                  <p className="mt-1"><Math tex="AB^2=OA^2+OB^2=100+576=676" /></p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="AB=26" /> cm</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">c. Périmètre</p>
                  <p><Math tex="\text{Périmètre}=4\times AB=4\times26" /></p>
                  <p className="mt-1 font-semibold text-green-700">Périmètre <Math tex="=104" /> cm</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Rectangle"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABCD" /> est un rectangle, <Math tex="AB=3" /> cm et <Math tex="BC=10" /> cm, et <Math tex="I" /> est le point de <Math tex="[BC]" /> tel que <Math tex="BI=1" /> cm.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 260 280" className="mx-auto">
                      <rect x="90" y="30" width="70" height="220" fill="none" stroke="#334155" strokeWidth="2.2" />
                      <line x1="90" y1="30" x2="160" y2="52" stroke="#4f46e5" strokeWidth="2.2" />
                      <line x1="90" y1="250" x2="160" y2="52" stroke="#4f46e5" strokeWidth="2.2" />
                      <circle cx="90" cy="30" r="4" fill="#1e293b" />
                      <circle cx="160" cy="30" r="4" fill="#1e293b" />
                      <circle cx="160" cy="250" r="4" fill="#1e293b" />
                      <circle cx="90" cy="250" r="4" fill="#1e293b" />
                      <circle cx="160" cy="52" r="4" fill="#f59e0b" />
                      <text x="76" y="24" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                      <text x="178" y="24" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                      <text x="178" y="260" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                      <text x="76" y="260" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                      <text x="182" y="56" fontWeight="700" fontSize="14" fill="#b45309">I</text>
                      <text x="120" y="20" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic">3 cm</text>
                      <text x="174" y="42" textAnchor="middle" fontSize="12" fill="#64748b" fontStyle="italic">1 cm</text>
                      <text x="70" y="144" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic" transform="rotate(-90 70 144)">10 cm</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=3" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=10" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BI=1" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-[lower-alpha] space-y-1 text-foreground-muted">
                  <li>Faire une figure.</li>
                  <li>Calculer <Math tex="AI^2" /> et <Math tex="DI^2" />.</li>
                  <li>Montrer que le triangle <Math tex="AID" /> est rectangle en <Math tex="I" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">b. AI² et DI²</p>
                  <p><Math tex="ABI" /> rectangle en <Math tex="B" /> : <Math tex="AI^2=AB^2+BI^2=9+1=10" />.</p>
                  <p className="mt-1"><Math tex="IC=BC-BI=9" /> cm, <Math tex="DC=AB=3" /> cm : <Math tex="DCI" /> rectangle en <Math tex="C" /> : <Math tex="DI^2=DC^2+CI^2=9+81=90" />.</p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border p-2 text-center font-semibold text-green-700"><Math tex="AI^2=10" /></div>
                    <div className="rounded-lg border border-border p-2 text-center font-semibold text-green-700"><Math tex="DI^2=90" /></div>
                  </div>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">c. AID rectangle en I ?</p>
                  <p><Math tex="AD=BC=10" /> cm, donc <Math tex="AD^2=100" />. Or <Math tex="AI^2+DI^2=10+90=100=AD^2" />.</p>
                  <p className="mt-1 font-semibold text-green-700">D&apos;après la réciproque de Pythagore, <Math tex="AID" /> est rectangle en <Math tex="I" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Pavé droit"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted"><Math tex="ABCDEFGH" /> est un pavé droit de longueur 4 cm, largeur 3 cm et hauteur 12 cm.</p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 -18 340 338" className="mx-auto">
                      <line x1="70" y1="60" x2="190" y2="60" stroke="#334155" strokeWidth="2" />
                      <line x1="70" y1="60" x2="70" y2="300" stroke="#334155" strokeWidth="2" />
                      <line x1="190" y1="60" x2="190" y2="300" stroke="#334155" strokeWidth="2" />
                      <line x1="70" y1="300" x2="190" y2="300" stroke="#334155" strokeWidth="2" />
                      <line x1="70" y1="60" x2="140" y2="10" stroke="#334155" strokeWidth="2" />
                      <line x1="190" y1="60" x2="260" y2="10" stroke="#334155" strokeWidth="2" />
                      <line x1="140" y1="10" x2="260" y2="10" stroke="#334155" strokeWidth="2" />
                      <line x1="190" y1="300" x2="260" y2="250" stroke="#334155" strokeWidth="2" />
                      <line x1="260" y1="10" x2="260" y2="250" stroke="#334155" strokeWidth="2" />
                      <line x1="70" y1="300" x2="140" y2="250" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4,4" />
                      <line x1="140" y1="250" x2="260" y2="250" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4,4" />
                      <line x1="140" y1="10" x2="140" y2="250" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4,4" />
                      <line x1="70" y1="300" x2="260" y2="250" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="7,5" />
                      <line x1="70" y1="60" x2="260" y2="250" stroke="#4f46e5" strokeWidth="2.4" strokeDasharray="7,5" />
                      <circle cx="70" cy="60" r="4" fill="#1e293b" />
                      <circle cx="190" cy="60" r="4" fill="#1e293b" />
                      <circle cx="140" cy="10" r="4" fill="#1e293b" />
                      <circle cx="260" cy="10" r="4" fill="#1e293b" />
                      <circle cx="70" cy="300" r="4" fill="#1e293b" />
                      <circle cx="190" cy="300" r="4" fill="#1e293b" />
                      <circle cx="140" cy="250" r="4" fill="#1e293b" />
                      <circle cx="260" cy="250" r="4" fill="#1e293b" />
                      <text x="58" y="56" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">A</text>
                      <text x="202" y="56" fontWeight="700" fontSize="15" fill="#1e293b">D</text>
                      <text x="128" y="8" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">B</text>
                      <text x="272" y="8" fontWeight="700" fontSize="15" fill="#1e293b">C</text>
                      <text x="58" y="316" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">E</text>
                      <text x="202" y="316" fontWeight="700" fontSize="15" fill="#1e293b">H</text>
                      <text x="128" y="268" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">F</text>
                      <text x="272" y="268" fontWeight="700" fontSize="15" fill="#1e293b">G</text>
                      <text x="130" y="316" textAnchor="middle" fontSize="12.5" fill="#64748b" fontStyle="italic">4 cm</text>
                      <text x="228" y="272" textAnchor="middle" fontSize="12.5" fill="#64748b" fontStyle="italic">3 cm</text>
                      <text x="44" y="182" textAnchor="middle" fontSize="12.5" fill="#64748b" fontStyle="italic" transform="rotate(-90 44 182)">12 cm</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Longueur <Math tex="EH=4" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Largeur <Math tex="HG=3" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Hauteur <Math tex="AE=12" /> cm</span>
                  </div>
                </div>
                <p className="mt-4 text-foreground-muted">Calculer la longueur <Math tex="EG" /> puis la diagonale <Math tex="AG" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">Longueur EG</p>
                  <p><Math tex="EFGH" /> rectangle : <Math tex="EHG" /> rectangle en <Math tex="H" /> :</p>
                  <p className="mt-1"><Math tex="EG^2=EH^2+HG^2=16+9=25" /></p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="EG=5" /> cm</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">Diagonale AG</p>
                  <p><Math tex="[AE]" /> perpendiculaire au plan de base : <Math tex="AEG" /> rectangle en <Math tex="E" /> :</p>
                  <p className="mt-1"><Math tex="AG^2=AE^2+EG^2=144+25=169" /></p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="AG=13" /> cm</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Aire d'un triangle"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="(OC)" /> est la hauteur du triangle <Math tex="BCD" /> issue de <Math tex="C" />. But : déterminer l&apos;aire du triangle <Math tex="BCD" />.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 370 345" className="mx-auto">
                      <line x1="215" y1="30" x2="215" y2="320" stroke="#334155" strokeWidth="2.2" />
                      <line x1="215" y1="30" x2="340" y2="150" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="215" y1="320" x2="340" y2="150" stroke="#4f46e5" strokeWidth="2.4" />
                      <line x1="215" y1="150" x2="340" y2="150" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="5,4" />
                      <line x1="215" y1="150" x2="112" y2="245" stroke="#334155" strokeWidth="2.2" />
                      <line x1="112" y1="245" x2="215" y2="320" stroke="#334155" strokeWidth="2.2" />
                      <rect x="215" y="150" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="215" cy="30" r="4" fill="#1e293b" />
                      <circle cx="215" cy="150" r="4" fill="#f59e0b" />
                      <circle cx="215" cy="320" r="4" fill="#1e293b" />
                      <circle cx="112" cy="245" r="4" fill="#1e293b" />
                      <circle cx="340" cy="150" r="4" fill="#1e293b" />
                      <text x="215" y="18" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">D</text>
                      <text x="230" y="146" fontWeight="700" fontSize="15" fill="#b45309">O</text>
                      <text x="215" y="336" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
                      <text x="96" y="249" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
                      <text x="352" y="154" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
                      <text x="265" y="80" textAnchor="middle" fontSize="13.5" fill="#4338ca" fontWeight="600" fontStyle="italic" transform="rotate(35 265 80)">25 cm</text>
                      <text x="265" y="245" textAnchor="middle" fontSize="13.5" fill="#4338ca" fontWeight="600" fontStyle="italic" transform="rotate(-35 265 245)">26 cm</text>
                      <text x="150" y="188" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic" transform="rotate(38 150 188)">6 cm</text>
                      <text x="150" y="292" textAnchor="middle" fontSize="13" fill="#64748b" fontStyle="italic" transform="rotate(-38 150 292)">8 cm</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="OA=6" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=8" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="DC=25" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=26" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Angle droit en <Math tex="A" /> et <Math tex="O" /></span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Calculer <Math tex="OB" />, puis <Math tex="OC" />, puis <Math tex="OD" />.</li>
                  <li>En déduire l&apos;aire du triangle <Math tex="BCD" /> (aire = base × hauteur ÷ 2).</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">1. OB, OC, OD</p>
                  <p><Math tex="OAB" /> rectangle en <Math tex="A" /> : <Math tex="OB^2=OA^2+AB^2=36+64=100 \Rightarrow OB=10" /> cm.</p>
                  <p className="mt-1"><Math tex="OBC" /> rectangle en <Math tex="O" /> : <Math tex="BC^2=OB^2+OC^2 \Rightarrow 676=100+OC^2 \Rightarrow OC=24" /> cm.</p>
                  <p className="mt-1"><Math tex="ODC" /> rectangle en <Math tex="O" /> : <Math tex="DC^2=OD^2+OC^2 \Rightarrow 625=OD^2+576 \Rightarrow OD=7" /> cm.</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">2. Aire de BCD</p>
                  <p><Math tex="O\in[BD]" /> : <Math tex="BD=BO+OD=10+7=17" /> cm, hauteur associée <Math tex="OC=24" /> cm.</p>
                  <p className="mt-1"><Math tex="\text{Aire}=\dfrac{BD\times OC}2=\dfrac{17\times24}2=\dfrac{408}2" /></p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="\text{Aire}(BCD)=204" /> cm²</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="10"
            index={10}
            title="Aire et hauteur"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABC" /> est rectangle en <Math tex="A" />. <Math tex="(AH)" /> est la hauteur issue du sommet de l&apos;angle droit.
                </p>
                <div className="mt-4 grid items-center gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-muted p-4">
                    <svg viewBox="0 0 340 300" className="mx-auto">
                      <line x1="60" y1="260" x2="312" y2="260" stroke="#334155" strokeWidth="2.2" />
                      <line x1="60" y1="260" x2="221" y2="139" stroke="#334155" strokeWidth="2.2" />
                      <line x1="221" y1="139" x2="312" y2="260" stroke="#334155" strokeWidth="2.2" />
                      <line x1="221" y1="139" x2="221" y2="260" stroke="#f59e0b" strokeWidth="2.2" strokeDasharray="5,4" />
                      <rect x="209" y="248" width="12" height="12" fill="none" stroke="#334155" strokeWidth="2" />
                      <circle cx="221" cy="139" r="4" fill="#1e293b" />
                      <circle cx="60" cy="260" r="4" fill="#1e293b" />
                      <circle cx="312" cy="260" r="4" fill="#1e293b" />
                      <circle cx="221" cy="260" r="4" fill="#f59e0b" />
                      <text x="221" y="127" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">A</text>
                      <text x="46" y="272" textAnchor="middle" fontWeight="700" fontSize="17" fill="#1e293b">B</text>
                      <text x="322" y="272" fontWeight="700" fontSize="17" fill="#1e293b">C</text>
                      <text x="221" y="282" textAnchor="middle" fontWeight="700" fontSize="15" fill="#b45309">H</text>
                    </svg>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="ABC" /> rectangle en <Math tex="A" /></span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AB=4" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="AC=3" /> cm</span>
                    <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="BC=5" /> cm</span>
                  </div>
                </div>
                <ol className="mt-4 list-inside list-[lower-alpha] space-y-1 text-foreground-muted">
                  <li>Exprimer l&apos;aire du triangle en fonction de <Math tex="AB" /> et <Math tex="AC" />.</li>
                  <li>Exprimer l&apos;aire du triangle en fonction de <Math tex="AH" /> et <Math tex="BC" />.</li>
                  <li>En déduire une égalité liant <Math tex="AB" />, <Math tex="AC" />, <Math tex="BC" /> et <Math tex="AH" />.</li>
                </ol>
                <p className="mt-2 text-foreground-muted">2) Calculer <Math tex="AH" /> pour <Math tex="AB=4" />, <Math tex="AC=3" />, <Math tex="BC=5" />.</p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">a. Aire en fonction de AB, AC</p>
                  <p><Math tex="[AB]" /> et <Math tex="[AC]" /> sont base et hauteur : <Math tex="\text{Aire}=\dfrac{AB\times AC}2" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">b. Aire en fonction de AH, BC</p>
                  <p>En prenant <Math tex="[BC]" /> comme base : <Math tex="\text{Aire}=\dfrac{AH\times BC}2" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">c. Égalité</p>
                  <p>Même aire : <Math tex="\dfrac{AB\times AC}2=\dfrac{AH\times BC}2" />, soit <Math tex="AB\times AC=AH\times BC" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">2. Calcul de AH</p>
                  <p><Math tex="AH=\dfrac{AB\times AC}{BC}=\dfrac{4\times3}5=\dfrac{12}5" /></p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="AH=2{,}4" /> cm</p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
