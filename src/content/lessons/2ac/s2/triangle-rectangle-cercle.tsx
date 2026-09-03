import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  FormulaBlock,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Triangle rectangle et cercle · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur le milieu de l'hypoténuse, le cercle circonscrit à un triangle rectangle, le théorème de Pythagore et le cosinus d'un angle aigu, et 7 exercices corrigés, 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 6",
  heroTitle: "Triangle rectangle et cercle",
  heroSubtitle:
    "Milieu de l'hypoténuse, cercle circonscrit, Pythagore, cosinus : quatre idées qui se répondent entre elles.",
  footerNote: "Triangle rectangle et cercle · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "exercices", label: "Exercices" },
  ],
};

function PropBox({ title, children, tone = "prop" }: { title: string; children: ReactNode; tone?: "prop" | "thm" | "def" }) {
  const styles = {
    prop: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5",
    thm: "border-l-4 border-green-500 bg-green-100/50",
    def: "border-l-4 border-orange-400 bg-orange-100/50",
  } as const;
  const titleColor = { prop: "text-brand-700", thm: "text-green-700", def: "text-orange-700" } as const;
  return (
    <div className={`rounded-r-xl p-4 text-sm sm:text-base ${styles[tone]}`}>
      <p className={`mb-1 font-semibold ${titleColor[tone]}`}>{title}</p>
      <div className="text-foreground-muted">{children}</div>
    </div>
  );
}

