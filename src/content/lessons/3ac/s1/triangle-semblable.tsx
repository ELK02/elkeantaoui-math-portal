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
  title: "Triangles Semblables · Cours et exercices corrigés | 3AC",
  description:
    "Cours illustré sur les triangles semblables : angles homologues, côtés proportionnels, lien avec le théorème de Thalès, rappel des cas d'isométrie. 5 exercices corrigés en détail, 3ème année collège, semestre 1.",
  kicker: "3ᵉ Année Collège · Chapitre 10",
  heroTitle: "Triangles Semblables",
  heroSubtitle:
    "Angles homologues, côtés proportionnels, lien avec le théorème de Thalès : un cours illustré, deux exemples résolus, un rappel des cas d'isométrie, puis 5 exercices corrigés.",
  footerNote: "Triangles semblables · Mathématiques, 3ème année collège, semestre 1.",
  sections: [
    { id: "angles", label: "Angles" },
    { id: "mesures", label: "Mesures" },
    { id: "rappel-isometrie", label: "Cas d'isométrie" },
    { id: "exercices", label: "Exercices" },
  ],
};

function Legend({ color, children }: { color: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />
      <span className="text-sm text-foreground-muted">{children}</span>
    </div>
  );
}

/** Dark statement box used for the two big geometric properties. */
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
          { value: "2", label: "propriétés fondamentales" },
          { value: "5", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#angles"
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
            <polygon points="30,140 120,140 60,20" fill="none" stroke="currentColor" strokeWidth="3" />
            <polygon points="150,140 195,140 168,75" fill="none" stroke="#fb923c" strokeWidth="2.4" />
          </svg>
        }
      />

      {/* ===================== ANGLES ===================== */}
      <LessonSection
        id="angles"
        kicker="01 · Définition"
        title="Angles et triangles semblables"
        tone="light"
        description="Deux triangles peuvent avoir des tailles différentes tout en gardant exactement la même forme : c'est l'idée des triangles semblables."
      >
        <div className="rounded-xl border-2 border-rose-500/30 bg-surface p-5 sm:p-6">
          <p className="text-sm text-foreground-muted">
            Deux triangles sont <strong className="text-rose-700">semblables</strong> si les mesures de leurs angles sont <strong className="text-rose-700">deux à deux égales</strong>.
          </p>
        </div>

        <div className="mt-6 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <svg viewBox="0 0 460 220" className="mx-auto max-w-sm">
            <polygon points="60,190 190,190 100,40" fill="none" stroke="#334155" strokeWidth="2.2" />
            <polygon points="300,190 400,190 355,90" fill="none" stroke="#334155" strokeWidth="2.2" />
            <circle cx="100" cy="40" r="9" fill="#4f46e5" /><text x="100" y="44" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">①</text>
            <circle cx="60" cy="190" r="9" fill="#f59e0b" /><text x="60" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">②</text>
            <circle cx="190" cy="190" r="9" fill="#94a3b8" /><text x="190" y="194" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">③</text>
            <text x="100" y="26" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
            <text x="44" y="205" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
            <text x="206" y="205" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
            <circle cx="355" cy="90" r="7" fill="#4f46e5" /><text x="355" y="93" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="white">①</text>
            <circle cx="300" cy="190" r="7" fill="#f59e0b" /><text x="300" y="193" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="white">②</text>
            <circle cx="400" cy="190" r="7" fill="#94a3b8" /><text x="400" y="193" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="white">③</text>
            <text x="355" y="76" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">X</text>
            <text x="286" y="204" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">Y</text>
            <text x="414" y="204" fontWeight="700" fontSize="15" fill="#1e293b">Z</text>
          </svg>
          <div className="space-y-2.5">
            <p className="mb-1 text-xs font-bold text-foreground-muted uppercase">Angles homologues (même couleur = même mesure)</p>
            <Legend color="bg-indigo-600"><Math tex="\widehat{BAC}" /> et <Math tex="\widehat{YXZ}" /> sont homologues</Legend>
            <Legend color="bg-amber-500"><Math tex="\widehat{ABC}" /> et <Math tex="\widehat{XYZ}" /> sont homologues</Legend>
            <Legend color="bg-slate-400"><Math tex="\widehat{ACB}" /> et <Math tex="\widehat{XZY}" /> sont homologues</Legend>
          </div>
        </div>

        <p className="mt-6 mb-3 text-sm font-semibold text-foreground">Vocabulaire</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface-muted p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Angles homologues</p>
            <p className="text-sm text-foreground-muted">Deux angles de même mesure (ex. <Math tex="\widehat{BAC}" /> et <Math tex="\widehat{YXZ}" />).</p>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Sommets homologues</p>
            <p className="text-sm text-foreground-muted">Les sommets de deux angles homologues (ex. <Math tex="A" /> et <Math tex="X" />).</p>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted p-4">
            <p className="mb-1 font-mono text-xs text-foreground-muted uppercase">Côtés homologues</p>
            <p className="text-sm text-foreground-muted">Les côtés opposés à deux angles homologues (ex. <Math tex="[AB]" /> et <Math tex="[XY]" />).</p>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Propriété</p>
        <PropertyBox>Si deux triangles ont leurs angles deux à deux de même mesure, alors ils sont semblables.</PropertyBox>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <ExerciseCard
          id="ex-app-1"
          index={1}
          title="Montrer que deux triangles sont semblables"
          items={
            <div className="text-sm">
              <div className="rounded-xl border border-border bg-surface-muted p-4">
                <svg viewBox="0 0 420 190" className="mx-auto max-w-sm">
                  <polygon points="40,160 190,160 130,30" fill="none" stroke="#4f46e5" strokeWidth="2.4" />
                  <text x="130" y="20" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                  <text x="26" y="178" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">F</text>
                  <text x="204" y="178" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                  <text x="55" y="150" fontSize="12.5" fill="#4f46e5" fontWeight="600">25°</text>
                  <text x="150" y="150" fontSize="12.5" fill="#4f46e5" fontWeight="600">75°</text>
                  <polygon points="250,160 400,160 355,55" fill="none" stroke="#f59e0b" strokeWidth="2.4" />
                  <text x="355" y="44" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">R</text>
                  <text x="236" y="178" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                  <text x="404" y="178" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">U</text>
                  <text x="262" y="150" fontSize="12.5" fill="#d97706" fontWeight="600">75°</text>
                  <text x="368" y="150" fontSize="12.5" fill="#d97706" fontWeight="600">80°</text>
                </svg>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Triangle <Math tex="FAC" /> : <Math tex="\widehat F=25°" />, <Math tex="\widehat A=75°" /></span>
                <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium">Triangle <Math tex="DUR" /> : <Math tex="\widehat D=75°" />, <Math tex="\widehat R=80°" /></span>
              </div>
              <p className="mt-3 text-foreground-muted">Montrer que les deux triangles sont semblables.</p>
            </div>
          }
          correction={
            <div className="space-y-2 text-sm">
              <p>Somme des angles d&apos;un triangle <Math tex="=180°" /> : <Math tex="\widehat C=180°-(75°+25°)=80°" /> et <Math tex="\widehat U=180°-(75°+80°)=25°" />.</p>
              <p><Math tex="\widehat F=\widehat U=25°" /> · <Math tex="\widehat A=\widehat D=75°" /> · <Math tex="\widehat C=\widehat R=80°" /></p>
              <p className="font-bold text-green-700">Les deux triangles ont leurs angles deux à deux égaux : <Math tex="FAC" /> et <Math tex="DUR" /> sont semblables.</p>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== MESURES ===================== */}
      <LessonSection
        id="mesures"
        kicker="02 · Longueurs proportionnelles"
        title="Côtés homologues et proportionnalité"
        tone="muted"
        description="Si les angles se correspondent, il en va de même pour les longueurs."
      >
        <p className="mb-3 text-sm font-semibold text-foreground">Propriété</p>
        <PropertyBox>Si deux triangles sont semblables, alors les longueurs de leurs côtés homologues sont proportionnelles deux à deux.</PropertyBox>
        <div className="mt-4">
          <Callout variant="info">
            C&apos;est une conséquence directe du théorème de Thalès : si deux triangles sont semblables, on peut déplacer le plus petit pour le placer « à l&apos;intérieur » du grand et créer une configuration de Thalès.
          </Callout>
        </div>

        <div className="mt-6 grid items-center gap-6 rounded-xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
          <svg viewBox="0 0 460 220" className="mx-auto max-w-sm">
            <polygon points="50,190 220,190 110,30" fill="none" stroke="#334155" strokeWidth="1.6" />
            <line x1="50" y1="190" x2="220" y2="190" stroke="#94a3b8" strokeWidth="3" />
            <line x1="50" y1="190" x2="110" y2="30" stroke="#4f46e5" strokeWidth="3" />
            <line x1="220" y1="190" x2="110" y2="30" stroke="#f59e0b" strokeWidth="3" />
            <text x="110" y="18" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
            <text x="34" y="205" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
            <text x="236" y="205" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
            <polygon points="300,190 390,190 335,110" fill="none" stroke="#334155" strokeWidth="1.3" />
            <line x1="300" y1="190" x2="390" y2="190" stroke="#94a3b8" strokeWidth="2.4" />
            <line x1="300" y1="190" x2="335" y2="110" stroke="#4f46e5" strokeWidth="2.4" />
            <line x1="390" y1="190" x2="335" y2="110" stroke="#f59e0b" strokeWidth="2.4" />
            <text x="335" y="98" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1e293b">D</text>
            <text x="288" y="204" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1e293b">E</text>
            <text x="402" y="204" fontWeight="700" fontSize="14" fill="#1e293b">F</text>
          </svg>
          <div className="space-y-2.5">
            <p className="mb-1 text-xs font-bold text-foreground-muted uppercase">Côtés homologues (même couleur = même rapport)</p>
            <Legend color="bg-slate-400"><Math tex="[BC]" /> et <Math tex="[EF]" /></Legend>
            <Legend color="bg-indigo-600"><Math tex="[AB]" /> et <Math tex="[DE]" /></Legend>
            <Legend color="bg-amber-500"><Math tex="[AC]" /> et <Math tex="[DF]" /></Legend>
            <p className="mt-2 rounded-lg bg-surface-muted py-2.5 text-center text-base"><Math tex="\dfrac{AB}{DE}=\dfrac{BC}{EF}=\dfrac{AC}{DF}" /></p>
          </div>
        </div>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Propriété réciproque</p>
        <PropertyBox>Cette propriété fonctionne aussi en sens inverse : si les longueurs des côtés de deux triangles sont deux à deux proportionnelles, alors ils sont semblables.</PropertyBox>

        <p className="mt-8 mb-3 text-sm font-semibold text-foreground">Exemple résolu</p>
        <ExerciseCard
          id="ex-app-2"
          index={2}
          title="Montrer que deux triangles sont semblables (côtés)"
          items={
            <div className="text-sm">
              <div className="rounded-xl border border-border bg-surface-muted p-4">
                <svg viewBox="0 0 420 200" className="mx-auto max-w-sm">
                  <polygon points="40,170 200,170 90,30" fill="none" stroke="#4f46e5" strokeWidth="2.4" />
                  <text x="90" y="20" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                  <text x="24" y="188" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">F</text>
                  <text x="214" y="188" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                  <text x="52" y="94" textAnchor="middle" fontSize="12" fill="#4f46e5" fontWeight="600">3 cm</text>
                  <text x="155" y="94" textAnchor="middle" fontSize="12" fill="#4f46e5" fontWeight="600">5 cm</text>
                  <text x="120" y="188" textAnchor="middle" fontSize="12" fill="#4f46e5" fontWeight="600">7 cm</text>
                  <polygon points="270,170 390,170 320,105" fill="none" stroke="#f59e0b" strokeWidth="2.4" />
                  <text x="320" y="94" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">R</text>
                  <text x="258" y="188" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">D</text>
                  <text x="396" y="188" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">U</text>
                  <text x="285" y="145" textAnchor="middle" fontSize="11.5" fill="#d97706" fontWeight="600">1,8 cm</text>
                  <text x="362" y="145" textAnchor="middle" fontSize="11.5" fill="#d97706" fontWeight="600">3 cm</text>
                  <text x="330" y="188" textAnchor="middle" fontSize="11.5" fill="#d97706" fontWeight="600">4,2 cm</text>
                </svg>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="FC=3" />, <Math tex="FA=5" />, <Math tex="AC=7" /></span>
                <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium"><Math tex="RD=1{,}8" />, <Math tex="DU=3" />, <Math tex="RU=4{,}2" /></span>
              </div>
              <p className="mt-3 text-foreground-muted">Montrer que ces deux triangles sont semblables.</p>
            </div>
          }
          correction={
            <div className="space-y-2 text-sm">
              <p className="text-foreground-muted">Côtés homologues potentiels : <Math tex="[FC]" />/<Math tex="[RD]" /> (petits), <Math tex="[FA]" />/<Math tex="[DU]" /> (moyens), <Math tex="[AC]" />/<Math tex="[RU]" /> (grands).</p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{FC}{RD}=\dfrac3{1{,}8}=\dfrac53" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{FA}{DU}=\dfrac53" /></div>
                <div className="rounded-lg border border-border p-3 text-center"><Math tex="\dfrac{AC}{RU}=\dfrac7{4{,}2}=\dfrac53" /></div>
              </div>
              <p className="font-bold text-green-700">Les trois rapports sont égaux à <Math tex="\dfrac53" /> : d&apos;après la propriété réciproque, <Math tex="FCA" /> et <Math tex="RDU" /> sont semblables.</p>
            </div>
          }
        />
      </LessonSection>

      {/* ===================== RAPPEL ISOMETRIE ===================== */}
      <LessonSection
        id="rappel-isometrie"
        kicker="03 · Rappel"
        title="Les cas d'isométrie des triangles"
        tone="light"
        description="Deux triangles isométriques (superposables) sont un cas particulier de triangles semblables, avec un rapport de longueurs égal à 1."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">CCC</span>
            <p className="mb-1 font-semibold text-foreground">Côté-Côté-Côté</p>
            <p className="text-sm text-foreground-muted">Les trois côtés de l&apos;un sont respectivement égaux aux trois côtés de l&apos;autre.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">CAC</span>
            <p className="mb-1 font-semibold text-foreground">Côté-Angle-Côté</p>
            <p className="text-sm text-foreground-muted">Deux côtés et l&apos;angle qu&apos;ils forment sont respectivement égaux.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">ACA</span>
            <p className="mb-1 font-semibold text-foreground">Angle-Côté-Angle</p>
            <p className="text-sm text-foreground-muted">Un côté et les deux angles adjacents à ce côté sont respectivement égaux.</p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-100/40 p-5">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">✓</span>
            <p className="mb-1 font-semibold text-foreground">Cas particulier · triangle rectangle</p>
            <p className="text-sm text-foreground-muted">Deux triangles rectangles de même hypoténuse et ayant un côté de l&apos;angle droit égal sont isométriques.</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection
        id="exercices"
        kicker="Entraînement"
        title="5 exercices corrigés"
        tone="muted"
        description="Cherchez chaque exercice au brouillon, puis cliquez pour vérifier votre réponse étape par étape."
      >
        <ExerciseGroup total={5} celebrationTitle="Bravo, les 5 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises les triangles semblables et l'isométrie.">
          <ExerciseCard
            id="1"
            index={1}
            title="Triangle équilatéral, isométrie"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABC" /> est un triangle équilatéral. <Math tex="M" />, <Math tex="N" />, <Math tex="P" /> sont des points de <Math tex="[BC]" />, <Math tex="[CA]" />, <Math tex="[AB]" /> tels que <Math tex="BM=CN=AP" />.
                </p>
                <div className="mt-4 rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 300 240" className="mx-auto max-w-[240px]">
                    <polygon points="150,25 30,215 270,215" fill="none" stroke="#334155" strokeWidth="2" />
                    <polygon points="114,82 102,215 234,158" fill="none" stroke="#4f46e5" strokeWidth="2.2" />
                    <circle cx="150" cy="25" r="3.5" fill="#1e293b" />
                    <circle cx="30" cy="215" r="3.5" fill="#1e293b" />
                    <circle cx="270" cy="215" r="3.5" fill="#1e293b" />
                    <circle cx="114" cy="82" r="3.5" fill="#4f46e5" />
                    <circle cx="102" cy="215" r="3.5" fill="#4f46e5" />
                    <circle cx="234" cy="158" r="3.5" fill="#4f46e5" />
                    <text x="150" y="14" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">A</text>
                    <text x="16" y="222" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">B</text>
                    <text x="284" y="222" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">C</text>
                    <text x="98" y="76" textAnchor="middle" fontWeight="700" fontSize="13" fill="#4338ca">P</text>
                    <text x="102" y="232" textAnchor="middle" fontWeight="700" fontSize="13" fill="#4338ca">M</text>
                    <text x="248" y="154" fontWeight="700" fontSize="13" fill="#4338ca">N</text>
                    <line x1="60" y1="209" x2="72" y2="221" stroke="#f59e0b" strokeWidth="2" />
                    <line x1="72" y1="209" x2="60" y2="221" stroke="#f59e0b" strokeWidth="2" />
                  </svg>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Démontrer que les triangles <Math tex="BMP" />, <Math tex="CNM" /> et <Math tex="NAP" /> sont isométriques deux à deux.</li>
                  <li>En déduire que <Math tex="MNP" /> est équilatéral.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">1. Isométrie des trois triangles</p>
                  <p>Notons <Math tex="a" /> le côté de <Math tex="ABC" /> et <Math tex="x=BM=CN=AP" />. On a <Math tex="PB=MC=NA=a-x" />, et les trois angles de <Math tex="ABC" /> valent <Math tex="60°" />.</p>
                  <p className="mt-1">Dans <Math tex="BMP" />, <Math tex="CNM" />, <Math tex="NAP" /> : <Math tex="BM=CN=AP=x" />, <Math tex="BP=CM=AN=a-x" />, angle compris <Math tex="=60°" />.</p>
                  <p className="mt-1 font-semibold text-green-700">Cas CAC : <Math tex="BMP\cong CNM\cong NAP" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">2. MNP équilatéral</p>
                  <p>Les troisièmes côtés (opposés à l&apos;angle de <Math tex="60°" />) se correspondent : <Math tex="MP=NM=PN" />.</p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="MN=NP=PM" /> : <Math tex="MNP" /> est équilatéral.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Carré, isométrie"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABCD" /> est un carré de centre <Math tex="O" />, <Math tex="M" /> un point de <Math tex="[AB]" />. On mène par <Math tex="B" /> la perpendiculaire à <Math tex="(CM)" /> qui coupe <Math tex="(AD)" /> en <Math tex="P" />.
                </p>
                <div className="mt-4 rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 300 296" className="mx-auto max-w-[240px]">
                    <polygon points="40,40 260,40 260,260 40,260" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="40" y1="260" x2="260" y2="40" stroke="#cbd5e1" strokeWidth="1.6" strokeDasharray="4,4" />
                    <line x1="40" y1="40" x2="260" y2="260" stroke="#cbd5e1" strokeWidth="1.6" strokeDasharray="4,4" />
                    <line x1="260" y1="40" x2="190" y2="260" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="260" y1="260" x2="40" y2="95" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="150" cy="150" r="3.5" fill="#1e293b" />
                    <circle cx="40" cy="40" r="3.5" fill="#1e293b" />
                    <circle cx="260" cy="40" r="3.5" fill="#1e293b" />
                    <circle cx="260" cy="260" r="3.5" fill="#1e293b" />
                    <circle cx="40" cy="260" r="3.5" fill="#1e293b" />
                    <circle cx="190" cy="260" r="3.5" fill="#4338ca" />
                    <circle cx="40" cy="95" r="3.5" fill="#b45309" />
                    <text x="26" y="34" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">D</text>
                    <text x="274" y="34" fontWeight="700" fontSize="15" fill="#1e293b">C</text>
                    <text x="274" y="278" fontWeight="700" fontSize="15" fill="#1e293b">B</text>
                    <text x="26" y="278" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">A</text>
                    <text x="163" y="145" fontSize="13" fill="#1e293b" fontWeight="700">O</text>
                    <text x="190" y="278" textAnchor="middle" fontWeight="700" fontSize="13" fill="#4338ca">M</text>
                    <text x="24" y="92" textAnchor="middle" fontWeight="700" fontSize="13" fill="#b45309">P</text>
                    <rect x="200" y="217" width="10" height="10" fill="none" stroke="#475569" strokeWidth="1.6" transform="rotate(37 205 222)" />
                  </svg>
                  <p className="mt-2 text-center text-xs text-foreground-muted italic">Figure illustrative, non à l&apos;échelle.</p>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Démontrer que <Math tex="\widehat{MCB}=\widehat{ABP}" />.</li>
                  <li>En déduire que <Math tex="MCB" /> et <Math tex="ABP" /> sont isométriques et que <Math tex="MB=AP" />.</li>
                  <li>Démontrer que <Math tex="OMB" /> et <Math tex="OPA" /> sont isométriques.</li>
                  <li>En déduire que <Math tex="POM" /> est rectangle et isocèle.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">1. <Math tex="\widehat{MCB}=\widehat{ABP}" /></p>
                  <p>Notons <Math tex="I" /> l&apos;intersection de <Math tex="(CM)" /> et <Math tex="(BP)" />. <Math tex="BIC" /> rectangle en <Math tex="I" /> : <Math tex="\widehat{PBC}+\widehat{MCB}=90°" />. Or <Math tex="\widehat{ABP}+\widehat{PBC}=\widehat{ABC}=90°" />.</p>
                  <p className="mt-1 font-semibold text-green-700">D&apos;où <Math tex="\widehat{MCB}=90°-\widehat{PBC}=\widehat{ABP}" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">2. <Math tex="MCB\cong ABP" />, <Math tex="MB=AP" /></p>
                  <p>Dans <Math tex="BCM" /> et <Math tex="ABP" /> : <Math tex="\widehat{MBC}=\widehat{PAB}=90°" />, <Math tex="BC=AB" />, <Math tex="\widehat{MCB}=\widehat{ABP}" />.</p>
                  <p className="mt-1 font-semibold text-green-700">Cas ACA : <Math tex="BCM\cong ABP" />, donc <Math tex="MB=AP" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">3. <Math tex="OMB\cong OPA" /></p>
                  <p><Math tex="OA=OB" /> (demi-diagonales), <Math tex="\widehat{OBM}=\widehat{OAP}=45°" />, et <Math tex="BM=AP" /> (question 2).</p>
                  <p className="mt-1 font-semibold text-green-700">Cas CAC : <Math tex="OMB\cong OPA" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">4. POM rectangle et isocèle</p>
                  <p><Math tex="OM=OP" /> (côtés homologues). <Math tex="\widehat{POM}=\widehat{POA}+\widehat{AOM}=\widehat{MOB}+\widehat{AOM}=\widehat{AOB}=90°" />.</p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="OM=OP" /> et <Math tex="\widehat{POM}=90°" /> : <Math tex="POM" /> rectangle isocèle en <Math tex="O" />.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Triangle isocèle, médiatrice"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABC" /> est isocèle en <Math tex="A" />. La médiatrice de <Math tex="[AC]" /> coupe <Math tex="(BC)" /> en <Math tex="D" />. Le point <Math tex="E" /> de <Math tex="(AD)" /> est tel que <Math tex="AE=BD" />.
                </p>
                <div className="mt-4 rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 420 300" className="mx-auto max-w-sm">
                    <line x1="30" y1="280" x2="400" y2="280" stroke="#334155" strokeWidth="2" />
                    <line x1="40" y1="280" x2="390" y2="15" stroke="#94a3b8" strokeWidth="1.8" />
                    <line x1="260" y1="110" x2="340" y2="280" stroke="#4f46e5" strokeWidth="2" />
                    <line x1="152" y1="223" x2="381" y2="17" stroke="#f59e0b" strokeWidth="2" />
                    <circle cx="40" cy="280" r="3.5" fill="#1e293b" />
                    <circle cx="220" cy="280" r="3.5" fill="#1e293b" />
                    <circle cx="340" cy="280" r="3.5" fill="#1e293b" />
                    <circle cx="260" cy="110" r="3.5" fill="#1e293b" />
                    <circle cx="381" cy="17" r="3.5" fill="#1e293b" />
                    <text x="30" y="298" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                    <text x="220" y="298" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                    <text x="340" y="298" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                    <text x="260" y="98" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                    <text x="396" y="14" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                  </svg>
                  <p className="mt-2 text-center text-xs text-foreground-muted italic">Figure illustrative, non à l&apos;échelle.</p>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Démontrer que <Math tex="ABD" /> et <Math tex="ACE" /> sont isométriques.</li>
                  <li>En déduire que <Math tex="CDE" /> est isocèle.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">Mise en place</p>
                  <p><Math tex="DA=DC" /> (médiatrice) donc <Math tex="\widehat{DAC}=\widehat{DCA}" />. En notant <Math tex="\beta=\widehat{DAC}=\widehat{DCA}=\widehat{ABC}=\widehat{ACB}" /> :</p>
                  <p className="mt-1">Alignements : <Math tex="\widehat{ABD}=180°-\beta" /> et <Math tex="\widehat{EAC}=180°-\beta" />.</p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="\widehat{ABD}=\widehat{EAC}" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">1. <Math tex="ABD\cong ACE" /></p>
                  <p><Math tex="AB=AC" />, <Math tex="\widehat{ABD}=\widehat{EAC}" />, <Math tex="BD=AE" /> (donné).</p>
                  <p className="mt-1 font-semibold text-green-700">Cas CAC : <Math tex="ABD\cong ACE" />, d&apos;où <Math tex="AD=CE" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">2. CDE isocèle</p>
                  <p><Math tex="DA=DC" /> (médiatrice) et <Math tex="AD=CE" /> (question 1).</p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="DC=DA=CE" /> : <Math tex="CDE" /> isocèle en <Math tex="C" />.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="4"
            index={4}
            title="Carré et cercle, tangente"
            items={
              <div className="text-sm">
                <p className="text-foreground-muted">
                  <Math tex="ABCD" /> est un carré. Le cercle <Math tex="(\mathcal C)" /> de diamètre <Math tex="[AB]" /> et de centre <Math tex="O" /> est tangent à <Math tex="[AD]" /> et <Math tex="[BC]" /> (en <Math tex="A" /> et <Math tex="B" />). La tangente issue de <Math tex="D" /> touche <Math tex="(\mathcal C)" /> en <Math tex="M" /> et coupe <Math tex="(BC)" /> en <Math tex="R" />.
                </p>
                <div className="mt-4 rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 340 280" className="mx-auto max-w-[260px]">
                    <path d="M 70 240 A 110 110 0 0 1 290 240" fill="none" stroke="#fcd34d" strokeWidth="2.4" />
                    <polygon points="70,20 290,20 290,240 70,240" fill="none" stroke="#334155" strokeWidth="2" />
                    <line x1="70" y1="20" x2="290" y2="185" stroke="#4f46e5" strokeWidth="2.2" />
                    <line x1="180" y1="240" x2="246" y2="152" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="3,3" />
                    <circle cx="180" cy="240" r="3.2" fill="#1e293b" />
                    <circle cx="70" cy="20" r="3.2" fill="#1e293b" />
                    <circle cx="290" cy="20" r="3.2" fill="#1e293b" />
                    <circle cx="70" cy="240" r="3.2" fill="#1e293b" />
                    <circle cx="290" cy="240" r="3.2" fill="#1e293b" />
                    <circle cx="246" cy="152" r="4" fill="#4338ca" />
                    <circle cx="290" cy="185" r="3.2" fill="#b45309" />
                    <text x="70" y="14" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">D</text>
                    <text x="290" y="14" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">C</text>
                    <text x="52" y="253" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">A</text>
                    <text x="308" y="253" textAnchor="middle" fontWeight="700" fontSize="15" fill="#1e293b">B</text>
                    <text x="180" y="257" textAnchor="middle" fontSize="13" fill="#1e293b" fontWeight="700">O</text>
                    <text x="226" y="144" textAnchor="middle" fontSize="12.5" fill="#4338ca" fontWeight="700">M</text>
                    <text x="311" y="188" textAnchor="middle" fontWeight="700" fontSize="13" fill="#b45309">R</text>
                  </svg>
                  <p className="mt-2 text-center text-xs text-foreground-muted italic">Figure illustrative, non à l&apos;échelle.</p>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Démontrer que <Math tex="OAD" /> et <Math tex="OMD" /> sont isométriques.</li>
                  <li>Démontrer que <Math tex="OMR" /> et <Math tex="OBR" /> sont isométriques. En déduire la nature de <Math tex="DCR" />.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">1. <Math tex="OAD\cong OMD" /></p>
                  <p><Math tex="\widehat{OAD}=\widehat{OMD}=90°" /> (tangentes ⟂ rayons), <Math tex="OA=OM" /> (rayons), <Math tex="OD" /> commun.</p>
                  <p className="mt-1 font-semibold text-green-700">Cas rectangle : <Math tex="OAD\cong OMD" />, d&apos;où <Math tex="DA=DM" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">2. <Math tex="OMR\cong OBR" />, nature de <Math tex="DCR" /></p>
                  <p><Math tex="\widehat{OBR}=\widehat{OMR}=90°" />, <Math tex="OB=OM" />, <Math tex="OR" /> commun. Cas rectangle : <Math tex="OMR\cong OBR" />, d&apos;où <Math tex="RM=RB" />.</p>
                  <p className="mt-1">Notons <Math tex="a" /> le côté du carré : <Math tex="DM=DA=a" />, <Math tex="DR=a+RB" />, <Math tex="CR=a-RB" />. <Math tex="DCR" /> rectangle en <Math tex="C" /> : <Math tex="(a+RB)^2=a^2+(a-RB)^2\Rightarrow RB=\dfrac a4" />.</p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="CR=\dfrac{3a}4" />, <Math tex="DR=\dfrac{5a}4" /> : <Math tex="DC:CR:DR=4:3:5" />, triangle rectangle 3-4-5.</p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="5"
            index={5}
            title="Configuration papillon"
            items={
              <div className="text-sm">
                <div className="rounded-xl border border-border bg-surface-muted p-4">
                  <svg viewBox="0 0 440 280" className="mx-auto max-w-sm">
                    <line x1="125" y1="173" x2="358" y2="235" stroke="#334155" strokeWidth="2" />
                    <line x1="153" y1="223" x2="363" y2="38" stroke="#334155" strokeWidth="2" />
                    <line x1="153" y1="223" x2="358" y2="235" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4,3" />
                    <line x1="125" y1="173" x2="363" y2="38" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4,3" />
                    <circle cx="190" cy="190" r="3.5" fill="#1e293b" />
                    <circle cx="125" cy="173" r="3.5" fill="#1e293b" />
                    <circle cx="153" cy="223" r="3.5" fill="#1e293b" />
                    <circle cx="358" cy="235" r="3.5" fill="#1e293b" />
                    <circle cx="363" cy="38" r="3.5" fill="#1e293b" />
                    <text x="200" y="184" fontWeight="700" fontSize="16" fill="#1e293b">A</text>
                    <text x="108" y="164" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">B</text>
                    <text x="140" y="242" textAnchor="middle" fontWeight="700" fontSize="16" fill="#1e293b">D</text>
                    <text x="374" y="248" fontWeight="700" fontSize="16" fill="#1e293b">C</text>
                    <text x="374" y="32" fontWeight="700" fontSize="16" fill="#1e293b">E</text>
                    <text x="140" y="172" textAnchor="middle" fontSize="13" fill="#4f46e5" fontWeight="700">28</text>
                    <text x="158" y="212" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="700">21</text>
                    <text x="278" y="216" textAnchor="middle" fontSize="13" fill="#4f46e5" fontWeight="700">72</text>
                    <text x="290" y="104" textAnchor="middle" fontSize="13" fill="#f59e0b" fontWeight="700">96</text>
                  </svg>
                </div>
                <ol className="mt-4 list-inside list-decimal space-y-1 text-foreground-muted">
                  <li>Quel théorème permet de montrer que <Math tex="DAC" /> et <Math tex="BAE" /> sont semblables ?</li>
                  <li>Quel est le rapport des aires de ces deux triangles ?</li>
                  <li>Rédiger la démonstration complète montrant que <Math tex="DAC" /> et <Math tex="BAE" /> sont semblables.</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">1. Théorème utilisé</p>
                  <p><Math tex="B,A,C" /> et <Math tex="D,A,E" /> alignés : <Math tex="\widehat{DAC}=\widehat{BAE}" /> (opposés par le sommet). <Math tex="\dfrac{AB}{AD}=\dfrac{28}{21}=\dfrac43" /> et <Math tex="\dfrac{AE}{AC}=\dfrac{96}{72}=\dfrac43" />.</p>
                  <p className="mt-1 font-semibold text-green-700">Cas « angle égal compris entre deux côtés proportionnels ».</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">2. Rapport des aires</p>
                  <p>Rapport de similitude <Math tex="k=\dfrac43" />, rapport des aires <Math tex="=k^2" />.</p>
                  <p className="mt-1 font-semibold text-green-700"><Math tex="\dfrac{\text{Aire}(BAE)}{\text{Aire}(DAC)}=\left(\dfrac43\right)^2=\dfrac{16}9" /></p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-surface p-4">
                  <p className="mb-1 font-bold text-green-700">3. Rédaction complète</p>
                  <p>• <Math tex="B,A,C" /> et <Math tex="D,A,E" /> alignés : <Math tex="\widehat{DAC}=\widehat{BAE}" /> (angles opposés par le sommet).</p>
                  <p className="mt-1">• <Math tex="\dfrac{AB}{AD}=\dfrac{AE}{AC}=\dfrac43" /> : côtés autour de cet angle deux à deux proportionnels.</p>
                  <p className="mt-1 font-semibold text-green-700">Donc <Math tex="DAC" /> et <Math tex="BAE" /> sont semblables (sommets <Math tex="A\leftrightarrow A" />, <Math tex="D\leftrightarrow B" />, <Math tex="C\leftrightarrow E" />). ∎</p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
