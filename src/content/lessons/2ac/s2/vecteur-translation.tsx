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
  title: "Vecteurs et translation · Cours et exercices corrigés | 2AC",
  description:
    "Cours complet sur le vecteur et la translation, les vecteurs égaux, nul et opposés, l'addition (relation de Chasles), la soustraction, la multiplication par un réel, la colinéarité, l'alignement et le milieu d'un segment, et 9 exercices corrigés, 2ème année collège, semestre 2.",
  kicker: "2ᵉ Année Collège · Chapitre 7",
  heroTitle: "Vecteurs et translation",
  heroSubtitle:
    "Une direction, un sens, une longueur : trois informations qui tiennent dans une seule flèche.",
  footerNote: "Vecteurs et translation · Mathématiques, 2ᵉ année collège, semestre 2.",
  sections: [
    { id: "cours", label: "Cours" },
    { id: "exercices", label: "Exercices" },
  ],
};

const BOX_STYLES = {
  def: { wrap: "border-l-4 border-orange-400 bg-orange-100/50", title: "text-orange-700" },
  thm: { wrap: "border-l-4 border-brand-500 bg-brand-50/60 dark:bg-white/5", title: "text-brand-700" },
  remark: { wrap: "border-l-4 border-sky-400 bg-sky-100/50", title: "text-sky-700" },
  example: { wrap: "border-l-4 border-green-500 bg-green-100/50", title: "text-green-700" },
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

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
      <p className="mb-4 text-sm font-bold text-brand-700">{title}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function FigureBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface-muted p-4">
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
          { value: "9", label: "exercices" },
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
            <svg viewBox="0 0 240 160" className="h-48 w-60">
              <defs>
                <marker id="heroArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L6,3 L0,6 Z" fill="white" />
                </marker>
              </defs>
              <line x1="30" y1="130" x2="190" y2="30" stroke="white" strokeWidth="3" markerEnd="url(#heroArrow)" />
              <circle cx="30" cy="130" r="5" fill="white" />
              <circle cx="190" cy="30" r="5" fill="white" />
              <text x="14" y="150" fontSize="16" fontWeight="700" fill="white">A</text>
              <text x="192" y="22" fontSize="16" fontWeight="700" fill="white">A&apos;</text>
              <text x="90" y="70" fontSize="16" fontStyle="italic" fill="white" opacity="0.9">u</text>
            </svg>
            <div className="rounded-xl bg-white px-4 py-3 text-neutral-900">
              <p className="text-xs font-medium text-neutral-500">Notation</p>
              <p className="font-semibold text-brand-700">
                <Math tex="\vec u = \overrightarrow{AA'}" /> : direction, sens, longueur
              </p>
            </div>
          </div>
        }
      />

      {/* ===================== I. VECTEUR ET TRANSLATION ===================== */}
      <LessonSection
        id="cours"
        kicker="01 · Vecteur et translation"
        title="Direction, sens, translation"
        tone="light"
        description="Un vecteur naît d'un glissement : une direction, un sens, une longueur, et rien de plus."
      >
        <Card title="1.1) Direction et sens">
          <Box title="Définition 1" tone="def">
            Une droite définit une direction. On dit que deux droites <Math tex="d" /> et <Math tex="d'" /> ont la{" "}
            <strong className="text-foreground">même direction</strong> lorsque <Math tex="d" /> et <Math tex="d'" />{" "}
            sont parallèles ou confondues. Si <strong className="text-foreground">deux droites sont sécantes</strong>,
            elles n&apos;ont donc pas la même direction.
          </Box>

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <FigureBox>
              <svg viewBox="0 0 260 150" className="w-full text-neutral-700">
                <defs>
                  <marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                <line x1="60" y1="8" x2="205" y2="140" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#a1)" />
                <line x1="200" y1="145" x2="65" y2="13" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#a1)" />
                <text x="45" y="12" fontSize="14" fill="currentColor" fontStyle="italic">Δ</text>
                <line x1="10" y1="115" x2="250" y2="35" stroke="#e11d48" strokeWidth="1.5" markerEnd="url(#a1)" />
                <text x="230" y="30" fontSize="14" fill="#e11d48" fontStyle="italic">d</text>
                <line x1="10" y1="70" x2="250" y2="-10" stroke="#e11d48" strokeWidth="1.5" markerEnd="url(#a1)" />
                <text x="230" y="0" fontSize="14" fill="#e11d48" fontStyle="italic">d&apos;</text>
              </svg>
            </FigureBox>
            <p className="text-sm text-foreground-muted">
              Les droites <Math tex="d" /> et <Math tex="d'" /> sont parallèles donc elles ont la même direction.{" "}
              <Math tex="\Delta" /> et <Math tex="d" /> sont sécantes, donc elles n&apos;ont pas la même direction.
            </p>
          </div>

          <Box title="Définition 2" tone="def">
            <p className="mb-3">
              Soit <Math tex="d" /> une droite donnée. On peut définir deux sens possibles sur cette droite.
            </p>
            <div className="mb-3 rounded-lg bg-surface p-3">
              <svg viewBox="0 0 300 70" className="w-full text-neutral-700">
                <defs>
                  <marker id="a2s" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                  <marker id="a2e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                <line x1="25" y1="35" x2="275" y2="35" stroke="currentColor" strokeWidth="1.5" markerStart="url(#a2s)" markerEnd="url(#a2e)" transform="rotate(180 150 35)" />
                <line x1="25" y1="35" x2="275" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="270" y1="30" x2="278" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="270" y1="40" x2="278" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="30" y1="30" x2="22" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="30" y1="40" x2="22" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <text x="10" y="20" fontSize="14" fill="currentColor" fontStyle="italic">d</text>
                <line x1="120" y1="28" x2="120" y2="42" stroke="currentColor" strokeWidth="1.5" />
                <text x="115" y="20" fontSize="14" fill="currentColor" fontStyle="italic">A</text>
                <line x1="180" y1="28" x2="180" y2="42" stroke="currentColor" strokeWidth="1.5" />
                <text x="175" y="20" fontSize="14" fill="currentColor" fontStyle="italic">B</text>
              </svg>
            </div>
            <p>
              Sens 1 : <em>de A vers B</em>. Sens 2 : <em>de B vers A</em>.
            </p>
          </Box>
        </Card>

        <Card title="1.2) Translation, déplacement rectiligne">
          <Box title="☠ Attention · remarque" tone="remark">
            Le mot « <strong className="text-foreground">direction</strong> » dans le langage courant se confond avec
            le mot « <strong className="text-foreground">sens</strong> ». En mathématiques, on choisit d&apos;abord une
            direction (une droite) puis on choisit un des deux sens sur cette droite.
          </Box>

          <Box title="Définition 1" tone="def">
            <strong className="text-foreground">Lorsqu&apos;on fait glisser</strong> une figure <Math tex="F" /> d&apos;un
            point <Math tex="A" /> à un point <Math tex="A'" /> sur une ligne droite sans la tourner, on déplace tous
            ses points sur des droites parallèles : <em>dans la même direction, dans le même sens et de la même
            longueur</em>. On dit que la figure <Math tex="F'" /> est l&apos;image de la figure <Math tex="F" /> par la
            translation qui transforme le point <Math tex="A" /> en <Math tex="A'" />. De même, le point{" "}
            <Math tex="B'" /> est l&apos;image de <Math tex="B" /> par la translation qui transforme <Math tex="A" /> en{" "}
            <Math tex="A'" />.
          </Box>

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <FigureBox>
              <svg viewBox="0 0 320 200" className="w-full text-neutral-700">
                <defs>
                  <marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                <line x1="40" y1="170" x2="130" y2="55" stroke="currentColor" strokeWidth="2" markerEnd="url(#a3)" />
                <line x1="80" y1="160" x2="170" y2="45" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#a3)" />
                <line x1="120" y1="150" x2="210" y2="35" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#a3)" />
                <circle cx="40" cy="170" r="2.5" fill="currentColor" /><text x="26" y="185" fontSize="14" fill="currentColor">A</text>
                <circle cx="80" cy="160" r="2.5" fill="#f43f5e" /><text x="70" y="178" fontSize="14" fill="#f43f5e">B</text>
                <circle cx="120" cy="150" r="2.5" fill="#0ea5e9" /><text x="112" y="168" fontSize="14" fill="#0ea5e9">C</text>
                <circle cx="130" cy="55" r="2.5" fill="currentColor" /><text x="132" y="48" fontSize="14" fill="currentColor">A&apos;</text>
                <circle cx="170" cy="45" r="2.5" fill="#f43f5e" /><text x="172" y="38" fontSize="14" fill="#f43f5e">B&apos;</text>
                <circle cx="210" cy="35" r="2.5" fill="#0ea5e9" /><text x="212" y="28" fontSize="14" fill="#0ea5e9">C&apos;</text>
                <text x="55" y="105" fontSize="14" fill="currentColor" fontStyle="italic">u</text>
              </svg>
            </FigureBox>
            <div className="space-y-2 text-sm text-foreground-muted">
              <p>
                Les couples formés des points et de leurs images par cette translation : <Math tex="(A;A')" />,{" "}
                <Math tex="(B;B')" />, <Math tex="(C;C')" />… définissent un vecteur par la donnée :
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li><em>d&apos;une direction</em> : la droite <Math tex="(AA')" /></li>
                <li><em>d&apos;un sens</em> : de <Math tex="A" /> vers <Math tex="A'" /></li>
                <li><em>d&apos;une longueur</em> <Math tex="=AA'" /></li>
              </ul>
              <p>
                On note <Math tex="\vec u" /> ce vecteur associé à la translation et on écrit :{" "}
                <Math tex="\vec u = \overrightarrow{AA'}" />
              </p>
            </div>
          </div>
        </Card>

        <Card title="1.3) Vecteurs égaux">
          <Box title="Définition 1" tone="def">
            Deux vecteurs <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" /> sont égaux
            lorsqu&apos;ils ont la <em>même direction, le même sens et la même longueur</em>. On écrit :{" "}
            <Math tex="\overrightarrow{AB} = \overrightarrow{CD}" />
          </Box>

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <FigureBox>
              <svg viewBox="0 0 260 180" className="w-full text-neutral-700">
                <defs>
                  <marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                <line x1="40" y1="160" x2="90" y2="50" stroke="currentColor" strokeWidth="2" markerEnd="url(#a4)" />
                <line x1="150" y1="160" x2="200" y2="50" stroke="currentColor" strokeWidth="2" markerEnd="url(#a4)" />
                <line x1="90" y1="50" x2="200" y2="50" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
                <line x1="40" y1="160" x2="150" y2="160" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="4 4" />
                <text x="20" y="175" fontSize="14" fill="currentColor">A</text>
                <text x="90" y="42" fontSize="14" fill="currentColor">B</text>
                <text x="150" y="178" fontSize="14" fill="currentColor">C</text>
                <text x="202" y="42" fontSize="14" fill="currentColor">D</text>
              </svg>
            </FigureBox>
            <p className="text-sm text-foreground-muted">
              <Math tex="ABDC" /> est un parallélogramme : <Math tex="\overrightarrow{AB} = \overrightarrow{CD}" />.
            </p>
          </div>

          <Box title="Théorème 1" tone="thm">
            <p className="mb-2">
              Soient <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> et <Math tex="D" /> quatre points deux à
              deux distincts. Les trois conditions suivantes sont équivalentes :
            </p>
            <p>1) Le point <Math tex="D" /> est l&apos;image de <Math tex="C" /> par la translation de vecteur <Math tex="\overrightarrow{AB}" /></p>
            <p>2) Les vecteurs <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" /> sont égaux</p>
            <p>3) Le quadrilatère <Math tex="ABDC" /> est un parallélogramme (éventuellement aplati)</p>
          </Box>

          <Box title="☠ Attention" tone="remark">
            <p><Math tex="ABDC" /> et non <Math tex="ABCD" /> : il faut faire le tour du quadrilatère, dans un sens ou dans l&apos;autre.</p>
            <p className="mt-2">Conséquence : à partir d&apos;une égalité vectorielle, on peut en écrire trois autres (les deux autres s&apos;obtiennent en changeant de sens).</p>
          </Box>

          <Box title="Théorème 2" tone="thm">
            <p>
              <Math tex="\overrightarrow{AB} = \overrightarrow{CD}" /> ssi <Math tex="ABDC \text{ est un parallélogramme}" /> ssi{" "}
              <Math tex="[AC] \text{ et } [BD] \text{ ont le même milieu}" />
            </p>
            <p className="mt-2 text-foreground-muted">
              On en déduit toutes les propriétés du parallélogramme : diagonales, centre de symétrie, égalité des
              longueurs des côtés opposés.
            </p>
          </Box>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-4 text-sm font-bold text-brand-700">1.4) Vecteur nul</p>
            <Box title="Définition" tone="def">
              Un vecteur <Math tex="\overrightarrow{AB}" /> est nul si et seulement si <Math tex="A = B" />. On a
              alors : <Math tex="\overrightarrow{AA} = \vec 0" />
              <p className="mt-2">Donc : <Math tex="\overrightarrow{AB} = \vec 0" /> ssi <Math tex="A = B" /></p>
            </Box>
            <p className="mt-3 text-sm text-foreground-muted">
              Remarque : le vecteur nul est le seul vecteur qui n&apos;a ni direction ni sens.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-4 text-sm font-bold text-brand-700">1.5) Vecteurs opposés</p>
            <Box title="Définition" tone="def">
              Deux vecteurs sont dits opposés lorsqu&apos;ils ont <em>la même direction, la même norme et des sens
              opposés</em>.
              <p className="mt-2">
                Les vecteurs <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{BA}" /> sont opposés. On
                écrit : <Math tex="\overrightarrow{AB} = -\overrightarrow{BA}" />
              </p>
            </Box>
          </div>
        </div>
      </LessonSection>

      {/* ===================== II. OPERATIONS ===================== */}
      <LessonSection
        kicker="02 · Opérations sur les vecteurs"
        title="Addition, soustraction, multiplication"
        tone="muted"
        description="Enchaîner deux translations, c'est additionner deux vecteurs. Le reste en découle."
      >
        <Card title="2.1) Enchaînement de deux translations">
          <p className="text-sm text-foreground-muted">
            Soit <Math tex="t_1" /> la translation de vecteur <Math tex="\vec u = \overrightarrow{AB}" /> et{" "}
            <Math tex="t_2" /> la translation de vecteur <Math tex="\vec v = \overrightarrow{BC}" />. Se déplacer de{" "}
            <Math tex="A" /> en <Math tex="B" />, puis de <Math tex="B" /> en <Math tex="C" />, revient à se déplacer
            de <Math tex="A" /> en <Math tex="C" /> : on obtient une nouvelle translation. Le vecteur associé à cette
            translation est <Math tex="\vec w = \overrightarrow{AC}" />.
          </p>

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <FigureBox>
              <svg viewBox="0 0 260 190" className="w-full text-neutral-700">
                <defs>
                  <marker id="a5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                <line x1="30" y1="170" x2="110" y2="40" stroke="#10b981" strokeWidth="2" markerEnd="url(#a5)" />
                <line x1="110" y1="40" x2="230" y2="70" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#a5)" />
                <line x1="30" y1="170" x2="230" y2="70" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#a5)" />
                <text x="10" y="185" fontSize="14" fill="currentColor">A</text>
                <text x="110" y="30" fontSize="14" fill="currentColor">B</text>
                <text x="235" y="65" fontSize="14" fill="currentColor">C</text>
                <text x="55" y="95" fontSize="14" fill="#10b981" fontStyle="italic">u</text>
                <text x="175" y="45" fontSize="14" fill="#0ea5e9" fontStyle="italic">v</text>
                <text x="115" y="150" fontSize="14" fill="#f43f5e" fontStyle="italic">w = u+v</text>
              </svg>
            </FigureBox>
            <Box title="Définition 1" tone="thm">
              Soient <Math tex="\vec u" /> et <Math tex="\vec v" /> deux vecteurs quelconques. Le vecteur associé à la
              translation résultant de l&apos;enchaînement des translations de vecteurs <Math tex="\vec u" /> et{" "}
              <Math tex="\vec v" /> s&apos;appelle la <strong className="text-foreground">somme des vecteurs</strong>{" "}
              <Math tex="\vec u" /> et <Math tex="\vec v" />. On écrit : <Math tex="\vec w = \vec u + \vec v" />
            </Box>
          </div>
        </Card>

        <Card title="2.2) Addition de vecteurs, relation de Chasles">
          <Box title="Relation de Chasles" tone="thm">
            Quels que soient les points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" /> du plan, on a :{" "}
            <Math tex="\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}" />
          </Box>

          <p className="text-sm text-foreground-muted">
            Grâce à cette propriété, on peut trouver le quatrième sommet d&apos;un parallélogramme : c&apos;est la{" "}
            <strong className="text-foreground">règle du parallélogramme</strong> (recherche du 4<sup>e</sup> point, à
            partir de deux vecteurs de même origine).
          </p>

          <div className="grid items-center gap-6 sm:grid-cols-2">
            <Box title="Règle du parallélogramme" tone="thm">
              Quels que soient les points <Math tex="A" />, <Math tex="B" /> et <Math tex="C" /> du plan, il existe un
              point <Math tex="D" /> tel que : <Math tex="ABDC \text{ est un parallélogramme}" /> ssi{" "}
              <Math tex="\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{AC}" />
            </Box>
            <FigureBox>
              <svg viewBox="0 0 260 190" className="w-full text-neutral-700">
                <defs>
                  <marker id="a6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                <line x1="30" y1="170" x2="80" y2="55" stroke="currentColor" strokeWidth="2" markerEnd="url(#a6)" />
                <line x1="30" y1="170" x2="180" y2="185" stroke="#10b981" strokeWidth="2" markerEnd="url(#a6)" />
                <line x1="80" y1="55" x2="230" y2="70" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#a6)" />
                <line x1="180" y1="185" x2="230" y2="70" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#a6)" />
                <line x1="30" y1="170" x2="230" y2="70" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#a6)" />
                <text x="8" y="185" fontSize="14" fill="currentColor">A</text>
                <text x="82" y="46" fontSize="14" fill="currentColor">B</text>
                <text x="235" y="65" fontSize="14" fill="currentColor">D</text>
                <text x="182" y="205" fontSize="14" fill="#10b981">C</text>
              </svg>
            </FigureBox>
          </div>

          <Box title="Remarque" tone="remark">
            D&apos;après la règle du parallélogramme, dans une addition, on peut changer l&apos;ordre des vecteurs : la
            somme ne change pas.
          </Box>

          <Box title="Théorème (commutativité)" tone="thm">
            Pour tous vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" /> : <Math tex="\vec u + \vec v = \vec v + \vec u" />
          </Box>
        </Card>

        <Card title="2.3) Soustraction de vecteurs">
          <Box title="Définition" tone="def">
            Pour soustraire un vecteur, on ajoute son opposé. Si <Math tex="\vec u" /> et <Math tex="\vec v" /> sont
            deux vecteurs quelconques, alors : <Math tex="\vec u - \vec v = \vec u + (-\vec v)" />.{" "}
            <Math tex="\vec u - \vec v" /> s&apos;appelle la <strong className="text-foreground">différence</strong>{" "}
            des vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" />.
          </Box>
          <Box title="Exemple" tone="example">
            <p className="mb-2">
              Soient <Math tex="A" />, <Math tex="B" /> et <Math tex="C" /> trois points du plan. Calculer{" "}
              <Math tex="\overrightarrow{AB} - \overrightarrow{AC}" />
            </p>
            <p><Math tex="\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{AB} + (-\overrightarrow{AC})" /> · par définition de la soustraction</p>
            <p><Math tex="{}=\overrightarrow{AB} + \overrightarrow{CA}" /> · par définition d&apos;un vecteur opposé</p>
            <p><Math tex="{}=\overrightarrow{CA} + \overrightarrow{AB}" /> · on peut changer l&apos;ordre des vecteurs</p>
            <p><Math tex="{}=\overrightarrow{CB}" /> · d&apos;après la relation de Chasles</p>
          </Box>
        </Card>

        <Card title="2.4) Multiplication d'un vecteur par un nombre réel">
          <Box title="Définition" tone="def">
            <p className="mb-2">
              Soit <Math tex="\vec v" /> un vecteur quelconque (non nul) et <Math tex="k" /> un nombre réel non nul. Le
              produit du vecteur <Math tex="\vec v" /> par le réel <Math tex="k" />, noté <Math tex="k\vec v" />, a :
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>la même direction que <Math tex="\vec v" /></li>
              <li>le même sens si <Math tex="k > 0" />, et un sens contraire si <Math tex="k < 0" /></li>
              <li>
                une norme égale à <Math tex="k" /> fois la norme de <Math tex="\vec v" /> si <Math tex="k > 0" />, et à{" "}
                <Math tex="(-k)" /> fois la norme de <Math tex="\vec v" /> si <Math tex="k < 0" />
              </li>
            </ul>
          </Box>
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <FigureBox>
              <svg viewBox="0 0 260 180" className="w-full text-neutral-700">
                <defs>
                  <marker id="a7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                  </marker>
                </defs>
                <line x1="20" y1="45" x2="80" y2="25" stroke="currentColor" strokeWidth="2" markerEnd="url(#a7)" />
                <text x="15" y="20" fontSize="14" fill="currentColor" fontStyle="italic">u</text>
                <line x1="20" y1="90" x2="180" y2="55" stroke="#e11d48" strokeWidth="2" markerEnd="url(#a7)" />
                <text x="185" y="52" fontSize="13" fill="#e11d48" fontStyle="italic">k·u (k&gt;0)</text>
                <line x1="230" y1="120" x2="40" y2="160" stroke="#10b981" strokeWidth="2" markerEnd="url(#a7)" />
                <text x="15" y="176" fontSize="13" fill="#10b981" fontStyle="italic">k·u (k&lt;0)</text>
              </svg>
            </FigureBox>
            <Box title="Remarque" tone="remark">
              Si <Math tex="k = 0" /> ou si <Math tex="\vec u = \vec 0" />, alors : <Math tex="0 \cdot \vec u = \vec 0" />{" "}
              et <Math tex="k \cdot \vec 0 = \vec 0" />
            </Box>
          </div>
        </Card>

        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="mb-4 text-sm font-bold text-brand-700">2.5) Vecteurs colinéaires</p>
          <div className="space-y-4">
            <Box title="Définition" tone="def">
              On dit que deux vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" /> sont{" "}
              <strong className="text-foreground">colinéaires</strong> lorsqu&apos;ils ont la même direction.
            </Box>
            <Box title="Théorème" tone="thm">
              Deux vecteurs <Math tex="\vec u" /> et <Math tex="\vec v" /> sont colinéaires si et seulement s&apos;il
              existe un réel <Math tex="k" /> tel que <Math tex="\vec v = k\vec u" />, si et seulement s&apos;il existe
              un réel <Math tex="k'" /> tel que <Math tex="\vec u = k'\vec v" />.
            </Box>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. CONSEQUENCES ===================== */}
      <LessonSection
        kicker="03 · Conséquences"
        title="Parallélisme, alignement, milieu"
        tone="light"
        description="Les vecteurs donnent des outils rapides pour démontrer un parallélisme, un alignement, ou trouver un milieu."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-4 text-sm font-bold text-brand-700">3.1) Parallélisme et alignement</p>
            <div className="space-y-4">
              <Box title="Théorème" tone="thm">
                Soient <Math tex="A" />, <Math tex="B" />, <Math tex="C" /> et <Math tex="D" /> quatre points du plan.
                Les vecteurs <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{CD}" /> sont colinéaires
                si et seulement si les droites <Math tex="(AB)" /> et <Math tex="(CD)" /> sont parallèles.
              </Box>
              <Box title="Rappel · propriété" tone="remark">
                Si deux droites sont parallèles et ont un point commun, alors elles sont confondues. D&apos;où la
                propriété suivante, qui permet de démontrer que trois points sont alignés.
              </Box>
              <Box title="Théorème" tone="thm">
                Soient <Math tex="A" />, <Math tex="B" /> et <Math tex="C" /> trois points du plan. Ils sont alignés si
                et seulement si les vecteurs <Math tex="\overrightarrow{AB}" /> et <Math tex="\overrightarrow{AC}" />{" "}
                sont colinéaires.
              </Box>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
            <p className="mb-4 text-sm font-bold text-brand-700">3.2) Milieu d&apos;un segment</p>
            <Box title="Théorème" tone="thm">
              <p className="mb-2">
                Soit <Math tex="A" />, <Math tex="B" /> et <Math tex="I" /> trois points du plan. Le point{" "}
                <Math tex="I" /> est le milieu de <Math tex="[AB]" /> si et seulement si l&apos;une de ces conditions
                est réalisée :
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <p className="rounded-lg border border-border bg-surface p-2 text-center">
                  1) <Math tex="\overrightarrow{AI} = \overrightarrow{IB}" />
                </p>
                <p className="rounded-lg border border-border bg-surface p-2 text-center">
                  2) <Math tex="\overrightarrow{AI} = \dfrac12\overrightarrow{AB}" />
                </p>
                <p className="rounded-lg border border-border bg-surface p-2 text-center">
                  3) <Math tex="\overrightarrow{IB} = \dfrac12\overrightarrow{AB}" />
                </p>
                <p className="rounded-lg border border-border bg-surface p-2 text-center">
                  4) <Math tex="\overrightarrow{IA} + \overrightarrow{IB} = \vec 0" />
                </p>
              </div>
            </Box>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="À toi de jouer"
        title="9 exercices corrigés"
        tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier. Les deux figures ci-dessous servent de repère pour plusieurs exercices."
      >
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <FigureBox>
            <svg viewBox="0 0 260 170" className="w-full text-neutral-700">
              <defs>
                <marker id="a8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
                </marker>
              </defs>
              <polygon points="40,140 210,140 180,30 70,30" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="40" y1="140" x2="180" y2="30" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
              <line x1="210" y1="140" x2="70" y2="30" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" />
              <circle cx="125" cy="85" r="2.5" fill="#e11d48" />
              <text x="20" y="155" fontSize="14" fill="currentColor">A</text>
              <text x="212" y="155" fontSize="14" fill="currentColor">B</text>
              <text x="182" y="24" fontSize="14" fill="currentColor">C</text>
              <text x="55" y="24" fontSize="14" fill="currentColor">D</text>
              <text x="132" y="82" fontSize="13" fill="#e11d48">O</text>
            </svg>
          </FigureBox>
          <FigureBox>
            <svg viewBox="0 0 260 170" className="w-full text-neutral-700">
              <polygon points="40,150 220,140 120,25" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="18" y="165" fontSize="14" fill="currentColor">A</text>
              <text x="225" y="150" fontSize="14" fill="currentColor">B</text>
              <text x="118" y="18" fontSize="14" fill="currentColor">C</text>
            </svg>
          </FigureBox>
        </div>

        <ExerciseGroup total={9} celebrationTitle="Bravo, les 9 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les vecteurs et la translation.">
          <ExerciseCard
            id="1"
            index={1}
            title="Vecteurs égaux dans un parallélogramme"
            itemsLabel="6 vecteurs"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  <Math tex="ABCD" /> est un parallélogramme de centre <Math tex="O" />. Compléter par un vecteur égal :
                </p>
                <div className="grid gap-3 rounded-lg bg-surface-muted p-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <p><Math tex="\overrightarrow{DC} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{AD} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{CB} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{OC} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{BA} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{DO} = \ldots" /></p>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <p><Math tex="\overrightarrow{DC} = \overrightarrow{AB}" /></p>
                <p><Math tex="\overrightarrow{AD} = \overrightarrow{BC}" /></p>
                <p><Math tex="\overrightarrow{CB} = \overrightarrow{DA}" /></p>
                <p><Math tex="\overrightarrow{OC} = \overrightarrow{AO}" /></p>
                <p><Math tex="\overrightarrow{BA} = \overrightarrow{CD}" /></p>
                <p><Math tex="\overrightarrow{DO} = \overrightarrow{OB}" /></p>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Construire des points à partir de vecteurs"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted"><Math tex="EFG" /> est un triangle quelconque :</p>
                <ol className="list-decimal space-y-1.5 rounded-lg bg-surface-muted p-4 pl-9 text-sm text-foreground-muted">
                  <li>Construire le point <Math tex="A" /> tel que : <Math tex="\overrightarrow{EA} = \overrightarrow{FG}" /></li>
                  <li>Construire le point <Math tex="B" /> tel que : <Math tex="\overrightarrow{FB} = \overrightarrow{EG}" /></li>
                  <li>Construire le point <Math tex="C" /> tel que : <Math tex="\overrightarrow{GC} = \overrightarrow{EG}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <p>
                  1. On trace, à partir de <Math tex="E" />, un représentant du vecteur <Math tex="\overrightarrow{FG}" />{" "}
                  (même direction, même sens, même longueur) : son extrémité est <Math tex="A" />. Comme{" "}
                  <Math tex="\overrightarrow{EA} = \overrightarrow{FG}" />, le quadrilatère <Math tex="EFGA" /> est un
                  parallélogramme.
                </p>
                <p>
                  2. On trace, à partir de <Math tex="F" />, un représentant du vecteur <Math tex="\overrightarrow{EG}" />{" "}
                  : son extrémité est <Math tex="B" />.
                </p>
                <p>
                  3. On trace, à partir de <Math tex="G" />, un représentant du vecteur <Math tex="\overrightarrow{EG}" />{" "}
                  : son extrémité est <Math tex="C" />.
                </p>
                <p className="text-foreground-muted">
                  Remarque : comme <Math tex="\overrightarrow{FB} = \overrightarrow{EG} = \overrightarrow{GC}" />, on a{" "}
                  <Math tex="\overrightarrow{FB} = \overrightarrow{GC}" />, donc <Math tex="FGCB" /> est un
                  parallélogramme.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Symétrique et vecteurs égaux"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  <Math tex="ABC" /> est un triangle quelconque, <Math tex="M" /> le milieu de <Math tex="[BC]" /> et{" "}
                  <Math tex="D" /> le symétrique de <Math tex="A" /> par rapport à <Math tex="M" />.
                </p>
                <ol className="list-decimal space-y-1.5 rounded-lg bg-surface-muted p-4 pl-9 text-sm text-foreground-muted">
                  <li>Faire une figure</li>
                  <li>Montrer que : <Math tex="\overrightarrow{AB} = \overrightarrow{CD}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  <Math tex="D" /> symétrique de <Math tex="A" /> par rapport à <Math tex="M" /> signifie que{" "}
                  <Math tex="M" /> est le milieu de <Math tex="[AD]" />, donc <Math tex="\overrightarrow{AM} = \overrightarrow{MD}" />.
                </p>
                <p>
                  <Math tex="M" /> est le milieu de <Math tex="[BC]" />, donc <Math tex="\overrightarrow{BM} = \overrightarrow{MC}" />
                  , c&apos;est-à-dire <Math tex="\overrightarrow{MB} = \overrightarrow{CM}" />.
                </p>
                <p>
                  D&apos;après la relation de Chasles : <Math tex="\overrightarrow{AB} = \overrightarrow{AM} + \overrightarrow{MB} = \overrightarrow{AM} + \overrightarrow{CM}" />
                </p>
                <p>Et : <Math tex="\overrightarrow{CD} = \overrightarrow{CM} + \overrightarrow{MD} = \overrightarrow{CM} + \overrightarrow{AM}" /></p>
                <p>
                  Donc <Math tex="\overrightarrow{AB} = \overrightarrow{CD}" /> (on peut changer l&apos;ordre des
                  vecteurs dans une somme). <strong className="text-green-700">CQFD.</strong>
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Trapèze : construction et démonstration"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  <Math tex="ABCD" /> est un trapèze de bases <Math tex="[AB]" /> et <Math tex="[CD]" /> tel que{" "}
                  <Math tex="AB = 3\text{ cm}" /> et <Math tex="CD = 7\text{ cm}" />.
                </p>
                <ol className="list-decimal space-y-1.5 rounded-lg bg-surface-muted p-4 pl-9 text-sm text-foreground-muted">
                  <li>Placer le point <Math tex="E" /> tel que : <Math tex="\overrightarrow{BE} = \overrightarrow{AD}" /></li>
                  <li>Placer le point <Math tex="F" /> tel que : <Math tex="\overrightarrow{AF} = \overrightarrow{BC}" /></li>
                  <li>Montrer que : <Math tex="\overrightarrow{FC} = \overrightarrow{DE}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>D&apos;après la relation de Chasles : <Math tex="\overrightarrow{DE} = \overrightarrow{DA} + \overrightarrow{AB} + \overrightarrow{BE}" /></p>
                <p>
                  Or <Math tex="\overrightarrow{BE} = \overrightarrow{AD}" /> (donné), donc :{" "}
                  <Math tex="\overrightarrow{DE} = \overrightarrow{DA} + \overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AB}" />{" "}
                  (car <Math tex="\overrightarrow{DA} + \overrightarrow{AD} = \vec 0" />)
                </p>
                <p>De même : <Math tex="\overrightarrow{FC} = \overrightarrow{FA} + \overrightarrow{AB} + \overrightarrow{BC}" /></p>
                <p>
                  Or <Math tex="\overrightarrow{FA} = -\overrightarrow{AF} = -\overrightarrow{BC}" /> (donné), donc :{" "}
                  <Math tex="\overrightarrow{FC} = -\overrightarrow{BC} + \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AB}" />
                </p>
                <p>
                  Donc <Math tex="\overrightarrow{DE} = \overrightarrow{AB} = \overrightarrow{FC}" />, c&apos;est-à-dire{" "}
                  <Math tex="\overrightarrow{FC} = \overrightarrow{DE}" />. <strong className="text-green-700">CQFD.</strong>
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Parallélogramme et milieu"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted"><Math tex="ABCD" /> est un parallélogramme.</p>
                <ol className="list-decimal space-y-1.5 rounded-lg bg-surface-muted p-4 pl-9 text-sm text-foreground-muted">
                  <li>Placer le point <Math tex="E" /> tel que : <Math tex="\overrightarrow{AB} = \overrightarrow{CE}" /></li>
                  <li>Montrer que <Math tex="C" /> est le milieu de <Math tex="[DE]" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>Comme <Math tex="ABCD" /> est un parallélogramme, on a <Math tex="\overrightarrow{AB} = \overrightarrow{DC}" /> (côtés opposés).</p>
                <p>Or, par construction, <Math tex="\overrightarrow{AB} = \overrightarrow{CE}" />.</p>
                <p>Donc <Math tex="\overrightarrow{DC} = \overrightarrow{CE}" />.</p>
                <p>Or <Math tex="\overrightarrow{DC} = \overrightarrow{CE}" /> ssi <Math tex="C" /> est le milieu de <Math tex="[DE]" /> (propriété du milieu).</p>
                <p>Donc <Math tex="C" /> est le milieu de <Math tex="[DE]" />. <strong className="text-green-700">CQFD.</strong></p>
              </div>
            }
          />

          <ExerciseCard
            id="6"
            index={6}
            title="Règle du parallélogramme, deux fois"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">Soit <Math tex="ABC" /> un triangle quelconque :</p>
                <ol className="list-decimal space-y-1.5 rounded-lg bg-surface-muted p-4 pl-9 text-sm text-foreground-muted">
                  <li>Construire le point <Math tex="D" /> tel que : <Math tex="\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{AC}" /></li>
                  <li>Construire le point <Math tex="E" /> tel que : <Math tex="\overrightarrow{CE} = \overrightarrow{CB} + \overrightarrow{CA}" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>
                  1. D&apos;après la règle du parallélogramme, <Math tex="\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{AC}" />{" "}
                  ssi <Math tex="ABDC" /> est un parallélogramme. On construit donc <Math tex="D" /> comme le 4<sup>e</sup>{" "}
                  sommet du parallélogramme <Math tex="ABDC" /> (par exemple : symétrique de <Math tex="A" /> par
                  rapport au milieu de <Math tex="[BC]" />).
                </p>
                <p>
                  2. De même, <Math tex="\overrightarrow{CE} = \overrightarrow{CB} + \overrightarrow{CA}" /> ssi{" "}
                  <Math tex="CBEA" /> est un parallélogramme. On construit donc <Math tex="E" /> comme le 4<sup>e</sup>{" "}
                  sommet du parallélogramme <Math tex="CBEA" />.
                </p>
              </div>
            }
          />

          <ExerciseCard
            id="7"
            index={7}
            title="Retrouver un milieu par construction"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted"><Math tex="ABC" /> est un triangle quelconque :</p>
                <ol className="list-decimal space-y-1.5 rounded-lg bg-surface-muted p-4 pl-9 text-sm text-foreground-muted">
                  <li>Placer le point <Math tex="D" /> tel que : <Math tex="\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{AC}" /></li>
                  <li>Placer le point <Math tex="E" /> tel que : <Math tex="\overrightarrow{AB} = \overrightarrow{DE}" /></li>
                  <li>Montrer que <Math tex="D" /> est le milieu de <Math tex="[CE]" /></li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-2 text-sm">
                <p>D&apos;après (1) : <Math tex="\overrightarrow{AD} = \overrightarrow{AB} + \overrightarrow{AC}" />, donc <Math tex="\overrightarrow{AB} = \overrightarrow{AD} - \overrightarrow{AC}" />.</p>
                <p>Or, d&apos;après la relation de Chasles, <Math tex="\overrightarrow{AD} = \overrightarrow{AC} + \overrightarrow{CD}" />, donc <Math tex="\overrightarrow{AD} - \overrightarrow{AC} = \overrightarrow{CD}" />.</p>
                <p>D&apos;où <Math tex="\overrightarrow{AB} = \overrightarrow{CD}" />.</p>
                <p>Or, par construction (2), <Math tex="\overrightarrow{AB} = \overrightarrow{DE}" />.</p>
                <p>Donc <Math tex="\overrightarrow{CD} = \overrightarrow{DE}" /> (les deux sont égaux à <Math tex="\overrightarrow{AB}" />).</p>
                <p>Or <Math tex="\overrightarrow{CD} = \overrightarrow{DE}" /> ssi <Math tex="D" /> est le milieu de <Math tex="[CE]" /> (propriété du milieu).</p>
                <p>Donc <Math tex="D" /> est le milieu de <Math tex="[CE]" />. <strong className="text-green-700">CQFD.</strong></p>
              </div>
            }
          />

          <ExerciseCard
            id="8"
            index={8}
            title="Relation de Chasles, en pratique"
            itemsLabel="4 égalités"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">Utiliser la relation de Chasles pour compléter les égalités suivantes :</p>
                <div className="grid gap-3 rounded-lg bg-surface-muted p-4 text-sm sm:grid-cols-2">
                  <p><Math tex="\overrightarrow{AB} + \overrightarrow{BC} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{FG} + \overrightarrow{GE} + \overrightarrow{EH} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{AM} + \overrightarrow{MI} + \overrightarrow{IH} + \overrightarrow{HA} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{MA} + \overrightarrow{AN} + \overrightarrow{NP} = \ldots" /></p>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <p><Math tex="\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}" /></p>
                <p><Math tex="\overrightarrow{FG} + \overrightarrow{GE} + \overrightarrow{EH} = \overrightarrow{FH}" /></p>
                <p><Math tex="\overrightarrow{AM} + \overrightarrow{MI} + \overrightarrow{IH} + \overrightarrow{HA} = \vec 0" /></p>
                <p><Math tex="\overrightarrow{MA} + \overrightarrow{AN} + \overrightarrow{NP} = \overrightarrow{MP}" /></p>
              </div>
            }
          />

          <ExerciseCard
            id="9"
            index={9}
            title="Parallélogramme : quatre sommes"
            itemsLabel="4 égalités"
            items={
              <div>
                <p className="mb-3 text-sm text-foreground-muted">
                  <Math tex="ABCD" /> est un parallélogramme de centre <Math tex="O" />. Compléter les égalités suivantes :
                </p>
                <div className="grid gap-3 rounded-lg bg-surface-muted p-4 text-sm sm:grid-cols-2">
                  <p><Math tex="\overrightarrow{AB} + \overrightarrow{AD} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{AC} + \overrightarrow{CD} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{OA} + \overrightarrow{OC} = \ldots" /></p>
                  <p><Math tex="\overrightarrow{BO} + \overrightarrow{DO} = \ldots" /></p>
                </div>
              </div>
            }
            correction={
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <p><Math tex="\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}" /> (règle du parallélogramme)</p>
                <p><Math tex="\overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD}" /> (Chasles)</p>
                <p><Math tex="\overrightarrow{OA} + \overrightarrow{OC} = \vec 0" /> (<Math tex="O" /> milieu de <Math tex="[AC]" />)</p>
                <p><Math tex="\overrightarrow{BO} + \overrightarrow{DO} = \vec 0" /> (<Math tex="O" /> milieu de <Math tex="[BD]" />)</p>
              </div>
            }
          />
        </ExerciseGroup>

        <p className="mt-10 text-center text-xs text-foreground-muted">
          D&apos;après les exercices originaux, Prof. BAKHIRA Noureddine, niveau 2AC, année scolaire 2020/2021.
        </p>
      </LessonSection>
    </LessonShell>
  );
}
