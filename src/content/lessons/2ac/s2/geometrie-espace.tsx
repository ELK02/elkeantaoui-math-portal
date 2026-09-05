import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Math,
  ExerciseGroup,
  ExerciseCard,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Géométrie dans l'espace · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur le prisme droit (rappel), la pyramide et le cône de révolution (aires latérale et totale, volume) et 4 exercices corrigés, 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 8",
  heroTitle: "Géométrie dans l'espace",
  heroSubtitle:
    "Trois solides, les mêmes questions à chaque fois : combien de surface, combien de volume ?",
  footerNote: "Géométrie dans l'espace · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "exercices", label: "Exercices" },
  ],
};

const BOX_STYLES = {
  def: { wrap: "border-l-4 border-orange-400 bg-orange-100/50", title: "text-orange-700" },
  prop: { wrap: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5", title: "text-brand-700" },
  thm: { wrap: "border-l-4 border-green-500 bg-green-100/50", title: "text-green-700" },
} as const;

function Box({ title, tone, children }: { title: string; tone: keyof typeof BOX_STYLES; children: ReactNode }) {
  const s = BOX_STYLES[tone];
  return (
    <div className={`rounded-r-xl p-4 text-sm sm:text-base ${s.wrap}`}>
      <p className={`mb-1 font-semibold ${s.title}`}>{title}</p>
      <div className="text-foreground-muted">{children}</div>
    </div>
  );
}

function Formula({ children }: { children: ReactNode }) {
  return <p className="text-center font-semibold text-brand-700">{children}</p>;
}

function FigureBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface-muted p-4">
      {children}
    </div>
  );
}