function FigureBox({ children }: { children: ReactNode }) {
  return <div className="flex items-center justify-center rounded-xl border border-border bg-surface p-4">{children}</div>;
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
          { value: "3", label: "parties de cours" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#cours"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
            >
              Consulter le cours
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
          <div className="flex flex-col items-center gap-3">
            <svg viewBox="0 0 320 260" className="h-64 w-64">
              <circle cx="160" cy="130" r="105" fill="none" stroke="white" strokeWidth="2.5" opacity="0.85" />
              <polygon points="80,55 260,95 105,222" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="3" />
              <path d="M80,55 L98,73 L118,64" fill="none" stroke="white" strokeWidth="2.5" />
              <circle cx="160" cy="130" r="4" fill="white" />
              <circle cx="80" cy="55" r="4.5" fill="white" />
              <circle cx="260" cy="95" r="4.5" fill="white" />
              <circle cx="105" cy="222" r="4.5" fill="white" />
              <text x="65" y="48" fontSize="17" fontWeight="700" fill="white">A</text>
              <text x="272" y="90" fontSize="17" fontWeight="700" fill="white">B</text>
              <text x="95" y="242" fontSize="17" fontWeight="700" fill="white">C</text>
              <text x="163" y="150" fontSize="14" fontWeight="600" fill="white" opacity="0.9">O</text>
            </svg>
            <div className="rounded-xl bg-white px-4 py-3 text-neutral-900">
              <p className="text-xs font-medium text-neutral-500">Théorème de Pythagore</p>
              <Math tex="BC^2 = AB^2 + AC^2" className="font-semibold text-brand-700" />
            </div>
          </div>
        }
      />

      {/* ===================== I. TRIANGLE RECTANGLE ET CERCLE ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Triangle rectangle et cercle"
        title="Milieu de l'hypoténuse, cercle circonscrit"
        tone="light"
        description="Un triangle rectangle cache toujours un cercle : celui dont le centre est le milieu de l'hypoténuse."
      >
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-4 text-sm font-bold text-foreground">1) Milieu de l&apos;hypoténuse d&apos;un triangle rectangle</p>
            <div className="grid items-center gap-6 lg:grid-cols-3">
              <div className="space-y-3 lg:col-span-2">
                <PropBox title="Propriété">
                  Le milieu de l&apos;hypoténuse d&apos;un triangle rectangle est <strong className="text-foreground">équidistant</strong> de ses sommets.
                </PropBox>
                <div className="text-sm">
                  <p className="mb-1 font-semibold text-foreground">Exemple :</p>
                  <p>
                    <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" />, et <Math tex="I" /> le milieu du
                    segment <Math tex="[BC]" />.
                  </p>
                  <p className="mt-1">
                    Donc : <Math tex="IA = IB = IC" />
                  </p>
                </div>
                <PropBox title="Propriété réciproque">
                  <Math tex="ABC" /> est un triangle et <Math tex="I" /> le milieu du segment <Math tex="[BC]" />. Si{" "}
                  <Math tex="IA = IB = IC" /> alors <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" />.
                </PropBox>
              </div>
              <FigureBox>
                <svg viewBox="0 0 300 240" className="w-full max-w-[260px]">
                  <polygon points="150,30 270,190 40,170" fill="none" stroke="#334155" strokeWidth="2.5" />
                  <path d="M150,30 L165,52 L143,58 Z" fill="none" stroke="#334155" strokeWidth="2" />
                  <line x1="150" y1="30" x2="155" y2="180" stroke="#4f46e5" strokeWidth="2.5" />
                  <circle cx="155" cy="180" r="3.5" fill="#4f46e5" />
                  <text x="150" y="20" textAnchor="middle" fontSize="16" fontWeight="600" fill="#0f172a">A</text>
                  <text x="25" y="175" textAnchor="middle" fontSize="16" fontWeight="600" fill="#0f172a">C</text>
                  <text x="282" y="195" textAnchor="middle" fontSize="16" fontWeight="600" fill="#0f172a">B</text>
                  <text x="155" y="200" textAnchor="middle" fontSize="15" fontWeight="600" fill="#4f46e5">I</text>
                  <line x1="90" y1="175" x2="100" y2="173" stroke="#334155" strokeWidth="1.5" />
                  <line x1="93" y1="180" x2="103" y2="178" stroke="#334155" strokeWidth="1.5" />
                  <line x1="210" y1="181" x2="220" y2="184" stroke="#334155" strokeWidth="1.5" />
                  <line x1="207" y1="186" x2="217" y2="189" stroke="#334155" strokeWidth="1.5" />
                </svg>
              </FigureBox>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-4 text-sm font-bold text-foreground">2) Cercle circonscrit à un triangle rectangle</p>
            <div className="grid items-center gap-6 lg:grid-cols-3">
              <div className="space-y-3 lg:col-span-2">
                <PropBox title="Propriété">
                  Si un triangle est rectangle, alors le milieu de l&apos;hypoténuse est le centre de son{" "}
                  <strong className="text-foreground">cercle circonscrit</strong>.
                </PropBox>
                <div className="text-sm">
                  <p className="mb-1 font-semibold text-foreground">Exemple :</p>
                  <p>
                    <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" />, et <Math tex="I" /> le milieu du
                    segment <Math tex="[BC]" />.
                  </p>
                  <p className="mt-1">
                    Donc : <Math tex="IA = IB = IC" />, alors <Math tex="I" /> est le centre du cercle circonscrit au
                    triangle <Math tex="ABC" />.
                  </p>
                </div>
                <PropBox title="Propriété réciproque">
                  Si le milieu d&apos;un côté d&apos;un triangle est le centre de son cercle circonscrit, alors ce triangle
                  est rectangle et a pour hypoténuse ce côté.
                </PropBox>
              </div>
              <FigureBox>
                <svg viewBox="0 0 260 260" className="w-full max-w-[240px]">
                  <circle cx="130" cy="130" r="95" fill="none" stroke="#4f46e5" strokeWidth="2" />
                  <polygon points="90,45 214,150 42,140" fill="none" stroke="#334155" strokeWidth="2.5" />
                  <path d="M90,45 L104,64 L82,71 Z" fill="none" stroke="#334155" strokeWidth="2" />
                  <circle cx="130" cy="130" r="3.5" fill="#4f46e5" />
                  <text x="90" y="35" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">A</text>
                  <text x="27" y="140" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">C</text>
                  <text x="228" y="155" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">B</text>
                  <text x="130" y="150" textAnchor="middle" fontSize="14" fontWeight="600" fill="#4f46e5">I</text>
                </svg>
              </FigureBox>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. THEOREME DE PYTHAGORE ===================== */}
      <LessonSection
        kicker="02 · Théorème de Pythagore"
        title="Le carré de l'hypoténuse"
        tone="muted"
        description="Le résultat le plus utilisé du collège : dans un triangle rectangle, un carré vaut la somme des deux autres."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 rounded-xl border border-border bg-surface p-5 text-sm sm:p-6 sm:text-base lg:col-span-2">
            <PropBox title="Théorème" tone="thm">
              Si un triangle est <em>rectangle</em>, alors le <em>carré</em> de la longueur de l&apos;<em>hypoténuse</em> est{" "}
              <em>égal à la somme des carrés</em> des longueurs des <em>deux autres côtés</em>.
            </PropBox>

            <div>
              <p className="mb-2 font-semibold text-foreground">
                Exemple : <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" /> tel que{" "}
                <Math tex="AB = 8\text{ cm}" /> ; <Math tex="AC = 6\text{ cm}" />. Calculer <Math tex="BC" />.
              </p>
              <div className="space-y-1 text-foreground-muted">
                <p>➜ On a : <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" />.</p>
                <p>Donc, d&apos;après le théorème de Pythagore : <Math tex="BC^2 = AB^2 + AC^2" /></p>
                <p>C&apos;est-à-dire : <Math tex="BC^2 = 8^2 + 6^2" /></p>
                <p>C&apos;est-à-dire : <Math tex="BC^2 = 64 + 36" /></p>
                <p>C&apos;est-à-dire : <Math tex="BC^2 = 100" /></p>
                <p>C&apos;est-à-dire : <Math tex="BC^2 = 10^2" /> (car <Math tex="BC > 0" />)</p>
                <p className="font-semibold text-foreground">Donc : <Math tex="BC = 10\text{ cm}" /></p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <p className="mb-1 font-semibold text-orange-700">Remarque</p>
              <p className="text-foreground-muted">
                <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" /> : donc{" "}
                <Math tex="AB^2 = BC^2 - AC^2" /> et <Math tex="AC^2 = BC^2 - AB^2" />.
              </p>
            </div>
          </div>

          <FigureBox>
            <svg viewBox="0 0 240 220" className="w-full max-w-[220px]">
              <polygon points="120,30 210,190 30,190" fill="none" stroke="#334155" strokeWidth="2.5" />
              <path d="M120,30 L133,50 L113,57 Z" fill="none" stroke="#334155" strokeWidth="2" />
              <text x="120" y="20" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">A</text>
              <text x="18" y="205" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">B</text>
              <text x="222" y="205" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">C</text>
              <text x="65" y="105" textAnchor="middle" fontSize="13" fill="#4f46e5">8 cm</text>
              <text x="180" y="105" textAnchor="middle" fontSize="13" fill="#4f46e5">6 cm</text>
              <text x="120" y="212" textAnchor="middle" fontSize="13" fill="#ea580c">10 cm</text>
            </svg>
          </FigureBox>
        </div>
      </LessonSection>

      {/* ===================== III. COSINUS ===================== */}
      <LessonSection
        kicker="03 · Cosinus d'un angle aigu"
        title="Adjacent sur hypoténuse"
        tone="light"
        description="Un rapport de longueurs qui ne dépend que de l'angle, pas de la taille du triangle."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-5 rounded-xl border border-border bg-surface p-5 text-sm sm:p-6 sm:text-base lg:col-span-2">
            <PropBox title="Définition" tone="def">
              Le cosinus d&apos;un angle aigu est le <em>quotient</em> de la <em>longueur du côté adjacent</em> à cet
              angle par <em>la longueur de l&apos;hypoténuse</em>.
            </PropBox>

            <div>
              <p className="mb-2 font-semibold text-foreground">
                Exemple : <Math tex="ABC" /> est un triangle rectangle en <Math tex="C" /> tel que{" "}
                <Math tex="AC = 3\text{ cm}" /> et <Math tex="AB = 5\text{ cm}" />.
              </p>
              <FormulaBlock tex="\cos\widehat{A} = \dfrac{\text{côté adjacent à l'angle } \widehat{A}}{\text{hypoténuse}} = \dfrac{AC}{AB} = \dfrac{3}{5}" />
            </div>

            <div className="border-t border-border pt-4">
              <p className="mb-1 font-semibold text-orange-700">Remarque</p>
              <p className="text-foreground-muted">
                Puisque l&apos;hypoténuse est le plus grand côté d&apos;un triangle rectangle, le cosinus d&apos;un angle aigu
                est compris entre <Math tex="0" /> et <Math tex="1" />.
              </p>
            </div>
          </div>

          <FigureBox>
            <svg viewBox="0 0 240 220" className="w-full max-w-[220px]">
              <polygon points="35,175 225,60 190,175" fill="none" stroke="#334155" strokeWidth="2.5" />
              <path d="M190,175 L177,163 L165,175 Z" fill="none" stroke="#334155" strokeWidth="2" />
              <path d="M62,170 A 30 30 0 0 1 55,150" fill="none" stroke="#f97316" strokeWidth="2" />
              <text x="25" y="190" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">A</text>
              <text x="232" y="60" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">B</text>
              <text x="198" y="195" textAnchor="middle" fontSize="15" fontWeight="600" fill="#0f172a">C</text>
              <text x="115" y="108" textAnchor="middle" fontSize="12" fill="#4f46e5">Hypoténuse</text>
              <text x="118" y="192" textAnchor="middle" fontSize="12" fill="#4f46e5">Côté adjacent</text>
            </svg>
          </FigureBox>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="7 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={7} celebrationTitle="Bravo, les 7 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises le triangle rectangle et le cercle.">
          <ExerciseCard
            id="1"
            index={1}
            title="Cercle circonscrit et rayon"
            items={
              <div className="grid items-center gap-6 rounded-xl border border-border bg-surface-muted p-4 sm:p-5 lg:grid-cols-3">
                <div className="space-y-2 text-sm lg:col-span-2">
                  <p>
                    <Math tex="ABC" /> est un triangle rectangle en <Math tex="A" />, tel que <Math tex="BC = 5\text{ cm}" />
                    . <Math tex="O" /> est le milieu de <Math tex="[BC]" />.
                  </p>
                  <p><strong>a.</strong> Quel est le centre du cercle circonscrit à ce triangle (citer la propriété) ?</p>
                  <p><strong>b.</strong> En déduire l&apos;égalité de 3 longueurs.</p>
                  <p><strong>c.</strong> Combien mesure le segment <Math tex="[AO]" /> ? Expliquer.</p>
                </div>
                <FigureBox>
                  <svg viewBox="0 0 220 190" className="w-full max-w-[190px]">
                    <polygon points="120,25 200,140 30,120" fill="none" stroke="#334155" strokeWidth="2.2" />
                    <path d="M120,25 L133,44 L112,50 Z" fill="none" stroke="#334155" strokeWidth="1.8" />
                    <line x1="120" y1="25" x2="115" y2="130" stroke="#4f46e5" strokeWidth="2" />
                    <circle cx="115" cy="130" r="3" fill="#4f46e5" />
                    <text x="120" y="15" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">A</text>
                    <text x="18" y="128" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">C</text>
                    <text x="212" y="145" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">B</text>
                    <text x="112" y="148" textAnchor="middle" fontSize="13" fontWeight="600" fill="#4f46e5">O</text>
                    <text x="75" y="132" textAnchor="middle" fontSize="11" fill="#64748b">5 cm</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  <strong>a.</strong> <strong>PUISQUE</strong> <Math tex="ABC" /> est un triangle rectangle en{" "}
                  <Math tex="A" /> et <Math tex="O" /> est le milieu de l&apos;hypoténuse <Math tex="[BC]" />,
                </p>
                <p>
                  <strong>ALORS</strong> <Math tex="O" /> est le centre du cercle circonscrit au triangle{" "}
                  <Math tex="ABC" /> (le milieu de l&apos;hypoténuse d&apos;un triangle rectangle est le centre de son
                  cercle circonscrit).
                </p>
                <p><strong>b.</strong> <Math tex="OA = OB = OC" /></p>
                <p>
                  <strong>c.</strong> <Math tex="O" /> étant le centre du cercle circonscrit, <Math tex="OA" /> est un
                  rayon, donc <Math tex="OA = OB = OC = \dfrac{BC}{2} = \dfrac{5}{2} = 2{,}5\text{ cm}" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Médiane de l'hypoténuse"
            items={
              <div className="grid items-center gap-6 rounded-xl border border-border bg-surface-muted p-4 sm:p-5 lg:grid-cols-3">
                <div className="text-sm lg:col-span-2">
                  <p>
                    <Math tex="DEF" /> est un triangle rectangle en <Math tex="E" />. Le point <Math tex="I" /> est le
                    milieu de l&apos;hypoténuse. La médiane <Math tex="[EI]" /> mesure <Math tex="5\text{ cm}" />.
                  </p>
                  <p className="mt-2">Combien mesure l&apos;hypoténuse ? Expliquer.</p>
                </div>
                <FigureBox>
                  <svg viewBox="0 0 220 160" className="w-full max-w-[190px]">
                    <polygon points="30,20 30,140 200,140" fill="none" stroke="#334155" strokeWidth="2.2" />
                    <path d="M30,120 L50,120 L50,140" fill="none" stroke="#334155" strokeWidth="1.8" />
                    <line x1="30" y1="20" x2="115" y2="140" stroke="#4f46e5" strokeWidth="2" />
                    <circle cx="115" cy="140" r="3" fill="#4f46e5" />
                    <text x="18" y="18" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">F</text>
                    <text x="18" y="150" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">E</text>
                    <text x="210" y="150" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">D</text>
                    <text x="105" y="115" textAnchor="middle" fontSize="13" fontWeight="600" fill="#4f46e5">I</text>
                    <text x="55" y="90" textAnchor="middle" fontSize="11" fill="#64748b">5 cm</text>
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  ➜ On a : <Math tex="DEF" /> est un triangle rectangle en <Math tex="E" /> et <Math tex="I" /> est le
                  milieu de l&apos;hypoténuse <Math tex="[DF]" />.
                </p>
                <p>
                  Donc, d&apos;après la propriété du milieu de l&apos;hypoténuse :{" "}
                  <Math tex="EI = DI = FI = \dfrac{DF}{2}" />
                </p>
                <p>C&apos;est-à-dire : <Math tex="DF = 2 \times EI = 2 \times 5" /></p>
                <p className="font-semibold text-foreground">Donc : <Math tex="DF = 10\text{ cm}" /></p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Triangle rectangle par équidistance"
            items={
              <div className="grid items-center gap-6 rounded-xl border border-border bg-surface-muted p-4 sm:p-5 lg:grid-cols-3">
                <div className="space-y-2 text-sm lg:col-span-2">
                  <p>
                    <Math tex="O" /> est le milieu d&apos;un segment <Math tex="[IJ]" /> et <Math tex="K" /> est un
                    point du plan tel que <Math tex="OK = OJ" />.
                  </p>
                  <p>On veut démontrer que le triangle <Math tex="IJK" /> est rectangle en <Math tex="K" />.</p>
                  <p><strong>a.</strong> Placer les points <Math tex="O" /> et <Math tex="K" />.</p>
                  <p><strong>b.</strong> Pourquoi les points <Math tex="I" />, <Math tex="J" /> et <Math tex="K" /> appartiennent-ils au même cercle ?</p>
                  <p><strong>c.</strong> Citer la caractérisation d&apos;un triangle rectangle appliquée à cet énoncé.</p>
                </div>
                <FigureBox>
                  <svg viewBox="0 0 220 120" className="w-full max-w-[190px]">
                    <line x1="20" y1="30" x2="200" y2="95" stroke="#334155" strokeWidth="2" />
                    <text x="12" y="25" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">I</text>
                    <text x="210" y="100" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">J</text>
                    <circle cx="20" cy="30" r="2.5" fill="#334155" />
                    <circle cx="200" cy="95" r="2.5" fill="#334155" />
                  </svg>
                </FigureBox>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  <strong>a.</strong> <Math tex="O" /> est placé au milieu de <Math tex="[IJ]" />. <Math tex="K" /> est
                  un point tel que <Math tex="OK = OJ" /> : il se trouve donc sur le cercle de centre <Math tex="O" />{" "}
                  et de rayon <Math tex="OJ" />.
                </p>
                <p>
                  <strong>b.</strong> <Math tex="O" /> est le milieu de <Math tex="[IJ]" /> donc <Math tex="OI = OJ" />
                  . Or <Math tex="OK = OJ" /> (donné). Donc <Math tex="OI = OJ = OK" /> : les points <Math tex="I" />,{" "}
                  <Math tex="J" /> et <Math tex="K" /> sont à la même distance de <Math tex="O" />, ils appartiennent
                  donc au même cercle, de centre <Math tex="O" /> et de rayon <Math tex="OI = OJ = OK" />.
                </p>
                <p>
                  <strong>c.</strong> <strong>PUISQUE</strong> <Math tex="O" /> est le milieu de <Math tex="[IJ]" /> et{" "}
                  <Math tex="O" /> est équidistant de <Math tex="I" />, <Math tex="J" /> et <Math tex="K" /> (
                  <Math tex="OI = OJ = OK" />),
                </p>
                <p>
                  <strong>ALORS</strong> le triangle <Math tex="IJK" /> est rectangle en <Math tex="K" />, d&apos;hypoténuse{" "}
                  <Math tex="[IJ]" /> (propriété réciproque : si le milieu d&apos;un côté d&apos;un triangle est le centre
                  de son cercle circonscrit, alors ce triangle est rectangle et a pour hypoténuse ce côté).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Symétrique et triangle rectangle"
            items={
              <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm sm:p-5">
                <p>
                  <Math tex="DEF" /> est un triangle isocèle en <Math tex="D" />. <Math tex="E'" /> est le symétrique
                  de <Math tex="E" /> par rapport à <Math tex="D" />.
                </p>
                <p className="mt-2">
                  Démontrer que le triangle <Math tex="EFE'" /> est rectangle en <Math tex="F" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>➜ <Math tex="E'" /> est le symétrique de <Math tex="E" /> par rapport à <Math tex="D" />, donc <Math tex="D" /> est le milieu de <Math tex="[EE']" />.</p>
                <p>➜ <Math tex="DEF" /> est isocèle en <Math tex="D" />, donc <Math tex="DE = DF" />.</p>
                <p>➜ <Math tex="D" /> est le milieu de <Math tex="[EE']" />, donc <Math tex="DE = DE'" />.</p>
                <p>➜ On obtient donc : <Math tex="DE = DF = DE'" />, c&apos;est-à-dire que <Math tex="D" /> est équidistant des points <Math tex="E" />, <Math tex="F" /> et <Math tex="E'" />.</p>
                <p><strong>PUISQUE</strong> <Math tex="D" /> est le milieu de <Math tex="[EE']" /> et <Math tex="D" /> est équidistant de <Math tex="E" />, <Math tex="F" /> et <Math tex="E'" />,</p>
                <p><strong>ALORS</strong> le triangle <Math tex="EFE'" /> est rectangle en <Math tex="F" />, d&apos;hypoténuse <Math tex="[EE']" /> (propriété réciproque du cercle circonscrit).</p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Angle inscrit dans un demi-cercle"
            items={
              <div className="space-y-2 rounded-xl border border-border bg-surface-muted p-4 text-sm sm:p-5">
                <p>
                  <Math tex="(C)" /> est un cercle de centre <Math tex="O" />. <Math tex="A" /> et <Math tex="M" /> sont
                  deux points de <Math tex="(C)" /> non diamétralement opposés. La perpendiculaire en <Math tex="M" />{" "}
                  à <Math tex="(AM)" /> recoupe <Math tex="(C)" /> en <Math tex="B" />.
                </p>
                <p><strong>a.</strong> Faire une figure.</p>
                <p><strong>b.</strong> Démontrer que <Math tex="O" /> est le milieu de <Math tex="[AB]" />.</p>
                <p><Math tex="N" /> est un autre point du cercle <Math tex="(C)" />.</p>
                <p><strong>c.</strong> Démontrer que <Math tex="ANB" /> est un triangle rectangle.</p>
              </div>
            }
            correction={
              <div className="space-y-4 text-sm">
                <FigureBox>
                  <svg viewBox="0 0 260 220" className="w-full max-w-[240px]">
                    <circle cx="130" cy="110" r="95" fill="none" stroke="#4f46e5" strokeWidth="2" />
                    <circle cx="130" cy="110" r="2.5" fill="#4f46e5" />
                    <text x="130" y="100" textAnchor="middle" fontSize="12" fill="#4f46e5">O</text>
                    <polygon points="60,60 190,70 90,205" fill="none" stroke="#334155" strokeWidth="2" />
                    <path d="M90,190 L104,193 L107,179" fill="none" stroke="#334155" strokeWidth="1.8" />
                    <circle cx="180" cy="150" r="2.5" fill="#16a34a" />
                    <line x1="60" y1="60" x2="180" y2="150" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
                    <line x1="90" y1="205" x2="180" y2="150" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
                    <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">A</text>
                    <text x="200" y="68" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">M</text>
                    <text x="85" y="220" textAnchor="middle" fontSize="14" fontWeight="600" fill="#0f172a">B</text>
                    <text x="192" y="150" textAnchor="middle" fontSize="14" fontWeight="600" fill="#16a34a">N</text>
                  </svg>
                </FigureBox>
                <p>
                  <strong>b.</strong> Le triangle <Math tex="AMB" /> est rectangle en <Math tex="M" /> car{" "}
                  <Math tex="(BM) \perp (AM)" />. Les points <Math tex="A" />, <Math tex="M" />, <Math tex="B" />{" "}
                  appartiennent au cercle <Math tex="(C)" /> de centre <Math tex="O" /> : <Math tex="(C)" /> est donc
                  le cercle circonscrit au triangle <Math tex="AMB" />.
                </p>
                <p>
                  Or le centre du cercle circonscrit à un triangle rectangle est le milieu de son hypoténuse. Comme le
                  cercle circonscrit à un triangle est unique, <Math tex="O" /> est donc le milieu de l&apos;hypoténuse{" "}
                  <Math tex="[AB]" />.
                </p>
                <p>
                  <strong>c.</strong> <Math tex="O" /> est le milieu de <Math tex="[AB]" /> et <Math tex="N" />{" "}
                  appartient au cercle <Math tex="(C)" />, donc <Math tex="ON = OA = OB" /> (rayons du cercle).
                </p>
                <p>
                  Donc <Math tex="O" />, milieu de <Math tex="[AB]" />, est équidistant de <Math tex="A" />,{" "}
                  <Math tex="N" /> et <Math tex="B" />.
                </p>
                <p>
                  <strong>ALORS</strong>, d&apos;après la propriété réciproque, le triangle <Math tex="ANB" /> est
                  rectangle en <Math tex="N" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Construction : 45° sans équerre"
            items={
              <div className="rounded-xl border border-border bg-surface-muted p-4 text-sm sm:p-5">
                <p>
                  Sans utiliser l&apos;équerre, construire un triangle <Math tex="ABC" /> rectangle en <Math tex="A" />{" "}
                  tel que <Math tex="BC = 12\text{ cm}" /> et l&apos;angle <Math tex="\widehat{ABC} = 45°" />.
                </p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Analyse :</strong> le triangle <Math tex="ABC" /> est rectangle en <Math tex="A" />, avec
                  l&apos;angle <Math tex="\widehat{B} = 45°" />. Donc <Math tex="\widehat{C} = 180° - 90° - 45° = 45°" />{" "}
                  : le triangle est donc isocèle en <Math tex="A" /> (<Math tex="AB = AC" />). Le point <Math tex="A" />{" "}
                  est ainsi à la fois sur le cercle de diamètre <Math tex="[BC]" /> (Thalès) et sur la médiatrice de{" "}
                  <Math tex="[BC]" />.
                </p>
                <p className="font-semibold text-foreground">Programme de construction (règle et compas uniquement) :</p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>Tracer un segment <Math tex="[BC]" /> de longueur <Math tex="12\text{ cm}" />.</li>
                  <li>Construire la médiatrice de <Math tex="[BC]" /> au compas : elle coupe <Math tex="[BC]" /> en son milieu <Math tex="O" />.</li>
                  <li>Tracer le cercle de centre <Math tex="O" /> et de rayon <Math tex="OB = 6\text{ cm}" /> (cercle de diamètre <Math tex="[BC]" />).</li>
                  <li>La médiatrice de <Math tex="[BC]" /> coupe ce cercle en deux points : choisir l&apos;un d&apos;eux et le nommer <Math tex="A" />.</li>
                </ol>
                <p>
                  Comme <Math tex="A" /> appartient au cercle de diamètre <Math tex="[BC]" />, le triangle{" "}
                  <Math tex="ABC" /> est rectangle en <Math tex="A" /> (propriété réciproque). Comme <Math tex="A" />{" "}
                  appartient à la médiatrice de <Math tex="[BC]" />, on a <Math tex="AB = AC" />, donc le triangle est
                  isocèle en <Math tex="A" /> et ses angles <Math tex="\widehat{B}" /> et <Math tex="\widehat{C}" />{" "}
                  mesurent chacun 45°.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Construction : deux triangles possibles"
            items={
              <div className="space-y-2 rounded-xl border border-border bg-surface-muted p-4 text-sm sm:p-5">
                <p><strong>a.</strong> Tracer un segment <Math tex="[BC]" /> de longueur <Math tex="6\text{ cm}" />.</p>
                <p>
                  <strong>b.</strong> En utilisant la règle graduée et le compas, marquer un point <Math tex="A" /> tel
                  que le triangle <Math tex="ABC" /> soit rectangle en <Math tex="A" /> et tel que{" "}
                  <Math tex="AB = 4\text{ cm}" />.
                </p>
                <p><strong>c.</strong> Y a-t-il plusieurs emplacements possibles pour le point <Math tex="A" /> ?</p>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  <strong>b.</strong> Puisque <Math tex="ABC" /> doit être rectangle en <Math tex="A" />, le point{" "}
                  <Math tex="A" /> doit appartenir au cercle de diamètre <Math tex="[BC]" /> (propriété réciproque du
                  cercle circonscrit). Puisque <Math tex="AB = 4\text{ cm}" />, <Math tex="A" /> doit aussi appartenir
                  au cercle de centre <Math tex="B" /> et de rayon <Math tex="4\text{ cm}" />.
                </p>
                <p className="font-semibold text-foreground">Programme de construction :</p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  <li>Construire le cercle de diamètre <Math tex="[BC]" /> : centre <Math tex="O" /> milieu de <Math tex="[BC]" />, rayon <Math tex="3\text{ cm}" />.</li>
                  <li>Construire le cercle de centre <Math tex="B" /> et de rayon <Math tex="4\text{ cm}" />.</li>
                  <li>Les points d&apos;intersection de ces deux cercles donnent les emplacements possibles du point <Math tex="A" />.</li>
                </ol>
                <p>
                  Vérification : <Math tex="AB^2 + AC^2 = BC^2" /> donne <Math tex="AC^2 = 6^2 - 4^2 = 36 - 16 = 20" />
                  , donc <Math tex="AC = \sqrt{20} \approx 4{,}47\text{ cm}" /> : la construction est bien possible.
                </p>
                <p>
                  <strong>c.</strong> Oui : les deux cercles se coupent en <strong>deux points</strong>, symétriques
                  par rapport à la droite <Math tex="(BC)" />. Il y a donc deux emplacements possibles pour{" "}
                  <Math tex="A" />, donnant deux triangles symétriques (donc superposables, isométriques).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
