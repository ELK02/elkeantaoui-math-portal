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
  title: "La Géométrie dans l'Espace · Cours et exercices | 3AC",
  description:
    "Cours complet sur la géométrie dans l'espace (parallélisme et orthogonalité, calcul des aires et des volumes, agrandissement et réduction) avec exemples résolus et 3 exercices corrigés en détail, 3ème année collège, semestre 2.",
  kicker: "3ᵉ Année Collège · Chapitre 8",
  heroTitle: "La Géométrie dans l'Espace",
  heroSubtitle:
    "Situer les droites et les plans, calculer le volume des solides usuels, puis comprendre l'effet d'un agrandissement ou d'une réduction.",
  footerNote: "Géométrie dans l'espace · Mathématiques, 3ᵉ année collège, semestre 2.",
  sections: [
    { id: "droites-plans", label: "Droites & plans" },
    { id: "aires-volumes", label: "Aires & volumes" },
    { id: "agrandissement", label: "Réduction" },
    { id: "memo", label: "Mémo" },
    { id: "exercices", label: "Exercices" },
  ],
};

/** A small coordinate/figure "card" wrapper for the SVG diagrams. */
function Graph({ children, caption, className = "" }: { children: ReactNode; caption?: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto max-w-xs rounded-2xl border border-border bg-surface-muted p-4 ${className}`}>
      {children}
      {caption ? <p className="mt-2 text-center text-xs text-foreground-muted">{caption}</p> : null}
    </div>
  );
}

/** Small formula reference card used in the aires/volumes grids. */
function FormulaIcon({ icon, name, rows }: { icon: ReactNode; name: string; rows: { label: string; tex: string; tone?: "neutral" | "accent" }[] }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 text-center">
      <svg viewBox="0 0 100 90" className="mx-auto h-16 w-16">
        {icon}
      </svg>
      <p className="mt-1 font-display text-sm font-bold text-foreground">{name}</p>
      <div className="mt-2 space-y-1 text-xs">
        {rows.map((r) => (
          <p
            key={r.label}
            className={`flex items-center justify-between rounded-md px-2 py-1 ${
              r.tone === "accent" ? "bg-teal-100/60 text-teal-700" : "bg-surface-muted text-foreground-muted"
            }`}
          >
            <span>{r.label}</span>
            <span className={`font-semibold ${r.tone === "accent" ? "text-teal-800" : "text-foreground"}`}>
              <Math tex={r.tex} />
            </span>
          </p>
        ))}
      </div>
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
          { value: "3", label: "grandes notions" },
          { value: "3", label: "exercices corrigés" },
          { value: "100%", label: "corrigé" },
        ]}
        ctas={
          <>
            <a
              href="#droites-plans"
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
          <svg viewBox="0 0 200 200" className="h-56 w-56 sm:h-64 sm:w-64">
            <polygon points="40,120 108,120 150,95 82,95" fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2" />
            <polygon points="40,120 108,120 108,175 40,175" fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2" />
            <polygon points="108,120 150,95 150,150 108,175" fill="#fb923c" fillOpacity="0.25" stroke="#fb923c" strokeWidth="2" />
            <line x1="82" y1="95" x2="82" y2="150" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="3 3" />
            <line x1="82" y1="150" x2="40" y2="175" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="3 3" />
            <line x1="82" y1="150" x2="150" y2="150" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="3 3" />
          </svg>
        }
      />

      {/* ===================== I. DROITES ET PLANS ===================== */}
      <LessonSection
        id="droites-plans"
        kicker="01 · Se repérer dans l'espace"
        title="Parallélisme et orthogonalité"
        tone="light"
        description="Avant de calculer un volume, il faut savoir situer les droites et les plans les uns par rapport aux autres."
      >
        <p className="mb-1 text-lg font-bold text-foreground">a) Parallélisme d&apos;une droite à un plan</p>

        <p className="mt-4 mb-2 text-sm font-semibold text-foreground">1. Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Une droite <Math tex="(D)" /> est <strong>parallèle</strong> à un plan <Math tex="(P)" /> si :
          </p>
          <ul className="mt-2 space-y-1 pl-1">
            <li>la droite <Math tex="(D)" /> est <strong>incluse</strong> dans le plan <Math tex="(P)" /> : <Math tex="(D)\subset(P)" /> ;</li>
            <li>ou bien il <strong>n&apos;existe aucun point commun</strong> entre <Math tex="(P)" /> et <Math tex="(D)" /> : <Math tex="(D)\cap(P)=\varnothing" />.</li>
          </ul>
          <Graph className="mt-4" caption={<>Ici, <Math tex="(D)\cap(P)=\varnothing" /> : la droite <Math tex="(D)" /> ne coupe jamais le plan <Math tex="(P)" />, donc <Math tex="(D)\parallel(P)" /></>}>
            <svg viewBox="0 0 260 210" className="mx-auto h-auto w-full">
              <rect width="260" height="210" fill="white" rx="12"/>
              <polygon points="30,180 200,180 250,60 80,60" fill="#c7d2fe" fillOpacity="0.35" stroke="#818cf8" strokeWidth="1.4"/>
              <text x="38" y="172" fontSize="13" fontStyle="italic" fill="#4338ca" fontWeight="700">P</text>
              <line x1="60" y1="20" x2="230" y2="20" stroke="#e11d48" strokeWidth="2.4"/>
              <text x="236" y="24" fontSize="13" fontStyle="italic" fill="#e11d48" fontWeight="700">D</text>
              <line x1="80" y1="60" x2="60" y2="20" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3"/>
              <line x1="250" y1="60" x2="230" y2="20" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3"/>
            </svg>
          </Graph>
        </Callout>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">2. Propriété</p>
        <Callout variant="info" title="Propriété">
          <p>
            Une droite <Math tex="(D)" /> est parallèle à un plan <Math tex="(P)" /> s&apos;il existe une droite{" "}
            <Math tex="(\Delta)" /> incluse dans <Math tex="(P)" /> telle que <Math tex="(\Delta)" /> est parallèle à{" "}
            <Math tex="(D)" /> :
          </p>
        </Callout>
        <FormulaBlock tex="(\Delta)\subset(P) \;\text{ et }\; (\Delta)\parallel(D) \quad\Longrightarrow\quad (D)\parallel(P)" />

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">3. Exemple</p>
        <p className="mb-3 text-sm text-foreground-muted">Parallélépipède rectangle <Math tex="ABCDEFGH" />.</p>
        <div className="rounded-xl border border-border bg-surface p-5">
          <Graph
            caption={
              <>
                En <span className="font-semibold text-rose-600">rouge</span> : la face-plan (BFG) · en{" "}
                <span className="font-semibold text-blue-600">bleu</span> : la droite (AE)
              </>
            }
          >
            <svg viewBox="0 0 280 270" className="mx-auto h-auto w-full">
              <rect width="280" height="270" fill="white" rx="12"/>
              <polygon points="196,166.8 231.1,146.5 231.1,229.7 196,250" fill="#f43f5e" fillOpacity="0.15" stroke="#f43f5e" strokeOpacity="0.45" strokeWidth="1"/>
              <line x1="75.1" y1="146.5" x2="75.1" y2="229.7" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
              <line x1="75.1" y1="229.7" x2="40" y2="250" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
              <line x1="75.1" y1="229.7" x2="231.1" y2="229.7" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
              <line x1="40" y1="166.8" x2="196" y2="166.8" stroke="#1e293b" strokeWidth="1.8"/>
              <line x1="196" y1="166.8" x2="231.1" y2="146.5" stroke="#1e293b" strokeWidth="1.8"/>
              <line x1="231.1" y1="146.5" x2="75.1" y2="146.5" stroke="#1e293b" strokeWidth="1.8"/>
              <line x1="75.1" y1="146.5" x2="40" y2="166.8" stroke="#1e293b" strokeWidth="1.8"/>
              <line x1="40" y1="250" x2="196" y2="250" stroke="#1e293b" strokeWidth="1.8"/>
              <line x1="196" y1="250" x2="231.1" y2="229.7" stroke="#1e293b" strokeWidth="1.8"/>
              <line x1="231.1" y1="146.5" x2="231.1" y2="229.7" stroke="#1e293b" strokeWidth="1.8"/>
              <line x1="196" y1="166.8" x2="196" y2="250" stroke="#e11d48" strokeWidth="2.6"/>
              <line x1="40" y1="166.8" x2="40" y2="250" stroke="#2563eb" strokeWidth="2.4" strokeDasharray="6 4"/>
              <text x="26" y="160" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
              <text x="200" y="160" fontSize="14" fontWeight="700" fontStyle="italic" fill="#e11d48">B</text>
              <text x="236" y="140" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text>
              <text x="79" y="138" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text>
              <text x="22" y="266" fontSize="14" fontWeight="700" fontStyle="italic" fill="#2563eb">E</text>
              <text x="200" y="266" fontSize="14" fontWeight="700" fontStyle="italic" fill="#e11d48">F</text>
              <text x="236" y="240" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">G</text>
              <text x="58" y="246" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">H</text>
            </svg>
          </Graph>
          <p className="mt-4 text-sm">
            On a : <Math tex="(AE)\parallel(BF)" /> et <Math tex="(BF)\subset(BFG)" />
          </p>
          <p className="mt-1 text-sm font-semibold">
            donc <Math tex="(AE)\parallel(BFG)" />
          </p>
        </div>

        <div className="mt-6">
          <ExerciseCard
            id="ge-app-1"
            index={1}
            title="Applique"
            items={
              <p className="text-sm">
                <Math tex="ABCDEFGH" /> est un cube. On sait que <Math tex="(AC)\parallel(EG)" /> et que{" "}
                <Math tex="(EG)\subset(EFG)" />. Que peut-on en déduire pour la droite <Math tex="(AC)" /> et le plan{" "}
                <Math tex="(EFG)" /> ?
              </p>
            }
            correction={
              <div className="space-y-1 text-sm">
                <p>
                  On a <Math tex="(AC)\parallel(EG)" /> et <Math tex="(EG)\subset(EFG)" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;après la propriété, on en déduit que <Math tex="(AC)\parallel(EFG)" />.
                </p>
              </div>
            }
          />
        </div>

        <p className="mt-10 mb-1 text-lg font-bold text-foreground">b) Orthogonalité d&apos;une droite à un plan</p>

        <p className="mt-4 mb-2 text-sm font-semibold text-foreground">1. Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            On dit qu&apos;une droite <Math tex="(D)" /> est <strong>orthogonale</strong> à un plan <Math tex="(P)" />{" "}
            en un point <Math tex="A" /> si elle est orthogonale à deux droites <strong>sécantes en <Math tex="A" /></strong>{" "}
            et incluses dans <Math tex="(P)" />.
          </p>
          <Graph className="mt-4" caption={<><Math tex="(\Delta)\perp(D)" /> et <Math tex="(\Delta)\perp(L)" />, avec <Math tex="(D),(L)\subset(P)" /> sécantes en <Math tex="A" /></>}>
            <svg viewBox="0 0 260 220" className="mx-auto h-auto w-full">
              <rect width="260" height="220" fill="white" rx="12"/>
              <polygon points="20,170 190,170 240,40 70,40" fill="#c7d2fe" fillOpacity="0.35" stroke="#818cf8" strokeWidth="1.4"/>
              <text x="30" y="160" fontSize="13" fontStyle="italic" fill="#4338ca" fontWeight="700">P</text>
              <line x1="26" y1="126.6" x2="234" y2="97.4" stroke="#e11d48" strokeWidth="2.2"/>
              <line x1="66.8" y1="168.9" x2="193.2" y2="55.1" stroke="#0d9488" strokeWidth="2.2"/>
              <line x1="130" y1="18" x2="130" y2="202" stroke="#1e293b" strokeWidth="2.2"/>
              <rect x="120" y="96" width="13" height="13" fill="none" stroke="#e11d48" strokeWidth="1.6" transform="rotate(-8 126.5 102.5)"/>
              <rect x="120" y="99" width="13" height="13" fill="none" stroke="#0d9488" strokeWidth="1.6" transform="rotate(-42 126.5 105.5)"/>
              <text x="238" y="93" fontSize="13" fontStyle="italic" fill="#e11d48" fontWeight="700">D</text>
              <text x="196" y="52" fontSize="13" fontStyle="italic" fill="#0d9488" fontWeight="700">L</text>
              <text x="136" y="28" fontSize="13" fontStyle="italic" fill="#1e293b" fontWeight="700">Δ</text>
              <text x="119" y="122" fontSize="12" fontStyle="italic" fill="#1e293b" fontWeight="700">A</text>
            </svg>
          </Graph>
          <p className="mt-3">
            Ici, <Math tex="(D)" /> et <Math tex="(L)" /> sont deux droites sécantes en <Math tex="A" />, incluses
            dans <Math tex="(P)" />. Alors :
          </p>
          <p className="mt-1 text-center font-semibold">
            <Math tex="(\Delta)\perp(D) \;\text{ et }\; (\Delta)\perp(L) \quad\Longrightarrow\quad (\Delta)\perp(P)" />
          </p>
        </Callout>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">2. Propriété</p>
        <Callout variant="info" title="Propriété">
          <p>
            Si la droite <Math tex="(D)" /> est orthogonale au plan <Math tex="(P)" />, alors <Math tex="(D)" /> est
            orthogonale à <strong>toutes</strong> les droites incluses dans <Math tex="(P)" /> :
          </p>
        </Callout>
        <FormulaBlock tex="(D)\perp(P) \quad\Longrightarrow\quad \forall\,(L)\subset(P), \;\; (D)\perp(L)" />
        <Graph className="mt-4" caption={<><Math tex="(\Delta)" /> est orthogonale à chacune des droites du plan (P) passant par A</>}>
          <svg viewBox="0 0 280 220" className="mx-auto h-auto w-full max-w-xs">
            <rect width="280" height="220" fill="white" rx="12"/>
            <polygon points="30,170 200,170 250,40 80,40" fill="#c7d2fe" fillOpacity="0.35" stroke="#818cf8" strokeWidth="1.4"/>
            <text x="40" y="160" fontSize="13" fontStyle="italic" fill="#4338ca" fontWeight="700">P</text>
            <line x1="48.2" y1="136.6" x2="231.8" y2="87.4" stroke="#94a3b8" strokeWidth="1.8"/>
            <line x1="62.2" y1="166.5" x2="217.8" y2="57.5" stroke="#94a3b8" strokeWidth="1.8"/>
            <line x1="85.5" y1="189.8" x2="194.5" y2="34.2" stroke="#94a3b8" strokeWidth="1.8"/>
            <line x1="45.4" y1="103.7" x2="234.6" y2="120.3" stroke="#94a3b8" strokeWidth="1.8"/>
            <line x1="53.9" y1="71.9" x2="226.1" y2="152.1" stroke="#94a3b8" strokeWidth="1.8"/>
            <line x1="140" y1="18" x2="140" y2="202" stroke="#1e293b" strokeWidth="2.2"/>
            <text x="146" y="28" fontSize="13" fontStyle="italic" fill="#1e293b" fontWeight="700">Δ</text>
            <text x="129" y="118" fontSize="12" fontStyle="italic" fill="#1e293b" fontWeight="700">A</text>
          </svg>
        </Graph>

        <div className="mt-6">
          <ExerciseCard
            id="ge-app-2"
            index={2}
            title="Applique"
            items={
              <p className="text-sm">
                <Math tex="SABC" /> est un tétraèdre tel que <Math tex="(SA)\perp(AB)" /> et <Math tex="(SA)\perp(AC)" />,{" "}
                <Math tex="(AB)" /> et <Math tex="(AC)" /> étant deux droites sécantes en <Math tex="A" /> et incluses
                dans le plan <Math tex="(ABC)" />. Que peut-on dire de la droite <Math tex="(SA)" /> et du plan{" "}
                <Math tex="(ABC)" /> ?
              </p>
            }
            correction={
              <div className="space-y-1 text-sm">
                <p>
                  <Math tex="(SA)" /> est orthogonale à <Math tex="(AB)" /> et à <Math tex="(AC)" />, deux droites
                  sécantes en <Math tex="A" /> et incluses dans <Math tex="(ABC)" />.
                </p>
                <p className="font-semibold text-green-700">
                  D&apos;après la définition, <Math tex="(SA)" /> est orthogonale au plan <Math tex="(ABC)" />.
                </p>
              </div>
            }
          />
        </div>
      </LessonSection>

      {/* ===================== II. AIRES ET VOLUMES ===================== */}
      <LessonSection
        id="aires-volumes"
        kicker="02 · Formules à connaître"
        title="Aires et volumes"
        tone="light"
        description="B désigne l'aire de la base du solide."
      >
        <p className="mb-1 text-lg font-bold text-foreground">a) Aires des figures usuelles</p>
        <p className="mb-4 text-sm text-foreground-muted">Périmètre et aire des six figures planes de base.</p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <FormulaIcon
            name="Carré"
            icon={<><rect x="28" y="12" width="44" height="44" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/><text x="46" y="70" fontSize="11" fill="#0d9488" fontStyle="italic" fontWeight="700">a</text></>}
            rows={[{ label: "Périm.", tex: "4a" }, { label: "Aire", tex: "a^2", tone: "accent" }]}
          />
          <FormulaIcon
            name="Rectangle"
            icon={<><rect x="14" y="20" width="72" height="34" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/><text x="46" y="70" fontSize="11" fill="#0d9488" fontStyle="italic" fontWeight="700">a</text><text x="90" y="41" fontSize="11" fill="#0d9488" fontStyle="italic" fontWeight="700">b</text></>}
            rows={[{ label: "Périm.", tex: "2(a{+}b)" }, { label: "Aire", tex: "a\\times b", tone: "accent" }]}
          />
          <FormulaIcon
            name="Parallélogramme"
            icon={<><polygon points="24,54 84,54 76,14 16,14" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/><line x1="24" y1="54" x2="24" y2="14" stroke="#0d9488" strokeWidth="1.3" strokeDasharray="3 2"/><text x="48" y="70" fontSize="11" fill="#0d9488" fontStyle="italic" fontWeight="700">a</text><text x="9" y="36" fontSize="10" fill="#0d9488" fontStyle="italic" fontWeight="700">h</text></>}
            rows={[{ label: "Périm.", tex: "2(a{+}b)" }, { label: "Aire", tex: "a\\times h", tone: "accent" }]}
          />
          <FormulaIcon
            name="Losange"
            icon={<><polygon points="50,10 84,40 50,70 16,40" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/><line x1="16" y1="40" x2="84" y2="40" stroke="#0d9488" strokeWidth="1.2" strokeDasharray="3 2"/><line x1="50" y1="10" x2="50" y2="70" stroke="#0d9488" strokeWidth="1.2" strokeDasharray="3 2"/></>}
            rows={[{ label: "Périm.", tex: "4a" }, { label: "Aire", tex: "\\dfrac{d_1 d_2}{2}", tone: "accent" }]}
          />
          <FormulaIcon
            name="Trapèze"
            icon={<><polygon points="14,58 86,58 68,14 32,14" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/><text x="46" y="74" fontSize="10" fill="#0d9488" fontStyle="italic" fontWeight="700">a</text><text x="44" y="12" fontSize="10" fill="#0d9488" fontStyle="italic" fontWeight="700">b</text></>}
            rows={[{ label: "Périm.", tex: "a{+}b{+}c{+}d" }, { label: "Aire", tex: "\\dfrac{(a+b)h}{2}", tone: "accent" }]}
          />
          <FormulaIcon
            name="Triangle"
            icon={<><polygon points="50,12 86,58 14,58" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5"/><line x1="50" y1="12" x2="50" y2="58" stroke="#0d9488" strokeWidth="1.2" strokeDasharray="3 2"/><text x="46" y="74" fontSize="10" fill="#0d9488" fontStyle="italic" fontWeight="700">a</text></>}
            rows={[{ label: "Périm.", tex: "a{+}b{+}c" }, { label: "Aire", tex: "\\dfrac{a\\times h}{2}", tone: "accent" }]}
          />
        </div>

        <Callout variant="warning" title="À retenir" >
          <p>
            Pour toutes les figures faisant intervenir un cercle (disque, cylindre, cône...), on utilise la valeur
            approchée <Math tex="\pi\approx3,14" />.
          </p>
        </Callout>

        <p className="mt-10 mb-1 text-lg font-bold text-foreground">b) Volumes des solides usuels</p>
        <p className="mb-4 text-sm text-foreground-muted">
          <Math tex="B" /> désigne l&apos;aire de la base du solide.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <svg viewBox="0 0 100 90" className="mx-auto h-16 w-16">
              <polygon points="25,44.2 58.8,44.2 76.4,34.1 42.6,34.1" fill="#0891b2" fillOpacity="0.18" stroke="#0891b2" strokeWidth="1.8"/>
              <polygon points="25,44.2 58.8,44.2 58.8,78 25,78" fill="#0891b2" fillOpacity="0.32" stroke="#0891b2" strokeWidth="1.8"/>
              <polygon points="58.8,44.2 76.4,34.1 76.4,67.9 58.8,78" fill="#0891b2" fillOpacity="0.45" stroke="#0891b2" strokeWidth="1.8"/>
              <line x1="42.6" y1="34.1" x2="42.6" y2="67.9" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
              <line x1="42.6" y1="67.9" x2="25" y2="78" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
              <line x1="42.6" y1="67.9" x2="76.4" y2="67.9" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
            </svg>
            <p className="mt-1 font-display text-sm font-bold text-foreground">Cube</p>
            <div className="mt-2 rounded-md bg-cyan-100/60 px-2 py-1.5 text-xs">
              <span className="text-cyan-700">Volume</span> <span className="block font-semibold text-cyan-900"><Math tex="V=c^3" /></span>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <svg viewBox="0 0 100 90" className="mx-auto h-16 w-16">
              <polygon points="16,51.2 71.2,51.2 84.9,43.3 29.7,43.3" fill="#0891b2" fillOpacity="0.18" stroke="#0891b2" strokeWidth="1.8"/>
              <polygon points="16,51.2 71.2,51.2 71.2,80 16,80" fill="#0891b2" fillOpacity="0.32" stroke="#0891b2" strokeWidth="1.8"/>
              <polygon points="71.2,51.2 84.9,43.3 84.9,72.1 71.2,80" fill="#0891b2" fillOpacity="0.45" stroke="#0891b2" strokeWidth="1.8"/>
              <line x1="29.7" y1="43.3" x2="29.7" y2="72.1" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
              <line x1="29.7" y1="72.1" x2="16" y2="80" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
              <line x1="29.7" y1="72.1" x2="84.9" y2="72.1" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
            </svg>
            <p className="mt-1 font-display text-sm font-bold text-foreground">Pavé droit</p>
            <div className="mt-2 rounded-md bg-cyan-100/60 px-2 py-1.5 text-xs">
              <span className="text-cyan-700">Volume</span> <span className="block font-semibold text-cyan-900"><Math tex="V=L\times l\times h" /></span>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <svg viewBox="0 0 100 90" className="mx-auto h-16 w-16">
              <polygon points="18,80 54.4,80 36.2,46.2" fill="#0891b2" fillOpacity="0.22" stroke="#0891b2" strokeWidth="1.8"/>
              <polygon points="18,80 36.2,46.2 52.4,36.8 34.2,70.6" fill="#0891b2" fillOpacity="0.32" stroke="#0891b2" strokeWidth="1.8"/>
              <polygon points="54.4,80 36.2,46.2 52.4,36.8 70.6,70.6" fill="#0891b2" fillOpacity="0.45" stroke="#0891b2" strokeWidth="1.8"/>
              <line x1="34.2" y1="70.6" x2="70.6" y2="70.6" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
            </svg>
            <p className="mt-1 font-display text-sm font-bold text-foreground">Prisme droit</p>
            <div className="mt-2 rounded-md bg-cyan-100/60 px-2 py-1.5 text-xs">
              <span className="text-cyan-700">Volume</span> <span className="block font-semibold text-cyan-900"><Math tex="V=B\times h" /></span>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <svg viewBox="0 0 100 90" className="mx-auto h-16 w-16">
              <path d="M25,65 A25,10 0 0 0 75,65 L75,30 A25,10 0 0 1 25,30 Z" fill="#0891b2" fillOpacity="0.3"/>
              <line x1="25" y1="30" x2="25" y2="65" stroke="#0891b2" strokeWidth="1.8"/>
              <line x1="75" y1="30" x2="75" y2="65" stroke="#0891b2" strokeWidth="1.8"/>
              <path d="M25,65 A25,10 0 0 0 75,65" fill="none" stroke="#0891b2" strokeWidth="1.8"/>
              <ellipse cx="50" cy="30" rx="25" ry="10" fill="#0891b2" fillOpacity="0.15" stroke="#0891b2" strokeWidth="1.8"/>
            </svg>
            <p className="mt-1 font-display text-sm font-bold text-foreground">Cylindre</p>
            <div className="mt-2 rounded-md bg-cyan-100/60 px-2 py-1.5 text-xs">
              <span className="text-cyan-700">Volume</span> <span className="block font-semibold text-cyan-900"><Math tex="V=\pi r^2h" /></span>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <svg viewBox="0 0 100 90" className="mx-auto h-16 w-16">
              <path d="M50,15 L75,60 A25,9 0 0 1 25,60 Z" fill="#0891b2" fillOpacity="0.28" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round"/>
              <ellipse cx="50" cy="60" rx="25" ry="9" fill="#0891b2" fillOpacity="0.15" stroke="#0891b2" strokeWidth="1.8"/>
              <line x1="50" y1="15" x2="50" y2="60" stroke="#0891b2" strokeWidth="1.1" strokeDasharray="2 2"/>
            </svg>
            <p className="mt-1 font-display text-sm font-bold text-foreground">Cône de révolution</p>
            <div className="mt-2 rounded-md bg-cyan-100/60 px-2 py-1.5 text-xs">
              <span className="text-cyan-700">Volume</span> <span className="block font-semibold text-cyan-900"><Math tex="V=\dfrac{\pi r^2h}{3}" /></span>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <svg viewBox="0 0 100 90" className="mx-auto h-16 w-16">
              <line x1="50" y1="28" x2="14" y2="52" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
              <line x1="50" y1="28" x2="86" y2="52" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
              <line x1="50" y1="12" x2="50" y2="28" stroke="#0891b2" strokeWidth="1.2" strokeDasharray="2 2"/>
              <polygon points="50,12 14,52 50,76" fill="#0891b2" fillOpacity="0.22" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round"/>
              <polygon points="50,12 86,52 50,76" fill="#0891b2" fillOpacity="0.35" stroke="#0891b2" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
            <p className="mt-1 font-display text-sm font-bold text-foreground">Pyramide</p>
            <div className="mt-2 rounded-md bg-cyan-100/60 px-2 py-1.5 text-xs">
              <span className="text-cyan-700">Volume</span> <span className="block font-semibold text-cyan-900"><Math tex="V=\dfrac{B\times h}{3}" /></span>
            </div>
          </div>
        </div>
      </LessonSection>

      {/* ===================== III. AGRANDISSEMENT ET RÉDUCTION ===================== */}
      <LessonSection
        id="agrandissement"
        kicker="03 · L'effet du coefficient k"
        title="Agrandissement et réduction"
        tone="light"
        description="Multiplier toutes les dimensions par k : ce qui change, et ce qui ne change pas."
      >
        <p className="mb-2 text-sm font-semibold text-foreground">1. Définition</p>
        <Callout variant="danger" title="Définition">
          <p>
            Multiplier toutes les dimensions d&apos;une figure ou d&apos;un solide (longueurs des côtés, des arêtes,
            rayons) par un nombre <Math tex="k" />, c&apos;est en faire :
          </p>
          <ul className="mt-2 space-y-1 pl-1">
            <li>un <strong>agrandissement</strong> si <Math tex="k>1" /> ;</li>
            <li>une <strong>réduction</strong> si <Math tex="k<1" />.</li>
          </ul>
          <p className="mt-2 text-xs italic">Remarque : les mesures des angles de la figure restent inchangées.</p>
        </Callout>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">2. Exemple</p>
        <p className="mb-3 text-sm text-foreground-muted">Deux solides A et B semblables.</p>
        <Graph className="max-w-md">
          <svg viewBox="0 0 380 220" className="mx-auto h-auto w-full">
            <defs><marker id="arragr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed"/></marker></defs>
            <rect width="380" height="220" fill="white" rx="12"/>
            <polygon points="40,121.8 108.2,121.8 143.6,101.3 75.4,101.3" fill="#7c3aed" fillOpacity="0.16" stroke="#7c3aed" strokeWidth="1.8"/>
            <polygon points="40,121.8 108.2,121.8 108.2,190 40,190" fill="#7c3aed" fillOpacity="0.28" stroke="#7c3aed" strokeWidth="1.8"/>
            <polygon points="108.2,121.8 143.6,101.3 143.6,169.5 108.2,190" fill="#7c3aed" fillOpacity="0.4" stroke="#7c3aed" strokeWidth="1.8"/>
            <line x1="75.4" y1="101.3" x2="75.4" y2="169.5" stroke="#7c3aed" strokeWidth="1.1" strokeDasharray="2 2"/>
            <line x1="75.4" y1="169.5" x2="40" y2="190" stroke="#7c3aed" strokeWidth="1.1" strokeDasharray="2 2"/>
            <line x1="75.4" y1="169.5" x2="143.6" y2="169.5" stroke="#7c3aed" strokeWidth="1.1" strokeDasharray="2 2"/>
            <text x="82" y="215" fontSize="15" fontWeight="700" fill="#5b21b6" fontFamily="Lexend, sans-serif">A</text>
            <polygon points="300,157.4 317.6,157.4 326.7,152.1 309.1,152.1" fill="#7c3aed" fillOpacity="0.16" stroke="#7c3aed" strokeWidth="1.4"/>
            <polygon points="300,157.4 317.6,157.4 317.6,175 300,175" fill="#7c3aed" fillOpacity="0.28" stroke="#7c3aed" strokeWidth="1.4"/>
            <polygon points="317.6,157.4 326.7,152.1 326.7,169.7 317.6,175" fill="#7c3aed" fillOpacity="0.4" stroke="#7c3aed" strokeWidth="1.4"/>
            <text x="306" y="195" fontSize="15" fontWeight="700" fill="#5b21b6" fontFamily="Lexend, sans-serif">B</text>
            <path d="M150,105 Q225,65 296,150" fill="none" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arragr)"/>
            <text x="196" y="72" fontSize="14" fontWeight="700" fill="#7c3aed">× 1/4</text>
            <path d="M298,180 Q225,218 150,183" fill="none" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arragr)"/>
            <text x="205" y="212" fontSize="14" fontWeight="700" fill="#4f46e5">× 4</text>
          </svg>
        </Graph>
        <p className="mt-3 text-sm">
          Le solide A est un <strong>agrandissement</strong> du solide B de coefficient <Math tex="4" />.
        </p>
        <p className="mt-1 text-sm">
          Le solide B est une <strong>réduction</strong> du solide A de coefficient <Math tex="\dfrac14" />.
        </p>

        <p className="mt-6 mb-2 text-sm font-semibold text-foreground">3. Propriété</p>
        <Callout variant="info" title="Propriété">
          <p>
            Quand on agrandit ou on réduit une figure, si les dimensions (longueurs) sont multipliées par{" "}
            <Math tex="k" />, alors :
          </p>
          <ul className="mt-2 space-y-1 pl-1">
            <li>les <strong>aires</strong> sont multipliées par <Math tex="k^2" /> ;</li>
            <li>les <strong>volumes</strong> sont multipliés par <Math tex="k^3" />.</li>
          </ul>
        </Callout>

        <p className="mt-8 mb-1 text-lg font-bold text-foreground">4. Exemples résolus</p>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-mono text-xs font-semibold uppercase text-foreground-muted">Exemple 1 · Volume</p>
            <p className="mt-2">
              Un pavé a un volume <Math tex="V=125\text{ cm}^3" />. Ses dimensions sont multipliées par 2. Quel est le
              volume du pavé agrandi ?
            </p>
            <p className="mt-2"><Math tex="V'=125\times2^3=125\times8=1\,000\text{ cm}^3" /></p>
            <p className="mt-2 font-semibold text-green-700">Le volume du pavé agrandi est 1 000 cm³.</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-mono text-xs font-semibold uppercase text-foreground-muted">Exemple 2 · Échelle</p>
            <p className="mt-2">
              Un terrain d&apos;aire <Math tex="A=900\text{ m}^2" /> est représenté sur un plan à l&apos;échelle{" "}
              <Math tex="\dfrac{1}{2\,000}" />. Quelle est l&apos;aire du terrain sur le plan ?
            </p>
            <p className="mt-2"><Math tex="A'=900\times\left(\dfrac{1}{2\,000}\right)^{2}=\dfrac{900}{4\,000\,000}=0,000225\text{ m}^2" /></p>
            <p className="mt-2 font-semibold text-green-700">Sur le plan, l&apos;aire du terrain est 2,25 cm².</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-sm">
            <p className="font-mono text-xs font-semibold uppercase text-foreground-muted">Exemple 3 · Longueur</p>
            <p className="mt-2">
              Une pyramide <Math tex="SBCD" /> est une réduction d&apos;une pyramide <Math tex="SEFG" /> de coefficient{" "}
              <Math tex="\dfrac13" />. La hauteur de <Math tex="SEFG" /> mesure 3 cm. Calcule la hauteur de{" "}
              <Math tex="SBCD" />.
            </p>
            <p className="mt-2"><Math tex="h=\dfrac13\times3=1" /></p>
            <p className="mt-2 font-semibold text-green-700">D&apos;où : la hauteur de SBCD est 1 cm.</p>
          </div>
        </div>
      </LessonSection>

      {/* ===================== MÉMO ===================== */}
      <LessonSection
        id="memo"
        kicker="04 · Révision express"
        title="Points clés à retenir"
        tone="muted"
        description="Les trois fiches formulaires du chapitre, en un coup d'œil."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="font-display text-lg font-bold text-foreground">Droites & plans</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li>✔ <Math tex="(D)\parallel(P)" /> si <Math tex="(D)\subset(P)" /> ou si <Math tex="(D)\cap(P)=\varnothing" /></li>
              <li>✔ <Math tex="(D)\parallel(P)" /> s&apos;il existe <Math tex="(\Delta)\subset(P)" /> avec <Math tex="(\Delta)\parallel(D)" /></li>
              <li>✔ <Math tex="(D)\perp(P)" /> en A si (D) est orthogonale à 2 droites sécantes en A incluses dans (P)</li>
              <li>✔ <Math tex="(D)\perp(P)\Rightarrow(D)\perp" /> toute droite incluse dans (P)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <p className="font-display text-lg font-bold text-foreground">Aires & volumes</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground-muted">
              <li>✔ Carré <Math tex="a^2" /> · Rectangle <Math tex="a{\times}b" /> · Triangle <Math tex="\dfrac{ah}{2}" /></li>
              <li>✔ Losange <Math tex="\dfrac{d_1d_2}{2}" /> · Trapèze <Math tex="\dfrac{(a+b)h}{2}" /></li>
              <li>✔ Prisme <Math tex="B{\times}h" /> · Pyramide <Math tex="\dfrac{B\times h}{3}" /> (B = aire base)</li>
              <li>✔ Cylindre <Math tex="\pi r^2h" /> · Cône <Math tex="\dfrac{\pi r^2h}{3}" /> · Cube <Math tex="c^3" /></li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 lg:col-span-2">
            <p className="font-display text-lg font-bold text-foreground">Agrandissement & réduction</p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-foreground-muted sm:grid-cols-2">
              <li>✔ Coefficient <Math tex="k>1" /> : agrandissement</li>
              <li>✔ Coefficient <Math tex="k<1" /> : réduction</li>
              <li>✔ Longueurs ×k · angles inchangés</li>
              <li>✔ Aires ×k² · Volumes ×k³</li>
            </ul>
          </div>
        </div>

        <Callout variant="warning" title="Astuce">
          <p>
            Pour trouver le <strong>rapport de réduction</strong> entre deux solides emboîtés (section parallèle à la
            base d&apos;une pyramide, par exemple), compare deux longueurs correspondantes le long du même sommet :{" "}
            <Math tex="k=\dfrac{\text{nouvelle longueur}}{\text{longueur d'origine}}" />. Élève ensuite ce rapport au
            carré pour les aires, au cube pour les volumes.
          </p>
        </Callout>
      </LessonSection>

      {/* ===================== EXERCICES ===================== */}
      <LessonSection id="exercices" kicker="À toi de jouer" title="3 exercices corrigés" tone="muted"
        description="Cherche sur ton cahier, puis clique pour vérifier."
      >
        <ExerciseGroup total={3} celebrationTitle="Bravo, les 3 exercices sont vérifiés !" celebrationSubtitle="Tu maîtrises la géométrie dans l'espace.">
          <ExerciseCard
            id="1"
            index={1}
            title="Volume et réduction"
            items={
              <div className="text-sm">
                <p>
                  Pour la pyramide <Math tex="SABCD" /> ci-contre : la base est le rectangle <Math tex="ABCD" /> de
                  centre <Math tex="O" />. <Math tex="AB=3\text{ cm}" /> et <Math tex="BD=5\text{ cm}" />. La hauteur{" "}
                  <Math tex="[SO]" /> mesure 6 cm.
                </p>
                <Graph className="mt-4">
                  <svg viewBox="0 0 280 300" className="mx-auto h-auto w-full">
                    <rect width="280" height="300" fill="white" rx="12"/>
                    <line x1="162.1" y1="84.6" x2="162.1" y2="252.6" stroke="#cbd5e1" strokeWidth="1.3" strokeDasharray="3 3"/>
                    <line x1="90" y1="270" x2="150.1" y2="235.3" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="150.1" y1="235.3" x2="234.1" y2="235.3" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="162.1" y1="84.6" x2="150.1" y2="235.3" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="90" y1="270" x2="174" y2="270" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="174" y1="270" x2="234.1" y2="235.3" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="162.1" y1="84.6" x2="90" y2="270" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="162.1" y1="84.6" x2="174" y2="270" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="162.1" y1="84.6" x2="234.1" y2="235.3" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="198.1" y1="160" x2="156.1" y2="160" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 3"/>
                    <line x1="156.1" y1="160" x2="126" y2="177.3" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 3"/>
                    <line x1="126" y1="177.3" x2="168" y2="177.3" stroke="#4f46e5" strokeWidth="2.2"/>
                    <line x1="168" y1="177.3" x2="198.1" y2="160" stroke="#4f46e5" strokeWidth="2.2"/>
                    <circle cx="162.1" cy="252.6" r="3" fill="#1e293b"/>
                    <circle cx="162.1" cy="168.6" r="3" fill="#4f46e5"/>
                    <text x="72" y="288" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
                    <text x="178" y="288" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
                    <text x="239" y="232" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text>
                    <text x="128" y="230" fontSize="14" fontWeight="700" fontStyle="italic" fill="#475569">D</text>
                    <text x="168" y="266" fontSize="12" fontStyle="italic" fill="#1e293b">O</text>
                    <text x="145" y="60" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">S</text>
                    <text x="168" y="182" fontSize="12" fontWeight="700" fontStyle="italic" fill="#4f46e5">O&apos;</text>
                    <text x="106" y="192" fontSize="12" fontWeight="700" fontStyle="italic" fill="#4f46e5">A&apos;</text>
                    <text x="172" y="192" fontSize="12" fontWeight="700" fontStyle="italic" fill="#4f46e5">B&apos;</text>
                    <text x="200" y="155" fontSize="12" fontWeight="700" fontStyle="italic" fill="#4f46e5">C&apos;</text>
                    <text x="131" y="155" fontSize="12" fontWeight="700" fontStyle="italic" fill="#475569">D&apos;</text>
                  </svg>
                </Graph>
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>Montre que <Math tex="AD=4\text{ cm}" />.</li>
                  <li>Calcule le volume de la pyramide <Math tex="SABCD" /> en cm³.</li>
                  <li>
                    Soit <Math tex="O'" /> le milieu de <Math tex="[SO]" />. On coupe la pyramide par un plan passant
                    par <Math tex="O'" /> et parallèle à sa base.
                    <ol className="mt-1 list-[lower-alpha] space-y-1 pl-5">
                      <li>Quelle est la nature de la section <Math tex="A'B'C'D'" /> obtenue ?</li>
                      <li>La pyramide <Math tex="SA'B'C'D'" /> est une réduction de la pyramide <Math tex="SABCD" />. Donne le rapport de cette réduction.</li>
                      <li>Calcule le volume de la pyramide <Math tex="SA'B'C'D'" />.</li>
                    </ol>
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1) ABCD est un rectangle donc le triangle ABD est rectangle en A. D&apos;après Pythagore :</p>
                  <p><Math tex="BD^2=AB^2+AD^2 \;\Longrightarrow\; AD^2=BD^2-AB^2=5^2-3^2=25-9=16" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="AD=\sqrt{16}=4\text{ cm}" /></p>
                </div>
                <div>
                  <p className="font-semibold">2) L&apos;aire de la base ABCD et le volume de la pyramide :</p>
                  <p><Math tex="\text{Aire}(ABCD)=AB\times AD=3\times4=12\text{ cm}^2" /></p>
                  <p><Math tex="V_{SABCD}=\dfrac{\text{Aire}(ABCD)\times SO}{3}=\dfrac{12\times6}{3}=24\text{ cm}^3" /></p>
                </div>
                <p className="font-semibold">3a) Le plan de coupe est parallèle à la base ABCD, qui est un rectangle : la section A&apos;B&apos;C&apos;D&apos; obtenue est donc <strong>un rectangle</strong>.</p>
                <div>
                  <p className="font-semibold">3b) O&apos; est le milieu de [SO] donc SO&apos; = SO/2 = 3 cm. Le rapport de réduction est :</p>
                  <p><Math tex="k=\dfrac{SO'}{SO}=\dfrac{3}{6}=\dfrac12" /></p>
                </div>
                <div>
                  <p className="font-semibold">3c) Le volume est multiplié par k³ :</p>
                  <p><Math tex="V_{SA'B'C'D'}=V_{SABCD}\times k^3=24\times\left(\dfrac12\right)^{3}=24\times\dfrac18=3\text{ cm}^3" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="2"
            index={2}
            title="Droites de l'espace"
            items={
              <div className="text-sm">
                <p>
                  <Math tex="ABCDEFGH" /> est un parallélépipède rectangle. On donne <Math tex="AE=3\text{ m}" />,{" "}
                  <Math tex="AD=4\text{ m}" />, <Math tex="AB=6\text{ m}" />.
                </p>
                <Graph className="mt-4">
                  <svg viewBox="0 0 260 250" className="mx-auto h-auto w-full">
                    <rect width="260" height="250" fill="white" rx="12"/>
                    <line x1="40" y1="230" x2="73.6" y2="209" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="73.6" y1="209" x2="217.6" y2="209" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="73.6" y1="209" x2="73.6" y2="113" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="40" y1="134" x2="184" y2="134" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="184" y1="134" x2="184" y2="230" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="184" y1="230" x2="40" y2="230" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="40" y1="230" x2="40" y2="134" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="73.6" y1="113" x2="217.6" y2="113" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="217.6" y1="113" x2="217.6" y2="209" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="40" y1="134" x2="73.6" y2="113" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="184" y1="134" x2="217.6" y2="113" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="184" y1="230" x2="217.6" y2="209" stroke="#1e293b" strokeWidth="1.8"/>
                    <text x="103" y="127" fontSize="12" fill="#0f766e" fontWeight="700">6</text>
                    <text x="27" y="185" fontSize="12" fill="#0f766e" fontWeight="700">4</text>
                    <text x="52" y="119" fontSize="12" fill="#0f766e" fontWeight="700">3</text>
                    <text x="25" y="126" fontSize="13" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
                    <text x="189" y="126" fontSize="13" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
                    <text x="189" y="246" fontSize="13" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text>
                    <text x="25" y="246" fontSize="13" fontWeight="700" fontStyle="italic" fill="#1e293b">D</text>
                    <text x="58" y="105" fontSize="13" fontWeight="700" fontStyle="italic" fill="#1e293b">E</text>
                    <text x="221" y="105" fontSize="13" fontWeight="700" fontStyle="italic" fill="#1e293b">F</text>
                    <text x="221" y="203" fontSize="13" fontWeight="700" fontStyle="italic" fill="#475569">G</text>
                    <text x="53" y="203" fontSize="13" fontWeight="700" fontStyle="italic" fill="#475569">H</text>
                  </svg>
                </Graph>
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>
                    <ol className="list-[lower-alpha] space-y-1 pl-5">
                      <li>Que peut-on dire des droites <Math tex="(AE)" /> et <Math tex="(AB)" /> ? Justifie.</li>
                      <li>Les droites <Math tex="(EH)" /> et <Math tex="(AB)" /> sont-elles sécantes ?</li>
                    </ol>
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-1 pl-5">
                      <li>Calcule <Math tex="EG" />. On donnera la valeur exacte.</li>
                      <li>En considérant le triangle <Math tex="EGC" /> rectangle en <Math tex="G" />, calcule la valeur exacte de <Math tex="[EC]" />.</li>
                    </ol>
                  </li>
                  <li>Montre que le volume de <Math tex="ABCDEFGH" /> est égal à 72 m³.</li>
                  <li>Montre que l&apos;aire totale de <Math tex="ABCDEFGH" /> est égale à 108 m².</li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1a) ABCDEFGH est un parallélépipède rectangle : les arêtes [AE] et [AB] sont issues du même sommet A et toutes les faces sont des rectangles.</p>
                  <p className="font-semibold text-green-700">Donc (AE) et (AB) sont orthogonales : <Math tex="(AE)\perp(AB)" />.</p>
                </div>
                <div>
                  <p className="font-semibold">1b) (EH) est parallèle à (AD) (arêtes opposées d&apos;une même face), et (AD)⊥(AB). (EH) n&apos;est pas dans le même plan que (AB) et ces deux droites ne se coupent jamais.</p>
                  <p className="font-semibold text-green-700">Donc (EH) et (AB) ne sont pas sécantes : ce sont deux droites non coplanaires (gauches).</p>
                </div>
                <div>
                  <p className="font-semibold">2a) EFGH est un rectangle avec EF = AB = 6 m et FG = AD = 4 m. Le triangle EFG est rectangle en F :</p>
                  <p><Math tex="EG^2=EF^2+FG^2=6^2+4^2=36+16=52" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="EG=\sqrt{52}=2\sqrt{13}\text{ m}" /></p>
                </div>
                <div>
                  <p className="font-semibold">2b) GC = AE = 3 m (arêtes parallèles de même longueur). Le triangle EGC est rectangle en G :</p>
                  <p><Math tex="EC^2=EG^2+GC^2=52+3^2=52+9=61" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="EC=\sqrt{61}\text{ m}" /></p>
                </div>
                <div>
                  <p className="font-semibold">3) Le volume d&apos;un pavé droit est V = L × l × h :</p>
                  <p><Math tex="V=AB\times AD\times AE=6\times4\times3=72\text{ m}^3" /></p>
                </div>
                <div>
                  <p className="font-semibold">4) ABCDEFGH a 3 paires de faces rectangulaires opposées et identiques :</p>
                  <p><Math tex="\mathcal{A}=2\times(AB\times AD+AB\times AE+AD\times AE)=2\times(24+18+12)=2\times54=108\text{ m}^2" /></p>
                </div>
              </div>
            }
          />

          <ExerciseCard
            id="3"
            index={3}
            title="Section parallèle et réduction"
            items={
              <div className="text-sm">
                <p>
                  Sur la figure ci-dessous, <Math tex="SABCD" /> est une pyramide à base carrée de hauteur{" "}
                  <Math tex="[SA]" /> telle que <Math tex="AB=9\text{ cm}" /> et <Math tex="SA=12\text{ cm}" />. Le
                  triangle <Math tex="SAB" /> est rectangle en <Math tex="A" />. <Math tex="EFGH" /> est la section de
                  la pyramide <Math tex="SABCD" /> par le plan parallèle à la base et telle que <Math tex="SE=3\text{ cm}" />.
                </p>
                <Graph className="mt-4 max-w-md">
                  <svg viewBox="0 0 440 300" className="mx-auto h-auto w-full">
                    <rect width="440" height="300" fill="white" rx="12"/>
                    <line x1="170" y1="280" x2="251.1" y2="236.9" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="251.1" y1="236.9" x2="404.1" y2="236.9" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="170" y1="76" x2="251.1" y2="236.9" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4 3"/>
                    <line x1="228.5" y1="116.2" x2="190.3" y2="116.2" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3"/>
                    <line x1="190.3" y1="116.2" x2="170" y2="127" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="3 3"/>
                    <line x1="170" y1="280" x2="323" y2="280" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="323" y1="280" x2="404.1" y2="236.9" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="170" y1="76" x2="170" y2="280" stroke="#1e293b" strokeWidth="2"/>
                    <line x1="170" y1="76" x2="323" y2="280" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="170" y1="76" x2="404.1" y2="236.9" stroke="#1e293b" strokeWidth="1.8"/>
                    <line x1="170" y1="127" x2="208.2" y2="127" stroke="#0d9488" strokeWidth="2.2"/>
                    <line x1="208.2" y1="127" x2="228.5" y2="116.2" stroke="#0d9488" strokeWidth="2.2"/>
                    <path d="M170,266 L184,266 L184,280" fill="none" stroke="#1e293b" strokeWidth="1.5"/>
                    <text x="153" y="66" fontSize="15" fontWeight="700" fontStyle="italic" fill="#1e293b">S</text>
                    <text x="152" y="298" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">A</text>
                    <text x="327" y="298" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">B</text>
                    <text x="409" y="233" fontSize="14" fontWeight="700" fontStyle="italic" fill="#1e293b">C</text>
                    <text x="230" y="233" fontSize="14" fontWeight="700" fontStyle="italic" fill="#475569">D</text>
                    <text x="150" y="140" fontSize="12" fontWeight="700" fontStyle="italic" fill="#0d9488">E</text>
                    <text x="212" y="121" fontSize="12" fontWeight="700" fontStyle="italic" fill="#0d9488">F</text>
                    <text x="233" y="112" fontSize="12" fontWeight="700" fontStyle="italic" fill="#0d9488">G</text>
                    <text x="194" y="112" fontSize="12" fontWeight="700" fontStyle="italic" fill="#64748b">H</text>
                  </svg>
                </Graph>
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>
                    <ol className="list-[lower-alpha] space-y-1 pl-5">
                      <li>Calcule <Math tex="EF" />.</li>
                      <li>Calcule <Math tex="SB" />.</li>
                    </ol>
                  </li>
                  <li>
                    <ol className="list-[lower-alpha] space-y-1 pl-5">
                      <li>Calcule le volume de la pyramide <Math tex="SABCD" />.</li>
                      <li>Donne le coefficient de réduction permettant de passer de <Math tex="SABCD" /> à <Math tex="SEFGH" />.</li>
                      <li>Déduis-en le volume de <Math tex="SEFGH" />. On donnera une valeur arrondie à l&apos;unité.</li>
                    </ol>
                  </li>
                </ol>
              </div>
            }
            correction={
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">1a) La section EFGH est une réduction de la base ABCD de rapport k = SE/SA :</p>
                  <p><Math tex="k=\dfrac{SE}{SA}=\dfrac{3}{12}=\dfrac14 \quad\Longrightarrow\quad EF=k\times AB=\dfrac14\times9=2,25\text{ cm}" /></p>
                </div>
                <div>
                  <p className="font-semibold">1b) Le triangle SAB est rectangle en A. D&apos;après Pythagore :</p>
                  <p><Math tex="SB^2=SA^2+AB^2=12^2+9^2=144+81=225" /></p>
                  <p className="font-semibold text-green-700">D&apos;où : <Math tex="SB=\sqrt{225}=15\text{ cm}" /></p>
                </div>
                <div>
                  <p className="font-semibold">2a) La base ABCD est un carré de côté 9 cm, et [SA] est la hauteur de la pyramide :</p>
                  <p><Math tex="\text{Aire}(ABCD)=AB^2=9^2=81\text{ cm}^2" /></p>
                  <p><Math tex="V_{SABCD}=\dfrac{\text{Aire}(ABCD)\times SA}{3}=\dfrac{81\times12}{3}=324\text{ cm}^3" /></p>
                </div>
                <div>
                  <p className="font-semibold">2b) Le coefficient de réduction de SABCD vers SEFGH est :</p>
                  <p><Math tex="k=\dfrac{SE}{SA}=\dfrac{3}{12}=\dfrac14" /></p>
                </div>
                <div>
                  <p className="font-semibold">2c) Le volume est multiplié par k³ :</p>
                  <p><Math tex="V_{SEFGH}=V_{SABCD}\times k^3=324\times\left(\dfrac14\right)^{3}=\dfrac{324}{64}=5,0625\text{ cm}^3" /></p>
                  <p className="font-semibold text-green-700">Valeur arrondie à l&apos;unité : <Math tex="V_{SEFGH}\approx5\text{ cm}^3" /></p>
                </div>
              </div>
            }
          />
        </ExerciseGroup>
      </LessonSection>
    </LessonShell>
  );
}
