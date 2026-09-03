import type { ReactNode } from "react";
import {
  LessonShell,
  LessonHero,
  LessonSection,
  Callout,
  Math,
  Accordion,
  AccordionItem,
  ExerciseGroup,
  ExerciseCard,
  QcmSection,
  QcmQuestion,
  type LessonMeta,
} from "@/components/lesson";

export const meta: LessonMeta = {
  title: "Les angles · Cours et exercices corrigés | 1AC",
  description:
    "Cours complet sur les angles complémentaires, supplémentaires, adjacents et opposés par le sommet, avec 5 exercices corrigés en détail (dont un quiz auto-corrigé), figures à l'appui, 1ère année collège.",
  kicker: "1ʳᵉ Année Collège · Chapitre 10",
  heroTitle: "Les angles",
  heroSubtitle:
    "Complémentaires, supplémentaires, adjacents, opposés par le sommet : quatre mots, quatre figures simples à reconnaître d'un coup d'œil.",
  footerNote: "Les angles · Mathématiques, 1ʳᵉ année collège, semestre 1.",
  sections: [
    { id: "definitions", label: "Complém. & supplém." },
    { id: "adjacents", label: "Adjacents" },
    { id: "opposes", label: "Opposés" },
    { id: "exercices", label: "Exercices" },
  ],
};

/* ===================== Petits composants locaux ===================== */