function DataTable({ rows, highlight = [] }: { rows: ReactNode[][]; highlight?: number[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-max border-collapse text-center text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`${i < rows.length - 1 ? "border-b border-border" : ""} ${
                highlight.includes(i) ? "bg-green-100/60 font-semibold text-green-700" : i === 0 ? "bg-surface-muted" : ""
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2 whitespace-nowrap ${
                    j === 0 ? "text-left font-medium text-foreground-muted" : "border-l border-border"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
          { value: "4", label: "exercices" },
          { value: "3", label: "solides étudiés" },
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
            <svg viewBox="0 0 320 260" className="h-56 w-72">
              <polygon points="20,150 20,210 90,230 90,170" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" />
              <polygon points="20,150 55,130 125,150 90,170" fill="white" fillOpacity="0.16" stroke="white" strokeWidth="2" />
              <polygon points="90,170 125,150 125,205 90,230" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="2" />
              <polygon points="180,60 260,110 220,235 140,215" fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round" />
              <line x1="180" y1="60" x2="180" y2="180" stroke="white" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.8" />
              <line x1="180" y1="60" x2="220" y2="235" stroke="white" strokeWidth="2.2" />
              <ellipse cx="255" cy="215" rx="42" ry="14" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" />
              <line x1="255" y1="215" x2="255" y2="120" stroke="white" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.8" />
              <line x1="213" y1="215" x2="255" y2="120" stroke="white" strokeWidth="2.2" />
              <line x1="297" y1="215" x2="255" y2="120" stroke="white" strokeWidth="2.2" />
            </svg>
            <div className="rounded-xl bg-white px-4 py-3 text-neutral-900">
              <p className="text-xs font-medium text-neutral-500">Volume d&apos;une pyramide</p>
              <Math tex="V = \dfrac{1}{3} \times h \times A_B" className="font-semibold text-brand-700" />
            </div>
          </div>
        }
      />

      {/* ===================== I. PRISME DROIT ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Prisme droit (rappel)"
        title="Deux bases, des rectangles autour"
        tone="light"
        description="Un rappel avant d'attaquer les deux nouveaux solides : pyramide et cône."
      >
        <div className="mb-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">a) Définition</p>
          <div className="grid items-center gap-6 lg:grid-cols-3">
            <div className="space-y-3 lg:col-span-2">
              <Box title="Définition" tone="def">
                Le <strong className="text-foreground">prisme droit</strong> est un solide qui possède :
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>deux polygones superposables et parallèles : ce sont les deux <strong className="text-foreground">bases</strong> du prisme ;</li>
                  <li>des rectangles pour les autres faces : ce sont les <strong className="text-foreground">faces latérales</strong> du prisme.</li>
                </ul>
              </Box>
              <p className="text-sm text-foreground-muted">
                Lorsque la base est un rectangle, le prisme droit obtenu est un{" "}
                <strong className="text-foreground">parallélépipède rectangle</strong>.
              </p>
            </div>
            <FigureBox>
              {/* Perspective cavalière : face avant (pentagone, vraie grandeur) solide, face arrière décalée
                  du même vecteur de profondeur (38,-22) sur toutes les arêtes, en pointillés là où elle est
                  cachée derrière le solide (le seul sommet caché est le bas-gauche). */}
              <svg viewBox="0 0 170 150" className="w-full max-w-[230px]">
                <polygon points="68,98 68,53 100,33 132,53 132,98" fill="#c7d2fe" fillOpacity="0.5" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="68" y1="98" x2="132" y2="98" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="30" y1="120" x2="68" y2="98" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                <polygon points="30,120 30,75 62,55 94,75 94,120" fill="#eef2ff" stroke="#4338ca" strokeWidth="2.2" />
                <line x1="30" y1="75" x2="68" y2="53" stroke="#4338ca" strokeWidth="2" />
                <line x1="62" y1="55" x2="100" y2="33" stroke="#4338ca" strokeWidth="2" />
                <line x1="94" y1="75" x2="132" y2="53" stroke="#4338ca" strokeWidth="2" />
                <line x1="94" y1="120" x2="132" y2="98" stroke="#4338ca" strokeWidth="2" />
                <text x="62" y="138" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4338ca">base</text>
                <text x="115" y="72" textAnchor="middle" fontSize="11" fill="#334155">face latérale</text>
                <text x="85" y="10" textAnchor="middle" fontSize="12" fill="#334155">Prisme droit à base pentagonale</text>
              </svg>
            </FigureBox>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">b) Aire latérale, aire totale, volume</p>
          <div className="grid gap-6 lg:grid-cols-3">
            <Box title="Formules" tone="prop">
              <div className="space-y-3">
                <p>
                  <strong className="text-foreground">Aire latérale</strong> <Math tex="A_L" /> : on multiplie le
                  périmètre <Math tex="p" /> d&apos;une base par la hauteur <Math tex="h" /> du solide.
                </p>
                <Formula><Math tex="A_L = p \times h" /></Formula>
                <p>
                  <strong className="text-foreground">Aire totale</strong> <Math tex="A_T" /> : somme de l&apos;aire
                  latérale et des deux aires des bases.
                </p>
                <Formula><Math tex="A_T = A_L + 2A_B" /></Formula>
                <p>
                  <strong className="text-foreground">Volume</strong> <Math tex="V" /> : on multiplie l&apos;aire{" "}
                  <Math tex="A_B" /> d&apos;une base par la hauteur <Math tex="h" /> du solide.
                </p>
                <Formula><Math tex="V = A_B \times h" /></Formula>
              </div>
            </Box>
            <div className="space-y-2 rounded-xl bg-surface-muted p-5 text-sm">
              <p className="mb-2 font-semibold text-foreground">
                Exemple : pavé droit <Math tex="ABCDEFGH" />, <Math tex="AB = 3\text{ cm}" />, <Math tex="AD = 1\text{ cm}" />,{" "}
                <Math tex="AE = 2\text{ cm}" />.
              </p>
              <p><Math tex="A_L = h \times p = 2 \times (1+3+1+3) = 2 \times 8" /></p>
              <p className="font-semibold text-brand-700">Donc : <Math tex="A_L = 16\text{ cm}^2" /></p>
              <p><Math tex="A_T = A_L + 2A_B = 16 + 2 \times (1 \times 3) = 16 + 6" /></p>
              <p className="font-semibold text-brand-700">Donc : <Math tex="A_T = 22\text{ cm}^2" /></p>
            </div>
            <FigureBox>
              {/* Pavé droit ABCDEFGH : face avant ABFE (vraie grandeur, AB=3 horizontal, AE=2 vertical),
                  face arrière DCGH décalée du vecteur de profondeur (35,-20) représentant AD=1. Seul le
                  sommet D (bas-gauche-arrière) est caché : ses 3 arêtes sont en pointillés. */}
              <svg viewBox="0 0 190 155" className="w-full max-w-[210px]">
                <polygon points="65,100 155,100 155,30 65,30" fill="#c7d2fe" fillOpacity="0.35" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="30" y1="120" x2="65" y2="100" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                <polygon points="30,120 120,120 120,50 30,50" fill="#eef2ff" stroke="#4338ca" strokeWidth="2.2" />
                <line x1="120" y1="120" x2="155" y2="100" stroke="#4338ca" strokeWidth="2" />
                <line x1="30" y1="50" x2="65" y2="30" stroke="#4338ca" strokeWidth="2" />
                <line x1="120" y1="50" x2="155" y2="30" stroke="#4338ca" strokeWidth="2" />
                <text x="20" y="135" fontSize="12" fontWeight="600" fill="#334155">A</text>
                <text x="128" y="135" fontSize="12" fontWeight="600" fill="#334155">B</text>
                <text x="61" y="118" fontSize="12" fontWeight="600" fill="#334155">D</text>
                <text x="165" y="110" fontSize="12" fontWeight="600" fill="#334155">C</text>
                <text x="20" y="42" fontSize="12" fontWeight="600" fill="#334155">E</text>
                <text x="128" y="42" fontSize="12" fontWeight="600" fill="#334155">F</text>
                <text x="61" y="24" fontSize="12" fontWeight="600" fill="#334155">H</text>
                <text x="165" y="26" fontSize="12" fontWeight="600" fill="#334155">G</text>
                <text x="75" y="140" textAnchor="middle" fontSize="11" fill="#16a34a">3 cm</text>
                <text x="14" y="88" textAnchor="middle" fontSize="11" fill="#16a34a">2 cm</text>
                <text x="146" y="106" textAnchor="middle" fontSize="11" fill="#16a34a">1 cm</text>
              </svg>
            </FigureBox>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. PYRAMIDE ===================== */}
      <LessonSection
        kicker="02 · La pyramide"
        title="Un sommet, une base, des triangles"
        tone="muted"
        description="La pyramide ajoute une idée nouvelle : le tiers dans la formule du volume."
      >
        <div className="mb-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">a) Définition</p>
          <div className="grid items-center gap-6 lg:grid-cols-3">
            <div className="space-y-3 text-sm sm:text-base lg:col-span-2">
              <Box title="Définition" tone="def">
                Une <strong className="text-foreground">pyramide</strong> de sommet <Math tex="S" /> est un solide
                délimité par :
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li><strong className="text-foreground">sa base</strong> : la face qui ne contient pas <Math tex="S" /> (triangle, quadrilatère…) ;</li>
                  <li><strong className="text-foreground">ses faces latérales</strong> : des triangles de sommet <Math tex="S" />, dont un côté est un côté de la base.</li>
                </ul>
              </Box>
              <p className="text-foreground-muted">
                Le segment <Math tex="[SH]" />, perpendiculaire au plan de la base (où <Math tex="H" /> est un point de
                ce plan), est la <strong className="text-foreground">hauteur</strong> de la pyramide.
              </p>
              <Box title="Tétraèdre" tone="thm">
                Les <strong className="text-foreground">tétraèdres</strong> sont des pyramides à{" "}
                <strong className="text-foreground">quatre faces triangulaires</strong>, six arêtes et quatre sommets.
              </Box>
              <Box title="Pyramide régulière" tone="prop">
                Une pyramide de sommet <Math tex="S" /> est dite <strong className="text-foreground">régulière</strong>{" "}
                lorsque sa base est un polygone régulier de centre <Math tex="O" />, et <Math tex="[SO]" /> est la
                hauteur de la pyramide.
              </Box>
            </div>
            <FigureBox>
              <svg viewBox="0 0 220 220" className="w-full max-w-[210px]">
                <polygon points="60,190 190,175 150,120 40,135" fill="#eef2ff" stroke="#4338ca" strokeWidth="2" opacity="0.9" />
                <line x1="60" y1="190" x2="105" y2="40" stroke="#4338ca" strokeWidth="2.4" />
                <line x1="190" y1="175" x2="105" y2="40" stroke="#4338ca" strokeWidth="2.4" />
                <line x1="150" y1="120" x2="105" y2="40" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="40" y1="135" x2="105" y2="40" stroke="#4338ca" strokeWidth="2.4" />
                <line x1="105" y1="40" x2="105" y2="150" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 3" />
                <text x="105" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                <text x="107" y="163" textAnchor="middle" fontSize="12" fontWeight="600" fill="#f97316">H</text>
                <text x="30" y="145" textAnchor="middle" fontSize="12" fill="#334155">A</text>
                <text x="198" y="180" textAnchor="middle" fontSize="12" fill="#334155">B</text>
                <text x="55" y="205" textAnchor="middle" fontSize="12" fill="#334155">C</text>
                <text x="160" y="112" textAnchor="middle" fontSize="12" fill="#334155">D</text>
              </svg>
            </FigureBox>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">b) Aire latérale, aire totale, volume</p>
          <div className="grid gap-6 lg:grid-cols-3">
            <Box title="Formules" tone="prop">
              <div className="space-y-3">
                <p><strong className="text-foreground">Aire latérale</strong> <Math tex="A_L" /> d&apos;une pyramide : somme des aires de ses faces latérales.</p>
                <p><strong className="text-foreground">Aire totale</strong> <Math tex="A_T" /> : somme de l&apos;aire latérale et de l&apos;aire de la base.</p>
                <Formula><Math tex="A_T = A_L + A_B" /></Formula>
                <p><strong className="text-foreground">Volume</strong> <Math tex="V" /> : le tiers du produit de la hauteur <Math tex="h" /> par l&apos;aire de la base <Math tex="A_B" />.</p>
                <Formula><Math tex="V = \dfrac{1}{3} \times h \times A_B" /></Formula>
              </div>
            </Box>
            <div className="space-y-2 rounded-xl bg-surface-muted p-5 text-sm">
              <p className="font-semibold text-foreground">Exemple 1 (pyramide à base carrée) :</p>
              <p><Math tex="A_L = 4 \times \dfrac{(215 \times 179{,}30)}{2} = 77099\text{ m}^2" /></p>
              <p className="pt-2 font-semibold text-foreground">Exemple 2 :</p>
              <p><Math tex="A_L = 3 \times \dfrac{(1{,}5 \times 1{,}3)}{2} = 2{,}925\text{ cm}^2" /></p>
              <p className="pt-2 font-semibold text-foreground">
                Exemple 3 : <Math tex="A_L = 10\text{ cm}^2" />, <Math tex="A_B = 3{,}5\text{ cm}^2" />
              </p>
              <p><Math tex="A_T = A_L + A_B = 10 + 3{,}5 = 13{,}5\text{ cm}^2" /></p>
              <p className="pt-2 font-semibold text-foreground">
                Exemple 4 (volume) : <Math tex="A_B = 123\text{ cm}^2" />, <Math tex="h = 8\text{ cm}" />
              </p>
              <p><Math tex="V = \dfrac13 \times 8 \times 123 = \dfrac{984}{3}" /></p>
              <p className="font-semibold text-brand-700">Donc : <Math tex="V = 328\text{ cm}^3" /></p>
            </div>
            <FigureBox>
              {/* Base ABCD (parallélogramme exact : D=A+profondeur, C=B+profondeur) et sommet S centré
                  au-dessus du centre de la base. Seul le sommet D (arrière) est caché : arêtes en pointillés. */}
              <svg viewBox="0 0 220 160" className="w-full max-w-[220px]">
                <polygon points="40,140 140,140 175,120 75,120" fill="#eef2ff" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1="107.5" y1="40" x2="75" y2="120" stroke="#4338ca" strokeWidth="1.8" strokeDasharray="4 3" />
                <line x1="107.5" y1="40" x2="40" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                <line x1="107.5" y1="40" x2="140" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                <line x1="107.5" y1="40" x2="175" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                <line x1="40" y1="140" x2="140" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                <line x1="140" y1="140" x2="175" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                <line x1="107.5" y1="40" x2="107.5" y2="130" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 3" />
                <text x="107.5" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                <text x="28" y="152" fontSize="12" fontWeight="600" fill="#334155">A</text>
                <text x="150" y="152" fontSize="12" fontWeight="600" fill="#334155">B</text>
                <text x="61" y="114" fontSize="12" fontWeight="600" fill="#334155">D</text>
                <text x="185" y="118" fontSize="12" fontWeight="600" fill="#334155">C</text>
                <text x="90" y="132" textAnchor="middle" fontSize="11" fontWeight="600" fill="#4338ca">A_B</text>
                <text x="122" y="88" textAnchor="middle" fontSize="12" fill="#f97316">h</text>
              </svg>
            </FigureBox>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. CONE DE REVOLUTION ===================== */}
      <LessonSection
        kicker="03 · Cône de révolution"
        title="Le solide qui tourne"
        tone="light"
        description="Le cône : un triangle rectangle qui tourne autour d'un de ses côtés."
      >
        <div className="mb-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">a) Définition</p>
          <div className="grid items-center gap-6 lg:grid-cols-3">
            <div className="space-y-3 text-sm text-foreground-muted sm:text-base lg:col-span-2">
              <Box title="Définition" tone="def">
                Un <strong className="text-foreground">cône de révolution</strong> est un solide obtenu par rotation
                d&apos;un triangle rectangle autour d&apos;un axe correspondant à l&apos;un des côtés formant l&apos;angle
                droit.
              </Box>
              <p>
                Il est constitué d&apos;une <strong className="text-foreground">base</strong>, un disque, et d&apos;une{" "}
                <strong className="text-foreground">surface latérale conique</strong>.
              </p>
              <p>
                Le cône possède une <strong className="text-foreground">hauteur</strong> : la droite perpendiculaire à
                sa base et passant par son sommet.
              </p>
            </div>
            <FigureBox>
              <svg viewBox="0 0 220 220" className="w-full max-w-[210px]">
                <ellipse cx="110" cy="175" rx="75" ry="22" fill="#eef2ff" stroke="#4338ca" strokeWidth="2" />
                <line x1="35" y1="175" x2="185" y2="175" stroke="#4338ca" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
                <line x1="110" y1="175" x2="110" y2="35" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 3" />
                <line x1="35" y1="175" x2="110" y2="35" stroke="#4338ca" strokeWidth="2.4" />
                <line x1="185" y1="175" x2="110" y2="35" stroke="#4338ca" strokeWidth="2.4" />
                <line x1="110" y1="175" x2="185" y2="175" stroke="#16a34a" strokeWidth="2" />
                <text x="110" y="25" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                <text x="112" y="195" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4338ca">O</text>
                <text x="150" y="192" textAnchor="middle" fontSize="11" fill="#16a34a">rayon</text>
                <text x="70" y="100" textAnchor="middle" fontSize="11" fill="#4338ca">génératrice</text>
                <text x="122" y="105" textAnchor="middle" fontSize="12" fill="#f97316">h</text>
              </svg>
            </FigureBox>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">b) Aire latérale, aire totale, volume</p>
          <div className="grid gap-6 lg:grid-cols-3">
            <Box title="Formules" tone="prop">
              <div className="space-y-3">
                <p>
                  <strong className="text-foreground">Aire latérale</strong> <Math tex="A_L" /> d&apos;un cône de
                  révolution de rayon <Math tex="R" /> et de génératrice <Math tex="a" /> :
                </p>
                <Formula><Math tex="A_L = \pi \times R \times a" /></Formula>
                <p><strong className="text-foreground">Aire totale</strong> <Math tex="A_T" /> : somme de l&apos;aire latérale et de l&apos;aire de la base.</p>
                <Formula><Math tex="A_T = A_L + A_B" /></Formula>
                <p><strong className="text-foreground">Volume</strong> <Math tex="V" /> : le tiers du produit de la hauteur <Math tex="h" /> par l&apos;aire de la base <Math tex="A_B" />.</p>
                <Formula><Math tex="V = \dfrac{1}{3} \times h \times A_B" /></Formula>
              </div>
            </Box>
            <div className="space-y-2 rounded-xl bg-surface-muted p-5 text-sm">
              <p className="font-semibold text-foreground">
                Exemple 1 : <Math tex="R = 2\text{ cm}" />, <Math tex="a = 5\text{ cm}" />
              </p>
              <p><Math tex="A_L = \pi \times R \times a = 3{,}14 \times 2 \times 5 = 31{,}4" /></p>
              <p className="font-semibold text-brand-700">Donc : <Math tex="A_L = 31{,}4\text{ cm}^2" /></p>
              <p className="pt-2 font-semibold text-foreground">
                Exemple 2 : <Math tex="SM = 10\text{ cm}" /> (génératrice), <Math tex="OM = 6\text{ cm}" /> (rayon)
              </p>
              <p><Math tex="A_L = \pi \times OM \times SM = 3{,}14 \times 6 \times 10 = 188{,}4\text{ cm}^2" /></p>
              <p><Math tex="A_T = A_L + A_B = 188{,}4 + (\pi \times 6^2) = 188{,}4 + 113{,}04 = 301{,}44\text{ cm}^2" /></p>
              <p className="pt-2 font-semibold text-foreground">
                Exemple 3 (volume) : <Math tex="R = 2\text{ cm}" />, <Math tex="h = 5\text{ cm}" />
              </p>
              <p><Math tex="V = \dfrac13 \times 5 \times 2 \times 2 \times \pi = 20 \times \dfrac{3{,}14}{3}" /></p>
              <p className="font-semibold text-brand-700">Donc : <Math tex="V = 20{,}93\text{ cm}^3" /></p>
            </div>
            <FigureBox>
              <svg viewBox="0 0 190 220" className="w-full max-w-[190px]">
                <ellipse cx="90" cy="175" rx="65" ry="18" fill="#eef2ff" stroke="#4338ca" strokeWidth="2" />
                <line x1="90" y1="25" x2="90" y2="175" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 3" />
                <line x1="25" y1="175" x2="90" y2="25" stroke="#4338ca" strokeWidth="2.4" />
                <line x1="155" y1="175" x2="90" y2="25" stroke="#4338ca" strokeWidth="2.4" />
                <line x1="90" y1="175" x2="155" y2="175" stroke="#16a34a" strokeWidth="2" />
                <text x="90" y="15" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                <text x="92" y="195" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4338ca">O</text>
                <text x="76" y="100" textAnchor="middle" fontSize="12" fill="#f97316">h</text>
                <text x="122" y="175" textAnchor="middle" fontSize="12" fill="#16a34a">R</text>
                <text x="55" y="95" textAnchor="middle" fontSize="12" fill="#4338ca">a</text>
              </svg>
            </FigureBox>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="4 exercices corrigés"
        tone="muted"
        description={<>Cherche sur ton cahier, puis clique pour vérifier. On prendra <Math tex="\pi \approx 3{,}14" />.</>}
      >
        <div className="mb-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">Rappel : formules de calculs d&apos;aires</p>
          <div className="grid gap-3 text-center text-sm sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl bg-surface-muted p-4">
              <p className="mb-1 text-foreground-muted">Carré de côté <Math tex="L" /></p>
              <p className="font-semibold text-brand-700"><Math tex="A = L^2" /></p>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <p className="mb-1 text-foreground-muted">Rectangle <Math tex="L \times l" /></p>
              <p className="font-semibold text-brand-700"><Math tex="A = L \times l" /></p>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <p className="mb-1 text-foreground-muted">Triangle rectangle en <Math tex="A" /></p>
              <p className="font-semibold text-brand-700"><Math tex="A = \dfrac{AB \times AC}{2}" /></p>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <p className="mb-1 text-foreground-muted">Triangle (base <Math tex="b" />, hauteur <Math tex="h" />)</p>
              <p className="font-semibold text-brand-700"><Math tex="A = \dfrac{b \times h}{2}" /></p>
            </div>
            <div className="rounded-xl bg-surface-muted p-4">
              <p className="mb-1 text-foreground-muted">Disque de rayon <Math tex="R" /></p>
              <p className="font-semibold text-brand-700"><Math tex="A = \pi R^2" /></p>
            </div>
          </div>
        </div>

        <ExerciseGroup total={4} celebrationTitle="Bravo, les 4 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la géométrie dans l'espace.">
          <ExerciseCard
            id="1"
            index={1}
            title="Volume de pyramides"
            items={
              <div>
                <div className="mb-4 flex justify-center">
                  <FigureBox>
                    {/* Pyramide générique : base A_B (parallélogramme exact) et hauteur H, sans dimensions
                        fixes puisque l'exercice porte sur 4 pyramides différentes (tableau). */}
                    <svg viewBox="0 0 220 160" className="w-full max-w-[200px]">
                      <polygon points="40,140 140,140 175,120 75,120" fill="#eef2ff" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="107.5" y1="40" x2="75" y2="120" stroke="#4338ca" strokeWidth="1.8" strokeDasharray="4 3" />
                      <line x1="107.5" y1="40" x2="40" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="107.5" y1="40" x2="140" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="107.5" y1="40" x2="175" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="40" y1="140" x2="140" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="140" y1="140" x2="175" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="107.5" y1="40" x2="107.5" y2="130" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 3" />
                      <text x="107.5" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                      <text x="90" y="132" textAnchor="middle" fontSize="12" fontWeight="600" fill="#4338ca">A_B</text>
                      <text x="122" y="88" textAnchor="middle" fontSize="12" fill="#f97316">H</text>
                    </svg>
                  </FigureBox>
                </div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Calculer le volume des pyramides suivantes : <Math tex="V = A_B \times H / 3" />
                </p>
                <DataTable
                  rows={[
                    ["Aire de la base (A_B)", "9 cm²", "8,25 cm²", "80 cm²", "2 dm²"],
                    ["Hauteur (H)", "4 cm", "10 cm", "141 mm", "24 cm"],
                    ["Volume (V = A_B×H/3)", "…", "…", "…", "…"],
                  ]}
                />
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <DataTable
                  rows={[
                    ["Aire de la base (A_B)", "9 cm²", "8,25 cm²", "80 cm²", "2 dm² = 200 cm²"],
                    ["Hauteur (H)", "4 cm", "10 cm", "141 mm = 14,1 cm", "24 cm"],
                    ["Volume", "12 cm³", "27,5 cm³", "376 cm³", "1600 cm³"],
                  ]}
                  highlight={[2]}
                />
                <p>
                  ➜ <Math tex="V = 9 \times 4 / 3 = 12\text{ cm}^3" /> ; <Math tex="V = 8{,}25 \times 10 / 3 = 27{,}5\text{ cm}^3" /> ;{" "}
                  <Math tex="V = 80 \times 14{,}1 / 3 = 376\text{ cm}^3" /> ; on convertit{" "}
                  <Math tex="2\text{ dm}^2 = 200\text{ cm}^2" />, <Math tex="V = 200 \times 24 / 3 = 1600\text{ cm}^3" />{" "}
                  (soit <Math tex="1{,}6\text{ dm}^3" />).
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Pyramides à base triangulaire"
            items={
              <div>
                <div className="mb-4 flex justify-center">
                  <FigureBox>
                    {/* Base triangulaire T1-T2-T3 : côté avant [T1T2]=b, hauteur du triangle tracée en
                        pointillés gris jusqu'à son pied, hauteur de la pyramide H en pointillés oranges
                        jusqu'au centroïde de la base. T3 (sommet arrière) est le seul sommet caché. */}
                    <svg viewBox="0 0 200 160" className="w-full max-w-[190px]">
                      <polygon points="40,140 140,140 90,108" fill="#eef2ff" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="90" y1="108" x2="90" y2="140" stroke="#64748b" strokeWidth="1.4" strokeDasharray="3 3" />
                      <line x1="90" y1="40" x2="90" y2="129.3" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 3" />
                      <line x1="90" y1="40" x2="40" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="90" y1="40" x2="140" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="90" y1="40" x2="90" y2="108" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="40" y1="140" x2="140" y2="140" stroke="#4338ca" strokeWidth="2.2" />
                      <text x="90" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                      <text x="90" y="153" textAnchor="middle" fontSize="12" fill="#16a34a">b</text>
                      <text x="80" y="126" textAnchor="middle" fontSize="11" fill="#64748b">h</text>
                      <text x="102" y="85" textAnchor="middle" fontSize="12" fill="#f97316">H</text>
                    </svg>
                  </FigureBox>
                </div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Calculer l&apos;aire de la base puis le volume des <strong className="text-foreground">pyramides à base triangulaire</strong> suivantes :
                </p>
                <DataTable
                  rows={[
                    ["", "Pyramide 1", "Pyramide 2", "Pyramide 3", "Pyramide 4"],
                    ["Côté (b)", "13 cm", "12,5 cm", "7 cm", "12 cm"],
                    ["Hauteur correspondante (h)", "5 cm", "10 cm", "3 cm", "12 cm"],
                    ["Aire de la base (B = b×h/2)", "…", "…", "…", "…"],
                    ["Hauteur (H) de la pyramide", "11 cm", "15 cm", "21 cm", "3 cm"],
                    ["Volume (V = B×H/3)", "…", "…", "…", "…"],
                  ]}
                />
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <DataTable
                  rows={[
                    ["", "Pyramide 1", "Pyramide 2", "Pyramide 3", "Pyramide 4"],
                    ["Aire de la base", "32,5 cm²", "62,5 cm²", "10,5 cm²", "72 cm²"],
                    ["Volume", "≈ 119,17 cm³", "312,5 cm³", "73,5 cm³", "72 cm³"],
                  ]}
                  highlight={[1, 2]}
                />
                <p>➜ Pyramide 1 : <Math tex="B = 13 \times 5 / 2 = 32{,}5\text{ cm}^2" /> ; <Math tex="V = 32{,}5 \times 11 / 3 \approx 119{,}17\text{ cm}^3" />.</p>
                <p>➜ Pyramide 2 : <Math tex="B = 12{,}5 \times 10 / 2 = 62{,}5\text{ cm}^2" /> ; <Math tex="V = 62{,}5 \times 15 / 3 = 312{,}5\text{ cm}^3" />.</p>
                <p>➜ Pyramide 3 : <Math tex="B = 7 \times 3 / 2 = 10{,}5\text{ cm}^2" /> ; <Math tex="V = 10{,}5 \times 21 / 3 = 73{,}5\text{ cm}^3" />.</p>
                <p>➜ Pyramide 4 : <Math tex="B = 12 \times 12 / 2 = 72\text{ cm}^2" /> ; <Math tex="V = 72 \times 3 / 3 = 72\text{ cm}^3" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Cônes de révolution"
            items={
              <div>
                <div className="mb-4 flex justify-center">
                  <FigureBox>
                    <svg viewBox="0 0 190 200" className="w-full max-w-[180px]">
                      <ellipse cx="90" cy="160" rx="60" ry="16" fill="#eef2ff" stroke="#4338ca" strokeWidth="2" />
                      <line x1="90" y1="30" x2="90" y2="160" stroke="#f97316" strokeWidth="1.8" strokeDasharray="4 3" />
                      <line x1="30" y1="160" x2="90" y2="30" stroke="#4338ca" strokeWidth="2.4" />
                      <line x1="150" y1="160" x2="90" y2="30" stroke="#4338ca" strokeWidth="2.4" />
                      <line x1="90" y1="160" x2="150" y2="160" stroke="#16a34a" strokeWidth="2" />
                      <text x="90" y="20" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0f172a">S</text>
                      <text x="76" y="90" textAnchor="middle" fontSize="12" fill="#f97316">H</text>
                      <text x="120" y="180" textAnchor="middle" fontSize="12" fill="#16a34a">R</text>
                    </svg>
                  </FigureBox>
                </div>
                <p className="mb-3 text-sm text-foreground-muted">
                  Calculer l&apos;aire de la base puis le volume des <strong className="text-foreground">cônes de révolution</strong> suivants (on arrondira au dixième) :
                </p>
                <DataTable
                  rows={[
                    ["", "Cône 1", "Cône 2", "Cône 3", "Cône 4"],
                    ["Rayon (R)", "5 cm", "6 cm", "1,1 cm", "12,5 cm"],
                    ["Aire de la base (B = π×R²)", "…", "…", "…", "…"],
                    ["Hauteur (H)", "4 cm", "6,5 cm", "10 cm", "12,5 cm"],
                    ["Volume (V = B×H/3)", "…", "…", "…", "…"],
                  ]}
                />
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <DataTable
                  rows={[
                    ["", "Cône 1", "Cône 2", "Cône 3", "Cône 4"],
                    ["Aire de la base", "78,5 cm²", "113,0 cm²", "3,8 cm²", "490,6 cm²"],
                    ["Volume", "104,7 cm³", "244,9 cm³", "12,7 cm³", "2044,3 cm³"],
                  ]}
                  highlight={[1, 2]}
                />
                <p>➜ Cône 1 : <Math tex="B = 3{,}14 \times 5^2 = 78{,}5\text{ cm}^2" /> ; <Math tex="V = 78{,}5 \times 4 / 3 \approx 104{,}7\text{ cm}^3" />.</p>
                <p>➜ Cône 2 : <Math tex="B = 3{,}14 \times 6^2 = 113{,}0\text{ cm}^2" /> ; <Math tex="V = 113{,}04 \times 6{,}5 / 3 \approx 244{,}9\text{ cm}^3" />.</p>
                <p>➜ Cône 3 : <Math tex="B = 3{,}14 \times 1{,}1^2 \approx 3{,}8\text{ cm}^2" /> ; <Math tex="V \approx 3{,}80 \times 10 / 3 \approx 12{,}7\text{ cm}^3" />.</p>
                <p>➜ Cône 4 : <Math tex="B = 3{,}14 \times 12{,}5^2 \approx 490{,}6\text{ cm}^2" /> ; <Math tex="V \approx 490{,}625 \times 12{,}5 / 3 \approx 2044{,}3\text{ cm}^3" />.</p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Même hauteur : qui est le plus volumineux ?"
            itemsLabel="5 figures · H = 4 cm"
            items={
              <div>
                <p className="mb-1 text-sm text-foreground-muted">Toutes ces figures ont la même hauteur : 4 cm.</p>
                <p className="mb-4 text-sm text-foreground-muted">
                  <strong className="text-foreground">a.</strong> Calculer l&apos;aire de chaque base.{" "}
                  <strong className="text-foreground">b.</strong> Calculer le volume de chaque figure.{" "}
                  <strong className="text-foreground">c.</strong> Quelle est la plus volumineuse ?
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <svg viewBox="0 0 160 150" className="mx-auto mb-2 w-full max-w-[150px]">
                      <ellipse cx="80" cy="115" rx="55" ry="16" fill="#eef2ff" stroke="#4338ca" strokeWidth="2" />
                      <line x1="25" y1="115" x2="135" y2="115" stroke="#4338ca" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="25" y1="115" x2="80" y2="15" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="135" y1="115" x2="80" y2="15" stroke="#4338ca" strokeWidth="2.2" />
                      <text x="52" y="108" textAnchor="middle" fontSize="12" fill="#16a34a">3 cm</text>
                    </svg>
                    <p className="mb-1 text-xs text-foreground-muted">Cône, rayon R = 3 cm</p>
                    <p className="text-sm"><strong>a.</strong> Aire (base) = …… cm²</p>
                    <p className="text-sm"><strong>b.</strong> Volume = …… cm³</p>
                  </div>

                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <svg viewBox="0 0 160 150" className="mx-auto mb-2 w-full max-w-[150px]">
                      {/* Base ABCD exacte : D=A+profondeur, C=B+profondeur (vrai parallélogramme).
                          D (arrière-gauche) est le seul sommet caché. */}
                      <polygon points="35,120 115,120 130,105 50,105" fill="#eef2ff" stroke="none" />
                      <line x1="50" y1="105" x2="130" y2="105" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="35" y1="120" x2="50" y2="105" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="35" y1="120" x2="115" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="115" y1="120" x2="130" y2="105" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="82.5" y1="20" x2="35" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="82.5" y1="20" x2="115" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="82.5" y1="20" x2="130" y2="105" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="82.5" y1="20" x2="50" y2="105" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <text x="75" y="136" textAnchor="middle" fontSize="11" fill="#16a34a">8 cm</text>
                      <text x="128" y="115" textAnchor="middle" fontSize="11" fill="#16a34a">1 cm</text>
                    </svg>
                    <p className="mb-1 text-xs text-foreground-muted">Pyramide, base 8 cm × 1 cm</p>
                    <p className="text-sm"><strong>a.</strong> Aire (base) = …… cm²</p>
                    <p className="text-sm"><strong>b.</strong> Volume = …… cm³</p>
                  </div>

                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <svg viewBox="0 0 160 150" className="mx-auto mb-2 w-full max-w-[150px]">
                      {/* Base ABCD exacte : D=A+profondeur, C=B+profondeur (vrai parallélogramme) */}
                      <polygon points="30,115 120,115 145,97 55,97" fill="#eef2ff" stroke="none" />
                      <line x1="55" y1="97" x2="145" y2="97" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="30" y1="115" x2="55" y2="97" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="30" y1="115" x2="120" y2="115" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="120" y1="115" x2="145" y2="97" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="87.5" y1="20" x2="30" y2="115" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="87.5" y1="20" x2="120" y2="115" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="87.5" y1="20" x2="145" y2="97" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="87.5" y1="20" x2="55" y2="97" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <text x="77" y="130" textAnchor="middle" fontSize="11" fill="#16a34a">6 cm</text>
                      <text x="140" y="108" textAnchor="middle" fontSize="11" fill="#16a34a">2 cm</text>
                    </svg>
                    <p className="mb-1 text-xs text-foreground-muted">Pyramide, base 6 cm × 2 cm</p>
                    <p className="text-sm"><strong>a.</strong> Aire (base) = …… cm²</p>
                    <p className="text-sm"><strong>b.</strong> Volume = …… cm³</p>
                  </div>

                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <svg viewBox="0 0 160 150" className="mx-auto mb-2 w-full max-w-[150px]">
                      {/* Base ABCD exacte : D=A+profondeur, C=B+profondeur (vrai parallélogramme) */}
                      <polygon points="40,120 110,120 130,104 60,104" fill="#eef2ff" stroke="none" />
                      <line x1="60" y1="104" x2="130" y2="104" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="40" y1="120" x2="60" y2="104" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <line x1="40" y1="120" x2="110" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="110" y1="120" x2="130" y2="104" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="85" y1="20" x2="40" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="85" y1="20" x2="110" y2="120" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="85" y1="20" x2="130" y2="104" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="85" y1="20" x2="60" y2="104" stroke="#4338ca" strokeWidth="1.6" strokeDasharray="4 3" />
                      <text x="75" y="133" textAnchor="middle" fontSize="11" fill="#16a34a">3 cm</text>
                      <text x="45" y="110" textAnchor="middle" fontSize="11" fill="#16a34a">2,5 cm</text>
                    </svg>
                    <p className="mb-1 text-xs text-foreground-muted">Pyramide, base 3 cm × 2,5 cm</p>
                    <p className="text-sm"><strong>a.</strong> Aire (base) = …… cm²</p>
                    <p className="text-sm"><strong>b.</strong> Volume = …… cm³</p>
                  </div>

                  <div className="rounded-xl bg-surface-muted p-4 text-center">
                    <svg viewBox="0 0 160 150" className="mx-auto mb-2 w-full max-w-[150px]">
                      <ellipse cx="80" cy="120" rx="40" ry="13" fill="#eef2ff" stroke="#4338ca" strokeWidth="2" />
                      <line x1="40" y1="120" x2="120" y2="120" stroke="#4338ca" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="40" y1="120" x2="80" y2="20" stroke="#4338ca" strokeWidth="2.2" />
                      <line x1="120" y1="120" x2="80" y2="20" stroke="#4338ca" strokeWidth="2.2" />
                      <text x="60" y="113" textAnchor="middle" fontSize="11" fill="#16a34a">1,5 cm</text>
                    </svg>
                    <p className="mb-1 text-xs text-foreground-muted">Cône, rayon R = 1,5 cm</p>
                    <p className="text-sm"><strong>a.</strong> Aire (base) = …… cm²</p>
                    <p className="text-sm"><strong>b.</strong> Volume = …… cm³</p>
                  </div>

                  <div className="flex flex-col items-center justify-center rounded-xl bg-brand-50 p-4 text-center dark:bg-white/5">
                    <p className="text-sm font-semibold text-brand-700">c. Quelle figure est la plus volumineuse ?</p>
                  </div>
                </div>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <DataTable
                  rows={[
                    ["Figure", "Cône R=3", "Pyramide 8×1", "Pyramide 6×2", "Pyramide 3×2,5", "Cône R=1,5"],
                    ["Aire base", "28,3 cm²", "8 cm²", "12 cm²", "7,5 cm²", "7,07 cm²"],
                    ["Volume", "≈ 37,7 cm³", "≈ 10,7 cm³", "16 cm³", "10 cm³", "≈ 9,4 cm³"],
                  ]}
                  highlight={[1, 2]}
                />
                <p>➜ Cône (R=3) : <Math tex="B = 3{,}14 \times 3^2 = 28{,}3\text{ cm}^2" /> ; <Math tex="V = 28{,}3 \times 4 / 3 \approx 37{,}7\text{ cm}^3" />.</p>
                <p>➜ Pyramide (8×1) : <Math tex="B = 8 \times 1 = 8\text{ cm}^2" /> ; <Math tex="V = 8 \times 4 / 3 \approx 10{,}7\text{ cm}^3" />.</p>
                <p>➜ Pyramide (6×2) : <Math tex="B = 6 \times 2 = 12\text{ cm}^2" /> ; <Math tex="V = 12 \times 4 / 3 = 16\text{ cm}^3" />.</p>
                <p>➜ Pyramide (3×2,5) : <Math tex="B = 3 \times 2{,}5 = 7{,}5\text{ cm}^2" /> ; <Math tex="V = 7{,}5 \times 4 / 3 = 10\text{ cm}^3" />.</p>
                <p>➜ Cône (R=1,5) : <Math tex="B = 3{,}14 \times 1{,}5^2 \approx 7{,}07\text{ cm}^2" /> ; <Math tex="V \approx 7{,}07 \times 4 / 3 \approx 9{,}4\text{ cm}^3" />.</p>
                <p className="font-semibold text-brand-700">
                  c. La figure la plus volumineuse est le <strong>cône de rayon R = 3 cm</strong>, avec{" "}
                  <Math tex="V \approx 37{,}7\text{ cm}^3" /> (loin devant la pyramide 6 cm × 2 cm, seulement deuxième
                  avec <Math tex="V = 16\text{ cm}^3" />).
                </p>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