function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "rose" }) {
  const cls = tone === "rose" ? "bg-rose-100 text-rose-600" : "bg-neutral-100 text-neutral-500";
  return (
    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${cls}`}>
      {children}
    </span>
  );
}

function CorrectionCard({ n, children }: { n: number | string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-green-500/20 bg-surface p-4 text-sm">
      <span className="font-bold text-green-700">{n}.</span> {children}
    </div>
  );
}

/** A point tick-mark plus its italic serif label, mirroring the source figures' hand-drawn point markers. */
function Pt({ d, lx, ly, label, fs = 15, color = "#0f172a" }: { d: string; lx: number; ly: number; label: string; fs?: number; color?: string }) {
  return (
    <>
      <path d={d} stroke="#0f172a" strokeWidth={2} />
      <text x={lx} y={ly} fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontSize={fs} fill={color}>
        {label}
      </text>
    </>
  );
}

function Lbl({ x, y, children, fs = 15, fill }: { x: number; y: number; children: ReactNode; fs?: number; fill?: string }) {
  return (
    <text x={x} y={y} fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontSize={fs} fill={fill}>
      {children}
    </text>
  );
}

/** Header row reused for the two quiz-style exercises (2 and 3), matching ExerciseCard's own header. */
function QuizHeader({ n, title, itemsLabel }: { n: number; title: string; itemsLabel: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-950 text-xs font-bold text-white dark:bg-white dark:text-neutral-950">
        {n}
      </span>
      <p className="font-semibold text-foreground">{title}</p>
      <span className="font-mono text-xs text-foreground-muted">{itemsLabel}</span>
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
          { value: "3", label: "notions clés" },
          { value: "5", label: "exercices" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a href="#definitions" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200">
              Découvrir le cours
            </a>
            <a href="#exercices" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5">
              S&apos;entraîner
            </a>
          </>
        }
        visual={
          <svg viewBox="0 0 220 180" className="h-56 w-56 text-white opacity-90">
            <path d="M30,150 L200,150" stroke="currentColor" strokeWidth={2.5} />
            <path d="M30,150 L150,30" stroke="currentColor" strokeWidth={2.5} />
            <path d="M62,150 A32,32 0 0 1 76,120" fill="none" stroke="#fb923c" strokeWidth={2.5} />
            <text x="80" y="132" fontSize={20} fill="#fb923c" fontWeight={700}>
              α
            </text>
          </svg>
        }
      />

      {/* ===================== I. COMPLÉMENTAIRES & SUPPLÉMENTAIRES ===================== */}
      <LessonSection
        id="definitions"
        kicker="01 · Deux sommes à connaître"
        title="Angles complémentaires et supplémentaires"
        tone="light"
        description="Deux définitions qui ne parlent que d'une somme de mesures, rien d'autre."
      >
        <Callout variant="info">
          <span className="font-bold">Q1.</span> Donne les définitions de deux angles complémentaires puis de deux angles supplémentaires.
        </Callout>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <h3 className="mb-3 font-display font-bold text-foreground">Angles complémentaires</h3>
            <div className="mb-4 rounded-xl border-2 border-indigo-500/30 bg-indigo-100/60 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
              <p className="text-sm leading-relaxed">
                Deux angles sont <strong>complémentaires</strong> lorsque la somme de leurs mesures est égale à <strong>90°</strong>.
              </p>
            </div>
            <svg viewBox="0 0 240 170" className="mx-auto h-auto w-full max-w-xs">
              <path d="M40,150 L200,150" stroke="#0f172a" strokeWidth={2} />
              <path d="M40,150 L40,10" stroke="#0f172a" strokeWidth={2} />
              <path d="M40,150 L154.7,69.7" stroke="#0f172a" strokeWidth={2} />
              <path d="M40,138 L52,138 L52,150" fill="none" stroke="#0f172a" strokeWidth={1.5} />
              <path d="M62.9,133.9 A28,28 0 0 1 68,150" fill="none" stroke="#4338ca" strokeWidth={1.5} />
              <text x="70" y="140" fontSize={13} fill="#4338ca" fontWeight={600}>35°</text>
              <path d="M40,116 A34,34 0 0 1 67.9,130.5" fill="none" stroke="#7c3aed" strokeWidth={1.5} />
              <text x="52" y="112" fontSize={13} fill="#7c3aed" fontWeight={600}>55°</text>
              <Pt d="M35,145 L45,155 M35,155 L45,145" lx={20} ly={163} label="O" />
              <Lbl x={204} y={155}>A</Lbl>
              <Lbl x={158} y={65}>B</Lbl>
              <Lbl x={28} y={14}>C</Lbl>
            </svg>
            <p className="mt-3 text-sm text-foreground-muted">
              Ici <Math tex="\hat{AOB} = 35°" /> et <Math tex="\hat{BOC} = 55°" />, avec <Math tex="\hat{AOC} = 90°" /> (angle droit). Comme{" "}
              <span className="font-semibold text-indigo-700"><Math tex="35° + 55° = 90°" /></span>, les angles AÔB et BÔC sont complémentaires.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <h3 className="mb-3 font-display font-bold text-foreground">Angles supplémentaires</h3>
            <div className="mb-4 rounded-xl border-2 border-violet-500/30 bg-violet-100/60 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-violet-700">Définition</p>
              <p className="text-sm leading-relaxed">
                Deux angles sont <strong>supplémentaires</strong> lorsque la somme de leurs mesures est égale à <strong>180°</strong>.
              </p>
            </div>
            <svg viewBox="0 0 300 170" className="mx-auto h-auto w-full max-w-xs">
              <path d="M20,150 L280,150" stroke="#0f172a" strokeWidth={2} />
              <path d="M150,150 L191,37.2" stroke="#0f172a" strokeWidth={2} />
              <path d="M163,114.3 A38,38 0 0 1 188,150" fill="none" stroke="#4338ca" strokeWidth={1.5} />
              <text x="178" y="126" fontSize={13} fill="#4338ca" fontWeight={600}>70°</text>
              <path d="M95,150 A55,55 0 0 1 168.8,98.3" fill="none" stroke="#7c3aed" strokeWidth={1.5} />
              <text x="98" y="101" fontSize={13} fill="#7c3aed" fontWeight={600}>110°</text>
              <Pt d="M15,145 L25,155 M15,155 L25,145" lx={6} ly={165} label="Y" />
              <Pt d="M275,145 L285,155 M275,155 L285,145" lx={286} ly={155} label="Z" />
              <Pt d="M145,145 L155,155 M145,155 L155,145" lx={150} ly={167} label="O" />
              <Lbl x={193} y={32}>X</Lbl>
            </svg>
            <p className="mt-3 text-sm text-foreground-muted">
              Ici Y, O, Z sont alignés : <Math tex="\hat{YOX} = 110°" /> et <Math tex="\hat{XOZ} = 70°" />. Comme{" "}
              <span className="font-semibold text-violet-700"><Math tex="110° + 70° = 180°" /></span>, les angles YÔX et XÔZ sont supplémentaires.
            </p>
          </div>
        </div>

        <Callout variant="warning" title="À retenir">
          Pour être complémentaires ou supplémentaires, deux angles n&apos;ont <strong>pas besoin d&apos;être adjacents</strong> : il suffit que la somme de leurs mesures fasse 90° (ou 180°), même dessinés séparément.
        </Callout>
      </LessonSection>

      {/* ===================== II. ANGLES ADJACENTS ===================== */}
      <LessonSection
        id="adjacents"
        kicker="02 · Trois conditions à vérifier"
        title="Angles adjacents"
        tone="muted"
        description="Trois conditions, toutes les trois nécessaires en même temps."
      >
        <Callout variant="info">
          <span className="font-bold">Q2.</span> Quelles sont les trois conditions que doivent vérifier deux angles pour être adjacents ?
        </Callout>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-neutral-950 p-5 text-white">
            <span className="font-display text-2xl font-extrabold text-neutral-500">1</span>
            <p className="mt-2 text-sm font-semibold">Même sommet</p>
            <p className="mt-1 text-xs text-neutral-400">Les deux angles ont le même sommet.</p>
          </div>
          <div className="rounded-xl bg-neutral-950 p-5 text-white">
            <span className="font-display text-2xl font-extrabold text-neutral-500">2</span>
            <p className="mt-2 text-sm font-semibold">Côté commun</p>
            <p className="mt-1 text-xs text-neutral-400">Les deux angles ont un côté (un rayon) commun.</p>
          </div>
          <div className="rounded-xl bg-neutral-950 p-5 text-white">
            <span className="font-display text-2xl font-extrabold text-neutral-500">3</span>
            <p className="mt-2 text-sm font-semibold">De part et d&apos;autre</p>
            <p className="mt-1 text-xs text-neutral-400">Situés de part et d&apos;autre de ce côté commun (aucun chevauchement).</p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-green-500/20 bg-surface p-5">
            <p className="mb-3 inline-flex items-center gap-1 rounded-full bg-green-100/60 px-2.5 py-1 text-xs font-bold text-green-700">✓ Adjacents</p>
            <svg viewBox="0 0 160 130" className="mx-auto h-auto w-full max-w-[220px]">
              <path d="M20,110 L140,110" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M20,110 L95,20" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M20,110 L140,45" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M46.4,95.7 A30,30 0 0 1 50,110" fill="none" stroke="#059669" strokeWidth={1.5} />
              <path d="M44.3,80.8 A38,38 0 0 1 53.4,91.9" fill="none" stroke="#d97706" strokeWidth={1.5} />
              <Pt d="M15,105 L25,115 M15,115 L25,105" lx={4} ly={124} label="O" fs={14} />
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">Même sommet O, côté commun, aucun chevauchement.</p>
          </div>
          <div className="rounded-2xl border border-rose-500/30 bg-surface p-5">
            <p className="mb-3 inline-flex items-center gap-1 rounded-full bg-rose-100/60 px-2.5 py-1 text-xs font-bold text-rose-600">✗ Sommets différents</p>
            <svg viewBox="0 0 160 130" className="mx-auto h-auto w-full max-w-[220px]">
              <path d="M15,60 L60,15" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M15,60 L75,60" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M100,110 L150,70" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M100,110 L155,115" stroke="#0f172a" strokeWidth={1.6} />
              <Pt d="M10,55 L20,65 M10,65 L20,55" lx={0} ly={48} label="M" fs={14} />
              <Pt d="M95,105 L105,115 M95,115 L105,105" lx={82} ly={112} label="N" fs={14} />
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">Condition 1 non vérifiée : sommets M et N différents.</p>
          </div>
          <div className="rounded-2xl border border-rose-500/30 bg-surface p-5">
            <p className="mb-3 inline-flex items-center gap-1 rounded-full bg-rose-100/60 px-2.5 py-1 text-xs font-bold text-rose-600">✗ Aucun côté commun</p>
            <svg viewBox="0 0 160 130" className="mx-auto h-auto w-full max-w-[220px]">
              <path d="M20,110 L30,15" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M20,110 L85,25" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M20,110 L120,55" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M20,110 L145,105" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M24.7,65.2 A45,45 0 0 1 47.3,74.3" fill="none" stroke="#059669" strokeWidth={1.5} />
              <path d="M59.4,88.3 A45,45 0 0 1 65,108.2" fill="none" stroke="#d97706" strokeWidth={1.5} />
              <Pt d="M15,105 L25,115 M15,115 L25,105" lx={4} ly={124} label="O" fs={14} />
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">Condition 2 non vérifiée : les deux angles marqués n&apos;ont pas de côté en commun.</p>
          </div>
          <div className="rounded-2xl border border-rose-500/30 bg-surface p-5">
            <p className="mb-3 inline-flex items-center gap-1 rounded-full bg-rose-100/60 px-2.5 py-1 text-xs font-bold text-rose-600">✗ Angles superposés</p>
            <svg viewBox="0 0 160 130" className="mx-auto h-auto w-full max-w-[220px]">
              <path d="M20,110 L145,110" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M20,110 L40,15" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M20,110 L110,30" stroke="#0f172a" strokeWidth={1.6} />
              <path d="M49.9,83.4 A40,40 0 0 1 60,110" fill="none" stroke="#059669" strokeWidth={1.5} />
              <path d="M31.3,56.2 A55,55 0 0 1 75,110" fill="none" stroke="#d97706" strokeWidth={1.5} />
              <Pt d="M15,105 L25,115 M15,115 L25,105" lx={4} ly={124} label="O" fs={14} />
            </svg>
            <p className="mt-2 text-center text-xs text-foreground-muted">Condition 3 non vérifiée : le petit angle est à l&apos;intérieur du grand (ils se chevauchent).</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. OPPOSÉS PAR LE SOMMET ===================== */}
      <LessonSection
        id="opposes"
        kicker="03 · Le prolongement des côtés"
        title="Angles opposés par le sommet"
        tone="light"
        description="Même sommet, mais chaque côté est le prolongement de l'autre : aucun côté commun cette fois."
      >
        <Callout variant="info">
          <span className="font-bold">Q3.</span> Donne la définition de deux angles opposés par le sommet.
        </Callout>

        <div className="mt-6 grid items-start gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-indigo-500/30 bg-indigo-100/60 p-5 sm:p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-indigo-700">Définition</p>
            <p className="text-sm leading-relaxed">
              Deux angles sont <strong>opposés par le sommet</strong> lorsqu&apos;ils sont formés par deux droites sécantes, qu&apos;ils ont le <strong>même sommet</strong>, et que les côtés de l&apos;un sont dans le <strong>prolongement</strong> des côtés de l&apos;autre (ils n&apos;ont donc <strong>aucun côté commun</strong>).
            </p>
            <div className="mt-4 rounded-xl border border-indigo-500/20 bg-surface p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-indigo-700">Propriété</p>
              <p className="text-sm text-foreground-muted">Deux angles opposés par le sommet ont <strong>la même mesure</strong>.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <svg viewBox="0 0 260 220" className="mx-auto h-auto w-full max-w-sm">
              <path d="M20,190 L240,50" stroke="#0f172a" strokeWidth={2} />
              <path d="M30,40 L230,180" stroke="#0f172a" strokeWidth={2} />
              <path d="M137.5,115.2 L118.9,127 A22,22 0 0 1 119.5,102.6 Z" fill="#4338ca" opacity={0.18} />
              <path d="M137.5,115.2 L156.1,103.4 A22,22 0 0 1 155.5,127.8 Z" fill="#4338ca" opacity={0.18} />
              <path d="M137.5,115.2 L157.2,129 A24,24 0 0 1 117.3,128.1 Z" fill="#d97706" opacity={0.18} />
              <path d="M137.5,115.2 L117.8,101.4 A24,24 0 0 1 157.7,102.3 Z" fill="#d97706" opacity={0.18} />
              <Pt d="M15,185 L25,195 M15,195 L25,185" lx={2} ly={205} label="x" />
              <Pt d="M235,45 L245,55 M235,55 L245,45" lx={246} ly={42} label="y" />
              <Pt d="M25,35 L35,45 M25,45 L35,35" lx={10} ly={30} label="z" />
              <Pt d="M225,175 L235,185 M225,185 L235,175" lx={237} ly={195} label="t" />
              <Pt d="M132.5,110.2 L142.5,120.2 M132.5,120.2 L142.5,110.2" lx={145} ly={107} label="O" />
            </svg>
            <p className="mt-3 text-center text-sm text-foreground-muted">
              Les angles <span className="font-semibold text-indigo-700">xÔz</span> et <span className="font-semibold text-indigo-700">yÔt</span> sont opposés par le sommet (en indigo), de même que{" "}
              <span className="font-semibold text-amber-700">xÔt</span> et <span className="font-semibold text-amber-700">yÔz</span> (en orange).
            </p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="04 · À toi de jouer"
        title="5 exercices corrigés"
        tone="muted"
        description="Cherche chaque exercice sur ton cahier, puis clique pour vérifier (ou choisis directement une réponse pour les quiz)."
      >
        <ExerciseGroup total={3} celebrationTitle="Bravo, les 3 exercices à correction sont vérifiés !" celebrationSubtitle="Pense aussi aux deux quiz plus haut si ce n'est pas déjà fait.">
          <ExerciseCard
            id="1"
            index={1}
            title="Nommer des angles à l'aide des points d'une figure"
            itemsLabel="6 angles"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">
                  Nomme les angles marqués ⓐ à ⓕ à l&apos;aide des points de la figure (le sommet s&apos;écrit toujours au milieu, par exemple GFK) :
                </p>
                <svg viewBox="0 0 460 380" className="mx-auto h-auto w-full max-w-lg rounded-xl border border-border bg-surface-muted">
                  <line x1="80" y1="30" x2="290" y2="360" stroke="#0f172a" strokeWidth={1.6} />
                  <line x1="30" y1="120" x2="430" y2="178" stroke="#0f172a" strokeWidth={1.6} />
                  <line x1="105" y1="365" x2="405" y2="92" stroke="#0f172a" strokeWidth={1.6} />
                  <Pt d="M96,51 L106,61 M96,61 L106,51" lx={76} ly={46} label="G" fs={16} />
                  <Pt d="M46,124 L56,134 M46,134 L56,124" lx={26} ly={120} label="K" fs={16} />
                  <Pt d="M406,164 L416,174 M406,174 L416,164" lx={418} ly={164} label="C" fs={16} />
                  <Pt d="M380,105 L390,115 M380,115 L390,105" lx={392} ly={102} label="B" fs={16} />
                  <Pt d="M122,340 L132,350 M122,350 L132,340" lx={103} ly={362} label="R" fs={16} />
                  <Pt d="M257,327 L267,337 M257,337 L267,327" lx={266} ly={345} label="S" fs={16} />
                  <Lbl x={132} y={136} fs={16}>F</Lbl>
                  <Lbl x={338} y={153} fs={16}>O</Lbl>
                  <Lbl x={222} y={280} fs={16}>U</Lbl>
                  <g fontSize={14} fontWeight={700} textAnchor="middle">
                    <circle cx="118" cy="120" r="12" fill="#eef2ff" stroke="#4338ca" /><text x="118" y="125" fill="#4338ca">e</text>
                    <circle cx="122" cy="182" r="12" fill="#eef2ff" stroke="#4338ca" /><text x="122" y="187" fill="#4338ca">b</text>
                    <circle cx="373" cy="146" r="12" fill="#fef3c7" stroke="#d97706" /><text x="373" y="151" fill="#d97706">a</text>
                    <circle cx="287" cy="174" r="12" fill="#fef3c7" stroke="#d97706" /><text x="287" y="179" fill="#d97706">d</text>
                    <circle cx="264" cy="267" r="12" fill="#dcfce7" stroke="#059669" /><text x="264" y="272" fill="#059669">c</text>
                    <circle cx="176" cy="253" r="12" fill="#dcfce7" stroke="#059669" /><text x="176" y="258" fill="#059669">f</text>
                  </g>
                </svg>
                <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {["a", "b", "c", "d", "e", "f"].map((l) => (
                    <div key={l} className="flex items-center justify-center gap-2 rounded-lg border border-border p-3">
                      <Pill tone="rose">{l}</Pill>
                    </div>
                  ))}
                </div>
              </div>
            }
            correction={
              <div>
                <p className="mb-3 text-xs text-foreground-muted">Rappel de méthode : le sommet de l&apos;angle s&apos;écrit toujours entre les deux autres lettres.</p>
                <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                  <CorrectionCard n="a">C Ô B <span className="text-foreground-muted">(ou BÔC)</span></CorrectionCard>
                  <CorrectionCard n="b">S F̂ K <span className="text-foreground-muted">(ou KF̂S)</span></CorrectionCard>
                  <CorrectionCard n="c">S Û B <span className="text-foreground-muted">(ou BÛS)</span></CorrectionCard>
                  <CorrectionCard n="d">R Ô K <span className="text-foreground-muted">(ou KÔR)</span></CorrectionCard>
                  <CorrectionCard n="e">G F̂ K <span className="text-foreground-muted">(ou KF̂G)</span></CorrectionCard>
                  <CorrectionCard n="f">R Û G <span className="text-foreground-muted">(ou GÛR)</span></CorrectionCard>
                </div>
              </div>
            }
          />

          {/* ===== Exercice 2 : quiz Vrai/Faux ===== */}
          <div id="exercice2" className="mb-6 scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <QuizHeader n={2} title="Angles adjacents ? Vrai ou Faux" itemsLabel="6 figures" />
            <p className="mb-4 text-sm text-foreground-muted">Pour chaque figure, choisis Vrai ou Faux : les deux angles proposés sont-ils adjacents ?</p>
            <QcmSection total={6} doneMessage="Bravo, les 6 figures sont vérifiées !">
              <QcmQuestion
                id="2-1"
                prompt={
                  <div>
                    <svg viewBox="0 0 160 140" className="mx-auto h-auto w-full max-w-[200px]">
                      <path d="M25,110 L55,15 M25,110 L110,35 M25,110 L150,105" stroke="#0f172a" strokeWidth={1.6} />
                      <Pt d="M20,105 L30,115 M20,115 L30,105" lx={6} ly={128} label="T" fs={14} />
                      <Pt d="M50,10 L60,20 M50,20 L60,10" lx={58} ly={10} label="r" fs={14} />
                      <Pt d="M105,30 L115,40 M105,40 L115,30" lx={116} ly={28} label="s" fs={14} />
                      <Pt d="M145,100 L155,110 M145,110 L155,100" lx={140} ly={122} label="u" fs={14} />
                    </svg>
                    <p className="mt-2 text-center text-sm">r͡Ts et s͡Tu, sont-ils adjacents ?</p>
                  </div>
                }
                options={[
                  { id: "v", content: "Vrai", correct: true },
                  { id: "f", content: "Faux", correct: false },
                ]}
              />
              <QcmQuestion
                id="2-2"
                prompt={
                  <div>
                    <svg viewBox="0 0 160 140" className="mx-auto h-auto w-full max-w-[200px]">
                      <path d="M20,15 L20,75 L115,55 L70,110 L145,125" fill="none" stroke="#0f172a" strokeWidth={1.6} />
                      <Pt d="M15,10 L25,20 M15,20 L25,10" lx={6} ly={8} label="A" fs={14} />
                      <Pt d="M15,70 L25,80 M15,80 L25,70" lx={2} ly={88} label="E" fs={14} />
                      <Pt d="M110,50 L120,60 M110,60 L120,50" lx={122} ly={48} label="B" fs={14} />
                      <Pt d="M65,105 L75,115 M65,115 L75,105" lx={70} ly={128} label="D" fs={14} />
                      <Pt d="M140,120 L150,130 M140,130 L150,120" lx={150} ly={122} label="C" fs={14} />
                    </svg>
                    <p className="mt-2 text-center text-sm">AÊB et BD̂C, sont-ils adjacents ?</p>
                  </div>
                }
                options={[
                  { id: "v", content: "Vrai", correct: false },
                  { id: "f", content: "Faux", correct: true },
                ]}
              />
              <QcmQuestion
                id="2-3"
                prompt={
                  <div>
                    <svg viewBox="0 0 160 150" className="mx-auto h-auto w-full max-w-[200px]">
                      <path d="M10,75 L150,75 M80,10 L80,140" stroke="#0f172a" strokeWidth={1.6} />
                      <Pt d="M5,70 L15,80 M5,80 L15,70" lx={0} ly={93} label="u" fs={14} />
                      <Pt d="M145,70 L155,80 M145,80 L155,70" lx={150} ly={93} label="t" fs={14} />
                      <Pt d="M75,5 L85,15 M75,15 L85,5" lx={86} ly={10} label="x" fs={14} />
                      <Pt d="M75,135 L85,145 M75,145 L85,135" lx={86} ly={148} label="w" fs={14} />
                      <Lbl x={86} y={70} fs={14}>G</Lbl>
                    </svg>
                    <p className="mt-2 text-center text-sm">x͡Gu et t͡Gx, sont-ils adjacents ?</p>
                  </div>
                }
                options={[
                  { id: "v", content: "Vrai", correct: true },
                  { id: "f", content: "Faux", correct: false },
                ]}
              />
              <QcmQuestion
                id="2-4"
                prompt={
                  <div>
                    <svg viewBox="0 0 160 150" className="mx-auto h-auto w-full max-w-[200px]">
                      <path d="M20,110 L25,15 M20,110 L115,55 M20,110 L145,95 M20,110 L100,135" stroke="#0f172a" strokeWidth={1.6} />
                      <Pt d="M15,105 L25,115 M15,115 L25,105" lx={4} ly={128} label="U" fs={14} />
                      <Pt d="M20,10 L30,20 M20,20 L30,10" lx={30} ly={10} label="t" fs={14} />
                      <Pt d="M110,50 L120,60 M110,60 L120,50" lx={121} ly={48} label="v" fs={14} />
                      <Pt d="M140,90 L150,100 M140,100 L150,90" lx={150} ly={88} label="w" fs={14} />
                      <Pt d="M95,130 L105,140 M95,140 L105,130" lx={104} ly={148} label="x" fs={14} />
                    </svg>
                    <p className="mt-2 text-center text-sm">v͡Ux et w͡Uv, sont-ils adjacents ?</p>
                  </div>
                }
                options={[
                  { id: "v", content: "Vrai", correct: false },
                  { id: "f", content: "Faux", correct: true },
                ]}
              />
              <QcmQuestion
                id="2-5"
                prompt={
                  <div>
                    <svg viewBox="0 0 160 150" className="mx-auto h-auto w-full max-w-[200px]">
                      <path d="M20,110 L25,15 M20,110 L115,55 M20,110 L145,95 M20,110 L100,135" stroke="#0f172a" strokeWidth={1.6} />
                      <Pt d="M15,105 L25,115 M15,115 L25,105" lx={4} ly={128} label="U" fs={14} />
                      <Pt d="M20,10 L30,20 M20,20 L30,10" lx={30} ly={10} label="t" fs={14} />
                      <Pt d="M110,50 L120,60 M110,60 L120,50" lx={121} ly={48} label="v" fs={14} />
                      <Pt d="M140,90 L150,100 M140,100 L150,90" lx={150} ly={88} label="w" fs={14} />
                      <Pt d="M95,130 L105,140 M95,140 L105,130" lx={104} ly={148} label="x" fs={14} />
                    </svg>
                    <p className="mt-2 text-center text-sm">t͡Uv et w͡Ux, sont-ils adjacents ?</p>
                  </div>
                }
                options={[
                  { id: "v", content: "Vrai", correct: false },
                  { id: "f", content: "Faux", correct: true },
                ]}
              />
              <QcmQuestion
                id="2-6"
                prompt={
                  <div>
                    <svg viewBox="0 0 180 150" className="mx-auto h-auto w-full max-w-[200px]">
                      <path d="M55,15 L20,85 L140,85 L160,140" fill="none" stroke="#0f172a" strokeWidth={1.6} />
                      <Pt d="M50,10 L60,20 M50,20 L60,10" lx={58} ly={8} label="T" fs={14} />
                      <Pt d="M15,80 L25,90 M15,90 L25,80" lx={4} ly={80} label="R" fs={14} />
                      <Pt d="M135,80 L145,90 M135,90 L145,80" lx={146} ly={80} label="S" fs={14} />
                      <Pt d="M155,135 L165,145 M155,145 L165,135" lx={166} ly={145} label="U" fs={14} />
                    </svg>
                    <p className="mt-2 text-center text-sm">TR̂S et RŜU, sont-ils adjacents ?</p>
                  </div>
                }
                options={[
                  { id: "v", content: "Vrai", correct: false },
                  { id: "f", content: "Faux", correct: true },
                ]}
              />
            </QcmSection>

            <Accordion>
              <AccordionItem title="Pourquoi ? (les 6 explications)">
                <ul className="space-y-2">
                  <li><strong>1.</strong> VRAI, même sommet T, côté commun [Ts], situés de part et d&apos;autre : ils sont adjacents.</li>
                  <li><strong>2.</strong> FAUX, AEB a pour sommet E, BDC a pour sommet D : sommets différents, donc pas adjacents.</li>
                  <li><strong>3.</strong> VRAI, même sommet G, côté commun [Gx], situés de part et d&apos;autre : ils sont adjacents.</li>
                  <li><strong>4.</strong> FAUX, [Uw] passe à l&apos;intérieur de l&apos;angle vUx : les deux angles se chevauchent, ils ne sont pas de part et d&apos;autre de [Uv].</li>
                  <li><strong>5.</strong> FAUX, tUv et wUx n&apos;ont aucun côté commun : ils ne sont pas adjacents.</li>
                  <li><strong>6.</strong> FAUX, TRS a pour sommet R, RSU a pour sommet S : sommets différents, donc pas adjacents.</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>

          {/* ===== Exercice 3 : quiz OUI/NON ===== */}
          <div id="exercice3" className="mb-6 scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <QuizHeader n={3} title="Opposés par le sommet ? OUI ou NON" itemsLabel="4 paires" />
            <svg viewBox="0 0 270 180" className="mx-auto mb-4 h-auto w-full max-w-md rounded-xl border border-border bg-surface-muted">
              <line x1="20" y1="90" x2="250" y2="90" stroke="#0f172a" strokeWidth={1.6} />
              <line x1="45" y1="145" x2="135" y2="35" stroke="#0f172a" strokeWidth={1.6} />
              <line x1="160" y1="15" x2="200" y2="165" stroke="#0f172a" strokeWidth={1.6} />
              <Pt d="M15,85 L25,95 M15,95 L25,85" lx={4} ly={82} label="y" />
              <Pt d="M245,85 L255,95 M245,95 L255,85" lx={256} ly={82} label="r" />
              <Pt d="M40,140 L50,150 M40,150 L50,140" lx={27} ly={158} label="w" />
              <Pt d="M130,30 L140,40 M130,40 L140,30" lx={141} ly={26} label="s" />
              <Pt d="M155,10 L165,20 M155,20 L165,10" lx={150} ly={6} label="x" />
              <Pt d="M195,160 L205,170 M195,170 L205,160" lx={207} ly={172} label="t" />
              <Lbl x={78} y={80}>G</Lbl>
              <Lbl x={185} y={80}>H</Lbl>
            </svg>
            <QcmSection total={4} doneMessage="Bravo, les 4 paires sont vérifiées !">
              <QcmQuestion id="3-a" prompt="a. y͡Gw et HĜs" options={[{ id: "oui", content: "OUI", correct: true }, { id: "non", content: "NON", correct: false }]} />
              <QcmQuestion id="3-b" prompt="b. r͡Hx et t͡Hw" options={[{ id: "oui", content: "OUI", correct: false }, { id: "non", content: "NON", correct: true }]} />
              <QcmQuestion id="3-c" prompt="c. r͡Ht et x͡HG" options={[{ id: "oui", content: "OUI", correct: true }, { id: "non", content: "NON", correct: false }]} />
              <QcmQuestion id="3-d" prompt="d. r͡Gy et s͡Gw" options={[{ id: "oui", content: "OUI", correct: false }, { id: "non", content: "NON", correct: true }]} />
            </QcmSection>
            <Accordion>
              <AccordionItem title="Pourquoi ? (les 4 explications)">
                <ul className="space-y-2">
                  <li><strong>a.</strong> OUI, [Gy] est le prolongement de [GH], et [Gw] est le prolongement de [Gs] : aucun côté commun, sommet commun G.</li>
                  <li><strong>b.</strong> NON, [Hw] n&apos;existe même pas comme côté en H (w est sur l&apos;autre droite, celle de G) : ce n&apos;est pas une vraie paire d&apos;angles opposés par le sommet.</li>
                  <li><strong>c.</strong> OUI, [Hr] est le prolongement de [HG], et [Ht] est le prolongement de [Hx] : sommet commun H, aucun côté commun.</li>
                  <li><strong>d.</strong> NON, r, G, y sont alignés et s, G, w aussi : rGy et sGw sont deux angles plats (180°), ce n&apos;est pas la configuration d&apos;angles opposés par le sommet.</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>

          <ExerciseCard
            id="4"
            index={4}
            title="Opposés par le sommet : droites concourantes"
            itemsLabel="4 angles"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">
                  Les droites de la figure sont concourantes en F. Quel est le nom de l&apos;angle opposé par le sommet à chacun des angles suivants ?
                </p>
                <svg viewBox="0 0 300 300" className="mx-auto h-auto w-full max-w-sm rounded-xl border border-border bg-surface-muted">
                  <line x1="130" y1="30" x2="170" y2="270" stroke="#0f172a" strokeWidth={1.6} />
                  <line x1="250" y1="80" x2="50" y2="220" stroke="#0f172a" strokeWidth={1.6} />
                  <line x1="270" y1="170" x2="30" y2="130" stroke="#0f172a" strokeWidth={1.6} />
                  <Pt d="M125,25 L135,35 M125,35 L135,25" lx={112} ly={20} label="x" fs={16} />
                  <Pt d="M245,75 L255,85 M245,85 L255,75" lx={258} ly={70} label="r" fs={16} />
                  <Pt d="M265,165 L275,175 M265,175 L275,165" lx={278} ly={175} label="s" fs={16} />
                  <Pt d="M165,265 L175,275 M165,275 L175,265" lx={176} ly={288} label="t" fs={16} />
                  <Pt d="M45,215 L55,225 M45,225 L55,215" lx={26} ly={230} label="w" fs={16} />
                  <Pt d="M25,125 L35,135 M25,135 L35,125" lx={10} ly={122} label="y" fs={16} />
                  <Pt d="M145,145 L155,155 M145,155 L155,145" lx={158} ly={145} label="F" fs={16} />
                </svg>
                <div className="mt-4 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                  <div className="rounded-lg border border-border p-3 font-mono text-sm">x͡Fr</div>
                  <div className="rounded-lg border border-border p-3 font-mono text-sm">y͡Ft</div>
                  <div className="rounded-lg border border-border p-3 font-mono text-sm">s͡Fr</div>
                  <div className="rounded-lg border border-border p-3 font-mono text-sm">s͡Fw</div>
                </div>
              </div>
            }
            correction={
              <div>
                <p className="mb-3 text-xs text-foreground-muted">Méthode : l&apos;opposé d&apos;un angle s&apos;obtient en prolongeant chacun de ses deux côtés de l&apos;autre côté de F.</p>
                <div className="grid grid-cols-2 gap-3 text-center text-sm sm:grid-cols-4">
                  <CorrectionCard n="">xF̂r → <span className="font-bold text-green-700">tF̂w</span></CorrectionCard>
                  <CorrectionCard n="">yF̂t → <span className="font-bold text-green-700">sF̂x</span></CorrectionCard>
                  <CorrectionCard n="">sF̂r → <span className="font-bold text-green-700">yF̂w</span></CorrectionCard>
                  <CorrectionCard n="">sF̂w → <span className="font-bold text-green-700">yF̂r</span></CorrectionCard>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Mélange de définitions"
            itemsLabel="6 figures"
            items={
              <div>
                <p className="mb-4 text-sm text-foreground-muted">Pour chaque cas, précise, lorsque c&apos;est possible, la nature des angles marqués (adjacents ? complémentaires ? supplémentaires ?).</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-1 text-center text-xs font-bold text-foreground-muted">a.</p>
                    <svg viewBox="0 0 150 150" className="h-auto w-full">
                      <path d="M25,130 L145,130 M25,130 L105,45 M25,130 L25,15" fill="none" stroke="#0f172a" strokeWidth={1.5} />
                      <text x="60" y="115" fontSize={12} fill="#4338ca" fontWeight={600}>45°</text>
                      <text x="45" y="70" fontSize={12} fill="#7c3aed" fontWeight={600}>45°</text>
                    </svg>
                  </div>
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-1 text-center text-xs font-bold text-foreground-muted">b.</p>
                    <svg viewBox="0 0 150 150" className="h-auto w-full">
                      <path d="M10,110 L140,110 M90,110 L135,32" fill="none" stroke="#0f172a" strokeWidth={1.5} />
                      <Lbl x={0} y={125} fs={13}>z</Lbl>
                      <Lbl x={142} y={125} fs={13}>x</Lbl>
                      <Lbl x={138} y={26} fs={13}>y</Lbl>
                      <Lbl x={93} y={128} fs={13}>A</Lbl>
                    </svg>
                  </div>
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-1 text-center text-xs font-bold text-foreground-muted">c.</p>
                    <svg viewBox="0 0 150 150" className="h-auto w-full">
                      <path d="M20,130 L20,20 M20,130 L140,130 M20,130 L90,60" fill="none" stroke="#0f172a" strokeWidth={1.5} />
                      <path d="M20,118 L32,118 L32,130" fill="none" stroke="#0f172a" strokeWidth={1.3} />
                      <Lbl x={10} y={15} fs={13}>f</Lbl>
                      <Lbl x={95} y={52} fs={13}>e</Lbl>
                      <Lbl x={142} y={128} fs={13}>g</Lbl>
                      <Lbl x={4} y={145} fs={13}>K</Lbl>
                    </svg>
                  </div>
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-1 text-center text-xs font-bold text-foreground-muted">
                      d. <span className="font-mono normal-case">pŜn=90°</span>
                    </p>
                    <svg viewBox="0 0 150 150" className="h-auto w-full">
                      <path d="M30,130 L30,20 M30,130 L150,130 M30,130 L110,55" fill="none" stroke="#0f172a" strokeWidth={1.5} />
                      <path d="M30,118 L42,118 L42,130" fill="none" stroke="#0f172a" strokeWidth={1.3} />
                      <Lbl x={20} y={15} fs={13}>p</Lbl>
                      <Lbl x={114} y={47} fs={13}>m</Lbl>
                      <Lbl x={152} y={128} fs={13}>n</Lbl>
                      <Lbl x={14} y={145} fs={13}>S</Lbl>
                    </svg>
                  </div>
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-1 text-center text-xs font-bold text-foreground-muted">e.</p>
                    <svg viewBox="0 0 150 150" className="h-auto w-full">
                      <path d="M30,30 L30,120 L130,120" fill="none" stroke="#0f172a" strokeWidth={1.5} />
                      <path d="M30,105 L45,105 L45,120" fill="none" stroke="#0f172a" strokeWidth={1.3} />
                    </svg>
                  </div>
                  <div className="rounded-xl border border-border p-3">
                    <p className="mb-1 text-center text-xs font-bold text-foreground-muted">f.</p>
                    <svg viewBox="0 0 150 150" className="h-auto w-full">
                      <path d="M20,130 L20,20 M20,130 L110,65 M20,130 L145,130" fill="none" stroke="#0f172a" strokeWidth={1.5} />
                      <Lbl x={10} y={15} fs={13}>r</Lbl>
                      <Lbl x={115} y={58} fs={13}>t</Lbl>
                      <Lbl x={147} y={128} fs={13}>u</Lbl>
                      <Lbl x={4} y={145} fs={13}>S</Lbl>
                    </svg>
                  </div>
                </div>
              </div>
            }
            correction={
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-center text-sm">
                    <thead>
                      <tr className="border-b border-green-500/20">
                        <th className="p-2 text-left font-semibold text-foreground-muted"> </th>
                        <th className="p-2 font-semibold">a.</th>
                        <th className="p-2 font-semibold">b.</th>
                        <th className="p-2 font-semibold">c.</th>
                        <th className="p-2 font-semibold">d.</th>
                        <th className="p-2 font-semibold">e.</th>
                        <th className="p-2 font-semibold">f.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-green-500/10">
                        <td className="p-2 text-left font-medium">adjacents</td>
                        <td className="font-bold text-green-700">✓</td><td className="font-bold text-green-700">✓</td><td className="font-bold text-green-700">✓</td><td className="font-bold text-green-700">✓</td><td className="text-foreground-muted">–</td><td className="font-bold text-green-700">✓</td>
                      </tr>
                      <tr className="border-b border-green-500/10">
                        <td className="p-2 text-left font-medium">complémentaires</td>
                        <td className="font-bold text-green-700">✓</td><td className="text-foreground-muted">–</td><td className="font-bold text-green-700">✓</td><td className="font-bold text-green-700">✓</td><td className="text-foreground-muted">–</td><td className="font-bold text-amber-600">?</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-left font-medium">supplémentaires</td>
                        <td className="text-foreground-muted">–</td><td className="font-bold text-green-700">✓</td><td className="text-foreground-muted">–</td><td className="text-foreground-muted">–</td><td className="text-foreground-muted">–</td><td className="font-bold text-amber-600">?</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 grid gap-3 text-xs text-foreground-muted sm:grid-cols-2">
                  <p className="rounded-lg border border-green-500/20 bg-background p-3"><strong>a, c, d :</strong> deux angles adjacents dont la somme fait 90° (45°+45°, l&apos;angle droit marqué, ou pŜn=90°) → adjacents <strong>et</strong> complémentaires.</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-3"><strong>b :</strong> deux angles adjacents qui, ensemble, forment une droite (angle plat = 180°) → adjacents <strong>et</strong> supplémentaires.</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-3"><strong>e :</strong> un seul angle est marqué (aucune paire à comparer) : aucune des trois natures ne s&apos;applique.</p>
                  <p className="rounded-lg border border-green-500/20 bg-background p-3"><strong>f :</strong> rSt et tSu sont bien adjacents, mais aucune mesure n&apos;est donnée : impossible de dire s&apos;ils sont complémentaires ou supplémentaires.</p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
